export const id = 274;
export const ids = [274];
export const modules = {
  40033: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => IT,
      f: () => sT,
      h: () => vT,
      l: () => YB,
      p: () => cT,
      t: () => gB,
      v: () => LT
    });
    var VB = dB(40036),
      yB = dB(40040),
      pB = dB(40060);
    class lB {
      constructor(BB, TB, dB, VB) {
        this.state = BB, this.pos = TB, this.explicit = dB, this.view = VB, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(BB) {
        let TB = (0, pB.hb)(this.state).resolveInner(this.pos, -1);
        for (; TB && BB.indexOf(TB.name) < 0;) TB = TB.parent;
        return TB ? {
          from: TB.from,
          to: this.pos,
          text: this.state.sliceDoc(TB.from, this.pos),
          type: TB.type
        } : null
      }
      matchBefore(BB) {
        let TB = this.state.doc.lineAt(this.pos),
          dB = Math.max(TB.from, this.pos - 250),
          VB = TB.text.slice(dB - TB.from, this.pos - TB.from),
          yB = VB.search(LB(BB, !1));
        return yB < 0 ? null : {
          from: dB + yB,
          to: this.pos,
          text: VB.slice(yB)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(BB, TB, dB) {
        "abort" == BB && this.abortListeners && (this.abortListeners.push(TB), dB && dB.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function JB(BB) {
      let TB = Object.keys(BB).join(""),
        dB = /\w/.test(TB);
      return dB && (TB = TB.replace(/\w/g, "")), `[${dB?"\\w":""}${TB.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function YB(BB) {
      let TB = BB.map((BB => "string" == typeof BB ? {
          label: BB
        } : BB)),
        [dB, VB] = TB.every((BB => /^\w+$/.test(BB.label))) ? [/\w*$/, /\w+$/] : function(BB) {
          let TB = Object.create(null),
            dB = Object.create(null);
          for (let {
              label: yB
            }
            of BB) {
            TB[yB[0]] = !0;
            for (let BB = 1; BB < yB.length; BB++) dB[yB[BB]] = !0
          }
          let VB = JB(TB) + JB(dB) + "*$";
          return [new RegExp("^" + VB), new RegExp(VB)]
        }(TB);
      return BB => {
        let yB = BB.matchBefore(VB);
        return yB || BB.explicit ? {
          from: yB ? yB.from : BB.pos,
          options: TB,
          validFor: dB
        } : null
      }
    }

    function gB(BB, TB) {
      return dB => {
        for (let TB = (0, pB.hb)(dB.state).resolveInner(dB.pos, -1); TB; TB = TB.parent) {
          if (BB.indexOf(TB.name) > -1) return null;
          if (TB.type.isTop) break
        }
        return TB(dB)
      }
    }
    class oB {
      constructor(BB, TB, dB, VB) {
        this.completion = BB, this.source = TB, this.match = dB, this.score = VB
      }
    }

    function kB(BB) {
      return BB.selection.main.from
    }

    function LB(BB, TB) {
      var dB;
      let {
        source: VB
      } = BB, yB = TB && "^" != VB[0], pB = "$" != VB[VB.length - 1];
      return yB || pB ? new RegExp(`${yB?"^":""}(?:${VB})${pB?"$":""}`, null !== (dB = BB.flags) && void 0 !== dB ? dB : BB.ignoreCase ? "i" : "") : BB
    }
    const OB = VB.c.define();

    function DB(BB, TB, dB, yB) {
      let {
        main: pB
      } = BB.selection, lB = dB - pB.from, JB = yB - pB.from;
      return {
        ...BB.changeByRange((YB => {
          if (YB != pB && dB != yB && BB.sliceDoc(YB.from + lB, YB.from + JB) != BB.sliceDoc(dB, yB)) return {
            range: YB
          };
          let gB = BB.toText(TB);
          return {
            changes: {
              from: YB.from + lB,
              to: yB == pB.from ? YB.to : YB.from + JB,
              insert: gB
            },
            range: VB.h.cursor(YB.from + lB + gB.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const uB = new WeakMap;

    function HB(BB) {
      if (!Array.isArray(BB)) return BB;
      let TB = uB.get(BB);
      return TB || uB.set(BB, TB = YB(BB)), TB
    }
    const EB = VB.x.define(),
      vB = VB.x.define();
    class mB {
      constructor(BB) {
        this.pattern = BB, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let TB = 0; TB < BB.length;) {
          let dB = (0, VB.K)(BB, TB),
            yB = (0, VB.M)(dB);
          this.chars.push(dB);
          let pB = BB.slice(TB, TB + yB),
            lB = pB.toUpperCase();
          this.folded.push((0, VB.K)(lB == pB ? pB.toLowerCase() : lB, 0)), TB += yB
        }
        this.astral = BB.length != this.chars.length
      }
      ret(BB, TB) {
        return this.score = BB, this.matched = TB, this
      }
      match(BB) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (BB.length < this.pattern.length) return null;
        let {
          chars: TB,
          folded: dB,
          any: yB,
          precise: pB,
          byWord: lB
        } = this;
        if (1 == TB.length) {
          let yB = (0, VB.K)(BB, 0),
            pB = (0, VB.M)(yB),
            lB = pB == BB.length ? 0 : -100;
          if (yB == TB[0]);
          else {
            if (yB != dB[0]) return null;
            lB += -200
          }
          return this.ret(lB, [0, pB])
        }
        let JB = BB.indexOf(this.pattern);
        if (0 == JB) return this.ret(BB.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let YB = TB.length,
          gB = 0;
        if (JB < 0) {
          for (let pB = 0, lB = Math.min(BB.length, 200); pB < lB && gB < YB;) {
            let lB = (0, VB.K)(BB, pB);
            lB != TB[gB] && lB != dB[gB] || (yB[gB++] = pB), pB += (0, VB.M)(lB)
          }
          if (gB < YB) return null
        }
        let oB = 0,
          kB = 0,
          LB = !1,
          OB = 0,
          DB = -1,
          uB = -1,
          HB = /[a-z]/.test(BB),
          EB = !0;
        for (let vB = 0, mB = Math.min(BB.length, 200), iB = 0; vB < mB && kB < YB;) {
          let yB = (0, VB.K)(BB, vB);
          JB < 0 && (oB < YB && yB == TB[oB] && (pB[oB++] = vB), OB < YB && (yB == TB[OB] || yB == dB[OB] ? (0 == OB && (DB = vB), uB = vB + 1, OB++) : OB = 0));
          let gB, mB = yB < 255 ? yB >= 48 && yB <= 57 || yB >= 97 && yB <= 122 ? 2 : yB >= 65 && yB <= 90 ? 1 : 0 : (gB = (0, VB.Y)(yB)) != gB.toLowerCase() ? 1 : gB != gB.toUpperCase() ? 2 : 0;
          (!vB || 1 == mB && HB || 0 == iB && 0 != mB) && (TB[kB] == yB || dB[kB] == yB && (LB = !0) ? lB[kB++] = vB : lB.length && (EB = !1)), iB = mB, vB += (0, VB.M)(yB)
        }
        return kB == YB && 0 == lB[0] && EB ? this.result((LB ? -200 : 0) - 100, lB, BB) : OB == YB && 0 == DB ? this.ret(-200 - BB.length + (uB == BB.length ? 0 : -100), [0, uB]) : JB > -1 ? this.ret(-700 - BB.length, [JB, JB + this.pattern.length]) : OB == YB ? this.ret(-900 - BB.length, [DB, uB]) : kB == YB ? this.result((LB ? -200 : 0) - 100 - 700 + (EB ? 0 : -1100), lB, BB) : 2 == TB.length ? null : this.result((yB[0] ? -700 : 0) - 200 - 1100, yB, BB)
      }
      result(BB, TB, dB) {
        let yB = [],
          pB = 0;
        for (let lB of TB) {
          let BB = lB + (this.astral ? (0, VB.M)((0, VB.K)(dB, lB)) : 1);
          pB && yB[pB - 1] == lB ? yB[pB - 1] = BB : (yB[pB++] = lB, yB[pB++] = BB)
        }
        return this.ret(BB - dB.length, yB)
      }
    }
    class iB {
      constructor(BB) {
        this.pattern = BB, this.matched = [], this.score = 0, this.folded = BB.toLowerCase()
      }
      match(BB) {
        if (BB.length < this.pattern.length) return null;
        let TB = BB.slice(0, this.pattern.length),
          dB = TB == this.pattern ? 0 : TB.toLowerCase() == this.folded ? -200 : null;
        return null == dB ? null : (this.matched = [0, TB.length], this.score = dB + (BB.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const NB = VB.l.define({
      combine: BB => (0, VB.P)(BB, {
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
        positionInfo: fB,
        filterStrict: !1,
        compareCompletions: (BB, TB) => (BB.sortText || BB.label).localeCompare(TB.sortText || TB.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (BB, TB) => BB && TB,
        closeOnBlur: (BB, TB) => BB && TB,
        icons: (BB, TB) => BB && TB,
        tooltipClass: (BB, TB) => dB => tB(BB(dB), TB(dB)),
        optionClass: (BB, TB) => dB => tB(BB(dB), TB(dB)),
        addToOptions: (BB, TB) => BB.concat(TB),
        filterStrict: (BB, TB) => BB || TB
      })
    });

    function tB(BB, TB) {
      return BB ? TB ? BB + " " + TB : BB : TB
    }

    function fB(BB, TB, dB, VB, pB, lB) {
      let JB, YB, gB = BB.textDirection == yB.f.RTL,
        oB = gB,
        kB = !1,
        LB = "top",
        OB = TB.left - pB.left,
        DB = pB.right - TB.right,
        uB = VB.right - VB.left,
        HB = VB.bottom - VB.top;
      if (oB && OB < Math.min(uB, DB) ? oB = !1 : !oB && DB < Math.min(uB, OB) && (oB = !0), uB <= (oB ? OB : DB)) JB = Math.max(pB.top, Math.min(dB.top, pB.bottom - HB)) - TB.top, YB = Math.min(400, oB ? OB : DB);
      else {
        kB = !0, YB = Math.min(400, (gB ? TB.right : pB.right - TB.left) - 30);
        let BB = pB.bottom - TB.bottom;
        BB >= HB || BB > TB.top ? JB = dB.bottom - TB.top : (LB = "bottom", JB = TB.bottom - dB.top)
      }
      return {
        style: `${LB}: ${JB/((TB.bottom-TB.top)/lB.offsetHeight)}px; max-width: ${YB/((TB.right-TB.left)/lB.offsetWidth)}px`,
        class: "cm-completionInfo-" + (kB ? gB ? "left-narrow" : "right-narrow" : oB ? "left" : "right")
      }
    }
    const sB = VB.x.define();

    function MB(BB, TB, dB) {
      if (BB <= dB) return {
        from: 0,
        to: BB
      };
      if (TB < 0 && (TB = 0), TB <= BB >> 1) {
        let BB = Math.floor(TB / dB);
        return {
          from: BB * dB,
          to: (BB + 1) * dB
        }
      }
      let VB = Math.floor((BB - TB) / dB);
      return {
        from: BB - (VB + 1) * dB,
        to: BB - VB * dB
      }
    }
    class zB {
      constructor(BB, TB, dB) {
        this.view = BB, this.stateField = TB, this.applyCompletion = dB, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: BB => this.placeInfo(BB),
          key: this
        }, this.space = null, this.currentClass = "";
        let VB = BB.state.field(TB),
          {
            options: yB,
            selected: pB
          } = VB.open,
          lB = BB.state.facet(NB);
        this.optionContent = function(BB) {
          let TB = BB.addToOptions.slice();
          return BB.icons && TB.push({
            render(BB) {
              let TB = document.createElement("div");
              return TB.classList.add("cm-completionIcon"), BB.type && TB.classList.add(...BB.type.split(/\s+/g).map((BB => "cm-completionIcon-" + BB))), TB.setAttribute("aria-hidden", "true"), TB
            },
            position: 20
          }), TB.push({
            render(BB, TB, dB, VB) {
              let yB = document.createElement("span");
              yB.className = "cm-completionLabel";
              let pB = BB.displayLabel || BB.label,
                lB = 0;
              for (let JB = 0; JB < VB.length;) {
                let BB = VB[JB++],
                  TB = VB[JB++];
                BB > lB && yB.appendChild(document.createTextNode(pB.slice(lB, BB)));
                let dB = yB.appendChild(document.createElement("span"));
                dB.appendChild(document.createTextNode(pB.slice(BB, TB))), dB.className = "cm-completionMatchedText", lB = TB
              }
              return lB < pB.length && yB.appendChild(document.createTextNode(pB.slice(lB))), yB
            },
            position: 50
          }, {
            render(BB) {
              if (!BB.detail) return null;
              let TB = document.createElement("span");
              return TB.className = "cm-completionDetail", TB.textContent = BB.detail, TB
            },
            position: 80
          }), TB.sort(((BB, TB) => BB.position - TB.position)).map((BB => BB.render))
        }(lB), this.optionClass = lB.optionClass, this.tooltipClass = lB.tooltipClass, this.range = MB(yB.length, pB, lB.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(BB.state), this.dom.addEventListener("mousedown", (dB => {
          let {
            options: VB
          } = BB.state.field(TB).open;
          for (let TB, yB = dB.target; yB && yB != this.dom; yB = yB.parentNode)
            if ("LI" == yB.nodeName && (TB = /-(\d+)$/.exec(yB.id)) && +TB[1] < VB.length) return this.applyCompletion(BB, VB[+TB[1]]), void dB.preventDefault();
          if (dB.target == this.list) {
            let TB = this.list.classList.contains("cm-completionListIncompleteTop") && dB.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && dB.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != TB && (BB.dispatch({
              effects: sB.of(TB)
            }), dB.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (TB => {
          let dB = BB.state.field(this.stateField, !1);
          dB && dB.tooltip && BB.state.facet(NB).closeOnBlur && TB.relatedTarget != BB.contentDOM && BB.dispatch({
            effects: vB.of(null)
          })
        })), this.showOptions(yB, VB.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(BB, TB) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(BB, TB, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(BB) {
        var TB;
        let dB = BB.state.field(this.stateField),
          VB = BB.startState.field(this.stateField);
        if (this.updateTooltipClass(BB.state), dB != VB) {
          let {
            options: yB,
            selected: pB,
            disabled: lB
          } = dB.open;
          VB.open && VB.open.options == yB || (this.range = MB(yB.length, pB, BB.state.facet(NB).maxRenderedOptions), this.showOptions(yB, dB.id)), this.updateSel(), lB != (null === (TB = VB.open) || void 0 === TB ? void 0 : TB.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!lB)
        }
      }
      updateTooltipClass(BB) {
        let TB = this.tooltipClass(BB);
        if (TB != this.currentClass) {
          for (let BB of this.currentClass.split(" ")) BB && this.dom.classList.remove(BB);
          for (let BB of TB.split(" ")) BB && this.dom.classList.add(BB);
          this.currentClass = TB
        }
      }
      positioned(BB) {
        this.space = BB, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let BB = this.view.state.field(this.stateField),
          TB = BB.open;
        (TB.selected > -1 && TB.selected < this.range.from || TB.selected >= this.range.to) && (this.range = MB(TB.options.length, TB.selected, this.view.state.facet(NB).maxRenderedOptions), this.showOptions(TB.options, BB.id));
        let dB = this.updateSelectedOption(TB.selected);
        if (dB) {
          this.destroyInfo();
          let {
            completion: VB
          } = TB.options[TB.selected], {
            info: pB
          } = VB;
          if (!pB) return;
          let lB = "string" === typeof pB ? document.createTextNode(pB) : pB(VB);
          if (!lB) return;
          "then" in lB ? lB.then((TB => {
            TB && this.view.state.field(this.stateField, !1) == BB && this.addInfoPane(TB, VB)
          })).catch((BB => (0, yB.W)(this.view.state, BB, "completion info"))) : (this.addInfoPane(lB, VB), dB.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(BB, TB) {
        this.destroyInfo();
        let dB = this.info = document.createElement("div");
        if (dB.className = "cm-tooltip cm-completionInfo", dB.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != BB.nodeType) dB.appendChild(BB), this.infoDestroy = null;
        else {
          let {
            dom: TB,
            destroy: VB
          } = BB;
          dB.appendChild(TB), this.infoDestroy = VB || null
        }
        this.dom.appendChild(dB), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(BB) {
        let TB = null;
        for (let dB = this.list.firstChild, VB = this.range.from; dB; dB = dB.nextSibling, VB++) "LI" == dB.nodeName && dB.id ? VB == BB ? dB.hasAttribute("aria-selected") || (dB.setAttribute("aria-selected", "true"), TB = dB) : dB.hasAttribute("aria-selected") && (dB.removeAttribute("aria-selected"), dB.removeAttribute("aria-describedby")) : VB--;
        return TB && function(BB, TB) {
          let dB = BB.getBoundingClientRect(),
            VB = TB.getBoundingClientRect(),
            yB = dB.height / BB.offsetHeight;
          VB.top < dB.top ? BB.scrollTop -= (dB.top - VB.top) / yB : VB.bottom > dB.bottom && (BB.scrollTop += (VB.bottom - dB.bottom) / yB)
        }(this.list, TB), TB
      }
      measureInfo() {
        let BB = this.dom.querySelector("[aria-selected]");
        if (!BB || !this.info) return null;
        let TB = this.dom.getBoundingClientRect(),
          dB = this.info.getBoundingClientRect(),
          VB = BB.getBoundingClientRect(),
          yB = this.space;
        if (!yB) {
          let BB = this.dom.ownerDocument.documentElement;
          yB = {
            left: 0,
            top: 0,
            right: BB.clientWidth,
            bottom: BB.clientHeight
          }
        }
        return VB.top > Math.min(yB.bottom, TB.bottom) - 10 || VB.bottom < Math.max(yB.top, TB.top) + 10 ? null : this.view.state.facet(NB).positionInfo(this.view, TB, VB, dB, yB, this.dom)
      }
      placeInfo(BB) {
        this.info && (BB ? (BB.style && (this.info.style.cssText = BB.style), this.info.className = "cm-tooltip cm-completionInfo " + (BB.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(BB, TB, dB) {
        const VB = document.createElement("ul");
        VB.id = TB, VB.setAttribute("role", "listbox"), VB.setAttribute("aria-expanded", "true"), VB.setAttribute("aria-label", this.view.state.phrase("Completions")), VB.addEventListener("mousedown", (BB => {
          BB.target == VB && BB.preventDefault()
        }));
        let yB = null;
        for (let pB = dB.from; pB < dB.to; pB++) {
          let {
            completion: lB,
            match: JB
          } = BB[pB], {
            section: YB
          } = lB;
          if (YB) {
            let BB = "string" == typeof YB ? YB : YB.name;
            if (BB != yB && (pB > dB.from || 0 == dB.from))
              if (yB = BB, "string" != typeof YB && YB.header) VB.appendChild(YB.header(YB));
              else {
                VB.appendChild(document.createElement("completion-section")).textContent = BB
              }
          }
          const gB = VB.appendChild(document.createElement("li"));
          gB.id = TB + "-" + pB, gB.setAttribute("role", "option");
          let oB = this.optionClass(lB);
          oB && (gB.className = oB);
          for (let BB of this.optionContent) {
            let TB = BB(lB, this.view.state, this.view, JB);
            TB && gB.appendChild(TB)
          }
        }
        return dB.from && VB.classList.add("cm-completionListIncompleteTop"), dB.to < BB.length && VB.classList.add("cm-completionListIncompleteBottom"), VB
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function wB(BB, TB) {
      return dB => new zB(dB, BB, TB)
    }

    function UB(BB) {
      return 100 * (BB.boost || 0) + (BB.apply ? 10 : 0) + (BB.info ? 5 : 0) + (BB.type ? 1 : 0)
    }
    class FB {
      constructor(BB, TB, dB, VB, yB, pB) {
        this.options = BB, this.attrs = TB, this.tooltip = dB, this.timestamp = VB, this.selected = yB, this.disabled = pB
      }
      setSelected(BB, TB) {
        return BB == this.selected || BB >= this.options.length ? this : new FB(this.options, cB(TB, BB), this.tooltip, this.timestamp, BB, this.disabled)
      }
      static build(BB, TB, dB, VB, yB, pB) {
        if (VB && !pB && BB.some((BB => BB.isPending))) return VB.setDisabled();
        let lB = function(BB, TB) {
          let dB = [],
            VB = null,
            yB = null,
            pB = BB => {
              dB.push(BB);
              let {
                section: TB
              } = BB.completion;
              if (TB) {
                VB || (VB = []);
                let BB = "string" == typeof TB ? TB : TB.name;
                VB.some((TB => TB.name == BB)) || VB.push("string" == typeof TB ? {
                  name: BB
                } : TB)
              }
            },
            lB = TB.facet(NB);
          for (let kB of BB)
            if (kB.hasResult()) {
              let BB = kB.result.getMatch;
              if (!1 === kB.result.filter)
                for (let TB of kB.result.options) pB(new oB(TB, kB.source, BB ? BB(TB) : [], 1e9 - dB.length));
              else {
                let dB, VB = TB.sliceDoc(kB.from, kB.to),
                  JB = lB.filterStrict ? new iB(VB) : new mB(VB);
                for (let TB of kB.result.options)
                  if (dB = JB.match(TB.label)) {
                    let VB = TB.displayLabel ? BB ? BB(TB, dB.matched) : [] : dB.matched,
                      lB = dB.score + (TB.boost || 0);
                    if (pB(new oB(TB, kB.source, VB, lB)), "object" == typeof TB.section && "dynamic" === TB.section.rank) {
                      let {
                        name: BB
                      } = TB.section;
                      yB || (yB = Object.create(null)), yB[BB] = Math.max(lB, yB[BB] || -1e9)
                    }
                  }
              }
            } if (VB) {
            let BB = Object.create(null),
              TB = 0,
              pB = (BB, TB) => ("dynamic" === BB.rank && "dynamic" === TB.rank ? yB[TB.name] - yB[BB.name] : 0) || ("number" == typeof BB.rank ? BB.rank : 1e9) - ("number" == typeof TB.rank ? TB.rank : 1e9) || (BB.name < TB.name ? -1 : 1);
            for (let dB of VB.sort(pB)) TB -= 1e5, BB[dB.name] = TB;
            for (let VB of dB) {
              let {
                section: TB
              } = VB.completion;
              TB && (VB.score += BB["string" == typeof TB ? TB : TB.name])
            }
          }
          let JB = [],
            YB = null,
            gB = lB.compareCompletions;
          for (let oB of dB.sort(((BB, TB) => TB.score - BB.score || gB(BB.completion, TB.completion)))) {
            let BB = oB.completion;
            !YB || YB.label != BB.label || YB.detail != BB.detail || null != YB.type && null != BB.type && YB.type != BB.type || YB.apply != BB.apply || YB.boost != BB.boost ? JB.push(oB) : UB(oB.completion) > UB(YB) && (JB[JB.length - 1] = oB), YB = oB.completion
          }
          return JB
        }(BB, TB);
        if (!lB.length) return VB && BB.some((BB => BB.isPending)) ? VB.setDisabled() : null;
        let JB = TB.facet(NB).selectOnOpen ? 0 : -1;
        if (VB && VB.selected != JB && -1 != VB.selected) {
          let BB = VB.options[VB.selected].completion;
          for (let TB = 0; TB < lB.length; TB++)
            if (lB[TB].completion == BB) {
              JB = TB;
              break
            }
        }
        return new FB(lB, cB(dB, JB), {
          pos: BB.reduce(((BB, TB) => TB.hasResult() ? Math.min(BB, TB.from) : BB), 1e8),
          create: WB,
          above: yB.aboveCursor
        }, VB ? VB.timestamp : Date.now(), JB, !1)
      }
      map(BB) {
        return new FB(this.options, this.attrs, {
          ...this.tooltip,
          pos: BB.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new FB(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class KB {
      constructor(BB, TB, dB) {
        this.active = BB, this.id = TB, this.open = dB
      }
      static start() {
        return new KB(SB, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(BB) {
        let {
          state: TB
        } = BB, dB = TB.facet(NB), VB = (dB.override || TB.languageDataAt("autocomplete", kB(TB)).map(HB)).map((TB => (this.active.find((BB => BB.source == TB)) || new QB(TB, this.active.some((BB => 0 != BB.state)) ? 1 : 0)).update(BB, dB)));
        VB.length == this.active.length && VB.every(((BB, TB) => BB == this.active[TB])) && (VB = this.active);
        let yB = this.open,
          pB = BB.effects.some((BB => BB.is(aB)));
        yB && BB.docChanged && (yB = yB.map(BB.changes)), BB.selection || VB.some((TB => TB.hasResult() && BB.changes.touchesRange(TB.from, TB.to))) || ! function(BB, TB) {
          if (BB == TB) return !0;
          for (let dB = 0, VB = 0;;) {
            for (; dB < BB.length && !BB[dB].hasResult();) dB++;
            for (; VB < TB.length && !TB[VB].hasResult();) VB++;
            let yB = dB == BB.length,
              pB = VB == TB.length;
            if (yB || pB) return yB == pB;
            if (BB[dB++].result != TB[VB++].result) return !1
          }
        }(VB, this.active) || pB ? yB = FB.build(VB, TB, this.id, yB, dB, pB) : yB && yB.disabled && !VB.some((BB => BB.isPending)) && (yB = null), !yB && VB.every((BB => !BB.isPending)) && VB.some((BB => BB.hasResult())) && (VB = VB.map((BB => BB.hasResult() ? new QB(BB.source, 0) : BB)));
        for (let lB of BB.effects) lB.is(sB) && (yB = yB && yB.setSelected(lB.value, this.id));
        return VB == this.active && yB == this.open ? this : new KB(VB, this.id, yB)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? rB : IB
      }
    }
    const rB = {
        "aria-autocomplete": "list"
      },
      IB = {};

    function cB(BB, TB) {
      let dB = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": BB
      };
      return TB > -1 && (dB["aria-activedescendant"] = BB + "-" + TB), dB
    }
    const SB = [];

    function PB(BB, TB) {
      if (BB.isUserEvent("input.complete")) {
        let dB = BB.annotation(OB);
        if (dB && TB.activateOnCompletion(dB)) return 12
      }
      let dB = BB.isUserEvent("input.type");
      return dB && TB.activateOnTyping ? 5 : dB ? 1 : BB.isUserEvent("delete.backward") ? 2 : BB.selection ? 8 : BB.docChanged ? 16 : 0
    }
    class QB {
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = BB, this.state = TB, this.explicit = dB
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(BB, TB) {
        let dB = PB(BB, TB),
          VB = this;
        (8 & dB || 16 & dB && this.touches(BB)) && (VB = new QB(VB.source, 0)), 4 & dB && 0 == VB.state && (VB = new QB(this.source, 1)), VB = VB.updateFor(BB, dB);
        for (let yB of BB.effects)
          if (yB.is(EB)) VB = new QB(VB.source, 1, yB.value);
          else if (yB.is(vB)) VB = new QB(VB.source, 0);
        else if (yB.is(aB))
          for (let BB of yB.value) BB.source == VB.source && (VB = BB);
        return VB
      }
      updateFor(BB, TB) {
        return this.map(BB.changes)
      }
      map(BB) {
        return this
      }
      touches(BB) {
        return BB.changes.touchesRange(kB(BB.state))
      }
    }
    class RB extends QB {
      constructor(BB, TB, dB, VB, yB, pB) {
        super(BB, 3, TB), this.limit = dB, this.result = VB, this.from = yB, this.to = pB
      }
      hasResult() {
        return !0
      }
      updateFor(BB, TB) {
        var dB;
        if (!(3 & TB)) return this.map(BB.changes);
        let VB = this.result;
        VB.map && !BB.changes.empty && (VB = VB.map(VB, BB.changes));
        let yB = BB.changes.mapPos(this.from),
          pB = BB.changes.mapPos(this.to, 1),
          JB = kB(BB.state);
        if (JB > pB || !VB || 2 & TB && (kB(BB.startState) == this.from || JB < this.limit)) return new QB(this.source, 4 & TB ? 1 : 0);
        let YB = BB.changes.mapPos(this.limit);
        return function(BB, TB, dB, VB) {
          if (!BB) return !1;
          let yB = TB.sliceDoc(dB, VB);
          return "function" == typeof BB ? BB(yB, dB, VB, TB) : LB(BB, !0).test(yB)
        }(VB.validFor, BB.state, yB, pB) ? new RB(this.source, this.explicit, YB, VB, yB, pB) : VB.update && (VB = VB.update(VB, yB, pB, new lB(BB.state, JB, !1))) ? new RB(this.source, this.explicit, YB, VB, VB.from, null !== (dB = VB.to) && void 0 !== dB ? dB : kB(BB.state)) : new QB(this.source, 1, this.explicit)
      }
      map(BB) {
        if (BB.empty) return this;
        return (this.result.map ? this.result.map(this.result, BB) : this.result) ? new RB(this.source, this.explicit, BB.mapPos(this.limit), this.result, BB.mapPos(this.from), BB.mapPos(this.to, 1)) : new QB(this.source, 0)
      }
      touches(BB) {
        return BB.changes.touchesRange(this.from, this.to)
      }
    }
    const aB = VB.x.define({
        map: (BB, TB) => BB.map((BB => BB.map(TB)))
      }),
      ZB = VB.A.define({
        create: () => KB.start(),
        update: (BB, TB) => BB.update(TB),
        provide: BB => [yB.ob.from(BB, (BB => BB.tooltip)), yB.i.contentAttributes.from(BB, (BB => BB.attrs))]
      });

    function XB(BB, TB) {
      const dB = TB.completion.apply || TB.completion.label;
      let VB = BB.state.field(ZB).active.find((BB => BB.source == TB.source));
      return VB instanceof RB && ("string" == typeof dB ? BB.dispatch({
        ...DB(BB.state, dB, VB.from, VB.to),
        annotations: OB.of(TB.completion)
      }) : dB(BB, TB.completion, VB.from, VB.to), !0)
    }
    const WB = wB(ZB, XB);

    function hB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return dB => {
        let VB = dB.state.field(ZB, !1);
        if (!VB || !VB.open || VB.open.disabled || Date.now() - VB.open.timestamp < dB.state.facet(NB).interactionDelay) return !1;
        let pB, lB = 1;
        "page" == TB && (pB = (0, yB.D)(dB, VB.open.tooltip)) && (lB = Math.max(2, Math.floor(pB.dom.offsetHeight / pB.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: JB
        } = VB.open.options, YB = VB.open.selected > -1 ? VB.open.selected + lB * (BB ? 1 : -1) : BB ? 0 : JB - 1;
        return YB < 0 ? YB = "page" == TB ? 0 : JB - 1 : YB >= JB && (YB = "page" == TB ? JB - 1 : 0), dB.dispatch({
          effects: sB.of(YB)
        }), !0
      }
    }
    const CB = BB => !!BB.state.field(ZB, !1) && (BB.dispatch({
      effects: EB.of(!0)
    }), !0);
    class GB {
      constructor(BB, TB) {
        this.active = BB, this.context = TB, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const qB = yB.n.fromClass(class {
        constructor(BB) {
          this.view = BB, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let TB of BB.state.field(ZB).active) TB.isPending && this.startQuery(TB)
        }
        update(BB) {
          let TB = BB.state.field(ZB),
            dB = BB.state.facet(NB);
          if (!BB.selectionSet && !BB.docChanged && BB.startState.field(ZB) == TB) return;
          let VB = BB.transactions.some((BB => {
            let TB = PB(BB, dB);
            return 8 & TB || (BB.selection || BB.docChanged) && !(3 & TB)
          }));
          for (let JB = 0; JB < this.running.length; JB++) {
            let TB = this.running[JB];
            if (VB || TB.context.abortOnDocChange && BB.docChanged || TB.updates.length + BB.transactions.length > 50 && Date.now() - TB.time > 1e3) {
              for (let BB of TB.context.abortListeners) try {
                BB()
              } catch (lB) {
                (0, yB.W)(this.view.state, lB)
              }
              TB.context.abortListeners = null, this.running.splice(JB--, 1)
            } else TB.updates.push(...BB.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), BB.transactions.some((BB => BB.effects.some((BB => BB.is(EB))))) && (this.pendingStart = !0);
          let pB = this.pendingStart ? 50 : dB.activateOnTypingDelay;
          if (this.debounceUpdate = TB.active.some((BB => BB.isPending && !this.running.some((TB => TB.active.source == BB.source)))) ? setTimeout((() => this.startUpdate()), pB) : -1, 0 != this.composing)
            for (let yB of BB.transactions) yB.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && yB.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: BB
          } = this.view, TB = BB.field(ZB);
          for (let dB of TB.active) dB.isPending && !this.running.some((BB => BB.active.source == dB.source)) && this.startQuery(dB);
          this.running.length && TB.open && TB.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(NB).updateSyncTime))
        }
        startQuery(BB) {
          let {
            state: TB
          } = this.view, dB = kB(TB), VB = new lB(TB, dB, BB.explicit, this.view), pB = new GB(BB, VB);
          this.running.push(pB), Promise.resolve(BB.source(VB)).then((BB => {
            pB.context.aborted || (pB.done = BB || null, this.scheduleAccept())
          }), (BB => {
            this.view.dispatch({
              effects: vB.of(null)
            }), (0, yB.W)(this.view.state, BB)
          }))
        }
        scheduleAccept() {
          this.running.every((BB => void 0 !== BB.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(NB).updateSyncTime))
        }
        accept() {
          var BB;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let TB = [],
            dB = this.view.state.facet(NB),
            VB = this.view.state.field(ZB);
          for (let yB = 0; yB < this.running.length; yB++) {
            let pB = this.running[yB];
            if (void 0 === pB.done) continue;
            if (this.running.splice(yB--, 1), pB.done) {
              let VB = kB(pB.updates.length ? pB.updates[0].startState : this.view.state),
                yB = Math.min(VB, pB.done.from + (pB.active.explicit ? 0 : 1)),
                lB = new RB(pB.active.source, pB.active.explicit, yB, pB.done, pB.done.from, null !== (BB = pB.done.to) && void 0 !== BB ? BB : VB);
              for (let BB of pB.updates) lB = lB.update(BB, dB);
              if (lB.hasResult()) {
                TB.push(lB);
                continue
              }
            }
            let lB = VB.active.find((BB => BB.source == pB.active.source));
            if (lB && lB.isPending)
              if (null == pB.done) {
                let BB = new QB(pB.active.source, 0);
                for (let TB of pB.updates) BB = BB.update(TB, dB);
                BB.isPending || TB.push(BB)
              } else this.startQuery(lB)
          }(TB.length || VB.open && VB.open.disabled) && this.view.dispatch({
            effects: aB.of(TB)
          })
        }
      }, {
        eventHandlers: {
          blur(BB) {
            let TB = this.view.state.field(ZB, !1);
            if (TB && TB.tooltip && this.view.state.facet(NB).closeOnBlur) {
              let dB = TB.open && (0, yB.D)(this.view, TB.open.tooltip);
              dB && dB.dom.contains(BB.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: vB.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: EB.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      xB = "object" == typeof navigator && /Win/.test(navigator.platform),
      jB = VB.r.highest(yB.i.domEventHandlers({
        keydown(BB, TB) {
          let dB = TB.state.field(ZB, !1);
          if (!dB || !dB.open || dB.open.disabled || dB.open.selected < 0 || BB.key.length > 1 || BB.ctrlKey && (!xB || !BB.altKey) || BB.metaKey) return !1;
          let VB = dB.open.options[dB.open.selected],
            yB = dB.active.find((BB => BB.source == VB.source)),
            pB = VB.completion.commitCharacters || yB.result.commitCharacters;
          return pB && pB.indexOf(BB.key) > -1 && XB(TB, VB), !1
        }
      })),
      AB = yB.i.baseTheme({
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
    class bB {
      constructor(BB, TB, dB, VB) {
        this.field = BB, this.line = TB, this.from = dB, this.to = VB
      }
    }
    class nB {
      constructor(BB, TB, dB) {
        this.field = BB, this.from = TB, this.to = dB
      }
      map(BB) {
        let TB = BB.mapPos(this.from, -1, VB.o.TrackDel),
          dB = BB.mapPos(this.to, 1, VB.o.TrackDel);
        return null == TB || null == dB ? null : new nB(this.field, TB, dB)
      }
    }
    class eB {
      constructor(BB, TB) {
        this.lines = BB, this.fieldPositions = TB
      }
      instantiate(BB, TB) {
        let dB = [],
          VB = [TB],
          yB = BB.doc.lineAt(TB),
          lB = /^\s*/.exec(yB.text)[0];
        for (let YB of this.lines) {
          if (dB.length) {
            let dB = lB,
              yB = /^\t*/.exec(YB)[0].length;
            for (let TB = 0; TB < yB; TB++) dB += BB.facet(pB.V);
            VB.push(TB + dB.length - yB), YB = dB + YB.slice(yB)
          }
          dB.push(YB), TB += YB.length + 1
        }
        let JB = this.fieldPositions.map((BB => new nB(BB.field, VB[BB.line] + BB.from, VB[BB.line] + BB.to)));
        return {
          text: dB,
          ek: JB
        }
      }
      static parse(BB) {
        let TB, dB = [],
          VB = [],
          yB = [];
        for (let pB of BB.split(/\r\n?|\n/)) {
          for (; TB = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(pB);) {
            let BB = TB[1] ? +TB[1] : null,
              lB = TB[2] || TB[3] || "",
              JB = -1,
              YB = lB.replace(/\\[{}]/g, (BB => BB[1]));
            for (let TB = 0; TB < dB.length; TB++)(null != BB ? dB[TB].seq == BB : YB && dB[TB].name == YB) && (JB = TB);
            if (JB < 0) {
              let TB = 0;
              for (; TB < dB.length && (null == BB || null != dB[TB].seq && dB[TB].seq < BB);) TB++;
              dB.splice(TB, 0, {
                seq: BB,
                name: YB
              }), JB = TB;
              for (let BB of yB) BB.field >= JB && BB.field++
            }
            for (let dB of yB)
              if (dB.line == VB.length && dB.from > TB.index) {
                let BB = TB[2] ? 3 + (TB[1] || "").length : 2;
                dB.from -= BB, dB.to -= BB
              } yB.push(new bB(JB, VB.length, TB.index, TB.index + YB.length)), pB = pB.slice(0, TB.index) + lB + pB.slice(TB.index + TB[0].length)
          }
          pB = pB.replace(/\\([{}])/g, ((BB, TB, dB) => {
            for (let pB of yB) pB.line == VB.length && pB.from > dB && (pB.from--, pB.to--);
            return TB
          })), VB.push(pB)
        }
        return new eB(VB, yB)
      }
    }
    let BT = yB.c.widget({
        widget: new class extends yB.p {
          toDOM() {
            let BB = document.createElement("span");
            return BB.className = "cm-snippetFieldPosition", BB
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      TT = yB.c.mark({
        class: "cm-snippetField"
      });
    class dT {
      constructor(BB, TB) {
        this.ek = BB, this.active = TB, this.deco = yB.c.set(BB.map((BB => (BB.from == BB.to ? BT : TT).range(BB.from, BB.to))), !0)
      }
      map(BB) {
        let TB = [];
        for (let dB of this.ek) {
          let VB = dB.map(BB);
          if (!VB) return null;
          TB.push(VB)
        }
        return new dT(TB, this.active)
      }
      selectionInsideField(BB) {
        return BB.ek.every((BB => this.ek.some((TB => TB.field == this.active && TB.from <= BB.from && TB.to >= BB.to))))
      }
    }
    const VT = VB.x.define({
        map: (BB, TB) => BB && BB.map(TB)
      }),
      yT = VB.x.define(),
      pT = VB.A.define({
        create: () => null,
        update(BB, TB) {
          for (let dB of TB.effects) {
            if (dB.is(VT)) return dB.value;
            if (dB.is(yT) && BB) return new dT(BB.ek, dB.value)
          }
          return BB && TB.docChanged && (BB = BB.map(TB.changes)), BB && TB.selection && !BB.selectionInsideField(TB.selection) && (BB = null), BB
        },
        provide: BB => yB.i.QB.from(BB, (BB => BB ? BB.deco : yB.c.none))
      });

    function lT(BB, TB) {
      return VB.h.create(BB.filter((BB => BB.field == TB)).map((BB => VB.h.range(BB.from, BB.to))))
    }

    function JT(BB) {
      let TB = eB.parse(BB);
      return (BB, dB, yB, pB) => {
        let {
          text: lB,
          ek: JB
        } = TB.instantiate(BB.state, yB), {
          main: YB
        } = BB.state.selection, gB = {
          changes: {
            from: yB,
            to: pB == YB.from ? YB.to : pB,
            insert: VB.D.of(lB)
          },
          scrollIntoView: !0,
          annotations: dB ? [OB.of(dB), VB.G.userEvent.of("input.complete")] : void 0
        };
        if (JB.length && (gB.selection = lT(JB, 0)), JB.some((BB => BB.field > 0))) {
          let TB = new dT(JB, 0),
            dB = gB.effects = [VT.of(TB)];
          void 0 === BB.state.field(pT, !1) && dB.push(VB.x.appendConfig.of([pT, kT, OT, AB]))
        }
        BB.dispatch(BB.state.update(gB))
      }
    }

    function YT(BB) {
      return TB => {
        let {
          state: dB,
          dispatch: VB
        } = TB, yB = dB.field(pT, !1);
        if (!yB || BB < 0 && 0 == yB.active) return !1;
        let pB = yB.active + BB,
          lB = BB > 0 && !yB.ek.some((TB => TB.field == pB + BB));
        return VB(dB.update({
          selection: lT(yB.ek, pB),
          effects: VT.of(lB ? null : new dT(yB.ek, pB)),
          scrollIntoView: !0
        })), !0
      }
    }
    const gT = [{
        key: "Tab",
        run: YT(1),
        shift: YT(-1)
      }, {
        key: "Escape",
        run: BB => {
          let {
            state: TB,
            dispatch: dB
          } = BB;
          return !!TB.field(pT, !1) && (dB(TB.update({
            effects: VT.of(null)
          })), !0)
        }
      }],
      oT = VB.l.define({
        combine: BB => BB.length ? BB[0] : gT
      }),
      kT = VB.r.highest(yB.S.compute([oT], (BB => BB.facet(oT))));

    function LT(BB, TB) {
      return {
        ...TB,
        apply: JT(BB)
      }
    }
    const OT = yB.i.domEventHandlers({
      mousedown(BB, TB) {
        let dB, VB = TB.state.field(pT, !1);
        if (!VB || null == (dB = TB.posAtCoords({
            x: BB.clientX,
            y: BB.clientY
          }))) return !1;
        let yB = VB.ek.find((BB => BB.from <= dB && BB.to >= dB));
        return !(!yB || yB.field == VB.active) && (TB.dispatch({
          selection: lT(VB.ek, yB.field),
          effects: VT.of(VB.ek.some((BB => BB.field > yB.field)) ? new dT(VB.ek, yB.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const DT = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      uT = VB.x.define({
        map(BB, TB) {
          let dB = TB.mapPos(BB, -1, VB.o.TrackAfter);
          return null == dB ? void 0 : dB
        }
      }),
      HT = new class extends VB.w {};
    HT.startSide = 1, HT.endSide = -1;
    const ET = VB.A.define({
      create: () => VB.u.empty,
      update(BB, TB) {
        if (BB = BB.map(TB.changes), TB.selection) {
          let dB = TB.state.doc.lineAt(TB.selection.main.head);
          BB = BB.update({
            filter: BB => BB >= dB.from && BB <= dB.to
          })
        }
        for (let dB of TB.effects) dB.is(uT) && (BB = BB.update({
          add: [HT.range(dB.value, dB.value + 1)]
        }));
        return BB
      }
    });

    function vT() {
      return [fT, ET]
    }
    const mT = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function iT(BB) {
      for (let TB = 0; TB < 16; TB += 2)
        if (mT.charCodeAt(TB) == BB) return mT.charAt(TB + 1);
      return (0, VB.Y)(BB < 128 ? BB : BB + 1)
    }

    function NT(BB, TB) {
      return BB.languageDataAt("closeBrackets", TB)[0] || DT
    }
    const tT = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      fT = yB.i.inputHandler.of(((BB, TB, dB, yB) => {
        if ((tT ? BB.composing : BB.compositionStarted) || BB.state.readOnly) return !1;
        let pB = BB.state.selection.main;
        if (yB.length > 2 || 2 == yB.length && 1 == (0, VB.M)((0, VB.K)(yB, 0)) || TB != pB.from || dB != pB.to) return !1;
        let lB = function(BB, TB) {
          let dB = NT(BB, BB.selection.main.head),
            yB = dB.brackets || DT.brackets;
          for (let pB of yB) {
            let lB = iT((0, VB.K)(pB, 0));
            if (TB == pB) return lB == pB ? FT(BB, pB, yB.indexOf(pB + pB + pB) > -1, dB) : wT(BB, pB, lB, dB.before || DT.before);
            if (TB == lB && MT(BB, BB.selection.main.from)) return UT(BB, pB, lB)
          }
          return null
        }(BB.state, yB);
        return !!lB && (BB.dispatch(lB), !0)
      })),
      sT = [{
        key: "Backspace",
        run: BB => {
          let {
            state: TB,
            dispatch: dB
          } = BB;
          if (TB.readOnly) return !1;
          let yB = NT(TB, TB.selection.main.head).brackets || DT.brackets,
            pB = null,
            lB = TB.changeByRange((BB => {
              if (BB.empty) {
                let dB = function(BB, TB) {
                  let dB = BB.sliceString(TB - 2, TB);
                  return (0, VB.M)((0, VB.K)(dB, 0)) == dB.length ? dB : dB.slice(1)
                }(TB.doc, BB.head);
                for (let pB of yB)
                  if (pB == dB && zT(TB.doc, BB.head) == iT((0, VB.K)(pB, 0))) return {
                    changes: {
                      from: BB.head - pB.length,
                      to: BB.head + pB.length
                    },
                    range: VB.h.cursor(BB.head - pB.length)
                  }
              }
              return {
                range: pB = BB
              }
            }));
          return pB || dB(TB.update(lB, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !pB
        }
      }];

    function MT(BB, TB) {
      let dB = !1;
      return BB.field(ET).between(0, BB.doc.length, (BB => {
        BB == TB && (dB = !0)
      })), dB
    }

    function zT(BB, TB) {
      let dB = BB.sliceString(TB, TB + 2);
      return dB.slice(0, (0, VB.M)((0, VB.K)(dB, 0)))
    }

    function wT(BB, TB, dB, yB) {
      let pB = null,
        lB = BB.changeByRange((lB => {
          if (!lB.empty) return {
            changes: [{
              insert: TB,
              from: lB.from
            }, {
              insert: dB,
              from: lB.to
            }],
            effects: uT.of(lB.to + TB.length),
            range: VB.h.range(lB.anchor + TB.length, lB.head + TB.length)
          };
          let JB = zT(BB.doc, lB.head);
          return !JB || /\s/.test(JB) || yB.indexOf(JB) > -1 ? {
            changes: {
              insert: TB + dB,
              from: lB.head
            },
            effects: uT.of(lB.head + TB.length),
            range: VB.h.cursor(lB.head + TB.length)
          } : {
            range: pB = lB
          }
        }));
      return pB ? null : BB.update(lB, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function UT(BB, TB, dB) {
      let yB = null,
        pB = BB.changeByRange((TB => TB.empty && zT(BB.doc, TB.head) == dB ? {
          changes: {
            from: TB.head,
            to: TB.head + dB.length,
            insert: dB
          },
          range: VB.h.cursor(TB.head + dB.length)
        } : yB = {
          range: TB
        }));
      return yB ? null : BB.update(pB, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function FT(BB, TB, dB, yB) {
      let lB = yB.stringPrefixes || DT.stringPrefixes,
        JB = null,
        YB = BB.changeByRange((yB => {
          if (!yB.empty) return {
            changes: [{
              insert: TB,
              from: yB.from
            }, {
              insert: TB,
              from: yB.to
            }],
            effects: uT.of(yB.to + TB.length),
            range: VB.h.range(yB.anchor + TB.length, yB.head + TB.length)
          };
          let YB, gB = yB.head,
            oB = zT(BB.doc, gB);
          if (oB == TB) {
            if (KT(BB, gB)) return {
              changes: {
                insert: TB + TB,
                from: gB
              },
              effects: uT.of(gB + TB.length),
              range: VB.h.cursor(gB + TB.length)
            };
            if (MT(BB, gB)) {
              let yB = dB && BB.sliceDoc(gB, gB + 3 * TB.length) == TB + TB + TB ? TB + TB + TB : TB;
              return {
                changes: {
                  from: gB,
                  to: gB + yB.length,
                  insert: yB
                },
                range: VB.h.cursor(gB + yB.length)
              }
            }
          } else {
            if (dB && BB.sliceDoc(gB - 2 * TB.length, gB) == TB + TB && (YB = rT(BB, gB - 2 * TB.length, lB)) > -1 && KT(BB, YB)) return {
              changes: {
                insert: TB + TB + TB + TB,
                from: gB
              },
              effects: uT.of(gB + TB.length),
              range: VB.h.cursor(gB + TB.length)
            };
            if (BB.charCategorizer(gB)(oB) != VB.e.Word && rT(BB, gB, lB) > -1 && ! function(BB, TB, dB, VB) {
                let yB = (0, pB.hb)(BB).resolveInner(TB, -1),
                  lB = VB.reduce(((BB, TB) => Math.max(BB, TB.length)), 0);
                for (let pB = 0; pB < 5; pB++) {
                  let pB = BB.sliceDoc(yB.from, Math.min(yB.to, yB.from + dB.length + lB)),
                    JB = pB.indexOf(dB);
                  if (!JB || JB > -1 && VB.indexOf(pB.slice(0, JB)) > -1) {
                    let TB = yB.firstChild;
                    for (; TB && TB.from == yB.from && TB.to - TB.from > dB.length + JB;) {
                      if (BB.sliceDoc(TB.to - dB.length, TB.to) == dB) return !1;
                      TB = TB.firstChild
                    }
                    return !0
                  }
                  let YB = yB.to == TB && yB.parent;
                  if (!YB) break;
                  yB = YB
                }
                return !1
              }(BB, gB, TB, lB)) return {
              changes: {
                insert: TB + TB,
                from: gB
              },
              effects: uT.of(gB + TB.length),
              range: VB.h.cursor(gB + TB.length)
            }
          }
          return {
            range: JB = yB
          }
        }));
      return JB ? null : BB.update(YB, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function KT(BB, TB) {
      let dB = (0, pB.hb)(BB).resolveInner(TB + 1);
      return dB.parent && dB.from == TB
    }

    function rT(BB, TB, dB) {
      let yB = BB.charCategorizer(TB);
      if (yB(BB.sliceDoc(TB - 1, TB)) != VB.e.Word) return TB;
      for (let pB of dB) {
        let dB = TB - pB.length;
        if (BB.sliceDoc(dB, TB) == pB && yB(BB.sliceDoc(dB - 1, dB)) != VB.e.Word) return dB
      }
      return -1
    }

    function IT() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [jB, ZB, NB.of(BB), qB, ST, AB]
    }
    const cT = [{
        key: "Ctrl-Space",
        run: CB
      }, {
        mac: "Alt-`",
        run: CB
      }, {
        mac: "Alt-i",
        run: CB
      }, {
        key: "Escape",
        run: BB => {
          let TB = BB.state.field(ZB, !1);
          return !(!TB || !TB.active.some((BB => 0 != BB.state))) && (BB.dispatch({
            effects: vB.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: hB(!0)
      }, {
        key: "ArrowUp",
        run: hB(!1)
      }, {
        key: "PageDown",
        run: hB(!0, "page")
      }, {
        key: "PageUp",
        run: hB(!1, "page")
      }, {
        key: "Enter",
        run: BB => {
          let TB = BB.state.field(ZB, !1);
          return !(BB.state.readOnly || !TB || !TB.open || TB.open.selected < 0 || TB.open.disabled || Date.now() - TB.open.timestamp < BB.state.facet(NB).interactionDelay) && XB(BB, TB.open.options[TB.open.selected])
        }
      }],
      ST = VB.r.highest(yB.S.computeN([NB], (BB => BB.facet(NB).defaultKeymap ? [cT] : [])))
  },
  40187: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => gB,
      i: () => LB,
      m: () => oB,
      o: () => kB
    });
    var VB = dB(40036);
    class yB {
      constructor(BB, TB, dB, VB) {
        this.origin = BB, this.changes = TB, this.effects = dB, this.clientID = VB
      }
    }
    class pB {
      constructor(BB, TB) {
        this.version = BB, this.unconfirmed = TB
      }
    }
    const lB = VB.l.define({
        combine(BB) {
          let TB = (0, VB.P)(BB, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: BB => BB
          });
          return null == TB.clientID && (TB.clientID = BB.length && BB[0].generatedID || ""), TB
        }
      }),
      JB = VB.c.define(),
      YB = VB.A.define({
        create: BB => new pB(BB.facet(lB).startVersion, []),
        update(BB, TB) {
          let dB = TB.annotation(JB);
          if (dB) return dB;
          let {
            sharedEffects: VB,
            clientID: YB
          } = TB.startState.facet(lB), gB = VB(TB);
          return gB.length || !TB.changes.empty ? new pB(BB.version, BB.unconfirmed.concat(new yB(TB, TB.changes, gB, YB))) : BB
        }
      });

    function gB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [YB, lB.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, BB))]
    }

    function oB(BB, TB) {
      let {
        version: dB,
        unconfirmed: gB
      } = BB.field(YB), {
        clientID: oB
      } = BB.facet(lB);
      dB += TB.length;
      let kB = [],
        LB = null,
        OB = 0;
      for (let yB of TB) {
        let BB = OB < gB.length ? gB[OB] : null;
        BB && BB.clientID == yB.clientID ? (LB && (LB = LB.map(BB.changes, !0)), kB = VB.x.mapEffects(kB, yB.changes), OB++) : (kB = VB.x.mapEffects(kB, yB.changes), yB.effects && (kB = kB.concat(yB.effects)), LB = LB ? LB.compose(yB.changes) : yB.changes)
      }
      if (OB && (gB = gB.slice(OB)), gB.length && (LB && (gB = gB.map((BB => {
          let TB = BB.changes.map(LB);
          return LB = LB.map(BB.changes, !0), new yB(BB.origin, TB, VB.x.mapEffects(BB.effects, LB), oB)
        }))), kB.length)) {
        let BB = gB.reduce(((BB, TB) => BB.compose(TB.changes)), VB.ChangeSet.empty(gB[0].changes.length));
        kB = VB.x.mapEffects(kB, BB)
      }
      return LB ? BB.update({
        changes: LB,
        effects: kB,
        annotations: [VB.G.addToHistory.of(!1), VB.G.remote.of(!0), JB.of(new pB(dB, gB))],
        filter: !1
      }) : BB.update({
        annotations: [JB.of(new pB(dB, gB))]
      })
    }

    function kB(BB) {
      return BB.field(YB).unconfirmed
    }

    function LB(BB) {
      return BB.field(YB).version
    }
  },
  40073: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => uT
    });
    var VB = dB(40064);
    class yB {
      constructor(BB, TB, dB, VB, yB, pB, lB, JB, YB) {
        let gB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          oB = arguments.length > 10 ? arguments[10] : void 0;
        this.p = BB, this.stack = TB, this.state = dB, this.reducePos = VB, this.pos = yB, this.score = pB, this.buffer = lB, this.bufferBase = JB, this.curContext = YB, this.lookAhead = gB, this.parent = oB
      }
      toString() {
        return `[${this.stack.filter(((BB,TB)=>TB%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          VB = BB.parser.context;
        return new yB(BB, [], TB, dB, dB, 0, [], 0, VB ? new pB(VB, VB.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(BB, TB) {
        this.stack.push(this.state, TB, this.bufferBase + this.buffer.length), this.state = BB
      }
      reduce(BB) {
        var TB;
        let dB = BB >> 19,
          VB = 65535 & BB,
          {
            parser: yB
          } = this.p,
          pB = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          lB = yB.dynamicPrecedence(VB);
        if (lB && (this.score += lB), 0 == dB) return this.pushState(yB.getGoto(this.state, VB, !0), this.reducePos), VB < yB.minRepeatTerm && this.storeNode(VB, this.reducePos, this.reducePos, pB ? 8 : 4, !0), void this.reduceContext(VB, this.reducePos);
        let JB = this.stack.length - 3 * (dB - 1) - (262144 & BB ? 6 : 0),
          YB = JB ? this.stack[JB - 2] : this.p.ek[0].from,
          gB = this.reducePos - YB;
        gB >= 2e3 && !(null === (TB = this.p.parser.nodeSet.types[VB]) || void 0 === TB ? void 0 : TB.isAnonymous) && (YB == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = gB) : this.p.lastBigReductionSize < gB && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = YB, this.p.lastBigReductionSize = gB));
        let oB = JB ? this.stack[JB - 1] : 0,
          kB = this.bufferBase + this.buffer.length - oB;
        if (VB < yB.minRepeatTerm || 131072 & BB) {
          let BB = yB.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(VB, YB, BB, kB + 4, !0)
        }
        if (262144 & BB) this.state = this.stack[JB];
        else {
          let BB = this.stack[JB - 3];
          this.state = yB.getGoto(BB, VB, !0)
        }
        for (; this.stack.length > JB;) this.stack.pop();
        this.reduceContext(VB, YB)
      }
      storeNode(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          yB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == BB && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let BB = this,
            VB = this.buffer.length;
          if (0 == VB && BB.parent && (VB = BB.bufferBase - BB.parent.bufferBase, BB = BB.parent), VB > 0 && 0 == BB.buffer[VB - 4] && BB.buffer[VB - 1] > -1) {
            if (TB == dB) return;
            if (BB.buffer[VB - 2] >= TB) return void(BB.buffer[VB - 2] = dB)
          }
        }
        if (yB && this.pos != dB) {
          let yB = this.buffer.length;
          if (yB > 0 && (0 != this.buffer[yB - 4] || this.buffer[yB - 1] < 0)) {
            let BB = !1;
            for (let TB = yB; TB > 0 && this.buffer[TB - 2] > dB; TB -= 4)
              if (this.buffer[TB - 1] >= 0) {
                BB = !0;
                break
              } if (BB)
              for (; yB > 0 && this.buffer[yB - 2] > dB;) this.buffer[yB] = this.buffer[yB - 4], this.buffer[yB + 1] = this.buffer[yB - 3], this.buffer[yB + 2] = this.buffer[yB - 2], this.buffer[yB + 3] = this.buffer[yB - 1], yB -= 4, VB > 4 && (VB -= 4)
          }
          this.buffer[yB] = BB, this.buffer[yB + 1] = TB, this.buffer[yB + 2] = dB, this.buffer[yB + 3] = VB
        } else this.buffer.push(BB, TB, dB, VB)
      }
      shift(BB, TB, dB, VB) {
        if (131072 & BB) this.pushState(65535 & BB, this.pos);
        else if (0 == (262144 & BB)) {
          let yB = BB,
            {
              parser: pB
            } = this.p;
          this.pos = VB;
          let lB = pB.stateFlag(yB, 1);
          !lB && (VB > dB || TB <= pB.maxNode) && (this.reducePos = VB), this.pushState(yB, lB ? dB : Math.min(dB, this.reducePos)), this.shiftContext(TB, dB), TB <= pB.maxNode && this.buffer.push(TB, dB, VB, 4)
        } else this.pos = VB, this.shiftContext(TB, dB), TB <= this.p.parser.maxNode && this.buffer.push(TB, dB, VB, 4)
      }
      apply(BB, TB, dB, VB) {
        65536 & BB ? this.reduce(BB) : this.shift(BB, TB, dB, VB)
      }
      useNode(BB, TB) {
        let dB = this.p.reused.length - 1;
        (dB < 0 || this.p.reused[dB] != BB) && (this.p.reused.push(BB), dB++);
        let VB = this.pos;
        this.reducePos = this.pos = VB + BB.length, this.pushState(TB, VB), this.buffer.push(dB, VB, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, BB, this, this.p.stream.reset(this.pos - BB.length)))
      }
      split() {
        let BB = this,
          TB = BB.buffer.length;
        for (; TB > 0 && BB.buffer[TB - 2] > BB.reducePos;) TB -= 4;
        let dB = BB.buffer.slice(TB),
          VB = BB.bufferBase + TB;
        for (; BB && VB == BB.bufferBase;) BB = BB.parent;
        return new yB(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, dB, VB, this.curContext, this.lookAhead, BB)
      }
      recoverByDelete(BB, TB) {
        let dB = BB <= this.p.parser.maxNode;
        dB && this.storeNode(BB, this.pos, TB, 4), this.storeNode(0, this.pos, TB, dB ? 8 : 4), this.pos = this.reducePos = TB, this.score -= 190
      }
      canShift(BB) {
        for (let TB = new lB(this);;) {
          let dB = this.p.parser.stateSlot(TB.state, 4) || this.p.parser.hasAction(TB.state, BB);
          if (0 == dB) return !1;
          if (0 == (65536 & dB)) return !0;
          TB.reduce(dB)
        }
      }
      recoverByInsert(BB) {
        if (this.stack.length >= 300) return [];
        let TB = this.p.parser.nextStates(this.state);
        if (TB.length > 8 || this.stack.length >= 120) {
          let dB = [];
          for (let VB, yB = 0; yB < TB.length; yB += 2)(VB = TB[yB + 1]) != this.state && this.p.parser.hasAction(VB, BB) && dB.push(TB[yB], VB);
          if (this.stack.length < 120)
            for (let BB = 0; dB.length < 8 && BB < TB.length; BB += 2) {
              let VB = TB[BB + 1];
              dB.some(((BB, TB) => 1 & TB && BB == VB)) || dB.push(TB[BB], VB)
            }
          TB = dB
        }
        let dB = [];
        for (let VB = 0; VB < TB.length && dB.length < 4; VB += 2) {
          let BB = TB[VB + 1];
          if (BB == this.state) continue;
          let yB = this.split();
          yB.pushState(BB, this.pos), yB.storeNode(0, yB.pos, yB.pos, 4, !0), yB.shiftContext(TB[VB], this.pos), yB.reducePos = this.pos, yB.score -= 200, dB.push(yB)
        }
        return dB
      }
      forceReduce() {
        let {
          parser: BB
        } = this.p, TB = BB.stateSlot(this.state, 5);
        if (0 == (65536 & TB)) return !1;
        if (!BB.validAction(this.state, TB)) {
          let dB = TB >> 19,
            VB = 65535 & TB,
            yB = this.stack.length - 3 * dB;
          if (yB < 0 || BB.getGoto(this.stack[yB], VB, !1) < 0) {
            let BB = this.findForcedReduction();
            if (null == BB) return !1;
            TB = BB
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(TB), !0
      }
      findForcedReduction() {
        let {
          parser: BB
        } = this.p, TB = [], dB = (VB, yB) => {
          if (!TB.includes(VB)) return TB.push(VB), BB.allActions(VB, (TB => {
            if (393216 & TB);
            else if (65536 & TB) {
              let dB = (TB >> 19) - yB;
              if (dB > 1) {
                let VB = 65535 & TB,
                  yB = this.stack.length - 3 * dB;
                if (yB >= 0 && BB.getGoto(this.stack[yB], VB, !1) >= 0) return dB << 19 | 65536 | VB
              }
            } else {
              let BB = dB(TB, yB + 1);
              if (null != BB) return BB
            }
          }))
        };
        return dB(this.state, 0)
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
          parser: BB
        } = this.p;
        return 65535 == BB.data[BB.stateSlot(this.state, 1)] && !BB.stateSlot(this.state, 4)
      }
      restart() {
        this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0
      }
      sameState(BB) {
        if (this.state != BB.state || this.stack.length != BB.stack.length) return !1;
        for (let TB = 0; TB < this.stack.length; TB += 3)
          if (this.stack[TB] != BB.stack[TB]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(BB) {
        return this.p.parser.dialect.flags[BB]
      }
      shiftContext(BB, TB) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, BB, this, this.p.stream.reset(TB)))
      }
      reduceContext(BB, TB) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, BB, this, this.p.stream.reset(TB)))
      }
      emitContext() {
        let BB = this.buffer.length - 1;
        (BB < 0 || -3 != this.buffer[BB]) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3)
      }
      emitLookAhead() {
        let BB = this.buffer.length - 1;
        (BB < 0 || -4 != this.buffer[BB]) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4)
      }
      updateContext(BB) {
        if (BB != this.curContext.context) {
          let TB = new pB(this.curContext.tracker, BB);
          TB.hash != this.curContext.hash && this.emitContext(), this.curContext = TB
        }
      }
      setLookAhead(BB) {
        return !(BB <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = BB, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class pB {
      constructor(BB, TB) {
        this.tracker = BB, this.context = TB, this.hash = BB.strict ? BB.hash(TB) : 0
      }
    }
    class lB {
      constructor(BB) {
        this.start = BB, this.state = BB.state, this.stack = BB.stack, this.base = this.stack.length
      }
      reduce(BB) {
        let TB = 65535 & BB,
          dB = BB >> 19;
        0 == dB ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (dB - 1);
        let VB = this.start.p.parser.getGoto(this.stack[this.base - 3], TB, !0);
        this.state = VB
      }
    }
    class JB {
      constructor(BB, TB, dB) {
        this.stack = BB, this.pos = TB, this.index = dB, this.buffer = BB.buffer, 0 == this.index && this.maybeNext()
      }
      static create(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB.bufferBase + BB.buffer.length;
        return new JB(BB, TB, TB - BB.bufferBase)
      }
      maybeNext() {
        let BB = this.stack.parent;
        null != BB && (this.index = this.stack.bufferBase - BB.bufferBase, this.stack = BB, this.buffer = BB.buffer)
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
        return new JB(this.stack, this.pos, this.index)
      }
    }

    function YB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof BB) return BB;
      let dB = null;
      for (let VB = 0, yB = 0; VB < BB.length;) {
        let pB = 0;
        for (;;) {
          let TB = BB.charCodeAt(VB++),
            dB = !1;
          if (126 == TB) {
            pB = 65535;
            break
          }
          TB >= 92 && TB--, TB >= 34 && TB--;
          let yB = TB - 32;
          if (yB >= 46 && (yB -= 46, dB = !0), pB += yB, dB) break;
          pB *= 46
        }
        dB ? dB[yB++] = pB : dB = new TB(pB)
      }
      return dB
    }
    class gB {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const oB = new gB;
    class kB {
      constructor(BB, TB) {
        this.input = BB, this.ek = TB, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = oB, this.rangeIndex = 0, this.pos = this.chunkPos = TB[0].from, this.range = TB[0], this.end = TB[TB.length - 1].to, this.readNext()
      }
      resolveOffset(BB, TB) {
        let dB = this.range,
          VB = this.rangeIndex,
          yB = this.pos + BB;
        for (; yB < dB.from;) {
          if (!VB) return null;
          let BB = this.ek[--VB];
          yB -= dB.from - BB.to, dB = BB
        }
        for (; TB < 0 ? yB > dB.to : yB >= dB.to;) {
          if (VB == this.ek.length - 1) return null;
          let BB = this.ek[++VB];
          yB += BB.from - dB.to, dB = BB
        }
        return yB
      }
      clipPos(BB) {
        if (BB >= this.range.from && BB < this.range.to) return BB;
        for (let TB of this.ek)
          if (TB.to > BB) return Math.max(BB, TB.from);
        return this.end
      }
      peek(BB) {
        let TB, dB, VB = this.chunkOff + BB;
        if (VB >= 0 && VB < this.chunk.length) TB = this.pos + BB, dB = this.chunk.charCodeAt(VB);
        else {
          let VB = this.resolveOffset(BB, 1);
          if (null == VB) return -1;
          if (TB = VB, TB >= this.chunk2Pos && TB < this.chunk2Pos + this.chunk2.length) dB = this.chunk2.charCodeAt(TB - this.chunk2Pos);
          else {
            let BB = this.rangeIndex,
              VB = this.range;
            for (; VB.to <= TB;) VB = this.ek[++BB];
            this.chunk2 = this.input.chunk(this.chunk2Pos = TB), TB + this.chunk2.length > VB.to && (this.chunk2 = this.chunk2.slice(0, VB.to - TB)), dB = this.chunk2.charCodeAt(0)
          }
        }
        return TB >= this.token.lookAhead && (this.token.lookAhead = TB + 1), dB
      }
      acceptToken(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          dB = TB ? this.resolveOffset(TB, -1) : this.pos;
        if (null == dB || dB < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = BB, this.token.end = dB
      }
      acceptTokenTo(BB, TB) {
        this.token.value = BB, this.token.end = TB
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: BB,
            chunkPos: TB
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = BB, this.chunk2Pos = TB, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let BB = this.input.chunk(this.pos),
            TB = this.pos + BB.length;
          this.chunk = TB > this.range.to ? BB.slice(0, this.range.to - this.pos) : BB, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += BB; this.pos + BB >= this.range.to;) {
          if (this.rangeIndex == this.ek.length - 1) return this.setDone();
          BB -= this.range.to - this.pos, this.range = this.ek[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += BB, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.ek[this.rangeIndex = this.ek.length - 1], this.chunk = "", this.next = -1
      }
      reset(BB, TB) {
        if (TB ? (this.token = TB, TB.start = BB, TB.lookAhead = BB + 1, TB.value = TB.extended = -1) : this.token = oB, this.pos != BB) {
          if (this.pos = BB, BB == this.end) return this.setDone(), this;
          for (; BB < this.range.from;) this.range = this.ek[--this.rangeIndex];
          for (; BB >= this.range.to;) this.range = this.ek[++this.rangeIndex];
          BB >= this.chunkPos && BB < this.chunkPos + this.chunk.length ? this.chunkOff = BB - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(BB, TB) {
        if (BB >= this.chunkPos && TB <= this.chunkPos + this.chunk.length) return this.chunk.slice(BB - this.chunkPos, TB - this.chunkPos);
        if (BB >= this.chunk2Pos && TB <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(BB - this.chunk2Pos, TB - this.chunk2Pos);
        if (BB >= this.range.from && TB <= this.range.to) return this.input.read(BB, TB);
        let dB = "";
        for (let VB of this.ek) {
          if (VB.from >= TB) break;
          VB.to > BB && (dB += this.input.read(Math.max(VB.from, BB), Math.min(VB.to, TB)))
        }
        return dB
      }
    }
    class LB {
      constructor(BB, TB) {
        this.data = BB, this.id = TB
      }
      token(BB, TB) {
        let {
          parser: dB
        } = TB.p;
        uB(this.data, BB, TB, this.id, dB.data, dB.tokenPrecTable)
      }
    }
    LB.prototype.contextual = LB.prototype.fallback = LB.prototype.extend = !1;
    class OB {
      constructor(BB, TB, dB) {
        this.precTable = TB, this.elseToken = dB, this.data = "string" == typeof BB ? YB(BB) : BB
      }
      token(BB, TB) {
        let dB = BB.pos,
          VB = 0;
        for (;;) {
          let dB = BB.next < 0,
            yB = BB.resolveOffset(1, 1);
          if (uB(this.data, BB, TB, 0, this.data, this.precTable), BB.token.value > -1) break;
          if (null == this.elseToken) return;
          if (dB || VB++, null == yB) break;
          BB.reset(yB, BB.token)
        }
        VB && (BB.reset(dB, BB.token), BB.acceptToken(this.elseToken, VB))
      }
    }
    OB.prototype.contextual = LB.prototype.fallback = LB.prototype.extend = !1;
    class DB {
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = BB, this.contextual = !!TB.contextual, this.fallback = !!TB.fallback, this.extend = !!TB.extend
      }
    }

    function uB(BB, TB, dB, VB, yB, pB) {
      let lB = 0,
        JB = 1 << VB,
        {
          dialect: YB
        } = dB.p.parser;
      BB: for (; 0 != (JB & BB[lB]);) {
        let dB = BB[lB + 1];
        for (let kB = lB + 3; kB < dB; kB += 2)
          if ((BB[kB + 1] & JB) > 0) {
            let dB = BB[kB];
            if (YB.allows(dB) && (-1 == TB.token.value || TB.token.value == dB || EB(dB, TB.token.value, yB, pB))) {
              TB.acceptToken(dB);
              break
            }
          } let VB = TB.next,
          gB = 0,
          oB = BB[lB + 2];
        if (!(TB.next < 0 && oB > gB && 65535 == BB[dB + 3 * oB - 3])) {
          for (; gB < oB;) {
            let yB = gB + oB >> 1,
              pB = dB + yB + (yB << 1),
              JB = BB[pB],
              YB = BB[pB + 1] || 65536;
            if (VB < JB) oB = yB;
            else {
              if (!(VB >= YB)) {
                lB = BB[pB + 2], TB.advance();
                continue BB
              }
              gB = yB + 1
            }
          }
          break
        }
        lB = BB[dB + 3 * oB - 1]
      }
    }

    function HB(BB, TB, dB) {
      for (let VB, yB = TB; 65535 != (VB = BB[yB]); yB++)
        if (VB == dB) return yB - TB;
      return -1
    }

    function EB(BB, TB, dB, VB) {
      let yB = HB(dB, VB, TB);
      return yB < 0 || HB(dB, VB, BB) < yB
    }
    const vB = "undefined" != typeof process && {
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
    let mB = null;

    function iB(BB, TB, dB) {
      let yB = BB.cursor(VB.f.IncludeAnonymous);
      for (yB.moveTo(TB);;)
        if (!(dB < 0 ? yB.childBefore(TB) : yB.childAfter(TB)))
          for (;;) {
            if ((dB < 0 ? yB.to < TB : yB.from > TB) && !yB.type.isError) return dB < 0 ? Math.max(0, Math.min(yB.to - 1, TB - 25)) : Math.min(BB.length, Math.max(yB.from + 1, TB + 25));
            if (dB < 0 ? yB.prevSibling() : yB.nextSibling()) break;
            if (!yB.parent()) return dB < 0 ? 0 : BB.length
          }
    }
    class NB {
      constructor(BB, TB) {
        this.fragments = BB, this.nodeSet = TB, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let BB = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (BB) {
          for (this.safeFrom = BB.openStart ? iB(BB.tree, BB.from + BB.offset, 1) - BB.offset : BB.from, this.safeTo = BB.openEnd ? iB(BB.tree, BB.to + BB.offset, -1) - BB.offset : BB.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(BB.tree), this.start.push(-BB.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(BB) {
        if (BB < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= BB;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let TB = this.trees.length - 1;
          if (TB < 0) return this.nextFragment(), null;
          let dB = this.trees[TB],
            yB = this.index[TB];
          if (yB == dB.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let pB = dB.children[yB],
            lB = this.start[TB] + dB.positions[yB];
          if (lB > BB) return this.nextStart = lB, null;
          if (pB instanceof VB.s) {
            if (lB == BB) {
              if (lB < this.safeFrom) return null;
              let BB = lB + pB.length;
              if (BB <= this.safeTo) {
                let TB = pB.prop(VB.i.lookAhead);
                if (!TB || BB + TB < this.fragment.to) return pB
              }
            }
            this.index[TB]++, lB + pB.length >= Math.max(this.safeFrom, BB) && (this.trees.push(pB), this.start.push(lB), this.index.push(0))
          } else this.index[TB]++, this.nextStart = lB + pB.length
        }
      }
    }
    class tB {
      constructor(BB, TB) {
        this.stream = TB, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = BB.tokenizers.map((BB => new gB))
      }
      getActions(BB) {
        let TB = 0,
          dB = null,
          {
            parser: VB
          } = BB.p,
          {
            tokenizers: yB
          } = VB,
          pB = VB.stateSlot(BB.state, 3),
          lB = BB.curContext ? BB.curContext.hash : 0,
          JB = 0;
        for (let YB = 0; YB < yB.length; YB++) {
          if (0 == (1 << YB & pB)) continue;
          let VB = yB[YB],
            gB = this.tokens[YB];
          if ((!dB || VB.fallback) && ((VB.contextual || gB.start != BB.pos || gB.mask != pB || gB.context != lB) && (this.updateCachedToken(gB, VB, BB), gB.mask = pB, gB.context = lB), gB.lookAhead > gB.end + 25 && (JB = Math.max(gB.lookAhead, JB)), 0 != gB.value)) {
            let yB = TB;
            if (gB.extended > -1 && (TB = this.addActions(BB, gB.extended, gB.end, TB)), TB = this.addActions(BB, gB.value, gB.end, TB), !VB.extend && (dB = gB, TB > yB)) break
          }
        }
        for (; this.actions.length > TB;) this.actions.pop();
        return JB && BB.setLookAhead(JB), dB || BB.pos != this.stream.end || (dB = new gB, dB.value = BB.p.parser.eofTerm, dB.start = dB.end = BB.pos, TB = this.addActions(BB, dB.value, dB.end, TB)), this.mainToken = dB, this.actions
      }
      getMainToken(BB) {
        if (this.mainToken) return this.mainToken;
        let TB = new gB,
          {
            pos: dB,
            p: VB
          } = BB;
        return TB.start = dB, TB.end = Math.min(dB + 1, VB.stream.end), TB.value = dB == VB.stream.end ? VB.parser.eofTerm : 0, TB
      }
      updateCachedToken(BB, TB, dB) {
        let VB = this.stream.clipPos(dB.pos);
        if (TB.token(this.stream.reset(VB, BB), dB), BB.value > -1) {
          let {
            parser: TB
          } = dB.p;
          for (let VB = 0; VB < TB.specialized.length; VB++)
            if (TB.specialized[VB] == BB.value) {
              let yB = TB.specializers[VB](this.stream.read(BB.start, BB.end), dB);
              if (yB >= 0 && dB.p.parser.dialect.allows(yB >> 1)) {
                0 == (1 & yB) ? BB.value = yB >> 1 : BB.extended = yB >> 1;
                break
              }
            }
        } else BB.value = 0, BB.end = this.stream.clipPos(VB + 1)
      }
      putAction(BB, TB, dB, VB) {
        for (let yB = 0; yB < VB; yB += 3)
          if (this.actions[yB] == BB) return VB;
        return this.actions[VB++] = BB, this.actions[VB++] = TB, this.actions[VB++] = dB, VB
      }
      addActions(BB, TB, dB, VB) {
        let {
          state: yB
        } = BB, {
          parser: pB
        } = BB.p, {
          data: lB
        } = pB;
        for (let JB = 0; JB < 2; JB++)
          for (let BB = pB.stateSlot(yB, JB ? 2 : 1);; BB += 3) {
            if (65535 == lB[BB]) {
              if (1 != lB[BB + 1]) {
                0 == VB && 2 == lB[BB + 1] && (VB = this.putAction(UB(lB, BB + 2), TB, dB, VB));
                break
              }
              BB = UB(lB, BB + 2)
            }
            lB[BB] == TB && (VB = this.putAction(UB(lB, BB + 1), TB, dB, VB))
          }
        return VB
      }
    }
    class fB {
      constructor(BB, TB, dB, VB) {
        this.parser = BB, this.input = TB, this.ek = VB, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new kB(TB, VB), this.tokens = new tB(BB, this.stream), this.topTerm = BB.top[1];
        let {
          from: pB
        } = VB[0];
        this.stacks = [yB.start(this, BB.top[0], pB)], this.fragments = dB.length && this.stream.end - pB > 4 * BB.bufferLength ? new NB(dB, BB.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let BB, TB, dB = this.stacks,
          VB = this.minStackPos,
          yB = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == dB.length) {
          let [BB] = dB;
          for (; BB.forceReduce() && BB.stack.length && BB.stack[BB.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let pB = 0; pB < dB.length; pB++) {
          let lB = dB[pB];
          for (;;) {
            if (this.tokens.mainToken = null, lB.pos > VB) yB.push(lB);
            else {
              if (this.advanceStack(lB, yB, dB)) continue;
              {
                BB || (BB = [], TB = []), BB.push(lB);
                let dB = this.tokens.getMainToken(lB);
                TB.push(dB.value, dB.end)
              }
            }
            break
          }
        }
        if (!yB.length) {
          let TB = BB && function(BB) {
            let TB = null;
            for (let dB of BB) {
              let BB = dB.p.stoppedAt;
              (dB.pos == dB.p.stream.end || null != BB && dB.pos > BB) && dB.p.parser.stateFlag(dB.state, 2) && (!TB || TB.score < dB.score) && (TB = dB)
            }
            return TB
          }(BB);
          if (TB) return vB && console.log("Finish with " + this.stackID(TB)), this.stackToTree(TB);
          if (this.parser.strict) throw vB && BB && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + VB);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && BB) {
          let dB = null != this.stoppedAt && BB[0].pos > this.stoppedAt ? BB[0] : this.runRecovery(BB, TB, yB);
          if (dB) return vB && console.log("Force-finish " + this.stackID(dB)), this.stackToTree(dB.forceAll())
        }
        if (this.recovering) {
          let BB = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (yB.length > BB)
            for (yB.sort(((BB, TB) => TB.score - BB.score)); yB.length > BB;) yB.pop();
          yB.some((BB => BB.reducePos > VB)) && this.recovering--
        } else if (yB.length > 1) {
          BB: for (let BB = 0; BB < yB.length - 1; BB++) {
            let TB = yB[BB];
            for (let dB = BB + 1; dB < yB.length; dB++) {
              let VB = yB[dB];
              if (TB.sameState(VB) || TB.buffer.length > 500 && VB.buffer.length > 500) {
                if (!((TB.score - VB.score || TB.buffer.length - VB.buffer.length) > 0)) {
                  yB.splice(BB--, 1);
                  continue BB
                }
                yB.splice(dB--, 1)
              }
            }
          }
          yB.length > 12 && (yB.sort(((BB, TB) => TB.score - BB.score)), yB.splice(12, yB.length - 12))
        }
        this.minStackPos = yB[0].pos;
        for (let pB = 1; pB < yB.length; pB++) yB[pB].pos < this.minStackPos && (this.minStackPos = yB[pB].pos);
        return null
      }
      stopAt(BB) {
        if (null != this.stoppedAt && this.stoppedAt < BB) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = BB
      }
      advanceStack(BB, TB, dB) {
        let yB = BB.pos,
          {
            parser: pB
          } = this,
          lB = vB ? this.stackID(BB) + " -> " : "";
        if (null != this.stoppedAt && yB > this.stoppedAt) return BB.forceReduce() ? BB : null;
        if (this.fragments) {
          let TB = BB.curContext && BB.curContext.tracker.strict,
            dB = TB ? BB.curContext.hash : 0;
          for (let JB = this.fragments.nodeAt(yB); JB;) {
            let yB = this.parser.nodeSet.types[JB.type.id] == JB.type ? pB.getGoto(BB.state, JB.type.id) : -1;
            if (yB > -1 && JB.length && (!TB || (JB.prop(VB.i.contextHash) || 0) == dB)) return BB.useNode(JB, yB), vB && console.log(lB + this.stackID(BB) + ` (via reuse of ${pB.getName(JB.type.id)})`), !0;
            if (!(JB instanceof VB.s) || 0 == JB.children.length || JB.positions[0] > 0) break;
            let YB = JB.children[0];
            if (!(YB instanceof VB.s && 0 == JB.positions[0])) break;
            JB = YB
          }
        }
        let JB = pB.stateSlot(BB.state, 4);
        if (JB > 0) return BB.reduce(JB), vB && console.log(lB + this.stackID(BB) + ` (via always-reduce ${pB.getName(65535&JB)})`), !0;
        if (BB.stack.length >= 8400)
          for (; BB.stack.length > 6e3 && BB.forceReduce(););
        let YB = this.tokens.getActions(BB);
        for (let VB = 0; VB < YB.length;) {
          let JB = YB[VB++],
            gB = YB[VB++],
            oB = YB[VB++],
            kB = VB == YB.length || !dB,
            LB = kB ? BB : BB.split(),
            OB = this.tokens.mainToken;
          if (LB.apply(JB, gB, OB ? OB.start : LB.pos, oB), vB && console.log(lB + this.stackID(LB) + ` (via ${0==(65536&JB)?"shift":`reduce of ${pB.getName(65535&JB)}`} for ${pB.getName(gB)} @ ${yB}${LB==BB?"":", split"})`), kB) return !0;
          LB.pos > yB ? TB.push(LB) : dB.push(LB)
        }
        return !1
      }
      advanceFully(BB, TB) {
        let dB = BB.pos;
        for (;;) {
          if (!this.advanceStack(BB, null, null)) return !1;
          if (BB.pos > dB) return sB(BB, TB), !0
        }
      }
      runRecovery(BB, TB, dB) {
        let VB = null,
          yB = !1;
        for (let pB = 0; pB < BB.length; pB++) {
          let lB = BB[pB],
            JB = TB[pB << 1],
            YB = TB[1 + (pB << 1)],
            gB = vB ? this.stackID(lB) + " -> " : "";
          if (lB.deadEnd) {
            if (yB) continue;
            if (yB = !0, lB.restart(), vB && console.log(gB + this.stackID(lB) + " (restarted)"), this.advanceFully(lB, dB)) continue
          }
          let oB = lB.split(),
            kB = gB;
          for (let BB = 0; BB < 10 && oB.forceReduce(); BB++) {
            if (vB && console.log(kB + this.stackID(oB) + " (via force-reduce)"), this.advanceFully(oB, dB)) break;
            vB && (kB = this.stackID(oB) + " -> ")
          }
          for (let BB of lB.recoverByInsert(JB)) vB && console.log(gB + this.stackID(BB) + " (via recover-insert)"), this.advanceFully(BB, dB);
          this.stream.end > lB.pos ? (YB == lB.pos && (YB++, JB = 0), lB.recoverByDelete(JB, YB), vB && console.log(gB + this.stackID(lB) + ` (via recover-delete ${this.parser.getName(JB)})`), sB(lB, dB)) : (!VB || VB.score < oB.score) && (VB = oB)
        }
        return VB
      }
      stackToTree(BB) {
        return BB.close(), VB.s.build({
          buffer: JB.create(BB),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.ek[0].from,
          length: BB.pos - this.ek[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(BB) {
        let TB = (mB || (mB = new WeakMap)).get(BB);
        return TB || mB.set(BB, TB = String.fromCodePoint(this.nextStackID++)), TB + BB
      }
    }

    function sB(BB, TB) {
      for (let dB = 0; dB < TB.length; dB++) {
        let VB = TB[dB];
        if (VB.pos == BB.pos && VB.sameState(BB)) return void(TB[dB].score < BB.score && (TB[dB] = BB))
      }
      TB.push(BB)
    }
    class MB {
      constructor(BB, TB, dB) {
        this.source = BB, this.flags = TB, this.disabled = dB
      }
      allows(BB) {
        return !this.disabled || 0 == this.disabled[BB]
      }
    }
    const zB = BB => BB;
    class wB extends VB.q {
      constructor(BB) {
        if (super(), this.wrappers = [], 14 != BB.version) throw new RangeError(`Parser version (${BB.version}) doesn't match runtime version (14)`);
        let TB = BB.nodeNames.split(" ");
        this.minRepeatTerm = TB.length;
        for (let VB = 0; VB < BB.repeatNodeCount; VB++) TB.push("");
        let dB = Object.keys(BB.topRules).map((TB => BB.topRules[TB][1])),
          yB = [];
        for (let VB = 0; VB < TB.length; VB++) yB.push([]);

        function pB(BB, TB, dB) {
          yB[BB].push([TB, TB.deserialize(String(dB))])
        }
        if (BB.nodeProps)
          for (let JB of BB.nodeProps) {
            let BB = JB[0];
            "string" == typeof BB && (BB = VB.i[BB]);
            for (let TB = 1; TB < JB.length;) {
              let dB = JB[TB++];
              if (dB >= 0) pB(dB, BB, JB[TB++]);
              else {
                let VB = JB[TB + -dB];
                for (let yB = -dB; yB > 0; yB--) pB(JB[TB++], BB, VB);
                TB++
              }
            }
          }
        this.nodeSet = new VB.j(TB.map(((TB, pB) => VB.k.define({
          name: pB >= this.minRepeatTerm ? void 0 : TB,
          id: pB,
          props: yB[pB],
          top: dB.indexOf(pB) > -1,
          error: 0 == pB,
          skipped: BB.skippedNodes && BB.skippedNodes.indexOf(pB) > -1
        })))), BB.propSources && (this.nodeSet = this.nodeSet.extend(...BB.propSources)), this.strict = !1, this.bufferLength = VB.b;
        let lB = YB(BB.tokenData);
        this.context = BB.context, this.specializerSpecs = BB.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let VB = 0; VB < this.specializerSpecs.length; VB++) this.specialized[VB] = this.specializerSpecs[VB].term;
        this.specializers = this.specializerSpecs.map(FB), this.states = YB(BB.states, Uint32Array), this.data = YB(BB.stateData), this.goto = YB(BB.goto), this.maxTerm = BB.maxTerm, this.tokenizers = BB.tokenizers.map((BB => "number" == typeof BB ? new LB(lB, BB) : BB)), this.topRules = BB.topRules, this.dialects = BB.dialects || {}, this.dynamicPrecedences = BB.dynamicPrecedences || null, this.tokenPrecTable = BB.tokenPrec, this.termNames = BB.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(BB, TB, dB) {
        let VB = new fB(this, BB, TB, dB);
        for (let yB of this.wrappers) VB = yB(VB, BB, TB, dB);
        return VB
      }
      getGoto(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          VB = this.goto;
        if (TB >= VB[0]) return -1;
        for (let yB = VB[TB + 1];;) {
          let TB = VB[yB++],
            pB = 1 & TB,
            lB = VB[yB++];
          if (pB && dB) return lB;
          for (let dB = yB + (TB >> 1); yB < dB; yB++)
            if (VB[yB] == BB) return lB;
          if (pB) return -1
        }
      }
      hasAction(BB, TB) {
        let dB = this.data;
        for (let VB = 0; VB < 2; VB++)
          for (let yB, pB = this.stateSlot(BB, VB ? 2 : 1);; pB += 3) {
            if (65535 == (yB = dB[pB])) {
              if (1 != dB[pB + 1]) {
                if (2 == dB[pB + 1]) return UB(dB, pB + 2);
                break
              }
              yB = dB[pB = UB(dB, pB + 2)]
            }
            if (yB == TB || 0 == yB) return UB(dB, pB + 1)
          }
        return 0
      }
      stateSlot(BB, TB) {
        return this.states[6 * BB + TB]
      }
      stateFlag(BB, TB) {
        return (this.stateSlot(BB, 0) & TB) > 0
      }
      validAction(BB, TB) {
        return !!this.allActions(BB, (BB => BB == TB || null))
      }
      allActions(BB, TB) {
        let dB = this.stateSlot(BB, 4),
          VB = dB ? TB(dB) : void 0;
        for (let yB = this.stateSlot(BB, 1); null == VB; yB += 3) {
          if (65535 == this.data[yB]) {
            if (1 != this.data[yB + 1]) break;
            yB = UB(this.data, yB + 2)
          }
          VB = TB(UB(this.data, yB + 1))
        }
        return VB
      }
      nextStates(BB) {
        let TB = [];
        for (let dB = this.stateSlot(BB, 1);; dB += 3) {
          if (65535 == this.data[dB]) {
            if (1 != this.data[dB + 1]) break;
            dB = UB(this.data, dB + 2)
          }
          if (0 == (1 & this.data[dB + 2])) {
            let BB = this.data[dB + 1];
            TB.some(((TB, dB) => 1 & dB && TB == BB)) || TB.push(this.data[dB], BB)
          }
        }
        return TB
      }
      configure(BB) {
        let TB = Object.assign(Object.create(wB.prototype), this);
        if (BB.props && (TB.nodeSet = this.nodeSet.extend(...BB.props)), BB.top) {
          let dB = this.topRules[BB.top];
          if (!dB) throw new RangeError(`Invalid top rule name ${BB.top}`);
          TB.top = dB
        }
        return BB.tokenizers && (TB.tokenizers = this.tokenizers.map((TB => {
          let dB = BB.tokenizers.find((BB => BB.from == TB));
          return dB ? dB.to : TB
        }))), BB.specializers && (TB.specializers = this.specializers.slice(), TB.specializerSpecs = this.specializerSpecs.map(((dB, VB) => {
          let yB = BB.specializers.find((BB => BB.from == dB.external));
          if (!yB) return dB;
          let pB = Object.assign(Object.assign({}, dB), {
            external: yB.to
          });
          return TB.specializers[VB] = FB(pB), pB
        }))), BB.contextTracker && (TB.context = BB.contextTracker), BB.dialect && (TB.dialect = this.parseDialect(BB.dialect)), null != BB.strict && (TB.strict = BB.strict), BB.wrap && (TB.wrappers = TB.wrappers.concat(BB.wrap)), null != BB.bufferLength && (TB.bufferLength = BB.bufferLength), TB
      }
      hasWrappers() {
        return this.wrappers.length > 0
      }
      getName(BB) {
        return this.termNames ? this.termNames[BB] : String(BB <= this.maxNode && this.nodeSet.types[BB].name || BB)
      }
      get eofTerm() {
        return this.maxNode + 1
      }
      get topNode() {
        return this.nodeSet.types[this.top[1]]
      }
      dynamicPrecedence(BB) {
        let TB = this.dynamicPrecedences;
        return null == TB ? 0 : TB[BB] || 0
      }
      parseDialect(BB) {
        let TB = Object.keys(this.dialects),
          dB = TB.map((() => !1));
        if (BB)
          for (let yB of BB.split(" ")) {
            let BB = TB.indexOf(yB);
            BB >= 0 && (dB[BB] = !0)
          }
        let VB = null;
        for (let yB = 0; yB < TB.length; yB++)
          if (!dB[yB])
            for (let BB, dB = this.dialects[TB[yB]]; 65535 != (BB = this.data[dB++]);)(VB || (VB = new Uint8Array(this.maxTerm + 1)))[BB] = 1;
        return new MB(BB, dB, VB)
      }
      static deserialize(BB) {
        return new wB(BB)
      }
    }

    function UB(BB, TB) {
      return BB[TB] | BB[TB + 1] << 16
    }

    function FB(BB) {
      if (BB.external) {
        let TB = BB.extend ? 1 : 0;
        return (dB, VB) => BB.external(dB, VB) << 1 | TB
      }
      return BB.get
    }
    var KB = dB(40069);
    const rB = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      IB = new class {
        constructor(BB) {
          this.start = BB.start, this.shift = BB.shift || zB, this.reduce = BB.reduce || zB, this.reuse = BB.reuse || zB, this.hash = BB.hash || (() => 0), this.strict = !1 !== BB.strict
        }
      }({
        start: !1,
        shift: (BB, TB) => 5 == TB || 6 == TB || 320 == TB ? BB : 321 == TB,
        strict: !1
      }),
      cB = new DB(((BB, TB) => {
        let {
          next: dB
        } = BB;
        (125 == dB || -1 == dB || TB.context) && BB.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      SB = new DB(((BB, TB) => {
        let dB, {
          next: VB
        } = BB;
        rB.indexOf(VB) > -1 || (47 != VB || 47 != (dB = BB.peek(1)) && 42 != dB) && (125 == VB || 59 == VB || -1 == VB || TB.context || BB.acceptToken(316))
      }), {
        contextual: !0
      }),
      PB = new DB(((BB, TB) => {
        91 != BB.next || TB.context || BB.acceptToken(317)
      }), {
        contextual: !0
      }),
      QB = new DB(((BB, TB) => {
        let {
          next: dB
        } = BB;
        if (43 == dB || 45 == dB) {
          if (BB.advance(), dB == BB.next) {
            BB.advance();
            let dB = !TB.context && TB.canShift(1);
            BB.acceptToken(dB ? 1 : 2)
          }
        } else 63 == dB && 46 == BB.peek(1) && (BB.advance(), BB.advance(), (BB.next < 48 || BB.next > 57) && BB.acceptToken(3))
      }), {
        contextual: !0
      });

    function RB(BB, TB) {
      return BB >= 65 && BB <= 90 || BB >= 97 && BB <= 122 || 95 == BB || BB >= 192 || !TB && BB >= 48 && BB <= 57
    }
    const aB = new DB(((BB, TB) => {
        if (60 != BB.next || !TB.dialectEnabled(0)) return;
        if (BB.advance(), 47 == BB.next) return;
        let dB = 0;
        for (; rB.indexOf(BB.next) > -1;) BB.advance(), dB++;
        if (RB(BB.next, !0)) {
          for (BB.advance(), dB++; RB(BB.next, !1);) BB.advance(), dB++;
          for (; rB.indexOf(BB.next) > -1;) BB.advance(), dB++;
          if (44 == BB.next) return;
          for (let TB = 0;; TB++) {
            if (7 == TB) {
              if (!RB(BB.next, !0)) return;
              break
            }
            if (BB.next != "extends".charCodeAt(TB)) break;
            BB.advance(), dB++
          }
        }
        BB.acceptToken(4, -dB)
      })),
      ZB = (0, KB.f)({
        "get set async static": KB.h.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": KB.h.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": KB.h.operatorKeyword,
        "let var const using function class extends": KB.h.definitionKeyword,
        "import export from": KB.h.moduleKeyword,
        "with debugger new": KB.h.keyword,
        TemplateString: KB.h.special(KB.h.string),
        super: KB.h.atom,
        BooleanLiteral: KB.h.bool,
        this: KB.h.self,
        null: KB.h.null,
        Star: KB.h.modifier,
        VariableName: KB.h.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": KB.h.function(KB.h.variableName),
        VariableDefinition: KB.h.definition(KB.h.variableName),
        Label: KB.h.labelName,
        PropertyName: KB.h.propertyName,
        PrivatePropertyName: KB.h.special(KB.h.propertyName),
        "CallExpression/MemberExpression/PropertyName": KB.h.function(KB.h.propertyName),
        "FunctionDeclaration/VariableDefinition": KB.h.function(KB.h.definition(KB.h.variableName)),
        "ClassDeclaration/VariableDefinition": KB.h.definition(KB.h.className),
        "NewExpression/VariableName": KB.h.className,
        PropertyDefinition: KB.h.definition(KB.h.propertyName),
        PrivatePropertyDefinition: KB.h.definition(KB.h.special(KB.h.propertyName)),
        UpdateOp: KB.h.updateOperator,
        "LineComment Hashbang": KB.h.lineComment,
        BlockComment: KB.h.blockComment,
        Number: KB.h.number,
        String: KB.h.string,
        Escape: KB.h.escape,
        ArithOp: KB.h.arithmeticOperator,
        LogicOp: KB.h.logicOperator,
        BitOp: KB.h.bitwiseOperator,
        CompareOp: KB.h.compareOperator,
        RegExp: KB.h.regexp,
        Equals: KB.h.definitionOperator,
        Arrow: KB.h.function(KB.h.punctuation),
        ": Spread": KB.h.punctuation,
        "( )": KB.h.paren,
        "[ ]": KB.h.squareBracket,
        "{ }": KB.h.brace,
        "InterpolationStart InterpolationEnd": KB.h.special(KB.h.brace),
        ".": KB.h.derefOperator,
        ", ;": KB.h.separator,
        "@": KB.h.meta,
        TypeName: KB.h.typeName,
        TypeDefinition: KB.h.definition(KB.h.typeName),
        "type enum interface implements namespace module declare": KB.h.definitionKeyword,
        "abstract global Privacy readonly override": KB.h.modifier,
        "is keyof unique infer asserts": KB.h.operatorKeyword,
        JSXAttributeValue: KB.h.attributeValue,
        JSXText: KB.h.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": KB.h.angleBracket,
        "JSXIdentifier JSXNameSpacedName": KB.h.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": KB.h.attributeName,
        "JSXBuiltin/JSXIdentifier": KB.h.standard(KB.h.tagName)
      }),
      XB = {
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
      WB = {
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
      hB = {
        __proto__: null,
        "<": 193
      },
      CB = wB.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: IB,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [ZB],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [SB, PB, QB, aB, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, cB, new OB("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new OB("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: BB => XB[BB] || -1
        }, {
          term: 343,
          get: BB => WB[BB] || -1
        }, {
          term: 95,
          get: BB => hB[BB] || -1
        }],
        tokenPrec: 15201
      });
    var GB = dB(40060),
      qB = dB(40036),
      xB = dB(40040),
      jB = dB(40033);
    const AB = [(0, jB.v)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, jB.v)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, jB.v)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, jB.v)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, jB.v)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, jB.v)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, jB.v)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, jB.v)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, jB.v)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, jB.v)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, jB.v)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      bB = AB.concat([(0, jB.v)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, jB.v)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, jB.v)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      nB = new VB.m,
      eB = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function BT(BB) {
      return (TB, dB) => {
        let VB = TB.node.getChild("VariableDefinition");
        return VB && dB(VB, BB), !0
      }
    }
    const TT = ["FunctionDeclaration"],
      dT = {
        FunctionDeclaration: BT("function"),
        ClassDeclaration: BT("class"),
        ClassExpression: () => !0,
        EnumDeclaration: BT("constant"),
        TypeAliasDeclaration: BT("type"),
        NamespaceDeclaration: BT("namespace"),
        VariableDefinition(BB, TB) {
          BB.matchContext(TT) || TB(BB, "variable")
        },
        TypeDefinition(BB, TB) {
          TB(BB, "type")
        },
        __proto__: null
      };

    function VT(BB, TB) {
      let dB = nB.get(TB);
      if (dB) return dB;
      let yB = [],
        pB = !0;

      function lB(TB, dB) {
        let VB = BB.sliceString(TB.from, TB.to);
        yB.push({
          label: VB,
          type: dB
        })
      }
      return TB.cursor(VB.f.IncludeAnonymous).iterate((TB => {
        if (pB) pB = !1;
        else if (TB.name) {
          let BB = dT[TB.name];
          if (BB && BB(TB, lB) || eB.has(TB.name)) return !1
        } else if (TB.to - TB.from > 8192) {
          for (let dB of VT(BB, TB.node)) yB.push(dB);
          return !1
        }
      })), nB.set(TB, yB), yB
    }
    const yT = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      pT = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function lT(BB) {
      let TB = (0, GB.hb)(BB.state).resolveInner(BB.pos, -1);
      if (pT.indexOf(TB.name) > -1) return null;
      let dB = "VariableName" == TB.name || TB.to - TB.from < 20 && yT.test(BB.state.sliceDoc(TB.from, TB.to));
      if (!dB && !BB.explicit) return null;
      let VB = [];
      for (let yB = TB; yB; yB = yB.parent) eB.has(yB.name) && (VB = VB.concat(VT(BB.state.doc, yB)));
      return {
        options: VB,
        from: dB ? TB.from : BB.pos,
        validFor: yT
      }
    }
    const JT = GB.g.define({
        name: "javascript",
        parser: CB.configure({
          props: [GB.M.add({
            IfStatement: (0, GB.p)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, GB.p)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: GB.z,
            SwitchBody: BB => {
              let TB = BB.textAfter,
                dB = /^\s*\}/.test(TB),
                VB = /^\s*(case|default)\b/.test(TB);
              return BB.baseIndent + (dB ? 0 : VB ? 1 : 2) * BB.unit
            },
            Block: (0, GB.y)({
              closing: "}"
            }),
            ArrowFunction: BB => BB.baseIndent + BB.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, GB.p)({
              except: /^\s*{/
            }),
            JSXElement(BB) {
              let TB = /^\s*<\//.test(BB.textAfter);
              return BB.lineIndent(BB.node.from) + (TB ? 0 : BB.unit)
            },
            JSXEscape(BB) {
              let TB = /\s*\}/.test(BB.textAfter);
              return BB.lineIndent(BB.node.from) + (TB ? 0 : BB.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": BB => BB.column(BB.node.from) + BB.unit
          }), GB.H.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": GB.F,
            BlockComment: BB => ({
              from: BB.from + 2,
              to: BB.to - 2
            }),
            JSXElement(BB) {
              let TB = BB.firstChild;
              if (!TB || "JSXSelfClosingTag" == TB.name) return null;
              let dB = BB.lastChild;
              return {
                from: TB.to,
                to: dB.type.isError ? BB.to : dB.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(BB) {
              var TB;
              let dB = null === (TB = BB.firstChild) || void 0 === TB ? void 0 : TB.nextSibling,
                VB = BB.lastChild;
              return !dB || dB.type.isError ? null : {
                from: dB.to,
                to: VB.type.isError ? BB.to : VB.from
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
      YT = {
        test: BB => /^JSX/.test(BB.name),
        facet: (0, GB.u)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      gT = JT.configure({
        dialect: "ts"
      }, "typescript"),
      oT = JT.configure({
        dialect: "jsx",
        props: [GB._.add((BB => BB.isTop ? [YT] : void 0))]
      }),
      kT = JT.configure({
        dialect: "jsx ts",
        props: [GB._.add((BB => BB.isTop ? [YT] : void 0))]
      }, "typescript");
    let LT = BB => ({
      label: BB,
      type: "keyword"
    });
    const OT = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(LT),
      DT = OT.concat(["declare", "implements", "private", "protected", "public"].map(LT));

    function uT() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        TB = BB.jsx ? BB.typescript ? kT : oT : BB.typescript ? gT : JT,
        dB = BB.typescript ? bB.concat(DT) : AB.concat(OT);
      return new GB.h(TB, [JT.data.of({
        autocomplete: (0, jB.t)(pT, (0, jB.l)(dB))
      }), JT.data.of({
        autocomplete: lT
      }), BB.jsx ? vT : []])
    }

    function HT(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BB.length;
      for (let VB = null === TB || void 0 === TB ? void 0 : TB.firstChild; VB; VB = VB.nextSibling)
        if ("JSXIdentifier" == VB.name || "JSXBuiltin" == VB.name || "JSXNamespacedName" == VB.name || "JSXMemberExpression" == VB.name) return BB.sliceString(VB.from, Math.min(VB.to, dB));
      return ""
    }
    const ET = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      vT = xB.i.inputHandler.of(((BB, TB, dB, VB, yB) => {
        if ((ET ? BB.composing : BB.compositionStarted) || BB.state.readOnly || TB != dB || ">" != VB && "/" != VB || !JT.isActiveAt(BB.state, TB, -1)) return !1;
        let pB = yB(),
          {
            state: lB
          } = pB,
          JB = lB.changeByRange((BB => {
            var TB;
            let dB, {
                head: yB
              } = BB,
              pB = (0, GB.hb)(lB).resolveInner(yB - 1, -1);
            if ("JSXStartTag" == pB.name && (pB = pB.parent), lB.doc.sliceString(yB - 1, yB) != VB || "JSXAttributeValue" == pB.name && pB.to > yB);
            else {
              if (">" == VB && "JSXFragmentTag" == pB.name) return {
                range: BB,
                changes: {
                  from: yB,
                  insert: "</>"
                }
              };
              if ("/" == VB && "JSXStartCloseTag" == pB.name) {
                let BB = pB.parent,
                  VB = BB.parent;
                if (VB && BB.from == yB - 2 && ((dB = HT(lB.doc, VB.firstChild, yB)) || "JSXFragmentTag" == (null === (TB = VB.firstChild) || void 0 === TB ? void 0 : TB.name))) {
                  let BB = `${dB}>`;
                  return {
                    range: qB.h.cursor(yB + BB.length, -1),
                    changes: {
                      from: yB,
                      insert: BB
                    }
                  }
                }
              } else if (">" == VB) {
                let TB = function(BB) {
                  for (;;) {
                    if ("JSXOpenTag" == BB.name || "JSXSelfClosingTag" == BB.name || "JSXFragmentTag" == BB.name) return BB;
                    if ("JSXEscape" == BB.name || !BB.parent) return null;
                    BB = BB.parent
                  }
                }(pB);
                if (TB && "JSXOpenTag" == TB.name && !/^\/?>|^<\//.test(lB.doc.sliceString(yB, yB + 2)) && (dB = HT(lB.doc, TB, yB))) return {
                  range: BB,
                  changes: {
                    from: yB,
                    insert: `</${dB}>`
                  }
                }
              }
            }
            return {
              range: BB
            }
          }));
        return !JB.changes.empty && (BB.dispatch([pB, lB.update(JB, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  40060: (BB, TB, dB) => {
    dB.d(TB, {
      D: () => vT,
      F: () => AB,
      G: () => gT,
      H: () => jB,
      I: () => EB,
      J: () => KB,
      L: () => IB,
      M: () => SB,
      Q: () => qB,
      R: () => rB,
      V: () => FB,
      Y: () => WT,
      _: () => kB,
      b: () => iT,
      cb: () => sT,
      d: () => cB,
      g: () => DB,
      gb: () => HB,
      h: () => wB,
      hb: () => uB,
      l: () => RT,
      p: () => CB,
      q: () => wT,
      u: () => oB,
      y: () => XB,
      z: () => hB
    });
    var VB, yB = dB(40064),
      pB = dB(40036),
      lB = dB(40040),
      JB = dB(40069),
      YB = dB(40043);
    const gB = new yB.i;

    function oB(BB) {
      return pB.l.define({
        combine: BB ? TB => TB.concat(BB) : void 0
      })
    }
    const kB = new yB.i;
    class LB {
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = BB, this.name = VB, pB.i.prototype.hasOwnProperty("tree") || Object.defineProperty(pB.i.prototype, "tree", {
          get() {
            return uB(this)
          }
        }), this.parser = TB, this.extension = [zB.of(this), pB.i.languageData.of(((BB, TB, dB) => {
          let VB = OB(BB, TB, dB),
            yB = VB.type.prop(gB);
          if (!yB) return [];
          let pB = BB.facet(yB),
            lB = VB.type.prop(kB);
          if (lB) {
            let yB = VB.resolve(TB - VB.from, dB);
            for (let TB of lB)
              if (TB.test(yB, BB)) {
                let dB = BB.facet(TB.facet);
                return "replace" == TB.type ? dB : dB.concat(pB)
              }
          }
          return pB
        }))].concat(dB)
      }
      isActiveAt(BB, TB) {
        return OB(BB, TB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(gB) == this.data
      }
      findRegions(BB) {
        let TB = BB.facet(zB);
        if ((null === TB || void 0 === TB ? void 0 : TB.data) == this.data) return [{
          from: 0,
          to: BB.doc.length
        }];
        if (!TB || !TB.allowsNesting) return [];
        let dB = [],
          VB = (BB, TB) => {
            if (BB.prop(gB) == this.data) return void dB.push({
              from: TB,
              to: TB + BB.length
            });
            let pB = BB.prop(yB.i.mounted);
            if (pB) {
              if (pB.tree.prop(gB) == this.data) {
                if (pB.overlay)
                  for (let BB of pB.overlay) dB.push({
                    from: BB.from + TB,
                    to: BB.to + TB
                  });
                else dB.push({
                  from: TB,
                  to: TB + BB.length
                });
                return
              }
              if (pB.overlay) {
                let BB = dB.length;
                if (VB(pB.tree, pB.overlay[0].from + TB), dB.length > BB) return
              }
            }
            for (let dB = 0; dB < BB.children.length; dB++) {
              let pB = BB.children[dB];
              pB instanceof yB.s && VB(pB, BB.positions[dB] + TB)
            }
          };
        return VB(uB(BB), 0), dB
      }
      get allowsNesting() {
        return !0
      }
    }

    function OB(BB, TB, dB) {
      let VB = BB.facet(zB),
        pB = uB(BB).topNode;
      if (!VB || VB.allowsNesting)
        for (let lB = pB; lB; lB = lB.enter(TB, dB, yB.f.ExcludeBuffers | yB.f.EnterBracketed)) lB.type.isTop && (pB = lB);
      return pB
    }
    LB.setState = pB.x.define();
    class DB extends LB {
      constructor(BB, TB, dB) {
        super(BB, TB, [], dB), this.parser = TB
      }
      static define(BB) {
        let TB = oB(BB.languageData);
        return new DB(TB, BB.parser.configure({
          props: [gB.add((BB => BB.isTop ? TB : void 0))]
        }), BB.name)
      }
      configure(BB, TB) {
        return new DB(this.data, this.parser.configure(BB), TB || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function uB(BB) {
      let TB = BB.field(LB.state, !1);
      return TB ? TB.tree : yB.s.empty
    }

    function HB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB.doc.length;
      var dB;
      return (null === (dB = BB.field(LB.state, !1)) || void 0 === dB ? void 0 : dB.context.isDone(TB)) || !1
    }

    function EB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB.viewport.to,
        dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        VB = function(BB, TB) {
          let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var VB;
          let yB = null === (VB = BB.field(LB.state, !1)) || void 0 === VB ? void 0 : VB.context;
          if (!yB) return null;
          let pB = yB.viewport;
          yB.updateViewport({
            from: 0,
            to: TB
          });
          let lB = yB.isDone(TB) || yB.work(dB, TB) ? yB.tree : null;
          return yB.updateViewport(pB), lB
        }(BB.state, TB, dB);
      return VB != uB(BB.state) && BB.dispatch({}), !!VB
    }
    class vB {
      constructor(BB) {
        this.doc = BB, this.cursorPos = 0, this.string = "", this.cursor = BB.iter()
      }
      get length() {
        return this.doc.length
      }
      syncTo(BB) {
        return this.string = this.cursor.next(BB - this.cursorPos).value, this.cursorPos = BB + this.string.length, this.cursorPos - this.string.length
      }
      chunk(BB) {
        return this.syncTo(BB), this.string
      }
      get lineChunks() {
        return !0
      }
      read(BB, TB) {
        let dB = this.cursorPos - this.string.length;
        return BB < dB || TB >= this.cursorPos ? this.doc.sliceString(BB, TB) : this.string.slice(BB - dB, TB - dB)
      }
    }
    let mB = null;
    class iB {
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          VB = arguments.length > 3 ? arguments[3] : void 0,
          yB = arguments.length > 4 ? arguments[4] : void 0,
          pB = arguments.length > 5 ? arguments[5] : void 0,
          lB = arguments.length > 6 ? arguments[6] : void 0,
          JB = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = BB, this.state = TB, this.fragments = dB, this.tree = VB, this.treeLen = yB, this.viewport = pB, this.skipped = lB, this.scheduleOn = JB, this.parse = null, this.tempSkipped = []
      }
      static create(BB, TB, dB) {
        return new iB(BB, TB, [], yB.s.empty, 0, dB, [], null)
      }
      startParse() {
        return this.parser.startParse(new vB(this.state.doc), this.fragments)
      }
      work(BB, TB) {
        return null != TB && TB >= this.state.doc.length && (TB = void 0), this.tree != yB.s.empty && this.isDone(null !== TB && void 0 !== TB ? TB : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var dB;
          if ("number" == typeof BB) {
            let TB = Date.now() + BB;
            BB = () => Date.now() > TB
          }
          for (this.parse || (this.parse = this.startParse()), null != TB && (null == this.parse.stoppedAt || this.parse.stoppedAt > TB) && TB < this.state.doc.length && this.parse.stopAt(TB);;) {
            let VB = this.parse.advance();
            if (VB) {
              if (this.fragments = this.withoutTempSkipped(yB.r.addTree(VB, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (dB = this.parse.stoppedAt) && void 0 !== dB ? dB : this.state.doc.length, this.tree = VB, this.parse = null, !(this.treeLen < (null !== TB && void 0 !== TB ? TB : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (BB()) return !1
          }
        }))
      }
      takeTree() {
        let BB, TB;
        this.parse && (BB = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > BB) && this.parse.stopAt(BB), this.withContext((() => {
          for (; !(TB = this.parse.advance()););
        })), this.treeLen = BB, this.tree = TB, this.fragments = this.withoutTempSkipped(yB.r.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(BB) {
        let TB = mB;
        mB = this;
        try {
          return BB()
        } finally {
          mB = TB
        }
      }
      withoutTempSkipped(BB) {
        for (let TB; TB = this.tempSkipped.pop();) BB = NB(BB, TB.from, TB.to);
        return BB
      }
      changes(BB, TB) {
        let {
          fragments: dB,
          tree: VB,
          treeLen: pB,
          viewport: lB,
          skipped: JB
        } = this;
        if (this.takeTree(), !BB.empty) {
          let TB = [];
          if (BB.iterChangedRanges(((BB, dB, VB, yB) => TB.push({
              fromA: BB,
              toA: dB,
              fromB: VB,
              toB: yB
            }))), dB = yB.r.applyChanges(dB, TB), VB = yB.s.empty, pB = 0, lB = {
              from: BB.mapPos(lB.from, -1),
              to: BB.mapPos(lB.to, 1)
            }, this.skipped.length) {
            JB = [];
            for (let TB of this.skipped) {
              let dB = BB.mapPos(TB.from, 1),
                VB = BB.mapPos(TB.to, -1);
              dB < VB && JB.push({
                from: dB,
                to: VB
              })
            }
          }
        }
        return new iB(this.parser, TB, dB, VB, pB, lB, JB, this.scheduleOn)
      }
      updateViewport(BB) {
        if (this.viewport.from == BB.from && this.viewport.to == BB.to) return !1;
        this.viewport = BB;
        let TB = this.skipped.length;
        for (let dB = 0; dB < this.skipped.length; dB++) {
          let {
            from: TB,
            to: VB
          } = this.skipped[dB];
          TB < BB.to && VB > BB.from && (this.fragments = NB(this.fragments, TB, VB), this.skipped.splice(dB--, 1))
        }
        return !(this.skipped.length >= TB) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(BB, TB) {
        this.skipped.push({
          from: BB,
          to: TB
        })
      }
      static getSkippingParser(BB) {
        return new class extends yB.q {
          createParse(TB, dB, VB) {
            let pB = VB[0].from,
              lB = VB[VB.length - 1].to;
            return {
              parsedPos: pB,
              advance() {
                let TB = mB;
                if (TB) {
                  for (let BB of VB) TB.tempSkipped.push(BB);
                  BB && (TB.scheduleOn = TB.scheduleOn ? Promise.all([TB.scheduleOn, BB]) : BB)
                }
                return this.parsedPos = lB, new yB.s(yB.k.none, [], [], lB - pB)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(BB) {
        BB = Math.min(BB, this.state.doc.length);
        let TB = this.fragments;
        return this.treeLen >= BB && TB.length && 0 == TB[0].from && TB[0].to >= BB
      }
      static get() {
        return mB
      }
    }

    function NB(BB, TB, dB) {
      return yB.r.applyChanges(BB, [{
        fromA: TB,
        toA: dB,
        fromB: TB,
        toB: dB
      }])
    }
    class tB {
      constructor(BB) {
        this.context = BB, this.tree = BB.tree
      }
      apply(BB) {
        if (!BB.docChanged && this.tree == this.context.tree) return this;
        let TB = this.context.changes(BB.changes, BB.state),
          dB = this.context.treeLen == BB.startState.doc.length ? void 0 : Math.max(BB.changes.mapPos(this.context.treeLen), TB.viewport.to);
        return TB.work(20, dB) || TB.takeTree(), new tB(TB)
      }
      static init(BB) {
        let TB = Math.min(3e3, BB.doc.length),
          dB = iB.create(BB.facet(zB).parser, BB, {
            from: 0,
            to: TB
          });
        return dB.work(20, TB) || dB.takeTree(), new tB(dB)
      }
    }
    LB.state = pB.A.define({
      create: tB.init,
      update(BB, TB) {
        for (let dB of TB.effects)
          if (dB.is(LB.setState)) return dB.value;
        return TB.startState.facet(zB) != TB.state.facet(zB) ? tB.init(TB.state) : BB.apply(TB)
      }
    });
    let fB = BB => {
      let TB = setTimeout((() => BB()), 500);
      return () => clearTimeout(TB)
    };
    "undefined" != typeof requestIdleCallback && (fB = BB => {
      let TB = -1,
        dB = setTimeout((() => {
          TB = requestIdleCallback(BB, {
            timeout: 400
          })
        }), 100);
      return () => TB < 0 ? clearTimeout(dB) : cancelIdleCallback(TB)
    });
    const sB = "undefined" != typeof navigator && (null === (VB = navigator.scheduling) || void 0 === VB ? void 0 : VB.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      MB = lB.n.fromClass(class {
        constructor(BB) {
          this.view = BB, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(BB) {
          let TB = this.view.state.field(LB.state).context;
          (TB.updateViewport(BB.view.viewport) || this.view.viewport.to > TB.treeLen) && this.scheduleWork(), (BB.docChanged || BB.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(TB)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: BB
          } = this.view, TB = BB.field(LB.state);
          TB.tree == TB.context.tree && TB.context.isDone(BB.doc.length) || (this.working = fB(this.work))
        }
        work(BB) {
          this.working = null;
          let TB = Date.now();
          if (this.chunkEnd < TB && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = TB + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: dB,
            viewport: {
              to: VB
            }
          } = this.view, yB = dB.field(LB.state);
          if (yB.tree == yB.context.tree && yB.context.isDone(VB + 1e5)) return;
          let pB = Date.now() + Math.min(this.chunkBudget, 100, BB && !sB ? Math.max(25, BB.timeRemaining() - 5) : 1e9),
            lB = yB.context.treeLen < VB && dB.doc.length > VB + 1e3,
            JB = yB.context.work((() => sB && sB() || Date.now() > pB), VB + (lB ? 0 : 1e5));
          this.chunkBudget -= Date.now() - TB, (JB || this.chunkBudget <= 0) && (yB.context.takeTree(), this.view.dispatch({
            effects: LB.setState.of(new tB(yB.context))
          })), this.chunkBudget > 0 && (!JB || lB) && this.scheduleWork(), this.checkAsyncSchedule(yB.context)
        }
        checkAsyncSchedule(BB) {
          BB.scheduleOn && (this.workScheduled++, BB.scheduleOn.then((() => this.scheduleWork())).catch((BB => (0, lB.W)(this.view.state, BB))).then((() => this.workScheduled--)), BB.scheduleOn = null)
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
      zB = pB.l.define({
        combine: BB => BB.length ? BB[0] : null,
        enables: BB => [LB.state, MB, lB.i.contentAttributes.compute([BB], (TB => {
          let dB = TB.facet(BB);
          return dB && dB.name ? {
            "data-language": dB.name
          } : {}
        }))]
      });
    class wB {
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = BB, this.support = TB, this.extension = [BB, TB]
      }
    }
    const UB = pB.l.define(),
      FB = pB.l.define({
        combine: BB => {
          if (!BB.length) return "  ";
          let TB = BB[0];
          if (!TB || /\S/.test(TB) || Array.from(TB).some((BB => BB != TB[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(BB[0]));
          return TB
        }
      });

    function KB(BB) {
      let TB = BB.facet(FB);
      return 9 == TB.charCodeAt(0) ? BB.tabSize * TB.length : TB.length
    }

    function rB(BB, TB) {
      let dB = "",
        VB = BB.tabSize,
        yB = BB.facet(FB)[0];
      if ("\t" == yB) {
        for (; TB >= VB;) dB += "\t", TB -= VB;
        yB = " "
      }
      for (let pB = 0; pB < TB; pB++) dB += yB;
      return dB
    }

    function IB(BB, TB) {
      BB instanceof pB.i && (BB = new cB(BB));
      for (let VB of BB.state.facet(UB)) {
        let dB = VB(BB, TB);
        if (void 0 !== dB) return dB
      }
      let dB = uB(BB.state);
      return dB.length >= TB ? function(BB, TB, dB) {
        let VB = TB.resolveStack(dB),
          yB = TB.resolveInner(dB, -1).resolve(dB, 0).enterUnfinishedNodesBefore(dB);
        if (yB != VB.node) {
          let BB = [];
          for (let TB = yB; TB && !(TB.from < VB.node.from || TB.to > VB.node.to || TB.from == VB.node.from && TB.type == VB.node.type); TB = TB.parent) BB.push(TB);
          for (let TB = BB.length - 1; TB >= 0; TB--) VB = {
            node: BB[TB],
            next: VB
          }
        }
        return PB(VB, BB, dB)
      }(BB, dB, TB) : null
    }
    class cB {
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = BB, this.options = TB, this.unit = KB(BB)
      }
      lineAt(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          dB = this.state.doc.lineAt(BB),
          {
            simulateBreak: VB,
            simulateDoubleBreak: yB
          } = this.options;
        return null != VB && VB >= dB.from && VB <= dB.to ? yB && VB == BB ? {
          text: "",
          from: BB
        } : (TB < 0 ? VB < BB : VB <= BB) ? {
          text: dB.text.slice(VB - dB.from),
          from: VB
        } : {
          text: dB.text.slice(0, VB - dB.from),
          from: dB.from
        } : dB
      }
      textAfterPos(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && BB == this.options.simulateBreak) return "";
        let {
          text: dB,
          from: VB
        } = this.lineAt(BB, TB);
        return dB.slice(BB - VB, Math.min(dB.length, BB + 100 - VB))
      }
      column(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: dB,
            from: VB
          } = this.lineAt(BB, TB),
          yB = this.countColumn(dB, BB - VB),
          pB = this.options.overrideIndentation ? this.options.overrideIndentation(VB) : -1;
        return pB > -1 && (yB += pB - this.countColumn(dB, dB.search(/\S|$/))), yB
      }
      countColumn(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB.length;
        return (0, pB.R)(BB, this.state.tabSize, TB)
      }
      lineIndent(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: dB,
            from: VB
          } = this.lineAt(BB, TB),
          yB = this.options.overrideIndentation;
        if (yB) {
          let BB = yB(VB);
          if (BB > -1) return BB
        }
        return this.countColumn(dB, dB.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const SB = new yB.i;

    function PB(BB, TB, dB) {
      for (let VB = BB; VB; VB = VB.next) {
        let BB = QB(VB.node);
        if (BB) return BB(aB.create(TB, dB, VB))
      }
      return 0
    }

    function QB(BB) {
      let TB = BB.type.prop(SB);
      if (TB) return TB;
      let dB, VB = BB.firstChild;
      if (VB && (dB = VB.type.prop(yB.i.closedBy))) {
        let TB = BB.lastChild,
          VB = TB && dB.indexOf(TB.name) > -1;
        return BB => WB(BB, !0, 1, void 0, VB && ! function(BB) {
          return BB.pos == BB.options.simulateBreak && BB.options.simulateDoubleBreak
        }(BB) ? TB.from : void 0)
      }
      return null == BB.parent ? RB : null
    }

    function RB() {
      return 0
    }
    class aB extends cB {
      constructor(BB, TB, dB) {
        super(BB.state, BB.options), this.base = BB, this.pos = TB, this.context = dB
      }
      get node() {
        return this.context.node
      }
      static create(BB, TB, dB) {
        return new aB(BB, TB, dB)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(BB) {
        let TB = this.state.doc.lineAt(BB.from);
        for (;;) {
          let dB = BB.resolve(TB.from);
          for (; dB.parent && dB.parent.from == dB.from;) dB = dB.parent;
          if (ZB(dB, BB)) break;
          TB = this.state.doc.lineAt(dB.from)
        }
        return this.lineIndent(TB.from)
      }
      continue () {
        return PB(this.context.next, this.base, this.pos)
      }
    }

    function ZB(BB, TB) {
      for (let dB = TB; dB; dB = dB.parent)
        if (BB == dB) return !0;
      return !1
    }

    function XB(BB) {
      let {
        closing: TB,
        align: dB = !0,
        units: VB = 1
      } = BB;
      return BB => WB(BB, dB, VB, TB)
    }

    function WB(BB, TB, dB, VB, yB) {
      let pB = BB.textAfter,
        lB = pB.match(/^\s*/)[0].length,
        JB = VB && pB.slice(lB, lB + VB.length) == VB || yB == BB.pos + lB,
        YB = TB ? function(BB) {
          let TB = BB.node,
            dB = TB.childAfter(TB.from),
            VB = TB.lastChild;
          if (!dB) return null;
          let yB = BB.options.simulateBreak,
            pB = BB.state.doc.lineAt(dB.from),
            lB = null == yB || yB <= pB.from ? pB.to : Math.min(pB.to, yB);
          for (let JB = dB.to;;) {
            let BB = TB.childAfter(JB);
            if (!BB || BB == VB) return null;
            if (!BB.type.isSkipped) {
              if (BB.from >= lB) return null;
              let TB = /^ */.exec(pB.text.slice(dB.to - pB.from))[0].length;
              return {
                from: dB.from,
                to: dB.to + TB
              }
            }
            JB = BB.to
          }
        }(BB) : null;
      return YB ? JB ? BB.column(YB.from) : BB.column(YB.to) : BB.baseIndent + (JB ? 0 : BB.unit * dB)
    }
    const hB = BB => BB.baseIndent;

    function CB() {
      let {
        except: BB,
        units: TB = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return dB => {
        let VB = BB && BB.test(dB.textAfter);
        return dB.baseIndent + (VB ? 0 : TB * dB.unit)
      }
    }
    const GB = 200;

    function qB() {
      return pB.i.transactionFilter.of((BB => {
        if (!BB.docChanged || !BB.isUserEvent("input.type") && !BB.isUserEvent("input.complete")) return BB;
        let TB = BB.startState.languageDataAt("indentOnInput", BB.startState.selection.main.head);
        if (!TB.length) return BB;
        let dB = BB.newDoc,
          {
            head: VB
          } = BB.newSelection.main,
          yB = dB.lineAt(VB);
        if (VB > yB.from + GB) return BB;
        let pB = dB.sliceString(yB.from, VB);
        if (!TB.some((BB => BB.test(pB)))) return BB;
        let {
          state: lB
        } = BB, JB = -1, YB = [];
        for (let {
            head: gB
          }
          of lB.selection.ek) {
          let BB = lB.doc.lineAt(gB);
          if (BB.from == JB) continue;
          JB = BB.from;
          let TB = IB(lB, BB.from);
          if (null == TB) continue;
          let dB = /^\s*/.exec(BB.text)[0],
            VB = rB(lB, TB);
          dB != VB && YB.push({
            from: BB.from,
            to: BB.from + dB.length,
            insert: VB
          })
        }
        return YB.length ? [BB, {
          changes: YB,
          sequential: !0
        }] : BB
      }))
    }
    const xB = pB.l.define(),
      jB = new yB.i;

    function AB(BB) {
      let TB = BB.firstChild,
        dB = BB.lastChild;
      return TB && TB.to < dB.from ? {
        from: TB.to,
        to: dB.type.isError ? BB.to : dB.from
      } : null
    }

    function bB(BB) {
      let TB = BB.lastChild;
      return TB && TB.to == BB.to && TB.type.isError
    }

    function nB(BB, TB, dB) {
      for (let VB of BB.facet(xB)) {
        let yB = VB(BB, TB, dB);
        if (yB) return yB
      }
      return function(BB, TB, dB) {
        let VB = uB(BB);
        if (VB.length < dB) return null;
        let yB = null;
        for (let pB = VB.resolveStack(dB, 1); pB; pB = pB.next) {
          let lB = pB.node;
          if (lB.to <= dB || lB.from > dB) continue;
          if (yB && lB.from < TB) break;
          let JB = lB.type.prop(jB);
          if (JB && (lB.to < VB.length - 50 || VB.length == BB.doc.length || !bB(lB))) {
            let VB = JB(lB, BB);
            VB && VB.from <= dB && VB.from >= TB && VB.to > dB && (yB = VB)
          }
        }
        return yB
      }(BB, TB, dB)
    }

    function eB(BB, TB) {
      let dB = TB.mapPos(BB.from, 1),
        VB = TB.mapPos(BB.to, -1);
      return dB >= VB ? void 0 : {
        from: dB,
        to: VB
      }
    }
    const BT = pB.x.define({
        map: eB
      }),
      TT = pB.x.define({
        map: eB
      });

    function dT(BB) {
      let TB = [];
      for (let {
          head: dB
        }
        of BB.state.selection.ek) TB.some((BB => BB.from <= dB && BB.to >= dB)) || TB.push(BB.lineBlockAt(dB));
      return TB
    }
    const VT = pB.A.define({
      create: () => lB.c.none,
      update(BB, TB) {
        TB.isUserEvent("delete") && TB.changes.iterChangedRanges(((TB, dB) => BB = yT(BB, TB, dB))), BB = BB.map(TB.changes);
        for (let dB of TB.effects)
          if (dB.is(BT) && !lT(BB, dB.value.from, dB.value.to)) {
            let {
              preparePlaceholder: VB
            } = TB.state.facet(kT), yB = VB ? lB.c.replace({
              widget: new uT(VB(TB.state, dB.value))
            }) : DT;
            BB = BB.update({
              add: [yB.range(dB.value.from, dB.value.to)]
            })
          } else dB.is(TT) && (BB = BB.update({
            filter: (BB, TB) => dB.value.from != BB || dB.value.to != TB,
            filterFrom: dB.value.from,
            filterTo: dB.value.to
          }));
        return TB.selection && (BB = yT(BB, TB.selection.main.head)), BB
      },
      provide: BB => lB.i.QB.from(BB),
      toJSON(BB, TB) {
        let dB = [];
        return BB.between(0, TB.doc.length, ((BB, TB) => {
          dB.push(BB, TB)
        })), dB
      },
      fromJSON(BB) {
        if (!Array.isArray(BB) || BB.length % 2) throw new RangeError("Invalid JSON for fold state");
        let TB = [];
        for (let dB = 0; dB < BB.length;) {
          let VB = BB[dB++],
            yB = BB[dB++];
          if ("number" != typeof VB || "number" != typeof yB) throw new RangeError("Invalid JSON for fold state");
          TB.push(DT.range(VB, yB))
        }
        return lB.c.set(TB, !0)
      }
    });

    function yT(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : TB,
        VB = !1;
      return BB.between(TB, dB, ((BB, yB) => {
        BB < dB && yB > TB && (VB = !0)
      })), VB ? BB.update({
        filterFrom: TB,
        filterTo: dB,
        filter: (BB, VB) => BB >= dB || VB <= TB
      }) : BB
    }

    function pT(BB, TB, dB) {
      var VB;
      let yB = null;
      return null === (VB = BB.field(VT, !1)) || void 0 === VB || VB.between(TB, dB, ((BB, TB) => {
        (!yB || yB.from > BB) && (yB = {
          from: BB,
          to: TB
        })
      })), yB
    }

    function lT(BB, TB, dB) {
      let VB = !1;
      return BB.between(TB, TB, ((BB, yB) => {
        BB == TB && yB == dB && (VB = !0)
      })), VB
    }

    function JT(BB, TB) {
      return BB.field(VT, !1) ? TB : TB.concat(pB.x.appendConfig.of(LT()))
    }

    function YT(BB, TB) {
      let dB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        VB = BB.state.doc.lineAt(TB.from).number,
        yB = BB.state.doc.lineAt(TB.to).number;
      return lB.i.announce.of(`${BB.state.phrase(dB?"Folded lines":"Unfolded lines")} ${VB} ${BB.state.phrase("to")} ${yB}.`)
    }
    const gT = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: BB => {
          for (let TB of dT(BB)) {
            let dB = nB(BB.state, TB.from, TB.to);
            if (dB) return BB.dispatch({
              effects: JT(BB.state, [BT.of(dB), YT(BB, dB)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: BB => {
          if (!BB.state.field(VT, !1)) return !1;
          let TB = [];
          for (let dB of dT(BB)) {
            let VB = pT(BB.state, dB.from, dB.to);
            VB && TB.push(TT.of(VB), YT(BB, VB, !1))
          }
          return TB.length && BB.dispatch({
            effects: TB
          }), TB.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: BB => {
          let {
            state: TB
          } = BB, dB = [];
          for (let VB = 0; VB < TB.doc.length;) {
            let yB = BB.lineBlockAt(VB),
              pB = nB(TB, yB.from, yB.to);
            pB && dB.push(BT.of(pB)), VB = (pB ? BB.lineBlockAt(pB.to) : yB).to + 1
          }
          return dB.length && BB.dispatch({
            effects: JT(BB.state, dB)
          }), !!dB.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: BB => {
          let TB = BB.state.field(VT, !1);
          if (!TB || !TB.size) return !1;
          let dB = [];
          return TB.between(0, BB.state.doc.length, ((BB, TB) => {
            dB.push(TT.of({
              from: BB,
              to: TB
            }))
          })), BB.dispatch({
            effects: dB
          }), !0
        }
      }],
      oT = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      kT = pB.l.define({
        combine: BB => (0, pB.P)(BB, oT)
      });

    function LT(BB) {
      let TB = [VT, mT];
      return BB && TB.push(kT.of(BB)), TB
    }

    function OT(BB, TB) {
      let {
        state: dB
      } = BB, VB = dB.facet(kT), yB = TB => {
        let dB = BB.lineBlockAt(BB.posAtDOM(TB.target)),
          VB = pT(BB.state, dB.from, dB.to);
        VB && BB.dispatch({
          effects: TT.of(VB)
        }), TB.preventDefault()
      };
      if (VB.placeholderDOM) return VB.placeholderDOM(BB, yB, TB);
      let pB = document.createElement("span");
      return pB.textContent = VB.placeholderText, pB.setAttribute("aria-label", dB.phrase("folded code")), pB.title = dB.phrase("unfold"), pB.className = "cm-foldPlaceholder", pB.onclick = yB, pB
    }
    const DT = lB.c.replace({
      widget: new class extends lB.p {
        toDOM(BB) {
          return OT(BB, null)
        }
      }
    });
    class uT extends lB.p {
      constructor(BB) {
        super(), this.value = BB
      }
      eq(BB) {
        return this.value == BB.value
      }
      toDOM(BB) {
        return OT(BB, this.value)
      }
    }
    const HT = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class ET extends lB.l {
      constructor(BB, TB) {
        super(), this.config = BB, this.open = TB
      }
      eq(BB) {
        return this.config == BB.config && this.open == BB.open
      }
      toDOM(BB) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let TB = document.createElement("span");
        return TB.textContent = this.open ? this.config.openText : this.config.closedText, TB.title = BB.state.phrase(this.open ? "Fold line" : "Unfold line"), TB
      }
    }

    function vT() {
      let BB = {
          ...HT,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        TB = new ET(BB, !0),
        dB = new ET(BB, !1),
        VB = lB.n.fromClass(class {
          constructor(BB) {
            this.from = BB.viewport.from, this.markers = this.buildMarkers(BB)
          }
          update(TB) {
            (TB.docChanged || TB.viewportChanged || TB.startState.facet(zB) != TB.state.facet(zB) || TB.startState.field(VT, !1) != TB.state.field(VT, !1) || uB(TB.startState) != uB(TB.state) || BB.foldingChanged(TB)) && (this.markers = this.buildMarkers(TB.view))
          }
          buildMarkers(BB) {
            let VB = new pB.t;
            for (let yB of BB.viewportLineBlocks) {
              let pB = pT(BB.state, yB.from, yB.to) ? dB : nB(BB.state, yB.from, yB.to) ? TB : null;
              pB && VB.add(yB.from, yB.from, pB)
            }
            return VB.finish()
          }
        }),
        {
          domEventHandlers: yB
        } = BB;
      return [VB, (0, lB.H)({
        class: "cm-foldGutter",
        markers(BB) {
          var TB;
          return (null === (TB = BB.plugin(VB)) || void 0 === TB ? void 0 : TB.markers) || pB.u.empty
        },
        initialSpacer: () => new ET(BB, !1),
        domEventHandlers: {
          ...yB,
          click: (BB, TB, dB) => {
            if (yB.click && yB.click(BB, TB, dB)) return !0;
            let VB = pT(BB.state, TB.from, TB.to);
            if (VB) return BB.dispatch({
              effects: TT.of(VB)
            }), !0;
            let pB = nB(BB.state, TB.from, TB.to);
            return !!pB && (BB.dispatch({
              effects: BT.of(pB)
            }), !0)
          }
        }
      }), LT()]
    }
    const mT = lB.i.baseTheme({
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
    class iT {
      constructor(BB, TB) {
        let dB;

        function VB(BB) {
          let TB = YB.e.newName();
          return (dB || (dB = Object.create(null)))["." + TB] = BB, TB
        }
        this.specs = BB;
        const yB = "string" == typeof TB.all ? TB.all : TB.all ? VB(TB.all) : void 0,
          pB = TB.scope;
        this.scope = pB instanceof LB ? BB => BB.prop(gB) == pB.data : pB ? BB => BB == pB : void 0, this.style = (0, JB.g)(BB.map((BB => ({
          tag: BB.tag,
          class: BB.class || VB(Object.assign({}, BB, {
            tag: null
          }))
        }))), {
          all: yB
        }).style, this.module = dB ? new YB.e(dB) : null, this.themeType = TB.themeType
      }
      static define(BB, TB) {
        return new iT(BB, TB || {})
      }
    }
    const NT = pB.l.define(),
      tT = pB.l.define({
        combine: BB => BB.length ? [BB[0]] : null
      });

    function fT(BB) {
      let TB = BB.facet(NT);
      return TB.length ? TB : BB.facet(tT)
    }

    function sT(BB, TB) {
      let dB, VB = [zT];
      return BB instanceof iT && (BB.module && VB.push(lB.i.styleModule.of(BB.module)), dB = BB.themeType), (null === TB || void 0 === TB ? void 0 : TB.fallback) ? VB.push(tT.of(BB)) : dB ? VB.push(NT.computeN([lB.i.darkTheme], (TB => TB.facet(lB.i.darkTheme) == ("dark" == dB) ? [BB] : []))) : VB.push(NT.of(BB)), VB
    }
    class MT {
      constructor(BB) {
        this.markCache = Object.create(null), this.tree = uB(BB.state), this.QB = this.buildDeco(BB, fT(BB.state)), this.decoratedTo = BB.viewport.to
      }
      update(BB) {
        let TB = uB(BB.state),
          dB = fT(BB.state),
          VB = dB != fT(BB.startState),
          {
            viewport: yB
          } = BB.view,
          pB = BB.changes.mapPos(this.decoratedTo, 1);
        TB.length < yB.to && !VB && TB.type == this.tree.type && pB >= yB.to ? (this.QB = this.QB.map(BB.changes), this.decoratedTo = pB) : (TB != this.tree || BB.viewportChanged || VB) && (this.tree = TB, this.QB = this.buildDeco(BB.view, dB), this.decoratedTo = yB.to)
      }
      buildDeco(BB, TB) {
        if (!TB || !this.tree.length) return lB.c.none;
        let dB = new pB.t;
        for (let {
            from: VB,
            to: yB
          }
          of BB.BBB)(0, JB.b)(this.tree, TB, ((BB, TB, VB) => {
          dB.add(BB, TB, this.markCache[VB] || (this.markCache[VB] = lB.c.mark({
            class: VB
          })))
        }), VB, yB);
        return dB.finish()
      }
    }
    const zT = pB.r.high(lB.n.fromClass(MT, {
        QB: BB => BB.QB
      })),
      wT = iT.define([{
        tag: JB.h.meta,
        color: "#404740"
      }, {
        tag: JB.h.link,
        textDecoration: "underline"
      }, {
        tag: JB.h.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: JB.h.emphasis,
        fontStyle: "italic"
      }, {
        tag: JB.h.strong,
        fontWeight: "bold"
      }, {
        tag: JB.h.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: JB.h.keyword,
        color: "#708"
      }, {
        tag: [JB.h.atom, JB.h.bool, JB.h.url, JB.h.contentSeparator, JB.h.labelName],
        color: "#219"
      }, {
        tag: [JB.h.literal, JB.h.inserted],
        color: "#164"
      }, {
        tag: [JB.h.string, JB.h.deleted],
        color: "#a11"
      }, {
        tag: [JB.h.regexp, JB.h.escape, JB.h.special(JB.h.string)],
        color: "#e40"
      }, {
        tag: JB.h.definition(JB.h.variableName),
        color: "#00f"
      }, {
        tag: JB.h.local(JB.h.variableName),
        color: "#30a"
      }, {
        tag: [JB.h.typeName, JB.h.namespace],
        color: "#085"
      }, {
        tag: JB.h.className,
        color: "#167"
      }, {
        tag: [JB.h.special(JB.h.variableName), JB.h.macroName],
        color: "#256"
      }, {
        tag: JB.h.definition(JB.h.propertyName),
        color: "#00c"
      }, {
        tag: JB.h.comment,
        color: "#940"
      }, {
        tag: JB.h.invalid,
        color: "#f00"
      }]),
      UT = lB.i.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      FT = 1e4,
      KT = "()[]{}",
      rT = pB.l.define({
        combine: BB => (0, pB.P)(BB, {
          afterCursor: !0,
          brackets: KT,
          maxScanDistance: FT,
          renderMatch: ST
        })
      }),
      IT = lB.c.mark({
        class: "cm-matchingBracket"
      }),
      cT = lB.c.mark({
        class: "cm-nonmatchingBracket"
      });

    function ST(BB) {
      let TB = [],
        dB = BB.matched ? IT : cT;
      return TB.push(dB.range(BB.start.from, BB.start.to)), BB.end && TB.push(dB.range(BB.end.from, BB.end.to)), TB
    }

    function PT(BB) {
      let TB = [],
        dB = BB.facet(rT);
      for (let VB of BB.selection.ek) {
        if (!VB.empty) continue;
        let yB = WT(BB, VB.head, -1, dB) || VB.head > 0 && WT(BB, VB.head - 1, 1, dB) || dB.afterCursor && (WT(BB, VB.head, 1, dB) || VB.head < BB.doc.length && WT(BB, VB.head + 1, -1, dB));
        yB && (TB = TB.concat(dB.renderMatch(yB, BB)))
      }
      return lB.c.set(TB, !0)
    }
    const QT = [lB.n.fromClass(class {
      constructor(BB) {
        this.paused = !1, this.QB = PT(BB.state)
      }
      update(BB) {
        (BB.docChanged || BB.selectionSet || this.paused) && (BB.view.composing ? (this.QB = this.QB.map(BB.changes), this.paused = !0) : (this.QB = PT(BB.state), this.paused = !1))
      }
    }, {
      QB: BB => BB.QB
    }), UT];

    function RT() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [rT.of(BB), QT]
    }
    const aT = new yB.i;

    function ZT(BB, TB, dB) {
      let VB = BB.prop(TB < 0 ? yB.i.openedBy : yB.i.closedBy);
      if (VB) return VB;
      if (1 == BB.name.length) {
        let VB = dB.indexOf(BB.name);
        if (VB > -1 && VB % 2 == (TB < 0 ? 1 : 0)) return [dB[VB + TB]]
      }
      return null
    }

    function XT(BB) {
      let TB = BB.type.prop(aT);
      return TB ? TB(BB.node) : BB
    }

    function WT(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        yB = VB.maxScanDistance || FT,
        pB = VB.brackets || KT,
        lB = uB(BB),
        JB = lB.resolveInner(TB, dB);
      for (let YB = JB; YB; YB = YB.parent) {
        let VB = ZT(YB.type, dB, pB);
        if (VB && YB.from < YB.to) {
          let yB = XT(YB);
          if (yB && (dB > 0 ? TB >= yB.from && TB < yB.to : TB > yB.from && TB <= yB.to)) return hT(BB, TB, dB, YB, yB, VB, pB)
        }
      }
      return function(BB, TB, dB, VB, yB, pB, lB) {
        if (dB < 0 ? !TB : TB == BB.doc.length) return null;
        let JB = dB < 0 ? BB.sliceDoc(TB - 1, TB) : BB.sliceDoc(TB, TB + 1),
          YB = lB.indexOf(JB);
        if (YB < 0 || YB % 2 == 0 != dB > 0) return null;
        let gB = {
            from: dB < 0 ? TB - 1 : TB,
            to: dB > 0 ? TB + 1 : TB
          },
          oB = BB.doc.iterRange(TB, dB > 0 ? BB.doc.length : 0),
          kB = 0;
        for (let LB = 0; !oB.next().done && LB <= pB;) {
          let BB = oB.value;
          dB < 0 && (LB += BB.length);
          let pB = TB + LB * dB;
          for (let TB = dB > 0 ? 0 : BB.length - 1, JB = dB > 0 ? BB.length : -1; TB != JB; TB += dB) {
            let JB = lB.indexOf(BB[TB]);
            if (!(JB < 0 || VB.resolveInner(pB + TB, 1).type != yB))
              if (JB % 2 == 0 == dB > 0) kB++;
              else {
                if (1 == kB) return {
                  start: gB,
                  end: {
                    from: pB + TB,
                    to: pB + TB + 1
                  },
                  matched: JB >> 1 == YB >> 1
                };
                kB--
              }
          }
          dB > 0 && (LB += BB.length)
        }
        return oB.done ? {
          start: gB,
          matched: !1
        } : null
      }(BB, TB, dB, lB, JB.type, yB, pB)
    }

    function hT(BB, TB, dB, VB, yB, pB, lB) {
      let JB = VB.parent,
        YB = {
          from: yB.from,
          to: yB.to
        },
        gB = 0,
        oB = null === JB || void 0 === JB ? void 0 : JB.cursor();
      if (oB && (dB < 0 ? oB.childBefore(VB.from) : oB.childAfter(VB.to)))
        do {
          if (dB < 0 ? oB.to <= VB.from : oB.from >= VB.to) {
            if (0 == gB && pB.indexOf(oB.type.name) > -1 && oB.from < oB.to) {
              let BB = XT(oB);
              return {
                start: YB,
                end: BB ? {
                  from: BB.from,
                  to: BB.to
                } : void 0,
                matched: !0
              }
            }
            if (ZT(oB.type, dB, lB)) gB++;
            else if (ZT(oB.type, -dB, lB)) {
              if (0 == gB) {
                let BB = XT(oB);
                return {
                  start: YB,
                  end: BB && BB.from < BB.to ? {
                    from: BB.from,
                    to: BB.to
                  } : void 0,
                  matched: !1
                }
              }
              gB--
            }
          }
        } while (dB < 0 ? oB.prevSibling() : oB.nextSibling());
      return {
        start: YB,
        matched: !1
      }
    }
    const CT = Object.create(null),
      GT = [yB.k.none],
      qT = [],
      xT = Object.create(null),
      jT = Object.create(null);
    for (let [nT, eT] of [
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
      ]) jT[nT] = bT(CT, eT);

    function AT(BB, TB) {
      qT.indexOf(BB) > -1 || (qT.push(BB), console.warn(TB))
    }

    function bT(BB, TB) {
      let dB = [];
      for (let yB of TB.split(" ")) {
        let TB = [];
        for (let dB of yB.split(".")) {
          let VB = BB[dB] || JB.h[dB];
          VB ? "function" == typeof VB ? TB.length ? TB = TB.map(VB) : AT(dB, `Modifier ${dB} used at start of tag`) : TB.length ? AT(dB, `Tag ${dB} used as modifier`) : TB = Array.isArray(VB) ? VB : [VB] : AT(dB, `Unknown highlighting tag ${dB}`)
        }
        for (let BB of TB) dB.push(BB)
      }
      if (!dB.length) return 0;
      let VB = TB.replace(/ /g, "_"),
        pB = VB + " " + dB.map((BB => BB.id)),
        lB = xT[pB];
      if (lB) return lB.id;
      let YB = xT[pB] = yB.k.define({
        id: GT.length,
        name: VB,
        props: [(0, JB.f)({
          [VB]: dB
        })]
      });
      return GT.push(YB), YB.id
    }
    lB.f.RTL, lB.f.LTR
  },
  40092: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => mB,
      h: () => fB
    });
    var VB = dB(40040),
      yB = dB(40036),
      pB = dB(40051);
    class lB {
      constructor(BB, TB, dB) {
        this.from = BB, this.to = TB, this.diagnostic = dB
      }
    }
    class JB {
      constructor(BB, TB, dB) {
        this.diagnostics = BB, this.panel = TB, this.selected = dB
      }
      static init(BB, TB, dB) {
        let pB = dB.facet(NB).markerFilter;
        pB && (BB = pB(BB, dB));
        let lB = BB.slice().sort(((BB, TB) => BB.from - TB.from || BB.to - TB.to)),
          gB = new yB.t,
          oB = [],
          kB = 0,
          LB = dB.doc.iter(),
          OB = 0,
          DB = dB.doc.length;
        for (let yB = 0;;) {
          let BB, TB, dB = yB == lB.length ? null : lB[yB];
          if (!dB && !oB.length) break;
          if (oB.length) BB = kB, TB = oB.reduce(((BB, TB) => Math.min(BB, TB.to)), dB && dB.from > BB ? dB.from : 1e8);
          else {
            if (BB = dB.from, BB > DB) break;
            TB = dB.to, oB.push(dB), yB++
          }
          for (; yB < lB.length;) {
            let dB = lB[yB];
            if (dB.from != BB || !(dB.to > dB.from || dB.to == BB)) {
              TB = Math.min(dB.from, TB);
              break
            }
            oB.push(dB), yB++, TB = Math.min(dB.to, TB)
          }
          TB = Math.min(TB, DB);
          let pB = !1;
          if (oB.some((dB => dB.from == BB && (dB.to == TB || TB == DB))) && (pB = BB == TB, !pB && TB - BB < 10)) {
            let dB = BB - (OB + LB.value.length);
            dB > 0 && (LB.next(dB), OB = BB);
            for (let VB = BB;;) {
              if (VB >= TB) {
                pB = !0;
                break
              }
              if (!LB.lineBreak && OB + LB.value.length > VB) break;
              VB = OB + LB.value.length, OB += LB.value.length, LB.next()
            }
          }
          let JB = cB(oB);
          if (pB) gB.add(BB, BB, VB.c.widget({
            widget: new zB(JB),
            diagnostics: oB.slice()
          }));
          else {
            let dB = oB.reduce(((BB, TB) => TB.markClass ? BB + " " + TB.markClass : BB), "");
            gB.add(BB, TB, VB.c.mark({
              class: "cm-lintRange cm-lintRange-" + JB + dB,
              diagnostics: oB.slice(),
              inclusiveEnd: oB.some((BB => BB.to > TB))
            }))
          }
          if (kB = TB, kB == DB) break;
          for (let VB = 0; VB < oB.length; VB++) oB[VB].to <= kB && oB.splice(VB--, 1)
        }
        let uB = gB.finish();
        return new JB(uB, TB, YB(uB))
      }
    }

    function YB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        VB = null;
      return BB.between(dB, 1e9, ((BB, dB, yB) => {
        let {
          spec: pB
        } = yB;
        if (!(TB && pB.diagnostics.indexOf(TB) < 0))
          if (VB) {
            if (pB.diagnostics.indexOf(VB.diagnostic) < 0) return !1;
            VB = new lB(VB.from, dB, VB.diagnostic)
          } else VB = new lB(BB, dB, TB || pB.diagnostics[0])
      })), VB
    }

    function gB(BB, TB) {
      let dB = TB.pos,
        VB = TB.end || dB,
        yB = BB.state.facet(NB).hideOn(BB, dB, VB);
      if (null != yB) return yB;
      let pB = BB.startState.doc.lineAt(TB.pos);
      return !(!BB.effects.some((BB => BB.is(kB))) && !BB.changes.touchesRange(pB.from, Math.max(pB.to, VB)))
    }

    function oB(BB, TB) {
      return BB.field(DB, !1) ? TB : TB.concat(yB.x.appendConfig.of(SB))
    }
    const kB = yB.x.define(),
      LB = yB.x.define(),
      OB = yB.x.define(),
      DB = yB.A.define({
        create: () => new JB(VB.c.none, null, null),
        update(BB, TB) {
          if (TB.docChanged && BB.diagnostics.size) {
            let dB = BB.diagnostics.map(TB.changes),
              VB = null,
              yB = BB.panel;
            if (BB.selected) {
              let yB = TB.changes.mapPos(BB.selected.from, 1);
              VB = YB(dB, BB.selected.diagnostic, yB) || YB(dB, null, yB)
            }!dB.size && yB && TB.state.facet(NB).autoPanel && (yB = null), BB = new JB(dB, yB, VB)
          }
          for (let dB of TB.effects)
            if (dB.is(kB)) {
              let VB = TB.state.facet(NB).autoPanel ? dB.value.length ? UB.open : null : BB.panel;
              BB = JB.init(dB.value, VB, TB.state)
            } else dB.is(LB) ? BB = new JB(BB.diagnostics, dB.value ? UB.open : null, BB.selected) : dB.is(OB) && (BB = new JB(BB.diagnostics, BB.panel, dB.value));
          return BB
        },
        provide: BB => [VB.kb.from(BB, (BB => BB.panel)), VB.i.QB.from(BB, (BB => BB.diagnostics))]
      });
    const uB = VB.c.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function HB(BB, TB, dB) {
      let VB, {
          diagnostics: yB
        } = BB.state.field(DB),
        pB = -1,
        lB = -1;
      yB.between(TB - (dB < 0 ? 1 : 0), TB + (dB > 0 ? 1 : 0), ((BB, yB, JB) => {
        let {
          spec: YB
        } = JB;
        if (TB >= BB && TB <= yB && (BB == yB || (TB > BB || dB > 0) && (TB < yB || dB < 0))) return VB = YB.diagnostics, pB = BB, lB = yB, !1
      }));
      let JB = BB.state.facet(NB).tooltipFilter;
      return VB && JB && (VB = JB(VB, BB.state)), VB ? {
        pos: pB,
        end: lB,
        above: BB.state.doc.lineAt(pB).to < lB,
        create: () => ({
          dom: EB(BB, VB)
        })
      } : null
    }

    function EB(BB, TB) {
      return (0, pB.e)("ul", {
        class: "cm-tooltip-lint"
      }, TB.map((TB => MB(BB, TB, !1))))
    }
    const vB = BB => {
        let TB = BB.state.field(DB, !1);
        return !(!TB || !TB.panel) && (BB.dispatch({
          effects: LB.of(!1)
        }), !0)
      },
      mB = [{
        key: "Mod-Shift-m",
        run: BB => {
          let TB = BB.state.field(DB, !1);
          TB && TB.panel || BB.dispatch({
            effects: oB(BB.state, [LB.of(!0)])
          });
          let dB = (0, VB.z)(BB, UB.open);
          return dB && dB.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: BB => {
          let TB = BB.state.field(DB, !1);
          if (!TB) return !1;
          let dB = BB.state.selection.main,
            VB = YB(TB.diagnostics, null, dB.to + 1);
          return !(!VB && (VB = YB(TB.diagnostics, null, 0), !VB || VB.from == dB.from && VB.to == dB.to)) && (BB.dispatch({
            selection: {
              anchor: VB.from,
              head: VB.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      iB = VB.n.fromClass(class {
        constructor(BB) {
          this.view = BB, this.timeout = -1, this.set = !0;
          let {
            delay: TB
          } = BB.state.facet(NB);
          this.lintTime = Date.now() + TB, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, TB)
        }
        run() {
          clearTimeout(this.timeout);
          let BB = Date.now();
          if (BB < this.lintTime - 10) this.timeout = setTimeout(this.run, this.lintTime - BB);
          else {
            this.set = !1;
            let {
              state: BB
            } = this.view, {
              sources: TB
            } = BB.facet(NB);
            TB.length && function(BB, TB, dB) {
              let VB = [],
                yB = -1;
              for (let pB of BB) pB.then((dB => {
                VB.push(dB), clearTimeout(yB), VB.length == BB.length ? TB(VB) : yB = setTimeout((() => TB(VB)), 200)
              }), dB)
            }(TB.map((BB => Promise.resolve(BB(this.view)))), (TB => {
              this.view.state.doc == BB.doc && this.view.dispatch(function(BB, TB) {
                return {
                  effects: oB(BB, [kB.of(TB)])
                }
              }(this.view.state, TB.reduce(((BB, TB) => BB.concat(TB)))))
            }), (BB => {
              (0, VB.W)(this.view.state, BB)
            }))
          }
        }
        update(BB) {
          let TB = BB.state.facet(NB);
          (BB.docChanged || TB != BB.startState.facet(NB) || TB.needsRefresh && TB.needsRefresh(BB)) && (this.lintTime = Date.now() + TB.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, TB.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const NB = yB.l.define({
      combine: BB => ({
        sources: BB.map((BB => BB.source)).filter((BB => null != BB)),
        ...(0, yB.P)(BB.map((BB => BB.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: tB,
          tooltipFilter: tB,
          needsRefresh: (BB, TB) => BB ? TB ? dB => BB(dB) || TB(dB) : BB : TB,
          hideOn: (BB, TB) => BB ? TB ? (dB, VB, yB) => BB(dB, VB, yB) || TB(dB, VB, yB) : BB : TB,
          autoPanel: (BB, TB) => BB || TB
        })
      })
    });

    function tB(BB, TB) {
      return BB ? TB ? (dB, VB) => TB(BB(dB, VB), VB) : BB : TB
    }

    function fB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [NB.of({
        source: BB,
        config: TB
      }), iB, SB]
    }

    function sB(BB) {
      let TB = [];
      if (BB) BB: for (let {
          name: dB
        }
        of BB) {
        for (let BB = 0; BB < dB.length; BB++) {
          let VB = dB[BB];
          if (/[a-zA-Z]/.test(VB) && !TB.some((BB => BB.toLowerCase() == VB.toLowerCase()))) {
            TB.push(VB);
            continue BB
          }
        }
        TB.push("")
      }
      return TB
    }

    function MB(BB, TB, dB) {
      var VB;
      let yB = dB ? sB(TB.actions) : [];
      return (0, pB.e)("li", {
        class: "cm-diagnostic cm-diagnostic-" + TB.severity
      }, (0, pB.e)("span", {
        class: "cm-diagnosticText"
      }, TB.renderMessage ? TB.renderMessage(BB) : TB.message), null === (VB = TB.actions) || void 0 === VB ? void 0 : VB.map(((dB, VB) => {
        let lB = !1,
          JB = VB => {
            if (VB.preventDefault(), lB) return;
            lB = !0;
            let yB = YB(BB.state.field(DB).diagnostics, TB);
            yB && dB.apply(BB, yB.from, yB.to)
          },
          {
            name: gB
          } = dB,
          oB = yB[VB] ? gB.indexOf(yB[VB]) : -1,
          kB = oB < 0 ? gB : [gB.slice(0, oB), (0, pB.e)("u", gB.slice(oB, oB + 1)), gB.slice(oB + 1)],
          LB = dB.markClass ? " " + dB.markClass : "";
        return (0, pB.e)("button", {
          type: "button",
          class: "cm-diagnosticAction" + LB,
          onclick: JB,
          onmousedown: JB,
          "aria-label": ` Action: ${gB}${oB<0?"":` (access key "${yB[VB]})"`}.`
        }, kB)
      })), TB.source && (0, pB.e)("div", {
        class: "cm-diagnosticSource"
      }, TB.source))
    }
    class zB extends VB.p {
      constructor(BB) {
        super(), this.sev = BB
      }
      eq(BB) {
        return BB.sev == this.sev
      }
      toDOM() {
        return (0, pB.e)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class wB {
      constructor(BB, TB) {
        this.diagnostic = TB, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = MB(BB, TB, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class UB {
      constructor(BB) {
        this.view = BB, this.items = [];
        this.list = (0, pB.e)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: TB => {
            if (!(TB.ctrlKey || TB.altKey || TB.metaKey)) {
              if (27 == TB.keyCode) vB(this.view), this.view.focus();
              else if (38 == TB.keyCode || 33 == TB.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == TB.keyCode || 34 == TB.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == TB.keyCode) this.moveSelection(0);
              else if (35 == TB.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == TB.keyCode) this.view.focus();
              else {
                if (!(TB.keyCode >= 65 && TB.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: dB
                  } = this.items[this.selectedIndex], VB = sB(dB.actions);
                  for (let yB = 0; yB < VB.length; yB++)
                    if (VB[yB].toUpperCase().charCodeAt(0) == TB.keyCode) {
                      let TB = YB(this.view.state.field(DB).diagnostics, dB);
                      TB && dB.actions[yB].apply(BB, TB.from, TB.to)
                    }
                }
              }
              TB.preventDefault()
            }
          },
          onclick: BB => {
            for (let TB = 0; TB < this.items.length; TB++) this.items[TB].dom.contains(BB.target) && this.moveSelection(TB)
          }
        }), this.dom = (0, pB.e)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, pB.e)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => vB(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let BB = this.view.state.field(DB).selected;
        if (!BB) return -1;
        for (let TB = 0; TB < this.items.length; TB++)
          if (this.items[TB].diagnostic == BB.diagnostic) return TB;
        return -1
      }
      update() {
        let {
          diagnostics: BB,
          selected: TB
        } = this.view.state.field(DB), dB = 0, VB = !1, yB = null, pB = new Set;
        for (BB.between(0, this.view.state.doc.length, ((BB, lB, JB) => {
            let {
              spec: YB
            } = JB;
            for (let gB of YB.diagnostics) {
              if (pB.has(gB)) continue;
              pB.add(gB);
              let BB, lB = -1;
              for (let TB = dB; TB < this.items.length; TB++)
                if (this.items[TB].diagnostic == gB) {
                  lB = TB;
                  break
                } lB < 0 ? (BB = new wB(this.view, gB), this.items.splice(dB, 0, BB), VB = !0) : (BB = this.items[lB], lB > dB && (this.items.splice(dB, lB - dB), VB = !0)), TB && BB.diagnostic == TB.diagnostic ? BB.dom.hasAttribute("aria-selected") || (BB.dom.setAttribute("aria-selected", "true"), yB = BB) : BB.dom.hasAttribute("aria-selected") && BB.dom.removeAttribute("aria-selected"), dB++
            }
          })); dB < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) VB = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new wB(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), VB = !0), yB ? (this.list.setAttribute("aria-activedescendant", yB.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: yB.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: BB => {
            let {
              sel: TB,
              panel: dB
            } = BB, VB = dB.height / this.list.offsetHeight;
            TB.top < dB.top ? this.list.scrollTop -= (dB.top - TB.top) / VB : TB.bottom > dB.bottom && (this.list.scrollTop += (TB.bottom - dB.bottom) / VB)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), VB && this.sync()
      }
      sync() {
        let BB = this.list.firstChild;

        function TB() {
          let TB = BB;
          BB = TB.nextSibling, TB.remove()
        }
        for (let dB of this.items)
          if (dB.dom.parentNode == this.list) {
            for (; BB != dB.dom;) TB();
            BB = dB.dom.nextSibling
          } else this.list.insertBefore(dB.dom, BB);
        for (; BB;) TB()
      }
      moveSelection(BB) {
        if (this.selectedIndex < 0) return;
        let TB = YB(this.view.state.field(DB).diagnostics, this.items[BB].diagnostic);
        TB && this.view.dispatch({
          selection: {
            anchor: TB.from,
            head: TB.to
          },
          scrollIntoView: !0,
          effects: OB.of(TB)
        })
      }
      static open(BB) {
        return new UB(BB)
      }
    }

    function FB(BB) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(BB)}</svg>')`
    }

    function KB(BB) {
      return FB(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${BB}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const rB = VB.i.baseTheme({
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
        backgroundImage: KB("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: KB("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: KB("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: KB("#66d")
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

    function IB(BB) {
      return "error" == BB ? 4 : "warning" == BB ? 3 : "info" == BB ? 2 : 1
    }

    function cB(BB) {
      let TB = "hint",
        dB = 1;
      for (let VB of BB) {
        let BB = IB(VB.severity);
        BB > dB && (dB = BB, TB = VB.severity)
      }
      return TB
    }
    VB.l;
    const SB = [DB, VB.i.QB.compute([DB], (BB => {
      let {
        selected: TB,
        panel: dB
      } = BB.field(DB);
      return TB && dB && TB.from != TB.to ? VB.c.set([uB.range(TB.from, TB.to)]) : VB.c.none
    })), (0, VB.R)(HB, {
      hideOn: gB
    }), rB]
  },
  40084: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => nB,
      e: () => EB,
      f: () => eB
    });
    var VB = dB(40040),
      yB = dB(40036),
      pB = dB(40051);
    const lB = "function" == typeof String.prototype.normalize ? BB => BB.normalize("NFKD") : BB => BB;
    class JB {
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.length,
          yB = arguments.length > 4 ? arguments[4] : void 0,
          pB = arguments.length > 5 ? arguments[5] : void 0;
        this.test = pB, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = BB.iterRange(dB, VB), this.bufferStart = dB, this.normalize = yB ? BB => yB(lB(BB)) : lB, this.query = this.normalize(TB)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, yB.K)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let BB = this.peek();
          if (BB < 0) return this.done = !0, this;
          let TB = (0, yB.Y)(BB),
            dB = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, yB.M)(BB);
          let VB = this.normalize(TB);
          if (VB.length)
            for (let yB = 0, pB = dB;; yB++) {
              let BB = VB.charCodeAt(yB),
                lB = this.match(BB, pB, this.bufferPos + this.bufferStart);
              if (yB == VB.length - 1) {
                if (lB) return this.value = lB, this;
                break
              }
              pB == dB && yB < TB.length && TB.charCodeAt(yB) == BB && pB++
            }
        }
      }
      match(BB, TB, dB) {
        let VB = null;
        for (let yB = 0; yB < this.matches.length; yB += 2) {
          let TB = this.matches[yB],
            pB = !1;
          this.query.charCodeAt(TB) == BB && (TB == this.query.length - 1 ? VB = {
            from: this.matches[yB + 1],
            to: dB
          } : (this.matches[yB]++, pB = !0)), pB || (this.matches.splice(yB, 2), yB -= 2)
        }
        return this.query.charCodeAt(0) == BB && (1 == this.query.length ? VB = {
          from: TB,
          to: dB
        } : this.matches.push(1, TB)), VB && this.test && !this.test(VB.from, VB.to, this.buffer, this.bufferStart) && (VB = null), VB
      }
    }
    "undefined" != typeof Symbol && (JB.prototype[Symbol.iterator] = function() {
      return this
    });
    const YB = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      gB = "gm" + (null == /x/.unicode ? "" : "u");
    class oB {
      constructor(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : BB.length;
        if (this.text = BB, this.to = yB, this.curLine = "", this.done = !1, this.value = YB, /\\[sWDnr]|\n|\r|\[\^/.test(TB)) return new OB(BB, TB, dB, VB, yB);
        this.re = new RegExp(TB, gB + ((null === dB || void 0 === dB ? void 0 : dB.ignoreCase) ? "i" : "")), this.test = null === dB || void 0 === dB ? void 0 : dB.test, this.iter = BB.iter();
        let pB = BB.lineAt(VB);
        this.curLineStart = pB.from, this.matchPos = DB(BB, VB), this.getLine(this.curLineStart)
      }
      getLine(BB) {
        this.iter.next(BB), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next())
      }
      nextLine() {
        this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0)
      }
      next() {
        for (let BB = this.matchPos - this.curLineStart;;) {
          this.re.lastIndex = BB;
          let TB = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (TB) {
            let dB = this.curLineStart + TB.index,
              VB = dB + TB[0].length;
            if (this.matchPos = DB(this.text, VB + (dB == VB ? 1 : 0)), dB == this.curLineStart + this.curLine.length && this.nextLine(), (dB < VB || dB > this.value.to) && (!this.test || this.test(dB, VB, TB))) return this.value = {
              from: dB,
              to: VB,
              match: TB
            }, this;
            BB = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), BB = 0
          }
        }
      }
    }
    const kB = new WeakMap;
    class LB {
      constructor(BB, TB) {
        this.from = BB, this.text = TB
      }
      get to() {
        return this.from + this.text.length
      }
      static get(BB, TB, dB) {
        let VB = kB.get(BB);
        if (!VB || VB.from >= dB || VB.to <= TB) {
          let VB = new LB(TB, BB.sliceString(TB, dB));
          return kB.set(BB, VB), VB
        }
        if (VB.from == TB && VB.to == dB) return VB;
        let {
          text: yB,
          from: pB
        } = VB;
        return pB > TB && (yB = BB.sliceString(TB, pB) + yB, pB = TB), VB.to < dB && (yB += BB.sliceString(VB.to, dB)), kB.set(BB, new LB(pB, yB)), new LB(TB, yB.slice(TB - pB, dB - pB))
      }
    }
    class OB {
      constructor(BB, TB, dB, VB, yB) {
        this.text = BB, this.to = yB, this.done = !1, this.value = YB, this.matchPos = DB(BB, VB), this.re = new RegExp(TB, gB + ((null === dB || void 0 === dB ? void 0 : dB.ignoreCase) ? "i" : "")), this.test = null === dB || void 0 === dB ? void 0 : dB.test, this.flat = LB.get(BB, VB, this.chunkEnd(VB + 5e3))
      }
      chunkEnd(BB) {
        return BB >= this.to ? this.to : this.text.lineAt(BB).to
      }
      next() {
        for (;;) {
          let BB = this.re.lastIndex = this.matchPos - this.flat.from,
            TB = this.re.exec(this.flat.text);
          if (TB && !TB[0] && TB.index == BB && (this.re.lastIndex = BB + 1, TB = this.re.exec(this.flat.text)), TB) {
            let BB = this.flat.from + TB.index,
              dB = BB + TB[0].length;
            if ((this.flat.to >= this.to || TB.index + TB[0].length <= this.flat.text.length - 10) && (!this.test || this.test(BB, dB, TB))) return this.value = {
              from: BB,
              to: dB,
              match: TB
            }, this.matchPos = DB(this.text, dB + (BB == dB ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = LB.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function DB(BB, TB) {
      if (TB >= BB.length) return TB;
      let dB, VB = BB.lineAt(TB);
      for (; TB < VB.to && (dB = VB.text.charCodeAt(TB - VB.from)) >= 56320 && dB < 57344;) TB++;
      return TB
    }
    "undefined" != typeof Symbol && (oB.prototype[Symbol.iterator] = OB.prototype[Symbol.iterator] = function() {
      return this
    });
    const uB = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      HB = yB.l.define({
        combine: BB => (0, yB.P)(BB, uB, {
          highlightWordAroundCursor: (BB, TB) => BB || TB,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function EB(BB) {
      let TB = [tB, NB];
      return BB && TB.push(HB.of(BB)), TB
    }
    const vB = VB.c.mark({
        class: "cm-selectionMatch"
      }),
      mB = VB.c.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function iB(BB, TB, dB, VB) {
      return (0 == dB || BB(TB.sliceDoc(dB - 1, dB)) != yB.e.Word) && (VB == TB.doc.length || BB(TB.sliceDoc(VB, VB + 1)) != yB.e.Word)
    }
    const NB = VB.n.fromClass(class {
        constructor(BB) {
          this.QB = this.getDeco(BB)
        }
        update(BB) {
          (BB.selectionSet || BB.docChanged || BB.viewportChanged) && (this.QB = this.getDeco(BB.view))
        }
        getDeco(BB) {
          let TB = BB.state.facet(HB),
            {
              state: dB
            } = BB,
            pB = dB.selection;
          if (pB.ek.length > 1) return VB.c.none;
          let lB, YB = pB.main,
            gB = null;
          if (YB.empty) {
            if (!TB.highlightWordAroundCursor) return VB.c.none;
            let BB = dB.wordAt(YB.head);
            if (!BB) return VB.c.none;
            gB = dB.charCategorizer(YB.head), lB = dB.sliceDoc(BB.from, BB.to)
          } else {
            let BB = YB.to - YB.from;
            if (BB < TB.minSelectionLength || BB > 200) return VB.c.none;
            if (TB.wholeWords) {
              if (lB = dB.sliceDoc(YB.from, YB.to), gB = dB.charCategorizer(YB.head), !iB(gB, dB, YB.from, YB.to) || ! function(BB, TB, dB, VB) {
                  return BB(TB.sliceDoc(dB, dB + 1)) == yB.e.Word && BB(TB.sliceDoc(VB - 1, VB)) == yB.e.Word
                }(gB, dB, YB.from, YB.to)) return VB.c.none
            } else if (lB = dB.sliceDoc(YB.from, YB.to), !lB) return VB.c.none
          }
          let oB = [];
          for (let yB of BB.BBB) {
            let BB = new JB(dB.doc, lB, yB.from, yB.to);
            for (; !BB.next().done;) {
              let {
                from: yB,
                to: pB
              } = BB.value;
              if ((!gB || iB(gB, dB, yB, pB)) && (YB.empty && yB <= YB.from && pB >= YB.to ? oB.push(mB.range(yB, pB)) : (yB >= YB.to || pB <= YB.from) && oB.push(vB.range(yB, pB)), oB.length > TB.maxMatches)) return VB.c.none
            }
          }
          return VB.c.set(oB)
        }
      }, {
        QB: BB => BB.QB
      }),
      tB = VB.i.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const fB = yB.l.define({
      combine: BB => (0, yB.P)(BB, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: BB => new BT(BB),
        scrollToMatch: BB => VB.i.scrollIntoView(BB)
      })
    });
    class sB {
      constructor(BB) {
        this.search = BB.search, this.caseSensitive = !!BB.caseSensitive, this.literal = !!BB.literal, this.regexp = !!BB.regexp, this.replace = BB.replace || "", this.valid = !!this.search && (!this.regexp || function(BB) {
          try {
            return new RegExp(BB, gB), !0
          } catch (TB) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!BB.wholeWord, this.test = BB.test
      }
      unquote(BB) {
        return this.literal ? BB : BB.replace(/\\([nrt\\])/g, ((BB, TB) => "n" == TB ? "\n" : "r" == TB ? "\r" : "t" == TB ? "\t" : "\\"))
      }
      eq(BB) {
        return this.search == BB.search && this.replace == BB.replace && this.caseSensitive == BB.caseSensitive && this.regexp == BB.regexp && this.wholeWord == BB.wholeWord && this.test == BB.test
      }
      create() {
        return this.regexp ? new rB(this) : new wB(this)
      }
      getCursor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          dB = arguments.length > 2 ? arguments[2] : void 0,
          VB = BB.doc ? BB : yB.i.create({
            doc: BB
          });
        return null == dB && (dB = VB.doc.length), this.regexp ? UB(this, VB, TB, dB) : zB(this, VB, TB, dB)
      }
    }
    class MB {
      constructor(BB) {
        this.spec = BB
      }
    }

    function zB(BB, TB, dB, VB) {
      let pB;
      var lB, YB;
      return BB.wholeWord && (lB = TB.doc, YB = TB.charCategorizer(TB.selection.main.head), pB = (BB, TB, dB, VB) => ((VB > BB || VB + dB.length < TB) && (VB = Math.max(0, BB - 2), dB = lB.sliceString(VB, Math.min(lB.length, TB + 2))), (YB(FB(dB, BB - VB)) != yB.e.Word || YB(KB(dB, BB - VB)) != yB.e.Word) && (YB(KB(dB, TB - VB)) != yB.e.Word || YB(FB(dB, TB - VB)) != yB.e.Word))), BB.test && (pB = function(BB, TB, dB) {
        return (VB, yB, pB, lB) => {
          if (dB && !dB(VB, yB, pB, lB)) return !1;
          let JB = VB >= lB && yB <= lB + pB.length ? pB.slice(VB - lB, yB - lB) : TB.doc.sliceString(VB, yB);
          return BB(JB, TB, VB, yB)
        }
      }(BB.test, TB, pB)), new JB(TB.doc, BB.unquoted, dB, VB, BB.caseSensitive ? void 0 : BB => BB.toLowerCase(), pB)
    }
    class wB extends MB {
      constructor(BB) {
        super(BB)
      }
      nextMatch(BB, TB, dB) {
        let VB = zB(this.spec, BB, dB, BB.doc.length).nextOverlapping();
        if (VB.done) {
          let dB = Math.min(BB.doc.length, TB + this.spec.unquoted.length);
          VB = zB(this.spec, BB, 0, dB).nextOverlapping()
        }
        return VB.done || VB.value.from == TB && VB.value.to == dB ? null : VB.value
      }
      prevMatchInRange(BB, TB, dB) {
        for (let VB = dB;;) {
          let dB = Math.max(TB, VB - 1e4 - this.spec.unquoted.length),
            yB = zB(this.spec, BB, dB, VB),
            pB = null;
          for (; !yB.nextOverlapping().done;) pB = yB.value;
          if (pB) return pB;
          if (dB == TB) return null;
          VB -= 1e4
        }
      }
      prevMatch(BB, TB, dB) {
        let VB = this.prevMatchInRange(BB, 0, TB);
        return VB || (VB = this.prevMatchInRange(BB, Math.max(0, dB - this.spec.unquoted.length), BB.doc.length)), !VB || VB.from == TB && VB.to == dB ? null : VB
      }
      getReplacement(BB) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(BB, TB) {
        let dB = zB(this.spec, BB, 0, BB.doc.length),
          VB = [];
        for (; !dB.next().done;) {
          if (VB.length >= TB) return null;
          VB.push(dB.value)
        }
        return VB
      }
      highlight(BB, TB, dB, VB) {
        let yB = zB(this.spec, BB, Math.max(0, TB - this.spec.unquoted.length), Math.min(dB + this.spec.unquoted.length, BB.doc.length));
        for (; !yB.next().done;) VB(yB.value.from, yB.value.to)
      }
    }

    function UB(BB, TB, dB, VB) {
      let pB;
      var lB;
      return BB.wholeWord && (lB = TB.charCategorizer(TB.selection.main.head), pB = (BB, TB, dB) => !dB[0].length || (lB(FB(dB.input, dB.index)) != yB.e.Word || lB(KB(dB.input, dB.index)) != yB.e.Word) && (lB(KB(dB.input, dB.index + dB[0].length)) != yB.e.Word || lB(FB(dB.input, dB.index + dB[0].length)) != yB.e.Word)), BB.test && (pB = function(BB, TB, dB) {
        return (VB, yB, pB) => (!dB || dB(VB, yB, pB)) && BB(pB[0], TB, VB, yB)
      }(BB.test, TB, pB)), new oB(TB.doc, BB.search, {
        ignoreCase: !BB.caseSensitive,
        test: pB
      }, dB, VB)
    }

    function FB(BB, TB) {
      return BB.slice((0, yB.S)(BB, TB, !1), TB)
    }

    function KB(BB, TB) {
      return BB.slice(TB, (0, yB.S)(BB, TB))
    }
    class rB extends MB {
      nextMatch(BB, TB, dB) {
        let VB = UB(this.spec, BB, dB, BB.doc.length).next();
        return VB.done && (VB = UB(this.spec, BB, 0, TB).next()), VB.done ? null : VB.value
      }
      prevMatchInRange(BB, TB, dB) {
        for (let VB = 1;; VB++) {
          let yB = Math.max(TB, dB - 1e4 * VB),
            pB = UB(this.spec, BB, yB, dB),
            lB = null;
          for (; !pB.next().done;) lB = pB.value;
          if (lB && (yB == TB || lB.from > yB + 10)) return lB;
          if (yB == TB) return null
        }
      }
      prevMatch(BB, TB, dB) {
        return this.prevMatchInRange(BB, 0, TB) || this.prevMatchInRange(BB, dB, BB.doc.length)
      }
      getReplacement(BB) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((TB, dB) => {
          if ("&" == dB) return BB.match[0];
          if ("$" == dB) return "$";
          for (let VB = dB.length; VB > 0; VB--) {
            let TB = +dB.slice(0, VB);
            if (TB > 0 && TB < BB.match.length) return BB.match[TB] + dB.slice(VB)
          }
          return TB
        }))
      }
      matchAll(BB, TB) {
        let dB = UB(this.spec, BB, 0, BB.doc.length),
          VB = [];
        for (; !dB.next().done;) {
          if (VB.length >= TB) return null;
          VB.push(dB.value)
        }
        return VB
      }
      highlight(BB, TB, dB, VB) {
        let yB = UB(this.spec, BB, Math.max(0, TB - 250), Math.min(dB + 250, BB.doc.length));
        for (; !yB.next().done;) VB(yB.value.from, yB.value.to)
      }
    }
    const IB = yB.x.define(),
      cB = yB.x.define(),
      SB = yB.A.define({
        create: BB => new PB(xB(BB).create(), null),
        update(BB, TB) {
          for (let dB of TB.effects) dB.is(IB) ? BB = new PB(dB.value.create(), BB.panel) : dB.is(cB) && (BB = new PB(BB.query, dB.value ? qB : null));
          return BB
        },
        provide: BB => VB.kb.from(BB, (BB => BB.panel))
      });
    class PB {
      constructor(BB, TB) {
        this.query = BB, this.panel = TB
      }
    }
    const QB = VB.c.mark({
        class: "cm-searchMatch"
      }),
      RB = VB.c.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      aB = VB.n.fromClass(class {
        constructor(BB) {
          this.view = BB, this.QB = this.highlight(BB.state.field(SB))
        }
        update(BB) {
          let TB = BB.state.field(SB);
          (TB != BB.startState.field(SB) || BB.docChanged || BB.selectionSet || BB.viewportChanged) && (this.QB = this.highlight(TB))
        }
        highlight(BB) {
          let {
            query: TB,
            panel: dB
          } = BB;
          if (!dB || !TB.spec.valid) return VB.c.none;
          let {
            view: pB
          } = this, lB = new yB.t;
          for (let VB = 0, yB = pB.BBB, JB = yB.length; VB < JB; VB++) {
            let {
              from: BB,
              to: dB
            } = yB[VB];
            for (; VB < JB - 1 && dB > yB[VB + 1].from - 500;) dB = yB[++VB].to;
            TB.highlight(pB.state, BB, dB, ((BB, TB) => {
              let dB = pB.state.selection.ek.some((dB => dB.from == BB && dB.to == TB));
              lB.add(BB, TB, dB ? RB : QB)
            }))
          }
          return lB.finish()
        }
      }, {
        QB: BB => BB.QB
      });

    function ZB(BB) {
      return TB => {
        let dB = TB.state.field(SB, !1);
        return dB && dB.query.spec.valid ? BB(TB, dB) : bB(TB)
      }
    }
    const XB = ZB(((BB, TB) => {
        let {
          query: dB
        } = TB, {
          to: VB
        } = BB.state.selection.main, pB = dB.nextMatch(BB.state, VB, VB);
        if (!pB) return !1;
        let lB = yB.h.single(pB.from, pB.to),
          JB = BB.state.facet(fB);
        return BB.dispatch({
          selection: lB,
          effects: [yT(BB, pB), JB.scrollToMatch(lB.main, BB)],
          userEvent: "select.search"
        }), AB(BB), !0
      })),
      WB = ZB(((BB, TB) => {
        let {
          query: dB
        } = TB, {
          state: VB
        } = BB, {
          from: pB
        } = VB.selection.main, lB = dB.prevMatch(VB, pB, pB);
        if (!lB) return !1;
        let JB = yB.h.single(lB.from, lB.to),
          YB = BB.state.facet(fB);
        return BB.dispatch({
          selection: JB,
          effects: [yT(BB, lB), YB.scrollToMatch(JB.main, BB)],
          userEvent: "select.search"
        }), AB(BB), !0
      })),
      hB = ZB(((BB, TB) => {
        let {
          query: dB
        } = TB, VB = dB.matchAll(BB.state, 1e3);
        return !(!VB || !VB.length) && (BB.dispatch({
          selection: yB.h.create(VB.map((BB => yB.h.range(BB.from, BB.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      CB = ZB(((BB, TB) => {
        let {
          query: dB
        } = TB, {
          state: pB
        } = BB, {
          from: lB,
          to: JB
        } = pB.selection.main;
        if (pB.readOnly) return !1;
        let YB = dB.nextMatch(pB, lB, lB);
        if (!YB) return !1;
        let gB, oB, kB = YB,
          LB = [],
          OB = [];
        kB.from == lB && kB.to == JB && (oB = pB.toText(dB.getReplacement(kB)), LB.push({
          from: kB.from,
          to: kB.to,
          insert: oB
        }), kB = dB.nextMatch(pB, kB.from, kB.to), OB.push(VB.i.announce.of(pB.phrase("replaced match on line $", pB.doc.lineAt(lB).number) + ".")));
        let DB = BB.state.changes(LB);
        return kB && (gB = yB.h.single(kB.from, kB.to).map(DB), OB.push(yT(BB, kB)), OB.push(pB.facet(fB).scrollToMatch(gB.main, BB))), BB.dispatch({
          changes: DB,
          selection: gB,
          effects: OB,
          userEvent: "input.replace"
        }), !0
      })),
      GB = ZB(((BB, TB) => {
        let {
          query: dB
        } = TB;
        if (BB.state.readOnly) return !1;
        let yB = dB.matchAll(BB.state, 1e9).map((BB => {
          let {
            from: TB,
            to: VB
          } = BB;
          return {
            from: TB,
            to: VB,
            insert: dB.getReplacement(BB)
          }
        }));
        if (!yB.length) return !1;
        let pB = BB.state.phrase("replaced $ matches", yB.length) + ".";
        return BB.dispatch({
          changes: yB,
          effects: VB.i.announce.of(pB),
          userEvent: "input.replace.all"
        }), !0
      }));

    function qB(BB) {
      return BB.state.facet(fB).createPanel(BB)
    }

    function xB(BB, TB) {
      var dB, VB, yB, pB, lB;
      let JB = BB.selection.main,
        YB = JB.empty || JB.to > JB.from + 100 ? "" : BB.sliceDoc(JB.from, JB.to);
      if (TB && !YB) return TB;
      let gB = BB.facet(fB);
      return new sB({
        search: (null !== (dB = null === TB || void 0 === TB ? void 0 : TB.literal) && void 0 !== dB ? dB : gB.literal) ? YB : YB.replace(/\n/g, "\\n"),
        caseSensitive: null !== (VB = null === TB || void 0 === TB ? void 0 : TB.caseSensitive) && void 0 !== VB ? VB : gB.caseSensitive,
        literal: null !== (yB = null === TB || void 0 === TB ? void 0 : TB.literal) && void 0 !== yB ? yB : gB.literal,
        regexp: null !== (pB = null === TB || void 0 === TB ? void 0 : TB.regexp) && void 0 !== pB ? pB : gB.regexp,
        wholeWord: null !== (lB = null === TB || void 0 === TB ? void 0 : TB.wholeWord) && void 0 !== lB ? lB : gB.wholeWord
      })
    }

    function jB(BB) {
      let TB = (0, VB.z)(BB, qB);
      return TB && TB.dom.querySelector("[main-field]")
    }

    function AB(BB) {
      let TB = jB(BB);
      TB && TB == BB.root.activeElement && TB.select()
    }
    const bB = BB => {
        let TB = BB.state.field(SB, !1);
        if (TB && TB.panel) {
          let dB = jB(BB);
          if (dB && dB != BB.root.activeElement) {
            let VB = xB(BB.state, TB.query.spec);
            VB.valid && BB.dispatch({
              effects: IB.of(VB)
            }), dB.focus(), dB.select()
          }
        } else BB.dispatch({
          effects: [cB.of(!0), TB ? IB.of(xB(BB.state, TB.query.spec)) : yB.x.appendConfig.of(lT)]
        });
        return !0
      },
      nB = BB => {
        let TB = BB.state.field(SB, !1);
        if (!TB || !TB.panel) return !1;
        let dB = (0, VB.z)(BB, qB);
        return dB && dB.dom.contains(BB.root.activeElement) && BB.focus(), BB.dispatch({
          effects: cB.of(!1)
        }), !0
      },
      eB = [{
        key: "Mod-f",
        run: bB,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: XB,
        shift: WB,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: XB,
        shift: WB,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: nB,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: BB => {
          let {
            state: TB,
            dispatch: dB
          } = BB, VB = TB.selection;
          if (VB.ek.length > 1 || VB.main.empty) return !1;
          let {
            from: pB,
            to: lB
          } = VB.main, YB = [], gB = 0;
          for (let oB = new JB(TB.doc, TB.sliceDoc(pB, lB)); !oB.next().done;) {
            if (YB.length > 1e3) return !1;
            oB.value.from == pB && (gB = YB.length), YB.push(yB.h.range(oB.value.from, oB.value.to))
          }
          return dB(TB.update({
            selection: yB.h.create(YB, gB),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: BB => {
          let {
            state: TB
          } = BB, dB = String(TB.doc.lineAt(BB.state.selection.main.head).number), {
            close: pB,
            result: lB
          } = (0, VB.jb)(BB, {
            label: TB.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: dB
            },
            focus: !0,
            submitLabel: TB.phrase("go")
          });
          return lB.then((dB => {
            let lB = dB && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(dB.elements.line.value);
            if (!lB) return void BB.dispatch({
              effects: pB
            });
            let JB = TB.doc.lineAt(TB.selection.main.head),
              [, YB, gB, oB, kB] = lB,
              LB = oB ? +oB.slice(1) : 0,
              OB = gB ? +gB : JB.number;
            if (gB && kB) {
              let BB = OB / 100;
              YB && (BB = BB * ("-" == YB ? -1 : 1) + JB.number / TB.doc.lines), OB = Math.round(TB.doc.lines * BB)
            } else gB && YB && (OB = OB * ("-" == YB ? -1 : 1) + JB.number);
            let DB = TB.doc.line(Math.max(1, Math.min(TB.doc.lines, OB))),
              uB = yB.h.cursor(DB.from + Math.max(0, Math.min(LB, DB.length)));
            BB.dispatch({
              effects: [pB, VB.i.scrollIntoView(uB.from, {
                y: "center"
              })],
              selection: uB
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: BB => {
          let {
            state: TB,
            dispatch: dB
          } = BB, {
            ek: pB
          } = TB.selection;
          if (pB.some((BB => BB.from === BB.to))) return (BB => {
            let {
              state: TB,
              dispatch: dB
            } = BB, {
              selection: VB
            } = TB, pB = yB.h.create(VB.ek.map((BB => TB.wordAt(BB.head) || yB.h.cursor(BB.head))), VB.mainIndex);
            return !pB.eq(VB) && (dB(TB.update({
              selection: pB
            })), !0)
          })({
            state: TB,
            dispatch: dB
          });
          let lB = TB.sliceDoc(pB[0].from, pB[0].to);
          if (TB.selection.ek.some((BB => TB.sliceDoc(BB.from, BB.to) != lB))) return !1;
          let YB = function(BB, TB) {
            let {
              main: dB,
              ek: VB
            } = BB.selection, yB = BB.wordAt(dB.head), pB = yB && yB.from == dB.from && yB.to == dB.to;
            for (let lB = !1, YB = new JB(BB.doc, TB, VB[VB.length - 1].to);;) {
              if (YB.next(), !YB.done) {
                if (lB && VB.some((BB => BB.from == YB.value.from))) continue;
                if (pB) {
                  let TB = BB.wordAt(YB.value.from);
                  if (!TB || TB.from != YB.value.from || TB.to != YB.value.to) continue
                }
                return YB.value
              }
              if (lB) return null;
              YB = new JB(BB.doc, TB, 0, Math.max(0, VB[VB.length - 1].from - 1)), lB = !0
            }
          }(TB, lB);
          return !!YB && (dB(TB.update({
            selection: TB.selection.addRange(yB.h.range(YB.from, YB.to), !1),
            effects: VB.i.scrollIntoView(YB.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class BT {
      constructor(BB) {
        this.view = BB;
        let TB = this.query = BB.state.field(SB).query.spec;

        function dB(BB, TB, dB) {
          return (0, pB.e)("button", {
            class: "cm-button",
            name: BB,
            onclick: TB,
            type: "button"
          }, dB)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, pB.e)("input", {
          value: TB.search,
          placeholder: TT(BB, "Find"),
          "aria-label": TT(BB, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, pB.e)("input", {
          value: TB.replace,
          placeholder: TT(BB, "Replace"),
          "aria-label": TT(BB, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, pB.e)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: TB.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, pB.e)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: TB.regexp,
          onchange: this.commit
        }), this.wordField = (0, pB.e)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: TB.wholeWord,
          onchange: this.commit
        }), this.dom = (0, pB.e)("div", {
          onkeydown: BB => this.keydown(BB),
          class: "cm-search"
        }, [this.searchField, dB("next", (() => XB(BB)), [TT(BB, "next")]), dB("prev", (() => WB(BB)), [TT(BB, "previous")]), dB("select", (() => hB(BB)), [TT(BB, "all")]), (0, pB.e)("label", null, [this.caseField, TT(BB, "match case")]), (0, pB.e)("label", null, [this.reField, TT(BB, "regexp")]), (0, pB.e)("label", null, [this.wordField, TT(BB, "by word")]), ...BB.state.readOnly ? [] : [(0, pB.e)("br"), this.replaceField, dB("replace", (() => CB(BB)), [TT(BB, "replace")]), dB("replaceAll", (() => GB(BB)), [TT(BB, "replace all")])], (0, pB.e)("button", {
          name: "close",
          onclick: () => nB(BB),
          "aria-label": TT(BB, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let BB = new sB({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        BB.eq(this.query) || (this.query = BB, this.view.dispatch({
          effects: IB.of(BB)
        }))
      }
      keydown(BB) {
        (0, VB.fb)(this.view, BB, "search-panel") ? BB.preventDefault(): 13 == BB.keyCode && BB.target == this.searchField ? (BB.preventDefault(), (BB.shiftKey ? WB : XB)(this.view)) : 13 == BB.keyCode && BB.target == this.replaceField && (BB.preventDefault(), CB(this.view))
      }
      update(BB) {
        for (let TB of BB.transactions)
          for (let BB of TB.effects) BB.is(IB) && !BB.value.eq(this.query) && this.setQuery(BB.value)
      }
      setQuery(BB) {
        this.query = BB, this.searchField.value = BB.search, this.replaceField.value = BB.replace, this.caseField.checked = BB.caseSensitive, this.reField.checked = BB.regexp, this.wordField.checked = BB.wholeWord
      }
      mount() {
        this.searchField.select()
      }
      get pos() {
        return 80
      }
      get top() {
        return this.view.state.facet(fB).top
      }
    }

    function TT(BB, TB) {
      return BB.state.phrase(TB)
    }
    const dT = 30,
      VT = /[\s\.,:;?!]/;

    function yT(BB, TB) {
      let {
        from: dB,
        to: yB
      } = TB, pB = BB.state.doc.lineAt(dB), lB = BB.state.doc.lineAt(yB).to, JB = Math.max(pB.from, dB - dT), YB = Math.min(lB, yB + dT), gB = BB.state.sliceDoc(JB, YB);
      if (JB != pB.from)
        for (let VB = 0; VB < dT; VB++)
          if (!VT.test(gB[VB + 1]) && VT.test(gB[VB])) {
            gB = gB.slice(VB);
            break
          } if (YB != lB)
        for (let VB = gB.length - 1; VB > gB.length - dT; VB--)
          if (!VT.test(gB[VB - 1]) && VT.test(gB[VB])) {
            gB = gB.slice(0, VB);
            break
          } return VB.i.announce.of(`${BB.state.phrase("current match")}. ${gB} ${BB.state.phrase("on line")} ${pB.number}.`)
    }
    const pT = VB.i.baseTheme({
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
      lT = [SB, yB.r.low(aB), pT]
  },
  40040: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => rB,
      f: () => gT,
      i: () => zy,
      l: () => Jl,
      n: () => AT,
      p: () => FB,
      q: () => Kp,
      u: () => by,
      x: () => lp,
      z: () => np,
      D: () => jp,
      H: () => Ll,
      N: () => mp,
      K: () => rl,
      P: () => Dp,
      R: () => xp,
      S: () => Sy,
      V: () => wl,
      W: () => GT,
      _: () => fp,
      bb: () => wp,
      fb: () => Ry,
      jb: () => Vl,
      kb: () => dl,
      ob: () => Xp
    });
    for (var VB = dB(40036), yB = dB(40043), pB = {
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
      }, lB = {
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
      }, JB = "undefined" != typeof navigator && /Mac/.test(navigator.platform), YB = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), gB = 0; gB < 10; gB++) pB[48 + gB] = pB[96 + gB] = String(gB);
    for (gB = 1; gB <= 24; gB++) pB[gB + 111] = "F" + gB;
    for (gB = 65; gB <= 90; gB++) pB[gB] = String.fromCharCode(gB + 32), lB[gB] = String.fromCharCode(gB);
    for (var oB in pB) lB.hasOwnProperty(oB) || (lB[oB] = pB[oB]);
    var kB = dB(40051);
    let LB = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      OB = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const DB = /Edge\/(\d+)/.exec(LB.userAgent),
      uB = /MSIE \d/.test(LB.userAgent),
      HB = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(LB.userAgent),
      EB = !!(uB || HB || DB),
      vB = !EB && /gecko\/(\d+)/i.test(LB.userAgent),
      mB = !EB && /Chrome\/(\d+)/.exec(LB.userAgent),
      iB = "webkitFontSmoothing" in OB.documentElement.style,
      NB = !EB && /Apple Computer/.test(LB.vendor),
      tB = NB && (/Mobile\/\w+/.test(LB.userAgent) || LB.maxTouchPoints > 2);
    var fB = {
      mac: tB || /Mac/.test(LB.platform),
      windows: /Win/.test(LB.platform),
      linux: /Linux|X11/.test(LB.platform),
      ie: EB,
      ie_version: uB ? OB.documentMode || 6 : HB ? +HB[1] : DB ? +DB[1] : 0,
      gecko: vB,
      gecko_version: vB ? +(/Firefox\/(\d+)/.exec(LB.userAgent) || [0, 0])[1] : 0,
      chrome: !!mB,
      chrome_version: mB ? +mB[1] : 0,
      ios: tB,
      android: /Android\b/.test(LB.userAgent),
      webkit: iB,
      webkit_version: iB ? +(/\bAppleWebKit\/(\d+)/.exec(LB.userAgent) || [0, 0])[1] : 0,
      safari: NB,
      safari_version: NB ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(LB.userAgent) || [0, 0])[1] : 0,
      tabSize: null != OB.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function sB(BB, TB) {
      for (let dB in BB) "class" == dB && TB.class ? TB.class += " " + BB.class : "style" == dB && TB.style ? TB.style += ";" + BB.style : TB[dB] = BB[dB];
      return TB
    }
    const MB = Object.create(null);

    function zB(BB, TB, dB) {
      if (BB == TB) return !0;
      BB || (BB = MB), TB || (TB = MB);
      let VB = Object.keys(BB),
        yB = Object.keys(TB);
      if (VB.length - (dB && VB.indexOf(dB) > -1 ? 1 : 0) != yB.length - (dB && yB.indexOf(dB) > -1 ? 1 : 0)) return !1;
      for (let pB of VB)
        if (pB != dB && (-1 == yB.indexOf(pB) || BB[pB] !== TB[pB])) return !1;
      return !0
    }

    function wB(BB, TB, dB) {
      let VB = !1;
      if (TB)
        for (let yB in TB) dB && yB in dB || (VB = !0, "style" == yB ? BB.style.cssText = "" : BB.removeAttribute(yB));
      if (dB)
        for (let yB in dB) TB && TB[yB] == dB[yB] || (VB = !0, "style" == yB ? BB.style.cssText = dB[yB] : BB.setAttribute(yB, dB[yB]));
      return VB
    }

    function UB(BB) {
      let TB = Object.create(null);
      for (let dB = 0; dB < BB.attributes.length; dB++) {
        let VB = BB.attributes[dB];
        TB[VB.name] = VB.value
      }
      return TB
    }
    class FB {
      eq(BB) {
        return !1
      }
      updateDOM(BB, TB, dB) {
        return !1
      }
      compare(BB) {
        return this == BB || this.constructor == BB.constructor && this.eq(BB)
      }
      get estimatedHeight() {
        return -1
      }
      get lineBreaks() {
        return 0
      }
      ignoreEvent(BB) {
        return !0
      }
      coordsAt(BB, TB, dB) {
        return null
      }
      get isHidden() {
        return !1
      }
      get editable() {
        return !1
      }
      destroy(BB) {}
    }
    var KB = function(BB) {
      return BB[BB.Text = 0] = "Text", BB[BB.WidgetBefore = 1] = "WidgetBefore", BB[BB.WidgetAfter = 2] = "WidgetAfter", BB[BB.WidgetRange = 3] = "WidgetRange", BB
    }(KB || (KB = {}));
    class rB extends VB.w {
      constructor(BB, TB, dB, VB) {
        super(), this.startSide = BB, this.endSide = TB, this.widget = dB, this.spec = VB
      }
      get heightRelevant() {
        return !1
      }
      static mark(BB) {
        return new IB(BB)
      }
      static widget(BB) {
        let TB = Math.max(-1e4, Math.min(1e4, BB.side || 0)),
          dB = !!BB.block;
        return TB += dB && !BB.inlineOrder ? TB > 0 ? 3e8 : -4e8 : TB > 0 ? 1e8 : -1e8, new SB(BB, TB, TB, dB, BB.widget || null, !1)
      }
      static replace(BB) {
        let TB, dB, VB = !!BB.block;
        if (BB.isBlockGap) TB = -5e8, dB = 4e8;
        else {
          let {
            start: yB,
            end: pB
          } = PB(BB, VB);
          TB = (yB ? VB ? -3e8 : -1 : 5e8) - 1, dB = 1 + (pB ? VB ? 2e8 : 1 : -6e8)
        }
        return new SB(BB, TB, dB, VB, BB.widget || null, !0)
      }
      static line(BB) {
        return new cB(BB)
      }
      static set(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return VB.u.of(BB, TB)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    rB.none = VB.u.empty;
    class IB extends rB {
      constructor(BB) {
        let {
          start: TB,
          end: dB
        } = PB(BB);
        super(TB ? -1 : 5e8, dB ? 1 : -6e8, null, BB), this.tagName = BB.tagName || "span", this.attrs = BB.class && BB.attributes ? sB(BB.attributes, {
          class: BB.class
        }) : BB.class ? {
          class: BB.class
        } : BB.attributes || MB
      }
      eq(BB) {
        return this == BB || BB instanceof IB && this.tagName == BB.tagName && zB(this.attrs, BB.attrs)
      }
      range(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB;
        if (BB >= TB) throw new RangeError("Mark decorations may not be empty");
        return super.range(BB, TB)
      }
    }
    IB.prototype.point = !1;
    class cB extends rB {
      constructor(BB) {
        super(-2e8, -2e8, null, BB)
      }
      eq(BB) {
        return BB instanceof cB && this.spec.class == BB.spec.class && zB(this.spec.attributes, BB.spec.attributes)
      }
      range(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB;
        if (TB != BB) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(BB, TB)
      }
    }
    cB.prototype.mapMode = VB.o.TrackBefore, cB.prototype.point = !0;
    class SB extends rB {
      constructor(BB, TB, dB, yB, pB, lB) {
        super(TB, dB, pB, BB), this.block = yB, this.isReplace = lB, this.mapMode = yB ? TB <= 0 ? VB.o.TrackBefore : VB.o.TrackAfter : VB.o.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? KB.WidgetRange : this.startSide <= 0 ? KB.WidgetBefore : KB.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(BB) {
        return BB instanceof SB && (TB = this.widget, dB = BB.widget, TB == dB || !!(TB && dB && TB.compare(dB))) && this.block == BB.block && this.startSide == BB.startSide && this.endSide == BB.endSide;
        var TB, dB
      }
      range(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB;
        if (this.isReplace && (BB > TB || BB == TB && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && TB != BB) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(BB, TB)
      }
    }

    function PB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: dB,
          inclusiveEnd: VB
        } = BB;
      return null == dB && (dB = BB.inclusive), null == VB && (VB = BB.inclusive), {
        start: null !== dB && void 0 !== dB ? dB : TB,
        end: null !== VB && void 0 !== VB ? VB : TB
      }
    }

    function QB(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        yB = dB.length - 1;
      yB >= 0 && dB[yB] + VB >= BB ? dB[yB] = Math.max(dB[yB], TB) : dB.push(BB, TB)
    }
    SB.prototype.point = !0;
    class RB extends VB.w {
      constructor(BB, TB) {
        super(), this.tagName = BB, this.attributes = TB
      }
      eq(BB) {
        return BB == this || BB instanceof RB && this.tagName == BB.tagName && zB(this.attributes, BB.attributes)
      }
      static create(BB) {
        return new RB(BB.tagName, BB.attributes || MB)
      }
      static set(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return VB.u.of(BB, TB)
      }
    }

    function aB(BB) {
      let TB;
      return TB = 11 == BB.nodeType ? BB.getSelection ? BB : BB.ownerDocument : BB, TB.getSelection()
    }

    function ZB(BB, TB) {
      return !!TB && (BB == TB || BB.contains(1 != TB.nodeType ? TB.parentNode : TB))
    }

    function XB(BB, TB) {
      if (!TB.anchorNode) return !1;
      try {
        return ZB(BB, TB.anchorNode)
      } catch (dB) {
        return !1
      }
    }

    function WB(BB) {
      return 3 == BB.nodeType ? VT(BB, 0, BB.nodeValue.length).getClientRects() : 1 == BB.nodeType ? BB.getClientRects() : []
    }

    function hB(BB, TB, dB, VB) {
      return !!dB && (qB(BB, TB, dB, VB, -1) || qB(BB, TB, dB, VB, 1))
    }

    function CB(BB) {
      for (var TB = 0;; TB++)
        if (!(BB = BB.previousSibling)) return TB
    }

    function GB(BB) {
      return 1 == BB.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(BB.nodeName)
    }

    function qB(BB, TB, dB, VB, yB) {
      for (;;) {
        if (BB == dB && TB == VB) return !0;
        if (TB == (yB < 0 ? 0 : xB(BB))) {
          if ("DIV" == BB.nodeName) return !1;
          let dB = BB.parentNode;
          if (!dB || 1 != dB.nodeType) return !1;
          TB = CB(BB) + (yB < 0 ? 0 : 1), BB = dB
        } else {
          if (1 != BB.nodeType) return !1;
          if (1 == (BB = BB.childNodes[TB + (yB < 0 ? -1 : 0)]).nodeType && "false" == BB.contentEditable) return !1;
          TB = yB < 0 ? xB(BB) : 0
        }
      }
    }

    function xB(BB) {
      return 3 == BB.nodeType ? BB.nodeValue.length : BB.childNodes.length
    }

    function jB(BB, TB) {
      let dB = TB ? BB.left : BB.right;
      return {
        left: dB,
        right: dB,
        top: BB.top,
        bottom: BB.bottom
      }
    }

    function AB(BB) {
      let TB = BB.visualViewport;
      return TB ? {
        left: 0,
        right: TB.width,
        top: 0,
        bottom: TB.height
      } : {
        left: 0,
        right: BB.innerWidth,
        top: 0,
        bottom: BB.innerHeight
      }
    }

    function bB(BB, TB) {
      let dB = TB.width / BB.offsetWidth,
        VB = TB.height / BB.offsetHeight;
      return (dB > .995 && dB < 1.005 || !isFinite(dB) || Math.abs(TB.width - BB.offsetWidth) < 1) && (dB = 1), (VB > .995 && VB < 1.005 || !isFinite(VB) || Math.abs(TB.height - BB.offsetHeight) < 1) && (VB = 1), {
        scaleX: dB,
        scaleY: VB
      }
    }

    function nB(BB) {
      let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        dB = BB.ownerDocument,
        VB = null,
        yB = null;
      for (let pB = BB.parentNode; pB && (pB != dB.body && (TB && !VB || !yB));)
        if (1 == pB.nodeType) !yB && pB.scrollHeight > pB.clientHeight && (yB = pB), TB && !VB && pB.scrollWidth > pB.clientWidth && (VB = pB), pB = pB.assignedSlot || pB.parentNode;
        else {
          if (11 != pB.nodeType) break;
          pB = pB.host
        } return {
        x: VB,
        y: yB
      }
    }
    RB.prototype.startSide = RB.prototype.endSide = -1;
    class eB {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(BB) {
        return this.anchorNode == BB.anchorNode && this.anchorOffset == BB.anchorOffset && this.focusNode == BB.focusNode && this.focusOffset == BB.focusOffset
      }
      setRange(BB) {
        let {
          anchorNode: TB,
          focusNode: dB
        } = BB;
        this.set(TB, Math.min(BB.anchorOffset, TB ? xB(TB) : 0), dB, Math.min(BB.focusOffset, dB ? xB(dB) : 0))
      }
      set(BB, TB, dB, VB) {
        this.anchorNode = BB, this.anchorOffset = TB, this.focusNode = dB, this.focusOffset = VB
      }
    }
    let BT, TT = null;

    function dT(BB) {
      if (BB.setActive) return BB.setActive();
      if (TT) return BB.focus(TT);
      let TB = [];
      for (let dB = BB; dB && (TB.push(dB, dB.scrollTop, dB.scrollLeft), dB != dB.ownerDocument); dB = dB.parentNode);
      if (BB.focus(null == TT ? {
          get preventScroll() {
            return TT = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !TT) {
        TT = !1;
        for (let BB = 0; BB < TB.length;) {
          let dB = TB[BB++],
            VB = TB[BB++],
            yB = TB[BB++];
          dB.scrollTop != VB && (dB.scrollTop = VB), dB.scrollLeft != yB && (dB.scrollLeft = yB)
        }
      }
    }

    function VT(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : TB,
        VB = BT || (BT = document.createRange());
      return VB.setEnd(BB, dB), VB.setStart(BB, TB), VB
    }

    function yT(BB, TB, dB, VB) {
      let yB = {
        key: TB,
        code: TB,
        keyCode: dB,
        which: dB,
        cancelable: !0
      };
      VB && ({
        altKey: yB.altKey,
        ctrlKey: yB.ctrlKey,
        shiftKey: yB.shiftKey,
        metaKey: yB.metaKey
      } = VB);
      let pB = new KeyboardEvent("keydown", yB);
      pB.synthetic = !0, BB.dispatchEvent(pB);
      let lB = new KeyboardEvent("keyup", yB);
      return lB.synthetic = !0, BB.dispatchEvent(lB), pB.defaultPrevented || lB.defaultPrevented
    }

    function pT(BB) {
      return BB instanceof Window ? BB.pageYOffset > Math.max(0, BB.document.documentElement.scrollHeight - BB.innerHeight - 4) : BB.scrollTop > Math.max(1, BB.scrollHeight - BB.clientHeight - 4)
    }

    function lT(BB, TB) {
      for (let dB = BB, VB = TB;;) {
        if (3 == dB.nodeType && VB > 0) return {
          node: dB,
          offset: VB
        };
        if (1 == dB.nodeType && VB > 0) {
          if ("false" == dB.contentEditable) return null;
          dB = dB.childNodes[VB - 1], VB = xB(dB)
        } else {
          if (!dB.parentNode || GB(dB)) return null;
          VB = CB(dB), dB = dB.parentNode
        }
      }
    }

    function JT(BB, TB) {
      for (let dB = BB, VB = TB;;) {
        if (3 == dB.nodeType && VB < dB.nodeValue.length) return {
          node: dB,
          offset: VB
        };
        if (1 == dB.nodeType && VB < dB.childNodes.length) {
          if ("false" == dB.contentEditable) return null;
          dB = dB.childNodes[VB], VB = 0
        } else {
          if (!dB.parentNode || GB(dB)) return null;
          VB = CB(dB) + 1, dB = dB.parentNode
        }
      }
    }
    fB.safari && fB.safari_version >= 26 && (TT = !1);
    class YT {
      constructor(BB, TB) {
        let dB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = BB, this.offset = TB, this.precise = dB
      }
      static before(BB, TB) {
        return new YT(BB.parentNode, CB(BB), TB)
      }
      static after(BB, TB) {
        return new YT(BB.parentNode, CB(BB) + 1, TB)
      }
    }
    var gT = function(BB) {
      return BB[BB.LTR = 0] = "LTR", BB[BB.RTL = 1] = "RTL", BB
    }(gT || (gT = {}));
    const oT = gT.LTR,
      kT = gT.RTL;

    function LT(BB) {
      let TB = [];
      for (let dB = 0; dB < BB.length; dB++) TB.push(1 << +BB[dB]);
      return TB
    }
    const OT = LT("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      DT = LT("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      uT = Object.create(null),
      HT = [];
    for (let Il of ["()", "[]", "{}"]) {
      let BB = Il.charCodeAt(0),
        TB = Il.charCodeAt(1);
      uT[BB] = TB, uT[TB] = -BB
    }

    function ET(BB) {
      return BB <= 247 ? OT[BB] : 1424 <= BB && BB <= 1524 ? 2 : 1536 <= BB && BB <= 1785 ? DT[BB - 1536] : 1774 <= BB && BB <= 2220 ? 4 : 8192 <= BB && BB <= 8204 ? 256 : 64336 <= BB && BB <= 65023 ? 4 : 1
    }
    const vT = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class mT {
      get dir() {
        return this.level % 2 ? kT : oT
      }
      constructor(BB, TB, dB) {
        this.from = BB, this.to = TB, this.level = dB
      }
      side(BB, TB) {
        return this.dir == TB == BB ? this.to : this.from
      }
      forward(BB, TB) {
        return BB == (this.dir == TB)
      }
      static find(BB, TB, dB, VB) {
        let yB = -1;
        for (let pB = 0; pB < BB.length; pB++) {
          let lB = BB[pB];
          if (lB.from <= TB && lB.to >= TB) {
            if (lB.level == dB) return pB;
            (yB < 0 || (0 != VB ? VB < 0 ? lB.from < TB : lB.to > TB : BB[yB].level > lB.level)) && (yB = pB)
          }
        }
        if (yB < 0) throw new RangeError("Index out of range");
        return yB
      }
    }

    function iT(BB, TB) {
      if (BB.length != TB.length) return !1;
      for (let dB = 0; dB < BB.length; dB++) {
        let VB = BB[dB],
          yB = TB[dB];
        if (VB.from != yB.from || VB.to != yB.to || VB.direction != yB.direction || !iT(VB.inner, yB.inner)) return !1
      }
      return !0
    }
    const NT = [];

    function tT(BB, TB, dB, VB, yB, pB, lB) {
      let JB = VB % 2 ? 2 : 1;
      if (VB % 2 == yB % 2)
        for (let YB = TB, gB = 0; YB < dB;) {
          let TB = !0,
            oB = !1;
          if (gB == pB.length || YB < pB[gB].from) {
            let BB = NT[YB];
            BB != JB && (TB = !1, oB = 16 == BB)
          }
          let kB = TB || 1 != JB ? null : [],
            LB = TB ? VB : VB + 1,
            OB = YB;
          BB: for (;;)
            if (gB < pB.length && OB == pB[gB].from) {
              if (oB) break BB;
              let DB = pB[gB];
              if (!TB)
                for (let BB = DB.to, TB = gB + 1;;) {
                  if (BB == dB) break BB;
                  if (!(TB < pB.length && pB[TB].from == BB)) {
                    if (NT[BB] == JB) break BB;
                    break
                  }
                  BB = pB[TB++].to
                }
              if (gB++, kB) kB.push(DB);
              else {
                DB.from > YB && lB.push(new mT(YB, DB.from, LB)), fT(BB, DB.direction == oT != !(LB % 2) ? VB + 1 : VB, yB, DB.inner, DB.from, DB.to, lB), YB = DB.to
              }
              OB = DB.to
            } else {
              if (OB == dB || (TB ? NT[OB] != JB : NT[OB] == JB)) break;
              OB++
            } kB ? tT(BB, YB, OB, VB + 1, yB, kB, lB) : YB < OB && lB.push(new mT(YB, OB, LB)), YB = OB
        } else
          for (let YB = dB, gB = pB.length; YB > TB;) {
            let dB = !0,
              oB = !1;
            if (!gB || YB > pB[gB - 1].to) {
              let BB = NT[YB - 1];
              BB != JB && (dB = !1, oB = 16 == BB)
            }
            let kB = dB || 1 != JB ? null : [],
              LB = dB ? VB : VB + 1,
              OB = YB;
            BB: for (;;)
              if (gB && OB == pB[gB - 1].to) {
                if (oB) break BB;
                let DB = pB[--gB];
                if (!dB)
                  for (let BB = DB.from, dB = gB;;) {
                    if (BB == TB) break BB;
                    if (!dB || pB[dB - 1].to != BB) {
                      if (NT[BB - 1] == JB) break BB;
                      break
                    }
                    BB = pB[--dB].from
                  }
                if (kB) kB.push(DB);
                else {
                  DB.to < YB && lB.push(new mT(DB.to, YB, LB)), fT(BB, DB.direction == oT != !(LB % 2) ? VB + 1 : VB, yB, DB.inner, DB.from, DB.to, lB), YB = DB.from
                }
                OB = DB.from
              } else {
                if (OB == TB || (dB ? NT[OB - 1] != JB : NT[OB - 1] == JB)) break;
                OB--
              } kB ? tT(BB, OB, YB, VB + 1, yB, kB, lB) : OB < YB && lB.push(new mT(OB, YB, LB)), YB = OB
          }
    }

    function fT(BB, TB, dB, VB, yB, pB, lB) {
      let JB = TB % 2 ? 2 : 1;
      ! function(BB, TB, dB, VB, yB) {
        for (let pB = 0; pB <= VB.length; pB++) {
          let lB = pB ? VB[pB - 1].to : TB,
            JB = pB < VB.length ? VB[pB].from : dB,
            YB = pB ? 256 : yB;
          for (let TB = lB, dB = YB, VB = YB; TB < JB; TB++) {
            let yB = ET(BB.charCodeAt(TB));
            512 == yB ? yB = dB : 8 == yB && 4 == VB && (yB = 16), NT[TB] = 4 == yB ? 2 : yB, 7 & yB && (VB = yB), dB = yB
          }
          for (let BB = lB, TB = YB, VB = YB; BB < JB; BB++) {
            let yB = NT[BB];
            if (128 == yB) BB < JB - 1 && TB == NT[BB + 1] && 24 & TB ? yB = NT[BB] = TB : NT[BB] = 256;
            else if (64 == yB) {
              let yB = BB + 1;
              for (; yB < JB && 64 == NT[yB];) yB++;
              let pB = BB && 8 == TB || yB < dB && 8 == NT[yB] ? 1 == VB ? 1 : 8 : 256;
              for (let TB = BB; TB < yB; TB++) NT[TB] = pB;
              BB = yB - 1
            } else 8 == yB && 1 == VB && (NT[BB] = 1);
            TB = yB, 7 & yB && (VB = yB)
          }
        }
      }(BB, yB, pB, VB, JB),
      function(BB, TB, dB, VB, yB) {
        let pB = 1 == yB ? 2 : 1;
        for (let lB = 0, JB = 0, YB = 0; lB <= VB.length; lB++) {
          let gB = lB ? VB[lB - 1].to : TB,
            oB = lB < VB.length ? VB[lB].from : dB;
          for (let TB, dB, VB, lB = gB; lB < oB; lB++)
            if (dB = uT[TB = BB.charCodeAt(lB)])
              if (dB < 0) {
                for (let BB = JB - 3; BB >= 0; BB -= 3)
                  if (HT[BB + 1] == -dB) {
                    let TB = HT[BB + 2],
                      dB = 2 & TB ? yB : 4 & TB ? 1 & TB ? pB : yB : 0;
                    dB && (NT[lB] = NT[HT[BB]] = dB), JB = BB;
                    break
                  }
              } else {
                if (189 == HT.length) break;
                HT[JB++] = lB, HT[JB++] = TB, HT[JB++] = YB
              }
          else if (2 == (VB = NT[lB]) || 1 == VB) {
            let BB = VB == yB;
            YB = BB ? 0 : 1;
            for (let TB = JB - 3; TB >= 0; TB -= 3) {
              let dB = HT[TB + 2];
              if (2 & dB) break;
              if (BB) HT[TB + 2] |= 2;
              else {
                if (4 & dB) break;
                HT[TB + 2] |= 4
              }
            }
          }
        }
      }(BB, yB, pB, VB, JB),
      function(BB, TB, dB, VB) {
        for (let yB = 0, pB = VB; yB <= dB.length; yB++) {
          let lB = yB ? dB[yB - 1].to : BB,
            JB = yB < dB.length ? dB[yB].from : TB;
          for (let YB = lB; YB < JB;) {
            let lB = NT[YB];
            if (256 == lB) {
              let lB = YB + 1;
              for (;;)
                if (lB == JB) {
                  if (yB == dB.length) break;
                  lB = dB[yB++].to, JB = yB < dB.length ? dB[yB].from : TB
                } else {
                  if (256 != NT[lB]) break;
                  lB++
                } let gB = 1 == pB,
                oB = gB == (1 == (lB < TB ? NT[lB] : VB)) ? gB ? 1 : 2 : VB;
              for (let TB = lB, VB = yB, pB = VB ? dB[VB - 1].to : BB; TB > YB;) TB == pB && (TB = dB[--VB].from, pB = VB ? dB[VB - 1].to : BB), NT[--TB] = oB;
              YB = lB
            } else pB = lB, YB++
          }
        }
      }(yB, pB, VB, JB), tT(BB, yB, pB, TB, dB, VB, lB)
    }

    function sT(BB, TB, dB) {
      if (!BB) return [new mT(0, 0, TB == kT ? 1 : 0)];
      if (TB == oT && !dB.length && !vT.test(BB)) return MT(BB.length);
      if (dB.length)
        for (; BB.length > NT.length;) NT[NT.length] = 256;
      let VB = [],
        yB = TB == oT ? 0 : 1;
      return fT(BB, yB, yB, dB, 0, BB.length, VB), VB
    }

    function MT(BB) {
      return [new mT(0, BB, 0)]
    }
    let zT = "";

    function wT(BB, TB, dB, yB, pB) {
      var lB;
      let JB = yB.head - BB.from,
        YB = mT.find(TB, JB, null !== (lB = yB.bidiLevel) && void 0 !== lB ? lB : -1, yB.assoc),
        gB = TB[YB],
        oB = gB.side(pB, dB);
      if (JB == oB) {
        let BB = YB += pB ? 1 : -1;
        if (BB < 0 || BB >= TB.length) return null;
        gB = TB[YB = BB], JB = gB.side(!pB, dB), oB = gB.side(pB, dB)
      }
      let kB = (0, VB.S)(BB.text, JB, gB.forward(pB, dB));
      (kB < gB.from || kB > gB.to) && (kB = oB), zT = BB.text.slice(Math.min(JB, kB), Math.max(JB, kB));
      let LB = YB == (pB ? TB.length - 1 : 0) ? null : TB[YB + (pB ? 1 : -1)];
      return LB && kB == oB && LB.level + (pB ? 0 : 1) < gB.level ? VB.h.cursor(LB.side(!pB, dB) + BB.from, LB.forward(pB, dB) ? 1 : -1, LB.level) : VB.h.cursor(kB + BB.from, gB.forward(pB, dB) ? -1 : 1, gB.level)
    }

    function UT(BB, TB, dB) {
      for (let VB = TB; VB < dB; VB++) {
        let TB = ET(BB.charCodeAt(VB));
        if (1 == TB) return oT;
        if (2 == TB || 4 == TB) return kT
      }
      return oT
    }
    const FT = VB.l.define(),
      KT = VB.l.define(),
      rT = VB.l.define(),
      IT = VB.l.define(),
      cT = VB.l.define(),
      ST = VB.l.define(),
      PT = VB.l.define(),
      QT = VB.l.define(),
      RT = VB.l.define(),
      aT = VB.l.define({
        combine: BB => BB.some((BB => BB))
      }),
      ZT = VB.l.define({
        combine: BB => BB.some((BB => BB))
      }),
      XT = VB.l.define();
    class WT {
      constructor(BB, TB, dB, VB, yB) {
        let pB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = BB, this.y = TB, this.x = dB, this.yMargin = VB, this.xMargin = yB, this.isSnapshot = pB
      }
      map(BB) {
        return BB.empty ? this : new WT(this.range.map(BB), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(BB) {
        return this.range.to <= BB.doc.length ? this : new WT(VB.h.cursor(BB.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const hT = VB.x.define({
        map: (BB, TB) => BB.map(TB)
      }),
      CT = VB.x.define();

    function GT(BB, TB, dB) {
      let VB = BB.facet(IT);
      VB.length ? VB[0](TB) : window.onerror && window.onerror(String(TB), dB, void 0, void 0, TB) || (dB ? console.error(dB + ":", TB) : console.error(TB))
    }
    const qT = VB.l.define({
      combine: BB => !BB.length || BB[0]
    });
    let xT = 0;
    const jT = VB.l.define({
      combine: BB => BB.filter(((TB, dB) => {
        for (let VB = 0; VB < dB; VB++)
          if (BB[VB].plugin == TB.plugin) return !1;
        return !0
      }))
    });
    class AT {
      constructor(BB, TB, dB, VB, yB) {
        this.id = BB, this.create = TB, this.domEventHandlers = dB, this.domEventObservers = VB, this.baseExtensions = yB(this), this.extension = this.baseExtensions.concat(jT.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(BB) {
        return this.baseExtensions.concat(jT.of({
          plugin: this,
          arg: BB
        }))
      }
      static define(BB, TB) {
        const {
          eventHandlers: dB,
          eventObservers: VB,
          provide: yB,
          QB: pB
        } = TB || {};
        return new AT(xT++, BB, dB, VB, (BB => {
          let TB = [];
          return pB && TB.push(Bd.of((TB => {
            let dB = TB.plugin(BB);
            return dB ? pB(dB) : rB.none
          }))), yB && TB.push(yB(BB)), TB
        }))
      }
      static fromClass(BB, TB) {
        return AT.define(((TB, dB) => new BB(TB, dB)), TB)
      }
    }
    class bT {
      constructor(BB) {
        this.spec = BB, this.mustUpdate = null, this.value = null
      }
      get plugin() {
        return this.spec && this.spec.plugin
      }
      update(BB) {
        if (this.value) {
          if (this.mustUpdate) {
            let BB = this.mustUpdate;
            if (this.mustUpdate = null, this.value.update) try {
              this.value.update(BB)
            } catch (TB) {
              if (GT(BB.state, TB, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (dB) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(BB, this.spec.arg)
        } catch (TB) {
          GT(BB.state, TB, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(BB) {
        var TB;
        if (null === (TB = this.value) || void 0 === TB ? void 0 : TB.destroy) try {
          this.value.destroy()
        } catch (dB) {
          GT(BB.state, dB, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const nT = VB.l.define(),
      eT = VB.l.define(),
      Bd = VB.l.define(),
      Td = VB.l.define(),
      dd = VB.l.define(),
      Vd = VB.l.define(),
      yd = VB.l.define();

    function pd(BB, TB) {
      let dB = BB.state.facet(yd);
      if (!dB.length) return dB;
      let yB = dB.map((TB => TB instanceof Function ? TB(BB) : TB)),
        pB = [];
      return VB.u.spans(yB, TB.from, TB.to, {
        point() {},
        span(BB, dB, VB, yB) {
          let lB = BB - TB.from,
            JB = dB - TB.from,
            YB = pB;
          for (let pB = VB.length - 1; pB >= 0; pB--, yB--) {
            let BB, dB = VB[pB].spec.bidiIsolate;
            if (null == dB && (dB = UT(TB.text, lB, JB)), yB > 0 && YB.length && (BB = YB[YB.length - 1]).to == lB && BB.direction == dB) BB.to = JB, YB = BB.inner;
            else {
              let BB = {
                from: lB,
                to: JB,
                direction: dB,
                inner: []
              };
              YB.push(BB), YB = BB.inner
            }
          }
        }
      }), pB
    }
    const ld = VB.l.define();

    function Jd(BB) {
      let TB = 0,
        dB = 0,
        VB = 0,
        yB = 0;
      for (let pB of BB.state.facet(ld)) {
        let lB = pB(BB);
        lB && (null != lB.left && (TB = Math.max(TB, lB.left)), null != lB.right && (dB = Math.max(dB, lB.right)), null != lB.top && (VB = Math.max(VB, lB.top)), null != lB.bottom && (yB = Math.max(yB, lB.bottom)))
      }
      return {
        left: TB,
        right: dB,
        top: VB,
        bottom: yB
      }
    }
    const Yd = VB.l.define();
    class gd {
      constructor(BB, TB, dB, VB) {
        this.fromA = BB, this.toA = TB, this.fromB = dB, this.toB = VB
      }
      join(BB) {
        return new gd(Math.min(this.fromA, BB.fromA), Math.max(this.toA, BB.toA), Math.min(this.fromB, BB.fromB), Math.max(this.toB, BB.toB))
      }
      addToSet(BB) {
        let TB = BB.length,
          dB = this;
        for (; TB > 0; TB--) {
          let VB = BB[TB - 1];
          if (!(VB.fromA > dB.toA)) {
            if (VB.toA < dB.fromA) break;
            dB = dB.join(VB), BB.splice(TB - 1, 1)
          }
        }
        return BB.splice(TB, 0, dB), BB
      }
      static extendWithRanges(BB, TB) {
        if (0 == TB.length) return BB;
        let dB = [];
        for (let VB = 0, yB = 0, pB = 0;;) {
          let lB = VB < BB.length ? BB[VB].fromB : 1e9,
            JB = yB < TB.length ? TB[yB] : 1e9,
            YB = Math.min(lB, JB);
          if (1e9 == YB) break;
          let gB = YB + pB,
            oB = YB,
            kB = gB;
          for (;;)
            if (yB < TB.length && TB[yB] <= oB) {
              let dB = TB[yB + 1];
              yB += 2, oB = Math.max(oB, dB);
              for (let TB = VB; TB < BB.length && BB[TB].fromB <= oB; TB++) pB = BB[TB].toA - BB[TB].toB;
              kB = Math.max(kB, dB + pB)
            } else {
              if (!(VB < BB.length && BB[VB].fromB <= oB)) break;
              {
                let TB = BB[VB++];
                oB = Math.max(oB, TB.toB), kB = Math.max(kB, TB.toA), pB = TB.toA - TB.toB
              }
            } dB.push(new gd(gB, kB, YB, oB))
        }
        return dB
      }
    }
    class od {
      constructor(BB, TB, dB) {
        this.view = BB, this.state = TB, this.transactions = dB, this.flags = 0, this.startState = BB.state, this.changes = VB.ChangeSet.empty(this.startState.doc.length);
        for (let VB of dB) this.changes = this.changes.compose(VB.changes);
        let yB = [];
        this.changes.iterChangedRanges(((BB, TB, dB, VB) => yB.push(new gd(BB, TB, dB, VB)))), this.changedRanges = yB
      }
      static create(BB, TB, dB) {
        return new od(BB, TB, dB)
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
        return this.transactions.some((BB => BB.selection))
      }
      get empty() {
        return 0 == this.flags && 0 == this.transactions.length
      }
    }
    const kd = [];
    class Ld {
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = BB, this.length = TB, this.flags = dB, this.parent = null, BB.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return kd
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
      sync(BB) {
        if (this.flags |= 2, 4 & this.flags) {
          this.flags &= -5;
          let BB = this.domAttrs;
          BB && function(BB, TB) {
            for (let dB = BB.attributes.length - 1; dB >= 0; dB--) {
              let VB = BB.attributes[dB].name;
              null == TB[VB] && BB.removeAttribute(VB)
            }
            for (let dB in TB) {
              let VB = TB[dB];
              "style" == dB ? BB.style.cssText = VB : BB.getAttribute(dB) != VB && BB.setAttribute(dB, VB)
            }
          }(this.dom, BB)
        }
      }
      toString() {
        return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "")
      }
      destroy() {
        this.parent = null
      }
      setDOM(BB) {
        this.dom = BB, BB.cmTile = this
      }
      get posAtStart() {
        return this.parent ? this.parent.posBefore(this) : 0
      }
      get posAtEnd() {
        return this.posAtStart + this.length
      }
      posBefore(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let dB of this.children) {
          if (dB == BB) return TB;
          TB += dB.length + dB.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(BB) {
        return this.posBefore(BB) + BB.length
      }
      covers(BB) {
        return !0
      }
      coordsIn(BB, TB) {
        return null
      }
      domPosFor(BB, TB) {
        let dB = CB(this.dom),
          VB = this.length ? BB > 0 : TB > 0;
        return new YT(this.parent.dom, dB + (VB ? 1 : 0), 0 == BB || BB == this.length)
      }
      markDirty(BB) {
        this.flags &= -3, BB && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let BB = this; BB; BB = BB.parent)
          if (BB instanceof ud) return BB;
        return null
      }
      static get(BB) {
        return BB.cmTile
      }
    }
    class Od extends Ld {
      constructor(BB) {
        super(BB, 0), this._children = []
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
      append(BB) {
        this.children.push(BB), BB.parent = this
      }
      sync(BB) {
        if (2 & this.flags) return;
        super.sync(BB);
        let TB, dB = this.dom,
          VB = null,
          yB = (null === BB || void 0 === BB ? void 0 : BB.node) == dB ? BB : null,
          pB = 0;
        for (let lB of this.children) {
          if (lB.sync(BB), pB += lB.length + lB.breakAfter, TB = VB ? VB.nextSibling : dB.firstChild, yB && TB != lB.dom && (yB.written = !0), lB.dom.parentNode == dB)
            for (; TB && TB != lB.dom;) TB = Dd(TB);
          else dB.insertBefore(lB.dom, TB);
          VB = lB.dom
        }
        for (TB = VB ? VB.nextSibling : dB.firstChild, yB && TB && (yB.written = !0); TB;) TB = Dd(TB);
        this.length = pB
      }
    }

    function Dd(BB) {
      let TB = BB.nextSibling;
      return BB.parentNode.removeChild(BB), TB
    }
    class ud extends Od {
      constructor(BB, TB) {
        super(TB), this.view = BB
      }
      owns(BB) {
        for (; BB; BB = BB.parent)
          if (BB == this) return !0;
        return !1
      }
      isBlock() {
        return !0
      }
      nearest(BB) {
        for (;;) {
          if (!BB) return null;
          let TB = Ld.get(BB);
          if (TB && this.owns(TB)) return TB;
          BB = BB.parentNode
        }
      }
      blockTiles(BB) {
        for (let TB = [], dB = this, VB = 0, yB = 0;;)
          if (VB == dB.children.length) {
            if (!TB.length) return;
            dB = dB.parent, dB.breakAfter && yB++, VB = TB.pop()
          } else {
            let pB = dB.children[VB++];
            if (pB instanceof Hd) TB.push(VB), dB = pB, VB = 0;
            else {
              let TB = yB + pB.length,
                dB = BB(pB, yB);
              if (void 0 !== dB) return dB;
              yB = TB + pB.breakAfter
            }
          }
      }
      resolveBlock(BB, TB) {
        let dB, VB, yB = -1,
          pB = -1;
        if (this.blockTiles(((lB, JB) => {
            let YB = JB + lB.length;
            if (BB >= JB && BB <= YB) {
              if (lB.isWidget() && TB >= -1 && TB <= 1) {
                if (32 & lB.flags) return !0;
                16 & lB.flags && (dB = void 0)
              }(JB < BB || BB == YB && (TB < -1 ? lB.length : lB.covers(1))) && (!dB || !lB.isWidget() && dB.isWidget()) && (dB = lB, yB = BB - JB), (YB > BB || BB == JB && (TB > 1 ? lB.length : lB.covers(-1))) && (!VB || !lB.isWidget() && VB.isWidget()) && (VB = lB, pB = BB - JB)
            }
          })), !dB && !VB) throw new Error("No tile at position " + BB);
        return dB && TB < 0 || !VB ? {
          tile: dB,
          offset: yB
        } : {
          tile: VB,
          offset: pB
        }
      }
    }
    class Hd extends Od {
      constructor(BB, TB) {
        super(BB), this.wrapper = TB
      }
      isBlock() {
        return !0
      }
      covers(BB) {
        return !!this.children.length && (BB < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1))
      }
      get domAttrs() {
        return this.wrapper.attributes
      }
      static of (BB, TB) {
        let dB = new Hd(TB || document.createElement(BB.tagName), BB);
        return TB || (dB.flags |= 4), dB
      }
    }
    class Ed extends Od {
      constructor(BB, TB) {
        super(BB), this.attrs = TB
      }
      isLine() {
        return !0
      }
      static start(BB, TB, dB) {
        let VB = new Ed(TB || document.createElement("div"), BB);
        return TB && dB || (VB.flags |= 4), VB
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(BB, TB, dB) {
        let VB = null,
          yB = -1,
          pB = null,
          lB = -1;
        ! function BB(JB, YB) {
          for (let gB = 0, oB = 0; gB < JB.children.length && oB <= YB; gB++) {
            let kB = JB.children[gB],
              LB = oB + kB.length;
            LB >= YB && (kB.isComposite() ? BB(kB, YB - oB) : (!pB || pB.isHidden && (TB > 0 || dB && vd(pB, kB))) && (LB > YB || 32 & kB.flags) ? (pB = kB, lB = YB - oB) : (oB < YB || 16 & kB.flags && !kB.isHidden) && (VB = kB, yB = YB - oB)), oB = LB
          }
        }(this, BB);
        let JB = (TB < 0 ? VB : pB) || VB || pB;
        return JB ? {
          tile: JB,
          offset: JB == VB ? yB : lB
        } : null
      }
      coordsIn(BB, TB) {
        let dB = this.resolveInline(BB, TB, !0);
        return dB ? dB.tile.coordsIn(Math.max(0, dB.offset), TB) : function(BB) {
          let TB = BB.dom.lastChild;
          if (!TB) return BB.dom.getBoundingClientRect();
          let dB = WB(TB);
          return dB[dB.length - 1] || null
        }(this)
      }
      domIn(BB, TB) {
        let dB = this.resolveInline(BB, TB);
        if (dB) {
          let {
            tile: BB,
            offset: VB
          } = dB;
          if (this.dom.contains(BB.dom)) return BB.isText() ? new YT(BB.dom, Math.min(BB.dom.nodeValue.length, VB)) : BB.domPosFor(VB, 16 & BB.flags ? 1 : 32 & BB.flags ? -1 : TB);
          let yB = dB.tile.parent,
            pB = !1;
          for (let TB of yB.children) {
            if (pB) return new YT(TB.dom, 0);
            TB == dB.tile && (pB = !0)
          }
        }
        return new YT(this.dom, 0)
      }
    }

    function vd(BB, TB) {
      let dB = BB.coordsIn(0, 1),
        VB = TB.coordsIn(0, 1);
      return dB && VB && VB.top < dB.bottom
    }
    class md extends Od {
      constructor(BB, TB) {
        super(BB), this.mark = TB
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (BB, TB) {
        let dB = new md(TB || document.createElement(BB.tagName), BB);
        return TB || (dB.flags |= 4), dB
      }
    }
    class Nd extends Ld {
      constructor(BB, TB) {
        super(BB, TB.length), this.text = TB
      }
      sync(BB) {
        2 & this.flags || (super.sync(BB), this.dom.nodeValue != this.text && (BB && BB.node == this.dom && (BB.written = !0), this.dom.nodeValue = this.text))
      }
      isText() {
        return !0
      }
      toString() {
        return JSON.stringify(this.text)
      }
      coordsIn(BB, TB) {
        let dB = this.dom.nodeValue.length;
        BB > dB && (BB = dB);
        let VB = BB,
          yB = BB,
          pB = 0;
        0 == BB && TB < 0 || BB == dB && TB >= 0 ? fB.chrome || fB.gecko || (BB ? (VB--, pB = 1) : yB < dB && (yB++, pB = -1)) : TB < 0 ? VB-- : yB < dB && yB++;
        let lB = VT(this.dom, VB, yB).getClientRects();
        if (!lB.length) return null;
        let JB = lB[(pB ? pB < 0 : TB >= 0) ? 0 : lB.length - 1];
        return fB.safari && !pB && 0 == JB.width && (JB = Array.prototype.find.call(lB, (BB => BB.width)) || JB), pB ? jB(JB, pB < 0) : JB || null
      }
      static of (BB, TB) {
        let dB = new Nd(TB || document.createTextNode(BB), BB);
        return TB || (dB.flags |= 2), dB
      }
    }
    class td extends Ld {
      constructor(BB, TB, dB, VB) {
        super(BB, TB, VB), this.widget = dB
      }
      isWidget() {
        return !0
      }
      get isHidden() {
        return this.widget.isHidden
      }
      covers(BB) {
        return !(48 & this.flags) && (this.flags & (BB < 0 ? 64 : 128)) > 0
      }
      coordsIn(BB, TB) {
        return this.coordsInWidget(BB, TB, !1)
      }
      coordsInWidget(BB, TB, dB) {
        let VB = this.widget.coordsAt(this.dom, BB, TB);
        if (VB) return VB;
        if (dB) return jB(this.dom.getBoundingClientRect(), this.length ? 0 == BB : TB <= 0);
        {
          let TB = this.dom.getClientRects(),
            dB = null;
          if (!TB.length) return null;
          let VB = !!(16 & this.flags) || !(32 & this.flags) && BB > 0;
          for (let yB = VB ? TB.length - 1 : 0; dB = TB[yB], !(BB > 0 ? 0 == yB : yB == TB.length - 1 || dB.top < dB.bottom); yB += VB ? -1 : 1);
          return jB(dB, !VB)
        }
      }
      get overrideDOMText() {
        if (!this.length) return VB.D.empty;
        let {
          root: BB
        } = this;
        if (!BB) return VB.D.empty;
        let TB = this.posAtStart;
        return BB.view.state.doc.slice(TB, TB + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (BB, TB, dB, VB, yB) {
        return yB || (yB = BB.toDOM(TB), BB.editable || (yB.contentEditable = "false")), new td(yB, dB, BB, VB)
      }
    }
    class fd extends Ld {
      constructor(BB) {
        let TB = document.createElement("img");
        TB.className = "cm-widgetBuffer", TB.setAttribute("aria-hidden", "true"), super(TB, 0, BB)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return VB.D.empty
      }
      coordsIn(BB) {
        return this.dom.getBoundingClientRect()
      }
    }
    class sd {
      constructor(BB) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = BB
      }
      advance(BB, TB, dB) {
        let {
          tile: VB,
          index: yB,
          beforeBreak: pB,
          parents: lB
        } = this;
        for (; BB || TB > 0;)
          if (VB.isComposite())
            if (pB) {
              if (!BB) break;
              dB && dB.break(), BB--, pB = !1
            } else if (yB == VB.children.length) {
          if (!BB && !lB.length) break;
          dB && dB.lD(VB), pB = !!VB.breakAfter, ({
            tile: VB,
            index: yB
          } = lB.pop()), yB++
        } else {
          let JB = VB.children[yB],
            YB = JB.breakAfter;
          !(TB > 0 ? JB.length <= BB : JB.length < BB) || dB && !1 === dB.skip(JB, 0, JB.length) && JB.isComposite ? (lB.push({
            tile: VB,
            index: yB
          }), VB = JB, yB = 0, dB && JB.isComposite() && dB.enter(JB)) : (pB = !!YB, yB++, BB -= JB.length)
        } else if (yB == VB.length) pB = !!VB.breakAfter, ({
          tile: VB,
          index: yB
        } = lB.pop()), yB++;
        else {
          if (!BB) break;
          {
            let TB = Math.min(BB, VB.length - yB);
            dB && dB.skip(VB, yB, yB + TB), BB -= TB, yB += TB
          }
        }
        return this.tile = VB, this.index = yB, this.beforeBreak = pB, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class Md {
      constructor(BB, TB, dB, VB) {
        this.from = BB, this.to = TB, this.wrapper = dB, this.rank = VB
      }
    }
    class zd {
      constructor(BB, TB, dB) {
        this.cache = BB, this.root = TB, this.blockWrappers = dB, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(BB, TB, dB, VB) {
        var yB;
        this.flushBuffer();
        let pB = this.ensureMarks(TB, dB),
          lB = pB.lastChild;
        if (lB && lB.isText() && !(8 & lB.flags) && lB.length + BB.length < 512) {
          this.cache.reused.set(lB, 2), (pB.children[pB.children.length - 1] = new Nd(lB.dom, lB.text + BB)).parent = pB
        } else pB.append(VB || Nd.of(BB, null === (yB = this.cache.find(Nd)) || void 0 === yB ? void 0 : yB.dom));
        this.pos += BB.length, this.afterWidget = null
      }
      addComposition(BB, TB) {
        let dB = this.curLine;
        dB.dom != TB.line.dom && (dB.setDOM(this.cache.reused.has(TB.line) ? cd(TB.line.dom) : TB.line.dom), this.cache.reused.set(TB.line, 2));
        let VB = dB;
        for (let lB = TB.marks.length - 1; lB >= 0; lB--) {
          let BB = TB.marks[lB],
            dB = VB.lastChild;
          if (dB instanceof md && dB.mark.eq(BB.mark)) dB.dom != BB.dom && dB.setDOM(cd(BB.dom)), VB = dB;
          else {
            if (this.cache.reused.get(BB)) {
              let TB = Ld.get(BB.dom);
              TB && TB.setDOM(cd(BB.dom))
            }
            let TB = md.of(BB.mark, BB.dom);
            VB.append(TB), VB = TB
          }
          this.cache.reused.set(BB, 2)
        }
        let yB = Ld.get(BB.text);
        yB && this.cache.reused.set(yB, 2);
        let pB = new Nd(BB.text, BB.text.nodeValue);
        pB.flags |= 8, VB.append(pB)
      }
      addInlineWidget(BB, TB, dB) {
        let VB = this.afterWidget && 48 & BB.flags && (48 & this.afterWidget.flags) == (48 & BB.flags);
        VB || this.flushBuffer();
        let yB = this.ensureMarks(TB, dB);
        VB || 16 & BB.flags || yB.append(this.getBuffer(1)), yB.append(BB), this.pos += BB.length, this.afterWidget = BB
      }
      addMark(BB, TB, dB) {
        this.flushBuffer(), this.ensureMarks(TB, dB).append(BB), this.pos += BB.length, this.afterWidget = null
      }
      addBlockWidget(BB) {
        this.getBlockPos().append(BB), this.pos += BB.length, this.lastBlock = BB, this.endLine()
      }
      continueWidget(BB) {
        (this.afterWidget || this.lastBlock).length += BB, this.pos += BB
      }
      addLineStart(BB, TB) {
        var dB;
        BB || (BB = Id);
        let VB = Ed.start(BB, TB || (null === (dB = this.cache.find(Ed)) || void 0 === dB ? void 0 : dB.dom), !!TB);
        this.getBlockPos().append(this.lastBlock = this.curLine = VB)
      }
      addLine(BB) {
        this.getBlockPos().append(BB), this.pos += BB.length, this.lastBlock = BB, this.endLine()
      }
      addBreak() {
        this.lastBlock.flags |= 1, this.endLine(), this.pos++
      }
      addLineStartIfNotCovered(BB) {
        this.blockPosCovered() || this.addLineStart(BB)
      }
      ensureLine(BB) {
        this.curLine || this.addLineStart(BB)
      }
      ensureMarks(BB, TB) {
        var dB;
        let VB = this.curLine;
        for (let yB = BB.length - 1; yB >= 0; yB--) {
          let pB, lB = BB[yB];
          if (TB > 0 && (pB = VB.lastChild) && pB instanceof md && pB.mark.eq(lB)) VB = pB, TB--;
          else {
            let BB = md.of(lB, null === (dB = this.cache.find(md, (BB => BB.mark.eq(lB)))) || void 0 === dB ? void 0 : dB.dom);
            VB.append(BB), VB = BB, TB = 0
          }
        }
        return VB
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let BB = this.curLine.lastChild;
          BB && rd(this.curLine, !1) && ("BR" == BB.dom.nodeName || !BB.isWidget() || fB.ios && rd(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(Pd, 0, 32) || new td(Pd.toDOM(), 0, Pd, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let BB = this.wrappers.length - 1; BB >= 0; BB--) this.wrappers[BB].to < this.pos && this.wrappers.splice(BB, 1);
        for (let BB = this.blockWrappers; BB.value && BB.from <= this.pos; BB.next())
          if (BB.to >= this.pos) {
            let TB = new Md(BB.from, BB.to, BB.value, BB.rank),
              dB = this.wrappers.length;
            for (; dB > 0 && (this.wrappers[dB - 1].rank - TB.rank || this.wrappers[dB - 1].to - TB.to) < 0;) dB--;
            this.wrappers.splice(dB, 0, TB)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var BB;
        this.updateBlockWrappers();
        let TB = this.root;
        for (let dB of this.wrappers) {
          let VB = TB.lastChild;
          if (dB.from < this.pos && VB instanceof Hd && VB.wrapper.eq(dB.wrapper)) TB = VB;
          else {
            let VB = Hd.of(dB.wrapper, null === (BB = this.cache.find(Hd, (BB => BB.wrapper.eq(dB.wrapper)))) || void 0 === BB ? void 0 : BB.dom);
            TB.append(VB), TB = VB
          }
        }
        return TB
      }
      blockPosCovered() {
        let BB = this.lastBlock;
        return null != BB && !BB.breakAfter && (!BB.isWidget() || (160 & BB.flags) > 0)
      }
      getBuffer(BB) {
        let TB = 2 | (BB < 0 ? 16 : 32),
          dB = this.cache.find(fd, void 0, 1);
        return dB && (dB.flags = TB), dB || new fd(TB)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class wd {
      constructor(BB) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = BB.iter()
      }
      skip(BB) {
        this.textOff + BB <= this.text.length ? this.textOff += BB : (this.skipCount += BB - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(BB) {
        if (this.textOff == this.text.length) {
          let {
            value: TB,
            lineBreak: dB,
            done: VB
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, VB) throw new Error("Ran out of text content when drawing inline views");
          this.text = TB;
          let yB = this.textOff = Math.min(BB, TB.length);
          return dB ? null : TB.slice(0, yB)
        }
        let TB = Math.min(this.text.length, this.textOff + BB),
          dB = this.text.slice(this.textOff, TB);
        return this.textOff = TB, dB
      }
    }
    const Ud = [td, Ed, Nd, md, fd, Hd, ud];
    for (let Il = 0; Il < Ud.length; Il++) Ud[Il].bucket = Il;
    class Fd {
      constructor(BB) {
        this.view = BB, this.buckets = Ud.map((() => [])), this.index = Ud.map((() => 0)), this.reused = new Map
      }
      add(BB) {
        let TB = BB.constructor.bucket,
          dB = this.buckets[TB];
        dB.length < 6 ? dB.push(BB) : dB[this.index[TB] = (this.index[TB] + 1) % 6] = BB
      }
      find(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          VB = BB.bucket,
          yB = this.buckets[VB],
          pB = this.index[VB];
        for (let lB = yB.length - 1; lB >= 0; lB--) {
          let BB = (lB + pB) % yB.length,
            JB = yB[BB];
          if ((!TB || TB(JB)) && !this.reused.has(JB)) return yB.splice(BB, 1), BB < pB && this.index[VB]--, this.reused.set(JB, dB), JB
        }
        return null
      }
      findWidget(BB, TB, dB) {
        let VB = this.buckets[0];
        if (VB.length)
          for (let yB = 0, pB = 0;; yB++) {
            if (yB == VB.length) {
              if (pB) return null;
              pB = 1, yB = 0
            }
            let lB = VB[yB];
            if (!this.reused.has(lB) && (0 == pB ? lB.widget.compare(BB) : lB.widget.constructor == BB.constructor && BB.updateDOM(lB.dom, this.view, lB.widget))) return VB.splice(yB, 1), yB < this.index[0] && this.index[0]--, lB.widget == BB && lB.length == TB && (497 & lB.flags) == dB ? (this.reused.set(lB, 1), lB) : (this.reused.set(lB, 2), new td(lB.dom, TB, BB, -498 & lB.flags | dB))
          }
      }
      reuse(BB) {
        return this.reused.set(BB, 1), BB
      }
      maybeReuse(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(BB)) return this.reused.set(BB, TB), BB.dom
      }
      clear() {
        for (let BB = 0; BB < this.buckets.length; BB++) this.buckets[BB].length = this.index[BB] = 0
      }
    }
    class Kd {
      constructor(BB, TB, dB, yB, pB) {
        this.view = BB, this.QB = yB, this.disallowBlockEffectsFor = pB, this.openWidget = !1, this.openMarks = 0, this.cache = new Fd(BB), this.text = new wd(BB.state.doc), this.builder = new zd(this.cache, new ud(BB, BB.contentDOM), VB.u.iter(dB)), this.cache.reused.set(TB, 2), this.old = new sd(TB), this.reuseWalker = {
          skip: (BB, TB, dB) => {
            if (this.cache.add(BB), BB.isComposite()) return !1
          },
          enter: BB => this.cache.add(BB),
          lD: () => {},
          break: () => {}
        }
      }
      run(BB, TB) {
        let dB = TB && this.getCompositionContext(TB.text);
        for (let VB = 0, yB = 0, pB = 0;;) {
          let lB = pB < BB.length ? BB[pB++] : null,
            JB = lB ? lB.fromA : this.old.root.length;
          if (JB > VB) {
            let BB = JB - VB;
            this.preserve(BB, !pB, !lB), VB = JB, yB += BB
          }
          if (!lB) break;
          TB && lB.fromA <= TB.range.fromA && lB.toA >= TB.range.toA ? (this.forward(lB.fromA, TB.range.fromA, TB.range.fromA < TB.range.toA ? 1 : -1), this.emit(yB, TB.range.fromB), this.cache.clear(), this.builder.addComposition(TB, dB), this.text.skip(TB.range.toB - TB.range.fromB), this.forward(TB.range.fromA, lB.toA), this.emit(TB.range.toB, lB.toB)) : (this.forward(lB.fromA, lB.toA), this.emit(yB, lB.toB)), yB = lB.toB, VB = lB.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(BB, TB, dB) {
        let VB = function(BB) {
            let TB = [];
            for (let dB = BB.parents.length; dB > 1; dB--) {
              let VB = dB == BB.parents.length ? BB.tile : BB.parents[dB].tile;
              VB instanceof md && TB.push(VB.mark)
            }
            return TB
          }(this.old),
          yB = this.openMarks;
        this.old.advance(BB, dB ? 1 : -1, {
          skip: (BB, TB, dB) => {
            if (BB.isWidget())
              if (this.openWidget) this.builder.continueWidget(dB - TB);
              else {
                let pB = dB > 0 || TB < BB.length ? td.of(BB.widget, this.view, dB - TB, 496 & BB.flags, this.cache.maybeReuse(BB)) : this.cache.reuse(BB);
                256 & pB.flags ? (pB.flags &= -2, this.builder.addBlockWidget(pB)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(pB, VB, yB), yB = VB.length)
              }
            else if (BB.isText()) this.builder.ensureLine(null), TB || dB != BB.length || this.cache.reused.has(BB) ? (this.cache.add(BB), this.builder.addText(BB.text.slice(TB, dB), VB, yB)) : this.builder.addText(BB.text, VB, yB, this.cache.reuse(BB)), yB = VB.length;
            else if (BB.isLine()) BB.flags &= -2, this.cache.reused.set(BB, 1), this.builder.addLine(BB);
            else if (BB instanceof fd) this.cache.add(BB);
            else {
              if (!(BB instanceof md)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(BB, VB, yB), this.cache.reused.set(BB, 1), yB = VB.length
            }
            this.openWidget = !1
          },
          enter: BB => {
            BB.isLine() ? this.builder.addLineStart(BB.attrs, this.cache.maybeReuse(BB)) : (this.cache.add(BB), BB instanceof md && VB.unshift(BB.mark)), this.openWidget = !1
          },
          lD: BB => {
            BB.isLine() ? VB.length && (VB.length = yB = 0) : BB instanceof md && (VB.shift(), yB = Math.min(yB, VB.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(BB)
      }
      emit(BB, TB) {
        let dB = null,
          yB = this.builder,
          pB = 0,
          lB = VB.u.spans(this.QB, BB, TB, {
            point: (BB, TB, VB, lB, JB, YB) => {
              if (VB instanceof SB) {
                if (this.disallowBlockEffectsFor[YB]) {
                  if (VB.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (TB > this.view.state.doc.lineAt(BB).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (pB = lB.length, JB > lB.length) yB.continueWidget(TB - BB);
                else {
                  let pB = VB.widget || (VB.block ? Sd.block : Sd.inline),
                    YB = function(BB) {
                      let TB = BB.isReplace ? (BB.startSide < 0 ? 64 : 0) | (BB.endSide > 0 ? 128 : 0) : BB.startSide > 0 ? 32 : 16;
                      BB.block && (TB |= 256);
                      return TB
                    }(VB),
                    gB = this.cache.findWidget(pB, TB - BB, YB) || td.of(pB, this.view, TB - BB, YB);
                  VB.block ? (VB.startSide > 0 && yB.addLineStartIfNotCovered(dB), yB.addBlockWidget(gB)) : (yB.ensureLine(dB), yB.addInlineWidget(gB, lB, JB))
                }
                dB = null
              } else dB = function(BB, TB) {
                let dB = TB.spec.attributes,
                  VB = TB.spec.class;
                if (!dB && !VB) return BB;
                BB || (BB = {
                  class: "cm-line"
                });
                dB && sB(dB, BB);
                VB && (BB.class += " " + VB);
                return BB
              }(dB, VB);
              TB > BB && this.text.skip(TB - BB)
            },
            span: (BB, TB, VB, pB) => {
              for (let lB = BB; lB < TB;) {
                let JB = this.text.next(Math.min(512, TB - lB));
                null == JB ? (yB.addLineStartIfNotCovered(dB), yB.addBreak(), lB++) : (yB.ensureLine(dB), yB.addText(JB, VB, lB == BB ? pB : VB.length), lB += JB.length), dB = null
              }
            }
          });
        yB.addLineStartIfNotCovered(dB), this.openWidget = lB > pB, this.openMarks = lB
      }
      forward(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        TB - BB <= 10 ? this.old.advance(TB - BB, dB, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(TB - BB - 10, -1), this.old.advance(5, dB, this.reuseWalker))
      }
      getCompositionContext(BB) {
        let TB = [],
          dB = null;
        for (let VB = BB.parentNode;; VB = VB.parentNode) {
          let BB = Ld.get(VB);
          if (VB == this.view.contentDOM) break;
          BB instanceof md ? TB.push(BB) : (null === BB || void 0 === BB ? void 0 : BB.isLine()) ? dB = BB : BB instanceof Hd || ("DIV" != VB.nodeName || dB || VB == this.view.contentDOM ? dB || TB.push(md.of(new IB({
            tagName: VB.nodeName.toLowerCase(),
            attributes: UB(VB)
          }), VB)) : dB = new Ed(VB, Id))
        }
        return {
          line: dB,
          marks: TB
        }
      }
    }

    function rd(BB, TB) {
      let dB = BB => {
        for (let VB of BB.children)
          if ((TB ? VB.isText() : VB.length) || dB(VB)) return !0;
        return !1
      };
      return dB(BB)
    }
    const Id = {
      class: "cm-line"
    };

    function cd(BB) {
      let TB = Ld.get(BB);
      return TB && TB.setDOM(BB.cloneNode()), BB
    }
    class Sd extends FB {
      constructor(BB) {
        super(), this.tag = BB
      }
      eq(BB) {
        return BB.tag == this.tag
      }
      toDOM() {
        return document.createElement(this.tag)
      }
      updateDOM(BB) {
        return BB.nodeName.toLowerCase() == this.tag
      }
      get isHidden() {
        return !0
      }
    }
    Sd.inline = new Sd("span"), Sd.block = new Sd("div");
    const Pd = new class extends FB {
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
    class Qd {
      constructor(BB) {
        this.view = BB, this.QB = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = rB.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new ud(BB, BB.contentDOM), this.updateInner([new gd(0, 0, 0, BB.state.doc.length)], null)
      }
      update(BB) {
        var TB;
        let dB = BB.changedRanges;
        this.minWidth > 0 && dB.length && (dB.every((BB => {
          let {
            fromA: TB,
            toA: dB
          } = BB;
          return dB < this.minWidthFrom || TB > this.minWidthTo
        })) ? (this.minWidthFrom = BB.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = BB.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(BB);
        let yB = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (TB = this.domChanged) || void 0 === TB ? void 0 : TB.newSel) ? yB = this.domChanged.newSel.head : function(BB, TB) {
          let dB = !1;
          TB && BB.iterChangedRanges(((BB, VB) => {
            BB < TB.to && VB > TB.from && (dB = !0)
          }));
          return dB
        }(BB.changes, this.hasComposition) || BB.selectionSet || (yB = BB.state.selection.main.head));
        let pB = yB > -1 ? function(BB, TB, dB) {
          let VB = ad(BB, dB);
          if (!VB) return null;
          let {
            node: yB,
            from: pB,
            to: lB
          } = VB, JB = yB.nodeValue;
          if (/[\n\r]/.test(JB)) return null;
          if (BB.state.doc.sliceString(VB.from, VB.to) != JB) return null;
          let YB = TB.invertedDesc;
          return {
            range: new gd(YB.mapPos(pB), YB.mapPos(lB), pB, lB),
            text: yB
          }
        }(this.view, BB.changes, yB) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: TB,
            to: VB
          } = this.hasComposition;
          dB = new gd(TB, VB, BB.changes.mapPos(TB, -1), BB.changes.mapPos(VB, 1)).addToSet(dB.slice())
        }
        this.hasComposition = pB ? {
          from: pB.range.fromB,
          to: pB.range.toB
        } : null, (fB.ie || fB.chrome) && !pB && BB && BB.state.doc.lines != BB.startState.doc.lines && (this.forceSelection = !0);
        let lB = this.QB,
          JB = this.blockWrappers;
        this.updateDeco();
        let YB = function(BB, TB, dB) {
          let yB = new Zd;
          return VB.u.compare(BB, TB, dB, yB), yB.changes
        }(lB, this.QB, BB.changes);
        YB.length && (dB = gd.extendWithRanges(dB, YB));
        let gB = function(BB, TB, dB) {
          let yB = new Xd;
          return VB.u.compare(BB, TB, dB, yB), yB.changes
        }(JB, this.blockWrappers, BB.changes);
        return gB.length && (dB = gd.extendWithRanges(dB, gB)), pB && !dB.some((BB => BB.fromA <= pB.range.fromA && BB.toA >= pB.range.toA)) && (dB = pB.range.addToSet(dB.slice())), !(2 & this.tile.flags && 0 == dB.length) && (this.updateInner(dB, pB), BB.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(BB, TB) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: dB
        } = this.view;
        dB.ignore((() => {
          if (TB || BB.length) {
            let dB = this.tile,
              VB = new Kd(this.view, dB, this.blockWrappers, this.QB, this.dynamicDecorationMap);
            TB && Ld.get(TB.text) && VB.cache.reused.set(Ld.get(TB.text), 2), this.tile = VB.run(BB, TB), Rd(dB, VB.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let VB = fB.chrome || fB.ios ? {
            node: dB.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(VB), !VB || !VB.written && dB.selectionRange.focusNode == VB.node && this.tile.dom.contains(VB.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let VB = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let yB of this.tile.children) yB.isWidget() && yB.widget instanceof Wd && VB.push(yB.dom);
        dB.updateGaps(VB)
      }
      updateEditContextFormatting(BB) {
        this.editContextFormatting = this.editContextFormatting.map(BB.changes);
        for (let TB of BB.transactions)
          for (let BB of TB.effects) BB.is(CT) && (this.editContextFormatting = BB.value)
      }
      updateSelection() {
        let BB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: TB
        } = this.tile, dB = this.view.root.activeElement, VB = dB == TB, yB = !VB && !(this.view.state.facet(qT) || TB.tabIndex > -1) && XB(TB, this.view.observer.selectionRange) && !(dB && TB.contains(dB));
        if (!(VB || BB || yB)) return;
        let pB = this.forceSelection;
        this.forceSelection = !1;
        let lB, JB, YB = this.view.state.selection.main;
        if (YB.empty ? JB = lB = this.inlineDOMNearPos(YB.anchor, YB.assoc || 1) : (JB = this.inlineDOMNearPos(YB.head, YB.head == YB.from ? 1 : -1), lB = this.inlineDOMNearPos(YB.anchor, YB.anchor == YB.from ? 1 : -1)), fB.gecko && YB.empty && !this.hasComposition && (1 == (gB = lB).node.nodeType && gB.node.firstChild && (0 == gB.offset || "false" == gB.node.childNodes[gB.offset - 1].contentEditable) && (gB.offset == gB.node.childNodes.length || "false" == gB.node.childNodes[gB.offset].contentEditable))) {
          let BB = document.createTextNode("");
          this.view.observer.ignore((() => lB.node.insertBefore(BB, lB.node.childNodes[lB.offset] || null))), lB = JB = new YT(BB, 0), pB = !0
        }
        var gB;
        let oB = this.view.observer.selectionRange;
        !pB && oB.focusNode && (hB(lB.node, lB.offset, oB.anchorNode, oB.anchorOffset) && hB(JB.node, JB.offset, oB.focusNode, oB.focusOffset) || this.suppressWidgetCursorChange(oB, YB)) || (this.view.observer.ignore((() => {
          fB.android && fB.chrome && TB.contains(oB.focusNode) && function(BB, TB) {
            for (let dB = BB; dB && dB != TB; dB = dB.assignedSlot || dB.parentNode)
              if (1 == dB.nodeType && "false" == dB.contentEditable) return !0;
            return !1
          }(oB.focusNode, TB) && (TB.blur(), TB.focus({
            preventScroll: !0
          }));
          let BB = aB(this.view.root);
          if (BB)
            if (YB.empty) {
              if (fB.gecko) {
                let BB = (VB = lB.node, pB = lB.offset, 1 != VB.nodeType ? 0 : (pB && "false" == VB.childNodes[pB - 1].contentEditable ? 1 : 0) | (pB < VB.childNodes.length && "false" == VB.childNodes[pB].contentEditable ? 2 : 0));
                if (BB && 3 != BB) {
                  let TB = (1 == BB ? lT : JT)(lB.node, lB.offset);
                  TB && (lB = new YT(TB.node, TB.offset))
                }
              }
              BB.collapse(lB.node, lB.offset), null != YB.bidiLevel && void 0 !== BB.caretBidiLevel && (BB.caretBidiLevel = YB.bidiLevel)
            } else if (BB.extend) {
            BB.collapse(lB.node, lB.offset);
            try {
              BB.extend(JB.node, JB.offset)
            } catch (gB) {}
          } else {
            let TB = document.createRange();
            YB.anchor > YB.head && ([lB, JB] = [JB, lB]), TB.setEnd(JB.node, JB.offset), TB.setStart(lB.node, lB.offset), BB.removeAllRanges(), BB.addRange(TB)
          } else;
          var VB, pB;
          yB && this.view.root.activeElement == TB && (TB.blur(), dB && dB.focus())
        })), this.view.observer.setSelectionRange(lB, JB)), this.impreciseAnchor = lB.precise ? null : new YT(oB.anchorNode, oB.anchorOffset), this.impreciseHead = JB.precise ? null : new YT(oB.focusNode, oB.focusOffset)
      }
      suppressWidgetCursorChange(BB, TB) {
        return this.hasComposition && TB.empty && hB(BB.focusNode, BB.focusOffset, BB.anchorNode, BB.anchorOffset) && this.posFromDOM(BB.focusNode, BB.focusOffset) == TB.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: BB
        } = this, TB = BB.state.selection.main, dB = aB(BB.root), {
          anchorNode: VB,
          anchorOffset: yB
        } = BB.observer.selectionRange;
        if (!dB || !TB.empty || !TB.assoc || !dB.modify) return;
        let pB = this.lineAt(TB.head, TB.assoc);
        if (!pB) return;
        let lB = pB.posAtStart;
        if (TB.head == lB || TB.head == lB + pB.length) return;
        let JB = this.coordsAt(TB.head, -1),
          YB = this.coordsAt(TB.head, 1);
        if (!JB || !YB || JB.bottom > YB.top) return;
        let gB = this.domAtPos(TB.head + TB.assoc, TB.assoc);
        dB.collapse(gB.node, gB.offset), dB.modify("move", TB.assoc < 0 ? "forward" : "backward", "lineboundary"), BB.observer.readSelectionRange();
        let oB = BB.observer.selectionRange;
        BB.docView.posFromDOM(oB.anchorNode, oB.anchorOffset) != TB.from && dB.collapse(VB, yB)
      }
      posFromDOM(BB, TB) {
        let dB = this.tile.nearest(BB);
        if (!dB) return 2 & this.tile.dom.compareDocumentPosition(BB) ? 0 : this.view.state.doc.length;
        let VB = dB.posAtStart;
        if (!dB.isComposite()) return dB.isText() ? BB == dB.dom ? VB + TB : VB + (TB ? dB.length : 0) : VB;
        {
          let yB;
          if (BB == dB.dom) yB = dB.dom.childNodes[TB];
          else {
            let VB = 0 == xB(BB) ? 0 : 0 == TB ? -1 : 1;
            for (;;) {
              let TB = BB.parentNode;
              if (TB == dB.dom) break;
              0 == VB && TB.firstChild != TB.lastChild && (VB = BB == TB.firstChild ? -1 : 1), BB = TB
            }
            yB = VB < 0 ? BB : BB.nextSibling
          }
          if (yB == dB.dom.firstChild) return VB;
          for (; yB && !Ld.get(yB);) yB = yB.nextSibling;
          if (!yB) return VB + dB.length;
          for (let BB = 0, TB = VB;; BB++) {
            let VB = dB.children[BB];
            if (VB.dom == yB) return TB;
            TB += VB.length + VB.breakAfter
          }
        }
      }
      domAtPos(BB, TB) {
        let {
          tile: dB,
          offset: VB
        } = this.tile.resolveBlock(BB, TB);
        return dB.isWidget() ? dB.domPosFor(BB, TB) : dB.domIn(VB, TB)
      }
      inlineDOMNearPos(BB, TB) {
        let dB, VB, yB = -1,
          pB = !1,
          lB = -1,
          JB = !1;
        return this.tile.blockTiles(((TB, YB) => {
          if (TB.isWidget()) {
            if (32 & TB.flags && YB >= BB) return !0;
            16 & TB.flags && (pB = !0)
          } else {
            let gB = YB + TB.length;
            if (YB <= BB && (dB = TB, yB = BB - YB, pB = gB < BB), gB >= BB && !VB && (VB = TB, lB = BB - YB, JB = YB > BB), YB > BB && VB) return !0
          }
        })), dB || VB ? (pB && VB ? dB = null : JB && dB && (VB = null), dB && TB < 0 || !VB ? dB.domIn(yB, TB) : VB.domIn(lB, TB)) : this.domAtPos(BB, TB)
      }
      coordsAt(BB, TB) {
        let {
          tile: dB,
          offset: VB
        } = this.tile.resolveBlock(BB, TB);
        return dB.isWidget() ? dB.widget instanceof Wd ? null : dB.coordsInWidget(VB, TB, !0) : dB.coordsIn(VB, TB)
      }
      lineAt(BB, TB) {
        let {
          tile: dB
        } = this.tile.resolveBlock(BB, TB);
        return dB.isLine() ? dB : null
      }
      coordsForChar(BB) {
        let {
          tile: TB,
          offset: dB
        } = this.tile.resolveBlock(BB, 1);
        if (!TB.isLine()) return null;
        return function BB(TB, dB) {
          if (TB.isComposite())
            for (let VB of TB.children) {
              if (VB.length >= dB) {
                let TB = BB(VB, dB);
                if (TB) return TB
              }
              if ((dB -= VB.length) < 0) break
            } else if (TB.isText() && dB < TB.length) {
              let BB = (0, VB.S)(TB.text, dB);
              if (BB == dB) return null;
              let yB = VT(TB.dom, dB, BB).getClientRects();
              for (let TB = 0; TB < yB.length; TB++) {
                let BB = yB[TB];
                if (TB == yB.length - 1 || BB.top < BB.bottom && BB.left < BB.right) return BB
              }
            } return null
        }(TB, dB)
      }
      measureVisibleLineHeights(BB) {
        let TB = [],
          {
            from: dB,
            to: VB
          } = BB,
          yB = this.view.contentDOM.clientWidth,
          pB = yB > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          lB = -1,
          JB = this.view.textDirection == gT.LTR,
          YB = 0,
          gB = (BB, oB, kB) => {
            for (let LB = 0; LB < BB.children.length && !(oB > VB); LB++) {
              let VB = BB.children[LB],
                OB = oB + VB.length,
                DB = VB.dom.getBoundingClientRect(),
                {
                  height: uB
                } = DB;
              if (kB && !LB && (YB += DB.top - kB.top), VB instanceof Hd) OB > dB && gB(VB, oB, DB);
              else if (oB >= dB && (YB > 0 && TB.push(-YB), TB.push(uB + YB), YB = 0, pB)) {
                let BB = VB.dom.lastChild,
                  TB = BB ? WB(BB) : [];
                if (TB.length) {
                  let BB = TB[TB.length - 1],
                    dB = JB ? BB.right - DB.left : DB.right - BB.left;
                  dB > lB && (lB = dB, this.minWidth = yB, this.minWidthFrom = oB, this.minWidthTo = OB)
                }
              }
              kB && LB == BB.children.length - 1 && (YB += kB.bottom - DB.bottom), oB = OB + VB.breakAfter
            }
          };
        return gB(this.tile, 0, null), TB
      }
      textDirectionAt(BB) {
        let {
          tile: TB
        } = this.tile.resolveBlock(BB, 1);
        return "rtl" == getComputedStyle(TB.dom).direction ? gT.RTL : gT.LTR
      }
      measureTextSize() {
        let BB = this.tile.blockTiles((BB => {
          if (BB.isLine() && BB.children.length && BB.length <= 20) {
            let TB, dB = 0;
            for (let VB of BB.children) {
              if (!VB.isText() || /[^ -~]/.test(VB.text)) return;
              let BB = WB(VB.dom);
              if (1 != BB.length) return;
              dB += BB[0].width, TB = BB[0].height
            }
            if (dB) return {
              lineHeight: BB.dom.getBoundingClientRect().height,
              charWidth: dB / BB.length,
              textHeight: TB
            }
          }
        }));
        if (BB) return BB;
        let TB, dB, VB, yB = document.createElement("div");
        return yB.className = "cm-line", yB.style.width = "99999px", yB.style.position = "absolute", yB.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(yB);
          let BB = WB(yB.firstChild)[0];
          TB = yB.getBoundingClientRect().height, dB = BB && BB.width ? BB.width / 27 : 7, VB = BB && BB.height ? BB.height : TB, yB.remove()
        })), {
          lineHeight: TB,
          charWidth: dB,
          textHeight: VB
        }
      }
      computeBlockGapDeco() {
        let BB = [],
          TB = this.view.viewState;
        for (let dB = 0, VB = 0;; VB++) {
          let yB = VB == TB.viewports.length ? null : TB.viewports[VB],
            pB = yB ? yB.from - 1 : this.view.state.doc.length;
          if (pB > dB) {
            let VB = (TB.lineBlockAt(pB).bottom - TB.lineBlockAt(dB).top) / this.view.scaleY;
            BB.push(rB.replace({
              widget: new Wd(VB),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(dB, pB))
          }
          if (!yB) break;
          dB = yB.to + 1
        }
        return rB.set(BB)
      }
      updateDeco() {
        let BB = 1,
          TB = this.view.state.facet(Bd).map((TB => (this.dynamicDecorationMap[BB++] = "function" == typeof TB) ? TB(this.view) : TB)),
          dB = !1,
          yB = this.view.state.facet(dd).map(((BB, TB) => {
            let VB = "function" == typeof BB;
            return VB && (dB = !0), VB ? BB(this.view) : BB
          }));
        for (yB.length && (this.dynamicDecorationMap[BB++] = dB, TB.push(VB.u.join(yB))), this.QB = [this.editContextFormatting, ...TB, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; BB < this.QB.length;) this.dynamicDecorationMap[BB++] = !1;
        this.blockWrappers = this.view.state.facet(Td).map((BB => "function" == typeof BB ? BB(this.view) : BB))
      }
      scrollIntoView(BB) {
        var TB;
        if (BB.isSnapshot) {
          let TB = this.view.viewState.lineBlockAt(BB.range.head);
          return this.view.scrollDOM.scrollTop = TB.top - BB.yMargin, void(this.view.scrollDOM.scrollLeft = BB.xMargin)
        }
        for (let oB of this.view.state.facet(XT)) try {
          if (oB(this.view, BB.range, BB)) return !0
        } catch (gB) {
          GT(this.view.state, gB, "scroll handler")
        }
        let dB, {
            range: VB
          } = BB,
          yB = this.coordsAt(VB.head, null !== (TB = VB.assoc) && void 0 !== TB ? TB : VB.empty ? 0 : VB.head > VB.anchor ? -1 : 1);
        if (!yB) return;
        !VB.empty && (dB = this.coordsAt(VB.anchor, VB.anchor > VB.head ? -1 : 1)) && (yB = {
          left: Math.min(yB.left, dB.left),
          top: Math.min(yB.top, dB.top),
          right: Math.max(yB.right, dB.right),
          bottom: Math.max(yB.bottom, dB.bottom)
        });
        let pB = Jd(this.view),
          lB = {
            left: yB.left - pB.left,
            top: yB.top - pB.top,
            right: yB.right + pB.right,
            bottom: yB.bottom + pB.bottom
          },
          {
            offsetWidth: JB,
            offsetHeight: YB
          } = this.view.scrollDOM;
        if (function(BB, TB, dB, VB, yB, pB, lB, JB) {
            let YB = BB.ownerDocument,
              gB = YB.defaultView || window;
            for (let oB = BB, kB = !1; oB && !kB;)
              if (1 == oB.nodeType) {
                let BB, LB = oB == YB.body,
                  OB = 1,
                  DB = 1;
                if (LB) BB = AB(gB);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(oB).position) && (kB = !0), oB.scrollHeight <= oB.clientHeight && oB.scrollWidth <= oB.clientWidth) {
                    oB = oB.assignedSlot || oB.parentNode;
                    continue
                  }
                  let TB = oB.getBoundingClientRect();
                  ({
                    scaleX: OB,
                    scaleY: DB
                  } = bB(oB, TB)), BB = {
                    left: TB.left,
                    right: TB.left + oB.clientWidth * OB,
                    top: TB.top,
                    bottom: TB.top + oB.clientHeight * DB
                  }
                }
                let uB = 0,
                  HB = 0;
                if ("nearest" == yB) TB.top < BB.top + lB ? (HB = TB.top - (BB.top + lB), dB > 0 && TB.bottom > BB.bottom + HB && (HB = TB.bottom - BB.bottom + lB)) : TB.bottom > BB.bottom - lB && (HB = TB.bottom - BB.bottom + lB, dB < 0 && TB.top - HB < BB.top && (HB = TB.top - (BB.top + lB)));
                else {
                  let VB = TB.bottom - TB.top,
                    pB = BB.bottom - BB.top;
                  HB = ("center" == yB && VB <= pB ? TB.top + VB / 2 - pB / 2 : "start" == yB || "center" == yB && dB < 0 ? TB.top - lB : TB.bottom - pB + lB) - BB.top
                }
                if ("nearest" == VB ? TB.left < BB.left + pB ? (uB = TB.left - (BB.left + pB), dB > 0 && TB.right > BB.right + uB && (uB = TB.right - BB.right + pB)) : TB.right > BB.right - pB && (uB = TB.right - BB.right + pB, dB < 0 && TB.left < BB.left + uB && (uB = TB.left - (BB.left + pB))) : uB = ("center" == VB ? TB.left + (TB.right - TB.left) / 2 - (BB.right - BB.left) / 2 : "start" == VB == JB ? TB.left - pB : TB.right - (BB.right - BB.left) + pB) - BB.left, uB || HB)
                  if (LB) gB.scrollBy(uB, HB);
                  else {
                    let BB = 0,
                      dB = 0;
                    if (HB) {
                      let BB = oB.scrollTop;
                      oB.scrollTop += HB / DB, dB = (oB.scrollTop - BB) * DB
                    }
                    if (uB) {
                      let TB = oB.scrollLeft;
                      oB.scrollLeft += uB / OB, BB = (oB.scrollLeft - TB) * OB
                    }
                    TB = {
                      left: TB.left - BB,
                      top: TB.top - dB,
                      right: TB.right - BB,
                      bottom: TB.bottom - dB
                    }, BB && Math.abs(BB - uB) < 1 && (VB = "nearest"), dB && Math.abs(dB - HB) < 1 && (yB = "nearest")
                  } if (LB) break;
                (TB.top < BB.top || TB.bottom > BB.bottom || TB.left < BB.left || TB.right > BB.right) && (TB = {
                  left: Math.max(TB.left, BB.left),
                  right: Math.min(TB.right, BB.right),
                  top: Math.max(TB.top, BB.top),
                  bottom: Math.min(TB.bottom, BB.bottom)
                }), oB = oB.assignedSlot || oB.parentNode
              } else {
                if (11 != oB.nodeType) break;
                oB = oB.host
              }
          }(this.view.scrollDOM, lB, VB.head < VB.anchor ? -1 : 1, BB.x, BB.y, Math.max(Math.min(BB.xMargin, JB), -JB), Math.max(Math.min(BB.yMargin, YB), -YB), this.view.textDirection == gT.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (yB.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || yB.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let BB = this.view.docView.lineAt(VB.head, 1);
          BB && BB.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(BB) {
        let TB = BB => BB.isWidget() || BB.children.some(TB);
        return TB(this.tile.resolveBlock(BB, 1).tile)
      }
      destroy() {
        Rd(this.tile)
      }
    }

    function Rd(BB, TB) {
      let dB = null === TB || void 0 === TB ? void 0 : TB.get(BB);
      if (1 != dB) {
        null == dB && BB.destroy();
        for (let dB of BB.children) Rd(dB, TB)
      }
    }

    function ad(BB, TB) {
      let dB = BB.observer.selectionRange;
      if (!dB.focusNode) return null;
      let VB = lT(dB.focusNode, dB.focusOffset),
        yB = JT(dB.focusNode, dB.focusOffset),
        pB = VB || yB;
      if (yB && VB && yB.node != VB.node) {
        let TB = Ld.get(yB.node);
        if (!TB || TB.isText() && TB.text != yB.node.nodeValue) pB = yB;
        else if (BB.docView.lastCompositionAfterCursor) {
          let BB = Ld.get(VB.node);
          !BB || BB.isText() && BB.text != VB.node.nodeValue || (pB = yB)
        }
      }
      if (BB.docView.lastCompositionAfterCursor = pB != VB, !pB) return null;
      let lB = TB - pB.offset;
      return {
        from: lB,
        to: lB + pB.node.nodeValue.length,
        node: pB.node
      }
    }
    let Zd = class {
      constructor() {
        this.changes = []
      }
      compareRange(BB, TB) {
        QB(BB, TB, this.changes)
      }
      comparePoint(BB, TB) {
        QB(BB, TB, this.changes)
      }
      boundChange(BB) {
        QB(BB, BB, this.changes)
      }
    };
    class Xd {
      constructor() {
        this.changes = []
      }
      compareRange(BB, TB) {
        QB(BB, TB, this.changes)
      }
      comparePoint() {}
      boundChange(BB) {
        QB(BB, BB, this.changes)
      }
    }
    class Wd extends FB {
      constructor(BB) {
        super(), this.height = BB
      }
      toDOM() {
        let BB = document.createElement("div");
        return BB.className = "cm-gap", this.updateDOM(BB), BB
      }
      eq(BB) {
        return BB.height == this.height
      }
      updateDOM(BB) {
        return BB.style.height = this.height + "px", !0
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

    function hd(BB, TB, dB) {
      let VB = BB.lineBlockAt(TB);
      if (Array.isArray(VB.type)) {
        let BB;
        for (let yB of VB.type) {
          if (yB.from > TB) break;
          if (!(yB.to < TB)) {
            if (yB.from < TB && yB.to > TB) return yB;
            BB && (yB.type != KB.Text || BB.type == yB.type && !(dB < 0 ? yB.from < TB : yB.to > TB)) || (BB = yB)
          }
        }
        return BB || VB
      }
      return VB
    }

    function Cd(BB, TB, dB, VB) {
      let yB = BB.state.doc.lineAt(TB.head),
        pB = BB.bidiSpans(yB),
        lB = BB.textDirectionAt(yB.from);
      for (let JB = TB, YB = null;;) {
        let TB = wT(yB, pB, lB, JB, dB),
          gB = zT;
        if (!TB) {
          if (yB.number == (dB ? BB.state.doc.lines : 1)) return JB;
          gB = "\n", yB = BB.state.doc.line(yB.number + (dB ? 1 : -1)), pB = BB.bidiSpans(yB), TB = BB.visualLineSide(yB, !dB)
        }
        if (YB) {
          if (!YB(gB)) return JB
        } else {
          if (!VB) return TB;
          YB = VB(gB)
        }
        JB = TB
      }
    }

    function Gd(BB, TB, dB) {
      for (;;) {
        let VB = 0;
        for (let yB of BB) yB.between(TB - 1, TB + 1, ((BB, yB, pB) => {
          if (TB > BB && TB < yB) {
            let pB = VB || dB || (TB - BB < yB - TB ? -1 : 1);
            TB = pB < 0 ? BB : yB, VB = pB
          }
        }));
        if (!VB) return TB
      }
    }

    function qd(BB, TB) {
      let dB = null;
      for (let yB = 0; yB < TB.ek.length; yB++) {
        let pB = TB.ek[yB],
          lB = null;
        if (pB.empty) {
          let TB = Gd(BB, pB.from, 0);
          TB != pB.from && (lB = VB.h.cursor(TB, -1))
        } else {
          let TB = Gd(BB, pB.from, -1),
            dB = Gd(BB, pB.to, 1);
          TB == pB.from && dB == pB.to || (lB = VB.h.range(pB.from == pB.anchor ? TB : dB, pB.from == pB.head ? TB : dB))
        }
        lB && (dB || (dB = TB.ek.slice()), dB[yB] = lB)
      }
      return dB ? VB.h.create(dB, TB.mainIndex) : TB
    }

    function xd(BB, TB, dB) {
      let yB = Gd(BB.state.facet(Vd).map((TB => TB(BB))), dB.from, TB.head > dB.from ? -1 : 1);
      return yB == dB.from ? dB : VB.h.cursor(yB, yB < dB.from ? 1 : -1)
    }
    class jd {
      constructor(BB, TB) {
        this.pos = BB, this.assoc = TB
      }
    }

    function Ad(BB, TB, dB, yB) {
      let pB, lB = BB.contentDOM.getBoundingClientRect(),
        JB = lB.top + BB.viewState.paddingTop,
        {
          x: YB,
          y: gB
        } = TB,
        oB = gB - JB;
      for (;;) {
        if (oB < 0) return new jd(0, 1);
        if (oB > BB.viewState.docHeight) return new jd(BB.state.doc.length, -1);
        if (pB = BB.elementAtHeight(oB), null == yB) break;
        if (pB.type == KB.Text) {
          if (yB < 0 ? pB.to < BB.viewport.from : pB.from > BB.viewport.to) break;
          let TB = BB.docView.coordsAt(yB < 0 ? pB.from : pB.to, yB > 0 ? -1 : 1);
          if (TB && (yB < 0 ? TB.top <= oB + JB : TB.bottom >= oB + JB)) break
        }
        let TB = BB.viewState.heightOracle.textHeight / 2;
        oB = yB > 0 ? pB.bottom + TB : pB.top - TB
      }
      if (BB.viewport.from >= pB.to || BB.viewport.to <= pB.from) {
        if (dB) return null;
        if (pB.type == KB.Text) {
          let TB = function(BB, TB, dB, yB, pB) {
            let lB = Math.round((yB - TB.left) * BB.defaultCharacterWidth);
            if (BB.lineWrapping && dB.height > 1.5 * BB.defaultLineHeight) {
              let TB = BB.viewState.heightOracle.textHeight;
              lB += Math.floor((pB - dB.top - .5 * (BB.defaultLineHeight - TB)) / TB) * BB.viewState.heightOracle.lineLength
            }
            let JB = BB.state.sliceDoc(dB.from, dB.to);
            return dB.from + (0, VB.U)(JB, lB, BB.state.tabSize)
          }(BB, lB, pB, YB, gB);
          return new jd(TB, TB == pB.from ? 1 : -1)
        }
      }
      if (pB.type != KB.Text) return oB < (pB.top + pB.bottom) / 2 ? new jd(pB.from, 1) : new jd(pB.to, -1);
      let kB = BB.docView.lineAt(pB.from, 2);
      return kB && kB.length == pB.length || (kB = BB.docView.lineAt(pB.from, -2)), new bd(BB, YB, gB, BB.textDirectionAt(pB.from)).scanTile(kB, pB.from)
    }
    class bd {
      constructor(BB, TB, dB, VB) {
        this.view = BB, this.x = TB, this.y = dB, this.baseDir = VB, this.line = null, this.spans = null
      }
      bidiSpansAt(BB) {
        return (!this.line || this.line.from > BB || this.line.to < BB) && (this.line = this.view.state.doc.lineAt(BB), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(BB, TB) {
        let {
          line: dB,
          spans: VB
        } = this.bidiSpansAt(BB);
        return VB[mT.find(VB, BB - dB.from, -1, TB)].level == this.baseDir
      }
      dirAt(BB, TB) {
        let {
          line: dB,
          spans: VB
        } = this.bidiSpansAt(BB);
        return VB[mT.find(VB, BB - dB.from, -1, TB)].dir
      }
      bidiIn(BB, TB) {
        let {
          spans: dB,
          line: VB
        } = this.bidiSpansAt(BB);
        return dB.length > 1 || dB.length && (dB[0].level != this.baseDir || dB[0].to + VB.from < TB)
      }
      scan(BB, TB) {
        let dB, VB, yB, pB = 0,
          lB = BB.length - 1,
          JB = new Set,
          YB = this.bidiIn(BB[0], BB[lB]),
          gB = -1,
          oB = 1e9;
        BB: for (; pB < lB;) {
          let kB = lB - pB,
            LB = pB + lB >> 1;
          TB: if (JB.has(LB)) {
            let BB = pB + Math.floor(Math.random() * kB);
            for (let TB = 0; TB < kB; TB++) {
              if (!JB.has(BB)) {
                LB = BB;
                break TB
              }
              BB++, BB == lB && (BB = pB)
            }
            break BB
          } JB.add(LB);
          let OB = TB(LB);
          if (OB)
            for (let TB = 0; TB < OB.length; TB++) {
              let JB = OB[TB],
                kB = 0;
              if (!(0 == JB.width && OB.length > 1)) {
                if (JB.bottom < this.y)(!dB || dB.bottom < JB.bottom) && (dB = JB), kB = 1;
                else if (JB.top > this.y)(!VB || VB.top > JB.top) && (VB = JB), kB = -1;
                else {
                  let BB = JB.left > this.x ? this.x - JB.left : JB.right < this.x ? this.x - JB.right : 0,
                    TB = Math.abs(BB);
                  TB < oB && (gB = LB, oB = TB, yB = JB), BB && (kB = BB < 0 == (this.baseDir == gT.LTR) ? -1 : 1)
                } - 1 != kB || YB && !this.baseDirAt(BB[LB], 1) ? 1 != kB || YB && !this.baseDirAt(BB[LB + 1], -1) || (pB = LB + 1) : lB = LB
              }
            }
        }
        if (!yB) {
          let yB = dB && (!VB || this.y - dB.bottom < VB.top - this.y) ? dB : VB;
          return this.y = (yB.top + yB.bottom) / 2, this.scan(BB, TB)
        }
        if (oB) {
          if (dB && dB.bottom > yB.top) return this.y = dB.bottom - 1, this.scan(BB, TB);
          if (VB && VB.top < yB.bottom) return this.y = VB.top + 1, this.scan(BB, TB)
        }
        let kB = (YB ? this.dirAt(BB[gB], 1) : this.baseDir) == gT.LTR;
        return {
          i: gB,
          after: this.x > (yB.left + yB.right) / 2 == kB
        }
      }
      scanText(BB, TB) {
        let dB = [];
        for (let pB = 0; pB < BB.length; pB = (0, VB.S)(BB.text, pB)) dB.push(TB + pB);
        dB.push(TB + BB.length);
        let yB = this.scan(dB, (VB => {
          let yB = dB[VB] - TB,
            pB = dB[VB + 1] - TB;
          return VT(BB.dom, yB, pB).getClientRects()
        }));
        return yB.after ? new jd(dB[yB.i + 1], -1) : new jd(dB[yB.i], 1)
      }
      scanTile(BB, TB) {
        if (!BB.length) return new jd(TB, 1);
        if (1 == BB.children.length) {
          let dB = BB.children[0];
          if (dB.isText()) return this.scanText(dB, TB);
          if (dB.isComposite()) return this.scanTile(dB, TB)
        }
        let dB = [TB];
        for (let lB = 0, JB = TB; lB < BB.children.length; lB++) dB.push(JB += BB.children[lB].length);
        let VB = this.scan(dB, (TB => {
            let dB = BB.children[TB];
            return 48 & dB.flags ? null : (1 == dB.dom.nodeType ? dB.dom : VT(dB.dom, 0, dB.length)).getClientRects()
          })),
          yB = BB.children[VB.i],
          pB = dB[VB.i];
        return yB.isText() ? this.scanText(yB, pB) : yB.isComposite() ? this.scanTile(yB, pB) : VB.after ? new jd(dB[VB.i + 1], -1) : new jd(pB, 1)
      }
    }
    const nd = "\uffff";
    class ed {
      constructor(BB, TB) {
        this.points = BB, this.view = TB, this.text = "", this.lineSeparator = TB.state.facet(VB.i.lineSeparator)
      }
      append(BB) {
        this.text += BB
      }
      lineBreak() {
        this.text += nd
      }
      readRange(BB, TB) {
        if (!BB) return this;
        let dB = BB.parentNode;
        for (let VB = BB;;) {
          this.findPointBefore(dB, VB);
          let BB = this.text.length;
          this.readNode(VB);
          let yB = Ld.get(VB),
            pB = VB.nextSibling;
          if (pB == TB) {
            (null === yB || void 0 === yB ? void 0 : yB.breakAfter) && !pB && dB != this.view.contentDOM && this.lineBreak();
            break
          }
          let lB = Ld.get(pB);
          (yB && lB ? yB.breakAfter : (yB ? yB.breakAfter : GB(VB)) || GB(pB) && ("BR" != VB.nodeName || (null === yB || void 0 === yB ? void 0 : yB.isWidget())) && this.text.length > BB) && !TV(pB, TB) && this.lineBreak(), VB = pB
        }
        return this.findPointBefore(dB, TB), this
      }
      readTextNode(BB) {
        let TB = BB.nodeValue;
        for (let dB of this.points) dB.node == BB && (dB.pos = this.text.length + Math.min(dB.offset, TB.length));
        for (let dB = 0, VB = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let yB, pB = -1,
            lB = 1;
          if (this.lineSeparator ? (pB = TB.indexOf(this.lineSeparator, dB), lB = this.lineSeparator.length) : (yB = VB.exec(TB)) && (pB = yB.index, lB = yB[0].length), this.append(TB.slice(dB, pB < 0 ? TB.length : pB)), pB < 0) break;
          if (this.lineBreak(), lB > 1)
            for (let TB of this.points) TB.node == BB && TB.pos > this.text.length && (TB.pos -= lB - 1);
          dB = pB + lB
        }
      }
      readNode(BB) {
        let TB = Ld.get(BB),
          dB = TB && TB.overrideDOMText;
        if (null != dB) {
          this.findPointInside(BB, dB.length);
          for (let BB = dB.iter(); !BB.next().done;) BB.lineBreak ? this.lineBreak() : this.append(BB.value)
        } else 3 == BB.nodeType ? this.readTextNode(BB) : "BR" == BB.nodeName ? BB.nextSibling && this.lineBreak() : 1 == BB.nodeType && this.readRange(BB.firstChild, null)
      }
      findPointBefore(BB, TB) {
        for (let dB of this.points) dB.node == BB && BB.childNodes[dB.offset] == TB && (dB.pos = this.text.length)
      }
      findPointInside(BB, TB) {
        for (let dB of this.points)(3 == BB.nodeType ? dB.node == BB : BB.contains(dB.node)) && (dB.pos = this.text.length + (BV(BB, dB.node, dB.offset) ? TB : 0))
      }
    }

    function BV(BB, TB, dB) {
      for (;;) {
        if (!TB || dB < xB(TB)) return !1;
        if (TB == BB) return !0;
        dB = CB(TB) + 1, TB = TB.parentNode
      }
    }

    function TV(BB, TB) {
      let dB;
      for (; BB != TB && BB; BB = BB.nextSibling) {
        let TB = Ld.get(BB);
        if (!(null === TB || void 0 === TB ? void 0 : TB.isWidget())) return !1;
        TB && (dB || (dB = [])).push(TB)
      }
      if (dB)
        for (let VB of dB) {
          let BB = VB.overrideDOMText;
          if (null === BB || void 0 === BB ? void 0 : BB.length) return !1
        }
      return !0
    }
    class dV {
      constructor(BB, TB) {
        this.node = BB, this.offset = TB, this.pos = -1
      }
    }
    class VV {
      constructor(BB, TB, dB, yB) {
        this.typeOver = yB, this.bounds = null, this.text = "", this.domChanged = TB > -1;
        let {
          impreciseHead: pB,
          impreciseAnchor: lB
        } = BB.docView, JB = BB.state.selection;
        if (BB.state.readOnly && TB > -1) this.newSel = null;
        else if (TB > -1 && (this.bounds = yV(BB.docView.tile, TB, dB, 0))) {
          let TB = pB || lB ? [] : function(BB) {
              let TB = [];
              if (BB.root.activeElement != BB.contentDOM) return TB;
              let {
                anchorNode: dB,
                anchorOffset: VB,
                focusNode: yB,
                focusOffset: pB
              } = BB.observer.selectionRange;
              dB && (TB.push(new dV(dB, VB)), yB == dB && pB == VB || TB.push(new dV(yB, pB)));
              return TB
            }(BB),
            dB = new ed(TB, BB);
          dB.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = dB.text, this.newSel = function(BB, TB) {
            if (0 == BB.length) return null;
            let dB = BB[0].pos,
              yB = 2 == BB.length ? BB[1].pos : dB;
            return dB > -1 && yB > -1 ? VB.h.single(dB + TB, yB + TB) : null
          }(TB, this.bounds.from)
        } else {
          let TB = BB.observer.selectionRange,
            dB = pB && pB.node == TB.focusNode && pB.offset == TB.focusOffset || !ZB(BB.contentDOM, TB.focusNode) ? JB.main.head : BB.docView.posFromDOM(TB.focusNode, TB.focusOffset),
            yB = lB && lB.node == TB.anchorNode && lB.offset == TB.anchorOffset || !ZB(BB.contentDOM, TB.anchorNode) ? JB.main.anchor : BB.docView.posFromDOM(TB.anchorNode, TB.anchorOffset),
            YB = BB.viewport;
          if ((fB.ios || fB.chrome) && JB.main.empty && dB != yB && (YB.from > 0 || YB.to < BB.state.doc.length)) {
            let TB = Math.min(dB, yB),
              VB = Math.max(dB, yB),
              pB = YB.from - TB,
              lB = YB.to - VB;
            0 != pB && 1 != pB && 0 != TB || 0 != lB && -1 != lB && VB != BB.state.doc.length || (dB = 0, yB = BB.state.doc.length)
          }
          if (BB.inputState.composing > -1 && JB.ek.length > 1) this.newSel = JB.replaceRange(VB.h.range(yB, dB));
          else if (BB.lineWrapping && yB == dB && (!JB.main.empty || JB.main.head != dB) && BB.inputState.lastTouchTime > Date.now() - 100) {
            let TB = BB.coordsAtPos(dB, -1),
              yB = 0;
            TB && (yB = BB.inputState.lastTouchY <= TB.bottom ? -1 : 1), this.newSel = VB.h.create([VB.h.cursor(dB, yB)])
          } else this.newSel = VB.h.single(yB, dB)
        }
      }
    }

    function yV(BB, TB, dB, VB) {
      if (BB.isComposite()) {
        let yB = -1,
          pB = -1,
          lB = -1,
          JB = -1;
        for (let YB = 0, gB = VB, oB = VB; YB < BB.children.length; YB++) {
          let VB = BB.children[YB],
            kB = gB + VB.length;
          if (gB < TB && kB > dB) return yV(VB, TB, dB, gB);
          if (kB >= TB && -1 == yB && (yB = YB, pB = gB), gB > dB && VB.dom.parentNode == BB.dom) {
            lB = YB, JB = oB;
            break
          }
          oB = kB, gB = kB + VB.breakAfter
        }
        return {
          from: pB,
          to: JB < 0 ? VB + BB.length : JB,
          startDOM: (yB ? BB.children[yB - 1].dom.nextSibling : null) || BB.dom.firstChild,
          endDOM: lB < BB.children.length && lB >= 0 ? BB.children[lB].dom : null
        }
      }
      return BB.isText() ? {
        from: VB,
        to: VB + BB.length,
        startDOM: BB.dom,
        endDOM: BB.dom.nextSibling
      } : null
    }

    function pV(BB, TB) {
      let dB, {
          newSel: yB
        } = TB,
        {
          state: pB
        } = BB,
        lB = pB.selection.main,
        JB = BB.inputState.lastKeyTime > Date.now() - 100 ? BB.inputState.lastKeyCode : -1;
      if (TB.bounds) {
        let {
          from: BB,
          to: yB
        } = TB.bounds, YB = lB.from, gB = null;
        (8 === JB || fB.android && TB.text.length < yB - BB) && (YB = lB.to, gB = "end");
        let oB, kB, LB = pB.doc.sliceString(BB, yB, nd);
        !lB.empty && lB.from >= BB && lB.to <= yB && (TB.typeOver || LB != TB.text) && LB.slice(0, lB.from - BB) == TB.text.slice(0, lB.from - BB) && LB.slice(lB.to - BB) == TB.text.slice(oB = TB.text.length - (LB.length - (lB.to - BB))) ? dB = {
          from: lB.from,
          to: lB.to,
          insert: VB.D.of(TB.text.slice(lB.from - BB, oB).split(nd))
        } : (kB = JV(LB, TB.text, YB - BB, gB)) && (fB.chrome && 13 == JB && kB.toB == kB.from + 2 && TB.text.slice(kB.from, kB.toB) == nd + nd && kB.toB--, dB = {
          from: BB + kB.from,
          to: BB + kB.toA,
          insert: VB.D.of(TB.text.slice(kB.from, kB.toB).split(nd))
        })
      } else yB && (!BB.hasFocus && pB.facet(qT) || YV(yB, lB)) && (yB = null);
      if (!dB && !yB) return !1;
      if ((fB.mac || fB.android) && dB && dB.from == dB.to && dB.from == lB.head - 1 && /^\. ?$/.test(dB.insert.toString()) && "off" == BB.contentDOM.getAttribute("autocorrect") ? (yB && 2 == dB.insert.length && (yB = VB.h.single(yB.main.anchor - 1, yB.main.head - 1)), dB = {
          from: dB.from,
          to: dB.to,
          insert: VB.D.of([dB.insert.toString().replace(".", " ")])
        }) : pB.doc.lineAt(lB.from).to < lB.to && BB.docView.lineHasWidget(lB.to) && BB.inputState.insertingTextAt > Date.now() - 50 ? dB = {
          from: lB.from,
          to: lB.to,
          insert: pB.toText(BB.inputState.insertingText)
        } : fB.chrome && dB && dB.from == dB.to && dB.from == lB.head && "\n " == dB.insert.toString() && BB.lineWrapping && (yB && (yB = VB.h.single(yB.main.anchor - 1, yB.main.head - 1)), dB = {
          from: lB.from,
          to: lB.to,
          insert: VB.D.of([" "])
        }), dB) return lV(BB, dB, yB, JB);
      if (yB && !YV(yB, lB)) {
        let TB = !1,
          dB = "select";
        return BB.inputState.lastSelectionTime > Date.now() - 50 && ("select" == BB.inputState.lastSelectionOrigin && (TB = !0), dB = BB.inputState.lastSelectionOrigin, "select.pointer" == dB && (yB = qd(pB.facet(Vd).map((TB => TB(BB))), yB))), BB.dispatch({
          selection: yB,
          scrollIntoView: TB,
          userEvent: dB
        }), !0
      }
      return !1
    }

    function lV(BB, TB, dB) {
      let yB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (fB.ios && BB.inputState.flushIOSKey(TB)) return !0;
      let pB = BB.state.selection.main;
      if (fB.android && (TB.to == pB.to && (TB.from == pB.from || TB.from == pB.from - 1 && " " == BB.state.sliceDoc(TB.from, pB.from)) && 1 == TB.insert.length && 2 == TB.insert.lines && yT(BB.contentDOM, "Enter", 13) || (TB.from == pB.from - 1 && TB.to == pB.to && 0 == TB.insert.length || 8 == yB && TB.insert.length < TB.to - TB.from && TB.to > pB.head) && yT(BB.contentDOM, "Backspace", 8) || TB.from == pB.from && TB.to == pB.to + 1 && 0 == TB.insert.length && yT(BB.contentDOM, "Delete", 46))) return !0;
      let lB, JB = TB.insert.toString();
      BB.inputState.composing >= 0 && BB.inputState.composing++;
      let YB = () => lB || (lB = function(BB, TB, dB) {
        let yB, pB = BB.state,
          lB = pB.selection.main,
          JB = -1;
        if (TB.from == TB.to && TB.from < lB.from || TB.from > lB.to) {
          let dB = TB.from < lB.from ? -1 : 1,
            VB = dB < 0 ? lB.from : lB.to,
            yB = Gd(pB.facet(Vd).map((TB => TB(BB))), VB, dB);
          TB.from == yB && (JB = yB)
        }
        if (JB > -1) yB = {
          changes: TB,
          selection: VB.h.cursor(TB.from + TB.insert.length, -1)
        };
        else if (TB.from >= lB.from && TB.to <= lB.to && TB.to - TB.from >= (lB.to - lB.from) / 3 && (!dB || dB.main.empty && dB.main.from == TB.from + TB.insert.length) && BB.inputState.composing < 0) {
          let dB = lB.from < TB.from ? pB.sliceDoc(lB.from, TB.from) : "",
            VB = lB.to > TB.to ? pB.sliceDoc(TB.to, lB.to) : "";
          yB = pB.replaceSelection(BB.state.toText(dB + TB.insert.sliceString(0, void 0, BB.state.lineBreak) + VB))
        } else {
          let JB = pB.changes(TB),
            YB = dB && dB.main.to <= JB.newLength ? dB.main : void 0;
          if (pB.selection.ek.length > 1 && (BB.inputState.composing >= 0 || BB.inputState.compositionPendingChange) && TB.to <= lB.to + 10 && TB.to >= lB.to - 10) {
            let gB, oB = BB.state.sliceDoc(TB.from, TB.to),
              kB = dB && ad(BB, dB.main.head);
            if (kB) {
              let BB = TB.insert.length - (TB.to - TB.from);
              gB = {
                from: kB.from,
                to: kB.to - BB
              }
            } else gB = BB.state.doc.lineAt(lB.head);
            let LB = lB.to - TB.to;
            yB = pB.changeByRange((dB => {
              if (dB.from == lB.from && dB.to == lB.to) return {
                changes: JB,
                range: YB || dB.map(JB)
              };
              let yB = dB.to - LB,
                kB = yB - oB.length;
              if (BB.state.sliceDoc(kB, yB) != oB || yB >= gB.from && kB <= gB.to) return {
                range: dB
              };
              let OB = pB.changes({
                  from: kB,
                  to: yB,
                  insert: TB.insert
                }),
                DB = dB.to - lB.to;
              return {
                changes: OB,
                range: YB ? VB.h.range(Math.max(0, YB.anchor + DB), Math.max(0, YB.head + DB)) : dB.map(OB)
              }
            }))
          } else yB = {
            changes: JB,
            selection: YB && pB.selection.replaceRange(YB)
          }
        }
        let YB = "input.type";
        (BB.composing || BB.inputState.compositionPendingChange && BB.inputState.compositionEndedAt > Date.now() - 50) && (BB.inputState.compositionPendingChange = !1, YB += ".compose", BB.inputState.compositionFirstChange && (YB += ".start", BB.inputState.compositionFirstChange = !1));
        return pB.update(yB, {
          userEvent: YB,
          scrollIntoView: !0
        })
      }(BB, TB, dB));
      return BB.state.facet(ST).some((dB => dB(BB, TB.from, TB.to, JB, YB))) || BB.dispatch(YB()), !0
    }

    function JV(BB, TB, dB, VB) {
      let yB = Math.min(BB.length, TB.length),
        pB = 0;
      for (; pB < yB && BB.charCodeAt(pB) == TB.charCodeAt(pB);) pB++;
      if (pB == yB && BB.length == TB.length) return null;
      let lB = BB.length,
        JB = TB.length;
      for (; lB > 0 && JB > 0 && BB.charCodeAt(lB - 1) == TB.charCodeAt(JB - 1);) lB--, JB--;
      if ("end" == VB) {
        dB -= lB + Math.max(0, pB - Math.min(lB, JB)) - pB
      }
      if (lB < pB && BB.length < TB.length) {
        pB -= dB <= pB && dB >= lB ? pB - dB : 0, JB = pB + (JB - lB), lB = pB
      } else if (JB < pB) {
        pB -= dB <= pB && dB >= JB ? pB - dB : 0, lB = pB + (lB - JB), JB = pB
      }
      return {
        from: pB,
        toA: lB,
        toB: JB
      }
    }

    function YV(BB, TB) {
      return TB.head == BB.main.head && TB.anchor == BB.main.anchor
    }
    class gV {
      setSelectionOrigin(BB) {
        this.lastSelectionOrigin = BB, this.lastSelectionTime = Date.now()
      }
      constructor(BB) {
        this.view = BB, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = BB.hasFocus, fB.safari && BB.contentDOM.addEventListener("input", (() => null)), fB.gecko && function(BB) {
          cV.has(BB) || (cV.add(BB), BB.addEventListener("copy", (() => {})), BB.addEventListener("cut", (() => {})))
        }(BB.contentDOM.ownerDocument)
      }
      handleEvent(BB) {
        (function(BB, TB) {
          if (!TB.bubbles) return !0;
          if (TB.defaultPrevented) return !1;
          for (let dB, VB = TB.target; VB != BB.contentDOM; VB = VB.parentNode)
            if (!VB || 11 == VB.nodeType || (dB = Ld.get(VB)) && dB.isWidget() && !dB.isHidden && dB.widget.ignoreEvent(TB)) return !1;
          return !0
        })(this.view, BB) && !this.ignoreDuringComposition(BB) && ("keydown" == BB.type && this.keydown(BB) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(BB.type, BB))) : this.runHandlers(BB.type, BB)))
      }
      runHandlers(BB, TB) {
        let dB = this.handlers[BB];
        if (dB) {
          for (let BB of dB.observers) BB(this.view, TB);
          for (let BB of dB.handlers) {
            if (TB.defaultPrevented) break;
            if (BB(this.view, TB)) {
              TB.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(BB) {
        let TB = kV(BB),
          dB = this.handlers,
          VB = this.view.contentDOM;
        for (let yB in TB)
          if ("scroll" != yB) {
            let BB = !TB[yB].handlers.length,
              pB = dB[yB];
            pB && BB != !pB.handlers.length && (VB.removeEventListener(yB, this.handleEvent), pB = null), pB || VB.addEventListener(yB, this.handleEvent, {
              passive: BB
            })
          } for (let yB in dB) "scroll" == yB || TB[yB] || VB.removeEventListener(yB, this.handleEvent);
        this.handlers = TB
      }
      keydown(BB) {
        if (this.lastKeyCode = BB.keyCode, this.lastKeyTime = Date.now(), 9 == BB.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != BB.keyCode && DV.indexOf(BB.keyCode) < 0 && (this.tabFocusMode = -1), fB.android && fB.chrome && !BB.synthetic && (13 == BB.keyCode || 8 == BB.keyCode)) return this.view.observer.delayAndroidKey(BB.key, BB.keyCode), !0;
        let TB;
        return !fB.ios || BB.synthetic || BB.altKey || BB.metaKey || BB.shiftKey || !((TB = LV.find((TB => TB.keyCode == BB.keyCode))) && !BB.ctrlKey || OV.indexOf(BB.key) > -1 && BB.ctrlKey) ? (229 != BB.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = TB || BB, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(BB) {
        let TB = this.pendingIOSKey;
        return !!TB && (!("Enter" == TB.key && BB && BB.from < BB.to && /^\S+$/.test(BB.insert.toString())) && (this.pendingIOSKey = void 0, yT(this.view.contentDOM, TB.key, TB.keyCode, TB instanceof KeyboardEvent ? TB : void 0)))
      }
      ignoreDuringComposition(BB) {
        return !(!/^key/.test(BB.type) || BB.synthetic) && (this.composing > 0 || !!(fB.safari && !fB.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
      }
      startMouseSelection(BB) {
        this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = BB
      }
      update(BB) {
        this.view.observer.update(BB), this.mouseSelection && this.mouseSelection.update(BB), this.draggedContent && BB.docChanged && (this.draggedContent = this.draggedContent.map(BB.changes)), BB.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
      }
      destroy() {
        this.mouseSelection && this.mouseSelection.destroy()
      }
    }

    function oV(BB, TB) {
      return (dB, VB) => {
        try {
          return TB.call(BB, VB, dB)
        } catch (yB) {
          GT(dB.state, yB)
        }
      }
    }

    function kV(BB) {
      let TB = Object.create(null);

      function dB(BB) {
        return TB[BB] || (TB[BB] = {
          observers: [],
          handlers: []
        })
      }
      for (let VB of BB) {
        let BB = VB.spec,
          TB = BB && BB.plugin.domEventHandlers,
          yB = BB && BB.plugin.domEventObservers;
        if (TB)
          for (let pB in TB) {
            let BB = TB[pB];
            BB && dB(pB).handlers.push(oV(VB.value, BB))
          }
        if (yB)
          for (let pB in yB) {
            let BB = yB[pB];
            BB && dB(pB).observers.push(oV(VB.value, BB))
          }
      }
      for (let VB in EV) dB(VB).handlers.push(EV[VB]);
      for (let VB in vV) dB(VB).observers.push(vV[VB]);
      return TB
    }
    const LV = [{
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
      OV = "dthko",
      DV = [16, 17, 18, 20, 91, 92, 224, 225];

    function uV(BB) {
      return .7 * Math.max(0, BB) + 8
    }
    class HV {
      constructor(BB, TB, dB, yB) {
        this.view = BB, this.startEvent = TB, this.style = dB, this.mustSelect = yB, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = TB, this.scrollParents = nB(BB.contentDOM), this.atoms = BB.state.facet(Vd).map((TB => TB(BB)));
        let pB = BB.contentDOM.ownerDocument;
        pB.addEventListener("mousemove", this.move = this.move.bind(this)), pB.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = TB.shiftKey, this.multiple = BB.state.facet(VB.i.allowMultipleSelections) && function(BB, TB) {
          let dB = BB.state.facet(FT);
          return dB.length ? dB[0](TB) : fB.mac ? TB.metaKey : TB.ctrlKey
        }(BB, TB), this.dragging = !(! function(BB, TB) {
          let {
            main: dB
          } = BB.state.selection;
          if (dB.empty) return !1;
          let VB = aB(BB.root);
          if (!VB || 0 == VB.rangeCount) return !0;
          let yB = VB.getRangeAt(0).getClientRects();
          for (let pB = 0; pB < yB.length; pB++) {
            let BB = yB[pB];
            if (BB.left <= TB.clientX && BB.right >= TB.clientX && BB.top <= TB.clientY && BB.bottom >= TB.clientY) return !0
          }
          return !1
        }(BB, TB) || 1 != wV(TB)) && null
      }
      start(BB) {
        !1 === this.dragging && this.select(BB)
      }
      move(BB) {
        if (0 == BB.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (TB = this.startEvent, dB = BB, Math.max(Math.abs(TB.clientX - dB.clientX), Math.abs(TB.clientY - dB.clientY)) < 10)) return;
        var TB, dB;
        this.select(this.lastEvent = BB);
        let VB = 0,
          yB = 0,
          pB = 0,
          lB = 0,
          JB = this.view.win.innerWidth,
          YB = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: pB,
          right: JB
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: lB,
          bottom: YB
        } = this.scrollParents.y.getBoundingClientRect());
        let gB = Jd(this.view);
        BB.clientX - gB.left <= pB + 6 ? VB = -uV(pB - BB.clientX) : BB.clientX + gB.right >= JB - 6 && (VB = uV(BB.clientX - JB)), BB.clientY - gB.top <= lB + 6 ? yB = -uV(lB - BB.clientY) : BB.clientY + gB.bottom >= YB - 6 && (yB = uV(BB.clientY - YB)), this.setScrollSpeed(VB, yB)
      }
      up(BB) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || BB.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let BB = this.view.contentDOM.ownerDocument;
        BB.removeEventListener("mousemove", this.move), BB.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(BB, TB) {
        this.scrollSpeed = {
          x: BB,
          y: TB
        }, BB || TB ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: BB,
          y: TB
        } = this.scrollSpeed;
        BB && this.scrollParents.x && (this.scrollParents.x.scrollLeft += BB, BB = 0), TB && this.scrollParents.y && (this.scrollParents.y.scrollTop += TB, TB = 0), (BB || TB) && this.view.win.scrollBy(BB, TB), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(BB) {
        let {
          view: TB
        } = this, dB = qd(this.atoms, this.style.get(BB, this.extend, this.multiple));
        !this.mustSelect && dB.eq(TB.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: dB,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(BB) {
        BB.transactions.some((BB => BB.isUserEvent("input.type"))) ? this.destroy() : this.style.update(BB) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const EV = Object.create(null),
      vV = Object.create(null),
      mV = fB.ie && fB.ie_version < 15 || fB.ios && fB.webkit_version < 604;

    function iV(BB, TB, dB) {
      for (let VB of BB.facet(TB)) dB = VB(dB, BB);
      return dB
    }

    function NV(BB, TB) {
      TB = iV(BB.state, QT, TB);
      let dB, {
          state: yB
        } = BB,
        pB = 1,
        lB = yB.toText(TB),
        JB = lB.lines == yB.selection.ek.length;
      if (null != FV && yB.selection.ek.every((BB => BB.empty)) && FV == lB.toString()) {
        let BB = -1;
        dB = yB.changeByRange((dB => {
          let YB = yB.doc.lineAt(dB.from);
          if (YB.from == BB) return {
            range: dB
          };
          BB = YB.from;
          let gB = yB.toText((JB ? lB.line(pB++).text : TB) + yB.lineBreak);
          return {
            changes: {
              from: YB.from,
              insert: gB
            },
            range: VB.h.cursor(dB.from + gB.length)
          }
        }))
      } else dB = JB ? yB.changeByRange((BB => {
        let TB = lB.line(pB++);
        return {
          changes: {
            from: BB.from,
            to: BB.to,
            insert: TB.text
          },
          range: VB.h.cursor(BB.from + TB.length)
        }
      })) : yB.replaceSelection(lB);
      BB.dispatch(dB, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function tV(BB, TB, dB, yB) {
      if (1 == yB) return VB.h.cursor(TB, dB);
      if (2 == yB) return function(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          yB = BB.charCategorizer(TB),
          pB = BB.doc.lineAt(TB),
          lB = TB - pB.from;
        if (0 == pB.length) return VB.h.cursor(TB);
        0 == lB ? dB = 1 : lB == pB.length && (dB = -1);
        let JB = lB,
          YB = lB;
        dB < 0 ? JB = (0, VB.S)(pB.text, lB, !1) : YB = (0, VB.S)(pB.text, lB);
        let gB = yB(pB.text.slice(JB, YB));
        for (; JB > 0;) {
          let BB = (0, VB.S)(pB.text, JB, !1);
          if (yB(pB.text.slice(BB, JB)) != gB) break;
          JB = BB
        }
        for (; YB < pB.length;) {
          let BB = (0, VB.S)(pB.text, YB);
          if (yB(pB.text.slice(YB, BB)) != gB) break;
          YB = BB
        }
        return VB.h.range(JB + pB.from, YB + pB.from)
      }(BB.state, TB, dB);
      {
        let yB = BB.docView.lineAt(TB, dB),
          pB = BB.state.doc.lineAt(yB ? yB.posAtEnd : TB),
          lB = yB ? yB.posAtStart : pB.from,
          JB = yB ? yB.posAtEnd : pB.to;
        return JB < BB.state.doc.length && JB == pB.to && JB++, VB.h.range(lB, JB)
      }
    }
    vV.scroll = BB => {
      BB.inputState.lastScrollTop = BB.scrollDOM.scrollTop, BB.inputState.lastScrollLeft = BB.scrollDOM.scrollLeft
    }, vV.wheel = vV.mousewheel = BB => {
      BB.inputState.lastWheelEvent = Date.now()
    }, EV.keydown = (BB, TB) => (BB.inputState.setSelectionOrigin("select"), 27 == TB.keyCode && 0 != BB.inputState.tabFocusMode && (BB.inputState.tabFocusMode = Date.now() + 2e3), !1), vV.touchstart = (BB, TB) => {
      let dB = BB.inputState,
        VB = TB.targetTouches[0];
      dB.lastTouchTime = Date.now(), VB && (dB.lastTouchX = VB.clientX, dB.lastTouchY = VB.clientY), dB.setSelectionOrigin("select.pointer")
    }, vV.touchmove = BB => {
      BB.inputState.setSelectionOrigin("select.pointer")
    }, EV.mousedown = (BB, TB) => {
      if (BB.observer.flush(), BB.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let dB = null;
      for (let VB of BB.state.facet(rT))
        if (dB = VB(BB, TB), dB) break;
      if (dB || 0 != TB.button || (dB = function(BB, TB) {
          let dB = BB.posAndSideAtCoords({
              x: TB.clientX,
              y: TB.clientY
            }, !1),
            yB = wV(TB),
            pB = BB.state.selection;
          return {
            update(BB) {
              BB.docChanged && (dB.pos = BB.changes.mapPos(dB.pos), pB = pB.map(BB.changes))
            },
            get(TB, lB, JB) {
              let YB, gB = BB.posAndSideAtCoords({
                  x: TB.clientX,
                  y: TB.clientY
                }, !1),
                oB = tV(BB, gB.pos, gB.assoc, yB);
              if (dB.pos != gB.pos && !lB) {
                let TB = tV(BB, dB.pos, dB.assoc, yB),
                  pB = Math.min(TB.from, oB.from),
                  lB = Math.max(TB.to, oB.to);
                oB = pB < oB.from ? VB.h.range(pB, lB, oB.assoc) : VB.h.range(lB, pB, oB.assoc)
              }
              return lB ? pB.replaceRange(pB.main.extend(oB.from, oB.to, oB.assoc)) : JB && 1 == yB && pB.ek.length > 1 && (YB = function(BB, TB) {
                for (let dB = 0; dB < BB.ek.length; dB++) {
                  let {
                    from: yB,
                    to: pB
                  } = BB.ek[dB];
                  if (yB <= TB && pB >= TB) return VB.h.create(BB.ek.slice(0, dB).concat(BB.ek.slice(dB + 1)), BB.mainIndex == dB ? 0 : BB.mainIndex - (BB.mainIndex > dB ? 1 : 0))
                }
                return null
              }(pB, gB.pos)) ? YB : JB ? pB.addRange(oB) : VB.h.create([oB])
            }
          }
        }(BB, TB)), dB) {
        let VB = !BB.hasFocus;
        BB.inputState.startMouseSelection(new HV(BB, TB, dB, VB)), VB && BB.observer.ignore((() => {
          dT(BB.contentDOM);
          let TB = BB.root.activeElement;
          TB && !TB.contains(BB.contentDOM) && TB.blur()
        }));
        let yB = BB.inputState.mouseSelection;
        if (yB) return yB.start(TB), !1 === yB.dragging
      } else BB.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const fV = fB.ie && fB.ie_version <= 11;
    let sV = null,
      MV = 0,
      zV = 0;

    function wV(BB) {
      if (!fV) return BB.detail;
      let TB = sV,
        dB = zV;
      return sV = BB, zV = Date.now(), MV = !TB || dB > Date.now() - 400 && Math.abs(TB.clientX - BB.clientX) < 2 && Math.abs(TB.clientY - BB.clientY) < 2 ? (MV + 1) % 3 : 1
    }

    function UV(BB, TB, dB, VB) {
      if (!(dB = iV(BB.state, QT, dB))) return;
      let yB = BB.posAtCoords({
          x: TB.clientX,
          y: TB.clientY
        }, !1),
        {
          draggedContent: pB
        } = BB.inputState,
        lB = VB && pB && function(BB, TB) {
          let dB = BB.state.facet(KT);
          return dB.length ? dB[0](TB) : fB.mac ? !TB.altKey : !TB.ctrlKey
        }(BB, TB) ? {
          from: pB.from,
          to: pB.to
        } : null,
        JB = {
          from: yB,
          insert: dB
        },
        YB = BB.state.changes(lB ? [lB, JB] : JB);
      BB.focus(), BB.dispatch({
        changes: YB,
        selection: {
          anchor: YB.mapPos(yB, -1),
          head: YB.mapPos(yB, 1)
        },
        userEvent: lB ? "move.drop" : "input.drop"
      }), BB.inputState.draggedContent = null
    }
    EV.dragstart = (BB, TB) => {
      let {
        selection: {
          main: dB
        }
      } = BB.state;
      if (TB.target.draggable) {
        let yB = BB.docView.tile.nearest(TB.target);
        if (yB && yB.isWidget()) {
          let BB = yB.posAtStart,
            TB = BB + yB.length;
          (BB >= dB.to || TB <= dB.from) && (dB = VB.h.range(BB, TB))
        }
      }
      let {
        inputState: yB
      } = BB;
      return yB.mouseSelection && (yB.mouseSelection.dragging = !0), yB.draggedContent = dB, TB.dataTransfer && (TB.dataTransfer.setData("Text", iV(BB.state, RT, BB.state.sliceDoc(dB.from, dB.to))), TB.dataTransfer.effectAllowed = "copyMove"), !1
    }, EV.dragend = BB => (BB.inputState.draggedContent = null, !1), EV.drop = (BB, TB) => {
      if (!TB.dataTransfer) return !1;
      if (BB.state.readOnly) return !0;
      let dB = TB.dataTransfer.files;
      if (dB && dB.length) {
        let VB = Array(dB.length),
          yB = 0,
          pB = () => {
            ++yB == dB.length && UV(BB, TB, VB.filter((BB => null != BB)).join(BB.state.lineBreak), !1)
          };
        for (let BB = 0; BB < dB.length; BB++) {
          let TB = new FileReader;
          TB.onerror = pB, TB.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(TB.result) || (VB[BB] = TB.result), pB()
          }, TB.readAsText(dB[BB])
        }
        return !0
      } {
        let dB = TB.dataTransfer.getData("Text");
        if (dB) return UV(BB, TB, dB, !0), !0
      }
      return !1
    }, EV.paste = (BB, TB) => {
      if (BB.state.readOnly) return !0;
      BB.observer.flush();
      let dB = mV ? null : TB.clipboardData;
      return dB ? (NV(BB, dB.getData("text/plain") || dB.getData("text/uri-list")), !0) : (function(BB) {
        let TB = BB.dom.parentNode;
        if (!TB) return;
        let dB = TB.appendChild(document.createElement("textarea"));
        dB.style.cssText = "position: fixed; left: -10000px; top: 10px", dB.focus(), setTimeout((() => {
          BB.focus(), dB.remove(), NV(BB, dB.value)
        }), 50)
      }(BB), !1)
    };
    let FV = null;
    EV.copy = EV.cut = (BB, TB) => {
      if (!XB(BB.contentDOM, BB.observer.selectionRange)) return !1;
      let {
        text: dB,
        ek: VB,
        linewise: yB
      } = function(BB) {
        let TB = [],
          dB = [],
          VB = !1;
        for (let yB of BB.selection.ek) yB.empty || (TB.push(BB.sliceDoc(yB.from, yB.to)), dB.push(yB));
        if (!TB.length) {
          let yB = -1;
          for (let {
              from: VB
            }
            of BB.selection.ek) {
            let pB = BB.doc.lineAt(VB);
            pB.number > yB && (TB.push(pB.text), dB.push({
              from: pB.from,
              to: Math.min(BB.doc.length, pB.to + 1)
            })), yB = pB.number
          }
          VB = !0
        }
        return {
          text: iV(BB, RT, TB.join(BB.lineBreak)),
          ek: dB,
          linewise: VB
        }
      }(BB.state);
      if (!dB && !yB) return !1;
      FV = yB ? dB : null, "cut" != TB.type || BB.state.readOnly || BB.dispatch({
        changes: VB,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let pB = mV ? null : TB.clipboardData;
      return pB ? (pB.clearData(), pB.setData("text/plain", dB), !0) : (function(BB, TB) {
        let dB = BB.dom.parentNode;
        if (!dB) return;
        let VB = dB.appendChild(document.createElement("textarea"));
        VB.style.cssText = "position: fixed; left: -10000px; top: 10px", VB.value = TB, VB.focus(), VB.selectionEnd = TB.length, VB.selectionStart = 0, setTimeout((() => {
          VB.remove(), BB.focus()
        }), 50)
      }(BB, dB), !1)
    };
    const KV = VB.c.define();

    function rV(BB, TB) {
      let dB = [];
      for (let VB of BB.facet(PT)) {
        let yB = VB(BB, TB);
        yB && dB.push(yB)
      }
      return dB.length ? BB.update({
        effects: dB,
        annotations: KV.of(!0)
      }) : null
    }

    function IV(BB) {
      setTimeout((() => {
        let TB = BB.hasFocus;
        if (TB != BB.inputState.notifiedFocused) {
          let dB = rV(BB.state, TB);
          dB ? BB.dispatch(dB) : BB.update([])
        }
      }), 10)
    }
    vV.focus = BB => {
      BB.inputState.lastFocusTime = Date.now(), BB.scrollDOM.scrollTop || !BB.inputState.lastScrollTop && !BB.inputState.lastScrollLeft || (BB.scrollDOM.scrollTop = BB.inputState.lastScrollTop, BB.scrollDOM.scrollLeft = BB.inputState.lastScrollLeft), IV(BB)
    }, vV.blur = BB => {
      BB.observer.clearSelectionRange(), IV(BB)
    }, vV.compositionstart = vV.compositionupdate = BB => {
      BB.observer.editContext || (null == BB.inputState.compositionFirstChange && (BB.inputState.compositionFirstChange = !0), BB.inputState.composing < 0 && (BB.inputState.composing = 0))
    }, vV.compositionend = BB => {
      BB.observer.editContext || (BB.inputState.composing = -1, BB.inputState.compositionEndedAt = Date.now(), BB.inputState.compositionPendingKey = !0, BB.inputState.compositionPendingChange = BB.observer.pendingRecords().length > 0, BB.inputState.compositionFirstChange = null, fB.chrome && fB.android ? BB.observer.flushSoon() : BB.inputState.compositionPendingChange ? Promise.resolve().then((() => BB.observer.flush())) : setTimeout((() => {
        BB.inputState.composing < 0 && BB.docView.hasComposition && BB.update([])
      }), 50))
    }, vV.contextmenu = BB => {
      BB.inputState.lastContextMenu = Date.now()
    }, EV.beforeinput = (BB, TB) => {
      var dB, VB;
      if ("insertText" != TB.inputType && "insertCompositionText" != TB.inputType || (BB.inputState.insertingText = TB.data, BB.inputState.insertingTextAt = Date.now()), "insertReplacementText" == TB.inputType && BB.observer.editContext) {
        let VB = null === (dB = TB.dataTransfer) || void 0 === dB ? void 0 : dB.getData("text/plain"),
          yB = TB.getTargetRanges();
        if (VB && yB.length) {
          let TB = yB[0],
            dB = BB.posAtDOM(TB.startContainer, TB.startOffset),
            pB = BB.posAtDOM(TB.endContainer, TB.endOffset);
          return lV(BB, {
            from: dB,
            to: pB,
            insert: BB.state.toText(VB)
          }, null), !0
        }
      }
      let yB;
      if (fB.chrome && fB.android && (yB = LV.find((BB => BB.inputType == TB.inputType))) && (BB.observer.delayAndroidKey(yB.key, yB.keyCode), "Backspace" == yB.key || "Delete" == yB.key)) {
        let TB = (null === (VB = window.visualViewport) || void 0 === VB ? void 0 : VB.height) || 0;
        setTimeout((() => {
          var dB;
          ((null === (dB = window.visualViewport) || void 0 === dB ? void 0 : dB.height) || 0) > TB + 10 && BB.hasFocus && (BB.contentDOM.blur(), BB.focus())
        }), 100)
      }
      return fB.ios && "deleteContentForward" == TB.inputType && BB.observer.flushSoon(), fB.safari && "insertText" == TB.inputType && BB.inputState.composing >= 0 && setTimeout((() => vV.compositionend(BB, TB)), 20), !1
    };
    const cV = new Set;
    const SV = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let PV = !1;

    function QV() {
      PV = !1
    }
    class RV {
      constructor(BB) {
        this.lineWrapping = BB, this.doc = VB.D.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(BB, TB) {
        let dB = this.doc.lineAt(TB).number - this.doc.lineAt(BB).number + 1;
        return this.lineWrapping && (dB += Math.max(0, Math.ceil((TB - BB - dB * this.lineLength * .5) / this.lineLength))), this.lineHeight * dB
      }
      heightForLine(BB) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((BB - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(BB) {
        return this.doc = BB, this
      }
      mustRefreshForWrapping(BB) {
        return SV.indexOf(BB) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(BB) {
        let TB = !1;
        for (let dB = 0; dB < BB.length; dB++) {
          let VB = BB[dB];
          VB < 0 ? dB++ : this.heightSamples[Math.floor(10 * VB)] || (TB = !0, this.heightSamples[Math.floor(10 * VB)] = !0)
        }
        return TB
      }
      refresh(BB, TB, dB, VB, yB, pB) {
        let lB = SV.indexOf(BB) > -1,
          JB = Math.abs(TB - this.lineHeight) > .3 || this.lineWrapping != lB || Math.abs(dB - this.charWidth) > .1;
        if (this.lineWrapping = lB, this.lineHeight = TB, this.charWidth = dB, this.textHeight = VB, this.lineLength = yB, JB) {
          this.heightSamples = {};
          for (let BB = 0; BB < pB.length; BB++) {
            let TB = pB[BB];
            TB < 0 ? BB++ : this.heightSamples[Math.floor(10 * TB)] = !0
          }
        }
        return JB
      }
    }
    class aV {
      constructor(BB, TB) {
        this.from = BB, this.heights = TB, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class ZV {
      constructor(BB, TB, dB, VB, yB) {
        this.from = BB, this.length = TB, this.top = dB, this.height = VB, this._content = yB
      }
      get type() {
        return "number" == typeof this._content ? KB.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof SB ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(BB) {
        let TB = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(BB._content) ? BB._content : [BB]);
        return new ZV(this.from, this.length + BB.length, this.top, this.height + BB.height, TB)
      }
    }
    var XV = function(BB) {
      return BB[BB.ByPos = 0] = "ByPos", BB[BB.ByHeight = 1] = "ByHeight", BB[BB.ByPosNoHeight = 2] = "ByPosNoHeight", BB
    }(XV || (XV = {}));
    const WV = .001;
    class hV {
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = BB, this.height = TB, this.flags = dB
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(BB) {
        this.flags = (BB ? 2 : 0) | -3 & this.flags
      }
      setHeight(BB) {
        this.height != BB && (Math.abs(this.height - BB) > WV && (PV = !0), this.height = BB)
      }
      replace(BB, TB, dB) {
        return hV.of(dB)
      }
      decomposeLeft(BB, TB) {
        TB.push(this)
      }
      decomposeRight(BB, TB) {
        TB.push(this)
      }
      applyChanges(BB, TB, dB, VB) {
        let yB = this,
          pB = dB.doc;
        for (let lB = VB.length - 1; lB >= 0; lB--) {
          let {
            fromA: JB,
            toA: YB,
            fromB: gB,
            toB: oB
          } = VB[lB], kB = yB.lineAt(JB, XV.ByPosNoHeight, dB.setDoc(TB), 0, 0), LB = kB.to >= YB ? kB : yB.lineAt(YB, XV.ByPosNoHeight, dB, 0, 0);
          for (oB += LB.to - YB, YB = LB.to; lB > 0 && kB.from <= VB[lB - 1].toA;) JB = VB[lB - 1].fromA, gB = VB[lB - 1].fromB, lB--, JB < kB.from && (kB = yB.lineAt(JB, XV.ByPosNoHeight, dB, 0, 0));
          gB += kB.from - JB, JB = kB.from;
          let OB = nV.build(dB.setDoc(pB), BB, gB, oB);
          yB = CV(yB, yB.replace(JB, YB, OB))
        }
        return yB.updateHeight(dB, 0)
      }
      static empty() {
        return new xV(0, 0, 0)
      }
      static of (BB) {
        if (1 == BB.length) return BB[0];
        let TB = 0,
          dB = BB.length,
          VB = 0,
          yB = 0;
        for (;;)
          if (TB == dB)
            if (VB > 2 * yB) {
              let yB = BB[TB - 1];
              yB.break ? BB.splice(--TB, 1, yB.left, null, yB.right) : BB.splice(--TB, 1, yB.left, yB.right), dB += 1 + yB.break, VB -= yB.size
            } else {
              if (!(yB > 2 * VB)) break;
              {
                let TB = BB[dB];
                TB.break ? BB.splice(dB, 1, TB.left, null, TB.right) : BB.splice(dB, 1, TB.left, TB.right), dB += 2 + TB.break, yB -= TB.size
              }
            }
        else if (VB < yB) {
          let dB = BB[TB++];
          dB && (VB += dB.size)
        } else {
          let TB = BB[--dB];
          TB && (yB += TB.size)
        }
        let pB = 0;
        return null == BB[TB - 1] ? (pB = 1, TB--) : null == BB[TB] && (pB = 1, dB++), new AV(hV.of(BB.slice(0, TB)), pB, hV.of(BB.slice(dB)))
      }
    }

    function CV(BB, TB) {
      return BB == TB ? BB : (BB.constructor != TB.constructor && (PV = !0), TB)
    }
    hV.prototype.size = 1;
    const GV = rB.replace({});
    class qV extends hV {
      constructor(BB, TB, dB) {
        super(BB, TB), this.deco = dB, this.spaceAbove = 0
      }
      mainBlock(BB, TB) {
        return new ZV(TB, this.length, BB + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(BB, TB, dB, VB) {
        return this.spaceAbove && BB < dB + this.spaceAbove ? new ZV(VB, 0, dB, this.spaceAbove, GV) : this.mainBlock(dB, VB)
      }
      lineAt(BB, TB, dB, VB, yB) {
        let pB = this.mainBlock(VB, yB);
        return this.spaceAbove ? this.blockAt(0, dB, VB, yB).join(pB) : pB
      }
      forEachLine(BB, TB, dB, VB, yB, pB) {
        BB <= yB + this.length && TB >= yB && pB(this.lineAt(0, XV.ByPos, dB, VB, yB))
      }
      setMeasuredHeight(BB) {
        let TB = BB.heights[BB.index++];
        TB < 0 ? (this.spaceAbove = -TB, TB = BB.heights[BB.index++]) : this.spaceAbove = 0, this.setHeight(TB)
      }
      updateHeight(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          dB = arguments.length > 3 ? arguments[3] : void 0;
        return dB && dB.from <= TB && dB.more && this.setMeasuredHeight(dB), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class xV extends qV {
      constructor(BB, TB, dB) {
        super(BB, TB, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = dB
      }
      mainBlock(BB, TB) {
        return new ZV(TB, this.length, BB + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(BB, TB, dB) {
        let VB = dB[0];
        return 1 == dB.length && (VB instanceof xV || VB instanceof jV && 4 & VB.flags) && Math.abs(this.length - VB.length) < 10 ? (VB instanceof jV ? VB = new xV(VB.length, this.height, this.spaceAbove) : VB.height = this.height, this.outdated || (VB.outdated = !1), VB) : hV.of(dB)
      }
      updateHeight(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          VB = arguments.length > 3 ? arguments[3] : void 0;
        return VB && VB.from <= TB && VB.more ? this.setMeasuredHeight(VB) : (dB || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, BB.heightForLine(this.length - this.collapsed)) + this.breaks * BB.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class jV extends hV {
      constructor(BB) {
        super(BB, 0)
      }
      heightMetrics(BB, TB) {
        let dB, VB = BB.doc.lineAt(TB).number,
          yB = BB.doc.lineAt(TB + this.length).number,
          pB = yB - VB + 1,
          lB = 0;
        if (BB.lineWrapping) {
          let TB = Math.min(this.height, BB.lineHeight * pB);
          dB = TB / pB, this.length > pB + 1 && (lB = (this.height - TB) / (this.length - pB - 1))
        } else dB = this.height / pB;
        return {
          firstLine: VB,
          lastLine: yB,
          perLine: dB,
          perChar: lB
        }
      }
      blockAt(BB, TB, dB, VB) {
        let {
          firstLine: yB,
          lastLine: pB,
          perLine: lB,
          perChar: JB
        } = this.heightMetrics(TB, VB);
        if (TB.lineWrapping) {
          let yB = VB + (BB < TB.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (BB - dB) / this.height)) * this.length)),
            pB = TB.doc.lineAt(yB),
            YB = lB + pB.length * JB,
            gB = Math.max(dB, BB - YB / 2);
          return new ZV(pB.from, pB.length, gB, YB, 0)
        } {
          let VB = Math.max(0, Math.min(pB - yB, Math.floor((BB - dB) / lB))),
            {
              from: JB,
              length: YB
            } = TB.doc.line(yB + VB);
          return new ZV(JB, YB, dB + lB * VB, lB, 0)
        }
      }
      lineAt(BB, TB, dB, VB, yB) {
        if (TB == XV.ByHeight) return this.blockAt(BB, dB, VB, yB);
        if (TB == XV.ByPosNoHeight) {
          let {
            from: TB,
            to: VB
          } = dB.doc.lineAt(BB);
          return new ZV(TB, VB - TB, 0, 0, 0)
        }
        let {
          firstLine: pB,
          perLine: lB,
          perChar: JB
        } = this.heightMetrics(dB, yB), YB = dB.doc.lineAt(BB), gB = lB + YB.length * JB, oB = YB.number - pB, kB = VB + lB * oB + JB * (YB.from - yB - oB);
        return new ZV(YB.from, YB.length, Math.max(VB, Math.min(kB, VB + this.height - gB)), gB, 0)
      }
      forEachLine(BB, TB, dB, VB, yB, pB) {
        BB = Math.max(BB, yB), TB = Math.min(TB, yB + this.length);
        let {
          firstLine: lB,
          perLine: JB,
          perChar: YB
        } = this.heightMetrics(dB, yB);
        for (let gB = BB, oB = VB; gB <= TB;) {
          let TB = dB.doc.lineAt(gB);
          if (gB == BB) {
            let dB = TB.number - lB;
            oB += JB * dB + YB * (BB - yB - dB)
          }
          let VB = JB + YB * TB.length;
          pB(new ZV(TB.from, TB.length, oB, VB, 0)), oB += VB, gB = TB.to + 1
        }
      }
      replace(BB, TB, dB) {
        let VB = this.length - TB;
        if (VB > 0) {
          let BB = dB[dB.length - 1];
          BB instanceof jV ? dB[dB.length - 1] = new jV(BB.length + VB) : dB.push(null, new jV(VB - 1))
        }
        if (BB > 0) {
          let TB = dB[0];
          TB instanceof jV ? dB[0] = new jV(BB + TB.length) : dB.unshift(new jV(BB - 1), null)
        }
        return hV.of(dB)
      }
      decomposeLeft(BB, TB) {
        TB.push(new jV(BB - 1), null)
      }
      decomposeRight(BB, TB) {
        TB.push(null, new jV(this.length - BB - 1))
      }
      updateHeight(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          VB = arguments.length > 3 ? arguments[3] : void 0,
          yB = TB + this.length;
        if (VB && VB.from <= TB + this.length && VB.more) {
          let dB = [],
            pB = Math.max(TB, VB.from),
            lB = -1;
          for (VB.from > TB && dB.push(new jV(VB.from - TB - 1).updateHeight(BB, TB)); pB <= yB && VB.more;) {
            let TB = BB.doc.lineAt(pB).length;
            dB.length && dB.push(null);
            let yB = VB.heights[VB.index++],
              JB = 0;
            yB < 0 && (JB = -yB, yB = VB.heights[VB.index++]), -1 == lB ? lB = yB : Math.abs(yB - lB) >= WV && (lB = -2);
            let YB = new xV(TB, yB, JB);
            YB.outdated = !1, dB.push(YB), pB += TB + 1
          }
          pB <= yB && dB.push(null, new jV(yB - pB).updateHeight(BB, pB));
          let JB = hV.of(dB);
          return (lB < 0 || Math.abs(JB.height - this.height) >= WV || Math.abs(lB - this.heightMetrics(BB, TB).perLine) >= WV) && (PV = !0), CV(this, JB)
        }
        return (dB || this.outdated) && (this.setHeight(BB.heightForGap(TB, TB + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class AV extends hV {
      constructor(BB, TB, dB) {
        super(BB.length + TB + dB.length, BB.height + dB.height, TB | (BB.outdated || dB.outdated ? 2 : 0)), this.left = BB, this.right = dB, this.size = BB.size + dB.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(BB, TB, dB, VB) {
        let yB = dB + this.left.height;
        return BB < yB ? this.left.blockAt(BB, TB, dB, VB) : this.right.blockAt(BB, TB, yB, VB + this.left.length + this.break)
      }
      lineAt(BB, TB, dB, VB, yB) {
        let pB = VB + this.left.height,
          lB = yB + this.left.length + this.break,
          JB = TB == XV.ByHeight ? BB < pB : BB < lB,
          YB = JB ? this.left.lineAt(BB, TB, dB, VB, yB) : this.right.lineAt(BB, TB, dB, pB, lB);
        if (this.break || (JB ? YB.to < lB : YB.from > lB)) return YB;
        let gB = TB == XV.ByPosNoHeight ? XV.ByPosNoHeight : XV.ByPos;
        return JB ? YB.join(this.right.lineAt(lB, gB, dB, pB, lB)) : this.left.lineAt(lB, gB, dB, VB, yB).join(YB)
      }
      forEachLine(BB, TB, dB, VB, yB, pB) {
        let lB = VB + this.left.height,
          JB = yB + this.left.length + this.break;
        if (this.break) BB < JB && this.left.forEachLine(BB, TB, dB, VB, yB, pB), TB >= JB && this.right.forEachLine(BB, TB, dB, lB, JB, pB);
        else {
          let YB = this.lineAt(JB, XV.ByPos, dB, VB, yB);
          BB < YB.from && this.left.forEachLine(BB, YB.from - 1, dB, VB, yB, pB), YB.to >= BB && YB.from <= TB && pB(YB), TB > YB.to && this.right.forEachLine(YB.to + 1, TB, dB, lB, JB, pB)
        }
      }
      replace(BB, TB, dB) {
        let VB = this.left.length + this.break;
        if (TB < VB) return this.balanced(this.left.replace(BB, TB, dB), this.right);
        if (BB > this.left.length) return this.balanced(this.left, this.right.replace(BB - VB, TB - VB, dB));
        let yB = [];
        BB > 0 && this.decomposeLeft(BB, yB);
        let pB = yB.length;
        for (let lB of dB) yB.push(lB);
        if (BB > 0 && bV(yB, pB - 1), TB < this.length) {
          let BB = yB.length;
          this.decomposeRight(TB, yB), bV(yB, BB)
        }
        return hV.of(yB)
      }
      decomposeLeft(BB, TB) {
        let dB = this.left.length;
        if (BB <= dB) return this.left.decomposeLeft(BB, TB);
        TB.push(this.left), this.break && (dB++, BB >= dB && TB.push(null)), BB > dB && this.right.decomposeLeft(BB - dB, TB)
      }
      decomposeRight(BB, TB) {
        let dB = this.left.length,
          VB = dB + this.break;
        if (BB >= VB) return this.right.decomposeRight(BB - VB, TB);
        BB < dB && this.left.decomposeRight(BB, TB), this.break && BB < VB && TB.push(null), TB.push(this.right)
      }
      balanced(BB, TB) {
        return BB.size > 2 * TB.size || TB.size > 2 * BB.size ? hV.of(this.break ? [BB, null, TB] : [BB, TB]) : (this.left = CV(this.left, BB), this.right = CV(this.right, TB), this.setHeight(BB.height + TB.height), this.outdated = BB.outdated || TB.outdated, this.size = BB.size + TB.size, this.length = BB.length + this.break+TB.length, this)
      }
      updateHeight(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          VB = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: yB,
            right: pB
          } = this,
          lB = TB + yB.length + this.break,
          JB = null;
        return VB && VB.from <= TB + yB.length && VB.more ? JB = yB = yB.updateHeight(BB, TB, dB, VB) : yB.updateHeight(BB, TB, dB), VB && VB.from <= lB + pB.length && VB.more ? JB = pB = pB.updateHeight(BB, lB, dB, VB) : pB.updateHeight(BB, lB, dB), JB ? this.balanced(yB, pB) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function bV(BB, TB) {
      let dB, VB;
      null == BB[TB] && (dB = BB[TB - 1]) instanceof jV && (VB = BB[TB + 1]) instanceof jV && BB.splice(TB - 1, 3, new jV(dB.length + 1 + VB.length))
    }
    class nV {
      constructor(BB, TB) {
        this.pos = BB, this.oracle = TB, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = BB
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(BB, TB) {
        if (this.lineStart > -1) {
          let BB = Math.min(TB, this.lineEnd),
            dB = this.nodes[this.nodes.length - 1];
          dB instanceof xV ? dB.length += BB - this.pos : (BB > this.pos || !this.isCovered) && this.nodes.push(new xV(BB - this.pos, -1, 0)), this.writtenTo = BB, TB > BB && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = TB
      }
      point(BB, TB, dB) {
        if (BB < TB || dB.heightRelevant) {
          let VB = dB.widget ? dB.widget.estimatedHeight : 0,
            yB = dB.widget ? dB.widget.lineBreaks : 0;
          VB < 0 && (VB = this.oracle.lineHeight);
          let pB = TB - BB;
          dB.block ? this.UTB(new qV(pB, VB, dB)) : (pB || yB || VB >= 5) && this.addLineDeco(VB, yB, pB)
        } else TB > BB && this.span(BB, TB);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: BB,
          to: TB
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = BB, this.lineEnd = TB, this.writtenTo < BB && ((this.writtenTo < BB - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, BB - 1)), this.nodes.push(null)), this.pos > BB && this.nodes.push(new xV(this.pos - BB, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(BB, TB) {
        let dB = new jV(TB - BB);
        return this.oracle.doc.lineAt(BB).to == TB && (dB.flags |= 4), dB
      }
      ensureLine() {
        this.enterLine();
        let BB = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (BB instanceof xV) return BB;
        let TB = new xV(0, -1, 0);
        return this.nodes.push(TB), TB
      }
      UTB(BB) {
        this.enterLine();
        let TB = BB.deco;
        TB && TB.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(BB), this.writtenTo = this.pos = this.pos + BB.length, TB && TB.endSide > 0 && (this.covering = BB)
      }
      addLineDeco(BB, TB, dB) {
        let VB = this.ensureLine();
        VB.length += dB, VB.collapsed += dB, VB.widgetHeight = Math.max(VB.widgetHeight, BB), VB.breaks += TB, this.writtenTo = this.pos = this.pos + dB
      }
      finish(BB) {
        let TB = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || TB instanceof xV || this.isCovered ? (this.writtenTo < this.pos || null == TB) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new xV(0, -1, 0));
        let dB = BB;
        for (let VB of this.nodes) VB instanceof xV && VB.updateHeight(this.oracle, dB), dB += VB ? VB.length : 1;
        return this.nodes
      }
      static build(BB, TB, dB, yB) {
        let pB = new nV(dB, BB);
        return VB.u.spans(TB, dB, yB, pB, 0), pB.finish(dB)
      }
    }
    class eV {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(BB, TB, dB, VB) {
        (BB < TB || dB && dB.heightRelevant || VB && VB.heightRelevant) && QB(BB, TB, this.changes, 5)
      }
    }

    function By(BB, TB) {
      let dB = BB.getBoundingClientRect(),
        VB = BB.ownerDocument,
        yB = VB.defaultView || window,
        pB = Math.max(0, dB.left),
        lB = Math.min(yB.innerWidth, dB.right),
        JB = Math.max(0, dB.top),
        YB = Math.min(yB.innerHeight, dB.bottom);
      for (let gB = BB.parentNode; gB && gB != VB.body;)
        if (1 == gB.nodeType) {
          let TB = gB,
            dB = window.getComputedStyle(TB);
          if ((TB.scrollHeight > TB.clientHeight || TB.scrollWidth > TB.clientWidth) && "visible" != dB.overflow) {
            let dB = TB.getBoundingClientRect();
            pB = Math.max(pB, dB.left), lB = Math.min(lB, dB.right), JB = Math.max(JB, dB.top), YB = Math.min(gB == BB.parentNode ? yB.innerHeight : YB, dB.bottom)
          }
          gB = "absolute" == dB.position || "fixed" == dB.position ? TB.offsetParent : TB.parentNode
        } else {
          if (11 != gB.nodeType) break;
          gB = gB.host
        } return {
        left: pB - dB.left,
        right: Math.max(pB, lB) - dB.left,
        top: JB - (dB.top + TB),
        bottom: Math.max(JB, YB) - (dB.top + TB)
      }
    }

    function Ty(BB, TB) {
      let dB = BB.getBoundingClientRect();
      return {
        left: 0,
        right: dB.right - dB.left,
        top: TB,
        bottom: dB.bottom - (dB.top + TB)
      }
    }
    class dy {
      constructor(BB, TB, dB, VB) {
        this.from = BB, this.to = TB, this.size = dB, this.displaySize = VB
      }
      static same(BB, TB) {
        if (BB.length != TB.length) return !1;
        for (let dB = 0; dB < BB.length; dB++) {
          let VB = BB[dB],
            yB = TB[dB];
          if (VB.from != yB.from || VB.to != yB.to || VB.size != yB.size) return !1
        }
        return !0
      }
      draw(BB, TB) {
        return rB.replace({
          widget: new Vy(this.displaySize * (TB ? BB.scaleY : BB.scaleX), TB)
        }).range(this.from, this.to)
      }
    }
    class Vy extends FB {
      constructor(BB, TB) {
        super(), this.size = BB, this.vertical = TB
      }
      eq(BB) {
        return BB.size == this.size && BB.vertical == this.vertical
      }
      toDOM() {
        let BB = document.createElement("div");
        return this.vertical ? BB.style.height = this.size + "px" : (BB.style.width = this.size + "px", BB.style.height = "2px", BB.style.display = "inline-block"), BB
      }
      get estimatedHeight() {
        return this.vertical ? this.size : -1
      }
    }
    class yy {
      constructor(BB, TB) {
        this.view = BB, this.state = TB, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = Yy, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = gT.LTR, this.BBB = [], this.mustEnforceCursorAssoc = !1;
        let dB = TB.facet(eT).some((BB => "function" != typeof BB && "cm-lineWrapping" == BB.class));
        this.heightOracle = new RV(dB), this.stateDeco = gy(TB), this.heightMap = hV.empty().applyChanges(this.stateDeco, VB.D.empty, this.heightOracle.setDoc(TB.doc), [new gd(0, 0, 0, TB.doc.length)]);
        for (let VB = 0; VB < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); VB++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = rB.set(this.lineGaps.map((BB => BB.draw(this, !1)))), this.scrollParent = BB.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let BB = [this.viewport],
          {
            main: TB
          } = this.state.selection;
        for (let dB = 0; dB <= 1; dB++) {
          let VB = dB ? TB.head : TB.anchor;
          if (!BB.some((BB => {
              let {
                from: TB,
                to: dB
              } = BB;
              return VB >= TB && VB <= dB
            }))) {
            let {
              from: TB,
              to: dB
            } = this.lineBlockAt(VB);
            BB.push(new py(TB, dB))
          }
        }
        return this.viewports = BB.sort(((BB, TB) => BB.from - TB.from)), this.updateScaler()
      }
      updateScaler() {
        let BB = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? Yy : new oy(this.heightOracle, this.heightMap, this.viewports), BB.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (BB => {
          this.viewportLines.push(ky(BB, this.scaler))
        }))
      }
      update(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = BB.state;
        let dB = this.stateDeco;
        this.stateDeco = gy(this.state);
        let yB = BB.changedRanges,
          pB = gd.extendWithRanges(yB, function(BB, TB, dB) {
            let yB = new eV;
            return VB.u.compare(BB, TB, dB, yB, 0), yB.changes
          }(dB, this.stateDeco, BB ? BB.changes : VB.ChangeSet.empty(this.state.doc.length))),
          lB = this.heightMap.height,
          JB = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        QV(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, BB.startState.doc, this.heightOracle.setDoc(this.state.doc), pB), (this.heightMap.height != lB || PV) && (BB.flags |= 2), JB ? (this.scrollAnchorPos = BB.changes.mapPos(JB.from, -1), this.scrollAnchorHeight = JB.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = lB);
        let YB = pB.length ? this.mapViewport(this.viewport, BB.changes) : this.viewport;
        (TB && (TB.range.head < YB.from || TB.range.head > YB.to) || !this.viewportIsAppropriate(YB)) && (YB = this.getViewport(0, TB));
        let gB = YB.from != this.viewport.from || YB.to != this.viewport.to;
        this.viewport = YB, BB.flags |= this.updateForViewport(), (gB || !BB.changes.empty || 2 & BB.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, BB.changes))), BB.flags |= this.computeVisibleRanges(BB.changes), TB && (this.scrollTarget = TB), !this.mustEnforceCursorAssoc && (BB.selectionSet || BB.focusChanged) && BB.view.lineWrapping && BB.state.selection.main.empty && BB.state.selection.main.assoc && !BB.state.facet(ZT) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: BB
        } = this, TB = BB.contentDOM, dB = window.getComputedStyle(TB), yB = this.heightOracle, pB = dB.whiteSpace;
        this.defaultTextDirection = "rtl" == dB.direction ? gT.RTL : gT.LTR;
        let lB = this.heightOracle.mustRefreshForWrapping(pB) || "refresh" === this.mustMeasureContent,
          JB = TB.getBoundingClientRect(),
          YB = lB || this.mustMeasureContent || this.contentDOMHeight != JB.height;
        this.contentDOMHeight = JB.height, this.mustMeasureContent = !1;
        let gB = 0,
          oB = 0;
        if (JB.width && JB.height) {
          let {
            scaleX: BB,
            scaleY: dB
          } = bB(TB, JB);
          (BB > .005 && Math.abs(this.scaleX - BB) > .005 || dB > .005 && Math.abs(this.scaleY - dB) > .005) && (this.scaleX = BB, this.scaleY = dB, gB |= 16, lB = YB = !0)
        }
        let kB = (parseInt(dB.paddingTop) || 0) * this.scaleY,
          LB = (parseInt(dB.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == kB && this.paddingBottom == LB || (this.paddingTop = kB, this.paddingBottom = LB, gB |= 18), this.editorWidth != BB.scrollDOM.clientWidth && (yB.lineWrapping && (YB = !0), this.editorWidth = BB.scrollDOM.clientWidth, gB |= 16);
        let OB = nB(this.view.contentDOM, !1).y;
        OB != this.scrollParent && (this.scrollParent = OB, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let DB = this.getScrollOffset();
        this.scrollOffset != DB && (this.scrollAnchorHeight = -1, this.scrollOffset = DB), this.scrolledToBottom = pT(this.scrollParent || BB.win);
        let uB = (this.printing ? Ty : By)(TB, this.paddingTop),
          HB = uB.top - this.pixelViewport.top,
          EB = uB.bottom - this.pixelViewport.bottom;
        this.pixelViewport = uB;
        let vB = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (vB != this.inView && (this.inView = vB, vB && (YB = !0)), !this.inView && !this.scrollTarget && ! function(BB) {
            let TB = BB.getBoundingClientRect(),
              dB = BB.ownerDocument.defaultView || window;
            return TB.left < dB.innerWidth && TB.right > 0 && TB.top < dB.innerHeight && TB.bottom > 0
          }(BB.dom)) return 0;
        let mB = JB.width;
        if (this.contentDOMWidth == mB && this.editorHeight == BB.scrollDOM.clientHeight || (this.contentDOMWidth = JB.width, this.editorHeight = BB.scrollDOM.clientHeight, gB |= 16), YB) {
          let TB = BB.docView.measureVisibleLineHeights(this.viewport);
          if (yB.mustRefreshForHeights(TB) && (lB = !0), lB || yB.lineWrapping && Math.abs(mB - this.contentDOMWidth) > yB.charWidth) {
            let {
              lineHeight: dB,
              charWidth: VB,
              textHeight: JB
            } = BB.docView.measureTextSize();
            lB = dB > 0 && yB.refresh(pB, dB, VB, JB, Math.max(5, mB / VB), TB), lB && (BB.docView.minWidth = 0, gB |= 16)
          }
          HB > 0 && EB > 0 ? oB = Math.max(HB, EB) : HB < 0 && EB < 0 && (oB = Math.min(HB, EB)), QV();
          for (let dB of this.viewports) {
            let pB = dB.from == this.viewport.from ? TB : BB.docView.measureVisibleLineHeights(dB);
            this.heightMap = (lB ? hV.empty().applyChanges(this.stateDeco, VB.D.empty, this.heightOracle, [new gd(0, 0, 0, BB.state.doc.length)]) : this.heightMap).updateHeight(yB, 0, lB, new aV(dB.from, pB))
          }
          PV && (gB |= 2)
        }
        let iB = !this.viewportIsAppropriate(this.viewport, oB) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return iB && (2 & gB && (gB |= this.updateScaler()), this.viewport = this.getViewport(oB, this.scrollTarget), gB |= this.updateForViewport()), (2 & gB || iB) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(lB ? [] : this.lineGaps, BB)), gB |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, BB.docView.enforceCursorAssoc()), gB
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(BB, TB) {
        let dB = .5 - Math.max(-.5, Math.min(.5, BB / 1e3 / 2)),
          VB = this.heightMap,
          yB = this.heightOracle,
          {
            visibleTop: pB,
            visibleBottom: lB
          } = this,
          JB = new py(VB.lineAt(pB - 1e3 * dB, XV.ByHeight, yB, 0, 0).from, VB.lineAt(lB + 1e3 * (1 - dB), XV.ByHeight, yB, 0, 0).to);
        if (TB) {
          let {
            head: BB
          } = TB.range;
          if (BB < JB.from || BB > JB.to) {
            let dB, pB = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              lB = VB.lineAt(BB, XV.ByPos, yB, 0, 0);
            dB = "center" == TB.y ? (lB.top + lB.bottom) / 2 - pB / 2 : "start" == TB.y || "nearest" == TB.y && BB < JB.from ? lB.top : lB.bottom - pB, JB = new py(VB.lineAt(dB - 500, XV.ByHeight, yB, 0, 0).from, VB.lineAt(dB + pB + 500, XV.ByHeight, yB, 0, 0).to)
          }
        }
        return JB
      }
      mapViewport(BB, TB) {
        let dB = TB.mapPos(BB.from, -1),
          VB = TB.mapPos(BB.to, 1);
        return new py(this.heightMap.lineAt(dB, XV.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(VB, XV.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(BB) {
        let {
          from: TB,
          to: dB
        } = BB, VB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: yB
        } = this.heightMap.lineAt(TB, XV.ByPos, this.heightOracle, 0, 0), {
          bottom: pB
        } = this.heightMap.lineAt(dB, XV.ByPos, this.heightOracle, 0, 0), {
          visibleTop: lB,
          visibleBottom: JB
        } = this;
        return (0 == TB || yB <= lB - Math.max(10, Math.min(-VB, 250))) && (dB == this.state.doc.length || pB >= JB + Math.max(10, Math.min(VB, 250))) && yB > lB - 2e3 && pB < JB + 2e3
      }
      mapLineGaps(BB, TB) {
        if (!BB.length || TB.empty) return BB;
        let dB = [];
        for (let VB of BB) TB.touchesRange(VB.from, VB.to) || dB.push(new dy(TB.mapPos(VB.from), TB.mapPos(VB.to), VB.size, VB.displaySize));
        return dB
      }
      ensureLineGaps(BB, TB) {
        let dB = this.heightOracle.lineWrapping,
          yB = dB ? 1e4 : 2e3,
          pB = yB >> 1,
          lB = yB << 1;
        if (this.defaultTextDirection != gT.LTR && !dB) return [];
        let JB = [],
          YB = (yB, lB, gB, oB) => {
            if (lB - yB < pB) return;
            let kB = this.state.selection.main,
              LB = [kB.from];
            kB.empty || LB.push(kB.to);
            for (let BB of LB)
              if (BB > yB && BB < lB) return YB(yB, BB - 10, gB, oB), void YB(BB + 10, lB, gB, oB);
            let OB = function(BB, TB) {
              for (let dB of BB)
                if (TB(dB)) return dB;
              return
            }(BB, (BB => BB.from >= gB.from && BB.to <= gB.to && Math.abs(BB.from - yB) < pB && Math.abs(BB.to - lB) < pB && !LB.some((TB => BB.from < TB && BB.to > TB))));
            if (!OB) {
              if (lB < gB.to && TB && dB && TB.BBB.some((BB => BB.from <= lB && BB.to >= lB))) {
                let BB = TB.moveToLineBoundary(VB.h.cursor(lB), !1, !0).head;
                BB > yB && (lB = BB)
              }
              let BB = this.gapSize(gB, yB, lB, oB);
              OB = new dy(yB, lB, BB, dB || BB < 2e6 ? BB : 2e6)
            }
            JB.push(OB)
          },
          gB = TB => {
            if (TB.length < lB || TB.type != KB.Text) return;
            let pB = function(BB, TB, dB) {
              let yB = [],
                pB = BB,
                lB = 0;
              VB.u.spans(dB, BB, TB, {
                span() {},
                point(BB, TB) {
                  BB > pB && (yB.push({
                    from: pB,
                    to: BB
                  }), lB += BB - pB), pB = TB
                }
              }, 20), pB < TB && (yB.push({
                from: pB,
                to: TB
              }), lB += TB - pB);
              return {
                total: lB,
                ek: yB
              }
            }(TB.from, TB.to, this.stateDeco);
            if (pB.total < lB) return;
            let JB, gB, oB = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (dB) {
              let BB, dB, VB = yB / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != oB) {
                let yB = Jy(pB, oB),
                  lB = ((this.visibleBottom - this.visibleTop) / 2 + VB) / TB.height;
                BB = yB - lB, dB = yB + lB
              } else BB = (this.visibleTop - TB.top - VB) / TB.height, dB = (this.visibleBottom - TB.top + VB) / TB.height;
              JB = ly(pB, BB), gB = ly(pB, dB)
            } else {
              let dB = pB.total * this.heightOracle.charWidth,
                VB = yB * this.heightOracle.charWidth,
                lB = 0;
              if (dB > 2e6)
                for (let yB of BB) yB.from >= TB.from && yB.from < TB.to && yB.size != yB.displaySize && yB.from * this.heightOracle.charWidth + lB < this.pixelViewport.left && (lB = yB.size - yB.displaySize);
              let YB, kB, LB = this.pixelViewport.left + lB,
                OB = this.pixelViewport.right + lB;
              if (null != oB) {
                let BB = Jy(pB, oB),
                  TB = ((OB - LB) / 2 + VB) / dB;
                YB = BB - TB, kB = BB + TB
              } else YB = (LB - VB) / dB, kB = (OB + VB) / dB;
              JB = ly(pB, YB), gB = ly(pB, kB)
            }
            JB > TB.from && YB(TB.from, JB, TB, pB), gB < TB.to && YB(gB, TB.to, TB, pB)
          };
        for (let VB of this.viewportLines) Array.isArray(VB.type) ? VB.type.forEach(gB) : gB(VB);
        return JB
      }
      gapSize(BB, TB, dB, VB) {
        let yB = Jy(VB, dB) - Jy(VB, TB);
        return this.heightOracle.lineWrapping ? BB.height * yB : VB.total * this.heightOracle.charWidth * yB
      }
      updateLineGaps(BB) {
        dy.same(BB, this.lineGaps) || (this.lineGaps = BB, this.lineGapDeco = rB.set(BB.map((BB => BB.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(BB) {
        let TB = this.stateDeco;
        this.lineGaps.length && (TB = TB.concat(this.lineGapDeco));
        let dB = [];
        VB.u.spans(TB, this.viewport.from, this.viewport.to, {
          span(BB, TB) {
            dB.push({
              from: BB,
              to: TB
            })
          },
          point() {}
        }, 20);
        let yB = 0;
        if (dB.length != this.BBB.length) yB = 12;
        else
          for (let VB = 0; VB < dB.length && !(8 & yB); VB++) {
            let TB = this.BBB[VB],
              pB = dB[VB];
            TB.from == pB.from && TB.to == pB.to || (yB |= 4, BB && BB.mapPos(TB.from, -1) == pB.from && BB.mapPos(TB.to, 1) == pB.to || (yB |= 8))
          }
        return this.BBB = dB, yB
      }
      lineBlockAt(BB) {
        return BB >= this.viewport.from && BB <= this.viewport.to && this.viewportLines.find((TB => TB.from <= BB && TB.to >= BB)) || ky(this.heightMap.lineAt(BB, XV.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(BB) {
        return BB >= this.viewportLines[0].top && BB <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((TB => TB.top <= BB && TB.bottom >= BB)) || ky(this.heightMap.lineAt(this.scaler.fromDOM(BB), XV.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(BB) {
        let TB = this.lineBlockAtHeight(BB + 8);
        return TB.from >= this.viewport.from || this.viewportLines[0].top - BB > 200 ? TB : this.viewportLines[0]
      }
      elementAtHeight(BB) {
        return ky(this.heightMap.blockAt(this.scaler.fromDOM(BB), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class py {
      constructor(BB, TB) {
        this.from = BB, this.to = TB
      }
    }

    function ly(BB, TB) {
      let {
        total: dB,
        ek: VB
      } = BB;
      if (TB <= 0) return VB[0].from;
      if (TB >= 1) return VB[VB.length - 1].to;
      let yB = Math.floor(dB * TB);
      for (let pB = 0;; pB++) {
        let {
          from: BB,
          to: TB
        } = VB[pB], dB = TB - BB;
        if (yB <= dB) return BB + yB;
        yB -= dB
      }
    }

    function Jy(BB, TB) {
      let dB = 0;
      for (let {
          from: VB,
          to: yB
        }
        of BB.ek) {
        if (TB <= yB) {
          dB += TB - VB;
          break
        }
        dB += yB - VB
      }
      return dB / BB.total
    }
    const Yy = {
      toDOM: BB => BB,
      fromDOM: BB => BB,
      scale: 1,
      eq(BB) {
        return BB == this
      }
    };

    function gy(BB) {
      let TB = BB.facet(Bd).filter((BB => "function" != typeof BB)),
        dB = BB.facet(dd).filter((BB => "function" != typeof BB));
      return dB.length && TB.push(VB.u.join(dB)), TB
    }
    class oy {
      constructor(BB, TB, dB) {
        let VB = 0,
          yB = 0,
          pB = 0;
        this.viewports = dB.map((dB => {
          let {
            from: yB,
            to: pB
          } = dB, lB = TB.lineAt(yB, XV.ByPos, BB, 0, 0).top, JB = TB.lineAt(pB, XV.ByPos, BB, 0, 0).bottom;
          return VB += JB - lB, {
            from: yB,
            to: pB,
            top: lB,
            bottom: JB,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - VB) / (TB.height - VB);
        for (let lB of this.viewports) lB.domTop = pB + (lB.top - yB) * this.scale, pB = lB.domBottom = lB.domTop + (lB.bottom - lB.top), yB = lB.bottom
      }
      toDOM(BB) {
        for (let TB = 0, dB = 0, VB = 0;; TB++) {
          let yB = TB < this.viewports.length ? this.viewports[TB] : null;
          if (!yB || BB < yB.top) return VB + (BB - dB) * this.scale;
          if (BB <= yB.bottom) return yB.domTop + (BB - yB.top);
          dB = yB.bottom, VB = yB.domBottom
        }
      }
      fromDOM(BB) {
        for (let TB = 0, dB = 0, VB = 0;; TB++) {
          let yB = TB < this.viewports.length ? this.viewports[TB] : null;
          if (!yB || BB < yB.domTop) return dB + (BB - VB) / this.scale;
          if (BB <= yB.domBottom) return yB.top + (BB - yB.domTop);
          dB = yB.bottom, VB = yB.domBottom
        }
      }
      eq(BB) {
        return BB instanceof oy && (this.scale == BB.scale && this.viewports.length == BB.viewports.length && this.viewports.every(((TB, dB) => TB.from == BB.viewports[dB].from && TB.to == BB.viewports[dB].to)))
      }
    }

    function ky(BB, TB) {
      if (1 == TB.scale) return BB;
      let dB = TB.toDOM(BB.top),
        VB = TB.toDOM(BB.bottom);
      return new ZV(BB.from, BB.length, dB, VB - dB, Array.isArray(BB._content) ? BB._content.map((BB => ky(BB, TB))) : BB._content)
    }
    const Ly = VB.l.define({
        combine: BB => BB.join(" ")
      }),
      Oy = VB.l.define({
        combine: BB => BB.indexOf(!0) > -1
      }),
      Dy = yB.e.newName(),
      uy = yB.e.newName(),
      Hy = yB.e.newName(),
      Ey = {
        "&light": "." + uy,
        "&dark": "." + Hy
      };

    function vy(BB, TB, dB) {
      return new yB.e(TB, {
        finish: TB => /&/.test(TB) ? TB.replace(/&\w*/, (TB => {
          if ("&" == TB) return BB;
          if (!dB || !dB[TB]) throw new RangeError(`Unsupported selector: ${TB}`);
          return dB[TB]
        })) : BB + " " + TB
      })
    }
    const my = vy("." + Dy, {
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
      }, Ey),
      iy = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      Ny = fB.ie && fB.ie_version <= 11;
    class ty {
      constructor(BB) {
        this.view = BB, this.active = !1, this.editContext = null, this.selectionRange = new eB, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = BB.contentDOM, this.observer = new MutationObserver((TB => {
          for (let BB of TB) this.queue.push(BB);
          (fB.ie && fB.ie_version <= 11 || fB.ios && BB.composing) && TB.some((BB => "childList" == BB.type && BB.removedNodes.length || "characterData" == BB.type && BB.oldValue.length > BB.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !fB.android || !1 === BB.constructor.EDIT_CONTEXT || fB.chrome && fB.chrome_version < 126 || (this.editContext = new My(BB), BB.state.facet(qT) && (BB.contentDOM.editContext = this.editContext.editContext)), Ny && (this.onCharData = BB => {
          this.queue.push({
            target: BB.target,
            type: "characterData",
            oldValue: BB.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.qE = this.qE.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var BB;
          (null === (BB = this.view.docView) || void 0 === BB ? void 0 : BB.lastUpdate) < Date.now() - 75 && this.qE()
        })), this.resizeScroll.observe(BB.scrollDOM)), this.addWindowListeners(this.win = BB.win), this.start(), "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver((BB => {
          this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), BB.length > 0 && BB[BB.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")))
        }), {
          threshold: [0, .001]
        }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((BB => {
          BB.length > 0 && BB[BB.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"))
        }), {})), this.listenForScroll(), this.readSelectionRange()
      }
      onScrollChanged(BB) {
        this.view.inputState.runHandlers("scroll", BB), this.intersecting && this.view.measure()
      }
      onScroll(BB) {
        this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(BB)
      }
      qE() {
        this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout((() => {
          this.resizeTimeout = -1, this.view.requestMeasure()
        }), 50))
      }
      onPrint(BB) {
        ("change" != BB.type && BB.type || BB.matches) && (this.view.viewState.printing = !0, this.view.measure(), setTimeout((() => {
          this.view.viewState.printing = !1, this.view.requestMeasure()
        }), 500))
      }
      updateGaps(BB) {
        if (this.gapIntersection && (BB.length != this.gaps.length || this.gaps.some(((TB, dB) => TB != BB[dB])))) {
          this.gapIntersection.disconnect();
          for (let TB of BB) this.gapIntersection.observe(TB);
          this.gaps = BB
        }
      }
      onSelectionChange(BB) {
        let TB = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: dB
        } = this, VB = this.selectionRange;
        if (dB.state.facet(qT) ? dB.root.activeElement != this.dom : !XB(this.dom, VB)) return;
        let yB = VB.anchorNode && dB.docView.tile.nearest(VB.anchorNode);
        yB && yB.isWidget() && yB.widget.ignoreEvent(BB) ? TB || (this.selectionChanged = !1) : (fB.ie && fB.ie_version <= 11 || fB.android && fB.chrome) && !dB.state.selection.main.empty && VB.focusNode && hB(VB.focusNode, VB.focusOffset, VB.anchorNode, VB.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: BB
        } = this, TB = aB(BB.root);
        if (!TB) return !1;
        let dB = fB.safari && 11 == BB.root.nodeType && BB.root.activeElement == this.dom && function(BB, TB) {
          if (TB.getComposedRanges) {
            let dB = TB.getComposedRanges(BB.root)[0];
            if (dB) return sy(BB, dB)
          }
          let dB = null;

          function VB(BB) {
            BB.preventDefault(), BB.stopImmediatePropagation(), dB = BB.getTargetRanges()[0]
          }
          return BB.contentDOM.addEventListener("beforeinput", VB, !0), BB.dom.ownerDocument.execCommand("indent"), BB.contentDOM.removeEventListener("beforeinput", VB, !0), dB ? sy(BB, dB) : null
        }(this.view, TB) || TB;
        if (!dB || this.selectionRange.eq(dB)) return !1;
        let VB = XB(this.dom, dB);
        return VB && !this.selectionChanged && BB.inputState.lastFocusTime > Date.now() - 200 && BB.inputState.lastTouchTime < Date.now() - 300 && function(BB, TB) {
          let dB = TB.focusNode,
            VB = TB.focusOffset;
          if (!dB || TB.anchorNode != dB || TB.anchorOffset != VB) return !1;
          for (VB = Math.min(VB, xB(dB));;)
            if (VB) {
              if (1 != dB.nodeType) return !1;
              let BB = dB.childNodes[VB - 1];
              "false" == BB.contentEditable ? VB-- : (dB = BB, VB = xB(dB))
            } else {
              if (dB == BB) return !0;
              VB = CB(dB), dB = dB.parentNode
            }
        }(this.dom, dB) ? (this.view.inputState.lastFocusTime = 0, BB.docView.updateSelection(), !1) : (this.selectionRange.setRange(dB), VB && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(BB, TB) {
        this.selectionRange.set(BB.node, BB.offset, TB.node, TB.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let BB = 0,
          TB = null;
        for (let dB = this.dom; dB;)
          if (1 == dB.nodeType) !TB && BB < this.scrollTargets.length && this.scrollTargets[BB] == dB ? BB++ : TB || (TB = this.scrollTargets.slice(0, BB)), TB && TB.push(dB), dB = dB.assignedSlot || dB.parentNode;
          else {
            if (11 != dB.nodeType) break;
            dB = dB.host
          } if (BB < this.scrollTargets.length && !TB && (TB = this.scrollTargets.slice(0, BB)), TB) {
          for (let BB of this.scrollTargets) BB.removeEventListener("scroll", this.onScroll);
          for (let BB of this.scrollTargets = TB) BB.addEventListener("scroll", this.onScroll)
        }
      }
      ignore(BB) {
        if (!this.active) return BB();
        try {
          return this.stop(), BB()
        } finally {
          this.start(), this.clear()
        }
      }
      start() {
        this.active || (this.observer.observe(this.dom, iy), Ny && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), Ny && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(BB, TB) {
        var dB;
        if (!this.delayedAndroidKey) {
          let BB = () => {
            let BB = this.delayedAndroidKey;
            if (BB) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = BB.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && BB.force && yT(this.dom, BB.key, BB.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(BB)
        }
        this.delayedAndroidKey && "Enter" != BB || (this.delayedAndroidKey = {
          key: BB,
          keyCode: TB,
          force: this.lastChange < Date.now() - 50 || !!(null === (dB = this.delayedAndroidKey) || void 0 === dB ? void 0 : dB.force)
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
        for (let BB of this.observer.takeRecords()) this.queue.push(BB);
        return this.queue
      }
      processRecords() {
        let BB = this.pendingRecords();
        BB.length && (this.queue = []);
        let TB = -1,
          dB = -1,
          VB = !1;
        for (let yB of BB) {
          let BB = this.readMutation(yB);
          BB && (BB.typeOver && (VB = !0), -1 == TB ? ({
            from: TB,
            to: dB
          } = BB) : (TB = Math.min(BB.from, TB), dB = Math.max(BB.to, dB)))
        }
        return {
          from: TB,
          to: dB,
          typeOver: VB
        }
      }
      readChange() {
        let {
          from: BB,
          to: TB,
          typeOver: dB
        } = this.processRecords(), VB = this.selectionChanged && XB(this.dom, this.selectionRange);
        if (BB < 0 && !VB) return null;
        BB > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let yB = new VV(this.view, BB, TB, dB);
        return this.view.docView.domChanged = {
          newSel: yB.newSel ? yB.newSel.main : null
        }, yB
      }
      flush() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        BB && this.readSelectionRange();
        let TB = this.readChange();
        if (!TB) return this.view.requestMeasure(), !1;
        let dB = this.view.state,
          VB = pV(this.view, TB);
        return this.view.state == dB && (TB.domChanged || TB.newSel && !YV(this.view.state.selection, TB.newSel.main)) && this.view.update([]), VB
      }
      readMutation(BB) {
        let TB = this.view.docView.tile.nearest(BB.target);
        if (!TB || TB.isWidget()) return null;
        if (TB.markDirty("attributes" == BB.type), "childList" == BB.type) {
          let dB = fy(TB, BB.previousSibling || BB.target.previousSibling, -1),
            VB = fy(TB, BB.nextSibling || BB.target.nextSibling, 1);
          return {
            from: dB ? TB.posAfter(dB) : TB.posAtStart,
            to: VB ? TB.posBefore(VB) : TB.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == BB.type ? {
          from: TB.posAtStart,
          to: TB.posAtEnd,
          typeOver: BB.target.nodeValue == BB.oldValue
        } : null
      }
      setWindow(BB) {
        BB != this.win && (this.removeWindowListeners(this.win), this.win = BB, this.addWindowListeners(this.win))
      }
      addWindowListeners(BB) {
        BB.addEventListener("resize", this.qE), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : BB.addEventListener("beforeprint", this.onPrint), BB.addEventListener("scroll", this.onScroll), BB.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(BB) {
        BB.removeEventListener("scroll", this.onScroll), BB.removeEventListener("resize", this.qE), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : BB.removeEventListener("beforeprint", this.onPrint), BB.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(BB) {
        this.editContext && (this.editContext.update(BB), BB.startState.facet(qT) != BB.state.facet(qT) && (BB.view.contentDOM.editContext = BB.state.facet(qT) ? this.editContext.editContext : null))
      }
      destroy() {
        var BB, TB, dB;
        this.stop(), null === (BB = this.intersection) || void 0 === BB || BB.disconnect(), null === (TB = this.gapIntersection) || void 0 === TB || TB.disconnect(), null === (dB = this.resizeScroll) || void 0 === dB || dB.disconnect();
        for (let VB of this.scrollTargets) VB.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function fy(BB, TB, dB) {
      for (; TB;) {
        let VB = Ld.get(TB);
        if (VB && VB.parent == BB) return VB;
        let yB = TB.parentNode;
        TB = yB != BB.dom ? yB : dB > 0 ? TB.nextSibling : TB.previousSibling
      }
      return null
    }

    function sy(BB, TB) {
      let dB = TB.startContainer,
        VB = TB.startOffset,
        yB = TB.endContainer,
        pB = TB.endOffset,
        lB = BB.docView.domAtPos(BB.state.selection.main.anchor, 1);
      return hB(lB.node, lB.offset, yB, pB) && ([dB, VB, yB, pB] = [yB, pB, dB, VB]), {
        anchorNode: dB,
        anchorOffset: VB,
        focusNode: yB,
        focusOffset: pB
      }
    }
    class My {
      constructor(BB) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(BB.state);
        let TB = this.editContext = new window.EditContext({
          text: BB.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, BB.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(BB.state.selection.main.head)
        });
        this.handlers.textupdate = dB => {
          let yB = BB.state.selection.main,
            {
              anchor: pB,
              head: lB
            } = yB,
            JB = this.toEditorPos(dB.updateRangeStart),
            YB = this.toEditorPos(dB.updateRangeEnd);
          BB.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: dB.updateRangeStart,
            editorBase: JB,
            drifted: !1
          });
          let gB = YB - JB > dB.text.length;
          JB == this.from && pB < this.from ? JB = pB : YB == this.to && pB > this.to && (YB = pB);
          let oB = JV(BB.state.sliceDoc(JB, YB), dB.text, (gB ? yB.from : yB.to) - JB, gB ? "end" : null);
          if (!oB) {
            let TB = VB.h.single(this.toEditorPos(dB.selectionStart), this.toEditorPos(dB.selectionEnd));
            return void(YV(TB, yB) || BB.dispatch({
              selection: TB,
              userEvent: "select"
            }))
          }
          let kB = {
            from: oB.from + JB,
            to: oB.toA + JB,
            insert: VB.D.of(dB.text.slice(oB.from, oB.toB).split("\n"))
          };
          if ((fB.mac || fB.android) && kB.from == lB - 1 && /^\. ?$/.test(dB.text) && "off" == BB.contentDOM.getAttribute("autocorrect") && (kB = {
              from: JB,
              to: YB,
              insert: VB.D.of([dB.text.replace(".", " ")])
            }), this.pendingContextChange = kB, !BB.state.readOnly) {
            let TB = this.to - this.from + (kB.to - kB.from + kB.insert.length);
            lV(BB, kB, VB.h.single(this.toEditorPos(dB.selectionStart, TB), this.toEditorPos(dB.selectionEnd, TB)))
          }
          this.pendingContextChange && (this.revertPending(BB.state), this.setSelection(BB.state)), kB.from < kB.to && !kB.insert.length && BB.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(TB.text.slice(Math.max(0, dB.updateRangeStart - 1), Math.min(TB.text.length, dB.updateRangeStart + 1))) && this.handlers.compositionend(dB)
        }, this.handlers.characterboundsupdate = dB => {
          let VB = [],
            yB = null;
          for (let TB = this.toEditorPos(dB.rangeStart), pB = this.toEditorPos(dB.rangeEnd); TB < pB; TB++) {
            let dB = BB.coordsForChar(TB);
            yB = dB && new DOMRect(dB.left, dB.top, dB.right - dB.left, dB.bottom - dB.top) || yB || new DOMRect, VB.push(yB)
          }
          TB.updateCharacterBounds(dB.rangeStart, VB)
        }, this.handlers.textformatupdate = TB => {
          let dB = [];
          for (let BB of TB.getTextFormats()) {
            let TB = BB.underlineStyle,
              VB = BB.underlineThickness;
            if (!/none/i.test(TB) && !/none/i.test(VB)) {
              let yB = this.toEditorPos(BB.rangeStart),
                pB = this.toEditorPos(BB.rangeEnd);
              if (yB < pB) {
                let BB = `text-decoration: underline ${/^[a-z]/.test(TB)?TB+" ":"Dashed"==TB?"dashed ":"Squiggle"==TB?"wavy ":""}${/thin/i.test(VB)?1:2}px`;
                dB.push(rB.mark({
                  attributes: {
                    style: BB
                  }
                }).range(yB, pB))
              }
            }
          }
          BB.dispatch({
            effects: CT.of(rB.set(dB))
          })
        }, this.handlers.compositionstart = () => {
          BB.inputState.composing < 0 && (BB.inputState.composing = 0, BB.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (BB.inputState.composing = -1, BB.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: TB
            } = this.composing;
            this.composing = null, TB && this.reset(BB.state)
          }
        };
        for (let dB in this.handlers) TB.addEventListener(dB, this.handlers[dB]);
        this.measureReq = {
          read: BB => {
            this.editContext.updateControlBounds(BB.contentDOM.getBoundingClientRect());
            let TB = aB(BB.root);
            TB && TB.rangeCount && this.editContext.updateSelectionBounds(TB.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(BB) {
        let TB = 0,
          dB = !1,
          VB = this.pendingContextChange;
        return BB.changes.iterChanges(((yB, pB, lB, JB, YB) => {
          if (dB) return;
          let gB = YB.length - (pB - yB);
          if (VB && pB >= VB.to) {
            if (VB.from == yB && VB.to == pB && VB.insert.eq(YB)) return VB = this.pendingContextChange = null, TB += gB, void(this.to += gB);
            VB = null, this.revertPending(BB.state)
          }
          if (yB += TB, (pB += TB) <= this.from) this.from += gB, this.to += gB;
          else if (yB < this.to) {
            if (yB < this.from || pB > this.to || this.to - this.from + YB.length > 3e4) return void(dB = !0);
            this.editContext.updateText(this.toContextPos(yB), this.toContextPos(pB), YB.toString()), this.to += gB
          }
          TB += gB
        })), VB && !dB && this.revertPending(BB.state), !dB
      }
      update(BB) {
        let TB = this.pendingContextChange,
          dB = BB.startState.selection.main;
        this.composing && (this.composing.drifted || !BB.changes.touchesRange(dB.from, dB.to) && BB.transactions.some((BB => !BB.isUserEvent("input.type") && BB.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = BB.changes.mapPos(this.composing.editorBase)) : this.applyEdits(BB) && this.rangeIsValid(BB.state) ? (BB.docChanged || BB.selectionSet || TB) && this.setSelection(BB.state) : (this.pendingContextChange = null, this.reset(BB.state)), (BB.geometryChanged || BB.docChanged || BB.selectionSet) && BB.view.requestMeasure(this.measureReq)
      }
      resetRange(BB) {
        let {
          head: TB
        } = BB.selection.main;
        this.from = Math.max(0, TB - 1e4), this.to = Math.min(BB.doc.length, TB + 1e4)
      }
      reset(BB) {
        this.resetRange(BB), this.editContext.updateText(0, this.editContext.text.length, BB.doc.sliceString(this.from, this.to)), this.setSelection(BB)
      }
      revertPending(BB) {
        let TB = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(TB.from), this.toContextPos(TB.from + TB.insert.length), BB.doc.sliceString(TB.from, TB.to))
      }
      setSelection(BB) {
        let {
          main: TB
        } = BB.selection, dB = this.toContextPos(Math.max(this.from, Math.min(this.to, TB.anchor))), VB = this.toContextPos(TB.head);
        this.editContext.selectionStart == dB && this.editContext.selectionEnd == VB || this.editContext.updateSelection(dB, VB)
      }
      rangeIsValid(BB) {
        let {
          head: TB
        } = BB.selection.main;
        return !(this.from > 0 && TB - this.from < 500 || this.to < BB.doc.length && this.to - TB < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        BB = Math.min(BB, TB);
        let dB = this.composing;
        return dB && dB.drifted ? dB.editorBase + (BB - dB.contextBase) : BB + this.from
      }
      toContextPos(BB) {
        let TB = this.composing;
        return TB && TB.drifted ? TB.contextBase + (BB - TB.editorBase) : BB - this.from
      }
      destroy() {
        for (let BB in this.handlers) this.editContext.removeEventListener(BB, this.handlers[BB])
      }
    }
    class zy {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get BBB() {
        return this.viewState.BBB
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
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var TB;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), BB.parent && BB.parent.appendChild(this.dom);
        let {
          dispatch: dB
        } = BB;
        this.dispatchTransactions = BB.dispatchTransactions || dB && (BB => BB.forEach((BB => dB(BB, this)))) || (BB => this.update(BB)), this.dispatch = this.dispatch.bind(this), this._root = BB.root || function(BB) {
          for (; BB;) {
            if (BB && (9 == BB.nodeType || 11 == BB.nodeType && BB.host)) return BB;
            BB = BB.assignedSlot || BB.parentNode
          }
          return null
        }(BB.parent) || document, this.viewState = new yy(this, BB.state || VB.i.create(BB)), BB.scrollTo && BB.scrollTo.is(hT) && (this.viewState.scrollTarget = BB.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(jT).map((BB => new bT(BB)));
        for (let VB of this.plugins) VB.update(this);
        this.observer = new ty(this), this.inputState = new gV(this), this.inputState.ensureHandlers(this.plugins), this.docView = new Qd(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (TB = document.fonts) || void 0 === TB ? void 0 : TB.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var BB = arguments.length, TB = new Array(BB), dB = 0; dB < BB; dB++) TB[dB] = arguments[dB];
        let yB = 1 == TB.length && TB[0] instanceof VB.G ? TB : 1 == TB.length && Array.isArray(TB[0]) ? TB[0] : [this.state.update(...TB)];
        this.dispatchTransactions(yB, this)
      }
      update(BB) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let TB, dB = !1,
          yB = !1,
          pB = this.state;
        for (let VB of BB) {
          if (VB.startState != pB) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          pB = VB.state
        }
        if (this.destroyed) return void(this.viewState.state = pB);
        let lB = this.hasFocus,
          JB = 0,
          YB = null;
        BB.some((BB => BB.annotation(KV))) ? (this.inputState.notifiedFocused = lB, JB = 1) : lB != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = lB, YB = rV(pB, lB), YB || (JB = 1));
        let gB = this.observer.delayedAndroidKey,
          oB = null;
        if (gB ? (this.observer.clearDelayedAndroidKey(), oB = this.observer.readChange(), (oB && !this.state.doc.eq(pB.doc) || !this.state.selection.eq(pB.selection)) && (oB = null)) : this.observer.clear(), pB.facet(VB.i.phrases) != this.state.facet(VB.i.phrases)) return this.setState(pB);
        TB = od.create(this, pB, BB), TB.flags |= JB;
        let kB = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let TB of BB) {
            if (kB && (kB = kB.map(TB.changes)), TB.scrollIntoView) {
              let {
                main: BB
              } = TB.state.selection, {
                x: dB,
                y: yB
              } = this.state.facet(zy.cursorScrollMargin);
              kB = new WT(BB.empty ? BB : VB.h.cursor(BB.head, BB.head > BB.anchor ? -1 : 1), "nearest", "nearest", yB, dB)
            }
            for (let BB of TB.effects) BB.is(hT) && (kB = BB.value.clip(this.state))
          }
          this.viewState.update(TB, kB), this.bidiCache = Fy.update(this.bidiCache, TB.changes), TB.empty || (this.updatePlugins(TB), this.inputState.update(TB)), dB = this.docView.update(TB), this.state.facet(Yd) != this.styleModules && this.mountStyles(), yB = this.updateAttrs(), this.showAnnouncements(BB), this.docView.updateSelection(dB, BB.some((BB => BB.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (TB.startState.facet(Ly) != TB.state.facet(Ly) && (this.viewState.mustMeasureContent = !0), (dB || yB || kB || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), dB && this.docViewUpdate(), !TB.empty)
          for (let VB of this.state.facet(cT)) try {
            VB(TB)
          } catch (LB) {
            GT(this.state, LB, "update listener")
          }(YB || oB) && Promise.resolve().then((() => {
            YB && this.state == YB.startState && this.dispatch(YB), oB && !pV(this, oB) && gB.force && yT(this.contentDOM, gB.key, gB.keyCode)
          }))
      }
      setState(BB) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = BB);
        this.updateState = 2;
        let TB = this.hasFocus;
        try {
          for (let BB of this.plugins) BB.destroy(this);
          this.viewState = new yy(this, BB), this.plugins = BB.facet(jT).map((BB => new bT(BB))), this.pluginMap.clear();
          for (let BB of this.plugins) BB.update(this);
          this.docView.destroy(), this.docView = new Qd(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        TB && this.focus(), this.requestMeasure()
      }
      updatePlugins(BB) {
        let TB = BB.startState.facet(jT),
          dB = BB.state.facet(jT);
        if (TB != dB) {
          let VB = [];
          for (let yB of dB) {
            let dB = TB.indexOf(yB);
            if (dB < 0) VB.push(new bT(yB));
            else {
              let TB = this.plugins[dB];
              TB.mustUpdate = BB, VB.push(TB)
            }
          }
          for (let TB of this.plugins) TB.mustUpdate != BB && TB.destroy(this);
          this.plugins = VB, this.pluginMap.clear()
        } else
          for (let VB of this.plugins) VB.mustUpdate = BB;
        for (let VB = 0; VB < this.plugins.length; VB++) this.plugins[VB].update(this);
        TB != dB && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let TB of this.plugins) {
          let dB = TB.value;
          if (dB && dB.docViewUpdate) try {
            dB.docViewUpdate(this)
          } catch (BB) {
            GT(this.state, BB, "doc view update listener")
          }
        }
      }
      measure() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, BB && this.observer.forceFlush();
        let TB = null,
          dB = this.viewState.scrollParent,
          VB = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: yB,
            scrollAnchorHeight: pB
          } = this.viewState;
        Math.abs(VB - this.viewState.scrollOffset) > 1 && (pB = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let BB = 0;; BB++) {
            if (pB < 0)
              if (pT(dB || this.win)) yB = -1, pB = this.viewState.heightMap.height;
              else {
                let BB = this.viewState.scrollAnchorAt(VB);
                yB = BB.from, pB = BB.top
              } this.updateState = 1;
            let JB = this.viewState.measure();
            if (!JB && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (BB > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let YB = [];
            4 & JB || ([this.measureRequests, YB] = [YB, this.measureRequests]);
            let gB = YB.map((BB => {
                try {
                  return BB.read(this)
                } catch (TB) {
                  return GT(this.state, TB), Uy
                }
              })),
              oB = od.create(this, this.state, []),
              kB = !1;
            oB.flags |= JB, TB ? TB.flags |= JB : TB = oB, this.updateState = 2, oB.empty || (this.updatePlugins(oB), this.inputState.update(oB), this.updateAttrs(), kB = this.docView.update(oB), kB && this.docViewUpdate());
            for (let BB = 0; BB < YB.length; BB++)
              if (gB[BB] != Uy) try {
                let TB = YB[BB];
                TB.write && TB.write(gB[BB], this)
              } catch (lB) {
                GT(this.state, lB)
              }
            if (kB && this.docView.updateSelection(!0), !oB.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, pB = -1;
                  continue
                } {
                  let BB = ((yB < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(yB).top) - pB) / this.scaleY;
                  if ((BB > 1 || BB < -1) && (dB == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    VB += BB, dB ? dB.scrollTop += BB : this.win.scrollBy(0, BB), pB = -1;
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
        if (TB && !TB.empty)
          for (let JB of this.state.facet(cT)) JB(TB)
      }
      get themeClasses() {
        return Dy + " " + (this.state.facet(Oy) ? Hy : uy) + " " + this.state.facet(Ly)
      }
      updateAttrs() {
        let BB = Ky(this, nT, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          TB = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(qT) ? "true" : "false",
            class: "cm-content",
            style: `${fB.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (TB["aria-readonly"] = "true"), Ky(this, eT, TB);
        let dB = this.observer.ignore((() => {
          let dB = wB(this.contentDOM, this.contentAttrs, TB),
            VB = wB(this.dom, this.editorAttrs, BB);
          return dB || VB
        }));
        return this.editorAttrs = BB, this.contentAttrs = TB, dB
      }
      showAnnouncements(BB) {
        let TB = !0;
        for (let dB of BB)
          for (let BB of dB.effects)
            if (BB.is(zy.announce)) {
              TB && (this.announceDOM.textContent = ""), TB = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = BB.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(Yd);
        let BB = this.state.facet(zy.cspNonce);
        yB.e.mount(this.root, this.styleModules.concat(my).reverse(), BB ? {
          nonce: BB
        } : void 0)
      }
      readMeasured() {
        if (2 == this.updateState) throw new Error("Reading the editor layout isn't allowed during an update");
        0 == this.updateState && this.measureScheduled > -1 && this.measure(!1)
      }
      requestMeasure(BB) {
        if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame((() => this.measure()))), BB) {
          if (this.measureRequests.indexOf(BB) > -1) return;
          if (null != BB.key)
            for (let TB = 0; TB < this.measureRequests.length; TB++)
              if (this.measureRequests[TB].key === BB.key) return void(this.measureRequests[TB] = BB);
          this.measureRequests.push(BB)
        }
      }
      plugin(BB) {
        let TB = this.pluginMap.get(BB);
        return (void 0 === TB || TB && TB.plugin != BB) && this.pluginMap.set(BB, TB = this.plugins.find((TB => TB.plugin == BB)) || null), TB && TB.update(this).value
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
      elementAtHeight(BB) {
        return this.readMeasured(), this.viewState.elementAtHeight(BB)
      }
      lineBlockAtHeight(BB) {
        return this.readMeasured(), this.viewState.lineBlockAtHeight(BB)
      }
      get viewportLineBlocks() {
        return this.viewState.viewportLines
      }
      lineBlockAt(BB) {
        return this.viewState.lineBlockAt(BB)
      }
      get contentHeight() {
        return this.viewState.contentHeight
      }
      moveByChar(BB, TB, dB) {
        return xd(this, BB, Cd(this, BB, TB, dB))
      }
      moveByGroup(BB, TB) {
        return xd(this, BB, Cd(this, BB, TB, (TB => function(BB, TB, dB) {
          let yB = BB.state.charCategorizer(TB),
            pB = yB(dB);
          return BB => {
            let TB = yB(BB);
            return pB == VB.e.Space && (pB = TB), pB == TB
          }
        }(this, BB.head, TB))))
      }
      visualLineSide(BB, TB) {
        let dB = this.bidiSpans(BB),
          yB = this.textDirectionAt(BB.from),
          pB = dB[TB ? dB.length - 1 : 0];
        return VB.h.cursor(pB.side(TB, yB) + BB.from, pB.forward(!TB, yB) ? 1 : -1)
      }
      moveToLineBoundary(BB, TB) {
        return function(BB, TB, dB, yB) {
          let pB = hd(BB, TB.head, TB.assoc || -1),
            lB = yB && pB.type == KB.Text && (BB.lineWrapping || pB.widgetLineBreaks) ? BB.coordsAtPos(TB.assoc < 0 && TB.head > pB.from ? TB.head - 1 : TB.head) : null;
          if (lB) {
            let TB = BB.dom.getBoundingClientRect(),
              yB = BB.textDirectionAt(pB.from),
              JB = BB.posAtCoords({
                x: dB == (yB == gT.LTR) ? TB.right - 1 : TB.left + 1,
                y: (lB.top + lB.bottom) / 2
              });
            if (null != JB) return VB.h.cursor(JB, dB ? -1 : 1)
          }
          return VB.h.cursor(dB ? pB.to : pB.from, dB ? -1 : 1)
        }(this, BB, TB, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(BB, TB, dB) {
        return xd(this, BB, function(BB, TB, dB, yB) {
          let pB = TB.head,
            lB = dB ? 1 : -1;
          if (pB == (dB ? BB.state.doc.length : 0)) return VB.h.cursor(pB, TB.assoc);
          let JB, YB = TB.goalColumn,
            gB = BB.contentDOM.getBoundingClientRect(),
            oB = BB.coordsAtPos(pB, TB.assoc || ((TB.empty ? dB : TB.head == TB.from) ? 1 : -1)),
            kB = BB.documentTop;
          if (oB) null == YB && (YB = oB.left - gB.left), JB = lB < 0 ? oB.top : oB.bottom;
          else {
            let TB = BB.viewState.lineBlockAt(pB);
            null == YB && (YB = Math.min(gB.right - gB.left, BB.defaultCharacterWidth * (pB - TB.from))), JB = (lB < 0 ? TB.top : TB.bottom) + kB
          }
          let LB = gB.left + YB,
            OB = BB.viewState.heightOracle.textHeight >> 1,
            DB = null !== yB && void 0 !== yB ? yB : OB;
          for (let uB = 0;; uB += OB) {
            let TB = JB + (DB + uB) * lB,
              yB = Ad(BB, {
                x: LB,
                y: TB
              }, !1, lB);
            if (dB ? TB > gB.bottom : TB < gB.top) return VB.h.cursor(yB.pos, yB.assoc);
            let pB = BB.coordsAtPos(yB.pos, yB.assoc),
              oB = pB ? (pB.top + pB.bottom) / 2 : 0;
            if (!pB || (dB ? oB > JB : oB < JB)) return VB.h.cursor(yB.pos, yB.assoc, void 0, YB)
          }
        }(this, BB, TB, dB))
      }
      domAtPos(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(BB, TB)
      }
      posAtDOM(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(BB, TB)
      }
      posAtCoords(BB) {
        let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let dB = Ad(this, BB, TB);
        return dB && dB.pos
      }
      posAndSideAtCoords(BB) {
        let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), Ad(this, BB, TB)
      }
      coordsAtPos(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let dB = this.docView.coordsAt(BB, TB);
        if (!dB || dB.left == dB.right) return dB;
        let VB = this.state.doc.lineAt(BB),
          yB = this.bidiSpans(VB);
        return jB(dB, yB[mT.find(yB, BB - VB.from, -1, TB)].dir == gT.LTR == TB > 0)
      }
      coordsForChar(BB) {
        return this.readMeasured(), this.docView.coordsForChar(BB)
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
      textDirectionAt(BB) {
        return !this.state.facet(aT) || BB < this.viewport.from || BB > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(BB))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(BB) {
        if (BB.length > wy) return MT(BB.length);
        let TB, dB = this.textDirectionAt(BB.from);
        for (let yB of this.bidiCache)
          if (yB.from == BB.from && yB.dir == dB && (yB.fresh || iT(yB.isolates, TB = pd(this, BB)))) return yB.order;
        TB || (TB = pd(this, BB));
        let VB = sT(BB.text, dB, TB);
        return this.bidiCache.push(new Fy(BB.from, BB.to, dB, TB, !0, VB)), VB
      }
      get hasFocus() {
        var BB;
        return (this.dom.ownerDocument.hasFocus() || fB.safari && (null === (BB = this.inputState) || void 0 === BB ? void 0 : BB.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          dT(this.contentDOM), this.docView.updateSelection()
        }))
      }
      setRoot(BB) {
        this._root != BB && (this._root = BB, this.observer.setWindow((9 == BB.nodeType ? BB : BB.ownerDocument).defaultView || window), this.mountStyles())
      }
      destroy() {
        this.root.activeElement == this.contentDOM && this.contentDOM.blur();
        for (let BB of this.plugins) BB.destroy(this);
        this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0
      }
      static scrollIntoView(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var dB, yB, pB, lB;
        return hT.of(new WT("number" == typeof BB ? VB.h.cursor(BB) : BB, null !== (dB = TB.y) && void 0 !== dB ? dB : "nearest", null !== (yB = TB.x) && void 0 !== yB ? yB : "nearest", null !== (pB = TB.yMargin) && void 0 !== pB ? pB : 5, null !== (lB = TB.xMargin) && void 0 !== lB ? lB : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: BB,
          scrollLeft: TB
        } = this.scrollDOM, dB = this.viewState.scrollAnchorAt(BB);
        return hT.of(new WT(VB.h.cursor(dB.from), "start", "start", dB.top - BB, TB, !0))
      }
      setTabFocusMode(BB) {
        null == BB ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof BB ? this.inputState.tabFocusMode = BB ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + BB)
      }
      static domEventHandlers(BB) {
        return AT.define((() => ({})), {
          eventHandlers: BB
        })
      }
      static domEventObservers(BB) {
        return AT.define((() => ({})), {
          eventObservers: BB
        })
      }
      static theme(BB, TB) {
        let dB = yB.e.newName(),
          VB = [Ly.of(dB), Yd.of(vy(`.${dB}`, BB))];
        return TB && TB.dark && VB.push(Oy.of(!0)), VB
      }
      static baseTheme(BB) {
        return VB.r.lowest(Yd.of(vy("." + Dy, BB, Ey)))
      }
      static findFromDOM(BB) {
        var TB;
        let dB = BB.querySelector(".cm-content"),
          VB = dB && Ld.get(dB) || Ld.get(BB);
        return (null === (TB = null === VB || void 0 === VB ? void 0 : VB.root) || void 0 === TB ? void 0 : TB.view) || null
      }
    }
    zy.styleModule = Yd, zy.inputHandler = ST, zy.clipboardInputFilter = QT, zy.clipboardOutputFilter = RT, zy.scrollHandler = XT, zy.focusChangeEffect = PT, zy.perLineTextDirection = aT, zy.exceptionSink = IT, zy.updateListener = cT, zy.editable = qT, zy.mouseSelectionStyle = rT, zy.dragMovesSelection = KT, zy.clickAddsSelectionRange = FT, zy.QB = Bd, zy.blockWrappers = Td, zy.outerDecorations = dd, zy.atomicRanges = Vd, zy.bidiIsolatedRanges = yd, zy.cursorScrollMargin = VB.l.define({
      combine: BB => {
        let TB = 5,
          dB = 5;
        for (let VB of BB) "number" == typeof VB ? TB = dB = VB : ({
          x: TB,
          y: dB
        } = VB);
        return {
          x: TB,
          y: dB
        }
      }
    }), zy.scrollMargins = ld, zy.darkTheme = Oy, zy.cspNonce = VB.l.define({
      combine: BB => BB.length ? BB[0] : ""
    }), zy.contentAttributes = eT, zy.editorAttributes = nT, zy.lineWrapping = zy.contentAttributes.of({
      class: "cm-lineWrapping"
    }), zy.announce = VB.x.define();
    const wy = 4096,
      Uy = {};
    class Fy {
      constructor(BB, TB, dB, VB, yB, pB) {
        this.from = BB, this.to = TB, this.dir = dB, this.isolates = VB, this.fresh = yB, this.order = pB
      }
      static update(BB, TB) {
        if (TB.empty && !BB.some((BB => BB.fresh))) return BB;
        let dB = [],
          VB = BB.length ? BB[BB.length - 1].dir : gT.LTR;
        for (let yB = Math.max(0, BB.length - 10); yB < BB.length; yB++) {
          let pB = BB[yB];
          pB.dir != VB || TB.touchesRange(pB.from, pB.to) || dB.push(new Fy(TB.mapPos(pB.from, 1), TB.mapPos(pB.to, -1), pB.dir, pB.isolates, !1, pB.order))
        }
        return dB
      }
    }

    function Ky(BB, TB, dB) {
      for (let VB = BB.state.facet(TB), yB = VB.length - 1; yB >= 0; yB--) {
        let TB = VB[yB],
          pB = "function" == typeof TB ? TB(BB) : TB;
        pB && sB(pB, dB)
      }
      return dB
    }
    const ry = fB.mac ? "mac" : fB.windows ? "win" : fB.linux ? "linux" : "key";

    function Iy(BB, TB, dB) {
      return TB.altKey && (BB = "Alt-" + BB), TB.ctrlKey && (BB = "Ctrl-" + BB), TB.metaKey && (BB = "Meta-" + BB), !1 !== dB && TB.shiftKey && (BB = "Shift-" + BB), BB
    }
    const cy = VB.r.default(zy.domEventHandlers({
        keydown: (BB, TB) => Wy(Qy(TB.state), BB, TB, "editor")
      })),
      Sy = VB.l.define({
        enables: cy
      }),
      Py = new WeakMap;

    function Qy(BB) {
      let TB = BB.facet(Sy),
        dB = Py.get(TB);
      return dB || Py.set(TB, dB = function(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ry,
          dB = Object.create(null),
          VB = Object.create(null),
          yB = (BB, TB) => {
            let dB = VB[BB];
            if (null == dB) VB[BB] = TB;
            else if (dB != TB) throw new Error("Key binding " + BB + " is used both as a regular binding and as a multi-stroke prefix")
          },
          pB = (BB, VB, pB, lB, JB) => {
            var YB, gB;
            let oB = dB[BB] || (dB[BB] = Object.create(null)),
              kB = VB.split(/ (?!$)/).map((BB => function(BB, TB) {
                const dB = BB.split(/-(?!$)/);
                let VB, yB, pB, lB, JB = dB[dB.length - 1];
                "Space" == JB && (JB = " ");
                for (let YB = 0; YB < dB.length - 1; ++YB) {
                  const BB = dB[YB];
                  if (/^(cmd|meta|m)$/i.test(BB)) lB = !0;
                  else if (/^a(lt)?$/i.test(BB)) VB = !0;
                  else if (/^(c|ctrl|control)$/i.test(BB)) yB = !0;
                  else if (/^s(hift)?$/i.test(BB)) pB = !0;
                  else {
                    if (!/^mod$/i.test(BB)) throw new Error("Unrecognized modifier name: " + BB);
                    "mac" == TB ? lB = !0 : yB = !0
                  }
                }
                return VB && (JB = "Alt-" + JB), yB && (JB = "Ctrl-" + JB), lB && (JB = "Meta-" + JB), pB && (JB = "Shift-" + JB), JB
              }(BB, TB)));
            for (let TB = 1; TB < kB.length; TB++) {
              let dB = kB.slice(0, TB).join(" ");
              yB(dB, !0), oB[dB] || (oB[dB] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [TB => {
                  let VB = ay = {
                    view: TB,
                    prefix: dB,
                    scope: BB
                  };
                  return setTimeout((() => {
                    ay == VB && (ay = null)
                  }), Zy), !0
                }]
              })
            }
            let LB = kB.join(" ");
            yB(LB, !1);
            let OB = oB[LB] || (oB[LB] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (gB = null === (YB = oB._any) || void 0 === YB ? void 0 : YB.run) || void 0 === gB ? void 0 : gB.slice()) || []
            });
            pB && OB.run.push(pB), lB && (OB.preventDefault = !0), JB && (OB.stopPropagation = !0)
          };
        for (let lB of BB) {
          let BB = lB.scope ? lB.scope.split(" ") : ["editor"];
          if (lB.any)
            for (let TB of BB) {
              let BB = dB[TB] || (dB[TB] = Object.create(null));
              BB._any || (BB._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: VB
              } = lB;
              for (let TB in BB) BB[TB].run.push((BB => VB(BB, Xy)))
            }
          let VB = lB[TB] || lB.key;
          if (VB)
            for (let TB of BB) pB(TB, VB, lB.run, lB.preventDefault, lB.stopPropagation), lB.shift && pB(TB, "Shift-" + VB, lB.shift, lB.preventDefault, lB.stopPropagation)
        }
        return dB
      }(TB.reduce(((BB, TB) => BB.concat(TB)), []))), dB
    }

    function Ry(BB, TB, dB) {
      return Wy(Qy(BB.state), TB, BB, dB)
    }
    let ay = null;
    const Zy = 4e3;
    let Xy = null;

    function Wy(BB, TB, dB, yB) {
      Xy = TB;
      let gB = function(BB) {
          var TB = !(JB && BB.metaKey && BB.shiftKey && !BB.ctrlKey && !BB.altKey || YB && BB.shiftKey && BB.key && 1 == BB.key.length || "Unidentified" == BB.key) && BB.key || (BB.shiftKey ? lB : pB)[BB.keyCode] || BB.key || "Unidentified";
          return "Esc" == TB && (TB = "Escape"), "Del" == TB && (TB = "Delete"), "Left" == TB && (TB = "ArrowLeft"), "Up" == TB && (TB = "ArrowUp"), "Right" == TB && (TB = "ArrowRight"), "Down" == TB && (TB = "ArrowDown"), TB
        }(TB),
        oB = (0, VB.K)(gB, 0),
        kB = (0, VB.M)(oB) == gB.length && " " != gB,
        LB = "",
        OB = !1,
        DB = !1,
        uB = !1;
      ay && ay.view == dB && ay.scope == yB && (LB = ay.prefix + " ", DV.indexOf(TB.keyCode) < 0 && (DB = !0, ay = null));
      let HB, EB, vB = new Set,
        mB = BB => {
          if (BB) {
            for (let TB of BB.run)
              if (!vB.has(TB) && (vB.add(TB), TB(dB))) return BB.stopPropagation && (uB = !0), !0;
            BB.preventDefault && (BB.stopPropagation && (uB = !0), DB = !0)
          }
          return !1
        },
        iB = BB[yB];
      return iB && (mB(iB[LB + Iy(gB, TB, !kB)]) ? OB = !0 : !kB || !(TB.altKey || TB.metaKey || TB.ctrlKey) || fB.windows && TB.ctrlKey && TB.altKey || fB.mac && TB.altKey && !TB.ctrlKey && !TB.metaKey || !(HB = pB[TB.keyCode]) || HB == gB ? kB && TB.shiftKey && mB(iB[LB + Iy(gB, TB, !0)]) && (OB = !0) : (mB(iB[LB + Iy(HB, TB, !0)]) || TB.shiftKey && (EB = lB[TB.keyCode]) != gB && EB != HB && mB(iB[LB + Iy(EB, TB, !1)])) && (OB = !0), !OB && mB(iB._any) && (OB = !0)), DB && (OB = !0), OB && uB && TB.stopPropagation(), Xy = null, OB
    }
    class hy {
      constructor(BB, TB, dB, VB, yB) {
        this.className = BB, this.left = TB, this.top = dB, this.width = VB, this.height = yB
      }
      draw() {
        let BB = document.createElement("div");
        return BB.className = this.className, this.adjust(BB), BB
      }
      update(BB, TB) {
        return TB.className == this.className && (this.adjust(BB), !0)
      }
      adjust(BB) {
        BB.style.left = this.left + "px", BB.style.top = this.top + "px", null != this.width && (BB.style.width = this.width + "px"), BB.style.height = this.height + "px"
      }
      eq(BB) {
        return this.left == BB.left && this.top == BB.top && this.width == BB.width && this.height == BB.height && this.className == BB.className
      }
      static forRange(BB, TB, dB) {
        if (dB.empty) {
          let VB = BB.coordsAtPos(dB.head, dB.assoc || 1);
          if (!VB) return [];
          let yB = Cy(BB);
          return [new hy(TB, VB.left - yB.left, VB.top - yB.top, null, VB.bottom - VB.top)]
        }
        return function(BB, TB, dB) {
          if (dB.to <= BB.viewport.from || dB.from >= BB.viewport.to) return [];
          let VB = Math.max(dB.from, BB.viewport.from),
            yB = Math.min(dB.to, BB.viewport.to),
            pB = BB.textDirection == gT.LTR,
            lB = BB.contentDOM,
            JB = lB.getBoundingClientRect(),
            YB = Cy(BB),
            gB = lB.querySelector(".cm-line"),
            oB = gB && window.getComputedStyle(gB),
            kB = JB.left + (oB ? parseInt(oB.paddingLeft) + Math.min(0, parseInt(oB.textIndent)) : 0),
            LB = JB.right - (oB ? parseInt(oB.paddingRight) : 0),
            OB = hd(BB, VB, 1),
            DB = hd(BB, yB, -1),
            uB = OB.type == KB.Text ? OB : null,
            HB = DB.type == KB.Text ? DB : null;
          uB && (BB.lineWrapping || OB.widgetLineBreaks) && (uB = Gy(BB, VB, 1, uB));
          HB && (BB.lineWrapping || DB.widgetLineBreaks) && (HB = Gy(BB, yB, -1, HB));
          if (uB && HB && uB.from == HB.from && uB.to == HB.to) return vB(mB(dB.from, dB.to, uB));
          {
            let TB = uB ? mB(dB.from, null, uB) : iB(OB, !1),
              VB = HB ? mB(null, dB.to, HB) : iB(DB, !0),
              yB = [];
            return (uB || OB).to < (HB || DB).from - (uB && HB ? 1 : 0) || OB.widgetLineBreaks > 1 && TB.bottom + BB.defaultLineHeight / 2 < VB.top ? yB.push(EB(kB, TB.bottom, LB, VB.top)) : TB.bottom < VB.top && BB.elementAtHeight((TB.bottom + VB.top) / 2).type == KB.Text && (TB.bottom = VB.top = (TB.bottom + VB.top) / 2), vB(TB).concat(yB).concat(vB(VB))
          }

          function EB(BB, dB, VB, yB) {
            return new hy(TB, BB - YB.left, dB - YB.top, Math.max(0, VB - BB), yB - dB)
          }

          function vB(BB) {
            let {
              top: TB,
              bottom: dB,
              horizontal: VB
            } = BB, yB = [];
            for (let pB = 0; pB < VB.length; pB += 2) yB.push(EB(VB[pB], TB, VB[pB + 1], dB));
            return yB
          }

          function mB(TB, dB, VB) {
            let yB = 1e9,
              lB = -1e9,
              JB = [];

            function YB(TB, dB, YB, gB, oB) {
              let OB = BB.coordsAtPos(TB, TB == VB.to ? -2 : 2),
                DB = BB.coordsAtPos(YB, YB == VB.from ? 2 : -2);
              OB && DB && (yB = Math.min(OB.top, DB.top, yB), lB = Math.max(OB.bottom, DB.bottom, lB), oB == gT.LTR ? JB.push(pB && dB ? kB : OB.left, pB && gB ? LB : DB.right) : JB.push(!pB && gB ? kB : DB.left, !pB && dB ? LB : OB.right))
            }
            let gB = null !== TB && void 0 !== TB ? TB : VB.from,
              oB = null !== dB && void 0 !== dB ? dB : VB.to;
            for (let pB of BB.BBB)
              if (pB.to > gB && pB.from < oB)
                for (let VB = Math.max(pB.from, gB), yB = Math.min(pB.to, oB);;) {
                  let pB = BB.state.doc.lineAt(VB);
                  for (let lB of BB.bidiSpans(pB)) {
                    let BB = lB.from + pB.from,
                      JB = lB.to + pB.from;
                    if (BB >= yB) break;
                    JB > VB && YB(Math.max(BB, VB), null == TB && BB <= gB, Math.min(JB, yB), null == dB && JB >= oB, lB.dir)
                  }
                  if (VB = pB.to + 1, VB >= yB) break
                }
            return 0 == JB.length && YB(gB, null == TB, oB, null == dB, BB.textDirection), {
              top: yB,
              bottom: lB,
              horizontal: JB
            }
          }

          function iB(BB, TB) {
            let dB = JB.top + (TB ? BB.top : BB.bottom);
            return {
              top: dB,
              bottom: dB,
              horizontal: []
            }
          }
        }(BB, TB, dB)
      }
    }

    function Cy(BB) {
      let TB = BB.scrollDOM.getBoundingClientRect();
      return {
        left: (BB.textDirection == gT.LTR ? TB.left : TB.right - BB.scrollDOM.clientWidth * BB.scaleX) - BB.scrollDOM.scrollLeft * BB.scaleX,
        top: TB.top - BB.scrollDOM.scrollTop * BB.scaleY
      }
    }

    function Gy(BB, TB, dB, VB) {
      let yB = BB.coordsAtPos(TB, 2 * dB);
      if (!yB) return VB;
      let pB = BB.dom.getBoundingClientRect(),
        lB = (yB.top + yB.bottom) / 2,
        JB = BB.posAtCoords({
          x: pB.left + 1,
          y: lB
        }),
        YB = BB.posAtCoords({
          x: pB.right - 1,
          y: lB
        });
      return null == JB || null == YB ? VB : {
        from: Math.max(VB.from, Math.min(JB, YB)),
        to: Math.min(VB.to, Math.max(JB, YB))
      }
    }
    class qy {
      constructor(BB, TB) {
        this.view = BB, this.layer = TB, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = BB.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), TB.above && this.dom.classList.add("cm-layer-above"), TB.class && this.dom.classList.add(TB.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(BB.state), BB.requestMeasure(this.measureReq), TB.mount && TB.mount(this.dom, BB)
      }
      update(BB) {
        BB.startState.facet(xy) != BB.state.facet(xy) && this.setOrder(BB.state), (this.layer.update(BB, this.dom) || BB.geometryChanged) && (this.scale(), BB.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(BB) {
        !1 !== this.layer.updateOnDocViewUpdate && BB.requestMeasure(this.measureReq)
      }
      setOrder(BB) {
        let TB = 0,
          dB = BB.facet(xy);
        for (; TB < dB.length && dB[TB] != this.layer;) TB++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - TB)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: BB,
          scaleY: TB
        } = this.view;
        BB == this.scaleX && TB == this.scaleY || (this.scaleX = BB, this.scaleY = TB, this.dom.style.transform = `scale(${1/BB}, ${1/TB})`)
      }
      draw(BB) {
        if (BB.length != this.drawn.length || BB.some(((BB, TB) => {
            return dB = BB, VB = this.drawn[TB], !(dB.constructor == VB.constructor && dB.eq(VB));
            var dB, VB
          }))) {
          let TB = this.dom.firstChild,
            dB = 0;
          for (let VB of BB) VB.update && TB && VB.constructor && this.drawn[dB].constructor && VB.update(TB, this.drawn[dB]) ? (TB = TB.nextSibling, dB++) : this.dom.insertBefore(VB.draw(), TB);
          for (; TB;) {
            let BB = TB.nextSibling;
            TB.remove(), TB = BB
          }
          this.drawn = BB, fB.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const xy = VB.l.define();

    function jy(BB) {
      return [AT.define((TB => new qy(TB, BB))), xy.of(BB)]
    }
    const Ay = VB.l.define({
      combine: BB => (0, VB.P)(BB, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (BB, TB) => Math.min(BB, TB),
        drawRangeCursor: (BB, TB) => BB || TB
      })
    });

    function by() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Ay.of(BB), ey, Tp, dp, ZT.of(!0)]
    }

    function ny(BB) {
      return BB.startState.facet(Ay) != BB.state.facet(Ay)
    }
    const ey = jy({
      above: !0,
      markers(BB) {
        let {
          state: TB
        } = BB, dB = TB.facet(Ay), yB = [];
        for (let pB of TB.selection.ek) {
          let lB = pB == TB.selection.main;
          if (pB.empty || dB.drawRangeCursor && !(lB && fB.ios && dB.iosSelectionHandles)) {
            let TB = lB ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              dB = pB.empty ? pB : VB.h.cursor(pB.head, pB.assoc);
            for (let VB of hy.forRange(BB, TB, dB)) yB.push(VB)
          }
        }
        return yB
      },
      update(BB, TB) {
        BB.transactions.some((BB => BB.selection)) && (TB.style.animationName = "cm-blink" == TB.style.animationName ? "cm-blink2" : "cm-blink");
        let dB = ny(BB);
        return dB && Bp(BB.state, TB), BB.docChanged || BB.selectionSet || dB
      },
      mount(BB, TB) {
        Bp(TB.state, BB)
      },
      class: "cm-cursorLayer"
    });

    function Bp(BB, TB) {
      TB.style.animationDuration = BB.facet(Ay).cursorBlinkRate + "ms"
    }
    const Tp = jy({
        above: !1,
        markers(BB) {
          let TB = [],
            {
              main: dB,
              ek: yB
            } = BB.state.selection;
          for (let VB of yB)
            if (!VB.empty)
              for (let dB of hy.forRange(BB, "cm-selectionBackground", VB)) TB.push(dB);
          if (fB.ios && !dB.empty && BB.state.facet(Ay).iosSelectionHandles) {
            for (let yB of hy.forRange(BB, "cm-selectionHandle cm-selectionHandle-start", VB.h.cursor(dB.from, 1))) TB.push(yB);
            for (let yB of hy.forRange(BB, "cm-selectionHandle cm-selectionHandle-end", VB.h.cursor(dB.to, 1))) TB.push(yB)
          }
          return TB
        },
        update: (BB, TB) => BB.docChanged || BB.selectionSet || BB.viewportChanged || ny(BB),
        class: "cm-selectionLayer"
      }),
      dp = VB.r.highest(zy.theme({
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
      Vp = VB.x.define({
        map: (BB, TB) => null == BB ? null : TB.mapPos(BB)
      }),
      yp = VB.A.define({
        create: () => null,
        update: (BB, TB) => (null != BB && (BB = TB.changes.mapPos(BB)), TB.effects.reduce(((BB, TB) => TB.is(Vp) ? TB.value : BB), BB))
      }),
      pp = AT.fromClass(class {
        constructor(BB) {
          this.view = BB, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(BB) {
          var TB;
          let dB = BB.state.field(yp);
          null == dB ? null != this.cursor && (null === (TB = this.cursor) || void 0 === TB || TB.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (BB.startState.field(yp) != dB || BB.docChanged || BB.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: BB
          } = this, TB = BB.state.field(yp), dB = null != TB && BB.coordsAtPos(TB);
          if (!dB) return null;
          let VB = BB.scrollDOM.getBoundingClientRect();
          return {
            left: dB.left - VB.left + BB.scrollDOM.scrollLeft * BB.scaleX,
            top: dB.top - VB.top + BB.scrollDOM.scrollTop * BB.scaleY,
            height: dB.bottom - dB.top
          }
        }
        drawCursor(BB) {
          if (this.cursor) {
            let {
              scaleX: TB,
              scaleY: dB
            } = this.view;
            BB ? (this.cursor.style.left = BB.left / TB + "px", this.cursor.style.top = BB.top / dB + "px", this.cursor.style.height = BB.height / dB + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(BB) {
          this.view.state.field(yp) != BB && this.view.dispatch({
            effects: Vp.of(BB)
          })
        }
      }, {
        eventObservers: {
          dragover(BB) {
            this.setDropPos(this.view.posAtCoords({
              x: BB.clientX,
              y: BB.clientY
            }))
          },
          dragleave(BB) {
            BB.target != this.view.contentDOM && this.view.contentDOM.contains(BB.relatedTarget) || this.setDropPos(null)
          },
          dragend() {
            this.setDropPos(null)
          },
          drop() {
            this.setDropPos(null)
          }
        }
      });

    function lp() {
      return [yp, pp]
    }

    function Jp(BB, TB, dB, VB, yB) {
      TB.lastIndex = 0;
      for (let pB, lB = BB.iterRange(dB, VB), JB = dB; !lB.next().done; JB += lB.value.length)
        if (!lB.lineBreak)
          for (; pB = TB.exec(lB.value);) yB(JB + pB.index, pB)
    }
    class Yp {
      constructor(BB) {
        const {
          regexp: TB,
          decoration: dB,
          decorate: VB,
          boundary: yB,
          maxLength: pB = 1e3
        } = BB;
        if (!TB.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = TB, VB) this.addMatch = (BB, TB, dB, yB) => VB(yB, dB, dB + BB[0].length, BB, TB);
        else if ("function" == typeof dB) this.addMatch = (BB, TB, VB, yB) => {
          let pB = dB(BB, TB, VB);
          pB && yB(VB, VB + BB[0].length, pB)
        };
        else {
          if (!dB) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (BB, TB, VB, yB) => yB(VB, VB + BB[0].length, dB)
        }
        this.boundary = yB, this.maxLength = pB
      }
      createDeco(BB) {
        let TB = new VB.t,
          dB = TB.add.bind(TB);
        for (let {
            from: VB,
            to: yB
          }
          of
          function(BB, TB) {
            let dB = BB.BBB;
            if (1 == dB.length && dB[0].from == BB.viewport.from && dB[0].to == BB.viewport.to) return dB;
            let VB = [];
            for (let {
                from: yB,
                to: pB
              }
              of dB) yB = Math.max(BB.state.doc.lineAt(yB).from, yB - TB), pB = Math.min(BB.state.doc.lineAt(pB).to, pB + TB), VB.length && VB[VB.length - 1].to >= yB ? VB[VB.length - 1].to = pB : VB.push({
              from: yB,
              to: pB
            });
            return VB
          }(BB, this.maxLength)) Jp(BB.state.doc, this.regexp, VB, yB, ((TB, VB) => this.addMatch(VB, BB, TB, dB)));
        return TB.finish()
      }
      updateDeco(BB, TB) {
        let dB = 1e9,
          VB = -1;
        return BB.docChanged && BB.changes.iterChanges(((TB, yB, pB, lB) => {
          lB >= BB.view.viewport.from && pB <= BB.view.viewport.to && (dB = Math.min(pB, dB), VB = Math.max(lB, VB))
        })), BB.viewportMoved || VB - dB > 1e3 ? this.createDeco(BB.view) : VB > -1 ? this.updateRange(BB.view, TB.map(BB.changes), dB, VB) : TB
      }
      updateRange(BB, TB, dB, VB) {
        for (let yB of BB.BBB) {
          let pB = Math.max(yB.from, dB),
            lB = Math.min(yB.to, VB);
          if (lB >= pB) {
            let dB = BB.state.doc.lineAt(pB),
              VB = dB.to < lB ? BB.state.doc.lineAt(lB) : dB,
              JB = Math.max(yB.from, dB.from),
              YB = Math.min(yB.to, VB.to);
            if (this.boundary) {
              for (; pB > dB.from; pB--)
                if (this.boundary.test(dB.text[pB - 1 - dB.from])) {
                  JB = pB;
                  break
                } for (; lB < VB.to; lB++)
                if (this.boundary.test(VB.text[lB - VB.from])) {
                  YB = lB;
                  break
                }
            }
            let gB, oB = [],
              kB = (BB, TB, dB) => oB.push(dB.range(BB, TB));
            if (dB == VB)
              for (this.regexp.lastIndex = JB - dB.from;
                (gB = this.regexp.exec(dB.text)) && gB.index < YB - dB.from;) this.addMatch(gB, BB, gB.index + dB.from, kB);
            else Jp(BB.state.doc, this.regexp, JB, YB, ((TB, dB) => this.addMatch(dB, BB, TB, kB)));
            TB = TB.update({
              filterFrom: JB,
              filterTo: YB,
              filter: (BB, TB) => BB < JB || TB > YB,
              add: oB
            })
          }
        }
        return TB
      }
    }
    const gp = null != /x/.unicode ? "gu" : "g",
      op = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", gp),
      kp = {
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
    let Lp = null;
    const Op = VB.l.define({
      combine(BB) {
        let TB = (0, VB.P)(BB, {
          render: null,
          specialChars: op,
          addSpecialChars: null
        });
        return (TB.replaceTabs = ! function() {
          var BB;
          if (null == Lp && "undefined" != typeof document && document.body) {
            let TB = document.body.style;
            Lp = null != (null !== (BB = TB.tabSize) && void 0 !== BB ? BB : TB.MozTabSize)
          }
          return Lp || !1
        }()) && (TB.specialChars = new RegExp("\t|" + TB.specialChars.source, gp)), TB.addSpecialChars && (TB.specialChars = new RegExp(TB.specialChars.source + "|" + TB.addSpecialChars.source, gp)), TB
      }
    });

    function Dp() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Op.of(BB), Hp || (Hp = AT.fromClass(class {
        constructor(BB) {
          this.view = BB, this.QB = rB.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(BB.state.facet(Op)), this.QB = this.decorator.createDeco(BB)
        }
        makeDecorator(BB) {
          return new Yp({
            regexp: BB.specialChars,
            decoration: (TB, dB, yB) => {
              let {
                doc: pB
              } = dB.state, lB = (0, VB.K)(TB[0], 0);
              if (9 == lB) {
                let BB = pB.lineAt(yB),
                  TB = dB.state.tabSize,
                  lB = (0, VB.R)(BB.text, TB, yB - BB.from);
                return rB.replace({
                  widget: new vp((TB - lB % TB) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[lB] || (this.decorationCache[lB] = rB.replace({
                widget: new Ep(BB, lB)
              }))
            },
            boundary: BB.replaceTabs ? void 0 : /[^]/
          })
        }
        update(BB) {
          let TB = BB.state.facet(Op);
          BB.startState.facet(Op) != TB ? (this.decorator = this.makeDecorator(TB), this.QB = this.decorator.createDeco(BB.view)) : this.QB = this.decorator.updateDeco(BB, this.QB)
        }
      }, {
        QB: BB => BB.QB
      }))]
    }
    let Hp = null;
    class Ep extends FB {
      constructor(BB, TB) {
        super(), this.options = BB, this.code = TB
      }
      eq(BB) {
        return BB.code == this.code
      }
      toDOM(BB) {
        let TB = function(BB) {
            return BB >= 32 ? "\u2022" : 10 == BB ? "\u2424" : String.fromCharCode(9216 + BB)
          }(this.code),
          dB = BB.state.phrase("Control character") + " " + (kp[this.code] || "0x" + this.code.toString(16)),
          VB = this.options.render && this.options.render(this.code, dB, TB);
        if (VB) return VB;
        let yB = document.createElement("span");
        return yB.textContent = TB, yB.title = dB, yB.setAttribute("aria-label", dB), yB.className = "cm-specialChar", yB
      }
      ignoreEvent() {
        return !1
      }
    }
    class vp extends FB {
      constructor(BB) {
        super(), this.width = BB
      }
      eq(BB) {
        return BB.width == this.width
      }
      toDOM() {
        let BB = document.createElement("span");
        return BB.textContent = "\t", BB.className = "cm-tab", BB.style.width = this.width + "px", BB
      }
      ignoreEvent() {
        return !1
      }
    }

    function mp() {
      return Np
    }
    const ip = rB.line({
        class: "cm-activeLine"
      }),
      Np = AT.fromClass(class {
        constructor(BB) {
          this.QB = this.getDeco(BB)
        }
        update(BB) {
          (BB.docChanged || BB.selectionSet) && (this.QB = this.getDeco(BB.view))
        }
        getDeco(BB) {
          let TB = -1,
            dB = [];
          for (let VB of BB.state.selection.ek) {
            let yB = BB.lineBlockAt(VB.head);
            yB.from > TB && (dB.push(ip.range(yB.from)), TB = yB.from)
          }
          return rB.set(dB)
        }
      }, {
        QB: BB => BB.QB
      });
    class tp extends FB {
      constructor(BB) {
        super(), this.content = BB
      }
      toDOM(BB) {
        let TB = document.createElement("span");
        return TB.className = "cm-placeholder", TB.style.pointerEvents = "none", TB.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(BB) : this.content.cloneNode(!0)), TB.setAttribute("aria-hidden", "true"), TB
      }
      coordsAt(BB) {
        let TB = BB.firstChild ? WB(BB.firstChild) : [];
        if (!TB.length) return null;
        let dB = window.getComputedStyle(BB.parentNode),
          VB = jB(TB[0], "rtl" != dB.direction),
          yB = parseInt(dB.lineHeight);
        return VB.bottom - VB.top > 1.5 * yB ? {
          left: VB.left,
          right: VB.right,
          top: VB.top,
          bottom: VB.top + yB
        } : VB
      }
      ignoreEvent() {
        return !1
      }
    }

    function fp(BB) {
      let TB = AT.fromClass(class {
        constructor(TB) {
          this.view = TB, this.placeholder = BB ? rB.set([rB.widget({
            widget: new tp(BB),
            side: 1
          }).range(0)]) : rB.none
        }
        get QB() {
          return this.view.state.doc.length ? rB.none : this.placeholder
        }
      }, {
        QB: BB => BB.QB
      });
      return "string" == typeof BB ? [TB, zy.contentAttributes.of({
        "aria-placeholder": BB
      })] : TB
    }
    const sp = 2e3;

    function Mp(BB, TB) {
      let dB = BB.posAtCoords({
          x: TB.clientX,
          y: TB.clientY
        }, !1),
        yB = BB.state.doc.lineAt(dB),
        pB = dB - yB.from,
        lB = pB > sp ? -1 : pB == yB.length ? function(BB, TB) {
          let dB = BB.coordsAtPos(BB.viewport.from);
          return dB ? Math.round(Math.abs((dB.left - TB) / BB.defaultCharacterWidth)) : -1
        }(BB, TB.clientX) : (0, VB.R)(yB.text, BB.state.tabSize, dB - yB.from);
      return {
        line: yB.number,
        col: lB,
        off: pB
      }
    }

    function zp(BB, TB) {
      let dB = Mp(BB, TB),
        yB = BB.state.selection;
      return dB ? {
        update(BB) {
          if (BB.docChanged) {
            let TB = BB.changes.mapPos(BB.startState.doc.line(dB.line).from),
              VB = BB.state.doc.lineAt(TB);
            dB = {
              line: VB.number,
              col: dB.col,
              off: Math.min(dB.off, VB.length)
            }, yB = yB.map(BB.changes)
          }
        },
        get(TB, pB, lB) {
          let JB = Mp(BB, TB);
          if (!JB) return yB;
          let YB = function(BB, TB, dB) {
            let yB = Math.min(TB.line, dB.line),
              pB = Math.max(TB.line, dB.line),
              lB = [];
            if (TB.off > sp || dB.off > sp || TB.col < 0 || dB.col < 0) {
              let JB = Math.min(TB.off, dB.off),
                YB = Math.max(TB.off, dB.off);
              for (let TB = yB; TB <= pB; TB++) {
                let dB = BB.doc.line(TB);
                dB.length <= YB && lB.push(VB.h.range(dB.from + JB, dB.to + YB))
              }
            } else {
              let JB = Math.min(TB.col, dB.col),
                YB = Math.max(TB.col, dB.col);
              for (let TB = yB; TB <= pB; TB++) {
                let dB = BB.doc.line(TB),
                  yB = (0, VB.U)(dB.text, JB, BB.tabSize, !0);
                if (yB < 0) lB.push(VB.h.cursor(dB.to));
                else {
                  let TB = (0, VB.U)(dB.text, YB, BB.tabSize);
                  lB.push(VB.h.range(dB.from + yB, dB.from + TB))
                }
              }
            }
            return lB
          }(BB.state, dB, JB);
          return YB.length ? lB ? VB.h.create(YB.concat(yB.ek)) : VB.h.create(YB) : yB
        }
      } : null
    }

    function wp(BB) {
      let TB = (null === BB || void 0 === BB ? void 0 : BB.eventFilter) || (BB => BB.altKey && 0 == BB.button);
      return zy.mouseSelectionStyle.of(((BB, dB) => TB(dB) ? zp(BB, dB) : null))
    }
    const Up = {
        Alt: [18, BB => !!BB.altKey],
        Control: [17, BB => !!BB.ctrlKey],
        Shift: [16, BB => !!BB.shiftKey],
        Meta: [91, BB => !!BB.metaKey]
      },
      Fp = {
        style: "cursor: crosshair"
      };

    function Kp() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [TB, dB] = Up[BB.key || "Alt"],
        VB = AT.fromClass(class {
          constructor(BB) {
            this.view = BB, this.isDown = !1
          }
          set(BB) {
            this.isDown != BB && (this.isDown = BB, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(BB) {
              this.set(BB.keyCode == TB || dB(BB))
            },
            keyup(BB) {
              BB.keyCode != TB && dB(BB) || this.set(!1)
            },
            mousemove(BB) {
              this.set(dB(BB))
            }
          }
        });
      return [VB, zy.contentAttributes.of((BB => {
        var TB;
        return (null === (TB = BB.plugin(VB)) || void 0 === TB ? void 0 : TB.isDown) ? Fp : null
      }))]
    }
    const rp = "-10000px";
    class Ip {
      constructor(BB, TB, dB, VB) {
        this.facet = TB, this.createTooltipView = dB, this.removeTooltipView = VB, this.input = BB.state.facet(TB), this.tooltips = this.input.filter((BB => BB));
        let yB = null;
        this.tooltipViews = this.tooltips.map((BB => yB = dB(BB, yB)))
      }
      update(BB, TB) {
        var dB;
        let VB = BB.state.facet(this.facet),
          yB = VB.filter((BB => BB));
        if (VB === this.input) {
          for (let TB of this.tooltipViews) TB.update && TB.update(BB);
          return !1
        }
        let pB = [],
          lB = TB ? [] : null;
        for (let JB = 0; JB < yB.length; JB++) {
          let dB = yB[JB],
            VB = -1;
          if (dB) {
            for (let BB = 0; BB < this.tooltips.length; BB++) {
              let TB = this.tooltips[BB];
              TB && TB.create == dB.create && (VB = BB)
            }
            if (VB < 0) pB[JB] = this.createTooltipView(dB, JB ? pB[JB - 1] : null), lB && (lB[JB] = !!dB.above);
            else {
              let dB = pB[JB] = this.tooltipViews[VB];
              lB && (lB[JB] = TB[VB]), dB.update && dB.update(BB)
            }
          }
        }
        for (let JB of this.tooltipViews) pB.indexOf(JB) < 0 && (this.removeTooltipView(JB), null === (dB = JB.destroy) || void 0 === dB || dB.call(JB));
        return TB && (lB.forEach(((BB, dB) => TB[dB] = BB)), TB.length = lB.length), this.input = VB, this.tooltips = yB, this.tooltipViews = pB, !0
      }
    }

    function cp(BB) {
      let TB = BB.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: TB.clientHeight,
        right: TB.clientWidth
      }
    }
    const Sp = VB.l.define({
        combine: BB => {
          var TB, dB, VB;
          return {
            position: fB.ios ? "absolute" : (null === (TB = BB.find((BB => BB.position))) || void 0 === TB ? void 0 : TB.position) || "fixed",
            parent: (null === (dB = BB.find((BB => BB.parent))) || void 0 === dB ? void 0 : dB.parent) || null,
            tooltipSpace: (null === (VB = BB.find((BB => BB.tooltipSpace))) || void 0 === VB ? void 0 : VB.tooltipSpace) || cp
          }
        }
      }),
      Pp = new WeakMap,
      Qp = AT.fromClass(class {
        constructor(BB) {
          this.view = BB, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let TB = BB.state.facet(Sp);
          this.position = TB.position, this.parent = TB.parent, this.classes = BB.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new Ip(BB, Xp, ((BB, TB) => this.createTooltip(BB, TB)), (BB => {
            this.resizeObserver && this.resizeObserver.unobserve(BB.dom), BB.dom.remove()
          })), this.above = this.manager.tooltips.map((BB => !!BB.above)), this.intersectionObserver = "function" == typeof IntersectionObserver ? new IntersectionObserver((BB => {
            Date.now() > this.lastTransaction - 50 && BB.length > 0 && BB[BB.length - 1].intersectionRatio < 1 && this.measureSoon()
          }), {
            threshold: [1]
          }) : null, this.observeIntersection(), BB.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure()
        }
        createContainer() {
          this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom
        }
        observeIntersection() {
          if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            for (let BB of this.manager.tooltipViews) this.intersectionObserver.observe(BB.dom)
          }
        }
        measureSoon() {
          this.measureTimeout < 0 && (this.measureTimeout = setTimeout((() => {
            this.measureTimeout = -1, this.maybeMeasure()
          }), 50))
        }
        update(BB) {
          BB.transactions.length && (this.lastTransaction = Date.now());
          let TB = this.manager.update(BB, this.above);
          TB && this.observeIntersection();
          let dB = TB || BB.geometryChanged,
            VB = BB.state.facet(Sp);
          if (VB.position != this.position && !this.madeAbsolute) {
            this.position = VB.position;
            for (let BB of this.manager.tooltipViews) BB.dom.style.position = this.position;
            dB = !0
          }
          if (VB.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = VB.parent, this.createContainer();
            for (let BB of this.manager.tooltipViews) this.container.appendChild(BB.dom);
            dB = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          dB && this.maybeMeasure()
        }
        createTooltip(BB, TB) {
          let dB = BB.create(this.view),
            VB = TB ? TB.dom : null;
          if (dB.dom.classList.add("cm-tooltip"), BB.arrow && !dB.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let BB = document.createElement("div");
            BB.className = "cm-tooltip-arrow", dB.dom.appendChild(BB)
          }
          return dB.dom.style.position = this.position, dB.dom.style.top = rp, dB.dom.style.left = "0px", this.container.insertBefore(dB.dom, VB), dB.mount && dB.mount(this.view), this.resizeObserver && this.resizeObserver.observe(dB.dom), dB
        }
        destroy() {
          var BB, TB, dB;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let VB of this.manager.tooltipViews) VB.dom.remove(), null === (BB = VB.destroy) || void 0 === BB || BB.call(VB);
          this.parent && this.container.remove(), null === (TB = this.resizeObserver) || void 0 === TB || TB.disconnect(), null === (dB = this.intersectionObserver) || void 0 === dB || dB.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let BB = 1,
            TB = 1,
            dB = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: BB
            } = this.manager.tooltipViews[0];
            if (fB.safari) {
              let TB = BB.getBoundingClientRect();
              dB = Math.abs(TB.top + 1e4) > 1 || Math.abs(TB.left) > 1
            } else dB = !!BB.offsetParent && BB.offsetParent != this.container.ownerDocument.body
          }
          if (dB || "absolute" == this.position)
            if (this.parent) {
              let dB = this.parent.getBoundingClientRect();
              dB.width && dB.height && (BB = dB.width / this.parent.offsetWidth, TB = dB.height / this.parent.offsetHeight)
            } else({
              scaleX: BB,
              scaleY: TB
            } = this.view.viewState);
          let VB = this.view.scrollDOM.getBoundingClientRect(),
            yB = Jd(this.view);
          return {
            visible: {
              left: VB.left + yB.left,
              top: VB.top + yB.top,
              right: VB.right - yB.right,
              bottom: VB.bottom - yB.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((BB, TB) => {
              let dB = this.manager.tooltipViews[TB];
              return dB.getCoords ? dB.getCoords(BB.pos) : this.view.coordsAtPos(BB.pos)
            })),
            size: this.manager.tooltipViews.map((BB => {
              let {
                dom: TB
              } = BB;
              return TB.getBoundingClientRect()
            })),
            space: this.view.state.facet(Sp).tooltipSpace(this.view),
            scaleX: BB,
            scaleY: TB,
            makeAbsolute: dB
          }
        }
        writeMeasure(BB) {
          var TB;
          if (BB.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let BB of this.manager.tooltipViews) BB.dom.style.position = "absolute"
          }
          let {
            visible: dB,
            space: VB,
            scaleX: yB,
            scaleY: pB
          } = BB, lB = [];
          for (let JB = 0; JB < this.manager.tooltips.length; JB++) {
            let YB = this.manager.tooltips[JB],
              gB = this.manager.tooltipViews[JB],
              {
                dom: oB
              } = gB,
              kB = BB.pos[JB],
              LB = BB.size[JB];
            if (!kB || !1 !== YB.clip && (kB.bottom <= Math.max(dB.top, VB.top) || kB.top >= Math.min(dB.bottom, VB.bottom) || kB.right < Math.max(dB.left, VB.left) - .1 || kB.left > Math.min(dB.right, VB.right) + .1)) {
              oB.style.top = rp;
              continue
            }
            let OB = YB.arrow ? gB.dom.querySelector(".cm-tooltip-arrow") : null,
              DB = OB ? 7 : 0,
              uB = LB.right - LB.left,
              HB = null !== (TB = Pp.get(gB)) && void 0 !== TB ? TB : LB.bottom - LB.top,
              EB = gB.offset || Zp,
              vB = this.view.textDirection == gT.LTR,
              mB = LB.width > VB.right - VB.left ? vB ? VB.left : VB.right - LB.width : vB ? Math.max(VB.left, Math.min(kB.left - (OB ? 14 : 0) + EB.x, VB.right - uB)) : Math.min(Math.max(VB.left, kB.left - uB + (OB ? 14 : 0) - EB.x), VB.right - uB),
              iB = this.above[JB];
            !YB.strictSide && (iB ? kB.top - HB - DB - EB.y < VB.top : kB.bottom + HB + DB + EB.y > VB.bottom) && iB == VB.bottom - kB.bottom > kB.top - VB.top && (iB = this.above[JB] = !iB);
            let NB = (iB ? kB.top - VB.top : VB.bottom - kB.bottom) - DB;
            if (NB < HB && !1 !== gB.resize) {
              if (NB < this.view.defaultLineHeight) {
                oB.style.top = rp;
                continue
              }
              Pp.set(gB, HB), oB.style.height = (HB = NB) / pB + "px"
            } else oB.style.height && (oB.style.height = "");
            let tB = iB ? kB.top - HB - DB - EB.y : kB.bottom + DB + EB.y,
              fB = mB + uB;
            if (!0 !== gB.overlap)
              for (let BB of lB) BB.left < fB && BB.right > mB && BB.top < tB + HB && BB.bottom > tB && (tB = iB ? BB.top - HB - 2 - DB : BB.bottom + DB + 2);
            if ("absolute" == this.position ? (oB.style.top = (tB - BB.parent.top) / pB + "px", Rp(oB, (mB - BB.parent.left) / yB)) : (oB.style.top = tB / pB + "px", Rp(oB, mB / yB)), OB) {
              let BB = kB.left + (vB ? EB.x : -EB.x) - (mB + 14 - 7);
              OB.style.left = BB / yB + "px"
            }!0 !== gB.overlap && lB.push({
              left: mB,
              top: tB,
              right: fB,
              bottom: tB + HB
            }), oB.classList.toggle("cm-tooltip-above", iB), oB.classList.toggle("cm-tooltip-below", !iB), gB.positioned && gB.positioned(BB.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let BB of this.manager.tooltipViews) BB.dom.style.top = rp
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function Rp(BB, TB) {
      let dB = parseInt(BB.style.left, 10);
      (isNaN(dB) || Math.abs(TB - dB) > 1) && (BB.style.left = TB + "px")
    }
    const ap = zy.baseTheme({
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
      Zp = {
        x: 0,
        y: 0
      },
      Xp = VB.l.define({
        enables: [Qp, ap]
      }),
      Wp = VB.l.define({
        combine: BB => BB.reduce(((BB, TB) => BB.concat(TB)), [])
      });
    class hp {
      static create(BB) {
        return new hp(BB)
      }
      constructor(BB) {
        this.view = BB, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new Ip(BB, Wp, ((BB, TB) => this.createHostedView(BB, TB)), (BB => BB.dom.remove()))
      }
      createHostedView(BB, TB) {
        let dB = BB.create(this.view);
        return dB.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(dB.dom, TB ? TB.dom.nextSibling : this.dom.firstChild), this.mounted && dB.mount && dB.mount(this.view), dB
      }
      mount(BB) {
        for (let TB of this.manager.tooltipViews) TB.mount && TB.mount(BB);
        this.mounted = !0
      }
      positioned(BB) {
        for (let TB of this.manager.tooltipViews) TB.positioned && TB.positioned(BB)
      }
      update(BB) {
        this.manager.update(BB)
      }
      destroy() {
        var BB;
        for (let TB of this.manager.tooltipViews) null === (BB = TB.destroy) || void 0 === BB || BB.call(TB)
      }
      passProp(BB) {
        let TB;
        for (let dB of this.manager.tooltipViews) {
          let VB = dB[BB];
          if (void 0 !== VB)
            if (void 0 === TB) TB = VB;
            else if (TB !== VB) return
        }
        return TB
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
    const Cp = Xp.compute([Wp], (BB => {
      let TB = BB.facet(Wp);
      return 0 === TB.length ? null : {
        pos: Math.min(...TB.map((BB => BB.pos))),
        end: Math.max(...TB.map((BB => {
          var TB;
          return null !== (TB = BB.end) && void 0 !== TB ? TB : BB.pos
        }))),
        create: hp.create,
        above: TB[0].above,
        arrow: TB.some((BB => BB.arrow))
      }
    }));
    class Gp {
      constructor(BB, TB, dB, VB, yB) {
        this.view = BB, this.source = TB, this.field = dB, this.setHover = VB, this.hoverTime = yB, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
          x: 0,
          y: 0,
          target: BB.dom,
          time: 0
        }, this.checkHover = this.checkHover.bind(this), BB.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), BB.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this))
      }
      update() {
        this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout((() => this.startHover()), 20))
      }
      get active() {
        return this.view.state.field(this.field)
      }
      checkHover() {
        if (this.hoverTimeout = -1, this.active.length) return;
        let BB = Date.now() - this.lastMove.time;
        BB < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - BB) : this.startHover()
      }
      startHover() {
        clearTimeout(this.restartTimeout);
        let {
          view: BB,
          lastMove: TB
        } = this, dB = BB.docView.tile.nearest(TB.target);
        if (!dB) return;
        let VB, yB = 1;
        if (dB.isWidget()) VB = dB.posAtStart;
        else {
          if (VB = BB.posAtCoords(TB), null == VB) return;
          let dB = BB.coordsAtPos(VB);
          if (!dB || TB.y < dB.top || TB.y > dB.bottom || TB.x < dB.left - BB.defaultCharacterWidth || TB.x > dB.right + BB.defaultCharacterWidth) return;
          let pB = BB.bidiSpans(BB.state.doc.lineAt(VB)).find((BB => BB.from <= VB && BB.to >= VB)),
            lB = pB && pB.dir == gT.RTL ? -1 : 1;
          yB = TB.x < dB.left ? -lB : lB
        }
        let pB = this.source(BB, VB, yB);
        if (null === pB || void 0 === pB ? void 0 : pB.then) {
          let TB = this.pending = {
            pos: VB
          };
          pB.then((dB => {
            this.pending == TB && (this.pending = null, !dB || Array.isArray(dB) && !dB.length || BB.dispatch({
              effects: this.setHover.of(Array.isArray(dB) ? dB : [dB])
            }))
          }), (TB => GT(BB.state, TB, "hover tooltip")))
        } else !pB || Array.isArray(pB) && !pB.length || BB.dispatch({
          effects: this.setHover.of(Array.isArray(pB) ? pB : [pB])
        })
      }
      get tooltip() {
        let BB = this.view.plugin(Qp),
          TB = BB ? BB.manager.tooltips.findIndex((BB => BB.create == hp.create)) : -1;
        return TB > -1 ? BB.manager.tooltipViews[TB] : null
      }
      mousemove(BB) {
        var TB, dB;
        this.lastMove = {
          x: BB.clientX,
          y: BB.clientY,
          target: BB.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: VB,
          tooltip: yB
        } = this;
        if (VB.length && yB && ! function(BB, TB) {
            let dB, {
              left: VB,
              right: yB,
              top: pB,
              bottom: lB
            } = BB.getBoundingClientRect();
            if (dB = BB.querySelector(".cm-tooltip-arrow")) {
              let BB = dB.getBoundingClientRect();
              pB = Math.min(BB.top, pB), lB = Math.max(BB.bottom, lB)
            }
            return TB.clientX >= VB - qp && TB.clientX <= yB + qp && TB.clientY >= pB - qp && TB.clientY <= lB + qp
          }(yB.dom, BB) || this.pending) {
          let {
            pos: yB
          } = VB[0] || this.pending, pB = null !== (dB = null === (TB = VB[0]) || void 0 === TB ? void 0 : TB.end) && void 0 !== dB ? dB : yB;
          (yB == pB ? this.view.posAtCoords(this.lastMove) == yB : function(BB, TB, dB, VB, yB) {
            let pB = BB.scrollDOM.getBoundingClientRect(),
              lB = BB.documentTop + BB.documentPadding.top + BB.contentHeight;
            if (pB.left > VB || pB.right < VB || pB.top > yB || Math.min(pB.bottom, lB) < yB) return !1;
            let JB = BB.posAtCoords({
              x: VB,
              y: yB
            }, !1);
            return JB >= TB && JB <= dB
          }(this.view, yB, pB, BB.clientX, BB.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(BB) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: TB
        } = this;
        if (TB.length) {
          let {
            tooltip: TB
          } = this;
          TB && TB.dom.contains(BB.relatedTarget) ? this.watchTooltipLeave(TB.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(BB) {
        let TB = dB => {
          BB.removeEventListener("mouseleave", TB), this.active.length && !this.view.dom.contains(dB.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        BB.addEventListener("mouseleave", TB)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const qp = 4;

    function xp(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        dB = VB.x.define(),
        yB = VB.A.define({
          create: () => [],
          update(BB, yB) {
            if (BB.length && (TB.hideOnChange && (yB.docChanged || yB.selection) ? BB = [] : TB.hideOn && (BB = BB.filter((BB => !TB.hideOn(yB, BB)))), yB.docChanged)) {
              let TB = [];
              for (let dB of BB) {
                let BB = yB.changes.mapPos(dB.pos, -1, VB.o.TrackDel);
                if (null != BB) {
                  let VB = Object.assign(Object.create(null), dB);
                  VB.pos = BB, null != VB.end && (VB.end = yB.changes.mapPos(VB.end)), TB.push(VB)
                }
              }
              BB = TB
            }
            for (let TB of yB.effects) TB.is(dB) && (BB = TB.value), TB.is(Ap) && (BB = []);
            return BB
          },
          provide: BB => Wp.from(BB)
        });
      return {
        active: yB,
        extension: [yB, AT.define((VB => new Gp(VB, BB, yB, dB, TB.hoverTime || 300))), Cp]
      }
    }

    function jp(BB, TB) {
      let dB = BB.plugin(Qp);
      if (!dB) return null;
      let VB = dB.manager.tooltips.indexOf(TB);
      return VB < 0 ? null : dB.manager.tooltipViews[VB]
    }
    const Ap = VB.x.define();
    const bp = VB.l.define({
      combine(BB) {
        let TB, dB;
        for (let VB of BB) TB = TB || VB.topContainer, dB = dB || VB.bottomContainer;
        return {
          topContainer: TB,
          bottomContainer: dB
        }
      }
    });

    function np(BB, TB) {
      let dB = BB.plugin(ep),
        VB = dB ? dB.specs.indexOf(TB) : -1;
      return VB > -1 ? dB.panels[VB] : null
    }
    const ep = AT.fromClass(class {
      constructor(BB) {
        this.input = BB.state.facet(dl), this.specs = this.input.filter((BB => BB)), this.panels = this.specs.map((TB => TB(BB)));
        let TB = BB.state.facet(bp);
        this.top = new Bl(BB, !0, TB.topContainer), this.bottom = new Bl(BB, !1, TB.bottomContainer), this.top.sync(this.panels.filter((BB => BB.top))), this.bottom.sync(this.panels.filter((BB => !BB.top)));
        for (let dB of this.panels) dB.dom.classList.add("cm-panel"), dB.mount && dB.mount()
      }
      update(BB) {
        let TB = BB.state.facet(bp);
        this.top.container != TB.topContainer && (this.top.sync([]), this.top = new Bl(BB.view, !0, TB.topContainer)), this.bottom.container != TB.bottomContainer && (this.bottom.sync([]), this.bottom = new Bl(BB.view, !1, TB.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let dB = BB.state.facet(dl);
        if (dB != this.input) {
          let TB = dB.filter((BB => BB)),
            VB = [],
            yB = [],
            pB = [],
            lB = [];
          for (let dB of TB) {
            let TB, JB = this.specs.indexOf(dB);
            JB < 0 ? (TB = dB(BB.view), lB.push(TB)) : (TB = this.panels[JB], TB.update && TB.update(BB)), VB.push(TB), (TB.top ? yB : pB).push(TB)
          }
          this.specs = TB, this.panels = VB, this.top.sync(yB), this.bottom.sync(pB);
          for (let BB of lB) BB.dom.classList.add("cm-panel"), BB.mount && BB.mount()
        } else
          for (let VB of this.panels) VB.update && VB.update(BB)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: BB => zy.scrollMargins.of((TB => {
        let dB = TB.plugin(BB);
        return dB && {
          top: dB.top.scrollMargin(),
          bottom: dB.bottom.scrollMargin()
        }
      }))
    });
    class Bl {
      constructor(BB, TB, dB) {
        this.view = BB, this.top = TB, this.container = dB, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(BB) {
        for (let TB of this.panels) TB.destroy && BB.indexOf(TB) < 0 && TB.destroy();
        this.panels = BB, this.syncDOM()
      }
      syncDOM() {
        if (0 == this.panels.length) return void(this.dom && (this.dom.remove(), this.dom = void 0));
        if (!this.dom) {
          this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
          let BB = this.container || this.view.dom;
          BB.insertBefore(this.dom, this.top ? BB.firstChild : null)
        }
        let BB = this.dom.firstChild;
        for (let TB of this.panels)
          if (TB.dom.parentNode == this.dom) {
            for (; BB != TB.dom;) BB = Tl(BB);
            BB = BB.nextSibling
          } else this.dom.insertBefore(TB.dom, BB);
        for (; BB;) BB = Tl(BB)
      }
      scrollMargin() {
        return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top)
      }
      syncClasses() {
        if (this.container && this.classes != this.view.themeClasses) {
          for (let BB of this.classes.split(" ")) BB && this.container.classList.remove(BB);
          for (let BB of (this.classes = this.view.themeClasses).split(" ")) BB && this.container.classList.add(BB)
        }
      }
    }

    function Tl(BB) {
      let TB = BB.nextSibling;
      return BB.remove(), TB
    }
    const dl = VB.l.define({
      enables: ep
    });

    function Vl(BB, TB) {
      let dB, yB = new Promise((BB => dB = BB)),
        pB = BB => function(BB, TB, dB) {
          let VB = TB.content ? TB.content(BB, (() => lB(null))) : null;
          if (!VB) {
            if (VB = (0, kB.e)("form"), TB.input) {
              let BB = (0, kB.e)("input", TB.input);
              /^(text|password|number|email|tel|url)$/.test(BB.type) && BB.classList.add("cm-textfield"), BB.name || (BB.name = "input"), VB.appendChild((0, kB.e)("label", (TB.label || "") + ": ", BB))
            } else VB.appendChild(document.createTextNode(TB.label || ""));
            VB.appendChild(document.createTextNode(" ")), VB.appendChild((0, kB.e)("button", {
              class: "cm-button",
              type: "submit"
            }, TB.submitLabel || "OK"))
          }
          let yB = "FORM" == VB.nodeName ? [VB] : VB.querySelectorAll("form");
          for (let JB = 0; JB < yB.length; JB++) {
            let BB = yB[JB];
            BB.addEventListener("keydown", (TB => {
              27 == TB.keyCode ? (TB.preventDefault(), lB(null)) : 13 == TB.keyCode && (TB.preventDefault(), lB(BB))
            })), BB.addEventListener("submit", (TB => {
              TB.preventDefault(), lB(BB)
            }))
          }
          let pB = (0, kB.e)("div", VB, (0, kB.e)("button", {
            onclick: () => lB(null),
            "aria-label": BB.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          TB.class && (pB.className = TB.class);

          function lB(TB) {
            pB.contains(pB.ownerDocument.activeElement) && BB.focus(), dB(TB)
          }
          return pB.classList.add("cm-dialog"), {
            dom: pB,
            top: TB.top,
            mount: () => {
              if (TB.focus) {
                let BB;
                BB = "string" == typeof TB.focus ? VB.querySelector(TB.focus) : VB.querySelector("input") || VB.querySelector("button"), BB && "select" in BB ? BB.select() : BB && "focus" in BB && BB.focus()
              }
            }
          }
        }(BB, TB, dB);
      BB.state.field(yl, !1) ? BB.dispatch({
        effects: pl.of(pB)
      }) : BB.dispatch({
        effects: VB.x.appendConfig.of(yl.init((() => [pB])))
      });
      let lB = ll.of(pB);
      return {
        close: lB,
        result: yB.then((TB => ((BB.win.queueMicrotask || (TB => BB.win.setTimeout(TB, 10)))((() => {
          BB.state.field(yl).indexOf(pB) > -1 && BB.dispatch({
            effects: lB
          })
        })), TB)))
      }
    }
    const yl = VB.A.define({
        create: () => [],
        update(BB, TB) {
          for (let dB of TB.effects) dB.is(pl) ? BB = [dB.value].concat(BB) : dB.is(ll) && (BB = BB.filter((BB => BB != dB.value)));
          return BB
        },
        provide: BB => dl.computeN([BB], (TB => TB.field(BB)))
      }),
      pl = VB.x.define(),
      ll = VB.x.define();
    class Jl extends VB.w {
      compare(BB) {
        return this == BB || this.constructor == BB.constructor && this.eq(BB)
      }
      eq(BB) {
        return !1
      }
      destroy(BB) {}
    }
    Jl.prototype.elementClass = "", Jl.prototype.toDOM = void 0, Jl.prototype.mapMode = VB.o.TrackBefore, Jl.prototype.startSide = Jl.prototype.endSide = -1, Jl.prototype.point = !0;
    const Yl = VB.l.define(),
      gl = VB.l.define(),
      ol = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => VB.u.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      kl = VB.l.define();

    function Ll(BB) {
      return [Dl(), kl.of({
        ...ol,
        ...BB
      })]
    }
    const Ol = VB.l.define({
      combine: BB => BB.some((BB => BB))
    });

    function Dl(BB) {
      let TB = [ul];
      return BB && !1 === BB.fixed && TB.push(Ol.of(!0)), TB
    }
    const ul = AT.fromClass(class {
      constructor(BB) {
        this.view = BB, this.domAfter = null, this.prevViewport = BB.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = BB.state.facet(kl).map((TB => new ml(BB, TB))), this.fixed = !BB.state.facet(Ol);
        for (let TB of this.gutters) "after" == TB.config.side ? this.getDOMAfter().appendChild(TB.dom) : this.dom.appendChild(TB.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), BB.scrollDOM.insertBefore(this.dom, BB.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(BB) {
        if (this.updateGutters(BB)) {
          let TB = this.prevViewport,
            dB = BB.view.viewport,
            VB = Math.min(TB.to, dB.to) - Math.max(TB.from, dB.from);
          this.syncGutters(VB < .8 * (dB.to - dB.from))
        }
        if (BB.geometryChanged) {
          let BB = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = BB, this.domAfter && (this.domAfter.style.minHeight = BB)
        }
        this.view.state.facet(Ol) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = BB.view.viewport
      }
      syncGutters(BB) {
        let TB = this.dom.nextSibling;
        BB && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let dB = VB.u.iter(this.view.state.facet(Yl), this.view.viewport.from),
          yB = [],
          pB = this.gutters.map((BB => new vl(BB, this.view.viewport, -this.view.documentPadding.top)));
        for (let VB of this.view.viewportLineBlocks)
          if (yB.length && (yB = []), Array.isArray(VB.type)) {
            let BB = !0;
            for (let TB of VB.type)
              if (TB.type == KB.Text && BB) {
                El(dB, yB, TB.from);
                for (let BB of pB) BB.line(this.view, TB, yB);
                BB = !1
              } else if (TB.widget)
              for (let BB of pB) BB.widget(this.view, TB)
          } else if (VB.type == KB.Text) {
          El(dB, yB, VB.from);
          for (let BB of pB) BB.line(this.view, VB, yB)
        } else if (VB.widget)
          for (let BB of pB) BB.widget(this.view, VB);
        for (let VB of pB) VB.finish();
        BB && (this.view.scrollDOM.insertBefore(this.dom, TB), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(BB) {
        let TB = BB.startState.facet(kl),
          dB = BB.state.facet(kl),
          yB = BB.docChanged || BB.heightChanged || BB.viewportChanged || !VB.u.eq(BB.startState.facet(Yl), BB.state.facet(Yl), BB.view.viewport.from, BB.view.viewport.to);
        if (TB == dB)
          for (let VB of this.gutters) VB.update(BB) && (yB = !0);
        else {
          yB = !0;
          let VB = [];
          for (let yB of dB) {
            let dB = TB.indexOf(yB);
            dB < 0 ? VB.push(new ml(this.view, yB)) : (this.gutters[dB].update(BB), VB.push(this.gutters[dB]))
          }
          for (let BB of this.gutters) BB.dom.remove(), VB.indexOf(BB) < 0 && BB.destroy();
          for (let BB of VB) "after" == BB.config.side ? this.getDOMAfter().appendChild(BB.dom) : this.dom.appendChild(BB.dom);
          this.gutters = VB
        }
        return yB
      }
      destroy() {
        for (let BB of this.gutters) BB.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: BB => zy.scrollMargins.of((TB => {
        let dB = TB.plugin(BB);
        if (!dB || 0 == dB.gutters.length || !dB.fixed) return null;
        let VB = dB.dom.offsetWidth * TB.scaleX,
          yB = dB.domAfter ? dB.domAfter.offsetWidth * TB.scaleX : 0;
        return TB.textDirection == gT.LTR ? {
          left: VB,
          right: yB
        } : {
          right: VB,
          left: yB
        }
      }))
    });

    function Hl(BB) {
      return Array.isArray(BB) ? BB : [BB]
    }

    function El(BB, TB, dB) {
      for (; BB.value && BB.from <= dB;) BB.from == dB && TB.push(BB.value), BB.next()
    }
    class vl {
      constructor(BB, TB, dB) {
        this.gutter = BB, this.height = dB, this.i = 0, this.cursor = VB.u.iter(BB.markers, TB.from)
      }
      addElement(BB, TB, dB) {
        let {
          gutter: VB
        } = this, yB = (TB.top - this.height) / BB.scaleY, pB = TB.height / BB.scaleY;
        if (this.i == VB.elements.length) {
          let TB = new il(BB, pB, yB, dB);
          VB.elements.push(TB), VB.dom.appendChild(TB.dom)
        } else VB.elements[this.i].update(BB, pB, yB, dB);
        this.height = TB.bottom, this.i++
      }
      line(BB, TB, dB) {
        let VB = [];
        El(this.cursor, VB, TB.from), dB.length && (VB = VB.concat(dB));
        let yB = this.gutter.config.lineMarker(BB, TB, VB);
        yB && VB.unshift(yB);
        let pB = this.gutter;
        (0 != VB.length || pB.config.renderEmptyElements) && this.addElement(BB, TB, VB)
      }
      widget(BB, TB) {
        let dB = this.gutter.config.widgetMarker(BB, TB.widget, TB),
          VB = dB ? [dB] : null;
        for (let yB of BB.state.facet(gl)) {
          let dB = yB(BB, TB.widget, TB);
          dB && (VB || (VB = [])).push(dB)
        }
        VB && this.addElement(BB, TB, VB)
      }
      finish() {
        let BB = this.gutter;
        for (; BB.elements.length > this.i;) {
          let TB = BB.elements.pop();
          BB.dom.removeChild(TB.dom), TB.destroy()
        }
      }
    }
    class ml {
      constructor(BB, TB) {
        this.view = BB, this.config = TB, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let dB in TB.domEventHandlers) this.dom.addEventListener(dB, (VB => {
          let yB, pB = VB.target;
          if (pB != this.dom && this.dom.contains(pB)) {
            for (; pB.parentNode != this.dom;) pB = pB.parentNode;
            let BB = pB.getBoundingClientRect();
            yB = (BB.top + BB.bottom) / 2
          } else yB = VB.clientY;
          let lB = BB.lineBlockAtHeight(yB - BB.documentTop);
          TB.domEventHandlers[dB](BB, lB, VB) && VB.preventDefault()
        }));
        this.markers = Hl(TB.markers(BB)), TB.initialSpacer && (this.spacer = new il(BB, 0, 0, [TB.initialSpacer(BB)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(BB) {
        let TB = this.markers;
        if (this.markers = Hl(this.config.markers(BB.view)), this.spacer && this.config.updateSpacer) {
          let TB = this.config.updateSpacer(this.spacer.markers[0], BB);
          TB != this.spacer.markers[0] && this.spacer.update(BB.view, 0, 0, [TB])
        }
        let dB = BB.view.viewport;
        return !VB.u.eq(this.markers, TB, dB.from, dB.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(BB)
      }
      destroy() {
        for (let BB of this.elements) BB.destroy()
      }
    }
    class il {
      constructor(BB, TB, dB, VB) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(BB, TB, dB, VB)
      }
      update(BB, TB, dB, VB) {
        this.height != TB && (this.height = TB, this.dom.style.height = TB + "px"), this.above != dB && (this.dom.style.marginTop = (this.above = dB) ? dB + "px" : ""),
          function(BB, TB) {
            if (BB.length != TB.length) return !1;
            for (let dB = 0; dB < BB.length; dB++)
              if (!BB[dB].compare(TB[dB])) return !1;
            return !0
          }(this.markers, VB) || this.setMarkers(BB, VB)
      }
      setMarkers(BB, TB) {
        let dB = "cm-gutterElement",
          VB = this.dom.firstChild;
        for (let yB = 0, pB = 0;;) {
          let lB = pB,
            JB = yB < TB.length ? TB[yB++] : null,
            YB = !1;
          if (JB) {
            let BB = JB.elementClass;
            BB && (dB += " " + BB);
            for (let TB = pB; TB < this.markers.length; TB++)
              if (this.markers[TB].compare(JB)) {
                lB = TB, YB = !0;
                break
              }
          } else lB = this.markers.length;
          for (; pB < lB;) {
            let BB = this.markers[pB++];
            if (BB.toDOM) {
              BB.destroy(VB);
              let TB = VB.nextSibling;
              VB.remove(), VB = TB
            }
          }
          if (!JB) break;
          JB.toDOM && (YB ? VB = VB.nextSibling : this.dom.insertBefore(JB.toDOM(BB), VB)), YB && pB++
        }
        this.dom.className = dB, this.markers = TB
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const Nl = VB.l.define(),
      tl = VB.l.define(),
      fl = VB.l.define({
        combine: BB => (0, VB.P)(BB, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(BB, TB) {
            let dB = Object.assign({}, BB);
            for (let VB in TB) {
              let BB = dB[VB],
                yB = TB[VB];
              dB[VB] = BB ? (TB, dB, VB) => BB(TB, dB, VB) || yB(TB, dB, VB) : yB
            }
            return dB
          }
        })
      });
    class sl extends Jl {
      constructor(BB) {
        super(), this.number = BB
      }
      eq(BB) {
        return this.number == BB.number
      }
      toDOM() {
        return document.createTextNode(this.number)
      }
    }

    function Ml(BB, TB) {
      return BB.state.facet(fl).formatNumber(TB, BB.state)
    }
    const zl = kl.compute([fl], (BB => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: BB => BB.state.facet(Nl),
      lineMarker: (BB, TB, dB) => dB.some((BB => BB.toDOM)) ? null : new sl(Ml(BB, BB.state.doc.lineAt(TB.from).number)),
      widgetMarker: (BB, TB, dB) => {
        for (let VB of BB.state.facet(tl)) {
          let yB = VB(BB, TB, dB);
          if (yB) return yB
        }
        return null
      },
      lineMarkerChange: BB => BB.startState.facet(fl) != BB.state.facet(fl),
      initialSpacer: BB => new sl(Ml(BB, Ul(BB.state.doc.lines))),
      updateSpacer(BB, TB) {
        let dB = Ml(TB.view, Ul(TB.view.state.doc.lines));
        return dB == BB.number ? BB : new sl(dB)
      },
      domEventHandlers: BB.facet(fl).domEventHandlers,
      side: "before"
    })));

    function wl() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [fl.of(BB), Dl(), zl]
    }

    function Ul(BB) {
      let TB = 9;
      for (; TB < BB;) TB = 10 * TB + 9;
      return TB
    }
    const Fl = new class extends Jl {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      Kl = Yl.compute(["selection"], (BB => {
        let TB = [],
          dB = -1;
        for (let VB of BB.selection.ek) {
          let yB = BB.doc.lineAt(VB.head).from;
          yB > dB && (dB = yB, TB.push(Fl.range(yB)))
        }
        return VB.u.of(TB)
      }));

    function rl() {
      return Kl
    }
  },
  40064: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => VB,
      f: () => OB,
      i: () => lB,
      j: () => oB,
      k: () => gB,
      m: () => IB,
      q: () => SB,
      r: () => cB,
      s: () => DB
    });
    const VB = 1024;
    let yB = 0;
    class pB {
      constructor(BB, TB) {
        this.from = BB, this.to = TB
      }
    }
    class lB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = yB++, this.perNode = !!BB.perNode, this.deserialize = BB.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = BB.combine || null
      }
      add(BB) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof BB && (BB = gB.match(BB)), TB => {
          let dB = BB(TB);
          return void 0 === dB ? null : [this, dB]
        }
      }
    }
    lB.closedBy = new lB({
      deserialize: BB => BB.split(" ")
    }), lB.openedBy = new lB({
      deserialize: BB => BB.split(" ")
    }), lB.group = new lB({
      deserialize: BB => BB.split(" ")
    }), lB.isolate = new lB({
      deserialize: BB => {
        if (BB && "rtl" != BB && "ltr" != BB && "auto" != BB) throw new RangeError("Invalid value for isolate: " + BB);
        return BB || "auto"
      }
    }), lB.contextHash = new lB({
      perNode: !0
    }), lB.lookAhead = new lB({
      perNode: !0
    }), lB.mounted = new lB({
      perNode: !0
    });
    class JB {
      constructor(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = BB, this.overlay = TB, this.parser = dB, this.bracketed = VB
      }
      static get(BB) {
        return BB && BB.props && BB.props[lB.mounted.id]
      }
    }
    const YB = Object.create(null);
    class gB {
      constructor(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = BB, this.props = TB, this.id = dB, this.flags = VB
      }
      static define(BB) {
        let TB = BB.props && BB.props.length ? Object.create(null) : YB,
          dB = (BB.top ? 1 : 0) | (BB.skipped ? 2 : 0) | (BB.error ? 4 : 0) | (null == BB.name ? 8 : 0),
          VB = new gB(BB.name || "", TB, BB.id, dB);
        if (BB.props)
          for (let yB of BB.props)
            if (Array.isArray(yB) || (yB = yB(VB)), yB) {
              if (yB[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              TB[yB[0].id] = yB[1]
            } return VB
      }
      prop(BB) {
        return this.props[BB.id]
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
      is(BB) {
        if ("string" == typeof BB) {
          if (this.name == BB) return !0;
          let TB = this.prop(lB.group);
          return !!TB && TB.indexOf(BB) > -1
        }
        return this.id == BB
      }
      static match(BB) {
        let TB = Object.create(null);
        for (let dB in BB)
          for (let VB of dB.split(" ")) TB[VB] = BB[dB];
        return BB => {
          for (let dB = BB.prop(lB.group), VB = -1; VB < (dB ? dB.length : 0); VB++) {
            let yB = TB[VB < 0 ? BB.name : dB[VB]];
            if (yB) return yB
          }
        }
      }
    }
    gB.none = new gB("", Object.create(null), 0, 8);
    class oB {
      constructor(BB) {
        this.types = BB;
        for (let TB = 0; TB < BB.length; TB++)
          if (BB[TB].id != TB) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let BB = [];
        for (var TB = arguments.length, dB = new Array(TB), VB = 0; VB < TB; VB++) dB[VB] = arguments[VB];
        for (let yB of this.types) {
          let TB = null;
          for (let BB of dB) {
            let dB = BB(yB);
            if (dB) {
              TB || (TB = Object.assign({}, yB.props));
              let BB = dB[1],
                VB = dB[0];
              VB.combine && VB.id in TB && (BB = VB.combine(TB[VB.id], BB)), TB[VB.id] = BB
            }
          }
          BB.push(TB ? new gB(yB.name, TB, yB.id, yB.flags) : yB)
        }
        return new oB(BB)
      }
    }
    const kB = new WeakMap,
      LB = new WeakMap;
    var OB;
    ! function(BB) {
      BB[BB.ExcludeBuffers = 1] = "ExcludeBuffers", BB[BB.IncludeAnonymous = 2] = "IncludeAnonymous", BB[BB.IgnoreMounts = 4] = "IgnoreMounts", BB[BB.IgnoreOverlays = 8] = "IgnoreOverlays", BB[BB.EnterBracketed = 16] = "EnterBracketed"
    }(OB || (OB = {}));
    class DB {
      constructor(BB, TB, dB, VB, yB) {
        if (this.type = BB, this.children = TB, this.positions = dB, this.length = VB, this.props = null, yB && yB.length) {
          this.props = Object.create(null);
          for (let [BB, TB] of yB) this.props["number" == typeof BB ? BB : BB.id] = TB
        }
      }
      toString() {
        let BB = JB.get(this);
        if (BB && !BB.overlay) return BB.tree.toString();
        let TB = "";
        for (let dB of this.children) {
          let BB = dB.toString();
          BB && (TB && (TB += ","), TB += BB)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (TB.length ? "(" + TB + ")" : "") : TB
      }
      cursor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new wB(this.topNode, BB)
      }
      cursorAt(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          dB = kB.get(this) || this.topNode,
          VB = new wB(dB);
        return VB.moveTo(BB, TB), kB.set(this, VB._tree), VB
      }
      get topNode() {
        return new iB(this, 0, 0, null)
      }
      resolve(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          dB = vB(kB.get(this) || this.topNode, BB, TB, !1);
        return kB.set(this, dB), dB
      }
      resolveInner(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          dB = vB(LB.get(this) || this.topNode, BB, TB, !0);
        return LB.set(this, dB), dB
      }
      resolveStack(BB) {
        return function(BB, TB, dB) {
          let VB = BB.resolveInner(TB, dB),
            yB = null;
          for (let pB = VB instanceof iB ? VB : VB.context.parent; pB; pB = pB.parent)
            if (pB.index < 0) {
              let BB = pB.parent;
              (yB || (yB = [VB])).push(BB.resolve(TB, dB)), pB = BB
            } else {
              let BB = JB.get(pB.tree);
              if (BB && BB.overlay && BB.overlay[0].from <= TB && BB.overlay[BB.overlay.length - 1].to >= TB) {
                let lB = new iB(BB.tree, BB.overlay[0].from + pB.from, -1, pB);
                (yB || (yB = [VB])).push(vB(lB, TB, dB, !1))
              }
            } return yB ? MB(yB) : VB
        }(this, BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(BB) {
        let {
          enter: TB,
          lD: dB,
          from: VB = 0,
          to: yB = this.length
        } = BB, pB = BB.mode || 0, lB = (pB & OB.IncludeAnonymous) > 0;
        for (let JB = this.cursor(pB | OB.IncludeAnonymous);;) {
          let BB = !1;
          if (JB.from <= yB && JB.to >= VB && (!lB && JB.type.isAnonymous || !1 !== TB(JB))) {
            if (JB.firstChild()) continue;
            BB = !0
          }
          for (; BB && dB && (lB || !JB.type.isAnonymous) && dB(JB), !JB.nextSibling();) {
            if (!JB.parent()) return;
            BB = !0
          }
        }
      }
      prop(BB) {
        return BB.perNode ? this.props ? this.props[BB.id] : void 0 : this.type.prop(BB)
      }
      get propValues() {
        let BB = [];
        if (this.props)
          for (let TB in this.props) BB.push([+TB, this.props[TB]]);
        return BB
      }
      balance() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : rB(gB.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((BB, TB, dB) => new DB(this.type, BB, TB, dB, this.propValues)), BB.makeTree || ((BB, TB, dB) => new DB(gB.none, BB, TB, dB)))
      }
      static build(BB) {
        return function(BB) {
          var TB;
          let {
            buffer: dB,
            nodeSet: yB,
            maxBufferLength: pB = VB,
            reused: JB = [],
            minRepeatType: YB = yB.types.length
          } = BB, gB = Array.isArray(dB) ? new uB(dB, dB.length) : dB, oB = yB.types, kB = 0, LB = 0;

          function OB(BB, TB, dB, VB, lB, DB) {
            let {
              id: uB,
              start: fB,
              end: sB,
              size: MB
            } = gB, zB = LB, wB = kB;
            if (MB < 0) {
              if (gB.next(), -1 == MB) {
                let TB = JB[uB];
                return dB.push(TB), void VB.push(fB - BB)
              }
              if (-3 == MB) return void(kB = uB);
              if (-4 == MB) return void(LB = uB);
              throw new RangeError(`Unrecognized record size: ${MB}`)
            }
            let UB, FB, KB = oB[uB],
              IB = fB - BB;
            if (sB - fB <= pB && (FB = NB(gB.pos - TB, lB))) {
              let TB = new Uint16Array(FB.size - FB.skip),
                dB = gB.pos - FB.size,
                VB = TB.length;
              for (; gB.pos > dB;) VB = tB(FB.start, TB, VB);
              UB = new HB(TB, sB - FB.start, yB), IB = FB.start - BB
            } else {
              let BB = gB.pos - MB;
              gB.next();
              let TB = [],
                dB = [],
                VB = uB >= YB ? uB : -1,
                yB = 0,
                lB = sB;
              for (; gB.pos > BB;) VB >= 0 && gB.id == VB && gB.size >= 0 ? (gB.end <= lB - pB && (mB(TB, dB, fB, yB, gB.end, lB, VB, zB, wB), yB = TB.length, lB = gB.end), gB.next()) : DB > 2500 ? EB(fB, BB, TB, dB) : OB(fB, BB, TB, dB, VB, DB + 1);
              if (VB >= 0 && yB > 0 && yB < TB.length && mB(TB, dB, fB, yB, fB, lB, VB, zB, wB), TB.reverse(), dB.reverse(), VB > -1 && yB > 0) {
                let BB = vB(KB, wB);
                UB = rB(KB, TB, dB, 0, TB.length, 0, sB - fB, BB, BB)
              } else UB = iB(KB, TB, dB, sB - fB, zB - sB, wB)
            }
            dB.push(UB), VB.push(IB)
          }

          function EB(BB, TB, dB, VB) {
            let lB = [],
              JB = 0,
              YB = -1;
            for (; gB.pos > TB;) {
              let {
                id: BB,
                start: TB,
                end: dB,
                size: VB
              } = gB;
              if (VB > 4) gB.next();
              else {
                if (YB > -1 && TB < YB) break;
                YB < 0 && (YB = dB - pB), lB.push(BB, TB, dB), JB++, gB.next()
              }
            }
            if (JB) {
              let TB = new Uint16Array(4 * JB),
                pB = lB[lB.length - 2];
              for (let BB = lB.length - 3, dB = 0; BB >= 0; BB -= 3) TB[dB++] = lB[BB], TB[dB++] = lB[BB + 1] - pB, TB[dB++] = lB[BB + 2] - pB, TB[dB++] = dB;
              dB.push(new HB(TB, lB[2] - pB, yB)), VB.push(pB - BB)
            }
          }

          function vB(BB, TB) {
            return (dB, VB, yB) => {
              let pB, JB, YB = 0,
                gB = dB.length - 1;
              if (gB >= 0 && (pB = dB[gB]) instanceof DB) {
                if (!gB && pB.type == BB && pB.length == yB) return pB;
                (JB = pB.prop(lB.lookAhead)) && (YB = VB[gB] + pB.length + JB)
              }
              return iB(BB, dB, VB, yB, YB, TB)
            }
          }

          function mB(BB, TB, dB, VB, pB, lB, JB, YB, gB) {
            let oB = [],
              kB = [];
            for (; BB.length > VB;) oB.push(BB.pop()), kB.push(TB.pop() + dB - pB);
            BB.push(iB(yB.types[JB], oB, kB, lB - pB, YB - lB, gB)), TB.push(pB - dB)
          }

          function iB(BB, TB, dB, VB, yB, pB, JB) {
            if (pB) {
              let BB = [lB.contextHash, pB];
              JB = JB ? [BB].concat(JB) : [BB]
            }
            if (yB > 25) {
              let BB = [lB.lookAhead, yB];
              JB = JB ? [BB].concat(JB) : [BB]
            }
            return new DB(BB, TB, dB, VB, JB)
          }

          function NB(BB, TB) {
            let dB = gB.fork(),
              VB = 0,
              yB = 0,
              lB = 0,
              JB = dB.end - pB,
              oB = {
                size: 0,
                start: 0,
                skip: 0
              };
            BB: for (let pB = dB.pos - BB; dB.pos > pB;) {
              let BB = dB.size;
              if (dB.id == TB && BB >= 0) {
                oB.size = VB, oB.start = yB, oB.skip = lB, lB += 4, VB += 4, dB.next();
                continue
              }
              let gB = dB.pos - BB;
              if (BB < 0 || gB < pB || dB.start < JB) break;
              let kB = dB.id >= YB ? 4 : 0,
                LB = dB.start;
              for (dB.next(); dB.pos > gB;) {
                if (dB.size < 0) {
                  if (-3 != dB.size && -4 != dB.size) break BB;
                  kB += 4
                } else dB.id >= YB && (kB += 4);
                dB.next()
              }
              yB = LB, VB += BB, lB += kB
            }
            return (TB < 0 || VB == BB) && (oB.size = VB, oB.start = yB, oB.skip = lB), oB.size > 4 ? oB : void 0
          }

          function tB(BB, TB, dB) {
            let {
              id: VB,
              start: yB,
              end: pB,
              size: lB
            } = gB;
            if (gB.next(), lB >= 0 && VB < YB) {
              let JB = dB;
              if (lB > 4) {
                let VB = gB.pos - (lB - 4);
                for (; gB.pos > VB;) dB = tB(BB, TB, dB)
              }
              TB[--dB] = JB, TB[--dB] = pB - BB, TB[--dB] = yB - BB, TB[--dB] = VB
            } else - 3 == lB ? kB = VB : -4 == lB && (LB = VB);
            return dB
          }
          let fB = [],
            sB = [];
          for (; gB.pos > 0;) OB(BB.start || 0, BB.bufferStart || 0, fB, sB, -1, 0);
          let MB = null !== (TB = BB.length) && void 0 !== TB ? TB : fB.length ? sB[0] + fB[0].length : 0;
          return new DB(oB[BB.topID], fB.reverse(), sB.reverse(), MB)
        }(BB)
      }
    }
    DB.empty = new DB(gB.none, [], [], 0);
    class uB {
      constructor(BB, TB) {
        this.buffer = BB, this.index = TB
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
        return new uB(this.buffer, this.index)
      }
    }
    class HB {
      constructor(BB, TB, dB) {
        this.buffer = BB, this.length = TB, this.set = dB
      }
      get type() {
        return gB.none
      }
      toString() {
        let BB = [];
        for (let TB = 0; TB < this.buffer.length;) BB.push(this.childString(TB)), TB = this.buffer[TB + 3];
        return BB.join(",")
      }
      childString(BB) {
        let TB = this.buffer[BB],
          dB = this.buffer[BB + 3],
          VB = this.set.types[TB],
          yB = VB.name;
        if (/\W/.test(yB) && !VB.isError && (yB = JSON.stringify(yB)), dB == (BB += 4)) return yB;
        let pB = [];
        for (; BB < dB;) pB.push(this.childString(BB)), BB = this.buffer[BB + 3];
        return yB + "(" + pB.join(",") + ")"
      }
      findChild(BB, TB, dB, VB, yB) {
        let {
          buffer: pB
        } = this, lB = -1;
        for (let JB = BB; JB != TB && !(EB(yB, VB, pB[JB + 1], pB[JB + 2]) && (lB = JB, dB > 0)); JB = pB[JB + 3]);
        return lB
      }
      slice(BB, TB, dB) {
        let VB = this.buffer,
          yB = new Uint16Array(TB - BB),
          pB = 0;
        for (let lB = BB, JB = 0; lB < TB;) {
          yB[JB++] = VB[lB++], yB[JB++] = VB[lB++] - dB;
          let TB = yB[JB++] = VB[lB++] - dB;
          yB[JB++] = VB[lB++] - BB, pB = Math.max(pB, TB)
        }
        return new HB(yB, pB, this.set)
      }
    }

    function EB(BB, TB, dB, VB) {
      switch (BB) {
        case -2:
          return dB < TB;
        case -1:
          return VB >= TB && dB < TB;
        case 0:
          return dB < TB && VB > TB;
        case 1:
          return dB <= TB && VB > TB;
        case 2:
          return VB > TB;
        case 4:
          return !0
      }
    }

    function vB(BB, TB, dB, VB) {
      for (var yB; BB.from == BB.to || (dB < 1 ? BB.from >= TB : BB.from > TB) || (dB > -1 ? BB.to <= TB : BB.to < TB);) {
        let TB = !VB && BB instanceof iB && BB.index < 0 ? null : BB.parent;
        if (!TB) return BB;
        BB = TB
      }
      let pB = VB ? 0 : OB.IgnoreOverlays;
      if (VB)
        for (let lB = BB, JB = lB.parent; JB; lB = JB, JB = lB.parent) lB instanceof iB && lB.index < 0 && (null === (yB = JB.enter(TB, dB, pB)) || void 0 === yB ? void 0 : yB.from) != lB.from && (BB = JB);
      for (;;) {
        let VB = BB.enter(TB, dB, pB);
        if (!VB) return BB;
        BB = VB
      }
    }
    class mB {
      cursor() {
        return new wB(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(BB) {
        let TB = NB(this, BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return TB.length ? TB[0] : null
      }
      getChildren(BB) {
        return NB(this, BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(BB) {
        return vB(this, BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(BB) {
        return vB(this, BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(BB) {
        return tB(this.parent, BB)
      }
      enterUnfinishedNodesBefore(BB) {
        let TB = this.childBefore(BB),
          dB = this;
        for (; TB;) {
          let BB = TB.lastChild;
          if (!BB || BB.to != TB.to) break;
          BB.type.isError && BB.from == BB.to ? (dB = TB, TB = BB.prevSibling) : TB = BB
        }
        return dB
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class iB extends mB {
      constructor(BB, TB, dB, VB) {
        super(), this._tree = BB, this.from = TB, this.index = dB, this._parent = VB
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
      nextChild(BB, TB, dB, VB) {
        let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let pB = this;;) {
          for (let {
              children: lB,
              positions: YB
            } = pB._tree, gB = TB > 0 ? lB.length : -1; BB != gB; BB += TB) {
            let gB, oB = lB[BB],
              kB = YB[BB] + pB.from;
            if (yB & OB.EnterBracketed && oB instanceof DB && (gB = JB.get(oB)) && !gB.overlay && gB.bracketed && dB >= kB && dB <= kB + oB.length || EB(VB, dB, kB, kB + oB.length))
              if (oB instanceof HB) {
                if (yB & OB.ExcludeBuffers) continue;
                let lB = oB.findChild(0, oB.buffer.length, TB, dB - kB, VB);
                if (lB > -1) return new sB(new fB(pB, oB, BB, kB), null, lB)
              } else if (yB & OB.IncludeAnonymous || !oB.type.isAnonymous || UB(oB)) {
              let lB;
              if (!(yB & OB.IgnoreMounts) && (lB = JB.get(oB)) && !lB.overlay) return new iB(lB.tree, kB, BB, pB);
              let YB = new iB(oB, kB, BB, pB);
              return yB & OB.IncludeAnonymous || !YB.type.isAnonymous ? YB : YB.nextChild(TB < 0 ? oB.children.length - 1 : 0, TB, dB, VB, yB)
            }
          }
          if (yB & OB.IncludeAnonymous || !pB.type.isAnonymous) return null;
          if (BB = pB.index >= 0 ? pB.index + TB : TB < 0 ? -1 : pB._parent._tree.children.length, pB = pB._parent, !pB) return null
        }
      }
      get firstChild() {
        return this.nextChild(0, 1, 0, 4)
      }
      get lastChild() {
        return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
      }
      childAfter(BB) {
        return this.nextChild(0, 1, BB, 2)
      }
      childBefore(BB) {
        return this.nextChild(this._tree.children.length - 1, -1, BB, -2)
      }
      prop(BB) {
        return this._tree.prop(BB)
      }
      enter(BB, TB) {
        let dB, VB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(VB & OB.IgnoreOverlays) && (dB = JB.get(this._tree)) && dB.overlay) {
          let yB = BB - this.from,
            pB = VB & OB.EnterBracketed && dB.bracketed;
          for (let {
              from: BB,
              to: VB
            }
            of dB.overlay)
            if ((TB > 0 || pB ? BB <= yB : BB < yB) && (TB < 0 || pB ? VB >= yB : VB > yB)) return new iB(dB.tree, dB.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, BB, TB, VB)
      }
      nextSignificantParent() {
        let BB = this;
        for (; BB.type.isAnonymous && BB._parent;) BB = BB._parent;
        return BB
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

    function NB(BB, TB, dB, VB) {
      let yB = BB.cursor(),
        pB = [];
      if (!yB.firstChild()) return pB;
      if (null != dB)
        for (let lB = !1; !lB;)
          if (lB = yB.type.is(dB), !yB.nextSibling()) return pB;
      for (;;) {
        if (null != VB && yB.type.is(VB)) return pB;
        if (yB.type.is(TB) && pB.push(yB.node), !yB.nextSibling()) return null == VB ? pB : []
      }
    }

    function tB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : TB.length - 1;
      for (let VB = BB; dB >= 0; VB = VB.parent) {
        if (!VB) return !1;
        if (!VB.type.isAnonymous) {
          if (TB[dB] && TB[dB] != VB.name) return !1;
          dB--
        }
      }
      return !0
    }
    class fB {
      constructor(BB, TB, dB, VB) {
        this.parent = BB, this.buffer = TB, this.index = dB, this.start = VB
      }
    }
    class sB extends mB {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(BB, TB, dB) {
        super(), this.context = BB, this._parent = TB, this.index = dB, this.type = BB.buffer.set.types[BB.buffer.buffer[dB]]
      }
      child(BB, TB, dB) {
        let {
          buffer: VB
        } = this.context, yB = VB.findChild(this.index + 4, VB.buffer[this.index + 3], BB, TB - this.context.start, dB);
        return yB < 0 ? null : new sB(this.context, this, yB)
      }
      get firstChild() {
        return this.child(1, 0, 4)
      }
      get lastChild() {
        return this.child(-1, 0, 4)
      }
      childAfter(BB) {
        return this.child(1, BB, 2)
      }
      childBefore(BB) {
        return this.child(-1, BB, -2)
      }
      prop(BB) {
        return this.type.prop(BB)
      }
      enter(BB, TB) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & OB.ExcludeBuffers) return null;
        let {
          buffer: dB
        } = this.context, VB = dB.findChild(this.index + 4, dB.buffer[this.index + 3], TB > 0 ? 1 : -1, BB - this.context.start, TB);
        return VB < 0 ? null : new sB(this.context, this, VB)
      }
      get parent() {
        return this._parent || this.context.parent.nextSignificantParent()
      }
      externalSibling(BB) {
        return this._parent ? null : this.context.parent.nextChild(this.context.index + BB, BB, 0, 4)
      }
      get nextSibling() {
        let {
          buffer: BB
        } = this.context, TB = BB.buffer[this.index + 3];
        return TB < (this._parent ? BB.buffer[this._parent.index + 3] : BB.buffer.length) ? new sB(this.context, this._parent, TB) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: BB
        } = this.context, TB = this._parent ? this._parent.index + 4 : 0;
        return this.index == TB ? this.externalSibling(-1) : new sB(this.context, this._parent, BB.findChild(TB, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let BB = [],
          TB = [],
          {
            buffer: dB
          } = this.context,
          VB = this.index + 4,
          yB = dB.buffer[this.index + 3];
        if (yB > VB) {
          let pB = dB.buffer[this.index + 1];
          BB.push(dB.slice(VB, yB, pB)), TB.push(0)
        }
        return new DB(this.type, BB, TB, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function MB(BB) {
      if (!BB.length) return null;
      let TB = 0,
        dB = BB[0];
      for (let pB = 1; pB < BB.length; pB++) {
        let VB = BB[pB];
        (VB.from > dB.from || VB.to < dB.to) && (dB = VB, TB = pB)
      }
      let VB = dB instanceof iB && dB.index < 0 ? null : dB.parent,
        yB = BB.slice();
      return VB ? yB[TB] = VB : yB.splice(TB, 1), new zB(yB, dB)
    }
    class zB {
      constructor(BB, TB) {
        this.heads = BB, this.node = TB
      }
      get next() {
        return MB(this.heads)
      }
    }
    class wB {
      get name() {
        return this.type.name
      }
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = TB & ~OB.EnterBracketed, BB instanceof iB) this.yieldNode(BB);
        else {
          this._tree = BB.context.parent, this.buffer = BB.context;
          for (let TB = BB._parent; TB; TB = TB._parent) this.stack.unshift(TB.index);
          this.bufferNode = BB, this.yieldBuf(BB.index)
        }
      }
      yieldNode(BB) {
        return !!BB && (this._tree = BB, this.type = BB.type, this.from = BB.from, this.to = BB.to, !0)
      }
      yieldBuf(BB, TB) {
        this.index = BB;
        let {
          start: dB,
          buffer: VB
        } = this.buffer;
        return this.type = TB || VB.set.types[VB.buffer[BB]], this.from = dB + VB.buffer[BB + 1], this.to = dB + VB.buffer[BB + 2], !0
      }
      yield(BB) {
        return !!BB && (BB instanceof iB ? (this.buffer = null, this.yieldNode(BB)) : (this.buffer = BB.context, this.yieldBuf(BB.index, BB.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(BB, TB, dB) {
        if (!this.buffer) return this.yield(this._tree.nextChild(BB < 0 ? this._tree._tree.children.length - 1 : 0, BB, TB, dB, this.mode));
        let {
          buffer: VB
        } = this.buffer, yB = VB.findChild(this.index + 4, VB.buffer[this.index + 3], BB, TB - this.buffer.start, dB);
        return !(yB < 0) && (this.stack.push(this.index), this.yieldBuf(yB))
      }
      firstChild() {
        return this.enterChild(1, 0, 4)
      }
      lastChild() {
        return this.enterChild(-1, 0, 4)
      }
      childAfter(BB) {
        return this.enterChild(1, BB, 2)
      }
      childBefore(BB) {
        return this.enterChild(-1, BB, -2)
      }
      enter(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(dB & OB.ExcludeBuffers) && this.enterChild(1, BB, TB) : this.yield(this._tree.enter(BB, TB, dB))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & OB.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let BB = this.mode & OB.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(BB)
      }
      sibling(BB) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + BB, BB, 0, 4, this.mode));
        let {
          buffer: TB
        } = this.buffer, dB = this.stack.length - 1;
        if (BB < 0) {
          let BB = dB < 0 ? 0 : this.stack[dB] + 4;
          if (this.index != BB) return this.yieldBuf(TB.findChild(BB, this.index, -1, 0, 4))
        } else {
          let BB = TB.buffer[this.index + 3];
          if (BB < (dB < 0 ? TB.buffer.length : TB.buffer[this.stack[dB] + 3])) return this.yieldBuf(BB)
        }
        return dB < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + BB, BB, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(BB) {
        let TB, dB, {
          buffer: VB
        } = this;
        if (VB) {
          if (BB > 0) {
            if (this.index < VB.buffer.buffer.length) return !1
          } else
            for (let BB = 0; BB < this.index; BB++)
              if (VB.buffer.buffer[BB + 3] < this.index) return !1;
          ({
            index: TB,
            parent: dB
          } = VB)
        } else({
          index: TB,
          _parent: dB
        } = this._tree);
        for (; dB;
          ({
            index: TB,
            _parent: dB
          } = dB))
          if (TB > -1)
            for (let VB = TB + BB, yB = BB < 0 ? -1 : dB._tree.children.length; VB != yB; VB += BB) {
              let BB = dB._tree.children[VB];
              if (this.mode & OB.IncludeAnonymous || BB instanceof HB || !BB.type.isAnonymous || UB(BB)) return !1
            }
        return !0
      }
      move(BB, TB) {
        if (TB && this.enterChild(BB, 0, 4)) return !0;
        for (;;) {
          if (this.sibling(BB)) return !0;
          if (this.atLastNode(BB) || !this.parent()) return !1
        }
      }
      next() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(1, BB)
      }
      prev() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(-1, BB)
      }
      moveTo(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (TB < 1 ? this.from >= BB : this.from > BB) || (TB > -1 ? this.to <= BB : this.to < BB)) && this.parent(););
        for (; this.enterChild(1, BB, TB););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let BB = this.bufferNode,
          TB = null,
          dB = 0;
        if (BB && BB.context == this.buffer) BB: for (let VB = this.index, yB = this.stack.length; yB >= 0;) {
          for (let pB = BB; pB; pB = pB._parent)
            if (pB.index == VB) {
              if (VB == this.index) return pB;
              TB = pB, dB = yB + 1;
              break BB
            } VB = this.stack[--yB]
        }
        for (let VB = dB; VB < this.stack.length; VB++) TB = new sB(this.buffer, TB, this.stack[VB]);
        return this.bufferNode = new sB(this.buffer, TB, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(BB, TB) {
        for (let dB = 0;;) {
          let VB = !1;
          if (this.type.isAnonymous || !1 !== BB(this)) {
            if (this.firstChild()) {
              dB++;
              continue
            }
            this.type.isAnonymous || (VB = !0)
          }
          for (;;) {
            if (VB && TB && TB(this), VB = this.type.isAnonymous, !dB) return;
            if (this.nextSibling()) break;
            this.parent(), dB--, VB = !0
          }
        }
      }
      matchContext(BB) {
        if (!this.buffer) return tB(this.node.parent, BB);
        let {
          buffer: TB
        } = this.buffer, {
          types: dB
        } = TB.set;
        for (let VB = BB.length - 1, yB = this.stack.length - 1; VB >= 0; yB--) {
          if (yB < 0) return tB(this._tree, BB, VB);
          let pB = dB[TB.buffer[this.stack[yB]]];
          if (!pB.isAnonymous) {
            if (BB[VB] && BB[VB] != pB.name) return !1;
            VB--
          }
        }
        return !0
      }
    }

    function UB(BB) {
      return BB.children.some((BB => BB instanceof HB || !BB.type.isAnonymous || UB(BB)))
    }
    const FB = new WeakMap;

    function KB(BB, TB) {
      if (!BB.isAnonymous || TB instanceof HB || TB.type != BB) return 1;
      let dB = FB.get(TB);
      if (null == dB) {
        dB = 1;
        for (let VB of TB.children) {
          if (VB.type != BB || !(VB instanceof DB)) {
            dB = 1;
            break
          }
          dB += KB(BB, VB)
        }
        FB.set(TB, dB)
      }
      return dB
    }

    function rB(BB, TB, dB, VB, yB, pB, lB, JB, YB) {
      let gB = 0;
      for (let OB = VB; OB < yB; OB++) gB += KB(BB, TB[OB]);
      let oB = Math.ceil(1.5 * gB / 8),
        kB = [],
        LB = [];
      return function TB(dB, VB, yB, lB, JB) {
        for (let gB = yB; gB < lB;) {
          let yB = gB,
            OB = VB[gB],
            DB = KB(BB, dB[gB]);
          for (gB++; gB < lB; gB++) {
            let TB = KB(BB, dB[gB]);
            if (DB + TB >= oB) break;
            DB += TB
          }
          if (gB == yB + 1) {
            if (DB > oB) {
              let BB = dB[yB];
              TB(BB.children, BB.positions, 0, BB.children.length, VB[yB] + JB);
              continue
            }
            kB.push(dB[yB])
          } else {
            let TB = VB[gB - 1] + dB[gB - 1].length - OB;
            kB.push(rB(BB, dB, VB, yB, gB, OB, TB, null, YB))
          }
          LB.push(OB + JB - pB)
        }
      }(TB, dB, VB, yB, 0), (JB || YB)(kB, LB, lB)
    }
    class IB {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(BB, TB, dB) {
        let VB = this.map.get(BB);
        VB || this.map.set(BB, VB = new Map), VB.set(TB, dB)
      }
      getBuffer(BB, TB) {
        let dB = this.map.get(BB);
        return dB && dB.get(TB)
      }
      set(BB, TB) {
        BB instanceof sB ? this.setBuffer(BB.context.buffer, BB.index, TB) : BB instanceof iB && this.map.set(BB.tree, TB)
      }
      get(BB) {
        return BB instanceof sB ? this.getBuffer(BB.context.buffer, BB.index) : BB instanceof iB ? this.map.get(BB.tree) : void 0
      }
      cursorSet(BB, TB) {
        BB.buffer ? this.setBuffer(BB.buffer.buffer, BB.index, TB) : this.map.set(BB.tree, TB)
      }
      cursorGet(BB) {
        return BB.buffer ? this.getBuffer(BB.buffer.buffer, BB.index) : this.map.get(BB.tree)
      }
    }
    class cB {
      constructor(BB, TB, dB, VB) {
        let yB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          pB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = BB, this.to = TB, this.tree = dB, this.offset = VB, this.open = (yB ? 1 : 0) | (pB ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          VB = [new cB(0, BB.length, BB, 0, !1, dB)];
        for (let yB of TB) yB.to > BB.length && VB.push(yB);
        return VB
      }
      static applyChanges(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!TB.length) return BB;
        let VB = [],
          yB = 1,
          pB = BB.length ? BB[0] : null;
        for (let lB = 0, JB = 0, YB = 0;; lB++) {
          let gB = lB < TB.length ? TB[lB] : null,
            oB = gB ? gB.fromA : 1e9;
          if (oB - JB >= dB)
            for (; pB && pB.from < oB;) {
              let TB = pB;
              if (JB >= TB.from || oB <= TB.to || YB) {
                let BB = Math.max(TB.from, JB) - YB,
                  dB = Math.min(TB.to, oB) - YB;
                TB = BB >= dB ? null : new cB(BB, dB, TB.tree, TB.offset + YB, lB > 0, !!gB)
              }
              if (TB && VB.push(TB), pB.to > oB) break;
              pB = yB < BB.length ? BB[yB++] : null
            }
          if (!gB) break;
          JB = gB.toA, YB = gB.toA - gB.toB
        }
        return VB
      }
    }
    class SB {
      startParse(BB, TB, dB) {
        return "string" == typeof BB && (BB = new PB(BB)), dB = dB ? dB.length ? dB.map((BB => new pB(BB.from, BB.to))) : [new pB(0, 0)] : [new pB(0, BB.length)], this.createParse(BB, TB || [], dB)
      }
      parse(BB, TB, dB) {
        let VB = this.startParse(BB, TB, dB);
        for (;;) {
          let BB = VB.advance();
          if (BB) return BB
        }
      }
    }
    class PB {
      constructor(BB) {
        this.string = BB
      }
      get length() {
        return this.string.length
      }
      chunk(BB) {
        return this.string.slice(BB)
      }
      get lineChunks() {
        return !1
      }
      read(BB, TB) {
        return this.string.slice(BB, TB)
      }
    }
    new lB({
      perNode: !0
    })
  },
  40069: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => LB,
      f: () => YB,
      g: () => kB,
      h: () => FB
    });
    var VB = dB(40064);
    let yB = 0;
    class pB {
      constructor(BB, TB, dB, VB) {
        this.name = BB, this.set = TB, this.base = dB, this.modified = VB, this.id = yB++
      }
      toString() {
        let {
          name: BB
        } = this;
        for (let TB of this.modified) TB.name && (BB = `${TB.name}(${BB})`);
        return BB
      }
      static define(BB, TB) {
        let dB = "string" == typeof BB ? BB : "?";
        if (BB instanceof pB && (TB = BB), null === TB || void 0 === TB ? void 0 : TB.base) throw new Error("Can not derive from a modified tag");
        let VB = new pB(dB, [], null, []);
        if (VB.set.push(VB), TB)
          for (let yB of TB.set) VB.set.push(yB);
        return VB
      }
      static defineModifier(BB) {
        let TB = new JB(BB);
        return BB => BB.modified.indexOf(TB) > -1 ? BB : JB.get(BB.base || BB, BB.modified.concat(TB).sort(((BB, TB) => BB.id - TB.id)))
      }
    }
    let lB = 0;
    class JB {
      constructor(BB) {
        this.name = BB, this.instances = [], this.id = lB++
      }
      static get(BB, TB) {
        if (!TB.length) return BB;
        let dB = TB[0].instances.find((dB => {
          return dB.base == BB && (VB = TB, yB = dB.modified, VB.length == yB.length && VB.every(((BB, TB) => BB == yB[TB])));
          var VB, yB
        }));
        if (dB) return dB;
        let VB = [],
          yB = new pB(BB.name, VB, BB, TB);
        for (let pB of TB) pB.instances.push(yB);
        let lB = function(BB) {
          let TB = [
            []
          ];
          for (let dB = 0; dB < BB.length; dB++)
            for (let VB = 0, yB = TB.length; VB < yB; VB++) TB.push(TB[VB].concat(BB[dB]));
          return TB.sort(((BB, TB) => TB.length - BB.length))
        }(TB);
        for (let pB of BB.set)
          if (!pB.modified.length)
            for (let BB of lB) VB.push(JB.get(pB, BB));
        return yB
      }
    }

    function YB(BB) {
      let TB = Object.create(null);
      for (let dB in BB) {
        let VB = BB[dB];
        Array.isArray(VB) || (VB = [VB]);
        for (let BB of dB.split(" "))
          if (BB) {
            let dB = [],
              yB = 2,
              pB = BB;
            for (let TB = 0;;) {
              if ("..." == pB && TB > 0 && TB + 3 == BB.length) {
                yB = 1;
                break
              }
              let VB = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(pB);
              if (!VB) throw new RangeError("Invalid path: " + BB);
              if (dB.push("*" == VB[0] ? "" : '"' == VB[0][0] ? JSON.parse(VB[0]) : VB[0]), TB += VB[0].length, TB == BB.length) break;
              let lB = BB[TB++];
              if (TB == BB.length && "!" == lB) {
                yB = 0;
                break
              }
              if ("/" != lB) throw new RangeError("Invalid path: " + BB);
              pB = BB.slice(TB)
            }
            let lB = dB.length - 1,
              JB = dB[lB];
            if (!JB) throw new RangeError("Invalid path: " + BB);
            let YB = new oB(VB, yB, lB > 0 ? dB.slice(0, lB) : null);
            TB[JB] = YB.sort(TB[JB])
          }
      }
      return gB.add(TB)
    }
    const gB = new VB.i({
      combine(BB, TB) {
        let dB, VB, yB;
        for (; BB || TB;) {
          if (!BB || TB && BB.depth >= TB.depth ? (yB = TB, TB = TB.next) : (yB = BB, BB = BB.next), dB && dB.mode == yB.mode && !yB.context && !dB.context) continue;
          let pB = new oB(yB.tags, yB.mode, yB.context);
          dB ? dB.next = pB : VB = pB, dB = pB
        }
        return VB
      }
    });
    class oB {
      constructor(BB, TB, dB, VB) {
        this.tags = BB, this.mode = TB, this.context = dB, this.next = VB
      }
      get opaque() {
        return 0 == this.mode
      }
      get inherit() {
        return 1 == this.mode
      }
      sort(BB) {
        return !BB || BB.depth < this.depth ? (this.next = BB, this) : (BB.next = this.sort(BB.next), BB)
      }
      get depth() {
        return this.context ? this.context.length : 0
      }
    }

    function kB(BB, TB) {
      let dB = Object.create(null);
      for (let pB of BB)
        if (Array.isArray(pB.tag))
          for (let BB of pB.tag) dB[BB.id] = pB.class;
        else dB[pB.tag.id] = pB.class;
      let {
        scope: VB,
        all: yB = null
      } = TB || {};
      return {
        style: BB => {
          let TB = yB;
          for (let VB of BB)
            for (let BB of VB.set) {
              let VB = dB[BB.id];
              if (VB) {
                TB = TB ? TB + " " + VB : VB;
                break
              }
            }
          return TB
        },
        scope: VB
      }
    }

    function LB(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : BB.length,
        pB = new OB(VB, Array.isArray(TB) ? TB : [TB], dB);
      pB.highlightRange(BB.cursor(), VB, yB, "", pB.highlighters), pB.flush(yB)
    }
    oB.empty = new oB([], 2, null);
    class OB {
      constructor(BB, TB, dB) {
        this.at = BB, this.highlighters = TB, this.span = dB, this.class = ""
      }
      startSpan(BB, TB) {
        TB != this.class && (this.flush(BB), BB > this.at && (this.at = BB), this.class = TB)
      }
      flush(BB) {
        BB > this.at && this.class && this.span(this.at, BB, this.class)
      }
      highlightRange(BB, TB, dB, yB, pB) {
        let {
          type: lB,
          from: JB,
          to: YB
        } = BB;
        if (JB >= dB || YB <= TB) return;
        lB.isTop && (pB = this.highlighters.filter((BB => !BB.scope || BB.scope(lB))));
        let kB = yB,
          LB = function(BB) {
            let TB = BB.type.prop(gB);
            for (; TB && TB.context && !BB.matchContext(TB.context);) TB = TB.next;
            return TB || null
          }(BB) || oB.empty,
          OB = function(BB, TB) {
            let dB = null;
            for (let VB of BB) {
              let BB = VB.style(TB);
              BB && (dB = dB ? dB + " " + BB : BB)
            }
            return dB
          }(pB, LB.tags);
        if (OB && (kB && (kB += " "), kB += OB, 1 == LB.mode && (yB += (yB ? " " : "") + OB)), this.startSpan(Math.max(TB, JB), kB), LB.opaque) return;
        let DB = BB.tree && BB.tree.prop(VB.i.mounted);
        if (DB && DB.overlay) {
          let VB = BB.node.enter(DB.overlay[0].from + JB, 1),
            lB = this.highlighters.filter((BB => !BB.scope || BB.scope(DB.tree.type))),
            gB = BB.firstChild();
          for (let oB = 0, LB = JB;; oB++) {
            let OB = oB < DB.overlay.length ? DB.overlay[oB] : null,
              uB = OB ? OB.from + JB : YB,
              HB = Math.max(TB, LB),
              EB = Math.min(dB, uB);
            if (HB < EB && gB)
              for (; BB.from < EB && (this.highlightRange(BB, HB, EB, yB, pB), this.startSpan(Math.min(EB, BB.to), kB), !(BB.to >= uB) && BB.nextSibling()););
            if (!OB || uB > dB) break;
            LB = OB.to + JB, LB > TB && (this.highlightRange(VB.cursor(), Math.max(TB, OB.from + JB), Math.min(dB, LB), "", lB), this.startSpan(Math.min(dB, LB), kB))
          }
          gB && BB.parent()
        } else if (BB.firstChild()) {
          DB && (yB = "");
          do {
            if (!(BB.to <= TB)) {
              if (BB.from >= dB) break;
              this.highlightRange(BB, TB, dB, yB, pB), this.startSpan(Math.min(dB, BB.to), kB)
            }
          } while (BB.nextSibling());
          BB.parent()
        }
      }
    }
    const DB = pB.define,
      uB = DB(),
      HB = DB(),
      EB = DB(HB),
      vB = DB(HB),
      mB = DB(),
      iB = DB(mB),
      NB = DB(mB),
      tB = DB(),
      fB = DB(tB),
      sB = DB(),
      MB = DB(),
      zB = DB(),
      wB = DB(zB),
      UB = DB(),
      FB = {
        comment: uB,
        lineComment: DB(uB),
        blockComment: DB(uB),
        docComment: DB(uB),
        name: HB,
        variableName: DB(HB),
        typeName: EB,
        tagName: DB(EB),
        propertyName: vB,
        attributeName: DB(vB),
        className: DB(HB),
        labelName: DB(HB),
        namespace: DB(HB),
        macroName: DB(HB),
        literal: mB,
        string: iB,
        docString: DB(iB),
        character: DB(iB),
        attributeValue: DB(iB),
        number: NB,
        integer: DB(NB),
        float: DB(NB),
        bool: DB(mB),
        regexp: DB(mB),
        escape: DB(mB),
        color: DB(mB),
        url: DB(mB),
        keyword: sB,
        self: DB(sB),
        null: DB(sB),
        atom: DB(sB),
        unit: DB(sB),
        modifier: DB(sB),
        operatorKeyword: DB(sB),
        controlKeyword: DB(sB),
        definitionKeyword: DB(sB),
        moduleKeyword: DB(sB),
        operator: MB,
        derefOperator: DB(MB),
        arithmeticOperator: DB(MB),
        logicOperator: DB(MB),
        bitwiseOperator: DB(MB),
        compareOperator: DB(MB),
        updateOperator: DB(MB),
        definitionOperator: DB(MB),
        typeOperator: DB(MB),
        controlOperator: DB(MB),
        punctuation: zB,
        separator: DB(zB),
        bracket: wB,
        angleBracket: DB(wB),
        squareBracket: DB(wB),
        paren: DB(wB),
        brace: DB(wB),
        content: tB,
        heading: fB,
        heading1: DB(fB),
        heading2: DB(fB),
        heading3: DB(fB),
        heading4: DB(fB),
        heading5: DB(fB),
        heading6: DB(fB),
        contentSeparator: DB(tB),
        list: DB(tB),
        quote: DB(tB),
        emphasis: DB(tB),
        strong: DB(tB),
        link: DB(tB),
        monospace: DB(tB),
        strikethrough: DB(tB),
        inserted: DB(),
        deleted: DB(),
        changed: DB(),
        invalid: DB(),
        meta: UB,
        documentMeta: DB(UB),
        annotation: DB(UB),
        processingInstruction: DB(UB),
        definition: pB.defineModifier("definition"),
        constant: pB.defineModifier("constant"),
        function: pB.defineModifier("function"),
        standard: pB.defineModifier("standard"),
        local: pB.defineModifier("local"),
        special: pB.defineModifier("special")
      };
    for (let KB in FB) {
      let BB = FB[KB];
      BB instanceof pB && (BB.name = KB)
    }
    kB([{
      tag: FB.link,
      class: "tok-link"
    }, {
      tag: FB.heading,
      class: "tok-heading"
    }, {
      tag: FB.emphasis,
      class: "tok-emphasis"
    }, {
      tag: FB.strong,
      class: "tok-strong"
    }, {
      tag: FB.keyword,
      class: "tok-keyword"
    }, {
      tag: FB.atom,
      class: "tok-atom"
    }, {
      tag: FB.bool,
      class: "tok-bool"
    }, {
      tag: FB.url,
      class: "tok-url"
    }, {
      tag: FB.labelName,
      class: "tok-labelName"
    }, {
      tag: FB.inserted,
      class: "tok-inserted"
    }, {
      tag: FB.deleted,
      class: "tok-deleted"
    }, {
      tag: FB.literal,
      class: "tok-literal"
    }, {
      tag: FB.string,
      class: "tok-string"
    }, {
      tag: FB.number,
      class: "tok-number"
    }, {
      tag: [FB.regexp, FB.escape, FB.special(FB.string)],
      class: "tok-string2"
    }, {
      tag: FB.variableName,
      class: "tok-variableName"
    }, {
      tag: FB.local(FB.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: FB.definition(FB.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: FB.special(FB.variableName),
      class: "tok-variableName2"
    }, {
      tag: FB.definition(FB.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: FB.typeName,
      class: "tok-typeName"
    }, {
      tag: FB.namespace,
      class: "tok-namespace"
    }, {
      tag: FB.className,
      class: "tok-className"
    }, {
      tag: FB.macroName,
      class: "tok-macroName"
    }, {
      tag: FB.propertyName,
      class: "tok-propertyName"
    }, {
      tag: FB.operator,
      class: "tok-operator"
    }, {
      tag: FB.comment,
      class: "tok-comment"
    }, {
      tag: FB.meta,
      class: "tok-meta"
    }, {
      tag: FB.invalid,
      class: "tok-invalid"
    }, {
      tag: FB.punctuation,
      class: "tok-punctuation"
    }])
  },
  40078: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => JB.i,
      d: () => lB.r,
      f: () => lB.x,
      g: () => lB.A,
      k: () => JB.n,
      o: () => sd,
      p: () => JB.R,
      r: () => JB.ob
    });
    var VB = dB(1265),
      yB = dB(1258),
      pB = dB(62),
      lB = dB(40036),
      JB = dB(40040),
      YB = dB(40060),
      gB = dB(40064);

    function oB(BB, TB) {
      return dB => {
        let {
          state: VB,
          dispatch: yB
        } = dB;
        if (VB.readOnly) return !1;
        let pB = BB(TB, VB);
        return !!pB && (yB(VB.update(pB)), !0)
      }
    }
    const kB = oB(EB, 0),
      LB = oB(HB, 0),
      OB = oB(((BB, TB) => HB(BB, TB, function(BB) {
        let TB = [];
        for (let dB of BB.selection.ek) {
          let VB = BB.doc.lineAt(dB.from),
            yB = dB.to <= VB.to ? VB : BB.doc.lineAt(dB.to);
          yB.from > VB.from && yB.from == dB.to && (yB = dB.to == VB.to + 1 ? VB : BB.doc.lineAt(dB.to - 1));
          let pB = TB.length - 1;
          pB >= 0 && TB[pB].to > VB.from ? TB[pB].to = yB.to : TB.push({
            from: VB.from + /^\s*/.exec(VB.text)[0].length,
            to: yB.to
          })
        }
        return TB
      }(TB))), 0);

    function DB(BB, TB) {
      let dB = BB.languageDataAt("commentTokens", TB, 1);
      return dB.length ? dB[0] : {}
    }
    const uB = 50;

    function HB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : TB.selection.ek,
        VB = dB.map((BB => DB(TB, BB.from).block));
      if (!VB.every((BB => BB))) return null;
      let yB = dB.map(((BB, dB) => function(BB, TB, dB, VB) {
        let yB, pB, {
            open: lB,
            close: JB
          } = TB,
          YB = BB.sliceDoc(dB - uB, dB),
          gB = BB.sliceDoc(VB, VB + uB),
          oB = /\s*$/.exec(YB)[0].length,
          kB = /^\s*/.exec(gB)[0].length,
          LB = YB.length - oB;
        if (YB.slice(LB - lB.length, LB) == lB && gB.slice(kB, kB + JB.length) == JB) return {
          open: {
            pos: dB - oB,
            margin: oB && 1
          },
          close: {
            pos: VB + kB,
            margin: kB && 1
          }
        };
        VB - dB <= 2 * uB ? yB = pB = BB.sliceDoc(dB, VB) : (yB = BB.sliceDoc(dB, dB + uB), pB = BB.sliceDoc(VB - uB, VB));
        let OB = /^\s*/.exec(yB)[0].length,
          DB = /\s*$/.exec(pB)[0].length,
          HB = pB.length - DB - JB.length;
        return yB.slice(OB, OB + lB.length) == lB && pB.slice(HB, HB + JB.length) == JB ? {
          open: {
            pos: dB + OB + lB.length,
            margin: /\s/.test(yB.charAt(OB + lB.length)) ? 1 : 0
          },
          close: {
            pos: VB - DB - JB.length,
            margin: /\s/.test(pB.charAt(HB - 1)) ? 1 : 0
          }
        } : null
      }(TB, VB[dB], BB.from, BB.to)));
      if (2 != BB && !yB.every((BB => BB))) return {
        changes: TB.changes(dB.map(((BB, TB) => yB[TB] ? [] : [{
          from: BB.from,
          insert: VB[TB].open + " "
        }, {
          from: BB.to,
          insert: " " + VB[TB].close
        }])))
      };
      if (1 != BB && yB.some((BB => BB))) {
        let BB = [];
        for (let TB, dB = 0; dB < yB.length; dB++)
          if (TB = yB[dB]) {
            let yB = VB[dB],
              {
                open: pB,
                close: lB
              } = TB;
            BB.push({
              from: pB.pos - yB.open.length,
              to: pB.pos + pB.margin
            }, {
              from: lB.pos - lB.margin,
              to: lB.pos + yB.close.length
            })
          } return {
          changes: BB
        }
      }
      return null
    }

    function EB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : TB.selection.ek,
        VB = [],
        yB = -1;
      BB: for (let {
          from: pB,
          to: lB
        }
        of dB) {
        let BB, dB = VB.length,
          JB = 1e9;
        for (let YB = pB; YB <= lB;) {
          let dB = TB.doc.lineAt(YB);
          if (void 0 == BB && (BB = DB(TB, dB.from).line, !BB)) continue BB;
          if (dB.from > yB && (pB == lB || lB > dB.from)) {
            yB = dB.from;
            let TB = /^\s*/.exec(dB.text)[0].length,
              pB = TB == dB.length,
              lB = dB.text.slice(TB, TB + BB.length) == BB ? TB : -1;
            TB < dB.text.length && TB < JB && (JB = TB), VB.push({
              line: dB,
              comment: lB,
              token: BB,
              indent: TB,
              empty: pB,
              single: !1
            })
          }
          YB = dB.to + 1
        }
        if (JB < 1e9)
          for (let TB = dB; TB < VB.length; TB++) VB[TB].indent < VB[TB].line.text.length && (VB[TB].indent = JB);
        VB.length == dB + 1 && (VB[dB].single = !0)
      }
      if (2 != BB && VB.some((BB => BB.comment < 0 && (!BB.empty || BB.single)))) {
        let BB = [];
        for (let {
            line: TB,
            token: yB,
            indent: pB,
            empty: lB,
            single: JB
          }
          of VB) !JB && lB || BB.push({
          from: TB.from + pB,
          insert: yB + " "
        });
        let dB = TB.changes(BB);
        return {
          changes: dB,
          selection: TB.selection.map(dB, 1)
        }
      }
      if (1 != BB && VB.some((BB => BB.comment >= 0))) {
        let BB = [];
        for (let {
            line: TB,
            comment: dB,
            token: yB
          }
          of VB)
          if (dB >= 0) {
            let VB = TB.from + dB,
              pB = VB + yB.length;
            " " == TB.text[pB - TB.from] && pB++, BB.push({
              from: VB,
              to: pB
            })
          } return {
          changes: BB
        }
      }
      return null
    }
    const vB = lB.c.define(),
      mB = lB.c.define(),
      iB = lB.l.define(),
      NB = lB.l.define({
        combine: BB => (0, lB.P)(BB, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (BB, TB) => TB
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (BB, TB) => (dB, VB) => BB(dB, VB) || TB(dB, VB)
        })
      }),
      tB = lB.A.define({
        create: () => aB.empty,
        update(BB, TB) {
          let dB = TB.state.facet(NB),
            VB = TB.annotation(vB);
          if (VB) {
            let yB = UB.fromTransaction(TB, VB.selection),
              pB = VB.side,
              lB = 0 == pB ? BB.undone : BB.done;
            return lB = yB ? FB(lB, lB.length, dB.minDepth, yB) : cB(lB, TB.startState.selection), new aB(0 == pB ? VB.rest : lB, 0 == pB ? lB : VB.rest)
          }
          let yB = TB.annotation(mB);
          if ("full" != yB && "before" != yB || (BB = BB.isolate()), !1 === TB.annotation(lB.G.addToHistory)) return TB.changes.empty ? BB : BB.addMapping(TB.changes.desc);
          let pB = UB.fromTransaction(TB),
            JB = TB.annotation(lB.G.time),
            YB = TB.annotation(lB.G.userEvent);
          return pB ? BB = BB.addChanges(pB, JB, YB, dB, TB) : TB.selection && (BB = BB.addSelection(TB.startState.selection, JB, YB, dB.newGroupDelay)), "full" != yB && "after" != yB || (BB = BB.isolate()), BB
        },
        toJSON: BB => ({
          done: BB.done.map((BB => BB.toJSON())),
          undone: BB.undone.map((BB => BB.toJSON()))
        }),
        fromJSON: BB => new aB(BB.done.map(UB.fromJSON), BB.undone.map(UB.fromJSON))
      });

    function fB(BB, TB) {
      return function(dB) {
        let {
          state: VB,
          dispatch: yB
        } = dB;
        if (!TB && VB.readOnly) return !1;
        let pB = VB.field(tB, !1);
        if (!pB) return !1;
        let lB = pB.pop(BB, VB, TB);
        return !!lB && (yB(lB), !0)
      }
    }
    const sB = fB(0, !1),
      MB = fB(1, !1),
      zB = fB(0, !0),
      wB = fB(1, !0);
    class UB {
      constructor(BB, TB, dB, VB, yB) {
        this.changes = BB, this.effects = TB, this.mapped = dB, this.startSelection = VB, this.selectionsAfter = yB
      }
      setSelAfter(BB) {
        return new UB(this.changes, this.effects, this.mapped, this.startSelection, BB)
      }
      toJSON() {
        var BB, TB, dB;
        return {
          changes: null === (BB = this.changes) || void 0 === BB ? void 0 : BB.toJSON(),
          mapped: null === (TB = this.mapped) || void 0 === TB ? void 0 : TB.toJSON(),
          startSelection: null === (dB = this.startSelection) || void 0 === dB ? void 0 : dB.toJSON(),
          selectionsAfter: this.selectionsAfter.map((BB => BB.toJSON()))
        }
      }
      static fromJSON(BB) {
        return new UB(BB.changes && lB.ChangeSet.fromJSON(BB.changes), [], BB.mapped && lB.d.fromJSON(BB.mapped), BB.startSelection && lB.h.fromJSON(BB.startSelection), BB.selectionsAfter.map(lB.h.fromJSON))
      }
      static fromTransaction(BB, TB) {
        let dB = rB;
        for (let VB of BB.startState.facet(iB)) {
          let TB = VB(BB);
          TB.length && (dB = dB.concat(TB))
        }
        return !dB.length && BB.changes.empty ? null : new UB(BB.changes.invert(BB.startState.doc), dB, void 0, TB || BB.startState.selection, rB)
      }
      static selection(BB) {
        return new UB(void 0, rB, void 0, void 0, BB)
      }
    }

    function FB(BB, TB, dB, VB) {
      let yB = TB + 1 > dB + 20 ? TB - dB - 1 : 0,
        pB = BB.slice(yB, TB);
      return pB.push(VB), pB
    }

    function KB(BB, TB) {
      return BB.length ? TB.length ? BB.concat(TB) : BB : TB
    }
    const rB = [],
      IB = 200;

    function cB(BB, TB) {
      if (BB.length) {
        let dB = BB[BB.length - 1],
          VB = dB.selectionsAfter.slice(Math.max(0, dB.selectionsAfter.length - IB));
        return VB.length && VB[VB.length - 1].eq(TB) ? BB : (VB.push(TB), FB(BB, BB.length - 1, 1e9, dB.setSelAfter(VB)))
      }
      return [UB.selection([TB])]
    }

    function SB(BB) {
      let TB = BB[BB.length - 1],
        dB = BB.slice();
      return dB[BB.length - 1] = TB.setSelAfter(TB.selectionsAfter.slice(0, TB.selectionsAfter.length - 1)), dB
    }

    function PB(BB, TB) {
      if (!BB.length) return BB;
      let dB = BB.length,
        VB = rB;
      for (; dB;) {
        let yB = QB(BB[dB - 1], TB, VB);
        if (yB.changes && !yB.changes.empty || yB.effects.length) {
          let TB = BB.slice(0, dB);
          return TB[dB - 1] = yB, TB
        }
        TB = yB.mapped, dB--, VB = yB.selectionsAfter
      }
      return VB.length ? [UB.selection(VB)] : rB
    }

    function QB(BB, TB, dB) {
      let VB = KB(BB.selectionsAfter.length ? BB.selectionsAfter.map((BB => BB.map(TB))) : rB, dB);
      if (!BB.changes) return UB.selection(VB);
      let yB = BB.changes.map(TB),
        pB = TB.mapDesc(BB.changes, !0),
        JB = BB.mapped ? BB.mapped.composeDesc(pB) : pB;
      return new UB(yB, lB.x.mapEffects(BB.effects, TB), JB, BB.startSelection.map(pB), VB)
    }
    const RB = /^(input\.type|delete)($|\.)/;
    class aB {
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = BB, this.undone = TB, this.prevTime = dB, this.prevUserEvent = VB
      }
      isolate() {
        return this.prevTime ? new aB(this.done, this.undone) : this
      }
      addChanges(BB, TB, dB, VB, yB) {
        let pB = this.done,
          JB = pB[pB.length - 1];
        return pB = JB && JB.changes && !JB.changes.empty && BB.changes && (!dB || RB.test(dB)) && (!JB.selectionsAfter.length && TB - this.prevTime < VB.newGroupDelay && VB.joinToEvent(yB, function(BB, TB) {
          let dB = [],
            VB = !1;
          return BB.iterChangedRanges(((BB, TB) => dB.push(BB, TB))), TB.iterChangedRanges(((BB, TB, yB, pB) => {
            for (let lB = 0; lB < dB.length;) {
              let BB = dB[lB++],
                TB = dB[lB++];
              pB >= BB && yB <= TB && (VB = !0)
            }
          })), VB
        }(JB.changes, BB.changes)) || "input.type.compose" == dB) ? FB(pB, pB.length - 1, VB.minDepth, new UB(BB.changes.compose(JB.changes), KB(lB.x.mapEffects(BB.effects, JB.changes), JB.effects), JB.mapped, JB.startSelection, rB)) : FB(pB, pB.length, VB.minDepth, BB), new aB(pB, rB, TB, dB)
      }
      addSelection(BB, TB, dB, VB) {
        let yB = this.done.length ? this.done[this.done.length - 1].selectionsAfter : rB;
        return yB.length > 0 && TB - this.prevTime < VB && dB == this.prevUserEvent && dB && /^select($|\.)/.test(dB) && (pB = yB[yB.length - 1], lB = BB, pB.ek.length == lB.ek.length && 0 === pB.ek.filter(((BB, TB) => BB.empty != lB.ek[TB].empty)).length) ? this : new aB(cB(this.done, BB), this.undone, TB, dB);
        var pB, lB
      }
      addMapping(BB) {
        return new aB(PB(this.done, BB), PB(this.undone, BB), this.prevTime, this.prevUserEvent)
      }
      pop(BB, TB, dB) {
        let VB = 0 == BB ? this.done : this.undone;
        if (0 == VB.length) return null;
        let yB = VB[VB.length - 1],
          pB = yB.selectionsAfter[0] || (yB.startSelection ? yB.startSelection.map(yB.changes.invertedDesc, 1) : TB.selection);
        if (dB && yB.selectionsAfter.length) return TB.update({
          selection: yB.selectionsAfter[yB.selectionsAfter.length - 1],
          annotations: vB.of({
            side: BB,
            rest: SB(VB),
            selection: pB
          }),
          userEvent: 0 == BB ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (yB.changes) {
          let dB = 1 == VB.length ? rB : VB.slice(0, VB.length - 1);
          return yB.mapped && (dB = PB(dB, yB.mapped)), TB.update({
            changes: yB.changes,
            selection: yB.startSelection,
            effects: yB.effects,
            annotations: vB.of({
              side: BB,
              rest: dB,
              selection: pB
            }),
            filter: !1,
            userEvent: 0 == BB ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    aB.empty = new aB(rB, rB);
    const ZB = [{
      key: "Mod-z",
      run: sB,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: MB,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: MB,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: zB,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: wB,
      preventDefault: !0
    }];

    function XB(BB, TB) {
      return lB.h.create(BB.ek.map(TB), BB.mainIndex)
    }

    function WB(BB, TB) {
      return BB.update({
        selection: TB,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function hB(BB, TB) {
      let {
        state: dB,
        dispatch: VB
      } = BB, yB = XB(dB.selection, TB);
      return !yB.eq(dB.selection, !0) && (VB(WB(dB, yB)), !0)
    }

    function CB(BB, TB) {
      return lB.h.cursor(TB ? BB.to : BB.from)
    }

    function GB(BB, TB) {
      return hB(BB, (dB => dB.empty ? BB.moveByChar(dB, TB) : CB(dB, TB)))
    }

    function qB(BB) {
      return BB.textDirectionAt(BB.state.selection.main.head) == JB.f.LTR
    }
    const xB = BB => GB(BB, !qB(BB)),
      jB = BB => GB(BB, qB(BB));

    function AB(BB, TB) {
      return hB(BB, (dB => dB.empty ? BB.moveByGroup(dB, TB) : CB(dB, TB)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function bB(BB, TB, dB) {
      if (TB.type.prop(dB)) return !0;
      let VB = TB.to - TB.from;
      return VB && (VB > 2 || /[^\s,.;:]/.test(BB.sliceDoc(TB.from, TB.to))) || TB.firstChild
    }

    function nB(BB, TB, dB) {
      let VB, yB, pB = (0, YB.hb)(BB).resolveInner(TB.head),
        JB = dB ? gB.i.closedBy : gB.i.openedBy;
      for (let lB = TB.head;;) {
        let TB = dB ? pB.childAfter(lB) : pB.childBefore(lB);
        if (!TB) break;
        bB(BB, TB, JB) ? pB = TB : lB = dB ? TB.to : TB.from
      }
      return yB = pB.type.prop(JB) && (VB = dB ? (0, YB.Y)(BB, pB.from, 1) : (0, YB.Y)(BB, pB.to, -1)) && VB.matched ? dB ? VB.end.to : VB.end.from : dB ? pB.to : pB.from, lB.h.cursor(yB, dB ? -1 : 1)
    }

    function eB(BB, TB) {
      return hB(BB, (dB => {
        if (!dB.empty) return CB(dB, TB);
        let VB = BB.moveVertically(dB, TB);
        return VB.head != dB.head ? VB : BB.moveToLineBoundary(dB, TB)
      }))
    }
    const BT = BB => eB(BB, !1),
      TT = BB => eB(BB, !0);

    function dT(BB) {
      let TB, dB = BB.scrollDOM.clientHeight < BB.scrollDOM.scrollHeight - 2,
        VB = 0,
        yB = 0;
      if (dB) {
        for (let TB of BB.state.facet(JB.i.scrollMargins)) {
          let dB = TB(BB);
          (null === dB || void 0 === dB ? void 0 : dB.top) && (VB = Math.max(null === dB || void 0 === dB ? void 0 : dB.top, VB)), (null === dB || void 0 === dB ? void 0 : dB.bottom) && (yB = Math.max(null === dB || void 0 === dB ? void 0 : dB.bottom, yB))
        }
        TB = BB.scrollDOM.clientHeight - VB - yB
      } else TB = (BB.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: VB,
        marginBottom: yB,
        selfScroll: dB,
        height: Math.max(BB.defaultLineHeight, TB - 5)
      }
    }

    function VT(BB, TB) {
      let dB, VB = dT(BB),
        {
          state: yB
        } = BB,
        pB = XB(yB.selection, (dB => dB.empty ? BB.moveVertically(dB, TB, VB.height) : CB(dB, TB)));
      if (pB.eq(yB.selection)) return !1;
      if (VB.selfScroll) {
        let TB = BB.coordsAtPos(yB.selection.main.head),
          lB = BB.scrollDOM.getBoundingClientRect(),
          YB = lB.top + VB.marginTop,
          gB = lB.bottom - VB.marginBottom;
        TB && TB.top > YB && TB.bottom < gB && (dB = JB.i.scrollIntoView(pB.main.head, {
          y: "start",
          yMargin: TB.top - YB
        }))
      }
      return BB.dispatch(WB(yB, pB), {
        effects: dB
      }), !0
    }
    const yT = BB => VT(BB, !1),
      pT = BB => VT(BB, !0);

    function lT(BB, TB, dB) {
      let VB = BB.lineBlockAt(TB.head),
        yB = BB.moveToLineBoundary(TB, dB);
      if (yB.head == TB.head && yB.head != (dB ? VB.to : VB.from) && (yB = BB.moveToLineBoundary(TB, dB, !1)), !dB && yB.head == VB.from && VB.length) {
        let dB = /^\s*/.exec(BB.state.sliceDoc(VB.from, Math.min(VB.from + 100, VB.to)))[0].length;
        dB && TB.head != VB.from + dB && (yB = lB.h.cursor(VB.from + dB))
      }
      return yB
    }

    function JT(BB, TB, dB) {
      let VB = !1,
        yB = XB(BB.selection, (TB => {
          let yB = (0, YB.Y)(BB, TB.head, -1) || (0, YB.Y)(BB, TB.head, 1) || TB.head > 0 && (0, YB.Y)(BB, TB.head - 1, 1) || TB.head < BB.doc.length && (0, YB.Y)(BB, TB.head + 1, -1);
          if (!yB || !yB.end) return TB;
          VB = !0;
          let pB = yB.start.from == TB.head ? yB.end.to : yB.end.from;
          return dB ? lB.h.range(TB.anchor, pB) : lB.h.cursor(pB)
        }));
      return !!VB && (TB(WB(BB, yB)), !0)
    }

    function YT(BB, TB) {
      let dB = XB(BB.state.selection, (BB => {
        let dB = TB(BB);
        return lB.h.range(BB.anchor, dB.head, dB.goalColumn, dB.bidiLevel || void 0, dB.assoc)
      }));
      return !dB.eq(BB.state.selection) && (BB.dispatch(WB(BB.state, dB)), !0)
    }

    function gT(BB, TB) {
      return YT(BB, (dB => BB.moveByChar(dB, TB)))
    }
    const oT = BB => gT(BB, !qB(BB)),
      kT = BB => gT(BB, qB(BB));

    function LT(BB, TB) {
      return YT(BB, (dB => BB.moveByGroup(dB, TB)))
    }

    function OT(BB, TB) {
      return YT(BB, (dB => BB.moveVertically(dB, TB)))
    }
    const DT = BB => OT(BB, !1),
      uT = BB => OT(BB, !0);

    function HT(BB, TB) {
      return YT(BB, (dB => BB.moveVertically(dB, TB, dT(BB).height)))
    }
    const ET = BB => HT(BB, !1),
      vT = BB => HT(BB, !0),
      mT = BB => {
        let {
          state: TB,
          dispatch: dB
        } = BB;
        return dB(WB(TB, {
          anchor: 0
        })), !0
      },
      iT = BB => {
        let {
          state: TB,
          dispatch: dB
        } = BB;
        return dB(WB(TB, {
          anchor: TB.doc.length
        })), !0
      },
      NT = BB => {
        let {
          state: TB,
          dispatch: dB
        } = BB;
        return dB(WB(TB, {
          anchor: TB.selection.main.anchor,
          head: 0
        })), !0
      },
      tT = BB => {
        let {
          state: TB,
          dispatch: dB
        } = BB;
        return dB(WB(TB, {
          anchor: TB.selection.main.anchor,
          head: TB.doc.length
        })), !0
      };

    function fT(BB, TB) {
      let {
        state: dB
      } = BB, VB = dB.selection, yB = dB.selection.ek.slice();
      for (let pB of dB.selection.ek) {
        let VB = dB.doc.lineAt(pB.head);
        if (TB ? VB.to < BB.state.doc.length : VB.from > 0)
          for (let dB = pB;;) {
            let pB = BB.moveVertically(dB, TB);
            if (pB.head < VB.from || pB.head > VB.to) {
              yB.some((BB => BB.head == pB.head)) || yB.push(pB);
              break
            }
            if (pB.head == dB.head) break;
            dB = pB
          }
      }
      return yB.length != VB.ek.length && (BB.dispatch(WB(dB, lB.h.create(yB, yB.length - 1))), !0)
    }

    function sT(BB, TB) {
      if (BB.state.readOnly) return !1;
      let dB = "delete.selection",
        {
          state: VB
        } = BB,
        yB = VB.changeByRange((VB => {
          let {
            from: yB,
            to: pB
          } = VB;
          if (yB == pB) {
            let lB = TB(VB);
            lB < yB ? (dB = "delete.backward", lB = MT(BB, lB, !1)) : lB > yB && (dB = "delete.forward", lB = MT(BB, lB, !0)), yB = Math.min(yB, lB), pB = Math.max(pB, lB)
          } else yB = MT(BB, yB, !1), pB = MT(BB, pB, !0);
          return yB == pB ? {
            range: VB
          } : {
            changes: {
              from: yB,
              to: pB
            },
            range: lB.h.cursor(yB, yB < VB.head ? -1 : 1)
          }
        }));
      return !yB.changes.empty && (BB.dispatch(VB.update(yB, {
        scrollIntoView: !0,
        userEvent: dB,
        effects: "delete.selection" == dB ? JB.i.announce.of(VB.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function MT(BB, TB, dB) {
      if (BB instanceof JB.i)
        for (let VB of BB.state.facet(JB.i.atomicRanges).map((TB => TB(BB)))) VB.between(TB, TB, ((BB, VB) => {
          BB < TB && VB > TB && (TB = dB ? VB : BB)
        }));
      return TB
    }
    const zT = (BB, TB, dB) => sT(BB, (VB => {
        let yB, pB, JB = VB.from,
          {
            state: gB
          } = BB,
          oB = gB.doc.lineAt(JB);
        if (dB && !TB && JB > oB.from && JB < oB.from + 200 && !/[^ \t]/.test(yB = oB.text.slice(0, JB - oB.from))) {
          if ("\t" == yB[yB.length - 1]) return JB - 1;
          let BB = (0, lB.R)(yB, gB.tabSize) % (0, YB.J)(gB) || (0, YB.J)(gB);
          for (let TB = 0; TB < BB && " " == yB[yB.length - 1 - TB]; TB++) JB--;
          pB = JB
        } else pB = (0, lB.S)(oB.text, JB - oB.from, TB, TB) + oB.from, pB == JB && oB.number != (TB ? gB.doc.lines : 1) ? pB += TB ? 1 : -1 : !TB && /[\ufe00-\ufe0f]/.test(oB.text.slice(pB - oB.from, JB - oB.from)) && (pB = (0, lB.S)(oB.text, pB - oB.from, !1, !1) + oB.from);
        return pB
      })),
      wT = BB => zT(BB, !1, !0),
      UT = BB => zT(BB, !0, !1),
      FT = (BB, TB) => sT(BB, (dB => {
        let VB = dB.head,
          {
            state: yB
          } = BB,
          pB = yB.doc.lineAt(VB),
          JB = yB.charCategorizer(VB);
        for (let BB = null;;) {
          if (VB == (TB ? pB.to : pB.from)) {
            VB == dB.head && pB.number != (TB ? yB.doc.lines : 1) && (VB += TB ? 1 : -1);
            break
          }
          let YB = (0, lB.S)(pB.text, VB - pB.from, TB) + pB.from,
            gB = pB.text.slice(Math.min(VB, YB) - pB.from, Math.max(VB, YB) - pB.from),
            oB = JB(gB);
          if (null != BB && oB != BB) break;
          " " == gB && VB == dB.head || (BB = oB), VB = YB
        }
        return VB
      })),
      KT = BB => FT(BB, !1);

    function rT(BB) {
      let TB = [],
        dB = -1;
      for (let VB of BB.selection.ek) {
        let yB = BB.doc.lineAt(VB.from),
          pB = BB.doc.lineAt(VB.to);
        if (VB.empty || VB.to != pB.from || (pB = BB.doc.lineAt(VB.to - 1)), dB >= yB.number) {
          let BB = TB[TB.length - 1];
          BB.to = pB.to, BB.ek.push(VB)
        } else TB.push({
          from: yB.from,
          to: pB.to,
          ek: [VB]
        });
        dB = pB.number + 1
      }
      return TB
    }

    function IT(BB, TB, dB) {
      if (BB.readOnly) return !1;
      let VB = [],
        yB = [];
      for (let pB of rT(BB)) {
        if (dB ? pB.to == BB.doc.length : 0 == pB.from) continue;
        let TB = BB.doc.lineAt(dB ? pB.to + 1 : pB.from - 1),
          JB = TB.length + 1;
        if (dB) {
          VB.push({
            from: pB.to,
            to: TB.to
          }, {
            from: pB.from,
            insert: TB.text + BB.lineBreak
          });
          for (let TB of pB.ek) yB.push(lB.h.range(Math.min(BB.doc.length, TB.anchor + JB), Math.min(BB.doc.length, TB.head + JB)))
        } else {
          VB.push({
            from: TB.from,
            to: pB.from
          }, {
            from: pB.to,
            insert: BB.lineBreak + TB.text
          });
          for (let BB of pB.ek) yB.push(lB.h.range(BB.anchor - JB, BB.head - JB))
        }
      }
      return !!VB.length && (TB(BB.update({
        changes: VB,
        scrollIntoView: !0,
        selection: lB.h.create(yB, BB.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function cT(BB, TB, dB) {
      if (BB.readOnly) return !1;
      let VB = [];
      for (let pB of rT(BB)) dB ? VB.push({
        from: pB.from,
        insert: BB.doc.slice(pB.from, pB.to) + BB.lineBreak
      }) : VB.push({
        from: pB.to,
        insert: BB.lineBreak + BB.doc.slice(pB.from, pB.to)
      });
      let yB = BB.changes(VB);
      return TB(BB.update({
        changes: yB,
        selection: BB.selection.map(yB, dB ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const ST = PT(!1);

    function PT(BB) {
      return TB => {
        let {
          state: dB,
          dispatch: VB
        } = TB;
        if (dB.readOnly) return !1;
        let yB = dB.changeByRange((TB => {
          let {
            from: VB,
            to: yB
          } = TB, pB = dB.doc.lineAt(VB), JB = !BB && VB == yB && function(BB, TB) {
            if (/\(\)|\[\]|\{\}/.test(BB.sliceDoc(TB - 1, TB + 1))) return {
              from: TB,
              to: TB
            };
            let dB, VB = (0, YB.hb)(BB).resolveInner(TB),
              yB = VB.childBefore(TB),
              pB = VB.childAfter(TB);
            return yB && pB && yB.to <= TB && pB.from >= TB && (dB = yB.type.prop(gB.i.closedBy)) && dB.indexOf(pB.name) > -1 && BB.doc.lineAt(yB.to).from == BB.doc.lineAt(pB.from).from && !/\S/.test(BB.sliceDoc(yB.to, pB.from)) ? {
              from: yB.to,
              to: pB.from
            } : null
          }(dB, VB);
          BB && (VB = yB = (yB <= pB.to ? pB : dB.doc.lineAt(yB)).to);
          let oB = new YB.d(dB, {
              simulateBreak: VB,
              simulateDoubleBreak: !!JB
            }),
            kB = (0, YB.L)(oB, VB);
          for (null == kB && (kB = (0, lB.R)(/^\s*/.exec(dB.doc.lineAt(VB).text)[0], dB.tabSize)); yB < pB.to && /\s/.test(pB.text[yB - pB.from]);) yB++;
          JB ? ({
            from: VB,
            to: yB
          } = JB) : VB > pB.from && VB < pB.from + 100 && !/\S/.test(pB.text.slice(0, VB)) && (VB = pB.from);
          let LB = ["", (0, YB.R)(dB, kB)];
          return JB && LB.push((0, YB.R)(dB, oB.lineIndent(pB.from, -1))), {
            changes: {
              from: VB,
              to: yB,
              insert: lB.D.of(LB)
            },
            range: lB.h.cursor(VB + 1 + LB[1].length)
          }
        }));
        return VB(dB.update(yB, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function QT(BB, TB) {
      let dB = -1;
      return BB.changeByRange((VB => {
        let yB = [];
        for (let lB = VB.from; lB <= VB.to;) {
          let pB = BB.doc.lineAt(lB);
          pB.number > dB && (VB.empty || VB.to > pB.from) && (TB(pB, yB, VB), dB = pB.number), lB = pB.to + 1
        }
        let pB = BB.changes(yB);
        return {
          changes: yB,
          range: lB.h.range(pB.mapPos(VB.anchor, 1), pB.mapPos(VB.head, 1))
        }
      }))
    }
    const RT = BB => {
        let {
          state: TB,
          dispatch: dB
        } = BB;
        return !TB.readOnly && (dB(TB.update(QT(TB, ((BB, dB) => {
          dB.push({
            from: BB.from,
            insert: TB.facet(YB.V)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      aT = BB => {
        let {
          state: TB,
          dispatch: dB
        } = BB;
        return !TB.readOnly && (dB(TB.update(QT(TB, ((BB, dB) => {
          let VB = /^\s*/.exec(BB.text)[0];
          if (!VB) return;
          let yB = (0, lB.R)(VB, TB.tabSize),
            pB = 0,
            JB = (0, YB.R)(TB, Math.max(0, yB - (0, YB.J)(TB)));
          for (; pB < VB.length && pB < JB.length && VB.charCodeAt(pB) == JB.charCodeAt(pB);) pB++;
          dB.push({
            from: BB.from + pB,
            to: BB.from + VB.length,
            insert: JB.slice(pB)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      ZT = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: BB => hB(BB, (TB => nB(BB.state, TB, !qB(BB)))),
        shift: BB => YT(BB, (TB => nB(BB.state, TB, !qB(BB))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: BB => hB(BB, (TB => nB(BB.state, TB, qB(BB)))),
        shift: BB => YT(BB, (TB => nB(BB.state, TB, qB(BB))))
      }, {
        key: "Alt-ArrowUp",
        run: BB => {
          let {
            state: TB,
            dispatch: dB
          } = BB;
          return IT(TB, dB, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: BB => {
          let {
            state: TB,
            dispatch: dB
          } = BB;
          return cT(TB, dB, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: BB => {
          let {
            state: TB,
            dispatch: dB
          } = BB;
          return IT(TB, dB, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: BB => {
          let {
            state: TB,
            dispatch: dB
          } = BB;
          return cT(TB, dB, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: BB => fT(BB, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: BB => fT(BB, !0)
      }, {
        key: "Escape",
        run: BB => {
          let {
            state: TB,
            dispatch: dB
          } = BB, VB = TB.selection, yB = null;
          return VB.ek.length > 1 ? yB = lB.h.create([VB.main]) : VB.main.empty || (yB = lB.h.create([lB.h.cursor(VB.main.head)])), !!yB && (dB(WB(TB, yB)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: PT(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: BB => {
          let {
            state: TB,
            dispatch: dB
          } = BB, VB = rT(TB).map((BB => {
            let {
              from: dB,
              to: VB
            } = BB;
            return lB.h.range(dB, Math.min(VB + 1, TB.doc.length))
          }));
          return dB(TB.update({
            selection: lB.h.create(VB),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: BB => {
          let {
            state: TB,
            dispatch: dB
          } = BB, VB = XB(TB.selection, (BB => {
            let dB = (0, YB.hb)(TB),
              VB = dB.resolveStack(BB.from, 1);
            if (BB.empty) {
              let TB = dB.resolveStack(BB.from, -1);
              TB.node.from >= VB.node.from && TB.node.to <= VB.node.to && (VB = TB)
            }
            for (let TB = VB; TB; TB = TB.next) {
              let {
                node: dB
              } = TB;
              if ((dB.from < BB.from && dB.to >= BB.to || dB.to > BB.to && dB.from <= BB.from) && TB.next) return lB.h.range(dB.to, dB.from)
            }
            return BB
          }));
          return !VB.eq(TB.selection) && (dB(WB(TB, VB)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: aT
      }, {
        key: "Mod-]",
        run: RT
      }, {
        key: "Mod-Alt-\\",
        run: BB => {
          let {
            state: TB,
            dispatch: dB
          } = BB;
          if (TB.readOnly) return !1;
          let VB = Object.create(null),
            yB = new YB.d(TB, {
              overrideIndentation: BB => {
                let TB = VB[BB];
                return null == TB ? -1 : TB
              }
            }),
            pB = QT(TB, ((BB, dB, pB) => {
              let lB = (0, YB.L)(yB, BB.from);
              if (null == lB) return;
              /\S/.test(BB.text) || (lB = 0);
              let JB = /^\s*/.exec(BB.text)[0],
                gB = (0, YB.R)(TB, lB);
              (JB != gB || pB.from < BB.from + JB.length) && (VB[BB.from] = lB, dB.push({
                from: BB.from,
                to: BB.from + JB.length,
                insert: gB
              }))
            }));
          return pB.changes.empty || dB(TB.update(pB, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: BB => {
          if (BB.state.readOnly) return !1;
          let {
            state: TB
          } = BB, dB = TB.changes(rT(TB).map((BB => {
            let {
              from: dB,
              to: VB
            } = BB;
            return dB > 0 ? dB-- : VB < TB.doc.length && VB++, {
              from: dB,
              to: VB
            }
          }))), VB = XB(TB.selection, (TB => {
            let dB;
            if (BB.lineWrapping) {
              let VB = BB.lineBlockAt(TB.head),
                yB = BB.coordsAtPos(TB.head, TB.assoc || 1);
              yB && (dB = VB.bottom + BB.documentTop - yB.bottom + BB.defaultLineHeight / 2)
            }
            return BB.moveVertically(TB, !0, dB)
          })).map(dB);
          return BB.dispatch({
            changes: dB,
            selection: VB,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: BB => {
          let {
            state: TB,
            dispatch: dB
          } = BB;
          return JT(TB, dB, !1)
        }
      }, {
        key: "Mod-/",
        run: BB => {
          let {
            state: TB
          } = BB, dB = TB.doc.lineAt(TB.selection.main.from), VB = DB(BB.state, dB.from);
          return VB.line ? kB(BB) : !!VB.block && OB(BB)
        }
      }, {
        key: "Alt-A",
        run: LB
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: BB => (BB.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: xB,
        shift: oT,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: BB => AB(BB, !qB(BB)),
        shift: BB => LT(BB, !qB(BB)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: BB => hB(BB, (TB => lT(BB, TB, !qB(BB)))),
        shift: BB => YT(BB, (TB => lT(BB, TB, !qB(BB)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: jB,
        shift: kT,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: BB => AB(BB, qB(BB)),
        shift: BB => LT(BB, qB(BB)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: BB => hB(BB, (TB => lT(BB, TB, qB(BB)))),
        shift: BB => YT(BB, (TB => lT(BB, TB, qB(BB)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: BT,
        shift: DT,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: mT,
        shift: NT
      }, {
        mac: "Ctrl-ArrowUp",
        run: yT,
        shift: ET
      }, {
        key: "ArrowDown",
        run: TT,
        shift: uT,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: iT,
        shift: tT
      }, {
        mac: "Ctrl-ArrowDown",
        run: pT,
        shift: vT
      }, {
        key: "PageUp",
        run: yT,
        shift: ET
      }, {
        key: "PageDown",
        run: pT,
        shift: vT
      }, {
        key: "Home",
        run: BB => hB(BB, (TB => lT(BB, TB, !1))),
        shift: BB => YT(BB, (TB => lT(BB, TB, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: mT,
        shift: NT
      }, {
        key: "End",
        run: BB => hB(BB, (TB => lT(BB, TB, !0))),
        shift: BB => YT(BB, (TB => lT(BB, TB, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: iT,
        shift: tT
      }, {
        key: "Enter",
        run: ST,
        shift: ST
      }, {
        key: "Mod-a",
        run: BB => {
          let {
            state: TB,
            dispatch: dB
          } = BB;
          return dB(TB.update({
            selection: {
              anchor: 0,
              head: TB.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: wT,
        shift: wT,
        preventDefault: !0
      }, {
        key: "Delete",
        run: UT,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: KT,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: BB => FT(BB, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: BB => sT(BB, (TB => {
          let dB = BB.moveToLineBoundary(TB, !1).head;
          return TB.head > dB ? dB : Math.max(0, TB.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: BB => sT(BB, (TB => {
          let dB = BB.moveToLineBoundary(TB, !0).head;
          return TB.head < dB ? dB : Math.min(BB.state.doc.length, TB.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: xB,
        shift: oT,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: jB,
        shift: kT
      }, {
        key: "Ctrl-p",
        run: BT,
        shift: DT
      }, {
        key: "Ctrl-n",
        run: TT,
        shift: uT
      }, {
        key: "Ctrl-a",
        run: BB => hB(BB, (TB => lB.h.cursor(BB.lineBlockAt(TB.head).from, 1))),
        shift: BB => YT(BB, (TB => lB.h.cursor(BB.lineBlockAt(TB.head).from)))
      }, {
        key: "Ctrl-e",
        run: BB => hB(BB, (TB => lB.h.cursor(BB.lineBlockAt(TB.head).to, -1))),
        shift: BB => YT(BB, (TB => lB.h.cursor(BB.lineBlockAt(TB.head).to)))
      }, {
        key: "Ctrl-d",
        run: UT
      }, {
        key: "Ctrl-h",
        run: wT
      }, {
        key: "Ctrl-k",
        run: BB => sT(BB, (TB => {
          let dB = BB.lineBlockAt(TB.head).to;
          return TB.head < dB ? dB : Math.min(BB.state.doc.length, TB.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: KT
      }, {
        key: "Ctrl-o",
        run: BB => {
          let {
            state: TB,
            dispatch: dB
          } = BB;
          if (TB.readOnly) return !1;
          let VB = TB.changeByRange((BB => ({
            changes: {
              from: BB.from,
              to: BB.to,
              insert: lB.D.of(["", ""])
            },
            range: lB.h.cursor(BB.from)
          })));
          return dB(TB.update(VB, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: BB => {
          let {
            state: TB,
            dispatch: dB
          } = BB;
          if (TB.readOnly) return !1;
          let VB = TB.changeByRange((BB => {
            if (!BB.empty || 0 == BB.from || BB.from == TB.doc.length) return {
              range: BB
            };
            let dB = BB.from,
              VB = TB.doc.lineAt(dB),
              yB = dB == VB.from ? dB - 1 : (0, lB.S)(VB.text, dB - VB.from, !1) + VB.from,
              pB = dB == VB.to ? dB + 1 : (0, lB.S)(VB.text, dB - VB.from, !0) + VB.from;
            return {
              changes: {
                from: yB,
                to: pB,
                insert: TB.doc.slice(dB, pB).append(TB.doc.slice(yB, dB))
              },
              range: lB.h.cursor(pB)
            }
          }));
          return !VB.changes.empty && (dB(TB.update(VB, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: pT
      }].map((BB => ({
        mac: BB.key,
        run: BB.run,
        shift: BB.shift
      }))))),
      XT = {
        key: "Tab",
        run: RT,
        shift: aT
      };
    var WT = dB(40084),
      hT = dB(40033),
      CT = dB(40092),
      GT = function(BB) {
        void 0 === BB && (BB = {});
        var {
          crosshairCursor: TB = !1
        } = BB, dB = [];
        !1 !== BB.closeBracketsKeymap && (dB = dB.concat(hT.f)), !1 !== BB.defaultKeymap && (dB = dB.concat(ZT)), !1 !== BB.searchKeymap && (dB = dB.concat(WT.f)), !1 !== BB.historyKeymap && (dB = dB.concat(ZB)), !1 !== BB.foldKeymap && (dB = dB.concat(YB.G)), !1 !== BB.completionKeymap && (dB = dB.concat(hT.p)), !1 !== BB.lintKeymap && (dB = dB.concat(CT.d));
        var VB = [];
        return !1 !== BB.lineNumbers && VB.push((0, JB.V)()), !1 !== BB.highlightActiveLineGutter && VB.push((0, JB.K)()), !1 !== BB.highlightSpecialChars && VB.push((0, JB.P)()), !1 !== BB.history && VB.push(function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [tB, NB.of(BB), JB.i.domEventHandlers({
            beforeinput(BB, TB) {
              let dB = "historyUndo" == BB.inputType ? sB : "historyRedo" == BB.inputType ? MB : null;
              return !!dB && (BB.preventDefault(), dB(TB))
            }
          })]
        }()), !1 !== BB.foldGutter && VB.push((0, YB.D)()), !1 !== BB.drawSelection && VB.push((0, JB.u)()), !1 !== BB.dropCursor && VB.push((0, JB.x)()), !1 !== BB.allowMultipleSelections && VB.push(lB.i.allowMultipleSelections.of(!0)), !1 !== BB.indentOnInput && VB.push((0, YB.Q)()), !1 !== BB.syntaxHighlighting && VB.push((0, YB.cb)(YB.q, {
          fallback: !0
        })), !1 !== BB.bracketMatching && VB.push((0, YB.l)()), !1 !== BB.closeBrackets && VB.push((0, hT.h)()), !1 !== BB.autocompletion && VB.push((0, hT.e)()), !1 !== BB.rectangularSelection && VB.push((0, JB.bb)()), !1 !== TB && VB.push((0, JB.q)()), !1 !== BB.highlightActiveLine && VB.push((0, JB.N)()), !1 !== BB.highlightSelectionMatches && VB.push((0, WT.e)()), BB.tabSize && "number" === typeof BB.tabSize && VB.push(YB.V.of(" ".repeat(BB.tabSize))), VB.concat([JB.S.of(dB.flat())]).filter(Boolean)
      },
      qT = dB(40069);
    const xT = "#e5c07b",
      jT = "#e06c75",
      AT = "#56b6c2",
      bT = "#ffffff",
      nT = "#abb2bf",
      eT = "#7d8799",
      Bd = "#61afef",
      Td = "#98c379",
      dd = "#d19a66",
      Vd = "#c678dd",
      yd = "#21252b",
      pd = "#2c313a",
      ld = "#282c34",
      Jd = "#353a42",
      Yd = "#3E4451",
      gd = "#528bff",
      od = JB.i.theme({
        "&": {
          color: nT,
          backgroundColor: ld
        },
        ".cm-content": {
          caretColor: gd
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: gd
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: Yd
        },
        ".cm-panels": {
          backgroundColor: yd,
          color: nT
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
          backgroundColor: ld,
          color: eT,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: pd
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: Jd
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: Jd,
          borderBottomColor: Jd
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: pd,
            color: nT
          }
        }
      }, {
        dark: !0
      }),
      kd = YB.b.define([{
        tag: qT.h.keyword,
        color: Vd
      }, {
        tag: [qT.h.name, qT.h.deleted, qT.h.character, qT.h.propertyName, qT.h.macroName],
        color: jT
      }, {
        tag: [qT.h.function(qT.h.variableName), qT.h.labelName],
        color: Bd
      }, {
        tag: [qT.h.color, qT.h.constant(qT.h.name), qT.h.standard(qT.h.name)],
        color: dd
      }, {
        tag: [qT.h.definition(qT.h.name), qT.h.separator],
        color: nT
      }, {
        tag: [qT.h.typeName, qT.h.className, qT.h.number, qT.h.changed, qT.h.annotation, qT.h.modifier, qT.h.self, qT.h.namespace],
        color: xT
      }, {
        tag: [qT.h.operator, qT.h.operatorKeyword, qT.h.url, qT.h.escape, qT.h.regexp, qT.h.link, qT.h.special(qT.h.string)],
        color: AT
      }, {
        tag: [qT.h.meta, qT.h.comment],
        color: eT
      }, {
        tag: qT.h.strong,
        fontWeight: "bold"
      }, {
        tag: qT.h.emphasis,
        fontStyle: "italic"
      }, {
        tag: qT.h.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: qT.h.link,
        color: eT,
        textDecoration: "underline"
      }, {
        tag: qT.h.heading,
        fontWeight: "bold",
        color: jT
      }, {
        tag: [qT.h.atom, qT.h.bool, qT.h.special(qT.h.variableName)],
        color: dd
      }, {
        tag: [qT.h.processingInstruction, qT.h.string, qT.h.inserted],
        color: Td
      }, {
        tag: qT.h.invalid,
        color: bT
      }]),
      Ld = [od, (0, YB.cb)(kd)];
    var Od = JB.i.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class Dd {
      constructor(BB, TB) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = TB, this.timeoutMS = TB, this.callbacks.push(BB)
      }
      dL() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var BB = this.callbacks.slice();
          this.callbacks.length = 0, BB.forEach((BB => {
            try {
              BB()
            } catch (TB) {
              console.error("TimeoutLatch callback error:", TB)
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
    class ud {
      constructor() {
        this.interval = null, this.latches = new Set
      }
      add(BB) {
        this.latches.add(BB), this.start()
      }
      remove(BB) {
        this.latches.delete(BB), 0 === this.latches.size && this.stop()
      }
      start() {
        null === this.interval && (this.interval = setInterval((() => {
          this.latches.forEach((BB => {
            BB.dL(), BB.isDone && this.remove(BB)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var Hd = null,
      Ed = lB.c.define(),
      vd = [];

    function md(BB) {
      var {
        value: TB,
        selection: dB,
        onChange: VB,
        onStatistics: yB,
        onCreateEditor: YB,
        onUpdate: gB,
        extensions: oB = vd,
        autoFocus: kB,
        theme: LB = "light",
        height: OB = null,
        minHeight: DB = null,
        maxHeight: uB = null,
        width: HB = null,
        minWidth: EB = null,
        maxWidth: vB = null,
        placeholder: mB = "",
        editable: iB = !0,
        readOnly: NB = !1,
        indentWithTab: tB = !0,
        basicSetup: fB = !0,
        root: sB,
        initialState: MB
      } = BB, [zB, wB] = (0, pB.useState)(), [UB, FB] = (0, pB.useState)(), [KB, rB] = (0, pB.useState)(), IB = (0, pB.useState)((() => ({
        current: null
      })))[0], cB = (0, pB.useState)((() => ({
        current: null
      })))[0], SB = JB.i.theme({
        "&": {
          height: OB,
          minHeight: DB,
          maxHeight: uB,
          width: HB,
          minWidth: EB,
          maxWidth: vB
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), PB = JB.i.updateListener.of((BB => {
        if (BB.docChanged && "function" === typeof VB && !BB.transactions.some((BB => BB.annotation(Ed)))) {
          IB.current ? IB.current.reset() : (IB.current = new Dd((() => {
            if (cB.current) {
              var BB = cB.current;
              cB.current = null, BB()
            }
            IB.current = null
          }), 200), ("undefined" === typeof window ? new ud : (Hd || (Hd = new ud), Hd)).add(IB.current));
          var TB = BB.state.doc.toString();
          VB(TB, BB)
        }
        yB && yB((BB => ({
          line: BB.state.doc.lineAt(BB.state.selection.main.from),
          lineCount: BB.state.doc.lines,
          lineBreak: BB.state.lineBreak,
          length: BB.state.doc.length,
          readOnly: BB.state.readOnly,
          tabSize: BB.state.tabSize,
          selection: BB.state.selection,
          selectionAsSingle: BB.state.selection.asSingle().main,
          ek: BB.state.selection.ek,
          selectionCode: BB.state.sliceDoc(BB.state.selection.main.from, BB.state.selection.main.to),
          selections: BB.state.selection.ek.map((TB => BB.state.sliceDoc(TB.from, TB.to))),
          selectedText: BB.state.selection.ek.some((BB => !BB.empty))
        }))(BB))
      })), QB = function(BB) {
        void 0 === BB && (BB = {});
        var {
          indentWithTab: TB = !0,
          editable: dB = !0,
          readOnly: VB = !1,
          theme: yB = "light",
          placeholder: pB = "",
          basicSetup: YB = !0
        } = BB, gB = [];
        switch (TB && gB.unshift(JB.S.of([XT])), YB && ("boolean" === typeof YB ? gB.unshift(GT()) : gB.unshift(GT(YB))), pB && gB.unshift((0, JB._)(pB)), yB) {
          case "light":
            gB.push(Od);
            break;
          case "dark":
            gB.push(Ld);
            break;
          case "none":
            break;
          default:
            gB.push(yB)
        }
        return !1 === dB && gB.push(JB.i.editable.of(!1)), VB && gB.push(lB.i.readOnly.of(!0)), [...gB]
      }({
        theme: LB,
        editable: iB,
        readOnly: NB,
        placeholder: mB,
        indentWithTab: tB,
        basicSetup: fB
      }), RB = [PB, SB, ...QB];
      return gB && "function" === typeof gB && RB.push(JB.i.updateListener.of(gB)), RB = RB.concat(oB), (0, pB.useLayoutEffect)((() => {
        if (zB && !KB) {
          var BB = {
              doc: TB,
              selection: dB,
              extensions: RB
            },
            VB = MB ? lB.i.fromJSON(MB.json, BB, MB.fields) : lB.i.create(BB);
          if (rB(VB), !UB) {
            var yB = new JB.i({
              state: VB,
              parent: zB,
              root: sB
            });
            FB(yB), YB && YB(yB, VB)
          }
        }
        return () => {
          UB && (rB(void 0), FB(void 0))
        }
      }), [zB, KB]), (0, pB.useEffect)((() => {
        BB.container && wB(BB.container)
      }), [BB.container]), (0, pB.useEffect)((() => () => {
        UB && (UB.destroy(), FB(void 0)), IB.current && (IB.current.cancel(), IB.current = null)
      }), [UB]), (0, pB.useEffect)((() => {
        kB && UB && UB.focus()
      }), [kB, UB]), (0, pB.useEffect)((() => {
        UB && UB.dispatch({
          effects: lB.x.reconfigure.of(RB)
        })
      }), [LB, oB, OB, DB, uB, HB, EB, vB, mB, iB, NB, tB, fB, VB, gB]), (0, pB.useEffect)((() => {
        if (void 0 !== TB) {
          var BB = UB ? UB.state.doc.toString() : "";
          if (UB && TB !== BB) {
            var dB = () => {
              UB && TB !== UB.state.doc.toString() && UB.dispatch({
                changes: {
                  from: 0,
                  to: UB.state.doc.toString().length,
                  insert: TB || ""
                },
                annotations: [Ed.of(!0)]
              })
            };
            IB.current && !IB.current.isDone ? cB.current = dB : dB()
          }
        }
      }), [TB, UB]), {
        state: KB,
        setState: rB,
        view: UB,
        setView: FB,
        container: zB,
        setContainer: wB
      }
    }
    var Nd = dB(980),
      td = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      fd = (0, pB.forwardRef)(((BB, TB) => {
        var {
          className: dB,
          value: lB = "",
          selection: JB,
          extensions: YB = [],
          onChange: gB,
          onStatistics: oB,
          onCreateEditor: kB,
          onUpdate: LB,
          autoFocus: OB,
          theme: DB = "light",
          height: uB,
          minHeight: HB,
          maxHeight: EB,
          width: vB,
          minWidth: mB,
          maxWidth: iB,
          basicSetup: NB,
          placeholder: tB,
          indentWithTab: fB,
          editable: sB,
          readOnly: MB,
          root: zB,
          initialState: wB
        } = BB, UB = (0, yB.c)(BB, td), FB = (0, pB.useRef)(null), {
          state: KB,
          view: rB,
          container: IB,
          setContainer: cB
        } = md({
          root: zB,
          value: lB,
          autoFocus: OB,
          theme: DB,
          height: uB,
          minHeight: HB,
          maxHeight: EB,
          width: vB,
          minWidth: mB,
          maxWidth: iB,
          basicSetup: NB,
          placeholder: tB,
          indentWithTab: fB,
          editable: sB,
          readOnly: MB,
          selection: JB,
          onChange: gB,
          onStatistics: oB,
          onCreateEditor: kB,
          onUpdate: LB,
          extensions: YB,
          initialState: wB
        });
        (0, pB.useImperativeHandle)(TB, (() => ({
          editor: FB.current,
          state: KB,
          view: rB
        })), [FB, IB, KB, rB]);
        var SB = (0, pB.useCallback)((BB => {
          FB.current = BB, cB(BB)
        }), [cB]);
        if ("string" !== typeof lB) throw new Error("value must be typeof string but got " + typeof lB);
        var PB = "string" === typeof DB ? "cm-theme-" + DB : "cm-theme";
        return (0, Nd.jsx)("div", (0, VB.c)({
          ref: SB,
          className: PB + (dB ? " " + dB : "")
        }, UB))
      }));
    fd.displayName = "CodeMirror";
    const sd = fd
  },
  40051: (BB, TB, dB) => {
    function VB() {
      var BB = arguments[0];
      "string" == typeof BB && (BB = document.createElement(BB));
      var TB = 1,
        dB = arguments[1];
      if (dB && "object" == typeof dB && null == dB.nodeType && !Array.isArray(dB)) {
        for (var VB in dB)
          if (Object.prototype.hasOwnProperty.call(dB, VB)) {
            var pB = dB[VB];
            "string" == typeof pB ? BB.setAttribute(VB, pB) : null != pB && (BB[VB] = pB)
          } TB++
      }
      for (; TB < arguments.length; TB++) yB(BB, arguments[TB]);
      return BB
    }

    function yB(BB, TB) {
      if ("string" == typeof TB) BB.appendChild(document.createTextNode(TB));
      else if (null == TB);
      else if (null != TB.nodeType) BB.appendChild(TB);
      else {
        if (!Array.isArray(TB)) throw new RangeError("Unsupported child node: " + TB);
        for (var dB = 0; dB < TB.length; dB++) yB(BB, TB[dB])
      }
    }
    dB.d(TB, {
      e: () => VB
    })
  },
  40043: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => lB
    });
    const VB = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      yB = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      pB = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class lB {
      constructor(BB, TB) {
        this.rules = [];
        let {
          finish: dB
        } = TB || {};

        function VB(BB) {
          return /^@/.test(BB) ? [BB] : BB.split(/,\s*/)
        }

        function yB(BB, TB, pB, lB) {
          let JB = [],
            YB = /^@(\w+)\b/.exec(BB[0]),
            gB = YB && "keyframes" == YB[1];
          if (YB && null == TB) return pB.push(BB[0] + ";");
          for (let dB in TB) {
            let lB = TB[dB];
            if (/&/.test(dB)) yB(dB.split(/,\s*/).map((TB => BB.map((BB => TB.replace(/&/, BB))))).reduce(((BB, TB) => BB.concat(TB))), lB, pB);
            else if (lB && "object" == typeof lB) {
              if (!YB) throw new RangeError("The value of a property (" + dB + ") should be a primitive value.");
              yB(VB(dB), lB, JB, gB)
            } else null != lB && JB.push(dB.replace(/_.*/, "").replace(/[A-Z]/g, (BB => "-" + BB.toLowerCase())) + ": " + lB + ";")
          }(JB.length || gB) && pB.push((!dB || YB || lB ? BB : BB.map(dB)).join(", ") + " {" + JB.join(" ") + "}")
        }
        for (let pB in BB) yB(VB(pB), BB[pB], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let BB = pB[VB] || 1;
        return pB[VB] = BB + 1, "\u037c" + BB.toString(36)
      }
      static mount(BB, TB, dB) {
        let VB = BB[yB],
          pB = dB && dB.nonce;
        VB ? pB && VB.setNonce(pB) : VB = new YB(BB, pB), VB.mount(Array.isArray(TB) ? TB : [TB], BB)
      }
    }
    let JB = new Map;
    class YB {
      constructor(BB, TB) {
        let dB = BB.ownerDocument || BB,
          VB = dB.defaultView;
        if (!BB.head && BB.adoptedStyleSheets && VB.CSSStyleSheet) {
          let TB = JB.get(dB);
          if (TB) return BB[yB] = TB;
          this.sheet = new VB.CSSStyleSheet, JB.set(dB, this)
        } else this.styleTag = dB.createElement("style"), TB && this.styleTag.setAttribute("nonce", TB);
        this.modules = [], BB[yB] = this
      }
      mount(BB, TB) {
        let dB = this.sheet,
          VB = 0,
          yB = 0;
        for (let pB = 0; pB < BB.length; pB++) {
          let TB = BB[pB],
            lB = this.modules.indexOf(TB);
          if (lB < yB && lB > -1 && (this.modules.splice(lB, 1), yB--, lB = -1), -1 == lB) {
            if (this.modules.splice(yB++, 0, TB), dB)
              for (let BB = 0; BB < TB.rules.length; BB++) dB.insertRule(TB.rules[BB], VB++)
          } else {
            for (; yB < lB;) VB += this.modules[yB++].rules.length;
            VB += TB.rules.length, yB++
          }
        }
        if (dB) TB.adoptedStyleSheets.indexOf(this.sheet) < 0 && (TB.adoptedStyleSheets = [this.sheet, ...TB.adoptedStyleSheets]);
        else {
          let BB = "";
          for (let TB = 0; TB < this.modules.length; TB++) BB += this.modules[TB].getRules() + "\n";
          this.styleTag.textContent = BB;
          let dB = TB.head || TB;
          this.styleTag.parentNode != dB && dB.insertBefore(this.styleTag, dB.firstChild)
        }
      }
      setNonce(BB) {
        this.styleTag && this.styleTag.getAttribute("nonce") != BB && this.styleTag.setAttribute("nonce", BB)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);