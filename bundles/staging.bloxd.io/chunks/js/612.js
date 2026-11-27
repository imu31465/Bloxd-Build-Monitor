export const id = 612;
export const ids = [612];
export const modules = {
  53314: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => NJ,
      h: () => BJ,
      l: () => UJ,
      m: () => iR,
      n: () => DJ,
      o: () => fR,
      q: () => wJ
    });
    var yR = GR(53317),
      tR = GR(53321),
      uR = GR(53340);
    class ZR {
      constructor(RR, JR, GR, yR) {
        this.state = RR, this.pos = JR, this.explicit = GR, this.view = yR, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(RR) {
        let JR = (0, uR.nb)(this.state).resolveInner(this.pos, -1);
        for (; JR && RR.indexOf(JR.name) < 0;) JR = JR.parent;
        return JR ? {
          from: JR.from,
          to: this.pos,
          text: this.state.sliceDoc(JR.from, this.pos),
          type: JR.type
        } : null
      }
      matchBefore(RR) {
        let JR = this.state.doc.lineAt(this.pos),
          GR = Math.max(JR.from, this.pos - 250),
          yR = JR.text.slice(GR - JR.from, this.pos - JR.from),
          tR = yR.search(wR(RR, !1));
        return tR < 0 ? null : {
          from: GR + tR,
          to: this.pos,
          text: yR.slice(tR)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(RR, JR, GR) {
        "abort" == RR && this.abortListeners && (this.abortListeners.push(JR), GR && GR.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function qR(RR) {
      let JR = Object.keys(RR).join(""),
        GR = /\w/.test(JR);
      return GR && (JR = JR.replace(/\w/g, "")), `[${GR?"\\w":""}${JR.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function iR(RR) {
      let JR = RR.map((RR => "string" == typeof RR ? {
          label: RR
        } : RR)),
        [GR, yR] = JR.every((RR => /^\w+$/.test(RR.label))) ? [/\w*$/, /\w+$/] : function(RR) {
          let JR = Object.create(null),
            GR = Object.create(null);
          for (let {
              label: tR
            }
            of RR) {
            JR[tR[0]] = !0;
            for (let RR = 1; RR < tR.length; RR++) GR[tR[RR]] = !0
          }
          let yR = qR(JR) + qR(GR) + "*$";
          return [new RegExp("^" + yR), new RegExp(yR)]
        }(JR);
      return RR => {
        let tR = RR.matchBefore(yR);
        return tR || RR.explicit ? {
          from: tR ? tR.from : RR.pos,
          options: JR,
          validFor: GR
        } : null
      }
    }

    function fR(RR, JR) {
      return GR => {
        for (let JR = (0, uR.nb)(GR.state).resolveInner(GR.pos, -1); JR; JR = JR.parent) {
          if (RR.indexOf(JR.name) > -1) return null;
          if (JR.type.isTop) break
        }
        return JR(GR)
      }
    }
    class VR {
      constructor(RR, JR, GR, yR) {
        this.completion = RR, this.source = JR, this.match = GR, this.score = yR
      }
    }

    function KR(RR) {
      return RR.selection.main.from
    }

    function wR(RR, JR) {
      var GR;
      let {
        source: yR
      } = RR, tR = JR && "^" != yR[0], uR = "$" != yR[yR.length - 1];
      return tR || uR ? new RegExp(`${tR?"^":""}(?:${yR})${uR?"$":""}`, null !== (GR = RR.flags) && void 0 !== GR ? GR : RR.ignoreCase ? "i" : "") : RR
    }
    const rR = yR.c.define();

    function eR(RR, JR, GR, tR) {
      let {
        main: uR
      } = RR.selection, ZR = GR - uR.from, qR = tR - uR.from;
      return {
        ...RR.changeByRange((iR => {
          if (iR != uR && GR != tR && RR.sliceDoc(iR.from + ZR, iR.from + qR) != RR.sliceDoc(GR, tR)) return {
            range: iR
          };
          let fR = RR.toText(JR);
          return {
            changes: {
              from: iR.from + ZR,
              to: tR == uR.from ? iR.to : iR.from + qR,
              insert: fR
            },
            range: yR.k.cursor(iR.from + ZR + fR.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const aR = new WeakMap;

    function LR(RR) {
      if (!Array.isArray(RR)) return RR;
      let JR = aR.get(RR);
      return JR || aR.set(RR, JR = iR(RR)), JR
    }
    const nR = yR.K.define(),
      UR = yR.K.define();
    class WR {
      constructor(RR) {
        this.pattern = RR, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let JR = 0; JR < RR.length;) {
          let GR = (0, yR.V)(RR, JR),
            tR = (0, yR.Y)(GR);
          this.chars.push(GR);
          let uR = RR.slice(JR, JR + tR),
            ZR = uR.toUpperCase();
          this.folded.push((0, yR.V)(ZR == uR ? uR.toLowerCase() : ZR, 0)), JR += tR
        }
        this.astral = RR.length != this.chars.length
      }
      ret(RR, JR) {
        return this.score = RR, this.matched = JR, this
      }
      match(RR) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (RR.length < this.pattern.length) return null;
        let {
          chars: JR,
          folded: GR,
          any: tR,
          precise: uR,
          byWord: ZR
        } = this;
        if (1 == JR.length) {
          let tR = (0, yR.V)(RR, 0),
            uR = (0, yR.Y)(tR),
            ZR = uR == RR.length ? 0 : -100;
          if (tR == JR[0]);
          else {
            if (tR != GR[0]) return null;
            ZR += -200
          }
          return this.ret(ZR, [0, uR])
        }
        let qR = RR.indexOf(this.pattern);
        if (0 == qR) return this.ret(RR.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let iR = JR.length,
          fR = 0;
        if (qR < 0) {
          for (let uR = 0, ZR = Math.min(RR.length, 200); uR < ZR && fR < iR;) {
            let ZR = (0, yR.V)(RR, uR);
            ZR != JR[fR] && ZR != GR[fR] || (tR[fR++] = uR), uR += (0, yR.Y)(ZR)
          }
          if (fR < iR) return null
        }
        let VR = 0,
          KR = 0,
          wR = !1,
          rR = 0,
          eR = -1,
          aR = -1,
          LR = /[a-z]/.test(RR),
          nR = !0;
        for (let UR = 0, WR = Math.min(RR.length, 200), AR = 0; UR < WR && KR < iR;) {
          let tR = (0, yR.V)(RR, UR);
          qR < 0 && (VR < iR && tR == JR[VR] && (uR[VR++] = UR), rR < iR && (tR == JR[rR] || tR == GR[rR] ? (0 == rR && (eR = UR), aR = UR + 1, rR++) : rR = 0));
          let fR, WR = tR < 255 ? tR >= 48 && tR <= 57 || tR >= 97 && tR <= 122 ? 2 : tR >= 65 && tR <= 90 ? 1 : 0 : (fR = (0, yR.jb)(tR)) != fR.toLowerCase() ? 1 : fR != fR.toUpperCase() ? 2 : 0;
          (!UR || 1 == WR && LR || 0 == AR && 0 != WR) && (JR[KR] == tR || GR[KR] == tR && (wR = !0) ? ZR[KR++] = UR : ZR.length && (nR = !1)), AR = WR, UR += (0, yR.Y)(tR)
        }
        return KR == iR && 0 == ZR[0] && nR ? this.result((wR ? -200 : 0) - 100, ZR, RR) : rR == iR && 0 == eR ? this.ret(-200 - RR.length + (aR == RR.length ? 0 : -100), [0, aR]) : qR > -1 ? this.ret(-700 - RR.length, [qR, qR + this.pattern.length]) : rR == iR ? this.ret(-900 - RR.length, [eR, aR]) : KR == iR ? this.result((wR ? -200 : 0) - 100 - 700 + (nR ? 0 : -1100), ZR, RR) : 2 == JR.length ? null : this.result((tR[0] ? -700 : 0) - 200 - 1100, tR, RR)
      }
      result(RR, JR, GR) {
        let tR = [],
          uR = 0;
        for (let ZR of JR) {
          let RR = ZR + (this.astral ? (0, yR.Y)((0, yR.V)(GR, ZR)) : 1);
          uR && tR[uR - 1] == ZR ? tR[uR - 1] = RR : (tR[uR++] = ZR, tR[uR++] = RR)
        }
        return this.ret(RR - GR.length, tR)
      }
    }
    class AR {
      constructor(RR) {
        this.pattern = RR, this.matched = [], this.score = 0, this.folded = RR.toLowerCase()
      }
      match(RR) {
        if (RR.length < this.pattern.length) return null;
        let JR = RR.slice(0, this.pattern.length),
          GR = JR == this.pattern ? 0 : JR.toLowerCase() == this.folded ? -200 : null;
        return null == GR ? null : (this.matched = [0, JR.length], this.score = GR + (RR.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const CR = yR.r.define({
      combine: RR => (0, yR.ab)(RR, {
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
        positionInfo: MR,
        filterStrict: !1,
        compareCompletions: (RR, JR) => (RR.sortText || RR.label).localeCompare(JR.sortText || JR.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (RR, JR) => RR && JR,
        closeOnBlur: (RR, JR) => RR && JR,
        icons: (RR, JR) => RR && JR,
        tooltipClass: (RR, JR) => GR => XR(RR(GR), JR(GR)),
        optionClass: (RR, JR) => GR => XR(RR(GR), JR(GR)),
        addToOptions: (RR, JR) => RR.concat(JR),
        filterStrict: (RR, JR) => RR || JR
      })
    });

    function XR(RR, JR) {
      return RR ? JR ? RR + " " + JR : RR : JR
    }

    function MR(RR, JR, GR, yR, uR, ZR) {
      let qR, iR, fR = RR.textDirection == tR.i.RTL,
        VR = fR,
        KR = !1,
        wR = "top",
        rR = JR.left - uR.left,
        eR = uR.right - JR.right,
        aR = yR.right - yR.left,
        LR = yR.bottom - yR.top;
      if (VR && rR < Math.min(aR, eR) ? VR = !1 : !VR && eR < Math.min(aR, rR) && (VR = !0), aR <= (VR ? rR : eR)) qR = Math.max(uR.top, Math.min(GR.top, uR.bottom - LR)) - JR.top, iR = Math.min(400, VR ? rR : eR);
      else {
        KR = !0, iR = Math.min(400, (fR ? JR.right : uR.right - JR.left) - 30);
        let RR = uR.bottom - JR.bottom;
        RR >= LR || RR > JR.top ? qR = GR.bottom - JR.top : (wR = "bottom", qR = JR.bottom - GR.top)
      }
      return {
        style: `${wR}: ${qR/((JR.bottom-JR.top)/ZR.offsetHeight)}px; max-width: ${iR/((JR.right-JR.left)/ZR.offsetWidth)}px`,
        class: "cm-completionInfo-" + (KR ? fR ? "left-narrow" : "right-narrow" : VR ? "left" : "right")
      }
    }
    const BR = yR.K.define();

    function lR(RR, JR, GR) {
      if (RR <= GR) return {
        from: 0,
        to: RR
      };
      if (JR < 0 && (JR = 0), JR <= RR >> 1) {
        let RR = Math.floor(JR / GR);
        return {
          from: RR * GR,
          to: (RR + 1) * GR
        }
      }
      let yR = Math.floor((RR - JR) / GR);
      return {
        from: RR - (yR + 1) * GR,
        to: RR - yR * GR
      }
    }
    class pR {
      constructor(RR, JR, GR) {
        this.view = RR, this.stateField = JR, this.applyCompletion = GR, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: RR => this.placeInfo(RR),
          key: this
        }, this.space = null, this.currentClass = "";
        let yR = RR.state.field(JR),
          {
            options: tR,
            selected: uR
          } = yR.open,
          ZR = RR.state.facet(CR);
        this.optionContent = function(RR) {
          let JR = RR.addToOptions.slice();
          return RR.icons && JR.push({
            render(RR) {
              let JR = document.createElement("div");
              return JR.classList.add("cm-completionIcon"), RR.type && JR.classList.add(...RR.type.split(/\s+/g).map((RR => "cm-completionIcon-" + RR))), JR.setAttribute("aria-hidden", "true"), JR
            },
            position: 20
          }), JR.push({
            render(RR, JR, GR, yR) {
              let tR = document.createElement("span");
              tR.className = "cm-completionLabel";
              let uR = RR.displayLabel || RR.label,
                ZR = 0;
              for (let qR = 0; qR < yR.length;) {
                let RR = yR[qR++],
                  JR = yR[qR++];
                RR > ZR && tR.appendChild(document.createTextNode(uR.slice(ZR, RR)));
                let GR = tR.appendChild(document.createElement("span"));
                GR.appendChild(document.createTextNode(uR.slice(RR, JR))), GR.className = "cm-completionMatchedText", ZR = JR
              }
              return ZR < uR.length && tR.appendChild(document.createTextNode(uR.slice(ZR))), tR
            },
            position: 50
          }, {
            render(RR) {
              if (!RR.detail) return null;
              let JR = document.createElement("span");
              return JR.className = "cm-completionDetail", JR.textContent = RR.detail, JR
            },
            position: 80
          }), JR.sort(((RR, JR) => RR.position - JR.position)).map((RR => RR.render))
        }(ZR), this.optionClass = ZR.optionClass, this.tooltipClass = ZR.tooltipClass, this.range = lR(tR.length, uR, ZR.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(RR.state), this.dom.addEventListener("mousedown", (GR => {
          let {
            options: yR
          } = RR.state.field(JR).open;
          for (let JR, tR = GR.target; tR && tR != this.dom; tR = tR.parentNode)
            if ("LI" == tR.nodeName && (JR = /-(\d+)$/.exec(tR.id)) && +JR[1] < yR.length) return this.applyCompletion(RR, yR[+JR[1]]), void GR.preventDefault();
          if (GR.target == this.list) {
            let JR = this.list.classList.contains("cm-completionListIncompleteTop") && GR.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && GR.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != JR && (RR.dispatch({
              effects: BR.of(JR)
            }), GR.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (JR => {
          let GR = RR.state.field(this.stateField, !1);
          GR && GR.tooltip && RR.state.facet(CR).closeOnBlur && JR.relatedTarget != RR.contentDOM && RR.dispatch({
            effects: UR.of(null)
          })
        })), this.showOptions(tR, yR.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(RR, JR) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(RR, JR, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(RR) {
        var JR;
        let GR = RR.state.field(this.stateField),
          yR = RR.startState.field(this.stateField);
        if (this.updateTooltipClass(RR.state), GR != yR) {
          let {
            options: tR,
            selected: uR,
            disabled: ZR
          } = GR.open;
          yR.open && yR.open.options == tR || (this.range = lR(tR.length, uR, RR.state.facet(CR).maxRenderedOptions), this.showOptions(tR, GR.id)), this.updateSel(), ZR != (null === (JR = yR.open) || void 0 === JR ? void 0 : JR.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!ZR)
        }
      }
      updateTooltipClass(RR) {
        let JR = this.tooltipClass(RR);
        if (JR != this.currentClass) {
          for (let RR of this.currentClass.split(" ")) RR && this.dom.classList.remove(RR);
          for (let RR of JR.split(" ")) RR && this.dom.classList.add(RR);
          this.currentClass = JR
        }
      }
      positioned(RR) {
        this.space = RR, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let RR = this.view.state.field(this.stateField),
          JR = RR.open;
        (JR.selected > -1 && JR.selected < this.range.from || JR.selected >= this.range.to) && (this.range = lR(JR.options.length, JR.selected, this.view.state.facet(CR).maxRenderedOptions), this.showOptions(JR.options, RR.id));
        let GR = this.updateSelectedOption(JR.selected);
        if (GR) {
          this.destroyInfo();
          let {
            completion: yR
          } = JR.options[JR.selected], {
            info: uR
          } = yR;
          if (!uR) return;
          let ZR = "string" === typeof uR ? document.createTextNode(uR) : uR(yR);
          if (!ZR) return;
          "then" in ZR ? ZR.then((JR => {
            JR && this.view.state.field(this.stateField, !1) == RR && this.addInfoPane(JR, yR)
          })).catch((RR => (0, tR.W)(this.view.state, RR, "completion info"))) : (this.addInfoPane(ZR, yR), GR.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(RR, JR) {
        this.destroyInfo();
        let GR = this.info = document.createElement("div");
        if (GR.className = "cm-tooltip cm-completionInfo", GR.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != RR.nodeType) GR.appendChild(RR), this.infoDestroy = null;
        else {
          let {
            dom: JR,
            destroy: yR
          } = RR;
          GR.appendChild(JR), this.infoDestroy = yR || null
        }
        this.dom.appendChild(GR), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(RR) {
        let JR = null;
        for (let GR = this.list.firstChild, yR = this.range.from; GR; GR = GR.nextSibling, yR++) "LI" == GR.nodeName && GR.id ? yR == RR ? GR.hasAttribute("aria-selected") || (GR.setAttribute("aria-selected", "true"), JR = GR) : GR.hasAttribute("aria-selected") && (GR.removeAttribute("aria-selected"), GR.removeAttribute("aria-describedby")) : yR--;
        return JR && function(RR, JR) {
          let GR = RR.getBoundingClientRect(),
            yR = JR.getBoundingClientRect(),
            tR = GR.height / RR.offsetHeight;
          yR.top < GR.top ? RR.scrollTop -= (GR.top - yR.top) / tR : yR.bottom > GR.bottom && (RR.scrollTop += (yR.bottom - GR.bottom) / tR)
        }(this.list, JR), JR
      }
      measureInfo() {
        let RR = this.dom.querySelector("[aria-selected]");
        if (!RR || !this.info) return null;
        let JR = this.dom.getBoundingClientRect(),
          GR = this.info.getBoundingClientRect(),
          yR = RR.getBoundingClientRect(),
          tR = this.space;
        if (!tR) {
          let RR = this.dom.ownerDocument.documentElement;
          tR = {
            left: 0,
            top: 0,
            right: RR.clientWidth,
            bottom: RR.clientHeight
          }
        }
        return yR.top > Math.min(tR.bottom, JR.bottom) - 10 || yR.bottom < Math.max(tR.top, JR.top) + 10 ? null : this.view.state.facet(CR).positionInfo(this.view, JR, yR, GR, tR, this.dom)
      }
      placeInfo(RR) {
        this.info && (RR ? (RR.style && (this.info.style.cssText = RR.style), this.info.className = "cm-tooltip cm-completionInfo " + (RR.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(RR, JR, GR) {
        const yR = document.createElement("ul");
        yR.id = JR, yR.setAttribute("role", "listbox"), yR.setAttribute("aria-expanded", "true"), yR.setAttribute("aria-label", this.view.state.phrase("Completions")), yR.addEventListener("mousedown", (RR => {
          RR.target == yR && RR.preventDefault()
        }));
        let tR = null;
        for (let uR = GR.from; uR < GR.to; uR++) {
          let {
            completion: ZR,
            match: qR
          } = RR[uR], {
            section: iR
          } = ZR;
          if (iR) {
            let RR = "string" == typeof iR ? iR : iR.name;
            if (RR != tR && (uR > GR.from || 0 == GR.from))
              if (tR = RR, "string" != typeof iR && iR.header) yR.appendChild(iR.header(iR));
              else {
                yR.appendChild(document.createElement("completion-section")).textContent = RR
              }
          }
          const fR = yR.appendChild(document.createElement("li"));
          fR.id = JR + "-" + uR, fR.setAttribute("role", "option");
          let VR = this.optionClass(ZR);
          VR && (fR.className = VR);
          for (let RR of this.optionContent) {
            let JR = RR(ZR, this.view.state, this.view, qR);
            JR && fR.appendChild(JR)
          }
        }
        return GR.from && yR.classList.add("cm-completionListIncompleteTop"), GR.to < RR.length && yR.classList.add("cm-completionListIncompleteBottom"), yR
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function gR(RR, JR) {
      return GR => new pR(GR, RR, JR)
    }

    function bR(RR) {
      return 100 * (RR.boost || 0) + (RR.apply ? 10 : 0) + (RR.info ? 5 : 0) + (RR.type ? 1 : 0)
    }
    class vR {
      constructor(RR, JR, GR, yR, tR, uR) {
        this.options = RR, this.attrs = JR, this.tooltip = GR, this.timestamp = yR, this.selected = tR, this.disabled = uR
      }
      setSelected(RR, JR) {
        return RR == this.selected || RR >= this.options.length ? this : new vR(this.options, DR(JR, RR), this.tooltip, this.timestamp, RR, this.disabled)
      }
      static build(RR, JR, GR, yR, tR, uR) {
        if (yR && !uR && RR.some((RR => RR.isPending))) return yR.setDisabled();
        let ZR = function(RR, JR) {
          let GR = [],
            yR = null,
            tR = null,
            uR = RR => {
              GR.push(RR);
              let {
                section: JR
              } = RR.completion;
              if (JR) {
                yR || (yR = []);
                let RR = "string" == typeof JR ? JR : JR.name;
                yR.some((JR => JR.name == RR)) || yR.push("string" == typeof JR ? {
                  name: RR
                } : JR)
              }
            },
            ZR = JR.facet(CR);
          for (let KR of RR)
            if (KR.hasResult()) {
              let RR = KR.result.getMatch;
              if (!1 === KR.result.filter)
                for (let JR of KR.result.options) uR(new VR(JR, KR.source, RR ? RR(JR) : [], 1e9 - GR.length));
              else {
                let GR, yR = JR.sliceDoc(KR.from, KR.to),
                  qR = ZR.filterStrict ? new AR(yR) : new WR(yR);
                for (let JR of KR.result.options)
                  if (GR = qR.match(JR.label)) {
                    let yR = JR.displayLabel ? RR ? RR(JR, GR.matched) : [] : GR.matched,
                      ZR = GR.score + (JR.boost || 0);
                    if (uR(new VR(JR, KR.source, yR, ZR)), "object" == typeof JR.section && "dynamic" === JR.section.rank) {
                      let {
                        name: RR
                      } = JR.section;
                      tR || (tR = Object.create(null)), tR[RR] = Math.max(ZR, tR[RR] || -1e9)
                    }
                  }
              }
            } if (yR) {
            let RR = Object.create(null),
              JR = 0,
              uR = (RR, JR) => ("dynamic" === RR.rank && "dynamic" === JR.rank ? tR[JR.name] - tR[RR.name] : 0) || ("number" == typeof RR.rank ? RR.rank : 1e9) - ("number" == typeof JR.rank ? JR.rank : 1e9) || (RR.name < JR.name ? -1 : 1);
            for (let GR of yR.sort(uR)) JR -= 1e5, RR[GR.name] = JR;
            for (let yR of GR) {
              let {
                section: JR
              } = yR.completion;
              JR && (yR.score += RR["string" == typeof JR ? JR : JR.name])
            }
          }
          let qR = [],
            iR = null,
            fR = ZR.compareCompletions;
          for (let VR of GR.sort(((RR, JR) => JR.score - RR.score || fR(RR.completion, JR.completion)))) {
            let RR = VR.completion;
            !iR || iR.label != RR.label || iR.detail != RR.detail || null != iR.type && null != RR.type && iR.type != RR.type || iR.apply != RR.apply || iR.boost != RR.boost ? qR.push(VR) : bR(VR.completion) > bR(iR) && (qR[qR.length - 1] = VR), iR = VR.completion
          }
          return qR
        }(RR, JR);
        if (!ZR.length) return yR && RR.some((RR => RR.isPending)) ? yR.setDisabled() : null;
        let qR = JR.facet(CR).selectOnOpen ? 0 : -1;
        if (yR && yR.selected != qR && -1 != yR.selected) {
          let RR = yR.options[yR.selected].completion;
          for (let JR = 0; JR < ZR.length; JR++)
            if (ZR[JR].completion == RR) {
              qR = JR;
              break
            }
        }
        return new vR(ZR, DR(GR, qR), {
          pos: RR.reduce(((RR, JR) => JR.hasResult() ? Math.min(RR, JR.from) : RR), 1e8),
          create: SR,
          above: tR.aboveCursor
        }, yR ? yR.timestamp : Date.now(), qR, !1)
      }
      map(RR) {
        return new vR(this.options, this.attrs, {
          ...this.tooltip,
          pos: RR.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new vR(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class OR {
      constructor(RR, JR, GR) {
        this.active = RR, this.id = JR, this.open = GR
      }
      static start() {
        return new OR(HR, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(RR) {
        let {
          state: JR
        } = RR, GR = JR.facet(CR), yR = (GR.override || JR.languageDataAt("autocomplete", KR(JR)).map(LR)).map((JR => (this.active.find((RR => RR.source == JR)) || new cR(JR, this.active.some((RR => 0 != RR.state)) ? 1 : 0)).update(RR, GR)));
        yR.length == this.active.length && yR.every(((RR, JR) => RR == this.active[JR])) && (yR = this.active);
        let tR = this.open,
          uR = RR.effects.some((RR => RR.is(IR)));
        tR && RR.docChanged && (tR = tR.map(RR.changes)), RR.selection || yR.some((JR => JR.hasResult() && RR.changes.touchesRange(JR.from, JR.to))) || ! function(RR, JR) {
          if (RR == JR) return !0;
          for (let GR = 0, yR = 0;;) {
            for (; GR < RR.length && !RR[GR].hasResult();) GR++;
            for (; yR < JR.length && !JR[yR].hasResult();) yR++;
            let tR = GR == RR.length,
              uR = yR == JR.length;
            if (tR || uR) return tR == uR;
            if (RR[GR++].result != JR[yR++].result) return !1
          }
        }(yR, this.active) || uR ? tR = vR.build(yR, JR, this.id, tR, GR, uR) : tR && tR.disabled && !yR.some((RR => RR.isPending)) && (tR = null), !tR && yR.every((RR => !RR.isPending)) && yR.some((RR => RR.hasResult())) && (yR = yR.map((RR => RR.hasResult() ? new cR(RR.source, 0) : RR)));
        for (let ZR of RR.effects) ZR.is(BR) && (tR = tR && tR.setSelected(ZR.value, this.id));
        return yR == this.active && tR == this.open ? this : new OR(yR, this.id, tR)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? xR : NR
      }
    }
    const xR = {
        "aria-autocomplete": "list"
      },
      NR = {};

    function DR(RR, JR) {
      let GR = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": RR
      };
      return JR > -1 && (GR["aria-activedescendant"] = RR + "-" + JR), GR
    }
    const HR = [];

    function oR(RR, JR) {
      if (RR.isUserEvent("input.complete")) {
        let GR = RR.annotation(rR);
        if (GR && JR.activateOnCompletion(GR)) return 12
      }
      let GR = RR.isUserEvent("input.type");
      return GR && JR.activateOnTyping ? 5 : GR ? 1 : RR.isUserEvent("delete.backward") ? 2 : RR.selection ? 8 : RR.docChanged ? 16 : 0
    }
    class cR {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = RR, this.state = JR, this.explicit = GR
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(RR, JR) {
        let GR = oR(RR, JR),
          yR = this;
        (8 & GR || 16 & GR && this.touches(RR)) && (yR = new cR(yR.source, 0)), 4 & GR && 0 == yR.state && (yR = new cR(this.source, 1)), yR = yR.updateFor(RR, GR);
        for (let tR of RR.effects)
          if (tR.is(nR)) yR = new cR(yR.source, 1, tR.value);
          else if (tR.is(UR)) yR = new cR(yR.source, 0);
        else if (tR.is(IR))
          for (let RR of tR.value) RR.source == yR.source && (yR = RR);
        return yR
      }
      updateFor(RR, JR) {
        return this.map(RR.changes)
      }
      map(RR) {
        return this
      }
      touches(RR) {
        return RR.changes.touchesRange(KR(RR.state))
      }
    }
    class PR extends cR {
      constructor(RR, JR, GR, yR, tR, uR) {
        super(RR, 3, JR), this.limit = GR, this.result = yR, this.from = tR, this.to = uR
      }
      hasResult() {
        return !0
      }
      updateFor(RR, JR) {
        var GR;
        if (!(3 & JR)) return this.map(RR.changes);
        let yR = this.result;
        yR.map && !RR.changes.empty && (yR = yR.map(yR, RR.changes));
        let tR = RR.changes.mapPos(this.from),
          uR = RR.changes.mapPos(this.to, 1),
          qR = KR(RR.state);
        if (qR > uR || !yR || 2 & JR && (KR(RR.startState) == this.from || qR < this.limit)) return new cR(this.source, 4 & JR ? 1 : 0);
        let iR = RR.changes.mapPos(this.limit);
        return function(RR, JR, GR, yR) {
          if (!RR) return !1;
          let tR = JR.sliceDoc(GR, yR);
          return "function" == typeof RR ? RR(tR, GR, yR, JR) : wR(RR, !0).test(tR)
        }(yR.validFor, RR.state, tR, uR) ? new PR(this.source, this.explicit, iR, yR, tR, uR) : yR.update && (yR = yR.update(yR, tR, uR, new ZR(RR.state, qR, !1))) ? new PR(this.source, this.explicit, iR, yR, yR.from, null !== (GR = yR.to) && void 0 !== GR ? GR : KR(RR.state)) : new cR(this.source, 1, this.explicit)
      }
      map(RR) {
        if (RR.empty) return this;
        return (this.result.map ? this.result.map(this.result, RR) : this.result) ? new PR(this.source, this.explicit, RR.mapPos(this.limit), this.result, RR.mapPos(this.from), RR.mapPos(this.to, 1)) : new cR(this.source, 0)
      }
      touches(RR) {
        return RR.changes.touchesRange(this.from, this.to)
      }
    }
    const IR = yR.K.define({
        map: (RR, JR) => RR.map((RR => RR.map(JR)))
      }),
      mR = yR.L.define({
        create: () => OR.start(),
        update: (RR, JR) => RR.update(JR),
        provide: RR => [tR.ib.from(RR, (RR => RR.tooltip)), tR.k.contentAttributes.from(RR, (RR => RR.attrs))]
      });

    function zR(RR, JR) {
      const GR = JR.completion.apply || JR.completion.label;
      let yR = RR.state.field(mR).active.find((RR => RR.source == JR.source));
      return yR instanceof PR && ("string" == typeof GR ? RR.dispatch({
        ...eR(RR.state, GR, yR.from, yR.to),
        annotations: rR.of(JR.completion)
      }) : GR(RR, JR.completion, yR.from, yR.to), !0)
    }
    const SR = gR(mR, zR);

    function jR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return GR => {
        let yR = GR.state.field(mR, !1);
        if (!yR || !yR.open || yR.open.disabled || Date.now() - yR.open.timestamp < GR.state.facet(CR).interactionDelay) return !1;
        let uR, ZR = 1;
        "page" == JR && (uR = (0, tR.y)(GR, yR.open.tooltip)) && (ZR = Math.max(2, Math.floor(uR.dom.offsetHeight / uR.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: qR
        } = yR.open.options, iR = yR.open.selected > -1 ? yR.open.selected + ZR * (RR ? 1 : -1) : RR ? 0 : qR - 1;
        return iR < 0 ? iR = "page" == JR ? 0 : qR - 1 : iR >= qR && (iR = "page" == JR ? qR - 1 : 0), GR.dispatch({
          effects: BR.of(iR)
        }), !0
      }
    }
    const dR = RR => !!RR.state.field(mR, !1) && (RR.dispatch({
      effects: nR.of(!0)
    }), !0);
    class ER {
      constructor(RR, JR) {
        this.active = RR, this.context = JR, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const YR = tR.o.fromClass(class {
        constructor(RR) {
          this.view = RR, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let JR of RR.state.field(mR).active) JR.isPending && this.startQuery(JR)
        }
        update(RR) {
          let JR = RR.state.field(mR),
            GR = RR.state.facet(CR);
          if (!RR.selectionSet && !RR.docChanged && RR.startState.field(mR) == JR) return;
          let yR = RR.transactions.some((RR => {
            let JR = oR(RR, GR);
            return 8 & JR || (RR.selection || RR.docChanged) && !(3 & JR)
          }));
          for (let qR = 0; qR < this.running.length; qR++) {
            let JR = this.running[qR];
            if (yR || JR.context.abortOnDocChange && RR.docChanged || JR.updates.length + RR.transactions.length > 50 && Date.now() - JR.time > 1e3) {
              for (let RR of JR.context.abortListeners) try {
                RR()
              } catch (ZR) {
                (0, tR.W)(this.view.state, ZR)
              }
              JR.context.abortListeners = null, this.running.splice(qR--, 1)
            } else JR.updates.push(...RR.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), RR.transactions.some((RR => RR.effects.some((RR => RR.is(nR))))) && (this.pendingStart = !0);
          let uR = this.pendingStart ? 50 : GR.activateOnTypingDelay;
          if (this.debounceUpdate = JR.active.some((RR => RR.isPending && !this.running.some((JR => JR.active.source == RR.source)))) ? setTimeout((() => this.startUpdate()), uR) : -1, 0 != this.composing)
            for (let tR of RR.transactions) tR.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && tR.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: RR
          } = this.view, JR = RR.field(mR);
          for (let GR of JR.active) GR.isPending && !this.running.some((RR => RR.active.source == GR.source)) && this.startQuery(GR);
          this.running.length && JR.open && JR.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(CR).updateSyncTime))
        }
        startQuery(RR) {
          let {
            state: JR
          } = this.view, GR = KR(JR), yR = new ZR(JR, GR, RR.explicit, this.view), uR = new ER(RR, yR);
          this.running.push(uR), Promise.resolve(RR.source(yR)).then((RR => {
            uR.context.aborted || (uR.done = RR || null, this.scheduleAccept())
          }), (RR => {
            this.view.dispatch({
              effects: UR.of(null)
            }), (0, tR.W)(this.view.state, RR)
          }))
        }
        scheduleAccept() {
          this.running.every((RR => void 0 !== RR.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(CR).updateSyncTime))
        }
        accept() {
          var RR;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let JR = [],
            GR = this.view.state.facet(CR),
            yR = this.view.state.field(mR);
          for (let tR = 0; tR < this.running.length; tR++) {
            let uR = this.running[tR];
            if (void 0 === uR.done) continue;
            if (this.running.splice(tR--, 1), uR.done) {
              let yR = KR(uR.updates.length ? uR.updates[0].startState : this.view.state),
                tR = Math.min(yR, uR.done.from + (uR.active.explicit ? 0 : 1)),
                ZR = new PR(uR.active.source, uR.active.explicit, tR, uR.done, uR.done.from, null !== (RR = uR.done.to) && void 0 !== RR ? RR : yR);
              for (let RR of uR.updates) ZR = ZR.update(RR, GR);
              if (ZR.hasResult()) {
                JR.push(ZR);
                continue
              }
            }
            let ZR = yR.active.find((RR => RR.source == uR.active.source));
            if (ZR && ZR.isPending)
              if (null == uR.done) {
                let RR = new cR(uR.active.source, 0);
                for (let JR of uR.updates) RR = RR.update(JR, GR);
                RR.isPending || JR.push(RR)
              } else this.startQuery(ZR)
          }(JR.length || yR.open && yR.open.disabled) && this.view.dispatch({
            effects: IR.of(JR)
          })
        }
      }, {
        eventHandlers: {
          blur(RR) {
            let JR = this.view.state.field(mR, !1);
            if (JR && JR.tooltip && this.view.state.facet(CR).closeOnBlur) {
              let GR = JR.open && (0, tR.y)(this.view, JR.open.tooltip);
              GR && GR.dom.contains(RR.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: UR.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: nR.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      kR = "object" == typeof navigator && /Win/.test(navigator.platform),
      QR = yR.y.highest(tR.k.domEventHandlers({
        keydown(RR, JR) {
          let GR = JR.state.field(mR, !1);
          if (!GR || !GR.open || GR.open.disabled || GR.open.selected < 0 || RR.key.length > 1 || RR.ctrlKey && (!kR || !RR.altKey) || RR.metaKey) return !1;
          let yR = GR.open.options[GR.open.selected],
            tR = GR.active.find((RR => RR.source == yR.source)),
            uR = yR.completion.commitCharacters || tR.result.commitCharacters;
          return uR && uR.indexOf(RR.key) > -1 && zR(JR, yR), !1
        }
      })),
      FR = tR.k.baseTheme({
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
    class TR {
      constructor(RR, JR, GR, yR) {
        this.field = RR, this.line = JR, this.from = GR, this.to = yR
      }
    }
    class sR {
      constructor(RR, JR, GR) {
        this.field = RR, this.from = JR, this.to = GR
      }
      map(RR) {
        let JR = RR.mapPos(this.from, -1, yR.u.TrackDel),
          GR = RR.mapPos(this.to, 1, yR.u.TrackDel);
        return null == JR || null == GR ? null : new sR(this.field, JR, GR)
      }
    }
    class hR {
      constructor(RR, JR) {
        this.lines = RR, this.fieldPositions = JR
      }
      instantiate(RR, JR) {
        let GR = [],
          yR = [JR],
          tR = RR.doc.lineAt(JR),
          ZR = /^\s*/.exec(tR.text)[0];
        for (let iR of this.lines) {
          if (GR.length) {
            let GR = ZR,
              tR = /^\t*/.exec(iR)[0].length;
            for (let JR = 0; JR < tR; JR++) GR += RR.facet(uR.bb);
            yR.push(JR + GR.length - tR), iR = GR + iR.slice(tR)
          }
          GR.push(iR), JR += iR.length + 1
        }
        let qR = this.fieldPositions.map((RR => new sR(RR.field, yR[RR.line] + RR.from, yR[RR.line] + RR.to)));
        return {
          text: GR,
          WL: qR
        }
      }
      static parse(RR) {
        let JR, GR = [],
          yR = [],
          tR = [];
        for (let uR of RR.split(/\r\n?|\n/)) {
          for (; JR = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(uR);) {
            let RR = JR[1] ? +JR[1] : null,
              ZR = JR[2] || JR[3] || "",
              qR = -1,
              iR = ZR.replace(/\\[{}]/g, (RR => RR[1]));
            for (let JR = 0; JR < GR.length; JR++)(null != RR ? GR[JR].seq == RR : iR && GR[JR].name == iR) && (qR = JR);
            if (qR < 0) {
              let JR = 0;
              for (; JR < GR.length && (null == RR || null != GR[JR].seq && GR[JR].seq < RR);) JR++;
              GR.splice(JR, 0, {
                seq: RR,
                name: iR
              }), qR = JR;
              for (let RR of tR) RR.field >= qR && RR.field++
            }
            for (let GR of tR)
              if (GR.line == yR.length && GR.from > JR.index) {
                let RR = JR[2] ? 3 + (JR[1] || "").length : 2;
                GR.from -= RR, GR.to -= RR
              } tR.push(new TR(qR, yR.length, JR.index, JR.index + iR.length)), uR = uR.slice(0, JR.index) + ZR + uR.slice(JR.index + JR[0].length)
          }
          uR = uR.replace(/\\([{}])/g, ((RR, JR, GR) => {
            for (let uR of tR) uR.line == yR.length && uR.from > GR && (uR.from--, uR.to--);
            return JR
          })), yR.push(uR)
        }
        return new hR(yR, tR)
      }
    }
    let RJ = tR.e.widget({
        widget: new class extends tR.q {
          toDOM() {
            let RR = document.createElement("span");
            return RR.className = "cm-snippetFieldPosition", RR
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      JJ = tR.e.mark({
        class: "cm-snippetField"
      });
    class GJ {
      constructor(RR, JR) {
        this.WL = RR, this.active = JR, this.deco = tR.e.set(RR.map((RR => (RR.from == RR.to ? RJ : JJ).range(RR.from, RR.to))), !0)
      }
      map(RR) {
        let JR = [];
        for (let GR of this.WL) {
          let yR = GR.map(RR);
          if (!yR) return null;
          JR.push(yR)
        }
        return new GJ(JR, this.active)
      }
      selectionInsideField(RR) {
        return RR.WL.every((RR => this.WL.some((JR => JR.field == this.active && JR.from <= RR.from && JR.to >= RR.to))))
      }
    }
    const yJ = yR.K.define({
        map: (RR, JR) => RR && RR.map(JR)
      }),
      tJ = yR.K.define(),
      uJ = yR.L.define({
        create: () => null,
        update(RR, JR) {
          for (let GR of JR.effects) {
            if (GR.is(yJ)) return GR.value;
            if (GR.is(tJ) && RR) return new GJ(RR.WL, GR.value)
          }
          return RR && JR.docChanged && (RR = RR.map(JR.changes)), RR && JR.selection && !RR.selectionInsideField(JR.selection) && (RR = null), RR
        },
        provide: RR => tR.k.Cy.from(RR, (RR => RR ? RR.deco : tR.e.none))
      });

    function ZJ(RR, JR) {
      return yR.k.create(RR.filter((RR => RR.field == JR)).map((RR => yR.k.range(RR.from, RR.to))))
    }

    function qJ(RR) {
      let JR = hR.parse(RR);
      return (RR, GR, tR, uR) => {
        let {
          text: ZR,
          WL: qR
        } = JR.instantiate(RR.state, tR), {
          main: iR
        } = RR.state.selection, fR = {
          changes: {
            from: tR,
            to: uR == iR.from ? iR.to : uR,
            insert: yR.N.of(ZR)
          },
          scrollIntoView: !0,
          annotations: GR ? [rR.of(GR), yR.R.userEvent.of("input.complete")] : void 0
        };
        if (qR.length && (fR.selection = ZJ(qR, 0)), qR.some((RR => RR.field > 0))) {
          let JR = new GJ(qR, 0),
            GR = fR.effects = [yJ.of(JR)];
          void 0 === RR.state.field(uJ, !1) && GR.push(yR.K.appendConfig.of([uJ, KJ, rJ, FR]))
        }
        RR.dispatch(RR.state.update(fR))
      }
    }

    function iJ(RR) {
      return JR => {
        let {
          state: GR,
          dispatch: yR
        } = JR, tR = GR.field(uJ, !1);
        if (!tR || RR < 0 && 0 == tR.active) return !1;
        let uR = tR.active + RR,
          ZR = RR > 0 && !tR.WL.some((JR => JR.field == uR + RR));
        return yR(GR.update({
          selection: ZJ(tR.WL, uR),
          effects: yJ.of(ZR ? null : new GJ(tR.WL, uR)),
          scrollIntoView: !0
        })), !0
      }
    }
    const fJ = [{
        key: "Tab",
        run: iJ(1),
        shift: iJ(-1)
      }, {
        key: "Escape",
        run: RR => {
          let {
            state: JR,
            dispatch: GR
          } = RR;
          return !!JR.field(uJ, !1) && (GR(JR.update({
            effects: yJ.of(null)
          })), !0)
        }
      }],
      VJ = yR.r.define({
        combine: RR => RR.length ? RR[0] : fJ
      }),
      KJ = yR.y.highest(tR.Q.compute([VJ], (RR => RR.facet(VJ))));

    function wJ(RR, JR) {
      return {
        ...JR,
        apply: qJ(RR)
      }
    }
    const rJ = tR.k.domEventHandlers({
      mousedown(RR, JR) {
        let GR, yR = JR.state.field(uJ, !1);
        if (!yR || null == (GR = JR.posAtCoords({
            x: RR.clientX,
            y: RR.clientY
          }))) return !1;
        let tR = yR.WL.find((RR => RR.from <= GR && RR.to >= GR));
        return !(!tR || tR.field == yR.active) && (JR.dispatch({
          selection: ZJ(yR.WL, tR.field),
          effects: yJ.of(yR.WL.some((RR => RR.field > tR.field)) ? new GJ(yR.WL, tR.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const eJ = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      aJ = yR.K.define({
        map(RR, JR) {
          let GR = JR.mapPos(RR, -1, yR.u.TrackAfter);
          return null == GR ? void 0 : GR
        }
      }),
      LJ = new class extends yR.I {};
    LJ.startSide = 1, LJ.endSide = -1;
    const nJ = yR.L.define({
      create: () => yR.E.empty,
      update(RR, JR) {
        if (RR = RR.map(JR.changes), JR.selection) {
          let GR = JR.state.doc.lineAt(JR.selection.main.head);
          RR = RR.update({
            filter: RR => RR >= GR.from && RR <= GR.to
          })
        }
        for (let GR of JR.effects) GR.is(aJ) && (RR = RR.update({
          add: [LJ.range(GR.value, GR.value + 1)]
        }));
        return RR
      }
    });

    function UJ() {
      return [MJ, nJ]
    }
    const WJ = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function AJ(RR) {
      for (let JR = 0; JR < 16; JR += 2)
        if (WJ.charCodeAt(JR) == RR) return WJ.charAt(JR + 1);
      return (0, yR.jb)(RR < 128 ? RR : RR + 1)
    }

    function CJ(RR, JR) {
      return RR.languageDataAt("closeBrackets", JR)[0] || eJ
    }
    const XJ = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      MJ = tR.k.inputHandler.of(((RR, JR, GR, tR) => {
        if ((XJ ? RR.composing : RR.compositionStarted) || RR.state.readOnly) return !1;
        let uR = RR.state.selection.main;
        if (tR.length > 2 || 2 == tR.length && 1 == (0, yR.Y)((0, yR.V)(tR, 0)) || JR != uR.from || GR != uR.to) return !1;
        let ZR = function(RR, JR) {
          let GR = CJ(RR, RR.selection.main.head),
            tR = GR.brackets || eJ.brackets;
          for (let uR of tR) {
            let ZR = AJ((0, yR.V)(uR, 0));
            if (JR == uR) return ZR == uR ? vJ(RR, uR, tR.indexOf(uR + uR + uR) > -1, GR) : gJ(RR, uR, ZR, GR.before || eJ.before);
            if (JR == ZR && lJ(RR, RR.selection.main.from)) return bJ(RR, uR, ZR)
          }
          return null
        }(RR.state, tR);
        return !!ZR && (RR.dispatch(ZR), !0)
      })),
      BJ = [{
        key: "Backspace",
        run: RR => {
          let {
            state: JR,
            dispatch: GR
          } = RR;
          if (JR.readOnly) return !1;
          let tR = CJ(JR, JR.selection.main.head).brackets || eJ.brackets,
            uR = null,
            ZR = JR.changeByRange((RR => {
              if (RR.empty) {
                let GR = function(RR, JR) {
                  let GR = RR.sliceString(JR - 2, JR);
                  return (0, yR.Y)((0, yR.V)(GR, 0)) == GR.length ? GR : GR.slice(1)
                }(JR.doc, RR.head);
                for (let uR of tR)
                  if (uR == GR && pJ(JR.doc, RR.head) == AJ((0, yR.V)(uR, 0))) return {
                    changes: {
                      from: RR.head - uR.length,
                      to: RR.head + uR.length
                    },
                    range: yR.k.cursor(RR.head - uR.length)
                  }
              }
              return {
                range: uR = RR
              }
            }));
          return uR || GR(JR.update(ZR, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !uR
        }
      }];

    function lJ(RR, JR) {
      let GR = !1;
      return RR.field(nJ).between(0, RR.doc.length, (RR => {
        RR == JR && (GR = !0)
      })), GR
    }

    function pJ(RR, JR) {
      let GR = RR.sliceString(JR, JR + 2);
      return GR.slice(0, (0, yR.Y)((0, yR.V)(GR, 0)))
    }

    function gJ(RR, JR, GR, tR) {
      let uR = null,
        ZR = RR.changeByRange((ZR => {
          if (!ZR.empty) return {
            changes: [{
              insert: JR,
              from: ZR.from
            }, {
              insert: GR,
              from: ZR.to
            }],
            effects: aJ.of(ZR.to + JR.length),
            range: yR.k.range(ZR.anchor + JR.length, ZR.head + JR.length)
          };
          let qR = pJ(RR.doc, ZR.head);
          return !qR || /\s/.test(qR) || tR.indexOf(qR) > -1 ? {
            changes: {
              insert: JR + GR,
              from: ZR.head
            },
            effects: aJ.of(ZR.head + JR.length),
            range: yR.k.cursor(ZR.head + JR.length)
          } : {
            range: uR = ZR
          }
        }));
      return uR ? null : RR.update(ZR, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function bJ(RR, JR, GR) {
      let tR = null,
        uR = RR.changeByRange((JR => JR.empty && pJ(RR.doc, JR.head) == GR ? {
          changes: {
            from: JR.head,
            to: JR.head + GR.length,
            insert: GR
          },
          range: yR.k.cursor(JR.head + GR.length)
        } : tR = {
          range: JR
        }));
      return tR ? null : RR.update(uR, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function vJ(RR, JR, GR, tR) {
      let ZR = tR.stringPrefixes || eJ.stringPrefixes,
        qR = null,
        iR = RR.changeByRange((tR => {
          if (!tR.empty) return {
            changes: [{
              insert: JR,
              from: tR.from
            }, {
              insert: JR,
              from: tR.to
            }],
            effects: aJ.of(tR.to + JR.length),
            range: yR.k.range(tR.anchor + JR.length, tR.head + JR.length)
          };
          let iR, fR = tR.head,
            VR = pJ(RR.doc, fR);
          if (VR == JR) {
            if (OJ(RR, fR)) return {
              changes: {
                insert: JR + JR,
                from: fR
              },
              effects: aJ.of(fR + JR.length),
              range: yR.k.cursor(fR + JR.length)
            };
            if (lJ(RR, fR)) {
              let tR = GR && RR.sliceDoc(fR, fR + 3 * JR.length) == JR + JR + JR ? JR + JR + JR : JR;
              return {
                changes: {
                  from: fR,
                  to: fR + tR.length,
                  insert: tR
                },
                range: yR.k.cursor(fR + tR.length)
              }
            }
          } else {
            if (GR && RR.sliceDoc(fR - 2 * JR.length, fR) == JR + JR && (iR = xJ(RR, fR - 2 * JR.length, ZR)) > -1 && OJ(RR, iR)) return {
              changes: {
                insert: JR + JR + JR + JR,
                from: fR
              },
              effects: aJ.of(fR + JR.length),
              range: yR.k.cursor(fR + JR.length)
            };
            if (RR.charCategorizer(fR)(VR) != yR.i.Word && xJ(RR, fR, ZR) > -1 && ! function(RR, JR, GR, yR) {
                let tR = (0, uR.nb)(RR).resolveInner(JR, -1),
                  ZR = yR.reduce(((RR, JR) => Math.max(RR, JR.length)), 0);
                for (let uR = 0; uR < 5; uR++) {
                  let uR = RR.sliceDoc(tR.from, Math.min(tR.to, tR.from + GR.length + ZR)),
                    qR = uR.indexOf(GR);
                  if (!qR || qR > -1 && yR.indexOf(uR.slice(0, qR)) > -1) {
                    let JR = tR.firstChild;
                    for (; JR && JR.from == tR.from && JR.to - JR.from > GR.length + qR;) {
                      if (RR.sliceDoc(JR.to - GR.length, JR.to) == GR) return !1;
                      JR = JR.firstChild
                    }
                    return !0
                  }
                  let iR = tR.to == JR && tR.parent;
                  if (!iR) break;
                  tR = iR
                }
                return !1
              }(RR, fR, JR, ZR)) return {
              changes: {
                insert: JR + JR,
                from: fR
              },
              effects: aJ.of(fR + JR.length),
              range: yR.k.cursor(fR + JR.length)
            }
          }
          return {
            range: qR = tR
          }
        }));
      return qR ? null : RR.update(iR, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function OJ(RR, JR) {
      let GR = (0, uR.nb)(RR).resolveInner(JR + 1);
      return GR.parent && GR.from == JR
    }

    function xJ(RR, JR, GR) {
      let tR = RR.charCategorizer(JR);
      if (tR(RR.sliceDoc(JR - 1, JR)) != yR.i.Word) return JR;
      for (let uR of GR) {
        let GR = JR - uR.length;
        if (RR.sliceDoc(GR, JR) == uR && tR(RR.sliceDoc(GR - 1, GR)) != yR.i.Word) return GR
      }
      return -1
    }

    function NJ() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [QR, mR, CR.of(RR), YR, HJ, FR]
    }
    const DJ = [{
        key: "Ctrl-Space",
        run: dR
      }, {
        mac: "Alt-`",
        run: dR
      }, {
        mac: "Alt-i",
        run: dR
      }, {
        key: "Escape",
        run: RR => {
          let JR = RR.state.field(mR, !1);
          return !(!JR || !JR.active.some((RR => 0 != RR.state))) && (RR.dispatch({
            effects: UR.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: jR(!0)
      }, {
        key: "ArrowUp",
        run: jR(!1)
      }, {
        key: "PageDown",
        run: jR(!0, "page")
      }, {
        key: "PageUp",
        run: jR(!1, "page")
      }, {
        key: "Enter",
        run: RR => {
          let JR = RR.state.field(mR, !1);
          return !(RR.state.readOnly || !JR || !JR.open || JR.open.selected < 0 || JR.open.disabled || Date.now() - JR.open.timestamp < RR.state.facet(CR).interactionDelay) && zR(RR, JR.open.options[JR.open.selected])
        }
      }],
      HJ = yR.y.highest(tR.Q.computeN([CR], (RR => RR.facet(CR).defaultKeymap ? [DJ] : [])))
  },
  53481: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => fR,
      i: () => wR,
      l: () => VR,
      m: () => KR
    });
    var yR = GR(53317);
    class tR {
      constructor(RR, JR, GR, yR) {
        this.origin = RR, this.changes = JR, this.effects = GR, this.clientID = yR
      }
    }
    class uR {
      constructor(RR, JR) {
        this.version = RR, this.unconfirmed = JR
      }
    }
    const ZR = yR.r.define({
        combine(RR) {
          let JR = (0, yR.ab)(RR, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: RR => RR
          });
          return null == JR.clientID && (JR.clientID = RR.length && RR[0].generatedID || ""), JR
        }
      }),
      qR = yR.c.define(),
      iR = yR.L.define({
        create: RR => new uR(RR.facet(ZR).startVersion, []),
        update(RR, JR) {
          let GR = JR.annotation(qR);
          if (GR) return GR;
          let {
            sharedEffects: yR,
            clientID: iR
          } = JR.startState.facet(ZR), fR = yR(JR);
          return fR.length || !JR.changes.empty ? new uR(RR.version, RR.unconfirmed.concat(new tR(JR, JR.changes, fR, iR))) : RR
        }
      });

    function fR() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [iR, ZR.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, RR))]
    }

    function VR(RR, JR) {
      let {
        version: GR,
        unconfirmed: fR
      } = RR.field(iR), {
        clientID: VR
      } = RR.facet(ZR);
      GR += JR.length;
      let KR = [],
        wR = null,
        rR = 0;
      for (let tR of JR) {
        let RR = rR < fR.length ? fR[rR] : null;
        RR && RR.clientID == tR.clientID ? (wR && (wR = wR.map(RR.changes, !0)), KR = yR.K.mapEffects(KR, tR.changes), rR++) : (KR = yR.K.mapEffects(KR, tR.changes), tR.effects && (KR = KR.concat(tR.effects)), wR = wR ? wR.compose(tR.changes) : tR.changes)
      }
      if (rR && (fR = fR.slice(rR)), fR.length && (wR && (fR = fR.map((RR => {
          let JR = RR.changes.map(wR);
          return wR = wR.map(RR.changes, !0), new tR(RR.origin, JR, yR.K.mapEffects(RR.effects, wR), VR)
        }))), KR.length)) {
        let RR = fR.reduce(((RR, JR) => RR.compose(JR.changes)), yR.ChangeSet.empty(fR[0].changes.length));
        KR = yR.K.mapEffects(KR, RR)
      }
      return wR ? RR.update({
        changes: wR,
        effects: KR,
        annotations: [yR.R.addToHistory.of(!1), yR.R.remote.of(!0), qR.of(new uR(GR, fR))],
        filter: !1
      }) : RR.update({
        annotations: [qR.of(new uR(GR, fR))]
      })
    }

    function KR(RR) {
      return RR.field(iR).unconfirmed
    }

    function wR(RR) {
      return RR.field(iR).version
    }
  },
  53355: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => aJ
    });
    var yR = GR(53346);
    class tR {
      constructor(RR, JR, GR, yR, tR, uR, ZR, qR, iR) {
        let fR = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          VR = arguments.length > 10 ? arguments[10] : void 0;
        this.p = RR, this.stack = JR, this.state = GR, this.reducePos = yR, this.pos = tR, this.score = uR, this.buffer = ZR, this.bufferBase = qR, this.curContext = iR, this.lookAhead = fR, this.parent = VR
      }
      toString() {
        return `[${this.stack.filter(((RR,JR)=>JR%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          yR = RR.parser.context;
        return new tR(RR, [], JR, GR, GR, 0, [], 0, yR ? new uR(yR, yR.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(RR, JR) {
        this.stack.push(this.state, JR, this.bufferBase + this.buffer.length), this.state = RR
      }
      reduce(RR) {
        var JR;
        let GR = RR >> 19,
          yR = 65535 & RR,
          {
            parser: tR
          } = this.p,
          uR = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          ZR = tR.dynamicPrecedence(yR);
        if (ZR && (this.score += ZR), 0 == GR) return this.pushState(tR.getGoto(this.state, yR, !0), this.reducePos), yR < tR.minRepeatTerm && this.storeNode(yR, this.reducePos, this.reducePos, uR ? 8 : 4, !0), void this.reduceContext(yR, this.reducePos);
        let qR = this.stack.length - 3 * (GR - 1) - (262144 & RR ? 6 : 0),
          iR = qR ? this.stack[qR - 2] : this.p.WL[0].from,
          fR = this.reducePos - iR;
        fR >= 2e3 && !(null === (JR = this.p.parser.nodeSet.types[yR]) || void 0 === JR ? void 0 : JR.isAnonymous) && (iR == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = fR) : this.p.lastBigReductionSize < fR && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = iR, this.p.lastBigReductionSize = fR));
        let VR = qR ? this.stack[qR - 1] : 0,
          KR = this.bufferBase + this.buffer.length - VR;
        if (yR < tR.minRepeatTerm || 131072 & RR) {
          let RR = tR.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(yR, iR, RR, KR + 4, !0)
        }
        if (262144 & RR) this.state = this.stack[qR];
        else {
          let RR = this.stack[qR - 3];
          this.state = tR.getGoto(RR, yR, !0)
        }
        for (; this.stack.length > qR;) this.stack.pop();
        this.reduceContext(yR, iR)
      }
      storeNode(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          tR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == RR && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let RR = this,
            yR = this.buffer.length;
          if (0 == yR && RR.parent && (yR = RR.bufferBase - RR.parent.bufferBase, RR = RR.parent), yR > 0 && 0 == RR.buffer[yR - 4] && RR.buffer[yR - 1] > -1) {
            if (JR == GR) return;
            if (RR.buffer[yR - 2] >= JR) return void(RR.buffer[yR - 2] = GR)
          }
        }
        if (tR && this.pos != GR) {
          let tR = this.buffer.length;
          if (tR > 0 && (0 != this.buffer[tR - 4] || this.buffer[tR - 1] < 0)) {
            let RR = !1;
            for (let JR = tR; JR > 0 && this.buffer[JR - 2] > GR; JR -= 4)
              if (this.buffer[JR - 1] >= 0) {
                RR = !0;
                break
              } if (RR)
              for (; tR > 0 && this.buffer[tR - 2] > GR;) this.buffer[tR] = this.buffer[tR - 4], this.buffer[tR + 1] = this.buffer[tR - 3], this.buffer[tR + 2] = this.buffer[tR - 2], this.buffer[tR + 3] = this.buffer[tR - 1], tR -= 4, yR > 4 && (yR -= 4)
          }
          this.buffer[tR] = RR, this.buffer[tR + 1] = JR, this.buffer[tR + 2] = GR, this.buffer[tR + 3] = yR
        } else this.buffer.push(RR, JR, GR, yR)
      }
      shift(RR, JR, GR, yR) {
        if (131072 & RR) this.pushState(65535 & RR, this.pos);
        else if (0 == (262144 & RR)) {
          let tR = RR,
            {
              parser: uR
            } = this.p;
          this.pos = yR;
          let ZR = uR.stateFlag(tR, 1);
          !ZR && (yR > GR || JR <= uR.maxNode) && (this.reducePos = yR), this.pushState(tR, ZR ? GR : Math.min(GR, this.reducePos)), this.shiftContext(JR, GR), JR <= uR.maxNode && this.buffer.push(JR, GR, yR, 4)
        } else this.pos = yR, this.shiftContext(JR, GR), JR <= this.p.parser.maxNode && this.buffer.push(JR, GR, yR, 4)
      }
      apply(RR, JR, GR, yR) {
        65536 & RR ? this.reduce(RR) : this.shift(RR, JR, GR, yR)
      }
      useNode(RR, JR) {
        let GR = this.p.reused.length - 1;
        (GR < 0 || this.p.reused[GR] != RR) && (this.p.reused.push(RR), GR++);
        let yR = this.pos;
        this.reducePos = this.pos = yR + RR.length, this.pushState(JR, yR), this.buffer.push(GR, yR, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, RR, this, this.p.stream.reset(this.pos - RR.length)))
      }
      split() {
        let RR = this,
          JR = RR.buffer.length;
        for (; JR > 0 && RR.buffer[JR - 2] > RR.reducePos;) JR -= 4;
        let GR = RR.buffer.slice(JR),
          yR = RR.bufferBase + JR;
        for (; RR && yR == RR.bufferBase;) RR = RR.parent;
        return new tR(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, GR, yR, this.curContext, this.lookAhead, RR)
      }
      recoverByDelete(RR, JR) {
        let GR = RR <= this.p.parser.maxNode;
        GR && this.storeNode(RR, this.pos, JR, 4), this.storeNode(0, this.pos, JR, GR ? 8 : 4), this.pos = this.reducePos = JR, this.score -= 190
      }
      canShift(RR) {
        for (let JR = new ZR(this);;) {
          let GR = this.p.parser.stateSlot(JR.state, 4) || this.p.parser.hasAction(JR.state, RR);
          if (0 == GR) return !1;
          if (0 == (65536 & GR)) return !0;
          JR.reduce(GR)
        }
      }
      recoverByInsert(RR) {
        if (this.stack.length >= 300) return [];
        let JR = this.p.parser.nextStates(this.state);
        if (JR.length > 8 || this.stack.length >= 120) {
          let GR = [];
          for (let yR, tR = 0; tR < JR.length; tR += 2)(yR = JR[tR + 1]) != this.state && this.p.parser.hasAction(yR, RR) && GR.push(JR[tR], yR);
          if (this.stack.length < 120)
            for (let RR = 0; GR.length < 8 && RR < JR.length; RR += 2) {
              let yR = JR[RR + 1];
              GR.some(((RR, JR) => 1 & JR && RR == yR)) || GR.push(JR[RR], yR)
            }
          JR = GR
        }
        let GR = [];
        for (let yR = 0; yR < JR.length && GR.length < 4; yR += 2) {
          let RR = JR[yR + 1];
          if (RR == this.state) continue;
          let tR = this.split();
          tR.pushState(RR, this.pos), tR.storeNode(0, tR.pos, tR.pos, 4, !0), tR.shiftContext(JR[yR], this.pos), tR.reducePos = this.pos, tR.score -= 200, GR.push(tR)
        }
        return GR
      }
      forceReduce() {
        let {
          parser: RR
        } = this.p, JR = RR.stateSlot(this.state, 5);
        if (0 == (65536 & JR)) return !1;
        if (!RR.validAction(this.state, JR)) {
          let GR = JR >> 19,
            yR = 65535 & JR,
            tR = this.stack.length - 3 * GR;
          if (tR < 0 || RR.getGoto(this.stack[tR], yR, !1) < 0) {
            let RR = this.findForcedReduction();
            if (null == RR) return !1;
            JR = RR
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(JR), !0
      }
      findForcedReduction() {
        let {
          parser: RR
        } = this.p, JR = [], GR = (yR, tR) => {
          if (!JR.includes(yR)) return JR.push(yR), RR.allActions(yR, (JR => {
            if (393216 & JR);
            else if (65536 & JR) {
              let GR = (JR >> 19) - tR;
              if (GR > 1) {
                let yR = 65535 & JR,
                  tR = this.stack.length - 3 * GR;
                if (tR >= 0 && RR.getGoto(this.stack[tR], yR, !1) >= 0) return GR << 19 | 65536 | yR
              }
            } else {
              let RR = GR(JR, tR + 1);
              if (null != RR) return RR
            }
          }))
        };
        return GR(this.state, 0)
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
          parser: RR
        } = this.p;
        return 65535 == RR.data[RR.stateSlot(this.state, 1)] && !RR.stateSlot(this.state, 4)
      }
      restart() {
        this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0
      }
      sameState(RR) {
        if (this.state != RR.state || this.stack.length != RR.stack.length) return !1;
        for (let JR = 0; JR < this.stack.length; JR += 3)
          if (this.stack[JR] != RR.stack[JR]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(RR) {
        return this.p.parser.dialect.flags[RR]
      }
      shiftContext(RR, JR) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, RR, this, this.p.stream.reset(JR)))
      }
      reduceContext(RR, JR) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, RR, this, this.p.stream.reset(JR)))
      }
      emitContext() {
        let RR = this.buffer.length - 1;
        (RR < 0 || -3 != this.buffer[RR]) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3)
      }
      emitLookAhead() {
        let RR = this.buffer.length - 1;
        (RR < 0 || -4 != this.buffer[RR]) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4)
      }
      updateContext(RR) {
        if (RR != this.curContext.context) {
          let JR = new uR(this.curContext.tracker, RR);
          JR.hash != this.curContext.hash && this.emitContext(), this.curContext = JR
        }
      }
      setLookAhead(RR) {
        return !(RR <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = RR, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class uR {
      constructor(RR, JR) {
        this.tracker = RR, this.context = JR, this.hash = RR.strict ? RR.hash(JR) : 0
      }
    }
    class ZR {
      constructor(RR) {
        this.start = RR, this.state = RR.state, this.stack = RR.stack, this.base = this.stack.length
      }
      reduce(RR) {
        let JR = 65535 & RR,
          GR = RR >> 19;
        0 == GR ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (GR - 1);
        let yR = this.start.p.parser.getGoto(this.stack[this.base - 3], JR, !0);
        this.state = yR
      }
    }
    class qR {
      constructor(RR, JR, GR) {
        this.stack = RR, this.pos = JR, this.index = GR, this.buffer = RR.buffer, 0 == this.index && this.maybeNext()
      }
      static create(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RR.bufferBase + RR.buffer.length;
        return new qR(RR, JR, JR - RR.bufferBase)
      }
      maybeNext() {
        let RR = this.stack.parent;
        null != RR && (this.index = this.stack.bufferBase - RR.bufferBase, this.stack = RR, this.buffer = RR.buffer)
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
        return new qR(this.stack, this.pos, this.index)
      }
    }

    function iR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof RR) return RR;
      let GR = null;
      for (let yR = 0, tR = 0; yR < RR.length;) {
        let uR = 0;
        for (;;) {
          let JR = RR.charCodeAt(yR++),
            GR = !1;
          if (126 == JR) {
            uR = 65535;
            break
          }
          JR >= 92 && JR--, JR >= 34 && JR--;
          let tR = JR - 32;
          if (tR >= 46 && (tR -= 46, GR = !0), uR += tR, GR) break;
          uR *= 46
        }
        GR ? GR[tR++] = uR : GR = new JR(uR)
      }
      return GR
    }
    class fR {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const VR = new fR;
    class KR {
      constructor(RR, JR) {
        this.input = RR, this.WL = JR, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = VR, this.rangeIndex = 0, this.pos = this.chunkPos = JR[0].from, this.range = JR[0], this.end = JR[JR.length - 1].to, this.readNext()
      }
      resolveOffset(RR, JR) {
        let GR = this.range,
          yR = this.rangeIndex,
          tR = this.pos + RR;
        for (; tR < GR.from;) {
          if (!yR) return null;
          let RR = this.WL[--yR];
          tR -= GR.from - RR.to, GR = RR
        }
        for (; JR < 0 ? tR > GR.to : tR >= GR.to;) {
          if (yR == this.WL.length - 1) return null;
          let RR = this.WL[++yR];
          tR += RR.from - GR.to, GR = RR
        }
        return tR
      }
      clipPos(RR) {
        if (RR >= this.range.from && RR < this.range.to) return RR;
        for (let JR of this.WL)
          if (JR.to > RR) return Math.max(RR, JR.from);
        return this.end
      }
      peek(RR) {
        let JR, GR, yR = this.chunkOff + RR;
        if (yR >= 0 && yR < this.chunk.length) JR = this.pos + RR, GR = this.chunk.charCodeAt(yR);
        else {
          let yR = this.resolveOffset(RR, 1);
          if (null == yR) return -1;
          if (JR = yR, JR >= this.chunk2Pos && JR < this.chunk2Pos + this.chunk2.length) GR = this.chunk2.charCodeAt(JR - this.chunk2Pos);
          else {
            let RR = this.rangeIndex,
              yR = this.range;
            for (; yR.to <= JR;) yR = this.WL[++RR];
            this.chunk2 = this.input.chunk(this.chunk2Pos = JR), JR + this.chunk2.length > yR.to && (this.chunk2 = this.chunk2.slice(0, yR.to - JR)), GR = this.chunk2.charCodeAt(0)
          }
        }
        return JR >= this.token.lookAhead && (this.token.lookAhead = JR + 1), GR
      }
      acceptToken(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GR = JR ? this.resolveOffset(JR, -1) : this.pos;
        if (null == GR || GR < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = RR, this.token.end = GR
      }
      acceptTokenTo(RR, JR) {
        this.token.value = RR, this.token.end = JR
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: RR,
            chunkPos: JR
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = RR, this.chunk2Pos = JR, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let RR = this.input.chunk(this.pos),
            JR = this.pos + RR.length;
          this.chunk = JR > this.range.to ? RR.slice(0, this.range.to - this.pos) : RR, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += RR; this.pos + RR >= this.range.to;) {
          if (this.rangeIndex == this.WL.length - 1) return this.setDone();
          RR -= this.range.to - this.pos, this.range = this.WL[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += RR, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.WL[this.rangeIndex = this.WL.length - 1], this.chunk = "", this.next = -1
      }
      reset(RR, JR) {
        if (JR ? (this.token = JR, JR.start = RR, JR.lookAhead = RR + 1, JR.value = JR.extended = -1) : this.token = VR, this.pos != RR) {
          if (this.pos = RR, RR == this.end) return this.setDone(), this;
          for (; RR < this.range.from;) this.range = this.WL[--this.rangeIndex];
          for (; RR >= this.range.to;) this.range = this.WL[++this.rangeIndex];
          RR >= this.chunkPos && RR < this.chunkPos + this.chunk.length ? this.chunkOff = RR - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(RR, JR) {
        if (RR >= this.chunkPos && JR <= this.chunkPos + this.chunk.length) return this.chunk.slice(RR - this.chunkPos, JR - this.chunkPos);
        if (RR >= this.chunk2Pos && JR <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(RR - this.chunk2Pos, JR - this.chunk2Pos);
        if (RR >= this.range.from && JR <= this.range.to) return this.input.read(RR, JR);
        let GR = "";
        for (let yR of this.WL) {
          if (yR.from >= JR) break;
          yR.to > RR && (GR += this.input.read(Math.max(yR.from, RR), Math.min(yR.to, JR)))
        }
        return GR
      }
    }
    class wR {
      constructor(RR, JR) {
        this.data = RR, this.id = JR
      }
      token(RR, JR) {
        let {
          parser: GR
        } = JR.p;
        aR(this.data, RR, JR, this.id, GR.data, GR.tokenPrecTable)
      }
    }
    wR.prototype.contextual = wR.prototype.fallback = wR.prototype.extend = !1;
    class rR {
      constructor(RR, JR, GR) {
        this.precTable = JR, this.elseToken = GR, this.data = "string" == typeof RR ? iR(RR) : RR
      }
      token(RR, JR) {
        let GR = RR.pos,
          yR = 0;
        for (;;) {
          let GR = RR.next < 0,
            tR = RR.resolveOffset(1, 1);
          if (aR(this.data, RR, JR, 0, this.data, this.precTable), RR.token.value > -1) break;
          if (null == this.elseToken) return;
          if (GR || yR++, null == tR) break;
          RR.reset(tR, RR.token)
        }
        yR && (RR.reset(GR, RR.token), RR.acceptToken(this.elseToken, yR))
      }
    }
    rR.prototype.contextual = wR.prototype.fallback = wR.prototype.extend = !1;
    class eR {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = RR, this.contextual = !!JR.contextual, this.fallback = !!JR.fallback, this.extend = !!JR.extend
      }
    }

    function aR(RR, JR, GR, yR, tR, uR) {
      let ZR = 0,
        qR = 1 << yR,
        {
          dialect: iR
        } = GR.p.parser;
      RR: for (; 0 != (qR & RR[ZR]);) {
        let GR = RR[ZR + 1];
        for (let KR = ZR + 3; KR < GR; KR += 2)
          if ((RR[KR + 1] & qR) > 0) {
            let GR = RR[KR];
            if (iR.allows(GR) && (-1 == JR.token.value || JR.token.value == GR || nR(GR, JR.token.value, tR, uR))) {
              JR.acceptToken(GR);
              break
            }
          } let yR = JR.next,
          fR = 0,
          VR = RR[ZR + 2];
        if (!(JR.next < 0 && VR > fR && 65535 == RR[GR + 3 * VR - 3])) {
          for (; fR < VR;) {
            let tR = fR + VR >> 1,
              uR = GR + tR + (tR << 1),
              qR = RR[uR],
              iR = RR[uR + 1] || 65536;
            if (yR < qR) VR = tR;
            else {
              if (!(yR >= iR)) {
                ZR = RR[uR + 2], JR.advance();
                continue RR
              }
              fR = tR + 1
            }
          }
          break
        }
        ZR = RR[GR + 3 * VR - 1]
      }
    }

    function LR(RR, JR, GR) {
      for (let yR, tR = JR; 65535 != (yR = RR[tR]); tR++)
        if (yR == GR) return tR - JR;
      return -1
    }

    function nR(RR, JR, GR, yR) {
      let tR = LR(GR, yR, JR);
      return tR < 0 || LR(GR, yR, RR) < tR
    }
    const UR = "undefined" != typeof process && {
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
    let WR = null;

    function AR(RR, JR, GR) {
      let tR = RR.cursor(yR.c.IncludeAnonymous);
      for (tR.moveTo(JR);;)
        if (!(GR < 0 ? tR.childBefore(JR) : tR.childAfter(JR)))
          for (;;) {
            if ((GR < 0 ? tR.to < JR : tR.from > JR) && !tR.type.isError) return GR < 0 ? Math.max(0, Math.min(tR.to - 1, JR - 25)) : Math.min(RR.length, Math.max(tR.from + 1, JR + 25));
            if (GR < 0 ? tR.prevSibling() : tR.nextSibling()) break;
            if (!tR.parent()) return GR < 0 ? 0 : RR.length
          }
    }
    class CR {
      constructor(RR, JR) {
        this.fragments = RR, this.nodeSet = JR, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let RR = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (RR) {
          for (this.safeFrom = RR.openStart ? AR(RR.tree, RR.from + RR.offset, 1) - RR.offset : RR.from, this.safeTo = RR.openEnd ? AR(RR.tree, RR.to + RR.offset, -1) - RR.offset : RR.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(RR.tree), this.start.push(-RR.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(RR) {
        if (RR < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= RR;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let JR = this.trees.length - 1;
          if (JR < 0) return this.nextFragment(), null;
          let GR = this.trees[JR],
            tR = this.index[JR];
          if (tR == GR.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let uR = GR.children[tR],
            ZR = this.start[JR] + GR.positions[tR];
          if (ZR > RR) return this.nextStart = ZR, null;
          if (uR instanceof yR.t) {
            if (ZR == RR) {
              if (ZR < this.safeFrom) return null;
              let RR = ZR + uR.length;
              if (RR <= this.safeTo) {
                let JR = uR.prop(yR.d.lookAhead);
                if (!JR || RR + JR < this.fragment.to) return uR
              }
            }
            this.index[JR]++, ZR + uR.length >= Math.max(this.safeFrom, RR) && (this.trees.push(uR), this.start.push(ZR), this.index.push(0))
          } else this.index[JR]++, this.nextStart = ZR + uR.length
        }
      }
    }
    class XR {
      constructor(RR, JR) {
        this.stream = JR, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = RR.tokenizers.map((RR => new fR))
      }
      getActions(RR) {
        let JR = 0,
          GR = null,
          {
            parser: yR
          } = RR.p,
          {
            tokenizers: tR
          } = yR,
          uR = yR.stateSlot(RR.state, 3),
          ZR = RR.curContext ? RR.curContext.hash : 0,
          qR = 0;
        for (let iR = 0; iR < tR.length; iR++) {
          if (0 == (1 << iR & uR)) continue;
          let yR = tR[iR],
            fR = this.tokens[iR];
          if ((!GR || yR.fallback) && ((yR.contextual || fR.start != RR.pos || fR.mask != uR || fR.context != ZR) && (this.updateCachedToken(fR, yR, RR), fR.mask = uR, fR.context = ZR), fR.lookAhead > fR.end + 25 && (qR = Math.max(fR.lookAhead, qR)), 0 != fR.value)) {
            let tR = JR;
            if (fR.extended > -1 && (JR = this.addActions(RR, fR.extended, fR.end, JR)), JR = this.addActions(RR, fR.value, fR.end, JR), !yR.extend && (GR = fR, JR > tR)) break
          }
        }
        for (; this.actions.length > JR;) this.actions.pop();
        return qR && RR.setLookAhead(qR), GR || RR.pos != this.stream.end || (GR = new fR, GR.value = RR.p.parser.eofTerm, GR.start = GR.end = RR.pos, JR = this.addActions(RR, GR.value, GR.end, JR)), this.mainToken = GR, this.actions
      }
      getMainToken(RR) {
        if (this.mainToken) return this.mainToken;
        let JR = new fR,
          {
            pos: GR,
            p: yR
          } = RR;
        return JR.start = GR, JR.end = Math.min(GR + 1, yR.stream.end), JR.value = GR == yR.stream.end ? yR.parser.eofTerm : 0, JR
      }
      updateCachedToken(RR, JR, GR) {
        let yR = this.stream.clipPos(GR.pos);
        if (JR.token(this.stream.reset(yR, RR), GR), RR.value > -1) {
          let {
            parser: JR
          } = GR.p;
          for (let yR = 0; yR < JR.specialized.length; yR++)
            if (JR.specialized[yR] == RR.value) {
              let tR = JR.specializers[yR](this.stream.read(RR.start, RR.end), GR);
              if (tR >= 0 && GR.p.parser.dialect.allows(tR >> 1)) {
                0 == (1 & tR) ? RR.value = tR >> 1 : RR.extended = tR >> 1;
                break
              }
            }
        } else RR.value = 0, RR.end = this.stream.clipPos(yR + 1)
      }
      putAction(RR, JR, GR, yR) {
        for (let tR = 0; tR < yR; tR += 3)
          if (this.actions[tR] == RR) return yR;
        return this.actions[yR++] = RR, this.actions[yR++] = JR, this.actions[yR++] = GR, yR
      }
      addActions(RR, JR, GR, yR) {
        let {
          state: tR
        } = RR, {
          parser: uR
        } = RR.p, {
          data: ZR
        } = uR;
        for (let qR = 0; qR < 2; qR++)
          for (let RR = uR.stateSlot(tR, qR ? 2 : 1);; RR += 3) {
            if (65535 == ZR[RR]) {
              if (1 != ZR[RR + 1]) {
                0 == yR && 2 == ZR[RR + 1] && (yR = this.putAction(bR(ZR, RR + 2), JR, GR, yR));
                break
              }
              RR = bR(ZR, RR + 2)
            }
            ZR[RR] == JR && (yR = this.putAction(bR(ZR, RR + 1), JR, GR, yR))
          }
        return yR
      }
    }
    class MR {
      constructor(RR, JR, GR, yR) {
        this.parser = RR, this.input = JR, this.WL = yR, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new KR(JR, yR), this.tokens = new XR(RR, this.stream), this.topTerm = RR.top[1];
        let {
          from: uR
        } = yR[0];
        this.stacks = [tR.start(this, RR.top[0], uR)], this.fragments = GR.length && this.stream.end - uR > 4 * RR.bufferLength ? new CR(GR, RR.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let RR, JR, GR = this.stacks,
          yR = this.minStackPos,
          tR = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == GR.length) {
          let [RR] = GR;
          for (; RR.forceReduce() && RR.stack.length && RR.stack[RR.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let uR = 0; uR < GR.length; uR++) {
          let ZR = GR[uR];
          for (;;) {
            if (this.tokens.mainToken = null, ZR.pos > yR) tR.push(ZR);
            else {
              if (this.advanceStack(ZR, tR, GR)) continue;
              {
                RR || (RR = [], JR = []), RR.push(ZR);
                let GR = this.tokens.getMainToken(ZR);
                JR.push(GR.value, GR.end)
              }
            }
            break
          }
        }
        if (!tR.length) {
          let JR = RR && function(RR) {
            let JR = null;
            for (let GR of RR) {
              let RR = GR.p.stoppedAt;
              (GR.pos == GR.p.stream.end || null != RR && GR.pos > RR) && GR.p.parser.stateFlag(GR.state, 2) && (!JR || JR.score < GR.score) && (JR = GR)
            }
            return JR
          }(RR);
          if (JR) return UR && console.log("Finish with " + this.stackID(JR)), this.stackToTree(JR);
          if (this.parser.strict) throw UR && RR && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + yR);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && RR) {
          let GR = null != this.stoppedAt && RR[0].pos > this.stoppedAt ? RR[0] : this.runRecovery(RR, JR, tR);
          if (GR) return UR && console.log("Force-finish " + this.stackID(GR)), this.stackToTree(GR.forceAll())
        }
        if (this.recovering) {
          let RR = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (tR.length > RR)
            for (tR.sort(((RR, JR) => JR.score - RR.score)); tR.length > RR;) tR.pop();
          tR.some((RR => RR.reducePos > yR)) && this.recovering--
        } else if (tR.length > 1) {
          RR: for (let RR = 0; RR < tR.length - 1; RR++) {
            let JR = tR[RR];
            for (let GR = RR + 1; GR < tR.length; GR++) {
              let yR = tR[GR];
              if (JR.sameState(yR) || JR.buffer.length > 500 && yR.buffer.length > 500) {
                if (!((JR.score - yR.score || JR.buffer.length - yR.buffer.length) > 0)) {
                  tR.splice(RR--, 1);
                  continue RR
                }
                tR.splice(GR--, 1)
              }
            }
          }
          tR.length > 12 && (tR.sort(((RR, JR) => JR.score - RR.score)), tR.splice(12, tR.length - 12))
        }
        this.minStackPos = tR[0].pos;
        for (let uR = 1; uR < tR.length; uR++) tR[uR].pos < this.minStackPos && (this.minStackPos = tR[uR].pos);
        return null
      }
      stopAt(RR) {
        if (null != this.stoppedAt && this.stoppedAt < RR) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = RR
      }
      advanceStack(RR, JR, GR) {
        let tR = RR.pos,
          {
            parser: uR
          } = this,
          ZR = UR ? this.stackID(RR) + " -> " : "";
        if (null != this.stoppedAt && tR > this.stoppedAt) return RR.forceReduce() ? RR : null;
        if (this.fragments) {
          let JR = RR.curContext && RR.curContext.tracker.strict,
            GR = JR ? RR.curContext.hash : 0;
          for (let qR = this.fragments.nodeAt(tR); qR;) {
            let tR = this.parser.nodeSet.types[qR.type.id] == qR.type ? uR.getGoto(RR.state, qR.type.id) : -1;
            if (tR > -1 && qR.length && (!JR || (qR.prop(yR.d.contextHash) || 0) == GR)) return RR.useNode(qR, tR), UR && console.log(ZR + this.stackID(RR) + ` (via reuse of ${uR.getName(qR.type.id)})`), !0;
            if (!(qR instanceof yR.t) || 0 == qR.children.length || qR.positions[0] > 0) break;
            let iR = qR.children[0];
            if (!(iR instanceof yR.t && 0 == qR.positions[0])) break;
            qR = iR
          }
        }
        let qR = uR.stateSlot(RR.state, 4);
        if (qR > 0) return RR.reduce(qR), UR && console.log(ZR + this.stackID(RR) + ` (via always-reduce ${uR.getName(65535&qR)})`), !0;
        if (RR.stack.length >= 8400)
          for (; RR.stack.length > 6e3 && RR.forceReduce(););
        let iR = this.tokens.getActions(RR);
        for (let yR = 0; yR < iR.length;) {
          let qR = iR[yR++],
            fR = iR[yR++],
            VR = iR[yR++],
            KR = yR == iR.length || !GR,
            wR = KR ? RR : RR.split(),
            rR = this.tokens.mainToken;
          if (wR.apply(qR, fR, rR ? rR.start : wR.pos, VR), UR && console.log(ZR + this.stackID(wR) + ` (via ${0==(65536&qR)?"shift":`reduce of ${uR.getName(65535&qR)}`} for ${uR.getName(fR)} @ ${tR}${wR==RR?"":", split"})`), KR) return !0;
          wR.pos > tR ? JR.push(wR) : GR.push(wR)
        }
        return !1
      }
      advanceFully(RR, JR) {
        let GR = RR.pos;
        for (;;) {
          if (!this.advanceStack(RR, null, null)) return !1;
          if (RR.pos > GR) return BR(RR, JR), !0
        }
      }
      runRecovery(RR, JR, GR) {
        let yR = null,
          tR = !1;
        for (let uR = 0; uR < RR.length; uR++) {
          let ZR = RR[uR],
            qR = JR[uR << 1],
            iR = JR[1 + (uR << 1)],
            fR = UR ? this.stackID(ZR) + " -> " : "";
          if (ZR.deadEnd) {
            if (tR) continue;
            if (tR = !0, ZR.restart(), UR && console.log(fR + this.stackID(ZR) + " (restarted)"), this.advanceFully(ZR, GR)) continue
          }
          let VR = ZR.split(),
            KR = fR;
          for (let RR = 0; RR < 10 && VR.forceReduce(); RR++) {
            if (UR && console.log(KR + this.stackID(VR) + " (via force-reduce)"), this.advanceFully(VR, GR)) break;
            UR && (KR = this.stackID(VR) + " -> ")
          }
          for (let RR of ZR.recoverByInsert(qR)) UR && console.log(fR + this.stackID(RR) + " (via recover-insert)"), this.advanceFully(RR, GR);
          this.stream.end > ZR.pos ? (iR == ZR.pos && (iR++, qR = 0), ZR.recoverByDelete(qR, iR), UR && console.log(fR + this.stackID(ZR) + ` (via recover-delete ${this.parser.getName(qR)})`), BR(ZR, GR)) : (!yR || yR.score < VR.score) && (yR = VR)
        }
        return yR
      }
      stackToTree(RR) {
        return RR.close(), yR.t.build({
          buffer: qR.create(RR),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.WL[0].from,
          length: RR.pos - this.WL[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(RR) {
        let JR = (WR || (WR = new WeakMap)).get(RR);
        return JR || WR.set(RR, JR = String.fromCodePoint(this.nextStackID++)), JR + RR
      }
    }

    function BR(RR, JR) {
      for (let GR = 0; GR < JR.length; GR++) {
        let yR = JR[GR];
        if (yR.pos == RR.pos && yR.sameState(RR)) return void(JR[GR].score < RR.score && (JR[GR] = RR))
      }
      JR.push(RR)
    }
    class lR {
      constructor(RR, JR, GR) {
        this.source = RR, this.flags = JR, this.disabled = GR
      }
      allows(RR) {
        return !this.disabled || 0 == this.disabled[RR]
      }
    }
    const pR = RR => RR;
    class gR extends yR.l {
      constructor(RR) {
        if (super(), this.wrappers = [], 14 != RR.version) throw new RangeError(`Parser version (${RR.version}) doesn't match runtime version (14)`);
        let JR = RR.nodeNames.split(" ");
        this.minRepeatTerm = JR.length;
        for (let yR = 0; yR < RR.repeatNodeCount; yR++) JR.push("");
        let GR = Object.keys(RR.topRules).map((JR => RR.topRules[JR][1])),
          tR = [];
        for (let yR = 0; yR < JR.length; yR++) tR.push([]);

        function uR(RR, JR, GR) {
          tR[RR].push([JR, JR.deserialize(String(GR))])
        }
        if (RR.nodeProps)
          for (let qR of RR.nodeProps) {
            let RR = qR[0];
            "string" == typeof RR && (RR = yR.d[RR]);
            for (let JR = 1; JR < qR.length;) {
              let GR = qR[JR++];
              if (GR >= 0) uR(GR, RR, qR[JR++]);
              else {
                let yR = qR[JR + -GR];
                for (let tR = -GR; tR > 0; tR--) uR(qR[JR++], RR, yR);
                JR++
              }
            }
          }
        this.nodeSet = new yR.g(JR.map(((JR, uR) => yR.i.define({
          name: uR >= this.minRepeatTerm ? void 0 : JR,
          id: uR,
          props: tR[uR],
          top: GR.indexOf(uR) > -1,
          error: 0 == uR,
          skipped: RR.skippedNodes && RR.skippedNodes.indexOf(uR) > -1
        })))), RR.propSources && (this.nodeSet = this.nodeSet.extend(...RR.propSources)), this.strict = !1, this.bufferLength = yR.b;
        let ZR = iR(RR.tokenData);
        this.context = RR.context, this.specializerSpecs = RR.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let yR = 0; yR < this.specializerSpecs.length; yR++) this.specialized[yR] = this.specializerSpecs[yR].term;
        this.specializers = this.specializerSpecs.map(vR), this.states = iR(RR.states, Uint32Array), this.data = iR(RR.stateData), this.goto = iR(RR.goto), this.maxTerm = RR.maxTerm, this.tokenizers = RR.tokenizers.map((RR => "number" == typeof RR ? new wR(ZR, RR) : RR)), this.topRules = RR.topRules, this.dialects = RR.dialects || {}, this.dynamicPrecedences = RR.dynamicPrecedences || null, this.tokenPrecTable = RR.tokenPrec, this.termNames = RR.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(RR, JR, GR) {
        let yR = new MR(this, RR, JR, GR);
        for (let tR of this.wrappers) yR = tR(yR, RR, JR, GR);
        return yR
      }
      getGoto(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          yR = this.goto;
        if (JR >= yR[0]) return -1;
        for (let tR = yR[JR + 1];;) {
          let JR = yR[tR++],
            uR = 1 & JR,
            ZR = yR[tR++];
          if (uR && GR) return ZR;
          for (let GR = tR + (JR >> 1); tR < GR; tR++)
            if (yR[tR] == RR) return ZR;
          if (uR) return -1
        }
      }
      hasAction(RR, JR) {
        let GR = this.data;
        for (let yR = 0; yR < 2; yR++)
          for (let tR, uR = this.stateSlot(RR, yR ? 2 : 1);; uR += 3) {
            if (65535 == (tR = GR[uR])) {
              if (1 != GR[uR + 1]) {
                if (2 == GR[uR + 1]) return bR(GR, uR + 2);
                break
              }
              tR = GR[uR = bR(GR, uR + 2)]
            }
            if (tR == JR || 0 == tR) return bR(GR, uR + 1)
          }
        return 0
      }
      stateSlot(RR, JR) {
        return this.states[6 * RR + JR]
      }
      stateFlag(RR, JR) {
        return (this.stateSlot(RR, 0) & JR) > 0
      }
      validAction(RR, JR) {
        return !!this.allActions(RR, (RR => RR == JR || null))
      }
      allActions(RR, JR) {
        let GR = this.stateSlot(RR, 4),
          yR = GR ? JR(GR) : void 0;
        for (let tR = this.stateSlot(RR, 1); null == yR; tR += 3) {
          if (65535 == this.data[tR]) {
            if (1 != this.data[tR + 1]) break;
            tR = bR(this.data, tR + 2)
          }
          yR = JR(bR(this.data, tR + 1))
        }
        return yR
      }
      nextStates(RR) {
        let JR = [];
        for (let GR = this.stateSlot(RR, 1);; GR += 3) {
          if (65535 == this.data[GR]) {
            if (1 != this.data[GR + 1]) break;
            GR = bR(this.data, GR + 2)
          }
          if (0 == (1 & this.data[GR + 2])) {
            let RR = this.data[GR + 1];
            JR.some(((JR, GR) => 1 & GR && JR == RR)) || JR.push(this.data[GR], RR)
          }
        }
        return JR
      }
      configure(RR) {
        let JR = Object.assign(Object.create(gR.prototype), this);
        if (RR.props && (JR.nodeSet = this.nodeSet.extend(...RR.props)), RR.top) {
          let GR = this.topRules[RR.top];
          if (!GR) throw new RangeError(`Invalid top rule name ${RR.top}`);
          JR.top = GR
        }
        return RR.tokenizers && (JR.tokenizers = this.tokenizers.map((JR => {
          let GR = RR.tokenizers.find((RR => RR.from == JR));
          return GR ? GR.to : JR
        }))), RR.specializers && (JR.specializers = this.specializers.slice(), JR.specializerSpecs = this.specializerSpecs.map(((GR, yR) => {
          let tR = RR.specializers.find((RR => RR.from == GR.external));
          if (!tR) return GR;
          let uR = Object.assign(Object.assign({}, GR), {
            external: tR.to
          });
          return JR.specializers[yR] = vR(uR), uR
        }))), RR.contextTracker && (JR.context = RR.contextTracker), RR.dialect && (JR.dialect = this.parseDialect(RR.dialect)), null != RR.strict && (JR.strict = RR.strict), RR.wrap && (JR.wrappers = JR.wrappers.concat(RR.wrap)), null != RR.bufferLength && (JR.bufferLength = RR.bufferLength), JR
      }
      hasWrappers() {
        return this.wrappers.length > 0
      }
      getName(RR) {
        return this.termNames ? this.termNames[RR] : String(RR <= this.maxNode && this.nodeSet.types[RR].name || RR)
      }
      get eofTerm() {
        return this.maxNode + 1
      }
      get topNode() {
        return this.nodeSet.types[this.top[1]]
      }
      dynamicPrecedence(RR) {
        let JR = this.dynamicPrecedences;
        return null == JR ? 0 : JR[RR] || 0
      }
      parseDialect(RR) {
        let JR = Object.keys(this.dialects),
          GR = JR.map((() => !1));
        if (RR)
          for (let tR of RR.split(" ")) {
            let RR = JR.indexOf(tR);
            RR >= 0 && (GR[RR] = !0)
          }
        let yR = null;
        for (let tR = 0; tR < JR.length; tR++)
          if (!GR[tR])
            for (let RR, GR = this.dialects[JR[tR]]; 65535 != (RR = this.data[GR++]);)(yR || (yR = new Uint8Array(this.maxTerm + 1)))[RR] = 1;
        return new lR(RR, GR, yR)
      }
      static deserialize(RR) {
        return new gR(RR)
      }
    }

    function bR(RR, JR) {
      return RR[JR] | RR[JR + 1] << 16
    }

    function vR(RR) {
      if (RR.external) {
        let JR = RR.extend ? 1 : 0;
        return (GR, yR) => RR.external(GR, yR) << 1 | JR
      }
      return RR.get
    }
    var OR = GR(53352);
    const xR = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      NR = new class {
        constructor(RR) {
          this.start = RR.start, this.shift = RR.shift || pR, this.reduce = RR.reduce || pR, this.reuse = RR.reuse || pR, this.hash = RR.hash || (() => 0), this.strict = !1 !== RR.strict
        }
      }({
        start: !1,
        shift: (RR, JR) => 5 == JR || 6 == JR || 320 == JR ? RR : 321 == JR,
        strict: !1
      }),
      DR = new eR(((RR, JR) => {
        let {
          next: GR
        } = RR;
        (125 == GR || -1 == GR || JR.context) && RR.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      HR = new eR(((RR, JR) => {
        let GR, {
          next: yR
        } = RR;
        xR.indexOf(yR) > -1 || (47 != yR || 47 != (GR = RR.peek(1)) && 42 != GR) && (125 == yR || 59 == yR || -1 == yR || JR.context || RR.acceptToken(316))
      }), {
        contextual: !0
      }),
      oR = new eR(((RR, JR) => {
        91 != RR.next || JR.context || RR.acceptToken(317)
      }), {
        contextual: !0
      }),
      cR = new eR(((RR, JR) => {
        let {
          next: GR
        } = RR;
        if (43 == GR || 45 == GR) {
          if (RR.advance(), GR == RR.next) {
            RR.advance();
            let GR = !JR.context && JR.canShift(1);
            RR.acceptToken(GR ? 1 : 2)
          }
        } else 63 == GR && 46 == RR.peek(1) && (RR.advance(), RR.advance(), (RR.next < 48 || RR.next > 57) && RR.acceptToken(3))
      }), {
        contextual: !0
      });

    function PR(RR, JR) {
      return RR >= 65 && RR <= 90 || RR >= 97 && RR <= 122 || 95 == RR || RR >= 192 || !JR && RR >= 48 && RR <= 57
    }
    const IR = new eR(((RR, JR) => {
        if (60 != RR.next || !JR.dialectEnabled(0)) return;
        if (RR.advance(), 47 == RR.next) return;
        let GR = 0;
        for (; xR.indexOf(RR.next) > -1;) RR.advance(), GR++;
        if (PR(RR.next, !0)) {
          for (RR.advance(), GR++; PR(RR.next, !1);) RR.advance(), GR++;
          for (; xR.indexOf(RR.next) > -1;) RR.advance(), GR++;
          if (44 == RR.next) return;
          for (let JR = 0;; JR++) {
            if (7 == JR) {
              if (!PR(RR.next, !0)) return;
              break
            }
            if (RR.next != "extends".charCodeAt(JR)) break;
            RR.advance(), GR++
          }
        }
        RR.acceptToken(4, -GR)
      })),
      mR = (0, OR.h)({
        "get set async static": OR.l.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": OR.l.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": OR.l.operatorKeyword,
        "let var const using function class extends": OR.l.definitionKeyword,
        "import export from": OR.l.moduleKeyword,
        "with debugger new": OR.l.keyword,
        TemplateString: OR.l.special(OR.l.string),
        super: OR.l.atom,
        BooleanLiteral: OR.l.bool,
        this: OR.l.self,
        null: OR.l.null,
        Star: OR.l.modifier,
        VariableName: OR.l.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": OR.l.function(OR.l.variableName),
        VariableDefinition: OR.l.definition(OR.l.variableName),
        Label: OR.l.labelName,
        PropertyName: OR.l.propertyName,
        PrivatePropertyName: OR.l.special(OR.l.propertyName),
        "CallExpression/MemberExpression/PropertyName": OR.l.function(OR.l.propertyName),
        "FunctionDeclaration/VariableDefinition": OR.l.function(OR.l.definition(OR.l.variableName)),
        "ClassDeclaration/VariableDefinition": OR.l.definition(OR.l.className),
        "NewExpression/VariableName": OR.l.className,
        PropertyDefinition: OR.l.definition(OR.l.propertyName),
        PrivatePropertyDefinition: OR.l.definition(OR.l.special(OR.l.propertyName)),
        UpdateOp: OR.l.updateOperator,
        "LineComment Hashbang": OR.l.lineComment,
        BlockComment: OR.l.blockComment,
        Number: OR.l.number,
        String: OR.l.string,
        Escape: OR.l.escape,
        ArithOp: OR.l.arithmeticOperator,
        LogicOp: OR.l.logicOperator,
        BitOp: OR.l.bitwiseOperator,
        CompareOp: OR.l.compareOperator,
        RegExp: OR.l.regexp,
        Equals: OR.l.definitionOperator,
        Arrow: OR.l.function(OR.l.punctuation),
        ": Spread": OR.l.punctuation,
        "( )": OR.l.paren,
        "[ ]": OR.l.squareBracket,
        "{ }": OR.l.brace,
        "InterpolationStart InterpolationEnd": OR.l.special(OR.l.brace),
        ".": OR.l.derefOperator,
        ", ;": OR.l.separator,
        "@": OR.l.meta,
        TypeName: OR.l.typeName,
        TypeDefinition: OR.l.definition(OR.l.typeName),
        "type enum interface implements namespace module declare": OR.l.definitionKeyword,
        "abstract global Privacy readonly override": OR.l.modifier,
        "is keyof unique infer asserts": OR.l.operatorKeyword,
        JSXAttributeValue: OR.l.attributeValue,
        JSXText: OR.l.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": OR.l.angleBracket,
        "JSXIdentifier JSXNameSpacedName": OR.l.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": OR.l.attributeName,
        "JSXBuiltin/JSXIdentifier": OR.l.standard(OR.l.tagName)
      }),
      zR = {
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
      SR = {
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
      jR = {
        __proto__: null,
        "<": 193
      },
      dR = gR.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: NR,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [mR],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [HR, oR, cR, IR, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, DR, new rR("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new rR("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: RR => zR[RR] || -1
        }, {
          term: 343,
          get: RR => SR[RR] || -1
        }, {
          term: 95,
          get: RR => jR[RR] || -1
        }],
        tokenPrec: 15201
      });
    var ER = GR(53340),
      YR = GR(53317),
      kR = GR(53321),
      QR = GR(53314);
    const FR = [(0, QR.q)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, QR.q)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, QR.q)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, QR.q)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, QR.q)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, QR.q)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, QR.q)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, QR.q)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, QR.q)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, QR.q)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, QR.q)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      TR = FR.concat([(0, QR.q)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, QR.q)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, QR.q)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      sR = new yR.k,
      hR = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function RJ(RR) {
      return (JR, GR) => {
        let yR = JR.node.getChild("VariableDefinition");
        return yR && GR(yR, RR), !0
      }
    }
    const JJ = ["FunctionDeclaration"],
      GJ = {
        FunctionDeclaration: RJ("function"),
        ClassDeclaration: RJ("class"),
        ClassExpression: () => !0,
        EnumDeclaration: RJ("constant"),
        TypeAliasDeclaration: RJ("type"),
        NamespaceDeclaration: RJ("namespace"),
        VariableDefinition(RR, JR) {
          RR.matchContext(JJ) || JR(RR, "variable")
        },
        TypeDefinition(RR, JR) {
          JR(RR, "type")
        },
        __proto__: null
      };

    function yJ(RR, JR) {
      let GR = sR.get(JR);
      if (GR) return GR;
      let tR = [],
        uR = !0;

      function ZR(JR, GR) {
        let yR = RR.sliceString(JR.from, JR.to);
        tR.push({
          label: yR,
          type: GR
        })
      }
      return JR.cursor(yR.c.IncludeAnonymous).iterate((JR => {
        if (uR) uR = !1;
        else if (JR.name) {
          let RR = GJ[JR.name];
          if (RR && RR(JR, ZR) || hR.has(JR.name)) return !1
        } else if (JR.to - JR.from > 8192) {
          for (let GR of yJ(RR, JR.node)) tR.push(GR);
          return !1
        }
      })), sR.set(JR, tR), tR
    }
    const tJ = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      uJ = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function ZJ(RR) {
      let JR = (0, ER.nb)(RR.state).resolveInner(RR.pos, -1);
      if (uJ.indexOf(JR.name) > -1) return null;
      let GR = "VariableName" == JR.name || JR.to - JR.from < 20 && tJ.test(RR.state.sliceDoc(JR.from, JR.to));
      if (!GR && !RR.explicit) return null;
      let yR = [];
      for (let tR = JR; tR; tR = tR.parent) hR.has(tR.name) && (yR = yR.concat(yJ(RR.state.doc, tR)));
      return {
        options: yR,
        from: GR ? JR.from : RR.pos,
        validFor: tJ
      }
    }
    const qJ = ER.l.define({
        name: "javascript",
        parser: dR.configure({
          props: [ER.U.add({
            IfStatement: (0, ER.o)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, ER.o)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: ER.x,
            SwitchBody: RR => {
              let JR = RR.textAfter,
                GR = /^\s*\}/.test(JR),
                yR = /^\s*(case|default)\b/.test(JR);
              return RR.baseIndent + (GR ? 0 : yR ? 1 : 2) * RR.unit
            },
            Block: (0, ER.w)({
              closing: "}"
            }),
            ArrowFunction: RR => RR.baseIndent + RR.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, ER.o)({
              except: /^\s*{/
            }),
            JSXElement(RR) {
              let JR = /^\s*<\//.test(RR.textAfter);
              return RR.lineIndent(RR.node.from) + (JR ? 0 : RR.unit)
            },
            JSXEscape(RR) {
              let JR = /\s*\}/.test(RR.textAfter);
              return RR.lineIndent(RR.node.from) + (JR ? 0 : RR.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": RR => RR.column(RR.node.from) + RR.unit
          }), ER.G.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": ER.A,
            BlockComment: RR => ({
              from: RR.from + 2,
              to: RR.to - 2
            }),
            JSXElement(RR) {
              let JR = RR.firstChild;
              if (!JR || "JSXSelfClosingTag" == JR.name) return null;
              let GR = RR.lastChild;
              return {
                from: JR.to,
                to: GR.type.isError ? RR.to : GR.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(RR) {
              var JR;
              let GR = null === (JR = RR.firstChild) || void 0 === JR ? void 0 : JR.nextSibling,
                yR = RR.lastChild;
              return !GR || GR.type.isError ? null : {
                from: GR.to,
                to: yR.type.isError ? RR.to : yR.from
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
      iJ = {
        test: RR => /^JSX/.test(RR.name),
        facet: (0, ER.t)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      fJ = qJ.configure({
        dialect: "ts"
      }, "typescript"),
      VJ = qJ.configure({
        dialect: "jsx",
        props: [ER.gb.add((RR => RR.isTop ? [iJ] : void 0))]
      }),
      KJ = qJ.configure({
        dialect: "jsx ts",
        props: [ER.gb.add((RR => RR.isTop ? [iJ] : void 0))]
      }, "typescript");
    let wJ = RR => ({
      label: RR,
      type: "keyword"
    });
    const rJ = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(wJ),
      eJ = rJ.concat(["declare", "implements", "private", "protected", "public"].map(wJ));

    function aJ() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        JR = RR.jsx ? RR.typescript ? KJ : VJ : RR.typescript ? fJ : qJ,
        GR = RR.typescript ? TR.concat(eJ) : FR.concat(rJ);
      return new ER.m(JR, [qJ.data.of({
        autocomplete: (0, QR.o)(uJ, (0, QR.m)(GR))
      }), qJ.data.of({
        autocomplete: ZJ
      }), RR.jsx ? UJ : []])
    }

    function LJ(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : RR.length;
      for (let yR = null === JR || void 0 === JR ? void 0 : JR.firstChild; yR; yR = yR.nextSibling)
        if ("JSXIdentifier" == yR.name || "JSXBuiltin" == yR.name || "JSXNamespacedName" == yR.name || "JSXMemberExpression" == yR.name) return RR.sliceString(yR.from, Math.min(yR.to, GR));
      return ""
    }
    const nJ = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      UJ = kR.k.inputHandler.of(((RR, JR, GR, yR, tR) => {
        if ((nJ ? RR.composing : RR.compositionStarted) || RR.state.readOnly || JR != GR || ">" != yR && "/" != yR || !qJ.isActiveAt(RR.state, JR, -1)) return !1;
        let uR = tR(),
          {
            state: ZR
          } = uR,
          qR = ZR.changeByRange((RR => {
            var JR;
            let GR, {
                head: tR
              } = RR,
              uR = (0, ER.nb)(ZR).resolveInner(tR - 1, -1);
            if ("JSXStartTag" == uR.name && (uR = uR.parent), ZR.doc.sliceString(tR - 1, tR) != yR || "JSXAttributeValue" == uR.name && uR.to > tR);
            else {
              if (">" == yR && "JSXFragmentTag" == uR.name) return {
                range: RR,
                changes: {
                  from: tR,
                  insert: "</>"
                }
              };
              if ("/" == yR && "JSXStartCloseTag" == uR.name) {
                let RR = uR.parent,
                  yR = RR.parent;
                if (yR && RR.from == tR - 2 && ((GR = LJ(ZR.doc, yR.firstChild, tR)) || "JSXFragmentTag" == (null === (JR = yR.firstChild) || void 0 === JR ? void 0 : JR.name))) {
                  let RR = `${GR}>`;
                  return {
                    range: YR.k.cursor(tR + RR.length, -1),
                    changes: {
                      from: tR,
                      insert: RR
                    }
                  }
                }
              } else if (">" == yR) {
                let JR = function(RR) {
                  for (;;) {
                    if ("JSXOpenTag" == RR.name || "JSXSelfClosingTag" == RR.name || "JSXFragmentTag" == RR.name) return RR;
                    if ("JSXEscape" == RR.name || !RR.parent) return null;
                    RR = RR.parent
                  }
                }(uR);
                if (JR && "JSXOpenTag" == JR.name && !/^\/?>|^<\//.test(ZR.doc.sliceString(tR, tR + 2)) && (GR = LJ(ZR.doc, JR, tR))) return {
                  range: RR,
                  changes: {
                    from: tR,
                    insert: `</${GR}>`
                  }
                }
              }
            }
            return {
              range: RR
            }
          }));
        return !qR.changes.empty && (RR.dispatch([uR, ZR.update(qR, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  53340: (RR, JR, GR) => {
    GR.d(JR, {
      A: () => FR,
      C: () => fJ,
      G: () => QR,
      I: () => nR,
      M: () => OR,
      Q: () => NR,
      U: () => HR,
      W: () => YR,
      Z: () => xR,
      bb: () => vR,
      cb: () => SJ,
      e: () => AJ,
      gb: () => KR,
      h: () => DR,
      kb: () => BJ,
      l: () => eR,
      m: () => gR,
      mb: () => LR,
      n: () => PJ,
      nb: () => aR,
      o: () => dR,
      r: () => gJ,
      t: () => VR,
      w: () => zR,
      x: () => jR,
      z: () => UJ
    });
    var yR, tR = GR(53346),
      uR = GR(53317),
      ZR = GR(53321),
      qR = GR(53352),
      iR = GR(53326);
    const fR = new tR.d;

    function VR(RR) {
      return uR.r.define({
        combine: RR ? JR => JR.concat(RR) : void 0
      })
    }
    const KR = new tR.d;
    class wR {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = RR, this.name = yR, uR.o.prototype.hasOwnProperty("tree") || Object.defineProperty(uR.o.prototype, "tree", {
          get() {
            return aR(this)
          }
        }), this.parser = JR, this.extension = [pR.of(this), uR.o.languageData.of(((RR, JR, GR) => {
          let yR = rR(RR, JR, GR),
            tR = yR.type.prop(fR);
          if (!tR) return [];
          let uR = RR.facet(tR),
            ZR = yR.type.prop(KR);
          if (ZR) {
            let tR = yR.resolve(JR - yR.from, GR);
            for (let JR of ZR)
              if (JR.test(tR, RR)) {
                let GR = RR.facet(JR.facet);
                return "replace" == JR.type ? GR : GR.concat(uR)
              }
          }
          return uR
        }))].concat(GR)
      }
      isActiveAt(RR, JR) {
        return rR(RR, JR, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(fR) == this.data
      }
      findRegions(RR) {
        let JR = RR.facet(pR);
        if ((null === JR || void 0 === JR ? void 0 : JR.data) == this.data) return [{
          from: 0,
          to: RR.doc.length
        }];
        if (!JR || !JR.allowsNesting) return [];
        let GR = [],
          yR = (RR, JR) => {
            if (RR.prop(fR) == this.data) return void GR.push({
              from: JR,
              to: JR + RR.length
            });
            let uR = RR.prop(tR.d.mounted);
            if (uR) {
              if (uR.tree.prop(fR) == this.data) {
                if (uR.overlay)
                  for (let RR of uR.overlay) GR.push({
                    from: RR.from + JR,
                    to: RR.to + JR
                  });
                else GR.push({
                  from: JR,
                  to: JR + RR.length
                });
                return
              }
              if (uR.overlay) {
                let RR = GR.length;
                if (yR(uR.tree, uR.overlay[0].from + JR), GR.length > RR) return
              }
            }
            for (let GR = 0; GR < RR.children.length; GR++) {
              let uR = RR.children[GR];
              uR instanceof tR.t && yR(uR, RR.positions[GR] + JR)
            }
          };
        return yR(aR(RR), 0), GR
      }
      get allowsNesting() {
        return !0
      }
    }

    function rR(RR, JR, GR) {
      let yR = RR.facet(pR),
        uR = aR(RR).topNode;
      if (!yR || yR.allowsNesting)
        for (let ZR = uR; ZR; ZR = ZR.enter(JR, GR, tR.c.ExcludeBuffers | tR.c.EnterBracketed)) ZR.type.isTop && (uR = ZR);
      return uR
    }
    wR.setState = uR.K.define();
    class eR extends wR {
      constructor(RR, JR, GR) {
        super(RR, JR, [], GR), this.parser = JR
      }
      static define(RR) {
        let JR = VR(RR.languageData);
        return new eR(JR, RR.parser.configure({
          props: [fR.add((RR => RR.isTop ? JR : void 0))]
        }), RR.name)
      }
      configure(RR, JR) {
        return new eR(this.data, this.parser.configure(RR), JR || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function aR(RR) {
      let JR = RR.field(wR.state, !1);
      return JR ? JR.tree : tR.t.empty
    }

    function LR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RR.doc.length;
      var GR;
      return (null === (GR = RR.field(wR.state, !1)) || void 0 === GR ? void 0 : GR.context.isDone(JR)) || !1
    }

    function nR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RR.viewport.to,
        GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        yR = function(RR, JR) {
          let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var yR;
          let tR = null === (yR = RR.field(wR.state, !1)) || void 0 === yR ? void 0 : yR.context;
          if (!tR) return null;
          let uR = tR.viewport;
          tR.updateViewport({
            from: 0,
            to: JR
          });
          let ZR = tR.isDone(JR) || tR.work(GR, JR) ? tR.tree : null;
          return tR.updateViewport(uR), ZR
        }(RR.state, JR, GR);
      return yR != aR(RR.state) && RR.dispatch({}), !!yR
    }
    class UR {
      constructor(RR) {
        this.doc = RR, this.cursorPos = 0, this.string = "", this.cursor = RR.iter()
      }
      get length() {
        return this.doc.length
      }
      syncTo(RR) {
        return this.string = this.cursor.next(RR - this.cursorPos).value, this.cursorPos = RR + this.string.length, this.cursorPos - this.string.length
      }
      chunk(RR) {
        return this.syncTo(RR), this.string
      }
      get lineChunks() {
        return !0
      }
      read(RR, JR) {
        let GR = this.cursorPos - this.string.length;
        return RR < GR || JR >= this.cursorPos ? this.doc.sliceString(RR, JR) : this.string.slice(RR - GR, JR - GR)
      }
    }
    let WR = null;
    class AR {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          yR = arguments.length > 3 ? arguments[3] : void 0,
          tR = arguments.length > 4 ? arguments[4] : void 0,
          uR = arguments.length > 5 ? arguments[5] : void 0,
          ZR = arguments.length > 6 ? arguments[6] : void 0,
          qR = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = RR, this.state = JR, this.fragments = GR, this.tree = yR, this.treeLen = tR, this.viewport = uR, this.skipped = ZR, this.scheduleOn = qR, this.parse = null, this.tempSkipped = []
      }
      static create(RR, JR, GR) {
        return new AR(RR, JR, [], tR.t.empty, 0, GR, [], null)
      }
      startParse() {
        return this.parser.startParse(new UR(this.state.doc), this.fragments)
      }
      work(RR, JR) {
        return null != JR && JR >= this.state.doc.length && (JR = void 0), this.tree != tR.t.empty && this.isDone(null !== JR && void 0 !== JR ? JR : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var GR;
          if ("number" == typeof RR) {
            let JR = Date.now() + RR;
            RR = () => Date.now() > JR
          }
          for (this.parse || (this.parse = this.startParse()), null != JR && (null == this.parse.stoppedAt || this.parse.stoppedAt > JR) && JR < this.state.doc.length && this.parse.stopAt(JR);;) {
            let yR = this.parse.advance();
            if (yR) {
              if (this.fragments = this.withoutTempSkipped(tR.p.addTree(yR, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (GR = this.parse.stoppedAt) && void 0 !== GR ? GR : this.state.doc.length, this.tree = yR, this.parse = null, !(this.treeLen < (null !== JR && void 0 !== JR ? JR : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (RR()) return !1
          }
        }))
      }
      takeTree() {
        let RR, JR;
        this.parse && (RR = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > RR) && this.parse.stopAt(RR), this.withContext((() => {
          for (; !(JR = this.parse.advance()););
        })), this.treeLen = RR, this.tree = JR, this.fragments = this.withoutTempSkipped(tR.p.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(RR) {
        let JR = WR;
        WR = this;
        try {
          return RR()
        } finally {
          WR = JR
        }
      }
      withoutTempSkipped(RR) {
        for (let JR; JR = this.tempSkipped.pop();) RR = CR(RR, JR.from, JR.to);
        return RR
      }
      changes(RR, JR) {
        let {
          fragments: GR,
          tree: yR,
          treeLen: uR,
          viewport: ZR,
          skipped: qR
        } = this;
        if (this.takeTree(), !RR.empty) {
          let JR = [];
          if (RR.iterChangedRanges(((RR, GR, yR, tR) => JR.push({
              fromA: RR,
              toA: GR,
              fromB: yR,
              toB: tR
            }))), GR = tR.p.applyChanges(GR, JR), yR = tR.t.empty, uR = 0, ZR = {
              from: RR.mapPos(ZR.from, -1),
              to: RR.mapPos(ZR.to, 1)
            }, this.skipped.length) {
            qR = [];
            for (let JR of this.skipped) {
              let GR = RR.mapPos(JR.from, 1),
                yR = RR.mapPos(JR.to, -1);
              GR < yR && qR.push({
                from: GR,
                to: yR
              })
            }
          }
        }
        return new AR(this.parser, JR, GR, yR, uR, ZR, qR, this.scheduleOn)
      }
      updateViewport(RR) {
        if (this.viewport.from == RR.from && this.viewport.to == RR.to) return !1;
        this.viewport = RR;
        let JR = this.skipped.length;
        for (let GR = 0; GR < this.skipped.length; GR++) {
          let {
            from: JR,
            to: yR
          } = this.skipped[GR];
          JR < RR.to && yR > RR.from && (this.fragments = CR(this.fragments, JR, yR), this.skipped.splice(GR--, 1))
        }
        return !(this.skipped.length >= JR) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(RR, JR) {
        this.skipped.push({
          from: RR,
          to: JR
        })
      }
      static getSkippingParser(RR) {
        return new class extends tR.l {
          createParse(JR, GR, yR) {
            let uR = yR[0].from,
              ZR = yR[yR.length - 1].to;
            return {
              parsedPos: uR,
              advance() {
                let JR = WR;
                if (JR) {
                  for (let RR of yR) JR.tempSkipped.push(RR);
                  RR && (JR.scheduleOn = JR.scheduleOn ? Promise.all([JR.scheduleOn, RR]) : RR)
                }
                return this.parsedPos = ZR, new tR.t(tR.i.none, [], [], ZR - uR)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(RR) {
        RR = Math.min(RR, this.state.doc.length);
        let JR = this.fragments;
        return this.treeLen >= RR && JR.length && 0 == JR[0].from && JR[0].to >= RR
      }
      static get() {
        return WR
      }
    }

    function CR(RR, JR, GR) {
      return tR.p.applyChanges(RR, [{
        fromA: JR,
        toA: GR,
        fromB: JR,
        toB: GR
      }])
    }
    class XR {
      constructor(RR) {
        this.context = RR, this.tree = RR.tree
      }
      apply(RR) {
        if (!RR.docChanged && this.tree == this.context.tree) return this;
        let JR = this.context.changes(RR.changes, RR.state),
          GR = this.context.treeLen == RR.startState.doc.length ? void 0 : Math.max(RR.changes.mapPos(this.context.treeLen), JR.viewport.to);
        return JR.work(20, GR) || JR.takeTree(), new XR(JR)
      }
      static init(RR) {
        let JR = Math.min(3e3, RR.doc.length),
          GR = AR.create(RR.facet(pR).parser, RR, {
            from: 0,
            to: JR
          });
        return GR.work(20, JR) || GR.takeTree(), new XR(GR)
      }
    }
    wR.state = uR.L.define({
      create: XR.init,
      update(RR, JR) {
        for (let GR of JR.effects)
          if (GR.is(wR.setState)) return GR.value;
        return JR.startState.facet(pR) != JR.state.facet(pR) ? XR.init(JR.state) : RR.apply(JR)
      }
    });
    let MR = RR => {
      let JR = setTimeout((() => RR()), 500);
      return () => clearTimeout(JR)
    };
    "undefined" != typeof requestIdleCallback && (MR = RR => {
      let JR = -1,
        GR = setTimeout((() => {
          JR = requestIdleCallback(RR, {
            timeout: 400
          })
        }), 100);
      return () => JR < 0 ? clearTimeout(GR) : cancelIdleCallback(JR)
    });
    const BR = "undefined" != typeof navigator && (null === (yR = navigator.scheduling) || void 0 === yR ? void 0 : yR.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      lR = ZR.o.fromClass(class {
        constructor(RR) {
          this.view = RR, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(RR) {
          let JR = this.view.state.field(wR.state).context;
          (JR.updateViewport(RR.view.viewport) || this.view.viewport.to > JR.treeLen) && this.scheduleWork(), (RR.docChanged || RR.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(JR)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: RR
          } = this.view, JR = RR.field(wR.state);
          JR.tree == JR.context.tree && JR.context.isDone(RR.doc.length) || (this.working = MR(this.work))
        }
        work(RR) {
          this.working = null;
          let JR = Date.now();
          if (this.chunkEnd < JR && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = JR + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: GR,
            viewport: {
              to: yR
            }
          } = this.view, tR = GR.field(wR.state);
          if (tR.tree == tR.context.tree && tR.context.isDone(yR + 1e5)) return;
          let uR = Date.now() + Math.min(this.chunkBudget, 100, RR && !BR ? Math.max(25, RR.timeRemaining() - 5) : 1e9),
            ZR = tR.context.treeLen < yR && GR.doc.length > yR + 1e3,
            qR = tR.context.work((() => BR && BR() || Date.now() > uR), yR + (ZR ? 0 : 1e5));
          this.chunkBudget -= Date.now() - JR, (qR || this.chunkBudget <= 0) && (tR.context.takeTree(), this.view.dispatch({
            effects: wR.setState.of(new XR(tR.context))
          })), this.chunkBudget > 0 && (!qR || ZR) && this.scheduleWork(), this.checkAsyncSchedule(tR.context)
        }
        checkAsyncSchedule(RR) {
          RR.scheduleOn && (this.workScheduled++, RR.scheduleOn.then((() => this.scheduleWork())).catch((RR => (0, ZR.W)(this.view.state, RR))).then((() => this.workScheduled--)), RR.scheduleOn = null)
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
      pR = uR.r.define({
        combine: RR => RR.length ? RR[0] : null,
        enables: RR => [wR.state, lR, ZR.k.contentAttributes.compute([RR], (JR => {
          let GR = JR.facet(RR);
          return GR && GR.name ? {
            "data-language": GR.name
          } : {}
        }))]
      });
    class gR {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = RR, this.support = JR, this.extension = [RR, JR]
      }
    }
    const bR = uR.r.define(),
      vR = uR.r.define({
        combine: RR => {
          if (!RR.length) return "  ";
          let JR = RR[0];
          if (!JR || /\S/.test(JR) || Array.from(JR).some((RR => RR != JR[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(RR[0]));
          return JR
        }
      });

    function OR(RR) {
      let JR = RR.facet(vR);
      return 9 == JR.charCodeAt(0) ? RR.tabSize * JR.length : JR.length
    }

    function xR(RR, JR) {
      let GR = "",
        yR = RR.tabSize,
        tR = RR.facet(vR)[0];
      if ("\t" == tR) {
        for (; JR >= yR;) GR += "\t", JR -= yR;
        tR = " "
      }
      for (let uR = 0; uR < JR; uR++) GR += tR;
      return GR
    }

    function NR(RR, JR) {
      RR instanceof uR.o && (RR = new DR(RR));
      for (let yR of RR.state.facet(bR)) {
        let GR = yR(RR, JR);
        if (void 0 !== GR) return GR
      }
      let GR = aR(RR.state);
      return GR.length >= JR ? function(RR, JR, GR) {
        let yR = JR.resolveStack(GR),
          tR = JR.resolveInner(GR, -1).resolve(GR, 0).enterUnfinishedNodesBefore(GR);
        if (tR != yR.node) {
          let RR = [];
          for (let JR = tR; JR && !(JR.from < yR.node.from || JR.to > yR.node.to || JR.from == yR.node.from && JR.type == yR.node.type); JR = JR.parent) RR.push(JR);
          for (let JR = RR.length - 1; JR >= 0; JR--) yR = {
            node: RR[JR],
            next: yR
          }
        }
        return oR(yR, RR, GR)
      }(RR, GR, JR) : null
    }
    class DR {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = RR, this.options = JR, this.unit = OR(RR)
      }
      lineAt(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          GR = this.state.doc.lineAt(RR),
          {
            simulateBreak: yR,
            simulateDoubleBreak: tR
          } = this.options;
        return null != yR && yR >= GR.from && yR <= GR.to ? tR && yR == RR ? {
          text: "",
          from: RR
        } : (JR < 0 ? yR < RR : yR <= RR) ? {
          text: GR.text.slice(yR - GR.from),
          from: yR
        } : {
          text: GR.text.slice(0, yR - GR.from),
          from: GR.from
        } : GR
      }
      textAfterPos(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && RR == this.options.simulateBreak) return "";
        let {
          text: GR,
          from: yR
        } = this.lineAt(RR, JR);
        return GR.slice(RR - yR, Math.min(GR.length, RR + 100 - yR))
      }
      column(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: GR,
            from: yR
          } = this.lineAt(RR, JR),
          tR = this.countColumn(GR, RR - yR),
          uR = this.options.overrideIndentation ? this.options.overrideIndentation(yR) : -1;
        return uR > -1 && (tR += uR - this.countColumn(GR, GR.search(/\S|$/))), tR
      }
      countColumn(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RR.length;
        return (0, uR.bb)(RR, this.state.tabSize, JR)
      }
      lineIndent(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: GR,
            from: yR
          } = this.lineAt(RR, JR),
          tR = this.options.overrideIndentation;
        if (tR) {
          let RR = tR(yR);
          if (RR > -1) return RR
        }
        return this.countColumn(GR, GR.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const HR = new tR.d;

    function oR(RR, JR, GR) {
      for (let yR = RR; yR; yR = yR.next) {
        let RR = cR(yR.node);
        if (RR) return RR(IR.create(JR, GR, yR))
      }
      return 0
    }

    function cR(RR) {
      let JR = RR.type.prop(HR);
      if (JR) return JR;
      let GR, yR = RR.firstChild;
      if (yR && (GR = yR.type.prop(tR.d.closedBy))) {
        let JR = RR.lastChild,
          yR = JR && GR.indexOf(JR.name) > -1;
        return RR => SR(RR, !0, 1, void 0, yR && ! function(RR) {
          return RR.pos == RR.options.simulateBreak && RR.options.simulateDoubleBreak
        }(RR) ? JR.from : void 0)
      }
      return null == RR.parent ? PR : null
    }

    function PR() {
      return 0
    }
    class IR extends DR {
      constructor(RR, JR, GR) {
        super(RR.state, RR.options), this.base = RR, this.pos = JR, this.context = GR
      }
      get node() {
        return this.context.node
      }
      static create(RR, JR, GR) {
        return new IR(RR, JR, GR)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(RR) {
        let JR = this.state.doc.lineAt(RR.from);
        for (;;) {
          let GR = RR.resolve(JR.from);
          for (; GR.parent && GR.parent.from == GR.from;) GR = GR.parent;
          if (mR(GR, RR)) break;
          JR = this.state.doc.lineAt(GR.from)
        }
        return this.lineIndent(JR.from)
      }
      continue () {
        return oR(this.context.next, this.base, this.pos)
      }
    }

    function mR(RR, JR) {
      for (let GR = JR; GR; GR = GR.parent)
        if (RR == GR) return !0;
      return !1
    }

    function zR(RR) {
      let {
        closing: JR,
        align: GR = !0,
        units: yR = 1
      } = RR;
      return RR => SR(RR, GR, yR, JR)
    }

    function SR(RR, JR, GR, yR, tR) {
      let uR = RR.textAfter,
        ZR = uR.match(/^\s*/)[0].length,
        qR = yR && uR.slice(ZR, ZR + yR.length) == yR || tR == RR.pos + ZR,
        iR = JR ? function(RR) {
          let JR = RR.node,
            GR = JR.childAfter(JR.from),
            yR = JR.lastChild;
          if (!GR) return null;
          let tR = RR.options.simulateBreak,
            uR = RR.state.doc.lineAt(GR.from),
            ZR = null == tR || tR <= uR.from ? uR.to : Math.min(uR.to, tR);
          for (let qR = GR.to;;) {
            let RR = JR.childAfter(qR);
            if (!RR || RR == yR) return null;
            if (!RR.type.isSkipped) {
              if (RR.from >= ZR) return null;
              let JR = /^ */.exec(uR.text.slice(GR.to - uR.from))[0].length;
              return {
                from: GR.from,
                to: GR.to + JR
              }
            }
            qR = RR.to
          }
        }(RR) : null;
      return iR ? qR ? RR.column(iR.from) : RR.column(iR.to) : RR.baseIndent + (qR ? 0 : RR.unit * GR)
    }
    const jR = RR => RR.baseIndent;

    function dR() {
      let {
        except: RR,
        units: JR = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return GR => {
        let yR = RR && RR.test(GR.textAfter);
        return GR.baseIndent + (yR ? 0 : JR * GR.unit)
      }
    }
    const ER = 200;

    function YR() {
      return uR.o.transactionFilter.of((RR => {
        if (!RR.docChanged || !RR.isUserEvent("input.type") && !RR.isUserEvent("input.complete")) return RR;
        let JR = RR.startState.languageDataAt("indentOnInput", RR.startState.selection.main.head);
        if (!JR.length) return RR;
        let GR = RR.newDoc,
          {
            head: yR
          } = RR.newSelection.main,
          tR = GR.lineAt(yR);
        if (yR > tR.from + ER) return RR;
        let uR = GR.sliceString(tR.from, yR);
        if (!JR.some((RR => RR.test(uR)))) return RR;
        let {
          state: ZR
        } = RR, qR = -1, iR = [];
        for (let {
            head: fR
          }
          of ZR.selection.WL) {
          let RR = ZR.doc.lineAt(fR);
          if (RR.from == qR) continue;
          qR = RR.from;
          let JR = NR(ZR, RR.from);
          if (null == JR) continue;
          let GR = /^\s*/.exec(RR.text)[0],
            yR = xR(ZR, JR);
          GR != yR && iR.push({
            from: RR.from,
            to: RR.from + GR.length,
            insert: yR
          })
        }
        return iR.length ? [RR, {
          changes: iR,
          sequential: !0
        }] : RR
      }))
    }
    const kR = uR.r.define(),
      QR = new tR.d;

    function FR(RR) {
      let JR = RR.firstChild,
        GR = RR.lastChild;
      return JR && JR.to < GR.from ? {
        from: JR.to,
        to: GR.type.isError ? RR.to : GR.from
      } : null
    }

    function TR(RR) {
      let JR = RR.lastChild;
      return JR && JR.to == RR.to && JR.type.isError
    }

    function sR(RR, JR, GR) {
      for (let yR of RR.facet(kR)) {
        let tR = yR(RR, JR, GR);
        if (tR) return tR
      }
      return function(RR, JR, GR) {
        let yR = aR(RR);
        if (yR.length < GR) return null;
        let tR = null;
        for (let uR = yR.resolveStack(GR, 1); uR; uR = uR.next) {
          let ZR = uR.node;
          if (ZR.to <= GR || ZR.from > GR) continue;
          if (tR && ZR.from < JR) break;
          let qR = ZR.type.prop(QR);
          if (qR && (ZR.to < yR.length - 50 || yR.length == RR.doc.length || !TR(ZR))) {
            let yR = qR(ZR, RR);
            yR && yR.from <= GR && yR.from >= JR && yR.to > GR && (tR = yR)
          }
        }
        return tR
      }(RR, JR, GR)
    }

    function hR(RR, JR) {
      let GR = JR.mapPos(RR.from, 1),
        yR = JR.mapPos(RR.to, -1);
      return GR >= yR ? void 0 : {
        from: GR,
        to: yR
      }
    }
    const RJ = uR.K.define({
        map: hR
      }),
      JJ = uR.K.define({
        map: hR
      });

    function GJ(RR) {
      let JR = [];
      for (let {
          head: GR
        }
        of RR.state.selection.WL) JR.some((RR => RR.from <= GR && RR.to >= GR)) || JR.push(RR.lineBlockAt(GR));
      return JR
    }
    const yJ = uR.L.define({
      create: () => ZR.e.none,
      update(RR, JR) {
        JR.isUserEvent("delete") && JR.changes.iterChangedRanges(((JR, GR) => RR = tJ(RR, JR, GR))), RR = RR.map(JR.changes);
        for (let GR of JR.effects)
          if (GR.is(RJ) && !ZJ(RR, GR.value.from, GR.value.to)) {
            let {
              preparePlaceholder: yR
            } = JR.state.facet(KJ), tR = yR ? ZR.e.replace({
              widget: new aJ(yR(JR.state, GR.value))
            }) : eJ;
            RR = RR.update({
              add: [tR.range(GR.value.from, GR.value.to)]
            })
          } else GR.is(JJ) && (RR = RR.update({
            filter: (RR, JR) => GR.value.from != RR || GR.value.to != JR,
            filterFrom: GR.value.from,
            filterTo: GR.value.to
          }));
        return JR.selection && (RR = tJ(RR, JR.selection.main.head)), RR
      },
      provide: RR => ZR.k.Cy.from(RR),
      toJSON(RR, JR) {
        let GR = [];
        return RR.between(0, JR.doc.length, ((RR, JR) => {
          GR.push(RR, JR)
        })), GR
      },
      fromJSON(RR) {
        if (!Array.isArray(RR) || RR.length % 2) throw new RangeError("Invalid JSON for fold state");
        let JR = [];
        for (let GR = 0; GR < RR.length;) {
          let yR = RR[GR++],
            tR = RR[GR++];
          if ("number" != typeof yR || "number" != typeof tR) throw new RangeError("Invalid JSON for fold state");
          JR.push(eJ.range(yR, tR))
        }
        return ZR.e.set(JR, !0)
      }
    });

    function tJ(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : JR,
        yR = !1;
      return RR.between(JR, GR, ((RR, tR) => {
        RR < GR && tR > JR && (yR = !0)
      })), yR ? RR.update({
        filterFrom: JR,
        filterTo: GR,
        filter: (RR, yR) => RR >= GR || yR <= JR
      }) : RR
    }

    function uJ(RR, JR, GR) {
      var yR;
      let tR = null;
      return null === (yR = RR.field(yJ, !1)) || void 0 === yR || yR.between(JR, GR, ((RR, JR) => {
        (!tR || tR.from > RR) && (tR = {
          from: RR,
          to: JR
        })
      })), tR
    }

    function ZJ(RR, JR, GR) {
      let yR = !1;
      return RR.between(JR, JR, ((RR, tR) => {
        RR == JR && tR == GR && (yR = !0)
      })), yR
    }

    function qJ(RR, JR) {
      return RR.field(yJ, !1) ? JR : JR.concat(uR.K.appendConfig.of(wJ()))
    }

    function iJ(RR, JR) {
      let GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        yR = RR.state.doc.lineAt(JR.from).number,
        tR = RR.state.doc.lineAt(JR.to).number;
      return ZR.k.announce.of(`${RR.state.phrase(GR?"Folded lines":"Unfolded lines")} ${yR} ${RR.state.phrase("to")} ${tR}.`)
    }
    const fJ = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: RR => {
          for (let JR of GJ(RR)) {
            let GR = sR(RR.state, JR.from, JR.to);
            if (GR) return RR.dispatch({
              effects: qJ(RR.state, [RJ.of(GR), iJ(RR, GR)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: RR => {
          if (!RR.state.field(yJ, !1)) return !1;
          let JR = [];
          for (let GR of GJ(RR)) {
            let yR = uJ(RR.state, GR.from, GR.to);
            yR && JR.push(JJ.of(yR), iJ(RR, yR, !1))
          }
          return JR.length && RR.dispatch({
            effects: JR
          }), JR.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: RR => {
          let {
            state: JR
          } = RR, GR = [];
          for (let yR = 0; yR < JR.doc.length;) {
            let tR = RR.lineBlockAt(yR),
              uR = sR(JR, tR.from, tR.to);
            uR && GR.push(RJ.of(uR)), yR = (uR ? RR.lineBlockAt(uR.to) : tR).to + 1
          }
          return GR.length && RR.dispatch({
            effects: qJ(RR.state, GR)
          }), !!GR.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: RR => {
          let JR = RR.state.field(yJ, !1);
          if (!JR || !JR.size) return !1;
          let GR = [];
          return JR.between(0, RR.state.doc.length, ((RR, JR) => {
            GR.push(JJ.of({
              from: RR,
              to: JR
            }))
          })), RR.dispatch({
            effects: GR
          }), !0
        }
      }],
      VJ = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      KJ = uR.r.define({
        combine: RR => (0, uR.ab)(RR, VJ)
      });

    function wJ(RR) {
      let JR = [yJ, WJ];
      return RR && JR.push(KJ.of(RR)), JR
    }

    function rJ(RR, JR) {
      let {
        state: GR
      } = RR, yR = GR.facet(KJ), tR = JR => {
        let GR = RR.lineBlockAt(RR.posAtDOM(JR.target)),
          yR = uJ(RR.state, GR.from, GR.to);
        yR && RR.dispatch({
          effects: JJ.of(yR)
        }), JR.preventDefault()
      };
      if (yR.placeholderDOM) return yR.placeholderDOM(RR, tR, JR);
      let uR = document.createElement("span");
      return uR.textContent = yR.placeholderText, uR.setAttribute("aria-label", GR.phrase("folded code")), uR.title = GR.phrase("unfold"), uR.className = "cm-foldPlaceholder", uR.onclick = tR, uR
    }
    const eJ = ZR.e.replace({
      widget: new class extends ZR.q {
        toDOM(RR) {
          return rJ(RR, null)
        }
      }
    });
    class aJ extends ZR.q {
      constructor(RR) {
        super(), this.value = RR
      }
      eq(RR) {
        return this.value == RR.value
      }
      toDOM(RR) {
        return rJ(RR, this.value)
      }
    }
    const LJ = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class nJ extends ZR.l {
      constructor(RR, JR) {
        super(), this.config = RR, this.open = JR
      }
      eq(RR) {
        return this.config == RR.config && this.open == RR.open
      }
      toDOM(RR) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let JR = document.createElement("span");
        return JR.textContent = this.open ? this.config.openText : this.config.closedText, JR.title = RR.state.phrase(this.open ? "Fold line" : "Unfold line"), JR
      }
    }

    function UJ() {
      let RR = {
          ...LJ,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        JR = new nJ(RR, !0),
        GR = new nJ(RR, !1),
        yR = ZR.o.fromClass(class {
          constructor(RR) {
            this.from = RR.viewport.from, this.markers = this.buildMarkers(RR)
          }
          update(JR) {
            (JR.docChanged || JR.viewportChanged || JR.startState.facet(pR) != JR.state.facet(pR) || JR.startState.field(yJ, !1) != JR.state.field(yJ, !1) || aR(JR.startState) != aR(JR.state) || RR.foldingChanged(JR)) && (this.markers = this.buildMarkers(JR.view))
          }
          buildMarkers(RR) {
            let yR = new uR.C;
            for (let tR of RR.viewportLineBlocks) {
              let uR = uJ(RR.state, tR.from, tR.to) ? GR : sR(RR.state, tR.from, tR.to) ? JR : null;
              uR && yR.add(tR.from, tR.from, uR)
            }
            return yR.finish()
          }
        }),
        {
          domEventHandlers: tR
        } = RR;
      return [yR, (0, ZR.B)({
        class: "cm-foldGutter",
        markers(RR) {
          var JR;
          return (null === (JR = RR.plugin(yR)) || void 0 === JR ? void 0 : JR.markers) || uR.E.empty
        },
        initialSpacer: () => new nJ(RR, !1),
        domEventHandlers: {
          ...tR,
          click: (RR, JR, GR) => {
            if (tR.click && tR.click(RR, JR, GR)) return !0;
            let yR = uJ(RR.state, JR.from, JR.to);
            if (yR) return RR.dispatch({
              effects: JJ.of(yR)
            }), !0;
            let uR = sR(RR.state, JR.from, JR.to);
            return !!uR && (RR.dispatch({
              effects: RJ.of(uR)
            }), !0)
          }
        }
      }), wJ()]
    }
    const WJ = ZR.k.baseTheme({
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
    class AJ {
      constructor(RR, JR) {
        let GR;

        function yR(RR) {
          let JR = iR.c.newName();
          return (GR || (GR = Object.create(null)))["." + JR] = RR, JR
        }
        this.specs = RR;
        const tR = "string" == typeof JR.all ? JR.all : JR.all ? yR(JR.all) : void 0,
          uR = JR.scope;
        this.scope = uR instanceof wR ? RR => RR.prop(fR) == uR.data : uR ? RR => RR == uR : void 0, this.style = (0, qR.i)(RR.map((RR => ({
          tag: RR.tag,
          class: RR.class || yR(Object.assign({}, RR, {
            tag: null
          }))
        }))), {
          all: tR
        }).style, this.module = GR ? new iR.c(GR) : null, this.themeType = JR.themeType
      }
      static define(RR, JR) {
        return new AJ(RR, JR || {})
      }
    }
    const CJ = uR.r.define(),
      XJ = uR.r.define({
        combine: RR => RR.length ? [RR[0]] : null
      });

    function MJ(RR) {
      let JR = RR.facet(CJ);
      return JR.length ? JR : RR.facet(XJ)
    }

    function BJ(RR, JR) {
      let GR, yR = [pJ];
      return RR instanceof AJ && (RR.module && yR.push(ZR.k.styleModule.of(RR.module)), GR = RR.themeType), (null === JR || void 0 === JR ? void 0 : JR.fallback) ? yR.push(XJ.of(RR)) : GR ? yR.push(CJ.computeN([ZR.k.darkTheme], (JR => JR.facet(ZR.k.darkTheme) == ("dark" == GR) ? [RR] : []))) : yR.push(CJ.of(RR)), yR
    }
    class lJ {
      constructor(RR) {
        this.markCache = Object.create(null), this.tree = aR(RR.state), this.Cy = this.buildDeco(RR, MJ(RR.state)), this.decoratedTo = RR.viewport.to
      }
      update(RR) {
        let JR = aR(RR.state),
          GR = MJ(RR.state),
          yR = GR != MJ(RR.startState),
          {
            viewport: tR
          } = RR.view,
          uR = RR.changes.mapPos(this.decoratedTo, 1);
        JR.length < tR.to && !yR && JR.type == this.tree.type && uR >= tR.to ? (this.Cy = this.Cy.map(RR.changes), this.decoratedTo = uR) : (JR != this.tree || RR.viewportChanged || yR) && (this.tree = JR, this.Cy = this.buildDeco(RR.view, GR), this.decoratedTo = tR.to)
      }
      buildDeco(RR, JR) {
        if (!JR || !this.tree.length) return ZR.e.none;
        let GR = new uR.C;
        for (let {
            from: yR,
            to: tR
          }
          of RR.GJR)(0, qR.d)(this.tree, JR, ((RR, JR, yR) => {
          GR.add(RR, JR, this.markCache[yR] || (this.markCache[yR] = ZR.e.mark({
            class: yR
          })))
        }), yR, tR);
        return GR.finish()
      }
    }
    const pJ = uR.y.high(ZR.o.fromClass(lJ, {
        Cy: RR => RR.Cy
      })),
      gJ = AJ.define([{
        tag: qR.l.meta,
        color: "#404740"
      }, {
        tag: qR.l.link,
        textDecoration: "underline"
      }, {
        tag: qR.l.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: qR.l.emphasis,
        fontStyle: "italic"
      }, {
        tag: qR.l.strong,
        fontWeight: "bold"
      }, {
        tag: qR.l.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: qR.l.keyword,
        color: "#708"
      }, {
        tag: [qR.l.atom, qR.l.bool, qR.l.url, qR.l.contentSeparator, qR.l.labelName],
        color: "#219"
      }, {
        tag: [qR.l.literal, qR.l.inserted],
        color: "#164"
      }, {
        tag: [qR.l.string, qR.l.deleted],
        color: "#a11"
      }, {
        tag: [qR.l.regexp, qR.l.escape, qR.l.special(qR.l.string)],
        color: "#e40"
      }, {
        tag: qR.l.definition(qR.l.variableName),
        color: "#00f"
      }, {
        tag: qR.l.local(qR.l.variableName),
        color: "#30a"
      }, {
        tag: [qR.l.typeName, qR.l.namespace],
        color: "#085"
      }, {
        tag: qR.l.className,
        color: "#167"
      }, {
        tag: [qR.l.special(qR.l.variableName), qR.l.macroName],
        color: "#256"
      }, {
        tag: qR.l.definition(qR.l.propertyName),
        color: "#00c"
      }, {
        tag: qR.l.comment,
        color: "#940"
      }, {
        tag: qR.l.invalid,
        color: "#f00"
      }]),
      bJ = ZR.k.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      vJ = 1e4,
      OJ = "()[]{}",
      xJ = uR.r.define({
        combine: RR => (0, uR.ab)(RR, {
          afterCursor: !0,
          brackets: OJ,
          maxScanDistance: vJ,
          renderMatch: HJ
        })
      }),
      NJ = ZR.e.mark({
        class: "cm-matchingBracket"
      }),
      DJ = ZR.e.mark({
        class: "cm-nonmatchingBracket"
      });

    function HJ(RR) {
      let JR = [],
        GR = RR.matched ? NJ : DJ;
      return JR.push(GR.range(RR.start.from, RR.start.to)), RR.end && JR.push(GR.range(RR.end.from, RR.end.to)), JR
    }

    function oJ(RR) {
      let JR = [],
        GR = RR.facet(xJ);
      for (let yR of RR.selection.WL) {
        if (!yR.empty) continue;
        let tR = SJ(RR, yR.head, -1, GR) || yR.head > 0 && SJ(RR, yR.head - 1, 1, GR) || GR.afterCursor && (SJ(RR, yR.head, 1, GR) || yR.head < RR.doc.length && SJ(RR, yR.head + 1, -1, GR));
        tR && (JR = JR.concat(GR.renderMatch(tR, RR)))
      }
      return ZR.e.set(JR, !0)
    }
    const cJ = [ZR.o.fromClass(class {
      constructor(RR) {
        this.paused = !1, this.Cy = oJ(RR.state)
      }
      update(RR) {
        (RR.docChanged || RR.selectionSet || this.paused) && (RR.view.composing ? (this.Cy = this.Cy.map(RR.changes), this.paused = !0) : (this.Cy = oJ(RR.state), this.paused = !1))
      }
    }, {
      Cy: RR => RR.Cy
    }), bJ];

    function PJ() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [xJ.of(RR), cJ]
    }
    const IJ = new tR.d;

    function mJ(RR, JR, GR) {
      let yR = RR.prop(JR < 0 ? tR.d.openedBy : tR.d.closedBy);
      if (yR) return yR;
      if (1 == RR.name.length) {
        let yR = GR.indexOf(RR.name);
        if (yR > -1 && yR % 2 == (JR < 0 ? 1 : 0)) return [GR[yR + JR]]
      }
      return null
    }

    function zJ(RR) {
      let JR = RR.type.prop(IJ);
      return JR ? JR(RR.node) : RR
    }

    function SJ(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        tR = yR.maxScanDistance || vJ,
        uR = yR.brackets || OJ,
        ZR = aR(RR),
        qR = ZR.resolveInner(JR, GR);
      for (let iR = qR; iR; iR = iR.parent) {
        let yR = mJ(iR.type, GR, uR);
        if (yR && iR.from < iR.to) {
          let tR = zJ(iR);
          if (tR && (GR > 0 ? JR >= tR.from && JR < tR.to : JR > tR.from && JR <= tR.to)) return jJ(RR, JR, GR, iR, tR, yR, uR)
        }
      }
      return function(RR, JR, GR, yR, tR, uR, ZR) {
        if (GR < 0 ? !JR : JR == RR.doc.length) return null;
        let qR = GR < 0 ? RR.sliceDoc(JR - 1, JR) : RR.sliceDoc(JR, JR + 1),
          iR = ZR.indexOf(qR);
        if (iR < 0 || iR % 2 == 0 != GR > 0) return null;
        let fR = {
            from: GR < 0 ? JR - 1 : JR,
            to: GR > 0 ? JR + 1 : JR
          },
          VR = RR.doc.iterRange(JR, GR > 0 ? RR.doc.length : 0),
          KR = 0;
        for (let wR = 0; !VR.next().done && wR <= uR;) {
          let RR = VR.value;
          GR < 0 && (wR += RR.length);
          let uR = JR + wR * GR;
          for (let JR = GR > 0 ? 0 : RR.length - 1, qR = GR > 0 ? RR.length : -1; JR != qR; JR += GR) {
            let qR = ZR.indexOf(RR[JR]);
            if (!(qR < 0 || yR.resolveInner(uR + JR, 1).type != tR))
              if (qR % 2 == 0 == GR > 0) KR++;
              else {
                if (1 == KR) return {
                  start: fR,
                  end: {
                    from: uR + JR,
                    to: uR + JR + 1
                  },
                  matched: qR >> 1 == iR >> 1
                };
                KR--
              }
          }
          GR > 0 && (wR += RR.length)
        }
        return VR.done ? {
          start: fR,
          matched: !1
        } : null
      }(RR, JR, GR, ZR, qR.type, tR, uR)
    }

    function jJ(RR, JR, GR, yR, tR, uR, ZR) {
      let qR = yR.parent,
        iR = {
          from: tR.from,
          to: tR.to
        },
        fR = 0,
        VR = null === qR || void 0 === qR ? void 0 : qR.cursor();
      if (VR && (GR < 0 ? VR.childBefore(yR.from) : VR.childAfter(yR.to)))
        do {
          if (GR < 0 ? VR.to <= yR.from : VR.from >= yR.to) {
            if (0 == fR && uR.indexOf(VR.type.name) > -1 && VR.from < VR.to) {
              let RR = zJ(VR);
              return {
                start: iR,
                end: RR ? {
                  from: RR.from,
                  to: RR.to
                } : void 0,
                matched: !0
              }
            }
            if (mJ(VR.type, GR, ZR)) fR++;
            else if (mJ(VR.type, -GR, ZR)) {
              if (0 == fR) {
                let RR = zJ(VR);
                return {
                  start: iR,
                  end: RR && RR.from < RR.to ? {
                    from: RR.from,
                    to: RR.to
                  } : void 0,
                  matched: !1
                }
              }
              fR--
            }
          }
        } while (GR < 0 ? VR.prevSibling() : VR.nextSibling());
      return {
        start: iR,
        matched: !1
      }
    }
    const dJ = Object.create(null),
      EJ = [tR.i.none],
      YJ = [],
      kJ = Object.create(null),
      QJ = Object.create(null);
    for (let [sJ, hJ] of [
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
      ]) QJ[sJ] = TJ(dJ, hJ);

    function FJ(RR, JR) {
      YJ.indexOf(RR) > -1 || (YJ.push(RR), console.warn(JR))
    }

    function TJ(RR, JR) {
      let GR = [];
      for (let tR of JR.split(" ")) {
        let JR = [];
        for (let GR of tR.split(".")) {
          let yR = RR[GR] || qR.l[GR];
          yR ? "function" == typeof yR ? JR.length ? JR = JR.map(yR) : FJ(GR, `Modifier ${GR} used at start of tag`) : JR.length ? FJ(GR, `Tag ${GR} used as modifier`) : JR = Array.isArray(yR) ? yR : [yR] : FJ(GR, `Unknown highlighting tag ${GR}`)
        }
        for (let RR of JR) GR.push(RR)
      }
      if (!GR.length) return 0;
      let yR = JR.replace(/ /g, "_"),
        uR = yR + " " + GR.map((RR => RR.id)),
        ZR = kJ[uR];
      if (ZR) return ZR.id;
      let iR = kJ[uR] = tR.i.define({
        id: EJ.length,
        name: yR,
        props: [(0, qR.h)({
          [yR]: GR
        })]
      });
      return EJ.push(iR), iR.id
    }
    ZR.i.RTL, ZR.i.LTR
  },
  53374: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => WR,
      f: () => MR
    });
    var yR = GR(53321),
      tR = GR(53317),
      uR = GR(53332);
    class ZR {
      constructor(RR, JR, GR) {
        this.from = RR, this.to = JR, this.diagnostic = GR
      }
    }
    class qR {
      constructor(RR, JR, GR) {
        this.diagnostics = RR, this.panel = JR, this.selected = GR
      }
      static init(RR, JR, GR) {
        let uR = GR.facet(CR).markerFilter;
        uR && (RR = uR(RR, GR));
        let ZR = RR.slice().sort(((RR, JR) => RR.from - JR.from || RR.to - JR.to)),
          fR = new tR.C,
          VR = [],
          KR = 0,
          wR = GR.doc.iter(),
          rR = 0,
          eR = GR.doc.length;
        for (let tR = 0;;) {
          let RR, JR, GR = tR == ZR.length ? null : ZR[tR];
          if (!GR && !VR.length) break;
          if (VR.length) RR = KR, JR = VR.reduce(((RR, JR) => Math.min(RR, JR.to)), GR && GR.from > RR ? GR.from : 1e8);
          else {
            if (RR = GR.from, RR > eR) break;
            JR = GR.to, VR.push(GR), tR++
          }
          for (; tR < ZR.length;) {
            let GR = ZR[tR];
            if (GR.from != RR || !(GR.to > GR.from || GR.to == RR)) {
              JR = Math.min(GR.from, JR);
              break
            }
            VR.push(GR), tR++, JR = Math.min(GR.to, JR)
          }
          JR = Math.min(JR, eR);
          let uR = !1;
          if (VR.some((GR => GR.from == RR && (GR.to == JR || JR == eR))) && (uR = RR == JR, !uR && JR - RR < 10)) {
            let GR = RR - (rR + wR.value.length);
            GR > 0 && (wR.next(GR), rR = RR);
            for (let yR = RR;;) {
              if (yR >= JR) {
                uR = !0;
                break
              }
              if (!wR.lineBreak && rR + wR.value.length > yR) break;
              yR = rR + wR.value.length, rR += wR.value.length, wR.next()
            }
          }
          let qR = DR(VR);
          if (uR) fR.add(RR, RR, yR.e.widget({
            widget: new pR(qR),
            diagnostics: VR.slice()
          }));
          else {
            let GR = VR.reduce(((RR, JR) => JR.markClass ? RR + " " + JR.markClass : RR), "");
            fR.add(RR, JR, yR.e.mark({
              class: "cm-lintRange cm-lintRange-" + qR + GR,
              diagnostics: VR.slice(),
              inclusiveEnd: VR.some((RR => RR.to > JR))
            }))
          }
          if (KR = JR, KR == eR) break;
          for (let yR = 0; yR < VR.length; yR++) VR[yR].to <= KR && VR.splice(yR--, 1)
        }
        let aR = fR.finish();
        return new qR(aR, JR, iR(aR))
      }
    }

    function iR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        yR = null;
      return RR.between(GR, 1e9, ((RR, GR, tR) => {
        let {
          spec: uR
        } = tR;
        if (!(JR && uR.diagnostics.indexOf(JR) < 0))
          if (yR) {
            if (uR.diagnostics.indexOf(yR.diagnostic) < 0) return !1;
            yR = new ZR(yR.from, GR, yR.diagnostic)
          } else yR = new ZR(RR, GR, JR || uR.diagnostics[0])
      })), yR
    }

    function fR(RR, JR) {
      let GR = JR.pos,
        yR = JR.end || GR,
        tR = RR.state.facet(CR).hideOn(RR, GR, yR);
      if (null != tR) return tR;
      let uR = RR.startState.doc.lineAt(JR.pos);
      return !(!RR.effects.some((RR => RR.is(KR))) && !RR.changes.touchesRange(uR.from, Math.max(uR.to, yR)))
    }

    function VR(RR, JR) {
      return RR.field(eR, !1) ? JR : JR.concat(tR.K.appendConfig.of(HR))
    }
    const KR = tR.K.define(),
      wR = tR.K.define(),
      rR = tR.K.define(),
      eR = tR.L.define({
        create: () => new qR(yR.e.none, null, null),
        update(RR, JR) {
          if (JR.docChanged && RR.diagnostics.size) {
            let GR = RR.diagnostics.map(JR.changes),
              yR = null,
              tR = RR.panel;
            if (RR.selected) {
              let tR = JR.changes.mapPos(RR.selected.from, 1);
              yR = iR(GR, RR.selected.diagnostic, tR) || iR(GR, null, tR)
            }!GR.size && tR && JR.state.facet(CR).autoPanel && (tR = null), RR = new qR(GR, tR, yR)
          }
          for (let GR of JR.effects)
            if (GR.is(KR)) {
              let yR = JR.state.facet(CR).autoPanel ? GR.value.length ? bR.open : null : RR.panel;
              RR = qR.init(GR.value, yR, JR.state)
            } else GR.is(wR) ? RR = new qR(RR.diagnostics, GR.value ? bR.open : null, RR.selected) : GR.is(rR) && (RR = new qR(RR.diagnostics, RR.panel, GR.value));
          return RR
        },
        provide: RR => [yR.hb.from(RR, (RR => RR.panel)), yR.k.Cy.from(RR, (RR => RR.diagnostics))]
      });
    const aR = yR.e.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function LR(RR, JR, GR) {
      let yR, {
          diagnostics: tR
        } = RR.state.field(eR),
        uR = -1,
        ZR = -1;
      tR.between(JR - (GR < 0 ? 1 : 0), JR + (GR > 0 ? 1 : 0), ((RR, tR, qR) => {
        let {
          spec: iR
        } = qR;
        if (JR >= RR && JR <= tR && (RR == tR || (JR > RR || GR > 0) && (JR < tR || GR < 0))) return yR = iR.diagnostics, uR = RR, ZR = tR, !1
      }));
      let qR = RR.state.facet(CR).tooltipFilter;
      return yR && qR && (yR = qR(yR, RR.state)), yR ? {
        pos: uR,
        end: ZR,
        above: RR.state.doc.lineAt(uR).to < ZR,
        create: () => ({
          dom: nR(RR, yR)
        })
      } : null
    }

    function nR(RR, JR) {
      return (0, uR.c)("ul", {
        class: "cm-tooltip-lint"
      }, JR.map((JR => lR(RR, JR, !1))))
    }
    const UR = RR => {
        let JR = RR.state.field(eR, !1);
        return !(!JR || !JR.panel) && (RR.dispatch({
          effects: wR.of(!1)
        }), !0)
      },
      WR = [{
        key: "Mod-Shift-m",
        run: RR => {
          let JR = RR.state.field(eR, !1);
          JR && JR.panel || RR.dispatch({
            effects: VR(RR.state, [wR.of(!0)])
          });
          let GR = (0, yR.w)(RR, bR.open);
          return GR && GR.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: RR => {
          let JR = RR.state.field(eR, !1);
          if (!JR) return !1;
          let GR = RR.state.selection.main,
            yR = iR(JR.diagnostics, null, GR.to + 1);
          return !(!yR && (yR = iR(JR.diagnostics, null, 0), !yR || yR.from == GR.from && yR.to == GR.to)) && (RR.dispatch({
            selection: {
              anchor: yR.from,
              head: yR.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      AR = yR.o.fromClass(class {
        constructor(RR) {
          this.view = RR, this.timeout = -1, this.set = !0;
          let {
            delay: JR
          } = RR.state.facet(CR);
          this.lintTime = Date.now() + JR, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, JR)
        }
        run() {
          clearTimeout(this.timeout);
          let RR = Date.now();
          if (RR < this.lintTime - 10) this.timeout = setTimeout(this.run, this.lintTime - RR);
          else {
            this.set = !1;
            let {
              state: RR
            } = this.view, {
              sources: JR
            } = RR.facet(CR);
            JR.length && function(RR, JR, GR) {
              let yR = [],
                tR = -1;
              for (let uR of RR) uR.then((GR => {
                yR.push(GR), clearTimeout(tR), yR.length == RR.length ? JR(yR) : tR = setTimeout((() => JR(yR)), 200)
              }), GR)
            }(JR.map((RR => Promise.resolve(RR(this.view)))), (JR => {
              this.view.state.doc == RR.doc && this.view.dispatch(function(RR, JR) {
                return {
                  effects: VR(RR, [KR.of(JR)])
                }
              }(this.view.state, JR.reduce(((RR, JR) => RR.concat(JR)))))
            }), (RR => {
              (0, yR.W)(this.view.state, RR)
            }))
          }
        }
        update(RR) {
          let JR = RR.state.facet(CR);
          (RR.docChanged || JR != RR.startState.facet(CR) || JR.needsRefresh && JR.needsRefresh(RR)) && (this.lintTime = Date.now() + JR.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, JR.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const CR = tR.r.define({
      combine: RR => ({
        sources: RR.map((RR => RR.source)).filter((RR => null != RR)),
        ...(0, tR.ab)(RR.map((RR => RR.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: XR,
          tooltipFilter: XR,
          needsRefresh: (RR, JR) => RR ? JR ? GR => RR(GR) || JR(GR) : RR : JR,
          hideOn: (RR, JR) => RR ? JR ? (GR, yR, tR) => RR(GR, yR, tR) || JR(GR, yR, tR) : RR : JR,
          autoPanel: (RR, JR) => RR || JR
        })
      })
    });

    function XR(RR, JR) {
      return RR ? JR ? (GR, yR) => JR(RR(GR, yR), yR) : RR : JR
    }

    function MR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [CR.of({
        source: RR,
        config: JR
      }), AR, HR]
    }

    function BR(RR) {
      let JR = [];
      if (RR) RR: for (let {
          name: GR
        }
        of RR) {
        for (let RR = 0; RR < GR.length; RR++) {
          let yR = GR[RR];
          if (/[a-zA-Z]/.test(yR) && !JR.some((RR => RR.toLowerCase() == yR.toLowerCase()))) {
            JR.push(yR);
            continue RR
          }
        }
        JR.push("")
      }
      return JR
    }

    function lR(RR, JR, GR) {
      var yR;
      let tR = GR ? BR(JR.actions) : [];
      return (0, uR.c)("li", {
        class: "cm-diagnostic cm-diagnostic-" + JR.severity
      }, (0, uR.c)("span", {
        class: "cm-diagnosticText"
      }, JR.renderMessage ? JR.renderMessage(RR) : JR.message), null === (yR = JR.actions) || void 0 === yR ? void 0 : yR.map(((GR, yR) => {
        let ZR = !1,
          qR = yR => {
            if (yR.preventDefault(), ZR) return;
            ZR = !0;
            let tR = iR(RR.state.field(eR).diagnostics, JR);
            tR && GR.apply(RR, tR.from, tR.to)
          },
          {
            name: fR
          } = GR,
          VR = tR[yR] ? fR.indexOf(tR[yR]) : -1,
          KR = VR < 0 ? fR : [fR.slice(0, VR), (0, uR.c)("u", fR.slice(VR, VR + 1)), fR.slice(VR + 1)],
          wR = GR.markClass ? " " + GR.markClass : "";
        return (0, uR.c)("button", {
          type: "button",
          class: "cm-diagnosticAction" + wR,
          onclick: qR,
          onmousedown: qR,
          "aria-label": ` Action: ${fR}${VR<0?"":` (access key "${tR[yR]})"`}.`
        }, KR)
      })), JR.source && (0, uR.c)("div", {
        class: "cm-diagnosticSource"
      }, JR.source))
    }
    class pR extends yR.q {
      constructor(RR) {
        super(), this.sev = RR
      }
      eq(RR) {
        return RR.sev == this.sev
      }
      toDOM() {
        return (0, uR.c)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class gR {
      constructor(RR, JR) {
        this.diagnostic = JR, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = lR(RR, JR, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class bR {
      constructor(RR) {
        this.view = RR, this.items = [];
        this.list = (0, uR.c)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: JR => {
            if (!(JR.ctrlKey || JR.altKey || JR.metaKey)) {
              if (27 == JR.keyCode) UR(this.view), this.view.focus();
              else if (38 == JR.keyCode || 33 == JR.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == JR.keyCode || 34 == JR.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == JR.keyCode) this.moveSelection(0);
              else if (35 == JR.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == JR.keyCode) this.view.focus();
              else {
                if (!(JR.keyCode >= 65 && JR.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: GR
                  } = this.items[this.selectedIndex], yR = BR(GR.actions);
                  for (let tR = 0; tR < yR.length; tR++)
                    if (yR[tR].toUpperCase().charCodeAt(0) == JR.keyCode) {
                      let JR = iR(this.view.state.field(eR).diagnostics, GR);
                      JR && GR.actions[tR].apply(RR, JR.from, JR.to)
                    }
                }
              }
              JR.preventDefault()
            }
          },
          onclick: RR => {
            for (let JR = 0; JR < this.items.length; JR++) this.items[JR].dom.contains(RR.target) && this.moveSelection(JR)
          }
        }), this.dom = (0, uR.c)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, uR.c)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => UR(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let RR = this.view.state.field(eR).selected;
        if (!RR) return -1;
        for (let JR = 0; JR < this.items.length; JR++)
          if (this.items[JR].diagnostic == RR.diagnostic) return JR;
        return -1
      }
      update() {
        let {
          diagnostics: RR,
          selected: JR
        } = this.view.state.field(eR), GR = 0, yR = !1, tR = null, uR = new Set;
        for (RR.between(0, this.view.state.doc.length, ((RR, ZR, qR) => {
            let {
              spec: iR
            } = qR;
            for (let fR of iR.diagnostics) {
              if (uR.has(fR)) continue;
              uR.add(fR);
              let RR, ZR = -1;
              for (let JR = GR; JR < this.items.length; JR++)
                if (this.items[JR].diagnostic == fR) {
                  ZR = JR;
                  break
                } ZR < 0 ? (RR = new gR(this.view, fR), this.items.splice(GR, 0, RR), yR = !0) : (RR = this.items[ZR], ZR > GR && (this.items.splice(GR, ZR - GR), yR = !0)), JR && RR.diagnostic == JR.diagnostic ? RR.dom.hasAttribute("aria-selected") || (RR.dom.setAttribute("aria-selected", "true"), tR = RR) : RR.dom.hasAttribute("aria-selected") && RR.dom.removeAttribute("aria-selected"), GR++
            }
          })); GR < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) yR = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new gR(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), yR = !0), tR ? (this.list.setAttribute("aria-activedescendant", tR.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: tR.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: RR => {
            let {
              sel: JR,
              panel: GR
            } = RR, yR = GR.height / this.list.offsetHeight;
            JR.top < GR.top ? this.list.scrollTop -= (GR.top - JR.top) / yR : JR.bottom > GR.bottom && (this.list.scrollTop += (JR.bottom - GR.bottom) / yR)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), yR && this.sync()
      }
      sync() {
        let RR = this.list.firstChild;

        function JR() {
          let JR = RR;
          RR = JR.nextSibling, JR.remove()
        }
        for (let GR of this.items)
          if (GR.dom.parentNode == this.list) {
            for (; RR != GR.dom;) JR();
            RR = GR.dom.nextSibling
          } else this.list.insertBefore(GR.dom, RR);
        for (; RR;) JR()
      }
      moveSelection(RR) {
        if (this.selectedIndex < 0) return;
        let JR = iR(this.view.state.field(eR).diagnostics, this.items[RR].diagnostic);
        JR && this.view.dispatch({
          selection: {
            anchor: JR.from,
            head: JR.to
          },
          scrollIntoView: !0,
          effects: rR.of(JR)
        })
      }
      static open(RR) {
        return new bR(RR)
      }
    }

    function vR(RR) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(RR)}</svg>')`
    }

    function OR(RR) {
      return vR(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${RR}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const xR = yR.k.baseTheme({
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
        backgroundImage: OR("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: OR("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: OR("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: OR("#66d")
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

    function NR(RR) {
      return "error" == RR ? 4 : "warning" == RR ? 3 : "info" == RR ? 2 : 1
    }

    function DR(RR) {
      let JR = "hint",
        GR = 1;
      for (let yR of RR) {
        let RR = NR(yR.severity);
        RR > GR && (GR = RR, JR = yR.severity)
      }
      return JR
    }
    yR.l;
    const HR = [eR, yR.k.Cy.compute([eR], (RR => {
      let {
        selected: JR,
        panel: GR
      } = RR.field(eR);
      return JR && GR && JR.from != JR.to ? yR.e.set([aR.range(JR.from, JR.to)]) : yR.e.none
    })), (0, yR.N)(LR, {
      hideOn: fR
    }), xR]
  },
  53368: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => sR,
      d: () => nR,
      h: () => hR
    });
    var yR = GR(53321),
      tR = GR(53317),
      uR = GR(53332);
    const ZR = "function" == typeof String.prototype.normalize ? RR => RR.normalize("NFKD") : RR => RR;
    class qR {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : RR.length,
          tR = arguments.length > 4 ? arguments[4] : void 0,
          uR = arguments.length > 5 ? arguments[5] : void 0;
        this.test = uR, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = RR.iterRange(GR, yR), this.bufferStart = GR, this.normalize = tR ? RR => tR(ZR(RR)) : ZR, this.query = this.normalize(JR)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, tR.V)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let RR = this.peek();
          if (RR < 0) return this.done = !0, this;
          let JR = (0, tR.jb)(RR),
            GR = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, tR.Y)(RR);
          let yR = this.normalize(JR);
          if (yR.length)
            for (let tR = 0, uR = GR;; tR++) {
              let RR = yR.charCodeAt(tR),
                ZR = this.match(RR, uR, this.bufferPos + this.bufferStart);
              if (tR == yR.length - 1) {
                if (ZR) return this.value = ZR, this;
                break
              }
              uR == GR && tR < JR.length && JR.charCodeAt(tR) == RR && uR++
            }
        }
      }
      match(RR, JR, GR) {
        let yR = null;
        for (let tR = 0; tR < this.matches.length; tR += 2) {
          let JR = this.matches[tR],
            uR = !1;
          this.query.charCodeAt(JR) == RR && (JR == this.query.length - 1 ? yR = {
            from: this.matches[tR + 1],
            to: GR
          } : (this.matches[tR]++, uR = !0)), uR || (this.matches.splice(tR, 2), tR -= 2)
        }
        return this.query.charCodeAt(0) == RR && (1 == this.query.length ? yR = {
          from: JR,
          to: GR
        } : this.matches.push(1, JR)), yR && this.test && !this.test(yR.from, yR.to, this.buffer, this.bufferStart) && (yR = null), yR
      }
    }
    "undefined" != typeof Symbol && (qR.prototype[Symbol.iterator] = function() {
      return this
    });
    const iR = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      fR = "gm" + (null == /x/.unicode ? "" : "u");
    class VR {
      constructor(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : RR.length;
        if (this.text = RR, this.to = tR, this.curLine = "", this.done = !1, this.value = iR, /\\[sWDnr]|\n|\r|\[\^/.test(JR)) return new rR(RR, JR, GR, yR, tR);
        this.re = new RegExp(JR, fR + ((null === GR || void 0 === GR ? void 0 : GR.ignoreCase) ? "i" : "")), this.test = null === GR || void 0 === GR ? void 0 : GR.test, this.iter = RR.iter();
        let uR = RR.lineAt(yR);
        this.curLineStart = uR.from, this.matchPos = eR(RR, yR), this.getLine(this.curLineStart)
      }
      getLine(RR) {
        this.iter.next(RR), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next())
      }
      nextLine() {
        this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0)
      }
      next() {
        for (let RR = this.matchPos - this.curLineStart;;) {
          this.re.lastIndex = RR;
          let JR = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (JR) {
            let GR = this.curLineStart + JR.index,
              yR = GR + JR[0].length;
            if (this.matchPos = eR(this.text, yR + (GR == yR ? 1 : 0)), GR == this.curLineStart + this.curLine.length && this.nextLine(), (GR < yR || GR > this.value.to) && (!this.test || this.test(GR, yR, JR))) return this.value = {
              from: GR,
              to: yR,
              match: JR
            }, this;
            RR = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), RR = 0
          }
        }
      }
    }
    const KR = new WeakMap;
    class wR {
      constructor(RR, JR) {
        this.from = RR, this.text = JR
      }
      get to() {
        return this.from + this.text.length
      }
      static get(RR, JR, GR) {
        let yR = KR.get(RR);
        if (!yR || yR.from >= GR || yR.to <= JR) {
          let yR = new wR(JR, RR.sliceString(JR, GR));
          return KR.set(RR, yR), yR
        }
        if (yR.from == JR && yR.to == GR) return yR;
        let {
          text: tR,
          from: uR
        } = yR;
        return uR > JR && (tR = RR.sliceString(JR, uR) + tR, uR = JR), yR.to < GR && (tR += RR.sliceString(yR.to, GR)), KR.set(RR, new wR(uR, tR)), new wR(JR, tR.slice(JR - uR, GR - uR))
      }
    }
    class rR {
      constructor(RR, JR, GR, yR, tR) {
        this.text = RR, this.to = tR, this.done = !1, this.value = iR, this.matchPos = eR(RR, yR), this.re = new RegExp(JR, fR + ((null === GR || void 0 === GR ? void 0 : GR.ignoreCase) ? "i" : "")), this.test = null === GR || void 0 === GR ? void 0 : GR.test, this.flat = wR.get(RR, yR, this.chunkEnd(yR + 5e3))
      }
      chunkEnd(RR) {
        return RR >= this.to ? this.to : this.text.lineAt(RR).to
      }
      next() {
        for (;;) {
          let RR = this.re.lastIndex = this.matchPos - this.flat.from,
            JR = this.re.exec(this.flat.text);
          if (JR && !JR[0] && JR.index == RR && (this.re.lastIndex = RR + 1, JR = this.re.exec(this.flat.text)), JR) {
            let RR = this.flat.from + JR.index,
              GR = RR + JR[0].length;
            if ((this.flat.to >= this.to || JR.index + JR[0].length <= this.flat.text.length - 10) && (!this.test || this.test(RR, GR, JR))) return this.value = {
              from: RR,
              to: GR,
              match: JR
            }, this.matchPos = eR(this.text, GR + (RR == GR ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = wR.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function eR(RR, JR) {
      if (JR >= RR.length) return JR;
      let GR, yR = RR.lineAt(JR);
      for (; JR < yR.to && (GR = yR.text.charCodeAt(JR - yR.from)) >= 56320 && GR < 57344;) JR++;
      return JR
    }
    "undefined" != typeof Symbol && (VR.prototype[Symbol.iterator] = rR.prototype[Symbol.iterator] = function() {
      return this
    });
    const aR = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      LR = tR.r.define({
        combine: RR => (0, tR.ab)(RR, aR, {
          highlightWordAroundCursor: (RR, JR) => RR || JR,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function nR(RR) {
      let JR = [XR, CR];
      return RR && JR.push(LR.of(RR)), JR
    }
    const UR = yR.e.mark({
        class: "cm-selectionMatch"
      }),
      WR = yR.e.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function AR(RR, JR, GR, yR) {
      return (0 == GR || RR(JR.sliceDoc(GR - 1, GR)) != tR.i.Word) && (yR == JR.doc.length || RR(JR.sliceDoc(yR, yR + 1)) != tR.i.Word)
    }
    const CR = yR.o.fromClass(class {
        constructor(RR) {
          this.Cy = this.getDeco(RR)
        }
        update(RR) {
          (RR.selectionSet || RR.docChanged || RR.viewportChanged) && (this.Cy = this.getDeco(RR.view))
        }
        getDeco(RR) {
          let JR = RR.state.facet(LR),
            {
              state: GR
            } = RR,
            uR = GR.selection;
          if (uR.WL.length > 1) return yR.e.none;
          let ZR, iR = uR.main,
            fR = null;
          if (iR.empty) {
            if (!JR.highlightWordAroundCursor) return yR.e.none;
            let RR = GR.wordAt(iR.head);
            if (!RR) return yR.e.none;
            fR = GR.charCategorizer(iR.head), ZR = GR.sliceDoc(RR.from, RR.to)
          } else {
            let RR = iR.to - iR.from;
            if (RR < JR.minSelectionLength || RR > 200) return yR.e.none;
            if (JR.wholeWords) {
              if (ZR = GR.sliceDoc(iR.from, iR.to), fR = GR.charCategorizer(iR.head), !AR(fR, GR, iR.from, iR.to) || ! function(RR, JR, GR, yR) {
                  return RR(JR.sliceDoc(GR, GR + 1)) == tR.i.Word && RR(JR.sliceDoc(yR - 1, yR)) == tR.i.Word
                }(fR, GR, iR.from, iR.to)) return yR.e.none
            } else if (ZR = GR.sliceDoc(iR.from, iR.to), !ZR) return yR.e.none
          }
          let VR = [];
          for (let tR of RR.GJR) {
            let RR = new qR(GR.doc, ZR, tR.from, tR.to);
            for (; !RR.next().done;) {
              let {
                from: tR,
                to: uR
              } = RR.value;
              if ((!fR || AR(fR, GR, tR, uR)) && (iR.empty && tR <= iR.from && uR >= iR.to ? VR.push(WR.range(tR, uR)) : (tR >= iR.to || uR <= iR.from) && VR.push(UR.range(tR, uR)), VR.length > JR.maxMatches)) return yR.e.none
            }
          }
          return yR.e.set(VR)
        }
      }, {
        Cy: RR => RR.Cy
      }),
      XR = yR.k.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const MR = tR.r.define({
      combine: RR => (0, tR.ab)(RR, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: RR => new RJ(RR),
        scrollToMatch: RR => yR.k.scrollIntoView(RR)
      })
    });
    class BR {
      constructor(RR) {
        this.search = RR.search, this.caseSensitive = !!RR.caseSensitive, this.literal = !!RR.literal, this.regexp = !!RR.regexp, this.replace = RR.replace || "", this.valid = !!this.search && (!this.regexp || function(RR) {
          try {
            return new RegExp(RR, fR), !0
          } catch (JR) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!RR.wholeWord, this.test = RR.test
      }
      unquote(RR) {
        return this.literal ? RR : RR.replace(/\\([nrt\\])/g, ((RR, JR) => "n" == JR ? "\n" : "r" == JR ? "\r" : "t" == JR ? "\t" : "\\"))
      }
      eq(RR) {
        return this.search == RR.search && this.replace == RR.replace && this.caseSensitive == RR.caseSensitive && this.regexp == RR.regexp && this.wholeWord == RR.wholeWord && this.test == RR.test
      }
      create() {
        return this.regexp ? new xR(this) : new gR(this)
      }
      getCursor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GR = arguments.length > 2 ? arguments[2] : void 0,
          yR = RR.doc ? RR : tR.o.create({
            doc: RR
          });
        return null == GR && (GR = yR.doc.length), this.regexp ? bR(this, yR, JR, GR) : pR(this, yR, JR, GR)
      }
    }
    class lR {
      constructor(RR) {
        this.spec = RR
      }
    }

    function pR(RR, JR, GR, yR) {
      let uR;
      var ZR, iR;
      return RR.wholeWord && (ZR = JR.doc, iR = JR.charCategorizer(JR.selection.main.head), uR = (RR, JR, GR, yR) => ((yR > RR || yR + GR.length < JR) && (yR = Math.max(0, RR - 2), GR = ZR.sliceString(yR, Math.min(ZR.length, JR + 2))), (iR(vR(GR, RR - yR)) != tR.i.Word || iR(OR(GR, RR - yR)) != tR.i.Word) && (iR(OR(GR, JR - yR)) != tR.i.Word || iR(vR(GR, JR - yR)) != tR.i.Word))), RR.test && (uR = function(RR, JR, GR) {
        return (yR, tR, uR, ZR) => {
          if (GR && !GR(yR, tR, uR, ZR)) return !1;
          let qR = yR >= ZR && tR <= ZR + uR.length ? uR.slice(yR - ZR, tR - ZR) : JR.doc.sliceString(yR, tR);
          return RR(qR, JR, yR, tR)
        }
      }(RR.test, JR, uR)), new qR(JR.doc, RR.unquoted, GR, yR, RR.caseSensitive ? void 0 : RR => RR.toLowerCase(), uR)
    }
    class gR extends lR {
      constructor(RR) {
        super(RR)
      }
      nextMatch(RR, JR, GR) {
        let yR = pR(this.spec, RR, GR, RR.doc.length).nextOverlapping();
        if (yR.done) {
          let GR = Math.min(RR.doc.length, JR + this.spec.unquoted.length);
          yR = pR(this.spec, RR, 0, GR).nextOverlapping()
        }
        return yR.done || yR.value.from == JR && yR.value.to == GR ? null : yR.value
      }
      prevMatchInRange(RR, JR, GR) {
        for (let yR = GR;;) {
          let GR = Math.max(JR, yR - 1e4 - this.spec.unquoted.length),
            tR = pR(this.spec, RR, GR, yR),
            uR = null;
          for (; !tR.nextOverlapping().done;) uR = tR.value;
          if (uR) return uR;
          if (GR == JR) return null;
          yR -= 1e4
        }
      }
      prevMatch(RR, JR, GR) {
        let yR = this.prevMatchInRange(RR, 0, JR);
        return yR || (yR = this.prevMatchInRange(RR, Math.max(0, GR - this.spec.unquoted.length), RR.doc.length)), !yR || yR.from == JR && yR.to == GR ? null : yR
      }
      getReplacement(RR) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(RR, JR) {
        let GR = pR(this.spec, RR, 0, RR.doc.length),
          yR = [];
        for (; !GR.next().done;) {
          if (yR.length >= JR) return null;
          yR.push(GR.value)
        }
        return yR
      }
      highlight(RR, JR, GR, yR) {
        let tR = pR(this.spec, RR, Math.max(0, JR - this.spec.unquoted.length), Math.min(GR + this.spec.unquoted.length, RR.doc.length));
        for (; !tR.next().done;) yR(tR.value.from, tR.value.to)
      }
    }

    function bR(RR, JR, GR, yR) {
      let uR;
      var ZR;
      return RR.wholeWord && (ZR = JR.charCategorizer(JR.selection.main.head), uR = (RR, JR, GR) => !GR[0].length || (ZR(vR(GR.input, GR.index)) != tR.i.Word || ZR(OR(GR.input, GR.index)) != tR.i.Word) && (ZR(OR(GR.input, GR.index + GR[0].length)) != tR.i.Word || ZR(vR(GR.input, GR.index + GR[0].length)) != tR.i.Word)), RR.test && (uR = function(RR, JR, GR) {
        return (yR, tR, uR) => (!GR || GR(yR, tR, uR)) && RR(uR[0], JR, yR, tR)
      }(RR.test, JR, uR)), new VR(JR.doc, RR.search, {
        ignoreCase: !RR.caseSensitive,
        test: uR
      }, GR, yR)
    }

    function vR(RR, JR) {
      return RR.slice((0, tR.eb)(RR, JR, !1), JR)
    }

    function OR(RR, JR) {
      return RR.slice(JR, (0, tR.eb)(RR, JR))
    }
    class xR extends lR {
      nextMatch(RR, JR, GR) {
        let yR = bR(this.spec, RR, GR, RR.doc.length).next();
        return yR.done && (yR = bR(this.spec, RR, 0, JR).next()), yR.done ? null : yR.value
      }
      prevMatchInRange(RR, JR, GR) {
        for (let yR = 1;; yR++) {
          let tR = Math.max(JR, GR - 1e4 * yR),
            uR = bR(this.spec, RR, tR, GR),
            ZR = null;
          for (; !uR.next().done;) ZR = uR.value;
          if (ZR && (tR == JR || ZR.from > tR + 10)) return ZR;
          if (tR == JR) return null
        }
      }
      prevMatch(RR, JR, GR) {
        return this.prevMatchInRange(RR, 0, JR) || this.prevMatchInRange(RR, GR, RR.doc.length)
      }
      getReplacement(RR) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((JR, GR) => {
          if ("&" == GR) return RR.match[0];
          if ("$" == GR) return "$";
          for (let yR = GR.length; yR > 0; yR--) {
            let JR = +GR.slice(0, yR);
            if (JR > 0 && JR < RR.match.length) return RR.match[JR] + GR.slice(yR)
          }
          return JR
        }))
      }
      matchAll(RR, JR) {
        let GR = bR(this.spec, RR, 0, RR.doc.length),
          yR = [];
        for (; !GR.next().done;) {
          if (yR.length >= JR) return null;
          yR.push(GR.value)
        }
        return yR
      }
      highlight(RR, JR, GR, yR) {
        let tR = bR(this.spec, RR, Math.max(0, JR - 250), Math.min(GR + 250, RR.doc.length));
        for (; !tR.next().done;) yR(tR.value.from, tR.value.to)
      }
    }
    const NR = tR.K.define(),
      DR = tR.K.define(),
      HR = tR.L.define({
        create: RR => new oR(kR(RR).create(), null),
        update(RR, JR) {
          for (let GR of JR.effects) GR.is(NR) ? RR = new oR(GR.value.create(), RR.panel) : GR.is(DR) && (RR = new oR(RR.query, GR.value ? YR : null));
          return RR
        },
        provide: RR => yR.hb.from(RR, (RR => RR.panel))
      });
    class oR {
      constructor(RR, JR) {
        this.query = RR, this.panel = JR
      }
    }
    const cR = yR.e.mark({
        class: "cm-searchMatch"
      }),
      PR = yR.e.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      IR = yR.o.fromClass(class {
        constructor(RR) {
          this.view = RR, this.Cy = this.highlight(RR.state.field(HR))
        }
        update(RR) {
          let JR = RR.state.field(HR);
          (JR != RR.startState.field(HR) || RR.docChanged || RR.selectionSet || RR.viewportChanged) && (this.Cy = this.highlight(JR))
        }
        highlight(RR) {
          let {
            query: JR,
            panel: GR
          } = RR;
          if (!GR || !JR.spec.valid) return yR.e.none;
          let {
            view: uR
          } = this, ZR = new tR.C;
          for (let yR = 0, tR = uR.GJR, qR = tR.length; yR < qR; yR++) {
            let {
              from: RR,
              to: GR
            } = tR[yR];
            for (; yR < qR - 1 && GR > tR[yR + 1].from - 500;) GR = tR[++yR].to;
            JR.highlight(uR.state, RR, GR, ((RR, JR) => {
              let GR = uR.state.selection.WL.some((GR => GR.from == RR && GR.to == JR));
              ZR.add(RR, JR, GR ? PR : cR)
            }))
          }
          return ZR.finish()
        }
      }, {
        Cy: RR => RR.Cy
      });

    function mR(RR) {
      return JR => {
        let GR = JR.state.field(HR, !1);
        return GR && GR.query.spec.valid ? RR(JR, GR) : TR(JR)
      }
    }
    const zR = mR(((RR, JR) => {
        let {
          query: GR
        } = JR, {
          to: yR
        } = RR.state.selection.main, uR = GR.nextMatch(RR.state, yR, yR);
        if (!uR) return !1;
        let ZR = tR.k.single(uR.from, uR.to),
          qR = RR.state.facet(MR);
        return RR.dispatch({
          selection: ZR,
          effects: [tJ(RR, uR), qR.scrollToMatch(ZR.main, RR)],
          userEvent: "select.search"
        }), FR(RR), !0
      })),
      SR = mR(((RR, JR) => {
        let {
          query: GR
        } = JR, {
          state: yR
        } = RR, {
          from: uR
        } = yR.selection.main, ZR = GR.prevMatch(yR, uR, uR);
        if (!ZR) return !1;
        let qR = tR.k.single(ZR.from, ZR.to),
          iR = RR.state.facet(MR);
        return RR.dispatch({
          selection: qR,
          effects: [tJ(RR, ZR), iR.scrollToMatch(qR.main, RR)],
          userEvent: "select.search"
        }), FR(RR), !0
      })),
      jR = mR(((RR, JR) => {
        let {
          query: GR
        } = JR, yR = GR.matchAll(RR.state, 1e3);
        return !(!yR || !yR.length) && (RR.dispatch({
          selection: tR.k.create(yR.map((RR => tR.k.range(RR.from, RR.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      dR = mR(((RR, JR) => {
        let {
          query: GR
        } = JR, {
          state: uR
        } = RR, {
          from: ZR,
          to: qR
        } = uR.selection.main;
        if (uR.readOnly) return !1;
        let iR = GR.nextMatch(uR, ZR, ZR);
        if (!iR) return !1;
        let fR, VR, KR = iR,
          wR = [],
          rR = [];
        KR.from == ZR && KR.to == qR && (VR = uR.toText(GR.getReplacement(KR)), wR.push({
          from: KR.from,
          to: KR.to,
          insert: VR
        }), KR = GR.nextMatch(uR, KR.from, KR.to), rR.push(yR.k.announce.of(uR.phrase("replaced match on line $", uR.doc.lineAt(ZR).number) + ".")));
        let eR = RR.state.changes(wR);
        return KR && (fR = tR.k.single(KR.from, KR.to).map(eR), rR.push(tJ(RR, KR)), rR.push(uR.facet(MR).scrollToMatch(fR.main, RR))), RR.dispatch({
          changes: eR,
          selection: fR,
          effects: rR,
          userEvent: "input.replace"
        }), !0
      })),
      ER = mR(((RR, JR) => {
        let {
          query: GR
        } = JR;
        if (RR.state.readOnly) return !1;
        let tR = GR.matchAll(RR.state, 1e9).map((RR => {
          let {
            from: JR,
            to: yR
          } = RR;
          return {
            from: JR,
            to: yR,
            insert: GR.getReplacement(RR)
          }
        }));
        if (!tR.length) return !1;
        let uR = RR.state.phrase("replaced $ matches", tR.length) + ".";
        return RR.dispatch({
          changes: tR,
          effects: yR.k.announce.of(uR),
          userEvent: "input.replace.all"
        }), !0
      }));

    function YR(RR) {
      return RR.state.facet(MR).createPanel(RR)
    }

    function kR(RR, JR) {
      var GR, yR, tR, uR, ZR;
      let qR = RR.selection.main,
        iR = qR.empty || qR.to > qR.from + 100 ? "" : RR.sliceDoc(qR.from, qR.to);
      if (JR && !iR) return JR;
      let fR = RR.facet(MR);
      return new BR({
        search: (null !== (GR = null === JR || void 0 === JR ? void 0 : JR.literal) && void 0 !== GR ? GR : fR.literal) ? iR : iR.replace(/\n/g, "\\n"),
        caseSensitive: null !== (yR = null === JR || void 0 === JR ? void 0 : JR.caseSensitive) && void 0 !== yR ? yR : fR.caseSensitive,
        literal: null !== (tR = null === JR || void 0 === JR ? void 0 : JR.literal) && void 0 !== tR ? tR : fR.literal,
        regexp: null !== (uR = null === JR || void 0 === JR ? void 0 : JR.regexp) && void 0 !== uR ? uR : fR.regexp,
        wholeWord: null !== (ZR = null === JR || void 0 === JR ? void 0 : JR.wholeWord) && void 0 !== ZR ? ZR : fR.wholeWord
      })
    }

    function QR(RR) {
      let JR = (0, yR.w)(RR, YR);
      return JR && JR.dom.querySelector("[main-field]")
    }

    function FR(RR) {
      let JR = QR(RR);
      JR && JR == RR.root.activeElement && JR.select()
    }
    const TR = RR => {
        let JR = RR.state.field(HR, !1);
        if (JR && JR.panel) {
          let GR = QR(RR);
          if (GR && GR != RR.root.activeElement) {
            let yR = kR(RR.state, JR.query.spec);
            yR.valid && RR.dispatch({
              effects: NR.of(yR)
            }), GR.focus(), GR.select()
          }
        } else RR.dispatch({
          effects: [DR.of(!0), JR ? NR.of(kR(RR.state, JR.query.spec)) : tR.K.appendConfig.of(ZJ)]
        });
        return !0
      },
      sR = RR => {
        let JR = RR.state.field(HR, !1);
        if (!JR || !JR.panel) return !1;
        let GR = (0, yR.w)(RR, YR);
        return GR && GR.dom.contains(RR.root.activeElement) && RR.focus(), RR.dispatch({
          effects: DR.of(!1)
        }), !0
      },
      hR = [{
        key: "Mod-f",
        run: TR,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: zR,
        shift: SR,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: zR,
        shift: SR,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: sR,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: RR => {
          let {
            state: JR,
            dispatch: GR
          } = RR, yR = JR.selection;
          if (yR.WL.length > 1 || yR.main.empty) return !1;
          let {
            from: uR,
            to: ZR
          } = yR.main, iR = [], fR = 0;
          for (let VR = new qR(JR.doc, JR.sliceDoc(uR, ZR)); !VR.next().done;) {
            if (iR.length > 1e3) return !1;
            VR.value.from == uR && (fR = iR.length), iR.push(tR.k.range(VR.value.from, VR.value.to))
          }
          return GR(JR.update({
            selection: tR.k.create(iR, fR),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: RR => {
          let {
            state: JR
          } = RR, GR = String(JR.doc.lineAt(RR.state.selection.main.head).number), {
            close: uR,
            result: ZR
          } = (0, yR.gb)(RR, {
            label: JR.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: GR
            },
            focus: !0,
            submitLabel: JR.phrase("go")
          });
          return ZR.then((GR => {
            let ZR = GR && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(GR.elements.line.value);
            if (!ZR) return void RR.dispatch({
              effects: uR
            });
            let qR = JR.doc.lineAt(JR.selection.main.head),
              [, iR, fR, VR, KR] = ZR,
              wR = VR ? +VR.slice(1) : 0,
              rR = fR ? +fR : qR.number;
            if (fR && KR) {
              let RR = rR / 100;
              iR && (RR = RR * ("-" == iR ? -1 : 1) + qR.number / JR.doc.lines), rR = Math.round(JR.doc.lines * RR)
            } else fR && iR && (rR = rR * ("-" == iR ? -1 : 1) + qR.number);
            let eR = JR.doc.line(Math.max(1, Math.min(JR.doc.lines, rR))),
              aR = tR.k.cursor(eR.from + Math.max(0, Math.min(wR, eR.length)));
            RR.dispatch({
              effects: [uR, yR.k.scrollIntoView(aR.from, {
                y: "center"
              })],
              selection: aR
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: RR => {
          let {
            state: JR,
            dispatch: GR
          } = RR, {
            WL: uR
          } = JR.selection;
          if (uR.some((RR => RR.from === RR.to))) return (RR => {
            let {
              state: JR,
              dispatch: GR
            } = RR, {
              selection: yR
            } = JR, uR = tR.k.create(yR.WL.map((RR => JR.wordAt(RR.head) || tR.k.cursor(RR.head))), yR.mainIndex);
            return !uR.eq(yR) && (GR(JR.update({
              selection: uR
            })), !0)
          })({
            state: JR,
            dispatch: GR
          });
          let ZR = JR.sliceDoc(uR[0].from, uR[0].to);
          if (JR.selection.WL.some((RR => JR.sliceDoc(RR.from, RR.to) != ZR))) return !1;
          let iR = function(RR, JR) {
            let {
              main: GR,
              WL: yR
            } = RR.selection, tR = RR.wordAt(GR.head), uR = tR && tR.from == GR.from && tR.to == GR.to;
            for (let ZR = !1, iR = new qR(RR.doc, JR, yR[yR.length - 1].to);;) {
              if (iR.next(), !iR.done) {
                if (ZR && yR.some((RR => RR.from == iR.value.from))) continue;
                if (uR) {
                  let JR = RR.wordAt(iR.value.from);
                  if (!JR || JR.from != iR.value.from || JR.to != iR.value.to) continue
                }
                return iR.value
              }
              if (ZR) return null;
              iR = new qR(RR.doc, JR, 0, Math.max(0, yR[yR.length - 1].from - 1)), ZR = !0
            }
          }(JR, ZR);
          return !!iR && (GR(JR.update({
            selection: JR.selection.addRange(tR.k.range(iR.from, iR.to), !1),
            effects: yR.k.scrollIntoView(iR.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class RJ {
      constructor(RR) {
        this.view = RR;
        let JR = this.query = RR.state.field(HR).query.spec;

        function GR(RR, JR, GR) {
          return (0, uR.c)("button", {
            class: "cm-button",
            name: RR,
            onclick: JR,
            type: "button"
          }, GR)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, uR.c)("input", {
          value: JR.search,
          placeholder: JJ(RR, "Find"),
          "aria-label": JJ(RR, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, uR.c)("input", {
          value: JR.replace,
          placeholder: JJ(RR, "Replace"),
          "aria-label": JJ(RR, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, uR.c)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: JR.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, uR.c)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: JR.regexp,
          onchange: this.commit
        }), this.wordField = (0, uR.c)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: JR.wholeWord,
          onchange: this.commit
        }), this.dom = (0, uR.c)("div", {
          onkeydown: RR => this.keydown(RR),
          class: "cm-search"
        }, [this.searchField, GR("next", (() => zR(RR)), [JJ(RR, "next")]), GR("prev", (() => SR(RR)), [JJ(RR, "previous")]), GR("select", (() => jR(RR)), [JJ(RR, "all")]), (0, uR.c)("label", null, [this.caseField, JJ(RR, "match case")]), (0, uR.c)("label", null, [this.reField, JJ(RR, "regexp")]), (0, uR.c)("label", null, [this.wordField, JJ(RR, "by word")]), ...RR.state.readOnly ? [] : [(0, uR.c)("br"), this.replaceField, GR("replace", (() => dR(RR)), [JJ(RR, "replace")]), GR("replaceAll", (() => ER(RR)), [JJ(RR, "replace all")])], (0, uR.c)("button", {
          name: "close",
          onclick: () => sR(RR),
          "aria-label": JJ(RR, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let RR = new BR({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        RR.eq(this.query) || (this.query = RR, this.view.dispatch({
          effects: NR.of(RR)
        }))
      }
      keydown(RR) {
        (0, yR.cb)(this.view, RR, "search-panel") ? RR.preventDefault(): 13 == RR.keyCode && RR.target == this.searchField ? (RR.preventDefault(), (RR.shiftKey ? SR : zR)(this.view)) : 13 == RR.keyCode && RR.target == this.replaceField && (RR.preventDefault(), dR(this.view))
      }
      update(RR) {
        for (let JR of RR.transactions)
          for (let RR of JR.effects) RR.is(NR) && !RR.value.eq(this.query) && this.setQuery(RR.value)
      }
      setQuery(RR) {
        this.query = RR, this.searchField.value = RR.search, this.replaceField.value = RR.replace, this.caseField.checked = RR.caseSensitive, this.reField.checked = RR.regexp, this.wordField.checked = RR.wholeWord
      }
      mount() {
        this.searchField.select()
      }
      get pos() {
        return 80
      }
      get top() {
        return this.view.state.facet(MR).top
      }
    }

    function JJ(RR, JR) {
      return RR.state.phrase(JR)
    }
    const GJ = 30,
      yJ = /[\s\.,:;?!]/;

    function tJ(RR, JR) {
      let {
        from: GR,
        to: tR
      } = JR, uR = RR.state.doc.lineAt(GR), ZR = RR.state.doc.lineAt(tR).to, qR = Math.max(uR.from, GR - GJ), iR = Math.min(ZR, tR + GJ), fR = RR.state.sliceDoc(qR, iR);
      if (qR != uR.from)
        for (let yR = 0; yR < GJ; yR++)
          if (!yJ.test(fR[yR + 1]) && yJ.test(fR[yR])) {
            fR = fR.slice(yR);
            break
          } if (iR != ZR)
        for (let yR = fR.length - 1; yR > fR.length - GJ; yR--)
          if (!yJ.test(fR[yR - 1]) && yJ.test(fR[yR])) {
            fR = fR.slice(0, yR);
            break
          } return yR.k.announce.of(`${RR.state.phrase("current match")}. ${fR} ${RR.state.phrase("on line")} ${uR.number}.`)
    }
    const uJ = yR.k.baseTheme({
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
      ZJ = [HR, tR.y.low(IR), uJ]
  },
  53321: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => xR,
      i: () => fJ,
      k: () => pt,
      l: () => ZZ,
      o: () => FJ,
      q: () => vR,
      s: () => vu,
      t: () => Tt,
      v: () => Zu,
      w: () => Tu,
      y: () => ku,
      B: () => KZ,
      H: () => Uu,
      D: () => OZ,
      L: () => eu,
      N: () => Yu,
      Q: () => Ht,
      S: () => pZ,
      W: () => EJ,
      Y: () => Xu,
      _: () => pu,
      cb: () => Pt,
      gb: () => GZ,
      hb: () => JZ,
      ib: () => mu
    });
    for (var yR = GR(53317), tR = GR(53326), uR = {
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
      }, ZR = {
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
      }, qR = "undefined" != typeof navigator && /Mac/.test(navigator.platform), iR = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), fR = 0; fR < 10; fR++) uR[48 + fR] = uR[96 + fR] = String(fR);
    for (fR = 1; fR <= 24; fR++) uR[fR + 111] = "F" + fR;
    for (fR = 65; fR <= 90; fR++) uR[fR] = String.fromCharCode(fR + 32), ZR[fR] = String.fromCharCode(fR);
    for (var VR in uR) ZR.hasOwnProperty(VR) || (ZR[VR] = uR[VR]);
    var KR = GR(53332);
    let wR = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      rR = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const eR = /Edge\/(\d+)/.exec(wR.userAgent),
      aR = /MSIE \d/.test(wR.userAgent),
      LR = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(wR.userAgent),
      nR = !!(aR || LR || eR),
      UR = !nR && /gecko\/(\d+)/i.test(wR.userAgent),
      WR = !nR && /Chrome\/(\d+)/.exec(wR.userAgent),
      AR = "webkitFontSmoothing" in rR.documentElement.style,
      CR = !nR && /Apple Computer/.test(wR.vendor),
      XR = CR && (/Mobile\/\w+/.test(wR.userAgent) || wR.maxTouchPoints > 2);
    var MR = {
      mac: XR || /Mac/.test(wR.platform),
      windows: /Win/.test(wR.platform),
      linux: /Linux|X11/.test(wR.platform),
      ie: nR,
      ie_version: aR ? rR.documentMode || 6 : LR ? +LR[1] : eR ? +eR[1] : 0,
      gecko: UR,
      gecko_version: UR ? +(/Firefox\/(\d+)/.exec(wR.userAgent) || [0, 0])[1] : 0,
      chrome: !!WR,
      chrome_version: WR ? +WR[1] : 0,
      ios: XR,
      android: /Android\b/.test(wR.userAgent),
      webkit: AR,
      webkit_version: AR ? +(/\bAppleWebKit\/(\d+)/.exec(wR.userAgent) || [0, 0])[1] : 0,
      safari: CR,
      safari_version: CR ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(wR.userAgent) || [0, 0])[1] : 0,
      tabSize: null != rR.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function BR(RR, JR) {
      for (let GR in RR) "class" == GR && JR.class ? JR.class += " " + RR.class : "style" == GR && JR.style ? JR.style += ";" + RR.style : JR[GR] = RR[GR];
      return JR
    }
    const lR = Object.create(null);

    function pR(RR, JR, GR) {
      if (RR == JR) return !0;
      RR || (RR = lR), JR || (JR = lR);
      let yR = Object.keys(RR),
        tR = Object.keys(JR);
      if (yR.length - (GR && yR.indexOf(GR) > -1 ? 1 : 0) != tR.length - (GR && tR.indexOf(GR) > -1 ? 1 : 0)) return !1;
      for (let uR of yR)
        if (uR != GR && (-1 == tR.indexOf(uR) || RR[uR] !== JR[uR])) return !1;
      return !0
    }

    function gR(RR, JR, GR) {
      let yR = !1;
      if (JR)
        for (let tR in JR) GR && tR in GR || (yR = !0, "style" == tR ? RR.style.cssText = "" : RR.removeAttribute(tR));
      if (GR)
        for (let tR in GR) JR && JR[tR] == GR[tR] || (yR = !0, "style" == tR ? RR.style.cssText = GR[tR] : RR.setAttribute(tR, GR[tR]));
      return yR
    }

    function bR(RR) {
      let JR = Object.create(null);
      for (let GR = 0; GR < RR.attributes.length; GR++) {
        let yR = RR.attributes[GR];
        JR[yR.name] = yR.value
      }
      return JR
    }
    class vR {
      eq(RR) {
        return !1
      }
      updateDOM(RR, JR, GR) {
        return !1
      }
      compare(RR) {
        return this == RR || this.constructor == RR.constructor && this.eq(RR)
      }
      get estimatedHeight() {
        return -1
      }
      get lineBreaks() {
        return 0
      }
      ignoreEvent(RR) {
        return !0
      }
      coordsAt(RR, JR, GR) {
        return null
      }
      get isHidden() {
        return !1
      }
      get editable() {
        return !1
      }
      destroy(RR) {}
    }
    var OR = function(RR) {
      return RR[RR.Text = 0] = "Text", RR[RR.WidgetBefore = 1] = "WidgetBefore", RR[RR.WidgetAfter = 2] = "WidgetAfter", RR[RR.WidgetRange = 3] = "WidgetRange", RR
    }(OR || (OR = {}));
    class xR extends yR.I {
      constructor(RR, JR, GR, yR) {
        super(), this.startSide = RR, this.endSide = JR, this.widget = GR, this.spec = yR
      }
      get heightRelevant() {
        return !1
      }
      static mark(RR) {
        return new NR(RR)
      }
      static widget(RR) {
        let JR = Math.max(-1e4, Math.min(1e4, RR.side || 0)),
          GR = !!RR.block;
        return JR += GR && !RR.inlineOrder ? JR > 0 ? 3e8 : -4e8 : JR > 0 ? 1e8 : -1e8, new HR(RR, JR, JR, GR, RR.widget || null, !1)
      }
      static replace(RR) {
        let JR, GR, yR = !!RR.block;
        if (RR.isBlockGap) JR = -5e8, GR = 4e8;
        else {
          let {
            start: tR,
            end: uR
          } = oR(RR, yR);
          JR = (tR ? yR ? -3e8 : -1 : 5e8) - 1, GR = 1 + (uR ? yR ? 2e8 : 1 : -6e8)
        }
        return new HR(RR, JR, GR, yR, RR.widget || null, !0)
      }
      static line(RR) {
        return new DR(RR)
      }
      static set(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return yR.E.of(RR, JR)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    xR.none = yR.E.empty;
    class NR extends xR {
      constructor(RR) {
        let {
          start: JR,
          end: GR
        } = oR(RR);
        super(JR ? -1 : 5e8, GR ? 1 : -6e8, null, RR), this.tagName = RR.tagName || "span", this.attrs = RR.class && RR.attributes ? BR(RR.attributes, {
          class: RR.class
        }) : RR.class ? {
          class: RR.class
        } : RR.attributes || lR
      }
      eq(RR) {
        return this == RR || RR instanceof NR && this.tagName == RR.tagName && pR(this.attrs, RR.attrs)
      }
      range(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RR;
        if (RR >= JR) throw new RangeError("Mark decorations may not be empty");
        return super.range(RR, JR)
      }
    }
    NR.prototype.point = !1;
    class DR extends xR {
      constructor(RR) {
        super(-2e8, -2e8, null, RR)
      }
      eq(RR) {
        return RR instanceof DR && this.spec.class == RR.spec.class && pR(this.spec.attributes, RR.spec.attributes)
      }
      range(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RR;
        if (JR != RR) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(RR, JR)
      }
    }
    DR.prototype.mapMode = yR.u.TrackBefore, DR.prototype.point = !0;
    class HR extends xR {
      constructor(RR, JR, GR, tR, uR, ZR) {
        super(JR, GR, uR, RR), this.block = tR, this.isReplace = ZR, this.mapMode = tR ? JR <= 0 ? yR.u.TrackBefore : yR.u.TrackAfter : yR.u.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? OR.WidgetRange : this.startSide <= 0 ? OR.WidgetBefore : OR.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(RR) {
        return RR instanceof HR && (JR = this.widget, GR = RR.widget, JR == GR || !!(JR && GR && JR.compare(GR))) && this.block == RR.block && this.startSide == RR.startSide && this.endSide == RR.endSide;
        var JR, GR
      }
      range(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RR;
        if (this.isReplace && (RR > JR || RR == JR && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && JR != RR) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(RR, JR)
      }
    }

    function oR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: GR,
          inclusiveEnd: yR
        } = RR;
      return null == GR && (GR = RR.inclusive), null == yR && (yR = RR.inclusive), {
        start: null !== GR && void 0 !== GR ? GR : JR,
        end: null !== yR && void 0 !== yR ? yR : JR
      }
    }

    function cR(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        tR = GR.length - 1;
      tR >= 0 && GR[tR] + yR >= RR ? GR[tR] = Math.max(GR[tR], JR) : GR.push(RR, JR)
    }
    HR.prototype.point = !0;
    class PR extends yR.I {
      constructor(RR, JR) {
        super(), this.tagName = RR, this.attributes = JR
      }
      eq(RR) {
        return RR == this || RR instanceof PR && this.tagName == RR.tagName && pR(this.attributes, RR.attributes)
      }
      static create(RR) {
        return new PR(RR.tagName, RR.attributes || lR)
      }
      static set(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return yR.E.of(RR, JR)
      }
    }

    function IR(RR) {
      let JR;
      return JR = 11 == RR.nodeType ? RR.getSelection ? RR : RR.ownerDocument : RR, JR.getSelection()
    }

    function mR(RR, JR) {
      return !!JR && (RR == JR || RR.contains(1 != JR.nodeType ? JR.parentNode : JR))
    }

    function zR(RR, JR) {
      if (!JR.anchorNode) return !1;
      try {
        return mR(RR, JR.anchorNode)
      } catch (GR) {
        return !1
      }
    }

    function SR(RR) {
      return 3 == RR.nodeType ? yJ(RR, 0, RR.nodeValue.length).getClientRects() : 1 == RR.nodeType ? RR.getClientRects() : []
    }

    function jR(RR, JR, GR, yR) {
      return !!GR && (YR(RR, JR, GR, yR, -1) || YR(RR, JR, GR, yR, 1))
    }

    function dR(RR) {
      for (var JR = 0;; JR++)
        if (!(RR = RR.previousSibling)) return JR
    }

    function ER(RR) {
      return 1 == RR.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(RR.nodeName)
    }

    function YR(RR, JR, GR, yR, tR) {
      for (;;) {
        if (RR == GR && JR == yR) return !0;
        if (JR == (tR < 0 ? 0 : kR(RR))) {
          if ("DIV" == RR.nodeName) return !1;
          let GR = RR.parentNode;
          if (!GR || 1 != GR.nodeType) return !1;
          JR = dR(RR) + (tR < 0 ? 0 : 1), RR = GR
        } else {
          if (1 != RR.nodeType) return !1;
          if (1 == (RR = RR.childNodes[JR + (tR < 0 ? -1 : 0)]).nodeType && "false" == RR.contentEditable) return !1;
          JR = tR < 0 ? kR(RR) : 0
        }
      }
    }

    function kR(RR) {
      return 3 == RR.nodeType ? RR.nodeValue.length : RR.childNodes.length
    }

    function QR(RR, JR) {
      let GR = JR ? RR.left : RR.right;
      return {
        left: GR,
        right: GR,
        top: RR.top,
        bottom: RR.bottom
      }
    }

    function FR(RR) {
      let JR = RR.visualViewport;
      return JR ? {
        left: 0,
        right: JR.width,
        top: 0,
        bottom: JR.height
      } : {
        left: 0,
        right: RR.innerWidth,
        top: 0,
        bottom: RR.innerHeight
      }
    }

    function TR(RR, JR) {
      let GR = JR.width / RR.offsetWidth,
        yR = JR.height / RR.offsetHeight;
      return (GR > .995 && GR < 1.005 || !isFinite(GR) || Math.abs(JR.width - RR.offsetWidth) < 1) && (GR = 1), (yR > .995 && yR < 1.005 || !isFinite(yR) || Math.abs(JR.height - RR.offsetHeight) < 1) && (yR = 1), {
        scaleX: GR,
        scaleY: yR
      }
    }

    function sR(RR) {
      let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        GR = RR.ownerDocument,
        yR = null,
        tR = null;
      for (let uR = RR.parentNode; uR && (uR != GR.body && (JR && !yR || !tR));)
        if (1 == uR.nodeType) !tR && uR.scrollHeight > uR.clientHeight && (tR = uR), JR && !yR && uR.scrollWidth > uR.clientWidth && (yR = uR), uR = uR.assignedSlot || uR.parentNode;
        else {
          if (11 != uR.nodeType) break;
          uR = uR.host
        } return {
        x: yR,
        y: tR
      }
    }
    PR.prototype.startSide = PR.prototype.endSide = -1;
    class hR {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(RR) {
        return this.anchorNode == RR.anchorNode && this.anchorOffset == RR.anchorOffset && this.focusNode == RR.focusNode && this.focusOffset == RR.focusOffset
      }
      setRange(RR) {
        let {
          anchorNode: JR,
          focusNode: GR
        } = RR;
        this.set(JR, Math.min(RR.anchorOffset, JR ? kR(JR) : 0), GR, Math.min(RR.focusOffset, GR ? kR(GR) : 0))
      }
      set(RR, JR, GR, yR) {
        this.anchorNode = RR, this.anchorOffset = JR, this.focusNode = GR, this.focusOffset = yR
      }
    }
    let RJ, JJ = null;

    function GJ(RR) {
      if (RR.setActive) return RR.setActive();
      if (JJ) return RR.focus(JJ);
      let JR = [];
      for (let GR = RR; GR && (JR.push(GR, GR.scrollTop, GR.scrollLeft), GR != GR.ownerDocument); GR = GR.parentNode);
      if (RR.focus(null == JJ ? {
          get preventScroll() {
            return JJ = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !JJ) {
        JJ = !1;
        for (let RR = 0; RR < JR.length;) {
          let GR = JR[RR++],
            yR = JR[RR++],
            tR = JR[RR++];
          GR.scrollTop != yR && (GR.scrollTop = yR), GR.scrollLeft != tR && (GR.scrollLeft = tR)
        }
      }
    }

    function yJ(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : JR,
        yR = RJ || (RJ = document.createRange());
      return yR.setEnd(RR, GR), yR.setStart(RR, JR), yR
    }

    function tJ(RR, JR, GR, yR) {
      let tR = {
        key: JR,
        code: JR,
        keyCode: GR,
        which: GR,
        cancelable: !0
      };
      yR && ({
        altKey: tR.altKey,
        ctrlKey: tR.ctrlKey,
        shiftKey: tR.shiftKey,
        metaKey: tR.metaKey
      } = yR);
      let uR = new KeyboardEvent("keydown", tR);
      uR.synthetic = !0, RR.dispatchEvent(uR);
      let ZR = new KeyboardEvent("keyup", tR);
      return ZR.synthetic = !0, RR.dispatchEvent(ZR), uR.defaultPrevented || ZR.defaultPrevented
    }

    function uJ(RR) {
      return RR instanceof Window ? RR.pageYOffset > Math.max(0, RR.document.documentElement.scrollHeight - RR.innerHeight - 4) : RR.scrollTop > Math.max(1, RR.scrollHeight - RR.clientHeight - 4)
    }

    function ZJ(RR, JR) {
      for (let GR = RR, yR = JR;;) {
        if (3 == GR.nodeType && yR > 0) return {
          node: GR,
          offset: yR
        };
        if (1 == GR.nodeType && yR > 0) {
          if ("false" == GR.contentEditable) return null;
          GR = GR.childNodes[yR - 1], yR = kR(GR)
        } else {
          if (!GR.parentNode || ER(GR)) return null;
          yR = dR(GR), GR = GR.parentNode
        }
      }
    }

    function qJ(RR, JR) {
      for (let GR = RR, yR = JR;;) {
        if (3 == GR.nodeType && yR < GR.nodeValue.length) return {
          node: GR,
          offset: yR
        };
        if (1 == GR.nodeType && yR < GR.childNodes.length) {
          if ("false" == GR.contentEditable) return null;
          GR = GR.childNodes[yR], yR = 0
        } else {
          if (!GR.parentNode || ER(GR)) return null;
          yR = dR(GR) + 1, GR = GR.parentNode
        }
      }
    }
    MR.safari && MR.safari_version >= 26 && (JJ = !1);
    class iJ {
      constructor(RR, JR) {
        let GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = RR, this.offset = JR, this.precise = GR
      }
      static before(RR, JR) {
        return new iJ(RR.parentNode, dR(RR), JR)
      }
      static after(RR, JR) {
        return new iJ(RR.parentNode, dR(RR) + 1, JR)
      }
    }
    var fJ = function(RR) {
      return RR[RR.LTR = 0] = "LTR", RR[RR.RTL = 1] = "RTL", RR
    }(fJ || (fJ = {}));
    const VJ = fJ.LTR,
      KJ = fJ.RTL;

    function wJ(RR) {
      let JR = [];
      for (let GR = 0; GR < RR.length; GR++) JR.push(1 << +RR[GR]);
      return JR
    }
    const rJ = wJ("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      eJ = wJ("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      aJ = Object.create(null),
      LJ = [];
    for (let xZ of ["()", "[]", "{}"]) {
      let RR = xZ.charCodeAt(0),
        JR = xZ.charCodeAt(1);
      aJ[RR] = JR, aJ[JR] = -RR
    }

    function nJ(RR) {
      return RR <= 247 ? rJ[RR] : 1424 <= RR && RR <= 1524 ? 2 : 1536 <= RR && RR <= 1785 ? eJ[RR - 1536] : 1774 <= RR && RR <= 2220 ? 4 : 8192 <= RR && RR <= 8204 ? 256 : 64336 <= RR && RR <= 65023 ? 4 : 1
    }
    const UJ = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class WJ {
      get dir() {
        return this.level % 2 ? KJ : VJ
      }
      constructor(RR, JR, GR) {
        this.from = RR, this.to = JR, this.level = GR
      }
      side(RR, JR) {
        return this.dir == JR == RR ? this.to : this.from
      }
      forward(RR, JR) {
        return RR == (this.dir == JR)
      }
      static find(RR, JR, GR, yR) {
        let tR = -1;
        for (let uR = 0; uR < RR.length; uR++) {
          let ZR = RR[uR];
          if (ZR.from <= JR && ZR.to >= JR) {
            if (ZR.level == GR) return uR;
            (tR < 0 || (0 != yR ? yR < 0 ? ZR.from < JR : ZR.to > JR : RR[tR].level > ZR.level)) && (tR = uR)
          }
        }
        if (tR < 0) throw new RangeError("Index out of range");
        return tR
      }
    }

    function AJ(RR, JR) {
      if (RR.length != JR.length) return !1;
      for (let GR = 0; GR < RR.length; GR++) {
        let yR = RR[GR],
          tR = JR[GR];
        if (yR.from != tR.from || yR.to != tR.to || yR.direction != tR.direction || !AJ(yR.inner, tR.inner)) return !1
      }
      return !0
    }
    const CJ = [];

    function XJ(RR, JR, GR, yR, tR, uR, ZR) {
      let qR = yR % 2 ? 2 : 1;
      if (yR % 2 == tR % 2)
        for (let iR = JR, fR = 0; iR < GR;) {
          let JR = !0,
            VR = !1;
          if (fR == uR.length || iR < uR[fR].from) {
            let RR = CJ[iR];
            RR != qR && (JR = !1, VR = 16 == RR)
          }
          let KR = JR || 1 != qR ? null : [],
            wR = JR ? yR : yR + 1,
            rR = iR;
          RR: for (;;)
            if (fR < uR.length && rR == uR[fR].from) {
              if (VR) break RR;
              let eR = uR[fR];
              if (!JR)
                for (let RR = eR.to, JR = fR + 1;;) {
                  if (RR == GR) break RR;
                  if (!(JR < uR.length && uR[JR].from == RR)) {
                    if (CJ[RR] == qR) break RR;
                    break
                  }
                  RR = uR[JR++].to
                }
              if (fR++, KR) KR.push(eR);
              else {
                eR.from > iR && ZR.push(new WJ(iR, eR.from, wR)), MJ(RR, eR.direction == VJ != !(wR % 2) ? yR + 1 : yR, tR, eR.inner, eR.from, eR.to, ZR), iR = eR.to
              }
              rR = eR.to
            } else {
              if (rR == GR || (JR ? CJ[rR] != qR : CJ[rR] == qR)) break;
              rR++
            } KR ? XJ(RR, iR, rR, yR + 1, tR, KR, ZR) : iR < rR && ZR.push(new WJ(iR, rR, wR)), iR = rR
        } else
          for (let iR = GR, fR = uR.length; iR > JR;) {
            let GR = !0,
              VR = !1;
            if (!fR || iR > uR[fR - 1].to) {
              let RR = CJ[iR - 1];
              RR != qR && (GR = !1, VR = 16 == RR)
            }
            let KR = GR || 1 != qR ? null : [],
              wR = GR ? yR : yR + 1,
              rR = iR;
            RR: for (;;)
              if (fR && rR == uR[fR - 1].to) {
                if (VR) break RR;
                let eR = uR[--fR];
                if (!GR)
                  for (let RR = eR.from, GR = fR;;) {
                    if (RR == JR) break RR;
                    if (!GR || uR[GR - 1].to != RR) {
                      if (CJ[RR - 1] == qR) break RR;
                      break
                    }
                    RR = uR[--GR].from
                  }
                if (KR) KR.push(eR);
                else {
                  eR.to < iR && ZR.push(new WJ(eR.to, iR, wR)), MJ(RR, eR.direction == VJ != !(wR % 2) ? yR + 1 : yR, tR, eR.inner, eR.from, eR.to, ZR), iR = eR.from
                }
                rR = eR.from
              } else {
                if (rR == JR || (GR ? CJ[rR - 1] != qR : CJ[rR - 1] == qR)) break;
                rR--
              } KR ? XJ(RR, rR, iR, yR + 1, tR, KR, ZR) : rR < iR && ZR.push(new WJ(rR, iR, wR)), iR = rR
          }
    }

    function MJ(RR, JR, GR, yR, tR, uR, ZR) {
      let qR = JR % 2 ? 2 : 1;
      ! function(RR, JR, GR, yR, tR) {
        for (let uR = 0; uR <= yR.length; uR++) {
          let ZR = uR ? yR[uR - 1].to : JR,
            qR = uR < yR.length ? yR[uR].from : GR,
            iR = uR ? 256 : tR;
          for (let JR = ZR, GR = iR, yR = iR; JR < qR; JR++) {
            let tR = nJ(RR.charCodeAt(JR));
            512 == tR ? tR = GR : 8 == tR && 4 == yR && (tR = 16), CJ[JR] = 4 == tR ? 2 : tR, 7 & tR && (yR = tR), GR = tR
          }
          for (let RR = ZR, JR = iR, yR = iR; RR < qR; RR++) {
            let tR = CJ[RR];
            if (128 == tR) RR < qR - 1 && JR == CJ[RR + 1] && 24 & JR ? tR = CJ[RR] = JR : CJ[RR] = 256;
            else if (64 == tR) {
              let tR = RR + 1;
              for (; tR < qR && 64 == CJ[tR];) tR++;
              let uR = RR && 8 == JR || tR < GR && 8 == CJ[tR] ? 1 == yR ? 1 : 8 : 256;
              for (let JR = RR; JR < tR; JR++) CJ[JR] = uR;
              RR = tR - 1
            } else 8 == tR && 1 == yR && (CJ[RR] = 1);
            JR = tR, 7 & tR && (yR = tR)
          }
        }
      }(RR, tR, uR, yR, qR),
      function(RR, JR, GR, yR, tR) {
        let uR = 1 == tR ? 2 : 1;
        for (let ZR = 0, qR = 0, iR = 0; ZR <= yR.length; ZR++) {
          let fR = ZR ? yR[ZR - 1].to : JR,
            VR = ZR < yR.length ? yR[ZR].from : GR;
          for (let JR, GR, yR, ZR = fR; ZR < VR; ZR++)
            if (GR = aJ[JR = RR.charCodeAt(ZR)])
              if (GR < 0) {
                for (let RR = qR - 3; RR >= 0; RR -= 3)
                  if (LJ[RR + 1] == -GR) {
                    let JR = LJ[RR + 2],
                      GR = 2 & JR ? tR : 4 & JR ? 1 & JR ? uR : tR : 0;
                    GR && (CJ[ZR] = CJ[LJ[RR]] = GR), qR = RR;
                    break
                  }
              } else {
                if (189 == LJ.length) break;
                LJ[qR++] = ZR, LJ[qR++] = JR, LJ[qR++] = iR
              }
          else if (2 == (yR = CJ[ZR]) || 1 == yR) {
            let RR = yR == tR;
            iR = RR ? 0 : 1;
            for (let JR = qR - 3; JR >= 0; JR -= 3) {
              let GR = LJ[JR + 2];
              if (2 & GR) break;
              if (RR) LJ[JR + 2] |= 2;
              else {
                if (4 & GR) break;
                LJ[JR + 2] |= 4
              }
            }
          }
        }
      }(RR, tR, uR, yR, qR),
      function(RR, JR, GR, yR) {
        for (let tR = 0, uR = yR; tR <= GR.length; tR++) {
          let ZR = tR ? GR[tR - 1].to : RR,
            qR = tR < GR.length ? GR[tR].from : JR;
          for (let iR = ZR; iR < qR;) {
            let ZR = CJ[iR];
            if (256 == ZR) {
              let ZR = iR + 1;
              for (;;)
                if (ZR == qR) {
                  if (tR == GR.length) break;
                  ZR = GR[tR++].to, qR = tR < GR.length ? GR[tR].from : JR
                } else {
                  if (256 != CJ[ZR]) break;
                  ZR++
                } let fR = 1 == uR,
                VR = fR == (1 == (ZR < JR ? CJ[ZR] : yR)) ? fR ? 1 : 2 : yR;
              for (let JR = ZR, yR = tR, uR = yR ? GR[yR - 1].to : RR; JR > iR;) JR == uR && (JR = GR[--yR].from, uR = yR ? GR[yR - 1].to : RR), CJ[--JR] = VR;
              iR = ZR
            } else uR = ZR, iR++
          }
        }
      }(tR, uR, yR, qR), XJ(RR, tR, uR, JR, GR, yR, ZR)
    }

    function BJ(RR, JR, GR) {
      if (!RR) return [new WJ(0, 0, JR == KJ ? 1 : 0)];
      if (JR == VJ && !GR.length && !UJ.test(RR)) return lJ(RR.length);
      if (GR.length)
        for (; RR.length > CJ.length;) CJ[CJ.length] = 256;
      let yR = [],
        tR = JR == VJ ? 0 : 1;
      return MJ(RR, tR, tR, GR, 0, RR.length, yR), yR
    }

    function lJ(RR) {
      return [new WJ(0, RR, 0)]
    }
    let pJ = "";

    function gJ(RR, JR, GR, tR, uR) {
      var ZR;
      let qR = tR.head - RR.from,
        iR = WJ.find(JR, qR, null !== (ZR = tR.bidiLevel) && void 0 !== ZR ? ZR : -1, tR.assoc),
        fR = JR[iR],
        VR = fR.side(uR, GR);
      if (qR == VR) {
        let RR = iR += uR ? 1 : -1;
        if (RR < 0 || RR >= JR.length) return null;
        fR = JR[iR = RR], qR = fR.side(!uR, GR), VR = fR.side(uR, GR)
      }
      let KR = (0, yR.eb)(RR.text, qR, fR.forward(uR, GR));
      (KR < fR.from || KR > fR.to) && (KR = VR), pJ = RR.text.slice(Math.min(qR, KR), Math.max(qR, KR));
      let wR = iR == (uR ? JR.length - 1 : 0) ? null : JR[iR + (uR ? 1 : -1)];
      return wR && KR == VR && wR.level + (uR ? 0 : 1) < fR.level ? yR.k.cursor(wR.side(!uR, GR) + RR.from, wR.forward(uR, GR) ? 1 : -1, wR.level) : yR.k.cursor(KR + RR.from, fR.forward(uR, GR) ? -1 : 1, fR.level)
    }

    function bJ(RR, JR, GR) {
      for (let yR = JR; yR < GR; yR++) {
        let JR = nJ(RR.charCodeAt(yR));
        if (1 == JR) return VJ;
        if (2 == JR || 4 == JR) return KJ
      }
      return VJ
    }
    const vJ = yR.r.define(),
      OJ = yR.r.define(),
      xJ = yR.r.define(),
      NJ = yR.r.define(),
      DJ = yR.r.define(),
      HJ = yR.r.define(),
      oJ = yR.r.define(),
      cJ = yR.r.define(),
      PJ = yR.r.define(),
      IJ = yR.r.define({
        combine: RR => RR.some((RR => RR))
      }),
      mJ = yR.r.define({
        combine: RR => RR.some((RR => RR))
      }),
      zJ = yR.r.define();
    class SJ {
      constructor(RR, JR, GR, yR, tR) {
        let uR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = RR, this.y = JR, this.x = GR, this.yMargin = yR, this.xMargin = tR, this.isSnapshot = uR
      }
      map(RR) {
        return RR.empty ? this : new SJ(this.range.map(RR), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(RR) {
        return this.range.to <= RR.doc.length ? this : new SJ(yR.k.cursor(RR.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const jJ = yR.K.define({
        map: (RR, JR) => RR.map(JR)
      }),
      dJ = yR.K.define();

    function EJ(RR, JR, GR) {
      let yR = RR.facet(NJ);
      yR.length ? yR[0](JR) : window.onerror && window.onerror(String(JR), GR, void 0, void 0, JR) || (GR ? console.error(GR + ":", JR) : console.error(JR))
    }
    const YJ = yR.r.define({
      combine: RR => !RR.length || RR[0]
    });
    let kJ = 0;
    const QJ = yR.r.define({
      combine: RR => RR.filter(((JR, GR) => {
        for (let yR = 0; yR < GR; yR++)
          if (RR[yR].plugin == JR.plugin) return !1;
        return !0
      }))
    });
    class FJ {
      constructor(RR, JR, GR, yR, tR) {
        this.id = RR, this.create = JR, this.domEventHandlers = GR, this.domEventObservers = yR, this.baseExtensions = tR(this), this.extension = this.baseExtensions.concat(QJ.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(RR) {
        return this.baseExtensions.concat(QJ.of({
          plugin: this,
          arg: RR
        }))
      }
      static define(RR, JR) {
        const {
          eventHandlers: GR,
          eventObservers: yR,
          provide: tR,
          Cy: uR
        } = JR || {};
        return new FJ(kJ++, RR, GR, yR, (RR => {
          let JR = [];
          return uR && JR.push(RG.of((JR => {
            let GR = JR.plugin(RR);
            return GR ? uR(GR) : xR.none
          }))), tR && JR.push(tR(RR)), JR
        }))
      }
      static fromClass(RR, JR) {
        return FJ.define(((JR, GR) => new RR(JR, GR)), JR)
      }
    }
    class TJ {
      constructor(RR) {
        this.spec = RR, this.mustUpdate = null, this.value = null
      }
      get plugin() {
        return this.spec && this.spec.plugin
      }
      update(RR) {
        if (this.value) {
          if (this.mustUpdate) {
            let RR = this.mustUpdate;
            if (this.mustUpdate = null, this.value.update) try {
              this.value.update(RR)
            } catch (JR) {
              if (EJ(RR.state, JR, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (GR) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(RR, this.spec.arg)
        } catch (JR) {
          EJ(RR.state, JR, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(RR) {
        var JR;
        if (null === (JR = this.value) || void 0 === JR ? void 0 : JR.destroy) try {
          this.value.destroy()
        } catch (GR) {
          EJ(RR.state, GR, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const sJ = yR.r.define(),
      hJ = yR.r.define(),
      RG = yR.r.define(),
      JG = yR.r.define(),
      GG = yR.r.define(),
      yG = yR.r.define(),
      tG = yR.r.define();

    function uG(RR, JR) {
      let GR = RR.state.facet(tG);
      if (!GR.length) return GR;
      let tR = GR.map((JR => JR instanceof Function ? JR(RR) : JR)),
        uR = [];
      return yR.E.spans(tR, JR.from, JR.to, {
        point() {},
        span(RR, GR, yR, tR) {
          let ZR = RR - JR.from,
            qR = GR - JR.from,
            iR = uR;
          for (let uR = yR.length - 1; uR >= 0; uR--, tR--) {
            let RR, GR = yR[uR].spec.bidiIsolate;
            if (null == GR && (GR = bJ(JR.text, ZR, qR)), tR > 0 && iR.length && (RR = iR[iR.length - 1]).to == ZR && RR.direction == GR) RR.to = qR, iR = RR.inner;
            else {
              let RR = {
                from: ZR,
                to: qR,
                direction: GR,
                inner: []
              };
              iR.push(RR), iR = RR.inner
            }
          }
        }
      }), uR
    }
    const ZG = yR.r.define();

    function qG(RR) {
      let JR = 0,
        GR = 0,
        yR = 0,
        tR = 0;
      for (let uR of RR.state.facet(ZG)) {
        let ZR = uR(RR);
        ZR && (null != ZR.left && (JR = Math.max(JR, ZR.left)), null != ZR.right && (GR = Math.max(GR, ZR.right)), null != ZR.top && (yR = Math.max(yR, ZR.top)), null != ZR.bottom && (tR = Math.max(tR, ZR.bottom)))
      }
      return {
        left: JR,
        right: GR,
        top: yR,
        bottom: tR
      }
    }
    const iG = yR.r.define();
    class fG {
      constructor(RR, JR, GR, yR) {
        this.fromA = RR, this.toA = JR, this.fromB = GR, this.toB = yR
      }
      join(RR) {
        return new fG(Math.min(this.fromA, RR.fromA), Math.max(this.toA, RR.toA), Math.min(this.fromB, RR.fromB), Math.max(this.toB, RR.toB))
      }
      addToSet(RR) {
        let JR = RR.length,
          GR = this;
        for (; JR > 0; JR--) {
          let yR = RR[JR - 1];
          if (!(yR.fromA > GR.toA)) {
            if (yR.toA < GR.fromA) break;
            GR = GR.join(yR), RR.splice(JR - 1, 1)
          }
        }
        return RR.splice(JR, 0, GR), RR
      }
      static extendWithRanges(RR, JR) {
        if (0 == JR.length) return RR;
        let GR = [];
        for (let yR = 0, tR = 0, uR = 0;;) {
          let ZR = yR < RR.length ? RR[yR].fromB : 1e9,
            qR = tR < JR.length ? JR[tR] : 1e9,
            iR = Math.min(ZR, qR);
          if (1e9 == iR) break;
          let fR = iR + uR,
            VR = iR,
            KR = fR;
          for (;;)
            if (tR < JR.length && JR[tR] <= VR) {
              let GR = JR[tR + 1];
              tR += 2, VR = Math.max(VR, GR);
              for (let JR = yR; JR < RR.length && RR[JR].fromB <= VR; JR++) uR = RR[JR].toA - RR[JR].toB;
              KR = Math.max(KR, GR + uR)
            } else {
              if (!(yR < RR.length && RR[yR].fromB <= VR)) break;
              {
                let JR = RR[yR++];
                VR = Math.max(VR, JR.toB), KR = Math.max(KR, JR.toA), uR = JR.toA - JR.toB
              }
            } GR.push(new fG(fR, KR, iR, VR))
        }
        return GR
      }
    }
    class VG {
      constructor(RR, JR, GR) {
        this.view = RR, this.state = JR, this.transactions = GR, this.flags = 0, this.startState = RR.state, this.changes = yR.ChangeSet.empty(this.startState.doc.length);
        for (let yR of GR) this.changes = this.changes.compose(yR.changes);
        let tR = [];
        this.changes.iterChangedRanges(((RR, JR, GR, yR) => tR.push(new fG(RR, JR, GR, yR)))), this.changedRanges = tR
      }
      static create(RR, JR, GR) {
        return new VG(RR, JR, GR)
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
        return this.transactions.some((RR => RR.selection))
      }
      get empty() {
        return 0 == this.flags && 0 == this.transactions.length
      }
    }
    const KG = [];
    class wG {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = RR, this.length = JR, this.flags = GR, this.parent = null, RR.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return KG
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
      sync(RR) {
        if (this.flags |= 2, 4 & this.flags) {
          this.flags &= -5;
          let RR = this.domAttrs;
          RR && function(RR, JR) {
            for (let GR = RR.attributes.length - 1; GR >= 0; GR--) {
              let yR = RR.attributes[GR].name;
              null == JR[yR] && RR.removeAttribute(yR)
            }
            for (let GR in JR) {
              let yR = JR[GR];
              "style" == GR ? RR.style.cssText = yR : RR.getAttribute(GR) != yR && RR.setAttribute(GR, yR)
            }
          }(this.dom, RR)
        }
      }
      toString() {
        return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "")
      }
      destroy() {
        this.parent = null
      }
      setDOM(RR) {
        this.dom = RR, RR.cmTile = this
      }
      get posAtStart() {
        return this.parent ? this.parent.posBefore(this) : 0
      }
      get posAtEnd() {
        return this.posAtStart + this.length
      }
      posBefore(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let GR of this.children) {
          if (GR == RR) return JR;
          JR += GR.length + GR.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(RR) {
        return this.posBefore(RR) + RR.length
      }
      covers(RR) {
        return !0
      }
      coordsIn(RR, JR) {
        return null
      }
      domPosFor(RR, JR) {
        let GR = dR(this.dom),
          yR = this.length ? RR > 0 : JR > 0;
        return new iJ(this.parent.dom, GR + (yR ? 1 : 0), 0 == RR || RR == this.length)
      }
      markDirty(RR) {
        this.flags &= -3, RR && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let RR = this; RR; RR = RR.parent)
          if (RR instanceof aG) return RR;
        return null
      }
      static get(RR) {
        return RR.cmTile
      }
    }
    class rG extends wG {
      constructor(RR) {
        super(RR, 0), this._children = []
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
      append(RR) {
        this.children.push(RR), RR.parent = this
      }
      sync(RR) {
        if (2 & this.flags) return;
        super.sync(RR);
        let JR, GR = this.dom,
          yR = null,
          tR = (null === RR || void 0 === RR ? void 0 : RR.node) == GR ? RR : null,
          uR = 0;
        for (let ZR of this.children) {
          if (ZR.sync(RR), uR += ZR.length + ZR.breakAfter, JR = yR ? yR.nextSibling : GR.firstChild, tR && JR != ZR.dom && (tR.written = !0), ZR.dom.parentNode == GR)
            for (; JR && JR != ZR.dom;) JR = eG(JR);
          else GR.insertBefore(ZR.dom, JR);
          yR = ZR.dom
        }
        for (JR = yR ? yR.nextSibling : GR.firstChild, tR && JR && (tR.written = !0); JR;) JR = eG(JR);
        this.length = uR
      }
    }

    function eG(RR) {
      let JR = RR.nextSibling;
      return RR.parentNode.removeChild(RR), JR
    }
    class aG extends rG {
      constructor(RR, JR) {
        super(JR), this.view = RR
      }
      owns(RR) {
        for (; RR; RR = RR.parent)
          if (RR == this) return !0;
        return !1
      }
      isBlock() {
        return !0
      }
      nearest(RR) {
        for (;;) {
          if (!RR) return null;
          let JR = wG.get(RR);
          if (JR && this.owns(JR)) return JR;
          RR = RR.parentNode
        }
      }
      blockTiles(RR) {
        for (let JR = [], GR = this, yR = 0, tR = 0;;)
          if (yR == GR.children.length) {
            if (!JR.length) return;
            GR = GR.parent, GR.breakAfter && tR++, yR = JR.pop()
          } else {
            let uR = GR.children[yR++];
            if (uR instanceof LG) JR.push(yR), GR = uR, yR = 0;
            else {
              let JR = tR + uR.length,
                GR = RR(uR, tR);
              if (void 0 !== GR) return GR;
              tR = JR + uR.breakAfter
            }
          }
      }
      resolveBlock(RR, JR) {
        let GR, yR, tR = -1,
          uR = -1;
        if (this.blockTiles(((ZR, qR) => {
            let iR = qR + ZR.length;
            if (RR >= qR && RR <= iR) {
              if (ZR.isWidget() && JR >= -1 && JR <= 1) {
                if (32 & ZR.flags) return !0;
                16 & ZR.flags && (GR = void 0)
              }(qR < RR || RR == iR && (JR < -1 ? ZR.length : ZR.covers(1))) && (!GR || !ZR.isWidget() && GR.isWidget()) && (GR = ZR, tR = RR - qR), (iR > RR || RR == qR && (JR > 1 ? ZR.length : ZR.covers(-1))) && (!yR || !ZR.isWidget() && yR.isWidget()) && (yR = ZR, uR = RR - qR)
            }
          })), !GR && !yR) throw new Error("No tile at position " + RR);
        return GR && JR < 0 || !yR ? {
          tile: GR,
          offset: tR
        } : {
          tile: yR,
          offset: uR
        }
      }
    }
    class LG extends rG {
      constructor(RR, JR) {
        super(RR), this.wrapper = JR
      }
      isBlock() {
        return !0
      }
      covers(RR) {
        return !!this.children.length && (RR < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1))
      }
      get domAttrs() {
        return this.wrapper.attributes
      }
      static of (RR, JR) {
        let GR = new LG(JR || document.createElement(RR.tagName), RR);
        return JR || (GR.flags |= 4), GR
      }
    }
    class nG extends rG {
      constructor(RR, JR) {
        super(RR), this.attrs = JR
      }
      isLine() {
        return !0
      }
      static start(RR, JR, GR) {
        let yR = new nG(JR || document.createElement("div"), RR);
        return JR && GR || (yR.flags |= 4), yR
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(RR, JR, GR) {
        let yR = null,
          tR = -1,
          uR = null,
          ZR = -1;
        ! function RR(qR, iR) {
          for (let fR = 0, VR = 0; fR < qR.children.length && VR <= iR; fR++) {
            let KR = qR.children[fR],
              wR = VR + KR.length;
            wR >= iR && (KR.isComposite() ? RR(KR, iR - VR) : (!uR || uR.isHidden && (JR > 0 || GR && UG(uR, KR))) && (wR > iR || 32 & KR.flags) ? (uR = KR, ZR = iR - VR) : (VR < iR || 16 & KR.flags && !KR.isHidden) && (yR = KR, tR = iR - VR)), VR = wR
          }
        }(this, RR);
        let qR = (JR < 0 ? yR : uR) || yR || uR;
        return qR ? {
          tile: qR,
          offset: qR == yR ? tR : ZR
        } : null
      }
      coordsIn(RR, JR) {
        let GR = this.resolveInline(RR, JR, !0);
        return GR ? GR.tile.coordsIn(Math.max(0, GR.offset), JR) : function(RR) {
          let JR = RR.dom.lastChild;
          if (!JR) return RR.dom.getBoundingClientRect();
          let GR = SR(JR);
          return GR[GR.length - 1] || null
        }(this)
      }
      domIn(RR, JR) {
        let GR = this.resolveInline(RR, JR);
        if (GR) {
          let {
            tile: RR,
            offset: yR
          } = GR;
          if (this.dom.contains(RR.dom)) return RR.isText() ? new iJ(RR.dom, Math.min(RR.dom.nodeValue.length, yR)) : RR.domPosFor(yR, 16 & RR.flags ? 1 : 32 & RR.flags ? -1 : JR);
          let tR = GR.tile.parent,
            uR = !1;
          for (let JR of tR.children) {
            if (uR) return new iJ(JR.dom, 0);
            JR == GR.tile && (uR = !0)
          }
        }
        return new iJ(this.dom, 0)
      }
    }

    function UG(RR, JR) {
      let GR = RR.coordsIn(0, 1),
        yR = JR.coordsIn(0, 1);
      return GR && yR && yR.top < GR.bottom
    }
    class WG extends rG {
      constructor(RR, JR) {
        super(RR), this.mark = JR
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (RR, JR) {
        let GR = new WG(JR || document.createElement(RR.tagName), RR);
        return JR || (GR.flags |= 4), GR
      }
    }
    class AG extends wG {
      constructor(RR, JR) {
        super(RR, JR.length), this.text = JR
      }
      sync(RR) {
        2 & this.flags || (super.sync(RR), this.dom.nodeValue != this.text && (RR && RR.node == this.dom && (RR.written = !0), this.dom.nodeValue = this.text))
      }
      isText() {
        return !0
      }
      toString() {
        return JSON.stringify(this.text)
      }
      coordsIn(RR, JR) {
        let GR = this.dom.nodeValue.length;
        RR > GR && (RR = GR);
        let yR = RR,
          tR = RR,
          uR = 0;
        0 == RR && JR < 0 || RR == GR && JR >= 0 ? MR.chrome || MR.gecko || (RR ? (yR--, uR = 1) : tR < GR && (tR++, uR = -1)) : JR < 0 ? yR-- : tR < GR && tR++;
        let ZR = yJ(this.dom, yR, tR).getClientRects();
        if (!ZR.length) return null;
        let qR = ZR[(uR ? uR < 0 : JR >= 0) ? 0 : ZR.length - 1];
        return MR.safari && !uR && 0 == qR.width && (qR = Array.prototype.find.call(ZR, (RR => RR.width)) || qR), uR ? QR(qR, uR < 0) : qR || null
      }
      static of (RR, JR) {
        let GR = new AG(JR || document.createTextNode(RR), RR);
        return JR || (GR.flags |= 2), GR
      }
    }
    class CG extends wG {
      constructor(RR, JR, GR, yR) {
        super(RR, JR, yR), this.widget = GR
      }
      isWidget() {
        return !0
      }
      get isHidden() {
        return this.widget.isHidden
      }
      covers(RR) {
        return !(48 & this.flags) && (this.flags & (RR < 0 ? 64 : 128)) > 0
      }
      coordsIn(RR, JR) {
        return this.coordsInWidget(RR, JR, !1)
      }
      coordsInWidget(RR, JR, GR) {
        let yR = this.widget.coordsAt(this.dom, RR, JR);
        if (yR) return yR;
        if (GR) return QR(this.dom.getBoundingClientRect(), this.length ? 0 == RR : JR <= 0);
        {
          let JR = this.dom.getClientRects(),
            GR = null;
          if (!JR.length) return null;
          let yR = !!(16 & this.flags) || !(32 & this.flags) && RR > 0;
          for (let tR = yR ? JR.length - 1 : 0; GR = JR[tR], !(RR > 0 ? 0 == tR : tR == JR.length - 1 || GR.top < GR.bottom); tR += yR ? -1 : 1);
          return QR(GR, !yR)
        }
      }
      get overrideDOMText() {
        if (!this.length) return yR.N.empty;
        let {
          root: RR
        } = this;
        if (!RR) return yR.N.empty;
        let JR = this.posAtStart;
        return RR.view.state.doc.slice(JR, JR + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (RR, JR, GR, yR, tR) {
        return tR || (tR = RR.toDOM(JR), RR.editable || (tR.contentEditable = "false")), new CG(tR, GR, RR, yR)
      }
    }
    class XG extends wG {
      constructor(RR) {
        let JR = document.createElement("img");
        JR.className = "cm-widgetBuffer", JR.setAttribute("aria-hidden", "true"), super(JR, 0, RR)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return yR.N.empty
      }
      coordsIn(RR) {
        return this.dom.getBoundingClientRect()
      }
    }
    class MG {
      constructor(RR) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = RR
      }
      advance(RR, JR, GR) {
        let {
          tile: yR,
          index: tR,
          beforeBreak: uR,
          parents: ZR
        } = this;
        for (; RR || JR > 0;)
          if (yR.isComposite())
            if (uR) {
              if (!RR) break;
              GR && GR.break(), RR--, uR = !1
            } else if (tR == yR.children.length) {
          if (!RR && !ZR.length) break;
          GR && GR.leave(yR), uR = !!yR.breakAfter, ({
            tile: yR,
            index: tR
          } = ZR.pop()), tR++
        } else {
          let qR = yR.children[tR],
            iR = qR.breakAfter;
          !(JR > 0 ? qR.length <= RR : qR.length < RR) || GR && !1 === GR.skip(qR, 0, qR.length) && qR.isComposite ? (ZR.push({
            tile: yR,
            index: tR
          }), yR = qR, tR = 0, GR && qR.isComposite() && GR.enter(qR)) : (uR = !!iR, tR++, RR -= qR.length)
        } else if (tR == yR.length) uR = !!yR.breakAfter, ({
          tile: yR,
          index: tR
        } = ZR.pop()), tR++;
        else {
          if (!RR) break;
          {
            let JR = Math.min(RR, yR.length - tR);
            GR && GR.skip(yR, tR, tR + JR), RR -= JR, tR += JR
          }
        }
        return this.tile = yR, this.index = tR, this.beforeBreak = uR, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class BG {
      constructor(RR, JR, GR, yR) {
        this.from = RR, this.to = JR, this.wrapper = GR, this.rank = yR
      }
    }
    class lG {
      constructor(RR, JR, GR) {
        this.cache = RR, this.root = JR, this.blockWrappers = GR, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(RR, JR, GR, yR) {
        var tR;
        this.flushBuffer();
        let uR = this.ensureMarks(JR, GR),
          ZR = uR.lastChild;
        if (ZR && ZR.isText() && !(8 & ZR.flags) && ZR.length + RR.length < 512) {
          this.cache.reused.set(ZR, 2), (uR.children[uR.children.length - 1] = new AG(ZR.dom, ZR.text + RR)).parent = uR
        } else uR.append(yR || AG.of(RR, null === (tR = this.cache.find(AG)) || void 0 === tR ? void 0 : tR.dom));
        this.pos += RR.length, this.afterWidget = null
      }
      addComposition(RR, JR) {
        let GR = this.curLine;
        GR.dom != JR.line.dom && (GR.setDOM(this.cache.reused.has(JR.line) ? NG(JR.line.dom) : JR.line.dom), this.cache.reused.set(JR.line, 2));
        let yR = GR;
        for (let ZR = JR.marks.length - 1; ZR >= 0; ZR--) {
          let RR = JR.marks[ZR],
            GR = yR.lastChild;
          if (GR instanceof WG && GR.mark.eq(RR.mark)) GR.dom != RR.dom && GR.setDOM(NG(RR.dom)), yR = GR;
          else {
            if (this.cache.reused.get(RR)) {
              let JR = wG.get(RR.dom);
              JR && JR.setDOM(NG(RR.dom))
            }
            let JR = WG.of(RR.mark, RR.dom);
            yR.append(JR), yR = JR
          }
          this.cache.reused.set(RR, 2)
        }
        let tR = wG.get(RR.text);
        tR && this.cache.reused.set(tR, 2);
        let uR = new AG(RR.text, RR.text.nodeValue);
        uR.flags |= 8, yR.append(uR)
      }
      addInlineWidget(RR, JR, GR) {
        let yR = this.afterWidget && 48 & RR.flags && (48 & this.afterWidget.flags) == (48 & RR.flags);
        yR || this.flushBuffer();
        let tR = this.ensureMarks(JR, GR);
        yR || 16 & RR.flags || tR.append(this.getBuffer(1)), tR.append(RR), this.pos += RR.length, this.afterWidget = RR
      }
      addMark(RR, JR, GR) {
        this.flushBuffer(), this.ensureMarks(JR, GR).append(RR), this.pos += RR.length, this.afterWidget = null
      }
      addBlockWidget(RR) {
        this.getBlockPos().append(RR), this.pos += RR.length, this.lastBlock = RR, this.endLine()
      }
      continueWidget(RR) {
        (this.afterWidget || this.lastBlock).length += RR, this.pos += RR
      }
      addLineStart(RR, JR) {
        var GR;
        RR || (RR = xG);
        let yR = nG.start(RR, JR || (null === (GR = this.cache.find(nG)) || void 0 === GR ? void 0 : GR.dom), !!JR);
        this.getBlockPos().append(this.lastBlock = this.curLine = yR)
      }
      addLine(RR) {
        this.getBlockPos().append(RR), this.pos += RR.length, this.lastBlock = RR, this.endLine()
      }
      addBreak() {
        this.lastBlock.flags |= 1, this.endLine(), this.pos++
      }
      addLineStartIfNotCovered(RR) {
        this.blockPosCovered() || this.addLineStart(RR)
      }
      ensureLine(RR) {
        this.curLine || this.addLineStart(RR)
      }
      ensureMarks(RR, JR) {
        var GR;
        let yR = this.curLine;
        for (let tR = RR.length - 1; tR >= 0; tR--) {
          let uR, ZR = RR[tR];
          if (JR > 0 && (uR = yR.lastChild) && uR instanceof WG && uR.mark.eq(ZR)) yR = uR, JR--;
          else {
            let RR = WG.of(ZR, null === (GR = this.cache.find(WG, (RR => RR.mark.eq(ZR)))) || void 0 === GR ? void 0 : GR.dom);
            yR.append(RR), yR = RR, JR = 0
          }
        }
        return yR
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let RR = this.curLine.lastChild;
          RR && OG(this.curLine, !1) && ("BR" == RR.dom.nodeName || !RR.isWidget() || MR.ios && OG(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(HG, 0, 32) || new CG(HG.toDOM(), 0, HG, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let RR = this.wrappers.length - 1; RR >= 0; RR--) this.wrappers[RR].to < this.pos && this.wrappers.splice(RR, 1);
        for (let RR = this.blockWrappers; RR.value && RR.from <= this.pos; RR.next())
          if (RR.to >= this.pos) {
            let JR = new BG(RR.from, RR.to, RR.value, RR.rank),
              GR = this.wrappers.length;
            for (; GR > 0 && (this.wrappers[GR - 1].rank - JR.rank || this.wrappers[GR - 1].to - JR.to) < 0;) GR--;
            this.wrappers.splice(GR, 0, JR)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var RR;
        this.updateBlockWrappers();
        let JR = this.root;
        for (let GR of this.wrappers) {
          let yR = JR.lastChild;
          if (GR.from < this.pos && yR instanceof LG && yR.wrapper.eq(GR.wrapper)) JR = yR;
          else {
            let yR = LG.of(GR.wrapper, null === (RR = this.cache.find(LG, (RR => RR.wrapper.eq(GR.wrapper)))) || void 0 === RR ? void 0 : RR.dom);
            JR.append(yR), JR = yR
          }
        }
        return JR
      }
      blockPosCovered() {
        let RR = this.lastBlock;
        return null != RR && !RR.breakAfter && (!RR.isWidget() || (160 & RR.flags) > 0)
      }
      getBuffer(RR) {
        let JR = 2 | (RR < 0 ? 16 : 32),
          GR = this.cache.find(XG, void 0, 1);
        return GR && (GR.flags = JR), GR || new XG(JR)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class pG {
      constructor(RR) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = RR.iter()
      }
      skip(RR) {
        this.textOff + RR <= this.text.length ? this.textOff += RR : (this.skipCount += RR - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(RR) {
        if (this.textOff == this.text.length) {
          let {
            value: JR,
            lineBreak: GR,
            done: yR
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, yR) throw new Error("Ran out of text content when drawing inline views");
          this.text = JR;
          let tR = this.textOff = Math.min(RR, JR.length);
          return GR ? null : JR.slice(0, tR)
        }
        let JR = Math.min(this.text.length, this.textOff + RR),
          GR = this.text.slice(this.textOff, JR);
        return this.textOff = JR, GR
      }
    }
    const gG = [CG, nG, AG, WG, XG, LG, aG];
    for (let xZ = 0; xZ < gG.length; xZ++) gG[xZ].bucket = xZ;
    class bG {
      constructor(RR) {
        this.view = RR, this.buckets = gG.map((() => [])), this.index = gG.map((() => 0)), this.reused = new Map
      }
      add(RR) {
        let JR = RR.constructor.bucket,
          GR = this.buckets[JR];
        GR.length < 6 ? GR.push(RR) : GR[this.index[JR] = (this.index[JR] + 1) % 6] = RR
      }
      find(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          yR = RR.bucket,
          tR = this.buckets[yR],
          uR = this.index[yR];
        for (let ZR = tR.length - 1; ZR >= 0; ZR--) {
          let RR = (ZR + uR) % tR.length,
            qR = tR[RR];
          if ((!JR || JR(qR)) && !this.reused.has(qR)) return tR.splice(RR, 1), RR < uR && this.index[yR]--, this.reused.set(qR, GR), qR
        }
        return null
      }
      findWidget(RR, JR, GR) {
        let yR = this.buckets[0];
        if (yR.length)
          for (let tR = 0, uR = 0;; tR++) {
            if (tR == yR.length) {
              if (uR) return null;
              uR = 1, tR = 0
            }
            let ZR = yR[tR];
            if (!this.reused.has(ZR) && (0 == uR ? ZR.widget.compare(RR) : ZR.widget.constructor == RR.constructor && RR.updateDOM(ZR.dom, this.view, ZR.widget))) return yR.splice(tR, 1), tR < this.index[0] && this.index[0]--, ZR.widget == RR && ZR.length == JR && (497 & ZR.flags) == GR ? (this.reused.set(ZR, 1), ZR) : (this.reused.set(ZR, 2), new CG(ZR.dom, JR, RR, -498 & ZR.flags | GR))
          }
      }
      reuse(RR) {
        return this.reused.set(RR, 1), RR
      }
      maybeReuse(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(RR)) return this.reused.set(RR, JR), RR.dom
      }
      clear() {
        for (let RR = 0; RR < this.buckets.length; RR++) this.buckets[RR].length = this.index[RR] = 0
      }
    }
    class vG {
      constructor(RR, JR, GR, tR, uR) {
        this.view = RR, this.Cy = tR, this.disallowBlockEffectsFor = uR, this.openWidget = !1, this.openMarks = 0, this.cache = new bG(RR), this.text = new pG(RR.state.doc), this.builder = new lG(this.cache, new aG(RR, RR.contentDOM), yR.E.iter(GR)), this.cache.reused.set(JR, 2), this.old = new MG(JR), this.reuseWalker = {
          skip: (RR, JR, GR) => {
            if (this.cache.add(RR), RR.isComposite()) return !1
          },
          enter: RR => this.cache.add(RR),
          leave: () => {},
          break: () => {}
        }
      }
      run(RR, JR) {
        let GR = JR && this.getCompositionContext(JR.text);
        for (let yR = 0, tR = 0, uR = 0;;) {
          let ZR = uR < RR.length ? RR[uR++] : null,
            qR = ZR ? ZR.fromA : this.old.root.length;
          if (qR > yR) {
            let RR = qR - yR;
            this.preserve(RR, !uR, !ZR), yR = qR, tR += RR
          }
          if (!ZR) break;
          JR && ZR.fromA <= JR.range.fromA && ZR.toA >= JR.range.toA ? (this.forward(ZR.fromA, JR.range.fromA, JR.range.fromA < JR.range.toA ? 1 : -1), this.emit(tR, JR.range.fromB), this.cache.clear(), this.builder.addComposition(JR, GR), this.text.skip(JR.range.toB - JR.range.fromB), this.forward(JR.range.fromA, ZR.toA), this.emit(JR.range.toB, ZR.toB)) : (this.forward(ZR.fromA, ZR.toA), this.emit(tR, ZR.toB)), tR = ZR.toB, yR = ZR.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(RR, JR, GR) {
        let yR = function(RR) {
            let JR = [];
            for (let GR = RR.parents.length; GR > 1; GR--) {
              let yR = GR == RR.parents.length ? RR.tile : RR.parents[GR].tile;
              yR instanceof WG && JR.push(yR.mark)
            }
            return JR
          }(this.old),
          tR = this.openMarks;
        this.old.advance(RR, GR ? 1 : -1, {
          skip: (RR, JR, GR) => {
            if (RR.isWidget())
              if (this.openWidget) this.builder.continueWidget(GR - JR);
              else {
                let uR = GR > 0 || JR < RR.length ? CG.of(RR.widget, this.view, GR - JR, 496 & RR.flags, this.cache.maybeReuse(RR)) : this.cache.reuse(RR);
                256 & uR.flags ? (uR.flags &= -2, this.builder.addBlockWidget(uR)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(uR, yR, tR), tR = yR.length)
              }
            else if (RR.isText()) this.builder.ensureLine(null), JR || GR != RR.length || this.cache.reused.has(RR) ? (this.cache.add(RR), this.builder.addText(RR.text.slice(JR, GR), yR, tR)) : this.builder.addText(RR.text, yR, tR, this.cache.reuse(RR)), tR = yR.length;
            else if (RR.isLine()) RR.flags &= -2, this.cache.reused.set(RR, 1), this.builder.addLine(RR);
            else if (RR instanceof XG) this.cache.add(RR);
            else {
              if (!(RR instanceof WG)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(RR, yR, tR), this.cache.reused.set(RR, 1), tR = yR.length
            }
            this.openWidget = !1
          },
          enter: RR => {
            RR.isLine() ? this.builder.addLineStart(RR.attrs, this.cache.maybeReuse(RR)) : (this.cache.add(RR), RR instanceof WG && yR.unshift(RR.mark)), this.openWidget = !1
          },
          leave: RR => {
            RR.isLine() ? yR.length && (yR.length = tR = 0) : RR instanceof WG && (yR.shift(), tR = Math.min(tR, yR.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(RR)
      }
      emit(RR, JR) {
        let GR = null,
          tR = this.builder,
          uR = 0,
          ZR = yR.E.spans(this.Cy, RR, JR, {
            point: (RR, JR, yR, ZR, qR, iR) => {
              if (yR instanceof HR) {
                if (this.disallowBlockEffectsFor[iR]) {
                  if (yR.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (JR > this.view.state.doc.lineAt(RR).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (uR = ZR.length, qR > ZR.length) tR.continueWidget(JR - RR);
                else {
                  let uR = yR.widget || (yR.block ? DG.block : DG.inline),
                    iR = function(RR) {
                      let JR = RR.isReplace ? (RR.startSide < 0 ? 64 : 0) | (RR.endSide > 0 ? 128 : 0) : RR.startSide > 0 ? 32 : 16;
                      RR.block && (JR |= 256);
                      return JR
                    }(yR),
                    fR = this.cache.findWidget(uR, JR - RR, iR) || CG.of(uR, this.view, JR - RR, iR);
                  yR.block ? (yR.startSide > 0 && tR.addLineStartIfNotCovered(GR), tR.addBlockWidget(fR)) : (tR.ensureLine(GR), tR.addInlineWidget(fR, ZR, qR))
                }
                GR = null
              } else GR = function(RR, JR) {
                let GR = JR.spec.attributes,
                  yR = JR.spec.class;
                if (!GR && !yR) return RR;
                RR || (RR = {
                  class: "cm-line"
                });
                GR && BR(GR, RR);
                yR && (RR.class += " " + yR);
                return RR
              }(GR, yR);
              JR > RR && this.text.skip(JR - RR)
            },
            span: (RR, JR, yR, uR) => {
              for (let ZR = RR; ZR < JR;) {
                let qR = this.text.next(Math.min(512, JR - ZR));
                null == qR ? (tR.addLineStartIfNotCovered(GR), tR.addBreak(), ZR++) : (tR.ensureLine(GR), tR.addText(qR, yR, ZR == RR ? uR : yR.length), ZR += qR.length), GR = null
              }
            }
          });
        tR.addLineStartIfNotCovered(GR), this.openWidget = ZR > uR, this.openMarks = ZR
      }
      forward(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        JR - RR <= 10 ? this.old.advance(JR - RR, GR, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(JR - RR - 10, -1), this.old.advance(5, GR, this.reuseWalker))
      }
      getCompositionContext(RR) {
        let JR = [],
          GR = null;
        for (let yR = RR.parentNode;; yR = yR.parentNode) {
          let RR = wG.get(yR);
          if (yR == this.view.contentDOM) break;
          RR instanceof WG ? JR.push(RR) : (null === RR || void 0 === RR ? void 0 : RR.isLine()) ? GR = RR : RR instanceof LG || ("DIV" != yR.nodeName || GR || yR == this.view.contentDOM ? GR || JR.push(WG.of(new NR({
            tagName: yR.nodeName.toLowerCase(),
            attributes: bR(yR)
          }), yR)) : GR = new nG(yR, xG))
        }
        return {
          line: GR,
          marks: JR
        }
      }
    }

    function OG(RR, JR) {
      let GR = RR => {
        for (let yR of RR.children)
          if ((JR ? yR.isText() : yR.length) || GR(yR)) return !0;
        return !1
      };
      return GR(RR)
    }
    const xG = {
      class: "cm-line"
    };

    function NG(RR) {
      let JR = wG.get(RR);
      return JR && JR.setDOM(RR.cloneNode()), RR
    }
    class DG extends vR {
      constructor(RR) {
        super(), this.tag = RR
      }
      eq(RR) {
        return RR.tag == this.tag
      }
      toDOM() {
        return document.createElement(this.tag)
      }
      updateDOM(RR) {
        return RR.nodeName.toLowerCase() == this.tag
      }
      get isHidden() {
        return !0
      }
    }
    DG.inline = new DG("span"), DG.block = new DG("div");
    const HG = new class extends vR {
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
    class oG {
      constructor(RR) {
        this.view = RR, this.Cy = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = xR.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new aG(RR, RR.contentDOM), this.updateInner([new fG(0, 0, 0, RR.state.doc.length)], null)
      }
      update(RR) {
        var JR;
        let GR = RR.changedRanges;
        this.minWidth > 0 && GR.length && (GR.every((RR => {
          let {
            fromA: JR,
            toA: GR
          } = RR;
          return GR < this.minWidthFrom || JR > this.minWidthTo
        })) ? (this.minWidthFrom = RR.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = RR.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(RR);
        let tR = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (JR = this.domChanged) || void 0 === JR ? void 0 : JR.newSel) ? tR = this.domChanged.newSel.head : function(RR, JR) {
          let GR = !1;
          JR && RR.iterChangedRanges(((RR, yR) => {
            RR < JR.to && yR > JR.from && (GR = !0)
          }));
          return GR
        }(RR.changes, this.hasComposition) || RR.selectionSet || (tR = RR.state.selection.main.head));
        let uR = tR > -1 ? function(RR, JR, GR) {
          let yR = PG(RR, GR);
          if (!yR) return null;
          let {
            node: tR,
            from: uR,
            to: ZR
          } = yR, qR = tR.nodeValue;
          if (/[\n\r]/.test(qR)) return null;
          if (RR.state.doc.sliceString(yR.from, yR.to) != qR) return null;
          let iR = JR.invertedDesc;
          return {
            range: new fG(iR.mapPos(uR), iR.mapPos(ZR), uR, ZR),
            text: tR
          }
        }(this.view, RR.changes, tR) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: JR,
            to: yR
          } = this.hasComposition;
          GR = new fG(JR, yR, RR.changes.mapPos(JR, -1), RR.changes.mapPos(yR, 1)).addToSet(GR.slice())
        }
        this.hasComposition = uR ? {
          from: uR.range.fromB,
          to: uR.range.toB
        } : null, (MR.ie || MR.chrome) && !uR && RR && RR.state.doc.lines != RR.startState.doc.lines && (this.forceSelection = !0);
        let ZR = this.Cy,
          qR = this.blockWrappers;
        this.updateDeco();
        let iR = function(RR, JR, GR) {
          let tR = new IG;
          return yR.E.compare(RR, JR, GR, tR), tR.changes
        }(ZR, this.Cy, RR.changes);
        iR.length && (GR = fG.extendWithRanges(GR, iR));
        let fR = function(RR, JR, GR) {
          let tR = new mG;
          return yR.E.compare(RR, JR, GR, tR), tR.changes
        }(qR, this.blockWrappers, RR.changes);
        return fR.length && (GR = fG.extendWithRanges(GR, fR)), uR && !GR.some((RR => RR.fromA <= uR.range.fromA && RR.toA >= uR.range.toA)) && (GR = uR.range.addToSet(GR.slice())), !(2 & this.tile.flags && 0 == GR.length) && (this.updateInner(GR, uR), RR.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(RR, JR) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: GR
        } = this.view;
        GR.ignore((() => {
          if (JR || RR.length) {
            let GR = this.tile,
              yR = new vG(this.view, GR, this.blockWrappers, this.Cy, this.dynamicDecorationMap);
            JR && wG.get(JR.text) && yR.cache.reused.set(wG.get(JR.text), 2), this.tile = yR.run(RR, JR), cG(GR, yR.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let yR = MR.chrome || MR.ios ? {
            node: GR.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(yR), !yR || !yR.written && GR.selectionRange.focusNode == yR.node && this.tile.dom.contains(yR.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let yR = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let tR of this.tile.children) tR.isWidget() && tR.widget instanceof zG && yR.push(tR.dom);
        GR.updateGaps(yR)
      }
      updateEditContextFormatting(RR) {
        this.editContextFormatting = this.editContextFormatting.map(RR.changes);
        for (let JR of RR.transactions)
          for (let RR of JR.effects) RR.is(dJ) && (this.editContextFormatting = RR.value)
      }
      updateSelection() {
        let RR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: JR
        } = this.tile, GR = this.view.root.activeElement, yR = GR == JR, tR = !yR && !(this.view.state.facet(YJ) || JR.tabIndex > -1) && zR(JR, this.view.observer.selectionRange) && !(GR && JR.contains(GR));
        if (!(yR || RR || tR)) return;
        let uR = this.forceSelection;
        this.forceSelection = !1;
        let ZR, qR, iR = this.view.state.selection.main;
        if (iR.empty ? qR = ZR = this.inlineDOMNearPos(iR.anchor, iR.assoc || 1) : (qR = this.inlineDOMNearPos(iR.head, iR.head == iR.from ? 1 : -1), ZR = this.inlineDOMNearPos(iR.anchor, iR.anchor == iR.from ? 1 : -1)), MR.gecko && iR.empty && !this.hasComposition && (1 == (fR = ZR).node.nodeType && fR.node.firstChild && (0 == fR.offset || "false" == fR.node.childNodes[fR.offset - 1].contentEditable) && (fR.offset == fR.node.childNodes.length || "false" == fR.node.childNodes[fR.offset].contentEditable))) {
          let RR = document.createTextNode("");
          this.view.observer.ignore((() => ZR.node.insertBefore(RR, ZR.node.childNodes[ZR.offset] || null))), ZR = qR = new iJ(RR, 0), uR = !0
        }
        var fR;
        let VR = this.view.observer.selectionRange;
        !uR && VR.focusNode && (jR(ZR.node, ZR.offset, VR.anchorNode, VR.anchorOffset) && jR(qR.node, qR.offset, VR.focusNode, VR.focusOffset) || this.suppressWidgetCursorChange(VR, iR)) || (this.view.observer.ignore((() => {
          MR.android && MR.chrome && JR.contains(VR.focusNode) && function(RR, JR) {
            for (let GR = RR; GR && GR != JR; GR = GR.assignedSlot || GR.parentNode)
              if (1 == GR.nodeType && "false" == GR.contentEditable) return !0;
            return !1
          }(VR.focusNode, JR) && (JR.blur(), JR.focus({
            preventScroll: !0
          }));
          let RR = IR(this.view.root);
          if (RR)
            if (iR.empty) {
              if (MR.gecko) {
                let RR = (yR = ZR.node, uR = ZR.offset, 1 != yR.nodeType ? 0 : (uR && "false" == yR.childNodes[uR - 1].contentEditable ? 1 : 0) | (uR < yR.childNodes.length && "false" == yR.childNodes[uR].contentEditable ? 2 : 0));
                if (RR && 3 != RR) {
                  let JR = (1 == RR ? ZJ : qJ)(ZR.node, ZR.offset);
                  JR && (ZR = new iJ(JR.node, JR.offset))
                }
              }
              RR.collapse(ZR.node, ZR.offset), null != iR.bidiLevel && void 0 !== RR.caretBidiLevel && (RR.caretBidiLevel = iR.bidiLevel)
            } else if (RR.extend) {
            RR.collapse(ZR.node, ZR.offset);
            try {
              RR.extend(qR.node, qR.offset)
            } catch (fR) {}
          } else {
            let JR = document.createRange();
            iR.anchor > iR.head && ([ZR, qR] = [qR, ZR]), JR.setEnd(qR.node, qR.offset), JR.setStart(ZR.node, ZR.offset), RR.removeAllRanges(), RR.addRange(JR)
          } else;
          var yR, uR;
          tR && this.view.root.activeElement == JR && (JR.blur(), GR && GR.focus())
        })), this.view.observer.setSelectionRange(ZR, qR)), this.impreciseAnchor = ZR.precise ? null : new iJ(VR.anchorNode, VR.anchorOffset), this.impreciseHead = qR.precise ? null : new iJ(VR.focusNode, VR.focusOffset)
      }
      suppressWidgetCursorChange(RR, JR) {
        return this.hasComposition && JR.empty && jR(RR.focusNode, RR.focusOffset, RR.anchorNode, RR.anchorOffset) && this.posFromDOM(RR.focusNode, RR.focusOffset) == JR.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: RR
        } = this, JR = RR.state.selection.main, GR = IR(RR.root), {
          anchorNode: yR,
          anchorOffset: tR
        } = RR.observer.selectionRange;
        if (!GR || !JR.empty || !JR.assoc || !GR.modify) return;
        let uR = this.lineAt(JR.head, JR.assoc);
        if (!uR) return;
        let ZR = uR.posAtStart;
        if (JR.head == ZR || JR.head == ZR + uR.length) return;
        let qR = this.coordsAt(JR.head, -1),
          iR = this.coordsAt(JR.head, 1);
        if (!qR || !iR || qR.bottom > iR.top) return;
        let fR = this.domAtPos(JR.head + JR.assoc, JR.assoc);
        GR.collapse(fR.node, fR.offset), GR.modify("move", JR.assoc < 0 ? "forward" : "backward", "lineboundary"), RR.observer.readSelectionRange();
        let VR = RR.observer.selectionRange;
        RR.docView.posFromDOM(VR.anchorNode, VR.anchorOffset) != JR.from && GR.collapse(yR, tR)
      }
      posFromDOM(RR, JR) {
        let GR = this.tile.nearest(RR);
        if (!GR) return 2 & this.tile.dom.compareDocumentPosition(RR) ? 0 : this.view.state.doc.length;
        let yR = GR.posAtStart;
        if (!GR.isComposite()) return GR.isText() ? RR == GR.dom ? yR + JR : yR + (JR ? GR.length : 0) : yR;
        {
          let tR;
          if (RR == GR.dom) tR = GR.dom.childNodes[JR];
          else {
            let yR = 0 == kR(RR) ? 0 : 0 == JR ? -1 : 1;
            for (;;) {
              let JR = RR.parentNode;
              if (JR == GR.dom) break;
              0 == yR && JR.firstChild != JR.lastChild && (yR = RR == JR.firstChild ? -1 : 1), RR = JR
            }
            tR = yR < 0 ? RR : RR.nextSibling
          }
          if (tR == GR.dom.firstChild) return yR;
          for (; tR && !wG.get(tR);) tR = tR.nextSibling;
          if (!tR) return yR + GR.length;
          for (let RR = 0, JR = yR;; RR++) {
            let yR = GR.children[RR];
            if (yR.dom == tR) return JR;
            JR += yR.length + yR.breakAfter
          }
        }
      }
      domAtPos(RR, JR) {
        let {
          tile: GR,
          offset: yR
        } = this.tile.resolveBlock(RR, JR);
        return GR.isWidget() ? GR.domPosFor(RR, JR) : GR.domIn(yR, JR)
      }
      inlineDOMNearPos(RR, JR) {
        let GR, yR, tR = -1,
          uR = !1,
          ZR = -1,
          qR = !1;
        return this.tile.blockTiles(((JR, iR) => {
          if (JR.isWidget()) {
            if (32 & JR.flags && iR >= RR) return !0;
            16 & JR.flags && (uR = !0)
          } else {
            let fR = iR + JR.length;
            if (iR <= RR && (GR = JR, tR = RR - iR, uR = fR < RR), fR >= RR && !yR && (yR = JR, ZR = RR - iR, qR = iR > RR), iR > RR && yR) return !0
          }
        })), GR || yR ? (uR && yR ? GR = null : qR && GR && (yR = null), GR && JR < 0 || !yR ? GR.domIn(tR, JR) : yR.domIn(ZR, JR)) : this.domAtPos(RR, JR)
      }
      coordsAt(RR, JR) {
        let {
          tile: GR,
          offset: yR
        } = this.tile.resolveBlock(RR, JR);
        return GR.isWidget() ? GR.widget instanceof zG ? null : GR.coordsInWidget(yR, JR, !0) : GR.coordsIn(yR, JR)
      }
      lineAt(RR, JR) {
        let {
          tile: GR
        } = this.tile.resolveBlock(RR, JR);
        return GR.isLine() ? GR : null
      }
      coordsForChar(RR) {
        let {
          tile: JR,
          offset: GR
        } = this.tile.resolveBlock(RR, 1);
        if (!JR.isLine()) return null;
        return function RR(JR, GR) {
          if (JR.isComposite())
            for (let yR of JR.children) {
              if (yR.length >= GR) {
                let JR = RR(yR, GR);
                if (JR) return JR
              }
              if ((GR -= yR.length) < 0) break
            } else if (JR.isText() && GR < JR.length) {
              let RR = (0, yR.eb)(JR.text, GR);
              if (RR == GR) return null;
              let tR = yJ(JR.dom, GR, RR).getClientRects();
              for (let JR = 0; JR < tR.length; JR++) {
                let RR = tR[JR];
                if (JR == tR.length - 1 || RR.top < RR.bottom && RR.left < RR.right) return RR
              }
            } return null
        }(JR, GR)
      }
      measureVisibleLineHeights(RR) {
        let JR = [],
          {
            from: GR,
            to: yR
          } = RR,
          tR = this.view.contentDOM.clientWidth,
          uR = tR > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          ZR = -1,
          qR = this.view.textDirection == fJ.LTR,
          iR = 0,
          fR = (RR, VR, KR) => {
            for (let wR = 0; wR < RR.children.length && !(VR > yR); wR++) {
              let yR = RR.children[wR],
                rR = VR + yR.length,
                eR = yR.dom.getBoundingClientRect(),
                {
                  height: aR
                } = eR;
              if (KR && !wR && (iR += eR.top - KR.top), yR instanceof LG) rR > GR && fR(yR, VR, eR);
              else if (VR >= GR && (iR > 0 && JR.push(-iR), JR.push(aR + iR), iR = 0, uR)) {
                let RR = yR.dom.lastChild,
                  JR = RR ? SR(RR) : [];
                if (JR.length) {
                  let RR = JR[JR.length - 1],
                    GR = qR ? RR.right - eR.left : eR.right - RR.left;
                  GR > ZR && (ZR = GR, this.minWidth = tR, this.minWidthFrom = VR, this.minWidthTo = rR)
                }
              }
              KR && wR == RR.children.length - 1 && (iR += KR.bottom - eR.bottom), VR = rR + yR.breakAfter
            }
          };
        return fR(this.tile, 0, null), JR
      }
      textDirectionAt(RR) {
        let {
          tile: JR
        } = this.tile.resolveBlock(RR, 1);
        return "rtl" == getComputedStyle(JR.dom).direction ? fJ.RTL : fJ.LTR
      }
      measureTextSize() {
        let RR = this.tile.blockTiles((RR => {
          if (RR.isLine() && RR.children.length && RR.length <= 20) {
            let JR, GR = 0;
            for (let yR of RR.children) {
              if (!yR.isText() || /[^ -~]/.test(yR.text)) return;
              let RR = SR(yR.dom);
              if (1 != RR.length) return;
              GR += RR[0].width, JR = RR[0].height
            }
            if (GR) return {
              lineHeight: RR.dom.getBoundingClientRect().height,
              charWidth: GR / RR.length,
              textHeight: JR
            }
          }
        }));
        if (RR) return RR;
        let JR, GR, yR, tR = document.createElement("div");
        return tR.className = "cm-line", tR.style.width = "99999px", tR.style.position = "absolute", tR.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(tR);
          let RR = SR(tR.firstChild)[0];
          JR = tR.getBoundingClientRect().height, GR = RR && RR.width ? RR.width / 27 : 7, yR = RR && RR.height ? RR.height : JR, tR.remove()
        })), {
          lineHeight: JR,
          charWidth: GR,
          textHeight: yR
        }
      }
      computeBlockGapDeco() {
        let RR = [],
          JR = this.view.viewState;
        for (let GR = 0, yR = 0;; yR++) {
          let tR = yR == JR.viewports.length ? null : JR.viewports[yR],
            uR = tR ? tR.from - 1 : this.view.state.doc.length;
          if (uR > GR) {
            let yR = (JR.lineBlockAt(uR).bottom - JR.lineBlockAt(GR).top) / this.view.scaleY;
            RR.push(xR.replace({
              widget: new zG(yR),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(GR, uR))
          }
          if (!tR) break;
          GR = tR.to + 1
        }
        return xR.set(RR)
      }
      updateDeco() {
        let RR = 1,
          JR = this.view.state.facet(RG).map((JR => (this.dynamicDecorationMap[RR++] = "function" == typeof JR) ? JR(this.view) : JR)),
          GR = !1,
          tR = this.view.state.facet(GG).map(((RR, JR) => {
            let yR = "function" == typeof RR;
            return yR && (GR = !0), yR ? RR(this.view) : RR
          }));
        for (tR.length && (this.dynamicDecorationMap[RR++] = GR, JR.push(yR.E.join(tR))), this.Cy = [this.editContextFormatting, ...JR, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; RR < this.Cy.length;) this.dynamicDecorationMap[RR++] = !1;
        this.blockWrappers = this.view.state.facet(JG).map((RR => "function" == typeof RR ? RR(this.view) : RR))
      }
      scrollIntoView(RR) {
        var JR;
        if (RR.isSnapshot) {
          let JR = this.view.viewState.lineBlockAt(RR.range.head);
          return this.view.scrollDOM.scrollTop = JR.top - RR.yMargin, void(this.view.scrollDOM.scrollLeft = RR.xMargin)
        }
        for (let VR of this.view.state.facet(zJ)) try {
          if (VR(this.view, RR.range, RR)) return !0
        } catch (fR) {
          EJ(this.view.state, fR, "scroll handler")
        }
        let GR, {
            range: yR
          } = RR,
          tR = this.coordsAt(yR.head, null !== (JR = yR.assoc) && void 0 !== JR ? JR : yR.empty ? 0 : yR.head > yR.anchor ? -1 : 1);
        if (!tR) return;
        !yR.empty && (GR = this.coordsAt(yR.anchor, yR.anchor > yR.head ? -1 : 1)) && (tR = {
          left: Math.min(tR.left, GR.left),
          top: Math.min(tR.top, GR.top),
          right: Math.max(tR.right, GR.right),
          bottom: Math.max(tR.bottom, GR.bottom)
        });
        let uR = qG(this.view),
          ZR = {
            left: tR.left - uR.left,
            top: tR.top - uR.top,
            right: tR.right + uR.right,
            bottom: tR.bottom + uR.bottom
          },
          {
            offsetWidth: qR,
            offsetHeight: iR
          } = this.view.scrollDOM;
        if (function(RR, JR, GR, yR, tR, uR, ZR, qR) {
            let iR = RR.ownerDocument,
              fR = iR.defaultView || window;
            for (let VR = RR, KR = !1; VR && !KR;)
              if (1 == VR.nodeType) {
                let RR, wR = VR == iR.body,
                  rR = 1,
                  eR = 1;
                if (wR) RR = FR(fR);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(VR).position) && (KR = !0), VR.scrollHeight <= VR.clientHeight && VR.scrollWidth <= VR.clientWidth) {
                    VR = VR.assignedSlot || VR.parentNode;
                    continue
                  }
                  let JR = VR.getBoundingClientRect();
                  ({
                    scaleX: rR,
                    scaleY: eR
                  } = TR(VR, JR)), RR = {
                    left: JR.left,
                    right: JR.left + VR.clientWidth * rR,
                    top: JR.top,
                    bottom: JR.top + VR.clientHeight * eR
                  }
                }
                let aR = 0,
                  LR = 0;
                if ("nearest" == tR) JR.top < RR.top + ZR ? (LR = JR.top - (RR.top + ZR), GR > 0 && JR.bottom > RR.bottom + LR && (LR = JR.bottom - RR.bottom + ZR)) : JR.bottom > RR.bottom - ZR && (LR = JR.bottom - RR.bottom + ZR, GR < 0 && JR.top - LR < RR.top && (LR = JR.top - (RR.top + ZR)));
                else {
                  let yR = JR.bottom - JR.top,
                    uR = RR.bottom - RR.top;
                  LR = ("center" == tR && yR <= uR ? JR.top + yR / 2 - uR / 2 : "start" == tR || "center" == tR && GR < 0 ? JR.top - ZR : JR.bottom - uR + ZR) - RR.top
                }
                if ("nearest" == yR ? JR.left < RR.left + uR ? (aR = JR.left - (RR.left + uR), GR > 0 && JR.right > RR.right + aR && (aR = JR.right - RR.right + uR)) : JR.right > RR.right - uR && (aR = JR.right - RR.right + uR, GR < 0 && JR.left < RR.left + aR && (aR = JR.left - (RR.left + uR))) : aR = ("center" == yR ? JR.left + (JR.right - JR.left) / 2 - (RR.right - RR.left) / 2 : "start" == yR == qR ? JR.left - uR : JR.right - (RR.right - RR.left) + uR) - RR.left, aR || LR)
                  if (wR) fR.scrollBy(aR, LR);
                  else {
                    let RR = 0,
                      GR = 0;
                    if (LR) {
                      let RR = VR.scrollTop;
                      VR.scrollTop += LR / eR, GR = (VR.scrollTop - RR) * eR
                    }
                    if (aR) {
                      let JR = VR.scrollLeft;
                      VR.scrollLeft += aR / rR, RR = (VR.scrollLeft - JR) * rR
                    }
                    JR = {
                      left: JR.left - RR,
                      top: JR.top - GR,
                      right: JR.right - RR,
                      bottom: JR.bottom - GR
                    }, RR && Math.abs(RR - aR) < 1 && (yR = "nearest"), GR && Math.abs(GR - LR) < 1 && (tR = "nearest")
                  } if (wR) break;
                (JR.top < RR.top || JR.bottom > RR.bottom || JR.left < RR.left || JR.right > RR.right) && (JR = {
                  left: Math.max(JR.left, RR.left),
                  right: Math.min(JR.right, RR.right),
                  top: Math.max(JR.top, RR.top),
                  bottom: Math.min(JR.bottom, RR.bottom)
                }), VR = VR.assignedSlot || VR.parentNode
              } else {
                if (11 != VR.nodeType) break;
                VR = VR.host
              }
          }(this.view.scrollDOM, ZR, yR.head < yR.anchor ? -1 : 1, RR.x, RR.y, Math.max(Math.min(RR.xMargin, qR), -qR), Math.max(Math.min(RR.yMargin, iR), -iR), this.view.textDirection == fJ.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (tR.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || tR.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let RR = this.view.docView.lineAt(yR.head, 1);
          RR && RR.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(RR) {
        let JR = RR => RR.isWidget() || RR.children.some(JR);
        return JR(this.tile.resolveBlock(RR, 1).tile)
      }
      destroy() {
        cG(this.tile)
      }
    }

    function cG(RR, JR) {
      let GR = null === JR || void 0 === JR ? void 0 : JR.get(RR);
      if (1 != GR) {
        null == GR && RR.destroy();
        for (let GR of RR.children) cG(GR, JR)
      }
    }

    function PG(RR, JR) {
      let GR = RR.observer.selectionRange;
      if (!GR.focusNode) return null;
      let yR = ZJ(GR.focusNode, GR.focusOffset),
        tR = qJ(GR.focusNode, GR.focusOffset),
        uR = yR || tR;
      if (tR && yR && tR.node != yR.node) {
        let JR = wG.get(tR.node);
        if (!JR || JR.isText() && JR.text != tR.node.nodeValue) uR = tR;
        else if (RR.docView.lastCompositionAfterCursor) {
          let RR = wG.get(yR.node);
          !RR || RR.isText() && RR.text != yR.node.nodeValue || (uR = tR)
        }
      }
      if (RR.docView.lastCompositionAfterCursor = uR != yR, !uR) return null;
      let ZR = JR - uR.offset;
      return {
        from: ZR,
        to: ZR + uR.node.nodeValue.length,
        node: uR.node
      }
    }
    let IG = class {
      constructor() {
        this.changes = []
      }
      compareRange(RR, JR) {
        cR(RR, JR, this.changes)
      }
      comparePoint(RR, JR) {
        cR(RR, JR, this.changes)
      }
      boundChange(RR) {
        cR(RR, RR, this.changes)
      }
    };
    class mG {
      constructor() {
        this.changes = []
      }
      compareRange(RR, JR) {
        cR(RR, JR, this.changes)
      }
      comparePoint() {}
      boundChange(RR) {
        cR(RR, RR, this.changes)
      }
    }
    class zG extends vR {
      constructor(RR) {
        super(), this.height = RR
      }
      toDOM() {
        let RR = document.createElement("div");
        return RR.className = "cm-gap", this.updateDOM(RR), RR
      }
      eq(RR) {
        return RR.height == this.height
      }
      updateDOM(RR) {
        return RR.style.height = this.height + "px", !0
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

    function SG(RR, JR, GR) {
      let yR = RR.lineBlockAt(JR);
      if (Array.isArray(yR.type)) {
        let RR;
        for (let tR of yR.type) {
          if (tR.from > JR) break;
          if (!(tR.to < JR)) {
            if (tR.from < JR && tR.to > JR) return tR;
            RR && (tR.type != OR.Text || RR.type == tR.type && !(GR < 0 ? tR.from < JR : tR.to > JR)) || (RR = tR)
          }
        }
        return RR || yR
      }
      return yR
    }

    function jG(RR, JR, GR, yR) {
      let tR = RR.state.doc.lineAt(JR.head),
        uR = RR.bidiSpans(tR),
        ZR = RR.textDirectionAt(tR.from);
      for (let qR = JR, iR = null;;) {
        let JR = gJ(tR, uR, ZR, qR, GR),
          fR = pJ;
        if (!JR) {
          if (tR.number == (GR ? RR.state.doc.lines : 1)) return qR;
          fR = "\n", tR = RR.state.doc.line(tR.number + (GR ? 1 : -1)), uR = RR.bidiSpans(tR), JR = RR.visualLineSide(tR, !GR)
        }
        if (iR) {
          if (!iR(fR)) return qR
        } else {
          if (!yR) return JR;
          iR = yR(fR)
        }
        qR = JR
      }
    }

    function dG(RR, JR, GR) {
      for (;;) {
        let yR = 0;
        for (let tR of RR) tR.between(JR - 1, JR + 1, ((RR, tR, uR) => {
          if (JR > RR && JR < tR) {
            let uR = yR || GR || (JR - RR < tR - JR ? -1 : 1);
            JR = uR < 0 ? RR : tR, yR = uR
          }
        }));
        if (!yR) return JR
      }
    }

    function EG(RR, JR) {
      let GR = null;
      for (let tR = 0; tR < JR.WL.length; tR++) {
        let uR = JR.WL[tR],
          ZR = null;
        if (uR.empty) {
          let JR = dG(RR, uR.from, 0);
          JR != uR.from && (ZR = yR.k.cursor(JR, -1))
        } else {
          let JR = dG(RR, uR.from, -1),
            GR = dG(RR, uR.to, 1);
          JR == uR.from && GR == uR.to || (ZR = yR.k.range(uR.from == uR.anchor ? JR : GR, uR.from == uR.head ? JR : GR))
        }
        ZR && (GR || (GR = JR.WL.slice()), GR[tR] = ZR)
      }
      return GR ? yR.k.create(GR, JR.mainIndex) : JR
    }

    function YG(RR, JR, GR) {
      let tR = dG(RR.state.facet(yG).map((JR => JR(RR))), GR.from, JR.head > GR.from ? -1 : 1);
      return tR == GR.from ? GR : yR.k.cursor(tR, tR < GR.from ? 1 : -1)
    }
    class kG {
      constructor(RR, JR) {
        this.pos = RR, this.assoc = JR
      }
    }

    function QG(RR, JR, GR, tR) {
      let uR, ZR = RR.contentDOM.getBoundingClientRect(),
        qR = ZR.top + RR.viewState.paddingTop,
        {
          x: iR,
          y: fR
        } = JR,
        VR = fR - qR;
      for (;;) {
        if (VR < 0) return new kG(0, 1);
        if (VR > RR.viewState.docHeight) return new kG(RR.state.doc.length, -1);
        if (uR = RR.elementAtHeight(VR), null == tR) break;
        if (uR.type == OR.Text) {
          if (tR < 0 ? uR.to < RR.viewport.from : uR.from > RR.viewport.to) break;
          let JR = RR.docView.coordsAt(tR < 0 ? uR.from : uR.to, tR > 0 ? -1 : 1);
          if (JR && (tR < 0 ? JR.top <= VR + qR : JR.bottom >= VR + qR)) break
        }
        let JR = RR.viewState.heightOracle.textHeight / 2;
        VR = tR > 0 ? uR.bottom + JR : uR.top - JR
      }
      if (RR.viewport.from >= uR.to || RR.viewport.to <= uR.from) {
        if (GR) return null;
        if (uR.type == OR.Text) {
          let JR = function(RR, JR, GR, tR, uR) {
            let ZR = Math.round((tR - JR.left) * RR.defaultCharacterWidth);
            if (RR.lineWrapping && GR.height > 1.5 * RR.defaultLineHeight) {
              let JR = RR.viewState.heightOracle.textHeight;
              ZR += Math.floor((uR - GR.top - .5 * (RR.defaultLineHeight - JR)) / JR) * RR.viewState.heightOracle.lineLength
            }
            let qR = RR.state.sliceDoc(GR.from, GR.to);
            return GR.from + (0, yR.hb)(qR, ZR, RR.state.tabSize)
          }(RR, ZR, uR, iR, fR);
          return new kG(JR, JR == uR.from ? 1 : -1)
        }
      }
      if (uR.type != OR.Text) return VR < (uR.top + uR.bottom) / 2 ? new kG(uR.from, 1) : new kG(uR.to, -1);
      let KR = RR.docView.lineAt(uR.from, 2);
      return KR && KR.length == uR.length || (KR = RR.docView.lineAt(uR.from, -2)), new FG(RR, iR, fR, RR.textDirectionAt(uR.from)).scanTile(KR, uR.from)
    }
    class FG {
      constructor(RR, JR, GR, yR) {
        this.view = RR, this.x = JR, this.y = GR, this.baseDir = yR, this.line = null, this.spans = null
      }
      bidiSpansAt(RR) {
        return (!this.line || this.line.from > RR || this.line.to < RR) && (this.line = this.view.state.doc.lineAt(RR), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(RR, JR) {
        let {
          line: GR,
          spans: yR
        } = this.bidiSpansAt(RR);
        return yR[WJ.find(yR, RR - GR.from, -1, JR)].level == this.baseDir
      }
      dirAt(RR, JR) {
        let {
          line: GR,
          spans: yR
        } = this.bidiSpansAt(RR);
        return yR[WJ.find(yR, RR - GR.from, -1, JR)].dir
      }
      bidiIn(RR, JR) {
        let {
          spans: GR,
          line: yR
        } = this.bidiSpansAt(RR);
        return GR.length > 1 || GR.length && (GR[0].level != this.baseDir || GR[0].to + yR.from < JR)
      }
      scan(RR, JR) {
        let GR, yR, tR, uR = 0,
          ZR = RR.length - 1,
          qR = new Set,
          iR = this.bidiIn(RR[0], RR[ZR]),
          fR = -1,
          VR = 1e9;
        RR: for (; uR < ZR;) {
          let KR = ZR - uR,
            wR = uR + ZR >> 1;
          JR: if (qR.has(wR)) {
            let RR = uR + Math.floor(Math.random() * KR);
            for (let JR = 0; JR < KR; JR++) {
              if (!qR.has(RR)) {
                wR = RR;
                break JR
              }
              RR++, RR == ZR && (RR = uR)
            }
            break RR
          } qR.add(wR);
          let rR = JR(wR);
          if (rR)
            for (let JR = 0; JR < rR.length; JR++) {
              let qR = rR[JR],
                KR = 0;
              if (!(0 == qR.width && rR.length > 1)) {
                if (qR.bottom < this.y)(!GR || GR.bottom < qR.bottom) && (GR = qR), KR = 1;
                else if (qR.top > this.y)(!yR || yR.top > qR.top) && (yR = qR), KR = -1;
                else {
                  let RR = qR.left > this.x ? this.x - qR.left : qR.right < this.x ? this.x - qR.right : 0,
                    JR = Math.abs(RR);
                  JR < VR && (fR = wR, VR = JR, tR = qR), RR && (KR = RR < 0 == (this.baseDir == fJ.LTR) ? -1 : 1)
                } - 1 != KR || iR && !this.baseDirAt(RR[wR], 1) ? 1 != KR || iR && !this.baseDirAt(RR[wR + 1], -1) || (uR = wR + 1) : ZR = wR
              }
            }
        }
        if (!tR) {
          let tR = GR && (!yR || this.y - GR.bottom < yR.top - this.y) ? GR : yR;
          return this.y = (tR.top + tR.bottom) / 2, this.scan(RR, JR)
        }
        if (VR) {
          if (GR && GR.bottom > tR.top) return this.y = GR.bottom - 1, this.scan(RR, JR);
          if (yR && yR.top < tR.bottom) return this.y = yR.top + 1, this.scan(RR, JR)
        }
        let KR = (iR ? this.dirAt(RR[fR], 1) : this.baseDir) == fJ.LTR;
        return {
          i: fR,
          after: this.x > (tR.left + tR.right) / 2 == KR
        }
      }
      scanText(RR, JR) {
        let GR = [];
        for (let uR = 0; uR < RR.length; uR = (0, yR.eb)(RR.text, uR)) GR.push(JR + uR);
        GR.push(JR + RR.length);
        let tR = this.scan(GR, (yR => {
          let tR = GR[yR] - JR,
            uR = GR[yR + 1] - JR;
          return yJ(RR.dom, tR, uR).getClientRects()
        }));
        return tR.after ? new kG(GR[tR.i + 1], -1) : new kG(GR[tR.i], 1)
      }
      scanTile(RR, JR) {
        if (!RR.length) return new kG(JR, 1);
        if (1 == RR.children.length) {
          let GR = RR.children[0];
          if (GR.isText()) return this.scanText(GR, JR);
          if (GR.isComposite()) return this.scanTile(GR, JR)
        }
        let GR = [JR];
        for (let ZR = 0, qR = JR; ZR < RR.children.length; ZR++) GR.push(qR += RR.children[ZR].length);
        let yR = this.scan(GR, (JR => {
            let GR = RR.children[JR];
            return 48 & GR.flags ? null : (1 == GR.dom.nodeType ? GR.dom : yJ(GR.dom, 0, GR.length)).getClientRects()
          })),
          tR = RR.children[yR.i],
          uR = GR[yR.i];
        return tR.isText() ? this.scanText(tR, uR) : tR.isComposite() ? this.scanTile(tR, uR) : yR.after ? new kG(GR[yR.i + 1], -1) : new kG(uR, 1)
      }
    }
    const TG = "\uffff";
    class sG {
      constructor(RR, JR) {
        this.points = RR, this.view = JR, this.text = "", this.lineSeparator = JR.state.facet(yR.o.lineSeparator)
      }
      append(RR) {
        this.text += RR
      }
      lineBreak() {
        this.text += TG
      }
      readRange(RR, JR) {
        if (!RR) return this;
        let GR = RR.parentNode;
        for (let yR = RR;;) {
          this.findPointBefore(GR, yR);
          let RR = this.text.length;
          this.readNode(yR);
          let tR = wG.get(yR),
            uR = yR.nextSibling;
          if (uR == JR) {
            (null === tR || void 0 === tR ? void 0 : tR.breakAfter) && !uR && GR != this.view.contentDOM && this.lineBreak();
            break
          }
          let ZR = wG.get(uR);
          (tR && ZR ? tR.breakAfter : (tR ? tR.breakAfter : ER(yR)) || ER(uR) && ("BR" != yR.nodeName || (null === tR || void 0 === tR ? void 0 : tR.isWidget())) && this.text.length > RR) && !Ry(uR, JR) && this.lineBreak(), yR = uR
        }
        return this.findPointBefore(GR, JR), this
      }
      readTextNode(RR) {
        let JR = RR.nodeValue;
        for (let GR of this.points) GR.node == RR && (GR.pos = this.text.length + Math.min(GR.offset, JR.length));
        for (let GR = 0, yR = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let tR, uR = -1,
            ZR = 1;
          if (this.lineSeparator ? (uR = JR.indexOf(this.lineSeparator, GR), ZR = this.lineSeparator.length) : (tR = yR.exec(JR)) && (uR = tR.index, ZR = tR[0].length), this.append(JR.slice(GR, uR < 0 ? JR.length : uR)), uR < 0) break;
          if (this.lineBreak(), ZR > 1)
            for (let JR of this.points) JR.node == RR && JR.pos > this.text.length && (JR.pos -= ZR - 1);
          GR = uR + ZR
        }
      }
      readNode(RR) {
        let JR = wG.get(RR),
          GR = JR && JR.overrideDOMText;
        if (null != GR) {
          this.findPointInside(RR, GR.length);
          for (let RR = GR.iter(); !RR.next().done;) RR.lineBreak ? this.lineBreak() : this.append(RR.value)
        } else 3 == RR.nodeType ? this.readTextNode(RR) : "BR" == RR.nodeName ? RR.nextSibling && this.lineBreak() : 1 == RR.nodeType && this.readRange(RR.firstChild, null)
      }
      findPointBefore(RR, JR) {
        for (let GR of this.points) GR.node == RR && RR.childNodes[GR.offset] == JR && (GR.pos = this.text.length)
      }
      findPointInside(RR, JR) {
        for (let GR of this.points)(3 == RR.nodeType ? GR.node == RR : RR.contains(GR.node)) && (GR.pos = this.text.length + (hG(RR, GR.node, GR.offset) ? JR : 0))
      }
    }

    function hG(RR, JR, GR) {
      for (;;) {
        if (!JR || GR < kR(JR)) return !1;
        if (JR == RR) return !0;
        GR = dR(JR) + 1, JR = JR.parentNode
      }
    }

    function Ry(RR, JR) {
      let GR;
      for (; RR != JR && RR; RR = RR.nextSibling) {
        let JR = wG.get(RR);
        if (!(null === JR || void 0 === JR ? void 0 : JR.isWidget())) return !1;
        JR && (GR || (GR = [])).push(JR)
      }
      if (GR)
        for (let yR of GR) {
          let RR = yR.overrideDOMText;
          if (null === RR || void 0 === RR ? void 0 : RR.length) return !1
        }
      return !0
    }
    class Jy {
      constructor(RR, JR) {
        this.node = RR, this.offset = JR, this.pos = -1
      }
    }
    class Gy {
      constructor(RR, JR, GR, tR) {
        this.typeOver = tR, this.bounds = null, this.text = "", this.domChanged = JR > -1;
        let {
          impreciseHead: uR,
          impreciseAnchor: ZR
        } = RR.docView, qR = RR.state.selection;
        if (RR.state.readOnly && JR > -1) this.newSel = null;
        else if (JR > -1 && (this.bounds = yy(RR.docView.tile, JR, GR, 0))) {
          let JR = uR || ZR ? [] : function(RR) {
              let JR = [];
              if (RR.root.activeElement != RR.contentDOM) return JR;
              let {
                anchorNode: GR,
                anchorOffset: yR,
                focusNode: tR,
                focusOffset: uR
              } = RR.observer.selectionRange;
              GR && (JR.push(new Jy(GR, yR)), tR == GR && uR == yR || JR.push(new Jy(tR, uR)));
              return JR
            }(RR),
            GR = new sG(JR, RR);
          GR.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = GR.text, this.newSel = function(RR, JR) {
            if (0 == RR.length) return null;
            let GR = RR[0].pos,
              tR = 2 == RR.length ? RR[1].pos : GR;
            return GR > -1 && tR > -1 ? yR.k.single(GR + JR, tR + JR) : null
          }(JR, this.bounds.from)
        } else {
          let JR = RR.observer.selectionRange,
            GR = uR && uR.node == JR.focusNode && uR.offset == JR.focusOffset || !mR(RR.contentDOM, JR.focusNode) ? qR.main.head : RR.docView.posFromDOM(JR.focusNode, JR.focusOffset),
            tR = ZR && ZR.node == JR.anchorNode && ZR.offset == JR.anchorOffset || !mR(RR.contentDOM, JR.anchorNode) ? qR.main.anchor : RR.docView.posFromDOM(JR.anchorNode, JR.anchorOffset),
            iR = RR.viewport;
          if ((MR.ios || MR.chrome) && qR.main.empty && GR != tR && (iR.from > 0 || iR.to < RR.state.doc.length)) {
            let JR = Math.min(GR, tR),
              yR = Math.max(GR, tR),
              uR = iR.from - JR,
              ZR = iR.to - yR;
            0 != uR && 1 != uR && 0 != JR || 0 != ZR && -1 != ZR && yR != RR.state.doc.length || (GR = 0, tR = RR.state.doc.length)
          }
          if (RR.inputState.composing > -1 && qR.WL.length > 1) this.newSel = qR.replaceRange(yR.k.range(tR, GR));
          else if (RR.lineWrapping && tR == GR && (!qR.main.empty || qR.main.head != GR) && RR.inputState.lastTouchTime > Date.now() - 100) {
            let JR = RR.coordsAtPos(GR, -1),
              tR = 0;
            JR && (tR = RR.inputState.lastTouchY <= JR.bottom ? -1 : 1), this.newSel = yR.k.create([yR.k.cursor(GR, tR)])
          } else this.newSel = yR.k.single(tR, GR)
        }
      }
    }

    function yy(RR, JR, GR, yR) {
      if (RR.isComposite()) {
        let tR = -1,
          uR = -1,
          ZR = -1,
          qR = -1;
        for (let iR = 0, fR = yR, VR = yR; iR < RR.children.length; iR++) {
          let yR = RR.children[iR],
            KR = fR + yR.length;
          if (fR < JR && KR > GR) return yy(yR, JR, GR, fR);
          if (KR >= JR && -1 == tR && (tR = iR, uR = fR), fR > GR && yR.dom.parentNode == RR.dom) {
            ZR = iR, qR = VR;
            break
          }
          VR = KR, fR = KR + yR.breakAfter
        }
        return {
          from: uR,
          to: qR < 0 ? yR + RR.length : qR,
          startDOM: (tR ? RR.children[tR - 1].dom.nextSibling : null) || RR.dom.firstChild,
          endDOM: ZR < RR.children.length && ZR >= 0 ? RR.children[ZR].dom : null
        }
      }
      return RR.isText() ? {
        from: yR,
        to: yR + RR.length,
        startDOM: RR.dom,
        endDOM: RR.dom.nextSibling
      } : null
    }

    function ty(RR, JR) {
      let GR, {
          newSel: tR
        } = JR,
        {
          state: uR
        } = RR,
        ZR = uR.selection.main,
        qR = RR.inputState.lastKeyTime > Date.now() - 100 ? RR.inputState.lastKeyCode : -1;
      if (JR.bounds) {
        let {
          from: RR,
          to: tR
        } = JR.bounds, iR = ZR.from, fR = null;
        (8 === qR || MR.android && JR.text.length < tR - RR) && (iR = ZR.to, fR = "end");
        let VR, KR, wR = uR.doc.sliceString(RR, tR, TG);
        !ZR.empty && ZR.from >= RR && ZR.to <= tR && (JR.typeOver || wR != JR.text) && wR.slice(0, ZR.from - RR) == JR.text.slice(0, ZR.from - RR) && wR.slice(ZR.to - RR) == JR.text.slice(VR = JR.text.length - (wR.length - (ZR.to - RR))) ? GR = {
          from: ZR.from,
          to: ZR.to,
          insert: yR.N.of(JR.text.slice(ZR.from - RR, VR).split(TG))
        } : (KR = Zy(wR, JR.text, iR - RR, fR)) && (MR.chrome && 13 == qR && KR.toB == KR.from + 2 && JR.text.slice(KR.from, KR.toB) == TG + TG && KR.toB--, GR = {
          from: RR + KR.from,
          to: RR + KR.toA,
          insert: yR.N.of(JR.text.slice(KR.from, KR.toB).split(TG))
        })
      } else tR && (!RR.hasFocus && uR.facet(YJ) || qy(tR, ZR)) && (tR = null);
      if (!GR && !tR) return !1;
      if ((MR.mac || MR.android) && GR && GR.from == GR.to && GR.from == ZR.head - 1 && /^\. ?$/.test(GR.insert.toString()) && "off" == RR.contentDOM.getAttribute("autocorrect") ? (tR && 2 == GR.insert.length && (tR = yR.k.single(tR.main.anchor - 1, tR.main.head - 1)), GR = {
          from: GR.from,
          to: GR.to,
          insert: yR.N.of([GR.insert.toString().replace(".", " ")])
        }) : uR.doc.lineAt(ZR.from).to < ZR.to && RR.docView.lineHasWidget(ZR.to) && RR.inputState.insertingTextAt > Date.now() - 50 ? GR = {
          from: ZR.from,
          to: ZR.to,
          insert: uR.toText(RR.inputState.insertingText)
        } : MR.chrome && GR && GR.from == GR.to && GR.from == ZR.head && "\n " == GR.insert.toString() && RR.lineWrapping && (tR && (tR = yR.k.single(tR.main.anchor - 1, tR.main.head - 1)), GR = {
          from: ZR.from,
          to: ZR.to,
          insert: yR.N.of([" "])
        }), GR) return uy(RR, GR, tR, qR);
      if (tR && !qy(tR, ZR)) {
        let JR = !1,
          GR = "select";
        return RR.inputState.lastSelectionTime > Date.now() - 50 && ("select" == RR.inputState.lastSelectionOrigin && (JR = !0), GR = RR.inputState.lastSelectionOrigin, "select.pointer" == GR && (tR = EG(uR.facet(yG).map((JR => JR(RR))), tR))), RR.dispatch({
          selection: tR,
          scrollIntoView: JR,
          userEvent: GR
        }), !0
      }
      return !1
    }

    function uy(RR, JR, GR) {
      let tR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (MR.ios && RR.inputState.flushIOSKey(JR)) return !0;
      let uR = RR.state.selection.main;
      if (MR.android && (JR.to == uR.to && (JR.from == uR.from || JR.from == uR.from - 1 && " " == RR.state.sliceDoc(JR.from, uR.from)) && 1 == JR.insert.length && 2 == JR.insert.lines && tJ(RR.contentDOM, "Enter", 13) || (JR.from == uR.from - 1 && JR.to == uR.to && 0 == JR.insert.length || 8 == tR && JR.insert.length < JR.to - JR.from && JR.to > uR.head) && tJ(RR.contentDOM, "Backspace", 8) || JR.from == uR.from && JR.to == uR.to + 1 && 0 == JR.insert.length && tJ(RR.contentDOM, "Delete", 46))) return !0;
      let ZR, qR = JR.insert.toString();
      RR.inputState.composing >= 0 && RR.inputState.composing++;
      let iR = () => ZR || (ZR = function(RR, JR, GR) {
        let tR, uR = RR.state,
          ZR = uR.selection.main,
          qR = -1;
        if (JR.from == JR.to && JR.from < ZR.from || JR.from > ZR.to) {
          let GR = JR.from < ZR.from ? -1 : 1,
            yR = GR < 0 ? ZR.from : ZR.to,
            tR = dG(uR.facet(yG).map((JR => JR(RR))), yR, GR);
          JR.from == tR && (qR = tR)
        }
        if (qR > -1) tR = {
          changes: JR,
          selection: yR.k.cursor(JR.from + JR.insert.length, -1)
        };
        else if (JR.from >= ZR.from && JR.to <= ZR.to && JR.to - JR.from >= (ZR.to - ZR.from) / 3 && (!GR || GR.main.empty && GR.main.from == JR.from + JR.insert.length) && RR.inputState.composing < 0) {
          let GR = ZR.from < JR.from ? uR.sliceDoc(ZR.from, JR.from) : "",
            yR = ZR.to > JR.to ? uR.sliceDoc(JR.to, ZR.to) : "";
          tR = uR.replaceSelection(RR.state.toText(GR + JR.insert.sliceString(0, void 0, RR.state.lineBreak) + yR))
        } else {
          let qR = uR.changes(JR),
            iR = GR && GR.main.to <= qR.newLength ? GR.main : void 0;
          if (uR.selection.WL.length > 1 && (RR.inputState.composing >= 0 || RR.inputState.compositionPendingChange) && JR.to <= ZR.to + 10 && JR.to >= ZR.to - 10) {
            let fR, VR = RR.state.sliceDoc(JR.from, JR.to),
              KR = GR && PG(RR, GR.main.head);
            if (KR) {
              let RR = JR.insert.length - (JR.to - JR.from);
              fR = {
                from: KR.from,
                to: KR.to - RR
              }
            } else fR = RR.state.doc.lineAt(ZR.head);
            let wR = ZR.to - JR.to;
            tR = uR.changeByRange((GR => {
              if (GR.from == ZR.from && GR.to == ZR.to) return {
                changes: qR,
                range: iR || GR.map(qR)
              };
              let tR = GR.to - wR,
                KR = tR - VR.length;
              if (RR.state.sliceDoc(KR, tR) != VR || tR >= fR.from && KR <= fR.to) return {
                range: GR
              };
              let rR = uR.changes({
                  from: KR,
                  to: tR,
                  insert: JR.insert
                }),
                eR = GR.to - ZR.to;
              return {
                changes: rR,
                range: iR ? yR.k.range(Math.max(0, iR.anchor + eR), Math.max(0, iR.head + eR)) : GR.map(rR)
              }
            }))
          } else tR = {
            changes: qR,
            selection: iR && uR.selection.replaceRange(iR)
          }
        }
        let iR = "input.type";
        (RR.composing || RR.inputState.compositionPendingChange && RR.inputState.compositionEndedAt > Date.now() - 50) && (RR.inputState.compositionPendingChange = !1, iR += ".compose", RR.inputState.compositionFirstChange && (iR += ".start", RR.inputState.compositionFirstChange = !1));
        return uR.update(tR, {
          userEvent: iR,
          scrollIntoView: !0
        })
      }(RR, JR, GR));
      return RR.state.facet(HJ).some((GR => GR(RR, JR.from, JR.to, qR, iR))) || RR.dispatch(iR()), !0
    }

    function Zy(RR, JR, GR, yR) {
      let tR = Math.min(RR.length, JR.length),
        uR = 0;
      for (; uR < tR && RR.charCodeAt(uR) == JR.charCodeAt(uR);) uR++;
      if (uR == tR && RR.length == JR.length) return null;
      let ZR = RR.length,
        qR = JR.length;
      for (; ZR > 0 && qR > 0 && RR.charCodeAt(ZR - 1) == JR.charCodeAt(qR - 1);) ZR--, qR--;
      if ("end" == yR) {
        GR -= ZR + Math.max(0, uR - Math.min(ZR, qR)) - uR
      }
      if (ZR < uR && RR.length < JR.length) {
        uR -= GR <= uR && GR >= ZR ? uR - GR : 0, qR = uR + (qR - ZR), ZR = uR
      } else if (qR < uR) {
        uR -= GR <= uR && GR >= qR ? uR - GR : 0, ZR = uR + (ZR - qR), qR = uR
      }
      return {
        from: uR,
        toA: ZR,
        toB: qR
      }
    }

    function qy(RR, JR) {
      return JR.head == RR.main.head && JR.anchor == RR.main.anchor
    }
    class iy {
      setSelectionOrigin(RR) {
        this.lastSelectionOrigin = RR, this.lastSelectionTime = Date.now()
      }
      constructor(RR) {
        this.view = RR, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = RR.hasFocus, MR.safari && RR.contentDOM.addEventListener("input", (() => null)), MR.gecko && function(RR) {
          Ny.has(RR) || (Ny.add(RR), RR.addEventListener("copy", (() => {})), RR.addEventListener("cut", (() => {})))
        }(RR.contentDOM.ownerDocument)
      }
      handleEvent(RR) {
        (function(RR, JR) {
          if (!JR.bubbles) return !0;
          if (JR.defaultPrevented) return !1;
          for (let GR, yR = JR.target; yR != RR.contentDOM; yR = yR.parentNode)
            if (!yR || 11 == yR.nodeType || (GR = wG.get(yR)) && GR.isWidget() && !GR.isHidden && GR.widget.ignoreEvent(JR)) return !1;
          return !0
        })(this.view, RR) && !this.ignoreDuringComposition(RR) && ("keydown" == RR.type && this.keydown(RR) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(RR.type, RR))) : this.runHandlers(RR.type, RR)))
      }
      runHandlers(RR, JR) {
        let GR = this.handlers[RR];
        if (GR) {
          for (let RR of GR.observers) RR(this.view, JR);
          for (let RR of GR.handlers) {
            if (JR.defaultPrevented) break;
            if (RR(this.view, JR)) {
              JR.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(RR) {
        let JR = Vy(RR),
          GR = this.handlers,
          yR = this.view.contentDOM;
        for (let tR in JR)
          if ("scroll" != tR) {
            let RR = !JR[tR].handlers.length,
              uR = GR[tR];
            uR && RR != !uR.handlers.length && (yR.removeEventListener(tR, this.handleEvent), uR = null), uR || yR.addEventListener(tR, this.handleEvent, {
              passive: RR
            })
          } for (let tR in GR) "scroll" == tR || JR[tR] || yR.removeEventListener(tR, this.handleEvent);
        this.handlers = JR
      }
      keydown(RR) {
        if (this.lastKeyCode = RR.keyCode, this.lastKeyTime = Date.now(), 9 == RR.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != RR.keyCode && ry.indexOf(RR.keyCode) < 0 && (this.tabFocusMode = -1), MR.android && MR.chrome && !RR.synthetic && (13 == RR.keyCode || 8 == RR.keyCode)) return this.view.observer.delayAndroidKey(RR.key, RR.keyCode), !0;
        let JR;
        return !MR.ios || RR.synthetic || RR.altKey || RR.metaKey || RR.shiftKey || !((JR = Ky.find((JR => JR.keyCode == RR.keyCode))) && !RR.ctrlKey || wy.indexOf(RR.key) > -1 && RR.ctrlKey) ? (229 != RR.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = JR || RR, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(RR) {
        let JR = this.pendingIOSKey;
        return !!JR && (!("Enter" == JR.key && RR && RR.from < RR.to && /^\S+$/.test(RR.insert.toString())) && (this.pendingIOSKey = void 0, tJ(this.view.contentDOM, JR.key, JR.keyCode, JR instanceof KeyboardEvent ? JR : void 0)))
      }
      ignoreDuringComposition(RR) {
        return !(!/^key/.test(RR.type) || RR.synthetic) && (this.composing > 0 || !!(MR.safari && !MR.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
      }
      startMouseSelection(RR) {
        this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = RR
      }
      update(RR) {
        this.view.observer.update(RR), this.mouseSelection && this.mouseSelection.update(RR), this.draggedContent && RR.docChanged && (this.draggedContent = this.draggedContent.map(RR.changes)), RR.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
      }
      destroy() {
        this.mouseSelection && this.mouseSelection.destroy()
      }
    }

    function fy(RR, JR) {
      return (GR, yR) => {
        try {
          return JR.call(RR, yR, GR)
        } catch (tR) {
          EJ(GR.state, tR)
        }
      }
    }

    function Vy(RR) {
      let JR = Object.create(null);

      function GR(RR) {
        return JR[RR] || (JR[RR] = {
          observers: [],
          handlers: []
        })
      }
      for (let yR of RR) {
        let RR = yR.spec,
          JR = RR && RR.plugin.domEventHandlers,
          tR = RR && RR.plugin.domEventObservers;
        if (JR)
          for (let uR in JR) {
            let RR = JR[uR];
            RR && GR(uR).handlers.push(fy(yR.value, RR))
          }
        if (tR)
          for (let uR in tR) {
            let RR = tR[uR];
            RR && GR(uR).observers.push(fy(yR.value, RR))
          }
      }
      for (let yR in Ly) GR(yR).handlers.push(Ly[yR]);
      for (let yR in ny) GR(yR).observers.push(ny[yR]);
      return JR
    }
    const Ky = [{
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
      wy = "dthko",
      ry = [16, 17, 18, 20, 91, 92, 224, 225];

    function ey(RR) {
      return .7 * Math.max(0, RR) + 8
    }
    class ay {
      constructor(RR, JR, GR, tR) {
        this.view = RR, this.startEvent = JR, this.style = GR, this.mustSelect = tR, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = JR, this.scrollParents = sR(RR.contentDOM), this.atoms = RR.state.facet(yG).map((JR => JR(RR)));
        let uR = RR.contentDOM.ownerDocument;
        uR.addEventListener("mousemove", this.move = this.move.bind(this)), uR.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = JR.shiftKey, this.multiple = RR.state.facet(yR.o.allowMultipleSelections) && function(RR, JR) {
          let GR = RR.state.facet(vJ);
          return GR.length ? GR[0](JR) : MR.mac ? JR.metaKey : JR.ctrlKey
        }(RR, JR), this.dragging = !(! function(RR, JR) {
          let {
            main: GR
          } = RR.state.selection;
          if (GR.empty) return !1;
          let yR = IR(RR.root);
          if (!yR || 0 == yR.rangeCount) return !0;
          let tR = yR.getRangeAt(0).getClientRects();
          for (let uR = 0; uR < tR.length; uR++) {
            let RR = tR[uR];
            if (RR.left <= JR.clientX && RR.right >= JR.clientX && RR.top <= JR.clientY && RR.bottom >= JR.clientY) return !0
          }
          return !1
        }(RR, JR) || 1 != py(JR)) && null
      }
      start(RR) {
        !1 === this.dragging && this.select(RR)
      }
      move(RR) {
        if (0 == RR.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (JR = this.startEvent, GR = RR, Math.max(Math.abs(JR.clientX - GR.clientX), Math.abs(JR.clientY - GR.clientY)) < 10)) return;
        var JR, GR;
        this.select(this.lastEvent = RR);
        let yR = 0,
          tR = 0,
          uR = 0,
          ZR = 0,
          qR = this.view.win.innerWidth,
          iR = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: uR,
          right: qR
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: ZR,
          bottom: iR
        } = this.scrollParents.y.getBoundingClientRect());
        let fR = qG(this.view);
        RR.clientX - fR.left <= uR + 6 ? yR = -ey(uR - RR.clientX) : RR.clientX + fR.right >= qR - 6 && (yR = ey(RR.clientX - qR)), RR.clientY - fR.top <= ZR + 6 ? tR = -ey(ZR - RR.clientY) : RR.clientY + fR.bottom >= iR - 6 && (tR = ey(RR.clientY - iR)), this.setScrollSpeed(yR, tR)
      }
      up(RR) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || RR.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let RR = this.view.contentDOM.ownerDocument;
        RR.removeEventListener("mousemove", this.move), RR.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(RR, JR) {
        this.scrollSpeed = {
          x: RR,
          y: JR
        }, RR || JR ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: RR,
          y: JR
        } = this.scrollSpeed;
        RR && this.scrollParents.x && (this.scrollParents.x.scrollLeft += RR, RR = 0), JR && this.scrollParents.y && (this.scrollParents.y.scrollTop += JR, JR = 0), (RR || JR) && this.view.win.scrollBy(RR, JR), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(RR) {
        let {
          view: JR
        } = this, GR = EG(this.atoms, this.style.get(RR, this.extend, this.multiple));
        !this.mustSelect && GR.eq(JR.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: GR,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(RR) {
        RR.transactions.some((RR => RR.isUserEvent("input.type"))) ? this.destroy() : this.style.update(RR) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const Ly = Object.create(null),
      ny = Object.create(null),
      Uy = MR.ie && MR.ie_version < 15 || MR.ios && MR.webkit_version < 604;

    function Wy(RR, JR, GR) {
      for (let yR of RR.facet(JR)) GR = yR(GR, RR);
      return GR
    }

    function Ay(RR, JR) {
      JR = Wy(RR.state, cJ, JR);
      let GR, {
          state: tR
        } = RR,
        uR = 1,
        ZR = tR.toText(JR),
        qR = ZR.lines == tR.selection.WL.length;
      if (null != by && tR.selection.WL.every((RR => RR.empty)) && by == ZR.toString()) {
        let RR = -1;
        GR = tR.changeByRange((GR => {
          let iR = tR.doc.lineAt(GR.from);
          if (iR.from == RR) return {
            range: GR
          };
          RR = iR.from;
          let fR = tR.toText((qR ? ZR.line(uR++).text : JR) + tR.lineBreak);
          return {
            changes: {
              from: iR.from,
              insert: fR
            },
            range: yR.k.cursor(GR.from + fR.length)
          }
        }))
      } else GR = qR ? tR.changeByRange((RR => {
        let JR = ZR.line(uR++);
        return {
          changes: {
            from: RR.from,
            to: RR.to,
            insert: JR.text
          },
          range: yR.k.cursor(RR.from + JR.length)
        }
      })) : tR.replaceSelection(ZR);
      RR.dispatch(GR, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function Cy(RR, JR, GR, tR) {
      if (1 == tR) return yR.k.cursor(JR, GR);
      if (2 == tR) return function(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          tR = RR.charCategorizer(JR),
          uR = RR.doc.lineAt(JR),
          ZR = JR - uR.from;
        if (0 == uR.length) return yR.k.cursor(JR);
        0 == ZR ? GR = 1 : ZR == uR.length && (GR = -1);
        let qR = ZR,
          iR = ZR;
        GR < 0 ? qR = (0, yR.eb)(uR.text, ZR, !1) : iR = (0, yR.eb)(uR.text, ZR);
        let fR = tR(uR.text.slice(qR, iR));
        for (; qR > 0;) {
          let RR = (0, yR.eb)(uR.text, qR, !1);
          if (tR(uR.text.slice(RR, qR)) != fR) break;
          qR = RR
        }
        for (; iR < uR.length;) {
          let RR = (0, yR.eb)(uR.text, iR);
          if (tR(uR.text.slice(iR, RR)) != fR) break;
          iR = RR
        }
        return yR.k.range(qR + uR.from, iR + uR.from)
      }(RR.state, JR, GR);
      {
        let tR = RR.docView.lineAt(JR, GR),
          uR = RR.state.doc.lineAt(tR ? tR.posAtEnd : JR),
          ZR = tR ? tR.posAtStart : uR.from,
          qR = tR ? tR.posAtEnd : uR.to;
        return qR < RR.state.doc.length && qR == uR.to && qR++, yR.k.range(ZR, qR)
      }
    }
    ny.scroll = RR => {
      RR.inputState.lastScrollTop = RR.scrollDOM.scrollTop, RR.inputState.lastScrollLeft = RR.scrollDOM.scrollLeft
    }, ny.wheel = ny.mousewheel = RR => {
      RR.inputState.lastWheelEvent = Date.now()
    }, Ly.keydown = (RR, JR) => (RR.inputState.setSelectionOrigin("select"), 27 == JR.keyCode && 0 != RR.inputState.tabFocusMode && (RR.inputState.tabFocusMode = Date.now() + 2e3), !1), ny.touchstart = (RR, JR) => {
      let GR = RR.inputState,
        yR = JR.targetTouches[0];
      GR.lastTouchTime = Date.now(), yR && (GR.lastTouchX = yR.clientX, GR.lastTouchY = yR.clientY), GR.setSelectionOrigin("select.pointer")
    }, ny.touchmove = RR => {
      RR.inputState.setSelectionOrigin("select.pointer")
    }, Ly.mousedown = (RR, JR) => {
      if (RR.observer.flush(), RR.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let GR = null;
      for (let yR of RR.state.facet(xJ))
        if (GR = yR(RR, JR), GR) break;
      if (GR || 0 != JR.button || (GR = function(RR, JR) {
          let GR = RR.posAndSideAtCoords({
              x: JR.clientX,
              y: JR.clientY
            }, !1),
            tR = py(JR),
            uR = RR.state.selection;
          return {
            update(RR) {
              RR.docChanged && (GR.pos = RR.changes.mapPos(GR.pos), uR = uR.map(RR.changes))
            },
            get(JR, ZR, qR) {
              let iR, fR = RR.posAndSideAtCoords({
                  x: JR.clientX,
                  y: JR.clientY
                }, !1),
                VR = Cy(RR, fR.pos, fR.assoc, tR);
              if (GR.pos != fR.pos && !ZR) {
                let JR = Cy(RR, GR.pos, GR.assoc, tR),
                  uR = Math.min(JR.from, VR.from),
                  ZR = Math.max(JR.to, VR.to);
                VR = uR < VR.from ? yR.k.range(uR, ZR, VR.assoc) : yR.k.range(ZR, uR, VR.assoc)
              }
              return ZR ? uR.replaceRange(uR.main.extend(VR.from, VR.to, VR.assoc)) : qR && 1 == tR && uR.WL.length > 1 && (iR = function(RR, JR) {
                for (let GR = 0; GR < RR.WL.length; GR++) {
                  let {
                    from: tR,
                    to: uR
                  } = RR.WL[GR];
                  if (tR <= JR && uR >= JR) return yR.k.create(RR.WL.slice(0, GR).concat(RR.WL.slice(GR + 1)), RR.mainIndex == GR ? 0 : RR.mainIndex - (RR.mainIndex > GR ? 1 : 0))
                }
                return null
              }(uR, fR.pos)) ? iR : qR ? uR.addRange(VR) : yR.k.create([VR])
            }
          }
        }(RR, JR)), GR) {
        let yR = !RR.hasFocus;
        RR.inputState.startMouseSelection(new ay(RR, JR, GR, yR)), yR && RR.observer.ignore((() => {
          GJ(RR.contentDOM);
          let JR = RR.root.activeElement;
          JR && !JR.contains(RR.contentDOM) && JR.blur()
        }));
        let tR = RR.inputState.mouseSelection;
        if (tR) return tR.start(JR), !1 === tR.dragging
      } else RR.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const Xy = MR.ie && MR.ie_version <= 11;
    let My = null,
      By = 0,
      ly = 0;

    function py(RR) {
      if (!Xy) return RR.detail;
      let JR = My,
        GR = ly;
      return My = RR, ly = Date.now(), By = !JR || GR > Date.now() - 400 && Math.abs(JR.clientX - RR.clientX) < 2 && Math.abs(JR.clientY - RR.clientY) < 2 ? (By + 1) % 3 : 1
    }

    function gy(RR, JR, GR, yR) {
      if (!(GR = Wy(RR.state, cJ, GR))) return;
      let tR = RR.posAtCoords({
          x: JR.clientX,
          y: JR.clientY
        }, !1),
        {
          draggedContent: uR
        } = RR.inputState,
        ZR = yR && uR && function(RR, JR) {
          let GR = RR.state.facet(OJ);
          return GR.length ? GR[0](JR) : MR.mac ? !JR.altKey : !JR.ctrlKey
        }(RR, JR) ? {
          from: uR.from,
          to: uR.to
        } : null,
        qR = {
          from: tR,
          insert: GR
        },
        iR = RR.state.changes(ZR ? [ZR, qR] : qR);
      RR.focus(), RR.dispatch({
        changes: iR,
        selection: {
          anchor: iR.mapPos(tR, -1),
          head: iR.mapPos(tR, 1)
        },
        userEvent: ZR ? "move.drop" : "input.drop"
      }), RR.inputState.draggedContent = null
    }
    Ly.dragstart = (RR, JR) => {
      let {
        selection: {
          main: GR
        }
      } = RR.state;
      if (JR.target.draggable) {
        let tR = RR.docView.tile.nearest(JR.target);
        if (tR && tR.isWidget()) {
          let RR = tR.posAtStart,
            JR = RR + tR.length;
          (RR >= GR.to || JR <= GR.from) && (GR = yR.k.range(RR, JR))
        }
      }
      let {
        inputState: tR
      } = RR;
      return tR.mouseSelection && (tR.mouseSelection.dragging = !0), tR.draggedContent = GR, JR.dataTransfer && (JR.dataTransfer.setData("Text", Wy(RR.state, PJ, RR.state.sliceDoc(GR.from, GR.to))), JR.dataTransfer.effectAllowed = "copyMove"), !1
    }, Ly.dragend = RR => (RR.inputState.draggedContent = null, !1), Ly.drop = (RR, JR) => {
      if (!JR.dataTransfer) return !1;
      if (RR.state.readOnly) return !0;
      let GR = JR.dataTransfer.files;
      if (GR && GR.length) {
        let yR = Array(GR.length),
          tR = 0,
          uR = () => {
            ++tR == GR.length && gy(RR, JR, yR.filter((RR => null != RR)).join(RR.state.lineBreak), !1)
          };
        for (let RR = 0; RR < GR.length; RR++) {
          let JR = new FileReader;
          JR.onerror = uR, JR.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(JR.result) || (yR[RR] = JR.result), uR()
          }, JR.readAsText(GR[RR])
        }
        return !0
      } {
        let GR = JR.dataTransfer.getData("Text");
        if (GR) return gy(RR, JR, GR, !0), !0
      }
      return !1
    }, Ly.paste = (RR, JR) => {
      if (RR.state.readOnly) return !0;
      RR.observer.flush();
      let GR = Uy ? null : JR.clipboardData;
      return GR ? (Ay(RR, GR.getData("text/plain") || GR.getData("text/uri-list")), !0) : (function(RR) {
        let JR = RR.dom.parentNode;
        if (!JR) return;
        let GR = JR.appendChild(document.createElement("textarea"));
        GR.style.cssText = "position: fixed; left: -10000px; top: 10px", GR.focus(), setTimeout((() => {
          RR.focus(), GR.remove(), Ay(RR, GR.value)
        }), 50)
      }(RR), !1)
    };
    let by = null;
    Ly.copy = Ly.cut = (RR, JR) => {
      if (!zR(RR.contentDOM, RR.observer.selectionRange)) return !1;
      let {
        text: GR,
        WL: yR,
        linewise: tR
      } = function(RR) {
        let JR = [],
          GR = [],
          yR = !1;
        for (let tR of RR.selection.WL) tR.empty || (JR.push(RR.sliceDoc(tR.from, tR.to)), GR.push(tR));
        if (!JR.length) {
          let tR = -1;
          for (let {
              from: yR
            }
            of RR.selection.WL) {
            let uR = RR.doc.lineAt(yR);
            uR.number > tR && (JR.push(uR.text), GR.push({
              from: uR.from,
              to: Math.min(RR.doc.length, uR.to + 1)
            })), tR = uR.number
          }
          yR = !0
        }
        return {
          text: Wy(RR, PJ, JR.join(RR.lineBreak)),
          WL: GR,
          linewise: yR
        }
      }(RR.state);
      if (!GR && !tR) return !1;
      by = tR ? GR : null, "cut" != JR.type || RR.state.readOnly || RR.dispatch({
        changes: yR,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let uR = Uy ? null : JR.clipboardData;
      return uR ? (uR.clearData(), uR.setData("text/plain", GR), !0) : (function(RR, JR) {
        let GR = RR.dom.parentNode;
        if (!GR) return;
        let yR = GR.appendChild(document.createElement("textarea"));
        yR.style.cssText = "position: fixed; left: -10000px; top: 10px", yR.value = JR, yR.focus(), yR.selectionEnd = JR.length, yR.selectionStart = 0, setTimeout((() => {
          yR.remove(), RR.focus()
        }), 50)
      }(RR, GR), !1)
    };
    const vy = yR.c.define();

    function Oy(RR, JR) {
      let GR = [];
      for (let yR of RR.facet(oJ)) {
        let tR = yR(RR, JR);
        tR && GR.push(tR)
      }
      return GR.length ? RR.update({
        effects: GR,
        annotations: vy.of(!0)
      }) : null
    }

    function xy(RR) {
      setTimeout((() => {
        let JR = RR.hasFocus;
        if (JR != RR.inputState.notifiedFocused) {
          let GR = Oy(RR.state, JR);
          GR ? RR.dispatch(GR) : RR.update([])
        }
      }), 10)
    }
    ny.focus = RR => {
      RR.inputState.lastFocusTime = Date.now(), RR.scrollDOM.scrollTop || !RR.inputState.lastScrollTop && !RR.inputState.lastScrollLeft || (RR.scrollDOM.scrollTop = RR.inputState.lastScrollTop, RR.scrollDOM.scrollLeft = RR.inputState.lastScrollLeft), xy(RR)
    }, ny.blur = RR => {
      RR.observer.clearSelectionRange(), xy(RR)
    }, ny.compositionstart = ny.compositionupdate = RR => {
      RR.observer.editContext || (null == RR.inputState.compositionFirstChange && (RR.inputState.compositionFirstChange = !0), RR.inputState.composing < 0 && (RR.inputState.composing = 0))
    }, ny.compositionend = RR => {
      RR.observer.editContext || (RR.inputState.composing = -1, RR.inputState.compositionEndedAt = Date.now(), RR.inputState.compositionPendingKey = !0, RR.inputState.compositionPendingChange = RR.observer.pendingRecords().length > 0, RR.inputState.compositionFirstChange = null, MR.chrome && MR.android ? RR.observer.flushSoon() : RR.inputState.compositionPendingChange ? Promise.resolve().then((() => RR.observer.flush())) : setTimeout((() => {
        RR.inputState.composing < 0 && RR.docView.hasComposition && RR.update([])
      }), 50))
    }, ny.contextmenu = RR => {
      RR.inputState.lastContextMenu = Date.now()
    }, Ly.beforeinput = (RR, JR) => {
      var GR, yR;
      if ("insertText" != JR.inputType && "insertCompositionText" != JR.inputType || (RR.inputState.insertingText = JR.data, RR.inputState.insertingTextAt = Date.now()), "insertReplacementText" == JR.inputType && RR.observer.editContext) {
        let yR = null === (GR = JR.dataTransfer) || void 0 === GR ? void 0 : GR.getData("text/plain"),
          tR = JR.getTargetRanges();
        if (yR && tR.length) {
          let JR = tR[0],
            GR = RR.posAtDOM(JR.startContainer, JR.startOffset),
            uR = RR.posAtDOM(JR.endContainer, JR.endOffset);
          return uy(RR, {
            from: GR,
            to: uR,
            insert: RR.state.toText(yR)
          }, null), !0
        }
      }
      let tR;
      if (MR.chrome && MR.android && (tR = Ky.find((RR => RR.inputType == JR.inputType))) && (RR.observer.delayAndroidKey(tR.key, tR.keyCode), "Backspace" == tR.key || "Delete" == tR.key)) {
        let JR = (null === (yR = window.visualViewport) || void 0 === yR ? void 0 : yR.height) || 0;
        setTimeout((() => {
          var GR;
          ((null === (GR = window.visualViewport) || void 0 === GR ? void 0 : GR.height) || 0) > JR + 10 && RR.hasFocus && (RR.contentDOM.blur(), RR.focus())
        }), 100)
      }
      return MR.ios && "deleteContentForward" == JR.inputType && RR.observer.flushSoon(), MR.safari && "insertText" == JR.inputType && RR.inputState.composing >= 0 && setTimeout((() => ny.compositionend(RR, JR)), 20), !1
    };
    const Ny = new Set;
    const Dy = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let Hy = !1;

    function oy() {
      Hy = !1
    }
    class cy {
      constructor(RR) {
        this.lineWrapping = RR, this.doc = yR.N.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(RR, JR) {
        let GR = this.doc.lineAt(JR).number - this.doc.lineAt(RR).number + 1;
        return this.lineWrapping && (GR += Math.max(0, Math.ceil((JR - RR - GR * this.lineLength * .5) / this.lineLength))), this.lineHeight * GR
      }
      heightForLine(RR) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((RR - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(RR) {
        return this.doc = RR, this
      }
      mustRefreshForWrapping(RR) {
        return Dy.indexOf(RR) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(RR) {
        let JR = !1;
        for (let GR = 0; GR < RR.length; GR++) {
          let yR = RR[GR];
          yR < 0 ? GR++ : this.heightSamples[Math.floor(10 * yR)] || (JR = !0, this.heightSamples[Math.floor(10 * yR)] = !0)
        }
        return JR
      }
      refresh(RR, JR, GR, yR, tR, uR) {
        let ZR = Dy.indexOf(RR) > -1,
          qR = Math.abs(JR - this.lineHeight) > .3 || this.lineWrapping != ZR || Math.abs(GR - this.charWidth) > .1;
        if (this.lineWrapping = ZR, this.lineHeight = JR, this.charWidth = GR, this.textHeight = yR, this.lineLength = tR, qR) {
          this.heightSamples = {};
          for (let RR = 0; RR < uR.length; RR++) {
            let JR = uR[RR];
            JR < 0 ? RR++ : this.heightSamples[Math.floor(10 * JR)] = !0
          }
        }
        return qR
      }
    }
    class Py {
      constructor(RR, JR) {
        this.from = RR, this.heights = JR, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class Iy {
      constructor(RR, JR, GR, yR, tR) {
        this.from = RR, this.length = JR, this.top = GR, this.height = yR, this._content = tR
      }
      get type() {
        return "number" == typeof this._content ? OR.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof HR ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(RR) {
        let JR = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(RR._content) ? RR._content : [RR]);
        return new Iy(this.from, this.length + RR.length, this.top, this.height + RR.height, JR)
      }
    }
    var my = function(RR) {
      return RR[RR.ByPos = 0] = "ByPos", RR[RR.ByHeight = 1] = "ByHeight", RR[RR.ByPosNoHeight = 2] = "ByPosNoHeight", RR
    }(my || (my = {}));
    const zy = .001;
    class Sy {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = RR, this.height = JR, this.flags = GR
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(RR) {
        this.flags = (RR ? 2 : 0) | -3 & this.flags
      }
      setHeight(RR) {
        this.height != RR && (Math.abs(this.height - RR) > zy && (Hy = !0), this.height = RR)
      }
      replace(RR, JR, GR) {
        return Sy.of(GR)
      }
      decomposeLeft(RR, JR) {
        JR.push(this)
      }
      decomposeRight(RR, JR) {
        JR.push(this)
      }
      applyChanges(RR, JR, GR, yR) {
        let tR = this,
          uR = GR.doc;
        for (let ZR = yR.length - 1; ZR >= 0; ZR--) {
          let {
            fromA: qR,
            toA: iR,
            fromB: fR,
            toB: VR
          } = yR[ZR], KR = tR.lineAt(qR, my.ByPosNoHeight, GR.setDoc(JR), 0, 0), wR = KR.to >= iR ? KR : tR.lineAt(iR, my.ByPosNoHeight, GR, 0, 0);
          for (VR += wR.to - iR, iR = wR.to; ZR > 0 && KR.from <= yR[ZR - 1].toA;) qR = yR[ZR - 1].fromA, fR = yR[ZR - 1].fromB, ZR--, qR < KR.from && (KR = tR.lineAt(qR, my.ByPosNoHeight, GR, 0, 0));
          fR += KR.from - qR, qR = KR.from;
          let rR = Ty.build(GR.setDoc(uR), RR, fR, VR);
          tR = jy(tR, tR.replace(qR, iR, rR))
        }
        return tR.updateHeight(GR, 0)
      }
      static empty() {
        return new Yy(0, 0, 0)
      }
      static of (RR) {
        if (1 == RR.length) return RR[0];
        let JR = 0,
          GR = RR.length,
          yR = 0,
          tR = 0;
        for (;;)
          if (JR == GR)
            if (yR > 2 * tR) {
              let tR = RR[JR - 1];
              tR.break ? RR.splice(--JR, 1, tR.left, null, tR.right) : RR.splice(--JR, 1, tR.left, tR.right), GR += 1 + tR.break, yR -= tR.size
            } else {
              if (!(tR > 2 * yR)) break;
              {
                let JR = RR[GR];
                JR.break ? RR.splice(GR, 1, JR.left, null, JR.right) : RR.splice(GR, 1, JR.left, JR.right), GR += 2 + JR.break, tR -= JR.size
              }
            }
        else if (yR < tR) {
          let GR = RR[JR++];
          GR && (yR += GR.size)
        } else {
          let JR = RR[--GR];
          JR && (tR += JR.size)
        }
        let uR = 0;
        return null == RR[JR - 1] ? (uR = 1, JR--) : null == RR[JR] && (uR = 1, GR++), new Qy(Sy.of(RR.slice(0, JR)), uR, Sy.of(RR.slice(GR)))
      }
    }

    function jy(RR, JR) {
      return RR == JR ? RR : (RR.constructor != JR.constructor && (Hy = !0), JR)
    }
    Sy.prototype.size = 1;
    const dy = xR.replace({});
    class Ey extends Sy {
      constructor(RR, JR, GR) {
        super(RR, JR), this.deco = GR, this.spaceAbove = 0
      }
      mainBlock(RR, JR) {
        return new Iy(JR, this.length, RR + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(RR, JR, GR, yR) {
        return this.spaceAbove && RR < GR + this.spaceAbove ? new Iy(yR, 0, GR, this.spaceAbove, dy) : this.mainBlock(GR, yR)
      }
      lineAt(RR, JR, GR, yR, tR) {
        let uR = this.mainBlock(yR, tR);
        return this.spaceAbove ? this.blockAt(0, GR, yR, tR).join(uR) : uR
      }
      forEachLine(RR, JR, GR, yR, tR, uR) {
        RR <= tR + this.length && JR >= tR && uR(this.lineAt(0, my.ByPos, GR, yR, tR))
      }
      setMeasuredHeight(RR) {
        let JR = RR.heights[RR.index++];
        JR < 0 ? (this.spaceAbove = -JR, JR = RR.heights[RR.index++]) : this.spaceAbove = 0, this.setHeight(JR)
      }
      updateHeight(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GR = arguments.length > 3 ? arguments[3] : void 0;
        return GR && GR.from <= JR && GR.more && this.setMeasuredHeight(GR), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class Yy extends Ey {
      constructor(RR, JR, GR) {
        super(RR, JR, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = GR
      }
      mainBlock(RR, JR) {
        return new Iy(JR, this.length, RR + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(RR, JR, GR) {
        let yR = GR[0];
        return 1 == GR.length && (yR instanceof Yy || yR instanceof ky && 4 & yR.flags) && Math.abs(this.length - yR.length) < 10 ? (yR instanceof ky ? yR = new Yy(yR.length, this.height, this.spaceAbove) : yR.height = this.height, this.outdated || (yR.outdated = !1), yR) : Sy.of(GR)
      }
      updateHeight(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          yR = arguments.length > 3 ? arguments[3] : void 0;
        return yR && yR.from <= JR && yR.more ? this.setMeasuredHeight(yR) : (GR || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, RR.heightForLine(this.length - this.collapsed)) + this.breaks * RR.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class ky extends Sy {
      constructor(RR) {
        super(RR, 0)
      }
      heightMetrics(RR, JR) {
        let GR, yR = RR.doc.lineAt(JR).number,
          tR = RR.doc.lineAt(JR + this.length).number,
          uR = tR - yR + 1,
          ZR = 0;
        if (RR.lineWrapping) {
          let JR = Math.min(this.height, RR.lineHeight * uR);
          GR = JR / uR, this.length > uR + 1 && (ZR = (this.height - JR) / (this.length - uR - 1))
        } else GR = this.height / uR;
        return {
          firstLine: yR,
          lastLine: tR,
          perLine: GR,
          perChar: ZR
        }
      }
      blockAt(RR, JR, GR, yR) {
        let {
          firstLine: tR,
          lastLine: uR,
          perLine: ZR,
          perChar: qR
        } = this.heightMetrics(JR, yR);
        if (JR.lineWrapping) {
          let tR = yR + (RR < JR.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (RR - GR) / this.height)) * this.length)),
            uR = JR.doc.lineAt(tR),
            iR = ZR + uR.length * qR,
            fR = Math.max(GR, RR - iR / 2);
          return new Iy(uR.from, uR.length, fR, iR, 0)
        } {
          let yR = Math.max(0, Math.min(uR - tR, Math.floor((RR - GR) / ZR))),
            {
              from: qR,
              length: iR
            } = JR.doc.line(tR + yR);
          return new Iy(qR, iR, GR + ZR * yR, ZR, 0)
        }
      }
      lineAt(RR, JR, GR, yR, tR) {
        if (JR == my.ByHeight) return this.blockAt(RR, GR, yR, tR);
        if (JR == my.ByPosNoHeight) {
          let {
            from: JR,
            to: yR
          } = GR.doc.lineAt(RR);
          return new Iy(JR, yR - JR, 0, 0, 0)
        }
        let {
          firstLine: uR,
          perLine: ZR,
          perChar: qR
        } = this.heightMetrics(GR, tR), iR = GR.doc.lineAt(RR), fR = ZR + iR.length * qR, VR = iR.number - uR, KR = yR + ZR * VR + qR * (iR.from - tR - VR);
        return new Iy(iR.from, iR.length, Math.max(yR, Math.min(KR, yR + this.height - fR)), fR, 0)
      }
      forEachLine(RR, JR, GR, yR, tR, uR) {
        RR = Math.max(RR, tR), JR = Math.min(JR, tR + this.length);
        let {
          firstLine: ZR,
          perLine: qR,
          perChar: iR
        } = this.heightMetrics(GR, tR);
        for (let fR = RR, VR = yR; fR <= JR;) {
          let JR = GR.doc.lineAt(fR);
          if (fR == RR) {
            let GR = JR.number - ZR;
            VR += qR * GR + iR * (RR - tR - GR)
          }
          let yR = qR + iR * JR.length;
          uR(new Iy(JR.from, JR.length, VR, yR, 0)), VR += yR, fR = JR.to + 1
        }
      }
      replace(RR, JR, GR) {
        let yR = this.length - JR;
        if (yR > 0) {
          let RR = GR[GR.length - 1];
          RR instanceof ky ? GR[GR.length - 1] = new ky(RR.length + yR) : GR.push(null, new ky(yR - 1))
        }
        if (RR > 0) {
          let JR = GR[0];
          JR instanceof ky ? GR[0] = new ky(RR + JR.length) : GR.unshift(new ky(RR - 1), null)
        }
        return Sy.of(GR)
      }
      decomposeLeft(RR, JR) {
        JR.push(new ky(RR - 1), null)
      }
      decomposeRight(RR, JR) {
        JR.push(null, new ky(this.length - RR - 1))
      }
      updateHeight(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          yR = arguments.length > 3 ? arguments[3] : void 0,
          tR = JR + this.length;
        if (yR && yR.from <= JR + this.length && yR.more) {
          let GR = [],
            uR = Math.max(JR, yR.from),
            ZR = -1;
          for (yR.from > JR && GR.push(new ky(yR.from - JR - 1).updateHeight(RR, JR)); uR <= tR && yR.more;) {
            let JR = RR.doc.lineAt(uR).length;
            GR.length && GR.push(null);
            let tR = yR.heights[yR.index++],
              qR = 0;
            tR < 0 && (qR = -tR, tR = yR.heights[yR.index++]), -1 == ZR ? ZR = tR : Math.abs(tR - ZR) >= zy && (ZR = -2);
            let iR = new Yy(JR, tR, qR);
            iR.outdated = !1, GR.push(iR), uR += JR + 1
          }
          uR <= tR && GR.push(null, new ky(tR - uR).updateHeight(RR, uR));
          let qR = Sy.of(GR);
          return (ZR < 0 || Math.abs(qR.height - this.height) >= zy || Math.abs(ZR - this.heightMetrics(RR, JR).perLine) >= zy) && (Hy = !0), jy(this, qR)
        }
        return (GR || this.outdated) && (this.setHeight(RR.heightForGap(JR, JR + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class Qy extends Sy {
      constructor(RR, JR, GR) {
        super(RR.length + JR + GR.length, RR.height + GR.height, JR | (RR.outdated || GR.outdated ? 2 : 0)), this.left = RR, this.right = GR, this.size = RR.size + GR.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(RR, JR, GR, yR) {
        let tR = GR + this.left.height;
        return RR < tR ? this.left.blockAt(RR, JR, GR, yR) : this.right.blockAt(RR, JR, tR, yR + this.left.length + this.break)
      }
      lineAt(RR, JR, GR, yR, tR) {
        let uR = yR + this.left.height,
          ZR = tR + this.left.length + this.break,
          qR = JR == my.ByHeight ? RR < uR : RR < ZR,
          iR = qR ? this.left.lineAt(RR, JR, GR, yR, tR) : this.right.lineAt(RR, JR, GR, uR, ZR);
        if (this.break || (qR ? iR.to < ZR : iR.from > ZR)) return iR;
        let fR = JR == my.ByPosNoHeight ? my.ByPosNoHeight : my.ByPos;
        return qR ? iR.join(this.right.lineAt(ZR, fR, GR, uR, ZR)) : this.left.lineAt(ZR, fR, GR, yR, tR).join(iR)
      }
      forEachLine(RR, JR, GR, yR, tR, uR) {
        let ZR = yR + this.left.height,
          qR = tR + this.left.length + this.break;
        if (this.break) RR < qR && this.left.forEachLine(RR, JR, GR, yR, tR, uR), JR >= qR && this.right.forEachLine(RR, JR, GR, ZR, qR, uR);
        else {
          let iR = this.lineAt(qR, my.ByPos, GR, yR, tR);
          RR < iR.from && this.left.forEachLine(RR, iR.from - 1, GR, yR, tR, uR), iR.to >= RR && iR.from <= JR && uR(iR), JR > iR.to && this.right.forEachLine(iR.to + 1, JR, GR, ZR, qR, uR)
        }
      }
      replace(RR, JR, GR) {
        let yR = this.left.length + this.break;
        if (JR < yR) return this.balanced(this.left.replace(RR, JR, GR), this.right);
        if (RR > this.left.length) return this.balanced(this.left, this.right.replace(RR - yR, JR - yR, GR));
        let tR = [];
        RR > 0 && this.decomposeLeft(RR, tR);
        let uR = tR.length;
        for (let ZR of GR) tR.push(ZR);
        if (RR > 0 && Fy(tR, uR - 1), JR < this.length) {
          let RR = tR.length;
          this.decomposeRight(JR, tR), Fy(tR, RR)
        }
        return Sy.of(tR)
      }
      decomposeLeft(RR, JR) {
        let GR = this.left.length;
        if (RR <= GR) return this.left.decomposeLeft(RR, JR);
        JR.push(this.left), this.break && (GR++, RR >= GR && JR.push(null)), RR > GR && this.right.decomposeLeft(RR - GR, JR)
      }
      decomposeRight(RR, JR) {
        let GR = this.left.length,
          yR = GR + this.break;
        if (RR >= yR) return this.right.decomposeRight(RR - yR, JR);
        RR < GR && this.left.decomposeRight(RR, JR), this.break && RR < yR && JR.push(null), JR.push(this.right)
      }
      balanced(RR, JR) {
        return RR.size > 2 * JR.size || JR.size > 2 * RR.size ? Sy.of(this.break ? [RR, null, JR] : [RR, JR]) : (this.left = jy(this.left, RR), this.right = jy(this.right, JR), this.setHeight(RR.height + JR.height), this.outdated = RR.outdated || JR.outdated, this.size = RR.size + JR.size, this.length = RR.length + this.break+JR.length, this)
      }
      updateHeight(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          yR = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: tR,
            right: uR
          } = this,
          ZR = JR + tR.length + this.break,
          qR = null;
        return yR && yR.from <= JR + tR.length && yR.more ? qR = tR = tR.updateHeight(RR, JR, GR, yR) : tR.updateHeight(RR, JR, GR), yR && yR.from <= ZR + uR.length && yR.more ? qR = uR = uR.updateHeight(RR, ZR, GR, yR) : uR.updateHeight(RR, ZR, GR), qR ? this.balanced(tR, uR) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function Fy(RR, JR) {
      let GR, yR;
      null == RR[JR] && (GR = RR[JR - 1]) instanceof ky && (yR = RR[JR + 1]) instanceof ky && RR.splice(JR - 1, 3, new ky(GR.length + 1 + yR.length))
    }
    class Ty {
      constructor(RR, JR) {
        this.pos = RR, this.oracle = JR, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = RR
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(RR, JR) {
        if (this.lineStart > -1) {
          let RR = Math.min(JR, this.lineEnd),
            GR = this.nodes[this.nodes.length - 1];
          GR instanceof Yy ? GR.length += RR - this.pos : (RR > this.pos || !this.isCovered) && this.nodes.push(new Yy(RR - this.pos, -1, 0)), this.writtenTo = RR, JR > RR && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = JR
      }
      point(RR, JR, GR) {
        if (RR < JR || GR.heightRelevant) {
          let yR = GR.widget ? GR.widget.estimatedHeight : 0,
            tR = GR.widget ? GR.widget.lineBreaks : 0;
          yR < 0 && (yR = this.oracle.lineHeight);
          let uR = JR - RR;
          GR.block ? this.lGR(new Ey(uR, yR, GR)) : (uR || tR || yR >= 5) && this.addLineDeco(yR, tR, uR)
        } else JR > RR && this.span(RR, JR);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: RR,
          to: JR
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = RR, this.lineEnd = JR, this.writtenTo < RR && ((this.writtenTo < RR - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, RR - 1)), this.nodes.push(null)), this.pos > RR && this.nodes.push(new Yy(this.pos - RR, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(RR, JR) {
        let GR = new ky(JR - RR);
        return this.oracle.doc.lineAt(RR).to == JR && (GR.flags |= 4), GR
      }
      ensureLine() {
        this.enterLine();
        let RR = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (RR instanceof Yy) return RR;
        let JR = new Yy(0, -1, 0);
        return this.nodes.push(JR), JR
      }
      lGR(RR) {
        this.enterLine();
        let JR = RR.deco;
        JR && JR.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(RR), this.writtenTo = this.pos = this.pos + RR.length, JR && JR.endSide > 0 && (this.covering = RR)
      }
      addLineDeco(RR, JR, GR) {
        let yR = this.ensureLine();
        yR.length += GR, yR.collapsed += GR, yR.widgetHeight = Math.max(yR.widgetHeight, RR), yR.breaks += JR, this.writtenTo = this.pos = this.pos + GR
      }
      finish(RR) {
        let JR = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || JR instanceof Yy || this.isCovered ? (this.writtenTo < this.pos || null == JR) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new Yy(0, -1, 0));
        let GR = RR;
        for (let yR of this.nodes) yR instanceof Yy && yR.updateHeight(this.oracle, GR), GR += yR ? yR.length : 1;
        return this.nodes
      }
      static build(RR, JR, GR, tR) {
        let uR = new Ty(GR, RR);
        return yR.E.spans(JR, GR, tR, uR, 0), uR.finish(GR)
      }
    }
    class sy {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(RR, JR, GR, yR) {
        (RR < JR || GR && GR.heightRelevant || yR && yR.heightRelevant) && cR(RR, JR, this.changes, 5)
      }
    }

    function hy(RR, JR) {
      let GR = RR.getBoundingClientRect(),
        yR = RR.ownerDocument,
        tR = yR.defaultView || window,
        uR = Math.max(0, GR.left),
        ZR = Math.min(tR.innerWidth, GR.right),
        qR = Math.max(0, GR.top),
        iR = Math.min(tR.innerHeight, GR.bottom);
      for (let fR = RR.parentNode; fR && fR != yR.body;)
        if (1 == fR.nodeType) {
          let JR = fR,
            GR = window.getComputedStyle(JR);
          if ((JR.scrollHeight > JR.clientHeight || JR.scrollWidth > JR.clientWidth) && "visible" != GR.overflow) {
            let GR = JR.getBoundingClientRect();
            uR = Math.max(uR, GR.left), ZR = Math.min(ZR, GR.right), qR = Math.max(qR, GR.top), iR = Math.min(fR == RR.parentNode ? tR.innerHeight : iR, GR.bottom)
          }
          fR = "absolute" == GR.position || "fixed" == GR.position ? JR.offsetParent : JR.parentNode
        } else {
          if (11 != fR.nodeType) break;
          fR = fR.host
        } return {
        left: uR - GR.left,
        right: Math.max(uR, ZR) - GR.left,
        top: qR - (GR.top + JR),
        bottom: Math.max(qR, iR) - (GR.top + JR)
      }
    }

    function Rt(RR, JR) {
      let GR = RR.getBoundingClientRect();
      return {
        left: 0,
        right: GR.right - GR.left,
        top: JR,
        bottom: GR.bottom - (GR.top + JR)
      }
    }
    class Jt {
      constructor(RR, JR, GR, yR) {
        this.from = RR, this.to = JR, this.size = GR, this.displaySize = yR
      }
      static same(RR, JR) {
        if (RR.length != JR.length) return !1;
        for (let GR = 0; GR < RR.length; GR++) {
          let yR = RR[GR],
            tR = JR[GR];
          if (yR.from != tR.from || yR.to != tR.to || yR.size != tR.size) return !1
        }
        return !0
      }
      draw(RR, JR) {
        return xR.replace({
          widget: new Gt(this.displaySize * (JR ? RR.scaleY : RR.scaleX), JR)
        }).range(this.from, this.to)
      }
    }
    class Gt extends vR {
      constructor(RR, JR) {
        super(), this.size = RR, this.vertical = JR
      }
      eq(RR) {
        return RR.size == this.size && RR.vertical == this.vertical
      }
      toDOM() {
        let RR = document.createElement("div");
        return this.vertical ? RR.style.height = this.size + "px" : (RR.style.width = this.size + "px", RR.style.height = "2px", RR.style.display = "inline-block"), RR
      }
      get estimatedHeight() {
        return this.vertical ? this.size : -1
      }
    }
    class yt {
      constructor(RR, JR) {
        this.view = RR, this.state = JR, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = qt, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = fJ.LTR, this.GJR = [], this.mustEnforceCursorAssoc = !1;
        let GR = JR.facet(hJ).some((RR => "function" != typeof RR && "cm-lineWrapping" == RR.class));
        this.heightOracle = new cy(GR), this.stateDeco = it(JR), this.heightMap = Sy.empty().applyChanges(this.stateDeco, yR.N.empty, this.heightOracle.setDoc(JR.doc), [new fG(0, 0, 0, JR.doc.length)]);
        for (let yR = 0; yR < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); yR++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = xR.set(this.lineGaps.map((RR => RR.draw(this, !1)))), this.scrollParent = RR.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let RR = [this.viewport],
          {
            main: JR
          } = this.state.selection;
        for (let GR = 0; GR <= 1; GR++) {
          let yR = GR ? JR.head : JR.anchor;
          if (!RR.some((RR => {
              let {
                from: JR,
                to: GR
              } = RR;
              return yR >= JR && yR <= GR
            }))) {
            let {
              from: JR,
              to: GR
            } = this.lineBlockAt(yR);
            RR.push(new tt(JR, GR))
          }
        }
        return this.viewports = RR.sort(((RR, JR) => RR.from - JR.from)), this.updateScaler()
      }
      updateScaler() {
        let RR = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? qt : new ft(this.heightOracle, this.heightMap, this.viewports), RR.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (RR => {
          this.viewportLines.push(Vt(RR, this.scaler))
        }))
      }
      update(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = RR.state;
        let GR = this.stateDeco;
        this.stateDeco = it(this.state);
        let tR = RR.changedRanges,
          uR = fG.extendWithRanges(tR, function(RR, JR, GR) {
            let tR = new sy;
            return yR.E.compare(RR, JR, GR, tR, 0), tR.changes
          }(GR, this.stateDeco, RR ? RR.changes : yR.ChangeSet.empty(this.state.doc.length))),
          ZR = this.heightMap.height,
          qR = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        oy(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, RR.startState.doc, this.heightOracle.setDoc(this.state.doc), uR), (this.heightMap.height != ZR || Hy) && (RR.flags |= 2), qR ? (this.scrollAnchorPos = RR.changes.mapPos(qR.from, -1), this.scrollAnchorHeight = qR.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = ZR);
        let iR = uR.length ? this.mapViewport(this.viewport, RR.changes) : this.viewport;
        (JR && (JR.range.head < iR.from || JR.range.head > iR.to) || !this.viewportIsAppropriate(iR)) && (iR = this.getViewport(0, JR));
        let fR = iR.from != this.viewport.from || iR.to != this.viewport.to;
        this.viewport = iR, RR.flags |= this.updateForViewport(), (fR || !RR.changes.empty || 2 & RR.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, RR.changes))), RR.flags |= this.computeVisibleRanges(RR.changes), JR && (this.scrollTarget = JR), !this.mustEnforceCursorAssoc && (RR.selectionSet || RR.focusChanged) && RR.view.lineWrapping && RR.state.selection.main.empty && RR.state.selection.main.assoc && !RR.state.facet(mJ) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: RR
        } = this, JR = RR.contentDOM, GR = window.getComputedStyle(JR), tR = this.heightOracle, uR = GR.whiteSpace;
        this.defaultTextDirection = "rtl" == GR.direction ? fJ.RTL : fJ.LTR;
        let ZR = this.heightOracle.mustRefreshForWrapping(uR) || "refresh" === this.mustMeasureContent,
          qR = JR.getBoundingClientRect(),
          iR = ZR || this.mustMeasureContent || this.contentDOMHeight != qR.height;
        this.contentDOMHeight = qR.height, this.mustMeasureContent = !1;
        let fR = 0,
          VR = 0;
        if (qR.width && qR.height) {
          let {
            scaleX: RR,
            scaleY: GR
          } = TR(JR, qR);
          (RR > .005 && Math.abs(this.scaleX - RR) > .005 || GR > .005 && Math.abs(this.scaleY - GR) > .005) && (this.scaleX = RR, this.scaleY = GR, fR |= 16, ZR = iR = !0)
        }
        let KR = (parseInt(GR.paddingTop) || 0) * this.scaleY,
          wR = (parseInt(GR.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == KR && this.paddingBottom == wR || (this.paddingTop = KR, this.paddingBottom = wR, fR |= 18), this.editorWidth != RR.scrollDOM.clientWidth && (tR.lineWrapping && (iR = !0), this.editorWidth = RR.scrollDOM.clientWidth, fR |= 16);
        let rR = sR(this.view.contentDOM, !1).y;
        rR != this.scrollParent && (this.scrollParent = rR, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let eR = this.getScrollOffset();
        this.scrollOffset != eR && (this.scrollAnchorHeight = -1, this.scrollOffset = eR), this.scrolledToBottom = uJ(this.scrollParent || RR.win);
        let aR = (this.printing ? Rt : hy)(JR, this.paddingTop),
          LR = aR.top - this.pixelViewport.top,
          nR = aR.bottom - this.pixelViewport.bottom;
        this.pixelViewport = aR;
        let UR = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (UR != this.inView && (this.inView = UR, UR && (iR = !0)), !this.inView && !this.scrollTarget && ! function(RR) {
            let JR = RR.getBoundingClientRect(),
              GR = RR.ownerDocument.defaultView || window;
            return JR.left < GR.innerWidth && JR.right > 0 && JR.top < GR.innerHeight && JR.bottom > 0
          }(RR.dom)) return 0;
        let WR = qR.width;
        if (this.contentDOMWidth == WR && this.editorHeight == RR.scrollDOM.clientHeight || (this.contentDOMWidth = qR.width, this.editorHeight = RR.scrollDOM.clientHeight, fR |= 16), iR) {
          let JR = RR.docView.measureVisibleLineHeights(this.viewport);
          if (tR.mustRefreshForHeights(JR) && (ZR = !0), ZR || tR.lineWrapping && Math.abs(WR - this.contentDOMWidth) > tR.charWidth) {
            let {
              lineHeight: GR,
              charWidth: yR,
              textHeight: qR
            } = RR.docView.measureTextSize();
            ZR = GR > 0 && tR.refresh(uR, GR, yR, qR, Math.max(5, WR / yR), JR), ZR && (RR.docView.minWidth = 0, fR |= 16)
          }
          LR > 0 && nR > 0 ? VR = Math.max(LR, nR) : LR < 0 && nR < 0 && (VR = Math.min(LR, nR)), oy();
          for (let GR of this.viewports) {
            let uR = GR.from == this.viewport.from ? JR : RR.docView.measureVisibleLineHeights(GR);
            this.heightMap = (ZR ? Sy.empty().applyChanges(this.stateDeco, yR.N.empty, this.heightOracle, [new fG(0, 0, 0, RR.state.doc.length)]) : this.heightMap).updateHeight(tR, 0, ZR, new Py(GR.from, uR))
          }
          Hy && (fR |= 2)
        }
        let AR = !this.viewportIsAppropriate(this.viewport, VR) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return AR && (2 & fR && (fR |= this.updateScaler()), this.viewport = this.getViewport(VR, this.scrollTarget), fR |= this.updateForViewport()), (2 & fR || AR) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(ZR ? [] : this.lineGaps, RR)), fR |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, RR.docView.enforceCursorAssoc()), fR
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(RR, JR) {
        let GR = .5 - Math.max(-.5, Math.min(.5, RR / 1e3 / 2)),
          yR = this.heightMap,
          tR = this.heightOracle,
          {
            visibleTop: uR,
            visibleBottom: ZR
          } = this,
          qR = new tt(yR.lineAt(uR - 1e3 * GR, my.ByHeight, tR, 0, 0).from, yR.lineAt(ZR + 1e3 * (1 - GR), my.ByHeight, tR, 0, 0).to);
        if (JR) {
          let {
            head: RR
          } = JR.range;
          if (RR < qR.from || RR > qR.to) {
            let GR, uR = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              ZR = yR.lineAt(RR, my.ByPos, tR, 0, 0);
            GR = "center" == JR.y ? (ZR.top + ZR.bottom) / 2 - uR / 2 : "start" == JR.y || "nearest" == JR.y && RR < qR.from ? ZR.top : ZR.bottom - uR, qR = new tt(yR.lineAt(GR - 500, my.ByHeight, tR, 0, 0).from, yR.lineAt(GR + uR + 500, my.ByHeight, tR, 0, 0).to)
          }
        }
        return qR
      }
      mapViewport(RR, JR) {
        let GR = JR.mapPos(RR.from, -1),
          yR = JR.mapPos(RR.to, 1);
        return new tt(this.heightMap.lineAt(GR, my.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(yR, my.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(RR) {
        let {
          from: JR,
          to: GR
        } = RR, yR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: tR
        } = this.heightMap.lineAt(JR, my.ByPos, this.heightOracle, 0, 0), {
          bottom: uR
        } = this.heightMap.lineAt(GR, my.ByPos, this.heightOracle, 0, 0), {
          visibleTop: ZR,
          visibleBottom: qR
        } = this;
        return (0 == JR || tR <= ZR - Math.max(10, Math.min(-yR, 250))) && (GR == this.state.doc.length || uR >= qR + Math.max(10, Math.min(yR, 250))) && tR > ZR - 2e3 && uR < qR + 2e3
      }
      mapLineGaps(RR, JR) {
        if (!RR.length || JR.empty) return RR;
        let GR = [];
        for (let yR of RR) JR.touchesRange(yR.from, yR.to) || GR.push(new Jt(JR.mapPos(yR.from), JR.mapPos(yR.to), yR.size, yR.displaySize));
        return GR
      }
      ensureLineGaps(RR, JR) {
        let GR = this.heightOracle.lineWrapping,
          tR = GR ? 1e4 : 2e3,
          uR = tR >> 1,
          ZR = tR << 1;
        if (this.defaultTextDirection != fJ.LTR && !GR) return [];
        let qR = [],
          iR = (tR, ZR, fR, VR) => {
            if (ZR - tR < uR) return;
            let KR = this.state.selection.main,
              wR = [KR.from];
            KR.empty || wR.push(KR.to);
            for (let RR of wR)
              if (RR > tR && RR < ZR) return iR(tR, RR - 10, fR, VR), void iR(RR + 10, ZR, fR, VR);
            let rR = function(RR, JR) {
              for (let GR of RR)
                if (JR(GR)) return GR;
              return
            }(RR, (RR => RR.from >= fR.from && RR.to <= fR.to && Math.abs(RR.from - tR) < uR && Math.abs(RR.to - ZR) < uR && !wR.some((JR => RR.from < JR && RR.to > JR))));
            if (!rR) {
              if (ZR < fR.to && JR && GR && JR.GJR.some((RR => RR.from <= ZR && RR.to >= ZR))) {
                let RR = JR.moveToLineBoundary(yR.k.cursor(ZR), !1, !0).head;
                RR > tR && (ZR = RR)
              }
              let RR = this.gapSize(fR, tR, ZR, VR);
              rR = new Jt(tR, ZR, RR, GR || RR < 2e6 ? RR : 2e6)
            }
            qR.push(rR)
          },
          fR = JR => {
            if (JR.length < ZR || JR.type != OR.Text) return;
            let uR = function(RR, JR, GR) {
              let tR = [],
                uR = RR,
                ZR = 0;
              yR.E.spans(GR, RR, JR, {
                span() {},
                point(RR, JR) {
                  RR > uR && (tR.push({
                    from: uR,
                    to: RR
                  }), ZR += RR - uR), uR = JR
                }
              }, 20), uR < JR && (tR.push({
                from: uR,
                to: JR
              }), ZR += JR - uR);
              return {
                total: ZR,
                WL: tR
              }
            }(JR.from, JR.to, this.stateDeco);
            if (uR.total < ZR) return;
            let qR, fR, VR = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (GR) {
              let RR, GR, yR = tR / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != VR) {
                let tR = Zt(uR, VR),
                  ZR = ((this.visibleBottom - this.visibleTop) / 2 + yR) / JR.height;
                RR = tR - ZR, GR = tR + ZR
              } else RR = (this.visibleTop - JR.top - yR) / JR.height, GR = (this.visibleBottom - JR.top + yR) / JR.height;
              qR = ut(uR, RR), fR = ut(uR, GR)
            } else {
              let GR = uR.total * this.heightOracle.charWidth,
                yR = tR * this.heightOracle.charWidth,
                ZR = 0;
              if (GR > 2e6)
                for (let tR of RR) tR.from >= JR.from && tR.from < JR.to && tR.size != tR.displaySize && tR.from * this.heightOracle.charWidth + ZR < this.pixelViewport.left && (ZR = tR.size - tR.displaySize);
              let iR, KR, wR = this.pixelViewport.left + ZR,
                rR = this.pixelViewport.right + ZR;
              if (null != VR) {
                let RR = Zt(uR, VR),
                  JR = ((rR - wR) / 2 + yR) / GR;
                iR = RR - JR, KR = RR + JR
              } else iR = (wR - yR) / GR, KR = (rR + yR) / GR;
              qR = ut(uR, iR), fR = ut(uR, KR)
            }
            qR > JR.from && iR(JR.from, qR, JR, uR), fR < JR.to && iR(fR, JR.to, JR, uR)
          };
        for (let yR of this.viewportLines) Array.isArray(yR.type) ? yR.type.forEach(fR) : fR(yR);
        return qR
      }
      gapSize(RR, JR, GR, yR) {
        let tR = Zt(yR, GR) - Zt(yR, JR);
        return this.heightOracle.lineWrapping ? RR.height * tR : yR.total * this.heightOracle.charWidth * tR
      }
      updateLineGaps(RR) {
        Jt.same(RR, this.lineGaps) || (this.lineGaps = RR, this.lineGapDeco = xR.set(RR.map((RR => RR.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(RR) {
        let JR = this.stateDeco;
        this.lineGaps.length && (JR = JR.concat(this.lineGapDeco));
        let GR = [];
        yR.E.spans(JR, this.viewport.from, this.viewport.to, {
          span(RR, JR) {
            GR.push({
              from: RR,
              to: JR
            })
          },
          point() {}
        }, 20);
        let tR = 0;
        if (GR.length != this.GJR.length) tR = 12;
        else
          for (let yR = 0; yR < GR.length && !(8 & tR); yR++) {
            let JR = this.GJR[yR],
              uR = GR[yR];
            JR.from == uR.from && JR.to == uR.to || (tR |= 4, RR && RR.mapPos(JR.from, -1) == uR.from && RR.mapPos(JR.to, 1) == uR.to || (tR |= 8))
          }
        return this.GJR = GR, tR
      }
      lineBlockAt(RR) {
        return RR >= this.viewport.from && RR <= this.viewport.to && this.viewportLines.find((JR => JR.from <= RR && JR.to >= RR)) || Vt(this.heightMap.lineAt(RR, my.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(RR) {
        return RR >= this.viewportLines[0].top && RR <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((JR => JR.top <= RR && JR.bottom >= RR)) || Vt(this.heightMap.lineAt(this.scaler.fromDOM(RR), my.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(RR) {
        let JR = this.lineBlockAtHeight(RR + 8);
        return JR.from >= this.viewport.from || this.viewportLines[0].top - RR > 200 ? JR : this.viewportLines[0]
      }
      elementAtHeight(RR) {
        return Vt(this.heightMap.blockAt(this.scaler.fromDOM(RR), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class tt {
      constructor(RR, JR) {
        this.from = RR, this.to = JR
      }
    }

    function ut(RR, JR) {
      let {
        total: GR,
        WL: yR
      } = RR;
      if (JR <= 0) return yR[0].from;
      if (JR >= 1) return yR[yR.length - 1].to;
      let tR = Math.floor(GR * JR);
      for (let uR = 0;; uR++) {
        let {
          from: RR,
          to: JR
        } = yR[uR], GR = JR - RR;
        if (tR <= GR) return RR + tR;
        tR -= GR
      }
    }

    function Zt(RR, JR) {
      let GR = 0;
      for (let {
          from: yR,
          to: tR
        }
        of RR.WL) {
        if (JR <= tR) {
          GR += JR - yR;
          break
        }
        GR += tR - yR
      }
      return GR / RR.total
    }
    const qt = {
      toDOM: RR => RR,
      fromDOM: RR => RR,
      scale: 1,
      eq(RR) {
        return RR == this
      }
    };

    function it(RR) {
      let JR = RR.facet(RG).filter((RR => "function" != typeof RR)),
        GR = RR.facet(GG).filter((RR => "function" != typeof RR));
      return GR.length && JR.push(yR.E.join(GR)), JR
    }
    class ft {
      constructor(RR, JR, GR) {
        let yR = 0,
          tR = 0,
          uR = 0;
        this.viewports = GR.map((GR => {
          let {
            from: tR,
            to: uR
          } = GR, ZR = JR.lineAt(tR, my.ByPos, RR, 0, 0).top, qR = JR.lineAt(uR, my.ByPos, RR, 0, 0).bottom;
          return yR += qR - ZR, {
            from: tR,
            to: uR,
            top: ZR,
            bottom: qR,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - yR) / (JR.height - yR);
        for (let ZR of this.viewports) ZR.domTop = uR + (ZR.top - tR) * this.scale, uR = ZR.domBottom = ZR.domTop + (ZR.bottom - ZR.top), tR = ZR.bottom
      }
      toDOM(RR) {
        for (let JR = 0, GR = 0, yR = 0;; JR++) {
          let tR = JR < this.viewports.length ? this.viewports[JR] : null;
          if (!tR || RR < tR.top) return yR + (RR - GR) * this.scale;
          if (RR <= tR.bottom) return tR.domTop + (RR - tR.top);
          GR = tR.bottom, yR = tR.domBottom
        }
      }
      fromDOM(RR) {
        for (let JR = 0, GR = 0, yR = 0;; JR++) {
          let tR = JR < this.viewports.length ? this.viewports[JR] : null;
          if (!tR || RR < tR.domTop) return GR + (RR - yR) / this.scale;
          if (RR <= tR.domBottom) return tR.top + (RR - tR.domTop);
          GR = tR.bottom, yR = tR.domBottom
        }
      }
      eq(RR) {
        return RR instanceof ft && (this.scale == RR.scale && this.viewports.length == RR.viewports.length && this.viewports.every(((JR, GR) => JR.from == RR.viewports[GR].from && JR.to == RR.viewports[GR].to)))
      }
    }

    function Vt(RR, JR) {
      if (1 == JR.scale) return RR;
      let GR = JR.toDOM(RR.top),
        yR = JR.toDOM(RR.bottom);
      return new Iy(RR.from, RR.length, GR, yR - GR, Array.isArray(RR._content) ? RR._content.map((RR => Vt(RR, JR))) : RR._content)
    }
    const Kt = yR.r.define({
        combine: RR => RR.join(" ")
      }),
      wt = yR.r.define({
        combine: RR => RR.indexOf(!0) > -1
      }),
      rt = tR.c.newName(),
      et = tR.c.newName(),
      Lt = tR.c.newName(),
      nt = {
        "&light": "." + et,
        "&dark": "." + Lt
      };

    function Ut(RR, JR, GR) {
      return new tR.c(JR, {
        finish: JR => /&/.test(JR) ? JR.replace(/&\w*/, (JR => {
          if ("&" == JR) return RR;
          if (!GR || !GR[JR]) throw new RangeError(`Unsupported selector: ${JR}`);
          return GR[JR]
        })) : RR + " " + JR
      })
    }
    const Wt = Ut("." + rt, {
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
      }, nt),
      At = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      Ct = MR.ie && MR.ie_version <= 11;
    class Xt {
      constructor(RR) {
        this.view = RR, this.active = !1, this.editContext = null, this.selectionRange = new hR, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = RR.contentDOM, this.observer = new MutationObserver((JR => {
          for (let RR of JR) this.queue.push(RR);
          (MR.ie && MR.ie_version <= 11 || MR.ios && RR.composing) && JR.some((RR => "childList" == RR.type && RR.removedNodes.length || "characterData" == RR.type && RR.oldValue.length > RR.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !MR.android || !1 === RR.constructor.EDIT_CONTEXT || MR.chrome && MR.chrome_version < 126 || (this.editContext = new lt(RR), RR.state.facet(YJ) && (RR.contentDOM.editContext = this.editContext.editContext)), Ct && (this.onCharData = RR => {
          this.queue.push({
            target: RR.target,
            type: "characterData",
            oldValue: RR.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.iW = this.iW.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var RR;
          (null === (RR = this.view.docView) || void 0 === RR ? void 0 : RR.lastUpdate) < Date.now() - 75 && this.iW()
        })), this.resizeScroll.observe(RR.scrollDOM)), this.addWindowListeners(this.win = RR.win), this.start(), "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver((RR => {
          this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), RR.length > 0 && RR[RR.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")))
        }), {
          threshold: [0, .001]
        }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((RR => {
          RR.length > 0 && RR[RR.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"))
        }), {})), this.listenForScroll(), this.readSelectionRange()
      }
      onScrollChanged(RR) {
        this.view.inputState.runHandlers("scroll", RR), this.intersecting && this.view.measure()
      }
      onScroll(RR) {
        this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(RR)
      }
      iW() {
        this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout((() => {
          this.resizeTimeout = -1, this.view.requestMeasure()
        }), 50))
      }
      onPrint(RR) {
        ("change" != RR.type && RR.type || RR.matches) && (this.view.viewState.printing = !0, this.view.measure(), setTimeout((() => {
          this.view.viewState.printing = !1, this.view.requestMeasure()
        }), 500))
      }
      updateGaps(RR) {
        if (this.gapIntersection && (RR.length != this.gaps.length || this.gaps.some(((JR, GR) => JR != RR[GR])))) {
          this.gapIntersection.disconnect();
          for (let JR of RR) this.gapIntersection.observe(JR);
          this.gaps = RR
        }
      }
      onSelectionChange(RR) {
        let JR = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: GR
        } = this, yR = this.selectionRange;
        if (GR.state.facet(YJ) ? GR.root.activeElement != this.dom : !zR(this.dom, yR)) return;
        let tR = yR.anchorNode && GR.docView.tile.nearest(yR.anchorNode);
        tR && tR.isWidget() && tR.widget.ignoreEvent(RR) ? JR || (this.selectionChanged = !1) : (MR.ie && MR.ie_version <= 11 || MR.android && MR.chrome) && !GR.state.selection.main.empty && yR.focusNode && jR(yR.focusNode, yR.focusOffset, yR.anchorNode, yR.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: RR
        } = this, JR = IR(RR.root);
        if (!JR) return !1;
        let GR = MR.safari && 11 == RR.root.nodeType && RR.root.activeElement == this.dom && function(RR, JR) {
          if (JR.getComposedRanges) {
            let GR = JR.getComposedRanges(RR.root)[0];
            if (GR) return Bt(RR, GR)
          }
          let GR = null;

          function yR(RR) {
            RR.preventDefault(), RR.stopImmediatePropagation(), GR = RR.getTargetRanges()[0]
          }
          return RR.contentDOM.addEventListener("beforeinput", yR, !0), RR.dom.ownerDocument.execCommand("indent"), RR.contentDOM.removeEventListener("beforeinput", yR, !0), GR ? Bt(RR, GR) : null
        }(this.view, JR) || JR;
        if (!GR || this.selectionRange.eq(GR)) return !1;
        let yR = zR(this.dom, GR);
        return yR && !this.selectionChanged && RR.inputState.lastFocusTime > Date.now() - 200 && RR.inputState.lastTouchTime < Date.now() - 300 && function(RR, JR) {
          let GR = JR.focusNode,
            yR = JR.focusOffset;
          if (!GR || JR.anchorNode != GR || JR.anchorOffset != yR) return !1;
          for (yR = Math.min(yR, kR(GR));;)
            if (yR) {
              if (1 != GR.nodeType) return !1;
              let RR = GR.childNodes[yR - 1];
              "false" == RR.contentEditable ? yR-- : (GR = RR, yR = kR(GR))
            } else {
              if (GR == RR) return !0;
              yR = dR(GR), GR = GR.parentNode
            }
        }(this.dom, GR) ? (this.view.inputState.lastFocusTime = 0, RR.docView.updateSelection(), !1) : (this.selectionRange.setRange(GR), yR && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(RR, JR) {
        this.selectionRange.set(RR.node, RR.offset, JR.node, JR.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let RR = 0,
          JR = null;
        for (let GR = this.dom; GR;)
          if (1 == GR.nodeType) !JR && RR < this.scrollTargets.length && this.scrollTargets[RR] == GR ? RR++ : JR || (JR = this.scrollTargets.slice(0, RR)), JR && JR.push(GR), GR = GR.assignedSlot || GR.parentNode;
          else {
            if (11 != GR.nodeType) break;
            GR = GR.host
          } if (RR < this.scrollTargets.length && !JR && (JR = this.scrollTargets.slice(0, RR)), JR) {
          for (let RR of this.scrollTargets) RR.removeEventListener("scroll", this.onScroll);
          for (let RR of this.scrollTargets = JR) RR.addEventListener("scroll", this.onScroll)
        }
      }
      ignore(RR) {
        if (!this.active) return RR();
        try {
          return this.stop(), RR()
        } finally {
          this.start(), this.clear()
        }
      }
      start() {
        this.active || (this.observer.observe(this.dom, At), Ct && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), Ct && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(RR, JR) {
        var GR;
        if (!this.delayedAndroidKey) {
          let RR = () => {
            let RR = this.delayedAndroidKey;
            if (RR) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = RR.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && RR.force && tJ(this.dom, RR.key, RR.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(RR)
        }
        this.delayedAndroidKey && "Enter" != RR || (this.delayedAndroidKey = {
          key: RR,
          keyCode: JR,
          force: this.lastChange < Date.now() - 50 || !!(null === (GR = this.delayedAndroidKey) || void 0 === GR ? void 0 : GR.force)
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
        for (let RR of this.observer.takeRecords()) this.queue.push(RR);
        return this.queue
      }
      processRecords() {
        let RR = this.pendingRecords();
        RR.length && (this.queue = []);
        let JR = -1,
          GR = -1,
          yR = !1;
        for (let tR of RR) {
          let RR = this.readMutation(tR);
          RR && (RR.typeOver && (yR = !0), -1 == JR ? ({
            from: JR,
            to: GR
          } = RR) : (JR = Math.min(RR.from, JR), GR = Math.max(RR.to, GR)))
        }
        return {
          from: JR,
          to: GR,
          typeOver: yR
        }
      }
      readChange() {
        let {
          from: RR,
          to: JR,
          typeOver: GR
        } = this.processRecords(), yR = this.selectionChanged && zR(this.dom, this.selectionRange);
        if (RR < 0 && !yR) return null;
        RR > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let tR = new Gy(this.view, RR, JR, GR);
        return this.view.docView.domChanged = {
          newSel: tR.newSel ? tR.newSel.main : null
        }, tR
      }
      flush() {
        let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        RR && this.readSelectionRange();
        let JR = this.readChange();
        if (!JR) return this.view.requestMeasure(), !1;
        let GR = this.view.state,
          yR = ty(this.view, JR);
        return this.view.state == GR && (JR.domChanged || JR.newSel && !qy(this.view.state.selection, JR.newSel.main)) && this.view.update([]), yR
      }
      readMutation(RR) {
        let JR = this.view.docView.tile.nearest(RR.target);
        if (!JR || JR.isWidget()) return null;
        if (JR.markDirty("attributes" == RR.type), "childList" == RR.type) {
          let GR = Mt(JR, RR.previousSibling || RR.target.previousSibling, -1),
            yR = Mt(JR, RR.nextSibling || RR.target.nextSibling, 1);
          return {
            from: GR ? JR.posAfter(GR) : JR.posAtStart,
            to: yR ? JR.posBefore(yR) : JR.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == RR.type ? {
          from: JR.posAtStart,
          to: JR.posAtEnd,
          typeOver: RR.target.nodeValue == RR.oldValue
        } : null
      }
      setWindow(RR) {
        RR != this.win && (this.removeWindowListeners(this.win), this.win = RR, this.addWindowListeners(this.win))
      }
      addWindowListeners(RR) {
        RR.addEventListener("resize", this.iW), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : RR.addEventListener("beforeprint", this.onPrint), RR.addEventListener("scroll", this.onScroll), RR.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(RR) {
        RR.removeEventListener("scroll", this.onScroll), RR.removeEventListener("resize", this.iW), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : RR.removeEventListener("beforeprint", this.onPrint), RR.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(RR) {
        this.editContext && (this.editContext.update(RR), RR.startState.facet(YJ) != RR.state.facet(YJ) && (RR.view.contentDOM.editContext = RR.state.facet(YJ) ? this.editContext.editContext : null))
      }
      destroy() {
        var RR, JR, GR;
        this.stop(), null === (RR = this.intersection) || void 0 === RR || RR.disconnect(), null === (JR = this.gapIntersection) || void 0 === JR || JR.disconnect(), null === (GR = this.resizeScroll) || void 0 === GR || GR.disconnect();
        for (let yR of this.scrollTargets) yR.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function Mt(RR, JR, GR) {
      for (; JR;) {
        let yR = wG.get(JR);
        if (yR && yR.parent == RR) return yR;
        let tR = JR.parentNode;
        JR = tR != RR.dom ? tR : GR > 0 ? JR.nextSibling : JR.previousSibling
      }
      return null
    }

    function Bt(RR, JR) {
      let GR = JR.startContainer,
        yR = JR.startOffset,
        tR = JR.endContainer,
        uR = JR.endOffset,
        ZR = RR.docView.domAtPos(RR.state.selection.main.anchor, 1);
      return jR(ZR.node, ZR.offset, tR, uR) && ([GR, yR, tR, uR] = [tR, uR, GR, yR]), {
        anchorNode: GR,
        anchorOffset: yR,
        focusNode: tR,
        focusOffset: uR
      }
    }
    class lt {
      constructor(RR) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(RR.state);
        let JR = this.editContext = new window.EditContext({
          text: RR.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, RR.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(RR.state.selection.main.head)
        });
        this.handlers.textupdate = GR => {
          let tR = RR.state.selection.main,
            {
              anchor: uR,
              head: ZR
            } = tR,
            qR = this.toEditorPos(GR.updateRangeStart),
            iR = this.toEditorPos(GR.updateRangeEnd);
          RR.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: GR.updateRangeStart,
            editorBase: qR,
            drifted: !1
          });
          let fR = iR - qR > GR.text.length;
          qR == this.from && uR < this.from ? qR = uR : iR == this.to && uR > this.to && (iR = uR);
          let VR = Zy(RR.state.sliceDoc(qR, iR), GR.text, (fR ? tR.from : tR.to) - qR, fR ? "end" : null);
          if (!VR) {
            let JR = yR.k.single(this.toEditorPos(GR.selectionStart), this.toEditorPos(GR.selectionEnd));
            return void(qy(JR, tR) || RR.dispatch({
              selection: JR,
              userEvent: "select"
            }))
          }
          let KR = {
            from: VR.from + qR,
            to: VR.toA + qR,
            insert: yR.N.of(GR.text.slice(VR.from, VR.toB).split("\n"))
          };
          if ((MR.mac || MR.android) && KR.from == ZR - 1 && /^\. ?$/.test(GR.text) && "off" == RR.contentDOM.getAttribute("autocorrect") && (KR = {
              from: qR,
              to: iR,
              insert: yR.N.of([GR.text.replace(".", " ")])
            }), this.pendingContextChange = KR, !RR.state.readOnly) {
            let JR = this.to - this.from + (KR.to - KR.from + KR.insert.length);
            uy(RR, KR, yR.k.single(this.toEditorPos(GR.selectionStart, JR), this.toEditorPos(GR.selectionEnd, JR)))
          }
          this.pendingContextChange && (this.revertPending(RR.state), this.setSelection(RR.state)), KR.from < KR.to && !KR.insert.length && RR.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(JR.text.slice(Math.max(0, GR.updateRangeStart - 1), Math.min(JR.text.length, GR.updateRangeStart + 1))) && this.handlers.compositionend(GR)
        }, this.handlers.characterboundsupdate = GR => {
          let yR = [],
            tR = null;
          for (let JR = this.toEditorPos(GR.rangeStart), uR = this.toEditorPos(GR.rangeEnd); JR < uR; JR++) {
            let GR = RR.coordsForChar(JR);
            tR = GR && new DOMRect(GR.left, GR.top, GR.right - GR.left, GR.bottom - GR.top) || tR || new DOMRect, yR.push(tR)
          }
          JR.updateCharacterBounds(GR.rangeStart, yR)
        }, this.handlers.textformatupdate = JR => {
          let GR = [];
          for (let RR of JR.getTextFormats()) {
            let JR = RR.underlineStyle,
              yR = RR.underlineThickness;
            if (!/none/i.test(JR) && !/none/i.test(yR)) {
              let tR = this.toEditorPos(RR.rangeStart),
                uR = this.toEditorPos(RR.rangeEnd);
              if (tR < uR) {
                let RR = `text-decoration: underline ${/^[a-z]/.test(JR)?JR+" ":"Dashed"==JR?"dashed ":"Squiggle"==JR?"wavy ":""}${/thin/i.test(yR)?1:2}px`;
                GR.push(xR.mark({
                  attributes: {
                    style: RR
                  }
                }).range(tR, uR))
              }
            }
          }
          RR.dispatch({
            effects: dJ.of(xR.set(GR))
          })
        }, this.handlers.compositionstart = () => {
          RR.inputState.composing < 0 && (RR.inputState.composing = 0, RR.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (RR.inputState.composing = -1, RR.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: JR
            } = this.composing;
            this.composing = null, JR && this.reset(RR.state)
          }
        };
        for (let GR in this.handlers) JR.addEventListener(GR, this.handlers[GR]);
        this.measureReq = {
          read: RR => {
            this.editContext.updateControlBounds(RR.contentDOM.getBoundingClientRect());
            let JR = IR(RR.root);
            JR && JR.rangeCount && this.editContext.updateSelectionBounds(JR.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(RR) {
        let JR = 0,
          GR = !1,
          yR = this.pendingContextChange;
        return RR.changes.iterChanges(((tR, uR, ZR, qR, iR) => {
          if (GR) return;
          let fR = iR.length - (uR - tR);
          if (yR && uR >= yR.to) {
            if (yR.from == tR && yR.to == uR && yR.insert.eq(iR)) return yR = this.pendingContextChange = null, JR += fR, void(this.to += fR);
            yR = null, this.revertPending(RR.state)
          }
          if (tR += JR, (uR += JR) <= this.from) this.from += fR, this.to += fR;
          else if (tR < this.to) {
            if (tR < this.from || uR > this.to || this.to - this.from + iR.length > 3e4) return void(GR = !0);
            this.editContext.updateText(this.toContextPos(tR), this.toContextPos(uR), iR.toString()), this.to += fR
          }
          JR += fR
        })), yR && !GR && this.revertPending(RR.state), !GR
      }
      update(RR) {
        let JR = this.pendingContextChange,
          GR = RR.startState.selection.main;
        this.composing && (this.composing.drifted || !RR.changes.touchesRange(GR.from, GR.to) && RR.transactions.some((RR => !RR.isUserEvent("input.type") && RR.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = RR.changes.mapPos(this.composing.editorBase)) : this.applyEdits(RR) && this.rangeIsValid(RR.state) ? (RR.docChanged || RR.selectionSet || JR) && this.setSelection(RR.state) : (this.pendingContextChange = null, this.reset(RR.state)), (RR.geometryChanged || RR.docChanged || RR.selectionSet) && RR.view.requestMeasure(this.measureReq)
      }
      resetRange(RR) {
        let {
          head: JR
        } = RR.selection.main;
        this.from = Math.max(0, JR - 1e4), this.to = Math.min(RR.doc.length, JR + 1e4)
      }
      reset(RR) {
        this.resetRange(RR), this.editContext.updateText(0, this.editContext.text.length, RR.doc.sliceString(this.from, this.to)), this.setSelection(RR)
      }
      revertPending(RR) {
        let JR = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(JR.from), this.toContextPos(JR.from + JR.insert.length), RR.doc.sliceString(JR.from, JR.to))
      }
      setSelection(RR) {
        let {
          main: JR
        } = RR.selection, GR = this.toContextPos(Math.max(this.from, Math.min(this.to, JR.anchor))), yR = this.toContextPos(JR.head);
        this.editContext.selectionStart == GR && this.editContext.selectionEnd == yR || this.editContext.updateSelection(GR, yR)
      }
      rangeIsValid(RR) {
        let {
          head: JR
        } = RR.selection.main;
        return !(this.from > 0 && JR - this.from < 500 || this.to < RR.doc.length && this.to - JR < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        RR = Math.min(RR, JR);
        let GR = this.composing;
        return GR && GR.drifted ? GR.editorBase + (RR - GR.contextBase) : RR + this.from
      }
      toContextPos(RR) {
        let JR = this.composing;
        return JR && JR.drifted ? JR.contextBase + (RR - JR.editorBase) : RR - this.from
      }
      destroy() {
        for (let RR in this.handlers) this.editContext.removeEventListener(RR, this.handlers[RR])
      }
    }
    class pt {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get GJR() {
        return this.viewState.GJR
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
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var JR;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), RR.parent && RR.parent.appendChild(this.dom);
        let {
          dispatch: GR
        } = RR;
        this.dispatchTransactions = RR.dispatchTransactions || GR && (RR => RR.forEach((RR => GR(RR, this)))) || (RR => this.update(RR)), this.dispatch = this.dispatch.bind(this), this._root = RR.root || function(RR) {
          for (; RR;) {
            if (RR && (9 == RR.nodeType || 11 == RR.nodeType && RR.host)) return RR;
            RR = RR.assignedSlot || RR.parentNode
          }
          return null
        }(RR.parent) || document, this.viewState = new yt(this, RR.state || yR.o.create(RR)), RR.scrollTo && RR.scrollTo.is(jJ) && (this.viewState.scrollTarget = RR.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(QJ).map((RR => new TJ(RR)));
        for (let yR of this.plugins) yR.update(this);
        this.observer = new Xt(this), this.inputState = new iy(this), this.inputState.ensureHandlers(this.plugins), this.docView = new oG(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (JR = document.fonts) || void 0 === JR ? void 0 : JR.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
        let tR = 1 == JR.length && JR[0] instanceof yR.R ? JR : 1 == JR.length && Array.isArray(JR[0]) ? JR[0] : [this.state.update(...JR)];
        this.dispatchTransactions(tR, this)
      }
      update(RR) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let JR, GR = !1,
          tR = !1,
          uR = this.state;
        for (let yR of RR) {
          if (yR.startState != uR) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          uR = yR.state
        }
        if (this.destroyed) return void(this.viewState.state = uR);
        let ZR = this.hasFocus,
          qR = 0,
          iR = null;
        RR.some((RR => RR.annotation(vy))) ? (this.inputState.notifiedFocused = ZR, qR = 1) : ZR != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = ZR, iR = Oy(uR, ZR), iR || (qR = 1));
        let fR = this.observer.delayedAndroidKey,
          VR = null;
        if (fR ? (this.observer.clearDelayedAndroidKey(), VR = this.observer.readChange(), (VR && !this.state.doc.eq(uR.doc) || !this.state.selection.eq(uR.selection)) && (VR = null)) : this.observer.clear(), uR.facet(yR.o.phrases) != this.state.facet(yR.o.phrases)) return this.setState(uR);
        JR = VG.create(this, uR, RR), JR.flags |= qR;
        let KR = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let JR of RR) {
            if (KR && (KR = KR.map(JR.changes)), JR.scrollIntoView) {
              let {
                main: RR
              } = JR.state.selection, {
                x: GR,
                y: tR
              } = this.state.facet(pt.cursorScrollMargin);
              KR = new SJ(RR.empty ? RR : yR.k.cursor(RR.head, RR.head > RR.anchor ? -1 : 1), "nearest", "nearest", tR, GR)
            }
            for (let RR of JR.effects) RR.is(jJ) && (KR = RR.value.clip(this.state))
          }
          this.viewState.update(JR, KR), this.bidiCache = vt.update(this.bidiCache, JR.changes), JR.empty || (this.updatePlugins(JR), this.inputState.update(JR)), GR = this.docView.update(JR), this.state.facet(iG) != this.styleModules && this.mountStyles(), tR = this.updateAttrs(), this.showAnnouncements(RR), this.docView.updateSelection(GR, RR.some((RR => RR.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (JR.startState.facet(Kt) != JR.state.facet(Kt) && (this.viewState.mustMeasureContent = !0), (GR || tR || KR || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), GR && this.docViewUpdate(), !JR.empty)
          for (let yR of this.state.facet(DJ)) try {
            yR(JR)
          } catch (wR) {
            EJ(this.state, wR, "update listener")
          }(iR || VR) && Promise.resolve().then((() => {
            iR && this.state == iR.startState && this.dispatch(iR), VR && !ty(this, VR) && fR.force && tJ(this.contentDOM, fR.key, fR.keyCode)
          }))
      }
      setState(RR) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = RR);
        this.updateState = 2;
        let JR = this.hasFocus;
        try {
          for (let RR of this.plugins) RR.destroy(this);
          this.viewState = new yt(this, RR), this.plugins = RR.facet(QJ).map((RR => new TJ(RR))), this.pluginMap.clear();
          for (let RR of this.plugins) RR.update(this);
          this.docView.destroy(), this.docView = new oG(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        JR && this.focus(), this.requestMeasure()
      }
      updatePlugins(RR) {
        let JR = RR.startState.facet(QJ),
          GR = RR.state.facet(QJ);
        if (JR != GR) {
          let yR = [];
          for (let tR of GR) {
            let GR = JR.indexOf(tR);
            if (GR < 0) yR.push(new TJ(tR));
            else {
              let JR = this.plugins[GR];
              JR.mustUpdate = RR, yR.push(JR)
            }
          }
          for (let JR of this.plugins) JR.mustUpdate != RR && JR.destroy(this);
          this.plugins = yR, this.pluginMap.clear()
        } else
          for (let yR of this.plugins) yR.mustUpdate = RR;
        for (let yR = 0; yR < this.plugins.length; yR++) this.plugins[yR].update(this);
        JR != GR && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let JR of this.plugins) {
          let GR = JR.value;
          if (GR && GR.docViewUpdate) try {
            GR.docViewUpdate(this)
          } catch (RR) {
            EJ(this.state, RR, "doc view update listener")
          }
        }
      }
      measure() {
        let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, RR && this.observer.forceFlush();
        let JR = null,
          GR = this.viewState.scrollParent,
          yR = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: tR,
            scrollAnchorHeight: uR
          } = this.viewState;
        Math.abs(yR - this.viewState.scrollOffset) > 1 && (uR = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let RR = 0;; RR++) {
            if (uR < 0)
              if (uJ(GR || this.win)) tR = -1, uR = this.viewState.heightMap.height;
              else {
                let RR = this.viewState.scrollAnchorAt(yR);
                tR = RR.from, uR = RR.top
              } this.updateState = 1;
            let qR = this.viewState.measure();
            if (!qR && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (RR > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let iR = [];
            4 & qR || ([this.measureRequests, iR] = [iR, this.measureRequests]);
            let fR = iR.map((RR => {
                try {
                  return RR.read(this)
                } catch (JR) {
                  return EJ(this.state, JR), bt
                }
              })),
              VR = VG.create(this, this.state, []),
              KR = !1;
            VR.flags |= qR, JR ? JR.flags |= qR : JR = VR, this.updateState = 2, VR.empty || (this.updatePlugins(VR), this.inputState.update(VR), this.updateAttrs(), KR = this.docView.update(VR), KR && this.docViewUpdate());
            for (let RR = 0; RR < iR.length; RR++)
              if (fR[RR] != bt) try {
                let JR = iR[RR];
                JR.write && JR.write(fR[RR], this)
              } catch (ZR) {
                EJ(this.state, ZR)
              }
            if (KR && this.docView.updateSelection(!0), !VR.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, uR = -1;
                  continue
                } {
                  let RR = ((tR < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(tR).top) - uR) / this.scaleY;
                  if ((RR > 1 || RR < -1) && (GR == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    yR += RR, GR ? GR.scrollTop += RR : this.win.scrollBy(0, RR), uR = -1;
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
        if (JR && !JR.empty)
          for (let qR of this.state.facet(DJ)) qR(JR)
      }
      get themeClasses() {
        return rt + " " + (this.state.facet(wt) ? Lt : et) + " " + this.state.facet(Kt)
      }
      updateAttrs() {
        let RR = Ot(this, sJ, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          JR = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(YJ) ? "true" : "false",
            class: "cm-content",
            style: `${MR.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (JR["aria-readonly"] = "true"), Ot(this, hJ, JR);
        let GR = this.observer.ignore((() => {
          let GR = gR(this.contentDOM, this.contentAttrs, JR),
            yR = gR(this.dom, this.editorAttrs, RR);
          return GR || yR
        }));
        return this.editorAttrs = RR, this.contentAttrs = JR, GR
      }
      showAnnouncements(RR) {
        let JR = !0;
        for (let GR of RR)
          for (let RR of GR.effects)
            if (RR.is(pt.announce)) {
              JR && (this.announceDOM.textContent = ""), JR = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = RR.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(iG);
        let RR = this.state.facet(pt.cspNonce);
        tR.c.mount(this.root, this.styleModules.concat(Wt).reverse(), RR ? {
          nonce: RR
        } : void 0)
      }
      readMeasured() {
        if (2 == this.updateState) throw new Error("Reading the editor layout isn't allowed during an update");
        0 == this.updateState && this.measureScheduled > -1 && this.measure(!1)
      }
      requestMeasure(RR) {
        if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame((() => this.measure()))), RR) {
          if (this.measureRequests.indexOf(RR) > -1) return;
          if (null != RR.key)
            for (let JR = 0; JR < this.measureRequests.length; JR++)
              if (this.measureRequests[JR].key === RR.key) return void(this.measureRequests[JR] = RR);
          this.measureRequests.push(RR)
        }
      }
      plugin(RR) {
        let JR = this.pluginMap.get(RR);
        return (void 0 === JR || JR && JR.plugin != RR) && this.pluginMap.set(RR, JR = this.plugins.find((JR => JR.plugin == RR)) || null), JR && JR.update(this).value
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
      elementAtHeight(RR) {
        return this.readMeasured(), this.viewState.elementAtHeight(RR)
      }
      lineBlockAtHeight(RR) {
        return this.readMeasured(), this.viewState.lineBlockAtHeight(RR)
      }
      get viewportLineBlocks() {
        return this.viewState.viewportLines
      }
      lineBlockAt(RR) {
        return this.viewState.lineBlockAt(RR)
      }
      get contentHeight() {
        return this.viewState.contentHeight
      }
      moveByChar(RR, JR, GR) {
        return YG(this, RR, jG(this, RR, JR, GR))
      }
      moveByGroup(RR, JR) {
        return YG(this, RR, jG(this, RR, JR, (JR => function(RR, JR, GR) {
          let tR = RR.state.charCategorizer(JR),
            uR = tR(GR);
          return RR => {
            let JR = tR(RR);
            return uR == yR.i.Space && (uR = JR), uR == JR
          }
        }(this, RR.head, JR))))
      }
      visualLineSide(RR, JR) {
        let GR = this.bidiSpans(RR),
          tR = this.textDirectionAt(RR.from),
          uR = GR[JR ? GR.length - 1 : 0];
        return yR.k.cursor(uR.side(JR, tR) + RR.from, uR.forward(!JR, tR) ? 1 : -1)
      }
      moveToLineBoundary(RR, JR) {
        return function(RR, JR, GR, tR) {
          let uR = SG(RR, JR.head, JR.assoc || -1),
            ZR = tR && uR.type == OR.Text && (RR.lineWrapping || uR.widgetLineBreaks) ? RR.coordsAtPos(JR.assoc < 0 && JR.head > uR.from ? JR.head - 1 : JR.head) : null;
          if (ZR) {
            let JR = RR.dom.getBoundingClientRect(),
              tR = RR.textDirectionAt(uR.from),
              qR = RR.posAtCoords({
                x: GR == (tR == fJ.LTR) ? JR.right - 1 : JR.left + 1,
                y: (ZR.top + ZR.bottom) / 2
              });
            if (null != qR) return yR.k.cursor(qR, GR ? -1 : 1)
          }
          return yR.k.cursor(GR ? uR.to : uR.from, GR ? -1 : 1)
        }(this, RR, JR, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(RR, JR, GR) {
        return YG(this, RR, function(RR, JR, GR, tR) {
          let uR = JR.head,
            ZR = GR ? 1 : -1;
          if (uR == (GR ? RR.state.doc.length : 0)) return yR.k.cursor(uR, JR.assoc);
          let qR, iR = JR.goalColumn,
            fR = RR.contentDOM.getBoundingClientRect(),
            VR = RR.coordsAtPos(uR, JR.assoc || ((JR.empty ? GR : JR.head == JR.from) ? 1 : -1)),
            KR = RR.documentTop;
          if (VR) null == iR && (iR = VR.left - fR.left), qR = ZR < 0 ? VR.top : VR.bottom;
          else {
            let JR = RR.viewState.lineBlockAt(uR);
            null == iR && (iR = Math.min(fR.right - fR.left, RR.defaultCharacterWidth * (uR - JR.from))), qR = (ZR < 0 ? JR.top : JR.bottom) + KR
          }
          let wR = fR.left + iR,
            rR = RR.viewState.heightOracle.textHeight >> 1,
            eR = null !== tR && void 0 !== tR ? tR : rR;
          for (let aR = 0;; aR += rR) {
            let JR = qR + (eR + aR) * ZR,
              tR = QG(RR, {
                x: wR,
                y: JR
              }, !1, ZR);
            if (GR ? JR > fR.bottom : JR < fR.top) return yR.k.cursor(tR.pos, tR.assoc);
            let uR = RR.coordsAtPos(tR.pos, tR.assoc),
              VR = uR ? (uR.top + uR.bottom) / 2 : 0;
            if (!uR || (GR ? VR > qR : VR < qR)) return yR.k.cursor(tR.pos, tR.assoc, void 0, iR)
          }
        }(this, RR, JR, GR))
      }
      domAtPos(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(RR, JR)
      }
      posAtDOM(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(RR, JR)
      }
      posAtCoords(RR) {
        let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let GR = QG(this, RR, JR);
        return GR && GR.pos
      }
      posAndSideAtCoords(RR) {
        let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), QG(this, RR, JR)
      }
      coordsAtPos(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let GR = this.docView.coordsAt(RR, JR);
        if (!GR || GR.left == GR.right) return GR;
        let yR = this.state.doc.lineAt(RR),
          tR = this.bidiSpans(yR);
        return QR(GR, tR[WJ.find(tR, RR - yR.from, -1, JR)].dir == fJ.LTR == JR > 0)
      }
      coordsForChar(RR) {
        return this.readMeasured(), this.docView.coordsForChar(RR)
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
      textDirectionAt(RR) {
        return !this.state.facet(IJ) || RR < this.viewport.from || RR > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(RR))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(RR) {
        if (RR.length > gt) return lJ(RR.length);
        let JR, GR = this.textDirectionAt(RR.from);
        for (let tR of this.bidiCache)
          if (tR.from == RR.from && tR.dir == GR && (tR.fresh || AJ(tR.isolates, JR = uG(this, RR)))) return tR.order;
        JR || (JR = uG(this, RR));
        let yR = BJ(RR.text, GR, JR);
        return this.bidiCache.push(new vt(RR.from, RR.to, GR, JR, !0, yR)), yR
      }
      get hasFocus() {
        var RR;
        return (this.dom.ownerDocument.hasFocus() || MR.safari && (null === (RR = this.inputState) || void 0 === RR ? void 0 : RR.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          GJ(this.contentDOM), this.docView.updateSelection()
        }))
      }
      setRoot(RR) {
        this._root != RR && (this._root = RR, this.observer.setWindow((9 == RR.nodeType ? RR : RR.ownerDocument).defaultView || window), this.mountStyles())
      }
      destroy() {
        this.root.activeElement == this.contentDOM && this.contentDOM.blur();
        for (let RR of this.plugins) RR.destroy(this);
        this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0
      }
      static scrollIntoView(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var GR, tR, uR, ZR;
        return jJ.of(new SJ("number" == typeof RR ? yR.k.cursor(RR) : RR, null !== (GR = JR.y) && void 0 !== GR ? GR : "nearest", null !== (tR = JR.x) && void 0 !== tR ? tR : "nearest", null !== (uR = JR.yMargin) && void 0 !== uR ? uR : 5, null !== (ZR = JR.xMargin) && void 0 !== ZR ? ZR : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: RR,
          scrollLeft: JR
        } = this.scrollDOM, GR = this.viewState.scrollAnchorAt(RR);
        return jJ.of(new SJ(yR.k.cursor(GR.from), "start", "start", GR.top - RR, JR, !0))
      }
      setTabFocusMode(RR) {
        null == RR ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof RR ? this.inputState.tabFocusMode = RR ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + RR)
      }
      static domEventHandlers(RR) {
        return FJ.define((() => ({})), {
          eventHandlers: RR
        })
      }
      static domEventObservers(RR) {
        return FJ.define((() => ({})), {
          eventObservers: RR
        })
      }
      static theme(RR, JR) {
        let GR = tR.c.newName(),
          yR = [Kt.of(GR), iG.of(Ut(`.${GR}`, RR))];
        return JR && JR.dark && yR.push(wt.of(!0)), yR
      }
      static baseTheme(RR) {
        return yR.y.lowest(iG.of(Ut("." + rt, RR, nt)))
      }
      static findFromDOM(RR) {
        var JR;
        let GR = RR.querySelector(".cm-content"),
          yR = GR && wG.get(GR) || wG.get(RR);
        return (null === (JR = null === yR || void 0 === yR ? void 0 : yR.root) || void 0 === JR ? void 0 : JR.view) || null
      }
    }
    pt.styleModule = iG, pt.inputHandler = HJ, pt.clipboardInputFilter = cJ, pt.clipboardOutputFilter = PJ, pt.scrollHandler = zJ, pt.focusChangeEffect = oJ, pt.perLineTextDirection = IJ, pt.exceptionSink = NJ, pt.updateListener = DJ, pt.editable = YJ, pt.mouseSelectionStyle = xJ, pt.dragMovesSelection = OJ, pt.clickAddsSelectionRange = vJ, pt.Cy = RG, pt.blockWrappers = JG, pt.outerDecorations = GG, pt.atomicRanges = yG, pt.bidiIsolatedRanges = tG, pt.cursorScrollMargin = yR.r.define({
      combine: RR => {
        let JR = 5,
          GR = 5;
        for (let yR of RR) "number" == typeof yR ? JR = GR = yR : ({
          x: JR,
          y: GR
        } = yR);
        return {
          x: JR,
          y: GR
        }
      }
    }), pt.scrollMargins = ZG, pt.darkTheme = wt, pt.cspNonce = yR.r.define({
      combine: RR => RR.length ? RR[0] : ""
    }), pt.contentAttributes = hJ, pt.editorAttributes = sJ, pt.lineWrapping = pt.contentAttributes.of({
      class: "cm-lineWrapping"
    }), pt.announce = yR.K.define();
    const gt = 4096,
      bt = {};
    class vt {
      constructor(RR, JR, GR, yR, tR, uR) {
        this.from = RR, this.to = JR, this.dir = GR, this.isolates = yR, this.fresh = tR, this.order = uR
      }
      static update(RR, JR) {
        if (JR.empty && !RR.some((RR => RR.fresh))) return RR;
        let GR = [],
          yR = RR.length ? RR[RR.length - 1].dir : fJ.LTR;
        for (let tR = Math.max(0, RR.length - 10); tR < RR.length; tR++) {
          let uR = RR[tR];
          uR.dir != yR || JR.touchesRange(uR.from, uR.to) || GR.push(new vt(JR.mapPos(uR.from, 1), JR.mapPos(uR.to, -1), uR.dir, uR.isolates, !1, uR.order))
        }
        return GR
      }
    }

    function Ot(RR, JR, GR) {
      for (let yR = RR.state.facet(JR), tR = yR.length - 1; tR >= 0; tR--) {
        let JR = yR[tR],
          uR = "function" == typeof JR ? JR(RR) : JR;
        uR && BR(uR, GR)
      }
      return GR
    }
    const xt = MR.mac ? "mac" : MR.windows ? "win" : MR.linux ? "linux" : "key";

    function Nt(RR, JR, GR) {
      return JR.altKey && (RR = "Alt-" + RR), JR.ctrlKey && (RR = "Ctrl-" + RR), JR.metaKey && (RR = "Meta-" + RR), !1 !== GR && JR.shiftKey && (RR = "Shift-" + RR), RR
    }
    const Dt = yR.y.default(pt.domEventHandlers({
        keydown: (RR, JR) => St(ct(JR.state), RR, JR, "editor")
      })),
      Ht = yR.r.define({
        enables: Dt
      }),
      ot = new WeakMap;

    function ct(RR) {
      let JR = RR.facet(Ht),
        GR = ot.get(JR);
      return GR || ot.set(JR, GR = function(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xt,
          GR = Object.create(null),
          yR = Object.create(null),
          tR = (RR, JR) => {
            let GR = yR[RR];
            if (null == GR) yR[RR] = JR;
            else if (GR != JR) throw new Error("Key binding " + RR + " is used both as a regular binding and as a multi-stroke prefix")
          },
          uR = (RR, yR, uR, ZR, qR) => {
            var iR, fR;
            let VR = GR[RR] || (GR[RR] = Object.create(null)),
              KR = yR.split(/ (?!$)/).map((RR => function(RR, JR) {
                const GR = RR.split(/-(?!$)/);
                let yR, tR, uR, ZR, qR = GR[GR.length - 1];
                "Space" == qR && (qR = " ");
                for (let iR = 0; iR < GR.length - 1; ++iR) {
                  const RR = GR[iR];
                  if (/^(cmd|meta|m)$/i.test(RR)) ZR = !0;
                  else if (/^a(lt)?$/i.test(RR)) yR = !0;
                  else if (/^(c|ctrl|control)$/i.test(RR)) tR = !0;
                  else if (/^s(hift)?$/i.test(RR)) uR = !0;
                  else {
                    if (!/^mod$/i.test(RR)) throw new Error("Unrecognized modifier name: " + RR);
                    "mac" == JR ? ZR = !0 : tR = !0
                  }
                }
                return yR && (qR = "Alt-" + qR), tR && (qR = "Ctrl-" + qR), ZR && (qR = "Meta-" + qR), uR && (qR = "Shift-" + qR), qR
              }(RR, JR)));
            for (let JR = 1; JR < KR.length; JR++) {
              let GR = KR.slice(0, JR).join(" ");
              tR(GR, !0), VR[GR] || (VR[GR] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [JR => {
                  let yR = It = {
                    view: JR,
                    prefix: GR,
                    scope: RR
                  };
                  return setTimeout((() => {
                    It == yR && (It = null)
                  }), mt), !0
                }]
              })
            }
            let wR = KR.join(" ");
            tR(wR, !1);
            let rR = VR[wR] || (VR[wR] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (fR = null === (iR = VR._any) || void 0 === iR ? void 0 : iR.run) || void 0 === fR ? void 0 : fR.slice()) || []
            });
            uR && rR.run.push(uR), ZR && (rR.preventDefault = !0), qR && (rR.stopPropagation = !0)
          };
        for (let ZR of RR) {
          let RR = ZR.scope ? ZR.scope.split(" ") : ["editor"];
          if (ZR.any)
            for (let JR of RR) {
              let RR = GR[JR] || (GR[JR] = Object.create(null));
              RR._any || (RR._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: yR
              } = ZR;
              for (let JR in RR) RR[JR].run.push((RR => yR(RR, zt)))
            }
          let yR = ZR[JR] || ZR.key;
          if (yR)
            for (let JR of RR) uR(JR, yR, ZR.run, ZR.preventDefault, ZR.stopPropagation), ZR.shift && uR(JR, "Shift-" + yR, ZR.shift, ZR.preventDefault, ZR.stopPropagation)
        }
        return GR
      }(JR.reduce(((RR, JR) => RR.concat(JR)), []))), GR
    }

    function Pt(RR, JR, GR) {
      return St(ct(RR.state), JR, RR, GR)
    }
    let It = null;
    const mt = 4e3;
    let zt = null;

    function St(RR, JR, GR, tR) {
      zt = JR;
      let fR = function(RR) {
          var JR = !(qR && RR.metaKey && RR.shiftKey && !RR.ctrlKey && !RR.altKey || iR && RR.shiftKey && RR.key && 1 == RR.key.length || "Unidentified" == RR.key) && RR.key || (RR.shiftKey ? ZR : uR)[RR.keyCode] || RR.key || "Unidentified";
          return "Esc" == JR && (JR = "Escape"), "Del" == JR && (JR = "Delete"), "Left" == JR && (JR = "ArrowLeft"), "Up" == JR && (JR = "ArrowUp"), "Right" == JR && (JR = "ArrowRight"), "Down" == JR && (JR = "ArrowDown"), JR
        }(JR),
        VR = (0, yR.V)(fR, 0),
        KR = (0, yR.Y)(VR) == fR.length && " " != fR,
        wR = "",
        rR = !1,
        eR = !1,
        aR = !1;
      It && It.view == GR && It.scope == tR && (wR = It.prefix + " ", ry.indexOf(JR.keyCode) < 0 && (eR = !0, It = null));
      let LR, nR, UR = new Set,
        WR = RR => {
          if (RR) {
            for (let JR of RR.run)
              if (!UR.has(JR) && (UR.add(JR), JR(GR))) return RR.stopPropagation && (aR = !0), !0;
            RR.preventDefault && (RR.stopPropagation && (aR = !0), eR = !0)
          }
          return !1
        },
        AR = RR[tR];
      return AR && (WR(AR[wR + Nt(fR, JR, !KR)]) ? rR = !0 : !KR || !(JR.altKey || JR.metaKey || JR.ctrlKey) || MR.windows && JR.ctrlKey && JR.altKey || MR.mac && JR.altKey && !JR.ctrlKey && !JR.metaKey || !(LR = uR[JR.keyCode]) || LR == fR ? KR && JR.shiftKey && WR(AR[wR + Nt(fR, JR, !0)]) && (rR = !0) : (WR(AR[wR + Nt(LR, JR, !0)]) || JR.shiftKey && (nR = ZR[JR.keyCode]) != fR && nR != LR && WR(AR[wR + Nt(nR, JR, !1)])) && (rR = !0), !rR && WR(AR._any) && (rR = !0)), eR && (rR = !0), rR && aR && JR.stopPropagation(), zt = null, rR
    }
    class jt {
      constructor(RR, JR, GR, yR, tR) {
        this.className = RR, this.left = JR, this.top = GR, this.width = yR, this.height = tR
      }
      draw() {
        let RR = document.createElement("div");
        return RR.className = this.className, this.adjust(RR), RR
      }
      update(RR, JR) {
        return JR.className == this.className && (this.adjust(RR), !0)
      }
      adjust(RR) {
        RR.style.left = this.left + "px", RR.style.top = this.top + "px", null != this.width && (RR.style.width = this.width + "px"), RR.style.height = this.height + "px"
      }
      eq(RR) {
        return this.left == RR.left && this.top == RR.top && this.width == RR.width && this.height == RR.height && this.className == RR.className
      }
      static forRange(RR, JR, GR) {
        if (GR.empty) {
          let yR = RR.coordsAtPos(GR.head, GR.assoc || 1);
          if (!yR) return [];
          let tR = dt(RR);
          return [new jt(JR, yR.left - tR.left, yR.top - tR.top, null, yR.bottom - yR.top)]
        }
        return function(RR, JR, GR) {
          if (GR.to <= RR.viewport.from || GR.from >= RR.viewport.to) return [];
          let yR = Math.max(GR.from, RR.viewport.from),
            tR = Math.min(GR.to, RR.viewport.to),
            uR = RR.textDirection == fJ.LTR,
            ZR = RR.contentDOM,
            qR = ZR.getBoundingClientRect(),
            iR = dt(RR),
            fR = ZR.querySelector(".cm-line"),
            VR = fR && window.getComputedStyle(fR),
            KR = qR.left + (VR ? parseInt(VR.paddingLeft) + Math.min(0, parseInt(VR.textIndent)) : 0),
            wR = qR.right - (VR ? parseInt(VR.paddingRight) : 0),
            rR = SG(RR, yR, 1),
            eR = SG(RR, tR, -1),
            aR = rR.type == OR.Text ? rR : null,
            LR = eR.type == OR.Text ? eR : null;
          aR && (RR.lineWrapping || rR.widgetLineBreaks) && (aR = Et(RR, yR, 1, aR));
          LR && (RR.lineWrapping || eR.widgetLineBreaks) && (LR = Et(RR, tR, -1, LR));
          if (aR && LR && aR.from == LR.from && aR.to == LR.to) return UR(WR(GR.from, GR.to, aR));
          {
            let JR = aR ? WR(GR.from, null, aR) : AR(rR, !1),
              yR = LR ? WR(null, GR.to, LR) : AR(eR, !0),
              tR = [];
            return (aR || rR).to < (LR || eR).from - (aR && LR ? 1 : 0) || rR.widgetLineBreaks > 1 && JR.bottom + RR.defaultLineHeight / 2 < yR.top ? tR.push(nR(KR, JR.bottom, wR, yR.top)) : JR.bottom < yR.top && RR.elementAtHeight((JR.bottom + yR.top) / 2).type == OR.Text && (JR.bottom = yR.top = (JR.bottom + yR.top) / 2), UR(JR).concat(tR).concat(UR(yR))
          }

          function nR(RR, GR, yR, tR) {
            return new jt(JR, RR - iR.left, GR - iR.top, Math.max(0, yR - RR), tR - GR)
          }

          function UR(RR) {
            let {
              top: JR,
              bottom: GR,
              horizontal: yR
            } = RR, tR = [];
            for (let uR = 0; uR < yR.length; uR += 2) tR.push(nR(yR[uR], JR, yR[uR + 1], GR));
            return tR
          }

          function WR(JR, GR, yR) {
            let tR = 1e9,
              ZR = -1e9,
              qR = [];

            function iR(JR, GR, iR, fR, VR) {
              let rR = RR.coordsAtPos(JR, JR == yR.to ? -2 : 2),
                eR = RR.coordsAtPos(iR, iR == yR.from ? 2 : -2);
              rR && eR && (tR = Math.min(rR.top, eR.top, tR), ZR = Math.max(rR.bottom, eR.bottom, ZR), VR == fJ.LTR ? qR.push(uR && GR ? KR : rR.left, uR && fR ? wR : eR.right) : qR.push(!uR && fR ? KR : eR.left, !uR && GR ? wR : rR.right))
            }
            let fR = null !== JR && void 0 !== JR ? JR : yR.from,
              VR = null !== GR && void 0 !== GR ? GR : yR.to;
            for (let uR of RR.GJR)
              if (uR.to > fR && uR.from < VR)
                for (let yR = Math.max(uR.from, fR), tR = Math.min(uR.to, VR);;) {
                  let uR = RR.state.doc.lineAt(yR);
                  for (let ZR of RR.bidiSpans(uR)) {
                    let RR = ZR.from + uR.from,
                      qR = ZR.to + uR.from;
                    if (RR >= tR) break;
                    qR > yR && iR(Math.max(RR, yR), null == JR && RR <= fR, Math.min(qR, tR), null == GR && qR >= VR, ZR.dir)
                  }
                  if (yR = uR.to + 1, yR >= tR) break
                }
            return 0 == qR.length && iR(fR, null == JR, VR, null == GR, RR.textDirection), {
              top: tR,
              bottom: ZR,
              horizontal: qR
            }
          }

          function AR(RR, JR) {
            let GR = qR.top + (JR ? RR.top : RR.bottom);
            return {
              top: GR,
              bottom: GR,
              horizontal: []
            }
          }
        }(RR, JR, GR)
      }
    }

    function dt(RR) {
      let JR = RR.scrollDOM.getBoundingClientRect();
      return {
        left: (RR.textDirection == fJ.LTR ? JR.left : JR.right - RR.scrollDOM.clientWidth * RR.scaleX) - RR.scrollDOM.scrollLeft * RR.scaleX,
        top: JR.top - RR.scrollDOM.scrollTop * RR.scaleY
      }
    }

    function Et(RR, JR, GR, yR) {
      let tR = RR.coordsAtPos(JR, 2 * GR);
      if (!tR) return yR;
      let uR = RR.dom.getBoundingClientRect(),
        ZR = (tR.top + tR.bottom) / 2,
        qR = RR.posAtCoords({
          x: uR.left + 1,
          y: ZR
        }),
        iR = RR.posAtCoords({
          x: uR.right - 1,
          y: ZR
        });
      return null == qR || null == iR ? yR : {
        from: Math.max(yR.from, Math.min(qR, iR)),
        to: Math.min(yR.to, Math.max(qR, iR))
      }
    }
    class Yt {
      constructor(RR, JR) {
        this.view = RR, this.layer = JR, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = RR.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), JR.above && this.dom.classList.add("cm-layer-above"), JR.class && this.dom.classList.add(JR.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(RR.state), RR.requestMeasure(this.measureReq), JR.mount && JR.mount(this.dom, RR)
      }
      update(RR) {
        RR.startState.facet(kt) != RR.state.facet(kt) && this.setOrder(RR.state), (this.layer.update(RR, this.dom) || RR.geometryChanged) && (this.scale(), RR.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(RR) {
        !1 !== this.layer.updateOnDocViewUpdate && RR.requestMeasure(this.measureReq)
      }
      setOrder(RR) {
        let JR = 0,
          GR = RR.facet(kt);
        for (; JR < GR.length && GR[JR] != this.layer;) JR++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - JR)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: RR,
          scaleY: JR
        } = this.view;
        RR == this.scaleX && JR == this.scaleY || (this.scaleX = RR, this.scaleY = JR, this.dom.style.transform = `scale(${1/RR}, ${1/JR})`)
      }
      draw(RR) {
        if (RR.length != this.drawn.length || RR.some(((RR, JR) => {
            return GR = RR, yR = this.drawn[JR], !(GR.constructor == yR.constructor && GR.eq(yR));
            var GR, yR
          }))) {
          let JR = this.dom.firstChild,
            GR = 0;
          for (let yR of RR) yR.update && JR && yR.constructor && this.drawn[GR].constructor && yR.update(JR, this.drawn[GR]) ? (JR = JR.nextSibling, GR++) : this.dom.insertBefore(yR.draw(), JR);
          for (; JR;) {
            let RR = JR.nextSibling;
            JR.remove(), JR = RR
          }
          this.drawn = RR, MR.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const kt = yR.r.define();

    function Qt(RR) {
      return [FJ.define((JR => new Yt(JR, RR))), kt.of(RR)]
    }
    const Ft = yR.r.define({
      combine: RR => (0, yR.ab)(RR, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (RR, JR) => Math.min(RR, JR),
        drawRangeCursor: (RR, JR) => RR || JR
      })
    });

    function Tt() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Ft.of(RR), ht, Ju, Gu, mJ.of(!0)]
    }

    function st(RR) {
      return RR.startState.facet(Ft) != RR.state.facet(Ft)
    }
    const ht = Qt({
      above: !0,
      markers(RR) {
        let {
          state: JR
        } = RR, GR = JR.facet(Ft), tR = [];
        for (let uR of JR.selection.WL) {
          let ZR = uR == JR.selection.main;
          if (uR.empty || GR.drawRangeCursor && !(ZR && MR.ios && GR.iosSelectionHandles)) {
            let JR = ZR ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              GR = uR.empty ? uR : yR.k.cursor(uR.head, uR.assoc);
            for (let yR of jt.forRange(RR, JR, GR)) tR.push(yR)
          }
        }
        return tR
      },
      update(RR, JR) {
        RR.transactions.some((RR => RR.selection)) && (JR.style.animationName = "cm-blink" == JR.style.animationName ? "cm-blink2" : "cm-blink");
        let GR = st(RR);
        return GR && Ru(RR.state, JR), RR.docChanged || RR.selectionSet || GR
      },
      mount(RR, JR) {
        Ru(JR.state, RR)
      },
      class: "cm-cursorLayer"
    });

    function Ru(RR, JR) {
      JR.style.animationDuration = RR.facet(Ft).cursorBlinkRate + "ms"
    }
    const Ju = Qt({
        above: !1,
        markers(RR) {
          let JR = [],
            {
              main: GR,
              WL: tR
            } = RR.state.selection;
          for (let yR of tR)
            if (!yR.empty)
              for (let GR of jt.forRange(RR, "cm-selectionBackground", yR)) JR.push(GR);
          if (MR.ios && !GR.empty && RR.state.facet(Ft).iosSelectionHandles) {
            for (let tR of jt.forRange(RR, "cm-selectionHandle cm-selectionHandle-start", yR.k.cursor(GR.from, 1))) JR.push(tR);
            for (let tR of jt.forRange(RR, "cm-selectionHandle cm-selectionHandle-end", yR.k.cursor(GR.to, 1))) JR.push(tR)
          }
          return JR
        },
        update: (RR, JR) => RR.docChanged || RR.selectionSet || RR.viewportChanged || st(RR),
        class: "cm-selectionLayer"
      }),
      Gu = yR.y.highest(pt.theme({
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
      yu = yR.K.define({
        map: (RR, JR) => null == RR ? null : JR.mapPos(RR)
      }),
      tu = yR.L.define({
        create: () => null,
        update: (RR, JR) => (null != RR && (RR = JR.changes.mapPos(RR)), JR.effects.reduce(((RR, JR) => JR.is(yu) ? JR.value : RR), RR))
      }),
      uu = FJ.fromClass(class {
        constructor(RR) {
          this.view = RR, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(RR) {
          var JR;
          let GR = RR.state.field(tu);
          null == GR ? null != this.cursor && (null === (JR = this.cursor) || void 0 === JR || JR.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (RR.startState.field(tu) != GR || RR.docChanged || RR.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: RR
          } = this, JR = RR.state.field(tu), GR = null != JR && RR.coordsAtPos(JR);
          if (!GR) return null;
          let yR = RR.scrollDOM.getBoundingClientRect();
          return {
            left: GR.left - yR.left + RR.scrollDOM.scrollLeft * RR.scaleX,
            top: GR.top - yR.top + RR.scrollDOM.scrollTop * RR.scaleY,
            height: GR.bottom - GR.top
          }
        }
        drawCursor(RR) {
          if (this.cursor) {
            let {
              scaleX: JR,
              scaleY: GR
            } = this.view;
            RR ? (this.cursor.style.left = RR.left / JR + "px", this.cursor.style.top = RR.top / GR + "px", this.cursor.style.height = RR.height / GR + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(RR) {
          this.view.state.field(tu) != RR && this.view.dispatch({
            effects: yu.of(RR)
          })
        }
      }, {
        eventObservers: {
          dragover(RR) {
            this.setDropPos(this.view.posAtCoords({
              x: RR.clientX,
              y: RR.clientY
            }))
          },
          dragleave(RR) {
            RR.target != this.view.contentDOM && this.view.contentDOM.contains(RR.relatedTarget) || this.setDropPos(null)
          },
          dragend() {
            this.setDropPos(null)
          },
          drop() {
            this.setDropPos(null)
          }
        }
      });

    function Zu() {
      return [tu, uu]
    }

    function qu(RR, JR, GR, yR, tR) {
      JR.lastIndex = 0;
      for (let uR, ZR = RR.iterRange(GR, yR), qR = GR; !ZR.next().done; qR += ZR.value.length)
        if (!ZR.lineBreak)
          for (; uR = JR.exec(ZR.value);) tR(qR + uR.index, uR)
    }
    class iu {
      constructor(RR) {
        const {
          regexp: JR,
          decoration: GR,
          decorate: yR,
          boundary: tR,
          maxLength: uR = 1e3
        } = RR;
        if (!JR.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = JR, yR) this.addMatch = (RR, JR, GR, tR) => yR(tR, GR, GR + RR[0].length, RR, JR);
        else if ("function" == typeof GR) this.addMatch = (RR, JR, yR, tR) => {
          let uR = GR(RR, JR, yR);
          uR && tR(yR, yR + RR[0].length, uR)
        };
        else {
          if (!GR) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (RR, JR, yR, tR) => tR(yR, yR + RR[0].length, GR)
        }
        this.boundary = tR, this.maxLength = uR
      }
      createDeco(RR) {
        let JR = new yR.C,
          GR = JR.add.bind(JR);
        for (let {
            from: yR,
            to: tR
          }
          of
          function(RR, JR) {
            let GR = RR.GJR;
            if (1 == GR.length && GR[0].from == RR.viewport.from && GR[0].to == RR.viewport.to) return GR;
            let yR = [];
            for (let {
                from: tR,
                to: uR
              }
              of GR) tR = Math.max(RR.state.doc.lineAt(tR).from, tR - JR), uR = Math.min(RR.state.doc.lineAt(uR).to, uR + JR), yR.length && yR[yR.length - 1].to >= tR ? yR[yR.length - 1].to = uR : yR.push({
              from: tR,
              to: uR
            });
            return yR
          }(RR, this.maxLength)) qu(RR.state.doc, this.regexp, yR, tR, ((JR, yR) => this.addMatch(yR, RR, JR, GR)));
        return JR.finish()
      }
      updateDeco(RR, JR) {
        let GR = 1e9,
          yR = -1;
        return RR.docChanged && RR.changes.iterChanges(((JR, tR, uR, ZR) => {
          ZR >= RR.view.viewport.from && uR <= RR.view.viewport.to && (GR = Math.min(uR, GR), yR = Math.max(ZR, yR))
        })), RR.viewportMoved || yR - GR > 1e3 ? this.createDeco(RR.view) : yR > -1 ? this.updateRange(RR.view, JR.map(RR.changes), GR, yR) : JR
      }
      updateRange(RR, JR, GR, yR) {
        for (let tR of RR.GJR) {
          let uR = Math.max(tR.from, GR),
            ZR = Math.min(tR.to, yR);
          if (ZR >= uR) {
            let GR = RR.state.doc.lineAt(uR),
              yR = GR.to < ZR ? RR.state.doc.lineAt(ZR) : GR,
              qR = Math.max(tR.from, GR.from),
              iR = Math.min(tR.to, yR.to);
            if (this.boundary) {
              for (; uR > GR.from; uR--)
                if (this.boundary.test(GR.text[uR - 1 - GR.from])) {
                  qR = uR;
                  break
                } for (; ZR < yR.to; ZR++)
                if (this.boundary.test(yR.text[ZR - yR.from])) {
                  iR = ZR;
                  break
                }
            }
            let fR, VR = [],
              KR = (RR, JR, GR) => VR.push(GR.range(RR, JR));
            if (GR == yR)
              for (this.regexp.lastIndex = qR - GR.from;
                (fR = this.regexp.exec(GR.text)) && fR.index < iR - GR.from;) this.addMatch(fR, RR, fR.index + GR.from, KR);
            else qu(RR.state.doc, this.regexp, qR, iR, ((JR, GR) => this.addMatch(GR, RR, JR, KR)));
            JR = JR.update({
              filterFrom: qR,
              filterTo: iR,
              filter: (RR, JR) => RR < qR || JR > iR,
              add: VR
            })
          }
        }
        return JR
      }
    }
    const fu = null != /x/.unicode ? "gu" : "g",
      Vu = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", fu),
      Ku = {
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
    let wu = null;
    const ru = yR.r.define({
      combine(RR) {
        let JR = (0, yR.ab)(RR, {
          render: null,
          specialChars: Vu,
          addSpecialChars: null
        });
        return (JR.replaceTabs = ! function() {
          var RR;
          if (null == wu && "undefined" != typeof document && document.body) {
            let JR = document.body.style;
            wu = null != (null !== (RR = JR.tabSize) && void 0 !== RR ? RR : JR.MozTabSize)
          }
          return wu || !1
        }()) && (JR.specialChars = new RegExp("\t|" + JR.specialChars.source, fu)), JR.addSpecialChars && (JR.specialChars = new RegExp(JR.specialChars.source + "|" + JR.addSpecialChars.source, fu)), JR
      }
    });

    function eu() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [ru.of(RR), au || (au = FJ.fromClass(class {
        constructor(RR) {
          this.view = RR, this.Cy = xR.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(RR.state.facet(ru)), this.Cy = this.decorator.createDeco(RR)
        }
        makeDecorator(RR) {
          return new iu({
            regexp: RR.specialChars,
            decoration: (JR, GR, tR) => {
              let {
                doc: uR
              } = GR.state, ZR = (0, yR.V)(JR[0], 0);
              if (9 == ZR) {
                let RR = uR.lineAt(tR),
                  JR = GR.state.tabSize,
                  ZR = (0, yR.bb)(RR.text, JR, tR - RR.from);
                return xR.replace({
                  widget: new nu((JR - ZR % JR) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[ZR] || (this.decorationCache[ZR] = xR.replace({
                widget: new Lu(RR, ZR)
              }))
            },
            boundary: RR.replaceTabs ? void 0 : /[^]/
          })
        }
        update(RR) {
          let JR = RR.state.facet(ru);
          RR.startState.facet(ru) != JR ? (this.decorator = this.makeDecorator(JR), this.Cy = this.decorator.createDeco(RR.view)) : this.Cy = this.decorator.updateDeco(RR, this.Cy)
        }
      }, {
        Cy: RR => RR.Cy
      }))]
    }
    let au = null;
    class Lu extends vR {
      constructor(RR, JR) {
        super(), this.options = RR, this.code = JR
      }
      eq(RR) {
        return RR.code == this.code
      }
      toDOM(RR) {
        let JR = function(RR) {
            return RR >= 32 ? "\u2022" : 10 == RR ? "\u2424" : String.fromCharCode(9216 + RR)
          }(this.code),
          GR = RR.state.phrase("Control character") + " " + (Ku[this.code] || "0x" + this.code.toString(16)),
          yR = this.options.render && this.options.render(this.code, GR, JR);
        if (yR) return yR;
        let tR = document.createElement("span");
        return tR.textContent = JR, tR.title = GR, tR.setAttribute("aria-label", GR), tR.className = "cm-specialChar", tR
      }
      ignoreEvent() {
        return !1
      }
    }
    class nu extends vR {
      constructor(RR) {
        super(), this.width = RR
      }
      eq(RR) {
        return RR.width == this.width
      }
      toDOM() {
        let RR = document.createElement("span");
        return RR.textContent = "\t", RR.className = "cm-tab", RR.style.width = this.width + "px", RR
      }
      ignoreEvent() {
        return !1
      }
    }

    function Uu() {
      return Au
    }
    const Wu = xR.line({
        class: "cm-activeLine"
      }),
      Au = FJ.fromClass(class {
        constructor(RR) {
          this.Cy = this.getDeco(RR)
        }
        update(RR) {
          (RR.docChanged || RR.selectionSet) && (this.Cy = this.getDeco(RR.view))
        }
        getDeco(RR) {
          let JR = -1,
            GR = [];
          for (let yR of RR.state.selection.WL) {
            let tR = RR.lineBlockAt(yR.head);
            tR.from > JR && (GR.push(Wu.range(tR.from)), JR = tR.from)
          }
          return xR.set(GR)
        }
      }, {
        Cy: RR => RR.Cy
      });
    class Cu extends vR {
      constructor(RR) {
        super(), this.content = RR
      }
      toDOM(RR) {
        let JR = document.createElement("span");
        return JR.className = "cm-placeholder", JR.style.pointerEvents = "none", JR.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(RR) : this.content.cloneNode(!0)), JR.setAttribute("aria-hidden", "true"), JR
      }
      coordsAt(RR) {
        let JR = RR.firstChild ? SR(RR.firstChild) : [];
        if (!JR.length) return null;
        let GR = window.getComputedStyle(RR.parentNode),
          yR = QR(JR[0], "rtl" != GR.direction),
          tR = parseInt(GR.lineHeight);
        return yR.bottom - yR.top > 1.5 * tR ? {
          left: yR.left,
          right: yR.right,
          top: yR.top,
          bottom: yR.top + tR
        } : yR
      }
      ignoreEvent() {
        return !1
      }
    }

    function Xu(RR) {
      let JR = FJ.fromClass(class {
        constructor(JR) {
          this.view = JR, this.placeholder = RR ? xR.set([xR.widget({
            widget: new Cu(RR),
            side: 1
          }).range(0)]) : xR.none
        }
        get Cy() {
          return this.view.state.doc.length ? xR.none : this.placeholder
        }
      }, {
        Cy: RR => RR.Cy
      });
      return "string" == typeof RR ? [JR, pt.contentAttributes.of({
        "aria-placeholder": RR
      })] : JR
    }
    const Mu = 2e3;

    function Bu(RR, JR) {
      let GR = RR.posAtCoords({
          x: JR.clientX,
          y: JR.clientY
        }, !1),
        tR = RR.state.doc.lineAt(GR),
        uR = GR - tR.from,
        ZR = uR > Mu ? -1 : uR == tR.length ? function(RR, JR) {
          let GR = RR.coordsAtPos(RR.viewport.from);
          return GR ? Math.round(Math.abs((GR.left - JR) / RR.defaultCharacterWidth)) : -1
        }(RR, JR.clientX) : (0, yR.bb)(tR.text, RR.state.tabSize, GR - tR.from);
      return {
        line: tR.number,
        col: ZR,
        off: uR
      }
    }

    function lu(RR, JR) {
      let GR = Bu(RR, JR),
        tR = RR.state.selection;
      return GR ? {
        update(RR) {
          if (RR.docChanged) {
            let JR = RR.changes.mapPos(RR.startState.doc.line(GR.line).from),
              yR = RR.state.doc.lineAt(JR);
            GR = {
              line: yR.number,
              col: GR.col,
              off: Math.min(GR.off, yR.length)
            }, tR = tR.map(RR.changes)
          }
        },
        get(JR, uR, ZR) {
          let qR = Bu(RR, JR);
          if (!qR) return tR;
          let iR = function(RR, JR, GR) {
            let tR = Math.min(JR.line, GR.line),
              uR = Math.max(JR.line, GR.line),
              ZR = [];
            if (JR.off > Mu || GR.off > Mu || JR.col < 0 || GR.col < 0) {
              let qR = Math.min(JR.off, GR.off),
                iR = Math.max(JR.off, GR.off);
              for (let JR = tR; JR <= uR; JR++) {
                let GR = RR.doc.line(JR);
                GR.length <= iR && ZR.push(yR.k.range(GR.from + qR, GR.to + iR))
              }
            } else {
              let qR = Math.min(JR.col, GR.col),
                iR = Math.max(JR.col, GR.col);
              for (let JR = tR; JR <= uR; JR++) {
                let GR = RR.doc.line(JR),
                  tR = (0, yR.hb)(GR.text, qR, RR.tabSize, !0);
                if (tR < 0) ZR.push(yR.k.cursor(GR.to));
                else {
                  let JR = (0, yR.hb)(GR.text, iR, RR.tabSize);
                  ZR.push(yR.k.range(GR.from + tR, GR.from + JR))
                }
              }
            }
            return ZR
          }(RR.state, GR, qR);
          return iR.length ? ZR ? yR.k.create(iR.concat(tR.WL)) : yR.k.create(iR) : tR
        }
      } : null
    }

    function pu(RR) {
      let JR = (null === RR || void 0 === RR ? void 0 : RR.eventFilter) || (RR => RR.altKey && 0 == RR.button);
      return pt.mouseSelectionStyle.of(((RR, GR) => JR(GR) ? lu(RR, GR) : null))
    }
    const gu = {
        Alt: [18, RR => !!RR.altKey],
        Control: [17, RR => !!RR.ctrlKey],
        Shift: [16, RR => !!RR.shiftKey],
        Meta: [91, RR => !!RR.metaKey]
      },
      bu = {
        style: "cursor: crosshair"
      };

    function vu() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [JR, GR] = gu[RR.key || "Alt"],
        yR = FJ.fromClass(class {
          constructor(RR) {
            this.view = RR, this.isDown = !1
          }
          set(RR) {
            this.isDown != RR && (this.isDown = RR, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(RR) {
              this.set(RR.keyCode == JR || GR(RR))
            },
            keyup(RR) {
              RR.keyCode != JR && GR(RR) || this.set(!1)
            },
            mousemove(RR) {
              this.set(GR(RR))
            }
          }
        });
      return [yR, pt.contentAttributes.of((RR => {
        var JR;
        return (null === (JR = RR.plugin(yR)) || void 0 === JR ? void 0 : JR.isDown) ? bu : null
      }))]
    }
    const Ou = "-10000px";
    class xu {
      constructor(RR, JR, GR, yR) {
        this.facet = JR, this.createTooltipView = GR, this.removeTooltipView = yR, this.input = RR.state.facet(JR), this.tooltips = this.input.filter((RR => RR));
        let tR = null;
        this.tooltipViews = this.tooltips.map((RR => tR = GR(RR, tR)))
      }
      update(RR, JR) {
        var GR;
        let yR = RR.state.facet(this.facet),
          tR = yR.filter((RR => RR));
        if (yR === this.input) {
          for (let JR of this.tooltipViews) JR.update && JR.update(RR);
          return !1
        }
        let uR = [],
          ZR = JR ? [] : null;
        for (let qR = 0; qR < tR.length; qR++) {
          let GR = tR[qR],
            yR = -1;
          if (GR) {
            for (let RR = 0; RR < this.tooltips.length; RR++) {
              let JR = this.tooltips[RR];
              JR && JR.create == GR.create && (yR = RR)
            }
            if (yR < 0) uR[qR] = this.createTooltipView(GR, qR ? uR[qR - 1] : null), ZR && (ZR[qR] = !!GR.above);
            else {
              let GR = uR[qR] = this.tooltipViews[yR];
              ZR && (ZR[qR] = JR[yR]), GR.update && GR.update(RR)
            }
          }
        }
        for (let qR of this.tooltipViews) uR.indexOf(qR) < 0 && (this.removeTooltipView(qR), null === (GR = qR.destroy) || void 0 === GR || GR.call(qR));
        return JR && (ZR.forEach(((RR, GR) => JR[GR] = RR)), JR.length = ZR.length), this.input = yR, this.tooltips = tR, this.tooltipViews = uR, !0
      }
    }

    function Nu(RR) {
      let JR = RR.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: JR.clientHeight,
        right: JR.clientWidth
      }
    }
    const Du = yR.r.define({
        combine: RR => {
          var JR, GR, yR;
          return {
            position: MR.ios ? "absolute" : (null === (JR = RR.find((RR => RR.position))) || void 0 === JR ? void 0 : JR.position) || "fixed",
            parent: (null === (GR = RR.find((RR => RR.parent))) || void 0 === GR ? void 0 : GR.parent) || null,
            tooltipSpace: (null === (yR = RR.find((RR => RR.tooltipSpace))) || void 0 === yR ? void 0 : yR.tooltipSpace) || Nu
          }
        }
      }),
      Hu = new WeakMap,
      ou = FJ.fromClass(class {
        constructor(RR) {
          this.view = RR, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let JR = RR.state.facet(Du);
          this.position = JR.position, this.parent = JR.parent, this.classes = RR.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new xu(RR, mu, ((RR, JR) => this.createTooltip(RR, JR)), (RR => {
            this.resizeObserver && this.resizeObserver.unobserve(RR.dom), RR.dom.remove()
          })), this.above = this.manager.tooltips.map((RR => !!RR.above)), this.intersectionObserver = "function" == typeof IntersectionObserver ? new IntersectionObserver((RR => {
            Date.now() > this.lastTransaction - 50 && RR.length > 0 && RR[RR.length - 1].intersectionRatio < 1 && this.measureSoon()
          }), {
            threshold: [1]
          }) : null, this.observeIntersection(), RR.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure()
        }
        createContainer() {
          this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom
        }
        observeIntersection() {
          if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            for (let RR of this.manager.tooltipViews) this.intersectionObserver.observe(RR.dom)
          }
        }
        measureSoon() {
          this.measureTimeout < 0 && (this.measureTimeout = setTimeout((() => {
            this.measureTimeout = -1, this.maybeMeasure()
          }), 50))
        }
        update(RR) {
          RR.transactions.length && (this.lastTransaction = Date.now());
          let JR = this.manager.update(RR, this.above);
          JR && this.observeIntersection();
          let GR = JR || RR.geometryChanged,
            yR = RR.state.facet(Du);
          if (yR.position != this.position && !this.madeAbsolute) {
            this.position = yR.position;
            for (let RR of this.manager.tooltipViews) RR.dom.style.position = this.position;
            GR = !0
          }
          if (yR.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = yR.parent, this.createContainer();
            for (let RR of this.manager.tooltipViews) this.container.appendChild(RR.dom);
            GR = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          GR && this.maybeMeasure()
        }
        createTooltip(RR, JR) {
          let GR = RR.create(this.view),
            yR = JR ? JR.dom : null;
          if (GR.dom.classList.add("cm-tooltip"), RR.arrow && !GR.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let RR = document.createElement("div");
            RR.className = "cm-tooltip-arrow", GR.dom.appendChild(RR)
          }
          return GR.dom.style.position = this.position, GR.dom.style.top = Ou, GR.dom.style.left = "0px", this.container.insertBefore(GR.dom, yR), GR.mount && GR.mount(this.view), this.resizeObserver && this.resizeObserver.observe(GR.dom), GR
        }
        destroy() {
          var RR, JR, GR;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let yR of this.manager.tooltipViews) yR.dom.remove(), null === (RR = yR.destroy) || void 0 === RR || RR.call(yR);
          this.parent && this.container.remove(), null === (JR = this.resizeObserver) || void 0 === JR || JR.disconnect(), null === (GR = this.intersectionObserver) || void 0 === GR || GR.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let RR = 1,
            JR = 1,
            GR = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: RR
            } = this.manager.tooltipViews[0];
            if (MR.safari) {
              let JR = RR.getBoundingClientRect();
              GR = Math.abs(JR.top + 1e4) > 1 || Math.abs(JR.left) > 1
            } else GR = !!RR.offsetParent && RR.offsetParent != this.container.ownerDocument.body
          }
          if (GR || "absolute" == this.position)
            if (this.parent) {
              let GR = this.parent.getBoundingClientRect();
              GR.width && GR.height && (RR = GR.width / this.parent.offsetWidth, JR = GR.height / this.parent.offsetHeight)
            } else({
              scaleX: RR,
              scaleY: JR
            } = this.view.viewState);
          let yR = this.view.scrollDOM.getBoundingClientRect(),
            tR = qG(this.view);
          return {
            visible: {
              left: yR.left + tR.left,
              top: yR.top + tR.top,
              right: yR.right - tR.right,
              bottom: yR.bottom - tR.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((RR, JR) => {
              let GR = this.manager.tooltipViews[JR];
              return GR.getCoords ? GR.getCoords(RR.pos) : this.view.coordsAtPos(RR.pos)
            })),
            size: this.manager.tooltipViews.map((RR => {
              let {
                dom: JR
              } = RR;
              return JR.getBoundingClientRect()
            })),
            space: this.view.state.facet(Du).tooltipSpace(this.view),
            scaleX: RR,
            scaleY: JR,
            makeAbsolute: GR
          }
        }
        writeMeasure(RR) {
          var JR;
          if (RR.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let RR of this.manager.tooltipViews) RR.dom.style.position = "absolute"
          }
          let {
            visible: GR,
            space: yR,
            scaleX: tR,
            scaleY: uR
          } = RR, ZR = [];
          for (let qR = 0; qR < this.manager.tooltips.length; qR++) {
            let iR = this.manager.tooltips[qR],
              fR = this.manager.tooltipViews[qR],
              {
                dom: VR
              } = fR,
              KR = RR.pos[qR],
              wR = RR.size[qR];
            if (!KR || !1 !== iR.clip && (KR.bottom <= Math.max(GR.top, yR.top) || KR.top >= Math.min(GR.bottom, yR.bottom) || KR.right < Math.max(GR.left, yR.left) - .1 || KR.left > Math.min(GR.right, yR.right) + .1)) {
              VR.style.top = Ou;
              continue
            }
            let rR = iR.arrow ? fR.dom.querySelector(".cm-tooltip-arrow") : null,
              eR = rR ? 7 : 0,
              aR = wR.right - wR.left,
              LR = null !== (JR = Hu.get(fR)) && void 0 !== JR ? JR : wR.bottom - wR.top,
              nR = fR.offset || Iu,
              UR = this.view.textDirection == fJ.LTR,
              WR = wR.width > yR.right - yR.left ? UR ? yR.left : yR.right - wR.width : UR ? Math.max(yR.left, Math.min(KR.left - (rR ? 14 : 0) + nR.x, yR.right - aR)) : Math.min(Math.max(yR.left, KR.left - aR + (rR ? 14 : 0) - nR.x), yR.right - aR),
              AR = this.above[qR];
            !iR.strictSide && (AR ? KR.top - LR - eR - nR.y < yR.top : KR.bottom + LR + eR + nR.y > yR.bottom) && AR == yR.bottom - KR.bottom > KR.top - yR.top && (AR = this.above[qR] = !AR);
            let CR = (AR ? KR.top - yR.top : yR.bottom - KR.bottom) - eR;
            if (CR < LR && !1 !== fR.resize) {
              if (CR < this.view.defaultLineHeight) {
                VR.style.top = Ou;
                continue
              }
              Hu.set(fR, LR), VR.style.height = (LR = CR) / uR + "px"
            } else VR.style.height && (VR.style.height = "");
            let XR = AR ? KR.top - LR - eR - nR.y : KR.bottom + eR + nR.y,
              MR = WR + aR;
            if (!0 !== fR.overlap)
              for (let RR of ZR) RR.left < MR && RR.right > WR && RR.top < XR + LR && RR.bottom > XR && (XR = AR ? RR.top - LR - 2 - eR : RR.bottom + eR + 2);
            if ("absolute" == this.position ? (VR.style.top = (XR - RR.parent.top) / uR + "px", cu(VR, (WR - RR.parent.left) / tR)) : (VR.style.top = XR / uR + "px", cu(VR, WR / tR)), rR) {
              let RR = KR.left + (UR ? nR.x : -nR.x) - (WR + 14 - 7);
              rR.style.left = RR / tR + "px"
            }!0 !== fR.overlap && ZR.push({
              left: WR,
              top: XR,
              right: MR,
              bottom: XR + LR
            }), VR.classList.toggle("cm-tooltip-above", AR), VR.classList.toggle("cm-tooltip-below", !AR), fR.positioned && fR.positioned(RR.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let RR of this.manager.tooltipViews) RR.dom.style.top = Ou
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function cu(RR, JR) {
      let GR = parseInt(RR.style.left, 10);
      (isNaN(GR) || Math.abs(JR - GR) > 1) && (RR.style.left = JR + "px")
    }
    const Pu = pt.baseTheme({
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
      Iu = {
        x: 0,
        y: 0
      },
      mu = yR.r.define({
        enables: [ou, Pu]
      }),
      zu = yR.r.define({
        combine: RR => RR.reduce(((RR, JR) => RR.concat(JR)), [])
      });
    class Su {
      static create(RR) {
        return new Su(RR)
      }
      constructor(RR) {
        this.view = RR, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new xu(RR, zu, ((RR, JR) => this.createHostedView(RR, JR)), (RR => RR.dom.remove()))
      }
      createHostedView(RR, JR) {
        let GR = RR.create(this.view);
        return GR.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(GR.dom, JR ? JR.dom.nextSibling : this.dom.firstChild), this.mounted && GR.mount && GR.mount(this.view), GR
      }
      mount(RR) {
        for (let JR of this.manager.tooltipViews) JR.mount && JR.mount(RR);
        this.mounted = !0
      }
      positioned(RR) {
        for (let JR of this.manager.tooltipViews) JR.positioned && JR.positioned(RR)
      }
      update(RR) {
        this.manager.update(RR)
      }
      destroy() {
        var RR;
        for (let JR of this.manager.tooltipViews) null === (RR = JR.destroy) || void 0 === RR || RR.call(JR)
      }
      passProp(RR) {
        let JR;
        for (let GR of this.manager.tooltipViews) {
          let yR = GR[RR];
          if (void 0 !== yR)
            if (void 0 === JR) JR = yR;
            else if (JR !== yR) return
        }
        return JR
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
    const ju = mu.compute([zu], (RR => {
      let JR = RR.facet(zu);
      return 0 === JR.length ? null : {
        pos: Math.min(...JR.map((RR => RR.pos))),
        end: Math.max(...JR.map((RR => {
          var JR;
          return null !== (JR = RR.end) && void 0 !== JR ? JR : RR.pos
        }))),
        create: Su.create,
        above: JR[0].above,
        arrow: JR.some((RR => RR.arrow))
      }
    }));
    class du {
      constructor(RR, JR, GR, yR, tR) {
        this.view = RR, this.source = JR, this.field = GR, this.setHover = yR, this.hoverTime = tR, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
          x: 0,
          y: 0,
          target: RR.dom,
          time: 0
        }, this.checkHover = this.checkHover.bind(this), RR.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), RR.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this))
      }
      update() {
        this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout((() => this.startHover()), 20))
      }
      get active() {
        return this.view.state.field(this.field)
      }
      checkHover() {
        if (this.hoverTimeout = -1, this.active.length) return;
        let RR = Date.now() - this.lastMove.time;
        RR < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - RR) : this.startHover()
      }
      startHover() {
        clearTimeout(this.restartTimeout);
        let {
          view: RR,
          lastMove: JR
        } = this, GR = RR.docView.tile.nearest(JR.target);
        if (!GR) return;
        let yR, tR = 1;
        if (GR.isWidget()) yR = GR.posAtStart;
        else {
          if (yR = RR.posAtCoords(JR), null == yR) return;
          let GR = RR.coordsAtPos(yR);
          if (!GR || JR.y < GR.top || JR.y > GR.bottom || JR.x < GR.left - RR.defaultCharacterWidth || JR.x > GR.right + RR.defaultCharacterWidth) return;
          let uR = RR.bidiSpans(RR.state.doc.lineAt(yR)).find((RR => RR.from <= yR && RR.to >= yR)),
            ZR = uR && uR.dir == fJ.RTL ? -1 : 1;
          tR = JR.x < GR.left ? -ZR : ZR
        }
        let uR = this.source(RR, yR, tR);
        if (null === uR || void 0 === uR ? void 0 : uR.then) {
          let JR = this.pending = {
            pos: yR
          };
          uR.then((GR => {
            this.pending == JR && (this.pending = null, !GR || Array.isArray(GR) && !GR.length || RR.dispatch({
              effects: this.setHover.of(Array.isArray(GR) ? GR : [GR])
            }))
          }), (JR => EJ(RR.state, JR, "hover tooltip")))
        } else !uR || Array.isArray(uR) && !uR.length || RR.dispatch({
          effects: this.setHover.of(Array.isArray(uR) ? uR : [uR])
        })
      }
      get tooltip() {
        let RR = this.view.plugin(ou),
          JR = RR ? RR.manager.tooltips.findIndex((RR => RR.create == Su.create)) : -1;
        return JR > -1 ? RR.manager.tooltipViews[JR] : null
      }
      mousemove(RR) {
        var JR, GR;
        this.lastMove = {
          x: RR.clientX,
          y: RR.clientY,
          target: RR.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: yR,
          tooltip: tR
        } = this;
        if (yR.length && tR && ! function(RR, JR) {
            let GR, {
              left: yR,
              right: tR,
              top: uR,
              bottom: ZR
            } = RR.getBoundingClientRect();
            if (GR = RR.querySelector(".cm-tooltip-arrow")) {
              let RR = GR.getBoundingClientRect();
              uR = Math.min(RR.top, uR), ZR = Math.max(RR.bottom, ZR)
            }
            return JR.clientX >= yR - Eu && JR.clientX <= tR + Eu && JR.clientY >= uR - Eu && JR.clientY <= ZR + Eu
          }(tR.dom, RR) || this.pending) {
          let {
            pos: tR
          } = yR[0] || this.pending, uR = null !== (GR = null === (JR = yR[0]) || void 0 === JR ? void 0 : JR.end) && void 0 !== GR ? GR : tR;
          (tR == uR ? this.view.posAtCoords(this.lastMove) == tR : function(RR, JR, GR, yR, tR) {
            let uR = RR.scrollDOM.getBoundingClientRect(),
              ZR = RR.documentTop + RR.documentPadding.top + RR.contentHeight;
            if (uR.left > yR || uR.right < yR || uR.top > tR || Math.min(uR.bottom, ZR) < tR) return !1;
            let qR = RR.posAtCoords({
              x: yR,
              y: tR
            }, !1);
            return qR >= JR && qR <= GR
          }(this.view, tR, uR, RR.clientX, RR.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(RR) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: JR
        } = this;
        if (JR.length) {
          let {
            tooltip: JR
          } = this;
          JR && JR.dom.contains(RR.relatedTarget) ? this.watchTooltipLeave(JR.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(RR) {
        let JR = GR => {
          RR.removeEventListener("mouseleave", JR), this.active.length && !this.view.dom.contains(GR.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        RR.addEventListener("mouseleave", JR)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const Eu = 4;

    function Yu(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        GR = yR.K.define(),
        tR = yR.L.define({
          create: () => [],
          update(RR, tR) {
            if (RR.length && (JR.hideOnChange && (tR.docChanged || tR.selection) ? RR = [] : JR.hideOn && (RR = RR.filter((RR => !JR.hideOn(tR, RR)))), tR.docChanged)) {
              let JR = [];
              for (let GR of RR) {
                let RR = tR.changes.mapPos(GR.pos, -1, yR.u.TrackDel);
                if (null != RR) {
                  let yR = Object.assign(Object.create(null), GR);
                  yR.pos = RR, null != yR.end && (yR.end = tR.changes.mapPos(yR.end)), JR.push(yR)
                }
              }
              RR = JR
            }
            for (let JR of tR.effects) JR.is(GR) && (RR = JR.value), JR.is(Qu) && (RR = []);
            return RR
          },
          provide: RR => zu.from(RR)
        });
      return {
        active: tR,
        extension: [tR, FJ.define((yR => new du(yR, RR, tR, GR, JR.hoverTime || 300))), ju]
      }
    }

    function ku(RR, JR) {
      let GR = RR.plugin(ou);
      if (!GR) return null;
      let yR = GR.manager.tooltips.indexOf(JR);
      return yR < 0 ? null : GR.manager.tooltipViews[yR]
    }
    const Qu = yR.K.define();
    const Fu = yR.r.define({
      combine(RR) {
        let JR, GR;
        for (let yR of RR) JR = JR || yR.topContainer, GR = GR || yR.bottomContainer;
        return {
          topContainer: JR,
          bottomContainer: GR
        }
      }
    });

    function Tu(RR, JR) {
      let GR = RR.plugin(su),
        yR = GR ? GR.specs.indexOf(JR) : -1;
      return yR > -1 ? GR.panels[yR] : null
    }
    const su = FJ.fromClass(class {
      constructor(RR) {
        this.input = RR.state.facet(JZ), this.specs = this.input.filter((RR => RR)), this.panels = this.specs.map((JR => JR(RR)));
        let JR = RR.state.facet(Fu);
        this.top = new hu(RR, !0, JR.topContainer), this.bottom = new hu(RR, !1, JR.bottomContainer), this.top.sync(this.panels.filter((RR => RR.top))), this.bottom.sync(this.panels.filter((RR => !RR.top)));
        for (let GR of this.panels) GR.dom.classList.add("cm-panel"), GR.mount && GR.mount()
      }
      update(RR) {
        let JR = RR.state.facet(Fu);
        this.top.container != JR.topContainer && (this.top.sync([]), this.top = new hu(RR.view, !0, JR.topContainer)), this.bottom.container != JR.bottomContainer && (this.bottom.sync([]), this.bottom = new hu(RR.view, !1, JR.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let GR = RR.state.facet(JZ);
        if (GR != this.input) {
          let JR = GR.filter((RR => RR)),
            yR = [],
            tR = [],
            uR = [],
            ZR = [];
          for (let GR of JR) {
            let JR, qR = this.specs.indexOf(GR);
            qR < 0 ? (JR = GR(RR.view), ZR.push(JR)) : (JR = this.panels[qR], JR.update && JR.update(RR)), yR.push(JR), (JR.top ? tR : uR).push(JR)
          }
          this.specs = JR, this.panels = yR, this.top.sync(tR), this.bottom.sync(uR);
          for (let RR of ZR) RR.dom.classList.add("cm-panel"), RR.mount && RR.mount()
        } else
          for (let yR of this.panels) yR.update && yR.update(RR)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: RR => pt.scrollMargins.of((JR => {
        let GR = JR.plugin(RR);
        return GR && {
          top: GR.top.scrollMargin(),
          bottom: GR.bottom.scrollMargin()
        }
      }))
    });
    class hu {
      constructor(RR, JR, GR) {
        this.view = RR, this.top = JR, this.container = GR, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(RR) {
        for (let JR of this.panels) JR.destroy && RR.indexOf(JR) < 0 && JR.destroy();
        this.panels = RR, this.syncDOM()
      }
      syncDOM() {
        if (0 == this.panels.length) return void(this.dom && (this.dom.remove(), this.dom = void 0));
        if (!this.dom) {
          this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
          let RR = this.container || this.view.dom;
          RR.insertBefore(this.dom, this.top ? RR.firstChild : null)
        }
        let RR = this.dom.firstChild;
        for (let JR of this.panels)
          if (JR.dom.parentNode == this.dom) {
            for (; RR != JR.dom;) RR = RZ(RR);
            RR = RR.nextSibling
          } else this.dom.insertBefore(JR.dom, RR);
        for (; RR;) RR = RZ(RR)
      }
      scrollMargin() {
        return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top)
      }
      syncClasses() {
        if (this.container && this.classes != this.view.themeClasses) {
          for (let RR of this.classes.split(" ")) RR && this.container.classList.remove(RR);
          for (let RR of (this.classes = this.view.themeClasses).split(" ")) RR && this.container.classList.add(RR)
        }
      }
    }

    function RZ(RR) {
      let JR = RR.nextSibling;
      return RR.remove(), JR
    }
    const JZ = yR.r.define({
      enables: su
    });

    function GZ(RR, JR) {
      let GR, tR = new Promise((RR => GR = RR)),
        uR = RR => function(RR, JR, GR) {
          let yR = JR.content ? JR.content(RR, (() => ZR(null))) : null;
          if (!yR) {
            if (yR = (0, KR.c)("form"), JR.input) {
              let RR = (0, KR.c)("input", JR.input);
              /^(text|password|number|email|tel|url)$/.test(RR.type) && RR.classList.add("cm-textfield"), RR.name || (RR.name = "input"), yR.appendChild((0, KR.c)("label", (JR.label || "") + ": ", RR))
            } else yR.appendChild(document.createTextNode(JR.label || ""));
            yR.appendChild(document.createTextNode(" ")), yR.appendChild((0, KR.c)("button", {
              class: "cm-button",
              type: "submit"
            }, JR.submitLabel || "OK"))
          }
          let tR = "FORM" == yR.nodeName ? [yR] : yR.querySelectorAll("form");
          for (let qR = 0; qR < tR.length; qR++) {
            let RR = tR[qR];
            RR.addEventListener("keydown", (JR => {
              27 == JR.keyCode ? (JR.preventDefault(), ZR(null)) : 13 == JR.keyCode && (JR.preventDefault(), ZR(RR))
            })), RR.addEventListener("submit", (JR => {
              JR.preventDefault(), ZR(RR)
            }))
          }
          let uR = (0, KR.c)("div", yR, (0, KR.c)("button", {
            onclick: () => ZR(null),
            "aria-label": RR.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          JR.class && (uR.className = JR.class);

          function ZR(JR) {
            uR.contains(uR.ownerDocument.activeElement) && RR.focus(), GR(JR)
          }
          return uR.classList.add("cm-dialog"), {
            dom: uR,
            top: JR.top,
            mount: () => {
              if (JR.focus) {
                let RR;
                RR = "string" == typeof JR.focus ? yR.querySelector(JR.focus) : yR.querySelector("input") || yR.querySelector("button"), RR && "select" in RR ? RR.select() : RR && "focus" in RR && RR.focus()
              }
            }
          }
        }(RR, JR, GR);
      RR.state.field(yZ, !1) ? RR.dispatch({
        effects: tZ.of(uR)
      }) : RR.dispatch({
        effects: yR.K.appendConfig.of(yZ.init((() => [uR])))
      });
      let ZR = uZ.of(uR);
      return {
        close: ZR,
        result: tR.then((JR => ((RR.win.queueMicrotask || (JR => RR.win.setTimeout(JR, 10)))((() => {
          RR.state.field(yZ).indexOf(uR) > -1 && RR.dispatch({
            effects: ZR
          })
        })), JR)))
      }
    }
    const yZ = yR.L.define({
        create: () => [],
        update(RR, JR) {
          for (let GR of JR.effects) GR.is(tZ) ? RR = [GR.value].concat(RR) : GR.is(uZ) && (RR = RR.filter((RR => RR != GR.value)));
          return RR
        },
        provide: RR => JZ.computeN([RR], (JR => JR.field(RR)))
      }),
      tZ = yR.K.define(),
      uZ = yR.K.define();
    class ZZ extends yR.I {
      compare(RR) {
        return this == RR || this.constructor == RR.constructor && this.eq(RR)
      }
      eq(RR) {
        return !1
      }
      destroy(RR) {}
    }
    ZZ.prototype.elementClass = "", ZZ.prototype.toDOM = void 0, ZZ.prototype.mapMode = yR.u.TrackBefore, ZZ.prototype.startSide = ZZ.prototype.endSide = -1, ZZ.prototype.point = !0;
    const qZ = yR.r.define(),
      iZ = yR.r.define(),
      fZ = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => yR.E.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      VZ = yR.r.define();

    function KZ(RR) {
      return [rZ(), VZ.of({
        ...fZ,
        ...RR
      })]
    }
    const wZ = yR.r.define({
      combine: RR => RR.some((RR => RR))
    });

    function rZ(RR) {
      let JR = [eZ];
      return RR && !1 === RR.fixed && JR.push(wZ.of(!0)), JR
    }
    const eZ = FJ.fromClass(class {
      constructor(RR) {
        this.view = RR, this.domAfter = null, this.prevViewport = RR.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = RR.state.facet(VZ).map((JR => new UZ(RR, JR))), this.fixed = !RR.state.facet(wZ);
        for (let JR of this.gutters) "after" == JR.config.side ? this.getDOMAfter().appendChild(JR.dom) : this.dom.appendChild(JR.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), RR.scrollDOM.insertBefore(this.dom, RR.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(RR) {
        if (this.updateGutters(RR)) {
          let JR = this.prevViewport,
            GR = RR.view.viewport,
            yR = Math.min(JR.to, GR.to) - Math.max(JR.from, GR.from);
          this.syncGutters(yR < .8 * (GR.to - GR.from))
        }
        if (RR.geometryChanged) {
          let RR = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = RR, this.domAfter && (this.domAfter.style.minHeight = RR)
        }
        this.view.state.facet(wZ) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = RR.view.viewport
      }
      syncGutters(RR) {
        let JR = this.dom.nextSibling;
        RR && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let GR = yR.E.iter(this.view.state.facet(qZ), this.view.viewport.from),
          tR = [],
          uR = this.gutters.map((RR => new nZ(RR, this.view.viewport, -this.view.documentPadding.top)));
        for (let yR of this.view.viewportLineBlocks)
          if (tR.length && (tR = []), Array.isArray(yR.type)) {
            let RR = !0;
            for (let JR of yR.type)
              if (JR.type == OR.Text && RR) {
                LZ(GR, tR, JR.from);
                for (let RR of uR) RR.line(this.view, JR, tR);
                RR = !1
              } else if (JR.widget)
              for (let RR of uR) RR.widget(this.view, JR)
          } else if (yR.type == OR.Text) {
          LZ(GR, tR, yR.from);
          for (let RR of uR) RR.line(this.view, yR, tR)
        } else if (yR.widget)
          for (let RR of uR) RR.widget(this.view, yR);
        for (let yR of uR) yR.finish();
        RR && (this.view.scrollDOM.insertBefore(this.dom, JR), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(RR) {
        let JR = RR.startState.facet(VZ),
          GR = RR.state.facet(VZ),
          tR = RR.docChanged || RR.heightChanged || RR.viewportChanged || !yR.E.eq(RR.startState.facet(qZ), RR.state.facet(qZ), RR.view.viewport.from, RR.view.viewport.to);
        if (JR == GR)
          for (let yR of this.gutters) yR.update(RR) && (tR = !0);
        else {
          tR = !0;
          let yR = [];
          for (let tR of GR) {
            let GR = JR.indexOf(tR);
            GR < 0 ? yR.push(new UZ(this.view, tR)) : (this.gutters[GR].update(RR), yR.push(this.gutters[GR]))
          }
          for (let RR of this.gutters) RR.dom.remove(), yR.indexOf(RR) < 0 && RR.destroy();
          for (let RR of yR) "after" == RR.config.side ? this.getDOMAfter().appendChild(RR.dom) : this.dom.appendChild(RR.dom);
          this.gutters = yR
        }
        return tR
      }
      destroy() {
        for (let RR of this.gutters) RR.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: RR => pt.scrollMargins.of((JR => {
        let GR = JR.plugin(RR);
        if (!GR || 0 == GR.gutters.length || !GR.fixed) return null;
        let yR = GR.dom.offsetWidth * JR.scaleX,
          tR = GR.domAfter ? GR.domAfter.offsetWidth * JR.scaleX : 0;
        return JR.textDirection == fJ.LTR ? {
          left: yR,
          right: tR
        } : {
          right: yR,
          left: tR
        }
      }))
    });

    function aZ(RR) {
      return Array.isArray(RR) ? RR : [RR]
    }

    function LZ(RR, JR, GR) {
      for (; RR.value && RR.from <= GR;) RR.from == GR && JR.push(RR.value), RR.next()
    }
    class nZ {
      constructor(RR, JR, GR) {
        this.gutter = RR, this.height = GR, this.i = 0, this.cursor = yR.E.iter(RR.markers, JR.from)
      }
      addElement(RR, JR, GR) {
        let {
          gutter: yR
        } = this, tR = (JR.top - this.height) / RR.scaleY, uR = JR.height / RR.scaleY;
        if (this.i == yR.elements.length) {
          let JR = new WZ(RR, uR, tR, GR);
          yR.elements.push(JR), yR.dom.appendChild(JR.dom)
        } else yR.elements[this.i].update(RR, uR, tR, GR);
        this.height = JR.bottom, this.i++
      }
      line(RR, JR, GR) {
        let yR = [];
        LZ(this.cursor, yR, JR.from), GR.length && (yR = yR.concat(GR));
        let tR = this.gutter.config.lineMarker(RR, JR, yR);
        tR && yR.unshift(tR);
        let uR = this.gutter;
        (0 != yR.length || uR.config.renderEmptyElements) && this.addElement(RR, JR, yR)
      }
      widget(RR, JR) {
        let GR = this.gutter.config.widgetMarker(RR, JR.widget, JR),
          yR = GR ? [GR] : null;
        for (let tR of RR.state.facet(iZ)) {
          let GR = tR(RR, JR.widget, JR);
          GR && (yR || (yR = [])).push(GR)
        }
        yR && this.addElement(RR, JR, yR)
      }
      finish() {
        let RR = this.gutter;
        for (; RR.elements.length > this.i;) {
          let JR = RR.elements.pop();
          RR.dom.removeChild(JR.dom), JR.destroy()
        }
      }
    }
    class UZ {
      constructor(RR, JR) {
        this.view = RR, this.config = JR, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let GR in JR.domEventHandlers) this.dom.addEventListener(GR, (yR => {
          let tR, uR = yR.target;
          if (uR != this.dom && this.dom.contains(uR)) {
            for (; uR.parentNode != this.dom;) uR = uR.parentNode;
            let RR = uR.getBoundingClientRect();
            tR = (RR.top + RR.bottom) / 2
          } else tR = yR.clientY;
          let ZR = RR.lineBlockAtHeight(tR - RR.documentTop);
          JR.domEventHandlers[GR](RR, ZR, yR) && yR.preventDefault()
        }));
        this.markers = aZ(JR.markers(RR)), JR.initialSpacer && (this.spacer = new WZ(RR, 0, 0, [JR.initialSpacer(RR)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(RR) {
        let JR = this.markers;
        if (this.markers = aZ(this.config.markers(RR.view)), this.spacer && this.config.updateSpacer) {
          let JR = this.config.updateSpacer(this.spacer.markers[0], RR);
          JR != this.spacer.markers[0] && this.spacer.update(RR.view, 0, 0, [JR])
        }
        let GR = RR.view.viewport;
        return !yR.E.eq(this.markers, JR, GR.from, GR.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(RR)
      }
      destroy() {
        for (let RR of this.elements) RR.destroy()
      }
    }
    class WZ {
      constructor(RR, JR, GR, yR) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(RR, JR, GR, yR)
      }
      update(RR, JR, GR, yR) {
        this.height != JR && (this.height = JR, this.dom.style.height = JR + "px"), this.above != GR && (this.dom.style.marginTop = (this.above = GR) ? GR + "px" : ""),
          function(RR, JR) {
            if (RR.length != JR.length) return !1;
            for (let GR = 0; GR < RR.length; GR++)
              if (!RR[GR].compare(JR[GR])) return !1;
            return !0
          }(this.markers, yR) || this.setMarkers(RR, yR)
      }
      setMarkers(RR, JR) {
        let GR = "cm-gutterElement",
          yR = this.dom.firstChild;
        for (let tR = 0, uR = 0;;) {
          let ZR = uR,
            qR = tR < JR.length ? JR[tR++] : null,
            iR = !1;
          if (qR) {
            let RR = qR.elementClass;
            RR && (GR += " " + RR);
            for (let JR = uR; JR < this.markers.length; JR++)
              if (this.markers[JR].compare(qR)) {
                ZR = JR, iR = !0;
                break
              }
          } else ZR = this.markers.length;
          for (; uR < ZR;) {
            let RR = this.markers[uR++];
            if (RR.toDOM) {
              RR.destroy(yR);
              let JR = yR.nextSibling;
              yR.remove(), yR = JR
            }
          }
          if (!qR) break;
          qR.toDOM && (iR ? yR = yR.nextSibling : this.dom.insertBefore(qR.toDOM(RR), yR)), iR && uR++
        }
        this.dom.className = GR, this.markers = JR
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const AZ = yR.r.define(),
      CZ = yR.r.define(),
      XZ = yR.r.define({
        combine: RR => (0, yR.ab)(RR, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(RR, JR) {
            let GR = Object.assign({}, RR);
            for (let yR in JR) {
              let RR = GR[yR],
                tR = JR[yR];
              GR[yR] = RR ? (JR, GR, yR) => RR(JR, GR, yR) || tR(JR, GR, yR) : tR
            }
            return GR
          }
        })
      });
    class MZ extends ZZ {
      constructor(RR) {
        super(), this.number = RR
      }
      eq(RR) {
        return this.number == RR.number
      }
      toDOM() {
        return document.createTextNode(this.number)
      }
    }

    function BZ(RR, JR) {
      return RR.state.facet(XZ).formatNumber(JR, RR.state)
    }
    const lZ = VZ.compute([XZ], (RR => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: RR => RR.state.facet(AZ),
      lineMarker: (RR, JR, GR) => GR.some((RR => RR.toDOM)) ? null : new MZ(BZ(RR, RR.state.doc.lineAt(JR.from).number)),
      widgetMarker: (RR, JR, GR) => {
        for (let yR of RR.state.facet(CZ)) {
          let tR = yR(RR, JR, GR);
          if (tR) return tR
        }
        return null
      },
      lineMarkerChange: RR => RR.startState.facet(XZ) != RR.state.facet(XZ),
      initialSpacer: RR => new MZ(BZ(RR, gZ(RR.state.doc.lines))),
      updateSpacer(RR, JR) {
        let GR = BZ(JR.view, gZ(JR.view.state.doc.lines));
        return GR == RR.number ? RR : new MZ(GR)
      },
      domEventHandlers: RR.facet(XZ).domEventHandlers,
      side: "before"
    })));

    function pZ() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [XZ.of(RR), rZ(), lZ]
    }

    function gZ(RR) {
      let JR = 9;
      for (; JR < RR;) JR = 10 * JR + 9;
      return JR
    }
    const bZ = new class extends ZZ {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      vZ = qZ.compute(["selection"], (RR => {
        let JR = [],
          GR = -1;
        for (let yR of RR.selection.WL) {
          let tR = RR.doc.lineAt(yR.head).from;
          tR > GR && (GR = tR, JR.push(bZ.range(tR)))
        }
        return yR.E.of(JR)
      }));

    function OZ() {
      return vZ
    }
  },
  53346: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => yR,
      c: () => rR,
      d: () => ZR,
      g: () => VR,
      i: () => fR,
      k: () => NR,
      l: () => HR,
      p: () => DR,
      t: () => eR
    });
    const yR = 1024;
    let tR = 0;
    class uR {
      constructor(RR, JR) {
        this.from = RR, this.to = JR
      }
    }
    class ZR {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = tR++, this.perNode = !!RR.perNode, this.deserialize = RR.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = RR.combine || null
      }
      add(RR) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof RR && (RR = fR.match(RR)), JR => {
          let GR = RR(JR);
          return void 0 === GR ? null : [this, GR]
        }
      }
    }
    ZR.closedBy = new ZR({
      deserialize: RR => RR.split(" ")
    }), ZR.openedBy = new ZR({
      deserialize: RR => RR.split(" ")
    }), ZR.group = new ZR({
      deserialize: RR => RR.split(" ")
    }), ZR.isolate = new ZR({
      deserialize: RR => {
        if (RR && "rtl" != RR && "ltr" != RR && "auto" != RR) throw new RangeError("Invalid value for isolate: " + RR);
        return RR || "auto"
      }
    }), ZR.contextHash = new ZR({
      perNode: !0
    }), ZR.lookAhead = new ZR({
      perNode: !0
    }), ZR.mounted = new ZR({
      perNode: !0
    });
    class qR {
      constructor(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = RR, this.overlay = JR, this.parser = GR, this.bracketed = yR
      }
      static get(RR) {
        return RR && RR.props && RR.props[ZR.mounted.id]
      }
    }
    const iR = Object.create(null);
    class fR {
      constructor(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = RR, this.props = JR, this.id = GR, this.flags = yR
      }
      static define(RR) {
        let JR = RR.props && RR.props.length ? Object.create(null) : iR,
          GR = (RR.top ? 1 : 0) | (RR.skipped ? 2 : 0) | (RR.error ? 4 : 0) | (null == RR.name ? 8 : 0),
          yR = new fR(RR.name || "", JR, RR.id, GR);
        if (RR.props)
          for (let tR of RR.props)
            if (Array.isArray(tR) || (tR = tR(yR)), tR) {
              if (tR[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              JR[tR[0].id] = tR[1]
            } return yR
      }
      prop(RR) {
        return this.props[RR.id]
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
      is(RR) {
        if ("string" == typeof RR) {
          if (this.name == RR) return !0;
          let JR = this.prop(ZR.group);
          return !!JR && JR.indexOf(RR) > -1
        }
        return this.id == RR
      }
      static match(RR) {
        let JR = Object.create(null);
        for (let GR in RR)
          for (let yR of GR.split(" ")) JR[yR] = RR[GR];
        return RR => {
          for (let GR = RR.prop(ZR.group), yR = -1; yR < (GR ? GR.length : 0); yR++) {
            let tR = JR[yR < 0 ? RR.name : GR[yR]];
            if (tR) return tR
          }
        }
      }
    }
    fR.none = new fR("", Object.create(null), 0, 8);
    class VR {
      constructor(RR) {
        this.types = RR;
        for (let JR = 0; JR < RR.length; JR++)
          if (RR[JR].id != JR) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let RR = [];
        for (var JR = arguments.length, GR = new Array(JR), yR = 0; yR < JR; yR++) GR[yR] = arguments[yR];
        for (let tR of this.types) {
          let JR = null;
          for (let RR of GR) {
            let GR = RR(tR);
            if (GR) {
              JR || (JR = Object.assign({}, tR.props));
              let RR = GR[1],
                yR = GR[0];
              yR.combine && yR.id in JR && (RR = yR.combine(JR[yR.id], RR)), JR[yR.id] = RR
            }
          }
          RR.push(JR ? new fR(tR.name, JR, tR.id, tR.flags) : tR)
        }
        return new VR(RR)
      }
    }
    const KR = new WeakMap,
      wR = new WeakMap;
    var rR;
    ! function(RR) {
      RR[RR.ExcludeBuffers = 1] = "ExcludeBuffers", RR[RR.IncludeAnonymous = 2] = "IncludeAnonymous", RR[RR.IgnoreMounts = 4] = "IgnoreMounts", RR[RR.IgnoreOverlays = 8] = "IgnoreOverlays", RR[RR.EnterBracketed = 16] = "EnterBracketed"
    }(rR || (rR = {}));
    class eR {
      constructor(RR, JR, GR, yR, tR) {
        if (this.type = RR, this.children = JR, this.positions = GR, this.length = yR, this.props = null, tR && tR.length) {
          this.props = Object.create(null);
          for (let [RR, JR] of tR) this.props["number" == typeof RR ? RR : RR.id] = JR
        }
      }
      toString() {
        let RR = qR.get(this);
        if (RR && !RR.overlay) return RR.tree.toString();
        let JR = "";
        for (let GR of this.children) {
          let RR = GR.toString();
          RR && (JR && (JR += ","), JR += RR)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (JR.length ? "(" + JR + ")" : "") : JR
      }
      cursor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new gR(this.topNode, RR)
      }
      cursorAt(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GR = KR.get(this) || this.topNode,
          yR = new gR(GR);
        return yR.moveTo(RR, JR), KR.set(this, yR._tree), yR
      }
      get topNode() {
        return new AR(this, 0, 0, null)
      }
      resolve(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GR = UR(KR.get(this) || this.topNode, RR, JR, !1);
        return KR.set(this, GR), GR
      }
      resolveInner(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GR = UR(wR.get(this) || this.topNode, RR, JR, !0);
        return wR.set(this, GR), GR
      }
      resolveStack(RR) {
        return function(RR, JR, GR) {
          let yR = RR.resolveInner(JR, GR),
            tR = null;
          for (let uR = yR instanceof AR ? yR : yR.context.parent; uR; uR = uR.parent)
            if (uR.index < 0) {
              let RR = uR.parent;
              (tR || (tR = [yR])).push(RR.resolve(JR, GR)), uR = RR
            } else {
              let RR = qR.get(uR.tree);
              if (RR && RR.overlay && RR.overlay[0].from <= JR && RR.overlay[RR.overlay.length - 1].to >= JR) {
                let ZR = new AR(RR.tree, RR.overlay[0].from + uR.from, -1, uR);
                (tR || (tR = [yR])).push(UR(ZR, JR, GR, !1))
              }
            } return tR ? lR(tR) : yR
        }(this, RR, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(RR) {
        let {
          enter: JR,
          leave: GR,
          from: yR = 0,
          to: tR = this.length
        } = RR, uR = RR.mode || 0, ZR = (uR & rR.IncludeAnonymous) > 0;
        for (let qR = this.cursor(uR | rR.IncludeAnonymous);;) {
          let RR = !1;
          if (qR.from <= tR && qR.to >= yR && (!ZR && qR.type.isAnonymous || !1 !== JR(qR))) {
            if (qR.firstChild()) continue;
            RR = !0
          }
          for (; RR && GR && (ZR || !qR.type.isAnonymous) && GR(qR), !qR.nextSibling();) {
            if (!qR.parent()) return;
            RR = !0
          }
        }
      }
      prop(RR) {
        return RR.perNode ? this.props ? this.props[RR.id] : void 0 : this.type.prop(RR)
      }
      get propValues() {
        let RR = [];
        if (this.props)
          for (let JR in this.props) RR.push([+JR, this.props[JR]]);
        return RR
      }
      balance() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : xR(fR.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((RR, JR, GR) => new eR(this.type, RR, JR, GR, this.propValues)), RR.makeTree || ((RR, JR, GR) => new eR(fR.none, RR, JR, GR)))
      }
      static build(RR) {
        return function(RR) {
          var JR;
          let {
            buffer: GR,
            nodeSet: tR,
            maxBufferLength: uR = yR,
            reused: qR = [],
            minRepeatType: iR = tR.types.length
          } = RR, fR = Array.isArray(GR) ? new aR(GR, GR.length) : GR, VR = tR.types, KR = 0, wR = 0;

          function rR(RR, JR, GR, yR, ZR, eR) {
            let {
              id: aR,
              start: MR,
              end: BR,
              size: lR
            } = fR, pR = wR, gR = KR;
            if (lR < 0) {
              if (fR.next(), -1 == lR) {
                let JR = qR[aR];
                return GR.push(JR), void yR.push(MR - RR)
              }
              if (-3 == lR) return void(KR = aR);
              if (-4 == lR) return void(wR = aR);
              throw new RangeError(`Unrecognized record size: ${lR}`)
            }
            let bR, vR, OR = VR[aR],
              NR = MR - RR;
            if (BR - MR <= uR && (vR = CR(fR.pos - JR, ZR))) {
              let JR = new Uint16Array(vR.size - vR.skip),
                GR = fR.pos - vR.size,
                yR = JR.length;
              for (; fR.pos > GR;) yR = XR(vR.start, JR, yR);
              bR = new LR(JR, BR - vR.start, tR), NR = vR.start - RR
            } else {
              let RR = fR.pos - lR;
              fR.next();
              let JR = [],
                GR = [],
                yR = aR >= iR ? aR : -1,
                tR = 0,
                ZR = BR;
              for (; fR.pos > RR;) yR >= 0 && fR.id == yR && fR.size >= 0 ? (fR.end <= ZR - uR && (WR(JR, GR, MR, tR, fR.end, ZR, yR, pR, gR), tR = JR.length, ZR = fR.end), fR.next()) : eR > 2500 ? nR(MR, RR, JR, GR) : rR(MR, RR, JR, GR, yR, eR + 1);
              if (yR >= 0 && tR > 0 && tR < JR.length && WR(JR, GR, MR, tR, MR, ZR, yR, pR, gR), JR.reverse(), GR.reverse(), yR > -1 && tR > 0) {
                let RR = UR(OR, gR);
                bR = xR(OR, JR, GR, 0, JR.length, 0, BR - MR, RR, RR)
              } else bR = AR(OR, JR, GR, BR - MR, pR - BR, gR)
            }
            GR.push(bR), yR.push(NR)
          }

          function nR(RR, JR, GR, yR) {
            let ZR = [],
              qR = 0,
              iR = -1;
            for (; fR.pos > JR;) {
              let {
                id: RR,
                start: JR,
                end: GR,
                size: yR
              } = fR;
              if (yR > 4) fR.next();
              else {
                if (iR > -1 && JR < iR) break;
                iR < 0 && (iR = GR - uR), ZR.push(RR, JR, GR), qR++, fR.next()
              }
            }
            if (qR) {
              let JR = new Uint16Array(4 * qR),
                uR = ZR[ZR.length - 2];
              for (let RR = ZR.length - 3, GR = 0; RR >= 0; RR -= 3) JR[GR++] = ZR[RR], JR[GR++] = ZR[RR + 1] - uR, JR[GR++] = ZR[RR + 2] - uR, JR[GR++] = GR;
              GR.push(new LR(JR, ZR[2] - uR, tR)), yR.push(uR - RR)
            }
          }

          function UR(RR, JR) {
            return (GR, yR, tR) => {
              let uR, qR, iR = 0,
                fR = GR.length - 1;
              if (fR >= 0 && (uR = GR[fR]) instanceof eR) {
                if (!fR && uR.type == RR && uR.length == tR) return uR;
                (qR = uR.prop(ZR.lookAhead)) && (iR = yR[fR] + uR.length + qR)
              }
              return AR(RR, GR, yR, tR, iR, JR)
            }
          }

          function WR(RR, JR, GR, yR, uR, ZR, qR, iR, fR) {
            let VR = [],
              KR = [];
            for (; RR.length > yR;) VR.push(RR.pop()), KR.push(JR.pop() + GR - uR);
            RR.push(AR(tR.types[qR], VR, KR, ZR - uR, iR - ZR, fR)), JR.push(uR - GR)
          }

          function AR(RR, JR, GR, yR, tR, uR, qR) {
            if (uR) {
              let RR = [ZR.contextHash, uR];
              qR = qR ? [RR].concat(qR) : [RR]
            }
            if (tR > 25) {
              let RR = [ZR.lookAhead, tR];
              qR = qR ? [RR].concat(qR) : [RR]
            }
            return new eR(RR, JR, GR, yR, qR)
          }

          function CR(RR, JR) {
            let GR = fR.fork(),
              yR = 0,
              tR = 0,
              ZR = 0,
              qR = GR.end - uR,
              VR = {
                size: 0,
                start: 0,
                skip: 0
              };
            RR: for (let uR = GR.pos - RR; GR.pos > uR;) {
              let RR = GR.size;
              if (GR.id == JR && RR >= 0) {
                VR.size = yR, VR.start = tR, VR.skip = ZR, ZR += 4, yR += 4, GR.next();
                continue
              }
              let fR = GR.pos - RR;
              if (RR < 0 || fR < uR || GR.start < qR) break;
              let KR = GR.id >= iR ? 4 : 0,
                wR = GR.start;
              for (GR.next(); GR.pos > fR;) {
                if (GR.size < 0) {
                  if (-3 != GR.size && -4 != GR.size) break RR;
                  KR += 4
                } else GR.id >= iR && (KR += 4);
                GR.next()
              }
              tR = wR, yR += RR, ZR += KR
            }
            return (JR < 0 || yR == RR) && (VR.size = yR, VR.start = tR, VR.skip = ZR), VR.size > 4 ? VR : void 0
          }

          function XR(RR, JR, GR) {
            let {
              id: yR,
              start: tR,
              end: uR,
              size: ZR
            } = fR;
            if (fR.next(), ZR >= 0 && yR < iR) {
              let qR = GR;
              if (ZR > 4) {
                let yR = fR.pos - (ZR - 4);
                for (; fR.pos > yR;) GR = XR(RR, JR, GR)
              }
              JR[--GR] = qR, JR[--GR] = uR - RR, JR[--GR] = tR - RR, JR[--GR] = yR
            } else - 3 == ZR ? KR = yR : -4 == ZR && (wR = yR);
            return GR
          }
          let MR = [],
            BR = [];
          for (; fR.pos > 0;) rR(RR.start || 0, RR.bufferStart || 0, MR, BR, -1, 0);
          let lR = null !== (JR = RR.length) && void 0 !== JR ? JR : MR.length ? BR[0] + MR[0].length : 0;
          return new eR(VR[RR.topID], MR.reverse(), BR.reverse(), lR)
        }(RR)
      }
    }
    eR.empty = new eR(fR.none, [], [], 0);
    class aR {
      constructor(RR, JR) {
        this.buffer = RR, this.index = JR
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
        return new aR(this.buffer, this.index)
      }
    }
    class LR {
      constructor(RR, JR, GR) {
        this.buffer = RR, this.length = JR, this.set = GR
      }
      get type() {
        return fR.none
      }
      toString() {
        let RR = [];
        for (let JR = 0; JR < this.buffer.length;) RR.push(this.childString(JR)), JR = this.buffer[JR + 3];
        return RR.join(",")
      }
      childString(RR) {
        let JR = this.buffer[RR],
          GR = this.buffer[RR + 3],
          yR = this.set.types[JR],
          tR = yR.name;
        if (/\W/.test(tR) && !yR.isError && (tR = JSON.stringify(tR)), GR == (RR += 4)) return tR;
        let uR = [];
        for (; RR < GR;) uR.push(this.childString(RR)), RR = this.buffer[RR + 3];
        return tR + "(" + uR.join(",") + ")"
      }
      findChild(RR, JR, GR, yR, tR) {
        let {
          buffer: uR
        } = this, ZR = -1;
        for (let qR = RR; qR != JR && !(nR(tR, yR, uR[qR + 1], uR[qR + 2]) && (ZR = qR, GR > 0)); qR = uR[qR + 3]);
        return ZR
      }
      slice(RR, JR, GR) {
        let yR = this.buffer,
          tR = new Uint16Array(JR - RR),
          uR = 0;
        for (let ZR = RR, qR = 0; ZR < JR;) {
          tR[qR++] = yR[ZR++], tR[qR++] = yR[ZR++] - GR;
          let JR = tR[qR++] = yR[ZR++] - GR;
          tR[qR++] = yR[ZR++] - RR, uR = Math.max(uR, JR)
        }
        return new LR(tR, uR, this.set)
      }
    }

    function nR(RR, JR, GR, yR) {
      switch (RR) {
        case -2:
          return GR < JR;
        case -1:
          return yR >= JR && GR < JR;
        case 0:
          return GR < JR && yR > JR;
        case 1:
          return GR <= JR && yR > JR;
        case 2:
          return yR > JR;
        case 4:
          return !0
      }
    }

    function UR(RR, JR, GR, yR) {
      for (var tR; RR.from == RR.to || (GR < 1 ? RR.from >= JR : RR.from > JR) || (GR > -1 ? RR.to <= JR : RR.to < JR);) {
        let JR = !yR && RR instanceof AR && RR.index < 0 ? null : RR.parent;
        if (!JR) return RR;
        RR = JR
      }
      let uR = yR ? 0 : rR.IgnoreOverlays;
      if (yR)
        for (let ZR = RR, qR = ZR.parent; qR; ZR = qR, qR = ZR.parent) ZR instanceof AR && ZR.index < 0 && (null === (tR = qR.enter(JR, GR, uR)) || void 0 === tR ? void 0 : tR.from) != ZR.from && (RR = qR);
      for (;;) {
        let yR = RR.enter(JR, GR, uR);
        if (!yR) return RR;
        RR = yR
      }
    }
    class WR {
      cursor() {
        return new gR(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(RR) {
        let JR = CR(this, RR, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return JR.length ? JR[0] : null
      }
      getChildren(RR) {
        return CR(this, RR, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(RR) {
        return UR(this, RR, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(RR) {
        return UR(this, RR, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(RR) {
        return XR(this.parent, RR)
      }
      enterUnfinishedNodesBefore(RR) {
        let JR = this.childBefore(RR),
          GR = this;
        for (; JR;) {
          let RR = JR.lastChild;
          if (!RR || RR.to != JR.to) break;
          RR.type.isError && RR.from == RR.to ? (GR = JR, JR = RR.prevSibling) : JR = RR
        }
        return GR
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class AR extends WR {
      constructor(RR, JR, GR, yR) {
        super(), this._tree = RR, this.from = JR, this.index = GR, this._parent = yR
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
      nextChild(RR, JR, GR, yR) {
        let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let uR = this;;) {
          for (let {
              children: ZR,
              positions: iR
            } = uR._tree, fR = JR > 0 ? ZR.length : -1; RR != fR; RR += JR) {
            let fR, VR = ZR[RR],
              KR = iR[RR] + uR.from;
            if (tR & rR.EnterBracketed && VR instanceof eR && (fR = qR.get(VR)) && !fR.overlay && fR.bracketed && GR >= KR && GR <= KR + VR.length || nR(yR, GR, KR, KR + VR.length))
              if (VR instanceof LR) {
                if (tR & rR.ExcludeBuffers) continue;
                let ZR = VR.findChild(0, VR.buffer.length, JR, GR - KR, yR);
                if (ZR > -1) return new BR(new MR(uR, VR, RR, KR), null, ZR)
              } else if (tR & rR.IncludeAnonymous || !VR.type.isAnonymous || bR(VR)) {
              let ZR;
              if (!(tR & rR.IgnoreMounts) && (ZR = qR.get(VR)) && !ZR.overlay) return new AR(ZR.tree, KR, RR, uR);
              let iR = new AR(VR, KR, RR, uR);
              return tR & rR.IncludeAnonymous || !iR.type.isAnonymous ? iR : iR.nextChild(JR < 0 ? VR.children.length - 1 : 0, JR, GR, yR, tR)
            }
          }
          if (tR & rR.IncludeAnonymous || !uR.type.isAnonymous) return null;
          if (RR = uR.index >= 0 ? uR.index + JR : JR < 0 ? -1 : uR._parent._tree.children.length, uR = uR._parent, !uR) return null
        }
      }
      get firstChild() {
        return this.nextChild(0, 1, 0, 4)
      }
      get lastChild() {
        return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
      }
      childAfter(RR) {
        return this.nextChild(0, 1, RR, 2)
      }
      childBefore(RR) {
        return this.nextChild(this._tree.children.length - 1, -1, RR, -2)
      }
      prop(RR) {
        return this._tree.prop(RR)
      }
      enter(RR, JR) {
        let GR, yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(yR & rR.IgnoreOverlays) && (GR = qR.get(this._tree)) && GR.overlay) {
          let tR = RR - this.from,
            uR = yR & rR.EnterBracketed && GR.bracketed;
          for (let {
              from: RR,
              to: yR
            }
            of GR.overlay)
            if ((JR > 0 || uR ? RR <= tR : RR < tR) && (JR < 0 || uR ? yR >= tR : yR > tR)) return new AR(GR.tree, GR.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, RR, JR, yR)
      }
      nextSignificantParent() {
        let RR = this;
        for (; RR.type.isAnonymous && RR._parent;) RR = RR._parent;
        return RR
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

    function CR(RR, JR, GR, yR) {
      let tR = RR.cursor(),
        uR = [];
      if (!tR.firstChild()) return uR;
      if (null != GR)
        for (let ZR = !1; !ZR;)
          if (ZR = tR.type.is(GR), !tR.nextSibling()) return uR;
      for (;;) {
        if (null != yR && tR.type.is(yR)) return uR;
        if (tR.type.is(JR) && uR.push(tR.node), !tR.nextSibling()) return null == yR ? uR : []
      }
    }

    function XR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : JR.length - 1;
      for (let yR = RR; GR >= 0; yR = yR.parent) {
        if (!yR) return !1;
        if (!yR.type.isAnonymous) {
          if (JR[GR] && JR[GR] != yR.name) return !1;
          GR--
        }
      }
      return !0
    }
    class MR {
      constructor(RR, JR, GR, yR) {
        this.parent = RR, this.buffer = JR, this.index = GR, this.start = yR
      }
    }
    class BR extends WR {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(RR, JR, GR) {
        super(), this.context = RR, this._parent = JR, this.index = GR, this.type = RR.buffer.set.types[RR.buffer.buffer[GR]]
      }
      child(RR, JR, GR) {
        let {
          buffer: yR
        } = this.context, tR = yR.findChild(this.index + 4, yR.buffer[this.index + 3], RR, JR - this.context.start, GR);
        return tR < 0 ? null : new BR(this.context, this, tR)
      }
      get firstChild() {
        return this.child(1, 0, 4)
      }
      get lastChild() {
        return this.child(-1, 0, 4)
      }
      childAfter(RR) {
        return this.child(1, RR, 2)
      }
      childBefore(RR) {
        return this.child(-1, RR, -2)
      }
      prop(RR) {
        return this.type.prop(RR)
      }
      enter(RR, JR) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & rR.ExcludeBuffers) return null;
        let {
          buffer: GR
        } = this.context, yR = GR.findChild(this.index + 4, GR.buffer[this.index + 3], JR > 0 ? 1 : -1, RR - this.context.start, JR);
        return yR < 0 ? null : new BR(this.context, this, yR)
      }
      get parent() {
        return this._parent || this.context.parent.nextSignificantParent()
      }
      externalSibling(RR) {
        return this._parent ? null : this.context.parent.nextChild(this.context.index + RR, RR, 0, 4)
      }
      get nextSibling() {
        let {
          buffer: RR
        } = this.context, JR = RR.buffer[this.index + 3];
        return JR < (this._parent ? RR.buffer[this._parent.index + 3] : RR.buffer.length) ? new BR(this.context, this._parent, JR) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: RR
        } = this.context, JR = this._parent ? this._parent.index + 4 : 0;
        return this.index == JR ? this.externalSibling(-1) : new BR(this.context, this._parent, RR.findChild(JR, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let RR = [],
          JR = [],
          {
            buffer: GR
          } = this.context,
          yR = this.index + 4,
          tR = GR.buffer[this.index + 3];
        if (tR > yR) {
          let uR = GR.buffer[this.index + 1];
          RR.push(GR.slice(yR, tR, uR)), JR.push(0)
        }
        return new eR(this.type, RR, JR, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function lR(RR) {
      if (!RR.length) return null;
      let JR = 0,
        GR = RR[0];
      for (let uR = 1; uR < RR.length; uR++) {
        let yR = RR[uR];
        (yR.from > GR.from || yR.to < GR.to) && (GR = yR, JR = uR)
      }
      let yR = GR instanceof AR && GR.index < 0 ? null : GR.parent,
        tR = RR.slice();
      return yR ? tR[JR] = yR : tR.splice(JR, 1), new pR(tR, GR)
    }
    class pR {
      constructor(RR, JR) {
        this.heads = RR, this.node = JR
      }
      get next() {
        return lR(this.heads)
      }
    }
    class gR {
      get name() {
        return this.type.name
      }
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = JR & ~rR.EnterBracketed, RR instanceof AR) this.yieldNode(RR);
        else {
          this._tree = RR.context.parent, this.buffer = RR.context;
          for (let JR = RR._parent; JR; JR = JR._parent) this.stack.unshift(JR.index);
          this.bufferNode = RR, this.yieldBuf(RR.index)
        }
      }
      yieldNode(RR) {
        return !!RR && (this._tree = RR, this.type = RR.type, this.from = RR.from, this.to = RR.to, !0)
      }
      yieldBuf(RR, JR) {
        this.index = RR;
        let {
          start: GR,
          buffer: yR
        } = this.buffer;
        return this.type = JR || yR.set.types[yR.buffer[RR]], this.from = GR + yR.buffer[RR + 1], this.to = GR + yR.buffer[RR + 2], !0
      }
      yield(RR) {
        return !!RR && (RR instanceof AR ? (this.buffer = null, this.yieldNode(RR)) : (this.buffer = RR.context, this.yieldBuf(RR.index, RR.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(RR, JR, GR) {
        if (!this.buffer) return this.yield(this._tree.nextChild(RR < 0 ? this._tree._tree.children.length - 1 : 0, RR, JR, GR, this.mode));
        let {
          buffer: yR
        } = this.buffer, tR = yR.findChild(this.index + 4, yR.buffer[this.index + 3], RR, JR - this.buffer.start, GR);
        return !(tR < 0) && (this.stack.push(this.index), this.yieldBuf(tR))
      }
      firstChild() {
        return this.enterChild(1, 0, 4)
      }
      lastChild() {
        return this.enterChild(-1, 0, 4)
      }
      childAfter(RR) {
        return this.enterChild(1, RR, 2)
      }
      childBefore(RR) {
        return this.enterChild(-1, RR, -2)
      }
      enter(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(GR & rR.ExcludeBuffers) && this.enterChild(1, RR, JR) : this.yield(this._tree.enter(RR, JR, GR))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & rR.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let RR = this.mode & rR.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(RR)
      }
      sibling(RR) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + RR, RR, 0, 4, this.mode));
        let {
          buffer: JR
        } = this.buffer, GR = this.stack.length - 1;
        if (RR < 0) {
          let RR = GR < 0 ? 0 : this.stack[GR] + 4;
          if (this.index != RR) return this.yieldBuf(JR.findChild(RR, this.index, -1, 0, 4))
        } else {
          let RR = JR.buffer[this.index + 3];
          if (RR < (GR < 0 ? JR.buffer.length : JR.buffer[this.stack[GR] + 3])) return this.yieldBuf(RR)
        }
        return GR < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + RR, RR, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(RR) {
        let JR, GR, {
          buffer: yR
        } = this;
        if (yR) {
          if (RR > 0) {
            if (this.index < yR.buffer.buffer.length) return !1
          } else
            for (let RR = 0; RR < this.index; RR++)
              if (yR.buffer.buffer[RR + 3] < this.index) return !1;
          ({
            index: JR,
            parent: GR
          } = yR)
        } else({
          index: JR,
          _parent: GR
        } = this._tree);
        for (; GR;
          ({
            index: JR,
            _parent: GR
          } = GR))
          if (JR > -1)
            for (let yR = JR + RR, tR = RR < 0 ? -1 : GR._tree.children.length; yR != tR; yR += RR) {
              let RR = GR._tree.children[yR];
              if (this.mode & rR.IncludeAnonymous || RR instanceof LR || !RR.type.isAnonymous || bR(RR)) return !1
            }
        return !0
      }
      move(RR, JR) {
        if (JR && this.enterChild(RR, 0, 4)) return !0;
        for (;;) {
          if (this.sibling(RR)) return !0;
          if (this.atLastNode(RR) || !this.parent()) return !1
        }
      }
      next() {
        let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(1, RR)
      }
      prev() {
        let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(-1, RR)
      }
      moveTo(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (JR < 1 ? this.from >= RR : this.from > RR) || (JR > -1 ? this.to <= RR : this.to < RR)) && this.parent(););
        for (; this.enterChild(1, RR, JR););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let RR = this.bufferNode,
          JR = null,
          GR = 0;
        if (RR && RR.context == this.buffer) RR: for (let yR = this.index, tR = this.stack.length; tR >= 0;) {
          for (let uR = RR; uR; uR = uR._parent)
            if (uR.index == yR) {
              if (yR == this.index) return uR;
              JR = uR, GR = tR + 1;
              break RR
            } yR = this.stack[--tR]
        }
        for (let yR = GR; yR < this.stack.length; yR++) JR = new BR(this.buffer, JR, this.stack[yR]);
        return this.bufferNode = new BR(this.buffer, JR, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(RR, JR) {
        for (let GR = 0;;) {
          let yR = !1;
          if (this.type.isAnonymous || !1 !== RR(this)) {
            if (this.firstChild()) {
              GR++;
              continue
            }
            this.type.isAnonymous || (yR = !0)
          }
          for (;;) {
            if (yR && JR && JR(this), yR = this.type.isAnonymous, !GR) return;
            if (this.nextSibling()) break;
            this.parent(), GR--, yR = !0
          }
        }
      }
      matchContext(RR) {
        if (!this.buffer) return XR(this.node.parent, RR);
        let {
          buffer: JR
        } = this.buffer, {
          types: GR
        } = JR.set;
        for (let yR = RR.length - 1, tR = this.stack.length - 1; yR >= 0; tR--) {
          if (tR < 0) return XR(this._tree, RR, yR);
          let uR = GR[JR.buffer[this.stack[tR]]];
          if (!uR.isAnonymous) {
            if (RR[yR] && RR[yR] != uR.name) return !1;
            yR--
          }
        }
        return !0
      }
    }

    function bR(RR) {
      return RR.children.some((RR => RR instanceof LR || !RR.type.isAnonymous || bR(RR)))
    }
    const vR = new WeakMap;

    function OR(RR, JR) {
      if (!RR.isAnonymous || JR instanceof LR || JR.type != RR) return 1;
      let GR = vR.get(JR);
      if (null == GR) {
        GR = 1;
        for (let yR of JR.children) {
          if (yR.type != RR || !(yR instanceof eR)) {
            GR = 1;
            break
          }
          GR += OR(RR, yR)
        }
        vR.set(JR, GR)
      }
      return GR
    }

    function xR(RR, JR, GR, yR, tR, uR, ZR, qR, iR) {
      let fR = 0;
      for (let rR = yR; rR < tR; rR++) fR += OR(RR, JR[rR]);
      let VR = Math.ceil(1.5 * fR / 8),
        KR = [],
        wR = [];
      return function JR(GR, yR, tR, ZR, qR) {
        for (let fR = tR; fR < ZR;) {
          let tR = fR,
            rR = yR[fR],
            eR = OR(RR, GR[fR]);
          for (fR++; fR < ZR; fR++) {
            let JR = OR(RR, GR[fR]);
            if (eR + JR >= VR) break;
            eR += JR
          }
          if (fR == tR + 1) {
            if (eR > VR) {
              let RR = GR[tR];
              JR(RR.children, RR.positions, 0, RR.children.length, yR[tR] + qR);
              continue
            }
            KR.push(GR[tR])
          } else {
            let JR = yR[fR - 1] + GR[fR - 1].length - rR;
            KR.push(xR(RR, GR, yR, tR, fR, rR, JR, null, iR))
          }
          wR.push(rR + qR - uR)
        }
      }(JR, GR, yR, tR, 0), (qR || iR)(KR, wR, ZR)
    }
    class NR {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(RR, JR, GR) {
        let yR = this.map.get(RR);
        yR || this.map.set(RR, yR = new Map), yR.set(JR, GR)
      }
      getBuffer(RR, JR) {
        let GR = this.map.get(RR);
        return GR && GR.get(JR)
      }
      set(RR, JR) {
        RR instanceof BR ? this.setBuffer(RR.context.buffer, RR.index, JR) : RR instanceof AR && this.map.set(RR.tree, JR)
      }
      get(RR) {
        return RR instanceof BR ? this.getBuffer(RR.context.buffer, RR.index) : RR instanceof AR ? this.map.get(RR.tree) : void 0
      }
      cursorSet(RR, JR) {
        RR.buffer ? this.setBuffer(RR.buffer.buffer, RR.index, JR) : this.map.set(RR.tree, JR)
      }
      cursorGet(RR) {
        return RR.buffer ? this.getBuffer(RR.buffer.buffer, RR.index) : this.map.get(RR.tree)
      }
    }
    class DR {
      constructor(RR, JR, GR, yR) {
        let tR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          uR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = RR, this.to = JR, this.tree = GR, this.offset = yR, this.open = (tR ? 1 : 0) | (uR ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          yR = [new DR(0, RR.length, RR, 0, !1, GR)];
        for (let tR of JR) tR.to > RR.length && yR.push(tR);
        return yR
      }
      static applyChanges(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!JR.length) return RR;
        let yR = [],
          tR = 1,
          uR = RR.length ? RR[0] : null;
        for (let ZR = 0, qR = 0, iR = 0;; ZR++) {
          let fR = ZR < JR.length ? JR[ZR] : null,
            VR = fR ? fR.fromA : 1e9;
          if (VR - qR >= GR)
            for (; uR && uR.from < VR;) {
              let JR = uR;
              if (qR >= JR.from || VR <= JR.to || iR) {
                let RR = Math.max(JR.from, qR) - iR,
                  GR = Math.min(JR.to, VR) - iR;
                JR = RR >= GR ? null : new DR(RR, GR, JR.tree, JR.offset + iR, ZR > 0, !!fR)
              }
              if (JR && yR.push(JR), uR.to > VR) break;
              uR = tR < RR.length ? RR[tR++] : null
            }
          if (!fR) break;
          qR = fR.toA, iR = fR.toA - fR.toB
        }
        return yR
      }
    }
    class HR {
      startParse(RR, JR, GR) {
        return "string" == typeof RR && (RR = new oR(RR)), GR = GR ? GR.length ? GR.map((RR => new uR(RR.from, RR.to))) : [new uR(0, 0)] : [new uR(0, RR.length)], this.createParse(RR, JR || [], GR)
      }
      parse(RR, JR, GR) {
        let yR = this.startParse(RR, JR, GR);
        for (;;) {
          let RR = yR.advance();
          if (RR) return RR
        }
      }
    }
    class oR {
      constructor(RR) {
        this.string = RR
      }
      get length() {
        return this.string.length
      }
      chunk(RR) {
        return this.string.slice(RR)
      }
      get lineChunks() {
        return !1
      }
      read(RR, JR) {
        return this.string.slice(RR, JR)
      }
    }
    new ZR({
      perNode: !0
    })
  },
  53352: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => wR,
      h: () => iR,
      i: () => KR,
      l: () => vR
    });
    var yR = GR(53346);
    let tR = 0;
    class uR {
      constructor(RR, JR, GR, yR) {
        this.name = RR, this.set = JR, this.base = GR, this.modified = yR, this.id = tR++
      }
      toString() {
        let {
          name: RR
        } = this;
        for (let JR of this.modified) JR.name && (RR = `${JR.name}(${RR})`);
        return RR
      }
      static define(RR, JR) {
        let GR = "string" == typeof RR ? RR : "?";
        if (RR instanceof uR && (JR = RR), null === JR || void 0 === JR ? void 0 : JR.base) throw new Error("Can not derive from a modified tag");
        let yR = new uR(GR, [], null, []);
        if (yR.set.push(yR), JR)
          for (let tR of JR.set) yR.set.push(tR);
        return yR
      }
      static defineModifier(RR) {
        let JR = new qR(RR);
        return RR => RR.modified.indexOf(JR) > -1 ? RR : qR.get(RR.base || RR, RR.modified.concat(JR).sort(((RR, JR) => RR.id - JR.id)))
      }
    }
    let ZR = 0;
    class qR {
      constructor(RR) {
        this.name = RR, this.instances = [], this.id = ZR++
      }
      static get(RR, JR) {
        if (!JR.length) return RR;
        let GR = JR[0].instances.find((GR => {
          return GR.base == RR && (yR = JR, tR = GR.modified, yR.length == tR.length && yR.every(((RR, JR) => RR == tR[JR])));
          var yR, tR
        }));
        if (GR) return GR;
        let yR = [],
          tR = new uR(RR.name, yR, RR, JR);
        for (let uR of JR) uR.instances.push(tR);
        let ZR = function(RR) {
          let JR = [
            []
          ];
          for (let GR = 0; GR < RR.length; GR++)
            for (let yR = 0, tR = JR.length; yR < tR; yR++) JR.push(JR[yR].concat(RR[GR]));
          return JR.sort(((RR, JR) => JR.length - RR.length))
        }(JR);
        for (let uR of RR.set)
          if (!uR.modified.length)
            for (let RR of ZR) yR.push(qR.get(uR, RR));
        return tR
      }
    }

    function iR(RR) {
      let JR = Object.create(null);
      for (let GR in RR) {
        let yR = RR[GR];
        Array.isArray(yR) || (yR = [yR]);
        for (let RR of GR.split(" "))
          if (RR) {
            let GR = [],
              tR = 2,
              uR = RR;
            for (let JR = 0;;) {
              if ("..." == uR && JR > 0 && JR + 3 == RR.length) {
                tR = 1;
                break
              }
              let yR = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(uR);
              if (!yR) throw new RangeError("Invalid path: " + RR);
              if (GR.push("*" == yR[0] ? "" : '"' == yR[0][0] ? JSON.parse(yR[0]) : yR[0]), JR += yR[0].length, JR == RR.length) break;
              let ZR = RR[JR++];
              if (JR == RR.length && "!" == ZR) {
                tR = 0;
                break
              }
              if ("/" != ZR) throw new RangeError("Invalid path: " + RR);
              uR = RR.slice(JR)
            }
            let ZR = GR.length - 1,
              qR = GR[ZR];
            if (!qR) throw new RangeError("Invalid path: " + RR);
            let iR = new VR(yR, tR, ZR > 0 ? GR.slice(0, ZR) : null);
            JR[qR] = iR.sort(JR[qR])
          }
      }
      return fR.add(JR)
    }
    const fR = new yR.d({
      combine(RR, JR) {
        let GR, yR, tR;
        for (; RR || JR;) {
          if (!RR || JR && RR.depth >= JR.depth ? (tR = JR, JR = JR.next) : (tR = RR, RR = RR.next), GR && GR.mode == tR.mode && !tR.context && !GR.context) continue;
          let uR = new VR(tR.tags, tR.mode, tR.context);
          GR ? GR.next = uR : yR = uR, GR = uR
        }
        return yR
      }
    });
    class VR {
      constructor(RR, JR, GR, yR) {
        this.tags = RR, this.mode = JR, this.context = GR, this.next = yR
      }
      get opaque() {
        return 0 == this.mode
      }
      get inherit() {
        return 1 == this.mode
      }
      sort(RR) {
        return !RR || RR.depth < this.depth ? (this.next = RR, this) : (RR.next = this.sort(RR.next), RR)
      }
      get depth() {
        return this.context ? this.context.length : 0
      }
    }

    function KR(RR, JR) {
      let GR = Object.create(null);
      for (let uR of RR)
        if (Array.isArray(uR.tag))
          for (let RR of uR.tag) GR[RR.id] = uR.class;
        else GR[uR.tag.id] = uR.class;
      let {
        scope: yR,
        all: tR = null
      } = JR || {};
      return {
        style: RR => {
          let JR = tR;
          for (let yR of RR)
            for (let RR of yR.set) {
              let yR = GR[RR.id];
              if (yR) {
                JR = JR ? JR + " " + yR : yR;
                break
              }
            }
          return JR
        },
        scope: yR
      }
    }

    function wR(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : RR.length,
        uR = new rR(yR, Array.isArray(JR) ? JR : [JR], GR);
      uR.highlightRange(RR.cursor(), yR, tR, "", uR.highlighters), uR.flush(tR)
    }
    VR.empty = new VR([], 2, null);
    class rR {
      constructor(RR, JR, GR) {
        this.at = RR, this.highlighters = JR, this.span = GR, this.class = ""
      }
      startSpan(RR, JR) {
        JR != this.class && (this.flush(RR), RR > this.at && (this.at = RR), this.class = JR)
      }
      flush(RR) {
        RR > this.at && this.class && this.span(this.at, RR, this.class)
      }
      highlightRange(RR, JR, GR, tR, uR) {
        let {
          type: ZR,
          from: qR,
          to: iR
        } = RR;
        if (qR >= GR || iR <= JR) return;
        ZR.isTop && (uR = this.highlighters.filter((RR => !RR.scope || RR.scope(ZR))));
        let KR = tR,
          wR = function(RR) {
            let JR = RR.type.prop(fR);
            for (; JR && JR.context && !RR.matchContext(JR.context);) JR = JR.next;
            return JR || null
          }(RR) || VR.empty,
          rR = function(RR, JR) {
            let GR = null;
            for (let yR of RR) {
              let RR = yR.style(JR);
              RR && (GR = GR ? GR + " " + RR : RR)
            }
            return GR
          }(uR, wR.tags);
        if (rR && (KR && (KR += " "), KR += rR, 1 == wR.mode && (tR += (tR ? " " : "") + rR)), this.startSpan(Math.max(JR, qR), KR), wR.opaque) return;
        let eR = RR.tree && RR.tree.prop(yR.d.mounted);
        if (eR && eR.overlay) {
          let yR = RR.node.enter(eR.overlay[0].from + qR, 1),
            ZR = this.highlighters.filter((RR => !RR.scope || RR.scope(eR.tree.type))),
            fR = RR.firstChild();
          for (let VR = 0, wR = qR;; VR++) {
            let rR = VR < eR.overlay.length ? eR.overlay[VR] : null,
              aR = rR ? rR.from + qR : iR,
              LR = Math.max(JR, wR),
              nR = Math.min(GR, aR);
            if (LR < nR && fR)
              for (; RR.from < nR && (this.highlightRange(RR, LR, nR, tR, uR), this.startSpan(Math.min(nR, RR.to), KR), !(RR.to >= aR) && RR.nextSibling()););
            if (!rR || aR > GR) break;
            wR = rR.to + qR, wR > JR && (this.highlightRange(yR.cursor(), Math.max(JR, rR.from + qR), Math.min(GR, wR), "", ZR), this.startSpan(Math.min(GR, wR), KR))
          }
          fR && RR.parent()
        } else if (RR.firstChild()) {
          eR && (tR = "");
          do {
            if (!(RR.to <= JR)) {
              if (RR.from >= GR) break;
              this.highlightRange(RR, JR, GR, tR, uR), this.startSpan(Math.min(GR, RR.to), KR)
            }
          } while (RR.nextSibling());
          RR.parent()
        }
      }
    }
    const eR = uR.define,
      aR = eR(),
      LR = eR(),
      nR = eR(LR),
      UR = eR(LR),
      WR = eR(),
      AR = eR(WR),
      CR = eR(WR),
      XR = eR(),
      MR = eR(XR),
      BR = eR(),
      lR = eR(),
      pR = eR(),
      gR = eR(pR),
      bR = eR(),
      vR = {
        comment: aR,
        lineComment: eR(aR),
        blockComment: eR(aR),
        docComment: eR(aR),
        name: LR,
        variableName: eR(LR),
        typeName: nR,
        tagName: eR(nR),
        propertyName: UR,
        attributeName: eR(UR),
        className: eR(LR),
        labelName: eR(LR),
        namespace: eR(LR),
        macroName: eR(LR),
        literal: WR,
        string: AR,
        docString: eR(AR),
        character: eR(AR),
        attributeValue: eR(AR),
        number: CR,
        integer: eR(CR),
        float: eR(CR),
        bool: eR(WR),
        regexp: eR(WR),
        escape: eR(WR),
        color: eR(WR),
        url: eR(WR),
        keyword: BR,
        self: eR(BR),
        null: eR(BR),
        atom: eR(BR),
        unit: eR(BR),
        modifier: eR(BR),
        operatorKeyword: eR(BR),
        controlKeyword: eR(BR),
        definitionKeyword: eR(BR),
        moduleKeyword: eR(BR),
        operator: lR,
        derefOperator: eR(lR),
        arithmeticOperator: eR(lR),
        logicOperator: eR(lR),
        bitwiseOperator: eR(lR),
        compareOperator: eR(lR),
        updateOperator: eR(lR),
        definitionOperator: eR(lR),
        typeOperator: eR(lR),
        controlOperator: eR(lR),
        punctuation: pR,
        separator: eR(pR),
        bracket: gR,
        angleBracket: eR(gR),
        squareBracket: eR(gR),
        paren: eR(gR),
        brace: eR(gR),
        content: XR,
        heading: MR,
        heading1: eR(MR),
        heading2: eR(MR),
        heading3: eR(MR),
        heading4: eR(MR),
        heading5: eR(MR),
        heading6: eR(MR),
        contentSeparator: eR(XR),
        list: eR(XR),
        quote: eR(XR),
        emphasis: eR(XR),
        strong: eR(XR),
        link: eR(XR),
        monospace: eR(XR),
        strikethrough: eR(XR),
        inserted: eR(),
        deleted: eR(),
        changed: eR(),
        invalid: eR(),
        meta: bR,
        documentMeta: eR(bR),
        annotation: eR(bR),
        processingInstruction: eR(bR),
        definition: uR.defineModifier("definition"),
        constant: uR.defineModifier("constant"),
        function: uR.defineModifier("function"),
        standard: uR.defineModifier("standard"),
        local: uR.defineModifier("local"),
        special: uR.defineModifier("special")
      };
    for (let OR in vR) {
      let RR = vR[OR];
      RR instanceof uR && (RR.name = OR)
    }
    KR([{
      tag: vR.link,
      class: "tok-link"
    }, {
      tag: vR.heading,
      class: "tok-heading"
    }, {
      tag: vR.emphasis,
      class: "tok-emphasis"
    }, {
      tag: vR.strong,
      class: "tok-strong"
    }, {
      tag: vR.keyword,
      class: "tok-keyword"
    }, {
      tag: vR.atom,
      class: "tok-atom"
    }, {
      tag: vR.bool,
      class: "tok-bool"
    }, {
      tag: vR.url,
      class: "tok-url"
    }, {
      tag: vR.labelName,
      class: "tok-labelName"
    }, {
      tag: vR.inserted,
      class: "tok-inserted"
    }, {
      tag: vR.deleted,
      class: "tok-deleted"
    }, {
      tag: vR.literal,
      class: "tok-literal"
    }, {
      tag: vR.string,
      class: "tok-string"
    }, {
      tag: vR.number,
      class: "tok-number"
    }, {
      tag: [vR.regexp, vR.escape, vR.special(vR.string)],
      class: "tok-string2"
    }, {
      tag: vR.variableName,
      class: "tok-variableName"
    }, {
      tag: vR.local(vR.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: vR.definition(vR.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: vR.special(vR.variableName),
      class: "tok-variableName2"
    }, {
      tag: vR.definition(vR.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: vR.typeName,
      class: "tok-typeName"
    }, {
      tag: vR.namespace,
      class: "tok-namespace"
    }, {
      tag: vR.className,
      class: "tok-className"
    }, {
      tag: vR.macroName,
      class: "tok-macroName"
    }, {
      tag: vR.propertyName,
      class: "tok-propertyName"
    }, {
      tag: vR.operator,
      class: "tok-operator"
    }, {
      tag: vR.comment,
      class: "tok-comment"
    }, {
      tag: vR.meta,
      class: "tok-meta"
    }, {
      tag: vR.invalid,
      class: "tok-invalid"
    }, {
      tag: vR.punctuation,
      class: "tok-punctuation"
    }])
  },
  53364: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => qR.k,
      f: () => ZR.y,
      j: () => ZR.K,
      l: () => ZR.L,
      m: () => qR.o,
      q: () => MG,
      t: () => qR.N,
      u: () => qR.ib
    });
    var yR = GR(1518),
      tR = GR(1513),
      uR = GR(66),
      ZR = GR(53317),
      qR = GR(53321),
      iR = GR(53340),
      fR = GR(53346);

    function VR(RR, JR) {
      return GR => {
        let {
          state: yR,
          dispatch: tR
        } = GR;
        if (yR.readOnly) return !1;
        let uR = RR(JR, yR);
        return !!uR && (tR(yR.update(uR)), !0)
      }
    }
    const KR = VR(nR, 0),
      wR = VR(LR, 0),
      rR = VR(((RR, JR) => LR(RR, JR, function(RR) {
        let JR = [];
        for (let GR of RR.selection.WL) {
          let yR = RR.doc.lineAt(GR.from),
            tR = GR.to <= yR.to ? yR : RR.doc.lineAt(GR.to);
          tR.from > yR.from && tR.from == GR.to && (tR = GR.to == yR.to + 1 ? yR : RR.doc.lineAt(GR.to - 1));
          let uR = JR.length - 1;
          uR >= 0 && JR[uR].to > yR.from ? JR[uR].to = tR.to : JR.push({
            from: yR.from + /^\s*/.exec(yR.text)[0].length,
            to: tR.to
          })
        }
        return JR
      }(JR))), 0);

    function eR(RR, JR) {
      let GR = RR.languageDataAt("commentTokens", JR, 1);
      return GR.length ? GR[0] : {}
    }
    const aR = 50;

    function LR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : JR.selection.WL,
        yR = GR.map((RR => eR(JR, RR.from).block));
      if (!yR.every((RR => RR))) return null;
      let tR = GR.map(((RR, GR) => function(RR, JR, GR, yR) {
        let tR, uR, {
            open: ZR,
            close: qR
          } = JR,
          iR = RR.sliceDoc(GR - aR, GR),
          fR = RR.sliceDoc(yR, yR + aR),
          VR = /\s*$/.exec(iR)[0].length,
          KR = /^\s*/.exec(fR)[0].length,
          wR = iR.length - VR;
        if (iR.slice(wR - ZR.length, wR) == ZR && fR.slice(KR, KR + qR.length) == qR) return {
          open: {
            pos: GR - VR,
            margin: VR && 1
          },
          close: {
            pos: yR + KR,
            margin: KR && 1
          }
        };
        yR - GR <= 2 * aR ? tR = uR = RR.sliceDoc(GR, yR) : (tR = RR.sliceDoc(GR, GR + aR), uR = RR.sliceDoc(yR - aR, yR));
        let rR = /^\s*/.exec(tR)[0].length,
          eR = /\s*$/.exec(uR)[0].length,
          LR = uR.length - eR - qR.length;
        return tR.slice(rR, rR + ZR.length) == ZR && uR.slice(LR, LR + qR.length) == qR ? {
          open: {
            pos: GR + rR + ZR.length,
            margin: /\s/.test(tR.charAt(rR + ZR.length)) ? 1 : 0
          },
          close: {
            pos: yR - eR - qR.length,
            margin: /\s/.test(uR.charAt(LR - 1)) ? 1 : 0
          }
        } : null
      }(JR, yR[GR], RR.from, RR.to)));
      if (2 != RR && !tR.every((RR => RR))) return {
        changes: JR.changes(GR.map(((RR, JR) => tR[JR] ? [] : [{
          from: RR.from,
          insert: yR[JR].open + " "
        }, {
          from: RR.to,
          insert: " " + yR[JR].close
        }])))
      };
      if (1 != RR && tR.some((RR => RR))) {
        let RR = [];
        for (let JR, GR = 0; GR < tR.length; GR++)
          if (JR = tR[GR]) {
            let tR = yR[GR],
              {
                open: uR,
                close: ZR
              } = JR;
            RR.push({
              from: uR.pos - tR.open.length,
              to: uR.pos + uR.margin
            }, {
              from: ZR.pos - ZR.margin,
              to: ZR.pos + tR.close.length
            })
          } return {
          changes: RR
        }
      }
      return null
    }

    function nR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : JR.selection.WL,
        yR = [],
        tR = -1;
      RR: for (let {
          from: uR,
          to: ZR
        }
        of GR) {
        let RR, GR = yR.length,
          qR = 1e9;
        for (let iR = uR; iR <= ZR;) {
          let GR = JR.doc.lineAt(iR);
          if (void 0 == RR && (RR = eR(JR, GR.from).line, !RR)) continue RR;
          if (GR.from > tR && (uR == ZR || ZR > GR.from)) {
            tR = GR.from;
            let JR = /^\s*/.exec(GR.text)[0].length,
              uR = JR == GR.length,
              ZR = GR.text.slice(JR, JR + RR.length) == RR ? JR : -1;
            JR < GR.text.length && JR < qR && (qR = JR), yR.push({
              line: GR,
              comment: ZR,
              token: RR,
              indent: JR,
              empty: uR,
              single: !1
            })
          }
          iR = GR.to + 1
        }
        if (qR < 1e9)
          for (let JR = GR; JR < yR.length; JR++) yR[JR].indent < yR[JR].line.text.length && (yR[JR].indent = qR);
        yR.length == GR + 1 && (yR[GR].single = !0)
      }
      if (2 != RR && yR.some((RR => RR.comment < 0 && (!RR.empty || RR.single)))) {
        let RR = [];
        for (let {
            line: JR,
            token: tR,
            indent: uR,
            empty: ZR,
            single: qR
          }
          of yR) !qR && ZR || RR.push({
          from: JR.from + uR,
          insert: tR + " "
        });
        let GR = JR.changes(RR);
        return {
          changes: GR,
          selection: JR.selection.map(GR, 1)
        }
      }
      if (1 != RR && yR.some((RR => RR.comment >= 0))) {
        let RR = [];
        for (let {
            line: JR,
            comment: GR,
            token: tR
          }
          of yR)
          if (GR >= 0) {
            let yR = JR.from + GR,
              uR = yR + tR.length;
            " " == JR.text[uR - JR.from] && uR++, RR.push({
              from: yR,
              to: uR
            })
          } return {
          changes: RR
        }
      }
      return null
    }
    const UR = ZR.c.define(),
      WR = ZR.c.define(),
      AR = ZR.r.define(),
      CR = ZR.r.define({
        combine: RR => (0, ZR.ab)(RR, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (RR, JR) => JR
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (RR, JR) => (GR, yR) => RR(GR, yR) || JR(GR, yR)
        })
      }),
      XR = ZR.L.define({
        create: () => IR.empty,
        update(RR, JR) {
          let GR = JR.state.facet(CR),
            yR = JR.annotation(UR);
          if (yR) {
            let tR = bR.fromTransaction(JR, yR.selection),
              uR = yR.side,
              ZR = 0 == uR ? RR.undone : RR.done;
            return ZR = tR ? vR(ZR, ZR.length, GR.minDepth, tR) : DR(ZR, JR.startState.selection), new IR(0 == uR ? yR.rest : ZR, 0 == uR ? ZR : yR.rest)
          }
          let tR = JR.annotation(WR);
          if ("full" != tR && "before" != tR || (RR = RR.isolate()), !1 === JR.annotation(ZR.R.addToHistory)) return JR.changes.empty ? RR : RR.addMapping(JR.changes.desc);
          let uR = bR.fromTransaction(JR),
            qR = JR.annotation(ZR.R.time),
            iR = JR.annotation(ZR.R.userEvent);
          return uR ? RR = RR.addChanges(uR, qR, iR, GR, JR) : JR.selection && (RR = RR.addSelection(JR.startState.selection, qR, iR, GR.newGroupDelay)), "full" != tR && "after" != tR || (RR = RR.isolate()), RR
        },
        toJSON: RR => ({
          done: RR.done.map((RR => RR.toJSON())),
          undone: RR.undone.map((RR => RR.toJSON()))
        }),
        fromJSON: RR => new IR(RR.done.map(bR.fromJSON), RR.undone.map(bR.fromJSON))
      });

    function MR(RR, JR) {
      return function(GR) {
        let {
          state: yR,
          dispatch: tR
        } = GR;
        if (!JR && yR.readOnly) return !1;
        let uR = yR.field(XR, !1);
        if (!uR) return !1;
        let ZR = uR.pop(RR, yR, JR);
        return !!ZR && (tR(ZR), !0)
      }
    }
    const BR = MR(0, !1),
      lR = MR(1, !1),
      pR = MR(0, !0),
      gR = MR(1, !0);
    class bR {
      constructor(RR, JR, GR, yR, tR) {
        this.changes = RR, this.effects = JR, this.mapped = GR, this.startSelection = yR, this.selectionsAfter = tR
      }
      setSelAfter(RR) {
        return new bR(this.changes, this.effects, this.mapped, this.startSelection, RR)
      }
      toJSON() {
        var RR, JR, GR;
        return {
          changes: null === (RR = this.changes) || void 0 === RR ? void 0 : RR.toJSON(),
          mapped: null === (JR = this.mapped) || void 0 === JR ? void 0 : JR.toJSON(),
          startSelection: null === (GR = this.startSelection) || void 0 === GR ? void 0 : GR.toJSON(),
          selectionsAfter: this.selectionsAfter.map((RR => RR.toJSON()))
        }
      }
      static fromJSON(RR) {
        return new bR(RR.changes && ZR.ChangeSet.fromJSON(RR.changes), [], RR.mapped && ZR.e.fromJSON(RR.mapped), RR.startSelection && ZR.k.fromJSON(RR.startSelection), RR.selectionsAfter.map(ZR.k.fromJSON))
      }
      static fromTransaction(RR, JR) {
        let GR = xR;
        for (let yR of RR.startState.facet(AR)) {
          let JR = yR(RR);
          JR.length && (GR = GR.concat(JR))
        }
        return !GR.length && RR.changes.empty ? null : new bR(RR.changes.invert(RR.startState.doc), GR, void 0, JR || RR.startState.selection, xR)
      }
      static selection(RR) {
        return new bR(void 0, xR, void 0, void 0, RR)
      }
    }

    function vR(RR, JR, GR, yR) {
      let tR = JR + 1 > GR + 20 ? JR - GR - 1 : 0,
        uR = RR.slice(tR, JR);
      return uR.push(yR), uR
    }

    function OR(RR, JR) {
      return RR.length ? JR.length ? RR.concat(JR) : RR : JR
    }
    const xR = [],
      NR = 200;

    function DR(RR, JR) {
      if (RR.length) {
        let GR = RR[RR.length - 1],
          yR = GR.selectionsAfter.slice(Math.max(0, GR.selectionsAfter.length - NR));
        return yR.length && yR[yR.length - 1].eq(JR) ? RR : (yR.push(JR), vR(RR, RR.length - 1, 1e9, GR.setSelAfter(yR)))
      }
      return [bR.selection([JR])]
    }

    function HR(RR) {
      let JR = RR[RR.length - 1],
        GR = RR.slice();
      return GR[RR.length - 1] = JR.setSelAfter(JR.selectionsAfter.slice(0, JR.selectionsAfter.length - 1)), GR
    }

    function oR(RR, JR) {
      if (!RR.length) return RR;
      let GR = RR.length,
        yR = xR;
      for (; GR;) {
        let tR = cR(RR[GR - 1], JR, yR);
        if (tR.changes && !tR.changes.empty || tR.effects.length) {
          let JR = RR.slice(0, GR);
          return JR[GR - 1] = tR, JR
        }
        JR = tR.mapped, GR--, yR = tR.selectionsAfter
      }
      return yR.length ? [bR.selection(yR)] : xR
    }

    function cR(RR, JR, GR) {
      let yR = OR(RR.selectionsAfter.length ? RR.selectionsAfter.map((RR => RR.map(JR))) : xR, GR);
      if (!RR.changes) return bR.selection(yR);
      let tR = RR.changes.map(JR),
        uR = JR.mapDesc(RR.changes, !0),
        qR = RR.mapped ? RR.mapped.composeDesc(uR) : uR;
      return new bR(tR, ZR.K.mapEffects(RR.effects, JR), qR, RR.startSelection.map(uR), yR)
    }
    const PR = /^(input\.type|delete)($|\.)/;
    class IR {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = RR, this.undone = JR, this.prevTime = GR, this.prevUserEvent = yR
      }
      isolate() {
        return this.prevTime ? new IR(this.done, this.undone) : this
      }
      addChanges(RR, JR, GR, yR, tR) {
        let uR = this.done,
          qR = uR[uR.length - 1];
        return uR = qR && qR.changes && !qR.changes.empty && RR.changes && (!GR || PR.test(GR)) && (!qR.selectionsAfter.length && JR - this.prevTime < yR.newGroupDelay && yR.joinToEvent(tR, function(RR, JR) {
          let GR = [],
            yR = !1;
          return RR.iterChangedRanges(((RR, JR) => GR.push(RR, JR))), JR.iterChangedRanges(((RR, JR, tR, uR) => {
            for (let ZR = 0; ZR < GR.length;) {
              let RR = GR[ZR++],
                JR = GR[ZR++];
              uR >= RR && tR <= JR && (yR = !0)
            }
          })), yR
        }(qR.changes, RR.changes)) || "input.type.compose" == GR) ? vR(uR, uR.length - 1, yR.minDepth, new bR(RR.changes.compose(qR.changes), OR(ZR.K.mapEffects(RR.effects, qR.changes), qR.effects), qR.mapped, qR.startSelection, xR)) : vR(uR, uR.length, yR.minDepth, RR), new IR(uR, xR, JR, GR)
      }
      addSelection(RR, JR, GR, yR) {
        let tR = this.done.length ? this.done[this.done.length - 1].selectionsAfter : xR;
        return tR.length > 0 && JR - this.prevTime < yR && GR == this.prevUserEvent && GR && /^select($|\.)/.test(GR) && (uR = tR[tR.length - 1], ZR = RR, uR.WL.length == ZR.WL.length && 0 === uR.WL.filter(((RR, JR) => RR.empty != ZR.WL[JR].empty)).length) ? this : new IR(DR(this.done, RR), this.undone, JR, GR);
        var uR, ZR
      }
      addMapping(RR) {
        return new IR(oR(this.done, RR), oR(this.undone, RR), this.prevTime, this.prevUserEvent)
      }
      pop(RR, JR, GR) {
        let yR = 0 == RR ? this.done : this.undone;
        if (0 == yR.length) return null;
        let tR = yR[yR.length - 1],
          uR = tR.selectionsAfter[0] || (tR.startSelection ? tR.startSelection.map(tR.changes.invertedDesc, 1) : JR.selection);
        if (GR && tR.selectionsAfter.length) return JR.update({
          selection: tR.selectionsAfter[tR.selectionsAfter.length - 1],
          annotations: UR.of({
            side: RR,
            rest: HR(yR),
            selection: uR
          }),
          userEvent: 0 == RR ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (tR.changes) {
          let GR = 1 == yR.length ? xR : yR.slice(0, yR.length - 1);
          return tR.mapped && (GR = oR(GR, tR.mapped)), JR.update({
            changes: tR.changes,
            selection: tR.startSelection,
            effects: tR.effects,
            annotations: UR.of({
              side: RR,
              rest: GR,
              selection: uR
            }),
            filter: !1,
            userEvent: 0 == RR ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    IR.empty = new IR(xR, xR);
    const mR = [{
      key: "Mod-z",
      run: BR,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: lR,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: lR,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: pR,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: gR,
      preventDefault: !0
    }];

    function zR(RR, JR) {
      return ZR.k.create(RR.WL.map(JR), RR.mainIndex)
    }

    function SR(RR, JR) {
      return RR.update({
        selection: JR,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function jR(RR, JR) {
      let {
        state: GR,
        dispatch: yR
      } = RR, tR = zR(GR.selection, JR);
      return !tR.eq(GR.selection, !0) && (yR(SR(GR, tR)), !0)
    }

    function dR(RR, JR) {
      return ZR.k.cursor(JR ? RR.to : RR.from)
    }

    function ER(RR, JR) {
      return jR(RR, (GR => GR.empty ? RR.moveByChar(GR, JR) : dR(GR, JR)))
    }

    function YR(RR) {
      return RR.textDirectionAt(RR.state.selection.main.head) == qR.i.LTR
    }
    const kR = RR => ER(RR, !YR(RR)),
      QR = RR => ER(RR, YR(RR));

    function FR(RR, JR) {
      return jR(RR, (GR => GR.empty ? RR.moveByGroup(GR, JR) : dR(GR, JR)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function TR(RR, JR, GR) {
      if (JR.type.prop(GR)) return !0;
      let yR = JR.to - JR.from;
      return yR && (yR > 2 || /[^\s,.;:]/.test(RR.sliceDoc(JR.from, JR.to))) || JR.firstChild
    }

    function sR(RR, JR, GR) {
      let yR, tR, uR = (0, iR.nb)(RR).resolveInner(JR.head),
        qR = GR ? fR.d.closedBy : fR.d.openedBy;
      for (let ZR = JR.head;;) {
        let JR = GR ? uR.childAfter(ZR) : uR.childBefore(ZR);
        if (!JR) break;
        TR(RR, JR, qR) ? uR = JR : ZR = GR ? JR.to : JR.from
      }
      return tR = uR.type.prop(qR) && (yR = GR ? (0, iR.cb)(RR, uR.from, 1) : (0, iR.cb)(RR, uR.to, -1)) && yR.matched ? GR ? yR.end.to : yR.end.from : GR ? uR.to : uR.from, ZR.k.cursor(tR, GR ? -1 : 1)
    }

    function hR(RR, JR) {
      return jR(RR, (GR => {
        if (!GR.empty) return dR(GR, JR);
        let yR = RR.moveVertically(GR, JR);
        return yR.head != GR.head ? yR : RR.moveToLineBoundary(GR, JR)
      }))
    }
    const RJ = RR => hR(RR, !1),
      JJ = RR => hR(RR, !0);

    function GJ(RR) {
      let JR, GR = RR.scrollDOM.clientHeight < RR.scrollDOM.scrollHeight - 2,
        yR = 0,
        tR = 0;
      if (GR) {
        for (let JR of RR.state.facet(qR.k.scrollMargins)) {
          let GR = JR(RR);
          (null === GR || void 0 === GR ? void 0 : GR.top) && (yR = Math.max(null === GR || void 0 === GR ? void 0 : GR.top, yR)), (null === GR || void 0 === GR ? void 0 : GR.bottom) && (tR = Math.max(null === GR || void 0 === GR ? void 0 : GR.bottom, tR))
        }
        JR = RR.scrollDOM.clientHeight - yR - tR
      } else JR = (RR.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: yR,
        marginBottom: tR,
        selfScroll: GR,
        height: Math.max(RR.defaultLineHeight, JR - 5)
      }
    }

    function yJ(RR, JR) {
      let GR, yR = GJ(RR),
        {
          state: tR
        } = RR,
        uR = zR(tR.selection, (GR => GR.empty ? RR.moveVertically(GR, JR, yR.height) : dR(GR, JR)));
      if (uR.eq(tR.selection)) return !1;
      if (yR.selfScroll) {
        let JR = RR.coordsAtPos(tR.selection.main.head),
          ZR = RR.scrollDOM.getBoundingClientRect(),
          iR = ZR.top + yR.marginTop,
          fR = ZR.bottom - yR.marginBottom;
        JR && JR.top > iR && JR.bottom < fR && (GR = qR.k.scrollIntoView(uR.main.head, {
          y: "start",
          yMargin: JR.top - iR
        }))
      }
      return RR.dispatch(SR(tR, uR), {
        effects: GR
      }), !0
    }
    const tJ = RR => yJ(RR, !1),
      uJ = RR => yJ(RR, !0);

    function ZJ(RR, JR, GR) {
      let yR = RR.lineBlockAt(JR.head),
        tR = RR.moveToLineBoundary(JR, GR);
      if (tR.head == JR.head && tR.head != (GR ? yR.to : yR.from) && (tR = RR.moveToLineBoundary(JR, GR, !1)), !GR && tR.head == yR.from && yR.length) {
        let GR = /^\s*/.exec(RR.state.sliceDoc(yR.from, Math.min(yR.from + 100, yR.to)))[0].length;
        GR && JR.head != yR.from + GR && (tR = ZR.k.cursor(yR.from + GR))
      }
      return tR
    }

    function qJ(RR, JR, GR) {
      let yR = !1,
        tR = zR(RR.selection, (JR => {
          let tR = (0, iR.cb)(RR, JR.head, -1) || (0, iR.cb)(RR, JR.head, 1) || JR.head > 0 && (0, iR.cb)(RR, JR.head - 1, 1) || JR.head < RR.doc.length && (0, iR.cb)(RR, JR.head + 1, -1);
          if (!tR || !tR.end) return JR;
          yR = !0;
          let uR = tR.start.from == JR.head ? tR.end.to : tR.end.from;
          return GR ? ZR.k.range(JR.anchor, uR) : ZR.k.cursor(uR)
        }));
      return !!yR && (JR(SR(RR, tR)), !0)
    }

    function iJ(RR, JR) {
      let GR = zR(RR.state.selection, (RR => {
        let GR = JR(RR);
        return ZR.k.range(RR.anchor, GR.head, GR.goalColumn, GR.bidiLevel || void 0, GR.assoc)
      }));
      return !GR.eq(RR.state.selection) && (RR.dispatch(SR(RR.state, GR)), !0)
    }

    function fJ(RR, JR) {
      return iJ(RR, (GR => RR.moveByChar(GR, JR)))
    }
    const VJ = RR => fJ(RR, !YR(RR)),
      KJ = RR => fJ(RR, YR(RR));

    function wJ(RR, JR) {
      return iJ(RR, (GR => RR.moveByGroup(GR, JR)))
    }

    function rJ(RR, JR) {
      return iJ(RR, (GR => RR.moveVertically(GR, JR)))
    }
    const eJ = RR => rJ(RR, !1),
      aJ = RR => rJ(RR, !0);

    function LJ(RR, JR) {
      return iJ(RR, (GR => RR.moveVertically(GR, JR, GJ(RR).height)))
    }
    const nJ = RR => LJ(RR, !1),
      UJ = RR => LJ(RR, !0),
      WJ = RR => {
        let {
          state: JR,
          dispatch: GR
        } = RR;
        return GR(SR(JR, {
          anchor: 0
        })), !0
      },
      AJ = RR => {
        let {
          state: JR,
          dispatch: GR
        } = RR;
        return GR(SR(JR, {
          anchor: JR.doc.length
        })), !0
      },
      CJ = RR => {
        let {
          state: JR,
          dispatch: GR
        } = RR;
        return GR(SR(JR, {
          anchor: JR.selection.main.anchor,
          head: 0
        })), !0
      },
      XJ = RR => {
        let {
          state: JR,
          dispatch: GR
        } = RR;
        return GR(SR(JR, {
          anchor: JR.selection.main.anchor,
          head: JR.doc.length
        })), !0
      };

    function MJ(RR, JR) {
      let {
        state: GR
      } = RR, yR = GR.selection, tR = GR.selection.WL.slice();
      for (let uR of GR.selection.WL) {
        let yR = GR.doc.lineAt(uR.head);
        if (JR ? yR.to < RR.state.doc.length : yR.from > 0)
          for (let GR = uR;;) {
            let uR = RR.moveVertically(GR, JR);
            if (uR.head < yR.from || uR.head > yR.to) {
              tR.some((RR => RR.head == uR.head)) || tR.push(uR);
              break
            }
            if (uR.head == GR.head) break;
            GR = uR
          }
      }
      return tR.length != yR.WL.length && (RR.dispatch(SR(GR, ZR.k.create(tR, tR.length - 1))), !0)
    }

    function BJ(RR, JR) {
      if (RR.state.readOnly) return !1;
      let GR = "delete.selection",
        {
          state: yR
        } = RR,
        tR = yR.changeByRange((yR => {
          let {
            from: tR,
            to: uR
          } = yR;
          if (tR == uR) {
            let ZR = JR(yR);
            ZR < tR ? (GR = "delete.backward", ZR = lJ(RR, ZR, !1)) : ZR > tR && (GR = "delete.forward", ZR = lJ(RR, ZR, !0)), tR = Math.min(tR, ZR), uR = Math.max(uR, ZR)
          } else tR = lJ(RR, tR, !1), uR = lJ(RR, uR, !0);
          return tR == uR ? {
            range: yR
          } : {
            changes: {
              from: tR,
              to: uR
            },
            range: ZR.k.cursor(tR, tR < yR.head ? -1 : 1)
          }
        }));
      return !tR.changes.empty && (RR.dispatch(yR.update(tR, {
        scrollIntoView: !0,
        userEvent: GR,
        effects: "delete.selection" == GR ? qR.k.announce.of(yR.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function lJ(RR, JR, GR) {
      if (RR instanceof qR.k)
        for (let yR of RR.state.facet(qR.k.atomicRanges).map((JR => JR(RR)))) yR.between(JR, JR, ((RR, yR) => {
          RR < JR && yR > JR && (JR = GR ? yR : RR)
        }));
      return JR
    }
    const pJ = (RR, JR, GR) => BJ(RR, (yR => {
        let tR, uR, qR = yR.from,
          {
            state: fR
          } = RR,
          VR = fR.doc.lineAt(qR);
        if (GR && !JR && qR > VR.from && qR < VR.from + 200 && !/[^ \t]/.test(tR = VR.text.slice(0, qR - VR.from))) {
          if ("\t" == tR[tR.length - 1]) return qR - 1;
          let RR = (0, ZR.bb)(tR, fR.tabSize) % (0, iR.M)(fR) || (0, iR.M)(fR);
          for (let JR = 0; JR < RR && " " == tR[tR.length - 1 - JR]; JR++) qR--;
          uR = qR
        } else uR = (0, ZR.eb)(VR.text, qR - VR.from, JR, JR) + VR.from, uR == qR && VR.number != (JR ? fR.doc.lines : 1) ? uR += JR ? 1 : -1 : !JR && /[\ufe00-\ufe0f]/.test(VR.text.slice(uR - VR.from, qR - VR.from)) && (uR = (0, ZR.eb)(VR.text, uR - VR.from, !1, !1) + VR.from);
        return uR
      })),
      gJ = RR => pJ(RR, !1, !0),
      bJ = RR => pJ(RR, !0, !1),
      vJ = (RR, JR) => BJ(RR, (GR => {
        let yR = GR.head,
          {
            state: tR
          } = RR,
          uR = tR.doc.lineAt(yR),
          qR = tR.charCategorizer(yR);
        for (let RR = null;;) {
          if (yR == (JR ? uR.to : uR.from)) {
            yR == GR.head && uR.number != (JR ? tR.doc.lines : 1) && (yR += JR ? 1 : -1);
            break
          }
          let iR = (0, ZR.eb)(uR.text, yR - uR.from, JR) + uR.from,
            fR = uR.text.slice(Math.min(yR, iR) - uR.from, Math.max(yR, iR) - uR.from),
            VR = qR(fR);
          if (null != RR && VR != RR) break;
          " " == fR && yR == GR.head || (RR = VR), yR = iR
        }
        return yR
      })),
      OJ = RR => vJ(RR, !1);

    function xJ(RR) {
      let JR = [],
        GR = -1;
      for (let yR of RR.selection.WL) {
        let tR = RR.doc.lineAt(yR.from),
          uR = RR.doc.lineAt(yR.to);
        if (yR.empty || yR.to != uR.from || (uR = RR.doc.lineAt(yR.to - 1)), GR >= tR.number) {
          let RR = JR[JR.length - 1];
          RR.to = uR.to, RR.WL.push(yR)
        } else JR.push({
          from: tR.from,
          to: uR.to,
          WL: [yR]
        });
        GR = uR.number + 1
      }
      return JR
    }

    function NJ(RR, JR, GR) {
      if (RR.readOnly) return !1;
      let yR = [],
        tR = [];
      for (let uR of xJ(RR)) {
        if (GR ? uR.to == RR.doc.length : 0 == uR.from) continue;
        let JR = RR.doc.lineAt(GR ? uR.to + 1 : uR.from - 1),
          qR = JR.length + 1;
        if (GR) {
          yR.push({
            from: uR.to,
            to: JR.to
          }, {
            from: uR.from,
            insert: JR.text + RR.lineBreak
          });
          for (let JR of uR.WL) tR.push(ZR.k.range(Math.min(RR.doc.length, JR.anchor + qR), Math.min(RR.doc.length, JR.head + qR)))
        } else {
          yR.push({
            from: JR.from,
            to: uR.from
          }, {
            from: uR.to,
            insert: RR.lineBreak + JR.text
          });
          for (let RR of uR.WL) tR.push(ZR.k.range(RR.anchor - qR, RR.head - qR))
        }
      }
      return !!yR.length && (JR(RR.update({
        changes: yR,
        scrollIntoView: !0,
        selection: ZR.k.create(tR, RR.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function DJ(RR, JR, GR) {
      if (RR.readOnly) return !1;
      let yR = [];
      for (let uR of xJ(RR)) GR ? yR.push({
        from: uR.from,
        insert: RR.doc.slice(uR.from, uR.to) + RR.lineBreak
      }) : yR.push({
        from: uR.to,
        insert: RR.lineBreak + RR.doc.slice(uR.from, uR.to)
      });
      let tR = RR.changes(yR);
      return JR(RR.update({
        changes: tR,
        selection: RR.selection.map(tR, GR ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const HJ = oJ(!1);

    function oJ(RR) {
      return JR => {
        let {
          state: GR,
          dispatch: yR
        } = JR;
        if (GR.readOnly) return !1;
        let tR = GR.changeByRange((JR => {
          let {
            from: yR,
            to: tR
          } = JR, uR = GR.doc.lineAt(yR), qR = !RR && yR == tR && function(RR, JR) {
            if (/\(\)|\[\]|\{\}/.test(RR.sliceDoc(JR - 1, JR + 1))) return {
              from: JR,
              to: JR
            };
            let GR, yR = (0, iR.nb)(RR).resolveInner(JR),
              tR = yR.childBefore(JR),
              uR = yR.childAfter(JR);
            return tR && uR && tR.to <= JR && uR.from >= JR && (GR = tR.type.prop(fR.d.closedBy)) && GR.indexOf(uR.name) > -1 && RR.doc.lineAt(tR.to).from == RR.doc.lineAt(uR.from).from && !/\S/.test(RR.sliceDoc(tR.to, uR.from)) ? {
              from: tR.to,
              to: uR.from
            } : null
          }(GR, yR);
          RR && (yR = tR = (tR <= uR.to ? uR : GR.doc.lineAt(tR)).to);
          let VR = new iR.h(GR, {
              simulateBreak: yR,
              simulateDoubleBreak: !!qR
            }),
            KR = (0, iR.Q)(VR, yR);
          for (null == KR && (KR = (0, ZR.bb)(/^\s*/.exec(GR.doc.lineAt(yR).text)[0], GR.tabSize)); tR < uR.to && /\s/.test(uR.text[tR - uR.from]);) tR++;
          qR ? ({
            from: yR,
            to: tR
          } = qR) : yR > uR.from && yR < uR.from + 100 && !/\S/.test(uR.text.slice(0, yR)) && (yR = uR.from);
          let wR = ["", (0, iR.Z)(GR, KR)];
          return qR && wR.push((0, iR.Z)(GR, VR.lineIndent(uR.from, -1))), {
            changes: {
              from: yR,
              to: tR,
              insert: ZR.N.of(wR)
            },
            range: ZR.k.cursor(yR + 1 + wR[1].length)
          }
        }));
        return yR(GR.update(tR, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function cJ(RR, JR) {
      let GR = -1;
      return RR.changeByRange((yR => {
        let tR = [];
        for (let ZR = yR.from; ZR <= yR.to;) {
          let uR = RR.doc.lineAt(ZR);
          uR.number > GR && (yR.empty || yR.to > uR.from) && (JR(uR, tR, yR), GR = uR.number), ZR = uR.to + 1
        }
        let uR = RR.changes(tR);
        return {
          changes: tR,
          range: ZR.k.range(uR.mapPos(yR.anchor, 1), uR.mapPos(yR.head, 1))
        }
      }))
    }
    const PJ = RR => {
        let {
          state: JR,
          dispatch: GR
        } = RR;
        return !JR.readOnly && (GR(JR.update(cJ(JR, ((RR, GR) => {
          GR.push({
            from: RR.from,
            insert: JR.facet(iR.bb)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      IJ = RR => {
        let {
          state: JR,
          dispatch: GR
        } = RR;
        return !JR.readOnly && (GR(JR.update(cJ(JR, ((RR, GR) => {
          let yR = /^\s*/.exec(RR.text)[0];
          if (!yR) return;
          let tR = (0, ZR.bb)(yR, JR.tabSize),
            uR = 0,
            qR = (0, iR.Z)(JR, Math.max(0, tR - (0, iR.M)(JR)));
          for (; uR < yR.length && uR < qR.length && yR.charCodeAt(uR) == qR.charCodeAt(uR);) uR++;
          GR.push({
            from: RR.from + uR,
            to: RR.from + yR.length,
            insert: qR.slice(uR)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      mJ = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: RR => jR(RR, (JR => sR(RR.state, JR, !YR(RR)))),
        shift: RR => iJ(RR, (JR => sR(RR.state, JR, !YR(RR))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: RR => jR(RR, (JR => sR(RR.state, JR, YR(RR)))),
        shift: RR => iJ(RR, (JR => sR(RR.state, JR, YR(RR))))
      }, {
        key: "Alt-ArrowUp",
        run: RR => {
          let {
            state: JR,
            dispatch: GR
          } = RR;
          return NJ(JR, GR, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: RR => {
          let {
            state: JR,
            dispatch: GR
          } = RR;
          return DJ(JR, GR, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: RR => {
          let {
            state: JR,
            dispatch: GR
          } = RR;
          return NJ(JR, GR, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: RR => {
          let {
            state: JR,
            dispatch: GR
          } = RR;
          return DJ(JR, GR, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: RR => MJ(RR, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: RR => MJ(RR, !0)
      }, {
        key: "Escape",
        run: RR => {
          let {
            state: JR,
            dispatch: GR
          } = RR, yR = JR.selection, tR = null;
          return yR.WL.length > 1 ? tR = ZR.k.create([yR.main]) : yR.main.empty || (tR = ZR.k.create([ZR.k.cursor(yR.main.head)])), !!tR && (GR(SR(JR, tR)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: oJ(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: RR => {
          let {
            state: JR,
            dispatch: GR
          } = RR, yR = xJ(JR).map((RR => {
            let {
              from: GR,
              to: yR
            } = RR;
            return ZR.k.range(GR, Math.min(yR + 1, JR.doc.length))
          }));
          return GR(JR.update({
            selection: ZR.k.create(yR),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: RR => {
          let {
            state: JR,
            dispatch: GR
          } = RR, yR = zR(JR.selection, (RR => {
            let GR = (0, iR.nb)(JR),
              yR = GR.resolveStack(RR.from, 1);
            if (RR.empty) {
              let JR = GR.resolveStack(RR.from, -1);
              JR.node.from >= yR.node.from && JR.node.to <= yR.node.to && (yR = JR)
            }
            for (let JR = yR; JR; JR = JR.next) {
              let {
                node: GR
              } = JR;
              if ((GR.from < RR.from && GR.to >= RR.to || GR.to > RR.to && GR.from <= RR.from) && JR.next) return ZR.k.range(GR.to, GR.from)
            }
            return RR
          }));
          return !yR.eq(JR.selection) && (GR(SR(JR, yR)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: IJ
      }, {
        key: "Mod-]",
        run: PJ
      }, {
        key: "Mod-Alt-\\",
        run: RR => {
          let {
            state: JR,
            dispatch: GR
          } = RR;
          if (JR.readOnly) return !1;
          let yR = Object.create(null),
            tR = new iR.h(JR, {
              overrideIndentation: RR => {
                let JR = yR[RR];
                return null == JR ? -1 : JR
              }
            }),
            uR = cJ(JR, ((RR, GR, uR) => {
              let ZR = (0, iR.Q)(tR, RR.from);
              if (null == ZR) return;
              /\S/.test(RR.text) || (ZR = 0);
              let qR = /^\s*/.exec(RR.text)[0],
                fR = (0, iR.Z)(JR, ZR);
              (qR != fR || uR.from < RR.from + qR.length) && (yR[RR.from] = ZR, GR.push({
                from: RR.from,
                to: RR.from + qR.length,
                insert: fR
              }))
            }));
          return uR.changes.empty || GR(JR.update(uR, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: RR => {
          if (RR.state.readOnly) return !1;
          let {
            state: JR
          } = RR, GR = JR.changes(xJ(JR).map((RR => {
            let {
              from: GR,
              to: yR
            } = RR;
            return GR > 0 ? GR-- : yR < JR.doc.length && yR++, {
              from: GR,
              to: yR
            }
          }))), yR = zR(JR.selection, (JR => {
            let GR;
            if (RR.lineWrapping) {
              let yR = RR.lineBlockAt(JR.head),
                tR = RR.coordsAtPos(JR.head, JR.assoc || 1);
              tR && (GR = yR.bottom + RR.documentTop - tR.bottom + RR.defaultLineHeight / 2)
            }
            return RR.moveVertically(JR, !0, GR)
          })).map(GR);
          return RR.dispatch({
            changes: GR,
            selection: yR,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: RR => {
          let {
            state: JR,
            dispatch: GR
          } = RR;
          return qJ(JR, GR, !1)
        }
      }, {
        key: "Mod-/",
        run: RR => {
          let {
            state: JR
          } = RR, GR = JR.doc.lineAt(JR.selection.main.from), yR = eR(RR.state, GR.from);
          return yR.line ? KR(RR) : !!yR.block && rR(RR)
        }
      }, {
        key: "Alt-A",
        run: wR
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: RR => (RR.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: kR,
        shift: VJ,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: RR => FR(RR, !YR(RR)),
        shift: RR => wJ(RR, !YR(RR)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: RR => jR(RR, (JR => ZJ(RR, JR, !YR(RR)))),
        shift: RR => iJ(RR, (JR => ZJ(RR, JR, !YR(RR)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: QR,
        shift: KJ,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: RR => FR(RR, YR(RR)),
        shift: RR => wJ(RR, YR(RR)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: RR => jR(RR, (JR => ZJ(RR, JR, YR(RR)))),
        shift: RR => iJ(RR, (JR => ZJ(RR, JR, YR(RR)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: RJ,
        shift: eJ,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: WJ,
        shift: CJ
      }, {
        mac: "Ctrl-ArrowUp",
        run: tJ,
        shift: nJ
      }, {
        key: "ArrowDown",
        run: JJ,
        shift: aJ,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: AJ,
        shift: XJ
      }, {
        mac: "Ctrl-ArrowDown",
        run: uJ,
        shift: UJ
      }, {
        key: "PageUp",
        run: tJ,
        shift: nJ
      }, {
        key: "PageDown",
        run: uJ,
        shift: UJ
      }, {
        key: "Home",
        run: RR => jR(RR, (JR => ZJ(RR, JR, !1))),
        shift: RR => iJ(RR, (JR => ZJ(RR, JR, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: WJ,
        shift: CJ
      }, {
        key: "End",
        run: RR => jR(RR, (JR => ZJ(RR, JR, !0))),
        shift: RR => iJ(RR, (JR => ZJ(RR, JR, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: AJ,
        shift: XJ
      }, {
        key: "Enter",
        run: HJ,
        shift: HJ
      }, {
        key: "Mod-a",
        run: RR => {
          let {
            state: JR,
            dispatch: GR
          } = RR;
          return GR(JR.update({
            selection: {
              anchor: 0,
              head: JR.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: gJ,
        shift: gJ,
        preventDefault: !0
      }, {
        key: "Delete",
        run: bJ,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: OJ,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: RR => vJ(RR, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: RR => BJ(RR, (JR => {
          let GR = RR.moveToLineBoundary(JR, !1).head;
          return JR.head > GR ? GR : Math.max(0, JR.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: RR => BJ(RR, (JR => {
          let GR = RR.moveToLineBoundary(JR, !0).head;
          return JR.head < GR ? GR : Math.min(RR.state.doc.length, JR.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: kR,
        shift: VJ,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: QR,
        shift: KJ
      }, {
        key: "Ctrl-p",
        run: RJ,
        shift: eJ
      }, {
        key: "Ctrl-n",
        run: JJ,
        shift: aJ
      }, {
        key: "Ctrl-a",
        run: RR => jR(RR, (JR => ZR.k.cursor(RR.lineBlockAt(JR.head).from, 1))),
        shift: RR => iJ(RR, (JR => ZR.k.cursor(RR.lineBlockAt(JR.head).from)))
      }, {
        key: "Ctrl-e",
        run: RR => jR(RR, (JR => ZR.k.cursor(RR.lineBlockAt(JR.head).to, -1))),
        shift: RR => iJ(RR, (JR => ZR.k.cursor(RR.lineBlockAt(JR.head).to)))
      }, {
        key: "Ctrl-d",
        run: bJ
      }, {
        key: "Ctrl-h",
        run: gJ
      }, {
        key: "Ctrl-k",
        run: RR => BJ(RR, (JR => {
          let GR = RR.lineBlockAt(JR.head).to;
          return JR.head < GR ? GR : Math.min(RR.state.doc.length, JR.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: OJ
      }, {
        key: "Ctrl-o",
        run: RR => {
          let {
            state: JR,
            dispatch: GR
          } = RR;
          if (JR.readOnly) return !1;
          let yR = JR.changeByRange((RR => ({
            changes: {
              from: RR.from,
              to: RR.to,
              insert: ZR.N.of(["", ""])
            },
            range: ZR.k.cursor(RR.from)
          })));
          return GR(JR.update(yR, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: RR => {
          let {
            state: JR,
            dispatch: GR
          } = RR;
          if (JR.readOnly) return !1;
          let yR = JR.changeByRange((RR => {
            if (!RR.empty || 0 == RR.from || RR.from == JR.doc.length) return {
              range: RR
            };
            let GR = RR.from,
              yR = JR.doc.lineAt(GR),
              tR = GR == yR.from ? GR - 1 : (0, ZR.eb)(yR.text, GR - yR.from, !1) + yR.from,
              uR = GR == yR.to ? GR + 1 : (0, ZR.eb)(yR.text, GR - yR.from, !0) + yR.from;
            return {
              changes: {
                from: tR,
                to: uR,
                insert: JR.doc.slice(GR, uR).append(JR.doc.slice(tR, GR))
              },
              range: ZR.k.cursor(uR)
            }
          }));
          return !yR.changes.empty && (GR(JR.update(yR, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: uJ
      }].map((RR => ({
        mac: RR.key,
        run: RR.run,
        shift: RR.shift
      }))))),
      zJ = {
        key: "Tab",
        run: PJ,
        shift: IJ
      };
    var SJ = GR(53368),
      jJ = GR(53314),
      dJ = GR(53374),
      EJ = function(RR) {
        void 0 === RR && (RR = {});
        var {
          crosshairCursor: JR = !1
        } = RR, GR = [];
        !1 !== RR.closeBracketsKeymap && (GR = GR.concat(jJ.h)), !1 !== RR.defaultKeymap && (GR = GR.concat(mJ)), !1 !== RR.searchKeymap && (GR = GR.concat(SJ.h)), !1 !== RR.historyKeymap && (GR = GR.concat(mR)), !1 !== RR.foldKeymap && (GR = GR.concat(iR.C)), !1 !== RR.completionKeymap && (GR = GR.concat(jJ.n)), !1 !== RR.lintKeymap && (GR = GR.concat(dJ.e));
        var yR = [];
        return !1 !== RR.lineNumbers && yR.push((0, qR.S)()), !1 !== RR.highlightActiveLineGutter && yR.push((0, qR.D)()), !1 !== RR.highlightSpecialChars && yR.push((0, qR.L)()), !1 !== RR.history && yR.push(function() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [XR, CR.of(RR), qR.k.domEventHandlers({
            beforeinput(RR, JR) {
              let GR = "historyUndo" == RR.inputType ? BR : "historyRedo" == RR.inputType ? lR : null;
              return !!GR && (RR.preventDefault(), GR(JR))
            }
          })]
        }()), !1 !== RR.foldGutter && yR.push((0, iR.z)()), !1 !== RR.drawSelection && yR.push((0, qR.t)()), !1 !== RR.dropCursor && yR.push((0, qR.v)()), !1 !== RR.allowMultipleSelections && yR.push(ZR.o.allowMultipleSelections.of(!0)), !1 !== RR.indentOnInput && yR.push((0, iR.W)()), !1 !== RR.syntaxHighlighting && yR.push((0, iR.kb)(iR.r, {
          fallback: !0
        })), !1 !== RR.bracketMatching && yR.push((0, iR.n)()), !1 !== RR.closeBrackets && yR.push((0, jJ.l)()), !1 !== RR.autocompletion && yR.push((0, jJ.e)()), !1 !== RR.rectangularSelection && yR.push((0, qR._)()), !1 !== JR && yR.push((0, qR.s)()), !1 !== RR.highlightActiveLine && yR.push((0, qR.H)()), !1 !== RR.highlightSelectionMatches && yR.push((0, SJ.d)()), RR.tabSize && "number" === typeof RR.tabSize && yR.push(iR.bb.of(" ".repeat(RR.tabSize))), yR.concat([qR.Q.of(GR.flat())]).filter(Boolean)
      },
      YJ = GR(53352);
    const kJ = "#e5c07b",
      QJ = "#e06c75",
      FJ = "#56b6c2",
      TJ = "#ffffff",
      sJ = "#abb2bf",
      hJ = "#7d8799",
      RG = "#61afef",
      JG = "#98c379",
      GG = "#d19a66",
      yG = "#c678dd",
      tG = "#21252b",
      uG = "#2c313a",
      ZG = "#282c34",
      qG = "#353a42",
      iG = "#3E4451",
      fG = "#528bff",
      VG = qR.k.theme({
        "&": {
          color: sJ,
          backgroundColor: ZG
        },
        ".cm-content": {
          caretColor: fG
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: fG
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: iG
        },
        ".cm-panels": {
          backgroundColor: tG,
          color: sJ
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
          backgroundColor: ZG,
          color: hJ,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: uG
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: qG
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: qG,
          borderBottomColor: qG
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: uG,
            color: sJ
          }
        }
      }, {
        dark: !0
      }),
      KG = iR.e.define([{
        tag: YJ.l.keyword,
        color: yG
      }, {
        tag: [YJ.l.name, YJ.l.deleted, YJ.l.character, YJ.l.propertyName, YJ.l.macroName],
        color: QJ
      }, {
        tag: [YJ.l.function(YJ.l.variableName), YJ.l.labelName],
        color: RG
      }, {
        tag: [YJ.l.color, YJ.l.constant(YJ.l.name), YJ.l.standard(YJ.l.name)],
        color: GG
      }, {
        tag: [YJ.l.definition(YJ.l.name), YJ.l.separator],
        color: sJ
      }, {
        tag: [YJ.l.typeName, YJ.l.className, YJ.l.number, YJ.l.changed, YJ.l.annotation, YJ.l.modifier, YJ.l.self, YJ.l.namespace],
        color: kJ
      }, {
        tag: [YJ.l.operator, YJ.l.operatorKeyword, YJ.l.url, YJ.l.escape, YJ.l.regexp, YJ.l.link, YJ.l.special(YJ.l.string)],
        color: FJ
      }, {
        tag: [YJ.l.meta, YJ.l.comment],
        color: hJ
      }, {
        tag: YJ.l.strong,
        fontWeight: "bold"
      }, {
        tag: YJ.l.emphasis,
        fontStyle: "italic"
      }, {
        tag: YJ.l.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: YJ.l.link,
        color: hJ,
        textDecoration: "underline"
      }, {
        tag: YJ.l.heading,
        fontWeight: "bold",
        color: QJ
      }, {
        tag: [YJ.l.atom, YJ.l.bool, YJ.l.special(YJ.l.variableName)],
        color: GG
      }, {
        tag: [YJ.l.processingInstruction, YJ.l.string, YJ.l.inserted],
        color: JG
      }, {
        tag: YJ.l.invalid,
        color: TJ
      }]),
      wG = [VG, (0, iR.kb)(KG)];
    var rG = qR.k.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class eG {
      constructor(RR, JR) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = JR, this.timeoutMS = JR, this.callbacks.push(RR)
      }
      gK() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var RR = this.callbacks.slice();
          this.callbacks.length = 0, RR.forEach((RR => {
            try {
              RR()
            } catch (JR) {
              console.error("TimeoutLatch callback error:", JR)
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
    class aG {
      constructor() {
        this.interval = null, this.latches = new Set
      }
      add(RR) {
        this.latches.add(RR), this.start()
      }
      remove(RR) {
        this.latches.delete(RR), 0 === this.latches.size && this.stop()
      }
      start() {
        null === this.interval && (this.interval = setInterval((() => {
          this.latches.forEach((RR => {
            RR.gK(), RR.isDone && this.remove(RR)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var LG = null,
      nG = ZR.c.define(),
      UG = [];

    function WG(RR) {
      var {
        value: JR,
        selection: GR,
        onChange: yR,
        onStatistics: tR,
        onCreateEditor: iR,
        onUpdate: fR,
        extensions: VR = UG,
        autoFocus: KR,
        theme: wR = "light",
        height: rR = null,
        minHeight: eR = null,
        maxHeight: aR = null,
        width: LR = null,
        minWidth: nR = null,
        maxWidth: UR = null,
        placeholder: WR = "",
        editable: AR = !0,
        readOnly: CR = !1,
        indentWithTab: XR = !0,
        basicSetup: MR = !0,
        root: BR,
        initialState: lR
      } = RR, [pR, gR] = (0, uR.useState)(), [bR, vR] = (0, uR.useState)(), [OR, xR] = (0, uR.useState)(), NR = (0, uR.useState)((() => ({
        current: null
      })))[0], DR = (0, uR.useState)((() => ({
        current: null
      })))[0], HR = qR.k.theme({
        "&": {
          height: rR,
          minHeight: eR,
          maxHeight: aR,
          width: LR,
          minWidth: nR,
          maxWidth: UR
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), oR = qR.k.updateListener.of((RR => {
        if (RR.docChanged && "function" === typeof yR && !RR.transactions.some((RR => RR.annotation(nG)))) {
          NR.current ? NR.current.reset() : (NR.current = new eG((() => {
            if (DR.current) {
              var RR = DR.current;
              DR.current = null, RR()
            }
            NR.current = null
          }), 200), ("undefined" === typeof window ? new aG : (LG || (LG = new aG), LG)).add(NR.current));
          var JR = RR.state.doc.toString();
          yR(JR, RR)
        }
        tR && tR((RR => ({
          line: RR.state.doc.lineAt(RR.state.selection.main.from),
          lineCount: RR.state.doc.lines,
          lineBreak: RR.state.lineBreak,
          length: RR.state.doc.length,
          readOnly: RR.state.readOnly,
          tabSize: RR.state.tabSize,
          selection: RR.state.selection,
          selectionAsSingle: RR.state.selection.asSingle().main,
          WL: RR.state.selection.WL,
          selectionCode: RR.state.sliceDoc(RR.state.selection.main.from, RR.state.selection.main.to),
          selections: RR.state.selection.WL.map((JR => RR.state.sliceDoc(JR.from, JR.to))),
          selectedText: RR.state.selection.WL.some((RR => !RR.empty))
        }))(RR))
      })), cR = function(RR) {
        void 0 === RR && (RR = {});
        var {
          indentWithTab: JR = !0,
          editable: GR = !0,
          readOnly: yR = !1,
          theme: tR = "light",
          placeholder: uR = "",
          basicSetup: iR = !0
        } = RR, fR = [];
        switch (JR && fR.unshift(qR.Q.of([zJ])), iR && ("boolean" === typeof iR ? fR.unshift(EJ()) : fR.unshift(EJ(iR))), uR && fR.unshift((0, qR.Y)(uR)), tR) {
          case "light":
            fR.push(rG);
            break;
          case "dark":
            fR.push(wG);
            break;
          case "none":
            break;
          default:
            fR.push(tR)
        }
        return !1 === GR && fR.push(qR.k.editable.of(!1)), yR && fR.push(ZR.o.readOnly.of(!0)), [...fR]
      }({
        theme: wR,
        editable: AR,
        readOnly: CR,
        placeholder: WR,
        indentWithTab: XR,
        basicSetup: MR
      }), PR = [oR, HR, ...cR];
      return fR && "function" === typeof fR && PR.push(qR.k.updateListener.of(fR)), PR = PR.concat(VR), (0, uR.useLayoutEffect)((() => {
        if (pR && !OR) {
          var RR = {
              doc: JR,
              selection: GR,
              extensions: PR
            },
            yR = lR ? ZR.o.fromJSON(lR.json, RR, lR.fields) : ZR.o.create(RR);
          if (xR(yR), !bR) {
            var tR = new qR.k({
              state: yR,
              parent: pR,
              root: BR
            });
            vR(tR), iR && iR(tR, yR)
          }
        }
        return () => {
          bR && (xR(void 0), vR(void 0))
        }
      }), [pR, OR]), (0, uR.useEffect)((() => {
        RR.container && gR(RR.container)
      }), [RR.container]), (0, uR.useEffect)((() => () => {
        bR && (bR.destroy(), vR(void 0)), NR.current && (NR.current.cancel(), NR.current = null)
      }), [bR]), (0, uR.useEffect)((() => {
        KR && bR && bR.focus()
      }), [KR, bR]), (0, uR.useEffect)((() => {
        bR && bR.dispatch({
          effects: ZR.K.reconfigure.of(PR)
        })
      }), [wR, VR, rR, eR, aR, LR, nR, UR, WR, AR, CR, XR, MR, yR, fR]), (0, uR.useEffect)((() => {
        if (void 0 !== JR) {
          var RR = bR ? bR.state.doc.toString() : "";
          if (bR && JR !== RR) {
            var GR = () => {
              bR && JR !== bR.state.doc.toString() && bR.dispatch({
                changes: {
                  from: 0,
                  to: bR.state.doc.toString().length,
                  insert: JR || ""
                },
                annotations: [nG.of(!0)]
              })
            };
            NR.current && !NR.current.isDone ? DR.current = GR : GR()
          }
        }
      }), [JR, bR]), {
        state: OR,
        setState: xR,
        view: bR,
        setView: vR,
        container: pR,
        setContainer: gR
      }
    }
    var AG = GR(1378),
      CG = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      XG = (0, uR.forwardRef)(((RR, JR) => {
        var {
          className: GR,
          value: ZR = "",
          selection: qR,
          extensions: iR = [],
          onChange: fR,
          onStatistics: VR,
          onCreateEditor: KR,
          onUpdate: wR,
          autoFocus: rR,
          theme: eR = "light",
          height: aR,
          minHeight: LR,
          maxHeight: nR,
          width: UR,
          minWidth: WR,
          maxWidth: AR,
          basicSetup: CR,
          placeholder: XR,
          indentWithTab: MR,
          editable: BR,
          readOnly: lR,
          root: pR,
          initialState: gR
        } = RR, bR = (0, tR.e)(RR, CG), vR = (0, uR.useRef)(null), {
          state: OR,
          view: xR,
          container: NR,
          setContainer: DR
        } = WG({
          root: pR,
          value: ZR,
          autoFocus: rR,
          theme: eR,
          height: aR,
          minHeight: LR,
          maxHeight: nR,
          width: UR,
          minWidth: WR,
          maxWidth: AR,
          basicSetup: CR,
          placeholder: XR,
          indentWithTab: MR,
          editable: BR,
          readOnly: lR,
          selection: qR,
          onChange: fR,
          onStatistics: VR,
          onCreateEditor: KR,
          onUpdate: wR,
          extensions: iR,
          initialState: gR
        });
        (0, uR.useImperativeHandle)(JR, (() => ({
          editor: vR.current,
          state: OR,
          view: xR
        })), [vR, NR, OR, xR]);
        var HR = (0, uR.useCallback)((RR => {
          vR.current = RR, DR(RR)
        }), [DR]);
        if ("string" !== typeof ZR) throw new Error("value must be typeof string but got " + typeof ZR);
        var oR = "string" === typeof eR ? "cm-theme-" + eR : "cm-theme";
        return (0, AG.jsx)("div", (0, yR.e)({
          ref: HR,
          className: oR + (GR ? " " + GR : "")
        }, bR))
      }));
    XG.displayName = "CodeMirror";
    const MG = XG
  },
  53332: (RR, JR, GR) => {
    function yR() {
      var RR = arguments[0];
      "string" == typeof RR && (RR = document.createElement(RR));
      var JR = 1,
        GR = arguments[1];
      if (GR && "object" == typeof GR && null == GR.nodeType && !Array.isArray(GR)) {
        for (var yR in GR)
          if (Object.prototype.hasOwnProperty.call(GR, yR)) {
            var uR = GR[yR];
            "string" == typeof uR ? RR.setAttribute(yR, uR) : null != uR && (RR[yR] = uR)
          } JR++
      }
      for (; JR < arguments.length; JR++) tR(RR, arguments[JR]);
      return RR
    }

    function tR(RR, JR) {
      if ("string" == typeof JR) RR.appendChild(document.createTextNode(JR));
      else if (null == JR);
      else if (null != JR.nodeType) RR.appendChild(JR);
      else {
        if (!Array.isArray(JR)) throw new RangeError("Unsupported child node: " + JR);
        for (var GR = 0; GR < JR.length; GR++) tR(RR, JR[GR])
      }
    }
    GR.d(JR, {
      c: () => yR
    })
  },
  53326: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => ZR
    });
    const yR = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      tR = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      uR = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class ZR {
      constructor(RR, JR) {
        this.rules = [];
        let {
          finish: GR
        } = JR || {};

        function yR(RR) {
          return /^@/.test(RR) ? [RR] : RR.split(/,\s*/)
        }

        function tR(RR, JR, uR, ZR) {
          let qR = [],
            iR = /^@(\w+)\b/.exec(RR[0]),
            fR = iR && "keyframes" == iR[1];
          if (iR && null == JR) return uR.push(RR[0] + ";");
          for (let GR in JR) {
            let ZR = JR[GR];
            if (/&/.test(GR)) tR(GR.split(/,\s*/).map((JR => RR.map((RR => JR.replace(/&/, RR))))).reduce(((RR, JR) => RR.concat(JR))), ZR, uR);
            else if (ZR && "object" == typeof ZR) {
              if (!iR) throw new RangeError("The value of a property (" + GR + ") should be a primitive value.");
              tR(yR(GR), ZR, qR, fR)
            } else null != ZR && qR.push(GR.replace(/_.*/, "").replace(/[A-Z]/g, (RR => "-" + RR.toLowerCase())) + ": " + ZR + ";")
          }(qR.length || fR) && uR.push((!GR || iR || ZR ? RR : RR.map(GR)).join(", ") + " {" + qR.join(" ") + "}")
        }
        for (let uR in RR) tR(yR(uR), RR[uR], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let RR = uR[yR] || 1;
        return uR[yR] = RR + 1, "\u037c" + RR.toString(36)
      }
      static mount(RR, JR, GR) {
        let yR = RR[tR],
          uR = GR && GR.nonce;
        yR ? uR && yR.setNonce(uR) : yR = new iR(RR, uR), yR.mount(Array.isArray(JR) ? JR : [JR], RR)
      }
    }
    let qR = new Map;
    class iR {
      constructor(RR, JR) {
        let GR = RR.ownerDocument || RR,
          yR = GR.defaultView;
        if (!RR.head && RR.adoptedStyleSheets && yR.CSSStyleSheet) {
          let JR = qR.get(GR);
          if (JR) return RR[tR] = JR;
          this.sheet = new yR.CSSStyleSheet, qR.set(GR, this)
        } else this.styleTag = GR.createElement("style"), JR && this.styleTag.setAttribute("nonce", JR);
        this.modules = [], RR[tR] = this
      }
      mount(RR, JR) {
        let GR = this.sheet,
          yR = 0,
          tR = 0;
        for (let uR = 0; uR < RR.length; uR++) {
          let JR = RR[uR],
            ZR = this.modules.indexOf(JR);
          if (ZR < tR && ZR > -1 && (this.modules.splice(ZR, 1), tR--, ZR = -1), -1 == ZR) {
            if (this.modules.splice(tR++, 0, JR), GR)
              for (let RR = 0; RR < JR.rules.length; RR++) GR.insertRule(JR.rules[RR], yR++)
          } else {
            for (; tR < ZR;) yR += this.modules[tR++].rules.length;
            yR += JR.rules.length, tR++
          }
        }
        if (GR) JR.adoptedStyleSheets.indexOf(this.sheet) < 0 && (JR.adoptedStyleSheets = [this.sheet, ...JR.adoptedStyleSheets]);
        else {
          let RR = "";
          for (let JR = 0; JR < this.modules.length; JR++) RR += this.modules[JR].getRules() + "\n";
          this.styleTag.textContent = RR;
          let GR = JR.head || JR;
          this.styleTag.parentNode != GR && GR.insertBefore(this.styleTag, GR.firstChild)
        }
      }
      setNonce(RR) {
        this.styleTag && this.styleTag.getAttribute("nonce") != RR && this.styleTag.setAttribute("nonce", RR)
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);