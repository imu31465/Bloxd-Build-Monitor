export const id = 298;
export const ids = [298];
export const modules = {
  41721: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => cb,
      f: () => ib,
      i: () => rb,
      j: () => UG,
      l: () => lb,
      m: () => YG,
      o: () => fb
    });
    var wG = ZG(41727),
      SG = ZG(41735),
      LG = ZG(41754);
    class yG {
      constructor(GG, bG, ZG, wG) {
        this.state = GG, this.pos = bG, this.explicit = ZG, this.view = wG, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(GG) {
        let bG = (0, LG.gb)(this.state).resolveInner(this.pos, -1);
        for (; bG && GG.indexOf(bG.name) < 0;) bG = bG.parent;
        return bG ? {
          from: bG.from,
          to: this.pos,
          text: this.state.sliceDoc(bG.from, this.pos),
          type: bG.type
        } : null
      }
      matchBefore(GG) {
        let bG = this.state.doc.lineAt(this.pos),
          ZG = Math.max(bG.from, this.pos - 250),
          wG = bG.text.slice(ZG - bG.from, this.pos - bG.from),
          SG = wG.search(fG(GG, !1));
        return SG < 0 ? null : {
          from: ZG + SG,
          to: this.pos,
          text: wG.slice(SG)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(GG, bG, ZG) {
        "abort" == GG && this.abortListeners && (this.abortListeners.push(bG), ZG && ZG.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function kG(GG) {
      let bG = Object.keys(GG).join(""),
        ZG = /\w/.test(bG);
      return ZG && (bG = bG.replace(/\w/g, "")), `[${ZG?"\\w":""}${bG.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function UG(GG) {
      let bG = GG.map((GG => "string" == typeof GG ? {
          label: GG
        } : GG)),
        [ZG, wG] = bG.every((GG => /^\w+$/.test(GG.label))) ? [/\w*$/, /\w+$/] : function(GG) {
          let bG = Object.create(null),
            ZG = Object.create(null);
          for (let {
              label: SG
            }
            of GG) {
            bG[SG[0]] = !0;
            for (let GG = 1; GG < SG.length; GG++) ZG[SG[GG]] = !0
          }
          let wG = kG(bG) + kG(ZG) + "*$";
          return [new RegExp("^" + wG), new RegExp(wG)]
        }(bG);
      return GG => {
        let SG = GG.matchBefore(wG);
        return SG || GG.explicit ? {
          from: SG ? SG.from : GG.pos,
          options: bG,
          validFor: ZG
        } : null
      }
    }

    function YG(GG, bG) {
      return ZG => {
        for (let bG = (0, LG.gb)(ZG.state).resolveInner(ZG.pos, -1); bG; bG = bG.parent) {
          if (GG.indexOf(bG.name) > -1) return null;
          if (bG.type.isTop) break
        }
        return bG(ZG)
      }
    }
    class VG {
      constructor(GG, bG, ZG, wG) {
        this.completion = GG, this.source = bG, this.match = ZG, this.score = wG
      }
    }

    function pG(GG) {
      return GG.selection.main.from
    }

    function fG(GG, bG) {
      var ZG;
      let {
        source: wG
      } = GG, SG = bG && "^" != wG[0], LG = "$" != wG[wG.length - 1];
      return SG || LG ? new RegExp(`${SG?"^":""}(?:${wG})${LG?"$":""}`, null !== (ZG = GG.flags) && void 0 !== ZG ? ZG : GG.ignoreCase ? "i" : "") : GG
    }
    const QG = wG.c.define();

    function KG(GG, bG, ZG, SG) {
      let {
        main: LG
      } = GG.selection, yG = ZG - LG.from, kG = SG - LG.from;
      return {
        ...GG.changeByRange((UG => {
          if (UG != LG && ZG != SG && GG.sliceDoc(UG.from + yG, UG.from + kG) != GG.sliceDoc(ZG, SG)) return {
            range: UG
          };
          let YG = GG.toText(bG);
          return {
            changes: {
              from: UG.from + yG,
              to: SG == LG.from ? UG.to : UG.from + kG,
              insert: YG
            },
            range: wG.j.cursor(UG.from + yG + YG.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const hG = new WeakMap;

    function dG(GG) {
      if (!Array.isArray(GG)) return GG;
      let bG = hG.get(GG);
      return bG || hG.set(GG, bG = UG(GG)), bG
    }
    const JG = wG.C.define(),
      rG = wG.C.define();
    class zG {
      constructor(GG) {
        this.pattern = GG, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let bG = 0; bG < GG.length;) {
          let ZG = (0, wG.Q)(GG, bG),
            SG = (0, wG.R)(ZG);
          this.chars.push(ZG);
          let LG = GG.slice(bG, bG + SG),
            yG = LG.toUpperCase();
          this.folded.push((0, wG.Q)(yG == LG ? LG.toLowerCase() : yG, 0)), bG += SG
        }
        this.astral = GG.length != this.chars.length
      }
      ret(GG, bG) {
        return this.score = GG, this.matched = bG, this
      }
      match(GG) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (GG.length < this.pattern.length) return null;
        let {
          chars: bG,
          folded: ZG,
          any: SG,
          precise: LG,
          byWord: yG
        } = this;
        if (1 == bG.length) {
          let SG = (0, wG.Q)(GG, 0),
            LG = (0, wG.R)(SG),
            yG = LG == GG.length ? 0 : -100;
          if (SG == bG[0]);
          else {
            if (SG != ZG[0]) return null;
            yG += -200
          }
          return this.ret(yG, [0, LG])
        }
        let kG = GG.indexOf(this.pattern);
        if (0 == kG) return this.ret(GG.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let UG = bG.length,
          YG = 0;
        if (kG < 0) {
          for (let LG = 0, yG = Math.min(GG.length, 200); LG < yG && YG < UG;) {
            let yG = (0, wG.Q)(GG, LG);
            yG != bG[YG] && yG != ZG[YG] || (SG[YG++] = LG), LG += (0, wG.R)(yG)
          }
          if (YG < UG) return null
        }
        let VG = 0,
          pG = 0,
          fG = !1,
          QG = 0,
          KG = -1,
          hG = -1,
          dG = /[a-z]/.test(GG),
          JG = !0;
        for (let rG = 0, zG = Math.min(GG.length, 200), EG = 0; rG < zG && pG < UG;) {
          let SG = (0, wG.Q)(GG, rG);
          kG < 0 && (VG < UG && SG == bG[VG] && (LG[VG++] = rG), QG < UG && (SG == bG[QG] || SG == ZG[QG] ? (0 == QG && (KG = rG), hG = rG + 1, QG++) : QG = 0));
          let YG, zG = SG < 255 ? SG >= 48 && SG <= 57 || SG >= 97 && SG <= 122 ? 2 : SG >= 65 && SG <= 90 ? 1 : 0 : (YG = (0, wG.cb)(SG)) != YG.toLowerCase() ? 1 : YG != YG.toUpperCase() ? 2 : 0;
          (!rG || 1 == zG && dG || 0 == EG && 0 != zG) && (bG[pG] == SG || ZG[pG] == SG && (fG = !0) ? yG[pG++] = rG : yG.length && (JG = !1)), EG = zG, rG += (0, wG.R)(SG)
        }
        return pG == UG && 0 == yG[0] && JG ? this.result((fG ? -200 : 0) - 100, yG, GG) : QG == UG && 0 == KG ? this.ret(-200 - GG.length + (hG == GG.length ? 0 : -100), [0, hG]) : kG > -1 ? this.ret(-700 - GG.length, [kG, kG + this.pattern.length]) : QG == UG ? this.ret(-900 - GG.length, [KG, hG]) : pG == UG ? this.result((fG ? -200 : 0) - 100 - 700 + (JG ? 0 : -1100), yG, GG) : 2 == bG.length ? null : this.result((SG[0] ? -700 : 0) - 200 - 1100, SG, GG)
      }
      result(GG, bG, ZG) {
        let SG = [],
          LG = 0;
        for (let yG of bG) {
          let GG = yG + (this.astral ? (0, wG.R)((0, wG.Q)(ZG, yG)) : 1);
          LG && SG[LG - 1] == yG ? SG[LG - 1] = GG : (SG[LG++] = yG, SG[LG++] = GG)
        }
        return this.ret(GG - ZG.length, SG)
      }
    }
    class EG {
      constructor(GG) {
        this.pattern = GG, this.matched = [], this.score = 0, this.folded = GG.toLowerCase()
      }
      match(GG) {
        if (GG.length < this.pattern.length) return null;
        let bG = GG.slice(0, this.pattern.length),
          ZG = bG == this.pattern ? 0 : bG.toLowerCase() == this.folded ? -200 : null;
        return null == ZG ? null : (this.matched = [0, bG.length], this.score = ZG + (GG.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const oG = wG.m.define({
      combine: GG => (0, wG.S)(GG, {
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
        positionInfo: uG,
        filterStrict: !1,
        compareCompletions: (GG, bG) => (GG.sortText || GG.label).localeCompare(bG.sortText || bG.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (GG, bG) => GG && bG,
        closeOnBlur: (GG, bG) => GG && bG,
        icons: (GG, bG) => GG && bG,
        tooltipClass: (GG, bG) => ZG => XG(GG(ZG), bG(ZG)),
        optionClass: (GG, bG) => ZG => XG(GG(ZG), bG(ZG)),
        addToOptions: (GG, bG) => GG.concat(bG),
        filterStrict: (GG, bG) => GG || bG
      })
    });

    function XG(GG, bG) {
      return GG ? bG ? GG + " " + bG : GG : bG
    }

    function uG(GG, bG, ZG, wG, LG, yG) {
      let kG, UG, YG = GG.textDirection == SG.d.RTL,
        VG = YG,
        pG = !1,
        fG = "top",
        QG = bG.left - LG.left,
        KG = LG.right - bG.right,
        hG = wG.right - wG.left,
        dG = wG.bottom - wG.top;
      if (VG && QG < Math.min(hG, KG) ? VG = !1 : !VG && KG < Math.min(hG, QG) && (VG = !0), hG <= (VG ? QG : KG)) kG = Math.max(LG.top, Math.min(ZG.top, LG.bottom - dG)) - bG.top, UG = Math.min(400, VG ? QG : KG);
      else {
        pG = !0, UG = Math.min(400, (YG ? bG.right : LG.right - bG.left) - 30);
        let GG = LG.bottom - bG.bottom;
        GG >= dG || GG > bG.top ? kG = ZG.bottom - bG.top : (fG = "bottom", kG = bG.bottom - ZG.top)
      }
      return {
        style: `${fG}: ${kG/((bG.bottom-bG.top)/yG.offsetHeight)}px; max-width: ${UG/((bG.right-bG.left)/yG.offsetWidth)}px`,
        class: "cm-completionInfo-" + (pG ? YG ? "left-narrow" : "right-narrow" : VG ? "left" : "right")
      }
    }
    const iG = wG.C.define();

    function CG(GG, bG, ZG) {
      if (GG <= ZG) return {
        from: 0,
        to: GG
      };
      if (bG < 0 && (bG = 0), bG <= GG >> 1) {
        let GG = Math.floor(bG / ZG);
        return {
          from: GG * ZG,
          to: (GG + 1) * ZG
        }
      }
      let wG = Math.floor((GG - bG) / ZG);
      return {
        from: GG - (wG + 1) * ZG,
        to: GG - wG * ZG
      }
    }
    class WG {
      constructor(GG, bG, ZG) {
        this.view = GG, this.stateField = bG, this.applyCompletion = ZG, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: GG => this.placeInfo(GG),
          key: this
        }, this.space = null, this.currentClass = "";
        let wG = GG.state.field(bG),
          {
            options: SG,
            selected: LG
          } = wG.open,
          yG = GG.state.facet(oG);
        this.optionContent = function(GG) {
          let bG = GG.addToOptions.slice();
          return GG.icons && bG.push({
            render(GG) {
              let bG = document.createElement("div");
              return bG.classList.add("cm-completionIcon"), GG.type && bG.classList.add(...GG.type.split(/\s+/g).map((GG => "cm-completionIcon-" + GG))), bG.setAttribute("aria-hidden", "true"), bG
            },
            position: 20
          }), bG.push({
            render(GG, bG, ZG, wG) {
              let SG = document.createElement("span");
              SG.className = "cm-completionLabel";
              let LG = GG.displayLabel || GG.label,
                yG = 0;
              for (let kG = 0; kG < wG.length;) {
                let GG = wG[kG++],
                  bG = wG[kG++];
                GG > yG && SG.appendChild(document.createTextNode(LG.slice(yG, GG)));
                let ZG = SG.appendChild(document.createElement("span"));
                ZG.appendChild(document.createTextNode(LG.slice(GG, bG))), ZG.className = "cm-completionMatchedText", yG = bG
              }
              return yG < LG.length && SG.appendChild(document.createTextNode(LG.slice(yG))), SG
            },
            position: 50
          }, {
            render(GG) {
              if (!GG.detail) return null;
              let bG = document.createElement("span");
              return bG.className = "cm-completionDetail", bG.textContent = GG.detail, bG
            },
            position: 80
          }), bG.sort(((GG, bG) => GG.position - bG.position)).map((GG => GG.render))
        }(yG), this.optionClass = yG.optionClass, this.tooltipClass = yG.tooltipClass, this.range = CG(SG.length, LG, yG.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(GG.state), this.dom.addEventListener("mousedown", (ZG => {
          let {
            options: wG
          } = GG.state.field(bG).open;
          for (let bG, SG = ZG.target; SG && SG != this.dom; SG = SG.parentNode)
            if ("LI" == SG.nodeName && (bG = /-(\d+)$/.exec(SG.id)) && +bG[1] < wG.length) return this.applyCompletion(GG, wG[+bG[1]]), void ZG.preventDefault();
          if (ZG.target == this.list) {
            let bG = this.list.classList.contains("cm-completionListIncompleteTop") && ZG.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && ZG.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != bG && (GG.dispatch({
              effects: iG.of(bG)
            }), ZG.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (bG => {
          let ZG = GG.state.field(this.stateField, !1);
          ZG && ZG.tooltip && GG.state.facet(oG).closeOnBlur && bG.relatedTarget != GG.contentDOM && GG.dispatch({
            effects: rG.of(null)
          })
        })), this.showOptions(SG, wG.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(GG, bG) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(GG, bG, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(GG) {
        var bG;
        let ZG = GG.state.field(this.stateField),
          wG = GG.startState.field(this.stateField);
        if (this.updateTooltipClass(GG.state), ZG != wG) {
          let {
            options: SG,
            selected: LG,
            disabled: yG
          } = ZG.open;
          wG.open && wG.open.options == SG || (this.range = CG(SG.length, LG, GG.state.facet(oG).maxRenderedOptions), this.showOptions(SG, ZG.id)), this.updateSel(), yG != (null === (bG = wG.open) || void 0 === bG ? void 0 : bG.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!yG)
        }
      }
      updateTooltipClass(GG) {
        let bG = this.tooltipClass(GG);
        if (bG != this.currentClass) {
          for (let GG of this.currentClass.split(" ")) GG && this.dom.classList.remove(GG);
          for (let GG of bG.split(" ")) GG && this.dom.classList.add(GG);
          this.currentClass = bG
        }
      }
      positioned(GG) {
        this.space = GG, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let GG = this.view.state.field(this.stateField),
          bG = GG.open;
        (bG.selected > -1 && bG.selected < this.range.from || bG.selected >= this.range.to) && (this.range = CG(bG.options.length, bG.selected, this.view.state.facet(oG).maxRenderedOptions), this.showOptions(bG.options, GG.id));
        let ZG = this.updateSelectedOption(bG.selected);
        if (ZG) {
          this.destroyInfo();
          let {
            completion: wG
          } = bG.options[bG.selected], {
            info: LG
          } = wG;
          if (!LG) return;
          let yG = "string" === typeof LG ? document.createTextNode(LG) : LG(wG);
          if (!yG) return;
          "then" in yG ? yG.then((bG => {
            bG && this.view.state.field(this.stateField, !1) == GG && this.addInfoPane(bG, wG)
          })).catch((GG => (0, SG.W)(this.view.state, GG, "completion info"))) : (this.addInfoPane(yG, wG), ZG.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(GG, bG) {
        this.destroyInfo();
        let ZG = this.info = document.createElement("div");
        if (ZG.className = "cm-tooltip cm-completionInfo", ZG.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != GG.nodeType) ZG.appendChild(GG), this.infoDestroy = null;
        else {
          let {
            dom: bG,
            destroy: wG
          } = GG;
          ZG.appendChild(bG), this.infoDestroy = wG || null
        }
        this.dom.appendChild(ZG), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(GG) {
        let bG = null;
        for (let ZG = this.list.firstChild, wG = this.range.from; ZG; ZG = ZG.nextSibling, wG++) "LI" == ZG.nodeName && ZG.id ? wG == GG ? ZG.hasAttribute("aria-selected") || (ZG.setAttribute("aria-selected", "true"), bG = ZG) : ZG.hasAttribute("aria-selected") && (ZG.removeAttribute("aria-selected"), ZG.removeAttribute("aria-describedby")) : wG--;
        return bG && function(GG, bG) {
          let ZG = GG.getBoundingClientRect(),
            wG = bG.getBoundingClientRect(),
            SG = ZG.height / GG.offsetHeight;
          wG.top < ZG.top ? GG.scrollTop -= (ZG.top - wG.top) / SG : wG.bottom > ZG.bottom && (GG.scrollTop += (wG.bottom - ZG.bottom) / SG)
        }(this.list, bG), bG
      }
      measureInfo() {
        let GG = this.dom.querySelector("[aria-selected]");
        if (!GG || !this.info) return null;
        let bG = this.dom.getBoundingClientRect(),
          ZG = this.info.getBoundingClientRect(),
          wG = GG.getBoundingClientRect(),
          SG = this.space;
        if (!SG) {
          let GG = this.dom.ownerDocument.documentElement;
          SG = {
            left: 0,
            top: 0,
            right: GG.clientWidth,
            bottom: GG.clientHeight
          }
        }
        return wG.top > Math.min(SG.bottom, bG.bottom) - 10 || wG.bottom < Math.max(SG.top, bG.top) + 10 ? null : this.view.state.facet(oG).positionInfo(this.view, bG, wG, ZG, SG, this.dom)
      }
      placeInfo(GG) {
        this.info && (GG ? (GG.style && (this.info.style.cssText = GG.style), this.info.className = "cm-tooltip cm-completionInfo " + (GG.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(GG, bG, ZG) {
        const wG = document.createElement("ul");
        wG.id = bG, wG.setAttribute("role", "listbox"), wG.setAttribute("aria-expanded", "true"), wG.setAttribute("aria-label", this.view.state.phrase("Completions")), wG.addEventListener("mousedown", (GG => {
          GG.target == wG && GG.preventDefault()
        }));
        let SG = null;
        for (let LG = ZG.from; LG < ZG.to; LG++) {
          let {
            completion: yG,
            match: kG
          } = GG[LG], {
            section: UG
          } = yG;
          if (UG) {
            let GG = "string" == typeof UG ? UG : UG.name;
            if (GG != SG && (LG > ZG.from || 0 == ZG.from))
              if (SG = GG, "string" != typeof UG && UG.header) wG.appendChild(UG.header(UG));
              else {
                wG.appendChild(document.createElement("completion-section")).textContent = GG
              }
          }
          const YG = wG.appendChild(document.createElement("li"));
          YG.id = bG + "-" + LG, YG.setAttribute("role", "option");
          let VG = this.optionClass(yG);
          VG && (YG.className = VG);
          for (let GG of this.optionContent) {
            let bG = GG(yG, this.view.state, this.view, kG);
            bG && YG.appendChild(bG)
          }
        }
        return ZG.from && wG.classList.add("cm-completionListIncompleteTop"), ZG.to < GG.length && wG.classList.add("cm-completionListIncompleteBottom"), wG
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function mG(GG, bG) {
      return ZG => new WG(ZG, GG, bG)
    }

    function IG(GG) {
      return 100 * (GG.boost || 0) + (GG.apply ? 10 : 0) + (GG.info ? 5 : 0) + (GG.type ? 1 : 0)
    }
    class FG {
      constructor(GG, bG, ZG, wG, SG, LG) {
        this.options = GG, this.attrs = bG, this.tooltip = ZG, this.timestamp = wG, this.selected = SG, this.disabled = LG
      }
      setSelected(GG, bG) {
        return GG == this.selected || GG >= this.options.length ? this : new FG(this.options, lG(bG, GG), this.tooltip, this.timestamp, GG, this.disabled)
      }
      static build(GG, bG, ZG, wG, SG, LG) {
        if (wG && !LG && GG.some((GG => GG.isPending))) return wG.setDisabled();
        let yG = function(GG, bG) {
          let ZG = [],
            wG = null,
            SG = null,
            LG = GG => {
              ZG.push(GG);
              let {
                section: bG
              } = GG.completion;
              if (bG) {
                wG || (wG = []);
                let GG = "string" == typeof bG ? bG : bG.name;
                wG.some((bG => bG.name == GG)) || wG.push("string" == typeof bG ? {
                  name: GG
                } : bG)
              }
            },
            yG = bG.facet(oG);
          for (let pG of GG)
            if (pG.hasResult()) {
              let GG = pG.result.getMatch;
              if (!1 === pG.result.filter)
                for (let bG of pG.result.options) LG(new VG(bG, pG.source, GG ? GG(bG) : [], 1e9 - ZG.length));
              else {
                let ZG, wG = bG.sliceDoc(pG.from, pG.to),
                  kG = yG.filterStrict ? new EG(wG) : new zG(wG);
                for (let bG of pG.result.options)
                  if (ZG = kG.match(bG.label)) {
                    let wG = bG.displayLabel ? GG ? GG(bG, ZG.matched) : [] : ZG.matched,
                      yG = ZG.score + (bG.boost || 0);
                    if (LG(new VG(bG, pG.source, wG, yG)), "object" == typeof bG.section && "dynamic" === bG.section.rank) {
                      let {
                        name: GG
                      } = bG.section;
                      SG || (SG = Object.create(null)), SG[GG] = Math.max(yG, SG[GG] || -1e9)
                    }
                  }
              }
            } if (wG) {
            let GG = Object.create(null),
              bG = 0,
              LG = (GG, bG) => ("dynamic" === GG.rank && "dynamic" === bG.rank ? SG[bG.name] - SG[GG.name] : 0) || ("number" == typeof GG.rank ? GG.rank : 1e9) - ("number" == typeof bG.rank ? bG.rank : 1e9) || (GG.name < bG.name ? -1 : 1);
            for (let ZG of wG.sort(LG)) bG -= 1e5, GG[ZG.name] = bG;
            for (let wG of ZG) {
              let {
                section: bG
              } = wG.completion;
              bG && (wG.score += GG["string" == typeof bG ? bG : bG.name])
            }
          }
          let kG = [],
            UG = null,
            YG = yG.compareCompletions;
          for (let VG of ZG.sort(((GG, bG) => bG.score - GG.score || YG(GG.completion, bG.completion)))) {
            let GG = VG.completion;
            !UG || UG.label != GG.label || UG.detail != GG.detail || null != UG.type && null != GG.type && UG.type != GG.type || UG.apply != GG.apply || UG.boost != GG.boost ? kG.push(VG) : IG(VG.completion) > IG(UG) && (kG[kG.length - 1] = VG), UG = VG.completion
          }
          return kG
        }(GG, bG);
        if (!yG.length) return wG && GG.some((GG => GG.isPending)) ? wG.setDisabled() : null;
        let kG = bG.facet(oG).selectOnOpen ? 0 : -1;
        if (wG && wG.selected != kG && -1 != wG.selected) {
          let GG = wG.options[wG.selected].completion;
          for (let bG = 0; bG < yG.length; bG++)
            if (yG[bG].completion == GG) {
              kG = bG;
              break
            }
        }
        return new FG(yG, lG(ZG, kG), {
          pos: GG.reduce(((GG, bG) => bG.hasResult() ? Math.min(GG, bG.from) : GG), 1e8),
          create: gG,
          above: SG.aboveCursor
        }, wG ? wG.timestamp : Date.now(), kG, !1)
      }
      map(GG) {
        return new FG(this.options, this.attrs, {
          ...this.tooltip,
          pos: GG.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new FG(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class vG {
      constructor(GG, bG, ZG) {
        this.active = GG, this.id = bG, this.open = ZG
      }
      static start() {
        return new vG(jG, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(GG) {
        let {
          state: bG
        } = GG, ZG = bG.facet(oG), wG = (ZG.override || bG.languageDataAt("autocomplete", pG(bG)).map(dG)).map((bG => (this.active.find((GG => GG.source == bG)) || new MG(bG, this.active.some((GG => 0 != GG.state)) ? 1 : 0)).update(GG, ZG)));
        wG.length == this.active.length && wG.every(((GG, bG) => GG == this.active[bG])) && (wG = this.active);
        let SG = this.open,
          LG = GG.effects.some((GG => GG.is(sG)));
        SG && GG.docChanged && (SG = SG.map(GG.changes)), GG.selection || wG.some((bG => bG.hasResult() && GG.changes.touchesRange(bG.from, bG.to))) || ! function(GG, bG) {
          if (GG == bG) return !0;
          for (let ZG = 0, wG = 0;;) {
            for (; ZG < GG.length && !GG[ZG].hasResult();) ZG++;
            for (; wG < bG.length && !bG[wG].hasResult();) wG++;
            let SG = ZG == GG.length,
              LG = wG == bG.length;
            if (SG || LG) return SG == LG;
            if (GG[ZG++].result != bG[wG++].result) return !1
          }
        }(wG, this.active) || LG ? SG = FG.build(wG, bG, this.id, SG, ZG, LG) : SG && SG.disabled && !wG.some((GG => GG.isPending)) && (SG = null), !SG && wG.every((GG => !GG.isPending)) && wG.some((GG => GG.hasResult())) && (wG = wG.map((GG => GG.hasResult() ? new MG(GG.source, 0) : GG)));
        for (let yG of GG.effects) yG.is(iG) && (SG = SG && SG.setSelected(yG.value, this.id));
        return wG == this.active && SG == this.open ? this : new vG(wG, this.id, SG)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? aG : cG
      }
    }
    const aG = {
        "aria-autocomplete": "list"
      },
      cG = {};

    function lG(GG, bG) {
      let ZG = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": GG
      };
      return bG > -1 && (ZG["aria-activedescendant"] = GG + "-" + bG), ZG
    }
    const jG = [];

    function PG(GG, bG) {
      if (GG.isUserEvent("input.complete")) {
        let ZG = GG.annotation(QG);
        if (ZG && bG.activateOnCompletion(ZG)) return 12
      }
      let ZG = GG.isUserEvent("input.type");
      return ZG && bG.activateOnTyping ? 5 : ZG ? 1 : GG.isUserEvent("delete.backward") ? 2 : GG.selection ? 8 : GG.docChanged ? 16 : 0
    }
    class MG {
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = GG, this.state = bG, this.explicit = ZG
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(GG, bG) {
        let ZG = PG(GG, bG),
          wG = this;
        (8 & ZG || 16 & ZG && this.touches(GG)) && (wG = new MG(wG.source, 0)), 4 & ZG && 0 == wG.state && (wG = new MG(this.source, 1)), wG = wG.updateFor(GG, ZG);
        for (let SG of GG.effects)
          if (SG.is(JG)) wG = new MG(wG.source, 1, SG.value);
          else if (SG.is(rG)) wG = new MG(wG.source, 0);
        else if (SG.is(sG))
          for (let GG of SG.value) GG.source == wG.source && (wG = GG);
        return wG
      }
      updateFor(GG, bG) {
        return this.map(GG.changes)
      }
      map(GG) {
        return this
      }
      touches(GG) {
        return GG.changes.touchesRange(pG(GG.state))
      }
    }
    class AG extends MG {
      constructor(GG, bG, ZG, wG, SG, LG) {
        super(GG, 3, bG), this.limit = ZG, this.result = wG, this.from = SG, this.to = LG
      }
      hasResult() {
        return !0
      }
      updateFor(GG, bG) {
        var ZG;
        if (!(3 & bG)) return this.map(GG.changes);
        let wG = this.result;
        wG.map && !GG.changes.empty && (wG = wG.map(wG, GG.changes));
        let SG = GG.changes.mapPos(this.from),
          LG = GG.changes.mapPos(this.to, 1),
          kG = pG(GG.state);
        if (kG > LG || !wG || 2 & bG && (pG(GG.startState) == this.from || kG < this.limit)) return new MG(this.source, 4 & bG ? 1 : 0);
        let UG = GG.changes.mapPos(this.limit);
        return function(GG, bG, ZG, wG) {
          if (!GG) return !1;
          let SG = bG.sliceDoc(ZG, wG);
          return "function" == typeof GG ? GG(SG, ZG, wG, bG) : fG(GG, !0).test(SG)
        }(wG.validFor, GG.state, SG, LG) ? new AG(this.source, this.explicit, UG, wG, SG, LG) : wG.update && (wG = wG.update(wG, SG, LG, new yG(GG.state, kG, !1))) ? new AG(this.source, this.explicit, UG, wG, wG.from, null !== (ZG = wG.to) && void 0 !== ZG ? ZG : pG(GG.state)) : new MG(this.source, 1, this.explicit)
      }
      map(GG) {
        if (GG.empty) return this;
        return (this.result.map ? this.result.map(this.result, GG) : this.result) ? new AG(this.source, this.explicit, GG.mapPos(this.limit), this.result, GG.mapPos(this.from), GG.mapPos(this.to, 1)) : new MG(this.source, 0)
      }
      touches(GG) {
        return GG.changes.touchesRange(this.from, this.to)
      }
    }
    const sG = wG.C.define({
        map: (GG, bG) => GG.map((GG => GG.map(bG)))
      }),
      qG = wG.G.define({
        create: () => vG.start(),
        update: (GG, bG) => GG.update(bG),
        provide: GG => [SG.mb.from(GG, (GG => GG.tooltip)), SG.h.contentAttributes.from(GG, (GG => GG.attrs))]
      });

    function nG(GG, bG) {
      const ZG = bG.completion.apply || bG.completion.label;
      let wG = GG.state.field(qG).active.find((GG => GG.source == bG.source));
      return wG instanceof AG && ("string" == typeof ZG ? GG.dispatch({
        ...KG(GG.state, ZG, wG.from, wG.to),
        annotations: QG.of(bG.completion)
      }) : ZG(GG, bG.completion, wG.from, wG.to), !0)
    }
    const gG = mG(qG, nG);

    function eG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return ZG => {
        let wG = ZG.state.field(qG, !1);
        if (!wG || !wG.open || wG.open.disabled || Date.now() - wG.open.timestamp < ZG.state.facet(oG).interactionDelay) return !1;
        let LG, yG = 1;
        "page" == bG && (LG = (0, SG.A)(ZG, wG.open.tooltip)) && (yG = Math.max(2, Math.floor(LG.dom.offsetHeight / LG.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: kG
        } = wG.open.options, UG = wG.open.selected > -1 ? wG.open.selected + yG * (GG ? 1 : -1) : GG ? 0 : kG - 1;
        return UG < 0 ? UG = "page" == bG ? 0 : kG - 1 : UG >= kG && (UG = "page" == bG ? kG - 1 : 0), ZG.dispatch({
          effects: iG.of(UG)
        }), !0
      }
    }
    const RG = GG => !!GG.state.field(qG, !1) && (GG.dispatch({
      effects: JG.of(!0)
    }), !0);
    class TG {
      constructor(GG, bG) {
        this.active = GG, this.context = bG, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const HG = SG.j.fromClass(class {
        constructor(GG) {
          this.view = GG, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let bG of GG.state.field(qG).active) bG.isPending && this.startQuery(bG)
        }
        update(GG) {
          let bG = GG.state.field(qG),
            ZG = GG.state.facet(oG);
          if (!GG.selectionSet && !GG.docChanged && GG.startState.field(qG) == bG) return;
          let wG = GG.transactions.some((GG => {
            let bG = PG(GG, ZG);
            return 8 & bG || (GG.selection || GG.docChanged) && !(3 & bG)
          }));
          for (let kG = 0; kG < this.running.length; kG++) {
            let bG = this.running[kG];
            if (wG || bG.context.abortOnDocChange && GG.docChanged || bG.updates.length + GG.transactions.length > 50 && Date.now() - bG.time > 1e3) {
              for (let GG of bG.context.abortListeners) try {
                GG()
              } catch (yG) {
                (0, SG.W)(this.view.state, yG)
              }
              bG.context.abortListeners = null, this.running.splice(kG--, 1)
            } else bG.updates.push(...GG.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), GG.transactions.some((GG => GG.effects.some((GG => GG.is(JG))))) && (this.pendingStart = !0);
          let LG = this.pendingStart ? 50 : ZG.activateOnTypingDelay;
          if (this.debounceUpdate = bG.active.some((GG => GG.isPending && !this.running.some((bG => bG.active.source == GG.source)))) ? setTimeout((() => this.startUpdate()), LG) : -1, 0 != this.composing)
            for (let SG of GG.transactions) SG.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && SG.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: GG
          } = this.view, bG = GG.field(qG);
          for (let ZG of bG.active) ZG.isPending && !this.running.some((GG => GG.active.source == ZG.source)) && this.startQuery(ZG);
          this.running.length && bG.open && bG.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(oG).updateSyncTime))
        }
        startQuery(GG) {
          let {
            state: bG
          } = this.view, ZG = pG(bG), wG = new yG(bG, ZG, GG.explicit, this.view), LG = new TG(GG, wG);
          this.running.push(LG), Promise.resolve(GG.source(wG)).then((GG => {
            LG.context.aborted || (LG.done = GG || null, this.scheduleAccept())
          }), (GG => {
            this.view.dispatch({
              effects: rG.of(null)
            }), (0, SG.W)(this.view.state, GG)
          }))
        }
        scheduleAccept() {
          this.running.every((GG => void 0 !== GG.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(oG).updateSyncTime))
        }
        accept() {
          var GG;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let bG = [],
            ZG = this.view.state.facet(oG),
            wG = this.view.state.field(qG);
          for (let SG = 0; SG < this.running.length; SG++) {
            let LG = this.running[SG];
            if (void 0 === LG.done) continue;
            if (this.running.splice(SG--, 1), LG.done) {
              let wG = pG(LG.updates.length ? LG.updates[0].startState : this.view.state),
                SG = Math.min(wG, LG.done.from + (LG.active.explicit ? 0 : 1)),
                yG = new AG(LG.active.source, LG.active.explicit, SG, LG.done, LG.done.from, null !== (GG = LG.done.to) && void 0 !== GG ? GG : wG);
              for (let GG of LG.updates) yG = yG.update(GG, ZG);
              if (yG.hasResult()) {
                bG.push(yG);
                continue
              }
            }
            let yG = wG.active.find((GG => GG.source == LG.active.source));
            if (yG && yG.isPending)
              if (null == LG.done) {
                let GG = new MG(LG.active.source, 0);
                for (let bG of LG.updates) GG = GG.update(bG, ZG);
                GG.isPending || bG.push(GG)
              } else this.startQuery(yG)
          }(bG.length || wG.open && wG.open.disabled) && this.view.dispatch({
            effects: sG.of(bG)
          })
        }
      }, {
        eventHandlers: {
          blur(GG) {
            let bG = this.view.state.field(qG, !1);
            if (bG && bG.tooltip && this.view.state.facet(oG).closeOnBlur) {
              let ZG = bG.open && (0, SG.A)(this.view, bG.open.tooltip);
              ZG && ZG.dom.contains(GG.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: rG.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: JG.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      tG = "object" == typeof navigator && /Win/.test(navigator.platform),
      DG = wG.s.highest(SG.h.domEventHandlers({
        keydown(GG, bG) {
          let ZG = bG.state.field(qG, !1);
          if (!ZG || !ZG.open || ZG.open.disabled || ZG.open.selected < 0 || GG.key.length > 1 || GG.ctrlKey && (!tG || !GG.altKey) || GG.metaKey) return !1;
          let wG = ZG.open.options[ZG.open.selected],
            SG = ZG.active.find((GG => GG.source == wG.source)),
            LG = wG.completion.commitCharacters || SG.result.commitCharacters;
          return LG && LG.indexOf(GG.key) > -1 && nG(bG, wG), !1
        }
      })),
      NG = SG.h.baseTheme({
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
    class OG {
      constructor(GG, bG, ZG, wG) {
        this.field = GG, this.line = bG, this.from = ZG, this.to = wG
      }
    }
    class xG {
      constructor(GG, bG, ZG) {
        this.field = GG, this.from = bG, this.to = ZG
      }
      map(GG) {
        let bG = GG.mapPos(this.from, -1, wG.q.TrackDel),
          ZG = GG.mapPos(this.to, 1, wG.q.TrackDel);
        return null == bG || null == ZG ? null : new xG(this.field, bG, ZG)
      }
    }
    class BG {
      constructor(GG, bG) {
        this.lines = GG, this.fieldPositions = bG
      }
      instantiate(GG, bG) {
        let ZG = [],
          wG = [bG],
          SG = GG.doc.lineAt(bG),
          yG = /^\s*/.exec(SG.text)[0];
        for (let UG of this.lines) {
          if (ZG.length) {
            let ZG = yG,
              SG = /^\t*/.exec(UG)[0].length;
            for (let bG = 0; bG < SG; bG++) ZG += GG.facet(LG.X);
            wG.push(bG + ZG.length - SG), UG = ZG + UG.slice(SG)
          }
          ZG.push(UG), bG += UG.length + 1
        }
        let kG = this.fieldPositions.map((GG => new xG(GG.field, wG[GG.line] + GG.from, wG[GG.line] + GG.to)));
        return {
          text: ZG,
          Bh: kG
        }
      }
      static parse(GG) {
        let bG, ZG = [],
          wG = [],
          SG = [];
        for (let LG of GG.split(/\r\n?|\n/)) {
          for (; bG = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(LG);) {
            let GG = bG[1] ? +bG[1] : null,
              yG = bG[2] || bG[3] || "",
              kG = -1,
              UG = yG.replace(/\\[{}]/g, (GG => GG[1]));
            for (let bG = 0; bG < ZG.length; bG++)(null != GG ? ZG[bG].seq == GG : UG && ZG[bG].name == UG) && (kG = bG);
            if (kG < 0) {
              let bG = 0;
              for (; bG < ZG.length && (null == GG || null != ZG[bG].seq && ZG[bG].seq < GG);) bG++;
              ZG.splice(bG, 0, {
                seq: GG,
                name: UG
              }), kG = bG;
              for (let GG of SG) GG.field >= kG && GG.field++
            }
            for (let ZG of SG)
              if (ZG.line == wG.length && ZG.from > bG.index) {
                let GG = bG[2] ? 3 + (bG[1] || "").length : 2;
                ZG.from -= GG, ZG.to -= GG
              } SG.push(new OG(kG, wG.length, bG.index, bG.index + UG.length)), LG = LG.slice(0, bG.index) + yG + LG.slice(bG.index + bG[0].length)
          }
          LG = LG.replace(/\\([{}])/g, ((GG, bG, ZG) => {
            for (let LG of SG) LG.line == wG.length && LG.from > ZG && (LG.from--, LG.to--);
            return bG
          })), wG.push(LG)
        }
        return new BG(wG, SG)
      }
    }
    let Gb = SG.c.widget({
        widget: new class extends SG.n {
          toDOM() {
            let GG = document.createElement("span");
            return GG.className = "cm-snippetFieldPosition", GG
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      bb = SG.c.mark({
        class: "cm-snippetField"
      });
    class Zb {
      constructor(GG, bG) {
        this.Bh = GG, this.active = bG, this.deco = SG.c.set(GG.map((GG => (GG.from == GG.to ? Gb : bb).range(GG.from, GG.to))), !0)
      }
      map(GG) {
        let bG = [];
        for (let ZG of this.Bh) {
          let wG = ZG.map(GG);
          if (!wG) return null;
          bG.push(wG)
        }
        return new Zb(bG, this.active)
      }
      selectionInsideField(GG) {
        return GG.Bh.every((GG => this.Bh.some((bG => bG.field == this.active && bG.from <= GG.from && bG.to >= GG.to))))
      }
    }
    const wb = wG.C.define({
        map: (GG, bG) => GG && GG.map(bG)
      }),
      Sb = wG.C.define(),
      Lb = wG.G.define({
        create: () => null,
        update(GG, bG) {
          for (let ZG of bG.effects) {
            if (ZG.is(wb)) return ZG.value;
            if (ZG.is(Sb) && GG) return new Zb(GG.Bh, ZG.value)
          }
          return GG && bG.docChanged && (GG = GG.map(bG.changes)), GG && bG.selection && !GG.selectionInsideField(bG.selection) && (GG = null), GG
        },
        provide: GG => SG.h.Yw.from(GG, (GG => GG ? GG.deco : SG.c.none))
      });

    function yb(GG, bG) {
      return wG.j.create(GG.filter((GG => GG.field == bG)).map((GG => wG.j.range(GG.from, GG.to))))
    }

    function kb(GG) {
      let bG = BG.parse(GG);
      return (GG, ZG, SG, LG) => {
        let {
          text: yG,
          Bh: kG
        } = bG.instantiate(GG.state, SG), {
          main: UG
        } = GG.state.selection, YG = {
          changes: {
            from: SG,
            to: LG == UG.from ? UG.to : LG,
            insert: wG.I.of(yG)
          },
          scrollIntoView: !0,
          annotations: ZG ? [QG.of(ZG), wG.M.userEvent.of("input.complete")] : void 0
        };
        if (kG.length && (YG.selection = yb(kG, 0)), kG.some((GG => GG.field > 0))) {
          let bG = new Zb(kG, 0),
            ZG = YG.effects = [wb.of(bG)];
          void 0 === GG.state.field(Lb, !1) && ZG.push(wG.C.appendConfig.of([Lb, pb, Qb, NG]))
        }
        GG.dispatch(GG.state.update(YG))
      }
    }

    function Ub(GG) {
      return bG => {
        let {
          state: ZG,
          dispatch: wG
        } = bG, SG = ZG.field(Lb, !1);
        if (!SG || GG < 0 && 0 == SG.active) return !1;
        let LG = SG.active + GG,
          yG = GG > 0 && !SG.Bh.some((bG => bG.field == LG + GG));
        return wG(ZG.update({
          selection: yb(SG.Bh, LG),
          effects: wb.of(yG ? null : new Zb(SG.Bh, LG)),
          scrollIntoView: !0
        })), !0
      }
    }
    const Yb = [{
        key: "Tab",
        run: Ub(1),
        shift: Ub(-1)
      }, {
        key: "Escape",
        run: GG => {
          let {
            state: bG,
            dispatch: ZG
          } = GG;
          return !!bG.field(Lb, !1) && (ZG(bG.update({
            effects: wb.of(null)
          })), !0)
        }
      }],
      Vb = wG.m.define({
        combine: GG => GG.length ? GG[0] : Yb
      }),
      pb = wG.s.highest(SG.O.compute([Vb], (GG => GG.facet(Vb))));

    function fb(GG, bG) {
      return {
        ...bG,
        apply: kb(GG)
      }
    }
    const Qb = SG.h.domEventHandlers({
      mousedown(GG, bG) {
        let ZG, wG = bG.state.field(Lb, !1);
        if (!wG || null == (ZG = bG.posAtCoords({
            x: GG.clientX,
            y: GG.clientY
          }))) return !1;
        let SG = wG.Bh.find((GG => GG.from <= ZG && GG.to >= ZG));
        return !(!SG || SG.field == wG.active) && (bG.dispatch({
          selection: yb(wG.Bh, SG.field),
          effects: wb.of(wG.Bh.some((GG => GG.field > SG.field)) ? new Zb(wG.Bh, SG.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const Kb = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      hb = wG.C.define({
        map(GG, bG) {
          let ZG = bG.mapPos(GG, -1, wG.q.TrackAfter);
          return null == ZG ? void 0 : ZG
        }
      }),
      db = new class extends wG.A {};
    db.startSide = 1, db.endSide = -1;
    const Jb = wG.G.define({
      create: () => wG.x.empty,
      update(GG, bG) {
        if (GG = GG.map(bG.changes), bG.selection) {
          let ZG = bG.state.doc.lineAt(bG.selection.main.head);
          GG = GG.update({
            filter: GG => GG >= ZG.from && GG <= ZG.to
          })
        }
        for (let ZG of bG.effects) ZG.is(hb) && (GG = GG.update({
          add: [db.range(ZG.value, ZG.value + 1)]
        }));
        return GG
      }
    });

    function rb() {
      return [ub, Jb]
    }
    const zb = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function Eb(GG) {
      for (let bG = 0; bG < 16; bG += 2)
        if (zb.charCodeAt(bG) == GG) return zb.charAt(bG + 1);
      return (0, wG.cb)(GG < 128 ? GG : GG + 1)
    }

    function ob(GG, bG) {
      return GG.languageDataAt("closeBrackets", bG)[0] || Kb
    }
    const Xb = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      ub = SG.h.inputHandler.of(((GG, bG, ZG, SG) => {
        if ((Xb ? GG.composing : GG.compositionStarted) || GG.state.readOnly) return !1;
        let LG = GG.state.selection.main;
        if (SG.length > 2 || 2 == SG.length && 1 == (0, wG.R)((0, wG.Q)(SG, 0)) || bG != LG.from || ZG != LG.to) return !1;
        let yG = function(GG, bG) {
          let ZG = ob(GG, GG.selection.main.head),
            SG = ZG.brackets || Kb.brackets;
          for (let LG of SG) {
            let yG = Eb((0, wG.Q)(LG, 0));
            if (bG == LG) return yG == LG ? Fb(GG, LG, SG.indexOf(LG + LG + LG) > -1, ZG) : mb(GG, LG, yG, ZG.before || Kb.before);
            if (bG == yG && Cb(GG, GG.selection.main.from)) return Ib(GG, LG, yG)
          }
          return null
        }(GG.state, SG);
        return !!yG && (GG.dispatch(yG), !0)
      })),
      ib = [{
        key: "Backspace",
        run: GG => {
          let {
            state: bG,
            dispatch: ZG
          } = GG;
          if (bG.readOnly) return !1;
          let SG = ob(bG, bG.selection.main.head).brackets || Kb.brackets,
            LG = null,
            yG = bG.changeByRange((GG => {
              if (GG.empty) {
                let ZG = function(GG, bG) {
                  let ZG = GG.sliceString(bG - 2, bG);
                  return (0, wG.R)((0, wG.Q)(ZG, 0)) == ZG.length ? ZG : ZG.slice(1)
                }(bG.doc, GG.head);
                for (let LG of SG)
                  if (LG == ZG && Wb(bG.doc, GG.head) == Eb((0, wG.Q)(LG, 0))) return {
                    changes: {
                      from: GG.head - LG.length,
                      to: GG.head + LG.length
                    },
                    range: wG.j.cursor(GG.head - LG.length)
                  }
              }
              return {
                range: LG = GG
              }
            }));
          return LG || ZG(bG.update(yG, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !LG
        }
      }];

    function Cb(GG, bG) {
      let ZG = !1;
      return GG.field(Jb).between(0, GG.doc.length, (GG => {
        GG == bG && (ZG = !0)
      })), ZG
    }

    function Wb(GG, bG) {
      let ZG = GG.sliceString(bG, bG + 2);
      return ZG.slice(0, (0, wG.R)((0, wG.Q)(ZG, 0)))
    }

    function mb(GG, bG, ZG, SG) {
      let LG = null,
        yG = GG.changeByRange((yG => {
          if (!yG.empty) return {
            changes: [{
              insert: bG,
              from: yG.from
            }, {
              insert: ZG,
              from: yG.to
            }],
            effects: hb.of(yG.to + bG.length),
            range: wG.j.range(yG.anchor + bG.length, yG.head + bG.length)
          };
          let kG = Wb(GG.doc, yG.head);
          return !kG || /\s/.test(kG) || SG.indexOf(kG) > -1 ? {
            changes: {
              insert: bG + ZG,
              from: yG.head
            },
            effects: hb.of(yG.head + bG.length),
            range: wG.j.cursor(yG.head + bG.length)
          } : {
            range: LG = yG
          }
        }));
      return LG ? null : GG.update(yG, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Ib(GG, bG, ZG) {
      let SG = null,
        LG = GG.changeByRange((bG => bG.empty && Wb(GG.doc, bG.head) == ZG ? {
          changes: {
            from: bG.head,
            to: bG.head + ZG.length,
            insert: ZG
          },
          range: wG.j.cursor(bG.head + ZG.length)
        } : SG = {
          range: bG
        }));
      return SG ? null : GG.update(LG, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Fb(GG, bG, ZG, SG) {
      let yG = SG.stringPrefixes || Kb.stringPrefixes,
        kG = null,
        UG = GG.changeByRange((SG => {
          if (!SG.empty) return {
            changes: [{
              insert: bG,
              from: SG.from
            }, {
              insert: bG,
              from: SG.to
            }],
            effects: hb.of(SG.to + bG.length),
            range: wG.j.range(SG.anchor + bG.length, SG.head + bG.length)
          };
          let UG, YG = SG.head,
            VG = Wb(GG.doc, YG);
          if (VG == bG) {
            if (vb(GG, YG)) return {
              changes: {
                insert: bG + bG,
                from: YG
              },
              effects: hb.of(YG + bG.length),
              range: wG.j.cursor(YG + bG.length)
            };
            if (Cb(GG, YG)) {
              let SG = ZG && GG.sliceDoc(YG, YG + 3 * bG.length) == bG + bG + bG ? bG + bG + bG : bG;
              return {
                changes: {
                  from: YG,
                  to: YG + SG.length,
                  insert: SG
                },
                range: wG.j.cursor(YG + SG.length)
              }
            }
          } else {
            if (ZG && GG.sliceDoc(YG - 2 * bG.length, YG) == bG + bG && (UG = ab(GG, YG - 2 * bG.length, yG)) > -1 && vb(GG, UG)) return {
              changes: {
                insert: bG + bG + bG + bG,
                from: YG
              },
              effects: hb.of(YG + bG.length),
              range: wG.j.cursor(YG + bG.length)
            };
            if (GG.charCategorizer(YG)(VG) != wG.f.Word && ab(GG, YG, yG) > -1 && ! function(GG, bG, ZG, wG) {
                let SG = (0, LG.gb)(GG).resolveInner(bG, -1),
                  yG = wG.reduce(((GG, bG) => Math.max(GG, bG.length)), 0);
                for (let LG = 0; LG < 5; LG++) {
                  let LG = GG.sliceDoc(SG.from, Math.min(SG.to, SG.from + ZG.length + yG)),
                    kG = LG.indexOf(ZG);
                  if (!kG || kG > -1 && wG.indexOf(LG.slice(0, kG)) > -1) {
                    let bG = SG.firstChild;
                    for (; bG && bG.from == SG.from && bG.to - bG.from > ZG.length + kG;) {
                      if (GG.sliceDoc(bG.to - ZG.length, bG.to) == ZG) return !1;
                      bG = bG.firstChild
                    }
                    return !0
                  }
                  let UG = SG.to == bG && SG.parent;
                  if (!UG) break;
                  SG = UG
                }
                return !1
              }(GG, YG, bG, yG)) return {
              changes: {
                insert: bG + bG,
                from: YG
              },
              effects: hb.of(YG + bG.length),
              range: wG.j.cursor(YG + bG.length)
            }
          }
          return {
            range: kG = SG
          }
        }));
      return kG ? null : GG.update(UG, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function vb(GG, bG) {
      let ZG = (0, LG.gb)(GG).resolveInner(bG + 1);
      return ZG.parent && ZG.from == bG
    }

    function ab(GG, bG, ZG) {
      let SG = GG.charCategorizer(bG);
      if (SG(GG.sliceDoc(bG - 1, bG)) != wG.f.Word) return bG;
      for (let LG of ZG) {
        let ZG = bG - LG.length;
        if (GG.sliceDoc(ZG, bG) == LG && SG(GG.sliceDoc(ZG - 1, ZG)) != wG.f.Word) return ZG
      }
      return -1
    }

    function cb() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [DG, qG, oG.of(GG), HG, jb, NG]
    }
    const lb = [{
        key: "Ctrl-Space",
        run: RG
      }, {
        mac: "Alt-`",
        run: RG
      }, {
        mac: "Alt-i",
        run: RG
      }, {
        key: "Escape",
        run: GG => {
          let bG = GG.state.field(qG, !1);
          return !(!bG || !bG.active.some((GG => 0 != GG.state))) && (GG.dispatch({
            effects: rG.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: eG(!0)
      }, {
        key: "ArrowUp",
        run: eG(!1)
      }, {
        key: "PageDown",
        run: eG(!0, "page")
      }, {
        key: "PageUp",
        run: eG(!1, "page")
      }, {
        key: "Enter",
        run: GG => {
          let bG = GG.state.field(qG, !1);
          return !(GG.state.readOnly || !bG || !bG.open || bG.open.selected < 0 || bG.open.disabled || Date.now() - bG.open.timestamp < GG.state.facet(oG).interactionDelay) && nG(GG, bG.open.options[bG.open.selected])
        }
      }],
      jb = wG.s.highest(SG.O.computeN([oG], (GG => GG.facet(oG).defaultKeymap ? [lb] : [])))
  },
  41869: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => YG,
      f: () => fG,
      g: () => VG,
      k: () => pG
    });
    var wG = ZG(41727);
    class SG {
      constructor(GG, bG, ZG, wG) {
        this.origin = GG, this.changes = bG, this.effects = ZG, this.clientID = wG
      }
    }
    class LG {
      constructor(GG, bG) {
        this.version = GG, this.unconfirmed = bG
      }
    }
    const yG = wG.m.define({
        combine(GG) {
          let bG = (0, wG.S)(GG, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: GG => GG
          });
          return null == bG.clientID && (bG.clientID = GG.length && GG[0].generatedID || ""), bG
        }
      }),
      kG = wG.c.define(),
      UG = wG.G.define({
        create: GG => new LG(GG.facet(yG).startVersion, []),
        update(GG, bG) {
          let ZG = bG.annotation(kG);
          if (ZG) return ZG;
          let {
            sharedEffects: wG,
            clientID: UG
          } = bG.startState.facet(yG), YG = wG(bG);
          return YG.length || !bG.changes.empty ? new LG(GG.version, GG.unconfirmed.concat(new SG(bG, bG.changes, YG, UG))) : GG
        }
      });

    function YG() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [UG, yG.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, GG))]
    }

    function VG(GG, bG) {
      let {
        version: ZG,
        unconfirmed: YG
      } = GG.field(UG), {
        clientID: VG
      } = GG.facet(yG);
      ZG += bG.length;
      let pG = [],
        fG = null,
        QG = 0;
      for (let SG of bG) {
        let GG = QG < YG.length ? YG[QG] : null;
        GG && GG.clientID == SG.clientID ? (fG && (fG = fG.map(GG.changes, !0)), pG = wG.C.mapEffects(pG, SG.changes), QG++) : (pG = wG.C.mapEffects(pG, SG.changes), SG.effects && (pG = pG.concat(SG.effects)), fG = fG ? fG.compose(SG.changes) : SG.changes)
      }
      if (QG && (YG = YG.slice(QG)), YG.length && (fG && (YG = YG.map((GG => {
          let bG = GG.changes.map(fG);
          return fG = fG.map(GG.changes, !0), new SG(GG.origin, bG, wG.C.mapEffects(GG.effects, fG), VG)
        }))), pG.length)) {
        let GG = YG.reduce(((GG, bG) => GG.compose(bG.changes)), wG.ChangeSet.empty(YG[0].changes.length));
        pG = wG.C.mapEffects(pG, GG)
      }
      return fG ? GG.update({
        changes: fG,
        effects: pG,
        annotations: [wG.M.addToHistory.of(!1), wG.M.remote.of(!0), kG.of(new LG(ZG, YG))],
        filter: !1
      }) : GG.update({
        annotations: [kG.of(new LG(ZG, YG))]
      })
    }

    function pG(GG) {
      return GG.field(UG).unconfirmed
    }

    function fG(GG) {
      return GG.field(UG).version
    }
  },
  41775: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => hb
    });
    var wG = ZG(41763);
    class SG {
      constructor(GG, bG, ZG, wG, SG, LG, yG, kG, UG) {
        let YG = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          VG = arguments.length > 10 ? arguments[10] : void 0;
        this.p = GG, this.stack = bG, this.state = ZG, this.reducePos = wG, this.pos = SG, this.score = LG, this.buffer = yG, this.bufferBase = kG, this.curContext = UG, this.lookAhead = YG, this.parent = VG
      }
      toString() {
        return `[${this.stack.filter(((GG,bG)=>bG%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wG = GG.parser.context;
        return new SG(GG, [], bG, ZG, ZG, 0, [], 0, wG ? new LG(wG, wG.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(GG, bG) {
        this.stack.push(this.state, bG, this.bufferBase + this.buffer.length), this.state = GG
      }
      reduce(GG) {
        var bG;
        let ZG = GG >> 19,
          wG = 65535 & GG,
          {
            parser: SG
          } = this.p,
          LG = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          yG = SG.dynamicPrecedence(wG);
        if (yG && (this.score += yG), 0 == ZG) return this.pushState(SG.getGoto(this.state, wG, !0), this.reducePos), wG < SG.minRepeatTerm && this.storeNode(wG, this.reducePos, this.reducePos, LG ? 8 : 4, !0), void this.reduceContext(wG, this.reducePos);
        let kG = this.stack.length - 3 * (ZG - 1) - (262144 & GG ? 6 : 0),
          UG = kG ? this.stack[kG - 2] : this.p.Bh[0].from,
          YG = this.reducePos - UG;
        YG >= 2e3 && !(null === (bG = this.p.parser.nodeSet.types[wG]) || void 0 === bG ? void 0 : bG.isAnonymous) && (UG == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = YG) : this.p.lastBigReductionSize < YG && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = UG, this.p.lastBigReductionSize = YG));
        let VG = kG ? this.stack[kG - 1] : 0,
          pG = this.bufferBase + this.buffer.length - VG;
        if (wG < SG.minRepeatTerm || 131072 & GG) {
          let GG = SG.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(wG, UG, GG, pG + 4, !0)
        }
        if (262144 & GG) this.state = this.stack[kG];
        else {
          let GG = this.stack[kG - 3];
          this.state = SG.getGoto(GG, wG, !0)
        }
        for (; this.stack.length > kG;) this.stack.pop();
        this.reduceContext(wG, UG)
      }
      storeNode(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          SG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == GG && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let GG = this,
            wG = this.buffer.length;
          if (0 == wG && GG.parent && (wG = GG.bufferBase - GG.parent.bufferBase, GG = GG.parent), wG > 0 && 0 == GG.buffer[wG - 4] && GG.buffer[wG - 1] > -1) {
            if (bG == ZG) return;
            if (GG.buffer[wG - 2] >= bG) return void(GG.buffer[wG - 2] = ZG)
          }
        }
        if (SG && this.pos != ZG) {
          let SG = this.buffer.length;
          if (SG > 0 && (0 != this.buffer[SG - 4] || this.buffer[SG - 1] < 0)) {
            let GG = !1;
            for (let bG = SG; bG > 0 && this.buffer[bG - 2] > ZG; bG -= 4)
              if (this.buffer[bG - 1] >= 0) {
                GG = !0;
                break
              } if (GG)
              for (; SG > 0 && this.buffer[SG - 2] > ZG;) this.buffer[SG] = this.buffer[SG - 4], this.buffer[SG + 1] = this.buffer[SG - 3], this.buffer[SG + 2] = this.buffer[SG - 2], this.buffer[SG + 3] = this.buffer[SG - 1], SG -= 4, wG > 4 && (wG -= 4)
          }
          this.buffer[SG] = GG, this.buffer[SG + 1] = bG, this.buffer[SG + 2] = ZG, this.buffer[SG + 3] = wG
        } else this.buffer.push(GG, bG, ZG, wG)
      }
      shift(GG, bG, ZG, wG) {
        if (131072 & GG) this.pushState(65535 & GG, this.pos);
        else if (0 == (262144 & GG)) {
          let SG = GG,
            {
              parser: LG
            } = this.p;
          this.pos = wG;
          let yG = LG.stateFlag(SG, 1);
          !yG && (wG > ZG || bG <= LG.maxNode) && (this.reducePos = wG), this.pushState(SG, yG ? ZG : Math.min(ZG, this.reducePos)), this.shiftContext(bG, ZG), bG <= LG.maxNode && this.buffer.push(bG, ZG, wG, 4)
        } else this.pos = wG, this.shiftContext(bG, ZG), bG <= this.p.parser.maxNode && this.buffer.push(bG, ZG, wG, 4)
      }
      apply(GG, bG, ZG, wG) {
        65536 & GG ? this.reduce(GG) : this.shift(GG, bG, ZG, wG)
      }
      useNode(GG, bG) {
        let ZG = this.p.reused.length - 1;
        (ZG < 0 || this.p.reused[ZG] != GG) && (this.p.reused.push(GG), ZG++);
        let wG = this.pos;
        this.reducePos = this.pos = wG + GG.length, this.pushState(bG, wG), this.buffer.push(ZG, wG, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, GG, this, this.p.stream.reset(this.pos - GG.length)))
      }
      split() {
        let GG = this,
          bG = GG.buffer.length;
        for (; bG > 0 && GG.buffer[bG - 2] > GG.reducePos;) bG -= 4;
        let ZG = GG.buffer.slice(bG),
          wG = GG.bufferBase + bG;
        for (; GG && wG == GG.bufferBase;) GG = GG.parent;
        return new SG(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, ZG, wG, this.curContext, this.lookAhead, GG)
      }
      recoverByDelete(GG, bG) {
        let ZG = GG <= this.p.parser.maxNode;
        ZG && this.storeNode(GG, this.pos, bG, 4), this.storeNode(0, this.pos, bG, ZG ? 8 : 4), this.pos = this.reducePos = bG, this.score -= 190
      }
      canShift(GG) {
        for (let bG = new yG(this);;) {
          let ZG = this.p.parser.stateSlot(bG.state, 4) || this.p.parser.hasAction(bG.state, GG);
          if (0 == ZG) return !1;
          if (0 == (65536 & ZG)) return !0;
          bG.reduce(ZG)
        }
      }
      recoverByInsert(GG) {
        if (this.stack.length >= 300) return [];
        let bG = this.p.parser.nextStates(this.state);
        if (bG.length > 8 || this.stack.length >= 120) {
          let ZG = [];
          for (let wG, SG = 0; SG < bG.length; SG += 2)(wG = bG[SG + 1]) != this.state && this.p.parser.hasAction(wG, GG) && ZG.push(bG[SG], wG);
          if (this.stack.length < 120)
            for (let GG = 0; ZG.length < 8 && GG < bG.length; GG += 2) {
              let wG = bG[GG + 1];
              ZG.some(((GG, bG) => 1 & bG && GG == wG)) || ZG.push(bG[GG], wG)
            }
          bG = ZG
        }
        let ZG = [];
        for (let wG = 0; wG < bG.length && ZG.length < 4; wG += 2) {
          let GG = bG[wG + 1];
          if (GG == this.state) continue;
          let SG = this.split();
          SG.pushState(GG, this.pos), SG.storeNode(0, SG.pos, SG.pos, 4, !0), SG.shiftContext(bG[wG], this.pos), SG.reducePos = this.pos, SG.score -= 200, ZG.push(SG)
        }
        return ZG
      }
      forceReduce() {
        let {
          parser: GG
        } = this.p, bG = GG.stateSlot(this.state, 5);
        if (0 == (65536 & bG)) return !1;
        if (!GG.validAction(this.state, bG)) {
          let ZG = bG >> 19,
            wG = 65535 & bG,
            SG = this.stack.length - 3 * ZG;
          if (SG < 0 || GG.getGoto(this.stack[SG], wG, !1) < 0) {
            let GG = this.findForcedReduction();
            if (null == GG) return !1;
            bG = GG
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(bG), !0
      }
      findForcedReduction() {
        let {
          parser: GG
        } = this.p, bG = [], ZG = (wG, SG) => {
          if (!bG.includes(wG)) return bG.push(wG), GG.allActions(wG, (bG => {
            if (393216 & bG);
            else if (65536 & bG) {
              let ZG = (bG >> 19) - SG;
              if (ZG > 1) {
                let wG = 65535 & bG,
                  SG = this.stack.length - 3 * ZG;
                if (SG >= 0 && GG.getGoto(this.stack[SG], wG, !1) >= 0) return ZG << 19 | 65536 | wG
              }
            } else {
              let GG = ZG(bG, SG + 1);
              if (null != GG) return GG
            }
          }))
        };
        return ZG(this.state, 0)
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
          parser: GG
        } = this.p;
        return 65535 == GG.data[GG.stateSlot(this.state, 1)] && !GG.stateSlot(this.state, 4)
      }
      restart() {
        this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0
      }
      sameState(GG) {
        if (this.state != GG.state || this.stack.length != GG.stack.length) return !1;
        for (let bG = 0; bG < this.stack.length; bG += 3)
          if (this.stack[bG] != GG.stack[bG]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(GG) {
        return this.p.parser.dialect.flags[GG]
      }
      shiftContext(GG, bG) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, GG, this, this.p.stream.reset(bG)))
      }
      reduceContext(GG, bG) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, GG, this, this.p.stream.reset(bG)))
      }
      emitContext() {
        let GG = this.buffer.length - 1;
        (GG < 0 || -3 != this.buffer[GG]) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3)
      }
      emitLookAhead() {
        let GG = this.buffer.length - 1;
        (GG < 0 || -4 != this.buffer[GG]) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4)
      }
      updateContext(GG) {
        if (GG != this.curContext.context) {
          let bG = new LG(this.curContext.tracker, GG);
          bG.hash != this.curContext.hash && this.emitContext(), this.curContext = bG
        }
      }
      setLookAhead(GG) {
        return !(GG <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = GG, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class LG {
      constructor(GG, bG) {
        this.tracker = GG, this.context = bG, this.hash = GG.strict ? GG.hash(bG) : 0
      }
    }
    class yG {
      constructor(GG) {
        this.start = GG, this.state = GG.state, this.stack = GG.stack, this.base = this.stack.length
      }
      reduce(GG) {
        let bG = 65535 & GG,
          ZG = GG >> 19;
        0 == ZG ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (ZG - 1);
        let wG = this.start.p.parser.getGoto(this.stack[this.base - 3], bG, !0);
        this.state = wG
      }
    }
    class kG {
      constructor(GG, bG, ZG) {
        this.stack = GG, this.pos = bG, this.index = ZG, this.buffer = GG.buffer, 0 == this.index && this.maybeNext()
      }
      static create(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GG.bufferBase + GG.buffer.length;
        return new kG(GG, bG, bG - GG.bufferBase)
      }
      maybeNext() {
        let GG = this.stack.parent;
        null != GG && (this.index = this.stack.bufferBase - GG.bufferBase, this.stack = GG, this.buffer = GG.buffer)
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
        return new kG(this.stack, this.pos, this.index)
      }
    }

    function UG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof GG) return GG;
      let ZG = null;
      for (let wG = 0, SG = 0; wG < GG.length;) {
        let LG = 0;
        for (;;) {
          let bG = GG.charCodeAt(wG++),
            ZG = !1;
          if (126 == bG) {
            LG = 65535;
            break
          }
          bG >= 92 && bG--, bG >= 34 && bG--;
          let SG = bG - 32;
          if (SG >= 46 && (SG -= 46, ZG = !0), LG += SG, ZG) break;
          LG *= 46
        }
        ZG ? ZG[SG++] = LG : ZG = new bG(LG)
      }
      return ZG
    }
    class YG {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const VG = new YG;
    class pG {
      constructor(GG, bG) {
        this.input = GG, this.Bh = bG, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = VG, this.rangeIndex = 0, this.pos = this.chunkPos = bG[0].from, this.range = bG[0], this.end = bG[bG.length - 1].to, this.readNext()
      }
      resolveOffset(GG, bG) {
        let ZG = this.range,
          wG = this.rangeIndex,
          SG = this.pos + GG;
        for (; SG < ZG.from;) {
          if (!wG) return null;
          let GG = this.Bh[--wG];
          SG -= ZG.from - GG.to, ZG = GG
        }
        for (; bG < 0 ? SG > ZG.to : SG >= ZG.to;) {
          if (wG == this.Bh.length - 1) return null;
          let GG = this.Bh[++wG];
          SG += GG.from - ZG.to, ZG = GG
        }
        return SG
      }
      clipPos(GG) {
        if (GG >= this.range.from && GG < this.range.to) return GG;
        for (let bG of this.Bh)
          if (bG.to > GG) return Math.max(GG, bG.from);
        return this.end
      }
      peek(GG) {
        let bG, ZG, wG = this.chunkOff + GG;
        if (wG >= 0 && wG < this.chunk.length) bG = this.pos + GG, ZG = this.chunk.charCodeAt(wG);
        else {
          let wG = this.resolveOffset(GG, 1);
          if (null == wG) return -1;
          if (bG = wG, bG >= this.chunk2Pos && bG < this.chunk2Pos + this.chunk2.length) ZG = this.chunk2.charCodeAt(bG - this.chunk2Pos);
          else {
            let GG = this.rangeIndex,
              wG = this.range;
            for (; wG.to <= bG;) wG = this.Bh[++GG];
            this.chunk2 = this.input.chunk(this.chunk2Pos = bG), bG + this.chunk2.length > wG.to && (this.chunk2 = this.chunk2.slice(0, wG.to - bG)), ZG = this.chunk2.charCodeAt(0)
          }
        }
        return bG >= this.token.lookAhead && (this.token.lookAhead = bG + 1), ZG
      }
      acceptToken(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZG = bG ? this.resolveOffset(bG, -1) : this.pos;
        if (null == ZG || ZG < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = GG, this.token.end = ZG
      }
      acceptTokenTo(GG, bG) {
        this.token.value = GG, this.token.end = bG
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: GG,
            chunkPos: bG
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = GG, this.chunk2Pos = bG, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let GG = this.input.chunk(this.pos),
            bG = this.pos + GG.length;
          this.chunk = bG > this.range.to ? GG.slice(0, this.range.to - this.pos) : GG, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += GG; this.pos + GG >= this.range.to;) {
          if (this.rangeIndex == this.Bh.length - 1) return this.setDone();
          GG -= this.range.to - this.pos, this.range = this.Bh[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += GG, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.Bh[this.rangeIndex = this.Bh.length - 1], this.chunk = "", this.next = -1
      }
      reset(GG, bG) {
        if (bG ? (this.token = bG, bG.start = GG, bG.lookAhead = GG + 1, bG.value = bG.extended = -1) : this.token = VG, this.pos != GG) {
          if (this.pos = GG, GG == this.end) return this.setDone(), this;
          for (; GG < this.range.from;) this.range = this.Bh[--this.rangeIndex];
          for (; GG >= this.range.to;) this.range = this.Bh[++this.rangeIndex];
          GG >= this.chunkPos && GG < this.chunkPos + this.chunk.length ? this.chunkOff = GG - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(GG, bG) {
        if (GG >= this.chunkPos && bG <= this.chunkPos + this.chunk.length) return this.chunk.slice(GG - this.chunkPos, bG - this.chunkPos);
        if (GG >= this.chunk2Pos && bG <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(GG - this.chunk2Pos, bG - this.chunk2Pos);
        if (GG >= this.range.from && bG <= this.range.to) return this.input.read(GG, bG);
        let ZG = "";
        for (let wG of this.Bh) {
          if (wG.from >= bG) break;
          wG.to > GG && (ZG += this.input.read(Math.max(wG.from, GG), Math.min(wG.to, bG)))
        }
        return ZG
      }
    }
    class fG {
      constructor(GG, bG) {
        this.data = GG, this.id = bG
      }
      token(GG, bG) {
        let {
          parser: ZG
        } = bG.p;
        hG(this.data, GG, bG, this.id, ZG.data, ZG.tokenPrecTable)
      }
    }
    fG.prototype.contextual = fG.prototype.fallback = fG.prototype.extend = !1;
    class QG {
      constructor(GG, bG, ZG) {
        this.precTable = bG, this.elseToken = ZG, this.data = "string" == typeof GG ? UG(GG) : GG
      }
      token(GG, bG) {
        let ZG = GG.pos,
          wG = 0;
        for (;;) {
          let ZG = GG.next < 0,
            SG = GG.resolveOffset(1, 1);
          if (hG(this.data, GG, bG, 0, this.data, this.precTable), GG.token.value > -1) break;
          if (null == this.elseToken) return;
          if (ZG || wG++, null == SG) break;
          GG.reset(SG, GG.token)
        }
        wG && (GG.reset(ZG, GG.token), GG.acceptToken(this.elseToken, wG))
      }
    }
    QG.prototype.contextual = fG.prototype.fallback = fG.prototype.extend = !1;
    class KG {
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = GG, this.contextual = !!bG.contextual, this.fallback = !!bG.fallback, this.extend = !!bG.extend
      }
    }

    function hG(GG, bG, ZG, wG, SG, LG) {
      let yG = 0,
        kG = 1 << wG,
        {
          dialect: UG
        } = ZG.p.parser;
      GG: for (; 0 != (kG & GG[yG]);) {
        let ZG = GG[yG + 1];
        for (let pG = yG + 3; pG < ZG; pG += 2)
          if ((GG[pG + 1] & kG) > 0) {
            let ZG = GG[pG];
            if (UG.allows(ZG) && (-1 == bG.token.value || bG.token.value == ZG || JG(ZG, bG.token.value, SG, LG))) {
              bG.acceptToken(ZG);
              break
            }
          } let wG = bG.next,
          YG = 0,
          VG = GG[yG + 2];
        if (!(bG.next < 0 && VG > YG && 65535 == GG[ZG + 3 * VG - 3])) {
          for (; YG < VG;) {
            let SG = YG + VG >> 1,
              LG = ZG + SG + (SG << 1),
              kG = GG[LG],
              UG = GG[LG + 1] || 65536;
            if (wG < kG) VG = SG;
            else {
              if (!(wG >= UG)) {
                yG = GG[LG + 2], bG.advance();
                continue GG
              }
              YG = SG + 1
            }
          }
          break
        }
        yG = GG[ZG + 3 * VG - 1]
      }
    }

    function dG(GG, bG, ZG) {
      for (let wG, SG = bG; 65535 != (wG = GG[SG]); SG++)
        if (wG == ZG) return SG - bG;
      return -1
    }

    function JG(GG, bG, ZG, wG) {
      let SG = dG(ZG, wG, bG);
      return SG < 0 || dG(ZG, wG, GG) < SG
    }
    const rG = "undefined" != typeof process && {
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
    let zG = null;

    function EG(GG, bG, ZG) {
      let SG = GG.cursor(wG.h.IncludeAnonymous);
      for (SG.moveTo(bG);;)
        if (!(ZG < 0 ? SG.childBefore(bG) : SG.childAfter(bG)))
          for (;;) {
            if ((ZG < 0 ? SG.to < bG : SG.from > bG) && !SG.type.isError) return ZG < 0 ? Math.max(0, Math.min(SG.to - 1, bG - 25)) : Math.min(GG.length, Math.max(SG.from + 1, bG + 25));
            if (ZG < 0 ? SG.prevSibling() : SG.nextSibling()) break;
            if (!SG.parent()) return ZG < 0 ? 0 : GG.length
          }
    }
    class oG {
      constructor(GG, bG) {
        this.fragments = GG, this.nodeSet = bG, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let GG = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (GG) {
          for (this.safeFrom = GG.openStart ? EG(GG.tree, GG.from + GG.offset, 1) - GG.offset : GG.from, this.safeTo = GG.openEnd ? EG(GG.tree, GG.to + GG.offset, -1) - GG.offset : GG.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(GG.tree), this.start.push(-GG.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(GG) {
        if (GG < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= GG;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let bG = this.trees.length - 1;
          if (bG < 0) return this.nextFragment(), null;
          let ZG = this.trees[bG],
            SG = this.index[bG];
          if (SG == ZG.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let LG = ZG.children[SG],
            yG = this.start[bG] + ZG.positions[SG];
          if (yG > GG) return this.nextStart = yG, null;
          if (LG instanceof wG.D) {
            if (yG == GG) {
              if (yG < this.safeFrom) return null;
              let GG = yG + LG.length;
              if (GG <= this.safeTo) {
                let bG = LG.prop(wG.i.lookAhead);
                if (!bG || GG + bG < this.fragment.to) return LG
              }
            }
            this.index[bG]++, yG + LG.length >= Math.max(this.safeFrom, GG) && (this.trees.push(LG), this.start.push(yG), this.index.push(0))
          } else this.index[bG]++, this.nextStart = yG + LG.length
        }
      }
    }
    class XG {
      constructor(GG, bG) {
        this.stream = bG, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = GG.tokenizers.map((GG => new YG))
      }
      getActions(GG) {
        let bG = 0,
          ZG = null,
          {
            parser: wG
          } = GG.p,
          {
            tokenizers: SG
          } = wG,
          LG = wG.stateSlot(GG.state, 3),
          yG = GG.curContext ? GG.curContext.hash : 0,
          kG = 0;
        for (let UG = 0; UG < SG.length; UG++) {
          if (0 == (1 << UG & LG)) continue;
          let wG = SG[UG],
            YG = this.tokens[UG];
          if ((!ZG || wG.fallback) && ((wG.contextual || YG.start != GG.pos || YG.mask != LG || YG.context != yG) && (this.updateCachedToken(YG, wG, GG), YG.mask = LG, YG.context = yG), YG.lookAhead > YG.end + 25 && (kG = Math.max(YG.lookAhead, kG)), 0 != YG.value)) {
            let SG = bG;
            if (YG.extended > -1 && (bG = this.addActions(GG, YG.extended, YG.end, bG)), bG = this.addActions(GG, YG.value, YG.end, bG), !wG.extend && (ZG = YG, bG > SG)) break
          }
        }
        for (; this.actions.length > bG;) this.actions.pop();
        return kG && GG.setLookAhead(kG), ZG || GG.pos != this.stream.end || (ZG = new YG, ZG.value = GG.p.parser.eofTerm, ZG.start = ZG.end = GG.pos, bG = this.addActions(GG, ZG.value, ZG.end, bG)), this.mainToken = ZG, this.actions
      }
      getMainToken(GG) {
        if (this.mainToken) return this.mainToken;
        let bG = new YG,
          {
            pos: ZG,
            p: wG
          } = GG;
        return bG.start = ZG, bG.end = Math.min(ZG + 1, wG.stream.end), bG.value = ZG == wG.stream.end ? wG.parser.eofTerm : 0, bG
      }
      updateCachedToken(GG, bG, ZG) {
        let wG = this.stream.clipPos(ZG.pos);
        if (bG.token(this.stream.reset(wG, GG), ZG), GG.value > -1) {
          let {
            parser: bG
          } = ZG.p;
          for (let wG = 0; wG < bG.specialized.length; wG++)
            if (bG.specialized[wG] == GG.value) {
              let SG = bG.specializers[wG](this.stream.read(GG.start, GG.end), ZG);
              if (SG >= 0 && ZG.p.parser.dialect.allows(SG >> 1)) {
                0 == (1 & SG) ? GG.value = SG >> 1 : GG.extended = SG >> 1;
                break
              }
            }
        } else GG.value = 0, GG.end = this.stream.clipPos(wG + 1)
      }
      putAction(GG, bG, ZG, wG) {
        for (let SG = 0; SG < wG; SG += 3)
          if (this.actions[SG] == GG) return wG;
        return this.actions[wG++] = GG, this.actions[wG++] = bG, this.actions[wG++] = ZG, wG
      }
      addActions(GG, bG, ZG, wG) {
        let {
          state: SG
        } = GG, {
          parser: LG
        } = GG.p, {
          data: yG
        } = LG;
        for (let kG = 0; kG < 2; kG++)
          for (let GG = LG.stateSlot(SG, kG ? 2 : 1);; GG += 3) {
            if (65535 == yG[GG]) {
              if (1 != yG[GG + 1]) {
                0 == wG && 2 == yG[GG + 1] && (wG = this.putAction(IG(yG, GG + 2), bG, ZG, wG));
                break
              }
              GG = IG(yG, GG + 2)
            }
            yG[GG] == bG && (wG = this.putAction(IG(yG, GG + 1), bG, ZG, wG))
          }
        return wG
      }
    }
    class uG {
      constructor(GG, bG, ZG, wG) {
        this.parser = GG, this.input = bG, this.Bh = wG, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new pG(bG, wG), this.tokens = new XG(GG, this.stream), this.topTerm = GG.top[1];
        let {
          from: LG
        } = wG[0];
        this.stacks = [SG.start(this, GG.top[0], LG)], this.fragments = ZG.length && this.stream.end - LG > 4 * GG.bufferLength ? new oG(ZG, GG.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let GG, bG, ZG = this.stacks,
          wG = this.minStackPos,
          SG = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == ZG.length) {
          let [GG] = ZG;
          for (; GG.forceReduce() && GG.stack.length && GG.stack[GG.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let LG = 0; LG < ZG.length; LG++) {
          let yG = ZG[LG];
          for (;;) {
            if (this.tokens.mainToken = null, yG.pos > wG) SG.push(yG);
            else {
              if (this.advanceStack(yG, SG, ZG)) continue;
              {
                GG || (GG = [], bG = []), GG.push(yG);
                let ZG = this.tokens.getMainToken(yG);
                bG.push(ZG.value, ZG.end)
              }
            }
            break
          }
        }
        if (!SG.length) {
          let bG = GG && function(GG) {
            let bG = null;
            for (let ZG of GG) {
              let GG = ZG.p.stoppedAt;
              (ZG.pos == ZG.p.stream.end || null != GG && ZG.pos > GG) && ZG.p.parser.stateFlag(ZG.state, 2) && (!bG || bG.score < ZG.score) && (bG = ZG)
            }
            return bG
          }(GG);
          if (bG) return rG && console.log("Finish with " + this.stackID(bG)), this.stackToTree(bG);
          if (this.parser.strict) throw rG && GG && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + wG);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && GG) {
          let ZG = null != this.stoppedAt && GG[0].pos > this.stoppedAt ? GG[0] : this.runRecovery(GG, bG, SG);
          if (ZG) return rG && console.log("Force-finish " + this.stackID(ZG)), this.stackToTree(ZG.forceAll())
        }
        if (this.recovering) {
          let GG = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (SG.length > GG)
            for (SG.sort(((GG, bG) => bG.score - GG.score)); SG.length > GG;) SG.pop();
          SG.some((GG => GG.reducePos > wG)) && this.recovering--
        } else if (SG.length > 1) {
          GG: for (let GG = 0; GG < SG.length - 1; GG++) {
            let bG = SG[GG];
            for (let ZG = GG + 1; ZG < SG.length; ZG++) {
              let wG = SG[ZG];
              if (bG.sameState(wG) || bG.buffer.length > 500 && wG.buffer.length > 500) {
                if (!((bG.score - wG.score || bG.buffer.length - wG.buffer.length) > 0)) {
                  SG.splice(GG--, 1);
                  continue GG
                }
                SG.splice(ZG--, 1)
              }
            }
          }
          SG.length > 12 && (SG.sort(((GG, bG) => bG.score - GG.score)), SG.splice(12, SG.length - 12))
        }
        this.minStackPos = SG[0].pos;
        for (let LG = 1; LG < SG.length; LG++) SG[LG].pos < this.minStackPos && (this.minStackPos = SG[LG].pos);
        return null
      }
      stopAt(GG) {
        if (null != this.stoppedAt && this.stoppedAt < GG) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = GG
      }
      advanceStack(GG, bG, ZG) {
        let SG = GG.pos,
          {
            parser: LG
          } = this,
          yG = rG ? this.stackID(GG) + " -> " : "";
        if (null != this.stoppedAt && SG > this.stoppedAt) return GG.forceReduce() ? GG : null;
        if (this.fragments) {
          let bG = GG.curContext && GG.curContext.tracker.strict,
            ZG = bG ? GG.curContext.hash : 0;
          for (let kG = this.fragments.nodeAt(SG); kG;) {
            let SG = this.parser.nodeSet.types[kG.type.id] == kG.type ? LG.getGoto(GG.state, kG.type.id) : -1;
            if (SG > -1 && kG.length && (!bG || (kG.prop(wG.i.contextHash) || 0) == ZG)) return GG.useNode(kG, SG), rG && console.log(yG + this.stackID(GG) + ` (via reuse of ${LG.getName(kG.type.id)})`), !0;
            if (!(kG instanceof wG.D) || 0 == kG.children.length || kG.positions[0] > 0) break;
            let UG = kG.children[0];
            if (!(UG instanceof wG.D && 0 == kG.positions[0])) break;
            kG = UG
          }
        }
        let kG = LG.stateSlot(GG.state, 4);
        if (kG > 0) return GG.reduce(kG), rG && console.log(yG + this.stackID(GG) + ` (via always-reduce ${LG.getName(65535&kG)})`), !0;
        if (GG.stack.length >= 8400)
          for (; GG.stack.length > 6e3 && GG.forceReduce(););
        let UG = this.tokens.getActions(GG);
        for (let wG = 0; wG < UG.length;) {
          let kG = UG[wG++],
            YG = UG[wG++],
            VG = UG[wG++],
            pG = wG == UG.length || !ZG,
            fG = pG ? GG : GG.split(),
            QG = this.tokens.mainToken;
          if (fG.apply(kG, YG, QG ? QG.start : fG.pos, VG), rG && console.log(yG + this.stackID(fG) + ` (via ${0==(65536&kG)?"shift":`reduce of ${LG.getName(65535&kG)}`} for ${LG.getName(YG)} @ ${SG}${fG==GG?"":", split"})`), pG) return !0;
          fG.pos > SG ? bG.push(fG) : ZG.push(fG)
        }
        return !1
      }
      advanceFully(GG, bG) {
        let ZG = GG.pos;
        for (;;) {
          if (!this.advanceStack(GG, null, null)) return !1;
          if (GG.pos > ZG) return iG(GG, bG), !0
        }
      }
      runRecovery(GG, bG, ZG) {
        let wG = null,
          SG = !1;
        for (let LG = 0; LG < GG.length; LG++) {
          let yG = GG[LG],
            kG = bG[LG << 1],
            UG = bG[1 + (LG << 1)],
            YG = rG ? this.stackID(yG) + " -> " : "";
          if (yG.deadEnd) {
            if (SG) continue;
            if (SG = !0, yG.restart(), rG && console.log(YG + this.stackID(yG) + " (restarted)"), this.advanceFully(yG, ZG)) continue
          }
          let VG = yG.split(),
            pG = YG;
          for (let GG = 0; GG < 10 && VG.forceReduce(); GG++) {
            if (rG && console.log(pG + this.stackID(VG) + " (via force-reduce)"), this.advanceFully(VG, ZG)) break;
            rG && (pG = this.stackID(VG) + " -> ")
          }
          for (let GG of yG.recoverByInsert(kG)) rG && console.log(YG + this.stackID(GG) + " (via recover-insert)"), this.advanceFully(GG, ZG);
          this.stream.end > yG.pos ? (UG == yG.pos && (UG++, kG = 0), yG.recoverByDelete(kG, UG), rG && console.log(YG + this.stackID(yG) + ` (via recover-delete ${this.parser.getName(kG)})`), iG(yG, ZG)) : (!wG || wG.score < VG.score) && (wG = VG)
        }
        return wG
      }
      stackToTree(GG) {
        return GG.close(), wG.D.build({
          buffer: kG.create(GG),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.Bh[0].from,
          length: GG.pos - this.Bh[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(GG) {
        let bG = (zG || (zG = new WeakMap)).get(GG);
        return bG || zG.set(GG, bG = String.fromCodePoint(this.nextStackID++)), bG + GG
      }
    }

    function iG(GG, bG) {
      for (let ZG = 0; ZG < bG.length; ZG++) {
        let wG = bG[ZG];
        if (wG.pos == GG.pos && wG.sameState(GG)) return void(bG[ZG].score < GG.score && (bG[ZG] = GG))
      }
      bG.push(GG)
    }
    class CG {
      constructor(GG, bG, ZG) {
        this.source = GG, this.flags = bG, this.disabled = ZG
      }
      allows(GG) {
        return !this.disabled || 0 == this.disabled[GG]
      }
    }
    const WG = GG => GG;
    class mG extends wG.v {
      constructor(GG) {
        if (super(), this.wrappers = [], 14 != GG.version) throw new RangeError(`Parser version (${GG.version}) doesn't match runtime version (14)`);
        let bG = GG.nodeNames.split(" ");
        this.minRepeatTerm = bG.length;
        for (let wG = 0; wG < GG.repeatNodeCount; wG++) bG.push("");
        let ZG = Object.keys(GG.topRules).map((bG => GG.topRules[bG][1])),
          SG = [];
        for (let wG = 0; wG < bG.length; wG++) SG.push([]);

        function LG(GG, bG, ZG) {
          SG[GG].push([bG, bG.deserialize(String(ZG))])
        }
        if (GG.nodeProps)
          for (let kG of GG.nodeProps) {
            let GG = kG[0];
            "string" == typeof GG && (GG = wG.i[GG]);
            for (let bG = 1; bG < kG.length;) {
              let ZG = kG[bG++];
              if (ZG >= 0) LG(ZG, GG, kG[bG++]);
              else {
                let wG = kG[bG + -ZG];
                for (let SG = -ZG; SG > 0; SG--) LG(kG[bG++], GG, wG);
                bG++
              }
            }
          }
        this.nodeSet = new wG.j(bG.map(((bG, LG) => wG.n.define({
          name: LG >= this.minRepeatTerm ? void 0 : bG,
          id: LG,
          props: SG[LG],
          top: ZG.indexOf(LG) > -1,
          error: 0 == LG,
          skipped: GG.skippedNodes && GG.skippedNodes.indexOf(LG) > -1
        })))), GG.propSources && (this.nodeSet = this.nodeSet.extend(...GG.propSources)), this.strict = !1, this.bufferLength = wG.e;
        let yG = UG(GG.tokenData);
        this.context = GG.context, this.specializerSpecs = GG.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let wG = 0; wG < this.specializerSpecs.length; wG++) this.specialized[wG] = this.specializerSpecs[wG].term;
        this.specializers = this.specializerSpecs.map(FG), this.states = UG(GG.states, Uint32Array), this.data = UG(GG.stateData), this.goto = UG(GG.goto), this.maxTerm = GG.maxTerm, this.tokenizers = GG.tokenizers.map((GG => "number" == typeof GG ? new fG(yG, GG) : GG)), this.topRules = GG.topRules, this.dialects = GG.dialects || {}, this.dynamicPrecedences = GG.dynamicPrecedences || null, this.tokenPrecTable = GG.tokenPrec, this.termNames = GG.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(GG, bG, ZG) {
        let wG = new uG(this, GG, bG, ZG);
        for (let SG of this.wrappers) wG = SG(wG, GG, bG, ZG);
        return wG
      }
      getGoto(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wG = this.goto;
        if (bG >= wG[0]) return -1;
        for (let SG = wG[bG + 1];;) {
          let bG = wG[SG++],
            LG = 1 & bG,
            yG = wG[SG++];
          if (LG && ZG) return yG;
          for (let ZG = SG + (bG >> 1); SG < ZG; SG++)
            if (wG[SG] == GG) return yG;
          if (LG) return -1
        }
      }
      hasAction(GG, bG) {
        let ZG = this.data;
        for (let wG = 0; wG < 2; wG++)
          for (let SG, LG = this.stateSlot(GG, wG ? 2 : 1);; LG += 3) {
            if (65535 == (SG = ZG[LG])) {
              if (1 != ZG[LG + 1]) {
                if (2 == ZG[LG + 1]) return IG(ZG, LG + 2);
                break
              }
              SG = ZG[LG = IG(ZG, LG + 2)]
            }
            if (SG == bG || 0 == SG) return IG(ZG, LG + 1)
          }
        return 0
      }
      stateSlot(GG, bG) {
        return this.states[6 * GG + bG]
      }
      stateFlag(GG, bG) {
        return (this.stateSlot(GG, 0) & bG) > 0
      }
      validAction(GG, bG) {
        return !!this.allActions(GG, (GG => GG == bG || null))
      }
      allActions(GG, bG) {
        let ZG = this.stateSlot(GG, 4),
          wG = ZG ? bG(ZG) : void 0;
        for (let SG = this.stateSlot(GG, 1); null == wG; SG += 3) {
          if (65535 == this.data[SG]) {
            if (1 != this.data[SG + 1]) break;
            SG = IG(this.data, SG + 2)
          }
          wG = bG(IG(this.data, SG + 1))
        }
        return wG
      }
      nextStates(GG) {
        let bG = [];
        for (let ZG = this.stateSlot(GG, 1);; ZG += 3) {
          if (65535 == this.data[ZG]) {
            if (1 != this.data[ZG + 1]) break;
            ZG = IG(this.data, ZG + 2)
          }
          if (0 == (1 & this.data[ZG + 2])) {
            let GG = this.data[ZG + 1];
            bG.some(((bG, ZG) => 1 & ZG && bG == GG)) || bG.push(this.data[ZG], GG)
          }
        }
        return bG
      }
      configure(GG) {
        let bG = Object.assign(Object.create(mG.prototype), this);
        if (GG.props && (bG.nodeSet = this.nodeSet.extend(...GG.props)), GG.top) {
          let ZG = this.topRules[GG.top];
          if (!ZG) throw new RangeError(`Invalid top rule name ${GG.top}`);
          bG.top = ZG
        }
        return GG.tokenizers && (bG.tokenizers = this.tokenizers.map((bG => {
          let ZG = GG.tokenizers.find((GG => GG.from == bG));
          return ZG ? ZG.to : bG
        }))), GG.specializers && (bG.specializers = this.specializers.slice(), bG.specializerSpecs = this.specializerSpecs.map(((ZG, wG) => {
          let SG = GG.specializers.find((GG => GG.from == ZG.external));
          if (!SG) return ZG;
          let LG = Object.assign(Object.assign({}, ZG), {
            external: SG.to
          });
          return bG.specializers[wG] = FG(LG), LG
        }))), GG.contextTracker && (bG.context = GG.contextTracker), GG.dialect && (bG.dialect = this.parseDialect(GG.dialect)), null != GG.strict && (bG.strict = GG.strict), GG.wrap && (bG.wrappers = bG.wrappers.concat(GG.wrap)), null != GG.bufferLength && (bG.bufferLength = GG.bufferLength), bG
      }
      hasWrappers() {
        return this.wrappers.length > 0
      }
      getName(GG) {
        return this.termNames ? this.termNames[GG] : String(GG <= this.maxNode && this.nodeSet.types[GG].name || GG)
      }
      get eofTerm() {
        return this.maxNode + 1
      }
      get topNode() {
        return this.nodeSet.types[this.top[1]]
      }
      dynamicPrecedence(GG) {
        let bG = this.dynamicPrecedences;
        return null == bG ? 0 : bG[GG] || 0
      }
      parseDialect(GG) {
        let bG = Object.keys(this.dialects),
          ZG = bG.map((() => !1));
        if (GG)
          for (let SG of GG.split(" ")) {
            let GG = bG.indexOf(SG);
            GG >= 0 && (ZG[GG] = !0)
          }
        let wG = null;
        for (let SG = 0; SG < bG.length; SG++)
          if (!ZG[SG])
            for (let GG, ZG = this.dialects[bG[SG]]; 65535 != (GG = this.data[ZG++]);)(wG || (wG = new Uint8Array(this.maxTerm + 1)))[GG] = 1;
        return new CG(GG, ZG, wG)
      }
      static deserialize(GG) {
        return new mG(GG)
      }
    }

    function IG(GG, bG) {
      return GG[bG] | GG[bG + 1] << 16
    }

    function FG(GG) {
      if (GG.external) {
        let bG = GG.extend ? 1 : 0;
        return (ZG, wG) => GG.external(ZG, wG) << 1 | bG
      }
      return GG.get
    }
    var vG = ZG(41771);
    const aG = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      cG = new class {
        constructor(GG) {
          this.start = GG.start, this.shift = GG.shift || WG, this.reduce = GG.reduce || WG, this.reuse = GG.reuse || WG, this.hash = GG.hash || (() => 0), this.strict = !1 !== GG.strict
        }
      }({
        start: !1,
        shift: (GG, bG) => 5 == bG || 6 == bG || 320 == bG ? GG : 321 == bG,
        strict: !1
      }),
      lG = new KG(((GG, bG) => {
        let {
          next: ZG
        } = GG;
        (125 == ZG || -1 == ZG || bG.context) && GG.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      jG = new KG(((GG, bG) => {
        let ZG, {
          next: wG
        } = GG;
        aG.indexOf(wG) > -1 || (47 != wG || 47 != (ZG = GG.peek(1)) && 42 != ZG) && (125 == wG || 59 == wG || -1 == wG || bG.context || GG.acceptToken(316))
      }), {
        contextual: !0
      }),
      PG = new KG(((GG, bG) => {
        91 != GG.next || bG.context || GG.acceptToken(317)
      }), {
        contextual: !0
      }),
      MG = new KG(((GG, bG) => {
        let {
          next: ZG
        } = GG;
        if (43 == ZG || 45 == ZG) {
          if (GG.advance(), ZG == GG.next) {
            GG.advance();
            let ZG = !bG.context && bG.canShift(1);
            GG.acceptToken(ZG ? 1 : 2)
          }
        } else 63 == ZG && 46 == GG.peek(1) && (GG.advance(), GG.advance(), (GG.next < 48 || GG.next > 57) && GG.acceptToken(3))
      }), {
        contextual: !0
      });

    function AG(GG, bG) {
      return GG >= 65 && GG <= 90 || GG >= 97 && GG <= 122 || 95 == GG || GG >= 192 || !bG && GG >= 48 && GG <= 57
    }
    const sG = new KG(((GG, bG) => {
        if (60 != GG.next || !bG.dialectEnabled(0)) return;
        if (GG.advance(), 47 == GG.next) return;
        let ZG = 0;
        for (; aG.indexOf(GG.next) > -1;) GG.advance(), ZG++;
        if (AG(GG.next, !0)) {
          for (GG.advance(), ZG++; AG(GG.next, !1);) GG.advance(), ZG++;
          for (; aG.indexOf(GG.next) > -1;) GG.advance(), ZG++;
          if (44 == GG.next) return;
          for (let bG = 0;; bG++) {
            if (7 == bG) {
              if (!AG(GG.next, !0)) return;
              break
            }
            if (GG.next != "extends".charCodeAt(bG)) break;
            GG.advance(), ZG++
          }
        }
        GG.acceptToken(4, -ZG)
      })),
      qG = (0, vG.g)({
        "get set async static": vG.k.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": vG.k.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": vG.k.operatorKeyword,
        "let var const using function class extends": vG.k.definitionKeyword,
        "import export from": vG.k.moduleKeyword,
        "with debugger new": vG.k.keyword,
        TemplateString: vG.k.special(vG.k.string),
        super: vG.k.atom,
        BooleanLiteral: vG.k.bool,
        this: vG.k.self,
        null: vG.k.null,
        Star: vG.k.modifier,
        VariableName: vG.k.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": vG.k.function(vG.k.variableName),
        VariableDefinition: vG.k.definition(vG.k.variableName),
        Label: vG.k.labelName,
        PropertyName: vG.k.propertyName,
        PrivatePropertyName: vG.k.special(vG.k.propertyName),
        "CallExpression/MemberExpression/PropertyName": vG.k.function(vG.k.propertyName),
        "FunctionDeclaration/VariableDefinition": vG.k.function(vG.k.definition(vG.k.variableName)),
        "ClassDeclaration/VariableDefinition": vG.k.definition(vG.k.className),
        "NewExpression/VariableName": vG.k.className,
        PropertyDefinition: vG.k.definition(vG.k.propertyName),
        PrivatePropertyDefinition: vG.k.definition(vG.k.special(vG.k.propertyName)),
        UpdateOp: vG.k.updateOperator,
        "LineComment Hashbang": vG.k.lineComment,
        BlockComment: vG.k.blockComment,
        Number: vG.k.number,
        String: vG.k.string,
        Escape: vG.k.escape,
        ArithOp: vG.k.arithmeticOperator,
        LogicOp: vG.k.logicOperator,
        BitOp: vG.k.bitwiseOperator,
        CompareOp: vG.k.compareOperator,
        RegExp: vG.k.regexp,
        Equals: vG.k.definitionOperator,
        Arrow: vG.k.function(vG.k.punctuation),
        ": Spread": vG.k.punctuation,
        "( )": vG.k.paren,
        "[ ]": vG.k.squareBracket,
        "{ }": vG.k.brace,
        "InterpolationStart InterpolationEnd": vG.k.special(vG.k.brace),
        ".": vG.k.derefOperator,
        ", ;": vG.k.separator,
        "@": vG.k.meta,
        TypeName: vG.k.typeName,
        TypeDefinition: vG.k.definition(vG.k.typeName),
        "type enum interface implements namespace module declare": vG.k.definitionKeyword,
        "abstract global Privacy readonly override": vG.k.modifier,
        "is keyof unique infer asserts": vG.k.operatorKeyword,
        JSXAttributeValue: vG.k.attributeValue,
        JSXText: vG.k.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": vG.k.angleBracket,
        "JSXIdentifier JSXNameSpacedName": vG.k.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": vG.k.attributeName,
        "JSXBuiltin/JSXIdentifier": vG.k.standard(vG.k.tagName)
      }),
      nG = {
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
      gG = {
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
      eG = {
        __proto__: null,
        "<": 193
      },
      RG = mG.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: cG,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [qG],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [jG, PG, MG, sG, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, lG, new QG("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new QG("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: GG => nG[GG] || -1
        }, {
          term: 343,
          get: GG => gG[GG] || -1
        }, {
          term: 95,
          get: GG => eG[GG] || -1
        }],
        tokenPrec: 15201
      });
    var TG = ZG(41754),
      HG = ZG(41727),
      tG = ZG(41735),
      DG = ZG(41721);
    const NG = [(0, DG.o)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, DG.o)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, DG.o)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, DG.o)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, DG.o)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, DG.o)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, DG.o)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, DG.o)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, DG.o)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, DG.o)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, DG.o)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      OG = NG.concat([(0, DG.o)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, DG.o)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, DG.o)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      xG = new wG.r,
      BG = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function Gb(GG) {
      return (bG, ZG) => {
        let wG = bG.node.getChild("VariableDefinition");
        return wG && ZG(wG, GG), !0
      }
    }
    const bb = ["FunctionDeclaration"],
      Zb = {
        FunctionDeclaration: Gb("function"),
        ClassDeclaration: Gb("class"),
        ClassExpression: () => !0,
        EnumDeclaration: Gb("constant"),
        TypeAliasDeclaration: Gb("type"),
        NamespaceDeclaration: Gb("namespace"),
        VariableDefinition(GG, bG) {
          GG.matchContext(bb) || bG(GG, "variable")
        },
        TypeDefinition(GG, bG) {
          bG(GG, "type")
        },
        __proto__: null
      };

    function wb(GG, bG) {
      let ZG = xG.get(bG);
      if (ZG) return ZG;
      let SG = [],
        LG = !0;

      function yG(bG, ZG) {
        let wG = GG.sliceString(bG.from, bG.to);
        SG.push({
          label: wG,
          type: ZG
        })
      }
      return bG.cursor(wG.h.IncludeAnonymous).iterate((bG => {
        if (LG) LG = !1;
        else if (bG.name) {
          let GG = Zb[bG.name];
          if (GG && GG(bG, yG) || BG.has(bG.name)) return !1
        } else if (bG.to - bG.from > 8192) {
          for (let ZG of wb(GG, bG.node)) SG.push(ZG);
          return !1
        }
      })), xG.set(bG, SG), SG
    }
    const Sb = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      Lb = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function yb(GG) {
      let bG = (0, TG.gb)(GG.state).resolveInner(GG.pos, -1);
      if (Lb.indexOf(bG.name) > -1) return null;
      let ZG = "VariableName" == bG.name || bG.to - bG.from < 20 && Sb.test(GG.state.sliceDoc(bG.from, bG.to));
      if (!ZG && !GG.explicit) return null;
      let wG = [];
      for (let SG = bG; SG; SG = SG.parent) BG.has(SG.name) && (wG = wG.concat(wb(GG.state.doc, SG)));
      return {
        options: wG,
        from: ZG ? bG.from : GG.pos,
        validFor: Sb
      }
    }
    const kb = TG.g.define({
        name: "javascript",
        parser: RG.configure({
          props: [TG.Q.add({
            IfStatement: (0, TG.l)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, TG.l)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: TG.v,
            SwitchBody: GG => {
              let bG = GG.textAfter,
                ZG = /^\s*\}/.test(bG),
                wG = /^\s*(case|default)\b/.test(bG);
              return GG.baseIndent + (ZG ? 0 : wG ? 1 : 2) * GG.unit
            },
            Block: (0, TG.t)({
              closing: "}"
            }),
            ArrowFunction: GG => GG.baseIndent + GG.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, TG.l)({
              except: /^\s*{/
            }),
            JSXElement(GG) {
              let bG = /^\s*<\//.test(GG.textAfter);
              return GG.lineIndent(GG.node.from) + (bG ? 0 : GG.unit)
            },
            JSXEscape(GG) {
              let bG = /\s*\}/.test(GG.textAfter);
              return GG.lineIndent(GG.node.from) + (bG ? 0 : GG.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": GG => GG.column(GG.node.from) + GG.unit
          }), TG.F.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": TG.A,
            BlockComment: GG => ({
              from: GG.from + 2,
              to: GG.to - 2
            }),
            JSXElement(GG) {
              let bG = GG.firstChild;
              if (!bG || "JSXSelfClosingTag" == bG.name) return null;
              let ZG = GG.lastChild;
              return {
                from: bG.to,
                to: ZG.type.isError ? GG.to : ZG.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(GG) {
              var bG;
              let ZG = null === (bG = GG.firstChild) || void 0 === bG ? void 0 : bG.nextSibling,
                wG = GG.lastChild;
              return !ZG || ZG.type.isError ? null : {
                from: ZG.to,
                to: wG.type.isError ? GG.to : wG.from
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
      Ub = {
        test: GG => /^JSX/.test(GG.name),
        facet: (0, TG.q)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      Yb = kb.configure({
        dialect: "ts"
      }, "typescript"),
      Vb = kb.configure({
        dialect: "jsx",
        props: [TG.Z.add((GG => GG.isTop ? [Ub] : void 0))]
      }),
      pb = kb.configure({
        dialect: "jsx ts",
        props: [TG.Z.add((GG => GG.isTop ? [Ub] : void 0))]
      }, "typescript");
    let fb = GG => ({
      label: GG,
      type: "keyword"
    });
    const Qb = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(fb),
      Kb = Qb.concat(["declare", "implements", "private", "protected", "public"].map(fb));

    function hb() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        bG = GG.jsx ? GG.typescript ? pb : Vb : GG.typescript ? Yb : kb,
        ZG = GG.typescript ? OG.concat(Kb) : NG.concat(Qb);
      return new TG.h(bG, [kb.data.of({
        autocomplete: (0, DG.m)(Lb, (0, DG.j)(ZG))
      }), kb.data.of({
        autocomplete: yb
      }), GG.jsx ? rb : []])
    }

    function db(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : GG.length;
      for (let wG = null === bG || void 0 === bG ? void 0 : bG.firstChild; wG; wG = wG.nextSibling)
        if ("JSXIdentifier" == wG.name || "JSXBuiltin" == wG.name || "JSXNamespacedName" == wG.name || "JSXMemberExpression" == wG.name) return GG.sliceString(wG.from, Math.min(wG.to, ZG));
      return ""
    }
    const Jb = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      rb = tG.h.inputHandler.of(((GG, bG, ZG, wG, SG) => {
        if ((Jb ? GG.composing : GG.compositionStarted) || GG.state.readOnly || bG != ZG || ">" != wG && "/" != wG || !kb.isActiveAt(GG.state, bG, -1)) return !1;
        let LG = SG(),
          {
            state: yG
          } = LG,
          kG = yG.changeByRange((GG => {
            var bG;
            let ZG, {
                head: SG
              } = GG,
              LG = (0, TG.gb)(yG).resolveInner(SG - 1, -1);
            if ("JSXStartTag" == LG.name && (LG = LG.parent), yG.doc.sliceString(SG - 1, SG) != wG || "JSXAttributeValue" == LG.name && LG.to > SG);
            else {
              if (">" == wG && "JSXFragmentTag" == LG.name) return {
                range: GG,
                changes: {
                  from: SG,
                  insert: "</>"
                }
              };
              if ("/" == wG && "JSXStartCloseTag" == LG.name) {
                let GG = LG.parent,
                  wG = GG.parent;
                if (wG && GG.from == SG - 2 && ((ZG = db(yG.doc, wG.firstChild, SG)) || "JSXFragmentTag" == (null === (bG = wG.firstChild) || void 0 === bG ? void 0 : bG.name))) {
                  let GG = `${ZG}>`;
                  return {
                    range: HG.j.cursor(SG + GG.length, -1),
                    changes: {
                      from: SG,
                      insert: GG
                    }
                  }
                }
              } else if (">" == wG) {
                let bG = function(GG) {
                  for (;;) {
                    if ("JSXOpenTag" == GG.name || "JSXSelfClosingTag" == GG.name || "JSXFragmentTag" == GG.name) return GG;
                    if ("JSXEscape" == GG.name || !GG.parent) return null;
                    GG = GG.parent
                  }
                }(LG);
                if (bG && "JSXOpenTag" == bG.name && !/^\/?>|^<\//.test(yG.doc.sliceString(SG, SG + 2)) && (ZG = db(yG.doc, bG, SG))) return {
                  range: GG,
                  changes: {
                    from: SG,
                    insert: `</${ZG}>`
                  }
                }
              }
            }
            return {
              range: GG
            }
          }));
        return !kG.changes.empty && (GG.dispatch([LG, yG.update(kG, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  41754: (GG, bG, ZG) => {
    ZG.d(bG, {
      A: () => NG,
      C: () => Yb,
      F: () => DG,
      J: () => JG,
      M: () => vG,
      N: () => cG,
      Q: () => jG,
      T: () => HG,
      U: () => aG,
      X: () => FG,
      Y: () => gb,
      Z: () => pG,
      ab: () => ib,
      b: () => Eb,
      c: () => lG,
      cb: () => dG,
      g: () => KG,
      gb: () => hG,
      h: () => mG,
      i: () => Ab,
      l: () => RG,
      n: () => mb,
      q: () => VG,
      t: () => nG,
      v: () => eG,
      z: () => rb
    });
    var wG, SG = ZG(41763),
      LG = ZG(41727),
      yG = ZG(41735),
      kG = ZG(41771),
      UG = ZG(41742);
    const YG = new SG.i;

    function VG(GG) {
      return LG.m.define({
        combine: GG ? bG => bG.concat(GG) : void 0
      })
    }
    const pG = new SG.i;
    class fG {
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = GG, this.name = wG, LG.l.prototype.hasOwnProperty("tree") || Object.defineProperty(LG.l.prototype, "tree", {
          get() {
            return hG(this)
          }
        }), this.parser = bG, this.extension = [WG.of(this), LG.l.languageData.of(((GG, bG, ZG) => {
          let wG = QG(GG, bG, ZG),
            SG = wG.type.prop(YG);
          if (!SG) return [];
          let LG = GG.facet(SG),
            yG = wG.type.prop(pG);
          if (yG) {
            let SG = wG.resolve(bG - wG.from, ZG);
            for (let bG of yG)
              if (bG.test(SG, GG)) {
                let ZG = GG.facet(bG.facet);
                return "replace" == bG.type ? ZG : ZG.concat(LG)
              }
          }
          return LG
        }))].concat(ZG)
      }
      isActiveAt(GG, bG) {
        return QG(GG, bG, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(YG) == this.data
      }
      findRegions(GG) {
        let bG = GG.facet(WG);
        if ((null === bG || void 0 === bG ? void 0 : bG.data) == this.data) return [{
          from: 0,
          to: GG.doc.length
        }];
        if (!bG || !bG.allowsNesting) return [];
        let ZG = [],
          wG = (GG, bG) => {
            if (GG.prop(YG) == this.data) return void ZG.push({
              from: bG,
              to: bG + GG.length
            });
            let LG = GG.prop(SG.i.mounted);
            if (LG) {
              if (LG.tree.prop(YG) == this.data) {
                if (LG.overlay)
                  for (let GG of LG.overlay) ZG.push({
                    from: GG.from + bG,
                    to: GG.to + bG
                  });
                else ZG.push({
                  from: bG,
                  to: bG + GG.length
                });
                return
              }
              if (LG.overlay) {
                let GG = ZG.length;
                if (wG(LG.tree, LG.overlay[0].from + bG), ZG.length > GG) return
              }
            }
            for (let ZG = 0; ZG < GG.children.length; ZG++) {
              let LG = GG.children[ZG];
              LG instanceof SG.D && wG(LG, GG.positions[ZG] + bG)
            }
          };
        return wG(hG(GG), 0), ZG
      }
      get allowsNesting() {
        return !0
      }
    }

    function QG(GG, bG, ZG) {
      let wG = GG.facet(WG),
        LG = hG(GG).topNode;
      if (!wG || wG.allowsNesting)
        for (let yG = LG; yG; yG = yG.enter(bG, ZG, SG.h.ExcludeBuffers | SG.h.EnterBracketed)) yG.type.isTop && (LG = yG);
      return LG
    }
    fG.setState = LG.C.define();
    class KG extends fG {
      constructor(GG, bG, ZG) {
        super(GG, bG, [], ZG), this.parser = bG
      }
      static define(GG) {
        let bG = VG(GG.languageData);
        return new KG(bG, GG.parser.configure({
          props: [YG.add((GG => GG.isTop ? bG : void 0))]
        }), GG.name)
      }
      configure(GG, bG) {
        return new KG(this.data, this.parser.configure(GG), bG || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function hG(GG) {
      let bG = GG.field(fG.state, !1);
      return bG ? bG.tree : SG.D.empty
    }

    function dG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GG.doc.length;
      var ZG;
      return (null === (ZG = GG.field(fG.state, !1)) || void 0 === ZG ? void 0 : ZG.context.isDone(bG)) || !1
    }

    function JG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GG.viewport.to,
        ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        wG = function(GG, bG) {
          let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var wG;
          let SG = null === (wG = GG.field(fG.state, !1)) || void 0 === wG ? void 0 : wG.context;
          if (!SG) return null;
          let LG = SG.viewport;
          SG.updateViewport({
            from: 0,
            to: bG
          });
          let yG = SG.isDone(bG) || SG.work(ZG, bG) ? SG.tree : null;
          return SG.updateViewport(LG), yG
        }(GG.state, bG, ZG);
      return wG != hG(GG.state) && GG.dispatch({}), !!wG
    }
    class rG {
      constructor(GG) {
        this.doc = GG, this.cursorPos = 0, this.string = "", this.cursor = GG.iter()
      }
      get length() {
        return this.doc.length
      }
      syncTo(GG) {
        return this.string = this.cursor.next(GG - this.cursorPos).value, this.cursorPos = GG + this.string.length, this.cursorPos - this.string.length
      }
      chunk(GG) {
        return this.syncTo(GG), this.string
      }
      get lineChunks() {
        return !0
      }
      read(GG, bG) {
        let ZG = this.cursorPos - this.string.length;
        return GG < ZG || bG >= this.cursorPos ? this.doc.sliceString(GG, bG) : this.string.slice(GG - ZG, bG - ZG)
      }
    }
    let zG = null;
    class EG {
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          wG = arguments.length > 3 ? arguments[3] : void 0,
          SG = arguments.length > 4 ? arguments[4] : void 0,
          LG = arguments.length > 5 ? arguments[5] : void 0,
          yG = arguments.length > 6 ? arguments[6] : void 0,
          kG = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = GG, this.state = bG, this.fragments = ZG, this.tree = wG, this.treeLen = SG, this.viewport = LG, this.skipped = yG, this.scheduleOn = kG, this.parse = null, this.tempSkipped = []
      }
      static create(GG, bG, ZG) {
        return new EG(GG, bG, [], SG.D.empty, 0, ZG, [], null)
      }
      startParse() {
        return this.parser.startParse(new rG(this.state.doc), this.fragments)
      }
      work(GG, bG) {
        return null != bG && bG >= this.state.doc.length && (bG = void 0), this.tree != SG.D.empty && this.isDone(null !== bG && void 0 !== bG ? bG : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var ZG;
          if ("number" == typeof GG) {
            let bG = Date.now() + GG;
            GG = () => Date.now() > bG
          }
          for (this.parse || (this.parse = this.startParse()), null != bG && (null == this.parse.stoppedAt || this.parse.stoppedAt > bG) && bG < this.state.doc.length && this.parse.stopAt(bG);;) {
            let wG = this.parse.advance();
            if (wG) {
              if (this.fragments = this.withoutTempSkipped(SG.z.addTree(wG, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (ZG = this.parse.stoppedAt) && void 0 !== ZG ? ZG : this.state.doc.length, this.tree = wG, this.parse = null, !(this.treeLen < (null !== bG && void 0 !== bG ? bG : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (GG()) return !1
          }
        }))
      }
      takeTree() {
        let GG, bG;
        this.parse && (GG = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > GG) && this.parse.stopAt(GG), this.withContext((() => {
          for (; !(bG = this.parse.advance()););
        })), this.treeLen = GG, this.tree = bG, this.fragments = this.withoutTempSkipped(SG.z.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(GG) {
        let bG = zG;
        zG = this;
        try {
          return GG()
        } finally {
          zG = bG
        }
      }
      withoutTempSkipped(GG) {
        for (let bG; bG = this.tempSkipped.pop();) GG = oG(GG, bG.from, bG.to);
        return GG
      }
      changes(GG, bG) {
        let {
          fragments: ZG,
          tree: wG,
          treeLen: LG,
          viewport: yG,
          skipped: kG
        } = this;
        if (this.takeTree(), !GG.empty) {
          let bG = [];
          if (GG.iterChangedRanges(((GG, ZG, wG, SG) => bG.push({
              fromA: GG,
              toA: ZG,
              fromB: wG,
              toB: SG
            }))), ZG = SG.z.applyChanges(ZG, bG), wG = SG.D.empty, LG = 0, yG = {
              from: GG.mapPos(yG.from, -1),
              to: GG.mapPos(yG.to, 1)
            }, this.skipped.length) {
            kG = [];
            for (let bG of this.skipped) {
              let ZG = GG.mapPos(bG.from, 1),
                wG = GG.mapPos(bG.to, -1);
              ZG < wG && kG.push({
                from: ZG,
                to: wG
              })
            }
          }
        }
        return new EG(this.parser, bG, ZG, wG, LG, yG, kG, this.scheduleOn)
      }
      updateViewport(GG) {
        if (this.viewport.from == GG.from && this.viewport.to == GG.to) return !1;
        this.viewport = GG;
        let bG = this.skipped.length;
        for (let ZG = 0; ZG < this.skipped.length; ZG++) {
          let {
            from: bG,
            to: wG
          } = this.skipped[ZG];
          bG < GG.to && wG > GG.from && (this.fragments = oG(this.fragments, bG, wG), this.skipped.splice(ZG--, 1))
        }
        return !(this.skipped.length >= bG) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(GG, bG) {
        this.skipped.push({
          from: GG,
          to: bG
        })
      }
      static getSkippingParser(GG) {
        return new class extends SG.v {
          createParse(bG, ZG, wG) {
            let LG = wG[0].from,
              yG = wG[wG.length - 1].to;
            return {
              parsedPos: LG,
              advance() {
                let bG = zG;
                if (bG) {
                  for (let GG of wG) bG.tempSkipped.push(GG);
                  GG && (bG.scheduleOn = bG.scheduleOn ? Promise.all([bG.scheduleOn, GG]) : GG)
                }
                return this.parsedPos = yG, new SG.D(SG.n.none, [], [], yG - LG)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(GG) {
        GG = Math.min(GG, this.state.doc.length);
        let bG = this.fragments;
        return this.treeLen >= GG && bG.length && 0 == bG[0].from && bG[0].to >= GG
      }
      static get() {
        return zG
      }
    }

    function oG(GG, bG, ZG) {
      return SG.z.applyChanges(GG, [{
        fromA: bG,
        toA: ZG,
        fromB: bG,
        toB: ZG
      }])
    }
    class XG {
      constructor(GG) {
        this.context = GG, this.tree = GG.tree
      }
      apply(GG) {
        if (!GG.docChanged && this.tree == this.context.tree) return this;
        let bG = this.context.changes(GG.changes, GG.state),
          ZG = this.context.treeLen == GG.startState.doc.length ? void 0 : Math.max(GG.changes.mapPos(this.context.treeLen), bG.viewport.to);
        return bG.work(20, ZG) || bG.takeTree(), new XG(bG)
      }
      static init(GG) {
        let bG = Math.min(3e3, GG.doc.length),
          ZG = EG.create(GG.facet(WG).parser, GG, {
            from: 0,
            to: bG
          });
        return ZG.work(20, bG) || ZG.takeTree(), new XG(ZG)
      }
    }
    fG.state = LG.G.define({
      create: XG.init,
      update(GG, bG) {
        for (let ZG of bG.effects)
          if (ZG.is(fG.setState)) return ZG.value;
        return bG.startState.facet(WG) != bG.state.facet(WG) ? XG.init(bG.state) : GG.apply(bG)
      }
    });
    let uG = GG => {
      let bG = setTimeout((() => GG()), 500);
      return () => clearTimeout(bG)
    };
    "undefined" != typeof requestIdleCallback && (uG = GG => {
      let bG = -1,
        ZG = setTimeout((() => {
          bG = requestIdleCallback(GG, {
            timeout: 400
          })
        }), 100);
      return () => bG < 0 ? clearTimeout(ZG) : cancelIdleCallback(bG)
    });
    const iG = "undefined" != typeof navigator && (null === (wG = navigator.scheduling) || void 0 === wG ? void 0 : wG.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      CG = yG.j.fromClass(class {
        constructor(GG) {
          this.view = GG, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(GG) {
          let bG = this.view.state.field(fG.state).context;
          (bG.updateViewport(GG.view.viewport) || this.view.viewport.to > bG.treeLen) && this.scheduleWork(), (GG.docChanged || GG.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(bG)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: GG
          } = this.view, bG = GG.field(fG.state);
          bG.tree == bG.context.tree && bG.context.isDone(GG.doc.length) || (this.working = uG(this.work))
        }
        work(GG) {
          this.working = null;
          let bG = Date.now();
          if (this.chunkEnd < bG && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = bG + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: ZG,
            viewport: {
              to: wG
            }
          } = this.view, SG = ZG.field(fG.state);
          if (SG.tree == SG.context.tree && SG.context.isDone(wG + 1e5)) return;
          let LG = Date.now() + Math.min(this.chunkBudget, 100, GG && !iG ? Math.max(25, GG.timeRemaining() - 5) : 1e9),
            yG = SG.context.treeLen < wG && ZG.doc.length > wG + 1e3,
            kG = SG.context.work((() => iG && iG() || Date.now() > LG), wG + (yG ? 0 : 1e5));
          this.chunkBudget -= Date.now() - bG, (kG || this.chunkBudget <= 0) && (SG.context.takeTree(), this.view.dispatch({
            effects: fG.setState.of(new XG(SG.context))
          })), this.chunkBudget > 0 && (!kG || yG) && this.scheduleWork(), this.checkAsyncSchedule(SG.context)
        }
        checkAsyncSchedule(GG) {
          GG.scheduleOn && (this.workScheduled++, GG.scheduleOn.then((() => this.scheduleWork())).catch((GG => (0, yG.W)(this.view.state, GG))).then((() => this.workScheduled--)), GG.scheduleOn = null)
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
      WG = LG.m.define({
        combine: GG => GG.length ? GG[0] : null,
        enables: GG => [fG.state, CG, yG.h.contentAttributes.compute([GG], (bG => {
          let ZG = bG.facet(GG);
          return ZG && ZG.name ? {
            "data-language": ZG.name
          } : {}
        }))]
      });
    class mG {
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = GG, this.support = bG, this.extension = [GG, bG]
      }
    }
    const IG = LG.m.define(),
      FG = LG.m.define({
        combine: GG => {
          if (!GG.length) return "  ";
          let bG = GG[0];
          if (!bG || /\S/.test(bG) || Array.from(bG).some((GG => GG != bG[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(GG[0]));
          return bG
        }
      });

    function vG(GG) {
      let bG = GG.facet(FG);
      return 9 == bG.charCodeAt(0) ? GG.tabSize * bG.length : bG.length
    }

    function aG(GG, bG) {
      let ZG = "",
        wG = GG.tabSize,
        SG = GG.facet(FG)[0];
      if ("\t" == SG) {
        for (; bG >= wG;) ZG += "\t", bG -= wG;
        SG = " "
      }
      for (let LG = 0; LG < bG; LG++) ZG += SG;
      return ZG
    }

    function cG(GG, bG) {
      GG instanceof LG.l && (GG = new lG(GG));
      for (let wG of GG.state.facet(IG)) {
        let ZG = wG(GG, bG);
        if (void 0 !== ZG) return ZG
      }
      let ZG = hG(GG.state);
      return ZG.length >= bG ? function(GG, bG, ZG) {
        let wG = bG.resolveStack(ZG),
          SG = bG.resolveInner(ZG, -1).resolve(ZG, 0).enterUnfinishedNodesBefore(ZG);
        if (SG != wG.node) {
          let GG = [];
          for (let bG = SG; bG && !(bG.from < wG.node.from || bG.to > wG.node.to || bG.from == wG.node.from && bG.type == wG.node.type); bG = bG.parent) GG.push(bG);
          for (let bG = GG.length - 1; bG >= 0; bG--) wG = {
            node: GG[bG],
            next: wG
          }
        }
        return PG(wG, GG, ZG)
      }(GG, ZG, bG) : null
    }
    class lG {
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = GG, this.options = bG, this.unit = vG(GG)
      }
      lineAt(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZG = this.state.doc.lineAt(GG),
          {
            simulateBreak: wG,
            simulateDoubleBreak: SG
          } = this.options;
        return null != wG && wG >= ZG.from && wG <= ZG.to ? SG && wG == GG ? {
          text: "",
          from: GG
        } : (bG < 0 ? wG < GG : wG <= GG) ? {
          text: ZG.text.slice(wG - ZG.from),
          from: wG
        } : {
          text: ZG.text.slice(0, wG - ZG.from),
          from: ZG.from
        } : ZG
      }
      textAfterPos(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && GG == this.options.simulateBreak) return "";
        let {
          text: ZG,
          from: wG
        } = this.lineAt(GG, bG);
        return ZG.slice(GG - wG, Math.min(ZG.length, GG + 100 - wG))
      }
      column(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: ZG,
            from: wG
          } = this.lineAt(GG, bG),
          SG = this.countColumn(ZG, GG - wG),
          LG = this.options.overrideIndentation ? this.options.overrideIndentation(wG) : -1;
        return LG > -1 && (SG += LG - this.countColumn(ZG, ZG.search(/\S|$/))), SG
      }
      countColumn(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GG.length;
        return (0, LG.T)(GG, this.state.tabSize, bG)
      }
      lineIndent(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: ZG,
            from: wG
          } = this.lineAt(GG, bG),
          SG = this.options.overrideIndentation;
        if (SG) {
          let GG = SG(wG);
          if (GG > -1) return GG
        }
        return this.countColumn(ZG, ZG.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const jG = new SG.i;

    function PG(GG, bG, ZG) {
      for (let wG = GG; wG; wG = wG.next) {
        let GG = MG(wG.node);
        if (GG) return GG(sG.create(bG, ZG, wG))
      }
      return 0
    }

    function MG(GG) {
      let bG = GG.type.prop(jG);
      if (bG) return bG;
      let ZG, wG = GG.firstChild;
      if (wG && (ZG = wG.type.prop(SG.i.closedBy))) {
        let bG = GG.lastChild,
          wG = bG && ZG.indexOf(bG.name) > -1;
        return GG => gG(GG, !0, 1, void 0, wG && ! function(GG) {
          return GG.pos == GG.options.simulateBreak && GG.options.simulateDoubleBreak
        }(GG) ? bG.from : void 0)
      }
      return null == GG.parent ? AG : null
    }

    function AG() {
      return 0
    }
    class sG extends lG {
      constructor(GG, bG, ZG) {
        super(GG.state, GG.options), this.base = GG, this.pos = bG, this.context = ZG
      }
      get node() {
        return this.context.node
      }
      static create(GG, bG, ZG) {
        return new sG(GG, bG, ZG)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(GG) {
        let bG = this.state.doc.lineAt(GG.from);
        for (;;) {
          let ZG = GG.resolve(bG.from);
          for (; ZG.parent && ZG.parent.from == ZG.from;) ZG = ZG.parent;
          if (qG(ZG, GG)) break;
          bG = this.state.doc.lineAt(ZG.from)
        }
        return this.lineIndent(bG.from)
      }
      continue () {
        return PG(this.context.next, this.base, this.pos)
      }
    }

    function qG(GG, bG) {
      for (let ZG = bG; ZG; ZG = ZG.parent)
        if (GG == ZG) return !0;
      return !1
    }

    function nG(GG) {
      let {
        closing: bG,
        align: ZG = !0,
        units: wG = 1
      } = GG;
      return GG => gG(GG, ZG, wG, bG)
    }

    function gG(GG, bG, ZG, wG, SG) {
      let LG = GG.textAfter,
        yG = LG.match(/^\s*/)[0].length,
        kG = wG && LG.slice(yG, yG + wG.length) == wG || SG == GG.pos + yG,
        UG = bG ? function(GG) {
          let bG = GG.node,
            ZG = bG.childAfter(bG.from),
            wG = bG.lastChild;
          if (!ZG) return null;
          let SG = GG.options.simulateBreak,
            LG = GG.state.doc.lineAt(ZG.from),
            yG = null == SG || SG <= LG.from ? LG.to : Math.min(LG.to, SG);
          for (let kG = ZG.to;;) {
            let GG = bG.childAfter(kG);
            if (!GG || GG == wG) return null;
            if (!GG.type.isSkipped) {
              if (GG.from >= yG) return null;
              let bG = /^ */.exec(LG.text.slice(ZG.to - LG.from))[0].length;
              return {
                from: ZG.from,
                to: ZG.to + bG
              }
            }
            kG = GG.to
          }
        }(GG) : null;
      return UG ? kG ? GG.column(UG.from) : GG.column(UG.to) : GG.baseIndent + (kG ? 0 : GG.unit * ZG)
    }
    const eG = GG => GG.baseIndent;

    function RG() {
      let {
        except: GG,
        units: bG = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return ZG => {
        let wG = GG && GG.test(ZG.textAfter);
        return ZG.baseIndent + (wG ? 0 : bG * ZG.unit)
      }
    }
    const TG = 200;

    function HG() {
      return LG.l.transactionFilter.of((GG => {
        if (!GG.docChanged || !GG.isUserEvent("input.type") && !GG.isUserEvent("input.complete")) return GG;
        let bG = GG.startState.languageDataAt("indentOnInput", GG.startState.selection.main.head);
        if (!bG.length) return GG;
        let ZG = GG.newDoc,
          {
            head: wG
          } = GG.newSelection.main,
          SG = ZG.lineAt(wG);
        if (wG > SG.from + TG) return GG;
        let LG = ZG.sliceString(SG.from, wG);
        if (!bG.some((GG => GG.test(LG)))) return GG;
        let {
          state: yG
        } = GG, kG = -1, UG = [];
        for (let {
            head: YG
          }
          of yG.selection.Bh) {
          let GG = yG.doc.lineAt(YG);
          if (GG.from == kG) continue;
          kG = GG.from;
          let bG = cG(yG, GG.from);
          if (null == bG) continue;
          let ZG = /^\s*/.exec(GG.text)[0],
            wG = aG(yG, bG);
          ZG != wG && UG.push({
            from: GG.from,
            to: GG.from + ZG.length,
            insert: wG
          })
        }
        return UG.length ? [GG, {
          changes: UG,
          sequential: !0
        }] : GG
      }))
    }
    const tG = LG.m.define(),
      DG = new SG.i;

    function NG(GG) {
      let bG = GG.firstChild,
        ZG = GG.lastChild;
      return bG && bG.to < ZG.from ? {
        from: bG.to,
        to: ZG.type.isError ? GG.to : ZG.from
      } : null
    }

    function OG(GG) {
      let bG = GG.lastChild;
      return bG && bG.to == GG.to && bG.type.isError
    }

    function xG(GG, bG, ZG) {
      for (let wG of GG.facet(tG)) {
        let SG = wG(GG, bG, ZG);
        if (SG) return SG
      }
      return function(GG, bG, ZG) {
        let wG = hG(GG);
        if (wG.length < ZG) return null;
        let SG = null;
        for (let LG = wG.resolveStack(ZG, 1); LG; LG = LG.next) {
          let yG = LG.node;
          if (yG.to <= ZG || yG.from > ZG) continue;
          if (SG && yG.from < bG) break;
          let kG = yG.type.prop(DG);
          if (kG && (yG.to < wG.length - 50 || wG.length == GG.doc.length || !OG(yG))) {
            let wG = kG(yG, GG);
            wG && wG.from <= ZG && wG.from >= bG && wG.to > ZG && (SG = wG)
          }
        }
        return SG
      }(GG, bG, ZG)
    }

    function BG(GG, bG) {
      let ZG = bG.mapPos(GG.from, 1),
        wG = bG.mapPos(GG.to, -1);
      return ZG >= wG ? void 0 : {
        from: ZG,
        to: wG
      }
    }
    const Gb = LG.C.define({
        map: BG
      }),
      bb = LG.C.define({
        map: BG
      });

    function Zb(GG) {
      let bG = [];
      for (let {
          head: ZG
        }
        of GG.state.selection.Bh) bG.some((GG => GG.from <= ZG && GG.to >= ZG)) || bG.push(GG.lineBlockAt(ZG));
      return bG
    }
    const wb = LG.G.define({
      create: () => yG.c.none,
      update(GG, bG) {
        bG.isUserEvent("delete") && bG.changes.iterChangedRanges(((bG, ZG) => GG = Sb(GG, bG, ZG))), GG = GG.map(bG.changes);
        for (let ZG of bG.effects)
          if (ZG.is(Gb) && !yb(GG, ZG.value.from, ZG.value.to)) {
            let {
              preparePlaceholder: wG
            } = bG.state.facet(pb), SG = wG ? yG.c.replace({
              widget: new hb(wG(bG.state, ZG.value))
            }) : Kb;
            GG = GG.update({
              add: [SG.range(ZG.value.from, ZG.value.to)]
            })
          } else ZG.is(bb) && (GG = GG.update({
            filter: (GG, bG) => ZG.value.from != GG || ZG.value.to != bG,
            filterFrom: ZG.value.from,
            filterTo: ZG.value.to
          }));
        return bG.selection && (GG = Sb(GG, bG.selection.main.head)), GG
      },
      provide: GG => yG.h.Yw.from(GG),
      toJSON(GG, bG) {
        let ZG = [];
        return GG.between(0, bG.doc.length, ((GG, bG) => {
          ZG.push(GG, bG)
        })), ZG
      },
      fromJSON(GG) {
        if (!Array.isArray(GG) || GG.length % 2) throw new RangeError("Invalid JSON for fold state");
        let bG = [];
        for (let ZG = 0; ZG < GG.length;) {
          let wG = GG[ZG++],
            SG = GG[ZG++];
          if ("number" != typeof wG || "number" != typeof SG) throw new RangeError("Invalid JSON for fold state");
          bG.push(Kb.range(wG, SG))
        }
        return yG.c.set(bG, !0)
      }
    });

    function Sb(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bG,
        wG = !1;
      return GG.between(bG, ZG, ((GG, SG) => {
        GG < ZG && SG > bG && (wG = !0)
      })), wG ? GG.update({
        filterFrom: bG,
        filterTo: ZG,
        filter: (GG, wG) => GG >= ZG || wG <= bG
      }) : GG
    }

    function Lb(GG, bG, ZG) {
      var wG;
      let SG = null;
      return null === (wG = GG.field(wb, !1)) || void 0 === wG || wG.between(bG, ZG, ((GG, bG) => {
        (!SG || SG.from > GG) && (SG = {
          from: GG,
          to: bG
        })
      })), SG
    }

    function yb(GG, bG, ZG) {
      let wG = !1;
      return GG.between(bG, bG, ((GG, SG) => {
        GG == bG && SG == ZG && (wG = !0)
      })), wG
    }

    function kb(GG, bG) {
      return GG.field(wb, !1) ? bG : bG.concat(LG.C.appendConfig.of(fb()))
    }

    function Ub(GG, bG) {
      let ZG = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        wG = GG.state.doc.lineAt(bG.from).number,
        SG = GG.state.doc.lineAt(bG.to).number;
      return yG.h.announce.of(`${GG.state.phrase(ZG?"Folded lines":"Unfolded lines")} ${wG} ${GG.state.phrase("to")} ${SG}.`)
    }
    const Yb = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: GG => {
          for (let bG of Zb(GG)) {
            let ZG = xG(GG.state, bG.from, bG.to);
            if (ZG) return GG.dispatch({
              effects: kb(GG.state, [Gb.of(ZG), Ub(GG, ZG)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: GG => {
          if (!GG.state.field(wb, !1)) return !1;
          let bG = [];
          for (let ZG of Zb(GG)) {
            let wG = Lb(GG.state, ZG.from, ZG.to);
            wG && bG.push(bb.of(wG), Ub(GG, wG, !1))
          }
          return bG.length && GG.dispatch({
            effects: bG
          }), bG.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: GG => {
          let {
            state: bG
          } = GG, ZG = [];
          for (let wG = 0; wG < bG.doc.length;) {
            let SG = GG.lineBlockAt(wG),
              LG = xG(bG, SG.from, SG.to);
            LG && ZG.push(Gb.of(LG)), wG = (LG ? GG.lineBlockAt(LG.to) : SG).to + 1
          }
          return ZG.length && GG.dispatch({
            effects: kb(GG.state, ZG)
          }), !!ZG.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: GG => {
          let bG = GG.state.field(wb, !1);
          if (!bG || !bG.size) return !1;
          let ZG = [];
          return bG.between(0, GG.state.doc.length, ((GG, bG) => {
            ZG.push(bb.of({
              from: GG,
              to: bG
            }))
          })), GG.dispatch({
            effects: ZG
          }), !0
        }
      }],
      Vb = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      pb = LG.m.define({
        combine: GG => (0, LG.S)(GG, Vb)
      });

    function fb(GG) {
      let bG = [wb, zb];
      return GG && bG.push(pb.of(GG)), bG
    }

    function Qb(GG, bG) {
      let {
        state: ZG
      } = GG, wG = ZG.facet(pb), SG = bG => {
        let ZG = GG.lineBlockAt(GG.posAtDOM(bG.target)),
          wG = Lb(GG.state, ZG.from, ZG.to);
        wG && GG.dispatch({
          effects: bb.of(wG)
        }), bG.preventDefault()
      };
      if (wG.placeholderDOM) return wG.placeholderDOM(GG, SG, bG);
      let LG = document.createElement("span");
      return LG.textContent = wG.placeholderText, LG.setAttribute("aria-label", ZG.phrase("folded code")), LG.title = ZG.phrase("unfold"), LG.className = "cm-foldPlaceholder", LG.onclick = SG, LG
    }
    const Kb = yG.c.replace({
      widget: new class extends yG.n {
        toDOM(GG) {
          return Qb(GG, null)
        }
      }
    });
    class hb extends yG.n {
      constructor(GG) {
        super(), this.value = GG
      }
      eq(GG) {
        return this.value == GG.value
      }
      toDOM(GG) {
        return Qb(GG, this.value)
      }
    }
    const db = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class Jb extends yG.i {
      constructor(GG, bG) {
        super(), this.config = GG, this.open = bG
      }
      eq(GG) {
        return this.config == GG.config && this.open == GG.open
      }
      toDOM(GG) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let bG = document.createElement("span");
        return bG.textContent = this.open ? this.config.openText : this.config.closedText, bG.title = GG.state.phrase(this.open ? "Fold line" : "Unfold line"), bG
      }
    }

    function rb() {
      let GG = {
          ...db,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        bG = new Jb(GG, !0),
        ZG = new Jb(GG, !1),
        wG = yG.j.fromClass(class {
          constructor(GG) {
            this.from = GG.viewport.from, this.markers = this.buildMarkers(GG)
          }
          update(bG) {
            (bG.docChanged || bG.viewportChanged || bG.startState.facet(WG) != bG.state.facet(WG) || bG.startState.field(wb, !1) != bG.state.field(wb, !1) || hG(bG.startState) != hG(bG.state) || GG.foldingChanged(bG)) && (this.markers = this.buildMarkers(bG.view))
          }
          buildMarkers(GG) {
            let wG = new LG.v;
            for (let SG of GG.viewportLineBlocks) {
              let LG = Lb(GG.state, SG.from, SG.to) ? ZG : xG(GG.state, SG.from, SG.to) ? bG : null;
              LG && wG.add(SG.from, SG.from, LG)
            }
            return wG.finish()
          }
        }),
        {
          domEventHandlers: SG
        } = GG;
      return [wG, (0, yG.C)({
        class: "cm-foldGutter",
        markers(GG) {
          var bG;
          return (null === (bG = GG.plugin(wG)) || void 0 === bG ? void 0 : bG.markers) || LG.x.empty
        },
        initialSpacer: () => new Jb(GG, !1),
        domEventHandlers: {
          ...SG,
          click: (GG, bG, ZG) => {
            if (SG.click && SG.click(GG, bG, ZG)) return !0;
            let wG = Lb(GG.state, bG.from, bG.to);
            if (wG) return GG.dispatch({
              effects: bb.of(wG)
            }), !0;
            let LG = xG(GG.state, bG.from, bG.to);
            return !!LG && (GG.dispatch({
              effects: Gb.of(LG)
            }), !0)
          }
        }
      }), fb()]
    }
    const zb = yG.h.baseTheme({
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
    class Eb {
      constructor(GG, bG) {
        let ZG;

        function wG(GG) {
          let bG = UG.d.newName();
          return (ZG || (ZG = Object.create(null)))["." + bG] = GG, bG
        }
        this.specs = GG;
        const SG = "string" == typeof bG.all ? bG.all : bG.all ? wG(bG.all) : void 0,
          LG = bG.scope;
        this.scope = LG instanceof fG ? GG => GG.prop(YG) == LG.data : LG ? GG => GG == LG : void 0, this.style = (0, kG.h)(GG.map((GG => ({
          tag: GG.tag,
          class: GG.class || wG(Object.assign({}, GG, {
            tag: null
          }))
        }))), {
          all: SG
        }).style, this.module = ZG ? new UG.d(ZG) : null, this.themeType = bG.themeType
      }
      static define(GG, bG) {
        return new Eb(GG, bG || {})
      }
    }
    const ob = LG.m.define(),
      Xb = LG.m.define({
        combine: GG => GG.length ? [GG[0]] : null
      });

    function ub(GG) {
      let bG = GG.facet(ob);
      return bG.length ? bG : GG.facet(Xb)
    }

    function ib(GG, bG) {
      let ZG, wG = [Wb];
      return GG instanceof Eb && (GG.module && wG.push(yG.h.styleModule.of(GG.module)), ZG = GG.themeType), (null === bG || void 0 === bG ? void 0 : bG.fallback) ? wG.push(Xb.of(GG)) : ZG ? wG.push(ob.computeN([yG.h.darkTheme], (bG => bG.facet(yG.h.darkTheme) == ("dark" == ZG) ? [GG] : []))) : wG.push(ob.of(GG)), wG
    }
    class Cb {
      constructor(GG) {
        this.markCache = Object.create(null), this.tree = hG(GG.state), this.Yw = this.buildDeco(GG, ub(GG.state)), this.decoratedTo = GG.viewport.to
      }
      update(GG) {
        let bG = hG(GG.state),
          ZG = ub(GG.state),
          wG = ZG != ub(GG.startState),
          {
            viewport: SG
          } = GG.view,
          LG = GG.changes.mapPos(this.decoratedTo, 1);
        bG.length < SG.to && !wG && bG.type == this.tree.type && LG >= SG.to ? (this.Yw = this.Yw.map(GG.changes), this.decoratedTo = LG) : (bG != this.tree || GG.viewportChanged || wG) && (this.tree = bG, this.Yw = this.buildDeco(GG.view, ZG), this.decoratedTo = SG.to)
      }
      buildDeco(GG, bG) {
        if (!bG || !this.tree.length) return yG.c.none;
        let ZG = new LG.v;
        for (let {
            from: wG,
            to: SG
          }
          of GG.SGG)(0, kG.d)(this.tree, bG, ((GG, bG, wG) => {
          ZG.add(GG, bG, this.markCache[wG] || (this.markCache[wG] = yG.c.mark({
            class: wG
          })))
        }), wG, SG);
        return ZG.finish()
      }
    }
    const Wb = LG.s.high(yG.j.fromClass(Cb, {
        Yw: GG => GG.Yw
      })),
      mb = Eb.define([{
        tag: kG.k.meta,
        color: "#404740"
      }, {
        tag: kG.k.link,
        textDecoration: "underline"
      }, {
        tag: kG.k.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: kG.k.emphasis,
        fontStyle: "italic"
      }, {
        tag: kG.k.strong,
        fontWeight: "bold"
      }, {
        tag: kG.k.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: kG.k.keyword,
        color: "#708"
      }, {
        tag: [kG.k.atom, kG.k.bool, kG.k.url, kG.k.contentSeparator, kG.k.labelName],
        color: "#219"
      }, {
        tag: [kG.k.literal, kG.k.inserted],
        color: "#164"
      }, {
        tag: [kG.k.string, kG.k.deleted],
        color: "#a11"
      }, {
        tag: [kG.k.regexp, kG.k.escape, kG.k.special(kG.k.string)],
        color: "#e40"
      }, {
        tag: kG.k.definition(kG.k.variableName),
        color: "#00f"
      }, {
        tag: kG.k.local(kG.k.variableName),
        color: "#30a"
      }, {
        tag: [kG.k.typeName, kG.k.namespace],
        color: "#085"
      }, {
        tag: kG.k.className,
        color: "#167"
      }, {
        tag: [kG.k.special(kG.k.variableName), kG.k.macroName],
        color: "#256"
      }, {
        tag: kG.k.definition(kG.k.propertyName),
        color: "#00c"
      }, {
        tag: kG.k.comment,
        color: "#940"
      }, {
        tag: kG.k.invalid,
        color: "#f00"
      }]),
      Ib = yG.h.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      Fb = 1e4,
      vb = "()[]{}",
      ab = LG.m.define({
        combine: GG => (0, LG.S)(GG, {
          afterCursor: !0,
          brackets: vb,
          maxScanDistance: Fb,
          renderMatch: jb
        })
      }),
      cb = yG.c.mark({
        class: "cm-matchingBracket"
      }),
      lb = yG.c.mark({
        class: "cm-nonmatchingBracket"
      });

    function jb(GG) {
      let bG = [],
        ZG = GG.matched ? cb : lb;
      return bG.push(ZG.range(GG.start.from, GG.start.to)), GG.end && bG.push(ZG.range(GG.end.from, GG.end.to)), bG
    }

    function Pb(GG) {
      let bG = [],
        ZG = GG.facet(ab);
      for (let wG of GG.selection.Bh) {
        if (!wG.empty) continue;
        let SG = gb(GG, wG.head, -1, ZG) || wG.head > 0 && gb(GG, wG.head - 1, 1, ZG) || ZG.afterCursor && (gb(GG, wG.head, 1, ZG) || wG.head < GG.doc.length && gb(GG, wG.head + 1, -1, ZG));
        SG && (bG = bG.concat(ZG.renderMatch(SG, GG)))
      }
      return yG.c.set(bG, !0)
    }
    const Mb = [yG.j.fromClass(class {
      constructor(GG) {
        this.paused = !1, this.Yw = Pb(GG.state)
      }
      update(GG) {
        (GG.docChanged || GG.selectionSet || this.paused) && (GG.view.composing ? (this.Yw = this.Yw.map(GG.changes), this.paused = !0) : (this.Yw = Pb(GG.state), this.paused = !1))
      }
    }, {
      Yw: GG => GG.Yw
    }), Ib];

    function Ab() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [ab.of(GG), Mb]
    }
    const sb = new SG.i;

    function qb(GG, bG, ZG) {
      let wG = GG.prop(bG < 0 ? SG.i.openedBy : SG.i.closedBy);
      if (wG) return wG;
      if (1 == GG.name.length) {
        let wG = ZG.indexOf(GG.name);
        if (wG > -1 && wG % 2 == (bG < 0 ? 1 : 0)) return [ZG[wG + bG]]
      }
      return null
    }

    function nb(GG) {
      let bG = GG.type.prop(sb);
      return bG ? bG(GG.node) : GG
    }

    function gb(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        SG = wG.maxScanDistance || Fb,
        LG = wG.brackets || vb,
        yG = hG(GG),
        kG = yG.resolveInner(bG, ZG);
      for (let UG = kG; UG; UG = UG.parent) {
        let wG = qb(UG.type, ZG, LG);
        if (wG && UG.from < UG.to) {
          let SG = nb(UG);
          if (SG && (ZG > 0 ? bG >= SG.from && bG < SG.to : bG > SG.from && bG <= SG.to)) return eb(GG, bG, ZG, UG, SG, wG, LG)
        }
      }
      return function(GG, bG, ZG, wG, SG, LG, yG) {
        if (ZG < 0 ? !bG : bG == GG.doc.length) return null;
        let kG = ZG < 0 ? GG.sliceDoc(bG - 1, bG) : GG.sliceDoc(bG, bG + 1),
          UG = yG.indexOf(kG);
        if (UG < 0 || UG % 2 == 0 != ZG > 0) return null;
        let YG = {
            from: ZG < 0 ? bG - 1 : bG,
            to: ZG > 0 ? bG + 1 : bG
          },
          VG = GG.doc.iterRange(bG, ZG > 0 ? GG.doc.length : 0),
          pG = 0;
        for (let fG = 0; !VG.next().done && fG <= LG;) {
          let GG = VG.value;
          ZG < 0 && (fG += GG.length);
          let LG = bG + fG * ZG;
          for (let bG = ZG > 0 ? 0 : GG.length - 1, kG = ZG > 0 ? GG.length : -1; bG != kG; bG += ZG) {
            let kG = yG.indexOf(GG[bG]);
            if (!(kG < 0 || wG.resolveInner(LG + bG, 1).type != SG))
              if (kG % 2 == 0 == ZG > 0) pG++;
              else {
                if (1 == pG) return {
                  start: YG,
                  end: {
                    from: LG + bG,
                    to: LG + bG + 1
                  },
                  matched: kG >> 1 == UG >> 1
                };
                pG--
              }
          }
          ZG > 0 && (fG += GG.length)
        }
        return VG.done ? {
          start: YG,
          matched: !1
        } : null
      }(GG, bG, ZG, yG, kG.type, SG, LG)
    }

    function eb(GG, bG, ZG, wG, SG, LG, yG) {
      let kG = wG.parent,
        UG = {
          from: SG.from,
          to: SG.to
        },
        YG = 0,
        VG = null === kG || void 0 === kG ? void 0 : kG.cursor();
      if (VG && (ZG < 0 ? VG.childBefore(wG.from) : VG.childAfter(wG.to)))
        do {
          if (ZG < 0 ? VG.to <= wG.from : VG.from >= wG.to) {
            if (0 == YG && LG.indexOf(VG.type.name) > -1 && VG.from < VG.to) {
              let GG = nb(VG);
              return {
                start: UG,
                end: GG ? {
                  from: GG.from,
                  to: GG.to
                } : void 0,
                matched: !0
              }
            }
            if (qb(VG.type, ZG, yG)) YG++;
            else if (qb(VG.type, -ZG, yG)) {
              if (0 == YG) {
                let GG = nb(VG);
                return {
                  start: UG,
                  end: GG && GG.from < GG.to ? {
                    from: GG.from,
                    to: GG.to
                  } : void 0,
                  matched: !1
                }
              }
              YG--
            }
          }
        } while (ZG < 0 ? VG.prevSibling() : VG.nextSibling());
      return {
        start: UG,
        matched: !1
      }
    }
    const Rb = Object.create(null),
      Tb = [SG.n.none],
      Hb = [],
      tb = Object.create(null),
      Db = Object.create(null);
    for (let [xb, Bb] of [
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
      ]) Db[xb] = Ob(Rb, Bb);

    function Nb(GG, bG) {
      Hb.indexOf(GG) > -1 || (Hb.push(GG), console.warn(bG))
    }

    function Ob(GG, bG) {
      let ZG = [];
      for (let SG of bG.split(" ")) {
        let bG = [];
        for (let ZG of SG.split(".")) {
          let wG = GG[ZG] || kG.k[ZG];
          wG ? "function" == typeof wG ? bG.length ? bG = bG.map(wG) : Nb(ZG, `Modifier ${ZG} used at start of tag`) : bG.length ? Nb(ZG, `Tag ${ZG} used as modifier`) : bG = Array.isArray(wG) ? wG : [wG] : Nb(ZG, `Unknown highlighting tag ${ZG}`)
        }
        for (let GG of bG) ZG.push(GG)
      }
      if (!ZG.length) return 0;
      let wG = bG.replace(/ /g, "_"),
        LG = wG + " " + ZG.map((GG => GG.id)),
        yG = tb[LG];
      if (yG) return yG.id;
      let UG = tb[LG] = SG.n.define({
        id: Tb.length,
        name: wG,
        props: [(0, kG.g)({
          [wG]: ZG
        })]
      });
      return Tb.push(UG), UG.id
    }
    yG.d.RTL, yG.d.LTR
  },
  41787: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => zG,
      f: () => uG
    });
    var wG = ZG(41735),
      SG = ZG(41727),
      LG = ZG(41751);
    class yG {
      constructor(GG, bG, ZG) {
        this.from = GG, this.to = bG, this.diagnostic = ZG
      }
    }
    class kG {
      constructor(GG, bG, ZG) {
        this.diagnostics = GG, this.panel = bG, this.selected = ZG
      }
      static init(GG, bG, ZG) {
        let LG = ZG.facet(oG).markerFilter;
        LG && (GG = LG(GG, ZG));
        let yG = GG.slice().sort(((GG, bG) => GG.from - bG.from || GG.to - bG.to)),
          YG = new SG.v,
          VG = [],
          pG = 0,
          fG = ZG.doc.iter(),
          QG = 0,
          KG = ZG.doc.length;
        for (let SG = 0;;) {
          let GG, bG, ZG = SG == yG.length ? null : yG[SG];
          if (!ZG && !VG.length) break;
          if (VG.length) GG = pG, bG = VG.reduce(((GG, bG) => Math.min(GG, bG.to)), ZG && ZG.from > GG ? ZG.from : 1e8);
          else {
            if (GG = ZG.from, GG > KG) break;
            bG = ZG.to, VG.push(ZG), SG++
          }
          for (; SG < yG.length;) {
            let ZG = yG[SG];
            if (ZG.from != GG || !(ZG.to > ZG.from || ZG.to == GG)) {
              bG = Math.min(ZG.from, bG);
              break
            }
            VG.push(ZG), SG++, bG = Math.min(ZG.to, bG)
          }
          bG = Math.min(bG, KG);
          let LG = !1;
          if (VG.some((ZG => ZG.from == GG && (ZG.to == bG || bG == KG))) && (LG = GG == bG, !LG && bG - GG < 10)) {
            let ZG = GG - (QG + fG.value.length);
            ZG > 0 && (fG.next(ZG), QG = GG);
            for (let wG = GG;;) {
              if (wG >= bG) {
                LG = !0;
                break
              }
              if (!fG.lineBreak && QG + fG.value.length > wG) break;
              wG = QG + fG.value.length, QG += fG.value.length, fG.next()
            }
          }
          let kG = lG(VG);
          if (LG) YG.add(GG, GG, wG.c.widget({
            widget: new WG(kG),
            diagnostics: VG.slice()
          }));
          else {
            let ZG = VG.reduce(((GG, bG) => bG.markClass ? GG + " " + bG.markClass : GG), "");
            YG.add(GG, bG, wG.c.mark({
              class: "cm-lintRange cm-lintRange-" + kG + ZG,
              diagnostics: VG.slice(),
              inclusiveEnd: VG.some((GG => GG.to > bG))
            }))
          }
          if (pG = bG, pG == KG) break;
          for (let wG = 0; wG < VG.length; wG++) VG[wG].to <= pG && VG.splice(wG--, 1)
        }
        let hG = YG.finish();
        return new kG(hG, bG, UG(hG))
      }
    }

    function UG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        wG = null;
      return GG.between(ZG, 1e9, ((GG, ZG, SG) => {
        let {
          spec: LG
        } = SG;
        if (!(bG && LG.diagnostics.indexOf(bG) < 0))
          if (wG) {
            if (LG.diagnostics.indexOf(wG.diagnostic) < 0) return !1;
            wG = new yG(wG.from, ZG, wG.diagnostic)
          } else wG = new yG(GG, ZG, bG || LG.diagnostics[0])
      })), wG
    }

    function YG(GG, bG) {
      let ZG = bG.pos,
        wG = bG.end || ZG,
        SG = GG.state.facet(oG).hideOn(GG, ZG, wG);
      if (null != SG) return SG;
      let LG = GG.startState.doc.lineAt(bG.pos);
      return !(!GG.effects.some((GG => GG.is(pG))) && !GG.changes.touchesRange(LG.from, Math.max(LG.to, wG)))
    }

    function VG(GG, bG) {
      return GG.field(KG, !1) ? bG : bG.concat(SG.C.appendConfig.of(jG))
    }
    const pG = SG.C.define(),
      fG = SG.C.define(),
      QG = SG.C.define(),
      KG = SG.G.define({
        create: () => new kG(wG.c.none, null, null),
        update(GG, bG) {
          if (bG.docChanged && GG.diagnostics.size) {
            let ZG = GG.diagnostics.map(bG.changes),
              wG = null,
              SG = GG.panel;
            if (GG.selected) {
              let SG = bG.changes.mapPos(GG.selected.from, 1);
              wG = UG(ZG, GG.selected.diagnostic, SG) || UG(ZG, null, SG)
            }!ZG.size && SG && bG.state.facet(oG).autoPanel && (SG = null), GG = new kG(ZG, SG, wG)
          }
          for (let ZG of bG.effects)
            if (ZG.is(pG)) {
              let wG = bG.state.facet(oG).autoPanel ? ZG.value.length ? IG.open : null : GG.panel;
              GG = kG.init(ZG.value, wG, bG.state)
            } else ZG.is(fG) ? GG = new kG(GG.diagnostics, ZG.value ? IG.open : null, GG.selected) : ZG.is(QG) && (GG = new kG(GG.diagnostics, GG.panel, ZG.value));
          return GG
        },
        provide: GG => [wG.jb.from(GG, (GG => GG.panel)), wG.h.Yw.from(GG, (GG => GG.diagnostics))]
      });
    const hG = wG.c.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function dG(GG, bG, ZG) {
      let wG, {
          diagnostics: SG
        } = GG.state.field(KG),
        LG = -1,
        yG = -1;
      SG.between(bG - (ZG < 0 ? 1 : 0), bG + (ZG > 0 ? 1 : 0), ((GG, SG, kG) => {
        let {
          spec: UG
        } = kG;
        if (bG >= GG && bG <= SG && (GG == SG || (bG > GG || ZG > 0) && (bG < SG || ZG < 0))) return wG = UG.diagnostics, LG = GG, yG = SG, !1
      }));
      let kG = GG.state.facet(oG).tooltipFilter;
      return wG && kG && (wG = kG(wG, GG.state)), wG ? {
        pos: LG,
        end: yG,
        above: GG.state.doc.lineAt(LG).to < yG,
        create: () => ({
          dom: JG(GG, wG)
        })
      } : null
    }

    function JG(GG, bG) {
      return (0, LG.c)("ul", {
        class: "cm-tooltip-lint"
      }, bG.map((bG => CG(GG, bG, !1))))
    }
    const rG = GG => {
        let bG = GG.state.field(KG, !1);
        return !(!bG || !bG.panel) && (GG.dispatch({
          effects: fG.of(!1)
        }), !0)
      },
      zG = [{
        key: "Mod-Shift-m",
        run: GG => {
          let bG = GG.state.field(KG, !1);
          bG && bG.panel || GG.dispatch({
            effects: VG(GG.state, [fG.of(!0)])
          });
          let ZG = (0, wG.x)(GG, IG.open);
          return ZG && ZG.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: GG => {
          let bG = GG.state.field(KG, !1);
          if (!bG) return !1;
          let ZG = GG.state.selection.main,
            wG = UG(bG.diagnostics, null, ZG.to + 1);
          return !(!wG && (wG = UG(bG.diagnostics, null, 0), !wG || wG.from == ZG.from && wG.to == ZG.to)) && (GG.dispatch({
            selection: {
              anchor: wG.from,
              head: wG.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      EG = wG.j.fromClass(class {
        constructor(GG) {
          this.view = GG, this.timeout = -1, this.set = !0;
          let {
            delay: bG
          } = GG.state.facet(oG);
          this.lintTime = Date.now() + bG, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, bG)
        }
        run() {
          clearTimeout(this.timeout);
          let GG = Date.now();
          if (GG < this.lintTime - 10) this.timeout = setTimeout(this.run, this.lintTime - GG);
          else {
            this.set = !1;
            let {
              state: GG
            } = this.view, {
              sources: bG
            } = GG.facet(oG);
            bG.length && function(GG, bG, ZG) {
              let wG = [],
                SG = -1;
              for (let LG of GG) LG.then((ZG => {
                wG.push(ZG), clearTimeout(SG), wG.length == GG.length ? bG(wG) : SG = setTimeout((() => bG(wG)), 200)
              }), ZG)
            }(bG.map((GG => Promise.resolve(GG(this.view)))), (bG => {
              this.view.state.doc == GG.doc && this.view.dispatch(function(GG, bG) {
                return {
                  effects: VG(GG, [pG.of(bG)])
                }
              }(this.view.state, bG.reduce(((GG, bG) => GG.concat(bG)))))
            }), (GG => {
              (0, wG.W)(this.view.state, GG)
            }))
          }
        }
        update(GG) {
          let bG = GG.state.facet(oG);
          (GG.docChanged || bG != GG.startState.facet(oG) || bG.needsRefresh && bG.needsRefresh(GG)) && (this.lintTime = Date.now() + bG.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, bG.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const oG = SG.m.define({
      combine: GG => ({
        sources: GG.map((GG => GG.source)).filter((GG => null != GG)),
        ...(0, SG.S)(GG.map((GG => GG.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: XG,
          tooltipFilter: XG,
          needsRefresh: (GG, bG) => GG ? bG ? ZG => GG(ZG) || bG(ZG) : GG : bG,
          hideOn: (GG, bG) => GG ? bG ? (ZG, wG, SG) => GG(ZG, wG, SG) || bG(ZG, wG, SG) : GG : bG,
          autoPanel: (GG, bG) => GG || bG
        })
      })
    });

    function XG(GG, bG) {
      return GG ? bG ? (ZG, wG) => bG(GG(ZG, wG), wG) : GG : bG
    }

    function uG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [oG.of({
        source: GG,
        config: bG
      }), EG, jG]
    }

    function iG(GG) {
      let bG = [];
      if (GG) GG: for (let {
          name: ZG
        }
        of GG) {
        for (let GG = 0; GG < ZG.length; GG++) {
          let wG = ZG[GG];
          if (/[a-zA-Z]/.test(wG) && !bG.some((GG => GG.toLowerCase() == wG.toLowerCase()))) {
            bG.push(wG);
            continue GG
          }
        }
        bG.push("")
      }
      return bG
    }

    function CG(GG, bG, ZG) {
      var wG;
      let SG = ZG ? iG(bG.actions) : [];
      return (0, LG.c)("li", {
        class: "cm-diagnostic cm-diagnostic-" + bG.severity
      }, (0, LG.c)("span", {
        class: "cm-diagnosticText"
      }, bG.renderMessage ? bG.renderMessage(GG) : bG.message), null === (wG = bG.actions) || void 0 === wG ? void 0 : wG.map(((ZG, wG) => {
        let yG = !1,
          kG = wG => {
            if (wG.preventDefault(), yG) return;
            yG = !0;
            let SG = UG(GG.state.field(KG).diagnostics, bG);
            SG && ZG.apply(GG, SG.from, SG.to)
          },
          {
            name: YG
          } = ZG,
          VG = SG[wG] ? YG.indexOf(SG[wG]) : -1,
          pG = VG < 0 ? YG : [YG.slice(0, VG), (0, LG.c)("u", YG.slice(VG, VG + 1)), YG.slice(VG + 1)],
          fG = ZG.markClass ? " " + ZG.markClass : "";
        return (0, LG.c)("button", {
          type: "button",
          class: "cm-diagnosticAction" + fG,
          onclick: kG,
          onmousedown: kG,
          "aria-label": ` Action: ${YG}${VG<0?"":` (access key "${SG[wG]})"`}.`
        }, pG)
      })), bG.source && (0, LG.c)("div", {
        class: "cm-diagnosticSource"
      }, bG.source))
    }
    class WG extends wG.n {
      constructor(GG) {
        super(), this.sev = GG
      }
      eq(GG) {
        return GG.sev == this.sev
      }
      toDOM() {
        return (0, LG.c)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class mG {
      constructor(GG, bG) {
        this.diagnostic = bG, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = CG(GG, bG, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class IG {
      constructor(GG) {
        this.view = GG, this.items = [];
        this.list = (0, LG.c)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: bG => {
            if (!(bG.ctrlKey || bG.altKey || bG.metaKey)) {
              if (27 == bG.keyCode) rG(this.view), this.view.focus();
              else if (38 == bG.keyCode || 33 == bG.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == bG.keyCode || 34 == bG.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == bG.keyCode) this.moveSelection(0);
              else if (35 == bG.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == bG.keyCode) this.view.focus();
              else {
                if (!(bG.keyCode >= 65 && bG.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: ZG
                  } = this.items[this.selectedIndex], wG = iG(ZG.actions);
                  for (let SG = 0; SG < wG.length; SG++)
                    if (wG[SG].toUpperCase().charCodeAt(0) == bG.keyCode) {
                      let bG = UG(this.view.state.field(KG).diagnostics, ZG);
                      bG && ZG.actions[SG].apply(GG, bG.from, bG.to)
                    }
                }
              }
              bG.preventDefault()
            }
          },
          onclick: GG => {
            for (let bG = 0; bG < this.items.length; bG++) this.items[bG].dom.contains(GG.target) && this.moveSelection(bG)
          }
        }), this.dom = (0, LG.c)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, LG.c)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => rG(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let GG = this.view.state.field(KG).selected;
        if (!GG) return -1;
        for (let bG = 0; bG < this.items.length; bG++)
          if (this.items[bG].diagnostic == GG.diagnostic) return bG;
        return -1
      }
      update() {
        let {
          diagnostics: GG,
          selected: bG
        } = this.view.state.field(KG), ZG = 0, wG = !1, SG = null, LG = new Set;
        for (GG.between(0, this.view.state.doc.length, ((GG, yG, kG) => {
            let {
              spec: UG
            } = kG;
            for (let YG of UG.diagnostics) {
              if (LG.has(YG)) continue;
              LG.add(YG);
              let GG, yG = -1;
              for (let bG = ZG; bG < this.items.length; bG++)
                if (this.items[bG].diagnostic == YG) {
                  yG = bG;
                  break
                } yG < 0 ? (GG = new mG(this.view, YG), this.items.splice(ZG, 0, GG), wG = !0) : (GG = this.items[yG], yG > ZG && (this.items.splice(ZG, yG - ZG), wG = !0)), bG && GG.diagnostic == bG.diagnostic ? GG.dom.hasAttribute("aria-selected") || (GG.dom.setAttribute("aria-selected", "true"), SG = GG) : GG.dom.hasAttribute("aria-selected") && GG.dom.removeAttribute("aria-selected"), ZG++
            }
          })); ZG < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) wG = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new mG(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), wG = !0), SG ? (this.list.setAttribute("aria-activedescendant", SG.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: SG.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: GG => {
            let {
              sel: bG,
              panel: ZG
            } = GG, wG = ZG.height / this.list.offsetHeight;
            bG.top < ZG.top ? this.list.scrollTop -= (ZG.top - bG.top) / wG : bG.bottom > ZG.bottom && (this.list.scrollTop += (bG.bottom - ZG.bottom) / wG)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), wG && this.sync()
      }
      sync() {
        let GG = this.list.firstChild;

        function bG() {
          let bG = GG;
          GG = bG.nextSibling, bG.remove()
        }
        for (let ZG of this.items)
          if (ZG.dom.parentNode == this.list) {
            for (; GG != ZG.dom;) bG();
            GG = ZG.dom.nextSibling
          } else this.list.insertBefore(ZG.dom, GG);
        for (; GG;) bG()
      }
      moveSelection(GG) {
        if (this.selectedIndex < 0) return;
        let bG = UG(this.view.state.field(KG).diagnostics, this.items[GG].diagnostic);
        bG && this.view.dispatch({
          selection: {
            anchor: bG.from,
            head: bG.to
          },
          scrollIntoView: !0,
          effects: QG.of(bG)
        })
      }
      static open(GG) {
        return new IG(GG)
      }
    }

    function FG(GG) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(GG)}</svg>')`
    }

    function vG(GG) {
      return FG(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${GG}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const aG = wG.h.baseTheme({
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
        backgroundImage: vG("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: vG("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: vG("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: vG("#66d")
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

    function cG(GG) {
      return "error" == GG ? 4 : "warning" == GG ? 3 : "info" == GG ? 2 : 1
    }

    function lG(GG) {
      let bG = "hint",
        ZG = 1;
      for (let wG of GG) {
        let GG = cG(wG.severity);
        GG > ZG && (ZG = GG, bG = wG.severity)
      }
      return bG
    }
    wG.i;
    const jG = [KG, wG.h.Yw.compute([KG], (GG => {
      let {
        selected: bG,
        panel: ZG
      } = GG.field(KG);
      return bG && ZG && bG.from != bG.to ? wG.c.set([hG.range(bG.from, bG.to)]) : wG.c.none
    })), (0, wG.N)(dG, {
      hideOn: YG
    }), aG]
  },
  41784: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => xG,
      h: () => JG,
      j: () => BG
    });
    var wG = ZG(41735),
      SG = ZG(41727),
      LG = ZG(41751);
    const yG = "function" == typeof String.prototype.normalize ? GG => GG.normalize("NFKD") : GG => GG;
    class kG {
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : GG.length,
          SG = arguments.length > 4 ? arguments[4] : void 0,
          LG = arguments.length > 5 ? arguments[5] : void 0;
        this.test = LG, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = GG.iterRange(ZG, wG), this.bufferStart = ZG, this.normalize = SG ? GG => SG(yG(GG)) : yG, this.query = this.normalize(bG)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, SG.Q)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let GG = this.peek();
          if (GG < 0) return this.done = !0, this;
          let bG = (0, SG.cb)(GG),
            ZG = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, SG.R)(GG);
          let wG = this.normalize(bG);
          if (wG.length)
            for (let SG = 0, LG = ZG;; SG++) {
              let GG = wG.charCodeAt(SG),
                yG = this.match(GG, LG, this.bufferPos + this.bufferStart);
              if (SG == wG.length - 1) {
                if (yG) return this.value = yG, this;
                break
              }
              LG == ZG && SG < bG.length && bG.charCodeAt(SG) == GG && LG++
            }
        }
      }
      match(GG, bG, ZG) {
        let wG = null;
        for (let SG = 0; SG < this.matches.length; SG += 2) {
          let bG = this.matches[SG],
            LG = !1;
          this.query.charCodeAt(bG) == GG && (bG == this.query.length - 1 ? wG = {
            from: this.matches[SG + 1],
            to: ZG
          } : (this.matches[SG]++, LG = !0)), LG || (this.matches.splice(SG, 2), SG -= 2)
        }
        return this.query.charCodeAt(0) == GG && (1 == this.query.length ? wG = {
          from: bG,
          to: ZG
        } : this.matches.push(1, bG)), wG && this.test && !this.test(wG.from, wG.to, this.buffer, this.bufferStart) && (wG = null), wG
      }
    }
    "undefined" != typeof Symbol && (kG.prototype[Symbol.iterator] = function() {
      return this
    });
    const UG = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      YG = "gm" + (null == /x/.unicode ? "" : "u");
    class VG {
      constructor(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : GG.length;
        if (this.text = GG, this.to = SG, this.curLine = "", this.done = !1, this.value = UG, /\\[sWDnr]|\n|\r|\[\^/.test(bG)) return new QG(GG, bG, ZG, wG, SG);
        this.re = new RegExp(bG, YG + ((null === ZG || void 0 === ZG ? void 0 : ZG.ignoreCase) ? "i" : "")), this.test = null === ZG || void 0 === ZG ? void 0 : ZG.test, this.iter = GG.iter();
        let LG = GG.lineAt(wG);
        this.curLineStart = LG.from, this.matchPos = KG(GG, wG), this.getLine(this.curLineStart)
      }
      getLine(GG) {
        this.iter.next(GG), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next())
      }
      nextLine() {
        this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0)
      }
      next() {
        for (let GG = this.matchPos - this.curLineStart;;) {
          this.re.lastIndex = GG;
          let bG = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (bG) {
            let ZG = this.curLineStart + bG.index,
              wG = ZG + bG[0].length;
            if (this.matchPos = KG(this.text, wG + (ZG == wG ? 1 : 0)), ZG == this.curLineStart + this.curLine.length && this.nextLine(), (ZG < wG || ZG > this.value.to) && (!this.test || this.test(ZG, wG, bG))) return this.value = {
              from: ZG,
              to: wG,
              match: bG
            }, this;
            GG = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), GG = 0
          }
        }
      }
    }
    const pG = new WeakMap;
    class fG {
      constructor(GG, bG) {
        this.from = GG, this.text = bG
      }
      get to() {
        return this.from + this.text.length
      }
      static get(GG, bG, ZG) {
        let wG = pG.get(GG);
        if (!wG || wG.from >= ZG || wG.to <= bG) {
          let wG = new fG(bG, GG.sliceString(bG, ZG));
          return pG.set(GG, wG), wG
        }
        if (wG.from == bG && wG.to == ZG) return wG;
        let {
          text: SG,
          from: LG
        } = wG;
        return LG > bG && (SG = GG.sliceString(bG, LG) + SG, LG = bG), wG.to < ZG && (SG += GG.sliceString(wG.to, ZG)), pG.set(GG, new fG(LG, SG)), new fG(bG, SG.slice(bG - LG, ZG - LG))
      }
    }
    class QG {
      constructor(GG, bG, ZG, wG, SG) {
        this.text = GG, this.to = SG, this.done = !1, this.value = UG, this.matchPos = KG(GG, wG), this.re = new RegExp(bG, YG + ((null === ZG || void 0 === ZG ? void 0 : ZG.ignoreCase) ? "i" : "")), this.test = null === ZG || void 0 === ZG ? void 0 : ZG.test, this.flat = fG.get(GG, wG, this.chunkEnd(wG + 5e3))
      }
      chunkEnd(GG) {
        return GG >= this.to ? this.to : this.text.lineAt(GG).to
      }
      next() {
        for (;;) {
          let GG = this.re.lastIndex = this.matchPos - this.flat.from,
            bG = this.re.exec(this.flat.text);
          if (bG && !bG[0] && bG.index == GG && (this.re.lastIndex = GG + 1, bG = this.re.exec(this.flat.text)), bG) {
            let GG = this.flat.from + bG.index,
              ZG = GG + bG[0].length;
            if ((this.flat.to >= this.to || bG.index + bG[0].length <= this.flat.text.length - 10) && (!this.test || this.test(GG, ZG, bG))) return this.value = {
              from: GG,
              to: ZG,
              match: bG
            }, this.matchPos = KG(this.text, ZG + (GG == ZG ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = fG.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function KG(GG, bG) {
      if (bG >= GG.length) return bG;
      let ZG, wG = GG.lineAt(bG);
      for (; bG < wG.to && (ZG = wG.text.charCodeAt(bG - wG.from)) >= 56320 && ZG < 57344;) bG++;
      return bG
    }
    "undefined" != typeof Symbol && (VG.prototype[Symbol.iterator] = QG.prototype[Symbol.iterator] = function() {
      return this
    });
    const hG = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      dG = SG.m.define({
        combine: GG => (0, SG.S)(GG, hG, {
          highlightWordAroundCursor: (GG, bG) => GG || bG,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function JG(GG) {
      let bG = [XG, oG];
      return GG && bG.push(dG.of(GG)), bG
    }
    const rG = wG.c.mark({
        class: "cm-selectionMatch"
      }),
      zG = wG.c.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function EG(GG, bG, ZG, wG) {
      return (0 == ZG || GG(bG.sliceDoc(ZG - 1, ZG)) != SG.f.Word) && (wG == bG.doc.length || GG(bG.sliceDoc(wG, wG + 1)) != SG.f.Word)
    }
    const oG = wG.j.fromClass(class {
        constructor(GG) {
          this.Yw = this.getDeco(GG)
        }
        update(GG) {
          (GG.selectionSet || GG.docChanged || GG.viewportChanged) && (this.Yw = this.getDeco(GG.view))
        }
        getDeco(GG) {
          let bG = GG.state.facet(dG),
            {
              state: ZG
            } = GG,
            LG = ZG.selection;
          if (LG.Bh.length > 1) return wG.c.none;
          let yG, UG = LG.main,
            YG = null;
          if (UG.empty) {
            if (!bG.highlightWordAroundCursor) return wG.c.none;
            let GG = ZG.wordAt(UG.head);
            if (!GG) return wG.c.none;
            YG = ZG.charCategorizer(UG.head), yG = ZG.sliceDoc(GG.from, GG.to)
          } else {
            let GG = UG.to - UG.from;
            if (GG < bG.minSelectionLength || GG > 200) return wG.c.none;
            if (bG.wholeWords) {
              if (yG = ZG.sliceDoc(UG.from, UG.to), YG = ZG.charCategorizer(UG.head), !EG(YG, ZG, UG.from, UG.to) || ! function(GG, bG, ZG, wG) {
                  return GG(bG.sliceDoc(ZG, ZG + 1)) == SG.f.Word && GG(bG.sliceDoc(wG - 1, wG)) == SG.f.Word
                }(YG, ZG, UG.from, UG.to)) return wG.c.none
            } else if (yG = ZG.sliceDoc(UG.from, UG.to), !yG) return wG.c.none
          }
          let VG = [];
          for (let SG of GG.SGG) {
            let GG = new kG(ZG.doc, yG, SG.from, SG.to);
            for (; !GG.next().done;) {
              let {
                from: SG,
                to: LG
              } = GG.value;
              if ((!YG || EG(YG, ZG, SG, LG)) && (UG.empty && SG <= UG.from && LG >= UG.to ? VG.push(zG.range(SG, LG)) : (SG >= UG.to || LG <= UG.from) && VG.push(rG.range(SG, LG)), VG.length > bG.maxMatches)) return wG.c.none
            }
          }
          return wG.c.set(VG)
        }
      }, {
        Yw: GG => GG.Yw
      }),
      XG = wG.h.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const uG = SG.m.define({
      combine: GG => (0, SG.S)(GG, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: GG => new Gb(GG),
        scrollToMatch: GG => wG.h.scrollIntoView(GG)
      })
    });
    class iG {
      constructor(GG) {
        this.search = GG.search, this.caseSensitive = !!GG.caseSensitive, this.literal = !!GG.literal, this.regexp = !!GG.regexp, this.replace = GG.replace || "", this.valid = !!this.search && (!this.regexp || function(GG) {
          try {
            return new RegExp(GG, YG), !0
          } catch (bG) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!GG.wholeWord, this.test = GG.test
      }
      unquote(GG) {
        return this.literal ? GG : GG.replace(/\\([nrt\\])/g, ((GG, bG) => "n" == bG ? "\n" : "r" == bG ? "\r" : "t" == bG ? "\t" : "\\"))
      }
      eq(GG) {
        return this.search == GG.search && this.replace == GG.replace && this.caseSensitive == GG.caseSensitive && this.regexp == GG.regexp && this.wholeWord == GG.wholeWord && this.test == GG.test
      }
      create() {
        return this.regexp ? new aG(this) : new mG(this)
      }
      getCursor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZG = arguments.length > 2 ? arguments[2] : void 0,
          wG = GG.doc ? GG : SG.l.create({
            doc: GG
          });
        return null == ZG && (ZG = wG.doc.length), this.regexp ? IG(this, wG, bG, ZG) : WG(this, wG, bG, ZG)
      }
    }
    class CG {
      constructor(GG) {
        this.spec = GG
      }
    }

    function WG(GG, bG, ZG, wG) {
      let LG;
      var yG, UG;
      return GG.wholeWord && (yG = bG.doc, UG = bG.charCategorizer(bG.selection.main.head), LG = (GG, bG, ZG, wG) => ((wG > GG || wG + ZG.length < bG) && (wG = Math.max(0, GG - 2), ZG = yG.sliceString(wG, Math.min(yG.length, bG + 2))), (UG(FG(ZG, GG - wG)) != SG.f.Word || UG(vG(ZG, GG - wG)) != SG.f.Word) && (UG(vG(ZG, bG - wG)) != SG.f.Word || UG(FG(ZG, bG - wG)) != SG.f.Word))), GG.test && (LG = function(GG, bG, ZG) {
        return (wG, SG, LG, yG) => {
          if (ZG && !ZG(wG, SG, LG, yG)) return !1;
          let kG = wG >= yG && SG <= yG + LG.length ? LG.slice(wG - yG, SG - yG) : bG.doc.sliceString(wG, SG);
          return GG(kG, bG, wG, SG)
        }
      }(GG.test, bG, LG)), new kG(bG.doc, GG.unquoted, ZG, wG, GG.caseSensitive ? void 0 : GG => GG.toLowerCase(), LG)
    }
    class mG extends CG {
      constructor(GG) {
        super(GG)
      }
      nextMatch(GG, bG, ZG) {
        let wG = WG(this.spec, GG, ZG, GG.doc.length).nextOverlapping();
        if (wG.done) {
          let ZG = Math.min(GG.doc.length, bG + this.spec.unquoted.length);
          wG = WG(this.spec, GG, 0, ZG).nextOverlapping()
        }
        return wG.done || wG.value.from == bG && wG.value.to == ZG ? null : wG.value
      }
      prevMatchInRange(GG, bG, ZG) {
        for (let wG = ZG;;) {
          let ZG = Math.max(bG, wG - 1e4 - this.spec.unquoted.length),
            SG = WG(this.spec, GG, ZG, wG),
            LG = null;
          for (; !SG.nextOverlapping().done;) LG = SG.value;
          if (LG) return LG;
          if (ZG == bG) return null;
          wG -= 1e4
        }
      }
      prevMatch(GG, bG, ZG) {
        let wG = this.prevMatchInRange(GG, 0, bG);
        return wG || (wG = this.prevMatchInRange(GG, Math.max(0, ZG - this.spec.unquoted.length), GG.doc.length)), !wG || wG.from == bG && wG.to == ZG ? null : wG
      }
      getReplacement(GG) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(GG, bG) {
        let ZG = WG(this.spec, GG, 0, GG.doc.length),
          wG = [];
        for (; !ZG.next().done;) {
          if (wG.length >= bG) return null;
          wG.push(ZG.value)
        }
        return wG
      }
      highlight(GG, bG, ZG, wG) {
        let SG = WG(this.spec, GG, Math.max(0, bG - this.spec.unquoted.length), Math.min(ZG + this.spec.unquoted.length, GG.doc.length));
        for (; !SG.next().done;) wG(SG.value.from, SG.value.to)
      }
    }

    function IG(GG, bG, ZG, wG) {
      let LG;
      var yG;
      return GG.wholeWord && (yG = bG.charCategorizer(bG.selection.main.head), LG = (GG, bG, ZG) => !ZG[0].length || (yG(FG(ZG.input, ZG.index)) != SG.f.Word || yG(vG(ZG.input, ZG.index)) != SG.f.Word) && (yG(vG(ZG.input, ZG.index + ZG[0].length)) != SG.f.Word || yG(FG(ZG.input, ZG.index + ZG[0].length)) != SG.f.Word)), GG.test && (LG = function(GG, bG, ZG) {
        return (wG, SG, LG) => (!ZG || ZG(wG, SG, LG)) && GG(LG[0], bG, wG, SG)
      }(GG.test, bG, LG)), new VG(bG.doc, GG.search, {
        ignoreCase: !GG.caseSensitive,
        test: LG
      }, ZG, wG)
    }

    function FG(GG, bG) {
      return GG.slice((0, SG.X)(GG, bG, !1), bG)
    }

    function vG(GG, bG) {
      return GG.slice(bG, (0, SG.X)(GG, bG))
    }
    class aG extends CG {
      nextMatch(GG, bG, ZG) {
        let wG = IG(this.spec, GG, ZG, GG.doc.length).next();
        return wG.done && (wG = IG(this.spec, GG, 0, bG).next()), wG.done ? null : wG.value
      }
      prevMatchInRange(GG, bG, ZG) {
        for (let wG = 1;; wG++) {
          let SG = Math.max(bG, ZG - 1e4 * wG),
            LG = IG(this.spec, GG, SG, ZG),
            yG = null;
          for (; !LG.next().done;) yG = LG.value;
          if (yG && (SG == bG || yG.from > SG + 10)) return yG;
          if (SG == bG) return null
        }
      }
      prevMatch(GG, bG, ZG) {
        return this.prevMatchInRange(GG, 0, bG) || this.prevMatchInRange(GG, ZG, GG.doc.length)
      }
      getReplacement(GG) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((bG, ZG) => {
          if ("&" == ZG) return GG.match[0];
          if ("$" == ZG) return "$";
          for (let wG = ZG.length; wG > 0; wG--) {
            let bG = +ZG.slice(0, wG);
            if (bG > 0 && bG < GG.match.length) return GG.match[bG] + ZG.slice(wG)
          }
          return bG
        }))
      }
      matchAll(GG, bG) {
        let ZG = IG(this.spec, GG, 0, GG.doc.length),
          wG = [];
        for (; !ZG.next().done;) {
          if (wG.length >= bG) return null;
          wG.push(ZG.value)
        }
        return wG
      }
      highlight(GG, bG, ZG, wG) {
        let SG = IG(this.spec, GG, Math.max(0, bG - 250), Math.min(ZG + 250, GG.doc.length));
        for (; !SG.next().done;) wG(SG.value.from, SG.value.to)
      }
    }
    const cG = SG.C.define(),
      lG = SG.C.define(),
      jG = SG.G.define({
        create: GG => new PG(tG(GG).create(), null),
        update(GG, bG) {
          for (let ZG of bG.effects) ZG.is(cG) ? GG = new PG(ZG.value.create(), GG.panel) : ZG.is(lG) && (GG = new PG(GG.query, ZG.value ? HG : null));
          return GG
        },
        provide: GG => wG.jb.from(GG, (GG => GG.panel))
      });
    class PG {
      constructor(GG, bG) {
        this.query = GG, this.panel = bG
      }
    }
    const MG = wG.c.mark({
        class: "cm-searchMatch"
      }),
      AG = wG.c.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      sG = wG.j.fromClass(class {
        constructor(GG) {
          this.view = GG, this.Yw = this.highlight(GG.state.field(jG))
        }
        update(GG) {
          let bG = GG.state.field(jG);
          (bG != GG.startState.field(jG) || GG.docChanged || GG.selectionSet || GG.viewportChanged) && (this.Yw = this.highlight(bG))
        }
        highlight(GG) {
          let {
            query: bG,
            panel: ZG
          } = GG;
          if (!ZG || !bG.spec.valid) return wG.c.none;
          let {
            view: LG
          } = this, yG = new SG.v;
          for (let wG = 0, SG = LG.SGG, kG = SG.length; wG < kG; wG++) {
            let {
              from: GG,
              to: ZG
            } = SG[wG];
            for (; wG < kG - 1 && ZG > SG[wG + 1].from - 500;) ZG = SG[++wG].to;
            bG.highlight(LG.state, GG, ZG, ((GG, bG) => {
              let ZG = LG.state.selection.Bh.some((ZG => ZG.from == GG && ZG.to == bG));
              yG.add(GG, bG, ZG ? AG : MG)
            }))
          }
          return yG.finish()
        }
      }, {
        Yw: GG => GG.Yw
      });

    function qG(GG) {
      return bG => {
        let ZG = bG.state.field(jG, !1);
        return ZG && ZG.query.spec.valid ? GG(bG, ZG) : OG(bG)
      }
    }
    const nG = qG(((GG, bG) => {
        let {
          query: ZG
        } = bG, {
          to: wG
        } = GG.state.selection.main, LG = ZG.nextMatch(GG.state, wG, wG);
        if (!LG) return !1;
        let yG = SG.j.single(LG.from, LG.to),
          kG = GG.state.facet(uG);
        return GG.dispatch({
          selection: yG,
          effects: [Sb(GG, LG), kG.scrollToMatch(yG.main, GG)],
          userEvent: "select.search"
        }), NG(GG), !0
      })),
      gG = qG(((GG, bG) => {
        let {
          query: ZG
        } = bG, {
          state: wG
        } = GG, {
          from: LG
        } = wG.selection.main, yG = ZG.prevMatch(wG, LG, LG);
        if (!yG) return !1;
        let kG = SG.j.single(yG.from, yG.to),
          UG = GG.state.facet(uG);
        return GG.dispatch({
          selection: kG,
          effects: [Sb(GG, yG), UG.scrollToMatch(kG.main, GG)],
          userEvent: "select.search"
        }), NG(GG), !0
      })),
      eG = qG(((GG, bG) => {
        let {
          query: ZG
        } = bG, wG = ZG.matchAll(GG.state, 1e3);
        return !(!wG || !wG.length) && (GG.dispatch({
          selection: SG.j.create(wG.map((GG => SG.j.range(GG.from, GG.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      RG = qG(((GG, bG) => {
        let {
          query: ZG
        } = bG, {
          state: LG
        } = GG, {
          from: yG,
          to: kG
        } = LG.selection.main;
        if (LG.readOnly) return !1;
        let UG = ZG.nextMatch(LG, yG, yG);
        if (!UG) return !1;
        let YG, VG, pG = UG,
          fG = [],
          QG = [];
        pG.from == yG && pG.to == kG && (VG = LG.toText(ZG.getReplacement(pG)), fG.push({
          from: pG.from,
          to: pG.to,
          insert: VG
        }), pG = ZG.nextMatch(LG, pG.from, pG.to), QG.push(wG.h.announce.of(LG.phrase("replaced match on line $", LG.doc.lineAt(yG).number) + ".")));
        let KG = GG.state.changes(fG);
        return pG && (YG = SG.j.single(pG.from, pG.to).map(KG), QG.push(Sb(GG, pG)), QG.push(LG.facet(uG).scrollToMatch(YG.main, GG))), GG.dispatch({
          changes: KG,
          selection: YG,
          effects: QG,
          userEvent: "input.replace"
        }), !0
      })),
      TG = qG(((GG, bG) => {
        let {
          query: ZG
        } = bG;
        if (GG.state.readOnly) return !1;
        let SG = ZG.matchAll(GG.state, 1e9).map((GG => {
          let {
            from: bG,
            to: wG
          } = GG;
          return {
            from: bG,
            to: wG,
            insert: ZG.getReplacement(GG)
          }
        }));
        if (!SG.length) return !1;
        let LG = GG.state.phrase("replaced $ matches", SG.length) + ".";
        return GG.dispatch({
          changes: SG,
          effects: wG.h.announce.of(LG),
          userEvent: "input.replace.all"
        }), !0
      }));

    function HG(GG) {
      return GG.state.facet(uG).createPanel(GG)
    }

    function tG(GG, bG) {
      var ZG, wG, SG, LG, yG;
      let kG = GG.selection.main,
        UG = kG.empty || kG.to > kG.from + 100 ? "" : GG.sliceDoc(kG.from, kG.to);
      if (bG && !UG) return bG;
      let YG = GG.facet(uG);
      return new iG({
        search: (null !== (ZG = null === bG || void 0 === bG ? void 0 : bG.literal) && void 0 !== ZG ? ZG : YG.literal) ? UG : UG.replace(/\n/g, "\\n"),
        caseSensitive: null !== (wG = null === bG || void 0 === bG ? void 0 : bG.caseSensitive) && void 0 !== wG ? wG : YG.caseSensitive,
        literal: null !== (SG = null === bG || void 0 === bG ? void 0 : bG.literal) && void 0 !== SG ? SG : YG.literal,
        regexp: null !== (LG = null === bG || void 0 === bG ? void 0 : bG.regexp) && void 0 !== LG ? LG : YG.regexp,
        wholeWord: null !== (yG = null === bG || void 0 === bG ? void 0 : bG.wholeWord) && void 0 !== yG ? yG : YG.wholeWord
      })
    }

    function DG(GG) {
      let bG = (0, wG.x)(GG, HG);
      return bG && bG.dom.querySelector("[main-field]")
    }

    function NG(GG) {
      let bG = DG(GG);
      bG && bG == GG.root.activeElement && bG.select()
    }
    const OG = GG => {
        let bG = GG.state.field(jG, !1);
        if (bG && bG.panel) {
          let ZG = DG(GG);
          if (ZG && ZG != GG.root.activeElement) {
            let wG = tG(GG.state, bG.query.spec);
            wG.valid && GG.dispatch({
              effects: cG.of(wG)
            }), ZG.focus(), ZG.select()
          }
        } else GG.dispatch({
          effects: [lG.of(!0), bG ? cG.of(tG(GG.state, bG.query.spec)) : SG.C.appendConfig.of(yb)]
        });
        return !0
      },
      xG = GG => {
        let bG = GG.state.field(jG, !1);
        if (!bG || !bG.panel) return !1;
        let ZG = (0, wG.x)(GG, HG);
        return ZG && ZG.dom.contains(GG.root.activeElement) && GG.focus(), GG.dispatch({
          effects: lG.of(!1)
        }), !0
      },
      BG = [{
        key: "Mod-f",
        run: OG,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: nG,
        shift: gG,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: nG,
        shift: gG,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: xG,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: GG => {
          let {
            state: bG,
            dispatch: ZG
          } = GG, wG = bG.selection;
          if (wG.Bh.length > 1 || wG.main.empty) return !1;
          let {
            from: LG,
            to: yG
          } = wG.main, UG = [], YG = 0;
          for (let VG = new kG(bG.doc, bG.sliceDoc(LG, yG)); !VG.next().done;) {
            if (UG.length > 1e3) return !1;
            VG.value.from == LG && (YG = UG.length), UG.push(SG.j.range(VG.value.from, VG.value.to))
          }
          return ZG(bG.update({
            selection: SG.j.create(UG, YG),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: GG => {
          let {
            state: bG
          } = GG, ZG = String(bG.doc.lineAt(GG.state.selection.main.head).number), {
            close: LG,
            result: yG
          } = (0, wG.ib)(GG, {
            label: bG.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: ZG
            },
            focus: !0,
            submitLabel: bG.phrase("go")
          });
          return yG.then((ZG => {
            let yG = ZG && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(ZG.elements.line.value);
            if (!yG) return void GG.dispatch({
              effects: LG
            });
            let kG = bG.doc.lineAt(bG.selection.main.head),
              [, UG, YG, VG, pG] = yG,
              fG = VG ? +VG.slice(1) : 0,
              QG = YG ? +YG : kG.number;
            if (YG && pG) {
              let GG = QG / 100;
              UG && (GG = GG * ("-" == UG ? -1 : 1) + kG.number / bG.doc.lines), QG = Math.round(bG.doc.lines * GG)
            } else YG && UG && (QG = QG * ("-" == UG ? -1 : 1) + kG.number);
            let KG = bG.doc.line(Math.max(1, Math.min(bG.doc.lines, QG))),
              hG = SG.j.cursor(KG.from + Math.max(0, Math.min(fG, KG.length)));
            GG.dispatch({
              effects: [LG, wG.h.scrollIntoView(hG.from, {
                y: "center"
              })],
              selection: hG
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: GG => {
          let {
            state: bG,
            dispatch: ZG
          } = GG, {
            Bh: LG
          } = bG.selection;
          if (LG.some((GG => GG.from === GG.to))) return (GG => {
            let {
              state: bG,
              dispatch: ZG
            } = GG, {
              selection: wG
            } = bG, LG = SG.j.create(wG.Bh.map((GG => bG.wordAt(GG.head) || SG.j.cursor(GG.head))), wG.mainIndex);
            return !LG.eq(wG) && (ZG(bG.update({
              selection: LG
            })), !0)
          })({
            state: bG,
            dispatch: ZG
          });
          let yG = bG.sliceDoc(LG[0].from, LG[0].to);
          if (bG.selection.Bh.some((GG => bG.sliceDoc(GG.from, GG.to) != yG))) return !1;
          let UG = function(GG, bG) {
            let {
              main: ZG,
              Bh: wG
            } = GG.selection, SG = GG.wordAt(ZG.head), LG = SG && SG.from == ZG.from && SG.to == ZG.to;
            for (let yG = !1, UG = new kG(GG.doc, bG, wG[wG.length - 1].to);;) {
              if (UG.next(), !UG.done) {
                if (yG && wG.some((GG => GG.from == UG.value.from))) continue;
                if (LG) {
                  let bG = GG.wordAt(UG.value.from);
                  if (!bG || bG.from != UG.value.from || bG.to != UG.value.to) continue
                }
                return UG.value
              }
              if (yG) return null;
              UG = new kG(GG.doc, bG, 0, Math.max(0, wG[wG.length - 1].from - 1)), yG = !0
            }
          }(bG, yG);
          return !!UG && (ZG(bG.update({
            selection: bG.selection.addRange(SG.j.range(UG.from, UG.to), !1),
            effects: wG.h.scrollIntoView(UG.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class Gb {
      constructor(GG) {
        this.view = GG;
        let bG = this.query = GG.state.field(jG).query.spec;

        function ZG(GG, bG, ZG) {
          return (0, LG.c)("button", {
            class: "cm-button",
            name: GG,
            onclick: bG,
            type: "button"
          }, ZG)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, LG.c)("input", {
          value: bG.search,
          placeholder: bb(GG, "Find"),
          "aria-label": bb(GG, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, LG.c)("input", {
          value: bG.replace,
          placeholder: bb(GG, "Replace"),
          "aria-label": bb(GG, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, LG.c)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: bG.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, LG.c)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: bG.regexp,
          onchange: this.commit
        }), this.wordField = (0, LG.c)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: bG.wholeWord,
          onchange: this.commit
        }), this.dom = (0, LG.c)("div", {
          onkeydown: GG => this.keydown(GG),
          class: "cm-search"
        }, [this.searchField, ZG("next", (() => nG(GG)), [bb(GG, "next")]), ZG("prev", (() => gG(GG)), [bb(GG, "previous")]), ZG("select", (() => eG(GG)), [bb(GG, "all")]), (0, LG.c)("label", null, [this.caseField, bb(GG, "match case")]), (0, LG.c)("label", null, [this.reField, bb(GG, "regexp")]), (0, LG.c)("label", null, [this.wordField, bb(GG, "by word")]), ...GG.state.readOnly ? [] : [(0, LG.c)("br"), this.replaceField, ZG("replace", (() => RG(GG)), [bb(GG, "replace")]), ZG("replaceAll", (() => TG(GG)), [bb(GG, "replace all")])], (0, LG.c)("button", {
          name: "close",
          onclick: () => xG(GG),
          "aria-label": bb(GG, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let GG = new iG({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        GG.eq(this.query) || (this.query = GG, this.view.dispatch({
          effects: cG.of(GG)
        }))
      }
      keydown(GG) {
        (0, wG.fb)(this.view, GG, "search-panel") ? GG.preventDefault(): 13 == GG.keyCode && GG.target == this.searchField ? (GG.preventDefault(), (GG.shiftKey ? gG : nG)(this.view)) : 13 == GG.keyCode && GG.target == this.replaceField && (GG.preventDefault(), RG(this.view))
      }
      update(GG) {
        for (let bG of GG.transactions)
          for (let GG of bG.effects) GG.is(cG) && !GG.value.eq(this.query) && this.setQuery(GG.value)
      }
      setQuery(GG) {
        this.query = GG, this.searchField.value = GG.search, this.replaceField.value = GG.replace, this.caseField.checked = GG.caseSensitive, this.reField.checked = GG.regexp, this.wordField.checked = GG.wholeWord
      }
      mount() {
        this.searchField.select()
      }
      get pos() {
        return 80
      }
      get top() {
        return this.view.state.facet(uG).top
      }
    }

    function bb(GG, bG) {
      return GG.state.phrase(bG)
    }
    const Zb = 30,
      wb = /[\s\.,:;?!]/;

    function Sb(GG, bG) {
      let {
        from: ZG,
        to: SG
      } = bG, LG = GG.state.doc.lineAt(ZG), yG = GG.state.doc.lineAt(SG).to, kG = Math.max(LG.from, ZG - Zb), UG = Math.min(yG, SG + Zb), YG = GG.state.sliceDoc(kG, UG);
      if (kG != LG.from)
        for (let wG = 0; wG < Zb; wG++)
          if (!wb.test(YG[wG + 1]) && wb.test(YG[wG])) {
            YG = YG.slice(wG);
            break
          } if (UG != yG)
        for (let wG = YG.length - 1; wG > YG.length - Zb; wG--)
          if (!wb.test(YG[wG - 1]) && wb.test(YG[wG])) {
            YG = YG.slice(0, wG);
            break
          } return wG.h.announce.of(`${GG.state.phrase("current match")}. ${YG} ${GG.state.phrase("on line")} ${LG.number}.`)
    }
    const Lb = wG.h.baseTheme({
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
      yb = [jG, SG.s.low(sG), Lb]
  },
  41735: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => aG,
      d: () => Yb,
      h: () => WS,
      i: () => yy,
      j: () => Nb,
      n: () => FG,
      p: () => FL,
      q: () => OS,
      t: () => yL,
      x: () => OL,
      A: () => tL,
      C: () => py,
      G: () => rL,
      D: () => vy,
      K: () => KL,
      N: () => HL,
      O: () => jS,
      S: () => Wy,
      W: () => Tb,
      _: () => XL,
      bb: () => WL,
      fb: () => AS,
      ib: () => Zy,
      jb: () => by,
      mb: () => qL
    });
    for (var wG = ZG(41727), SG = ZG(41742), LG = {
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
      }, yG = {
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
      }, kG = "undefined" != typeof navigator && /Mac/.test(navigator.platform), UG = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), YG = 0; YG < 10; YG++) LG[48 + YG] = LG[96 + YG] = String(YG);
    for (YG = 1; YG <= 24; YG++) LG[YG + 111] = "F" + YG;
    for (YG = 65; YG <= 90; YG++) LG[YG] = String.fromCharCode(YG + 32), yG[YG] = String.fromCharCode(YG);
    for (var VG in LG) yG.hasOwnProperty(VG) || (yG[VG] = LG[VG]);
    var pG = ZG(41751);
    let fG = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      QG = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const KG = /Edge\/(\d+)/.exec(fG.userAgent),
      hG = /MSIE \d/.test(fG.userAgent),
      dG = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(fG.userAgent),
      JG = !!(hG || dG || KG),
      rG = !JG && /gecko\/(\d+)/i.test(fG.userAgent),
      zG = !JG && /Chrome\/(\d+)/.exec(fG.userAgent),
      EG = "webkitFontSmoothing" in QG.documentElement.style,
      oG = !JG && /Apple Computer/.test(fG.vendor),
      XG = oG && (/Mobile\/\w+/.test(fG.userAgent) || fG.maxTouchPoints > 2);
    var uG = {
      mac: XG || /Mac/.test(fG.platform),
      windows: /Win/.test(fG.platform),
      linux: /Linux|X11/.test(fG.platform),
      ie: JG,
      ie_version: hG ? QG.documentMode || 6 : dG ? +dG[1] : KG ? +KG[1] : 0,
      gecko: rG,
      gecko_version: rG ? +(/Firefox\/(\d+)/.exec(fG.userAgent) || [0, 0])[1] : 0,
      chrome: !!zG,
      chrome_version: zG ? +zG[1] : 0,
      ios: XG,
      android: /Android\b/.test(fG.userAgent),
      webkit: EG,
      webkit_version: EG ? +(/\bAppleWebKit\/(\d+)/.exec(fG.userAgent) || [0, 0])[1] : 0,
      safari: oG,
      safari_version: oG ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(fG.userAgent) || [0, 0])[1] : 0,
      tabSize: null != QG.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function iG(GG, bG) {
      for (let ZG in GG) "class" == ZG && bG.class ? bG.class += " " + GG.class : "style" == ZG && bG.style ? bG.style += ";" + GG.style : bG[ZG] = GG[ZG];
      return bG
    }
    const CG = Object.create(null);

    function WG(GG, bG, ZG) {
      if (GG == bG) return !0;
      GG || (GG = CG), bG || (bG = CG);
      let wG = Object.keys(GG),
        SG = Object.keys(bG);
      if (wG.length - (ZG && wG.indexOf(ZG) > -1 ? 1 : 0) != SG.length - (ZG && SG.indexOf(ZG) > -1 ? 1 : 0)) return !1;
      for (let LG of wG)
        if (LG != ZG && (-1 == SG.indexOf(LG) || GG[LG] !== bG[LG])) return !1;
      return !0
    }

    function mG(GG, bG, ZG) {
      let wG = !1;
      if (bG)
        for (let SG in bG) ZG && SG in ZG || (wG = !0, "style" == SG ? GG.style.cssText = "" : GG.removeAttribute(SG));
      if (ZG)
        for (let SG in ZG) bG && bG[SG] == ZG[SG] || (wG = !0, "style" == SG ? GG.style.cssText = ZG[SG] : GG.setAttribute(SG, ZG[SG]));
      return wG
    }

    function IG(GG) {
      let bG = Object.create(null);
      for (let ZG = 0; ZG < GG.attributes.length; ZG++) {
        let wG = GG.attributes[ZG];
        bG[wG.name] = wG.value
      }
      return bG
    }
    class FG {
      eq(GG) {
        return !1
      }
      updateDOM(GG, bG, ZG) {
        return !1
      }
      compare(GG) {
        return this == GG || this.constructor == GG.constructor && this.eq(GG)
      }
      get estimatedHeight() {
        return -1
      }
      get lineBreaks() {
        return 0
      }
      ignoreEvent(GG) {
        return !0
      }
      coordsAt(GG, bG, ZG) {
        return null
      }
      get isHidden() {
        return !1
      }
      get editable() {
        return !1
      }
      destroy(GG) {}
    }
    var vG = function(GG) {
      return GG[GG.Text = 0] = "Text", GG[GG.WidgetBefore = 1] = "WidgetBefore", GG[GG.WidgetAfter = 2] = "WidgetAfter", GG[GG.WidgetRange = 3] = "WidgetRange", GG
    }(vG || (vG = {}));
    class aG extends wG.A {
      constructor(GG, bG, ZG, wG) {
        super(), this.startSide = GG, this.endSide = bG, this.widget = ZG, this.spec = wG
      }
      get heightRelevant() {
        return !1
      }
      static mark(GG) {
        return new cG(GG)
      }
      static widget(GG) {
        let bG = Math.max(-1e4, Math.min(1e4, GG.side || 0)),
          ZG = !!GG.block;
        return bG += ZG && !GG.inlineOrder ? bG > 0 ? 3e8 : -4e8 : bG > 0 ? 1e8 : -1e8, new jG(GG, bG, bG, ZG, GG.widget || null, !1)
      }
      static replace(GG) {
        let bG, ZG, wG = !!GG.block;
        if (GG.isBlockGap) bG = -5e8, ZG = 4e8;
        else {
          let {
            start: SG,
            end: LG
          } = PG(GG, wG);
          bG = (SG ? wG ? -3e8 : -1 : 5e8) - 1, ZG = 1 + (LG ? wG ? 2e8 : 1 : -6e8)
        }
        return new jG(GG, bG, ZG, wG, GG.widget || null, !0)
      }
      static line(GG) {
        return new lG(GG)
      }
      static set(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return wG.x.of(GG, bG)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    aG.none = wG.x.empty;
    class cG extends aG {
      constructor(GG) {
        let {
          start: bG,
          end: ZG
        } = PG(GG);
        super(bG ? -1 : 5e8, ZG ? 1 : -6e8, null, GG), this.tagName = GG.tagName || "span", this.attrs = GG.class && GG.attributes ? iG(GG.attributes, {
          class: GG.class
        }) : GG.class ? {
          class: GG.class
        } : GG.attributes || CG
      }
      eq(GG) {
        return this == GG || GG instanceof cG && this.tagName == GG.tagName && WG(this.attrs, GG.attrs)
      }
      range(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GG;
        if (GG >= bG) throw new RangeError("Mark decorations may not be empty");
        return super.range(GG, bG)
      }
    }
    cG.prototype.point = !1;
    class lG extends aG {
      constructor(GG) {
        super(-2e8, -2e8, null, GG)
      }
      eq(GG) {
        return GG instanceof lG && this.spec.class == GG.spec.class && WG(this.spec.attributes, GG.spec.attributes)
      }
      range(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GG;
        if (bG != GG) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(GG, bG)
      }
    }
    lG.prototype.mapMode = wG.q.TrackBefore, lG.prototype.point = !0;
    class jG extends aG {
      constructor(GG, bG, ZG, SG, LG, yG) {
        super(bG, ZG, LG, GG), this.block = SG, this.isReplace = yG, this.mapMode = SG ? bG <= 0 ? wG.q.TrackBefore : wG.q.TrackAfter : wG.q.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? vG.WidgetRange : this.startSide <= 0 ? vG.WidgetBefore : vG.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(GG) {
        return GG instanceof jG && (bG = this.widget, ZG = GG.widget, bG == ZG || !!(bG && ZG && bG.compare(ZG))) && this.block == GG.block && this.startSide == GG.startSide && this.endSide == GG.endSide;
        var bG, ZG
      }
      range(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GG;
        if (this.isReplace && (GG > bG || GG == bG && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && bG != GG) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(GG, bG)
      }
    }

    function PG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: ZG,
          inclusiveEnd: wG
        } = GG;
      return null == ZG && (ZG = GG.inclusive), null == wG && (wG = GG.inclusive), {
        start: null !== ZG && void 0 !== ZG ? ZG : bG,
        end: null !== wG && void 0 !== wG ? wG : bG
      }
    }

    function MG(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        SG = ZG.length - 1;
      SG >= 0 && ZG[SG] + wG >= GG ? ZG[SG] = Math.max(ZG[SG], bG) : ZG.push(GG, bG)
    }
    jG.prototype.point = !0;
    class AG extends wG.A {
      constructor(GG, bG) {
        super(), this.tagName = GG, this.attributes = bG
      }
      eq(GG) {
        return GG == this || GG instanceof AG && this.tagName == GG.tagName && WG(this.attributes, GG.attributes)
      }
      static create(GG) {
        return new AG(GG.tagName, GG.attributes || CG)
      }
      static set(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return wG.x.of(GG, bG)
      }
    }

    function sG(GG) {
      let bG;
      return bG = 11 == GG.nodeType ? GG.getSelection ? GG : GG.ownerDocument : GG, bG.getSelection()
    }

    function qG(GG, bG) {
      return !!bG && (GG == bG || GG.contains(1 != bG.nodeType ? bG.parentNode : bG))
    }

    function nG(GG, bG) {
      if (!bG.anchorNode) return !1;
      try {
        return qG(GG, bG.anchorNode)
      } catch (ZG) {
        return !1
      }
    }

    function gG(GG) {
      return 3 == GG.nodeType ? wb(GG, 0, GG.nodeValue.length).getClientRects() : 1 == GG.nodeType ? GG.getClientRects() : []
    }

    function eG(GG, bG, ZG, wG) {
      return !!ZG && (HG(GG, bG, ZG, wG, -1) || HG(GG, bG, ZG, wG, 1))
    }

    function RG(GG) {
      for (var bG = 0;; bG++)
        if (!(GG = GG.previousSibling)) return bG
    }

    function TG(GG) {
      return 1 == GG.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(GG.nodeName)
    }

    function HG(GG, bG, ZG, wG, SG) {
      for (;;) {
        if (GG == ZG && bG == wG) return !0;
        if (bG == (SG < 0 ? 0 : tG(GG))) {
          if ("DIV" == GG.nodeName) return !1;
          let ZG = GG.parentNode;
          if (!ZG || 1 != ZG.nodeType) return !1;
          bG = RG(GG) + (SG < 0 ? 0 : 1), GG = ZG
        } else {
          if (1 != GG.nodeType) return !1;
          if (1 == (GG = GG.childNodes[bG + (SG < 0 ? -1 : 0)]).nodeType && "false" == GG.contentEditable) return !1;
          bG = SG < 0 ? tG(GG) : 0
        }
      }
    }

    function tG(GG) {
      return 3 == GG.nodeType ? GG.nodeValue.length : GG.childNodes.length
    }

    function DG(GG, bG) {
      let ZG = bG ? GG.left : GG.right;
      return {
        left: ZG,
        right: ZG,
        top: GG.top,
        bottom: GG.bottom
      }
    }

    function NG(GG) {
      let bG = GG.visualViewport;
      return bG ? {
        left: 0,
        right: bG.width,
        top: 0,
        bottom: bG.height
      } : {
        left: 0,
        right: GG.innerWidth,
        top: 0,
        bottom: GG.innerHeight
      }
    }

    function OG(GG, bG) {
      let ZG = bG.width / GG.offsetWidth,
        wG = bG.height / GG.offsetHeight;
      return (ZG > .995 && ZG < 1.005 || !isFinite(ZG) || Math.abs(bG.width - GG.offsetWidth) < 1) && (ZG = 1), (wG > .995 && wG < 1.005 || !isFinite(wG) || Math.abs(bG.height - GG.offsetHeight) < 1) && (wG = 1), {
        scaleX: ZG,
        scaleY: wG
      }
    }

    function xG(GG) {
      let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        ZG = GG.ownerDocument,
        wG = null,
        SG = null;
      for (let LG = GG.parentNode; LG && (LG != ZG.body && (bG && !wG || !SG));)
        if (1 == LG.nodeType) !SG && LG.scrollHeight > LG.clientHeight && (SG = LG), bG && !wG && LG.scrollWidth > LG.clientWidth && (wG = LG), LG = LG.assignedSlot || LG.parentNode;
        else {
          if (11 != LG.nodeType) break;
          LG = LG.host
        } return {
        x: wG,
        y: SG
      }
    }
    AG.prototype.startSide = AG.prototype.endSide = -1;
    class BG {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(GG) {
        return this.anchorNode == GG.anchorNode && this.anchorOffset == GG.anchorOffset && this.focusNode == GG.focusNode && this.focusOffset == GG.focusOffset
      }
      setRange(GG) {
        let {
          anchorNode: bG,
          focusNode: ZG
        } = GG;
        this.set(bG, Math.min(GG.anchorOffset, bG ? tG(bG) : 0), ZG, Math.min(GG.focusOffset, ZG ? tG(ZG) : 0))
      }
      set(GG, bG, ZG, wG) {
        this.anchorNode = GG, this.anchorOffset = bG, this.focusNode = ZG, this.focusOffset = wG
      }
    }
    let Gb, bb = null;

    function Zb(GG) {
      if (GG.setActive) return GG.setActive();
      if (bb) return GG.focus(bb);
      let bG = [];
      for (let ZG = GG; ZG && (bG.push(ZG, ZG.scrollTop, ZG.scrollLeft), ZG != ZG.ownerDocument); ZG = ZG.parentNode);
      if (GG.focus(null == bb ? {
          get preventScroll() {
            return bb = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !bb) {
        bb = !1;
        for (let GG = 0; GG < bG.length;) {
          let ZG = bG[GG++],
            wG = bG[GG++],
            SG = bG[GG++];
          ZG.scrollTop != wG && (ZG.scrollTop = wG), ZG.scrollLeft != SG && (ZG.scrollLeft = SG)
        }
      }
    }

    function wb(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bG,
        wG = Gb || (Gb = document.createRange());
      return wG.setEnd(GG, ZG), wG.setStart(GG, bG), wG
    }

    function Sb(GG, bG, ZG, wG) {
      let SG = {
        key: bG,
        code: bG,
        keyCode: ZG,
        which: ZG,
        cancelable: !0
      };
      wG && ({
        altKey: SG.altKey,
        ctrlKey: SG.ctrlKey,
        shiftKey: SG.shiftKey,
        metaKey: SG.metaKey
      } = wG);
      let LG = new KeyboardEvent("keydown", SG);
      LG.synthetic = !0, GG.dispatchEvent(LG);
      let yG = new KeyboardEvent("keyup", SG);
      return yG.synthetic = !0, GG.dispatchEvent(yG), LG.defaultPrevented || yG.defaultPrevented
    }

    function Lb(GG) {
      return GG instanceof Window ? GG.pageYOffset > Math.max(0, GG.document.documentElement.scrollHeight - GG.innerHeight - 4) : GG.scrollTop > Math.max(1, GG.scrollHeight - GG.clientHeight - 4)
    }

    function yb(GG, bG) {
      for (let ZG = GG, wG = bG;;) {
        if (3 == ZG.nodeType && wG > 0) return {
          node: ZG,
          offset: wG
        };
        if (1 == ZG.nodeType && wG > 0) {
          if ("false" == ZG.contentEditable) return null;
          ZG = ZG.childNodes[wG - 1], wG = tG(ZG)
        } else {
          if (!ZG.parentNode || TG(ZG)) return null;
          wG = RG(ZG), ZG = ZG.parentNode
        }
      }
    }

    function kb(GG, bG) {
      for (let ZG = GG, wG = bG;;) {
        if (3 == ZG.nodeType && wG < ZG.nodeValue.length) return {
          node: ZG,
          offset: wG
        };
        if (1 == ZG.nodeType && wG < ZG.childNodes.length) {
          if ("false" == ZG.contentEditable) return null;
          ZG = ZG.childNodes[wG], wG = 0
        } else {
          if (!ZG.parentNode || TG(ZG)) return null;
          wG = RG(ZG) + 1, ZG = ZG.parentNode
        }
      }
    }
    uG.safari && uG.safari_version >= 26 && (bb = !1);
    class Ub {
      constructor(GG, bG) {
        let ZG = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = GG, this.offset = bG, this.precise = ZG
      }
      static before(GG, bG) {
        return new Ub(GG.parentNode, RG(GG), bG)
      }
      static after(GG, bG) {
        return new Ub(GG.parentNode, RG(GG) + 1, bG)
      }
    }
    var Yb = function(GG) {
      return GG[GG.LTR = 0] = "LTR", GG[GG.RTL = 1] = "RTL", GG
    }(Yb || (Yb = {}));
    const Vb = Yb.LTR,
      pb = Yb.RTL;

    function fb(GG) {
      let bG = [];
      for (let ZG = 0; ZG < GG.length; ZG++) bG.push(1 << +GG[ZG]);
      return bG
    }
    const Qb = fb("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      Kb = fb("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      hb = Object.create(null),
      db = [];
    for (let ay of ["()", "[]", "{}"]) {
      let GG = ay.charCodeAt(0),
        bG = ay.charCodeAt(1);
      hb[GG] = bG, hb[bG] = -GG
    }

    function Jb(GG) {
      return GG <= 247 ? Qb[GG] : 1424 <= GG && GG <= 1524 ? 2 : 1536 <= GG && GG <= 1785 ? Kb[GG - 1536] : 1774 <= GG && GG <= 2220 ? 4 : 8192 <= GG && GG <= 8204 ? 256 : 64336 <= GG && GG <= 65023 ? 4 : 1
    }
    const rb = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class zb {
      get dir() {
        return this.level % 2 ? pb : Vb
      }
      constructor(GG, bG, ZG) {
        this.from = GG, this.to = bG, this.level = ZG
      }
      side(GG, bG) {
        return this.dir == bG == GG ? this.to : this.from
      }
      forward(GG, bG) {
        return GG == (this.dir == bG)
      }
      static find(GG, bG, ZG, wG) {
        let SG = -1;
        for (let LG = 0; LG < GG.length; LG++) {
          let yG = GG[LG];
          if (yG.from <= bG && yG.to >= bG) {
            if (yG.level == ZG) return LG;
            (SG < 0 || (0 != wG ? wG < 0 ? yG.from < bG : yG.to > bG : GG[SG].level > yG.level)) && (SG = LG)
          }
        }
        if (SG < 0) throw new RangeError("Index out of range");
        return SG
      }
    }

    function Eb(GG, bG) {
      if (GG.length != bG.length) return !1;
      for (let ZG = 0; ZG < GG.length; ZG++) {
        let wG = GG[ZG],
          SG = bG[ZG];
        if (wG.from != SG.from || wG.to != SG.to || wG.direction != SG.direction || !Eb(wG.inner, SG.inner)) return !1
      }
      return !0
    }
    const ob = [];

    function Xb(GG, bG, ZG, wG, SG, LG, yG) {
      let kG = wG % 2 ? 2 : 1;
      if (wG % 2 == SG % 2)
        for (let UG = bG, YG = 0; UG < ZG;) {
          let bG = !0,
            VG = !1;
          if (YG == LG.length || UG < LG[YG].from) {
            let GG = ob[UG];
            GG != kG && (bG = !1, VG = 16 == GG)
          }
          let pG = bG || 1 != kG ? null : [],
            fG = bG ? wG : wG + 1,
            QG = UG;
          GG: for (;;)
            if (YG < LG.length && QG == LG[YG].from) {
              if (VG) break GG;
              let KG = LG[YG];
              if (!bG)
                for (let GG = KG.to, bG = YG + 1;;) {
                  if (GG == ZG) break GG;
                  if (!(bG < LG.length && LG[bG].from == GG)) {
                    if (ob[GG] == kG) break GG;
                    break
                  }
                  GG = LG[bG++].to
                }
              if (YG++, pG) pG.push(KG);
              else {
                KG.from > UG && yG.push(new zb(UG, KG.from, fG)), ub(GG, KG.direction == Vb != !(fG % 2) ? wG + 1 : wG, SG, KG.inner, KG.from, KG.to, yG), UG = KG.to
              }
              QG = KG.to
            } else {
              if (QG == ZG || (bG ? ob[QG] != kG : ob[QG] == kG)) break;
              QG++
            } pG ? Xb(GG, UG, QG, wG + 1, SG, pG, yG) : UG < QG && yG.push(new zb(UG, QG, fG)), UG = QG
        } else
          for (let UG = ZG, YG = LG.length; UG > bG;) {
            let ZG = !0,
              VG = !1;
            if (!YG || UG > LG[YG - 1].to) {
              let GG = ob[UG - 1];
              GG != kG && (ZG = !1, VG = 16 == GG)
            }
            let pG = ZG || 1 != kG ? null : [],
              fG = ZG ? wG : wG + 1,
              QG = UG;
            GG: for (;;)
              if (YG && QG == LG[YG - 1].to) {
                if (VG) break GG;
                let KG = LG[--YG];
                if (!ZG)
                  for (let GG = KG.from, ZG = YG;;) {
                    if (GG == bG) break GG;
                    if (!ZG || LG[ZG - 1].to != GG) {
                      if (ob[GG - 1] == kG) break GG;
                      break
                    }
                    GG = LG[--ZG].from
                  }
                if (pG) pG.push(KG);
                else {
                  KG.to < UG && yG.push(new zb(KG.to, UG, fG)), ub(GG, KG.direction == Vb != !(fG % 2) ? wG + 1 : wG, SG, KG.inner, KG.from, KG.to, yG), UG = KG.from
                }
                QG = KG.from
              } else {
                if (QG == bG || (ZG ? ob[QG - 1] != kG : ob[QG - 1] == kG)) break;
                QG--
              } pG ? Xb(GG, QG, UG, wG + 1, SG, pG, yG) : QG < UG && yG.push(new zb(QG, UG, fG)), UG = QG
          }
    }

    function ub(GG, bG, ZG, wG, SG, LG, yG) {
      let kG = bG % 2 ? 2 : 1;
      ! function(GG, bG, ZG, wG, SG) {
        for (let LG = 0; LG <= wG.length; LG++) {
          let yG = LG ? wG[LG - 1].to : bG,
            kG = LG < wG.length ? wG[LG].from : ZG,
            UG = LG ? 256 : SG;
          for (let bG = yG, ZG = UG, wG = UG; bG < kG; bG++) {
            let SG = Jb(GG.charCodeAt(bG));
            512 == SG ? SG = ZG : 8 == SG && 4 == wG && (SG = 16), ob[bG] = 4 == SG ? 2 : SG, 7 & SG && (wG = SG), ZG = SG
          }
          for (let GG = yG, bG = UG, wG = UG; GG < kG; GG++) {
            let SG = ob[GG];
            if (128 == SG) GG < kG - 1 && bG == ob[GG + 1] && 24 & bG ? SG = ob[GG] = bG : ob[GG] = 256;
            else if (64 == SG) {
              let SG = GG + 1;
              for (; SG < kG && 64 == ob[SG];) SG++;
              let LG = GG && 8 == bG || SG < ZG && 8 == ob[SG] ? 1 == wG ? 1 : 8 : 256;
              for (let bG = GG; bG < SG; bG++) ob[bG] = LG;
              GG = SG - 1
            } else 8 == SG && 1 == wG && (ob[GG] = 1);
            bG = SG, 7 & SG && (wG = SG)
          }
        }
      }(GG, SG, LG, wG, kG),
      function(GG, bG, ZG, wG, SG) {
        let LG = 1 == SG ? 2 : 1;
        for (let yG = 0, kG = 0, UG = 0; yG <= wG.length; yG++) {
          let YG = yG ? wG[yG - 1].to : bG,
            VG = yG < wG.length ? wG[yG].from : ZG;
          for (let bG, ZG, wG, yG = YG; yG < VG; yG++)
            if (ZG = hb[bG = GG.charCodeAt(yG)])
              if (ZG < 0) {
                for (let GG = kG - 3; GG >= 0; GG -= 3)
                  if (db[GG + 1] == -ZG) {
                    let bG = db[GG + 2],
                      ZG = 2 & bG ? SG : 4 & bG ? 1 & bG ? LG : SG : 0;
                    ZG && (ob[yG] = ob[db[GG]] = ZG), kG = GG;
                    break
                  }
              } else {
                if (189 == db.length) break;
                db[kG++] = yG, db[kG++] = bG, db[kG++] = UG
              }
          else if (2 == (wG = ob[yG]) || 1 == wG) {
            let GG = wG == SG;
            UG = GG ? 0 : 1;
            for (let bG = kG - 3; bG >= 0; bG -= 3) {
              let ZG = db[bG + 2];
              if (2 & ZG) break;
              if (GG) db[bG + 2] |= 2;
              else {
                if (4 & ZG) break;
                db[bG + 2] |= 4
              }
            }
          }
        }
      }(GG, SG, LG, wG, kG),
      function(GG, bG, ZG, wG) {
        for (let SG = 0, LG = wG; SG <= ZG.length; SG++) {
          let yG = SG ? ZG[SG - 1].to : GG,
            kG = SG < ZG.length ? ZG[SG].from : bG;
          for (let UG = yG; UG < kG;) {
            let yG = ob[UG];
            if (256 == yG) {
              let yG = UG + 1;
              for (;;)
                if (yG == kG) {
                  if (SG == ZG.length) break;
                  yG = ZG[SG++].to, kG = SG < ZG.length ? ZG[SG].from : bG
                } else {
                  if (256 != ob[yG]) break;
                  yG++
                } let YG = 1 == LG,
                VG = YG == (1 == (yG < bG ? ob[yG] : wG)) ? YG ? 1 : 2 : wG;
              for (let bG = yG, wG = SG, LG = wG ? ZG[wG - 1].to : GG; bG > UG;) bG == LG && (bG = ZG[--wG].from, LG = wG ? ZG[wG - 1].to : GG), ob[--bG] = VG;
              UG = yG
            } else LG = yG, UG++
          }
        }
      }(SG, LG, wG, kG), Xb(GG, SG, LG, bG, ZG, wG, yG)
    }

    function ib(GG, bG, ZG) {
      if (!GG) return [new zb(0, 0, bG == pb ? 1 : 0)];
      if (bG == Vb && !ZG.length && !rb.test(GG)) return Cb(GG.length);
      if (ZG.length)
        for (; GG.length > ob.length;) ob[ob.length] = 256;
      let wG = [],
        SG = bG == Vb ? 0 : 1;
      return ub(GG, SG, SG, ZG, 0, GG.length, wG), wG
    }

    function Cb(GG) {
      return [new zb(0, GG, 0)]
    }
    let Wb = "";

    function mb(GG, bG, ZG, SG, LG) {
      var yG;
      let kG = SG.head - GG.from,
        UG = zb.find(bG, kG, null !== (yG = SG.bidiLevel) && void 0 !== yG ? yG : -1, SG.assoc),
        YG = bG[UG],
        VG = YG.side(LG, ZG);
      if (kG == VG) {
        let GG = UG += LG ? 1 : -1;
        if (GG < 0 || GG >= bG.length) return null;
        YG = bG[UG = GG], kG = YG.side(!LG, ZG), VG = YG.side(LG, ZG)
      }
      let pG = (0, wG.X)(GG.text, kG, YG.forward(LG, ZG));
      (pG < YG.from || pG > YG.to) && (pG = VG), Wb = GG.text.slice(Math.min(kG, pG), Math.max(kG, pG));
      let fG = UG == (LG ? bG.length - 1 : 0) ? null : bG[UG + (LG ? 1 : -1)];
      return fG && pG == VG && fG.level + (LG ? 0 : 1) < YG.level ? wG.j.cursor(fG.side(!LG, ZG) + GG.from, fG.forward(LG, ZG) ? 1 : -1, fG.level) : wG.j.cursor(pG + GG.from, YG.forward(LG, ZG) ? -1 : 1, YG.level)
    }

    function Ib(GG, bG, ZG) {
      for (let wG = bG; wG < ZG; wG++) {
        let bG = Jb(GG.charCodeAt(wG));
        if (1 == bG) return Vb;
        if (2 == bG || 4 == bG) return pb
      }
      return Vb
    }
    const Fb = wG.m.define(),
      vb = wG.m.define(),
      ab = wG.m.define(),
      cb = wG.m.define(),
      lb = wG.m.define(),
      jb = wG.m.define(),
      Pb = wG.m.define(),
      Mb = wG.m.define(),
      Ab = wG.m.define(),
      sb = wG.m.define({
        combine: GG => GG.some((GG => GG))
      }),
      qb = wG.m.define({
        combine: GG => GG.some((GG => GG))
      }),
      nb = wG.m.define();
    class gb {
      constructor(GG, bG, ZG, wG, SG) {
        let LG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = GG, this.y = bG, this.x = ZG, this.yMargin = wG, this.xMargin = SG, this.isSnapshot = LG
      }
      map(GG) {
        return GG.empty ? this : new gb(this.range.map(GG), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(GG) {
        return this.range.to <= GG.doc.length ? this : new gb(wG.j.cursor(GG.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const eb = wG.C.define({
        map: (GG, bG) => GG.map(bG)
      }),
      Rb = wG.C.define();

    function Tb(GG, bG, ZG) {
      let wG = GG.facet(cb);
      wG.length ? wG[0](bG) : window.onerror && window.onerror(String(bG), ZG, void 0, void 0, bG) || (ZG ? console.error(ZG + ":", bG) : console.error(bG))
    }
    const Hb = wG.m.define({
      combine: GG => !GG.length || GG[0]
    });
    let tb = 0;
    const Db = wG.m.define({
      combine: GG => GG.filter(((bG, ZG) => {
        for (let wG = 0; wG < ZG; wG++)
          if (GG[wG].plugin == bG.plugin) return !1;
        return !0
      }))
    });
    class Nb {
      constructor(GG, bG, ZG, wG, SG) {
        this.id = GG, this.create = bG, this.domEventHandlers = ZG, this.domEventObservers = wG, this.baseExtensions = SG(this), this.extension = this.baseExtensions.concat(Db.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(GG) {
        return this.baseExtensions.concat(Db.of({
          plugin: this,
          arg: GG
        }))
      }
      static define(GG, bG) {
        const {
          eventHandlers: ZG,
          eventObservers: wG,
          provide: SG,
          Yw: LG
        } = bG || {};
        return new Nb(tb++, GG, ZG, wG, (GG => {
          let bG = [];
          return LG && bG.push(GZ.of((bG => {
            let ZG = bG.plugin(GG);
            return ZG ? LG(ZG) : aG.none
          }))), SG && bG.push(SG(GG)), bG
        }))
      }
      static fromClass(GG, bG) {
        return Nb.define(((bG, ZG) => new GG(bG, ZG)), bG)
      }
    }
    class Ob {
      constructor(GG) {
        this.spec = GG, this.mustUpdate = null, this.value = null
      }
      get plugin() {
        return this.spec && this.spec.plugin
      }
      update(GG) {
        if (this.value) {
          if (this.mustUpdate) {
            let GG = this.mustUpdate;
            if (this.mustUpdate = null, this.value.update) try {
              this.value.update(GG)
            } catch (bG) {
              if (Tb(GG.state, bG, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (ZG) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(GG, this.spec.arg)
        } catch (bG) {
          Tb(GG.state, bG, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(GG) {
        var bG;
        if (null === (bG = this.value) || void 0 === bG ? void 0 : bG.destroy) try {
          this.value.destroy()
        } catch (ZG) {
          Tb(GG.state, ZG, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const xb = wG.m.define(),
      Bb = wG.m.define(),
      GZ = wG.m.define(),
      bZ = wG.m.define(),
      ZZ = wG.m.define(),
      wZ = wG.m.define(),
      SZ = wG.m.define();

    function LZ(GG, bG) {
      let ZG = GG.state.facet(SZ);
      if (!ZG.length) return ZG;
      let SG = ZG.map((bG => bG instanceof Function ? bG(GG) : bG)),
        LG = [];
      return wG.x.spans(SG, bG.from, bG.to, {
        point() {},
        span(GG, ZG, wG, SG) {
          let yG = GG - bG.from,
            kG = ZG - bG.from,
            UG = LG;
          for (let LG = wG.length - 1; LG >= 0; LG--, SG--) {
            let GG, ZG = wG[LG].spec.bidiIsolate;
            if (null == ZG && (ZG = Ib(bG.text, yG, kG)), SG > 0 && UG.length && (GG = UG[UG.length - 1]).to == yG && GG.direction == ZG) GG.to = kG, UG = GG.inner;
            else {
              let GG = {
                from: yG,
                to: kG,
                direction: ZG,
                inner: []
              };
              UG.push(GG), UG = GG.inner
            }
          }
        }
      }), LG
    }
    const yZ = wG.m.define();

    function kZ(GG) {
      let bG = 0,
        ZG = 0,
        wG = 0,
        SG = 0;
      for (let LG of GG.state.facet(yZ)) {
        let yG = LG(GG);
        yG && (null != yG.left && (bG = Math.max(bG, yG.left)), null != yG.right && (ZG = Math.max(ZG, yG.right)), null != yG.top && (wG = Math.max(wG, yG.top)), null != yG.bottom && (SG = Math.max(SG, yG.bottom)))
      }
      return {
        left: bG,
        right: ZG,
        top: wG,
        bottom: SG
      }
    }
    const UZ = wG.m.define();
    class YZ {
      constructor(GG, bG, ZG, wG) {
        this.fromA = GG, this.toA = bG, this.fromB = ZG, this.toB = wG
      }
      join(GG) {
        return new YZ(Math.min(this.fromA, GG.fromA), Math.max(this.toA, GG.toA), Math.min(this.fromB, GG.fromB), Math.max(this.toB, GG.toB))
      }
      addToSet(GG) {
        let bG = GG.length,
          ZG = this;
        for (; bG > 0; bG--) {
          let wG = GG[bG - 1];
          if (!(wG.fromA > ZG.toA)) {
            if (wG.toA < ZG.fromA) break;
            ZG = ZG.join(wG), GG.splice(bG - 1, 1)
          }
        }
        return GG.splice(bG, 0, ZG), GG
      }
      static extendWithRanges(GG, bG) {
        if (0 == bG.length) return GG;
        let ZG = [];
        for (let wG = 0, SG = 0, LG = 0;;) {
          let yG = wG < GG.length ? GG[wG].fromB : 1e9,
            kG = SG < bG.length ? bG[SG] : 1e9,
            UG = Math.min(yG, kG);
          if (1e9 == UG) break;
          let YG = UG + LG,
            VG = UG,
            pG = YG;
          for (;;)
            if (SG < bG.length && bG[SG] <= VG) {
              let ZG = bG[SG + 1];
              SG += 2, VG = Math.max(VG, ZG);
              for (let bG = wG; bG < GG.length && GG[bG].fromB <= VG; bG++) LG = GG[bG].toA - GG[bG].toB;
              pG = Math.max(pG, ZG + LG)
            } else {
              if (!(wG < GG.length && GG[wG].fromB <= VG)) break;
              {
                let bG = GG[wG++];
                VG = Math.max(VG, bG.toB), pG = Math.max(pG, bG.toA), LG = bG.toA - bG.toB
              }
            } ZG.push(new YZ(YG, pG, UG, VG))
        }
        return ZG
      }
    }
    class VZ {
      constructor(GG, bG, ZG) {
        this.view = GG, this.state = bG, this.transactions = ZG, this.flags = 0, this.startState = GG.state, this.changes = wG.ChangeSet.empty(this.startState.doc.length);
        for (let wG of ZG) this.changes = this.changes.compose(wG.changes);
        let SG = [];
        this.changes.iterChangedRanges(((GG, bG, ZG, wG) => SG.push(new YZ(GG, bG, ZG, wG)))), this.changedRanges = SG
      }
      static create(GG, bG, ZG) {
        return new VZ(GG, bG, ZG)
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
        return this.transactions.some((GG => GG.selection))
      }
      get empty() {
        return 0 == this.flags && 0 == this.transactions.length
      }
    }
    const pZ = [];
    class fZ {
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = GG, this.length = bG, this.flags = ZG, this.parent = null, GG.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return pZ
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
      sync(GG) {
        if (this.flags |= 2, 4 & this.flags) {
          this.flags &= -5;
          let GG = this.domAttrs;
          GG && function(GG, bG) {
            for (let ZG = GG.attributes.length - 1; ZG >= 0; ZG--) {
              let wG = GG.attributes[ZG].name;
              null == bG[wG] && GG.removeAttribute(wG)
            }
            for (let ZG in bG) {
              let wG = bG[ZG];
              "style" == ZG ? GG.style.cssText = wG : GG.getAttribute(ZG) != wG && GG.setAttribute(ZG, wG)
            }
          }(this.dom, GG)
        }
      }
      toString() {
        return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "")
      }
      destroy() {
        this.parent = null
      }
      setDOM(GG) {
        this.dom = GG, GG.cmTile = this
      }
      get posAtStart() {
        return this.parent ? this.parent.posBefore(this) : 0
      }
      get posAtEnd() {
        return this.posAtStart + this.length
      }
      posBefore(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let ZG of this.children) {
          if (ZG == GG) return bG;
          bG += ZG.length + ZG.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(GG) {
        return this.posBefore(GG) + GG.length
      }
      covers(GG) {
        return !0
      }
      coordsIn(GG, bG) {
        return null
      }
      domPosFor(GG, bG) {
        let ZG = RG(this.dom),
          wG = this.length ? GG > 0 : bG > 0;
        return new Ub(this.parent.dom, ZG + (wG ? 1 : 0), 0 == GG || GG == this.length)
      }
      markDirty(GG) {
        this.flags &= -3, GG && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let GG = this; GG; GG = GG.parent)
          if (GG instanceof hZ) return GG;
        return null
      }
      static get(GG) {
        return GG.cmTile
      }
    }
    class QZ extends fZ {
      constructor(GG) {
        super(GG, 0), this._children = []
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
      append(GG) {
        this.children.push(GG), GG.parent = this
      }
      sync(GG) {
        if (2 & this.flags) return;
        super.sync(GG);
        let bG, ZG = this.dom,
          wG = null,
          SG = (null === GG || void 0 === GG ? void 0 : GG.node) == ZG ? GG : null,
          LG = 0;
        for (let yG of this.children) {
          if (yG.sync(GG), LG += yG.length + yG.breakAfter, bG = wG ? wG.nextSibling : ZG.firstChild, SG && bG != yG.dom && (SG.written = !0), yG.dom.parentNode == ZG)
            for (; bG && bG != yG.dom;) bG = KZ(bG);
          else ZG.insertBefore(yG.dom, bG);
          wG = yG.dom
        }
        for (bG = wG ? wG.nextSibling : ZG.firstChild, SG && bG && (SG.written = !0); bG;) bG = KZ(bG);
        this.length = LG
      }
    }

    function KZ(GG) {
      let bG = GG.nextSibling;
      return GG.parentNode.removeChild(GG), bG
    }
    class hZ extends QZ {
      constructor(GG, bG) {
        super(bG), this.view = GG
      }
      owns(GG) {
        for (; GG; GG = GG.parent)
          if (GG == this) return !0;
        return !1
      }
      isBlock() {
        return !0
      }
      nearest(GG) {
        for (;;) {
          if (!GG) return null;
          let bG = fZ.get(GG);
          if (bG && this.owns(bG)) return bG;
          GG = GG.parentNode
        }
      }
      blockTiles(GG) {
        for (let bG = [], ZG = this, wG = 0, SG = 0;;)
          if (wG == ZG.children.length) {
            if (!bG.length) return;
            ZG = ZG.parent, ZG.breakAfter && SG++, wG = bG.pop()
          } else {
            let LG = ZG.children[wG++];
            if (LG instanceof dZ) bG.push(wG), ZG = LG, wG = 0;
            else {
              let bG = SG + LG.length,
                ZG = GG(LG, SG);
              if (void 0 !== ZG) return ZG;
              SG = bG + LG.breakAfter
            }
          }
      }
      resolveBlock(GG, bG) {
        let ZG, wG, SG = -1,
          LG = -1;
        if (this.blockTiles(((yG, kG) => {
            let UG = kG + yG.length;
            if (GG >= kG && GG <= UG) {
              if (yG.isWidget() && bG >= -1 && bG <= 1) {
                if (32 & yG.flags) return !0;
                16 & yG.flags && (ZG = void 0)
              }(kG < GG || GG == UG && (bG < -1 ? yG.length : yG.covers(1))) && (!ZG || !yG.isWidget() && ZG.isWidget()) && (ZG = yG, SG = GG - kG), (UG > GG || GG == kG && (bG > 1 ? yG.length : yG.covers(-1))) && (!wG || !yG.isWidget() && wG.isWidget()) && (wG = yG, LG = GG - kG)
            }
          })), !ZG && !wG) throw new Error("No tile at position " + GG);
        return ZG && bG < 0 || !wG ? {
          tile: ZG,
          offset: SG
        } : {
          tile: wG,
          offset: LG
        }
      }
    }
    class dZ extends QZ {
      constructor(GG, bG) {
        super(GG), this.wrapper = bG
      }
      isBlock() {
        return !0
      }
      covers(GG) {
        return !!this.children.length && (GG < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1))
      }
      get domAttrs() {
        return this.wrapper.attributes
      }
      static of (GG, bG) {
        let ZG = new dZ(bG || document.createElement(GG.tagName), GG);
        return bG || (ZG.flags |= 4), ZG
      }
    }
    class JZ extends QZ {
      constructor(GG, bG) {
        super(GG), this.attrs = bG
      }
      isLine() {
        return !0
      }
      static start(GG, bG, ZG) {
        let wG = new JZ(bG || document.createElement("div"), GG);
        return bG && ZG || (wG.flags |= 4), wG
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(GG, bG, ZG) {
        let wG = null,
          SG = -1,
          LG = null,
          yG = -1;
        ! function GG(kG, UG) {
          for (let YG = 0, VG = 0; YG < kG.children.length && VG <= UG; YG++) {
            let pG = kG.children[YG],
              fG = VG + pG.length;
            fG >= UG && (pG.isComposite() ? GG(pG, UG - VG) : (!LG || LG.isHidden && (bG > 0 || ZG && rZ(LG, pG))) && (fG > UG || 32 & pG.flags) ? (LG = pG, yG = UG - VG) : (VG < UG || 16 & pG.flags && !pG.isHidden) && (wG = pG, SG = UG - VG)), VG = fG
          }
        }(this, GG);
        let kG = (bG < 0 ? wG : LG) || wG || LG;
        return kG ? {
          tile: kG,
          offset: kG == wG ? SG : yG
        } : null
      }
      coordsIn(GG, bG) {
        let ZG = this.resolveInline(GG, bG, !0);
        return ZG ? ZG.tile.coordsIn(Math.max(0, ZG.offset), bG) : function(GG) {
          let bG = GG.dom.lastChild;
          if (!bG) return GG.dom.getBoundingClientRect();
          let ZG = gG(bG);
          return ZG[ZG.length - 1] || null
        }(this)
      }
      domIn(GG, bG) {
        let ZG = this.resolveInline(GG, bG);
        if (ZG) {
          let {
            tile: GG,
            offset: wG
          } = ZG;
          if (this.dom.contains(GG.dom)) return GG.isText() ? new Ub(GG.dom, Math.min(GG.dom.nodeValue.length, wG)) : GG.domPosFor(wG, 16 & GG.flags ? 1 : 32 & GG.flags ? -1 : bG);
          let SG = ZG.tile.parent,
            LG = !1;
          for (let bG of SG.children) {
            if (LG) return new Ub(bG.dom, 0);
            bG == ZG.tile && (LG = !0)
          }
        }
        return new Ub(this.dom, 0)
      }
    }

    function rZ(GG, bG) {
      let ZG = GG.coordsIn(0, 1),
        wG = bG.coordsIn(0, 1);
      return ZG && wG && wG.top < ZG.bottom
    }
    class zZ extends QZ {
      constructor(GG, bG) {
        super(GG), this.mark = bG
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (GG, bG) {
        let ZG = new zZ(bG || document.createElement(GG.tagName), GG);
        return bG || (ZG.flags |= 4), ZG
      }
    }
    class EZ extends fZ {
      constructor(GG, bG) {
        super(GG, bG.length), this.text = bG
      }
      sync(GG) {
        2 & this.flags || (super.sync(GG), this.dom.nodeValue != this.text && (GG && GG.node == this.dom && (GG.written = !0), this.dom.nodeValue = this.text))
      }
      isText() {
        return !0
      }
      toString() {
        return JSON.stringify(this.text)
      }
      coordsIn(GG, bG) {
        let ZG = this.dom.nodeValue.length;
        GG > ZG && (GG = ZG);
        let wG = GG,
          SG = GG,
          LG = 0;
        0 == GG && bG < 0 || GG == ZG && bG >= 0 ? uG.chrome || uG.gecko || (GG ? (wG--, LG = 1) : SG < ZG && (SG++, LG = -1)) : bG < 0 ? wG-- : SG < ZG && SG++;
        let yG = wb(this.dom, wG, SG).getClientRects();
        if (!yG.length) return null;
        let kG = yG[(LG ? LG < 0 : bG >= 0) ? 0 : yG.length - 1];
        return uG.safari && !LG && 0 == kG.width && (kG = Array.prototype.find.call(yG, (GG => GG.width)) || kG), LG ? DG(kG, LG < 0) : kG || null
      }
      static of (GG, bG) {
        let ZG = new EZ(bG || document.createTextNode(GG), GG);
        return bG || (ZG.flags |= 2), ZG
      }
    }
    class oZ extends fZ {
      constructor(GG, bG, ZG, wG) {
        super(GG, bG, wG), this.widget = ZG
      }
      isWidget() {
        return !0
      }
      get isHidden() {
        return this.widget.isHidden
      }
      covers(GG) {
        return !(48 & this.flags) && (this.flags & (GG < 0 ? 64 : 128)) > 0
      }
      coordsIn(GG, bG) {
        return this.coordsInWidget(GG, bG, !1)
      }
      coordsInWidget(GG, bG, ZG) {
        let wG = this.widget.coordsAt(this.dom, GG, bG);
        if (wG) return wG;
        if (ZG) return DG(this.dom.getBoundingClientRect(), this.length ? 0 == GG : bG <= 0);
        {
          let bG = this.dom.getClientRects(),
            ZG = null;
          if (!bG.length) return null;
          let wG = !!(16 & this.flags) || !(32 & this.flags) && GG > 0;
          for (let SG = wG ? bG.length - 1 : 0; ZG = bG[SG], !(GG > 0 ? 0 == SG : SG == bG.length - 1 || ZG.top < ZG.bottom); SG += wG ? -1 : 1);
          return DG(ZG, !wG)
        }
      }
      get overrideDOMText() {
        if (!this.length) return wG.I.empty;
        let {
          root: GG
        } = this;
        if (!GG) return wG.I.empty;
        let bG = this.posAtStart;
        return GG.view.state.doc.slice(bG, bG + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (GG, bG, ZG, wG, SG) {
        return SG || (SG = GG.toDOM(bG), GG.editable || (SG.contentEditable = "false")), new oZ(SG, ZG, GG, wG)
      }
    }
    class XZ extends fZ {
      constructor(GG) {
        let bG = document.createElement("img");
        bG.className = "cm-widgetBuffer", bG.setAttribute("aria-hidden", "true"), super(bG, 0, GG)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return wG.I.empty
      }
      coordsIn(GG) {
        return this.dom.getBoundingClientRect()
      }
    }
    class uZ {
      constructor(GG) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = GG
      }
      advance(GG, bG, ZG) {
        let {
          tile: wG,
          index: SG,
          beforeBreak: LG,
          parents: yG
        } = this;
        for (; GG || bG > 0;)
          if (wG.isComposite())
            if (LG) {
              if (!GG) break;
              ZG && ZG.break(), GG--, LG = !1
            } else if (SG == wG.children.length) {
          if (!GG && !yG.length) break;
          ZG && ZG.leave(wG), LG = !!wG.breakAfter, ({
            tile: wG,
            index: SG
          } = yG.pop()), SG++
        } else {
          let kG = wG.children[SG],
            UG = kG.breakAfter;
          !(bG > 0 ? kG.length <= GG : kG.length < GG) || ZG && !1 === ZG.skip(kG, 0, kG.length) && kG.isComposite ? (yG.push({
            tile: wG,
            index: SG
          }), wG = kG, SG = 0, ZG && kG.isComposite() && ZG.enter(kG)) : (LG = !!UG, SG++, GG -= kG.length)
        } else if (SG == wG.length) LG = !!wG.breakAfter, ({
          tile: wG,
          index: SG
        } = yG.pop()), SG++;
        else {
          if (!GG) break;
          {
            let bG = Math.min(GG, wG.length - SG);
            ZG && ZG.skip(wG, SG, SG + bG), GG -= bG, SG += bG
          }
        }
        return this.tile = wG, this.index = SG, this.beforeBreak = LG, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class iZ {
      constructor(GG, bG, ZG, wG) {
        this.from = GG, this.to = bG, this.wrapper = ZG, this.rank = wG
      }
    }
    class CZ {
      constructor(GG, bG, ZG) {
        this.cache = GG, this.root = bG, this.blockWrappers = ZG, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(GG, bG, ZG, wG) {
        var SG;
        this.flushBuffer();
        let LG = this.ensureMarks(bG, ZG),
          yG = LG.lastChild;
        if (yG && yG.isText() && !(8 & yG.flags) && yG.length + GG.length < 512) {
          this.cache.reused.set(yG, 2), (LG.children[LG.children.length - 1] = new EZ(yG.dom, yG.text + GG)).parent = LG
        } else LG.append(wG || EZ.of(GG, null === (SG = this.cache.find(EZ)) || void 0 === SG ? void 0 : SG.dom));
        this.pos += GG.length, this.afterWidget = null
      }
      addComposition(GG, bG) {
        let ZG = this.curLine;
        ZG.dom != bG.line.dom && (ZG.setDOM(this.cache.reused.has(bG.line) ? cZ(bG.line.dom) : bG.line.dom), this.cache.reused.set(bG.line, 2));
        let wG = ZG;
        for (let yG = bG.marks.length - 1; yG >= 0; yG--) {
          let GG = bG.marks[yG],
            ZG = wG.lastChild;
          if (ZG instanceof zZ && ZG.mark.eq(GG.mark)) ZG.dom != GG.dom && ZG.setDOM(cZ(GG.dom)), wG = ZG;
          else {
            if (this.cache.reused.get(GG)) {
              let bG = fZ.get(GG.dom);
              bG && bG.setDOM(cZ(GG.dom))
            }
            let bG = zZ.of(GG.mark, GG.dom);
            wG.append(bG), wG = bG
          }
          this.cache.reused.set(GG, 2)
        }
        let SG = fZ.get(GG.text);
        SG && this.cache.reused.set(SG, 2);
        let LG = new EZ(GG.text, GG.text.nodeValue);
        LG.flags |= 8, wG.append(LG)
      }
      addInlineWidget(GG, bG, ZG) {
        let wG = this.afterWidget && 48 & GG.flags && (48 & this.afterWidget.flags) == (48 & GG.flags);
        wG || this.flushBuffer();
        let SG = this.ensureMarks(bG, ZG);
        wG || 16 & GG.flags || SG.append(this.getBuffer(1)), SG.append(GG), this.pos += GG.length, this.afterWidget = GG
      }
      addMark(GG, bG, ZG) {
        this.flushBuffer(), this.ensureMarks(bG, ZG).append(GG), this.pos += GG.length, this.afterWidget = null
      }
      addBlockWidget(GG) {
        this.getBlockPos().append(GG), this.pos += GG.length, this.lastBlock = GG, this.endLine()
      }
      continueWidget(GG) {
        (this.afterWidget || this.lastBlock).length += GG, this.pos += GG
      }
      addLineStart(GG, bG) {
        var ZG;
        GG || (GG = aZ);
        let wG = JZ.start(GG, bG || (null === (ZG = this.cache.find(JZ)) || void 0 === ZG ? void 0 : ZG.dom), !!bG);
        this.getBlockPos().append(this.lastBlock = this.curLine = wG)
      }
      addLine(GG) {
        this.getBlockPos().append(GG), this.pos += GG.length, this.lastBlock = GG, this.endLine()
      }
      addBreak() {
        this.lastBlock.flags |= 1, this.endLine(), this.pos++
      }
      addLineStartIfNotCovered(GG) {
        this.blockPosCovered() || this.addLineStart(GG)
      }
      ensureLine(GG) {
        this.curLine || this.addLineStart(GG)
      }
      ensureMarks(GG, bG) {
        var ZG;
        let wG = this.curLine;
        for (let SG = GG.length - 1; SG >= 0; SG--) {
          let LG, yG = GG[SG];
          if (bG > 0 && (LG = wG.lastChild) && LG instanceof zZ && LG.mark.eq(yG)) wG = LG, bG--;
          else {
            let GG = zZ.of(yG, null === (ZG = this.cache.find(zZ, (GG => GG.mark.eq(yG)))) || void 0 === ZG ? void 0 : ZG.dom);
            wG.append(GG), wG = GG, bG = 0
          }
        }
        return wG
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let GG = this.curLine.lastChild;
          GG && vZ(this.curLine, !1) && ("BR" == GG.dom.nodeName || !GG.isWidget() || uG.ios && vZ(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(jZ, 0, 32) || new oZ(jZ.toDOM(), 0, jZ, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let GG = this.wrappers.length - 1; GG >= 0; GG--) this.wrappers[GG].to < this.pos && this.wrappers.splice(GG, 1);
        for (let GG = this.blockWrappers; GG.value && GG.from <= this.pos; GG.next())
          if (GG.to >= this.pos) {
            let bG = new iZ(GG.from, GG.to, GG.value, GG.rank),
              ZG = this.wrappers.length;
            for (; ZG > 0 && (this.wrappers[ZG - 1].rank - bG.rank || this.wrappers[ZG - 1].to - bG.to) < 0;) ZG--;
            this.wrappers.splice(ZG, 0, bG)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var GG;
        this.updateBlockWrappers();
        let bG = this.root;
        for (let ZG of this.wrappers) {
          let wG = bG.lastChild;
          if (ZG.from < this.pos && wG instanceof dZ && wG.wrapper.eq(ZG.wrapper)) bG = wG;
          else {
            let wG = dZ.of(ZG.wrapper, null === (GG = this.cache.find(dZ, (GG => GG.wrapper.eq(ZG.wrapper)))) || void 0 === GG ? void 0 : GG.dom);
            bG.append(wG), bG = wG
          }
        }
        return bG
      }
      blockPosCovered() {
        let GG = this.lastBlock;
        return null != GG && !GG.breakAfter && (!GG.isWidget() || (160 & GG.flags) > 0)
      }
      getBuffer(GG) {
        let bG = 2 | (GG < 0 ? 16 : 32),
          ZG = this.cache.find(XZ, void 0, 1);
        return ZG && (ZG.flags = bG), ZG || new XZ(bG)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class WZ {
      constructor(GG) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = GG.iter()
      }
      skip(GG) {
        this.textOff + GG <= this.text.length ? this.textOff += GG : (this.skipCount += GG - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(GG) {
        if (this.textOff == this.text.length) {
          let {
            value: bG,
            lineBreak: ZG,
            done: wG
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, wG) throw new Error("Ran out of text content when drawing inline views");
          this.text = bG;
          let SG = this.textOff = Math.min(GG, bG.length);
          return ZG ? null : bG.slice(0, SG)
        }
        let bG = Math.min(this.text.length, this.textOff + GG),
          ZG = this.text.slice(this.textOff, bG);
        return this.textOff = bG, ZG
      }
    }
    const mZ = [oZ, JZ, EZ, zZ, XZ, dZ, hZ];
    for (let ay = 0; ay < mZ.length; ay++) mZ[ay].bucket = ay;
    class IZ {
      constructor(GG) {
        this.view = GG, this.buckets = mZ.map((() => [])), this.index = mZ.map((() => 0)), this.reused = new Map
      }
      add(GG) {
        let bG = GG.constructor.bucket,
          ZG = this.buckets[bG];
        ZG.length < 6 ? ZG.push(GG) : ZG[this.index[bG] = (this.index[bG] + 1) % 6] = GG
      }
      find(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          wG = GG.bucket,
          SG = this.buckets[wG],
          LG = this.index[wG];
        for (let yG = SG.length - 1; yG >= 0; yG--) {
          let GG = (yG + LG) % SG.length,
            kG = SG[GG];
          if ((!bG || bG(kG)) && !this.reused.has(kG)) return SG.splice(GG, 1), GG < LG && this.index[wG]--, this.reused.set(kG, ZG), kG
        }
        return null
      }
      findWidget(GG, bG, ZG) {
        let wG = this.buckets[0];
        if (wG.length)
          for (let SG = 0, LG = 0;; SG++) {
            if (SG == wG.length) {
              if (LG) return null;
              LG = 1, SG = 0
            }
            let yG = wG[SG];
            if (!this.reused.has(yG) && (0 == LG ? yG.widget.compare(GG) : yG.widget.constructor == GG.constructor && GG.updateDOM(yG.dom, this.view, yG.widget))) return wG.splice(SG, 1), SG < this.index[0] && this.index[0]--, yG.widget == GG && yG.length == bG && (497 & yG.flags) == ZG ? (this.reused.set(yG, 1), yG) : (this.reused.set(yG, 2), new oZ(yG.dom, bG, GG, -498 & yG.flags | ZG))
          }
      }
      reuse(GG) {
        return this.reused.set(GG, 1), GG
      }
      maybeReuse(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(GG)) return this.reused.set(GG, bG), GG.dom
      }
      clear() {
        for (let GG = 0; GG < this.buckets.length; GG++) this.buckets[GG].length = this.index[GG] = 0
      }
    }
    class FZ {
      constructor(GG, bG, ZG, SG, LG) {
        this.view = GG, this.Yw = SG, this.disallowBlockEffectsFor = LG, this.openWidget = !1, this.openMarks = 0, this.cache = new IZ(GG), this.text = new WZ(GG.state.doc), this.builder = new CZ(this.cache, new hZ(GG, GG.contentDOM), wG.x.iter(ZG)), this.cache.reused.set(bG, 2), this.old = new uZ(bG), this.reuseWalker = {
          skip: (GG, bG, ZG) => {
            if (this.cache.add(GG), GG.isComposite()) return !1
          },
          enter: GG => this.cache.add(GG),
          leave: () => {},
          break: () => {}
        }
      }
      run(GG, bG) {
        let ZG = bG && this.getCompositionContext(bG.text);
        for (let wG = 0, SG = 0, LG = 0;;) {
          let yG = LG < GG.length ? GG[LG++] : null,
            kG = yG ? yG.fromA : this.old.root.length;
          if (kG > wG) {
            let GG = kG - wG;
            this.preserve(GG, !LG, !yG), wG = kG, SG += GG
          }
          if (!yG) break;
          bG && yG.fromA <= bG.range.fromA && yG.toA >= bG.range.toA ? (this.forward(yG.fromA, bG.range.fromA, bG.range.fromA < bG.range.toA ? 1 : -1), this.emit(SG, bG.range.fromB), this.cache.clear(), this.builder.addComposition(bG, ZG), this.text.skip(bG.range.toB - bG.range.fromB), this.forward(bG.range.fromA, yG.toA), this.emit(bG.range.toB, yG.toB)) : (this.forward(yG.fromA, yG.toA), this.emit(SG, yG.toB)), SG = yG.toB, wG = yG.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(GG, bG, ZG) {
        let wG = function(GG) {
            let bG = [];
            for (let ZG = GG.parents.length; ZG > 1; ZG--) {
              let wG = ZG == GG.parents.length ? GG.tile : GG.parents[ZG].tile;
              wG instanceof zZ && bG.push(wG.mark)
            }
            return bG
          }(this.old),
          SG = this.openMarks;
        this.old.advance(GG, ZG ? 1 : -1, {
          skip: (GG, bG, ZG) => {
            if (GG.isWidget())
              if (this.openWidget) this.builder.continueWidget(ZG - bG);
              else {
                let LG = ZG > 0 || bG < GG.length ? oZ.of(GG.widget, this.view, ZG - bG, 496 & GG.flags, this.cache.maybeReuse(GG)) : this.cache.reuse(GG);
                256 & LG.flags ? (LG.flags &= -2, this.builder.addBlockWidget(LG)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(LG, wG, SG), SG = wG.length)
              }
            else if (GG.isText()) this.builder.ensureLine(null), bG || ZG != GG.length || this.cache.reused.has(GG) ? (this.cache.add(GG), this.builder.addText(GG.text.slice(bG, ZG), wG, SG)) : this.builder.addText(GG.text, wG, SG, this.cache.reuse(GG)), SG = wG.length;
            else if (GG.isLine()) GG.flags &= -2, this.cache.reused.set(GG, 1), this.builder.addLine(GG);
            else if (GG instanceof XZ) this.cache.add(GG);
            else {
              if (!(GG instanceof zZ)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(GG, wG, SG), this.cache.reused.set(GG, 1), SG = wG.length
            }
            this.openWidget = !1
          },
          enter: GG => {
            GG.isLine() ? this.builder.addLineStart(GG.attrs, this.cache.maybeReuse(GG)) : (this.cache.add(GG), GG instanceof zZ && wG.unshift(GG.mark)), this.openWidget = !1
          },
          leave: GG => {
            GG.isLine() ? wG.length && (wG.length = SG = 0) : GG instanceof zZ && (wG.shift(), SG = Math.min(SG, wG.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(GG)
      }
      emit(GG, bG) {
        let ZG = null,
          SG = this.builder,
          LG = 0,
          yG = wG.x.spans(this.Yw, GG, bG, {
            point: (GG, bG, wG, yG, kG, UG) => {
              if (wG instanceof jG) {
                if (this.disallowBlockEffectsFor[UG]) {
                  if (wG.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (bG > this.view.state.doc.lineAt(GG).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (LG = yG.length, kG > yG.length) SG.continueWidget(bG - GG);
                else {
                  let LG = wG.widget || (wG.block ? lZ.block : lZ.inline),
                    UG = function(GG) {
                      let bG = GG.isReplace ? (GG.startSide < 0 ? 64 : 0) | (GG.endSide > 0 ? 128 : 0) : GG.startSide > 0 ? 32 : 16;
                      GG.block && (bG |= 256);
                      return bG
                    }(wG),
                    YG = this.cache.findWidget(LG, bG - GG, UG) || oZ.of(LG, this.view, bG - GG, UG);
                  wG.block ? (wG.startSide > 0 && SG.addLineStartIfNotCovered(ZG), SG.addBlockWidget(YG)) : (SG.ensureLine(ZG), SG.addInlineWidget(YG, yG, kG))
                }
                ZG = null
              } else ZG = function(GG, bG) {
                let ZG = bG.spec.attributes,
                  wG = bG.spec.class;
                if (!ZG && !wG) return GG;
                GG || (GG = {
                  class: "cm-line"
                });
                ZG && iG(ZG, GG);
                wG && (GG.class += " " + wG);
                return GG
              }(ZG, wG);
              bG > GG && this.text.skip(bG - GG)
            },
            span: (GG, bG, wG, LG) => {
              for (let yG = GG; yG < bG;) {
                let kG = this.text.next(Math.min(512, bG - yG));
                null == kG ? (SG.addLineStartIfNotCovered(ZG), SG.addBreak(), yG++) : (SG.ensureLine(ZG), SG.addText(kG, wG, yG == GG ? LG : wG.length), yG += kG.length), ZG = null
              }
            }
          });
        SG.addLineStartIfNotCovered(ZG), this.openWidget = yG > LG, this.openMarks = yG
      }
      forward(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        bG - GG <= 10 ? this.old.advance(bG - GG, ZG, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(bG - GG - 10, -1), this.old.advance(5, ZG, this.reuseWalker))
      }
      getCompositionContext(GG) {
        let bG = [],
          ZG = null;
        for (let wG = GG.parentNode;; wG = wG.parentNode) {
          let GG = fZ.get(wG);
          if (wG == this.view.contentDOM) break;
          GG instanceof zZ ? bG.push(GG) : (null === GG || void 0 === GG ? void 0 : GG.isLine()) ? ZG = GG : GG instanceof dZ || ("DIV" != wG.nodeName || ZG || wG == this.view.contentDOM ? ZG || bG.push(zZ.of(new cG({
            tagName: wG.nodeName.toLowerCase(),
            attributes: IG(wG)
          }), wG)) : ZG = new JZ(wG, aZ))
        }
        return {
          line: ZG,
          marks: bG
        }
      }
    }

    function vZ(GG, bG) {
      let ZG = GG => {
        for (let wG of GG.children)
          if ((bG ? wG.isText() : wG.length) || ZG(wG)) return !0;
        return !1
      };
      return ZG(GG)
    }
    const aZ = {
      class: "cm-line"
    };

    function cZ(GG) {
      let bG = fZ.get(GG);
      return bG && bG.setDOM(GG.cloneNode()), GG
    }
    class lZ extends FG {
      constructor(GG) {
        super(), this.tag = GG
      }
      eq(GG) {
        return GG.tag == this.tag
      }
      toDOM() {
        return document.createElement(this.tag)
      }
      updateDOM(GG) {
        return GG.nodeName.toLowerCase() == this.tag
      }
      get isHidden() {
        return !0
      }
    }
    lZ.inline = new lZ("span"), lZ.block = new lZ("div");
    const jZ = new class extends FG {
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
    class PZ {
      constructor(GG) {
        this.view = GG, this.Yw = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = aG.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new hZ(GG, GG.contentDOM), this.updateInner([new YZ(0, 0, 0, GG.state.doc.length)], null)
      }
      update(GG) {
        var bG;
        let ZG = GG.changedRanges;
        this.minWidth > 0 && ZG.length && (ZG.every((GG => {
          let {
            fromA: bG,
            toA: ZG
          } = GG;
          return ZG < this.minWidthFrom || bG > this.minWidthTo
        })) ? (this.minWidthFrom = GG.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = GG.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(GG);
        let SG = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (bG = this.domChanged) || void 0 === bG ? void 0 : bG.newSel) ? SG = this.domChanged.newSel.head : function(GG, bG) {
          let ZG = !1;
          bG && GG.iterChangedRanges(((GG, wG) => {
            GG < bG.to && wG > bG.from && (ZG = !0)
          }));
          return ZG
        }(GG.changes, this.hasComposition) || GG.selectionSet || (SG = GG.state.selection.main.head));
        let LG = SG > -1 ? function(GG, bG, ZG) {
          let wG = AZ(GG, ZG);
          if (!wG) return null;
          let {
            node: SG,
            from: LG,
            to: yG
          } = wG, kG = SG.nodeValue;
          if (/[\n\r]/.test(kG)) return null;
          if (GG.state.doc.sliceString(wG.from, wG.to) != kG) return null;
          let UG = bG.invertedDesc;
          return {
            range: new YZ(UG.mapPos(LG), UG.mapPos(yG), LG, yG),
            text: SG
          }
        }(this.view, GG.changes, SG) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: bG,
            to: wG
          } = this.hasComposition;
          ZG = new YZ(bG, wG, GG.changes.mapPos(bG, -1), GG.changes.mapPos(wG, 1)).addToSet(ZG.slice())
        }
        this.hasComposition = LG ? {
          from: LG.range.fromB,
          to: LG.range.toB
        } : null, (uG.ie || uG.chrome) && !LG && GG && GG.state.doc.lines != GG.startState.doc.lines && (this.forceSelection = !0);
        let yG = this.Yw,
          kG = this.blockWrappers;
        this.updateDeco();
        let UG = function(GG, bG, ZG) {
          let SG = new sZ;
          return wG.x.compare(GG, bG, ZG, SG), SG.changes
        }(yG, this.Yw, GG.changes);
        UG.length && (ZG = YZ.extendWithRanges(ZG, UG));
        let YG = function(GG, bG, ZG) {
          let SG = new qZ;
          return wG.x.compare(GG, bG, ZG, SG), SG.changes
        }(kG, this.blockWrappers, GG.changes);
        return YG.length && (ZG = YZ.extendWithRanges(ZG, YG)), LG && !ZG.some((GG => GG.fromA <= LG.range.fromA && GG.toA >= LG.range.toA)) && (ZG = LG.range.addToSet(ZG.slice())), !(2 & this.tile.flags && 0 == ZG.length) && (this.updateInner(ZG, LG), GG.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(GG, bG) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: ZG
        } = this.view;
        ZG.ignore((() => {
          if (bG || GG.length) {
            let ZG = this.tile,
              wG = new FZ(this.view, ZG, this.blockWrappers, this.Yw, this.dynamicDecorationMap);
            bG && fZ.get(bG.text) && wG.cache.reused.set(fZ.get(bG.text), 2), this.tile = wG.run(GG, bG), MZ(ZG, wG.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let wG = uG.chrome || uG.ios ? {
            node: ZG.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(wG), !wG || !wG.written && ZG.selectionRange.focusNode == wG.node && this.tile.dom.contains(wG.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let wG = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let SG of this.tile.children) SG.isWidget() && SG.widget instanceof nZ && wG.push(SG.dom);
        ZG.updateGaps(wG)
      }
      updateEditContextFormatting(GG) {
        this.editContextFormatting = this.editContextFormatting.map(GG.changes);
        for (let bG of GG.transactions)
          for (let GG of bG.effects) GG.is(Rb) && (this.editContextFormatting = GG.value)
      }
      updateSelection() {
        let GG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: bG
        } = this.tile, ZG = this.view.root.activeElement, wG = ZG == bG, SG = !wG && !(this.view.state.facet(Hb) || bG.tabIndex > -1) && nG(bG, this.view.observer.selectionRange) && !(ZG && bG.contains(ZG));
        if (!(wG || GG || SG)) return;
        let LG = this.forceSelection;
        this.forceSelection = !1;
        let yG, kG, UG = this.view.state.selection.main;
        if (UG.empty ? kG = yG = this.inlineDOMNearPos(UG.anchor, UG.assoc || 1) : (kG = this.inlineDOMNearPos(UG.head, UG.head == UG.from ? 1 : -1), yG = this.inlineDOMNearPos(UG.anchor, UG.anchor == UG.from ? 1 : -1)), uG.gecko && UG.empty && !this.hasComposition && (1 == (YG = yG).node.nodeType && YG.node.firstChild && (0 == YG.offset || "false" == YG.node.childNodes[YG.offset - 1].contentEditable) && (YG.offset == YG.node.childNodes.length || "false" == YG.node.childNodes[YG.offset].contentEditable))) {
          let GG = document.createTextNode("");
          this.view.observer.ignore((() => yG.node.insertBefore(GG, yG.node.childNodes[yG.offset] || null))), yG = kG = new Ub(GG, 0), LG = !0
        }
        var YG;
        let VG = this.view.observer.selectionRange;
        !LG && VG.focusNode && (eG(yG.node, yG.offset, VG.anchorNode, VG.anchorOffset) && eG(kG.node, kG.offset, VG.focusNode, VG.focusOffset) || this.suppressWidgetCursorChange(VG, UG)) || (this.view.observer.ignore((() => {
          uG.android && uG.chrome && bG.contains(VG.focusNode) && function(GG, bG) {
            for (let ZG = GG; ZG && ZG != bG; ZG = ZG.assignedSlot || ZG.parentNode)
              if (1 == ZG.nodeType && "false" == ZG.contentEditable) return !0;
            return !1
          }(VG.focusNode, bG) && (bG.blur(), bG.focus({
            preventScroll: !0
          }));
          let GG = sG(this.view.root);
          if (GG)
            if (UG.empty) {
              if (uG.gecko) {
                let GG = (wG = yG.node, LG = yG.offset, 1 != wG.nodeType ? 0 : (LG && "false" == wG.childNodes[LG - 1].contentEditable ? 1 : 0) | (LG < wG.childNodes.length && "false" == wG.childNodes[LG].contentEditable ? 2 : 0));
                if (GG && 3 != GG) {
                  let bG = (1 == GG ? yb : kb)(yG.node, yG.offset);
                  bG && (yG = new Ub(bG.node, bG.offset))
                }
              }
              GG.collapse(yG.node, yG.offset), null != UG.bidiLevel && void 0 !== GG.caretBidiLevel && (GG.caretBidiLevel = UG.bidiLevel)
            } else if (GG.extend) {
            GG.collapse(yG.node, yG.offset);
            try {
              GG.extend(kG.node, kG.offset)
            } catch (YG) {}
          } else {
            let bG = document.createRange();
            UG.anchor > UG.head && ([yG, kG] = [kG, yG]), bG.setEnd(kG.node, kG.offset), bG.setStart(yG.node, yG.offset), GG.removeAllRanges(), GG.addRange(bG)
          } else;
          var wG, LG;
          SG && this.view.root.activeElement == bG && (bG.blur(), ZG && ZG.focus())
        })), this.view.observer.setSelectionRange(yG, kG)), this.impreciseAnchor = yG.precise ? null : new Ub(VG.anchorNode, VG.anchorOffset), this.impreciseHead = kG.precise ? null : new Ub(VG.focusNode, VG.focusOffset)
      }
      suppressWidgetCursorChange(GG, bG) {
        return this.hasComposition && bG.empty && eG(GG.focusNode, GG.focusOffset, GG.anchorNode, GG.anchorOffset) && this.posFromDOM(GG.focusNode, GG.focusOffset) == bG.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: GG
        } = this, bG = GG.state.selection.main, ZG = sG(GG.root), {
          anchorNode: wG,
          anchorOffset: SG
        } = GG.observer.selectionRange;
        if (!ZG || !bG.empty || !bG.assoc || !ZG.modify) return;
        let LG = this.lineAt(bG.head, bG.assoc);
        if (!LG) return;
        let yG = LG.posAtStart;
        if (bG.head == yG || bG.head == yG + LG.length) return;
        let kG = this.coordsAt(bG.head, -1),
          UG = this.coordsAt(bG.head, 1);
        if (!kG || !UG || kG.bottom > UG.top) return;
        let YG = this.domAtPos(bG.head + bG.assoc, bG.assoc);
        ZG.collapse(YG.node, YG.offset), ZG.modify("move", bG.assoc < 0 ? "forward" : "backward", "lineboundary"), GG.observer.readSelectionRange();
        let VG = GG.observer.selectionRange;
        GG.docView.posFromDOM(VG.anchorNode, VG.anchorOffset) != bG.from && ZG.collapse(wG, SG)
      }
      posFromDOM(GG, bG) {
        let ZG = this.tile.nearest(GG);
        if (!ZG) return 2 & this.tile.dom.compareDocumentPosition(GG) ? 0 : this.view.state.doc.length;
        let wG = ZG.posAtStart;
        if (!ZG.isComposite()) return ZG.isText() ? GG == ZG.dom ? wG + bG : wG + (bG ? ZG.length : 0) : wG;
        {
          let SG;
          if (GG == ZG.dom) SG = ZG.dom.childNodes[bG];
          else {
            let wG = 0 == tG(GG) ? 0 : 0 == bG ? -1 : 1;
            for (;;) {
              let bG = GG.parentNode;
              if (bG == ZG.dom) break;
              0 == wG && bG.firstChild != bG.lastChild && (wG = GG == bG.firstChild ? -1 : 1), GG = bG
            }
            SG = wG < 0 ? GG : GG.nextSibling
          }
          if (SG == ZG.dom.firstChild) return wG;
          for (; SG && !fZ.get(SG);) SG = SG.nextSibling;
          if (!SG) return wG + ZG.length;
          for (let GG = 0, bG = wG;; GG++) {
            let wG = ZG.children[GG];
            if (wG.dom == SG) return bG;
            bG += wG.length + wG.breakAfter
          }
        }
      }
      domAtPos(GG, bG) {
        let {
          tile: ZG,
          offset: wG
        } = this.tile.resolveBlock(GG, bG);
        return ZG.isWidget() ? ZG.domPosFor(GG, bG) : ZG.domIn(wG, bG)
      }
      inlineDOMNearPos(GG, bG) {
        let ZG, wG, SG = -1,
          LG = !1,
          yG = -1,
          kG = !1;
        return this.tile.blockTiles(((bG, UG) => {
          if (bG.isWidget()) {
            if (32 & bG.flags && UG >= GG) return !0;
            16 & bG.flags && (LG = !0)
          } else {
            let YG = UG + bG.length;
            if (UG <= GG && (ZG = bG, SG = GG - UG, LG = YG < GG), YG >= GG && !wG && (wG = bG, yG = GG - UG, kG = UG > GG), UG > GG && wG) return !0
          }
        })), ZG || wG ? (LG && wG ? ZG = null : kG && ZG && (wG = null), ZG && bG < 0 || !wG ? ZG.domIn(SG, bG) : wG.domIn(yG, bG)) : this.domAtPos(GG, bG)
      }
      coordsAt(GG, bG) {
        let {
          tile: ZG,
          offset: wG
        } = this.tile.resolveBlock(GG, bG);
        return ZG.isWidget() ? ZG.widget instanceof nZ ? null : ZG.coordsInWidget(wG, bG, !0) : ZG.coordsIn(wG, bG)
      }
      lineAt(GG, bG) {
        let {
          tile: ZG
        } = this.tile.resolveBlock(GG, bG);
        return ZG.isLine() ? ZG : null
      }
      coordsForChar(GG) {
        let {
          tile: bG,
          offset: ZG
        } = this.tile.resolveBlock(GG, 1);
        if (!bG.isLine()) return null;
        return function GG(bG, ZG) {
          if (bG.isComposite())
            for (let wG of bG.children) {
              if (wG.length >= ZG) {
                let bG = GG(wG, ZG);
                if (bG) return bG
              }
              if ((ZG -= wG.length) < 0) break
            } else if (bG.isText() && ZG < bG.length) {
              let GG = (0, wG.X)(bG.text, ZG);
              if (GG == ZG) return null;
              let SG = wb(bG.dom, ZG, GG).getClientRects();
              for (let bG = 0; bG < SG.length; bG++) {
                let GG = SG[bG];
                if (bG == SG.length - 1 || GG.top < GG.bottom && GG.left < GG.right) return GG
              }
            } return null
        }(bG, ZG)
      }
      measureVisibleLineHeights(GG) {
        let bG = [],
          {
            from: ZG,
            to: wG
          } = GG,
          SG = this.view.contentDOM.clientWidth,
          LG = SG > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          yG = -1,
          kG = this.view.textDirection == Yb.LTR,
          UG = 0,
          YG = (GG, VG, pG) => {
            for (let fG = 0; fG < GG.children.length && !(VG > wG); fG++) {
              let wG = GG.children[fG],
                QG = VG + wG.length,
                KG = wG.dom.getBoundingClientRect(),
                {
                  height: hG
                } = KG;
              if (pG && !fG && (UG += KG.top - pG.top), wG instanceof dZ) QG > ZG && YG(wG, VG, KG);
              else if (VG >= ZG && (UG > 0 && bG.push(-UG), bG.push(hG + UG), UG = 0, LG)) {
                let GG = wG.dom.lastChild,
                  bG = GG ? gG(GG) : [];
                if (bG.length) {
                  let GG = bG[bG.length - 1],
                    ZG = kG ? GG.right - KG.left : KG.right - GG.left;
                  ZG > yG && (yG = ZG, this.minWidth = SG, this.minWidthFrom = VG, this.minWidthTo = QG)
                }
              }
              pG && fG == GG.children.length - 1 && (UG += pG.bottom - KG.bottom), VG = QG + wG.breakAfter
            }
          };
        return YG(this.tile, 0, null), bG
      }
      textDirectionAt(GG) {
        let {
          tile: bG
        } = this.tile.resolveBlock(GG, 1);
        return "rtl" == getComputedStyle(bG.dom).direction ? Yb.RTL : Yb.LTR
      }
      measureTextSize() {
        let GG = this.tile.blockTiles((GG => {
          if (GG.isLine() && GG.children.length && GG.length <= 20) {
            let bG, ZG = 0;
            for (let wG of GG.children) {
              if (!wG.isText() || /[^ -~]/.test(wG.text)) return;
              let GG = gG(wG.dom);
              if (1 != GG.length) return;
              ZG += GG[0].width, bG = GG[0].height
            }
            if (ZG) return {
              lineHeight: GG.dom.getBoundingClientRect().height,
              charWidth: ZG / GG.length,
              textHeight: bG
            }
          }
        }));
        if (GG) return GG;
        let bG, ZG, wG, SG = document.createElement("div");
        return SG.className = "cm-line", SG.style.width = "99999px", SG.style.position = "absolute", SG.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(SG);
          let GG = gG(SG.firstChild)[0];
          bG = SG.getBoundingClientRect().height, ZG = GG && GG.width ? GG.width / 27 : 7, wG = GG && GG.height ? GG.height : bG, SG.remove()
        })), {
          lineHeight: bG,
          charWidth: ZG,
          textHeight: wG
        }
      }
      computeBlockGapDeco() {
        let GG = [],
          bG = this.view.viewState;
        for (let ZG = 0, wG = 0;; wG++) {
          let SG = wG == bG.viewports.length ? null : bG.viewports[wG],
            LG = SG ? SG.from - 1 : this.view.state.doc.length;
          if (LG > ZG) {
            let wG = (bG.lineBlockAt(LG).bottom - bG.lineBlockAt(ZG).top) / this.view.scaleY;
            GG.push(aG.replace({
              widget: new nZ(wG),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(ZG, LG))
          }
          if (!SG) break;
          ZG = SG.to + 1
        }
        return aG.set(GG)
      }
      updateDeco() {
        let GG = 1,
          bG = this.view.state.facet(GZ).map((bG => (this.dynamicDecorationMap[GG++] = "function" == typeof bG) ? bG(this.view) : bG)),
          ZG = !1,
          SG = this.view.state.facet(ZZ).map(((GG, bG) => {
            let wG = "function" == typeof GG;
            return wG && (ZG = !0), wG ? GG(this.view) : GG
          }));
        for (SG.length && (this.dynamicDecorationMap[GG++] = ZG, bG.push(wG.x.join(SG))), this.Yw = [this.editContextFormatting, ...bG, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; GG < this.Yw.length;) this.dynamicDecorationMap[GG++] = !1;
        this.blockWrappers = this.view.state.facet(bZ).map((GG => "function" == typeof GG ? GG(this.view) : GG))
      }
      scrollIntoView(GG) {
        var bG;
        if (GG.isSnapshot) {
          let bG = this.view.viewState.lineBlockAt(GG.range.head);
          return this.view.scrollDOM.scrollTop = bG.top - GG.yMargin, void(this.view.scrollDOM.scrollLeft = GG.xMargin)
        }
        for (let VG of this.view.state.facet(nb)) try {
          if (VG(this.view, GG.range, GG)) return !0
        } catch (YG) {
          Tb(this.view.state, YG, "scroll handler")
        }
        let ZG, {
            range: wG
          } = GG,
          SG = this.coordsAt(wG.head, null !== (bG = wG.assoc) && void 0 !== bG ? bG : wG.empty ? 0 : wG.head > wG.anchor ? -1 : 1);
        if (!SG) return;
        !wG.empty && (ZG = this.coordsAt(wG.anchor, wG.anchor > wG.head ? -1 : 1)) && (SG = {
          left: Math.min(SG.left, ZG.left),
          top: Math.min(SG.top, ZG.top),
          right: Math.max(SG.right, ZG.right),
          bottom: Math.max(SG.bottom, ZG.bottom)
        });
        let LG = kZ(this.view),
          yG = {
            left: SG.left - LG.left,
            top: SG.top - LG.top,
            right: SG.right + LG.right,
            bottom: SG.bottom + LG.bottom
          },
          {
            offsetWidth: kG,
            offsetHeight: UG
          } = this.view.scrollDOM;
        if (function(GG, bG, ZG, wG, SG, LG, yG, kG) {
            let UG = GG.ownerDocument,
              YG = UG.defaultView || window;
            for (let VG = GG, pG = !1; VG && !pG;)
              if (1 == VG.nodeType) {
                let GG, fG = VG == UG.body,
                  QG = 1,
                  KG = 1;
                if (fG) GG = NG(YG);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(VG).position) && (pG = !0), VG.scrollHeight <= VG.clientHeight && VG.scrollWidth <= VG.clientWidth) {
                    VG = VG.assignedSlot || VG.parentNode;
                    continue
                  }
                  let bG = VG.getBoundingClientRect();
                  ({
                    scaleX: QG,
                    scaleY: KG
                  } = OG(VG, bG)), GG = {
                    left: bG.left,
                    right: bG.left + VG.clientWidth * QG,
                    top: bG.top,
                    bottom: bG.top + VG.clientHeight * KG
                  }
                }
                let hG = 0,
                  dG = 0;
                if ("nearest" == SG) bG.top < GG.top + yG ? (dG = bG.top - (GG.top + yG), ZG > 0 && bG.bottom > GG.bottom + dG && (dG = bG.bottom - GG.bottom + yG)) : bG.bottom > GG.bottom - yG && (dG = bG.bottom - GG.bottom + yG, ZG < 0 && bG.top - dG < GG.top && (dG = bG.top - (GG.top + yG)));
                else {
                  let wG = bG.bottom - bG.top,
                    LG = GG.bottom - GG.top;
                  dG = ("center" == SG && wG <= LG ? bG.top + wG / 2 - LG / 2 : "start" == SG || "center" == SG && ZG < 0 ? bG.top - yG : bG.bottom - LG + yG) - GG.top
                }
                if ("nearest" == wG ? bG.left < GG.left + LG ? (hG = bG.left - (GG.left + LG), ZG > 0 && bG.right > GG.right + hG && (hG = bG.right - GG.right + LG)) : bG.right > GG.right - LG && (hG = bG.right - GG.right + LG, ZG < 0 && bG.left < GG.left + hG && (hG = bG.left - (GG.left + LG))) : hG = ("center" == wG ? bG.left + (bG.right - bG.left) / 2 - (GG.right - GG.left) / 2 : "start" == wG == kG ? bG.left - LG : bG.right - (GG.right - GG.left) + LG) - GG.left, hG || dG)
                  if (fG) YG.scrollBy(hG, dG);
                  else {
                    let GG = 0,
                      ZG = 0;
                    if (dG) {
                      let GG = VG.scrollTop;
                      VG.scrollTop += dG / KG, ZG = (VG.scrollTop - GG) * KG
                    }
                    if (hG) {
                      let bG = VG.scrollLeft;
                      VG.scrollLeft += hG / QG, GG = (VG.scrollLeft - bG) * QG
                    }
                    bG = {
                      left: bG.left - GG,
                      top: bG.top - ZG,
                      right: bG.right - GG,
                      bottom: bG.bottom - ZG
                    }, GG && Math.abs(GG - hG) < 1 && (wG = "nearest"), ZG && Math.abs(ZG - dG) < 1 && (SG = "nearest")
                  } if (fG) break;
                (bG.top < GG.top || bG.bottom > GG.bottom || bG.left < GG.left || bG.right > GG.right) && (bG = {
                  left: Math.max(bG.left, GG.left),
                  right: Math.min(bG.right, GG.right),
                  top: Math.max(bG.top, GG.top),
                  bottom: Math.min(bG.bottom, GG.bottom)
                }), VG = VG.assignedSlot || VG.parentNode
              } else {
                if (11 != VG.nodeType) break;
                VG = VG.host
              }
          }(this.view.scrollDOM, yG, wG.head < wG.anchor ? -1 : 1, GG.x, GG.y, Math.max(Math.min(GG.xMargin, kG), -kG), Math.max(Math.min(GG.yMargin, UG), -UG), this.view.textDirection == Yb.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (SG.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || SG.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let GG = this.view.docView.lineAt(wG.head, 1);
          GG && GG.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(GG) {
        let bG = GG => GG.isWidget() || GG.children.some(bG);
        return bG(this.tile.resolveBlock(GG, 1).tile)
      }
      destroy() {
        MZ(this.tile)
      }
    }

    function MZ(GG, bG) {
      let ZG = null === bG || void 0 === bG ? void 0 : bG.get(GG);
      if (1 != ZG) {
        null == ZG && GG.destroy();
        for (let ZG of GG.children) MZ(ZG, bG)
      }
    }

    function AZ(GG, bG) {
      let ZG = GG.observer.selectionRange;
      if (!ZG.focusNode) return null;
      let wG = yb(ZG.focusNode, ZG.focusOffset),
        SG = kb(ZG.focusNode, ZG.focusOffset),
        LG = wG || SG;
      if (SG && wG && SG.node != wG.node) {
        let bG = fZ.get(SG.node);
        if (!bG || bG.isText() && bG.text != SG.node.nodeValue) LG = SG;
        else if (GG.docView.lastCompositionAfterCursor) {
          let GG = fZ.get(wG.node);
          !GG || GG.isText() && GG.text != wG.node.nodeValue || (LG = SG)
        }
      }
      if (GG.docView.lastCompositionAfterCursor = LG != wG, !LG) return null;
      let yG = bG - LG.offset;
      return {
        from: yG,
        to: yG + LG.node.nodeValue.length,
        node: LG.node
      }
    }
    let sZ = class {
      constructor() {
        this.changes = []
      }
      compareRange(GG, bG) {
        MG(GG, bG, this.changes)
      }
      comparePoint(GG, bG) {
        MG(GG, bG, this.changes)
      }
      boundChange(GG) {
        MG(GG, GG, this.changes)
      }
    };
    class qZ {
      constructor() {
        this.changes = []
      }
      compareRange(GG, bG) {
        MG(GG, bG, this.changes)
      }
      comparePoint() {}
      boundChange(GG) {
        MG(GG, GG, this.changes)
      }
    }
    class nZ extends FG {
      constructor(GG) {
        super(), this.height = GG
      }
      toDOM() {
        let GG = document.createElement("div");
        return GG.className = "cm-gap", this.updateDOM(GG), GG
      }
      eq(GG) {
        return GG.height == this.height
      }
      updateDOM(GG) {
        return GG.style.height = this.height + "px", !0
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

    function gZ(GG, bG, ZG) {
      let wG = GG.lineBlockAt(bG);
      if (Array.isArray(wG.type)) {
        let GG;
        for (let SG of wG.type) {
          if (SG.from > bG) break;
          if (!(SG.to < bG)) {
            if (SG.from < bG && SG.to > bG) return SG;
            GG && (SG.type != vG.Text || GG.type == SG.type && !(ZG < 0 ? SG.from < bG : SG.to > bG)) || (GG = SG)
          }
        }
        return GG || wG
      }
      return wG
    }

    function eZ(GG, bG, ZG, wG) {
      let SG = GG.state.doc.lineAt(bG.head),
        LG = GG.bidiSpans(SG),
        yG = GG.textDirectionAt(SG.from);
      for (let kG = bG, UG = null;;) {
        let bG = mb(SG, LG, yG, kG, ZG),
          YG = Wb;
        if (!bG) {
          if (SG.number == (ZG ? GG.state.doc.lines : 1)) return kG;
          YG = "\n", SG = GG.state.doc.line(SG.number + (ZG ? 1 : -1)), LG = GG.bidiSpans(SG), bG = GG.visualLineSide(SG, !ZG)
        }
        if (UG) {
          if (!UG(YG)) return kG
        } else {
          if (!wG) return bG;
          UG = wG(YG)
        }
        kG = bG
      }
    }

    function RZ(GG, bG, ZG) {
      for (;;) {
        let wG = 0;
        for (let SG of GG) SG.between(bG - 1, bG + 1, ((GG, SG, LG) => {
          if (bG > GG && bG < SG) {
            let LG = wG || ZG || (bG - GG < SG - bG ? -1 : 1);
            bG = LG < 0 ? GG : SG, wG = LG
          }
        }));
        if (!wG) return bG
      }
    }

    function TZ(GG, bG) {
      let ZG = null;
      for (let SG = 0; SG < bG.Bh.length; SG++) {
        let LG = bG.Bh[SG],
          yG = null;
        if (LG.empty) {
          let bG = RZ(GG, LG.from, 0);
          bG != LG.from && (yG = wG.j.cursor(bG, -1))
        } else {
          let bG = RZ(GG, LG.from, -1),
            ZG = RZ(GG, LG.to, 1);
          bG == LG.from && ZG == LG.to || (yG = wG.j.range(LG.from == LG.anchor ? bG : ZG, LG.from == LG.head ? bG : ZG))
        }
        yG && (ZG || (ZG = bG.Bh.slice()), ZG[SG] = yG)
      }
      return ZG ? wG.j.create(ZG, bG.mainIndex) : bG
    }

    function HZ(GG, bG, ZG) {
      let SG = RZ(GG.state.facet(wZ).map((bG => bG(GG))), ZG.from, bG.head > ZG.from ? -1 : 1);
      return SG == ZG.from ? ZG : wG.j.cursor(SG, SG < ZG.from ? 1 : -1)
    }
    class tZ {
      constructor(GG, bG) {
        this.pos = GG, this.assoc = bG
      }
    }

    function DZ(GG, bG, ZG, SG) {
      let LG, yG = GG.contentDOM.getBoundingClientRect(),
        kG = yG.top + GG.viewState.paddingTop,
        {
          x: UG,
          y: YG
        } = bG,
        VG = YG - kG;
      for (;;) {
        if (VG < 0) return new tZ(0, 1);
        if (VG > GG.viewState.docHeight) return new tZ(GG.state.doc.length, -1);
        if (LG = GG.elementAtHeight(VG), null == SG) break;
        if (LG.type == vG.Text) {
          if (SG < 0 ? LG.to < GG.viewport.from : LG.from > GG.viewport.to) break;
          let bG = GG.docView.coordsAt(SG < 0 ? LG.from : LG.to, SG > 0 ? -1 : 1);
          if (bG && (SG < 0 ? bG.top <= VG + kG : bG.bottom >= VG + kG)) break
        }
        let bG = GG.viewState.heightOracle.textHeight / 2;
        VG = SG > 0 ? LG.bottom + bG : LG.top - bG
      }
      if (GG.viewport.from >= LG.to || GG.viewport.to <= LG.from) {
        if (ZG) return null;
        if (LG.type == vG.Text) {
          let bG = function(GG, bG, ZG, SG, LG) {
            let yG = Math.round((SG - bG.left) * GG.defaultCharacterWidth);
            if (GG.lineWrapping && ZG.height > 1.5 * GG.defaultLineHeight) {
              let bG = GG.viewState.heightOracle.textHeight;
              yG += Math.floor((LG - ZG.top - .5 * (GG.defaultLineHeight - bG)) / bG) * GG.viewState.heightOracle.lineLength
            }
            let kG = GG.state.sliceDoc(ZG.from, ZG.to);
            return ZG.from + (0, wG._)(kG, yG, GG.state.tabSize)
          }(GG, yG, LG, UG, YG);
          return new tZ(bG, bG == LG.from ? 1 : -1)
        }
      }
      if (LG.type != vG.Text) return VG < (LG.top + LG.bottom) / 2 ? new tZ(LG.from, 1) : new tZ(LG.to, -1);
      let pG = GG.docView.lineAt(LG.from, 2);
      return pG && pG.length == LG.length || (pG = GG.docView.lineAt(LG.from, -2)), new NZ(GG, UG, YG, GG.textDirectionAt(LG.from)).scanTile(pG, LG.from)
    }
    class NZ {
      constructor(GG, bG, ZG, wG) {
        this.view = GG, this.x = bG, this.y = ZG, this.baseDir = wG, this.line = null, this.spans = null
      }
      bidiSpansAt(GG) {
        return (!this.line || this.line.from > GG || this.line.to < GG) && (this.line = this.view.state.doc.lineAt(GG), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(GG, bG) {
        let {
          line: ZG,
          spans: wG
        } = this.bidiSpansAt(GG);
        return wG[zb.find(wG, GG - ZG.from, -1, bG)].level == this.baseDir
      }
      dirAt(GG, bG) {
        let {
          line: ZG,
          spans: wG
        } = this.bidiSpansAt(GG);
        return wG[zb.find(wG, GG - ZG.from, -1, bG)].dir
      }
      bidiIn(GG, bG) {
        let {
          spans: ZG,
          line: wG
        } = this.bidiSpansAt(GG);
        return ZG.length > 1 || ZG.length && (ZG[0].level != this.baseDir || ZG[0].to + wG.from < bG)
      }
      scan(GG, bG) {
        let ZG, wG, SG, LG = 0,
          yG = GG.length - 1,
          kG = new Set,
          UG = this.bidiIn(GG[0], GG[yG]),
          YG = -1,
          VG = 1e9;
        GG: for (; LG < yG;) {
          let pG = yG - LG,
            fG = LG + yG >> 1;
          bG: if (kG.has(fG)) {
            let GG = LG + Math.floor(Math.random() * pG);
            for (let bG = 0; bG < pG; bG++) {
              if (!kG.has(GG)) {
                fG = GG;
                break bG
              }
              GG++, GG == yG && (GG = LG)
            }
            break GG
          } kG.add(fG);
          let QG = bG(fG);
          if (QG)
            for (let bG = 0; bG < QG.length; bG++) {
              let kG = QG[bG],
                pG = 0;
              if (!(0 == kG.width && QG.length > 1)) {
                if (kG.bottom < this.y)(!ZG || ZG.bottom < kG.bottom) && (ZG = kG), pG = 1;
                else if (kG.top > this.y)(!wG || wG.top > kG.top) && (wG = kG), pG = -1;
                else {
                  let GG = kG.left > this.x ? this.x - kG.left : kG.right < this.x ? this.x - kG.right : 0,
                    bG = Math.abs(GG);
                  bG < VG && (YG = fG, VG = bG, SG = kG), GG && (pG = GG < 0 == (this.baseDir == Yb.LTR) ? -1 : 1)
                } - 1 != pG || UG && !this.baseDirAt(GG[fG], 1) ? 1 != pG || UG && !this.baseDirAt(GG[fG + 1], -1) || (LG = fG + 1) : yG = fG
              }
            }
        }
        if (!SG) {
          let SG = ZG && (!wG || this.y - ZG.bottom < wG.top - this.y) ? ZG : wG;
          return this.y = (SG.top + SG.bottom) / 2, this.scan(GG, bG)
        }
        if (VG) {
          if (ZG && ZG.bottom > SG.top) return this.y = ZG.bottom - 1, this.scan(GG, bG);
          if (wG && wG.top < SG.bottom) return this.y = wG.top + 1, this.scan(GG, bG)
        }
        let pG = (UG ? this.dirAt(GG[YG], 1) : this.baseDir) == Yb.LTR;
        return {
          i: YG,
          after: this.x > (SG.left + SG.right) / 2 == pG
        }
      }
      scanText(GG, bG) {
        let ZG = [];
        for (let LG = 0; LG < GG.length; LG = (0, wG.X)(GG.text, LG)) ZG.push(bG + LG);
        ZG.push(bG + GG.length);
        let SG = this.scan(ZG, (wG => {
          let SG = ZG[wG] - bG,
            LG = ZG[wG + 1] - bG;
          return wb(GG.dom, SG, LG).getClientRects()
        }));
        return SG.after ? new tZ(ZG[SG.i + 1], -1) : new tZ(ZG[SG.i], 1)
      }
      scanTile(GG, bG) {
        if (!GG.length) return new tZ(bG, 1);
        if (1 == GG.children.length) {
          let ZG = GG.children[0];
          if (ZG.isText()) return this.scanText(ZG, bG);
          if (ZG.isComposite()) return this.scanTile(ZG, bG)
        }
        let ZG = [bG];
        for (let yG = 0, kG = bG; yG < GG.children.length; yG++) ZG.push(kG += GG.children[yG].length);
        let wG = this.scan(ZG, (bG => {
            let ZG = GG.children[bG];
            return 48 & ZG.flags ? null : (1 == ZG.dom.nodeType ? ZG.dom : wb(ZG.dom, 0, ZG.length)).getClientRects()
          })),
          SG = GG.children[wG.i],
          LG = ZG[wG.i];
        return SG.isText() ? this.scanText(SG, LG) : SG.isComposite() ? this.scanTile(SG, LG) : wG.after ? new tZ(ZG[wG.i + 1], -1) : new tZ(LG, 1)
      }
    }
    const OZ = "\uffff";
    class xZ {
      constructor(GG, bG) {
        this.points = GG, this.view = bG, this.text = "", this.lineSeparator = bG.state.facet(wG.l.lineSeparator)
      }
      append(GG) {
        this.text += GG
      }
      lineBreak() {
        this.text += OZ
      }
      readRange(GG, bG) {
        if (!GG) return this;
        let ZG = GG.parentNode;
        for (let wG = GG;;) {
          this.findPointBefore(ZG, wG);
          let GG = this.text.length;
          this.readNode(wG);
          let SG = fZ.get(wG),
            LG = wG.nextSibling;
          if (LG == bG) {
            (null === SG || void 0 === SG ? void 0 : SG.breakAfter) && !LG && ZG != this.view.contentDOM && this.lineBreak();
            break
          }
          let yG = fZ.get(LG);
          (SG && yG ? SG.breakAfter : (SG ? SG.breakAfter : TG(wG)) || TG(LG) && ("BR" != wG.nodeName || (null === SG || void 0 === SG ? void 0 : SG.isWidget())) && this.text.length > GG) && !Gw(LG, bG) && this.lineBreak(), wG = LG
        }
        return this.findPointBefore(ZG, bG), this
      }
      readTextNode(GG) {
        let bG = GG.nodeValue;
        for (let ZG of this.points) ZG.node == GG && (ZG.pos = this.text.length + Math.min(ZG.offset, bG.length));
        for (let ZG = 0, wG = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let SG, LG = -1,
            yG = 1;
          if (this.lineSeparator ? (LG = bG.indexOf(this.lineSeparator, ZG), yG = this.lineSeparator.length) : (SG = wG.exec(bG)) && (LG = SG.index, yG = SG[0].length), this.append(bG.slice(ZG, LG < 0 ? bG.length : LG)), LG < 0) break;
          if (this.lineBreak(), yG > 1)
            for (let bG of this.points) bG.node == GG && bG.pos > this.text.length && (bG.pos -= yG - 1);
          ZG = LG + yG
        }
      }
      readNode(GG) {
        let bG = fZ.get(GG),
          ZG = bG && bG.overrideDOMText;
        if (null != ZG) {
          this.findPointInside(GG, ZG.length);
          for (let GG = ZG.iter(); !GG.next().done;) GG.lineBreak ? this.lineBreak() : this.append(GG.value)
        } else 3 == GG.nodeType ? this.readTextNode(GG) : "BR" == GG.nodeName ? GG.nextSibling && this.lineBreak() : 1 == GG.nodeType && this.readRange(GG.firstChild, null)
      }
      findPointBefore(GG, bG) {
        for (let ZG of this.points) ZG.node == GG && GG.childNodes[ZG.offset] == bG && (ZG.pos = this.text.length)
      }
      findPointInside(GG, bG) {
        for (let ZG of this.points)(3 == GG.nodeType ? ZG.node == GG : GG.contains(ZG.node)) && (ZG.pos = this.text.length + (BZ(GG, ZG.node, ZG.offset) ? bG : 0))
      }
    }

    function BZ(GG, bG, ZG) {
      for (;;) {
        if (!bG || ZG < tG(bG)) return !1;
        if (bG == GG) return !0;
        ZG = RG(bG) + 1, bG = bG.parentNode
      }
    }

    function Gw(GG, bG) {
      let ZG;
      for (; GG != bG && GG; GG = GG.nextSibling) {
        let bG = fZ.get(GG);
        if (!(null === bG || void 0 === bG ? void 0 : bG.isWidget())) return !1;
        bG && (ZG || (ZG = [])).push(bG)
      }
      if (ZG)
        for (let wG of ZG) {
          let GG = wG.overrideDOMText;
          if (null === GG || void 0 === GG ? void 0 : GG.length) return !1
        }
      return !0
    }
    class bw {
      constructor(GG, bG) {
        this.node = GG, this.offset = bG, this.pos = -1
      }
    }
    class Zw {
      constructor(GG, bG, ZG, SG) {
        this.typeOver = SG, this.bounds = null, this.text = "", this.domChanged = bG > -1;
        let {
          impreciseHead: LG,
          impreciseAnchor: yG
        } = GG.docView, kG = GG.state.selection;
        if (GG.state.readOnly && bG > -1) this.newSel = null;
        else if (bG > -1 && (this.bounds = ww(GG.docView.tile, bG, ZG, 0))) {
          let bG = LG || yG ? [] : function(GG) {
              let bG = [];
              if (GG.root.activeElement != GG.contentDOM) return bG;
              let {
                anchorNode: ZG,
                anchorOffset: wG,
                focusNode: SG,
                focusOffset: LG
              } = GG.observer.selectionRange;
              ZG && (bG.push(new bw(ZG, wG)), SG == ZG && LG == wG || bG.push(new bw(SG, LG)));
              return bG
            }(GG),
            ZG = new xZ(bG, GG);
          ZG.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = ZG.text, this.newSel = function(GG, bG) {
            if (0 == GG.length) return null;
            let ZG = GG[0].pos,
              SG = 2 == GG.length ? GG[1].pos : ZG;
            return ZG > -1 && SG > -1 ? wG.j.single(ZG + bG, SG + bG) : null
          }(bG, this.bounds.from)
        } else {
          let bG = GG.observer.selectionRange,
            ZG = LG && LG.node == bG.focusNode && LG.offset == bG.focusOffset || !qG(GG.contentDOM, bG.focusNode) ? kG.main.head : GG.docView.posFromDOM(bG.focusNode, bG.focusOffset),
            SG = yG && yG.node == bG.anchorNode && yG.offset == bG.anchorOffset || !qG(GG.contentDOM, bG.anchorNode) ? kG.main.anchor : GG.docView.posFromDOM(bG.anchorNode, bG.anchorOffset),
            UG = GG.viewport;
          if ((uG.ios || uG.chrome) && kG.main.empty && ZG != SG && (UG.from > 0 || UG.to < GG.state.doc.length)) {
            let bG = Math.min(ZG, SG),
              wG = Math.max(ZG, SG),
              LG = UG.from - bG,
              yG = UG.to - wG;
            0 != LG && 1 != LG && 0 != bG || 0 != yG && -1 != yG && wG != GG.state.doc.length || (ZG = 0, SG = GG.state.doc.length)
          }
          if (GG.inputState.composing > -1 && kG.Bh.length > 1) this.newSel = kG.replaceRange(wG.j.range(SG, ZG));
          else if (GG.lineWrapping && SG == ZG && (!kG.main.empty || kG.main.head != ZG) && GG.inputState.lastTouchTime > Date.now() - 100) {
            let bG = GG.coordsAtPos(ZG, -1),
              SG = 0;
            bG && (SG = GG.inputState.lastTouchY <= bG.bottom ? -1 : 1), this.newSel = wG.j.create([wG.j.cursor(ZG, SG)])
          } else this.newSel = wG.j.single(SG, ZG)
        }
      }
    }

    function ww(GG, bG, ZG, wG) {
      if (GG.isComposite()) {
        let SG = -1,
          LG = -1,
          yG = -1,
          kG = -1;
        for (let UG = 0, YG = wG, VG = wG; UG < GG.children.length; UG++) {
          let wG = GG.children[UG],
            pG = YG + wG.length;
          if (YG < bG && pG > ZG) return ww(wG, bG, ZG, YG);
          if (pG >= bG && -1 == SG && (SG = UG, LG = YG), YG > ZG && wG.dom.parentNode == GG.dom) {
            yG = UG, kG = VG;
            break
          }
          VG = pG, YG = pG + wG.breakAfter
        }
        return {
          from: LG,
          to: kG < 0 ? wG + GG.length : kG,
          startDOM: (SG ? GG.children[SG - 1].dom.nextSibling : null) || GG.dom.firstChild,
          endDOM: yG < GG.children.length && yG >= 0 ? GG.children[yG].dom : null
        }
      }
      return GG.isText() ? {
        from: wG,
        to: wG + GG.length,
        startDOM: GG.dom,
        endDOM: GG.dom.nextSibling
      } : null
    }

    function Sw(GG, bG) {
      let ZG, {
          newSel: SG
        } = bG,
        {
          state: LG
        } = GG,
        yG = LG.selection.main,
        kG = GG.inputState.lastKeyTime > Date.now() - 100 ? GG.inputState.lastKeyCode : -1;
      if (bG.bounds) {
        let {
          from: GG,
          to: SG
        } = bG.bounds, UG = yG.from, YG = null;
        (8 === kG || uG.android && bG.text.length < SG - GG) && (UG = yG.to, YG = "end");
        let VG, pG, fG = LG.doc.sliceString(GG, SG, OZ);
        !yG.empty && yG.from >= GG && yG.to <= SG && (bG.typeOver || fG != bG.text) && fG.slice(0, yG.from - GG) == bG.text.slice(0, yG.from - GG) && fG.slice(yG.to - GG) == bG.text.slice(VG = bG.text.length - (fG.length - (yG.to - GG))) ? ZG = {
          from: yG.from,
          to: yG.to,
          insert: wG.I.of(bG.text.slice(yG.from - GG, VG).split(OZ))
        } : (pG = yw(fG, bG.text, UG - GG, YG)) && (uG.chrome && 13 == kG && pG.toB == pG.from + 2 && bG.text.slice(pG.from, pG.toB) == OZ + OZ && pG.toB--, ZG = {
          from: GG + pG.from,
          to: GG + pG.toA,
          insert: wG.I.of(bG.text.slice(pG.from, pG.toB).split(OZ))
        })
      } else SG && (!GG.hasFocus && LG.facet(Hb) || kw(SG, yG)) && (SG = null);
      if (!ZG && !SG) return !1;
      if ((uG.mac || uG.android) && ZG && ZG.from == ZG.to && ZG.from == yG.head - 1 && /^\. ?$/.test(ZG.insert.toString()) && "off" == GG.contentDOM.getAttribute("autocorrect") ? (SG && 2 == ZG.insert.length && (SG = wG.j.single(SG.main.anchor - 1, SG.main.head - 1)), ZG = {
          from: ZG.from,
          to: ZG.to,
          insert: wG.I.of([ZG.insert.toString().replace(".", " ")])
        }) : LG.doc.lineAt(yG.from).to < yG.to && GG.docView.lineHasWidget(yG.to) && GG.inputState.insertingTextAt > Date.now() - 50 ? ZG = {
          from: yG.from,
          to: yG.to,
          insert: LG.toText(GG.inputState.insertingText)
        } : uG.chrome && ZG && ZG.from == ZG.to && ZG.from == yG.head && "\n " == ZG.insert.toString() && GG.lineWrapping && (SG && (SG = wG.j.single(SG.main.anchor - 1, SG.main.head - 1)), ZG = {
          from: yG.from,
          to: yG.to,
          insert: wG.I.of([" "])
        }), ZG) return Lw(GG, ZG, SG, kG);
      if (SG && !kw(SG, yG)) {
        let bG = !1,
          ZG = "select";
        return GG.inputState.lastSelectionTime > Date.now() - 50 && ("select" == GG.inputState.lastSelectionOrigin && (bG = !0), ZG = GG.inputState.lastSelectionOrigin, "select.pointer" == ZG && (SG = TZ(LG.facet(wZ).map((bG => bG(GG))), SG))), GG.dispatch({
          selection: SG,
          scrollIntoView: bG,
          userEvent: ZG
        }), !0
      }
      return !1
    }

    function Lw(GG, bG, ZG) {
      let SG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (uG.ios && GG.inputState.flushIOSKey(bG)) return !0;
      let LG = GG.state.selection.main;
      if (uG.android && (bG.to == LG.to && (bG.from == LG.from || bG.from == LG.from - 1 && " " == GG.state.sliceDoc(bG.from, LG.from)) && 1 == bG.insert.length && 2 == bG.insert.lines && Sb(GG.contentDOM, "Enter", 13) || (bG.from == LG.from - 1 && bG.to == LG.to && 0 == bG.insert.length || 8 == SG && bG.insert.length < bG.to - bG.from && bG.to > LG.head) && Sb(GG.contentDOM, "Backspace", 8) || bG.from == LG.from && bG.to == LG.to + 1 && 0 == bG.insert.length && Sb(GG.contentDOM, "Delete", 46))) return !0;
      let yG, kG = bG.insert.toString();
      GG.inputState.composing >= 0 && GG.inputState.composing++;
      let UG = () => yG || (yG = function(GG, bG, ZG) {
        let SG, LG = GG.state,
          yG = LG.selection.main,
          kG = -1;
        if (bG.from == bG.to && bG.from < yG.from || bG.from > yG.to) {
          let ZG = bG.from < yG.from ? -1 : 1,
            wG = ZG < 0 ? yG.from : yG.to,
            SG = RZ(LG.facet(wZ).map((bG => bG(GG))), wG, ZG);
          bG.from == SG && (kG = SG)
        }
        if (kG > -1) SG = {
          changes: bG,
          selection: wG.j.cursor(bG.from + bG.insert.length, -1)
        };
        else if (bG.from >= yG.from && bG.to <= yG.to && bG.to - bG.from >= (yG.to - yG.from) / 3 && (!ZG || ZG.main.empty && ZG.main.from == bG.from + bG.insert.length) && GG.inputState.composing < 0) {
          let ZG = yG.from < bG.from ? LG.sliceDoc(yG.from, bG.from) : "",
            wG = yG.to > bG.to ? LG.sliceDoc(bG.to, yG.to) : "";
          SG = LG.replaceSelection(GG.state.toText(ZG + bG.insert.sliceString(0, void 0, GG.state.lineBreak) + wG))
        } else {
          let kG = LG.changes(bG),
            UG = ZG && ZG.main.to <= kG.newLength ? ZG.main : void 0;
          if (LG.selection.Bh.length > 1 && (GG.inputState.composing >= 0 || GG.inputState.compositionPendingChange) && bG.to <= yG.to + 10 && bG.to >= yG.to - 10) {
            let YG, VG = GG.state.sliceDoc(bG.from, bG.to),
              pG = ZG && AZ(GG, ZG.main.head);
            if (pG) {
              let GG = bG.insert.length - (bG.to - bG.from);
              YG = {
                from: pG.from,
                to: pG.to - GG
              }
            } else YG = GG.state.doc.lineAt(yG.head);
            let fG = yG.to - bG.to;
            SG = LG.changeByRange((ZG => {
              if (ZG.from == yG.from && ZG.to == yG.to) return {
                changes: kG,
                range: UG || ZG.map(kG)
              };
              let SG = ZG.to - fG,
                pG = SG - VG.length;
              if (GG.state.sliceDoc(pG, SG) != VG || SG >= YG.from && pG <= YG.to) return {
                range: ZG
              };
              let QG = LG.changes({
                  from: pG,
                  to: SG,
                  insert: bG.insert
                }),
                KG = ZG.to - yG.to;
              return {
                changes: QG,
                range: UG ? wG.j.range(Math.max(0, UG.anchor + KG), Math.max(0, UG.head + KG)) : ZG.map(QG)
              }
            }))
          } else SG = {
            changes: kG,
            selection: UG && LG.selection.replaceRange(UG)
          }
        }
        let UG = "input.type";
        (GG.composing || GG.inputState.compositionPendingChange && GG.inputState.compositionEndedAt > Date.now() - 50) && (GG.inputState.compositionPendingChange = !1, UG += ".compose", GG.inputState.compositionFirstChange && (UG += ".start", GG.inputState.compositionFirstChange = !1));
        return LG.update(SG, {
          userEvent: UG,
          scrollIntoView: !0
        })
      }(GG, bG, ZG));
      return GG.state.facet(jb).some((ZG => ZG(GG, bG.from, bG.to, kG, UG))) || GG.dispatch(UG()), !0
    }

    function yw(GG, bG, ZG, wG) {
      let SG = Math.min(GG.length, bG.length),
        LG = 0;
      for (; LG < SG && GG.charCodeAt(LG) == bG.charCodeAt(LG);) LG++;
      if (LG == SG && GG.length == bG.length) return null;
      let yG = GG.length,
        kG = bG.length;
      for (; yG > 0 && kG > 0 && GG.charCodeAt(yG - 1) == bG.charCodeAt(kG - 1);) yG--, kG--;
      if ("end" == wG) {
        ZG -= yG + Math.max(0, LG - Math.min(yG, kG)) - LG
      }
      if (yG < LG && GG.length < bG.length) {
        LG -= ZG <= LG && ZG >= yG ? LG - ZG : 0, kG = LG + (kG - yG), yG = LG
      } else if (kG < LG) {
        LG -= ZG <= LG && ZG >= kG ? LG - ZG : 0, yG = LG + (yG - kG), kG = LG
      }
      return {
        from: LG,
        toA: yG,
        toB: kG
      }
    }

    function kw(GG, bG) {
      return bG.head == GG.main.head && bG.anchor == GG.main.anchor
    }
    class Uw {
      setSelectionOrigin(GG) {
        this.lastSelectionOrigin = GG, this.lastSelectionTime = Date.now()
      }
      constructor(GG) {
        this.view = GG, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = GG.hasFocus, uG.safari && GG.contentDOM.addEventListener("input", (() => null)), uG.gecko && function(GG) {
          lw.has(GG) || (lw.add(GG), GG.addEventListener("copy", (() => {})), GG.addEventListener("cut", (() => {})))
        }(GG.contentDOM.ownerDocument)
      }
      handleEvent(GG) {
        (function(GG, bG) {
          if (!bG.bubbles) return !0;
          if (bG.defaultPrevented) return !1;
          for (let ZG, wG = bG.target; wG != GG.contentDOM; wG = wG.parentNode)
            if (!wG || 11 == wG.nodeType || (ZG = fZ.get(wG)) && ZG.isWidget() && !ZG.isHidden && ZG.widget.ignoreEvent(bG)) return !1;
          return !0
        })(this.view, GG) && !this.ignoreDuringComposition(GG) && ("keydown" == GG.type && this.keydown(GG) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(GG.type, GG))) : this.runHandlers(GG.type, GG)))
      }
      runHandlers(GG, bG) {
        let ZG = this.handlers[GG];
        if (ZG) {
          for (let GG of ZG.observers) GG(this.view, bG);
          for (let GG of ZG.handlers) {
            if (bG.defaultPrevented) break;
            if (GG(this.view, bG)) {
              bG.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(GG) {
        let bG = Vw(GG),
          ZG = this.handlers,
          wG = this.view.contentDOM;
        for (let SG in bG)
          if ("scroll" != SG) {
            let GG = !bG[SG].handlers.length,
              LG = ZG[SG];
            LG && GG != !LG.handlers.length && (wG.removeEventListener(SG, this.handleEvent), LG = null), LG || wG.addEventListener(SG, this.handleEvent, {
              passive: GG
            })
          } for (let SG in ZG) "scroll" == SG || bG[SG] || wG.removeEventListener(SG, this.handleEvent);
        this.handlers = bG
      }
      keydown(GG) {
        if (this.lastKeyCode = GG.keyCode, this.lastKeyTime = Date.now(), 9 == GG.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != GG.keyCode && Qw.indexOf(GG.keyCode) < 0 && (this.tabFocusMode = -1), uG.android && uG.chrome && !GG.synthetic && (13 == GG.keyCode || 8 == GG.keyCode)) return this.view.observer.delayAndroidKey(GG.key, GG.keyCode), !0;
        let bG;
        return !uG.ios || GG.synthetic || GG.altKey || GG.metaKey || GG.shiftKey || !((bG = pw.find((bG => bG.keyCode == GG.keyCode))) && !GG.ctrlKey || fw.indexOf(GG.key) > -1 && GG.ctrlKey) ? (229 != GG.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = bG || GG, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(GG) {
        let bG = this.pendingIOSKey;
        return !!bG && (!("Enter" == bG.key && GG && GG.from < GG.to && /^\S+$/.test(GG.insert.toString())) && (this.pendingIOSKey = void 0, Sb(this.view.contentDOM, bG.key, bG.keyCode, bG instanceof KeyboardEvent ? bG : void 0)))
      }
      ignoreDuringComposition(GG) {
        return !(!/^key/.test(GG.type) || GG.synthetic) && (this.composing > 0 || !!(uG.safari && !uG.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
      }
      startMouseSelection(GG) {
        this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = GG
      }
      update(GG) {
        this.view.observer.update(GG), this.mouseSelection && this.mouseSelection.update(GG), this.draggedContent && GG.docChanged && (this.draggedContent = this.draggedContent.map(GG.changes)), GG.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
      }
      destroy() {
        this.mouseSelection && this.mouseSelection.destroy()
      }
    }

    function Yw(GG, bG) {
      return (ZG, wG) => {
        try {
          return bG.call(GG, wG, ZG)
        } catch (SG) {
          Tb(ZG.state, SG)
        }
      }
    }

    function Vw(GG) {
      let bG = Object.create(null);

      function ZG(GG) {
        return bG[GG] || (bG[GG] = {
          observers: [],
          handlers: []
        })
      }
      for (let wG of GG) {
        let GG = wG.spec,
          bG = GG && GG.plugin.domEventHandlers,
          SG = GG && GG.plugin.domEventObservers;
        if (bG)
          for (let LG in bG) {
            let GG = bG[LG];
            GG && ZG(LG).handlers.push(Yw(wG.value, GG))
          }
        if (SG)
          for (let LG in SG) {
            let GG = SG[LG];
            GG && ZG(LG).observers.push(Yw(wG.value, GG))
          }
      }
      for (let wG in dw) ZG(wG).handlers.push(dw[wG]);
      for (let wG in Jw) ZG(wG).observers.push(Jw[wG]);
      return bG
    }
    const pw = [{
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
      fw = "dthko",
      Qw = [16, 17, 18, 20, 91, 92, 224, 225];

    function Kw(GG) {
      return .7 * Math.max(0, GG) + 8
    }
    class hw {
      constructor(GG, bG, ZG, SG) {
        this.view = GG, this.startEvent = bG, this.style = ZG, this.mustSelect = SG, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = bG, this.scrollParents = xG(GG.contentDOM), this.atoms = GG.state.facet(wZ).map((bG => bG(GG)));
        let LG = GG.contentDOM.ownerDocument;
        LG.addEventListener("mousemove", this.move = this.move.bind(this)), LG.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = bG.shiftKey, this.multiple = GG.state.facet(wG.l.allowMultipleSelections) && function(GG, bG) {
          let ZG = GG.state.facet(Fb);
          return ZG.length ? ZG[0](bG) : uG.mac ? bG.metaKey : bG.ctrlKey
        }(GG, bG), this.dragging = !(! function(GG, bG) {
          let {
            main: ZG
          } = GG.state.selection;
          if (ZG.empty) return !1;
          let wG = sG(GG.root);
          if (!wG || 0 == wG.rangeCount) return !0;
          let SG = wG.getRangeAt(0).getClientRects();
          for (let LG = 0; LG < SG.length; LG++) {
            let GG = SG[LG];
            if (GG.left <= bG.clientX && GG.right >= bG.clientX && GG.top <= bG.clientY && GG.bottom >= bG.clientY) return !0
          }
          return !1
        }(GG, bG) || 1 != Ww(bG)) && null
      }
      start(GG) {
        !1 === this.dragging && this.select(GG)
      }
      move(GG) {
        if (0 == GG.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (bG = this.startEvent, ZG = GG, Math.max(Math.abs(bG.clientX - ZG.clientX), Math.abs(bG.clientY - ZG.clientY)) < 10)) return;
        var bG, ZG;
        this.select(this.lastEvent = GG);
        let wG = 0,
          SG = 0,
          LG = 0,
          yG = 0,
          kG = this.view.win.innerWidth,
          UG = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: LG,
          right: kG
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: yG,
          bottom: UG
        } = this.scrollParents.y.getBoundingClientRect());
        let YG = kZ(this.view);
        GG.clientX - YG.left <= LG + 6 ? wG = -Kw(LG - GG.clientX) : GG.clientX + YG.right >= kG - 6 && (wG = Kw(GG.clientX - kG)), GG.clientY - YG.top <= yG + 6 ? SG = -Kw(yG - GG.clientY) : GG.clientY + YG.bottom >= UG - 6 && (SG = Kw(GG.clientY - UG)), this.setScrollSpeed(wG, SG)
      }
      up(GG) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || GG.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let GG = this.view.contentDOM.ownerDocument;
        GG.removeEventListener("mousemove", this.move), GG.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(GG, bG) {
        this.scrollSpeed = {
          x: GG,
          y: bG
        }, GG || bG ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: GG,
          y: bG
        } = this.scrollSpeed;
        GG && this.scrollParents.x && (this.scrollParents.x.scrollLeft += GG, GG = 0), bG && this.scrollParents.y && (this.scrollParents.y.scrollTop += bG, bG = 0), (GG || bG) && this.view.win.scrollBy(GG, bG), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(GG) {
        let {
          view: bG
        } = this, ZG = TZ(this.atoms, this.style.get(GG, this.extend, this.multiple));
        !this.mustSelect && ZG.eq(bG.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: ZG,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(GG) {
        GG.transactions.some((GG => GG.isUserEvent("input.type"))) ? this.destroy() : this.style.update(GG) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const dw = Object.create(null),
      Jw = Object.create(null),
      rw = uG.ie && uG.ie_version < 15 || uG.ios && uG.webkit_version < 604;

    function zw(GG, bG, ZG) {
      for (let wG of GG.facet(bG)) ZG = wG(ZG, GG);
      return ZG
    }

    function Ew(GG, bG) {
      bG = zw(GG.state, Mb, bG);
      let ZG, {
          state: SG
        } = GG,
        LG = 1,
        yG = SG.toText(bG),
        kG = yG.lines == SG.selection.Bh.length;
      if (null != Iw && SG.selection.Bh.every((GG => GG.empty)) && Iw == yG.toString()) {
        let GG = -1;
        ZG = SG.changeByRange((ZG => {
          let UG = SG.doc.lineAt(ZG.from);
          if (UG.from == GG) return {
            range: ZG
          };
          GG = UG.from;
          let YG = SG.toText((kG ? yG.line(LG++).text : bG) + SG.lineBreak);
          return {
            changes: {
              from: UG.from,
              insert: YG
            },
            range: wG.j.cursor(ZG.from + YG.length)
          }
        }))
      } else ZG = kG ? SG.changeByRange((GG => {
        let bG = yG.line(LG++);
        return {
          changes: {
            from: GG.from,
            to: GG.to,
            insert: bG.text
          },
          range: wG.j.cursor(GG.from + bG.length)
        }
      })) : SG.replaceSelection(yG);
      GG.dispatch(ZG, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function ow(GG, bG, ZG, SG) {
      if (1 == SG) return wG.j.cursor(bG, ZG);
      if (2 == SG) return function(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          SG = GG.charCategorizer(bG),
          LG = GG.doc.lineAt(bG),
          yG = bG - LG.from;
        if (0 == LG.length) return wG.j.cursor(bG);
        0 == yG ? ZG = 1 : yG == LG.length && (ZG = -1);
        let kG = yG,
          UG = yG;
        ZG < 0 ? kG = (0, wG.X)(LG.text, yG, !1) : UG = (0, wG.X)(LG.text, yG);
        let YG = SG(LG.text.slice(kG, UG));
        for (; kG > 0;) {
          let GG = (0, wG.X)(LG.text, kG, !1);
          if (SG(LG.text.slice(GG, kG)) != YG) break;
          kG = GG
        }
        for (; UG < LG.length;) {
          let GG = (0, wG.X)(LG.text, UG);
          if (SG(LG.text.slice(UG, GG)) != YG) break;
          UG = GG
        }
        return wG.j.range(kG + LG.from, UG + LG.from)
      }(GG.state, bG, ZG);
      {
        let SG = GG.docView.lineAt(bG, ZG),
          LG = GG.state.doc.lineAt(SG ? SG.posAtEnd : bG),
          yG = SG ? SG.posAtStart : LG.from,
          kG = SG ? SG.posAtEnd : LG.to;
        return kG < GG.state.doc.length && kG == LG.to && kG++, wG.j.range(yG, kG)
      }
    }
    Jw.scroll = GG => {
      GG.inputState.lastScrollTop = GG.scrollDOM.scrollTop, GG.inputState.lastScrollLeft = GG.scrollDOM.scrollLeft
    }, Jw.wheel = Jw.mousewheel = GG => {
      GG.inputState.lastWheelEvent = Date.now()
    }, dw.keydown = (GG, bG) => (GG.inputState.setSelectionOrigin("select"), 27 == bG.keyCode && 0 != GG.inputState.tabFocusMode && (GG.inputState.tabFocusMode = Date.now() + 2e3), !1), Jw.touchstart = (GG, bG) => {
      let ZG = GG.inputState,
        wG = bG.targetTouches[0];
      ZG.lastTouchTime = Date.now(), wG && (ZG.lastTouchX = wG.clientX, ZG.lastTouchY = wG.clientY), ZG.setSelectionOrigin("select.pointer")
    }, Jw.touchmove = GG => {
      GG.inputState.setSelectionOrigin("select.pointer")
    }, dw.mousedown = (GG, bG) => {
      if (GG.observer.flush(), GG.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let ZG = null;
      for (let wG of GG.state.facet(ab))
        if (ZG = wG(GG, bG), ZG) break;
      if (ZG || 0 != bG.button || (ZG = function(GG, bG) {
          let ZG = GG.posAndSideAtCoords({
              x: bG.clientX,
              y: bG.clientY
            }, !1),
            SG = Ww(bG),
            LG = GG.state.selection;
          return {
            update(GG) {
              GG.docChanged && (ZG.pos = GG.changes.mapPos(ZG.pos), LG = LG.map(GG.changes))
            },
            get(bG, yG, kG) {
              let UG, YG = GG.posAndSideAtCoords({
                  x: bG.clientX,
                  y: bG.clientY
                }, !1),
                VG = ow(GG, YG.pos, YG.assoc, SG);
              if (ZG.pos != YG.pos && !yG) {
                let bG = ow(GG, ZG.pos, ZG.assoc, SG),
                  LG = Math.min(bG.from, VG.from),
                  yG = Math.max(bG.to, VG.to);
                VG = LG < VG.from ? wG.j.range(LG, yG, VG.assoc) : wG.j.range(yG, LG, VG.assoc)
              }
              return yG ? LG.replaceRange(LG.main.extend(VG.from, VG.to, VG.assoc)) : kG && 1 == SG && LG.Bh.length > 1 && (UG = function(GG, bG) {
                for (let ZG = 0; ZG < GG.Bh.length; ZG++) {
                  let {
                    from: SG,
                    to: LG
                  } = GG.Bh[ZG];
                  if (SG <= bG && LG >= bG) return wG.j.create(GG.Bh.slice(0, ZG).concat(GG.Bh.slice(ZG + 1)), GG.mainIndex == ZG ? 0 : GG.mainIndex - (GG.mainIndex > ZG ? 1 : 0))
                }
                return null
              }(LG, YG.pos)) ? UG : kG ? LG.addRange(VG) : wG.j.create([VG])
            }
          }
        }(GG, bG)), ZG) {
        let wG = !GG.hasFocus;
        GG.inputState.startMouseSelection(new hw(GG, bG, ZG, wG)), wG && GG.observer.ignore((() => {
          Zb(GG.contentDOM);
          let bG = GG.root.activeElement;
          bG && !bG.contains(GG.contentDOM) && bG.blur()
        }));
        let SG = GG.inputState.mouseSelection;
        if (SG) return SG.start(bG), !1 === SG.dragging
      } else GG.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const Xw = uG.ie && uG.ie_version <= 11;
    let uw = null,
      iw = 0,
      Cw = 0;

    function Ww(GG) {
      if (!Xw) return GG.detail;
      let bG = uw,
        ZG = Cw;
      return uw = GG, Cw = Date.now(), iw = !bG || ZG > Date.now() - 400 && Math.abs(bG.clientX - GG.clientX) < 2 && Math.abs(bG.clientY - GG.clientY) < 2 ? (iw + 1) % 3 : 1
    }

    function mw(GG, bG, ZG, wG) {
      if (!(ZG = zw(GG.state, Mb, ZG))) return;
      let SG = GG.posAtCoords({
          x: bG.clientX,
          y: bG.clientY
        }, !1),
        {
          draggedContent: LG
        } = GG.inputState,
        yG = wG && LG && function(GG, bG) {
          let ZG = GG.state.facet(vb);
          return ZG.length ? ZG[0](bG) : uG.mac ? !bG.altKey : !bG.ctrlKey
        }(GG, bG) ? {
          from: LG.from,
          to: LG.to
        } : null,
        kG = {
          from: SG,
          insert: ZG
        },
        UG = GG.state.changes(yG ? [yG, kG] : kG);
      GG.focus(), GG.dispatch({
        changes: UG,
        selection: {
          anchor: UG.mapPos(SG, -1),
          head: UG.mapPos(SG, 1)
        },
        userEvent: yG ? "move.drop" : "input.drop"
      }), GG.inputState.draggedContent = null
    }
    dw.dragstart = (GG, bG) => {
      let {
        selection: {
          main: ZG
        }
      } = GG.state;
      if (bG.target.draggable) {
        let SG = GG.docView.tile.nearest(bG.target);
        if (SG && SG.isWidget()) {
          let GG = SG.posAtStart,
            bG = GG + SG.length;
          (GG >= ZG.to || bG <= ZG.from) && (ZG = wG.j.range(GG, bG))
        }
      }
      let {
        inputState: SG
      } = GG;
      return SG.mouseSelection && (SG.mouseSelection.dragging = !0), SG.draggedContent = ZG, bG.dataTransfer && (bG.dataTransfer.setData("Text", zw(GG.state, Ab, GG.state.sliceDoc(ZG.from, ZG.to))), bG.dataTransfer.effectAllowed = "copyMove"), !1
    }, dw.dragend = GG => (GG.inputState.draggedContent = null, !1), dw.drop = (GG, bG) => {
      if (!bG.dataTransfer) return !1;
      if (GG.state.readOnly) return !0;
      let ZG = bG.dataTransfer.files;
      if (ZG && ZG.length) {
        let wG = Array(ZG.length),
          SG = 0,
          LG = () => {
            ++SG == ZG.length && mw(GG, bG, wG.filter((GG => null != GG)).join(GG.state.lineBreak), !1)
          };
        for (let GG = 0; GG < ZG.length; GG++) {
          let bG = new FileReader;
          bG.onerror = LG, bG.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(bG.result) || (wG[GG] = bG.result), LG()
          }, bG.readAsText(ZG[GG])
        }
        return !0
      } {
        let ZG = bG.dataTransfer.getData("Text");
        if (ZG) return mw(GG, bG, ZG, !0), !0
      }
      return !1
    }, dw.paste = (GG, bG) => {
      if (GG.state.readOnly) return !0;
      GG.observer.flush();
      let ZG = rw ? null : bG.clipboardData;
      return ZG ? (Ew(GG, ZG.getData("text/plain") || ZG.getData("text/uri-list")), !0) : (function(GG) {
        let bG = GG.dom.parentNode;
        if (!bG) return;
        let ZG = bG.appendChild(document.createElement("textarea"));
        ZG.style.cssText = "position: fixed; left: -10000px; top: 10px", ZG.focus(), setTimeout((() => {
          GG.focus(), ZG.remove(), Ew(GG, ZG.value)
        }), 50)
      }(GG), !1)
    };
    let Iw = null;
    dw.copy = dw.cut = (GG, bG) => {
      if (!nG(GG.contentDOM, GG.observer.selectionRange)) return !1;
      let {
        text: ZG,
        Bh: wG,
        linewise: SG
      } = function(GG) {
        let bG = [],
          ZG = [],
          wG = !1;
        for (let SG of GG.selection.Bh) SG.empty || (bG.push(GG.sliceDoc(SG.from, SG.to)), ZG.push(SG));
        if (!bG.length) {
          let SG = -1;
          for (let {
              from: wG
            }
            of GG.selection.Bh) {
            let LG = GG.doc.lineAt(wG);
            LG.number > SG && (bG.push(LG.text), ZG.push({
              from: LG.from,
              to: Math.min(GG.doc.length, LG.to + 1)
            })), SG = LG.number
          }
          wG = !0
        }
        return {
          text: zw(GG, Ab, bG.join(GG.lineBreak)),
          Bh: ZG,
          linewise: wG
        }
      }(GG.state);
      if (!ZG && !SG) return !1;
      Iw = SG ? ZG : null, "cut" != bG.type || GG.state.readOnly || GG.dispatch({
        changes: wG,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let LG = rw ? null : bG.clipboardData;
      return LG ? (LG.clearData(), LG.setData("text/plain", ZG), !0) : (function(GG, bG) {
        let ZG = GG.dom.parentNode;
        if (!ZG) return;
        let wG = ZG.appendChild(document.createElement("textarea"));
        wG.style.cssText = "position: fixed; left: -10000px; top: 10px", wG.value = bG, wG.focus(), wG.selectionEnd = bG.length, wG.selectionStart = 0, setTimeout((() => {
          wG.remove(), GG.focus()
        }), 50)
      }(GG, ZG), !1)
    };
    const Fw = wG.c.define();

    function vw(GG, bG) {
      let ZG = [];
      for (let wG of GG.facet(Pb)) {
        let SG = wG(GG, bG);
        SG && ZG.push(SG)
      }
      return ZG.length ? GG.update({
        effects: ZG,
        annotations: Fw.of(!0)
      }) : null
    }

    function aw(GG) {
      setTimeout((() => {
        let bG = GG.hasFocus;
        if (bG != GG.inputState.notifiedFocused) {
          let ZG = vw(GG.state, bG);
          ZG ? GG.dispatch(ZG) : GG.update([])
        }
      }), 10)
    }
    Jw.focus = GG => {
      GG.inputState.lastFocusTime = Date.now(), GG.scrollDOM.scrollTop || !GG.inputState.lastScrollTop && !GG.inputState.lastScrollLeft || (GG.scrollDOM.scrollTop = GG.inputState.lastScrollTop, GG.scrollDOM.scrollLeft = GG.inputState.lastScrollLeft), aw(GG)
    }, Jw.blur = GG => {
      GG.observer.clearSelectionRange(), aw(GG)
    }, Jw.compositionstart = Jw.compositionupdate = GG => {
      GG.observer.editContext || (null == GG.inputState.compositionFirstChange && (GG.inputState.compositionFirstChange = !0), GG.inputState.composing < 0 && (GG.inputState.composing = 0))
    }, Jw.compositionend = GG => {
      GG.observer.editContext || (GG.inputState.composing = -1, GG.inputState.compositionEndedAt = Date.now(), GG.inputState.compositionPendingKey = !0, GG.inputState.compositionPendingChange = GG.observer.pendingRecords().length > 0, GG.inputState.compositionFirstChange = null, uG.chrome && uG.android ? GG.observer.flushSoon() : GG.inputState.compositionPendingChange ? Promise.resolve().then((() => GG.observer.flush())) : setTimeout((() => {
        GG.inputState.composing < 0 && GG.docView.hasComposition && GG.update([])
      }), 50))
    }, Jw.contextmenu = GG => {
      GG.inputState.lastContextMenu = Date.now()
    }, dw.beforeinput = (GG, bG) => {
      var ZG, wG;
      if ("insertText" != bG.inputType && "insertCompositionText" != bG.inputType || (GG.inputState.insertingText = bG.data, GG.inputState.insertingTextAt = Date.now()), "insertReplacementText" == bG.inputType && GG.observer.editContext) {
        let wG = null === (ZG = bG.dataTransfer) || void 0 === ZG ? void 0 : ZG.getData("text/plain"),
          SG = bG.getTargetRanges();
        if (wG && SG.length) {
          let bG = SG[0],
            ZG = GG.posAtDOM(bG.startContainer, bG.startOffset),
            LG = GG.posAtDOM(bG.endContainer, bG.endOffset);
          return Lw(GG, {
            from: ZG,
            to: LG,
            insert: GG.state.toText(wG)
          }, null), !0
        }
      }
      let SG;
      if (uG.chrome && uG.android && (SG = pw.find((GG => GG.inputType == bG.inputType))) && (GG.observer.delayAndroidKey(SG.key, SG.keyCode), "Backspace" == SG.key || "Delete" == SG.key)) {
        let bG = (null === (wG = window.visualViewport) || void 0 === wG ? void 0 : wG.height) || 0;
        setTimeout((() => {
          var ZG;
          ((null === (ZG = window.visualViewport) || void 0 === ZG ? void 0 : ZG.height) || 0) > bG + 10 && GG.hasFocus && (GG.contentDOM.blur(), GG.focus())
        }), 100)
      }
      return uG.ios && "deleteContentForward" == bG.inputType && GG.observer.flushSoon(), uG.safari && "insertText" == bG.inputType && GG.inputState.composing >= 0 && setTimeout((() => Jw.compositionend(GG, bG)), 20), !1
    };
    const lw = new Set;
    const jw = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let Pw = !1;

    function Mw() {
      Pw = !1
    }
    class Aw {
      constructor(GG) {
        this.lineWrapping = GG, this.doc = wG.I.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(GG, bG) {
        let ZG = this.doc.lineAt(bG).number - this.doc.lineAt(GG).number + 1;
        return this.lineWrapping && (ZG += Math.max(0, Math.ceil((bG - GG - ZG * this.lineLength * .5) / this.lineLength))), this.lineHeight * ZG
      }
      heightForLine(GG) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((GG - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(GG) {
        return this.doc = GG, this
      }
      mustRefreshForWrapping(GG) {
        return jw.indexOf(GG) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(GG) {
        let bG = !1;
        for (let ZG = 0; ZG < GG.length; ZG++) {
          let wG = GG[ZG];
          wG < 0 ? ZG++ : this.heightSamples[Math.floor(10 * wG)] || (bG = !0, this.heightSamples[Math.floor(10 * wG)] = !0)
        }
        return bG
      }
      refresh(GG, bG, ZG, wG, SG, LG) {
        let yG = jw.indexOf(GG) > -1,
          kG = Math.abs(bG - this.lineHeight) > .3 || this.lineWrapping != yG || Math.abs(ZG - this.charWidth) > .1;
        if (this.lineWrapping = yG, this.lineHeight = bG, this.charWidth = ZG, this.textHeight = wG, this.lineLength = SG, kG) {
          this.heightSamples = {};
          for (let GG = 0; GG < LG.length; GG++) {
            let bG = LG[GG];
            bG < 0 ? GG++ : this.heightSamples[Math.floor(10 * bG)] = !0
          }
        }
        return kG
      }
    }
    class sw {
      constructor(GG, bG) {
        this.from = GG, this.heights = bG, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class qw {
      constructor(GG, bG, ZG, wG, SG) {
        this.from = GG, this.length = bG, this.top = ZG, this.height = wG, this._content = SG
      }
      get type() {
        return "number" == typeof this._content ? vG.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof jG ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(GG) {
        let bG = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(GG._content) ? GG._content : [GG]);
        return new qw(this.from, this.length + GG.length, this.top, this.height + GG.height, bG)
      }
    }
    var nw = function(GG) {
      return GG[GG.ByPos = 0] = "ByPos", GG[GG.ByHeight = 1] = "ByHeight", GG[GG.ByPosNoHeight = 2] = "ByPosNoHeight", GG
    }(nw || (nw = {}));
    const gw = .001;
    class ew {
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = GG, this.height = bG, this.flags = ZG
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(GG) {
        this.flags = (GG ? 2 : 0) | -3 & this.flags
      }
      setHeight(GG) {
        this.height != GG && (Math.abs(this.height - GG) > gw && (Pw = !0), this.height = GG)
      }
      replace(GG, bG, ZG) {
        return ew.of(ZG)
      }
      decomposeLeft(GG, bG) {
        bG.push(this)
      }
      decomposeRight(GG, bG) {
        bG.push(this)
      }
      applyChanges(GG, bG, ZG, wG) {
        let SG = this,
          LG = ZG.doc;
        for (let yG = wG.length - 1; yG >= 0; yG--) {
          let {
            fromA: kG,
            toA: UG,
            fromB: YG,
            toB: VG
          } = wG[yG], pG = SG.lineAt(kG, nw.ByPosNoHeight, ZG.setDoc(bG), 0, 0), fG = pG.to >= UG ? pG : SG.lineAt(UG, nw.ByPosNoHeight, ZG, 0, 0);
          for (VG += fG.to - UG, UG = fG.to; yG > 0 && pG.from <= wG[yG - 1].toA;) kG = wG[yG - 1].fromA, YG = wG[yG - 1].fromB, yG--, kG < pG.from && (pG = SG.lineAt(kG, nw.ByPosNoHeight, ZG, 0, 0));
          YG += pG.from - kG, kG = pG.from;
          let QG = xw.build(ZG.setDoc(LG), GG, YG, VG);
          SG = Rw(SG, SG.replace(kG, UG, QG))
        }
        return SG.updateHeight(ZG, 0)
      }
      static empty() {
        return new tw(0, 0, 0)
      }
      static of (GG) {
        if (1 == GG.length) return GG[0];
        let bG = 0,
          ZG = GG.length,
          wG = 0,
          SG = 0;
        for (;;)
          if (bG == ZG)
            if (wG > 2 * SG) {
              let SG = GG[bG - 1];
              SG.break ? GG.splice(--bG, 1, SG.left, null, SG.right) : GG.splice(--bG, 1, SG.left, SG.right), ZG += 1 + SG.break, wG -= SG.size
            } else {
              if (!(SG > 2 * wG)) break;
              {
                let bG = GG[ZG];
                bG.break ? GG.splice(ZG, 1, bG.left, null, bG.right) : GG.splice(ZG, 1, bG.left, bG.right), ZG += 2 + bG.break, SG -= bG.size
              }
            }
        else if (wG < SG) {
          let ZG = GG[bG++];
          ZG && (wG += ZG.size)
        } else {
          let bG = GG[--ZG];
          bG && (SG += bG.size)
        }
        let LG = 0;
        return null == GG[bG - 1] ? (LG = 1, bG--) : null == GG[bG] && (LG = 1, ZG++), new Nw(ew.of(GG.slice(0, bG)), LG, ew.of(GG.slice(ZG)))
      }
    }

    function Rw(GG, bG) {
      return GG == bG ? GG : (GG.constructor != bG.constructor && (Pw = !0), bG)
    }
    ew.prototype.size = 1;
    const Tw = aG.replace({});
    class Hw extends ew {
      constructor(GG, bG, ZG) {
        super(GG, bG), this.deco = ZG, this.spaceAbove = 0
      }
      mainBlock(GG, bG) {
        return new qw(bG, this.length, GG + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(GG, bG, ZG, wG) {
        return this.spaceAbove && GG < ZG + this.spaceAbove ? new qw(wG, 0, ZG, this.spaceAbove, Tw) : this.mainBlock(ZG, wG)
      }
      lineAt(GG, bG, ZG, wG, SG) {
        let LG = this.mainBlock(wG, SG);
        return this.spaceAbove ? this.blockAt(0, ZG, wG, SG).join(LG) : LG
      }
      forEachLine(GG, bG, ZG, wG, SG, LG) {
        GG <= SG + this.length && bG >= SG && LG(this.lineAt(0, nw.ByPos, ZG, wG, SG))
      }
      setMeasuredHeight(GG) {
        let bG = GG.heights[GG.index++];
        bG < 0 ? (this.spaceAbove = -bG, bG = GG.heights[GG.index++]) : this.spaceAbove = 0, this.setHeight(bG)
      }
      updateHeight(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZG = arguments.length > 3 ? arguments[3] : void 0;
        return ZG && ZG.from <= bG && ZG.more && this.setMeasuredHeight(ZG), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class tw extends Hw {
      constructor(GG, bG, ZG) {
        super(GG, bG, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = ZG
      }
      mainBlock(GG, bG) {
        return new qw(bG, this.length, GG + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(GG, bG, ZG) {
        let wG = ZG[0];
        return 1 == ZG.length && (wG instanceof tw || wG instanceof Dw && 4 & wG.flags) && Math.abs(this.length - wG.length) < 10 ? (wG instanceof Dw ? wG = new tw(wG.length, this.height, this.spaceAbove) : wG.height = this.height, this.outdated || (wG.outdated = !1), wG) : ew.of(ZG)
      }
      updateHeight(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wG = arguments.length > 3 ? arguments[3] : void 0;
        return wG && wG.from <= bG && wG.more ? this.setMeasuredHeight(wG) : (ZG || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, GG.heightForLine(this.length - this.collapsed)) + this.breaks * GG.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class Dw extends ew {
      constructor(GG) {
        super(GG, 0)
      }
      heightMetrics(GG, bG) {
        let ZG, wG = GG.doc.lineAt(bG).number,
          SG = GG.doc.lineAt(bG + this.length).number,
          LG = SG - wG + 1,
          yG = 0;
        if (GG.lineWrapping) {
          let bG = Math.min(this.height, GG.lineHeight * LG);
          ZG = bG / LG, this.length > LG + 1 && (yG = (this.height - bG) / (this.length - LG - 1))
        } else ZG = this.height / LG;
        return {
          firstLine: wG,
          lastLine: SG,
          perLine: ZG,
          perChar: yG
        }
      }
      blockAt(GG, bG, ZG, wG) {
        let {
          firstLine: SG,
          lastLine: LG,
          perLine: yG,
          perChar: kG
        } = this.heightMetrics(bG, wG);
        if (bG.lineWrapping) {
          let SG = wG + (GG < bG.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (GG - ZG) / this.height)) * this.length)),
            LG = bG.doc.lineAt(SG),
            UG = yG + LG.length * kG,
            YG = Math.max(ZG, GG - UG / 2);
          return new qw(LG.from, LG.length, YG, UG, 0)
        } {
          let wG = Math.max(0, Math.min(LG - SG, Math.floor((GG - ZG) / yG))),
            {
              from: kG,
              length: UG
            } = bG.doc.line(SG + wG);
          return new qw(kG, UG, ZG + yG * wG, yG, 0)
        }
      }
      lineAt(GG, bG, ZG, wG, SG) {
        if (bG == nw.ByHeight) return this.blockAt(GG, ZG, wG, SG);
        if (bG == nw.ByPosNoHeight) {
          let {
            from: bG,
            to: wG
          } = ZG.doc.lineAt(GG);
          return new qw(bG, wG - bG, 0, 0, 0)
        }
        let {
          firstLine: LG,
          perLine: yG,
          perChar: kG
        } = this.heightMetrics(ZG, SG), UG = ZG.doc.lineAt(GG), YG = yG + UG.length * kG, VG = UG.number - LG, pG = wG + yG * VG + kG * (UG.from - SG - VG);
        return new qw(UG.from, UG.length, Math.max(wG, Math.min(pG, wG + this.height - YG)), YG, 0)
      }
      forEachLine(GG, bG, ZG, wG, SG, LG) {
        GG = Math.max(GG, SG), bG = Math.min(bG, SG + this.length);
        let {
          firstLine: yG,
          perLine: kG,
          perChar: UG
        } = this.heightMetrics(ZG, SG);
        for (let YG = GG, VG = wG; YG <= bG;) {
          let bG = ZG.doc.lineAt(YG);
          if (YG == GG) {
            let ZG = bG.number - yG;
            VG += kG * ZG + UG * (GG - SG - ZG)
          }
          let wG = kG + UG * bG.length;
          LG(new qw(bG.from, bG.length, VG, wG, 0)), VG += wG, YG = bG.to + 1
        }
      }
      replace(GG, bG, ZG) {
        let wG = this.length - bG;
        if (wG > 0) {
          let GG = ZG[ZG.length - 1];
          GG instanceof Dw ? ZG[ZG.length - 1] = new Dw(GG.length + wG) : ZG.push(null, new Dw(wG - 1))
        }
        if (GG > 0) {
          let bG = ZG[0];
          bG instanceof Dw ? ZG[0] = new Dw(GG + bG.length) : ZG.unshift(new Dw(GG - 1), null)
        }
        return ew.of(ZG)
      }
      decomposeLeft(GG, bG) {
        bG.push(new Dw(GG - 1), null)
      }
      decomposeRight(GG, bG) {
        bG.push(null, new Dw(this.length - GG - 1))
      }
      updateHeight(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wG = arguments.length > 3 ? arguments[3] : void 0,
          SG = bG + this.length;
        if (wG && wG.from <= bG + this.length && wG.more) {
          let ZG = [],
            LG = Math.max(bG, wG.from),
            yG = -1;
          for (wG.from > bG && ZG.push(new Dw(wG.from - bG - 1).updateHeight(GG, bG)); LG <= SG && wG.more;) {
            let bG = GG.doc.lineAt(LG).length;
            ZG.length && ZG.push(null);
            let SG = wG.heights[wG.index++],
              kG = 0;
            SG < 0 && (kG = -SG, SG = wG.heights[wG.index++]), -1 == yG ? yG = SG : Math.abs(SG - yG) >= gw && (yG = -2);
            let UG = new tw(bG, SG, kG);
            UG.outdated = !1, ZG.push(UG), LG += bG + 1
          }
          LG <= SG && ZG.push(null, new Dw(SG - LG).updateHeight(GG, LG));
          let kG = ew.of(ZG);
          return (yG < 0 || Math.abs(kG.height - this.height) >= gw || Math.abs(yG - this.heightMetrics(GG, bG).perLine) >= gw) && (Pw = !0), Rw(this, kG)
        }
        return (ZG || this.outdated) && (this.setHeight(GG.heightForGap(bG, bG + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class Nw extends ew {
      constructor(GG, bG, ZG) {
        super(GG.length + bG + ZG.length, GG.height + ZG.height, bG | (GG.outdated || ZG.outdated ? 2 : 0)), this.left = GG, this.right = ZG, this.size = GG.size + ZG.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(GG, bG, ZG, wG) {
        let SG = ZG + this.left.height;
        return GG < SG ? this.left.blockAt(GG, bG, ZG, wG) : this.right.blockAt(GG, bG, SG, wG + this.left.length + this.break)
      }
      lineAt(GG, bG, ZG, wG, SG) {
        let LG = wG + this.left.height,
          yG = SG + this.left.length + this.break,
          kG = bG == nw.ByHeight ? GG < LG : GG < yG,
          UG = kG ? this.left.lineAt(GG, bG, ZG, wG, SG) : this.right.lineAt(GG, bG, ZG, LG, yG);
        if (this.break || (kG ? UG.to < yG : UG.from > yG)) return UG;
        let YG = bG == nw.ByPosNoHeight ? nw.ByPosNoHeight : nw.ByPos;
        return kG ? UG.join(this.right.lineAt(yG, YG, ZG, LG, yG)) : this.left.lineAt(yG, YG, ZG, wG, SG).join(UG)
      }
      forEachLine(GG, bG, ZG, wG, SG, LG) {
        let yG = wG + this.left.height,
          kG = SG + this.left.length + this.break;
        if (this.break) GG < kG && this.left.forEachLine(GG, bG, ZG, wG, SG, LG), bG >= kG && this.right.forEachLine(GG, bG, ZG, yG, kG, LG);
        else {
          let UG = this.lineAt(kG, nw.ByPos, ZG, wG, SG);
          GG < UG.from && this.left.forEachLine(GG, UG.from - 1, ZG, wG, SG, LG), UG.to >= GG && UG.from <= bG && LG(UG), bG > UG.to && this.right.forEachLine(UG.to + 1, bG, ZG, yG, kG, LG)
        }
      }
      replace(GG, bG, ZG) {
        let wG = this.left.length + this.break;
        if (bG < wG) return this.balanced(this.left.replace(GG, bG, ZG), this.right);
        if (GG > this.left.length) return this.balanced(this.left, this.right.replace(GG - wG, bG - wG, ZG));
        let SG = [];
        GG > 0 && this.decomposeLeft(GG, SG);
        let LG = SG.length;
        for (let yG of ZG) SG.push(yG);
        if (GG > 0 && Ow(SG, LG - 1), bG < this.length) {
          let GG = SG.length;
          this.decomposeRight(bG, SG), Ow(SG, GG)
        }
        return ew.of(SG)
      }
      decomposeLeft(GG, bG) {
        let ZG = this.left.length;
        if (GG <= ZG) return this.left.decomposeLeft(GG, bG);
        bG.push(this.left), this.break && (ZG++, GG >= ZG && bG.push(null)), GG > ZG && this.right.decomposeLeft(GG - ZG, bG)
      }
      decomposeRight(GG, bG) {
        let ZG = this.left.length,
          wG = ZG + this.break;
        if (GG >= wG) return this.right.decomposeRight(GG - wG, bG);
        GG < ZG && this.left.decomposeRight(GG, bG), this.break && GG < wG && bG.push(null), bG.push(this.right)
      }
      balanced(GG, bG) {
        return GG.size > 2 * bG.size || bG.size > 2 * GG.size ? ew.of(this.break ? [GG, null, bG] : [GG, bG]) : (this.left = Rw(this.left, GG), this.right = Rw(this.right, bG), this.setHeight(GG.height + bG.height), this.outdated = GG.outdated || bG.outdated, this.size = GG.size + bG.size, this.length = GG.length + this.break+bG.length, this)
      }
      updateHeight(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wG = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: SG,
            right: LG
          } = this,
          yG = bG + SG.length + this.break,
          kG = null;
        return wG && wG.from <= bG + SG.length && wG.more ? kG = SG = SG.updateHeight(GG, bG, ZG, wG) : SG.updateHeight(GG, bG, ZG), wG && wG.from <= yG + LG.length && wG.more ? kG = LG = LG.updateHeight(GG, yG, ZG, wG) : LG.updateHeight(GG, yG, ZG), kG ? this.balanced(SG, LG) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function Ow(GG, bG) {
      let ZG, wG;
      null == GG[bG] && (ZG = GG[bG - 1]) instanceof Dw && (wG = GG[bG + 1]) instanceof Dw && GG.splice(bG - 1, 3, new Dw(ZG.length + 1 + wG.length))
    }
    class xw {
      constructor(GG, bG) {
        this.pos = GG, this.oracle = bG, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = GG
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(GG, bG) {
        if (this.lineStart > -1) {
          let GG = Math.min(bG, this.lineEnd),
            ZG = this.nodes[this.nodes.length - 1];
          ZG instanceof tw ? ZG.length += GG - this.pos : (GG > this.pos || !this.isCovered) && this.nodes.push(new tw(GG - this.pos, -1, 0)), this.writtenTo = GG, bG > GG && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = bG
      }
      point(GG, bG, ZG) {
        if (GG < bG || ZG.heightRelevant) {
          let wG = ZG.widget ? ZG.widget.estimatedHeight : 0,
            SG = ZG.widget ? ZG.widget.lineBreaks : 0;
          wG < 0 && (wG = this.oracle.lineHeight);
          let LG = bG - GG;
          ZG.block ? this.FbG(new Hw(LG, wG, ZG)) : (LG || SG || wG >= 5) && this.addLineDeco(wG, SG, LG)
        } else bG > GG && this.span(GG, bG);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: GG,
          to: bG
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = GG, this.lineEnd = bG, this.writtenTo < GG && ((this.writtenTo < GG - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, GG - 1)), this.nodes.push(null)), this.pos > GG && this.nodes.push(new tw(this.pos - GG, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(GG, bG) {
        let ZG = new Dw(bG - GG);
        return this.oracle.doc.lineAt(GG).to == bG && (ZG.flags |= 4), ZG
      }
      ensureLine() {
        this.enterLine();
        let GG = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (GG instanceof tw) return GG;
        let bG = new tw(0, -1, 0);
        return this.nodes.push(bG), bG
      }
      FbG(GG) {
        this.enterLine();
        let bG = GG.deco;
        bG && bG.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(GG), this.writtenTo = this.pos = this.pos + GG.length, bG && bG.endSide > 0 && (this.covering = GG)
      }
      addLineDeco(GG, bG, ZG) {
        let wG = this.ensureLine();
        wG.length += ZG, wG.collapsed += ZG, wG.widgetHeight = Math.max(wG.widgetHeight, GG), wG.breaks += bG, this.writtenTo = this.pos = this.pos + ZG
      }
      finish(GG) {
        let bG = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || bG instanceof tw || this.isCovered ? (this.writtenTo < this.pos || null == bG) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new tw(0, -1, 0));
        let ZG = GG;
        for (let wG of this.nodes) wG instanceof tw && wG.updateHeight(this.oracle, ZG), ZG += wG ? wG.length : 1;
        return this.nodes
      }
      static build(GG, bG, ZG, SG) {
        let LG = new xw(ZG, GG);
        return wG.x.spans(bG, ZG, SG, LG, 0), LG.finish(ZG)
      }
    }
    class Bw {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(GG, bG, ZG, wG) {
        (GG < bG || ZG && ZG.heightRelevant || wG && wG.heightRelevant) && MG(GG, bG, this.changes, 5)
      }
    }

    function GS(GG, bG) {
      let ZG = GG.getBoundingClientRect(),
        wG = GG.ownerDocument,
        SG = wG.defaultView || window,
        LG = Math.max(0, ZG.left),
        yG = Math.min(SG.innerWidth, ZG.right),
        kG = Math.max(0, ZG.top),
        UG = Math.min(SG.innerHeight, ZG.bottom);
      for (let YG = GG.parentNode; YG && YG != wG.body;)
        if (1 == YG.nodeType) {
          let bG = YG,
            ZG = window.getComputedStyle(bG);
          if ((bG.scrollHeight > bG.clientHeight || bG.scrollWidth > bG.clientWidth) && "visible" != ZG.overflow) {
            let ZG = bG.getBoundingClientRect();
            LG = Math.max(LG, ZG.left), yG = Math.min(yG, ZG.right), kG = Math.max(kG, ZG.top), UG = Math.min(YG == GG.parentNode ? SG.innerHeight : UG, ZG.bottom)
          }
          YG = "absolute" == ZG.position || "fixed" == ZG.position ? bG.offsetParent : bG.parentNode
        } else {
          if (11 != YG.nodeType) break;
          YG = YG.host
        } return {
        left: LG - ZG.left,
        right: Math.max(LG, yG) - ZG.left,
        top: kG - (ZG.top + bG),
        bottom: Math.max(kG, UG) - (ZG.top + bG)
      }
    }

    function bS(GG, bG) {
      let ZG = GG.getBoundingClientRect();
      return {
        left: 0,
        right: ZG.right - ZG.left,
        top: bG,
        bottom: ZG.bottom - (ZG.top + bG)
      }
    }
    class ZS {
      constructor(GG, bG, ZG, wG) {
        this.from = GG, this.to = bG, this.size = ZG, this.displaySize = wG
      }
      static same(GG, bG) {
        if (GG.length != bG.length) return !1;
        for (let ZG = 0; ZG < GG.length; ZG++) {
          let wG = GG[ZG],
            SG = bG[ZG];
          if (wG.from != SG.from || wG.to != SG.to || wG.size != SG.size) return !1
        }
        return !0
      }
      draw(GG, bG) {
        return aG.replace({
          widget: new wS(this.displaySize * (bG ? GG.scaleY : GG.scaleX), bG)
        }).range(this.from, this.to)
      }
    }
    class wS extends FG {
      constructor(GG, bG) {
        super(), this.size = GG, this.vertical = bG
      }
      eq(GG) {
        return GG.size == this.size && GG.vertical == this.vertical
      }
      toDOM() {
        let GG = document.createElement("div");
        return this.vertical ? GG.style.height = this.size + "px" : (GG.style.width = this.size + "px", GG.style.height = "2px", GG.style.display = "inline-block"), GG
      }
      get estimatedHeight() {
        return this.vertical ? this.size : -1
      }
    }
    class SS {
      constructor(GG, bG) {
        this.view = GG, this.state = bG, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = US, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = Yb.LTR, this.SGG = [], this.mustEnforceCursorAssoc = !1;
        let ZG = bG.facet(Bb).some((GG => "function" != typeof GG && "cm-lineWrapping" == GG.class));
        this.heightOracle = new Aw(ZG), this.stateDeco = YS(bG), this.heightMap = ew.empty().applyChanges(this.stateDeco, wG.I.empty, this.heightOracle.setDoc(bG.doc), [new YZ(0, 0, 0, bG.doc.length)]);
        for (let wG = 0; wG < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); wG++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = aG.set(this.lineGaps.map((GG => GG.draw(this, !1)))), this.scrollParent = GG.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let GG = [this.viewport],
          {
            main: bG
          } = this.state.selection;
        for (let ZG = 0; ZG <= 1; ZG++) {
          let wG = ZG ? bG.head : bG.anchor;
          if (!GG.some((GG => {
              let {
                from: bG,
                to: ZG
              } = GG;
              return wG >= bG && wG <= ZG
            }))) {
            let {
              from: bG,
              to: ZG
            } = this.lineBlockAt(wG);
            GG.push(new LS(bG, ZG))
          }
        }
        return this.viewports = GG.sort(((GG, bG) => GG.from - bG.from)), this.updateScaler()
      }
      updateScaler() {
        let GG = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? US : new VS(this.heightOracle, this.heightMap, this.viewports), GG.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (GG => {
          this.viewportLines.push(pS(GG, this.scaler))
        }))
      }
      update(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = GG.state;
        let ZG = this.stateDeco;
        this.stateDeco = YS(this.state);
        let SG = GG.changedRanges,
          LG = YZ.extendWithRanges(SG, function(GG, bG, ZG) {
            let SG = new Bw;
            return wG.x.compare(GG, bG, ZG, SG, 0), SG.changes
          }(ZG, this.stateDeco, GG ? GG.changes : wG.ChangeSet.empty(this.state.doc.length))),
          yG = this.heightMap.height,
          kG = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        Mw(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, GG.startState.doc, this.heightOracle.setDoc(this.state.doc), LG), (this.heightMap.height != yG || Pw) && (GG.flags |= 2), kG ? (this.scrollAnchorPos = GG.changes.mapPos(kG.from, -1), this.scrollAnchorHeight = kG.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = yG);
        let UG = LG.length ? this.mapViewport(this.viewport, GG.changes) : this.viewport;
        (bG && (bG.range.head < UG.from || bG.range.head > UG.to) || !this.viewportIsAppropriate(UG)) && (UG = this.getViewport(0, bG));
        let YG = UG.from != this.viewport.from || UG.to != this.viewport.to;
        this.viewport = UG, GG.flags |= this.updateForViewport(), (YG || !GG.changes.empty || 2 & GG.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, GG.changes))), GG.flags |= this.computeVisibleRanges(GG.changes), bG && (this.scrollTarget = bG), !this.mustEnforceCursorAssoc && (GG.selectionSet || GG.focusChanged) && GG.view.lineWrapping && GG.state.selection.main.empty && GG.state.selection.main.assoc && !GG.state.facet(qb) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: GG
        } = this, bG = GG.contentDOM, ZG = window.getComputedStyle(bG), SG = this.heightOracle, LG = ZG.whiteSpace;
        this.defaultTextDirection = "rtl" == ZG.direction ? Yb.RTL : Yb.LTR;
        let yG = this.heightOracle.mustRefreshForWrapping(LG) || "refresh" === this.mustMeasureContent,
          kG = bG.getBoundingClientRect(),
          UG = yG || this.mustMeasureContent || this.contentDOMHeight != kG.height;
        this.contentDOMHeight = kG.height, this.mustMeasureContent = !1;
        let YG = 0,
          VG = 0;
        if (kG.width && kG.height) {
          let {
            scaleX: GG,
            scaleY: ZG
          } = OG(bG, kG);
          (GG > .005 && Math.abs(this.scaleX - GG) > .005 || ZG > .005 && Math.abs(this.scaleY - ZG) > .005) && (this.scaleX = GG, this.scaleY = ZG, YG |= 16, yG = UG = !0)
        }
        let pG = (parseInt(ZG.paddingTop) || 0) * this.scaleY,
          fG = (parseInt(ZG.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == pG && this.paddingBottom == fG || (this.paddingTop = pG, this.paddingBottom = fG, YG |= 18), this.editorWidth != GG.scrollDOM.clientWidth && (SG.lineWrapping && (UG = !0), this.editorWidth = GG.scrollDOM.clientWidth, YG |= 16);
        let QG = xG(this.view.contentDOM, !1).y;
        QG != this.scrollParent && (this.scrollParent = QG, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let KG = this.getScrollOffset();
        this.scrollOffset != KG && (this.scrollAnchorHeight = -1, this.scrollOffset = KG), this.scrolledToBottom = Lb(this.scrollParent || GG.win);
        let hG = (this.printing ? bS : GS)(bG, this.paddingTop),
          dG = hG.top - this.pixelViewport.top,
          JG = hG.bottom - this.pixelViewport.bottom;
        this.pixelViewport = hG;
        let rG = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (rG != this.inView && (this.inView = rG, rG && (UG = !0)), !this.inView && !this.scrollTarget && ! function(GG) {
            let bG = GG.getBoundingClientRect(),
              ZG = GG.ownerDocument.defaultView || window;
            return bG.left < ZG.innerWidth && bG.right > 0 && bG.top < ZG.innerHeight && bG.bottom > 0
          }(GG.dom)) return 0;
        let zG = kG.width;
        if (this.contentDOMWidth == zG && this.editorHeight == GG.scrollDOM.clientHeight || (this.contentDOMWidth = kG.width, this.editorHeight = GG.scrollDOM.clientHeight, YG |= 16), UG) {
          let bG = GG.docView.measureVisibleLineHeights(this.viewport);
          if (SG.mustRefreshForHeights(bG) && (yG = !0), yG || SG.lineWrapping && Math.abs(zG - this.contentDOMWidth) > SG.charWidth) {
            let {
              lineHeight: ZG,
              charWidth: wG,
              textHeight: kG
            } = GG.docView.measureTextSize();
            yG = ZG > 0 && SG.refresh(LG, ZG, wG, kG, Math.max(5, zG / wG), bG), yG && (GG.docView.minWidth = 0, YG |= 16)
          }
          dG > 0 && JG > 0 ? VG = Math.max(dG, JG) : dG < 0 && JG < 0 && (VG = Math.min(dG, JG)), Mw();
          for (let ZG of this.viewports) {
            let LG = ZG.from == this.viewport.from ? bG : GG.docView.measureVisibleLineHeights(ZG);
            this.heightMap = (yG ? ew.empty().applyChanges(this.stateDeco, wG.I.empty, this.heightOracle, [new YZ(0, 0, 0, GG.state.doc.length)]) : this.heightMap).updateHeight(SG, 0, yG, new sw(ZG.from, LG))
          }
          Pw && (YG |= 2)
        }
        let EG = !this.viewportIsAppropriate(this.viewport, VG) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return EG && (2 & YG && (YG |= this.updateScaler()), this.viewport = this.getViewport(VG, this.scrollTarget), YG |= this.updateForViewport()), (2 & YG || EG) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(yG ? [] : this.lineGaps, GG)), YG |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, GG.docView.enforceCursorAssoc()), YG
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(GG, bG) {
        let ZG = .5 - Math.max(-.5, Math.min(.5, GG / 1e3 / 2)),
          wG = this.heightMap,
          SG = this.heightOracle,
          {
            visibleTop: LG,
            visibleBottom: yG
          } = this,
          kG = new LS(wG.lineAt(LG - 1e3 * ZG, nw.ByHeight, SG, 0, 0).from, wG.lineAt(yG + 1e3 * (1 - ZG), nw.ByHeight, SG, 0, 0).to);
        if (bG) {
          let {
            head: GG
          } = bG.range;
          if (GG < kG.from || GG > kG.to) {
            let ZG, LG = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              yG = wG.lineAt(GG, nw.ByPos, SG, 0, 0);
            ZG = "center" == bG.y ? (yG.top + yG.bottom) / 2 - LG / 2 : "start" == bG.y || "nearest" == bG.y && GG < kG.from ? yG.top : yG.bottom - LG, kG = new LS(wG.lineAt(ZG - 500, nw.ByHeight, SG, 0, 0).from, wG.lineAt(ZG + LG + 500, nw.ByHeight, SG, 0, 0).to)
          }
        }
        return kG
      }
      mapViewport(GG, bG) {
        let ZG = bG.mapPos(GG.from, -1),
          wG = bG.mapPos(GG.to, 1);
        return new LS(this.heightMap.lineAt(ZG, nw.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(wG, nw.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(GG) {
        let {
          from: bG,
          to: ZG
        } = GG, wG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: SG
        } = this.heightMap.lineAt(bG, nw.ByPos, this.heightOracle, 0, 0), {
          bottom: LG
        } = this.heightMap.lineAt(ZG, nw.ByPos, this.heightOracle, 0, 0), {
          visibleTop: yG,
          visibleBottom: kG
        } = this;
        return (0 == bG || SG <= yG - Math.max(10, Math.min(-wG, 250))) && (ZG == this.state.doc.length || LG >= kG + Math.max(10, Math.min(wG, 250))) && SG > yG - 2e3 && LG < kG + 2e3
      }
      mapLineGaps(GG, bG) {
        if (!GG.length || bG.empty) return GG;
        let ZG = [];
        for (let wG of GG) bG.touchesRange(wG.from, wG.to) || ZG.push(new ZS(bG.mapPos(wG.from), bG.mapPos(wG.to), wG.size, wG.displaySize));
        return ZG
      }
      ensureLineGaps(GG, bG) {
        let ZG = this.heightOracle.lineWrapping,
          SG = ZG ? 1e4 : 2e3,
          LG = SG >> 1,
          yG = SG << 1;
        if (this.defaultTextDirection != Yb.LTR && !ZG) return [];
        let kG = [],
          UG = (SG, yG, YG, VG) => {
            if (yG - SG < LG) return;
            let pG = this.state.selection.main,
              fG = [pG.from];
            pG.empty || fG.push(pG.to);
            for (let GG of fG)
              if (GG > SG && GG < yG) return UG(SG, GG - 10, YG, VG), void UG(GG + 10, yG, YG, VG);
            let QG = function(GG, bG) {
              for (let ZG of GG)
                if (bG(ZG)) return ZG;
              return
            }(GG, (GG => GG.from >= YG.from && GG.to <= YG.to && Math.abs(GG.from - SG) < LG && Math.abs(GG.to - yG) < LG && !fG.some((bG => GG.from < bG && GG.to > bG))));
            if (!QG) {
              if (yG < YG.to && bG && ZG && bG.SGG.some((GG => GG.from <= yG && GG.to >= yG))) {
                let GG = bG.moveToLineBoundary(wG.j.cursor(yG), !1, !0).head;
                GG > SG && (yG = GG)
              }
              let GG = this.gapSize(YG, SG, yG, VG);
              QG = new ZS(SG, yG, GG, ZG || GG < 2e6 ? GG : 2e6)
            }
            kG.push(QG)
          },
          YG = bG => {
            if (bG.length < yG || bG.type != vG.Text) return;
            let LG = function(GG, bG, ZG) {
              let SG = [],
                LG = GG,
                yG = 0;
              wG.x.spans(ZG, GG, bG, {
                span() {},
                point(GG, bG) {
                  GG > LG && (SG.push({
                    from: LG,
                    to: GG
                  }), yG += GG - LG), LG = bG
                }
              }, 20), LG < bG && (SG.push({
                from: LG,
                to: bG
              }), yG += bG - LG);
              return {
                total: yG,
                Bh: SG
              }
            }(bG.from, bG.to, this.stateDeco);
            if (LG.total < yG) return;
            let kG, YG, VG = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (ZG) {
              let GG, ZG, wG = SG / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != VG) {
                let SG = kS(LG, VG),
                  yG = ((this.visibleBottom - this.visibleTop) / 2 + wG) / bG.height;
                GG = SG - yG, ZG = SG + yG
              } else GG = (this.visibleTop - bG.top - wG) / bG.height, ZG = (this.visibleBottom - bG.top + wG) / bG.height;
              kG = yS(LG, GG), YG = yS(LG, ZG)
            } else {
              let ZG = LG.total * this.heightOracle.charWidth,
                wG = SG * this.heightOracle.charWidth,
                yG = 0;
              if (ZG > 2e6)
                for (let SG of GG) SG.from >= bG.from && SG.from < bG.to && SG.size != SG.displaySize && SG.from * this.heightOracle.charWidth + yG < this.pixelViewport.left && (yG = SG.size - SG.displaySize);
              let UG, pG, fG = this.pixelViewport.left + yG,
                QG = this.pixelViewport.right + yG;
              if (null != VG) {
                let GG = kS(LG, VG),
                  bG = ((QG - fG) / 2 + wG) / ZG;
                UG = GG - bG, pG = GG + bG
              } else UG = (fG - wG) / ZG, pG = (QG + wG) / ZG;
              kG = yS(LG, UG), YG = yS(LG, pG)
            }
            kG > bG.from && UG(bG.from, kG, bG, LG), YG < bG.to && UG(YG, bG.to, bG, LG)
          };
        for (let wG of this.viewportLines) Array.isArray(wG.type) ? wG.type.forEach(YG) : YG(wG);
        return kG
      }
      gapSize(GG, bG, ZG, wG) {
        let SG = kS(wG, ZG) - kS(wG, bG);
        return this.heightOracle.lineWrapping ? GG.height * SG : wG.total * this.heightOracle.charWidth * SG
      }
      updateLineGaps(GG) {
        ZS.same(GG, this.lineGaps) || (this.lineGaps = GG, this.lineGapDeco = aG.set(GG.map((GG => GG.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(GG) {
        let bG = this.stateDeco;
        this.lineGaps.length && (bG = bG.concat(this.lineGapDeco));
        let ZG = [];
        wG.x.spans(bG, this.viewport.from, this.viewport.to, {
          span(GG, bG) {
            ZG.push({
              from: GG,
              to: bG
            })
          },
          point() {}
        }, 20);
        let SG = 0;
        if (ZG.length != this.SGG.length) SG = 12;
        else
          for (let wG = 0; wG < ZG.length && !(8 & SG); wG++) {
            let bG = this.SGG[wG],
              LG = ZG[wG];
            bG.from == LG.from && bG.to == LG.to || (SG |= 4, GG && GG.mapPos(bG.from, -1) == LG.from && GG.mapPos(bG.to, 1) == LG.to || (SG |= 8))
          }
        return this.SGG = ZG, SG
      }
      lineBlockAt(GG) {
        return GG >= this.viewport.from && GG <= this.viewport.to && this.viewportLines.find((bG => bG.from <= GG && bG.to >= GG)) || pS(this.heightMap.lineAt(GG, nw.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(GG) {
        return GG >= this.viewportLines[0].top && GG <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((bG => bG.top <= GG && bG.bottom >= GG)) || pS(this.heightMap.lineAt(this.scaler.fromDOM(GG), nw.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(GG) {
        let bG = this.lineBlockAtHeight(GG + 8);
        return bG.from >= this.viewport.from || this.viewportLines[0].top - GG > 200 ? bG : this.viewportLines[0]
      }
      elementAtHeight(GG) {
        return pS(this.heightMap.blockAt(this.scaler.fromDOM(GG), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class LS {
      constructor(GG, bG) {
        this.from = GG, this.to = bG
      }
    }

    function yS(GG, bG) {
      let {
        total: ZG,
        Bh: wG
      } = GG;
      if (bG <= 0) return wG[0].from;
      if (bG >= 1) return wG[wG.length - 1].to;
      let SG = Math.floor(ZG * bG);
      for (let LG = 0;; LG++) {
        let {
          from: GG,
          to: bG
        } = wG[LG], ZG = bG - GG;
        if (SG <= ZG) return GG + SG;
        SG -= ZG
      }
    }

    function kS(GG, bG) {
      let ZG = 0;
      for (let {
          from: wG,
          to: SG
        }
        of GG.Bh) {
        if (bG <= SG) {
          ZG += bG - wG;
          break
        }
        ZG += SG - wG
      }
      return ZG / GG.total
    }
    const US = {
      toDOM: GG => GG,
      fromDOM: GG => GG,
      scale: 1,
      eq(GG) {
        return GG == this
      }
    };

    function YS(GG) {
      let bG = GG.facet(GZ).filter((GG => "function" != typeof GG)),
        ZG = GG.facet(ZZ).filter((GG => "function" != typeof GG));
      return ZG.length && bG.push(wG.x.join(ZG)), bG
    }
    class VS {
      constructor(GG, bG, ZG) {
        let wG = 0,
          SG = 0,
          LG = 0;
        this.viewports = ZG.map((ZG => {
          let {
            from: SG,
            to: LG
          } = ZG, yG = bG.lineAt(SG, nw.ByPos, GG, 0, 0).top, kG = bG.lineAt(LG, nw.ByPos, GG, 0, 0).bottom;
          return wG += kG - yG, {
            from: SG,
            to: LG,
            top: yG,
            bottom: kG,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - wG) / (bG.height - wG);
        for (let yG of this.viewports) yG.domTop = LG + (yG.top - SG) * this.scale, LG = yG.domBottom = yG.domTop + (yG.bottom - yG.top), SG = yG.bottom
      }
      toDOM(GG) {
        for (let bG = 0, ZG = 0, wG = 0;; bG++) {
          let SG = bG < this.viewports.length ? this.viewports[bG] : null;
          if (!SG || GG < SG.top) return wG + (GG - ZG) * this.scale;
          if (GG <= SG.bottom) return SG.domTop + (GG - SG.top);
          ZG = SG.bottom, wG = SG.domBottom
        }
      }
      fromDOM(GG) {
        for (let bG = 0, ZG = 0, wG = 0;; bG++) {
          let SG = bG < this.viewports.length ? this.viewports[bG] : null;
          if (!SG || GG < SG.domTop) return ZG + (GG - wG) / this.scale;
          if (GG <= SG.domBottom) return SG.top + (GG - SG.domTop);
          ZG = SG.bottom, wG = SG.domBottom
        }
      }
      eq(GG) {
        return GG instanceof VS && (this.scale == GG.scale && this.viewports.length == GG.viewports.length && this.viewports.every(((bG, ZG) => bG.from == GG.viewports[ZG].from && bG.to == GG.viewports[ZG].to)))
      }
    }

    function pS(GG, bG) {
      if (1 == bG.scale) return GG;
      let ZG = bG.toDOM(GG.top),
        wG = bG.toDOM(GG.bottom);
      return new qw(GG.from, GG.length, ZG, wG - ZG, Array.isArray(GG._content) ? GG._content.map((GG => pS(GG, bG))) : GG._content)
    }
    const fS = wG.m.define({
        combine: GG => GG.join(" ")
      }),
      QS = wG.m.define({
        combine: GG => GG.indexOf(!0) > -1
      }),
      KS = SG.d.newName(),
      hS = SG.d.newName(),
      dS = SG.d.newName(),
      JS = {
        "&light": "." + hS,
        "&dark": "." + dS
      };

    function rS(GG, bG, ZG) {
      return new SG.d(bG, {
        finish: bG => /&/.test(bG) ? bG.replace(/&\w*/, (bG => {
          if ("&" == bG) return GG;
          if (!ZG || !ZG[bG]) throw new RangeError(`Unsupported selector: ${bG}`);
          return ZG[bG]
        })) : GG + " " + bG
      })
    }
    const zS = rS("." + KS, {
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
      }, JS),
      ES = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      oS = uG.ie && uG.ie_version <= 11;
    class XS {
      constructor(GG) {
        this.view = GG, this.active = !1, this.editContext = null, this.selectionRange = new BG, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = GG.contentDOM, this.observer = new MutationObserver((bG => {
          for (let GG of bG) this.queue.push(GG);
          (uG.ie && uG.ie_version <= 11 || uG.ios && GG.composing) && bG.some((GG => "childList" == GG.type && GG.removedNodes.length || "characterData" == GG.type && GG.oldValue.length > GG.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !uG.android || !1 === GG.constructor.EDIT_CONTEXT || uG.chrome && uG.chrome_version < 126 || (this.editContext = new CS(GG), GG.state.facet(Hb) && (GG.contentDOM.editContext = this.editContext.editContext)), oS && (this.onCharData = GG => {
          this.queue.push({
            target: GG.target,
            type: "characterData",
            oldValue: GG.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.PJ = this.PJ.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var GG;
          (null === (GG = this.view.docView) || void 0 === GG ? void 0 : GG.lastUpdate) < Date.now() - 75 && this.PJ()
        })), this.resizeScroll.observe(GG.scrollDOM)), this.addWindowListeners(this.win = GG.win), this.start(), "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver((GG => {
          this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), GG.length > 0 && GG[GG.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")))
        }), {
          threshold: [0, .001]
        }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((GG => {
          GG.length > 0 && GG[GG.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"))
        }), {})), this.listenForScroll(), this.readSelectionRange()
      }
      onScrollChanged(GG) {
        this.view.inputState.runHandlers("scroll", GG), this.intersecting && this.view.measure()
      }
      onScroll(GG) {
        this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(GG)
      }
      PJ() {
        this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout((() => {
          this.resizeTimeout = -1, this.view.requestMeasure()
        }), 50))
      }
      onPrint(GG) {
        ("change" != GG.type && GG.type || GG.matches) && (this.view.viewState.printing = !0, this.view.measure(), setTimeout((() => {
          this.view.viewState.printing = !1, this.view.requestMeasure()
        }), 500))
      }
      updateGaps(GG) {
        if (this.gapIntersection && (GG.length != this.gaps.length || this.gaps.some(((bG, ZG) => bG != GG[ZG])))) {
          this.gapIntersection.disconnect();
          for (let bG of GG) this.gapIntersection.observe(bG);
          this.gaps = GG
        }
      }
      onSelectionChange(GG) {
        let bG = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: ZG
        } = this, wG = this.selectionRange;
        if (ZG.state.facet(Hb) ? ZG.root.activeElement != this.dom : !nG(this.dom, wG)) return;
        let SG = wG.anchorNode && ZG.docView.tile.nearest(wG.anchorNode);
        SG && SG.isWidget() && SG.widget.ignoreEvent(GG) ? bG || (this.selectionChanged = !1) : (uG.ie && uG.ie_version <= 11 || uG.android && uG.chrome) && !ZG.state.selection.main.empty && wG.focusNode && eG(wG.focusNode, wG.focusOffset, wG.anchorNode, wG.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: GG
        } = this, bG = sG(GG.root);
        if (!bG) return !1;
        let ZG = uG.safari && 11 == GG.root.nodeType && GG.root.activeElement == this.dom && function(GG, bG) {
          if (bG.getComposedRanges) {
            let ZG = bG.getComposedRanges(GG.root)[0];
            if (ZG) return iS(GG, ZG)
          }
          let ZG = null;

          function wG(GG) {
            GG.preventDefault(), GG.stopImmediatePropagation(), ZG = GG.getTargetRanges()[0]
          }
          return GG.contentDOM.addEventListener("beforeinput", wG, !0), GG.dom.ownerDocument.execCommand("indent"), GG.contentDOM.removeEventListener("beforeinput", wG, !0), ZG ? iS(GG, ZG) : null
        }(this.view, bG) || bG;
        if (!ZG || this.selectionRange.eq(ZG)) return !1;
        let wG = nG(this.dom, ZG);
        return wG && !this.selectionChanged && GG.inputState.lastFocusTime > Date.now() - 200 && GG.inputState.lastTouchTime < Date.now() - 300 && function(GG, bG) {
          let ZG = bG.focusNode,
            wG = bG.focusOffset;
          if (!ZG || bG.anchorNode != ZG || bG.anchorOffset != wG) return !1;
          for (wG = Math.min(wG, tG(ZG));;)
            if (wG) {
              if (1 != ZG.nodeType) return !1;
              let GG = ZG.childNodes[wG - 1];
              "false" == GG.contentEditable ? wG-- : (ZG = GG, wG = tG(ZG))
            } else {
              if (ZG == GG) return !0;
              wG = RG(ZG), ZG = ZG.parentNode
            }
        }(this.dom, ZG) ? (this.view.inputState.lastFocusTime = 0, GG.docView.updateSelection(), !1) : (this.selectionRange.setRange(ZG), wG && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(GG, bG) {
        this.selectionRange.set(GG.node, GG.offset, bG.node, bG.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let GG = 0,
          bG = null;
        for (let ZG = this.dom; ZG;)
          if (1 == ZG.nodeType) !bG && GG < this.scrollTargets.length && this.scrollTargets[GG] == ZG ? GG++ : bG || (bG = this.scrollTargets.slice(0, GG)), bG && bG.push(ZG), ZG = ZG.assignedSlot || ZG.parentNode;
          else {
            if (11 != ZG.nodeType) break;
            ZG = ZG.host
          } if (GG < this.scrollTargets.length && !bG && (bG = this.scrollTargets.slice(0, GG)), bG) {
          for (let GG of this.scrollTargets) GG.removeEventListener("scroll", this.onScroll);
          for (let GG of this.scrollTargets = bG) GG.addEventListener("scroll", this.onScroll)
        }
      }
      ignore(GG) {
        if (!this.active) return GG();
        try {
          return this.stop(), GG()
        } finally {
          this.start(), this.clear()
        }
      }
      start() {
        this.active || (this.observer.observe(this.dom, ES), oS && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), oS && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(GG, bG) {
        var ZG;
        if (!this.delayedAndroidKey) {
          let GG = () => {
            let GG = this.delayedAndroidKey;
            if (GG) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = GG.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && GG.force && Sb(this.dom, GG.key, GG.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(GG)
        }
        this.delayedAndroidKey && "Enter" != GG || (this.delayedAndroidKey = {
          key: GG,
          keyCode: bG,
          force: this.lastChange < Date.now() - 50 || !!(null === (ZG = this.delayedAndroidKey) || void 0 === ZG ? void 0 : ZG.force)
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
        for (let GG of this.observer.takeRecords()) this.queue.push(GG);
        return this.queue
      }
      processRecords() {
        let GG = this.pendingRecords();
        GG.length && (this.queue = []);
        let bG = -1,
          ZG = -1,
          wG = !1;
        for (let SG of GG) {
          let GG = this.readMutation(SG);
          GG && (GG.typeOver && (wG = !0), -1 == bG ? ({
            from: bG,
            to: ZG
          } = GG) : (bG = Math.min(GG.from, bG), ZG = Math.max(GG.to, ZG)))
        }
        return {
          from: bG,
          to: ZG,
          typeOver: wG
        }
      }
      readChange() {
        let {
          from: GG,
          to: bG,
          typeOver: ZG
        } = this.processRecords(), wG = this.selectionChanged && nG(this.dom, this.selectionRange);
        if (GG < 0 && !wG) return null;
        GG > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let SG = new Zw(this.view, GG, bG, ZG);
        return this.view.docView.domChanged = {
          newSel: SG.newSel ? SG.newSel.main : null
        }, SG
      }
      flush() {
        let GG = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        GG && this.readSelectionRange();
        let bG = this.readChange();
        if (!bG) return this.view.requestMeasure(), !1;
        let ZG = this.view.state,
          wG = Sw(this.view, bG);
        return this.view.state == ZG && (bG.domChanged || bG.newSel && !kw(this.view.state.selection, bG.newSel.main)) && this.view.update([]), wG
      }
      readMutation(GG) {
        let bG = this.view.docView.tile.nearest(GG.target);
        if (!bG || bG.isWidget()) return null;
        if (bG.markDirty("attributes" == GG.type), "childList" == GG.type) {
          let ZG = uS(bG, GG.previousSibling || GG.target.previousSibling, -1),
            wG = uS(bG, GG.nextSibling || GG.target.nextSibling, 1);
          return {
            from: ZG ? bG.posAfter(ZG) : bG.posAtStart,
            to: wG ? bG.posBefore(wG) : bG.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == GG.type ? {
          from: bG.posAtStart,
          to: bG.posAtEnd,
          typeOver: GG.target.nodeValue == GG.oldValue
        } : null
      }
      setWindow(GG) {
        GG != this.win && (this.removeWindowListeners(this.win), this.win = GG, this.addWindowListeners(this.win))
      }
      addWindowListeners(GG) {
        GG.addEventListener("resize", this.PJ), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : GG.addEventListener("beforeprint", this.onPrint), GG.addEventListener("scroll", this.onScroll), GG.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(GG) {
        GG.removeEventListener("scroll", this.onScroll), GG.removeEventListener("resize", this.PJ), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : GG.removeEventListener("beforeprint", this.onPrint), GG.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(GG) {
        this.editContext && (this.editContext.update(GG), GG.startState.facet(Hb) != GG.state.facet(Hb) && (GG.view.contentDOM.editContext = GG.state.facet(Hb) ? this.editContext.editContext : null))
      }
      destroy() {
        var GG, bG, ZG;
        this.stop(), null === (GG = this.intersection) || void 0 === GG || GG.disconnect(), null === (bG = this.gapIntersection) || void 0 === bG || bG.disconnect(), null === (ZG = this.resizeScroll) || void 0 === ZG || ZG.disconnect();
        for (let wG of this.scrollTargets) wG.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function uS(GG, bG, ZG) {
      for (; bG;) {
        let wG = fZ.get(bG);
        if (wG && wG.parent == GG) return wG;
        let SG = bG.parentNode;
        bG = SG != GG.dom ? SG : ZG > 0 ? bG.nextSibling : bG.previousSibling
      }
      return null
    }

    function iS(GG, bG) {
      let ZG = bG.startContainer,
        wG = bG.startOffset,
        SG = bG.endContainer,
        LG = bG.endOffset,
        yG = GG.docView.domAtPos(GG.state.selection.main.anchor, 1);
      return eG(yG.node, yG.offset, SG, LG) && ([ZG, wG, SG, LG] = [SG, LG, ZG, wG]), {
        anchorNode: ZG,
        anchorOffset: wG,
        focusNode: SG,
        focusOffset: LG
      }
    }
    class CS {
      constructor(GG) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(GG.state);
        let bG = this.editContext = new window.EditContext({
          text: GG.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, GG.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(GG.state.selection.main.head)
        });
        this.handlers.textupdate = ZG => {
          let SG = GG.state.selection.main,
            {
              anchor: LG,
              head: yG
            } = SG,
            kG = this.toEditorPos(ZG.updateRangeStart),
            UG = this.toEditorPos(ZG.updateRangeEnd);
          GG.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: ZG.updateRangeStart,
            editorBase: kG,
            drifted: !1
          });
          let YG = UG - kG > ZG.text.length;
          kG == this.from && LG < this.from ? kG = LG : UG == this.to && LG > this.to && (UG = LG);
          let VG = yw(GG.state.sliceDoc(kG, UG), ZG.text, (YG ? SG.from : SG.to) - kG, YG ? "end" : null);
          if (!VG) {
            let bG = wG.j.single(this.toEditorPos(ZG.selectionStart), this.toEditorPos(ZG.selectionEnd));
            return void(kw(bG, SG) || GG.dispatch({
              selection: bG,
              userEvent: "select"
            }))
          }
          let pG = {
            from: VG.from + kG,
            to: VG.toA + kG,
            insert: wG.I.of(ZG.text.slice(VG.from, VG.toB).split("\n"))
          };
          if ((uG.mac || uG.android) && pG.from == yG - 1 && /^\. ?$/.test(ZG.text) && "off" == GG.contentDOM.getAttribute("autocorrect") && (pG = {
              from: kG,
              to: UG,
              insert: wG.I.of([ZG.text.replace(".", " ")])
            }), this.pendingContextChange = pG, !GG.state.readOnly) {
            let bG = this.to - this.from + (pG.to - pG.from + pG.insert.length);
            Lw(GG, pG, wG.j.single(this.toEditorPos(ZG.selectionStart, bG), this.toEditorPos(ZG.selectionEnd, bG)))
          }
          this.pendingContextChange && (this.revertPending(GG.state), this.setSelection(GG.state)), pG.from < pG.to && !pG.insert.length && GG.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(bG.text.slice(Math.max(0, ZG.updateRangeStart - 1), Math.min(bG.text.length, ZG.updateRangeStart + 1))) && this.handlers.compositionend(ZG)
        }, this.handlers.characterboundsupdate = ZG => {
          let wG = [],
            SG = null;
          for (let bG = this.toEditorPos(ZG.rangeStart), LG = this.toEditorPos(ZG.rangeEnd); bG < LG; bG++) {
            let ZG = GG.coordsForChar(bG);
            SG = ZG && new DOMRect(ZG.left, ZG.top, ZG.right - ZG.left, ZG.bottom - ZG.top) || SG || new DOMRect, wG.push(SG)
          }
          bG.updateCharacterBounds(ZG.rangeStart, wG)
        }, this.handlers.textformatupdate = bG => {
          let ZG = [];
          for (let GG of bG.getTextFormats()) {
            let bG = GG.underlineStyle,
              wG = GG.underlineThickness;
            if (!/none/i.test(bG) && !/none/i.test(wG)) {
              let SG = this.toEditorPos(GG.rangeStart),
                LG = this.toEditorPos(GG.rangeEnd);
              if (SG < LG) {
                let GG = `text-decoration: underline ${/^[a-z]/.test(bG)?bG+" ":"Dashed"==bG?"dashed ":"Squiggle"==bG?"wavy ":""}${/thin/i.test(wG)?1:2}px`;
                ZG.push(aG.mark({
                  attributes: {
                    style: GG
                  }
                }).range(SG, LG))
              }
            }
          }
          GG.dispatch({
            effects: Rb.of(aG.set(ZG))
          })
        }, this.handlers.compositionstart = () => {
          GG.inputState.composing < 0 && (GG.inputState.composing = 0, GG.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (GG.inputState.composing = -1, GG.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: bG
            } = this.composing;
            this.composing = null, bG && this.reset(GG.state)
          }
        };
        for (let ZG in this.handlers) bG.addEventListener(ZG, this.handlers[ZG]);
        this.measureReq = {
          read: GG => {
            this.editContext.updateControlBounds(GG.contentDOM.getBoundingClientRect());
            let bG = sG(GG.root);
            bG && bG.rangeCount && this.editContext.updateSelectionBounds(bG.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(GG) {
        let bG = 0,
          ZG = !1,
          wG = this.pendingContextChange;
        return GG.changes.iterChanges(((SG, LG, yG, kG, UG) => {
          if (ZG) return;
          let YG = UG.length - (LG - SG);
          if (wG && LG >= wG.to) {
            if (wG.from == SG && wG.to == LG && wG.insert.eq(UG)) return wG = this.pendingContextChange = null, bG += YG, void(this.to += YG);
            wG = null, this.revertPending(GG.state)
          }
          if (SG += bG, (LG += bG) <= this.from) this.from += YG, this.to += YG;
          else if (SG < this.to) {
            if (SG < this.from || LG > this.to || this.to - this.from + UG.length > 3e4) return void(ZG = !0);
            this.editContext.updateText(this.toContextPos(SG), this.toContextPos(LG), UG.toString()), this.to += YG
          }
          bG += YG
        })), wG && !ZG && this.revertPending(GG.state), !ZG
      }
      update(GG) {
        let bG = this.pendingContextChange,
          ZG = GG.startState.selection.main;
        this.composing && (this.composing.drifted || !GG.changes.touchesRange(ZG.from, ZG.to) && GG.transactions.some((GG => !GG.isUserEvent("input.type") && GG.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = GG.changes.mapPos(this.composing.editorBase)) : this.applyEdits(GG) && this.rangeIsValid(GG.state) ? (GG.docChanged || GG.selectionSet || bG) && this.setSelection(GG.state) : (this.pendingContextChange = null, this.reset(GG.state)), (GG.geometryChanged || GG.docChanged || GG.selectionSet) && GG.view.requestMeasure(this.measureReq)
      }
      resetRange(GG) {
        let {
          head: bG
        } = GG.selection.main;
        this.from = Math.max(0, bG - 1e4), this.to = Math.min(GG.doc.length, bG + 1e4)
      }
      reset(GG) {
        this.resetRange(GG), this.editContext.updateText(0, this.editContext.text.length, GG.doc.sliceString(this.from, this.to)), this.setSelection(GG)
      }
      revertPending(GG) {
        let bG = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(bG.from), this.toContextPos(bG.from + bG.insert.length), GG.doc.sliceString(bG.from, bG.to))
      }
      setSelection(GG) {
        let {
          main: bG
        } = GG.selection, ZG = this.toContextPos(Math.max(this.from, Math.min(this.to, bG.anchor))), wG = this.toContextPos(bG.head);
        this.editContext.selectionStart == ZG && this.editContext.selectionEnd == wG || this.editContext.updateSelection(ZG, wG)
      }
      rangeIsValid(GG) {
        let {
          head: bG
        } = GG.selection.main;
        return !(this.from > 0 && bG - this.from < 500 || this.to < GG.doc.length && this.to - bG < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        GG = Math.min(GG, bG);
        let ZG = this.composing;
        return ZG && ZG.drifted ? ZG.editorBase + (GG - ZG.contextBase) : GG + this.from
      }
      toContextPos(GG) {
        let bG = this.composing;
        return bG && bG.drifted ? bG.contextBase + (GG - bG.editorBase) : GG - this.from
      }
      destroy() {
        for (let GG in this.handlers) this.editContext.removeEventListener(GG, this.handlers[GG])
      }
    }
    class WS {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get SGG() {
        return this.viewState.SGG
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
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var bG;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), GG.parent && GG.parent.appendChild(this.dom);
        let {
          dispatch: ZG
        } = GG;
        this.dispatchTransactions = GG.dispatchTransactions || ZG && (GG => GG.forEach((GG => ZG(GG, this)))) || (GG => this.update(GG)), this.dispatch = this.dispatch.bind(this), this._root = GG.root || function(GG) {
          for (; GG;) {
            if (GG && (9 == GG.nodeType || 11 == GG.nodeType && GG.host)) return GG;
            GG = GG.assignedSlot || GG.parentNode
          }
          return null
        }(GG.parent) || document, this.viewState = new SS(this, GG.state || wG.l.create(GG)), GG.scrollTo && GG.scrollTo.is(eb) && (this.viewState.scrollTarget = GG.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(Db).map((GG => new Ob(GG)));
        for (let wG of this.plugins) wG.update(this);
        this.observer = new XS(this), this.inputState = new Uw(this), this.inputState.ensureHandlers(this.plugins), this.docView = new PZ(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (bG = document.fonts) || void 0 === bG ? void 0 : bG.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var GG = arguments.length, bG = new Array(GG), ZG = 0; ZG < GG; ZG++) bG[ZG] = arguments[ZG];
        let SG = 1 == bG.length && bG[0] instanceof wG.M ? bG : 1 == bG.length && Array.isArray(bG[0]) ? bG[0] : [this.state.update(...bG)];
        this.dispatchTransactions(SG, this)
      }
      update(GG) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let bG, ZG = !1,
          SG = !1,
          LG = this.state;
        for (let wG of GG) {
          if (wG.startState != LG) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          LG = wG.state
        }
        if (this.destroyed) return void(this.viewState.state = LG);
        let yG = this.hasFocus,
          kG = 0,
          UG = null;
        GG.some((GG => GG.annotation(Fw))) ? (this.inputState.notifiedFocused = yG, kG = 1) : yG != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = yG, UG = vw(LG, yG), UG || (kG = 1));
        let YG = this.observer.delayedAndroidKey,
          VG = null;
        if (YG ? (this.observer.clearDelayedAndroidKey(), VG = this.observer.readChange(), (VG && !this.state.doc.eq(LG.doc) || !this.state.selection.eq(LG.selection)) && (VG = null)) : this.observer.clear(), LG.facet(wG.l.phrases) != this.state.facet(wG.l.phrases)) return this.setState(LG);
        bG = VZ.create(this, LG, GG), bG.flags |= kG;
        let pG = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let bG of GG) {
            if (pG && (pG = pG.map(bG.changes)), bG.scrollIntoView) {
              let {
                main: GG
              } = bG.state.selection, {
                x: ZG,
                y: SG
              } = this.state.facet(WS.cursorScrollMargin);
              pG = new gb(GG.empty ? GG : wG.j.cursor(GG.head, GG.head > GG.anchor ? -1 : 1), "nearest", "nearest", SG, ZG)
            }
            for (let GG of bG.effects) GG.is(eb) && (pG = GG.value.clip(this.state))
          }
          this.viewState.update(bG, pG), this.bidiCache = FS.update(this.bidiCache, bG.changes), bG.empty || (this.updatePlugins(bG), this.inputState.update(bG)), ZG = this.docView.update(bG), this.state.facet(UZ) != this.styleModules && this.mountStyles(), SG = this.updateAttrs(), this.showAnnouncements(GG), this.docView.updateSelection(ZG, GG.some((GG => GG.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (bG.startState.facet(fS) != bG.state.facet(fS) && (this.viewState.mustMeasureContent = !0), (ZG || SG || pG || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), ZG && this.docViewUpdate(), !bG.empty)
          for (let wG of this.state.facet(lb)) try {
            wG(bG)
          } catch (fG) {
            Tb(this.state, fG, "update listener")
          }(UG || VG) && Promise.resolve().then((() => {
            UG && this.state == UG.startState && this.dispatch(UG), VG && !Sw(this, VG) && YG.force && Sb(this.contentDOM, YG.key, YG.keyCode)
          }))
      }
      setState(GG) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = GG);
        this.updateState = 2;
        let bG = this.hasFocus;
        try {
          for (let GG of this.plugins) GG.destroy(this);
          this.viewState = new SS(this, GG), this.plugins = GG.facet(Db).map((GG => new Ob(GG))), this.pluginMap.clear();
          for (let GG of this.plugins) GG.update(this);
          this.docView.destroy(), this.docView = new PZ(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        bG && this.focus(), this.requestMeasure()
      }
      updatePlugins(GG) {
        let bG = GG.startState.facet(Db),
          ZG = GG.state.facet(Db);
        if (bG != ZG) {
          let wG = [];
          for (let SG of ZG) {
            let ZG = bG.indexOf(SG);
            if (ZG < 0) wG.push(new Ob(SG));
            else {
              let bG = this.plugins[ZG];
              bG.mustUpdate = GG, wG.push(bG)
            }
          }
          for (let bG of this.plugins) bG.mustUpdate != GG && bG.destroy(this);
          this.plugins = wG, this.pluginMap.clear()
        } else
          for (let wG of this.plugins) wG.mustUpdate = GG;
        for (let wG = 0; wG < this.plugins.length; wG++) this.plugins[wG].update(this);
        bG != ZG && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let bG of this.plugins) {
          let ZG = bG.value;
          if (ZG && ZG.docViewUpdate) try {
            ZG.docViewUpdate(this)
          } catch (GG) {
            Tb(this.state, GG, "doc view update listener")
          }
        }
      }
      measure() {
        let GG = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, GG && this.observer.forceFlush();
        let bG = null,
          ZG = this.viewState.scrollParent,
          wG = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: SG,
            scrollAnchorHeight: LG
          } = this.viewState;
        Math.abs(wG - this.viewState.scrollOffset) > 1 && (LG = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let GG = 0;; GG++) {
            if (LG < 0)
              if (Lb(ZG || this.win)) SG = -1, LG = this.viewState.heightMap.height;
              else {
                let GG = this.viewState.scrollAnchorAt(wG);
                SG = GG.from, LG = GG.top
              } this.updateState = 1;
            let kG = this.viewState.measure();
            if (!kG && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (GG > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let UG = [];
            4 & kG || ([this.measureRequests, UG] = [UG, this.measureRequests]);
            let YG = UG.map((GG => {
                try {
                  return GG.read(this)
                } catch (bG) {
                  return Tb(this.state, bG), IS
                }
              })),
              VG = VZ.create(this, this.state, []),
              pG = !1;
            VG.flags |= kG, bG ? bG.flags |= kG : bG = VG, this.updateState = 2, VG.empty || (this.updatePlugins(VG), this.inputState.update(VG), this.updateAttrs(), pG = this.docView.update(VG), pG && this.docViewUpdate());
            for (let GG = 0; GG < UG.length; GG++)
              if (YG[GG] != IS) try {
                let bG = UG[GG];
                bG.write && bG.write(YG[GG], this)
              } catch (yG) {
                Tb(this.state, yG)
              }
            if (pG && this.docView.updateSelection(!0), !VG.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, LG = -1;
                  continue
                } {
                  let GG = ((SG < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(SG).top) - LG) / this.scaleY;
                  if ((GG > 1 || GG < -1) && (ZG == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    wG += GG, ZG ? ZG.scrollTop += GG : this.win.scrollBy(0, GG), LG = -1;
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
        if (bG && !bG.empty)
          for (let kG of this.state.facet(lb)) kG(bG)
      }
      get themeClasses() {
        return KS + " " + (this.state.facet(QS) ? dS : hS) + " " + this.state.facet(fS)
      }
      updateAttrs() {
        let GG = vS(this, xb, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          bG = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(Hb) ? "true" : "false",
            class: "cm-content",
            style: `${uG.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (bG["aria-readonly"] = "true"), vS(this, Bb, bG);
        let ZG = this.observer.ignore((() => {
          let ZG = mG(this.contentDOM, this.contentAttrs, bG),
            wG = mG(this.dom, this.editorAttrs, GG);
          return ZG || wG
        }));
        return this.editorAttrs = GG, this.contentAttrs = bG, ZG
      }
      showAnnouncements(GG) {
        let bG = !0;
        for (let ZG of GG)
          for (let GG of ZG.effects)
            if (GG.is(WS.announce)) {
              bG && (this.announceDOM.textContent = ""), bG = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = GG.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(UZ);
        let GG = this.state.facet(WS.cspNonce);
        SG.d.mount(this.root, this.styleModules.concat(zS).reverse(), GG ? {
          nonce: GG
        } : void 0)
      }
      readMeasured() {
        if (2 == this.updateState) throw new Error("Reading the editor layout isn't allowed during an update");
        0 == this.updateState && this.measureScheduled > -1 && this.measure(!1)
      }
      requestMeasure(GG) {
        if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame((() => this.measure()))), GG) {
          if (this.measureRequests.indexOf(GG) > -1) return;
          if (null != GG.key)
            for (let bG = 0; bG < this.measureRequests.length; bG++)
              if (this.measureRequests[bG].key === GG.key) return void(this.measureRequests[bG] = GG);
          this.measureRequests.push(GG)
        }
      }
      plugin(GG) {
        let bG = this.pluginMap.get(GG);
        return (void 0 === bG || bG && bG.plugin != GG) && this.pluginMap.set(GG, bG = this.plugins.find((bG => bG.plugin == GG)) || null), bG && bG.update(this).value
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
      elementAtHeight(GG) {
        return this.readMeasured(), this.viewState.elementAtHeight(GG)
      }
      lineBlockAtHeight(GG) {
        return this.readMeasured(), this.viewState.lineBlockAtHeight(GG)
      }
      get viewportLineBlocks() {
        return this.viewState.viewportLines
      }
      lineBlockAt(GG) {
        return this.viewState.lineBlockAt(GG)
      }
      get contentHeight() {
        return this.viewState.contentHeight
      }
      moveByChar(GG, bG, ZG) {
        return HZ(this, GG, eZ(this, GG, bG, ZG))
      }
      moveByGroup(GG, bG) {
        return HZ(this, GG, eZ(this, GG, bG, (bG => function(GG, bG, ZG) {
          let SG = GG.state.charCategorizer(bG),
            LG = SG(ZG);
          return GG => {
            let bG = SG(GG);
            return LG == wG.f.Space && (LG = bG), LG == bG
          }
        }(this, GG.head, bG))))
      }
      visualLineSide(GG, bG) {
        let ZG = this.bidiSpans(GG),
          SG = this.textDirectionAt(GG.from),
          LG = ZG[bG ? ZG.length - 1 : 0];
        return wG.j.cursor(LG.side(bG, SG) + GG.from, LG.forward(!bG, SG) ? 1 : -1)
      }
      moveToLineBoundary(GG, bG) {
        return function(GG, bG, ZG, SG) {
          let LG = gZ(GG, bG.head, bG.assoc || -1),
            yG = SG && LG.type == vG.Text && (GG.lineWrapping || LG.widgetLineBreaks) ? GG.coordsAtPos(bG.assoc < 0 && bG.head > LG.from ? bG.head - 1 : bG.head) : null;
          if (yG) {
            let bG = GG.dom.getBoundingClientRect(),
              SG = GG.textDirectionAt(LG.from),
              kG = GG.posAtCoords({
                x: ZG == (SG == Yb.LTR) ? bG.right - 1 : bG.left + 1,
                y: (yG.top + yG.bottom) / 2
              });
            if (null != kG) return wG.j.cursor(kG, ZG ? -1 : 1)
          }
          return wG.j.cursor(ZG ? LG.to : LG.from, ZG ? -1 : 1)
        }(this, GG, bG, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(GG, bG, ZG) {
        return HZ(this, GG, function(GG, bG, ZG, SG) {
          let LG = bG.head,
            yG = ZG ? 1 : -1;
          if (LG == (ZG ? GG.state.doc.length : 0)) return wG.j.cursor(LG, bG.assoc);
          let kG, UG = bG.goalColumn,
            YG = GG.contentDOM.getBoundingClientRect(),
            VG = GG.coordsAtPos(LG, bG.assoc || ((bG.empty ? ZG : bG.head == bG.from) ? 1 : -1)),
            pG = GG.documentTop;
          if (VG) null == UG && (UG = VG.left - YG.left), kG = yG < 0 ? VG.top : VG.bottom;
          else {
            let bG = GG.viewState.lineBlockAt(LG);
            null == UG && (UG = Math.min(YG.right - YG.left, GG.defaultCharacterWidth * (LG - bG.from))), kG = (yG < 0 ? bG.top : bG.bottom) + pG
          }
          let fG = YG.left + UG,
            QG = GG.viewState.heightOracle.textHeight >> 1,
            KG = null !== SG && void 0 !== SG ? SG : QG;
          for (let hG = 0;; hG += QG) {
            let bG = kG + (KG + hG) * yG,
              SG = DZ(GG, {
                x: fG,
                y: bG
              }, !1, yG);
            if (ZG ? bG > YG.bottom : bG < YG.top) return wG.j.cursor(SG.pos, SG.assoc);
            let LG = GG.coordsAtPos(SG.pos, SG.assoc),
              VG = LG ? (LG.top + LG.bottom) / 2 : 0;
            if (!LG || (ZG ? VG > kG : VG < kG)) return wG.j.cursor(SG.pos, SG.assoc, void 0, UG)
          }
        }(this, GG, bG, ZG))
      }
      domAtPos(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(GG, bG)
      }
      posAtDOM(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(GG, bG)
      }
      posAtCoords(GG) {
        let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let ZG = DZ(this, GG, bG);
        return ZG && ZG.pos
      }
      posAndSideAtCoords(GG) {
        let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), DZ(this, GG, bG)
      }
      coordsAtPos(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let ZG = this.docView.coordsAt(GG, bG);
        if (!ZG || ZG.left == ZG.right) return ZG;
        let wG = this.state.doc.lineAt(GG),
          SG = this.bidiSpans(wG);
        return DG(ZG, SG[zb.find(SG, GG - wG.from, -1, bG)].dir == Yb.LTR == bG > 0)
      }
      coordsForChar(GG) {
        return this.readMeasured(), this.docView.coordsForChar(GG)
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
      textDirectionAt(GG) {
        return !this.state.facet(sb) || GG < this.viewport.from || GG > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(GG))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(GG) {
        if (GG.length > mS) return Cb(GG.length);
        let bG, ZG = this.textDirectionAt(GG.from);
        for (let SG of this.bidiCache)
          if (SG.from == GG.from && SG.dir == ZG && (SG.fresh || Eb(SG.isolates, bG = LZ(this, GG)))) return SG.order;
        bG || (bG = LZ(this, GG));
        let wG = ib(GG.text, ZG, bG);
        return this.bidiCache.push(new FS(GG.from, GG.to, ZG, bG, !0, wG)), wG
      }
      get hasFocus() {
        var GG;
        return (this.dom.ownerDocument.hasFocus() || uG.safari && (null === (GG = this.inputState) || void 0 === GG ? void 0 : GG.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          Zb(this.contentDOM), this.docView.updateSelection()
        }))
      }
      setRoot(GG) {
        this._root != GG && (this._root = GG, this.observer.setWindow((9 == GG.nodeType ? GG : GG.ownerDocument).defaultView || window), this.mountStyles())
      }
      destroy() {
        this.root.activeElement == this.contentDOM && this.contentDOM.blur();
        for (let GG of this.plugins) GG.destroy(this);
        this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0
      }
      static scrollIntoView(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var ZG, SG, LG, yG;
        return eb.of(new gb("number" == typeof GG ? wG.j.cursor(GG) : GG, null !== (ZG = bG.y) && void 0 !== ZG ? ZG : "nearest", null !== (SG = bG.x) && void 0 !== SG ? SG : "nearest", null !== (LG = bG.yMargin) && void 0 !== LG ? LG : 5, null !== (yG = bG.xMargin) && void 0 !== yG ? yG : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: GG,
          scrollLeft: bG
        } = this.scrollDOM, ZG = this.viewState.scrollAnchorAt(GG);
        return eb.of(new gb(wG.j.cursor(ZG.from), "start", "start", ZG.top - GG, bG, !0))
      }
      setTabFocusMode(GG) {
        null == GG ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof GG ? this.inputState.tabFocusMode = GG ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + GG)
      }
      static domEventHandlers(GG) {
        return Nb.define((() => ({})), {
          eventHandlers: GG
        })
      }
      static domEventObservers(GG) {
        return Nb.define((() => ({})), {
          eventObservers: GG
        })
      }
      static theme(GG, bG) {
        let ZG = SG.d.newName(),
          wG = [fS.of(ZG), UZ.of(rS(`.${ZG}`, GG))];
        return bG && bG.dark && wG.push(QS.of(!0)), wG
      }
      static baseTheme(GG) {
        return wG.s.lowest(UZ.of(rS("." + KS, GG, JS)))
      }
      static findFromDOM(GG) {
        var bG;
        let ZG = GG.querySelector(".cm-content"),
          wG = ZG && fZ.get(ZG) || fZ.get(GG);
        return (null === (bG = null === wG || void 0 === wG ? void 0 : wG.root) || void 0 === bG ? void 0 : bG.view) || null
      }
    }
    WS.styleModule = UZ, WS.inputHandler = jb, WS.clipboardInputFilter = Mb, WS.clipboardOutputFilter = Ab, WS.scrollHandler = nb, WS.focusChangeEffect = Pb, WS.perLineTextDirection = sb, WS.exceptionSink = cb, WS.updateListener = lb, WS.editable = Hb, WS.mouseSelectionStyle = ab, WS.dragMovesSelection = vb, WS.clickAddsSelectionRange = Fb, WS.Yw = GZ, WS.blockWrappers = bZ, WS.outerDecorations = ZZ, WS.atomicRanges = wZ, WS.bidiIsolatedRanges = SZ, WS.cursorScrollMargin = wG.m.define({
      combine: GG => {
        let bG = 5,
          ZG = 5;
        for (let wG of GG) "number" == typeof wG ? bG = ZG = wG : ({
          x: bG,
          y: ZG
        } = wG);
        return {
          x: bG,
          y: ZG
        }
      }
    }), WS.scrollMargins = yZ, WS.darkTheme = QS, WS.cspNonce = wG.m.define({
      combine: GG => GG.length ? GG[0] : ""
    }), WS.contentAttributes = Bb, WS.editorAttributes = xb, WS.lineWrapping = WS.contentAttributes.of({
      class: "cm-lineWrapping"
    }), WS.announce = wG.C.define();
    const mS = 4096,
      IS = {};
    class FS {
      constructor(GG, bG, ZG, wG, SG, LG) {
        this.from = GG, this.to = bG, this.dir = ZG, this.isolates = wG, this.fresh = SG, this.order = LG
      }
      static update(GG, bG) {
        if (bG.empty && !GG.some((GG => GG.fresh))) return GG;
        let ZG = [],
          wG = GG.length ? GG[GG.length - 1].dir : Yb.LTR;
        for (let SG = Math.max(0, GG.length - 10); SG < GG.length; SG++) {
          let LG = GG[SG];
          LG.dir != wG || bG.touchesRange(LG.from, LG.to) || ZG.push(new FS(bG.mapPos(LG.from, 1), bG.mapPos(LG.to, -1), LG.dir, LG.isolates, !1, LG.order))
        }
        return ZG
      }
    }

    function vS(GG, bG, ZG) {
      for (let wG = GG.state.facet(bG), SG = wG.length - 1; SG >= 0; SG--) {
        let bG = wG[SG],
          LG = "function" == typeof bG ? bG(GG) : bG;
        LG && iG(LG, ZG)
      }
      return ZG
    }
    const aS = uG.mac ? "mac" : uG.windows ? "win" : uG.linux ? "linux" : "key";

    function cS(GG, bG, ZG) {
      return bG.altKey && (GG = "Alt-" + GG), bG.ctrlKey && (GG = "Ctrl-" + GG), bG.metaKey && (GG = "Meta-" + GG), !1 !== ZG && bG.shiftKey && (GG = "Shift-" + GG), GG
    }
    const lS = wG.s.default(WS.domEventHandlers({
        keydown: (GG, bG) => gS(MS(bG.state), GG, bG, "editor")
      })),
      jS = wG.m.define({
        enables: lS
      }),
      PS = new WeakMap;

    function MS(GG) {
      let bG = GG.facet(jS),
        ZG = PS.get(bG);
      return ZG || PS.set(bG, ZG = function(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aS,
          ZG = Object.create(null),
          wG = Object.create(null),
          SG = (GG, bG) => {
            let ZG = wG[GG];
            if (null == ZG) wG[GG] = bG;
            else if (ZG != bG) throw new Error("Key binding " + GG + " is used both as a regular binding and as a multi-stroke prefix")
          },
          LG = (GG, wG, LG, yG, kG) => {
            var UG, YG;
            let VG = ZG[GG] || (ZG[GG] = Object.create(null)),
              pG = wG.split(/ (?!$)/).map((GG => function(GG, bG) {
                const ZG = GG.split(/-(?!$)/);
                let wG, SG, LG, yG, kG = ZG[ZG.length - 1];
                "Space" == kG && (kG = " ");
                for (let UG = 0; UG < ZG.length - 1; ++UG) {
                  const GG = ZG[UG];
                  if (/^(cmd|meta|m)$/i.test(GG)) yG = !0;
                  else if (/^a(lt)?$/i.test(GG)) wG = !0;
                  else if (/^(c|ctrl|control)$/i.test(GG)) SG = !0;
                  else if (/^s(hift)?$/i.test(GG)) LG = !0;
                  else {
                    if (!/^mod$/i.test(GG)) throw new Error("Unrecognized modifier name: " + GG);
                    "mac" == bG ? yG = !0 : SG = !0
                  }
                }
                return wG && (kG = "Alt-" + kG), SG && (kG = "Ctrl-" + kG), yG && (kG = "Meta-" + kG), LG && (kG = "Shift-" + kG), kG
              }(GG, bG)));
            for (let bG = 1; bG < pG.length; bG++) {
              let ZG = pG.slice(0, bG).join(" ");
              SG(ZG, !0), VG[ZG] || (VG[ZG] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [bG => {
                  let wG = sS = {
                    view: bG,
                    prefix: ZG,
                    scope: GG
                  };
                  return setTimeout((() => {
                    sS == wG && (sS = null)
                  }), qS), !0
                }]
              })
            }
            let fG = pG.join(" ");
            SG(fG, !1);
            let QG = VG[fG] || (VG[fG] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (YG = null === (UG = VG._any) || void 0 === UG ? void 0 : UG.run) || void 0 === YG ? void 0 : YG.slice()) || []
            });
            LG && QG.run.push(LG), yG && (QG.preventDefault = !0), kG && (QG.stopPropagation = !0)
          };
        for (let yG of GG) {
          let GG = yG.scope ? yG.scope.split(" ") : ["editor"];
          if (yG.any)
            for (let bG of GG) {
              let GG = ZG[bG] || (ZG[bG] = Object.create(null));
              GG._any || (GG._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: wG
              } = yG;
              for (let bG in GG) GG[bG].run.push((GG => wG(GG, nS)))
            }
          let wG = yG[bG] || yG.key;
          if (wG)
            for (let bG of GG) LG(bG, wG, yG.run, yG.preventDefault, yG.stopPropagation), yG.shift && LG(bG, "Shift-" + wG, yG.shift, yG.preventDefault, yG.stopPropagation)
        }
        return ZG
      }(bG.reduce(((GG, bG) => GG.concat(bG)), []))), ZG
    }

    function AS(GG, bG, ZG) {
      return gS(MS(GG.state), bG, GG, ZG)
    }
    let sS = null;
    const qS = 4e3;
    let nS = null;

    function gS(GG, bG, ZG, SG) {
      nS = bG;
      let YG = function(GG) {
          var bG = !(kG && GG.metaKey && GG.shiftKey && !GG.ctrlKey && !GG.altKey || UG && GG.shiftKey && GG.key && 1 == GG.key.length || "Unidentified" == GG.key) && GG.key || (GG.shiftKey ? yG : LG)[GG.keyCode] || GG.key || "Unidentified";
          return "Esc" == bG && (bG = "Escape"), "Del" == bG && (bG = "Delete"), "Left" == bG && (bG = "ArrowLeft"), "Up" == bG && (bG = "ArrowUp"), "Right" == bG && (bG = "ArrowRight"), "Down" == bG && (bG = "ArrowDown"), bG
        }(bG),
        VG = (0, wG.Q)(YG, 0),
        pG = (0, wG.R)(VG) == YG.length && " " != YG,
        fG = "",
        QG = !1,
        KG = !1,
        hG = !1;
      sS && sS.view == ZG && sS.scope == SG && (fG = sS.prefix + " ", Qw.indexOf(bG.keyCode) < 0 && (KG = !0, sS = null));
      let dG, JG, rG = new Set,
        zG = GG => {
          if (GG) {
            for (let bG of GG.run)
              if (!rG.has(bG) && (rG.add(bG), bG(ZG))) return GG.stopPropagation && (hG = !0), !0;
            GG.preventDefault && (GG.stopPropagation && (hG = !0), KG = !0)
          }
          return !1
        },
        EG = GG[SG];
      return EG && (zG(EG[fG + cS(YG, bG, !pG)]) ? QG = !0 : !pG || !(bG.altKey || bG.metaKey || bG.ctrlKey) || uG.windows && bG.ctrlKey && bG.altKey || uG.mac && bG.altKey && !bG.ctrlKey && !bG.metaKey || !(dG = LG[bG.keyCode]) || dG == YG ? pG && bG.shiftKey && zG(EG[fG + cS(YG, bG, !0)]) && (QG = !0) : (zG(EG[fG + cS(dG, bG, !0)]) || bG.shiftKey && (JG = yG[bG.keyCode]) != YG && JG != dG && zG(EG[fG + cS(JG, bG, !1)])) && (QG = !0), !QG && zG(EG._any) && (QG = !0)), KG && (QG = !0), QG && hG && bG.stopPropagation(), nS = null, QG
    }
    class eS {
      constructor(GG, bG, ZG, wG, SG) {
        this.className = GG, this.left = bG, this.top = ZG, this.width = wG, this.height = SG
      }
      draw() {
        let GG = document.createElement("div");
        return GG.className = this.className, this.adjust(GG), GG
      }
      update(GG, bG) {
        return bG.className == this.className && (this.adjust(GG), !0)
      }
      adjust(GG) {
        GG.style.left = this.left + "px", GG.style.top = this.top + "px", null != this.width && (GG.style.width = this.width + "px"), GG.style.height = this.height + "px"
      }
      eq(GG) {
        return this.left == GG.left && this.top == GG.top && this.width == GG.width && this.height == GG.height && this.className == GG.className
      }
      static forRange(GG, bG, ZG) {
        if (ZG.empty) {
          let wG = GG.coordsAtPos(ZG.head, ZG.assoc || 1);
          if (!wG) return [];
          let SG = RS(GG);
          return [new eS(bG, wG.left - SG.left, wG.top - SG.top, null, wG.bottom - wG.top)]
        }
        return function(GG, bG, ZG) {
          if (ZG.to <= GG.viewport.from || ZG.from >= GG.viewport.to) return [];
          let wG = Math.max(ZG.from, GG.viewport.from),
            SG = Math.min(ZG.to, GG.viewport.to),
            LG = GG.textDirection == Yb.LTR,
            yG = GG.contentDOM,
            kG = yG.getBoundingClientRect(),
            UG = RS(GG),
            YG = yG.querySelector(".cm-line"),
            VG = YG && window.getComputedStyle(YG),
            pG = kG.left + (VG ? parseInt(VG.paddingLeft) + Math.min(0, parseInt(VG.textIndent)) : 0),
            fG = kG.right - (VG ? parseInt(VG.paddingRight) : 0),
            QG = gZ(GG, wG, 1),
            KG = gZ(GG, SG, -1),
            hG = QG.type == vG.Text ? QG : null,
            dG = KG.type == vG.Text ? KG : null;
          hG && (GG.lineWrapping || QG.widgetLineBreaks) && (hG = TS(GG, wG, 1, hG));
          dG && (GG.lineWrapping || KG.widgetLineBreaks) && (dG = TS(GG, SG, -1, dG));
          if (hG && dG && hG.from == dG.from && hG.to == dG.to) return rG(zG(ZG.from, ZG.to, hG));
          {
            let bG = hG ? zG(ZG.from, null, hG) : EG(QG, !1),
              wG = dG ? zG(null, ZG.to, dG) : EG(KG, !0),
              SG = [];
            return (hG || QG).to < (dG || KG).from - (hG && dG ? 1 : 0) || QG.widgetLineBreaks > 1 && bG.bottom + GG.defaultLineHeight / 2 < wG.top ? SG.push(JG(pG, bG.bottom, fG, wG.top)) : bG.bottom < wG.top && GG.elementAtHeight((bG.bottom + wG.top) / 2).type == vG.Text && (bG.bottom = wG.top = (bG.bottom + wG.top) / 2), rG(bG).concat(SG).concat(rG(wG))
          }

          function JG(GG, ZG, wG, SG) {
            return new eS(bG, GG - UG.left, ZG - UG.top, Math.max(0, wG - GG), SG - ZG)
          }

          function rG(GG) {
            let {
              top: bG,
              bottom: ZG,
              horizontal: wG
            } = GG, SG = [];
            for (let LG = 0; LG < wG.length; LG += 2) SG.push(JG(wG[LG], bG, wG[LG + 1], ZG));
            return SG
          }

          function zG(bG, ZG, wG) {
            let SG = 1e9,
              yG = -1e9,
              kG = [];

            function UG(bG, ZG, UG, YG, VG) {
              let QG = GG.coordsAtPos(bG, bG == wG.to ? -2 : 2),
                KG = GG.coordsAtPos(UG, UG == wG.from ? 2 : -2);
              QG && KG && (SG = Math.min(QG.top, KG.top, SG), yG = Math.max(QG.bottom, KG.bottom, yG), VG == Yb.LTR ? kG.push(LG && ZG ? pG : QG.left, LG && YG ? fG : KG.right) : kG.push(!LG && YG ? pG : KG.left, !LG && ZG ? fG : QG.right))
            }
            let YG = null !== bG && void 0 !== bG ? bG : wG.from,
              VG = null !== ZG && void 0 !== ZG ? ZG : wG.to;
            for (let LG of GG.SGG)
              if (LG.to > YG && LG.from < VG)
                for (let wG = Math.max(LG.from, YG), SG = Math.min(LG.to, VG);;) {
                  let LG = GG.state.doc.lineAt(wG);
                  for (let yG of GG.bidiSpans(LG)) {
                    let GG = yG.from + LG.from,
                      kG = yG.to + LG.from;
                    if (GG >= SG) break;
                    kG > wG && UG(Math.max(GG, wG), null == bG && GG <= YG, Math.min(kG, SG), null == ZG && kG >= VG, yG.dir)
                  }
                  if (wG = LG.to + 1, wG >= SG) break
                }
            return 0 == kG.length && UG(YG, null == bG, VG, null == ZG, GG.textDirection), {
              top: SG,
              bottom: yG,
              horizontal: kG
            }
          }

          function EG(GG, bG) {
            let ZG = kG.top + (bG ? GG.top : GG.bottom);
            return {
              top: ZG,
              bottom: ZG,
              horizontal: []
            }
          }
        }(GG, bG, ZG)
      }
    }

    function RS(GG) {
      let bG = GG.scrollDOM.getBoundingClientRect();
      return {
        left: (GG.textDirection == Yb.LTR ? bG.left : bG.right - GG.scrollDOM.clientWidth * GG.scaleX) - GG.scrollDOM.scrollLeft * GG.scaleX,
        top: bG.top - GG.scrollDOM.scrollTop * GG.scaleY
      }
    }

    function TS(GG, bG, ZG, wG) {
      let SG = GG.coordsAtPos(bG, 2 * ZG);
      if (!SG) return wG;
      let LG = GG.dom.getBoundingClientRect(),
        yG = (SG.top + SG.bottom) / 2,
        kG = GG.posAtCoords({
          x: LG.left + 1,
          y: yG
        }),
        UG = GG.posAtCoords({
          x: LG.right - 1,
          y: yG
        });
      return null == kG || null == UG ? wG : {
        from: Math.max(wG.from, Math.min(kG, UG)),
        to: Math.min(wG.to, Math.max(kG, UG))
      }
    }
    class HS {
      constructor(GG, bG) {
        this.view = GG, this.layer = bG, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = GG.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), bG.above && this.dom.classList.add("cm-layer-above"), bG.class && this.dom.classList.add(bG.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(GG.state), GG.requestMeasure(this.measureReq), bG.mount && bG.mount(this.dom, GG)
      }
      update(GG) {
        GG.startState.facet(tS) != GG.state.facet(tS) && this.setOrder(GG.state), (this.layer.update(GG, this.dom) || GG.geometryChanged) && (this.scale(), GG.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(GG) {
        !1 !== this.layer.updateOnDocViewUpdate && GG.requestMeasure(this.measureReq)
      }
      setOrder(GG) {
        let bG = 0,
          ZG = GG.facet(tS);
        for (; bG < ZG.length && ZG[bG] != this.layer;) bG++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - bG)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: GG,
          scaleY: bG
        } = this.view;
        GG == this.scaleX && bG == this.scaleY || (this.scaleX = GG, this.scaleY = bG, this.dom.style.transform = `scale(${1/GG}, ${1/bG})`)
      }
      draw(GG) {
        if (GG.length != this.drawn.length || GG.some(((GG, bG) => {
            return ZG = GG, wG = this.drawn[bG], !(ZG.constructor == wG.constructor && ZG.eq(wG));
            var ZG, wG
          }))) {
          let bG = this.dom.firstChild,
            ZG = 0;
          for (let wG of GG) wG.update && bG && wG.constructor && this.drawn[ZG].constructor && wG.update(bG, this.drawn[ZG]) ? (bG = bG.nextSibling, ZG++) : this.dom.insertBefore(wG.draw(), bG);
          for (; bG;) {
            let GG = bG.nextSibling;
            bG.remove(), bG = GG
          }
          this.drawn = GG, uG.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const tS = wG.m.define();

    function DS(GG) {
      return [Nb.define((bG => new HS(bG, GG))), tS.of(GG)]
    }
    const NS = wG.m.define({
      combine: GG => (0, wG.S)(GG, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (GG, bG) => Math.min(GG, bG),
        drawRangeCursor: (GG, bG) => GG || bG
      })
    });

    function OS() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [NS.of(GG), BS, bL, ZL, qb.of(!0)]
    }

    function xS(GG) {
      return GG.startState.facet(NS) != GG.state.facet(NS)
    }
    const BS = DS({
      above: !0,
      markers(GG) {
        let {
          state: bG
        } = GG, ZG = bG.facet(NS), SG = [];
        for (let LG of bG.selection.Bh) {
          let yG = LG == bG.selection.main;
          if (LG.empty || ZG.drawRangeCursor && !(yG && uG.ios && ZG.iosSelectionHandles)) {
            let bG = yG ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              ZG = LG.empty ? LG : wG.j.cursor(LG.head, LG.assoc);
            for (let wG of eS.forRange(GG, bG, ZG)) SG.push(wG)
          }
        }
        return SG
      },
      update(GG, bG) {
        GG.transactions.some((GG => GG.selection)) && (bG.style.animationName = "cm-blink" == bG.style.animationName ? "cm-blink2" : "cm-blink");
        let ZG = xS(GG);
        return ZG && GL(GG.state, bG), GG.docChanged || GG.selectionSet || ZG
      },
      mount(GG, bG) {
        GL(bG.state, GG)
      },
      class: "cm-cursorLayer"
    });

    function GL(GG, bG) {
      bG.style.animationDuration = GG.facet(NS).cursorBlinkRate + "ms"
    }
    const bL = DS({
        above: !1,
        markers(GG) {
          let bG = [],
            {
              main: ZG,
              Bh: SG
            } = GG.state.selection;
          for (let wG of SG)
            if (!wG.empty)
              for (let ZG of eS.forRange(GG, "cm-selectionBackground", wG)) bG.push(ZG);
          if (uG.ios && !ZG.empty && GG.state.facet(NS).iosSelectionHandles) {
            for (let SG of eS.forRange(GG, "cm-selectionHandle cm-selectionHandle-start", wG.j.cursor(ZG.from, 1))) bG.push(SG);
            for (let SG of eS.forRange(GG, "cm-selectionHandle cm-selectionHandle-end", wG.j.cursor(ZG.to, 1))) bG.push(SG)
          }
          return bG
        },
        update: (GG, bG) => GG.docChanged || GG.selectionSet || GG.viewportChanged || xS(GG),
        class: "cm-selectionLayer"
      }),
      ZL = wG.s.highest(WS.theme({
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
      wL = wG.C.define({
        map: (GG, bG) => null == GG ? null : bG.mapPos(GG)
      }),
      SL = wG.G.define({
        create: () => null,
        update: (GG, bG) => (null != GG && (GG = bG.changes.mapPos(GG)), bG.effects.reduce(((GG, bG) => bG.is(wL) ? bG.value : GG), GG))
      }),
      LL = Nb.fromClass(class {
        constructor(GG) {
          this.view = GG, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(GG) {
          var bG;
          let ZG = GG.state.field(SL);
          null == ZG ? null != this.cursor && (null === (bG = this.cursor) || void 0 === bG || bG.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (GG.startState.field(SL) != ZG || GG.docChanged || GG.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: GG
          } = this, bG = GG.state.field(SL), ZG = null != bG && GG.coordsAtPos(bG);
          if (!ZG) return null;
          let wG = GG.scrollDOM.getBoundingClientRect();
          return {
            left: ZG.left - wG.left + GG.scrollDOM.scrollLeft * GG.scaleX,
            top: ZG.top - wG.top + GG.scrollDOM.scrollTop * GG.scaleY,
            height: ZG.bottom - ZG.top
          }
        }
        drawCursor(GG) {
          if (this.cursor) {
            let {
              scaleX: bG,
              scaleY: ZG
            } = this.view;
            GG ? (this.cursor.style.left = GG.left / bG + "px", this.cursor.style.top = GG.top / ZG + "px", this.cursor.style.height = GG.height / ZG + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(GG) {
          this.view.state.field(SL) != GG && this.view.dispatch({
            effects: wL.of(GG)
          })
        }
      }, {
        eventObservers: {
          dragover(GG) {
            this.setDropPos(this.view.posAtCoords({
              x: GG.clientX,
              y: GG.clientY
            }))
          },
          dragleave(GG) {
            GG.target != this.view.contentDOM && this.view.contentDOM.contains(GG.relatedTarget) || this.setDropPos(null)
          },
          dragend() {
            this.setDropPos(null)
          },
          drop() {
            this.setDropPos(null)
          }
        }
      });

    function yL() {
      return [SL, LL]
    }

    function kL(GG, bG, ZG, wG, SG) {
      bG.lastIndex = 0;
      for (let LG, yG = GG.iterRange(ZG, wG), kG = ZG; !yG.next().done; kG += yG.value.length)
        if (!yG.lineBreak)
          for (; LG = bG.exec(yG.value);) SG(kG + LG.index, LG)
    }
    class UL {
      constructor(GG) {
        const {
          regexp: bG,
          decoration: ZG,
          decorate: wG,
          boundary: SG,
          maxLength: LG = 1e3
        } = GG;
        if (!bG.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = bG, wG) this.addMatch = (GG, bG, ZG, SG) => wG(SG, ZG, ZG + GG[0].length, GG, bG);
        else if ("function" == typeof ZG) this.addMatch = (GG, bG, wG, SG) => {
          let LG = ZG(GG, bG, wG);
          LG && SG(wG, wG + GG[0].length, LG)
        };
        else {
          if (!ZG) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (GG, bG, wG, SG) => SG(wG, wG + GG[0].length, ZG)
        }
        this.boundary = SG, this.maxLength = LG
      }
      createDeco(GG) {
        let bG = new wG.v,
          ZG = bG.add.bind(bG);
        for (let {
            from: wG,
            to: SG
          }
          of
          function(GG, bG) {
            let ZG = GG.SGG;
            if (1 == ZG.length && ZG[0].from == GG.viewport.from && ZG[0].to == GG.viewport.to) return ZG;
            let wG = [];
            for (let {
                from: SG,
                to: LG
              }
              of ZG) SG = Math.max(GG.state.doc.lineAt(SG).from, SG - bG), LG = Math.min(GG.state.doc.lineAt(LG).to, LG + bG), wG.length && wG[wG.length - 1].to >= SG ? wG[wG.length - 1].to = LG : wG.push({
              from: SG,
              to: LG
            });
            return wG
          }(GG, this.maxLength)) kL(GG.state.doc, this.regexp, wG, SG, ((bG, wG) => this.addMatch(wG, GG, bG, ZG)));
        return bG.finish()
      }
      updateDeco(GG, bG) {
        let ZG = 1e9,
          wG = -1;
        return GG.docChanged && GG.changes.iterChanges(((bG, SG, LG, yG) => {
          yG >= GG.view.viewport.from && LG <= GG.view.viewport.to && (ZG = Math.min(LG, ZG), wG = Math.max(yG, wG))
        })), GG.viewportMoved || wG - ZG > 1e3 ? this.createDeco(GG.view) : wG > -1 ? this.updateRange(GG.view, bG.map(GG.changes), ZG, wG) : bG
      }
      updateRange(GG, bG, ZG, wG) {
        for (let SG of GG.SGG) {
          let LG = Math.max(SG.from, ZG),
            yG = Math.min(SG.to, wG);
          if (yG >= LG) {
            let ZG = GG.state.doc.lineAt(LG),
              wG = ZG.to < yG ? GG.state.doc.lineAt(yG) : ZG,
              kG = Math.max(SG.from, ZG.from),
              UG = Math.min(SG.to, wG.to);
            if (this.boundary) {
              for (; LG > ZG.from; LG--)
                if (this.boundary.test(ZG.text[LG - 1 - ZG.from])) {
                  kG = LG;
                  break
                } for (; yG < wG.to; yG++)
                if (this.boundary.test(wG.text[yG - wG.from])) {
                  UG = yG;
                  break
                }
            }
            let YG, VG = [],
              pG = (GG, bG, ZG) => VG.push(ZG.range(GG, bG));
            if (ZG == wG)
              for (this.regexp.lastIndex = kG - ZG.from;
                (YG = this.regexp.exec(ZG.text)) && YG.index < UG - ZG.from;) this.addMatch(YG, GG, YG.index + ZG.from, pG);
            else kL(GG.state.doc, this.regexp, kG, UG, ((bG, ZG) => this.addMatch(ZG, GG, bG, pG)));
            bG = bG.update({
              filterFrom: kG,
              filterTo: UG,
              filter: (GG, bG) => GG < kG || bG > UG,
              add: VG
            })
          }
        }
        return bG
      }
    }
    const YL = null != /x/.unicode ? "gu" : "g",
      VL = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", YL),
      pL = {
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
    let fL = null;
    const QL = wG.m.define({
      combine(GG) {
        let bG = (0, wG.S)(GG, {
          render: null,
          specialChars: VL,
          addSpecialChars: null
        });
        return (bG.replaceTabs = ! function() {
          var GG;
          if (null == fL && "undefined" != typeof document && document.body) {
            let bG = document.body.style;
            fL = null != (null !== (GG = bG.tabSize) && void 0 !== GG ? GG : bG.MozTabSize)
          }
          return fL || !1
        }()) && (bG.specialChars = new RegExp("\t|" + bG.specialChars.source, YL)), bG.addSpecialChars && (bG.specialChars = new RegExp(bG.specialChars.source + "|" + bG.addSpecialChars.source, YL)), bG
      }
    });

    function KL() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [QL.of(GG), hL || (hL = Nb.fromClass(class {
        constructor(GG) {
          this.view = GG, this.Yw = aG.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(GG.state.facet(QL)), this.Yw = this.decorator.createDeco(GG)
        }
        makeDecorator(GG) {
          return new UL({
            regexp: GG.specialChars,
            decoration: (bG, ZG, SG) => {
              let {
                doc: LG
              } = ZG.state, yG = (0, wG.Q)(bG[0], 0);
              if (9 == yG) {
                let GG = LG.lineAt(SG),
                  bG = ZG.state.tabSize,
                  yG = (0, wG.T)(GG.text, bG, SG - GG.from);
                return aG.replace({
                  widget: new JL((bG - yG % bG) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[yG] || (this.decorationCache[yG] = aG.replace({
                widget: new dL(GG, yG)
              }))
            },
            boundary: GG.replaceTabs ? void 0 : /[^]/
          })
        }
        update(GG) {
          let bG = GG.state.facet(QL);
          GG.startState.facet(QL) != bG ? (this.decorator = this.makeDecorator(bG), this.Yw = this.decorator.createDeco(GG.view)) : this.Yw = this.decorator.updateDeco(GG, this.Yw)
        }
      }, {
        Yw: GG => GG.Yw
      }))]
    }
    let hL = null;
    class dL extends FG {
      constructor(GG, bG) {
        super(), this.options = GG, this.code = bG
      }
      eq(GG) {
        return GG.code == this.code
      }
      toDOM(GG) {
        let bG = function(GG) {
            return GG >= 32 ? "\u2022" : 10 == GG ? "\u2424" : String.fromCharCode(9216 + GG)
          }(this.code),
          ZG = GG.state.phrase("Control character") + " " + (pL[this.code] || "0x" + this.code.toString(16)),
          wG = this.options.render && this.options.render(this.code, ZG, bG);
        if (wG) return wG;
        let SG = document.createElement("span");
        return SG.textContent = bG, SG.title = ZG, SG.setAttribute("aria-label", ZG), SG.className = "cm-specialChar", SG
      }
      ignoreEvent() {
        return !1
      }
    }
    class JL extends FG {
      constructor(GG) {
        super(), this.width = GG
      }
      eq(GG) {
        return GG.width == this.width
      }
      toDOM() {
        let GG = document.createElement("span");
        return GG.textContent = "\t", GG.className = "cm-tab", GG.style.width = this.width + "px", GG
      }
      ignoreEvent() {
        return !1
      }
    }

    function rL() {
      return EL
    }
    const zL = aG.line({
        class: "cm-activeLine"
      }),
      EL = Nb.fromClass(class {
        constructor(GG) {
          this.Yw = this.getDeco(GG)
        }
        update(GG) {
          (GG.docChanged || GG.selectionSet) && (this.Yw = this.getDeco(GG.view))
        }
        getDeco(GG) {
          let bG = -1,
            ZG = [];
          for (let wG of GG.state.selection.Bh) {
            let SG = GG.lineBlockAt(wG.head);
            SG.from > bG && (ZG.push(zL.range(SG.from)), bG = SG.from)
          }
          return aG.set(ZG)
        }
      }, {
        Yw: GG => GG.Yw
      });
    class oL extends FG {
      constructor(GG) {
        super(), this.content = GG
      }
      toDOM(GG) {
        let bG = document.createElement("span");
        return bG.className = "cm-placeholder", bG.style.pointerEvents = "none", bG.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(GG) : this.content.cloneNode(!0)), bG.setAttribute("aria-hidden", "true"), bG
      }
      coordsAt(GG) {
        let bG = GG.firstChild ? gG(GG.firstChild) : [];
        if (!bG.length) return null;
        let ZG = window.getComputedStyle(GG.parentNode),
          wG = DG(bG[0], "rtl" != ZG.direction),
          SG = parseInt(ZG.lineHeight);
        return wG.bottom - wG.top > 1.5 * SG ? {
          left: wG.left,
          right: wG.right,
          top: wG.top,
          bottom: wG.top + SG
        } : wG
      }
      ignoreEvent() {
        return !1
      }
    }

    function XL(GG) {
      let bG = Nb.fromClass(class {
        constructor(bG) {
          this.view = bG, this.placeholder = GG ? aG.set([aG.widget({
            widget: new oL(GG),
            side: 1
          }).range(0)]) : aG.none
        }
        get Yw() {
          return this.view.state.doc.length ? aG.none : this.placeholder
        }
      }, {
        Yw: GG => GG.Yw
      });
      return "string" == typeof GG ? [bG, WS.contentAttributes.of({
        "aria-placeholder": GG
      })] : bG
    }
    const uL = 2e3;

    function iL(GG, bG) {
      let ZG = GG.posAtCoords({
          x: bG.clientX,
          y: bG.clientY
        }, !1),
        SG = GG.state.doc.lineAt(ZG),
        LG = ZG - SG.from,
        yG = LG > uL ? -1 : LG == SG.length ? function(GG, bG) {
          let ZG = GG.coordsAtPos(GG.viewport.from);
          return ZG ? Math.round(Math.abs((ZG.left - bG) / GG.defaultCharacterWidth)) : -1
        }(GG, bG.clientX) : (0, wG.T)(SG.text, GG.state.tabSize, ZG - SG.from);
      return {
        line: SG.number,
        col: yG,
        off: LG
      }
    }

    function CL(GG, bG) {
      let ZG = iL(GG, bG),
        SG = GG.state.selection;
      return ZG ? {
        update(GG) {
          if (GG.docChanged) {
            let bG = GG.changes.mapPos(GG.startState.doc.line(ZG.line).from),
              wG = GG.state.doc.lineAt(bG);
            ZG = {
              line: wG.number,
              col: ZG.col,
              off: Math.min(ZG.off, wG.length)
            }, SG = SG.map(GG.changes)
          }
        },
        get(bG, LG, yG) {
          let kG = iL(GG, bG);
          if (!kG) return SG;
          let UG = function(GG, bG, ZG) {
            let SG = Math.min(bG.line, ZG.line),
              LG = Math.max(bG.line, ZG.line),
              yG = [];
            if (bG.off > uL || ZG.off > uL || bG.col < 0 || ZG.col < 0) {
              let kG = Math.min(bG.off, ZG.off),
                UG = Math.max(bG.off, ZG.off);
              for (let bG = SG; bG <= LG; bG++) {
                let ZG = GG.doc.line(bG);
                ZG.length <= UG && yG.push(wG.j.range(ZG.from + kG, ZG.to + UG))
              }
            } else {
              let kG = Math.min(bG.col, ZG.col),
                UG = Math.max(bG.col, ZG.col);
              for (let bG = SG; bG <= LG; bG++) {
                let ZG = GG.doc.line(bG),
                  SG = (0, wG._)(ZG.text, kG, GG.tabSize, !0);
                if (SG < 0) yG.push(wG.j.cursor(ZG.to));
                else {
                  let bG = (0, wG._)(ZG.text, UG, GG.tabSize);
                  yG.push(wG.j.range(ZG.from + SG, ZG.from + bG))
                }
              }
            }
            return yG
          }(GG.state, ZG, kG);
          return UG.length ? yG ? wG.j.create(UG.concat(SG.Bh)) : wG.j.create(UG) : SG
        }
      } : null
    }

    function WL(GG) {
      let bG = (null === GG || void 0 === GG ? void 0 : GG.eventFilter) || (GG => GG.altKey && 0 == GG.button);
      return WS.mouseSelectionStyle.of(((GG, ZG) => bG(ZG) ? CL(GG, ZG) : null))
    }
    const mL = {
        Alt: [18, GG => !!GG.altKey],
        Control: [17, GG => !!GG.ctrlKey],
        Shift: [16, GG => !!GG.shiftKey],
        Meta: [91, GG => !!GG.metaKey]
      },
      IL = {
        style: "cursor: crosshair"
      };

    function FL() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [bG, ZG] = mL[GG.key || "Alt"],
        wG = Nb.fromClass(class {
          constructor(GG) {
            this.view = GG, this.isDown = !1
          }
          set(GG) {
            this.isDown != GG && (this.isDown = GG, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(GG) {
              this.set(GG.keyCode == bG || ZG(GG))
            },
            keyup(GG) {
              GG.keyCode != bG && ZG(GG) || this.set(!1)
            },
            mousemove(GG) {
              this.set(ZG(GG))
            }
          }
        });
      return [wG, WS.contentAttributes.of((GG => {
        var bG;
        return (null === (bG = GG.plugin(wG)) || void 0 === bG ? void 0 : bG.isDown) ? IL : null
      }))]
    }
    const vL = "-10000px";
    class aL {
      constructor(GG, bG, ZG, wG) {
        this.facet = bG, this.createTooltipView = ZG, this.removeTooltipView = wG, this.input = GG.state.facet(bG), this.tooltips = this.input.filter((GG => GG));
        let SG = null;
        this.tooltipViews = this.tooltips.map((GG => SG = ZG(GG, SG)))
      }
      update(GG, bG) {
        var ZG;
        let wG = GG.state.facet(this.facet),
          SG = wG.filter((GG => GG));
        if (wG === this.input) {
          for (let bG of this.tooltipViews) bG.update && bG.update(GG);
          return !1
        }
        let LG = [],
          yG = bG ? [] : null;
        for (let kG = 0; kG < SG.length; kG++) {
          let ZG = SG[kG],
            wG = -1;
          if (ZG) {
            for (let GG = 0; GG < this.tooltips.length; GG++) {
              let bG = this.tooltips[GG];
              bG && bG.create == ZG.create && (wG = GG)
            }
            if (wG < 0) LG[kG] = this.createTooltipView(ZG, kG ? LG[kG - 1] : null), yG && (yG[kG] = !!ZG.above);
            else {
              let ZG = LG[kG] = this.tooltipViews[wG];
              yG && (yG[kG] = bG[wG]), ZG.update && ZG.update(GG)
            }
          }
        }
        for (let kG of this.tooltipViews) LG.indexOf(kG) < 0 && (this.removeTooltipView(kG), null === (ZG = kG.destroy) || void 0 === ZG || ZG.call(kG));
        return bG && (yG.forEach(((GG, ZG) => bG[ZG] = GG)), bG.length = yG.length), this.input = wG, this.tooltips = SG, this.tooltipViews = LG, !0
      }
    }

    function cL(GG) {
      let bG = GG.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: bG.clientHeight,
        right: bG.clientWidth
      }
    }
    const lL = wG.m.define({
        combine: GG => {
          var bG, ZG, wG;
          return {
            position: uG.ios ? "absolute" : (null === (bG = GG.find((GG => GG.position))) || void 0 === bG ? void 0 : bG.position) || "fixed",
            parent: (null === (ZG = GG.find((GG => GG.parent))) || void 0 === ZG ? void 0 : ZG.parent) || null,
            tooltipSpace: (null === (wG = GG.find((GG => GG.tooltipSpace))) || void 0 === wG ? void 0 : wG.tooltipSpace) || cL
          }
        }
      }),
      jL = new WeakMap,
      PL = Nb.fromClass(class {
        constructor(GG) {
          this.view = GG, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let bG = GG.state.facet(lL);
          this.position = bG.position, this.parent = bG.parent, this.classes = GG.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new aL(GG, qL, ((GG, bG) => this.createTooltip(GG, bG)), (GG => {
            this.resizeObserver && this.resizeObserver.unobserve(GG.dom), GG.dom.remove()
          })), this.above = this.manager.tooltips.map((GG => !!GG.above)), this.intersectionObserver = "function" == typeof IntersectionObserver ? new IntersectionObserver((GG => {
            Date.now() > this.lastTransaction - 50 && GG.length > 0 && GG[GG.length - 1].intersectionRatio < 1 && this.measureSoon()
          }), {
            threshold: [1]
          }) : null, this.observeIntersection(), GG.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure()
        }
        createContainer() {
          this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom
        }
        observeIntersection() {
          if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            for (let GG of this.manager.tooltipViews) this.intersectionObserver.observe(GG.dom)
          }
        }
        measureSoon() {
          this.measureTimeout < 0 && (this.measureTimeout = setTimeout((() => {
            this.measureTimeout = -1, this.maybeMeasure()
          }), 50))
        }
        update(GG) {
          GG.transactions.length && (this.lastTransaction = Date.now());
          let bG = this.manager.update(GG, this.above);
          bG && this.observeIntersection();
          let ZG = bG || GG.geometryChanged,
            wG = GG.state.facet(lL);
          if (wG.position != this.position && !this.madeAbsolute) {
            this.position = wG.position;
            for (let GG of this.manager.tooltipViews) GG.dom.style.position = this.position;
            ZG = !0
          }
          if (wG.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = wG.parent, this.createContainer();
            for (let GG of this.manager.tooltipViews) this.container.appendChild(GG.dom);
            ZG = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          ZG && this.maybeMeasure()
        }
        createTooltip(GG, bG) {
          let ZG = GG.create(this.view),
            wG = bG ? bG.dom : null;
          if (ZG.dom.classList.add("cm-tooltip"), GG.arrow && !ZG.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let GG = document.createElement("div");
            GG.className = "cm-tooltip-arrow", ZG.dom.appendChild(GG)
          }
          return ZG.dom.style.position = this.position, ZG.dom.style.top = vL, ZG.dom.style.left = "0px", this.container.insertBefore(ZG.dom, wG), ZG.mount && ZG.mount(this.view), this.resizeObserver && this.resizeObserver.observe(ZG.dom), ZG
        }
        destroy() {
          var GG, bG, ZG;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let wG of this.manager.tooltipViews) wG.dom.remove(), null === (GG = wG.destroy) || void 0 === GG || GG.call(wG);
          this.parent && this.container.remove(), null === (bG = this.resizeObserver) || void 0 === bG || bG.disconnect(), null === (ZG = this.intersectionObserver) || void 0 === ZG || ZG.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let GG = 1,
            bG = 1,
            ZG = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: GG
            } = this.manager.tooltipViews[0];
            if (uG.safari) {
              let bG = GG.getBoundingClientRect();
              ZG = Math.abs(bG.top + 1e4) > 1 || Math.abs(bG.left) > 1
            } else ZG = !!GG.offsetParent && GG.offsetParent != this.container.ownerDocument.body
          }
          if (ZG || "absolute" == this.position)
            if (this.parent) {
              let ZG = this.parent.getBoundingClientRect();
              ZG.width && ZG.height && (GG = ZG.width / this.parent.offsetWidth, bG = ZG.height / this.parent.offsetHeight)
            } else({
              scaleX: GG,
              scaleY: bG
            } = this.view.viewState);
          let wG = this.view.scrollDOM.getBoundingClientRect(),
            SG = kZ(this.view);
          return {
            visible: {
              left: wG.left + SG.left,
              top: wG.top + SG.top,
              right: wG.right - SG.right,
              bottom: wG.bottom - SG.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((GG, bG) => {
              let ZG = this.manager.tooltipViews[bG];
              return ZG.getCoords ? ZG.getCoords(GG.pos) : this.view.coordsAtPos(GG.pos)
            })),
            size: this.manager.tooltipViews.map((GG => {
              let {
                dom: bG
              } = GG;
              return bG.getBoundingClientRect()
            })),
            space: this.view.state.facet(lL).tooltipSpace(this.view),
            scaleX: GG,
            scaleY: bG,
            makeAbsolute: ZG
          }
        }
        writeMeasure(GG) {
          var bG;
          if (GG.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let GG of this.manager.tooltipViews) GG.dom.style.position = "absolute"
          }
          let {
            visible: ZG,
            space: wG,
            scaleX: SG,
            scaleY: LG
          } = GG, yG = [];
          for (let kG = 0; kG < this.manager.tooltips.length; kG++) {
            let UG = this.manager.tooltips[kG],
              YG = this.manager.tooltipViews[kG],
              {
                dom: VG
              } = YG,
              pG = GG.pos[kG],
              fG = GG.size[kG];
            if (!pG || !1 !== UG.clip && (pG.bottom <= Math.max(ZG.top, wG.top) || pG.top >= Math.min(ZG.bottom, wG.bottom) || pG.right < Math.max(ZG.left, wG.left) - .1 || pG.left > Math.min(ZG.right, wG.right) + .1)) {
              VG.style.top = vL;
              continue
            }
            let QG = UG.arrow ? YG.dom.querySelector(".cm-tooltip-arrow") : null,
              KG = QG ? 7 : 0,
              hG = fG.right - fG.left,
              dG = null !== (bG = jL.get(YG)) && void 0 !== bG ? bG : fG.bottom - fG.top,
              JG = YG.offset || sL,
              rG = this.view.textDirection == Yb.LTR,
              zG = fG.width > wG.right - wG.left ? rG ? wG.left : wG.right - fG.width : rG ? Math.max(wG.left, Math.min(pG.left - (QG ? 14 : 0) + JG.x, wG.right - hG)) : Math.min(Math.max(wG.left, pG.left - hG + (QG ? 14 : 0) - JG.x), wG.right - hG),
              EG = this.above[kG];
            !UG.strictSide && (EG ? pG.top - dG - KG - JG.y < wG.top : pG.bottom + dG + KG + JG.y > wG.bottom) && EG == wG.bottom - pG.bottom > pG.top - wG.top && (EG = this.above[kG] = !EG);
            let oG = (EG ? pG.top - wG.top : wG.bottom - pG.bottom) - KG;
            if (oG < dG && !1 !== YG.resize) {
              if (oG < this.view.defaultLineHeight) {
                VG.style.top = vL;
                continue
              }
              jL.set(YG, dG), VG.style.height = (dG = oG) / LG + "px"
            } else VG.style.height && (VG.style.height = "");
            let XG = EG ? pG.top - dG - KG - JG.y : pG.bottom + KG + JG.y,
              uG = zG + hG;
            if (!0 !== YG.overlap)
              for (let GG of yG) GG.left < uG && GG.right > zG && GG.top < XG + dG && GG.bottom > XG && (XG = EG ? GG.top - dG - 2 - KG : GG.bottom + KG + 2);
            if ("absolute" == this.position ? (VG.style.top = (XG - GG.parent.top) / LG + "px", ML(VG, (zG - GG.parent.left) / SG)) : (VG.style.top = XG / LG + "px", ML(VG, zG / SG)), QG) {
              let GG = pG.left + (rG ? JG.x : -JG.x) - (zG + 14 - 7);
              QG.style.left = GG / SG + "px"
            }!0 !== YG.overlap && yG.push({
              left: zG,
              top: XG,
              right: uG,
              bottom: XG + dG
            }), VG.classList.toggle("cm-tooltip-above", EG), VG.classList.toggle("cm-tooltip-below", !EG), YG.positioned && YG.positioned(GG.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let GG of this.manager.tooltipViews) GG.dom.style.top = vL
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function ML(GG, bG) {
      let ZG = parseInt(GG.style.left, 10);
      (isNaN(ZG) || Math.abs(bG - ZG) > 1) && (GG.style.left = bG + "px")
    }
    const AL = WS.baseTheme({
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
      sL = {
        x: 0,
        y: 0
      },
      qL = wG.m.define({
        enables: [PL, AL]
      }),
      nL = wG.m.define({
        combine: GG => GG.reduce(((GG, bG) => GG.concat(bG)), [])
      });
    class gL {
      static create(GG) {
        return new gL(GG)
      }
      constructor(GG) {
        this.view = GG, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new aL(GG, nL, ((GG, bG) => this.createHostedView(GG, bG)), (GG => GG.dom.remove()))
      }
      createHostedView(GG, bG) {
        let ZG = GG.create(this.view);
        return ZG.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(ZG.dom, bG ? bG.dom.nextSibling : this.dom.firstChild), this.mounted && ZG.mount && ZG.mount(this.view), ZG
      }
      mount(GG) {
        for (let bG of this.manager.tooltipViews) bG.mount && bG.mount(GG);
        this.mounted = !0
      }
      positioned(GG) {
        for (let bG of this.manager.tooltipViews) bG.positioned && bG.positioned(GG)
      }
      update(GG) {
        this.manager.update(GG)
      }
      destroy() {
        var GG;
        for (let bG of this.manager.tooltipViews) null === (GG = bG.destroy) || void 0 === GG || GG.call(bG)
      }
      passProp(GG) {
        let bG;
        for (let ZG of this.manager.tooltipViews) {
          let wG = ZG[GG];
          if (void 0 !== wG)
            if (void 0 === bG) bG = wG;
            else if (bG !== wG) return
        }
        return bG
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
    const eL = qL.compute([nL], (GG => {
      let bG = GG.facet(nL);
      return 0 === bG.length ? null : {
        pos: Math.min(...bG.map((GG => GG.pos))),
        end: Math.max(...bG.map((GG => {
          var bG;
          return null !== (bG = GG.end) && void 0 !== bG ? bG : GG.pos
        }))),
        create: gL.create,
        above: bG[0].above,
        arrow: bG.some((GG => GG.arrow))
      }
    }));
    class RL {
      constructor(GG, bG, ZG, wG, SG) {
        this.view = GG, this.source = bG, this.field = ZG, this.setHover = wG, this.hoverTime = SG, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
          x: 0,
          y: 0,
          target: GG.dom,
          time: 0
        }, this.checkHover = this.checkHover.bind(this), GG.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), GG.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this))
      }
      update() {
        this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout((() => this.startHover()), 20))
      }
      get active() {
        return this.view.state.field(this.field)
      }
      checkHover() {
        if (this.hoverTimeout = -1, this.active.length) return;
        let GG = Date.now() - this.lastMove.time;
        GG < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - GG) : this.startHover()
      }
      startHover() {
        clearTimeout(this.restartTimeout);
        let {
          view: GG,
          lastMove: bG
        } = this, ZG = GG.docView.tile.nearest(bG.target);
        if (!ZG) return;
        let wG, SG = 1;
        if (ZG.isWidget()) wG = ZG.posAtStart;
        else {
          if (wG = GG.posAtCoords(bG), null == wG) return;
          let ZG = GG.coordsAtPos(wG);
          if (!ZG || bG.y < ZG.top || bG.y > ZG.bottom || bG.x < ZG.left - GG.defaultCharacterWidth || bG.x > ZG.right + GG.defaultCharacterWidth) return;
          let LG = GG.bidiSpans(GG.state.doc.lineAt(wG)).find((GG => GG.from <= wG && GG.to >= wG)),
            yG = LG && LG.dir == Yb.RTL ? -1 : 1;
          SG = bG.x < ZG.left ? -yG : yG
        }
        let LG = this.source(GG, wG, SG);
        if (null === LG || void 0 === LG ? void 0 : LG.then) {
          let bG = this.pending = {
            pos: wG
          };
          LG.then((ZG => {
            this.pending == bG && (this.pending = null, !ZG || Array.isArray(ZG) && !ZG.length || GG.dispatch({
              effects: this.setHover.of(Array.isArray(ZG) ? ZG : [ZG])
            }))
          }), (bG => Tb(GG.state, bG, "hover tooltip")))
        } else !LG || Array.isArray(LG) && !LG.length || GG.dispatch({
          effects: this.setHover.of(Array.isArray(LG) ? LG : [LG])
        })
      }
      get tooltip() {
        let GG = this.view.plugin(PL),
          bG = GG ? GG.manager.tooltips.findIndex((GG => GG.create == gL.create)) : -1;
        return bG > -1 ? GG.manager.tooltipViews[bG] : null
      }
      mousemove(GG) {
        var bG, ZG;
        this.lastMove = {
          x: GG.clientX,
          y: GG.clientY,
          target: GG.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: wG,
          tooltip: SG
        } = this;
        if (wG.length && SG && ! function(GG, bG) {
            let ZG, {
              left: wG,
              right: SG,
              top: LG,
              bottom: yG
            } = GG.getBoundingClientRect();
            if (ZG = GG.querySelector(".cm-tooltip-arrow")) {
              let GG = ZG.getBoundingClientRect();
              LG = Math.min(GG.top, LG), yG = Math.max(GG.bottom, yG)
            }
            return bG.clientX >= wG - TL && bG.clientX <= SG + TL && bG.clientY >= LG - TL && bG.clientY <= yG + TL
          }(SG.dom, GG) || this.pending) {
          let {
            pos: SG
          } = wG[0] || this.pending, LG = null !== (ZG = null === (bG = wG[0]) || void 0 === bG ? void 0 : bG.end) && void 0 !== ZG ? ZG : SG;
          (SG == LG ? this.view.posAtCoords(this.lastMove) == SG : function(GG, bG, ZG, wG, SG) {
            let LG = GG.scrollDOM.getBoundingClientRect(),
              yG = GG.documentTop + GG.documentPadding.top + GG.contentHeight;
            if (LG.left > wG || LG.right < wG || LG.top > SG || Math.min(LG.bottom, yG) < SG) return !1;
            let kG = GG.posAtCoords({
              x: wG,
              y: SG
            }, !1);
            return kG >= bG && kG <= ZG
          }(this.view, SG, LG, GG.clientX, GG.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(GG) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: bG
        } = this;
        if (bG.length) {
          let {
            tooltip: bG
          } = this;
          bG && bG.dom.contains(GG.relatedTarget) ? this.watchTooltipLeave(bG.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(GG) {
        let bG = ZG => {
          GG.removeEventListener("mouseleave", bG), this.active.length && !this.view.dom.contains(ZG.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        GG.addEventListener("mouseleave", bG)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const TL = 4;

    function HL(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        ZG = wG.C.define(),
        SG = wG.G.define({
          create: () => [],
          update(GG, SG) {
            if (GG.length && (bG.hideOnChange && (SG.docChanged || SG.selection) ? GG = [] : bG.hideOn && (GG = GG.filter((GG => !bG.hideOn(SG, GG)))), SG.docChanged)) {
              let bG = [];
              for (let ZG of GG) {
                let GG = SG.changes.mapPos(ZG.pos, -1, wG.q.TrackDel);
                if (null != GG) {
                  let wG = Object.assign(Object.create(null), ZG);
                  wG.pos = GG, null != wG.end && (wG.end = SG.changes.mapPos(wG.end)), bG.push(wG)
                }
              }
              GG = bG
            }
            for (let bG of SG.effects) bG.is(ZG) && (GG = bG.value), bG.is(DL) && (GG = []);
            return GG
          },
          provide: GG => nL.from(GG)
        });
      return {
        active: SG,
        extension: [SG, Nb.define((wG => new RL(wG, GG, SG, ZG, bG.hoverTime || 300))), eL]
      }
    }

    function tL(GG, bG) {
      let ZG = GG.plugin(PL);
      if (!ZG) return null;
      let wG = ZG.manager.tooltips.indexOf(bG);
      return wG < 0 ? null : ZG.manager.tooltipViews[wG]
    }
    const DL = wG.C.define();
    const NL = wG.m.define({
      combine(GG) {
        let bG, ZG;
        for (let wG of GG) bG = bG || wG.topContainer, ZG = ZG || wG.bottomContainer;
        return {
          topContainer: bG,
          bottomContainer: ZG
        }
      }
    });

    function OL(GG, bG) {
      let ZG = GG.plugin(xL),
        wG = ZG ? ZG.specs.indexOf(bG) : -1;
      return wG > -1 ? ZG.panels[wG] : null
    }
    const xL = Nb.fromClass(class {
      constructor(GG) {
        this.input = GG.state.facet(by), this.specs = this.input.filter((GG => GG)), this.panels = this.specs.map((bG => bG(GG)));
        let bG = GG.state.facet(NL);
        this.top = new BL(GG, !0, bG.topContainer), this.bottom = new BL(GG, !1, bG.bottomContainer), this.top.sync(this.panels.filter((GG => GG.top))), this.bottom.sync(this.panels.filter((GG => !GG.top)));
        for (let ZG of this.panels) ZG.dom.classList.add("cm-panel"), ZG.mount && ZG.mount()
      }
      update(GG) {
        let bG = GG.state.facet(NL);
        this.top.container != bG.topContainer && (this.top.sync([]), this.top = new BL(GG.view, !0, bG.topContainer)), this.bottom.container != bG.bottomContainer && (this.bottom.sync([]), this.bottom = new BL(GG.view, !1, bG.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let ZG = GG.state.facet(by);
        if (ZG != this.input) {
          let bG = ZG.filter((GG => GG)),
            wG = [],
            SG = [],
            LG = [],
            yG = [];
          for (let ZG of bG) {
            let bG, kG = this.specs.indexOf(ZG);
            kG < 0 ? (bG = ZG(GG.view), yG.push(bG)) : (bG = this.panels[kG], bG.update && bG.update(GG)), wG.push(bG), (bG.top ? SG : LG).push(bG)
          }
          this.specs = bG, this.panels = wG, this.top.sync(SG), this.bottom.sync(LG);
          for (let GG of yG) GG.dom.classList.add("cm-panel"), GG.mount && GG.mount()
        } else
          for (let wG of this.panels) wG.update && wG.update(GG)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: GG => WS.scrollMargins.of((bG => {
        let ZG = bG.plugin(GG);
        return ZG && {
          top: ZG.top.scrollMargin(),
          bottom: ZG.bottom.scrollMargin()
        }
      }))
    });
    class BL {
      constructor(GG, bG, ZG) {
        this.view = GG, this.top = bG, this.container = ZG, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(GG) {
        for (let bG of this.panels) bG.destroy && GG.indexOf(bG) < 0 && bG.destroy();
        this.panels = GG, this.syncDOM()
      }
      syncDOM() {
        if (0 == this.panels.length) return void(this.dom && (this.dom.remove(), this.dom = void 0));
        if (!this.dom) {
          this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
          let GG = this.container || this.view.dom;
          GG.insertBefore(this.dom, this.top ? GG.firstChild : null)
        }
        let GG = this.dom.firstChild;
        for (let bG of this.panels)
          if (bG.dom.parentNode == this.dom) {
            for (; GG != bG.dom;) GG = Gy(GG);
            GG = GG.nextSibling
          } else this.dom.insertBefore(bG.dom, GG);
        for (; GG;) GG = Gy(GG)
      }
      scrollMargin() {
        return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top)
      }
      syncClasses() {
        if (this.container && this.classes != this.view.themeClasses) {
          for (let GG of this.classes.split(" ")) GG && this.container.classList.remove(GG);
          for (let GG of (this.classes = this.view.themeClasses).split(" ")) GG && this.container.classList.add(GG)
        }
      }
    }

    function Gy(GG) {
      let bG = GG.nextSibling;
      return GG.remove(), bG
    }
    const by = wG.m.define({
      enables: xL
    });

    function Zy(GG, bG) {
      let ZG, SG = new Promise((GG => ZG = GG)),
        LG = GG => function(GG, bG, ZG) {
          let wG = bG.content ? bG.content(GG, (() => yG(null))) : null;
          if (!wG) {
            if (wG = (0, pG.c)("form"), bG.input) {
              let GG = (0, pG.c)("input", bG.input);
              /^(text|password|number|email|tel|url)$/.test(GG.type) && GG.classList.add("cm-textfield"), GG.name || (GG.name = "input"), wG.appendChild((0, pG.c)("label", (bG.label || "") + ": ", GG))
            } else wG.appendChild(document.createTextNode(bG.label || ""));
            wG.appendChild(document.createTextNode(" ")), wG.appendChild((0, pG.c)("button", {
              class: "cm-button",
              type: "submit"
            }, bG.submitLabel || "OK"))
          }
          let SG = "FORM" == wG.nodeName ? [wG] : wG.querySelectorAll("form");
          for (let kG = 0; kG < SG.length; kG++) {
            let GG = SG[kG];
            GG.addEventListener("keydown", (bG => {
              27 == bG.keyCode ? (bG.preventDefault(), yG(null)) : 13 == bG.keyCode && (bG.preventDefault(), yG(GG))
            })), GG.addEventListener("submit", (bG => {
              bG.preventDefault(), yG(GG)
            }))
          }
          let LG = (0, pG.c)("div", wG, (0, pG.c)("button", {
            onclick: () => yG(null),
            "aria-label": GG.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          bG.class && (LG.className = bG.class);

          function yG(bG) {
            LG.contains(LG.ownerDocument.activeElement) && GG.focus(), ZG(bG)
          }
          return LG.classList.add("cm-dialog"), {
            dom: LG,
            top: bG.top,
            mount: () => {
              if (bG.focus) {
                let GG;
                GG = "string" == typeof bG.focus ? wG.querySelector(bG.focus) : wG.querySelector("input") || wG.querySelector("button"), GG && "select" in GG ? GG.select() : GG && "focus" in GG && GG.focus()
              }
            }
          }
        }(GG, bG, ZG);
      GG.state.field(wy, !1) ? GG.dispatch({
        effects: Sy.of(LG)
      }) : GG.dispatch({
        effects: wG.C.appendConfig.of(wy.init((() => [LG])))
      });
      let yG = Ly.of(LG);
      return {
        close: yG,
        result: SG.then((bG => ((GG.win.queueMicrotask || (bG => GG.win.setTimeout(bG, 10)))((() => {
          GG.state.field(wy).indexOf(LG) > -1 && GG.dispatch({
            effects: yG
          })
        })), bG)))
      }
    }
    const wy = wG.G.define({
        create: () => [],
        update(GG, bG) {
          for (let ZG of bG.effects) ZG.is(Sy) ? GG = [ZG.value].concat(GG) : ZG.is(Ly) && (GG = GG.filter((GG => GG != ZG.value)));
          return GG
        },
        provide: GG => by.computeN([GG], (bG => bG.field(GG)))
      }),
      Sy = wG.C.define(),
      Ly = wG.C.define();
    class yy extends wG.A {
      compare(GG) {
        return this == GG || this.constructor == GG.constructor && this.eq(GG)
      }
      eq(GG) {
        return !1
      }
      destroy(GG) {}
    }
    yy.prototype.elementClass = "", yy.prototype.toDOM = void 0, yy.prototype.mapMode = wG.q.TrackBefore, yy.prototype.startSide = yy.prototype.endSide = -1, yy.prototype.point = !0;
    const ky = wG.m.define(),
      Uy = wG.m.define(),
      Yy = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => wG.x.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      Vy = wG.m.define();

    function py(GG) {
      return [Qy(), Vy.of({
        ...Yy,
        ...GG
      })]
    }
    const fy = wG.m.define({
      combine: GG => GG.some((GG => GG))
    });

    function Qy(GG) {
      let bG = [Ky];
      return GG && !1 === GG.fixed && bG.push(fy.of(!0)), bG
    }
    const Ky = Nb.fromClass(class {
      constructor(GG) {
        this.view = GG, this.domAfter = null, this.prevViewport = GG.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = GG.state.facet(Vy).map((bG => new ry(GG, bG))), this.fixed = !GG.state.facet(fy);
        for (let bG of this.gutters) "after" == bG.config.side ? this.getDOMAfter().appendChild(bG.dom) : this.dom.appendChild(bG.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), GG.scrollDOM.insertBefore(this.dom, GG.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(GG) {
        if (this.updateGutters(GG)) {
          let bG = this.prevViewport,
            ZG = GG.view.viewport,
            wG = Math.min(bG.to, ZG.to) - Math.max(bG.from, ZG.from);
          this.syncGutters(wG < .8 * (ZG.to - ZG.from))
        }
        if (GG.geometryChanged) {
          let GG = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = GG, this.domAfter && (this.domAfter.style.minHeight = GG)
        }
        this.view.state.facet(fy) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = GG.view.viewport
      }
      syncGutters(GG) {
        let bG = this.dom.nextSibling;
        GG && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let ZG = wG.x.iter(this.view.state.facet(ky), this.view.viewport.from),
          SG = [],
          LG = this.gutters.map((GG => new Jy(GG, this.view.viewport, -this.view.documentPadding.top)));
        for (let wG of this.view.viewportLineBlocks)
          if (SG.length && (SG = []), Array.isArray(wG.type)) {
            let GG = !0;
            for (let bG of wG.type)
              if (bG.type == vG.Text && GG) {
                dy(ZG, SG, bG.from);
                for (let GG of LG) GG.line(this.view, bG, SG);
                GG = !1
              } else if (bG.widget)
              for (let GG of LG) GG.widget(this.view, bG)
          } else if (wG.type == vG.Text) {
          dy(ZG, SG, wG.from);
          for (let GG of LG) GG.line(this.view, wG, SG)
        } else if (wG.widget)
          for (let GG of LG) GG.widget(this.view, wG);
        for (let wG of LG) wG.finish();
        GG && (this.view.scrollDOM.insertBefore(this.dom, bG), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(GG) {
        let bG = GG.startState.facet(Vy),
          ZG = GG.state.facet(Vy),
          SG = GG.docChanged || GG.heightChanged || GG.viewportChanged || !wG.x.eq(GG.startState.facet(ky), GG.state.facet(ky), GG.view.viewport.from, GG.view.viewport.to);
        if (bG == ZG)
          for (let wG of this.gutters) wG.update(GG) && (SG = !0);
        else {
          SG = !0;
          let wG = [];
          for (let SG of ZG) {
            let ZG = bG.indexOf(SG);
            ZG < 0 ? wG.push(new ry(this.view, SG)) : (this.gutters[ZG].update(GG), wG.push(this.gutters[ZG]))
          }
          for (let GG of this.gutters) GG.dom.remove(), wG.indexOf(GG) < 0 && GG.destroy();
          for (let GG of wG) "after" == GG.config.side ? this.getDOMAfter().appendChild(GG.dom) : this.dom.appendChild(GG.dom);
          this.gutters = wG
        }
        return SG
      }
      destroy() {
        for (let GG of this.gutters) GG.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: GG => WS.scrollMargins.of((bG => {
        let ZG = bG.plugin(GG);
        if (!ZG || 0 == ZG.gutters.length || !ZG.fixed) return null;
        let wG = ZG.dom.offsetWidth * bG.scaleX,
          SG = ZG.domAfter ? ZG.domAfter.offsetWidth * bG.scaleX : 0;
        return bG.textDirection == Yb.LTR ? {
          left: wG,
          right: SG
        } : {
          right: wG,
          left: SG
        }
      }))
    });

    function hy(GG) {
      return Array.isArray(GG) ? GG : [GG]
    }

    function dy(GG, bG, ZG) {
      for (; GG.value && GG.from <= ZG;) GG.from == ZG && bG.push(GG.value), GG.next()
    }
    class Jy {
      constructor(GG, bG, ZG) {
        this.gutter = GG, this.height = ZG, this.i = 0, this.cursor = wG.x.iter(GG.markers, bG.from)
      }
      addElement(GG, bG, ZG) {
        let {
          gutter: wG
        } = this, SG = (bG.top - this.height) / GG.scaleY, LG = bG.height / GG.scaleY;
        if (this.i == wG.elements.length) {
          let bG = new zy(GG, LG, SG, ZG);
          wG.elements.push(bG), wG.dom.appendChild(bG.dom)
        } else wG.elements[this.i].update(GG, LG, SG, ZG);
        this.height = bG.bottom, this.i++
      }
      line(GG, bG, ZG) {
        let wG = [];
        dy(this.cursor, wG, bG.from), ZG.length && (wG = wG.concat(ZG));
        let SG = this.gutter.config.lineMarker(GG, bG, wG);
        SG && wG.unshift(SG);
        let LG = this.gutter;
        (0 != wG.length || LG.config.renderEmptyElements) && this.addElement(GG, bG, wG)
      }
      widget(GG, bG) {
        let ZG = this.gutter.config.widgetMarker(GG, bG.widget, bG),
          wG = ZG ? [ZG] : null;
        for (let SG of GG.state.facet(Uy)) {
          let ZG = SG(GG, bG.widget, bG);
          ZG && (wG || (wG = [])).push(ZG)
        }
        wG && this.addElement(GG, bG, wG)
      }
      finish() {
        let GG = this.gutter;
        for (; GG.elements.length > this.i;) {
          let bG = GG.elements.pop();
          GG.dom.removeChild(bG.dom), bG.destroy()
        }
      }
    }
    class ry {
      constructor(GG, bG) {
        this.view = GG, this.config = bG, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let ZG in bG.domEventHandlers) this.dom.addEventListener(ZG, (wG => {
          let SG, LG = wG.target;
          if (LG != this.dom && this.dom.contains(LG)) {
            for (; LG.parentNode != this.dom;) LG = LG.parentNode;
            let GG = LG.getBoundingClientRect();
            SG = (GG.top + GG.bottom) / 2
          } else SG = wG.clientY;
          let yG = GG.lineBlockAtHeight(SG - GG.documentTop);
          bG.domEventHandlers[ZG](GG, yG, wG) && wG.preventDefault()
        }));
        this.markers = hy(bG.markers(GG)), bG.initialSpacer && (this.spacer = new zy(GG, 0, 0, [bG.initialSpacer(GG)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(GG) {
        let bG = this.markers;
        if (this.markers = hy(this.config.markers(GG.view)), this.spacer && this.config.updateSpacer) {
          let bG = this.config.updateSpacer(this.spacer.markers[0], GG);
          bG != this.spacer.markers[0] && this.spacer.update(GG.view, 0, 0, [bG])
        }
        let ZG = GG.view.viewport;
        return !wG.x.eq(this.markers, bG, ZG.from, ZG.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(GG)
      }
      destroy() {
        for (let GG of this.elements) GG.destroy()
      }
    }
    class zy {
      constructor(GG, bG, ZG, wG) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(GG, bG, ZG, wG)
      }
      update(GG, bG, ZG, wG) {
        this.height != bG && (this.height = bG, this.dom.style.height = bG + "px"), this.above != ZG && (this.dom.style.marginTop = (this.above = ZG) ? ZG + "px" : ""),
          function(GG, bG) {
            if (GG.length != bG.length) return !1;
            for (let ZG = 0; ZG < GG.length; ZG++)
              if (!GG[ZG].compare(bG[ZG])) return !1;
            return !0
          }(this.markers, wG) || this.setMarkers(GG, wG)
      }
      setMarkers(GG, bG) {
        let ZG = "cm-gutterElement",
          wG = this.dom.firstChild;
        for (let SG = 0, LG = 0;;) {
          let yG = LG,
            kG = SG < bG.length ? bG[SG++] : null,
            UG = !1;
          if (kG) {
            let GG = kG.elementClass;
            GG && (ZG += " " + GG);
            for (let bG = LG; bG < this.markers.length; bG++)
              if (this.markers[bG].compare(kG)) {
                yG = bG, UG = !0;
                break
              }
          } else yG = this.markers.length;
          for (; LG < yG;) {
            let GG = this.markers[LG++];
            if (GG.toDOM) {
              GG.destroy(wG);
              let bG = wG.nextSibling;
              wG.remove(), wG = bG
            }
          }
          if (!kG) break;
          kG.toDOM && (UG ? wG = wG.nextSibling : this.dom.insertBefore(kG.toDOM(GG), wG)), UG && LG++
        }
        this.dom.className = ZG, this.markers = bG
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const Ey = wG.m.define(),
      oy = wG.m.define(),
      Xy = wG.m.define({
        combine: GG => (0, wG.S)(GG, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(GG, bG) {
            let ZG = Object.assign({}, GG);
            for (let wG in bG) {
              let GG = ZG[wG],
                SG = bG[wG];
              ZG[wG] = GG ? (bG, ZG, wG) => GG(bG, ZG, wG) || SG(bG, ZG, wG) : SG
            }
            return ZG
          }
        })
      });
    class uy extends yy {
      constructor(GG) {
        super(), this.number = GG
      }
      eq(GG) {
        return this.number == GG.number
      }
      toDOM() {
        return document.createTextNode(this.number)
      }
    }

    function iy(GG, bG) {
      return GG.state.facet(Xy).formatNumber(bG, GG.state)
    }
    const Cy = Vy.compute([Xy], (GG => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: GG => GG.state.facet(Ey),
      lineMarker: (GG, bG, ZG) => ZG.some((GG => GG.toDOM)) ? null : new uy(iy(GG, GG.state.doc.lineAt(bG.from).number)),
      widgetMarker: (GG, bG, ZG) => {
        for (let wG of GG.state.facet(oy)) {
          let SG = wG(GG, bG, ZG);
          if (SG) return SG
        }
        return null
      },
      lineMarkerChange: GG => GG.startState.facet(Xy) != GG.state.facet(Xy),
      initialSpacer: GG => new uy(iy(GG, my(GG.state.doc.lines))),
      updateSpacer(GG, bG) {
        let ZG = iy(bG.view, my(bG.view.state.doc.lines));
        return ZG == GG.number ? GG : new uy(ZG)
      },
      domEventHandlers: GG.facet(Xy).domEventHandlers,
      side: "before"
    })));

    function Wy() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Xy.of(GG), Qy(), Cy]
    }

    function my(GG) {
      let bG = 9;
      for (; bG < GG;) bG = 10 * bG + 9;
      return bG
    }
    const Iy = new class extends yy {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      Fy = ky.compute(["selection"], (GG => {
        let bG = [],
          ZG = -1;
        for (let wG of GG.selection.Bh) {
          let SG = GG.doc.lineAt(wG.head).from;
          SG > ZG && (ZG = SG, bG.push(Iy.range(SG)))
        }
        return wG.x.of(bG)
      }));

    function vy() {
      return Fy
    }
  },
  41763: (GG, bG, ZG) => {
    ZG.d(bG, {
      D: () => KG,
      e: () => wG,
      h: () => QG,
      i: () => yG,
      j: () => VG,
      n: () => YG,
      r: () => cG,
      v: () => jG,
      z: () => lG
    });
    const wG = 1024;
    let SG = 0;
    class LG {
      constructor(GG, bG) {
        this.from = GG, this.to = bG
      }
    }
    class yG {
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = SG++, this.perNode = !!GG.perNode, this.deserialize = GG.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = GG.combine || null
      }
      add(GG) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof GG && (GG = YG.match(GG)), bG => {
          let ZG = GG(bG);
          return void 0 === ZG ? null : [this, ZG]
        }
      }
    }
    yG.closedBy = new yG({
      deserialize: GG => GG.split(" ")
    }), yG.openedBy = new yG({
      deserialize: GG => GG.split(" ")
    }), yG.group = new yG({
      deserialize: GG => GG.split(" ")
    }), yG.isolate = new yG({
      deserialize: GG => {
        if (GG && "rtl" != GG && "ltr" != GG && "auto" != GG) throw new RangeError("Invalid value for isolate: " + GG);
        return GG || "auto"
      }
    }), yG.contextHash = new yG({
      perNode: !0
    }), yG.lookAhead = new yG({
      perNode: !0
    }), yG.mounted = new yG({
      perNode: !0
    });
    class kG {
      constructor(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = GG, this.overlay = bG, this.parser = ZG, this.bracketed = wG
      }
      static get(GG) {
        return GG && GG.props && GG.props[yG.mounted.id]
      }
    }
    const UG = Object.create(null);
    class YG {
      constructor(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = GG, this.props = bG, this.id = ZG, this.flags = wG
      }
      static define(GG) {
        let bG = GG.props && GG.props.length ? Object.create(null) : UG,
          ZG = (GG.top ? 1 : 0) | (GG.skipped ? 2 : 0) | (GG.error ? 4 : 0) | (null == GG.name ? 8 : 0),
          wG = new YG(GG.name || "", bG, GG.id, ZG);
        if (GG.props)
          for (let SG of GG.props)
            if (Array.isArray(SG) || (SG = SG(wG)), SG) {
              if (SG[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              bG[SG[0].id] = SG[1]
            } return wG
      }
      prop(GG) {
        return this.props[GG.id]
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
      is(GG) {
        if ("string" == typeof GG) {
          if (this.name == GG) return !0;
          let bG = this.prop(yG.group);
          return !!bG && bG.indexOf(GG) > -1
        }
        return this.id == GG
      }
      static match(GG) {
        let bG = Object.create(null);
        for (let ZG in GG)
          for (let wG of ZG.split(" ")) bG[wG] = GG[ZG];
        return GG => {
          for (let ZG = GG.prop(yG.group), wG = -1; wG < (ZG ? ZG.length : 0); wG++) {
            let SG = bG[wG < 0 ? GG.name : ZG[wG]];
            if (SG) return SG
          }
        }
      }
    }
    YG.none = new YG("", Object.create(null), 0, 8);
    class VG {
      constructor(GG) {
        this.types = GG;
        for (let bG = 0; bG < GG.length; bG++)
          if (GG[bG].id != bG) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let GG = [];
        for (var bG = arguments.length, ZG = new Array(bG), wG = 0; wG < bG; wG++) ZG[wG] = arguments[wG];
        for (let SG of this.types) {
          let bG = null;
          for (let GG of ZG) {
            let ZG = GG(SG);
            if (ZG) {
              bG || (bG = Object.assign({}, SG.props));
              let GG = ZG[1],
                wG = ZG[0];
              wG.combine && wG.id in bG && (GG = wG.combine(bG[wG.id], GG)), bG[wG.id] = GG
            }
          }
          GG.push(bG ? new YG(SG.name, bG, SG.id, SG.flags) : SG)
        }
        return new VG(GG)
      }
    }
    const pG = new WeakMap,
      fG = new WeakMap;
    var QG;
    ! function(GG) {
      GG[GG.ExcludeBuffers = 1] = "ExcludeBuffers", GG[GG.IncludeAnonymous = 2] = "IncludeAnonymous", GG[GG.IgnoreMounts = 4] = "IgnoreMounts", GG[GG.IgnoreOverlays = 8] = "IgnoreOverlays", GG[GG.EnterBracketed = 16] = "EnterBracketed"
    }(QG || (QG = {}));
    class KG {
      constructor(GG, bG, ZG, wG, SG) {
        if (this.type = GG, this.children = bG, this.positions = ZG, this.length = wG, this.props = null, SG && SG.length) {
          this.props = Object.create(null);
          for (let [GG, bG] of SG) this.props["number" == typeof GG ? GG : GG.id] = bG
        }
      }
      toString() {
        let GG = kG.get(this);
        if (GG && !GG.overlay) return GG.tree.toString();
        let bG = "";
        for (let ZG of this.children) {
          let GG = ZG.toString();
          GG && (bG && (bG += ","), bG += GG)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (bG.length ? "(" + bG + ")" : "") : bG
      }
      cursor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new mG(this.topNode, GG)
      }
      cursorAt(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZG = pG.get(this) || this.topNode,
          wG = new mG(ZG);
        return wG.moveTo(GG, bG), pG.set(this, wG._tree), wG
      }
      get topNode() {
        return new EG(this, 0, 0, null)
      }
      resolve(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZG = rG(pG.get(this) || this.topNode, GG, bG, !1);
        return pG.set(this, ZG), ZG
      }
      resolveInner(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZG = rG(fG.get(this) || this.topNode, GG, bG, !0);
        return fG.set(this, ZG), ZG
      }
      resolveStack(GG) {
        return function(GG, bG, ZG) {
          let wG = GG.resolveInner(bG, ZG),
            SG = null;
          for (let LG = wG instanceof EG ? wG : wG.context.parent; LG; LG = LG.parent)
            if (LG.index < 0) {
              let GG = LG.parent;
              (SG || (SG = [wG])).push(GG.resolve(bG, ZG)), LG = GG
            } else {
              let GG = kG.get(LG.tree);
              if (GG && GG.overlay && GG.overlay[0].from <= bG && GG.overlay[GG.overlay.length - 1].to >= bG) {
                let yG = new EG(GG.tree, GG.overlay[0].from + LG.from, -1, LG);
                (SG || (SG = [wG])).push(rG(yG, bG, ZG, !1))
              }
            } return SG ? CG(SG) : wG
        }(this, GG, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(GG) {
        let {
          enter: bG,
          leave: ZG,
          from: wG = 0,
          to: SG = this.length
        } = GG, LG = GG.mode || 0, yG = (LG & QG.IncludeAnonymous) > 0;
        for (let kG = this.cursor(LG | QG.IncludeAnonymous);;) {
          let GG = !1;
          if (kG.from <= SG && kG.to >= wG && (!yG && kG.type.isAnonymous || !1 !== bG(kG))) {
            if (kG.firstChild()) continue;
            GG = !0
          }
          for (; GG && ZG && (yG || !kG.type.isAnonymous) && ZG(kG), !kG.nextSibling();) {
            if (!kG.parent()) return;
            GG = !0
          }
        }
      }
      prop(GG) {
        return GG.perNode ? this.props ? this.props[GG.id] : void 0 : this.type.prop(GG)
      }
      get propValues() {
        let GG = [];
        if (this.props)
          for (let bG in this.props) GG.push([+bG, this.props[bG]]);
        return GG
      }
      balance() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : aG(YG.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((GG, bG, ZG) => new KG(this.type, GG, bG, ZG, this.propValues)), GG.makeTree || ((GG, bG, ZG) => new KG(YG.none, GG, bG, ZG)))
      }
      static build(GG) {
        return function(GG) {
          var bG;
          let {
            buffer: ZG,
            nodeSet: SG,
            maxBufferLength: LG = wG,
            reused: kG = [],
            minRepeatType: UG = SG.types.length
          } = GG, YG = Array.isArray(ZG) ? new hG(ZG, ZG.length) : ZG, VG = SG.types, pG = 0, fG = 0;

          function QG(GG, bG, ZG, wG, yG, KG) {
            let {
              id: hG,
              start: uG,
              end: iG,
              size: CG
            } = YG, WG = fG, mG = pG;
            if (CG < 0) {
              if (YG.next(), -1 == CG) {
                let bG = kG[hG];
                return ZG.push(bG), void wG.push(uG - GG)
              }
              if (-3 == CG) return void(pG = hG);
              if (-4 == CG) return void(fG = hG);
              throw new RangeError(`Unrecognized record size: ${CG}`)
            }
            let IG, FG, vG = VG[hG],
              cG = uG - GG;
            if (iG - uG <= LG && (FG = oG(YG.pos - bG, yG))) {
              let bG = new Uint16Array(FG.size - FG.skip),
                ZG = YG.pos - FG.size,
                wG = bG.length;
              for (; YG.pos > ZG;) wG = XG(FG.start, bG, wG);
              IG = new dG(bG, iG - FG.start, SG), cG = FG.start - GG
            } else {
              let GG = YG.pos - CG;
              YG.next();
              let bG = [],
                ZG = [],
                wG = hG >= UG ? hG : -1,
                SG = 0,
                yG = iG;
              for (; YG.pos > GG;) wG >= 0 && YG.id == wG && YG.size >= 0 ? (YG.end <= yG - LG && (zG(bG, ZG, uG, SG, YG.end, yG, wG, WG, mG), SG = bG.length, yG = YG.end), YG.next()) : KG > 2500 ? JG(uG, GG, bG, ZG) : QG(uG, GG, bG, ZG, wG, KG + 1);
              if (wG >= 0 && SG > 0 && SG < bG.length && zG(bG, ZG, uG, SG, uG, yG, wG, WG, mG), bG.reverse(), ZG.reverse(), wG > -1 && SG > 0) {
                let GG = rG(vG, mG);
                IG = aG(vG, bG, ZG, 0, bG.length, 0, iG - uG, GG, GG)
              } else IG = EG(vG, bG, ZG, iG - uG, WG - iG, mG)
            }
            ZG.push(IG), wG.push(cG)
          }

          function JG(GG, bG, ZG, wG) {
            let yG = [],
              kG = 0,
              UG = -1;
            for (; YG.pos > bG;) {
              let {
                id: GG,
                start: bG,
                end: ZG,
                size: wG
              } = YG;
              if (wG > 4) YG.next();
              else {
                if (UG > -1 && bG < UG) break;
                UG < 0 && (UG = ZG - LG), yG.push(GG, bG, ZG), kG++, YG.next()
              }
            }
            if (kG) {
              let bG = new Uint16Array(4 * kG),
                LG = yG[yG.length - 2];
              for (let GG = yG.length - 3, ZG = 0; GG >= 0; GG -= 3) bG[ZG++] = yG[GG], bG[ZG++] = yG[GG + 1] - LG, bG[ZG++] = yG[GG + 2] - LG, bG[ZG++] = ZG;
              ZG.push(new dG(bG, yG[2] - LG, SG)), wG.push(LG - GG)
            }
          }

          function rG(GG, bG) {
            return (ZG, wG, SG) => {
              let LG, kG, UG = 0,
                YG = ZG.length - 1;
              if (YG >= 0 && (LG = ZG[YG]) instanceof KG) {
                if (!YG && LG.type == GG && LG.length == SG) return LG;
                (kG = LG.prop(yG.lookAhead)) && (UG = wG[YG] + LG.length + kG)
              }
              return EG(GG, ZG, wG, SG, UG, bG)
            }
          }

          function zG(GG, bG, ZG, wG, LG, yG, kG, UG, YG) {
            let VG = [],
              pG = [];
            for (; GG.length > wG;) VG.push(GG.pop()), pG.push(bG.pop() + ZG - LG);
            GG.push(EG(SG.types[kG], VG, pG, yG - LG, UG - yG, YG)), bG.push(LG - ZG)
          }

          function EG(GG, bG, ZG, wG, SG, LG, kG) {
            if (LG) {
              let GG = [yG.contextHash, LG];
              kG = kG ? [GG].concat(kG) : [GG]
            }
            if (SG > 25) {
              let GG = [yG.lookAhead, SG];
              kG = kG ? [GG].concat(kG) : [GG]
            }
            return new KG(GG, bG, ZG, wG, kG)
          }

          function oG(GG, bG) {
            let ZG = YG.fork(),
              wG = 0,
              SG = 0,
              yG = 0,
              kG = ZG.end - LG,
              VG = {
                size: 0,
                start: 0,
                skip: 0
              };
            GG: for (let LG = ZG.pos - GG; ZG.pos > LG;) {
              let GG = ZG.size;
              if (ZG.id == bG && GG >= 0) {
                VG.size = wG, VG.start = SG, VG.skip = yG, yG += 4, wG += 4, ZG.next();
                continue
              }
              let YG = ZG.pos - GG;
              if (GG < 0 || YG < LG || ZG.start < kG) break;
              let pG = ZG.id >= UG ? 4 : 0,
                fG = ZG.start;
              for (ZG.next(); ZG.pos > YG;) {
                if (ZG.size < 0) {
                  if (-3 != ZG.size && -4 != ZG.size) break GG;
                  pG += 4
                } else ZG.id >= UG && (pG += 4);
                ZG.next()
              }
              SG = fG, wG += GG, yG += pG
            }
            return (bG < 0 || wG == GG) && (VG.size = wG, VG.start = SG, VG.skip = yG), VG.size > 4 ? VG : void 0
          }

          function XG(GG, bG, ZG) {
            let {
              id: wG,
              start: SG,
              end: LG,
              size: yG
            } = YG;
            if (YG.next(), yG >= 0 && wG < UG) {
              let kG = ZG;
              if (yG > 4) {
                let wG = YG.pos - (yG - 4);
                for (; YG.pos > wG;) ZG = XG(GG, bG, ZG)
              }
              bG[--ZG] = kG, bG[--ZG] = LG - GG, bG[--ZG] = SG - GG, bG[--ZG] = wG
            } else - 3 == yG ? pG = wG : -4 == yG && (fG = wG);
            return ZG
          }
          let uG = [],
            iG = [];
          for (; YG.pos > 0;) QG(GG.start || 0, GG.bufferStart || 0, uG, iG, -1, 0);
          let CG = null !== (bG = GG.length) && void 0 !== bG ? bG : uG.length ? iG[0] + uG[0].length : 0;
          return new KG(VG[GG.topID], uG.reverse(), iG.reverse(), CG)
        }(GG)
      }
    }
    KG.empty = new KG(YG.none, [], [], 0);
    class hG {
      constructor(GG, bG) {
        this.buffer = GG, this.index = bG
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
        return new hG(this.buffer, this.index)
      }
    }
    class dG {
      constructor(GG, bG, ZG) {
        this.buffer = GG, this.length = bG, this.set = ZG
      }
      get type() {
        return YG.none
      }
      toString() {
        let GG = [];
        for (let bG = 0; bG < this.buffer.length;) GG.push(this.childString(bG)), bG = this.buffer[bG + 3];
        return GG.join(",")
      }
      childString(GG) {
        let bG = this.buffer[GG],
          ZG = this.buffer[GG + 3],
          wG = this.set.types[bG],
          SG = wG.name;
        if (/\W/.test(SG) && !wG.isError && (SG = JSON.stringify(SG)), ZG == (GG += 4)) return SG;
        let LG = [];
        for (; GG < ZG;) LG.push(this.childString(GG)), GG = this.buffer[GG + 3];
        return SG + "(" + LG.join(",") + ")"
      }
      findChild(GG, bG, ZG, wG, SG) {
        let {
          buffer: LG
        } = this, yG = -1;
        for (let kG = GG; kG != bG && !(JG(SG, wG, LG[kG + 1], LG[kG + 2]) && (yG = kG, ZG > 0)); kG = LG[kG + 3]);
        return yG
      }
      slice(GG, bG, ZG) {
        let wG = this.buffer,
          SG = new Uint16Array(bG - GG),
          LG = 0;
        for (let yG = GG, kG = 0; yG < bG;) {
          SG[kG++] = wG[yG++], SG[kG++] = wG[yG++] - ZG;
          let bG = SG[kG++] = wG[yG++] - ZG;
          SG[kG++] = wG[yG++] - GG, LG = Math.max(LG, bG)
        }
        return new dG(SG, LG, this.set)
      }
    }

    function JG(GG, bG, ZG, wG) {
      switch (GG) {
        case -2:
          return ZG < bG;
        case -1:
          return wG >= bG && ZG < bG;
        case 0:
          return ZG < bG && wG > bG;
        case 1:
          return ZG <= bG && wG > bG;
        case 2:
          return wG > bG;
        case 4:
          return !0
      }
    }

    function rG(GG, bG, ZG, wG) {
      for (var SG; GG.from == GG.to || (ZG < 1 ? GG.from >= bG : GG.from > bG) || (ZG > -1 ? GG.to <= bG : GG.to < bG);) {
        let bG = !wG && GG instanceof EG && GG.index < 0 ? null : GG.parent;
        if (!bG) return GG;
        GG = bG
      }
      let LG = wG ? 0 : QG.IgnoreOverlays;
      if (wG)
        for (let yG = GG, kG = yG.parent; kG; yG = kG, kG = yG.parent) yG instanceof EG && yG.index < 0 && (null === (SG = kG.enter(bG, ZG, LG)) || void 0 === SG ? void 0 : SG.from) != yG.from && (GG = kG);
      for (;;) {
        let wG = GG.enter(bG, ZG, LG);
        if (!wG) return GG;
        GG = wG
      }
    }
    class zG {
      cursor() {
        return new mG(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(GG) {
        let bG = oG(this, GG, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return bG.length ? bG[0] : null
      }
      getChildren(GG) {
        return oG(this, GG, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(GG) {
        return rG(this, GG, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(GG) {
        return rG(this, GG, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(GG) {
        return XG(this.parent, GG)
      }
      enterUnfinishedNodesBefore(GG) {
        let bG = this.childBefore(GG),
          ZG = this;
        for (; bG;) {
          let GG = bG.lastChild;
          if (!GG || GG.to != bG.to) break;
          GG.type.isError && GG.from == GG.to ? (ZG = bG, bG = GG.prevSibling) : bG = GG
        }
        return ZG
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class EG extends zG {
      constructor(GG, bG, ZG, wG) {
        super(), this._tree = GG, this.from = bG, this.index = ZG, this._parent = wG
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
      nextChild(GG, bG, ZG, wG) {
        let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let LG = this;;) {
          for (let {
              children: yG,
              positions: UG
            } = LG._tree, YG = bG > 0 ? yG.length : -1; GG != YG; GG += bG) {
            let YG, VG = yG[GG],
              pG = UG[GG] + LG.from;
            if (SG & QG.EnterBracketed && VG instanceof KG && (YG = kG.get(VG)) && !YG.overlay && YG.bracketed && ZG >= pG && ZG <= pG + VG.length || JG(wG, ZG, pG, pG + VG.length))
              if (VG instanceof dG) {
                if (SG & QG.ExcludeBuffers) continue;
                let yG = VG.findChild(0, VG.buffer.length, bG, ZG - pG, wG);
                if (yG > -1) return new iG(new uG(LG, VG, GG, pG), null, yG)
              } else if (SG & QG.IncludeAnonymous || !VG.type.isAnonymous || IG(VG)) {
              let yG;
              if (!(SG & QG.IgnoreMounts) && (yG = kG.get(VG)) && !yG.overlay) return new EG(yG.tree, pG, GG, LG);
              let UG = new EG(VG, pG, GG, LG);
              return SG & QG.IncludeAnonymous || !UG.type.isAnonymous ? UG : UG.nextChild(bG < 0 ? VG.children.length - 1 : 0, bG, ZG, wG, SG)
            }
          }
          if (SG & QG.IncludeAnonymous || !LG.type.isAnonymous) return null;
          if (GG = LG.index >= 0 ? LG.index + bG : bG < 0 ? -1 : LG._parent._tree.children.length, LG = LG._parent, !LG) return null
        }
      }
      get firstChild() {
        return this.nextChild(0, 1, 0, 4)
      }
      get lastChild() {
        return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
      }
      childAfter(GG) {
        return this.nextChild(0, 1, GG, 2)
      }
      childBefore(GG) {
        return this.nextChild(this._tree.children.length - 1, -1, GG, -2)
      }
      prop(GG) {
        return this._tree.prop(GG)
      }
      enter(GG, bG) {
        let ZG, wG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(wG & QG.IgnoreOverlays) && (ZG = kG.get(this._tree)) && ZG.overlay) {
          let SG = GG - this.from,
            LG = wG & QG.EnterBracketed && ZG.bracketed;
          for (let {
              from: GG,
              to: wG
            }
            of ZG.overlay)
            if ((bG > 0 || LG ? GG <= SG : GG < SG) && (bG < 0 || LG ? wG >= SG : wG > SG)) return new EG(ZG.tree, ZG.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, GG, bG, wG)
      }
      nextSignificantParent() {
        let GG = this;
        for (; GG.type.isAnonymous && GG._parent;) GG = GG._parent;
        return GG
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

    function oG(GG, bG, ZG, wG) {
      let SG = GG.cursor(),
        LG = [];
      if (!SG.firstChild()) return LG;
      if (null != ZG)
        for (let yG = !1; !yG;)
          if (yG = SG.type.is(ZG), !SG.nextSibling()) return LG;
      for (;;) {
        if (null != wG && SG.type.is(wG)) return LG;
        if (SG.type.is(bG) && LG.push(SG.node), !SG.nextSibling()) return null == wG ? LG : []
      }
    }

    function XG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bG.length - 1;
      for (let wG = GG; ZG >= 0; wG = wG.parent) {
        if (!wG) return !1;
        if (!wG.type.isAnonymous) {
          if (bG[ZG] && bG[ZG] != wG.name) return !1;
          ZG--
        }
      }
      return !0
    }
    class uG {
      constructor(GG, bG, ZG, wG) {
        this.parent = GG, this.buffer = bG, this.index = ZG, this.start = wG
      }
    }
    class iG extends zG {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(GG, bG, ZG) {
        super(), this.context = GG, this._parent = bG, this.index = ZG, this.type = GG.buffer.set.types[GG.buffer.buffer[ZG]]
      }
      child(GG, bG, ZG) {
        let {
          buffer: wG
        } = this.context, SG = wG.findChild(this.index + 4, wG.buffer[this.index + 3], GG, bG - this.context.start, ZG);
        return SG < 0 ? null : new iG(this.context, this, SG)
      }
      get firstChild() {
        return this.child(1, 0, 4)
      }
      get lastChild() {
        return this.child(-1, 0, 4)
      }
      childAfter(GG) {
        return this.child(1, GG, 2)
      }
      childBefore(GG) {
        return this.child(-1, GG, -2)
      }
      prop(GG) {
        return this.type.prop(GG)
      }
      enter(GG, bG) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & QG.ExcludeBuffers) return null;
        let {
          buffer: ZG
        } = this.context, wG = ZG.findChild(this.index + 4, ZG.buffer[this.index + 3], bG > 0 ? 1 : -1, GG - this.context.start, bG);
        return wG < 0 ? null : new iG(this.context, this, wG)
      }
      get parent() {
        return this._parent || this.context.parent.nextSignificantParent()
      }
      externalSibling(GG) {
        return this._parent ? null : this.context.parent.nextChild(this.context.index + GG, GG, 0, 4)
      }
      get nextSibling() {
        let {
          buffer: GG
        } = this.context, bG = GG.buffer[this.index + 3];
        return bG < (this._parent ? GG.buffer[this._parent.index + 3] : GG.buffer.length) ? new iG(this.context, this._parent, bG) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: GG
        } = this.context, bG = this._parent ? this._parent.index + 4 : 0;
        return this.index == bG ? this.externalSibling(-1) : new iG(this.context, this._parent, GG.findChild(bG, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let GG = [],
          bG = [],
          {
            buffer: ZG
          } = this.context,
          wG = this.index + 4,
          SG = ZG.buffer[this.index + 3];
        if (SG > wG) {
          let LG = ZG.buffer[this.index + 1];
          GG.push(ZG.slice(wG, SG, LG)), bG.push(0)
        }
        return new KG(this.type, GG, bG, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function CG(GG) {
      if (!GG.length) return null;
      let bG = 0,
        ZG = GG[0];
      for (let LG = 1; LG < GG.length; LG++) {
        let wG = GG[LG];
        (wG.from > ZG.from || wG.to < ZG.to) && (ZG = wG, bG = LG)
      }
      let wG = ZG instanceof EG && ZG.index < 0 ? null : ZG.parent,
        SG = GG.slice();
      return wG ? SG[bG] = wG : SG.splice(bG, 1), new WG(SG, ZG)
    }
    class WG {
      constructor(GG, bG) {
        this.heads = GG, this.node = bG
      }
      get next() {
        return CG(this.heads)
      }
    }
    class mG {
      get name() {
        return this.type.name
      }
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = bG & ~QG.EnterBracketed, GG instanceof EG) this.yieldNode(GG);
        else {
          this._tree = GG.context.parent, this.buffer = GG.context;
          for (let bG = GG._parent; bG; bG = bG._parent) this.stack.unshift(bG.index);
          this.bufferNode = GG, this.yieldBuf(GG.index)
        }
      }
      yieldNode(GG) {
        return !!GG && (this._tree = GG, this.type = GG.type, this.from = GG.from, this.to = GG.to, !0)
      }
      yieldBuf(GG, bG) {
        this.index = GG;
        let {
          start: ZG,
          buffer: wG
        } = this.buffer;
        return this.type = bG || wG.set.types[wG.buffer[GG]], this.from = ZG + wG.buffer[GG + 1], this.to = ZG + wG.buffer[GG + 2], !0
      }
      yield(GG) {
        return !!GG && (GG instanceof EG ? (this.buffer = null, this.yieldNode(GG)) : (this.buffer = GG.context, this.yieldBuf(GG.index, GG.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(GG, bG, ZG) {
        if (!this.buffer) return this.yield(this._tree.nextChild(GG < 0 ? this._tree._tree.children.length - 1 : 0, GG, bG, ZG, this.mode));
        let {
          buffer: wG
        } = this.buffer, SG = wG.findChild(this.index + 4, wG.buffer[this.index + 3], GG, bG - this.buffer.start, ZG);
        return !(SG < 0) && (this.stack.push(this.index), this.yieldBuf(SG))
      }
      firstChild() {
        return this.enterChild(1, 0, 4)
      }
      lastChild() {
        return this.enterChild(-1, 0, 4)
      }
      childAfter(GG) {
        return this.enterChild(1, GG, 2)
      }
      childBefore(GG) {
        return this.enterChild(-1, GG, -2)
      }
      enter(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(ZG & QG.ExcludeBuffers) && this.enterChild(1, GG, bG) : this.yield(this._tree.enter(GG, bG, ZG))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & QG.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let GG = this.mode & QG.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(GG)
      }
      sibling(GG) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + GG, GG, 0, 4, this.mode));
        let {
          buffer: bG
        } = this.buffer, ZG = this.stack.length - 1;
        if (GG < 0) {
          let GG = ZG < 0 ? 0 : this.stack[ZG] + 4;
          if (this.index != GG) return this.yieldBuf(bG.findChild(GG, this.index, -1, 0, 4))
        } else {
          let GG = bG.buffer[this.index + 3];
          if (GG < (ZG < 0 ? bG.buffer.length : bG.buffer[this.stack[ZG] + 3])) return this.yieldBuf(GG)
        }
        return ZG < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + GG, GG, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(GG) {
        let bG, ZG, {
          buffer: wG
        } = this;
        if (wG) {
          if (GG > 0) {
            if (this.index < wG.buffer.buffer.length) return !1
          } else
            for (let GG = 0; GG < this.index; GG++)
              if (wG.buffer.buffer[GG + 3] < this.index) return !1;
          ({
            index: bG,
            parent: ZG
          } = wG)
        } else({
          index: bG,
          _parent: ZG
        } = this._tree);
        for (; ZG;
          ({
            index: bG,
            _parent: ZG
          } = ZG))
          if (bG > -1)
            for (let wG = bG + GG, SG = GG < 0 ? -1 : ZG._tree.children.length; wG != SG; wG += GG) {
              let GG = ZG._tree.children[wG];
              if (this.mode & QG.IncludeAnonymous || GG instanceof dG || !GG.type.isAnonymous || IG(GG)) return !1
            }
        return !0
      }
      move(GG, bG) {
        if (bG && this.enterChild(GG, 0, 4)) return !0;
        for (;;) {
          if (this.sibling(GG)) return !0;
          if (this.atLastNode(GG) || !this.parent()) return !1
        }
      }
      next() {
        let GG = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(1, GG)
      }
      prev() {
        let GG = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(-1, GG)
      }
      moveTo(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (bG < 1 ? this.from >= GG : this.from > GG) || (bG > -1 ? this.to <= GG : this.to < GG)) && this.parent(););
        for (; this.enterChild(1, GG, bG););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let GG = this.bufferNode,
          bG = null,
          ZG = 0;
        if (GG && GG.context == this.buffer) GG: for (let wG = this.index, SG = this.stack.length; SG >= 0;) {
          for (let LG = GG; LG; LG = LG._parent)
            if (LG.index == wG) {
              if (wG == this.index) return LG;
              bG = LG, ZG = SG + 1;
              break GG
            } wG = this.stack[--SG]
        }
        for (let wG = ZG; wG < this.stack.length; wG++) bG = new iG(this.buffer, bG, this.stack[wG]);
        return this.bufferNode = new iG(this.buffer, bG, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(GG, bG) {
        for (let ZG = 0;;) {
          let wG = !1;
          if (this.type.isAnonymous || !1 !== GG(this)) {
            if (this.firstChild()) {
              ZG++;
              continue
            }
            this.type.isAnonymous || (wG = !0)
          }
          for (;;) {
            if (wG && bG && bG(this), wG = this.type.isAnonymous, !ZG) return;
            if (this.nextSibling()) break;
            this.parent(), ZG--, wG = !0
          }
        }
      }
      matchContext(GG) {
        if (!this.buffer) return XG(this.node.parent, GG);
        let {
          buffer: bG
        } = this.buffer, {
          types: ZG
        } = bG.set;
        for (let wG = GG.length - 1, SG = this.stack.length - 1; wG >= 0; SG--) {
          if (SG < 0) return XG(this._tree, GG, wG);
          let LG = ZG[bG.buffer[this.stack[SG]]];
          if (!LG.isAnonymous) {
            if (GG[wG] && GG[wG] != LG.name) return !1;
            wG--
          }
        }
        return !0
      }
    }

    function IG(GG) {
      return GG.children.some((GG => GG instanceof dG || !GG.type.isAnonymous || IG(GG)))
    }
    const FG = new WeakMap;

    function vG(GG, bG) {
      if (!GG.isAnonymous || bG instanceof dG || bG.type != GG) return 1;
      let ZG = FG.get(bG);
      if (null == ZG) {
        ZG = 1;
        for (let wG of bG.children) {
          if (wG.type != GG || !(wG instanceof KG)) {
            ZG = 1;
            break
          }
          ZG += vG(GG, wG)
        }
        FG.set(bG, ZG)
      }
      return ZG
    }

    function aG(GG, bG, ZG, wG, SG, LG, yG, kG, UG) {
      let YG = 0;
      for (let QG = wG; QG < SG; QG++) YG += vG(GG, bG[QG]);
      let VG = Math.ceil(1.5 * YG / 8),
        pG = [],
        fG = [];
      return function bG(ZG, wG, SG, yG, kG) {
        for (let YG = SG; YG < yG;) {
          let SG = YG,
            QG = wG[YG],
            KG = vG(GG, ZG[YG]);
          for (YG++; YG < yG; YG++) {
            let bG = vG(GG, ZG[YG]);
            if (KG + bG >= VG) break;
            KG += bG
          }
          if (YG == SG + 1) {
            if (KG > VG) {
              let GG = ZG[SG];
              bG(GG.children, GG.positions, 0, GG.children.length, wG[SG] + kG);
              continue
            }
            pG.push(ZG[SG])
          } else {
            let bG = wG[YG - 1] + ZG[YG - 1].length - QG;
            pG.push(aG(GG, ZG, wG, SG, YG, QG, bG, null, UG))
          }
          fG.push(QG + kG - LG)
        }
      }(bG, ZG, wG, SG, 0), (kG || UG)(pG, fG, yG)
    }
    class cG {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(GG, bG, ZG) {
        let wG = this.map.get(GG);
        wG || this.map.set(GG, wG = new Map), wG.set(bG, ZG)
      }
      getBuffer(GG, bG) {
        let ZG = this.map.get(GG);
        return ZG && ZG.get(bG)
      }
      set(GG, bG) {
        GG instanceof iG ? this.setBuffer(GG.context.buffer, GG.index, bG) : GG instanceof EG && this.map.set(GG.tree, bG)
      }
      get(GG) {
        return GG instanceof iG ? this.getBuffer(GG.context.buffer, GG.index) : GG instanceof EG ? this.map.get(GG.tree) : void 0
      }
      cursorSet(GG, bG) {
        GG.buffer ? this.setBuffer(GG.buffer.buffer, GG.index, bG) : this.map.set(GG.tree, bG)
      }
      cursorGet(GG) {
        return GG.buffer ? this.getBuffer(GG.buffer.buffer, GG.index) : this.map.get(GG.tree)
      }
    }
    class lG {
      constructor(GG, bG, ZG, wG) {
        let SG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          LG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = GG, this.to = bG, this.tree = ZG, this.offset = wG, this.open = (SG ? 1 : 0) | (LG ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wG = [new lG(0, GG.length, GG, 0, !1, ZG)];
        for (let SG of bG) SG.to > GG.length && wG.push(SG);
        return wG
      }
      static applyChanges(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!bG.length) return GG;
        let wG = [],
          SG = 1,
          LG = GG.length ? GG[0] : null;
        for (let yG = 0, kG = 0, UG = 0;; yG++) {
          let YG = yG < bG.length ? bG[yG] : null,
            VG = YG ? YG.fromA : 1e9;
          if (VG - kG >= ZG)
            for (; LG && LG.from < VG;) {
              let bG = LG;
              if (kG >= bG.from || VG <= bG.to || UG) {
                let GG = Math.max(bG.from, kG) - UG,
                  ZG = Math.min(bG.to, VG) - UG;
                bG = GG >= ZG ? null : new lG(GG, ZG, bG.tree, bG.offset + UG, yG > 0, !!YG)
              }
              if (bG && wG.push(bG), LG.to > VG) break;
              LG = SG < GG.length ? GG[SG++] : null
            }
          if (!YG) break;
          kG = YG.toA, UG = YG.toA - YG.toB
        }
        return wG
      }
    }
    class jG {
      startParse(GG, bG, ZG) {
        return "string" == typeof GG && (GG = new PG(GG)), ZG = ZG ? ZG.length ? ZG.map((GG => new LG(GG.from, GG.to))) : [new LG(0, 0)] : [new LG(0, GG.length)], this.createParse(GG, bG || [], ZG)
      }
      parse(GG, bG, ZG) {
        let wG = this.startParse(GG, bG, ZG);
        for (;;) {
          let GG = wG.advance();
          if (GG) return GG
        }
      }
    }
    class PG {
      constructor(GG) {
        this.string = GG
      }
      get length() {
        return this.string.length
      }
      chunk(GG) {
        return this.string.slice(GG)
      }
      get lineChunks() {
        return !1
      }
      read(GG, bG) {
        return this.string.slice(GG, bG)
      }
    }
    new yG({
      perNode: !0
    })
  },
  41771: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => fG,
      g: () => UG,
      h: () => pG,
      k: () => FG
    });
    var wG = ZG(41763);
    let SG = 0;
    class LG {
      constructor(GG, bG, ZG, wG) {
        this.name = GG, this.set = bG, this.base = ZG, this.modified = wG, this.id = SG++
      }
      toString() {
        let {
          name: GG
        } = this;
        for (let bG of this.modified) bG.name && (GG = `${bG.name}(${GG})`);
        return GG
      }
      static define(GG, bG) {
        let ZG = "string" == typeof GG ? GG : "?";
        if (GG instanceof LG && (bG = GG), null === bG || void 0 === bG ? void 0 : bG.base) throw new Error("Can not derive from a modified tag");
        let wG = new LG(ZG, [], null, []);
        if (wG.set.push(wG), bG)
          for (let SG of bG.set) wG.set.push(SG);
        return wG
      }
      static defineModifier(GG) {
        let bG = new kG(GG);
        return GG => GG.modified.indexOf(bG) > -1 ? GG : kG.get(GG.base || GG, GG.modified.concat(bG).sort(((GG, bG) => GG.id - bG.id)))
      }
    }
    let yG = 0;
    class kG {
      constructor(GG) {
        this.name = GG, this.instances = [], this.id = yG++
      }
      static get(GG, bG) {
        if (!bG.length) return GG;
        let ZG = bG[0].instances.find((ZG => {
          return ZG.base == GG && (wG = bG, SG = ZG.modified, wG.length == SG.length && wG.every(((GG, bG) => GG == SG[bG])));
          var wG, SG
        }));
        if (ZG) return ZG;
        let wG = [],
          SG = new LG(GG.name, wG, GG, bG);
        for (let LG of bG) LG.instances.push(SG);
        let yG = function(GG) {
          let bG = [
            []
          ];
          for (let ZG = 0; ZG < GG.length; ZG++)
            for (let wG = 0, SG = bG.length; wG < SG; wG++) bG.push(bG[wG].concat(GG[ZG]));
          return bG.sort(((GG, bG) => bG.length - GG.length))
        }(bG);
        for (let LG of GG.set)
          if (!LG.modified.length)
            for (let GG of yG) wG.push(kG.get(LG, GG));
        return SG
      }
    }

    function UG(GG) {
      let bG = Object.create(null);
      for (let ZG in GG) {
        let wG = GG[ZG];
        Array.isArray(wG) || (wG = [wG]);
        for (let GG of ZG.split(" "))
          if (GG) {
            let ZG = [],
              SG = 2,
              LG = GG;
            for (let bG = 0;;) {
              if ("..." == LG && bG > 0 && bG + 3 == GG.length) {
                SG = 1;
                break
              }
              let wG = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(LG);
              if (!wG) throw new RangeError("Invalid path: " + GG);
              if (ZG.push("*" == wG[0] ? "" : '"' == wG[0][0] ? JSON.parse(wG[0]) : wG[0]), bG += wG[0].length, bG == GG.length) break;
              let yG = GG[bG++];
              if (bG == GG.length && "!" == yG) {
                SG = 0;
                break
              }
              if ("/" != yG) throw new RangeError("Invalid path: " + GG);
              LG = GG.slice(bG)
            }
            let yG = ZG.length - 1,
              kG = ZG[yG];
            if (!kG) throw new RangeError("Invalid path: " + GG);
            let UG = new VG(wG, SG, yG > 0 ? ZG.slice(0, yG) : null);
            bG[kG] = UG.sort(bG[kG])
          }
      }
      return YG.add(bG)
    }
    const YG = new wG.i({
      combine(GG, bG) {
        let ZG, wG, SG;
        for (; GG || bG;) {
          if (!GG || bG && GG.depth >= bG.depth ? (SG = bG, bG = bG.next) : (SG = GG, GG = GG.next), ZG && ZG.mode == SG.mode && !SG.context && !ZG.context) continue;
          let LG = new VG(SG.tags, SG.mode, SG.context);
          ZG ? ZG.next = LG : wG = LG, ZG = LG
        }
        return wG
      }
    });
    class VG {
      constructor(GG, bG, ZG, wG) {
        this.tags = GG, this.mode = bG, this.context = ZG, this.next = wG
      }
      get opaque() {
        return 0 == this.mode
      }
      get inherit() {
        return 1 == this.mode
      }
      sort(GG) {
        return !GG || GG.depth < this.depth ? (this.next = GG, this) : (GG.next = this.sort(GG.next), GG)
      }
      get depth() {
        return this.context ? this.context.length : 0
      }
    }

    function pG(GG, bG) {
      let ZG = Object.create(null);
      for (let LG of GG)
        if (Array.isArray(LG.tag))
          for (let GG of LG.tag) ZG[GG.id] = LG.class;
        else ZG[LG.tag.id] = LG.class;
      let {
        scope: wG,
        all: SG = null
      } = bG || {};
      return {
        style: GG => {
          let bG = SG;
          for (let wG of GG)
            for (let GG of wG.set) {
              let wG = ZG[GG.id];
              if (wG) {
                bG = bG ? bG + " " + wG : wG;
                break
              }
            }
          return bG
        },
        scope: wG
      }
    }

    function fG(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : GG.length,
        LG = new QG(wG, Array.isArray(bG) ? bG : [bG], ZG);
      LG.highlightRange(GG.cursor(), wG, SG, "", LG.highlighters), LG.flush(SG)
    }
    VG.empty = new VG([], 2, null);
    class QG {
      constructor(GG, bG, ZG) {
        this.at = GG, this.highlighters = bG, this.span = ZG, this.class = ""
      }
      startSpan(GG, bG) {
        bG != this.class && (this.flush(GG), GG > this.at && (this.at = GG), this.class = bG)
      }
      flush(GG) {
        GG > this.at && this.class && this.span(this.at, GG, this.class)
      }
      highlightRange(GG, bG, ZG, SG, LG) {
        let {
          type: yG,
          from: kG,
          to: UG
        } = GG;
        if (kG >= ZG || UG <= bG) return;
        yG.isTop && (LG = this.highlighters.filter((GG => !GG.scope || GG.scope(yG))));
        let pG = SG,
          fG = function(GG) {
            let bG = GG.type.prop(YG);
            for (; bG && bG.context && !GG.matchContext(bG.context);) bG = bG.next;
            return bG || null
          }(GG) || VG.empty,
          QG = function(GG, bG) {
            let ZG = null;
            for (let wG of GG) {
              let GG = wG.style(bG);
              GG && (ZG = ZG ? ZG + " " + GG : GG)
            }
            return ZG
          }(LG, fG.tags);
        if (QG && (pG && (pG += " "), pG += QG, 1 == fG.mode && (SG += (SG ? " " : "") + QG)), this.startSpan(Math.max(bG, kG), pG), fG.opaque) return;
        let KG = GG.tree && GG.tree.prop(wG.i.mounted);
        if (KG && KG.overlay) {
          let wG = GG.node.enter(KG.overlay[0].from + kG, 1),
            yG = this.highlighters.filter((GG => !GG.scope || GG.scope(KG.tree.type))),
            YG = GG.firstChild();
          for (let VG = 0, fG = kG;; VG++) {
            let QG = VG < KG.overlay.length ? KG.overlay[VG] : null,
              hG = QG ? QG.from + kG : UG,
              dG = Math.max(bG, fG),
              JG = Math.min(ZG, hG);
            if (dG < JG && YG)
              for (; GG.from < JG && (this.highlightRange(GG, dG, JG, SG, LG), this.startSpan(Math.min(JG, GG.to), pG), !(GG.to >= hG) && GG.nextSibling()););
            if (!QG || hG > ZG) break;
            fG = QG.to + kG, fG > bG && (this.highlightRange(wG.cursor(), Math.max(bG, QG.from + kG), Math.min(ZG, fG), "", yG), this.startSpan(Math.min(ZG, fG), pG))
          }
          YG && GG.parent()
        } else if (GG.firstChild()) {
          KG && (SG = "");
          do {
            if (!(GG.to <= bG)) {
              if (GG.from >= ZG) break;
              this.highlightRange(GG, bG, ZG, SG, LG), this.startSpan(Math.min(ZG, GG.to), pG)
            }
          } while (GG.nextSibling());
          GG.parent()
        }
      }
    }
    const KG = LG.define,
      hG = KG(),
      dG = KG(),
      JG = KG(dG),
      rG = KG(dG),
      zG = KG(),
      EG = KG(zG),
      oG = KG(zG),
      XG = KG(),
      uG = KG(XG),
      iG = KG(),
      CG = KG(),
      WG = KG(),
      mG = KG(WG),
      IG = KG(),
      FG = {
        comment: hG,
        lineComment: KG(hG),
        blockComment: KG(hG),
        docComment: KG(hG),
        name: dG,
        variableName: KG(dG),
        typeName: JG,
        tagName: KG(JG),
        propertyName: rG,
        attributeName: KG(rG),
        className: KG(dG),
        labelName: KG(dG),
        namespace: KG(dG),
        macroName: KG(dG),
        literal: zG,
        string: EG,
        docString: KG(EG),
        character: KG(EG),
        attributeValue: KG(EG),
        number: oG,
        integer: KG(oG),
        float: KG(oG),
        bool: KG(zG),
        regexp: KG(zG),
        escape: KG(zG),
        color: KG(zG),
        url: KG(zG),
        keyword: iG,
        self: KG(iG),
        null: KG(iG),
        atom: KG(iG),
        unit: KG(iG),
        modifier: KG(iG),
        operatorKeyword: KG(iG),
        controlKeyword: KG(iG),
        definitionKeyword: KG(iG),
        moduleKeyword: KG(iG),
        operator: CG,
        derefOperator: KG(CG),
        arithmeticOperator: KG(CG),
        logicOperator: KG(CG),
        bitwiseOperator: KG(CG),
        compareOperator: KG(CG),
        updateOperator: KG(CG),
        definitionOperator: KG(CG),
        typeOperator: KG(CG),
        controlOperator: KG(CG),
        punctuation: WG,
        separator: KG(WG),
        bracket: mG,
        angleBracket: KG(mG),
        squareBracket: KG(mG),
        paren: KG(mG),
        brace: KG(mG),
        content: XG,
        heading: uG,
        heading1: KG(uG),
        heading2: KG(uG),
        heading3: KG(uG),
        heading4: KG(uG),
        heading5: KG(uG),
        heading6: KG(uG),
        contentSeparator: KG(XG),
        list: KG(XG),
        quote: KG(XG),
        emphasis: KG(XG),
        strong: KG(XG),
        link: KG(XG),
        monospace: KG(XG),
        strikethrough: KG(XG),
        inserted: KG(),
        deleted: KG(),
        changed: KG(),
        invalid: KG(),
        meta: IG,
        documentMeta: KG(IG),
        annotation: KG(IG),
        processingInstruction: KG(IG),
        definition: LG.defineModifier("definition"),
        constant: LG.defineModifier("constant"),
        function: LG.defineModifier("function"),
        standard: LG.defineModifier("standard"),
        local: LG.defineModifier("local"),
        special: LG.defineModifier("special")
      };
    for (let vG in FG) {
      let GG = FG[vG];
      GG instanceof LG && (GG.name = vG)
    }
    pG([{
      tag: FG.link,
      class: "tok-link"
    }, {
      tag: FG.heading,
      class: "tok-heading"
    }, {
      tag: FG.emphasis,
      class: "tok-emphasis"
    }, {
      tag: FG.strong,
      class: "tok-strong"
    }, {
      tag: FG.keyword,
      class: "tok-keyword"
    }, {
      tag: FG.atom,
      class: "tok-atom"
    }, {
      tag: FG.bool,
      class: "tok-bool"
    }, {
      tag: FG.url,
      class: "tok-url"
    }, {
      tag: FG.labelName,
      class: "tok-labelName"
    }, {
      tag: FG.inserted,
      class: "tok-inserted"
    }, {
      tag: FG.deleted,
      class: "tok-deleted"
    }, {
      tag: FG.literal,
      class: "tok-literal"
    }, {
      tag: FG.string,
      class: "tok-string"
    }, {
      tag: FG.number,
      class: "tok-number"
    }, {
      tag: [FG.regexp, FG.escape, FG.special(FG.string)],
      class: "tok-string2"
    }, {
      tag: FG.variableName,
      class: "tok-variableName"
    }, {
      tag: FG.local(FG.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: FG.definition(FG.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: FG.special(FG.variableName),
      class: "tok-variableName2"
    }, {
      tag: FG.definition(FG.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: FG.typeName,
      class: "tok-typeName"
    }, {
      tag: FG.namespace,
      class: "tok-namespace"
    }, {
      tag: FG.className,
      class: "tok-className"
    }, {
      tag: FG.macroName,
      class: "tok-macroName"
    }, {
      tag: FG.propertyName,
      class: "tok-propertyName"
    }, {
      tag: FG.operator,
      class: "tok-operator"
    }, {
      tag: FG.comment,
      class: "tok-comment"
    }, {
      tag: FG.meta,
      class: "tok-meta"
    }, {
      tag: FG.invalid,
      class: "tok-invalid"
    }, {
      tag: FG.punctuation,
      class: "tok-punctuation"
    }])
  },
  41777: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => kG.h,
      c: () => yG.s,
      f: () => yG.C,
      j: () => yG.G,
      n: () => kG.j,
      r: () => uZ,
      v: () => kG.N,
      y: () => kG.mb
    });
    var wG = ZG(1339),
      SG = ZG(1333),
      LG = ZG(51),
      yG = ZG(41727),
      kG = ZG(41735),
      UG = ZG(41754),
      YG = ZG(41763);

    function VG(GG, bG) {
      return ZG => {
        let {
          state: wG,
          dispatch: SG
        } = ZG;
        if (wG.readOnly) return !1;
        let LG = GG(bG, wG);
        return !!LG && (SG(wG.update(LG)), !0)
      }
    }
    const pG = VG(JG, 0),
      fG = VG(dG, 0),
      QG = VG(((GG, bG) => dG(GG, bG, function(GG) {
        let bG = [];
        for (let ZG of GG.selection.Bh) {
          let wG = GG.doc.lineAt(ZG.from),
            SG = ZG.to <= wG.to ? wG : GG.doc.lineAt(ZG.to);
          SG.from > wG.from && SG.from == ZG.to && (SG = ZG.to == wG.to + 1 ? wG : GG.doc.lineAt(ZG.to - 1));
          let LG = bG.length - 1;
          LG >= 0 && bG[LG].to > wG.from ? bG[LG].to = SG.to : bG.push({
            from: wG.from + /^\s*/.exec(wG.text)[0].length,
            to: SG.to
          })
        }
        return bG
      }(bG))), 0);

    function KG(GG, bG) {
      let ZG = GG.languageDataAt("commentTokens", bG, 1);
      return ZG.length ? ZG[0] : {}
    }
    const hG = 50;

    function dG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bG.selection.Bh,
        wG = ZG.map((GG => KG(bG, GG.from).block));
      if (!wG.every((GG => GG))) return null;
      let SG = ZG.map(((GG, ZG) => function(GG, bG, ZG, wG) {
        let SG, LG, {
            open: yG,
            close: kG
          } = bG,
          UG = GG.sliceDoc(ZG - hG, ZG),
          YG = GG.sliceDoc(wG, wG + hG),
          VG = /\s*$/.exec(UG)[0].length,
          pG = /^\s*/.exec(YG)[0].length,
          fG = UG.length - VG;
        if (UG.slice(fG - yG.length, fG) == yG && YG.slice(pG, pG + kG.length) == kG) return {
          open: {
            pos: ZG - VG,
            margin: VG && 1
          },
          close: {
            pos: wG + pG,
            margin: pG && 1
          }
        };
        wG - ZG <= 2 * hG ? SG = LG = GG.sliceDoc(ZG, wG) : (SG = GG.sliceDoc(ZG, ZG + hG), LG = GG.sliceDoc(wG - hG, wG));
        let QG = /^\s*/.exec(SG)[0].length,
          KG = /\s*$/.exec(LG)[0].length,
          dG = LG.length - KG - kG.length;
        return SG.slice(QG, QG + yG.length) == yG && LG.slice(dG, dG + kG.length) == kG ? {
          open: {
            pos: ZG + QG + yG.length,
            margin: /\s/.test(SG.charAt(QG + yG.length)) ? 1 : 0
          },
          close: {
            pos: wG - KG - kG.length,
            margin: /\s/.test(LG.charAt(dG - 1)) ? 1 : 0
          }
        } : null
      }(bG, wG[ZG], GG.from, GG.to)));
      if (2 != GG && !SG.every((GG => GG))) return {
        changes: bG.changes(ZG.map(((GG, bG) => SG[bG] ? [] : [{
          from: GG.from,
          insert: wG[bG].open + " "
        }, {
          from: GG.to,
          insert: " " + wG[bG].close
        }])))
      };
      if (1 != GG && SG.some((GG => GG))) {
        let GG = [];
        for (let bG, ZG = 0; ZG < SG.length; ZG++)
          if (bG = SG[ZG]) {
            let SG = wG[ZG],
              {
                open: LG,
                close: yG
              } = bG;
            GG.push({
              from: LG.pos - SG.open.length,
              to: LG.pos + LG.margin
            }, {
              from: yG.pos - yG.margin,
              to: yG.pos + SG.close.length
            })
          } return {
          changes: GG
        }
      }
      return null
    }

    function JG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bG.selection.Bh,
        wG = [],
        SG = -1;
      GG: for (let {
          from: LG,
          to: yG
        }
        of ZG) {
        let GG, ZG = wG.length,
          kG = 1e9;
        for (let UG = LG; UG <= yG;) {
          let ZG = bG.doc.lineAt(UG);
          if (void 0 == GG && (GG = KG(bG, ZG.from).line, !GG)) continue GG;
          if (ZG.from > SG && (LG == yG || yG > ZG.from)) {
            SG = ZG.from;
            let bG = /^\s*/.exec(ZG.text)[0].length,
              LG = bG == ZG.length,
              yG = ZG.text.slice(bG, bG + GG.length) == GG ? bG : -1;
            bG < ZG.text.length && bG < kG && (kG = bG), wG.push({
              line: ZG,
              comment: yG,
              token: GG,
              indent: bG,
              empty: LG,
              single: !1
            })
          }
          UG = ZG.to + 1
        }
        if (kG < 1e9)
          for (let bG = ZG; bG < wG.length; bG++) wG[bG].indent < wG[bG].line.text.length && (wG[bG].indent = kG);
        wG.length == ZG + 1 && (wG[ZG].single = !0)
      }
      if (2 != GG && wG.some((GG => GG.comment < 0 && (!GG.empty || GG.single)))) {
        let GG = [];
        for (let {
            line: bG,
            token: SG,
            indent: LG,
            empty: yG,
            single: kG
          }
          of wG) !kG && yG || GG.push({
          from: bG.from + LG,
          insert: SG + " "
        });
        let ZG = bG.changes(GG);
        return {
          changes: ZG,
          selection: bG.selection.map(ZG, 1)
        }
      }
      if (1 != GG && wG.some((GG => GG.comment >= 0))) {
        let GG = [];
        for (let {
            line: bG,
            comment: ZG,
            token: SG
          }
          of wG)
          if (ZG >= 0) {
            let wG = bG.from + ZG,
              LG = wG + SG.length;
            " " == bG.text[LG - bG.from] && LG++, GG.push({
              from: wG,
              to: LG
            })
          } return {
          changes: GG
        }
      }
      return null
    }
    const rG = yG.c.define(),
      zG = yG.c.define(),
      EG = yG.m.define(),
      oG = yG.m.define({
        combine: GG => (0, yG.S)(GG, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (GG, bG) => bG
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (GG, bG) => (ZG, wG) => GG(ZG, wG) || bG(ZG, wG)
        })
      }),
      XG = yG.G.define({
        create: () => sG.empty,
        update(GG, bG) {
          let ZG = bG.state.facet(oG),
            wG = bG.annotation(rG);
          if (wG) {
            let SG = IG.fromTransaction(bG, wG.selection),
              LG = wG.side,
              yG = 0 == LG ? GG.undone : GG.done;
            return yG = SG ? FG(yG, yG.length, ZG.minDepth, SG) : lG(yG, bG.startState.selection), new sG(0 == LG ? wG.rest : yG, 0 == LG ? yG : wG.rest)
          }
          let SG = bG.annotation(zG);
          if ("full" != SG && "before" != SG || (GG = GG.isolate()), !1 === bG.annotation(yG.M.addToHistory)) return bG.changes.empty ? GG : GG.addMapping(bG.changes.desc);
          let LG = IG.fromTransaction(bG),
            kG = bG.annotation(yG.M.time),
            UG = bG.annotation(yG.M.userEvent);
          return LG ? GG = GG.addChanges(LG, kG, UG, ZG, bG) : bG.selection && (GG = GG.addSelection(bG.startState.selection, kG, UG, ZG.newGroupDelay)), "full" != SG && "after" != SG || (GG = GG.isolate()), GG
        },
        toJSON: GG => ({
          done: GG.done.map((GG => GG.toJSON())),
          undone: GG.undone.map((GG => GG.toJSON()))
        }),
        fromJSON: GG => new sG(GG.done.map(IG.fromJSON), GG.undone.map(IG.fromJSON))
      });

    function uG(GG, bG) {
      return function(ZG) {
        let {
          state: wG,
          dispatch: SG
        } = ZG;
        if (!bG && wG.readOnly) return !1;
        let LG = wG.field(XG, !1);
        if (!LG) return !1;
        let yG = LG.pop(GG, wG, bG);
        return !!yG && (SG(yG), !0)
      }
    }
    const iG = uG(0, !1),
      CG = uG(1, !1),
      WG = uG(0, !0),
      mG = uG(1, !0);
    class IG {
      constructor(GG, bG, ZG, wG, SG) {
        this.changes = GG, this.effects = bG, this.mapped = ZG, this.startSelection = wG, this.selectionsAfter = SG
      }
      setSelAfter(GG) {
        return new IG(this.changes, this.effects, this.mapped, this.startSelection, GG)
      }
      toJSON() {
        var GG, bG, ZG;
        return {
          changes: null === (GG = this.changes) || void 0 === GG ? void 0 : GG.toJSON(),
          mapped: null === (bG = this.mapped) || void 0 === bG ? void 0 : bG.toJSON(),
          startSelection: null === (ZG = this.startSelection) || void 0 === ZG ? void 0 : ZG.toJSON(),
          selectionsAfter: this.selectionsAfter.map((GG => GG.toJSON()))
        }
      }
      static fromJSON(GG) {
        return new IG(GG.changes && yG.ChangeSet.fromJSON(GG.changes), [], GG.mapped && yG.d.fromJSON(GG.mapped), GG.startSelection && yG.j.fromJSON(GG.startSelection), GG.selectionsAfter.map(yG.j.fromJSON))
      }
      static fromTransaction(GG, bG) {
        let ZG = aG;
        for (let wG of GG.startState.facet(EG)) {
          let bG = wG(GG);
          bG.length && (ZG = ZG.concat(bG))
        }
        return !ZG.length && GG.changes.empty ? null : new IG(GG.changes.invert(GG.startState.doc), ZG, void 0, bG || GG.startState.selection, aG)
      }
      static selection(GG) {
        return new IG(void 0, aG, void 0, void 0, GG)
      }
    }

    function FG(GG, bG, ZG, wG) {
      let SG = bG + 1 > ZG + 20 ? bG - ZG - 1 : 0,
        LG = GG.slice(SG, bG);
      return LG.push(wG), LG
    }

    function vG(GG, bG) {
      return GG.length ? bG.length ? GG.concat(bG) : GG : bG
    }
    const aG = [],
      cG = 200;

    function lG(GG, bG) {
      if (GG.length) {
        let ZG = GG[GG.length - 1],
          wG = ZG.selectionsAfter.slice(Math.max(0, ZG.selectionsAfter.length - cG));
        return wG.length && wG[wG.length - 1].eq(bG) ? GG : (wG.push(bG), FG(GG, GG.length - 1, 1e9, ZG.setSelAfter(wG)))
      }
      return [IG.selection([bG])]
    }

    function jG(GG) {
      let bG = GG[GG.length - 1],
        ZG = GG.slice();
      return ZG[GG.length - 1] = bG.setSelAfter(bG.selectionsAfter.slice(0, bG.selectionsAfter.length - 1)), ZG
    }

    function PG(GG, bG) {
      if (!GG.length) return GG;
      let ZG = GG.length,
        wG = aG;
      for (; ZG;) {
        let SG = MG(GG[ZG - 1], bG, wG);
        if (SG.changes && !SG.changes.empty || SG.effects.length) {
          let bG = GG.slice(0, ZG);
          return bG[ZG - 1] = SG, bG
        }
        bG = SG.mapped, ZG--, wG = SG.selectionsAfter
      }
      return wG.length ? [IG.selection(wG)] : aG
    }

    function MG(GG, bG, ZG) {
      let wG = vG(GG.selectionsAfter.length ? GG.selectionsAfter.map((GG => GG.map(bG))) : aG, ZG);
      if (!GG.changes) return IG.selection(wG);
      let SG = GG.changes.map(bG),
        LG = bG.mapDesc(GG.changes, !0),
        kG = GG.mapped ? GG.mapped.composeDesc(LG) : LG;
      return new IG(SG, yG.C.mapEffects(GG.effects, bG), kG, GG.startSelection.map(LG), wG)
    }
    const AG = /^(input\.type|delete)($|\.)/;
    class sG {
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = GG, this.undone = bG, this.prevTime = ZG, this.prevUserEvent = wG
      }
      isolate() {
        return this.prevTime ? new sG(this.done, this.undone) : this
      }
      addChanges(GG, bG, ZG, wG, SG) {
        let LG = this.done,
          kG = LG[LG.length - 1];
        return LG = kG && kG.changes && !kG.changes.empty && GG.changes && (!ZG || AG.test(ZG)) && (!kG.selectionsAfter.length && bG - this.prevTime < wG.newGroupDelay && wG.joinToEvent(SG, function(GG, bG) {
          let ZG = [],
            wG = !1;
          return GG.iterChangedRanges(((GG, bG) => ZG.push(GG, bG))), bG.iterChangedRanges(((GG, bG, SG, LG) => {
            for (let yG = 0; yG < ZG.length;) {
              let GG = ZG[yG++],
                bG = ZG[yG++];
              LG >= GG && SG <= bG && (wG = !0)
            }
          })), wG
        }(kG.changes, GG.changes)) || "input.type.compose" == ZG) ? FG(LG, LG.length - 1, wG.minDepth, new IG(GG.changes.compose(kG.changes), vG(yG.C.mapEffects(GG.effects, kG.changes), kG.effects), kG.mapped, kG.startSelection, aG)) : FG(LG, LG.length, wG.minDepth, GG), new sG(LG, aG, bG, ZG)
      }
      addSelection(GG, bG, ZG, wG) {
        let SG = this.done.length ? this.done[this.done.length - 1].selectionsAfter : aG;
        return SG.length > 0 && bG - this.prevTime < wG && ZG == this.prevUserEvent && ZG && /^select($|\.)/.test(ZG) && (LG = SG[SG.length - 1], yG = GG, LG.Bh.length == yG.Bh.length && 0 === LG.Bh.filter(((GG, bG) => GG.empty != yG.Bh[bG].empty)).length) ? this : new sG(lG(this.done, GG), this.undone, bG, ZG);
        var LG, yG
      }
      addMapping(GG) {
        return new sG(PG(this.done, GG), PG(this.undone, GG), this.prevTime, this.prevUserEvent)
      }
      pop(GG, bG, ZG) {
        let wG = 0 == GG ? this.done : this.undone;
        if (0 == wG.length) return null;
        let SG = wG[wG.length - 1],
          LG = SG.selectionsAfter[0] || (SG.startSelection ? SG.startSelection.map(SG.changes.invertedDesc, 1) : bG.selection);
        if (ZG && SG.selectionsAfter.length) return bG.update({
          selection: SG.selectionsAfter[SG.selectionsAfter.length - 1],
          annotations: rG.of({
            side: GG,
            rest: jG(wG),
            selection: LG
          }),
          userEvent: 0 == GG ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (SG.changes) {
          let ZG = 1 == wG.length ? aG : wG.slice(0, wG.length - 1);
          return SG.mapped && (ZG = PG(ZG, SG.mapped)), bG.update({
            changes: SG.changes,
            selection: SG.startSelection,
            effects: SG.effects,
            annotations: rG.of({
              side: GG,
              rest: ZG,
              selection: LG
            }),
            filter: !1,
            userEvent: 0 == GG ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    sG.empty = new sG(aG, aG);
    const qG = [{
      key: "Mod-z",
      run: iG,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: CG,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: CG,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: WG,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: mG,
      preventDefault: !0
    }];

    function nG(GG, bG) {
      return yG.j.create(GG.Bh.map(bG), GG.mainIndex)
    }

    function gG(GG, bG) {
      return GG.update({
        selection: bG,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function eG(GG, bG) {
      let {
        state: ZG,
        dispatch: wG
      } = GG, SG = nG(ZG.selection, bG);
      return !SG.eq(ZG.selection, !0) && (wG(gG(ZG, SG)), !0)
    }

    function RG(GG, bG) {
      return yG.j.cursor(bG ? GG.to : GG.from)
    }

    function TG(GG, bG) {
      return eG(GG, (ZG => ZG.empty ? GG.moveByChar(ZG, bG) : RG(ZG, bG)))
    }

    function HG(GG) {
      return GG.textDirectionAt(GG.state.selection.main.head) == kG.d.LTR
    }
    const tG = GG => TG(GG, !HG(GG)),
      DG = GG => TG(GG, HG(GG));

    function NG(GG, bG) {
      return eG(GG, (ZG => ZG.empty ? GG.moveByGroup(ZG, bG) : RG(ZG, bG)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function OG(GG, bG, ZG) {
      if (bG.type.prop(ZG)) return !0;
      let wG = bG.to - bG.from;
      return wG && (wG > 2 || /[^\s,.;:]/.test(GG.sliceDoc(bG.from, bG.to))) || bG.firstChild
    }

    function xG(GG, bG, ZG) {
      let wG, SG, LG = (0, UG.gb)(GG).resolveInner(bG.head),
        kG = ZG ? YG.i.closedBy : YG.i.openedBy;
      for (let yG = bG.head;;) {
        let bG = ZG ? LG.childAfter(yG) : LG.childBefore(yG);
        if (!bG) break;
        OG(GG, bG, kG) ? LG = bG : yG = ZG ? bG.to : bG.from
      }
      return SG = LG.type.prop(kG) && (wG = ZG ? (0, UG.Y)(GG, LG.from, 1) : (0, UG.Y)(GG, LG.to, -1)) && wG.matched ? ZG ? wG.end.to : wG.end.from : ZG ? LG.to : LG.from, yG.j.cursor(SG, ZG ? -1 : 1)
    }

    function BG(GG, bG) {
      return eG(GG, (ZG => {
        if (!ZG.empty) return RG(ZG, bG);
        let wG = GG.moveVertically(ZG, bG);
        return wG.head != ZG.head ? wG : GG.moveToLineBoundary(ZG, bG)
      }))
    }
    const Gb = GG => BG(GG, !1),
      bb = GG => BG(GG, !0);

    function Zb(GG) {
      let bG, ZG = GG.scrollDOM.clientHeight < GG.scrollDOM.scrollHeight - 2,
        wG = 0,
        SG = 0;
      if (ZG) {
        for (let bG of GG.state.facet(kG.h.scrollMargins)) {
          let ZG = bG(GG);
          (null === ZG || void 0 === ZG ? void 0 : ZG.top) && (wG = Math.max(null === ZG || void 0 === ZG ? void 0 : ZG.top, wG)), (null === ZG || void 0 === ZG ? void 0 : ZG.bottom) && (SG = Math.max(null === ZG || void 0 === ZG ? void 0 : ZG.bottom, SG))
        }
        bG = GG.scrollDOM.clientHeight - wG - SG
      } else bG = (GG.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: wG,
        marginBottom: SG,
        selfScroll: ZG,
        height: Math.max(GG.defaultLineHeight, bG - 5)
      }
    }

    function wb(GG, bG) {
      let ZG, wG = Zb(GG),
        {
          state: SG
        } = GG,
        LG = nG(SG.selection, (ZG => ZG.empty ? GG.moveVertically(ZG, bG, wG.height) : RG(ZG, bG)));
      if (LG.eq(SG.selection)) return !1;
      if (wG.selfScroll) {
        let bG = GG.coordsAtPos(SG.selection.main.head),
          yG = GG.scrollDOM.getBoundingClientRect(),
          UG = yG.top + wG.marginTop,
          YG = yG.bottom - wG.marginBottom;
        bG && bG.top > UG && bG.bottom < YG && (ZG = kG.h.scrollIntoView(LG.main.head, {
          y: "start",
          yMargin: bG.top - UG
        }))
      }
      return GG.dispatch(gG(SG, LG), {
        effects: ZG
      }), !0
    }
    const Sb = GG => wb(GG, !1),
      Lb = GG => wb(GG, !0);

    function yb(GG, bG, ZG) {
      let wG = GG.lineBlockAt(bG.head),
        SG = GG.moveToLineBoundary(bG, ZG);
      if (SG.head == bG.head && SG.head != (ZG ? wG.to : wG.from) && (SG = GG.moveToLineBoundary(bG, ZG, !1)), !ZG && SG.head == wG.from && wG.length) {
        let ZG = /^\s*/.exec(GG.state.sliceDoc(wG.from, Math.min(wG.from + 100, wG.to)))[0].length;
        ZG && bG.head != wG.from + ZG && (SG = yG.j.cursor(wG.from + ZG))
      }
      return SG
    }

    function kb(GG, bG, ZG) {
      let wG = !1,
        SG = nG(GG.selection, (bG => {
          let SG = (0, UG.Y)(GG, bG.head, -1) || (0, UG.Y)(GG, bG.head, 1) || bG.head > 0 && (0, UG.Y)(GG, bG.head - 1, 1) || bG.head < GG.doc.length && (0, UG.Y)(GG, bG.head + 1, -1);
          if (!SG || !SG.end) return bG;
          wG = !0;
          let LG = SG.start.from == bG.head ? SG.end.to : SG.end.from;
          return ZG ? yG.j.range(bG.anchor, LG) : yG.j.cursor(LG)
        }));
      return !!wG && (bG(gG(GG, SG)), !0)
    }

    function Ub(GG, bG) {
      let ZG = nG(GG.state.selection, (GG => {
        let ZG = bG(GG);
        return yG.j.range(GG.anchor, ZG.head, ZG.goalColumn, ZG.bidiLevel || void 0, ZG.assoc)
      }));
      return !ZG.eq(GG.state.selection) && (GG.dispatch(gG(GG.state, ZG)), !0)
    }

    function Yb(GG, bG) {
      return Ub(GG, (ZG => GG.moveByChar(ZG, bG)))
    }
    const Vb = GG => Yb(GG, !HG(GG)),
      pb = GG => Yb(GG, HG(GG));

    function fb(GG, bG) {
      return Ub(GG, (ZG => GG.moveByGroup(ZG, bG)))
    }

    function Qb(GG, bG) {
      return Ub(GG, (ZG => GG.moveVertically(ZG, bG)))
    }
    const Kb = GG => Qb(GG, !1),
      hb = GG => Qb(GG, !0);

    function db(GG, bG) {
      return Ub(GG, (ZG => GG.moveVertically(ZG, bG, Zb(GG).height)))
    }
    const Jb = GG => db(GG, !1),
      rb = GG => db(GG, !0),
      zb = GG => {
        let {
          state: bG,
          dispatch: ZG
        } = GG;
        return ZG(gG(bG, {
          anchor: 0
        })), !0
      },
      Eb = GG => {
        let {
          state: bG,
          dispatch: ZG
        } = GG;
        return ZG(gG(bG, {
          anchor: bG.doc.length
        })), !0
      },
      ob = GG => {
        let {
          state: bG,
          dispatch: ZG
        } = GG;
        return ZG(gG(bG, {
          anchor: bG.selection.main.anchor,
          head: 0
        })), !0
      },
      Xb = GG => {
        let {
          state: bG,
          dispatch: ZG
        } = GG;
        return ZG(gG(bG, {
          anchor: bG.selection.main.anchor,
          head: bG.doc.length
        })), !0
      };

    function ub(GG, bG) {
      let {
        state: ZG
      } = GG, wG = ZG.selection, SG = ZG.selection.Bh.slice();
      for (let LG of ZG.selection.Bh) {
        let wG = ZG.doc.lineAt(LG.head);
        if (bG ? wG.to < GG.state.doc.length : wG.from > 0)
          for (let ZG = LG;;) {
            let LG = GG.moveVertically(ZG, bG);
            if (LG.head < wG.from || LG.head > wG.to) {
              SG.some((GG => GG.head == LG.head)) || SG.push(LG);
              break
            }
            if (LG.head == ZG.head) break;
            ZG = LG
          }
      }
      return SG.length != wG.Bh.length && (GG.dispatch(gG(ZG, yG.j.create(SG, SG.length - 1))), !0)
    }

    function ib(GG, bG) {
      if (GG.state.readOnly) return !1;
      let ZG = "delete.selection",
        {
          state: wG
        } = GG,
        SG = wG.changeByRange((wG => {
          let {
            from: SG,
            to: LG
          } = wG;
          if (SG == LG) {
            let yG = bG(wG);
            yG < SG ? (ZG = "delete.backward", yG = Cb(GG, yG, !1)) : yG > SG && (ZG = "delete.forward", yG = Cb(GG, yG, !0)), SG = Math.min(SG, yG), LG = Math.max(LG, yG)
          } else SG = Cb(GG, SG, !1), LG = Cb(GG, LG, !0);
          return SG == LG ? {
            range: wG
          } : {
            changes: {
              from: SG,
              to: LG
            },
            range: yG.j.cursor(SG, SG < wG.head ? -1 : 1)
          }
        }));
      return !SG.changes.empty && (GG.dispatch(wG.update(SG, {
        scrollIntoView: !0,
        userEvent: ZG,
        effects: "delete.selection" == ZG ? kG.h.announce.of(wG.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function Cb(GG, bG, ZG) {
      if (GG instanceof kG.h)
        for (let wG of GG.state.facet(kG.h.atomicRanges).map((bG => bG(GG)))) wG.between(bG, bG, ((GG, wG) => {
          GG < bG && wG > bG && (bG = ZG ? wG : GG)
        }));
      return bG
    }
    const Wb = (GG, bG, ZG) => ib(GG, (wG => {
        let SG, LG, kG = wG.from,
          {
            state: YG
          } = GG,
          VG = YG.doc.lineAt(kG);
        if (ZG && !bG && kG > VG.from && kG < VG.from + 200 && !/[^ \t]/.test(SG = VG.text.slice(0, kG - VG.from))) {
          if ("\t" == SG[SG.length - 1]) return kG - 1;
          let GG = (0, yG.T)(SG, YG.tabSize) % (0, UG.M)(YG) || (0, UG.M)(YG);
          for (let bG = 0; bG < GG && " " == SG[SG.length - 1 - bG]; bG++) kG--;
          LG = kG
        } else LG = (0, yG.X)(VG.text, kG - VG.from, bG, bG) + VG.from, LG == kG && VG.number != (bG ? YG.doc.lines : 1) ? LG += bG ? 1 : -1 : !bG && /[\ufe00-\ufe0f]/.test(VG.text.slice(LG - VG.from, kG - VG.from)) && (LG = (0, yG.X)(VG.text, LG - VG.from, !1, !1) + VG.from);
        return LG
      })),
      mb = GG => Wb(GG, !1, !0),
      Ib = GG => Wb(GG, !0, !1),
      Fb = (GG, bG) => ib(GG, (ZG => {
        let wG = ZG.head,
          {
            state: SG
          } = GG,
          LG = SG.doc.lineAt(wG),
          kG = SG.charCategorizer(wG);
        for (let GG = null;;) {
          if (wG == (bG ? LG.to : LG.from)) {
            wG == ZG.head && LG.number != (bG ? SG.doc.lines : 1) && (wG += bG ? 1 : -1);
            break
          }
          let UG = (0, yG.X)(LG.text, wG - LG.from, bG) + LG.from,
            YG = LG.text.slice(Math.min(wG, UG) - LG.from, Math.max(wG, UG) - LG.from),
            VG = kG(YG);
          if (null != GG && VG != GG) break;
          " " == YG && wG == ZG.head || (GG = VG), wG = UG
        }
        return wG
      })),
      vb = GG => Fb(GG, !1);

    function ab(GG) {
      let bG = [],
        ZG = -1;
      for (let wG of GG.selection.Bh) {
        let SG = GG.doc.lineAt(wG.from),
          LG = GG.doc.lineAt(wG.to);
        if (wG.empty || wG.to != LG.from || (LG = GG.doc.lineAt(wG.to - 1)), ZG >= SG.number) {
          let GG = bG[bG.length - 1];
          GG.to = LG.to, GG.Bh.push(wG)
        } else bG.push({
          from: SG.from,
          to: LG.to,
          Bh: [wG]
        });
        ZG = LG.number + 1
      }
      return bG
    }

    function cb(GG, bG, ZG) {
      if (GG.readOnly) return !1;
      let wG = [],
        SG = [];
      for (let LG of ab(GG)) {
        if (ZG ? LG.to == GG.doc.length : 0 == LG.from) continue;
        let bG = GG.doc.lineAt(ZG ? LG.to + 1 : LG.from - 1),
          kG = bG.length + 1;
        if (ZG) {
          wG.push({
            from: LG.to,
            to: bG.to
          }, {
            from: LG.from,
            insert: bG.text + GG.lineBreak
          });
          for (let bG of LG.Bh) SG.push(yG.j.range(Math.min(GG.doc.length, bG.anchor + kG), Math.min(GG.doc.length, bG.head + kG)))
        } else {
          wG.push({
            from: bG.from,
            to: LG.from
          }, {
            from: LG.to,
            insert: GG.lineBreak + bG.text
          });
          for (let GG of LG.Bh) SG.push(yG.j.range(GG.anchor - kG, GG.head - kG))
        }
      }
      return !!wG.length && (bG(GG.update({
        changes: wG,
        scrollIntoView: !0,
        selection: yG.j.create(SG, GG.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function lb(GG, bG, ZG) {
      if (GG.readOnly) return !1;
      let wG = [];
      for (let LG of ab(GG)) ZG ? wG.push({
        from: LG.from,
        insert: GG.doc.slice(LG.from, LG.to) + GG.lineBreak
      }) : wG.push({
        from: LG.to,
        insert: GG.lineBreak + GG.doc.slice(LG.from, LG.to)
      });
      let SG = GG.changes(wG);
      return bG(GG.update({
        changes: SG,
        selection: GG.selection.map(SG, ZG ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const jb = Pb(!1);

    function Pb(GG) {
      return bG => {
        let {
          state: ZG,
          dispatch: wG
        } = bG;
        if (ZG.readOnly) return !1;
        let SG = ZG.changeByRange((bG => {
          let {
            from: wG,
            to: SG
          } = bG, LG = ZG.doc.lineAt(wG), kG = !GG && wG == SG && function(GG, bG) {
            if (/\(\)|\[\]|\{\}/.test(GG.sliceDoc(bG - 1, bG + 1))) return {
              from: bG,
              to: bG
            };
            let ZG, wG = (0, UG.gb)(GG).resolveInner(bG),
              SG = wG.childBefore(bG),
              LG = wG.childAfter(bG);
            return SG && LG && SG.to <= bG && LG.from >= bG && (ZG = SG.type.prop(YG.i.closedBy)) && ZG.indexOf(LG.name) > -1 && GG.doc.lineAt(SG.to).from == GG.doc.lineAt(LG.from).from && !/\S/.test(GG.sliceDoc(SG.to, LG.from)) ? {
              from: SG.to,
              to: LG.from
            } : null
          }(ZG, wG);
          GG && (wG = SG = (SG <= LG.to ? LG : ZG.doc.lineAt(SG)).to);
          let VG = new UG.c(ZG, {
              simulateBreak: wG,
              simulateDoubleBreak: !!kG
            }),
            pG = (0, UG.N)(VG, wG);
          for (null == pG && (pG = (0, yG.T)(/^\s*/.exec(ZG.doc.lineAt(wG).text)[0], ZG.tabSize)); SG < LG.to && /\s/.test(LG.text[SG - LG.from]);) SG++;
          kG ? ({
            from: wG,
            to: SG
          } = kG) : wG > LG.from && wG < LG.from + 100 && !/\S/.test(LG.text.slice(0, wG)) && (wG = LG.from);
          let fG = ["", (0, UG.U)(ZG, pG)];
          return kG && fG.push((0, UG.U)(ZG, VG.lineIndent(LG.from, -1))), {
            changes: {
              from: wG,
              to: SG,
              insert: yG.I.of(fG)
            },
            range: yG.j.cursor(wG + 1 + fG[1].length)
          }
        }));
        return wG(ZG.update(SG, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function Mb(GG, bG) {
      let ZG = -1;
      return GG.changeByRange((wG => {
        let SG = [];
        for (let yG = wG.from; yG <= wG.to;) {
          let LG = GG.doc.lineAt(yG);
          LG.number > ZG && (wG.empty || wG.to > LG.from) && (bG(LG, SG, wG), ZG = LG.number), yG = LG.to + 1
        }
        let LG = GG.changes(SG);
        return {
          changes: SG,
          range: yG.j.range(LG.mapPos(wG.anchor, 1), LG.mapPos(wG.head, 1))
        }
      }))
    }
    const Ab = GG => {
        let {
          state: bG,
          dispatch: ZG
        } = GG;
        return !bG.readOnly && (ZG(bG.update(Mb(bG, ((GG, ZG) => {
          ZG.push({
            from: GG.from,
            insert: bG.facet(UG.X)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      sb = GG => {
        let {
          state: bG,
          dispatch: ZG
        } = GG;
        return !bG.readOnly && (ZG(bG.update(Mb(bG, ((GG, ZG) => {
          let wG = /^\s*/.exec(GG.text)[0];
          if (!wG) return;
          let SG = (0, yG.T)(wG, bG.tabSize),
            LG = 0,
            kG = (0, UG.U)(bG, Math.max(0, SG - (0, UG.M)(bG)));
          for (; LG < wG.length && LG < kG.length && wG.charCodeAt(LG) == kG.charCodeAt(LG);) LG++;
          ZG.push({
            from: GG.from + LG,
            to: GG.from + wG.length,
            insert: kG.slice(LG)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      qb = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: GG => eG(GG, (bG => xG(GG.state, bG, !HG(GG)))),
        shift: GG => Ub(GG, (bG => xG(GG.state, bG, !HG(GG))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: GG => eG(GG, (bG => xG(GG.state, bG, HG(GG)))),
        shift: GG => Ub(GG, (bG => xG(GG.state, bG, HG(GG))))
      }, {
        key: "Alt-ArrowUp",
        run: GG => {
          let {
            state: bG,
            dispatch: ZG
          } = GG;
          return cb(bG, ZG, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: GG => {
          let {
            state: bG,
            dispatch: ZG
          } = GG;
          return lb(bG, ZG, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: GG => {
          let {
            state: bG,
            dispatch: ZG
          } = GG;
          return cb(bG, ZG, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: GG => {
          let {
            state: bG,
            dispatch: ZG
          } = GG;
          return lb(bG, ZG, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: GG => ub(GG, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: GG => ub(GG, !0)
      }, {
        key: "Escape",
        run: GG => {
          let {
            state: bG,
            dispatch: ZG
          } = GG, wG = bG.selection, SG = null;
          return wG.Bh.length > 1 ? SG = yG.j.create([wG.main]) : wG.main.empty || (SG = yG.j.create([yG.j.cursor(wG.main.head)])), !!SG && (ZG(gG(bG, SG)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: Pb(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: GG => {
          let {
            state: bG,
            dispatch: ZG
          } = GG, wG = ab(bG).map((GG => {
            let {
              from: ZG,
              to: wG
            } = GG;
            return yG.j.range(ZG, Math.min(wG + 1, bG.doc.length))
          }));
          return ZG(bG.update({
            selection: yG.j.create(wG),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: GG => {
          let {
            state: bG,
            dispatch: ZG
          } = GG, wG = nG(bG.selection, (GG => {
            let ZG = (0, UG.gb)(bG),
              wG = ZG.resolveStack(GG.from, 1);
            if (GG.empty) {
              let bG = ZG.resolveStack(GG.from, -1);
              bG.node.from >= wG.node.from && bG.node.to <= wG.node.to && (wG = bG)
            }
            for (let bG = wG; bG; bG = bG.next) {
              let {
                node: ZG
              } = bG;
              if ((ZG.from < GG.from && ZG.to >= GG.to || ZG.to > GG.to && ZG.from <= GG.from) && bG.next) return yG.j.range(ZG.to, ZG.from)
            }
            return GG
          }));
          return !wG.eq(bG.selection) && (ZG(gG(bG, wG)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: sb
      }, {
        key: "Mod-]",
        run: Ab
      }, {
        key: "Mod-Alt-\\",
        run: GG => {
          let {
            state: bG,
            dispatch: ZG
          } = GG;
          if (bG.readOnly) return !1;
          let wG = Object.create(null),
            SG = new UG.c(bG, {
              overrideIndentation: GG => {
                let bG = wG[GG];
                return null == bG ? -1 : bG
              }
            }),
            LG = Mb(bG, ((GG, ZG, LG) => {
              let yG = (0, UG.N)(SG, GG.from);
              if (null == yG) return;
              /\S/.test(GG.text) || (yG = 0);
              let kG = /^\s*/.exec(GG.text)[0],
                YG = (0, UG.U)(bG, yG);
              (kG != YG || LG.from < GG.from + kG.length) && (wG[GG.from] = yG, ZG.push({
                from: GG.from,
                to: GG.from + kG.length,
                insert: YG
              }))
            }));
          return LG.changes.empty || ZG(bG.update(LG, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: GG => {
          if (GG.state.readOnly) return !1;
          let {
            state: bG
          } = GG, ZG = bG.changes(ab(bG).map((GG => {
            let {
              from: ZG,
              to: wG
            } = GG;
            return ZG > 0 ? ZG-- : wG < bG.doc.length && wG++, {
              from: ZG,
              to: wG
            }
          }))), wG = nG(bG.selection, (bG => {
            let ZG;
            if (GG.lineWrapping) {
              let wG = GG.lineBlockAt(bG.head),
                SG = GG.coordsAtPos(bG.head, bG.assoc || 1);
              SG && (ZG = wG.bottom + GG.documentTop - SG.bottom + GG.defaultLineHeight / 2)
            }
            return GG.moveVertically(bG, !0, ZG)
          })).map(ZG);
          return GG.dispatch({
            changes: ZG,
            selection: wG,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: GG => {
          let {
            state: bG,
            dispatch: ZG
          } = GG;
          return kb(bG, ZG, !1)
        }
      }, {
        key: "Mod-/",
        run: GG => {
          let {
            state: bG
          } = GG, ZG = bG.doc.lineAt(bG.selection.main.from), wG = KG(GG.state, ZG.from);
          return wG.line ? pG(GG) : !!wG.block && QG(GG)
        }
      }, {
        key: "Alt-A",
        run: fG
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: GG => (GG.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: tG,
        shift: Vb,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: GG => NG(GG, !HG(GG)),
        shift: GG => fb(GG, !HG(GG)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: GG => eG(GG, (bG => yb(GG, bG, !HG(GG)))),
        shift: GG => Ub(GG, (bG => yb(GG, bG, !HG(GG)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: DG,
        shift: pb,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: GG => NG(GG, HG(GG)),
        shift: GG => fb(GG, HG(GG)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: GG => eG(GG, (bG => yb(GG, bG, HG(GG)))),
        shift: GG => Ub(GG, (bG => yb(GG, bG, HG(GG)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: Gb,
        shift: Kb,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: zb,
        shift: ob
      }, {
        mac: "Ctrl-ArrowUp",
        run: Sb,
        shift: Jb
      }, {
        key: "ArrowDown",
        run: bb,
        shift: hb,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: Eb,
        shift: Xb
      }, {
        mac: "Ctrl-ArrowDown",
        run: Lb,
        shift: rb
      }, {
        key: "PageUp",
        run: Sb,
        shift: Jb
      }, {
        key: "PageDown",
        run: Lb,
        shift: rb
      }, {
        key: "Home",
        run: GG => eG(GG, (bG => yb(GG, bG, !1))),
        shift: GG => Ub(GG, (bG => yb(GG, bG, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: zb,
        shift: ob
      }, {
        key: "End",
        run: GG => eG(GG, (bG => yb(GG, bG, !0))),
        shift: GG => Ub(GG, (bG => yb(GG, bG, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: Eb,
        shift: Xb
      }, {
        key: "Enter",
        run: jb,
        shift: jb
      }, {
        key: "Mod-a",
        run: GG => {
          let {
            state: bG,
            dispatch: ZG
          } = GG;
          return ZG(bG.update({
            selection: {
              anchor: 0,
              head: bG.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: mb,
        shift: mb,
        preventDefault: !0
      }, {
        key: "Delete",
        run: Ib,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: vb,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: GG => Fb(GG, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: GG => ib(GG, (bG => {
          let ZG = GG.moveToLineBoundary(bG, !1).head;
          return bG.head > ZG ? ZG : Math.max(0, bG.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: GG => ib(GG, (bG => {
          let ZG = GG.moveToLineBoundary(bG, !0).head;
          return bG.head < ZG ? ZG : Math.min(GG.state.doc.length, bG.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: tG,
        shift: Vb,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: DG,
        shift: pb
      }, {
        key: "Ctrl-p",
        run: Gb,
        shift: Kb
      }, {
        key: "Ctrl-n",
        run: bb,
        shift: hb
      }, {
        key: "Ctrl-a",
        run: GG => eG(GG, (bG => yG.j.cursor(GG.lineBlockAt(bG.head).from, 1))),
        shift: GG => Ub(GG, (bG => yG.j.cursor(GG.lineBlockAt(bG.head).from)))
      }, {
        key: "Ctrl-e",
        run: GG => eG(GG, (bG => yG.j.cursor(GG.lineBlockAt(bG.head).to, -1))),
        shift: GG => Ub(GG, (bG => yG.j.cursor(GG.lineBlockAt(bG.head).to)))
      }, {
        key: "Ctrl-d",
        run: Ib
      }, {
        key: "Ctrl-h",
        run: mb
      }, {
        key: "Ctrl-k",
        run: GG => ib(GG, (bG => {
          let ZG = GG.lineBlockAt(bG.head).to;
          return bG.head < ZG ? ZG : Math.min(GG.state.doc.length, bG.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: vb
      }, {
        key: "Ctrl-o",
        run: GG => {
          let {
            state: bG,
            dispatch: ZG
          } = GG;
          if (bG.readOnly) return !1;
          let wG = bG.changeByRange((GG => ({
            changes: {
              from: GG.from,
              to: GG.to,
              insert: yG.I.of(["", ""])
            },
            range: yG.j.cursor(GG.from)
          })));
          return ZG(bG.update(wG, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: GG => {
          let {
            state: bG,
            dispatch: ZG
          } = GG;
          if (bG.readOnly) return !1;
          let wG = bG.changeByRange((GG => {
            if (!GG.empty || 0 == GG.from || GG.from == bG.doc.length) return {
              range: GG
            };
            let ZG = GG.from,
              wG = bG.doc.lineAt(ZG),
              SG = ZG == wG.from ? ZG - 1 : (0, yG.X)(wG.text, ZG - wG.from, !1) + wG.from,
              LG = ZG == wG.to ? ZG + 1 : (0, yG.X)(wG.text, ZG - wG.from, !0) + wG.from;
            return {
              changes: {
                from: SG,
                to: LG,
                insert: bG.doc.slice(ZG, LG).append(bG.doc.slice(SG, ZG))
              },
              range: yG.j.cursor(LG)
            }
          }));
          return !wG.changes.empty && (ZG(bG.update(wG, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: Lb
      }].map((GG => ({
        mac: GG.key,
        run: GG.run,
        shift: GG.shift
      }))))),
      nb = {
        key: "Tab",
        run: Ab,
        shift: sb
      };
    var gb = ZG(41784),
      eb = ZG(41721),
      Rb = ZG(41787),
      Tb = function(GG) {
        void 0 === GG && (GG = {});
        var {
          crosshairCursor: bG = !1
        } = GG, ZG = [];
        !1 !== GG.closeBracketsKeymap && (ZG = ZG.concat(eb.f)), !1 !== GG.defaultKeymap && (ZG = ZG.concat(qb)), !1 !== GG.searchKeymap && (ZG = ZG.concat(gb.j)), !1 !== GG.historyKeymap && (ZG = ZG.concat(qG)), !1 !== GG.foldKeymap && (ZG = ZG.concat(UG.C)), !1 !== GG.completionKeymap && (ZG = ZG.concat(eb.l)), !1 !== GG.lintKeymap && (ZG = ZG.concat(Rb.b));
        var wG = [];
        return !1 !== GG.lineNumbers && wG.push((0, kG.S)()), !1 !== GG.highlightActiveLineGutter && wG.push((0, kG.D)()), !1 !== GG.highlightSpecialChars && wG.push((0, kG.K)()), !1 !== GG.history && wG.push(function() {
          let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [XG, oG.of(GG), kG.h.domEventHandlers({
            beforeinput(GG, bG) {
              let ZG = "historyUndo" == GG.inputType ? iG : "historyRedo" == GG.inputType ? CG : null;
              return !!ZG && (GG.preventDefault(), ZG(bG))
            }
          })]
        }()), !1 !== GG.foldGutter && wG.push((0, UG.z)()), !1 !== GG.drawSelection && wG.push((0, kG.q)()), !1 !== GG.dropCursor && wG.push((0, kG.t)()), !1 !== GG.allowMultipleSelections && wG.push(yG.l.allowMultipleSelections.of(!0)), !1 !== GG.indentOnInput && wG.push((0, UG.T)()), !1 !== GG.syntaxHighlighting && wG.push((0, UG.ab)(UG.n, {
          fallback: !0
        })), !1 !== GG.bracketMatching && wG.push((0, UG.i)()), !1 !== GG.closeBrackets && wG.push((0, eb.i)()), !1 !== GG.autocompletion && wG.push((0, eb.e)()), !1 !== GG.rectangularSelection && wG.push((0, kG.bb)()), !1 !== bG && wG.push((0, kG.p)()), !1 !== GG.highlightActiveLine && wG.push((0, kG.G)()), !1 !== GG.highlightSelectionMatches && wG.push((0, gb.h)()), GG.tabSize && "number" === typeof GG.tabSize && wG.push(UG.X.of(" ".repeat(GG.tabSize))), wG.concat([kG.O.of(ZG.flat())]).filter(Boolean)
      },
      Hb = ZG(41771);
    const tb = "#e5c07b",
      Db = "#e06c75",
      Nb = "#56b6c2",
      Ob = "#ffffff",
      xb = "#abb2bf",
      Bb = "#7d8799",
      GZ = "#61afef",
      bZ = "#98c379",
      ZZ = "#d19a66",
      wZ = "#c678dd",
      SZ = "#21252b",
      LZ = "#2c313a",
      yZ = "#282c34",
      kZ = "#353a42",
      UZ = "#3E4451",
      YZ = "#528bff",
      VZ = kG.h.theme({
        "&": {
          color: xb,
          backgroundColor: yZ
        },
        ".cm-content": {
          caretColor: YZ
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: YZ
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: UZ
        },
        ".cm-panels": {
          backgroundColor: SZ,
          color: xb
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
          backgroundColor: yZ,
          color: Bb,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: LZ
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: kZ
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: kZ,
          borderBottomColor: kZ
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: LZ,
            color: xb
          }
        }
      }, {
        dark: !0
      }),
      pZ = UG.b.define([{
        tag: Hb.k.keyword,
        color: wZ
      }, {
        tag: [Hb.k.name, Hb.k.deleted, Hb.k.character, Hb.k.propertyName, Hb.k.macroName],
        color: Db
      }, {
        tag: [Hb.k.function(Hb.k.variableName), Hb.k.labelName],
        color: GZ
      }, {
        tag: [Hb.k.color, Hb.k.constant(Hb.k.name), Hb.k.standard(Hb.k.name)],
        color: ZZ
      }, {
        tag: [Hb.k.definition(Hb.k.name), Hb.k.separator],
        color: xb
      }, {
        tag: [Hb.k.typeName, Hb.k.className, Hb.k.number, Hb.k.changed, Hb.k.annotation, Hb.k.modifier, Hb.k.self, Hb.k.namespace],
        color: tb
      }, {
        tag: [Hb.k.operator, Hb.k.operatorKeyword, Hb.k.url, Hb.k.escape, Hb.k.regexp, Hb.k.link, Hb.k.special(Hb.k.string)],
        color: Nb
      }, {
        tag: [Hb.k.meta, Hb.k.comment],
        color: Bb
      }, {
        tag: Hb.k.strong,
        fontWeight: "bold"
      }, {
        tag: Hb.k.emphasis,
        fontStyle: "italic"
      }, {
        tag: Hb.k.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: Hb.k.link,
        color: Bb,
        textDecoration: "underline"
      }, {
        tag: Hb.k.heading,
        fontWeight: "bold",
        color: Db
      }, {
        tag: [Hb.k.atom, Hb.k.bool, Hb.k.special(Hb.k.variableName)],
        color: ZZ
      }, {
        tag: [Hb.k.processingInstruction, Hb.k.string, Hb.k.inserted],
        color: bZ
      }, {
        tag: Hb.k.invalid,
        color: Ob
      }]),
      fZ = [VZ, (0, UG.ab)(pZ)];
    var QZ = kG.h.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class KZ {
      constructor(GG, bG) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = bG, this.timeoutMS = bG, this.callbacks.push(GG)
      }
      Tp() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var GG = this.callbacks.slice();
          this.callbacks.length = 0, GG.forEach((GG => {
            try {
              GG()
            } catch (bG) {
              console.error("TimeoutLatch callback error:", bG)
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
    class hZ {
      constructor() {
        this.interval = null, this.latches = new Set
      }
      add(GG) {
        this.latches.add(GG), this.start()
      }
      remove(GG) {
        this.latches.delete(GG), 0 === this.latches.size && this.stop()
      }
      start() {
        null === this.interval && (this.interval = setInterval((() => {
          this.latches.forEach((GG => {
            GG.Tp(), GG.isDone && this.remove(GG)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var dZ = null,
      JZ = yG.c.define(),
      rZ = [];

    function zZ(GG) {
      var {
        value: bG,
        selection: ZG,
        onChange: wG,
        onStatistics: SG,
        onCreateEditor: UG,
        onUpdate: YG,
        extensions: VG = rZ,
        autoFocus: pG,
        theme: fG = "light",
        height: QG = null,
        minHeight: KG = null,
        maxHeight: hG = null,
        width: dG = null,
        minWidth: JG = null,
        maxWidth: rG = null,
        placeholder: zG = "",
        editable: EG = !0,
        readOnly: oG = !1,
        indentWithTab: XG = !0,
        basicSetup: uG = !0,
        root: iG,
        initialState: CG
      } = GG, [WG, mG] = (0, LG.useState)(), [IG, FG] = (0, LG.useState)(), [vG, aG] = (0, LG.useState)(), cG = (0, LG.useState)((() => ({
        current: null
      })))[0], lG = (0, LG.useState)((() => ({
        current: null
      })))[0], jG = kG.h.theme({
        "&": {
          height: QG,
          minHeight: KG,
          maxHeight: hG,
          width: dG,
          minWidth: JG,
          maxWidth: rG
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), PG = kG.h.updateListener.of((GG => {
        if (GG.docChanged && "function" === typeof wG && !GG.transactions.some((GG => GG.annotation(JZ)))) {
          cG.current ? cG.current.reset() : (cG.current = new KZ((() => {
            if (lG.current) {
              var GG = lG.current;
              lG.current = null, GG()
            }
            cG.current = null
          }), 200), ("undefined" === typeof window ? new hZ : (dZ || (dZ = new hZ), dZ)).add(cG.current));
          var bG = GG.state.doc.toString();
          wG(bG, GG)
        }
        SG && SG((GG => ({
          line: GG.state.doc.lineAt(GG.state.selection.main.from),
          lineCount: GG.state.doc.lines,
          lineBreak: GG.state.lineBreak,
          length: GG.state.doc.length,
          readOnly: GG.state.readOnly,
          tabSize: GG.state.tabSize,
          selection: GG.state.selection,
          selectionAsSingle: GG.state.selection.asSingle().main,
          Bh: GG.state.selection.Bh,
          selectionCode: GG.state.sliceDoc(GG.state.selection.main.from, GG.state.selection.main.to),
          selections: GG.state.selection.Bh.map((bG => GG.state.sliceDoc(bG.from, bG.to))),
          selectedText: GG.state.selection.Bh.some((GG => !GG.empty))
        }))(GG))
      })), MG = function(GG) {
        void 0 === GG && (GG = {});
        var {
          indentWithTab: bG = !0,
          editable: ZG = !0,
          readOnly: wG = !1,
          theme: SG = "light",
          placeholder: LG = "",
          basicSetup: UG = !0
        } = GG, YG = [];
        switch (bG && YG.unshift(kG.O.of([nb])), UG && ("boolean" === typeof UG ? YG.unshift(Tb()) : YG.unshift(Tb(UG))), LG && YG.unshift((0, kG._)(LG)), SG) {
          case "light":
            YG.push(QZ);
            break;
          case "dark":
            YG.push(fZ);
            break;
          case "none":
            break;
          default:
            YG.push(SG)
        }
        return !1 === ZG && YG.push(kG.h.editable.of(!1)), wG && YG.push(yG.l.readOnly.of(!0)), [...YG]
      }({
        theme: fG,
        editable: EG,
        readOnly: oG,
        placeholder: zG,
        indentWithTab: XG,
        basicSetup: uG
      }), AG = [PG, jG, ...MG];
      return YG && "function" === typeof YG && AG.push(kG.h.updateListener.of(YG)), AG = AG.concat(VG), (0, LG.useLayoutEffect)((() => {
        if (WG && !vG) {
          var GG = {
              doc: bG,
              selection: ZG,
              extensions: AG
            },
            wG = CG ? yG.l.fromJSON(CG.json, GG, CG.fields) : yG.l.create(GG);
          if (aG(wG), !IG) {
            var SG = new kG.h({
              state: wG,
              parent: WG,
              root: iG
            });
            FG(SG), UG && UG(SG, wG)
          }
        }
        return () => {
          IG && (aG(void 0), FG(void 0))
        }
      }), [WG, vG]), (0, LG.useEffect)((() => {
        GG.container && mG(GG.container)
      }), [GG.container]), (0, LG.useEffect)((() => () => {
        IG && (IG.destroy(), FG(void 0)), cG.current && (cG.current.cancel(), cG.current = null)
      }), [IG]), (0, LG.useEffect)((() => {
        pG && IG && IG.focus()
      }), [pG, IG]), (0, LG.useEffect)((() => {
        IG && IG.dispatch({
          effects: yG.C.reconfigure.of(AG)
        })
      }), [fG, VG, QG, KG, hG, dG, JG, rG, zG, EG, oG, XG, uG, wG, YG]), (0, LG.useEffect)((() => {
        if (void 0 !== bG) {
          var GG = IG ? IG.state.doc.toString() : "";
          if (IG && bG !== GG) {
            var ZG = () => {
              IG && bG !== IG.state.doc.toString() && IG.dispatch({
                changes: {
                  from: 0,
                  to: IG.state.doc.toString().length,
                  insert: bG || ""
                },
                annotations: [JZ.of(!0)]
              })
            };
            cG.current && !cG.current.isDone ? lG.current = ZG : ZG()
          }
        }
      }), [bG, IG]), {
        state: vG,
        setState: aG,
        view: IG,
        setView: FG,
        container: WG,
        setContainer: mG
      }
    }
    var EZ = ZG(1067),
      oZ = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      XZ = (0, LG.forwardRef)(((GG, bG) => {
        var {
          className: ZG,
          value: yG = "",
          selection: kG,
          extensions: UG = [],
          onChange: YG,
          onStatistics: VG,
          onCreateEditor: pG,
          onUpdate: fG,
          autoFocus: QG,
          theme: KG = "light",
          height: hG,
          minHeight: dG,
          maxHeight: JG,
          width: rG,
          minWidth: zG,
          maxWidth: EG,
          basicSetup: oG,
          placeholder: XG,
          indentWithTab: uG,
          editable: iG,
          readOnly: CG,
          root: WG,
          initialState: mG
        } = GG, IG = (0, SG.c)(GG, oZ), FG = (0, LG.useRef)(null), {
          state: vG,
          view: aG,
          container: cG,
          setContainer: lG
        } = zZ({
          root: WG,
          value: yG,
          autoFocus: QG,
          theme: KG,
          height: hG,
          minHeight: dG,
          maxHeight: JG,
          width: rG,
          minWidth: zG,
          maxWidth: EG,
          basicSetup: oG,
          placeholder: XG,
          indentWithTab: uG,
          editable: iG,
          readOnly: CG,
          selection: kG,
          onChange: YG,
          onStatistics: VG,
          onCreateEditor: pG,
          onUpdate: fG,
          extensions: UG,
          initialState: mG
        });
        (0, LG.useImperativeHandle)(bG, (() => ({
          editor: FG.current,
          state: vG,
          view: aG
        })), [FG, cG, vG, aG]);
        var jG = (0, LG.useCallback)((GG => {
          FG.current = GG, lG(GG)
        }), [lG]);
        if ("string" !== typeof yG) throw new Error("value must be typeof string but got " + typeof yG);
        var PG = "string" === typeof KG ? "cm-theme-" + KG : "cm-theme";
        return (0, EZ.jsx)("div", (0, wG.c)({
          ref: jG,
          className: PG + (ZG ? " " + ZG : "")
        }, IG))
      }));
    XZ.displayName = "CodeMirror";
    const uZ = XZ
  },
  41751: (GG, bG, ZG) => {
    function wG() {
      var GG = arguments[0];
      "string" == typeof GG && (GG = document.createElement(GG));
      var bG = 1,
        ZG = arguments[1];
      if (ZG && "object" == typeof ZG && null == ZG.nodeType && !Array.isArray(ZG)) {
        for (var wG in ZG)
          if (Object.prototype.hasOwnProperty.call(ZG, wG)) {
            var LG = ZG[wG];
            "string" == typeof LG ? GG.setAttribute(wG, LG) : null != LG && (GG[wG] = LG)
          } bG++
      }
      for (; bG < arguments.length; bG++) SG(GG, arguments[bG]);
      return GG
    }

    function SG(GG, bG) {
      if ("string" == typeof bG) GG.appendChild(document.createTextNode(bG));
      else if (null == bG);
      else if (null != bG.nodeType) GG.appendChild(bG);
      else {
        if (!Array.isArray(bG)) throw new RangeError("Unsupported child node: " + bG);
        for (var ZG = 0; ZG < bG.length; ZG++) SG(GG, bG[ZG])
      }
    }
    ZG.d(bG, {
      c: () => wG
    })
  },
  41742: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => yG
    });
    const wG = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      SG = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      LG = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class yG {
      constructor(GG, bG) {
        this.rules = [];
        let {
          finish: ZG
        } = bG || {};

        function wG(GG) {
          return /^@/.test(GG) ? [GG] : GG.split(/,\s*/)
        }

        function SG(GG, bG, LG, yG) {
          let kG = [],
            UG = /^@(\w+)\b/.exec(GG[0]),
            YG = UG && "keyframes" == UG[1];
          if (UG && null == bG) return LG.push(GG[0] + ";");
          for (let ZG in bG) {
            let yG = bG[ZG];
            if (/&/.test(ZG)) SG(ZG.split(/,\s*/).map((bG => GG.map((GG => bG.replace(/&/, GG))))).reduce(((GG, bG) => GG.concat(bG))), yG, LG);
            else if (yG && "object" == typeof yG) {
              if (!UG) throw new RangeError("The value of a property (" + ZG + ") should be a primitive value.");
              SG(wG(ZG), yG, kG, YG)
            } else null != yG && kG.push(ZG.replace(/_.*/, "").replace(/[A-Z]/g, (GG => "-" + GG.toLowerCase())) + ": " + yG + ";")
          }(kG.length || YG) && LG.push((!ZG || UG || yG ? GG : GG.map(ZG)).join(", ") + " {" + kG.join(" ") + "}")
        }
        for (let LG in GG) SG(wG(LG), GG[LG], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let GG = LG[wG] || 1;
        return LG[wG] = GG + 1, "\u037c" + GG.toString(36)
      }
      static mount(GG, bG, ZG) {
        let wG = GG[SG],
          LG = ZG && ZG.nonce;
        wG ? LG && wG.setNonce(LG) : wG = new UG(GG, LG), wG.mount(Array.isArray(bG) ? bG : [bG], GG)
      }
    }
    let kG = new Map;
    class UG {
      constructor(GG, bG) {
        let ZG = GG.ownerDocument || GG,
          wG = ZG.defaultView;
        if (!GG.head && GG.adoptedStyleSheets && wG.CSSStyleSheet) {
          let bG = kG.get(ZG);
          if (bG) return GG[SG] = bG;
          this.sheet = new wG.CSSStyleSheet, kG.set(ZG, this)
        } else this.styleTag = ZG.createElement("style"), bG && this.styleTag.setAttribute("nonce", bG);
        this.modules = [], GG[SG] = this
      }
      mount(GG, bG) {
        let ZG = this.sheet,
          wG = 0,
          SG = 0;
        for (let LG = 0; LG < GG.length; LG++) {
          let bG = GG[LG],
            yG = this.modules.indexOf(bG);
          if (yG < SG && yG > -1 && (this.modules.splice(yG, 1), SG--, yG = -1), -1 == yG) {
            if (this.modules.splice(SG++, 0, bG), ZG)
              for (let GG = 0; GG < bG.rules.length; GG++) ZG.insertRule(bG.rules[GG], wG++)
          } else {
            for (; SG < yG;) wG += this.modules[SG++].rules.length;
            wG += bG.rules.length, SG++
          }
        }
        if (ZG) bG.adoptedStyleSheets.indexOf(this.sheet) < 0 && (bG.adoptedStyleSheets = [this.sheet, ...bG.adoptedStyleSheets]);
        else {
          let GG = "";
          for (let bG = 0; bG < this.modules.length; bG++) GG += this.modules[bG].getRules() + "\n";
          this.styleTag.textContent = GG;
          let ZG = bG.head || bG;
          this.styleTag.parentNode != ZG && ZG.insertBefore(this.styleTag, ZG.firstChild)
        }
      }
      setNonce(GG) {
        this.styleTag && this.styleTag.getAttribute("nonce") != GG && this.styleTag.setAttribute("nonce", GG)
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);