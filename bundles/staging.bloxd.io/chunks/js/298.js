export const id = 298;
export const ids = [298];
export const modules = {
  41399: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => Yj,
      e: () => Ej,
      h: () => Gj,
      k: () => uB,
      l: () => Vj,
      o: () => UB,
      p: () => rj
    });
    var QB = zB(41408),
      nB = zB(41415),
      dB = zB(41437);
    class IB {
      constructor(BB, jB, zB, QB) {
        this.state = BB, this.pos = jB, this.explicit = zB, this.view = QB, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(BB) {
        let jB = (0, dB.lb)(this.state).resolveInner(this.pos, -1);
        for (; jB && BB.indexOf(jB.name) < 0;) jB = jB.parent;
        return jB ? {
          from: jB.from,
          to: this.pos,
          text: this.state.sliceDoc(jB.from, this.pos),
          type: jB.type
        } : null
      }
      matchBefore(BB) {
        let jB = this.state.doc.lineAt(this.pos),
          zB = Math.max(jB.from, this.pos - 250),
          QB = jB.text.slice(zB - jB.from, this.pos - jB.from),
          nB = QB.search(rB(BB, !1));
        return nB < 0 ? null : {
          from: zB + nB,
          to: this.pos,
          text: QB.slice(nB)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(BB, jB, zB) {
        "abort" == BB && this.abortListeners && (this.abortListeners.push(jB), zB && zB.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function NB(BB) {
      let jB = Object.keys(BB).join(""),
        zB = /\w/.test(jB);
      return zB && (jB = jB.replace(/\w/g, "")), `[${zB?"\\w":""}${jB.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function uB(BB) {
      let jB = BB.map((BB => "string" == typeof BB ? {
          label: BB
        } : BB)),
        [zB, QB] = jB.every((BB => /^\w+$/.test(BB.label))) ? [/\w*$/, /\w+$/] : function(BB) {
          let jB = Object.create(null),
            zB = Object.create(null);
          for (let {
              label: nB
            }
            of BB) {
            jB[nB[0]] = !0;
            for (let BB = 1; BB < nB.length; BB++) zB[nB[BB]] = !0
          }
          let QB = NB(jB) + NB(zB) + "*$";
          return [new RegExp("^" + QB), new RegExp(QB)]
        }(jB);
      return BB => {
        let nB = BB.matchBefore(QB);
        return nB || BB.explicit ? {
          from: nB ? nB.from : BB.pos,
          options: jB,
          validFor: zB
        } : null
      }
    }

    function UB(BB, jB) {
      return zB => {
        for (let jB = (0, dB.lb)(zB.state).resolveInner(zB.pos, -1); jB; jB = jB.parent) {
          if (BB.indexOf(jB.name) > -1) return null;
          if (jB.type.isTop) break
        }
        return jB(zB)
      }
    }
    class aB {
      constructor(BB, jB, zB, QB) {
        this.completion = BB, this.source = jB, this.match = zB, this.score = QB
      }
    }

    function pB(BB) {
      return BB.selection.main.from
    }

    function rB(BB, jB) {
      var zB;
      let {
        source: QB
      } = BB, nB = jB && "^" != QB[0], dB = "$" != QB[QB.length - 1];
      return nB || dB ? new RegExp(`${nB?"^":""}(?:${QB})${dB?"$":""}`, null !== (zB = BB.flags) && void 0 !== zB ? zB : BB.ignoreCase ? "i" : "") : BB
    }
    const sB = QB.c.define();

    function JB(BB, jB, zB, nB) {
      let {
        main: dB
      } = BB.selection, IB = zB - dB.from, NB = nB - dB.from;
      return {
        ...BB.changeByRange((uB => {
          if (uB != dB && zB != nB && BB.sliceDoc(uB.from + IB, uB.from + NB) != BB.sliceDoc(zB, nB)) return {
            range: uB
          };
          let UB = BB.toText(jB);
          return {
            changes: {
              from: uB.from + IB,
              to: nB == dB.from ? uB.to : uB.from + NB,
              insert: UB
            },
            range: QB.i.cursor(uB.from + IB + UB.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const mB = new WeakMap;

    function yB(BB) {
      if (!Array.isArray(BB)) return BB;
      let jB = mB.get(BB);
      return jB || mB.set(BB, jB = uB(BB)), jB
    }
    const kB = QB.D.define(),
      GB = QB.D.define();
    class LB {
      constructor(BB) {
        this.pattern = BB, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let jB = 0; jB < BB.length;) {
          let zB = (0, QB.L)(BB, jB),
            nB = (0, QB.M)(zB);
          this.chars.push(zB);
          let dB = BB.slice(jB, jB + nB),
            IB = dB.toUpperCase();
          this.folded.push((0, QB.L)(IB == dB ? dB.toLowerCase() : IB, 0)), jB += nB
        }
        this.astral = BB.length != this.chars.length
      }
      ret(BB, jB) {
        return this.score = BB, this.matched = jB, this
      }
      match(BB) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (BB.length < this.pattern.length) return null;
        let {
          chars: jB,
          folded: zB,
          any: nB,
          precise: dB,
          byWord: IB
        } = this;
        if (1 == jB.length) {
          let nB = (0, QB.L)(BB, 0),
            dB = (0, QB.M)(nB),
            IB = dB == BB.length ? 0 : -100;
          if (nB == jB[0]);
          else {
            if (nB != zB[0]) return null;
            IB += -200
          }
          return this.ret(IB, [0, dB])
        }
        let NB = BB.indexOf(this.pattern);
        if (0 == NB) return this.ret(BB.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let uB = jB.length,
          UB = 0;
        if (NB < 0) {
          for (let dB = 0, IB = Math.min(BB.length, 200); dB < IB && UB < uB;) {
            let IB = (0, QB.L)(BB, dB);
            IB != jB[UB] && IB != zB[UB] || (nB[UB++] = dB), dB += (0, QB.M)(IB)
          }
          if (UB < uB) return null
        }
        let aB = 0,
          pB = 0,
          rB = !1,
          sB = 0,
          JB = -1,
          mB = -1,
          yB = /[a-z]/.test(BB),
          kB = !0;
        for (let GB = 0, LB = Math.min(BB.length, 200), gB = 0; GB < LB && pB < uB;) {
          let nB = (0, QB.L)(BB, GB);
          NB < 0 && (aB < uB && nB == jB[aB] && (dB[aB++] = GB), sB < uB && (nB == jB[sB] || nB == zB[sB] ? (0 == sB && (JB = GB), mB = GB + 1, sB++) : sB = 0));
          let UB, LB = nB < 255 ? nB >= 48 && nB <= 57 || nB >= 97 && nB <= 122 ? 2 : nB >= 65 && nB <= 90 ? 1 : 0 : (UB = (0, QB.W)(nB)) != UB.toLowerCase() ? 1 : UB != UB.toUpperCase() ? 2 : 0;
          (!GB || 1 == LB && yB || 0 == gB && 0 != LB) && (jB[pB] == nB || zB[pB] == nB && (rB = !0) ? IB[pB++] = GB : IB.length && (kB = !1)), gB = LB, GB += (0, QB.M)(nB)
        }
        return pB == uB && 0 == IB[0] && kB ? this.result((rB ? -200 : 0) - 100, IB, BB) : sB == uB && 0 == JB ? this.ret(-200 - BB.length + (mB == BB.length ? 0 : -100), [0, mB]) : NB > -1 ? this.ret(-700 - BB.length, [NB, NB + this.pattern.length]) : sB == uB ? this.ret(-900 - BB.length, [JB, mB]) : pB == uB ? this.result((rB ? -200 : 0) - 100 - 700 + (kB ? 0 : -1100), IB, BB) : 2 == jB.length ? null : this.result((nB[0] ? -700 : 0) - 200 - 1100, nB, BB)
      }
      result(BB, jB, zB) {
        let nB = [],
          dB = 0;
        for (let IB of jB) {
          let BB = IB + (this.astral ? (0, QB.M)((0, QB.L)(zB, IB)) : 1);
          dB && nB[dB - 1] == IB ? nB[dB - 1] = BB : (nB[dB++] = IB, nB[dB++] = BB)
        }
        return this.ret(BB - zB.length, nB)
      }
    }
    class gB {
      constructor(BB) {
        this.pattern = BB, this.matched = [], this.score = 0, this.folded = BB.toLowerCase()
      }
      match(BB) {
        if (BB.length < this.pattern.length) return null;
        let jB = BB.slice(0, this.pattern.length),
          zB = jB == this.pattern ? 0 : jB.toLowerCase() == this.folded ? -200 : null;
        return null == zB ? null : (this.matched = [0, jB.length], this.score = zB + (BB.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const tB = QB.p.define({
      combine: BB => (0, QB.O)(BB, {
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
        positionInfo: MB,
        filterStrict: !1,
        compareCompletions: (BB, jB) => (BB.sortText || BB.label).localeCompare(jB.sortText || jB.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (BB, jB) => BB && jB,
        closeOnBlur: (BB, jB) => BB && jB,
        icons: (BB, jB) => BB && jB,
        tooltipClass: (BB, jB) => zB => SB(BB(zB), jB(zB)),
        optionClass: (BB, jB) => zB => SB(BB(zB), jB(zB)),
        addToOptions: (BB, jB) => BB.concat(jB),
        filterStrict: (BB, jB) => BB || jB
      })
    });

    function SB(BB, jB) {
      return BB ? jB ? BB + " " + jB : BB : jB
    }

    function MB(BB, jB, zB, QB, dB, IB) {
      let NB, uB, UB = BB.textDirection == nB.h.RTL,
        aB = UB,
        pB = !1,
        rB = "top",
        sB = jB.left - dB.left,
        JB = dB.right - jB.right,
        mB = QB.right - QB.left,
        yB = QB.bottom - QB.top;
      if (aB && sB < Math.min(mB, JB) ? aB = !1 : !aB && JB < Math.min(mB, sB) && (aB = !0), mB <= (aB ? sB : JB)) NB = Math.max(dB.top, Math.min(zB.top, dB.bottom - yB)) - jB.top, uB = Math.min(400, aB ? sB : JB);
      else {
        pB = !0, uB = Math.min(400, (UB ? jB.right : dB.right - jB.left) - 30);
        let BB = dB.bottom - jB.bottom;
        BB >= yB || BB > jB.top ? NB = zB.bottom - jB.top : (rB = "bottom", NB = jB.bottom - zB.top)
      }
      return {
        style: `${rB}: ${NB/((jB.bottom-jB.top)/IB.offsetHeight)}px; max-width: ${uB/((jB.right-jB.left)/IB.offsetWidth)}px`,
        class: "cm-completionInfo-" + (pB ? UB ? "left-narrow" : "right-narrow" : aB ? "left" : "right")
      }
    }
    const EB = QB.D.define();

    function iB(BB, jB, zB) {
      if (BB <= zB) return {
        from: 0,
        to: BB
      };
      if (jB < 0 && (jB = 0), jB <= BB >> 1) {
        let BB = Math.floor(jB / zB);
        return {
          from: BB * zB,
          to: (BB + 1) * zB
        }
      }
      let QB = Math.floor((BB - jB) / zB);
      return {
        from: BB - (QB + 1) * zB,
        to: BB - QB * zB
      }
    }
    class qB {
      constructor(BB, jB, zB) {
        this.view = BB, this.stateField = jB, this.applyCompletion = zB, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: BB => this.placeInfo(BB),
          key: this
        }, this.space = null, this.currentClass = "";
        let QB = BB.state.field(jB),
          {
            options: nB,
            selected: dB
          } = QB.open,
          IB = BB.state.facet(tB);
        this.optionContent = function(BB) {
          let jB = BB.addToOptions.slice();
          return BB.icons && jB.push({
            render(BB) {
              let jB = document.createElement("div");
              return jB.classList.add("cm-completionIcon"), BB.type && jB.classList.add(...BB.type.split(/\s+/g).map((BB => "cm-completionIcon-" + BB))), jB.setAttribute("aria-hidden", "true"), jB
            },
            position: 20
          }), jB.push({
            render(BB, jB, zB, QB) {
              let nB = document.createElement("span");
              nB.className = "cm-completionLabel";
              let dB = BB.displayLabel || BB.label,
                IB = 0;
              for (let NB = 0; NB < QB.length;) {
                let BB = QB[NB++],
                  jB = QB[NB++];
                BB > IB && nB.appendChild(document.createTextNode(dB.slice(IB, BB)));
                let zB = nB.appendChild(document.createElement("span"));
                zB.appendChild(document.createTextNode(dB.slice(BB, jB))), zB.className = "cm-completionMatchedText", IB = jB
              }
              return IB < dB.length && nB.appendChild(document.createTextNode(dB.slice(IB))), nB
            },
            position: 50
          }, {
            render(BB) {
              if (!BB.detail) return null;
              let jB = document.createElement("span");
              return jB.className = "cm-completionDetail", jB.textContent = BB.detail, jB
            },
            position: 80
          }), jB.sort(((BB, jB) => BB.position - jB.position)).map((BB => BB.render))
        }(IB), this.optionClass = IB.optionClass, this.tooltipClass = IB.tooltipClass, this.range = iB(nB.length, dB, IB.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(BB.state), this.dom.addEventListener("mousedown", (zB => {
          let {
            options: QB
          } = BB.state.field(jB).open;
          for (let jB, nB = zB.target; nB && nB != this.dom; nB = nB.parentNode)
            if ("LI" == nB.nodeName && (jB = /-(\d+)$/.exec(nB.id)) && +jB[1] < QB.length) return this.applyCompletion(BB, QB[+jB[1]]), void zB.preventDefault();
          if (zB.target == this.list) {
            let jB = this.list.classList.contains("cm-completionListIncompleteTop") && zB.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && zB.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != jB && (BB.dispatch({
              effects: EB.of(jB)
            }), zB.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (jB => {
          let zB = BB.state.field(this.stateField, !1);
          zB && zB.tooltip && BB.state.facet(tB).closeOnBlur && jB.relatedTarget != BB.contentDOM && BB.dispatch({
            effects: GB.of(null)
          })
        })), this.showOptions(nB, QB.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(BB, jB) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(BB, jB, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(BB) {
        var jB;
        let zB = BB.state.field(this.stateField),
          QB = BB.startState.field(this.stateField);
        if (this.updateTooltipClass(BB.state), zB != QB) {
          let {
            options: nB,
            selected: dB,
            disabled: IB
          } = zB.open;
          QB.open && QB.open.options == nB || (this.range = iB(nB.length, dB, BB.state.facet(tB).maxRenderedOptions), this.showOptions(nB, zB.id)), this.updateSel(), IB != (null === (jB = QB.open) || void 0 === jB ? void 0 : jB.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!IB)
        }
      }
      updateTooltipClass(BB) {
        let jB = this.tooltipClass(BB);
        if (jB != this.currentClass) {
          for (let BB of this.currentClass.split(" ")) BB && this.dom.classList.remove(BB);
          for (let BB of jB.split(" ")) BB && this.dom.classList.add(BB);
          this.currentClass = jB
        }
      }
      positioned(BB) {
        this.space = BB, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let BB = this.view.state.field(this.stateField),
          jB = BB.open;
        (jB.selected > -1 && jB.selected < this.range.from || jB.selected >= this.range.to) && (this.range = iB(jB.options.length, jB.selected, this.view.state.facet(tB).maxRenderedOptions), this.showOptions(jB.options, BB.id));
        let zB = this.updateSelectedOption(jB.selected);
        if (zB) {
          this.destroyInfo();
          let {
            completion: QB
          } = jB.options[jB.selected], {
            info: dB
          } = QB;
          if (!dB) return;
          let IB = "string" === typeof dB ? document.createTextNode(dB) : dB(QB);
          if (!IB) return;
          "then" in IB ? IB.then((jB => {
            jB && this.view.state.field(this.stateField, !1) == BB && this.addInfoPane(jB, QB)
          })).catch((BB => (0, nB._)(this.view.state, BB, "completion info"))) : (this.addInfoPane(IB, QB), zB.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(BB, jB) {
        this.destroyInfo();
        let zB = this.info = document.createElement("div");
        if (zB.className = "cm-tooltip cm-completionInfo", zB.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != BB.nodeType) zB.appendChild(BB), this.infoDestroy = null;
        else {
          let {
            dom: jB,
            destroy: QB
          } = BB;
          zB.appendChild(jB), this.infoDestroy = QB || null
        }
        this.dom.appendChild(zB), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(BB) {
        let jB = null;
        for (let zB = this.list.firstChild, QB = this.range.from; zB; zB = zB.nextSibling, QB++) "LI" == zB.nodeName && zB.id ? QB == BB ? zB.hasAttribute("aria-selected") || (zB.setAttribute("aria-selected", "true"), jB = zB) : zB.hasAttribute("aria-selected") && (zB.removeAttribute("aria-selected"), zB.removeAttribute("aria-describedby")) : QB--;
        return jB && function(BB, jB) {
          let zB = BB.getBoundingClientRect(),
            QB = jB.getBoundingClientRect(),
            nB = zB.height / BB.offsetHeight;
          QB.top < zB.top ? BB.scrollTop -= (zB.top - QB.top) / nB : QB.bottom > zB.bottom && (BB.scrollTop += (QB.bottom - zB.bottom) / nB)
        }(this.list, jB), jB
      }
      measureInfo() {
        let BB = this.dom.querySelector("[aria-selected]");
        if (!BB || !this.info) return null;
        let jB = this.dom.getBoundingClientRect(),
          zB = this.info.getBoundingClientRect(),
          QB = BB.getBoundingClientRect(),
          nB = this.space;
        if (!nB) {
          let BB = this.dom.ownerDocument.documentElement;
          nB = {
            left: 0,
            top: 0,
            right: BB.clientWidth,
            bottom: BB.clientHeight
          }
        }
        return QB.top > Math.min(nB.bottom, jB.bottom) - 10 || QB.bottom < Math.max(nB.top, jB.top) + 10 ? null : this.view.state.facet(tB).positionInfo(this.view, jB, QB, zB, nB, this.dom)
      }
      placeInfo(BB) {
        this.info && (BB ? (BB.style && (this.info.style.cssText = BB.style), this.info.className = "cm-tooltip cm-completionInfo " + (BB.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(BB, jB, zB) {
        const QB = document.createElement("ul");
        QB.id = jB, QB.setAttribute("role", "listbox"), QB.setAttribute("aria-expanded", "true"), QB.setAttribute("aria-label", this.view.state.phrase("Completions")), QB.addEventListener("mousedown", (BB => {
          BB.target == QB && BB.preventDefault()
        }));
        let nB = null;
        for (let dB = zB.from; dB < zB.to; dB++) {
          let {
            completion: IB,
            match: NB
          } = BB[dB], {
            section: uB
          } = IB;
          if (uB) {
            let BB = "string" == typeof uB ? uB : uB.name;
            if (BB != nB && (dB > zB.from || 0 == zB.from))
              if (nB = BB, "string" != typeof uB && uB.header) QB.appendChild(uB.header(uB));
              else {
                QB.appendChild(document.createElement("completion-section")).textContent = BB
              }
          }
          const UB = QB.appendChild(document.createElement("li"));
          UB.id = jB + "-" + dB, UB.setAttribute("role", "option");
          let aB = this.optionClass(IB);
          aB && (UB.className = aB);
          for (let BB of this.optionContent) {
            let jB = BB(IB, this.view.state, this.view, NB);
            jB && UB.appendChild(jB)
          }
        }
        return zB.from && QB.classList.add("cm-completionListIncompleteTop"), zB.to < BB.length && QB.classList.add("cm-completionListIncompleteBottom"), QB
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function fB(BB, jB) {
      return zB => new qB(zB, BB, jB)
    }

    function oB(BB) {
      return 100 * (BB.boost || 0) + (BB.apply ? 10 : 0) + (BB.info ? 5 : 0) + (BB.type ? 1 : 0)
    }
    class HB {
      constructor(BB, jB, zB, QB, nB, dB) {
        this.options = BB, this.attrs = jB, this.tooltip = zB, this.timestamp = QB, this.selected = nB, this.disabled = dB
      }
      setSelected(BB, jB) {
        return BB == this.selected || BB >= this.options.length ? this : new HB(this.options, VB(jB, BB), this.tooltip, this.timestamp, BB, this.disabled)
      }
      static build(BB, jB, zB, QB, nB, dB) {
        if (QB && !dB && BB.some((BB => BB.isPending))) return QB.setDisabled();
        let IB = function(BB, jB) {
          let zB = [],
            QB = null,
            nB = null,
            dB = BB => {
              zB.push(BB);
              let {
                section: jB
              } = BB.completion;
              if (jB) {
                QB || (QB = []);
                let BB = "string" == typeof jB ? jB : jB.name;
                QB.some((jB => jB.name == BB)) || QB.push("string" == typeof jB ? {
                  name: BB
                } : jB)
              }
            },
            IB = jB.facet(tB);
          for (let pB of BB)
            if (pB.hasResult()) {
              let BB = pB.result.getMatch;
              if (!1 === pB.result.filter)
                for (let jB of pB.result.options) dB(new aB(jB, pB.source, BB ? BB(jB) : [], 1e9 - zB.length));
              else {
                let zB, QB = jB.sliceDoc(pB.from, pB.to),
                  NB = IB.filterStrict ? new gB(QB) : new LB(QB);
                for (let jB of pB.result.options)
                  if (zB = NB.match(jB.label)) {
                    let QB = jB.displayLabel ? BB ? BB(jB, zB.matched) : [] : zB.matched,
                      IB = zB.score + (jB.boost || 0);
                    if (dB(new aB(jB, pB.source, QB, IB)), "object" == typeof jB.section && "dynamic" === jB.section.rank) {
                      let {
                        name: BB
                      } = jB.section;
                      nB || (nB = Object.create(null)), nB[BB] = Math.max(IB, nB[BB] || -1e9)
                    }
                  }
              }
            } if (QB) {
            let BB = Object.create(null),
              jB = 0,
              dB = (BB, jB) => ("dynamic" === BB.rank && "dynamic" === jB.rank ? nB[jB.name] - nB[BB.name] : 0) || ("number" == typeof BB.rank ? BB.rank : 1e9) - ("number" == typeof jB.rank ? jB.rank : 1e9) || (BB.name < jB.name ? -1 : 1);
            for (let zB of QB.sort(dB)) jB -= 1e5, BB[zB.name] = jB;
            for (let QB of zB) {
              let {
                section: jB
              } = QB.completion;
              jB && (QB.score += BB["string" == typeof jB ? jB : jB.name])
            }
          }
          let NB = [],
            uB = null,
            UB = IB.compareCompletions;
          for (let aB of zB.sort(((BB, jB) => jB.score - BB.score || UB(BB.completion, jB.completion)))) {
            let BB = aB.completion;
            !uB || uB.label != BB.label || uB.detail != BB.detail || null != uB.type && null != BB.type && uB.type != BB.type || uB.apply != BB.apply || uB.boost != BB.boost ? NB.push(aB) : oB(aB.completion) > oB(uB) && (NB[NB.length - 1] = aB), uB = aB.completion
          }
          return NB
        }(BB, jB);
        if (!IB.length) return QB && BB.some((BB => BB.isPending)) ? QB.setDisabled() : null;
        let NB = jB.facet(tB).selectOnOpen ? 0 : -1;
        if (QB && QB.selected != NB && -1 != QB.selected) {
          let BB = QB.options[QB.selected].completion;
          for (let jB = 0; jB < IB.length; jB++)
            if (IB[jB].completion == BB) {
              NB = jB;
              break
            }
        }
        return new HB(IB, VB(zB, NB), {
          pos: BB.reduce(((BB, jB) => jB.hasResult() ? Math.min(BB, jB.from) : BB), 1e8),
          create: eB,
          above: nB.aboveCursor
        }, QB ? QB.timestamp : Date.now(), NB, !1)
      }
      map(BB) {
        return new HB(this.options, this.attrs, {
          ...this.tooltip,
          pos: BB.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new HB(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class DB {
      constructor(BB, jB, zB) {
        this.active = BB, this.id = jB, this.open = zB
      }
      static start() {
        return new DB(hB, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(BB) {
        let {
          state: jB
        } = BB, zB = jB.facet(tB), QB = (zB.override || jB.languageDataAt("autocomplete", pB(jB)).map(yB)).map((jB => (this.active.find((BB => BB.source == jB)) || new ZB(jB, this.active.some((BB => 0 != BB.state)) ? 1 : 0)).update(BB, zB)));
        QB.length == this.active.length && QB.every(((BB, jB) => BB == this.active[jB])) && (QB = this.active);
        let nB = this.open,
          dB = BB.effects.some((BB => BB.is(TB)));
        nB && BB.docChanged && (nB = nB.map(BB.changes)), BB.selection || QB.some((jB => jB.hasResult() && BB.changes.touchesRange(jB.from, jB.to))) || ! function(BB, jB) {
          if (BB == jB) return !0;
          for (let zB = 0, QB = 0;;) {
            for (; zB < BB.length && !BB[zB].hasResult();) zB++;
            for (; QB < jB.length && !jB[QB].hasResult();) QB++;
            let nB = zB == BB.length,
              dB = QB == jB.length;
            if (nB || dB) return nB == dB;
            if (BB[zB++].result != jB[QB++].result) return !1
          }
        }(QB, this.active) || dB ? nB = HB.build(QB, jB, this.id, nB, zB, dB) : nB && nB.disabled && !QB.some((BB => BB.isPending)) && (nB = null), !nB && QB.every((BB => !BB.isPending)) && QB.some((BB => BB.hasResult())) && (QB = QB.map((BB => BB.hasResult() ? new ZB(BB.source, 0) : BB)));
        for (let IB of BB.effects) IB.is(EB) && (nB = nB && nB.setSelected(IB.value, this.id));
        return QB == this.active && nB == this.open ? this : new DB(QB, this.id, nB)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? FB : YB
      }
    }
    const FB = {
        "aria-autocomplete": "list"
      },
      YB = {};

    function VB(BB, jB) {
      let zB = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": BB
      };
      return jB > -1 && (zB["aria-activedescendant"] = BB + "-" + jB), zB
    }
    const hB = [];

    function XB(BB, jB) {
      if (BB.isUserEvent("input.complete")) {
        let zB = BB.annotation(sB);
        if (zB && jB.activateOnCompletion(zB)) return 12
      }
      let zB = BB.isUserEvent("input.type");
      return zB && jB.activateOnTyping ? 5 : zB ? 1 : BB.isUserEvent("delete.backward") ? 2 : BB.selection ? 8 : BB.docChanged ? 16 : 0
    }
    class ZB {
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = BB, this.state = jB, this.explicit = zB
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(BB, jB) {
        let zB = XB(BB, jB),
          QB = this;
        (8 & zB || 16 & zB && this.touches(BB)) && (QB = new ZB(QB.source, 0)), 4 & zB && 0 == QB.state && (QB = new ZB(this.source, 1)), QB = QB.updateFor(BB, zB);
        for (let nB of BB.effects)
          if (nB.is(kB)) QB = new ZB(QB.source, 1, nB.value);
          else if (nB.is(GB)) QB = new ZB(QB.source, 0);
        else if (nB.is(TB))
          for (let BB of nB.value) BB.source == QB.source && (QB = BB);
        return QB
      }
      updateFor(BB, jB) {
        return this.map(BB.changes)
      }
      map(BB) {
        return this
      }
      touches(BB) {
        return BB.changes.touchesRange(pB(BB.state))
      }
    }
    class AB extends ZB {
      constructor(BB, jB, zB, QB, nB, dB) {
        super(BB, 3, jB), this.limit = zB, this.result = QB, this.from = nB, this.to = dB
      }
      hasResult() {
        return !0
      }
      updateFor(BB, jB) {
        var zB;
        if (!(3 & jB)) return this.map(BB.changes);
        let QB = this.result;
        QB.map && !BB.changes.empty && (QB = QB.map(QB, BB.changes));
        let nB = BB.changes.mapPos(this.from),
          dB = BB.changes.mapPos(this.to, 1),
          NB = pB(BB.state);
        if (NB > dB || !QB || 2 & jB && (pB(BB.startState) == this.from || NB < this.limit)) return new ZB(this.source, 4 & jB ? 1 : 0);
        let uB = BB.changes.mapPos(this.limit);
        return function(BB, jB, zB, QB) {
          if (!BB) return !1;
          let nB = jB.sliceDoc(zB, QB);
          return "function" == typeof BB ? BB(nB, zB, QB, jB) : rB(BB, !0).test(nB)
        }(QB.validFor, BB.state, nB, dB) ? new AB(this.source, this.explicit, uB, QB, nB, dB) : QB.update && (QB = QB.update(QB, nB, dB, new IB(BB.state, NB, !1))) ? new AB(this.source, this.explicit, uB, QB, QB.from, null !== (zB = QB.to) && void 0 !== zB ? zB : pB(BB.state)) : new ZB(this.source, 1, this.explicit)
      }
      map(BB) {
        if (BB.empty) return this;
        return (this.result.map ? this.result.map(this.result, BB) : this.result) ? new AB(this.source, this.explicit, BB.mapPos(this.limit), this.result, BB.mapPos(this.from), BB.mapPos(this.to, 1)) : new ZB(this.source, 0)
      }
      touches(BB) {
        return BB.changes.touchesRange(this.from, this.to)
      }
    }
    const TB = QB.D.define({
        map: (BB, jB) => BB.map((BB => BB.map(jB)))
      }),
      PB = QB.F.define({
        create: () => DB.start(),
        update: (BB, jB) => BB.update(jB),
        provide: BB => [nB.lb.from(BB, (BB => BB.tooltip)), nB.k.contentAttributes.from(BB, (BB => BB.attrs))]
      });

    function WB(BB, jB) {
      const zB = jB.completion.apply || jB.completion.label;
      let QB = BB.state.field(PB).active.find((BB => BB.source == jB.source));
      return QB instanceof AB && ("string" == typeof zB ? BB.dispatch({
        ...JB(BB.state, zB, QB.from, QB.to),
        annotations: sB.of(jB.completion)
      }) : zB(BB, jB.completion, QB.from, QB.to), !0)
    }
    const eB = fB(PB, WB);

    function lB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return zB => {
        let QB = zB.state.field(PB, !1);
        if (!QB || !QB.open || QB.open.disabled || Date.now() - QB.open.timestamp < zB.state.facet(tB).interactionDelay) return !1;
        let dB, IB = 1;
        "page" == jB && (dB = (0, nB.D)(zB, QB.open.tooltip)) && (IB = Math.max(2, Math.floor(dB.dom.offsetHeight / dB.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: NB
        } = QB.open.options, uB = QB.open.selected > -1 ? QB.open.selected + IB * (BB ? 1 : -1) : BB ? 0 : NB - 1;
        return uB < 0 ? uB = "page" == jB ? 0 : NB - 1 : uB >= NB && (uB = "page" == jB ? NB - 1 : 0), zB.dispatch({
          effects: EB.of(uB)
        }), !0
      }
    }
    const wB = BB => !!BB.state.field(PB, !1) && (BB.dispatch({
      effects: kB.of(!0)
    }), !0);
    class xB {
      constructor(BB, jB) {
        this.active = BB, this.context = jB, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const KB = nB.o.fromClass(class {
        constructor(BB) {
          this.view = BB, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let jB of BB.state.field(PB).active) jB.isPending && this.startQuery(jB)
        }
        update(BB) {
          let jB = BB.state.field(PB),
            zB = BB.state.facet(tB);
          if (!BB.selectionSet && !BB.docChanged && BB.startState.field(PB) == jB) return;
          let QB = BB.transactions.some((BB => {
            let jB = XB(BB, zB);
            return 8 & jB || (BB.selection || BB.docChanged) && !(3 & jB)
          }));
          for (let NB = 0; NB < this.running.length; NB++) {
            let jB = this.running[NB];
            if (QB || jB.context.abortOnDocChange && BB.docChanged || jB.updates.length + BB.transactions.length > 50 && Date.now() - jB.time > 1e3) {
              for (let BB of jB.context.abortListeners) try {
                BB()
              } catch (IB) {
                (0, nB._)(this.view.state, IB)
              }
              jB.context.abortListeners = null, this.running.splice(NB--, 1)
            } else jB.updates.push(...BB.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), BB.transactions.some((BB => BB.effects.some((BB => BB.is(kB))))) && (this.pendingStart = !0);
          let dB = this.pendingStart ? 50 : zB.activateOnTypingDelay;
          if (this.debounceUpdate = jB.active.some((BB => BB.isPending && !this.running.some((jB => jB.active.source == BB.source)))) ? setTimeout((() => this.startUpdate()), dB) : -1, 0 != this.composing)
            for (let nB of BB.transactions) nB.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && nB.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: BB
          } = this.view, jB = BB.field(PB);
          for (let zB of jB.active) zB.isPending && !this.running.some((BB => BB.active.source == zB.source)) && this.startQuery(zB);
          this.running.length && jB.open && jB.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(tB).updateSyncTime))
        }
        startQuery(BB) {
          let {
            state: jB
          } = this.view, zB = pB(jB), QB = new IB(jB, zB, BB.explicit, this.view), dB = new xB(BB, QB);
          this.running.push(dB), Promise.resolve(BB.source(QB)).then((BB => {
            dB.context.aborted || (dB.done = BB || null, this.scheduleAccept())
          }), (BB => {
            this.view.dispatch({
              effects: GB.of(null)
            }), (0, nB._)(this.view.state, BB)
          }))
        }
        scheduleAccept() {
          this.running.every((BB => void 0 !== BB.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(tB).updateSyncTime))
        }
        accept() {
          var BB;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let jB = [],
            zB = this.view.state.facet(tB),
            QB = this.view.state.field(PB);
          for (let nB = 0; nB < this.running.length; nB++) {
            let dB = this.running[nB];
            if (void 0 === dB.done) continue;
            if (this.running.splice(nB--, 1), dB.done) {
              let QB = pB(dB.updates.length ? dB.updates[0].startState : this.view.state),
                nB = Math.min(QB, dB.done.from + (dB.active.explicit ? 0 : 1)),
                IB = new AB(dB.active.source, dB.active.explicit, nB, dB.done, dB.done.from, null !== (BB = dB.done.to) && void 0 !== BB ? BB : QB);
              for (let BB of dB.updates) IB = IB.update(BB, zB);
              if (IB.hasResult()) {
                jB.push(IB);
                continue
              }
            }
            let IB = QB.active.find((BB => BB.source == dB.active.source));
            if (IB && IB.isPending)
              if (null == dB.done) {
                let BB = new ZB(dB.active.source, 0);
                for (let jB of dB.updates) BB = BB.update(jB, zB);
                BB.isPending || jB.push(BB)
              } else this.startQuery(IB)
          }(jB.length || QB.open && QB.open.disabled) && this.view.dispatch({
            effects: TB.of(jB)
          })
        }
      }, {
        eventHandlers: {
          blur(BB) {
            let jB = this.view.state.field(PB, !1);
            if (jB && jB.tooltip && this.view.state.facet(tB).closeOnBlur) {
              let zB = jB.open && (0, nB.D)(this.view, jB.open.tooltip);
              zB && zB.dom.contains(BB.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: GB.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: kB.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      CB = "object" == typeof navigator && /Win/.test(navigator.platform),
      cB = QB.u.highest(nB.k.domEventHandlers({
        keydown(BB, jB) {
          let zB = jB.state.field(PB, !1);
          if (!zB || !zB.open || zB.open.disabled || zB.open.selected < 0 || BB.key.length > 1 || BB.ctrlKey && (!CB || !BB.altKey) || BB.metaKey) return !1;
          let QB = zB.open.options[zB.open.selected],
            nB = zB.active.find((BB => BB.source == QB.source)),
            dB = QB.completion.commitCharacters || nB.result.commitCharacters;
          return dB && dB.indexOf(BB.key) > -1 && WB(jB, QB), !1
        }
      })),
      bB = nB.k.baseTheme({
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
    class vB {
      constructor(BB, jB, zB, QB) {
        this.field = BB, this.line = jB, this.from = zB, this.to = QB
      }
    }
    class RB {
      constructor(BB, jB, zB) {
        this.field = BB, this.from = jB, this.to = zB
      }
      map(BB) {
        let jB = BB.mapPos(this.from, -1, QB.t.TrackDel),
          zB = BB.mapPos(this.to, 1, QB.t.TrackDel);
        return null == jB || null == zB ? null : new RB(this.field, jB, zB)
      }
    }
    class OB {
      constructor(BB, jB) {
        this.lines = BB, this.fieldPositions = jB
      }
      instantiate(BB, jB) {
        let zB = [],
          QB = [jB],
          nB = BB.doc.lineAt(jB),
          IB = /^\s*/.exec(nB.text)[0];
        for (let uB of this.lines) {
          if (zB.length) {
            let zB = IB,
              nB = /^\t*/.exec(uB)[0].length;
            for (let jB = 0; jB < nB; jB++) zB += BB.facet(dB.$);
            QB.push(jB + zB.length - nB), uB = zB + uB.slice(nB)
          }
          zB.push(uB), jB += uB.length + 1
        }
        let NB = this.fieldPositions.map((BB => new RB(BB.field, QB[BB.line] + BB.from, QB[BB.line] + BB.to)));
        return {
          text: zB,
          gy: NB
        }
      }
      static parse(BB) {
        let jB, zB = [],
          QB = [],
          nB = [];
        for (let dB of BB.split(/\r\n?|\n/)) {
          for (; jB = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(dB);) {
            let BB = jB[1] ? +jB[1] : null,
              IB = jB[2] || jB[3] || "",
              NB = -1,
              uB = IB.replace(/\\[{}]/g, (BB => BB[1]));
            for (let jB = 0; jB < zB.length; jB++)(null != BB ? zB[jB].seq == BB : uB && zB[jB].name == uB) && (NB = jB);
            if (NB < 0) {
              let jB = 0;
              for (; jB < zB.length && (null == BB || null != zB[jB].seq && zB[jB].seq < BB);) jB++;
              zB.splice(jB, 0, {
                seq: BB,
                name: uB
              }), NB = jB;
              for (let BB of nB) BB.field >= NB && BB.field++
            }
            for (let zB of nB)
              if (zB.line == QB.length && zB.from > jB.index) {
                let BB = jB[2] ? 3 + (jB[1] || "").length : 2;
                zB.from -= BB, zB.to -= BB
              } nB.push(new vB(NB, QB.length, jB.index, jB.index + uB.length)), dB = dB.slice(0, jB.index) + IB + dB.slice(jB.index + jB[0].length)
          }
          dB = dB.replace(/\\([{}])/g, ((BB, jB, zB) => {
            for (let dB of nB) dB.line == QB.length && dB.from > zB && (dB.from--, dB.to--);
            return jB
          })), QB.push(dB)
        }
        return new OB(QB, nB)
      }
    }
    let Bj = nB.d.widget({
        widget: new class extends nB.r {
          toDOM() {
            let BB = document.createElement("span");
            return BB.className = "cm-snippetFieldPosition", BB
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      jj = nB.d.mark({
        class: "cm-snippetField"
      });
    class zj {
      constructor(BB, jB) {
        this.gy = BB, this.active = jB, this.deco = nB.d.set(BB.map((BB => (BB.from == BB.to ? Bj : jj).range(BB.from, BB.to))), !0)
      }
      map(BB) {
        let jB = [];
        for (let zB of this.gy) {
          let QB = zB.map(BB);
          if (!QB) return null;
          jB.push(QB)
        }
        return new zj(jB, this.active)
      }
      selectionInsideField(BB) {
        return BB.gy.every((BB => this.gy.some((jB => jB.field == this.active && jB.from <= BB.from && jB.to >= BB.to))))
      }
    }
    const Qj = QB.D.define({
        map: (BB, jB) => BB && BB.map(jB)
      }),
      nj = QB.D.define(),
      dj = QB.F.define({
        create: () => null,
        update(BB, jB) {
          for (let zB of jB.effects) {
            if (zB.is(Qj)) return zB.value;
            if (zB.is(nj) && BB) return new zj(BB.gy, zB.value)
          }
          return BB && jB.docChanged && (BB = BB.map(jB.changes)), BB && jB.selection && !BB.selectionInsideField(jB.selection) && (BB = null), BB
        },
        provide: BB => nB.k.pQ.from(BB, (BB => BB ? BB.deco : nB.d.none))
      });

    function Ij(BB, jB) {
      return QB.i.create(BB.filter((BB => BB.field == jB)).map((BB => QB.i.range(BB.from, BB.to))))
    }

    function Nj(BB) {
      let jB = OB.parse(BB);
      return (BB, zB, nB, dB) => {
        let {
          text: IB,
          gy: NB
        } = jB.instantiate(BB.state, nB), {
          main: uB
        } = BB.state.selection, UB = {
          changes: {
            from: nB,
            to: dB == uB.from ? uB.to : dB,
            insert: QB.G.of(IB)
          },
          scrollIntoView: !0,
          annotations: zB ? [sB.of(zB), QB.I.userEvent.of("input.complete")] : void 0
        };
        if (NB.length && (UB.selection = Ij(NB, 0)), NB.some((BB => BB.field > 0))) {
          let jB = new zj(NB, 0),
            zB = UB.effects = [Qj.of(jB)];
          void 0 === BB.state.field(dj, !1) && zB.push(QB.D.appendConfig.of([dj, pj, sj, bB]))
        }
        BB.dispatch(BB.state.update(UB))
      }
    }

    function uj(BB) {
      return jB => {
        let {
          state: zB,
          dispatch: QB
        } = jB, nB = zB.field(dj, !1);
        if (!nB || BB < 0 && 0 == nB.active) return !1;
        let dB = nB.active + BB,
          IB = BB > 0 && !nB.gy.some((jB => jB.field == dB + BB));
        return QB(zB.update({
          selection: Ij(nB.gy, dB),
          effects: Qj.of(IB ? null : new zj(nB.gy, dB)),
          scrollIntoView: !0
        })), !0
      }
    }
    const Uj = [{
        key: "Tab",
        run: uj(1),
        shift: uj(-1)
      }, {
        key: "Escape",
        run: BB => {
          let {
            state: jB,
            dispatch: zB
          } = BB;
          return !!jB.field(dj, !1) && (zB(jB.update({
            effects: Qj.of(null)
          })), !0)
        }
      }],
      aj = QB.p.define({
        combine: BB => BB.length ? BB[0] : Uj
      }),
      pj = QB.u.highest(nB.S.compute([aj], (BB => BB.facet(aj))));

    function rj(BB, jB) {
      return {
        ...jB,
        apply: Nj(BB)
      }
    }
    const sj = nB.k.domEventHandlers({
      mousedown(BB, jB) {
        let zB, QB = jB.state.field(dj, !1);
        if (!QB || null == (zB = jB.posAtCoords({
            x: BB.clientX,
            y: BB.clientY
          }))) return !1;
        let nB = QB.gy.find((BB => BB.from <= zB && BB.to >= zB));
        return !(!nB || nB.field == QB.active) && (jB.dispatch({
          selection: Ij(QB.gy, nB.field),
          effects: Qj.of(QB.gy.some((BB => BB.field > nB.field)) ? new zj(QB.gy, nB.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const Jj = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      mj = QB.D.define({
        map(BB, jB) {
          let zB = jB.mapPos(BB, -1, QB.t.TrackAfter);
          return null == zB ? void 0 : zB
        }
      }),
      yj = new class extends QB.B {};
    yj.startSide = 1, yj.endSide = -1;
    const kj = QB.F.define({
      create: () => QB.z.empty,
      update(BB, jB) {
        if (BB = BB.map(jB.changes), jB.selection) {
          let zB = jB.state.doc.lineAt(jB.selection.main.head);
          BB = BB.update({
            filter: BB => BB >= zB.from && BB <= zB.to
          })
        }
        for (let zB of jB.effects) zB.is(mj) && (BB = BB.update({
          add: [yj.range(zB.value, zB.value + 1)]
        }));
        return BB
      }
    });

    function Gj() {
      return [Mj, kj]
    }
    const Lj = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function gj(BB) {
      for (let jB = 0; jB < 16; jB += 2)
        if (Lj.charCodeAt(jB) == BB) return Lj.charAt(jB + 1);
      return (0, QB.W)(BB < 128 ? BB : BB + 1)
    }

    function tj(BB, jB) {
      return BB.languageDataAt("closeBrackets", jB)[0] || Jj
    }
    const Sj = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      Mj = nB.k.inputHandler.of(((BB, jB, zB, nB) => {
        if ((Sj ? BB.composing : BB.compositionStarted) || BB.state.readOnly) return !1;
        let dB = BB.state.selection.main;
        if (nB.length > 2 || 2 == nB.length && 1 == (0, QB.M)((0, QB.L)(nB, 0)) || jB != dB.from || zB != dB.to) return !1;
        let IB = function(BB, jB) {
          let zB = tj(BB, BB.selection.main.head),
            nB = zB.brackets || Jj.brackets;
          for (let dB of nB) {
            let IB = gj((0, QB.L)(dB, 0));
            if (jB == dB) return IB == dB ? Hj(BB, dB, nB.indexOf(dB + dB + dB) > -1, zB) : fj(BB, dB, IB, zB.before || Jj.before);
            if (jB == IB && ij(BB, BB.selection.main.from)) return oj(BB, dB, IB)
          }
          return null
        }(BB.state, nB);
        return !!IB && (BB.dispatch(IB), !0)
      })),
      Ej = [{
        key: "Backspace",
        run: BB => {
          let {
            state: jB,
            dispatch: zB
          } = BB;
          if (jB.readOnly) return !1;
          let nB = tj(jB, jB.selection.main.head).brackets || Jj.brackets,
            dB = null,
            IB = jB.changeByRange((BB => {
              if (BB.empty) {
                let zB = function(BB, jB) {
                  let zB = BB.sliceString(jB - 2, jB);
                  return (0, QB.M)((0, QB.L)(zB, 0)) == zB.length ? zB : zB.slice(1)
                }(jB.doc, BB.head);
                for (let dB of nB)
                  if (dB == zB && qj(jB.doc, BB.head) == gj((0, QB.L)(dB, 0))) return {
                    changes: {
                      from: BB.head - dB.length,
                      to: BB.head + dB.length
                    },
                    range: QB.i.cursor(BB.head - dB.length)
                  }
              }
              return {
                range: dB = BB
              }
            }));
          return dB || zB(jB.update(IB, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !dB
        }
      }];

    function ij(BB, jB) {
      let zB = !1;
      return BB.field(kj).between(0, BB.doc.length, (BB => {
        BB == jB && (zB = !0)
      })), zB
    }

    function qj(BB, jB) {
      let zB = BB.sliceString(jB, jB + 2);
      return zB.slice(0, (0, QB.M)((0, QB.L)(zB, 0)))
    }

    function fj(BB, jB, zB, nB) {
      let dB = null,
        IB = BB.changeByRange((IB => {
          if (!IB.empty) return {
            changes: [{
              insert: jB,
              from: IB.from
            }, {
              insert: zB,
              from: IB.to
            }],
            effects: mj.of(IB.to + jB.length),
            range: QB.i.range(IB.anchor + jB.length, IB.head + jB.length)
          };
          let NB = qj(BB.doc, IB.head);
          return !NB || /\s/.test(NB) || nB.indexOf(NB) > -1 ? {
            changes: {
              insert: jB + zB,
              from: IB.head
            },
            effects: mj.of(IB.head + jB.length),
            range: QB.i.cursor(IB.head + jB.length)
          } : {
            range: dB = IB
          }
        }));
      return dB ? null : BB.update(IB, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function oj(BB, jB, zB) {
      let nB = null,
        dB = BB.changeByRange((jB => jB.empty && qj(BB.doc, jB.head) == zB ? {
          changes: {
            from: jB.head,
            to: jB.head + zB.length,
            insert: zB
          },
          range: QB.i.cursor(jB.head + zB.length)
        } : nB = {
          range: jB
        }));
      return nB ? null : BB.update(dB, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Hj(BB, jB, zB, nB) {
      let IB = nB.stringPrefixes || Jj.stringPrefixes,
        NB = null,
        uB = BB.changeByRange((nB => {
          if (!nB.empty) return {
            changes: [{
              insert: jB,
              from: nB.from
            }, {
              insert: jB,
              from: nB.to
            }],
            effects: mj.of(nB.to + jB.length),
            range: QB.i.range(nB.anchor + jB.length, nB.head + jB.length)
          };
          let uB, UB = nB.head,
            aB = qj(BB.doc, UB);
          if (aB == jB) {
            if (Dj(BB, UB)) return {
              changes: {
                insert: jB + jB,
                from: UB
              },
              effects: mj.of(UB + jB.length),
              range: QB.i.cursor(UB + jB.length)
            };
            if (ij(BB, UB)) {
              let nB = zB && BB.sliceDoc(UB, UB + 3 * jB.length) == jB + jB + jB ? jB + jB + jB : jB;
              return {
                changes: {
                  from: UB,
                  to: UB + nB.length,
                  insert: nB
                },
                range: QB.i.cursor(UB + nB.length)
              }
            }
          } else {
            if (zB && BB.sliceDoc(UB - 2 * jB.length, UB) == jB + jB && (uB = Fj(BB, UB - 2 * jB.length, IB)) > -1 && Dj(BB, uB)) return {
              changes: {
                insert: jB + jB + jB + jB,
                from: UB
              },
              effects: mj.of(UB + jB.length),
              range: QB.i.cursor(UB + jB.length)
            };
            if (BB.charCategorizer(UB)(aB) != QB.e.Word && Fj(BB, UB, IB) > -1 && ! function(BB, jB, zB, QB) {
                let nB = (0, dB.lb)(BB).resolveInner(jB, -1),
                  IB = QB.reduce(((BB, jB) => Math.max(BB, jB.length)), 0);
                for (let dB = 0; dB < 5; dB++) {
                  let dB = BB.sliceDoc(nB.from, Math.min(nB.to, nB.from + zB.length + IB)),
                    NB = dB.indexOf(zB);
                  if (!NB || NB > -1 && QB.indexOf(dB.slice(0, NB)) > -1) {
                    let jB = nB.firstChild;
                    for (; jB && jB.from == nB.from && jB.to - jB.from > zB.length + NB;) {
                      if (BB.sliceDoc(jB.to - zB.length, jB.to) == zB) return !1;
                      jB = jB.firstChild
                    }
                    return !0
                  }
                  let uB = nB.to == jB && nB.parent;
                  if (!uB) break;
                  nB = uB
                }
                return !1
              }(BB, UB, jB, IB)) return {
              changes: {
                insert: jB + jB,
                from: UB
              },
              effects: mj.of(UB + jB.length),
              range: QB.i.cursor(UB + jB.length)
            }
          }
          return {
            range: NB = nB
          }
        }));
      return NB ? null : BB.update(uB, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Dj(BB, jB) {
      let zB = (0, dB.lb)(BB).resolveInner(jB + 1);
      return zB.parent && zB.from == jB
    }

    function Fj(BB, jB, zB) {
      let nB = BB.charCategorizer(jB);
      if (nB(BB.sliceDoc(jB - 1, jB)) != QB.e.Word) return jB;
      for (let dB of zB) {
        let zB = jB - dB.length;
        if (BB.sliceDoc(zB, jB) == dB && nB(BB.sliceDoc(zB - 1, zB)) != QB.e.Word) return zB
      }
      return -1
    }

    function Yj() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [cB, PB, tB.of(BB), KB, hj, bB]
    }
    const Vj = [{
        key: "Ctrl-Space",
        run: wB
      }, {
        mac: "Alt-`",
        run: wB
      }, {
        mac: "Alt-i",
        run: wB
      }, {
        key: "Escape",
        run: BB => {
          let jB = BB.state.field(PB, !1);
          return !(!jB || !jB.active.some((BB => 0 != BB.state))) && (BB.dispatch({
            effects: GB.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: lB(!0)
      }, {
        key: "ArrowUp",
        run: lB(!1)
      }, {
        key: "PageDown",
        run: lB(!0, "page")
      }, {
        key: "PageUp",
        run: lB(!1, "page")
      }, {
        key: "Enter",
        run: BB => {
          let jB = BB.state.field(PB, !1);
          return !(BB.state.readOnly || !jB || !jB.open || jB.open.selected < 0 || jB.open.disabled || Date.now() - jB.open.timestamp < BB.state.facet(tB).interactionDelay) && WB(BB, jB.open.options[jB.open.selected])
        }
      }],
      hj = QB.u.highest(nB.S.computeN([tB], (BB => BB.facet(tB).defaultKeymap ? [Vj] : [])))
  },
  41558: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => UB,
      e: () => rB,
      h: () => aB,
      k: () => pB
    });
    var QB = zB(41408);
    class nB {
      constructor(BB, jB, zB, QB) {
        this.origin = BB, this.changes = jB, this.effects = zB, this.clientID = QB
      }
    }
    class dB {
      constructor(BB, jB) {
        this.version = BB, this.unconfirmed = jB
      }
    }
    const IB = QB.p.define({
        combine(BB) {
          let jB = (0, QB.O)(BB, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: BB => BB
          });
          return null == jB.clientID && (jB.clientID = BB.length && BB[0].generatedID || ""), jB
        }
      }),
      NB = QB.c.define(),
      uB = QB.F.define({
        create: BB => new dB(BB.facet(IB).startVersion, []),
        update(BB, jB) {
          let zB = jB.annotation(NB);
          if (zB) return zB;
          let {
            sharedEffects: QB,
            clientID: uB
          } = jB.startState.facet(IB), UB = QB(jB);
          return UB.length || !jB.changes.empty ? new dB(BB.version, BB.unconfirmed.concat(new nB(jB, jB.changes, UB, uB))) : BB
        }
      });

    function UB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [uB, IB.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, BB))]
    }

    function aB(BB, jB) {
      let {
        version: zB,
        unconfirmed: UB
      } = BB.field(uB), {
        clientID: aB
      } = BB.facet(IB);
      zB += jB.length;
      let pB = [],
        rB = null,
        sB = 0;
      for (let nB of jB) {
        let BB = sB < UB.length ? UB[sB] : null;
        BB && BB.clientID == nB.clientID ? (rB && (rB = rB.map(BB.changes, !0)), pB = QB.D.mapEffects(pB, nB.changes), sB++) : (pB = QB.D.mapEffects(pB, nB.changes), nB.effects && (pB = pB.concat(nB.effects)), rB = rB ? rB.compose(nB.changes) : nB.changes)
      }
      if (sB && (UB = UB.slice(sB)), UB.length && (rB && (UB = UB.map((BB => {
          let jB = BB.changes.map(rB);
          return rB = rB.map(BB.changes, !0), new nB(BB.origin, jB, QB.D.mapEffects(BB.effects, rB), aB)
        }))), pB.length)) {
        let BB = UB.reduce(((BB, jB) => BB.compose(jB.changes)), QB.ChangeSet.empty(UB[0].changes.length));
        pB = QB.D.mapEffects(pB, BB)
      }
      return rB ? BB.update({
        changes: rB,
        effects: pB,
        annotations: [QB.I.addToHistory.of(!1), QB.I.remote.of(!0), NB.of(new dB(zB, UB))],
        filter: !1
      }) : BB.update({
        annotations: [NB.of(new dB(zB, UB))]
      })
    }

    function pB(BB) {
      return BB.field(uB).unconfirmed
    }

    function rB(BB) {
      return BB.field(uB).version
    }
  },
  41456: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => mj
    });
    var QB = zB(41445);
    class nB {
      constructor(BB, jB, zB, QB, nB, dB, IB, NB, uB) {
        let UB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          aB = arguments.length > 10 ? arguments[10] : void 0;
        this.p = BB, this.stack = jB, this.state = zB, this.reducePos = QB, this.pos = nB, this.score = dB, this.buffer = IB, this.bufferBase = NB, this.curContext = uB, this.lookAhead = UB, this.parent = aB
      }
      toString() {
        return `[${this.stack.filter(((BB,jB)=>jB%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          QB = BB.parser.context;
        return new nB(BB, [], jB, zB, zB, 0, [], 0, QB ? new dB(QB, QB.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(BB, jB) {
        this.stack.push(this.state, jB, this.bufferBase + this.buffer.length), this.state = BB
      }
      reduce(BB) {
        var jB;
        let zB = BB >> 19,
          QB = 65535 & BB,
          {
            parser: nB
          } = this.p,
          dB = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          IB = nB.dynamicPrecedence(QB);
        if (IB && (this.score += IB), 0 == zB) return this.pushState(nB.getGoto(this.state, QB, !0), this.reducePos), QB < nB.minRepeatTerm && this.storeNode(QB, this.reducePos, this.reducePos, dB ? 8 : 4, !0), void this.reduceContext(QB, this.reducePos);
        let NB = this.stack.length - 3 * (zB - 1) - (262144 & BB ? 6 : 0),
          uB = NB ? this.stack[NB - 2] : this.p.gy[0].from,
          UB = this.reducePos - uB;
        UB >= 2e3 && !(null === (jB = this.p.parser.nodeSet.types[QB]) || void 0 === jB ? void 0 : jB.isAnonymous) && (uB == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = UB) : this.p.lastBigReductionSize < UB && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = uB, this.p.lastBigReductionSize = UB));
        let aB = NB ? this.stack[NB - 1] : 0,
          pB = this.bufferBase + this.buffer.length - aB;
        if (QB < nB.minRepeatTerm || 131072 & BB) {
          let BB = nB.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(QB, uB, BB, pB + 4, !0)
        }
        if (262144 & BB) this.state = this.stack[NB];
        else {
          let BB = this.stack[NB - 3];
          this.state = nB.getGoto(BB, QB, !0)
        }
        for (; this.stack.length > NB;) this.stack.pop();
        this.reduceContext(QB, uB)
      }
      storeNode(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          nB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == BB && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let BB = this,
            QB = this.buffer.length;
          if (0 == QB && BB.parent && (QB = BB.bufferBase - BB.parent.bufferBase, BB = BB.parent), QB > 0 && 0 == BB.buffer[QB - 4] && BB.buffer[QB - 1] > -1) {
            if (jB == zB) return;
            if (BB.buffer[QB - 2] >= jB) return void(BB.buffer[QB - 2] = zB)
          }
        }
        if (nB && this.pos != zB) {
          let nB = this.buffer.length;
          if (nB > 0 && (0 != this.buffer[nB - 4] || this.buffer[nB - 1] < 0)) {
            let BB = !1;
            for (let jB = nB; jB > 0 && this.buffer[jB - 2] > zB; jB -= 4)
              if (this.buffer[jB - 1] >= 0) {
                BB = !0;
                break
              } if (BB)
              for (; nB > 0 && this.buffer[nB - 2] > zB;) this.buffer[nB] = this.buffer[nB - 4], this.buffer[nB + 1] = this.buffer[nB - 3], this.buffer[nB + 2] = this.buffer[nB - 2], this.buffer[nB + 3] = this.buffer[nB - 1], nB -= 4, QB > 4 && (QB -= 4)
          }
          this.buffer[nB] = BB, this.buffer[nB + 1] = jB, this.buffer[nB + 2] = zB, this.buffer[nB + 3] = QB
        } else this.buffer.push(BB, jB, zB, QB)
      }
      shift(BB, jB, zB, QB) {
        if (131072 & BB) this.pushState(65535 & BB, this.pos);
        else if (0 == (262144 & BB)) {
          let nB = BB,
            {
              parser: dB
            } = this.p;
          this.pos = QB;
          let IB = dB.stateFlag(nB, 1);
          !IB && (QB > zB || jB <= dB.maxNode) && (this.reducePos = QB), this.pushState(nB, IB ? zB : Math.min(zB, this.reducePos)), this.shiftContext(jB, zB), jB <= dB.maxNode && this.buffer.push(jB, zB, QB, 4)
        } else this.pos = QB, this.shiftContext(jB, zB), jB <= this.p.parser.maxNode && this.buffer.push(jB, zB, QB, 4)
      }
      apply(BB, jB, zB, QB) {
        65536 & BB ? this.reduce(BB) : this.shift(BB, jB, zB, QB)
      }
      useNode(BB, jB) {
        let zB = this.p.reused.length - 1;
        (zB < 0 || this.p.reused[zB] != BB) && (this.p.reused.push(BB), zB++);
        let QB = this.pos;
        this.reducePos = this.pos = QB + BB.length, this.pushState(jB, QB), this.buffer.push(zB, QB, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, BB, this, this.p.stream.reset(this.pos - BB.length)))
      }
      split() {
        let BB = this,
          jB = BB.buffer.length;
        for (; jB > 0 && BB.buffer[jB - 2] > BB.reducePos;) jB -= 4;
        let zB = BB.buffer.slice(jB),
          QB = BB.bufferBase + jB;
        for (; BB && QB == BB.bufferBase;) BB = BB.parent;
        return new nB(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, zB, QB, this.curContext, this.lookAhead, BB)
      }
      recoverByDelete(BB, jB) {
        let zB = BB <= this.p.parser.maxNode;
        zB && this.storeNode(BB, this.pos, jB, 4), this.storeNode(0, this.pos, jB, zB ? 8 : 4), this.pos = this.reducePos = jB, this.score -= 190
      }
      canShift(BB) {
        for (let jB = new IB(this);;) {
          let zB = this.p.parser.stateSlot(jB.state, 4) || this.p.parser.hasAction(jB.state, BB);
          if (0 == zB) return !1;
          if (0 == (65536 & zB)) return !0;
          jB.reduce(zB)
        }
      }
      recoverByInsert(BB) {
        if (this.stack.length >= 300) return [];
        let jB = this.p.parser.nextStates(this.state);
        if (jB.length > 8 || this.stack.length >= 120) {
          let zB = [];
          for (let QB, nB = 0; nB < jB.length; nB += 2)(QB = jB[nB + 1]) != this.state && this.p.parser.hasAction(QB, BB) && zB.push(jB[nB], QB);
          if (this.stack.length < 120)
            for (let BB = 0; zB.length < 8 && BB < jB.length; BB += 2) {
              let QB = jB[BB + 1];
              zB.some(((BB, jB) => 1 & jB && BB == QB)) || zB.push(jB[BB], QB)
            }
          jB = zB
        }
        let zB = [];
        for (let QB = 0; QB < jB.length && zB.length < 4; QB += 2) {
          let BB = jB[QB + 1];
          if (BB == this.state) continue;
          let nB = this.split();
          nB.pushState(BB, this.pos), nB.storeNode(0, nB.pos, nB.pos, 4, !0), nB.shiftContext(jB[QB], this.pos), nB.reducePos = this.pos, nB.score -= 200, zB.push(nB)
        }
        return zB
      }
      forceReduce() {
        let {
          parser: BB
        } = this.p, jB = BB.stateSlot(this.state, 5);
        if (0 == (65536 & jB)) return !1;
        if (!BB.validAction(this.state, jB)) {
          let zB = jB >> 19,
            QB = 65535 & jB,
            nB = this.stack.length - 3 * zB;
          if (nB < 0 || BB.getGoto(this.stack[nB], QB, !1) < 0) {
            let BB = this.findForcedReduction();
            if (null == BB) return !1;
            jB = BB
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(jB), !0
      }
      findForcedReduction() {
        let {
          parser: BB
        } = this.p, jB = [], zB = (QB, nB) => {
          if (!jB.includes(QB)) return jB.push(QB), BB.allActions(QB, (jB => {
            if (393216 & jB);
            else if (65536 & jB) {
              let zB = (jB >> 19) - nB;
              if (zB > 1) {
                let QB = 65535 & jB,
                  nB = this.stack.length - 3 * zB;
                if (nB >= 0 && BB.getGoto(this.stack[nB], QB, !1) >= 0) return zB << 19 | 65536 | QB
              }
            } else {
              let BB = zB(jB, nB + 1);
              if (null != BB) return BB
            }
          }))
        };
        return zB(this.state, 0)
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
        for (let jB = 0; jB < this.stack.length; jB += 3)
          if (this.stack[jB] != BB.stack[jB]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(BB) {
        return this.p.parser.dialect.flags[BB]
      }
      shiftContext(BB, jB) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, BB, this, this.p.stream.reset(jB)))
      }
      reduceContext(BB, jB) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, BB, this, this.p.stream.reset(jB)))
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
          let jB = new dB(this.curContext.tracker, BB);
          jB.hash != this.curContext.hash && this.emitContext(), this.curContext = jB
        }
      }
      setLookAhead(BB) {
        return !(BB <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = BB, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class dB {
      constructor(BB, jB) {
        this.tracker = BB, this.context = jB, this.hash = BB.strict ? BB.hash(jB) : 0
      }
    }
    class IB {
      constructor(BB) {
        this.start = BB, this.state = BB.state, this.stack = BB.stack, this.base = this.stack.length
      }
      reduce(BB) {
        let jB = 65535 & BB,
          zB = BB >> 19;
        0 == zB ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (zB - 1);
        let QB = this.start.p.parser.getGoto(this.stack[this.base - 3], jB, !0);
        this.state = QB
      }
    }
    class NB {
      constructor(BB, jB, zB) {
        this.stack = BB, this.pos = jB, this.index = zB, this.buffer = BB.buffer, 0 == this.index && this.maybeNext()
      }
      static create(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB.bufferBase + BB.buffer.length;
        return new NB(BB, jB, jB - BB.bufferBase)
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
        return new NB(this.stack, this.pos, this.index)
      }
    }

    function uB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof BB) return BB;
      let zB = null;
      for (let QB = 0, nB = 0; QB < BB.length;) {
        let dB = 0;
        for (;;) {
          let jB = BB.charCodeAt(QB++),
            zB = !1;
          if (126 == jB) {
            dB = 65535;
            break
          }
          jB >= 92 && jB--, jB >= 34 && jB--;
          let nB = jB - 32;
          if (nB >= 46 && (nB -= 46, zB = !0), dB += nB, zB) break;
          dB *= 46
        }
        zB ? zB[nB++] = dB : zB = new jB(dB)
      }
      return zB
    }
    class UB {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const aB = new UB;
    class pB {
      constructor(BB, jB) {
        this.input = BB, this.gy = jB, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = aB, this.rangeIndex = 0, this.pos = this.chunkPos = jB[0].from, this.range = jB[0], this.end = jB[jB.length - 1].to, this.readNext()
      }
      resolveOffset(BB, jB) {
        let zB = this.range,
          QB = this.rangeIndex,
          nB = this.pos + BB;
        for (; nB < zB.from;) {
          if (!QB) return null;
          let BB = this.gy[--QB];
          nB -= zB.from - BB.to, zB = BB
        }
        for (; jB < 0 ? nB > zB.to : nB >= zB.to;) {
          if (QB == this.gy.length - 1) return null;
          let BB = this.gy[++QB];
          nB += BB.from - zB.to, zB = BB
        }
        return nB
      }
      clipPos(BB) {
        if (BB >= this.range.from && BB < this.range.to) return BB;
        for (let jB of this.gy)
          if (jB.to > BB) return Math.max(BB, jB.from);
        return this.end
      }
      peek(BB) {
        let jB, zB, QB = this.chunkOff + BB;
        if (QB >= 0 && QB < this.chunk.length) jB = this.pos + BB, zB = this.chunk.charCodeAt(QB);
        else {
          let QB = this.resolveOffset(BB, 1);
          if (null == QB) return -1;
          if (jB = QB, jB >= this.chunk2Pos && jB < this.chunk2Pos + this.chunk2.length) zB = this.chunk2.charCodeAt(jB - this.chunk2Pos);
          else {
            let BB = this.rangeIndex,
              QB = this.range;
            for (; QB.to <= jB;) QB = this.gy[++BB];
            this.chunk2 = this.input.chunk(this.chunk2Pos = jB), jB + this.chunk2.length > QB.to && (this.chunk2 = this.chunk2.slice(0, QB.to - jB)), zB = this.chunk2.charCodeAt(0)
          }
        }
        return jB >= this.token.lookAhead && (this.token.lookAhead = jB + 1), zB
      }
      acceptToken(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zB = jB ? this.resolveOffset(jB, -1) : this.pos;
        if (null == zB || zB < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = BB, this.token.end = zB
      }
      acceptTokenTo(BB, jB) {
        this.token.value = BB, this.token.end = jB
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: BB,
            chunkPos: jB
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = BB, this.chunk2Pos = jB, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let BB = this.input.chunk(this.pos),
            jB = this.pos + BB.length;
          this.chunk = jB > this.range.to ? BB.slice(0, this.range.to - this.pos) : BB, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += BB; this.pos + BB >= this.range.to;) {
          if (this.rangeIndex == this.gy.length - 1) return this.setDone();
          BB -= this.range.to - this.pos, this.range = this.gy[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += BB, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.gy[this.rangeIndex = this.gy.length - 1], this.chunk = "", this.next = -1
      }
      reset(BB, jB) {
        if (jB ? (this.token = jB, jB.start = BB, jB.lookAhead = BB + 1, jB.value = jB.extended = -1) : this.token = aB, this.pos != BB) {
          if (this.pos = BB, BB == this.end) return this.setDone(), this;
          for (; BB < this.range.from;) this.range = this.gy[--this.rangeIndex];
          for (; BB >= this.range.to;) this.range = this.gy[++this.rangeIndex];
          BB >= this.chunkPos && BB < this.chunkPos + this.chunk.length ? this.chunkOff = BB - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(BB, jB) {
        if (BB >= this.chunkPos && jB <= this.chunkPos + this.chunk.length) return this.chunk.slice(BB - this.chunkPos, jB - this.chunkPos);
        if (BB >= this.chunk2Pos && jB <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(BB - this.chunk2Pos, jB - this.chunk2Pos);
        if (BB >= this.range.from && jB <= this.range.to) return this.input.read(BB, jB);
        let zB = "";
        for (let QB of this.gy) {
          if (QB.from >= jB) break;
          QB.to > BB && (zB += this.input.read(Math.max(QB.from, BB), Math.min(QB.to, jB)))
        }
        return zB
      }
    }
    class rB {
      constructor(BB, jB) {
        this.data = BB, this.id = jB
      }
      token(BB, jB) {
        let {
          parser: zB
        } = jB.p;
        mB(this.data, BB, jB, this.id, zB.data, zB.tokenPrecTable)
      }
    }
    rB.prototype.contextual = rB.prototype.fallback = rB.prototype.extend = !1;
    class sB {
      constructor(BB, jB, zB) {
        this.precTable = jB, this.elseToken = zB, this.data = "string" == typeof BB ? uB(BB) : BB
      }
      token(BB, jB) {
        let zB = BB.pos,
          QB = 0;
        for (;;) {
          let zB = BB.next < 0,
            nB = BB.resolveOffset(1, 1);
          if (mB(this.data, BB, jB, 0, this.data, this.precTable), BB.token.value > -1) break;
          if (null == this.elseToken) return;
          if (zB || QB++, null == nB) break;
          BB.reset(nB, BB.token)
        }
        QB && (BB.reset(zB, BB.token), BB.acceptToken(this.elseToken, QB))
      }
    }
    sB.prototype.contextual = rB.prototype.fallback = rB.prototype.extend = !1;
    class JB {
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = BB, this.contextual = !!jB.contextual, this.fallback = !!jB.fallback, this.extend = !!jB.extend
      }
    }

    function mB(BB, jB, zB, QB, nB, dB) {
      let IB = 0,
        NB = 1 << QB,
        {
          dialect: uB
        } = zB.p.parser;
      BB: for (; 0 != (NB & BB[IB]);) {
        let zB = BB[IB + 1];
        for (let pB = IB + 3; pB < zB; pB += 2)
          if ((BB[pB + 1] & NB) > 0) {
            let zB = BB[pB];
            if (uB.allows(zB) && (-1 == jB.token.value || jB.token.value == zB || kB(zB, jB.token.value, nB, dB))) {
              jB.acceptToken(zB);
              break
            }
          } let QB = jB.next,
          UB = 0,
          aB = BB[IB + 2];
        if (!(jB.next < 0 && aB > UB && 65535 == BB[zB + 3 * aB - 3])) {
          for (; UB < aB;) {
            let nB = UB + aB >> 1,
              dB = zB + nB + (nB << 1),
              NB = BB[dB],
              uB = BB[dB + 1] || 65536;
            if (QB < NB) aB = nB;
            else {
              if (!(QB >= uB)) {
                IB = BB[dB + 2], jB.advance();
                continue BB
              }
              UB = nB + 1
            }
          }
          break
        }
        IB = BB[zB + 3 * aB - 1]
      }
    }

    function yB(BB, jB, zB) {
      for (let QB, nB = jB; 65535 != (QB = BB[nB]); nB++)
        if (QB == zB) return nB - jB;
      return -1
    }

    function kB(BB, jB, zB, QB) {
      let nB = yB(zB, QB, jB);
      return nB < 0 || yB(zB, QB, BB) < nB
    }
    const GB = "undefined" != typeof process && {
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
    let LB = null;

    function gB(BB, jB, zB) {
      let nB = BB.cursor(QB.h.IncludeAnonymous);
      for (nB.moveTo(jB);;)
        if (!(zB < 0 ? nB.childBefore(jB) : nB.childAfter(jB)))
          for (;;) {
            if ((zB < 0 ? nB.to < jB : nB.from > jB) && !nB.type.isError) return zB < 0 ? Math.max(0, Math.min(nB.to - 1, jB - 25)) : Math.min(BB.length, Math.max(nB.from + 1, jB + 25));
            if (zB < 0 ? nB.prevSibling() : nB.nextSibling()) break;
            if (!nB.parent()) return zB < 0 ? 0 : BB.length
          }
    }
    class tB {
      constructor(BB, jB) {
        this.fragments = BB, this.nodeSet = jB, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let BB = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (BB) {
          for (this.safeFrom = BB.openStart ? gB(BB.tree, BB.from + BB.offset, 1) - BB.offset : BB.from, this.safeTo = BB.openEnd ? gB(BB.tree, BB.to + BB.offset, -1) - BB.offset : BB.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(BB.tree), this.start.push(-BB.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(BB) {
        if (BB < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= BB;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let jB = this.trees.length - 1;
          if (jB < 0) return this.nextFragment(), null;
          let zB = this.trees[jB],
            nB = this.index[jB];
          if (nB == zB.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let dB = zB.children[nB],
            IB = this.start[jB] + zB.positions[nB];
          if (IB > BB) return this.nextStart = IB, null;
          if (dB instanceof QB.x) {
            if (IB == BB) {
              if (IB < this.safeFrom) return null;
              let BB = IB + dB.length;
              if (BB <= this.safeTo) {
                let jB = dB.prop(QB.j.lookAhead);
                if (!jB || BB + jB < this.fragment.to) return dB
              }
            }
            this.index[jB]++, IB + dB.length >= Math.max(this.safeFrom, BB) && (this.trees.push(dB), this.start.push(IB), this.index.push(0))
          } else this.index[jB]++, this.nextStart = IB + dB.length
        }
      }
    }
    class SB {
      constructor(BB, jB) {
        this.stream = jB, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = BB.tokenizers.map((BB => new UB))
      }
      getActions(BB) {
        let jB = 0,
          zB = null,
          {
            parser: QB
          } = BB.p,
          {
            tokenizers: nB
          } = QB,
          dB = QB.stateSlot(BB.state, 3),
          IB = BB.curContext ? BB.curContext.hash : 0,
          NB = 0;
        for (let uB = 0; uB < nB.length; uB++) {
          if (0 == (1 << uB & dB)) continue;
          let QB = nB[uB],
            UB = this.tokens[uB];
          if ((!zB || QB.fallback) && ((QB.contextual || UB.start != BB.pos || UB.mask != dB || UB.context != IB) && (this.updateCachedToken(UB, QB, BB), UB.mask = dB, UB.context = IB), UB.lookAhead > UB.end + 25 && (NB = Math.max(UB.lookAhead, NB)), 0 != UB.value)) {
            let nB = jB;
            if (UB.extended > -1 && (jB = this.addActions(BB, UB.extended, UB.end, jB)), jB = this.addActions(BB, UB.value, UB.end, jB), !QB.extend && (zB = UB, jB > nB)) break
          }
        }
        for (; this.actions.length > jB;) this.actions.pop();
        return NB && BB.setLookAhead(NB), zB || BB.pos != this.stream.end || (zB = new UB, zB.value = BB.p.parser.eofTerm, zB.start = zB.end = BB.pos, jB = this.addActions(BB, zB.value, zB.end, jB)), this.mainToken = zB, this.actions
      }
      getMainToken(BB) {
        if (this.mainToken) return this.mainToken;
        let jB = new UB,
          {
            pos: zB,
            p: QB
          } = BB;
        return jB.start = zB, jB.end = Math.min(zB + 1, QB.stream.end), jB.value = zB == QB.stream.end ? QB.parser.eofTerm : 0, jB
      }
      updateCachedToken(BB, jB, zB) {
        let QB = this.stream.clipPos(zB.pos);
        if (jB.token(this.stream.reset(QB, BB), zB), BB.value > -1) {
          let {
            parser: jB
          } = zB.p;
          for (let QB = 0; QB < jB.specialized.length; QB++)
            if (jB.specialized[QB] == BB.value) {
              let nB = jB.specializers[QB](this.stream.read(BB.start, BB.end), zB);
              if (nB >= 0 && zB.p.parser.dialect.allows(nB >> 1)) {
                0 == (1 & nB) ? BB.value = nB >> 1 : BB.extended = nB >> 1;
                break
              }
            }
        } else BB.value = 0, BB.end = this.stream.clipPos(QB + 1)
      }
      putAction(BB, jB, zB, QB) {
        for (let nB = 0; nB < QB; nB += 3)
          if (this.actions[nB] == BB) return QB;
        return this.actions[QB++] = BB, this.actions[QB++] = jB, this.actions[QB++] = zB, QB
      }
      addActions(BB, jB, zB, QB) {
        let {
          state: nB
        } = BB, {
          parser: dB
        } = BB.p, {
          data: IB
        } = dB;
        for (let NB = 0; NB < 2; NB++)
          for (let BB = dB.stateSlot(nB, NB ? 2 : 1);; BB += 3) {
            if (65535 == IB[BB]) {
              if (1 != IB[BB + 1]) {
                0 == QB && 2 == IB[BB + 1] && (QB = this.putAction(oB(IB, BB + 2), jB, zB, QB));
                break
              }
              BB = oB(IB, BB + 2)
            }
            IB[BB] == jB && (QB = this.putAction(oB(IB, BB + 1), jB, zB, QB))
          }
        return QB
      }
    }
    class MB {
      constructor(BB, jB, zB, QB) {
        this.parser = BB, this.input = jB, this.gy = QB, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new pB(jB, QB), this.tokens = new SB(BB, this.stream), this.topTerm = BB.top[1];
        let {
          from: dB
        } = QB[0];
        this.stacks = [nB.start(this, BB.top[0], dB)], this.fragments = zB.length && this.stream.end - dB > 4 * BB.bufferLength ? new tB(zB, BB.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let BB, jB, zB = this.stacks,
          QB = this.minStackPos,
          nB = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == zB.length) {
          let [BB] = zB;
          for (; BB.forceReduce() && BB.stack.length && BB.stack[BB.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let dB = 0; dB < zB.length; dB++) {
          let IB = zB[dB];
          for (;;) {
            if (this.tokens.mainToken = null, IB.pos > QB) nB.push(IB);
            else {
              if (this.advanceStack(IB, nB, zB)) continue;
              {
                BB || (BB = [], jB = []), BB.push(IB);
                let zB = this.tokens.getMainToken(IB);
                jB.push(zB.value, zB.end)
              }
            }
            break
          }
        }
        if (!nB.length) {
          let jB = BB && function(BB) {
            let jB = null;
            for (let zB of BB) {
              let BB = zB.p.stoppedAt;
              (zB.pos == zB.p.stream.end || null != BB && zB.pos > BB) && zB.p.parser.stateFlag(zB.state, 2) && (!jB || jB.score < zB.score) && (jB = zB)
            }
            return jB
          }(BB);
          if (jB) return GB && console.log("Finish with " + this.stackID(jB)), this.stackToTree(jB);
          if (this.parser.strict) throw GB && BB && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + QB);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && BB) {
          let zB = null != this.stoppedAt && BB[0].pos > this.stoppedAt ? BB[0] : this.runRecovery(BB, jB, nB);
          if (zB) return GB && console.log("Force-finish " + this.stackID(zB)), this.stackToTree(zB.forceAll())
        }
        if (this.recovering) {
          let BB = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (nB.length > BB)
            for (nB.sort(((BB, jB) => jB.score - BB.score)); nB.length > BB;) nB.pop();
          nB.some((BB => BB.reducePos > QB)) && this.recovering--
        } else if (nB.length > 1) {
          BB: for (let BB = 0; BB < nB.length - 1; BB++) {
            let jB = nB[BB];
            for (let zB = BB + 1; zB < nB.length; zB++) {
              let QB = nB[zB];
              if (jB.sameState(QB) || jB.buffer.length > 500 && QB.buffer.length > 500) {
                if (!((jB.score - QB.score || jB.buffer.length - QB.buffer.length) > 0)) {
                  nB.splice(BB--, 1);
                  continue BB
                }
                nB.splice(zB--, 1)
              }
            }
          }
          nB.length > 12 && (nB.sort(((BB, jB) => jB.score - BB.score)), nB.splice(12, nB.length - 12))
        }
        this.minStackPos = nB[0].pos;
        for (let dB = 1; dB < nB.length; dB++) nB[dB].pos < this.minStackPos && (this.minStackPos = nB[dB].pos);
        return null
      }
      stopAt(BB) {
        if (null != this.stoppedAt && this.stoppedAt < BB) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = BB
      }
      advanceStack(BB, jB, zB) {
        let nB = BB.pos,
          {
            parser: dB
          } = this,
          IB = GB ? this.stackID(BB) + " -> " : "";
        if (null != this.stoppedAt && nB > this.stoppedAt) return BB.forceReduce() ? BB : null;
        if (this.fragments) {
          let jB = BB.curContext && BB.curContext.tracker.strict,
            zB = jB ? BB.curContext.hash : 0;
          for (let NB = this.fragments.nodeAt(nB); NB;) {
            let nB = this.parser.nodeSet.types[NB.type.id] == NB.type ? dB.getGoto(BB.state, NB.type.id) : -1;
            if (nB > -1 && NB.length && (!jB || (NB.prop(QB.j.contextHash) || 0) == zB)) return BB.useNode(NB, nB), GB && console.log(IB + this.stackID(BB) + ` (via reuse of ${dB.getName(NB.type.id)})`), !0;
            if (!(NB instanceof QB.x) || 0 == NB.children.length || NB.positions[0] > 0) break;
            let uB = NB.children[0];
            if (!(uB instanceof QB.x && 0 == NB.positions[0])) break;
            NB = uB
          }
        }
        let NB = dB.stateSlot(BB.state, 4);
        if (NB > 0) return BB.reduce(NB), GB && console.log(IB + this.stackID(BB) + ` (via always-reduce ${dB.getName(65535&NB)})`), !0;
        if (BB.stack.length >= 8400)
          for (; BB.stack.length > 6e3 && BB.forceReduce(););
        let uB = this.tokens.getActions(BB);
        for (let QB = 0; QB < uB.length;) {
          let NB = uB[QB++],
            UB = uB[QB++],
            aB = uB[QB++],
            pB = QB == uB.length || !zB,
            rB = pB ? BB : BB.split(),
            sB = this.tokens.mainToken;
          if (rB.apply(NB, UB, sB ? sB.start : rB.pos, aB), GB && console.log(IB + this.stackID(rB) + ` (via ${0==(65536&NB)?"shift":`reduce of ${dB.getName(65535&NB)}`} for ${dB.getName(UB)} @ ${nB}${rB==BB?"":", split"})`), pB) return !0;
          rB.pos > nB ? jB.push(rB) : zB.push(rB)
        }
        return !1
      }
      advanceFully(BB, jB) {
        let zB = BB.pos;
        for (;;) {
          if (!this.advanceStack(BB, null, null)) return !1;
          if (BB.pos > zB) return EB(BB, jB), !0
        }
      }
      runRecovery(BB, jB, zB) {
        let QB = null,
          nB = !1;
        for (let dB = 0; dB < BB.length; dB++) {
          let IB = BB[dB],
            NB = jB[dB << 1],
            uB = jB[1 + (dB << 1)],
            UB = GB ? this.stackID(IB) + " -> " : "";
          if (IB.deadEnd) {
            if (nB) continue;
            if (nB = !0, IB.restart(), GB && console.log(UB + this.stackID(IB) + " (restarted)"), this.advanceFully(IB, zB)) continue
          }
          let aB = IB.split(),
            pB = UB;
          for (let BB = 0; BB < 10 && aB.forceReduce(); BB++) {
            if (GB && console.log(pB + this.stackID(aB) + " (via force-reduce)"), this.advanceFully(aB, zB)) break;
            GB && (pB = this.stackID(aB) + " -> ")
          }
          for (let BB of IB.recoverByInsert(NB)) GB && console.log(UB + this.stackID(BB) + " (via recover-insert)"), this.advanceFully(BB, zB);
          this.stream.end > IB.pos ? (uB == IB.pos && (uB++, NB = 0), IB.recoverByDelete(NB, uB), GB && console.log(UB + this.stackID(IB) + ` (via recover-delete ${this.parser.getName(NB)})`), EB(IB, zB)) : (!QB || QB.score < aB.score) && (QB = aB)
        }
        return QB
      }
      stackToTree(BB) {
        return BB.close(), QB.x.build({
          buffer: NB.create(BB),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.gy[0].from,
          length: BB.pos - this.gy[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(BB) {
        let jB = (LB || (LB = new WeakMap)).get(BB);
        return jB || LB.set(BB, jB = String.fromCodePoint(this.nextStackID++)), jB + BB
      }
    }

    function EB(BB, jB) {
      for (let zB = 0; zB < jB.length; zB++) {
        let QB = jB[zB];
        if (QB.pos == BB.pos && QB.sameState(BB)) return void(jB[zB].score < BB.score && (jB[zB] = BB))
      }
      jB.push(BB)
    }
    class iB {
      constructor(BB, jB, zB) {
        this.source = BB, this.flags = jB, this.disabled = zB
      }
      allows(BB) {
        return !this.disabled || 0 == this.disabled[BB]
      }
    }
    const qB = BB => BB;
    class fB extends QB.s {
      constructor(BB) {
        if (super(), this.wrappers = [], 14 != BB.version) throw new RangeError(`Parser version (${BB.version}) doesn't match runtime version (14)`);
        let jB = BB.nodeNames.split(" ");
        this.minRepeatTerm = jB.length;
        for (let QB = 0; QB < BB.repeatNodeCount; QB++) jB.push("");
        let zB = Object.keys(BB.topRules).map((jB => BB.topRules[jB][1])),
          nB = [];
        for (let QB = 0; QB < jB.length; QB++) nB.push([]);

        function dB(BB, jB, zB) {
          nB[BB].push([jB, jB.deserialize(String(zB))])
        }
        if (BB.nodeProps)
          for (let NB of BB.nodeProps) {
            let BB = NB[0];
            "string" == typeof BB && (BB = QB.j[BB]);
            for (let jB = 1; jB < NB.length;) {
              let zB = NB[jB++];
              if (zB >= 0) dB(zB, BB, NB[jB++]);
              else {
                let QB = NB[jB + -zB];
                for (let nB = -zB; nB > 0; nB--) dB(NB[jB++], BB, QB);
                jB++
              }
            }
          }
        this.nodeSet = new QB.k(jB.map(((jB, dB) => QB.n.define({
          name: dB >= this.minRepeatTerm ? void 0 : jB,
          id: dB,
          props: nB[dB],
          top: zB.indexOf(dB) > -1,
          error: 0 == dB,
          skipped: BB.skippedNodes && BB.skippedNodes.indexOf(dB) > -1
        })))), BB.propSources && (this.nodeSet = this.nodeSet.extend(...BB.propSources)), this.strict = !1, this.bufferLength = QB.d;
        let IB = uB(BB.tokenData);
        this.context = BB.context, this.specializerSpecs = BB.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let QB = 0; QB < this.specializerSpecs.length; QB++) this.specialized[QB] = this.specializerSpecs[QB].term;
        this.specializers = this.specializerSpecs.map(HB), this.states = uB(BB.states, Uint32Array), this.data = uB(BB.stateData), this.goto = uB(BB.goto), this.maxTerm = BB.maxTerm, this.tokenizers = BB.tokenizers.map((BB => "number" == typeof BB ? new rB(IB, BB) : BB)), this.topRules = BB.topRules, this.dialects = BB.dialects || {}, this.dynamicPrecedences = BB.dynamicPrecedences || null, this.tokenPrecTable = BB.tokenPrec, this.termNames = BB.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(BB, jB, zB) {
        let QB = new MB(this, BB, jB, zB);
        for (let nB of this.wrappers) QB = nB(QB, BB, jB, zB);
        return QB
      }
      getGoto(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          QB = this.goto;
        if (jB >= QB[0]) return -1;
        for (let nB = QB[jB + 1];;) {
          let jB = QB[nB++],
            dB = 1 & jB,
            IB = QB[nB++];
          if (dB && zB) return IB;
          for (let zB = nB + (jB >> 1); nB < zB; nB++)
            if (QB[nB] == BB) return IB;
          if (dB) return -1
        }
      }
      hasAction(BB, jB) {
        let zB = this.data;
        for (let QB = 0; QB < 2; QB++)
          for (let nB, dB = this.stateSlot(BB, QB ? 2 : 1);; dB += 3) {
            if (65535 == (nB = zB[dB])) {
              if (1 != zB[dB + 1]) {
                if (2 == zB[dB + 1]) return oB(zB, dB + 2);
                break
              }
              nB = zB[dB = oB(zB, dB + 2)]
            }
            if (nB == jB || 0 == nB) return oB(zB, dB + 1)
          }
        return 0
      }
      stateSlot(BB, jB) {
        return this.states[6 * BB + jB]
      }
      stateFlag(BB, jB) {
        return (this.stateSlot(BB, 0) & jB) > 0
      }
      validAction(BB, jB) {
        return !!this.allActions(BB, (BB => BB == jB || null))
      }
      allActions(BB, jB) {
        let zB = this.stateSlot(BB, 4),
          QB = zB ? jB(zB) : void 0;
        for (let nB = this.stateSlot(BB, 1); null == QB; nB += 3) {
          if (65535 == this.data[nB]) {
            if (1 != this.data[nB + 1]) break;
            nB = oB(this.data, nB + 2)
          }
          QB = jB(oB(this.data, nB + 1))
        }
        return QB
      }
      nextStates(BB) {
        let jB = [];
        for (let zB = this.stateSlot(BB, 1);; zB += 3) {
          if (65535 == this.data[zB]) {
            if (1 != this.data[zB + 1]) break;
            zB = oB(this.data, zB + 2)
          }
          if (0 == (1 & this.data[zB + 2])) {
            let BB = this.data[zB + 1];
            jB.some(((jB, zB) => 1 & zB && jB == BB)) || jB.push(this.data[zB], BB)
          }
        }
        return jB
      }
      configure(BB) {
        let jB = Object.assign(Object.create(fB.prototype), this);
        if (BB.props && (jB.nodeSet = this.nodeSet.extend(...BB.props)), BB.top) {
          let zB = this.topRules[BB.top];
          if (!zB) throw new RangeError(`Invalid top rule name ${BB.top}`);
          jB.top = zB
        }
        return BB.tokenizers && (jB.tokenizers = this.tokenizers.map((jB => {
          let zB = BB.tokenizers.find((BB => BB.from == jB));
          return zB ? zB.to : jB
        }))), BB.specializers && (jB.specializers = this.specializers.slice(), jB.specializerSpecs = this.specializerSpecs.map(((zB, QB) => {
          let nB = BB.specializers.find((BB => BB.from == zB.external));
          if (!nB) return zB;
          let dB = Object.assign(Object.assign({}, zB), {
            external: nB.to
          });
          return jB.specializers[QB] = HB(dB), dB
        }))), BB.contextTracker && (jB.context = BB.contextTracker), BB.dialect && (jB.dialect = this.parseDialect(BB.dialect)), null != BB.strict && (jB.strict = BB.strict), BB.wrap && (jB.wrappers = jB.wrappers.concat(BB.wrap)), null != BB.bufferLength && (jB.bufferLength = BB.bufferLength), jB
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
        let jB = this.dynamicPrecedences;
        return null == jB ? 0 : jB[BB] || 0
      }
      parseDialect(BB) {
        let jB = Object.keys(this.dialects),
          zB = jB.map((() => !1));
        if (BB)
          for (let nB of BB.split(" ")) {
            let BB = jB.indexOf(nB);
            BB >= 0 && (zB[BB] = !0)
          }
        let QB = null;
        for (let nB = 0; nB < jB.length; nB++)
          if (!zB[nB])
            for (let BB, zB = this.dialects[jB[nB]]; 65535 != (BB = this.data[zB++]);)(QB || (QB = new Uint8Array(this.maxTerm + 1)))[BB] = 1;
        return new iB(BB, zB, QB)
      }
      static deserialize(BB) {
        return new fB(BB)
      }
    }

    function oB(BB, jB) {
      return BB[jB] | BB[jB + 1] << 16
    }

    function HB(BB) {
      if (BB.external) {
        let jB = BB.extend ? 1 : 0;
        return (zB, QB) => BB.external(zB, QB) << 1 | jB
      }
      return BB.get
    }
    var DB = zB(41449);
    const FB = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      YB = new class {
        constructor(BB) {
          this.start = BB.start, this.shift = BB.shift || qB, this.reduce = BB.reduce || qB, this.reuse = BB.reuse || qB, this.hash = BB.hash || (() => 0), this.strict = !1 !== BB.strict
        }
      }({
        start: !1,
        shift: (BB, jB) => 5 == jB || 6 == jB || 320 == jB ? BB : 321 == jB,
        strict: !1
      }),
      VB = new JB(((BB, jB) => {
        let {
          next: zB
        } = BB;
        (125 == zB || -1 == zB || jB.context) && BB.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      hB = new JB(((BB, jB) => {
        let zB, {
          next: QB
        } = BB;
        FB.indexOf(QB) > -1 || (47 != QB || 47 != (zB = BB.peek(1)) && 42 != zB) && (125 == QB || 59 == QB || -1 == QB || jB.context || BB.acceptToken(316))
      }), {
        contextual: !0
      }),
      XB = new JB(((BB, jB) => {
        91 != BB.next || jB.context || BB.acceptToken(317)
      }), {
        contextual: !0
      }),
      ZB = new JB(((BB, jB) => {
        let {
          next: zB
        } = BB;
        if (43 == zB || 45 == zB) {
          if (BB.advance(), zB == BB.next) {
            BB.advance();
            let zB = !jB.context && jB.canShift(1);
            BB.acceptToken(zB ? 1 : 2)
          }
        } else 63 == zB && 46 == BB.peek(1) && (BB.advance(), BB.advance(), (BB.next < 48 || BB.next > 57) && BB.acceptToken(3))
      }), {
        contextual: !0
      });

    function AB(BB, jB) {
      return BB >= 65 && BB <= 90 || BB >= 97 && BB <= 122 || 95 == BB || BB >= 192 || !jB && BB >= 48 && BB <= 57
    }
    const TB = new JB(((BB, jB) => {
        if (60 != BB.next || !jB.dialectEnabled(0)) return;
        if (BB.advance(), 47 == BB.next) return;
        let zB = 0;
        for (; FB.indexOf(BB.next) > -1;) BB.advance(), zB++;
        if (AB(BB.next, !0)) {
          for (BB.advance(), zB++; AB(BB.next, !1);) BB.advance(), zB++;
          for (; FB.indexOf(BB.next) > -1;) BB.advance(), zB++;
          if (44 == BB.next) return;
          for (let jB = 0;; jB++) {
            if (7 == jB) {
              if (!AB(BB.next, !0)) return;
              break
            }
            if (BB.next != "extends".charCodeAt(jB)) break;
            BB.advance(), zB++
          }
        }
        BB.acceptToken(4, -zB)
      })),
      PB = (0, DB.f)({
        "get set async static": DB.i.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": DB.i.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": DB.i.operatorKeyword,
        "let var const using function class extends": DB.i.definitionKeyword,
        "import export from": DB.i.moduleKeyword,
        "with debugger new": DB.i.keyword,
        TemplateString: DB.i.special(DB.i.string),
        super: DB.i.atom,
        BooleanLiteral: DB.i.bool,
        this: DB.i.self,
        null: DB.i.null,
        Star: DB.i.modifier,
        VariableName: DB.i.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": DB.i.function(DB.i.variableName),
        VariableDefinition: DB.i.definition(DB.i.variableName),
        Label: DB.i.labelName,
        PropertyName: DB.i.propertyName,
        PrivatePropertyName: DB.i.special(DB.i.propertyName),
        "CallExpression/MemberExpression/PropertyName": DB.i.function(DB.i.propertyName),
        "FunctionDeclaration/VariableDefinition": DB.i.function(DB.i.definition(DB.i.variableName)),
        "ClassDeclaration/VariableDefinition": DB.i.definition(DB.i.className),
        "NewExpression/VariableName": DB.i.className,
        PropertyDefinition: DB.i.definition(DB.i.propertyName),
        PrivatePropertyDefinition: DB.i.definition(DB.i.special(DB.i.propertyName)),
        UpdateOp: DB.i.updateOperator,
        "LineComment Hashbang": DB.i.lineComment,
        BlockComment: DB.i.blockComment,
        Number: DB.i.number,
        String: DB.i.string,
        Escape: DB.i.escape,
        ArithOp: DB.i.arithmeticOperator,
        LogicOp: DB.i.logicOperator,
        BitOp: DB.i.bitwiseOperator,
        CompareOp: DB.i.compareOperator,
        RegExp: DB.i.regexp,
        Equals: DB.i.definitionOperator,
        Arrow: DB.i.function(DB.i.punctuation),
        ": Spread": DB.i.punctuation,
        "( )": DB.i.paren,
        "[ ]": DB.i.squareBracket,
        "{ }": DB.i.brace,
        "InterpolationStart InterpolationEnd": DB.i.special(DB.i.brace),
        ".": DB.i.derefOperator,
        ", ;": DB.i.separator,
        "@": DB.i.meta,
        TypeName: DB.i.typeName,
        TypeDefinition: DB.i.definition(DB.i.typeName),
        "type enum interface implements namespace module declare": DB.i.definitionKeyword,
        "abstract global Privacy readonly override": DB.i.modifier,
        "is keyof unique infer asserts": DB.i.operatorKeyword,
        JSXAttributeValue: DB.i.attributeValue,
        JSXText: DB.i.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": DB.i.angleBracket,
        "JSXIdentifier JSXNameSpacedName": DB.i.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": DB.i.attributeName,
        "JSXBuiltin/JSXIdentifier": DB.i.standard(DB.i.tagName)
      }),
      WB = {
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
      eB = {
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
      lB = {
        __proto__: null,
        "<": 193
      },
      wB = fB.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: YB,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [PB],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [hB, XB, ZB, TB, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, VB, new sB("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new sB("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: BB => WB[BB] || -1
        }, {
          term: 343,
          get: BB => eB[BB] || -1
        }, {
          term: 95,
          get: BB => lB[BB] || -1
        }],
        tokenPrec: 15201
      });
    var xB = zB(41437),
      KB = zB(41408),
      CB = zB(41415),
      cB = zB(41399);
    const bB = [(0, cB.p)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, cB.p)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, cB.p)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, cB.p)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, cB.p)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, cB.p)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, cB.p)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, cB.p)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, cB.p)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, cB.p)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, cB.p)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      vB = bB.concat([(0, cB.p)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, cB.p)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, cB.p)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      RB = new QB.o,
      OB = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function Bj(BB) {
      return (jB, zB) => {
        let QB = jB.node.getChild("VariableDefinition");
        return QB && zB(QB, BB), !0
      }
    }
    const jj = ["FunctionDeclaration"],
      zj = {
        FunctionDeclaration: Bj("function"),
        ClassDeclaration: Bj("class"),
        ClassExpression: () => !0,
        EnumDeclaration: Bj("constant"),
        TypeAliasDeclaration: Bj("type"),
        NamespaceDeclaration: Bj("namespace"),
        VariableDefinition(BB, jB) {
          BB.matchContext(jj) || jB(BB, "variable")
        },
        TypeDefinition(BB, jB) {
          jB(BB, "type")
        },
        __proto__: null
      };

    function Qj(BB, jB) {
      let zB = RB.get(jB);
      if (zB) return zB;
      let nB = [],
        dB = !0;

      function IB(jB, zB) {
        let QB = BB.sliceString(jB.from, jB.to);
        nB.push({
          label: QB,
          type: zB
        })
      }
      return jB.cursor(QB.h.IncludeAnonymous).iterate((jB => {
        if (dB) dB = !1;
        else if (jB.name) {
          let BB = zj[jB.name];
          if (BB && BB(jB, IB) || OB.has(jB.name)) return !1
        } else if (jB.to - jB.from > 8192) {
          for (let zB of Qj(BB, jB.node)) nB.push(zB);
          return !1
        }
      })), RB.set(jB, nB), nB
    }
    const nj = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      dj = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function Ij(BB) {
      let jB = (0, xB.lb)(BB.state).resolveInner(BB.pos, -1);
      if (dj.indexOf(jB.name) > -1) return null;
      let zB = "VariableName" == jB.name || jB.to - jB.from < 20 && nj.test(BB.state.sliceDoc(jB.from, jB.to));
      if (!zB && !BB.explicit) return null;
      let QB = [];
      for (let nB = jB; nB; nB = nB.parent) OB.has(nB.name) && (QB = QB.concat(Qj(BB.state.doc, nB)));
      return {
        options: QB,
        from: zB ? jB.from : BB.pos,
        validFor: nj
      }
    }
    const Nj = xB.j.define({
        name: "javascript",
        parser: wB.configure({
          props: [xB.U.add({
            IfStatement: (0, xB.p)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, xB.p)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: xB.z,
            SwitchBody: BB => {
              let jB = BB.textAfter,
                zB = /^\s*\}/.test(jB),
                QB = /^\s*(case|default)\b/.test(jB);
              return BB.baseIndent + (zB ? 0 : QB ? 1 : 2) * BB.unit
            },
            Block: (0, xB.w)({
              closing: "}"
            }),
            ArrowFunction: BB => BB.baseIndent + BB.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, xB.p)({
              except: /^\s*{/
            }),
            JSXElement(BB) {
              let jB = /^\s*<\//.test(BB.textAfter);
              return BB.lineIndent(BB.node.from) + (jB ? 0 : BB.unit)
            },
            JSXEscape(BB) {
              let jB = /\s*\}/.test(BB.textAfter);
              return BB.lineIndent(BB.node.from) + (jB ? 0 : BB.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": BB => BB.column(BB.node.from) + BB.unit
          }), xB.N.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": xB.G,
            BlockComment: BB => ({
              from: BB.from + 2,
              to: BB.to - 2
            }),
            JSXElement(BB) {
              let jB = BB.firstChild;
              if (!jB || "JSXSelfClosingTag" == jB.name) return null;
              let zB = BB.lastChild;
              return {
                from: jB.to,
                to: zB.type.isError ? BB.to : zB.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(BB) {
              var jB;
              let zB = null === (jB = BB.firstChild) || void 0 === jB ? void 0 : jB.nextSibling,
                QB = BB.lastChild;
              return !zB || zB.type.isError ? null : {
                from: zB.to,
                to: QB.type.isError ? BB.to : QB.from
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
      uj = {
        test: BB => /^JSX/.test(BB.name),
        facet: (0, xB.v)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      Uj = Nj.configure({
        dialect: "ts"
      }, "typescript"),
      aj = Nj.configure({
        dialect: "jsx",
        props: [xB.db.add((BB => BB.isTop ? [uj] : void 0))]
      }),
      pj = Nj.configure({
        dialect: "jsx ts",
        props: [xB.db.add((BB => BB.isTop ? [uj] : void 0))]
      }, "typescript");
    let rj = BB => ({
      label: BB,
      type: "keyword"
    });
    const sj = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(rj),
      Jj = sj.concat(["declare", "implements", "private", "protected", "public"].map(rj));

    function mj() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        jB = BB.jsx ? BB.typescript ? pj : aj : BB.typescript ? Uj : Nj,
        zB = BB.typescript ? vB.concat(Jj) : bB.concat(sj);
      return new xB.k(jB, [Nj.data.of({
        autocomplete: (0, cB.o)(dj, (0, cB.k)(zB))
      }), Nj.data.of({
        autocomplete: Ij
      }), BB.jsx ? Gj : []])
    }

    function yj(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BB.length;
      for (let QB = null === jB || void 0 === jB ? void 0 : jB.firstChild; QB; QB = QB.nextSibling)
        if ("JSXIdentifier" == QB.name || "JSXBuiltin" == QB.name || "JSXNamespacedName" == QB.name || "JSXMemberExpression" == QB.name) return BB.sliceString(QB.from, Math.min(QB.to, zB));
      return ""
    }
    const kj = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      Gj = CB.k.inputHandler.of(((BB, jB, zB, QB, nB) => {
        if ((kj ? BB.composing : BB.compositionStarted) || BB.state.readOnly || jB != zB || ">" != QB && "/" != QB || !Nj.isActiveAt(BB.state, jB, -1)) return !1;
        let dB = nB(),
          {
            state: IB
          } = dB,
          NB = IB.changeByRange((BB => {
            var jB;
            let zB, {
                head: nB
              } = BB,
              dB = (0, xB.lb)(IB).resolveInner(nB - 1, -1);
            if ("JSXStartTag" == dB.name && (dB = dB.parent), IB.doc.sliceString(nB - 1, nB) != QB || "JSXAttributeValue" == dB.name && dB.to > nB);
            else {
              if (">" == QB && "JSXFragmentTag" == dB.name) return {
                range: BB,
                changes: {
                  from: nB,
                  insert: "</>"
                }
              };
              if ("/" == QB && "JSXStartCloseTag" == dB.name) {
                let BB = dB.parent,
                  QB = BB.parent;
                if (QB && BB.from == nB - 2 && ((zB = yj(IB.doc, QB.firstChild, nB)) || "JSXFragmentTag" == (null === (jB = QB.firstChild) || void 0 === jB ? void 0 : jB.name))) {
                  let BB = `${zB}>`;
                  return {
                    range: KB.i.cursor(nB + BB.length, -1),
                    changes: {
                      from: nB,
                      insert: BB
                    }
                  }
                }
              } else if (">" == QB) {
                let jB = function(BB) {
                  for (;;) {
                    if ("JSXOpenTag" == BB.name || "JSXSelfClosingTag" == BB.name || "JSXFragmentTag" == BB.name) return BB;
                    if ("JSXEscape" == BB.name || !BB.parent) return null;
                    BB = BB.parent
                  }
                }(dB);
                if (jB && "JSXOpenTag" == jB.name && !/^\/?>|^<\//.test(IB.doc.sliceString(nB, nB + 2)) && (zB = yj(IB.doc, jB, nB))) return {
                  range: BB,
                  changes: {
                    from: nB,
                    insert: `</${zB}>`
                  }
                }
              }
            }
            return {
              range: BB
            }
          }));
        return !NB.changes.empty && (BB.dispatch([dB, IB.update(NB, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  41437: (BB, jB, zB) => {
    zB.d(jB, {
      $: () => HB,
      D: () => Gj,
      G: () => bB,
      K: () => Uj,
      N: () => cB,
      O: () => kB,
      P: () => DB,
      S: () => YB,
      U: () => hB,
      X: () => KB,
      Z: () => FB,
      cb: () => ej,
      db: () => pB,
      e: () => gj,
      eb: () => Ej,
      f: () => VB,
      ib: () => yB,
      j: () => JB,
      k: () => fB,
      l: () => Aj,
      lb: () => mB,
      p: () => wB,
      r: () => fj,
      v: () => aB,
      w: () => WB,
      z: () => lB
    });
    var QB, nB = zB(41445),
      dB = zB(41408),
      IB = zB(41415),
      NB = zB(41449),
      uB = zB(41424);
    const UB = new nB.j;

    function aB(BB) {
      return dB.p.define({
        combine: BB ? jB => jB.concat(BB) : void 0
      })
    }
    const pB = new nB.j;
    class rB {
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = BB, this.name = QB, dB.l.prototype.hasOwnProperty("tree") || Object.defineProperty(dB.l.prototype, "tree", {
          get() {
            return mB(this)
          }
        }), this.parser = jB, this.extension = [qB.of(this), dB.l.languageData.of(((BB, jB, zB) => {
          let QB = sB(BB, jB, zB),
            nB = QB.type.prop(UB);
          if (!nB) return [];
          let dB = BB.facet(nB),
            IB = QB.type.prop(pB);
          if (IB) {
            let nB = QB.resolve(jB - QB.from, zB);
            for (let jB of IB)
              if (jB.test(nB, BB)) {
                let zB = BB.facet(jB.facet);
                return "replace" == jB.type ? zB : zB.concat(dB)
              }
          }
          return dB
        }))].concat(zB)
      }
      isActiveAt(BB, jB) {
        return sB(BB, jB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(UB) == this.data
      }
      findRegions(BB) {
        let jB = BB.facet(qB);
        if ((null === jB || void 0 === jB ? void 0 : jB.data) == this.data) return [{
          from: 0,
          to: BB.doc.length
        }];
        if (!jB || !jB.allowsNesting) return [];
        let zB = [],
          QB = (BB, jB) => {
            if (BB.prop(UB) == this.data) return void zB.push({
              from: jB,
              to: jB + BB.length
            });
            let dB = BB.prop(nB.j.mounted);
            if (dB) {
              if (dB.tree.prop(UB) == this.data) {
                if (dB.overlay)
                  for (let BB of dB.overlay) zB.push({
                    from: BB.from + jB,
                    to: BB.to + jB
                  });
                else zB.push({
                  from: jB,
                  to: jB + BB.length
                });
                return
              }
              if (dB.overlay) {
                let BB = zB.length;
                if (QB(dB.tree, dB.overlay[0].from + jB), zB.length > BB) return
              }
            }
            for (let zB = 0; zB < BB.children.length; zB++) {
              let dB = BB.children[zB];
              dB instanceof nB.x && QB(dB, BB.positions[zB] + jB)
            }
          };
        return QB(mB(BB), 0), zB
      }
      get allowsNesting() {
        return !0
      }
    }

    function sB(BB, jB, zB) {
      let QB = BB.facet(qB),
        dB = mB(BB).topNode;
      if (!QB || QB.allowsNesting)
        for (let IB = dB; IB; IB = IB.enter(jB, zB, nB.h.ExcludeBuffers | nB.h.EnterBracketed)) IB.type.isTop && (dB = IB);
      return dB
    }
    rB.setState = dB.D.define();
    class JB extends rB {
      constructor(BB, jB, zB) {
        super(BB, jB, [], zB), this.parser = jB
      }
      static define(BB) {
        let jB = aB(BB.languageData);
        return new JB(jB, BB.parser.configure({
          props: [UB.add((BB => BB.isTop ? jB : void 0))]
        }), BB.name)
      }
      configure(BB, jB) {
        return new JB(this.data, this.parser.configure(BB), jB || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function mB(BB) {
      let jB = BB.field(rB.state, !1);
      return jB ? jB.tree : nB.x.empty
    }

    function yB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB.doc.length;
      var zB;
      return (null === (zB = BB.field(rB.state, !1)) || void 0 === zB ? void 0 : zB.context.isDone(jB)) || !1
    }

    function kB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB.viewport.to,
        zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        QB = function(BB, jB) {
          let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var QB;
          let nB = null === (QB = BB.field(rB.state, !1)) || void 0 === QB ? void 0 : QB.context;
          if (!nB) return null;
          let dB = nB.viewport;
          nB.updateViewport({
            from: 0,
            to: jB
          });
          let IB = nB.isDone(jB) || nB.work(zB, jB) ? nB.tree : null;
          return nB.updateViewport(dB), IB
        }(BB.state, jB, zB);
      return QB != mB(BB.state) && BB.dispatch({}), !!QB
    }
    class GB {
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
      read(BB, jB) {
        let zB = this.cursorPos - this.string.length;
        return BB < zB || jB >= this.cursorPos ? this.doc.sliceString(BB, jB) : this.string.slice(BB - zB, jB - zB)
      }
    }
    let LB = null;
    class gB {
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          QB = arguments.length > 3 ? arguments[3] : void 0,
          nB = arguments.length > 4 ? arguments[4] : void 0,
          dB = arguments.length > 5 ? arguments[5] : void 0,
          IB = arguments.length > 6 ? arguments[6] : void 0,
          NB = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = BB, this.state = jB, this.fragments = zB, this.tree = QB, this.treeLen = nB, this.viewport = dB, this.skipped = IB, this.scheduleOn = NB, this.parse = null, this.tempSkipped = []
      }
      static create(BB, jB, zB) {
        return new gB(BB, jB, [], nB.x.empty, 0, zB, [], null)
      }
      startParse() {
        return this.parser.startParse(new GB(this.state.doc), this.fragments)
      }
      work(BB, jB) {
        return null != jB && jB >= this.state.doc.length && (jB = void 0), this.tree != nB.x.empty && this.isDone(null !== jB && void 0 !== jB ? jB : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var zB;
          if ("number" == typeof BB) {
            let jB = Date.now() + BB;
            BB = () => Date.now() > jB
          }
          for (this.parse || (this.parse = this.startParse()), null != jB && (null == this.parse.stoppedAt || this.parse.stoppedAt > jB) && jB < this.state.doc.length && this.parse.stopAt(jB);;) {
            let QB = this.parse.advance();
            if (QB) {
              if (this.fragments = this.withoutTempSkipped(nB.t.addTree(QB, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (zB = this.parse.stoppedAt) && void 0 !== zB ? zB : this.state.doc.length, this.tree = QB, this.parse = null, !(this.treeLen < (null !== jB && void 0 !== jB ? jB : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (BB()) return !1
          }
        }))
      }
      takeTree() {
        let BB, jB;
        this.parse && (BB = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > BB) && this.parse.stopAt(BB), this.withContext((() => {
          for (; !(jB = this.parse.advance()););
        })), this.treeLen = BB, this.tree = jB, this.fragments = this.withoutTempSkipped(nB.t.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(BB) {
        let jB = LB;
        LB = this;
        try {
          return BB()
        } finally {
          LB = jB
        }
      }
      withoutTempSkipped(BB) {
        for (let jB; jB = this.tempSkipped.pop();) BB = tB(BB, jB.from, jB.to);
        return BB
      }
      changes(BB, jB) {
        let {
          fragments: zB,
          tree: QB,
          treeLen: dB,
          viewport: IB,
          skipped: NB
        } = this;
        if (this.takeTree(), !BB.empty) {
          let jB = [];
          if (BB.iterChangedRanges(((BB, zB, QB, nB) => jB.push({
              fromA: BB,
              toA: zB,
              fromB: QB,
              toB: nB
            }))), zB = nB.t.applyChanges(zB, jB), QB = nB.x.empty, dB = 0, IB = {
              from: BB.mapPos(IB.from, -1),
              to: BB.mapPos(IB.to, 1)
            }, this.skipped.length) {
            NB = [];
            for (let jB of this.skipped) {
              let zB = BB.mapPos(jB.from, 1),
                QB = BB.mapPos(jB.to, -1);
              zB < QB && NB.push({
                from: zB,
                to: QB
              })
            }
          }
        }
        return new gB(this.parser, jB, zB, QB, dB, IB, NB, this.scheduleOn)
      }
      updateViewport(BB) {
        if (this.viewport.from == BB.from && this.viewport.to == BB.to) return !1;
        this.viewport = BB;
        let jB = this.skipped.length;
        for (let zB = 0; zB < this.skipped.length; zB++) {
          let {
            from: jB,
            to: QB
          } = this.skipped[zB];
          jB < BB.to && QB > BB.from && (this.fragments = tB(this.fragments, jB, QB), this.skipped.splice(zB--, 1))
        }
        return !(this.skipped.length >= jB) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(BB, jB) {
        this.skipped.push({
          from: BB,
          to: jB
        })
      }
      static getSkippingParser(BB) {
        return new class extends nB.s {
          createParse(jB, zB, QB) {
            let dB = QB[0].from,
              IB = QB[QB.length - 1].to;
            return {
              parsedPos: dB,
              advance() {
                let jB = LB;
                if (jB) {
                  for (let BB of QB) jB.tempSkipped.push(BB);
                  BB && (jB.scheduleOn = jB.scheduleOn ? Promise.all([jB.scheduleOn, BB]) : BB)
                }
                return this.parsedPos = IB, new nB.x(nB.n.none, [], [], IB - dB)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(BB) {
        BB = Math.min(BB, this.state.doc.length);
        let jB = this.fragments;
        return this.treeLen >= BB && jB.length && 0 == jB[0].from && jB[0].to >= BB
      }
      static get() {
        return LB
      }
    }

    function tB(BB, jB, zB) {
      return nB.t.applyChanges(BB, [{
        fromA: jB,
        toA: zB,
        fromB: jB,
        toB: zB
      }])
    }
    class SB {
      constructor(BB) {
        this.context = BB, this.tree = BB.tree
      }
      apply(BB) {
        if (!BB.docChanged && this.tree == this.context.tree) return this;
        let jB = this.context.changes(BB.changes, BB.state),
          zB = this.context.treeLen == BB.startState.doc.length ? void 0 : Math.max(BB.changes.mapPos(this.context.treeLen), jB.viewport.to);
        return jB.work(20, zB) || jB.takeTree(), new SB(jB)
      }
      static init(BB) {
        let jB = Math.min(3e3, BB.doc.length),
          zB = gB.create(BB.facet(qB).parser, BB, {
            from: 0,
            to: jB
          });
        return zB.work(20, jB) || zB.takeTree(), new SB(zB)
      }
    }
    rB.state = dB.F.define({
      create: SB.init,
      update(BB, jB) {
        for (let zB of jB.effects)
          if (zB.is(rB.setState)) return zB.value;
        return jB.startState.facet(qB) != jB.state.facet(qB) ? SB.init(jB.state) : BB.apply(jB)
      }
    });
    let MB = BB => {
      let jB = setTimeout((() => BB()), 500);
      return () => clearTimeout(jB)
    };
    "undefined" != typeof requestIdleCallback && (MB = BB => {
      let jB = -1,
        zB = setTimeout((() => {
          jB = requestIdleCallback(BB, {
            timeout: 400
          })
        }), 100);
      return () => jB < 0 ? clearTimeout(zB) : cancelIdleCallback(jB)
    });
    const EB = "undefined" != typeof navigator && (null === (QB = navigator.scheduling) || void 0 === QB ? void 0 : QB.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      iB = IB.o.fromClass(class {
        constructor(BB) {
          this.view = BB, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(BB) {
          let jB = this.view.state.field(rB.state).context;
          (jB.updateViewport(BB.view.viewport) || this.view.viewport.to > jB.treeLen) && this.scheduleWork(), (BB.docChanged || BB.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(jB)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: BB
          } = this.view, jB = BB.field(rB.state);
          jB.tree == jB.context.tree && jB.context.isDone(BB.doc.length) || (this.working = MB(this.work))
        }
        work(BB) {
          this.working = null;
          let jB = Date.now();
          if (this.chunkEnd < jB && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = jB + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: zB,
            viewport: {
              to: QB
            }
          } = this.view, nB = zB.field(rB.state);
          if (nB.tree == nB.context.tree && nB.context.isDone(QB + 1e5)) return;
          let dB = Date.now() + Math.min(this.chunkBudget, 100, BB && !EB ? Math.max(25, BB.timeRemaining() - 5) : 1e9),
            IB = nB.context.treeLen < QB && zB.doc.length > QB + 1e3,
            NB = nB.context.work((() => EB && EB() || Date.now() > dB), QB + (IB ? 0 : 1e5));
          this.chunkBudget -= Date.now() - jB, (NB || this.chunkBudget <= 0) && (nB.context.takeTree(), this.view.dispatch({
            effects: rB.setState.of(new SB(nB.context))
          })), this.chunkBudget > 0 && (!NB || IB) && this.scheduleWork(), this.checkAsyncSchedule(nB.context)
        }
        checkAsyncSchedule(BB) {
          BB.scheduleOn && (this.workScheduled++, BB.scheduleOn.then((() => this.scheduleWork())).catch((BB => (0, IB._)(this.view.state, BB))).then((() => this.workScheduled--)), BB.scheduleOn = null)
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
      qB = dB.p.define({
        combine: BB => BB.length ? BB[0] : null,
        enables: BB => [rB.state, iB, IB.k.contentAttributes.compute([BB], (jB => {
          let zB = jB.facet(BB);
          return zB && zB.name ? {
            "data-language": zB.name
          } : {}
        }))]
      });
    class fB {
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = BB, this.support = jB, this.extension = [BB, jB]
      }
    }
    const oB = dB.p.define(),
      HB = dB.p.define({
        combine: BB => {
          if (!BB.length) return "  ";
          let jB = BB[0];
          if (!jB || /\S/.test(jB) || Array.from(jB).some((BB => BB != jB[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(BB[0]));
          return jB
        }
      });

    function DB(BB) {
      let jB = BB.facet(HB);
      return 9 == jB.charCodeAt(0) ? BB.tabSize * jB.length : jB.length
    }

    function FB(BB, jB) {
      let zB = "",
        QB = BB.tabSize,
        nB = BB.facet(HB)[0];
      if ("\t" == nB) {
        for (; jB >= QB;) zB += "\t", jB -= QB;
        nB = " "
      }
      for (let dB = 0; dB < jB; dB++) zB += nB;
      return zB
    }

    function YB(BB, jB) {
      BB instanceof dB.l && (BB = new VB(BB));
      for (let QB of BB.state.facet(oB)) {
        let zB = QB(BB, jB);
        if (void 0 !== zB) return zB
      }
      let zB = mB(BB.state);
      return zB.length >= jB ? function(BB, jB, zB) {
        let QB = jB.resolveStack(zB),
          nB = jB.resolveInner(zB, -1).resolve(zB, 0).enterUnfinishedNodesBefore(zB);
        if (nB != QB.node) {
          let BB = [];
          for (let jB = nB; jB && !(jB.from < QB.node.from || jB.to > QB.node.to || jB.from == QB.node.from && jB.type == QB.node.type); jB = jB.parent) BB.push(jB);
          for (let jB = BB.length - 1; jB >= 0; jB--) QB = {
            node: BB[jB],
            next: QB
          }
        }
        return XB(QB, BB, zB)
      }(BB, zB, jB) : null
    }
    class VB {
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = BB, this.options = jB, this.unit = DB(BB)
      }
      lineAt(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          zB = this.state.doc.lineAt(BB),
          {
            simulateBreak: QB,
            simulateDoubleBreak: nB
          } = this.options;
        return null != QB && QB >= zB.from && QB <= zB.to ? nB && QB == BB ? {
          text: "",
          from: BB
        } : (jB < 0 ? QB < BB : QB <= BB) ? {
          text: zB.text.slice(QB - zB.from),
          from: QB
        } : {
          text: zB.text.slice(0, QB - zB.from),
          from: zB.from
        } : zB
      }
      textAfterPos(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && BB == this.options.simulateBreak) return "";
        let {
          text: zB,
          from: QB
        } = this.lineAt(BB, jB);
        return zB.slice(BB - QB, Math.min(zB.length, BB + 100 - QB))
      }
      column(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: zB,
            from: QB
          } = this.lineAt(BB, jB),
          nB = this.countColumn(zB, BB - QB),
          dB = this.options.overrideIndentation ? this.options.overrideIndentation(QB) : -1;
        return dB > -1 && (nB += dB - this.countColumn(zB, zB.search(/\S|$/))), nB
      }
      countColumn(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB.length;
        return (0, dB.Q)(BB, this.state.tabSize, jB)
      }
      lineIndent(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: zB,
            from: QB
          } = this.lineAt(BB, jB),
          nB = this.options.overrideIndentation;
        if (nB) {
          let BB = nB(QB);
          if (BB > -1) return BB
        }
        return this.countColumn(zB, zB.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const hB = new nB.j;

    function XB(BB, jB, zB) {
      for (let QB = BB; QB; QB = QB.next) {
        let BB = ZB(QB.node);
        if (BB) return BB(TB.create(jB, zB, QB))
      }
      return 0
    }

    function ZB(BB) {
      let jB = BB.type.prop(hB);
      if (jB) return jB;
      let zB, QB = BB.firstChild;
      if (QB && (zB = QB.type.prop(nB.j.closedBy))) {
        let jB = BB.lastChild,
          QB = jB && zB.indexOf(jB.name) > -1;
        return BB => eB(BB, !0, 1, void 0, QB && ! function(BB) {
          return BB.pos == BB.options.simulateBreak && BB.options.simulateDoubleBreak
        }(BB) ? jB.from : void 0)
      }
      return null == BB.parent ? AB : null
    }

    function AB() {
      return 0
    }
    class TB extends VB {
      constructor(BB, jB, zB) {
        super(BB.state, BB.options), this.base = BB, this.pos = jB, this.context = zB
      }
      get node() {
        return this.context.node
      }
      static create(BB, jB, zB) {
        return new TB(BB, jB, zB)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(BB) {
        let jB = this.state.doc.lineAt(BB.from);
        for (;;) {
          let zB = BB.resolve(jB.from);
          for (; zB.parent && zB.parent.from == zB.from;) zB = zB.parent;
          if (PB(zB, BB)) break;
          jB = this.state.doc.lineAt(zB.from)
        }
        return this.lineIndent(jB.from)
      }
      continue () {
        return XB(this.context.next, this.base, this.pos)
      }
    }

    function PB(BB, jB) {
      for (let zB = jB; zB; zB = zB.parent)
        if (BB == zB) return !0;
      return !1
    }

    function WB(BB) {
      let {
        closing: jB,
        align: zB = !0,
        units: QB = 1
      } = BB;
      return BB => eB(BB, zB, QB, jB)
    }

    function eB(BB, jB, zB, QB, nB) {
      let dB = BB.textAfter,
        IB = dB.match(/^\s*/)[0].length,
        NB = QB && dB.slice(IB, IB + QB.length) == QB || nB == BB.pos + IB,
        uB = jB ? function(BB) {
          let jB = BB.node,
            zB = jB.childAfter(jB.from),
            QB = jB.lastChild;
          if (!zB) return null;
          let nB = BB.options.simulateBreak,
            dB = BB.state.doc.lineAt(zB.from),
            IB = null == nB || nB <= dB.from ? dB.to : Math.min(dB.to, nB);
          for (let NB = zB.to;;) {
            let BB = jB.childAfter(NB);
            if (!BB || BB == QB) return null;
            if (!BB.type.isSkipped) {
              if (BB.from >= IB) return null;
              let jB = /^ */.exec(dB.text.slice(zB.to - dB.from))[0].length;
              return {
                from: zB.from,
                to: zB.to + jB
              }
            }
            NB = BB.to
          }
        }(BB) : null;
      return uB ? NB ? BB.column(uB.from) : BB.column(uB.to) : BB.baseIndent + (NB ? 0 : BB.unit * zB)
    }
    const lB = BB => BB.baseIndent;

    function wB() {
      let {
        except: BB,
        units: jB = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return zB => {
        let QB = BB && BB.test(zB.textAfter);
        return zB.baseIndent + (QB ? 0 : jB * zB.unit)
      }
    }
    const xB = 200;

    function KB() {
      return dB.l.transactionFilter.of((BB => {
        if (!BB.docChanged || !BB.isUserEvent("input.type") && !BB.isUserEvent("input.complete")) return BB;
        let jB = BB.startState.languageDataAt("indentOnInput", BB.startState.selection.main.head);
        if (!jB.length) return BB;
        let zB = BB.newDoc,
          {
            head: QB
          } = BB.newSelection.main,
          nB = zB.lineAt(QB);
        if (QB > nB.from + xB) return BB;
        let dB = zB.sliceString(nB.from, QB);
        if (!jB.some((BB => BB.test(dB)))) return BB;
        let {
          state: IB
        } = BB, NB = -1, uB = [];
        for (let {
            head: UB
          }
          of IB.selection.gy) {
          let BB = IB.doc.lineAt(UB);
          if (BB.from == NB) continue;
          NB = BB.from;
          let jB = YB(IB, BB.from);
          if (null == jB) continue;
          let zB = /^\s*/.exec(BB.text)[0],
            QB = FB(IB, jB);
          zB != QB && uB.push({
            from: BB.from,
            to: BB.from + zB.length,
            insert: QB
          })
        }
        return uB.length ? [BB, {
          changes: uB,
          sequential: !0
        }] : BB
      }))
    }
    const CB = dB.p.define(),
      cB = new nB.j;

    function bB(BB) {
      let jB = BB.firstChild,
        zB = BB.lastChild;
      return jB && jB.to < zB.from ? {
        from: jB.to,
        to: zB.type.isError ? BB.to : zB.from
      } : null
    }

    function vB(BB) {
      let jB = BB.lastChild;
      return jB && jB.to == BB.to && jB.type.isError
    }

    function RB(BB, jB, zB) {
      for (let QB of BB.facet(CB)) {
        let nB = QB(BB, jB, zB);
        if (nB) return nB
      }
      return function(BB, jB, zB) {
        let QB = mB(BB);
        if (QB.length < zB) return null;
        let nB = null;
        for (let dB = QB.resolveStack(zB, 1); dB; dB = dB.next) {
          let IB = dB.node;
          if (IB.to <= zB || IB.from > zB) continue;
          if (nB && IB.from < jB) break;
          let NB = IB.type.prop(cB);
          if (NB && (IB.to < QB.length - 50 || QB.length == BB.doc.length || !vB(IB))) {
            let QB = NB(IB, BB);
            QB && QB.from <= zB && QB.from >= jB && QB.to > zB && (nB = QB)
          }
        }
        return nB
      }(BB, jB, zB)
    }

    function OB(BB, jB) {
      let zB = jB.mapPos(BB.from, 1),
        QB = jB.mapPos(BB.to, -1);
      return zB >= QB ? void 0 : {
        from: zB,
        to: QB
      }
    }
    const Bj = dB.D.define({
        map: OB
      }),
      jj = dB.D.define({
        map: OB
      });

    function zj(BB) {
      let jB = [];
      for (let {
          head: zB
        }
        of BB.state.selection.gy) jB.some((BB => BB.from <= zB && BB.to >= zB)) || jB.push(BB.lineBlockAt(zB));
      return jB
    }
    const Qj = dB.F.define({
      create: () => IB.d.none,
      update(BB, jB) {
        jB.isUserEvent("delete") && jB.changes.iterChangedRanges(((jB, zB) => BB = nj(BB, jB, zB))), BB = BB.map(jB.changes);
        for (let zB of jB.effects)
          if (zB.is(Bj) && !Ij(BB, zB.value.from, zB.value.to)) {
            let {
              preparePlaceholder: QB
            } = jB.state.facet(pj), nB = QB ? IB.d.replace({
              widget: new mj(QB(jB.state, zB.value))
            }) : Jj;
            BB = BB.update({
              add: [nB.range(zB.value.from, zB.value.to)]
            })
          } else zB.is(jj) && (BB = BB.update({
            filter: (BB, jB) => zB.value.from != BB || zB.value.to != jB,
            filterFrom: zB.value.from,
            filterTo: zB.value.to
          }));
        return jB.selection && (BB = nj(BB, jB.selection.main.head)), BB
      },
      provide: BB => IB.k.pQ.from(BB),
      toJSON(BB, jB) {
        let zB = [];
        return BB.between(0, jB.doc.length, ((BB, jB) => {
          zB.push(BB, jB)
        })), zB
      },
      fromJSON(BB) {
        if (!Array.isArray(BB) || BB.length % 2) throw new RangeError("Invalid JSON for fold state");
        let jB = [];
        for (let zB = 0; zB < BB.length;) {
          let QB = BB[zB++],
            nB = BB[zB++];
          if ("number" != typeof QB || "number" != typeof nB) throw new RangeError("Invalid JSON for fold state");
          jB.push(Jj.range(QB, nB))
        }
        return IB.d.set(jB, !0)
      }
    });

    function nj(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : jB,
        QB = !1;
      return BB.between(jB, zB, ((BB, nB) => {
        BB < zB && nB > jB && (QB = !0)
      })), QB ? BB.update({
        filterFrom: jB,
        filterTo: zB,
        filter: (BB, QB) => BB >= zB || QB <= jB
      }) : BB
    }

    function dj(BB, jB, zB) {
      var QB;
      let nB = null;
      return null === (QB = BB.field(Qj, !1)) || void 0 === QB || QB.between(jB, zB, ((BB, jB) => {
        (!nB || nB.from > BB) && (nB = {
          from: BB,
          to: jB
        })
      })), nB
    }

    function Ij(BB, jB, zB) {
      let QB = !1;
      return BB.between(jB, jB, ((BB, nB) => {
        BB == jB && nB == zB && (QB = !0)
      })), QB
    }

    function Nj(BB, jB) {
      return BB.field(Qj, !1) ? jB : jB.concat(dB.D.appendConfig.of(rj()))
    }

    function uj(BB, jB) {
      let zB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        QB = BB.state.doc.lineAt(jB.from).number,
        nB = BB.state.doc.lineAt(jB.to).number;
      return IB.k.announce.of(`${BB.state.phrase(zB?"Folded lines":"Unfolded lines")} ${QB} ${BB.state.phrase("to")} ${nB}.`)
    }
    const Uj = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: BB => {
          for (let jB of zj(BB)) {
            let zB = RB(BB.state, jB.from, jB.to);
            if (zB) return BB.dispatch({
              effects: Nj(BB.state, [Bj.of(zB), uj(BB, zB)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: BB => {
          if (!BB.state.field(Qj, !1)) return !1;
          let jB = [];
          for (let zB of zj(BB)) {
            let QB = dj(BB.state, zB.from, zB.to);
            QB && jB.push(jj.of(QB), uj(BB, QB, !1))
          }
          return jB.length && BB.dispatch({
            effects: jB
          }), jB.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: BB => {
          let {
            state: jB
          } = BB, zB = [];
          for (let QB = 0; QB < jB.doc.length;) {
            let nB = BB.lineBlockAt(QB),
              dB = RB(jB, nB.from, nB.to);
            dB && zB.push(Bj.of(dB)), QB = (dB ? BB.lineBlockAt(dB.to) : nB).to + 1
          }
          return zB.length && BB.dispatch({
            effects: Nj(BB.state, zB)
          }), !!zB.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: BB => {
          let jB = BB.state.field(Qj, !1);
          if (!jB || !jB.size) return !1;
          let zB = [];
          return jB.between(0, BB.state.doc.length, ((BB, jB) => {
            zB.push(jj.of({
              from: BB,
              to: jB
            }))
          })), BB.dispatch({
            effects: zB
          }), !0
        }
      }],
      aj = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      pj = dB.p.define({
        combine: BB => (0, dB.O)(BB, aj)
      });

    function rj(BB) {
      let jB = [Qj, Lj];
      return BB && jB.push(pj.of(BB)), jB
    }

    function sj(BB, jB) {
      let {
        state: zB
      } = BB, QB = zB.facet(pj), nB = jB => {
        let zB = BB.lineBlockAt(BB.posAtDOM(jB.target)),
          QB = dj(BB.state, zB.from, zB.to);
        QB && BB.dispatch({
          effects: jj.of(QB)
        }), jB.preventDefault()
      };
      if (QB.placeholderDOM) return QB.placeholderDOM(BB, nB, jB);
      let dB = document.createElement("span");
      return dB.textContent = QB.placeholderText, dB.setAttribute("aria-label", zB.phrase("folded code")), dB.title = zB.phrase("unfold"), dB.className = "cm-foldPlaceholder", dB.onclick = nB, dB
    }
    const Jj = IB.d.replace({
      widget: new class extends IB.r {
        toDOM(BB) {
          return sj(BB, null)
        }
      }
    });
    class mj extends IB.r {
      constructor(BB) {
        super(), this.value = BB
      }
      eq(BB) {
        return this.value == BB.value
      }
      toDOM(BB) {
        return sj(BB, this.value)
      }
    }
    const yj = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class kj extends IB.l {
      constructor(BB, jB) {
        super(), this.config = BB, this.open = jB
      }
      eq(BB) {
        return this.config == BB.config && this.open == BB.open
      }
      toDOM(BB) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let jB = document.createElement("span");
        return jB.textContent = this.open ? this.config.openText : this.config.closedText, jB.title = BB.state.phrase(this.open ? "Fold line" : "Unfold line"), jB
      }
    }

    function Gj() {
      let BB = {
          ...yj,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        jB = new kj(BB, !0),
        zB = new kj(BB, !1),
        QB = IB.o.fromClass(class {
          constructor(BB) {
            this.from = BB.viewport.from, this.markers = this.buildMarkers(BB)
          }
          update(jB) {
            (jB.docChanged || jB.viewportChanged || jB.startState.facet(qB) != jB.state.facet(qB) || jB.startState.field(Qj, !1) != jB.state.field(Qj, !1) || mB(jB.startState) != mB(jB.state) || BB.foldingChanged(jB)) && (this.markers = this.buildMarkers(jB.view))
          }
          buildMarkers(BB) {
            let QB = new dB.y;
            for (let nB of BB.viewportLineBlocks) {
              let dB = dj(BB.state, nB.from, nB.to) ? zB : RB(BB.state, nB.from, nB.to) ? jB : null;
              dB && QB.add(nB.from, nB.from, dB)
            }
            return QB.finish()
          }
        }),
        {
          domEventHandlers: nB
        } = BB;
      return [QB, (0, IB.H)({
        class: "cm-foldGutter",
        markers(BB) {
          var jB;
          return (null === (jB = BB.plugin(QB)) || void 0 === jB ? void 0 : jB.markers) || dB.z.empty
        },
        initialSpacer: () => new kj(BB, !1),
        domEventHandlers: {
          ...nB,
          click: (BB, jB, zB) => {
            if (nB.click && nB.click(BB, jB, zB)) return !0;
            let QB = dj(BB.state, jB.from, jB.to);
            if (QB) return BB.dispatch({
              effects: jj.of(QB)
            }), !0;
            let dB = RB(BB.state, jB.from, jB.to);
            return !!dB && (BB.dispatch({
              effects: Bj.of(dB)
            }), !0)
          }
        }
      }), rj()]
    }
    const Lj = IB.k.baseTheme({
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
    class gj {
      constructor(BB, jB) {
        let zB;

        function QB(BB) {
          let jB = uB.e.newName();
          return (zB || (zB = Object.create(null)))["." + jB] = BB, jB
        }
        this.specs = BB;
        const nB = "string" == typeof jB.all ? jB.all : jB.all ? QB(jB.all) : void 0,
          dB = jB.scope;
        this.scope = dB instanceof rB ? BB => BB.prop(UB) == dB.data : dB ? BB => BB == dB : void 0, this.style = (0, NB.g)(BB.map((BB => ({
          tag: BB.tag,
          class: BB.class || QB(Object.assign({}, BB, {
            tag: null
          }))
        }))), {
          all: nB
        }).style, this.module = zB ? new uB.e(zB) : null, this.themeType = jB.themeType
      }
      static define(BB, jB) {
        return new gj(BB, jB || {})
      }
    }
    const tj = dB.p.define(),
      Sj = dB.p.define({
        combine: BB => BB.length ? [BB[0]] : null
      });

    function Mj(BB) {
      let jB = BB.facet(tj);
      return jB.length ? jB : BB.facet(Sj)
    }

    function Ej(BB, jB) {
      let zB, QB = [qj];
      return BB instanceof gj && (BB.module && QB.push(IB.k.styleModule.of(BB.module)), zB = BB.themeType), (null === jB || void 0 === jB ? void 0 : jB.fallback) ? QB.push(Sj.of(BB)) : zB ? QB.push(tj.computeN([IB.k.darkTheme], (jB => jB.facet(IB.k.darkTheme) == ("dark" == zB) ? [BB] : []))) : QB.push(tj.of(BB)), QB
    }
    class ij {
      constructor(BB) {
        this.markCache = Object.create(null), this.tree = mB(BB.state), this.pQ = this.buildDeco(BB, Mj(BB.state)), this.decoratedTo = BB.viewport.to
      }
      update(BB) {
        let jB = mB(BB.state),
          zB = Mj(BB.state),
          QB = zB != Mj(BB.startState),
          {
            viewport: nB
          } = BB.view,
          dB = BB.changes.mapPos(this.decoratedTo, 1);
        jB.length < nB.to && !QB && jB.type == this.tree.type && dB >= nB.to ? (this.pQ = this.pQ.map(BB.changes), this.decoratedTo = dB) : (jB != this.tree || BB.viewportChanged || QB) && (this.tree = jB, this.pQ = this.buildDeco(BB.view, zB), this.decoratedTo = nB.to)
      }
      buildDeco(BB, jB) {
        if (!jB || !this.tree.length) return IB.d.none;
        let zB = new dB.y;
        for (let {
            from: QB,
            to: nB
          }
          of BB.I5)(0, NB.b)(this.tree, jB, ((BB, jB, QB) => {
          zB.add(BB, jB, this.markCache[QB] || (this.markCache[QB] = IB.d.mark({
            class: QB
          })))
        }), QB, nB);
        return zB.finish()
      }
    }
    const qj = dB.u.high(IB.o.fromClass(ij, {
        pQ: BB => BB.pQ
      })),
      fj = gj.define([{
        tag: NB.i.meta,
        color: "#404740"
      }, {
        tag: NB.i.link,
        textDecoration: "underline"
      }, {
        tag: NB.i.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: NB.i.emphasis,
        fontStyle: "italic"
      }, {
        tag: NB.i.strong,
        fontWeight: "bold"
      }, {
        tag: NB.i.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: NB.i.keyword,
        color: "#708"
      }, {
        tag: [NB.i.atom, NB.i.bool, NB.i.url, NB.i.contentSeparator, NB.i.labelName],
        color: "#219"
      }, {
        tag: [NB.i.literal, NB.i.inserted],
        color: "#164"
      }, {
        tag: [NB.i.string, NB.i.deleted],
        color: "#a11"
      }, {
        tag: [NB.i.regexp, NB.i.escape, NB.i.special(NB.i.string)],
        color: "#e40"
      }, {
        tag: NB.i.definition(NB.i.variableName),
        color: "#00f"
      }, {
        tag: NB.i.local(NB.i.variableName),
        color: "#30a"
      }, {
        tag: [NB.i.typeName, NB.i.namespace],
        color: "#085"
      }, {
        tag: NB.i.className,
        color: "#167"
      }, {
        tag: [NB.i.special(NB.i.variableName), NB.i.macroName],
        color: "#256"
      }, {
        tag: NB.i.definition(NB.i.propertyName),
        color: "#00c"
      }, {
        tag: NB.i.comment,
        color: "#940"
      }, {
        tag: NB.i.invalid,
        color: "#f00"
      }]),
      oj = IB.k.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      Hj = 1e4,
      Dj = "()[]{}",
      Fj = dB.p.define({
        combine: BB => (0, dB.O)(BB, {
          afterCursor: !0,
          brackets: Dj,
          maxScanDistance: Hj,
          renderMatch: hj
        })
      }),
      Yj = IB.d.mark({
        class: "cm-matchingBracket"
      }),
      Vj = IB.d.mark({
        class: "cm-nonmatchingBracket"
      });

    function hj(BB) {
      let jB = [],
        zB = BB.matched ? Yj : Vj;
      return jB.push(zB.range(BB.start.from, BB.start.to)), BB.end && jB.push(zB.range(BB.end.from, BB.end.to)), jB
    }

    function Xj(BB) {
      let jB = [],
        zB = BB.facet(Fj);
      for (let QB of BB.selection.gy) {
        if (!QB.empty) continue;
        let nB = ej(BB, QB.head, -1, zB) || QB.head > 0 && ej(BB, QB.head - 1, 1, zB) || zB.afterCursor && (ej(BB, QB.head, 1, zB) || QB.head < BB.doc.length && ej(BB, QB.head + 1, -1, zB));
        nB && (jB = jB.concat(zB.renderMatch(nB, BB)))
      }
      return IB.d.set(jB, !0)
    }
    const Zj = [IB.o.fromClass(class {
      constructor(BB) {
        this.paused = !1, this.pQ = Xj(BB.state)
      }
      update(BB) {
        (BB.docChanged || BB.selectionSet || this.paused) && (BB.view.composing ? (this.pQ = this.pQ.map(BB.changes), this.paused = !0) : (this.pQ = Xj(BB.state), this.paused = !1))
      }
    }, {
      pQ: BB => BB.pQ
    }), oj];

    function Aj() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Fj.of(BB), Zj]
    }
    const Tj = new nB.j;

    function Pj(BB, jB, zB) {
      let QB = BB.prop(jB < 0 ? nB.j.openedBy : nB.j.closedBy);
      if (QB) return QB;
      if (1 == BB.name.length) {
        let QB = zB.indexOf(BB.name);
        if (QB > -1 && QB % 2 == (jB < 0 ? 1 : 0)) return [zB[QB + jB]]
      }
      return null
    }

    function Wj(BB) {
      let jB = BB.type.prop(Tj);
      return jB ? jB(BB.node) : BB
    }

    function ej(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        nB = QB.maxScanDistance || Hj,
        dB = QB.brackets || Dj,
        IB = mB(BB),
        NB = IB.resolveInner(jB, zB);
      for (let uB = NB; uB; uB = uB.parent) {
        let QB = Pj(uB.type, zB, dB);
        if (QB && uB.from < uB.to) {
          let nB = Wj(uB);
          if (nB && (zB > 0 ? jB >= nB.from && jB < nB.to : jB > nB.from && jB <= nB.to)) return lj(BB, jB, zB, uB, nB, QB, dB)
        }
      }
      return function(BB, jB, zB, QB, nB, dB, IB) {
        if (zB < 0 ? !jB : jB == BB.doc.length) return null;
        let NB = zB < 0 ? BB.sliceDoc(jB - 1, jB) : BB.sliceDoc(jB, jB + 1),
          uB = IB.indexOf(NB);
        if (uB < 0 || uB % 2 == 0 != zB > 0) return null;
        let UB = {
            from: zB < 0 ? jB - 1 : jB,
            to: zB > 0 ? jB + 1 : jB
          },
          aB = BB.doc.iterRange(jB, zB > 0 ? BB.doc.length : 0),
          pB = 0;
        for (let rB = 0; !aB.next().done && rB <= dB;) {
          let BB = aB.value;
          zB < 0 && (rB += BB.length);
          let dB = jB + rB * zB;
          for (let jB = zB > 0 ? 0 : BB.length - 1, NB = zB > 0 ? BB.length : -1; jB != NB; jB += zB) {
            let NB = IB.indexOf(BB[jB]);
            if (!(NB < 0 || QB.resolveInner(dB + jB, 1).type != nB))
              if (NB % 2 == 0 == zB > 0) pB++;
              else {
                if (1 == pB) return {
                  start: UB,
                  end: {
                    from: dB + jB,
                    to: dB + jB + 1
                  },
                  matched: NB >> 1 == uB >> 1
                };
                pB--
              }
          }
          zB > 0 && (rB += BB.length)
        }
        return aB.done ? {
          start: UB,
          matched: !1
        } : null
      }(BB, jB, zB, IB, NB.type, nB, dB)
    }

    function lj(BB, jB, zB, QB, nB, dB, IB) {
      let NB = QB.parent,
        uB = {
          from: nB.from,
          to: nB.to
        },
        UB = 0,
        aB = null === NB || void 0 === NB ? void 0 : NB.cursor();
      if (aB && (zB < 0 ? aB.childBefore(QB.from) : aB.childAfter(QB.to)))
        do {
          if (zB < 0 ? aB.to <= QB.from : aB.from >= QB.to) {
            if (0 == UB && dB.indexOf(aB.type.name) > -1 && aB.from < aB.to) {
              let BB = Wj(aB);
              return {
                start: uB,
                end: BB ? {
                  from: BB.from,
                  to: BB.to
                } : void 0,
                matched: !0
              }
            }
            if (Pj(aB.type, zB, IB)) UB++;
            else if (Pj(aB.type, -zB, IB)) {
              if (0 == UB) {
                let BB = Wj(aB);
                return {
                  start: uB,
                  end: BB && BB.from < BB.to ? {
                    from: BB.from,
                    to: BB.to
                  } : void 0,
                  matched: !1
                }
              }
              UB--
            }
          }
        } while (zB < 0 ? aB.prevSibling() : aB.nextSibling());
      return {
        start: uB,
        matched: !1
      }
    }
    const wj = Object.create(null),
      xj = [nB.n.none],
      Kj = [],
      Cj = Object.create(null),
      cj = Object.create(null);
    for (let [Rj, Oj] of [
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
      ]) cj[Rj] = vj(wj, Oj);

    function bj(BB, jB) {
      Kj.indexOf(BB) > -1 || (Kj.push(BB), console.warn(jB))
    }

    function vj(BB, jB) {
      let zB = [];
      for (let nB of jB.split(" ")) {
        let jB = [];
        for (let zB of nB.split(".")) {
          let QB = BB[zB] || NB.i[zB];
          QB ? "function" == typeof QB ? jB.length ? jB = jB.map(QB) : bj(zB, `Modifier ${zB} used at start of tag`) : jB.length ? bj(zB, `Tag ${zB} used as modifier`) : jB = Array.isArray(QB) ? QB : [QB] : bj(zB, `Unknown highlighting tag ${zB}`)
        }
        for (let BB of jB) zB.push(BB)
      }
      if (!zB.length) return 0;
      let QB = jB.replace(/ /g, "_"),
        dB = QB + " " + zB.map((BB => BB.id)),
        IB = Cj[dB];
      if (IB) return IB.id;
      let uB = Cj[dB] = nB.n.define({
        id: xj.length,
        name: QB,
        props: [(0, NB.f)({
          [QB]: zB
        })]
      });
      return xj.push(uB), uB.id
    }
    IB.h.RTL, IB.h.LTR
  },
  41470: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => LB,
      g: () => MB
    });
    var QB = zB(41415),
      nB = zB(41408),
      dB = zB(41430);
    class IB {
      constructor(BB, jB, zB) {
        this.from = BB, this.to = jB, this.diagnostic = zB
      }
    }
    class NB {
      constructor(BB, jB, zB) {
        this.diagnostics = BB, this.panel = jB, this.selected = zB
      }
      static init(BB, jB, zB) {
        let dB = zB.facet(tB).markerFilter;
        dB && (BB = dB(BB, zB));
        let IB = BB.slice().sort(((BB, jB) => BB.from - jB.from || BB.to - jB.to)),
          UB = new nB.y,
          aB = [],
          pB = 0,
          rB = zB.doc.iter(),
          sB = 0,
          JB = zB.doc.length;
        for (let nB = 0;;) {
          let BB, jB, zB = nB == IB.length ? null : IB[nB];
          if (!zB && !aB.length) break;
          if (aB.length) BB = pB, jB = aB.reduce(((BB, jB) => Math.min(BB, jB.to)), zB && zB.from > BB ? zB.from : 1e8);
          else {
            if (BB = zB.from, BB > JB) break;
            jB = zB.to, aB.push(zB), nB++
          }
          for (; nB < IB.length;) {
            let zB = IB[nB];
            if (zB.from != BB || !(zB.to > zB.from || zB.to == BB)) {
              jB = Math.min(zB.from, jB);
              break
            }
            aB.push(zB), nB++, jB = Math.min(zB.to, jB)
          }
          jB = Math.min(jB, JB);
          let dB = !1;
          if (aB.some((zB => zB.from == BB && (zB.to == jB || jB == JB))) && (dB = BB == jB, !dB && jB - BB < 10)) {
            let zB = BB - (sB + rB.value.length);
            zB > 0 && (rB.next(zB), sB = BB);
            for (let QB = BB;;) {
              if (QB >= jB) {
                dB = !0;
                break
              }
              if (!rB.lineBreak && sB + rB.value.length > QB) break;
              QB = sB + rB.value.length, sB += rB.value.length, rB.next()
            }
          }
          let NB = VB(aB);
          if (dB) UB.add(BB, BB, QB.d.widget({
            widget: new qB(NB),
            diagnostics: aB.slice()
          }));
          else {
            let zB = aB.reduce(((BB, jB) => jB.markClass ? BB + " " + jB.markClass : BB), "");
            UB.add(BB, jB, QB.d.mark({
              class: "cm-lintRange cm-lintRange-" + NB + zB,
              diagnostics: aB.slice(),
              inclusiveEnd: aB.some((BB => BB.to > jB))
            }))
          }
          if (pB = jB, pB == JB) break;
          for (let QB = 0; QB < aB.length; QB++) aB[QB].to <= pB && aB.splice(QB--, 1)
        }
        let mB = UB.finish();
        return new NB(mB, jB, uB(mB))
      }
    }

    function uB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        QB = null;
      return BB.between(zB, 1e9, ((BB, zB, nB) => {
        let {
          spec: dB
        } = nB;
        if (!(jB && dB.diagnostics.indexOf(jB) < 0))
          if (QB) {
            if (dB.diagnostics.indexOf(QB.diagnostic) < 0) return !1;
            QB = new IB(QB.from, zB, QB.diagnostic)
          } else QB = new IB(BB, zB, jB || dB.diagnostics[0])
      })), QB
    }

    function UB(BB, jB) {
      let zB = jB.pos,
        QB = jB.end || zB,
        nB = BB.state.facet(tB).hideOn(BB, zB, QB);
      if (null != nB) return nB;
      let dB = BB.startState.doc.lineAt(jB.pos);
      return !(!BB.effects.some((BB => BB.is(pB))) && !BB.changes.touchesRange(dB.from, Math.max(dB.to, QB)))
    }

    function aB(BB, jB) {
      return BB.field(JB, !1) ? jB : jB.concat(nB.D.appendConfig.of(hB))
    }
    const pB = nB.D.define(),
      rB = nB.D.define(),
      sB = nB.D.define(),
      JB = nB.F.define({
        create: () => new NB(QB.d.none, null, null),
        update(BB, jB) {
          if (jB.docChanged && BB.diagnostics.size) {
            let zB = BB.diagnostics.map(jB.changes),
              QB = null,
              nB = BB.panel;
            if (BB.selected) {
              let nB = jB.changes.mapPos(BB.selected.from, 1);
              QB = uB(zB, BB.selected.diagnostic, nB) || uB(zB, null, nB)
            }!zB.size && nB && jB.state.facet(tB).autoPanel && (nB = null), BB = new NB(zB, nB, QB)
          }
          for (let zB of jB.effects)
            if (zB.is(pB)) {
              let QB = jB.state.facet(tB).autoPanel ? zB.value.length ? oB.open : null : BB.panel;
              BB = NB.init(zB.value, QB, jB.state)
            } else zB.is(rB) ? BB = new NB(BB.diagnostics, zB.value ? oB.open : null, BB.selected) : zB.is(sB) && (BB = new NB(BB.diagnostics, BB.panel, zB.value));
          return BB
        },
        provide: BB => [QB.kb.from(BB, (BB => BB.panel)), QB.k.pQ.from(BB, (BB => BB.diagnostics))]
      });
    const mB = QB.d.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function yB(BB, jB, zB) {
      let QB, {
          diagnostics: nB
        } = BB.state.field(JB),
        dB = -1,
        IB = -1;
      nB.between(jB - (zB < 0 ? 1 : 0), jB + (zB > 0 ? 1 : 0), ((BB, nB, NB) => {
        let {
          spec: uB
        } = NB;
        if (jB >= BB && jB <= nB && (BB == nB || (jB > BB || zB > 0) && (jB < nB || zB < 0))) return QB = uB.diagnostics, dB = BB, IB = nB, !1
      }));
      let NB = BB.state.facet(tB).tooltipFilter;
      return QB && NB && (QB = NB(QB, BB.state)), QB ? {
        pos: dB,
        end: IB,
        above: BB.state.doc.lineAt(dB).to < IB,
        create: () => ({
          dom: kB(BB, QB)
        })
      } : null
    }

    function kB(BB, jB) {
      return (0, dB.e)("ul", {
        class: "cm-tooltip-lint"
      }, jB.map((jB => iB(BB, jB, !1))))
    }
    const GB = BB => {
        let jB = BB.state.field(JB, !1);
        return !(!jB || !jB.panel) && (BB.dispatch({
          effects: rB.of(!1)
        }), !0)
      },
      LB = [{
        key: "Mod-Shift-m",
        run: BB => {
          let jB = BB.state.field(JB, !1);
          jB && jB.panel || BB.dispatch({
            effects: aB(BB.state, [rB.of(!0)])
          });
          let zB = (0, QB.C)(BB, oB.open);
          return zB && zB.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: BB => {
          let jB = BB.state.field(JB, !1);
          if (!jB) return !1;
          let zB = BB.state.selection.main,
            QB = uB(jB.diagnostics, null, zB.to + 1);
          return !(!QB && (QB = uB(jB.diagnostics, null, 0), !QB || QB.from == zB.from && QB.to == zB.to)) && (BB.dispatch({
            selection: {
              anchor: QB.from,
              head: QB.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      gB = QB.o.fromClass(class {
        constructor(BB) {
          this.view = BB, this.timeout = -1, this.set = !0;
          let {
            delay: jB
          } = BB.state.facet(tB);
          this.lintTime = Date.now() + jB, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, jB)
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
              sources: jB
            } = BB.facet(tB);
            jB.length && function(BB, jB, zB) {
              let QB = [],
                nB = -1;
              for (let dB of BB) dB.then((zB => {
                QB.push(zB), clearTimeout(nB), QB.length == BB.length ? jB(QB) : nB = setTimeout((() => jB(QB)), 200)
              }), zB)
            }(jB.map((BB => Promise.resolve(BB(this.view)))), (jB => {
              this.view.state.doc == BB.doc && this.view.dispatch(function(BB, jB) {
                return {
                  effects: aB(BB, [pB.of(jB)])
                }
              }(this.view.state, jB.reduce(((BB, jB) => BB.concat(jB)))))
            }), (BB => {
              (0, QB._)(this.view.state, BB)
            }))
          }
        }
        update(BB) {
          let jB = BB.state.facet(tB);
          (BB.docChanged || jB != BB.startState.facet(tB) || jB.needsRefresh && jB.needsRefresh(BB)) && (this.lintTime = Date.now() + jB.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, jB.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const tB = nB.p.define({
      combine: BB => ({
        sources: BB.map((BB => BB.source)).filter((BB => null != BB)),
        ...(0, nB.O)(BB.map((BB => BB.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: SB,
          tooltipFilter: SB,
          needsRefresh: (BB, jB) => BB ? jB ? zB => BB(zB) || jB(zB) : BB : jB,
          hideOn: (BB, jB) => BB ? jB ? (zB, QB, nB) => BB(zB, QB, nB) || jB(zB, QB, nB) : BB : jB,
          autoPanel: (BB, jB) => BB || jB
        })
      })
    });

    function SB(BB, jB) {
      return BB ? jB ? (zB, QB) => jB(BB(zB, QB), QB) : BB : jB
    }

    function MB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [tB.of({
        source: BB,
        config: jB
      }), gB, hB]
    }

    function EB(BB) {
      let jB = [];
      if (BB) BB: for (let {
          name: zB
        }
        of BB) {
        for (let BB = 0; BB < zB.length; BB++) {
          let QB = zB[BB];
          if (/[a-zA-Z]/.test(QB) && !jB.some((BB => BB.toLowerCase() == QB.toLowerCase()))) {
            jB.push(QB);
            continue BB
          }
        }
        jB.push("")
      }
      return jB
    }

    function iB(BB, jB, zB) {
      var QB;
      let nB = zB ? EB(jB.actions) : [];
      return (0, dB.e)("li", {
        class: "cm-diagnostic cm-diagnostic-" + jB.severity
      }, (0, dB.e)("span", {
        class: "cm-diagnosticText"
      }, jB.renderMessage ? jB.renderMessage(BB) : jB.message), null === (QB = jB.actions) || void 0 === QB ? void 0 : QB.map(((zB, QB) => {
        let IB = !1,
          NB = QB => {
            if (QB.preventDefault(), IB) return;
            IB = !0;
            let nB = uB(BB.state.field(JB).diagnostics, jB);
            nB && zB.apply(BB, nB.from, nB.to)
          },
          {
            name: UB
          } = zB,
          aB = nB[QB] ? UB.indexOf(nB[QB]) : -1,
          pB = aB < 0 ? UB : [UB.slice(0, aB), (0, dB.e)("u", UB.slice(aB, aB + 1)), UB.slice(aB + 1)],
          rB = zB.markClass ? " " + zB.markClass : "";
        return (0, dB.e)("button", {
          type: "button",
          class: "cm-diagnosticAction" + rB,
          onclick: NB,
          onmousedown: NB,
          "aria-label": ` Action: ${UB}${aB<0?"":` (access key "${nB[QB]})"`}.`
        }, pB)
      })), jB.source && (0, dB.e)("div", {
        class: "cm-diagnosticSource"
      }, jB.source))
    }
    class qB extends QB.r {
      constructor(BB) {
        super(), this.sev = BB
      }
      eq(BB) {
        return BB.sev == this.sev
      }
      toDOM() {
        return (0, dB.e)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class fB {
      constructor(BB, jB) {
        this.diagnostic = jB, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = iB(BB, jB, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class oB {
      constructor(BB) {
        this.view = BB, this.items = [];
        this.list = (0, dB.e)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: jB => {
            if (!(jB.ctrlKey || jB.altKey || jB.metaKey)) {
              if (27 == jB.keyCode) GB(this.view), this.view.focus();
              else if (38 == jB.keyCode || 33 == jB.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == jB.keyCode || 34 == jB.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == jB.keyCode) this.moveSelection(0);
              else if (35 == jB.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == jB.keyCode) this.view.focus();
              else {
                if (!(jB.keyCode >= 65 && jB.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: zB
                  } = this.items[this.selectedIndex], QB = EB(zB.actions);
                  for (let nB = 0; nB < QB.length; nB++)
                    if (QB[nB].toUpperCase().charCodeAt(0) == jB.keyCode) {
                      let jB = uB(this.view.state.field(JB).diagnostics, zB);
                      jB && zB.actions[nB].apply(BB, jB.from, jB.to)
                    }
                }
              }
              jB.preventDefault()
            }
          },
          onclick: BB => {
            for (let jB = 0; jB < this.items.length; jB++) this.items[jB].dom.contains(BB.target) && this.moveSelection(jB)
          }
        }), this.dom = (0, dB.e)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, dB.e)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => GB(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let BB = this.view.state.field(JB).selected;
        if (!BB) return -1;
        for (let jB = 0; jB < this.items.length; jB++)
          if (this.items[jB].diagnostic == BB.diagnostic) return jB;
        return -1
      }
      update() {
        let {
          diagnostics: BB,
          selected: jB
        } = this.view.state.field(JB), zB = 0, QB = !1, nB = null, dB = new Set;
        for (BB.between(0, this.view.state.doc.length, ((BB, IB, NB) => {
            let {
              spec: uB
            } = NB;
            for (let UB of uB.diagnostics) {
              if (dB.has(UB)) continue;
              dB.add(UB);
              let BB, IB = -1;
              for (let jB = zB; jB < this.items.length; jB++)
                if (this.items[jB].diagnostic == UB) {
                  IB = jB;
                  break
                } IB < 0 ? (BB = new fB(this.view, UB), this.items.splice(zB, 0, BB), QB = !0) : (BB = this.items[IB], IB > zB && (this.items.splice(zB, IB - zB), QB = !0)), jB && BB.diagnostic == jB.diagnostic ? BB.dom.hasAttribute("aria-selected") || (BB.dom.setAttribute("aria-selected", "true"), nB = BB) : BB.dom.hasAttribute("aria-selected") && BB.dom.removeAttribute("aria-selected"), zB++
            }
          })); zB < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) QB = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new fB(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), QB = !0), nB ? (this.list.setAttribute("aria-activedescendant", nB.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: nB.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: BB => {
            let {
              sel: jB,
              panel: zB
            } = BB, QB = zB.height / this.list.offsetHeight;
            jB.top < zB.top ? this.list.scrollTop -= (zB.top - jB.top) / QB : jB.bottom > zB.bottom && (this.list.scrollTop += (jB.bottom - zB.bottom) / QB)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), QB && this.sync()
      }
      sync() {
        let BB = this.list.firstChild;

        function jB() {
          let jB = BB;
          BB = jB.nextSibling, jB.remove()
        }
        for (let zB of this.items)
          if (zB.dom.parentNode == this.list) {
            for (; BB != zB.dom;) jB();
            BB = zB.dom.nextSibling
          } else this.list.insertBefore(zB.dom, BB);
        for (; BB;) jB()
      }
      moveSelection(BB) {
        if (this.selectedIndex < 0) return;
        let jB = uB(this.view.state.field(JB).diagnostics, this.items[BB].diagnostic);
        jB && this.view.dispatch({
          selection: {
            anchor: jB.from,
            head: jB.to
          },
          scrollIntoView: !0,
          effects: sB.of(jB)
        })
      }
      static open(BB) {
        return new oB(BB)
      }
    }

    function HB(BB) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(BB)}</svg>')`
    }

    function DB(BB) {
      return HB(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${BB}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const FB = QB.k.baseTheme({
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
        backgroundImage: DB("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: DB("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: DB("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: DB("#66d")
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

    function YB(BB) {
      return "error" == BB ? 4 : "warning" == BB ? 3 : "info" == BB ? 2 : 1
    }

    function VB(BB) {
      let jB = "hint",
        zB = 1;
      for (let QB of BB) {
        let BB = YB(QB.severity);
        BB > zB && (zB = BB, jB = QB.severity)
      }
      return jB
    }
    QB.l;
    const hB = [JB, QB.k.pQ.compute([JB], (BB => {
      let {
        selected: jB,
        panel: zB
      } = BB.field(JB);
      return jB && zB && jB.from != jB.to ? QB.d.set([mB.range(jB.from, jB.to)]) : QB.d.none
    })), (0, QB.Q)(yB, {
      hideOn: UB
    }), FB]
  },
  41462: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => RB,
      e: () => kB,
      i: () => OB
    });
    var QB = zB(41415),
      nB = zB(41408),
      dB = zB(41430);
    const IB = "function" == typeof String.prototype.normalize ? BB => BB.normalize("NFKD") : BB => BB;
    class NB {
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.length,
          nB = arguments.length > 4 ? arguments[4] : void 0,
          dB = arguments.length > 5 ? arguments[5] : void 0;
        this.test = dB, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = BB.iterRange(zB, QB), this.bufferStart = zB, this.normalize = nB ? BB => nB(IB(BB)) : IB, this.query = this.normalize(jB)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, nB.L)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let BB = this.peek();
          if (BB < 0) return this.done = !0, this;
          let jB = (0, nB.W)(BB),
            zB = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, nB.M)(BB);
          let QB = this.normalize(jB);
          if (QB.length)
            for (let nB = 0, dB = zB;; nB++) {
              let BB = QB.charCodeAt(nB),
                IB = this.match(BB, dB, this.bufferPos + this.bufferStart);
              if (nB == QB.length - 1) {
                if (IB) return this.value = IB, this;
                break
              }
              dB == zB && nB < jB.length && jB.charCodeAt(nB) == BB && dB++
            }
        }
      }
      match(BB, jB, zB) {
        let QB = null;
        for (let nB = 0; nB < this.matches.length; nB += 2) {
          let jB = this.matches[nB],
            dB = !1;
          this.query.charCodeAt(jB) == BB && (jB == this.query.length - 1 ? QB = {
            from: this.matches[nB + 1],
            to: zB
          } : (this.matches[nB]++, dB = !0)), dB || (this.matches.splice(nB, 2), nB -= 2)
        }
        return this.query.charCodeAt(0) == BB && (1 == this.query.length ? QB = {
          from: jB,
          to: zB
        } : this.matches.push(1, jB)), QB && this.test && !this.test(QB.from, QB.to, this.buffer, this.bufferStart) && (QB = null), QB
      }
    }
    "undefined" != typeof Symbol && (NB.prototype[Symbol.iterator] = function() {
      return this
    });
    const uB = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      UB = "gm" + (null == /x/.unicode ? "" : "u");
    class aB {
      constructor(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : BB.length;
        if (this.text = BB, this.to = nB, this.curLine = "", this.done = !1, this.value = uB, /\\[sWDnr]|\n|\r|\[\^/.test(jB)) return new sB(BB, jB, zB, QB, nB);
        this.re = new RegExp(jB, UB + ((null === zB || void 0 === zB ? void 0 : zB.ignoreCase) ? "i" : "")), this.test = null === zB || void 0 === zB ? void 0 : zB.test, this.iter = BB.iter();
        let dB = BB.lineAt(QB);
        this.curLineStart = dB.from, this.matchPos = JB(BB, QB), this.getLine(this.curLineStart)
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
          let jB = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (jB) {
            let zB = this.curLineStart + jB.index,
              QB = zB + jB[0].length;
            if (this.matchPos = JB(this.text, QB + (zB == QB ? 1 : 0)), zB == this.curLineStart + this.curLine.length && this.nextLine(), (zB < QB || zB > this.value.to) && (!this.test || this.test(zB, QB, jB))) return this.value = {
              from: zB,
              to: QB,
              match: jB
            }, this;
            BB = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), BB = 0
          }
        }
      }
    }
    const pB = new WeakMap;
    class rB {
      constructor(BB, jB) {
        this.from = BB, this.text = jB
      }
      get to() {
        return this.from + this.text.length
      }
      static get(BB, jB, zB) {
        let QB = pB.get(BB);
        if (!QB || QB.from >= zB || QB.to <= jB) {
          let QB = new rB(jB, BB.sliceString(jB, zB));
          return pB.set(BB, QB), QB
        }
        if (QB.from == jB && QB.to == zB) return QB;
        let {
          text: nB,
          from: dB
        } = QB;
        return dB > jB && (nB = BB.sliceString(jB, dB) + nB, dB = jB), QB.to < zB && (nB += BB.sliceString(QB.to, zB)), pB.set(BB, new rB(dB, nB)), new rB(jB, nB.slice(jB - dB, zB - dB))
      }
    }
    class sB {
      constructor(BB, jB, zB, QB, nB) {
        this.text = BB, this.to = nB, this.done = !1, this.value = uB, this.matchPos = JB(BB, QB), this.re = new RegExp(jB, UB + ((null === zB || void 0 === zB ? void 0 : zB.ignoreCase) ? "i" : "")), this.test = null === zB || void 0 === zB ? void 0 : zB.test, this.flat = rB.get(BB, QB, this.chunkEnd(QB + 5e3))
      }
      chunkEnd(BB) {
        return BB >= this.to ? this.to : this.text.lineAt(BB).to
      }
      next() {
        for (;;) {
          let BB = this.re.lastIndex = this.matchPos - this.flat.from,
            jB = this.re.exec(this.flat.text);
          if (jB && !jB[0] && jB.index == BB && (this.re.lastIndex = BB + 1, jB = this.re.exec(this.flat.text)), jB) {
            let BB = this.flat.from + jB.index,
              zB = BB + jB[0].length;
            if ((this.flat.to >= this.to || jB.index + jB[0].length <= this.flat.text.length - 10) && (!this.test || this.test(BB, zB, jB))) return this.value = {
              from: BB,
              to: zB,
              match: jB
            }, this.matchPos = JB(this.text, zB + (BB == zB ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = rB.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function JB(BB, jB) {
      if (jB >= BB.length) return jB;
      let zB, QB = BB.lineAt(jB);
      for (; jB < QB.to && (zB = QB.text.charCodeAt(jB - QB.from)) >= 56320 && zB < 57344;) jB++;
      return jB
    }
    "undefined" != typeof Symbol && (aB.prototype[Symbol.iterator] = sB.prototype[Symbol.iterator] = function() {
      return this
    });
    const mB = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      yB = nB.p.define({
        combine: BB => (0, nB.O)(BB, mB, {
          highlightWordAroundCursor: (BB, jB) => BB || jB,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function kB(BB) {
      let jB = [SB, tB];
      return BB && jB.push(yB.of(BB)), jB
    }
    const GB = QB.d.mark({
        class: "cm-selectionMatch"
      }),
      LB = QB.d.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function gB(BB, jB, zB, QB) {
      return (0 == zB || BB(jB.sliceDoc(zB - 1, zB)) != nB.e.Word) && (QB == jB.doc.length || BB(jB.sliceDoc(QB, QB + 1)) != nB.e.Word)
    }
    const tB = QB.o.fromClass(class {
        constructor(BB) {
          this.pQ = this.getDeco(BB)
        }
        update(BB) {
          (BB.selectionSet || BB.docChanged || BB.viewportChanged) && (this.pQ = this.getDeco(BB.view))
        }
        getDeco(BB) {
          let jB = BB.state.facet(yB),
            {
              state: zB
            } = BB,
            dB = zB.selection;
          if (dB.gy.length > 1) return QB.d.none;
          let IB, uB = dB.main,
            UB = null;
          if (uB.empty) {
            if (!jB.highlightWordAroundCursor) return QB.d.none;
            let BB = zB.wordAt(uB.head);
            if (!BB) return QB.d.none;
            UB = zB.charCategorizer(uB.head), IB = zB.sliceDoc(BB.from, BB.to)
          } else {
            let BB = uB.to - uB.from;
            if (BB < jB.minSelectionLength || BB > 200) return QB.d.none;
            if (jB.wholeWords) {
              if (IB = zB.sliceDoc(uB.from, uB.to), UB = zB.charCategorizer(uB.head), !gB(UB, zB, uB.from, uB.to) || ! function(BB, jB, zB, QB) {
                  return BB(jB.sliceDoc(zB, zB + 1)) == nB.e.Word && BB(jB.sliceDoc(QB - 1, QB)) == nB.e.Word
                }(UB, zB, uB.from, uB.to)) return QB.d.none
            } else if (IB = zB.sliceDoc(uB.from, uB.to), !IB) return QB.d.none
          }
          let aB = [];
          for (let nB of BB.I5) {
            let BB = new NB(zB.doc, IB, nB.from, nB.to);
            for (; !BB.next().done;) {
              let {
                from: nB,
                to: dB
              } = BB.value;
              if ((!UB || gB(UB, zB, nB, dB)) && (uB.empty && nB <= uB.from && dB >= uB.to ? aB.push(LB.range(nB, dB)) : (nB >= uB.to || dB <= uB.from) && aB.push(GB.range(nB, dB)), aB.length > jB.maxMatches)) return QB.d.none
            }
          }
          return QB.d.set(aB)
        }
      }, {
        pQ: BB => BB.pQ
      }),
      SB = QB.k.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const MB = nB.p.define({
      combine: BB => (0, nB.O)(BB, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: BB => new Bj(BB),
        scrollToMatch: BB => QB.k.scrollIntoView(BB)
      })
    });
    class EB {
      constructor(BB) {
        this.search = BB.search, this.caseSensitive = !!BB.caseSensitive, this.literal = !!BB.literal, this.regexp = !!BB.regexp, this.replace = BB.replace || "", this.valid = !!this.search && (!this.regexp || function(BB) {
          try {
            return new RegExp(BB, UB), !0
          } catch (jB) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!BB.wholeWord, this.test = BB.test
      }
      unquote(BB) {
        return this.literal ? BB : BB.replace(/\\([nrt\\])/g, ((BB, jB) => "n" == jB ? "\n" : "r" == jB ? "\r" : "t" == jB ? "\t" : "\\"))
      }
      eq(BB) {
        return this.search == BB.search && this.replace == BB.replace && this.caseSensitive == BB.caseSensitive && this.regexp == BB.regexp && this.wholeWord == BB.wholeWord && this.test == BB.test
      }
      create() {
        return this.regexp ? new FB(this) : new fB(this)
      }
      getCursor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zB = arguments.length > 2 ? arguments[2] : void 0,
          QB = BB.doc ? BB : nB.l.create({
            doc: BB
          });
        return null == zB && (zB = QB.doc.length), this.regexp ? oB(this, QB, jB, zB) : qB(this, QB, jB, zB)
      }
    }
    class iB {
      constructor(BB) {
        this.spec = BB
      }
    }

    function qB(BB, jB, zB, QB) {
      let dB;
      var IB, uB;
      return BB.wholeWord && (IB = jB.doc, uB = jB.charCategorizer(jB.selection.main.head), dB = (BB, jB, zB, QB) => ((QB > BB || QB + zB.length < jB) && (QB = Math.max(0, BB - 2), zB = IB.sliceString(QB, Math.min(IB.length, jB + 2))), (uB(HB(zB, BB - QB)) != nB.e.Word || uB(DB(zB, BB - QB)) != nB.e.Word) && (uB(DB(zB, jB - QB)) != nB.e.Word || uB(HB(zB, jB - QB)) != nB.e.Word))), BB.test && (dB = function(BB, jB, zB) {
        return (QB, nB, dB, IB) => {
          if (zB && !zB(QB, nB, dB, IB)) return !1;
          let NB = QB >= IB && nB <= IB + dB.length ? dB.slice(QB - IB, nB - IB) : jB.doc.sliceString(QB, nB);
          return BB(NB, jB, QB, nB)
        }
      }(BB.test, jB, dB)), new NB(jB.doc, BB.unquoted, zB, QB, BB.caseSensitive ? void 0 : BB => BB.toLowerCase(), dB)
    }
    class fB extends iB {
      constructor(BB) {
        super(BB)
      }
      nextMatch(BB, jB, zB) {
        let QB = qB(this.spec, BB, zB, BB.doc.length).nextOverlapping();
        if (QB.done) {
          let zB = Math.min(BB.doc.length, jB + this.spec.unquoted.length);
          QB = qB(this.spec, BB, 0, zB).nextOverlapping()
        }
        return QB.done || QB.value.from == jB && QB.value.to == zB ? null : QB.value
      }
      prevMatchInRange(BB, jB, zB) {
        for (let QB = zB;;) {
          let zB = Math.max(jB, QB - 1e4 - this.spec.unquoted.length),
            nB = qB(this.spec, BB, zB, QB),
            dB = null;
          for (; !nB.nextOverlapping().done;) dB = nB.value;
          if (dB) return dB;
          if (zB == jB) return null;
          QB -= 1e4
        }
      }
      prevMatch(BB, jB, zB) {
        let QB = this.prevMatchInRange(BB, 0, jB);
        return QB || (QB = this.prevMatchInRange(BB, Math.max(0, zB - this.spec.unquoted.length), BB.doc.length)), !QB || QB.from == jB && QB.to == zB ? null : QB
      }
      getReplacement(BB) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(BB, jB) {
        let zB = qB(this.spec, BB, 0, BB.doc.length),
          QB = [];
        for (; !zB.next().done;) {
          if (QB.length >= jB) return null;
          QB.push(zB.value)
        }
        return QB
      }
      highlight(BB, jB, zB, QB) {
        let nB = qB(this.spec, BB, Math.max(0, jB - this.spec.unquoted.length), Math.min(zB + this.spec.unquoted.length, BB.doc.length));
        for (; !nB.next().done;) QB(nB.value.from, nB.value.to)
      }
    }

    function oB(BB, jB, zB, QB) {
      let dB;
      var IB;
      return BB.wholeWord && (IB = jB.charCategorizer(jB.selection.main.head), dB = (BB, jB, zB) => !zB[0].length || (IB(HB(zB.input, zB.index)) != nB.e.Word || IB(DB(zB.input, zB.index)) != nB.e.Word) && (IB(DB(zB.input, zB.index + zB[0].length)) != nB.e.Word || IB(HB(zB.input, zB.index + zB[0].length)) != nB.e.Word)), BB.test && (dB = function(BB, jB, zB) {
        return (QB, nB, dB) => (!zB || zB(QB, nB, dB)) && BB(dB[0], jB, QB, nB)
      }(BB.test, jB, dB)), new aB(jB.doc, BB.search, {
        ignoreCase: !BB.caseSensitive,
        test: dB
      }, zB, QB)
    }

    function HB(BB, jB) {
      return BB.slice((0, nB.R)(BB, jB, !1), jB)
    }

    function DB(BB, jB) {
      return BB.slice(jB, (0, nB.R)(BB, jB))
    }
    class FB extends iB {
      nextMatch(BB, jB, zB) {
        let QB = oB(this.spec, BB, zB, BB.doc.length).next();
        return QB.done && (QB = oB(this.spec, BB, 0, jB).next()), QB.done ? null : QB.value
      }
      prevMatchInRange(BB, jB, zB) {
        for (let QB = 1;; QB++) {
          let nB = Math.max(jB, zB - 1e4 * QB),
            dB = oB(this.spec, BB, nB, zB),
            IB = null;
          for (; !dB.next().done;) IB = dB.value;
          if (IB && (nB == jB || IB.from > nB + 10)) return IB;
          if (nB == jB) return null
        }
      }
      prevMatch(BB, jB, zB) {
        return this.prevMatchInRange(BB, 0, jB) || this.prevMatchInRange(BB, zB, BB.doc.length)
      }
      getReplacement(BB) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((jB, zB) => {
          if ("&" == zB) return BB.match[0];
          if ("$" == zB) return "$";
          for (let QB = zB.length; QB > 0; QB--) {
            let jB = +zB.slice(0, QB);
            if (jB > 0 && jB < BB.match.length) return BB.match[jB] + zB.slice(QB)
          }
          return jB
        }))
      }
      matchAll(BB, jB) {
        let zB = oB(this.spec, BB, 0, BB.doc.length),
          QB = [];
        for (; !zB.next().done;) {
          if (QB.length >= jB) return null;
          QB.push(zB.value)
        }
        return QB
      }
      highlight(BB, jB, zB, QB) {
        let nB = oB(this.spec, BB, Math.max(0, jB - 250), Math.min(zB + 250, BB.doc.length));
        for (; !nB.next().done;) QB(nB.value.from, nB.value.to)
      }
    }
    const YB = nB.D.define(),
      VB = nB.D.define(),
      hB = nB.F.define({
        create: BB => new XB(CB(BB).create(), null),
        update(BB, jB) {
          for (let zB of jB.effects) zB.is(YB) ? BB = new XB(zB.value.create(), BB.panel) : zB.is(VB) && (BB = new XB(BB.query, zB.value ? KB : null));
          return BB
        },
        provide: BB => QB.kb.from(BB, (BB => BB.panel))
      });
    class XB {
      constructor(BB, jB) {
        this.query = BB, this.panel = jB
      }
    }
    const ZB = QB.d.mark({
        class: "cm-searchMatch"
      }),
      AB = QB.d.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      TB = QB.o.fromClass(class {
        constructor(BB) {
          this.view = BB, this.pQ = this.highlight(BB.state.field(hB))
        }
        update(BB) {
          let jB = BB.state.field(hB);
          (jB != BB.startState.field(hB) || BB.docChanged || BB.selectionSet || BB.viewportChanged) && (this.pQ = this.highlight(jB))
        }
        highlight(BB) {
          let {
            query: jB,
            panel: zB
          } = BB;
          if (!zB || !jB.spec.valid) return QB.d.none;
          let {
            view: dB
          } = this, IB = new nB.y;
          for (let QB = 0, nB = dB.I5, NB = nB.length; QB < NB; QB++) {
            let {
              from: BB,
              to: zB
            } = nB[QB];
            for (; QB < NB - 1 && zB > nB[QB + 1].from - 500;) zB = nB[++QB].to;
            jB.highlight(dB.state, BB, zB, ((BB, jB) => {
              let zB = dB.state.selection.gy.some((zB => zB.from == BB && zB.to == jB));
              IB.add(BB, jB, zB ? AB : ZB)
            }))
          }
          return IB.finish()
        }
      }, {
        pQ: BB => BB.pQ
      });

    function PB(BB) {
      return jB => {
        let zB = jB.state.field(hB, !1);
        return zB && zB.query.spec.valid ? BB(jB, zB) : vB(jB)
      }
    }
    const WB = PB(((BB, jB) => {
        let {
          query: zB
        } = jB, {
          to: QB
        } = BB.state.selection.main, dB = zB.nextMatch(BB.state, QB, QB);
        if (!dB) return !1;
        let IB = nB.i.single(dB.from, dB.to),
          NB = BB.state.facet(MB);
        return BB.dispatch({
          selection: IB,
          effects: [nj(BB, dB), NB.scrollToMatch(IB.main, BB)],
          userEvent: "select.search"
        }), bB(BB), !0
      })),
      eB = PB(((BB, jB) => {
        let {
          query: zB
        } = jB, {
          state: QB
        } = BB, {
          from: dB
        } = QB.selection.main, IB = zB.prevMatch(QB, dB, dB);
        if (!IB) return !1;
        let NB = nB.i.single(IB.from, IB.to),
          uB = BB.state.facet(MB);
        return BB.dispatch({
          selection: NB,
          effects: [nj(BB, IB), uB.scrollToMatch(NB.main, BB)],
          userEvent: "select.search"
        }), bB(BB), !0
      })),
      lB = PB(((BB, jB) => {
        let {
          query: zB
        } = jB, QB = zB.matchAll(BB.state, 1e3);
        return !(!QB || !QB.length) && (BB.dispatch({
          selection: nB.i.create(QB.map((BB => nB.i.range(BB.from, BB.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      wB = PB(((BB, jB) => {
        let {
          query: zB
        } = jB, {
          state: dB
        } = BB, {
          from: IB,
          to: NB
        } = dB.selection.main;
        if (dB.readOnly) return !1;
        let uB = zB.nextMatch(dB, IB, IB);
        if (!uB) return !1;
        let UB, aB, pB = uB,
          rB = [],
          sB = [];
        pB.from == IB && pB.to == NB && (aB = dB.toText(zB.getReplacement(pB)), rB.push({
          from: pB.from,
          to: pB.to,
          insert: aB
        }), pB = zB.nextMatch(dB, pB.from, pB.to), sB.push(QB.k.announce.of(dB.phrase("replaced match on line $", dB.doc.lineAt(IB).number) + ".")));
        let JB = BB.state.changes(rB);
        return pB && (UB = nB.i.single(pB.from, pB.to).map(JB), sB.push(nj(BB, pB)), sB.push(dB.facet(MB).scrollToMatch(UB.main, BB))), BB.dispatch({
          changes: JB,
          selection: UB,
          effects: sB,
          userEvent: "input.replace"
        }), !0
      })),
      xB = PB(((BB, jB) => {
        let {
          query: zB
        } = jB;
        if (BB.state.readOnly) return !1;
        let nB = zB.matchAll(BB.state, 1e9).map((BB => {
          let {
            from: jB,
            to: QB
          } = BB;
          return {
            from: jB,
            to: QB,
            insert: zB.getReplacement(BB)
          }
        }));
        if (!nB.length) return !1;
        let dB = BB.state.phrase("replaced $ matches", nB.length) + ".";
        return BB.dispatch({
          changes: nB,
          effects: QB.k.announce.of(dB),
          userEvent: "input.replace.all"
        }), !0
      }));

    function KB(BB) {
      return BB.state.facet(MB).createPanel(BB)
    }

    function CB(BB, jB) {
      var zB, QB, nB, dB, IB;
      let NB = BB.selection.main,
        uB = NB.empty || NB.to > NB.from + 100 ? "" : BB.sliceDoc(NB.from, NB.to);
      if (jB && !uB) return jB;
      let UB = BB.facet(MB);
      return new EB({
        search: (null !== (zB = null === jB || void 0 === jB ? void 0 : jB.literal) && void 0 !== zB ? zB : UB.literal) ? uB : uB.replace(/\n/g, "\\n"),
        caseSensitive: null !== (QB = null === jB || void 0 === jB ? void 0 : jB.caseSensitive) && void 0 !== QB ? QB : UB.caseSensitive,
        literal: null !== (nB = null === jB || void 0 === jB ? void 0 : jB.literal) && void 0 !== nB ? nB : UB.literal,
        regexp: null !== (dB = null === jB || void 0 === jB ? void 0 : jB.regexp) && void 0 !== dB ? dB : UB.regexp,
        wholeWord: null !== (IB = null === jB || void 0 === jB ? void 0 : jB.wholeWord) && void 0 !== IB ? IB : UB.wholeWord
      })
    }

    function cB(BB) {
      let jB = (0, QB.C)(BB, KB);
      return jB && jB.dom.querySelector("[main-field]")
    }

    function bB(BB) {
      let jB = cB(BB);
      jB && jB == BB.root.activeElement && jB.select()
    }
    const vB = BB => {
        let jB = BB.state.field(hB, !1);
        if (jB && jB.panel) {
          let zB = cB(BB);
          if (zB && zB != BB.root.activeElement) {
            let QB = CB(BB.state, jB.query.spec);
            QB.valid && BB.dispatch({
              effects: YB.of(QB)
            }), zB.focus(), zB.select()
          }
        } else BB.dispatch({
          effects: [VB.of(!0), jB ? YB.of(CB(BB.state, jB.query.spec)) : nB.D.appendConfig.of(Ij)]
        });
        return !0
      },
      RB = BB => {
        let jB = BB.state.field(hB, !1);
        if (!jB || !jB.panel) return !1;
        let zB = (0, QB.C)(BB, KB);
        return zB && zB.dom.contains(BB.root.activeElement) && BB.focus(), BB.dispatch({
          effects: VB.of(!1)
        }), !0
      },
      OB = [{
        key: "Mod-f",
        run: vB,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: WB,
        shift: eB,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: WB,
        shift: eB,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: RB,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: BB => {
          let {
            state: jB,
            dispatch: zB
          } = BB, QB = jB.selection;
          if (QB.gy.length > 1 || QB.main.empty) return !1;
          let {
            from: dB,
            to: IB
          } = QB.main, uB = [], UB = 0;
          for (let aB = new NB(jB.doc, jB.sliceDoc(dB, IB)); !aB.next().done;) {
            if (uB.length > 1e3) return !1;
            aB.value.from == dB && (UB = uB.length), uB.push(nB.i.range(aB.value.from, aB.value.to))
          }
          return zB(jB.update({
            selection: nB.i.create(uB, UB),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: BB => {
          let {
            state: jB
          } = BB, zB = String(jB.doc.lineAt(BB.state.selection.main.head).number), {
            close: dB,
            result: IB
          } = (0, QB.hb)(BB, {
            label: jB.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: zB
            },
            focus: !0,
            submitLabel: jB.phrase("go")
          });
          return IB.then((zB => {
            let IB = zB && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(zB.elements.line.value);
            if (!IB) return void BB.dispatch({
              effects: dB
            });
            let NB = jB.doc.lineAt(jB.selection.main.head),
              [, uB, UB, aB, pB] = IB,
              rB = aB ? +aB.slice(1) : 0,
              sB = UB ? +UB : NB.number;
            if (UB && pB) {
              let BB = sB / 100;
              uB && (BB = BB * ("-" == uB ? -1 : 1) + NB.number / jB.doc.lines), sB = Math.round(jB.doc.lines * BB)
            } else UB && uB && (sB = sB * ("-" == uB ? -1 : 1) + NB.number);
            let JB = jB.doc.line(Math.max(1, Math.min(jB.doc.lines, sB))),
              mB = nB.i.cursor(JB.from + Math.max(0, Math.min(rB, JB.length)));
            BB.dispatch({
              effects: [dB, QB.k.scrollIntoView(mB.from, {
                y: "center"
              })],
              selection: mB
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: BB => {
          let {
            state: jB,
            dispatch: zB
          } = BB, {
            gy: dB
          } = jB.selection;
          if (dB.some((BB => BB.from === BB.to))) return (BB => {
            let {
              state: jB,
              dispatch: zB
            } = BB, {
              selection: QB
            } = jB, dB = nB.i.create(QB.gy.map((BB => jB.wordAt(BB.head) || nB.i.cursor(BB.head))), QB.mainIndex);
            return !dB.eq(QB) && (zB(jB.update({
              selection: dB
            })), !0)
          })({
            state: jB,
            dispatch: zB
          });
          let IB = jB.sliceDoc(dB[0].from, dB[0].to);
          if (jB.selection.gy.some((BB => jB.sliceDoc(BB.from, BB.to) != IB))) return !1;
          let uB = function(BB, jB) {
            let {
              main: zB,
              gy: QB
            } = BB.selection, nB = BB.wordAt(zB.head), dB = nB && nB.from == zB.from && nB.to == zB.to;
            for (let IB = !1, uB = new NB(BB.doc, jB, QB[QB.length - 1].to);;) {
              if (uB.next(), !uB.done) {
                if (IB && QB.some((BB => BB.from == uB.value.from))) continue;
                if (dB) {
                  let jB = BB.wordAt(uB.value.from);
                  if (!jB || jB.from != uB.value.from || jB.to != uB.value.to) continue
                }
                return uB.value
              }
              if (IB) return null;
              uB = new NB(BB.doc, jB, 0, Math.max(0, QB[QB.length - 1].from - 1)), IB = !0
            }
          }(jB, IB);
          return !!uB && (zB(jB.update({
            selection: jB.selection.addRange(nB.i.range(uB.from, uB.to), !1),
            effects: QB.k.scrollIntoView(uB.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class Bj {
      constructor(BB) {
        this.view = BB;
        let jB = this.query = BB.state.field(hB).query.spec;

        function zB(BB, jB, zB) {
          return (0, dB.e)("button", {
            class: "cm-button",
            name: BB,
            onclick: jB,
            type: "button"
          }, zB)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, dB.e)("input", {
          value: jB.search,
          placeholder: jj(BB, "Find"),
          "aria-label": jj(BB, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, dB.e)("input", {
          value: jB.replace,
          placeholder: jj(BB, "Replace"),
          "aria-label": jj(BB, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, dB.e)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: jB.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, dB.e)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: jB.regexp,
          onchange: this.commit
        }), this.wordField = (0, dB.e)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: jB.wholeWord,
          onchange: this.commit
        }), this.dom = (0, dB.e)("div", {
          onkeydown: BB => this.keydown(BB),
          class: "cm-search"
        }, [this.searchField, zB("next", (() => WB(BB)), [jj(BB, "next")]), zB("prev", (() => eB(BB)), [jj(BB, "previous")]), zB("select", (() => lB(BB)), [jj(BB, "all")]), (0, dB.e)("label", null, [this.caseField, jj(BB, "match case")]), (0, dB.e)("label", null, [this.reField, jj(BB, "regexp")]), (0, dB.e)("label", null, [this.wordField, jj(BB, "by word")]), ...BB.state.readOnly ? [] : [(0, dB.e)("br"), this.replaceField, zB("replace", (() => wB(BB)), [jj(BB, "replace")]), zB("replaceAll", (() => xB(BB)), [jj(BB, "replace all")])], (0, dB.e)("button", {
          name: "close",
          onclick: () => RB(BB),
          "aria-label": jj(BB, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let BB = new EB({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        BB.eq(this.query) || (this.query = BB, this.view.dispatch({
          effects: YB.of(BB)
        }))
      }
      keydown(BB) {
        (0, QB.db)(this.view, BB, "search-panel") ? BB.preventDefault(): 13 == BB.keyCode && BB.target == this.searchField ? (BB.preventDefault(), (BB.shiftKey ? eB : WB)(this.view)) : 13 == BB.keyCode && BB.target == this.replaceField && (BB.preventDefault(), wB(this.view))
      }
      update(BB) {
        for (let jB of BB.transactions)
          for (let BB of jB.effects) BB.is(YB) && !BB.value.eq(this.query) && this.setQuery(BB.value)
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
        return this.view.state.facet(MB).top
      }
    }

    function jj(BB, jB) {
      return BB.state.phrase(jB)
    }
    const zj = 30,
      Qj = /[\s\.,:;?!]/;

    function nj(BB, jB) {
      let {
        from: zB,
        to: nB
      } = jB, dB = BB.state.doc.lineAt(zB), IB = BB.state.doc.lineAt(nB).to, NB = Math.max(dB.from, zB - zj), uB = Math.min(IB, nB + zj), UB = BB.state.sliceDoc(NB, uB);
      if (NB != dB.from)
        for (let QB = 0; QB < zj; QB++)
          if (!Qj.test(UB[QB + 1]) && Qj.test(UB[QB])) {
            UB = UB.slice(QB);
            break
          } if (uB != IB)
        for (let QB = UB.length - 1; QB > UB.length - zj; QB--)
          if (!Qj.test(UB[QB - 1]) && Qj.test(UB[QB])) {
            UB = UB.slice(0, QB);
            break
          } return QB.k.announce.of(`${BB.state.phrase("current match")}. ${UB} ${BB.state.phrase("on line")} ${dB.number}.`)
    }
    const dj = QB.k.baseTheme({
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
      Ij = [hB, nB.u.low(TB), dj]
  },
  41415: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => FB,
      h: () => Uj,
      k: () => qn,
      l: () => aI,
      o: () => bj,
      r: () => HB,
      s: () => Vd,
      v: () => On,
      y: () => ud,
      C: () => jI,
      D: () => Rd,
      H: () => mI,
      K: () => td,
      I: () => hI,
      M: () => kd,
      Q: () => vd,
      S: () => Xn,
      W: () => DI,
      _: () => xj,
      ab: () => qd,
      cb: () => Dd,
      db: () => Tn,
      hb: () => II,
      kb: () => dI,
      lb: () => wd
    });
    for (var QB = zB(41408), nB = zB(41424), dB = {
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
      }, IB = {
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
      }, NB = "undefined" != typeof navigator && /Mac/.test(navigator.platform), uB = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), UB = 0; UB < 10; UB++) dB[48 + UB] = dB[96 + UB] = String(UB);
    for (UB = 1; UB <= 24; UB++) dB[UB + 111] = "F" + UB;
    for (UB = 65; UB <= 90; UB++) dB[UB] = String.fromCharCode(UB + 32), IB[UB] = String.fromCharCode(UB);
    for (var aB in dB) IB.hasOwnProperty(aB) || (IB[aB] = dB[aB]);
    var pB = zB(41430);
    let rB = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      sB = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const JB = /Edge\/(\d+)/.exec(rB.userAgent),
      mB = /MSIE \d/.test(rB.userAgent),
      yB = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(rB.userAgent),
      kB = !!(mB || yB || JB),
      GB = !kB && /gecko\/(\d+)/i.test(rB.userAgent),
      LB = !kB && /Chrome\/(\d+)/.exec(rB.userAgent),
      gB = "webkitFontSmoothing" in sB.documentElement.style,
      tB = !kB && /Apple Computer/.test(rB.vendor),
      SB = tB && (/Mobile\/\w+/.test(rB.userAgent) || rB.maxTouchPoints > 2);
    var MB = {
      mac: SB || /Mac/.test(rB.platform),
      windows: /Win/.test(rB.platform),
      linux: /Linux|X11/.test(rB.platform),
      ie: kB,
      ie_version: mB ? sB.documentMode || 6 : yB ? +yB[1] : JB ? +JB[1] : 0,
      gecko: GB,
      gecko_version: GB ? +(/Firefox\/(\d+)/.exec(rB.userAgent) || [0, 0])[1] : 0,
      chrome: !!LB,
      chrome_version: LB ? +LB[1] : 0,
      ios: SB,
      android: /Android\b/.test(rB.userAgent),
      webkit: gB,
      webkit_version: gB ? +(/\bAppleWebKit\/(\d+)/.exec(rB.userAgent) || [0, 0])[1] : 0,
      safari: tB,
      safari_version: tB ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(rB.userAgent) || [0, 0])[1] : 0,
      tabSize: null != sB.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function EB(BB, jB) {
      for (let zB in BB) "class" == zB && jB.class ? jB.class += " " + BB.class : "style" == zB && jB.style ? jB.style += ";" + BB.style : jB[zB] = BB[zB];
      return jB
    }
    const iB = Object.create(null);

    function qB(BB, jB, zB) {
      if (BB == jB) return !0;
      BB || (BB = iB), jB || (jB = iB);
      let QB = Object.keys(BB),
        nB = Object.keys(jB);
      if (QB.length - (zB && QB.indexOf(zB) > -1 ? 1 : 0) != nB.length - (zB && nB.indexOf(zB) > -1 ? 1 : 0)) return !1;
      for (let dB of QB)
        if (dB != zB && (-1 == nB.indexOf(dB) || BB[dB] !== jB[dB])) return !1;
      return !0
    }

    function fB(BB, jB, zB) {
      let QB = !1;
      if (jB)
        for (let nB in jB) zB && nB in zB || (QB = !0, "style" == nB ? BB.style.cssText = "" : BB.removeAttribute(nB));
      if (zB)
        for (let nB in zB) jB && jB[nB] == zB[nB] || (QB = !0, "style" == nB ? BB.style.cssText = zB[nB] : BB.setAttribute(nB, zB[nB]));
      return QB
    }

    function oB(BB) {
      let jB = Object.create(null);
      for (let zB = 0; zB < BB.attributes.length; zB++) {
        let QB = BB.attributes[zB];
        jB[QB.name] = QB.value
      }
      return jB
    }
    class HB {
      eq(BB) {
        return !1
      }
      updateDOM(BB, jB, zB) {
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
      coordsAt(BB, jB, zB) {
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
    var DB = function(BB) {
      return BB[BB.Text = 0] = "Text", BB[BB.WidgetBefore = 1] = "WidgetBefore", BB[BB.WidgetAfter = 2] = "WidgetAfter", BB[BB.WidgetRange = 3] = "WidgetRange", BB
    }(DB || (DB = {}));
    class FB extends QB.B {
      constructor(BB, jB, zB, QB) {
        super(), this.startSide = BB, this.endSide = jB, this.widget = zB, this.spec = QB
      }
      get heightRelevant() {
        return !1
      }
      static mark(BB) {
        return new YB(BB)
      }
      static widget(BB) {
        let jB = Math.max(-1e4, Math.min(1e4, BB.side || 0)),
          zB = !!BB.block;
        return jB += zB && !BB.inlineOrder ? jB > 0 ? 3e8 : -4e8 : jB > 0 ? 1e8 : -1e8, new hB(BB, jB, jB, zB, BB.widget || null, !1)
      }
      static replace(BB) {
        let jB, zB, QB = !!BB.block;
        if (BB.isBlockGap) jB = -5e8, zB = 4e8;
        else {
          let {
            start: nB,
            end: dB
          } = XB(BB, QB);
          jB = (nB ? QB ? -3e8 : -1 : 5e8) - 1, zB = 1 + (dB ? QB ? 2e8 : 1 : -6e8)
        }
        return new hB(BB, jB, zB, QB, BB.widget || null, !0)
      }
      static line(BB) {
        return new VB(BB)
      }
      static set(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return QB.z.of(BB, jB)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    FB.none = QB.z.empty;
    class YB extends FB {
      constructor(BB) {
        let {
          start: jB,
          end: zB
        } = XB(BB);
        super(jB ? -1 : 5e8, zB ? 1 : -6e8, null, BB), this.tagName = BB.tagName || "span", this.attrs = BB.class && BB.attributes ? EB(BB.attributes, {
          class: BB.class
        }) : BB.class ? {
          class: BB.class
        } : BB.attributes || iB
      }
      eq(BB) {
        return this == BB || BB instanceof YB && this.tagName == BB.tagName && qB(this.attrs, BB.attrs)
      }
      range(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB;
        if (BB >= jB) throw new RangeError("Mark decorations may not be empty");
        return super.range(BB, jB)
      }
    }
    YB.prototype.point = !1;
    class VB extends FB {
      constructor(BB) {
        super(-2e8, -2e8, null, BB)
      }
      eq(BB) {
        return BB instanceof VB && this.spec.class == BB.spec.class && qB(this.spec.attributes, BB.spec.attributes)
      }
      range(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB;
        if (jB != BB) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(BB, jB)
      }
    }
    VB.prototype.mapMode = QB.t.TrackBefore, VB.prototype.point = !0;
    class hB extends FB {
      constructor(BB, jB, zB, nB, dB, IB) {
        super(jB, zB, dB, BB), this.block = nB, this.isReplace = IB, this.mapMode = nB ? jB <= 0 ? QB.t.TrackBefore : QB.t.TrackAfter : QB.t.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? DB.WidgetRange : this.startSide <= 0 ? DB.WidgetBefore : DB.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(BB) {
        return BB instanceof hB && (jB = this.widget, zB = BB.widget, jB == zB || !!(jB && zB && jB.compare(zB))) && this.block == BB.block && this.startSide == BB.startSide && this.endSide == BB.endSide;
        var jB, zB
      }
      range(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB;
        if (this.isReplace && (BB > jB || BB == jB && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && jB != BB) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(BB, jB)
      }
    }

    function XB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: zB,
          inclusiveEnd: QB
        } = BB;
      return null == zB && (zB = BB.inclusive), null == QB && (QB = BB.inclusive), {
        start: null !== zB && void 0 !== zB ? zB : jB,
        end: null !== QB && void 0 !== QB ? QB : jB
      }
    }

    function ZB(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        nB = zB.length - 1;
      nB >= 0 && zB[nB] + QB >= BB ? zB[nB] = Math.max(zB[nB], jB) : zB.push(BB, jB)
    }
    hB.prototype.point = !0;
    class AB extends QB.B {
      constructor(BB, jB) {
        super(), this.tagName = BB, this.attributes = jB
      }
      eq(BB) {
        return BB == this || BB instanceof AB && this.tagName == BB.tagName && qB(this.attributes, BB.attributes)
      }
      static create(BB) {
        return new AB(BB.tagName, BB.attributes || iB)
      }
      static set(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return QB.z.of(BB, jB)
      }
    }

    function TB(BB) {
      let jB;
      return jB = 11 == BB.nodeType ? BB.getSelection ? BB : BB.ownerDocument : BB, jB.getSelection()
    }

    function PB(BB, jB) {
      return !!jB && (BB == jB || BB.contains(1 != jB.nodeType ? jB.parentNode : jB))
    }

    function WB(BB, jB) {
      if (!jB.anchorNode) return !1;
      try {
        return PB(BB, jB.anchorNode)
      } catch (zB) {
        return !1
      }
    }

    function eB(BB) {
      return 3 == BB.nodeType ? Qj(BB, 0, BB.nodeValue.length).getClientRects() : 1 == BB.nodeType ? BB.getClientRects() : []
    }

    function lB(BB, jB, zB, QB) {
      return !!zB && (KB(BB, jB, zB, QB, -1) || KB(BB, jB, zB, QB, 1))
    }

    function wB(BB) {
      for (var jB = 0;; jB++)
        if (!(BB = BB.previousSibling)) return jB
    }

    function xB(BB) {
      return 1 == BB.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(BB.nodeName)
    }

    function KB(BB, jB, zB, QB, nB) {
      for (;;) {
        if (BB == zB && jB == QB) return !0;
        if (jB == (nB < 0 ? 0 : CB(BB))) {
          if ("DIV" == BB.nodeName) return !1;
          let zB = BB.parentNode;
          if (!zB || 1 != zB.nodeType) return !1;
          jB = wB(BB) + (nB < 0 ? 0 : 1), BB = zB
        } else {
          if (1 != BB.nodeType) return !1;
          if (1 == (BB = BB.childNodes[jB + (nB < 0 ? -1 : 0)]).nodeType && "false" == BB.contentEditable) return !1;
          jB = nB < 0 ? CB(BB) : 0
        }
      }
    }

    function CB(BB) {
      return 3 == BB.nodeType ? BB.nodeValue.length : BB.childNodes.length
    }

    function cB(BB, jB) {
      let zB = jB ? BB.left : BB.right;
      return {
        left: zB,
        right: zB,
        top: BB.top,
        bottom: BB.bottom
      }
    }

    function bB(BB) {
      let jB = BB.visualViewport;
      return jB ? {
        left: 0,
        right: jB.width,
        top: 0,
        bottom: jB.height
      } : {
        left: 0,
        right: BB.innerWidth,
        top: 0,
        bottom: BB.innerHeight
      }
    }

    function vB(BB, jB) {
      let zB = jB.width / BB.offsetWidth,
        QB = jB.height / BB.offsetHeight;
      return (zB > .995 && zB < 1.005 || !isFinite(zB) || Math.abs(jB.width - BB.offsetWidth) < 1) && (zB = 1), (QB > .995 && QB < 1.005 || !isFinite(QB) || Math.abs(jB.height - BB.offsetHeight) < 1) && (QB = 1), {
        scaleX: zB,
        scaleY: QB
      }
    }

    function RB(BB) {
      let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        zB = BB.ownerDocument,
        QB = null,
        nB = null;
      for (let dB = BB.parentNode; dB && (dB != zB.body && (jB && !QB || !nB));)
        if (1 == dB.nodeType) !nB && dB.scrollHeight > dB.clientHeight && (nB = dB), jB && !QB && dB.scrollWidth > dB.clientWidth && (QB = dB), dB = dB.assignedSlot || dB.parentNode;
        else {
          if (11 != dB.nodeType) break;
          dB = dB.host
        } return {
        x: QB,
        y: nB
      }
    }
    AB.prototype.startSide = AB.prototype.endSide = -1;
    class OB {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(BB) {
        return this.anchorNode == BB.anchorNode && this.anchorOffset == BB.anchorOffset && this.focusNode == BB.focusNode && this.focusOffset == BB.focusOffset
      }
      setRange(BB) {
        let {
          anchorNode: jB,
          focusNode: zB
        } = BB;
        this.set(jB, Math.min(BB.anchorOffset, jB ? CB(jB) : 0), zB, Math.min(BB.focusOffset, zB ? CB(zB) : 0))
      }
      set(BB, jB, zB, QB) {
        this.anchorNode = BB, this.anchorOffset = jB, this.focusNode = zB, this.focusOffset = QB
      }
    }
    let Bj, jj = null;

    function zj(BB) {
      if (BB.setActive) return BB.setActive();
      if (jj) return BB.focus(jj);
      let jB = [];
      for (let zB = BB; zB && (jB.push(zB, zB.scrollTop, zB.scrollLeft), zB != zB.ownerDocument); zB = zB.parentNode);
      if (BB.focus(null == jj ? {
          get preventScroll() {
            return jj = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !jj) {
        jj = !1;
        for (let BB = 0; BB < jB.length;) {
          let zB = jB[BB++],
            QB = jB[BB++],
            nB = jB[BB++];
          zB.scrollTop != QB && (zB.scrollTop = QB), zB.scrollLeft != nB && (zB.scrollLeft = nB)
        }
      }
    }

    function Qj(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : jB,
        QB = Bj || (Bj = document.createRange());
      return QB.setEnd(BB, zB), QB.setStart(BB, jB), QB
    }

    function nj(BB, jB, zB, QB) {
      let nB = {
        key: jB,
        code: jB,
        keyCode: zB,
        which: zB,
        cancelable: !0
      };
      QB && ({
        altKey: nB.altKey,
        ctrlKey: nB.ctrlKey,
        shiftKey: nB.shiftKey,
        metaKey: nB.metaKey
      } = QB);
      let dB = new KeyboardEvent("keydown", nB);
      dB.synthetic = !0, BB.dispatchEvent(dB);
      let IB = new KeyboardEvent("keyup", nB);
      return IB.synthetic = !0, BB.dispatchEvent(IB), dB.defaultPrevented || IB.defaultPrevented
    }

    function dj(BB) {
      return BB instanceof Window ? BB.pageYOffset > Math.max(0, BB.document.documentElement.scrollHeight - BB.innerHeight - 4) : BB.scrollTop > Math.max(1, BB.scrollHeight - BB.clientHeight - 4)
    }

    function Ij(BB, jB) {
      for (let zB = BB, QB = jB;;) {
        if (3 == zB.nodeType && QB > 0) return {
          node: zB,
          offset: QB
        };
        if (1 == zB.nodeType && QB > 0) {
          if ("false" == zB.contentEditable) return null;
          zB = zB.childNodes[QB - 1], QB = CB(zB)
        } else {
          if (!zB.parentNode || xB(zB)) return null;
          QB = wB(zB), zB = zB.parentNode
        }
      }
    }

    function Nj(BB, jB) {
      for (let zB = BB, QB = jB;;) {
        if (3 == zB.nodeType && QB < zB.nodeValue.length) return {
          node: zB,
          offset: QB
        };
        if (1 == zB.nodeType && QB < zB.childNodes.length) {
          if ("false" == zB.contentEditable) return null;
          zB = zB.childNodes[QB], QB = 0
        } else {
          if (!zB.parentNode || xB(zB)) return null;
          QB = wB(zB) + 1, zB = zB.parentNode
        }
      }
    }
    MB.safari && MB.safari_version >= 26 && (jj = !1);
    class uj {
      constructor(BB, jB) {
        let zB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = BB, this.offset = jB, this.precise = zB
      }
      static before(BB, jB) {
        return new uj(BB.parentNode, wB(BB), jB)
      }
      static after(BB, jB) {
        return new uj(BB.parentNode, wB(BB) + 1, jB)
      }
    }
    var Uj = function(BB) {
      return BB[BB.LTR = 0] = "LTR", BB[BB.RTL = 1] = "RTL", BB
    }(Uj || (Uj = {}));
    const aj = Uj.LTR,
      pj = Uj.RTL;

    function rj(BB) {
      let jB = [];
      for (let zB = 0; zB < BB.length; zB++) jB.push(1 << +BB[zB]);
      return jB
    }
    const sj = rj("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      Jj = rj("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      mj = Object.create(null),
      yj = [];
    for (let XI of ["()", "[]", "{}"]) {
      let BB = XI.charCodeAt(0),
        jB = XI.charCodeAt(1);
      mj[BB] = jB, mj[jB] = -BB
    }

    function kj(BB) {
      return BB <= 247 ? sj[BB] : 1424 <= BB && BB <= 1524 ? 2 : 1536 <= BB && BB <= 1785 ? Jj[BB - 1536] : 1774 <= BB && BB <= 2220 ? 4 : 8192 <= BB && BB <= 8204 ? 256 : 64336 <= BB && BB <= 65023 ? 4 : 1
    }
    const Gj = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class Lj {
      get dir() {
        return this.level % 2 ? pj : aj
      }
      constructor(BB, jB, zB) {
        this.from = BB, this.to = jB, this.level = zB
      }
      side(BB, jB) {
        return this.dir == jB == BB ? this.to : this.from
      }
      forward(BB, jB) {
        return BB == (this.dir == jB)
      }
      static find(BB, jB, zB, QB) {
        let nB = -1;
        for (let dB = 0; dB < BB.length; dB++) {
          let IB = BB[dB];
          if (IB.from <= jB && IB.to >= jB) {
            if (IB.level == zB) return dB;
            (nB < 0 || (0 != QB ? QB < 0 ? IB.from < jB : IB.to > jB : BB[nB].level > IB.level)) && (nB = dB)
          }
        }
        if (nB < 0) throw new RangeError("Index out of range");
        return nB
      }
    }

    function gj(BB, jB) {
      if (BB.length != jB.length) return !1;
      for (let zB = 0; zB < BB.length; zB++) {
        let QB = BB[zB],
          nB = jB[zB];
        if (QB.from != nB.from || QB.to != nB.to || QB.direction != nB.direction || !gj(QB.inner, nB.inner)) return !1
      }
      return !0
    }
    const tj = [];

    function Sj(BB, jB, zB, QB, nB, dB, IB) {
      let NB = QB % 2 ? 2 : 1;
      if (QB % 2 == nB % 2)
        for (let uB = jB, UB = 0; uB < zB;) {
          let jB = !0,
            aB = !1;
          if (UB == dB.length || uB < dB[UB].from) {
            let BB = tj[uB];
            BB != NB && (jB = !1, aB = 16 == BB)
          }
          let pB = jB || 1 != NB ? null : [],
            rB = jB ? QB : QB + 1,
            sB = uB;
          BB: for (;;)
            if (UB < dB.length && sB == dB[UB].from) {
              if (aB) break BB;
              let JB = dB[UB];
              if (!jB)
                for (let BB = JB.to, jB = UB + 1;;) {
                  if (BB == zB) break BB;
                  if (!(jB < dB.length && dB[jB].from == BB)) {
                    if (tj[BB] == NB) break BB;
                    break
                  }
                  BB = dB[jB++].to
                }
              if (UB++, pB) pB.push(JB);
              else {
                JB.from > uB && IB.push(new Lj(uB, JB.from, rB)), Mj(BB, JB.direction == aj != !(rB % 2) ? QB + 1 : QB, nB, JB.inner, JB.from, JB.to, IB), uB = JB.to
              }
              sB = JB.to
            } else {
              if (sB == zB || (jB ? tj[sB] != NB : tj[sB] == NB)) break;
              sB++
            } pB ? Sj(BB, uB, sB, QB + 1, nB, pB, IB) : uB < sB && IB.push(new Lj(uB, sB, rB)), uB = sB
        } else
          for (let uB = zB, UB = dB.length; uB > jB;) {
            let zB = !0,
              aB = !1;
            if (!UB || uB > dB[UB - 1].to) {
              let BB = tj[uB - 1];
              BB != NB && (zB = !1, aB = 16 == BB)
            }
            let pB = zB || 1 != NB ? null : [],
              rB = zB ? QB : QB + 1,
              sB = uB;
            BB: for (;;)
              if (UB && sB == dB[UB - 1].to) {
                if (aB) break BB;
                let JB = dB[--UB];
                if (!zB)
                  for (let BB = JB.from, zB = UB;;) {
                    if (BB == jB) break BB;
                    if (!zB || dB[zB - 1].to != BB) {
                      if (tj[BB - 1] == NB) break BB;
                      break
                    }
                    BB = dB[--zB].from
                  }
                if (pB) pB.push(JB);
                else {
                  JB.to < uB && IB.push(new Lj(JB.to, uB, rB)), Mj(BB, JB.direction == aj != !(rB % 2) ? QB + 1 : QB, nB, JB.inner, JB.from, JB.to, IB), uB = JB.from
                }
                sB = JB.from
              } else {
                if (sB == jB || (zB ? tj[sB - 1] != NB : tj[sB - 1] == NB)) break;
                sB--
              } pB ? Sj(BB, sB, uB, QB + 1, nB, pB, IB) : sB < uB && IB.push(new Lj(sB, uB, rB)), uB = sB
          }
    }

    function Mj(BB, jB, zB, QB, nB, dB, IB) {
      let NB = jB % 2 ? 2 : 1;
      ! function(BB, jB, zB, QB, nB) {
        for (let dB = 0; dB <= QB.length; dB++) {
          let IB = dB ? QB[dB - 1].to : jB,
            NB = dB < QB.length ? QB[dB].from : zB,
            uB = dB ? 256 : nB;
          for (let jB = IB, zB = uB, QB = uB; jB < NB; jB++) {
            let nB = kj(BB.charCodeAt(jB));
            512 == nB ? nB = zB : 8 == nB && 4 == QB && (nB = 16), tj[jB] = 4 == nB ? 2 : nB, 7 & nB && (QB = nB), zB = nB
          }
          for (let BB = IB, jB = uB, QB = uB; BB < NB; BB++) {
            let nB = tj[BB];
            if (128 == nB) BB < NB - 1 && jB == tj[BB + 1] && 24 & jB ? nB = tj[BB] = jB : tj[BB] = 256;
            else if (64 == nB) {
              let nB = BB + 1;
              for (; nB < NB && 64 == tj[nB];) nB++;
              let dB = BB && 8 == jB || nB < zB && 8 == tj[nB] ? 1 == QB ? 1 : 8 : 256;
              for (let jB = BB; jB < nB; jB++) tj[jB] = dB;
              BB = nB - 1
            } else 8 == nB && 1 == QB && (tj[BB] = 1);
            jB = nB, 7 & nB && (QB = nB)
          }
        }
      }(BB, nB, dB, QB, NB),
      function(BB, jB, zB, QB, nB) {
        let dB = 1 == nB ? 2 : 1;
        for (let IB = 0, NB = 0, uB = 0; IB <= QB.length; IB++) {
          let UB = IB ? QB[IB - 1].to : jB,
            aB = IB < QB.length ? QB[IB].from : zB;
          for (let jB, zB, QB, IB = UB; IB < aB; IB++)
            if (zB = mj[jB = BB.charCodeAt(IB)])
              if (zB < 0) {
                for (let BB = NB - 3; BB >= 0; BB -= 3)
                  if (yj[BB + 1] == -zB) {
                    let jB = yj[BB + 2],
                      zB = 2 & jB ? nB : 4 & jB ? 1 & jB ? dB : nB : 0;
                    zB && (tj[IB] = tj[yj[BB]] = zB), NB = BB;
                    break
                  }
              } else {
                if (189 == yj.length) break;
                yj[NB++] = IB, yj[NB++] = jB, yj[NB++] = uB
              }
          else if (2 == (QB = tj[IB]) || 1 == QB) {
            let BB = QB == nB;
            uB = BB ? 0 : 1;
            for (let jB = NB - 3; jB >= 0; jB -= 3) {
              let zB = yj[jB + 2];
              if (2 & zB) break;
              if (BB) yj[jB + 2] |= 2;
              else {
                if (4 & zB) break;
                yj[jB + 2] |= 4
              }
            }
          }
        }
      }(BB, nB, dB, QB, NB),
      function(BB, jB, zB, QB) {
        for (let nB = 0, dB = QB; nB <= zB.length; nB++) {
          let IB = nB ? zB[nB - 1].to : BB,
            NB = nB < zB.length ? zB[nB].from : jB;
          for (let uB = IB; uB < NB;) {
            let IB = tj[uB];
            if (256 == IB) {
              let IB = uB + 1;
              for (;;)
                if (IB == NB) {
                  if (nB == zB.length) break;
                  IB = zB[nB++].to, NB = nB < zB.length ? zB[nB].from : jB
                } else {
                  if (256 != tj[IB]) break;
                  IB++
                } let UB = 1 == dB,
                aB = UB == (1 == (IB < jB ? tj[IB] : QB)) ? UB ? 1 : 2 : QB;
              for (let jB = IB, QB = nB, dB = QB ? zB[QB - 1].to : BB; jB > uB;) jB == dB && (jB = zB[--QB].from, dB = QB ? zB[QB - 1].to : BB), tj[--jB] = aB;
              uB = IB
            } else dB = IB, uB++
          }
        }
      }(nB, dB, QB, NB), Sj(BB, nB, dB, jB, zB, QB, IB)
    }

    function Ej(BB, jB, zB) {
      if (!BB) return [new Lj(0, 0, jB == pj ? 1 : 0)];
      if (jB == aj && !zB.length && !Gj.test(BB)) return ij(BB.length);
      if (zB.length)
        for (; BB.length > tj.length;) tj[tj.length] = 256;
      let QB = [],
        nB = jB == aj ? 0 : 1;
      return Mj(BB, nB, nB, zB, 0, BB.length, QB), QB
    }

    function ij(BB) {
      return [new Lj(0, BB, 0)]
    }
    let qj = "";

    function fj(BB, jB, zB, nB, dB) {
      var IB;
      let NB = nB.head - BB.from,
        uB = Lj.find(jB, NB, null !== (IB = nB.bidiLevel) && void 0 !== IB ? IB : -1, nB.assoc),
        UB = jB[uB],
        aB = UB.side(dB, zB);
      if (NB == aB) {
        let BB = uB += dB ? 1 : -1;
        if (BB < 0 || BB >= jB.length) return null;
        UB = jB[uB = BB], NB = UB.side(!dB, zB), aB = UB.side(dB, zB)
      }
      let pB = (0, QB.R)(BB.text, NB, UB.forward(dB, zB));
      (pB < UB.from || pB > UB.to) && (pB = aB), qj = BB.text.slice(Math.min(NB, pB), Math.max(NB, pB));
      let rB = uB == (dB ? jB.length - 1 : 0) ? null : jB[uB + (dB ? 1 : -1)];
      return rB && pB == aB && rB.level + (dB ? 0 : 1) < UB.level ? QB.i.cursor(rB.side(!dB, zB) + BB.from, rB.forward(dB, zB) ? 1 : -1, rB.level) : QB.i.cursor(pB + BB.from, UB.forward(dB, zB) ? -1 : 1, UB.level)
    }

    function oj(BB, jB, zB) {
      for (let QB = jB; QB < zB; QB++) {
        let jB = kj(BB.charCodeAt(QB));
        if (1 == jB) return aj;
        if (2 == jB || 4 == jB) return pj
      }
      return aj
    }
    const Hj = QB.p.define(),
      Dj = QB.p.define(),
      Fj = QB.p.define(),
      Yj = QB.p.define(),
      Vj = QB.p.define(),
      hj = QB.p.define(),
      Xj = QB.p.define(),
      Zj = QB.p.define(),
      Aj = QB.p.define(),
      Tj = QB.p.define({
        combine: BB => BB.some((BB => BB))
      }),
      Pj = QB.p.define({
        combine: BB => BB.some((BB => BB))
      }),
      Wj = QB.p.define();
    class ej {
      constructor(BB, jB, zB, QB, nB) {
        let dB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = BB, this.y = jB, this.x = zB, this.yMargin = QB, this.xMargin = nB, this.isSnapshot = dB
      }
      map(BB) {
        return BB.empty ? this : new ej(this.range.map(BB), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(BB) {
        return this.range.to <= BB.doc.length ? this : new ej(QB.i.cursor(BB.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const lj = QB.D.define({
        map: (BB, jB) => BB.map(jB)
      }),
      wj = QB.D.define();

    function xj(BB, jB, zB) {
      let QB = BB.facet(Yj);
      QB.length ? QB[0](jB) : window.onerror && window.onerror(String(jB), zB, void 0, void 0, jB) || (zB ? console.error(zB + ":", jB) : console.error(jB))
    }
    const Kj = QB.p.define({
      combine: BB => !BB.length || BB[0]
    });
    let Cj = 0;
    const cj = QB.p.define({
      combine: BB => BB.filter(((jB, zB) => {
        for (let QB = 0; QB < zB; QB++)
          if (BB[QB].plugin == jB.plugin) return !1;
        return !0
      }))
    });
    class bj {
      constructor(BB, jB, zB, QB, nB) {
        this.id = BB, this.create = jB, this.domEventHandlers = zB, this.domEventObservers = QB, this.baseExtensions = nB(this), this.extension = this.baseExtensions.concat(cj.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(BB) {
        return this.baseExtensions.concat(cj.of({
          plugin: this,
          arg: BB
        }))
      }
      static define(BB, jB) {
        const {
          eventHandlers: zB,
          eventObservers: QB,
          provide: nB,
          pQ: dB
        } = jB || {};
        return new bj(Cj++, BB, zB, QB, (BB => {
          let jB = [];
          return dB && jB.push(Bz.of((jB => {
            let zB = jB.plugin(BB);
            return zB ? dB(zB) : FB.none
          }))), nB && jB.push(nB(BB)), jB
        }))
      }
      static fromClass(BB, jB) {
        return bj.define(((jB, zB) => new BB(jB, zB)), jB)
      }
    }
    class vj {
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
            } catch (jB) {
              if (xj(BB.state, jB, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (zB) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(BB, this.spec.arg)
        } catch (jB) {
          xj(BB.state, jB, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(BB) {
        var jB;
        if (null === (jB = this.value) || void 0 === jB ? void 0 : jB.destroy) try {
          this.value.destroy()
        } catch (zB) {
          xj(BB.state, zB, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const Rj = QB.p.define(),
      Oj = QB.p.define(),
      Bz = QB.p.define(),
      jz = QB.p.define(),
      zz = QB.p.define(),
      Qz = QB.p.define(),
      nz = QB.p.define();

    function dz(BB, jB) {
      let zB = BB.state.facet(nz);
      if (!zB.length) return zB;
      let nB = zB.map((jB => jB instanceof Function ? jB(BB) : jB)),
        dB = [];
      return QB.z.spans(nB, jB.from, jB.to, {
        point() {},
        span(BB, zB, QB, nB) {
          let IB = BB - jB.from,
            NB = zB - jB.from,
            uB = dB;
          for (let dB = QB.length - 1; dB >= 0; dB--, nB--) {
            let BB, zB = QB[dB].spec.bidiIsolate;
            if (null == zB && (zB = oj(jB.text, IB, NB)), nB > 0 && uB.length && (BB = uB[uB.length - 1]).to == IB && BB.direction == zB) BB.to = NB, uB = BB.inner;
            else {
              let BB = {
                from: IB,
                to: NB,
                direction: zB,
                inner: []
              };
              uB.push(BB), uB = BB.inner
            }
          }
        }
      }), dB
    }
    const Iz = QB.p.define();

    function Nz(BB) {
      let jB = 0,
        zB = 0,
        QB = 0,
        nB = 0;
      for (let dB of BB.state.facet(Iz)) {
        let IB = dB(BB);
        IB && (null != IB.left && (jB = Math.max(jB, IB.left)), null != IB.right && (zB = Math.max(zB, IB.right)), null != IB.top && (QB = Math.max(QB, IB.top)), null != IB.bottom && (nB = Math.max(nB, IB.bottom)))
      }
      return {
        left: jB,
        right: zB,
        top: QB,
        bottom: nB
      }
    }
    const uz = QB.p.define();
    class Uz {
      constructor(BB, jB, zB, QB) {
        this.fromA = BB, this.toA = jB, this.fromB = zB, this.toB = QB
      }
      join(BB) {
        return new Uz(Math.min(this.fromA, BB.fromA), Math.max(this.toA, BB.toA), Math.min(this.fromB, BB.fromB), Math.max(this.toB, BB.toB))
      }
      addToSet(BB) {
        let jB = BB.length,
          zB = this;
        for (; jB > 0; jB--) {
          let QB = BB[jB - 1];
          if (!(QB.fromA > zB.toA)) {
            if (QB.toA < zB.fromA) break;
            zB = zB.join(QB), BB.splice(jB - 1, 1)
          }
        }
        return BB.splice(jB, 0, zB), BB
      }
      static extendWithRanges(BB, jB) {
        if (0 == jB.length) return BB;
        let zB = [];
        for (let QB = 0, nB = 0, dB = 0;;) {
          let IB = QB < BB.length ? BB[QB].fromB : 1e9,
            NB = nB < jB.length ? jB[nB] : 1e9,
            uB = Math.min(IB, NB);
          if (1e9 == uB) break;
          let UB = uB + dB,
            aB = uB,
            pB = UB;
          for (;;)
            if (nB < jB.length && jB[nB] <= aB) {
              let zB = jB[nB + 1];
              nB += 2, aB = Math.max(aB, zB);
              for (let jB = QB; jB < BB.length && BB[jB].fromB <= aB; jB++) dB = BB[jB].toA - BB[jB].toB;
              pB = Math.max(pB, zB + dB)
            } else {
              if (!(QB < BB.length && BB[QB].fromB <= aB)) break;
              {
                let jB = BB[QB++];
                aB = Math.max(aB, jB.toB), pB = Math.max(pB, jB.toA), dB = jB.toA - jB.toB
              }
            } zB.push(new Uz(UB, pB, uB, aB))
        }
        return zB
      }
    }
    class az {
      constructor(BB, jB, zB) {
        this.view = BB, this.state = jB, this.transactions = zB, this.flags = 0, this.startState = BB.state, this.changes = QB.ChangeSet.empty(this.startState.doc.length);
        for (let QB of zB) this.changes = this.changes.compose(QB.changes);
        let nB = [];
        this.changes.iterChangedRanges(((BB, jB, zB, QB) => nB.push(new Uz(BB, jB, zB, QB)))), this.changedRanges = nB
      }
      static create(BB, jB, zB) {
        return new az(BB, jB, zB)
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
    const pz = [];
    class rz {
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = BB, this.length = jB, this.flags = zB, this.parent = null, BB.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return pz
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
          BB && function(BB, jB) {
            for (let zB = BB.attributes.length - 1; zB >= 0; zB--) {
              let QB = BB.attributes[zB].name;
              null == jB[QB] && BB.removeAttribute(QB)
            }
            for (let zB in jB) {
              let QB = jB[zB];
              "style" == zB ? BB.style.cssText = QB : BB.getAttribute(zB) != QB && BB.setAttribute(zB, QB)
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
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let zB of this.children) {
          if (zB == BB) return jB;
          jB += zB.length + zB.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(BB) {
        return this.posBefore(BB) + BB.length
      }
      covers(BB) {
        return !0
      }
      coordsIn(BB, jB) {
        return null
      }
      domPosFor(BB, jB) {
        let zB = wB(this.dom),
          QB = this.length ? BB > 0 : jB > 0;
        return new uj(this.parent.dom, zB + (QB ? 1 : 0), 0 == BB || BB == this.length)
      }
      markDirty(BB) {
        this.flags &= -3, BB && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let BB = this; BB; BB = BB.parent)
          if (BB instanceof mz) return BB;
        return null
      }
      static get(BB) {
        return BB.cmTile
      }
    }
    class sz extends rz {
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
        let jB, zB = this.dom,
          QB = null,
          nB = (null === BB || void 0 === BB ? void 0 : BB.node) == zB ? BB : null,
          dB = 0;
        for (let IB of this.children) {
          if (IB.sync(BB), dB += IB.length + IB.breakAfter, jB = QB ? QB.nextSibling : zB.firstChild, nB && jB != IB.dom && (nB.written = !0), IB.dom.parentNode == zB)
            for (; jB && jB != IB.dom;) jB = Jz(jB);
          else zB.insertBefore(IB.dom, jB);
          QB = IB.dom
        }
        for (jB = QB ? QB.nextSibling : zB.firstChild, nB && jB && (nB.written = !0); jB;) jB = Jz(jB);
        this.length = dB
      }
    }

    function Jz(BB) {
      let jB = BB.nextSibling;
      return BB.parentNode.removeChild(BB), jB
    }
    class mz extends sz {
      constructor(BB, jB) {
        super(jB), this.view = BB
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
          let jB = rz.get(BB);
          if (jB && this.owns(jB)) return jB;
          BB = BB.parentNode
        }
      }
      blockTiles(BB) {
        for (let jB = [], zB = this, QB = 0, nB = 0;;)
          if (QB == zB.children.length) {
            if (!jB.length) return;
            zB = zB.parent, zB.breakAfter && nB++, QB = jB.pop()
          } else {
            let dB = zB.children[QB++];
            if (dB instanceof yz) jB.push(QB), zB = dB, QB = 0;
            else {
              let jB = nB + dB.length,
                zB = BB(dB, nB);
              if (void 0 !== zB) return zB;
              nB = jB + dB.breakAfter
            }
          }
      }
      resolveBlock(BB, jB) {
        let zB, QB, nB = -1,
          dB = -1;
        if (this.blockTiles(((IB, NB) => {
            let uB = NB + IB.length;
            if (BB >= NB && BB <= uB) {
              if (IB.isWidget() && jB >= -1 && jB <= 1) {
                if (32 & IB.flags) return !0;
                16 & IB.flags && (zB = void 0)
              }(NB < BB || BB == uB && (jB < -1 ? IB.length : IB.covers(1))) && (!zB || !IB.isWidget() && zB.isWidget()) && (zB = IB, nB = BB - NB), (uB > BB || BB == NB && (jB > 1 ? IB.length : IB.covers(-1))) && (!QB || !IB.isWidget() && QB.isWidget()) && (QB = IB, dB = BB - NB)
            }
          })), !zB && !QB) throw new Error("No tile at position " + BB);
        return zB && jB < 0 || !QB ? {
          tile: zB,
          offset: nB
        } : {
          tile: QB,
          offset: dB
        }
      }
    }
    class yz extends sz {
      constructor(BB, jB) {
        super(BB), this.wrapper = jB
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
      static of (BB, jB) {
        let zB = new yz(jB || document.createElement(BB.tagName), BB);
        return jB || (zB.flags |= 4), zB
      }
    }
    class kz extends sz {
      constructor(BB, jB) {
        super(BB), this.attrs = jB
      }
      isLine() {
        return !0
      }
      static start(BB, jB, zB) {
        let QB = new kz(jB || document.createElement("div"), BB);
        return jB && zB || (QB.flags |= 4), QB
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(BB, jB, zB) {
        let QB = null,
          nB = -1,
          dB = null,
          IB = -1;
        ! function BB(NB, uB) {
          for (let UB = 0, aB = 0; UB < NB.children.length && aB <= uB; UB++) {
            let pB = NB.children[UB],
              rB = aB + pB.length;
            rB >= uB && (pB.isComposite() ? BB(pB, uB - aB) : (!dB || dB.isHidden && (jB > 0 || zB && Gz(dB, pB))) && (rB > uB || 32 & pB.flags) ? (dB = pB, IB = uB - aB) : (aB < uB || 16 & pB.flags && !pB.isHidden) && (QB = pB, nB = uB - aB)), aB = rB
          }
        }(this, BB);
        let NB = (jB < 0 ? QB : dB) || QB || dB;
        return NB ? {
          tile: NB,
          offset: NB == QB ? nB : IB
        } : null
      }
      coordsIn(BB, jB) {
        let zB = this.resolveInline(BB, jB, !0);
        return zB ? zB.tile.coordsIn(Math.max(0, zB.offset), jB) : function(BB) {
          let jB = BB.dom.lastChild;
          if (!jB) return BB.dom.getBoundingClientRect();
          let zB = eB(jB);
          return zB[zB.length - 1] || null
        }(this)
      }
      domIn(BB, jB) {
        let zB = this.resolveInline(BB, jB);
        if (zB) {
          let {
            tile: BB,
            offset: QB
          } = zB;
          if (this.dom.contains(BB.dom)) return BB.isText() ? new uj(BB.dom, Math.min(BB.dom.nodeValue.length, QB)) : BB.domPosFor(QB, 16 & BB.flags ? 1 : 32 & BB.flags ? -1 : jB);
          let nB = zB.tile.parent,
            dB = !1;
          for (let jB of nB.children) {
            if (dB) return new uj(jB.dom, 0);
            jB == zB.tile && (dB = !0)
          }
        }
        return new uj(this.dom, 0)
      }
    }

    function Gz(BB, jB) {
      let zB = BB.coordsIn(0, 1),
        QB = jB.coordsIn(0, 1);
      return zB && QB && QB.top < zB.bottom
    }
    class Lz extends sz {
      constructor(BB, jB) {
        super(BB), this.mark = jB
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (BB, jB) {
        let zB = new Lz(jB || document.createElement(BB.tagName), BB);
        return jB || (zB.flags |= 4), zB
      }
    }
    class gz extends rz {
      constructor(BB, jB) {
        super(BB, jB.length), this.text = jB
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
      coordsIn(BB, jB) {
        let zB = this.dom.nodeValue.length;
        BB > zB && (BB = zB);
        let QB = BB,
          nB = BB,
          dB = 0;
        0 == BB && jB < 0 || BB == zB && jB >= 0 ? MB.chrome || MB.gecko || (BB ? (QB--, dB = 1) : nB < zB && (nB++, dB = -1)) : jB < 0 ? QB-- : nB < zB && nB++;
        let IB = Qj(this.dom, QB, nB).getClientRects();
        if (!IB.length) return null;
        let NB = IB[(dB ? dB < 0 : jB >= 0) ? 0 : IB.length - 1];
        return MB.safari && !dB && 0 == NB.width && (NB = Array.prototype.find.call(IB, (BB => BB.width)) || NB), dB ? cB(NB, dB < 0) : NB || null
      }
      static of (BB, jB) {
        let zB = new gz(jB || document.createTextNode(BB), BB);
        return jB || (zB.flags |= 2), zB
      }
    }
    class tz extends rz {
      constructor(BB, jB, zB, QB) {
        super(BB, jB, QB), this.widget = zB
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
      coordsIn(BB, jB) {
        return this.coordsInWidget(BB, jB, !1)
      }
      coordsInWidget(BB, jB, zB) {
        let QB = this.widget.coordsAt(this.dom, BB, jB);
        if (QB) return QB;
        if (zB) return cB(this.dom.getBoundingClientRect(), this.length ? 0 == BB : jB <= 0);
        {
          let jB = this.dom.getClientRects(),
            zB = null;
          if (!jB.length) return null;
          let QB = !!(16 & this.flags) || !(32 & this.flags) && BB > 0;
          for (let nB = QB ? jB.length - 1 : 0; zB = jB[nB], !(BB > 0 ? 0 == nB : nB == jB.length - 1 || zB.top < zB.bottom); nB += QB ? -1 : 1);
          return cB(zB, !QB)
        }
      }
      get overrideDOMText() {
        if (!this.length) return QB.G.empty;
        let {
          root: BB
        } = this;
        if (!BB) return QB.G.empty;
        let jB = this.posAtStart;
        return BB.view.state.doc.slice(jB, jB + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (BB, jB, zB, QB, nB) {
        return nB || (nB = BB.toDOM(jB), BB.editable || (nB.contentEditable = "false")), new tz(nB, zB, BB, QB)
      }
    }
    class Sz extends rz {
      constructor(BB) {
        let jB = document.createElement("img");
        jB.className = "cm-widgetBuffer", jB.setAttribute("aria-hidden", "true"), super(jB, 0, BB)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return QB.G.empty
      }
      coordsIn(BB) {
        return this.dom.getBoundingClientRect()
      }
    }
    class Mz {
      constructor(BB) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = BB
      }
      advance(BB, jB, zB) {
        let {
          tile: QB,
          index: nB,
          beforeBreak: dB,
          parents: IB
        } = this;
        for (; BB || jB > 0;)
          if (QB.isComposite())
            if (dB) {
              if (!BB) break;
              zB && zB.break(), BB--, dB = !1
            } else if (nB == QB.children.length) {
          if (!BB && !IB.length) break;
          zB && zB.leave(QB), dB = !!QB.breakAfter, ({
            tile: QB,
            index: nB
          } = IB.pop()), nB++
        } else {
          let NB = QB.children[nB],
            uB = NB.breakAfter;
          !(jB > 0 ? NB.length <= BB : NB.length < BB) || zB && !1 === zB.skip(NB, 0, NB.length) && NB.isComposite ? (IB.push({
            tile: QB,
            index: nB
          }), QB = NB, nB = 0, zB && NB.isComposite() && zB.enter(NB)) : (dB = !!uB, nB++, BB -= NB.length)
        } else if (nB == QB.length) dB = !!QB.breakAfter, ({
          tile: QB,
          index: nB
        } = IB.pop()), nB++;
        else {
          if (!BB) break;
          {
            let jB = Math.min(BB, QB.length - nB);
            zB && zB.skip(QB, nB, nB + jB), BB -= jB, nB += jB
          }
        }
        return this.tile = QB, this.index = nB, this.beforeBreak = dB, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class Ez {
      constructor(BB, jB, zB, QB) {
        this.from = BB, this.to = jB, this.wrapper = zB, this.rank = QB
      }
    }
    class iz {
      constructor(BB, jB, zB) {
        this.cache = BB, this.root = jB, this.blockWrappers = zB, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(BB, jB, zB, QB) {
        var nB;
        this.flushBuffer();
        let dB = this.ensureMarks(jB, zB),
          IB = dB.lastChild;
        if (IB && IB.isText() && !(8 & IB.flags) && IB.length + BB.length < 512) {
          this.cache.reused.set(IB, 2), (dB.children[dB.children.length - 1] = new gz(IB.dom, IB.text + BB)).parent = dB
        } else dB.append(QB || gz.of(BB, null === (nB = this.cache.find(gz)) || void 0 === nB ? void 0 : nB.dom));
        this.pos += BB.length, this.afterWidget = null
      }
      addComposition(BB, jB) {
        let zB = this.curLine;
        zB.dom != jB.line.dom && (zB.setDOM(this.cache.reused.has(jB.line) ? Yz(jB.line.dom) : jB.line.dom), this.cache.reused.set(jB.line, 2));
        let QB = zB;
        for (let IB = jB.marks.length - 1; IB >= 0; IB--) {
          let BB = jB.marks[IB],
            zB = QB.lastChild;
          if (zB instanceof Lz && zB.mark.eq(BB.mark)) zB.dom != BB.dom && zB.setDOM(Yz(BB.dom)), QB = zB;
          else {
            if (this.cache.reused.get(BB)) {
              let jB = rz.get(BB.dom);
              jB && jB.setDOM(Yz(BB.dom))
            }
            let jB = Lz.of(BB.mark, BB.dom);
            QB.append(jB), QB = jB
          }
          this.cache.reused.set(BB, 2)
        }
        let nB = rz.get(BB.text);
        nB && this.cache.reused.set(nB, 2);
        let dB = new gz(BB.text, BB.text.nodeValue);
        dB.flags |= 8, QB.append(dB)
      }
      addInlineWidget(BB, jB, zB) {
        let QB = this.afterWidget && 48 & BB.flags && (48 & this.afterWidget.flags) == (48 & BB.flags);
        QB || this.flushBuffer();
        let nB = this.ensureMarks(jB, zB);
        QB || 16 & BB.flags || nB.append(this.getBuffer(1)), nB.append(BB), this.pos += BB.length, this.afterWidget = BB
      }
      addMark(BB, jB, zB) {
        this.flushBuffer(), this.ensureMarks(jB, zB).append(BB), this.pos += BB.length, this.afterWidget = null
      }
      addBlockWidget(BB) {
        this.getBlockPos().append(BB), this.pos += BB.length, this.lastBlock = BB, this.endLine()
      }
      continueWidget(BB) {
        (this.afterWidget || this.lastBlock).length += BB, this.pos += BB
      }
      addLineStart(BB, jB) {
        var zB;
        BB || (BB = Fz);
        let QB = kz.start(BB, jB || (null === (zB = this.cache.find(kz)) || void 0 === zB ? void 0 : zB.dom), !!jB);
        this.getBlockPos().append(this.lastBlock = this.curLine = QB)
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
      ensureMarks(BB, jB) {
        var zB;
        let QB = this.curLine;
        for (let nB = BB.length - 1; nB >= 0; nB--) {
          let dB, IB = BB[nB];
          if (jB > 0 && (dB = QB.lastChild) && dB instanceof Lz && dB.mark.eq(IB)) QB = dB, jB--;
          else {
            let BB = Lz.of(IB, null === (zB = this.cache.find(Lz, (BB => BB.mark.eq(IB)))) || void 0 === zB ? void 0 : zB.dom);
            QB.append(BB), QB = BB, jB = 0
          }
        }
        return QB
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let BB = this.curLine.lastChild;
          BB && Dz(this.curLine, !1) && ("BR" == BB.dom.nodeName || !BB.isWidget() || MB.ios && Dz(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(hz, 0, 32) || new tz(hz.toDOM(), 0, hz, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let BB = this.wrappers.length - 1; BB >= 0; BB--) this.wrappers[BB].to < this.pos && this.wrappers.splice(BB, 1);
        for (let BB = this.blockWrappers; BB.value && BB.from <= this.pos; BB.next())
          if (BB.to >= this.pos) {
            let jB = new Ez(BB.from, BB.to, BB.value, BB.rank),
              zB = this.wrappers.length;
            for (; zB > 0 && (this.wrappers[zB - 1].rank - jB.rank || this.wrappers[zB - 1].to - jB.to) < 0;) zB--;
            this.wrappers.splice(zB, 0, jB)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var BB;
        this.updateBlockWrappers();
        let jB = this.root;
        for (let zB of this.wrappers) {
          let QB = jB.lastChild;
          if (zB.from < this.pos && QB instanceof yz && QB.wrapper.eq(zB.wrapper)) jB = QB;
          else {
            let QB = yz.of(zB.wrapper, null === (BB = this.cache.find(yz, (BB => BB.wrapper.eq(zB.wrapper)))) || void 0 === BB ? void 0 : BB.dom);
            jB.append(QB), jB = QB
          }
        }
        return jB
      }
      blockPosCovered() {
        let BB = this.lastBlock;
        return null != BB && !BB.breakAfter && (!BB.isWidget() || (160 & BB.flags) > 0)
      }
      getBuffer(BB) {
        let jB = 2 | (BB < 0 ? 16 : 32),
          zB = this.cache.find(Sz, void 0, 1);
        return zB && (zB.flags = jB), zB || new Sz(jB)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class qz {
      constructor(BB) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = BB.iter()
      }
      skip(BB) {
        this.textOff + BB <= this.text.length ? this.textOff += BB : (this.skipCount += BB - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(BB) {
        if (this.textOff == this.text.length) {
          let {
            value: jB,
            lineBreak: zB,
            done: QB
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, QB) throw new Error("Ran out of text content when drawing inline views");
          this.text = jB;
          let nB = this.textOff = Math.min(BB, jB.length);
          return zB ? null : jB.slice(0, nB)
        }
        let jB = Math.min(this.text.length, this.textOff + BB),
          zB = this.text.slice(this.textOff, jB);
        return this.textOff = jB, zB
      }
    }
    const fz = [tz, kz, gz, Lz, Sz, yz, mz];
    for (let XI = 0; XI < fz.length; XI++) fz[XI].bucket = XI;
    class oz {
      constructor(BB) {
        this.view = BB, this.buckets = fz.map((() => [])), this.index = fz.map((() => 0)), this.reused = new Map
      }
      add(BB) {
        let jB = BB.constructor.bucket,
          zB = this.buckets[jB];
        zB.length < 6 ? zB.push(BB) : zB[this.index[jB] = (this.index[jB] + 1) % 6] = BB
      }
      find(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          QB = BB.bucket,
          nB = this.buckets[QB],
          dB = this.index[QB];
        for (let IB = nB.length - 1; IB >= 0; IB--) {
          let BB = (IB + dB) % nB.length,
            NB = nB[BB];
          if ((!jB || jB(NB)) && !this.reused.has(NB)) return nB.splice(BB, 1), BB < dB && this.index[QB]--, this.reused.set(NB, zB), NB
        }
        return null
      }
      findWidget(BB, jB, zB) {
        let QB = this.buckets[0];
        if (QB.length)
          for (let nB = 0, dB = 0;; nB++) {
            if (nB == QB.length) {
              if (dB) return null;
              dB = 1, nB = 0
            }
            let IB = QB[nB];
            if (!this.reused.has(IB) && (0 == dB ? IB.widget.compare(BB) : IB.widget.constructor == BB.constructor && BB.updateDOM(IB.dom, this.view, IB.widget))) return QB.splice(nB, 1), nB < this.index[0] && this.index[0]--, IB.widget == BB && IB.length == jB && (497 & IB.flags) == zB ? (this.reused.set(IB, 1), IB) : (this.reused.set(IB, 2), new tz(IB.dom, jB, BB, -498 & IB.flags | zB))
          }
      }
      reuse(BB) {
        return this.reused.set(BB, 1), BB
      }
      maybeReuse(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(BB)) return this.reused.set(BB, jB), BB.dom
      }
      clear() {
        for (let BB = 0; BB < this.buckets.length; BB++) this.buckets[BB].length = this.index[BB] = 0
      }
    }
    class Hz {
      constructor(BB, jB, zB, nB, dB) {
        this.view = BB, this.pQ = nB, this.disallowBlockEffectsFor = dB, this.openWidget = !1, this.openMarks = 0, this.cache = new oz(BB), this.text = new qz(BB.state.doc), this.builder = new iz(this.cache, new mz(BB, BB.contentDOM), QB.z.iter(zB)), this.cache.reused.set(jB, 2), this.old = new Mz(jB), this.reuseWalker = {
          skip: (BB, jB, zB) => {
            if (this.cache.add(BB), BB.isComposite()) return !1
          },
          enter: BB => this.cache.add(BB),
          leave: () => {},
          break: () => {}
        }
      }
      run(BB, jB) {
        let zB = jB && this.getCompositionContext(jB.text);
        for (let QB = 0, nB = 0, dB = 0;;) {
          let IB = dB < BB.length ? BB[dB++] : null,
            NB = IB ? IB.fromA : this.old.root.length;
          if (NB > QB) {
            let BB = NB - QB;
            this.preserve(BB, !dB, !IB), QB = NB, nB += BB
          }
          if (!IB) break;
          jB && IB.fromA <= jB.range.fromA && IB.toA >= jB.range.toA ? (this.forward(IB.fromA, jB.range.fromA, jB.range.fromA < jB.range.toA ? 1 : -1), this.emit(nB, jB.range.fromB), this.cache.clear(), this.builder.addComposition(jB, zB), this.text.skip(jB.range.toB - jB.range.fromB), this.forward(jB.range.fromA, IB.toA), this.emit(jB.range.toB, IB.toB)) : (this.forward(IB.fromA, IB.toA), this.emit(nB, IB.toB)), nB = IB.toB, QB = IB.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(BB, jB, zB) {
        let QB = function(BB) {
            let jB = [];
            for (let zB = BB.parents.length; zB > 1; zB--) {
              let QB = zB == BB.parents.length ? BB.tile : BB.parents[zB].tile;
              QB instanceof Lz && jB.push(QB.mark)
            }
            return jB
          }(this.old),
          nB = this.openMarks;
        this.old.advance(BB, zB ? 1 : -1, {
          skip: (BB, jB, zB) => {
            if (BB.isWidget())
              if (this.openWidget) this.builder.continueWidget(zB - jB);
              else {
                let dB = zB > 0 || jB < BB.length ? tz.of(BB.widget, this.view, zB - jB, 496 & BB.flags, this.cache.maybeReuse(BB)) : this.cache.reuse(BB);
                256 & dB.flags ? (dB.flags &= -2, this.builder.addBlockWidget(dB)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(dB, QB, nB), nB = QB.length)
              }
            else if (BB.isText()) this.builder.ensureLine(null), jB || zB != BB.length || this.cache.reused.has(BB) ? (this.cache.add(BB), this.builder.addText(BB.text.slice(jB, zB), QB, nB)) : this.builder.addText(BB.text, QB, nB, this.cache.reuse(BB)), nB = QB.length;
            else if (BB.isLine()) BB.flags &= -2, this.cache.reused.set(BB, 1), this.builder.addLine(BB);
            else if (BB instanceof Sz) this.cache.add(BB);
            else {
              if (!(BB instanceof Lz)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(BB, QB, nB), this.cache.reused.set(BB, 1), nB = QB.length
            }
            this.openWidget = !1
          },
          enter: BB => {
            BB.isLine() ? this.builder.addLineStart(BB.attrs, this.cache.maybeReuse(BB)) : (this.cache.add(BB), BB instanceof Lz && QB.unshift(BB.mark)), this.openWidget = !1
          },
          leave: BB => {
            BB.isLine() ? QB.length && (QB.length = nB = 0) : BB instanceof Lz && (QB.shift(), nB = Math.min(nB, QB.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(BB)
      }
      emit(BB, jB) {
        let zB = null,
          nB = this.builder,
          dB = 0,
          IB = QB.z.spans(this.pQ, BB, jB, {
            point: (BB, jB, QB, IB, NB, uB) => {
              if (QB instanceof hB) {
                if (this.disallowBlockEffectsFor[uB]) {
                  if (QB.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (jB > this.view.state.doc.lineAt(BB).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (dB = IB.length, NB > IB.length) nB.continueWidget(jB - BB);
                else {
                  let dB = QB.widget || (QB.block ? Vz.block : Vz.inline),
                    uB = function(BB) {
                      let jB = BB.isReplace ? (BB.startSide < 0 ? 64 : 0) | (BB.endSide > 0 ? 128 : 0) : BB.startSide > 0 ? 32 : 16;
                      BB.block && (jB |= 256);
                      return jB
                    }(QB),
                    UB = this.cache.findWidget(dB, jB - BB, uB) || tz.of(dB, this.view, jB - BB, uB);
                  QB.block ? (QB.startSide > 0 && nB.addLineStartIfNotCovered(zB), nB.addBlockWidget(UB)) : (nB.ensureLine(zB), nB.addInlineWidget(UB, IB, NB))
                }
                zB = null
              } else zB = function(BB, jB) {
                let zB = jB.spec.attributes,
                  QB = jB.spec.class;
                if (!zB && !QB) return BB;
                BB || (BB = {
                  class: "cm-line"
                });
                zB && EB(zB, BB);
                QB && (BB.class += " " + QB);
                return BB
              }(zB, QB);
              jB > BB && this.text.skip(jB - BB)
            },
            span: (BB, jB, QB, dB) => {
              for (let IB = BB; IB < jB;) {
                let NB = this.text.next(Math.min(512, jB - IB));
                null == NB ? (nB.addLineStartIfNotCovered(zB), nB.addBreak(), IB++) : (nB.ensureLine(zB), nB.addText(NB, QB, IB == BB ? dB : QB.length), IB += NB.length), zB = null
              }
            }
          });
        nB.addLineStartIfNotCovered(zB), this.openWidget = IB > dB, this.openMarks = IB
      }
      forward(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        jB - BB <= 10 ? this.old.advance(jB - BB, zB, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(jB - BB - 10, -1), this.old.advance(5, zB, this.reuseWalker))
      }
      getCompositionContext(BB) {
        let jB = [],
          zB = null;
        for (let QB = BB.parentNode;; QB = QB.parentNode) {
          let BB = rz.get(QB);
          if (QB == this.view.contentDOM) break;
          BB instanceof Lz ? jB.push(BB) : (null === BB || void 0 === BB ? void 0 : BB.isLine()) ? zB = BB : BB instanceof yz || ("DIV" != QB.nodeName || zB || QB == this.view.contentDOM ? zB || jB.push(Lz.of(new YB({
            tagName: QB.nodeName.toLowerCase(),
            attributes: oB(QB)
          }), QB)) : zB = new kz(QB, Fz))
        }
        return {
          line: zB,
          marks: jB
        }
      }
    }

    function Dz(BB, jB) {
      let zB = BB => {
        for (let QB of BB.children)
          if ((jB ? QB.isText() : QB.length) || zB(QB)) return !0;
        return !1
      };
      return zB(BB)
    }
    const Fz = {
      class: "cm-line"
    };

    function Yz(BB) {
      let jB = rz.get(BB);
      return jB && jB.setDOM(BB.cloneNode()), BB
    }
    class Vz extends HB {
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
    Vz.inline = new Vz("span"), Vz.block = new Vz("div");
    const hz = new class extends HB {
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
    class Xz {
      constructor(BB) {
        this.view = BB, this.pQ = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = FB.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new mz(BB, BB.contentDOM), this.updateInner([new Uz(0, 0, 0, BB.state.doc.length)], null)
      }
      update(BB) {
        var jB;
        let zB = BB.changedRanges;
        this.minWidth > 0 && zB.length && (zB.every((BB => {
          let {
            fromA: jB,
            toA: zB
          } = BB;
          return zB < this.minWidthFrom || jB > this.minWidthTo
        })) ? (this.minWidthFrom = BB.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = BB.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(BB);
        let nB = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (jB = this.domChanged) || void 0 === jB ? void 0 : jB.newSel) ? nB = this.domChanged.newSel.head : function(BB, jB) {
          let zB = !1;
          jB && BB.iterChangedRanges(((BB, QB) => {
            BB < jB.to && QB > jB.from && (zB = !0)
          }));
          return zB
        }(BB.changes, this.hasComposition) || BB.selectionSet || (nB = BB.state.selection.main.head));
        let dB = nB > -1 ? function(BB, jB, zB) {
          let QB = Az(BB, zB);
          if (!QB) return null;
          let {
            node: nB,
            from: dB,
            to: IB
          } = QB, NB = nB.nodeValue;
          if (/[\n\r]/.test(NB)) return null;
          if (BB.state.doc.sliceString(QB.from, QB.to) != NB) return null;
          let uB = jB.invertedDesc;
          return {
            range: new Uz(uB.mapPos(dB), uB.mapPos(IB), dB, IB),
            text: nB
          }
        }(this.view, BB.changes, nB) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: jB,
            to: QB
          } = this.hasComposition;
          zB = new Uz(jB, QB, BB.changes.mapPos(jB, -1), BB.changes.mapPos(QB, 1)).addToSet(zB.slice())
        }
        this.hasComposition = dB ? {
          from: dB.range.fromB,
          to: dB.range.toB
        } : null, (MB.ie || MB.chrome) && !dB && BB && BB.state.doc.lines != BB.startState.doc.lines && (this.forceSelection = !0);
        let IB = this.pQ,
          NB = this.blockWrappers;
        this.updateDeco();
        let uB = function(BB, jB, zB) {
          let nB = new Tz;
          return QB.z.compare(BB, jB, zB, nB), nB.changes
        }(IB, this.pQ, BB.changes);
        uB.length && (zB = Uz.extendWithRanges(zB, uB));
        let UB = function(BB, jB, zB) {
          let nB = new Pz;
          return QB.z.compare(BB, jB, zB, nB), nB.changes
        }(NB, this.blockWrappers, BB.changes);
        return UB.length && (zB = Uz.extendWithRanges(zB, UB)), dB && !zB.some((BB => BB.fromA <= dB.range.fromA && BB.toA >= dB.range.toA)) && (zB = dB.range.addToSet(zB.slice())), !(2 & this.tile.flags && 0 == zB.length) && (this.updateInner(zB, dB), BB.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(BB, jB) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: zB
        } = this.view;
        zB.ignore((() => {
          if (jB || BB.length) {
            let zB = this.tile,
              QB = new Hz(this.view, zB, this.blockWrappers, this.pQ, this.dynamicDecorationMap);
            jB && rz.get(jB.text) && QB.cache.reused.set(rz.get(jB.text), 2), this.tile = QB.run(BB, jB), Zz(zB, QB.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let QB = MB.chrome || MB.ios ? {
            node: zB.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(QB), !QB || !QB.written && zB.selectionRange.focusNode == QB.node && this.tile.dom.contains(QB.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let QB = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let nB of this.tile.children) nB.isWidget() && nB.widget instanceof Wz && QB.push(nB.dom);
        zB.updateGaps(QB)
      }
      updateEditContextFormatting(BB) {
        this.editContextFormatting = this.editContextFormatting.map(BB.changes);
        for (let jB of BB.transactions)
          for (let BB of jB.effects) BB.is(wj) && (this.editContextFormatting = BB.value)
      }
      updateSelection() {
        let BB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: jB
        } = this.tile, zB = this.view.root.activeElement, QB = zB == jB, nB = !QB && !(this.view.state.facet(Kj) || jB.tabIndex > -1) && WB(jB, this.view.observer.selectionRange) && !(zB && jB.contains(zB));
        if (!(QB || BB || nB)) return;
        let dB = this.forceSelection;
        this.forceSelection = !1;
        let IB, NB, uB = this.view.state.selection.main;
        if (uB.empty ? NB = IB = this.inlineDOMNearPos(uB.anchor, uB.assoc || 1) : (NB = this.inlineDOMNearPos(uB.head, uB.head == uB.from ? 1 : -1), IB = this.inlineDOMNearPos(uB.anchor, uB.anchor == uB.from ? 1 : -1)), MB.gecko && uB.empty && !this.hasComposition && (1 == (UB = IB).node.nodeType && UB.node.firstChild && (0 == UB.offset || "false" == UB.node.childNodes[UB.offset - 1].contentEditable) && (UB.offset == UB.node.childNodes.length || "false" == UB.node.childNodes[UB.offset].contentEditable))) {
          let BB = document.createTextNode("");
          this.view.observer.ignore((() => IB.node.insertBefore(BB, IB.node.childNodes[IB.offset] || null))), IB = NB = new uj(BB, 0), dB = !0
        }
        var UB;
        let aB = this.view.observer.selectionRange;
        !dB && aB.focusNode && (lB(IB.node, IB.offset, aB.anchorNode, aB.anchorOffset) && lB(NB.node, NB.offset, aB.focusNode, aB.focusOffset) || this.suppressWidgetCursorChange(aB, uB)) || (this.view.observer.ignore((() => {
          MB.android && MB.chrome && jB.contains(aB.focusNode) && function(BB, jB) {
            for (let zB = BB; zB && zB != jB; zB = zB.assignedSlot || zB.parentNode)
              if (1 == zB.nodeType && "false" == zB.contentEditable) return !0;
            return !1
          }(aB.focusNode, jB) && (jB.blur(), jB.focus({
            preventScroll: !0
          }));
          let BB = TB(this.view.root);
          if (BB)
            if (uB.empty) {
              if (MB.gecko) {
                let BB = (QB = IB.node, dB = IB.offset, 1 != QB.nodeType ? 0 : (dB && "false" == QB.childNodes[dB - 1].contentEditable ? 1 : 0) | (dB < QB.childNodes.length && "false" == QB.childNodes[dB].contentEditable ? 2 : 0));
                if (BB && 3 != BB) {
                  let jB = (1 == BB ? Ij : Nj)(IB.node, IB.offset);
                  jB && (IB = new uj(jB.node, jB.offset))
                }
              }
              BB.collapse(IB.node, IB.offset), null != uB.bidiLevel && void 0 !== BB.caretBidiLevel && (BB.caretBidiLevel = uB.bidiLevel)
            } else if (BB.extend) {
            BB.collapse(IB.node, IB.offset);
            try {
              BB.extend(NB.node, NB.offset)
            } catch (UB) {}
          } else {
            let jB = document.createRange();
            uB.anchor > uB.head && ([IB, NB] = [NB, IB]), jB.setEnd(NB.node, NB.offset), jB.setStart(IB.node, IB.offset), BB.removeAllRanges(), BB.addRange(jB)
          } else;
          var QB, dB;
          nB && this.view.root.activeElement == jB && (jB.blur(), zB && zB.focus())
        })), this.view.observer.setSelectionRange(IB, NB)), this.impreciseAnchor = IB.precise ? null : new uj(aB.anchorNode, aB.anchorOffset), this.impreciseHead = NB.precise ? null : new uj(aB.focusNode, aB.focusOffset)
      }
      suppressWidgetCursorChange(BB, jB) {
        return this.hasComposition && jB.empty && lB(BB.focusNode, BB.focusOffset, BB.anchorNode, BB.anchorOffset) && this.posFromDOM(BB.focusNode, BB.focusOffset) == jB.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: BB
        } = this, jB = BB.state.selection.main, zB = TB(BB.root), {
          anchorNode: QB,
          anchorOffset: nB
        } = BB.observer.selectionRange;
        if (!zB || !jB.empty || !jB.assoc || !zB.modify) return;
        let dB = this.lineAt(jB.head, jB.assoc);
        if (!dB) return;
        let IB = dB.posAtStart;
        if (jB.head == IB || jB.head == IB + dB.length) return;
        let NB = this.coordsAt(jB.head, -1),
          uB = this.coordsAt(jB.head, 1);
        if (!NB || !uB || NB.bottom > uB.top) return;
        let UB = this.domAtPos(jB.head + jB.assoc, jB.assoc);
        zB.collapse(UB.node, UB.offset), zB.modify("move", jB.assoc < 0 ? "forward" : "backward", "lineboundary"), BB.observer.readSelectionRange();
        let aB = BB.observer.selectionRange;
        BB.docView.posFromDOM(aB.anchorNode, aB.anchorOffset) != jB.from && zB.collapse(QB, nB)
      }
      posFromDOM(BB, jB) {
        let zB = this.tile.nearest(BB);
        if (!zB) return 2 & this.tile.dom.compareDocumentPosition(BB) ? 0 : this.view.state.doc.length;
        let QB = zB.posAtStart;
        if (!zB.isComposite()) return zB.isText() ? BB == zB.dom ? QB + jB : QB + (jB ? zB.length : 0) : QB;
        {
          let nB;
          if (BB == zB.dom) nB = zB.dom.childNodes[jB];
          else {
            let QB = 0 == CB(BB) ? 0 : 0 == jB ? -1 : 1;
            for (;;) {
              let jB = BB.parentNode;
              if (jB == zB.dom) break;
              0 == QB && jB.firstChild != jB.lastChild && (QB = BB == jB.firstChild ? -1 : 1), BB = jB
            }
            nB = QB < 0 ? BB : BB.nextSibling
          }
          if (nB == zB.dom.firstChild) return QB;
          for (; nB && !rz.get(nB);) nB = nB.nextSibling;
          if (!nB) return QB + zB.length;
          for (let BB = 0, jB = QB;; BB++) {
            let QB = zB.children[BB];
            if (QB.dom == nB) return jB;
            jB += QB.length + QB.breakAfter
          }
        }
      }
      domAtPos(BB, jB) {
        let {
          tile: zB,
          offset: QB
        } = this.tile.resolveBlock(BB, jB);
        return zB.isWidget() ? zB.domPosFor(BB, jB) : zB.domIn(QB, jB)
      }
      inlineDOMNearPos(BB, jB) {
        let zB, QB, nB = -1,
          dB = !1,
          IB = -1,
          NB = !1;
        return this.tile.blockTiles(((jB, uB) => {
          if (jB.isWidget()) {
            if (32 & jB.flags && uB >= BB) return !0;
            16 & jB.flags && (dB = !0)
          } else {
            let UB = uB + jB.length;
            if (uB <= BB && (zB = jB, nB = BB - uB, dB = UB < BB), UB >= BB && !QB && (QB = jB, IB = BB - uB, NB = uB > BB), uB > BB && QB) return !0
          }
        })), zB || QB ? (dB && QB ? zB = null : NB && zB && (QB = null), zB && jB < 0 || !QB ? zB.domIn(nB, jB) : QB.domIn(IB, jB)) : this.domAtPos(BB, jB)
      }
      coordsAt(BB, jB) {
        let {
          tile: zB,
          offset: QB
        } = this.tile.resolveBlock(BB, jB);
        return zB.isWidget() ? zB.widget instanceof Wz ? null : zB.coordsInWidget(QB, jB, !0) : zB.coordsIn(QB, jB)
      }
      lineAt(BB, jB) {
        let {
          tile: zB
        } = this.tile.resolveBlock(BB, jB);
        return zB.isLine() ? zB : null
      }
      coordsForChar(BB) {
        let {
          tile: jB,
          offset: zB
        } = this.tile.resolveBlock(BB, 1);
        if (!jB.isLine()) return null;
        return function BB(jB, zB) {
          if (jB.isComposite())
            for (let QB of jB.children) {
              if (QB.length >= zB) {
                let jB = BB(QB, zB);
                if (jB) return jB
              }
              if ((zB -= QB.length) < 0) break
            } else if (jB.isText() && zB < jB.length) {
              let BB = (0, QB.R)(jB.text, zB);
              if (BB == zB) return null;
              let nB = Qj(jB.dom, zB, BB).getClientRects();
              for (let jB = 0; jB < nB.length; jB++) {
                let BB = nB[jB];
                if (jB == nB.length - 1 || BB.top < BB.bottom && BB.left < BB.right) return BB
              }
            } return null
        }(jB, zB)
      }
      measureVisibleLineHeights(BB) {
        let jB = [],
          {
            from: zB,
            to: QB
          } = BB,
          nB = this.view.contentDOM.clientWidth,
          dB = nB > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          IB = -1,
          NB = this.view.textDirection == Uj.LTR,
          uB = 0,
          UB = (BB, aB, pB) => {
            for (let rB = 0; rB < BB.children.length && !(aB > QB); rB++) {
              let QB = BB.children[rB],
                sB = aB + QB.length,
                JB = QB.dom.getBoundingClientRect(),
                {
                  height: mB
                } = JB;
              if (pB && !rB && (uB += JB.top - pB.top), QB instanceof yz) sB > zB && UB(QB, aB, JB);
              else if (aB >= zB && (uB > 0 && jB.push(-uB), jB.push(mB + uB), uB = 0, dB)) {
                let BB = QB.dom.lastChild,
                  jB = BB ? eB(BB) : [];
                if (jB.length) {
                  let BB = jB[jB.length - 1],
                    zB = NB ? BB.right - JB.left : JB.right - BB.left;
                  zB > IB && (IB = zB, this.minWidth = nB, this.minWidthFrom = aB, this.minWidthTo = sB)
                }
              }
              pB && rB == BB.children.length - 1 && (uB += pB.bottom - JB.bottom), aB = sB + QB.breakAfter
            }
          };
        return UB(this.tile, 0, null), jB
      }
      textDirectionAt(BB) {
        let {
          tile: jB
        } = this.tile.resolveBlock(BB, 1);
        return "rtl" == getComputedStyle(jB.dom).direction ? Uj.RTL : Uj.LTR
      }
      measureTextSize() {
        let BB = this.tile.blockTiles((BB => {
          if (BB.isLine() && BB.children.length && BB.length <= 20) {
            let jB, zB = 0;
            for (let QB of BB.children) {
              if (!QB.isText() || /[^ -~]/.test(QB.text)) return;
              let BB = eB(QB.dom);
              if (1 != BB.length) return;
              zB += BB[0].width, jB = BB[0].height
            }
            if (zB) return {
              lineHeight: BB.dom.getBoundingClientRect().height,
              charWidth: zB / BB.length,
              textHeight: jB
            }
          }
        }));
        if (BB) return BB;
        let jB, zB, QB, nB = document.createElement("div");
        return nB.className = "cm-line", nB.style.width = "99999px", nB.style.position = "absolute", nB.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(nB);
          let BB = eB(nB.firstChild)[0];
          jB = nB.getBoundingClientRect().height, zB = BB && BB.width ? BB.width / 27 : 7, QB = BB && BB.height ? BB.height : jB, nB.remove()
        })), {
          lineHeight: jB,
          charWidth: zB,
          textHeight: QB
        }
      }
      computeBlockGapDeco() {
        let BB = [],
          jB = this.view.viewState;
        for (let zB = 0, QB = 0;; QB++) {
          let nB = QB == jB.viewports.length ? null : jB.viewports[QB],
            dB = nB ? nB.from - 1 : this.view.state.doc.length;
          if (dB > zB) {
            let QB = (jB.lineBlockAt(dB).bottom - jB.lineBlockAt(zB).top) / this.view.scaleY;
            BB.push(FB.replace({
              widget: new Wz(QB),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(zB, dB))
          }
          if (!nB) break;
          zB = nB.to + 1
        }
        return FB.set(BB)
      }
      updateDeco() {
        let BB = 1,
          jB = this.view.state.facet(Bz).map((jB => (this.dynamicDecorationMap[BB++] = "function" == typeof jB) ? jB(this.view) : jB)),
          zB = !1,
          nB = this.view.state.facet(zz).map(((BB, jB) => {
            let QB = "function" == typeof BB;
            return QB && (zB = !0), QB ? BB(this.view) : BB
          }));
        for (nB.length && (this.dynamicDecorationMap[BB++] = zB, jB.push(QB.z.join(nB))), this.pQ = [this.editContextFormatting, ...jB, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; BB < this.pQ.length;) this.dynamicDecorationMap[BB++] = !1;
        this.blockWrappers = this.view.state.facet(jz).map((BB => "function" == typeof BB ? BB(this.view) : BB))
      }
      scrollIntoView(BB) {
        var jB;
        if (BB.isSnapshot) {
          let jB = this.view.viewState.lineBlockAt(BB.range.head);
          return this.view.scrollDOM.scrollTop = jB.top - BB.yMargin, void(this.view.scrollDOM.scrollLeft = BB.xMargin)
        }
        for (let aB of this.view.state.facet(Wj)) try {
          if (aB(this.view, BB.range, BB)) return !0
        } catch (UB) {
          xj(this.view.state, UB, "scroll handler")
        }
        let zB, {
            range: QB
          } = BB,
          nB = this.coordsAt(QB.head, null !== (jB = QB.assoc) && void 0 !== jB ? jB : QB.empty ? 0 : QB.head > QB.anchor ? -1 : 1);
        if (!nB) return;
        !QB.empty && (zB = this.coordsAt(QB.anchor, QB.anchor > QB.head ? -1 : 1)) && (nB = {
          left: Math.min(nB.left, zB.left),
          top: Math.min(nB.top, zB.top),
          right: Math.max(nB.right, zB.right),
          bottom: Math.max(nB.bottom, zB.bottom)
        });
        let dB = Nz(this.view),
          IB = {
            left: nB.left - dB.left,
            top: nB.top - dB.top,
            right: nB.right + dB.right,
            bottom: nB.bottom + dB.bottom
          },
          {
            offsetWidth: NB,
            offsetHeight: uB
          } = this.view.scrollDOM;
        if (function(BB, jB, zB, QB, nB, dB, IB, NB) {
            let uB = BB.ownerDocument,
              UB = uB.defaultView || window;
            for (let aB = BB, pB = !1; aB && !pB;)
              if (1 == aB.nodeType) {
                let BB, rB = aB == uB.body,
                  sB = 1,
                  JB = 1;
                if (rB) BB = bB(UB);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(aB).position) && (pB = !0), aB.scrollHeight <= aB.clientHeight && aB.scrollWidth <= aB.clientWidth) {
                    aB = aB.assignedSlot || aB.parentNode;
                    continue
                  }
                  let jB = aB.getBoundingClientRect();
                  ({
                    scaleX: sB,
                    scaleY: JB
                  } = vB(aB, jB)), BB = {
                    left: jB.left,
                    right: jB.left + aB.clientWidth * sB,
                    top: jB.top,
                    bottom: jB.top + aB.clientHeight * JB
                  }
                }
                let mB = 0,
                  yB = 0;
                if ("nearest" == nB) jB.top < BB.top + IB ? (yB = jB.top - (BB.top + IB), zB > 0 && jB.bottom > BB.bottom + yB && (yB = jB.bottom - BB.bottom + IB)) : jB.bottom > BB.bottom - IB && (yB = jB.bottom - BB.bottom + IB, zB < 0 && jB.top - yB < BB.top && (yB = jB.top - (BB.top + IB)));
                else {
                  let QB = jB.bottom - jB.top,
                    dB = BB.bottom - BB.top;
                  yB = ("center" == nB && QB <= dB ? jB.top + QB / 2 - dB / 2 : "start" == nB || "center" == nB && zB < 0 ? jB.top - IB : jB.bottom - dB + IB) - BB.top
                }
                if ("nearest" == QB ? jB.left < BB.left + dB ? (mB = jB.left - (BB.left + dB), zB > 0 && jB.right > BB.right + mB && (mB = jB.right - BB.right + dB)) : jB.right > BB.right - dB && (mB = jB.right - BB.right + dB, zB < 0 && jB.left < BB.left + mB && (mB = jB.left - (BB.left + dB))) : mB = ("center" == QB ? jB.left + (jB.right - jB.left) / 2 - (BB.right - BB.left) / 2 : "start" == QB == NB ? jB.left - dB : jB.right - (BB.right - BB.left) + dB) - BB.left, mB || yB)
                  if (rB) UB.scrollBy(mB, yB);
                  else {
                    let BB = 0,
                      zB = 0;
                    if (yB) {
                      let BB = aB.scrollTop;
                      aB.scrollTop += yB / JB, zB = (aB.scrollTop - BB) * JB
                    }
                    if (mB) {
                      let jB = aB.scrollLeft;
                      aB.scrollLeft += mB / sB, BB = (aB.scrollLeft - jB) * sB
                    }
                    jB = {
                      left: jB.left - BB,
                      top: jB.top - zB,
                      right: jB.right - BB,
                      bottom: jB.bottom - zB
                    }, BB && Math.abs(BB - mB) < 1 && (QB = "nearest"), zB && Math.abs(zB - yB) < 1 && (nB = "nearest")
                  } if (rB) break;
                (jB.top < BB.top || jB.bottom > BB.bottom || jB.left < BB.left || jB.right > BB.right) && (jB = {
                  left: Math.max(jB.left, BB.left),
                  right: Math.min(jB.right, BB.right),
                  top: Math.max(jB.top, BB.top),
                  bottom: Math.min(jB.bottom, BB.bottom)
                }), aB = aB.assignedSlot || aB.parentNode
              } else {
                if (11 != aB.nodeType) break;
                aB = aB.host
              }
          }(this.view.scrollDOM, IB, QB.head < QB.anchor ? -1 : 1, BB.x, BB.y, Math.max(Math.min(BB.xMargin, NB), -NB), Math.max(Math.min(BB.yMargin, uB), -uB), this.view.textDirection == Uj.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (nB.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || nB.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let BB = this.view.docView.lineAt(QB.head, 1);
          BB && BB.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(BB) {
        let jB = BB => BB.isWidget() || BB.children.some(jB);
        return jB(this.tile.resolveBlock(BB, 1).tile)
      }
      destroy() {
        Zz(this.tile)
      }
    }

    function Zz(BB, jB) {
      let zB = null === jB || void 0 === jB ? void 0 : jB.get(BB);
      if (1 != zB) {
        null == zB && BB.destroy();
        for (let zB of BB.children) Zz(zB, jB)
      }
    }

    function Az(BB, jB) {
      let zB = BB.observer.selectionRange;
      if (!zB.focusNode) return null;
      let QB = Ij(zB.focusNode, zB.focusOffset),
        nB = Nj(zB.focusNode, zB.focusOffset),
        dB = QB || nB;
      if (nB && QB && nB.node != QB.node) {
        let jB = rz.get(nB.node);
        if (!jB || jB.isText() && jB.text != nB.node.nodeValue) dB = nB;
        else if (BB.docView.lastCompositionAfterCursor) {
          let BB = rz.get(QB.node);
          !BB || BB.isText() && BB.text != QB.node.nodeValue || (dB = nB)
        }
      }
      if (BB.docView.lastCompositionAfterCursor = dB != QB, !dB) return null;
      let IB = jB - dB.offset;
      return {
        from: IB,
        to: IB + dB.node.nodeValue.length,
        node: dB.node
      }
    }
    let Tz = class {
      constructor() {
        this.changes = []
      }
      compareRange(BB, jB) {
        ZB(BB, jB, this.changes)
      }
      comparePoint(BB, jB) {
        ZB(BB, jB, this.changes)
      }
      boundChange(BB) {
        ZB(BB, BB, this.changes)
      }
    };
    class Pz {
      constructor() {
        this.changes = []
      }
      compareRange(BB, jB) {
        ZB(BB, jB, this.changes)
      }
      comparePoint() {}
      boundChange(BB) {
        ZB(BB, BB, this.changes)
      }
    }
    class Wz extends HB {
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

    function ez(BB, jB, zB) {
      let QB = BB.lineBlockAt(jB);
      if (Array.isArray(QB.type)) {
        let BB;
        for (let nB of QB.type) {
          if (nB.from > jB) break;
          if (!(nB.to < jB)) {
            if (nB.from < jB && nB.to > jB) return nB;
            BB && (nB.type != DB.Text || BB.type == nB.type && !(zB < 0 ? nB.from < jB : nB.to > jB)) || (BB = nB)
          }
        }
        return BB || QB
      }
      return QB
    }

    function lz(BB, jB, zB, QB) {
      let nB = BB.state.doc.lineAt(jB.head),
        dB = BB.bidiSpans(nB),
        IB = BB.textDirectionAt(nB.from);
      for (let NB = jB, uB = null;;) {
        let jB = fj(nB, dB, IB, NB, zB),
          UB = qj;
        if (!jB) {
          if (nB.number == (zB ? BB.state.doc.lines : 1)) return NB;
          UB = "\n", nB = BB.state.doc.line(nB.number + (zB ? 1 : -1)), dB = BB.bidiSpans(nB), jB = BB.visualLineSide(nB, !zB)
        }
        if (uB) {
          if (!uB(UB)) return NB
        } else {
          if (!QB) return jB;
          uB = QB(UB)
        }
        NB = jB
      }
    }

    function wz(BB, jB, zB) {
      for (;;) {
        let QB = 0;
        for (let nB of BB) nB.between(jB - 1, jB + 1, ((BB, nB, dB) => {
          if (jB > BB && jB < nB) {
            let dB = QB || zB || (jB - BB < nB - jB ? -1 : 1);
            jB = dB < 0 ? BB : nB, QB = dB
          }
        }));
        if (!QB) return jB
      }
    }

    function xz(BB, jB) {
      let zB = null;
      for (let nB = 0; nB < jB.gy.length; nB++) {
        let dB = jB.gy[nB],
          IB = null;
        if (dB.empty) {
          let jB = wz(BB, dB.from, 0);
          jB != dB.from && (IB = QB.i.cursor(jB, -1))
        } else {
          let jB = wz(BB, dB.from, -1),
            zB = wz(BB, dB.to, 1);
          jB == dB.from && zB == dB.to || (IB = QB.i.range(dB.from == dB.anchor ? jB : zB, dB.from == dB.head ? jB : zB))
        }
        IB && (zB || (zB = jB.gy.slice()), zB[nB] = IB)
      }
      return zB ? QB.i.create(zB, jB.mainIndex) : jB
    }

    function Kz(BB, jB, zB) {
      let nB = wz(BB.state.facet(Qz).map((jB => jB(BB))), zB.from, jB.head > zB.from ? -1 : 1);
      return nB == zB.from ? zB : QB.i.cursor(nB, nB < zB.from ? 1 : -1)
    }
    class Cz {
      constructor(BB, jB) {
        this.pos = BB, this.assoc = jB
      }
    }

    function cz(BB, jB, zB, nB) {
      let dB, IB = BB.contentDOM.getBoundingClientRect(),
        NB = IB.top + BB.viewState.paddingTop,
        {
          x: uB,
          y: UB
        } = jB,
        aB = UB - NB;
      for (;;) {
        if (aB < 0) return new Cz(0, 1);
        if (aB > BB.viewState.docHeight) return new Cz(BB.state.doc.length, -1);
        if (dB = BB.elementAtHeight(aB), null == nB) break;
        if (dB.type == DB.Text) {
          if (nB < 0 ? dB.to < BB.viewport.from : dB.from > BB.viewport.to) break;
          let jB = BB.docView.coordsAt(nB < 0 ? dB.from : dB.to, nB > 0 ? -1 : 1);
          if (jB && (nB < 0 ? jB.top <= aB + NB : jB.bottom >= aB + NB)) break
        }
        let jB = BB.viewState.heightOracle.textHeight / 2;
        aB = nB > 0 ? dB.bottom + jB : dB.top - jB
      }
      if (BB.viewport.from >= dB.to || BB.viewport.to <= dB.from) {
        if (zB) return null;
        if (dB.type == DB.Text) {
          let jB = function(BB, jB, zB, nB, dB) {
            let IB = Math.round((nB - jB.left) * BB.defaultCharacterWidth);
            if (BB.lineWrapping && zB.height > 1.5 * BB.defaultLineHeight) {
              let jB = BB.viewState.heightOracle.textHeight;
              IB += Math.floor((dB - zB.top - .5 * (BB.defaultLineHeight - jB)) / jB) * BB.viewState.heightOracle.lineLength
            }
            let NB = BB.state.sliceDoc(zB.from, zB.to);
            return zB.from + (0, QB.V)(NB, IB, BB.state.tabSize)
          }(BB, IB, dB, uB, UB);
          return new Cz(jB, jB == dB.from ? 1 : -1)
        }
      }
      if (dB.type != DB.Text) return aB < (dB.top + dB.bottom) / 2 ? new Cz(dB.from, 1) : new Cz(dB.to, -1);
      let pB = BB.docView.lineAt(dB.from, 2);
      return pB && pB.length == dB.length || (pB = BB.docView.lineAt(dB.from, -2)), new bz(BB, uB, UB, BB.textDirectionAt(dB.from)).scanTile(pB, dB.from)
    }
    class bz {
      constructor(BB, jB, zB, QB) {
        this.view = BB, this.x = jB, this.y = zB, this.baseDir = QB, this.line = null, this.spans = null
      }
      bidiSpansAt(BB) {
        return (!this.line || this.line.from > BB || this.line.to < BB) && (this.line = this.view.state.doc.lineAt(BB), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(BB, jB) {
        let {
          line: zB,
          spans: QB
        } = this.bidiSpansAt(BB);
        return QB[Lj.find(QB, BB - zB.from, -1, jB)].level == this.baseDir
      }
      dirAt(BB, jB) {
        let {
          line: zB,
          spans: QB
        } = this.bidiSpansAt(BB);
        return QB[Lj.find(QB, BB - zB.from, -1, jB)].dir
      }
      bidiIn(BB, jB) {
        let {
          spans: zB,
          line: QB
        } = this.bidiSpansAt(BB);
        return zB.length > 1 || zB.length && (zB[0].level != this.baseDir || zB[0].to + QB.from < jB)
      }
      scan(BB, jB) {
        let zB, QB, nB, dB = 0,
          IB = BB.length - 1,
          NB = new Set,
          uB = this.bidiIn(BB[0], BB[IB]),
          UB = -1,
          aB = 1e9;
        BB: for (; dB < IB;) {
          let pB = IB - dB,
            rB = dB + IB >> 1;
          jB: if (NB.has(rB)) {
            let BB = dB + Math.floor(Math.random() * pB);
            for (let jB = 0; jB < pB; jB++) {
              if (!NB.has(BB)) {
                rB = BB;
                break jB
              }
              BB++, BB == IB && (BB = dB)
            }
            break BB
          } NB.add(rB);
          let sB = jB(rB);
          if (sB)
            for (let jB = 0; jB < sB.length; jB++) {
              let NB = sB[jB],
                pB = 0;
              if (!(0 == NB.width && sB.length > 1)) {
                if (NB.bottom < this.y)(!zB || zB.bottom < NB.bottom) && (zB = NB), pB = 1;
                else if (NB.top > this.y)(!QB || QB.top > NB.top) && (QB = NB), pB = -1;
                else {
                  let BB = NB.left > this.x ? this.x - NB.left : NB.right < this.x ? this.x - NB.right : 0,
                    jB = Math.abs(BB);
                  jB < aB && (UB = rB, aB = jB, nB = NB), BB && (pB = BB < 0 == (this.baseDir == Uj.LTR) ? -1 : 1)
                } - 1 != pB || uB && !this.baseDirAt(BB[rB], 1) ? 1 != pB || uB && !this.baseDirAt(BB[rB + 1], -1) || (dB = rB + 1) : IB = rB
              }
            }
        }
        if (!nB) {
          let nB = zB && (!QB || this.y - zB.bottom < QB.top - this.y) ? zB : QB;
          return this.y = (nB.top + nB.bottom) / 2, this.scan(BB, jB)
        }
        if (aB) {
          if (zB && zB.bottom > nB.top) return this.y = zB.bottom - 1, this.scan(BB, jB);
          if (QB && QB.top < nB.bottom) return this.y = QB.top + 1, this.scan(BB, jB)
        }
        let pB = (uB ? this.dirAt(BB[UB], 1) : this.baseDir) == Uj.LTR;
        return {
          i: UB,
          after: this.x > (nB.left + nB.right) / 2 == pB
        }
      }
      scanText(BB, jB) {
        let zB = [];
        for (let dB = 0; dB < BB.length; dB = (0, QB.R)(BB.text, dB)) zB.push(jB + dB);
        zB.push(jB + BB.length);
        let nB = this.scan(zB, (QB => {
          let nB = zB[QB] - jB,
            dB = zB[QB + 1] - jB;
          return Qj(BB.dom, nB, dB).getClientRects()
        }));
        return nB.after ? new Cz(zB[nB.i + 1], -1) : new Cz(zB[nB.i], 1)
      }
      scanTile(BB, jB) {
        if (!BB.length) return new Cz(jB, 1);
        if (1 == BB.children.length) {
          let zB = BB.children[0];
          if (zB.isText()) return this.scanText(zB, jB);
          if (zB.isComposite()) return this.scanTile(zB, jB)
        }
        let zB = [jB];
        for (let IB = 0, NB = jB; IB < BB.children.length; IB++) zB.push(NB += BB.children[IB].length);
        let QB = this.scan(zB, (jB => {
            let zB = BB.children[jB];
            return 48 & zB.flags ? null : (1 == zB.dom.nodeType ? zB.dom : Qj(zB.dom, 0, zB.length)).getClientRects()
          })),
          nB = BB.children[QB.i],
          dB = zB[QB.i];
        return nB.isText() ? this.scanText(nB, dB) : nB.isComposite() ? this.scanTile(nB, dB) : QB.after ? new Cz(zB[QB.i + 1], -1) : new Cz(dB, 1)
      }
    }
    const vz = "\uffff";
    class Rz {
      constructor(BB, jB) {
        this.points = BB, this.view = jB, this.text = "", this.lineSeparator = jB.state.facet(QB.l.lineSeparator)
      }
      append(BB) {
        this.text += BB
      }
      lineBreak() {
        this.text += vz
      }
      readRange(BB, jB) {
        if (!BB) return this;
        let zB = BB.parentNode;
        for (let QB = BB;;) {
          this.findPointBefore(zB, QB);
          let BB = this.text.length;
          this.readNode(QB);
          let nB = rz.get(QB),
            dB = QB.nextSibling;
          if (dB == jB) {
            (null === nB || void 0 === nB ? void 0 : nB.breakAfter) && !dB && zB != this.view.contentDOM && this.lineBreak();
            break
          }
          let IB = rz.get(dB);
          (nB && IB ? nB.breakAfter : (nB ? nB.breakAfter : xB(QB)) || xB(dB) && ("BR" != QB.nodeName || (null === nB || void 0 === nB ? void 0 : nB.isWidget())) && this.text.length > BB) && !BQ(dB, jB) && this.lineBreak(), QB = dB
        }
        return this.findPointBefore(zB, jB), this
      }
      readTextNode(BB) {
        let jB = BB.nodeValue;
        for (let zB of this.points) zB.node == BB && (zB.pos = this.text.length + Math.min(zB.offset, jB.length));
        for (let zB = 0, QB = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let nB, dB = -1,
            IB = 1;
          if (this.lineSeparator ? (dB = jB.indexOf(this.lineSeparator, zB), IB = this.lineSeparator.length) : (nB = QB.exec(jB)) && (dB = nB.index, IB = nB[0].length), this.append(jB.slice(zB, dB < 0 ? jB.length : dB)), dB < 0) break;
          if (this.lineBreak(), IB > 1)
            for (let jB of this.points) jB.node == BB && jB.pos > this.text.length && (jB.pos -= IB - 1);
          zB = dB + IB
        }
      }
      readNode(BB) {
        let jB = rz.get(BB),
          zB = jB && jB.overrideDOMText;
        if (null != zB) {
          this.findPointInside(BB, zB.length);
          for (let BB = zB.iter(); !BB.next().done;) BB.lineBreak ? this.lineBreak() : this.append(BB.value)
        } else 3 == BB.nodeType ? this.readTextNode(BB) : "BR" == BB.nodeName ? BB.nextSibling && this.lineBreak() : 1 == BB.nodeType && this.readRange(BB.firstChild, null)
      }
      findPointBefore(BB, jB) {
        for (let zB of this.points) zB.node == BB && BB.childNodes[zB.offset] == jB && (zB.pos = this.text.length)
      }
      findPointInside(BB, jB) {
        for (let zB of this.points)(3 == BB.nodeType ? zB.node == BB : BB.contains(zB.node)) && (zB.pos = this.text.length + (Oz(BB, zB.node, zB.offset) ? jB : 0))
      }
    }

    function Oz(BB, jB, zB) {
      for (;;) {
        if (!jB || zB < CB(jB)) return !1;
        if (jB == BB) return !0;
        zB = wB(jB) + 1, jB = jB.parentNode
      }
    }

    function BQ(BB, jB) {
      let zB;
      for (; BB != jB && BB; BB = BB.nextSibling) {
        let jB = rz.get(BB);
        if (!(null === jB || void 0 === jB ? void 0 : jB.isWidget())) return !1;
        jB && (zB || (zB = [])).push(jB)
      }
      if (zB)
        for (let QB of zB) {
          let BB = QB.overrideDOMText;
          if (null === BB || void 0 === BB ? void 0 : BB.length) return !1
        }
      return !0
    }
    class jQ {
      constructor(BB, jB) {
        this.node = BB, this.offset = jB, this.pos = -1
      }
    }
    class zQ {
      constructor(BB, jB, zB, nB) {
        this.typeOver = nB, this.bounds = null, this.text = "", this.domChanged = jB > -1;
        let {
          impreciseHead: dB,
          impreciseAnchor: IB
        } = BB.docView, NB = BB.state.selection;
        if (BB.state.readOnly && jB > -1) this.newSel = null;
        else if (jB > -1 && (this.bounds = QQ(BB.docView.tile, jB, zB, 0))) {
          let jB = dB || IB ? [] : function(BB) {
              let jB = [];
              if (BB.root.activeElement != BB.contentDOM) return jB;
              let {
                anchorNode: zB,
                anchorOffset: QB,
                focusNode: nB,
                focusOffset: dB
              } = BB.observer.selectionRange;
              zB && (jB.push(new jQ(zB, QB)), nB == zB && dB == QB || jB.push(new jQ(nB, dB)));
              return jB
            }(BB),
            zB = new Rz(jB, BB);
          zB.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = zB.text, this.newSel = function(BB, jB) {
            if (0 == BB.length) return null;
            let zB = BB[0].pos,
              nB = 2 == BB.length ? BB[1].pos : zB;
            return zB > -1 && nB > -1 ? QB.i.single(zB + jB, nB + jB) : null
          }(jB, this.bounds.from)
        } else {
          let jB = BB.observer.selectionRange,
            zB = dB && dB.node == jB.focusNode && dB.offset == jB.focusOffset || !PB(BB.contentDOM, jB.focusNode) ? NB.main.head : BB.docView.posFromDOM(jB.focusNode, jB.focusOffset),
            nB = IB && IB.node == jB.anchorNode && IB.offset == jB.anchorOffset || !PB(BB.contentDOM, jB.anchorNode) ? NB.main.anchor : BB.docView.posFromDOM(jB.anchorNode, jB.anchorOffset),
            uB = BB.viewport;
          if ((MB.ios || MB.chrome) && NB.main.empty && zB != nB && (uB.from > 0 || uB.to < BB.state.doc.length)) {
            let jB = Math.min(zB, nB),
              QB = Math.max(zB, nB),
              dB = uB.from - jB,
              IB = uB.to - QB;
            0 != dB && 1 != dB && 0 != jB || 0 != IB && -1 != IB && QB != BB.state.doc.length || (zB = 0, nB = BB.state.doc.length)
          }
          if (BB.inputState.composing > -1 && NB.gy.length > 1) this.newSel = NB.replaceRange(QB.i.range(nB, zB));
          else if (BB.lineWrapping && nB == zB && (!NB.main.empty || NB.main.head != zB) && BB.inputState.lastTouchTime > Date.now() - 100) {
            let jB = BB.coordsAtPos(zB, -1),
              nB = 0;
            jB && (nB = BB.inputState.lastTouchY <= jB.bottom ? -1 : 1), this.newSel = QB.i.create([QB.i.cursor(zB, nB)])
          } else this.newSel = QB.i.single(nB, zB)
        }
      }
    }

    function QQ(BB, jB, zB, QB) {
      if (BB.isComposite()) {
        let nB = -1,
          dB = -1,
          IB = -1,
          NB = -1;
        for (let uB = 0, UB = QB, aB = QB; uB < BB.children.length; uB++) {
          let QB = BB.children[uB],
            pB = UB + QB.length;
          if (UB < jB && pB > zB) return QQ(QB, jB, zB, UB);
          if (pB >= jB && -1 == nB && (nB = uB, dB = UB), UB > zB && QB.dom.parentNode == BB.dom) {
            IB = uB, NB = aB;
            break
          }
          aB = pB, UB = pB + QB.breakAfter
        }
        return {
          from: dB,
          to: NB < 0 ? QB + BB.length : NB,
          startDOM: (nB ? BB.children[nB - 1].dom.nextSibling : null) || BB.dom.firstChild,
          endDOM: IB < BB.children.length && IB >= 0 ? BB.children[IB].dom : null
        }
      }
      return BB.isText() ? {
        from: QB,
        to: QB + BB.length,
        startDOM: BB.dom,
        endDOM: BB.dom.nextSibling
      } : null
    }

    function nQ(BB, jB) {
      let zB, {
          newSel: nB
        } = jB,
        {
          state: dB
        } = BB,
        IB = dB.selection.main,
        NB = BB.inputState.lastKeyTime > Date.now() - 100 ? BB.inputState.lastKeyCode : -1;
      if (jB.bounds) {
        let {
          from: BB,
          to: nB
        } = jB.bounds, uB = IB.from, UB = null;
        (8 === NB || MB.android && jB.text.length < nB - BB) && (uB = IB.to, UB = "end");
        let aB, pB, rB = dB.doc.sliceString(BB, nB, vz);
        !IB.empty && IB.from >= BB && IB.to <= nB && (jB.typeOver || rB != jB.text) && rB.slice(0, IB.from - BB) == jB.text.slice(0, IB.from - BB) && rB.slice(IB.to - BB) == jB.text.slice(aB = jB.text.length - (rB.length - (IB.to - BB))) ? zB = {
          from: IB.from,
          to: IB.to,
          insert: QB.G.of(jB.text.slice(IB.from - BB, aB).split(vz))
        } : (pB = IQ(rB, jB.text, uB - BB, UB)) && (MB.chrome && 13 == NB && pB.toB == pB.from + 2 && jB.text.slice(pB.from, pB.toB) == vz + vz && pB.toB--, zB = {
          from: BB + pB.from,
          to: BB + pB.toA,
          insert: QB.G.of(jB.text.slice(pB.from, pB.toB).split(vz))
        })
      } else nB && (!BB.hasFocus && dB.facet(Kj) || NQ(nB, IB)) && (nB = null);
      if (!zB && !nB) return !1;
      if ((MB.mac || MB.android) && zB && zB.from == zB.to && zB.from == IB.head - 1 && /^\. ?$/.test(zB.insert.toString()) && "off" == BB.contentDOM.getAttribute("autocorrect") ? (nB && 2 == zB.insert.length && (nB = QB.i.single(nB.main.anchor - 1, nB.main.head - 1)), zB = {
          from: zB.from,
          to: zB.to,
          insert: QB.G.of([zB.insert.toString().replace(".", " ")])
        }) : dB.doc.lineAt(IB.from).to < IB.to && BB.docView.lineHasWidget(IB.to) && BB.inputState.insertingTextAt > Date.now() - 50 ? zB = {
          from: IB.from,
          to: IB.to,
          insert: dB.toText(BB.inputState.insertingText)
        } : MB.chrome && zB && zB.from == zB.to && zB.from == IB.head && "\n " == zB.insert.toString() && BB.lineWrapping && (nB && (nB = QB.i.single(nB.main.anchor - 1, nB.main.head - 1)), zB = {
          from: IB.from,
          to: IB.to,
          insert: QB.G.of([" "])
        }), zB) return dQ(BB, zB, nB, NB);
      if (nB && !NQ(nB, IB)) {
        let jB = !1,
          zB = "select";
        return BB.inputState.lastSelectionTime > Date.now() - 50 && ("select" == BB.inputState.lastSelectionOrigin && (jB = !0), zB = BB.inputState.lastSelectionOrigin, "select.pointer" == zB && (nB = xz(dB.facet(Qz).map((jB => jB(BB))), nB))), BB.dispatch({
          selection: nB,
          scrollIntoView: jB,
          userEvent: zB
        }), !0
      }
      return !1
    }

    function dQ(BB, jB, zB) {
      let nB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (MB.ios && BB.inputState.flushIOSKey(jB)) return !0;
      let dB = BB.state.selection.main;
      if (MB.android && (jB.to == dB.to && (jB.from == dB.from || jB.from == dB.from - 1 && " " == BB.state.sliceDoc(jB.from, dB.from)) && 1 == jB.insert.length && 2 == jB.insert.lines && nj(BB.contentDOM, "Enter", 13) || (jB.from == dB.from - 1 && jB.to == dB.to && 0 == jB.insert.length || 8 == nB && jB.insert.length < jB.to - jB.from && jB.to > dB.head) && nj(BB.contentDOM, "Backspace", 8) || jB.from == dB.from && jB.to == dB.to + 1 && 0 == jB.insert.length && nj(BB.contentDOM, "Delete", 46))) return !0;
      let IB, NB = jB.insert.toString();
      BB.inputState.composing >= 0 && BB.inputState.composing++;
      let uB = () => IB || (IB = function(BB, jB, zB) {
        let nB, dB = BB.state,
          IB = dB.selection.main,
          NB = -1;
        if (jB.from == jB.to && jB.from < IB.from || jB.from > IB.to) {
          let zB = jB.from < IB.from ? -1 : 1,
            QB = zB < 0 ? IB.from : IB.to,
            nB = wz(dB.facet(Qz).map((jB => jB(BB))), QB, zB);
          jB.from == nB && (NB = nB)
        }
        if (NB > -1) nB = {
          changes: jB,
          selection: QB.i.cursor(jB.from + jB.insert.length, -1)
        };
        else if (jB.from >= IB.from && jB.to <= IB.to && jB.to - jB.from >= (IB.to - IB.from) / 3 && (!zB || zB.main.empty && zB.main.from == jB.from + jB.insert.length) && BB.inputState.composing < 0) {
          let zB = IB.from < jB.from ? dB.sliceDoc(IB.from, jB.from) : "",
            QB = IB.to > jB.to ? dB.sliceDoc(jB.to, IB.to) : "";
          nB = dB.replaceSelection(BB.state.toText(zB + jB.insert.sliceString(0, void 0, BB.state.lineBreak) + QB))
        } else {
          let NB = dB.changes(jB),
            uB = zB && zB.main.to <= NB.newLength ? zB.main : void 0;
          if (dB.selection.gy.length > 1 && (BB.inputState.composing >= 0 || BB.inputState.compositionPendingChange) && jB.to <= IB.to + 10 && jB.to >= IB.to - 10) {
            let UB, aB = BB.state.sliceDoc(jB.from, jB.to),
              pB = zB && Az(BB, zB.main.head);
            if (pB) {
              let BB = jB.insert.length - (jB.to - jB.from);
              UB = {
                from: pB.from,
                to: pB.to - BB
              }
            } else UB = BB.state.doc.lineAt(IB.head);
            let rB = IB.to - jB.to;
            nB = dB.changeByRange((zB => {
              if (zB.from == IB.from && zB.to == IB.to) return {
                changes: NB,
                range: uB || zB.map(NB)
              };
              let nB = zB.to - rB,
                pB = nB - aB.length;
              if (BB.state.sliceDoc(pB, nB) != aB || nB >= UB.from && pB <= UB.to) return {
                range: zB
              };
              let sB = dB.changes({
                  from: pB,
                  to: nB,
                  insert: jB.insert
                }),
                JB = zB.to - IB.to;
              return {
                changes: sB,
                range: uB ? QB.i.range(Math.max(0, uB.anchor + JB), Math.max(0, uB.head + JB)) : zB.map(sB)
              }
            }))
          } else nB = {
            changes: NB,
            selection: uB && dB.selection.replaceRange(uB)
          }
        }
        let uB = "input.type";
        (BB.composing || BB.inputState.compositionPendingChange && BB.inputState.compositionEndedAt > Date.now() - 50) && (BB.inputState.compositionPendingChange = !1, uB += ".compose", BB.inputState.compositionFirstChange && (uB += ".start", BB.inputState.compositionFirstChange = !1));
        return dB.update(nB, {
          userEvent: uB,
          scrollIntoView: !0
        })
      }(BB, jB, zB));
      return BB.state.facet(hj).some((zB => zB(BB, jB.from, jB.to, NB, uB))) || BB.dispatch(uB()), !0
    }

    function IQ(BB, jB, zB, QB) {
      let nB = Math.min(BB.length, jB.length),
        dB = 0;
      for (; dB < nB && BB.charCodeAt(dB) == jB.charCodeAt(dB);) dB++;
      if (dB == nB && BB.length == jB.length) return null;
      let IB = BB.length,
        NB = jB.length;
      for (; IB > 0 && NB > 0 && BB.charCodeAt(IB - 1) == jB.charCodeAt(NB - 1);) IB--, NB--;
      if ("end" == QB) {
        zB -= IB + Math.max(0, dB - Math.min(IB, NB)) - dB
      }
      if (IB < dB && BB.length < jB.length) {
        dB -= zB <= dB && zB >= IB ? dB - zB : 0, NB = dB + (NB - IB), IB = dB
      } else if (NB < dB) {
        dB -= zB <= dB && zB >= NB ? dB - zB : 0, IB = dB + (IB - NB), NB = dB
      }
      return {
        from: dB,
        toA: IB,
        toB: NB
      }
    }

    function NQ(BB, jB) {
      return jB.head == BB.main.head && jB.anchor == BB.main.anchor
    }
    class uQ {
      setSelectionOrigin(BB) {
        this.lastSelectionOrigin = BB, this.lastSelectionTime = Date.now()
      }
      constructor(BB) {
        this.view = BB, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = BB.hasFocus, MB.safari && BB.contentDOM.addEventListener("input", (() => null)), MB.gecko && function(BB) {
          YQ.has(BB) || (YQ.add(BB), BB.addEventListener("copy", (() => {})), BB.addEventListener("cut", (() => {})))
        }(BB.contentDOM.ownerDocument)
      }
      handleEvent(BB) {
        (function(BB, jB) {
          if (!jB.bubbles) return !0;
          if (jB.defaultPrevented) return !1;
          for (let zB, QB = jB.target; QB != BB.contentDOM; QB = QB.parentNode)
            if (!QB || 11 == QB.nodeType || (zB = rz.get(QB)) && zB.isWidget() && !zB.isHidden && zB.widget.ignoreEvent(jB)) return !1;
          return !0
        })(this.view, BB) && !this.ignoreDuringComposition(BB) && ("keydown" == BB.type && this.keydown(BB) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(BB.type, BB))) : this.runHandlers(BB.type, BB)))
      }
      runHandlers(BB, jB) {
        let zB = this.handlers[BB];
        if (zB) {
          for (let BB of zB.observers) BB(this.view, jB);
          for (let BB of zB.handlers) {
            if (jB.defaultPrevented) break;
            if (BB(this.view, jB)) {
              jB.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(BB) {
        let jB = aQ(BB),
          zB = this.handlers,
          QB = this.view.contentDOM;
        for (let nB in jB)
          if ("scroll" != nB) {
            let BB = !jB[nB].handlers.length,
              dB = zB[nB];
            dB && BB != !dB.handlers.length && (QB.removeEventListener(nB, this.handleEvent), dB = null), dB || QB.addEventListener(nB, this.handleEvent, {
              passive: BB
            })
          } for (let nB in zB) "scroll" == nB || jB[nB] || QB.removeEventListener(nB, this.handleEvent);
        this.handlers = jB
      }
      keydown(BB) {
        if (this.lastKeyCode = BB.keyCode, this.lastKeyTime = Date.now(), 9 == BB.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != BB.keyCode && sQ.indexOf(BB.keyCode) < 0 && (this.tabFocusMode = -1), MB.android && MB.chrome && !BB.synthetic && (13 == BB.keyCode || 8 == BB.keyCode)) return this.view.observer.delayAndroidKey(BB.key, BB.keyCode), !0;
        let jB;
        return !MB.ios || BB.synthetic || BB.altKey || BB.metaKey || BB.shiftKey || !((jB = pQ.find((jB => jB.keyCode == BB.keyCode))) && !BB.ctrlKey || rQ.indexOf(BB.key) > -1 && BB.ctrlKey) ? (229 != BB.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = jB || BB, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(BB) {
        let jB = this.pendingIOSKey;
        return !!jB && (!("Enter" == jB.key && BB && BB.from < BB.to && /^\S+$/.test(BB.insert.toString())) && (this.pendingIOSKey = void 0, nj(this.view.contentDOM, jB.key, jB.keyCode, jB instanceof KeyboardEvent ? jB : void 0)))
      }
      ignoreDuringComposition(BB) {
        return !(!/^key/.test(BB.type) || BB.synthetic) && (this.composing > 0 || !!(MB.safari && !MB.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
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

    function UQ(BB, jB) {
      return (zB, QB) => {
        try {
          return jB.call(BB, QB, zB)
        } catch (nB) {
          xj(zB.state, nB)
        }
      }
    }

    function aQ(BB) {
      let jB = Object.create(null);

      function zB(BB) {
        return jB[BB] || (jB[BB] = {
          observers: [],
          handlers: []
        })
      }
      for (let QB of BB) {
        let BB = QB.spec,
          jB = BB && BB.plugin.domEventHandlers,
          nB = BB && BB.plugin.domEventObservers;
        if (jB)
          for (let dB in jB) {
            let BB = jB[dB];
            BB && zB(dB).handlers.push(UQ(QB.value, BB))
          }
        if (nB)
          for (let dB in nB) {
            let BB = nB[dB];
            BB && zB(dB).observers.push(UQ(QB.value, BB))
          }
      }
      for (let QB in yQ) zB(QB).handlers.push(yQ[QB]);
      for (let QB in kQ) zB(QB).observers.push(kQ[QB]);
      return jB
    }
    const pQ = [{
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
      rQ = "dthko",
      sQ = [16, 17, 18, 20, 91, 92, 224, 225];

    function JQ(BB) {
      return .7 * Math.max(0, BB) + 8
    }
    class mQ {
      constructor(BB, jB, zB, nB) {
        this.view = BB, this.startEvent = jB, this.style = zB, this.mustSelect = nB, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = jB, this.scrollParents = RB(BB.contentDOM), this.atoms = BB.state.facet(Qz).map((jB => jB(BB)));
        let dB = BB.contentDOM.ownerDocument;
        dB.addEventListener("mousemove", this.move = this.move.bind(this)), dB.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = jB.shiftKey, this.multiple = BB.state.facet(QB.l.allowMultipleSelections) && function(BB, jB) {
          let zB = BB.state.facet(Hj);
          return zB.length ? zB[0](jB) : MB.mac ? jB.metaKey : jB.ctrlKey
        }(BB, jB), this.dragging = !(! function(BB, jB) {
          let {
            main: zB
          } = BB.state.selection;
          if (zB.empty) return !1;
          let QB = TB(BB.root);
          if (!QB || 0 == QB.rangeCount) return !0;
          let nB = QB.getRangeAt(0).getClientRects();
          for (let dB = 0; dB < nB.length; dB++) {
            let BB = nB[dB];
            if (BB.left <= jB.clientX && BB.right >= jB.clientX && BB.top <= jB.clientY && BB.bottom >= jB.clientY) return !0
          }
          return !1
        }(BB, jB) || 1 != qQ(jB)) && null
      }
      start(BB) {
        !1 === this.dragging && this.select(BB)
      }
      move(BB) {
        if (0 == BB.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (jB = this.startEvent, zB = BB, Math.max(Math.abs(jB.clientX - zB.clientX), Math.abs(jB.clientY - zB.clientY)) < 10)) return;
        var jB, zB;
        this.select(this.lastEvent = BB);
        let QB = 0,
          nB = 0,
          dB = 0,
          IB = 0,
          NB = this.view.win.innerWidth,
          uB = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: dB,
          right: NB
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: IB,
          bottom: uB
        } = this.scrollParents.y.getBoundingClientRect());
        let UB = Nz(this.view);
        BB.clientX - UB.left <= dB + 6 ? QB = -JQ(dB - BB.clientX) : BB.clientX + UB.right >= NB - 6 && (QB = JQ(BB.clientX - NB)), BB.clientY - UB.top <= IB + 6 ? nB = -JQ(IB - BB.clientY) : BB.clientY + UB.bottom >= uB - 6 && (nB = JQ(BB.clientY - uB)), this.setScrollSpeed(QB, nB)
      }
      up(BB) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || BB.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let BB = this.view.contentDOM.ownerDocument;
        BB.removeEventListener("mousemove", this.move), BB.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(BB, jB) {
        this.scrollSpeed = {
          x: BB,
          y: jB
        }, BB || jB ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: BB,
          y: jB
        } = this.scrollSpeed;
        BB && this.scrollParents.x && (this.scrollParents.x.scrollLeft += BB, BB = 0), jB && this.scrollParents.y && (this.scrollParents.y.scrollTop += jB, jB = 0), (BB || jB) && this.view.win.scrollBy(BB, jB), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(BB) {
        let {
          view: jB
        } = this, zB = xz(this.atoms, this.style.get(BB, this.extend, this.multiple));
        !this.mustSelect && zB.eq(jB.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: zB,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(BB) {
        BB.transactions.some((BB => BB.isUserEvent("input.type"))) ? this.destroy() : this.style.update(BB) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const yQ = Object.create(null),
      kQ = Object.create(null),
      GQ = MB.ie && MB.ie_version < 15 || MB.ios && MB.webkit_version < 604;

    function LQ(BB, jB, zB) {
      for (let QB of BB.facet(jB)) zB = QB(zB, BB);
      return zB
    }

    function gQ(BB, jB) {
      jB = LQ(BB.state, Zj, jB);
      let zB, {
          state: nB
        } = BB,
        dB = 1,
        IB = nB.toText(jB),
        NB = IB.lines == nB.selection.gy.length;
      if (null != oQ && nB.selection.gy.every((BB => BB.empty)) && oQ == IB.toString()) {
        let BB = -1;
        zB = nB.changeByRange((zB => {
          let uB = nB.doc.lineAt(zB.from);
          if (uB.from == BB) return {
            range: zB
          };
          BB = uB.from;
          let UB = nB.toText((NB ? IB.line(dB++).text : jB) + nB.lineBreak);
          return {
            changes: {
              from: uB.from,
              insert: UB
            },
            range: QB.i.cursor(zB.from + UB.length)
          }
        }))
      } else zB = NB ? nB.changeByRange((BB => {
        let jB = IB.line(dB++);
        return {
          changes: {
            from: BB.from,
            to: BB.to,
            insert: jB.text
          },
          range: QB.i.cursor(BB.from + jB.length)
        }
      })) : nB.replaceSelection(IB);
      BB.dispatch(zB, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function tQ(BB, jB, zB, nB) {
      if (1 == nB) return QB.i.cursor(jB, zB);
      if (2 == nB) return function(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          nB = BB.charCategorizer(jB),
          dB = BB.doc.lineAt(jB),
          IB = jB - dB.from;
        if (0 == dB.length) return QB.i.cursor(jB);
        0 == IB ? zB = 1 : IB == dB.length && (zB = -1);
        let NB = IB,
          uB = IB;
        zB < 0 ? NB = (0, QB.R)(dB.text, IB, !1) : uB = (0, QB.R)(dB.text, IB);
        let UB = nB(dB.text.slice(NB, uB));
        for (; NB > 0;) {
          let BB = (0, QB.R)(dB.text, NB, !1);
          if (nB(dB.text.slice(BB, NB)) != UB) break;
          NB = BB
        }
        for (; uB < dB.length;) {
          let BB = (0, QB.R)(dB.text, uB);
          if (nB(dB.text.slice(uB, BB)) != UB) break;
          uB = BB
        }
        return QB.i.range(NB + dB.from, uB + dB.from)
      }(BB.state, jB, zB);
      {
        let nB = BB.docView.lineAt(jB, zB),
          dB = BB.state.doc.lineAt(nB ? nB.posAtEnd : jB),
          IB = nB ? nB.posAtStart : dB.from,
          NB = nB ? nB.posAtEnd : dB.to;
        return NB < BB.state.doc.length && NB == dB.to && NB++, QB.i.range(IB, NB)
      }
    }
    kQ.scroll = BB => {
      BB.inputState.lastScrollTop = BB.scrollDOM.scrollTop, BB.inputState.lastScrollLeft = BB.scrollDOM.scrollLeft
    }, kQ.wheel = kQ.mousewheel = BB => {
      BB.inputState.lastWheelEvent = Date.now()
    }, yQ.keydown = (BB, jB) => (BB.inputState.setSelectionOrigin("select"), 27 == jB.keyCode && 0 != BB.inputState.tabFocusMode && (BB.inputState.tabFocusMode = Date.now() + 2e3), !1), kQ.touchstart = (BB, jB) => {
      let zB = BB.inputState,
        QB = jB.targetTouches[0];
      zB.lastTouchTime = Date.now(), QB && (zB.lastTouchX = QB.clientX, zB.lastTouchY = QB.clientY), zB.setSelectionOrigin("select.pointer")
    }, kQ.touchmove = BB => {
      BB.inputState.setSelectionOrigin("select.pointer")
    }, yQ.mousedown = (BB, jB) => {
      if (BB.observer.flush(), BB.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let zB = null;
      for (let QB of BB.state.facet(Fj))
        if (zB = QB(BB, jB), zB) break;
      if (zB || 0 != jB.button || (zB = function(BB, jB) {
          let zB = BB.posAndSideAtCoords({
              x: jB.clientX,
              y: jB.clientY
            }, !1),
            nB = qQ(jB),
            dB = BB.state.selection;
          return {
            update(BB) {
              BB.docChanged && (zB.pos = BB.changes.mapPos(zB.pos), dB = dB.map(BB.changes))
            },
            get(jB, IB, NB) {
              let uB, UB = BB.posAndSideAtCoords({
                  x: jB.clientX,
                  y: jB.clientY
                }, !1),
                aB = tQ(BB, UB.pos, UB.assoc, nB);
              if (zB.pos != UB.pos && !IB) {
                let jB = tQ(BB, zB.pos, zB.assoc, nB),
                  dB = Math.min(jB.from, aB.from),
                  IB = Math.max(jB.to, aB.to);
                aB = dB < aB.from ? QB.i.range(dB, IB, aB.assoc) : QB.i.range(IB, dB, aB.assoc)
              }
              return IB ? dB.replaceRange(dB.main.extend(aB.from, aB.to, aB.assoc)) : NB && 1 == nB && dB.gy.length > 1 && (uB = function(BB, jB) {
                for (let zB = 0; zB < BB.gy.length; zB++) {
                  let {
                    from: nB,
                    to: dB
                  } = BB.gy[zB];
                  if (nB <= jB && dB >= jB) return QB.i.create(BB.gy.slice(0, zB).concat(BB.gy.slice(zB + 1)), BB.mainIndex == zB ? 0 : BB.mainIndex - (BB.mainIndex > zB ? 1 : 0))
                }
                return null
              }(dB, UB.pos)) ? uB : NB ? dB.addRange(aB) : QB.i.create([aB])
            }
          }
        }(BB, jB)), zB) {
        let QB = !BB.hasFocus;
        BB.inputState.startMouseSelection(new mQ(BB, jB, zB, QB)), QB && BB.observer.ignore((() => {
          zj(BB.contentDOM);
          let jB = BB.root.activeElement;
          jB && !jB.contains(BB.contentDOM) && jB.blur()
        }));
        let nB = BB.inputState.mouseSelection;
        if (nB) return nB.start(jB), !1 === nB.dragging
      } else BB.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const SQ = MB.ie && MB.ie_version <= 11;
    let MQ = null,
      EQ = 0,
      iQ = 0;

    function qQ(BB) {
      if (!SQ) return BB.detail;
      let jB = MQ,
        zB = iQ;
      return MQ = BB, iQ = Date.now(), EQ = !jB || zB > Date.now() - 400 && Math.abs(jB.clientX - BB.clientX) < 2 && Math.abs(jB.clientY - BB.clientY) < 2 ? (EQ + 1) % 3 : 1
    }

    function fQ(BB, jB, zB, QB) {
      if (!(zB = LQ(BB.state, Zj, zB))) return;
      let nB = BB.posAtCoords({
          x: jB.clientX,
          y: jB.clientY
        }, !1),
        {
          draggedContent: dB
        } = BB.inputState,
        IB = QB && dB && function(BB, jB) {
          let zB = BB.state.facet(Dj);
          return zB.length ? zB[0](jB) : MB.mac ? !jB.altKey : !jB.ctrlKey
        }(BB, jB) ? {
          from: dB.from,
          to: dB.to
        } : null,
        NB = {
          from: nB,
          insert: zB
        },
        uB = BB.state.changes(IB ? [IB, NB] : NB);
      BB.focus(), BB.dispatch({
        changes: uB,
        selection: {
          anchor: uB.mapPos(nB, -1),
          head: uB.mapPos(nB, 1)
        },
        userEvent: IB ? "move.drop" : "input.drop"
      }), BB.inputState.draggedContent = null
    }
    yQ.dragstart = (BB, jB) => {
      let {
        selection: {
          main: zB
        }
      } = BB.state;
      if (jB.target.draggable) {
        let nB = BB.docView.tile.nearest(jB.target);
        if (nB && nB.isWidget()) {
          let BB = nB.posAtStart,
            jB = BB + nB.length;
          (BB >= zB.to || jB <= zB.from) && (zB = QB.i.range(BB, jB))
        }
      }
      let {
        inputState: nB
      } = BB;
      return nB.mouseSelection && (nB.mouseSelection.dragging = !0), nB.draggedContent = zB, jB.dataTransfer && (jB.dataTransfer.setData("Text", LQ(BB.state, Aj, BB.state.sliceDoc(zB.from, zB.to))), jB.dataTransfer.effectAllowed = "copyMove"), !1
    }, yQ.dragend = BB => (BB.inputState.draggedContent = null, !1), yQ.drop = (BB, jB) => {
      if (!jB.dataTransfer) return !1;
      if (BB.state.readOnly) return !0;
      let zB = jB.dataTransfer.files;
      if (zB && zB.length) {
        let QB = Array(zB.length),
          nB = 0,
          dB = () => {
            ++nB == zB.length && fQ(BB, jB, QB.filter((BB => null != BB)).join(BB.state.lineBreak), !1)
          };
        for (let BB = 0; BB < zB.length; BB++) {
          let jB = new FileReader;
          jB.onerror = dB, jB.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(jB.result) || (QB[BB] = jB.result), dB()
          }, jB.readAsText(zB[BB])
        }
        return !0
      } {
        let zB = jB.dataTransfer.getData("Text");
        if (zB) return fQ(BB, jB, zB, !0), !0
      }
      return !1
    }, yQ.paste = (BB, jB) => {
      if (BB.state.readOnly) return !0;
      BB.observer.flush();
      let zB = GQ ? null : jB.clipboardData;
      return zB ? (gQ(BB, zB.getData("text/plain") || zB.getData("text/uri-list")), !0) : (function(BB) {
        let jB = BB.dom.parentNode;
        if (!jB) return;
        let zB = jB.appendChild(document.createElement("textarea"));
        zB.style.cssText = "position: fixed; left: -10000px; top: 10px", zB.focus(), setTimeout((() => {
          BB.focus(), zB.remove(), gQ(BB, zB.value)
        }), 50)
      }(BB), !1)
    };
    let oQ = null;
    yQ.copy = yQ.cut = (BB, jB) => {
      if (!WB(BB.contentDOM, BB.observer.selectionRange)) return !1;
      let {
        text: zB,
        gy: QB,
        linewise: nB
      } = function(BB) {
        let jB = [],
          zB = [],
          QB = !1;
        for (let nB of BB.selection.gy) nB.empty || (jB.push(BB.sliceDoc(nB.from, nB.to)), zB.push(nB));
        if (!jB.length) {
          let nB = -1;
          for (let {
              from: QB
            }
            of BB.selection.gy) {
            let dB = BB.doc.lineAt(QB);
            dB.number > nB && (jB.push(dB.text), zB.push({
              from: dB.from,
              to: Math.min(BB.doc.length, dB.to + 1)
            })), nB = dB.number
          }
          QB = !0
        }
        return {
          text: LQ(BB, Aj, jB.join(BB.lineBreak)),
          gy: zB,
          linewise: QB
        }
      }(BB.state);
      if (!zB && !nB) return !1;
      oQ = nB ? zB : null, "cut" != jB.type || BB.state.readOnly || BB.dispatch({
        changes: QB,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let dB = GQ ? null : jB.clipboardData;
      return dB ? (dB.clearData(), dB.setData("text/plain", zB), !0) : (function(BB, jB) {
        let zB = BB.dom.parentNode;
        if (!zB) return;
        let QB = zB.appendChild(document.createElement("textarea"));
        QB.style.cssText = "position: fixed; left: -10000px; top: 10px", QB.value = jB, QB.focus(), QB.selectionEnd = jB.length, QB.selectionStart = 0, setTimeout((() => {
          QB.remove(), BB.focus()
        }), 50)
      }(BB, zB), !1)
    };
    const HQ = QB.c.define();

    function DQ(BB, jB) {
      let zB = [];
      for (let QB of BB.facet(Xj)) {
        let nB = QB(BB, jB);
        nB && zB.push(nB)
      }
      return zB.length ? BB.update({
        effects: zB,
        annotations: HQ.of(!0)
      }) : null
    }

    function FQ(BB) {
      setTimeout((() => {
        let jB = BB.hasFocus;
        if (jB != BB.inputState.notifiedFocused) {
          let zB = DQ(BB.state, jB);
          zB ? BB.dispatch(zB) : BB.update([])
        }
      }), 10)
    }
    kQ.focus = BB => {
      BB.inputState.lastFocusTime = Date.now(), BB.scrollDOM.scrollTop || !BB.inputState.lastScrollTop && !BB.inputState.lastScrollLeft || (BB.scrollDOM.scrollTop = BB.inputState.lastScrollTop, BB.scrollDOM.scrollLeft = BB.inputState.lastScrollLeft), FQ(BB)
    }, kQ.blur = BB => {
      BB.observer.clearSelectionRange(), FQ(BB)
    }, kQ.compositionstart = kQ.compositionupdate = BB => {
      BB.observer.editContext || (null == BB.inputState.compositionFirstChange && (BB.inputState.compositionFirstChange = !0), BB.inputState.composing < 0 && (BB.inputState.composing = 0))
    }, kQ.compositionend = BB => {
      BB.observer.editContext || (BB.inputState.composing = -1, BB.inputState.compositionEndedAt = Date.now(), BB.inputState.compositionPendingKey = !0, BB.inputState.compositionPendingChange = BB.observer.pendingRecords().length > 0, BB.inputState.compositionFirstChange = null, MB.chrome && MB.android ? BB.observer.flushSoon() : BB.inputState.compositionPendingChange ? Promise.resolve().then((() => BB.observer.flush())) : setTimeout((() => {
        BB.inputState.composing < 0 && BB.docView.hasComposition && BB.update([])
      }), 50))
    }, kQ.contextmenu = BB => {
      BB.inputState.lastContextMenu = Date.now()
    }, yQ.beforeinput = (BB, jB) => {
      var zB, QB;
      if ("insertText" != jB.inputType && "insertCompositionText" != jB.inputType || (BB.inputState.insertingText = jB.data, BB.inputState.insertingTextAt = Date.now()), "insertReplacementText" == jB.inputType && BB.observer.editContext) {
        let QB = null === (zB = jB.dataTransfer) || void 0 === zB ? void 0 : zB.getData("text/plain"),
          nB = jB.getTargetRanges();
        if (QB && nB.length) {
          let jB = nB[0],
            zB = BB.posAtDOM(jB.startContainer, jB.startOffset),
            dB = BB.posAtDOM(jB.endContainer, jB.endOffset);
          return dQ(BB, {
            from: zB,
            to: dB,
            insert: BB.state.toText(QB)
          }, null), !0
        }
      }
      let nB;
      if (MB.chrome && MB.android && (nB = pQ.find((BB => BB.inputType == jB.inputType))) && (BB.observer.delayAndroidKey(nB.key, nB.keyCode), "Backspace" == nB.key || "Delete" == nB.key)) {
        let jB = (null === (QB = window.visualViewport) || void 0 === QB ? void 0 : QB.height) || 0;
        setTimeout((() => {
          var zB;
          ((null === (zB = window.visualViewport) || void 0 === zB ? void 0 : zB.height) || 0) > jB + 10 && BB.hasFocus && (BB.contentDOM.blur(), BB.focus())
        }), 100)
      }
      return MB.ios && "deleteContentForward" == jB.inputType && BB.observer.flushSoon(), MB.safari && "insertText" == jB.inputType && BB.inputState.composing >= 0 && setTimeout((() => kQ.compositionend(BB, jB)), 20), !1
    };
    const YQ = new Set;
    const VQ = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let hQ = !1;

    function XQ() {
      hQ = !1
    }
    class ZQ {
      constructor(BB) {
        this.lineWrapping = BB, this.doc = QB.G.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(BB, jB) {
        let zB = this.doc.lineAt(jB).number - this.doc.lineAt(BB).number + 1;
        return this.lineWrapping && (zB += Math.max(0, Math.ceil((jB - BB - zB * this.lineLength * .5) / this.lineLength))), this.lineHeight * zB
      }
      heightForLine(BB) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((BB - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(BB) {
        return this.doc = BB, this
      }
      mustRefreshForWrapping(BB) {
        return VQ.indexOf(BB) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(BB) {
        let jB = !1;
        for (let zB = 0; zB < BB.length; zB++) {
          let QB = BB[zB];
          QB < 0 ? zB++ : this.heightSamples[Math.floor(10 * QB)] || (jB = !0, this.heightSamples[Math.floor(10 * QB)] = !0)
        }
        return jB
      }
      refresh(BB, jB, zB, QB, nB, dB) {
        let IB = VQ.indexOf(BB) > -1,
          NB = Math.abs(jB - this.lineHeight) > .3 || this.lineWrapping != IB || Math.abs(zB - this.charWidth) > .1;
        if (this.lineWrapping = IB, this.lineHeight = jB, this.charWidth = zB, this.textHeight = QB, this.lineLength = nB, NB) {
          this.heightSamples = {};
          for (let BB = 0; BB < dB.length; BB++) {
            let jB = dB[BB];
            jB < 0 ? BB++ : this.heightSamples[Math.floor(10 * jB)] = !0
          }
        }
        return NB
      }
    }
    class AQ {
      constructor(BB, jB) {
        this.from = BB, this.heights = jB, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class TQ {
      constructor(BB, jB, zB, QB, nB) {
        this.from = BB, this.length = jB, this.top = zB, this.height = QB, this._content = nB
      }
      get type() {
        return "number" == typeof this._content ? DB.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof hB ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(BB) {
        let jB = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(BB._content) ? BB._content : [BB]);
        return new TQ(this.from, this.length + BB.length, this.top, this.height + BB.height, jB)
      }
    }
    var PQ = function(BB) {
      return BB[BB.ByPos = 0] = "ByPos", BB[BB.ByHeight = 1] = "ByHeight", BB[BB.ByPosNoHeight = 2] = "ByPosNoHeight", BB
    }(PQ || (PQ = {}));
    const WQ = .001;
    class eQ {
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = BB, this.height = jB, this.flags = zB
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(BB) {
        this.flags = (BB ? 2 : 0) | -3 & this.flags
      }
      setHeight(BB) {
        this.height != BB && (Math.abs(this.height - BB) > WQ && (hQ = !0), this.height = BB)
      }
      replace(BB, jB, zB) {
        return eQ.of(zB)
      }
      decomposeLeft(BB, jB) {
        jB.push(this)
      }
      decomposeRight(BB, jB) {
        jB.push(this)
      }
      applyChanges(BB, jB, zB, QB) {
        let nB = this,
          dB = zB.doc;
        for (let IB = QB.length - 1; IB >= 0; IB--) {
          let {
            fromA: NB,
            toA: uB,
            fromB: UB,
            toB: aB
          } = QB[IB], pB = nB.lineAt(NB, PQ.ByPosNoHeight, zB.setDoc(jB), 0, 0), rB = pB.to >= uB ? pB : nB.lineAt(uB, PQ.ByPosNoHeight, zB, 0, 0);
          for (aB += rB.to - uB, uB = rB.to; IB > 0 && pB.from <= QB[IB - 1].toA;) NB = QB[IB - 1].fromA, UB = QB[IB - 1].fromB, IB--, NB < pB.from && (pB = nB.lineAt(NB, PQ.ByPosNoHeight, zB, 0, 0));
          UB += pB.from - NB, NB = pB.from;
          let sB = vQ.build(zB.setDoc(dB), BB, UB, aB);
          nB = lQ(nB, nB.replace(NB, uB, sB))
        }
        return nB.updateHeight(zB, 0)
      }
      static empty() {
        return new KQ(0, 0, 0)
      }
      static of (BB) {
        if (1 == BB.length) return BB[0];
        let jB = 0,
          zB = BB.length,
          QB = 0,
          nB = 0;
        for (;;)
          if (jB == zB)
            if (QB > 2 * nB) {
              let nB = BB[jB - 1];
              nB.break ? BB.splice(--jB, 1, nB.left, null, nB.right) : BB.splice(--jB, 1, nB.left, nB.right), zB += 1 + nB.break, QB -= nB.size
            } else {
              if (!(nB > 2 * QB)) break;
              {
                let jB = BB[zB];
                jB.break ? BB.splice(zB, 1, jB.left, null, jB.right) : BB.splice(zB, 1, jB.left, jB.right), zB += 2 + jB.break, nB -= jB.size
              }
            }
        else if (QB < nB) {
          let zB = BB[jB++];
          zB && (QB += zB.size)
        } else {
          let jB = BB[--zB];
          jB && (nB += jB.size)
        }
        let dB = 0;
        return null == BB[jB - 1] ? (dB = 1, jB--) : null == BB[jB] && (dB = 1, zB++), new cQ(eQ.of(BB.slice(0, jB)), dB, eQ.of(BB.slice(zB)))
      }
    }

    function lQ(BB, jB) {
      return BB == jB ? BB : (BB.constructor != jB.constructor && (hQ = !0), jB)
    }
    eQ.prototype.size = 1;
    const wQ = FB.replace({});
    class xQ extends eQ {
      constructor(BB, jB, zB) {
        super(BB, jB), this.deco = zB, this.spaceAbove = 0
      }
      mainBlock(BB, jB) {
        return new TQ(jB, this.length, BB + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(BB, jB, zB, QB) {
        return this.spaceAbove && BB < zB + this.spaceAbove ? new TQ(QB, 0, zB, this.spaceAbove, wQ) : this.mainBlock(zB, QB)
      }
      lineAt(BB, jB, zB, QB, nB) {
        let dB = this.mainBlock(QB, nB);
        return this.spaceAbove ? this.blockAt(0, zB, QB, nB).join(dB) : dB
      }
      forEachLine(BB, jB, zB, QB, nB, dB) {
        BB <= nB + this.length && jB >= nB && dB(this.lineAt(0, PQ.ByPos, zB, QB, nB))
      }
      setMeasuredHeight(BB) {
        let jB = BB.heights[BB.index++];
        jB < 0 ? (this.spaceAbove = -jB, jB = BB.heights[BB.index++]) : this.spaceAbove = 0, this.setHeight(jB)
      }
      updateHeight(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zB = arguments.length > 3 ? arguments[3] : void 0;
        return zB && zB.from <= jB && zB.more && this.setMeasuredHeight(zB), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class KQ extends xQ {
      constructor(BB, jB, zB) {
        super(BB, jB, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = zB
      }
      mainBlock(BB, jB) {
        return new TQ(jB, this.length, BB + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(BB, jB, zB) {
        let QB = zB[0];
        return 1 == zB.length && (QB instanceof KQ || QB instanceof CQ && 4 & QB.flags) && Math.abs(this.length - QB.length) < 10 ? (QB instanceof CQ ? QB = new KQ(QB.length, this.height, this.spaceAbove) : QB.height = this.height, this.outdated || (QB.outdated = !1), QB) : eQ.of(zB)
      }
      updateHeight(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          QB = arguments.length > 3 ? arguments[3] : void 0;
        return QB && QB.from <= jB && QB.more ? this.setMeasuredHeight(QB) : (zB || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, BB.heightForLine(this.length - this.collapsed)) + this.breaks * BB.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class CQ extends eQ {
      constructor(BB) {
        super(BB, 0)
      }
      heightMetrics(BB, jB) {
        let zB, QB = BB.doc.lineAt(jB).number,
          nB = BB.doc.lineAt(jB + this.length).number,
          dB = nB - QB + 1,
          IB = 0;
        if (BB.lineWrapping) {
          let jB = Math.min(this.height, BB.lineHeight * dB);
          zB = jB / dB, this.length > dB + 1 && (IB = (this.height - jB) / (this.length - dB - 1))
        } else zB = this.height / dB;
        return {
          firstLine: QB,
          lastLine: nB,
          perLine: zB,
          perChar: IB
        }
      }
      blockAt(BB, jB, zB, QB) {
        let {
          firstLine: nB,
          lastLine: dB,
          perLine: IB,
          perChar: NB
        } = this.heightMetrics(jB, QB);
        if (jB.lineWrapping) {
          let nB = QB + (BB < jB.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (BB - zB) / this.height)) * this.length)),
            dB = jB.doc.lineAt(nB),
            uB = IB + dB.length * NB,
            UB = Math.max(zB, BB - uB / 2);
          return new TQ(dB.from, dB.length, UB, uB, 0)
        } {
          let QB = Math.max(0, Math.min(dB - nB, Math.floor((BB - zB) / IB))),
            {
              from: NB,
              length: uB
            } = jB.doc.line(nB + QB);
          return new TQ(NB, uB, zB + IB * QB, IB, 0)
        }
      }
      lineAt(BB, jB, zB, QB, nB) {
        if (jB == PQ.ByHeight) return this.blockAt(BB, zB, QB, nB);
        if (jB == PQ.ByPosNoHeight) {
          let {
            from: jB,
            to: QB
          } = zB.doc.lineAt(BB);
          return new TQ(jB, QB - jB, 0, 0, 0)
        }
        let {
          firstLine: dB,
          perLine: IB,
          perChar: NB
        } = this.heightMetrics(zB, nB), uB = zB.doc.lineAt(BB), UB = IB + uB.length * NB, aB = uB.number - dB, pB = QB + IB * aB + NB * (uB.from - nB - aB);
        return new TQ(uB.from, uB.length, Math.max(QB, Math.min(pB, QB + this.height - UB)), UB, 0)
      }
      forEachLine(BB, jB, zB, QB, nB, dB) {
        BB = Math.max(BB, nB), jB = Math.min(jB, nB + this.length);
        let {
          firstLine: IB,
          perLine: NB,
          perChar: uB
        } = this.heightMetrics(zB, nB);
        for (let UB = BB, aB = QB; UB <= jB;) {
          let jB = zB.doc.lineAt(UB);
          if (UB == BB) {
            let zB = jB.number - IB;
            aB += NB * zB + uB * (BB - nB - zB)
          }
          let QB = NB + uB * jB.length;
          dB(new TQ(jB.from, jB.length, aB, QB, 0)), aB += QB, UB = jB.to + 1
        }
      }
      replace(BB, jB, zB) {
        let QB = this.length - jB;
        if (QB > 0) {
          let BB = zB[zB.length - 1];
          BB instanceof CQ ? zB[zB.length - 1] = new CQ(BB.length + QB) : zB.push(null, new CQ(QB - 1))
        }
        if (BB > 0) {
          let jB = zB[0];
          jB instanceof CQ ? zB[0] = new CQ(BB + jB.length) : zB.unshift(new CQ(BB - 1), null)
        }
        return eQ.of(zB)
      }
      decomposeLeft(BB, jB) {
        jB.push(new CQ(BB - 1), null)
      }
      decomposeRight(BB, jB) {
        jB.push(null, new CQ(this.length - BB - 1))
      }
      updateHeight(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          QB = arguments.length > 3 ? arguments[3] : void 0,
          nB = jB + this.length;
        if (QB && QB.from <= jB + this.length && QB.more) {
          let zB = [],
            dB = Math.max(jB, QB.from),
            IB = -1;
          for (QB.from > jB && zB.push(new CQ(QB.from - jB - 1).updateHeight(BB, jB)); dB <= nB && QB.more;) {
            let jB = BB.doc.lineAt(dB).length;
            zB.length && zB.push(null);
            let nB = QB.heights[QB.index++],
              NB = 0;
            nB < 0 && (NB = -nB, nB = QB.heights[QB.index++]), -1 == IB ? IB = nB : Math.abs(nB - IB) >= WQ && (IB = -2);
            let uB = new KQ(jB, nB, NB);
            uB.outdated = !1, zB.push(uB), dB += jB + 1
          }
          dB <= nB && zB.push(null, new CQ(nB - dB).updateHeight(BB, dB));
          let NB = eQ.of(zB);
          return (IB < 0 || Math.abs(NB.height - this.height) >= WQ || Math.abs(IB - this.heightMetrics(BB, jB).perLine) >= WQ) && (hQ = !0), lQ(this, NB)
        }
        return (zB || this.outdated) && (this.setHeight(BB.heightForGap(jB, jB + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class cQ extends eQ {
      constructor(BB, jB, zB) {
        super(BB.length + jB + zB.length, BB.height + zB.height, jB | (BB.outdated || zB.outdated ? 2 : 0)), this.left = BB, this.right = zB, this.size = BB.size + zB.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(BB, jB, zB, QB) {
        let nB = zB + this.left.height;
        return BB < nB ? this.left.blockAt(BB, jB, zB, QB) : this.right.blockAt(BB, jB, nB, QB + this.left.length + this.break)
      }
      lineAt(BB, jB, zB, QB, nB) {
        let dB = QB + this.left.height,
          IB = nB + this.left.length + this.break,
          NB = jB == PQ.ByHeight ? BB < dB : BB < IB,
          uB = NB ? this.left.lineAt(BB, jB, zB, QB, nB) : this.right.lineAt(BB, jB, zB, dB, IB);
        if (this.break || (NB ? uB.to < IB : uB.from > IB)) return uB;
        let UB = jB == PQ.ByPosNoHeight ? PQ.ByPosNoHeight : PQ.ByPos;
        return NB ? uB.join(this.right.lineAt(IB, UB, zB, dB, IB)) : this.left.lineAt(IB, UB, zB, QB, nB).join(uB)
      }
      forEachLine(BB, jB, zB, QB, nB, dB) {
        let IB = QB + this.left.height,
          NB = nB + this.left.length + this.break;
        if (this.break) BB < NB && this.left.forEachLine(BB, jB, zB, QB, nB, dB), jB >= NB && this.right.forEachLine(BB, jB, zB, IB, NB, dB);
        else {
          let uB = this.lineAt(NB, PQ.ByPos, zB, QB, nB);
          BB < uB.from && this.left.forEachLine(BB, uB.from - 1, zB, QB, nB, dB), uB.to >= BB && uB.from <= jB && dB(uB), jB > uB.to && this.right.forEachLine(uB.to + 1, jB, zB, IB, NB, dB)
        }
      }
      replace(BB, jB, zB) {
        let QB = this.left.length + this.break;
        if (jB < QB) return this.balanced(this.left.replace(BB, jB, zB), this.right);
        if (BB > this.left.length) return this.balanced(this.left, this.right.replace(BB - QB, jB - QB, zB));
        let nB = [];
        BB > 0 && this.decomposeLeft(BB, nB);
        let dB = nB.length;
        for (let IB of zB) nB.push(IB);
        if (BB > 0 && bQ(nB, dB - 1), jB < this.length) {
          let BB = nB.length;
          this.decomposeRight(jB, nB), bQ(nB, BB)
        }
        return eQ.of(nB)
      }
      decomposeLeft(BB, jB) {
        let zB = this.left.length;
        if (BB <= zB) return this.left.decomposeLeft(BB, jB);
        jB.push(this.left), this.break && (zB++, BB >= zB && jB.push(null)), BB > zB && this.right.decomposeLeft(BB - zB, jB)
      }
      decomposeRight(BB, jB) {
        let zB = this.left.length,
          QB = zB + this.break;
        if (BB >= QB) return this.right.decomposeRight(BB - QB, jB);
        BB < zB && this.left.decomposeRight(BB, jB), this.break && BB < QB && jB.push(null), jB.push(this.right)
      }
      balanced(BB, jB) {
        return BB.size > 2 * jB.size || jB.size > 2 * BB.size ? eQ.of(this.break ? [BB, null, jB] : [BB, jB]) : (this.left = lQ(this.left, BB), this.right = lQ(this.right, jB), this.setHeight(BB.height + jB.height), this.outdated = BB.outdated || jB.outdated, this.size = BB.size + jB.size, this.length = BB.length + this.break+jB.length, this)
      }
      updateHeight(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          QB = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: nB,
            right: dB
          } = this,
          IB = jB + nB.length + this.break,
          NB = null;
        return QB && QB.from <= jB + nB.length && QB.more ? NB = nB = nB.updateHeight(BB, jB, zB, QB) : nB.updateHeight(BB, jB, zB), QB && QB.from <= IB + dB.length && QB.more ? NB = dB = dB.updateHeight(BB, IB, zB, QB) : dB.updateHeight(BB, IB, zB), NB ? this.balanced(nB, dB) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function bQ(BB, jB) {
      let zB, QB;
      null == BB[jB] && (zB = BB[jB - 1]) instanceof CQ && (QB = BB[jB + 1]) instanceof CQ && BB.splice(jB - 1, 3, new CQ(zB.length + 1 + QB.length))
    }
    class vQ {
      constructor(BB, jB) {
        this.pos = BB, this.oracle = jB, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = BB
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(BB, jB) {
        if (this.lineStart > -1) {
          let BB = Math.min(jB, this.lineEnd),
            zB = this.nodes[this.nodes.length - 1];
          zB instanceof KQ ? zB.length += BB - this.pos : (BB > this.pos || !this.isCovered) && this.nodes.push(new KQ(BB - this.pos, -1, 0)), this.writtenTo = BB, jB > BB && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = jB
      }
      point(BB, jB, zB) {
        if (BB < jB || zB.heightRelevant) {
          let QB = zB.widget ? zB.widget.estimatedHeight : 0,
            nB = zB.widget ? zB.widget.lineBreaks : 0;
          QB < 0 && (QB = this.oracle.lineHeight);
          let dB = jB - BB;
          zB.block ? this.njB(new xQ(dB, QB, zB)) : (dB || nB || QB >= 5) && this.addLineDeco(QB, nB, dB)
        } else jB > BB && this.span(BB, jB);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: BB,
          to: jB
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = BB, this.lineEnd = jB, this.writtenTo < BB && ((this.writtenTo < BB - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, BB - 1)), this.nodes.push(null)), this.pos > BB && this.nodes.push(new KQ(this.pos - BB, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(BB, jB) {
        let zB = new CQ(jB - BB);
        return this.oracle.doc.lineAt(BB).to == jB && (zB.flags |= 4), zB
      }
      ensureLine() {
        this.enterLine();
        let BB = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (BB instanceof KQ) return BB;
        let jB = new KQ(0, -1, 0);
        return this.nodes.push(jB), jB
      }
      njB(BB) {
        this.enterLine();
        let jB = BB.deco;
        jB && jB.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(BB), this.writtenTo = this.pos = this.pos + BB.length, jB && jB.endSide > 0 && (this.covering = BB)
      }
      addLineDeco(BB, jB, zB) {
        let QB = this.ensureLine();
        QB.length += zB, QB.collapsed += zB, QB.widgetHeight = Math.max(QB.widgetHeight, BB), QB.breaks += jB, this.writtenTo = this.pos = this.pos + zB
      }
      finish(BB) {
        let jB = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || jB instanceof KQ || this.isCovered ? (this.writtenTo < this.pos || null == jB) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new KQ(0, -1, 0));
        let zB = BB;
        for (let QB of this.nodes) QB instanceof KQ && QB.updateHeight(this.oracle, zB), zB += QB ? QB.length : 1;
        return this.nodes
      }
      static build(BB, jB, zB, nB) {
        let dB = new vQ(zB, BB);
        return QB.z.spans(jB, zB, nB, dB, 0), dB.finish(zB)
      }
    }
    class RQ {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(BB, jB, zB, QB) {
        (BB < jB || zB && zB.heightRelevant || QB && QB.heightRelevant) && ZB(BB, jB, this.changes, 5)
      }
    }

    function OQ(BB, jB) {
      let zB = BB.getBoundingClientRect(),
        QB = BB.ownerDocument,
        nB = QB.defaultView || window,
        dB = Math.max(0, zB.left),
        IB = Math.min(nB.innerWidth, zB.right),
        NB = Math.max(0, zB.top),
        uB = Math.min(nB.innerHeight, zB.bottom);
      for (let UB = BB.parentNode; UB && UB != QB.body;)
        if (1 == UB.nodeType) {
          let jB = UB,
            zB = window.getComputedStyle(jB);
          if ((jB.scrollHeight > jB.clientHeight || jB.scrollWidth > jB.clientWidth) && "visible" != zB.overflow) {
            let zB = jB.getBoundingClientRect();
            dB = Math.max(dB, zB.left), IB = Math.min(IB, zB.right), NB = Math.max(NB, zB.top), uB = Math.min(UB == BB.parentNode ? nB.innerHeight : uB, zB.bottom)
          }
          UB = "absolute" == zB.position || "fixed" == zB.position ? jB.offsetParent : jB.parentNode
        } else {
          if (11 != UB.nodeType) break;
          UB = UB.host
        } return {
        left: dB - zB.left,
        right: Math.max(dB, IB) - zB.left,
        top: NB - (zB.top + jB),
        bottom: Math.max(NB, uB) - (zB.top + jB)
      }
    }

    function Bn(BB, jB) {
      let zB = BB.getBoundingClientRect();
      return {
        left: 0,
        right: zB.right - zB.left,
        top: jB,
        bottom: zB.bottom - (zB.top + jB)
      }
    }
    class jn {
      constructor(BB, jB, zB, QB) {
        this.from = BB, this.to = jB, this.size = zB, this.displaySize = QB
      }
      static same(BB, jB) {
        if (BB.length != jB.length) return !1;
        for (let zB = 0; zB < BB.length; zB++) {
          let QB = BB[zB],
            nB = jB[zB];
          if (QB.from != nB.from || QB.to != nB.to || QB.size != nB.size) return !1
        }
        return !0
      }
      draw(BB, jB) {
        return FB.replace({
          widget: new zn(this.displaySize * (jB ? BB.scaleY : BB.scaleX), jB)
        }).range(this.from, this.to)
      }
    }
    class zn extends HB {
      constructor(BB, jB) {
        super(), this.size = BB, this.vertical = jB
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
    class Qn {
      constructor(BB, jB) {
        this.view = BB, this.state = jB, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = Nn, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = Uj.LTR, this.I5 = [], this.mustEnforceCursorAssoc = !1;
        let zB = jB.facet(Oj).some((BB => "function" != typeof BB && "cm-lineWrapping" == BB.class));
        this.heightOracle = new ZQ(zB), this.stateDeco = un(jB), this.heightMap = eQ.empty().applyChanges(this.stateDeco, QB.G.empty, this.heightOracle.setDoc(jB.doc), [new Uz(0, 0, 0, jB.doc.length)]);
        for (let QB = 0; QB < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); QB++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = FB.set(this.lineGaps.map((BB => BB.draw(this, !1)))), this.scrollParent = BB.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let BB = [this.viewport],
          {
            main: jB
          } = this.state.selection;
        for (let zB = 0; zB <= 1; zB++) {
          let QB = zB ? jB.head : jB.anchor;
          if (!BB.some((BB => {
              let {
                from: jB,
                to: zB
              } = BB;
              return QB >= jB && QB <= zB
            }))) {
            let {
              from: jB,
              to: zB
            } = this.lineBlockAt(QB);
            BB.push(new nn(jB, zB))
          }
        }
        return this.viewports = BB.sort(((BB, jB) => BB.from - jB.from)), this.updateScaler()
      }
      updateScaler() {
        let BB = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? Nn : new Un(this.heightOracle, this.heightMap, this.viewports), BB.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (BB => {
          this.viewportLines.push(an(BB, this.scaler))
        }))
      }
      update(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = BB.state;
        let zB = this.stateDeco;
        this.stateDeco = un(this.state);
        let nB = BB.changedRanges,
          dB = Uz.extendWithRanges(nB, function(BB, jB, zB) {
            let nB = new RQ;
            return QB.z.compare(BB, jB, zB, nB, 0), nB.changes
          }(zB, this.stateDeco, BB ? BB.changes : QB.ChangeSet.empty(this.state.doc.length))),
          IB = this.heightMap.height,
          NB = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        XQ(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, BB.startState.doc, this.heightOracle.setDoc(this.state.doc), dB), (this.heightMap.height != IB || hQ) && (BB.flags |= 2), NB ? (this.scrollAnchorPos = BB.changes.mapPos(NB.from, -1), this.scrollAnchorHeight = NB.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = IB);
        let uB = dB.length ? this.mapViewport(this.viewport, BB.changes) : this.viewport;
        (jB && (jB.range.head < uB.from || jB.range.head > uB.to) || !this.viewportIsAppropriate(uB)) && (uB = this.getViewport(0, jB));
        let UB = uB.from != this.viewport.from || uB.to != this.viewport.to;
        this.viewport = uB, BB.flags |= this.updateForViewport(), (UB || !BB.changes.empty || 2 & BB.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, BB.changes))), BB.flags |= this.computeVisibleRanges(BB.changes), jB && (this.scrollTarget = jB), !this.mustEnforceCursorAssoc && (BB.selectionSet || BB.focusChanged) && BB.view.lineWrapping && BB.state.selection.main.empty && BB.state.selection.main.assoc && !BB.state.facet(Pj) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: BB
        } = this, jB = BB.contentDOM, zB = window.getComputedStyle(jB), nB = this.heightOracle, dB = zB.whiteSpace;
        this.defaultTextDirection = "rtl" == zB.direction ? Uj.RTL : Uj.LTR;
        let IB = this.heightOracle.mustRefreshForWrapping(dB) || "refresh" === this.mustMeasureContent,
          NB = jB.getBoundingClientRect(),
          uB = IB || this.mustMeasureContent || this.contentDOMHeight != NB.height;
        this.contentDOMHeight = NB.height, this.mustMeasureContent = !1;
        let UB = 0,
          aB = 0;
        if (NB.width && NB.height) {
          let {
            scaleX: BB,
            scaleY: zB
          } = vB(jB, NB);
          (BB > .005 && Math.abs(this.scaleX - BB) > .005 || zB > .005 && Math.abs(this.scaleY - zB) > .005) && (this.scaleX = BB, this.scaleY = zB, UB |= 16, IB = uB = !0)
        }
        let pB = (parseInt(zB.paddingTop) || 0) * this.scaleY,
          rB = (parseInt(zB.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == pB && this.paddingBottom == rB || (this.paddingTop = pB, this.paddingBottom = rB, UB |= 18), this.editorWidth != BB.scrollDOM.clientWidth && (nB.lineWrapping && (uB = !0), this.editorWidth = BB.scrollDOM.clientWidth, UB |= 16);
        let sB = RB(this.view.contentDOM, !1).y;
        sB != this.scrollParent && (this.scrollParent = sB, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let JB = this.getScrollOffset();
        this.scrollOffset != JB && (this.scrollAnchorHeight = -1, this.scrollOffset = JB), this.scrolledToBottom = dj(this.scrollParent || BB.win);
        let mB = (this.printing ? Bn : OQ)(jB, this.paddingTop),
          yB = mB.top - this.pixelViewport.top,
          kB = mB.bottom - this.pixelViewport.bottom;
        this.pixelViewport = mB;
        let GB = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (GB != this.inView && (this.inView = GB, GB && (uB = !0)), !this.inView && !this.scrollTarget && ! function(BB) {
            let jB = BB.getBoundingClientRect(),
              zB = BB.ownerDocument.defaultView || window;
            return jB.left < zB.innerWidth && jB.right > 0 && jB.top < zB.innerHeight && jB.bottom > 0
          }(BB.dom)) return 0;
        let LB = NB.width;
        if (this.contentDOMWidth == LB && this.editorHeight == BB.scrollDOM.clientHeight || (this.contentDOMWidth = NB.width, this.editorHeight = BB.scrollDOM.clientHeight, UB |= 16), uB) {
          let jB = BB.docView.measureVisibleLineHeights(this.viewport);
          if (nB.mustRefreshForHeights(jB) && (IB = !0), IB || nB.lineWrapping && Math.abs(LB - this.contentDOMWidth) > nB.charWidth) {
            let {
              lineHeight: zB,
              charWidth: QB,
              textHeight: NB
            } = BB.docView.measureTextSize();
            IB = zB > 0 && nB.refresh(dB, zB, QB, NB, Math.max(5, LB / QB), jB), IB && (BB.docView.minWidth = 0, UB |= 16)
          }
          yB > 0 && kB > 0 ? aB = Math.max(yB, kB) : yB < 0 && kB < 0 && (aB = Math.min(yB, kB)), XQ();
          for (let zB of this.viewports) {
            let dB = zB.from == this.viewport.from ? jB : BB.docView.measureVisibleLineHeights(zB);
            this.heightMap = (IB ? eQ.empty().applyChanges(this.stateDeco, QB.G.empty, this.heightOracle, [new Uz(0, 0, 0, BB.state.doc.length)]) : this.heightMap).updateHeight(nB, 0, IB, new AQ(zB.from, dB))
          }
          hQ && (UB |= 2)
        }
        let gB = !this.viewportIsAppropriate(this.viewport, aB) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return gB && (2 & UB && (UB |= this.updateScaler()), this.viewport = this.getViewport(aB, this.scrollTarget), UB |= this.updateForViewport()), (2 & UB || gB) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(IB ? [] : this.lineGaps, BB)), UB |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, BB.docView.enforceCursorAssoc()), UB
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(BB, jB) {
        let zB = .5 - Math.max(-.5, Math.min(.5, BB / 1e3 / 2)),
          QB = this.heightMap,
          nB = this.heightOracle,
          {
            visibleTop: dB,
            visibleBottom: IB
          } = this,
          NB = new nn(QB.lineAt(dB - 1e3 * zB, PQ.ByHeight, nB, 0, 0).from, QB.lineAt(IB + 1e3 * (1 - zB), PQ.ByHeight, nB, 0, 0).to);
        if (jB) {
          let {
            head: BB
          } = jB.range;
          if (BB < NB.from || BB > NB.to) {
            let zB, dB = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              IB = QB.lineAt(BB, PQ.ByPos, nB, 0, 0);
            zB = "center" == jB.y ? (IB.top + IB.bottom) / 2 - dB / 2 : "start" == jB.y || "nearest" == jB.y && BB < NB.from ? IB.top : IB.bottom - dB, NB = new nn(QB.lineAt(zB - 500, PQ.ByHeight, nB, 0, 0).from, QB.lineAt(zB + dB + 500, PQ.ByHeight, nB, 0, 0).to)
          }
        }
        return NB
      }
      mapViewport(BB, jB) {
        let zB = jB.mapPos(BB.from, -1),
          QB = jB.mapPos(BB.to, 1);
        return new nn(this.heightMap.lineAt(zB, PQ.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(QB, PQ.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(BB) {
        let {
          from: jB,
          to: zB
        } = BB, QB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: nB
        } = this.heightMap.lineAt(jB, PQ.ByPos, this.heightOracle, 0, 0), {
          bottom: dB
        } = this.heightMap.lineAt(zB, PQ.ByPos, this.heightOracle, 0, 0), {
          visibleTop: IB,
          visibleBottom: NB
        } = this;
        return (0 == jB || nB <= IB - Math.max(10, Math.min(-QB, 250))) && (zB == this.state.doc.length || dB >= NB + Math.max(10, Math.min(QB, 250))) && nB > IB - 2e3 && dB < NB + 2e3
      }
      mapLineGaps(BB, jB) {
        if (!BB.length || jB.empty) return BB;
        let zB = [];
        for (let QB of BB) jB.touchesRange(QB.from, QB.to) || zB.push(new jn(jB.mapPos(QB.from), jB.mapPos(QB.to), QB.size, QB.displaySize));
        return zB
      }
      ensureLineGaps(BB, jB) {
        let zB = this.heightOracle.lineWrapping,
          nB = zB ? 1e4 : 2e3,
          dB = nB >> 1,
          IB = nB << 1;
        if (this.defaultTextDirection != Uj.LTR && !zB) return [];
        let NB = [],
          uB = (nB, IB, UB, aB) => {
            if (IB - nB < dB) return;
            let pB = this.state.selection.main,
              rB = [pB.from];
            pB.empty || rB.push(pB.to);
            for (let BB of rB)
              if (BB > nB && BB < IB) return uB(nB, BB - 10, UB, aB), void uB(BB + 10, IB, UB, aB);
            let sB = function(BB, jB) {
              for (let zB of BB)
                if (jB(zB)) return zB;
              return
            }(BB, (BB => BB.from >= UB.from && BB.to <= UB.to && Math.abs(BB.from - nB) < dB && Math.abs(BB.to - IB) < dB && !rB.some((jB => BB.from < jB && BB.to > jB))));
            if (!sB) {
              if (IB < UB.to && jB && zB && jB.I5.some((BB => BB.from <= IB && BB.to >= IB))) {
                let BB = jB.moveToLineBoundary(QB.i.cursor(IB), !1, !0).head;
                BB > nB && (IB = BB)
              }
              let BB = this.gapSize(UB, nB, IB, aB);
              sB = new jn(nB, IB, BB, zB || BB < 2e6 ? BB : 2e6)
            }
            NB.push(sB)
          },
          UB = jB => {
            if (jB.length < IB || jB.type != DB.Text) return;
            let dB = function(BB, jB, zB) {
              let nB = [],
                dB = BB,
                IB = 0;
              QB.z.spans(zB, BB, jB, {
                span() {},
                point(BB, jB) {
                  BB > dB && (nB.push({
                    from: dB,
                    to: BB
                  }), IB += BB - dB), dB = jB
                }
              }, 20), dB < jB && (nB.push({
                from: dB,
                to: jB
              }), IB += jB - dB);
              return {
                total: IB,
                gy: nB
              }
            }(jB.from, jB.to, this.stateDeco);
            if (dB.total < IB) return;
            let NB, UB, aB = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (zB) {
              let BB, zB, QB = nB / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != aB) {
                let nB = In(dB, aB),
                  IB = ((this.visibleBottom - this.visibleTop) / 2 + QB) / jB.height;
                BB = nB - IB, zB = nB + IB
              } else BB = (this.visibleTop - jB.top - QB) / jB.height, zB = (this.visibleBottom - jB.top + QB) / jB.height;
              NB = dn(dB, BB), UB = dn(dB, zB)
            } else {
              let zB = dB.total * this.heightOracle.charWidth,
                QB = nB * this.heightOracle.charWidth,
                IB = 0;
              if (zB > 2e6)
                for (let nB of BB) nB.from >= jB.from && nB.from < jB.to && nB.size != nB.displaySize && nB.from * this.heightOracle.charWidth + IB < this.pixelViewport.left && (IB = nB.size - nB.displaySize);
              let uB, pB, rB = this.pixelViewport.left + IB,
                sB = this.pixelViewport.right + IB;
              if (null != aB) {
                let BB = In(dB, aB),
                  jB = ((sB - rB) / 2 + QB) / zB;
                uB = BB - jB, pB = BB + jB
              } else uB = (rB - QB) / zB, pB = (sB + QB) / zB;
              NB = dn(dB, uB), UB = dn(dB, pB)
            }
            NB > jB.from && uB(jB.from, NB, jB, dB), UB < jB.to && uB(UB, jB.to, jB, dB)
          };
        for (let QB of this.viewportLines) Array.isArray(QB.type) ? QB.type.forEach(UB) : UB(QB);
        return NB
      }
      gapSize(BB, jB, zB, QB) {
        let nB = In(QB, zB) - In(QB, jB);
        return this.heightOracle.lineWrapping ? BB.height * nB : QB.total * this.heightOracle.charWidth * nB
      }
      updateLineGaps(BB) {
        jn.same(BB, this.lineGaps) || (this.lineGaps = BB, this.lineGapDeco = FB.set(BB.map((BB => BB.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(BB) {
        let jB = this.stateDeco;
        this.lineGaps.length && (jB = jB.concat(this.lineGapDeco));
        let zB = [];
        QB.z.spans(jB, this.viewport.from, this.viewport.to, {
          span(BB, jB) {
            zB.push({
              from: BB,
              to: jB
            })
          },
          point() {}
        }, 20);
        let nB = 0;
        if (zB.length != this.I5.length) nB = 12;
        else
          for (let QB = 0; QB < zB.length && !(8 & nB); QB++) {
            let jB = this.I5[QB],
              dB = zB[QB];
            jB.from == dB.from && jB.to == dB.to || (nB |= 4, BB && BB.mapPos(jB.from, -1) == dB.from && BB.mapPos(jB.to, 1) == dB.to || (nB |= 8))
          }
        return this.I5 = zB, nB
      }
      lineBlockAt(BB) {
        return BB >= this.viewport.from && BB <= this.viewport.to && this.viewportLines.find((jB => jB.from <= BB && jB.to >= BB)) || an(this.heightMap.lineAt(BB, PQ.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(BB) {
        return BB >= this.viewportLines[0].top && BB <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((jB => jB.top <= BB && jB.bottom >= BB)) || an(this.heightMap.lineAt(this.scaler.fromDOM(BB), PQ.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(BB) {
        let jB = this.lineBlockAtHeight(BB + 8);
        return jB.from >= this.viewport.from || this.viewportLines[0].top - BB > 200 ? jB : this.viewportLines[0]
      }
      elementAtHeight(BB) {
        return an(this.heightMap.blockAt(this.scaler.fromDOM(BB), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class nn {
      constructor(BB, jB) {
        this.from = BB, this.to = jB
      }
    }

    function dn(BB, jB) {
      let {
        total: zB,
        gy: QB
      } = BB;
      if (jB <= 0) return QB[0].from;
      if (jB >= 1) return QB[QB.length - 1].to;
      let nB = Math.floor(zB * jB);
      for (let dB = 0;; dB++) {
        let {
          from: BB,
          to: jB
        } = QB[dB], zB = jB - BB;
        if (nB <= zB) return BB + nB;
        nB -= zB
      }
    }

    function In(BB, jB) {
      let zB = 0;
      for (let {
          from: QB,
          to: nB
        }
        of BB.gy) {
        if (jB <= nB) {
          zB += jB - QB;
          break
        }
        zB += nB - QB
      }
      return zB / BB.total
    }
    const Nn = {
      toDOM: BB => BB,
      fromDOM: BB => BB,
      scale: 1,
      eq(BB) {
        return BB == this
      }
    };

    function un(BB) {
      let jB = BB.facet(Bz).filter((BB => "function" != typeof BB)),
        zB = BB.facet(zz).filter((BB => "function" != typeof BB));
      return zB.length && jB.push(QB.z.join(zB)), jB
    }
    class Un {
      constructor(BB, jB, zB) {
        let QB = 0,
          nB = 0,
          dB = 0;
        this.viewports = zB.map((zB => {
          let {
            from: nB,
            to: dB
          } = zB, IB = jB.lineAt(nB, PQ.ByPos, BB, 0, 0).top, NB = jB.lineAt(dB, PQ.ByPos, BB, 0, 0).bottom;
          return QB += NB - IB, {
            from: nB,
            to: dB,
            top: IB,
            bottom: NB,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - QB) / (jB.height - QB);
        for (let IB of this.viewports) IB.domTop = dB + (IB.top - nB) * this.scale, dB = IB.domBottom = IB.domTop + (IB.bottom - IB.top), nB = IB.bottom
      }
      toDOM(BB) {
        for (let jB = 0, zB = 0, QB = 0;; jB++) {
          let nB = jB < this.viewports.length ? this.viewports[jB] : null;
          if (!nB || BB < nB.top) return QB + (BB - zB) * this.scale;
          if (BB <= nB.bottom) return nB.domTop + (BB - nB.top);
          zB = nB.bottom, QB = nB.domBottom
        }
      }
      fromDOM(BB) {
        for (let jB = 0, zB = 0, QB = 0;; jB++) {
          let nB = jB < this.viewports.length ? this.viewports[jB] : null;
          if (!nB || BB < nB.domTop) return zB + (BB - QB) / this.scale;
          if (BB <= nB.domBottom) return nB.top + (BB - nB.domTop);
          zB = nB.bottom, QB = nB.domBottom
        }
      }
      eq(BB) {
        return BB instanceof Un && (this.scale == BB.scale && this.viewports.length == BB.viewports.length && this.viewports.every(((jB, zB) => jB.from == BB.viewports[zB].from && jB.to == BB.viewports[zB].to)))
      }
    }

    function an(BB, jB) {
      if (1 == jB.scale) return BB;
      let zB = jB.toDOM(BB.top),
        QB = jB.toDOM(BB.bottom);
      return new TQ(BB.from, BB.length, zB, QB - zB, Array.isArray(BB._content) ? BB._content.map((BB => an(BB, jB))) : BB._content)
    }
    const pn = QB.p.define({
        combine: BB => BB.join(" ")
      }),
      rn = QB.p.define({
        combine: BB => BB.indexOf(!0) > -1
      }),
      sn = nB.e.newName(),
      Jn = nB.e.newName(),
      mn = nB.e.newName(),
      yn = {
        "&light": "." + Jn,
        "&dark": "." + mn
      };

    function kn(BB, jB, zB) {
      return new nB.e(jB, {
        finish: jB => /&/.test(jB) ? jB.replace(/&\w*/, (jB => {
          if ("&" == jB) return BB;
          if (!zB || !zB[jB]) throw new RangeError(`Unsupported selector: ${jB}`);
          return zB[jB]
        })) : BB + " " + jB
      })
    }
    const Gn = kn("." + sn, {
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
      }, yn),
      Ln = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      gn = MB.ie && MB.ie_version <= 11;
    class tn {
      constructor(BB) {
        this.view = BB, this.active = !1, this.editContext = null, this.selectionRange = new OB, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = BB.contentDOM, this.observer = new MutationObserver((jB => {
          for (let BB of jB) this.queue.push(BB);
          (MB.ie && MB.ie_version <= 11 || MB.ios && BB.composing) && jB.some((BB => "childList" == BB.type && BB.removedNodes.length || "characterData" == BB.type && BB.oldValue.length > BB.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !MB.android || !1 === BB.constructor.EDIT_CONTEXT || MB.chrome && MB.chrome_version < 126 || (this.editContext = new En(BB), BB.state.facet(Kj) && (BB.contentDOM.editContext = this.editContext.editContext)), gn && (this.onCharData = BB => {
          this.queue.push({
            target: BB.target,
            type: "characterData",
            oldValue: BB.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.rG = this.rG.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var BB;
          (null === (BB = this.view.docView) || void 0 === BB ? void 0 : BB.lastUpdate) < Date.now() - 75 && this.rG()
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
      rG() {
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
        if (this.gapIntersection && (BB.length != this.gaps.length || this.gaps.some(((jB, zB) => jB != BB[zB])))) {
          this.gapIntersection.disconnect();
          for (let jB of BB) this.gapIntersection.observe(jB);
          this.gaps = BB
        }
      }
      onSelectionChange(BB) {
        let jB = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: zB
        } = this, QB = this.selectionRange;
        if (zB.state.facet(Kj) ? zB.root.activeElement != this.dom : !WB(this.dom, QB)) return;
        let nB = QB.anchorNode && zB.docView.tile.nearest(QB.anchorNode);
        nB && nB.isWidget() && nB.widget.ignoreEvent(BB) ? jB || (this.selectionChanged = !1) : (MB.ie && MB.ie_version <= 11 || MB.android && MB.chrome) && !zB.state.selection.main.empty && QB.focusNode && lB(QB.focusNode, QB.focusOffset, QB.anchorNode, QB.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: BB
        } = this, jB = TB(BB.root);
        if (!jB) return !1;
        let zB = MB.safari && 11 == BB.root.nodeType && BB.root.activeElement == this.dom && function(BB, jB) {
          if (jB.getComposedRanges) {
            let zB = jB.getComposedRanges(BB.root)[0];
            if (zB) return Mn(BB, zB)
          }
          let zB = null;

          function QB(BB) {
            BB.preventDefault(), BB.stopImmediatePropagation(), zB = BB.getTargetRanges()[0]
          }
          return BB.contentDOM.addEventListener("beforeinput", QB, !0), BB.dom.ownerDocument.execCommand("indent"), BB.contentDOM.removeEventListener("beforeinput", QB, !0), zB ? Mn(BB, zB) : null
        }(this.view, jB) || jB;
        if (!zB || this.selectionRange.eq(zB)) return !1;
        let QB = WB(this.dom, zB);
        return QB && !this.selectionChanged && BB.inputState.lastFocusTime > Date.now() - 200 && BB.inputState.lastTouchTime < Date.now() - 300 && function(BB, jB) {
          let zB = jB.focusNode,
            QB = jB.focusOffset;
          if (!zB || jB.anchorNode != zB || jB.anchorOffset != QB) return !1;
          for (QB = Math.min(QB, CB(zB));;)
            if (QB) {
              if (1 != zB.nodeType) return !1;
              let BB = zB.childNodes[QB - 1];
              "false" == BB.contentEditable ? QB-- : (zB = BB, QB = CB(zB))
            } else {
              if (zB == BB) return !0;
              QB = wB(zB), zB = zB.parentNode
            }
        }(this.dom, zB) ? (this.view.inputState.lastFocusTime = 0, BB.docView.updateSelection(), !1) : (this.selectionRange.setRange(zB), QB && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(BB, jB) {
        this.selectionRange.set(BB.node, BB.offset, jB.node, jB.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let BB = 0,
          jB = null;
        for (let zB = this.dom; zB;)
          if (1 == zB.nodeType) !jB && BB < this.scrollTargets.length && this.scrollTargets[BB] == zB ? BB++ : jB || (jB = this.scrollTargets.slice(0, BB)), jB && jB.push(zB), zB = zB.assignedSlot || zB.parentNode;
          else {
            if (11 != zB.nodeType) break;
            zB = zB.host
          } if (BB < this.scrollTargets.length && !jB && (jB = this.scrollTargets.slice(0, BB)), jB) {
          for (let BB of this.scrollTargets) BB.removeEventListener("scroll", this.onScroll);
          for (let BB of this.scrollTargets = jB) BB.addEventListener("scroll", this.onScroll)
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
        this.active || (this.observer.observe(this.dom, Ln), gn && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), gn && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(BB, jB) {
        var zB;
        if (!this.delayedAndroidKey) {
          let BB = () => {
            let BB = this.delayedAndroidKey;
            if (BB) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = BB.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && BB.force && nj(this.dom, BB.key, BB.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(BB)
        }
        this.delayedAndroidKey && "Enter" != BB || (this.delayedAndroidKey = {
          key: BB,
          keyCode: jB,
          force: this.lastChange < Date.now() - 50 || !!(null === (zB = this.delayedAndroidKey) || void 0 === zB ? void 0 : zB.force)
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
        let jB = -1,
          zB = -1,
          QB = !1;
        for (let nB of BB) {
          let BB = this.readMutation(nB);
          BB && (BB.typeOver && (QB = !0), -1 == jB ? ({
            from: jB,
            to: zB
          } = BB) : (jB = Math.min(BB.from, jB), zB = Math.max(BB.to, zB)))
        }
        return {
          from: jB,
          to: zB,
          typeOver: QB
        }
      }
      readChange() {
        let {
          from: BB,
          to: jB,
          typeOver: zB
        } = this.processRecords(), QB = this.selectionChanged && WB(this.dom, this.selectionRange);
        if (BB < 0 && !QB) return null;
        BB > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let nB = new zQ(this.view, BB, jB, zB);
        return this.view.docView.domChanged = {
          newSel: nB.newSel ? nB.newSel.main : null
        }, nB
      }
      flush() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        BB && this.readSelectionRange();
        let jB = this.readChange();
        if (!jB) return this.view.requestMeasure(), !1;
        let zB = this.view.state,
          QB = nQ(this.view, jB);
        return this.view.state == zB && (jB.domChanged || jB.newSel && !NQ(this.view.state.selection, jB.newSel.main)) && this.view.update([]), QB
      }
      readMutation(BB) {
        let jB = this.view.docView.tile.nearest(BB.target);
        if (!jB || jB.isWidget()) return null;
        if (jB.markDirty("attributes" == BB.type), "childList" == BB.type) {
          let zB = Sn(jB, BB.previousSibling || BB.target.previousSibling, -1),
            QB = Sn(jB, BB.nextSibling || BB.target.nextSibling, 1);
          return {
            from: zB ? jB.posAfter(zB) : jB.posAtStart,
            to: QB ? jB.posBefore(QB) : jB.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == BB.type ? {
          from: jB.posAtStart,
          to: jB.posAtEnd,
          typeOver: BB.target.nodeValue == BB.oldValue
        } : null
      }
      setWindow(BB) {
        BB != this.win && (this.removeWindowListeners(this.win), this.win = BB, this.addWindowListeners(this.win))
      }
      addWindowListeners(BB) {
        BB.addEventListener("resize", this.rG), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : BB.addEventListener("beforeprint", this.onPrint), BB.addEventListener("scroll", this.onScroll), BB.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(BB) {
        BB.removeEventListener("scroll", this.onScroll), BB.removeEventListener("resize", this.rG), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : BB.removeEventListener("beforeprint", this.onPrint), BB.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(BB) {
        this.editContext && (this.editContext.update(BB), BB.startState.facet(Kj) != BB.state.facet(Kj) && (BB.view.contentDOM.editContext = BB.state.facet(Kj) ? this.editContext.editContext : null))
      }
      destroy() {
        var BB, jB, zB;
        this.stop(), null === (BB = this.intersection) || void 0 === BB || BB.disconnect(), null === (jB = this.gapIntersection) || void 0 === jB || jB.disconnect(), null === (zB = this.resizeScroll) || void 0 === zB || zB.disconnect();
        for (let QB of this.scrollTargets) QB.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function Sn(BB, jB, zB) {
      for (; jB;) {
        let QB = rz.get(jB);
        if (QB && QB.parent == BB) return QB;
        let nB = jB.parentNode;
        jB = nB != BB.dom ? nB : zB > 0 ? jB.nextSibling : jB.previousSibling
      }
      return null
    }

    function Mn(BB, jB) {
      let zB = jB.startContainer,
        QB = jB.startOffset,
        nB = jB.endContainer,
        dB = jB.endOffset,
        IB = BB.docView.domAtPos(BB.state.selection.main.anchor, 1);
      return lB(IB.node, IB.offset, nB, dB) && ([zB, QB, nB, dB] = [nB, dB, zB, QB]), {
        anchorNode: zB,
        anchorOffset: QB,
        focusNode: nB,
        focusOffset: dB
      }
    }
    class En {
      constructor(BB) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(BB.state);
        let jB = this.editContext = new window.EditContext({
          text: BB.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, BB.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(BB.state.selection.main.head)
        });
        this.handlers.textupdate = zB => {
          let nB = BB.state.selection.main,
            {
              anchor: dB,
              head: IB
            } = nB,
            NB = this.toEditorPos(zB.updateRangeStart),
            uB = this.toEditorPos(zB.updateRangeEnd);
          BB.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: zB.updateRangeStart,
            editorBase: NB,
            drifted: !1
          });
          let UB = uB - NB > zB.text.length;
          NB == this.from && dB < this.from ? NB = dB : uB == this.to && dB > this.to && (uB = dB);
          let aB = IQ(BB.state.sliceDoc(NB, uB), zB.text, (UB ? nB.from : nB.to) - NB, UB ? "end" : null);
          if (!aB) {
            let jB = QB.i.single(this.toEditorPos(zB.selectionStart), this.toEditorPos(zB.selectionEnd));
            return void(NQ(jB, nB) || BB.dispatch({
              selection: jB,
              userEvent: "select"
            }))
          }
          let pB = {
            from: aB.from + NB,
            to: aB.toA + NB,
            insert: QB.G.of(zB.text.slice(aB.from, aB.toB).split("\n"))
          };
          if ((MB.mac || MB.android) && pB.from == IB - 1 && /^\. ?$/.test(zB.text) && "off" == BB.contentDOM.getAttribute("autocorrect") && (pB = {
              from: NB,
              to: uB,
              insert: QB.G.of([zB.text.replace(".", " ")])
            }), this.pendingContextChange = pB, !BB.state.readOnly) {
            let jB = this.to - this.from + (pB.to - pB.from + pB.insert.length);
            dQ(BB, pB, QB.i.single(this.toEditorPos(zB.selectionStart, jB), this.toEditorPos(zB.selectionEnd, jB)))
          }
          this.pendingContextChange && (this.revertPending(BB.state), this.setSelection(BB.state)), pB.from < pB.to && !pB.insert.length && BB.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(jB.text.slice(Math.max(0, zB.updateRangeStart - 1), Math.min(jB.text.length, zB.updateRangeStart + 1))) && this.handlers.compositionend(zB)
        }, this.handlers.characterboundsupdate = zB => {
          let QB = [],
            nB = null;
          for (let jB = this.toEditorPos(zB.rangeStart), dB = this.toEditorPos(zB.rangeEnd); jB < dB; jB++) {
            let zB = BB.coordsForChar(jB);
            nB = zB && new DOMRect(zB.left, zB.top, zB.right - zB.left, zB.bottom - zB.top) || nB || new DOMRect, QB.push(nB)
          }
          jB.updateCharacterBounds(zB.rangeStart, QB)
        }, this.handlers.textformatupdate = jB => {
          let zB = [];
          for (let BB of jB.getTextFormats()) {
            let jB = BB.underlineStyle,
              QB = BB.underlineThickness;
            if (!/none/i.test(jB) && !/none/i.test(QB)) {
              let nB = this.toEditorPos(BB.rangeStart),
                dB = this.toEditorPos(BB.rangeEnd);
              if (nB < dB) {
                let BB = `text-decoration: underline ${/^[a-z]/.test(jB)?jB+" ":"Dashed"==jB?"dashed ":"Squiggle"==jB?"wavy ":""}${/thin/i.test(QB)?1:2}px`;
                zB.push(FB.mark({
                  attributes: {
                    style: BB
                  }
                }).range(nB, dB))
              }
            }
          }
          BB.dispatch({
            effects: wj.of(FB.set(zB))
          })
        }, this.handlers.compositionstart = () => {
          BB.inputState.composing < 0 && (BB.inputState.composing = 0, BB.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (BB.inputState.composing = -1, BB.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: jB
            } = this.composing;
            this.composing = null, jB && this.reset(BB.state)
          }
        };
        for (let zB in this.handlers) jB.addEventListener(zB, this.handlers[zB]);
        this.measureReq = {
          read: BB => {
            this.editContext.updateControlBounds(BB.contentDOM.getBoundingClientRect());
            let jB = TB(BB.root);
            jB && jB.rangeCount && this.editContext.updateSelectionBounds(jB.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(BB) {
        let jB = 0,
          zB = !1,
          QB = this.pendingContextChange;
        return BB.changes.iterChanges(((nB, dB, IB, NB, uB) => {
          if (zB) return;
          let UB = uB.length - (dB - nB);
          if (QB && dB >= QB.to) {
            if (QB.from == nB && QB.to == dB && QB.insert.eq(uB)) return QB = this.pendingContextChange = null, jB += UB, void(this.to += UB);
            QB = null, this.revertPending(BB.state)
          }
          if (nB += jB, (dB += jB) <= this.from) this.from += UB, this.to += UB;
          else if (nB < this.to) {
            if (nB < this.from || dB > this.to || this.to - this.from + uB.length > 3e4) return void(zB = !0);
            this.editContext.updateText(this.toContextPos(nB), this.toContextPos(dB), uB.toString()), this.to += UB
          }
          jB += UB
        })), QB && !zB && this.revertPending(BB.state), !zB
      }
      update(BB) {
        let jB = this.pendingContextChange,
          zB = BB.startState.selection.main;
        this.composing && (this.composing.drifted || !BB.changes.touchesRange(zB.from, zB.to) && BB.transactions.some((BB => !BB.isUserEvent("input.type") && BB.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = BB.changes.mapPos(this.composing.editorBase)) : this.applyEdits(BB) && this.rangeIsValid(BB.state) ? (BB.docChanged || BB.selectionSet || jB) && this.setSelection(BB.state) : (this.pendingContextChange = null, this.reset(BB.state)), (BB.geometryChanged || BB.docChanged || BB.selectionSet) && BB.view.requestMeasure(this.measureReq)
      }
      resetRange(BB) {
        let {
          head: jB
        } = BB.selection.main;
        this.from = Math.max(0, jB - 1e4), this.to = Math.min(BB.doc.length, jB + 1e4)
      }
      reset(BB) {
        this.resetRange(BB), this.editContext.updateText(0, this.editContext.text.length, BB.doc.sliceString(this.from, this.to)), this.setSelection(BB)
      }
      revertPending(BB) {
        let jB = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(jB.from), this.toContextPos(jB.from + jB.insert.length), BB.doc.sliceString(jB.from, jB.to))
      }
      setSelection(BB) {
        let {
          main: jB
        } = BB.selection, zB = this.toContextPos(Math.max(this.from, Math.min(this.to, jB.anchor))), QB = this.toContextPos(jB.head);
        this.editContext.selectionStart == zB && this.editContext.selectionEnd == QB || this.editContext.updateSelection(zB, QB)
      }
      rangeIsValid(BB) {
        let {
          head: jB
        } = BB.selection.main;
        return !(this.from > 0 && jB - this.from < 500 || this.to < BB.doc.length && this.to - jB < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        BB = Math.min(BB, jB);
        let zB = this.composing;
        return zB && zB.drifted ? zB.editorBase + (BB - zB.contextBase) : BB + this.from
      }
      toContextPos(BB) {
        let jB = this.composing;
        return jB && jB.drifted ? jB.contextBase + (BB - jB.editorBase) : BB - this.from
      }
      destroy() {
        for (let BB in this.handlers) this.editContext.removeEventListener(BB, this.handlers[BB])
      }
    }
    class qn {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get I5() {
        return this.viewState.I5
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
        var jB;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), BB.parent && BB.parent.appendChild(this.dom);
        let {
          dispatch: zB
        } = BB;
        this.dispatchTransactions = BB.dispatchTransactions || zB && (BB => BB.forEach((BB => zB(BB, this)))) || (BB => this.update(BB)), this.dispatch = this.dispatch.bind(this), this._root = BB.root || function(BB) {
          for (; BB;) {
            if (BB && (9 == BB.nodeType || 11 == BB.nodeType && BB.host)) return BB;
            BB = BB.assignedSlot || BB.parentNode
          }
          return null
        }(BB.parent) || document, this.viewState = new Qn(this, BB.state || QB.l.create(BB)), BB.scrollTo && BB.scrollTo.is(lj) && (this.viewState.scrollTarget = BB.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(cj).map((BB => new vj(BB)));
        for (let QB of this.plugins) QB.update(this);
        this.observer = new tn(this), this.inputState = new uQ(this), this.inputState.ensureHandlers(this.plugins), this.docView = new Xz(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (jB = document.fonts) || void 0 === jB ? void 0 : jB.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var BB = arguments.length, jB = new Array(BB), zB = 0; zB < BB; zB++) jB[zB] = arguments[zB];
        let nB = 1 == jB.length && jB[0] instanceof QB.I ? jB : 1 == jB.length && Array.isArray(jB[0]) ? jB[0] : [this.state.update(...jB)];
        this.dispatchTransactions(nB, this)
      }
      update(BB) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let jB, zB = !1,
          nB = !1,
          dB = this.state;
        for (let QB of BB) {
          if (QB.startState != dB) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          dB = QB.state
        }
        if (this.destroyed) return void(this.viewState.state = dB);
        let IB = this.hasFocus,
          NB = 0,
          uB = null;
        BB.some((BB => BB.annotation(HQ))) ? (this.inputState.notifiedFocused = IB, NB = 1) : IB != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = IB, uB = DQ(dB, IB), uB || (NB = 1));
        let UB = this.observer.delayedAndroidKey,
          aB = null;
        if (UB ? (this.observer.clearDelayedAndroidKey(), aB = this.observer.readChange(), (aB && !this.state.doc.eq(dB.doc) || !this.state.selection.eq(dB.selection)) && (aB = null)) : this.observer.clear(), dB.facet(QB.l.phrases) != this.state.facet(QB.l.phrases)) return this.setState(dB);
        jB = az.create(this, dB, BB), jB.flags |= NB;
        let pB = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let jB of BB) {
            if (pB && (pB = pB.map(jB.changes)), jB.scrollIntoView) {
              let {
                main: BB
              } = jB.state.selection, {
                x: zB,
                y: nB
              } = this.state.facet(qn.cursorScrollMargin);
              pB = new ej(BB.empty ? BB : QB.i.cursor(BB.head, BB.head > BB.anchor ? -1 : 1), "nearest", "nearest", nB, zB)
            }
            for (let BB of jB.effects) BB.is(lj) && (pB = BB.value.clip(this.state))
          }
          this.viewState.update(jB, pB), this.bidiCache = Dn.update(this.bidiCache, jB.changes), jB.empty || (this.updatePlugins(jB), this.inputState.update(jB)), zB = this.docView.update(jB), this.state.facet(uz) != this.styleModules && this.mountStyles(), nB = this.updateAttrs(), this.showAnnouncements(BB), this.docView.updateSelection(zB, BB.some((BB => BB.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (jB.startState.facet(pn) != jB.state.facet(pn) && (this.viewState.mustMeasureContent = !0), (zB || nB || pB || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), zB && this.docViewUpdate(), !jB.empty)
          for (let QB of this.state.facet(Vj)) try {
            QB(jB)
          } catch (rB) {
            xj(this.state, rB, "update listener")
          }(uB || aB) && Promise.resolve().then((() => {
            uB && this.state == uB.startState && this.dispatch(uB), aB && !nQ(this, aB) && UB.force && nj(this.contentDOM, UB.key, UB.keyCode)
          }))
      }
      setState(BB) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = BB);
        this.updateState = 2;
        let jB = this.hasFocus;
        try {
          for (let BB of this.plugins) BB.destroy(this);
          this.viewState = new Qn(this, BB), this.plugins = BB.facet(cj).map((BB => new vj(BB))), this.pluginMap.clear();
          for (let BB of this.plugins) BB.update(this);
          this.docView.destroy(), this.docView = new Xz(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        jB && this.focus(), this.requestMeasure()
      }
      updatePlugins(BB) {
        let jB = BB.startState.facet(cj),
          zB = BB.state.facet(cj);
        if (jB != zB) {
          let QB = [];
          for (let nB of zB) {
            let zB = jB.indexOf(nB);
            if (zB < 0) QB.push(new vj(nB));
            else {
              let jB = this.plugins[zB];
              jB.mustUpdate = BB, QB.push(jB)
            }
          }
          for (let jB of this.plugins) jB.mustUpdate != BB && jB.destroy(this);
          this.plugins = QB, this.pluginMap.clear()
        } else
          for (let QB of this.plugins) QB.mustUpdate = BB;
        for (let QB = 0; QB < this.plugins.length; QB++) this.plugins[QB].update(this);
        jB != zB && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let jB of this.plugins) {
          let zB = jB.value;
          if (zB && zB.docViewUpdate) try {
            zB.docViewUpdate(this)
          } catch (BB) {
            xj(this.state, BB, "doc view update listener")
          }
        }
      }
      measure() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, BB && this.observer.forceFlush();
        let jB = null,
          zB = this.viewState.scrollParent,
          QB = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: nB,
            scrollAnchorHeight: dB
          } = this.viewState;
        Math.abs(QB - this.viewState.scrollOffset) > 1 && (dB = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let BB = 0;; BB++) {
            if (dB < 0)
              if (dj(zB || this.win)) nB = -1, dB = this.viewState.heightMap.height;
              else {
                let BB = this.viewState.scrollAnchorAt(QB);
                nB = BB.from, dB = BB.top
              } this.updateState = 1;
            let NB = this.viewState.measure();
            if (!NB && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (BB > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let uB = [];
            4 & NB || ([this.measureRequests, uB] = [uB, this.measureRequests]);
            let UB = uB.map((BB => {
                try {
                  return BB.read(this)
                } catch (jB) {
                  return xj(this.state, jB), Hn
                }
              })),
              aB = az.create(this, this.state, []),
              pB = !1;
            aB.flags |= NB, jB ? jB.flags |= NB : jB = aB, this.updateState = 2, aB.empty || (this.updatePlugins(aB), this.inputState.update(aB), this.updateAttrs(), pB = this.docView.update(aB), pB && this.docViewUpdate());
            for (let BB = 0; BB < uB.length; BB++)
              if (UB[BB] != Hn) try {
                let jB = uB[BB];
                jB.write && jB.write(UB[BB], this)
              } catch (IB) {
                xj(this.state, IB)
              }
            if (pB && this.docView.updateSelection(!0), !aB.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, dB = -1;
                  continue
                } {
                  let BB = ((nB < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(nB).top) - dB) / this.scaleY;
                  if ((BB > 1 || BB < -1) && (zB == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    QB += BB, zB ? zB.scrollTop += BB : this.win.scrollBy(0, BB), dB = -1;
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
        if (jB && !jB.empty)
          for (let NB of this.state.facet(Vj)) NB(jB)
      }
      get themeClasses() {
        return sn + " " + (this.state.facet(rn) ? mn : Jn) + " " + this.state.facet(pn)
      }
      updateAttrs() {
        let BB = Fn(this, Rj, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          jB = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(Kj) ? "true" : "false",
            class: "cm-content",
            style: `${MB.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (jB["aria-readonly"] = "true"), Fn(this, Oj, jB);
        let zB = this.observer.ignore((() => {
          let zB = fB(this.contentDOM, this.contentAttrs, jB),
            QB = fB(this.dom, this.editorAttrs, BB);
          return zB || QB
        }));
        return this.editorAttrs = BB, this.contentAttrs = jB, zB
      }
      showAnnouncements(BB) {
        let jB = !0;
        for (let zB of BB)
          for (let BB of zB.effects)
            if (BB.is(qn.announce)) {
              jB && (this.announceDOM.textContent = ""), jB = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = BB.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(uz);
        let BB = this.state.facet(qn.cspNonce);
        nB.e.mount(this.root, this.styleModules.concat(Gn).reverse(), BB ? {
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
            for (let jB = 0; jB < this.measureRequests.length; jB++)
              if (this.measureRequests[jB].key === BB.key) return void(this.measureRequests[jB] = BB);
          this.measureRequests.push(BB)
        }
      }
      plugin(BB) {
        let jB = this.pluginMap.get(BB);
        return (void 0 === jB || jB && jB.plugin != BB) && this.pluginMap.set(BB, jB = this.plugins.find((jB => jB.plugin == BB)) || null), jB && jB.update(this).value
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
      moveByChar(BB, jB, zB) {
        return Kz(this, BB, lz(this, BB, jB, zB))
      }
      moveByGroup(BB, jB) {
        return Kz(this, BB, lz(this, BB, jB, (jB => function(BB, jB, zB) {
          let nB = BB.state.charCategorizer(jB),
            dB = nB(zB);
          return BB => {
            let jB = nB(BB);
            return dB == QB.e.Space && (dB = jB), dB == jB
          }
        }(this, BB.head, jB))))
      }
      visualLineSide(BB, jB) {
        let zB = this.bidiSpans(BB),
          nB = this.textDirectionAt(BB.from),
          dB = zB[jB ? zB.length - 1 : 0];
        return QB.i.cursor(dB.side(jB, nB) + BB.from, dB.forward(!jB, nB) ? 1 : -1)
      }
      moveToLineBoundary(BB, jB) {
        return function(BB, jB, zB, nB) {
          let dB = ez(BB, jB.head, jB.assoc || -1),
            IB = nB && dB.type == DB.Text && (BB.lineWrapping || dB.widgetLineBreaks) ? BB.coordsAtPos(jB.assoc < 0 && jB.head > dB.from ? jB.head - 1 : jB.head) : null;
          if (IB) {
            let jB = BB.dom.getBoundingClientRect(),
              nB = BB.textDirectionAt(dB.from),
              NB = BB.posAtCoords({
                x: zB == (nB == Uj.LTR) ? jB.right - 1 : jB.left + 1,
                y: (IB.top + IB.bottom) / 2
              });
            if (null != NB) return QB.i.cursor(NB, zB ? -1 : 1)
          }
          return QB.i.cursor(zB ? dB.to : dB.from, zB ? -1 : 1)
        }(this, BB, jB, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(BB, jB, zB) {
        return Kz(this, BB, function(BB, jB, zB, nB) {
          let dB = jB.head,
            IB = zB ? 1 : -1;
          if (dB == (zB ? BB.state.doc.length : 0)) return QB.i.cursor(dB, jB.assoc);
          let NB, uB = jB.goalColumn,
            UB = BB.contentDOM.getBoundingClientRect(),
            aB = BB.coordsAtPos(dB, jB.assoc || ((jB.empty ? zB : jB.head == jB.from) ? 1 : -1)),
            pB = BB.documentTop;
          if (aB) null == uB && (uB = aB.left - UB.left), NB = IB < 0 ? aB.top : aB.bottom;
          else {
            let jB = BB.viewState.lineBlockAt(dB);
            null == uB && (uB = Math.min(UB.right - UB.left, BB.defaultCharacterWidth * (dB - jB.from))), NB = (IB < 0 ? jB.top : jB.bottom) + pB
          }
          let rB = UB.left + uB,
            sB = BB.viewState.heightOracle.textHeight >> 1,
            JB = null !== nB && void 0 !== nB ? nB : sB;
          for (let mB = 0;; mB += sB) {
            let jB = NB + (JB + mB) * IB,
              nB = cz(BB, {
                x: rB,
                y: jB
              }, !1, IB);
            if (zB ? jB > UB.bottom : jB < UB.top) return QB.i.cursor(nB.pos, nB.assoc);
            let dB = BB.coordsAtPos(nB.pos, nB.assoc),
              aB = dB ? (dB.top + dB.bottom) / 2 : 0;
            if (!dB || (zB ? aB > NB : aB < NB)) return QB.i.cursor(nB.pos, nB.assoc, void 0, uB)
          }
        }(this, BB, jB, zB))
      }
      domAtPos(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(BB, jB)
      }
      posAtDOM(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(BB, jB)
      }
      posAtCoords(BB) {
        let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let zB = cz(this, BB, jB);
        return zB && zB.pos
      }
      posAndSideAtCoords(BB) {
        let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), cz(this, BB, jB)
      }
      coordsAtPos(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let zB = this.docView.coordsAt(BB, jB);
        if (!zB || zB.left == zB.right) return zB;
        let QB = this.state.doc.lineAt(BB),
          nB = this.bidiSpans(QB);
        return cB(zB, nB[Lj.find(nB, BB - QB.from, -1, jB)].dir == Uj.LTR == jB > 0)
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
        return !this.state.facet(Tj) || BB < this.viewport.from || BB > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(BB))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(BB) {
        if (BB.length > fn) return ij(BB.length);
        let jB, zB = this.textDirectionAt(BB.from);
        for (let nB of this.bidiCache)
          if (nB.from == BB.from && nB.dir == zB && (nB.fresh || gj(nB.isolates, jB = dz(this, BB)))) return nB.order;
        jB || (jB = dz(this, BB));
        let QB = Ej(BB.text, zB, jB);
        return this.bidiCache.push(new Dn(BB.from, BB.to, zB, jB, !0, QB)), QB
      }
      get hasFocus() {
        var BB;
        return (this.dom.ownerDocument.hasFocus() || MB.safari && (null === (BB = this.inputState) || void 0 === BB ? void 0 : BB.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          zj(this.contentDOM), this.docView.updateSelection()
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
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var zB, nB, dB, IB;
        return lj.of(new ej("number" == typeof BB ? QB.i.cursor(BB) : BB, null !== (zB = jB.y) && void 0 !== zB ? zB : "nearest", null !== (nB = jB.x) && void 0 !== nB ? nB : "nearest", null !== (dB = jB.yMargin) && void 0 !== dB ? dB : 5, null !== (IB = jB.xMargin) && void 0 !== IB ? IB : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: BB,
          scrollLeft: jB
        } = this.scrollDOM, zB = this.viewState.scrollAnchorAt(BB);
        return lj.of(new ej(QB.i.cursor(zB.from), "start", "start", zB.top - BB, jB, !0))
      }
      setTabFocusMode(BB) {
        null == BB ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof BB ? this.inputState.tabFocusMode = BB ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + BB)
      }
      static domEventHandlers(BB) {
        return bj.define((() => ({})), {
          eventHandlers: BB
        })
      }
      static domEventObservers(BB) {
        return bj.define((() => ({})), {
          eventObservers: BB
        })
      }
      static theme(BB, jB) {
        let zB = nB.e.newName(),
          QB = [pn.of(zB), uz.of(kn(`.${zB}`, BB))];
        return jB && jB.dark && QB.push(rn.of(!0)), QB
      }
      static baseTheme(BB) {
        return QB.u.lowest(uz.of(kn("." + sn, BB, yn)))
      }
      static findFromDOM(BB) {
        var jB;
        let zB = BB.querySelector(".cm-content"),
          QB = zB && rz.get(zB) || rz.get(BB);
        return (null === (jB = null === QB || void 0 === QB ? void 0 : QB.root) || void 0 === jB ? void 0 : jB.view) || null
      }
    }
    qn.styleModule = uz, qn.inputHandler = hj, qn.clipboardInputFilter = Zj, qn.clipboardOutputFilter = Aj, qn.scrollHandler = Wj, qn.focusChangeEffect = Xj, qn.perLineTextDirection = Tj, qn.exceptionSink = Yj, qn.updateListener = Vj, qn.editable = Kj, qn.mouseSelectionStyle = Fj, qn.dragMovesSelection = Dj, qn.clickAddsSelectionRange = Hj, qn.pQ = Bz, qn.blockWrappers = jz, qn.outerDecorations = zz, qn.atomicRanges = Qz, qn.bidiIsolatedRanges = nz, qn.cursorScrollMargin = QB.p.define({
      combine: BB => {
        let jB = 5,
          zB = 5;
        for (let QB of BB) "number" == typeof QB ? jB = zB = QB : ({
          x: jB,
          y: zB
        } = QB);
        return {
          x: jB,
          y: zB
        }
      }
    }), qn.scrollMargins = Iz, qn.darkTheme = rn, qn.cspNonce = QB.p.define({
      combine: BB => BB.length ? BB[0] : ""
    }), qn.contentAttributes = Oj, qn.editorAttributes = Rj, qn.lineWrapping = qn.contentAttributes.of({
      class: "cm-lineWrapping"
    }), qn.announce = QB.D.define();
    const fn = 4096,
      Hn = {};
    class Dn {
      constructor(BB, jB, zB, QB, nB, dB) {
        this.from = BB, this.to = jB, this.dir = zB, this.isolates = QB, this.fresh = nB, this.order = dB
      }
      static update(BB, jB) {
        if (jB.empty && !BB.some((BB => BB.fresh))) return BB;
        let zB = [],
          QB = BB.length ? BB[BB.length - 1].dir : Uj.LTR;
        for (let nB = Math.max(0, BB.length - 10); nB < BB.length; nB++) {
          let dB = BB[nB];
          dB.dir != QB || jB.touchesRange(dB.from, dB.to) || zB.push(new Dn(jB.mapPos(dB.from, 1), jB.mapPos(dB.to, -1), dB.dir, dB.isolates, !1, dB.order))
        }
        return zB
      }
    }

    function Fn(BB, jB, zB) {
      for (let QB = BB.state.facet(jB), nB = QB.length - 1; nB >= 0; nB--) {
        let jB = QB[nB],
          dB = "function" == typeof jB ? jB(BB) : jB;
        dB && EB(dB, zB)
      }
      return zB
    }
    const Yn = MB.mac ? "mac" : MB.windows ? "win" : MB.linux ? "linux" : "key";

    function Vn(BB, jB, zB) {
      return jB.altKey && (BB = "Alt-" + BB), jB.ctrlKey && (BB = "Ctrl-" + BB), jB.metaKey && (BB = "Meta-" + BB), !1 !== zB && jB.shiftKey && (BB = "Shift-" + BB), BB
    }
    const hn = QB.u.default(qn.domEventHandlers({
        keydown: (BB, jB) => wn(An(jB.state), BB, jB, "editor")
      })),
      Xn = QB.p.define({
        enables: hn
      }),
      Zn = new WeakMap;

    function An(BB) {
      let jB = BB.facet(Xn),
        zB = Zn.get(jB);
      return zB || Zn.set(jB, zB = function(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Yn,
          zB = Object.create(null),
          QB = Object.create(null),
          nB = (BB, jB) => {
            let zB = QB[BB];
            if (null == zB) QB[BB] = jB;
            else if (zB != jB) throw new Error("Key binding " + BB + " is used both as a regular binding and as a multi-stroke prefix")
          },
          dB = (BB, QB, dB, IB, NB) => {
            var uB, UB;
            let aB = zB[BB] || (zB[BB] = Object.create(null)),
              pB = QB.split(/ (?!$)/).map((BB => function(BB, jB) {
                const zB = BB.split(/-(?!$)/);
                let QB, nB, dB, IB, NB = zB[zB.length - 1];
                "Space" == NB && (NB = " ");
                for (let uB = 0; uB < zB.length - 1; ++uB) {
                  const BB = zB[uB];
                  if (/^(cmd|meta|m)$/i.test(BB)) IB = !0;
                  else if (/^a(lt)?$/i.test(BB)) QB = !0;
                  else if (/^(c|ctrl|control)$/i.test(BB)) nB = !0;
                  else if (/^s(hift)?$/i.test(BB)) dB = !0;
                  else {
                    if (!/^mod$/i.test(BB)) throw new Error("Unrecognized modifier name: " + BB);
                    "mac" == jB ? IB = !0 : nB = !0
                  }
                }
                return QB && (NB = "Alt-" + NB), nB && (NB = "Ctrl-" + NB), IB && (NB = "Meta-" + NB), dB && (NB = "Shift-" + NB), NB
              }(BB, jB)));
            for (let jB = 1; jB < pB.length; jB++) {
              let zB = pB.slice(0, jB).join(" ");
              nB(zB, !0), aB[zB] || (aB[zB] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [jB => {
                  let QB = Pn = {
                    view: jB,
                    prefix: zB,
                    scope: BB
                  };
                  return setTimeout((() => {
                    Pn == QB && (Pn = null)
                  }), Wn), !0
                }]
              })
            }
            let rB = pB.join(" ");
            nB(rB, !1);
            let sB = aB[rB] || (aB[rB] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (UB = null === (uB = aB._any) || void 0 === uB ? void 0 : uB.run) || void 0 === UB ? void 0 : UB.slice()) || []
            });
            dB && sB.run.push(dB), IB && (sB.preventDefault = !0), NB && (sB.stopPropagation = !0)
          };
        for (let IB of BB) {
          let BB = IB.scope ? IB.scope.split(" ") : ["editor"];
          if (IB.any)
            for (let jB of BB) {
              let BB = zB[jB] || (zB[jB] = Object.create(null));
              BB._any || (BB._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: QB
              } = IB;
              for (let jB in BB) BB[jB].run.push((BB => QB(BB, en)))
            }
          let QB = IB[jB] || IB.key;
          if (QB)
            for (let jB of BB) dB(jB, QB, IB.run, IB.preventDefault, IB.stopPropagation), IB.shift && dB(jB, "Shift-" + QB, IB.shift, IB.preventDefault, IB.stopPropagation)
        }
        return zB
      }(jB.reduce(((BB, jB) => BB.concat(jB)), []))), zB
    }

    function Tn(BB, jB, zB) {
      return wn(An(BB.state), jB, BB, zB)
    }
    let Pn = null;
    const Wn = 4e3;
    let en = null;

    function wn(BB, jB, zB, nB) {
      en = jB;
      let UB = function(BB) {
          var jB = !(NB && BB.metaKey && BB.shiftKey && !BB.ctrlKey && !BB.altKey || uB && BB.shiftKey && BB.key && 1 == BB.key.length || "Unidentified" == BB.key) && BB.key || (BB.shiftKey ? IB : dB)[BB.keyCode] || BB.key || "Unidentified";
          return "Esc" == jB && (jB = "Escape"), "Del" == jB && (jB = "Delete"), "Left" == jB && (jB = "ArrowLeft"), "Up" == jB && (jB = "ArrowUp"), "Right" == jB && (jB = "ArrowRight"), "Down" == jB && (jB = "ArrowDown"), jB
        }(jB),
        aB = (0, QB.L)(UB, 0),
        pB = (0, QB.M)(aB) == UB.length && " " != UB,
        rB = "",
        sB = !1,
        JB = !1,
        mB = !1;
      Pn && Pn.view == zB && Pn.scope == nB && (rB = Pn.prefix + " ", sQ.indexOf(jB.keyCode) < 0 && (JB = !0, Pn = null));
      let yB, kB, GB = new Set,
        LB = BB => {
          if (BB) {
            for (let jB of BB.run)
              if (!GB.has(jB) && (GB.add(jB), jB(zB))) return BB.stopPropagation && (mB = !0), !0;
            BB.preventDefault && (BB.stopPropagation && (mB = !0), JB = !0)
          }
          return !1
        },
        gB = BB[nB];
      return gB && (LB(gB[rB + Vn(UB, jB, !pB)]) ? sB = !0 : !pB || !(jB.altKey || jB.metaKey || jB.ctrlKey) || MB.windows && jB.ctrlKey && jB.altKey || MB.mac && jB.altKey && !jB.ctrlKey && !jB.metaKey || !(yB = dB[jB.keyCode]) || yB == UB ? pB && jB.shiftKey && LB(gB[rB + Vn(UB, jB, !0)]) && (sB = !0) : (LB(gB[rB + Vn(yB, jB, !0)]) || jB.shiftKey && (kB = IB[jB.keyCode]) != UB && kB != yB && LB(gB[rB + Vn(kB, jB, !1)])) && (sB = !0), !sB && LB(gB._any) && (sB = !0)), JB && (sB = !0), sB && mB && jB.stopPropagation(), en = null, sB
    }
    class xn {
      constructor(BB, jB, zB, QB, nB) {
        this.className = BB, this.left = jB, this.top = zB, this.width = QB, this.height = nB
      }
      draw() {
        let BB = document.createElement("div");
        return BB.className = this.className, this.adjust(BB), BB
      }
      update(BB, jB) {
        return jB.className == this.className && (this.adjust(BB), !0)
      }
      adjust(BB) {
        BB.style.left = this.left + "px", BB.style.top = this.top + "px", null != this.width && (BB.style.width = this.width + "px"), BB.style.height = this.height + "px"
      }
      eq(BB) {
        return this.left == BB.left && this.top == BB.top && this.width == BB.width && this.height == BB.height && this.className == BB.className
      }
      static forRange(BB, jB, zB) {
        if (zB.empty) {
          let QB = BB.coordsAtPos(zB.head, zB.assoc || 1);
          if (!QB) return [];
          let nB = Kn(BB);
          return [new xn(jB, QB.left - nB.left, QB.top - nB.top, null, QB.bottom - QB.top)]
        }
        return function(BB, jB, zB) {
          if (zB.to <= BB.viewport.from || zB.from >= BB.viewport.to) return [];
          let QB = Math.max(zB.from, BB.viewport.from),
            nB = Math.min(zB.to, BB.viewport.to),
            dB = BB.textDirection == Uj.LTR,
            IB = BB.contentDOM,
            NB = IB.getBoundingClientRect(),
            uB = Kn(BB),
            UB = IB.querySelector(".cm-line"),
            aB = UB && window.getComputedStyle(UB),
            pB = NB.left + (aB ? parseInt(aB.paddingLeft) + Math.min(0, parseInt(aB.textIndent)) : 0),
            rB = NB.right - (aB ? parseInt(aB.paddingRight) : 0),
            sB = ez(BB, QB, 1),
            JB = ez(BB, nB, -1),
            mB = sB.type == DB.Text ? sB : null,
            yB = JB.type == DB.Text ? JB : null;
          mB && (BB.lineWrapping || sB.widgetLineBreaks) && (mB = Cn(BB, QB, 1, mB));
          yB && (BB.lineWrapping || JB.widgetLineBreaks) && (yB = Cn(BB, nB, -1, yB));
          if (mB && yB && mB.from == yB.from && mB.to == yB.to) return GB(LB(zB.from, zB.to, mB));
          {
            let jB = mB ? LB(zB.from, null, mB) : gB(sB, !1),
              QB = yB ? LB(null, zB.to, yB) : gB(JB, !0),
              nB = [];
            return (mB || sB).to < (yB || JB).from - (mB && yB ? 1 : 0) || sB.widgetLineBreaks > 1 && jB.bottom + BB.defaultLineHeight / 2 < QB.top ? nB.push(kB(pB, jB.bottom, rB, QB.top)) : jB.bottom < QB.top && BB.elementAtHeight((jB.bottom + QB.top) / 2).type == DB.Text && (jB.bottom = QB.top = (jB.bottom + QB.top) / 2), GB(jB).concat(nB).concat(GB(QB))
          }

          function kB(BB, zB, QB, nB) {
            return new xn(jB, BB - uB.left, zB - uB.top, Math.max(0, QB - BB), nB - zB)
          }

          function GB(BB) {
            let {
              top: jB,
              bottom: zB,
              horizontal: QB
            } = BB, nB = [];
            for (let dB = 0; dB < QB.length; dB += 2) nB.push(kB(QB[dB], jB, QB[dB + 1], zB));
            return nB
          }

          function LB(jB, zB, QB) {
            let nB = 1e9,
              IB = -1e9,
              NB = [];

            function uB(jB, zB, uB, UB, aB) {
              let sB = BB.coordsAtPos(jB, jB == QB.to ? -2 : 2),
                JB = BB.coordsAtPos(uB, uB == QB.from ? 2 : -2);
              sB && JB && (nB = Math.min(sB.top, JB.top, nB), IB = Math.max(sB.bottom, JB.bottom, IB), aB == Uj.LTR ? NB.push(dB && zB ? pB : sB.left, dB && UB ? rB : JB.right) : NB.push(!dB && UB ? pB : JB.left, !dB && zB ? rB : sB.right))
            }
            let UB = null !== jB && void 0 !== jB ? jB : QB.from,
              aB = null !== zB && void 0 !== zB ? zB : QB.to;
            for (let dB of BB.I5)
              if (dB.to > UB && dB.from < aB)
                for (let QB = Math.max(dB.from, UB), nB = Math.min(dB.to, aB);;) {
                  let dB = BB.state.doc.lineAt(QB);
                  for (let IB of BB.bidiSpans(dB)) {
                    let BB = IB.from + dB.from,
                      NB = IB.to + dB.from;
                    if (BB >= nB) break;
                    NB > QB && uB(Math.max(BB, QB), null == jB && BB <= UB, Math.min(NB, nB), null == zB && NB >= aB, IB.dir)
                  }
                  if (QB = dB.to + 1, QB >= nB) break
                }
            return 0 == NB.length && uB(UB, null == jB, aB, null == zB, BB.textDirection), {
              top: nB,
              bottom: IB,
              horizontal: NB
            }
          }

          function gB(BB, jB) {
            let zB = NB.top + (jB ? BB.top : BB.bottom);
            return {
              top: zB,
              bottom: zB,
              horizontal: []
            }
          }
        }(BB, jB, zB)
      }
    }

    function Kn(BB) {
      let jB = BB.scrollDOM.getBoundingClientRect();
      return {
        left: (BB.textDirection == Uj.LTR ? jB.left : jB.right - BB.scrollDOM.clientWidth * BB.scaleX) - BB.scrollDOM.scrollLeft * BB.scaleX,
        top: jB.top - BB.scrollDOM.scrollTop * BB.scaleY
      }
    }

    function Cn(BB, jB, zB, QB) {
      let nB = BB.coordsAtPos(jB, 2 * zB);
      if (!nB) return QB;
      let dB = BB.dom.getBoundingClientRect(),
        IB = (nB.top + nB.bottom) / 2,
        NB = BB.posAtCoords({
          x: dB.left + 1,
          y: IB
        }),
        uB = BB.posAtCoords({
          x: dB.right - 1,
          y: IB
        });
      return null == NB || null == uB ? QB : {
        from: Math.max(QB.from, Math.min(NB, uB)),
        to: Math.min(QB.to, Math.max(NB, uB))
      }
    }
    class cn {
      constructor(BB, jB) {
        this.view = BB, this.layer = jB, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = BB.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), jB.above && this.dom.classList.add("cm-layer-above"), jB.class && this.dom.classList.add(jB.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(BB.state), BB.requestMeasure(this.measureReq), jB.mount && jB.mount(this.dom, BB)
      }
      update(BB) {
        BB.startState.facet(bn) != BB.state.facet(bn) && this.setOrder(BB.state), (this.layer.update(BB, this.dom) || BB.geometryChanged) && (this.scale(), BB.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(BB) {
        !1 !== this.layer.updateOnDocViewUpdate && BB.requestMeasure(this.measureReq)
      }
      setOrder(BB) {
        let jB = 0,
          zB = BB.facet(bn);
        for (; jB < zB.length && zB[jB] != this.layer;) jB++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - jB)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: BB,
          scaleY: jB
        } = this.view;
        BB == this.scaleX && jB == this.scaleY || (this.scaleX = BB, this.scaleY = jB, this.dom.style.transform = `scale(${1/BB}, ${1/jB})`)
      }
      draw(BB) {
        if (BB.length != this.drawn.length || BB.some(((BB, jB) => {
            return zB = BB, QB = this.drawn[jB], !(zB.constructor == QB.constructor && zB.eq(QB));
            var zB, QB
          }))) {
          let jB = this.dom.firstChild,
            zB = 0;
          for (let QB of BB) QB.update && jB && QB.constructor && this.drawn[zB].constructor && QB.update(jB, this.drawn[zB]) ? (jB = jB.nextSibling, zB++) : this.dom.insertBefore(QB.draw(), jB);
          for (; jB;) {
            let BB = jB.nextSibling;
            jB.remove(), jB = BB
          }
          this.drawn = BB, MB.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const bn = QB.p.define();

    function vn(BB) {
      return [bj.define((jB => new cn(jB, BB))), bn.of(BB)]
    }
    const Rn = QB.p.define({
      combine: BB => (0, QB.O)(BB, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (BB, jB) => Math.min(BB, jB),
        drawRangeCursor: (BB, jB) => BB || jB
      })
    });

    function On() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Rn.of(BB), jd, Qd, nd, Pj.of(!0)]
    }

    function Bd(BB) {
      return BB.startState.facet(Rn) != BB.state.facet(Rn)
    }
    const jd = vn({
      above: !0,
      markers(BB) {
        let {
          state: jB
        } = BB, zB = jB.facet(Rn), nB = [];
        for (let dB of jB.selection.gy) {
          let IB = dB == jB.selection.main;
          if (dB.empty || zB.drawRangeCursor && !(IB && MB.ios && zB.iosSelectionHandles)) {
            let jB = IB ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              zB = dB.empty ? dB : QB.i.cursor(dB.head, dB.assoc);
            for (let QB of xn.forRange(BB, jB, zB)) nB.push(QB)
          }
        }
        return nB
      },
      update(BB, jB) {
        BB.transactions.some((BB => BB.selection)) && (jB.style.animationName = "cm-blink" == jB.style.animationName ? "cm-blink2" : "cm-blink");
        let zB = Bd(BB);
        return zB && zd(BB.state, jB), BB.docChanged || BB.selectionSet || zB
      },
      mount(BB, jB) {
        zd(jB.state, BB)
      },
      class: "cm-cursorLayer"
    });

    function zd(BB, jB) {
      jB.style.animationDuration = BB.facet(Rn).cursorBlinkRate + "ms"
    }
    const Qd = vn({
        above: !1,
        markers(BB) {
          let jB = [],
            {
              main: zB,
              gy: nB
            } = BB.state.selection;
          for (let QB of nB)
            if (!QB.empty)
              for (let zB of xn.forRange(BB, "cm-selectionBackground", QB)) jB.push(zB);
          if (MB.ios && !zB.empty && BB.state.facet(Rn).iosSelectionHandles) {
            for (let nB of xn.forRange(BB, "cm-selectionHandle cm-selectionHandle-start", QB.i.cursor(zB.from, 1))) jB.push(nB);
            for (let nB of xn.forRange(BB, "cm-selectionHandle cm-selectionHandle-end", QB.i.cursor(zB.to, 1))) jB.push(nB)
          }
          return jB
        },
        update: (BB, jB) => BB.docChanged || BB.selectionSet || BB.viewportChanged || Bd(BB),
        class: "cm-selectionLayer"
      }),
      nd = QB.u.highest(qn.theme({
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
      dd = QB.D.define({
        map: (BB, jB) => null == BB ? null : jB.mapPos(BB)
      }),
      Id = QB.F.define({
        create: () => null,
        update: (BB, jB) => (null != BB && (BB = jB.changes.mapPos(BB)), jB.effects.reduce(((BB, jB) => jB.is(dd) ? jB.value : BB), BB))
      }),
      Nd = bj.fromClass(class {
        constructor(BB) {
          this.view = BB, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(BB) {
          var jB;
          let zB = BB.state.field(Id);
          null == zB ? null != this.cursor && (null === (jB = this.cursor) || void 0 === jB || jB.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (BB.startState.field(Id) != zB || BB.docChanged || BB.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: BB
          } = this, jB = BB.state.field(Id), zB = null != jB && BB.coordsAtPos(jB);
          if (!zB) return null;
          let QB = BB.scrollDOM.getBoundingClientRect();
          return {
            left: zB.left - QB.left + BB.scrollDOM.scrollLeft * BB.scaleX,
            top: zB.top - QB.top + BB.scrollDOM.scrollTop * BB.scaleY,
            height: zB.bottom - zB.top
          }
        }
        drawCursor(BB) {
          if (this.cursor) {
            let {
              scaleX: jB,
              scaleY: zB
            } = this.view;
            BB ? (this.cursor.style.left = BB.left / jB + "px", this.cursor.style.top = BB.top / zB + "px", this.cursor.style.height = BB.height / zB + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(BB) {
          this.view.state.field(Id) != BB && this.view.dispatch({
            effects: dd.of(BB)
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

    function ud() {
      return [Id, Nd]
    }

    function Ud(BB, jB, zB, QB, nB) {
      jB.lastIndex = 0;
      for (let dB, IB = BB.iterRange(zB, QB), NB = zB; !IB.next().done; NB += IB.value.length)
        if (!IB.lineBreak)
          for (; dB = jB.exec(IB.value);) nB(NB + dB.index, dB)
    }
    class pd {
      constructor(BB) {
        const {
          regexp: jB,
          decoration: zB,
          decorate: QB,
          boundary: nB,
          maxLength: dB = 1e3
        } = BB;
        if (!jB.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = jB, QB) this.addMatch = (BB, jB, zB, nB) => QB(nB, zB, zB + BB[0].length, BB, jB);
        else if ("function" == typeof zB) this.addMatch = (BB, jB, QB, nB) => {
          let dB = zB(BB, jB, QB);
          dB && nB(QB, QB + BB[0].length, dB)
        };
        else {
          if (!zB) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (BB, jB, QB, nB) => nB(QB, QB + BB[0].length, zB)
        }
        this.boundary = nB, this.maxLength = dB
      }
      createDeco(BB) {
        let jB = new QB.y,
          zB = jB.add.bind(jB);
        for (let {
            from: QB,
            to: nB
          }
          of
          function(BB, jB) {
            let zB = BB.I5;
            if (1 == zB.length && zB[0].from == BB.viewport.from && zB[0].to == BB.viewport.to) return zB;
            let QB = [];
            for (let {
                from: nB,
                to: dB
              }
              of zB) nB = Math.max(BB.state.doc.lineAt(nB).from, nB - jB), dB = Math.min(BB.state.doc.lineAt(dB).to, dB + jB), QB.length && QB[QB.length - 1].to >= nB ? QB[QB.length - 1].to = dB : QB.push({
              from: nB,
              to: dB
            });
            return QB
          }(BB, this.maxLength)) Ud(BB.state.doc, this.regexp, QB, nB, ((jB, QB) => this.addMatch(QB, BB, jB, zB)));
        return jB.finish()
      }
      updateDeco(BB, jB) {
        let zB = 1e9,
          QB = -1;
        return BB.docChanged && BB.changes.iterChanges(((jB, nB, dB, IB) => {
          IB >= BB.view.viewport.from && dB <= BB.view.viewport.to && (zB = Math.min(dB, zB), QB = Math.max(IB, QB))
        })), BB.viewportMoved || QB - zB > 1e3 ? this.createDeco(BB.view) : QB > -1 ? this.updateRange(BB.view, jB.map(BB.changes), zB, QB) : jB
      }
      updateRange(BB, jB, zB, QB) {
        for (let nB of BB.I5) {
          let dB = Math.max(nB.from, zB),
            IB = Math.min(nB.to, QB);
          if (IB >= dB) {
            let zB = BB.state.doc.lineAt(dB),
              QB = zB.to < IB ? BB.state.doc.lineAt(IB) : zB,
              NB = Math.max(nB.from, zB.from),
              uB = Math.min(nB.to, QB.to);
            if (this.boundary) {
              for (; dB > zB.from; dB--)
                if (this.boundary.test(zB.text[dB - 1 - zB.from])) {
                  NB = dB;
                  break
                } for (; IB < QB.to; IB++)
                if (this.boundary.test(QB.text[IB - QB.from])) {
                  uB = IB;
                  break
                }
            }
            let UB, aB = [],
              pB = (BB, jB, zB) => aB.push(zB.range(BB, jB));
            if (zB == QB)
              for (this.regexp.lastIndex = NB - zB.from;
                (UB = this.regexp.exec(zB.text)) && UB.index < uB - zB.from;) this.addMatch(UB, BB, UB.index + zB.from, pB);
            else Ud(BB.state.doc, this.regexp, NB, uB, ((jB, zB) => this.addMatch(zB, BB, jB, pB)));
            jB = jB.update({
              filterFrom: NB,
              filterTo: uB,
              filter: (BB, jB) => BB < NB || jB > uB,
              add: aB
            })
          }
        }
        return jB
      }
    }
    const rd = null != /x/.unicode ? "gu" : "g",
      sd = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", rd),
      Jd = {
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
    let md = null;
    const yd = QB.p.define({
      combine(BB) {
        let jB = (0, QB.O)(BB, {
          render: null,
          specialChars: sd,
          addSpecialChars: null
        });
        return (jB.replaceTabs = ! function() {
          var BB;
          if (null == md && "undefined" != typeof document && document.body) {
            let jB = document.body.style;
            md = null != (null !== (BB = jB.tabSize) && void 0 !== BB ? BB : jB.MozTabSize)
          }
          return md || !1
        }()) && (jB.specialChars = new RegExp("\t|" + jB.specialChars.source, rd)), jB.addSpecialChars && (jB.specialChars = new RegExp(jB.specialChars.source + "|" + jB.addSpecialChars.source, rd)), jB
      }
    });

    function kd() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [yd.of(BB), Gd || (Gd = bj.fromClass(class {
        constructor(BB) {
          this.view = BB, this.pQ = FB.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(BB.state.facet(yd)), this.pQ = this.decorator.createDeco(BB)
        }
        makeDecorator(BB) {
          return new pd({
            regexp: BB.specialChars,
            decoration: (jB, zB, nB) => {
              let {
                doc: dB
              } = zB.state, IB = (0, QB.L)(jB[0], 0);
              if (9 == IB) {
                let BB = dB.lineAt(nB),
                  jB = zB.state.tabSize,
                  IB = (0, QB.Q)(BB.text, jB, nB - BB.from);
                return FB.replace({
                  widget: new gd((jB - IB % jB) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[IB] || (this.decorationCache[IB] = FB.replace({
                widget: new Ld(BB, IB)
              }))
            },
            boundary: BB.replaceTabs ? void 0 : /[^]/
          })
        }
        update(BB) {
          let jB = BB.state.facet(yd);
          BB.startState.facet(yd) != jB ? (this.decorator = this.makeDecorator(jB), this.pQ = this.decorator.createDeco(BB.view)) : this.pQ = this.decorator.updateDeco(BB, this.pQ)
        }
      }, {
        pQ: BB => BB.pQ
      }))]
    }
    let Gd = null;
    class Ld extends HB {
      constructor(BB, jB) {
        super(), this.options = BB, this.code = jB
      }
      eq(BB) {
        return BB.code == this.code
      }
      toDOM(BB) {
        let jB = function(BB) {
            return BB >= 32 ? "\u2022" : 10 == BB ? "\u2424" : String.fromCharCode(9216 + BB)
          }(this.code),
          zB = BB.state.phrase("Control character") + " " + (Jd[this.code] || "0x" + this.code.toString(16)),
          QB = this.options.render && this.options.render(this.code, zB, jB);
        if (QB) return QB;
        let nB = document.createElement("span");
        return nB.textContent = jB, nB.title = zB, nB.setAttribute("aria-label", zB), nB.className = "cm-specialChar", nB
      }
      ignoreEvent() {
        return !1
      }
    }
    class gd extends HB {
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

    function td() {
      return Md
    }
    const Sd = FB.line({
        class: "cm-activeLine"
      }),
      Md = bj.fromClass(class {
        constructor(BB) {
          this.pQ = this.getDeco(BB)
        }
        update(BB) {
          (BB.docChanged || BB.selectionSet) && (this.pQ = this.getDeco(BB.view))
        }
        getDeco(BB) {
          let jB = -1,
            zB = [];
          for (let QB of BB.state.selection.gy) {
            let nB = BB.lineBlockAt(QB.head);
            nB.from > jB && (zB.push(Sd.range(nB.from)), jB = nB.from)
          }
          return FB.set(zB)
        }
      }, {
        pQ: BB => BB.pQ
      });
    class Ed extends HB {
      constructor(BB) {
        super(), this.content = BB
      }
      toDOM(BB) {
        let jB = document.createElement("span");
        return jB.className = "cm-placeholder", jB.style.pointerEvents = "none", jB.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(BB) : this.content.cloneNode(!0)), jB.setAttribute("aria-hidden", "true"), jB
      }
      coordsAt(BB) {
        let jB = BB.firstChild ? eB(BB.firstChild) : [];
        if (!jB.length) return null;
        let zB = window.getComputedStyle(BB.parentNode),
          QB = cB(jB[0], "rtl" != zB.direction),
          nB = parseInt(zB.lineHeight);
        return QB.bottom - QB.top > 1.5 * nB ? {
          left: QB.left,
          right: QB.right,
          top: QB.top,
          bottom: QB.top + nB
        } : QB
      }
      ignoreEvent() {
        return !1
      }
    }

    function qd(BB) {
      let jB = bj.fromClass(class {
        constructor(jB) {
          this.view = jB, this.placeholder = BB ? FB.set([FB.widget({
            widget: new Ed(BB),
            side: 1
          }).range(0)]) : FB.none
        }
        get pQ() {
          return this.view.state.doc.length ? FB.none : this.placeholder
        }
      }, {
        pQ: BB => BB.pQ
      });
      return "string" == typeof BB ? [jB, qn.contentAttributes.of({
        "aria-placeholder": BB
      })] : jB
    }
    const fd = 2e3;

    function od(BB, jB) {
      let zB = BB.posAtCoords({
          x: jB.clientX,
          y: jB.clientY
        }, !1),
        nB = BB.state.doc.lineAt(zB),
        dB = zB - nB.from,
        IB = dB > fd ? -1 : dB == nB.length ? function(BB, jB) {
          let zB = BB.coordsAtPos(BB.viewport.from);
          return zB ? Math.round(Math.abs((zB.left - jB) / BB.defaultCharacterWidth)) : -1
        }(BB, jB.clientX) : (0, QB.Q)(nB.text, BB.state.tabSize, zB - nB.from);
      return {
        line: nB.number,
        col: IB,
        off: dB
      }
    }

    function Hd(BB, jB) {
      let zB = od(BB, jB),
        nB = BB.state.selection;
      return zB ? {
        update(BB) {
          if (BB.docChanged) {
            let jB = BB.changes.mapPos(BB.startState.doc.line(zB.line).from),
              QB = BB.state.doc.lineAt(jB);
            zB = {
              line: QB.number,
              col: zB.col,
              off: Math.min(zB.off, QB.length)
            }, nB = nB.map(BB.changes)
          }
        },
        get(jB, dB, IB) {
          let NB = od(BB, jB);
          if (!NB) return nB;
          let uB = function(BB, jB, zB) {
            let nB = Math.min(jB.line, zB.line),
              dB = Math.max(jB.line, zB.line),
              IB = [];
            if (jB.off > fd || zB.off > fd || jB.col < 0 || zB.col < 0) {
              let NB = Math.min(jB.off, zB.off),
                uB = Math.max(jB.off, zB.off);
              for (let jB = nB; jB <= dB; jB++) {
                let zB = BB.doc.line(jB);
                zB.length <= uB && IB.push(QB.i.range(zB.from + NB, zB.to + uB))
              }
            } else {
              let NB = Math.min(jB.col, zB.col),
                uB = Math.max(jB.col, zB.col);
              for (let jB = nB; jB <= dB; jB++) {
                let zB = BB.doc.line(jB),
                  nB = (0, QB.V)(zB.text, NB, BB.tabSize, !0);
                if (nB < 0) IB.push(QB.i.cursor(zB.to));
                else {
                  let jB = (0, QB.V)(zB.text, uB, BB.tabSize);
                  IB.push(QB.i.range(zB.from + nB, zB.from + jB))
                }
              }
            }
            return IB
          }(BB.state, zB, NB);
          return uB.length ? IB ? QB.i.create(uB.concat(nB.gy)) : QB.i.create(uB) : nB
        }
      } : null
    }

    function Dd(BB) {
      let jB = (null === BB || void 0 === BB ? void 0 : BB.eventFilter) || (BB => BB.altKey && 0 == BB.button);
      return qn.mouseSelectionStyle.of(((BB, zB) => jB(zB) ? Hd(BB, zB) : null))
    }
    const Fd = {
        Alt: [18, BB => !!BB.altKey],
        Control: [17, BB => !!BB.ctrlKey],
        Shift: [16, BB => !!BB.shiftKey],
        Meta: [91, BB => !!BB.metaKey]
      },
      Yd = {
        style: "cursor: crosshair"
      };

    function Vd() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [jB, zB] = Fd[BB.key || "Alt"],
        QB = bj.fromClass(class {
          constructor(BB) {
            this.view = BB, this.isDown = !1
          }
          set(BB) {
            this.isDown != BB && (this.isDown = BB, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(BB) {
              this.set(BB.keyCode == jB || zB(BB))
            },
            keyup(BB) {
              BB.keyCode != jB && zB(BB) || this.set(!1)
            },
            mousemove(BB) {
              this.set(zB(BB))
            }
          }
        });
      return [QB, qn.contentAttributes.of((BB => {
        var jB;
        return (null === (jB = BB.plugin(QB)) || void 0 === jB ? void 0 : jB.isDown) ? Yd : null
      }))]
    }
    const hd = "-10000px";
    class Xd {
      constructor(BB, jB, zB, QB) {
        this.facet = jB, this.createTooltipView = zB, this.removeTooltipView = QB, this.input = BB.state.facet(jB), this.tooltips = this.input.filter((BB => BB));
        let nB = null;
        this.tooltipViews = this.tooltips.map((BB => nB = zB(BB, nB)))
      }
      update(BB, jB) {
        var zB;
        let QB = BB.state.facet(this.facet),
          nB = QB.filter((BB => BB));
        if (QB === this.input) {
          for (let jB of this.tooltipViews) jB.update && jB.update(BB);
          return !1
        }
        let dB = [],
          IB = jB ? [] : null;
        for (let NB = 0; NB < nB.length; NB++) {
          let zB = nB[NB],
            QB = -1;
          if (zB) {
            for (let BB = 0; BB < this.tooltips.length; BB++) {
              let jB = this.tooltips[BB];
              jB && jB.create == zB.create && (QB = BB)
            }
            if (QB < 0) dB[NB] = this.createTooltipView(zB, NB ? dB[NB - 1] : null), IB && (IB[NB] = !!zB.above);
            else {
              let zB = dB[NB] = this.tooltipViews[QB];
              IB && (IB[NB] = jB[QB]), zB.update && zB.update(BB)
            }
          }
        }
        for (let NB of this.tooltipViews) dB.indexOf(NB) < 0 && (this.removeTooltipView(NB), null === (zB = NB.destroy) || void 0 === zB || zB.call(NB));
        return jB && (IB.forEach(((BB, zB) => jB[zB] = BB)), jB.length = IB.length), this.input = QB, this.tooltips = nB, this.tooltipViews = dB, !0
      }
    }

    function Zd(BB) {
      let jB = BB.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: jB.clientHeight,
        right: jB.clientWidth
      }
    }
    const Ad = QB.p.define({
        combine: BB => {
          var jB, zB, QB;
          return {
            position: MB.ios ? "absolute" : (null === (jB = BB.find((BB => BB.position))) || void 0 === jB ? void 0 : jB.position) || "fixed",
            parent: (null === (zB = BB.find((BB => BB.parent))) || void 0 === zB ? void 0 : zB.parent) || null,
            tooltipSpace: (null === (QB = BB.find((BB => BB.tooltipSpace))) || void 0 === QB ? void 0 : QB.tooltipSpace) || Zd
          }
        }
      }),
      Td = new WeakMap,
      Pd = bj.fromClass(class {
        constructor(BB) {
          this.view = BB, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let jB = BB.state.facet(Ad);
          this.position = jB.position, this.parent = jB.parent, this.classes = BB.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new Xd(BB, wd, ((BB, jB) => this.createTooltip(BB, jB)), (BB => {
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
          let jB = this.manager.update(BB, this.above);
          jB && this.observeIntersection();
          let zB = jB || BB.geometryChanged,
            QB = BB.state.facet(Ad);
          if (QB.position != this.position && !this.madeAbsolute) {
            this.position = QB.position;
            for (let BB of this.manager.tooltipViews) BB.dom.style.position = this.position;
            zB = !0
          }
          if (QB.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = QB.parent, this.createContainer();
            for (let BB of this.manager.tooltipViews) this.container.appendChild(BB.dom);
            zB = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          zB && this.maybeMeasure()
        }
        createTooltip(BB, jB) {
          let zB = BB.create(this.view),
            QB = jB ? jB.dom : null;
          if (zB.dom.classList.add("cm-tooltip"), BB.arrow && !zB.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let BB = document.createElement("div");
            BB.className = "cm-tooltip-arrow", zB.dom.appendChild(BB)
          }
          return zB.dom.style.position = this.position, zB.dom.style.top = hd, zB.dom.style.left = "0px", this.container.insertBefore(zB.dom, QB), zB.mount && zB.mount(this.view), this.resizeObserver && this.resizeObserver.observe(zB.dom), zB
        }
        destroy() {
          var BB, jB, zB;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let QB of this.manager.tooltipViews) QB.dom.remove(), null === (BB = QB.destroy) || void 0 === BB || BB.call(QB);
          this.parent && this.container.remove(), null === (jB = this.resizeObserver) || void 0 === jB || jB.disconnect(), null === (zB = this.intersectionObserver) || void 0 === zB || zB.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let BB = 1,
            jB = 1,
            zB = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: BB
            } = this.manager.tooltipViews[0];
            if (MB.safari) {
              let jB = BB.getBoundingClientRect();
              zB = Math.abs(jB.top + 1e4) > 1 || Math.abs(jB.left) > 1
            } else zB = !!BB.offsetParent && BB.offsetParent != this.container.ownerDocument.body
          }
          if (zB || "absolute" == this.position)
            if (this.parent) {
              let zB = this.parent.getBoundingClientRect();
              zB.width && zB.height && (BB = zB.width / this.parent.offsetWidth, jB = zB.height / this.parent.offsetHeight)
            } else({
              scaleX: BB,
              scaleY: jB
            } = this.view.viewState);
          let QB = this.view.scrollDOM.getBoundingClientRect(),
            nB = Nz(this.view);
          return {
            visible: {
              left: QB.left + nB.left,
              top: QB.top + nB.top,
              right: QB.right - nB.right,
              bottom: QB.bottom - nB.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((BB, jB) => {
              let zB = this.manager.tooltipViews[jB];
              return zB.getCoords ? zB.getCoords(BB.pos) : this.view.coordsAtPos(BB.pos)
            })),
            size: this.manager.tooltipViews.map((BB => {
              let {
                dom: jB
              } = BB;
              return jB.getBoundingClientRect()
            })),
            space: this.view.state.facet(Ad).tooltipSpace(this.view),
            scaleX: BB,
            scaleY: jB,
            makeAbsolute: zB
          }
        }
        writeMeasure(BB) {
          var jB;
          if (BB.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let BB of this.manager.tooltipViews) BB.dom.style.position = "absolute"
          }
          let {
            visible: zB,
            space: QB,
            scaleX: nB,
            scaleY: dB
          } = BB, IB = [];
          for (let NB = 0; NB < this.manager.tooltips.length; NB++) {
            let uB = this.manager.tooltips[NB],
              UB = this.manager.tooltipViews[NB],
              {
                dom: aB
              } = UB,
              pB = BB.pos[NB],
              rB = BB.size[NB];
            if (!pB || !1 !== uB.clip && (pB.bottom <= Math.max(zB.top, QB.top) || pB.top >= Math.min(zB.bottom, QB.bottom) || pB.right < Math.max(zB.left, QB.left) - .1 || pB.left > Math.min(zB.right, QB.right) + .1)) {
              aB.style.top = hd;
              continue
            }
            let sB = uB.arrow ? UB.dom.querySelector(".cm-tooltip-arrow") : null,
              JB = sB ? 7 : 0,
              mB = rB.right - rB.left,
              yB = null !== (jB = Td.get(UB)) && void 0 !== jB ? jB : rB.bottom - rB.top,
              kB = UB.offset || ld,
              GB = this.view.textDirection == Uj.LTR,
              LB = rB.width > QB.right - QB.left ? GB ? QB.left : QB.right - rB.width : GB ? Math.max(QB.left, Math.min(pB.left - (sB ? 14 : 0) + kB.x, QB.right - mB)) : Math.min(Math.max(QB.left, pB.left - mB + (sB ? 14 : 0) - kB.x), QB.right - mB),
              gB = this.above[NB];
            !uB.strictSide && (gB ? pB.top - yB - JB - kB.y < QB.top : pB.bottom + yB + JB + kB.y > QB.bottom) && gB == QB.bottom - pB.bottom > pB.top - QB.top && (gB = this.above[NB] = !gB);
            let tB = (gB ? pB.top - QB.top : QB.bottom - pB.bottom) - JB;
            if (tB < yB && !1 !== UB.resize) {
              if (tB < this.view.defaultLineHeight) {
                aB.style.top = hd;
                continue
              }
              Td.set(UB, yB), aB.style.height = (yB = tB) / dB + "px"
            } else aB.style.height && (aB.style.height = "");
            let SB = gB ? pB.top - yB - JB - kB.y : pB.bottom + JB + kB.y,
              MB = LB + mB;
            if (!0 !== UB.overlap)
              for (let BB of IB) BB.left < MB && BB.right > LB && BB.top < SB + yB && BB.bottom > SB && (SB = gB ? BB.top - yB - 2 - JB : BB.bottom + JB + 2);
            if ("absolute" == this.position ? (aB.style.top = (SB - BB.parent.top) / dB + "px", Wd(aB, (LB - BB.parent.left) / nB)) : (aB.style.top = SB / dB + "px", Wd(aB, LB / nB)), sB) {
              let BB = pB.left + (GB ? kB.x : -kB.x) - (LB + 14 - 7);
              sB.style.left = BB / nB + "px"
            }!0 !== UB.overlap && IB.push({
              left: LB,
              top: SB,
              right: MB,
              bottom: SB + yB
            }), aB.classList.toggle("cm-tooltip-above", gB), aB.classList.toggle("cm-tooltip-below", !gB), UB.positioned && UB.positioned(BB.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let BB of this.manager.tooltipViews) BB.dom.style.top = hd
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function Wd(BB, jB) {
      let zB = parseInt(BB.style.left, 10);
      (isNaN(zB) || Math.abs(jB - zB) > 1) && (BB.style.left = jB + "px")
    }
    const ed = qn.baseTheme({
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
      ld = {
        x: 0,
        y: 0
      },
      wd = QB.p.define({
        enables: [Pd, ed]
      }),
      xd = QB.p.define({
        combine: BB => BB.reduce(((BB, jB) => BB.concat(jB)), [])
      });
    class Kd {
      static create(BB) {
        return new Kd(BB)
      }
      constructor(BB) {
        this.view = BB, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new Xd(BB, xd, ((BB, jB) => this.createHostedView(BB, jB)), (BB => BB.dom.remove()))
      }
      createHostedView(BB, jB) {
        let zB = BB.create(this.view);
        return zB.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(zB.dom, jB ? jB.dom.nextSibling : this.dom.firstChild), this.mounted && zB.mount && zB.mount(this.view), zB
      }
      mount(BB) {
        for (let jB of this.manager.tooltipViews) jB.mount && jB.mount(BB);
        this.mounted = !0
      }
      positioned(BB) {
        for (let jB of this.manager.tooltipViews) jB.positioned && jB.positioned(BB)
      }
      update(BB) {
        this.manager.update(BB)
      }
      destroy() {
        var BB;
        for (let jB of this.manager.tooltipViews) null === (BB = jB.destroy) || void 0 === BB || BB.call(jB)
      }
      passProp(BB) {
        let jB;
        for (let zB of this.manager.tooltipViews) {
          let QB = zB[BB];
          if (void 0 !== QB)
            if (void 0 === jB) jB = QB;
            else if (jB !== QB) return
        }
        return jB
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
    const Cd = wd.compute([xd], (BB => {
      let jB = BB.facet(xd);
      return 0 === jB.length ? null : {
        pos: Math.min(...jB.map((BB => BB.pos))),
        end: Math.max(...jB.map((BB => {
          var jB;
          return null !== (jB = BB.end) && void 0 !== jB ? jB : BB.pos
        }))),
        create: Kd.create,
        above: jB[0].above,
        arrow: jB.some((BB => BB.arrow))
      }
    }));
    class cd {
      constructor(BB, jB, zB, QB, nB) {
        this.view = BB, this.source = jB, this.field = zB, this.setHover = QB, this.hoverTime = nB, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
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
          lastMove: jB
        } = this, zB = BB.docView.tile.nearest(jB.target);
        if (!zB) return;
        let QB, nB = 1;
        if (zB.isWidget()) QB = zB.posAtStart;
        else {
          if (QB = BB.posAtCoords(jB), null == QB) return;
          let zB = BB.coordsAtPos(QB);
          if (!zB || jB.y < zB.top || jB.y > zB.bottom || jB.x < zB.left - BB.defaultCharacterWidth || jB.x > zB.right + BB.defaultCharacterWidth) return;
          let dB = BB.bidiSpans(BB.state.doc.lineAt(QB)).find((BB => BB.from <= QB && BB.to >= QB)),
            IB = dB && dB.dir == Uj.RTL ? -1 : 1;
          nB = jB.x < zB.left ? -IB : IB
        }
        let dB = this.source(BB, QB, nB);
        if (null === dB || void 0 === dB ? void 0 : dB.then) {
          let jB = this.pending = {
            pos: QB
          };
          dB.then((zB => {
            this.pending == jB && (this.pending = null, !zB || Array.isArray(zB) && !zB.length || BB.dispatch({
              effects: this.setHover.of(Array.isArray(zB) ? zB : [zB])
            }))
          }), (jB => xj(BB.state, jB, "hover tooltip")))
        } else !dB || Array.isArray(dB) && !dB.length || BB.dispatch({
          effects: this.setHover.of(Array.isArray(dB) ? dB : [dB])
        })
      }
      get tooltip() {
        let BB = this.view.plugin(Pd),
          jB = BB ? BB.manager.tooltips.findIndex((BB => BB.create == Kd.create)) : -1;
        return jB > -1 ? BB.manager.tooltipViews[jB] : null
      }
      mousemove(BB) {
        var jB, zB;
        this.lastMove = {
          x: BB.clientX,
          y: BB.clientY,
          target: BB.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: QB,
          tooltip: nB
        } = this;
        if (QB.length && nB && ! function(BB, jB) {
            let zB, {
              left: QB,
              right: nB,
              top: dB,
              bottom: IB
            } = BB.getBoundingClientRect();
            if (zB = BB.querySelector(".cm-tooltip-arrow")) {
              let BB = zB.getBoundingClientRect();
              dB = Math.min(BB.top, dB), IB = Math.max(BB.bottom, IB)
            }
            return jB.clientX >= QB - bd && jB.clientX <= nB + bd && jB.clientY >= dB - bd && jB.clientY <= IB + bd
          }(nB.dom, BB) || this.pending) {
          let {
            pos: nB
          } = QB[0] || this.pending, dB = null !== (zB = null === (jB = QB[0]) || void 0 === jB ? void 0 : jB.end) && void 0 !== zB ? zB : nB;
          (nB == dB ? this.view.posAtCoords(this.lastMove) == nB : function(BB, jB, zB, QB, nB) {
            let dB = BB.scrollDOM.getBoundingClientRect(),
              IB = BB.documentTop + BB.documentPadding.top + BB.contentHeight;
            if (dB.left > QB || dB.right < QB || dB.top > nB || Math.min(dB.bottom, IB) < nB) return !1;
            let NB = BB.posAtCoords({
              x: QB,
              y: nB
            }, !1);
            return NB >= jB && NB <= zB
          }(this.view, nB, dB, BB.clientX, BB.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(BB) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: jB
        } = this;
        if (jB.length) {
          let {
            tooltip: jB
          } = this;
          jB && jB.dom.contains(BB.relatedTarget) ? this.watchTooltipLeave(jB.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(BB) {
        let jB = zB => {
          BB.removeEventListener("mouseleave", jB), this.active.length && !this.view.dom.contains(zB.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        BB.addEventListener("mouseleave", jB)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const bd = 4;

    function vd(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        zB = QB.D.define(),
        nB = QB.F.define({
          create: () => [],
          update(BB, nB) {
            if (BB.length && (jB.hideOnChange && (nB.docChanged || nB.selection) ? BB = [] : jB.hideOn && (BB = BB.filter((BB => !jB.hideOn(nB, BB)))), nB.docChanged)) {
              let jB = [];
              for (let zB of BB) {
                let BB = nB.changes.mapPos(zB.pos, -1, QB.t.TrackDel);
                if (null != BB) {
                  let QB = Object.assign(Object.create(null), zB);
                  QB.pos = BB, null != QB.end && (QB.end = nB.changes.mapPos(QB.end)), jB.push(QB)
                }
              }
              BB = jB
            }
            for (let jB of nB.effects) jB.is(zB) && (BB = jB.value), jB.is(Od) && (BB = []);
            return BB
          },
          provide: BB => xd.from(BB)
        });
      return {
        active: nB,
        extension: [nB, bj.define((QB => new cd(QB, BB, nB, zB, jB.hoverTime || 300))), Cd]
      }
    }

    function Rd(BB, jB) {
      let zB = BB.plugin(Pd);
      if (!zB) return null;
      let QB = zB.manager.tooltips.indexOf(jB);
      return QB < 0 ? null : zB.manager.tooltipViews[QB]
    }
    const Od = QB.D.define();
    const BI = QB.p.define({
      combine(BB) {
        let jB, zB;
        for (let QB of BB) jB = jB || QB.topContainer, zB = zB || QB.bottomContainer;
        return {
          topContainer: jB,
          bottomContainer: zB
        }
      }
    });

    function jI(BB, jB) {
      let zB = BB.plugin(zI),
        QB = zB ? zB.specs.indexOf(jB) : -1;
      return QB > -1 ? zB.panels[QB] : null
    }
    const zI = bj.fromClass(class {
      constructor(BB) {
        this.input = BB.state.facet(dI), this.specs = this.input.filter((BB => BB)), this.panels = this.specs.map((jB => jB(BB)));
        let jB = BB.state.facet(BI);
        this.top = new QI(BB, !0, jB.topContainer), this.bottom = new QI(BB, !1, jB.bottomContainer), this.top.sync(this.panels.filter((BB => BB.top))), this.bottom.sync(this.panels.filter((BB => !BB.top)));
        for (let zB of this.panels) zB.dom.classList.add("cm-panel"), zB.mount && zB.mount()
      }
      update(BB) {
        let jB = BB.state.facet(BI);
        this.top.container != jB.topContainer && (this.top.sync([]), this.top = new QI(BB.view, !0, jB.topContainer)), this.bottom.container != jB.bottomContainer && (this.bottom.sync([]), this.bottom = new QI(BB.view, !1, jB.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let zB = BB.state.facet(dI);
        if (zB != this.input) {
          let jB = zB.filter((BB => BB)),
            QB = [],
            nB = [],
            dB = [],
            IB = [];
          for (let zB of jB) {
            let jB, NB = this.specs.indexOf(zB);
            NB < 0 ? (jB = zB(BB.view), IB.push(jB)) : (jB = this.panels[NB], jB.update && jB.update(BB)), QB.push(jB), (jB.top ? nB : dB).push(jB)
          }
          this.specs = jB, this.panels = QB, this.top.sync(nB), this.bottom.sync(dB);
          for (let BB of IB) BB.dom.classList.add("cm-panel"), BB.mount && BB.mount()
        } else
          for (let QB of this.panels) QB.update && QB.update(BB)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: BB => qn.scrollMargins.of((jB => {
        let zB = jB.plugin(BB);
        return zB && {
          top: zB.top.scrollMargin(),
          bottom: zB.bottom.scrollMargin()
        }
      }))
    });
    class QI {
      constructor(BB, jB, zB) {
        this.view = BB, this.top = jB, this.container = zB, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(BB) {
        for (let jB of this.panels) jB.destroy && BB.indexOf(jB) < 0 && jB.destroy();
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
        for (let jB of this.panels)
          if (jB.dom.parentNode == this.dom) {
            for (; BB != jB.dom;) BB = nI(BB);
            BB = BB.nextSibling
          } else this.dom.insertBefore(jB.dom, BB);
        for (; BB;) BB = nI(BB)
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

    function nI(BB) {
      let jB = BB.nextSibling;
      return BB.remove(), jB
    }
    const dI = QB.p.define({
      enables: zI
    });

    function II(BB, jB) {
      let zB, nB = new Promise((BB => zB = BB)),
        dB = BB => function(BB, jB, zB) {
          let QB = jB.content ? jB.content(BB, (() => IB(null))) : null;
          if (!QB) {
            if (QB = (0, pB.e)("form"), jB.input) {
              let BB = (0, pB.e)("input", jB.input);
              /^(text|password|number|email|tel|url)$/.test(BB.type) && BB.classList.add("cm-textfield"), BB.name || (BB.name = "input"), QB.appendChild((0, pB.e)("label", (jB.label || "") + ": ", BB))
            } else QB.appendChild(document.createTextNode(jB.label || ""));
            QB.appendChild(document.createTextNode(" ")), QB.appendChild((0, pB.e)("button", {
              class: "cm-button",
              type: "submit"
            }, jB.submitLabel || "OK"))
          }
          let nB = "FORM" == QB.nodeName ? [QB] : QB.querySelectorAll("form");
          for (let NB = 0; NB < nB.length; NB++) {
            let BB = nB[NB];
            BB.addEventListener("keydown", (jB => {
              27 == jB.keyCode ? (jB.preventDefault(), IB(null)) : 13 == jB.keyCode && (jB.preventDefault(), IB(BB))
            })), BB.addEventListener("submit", (jB => {
              jB.preventDefault(), IB(BB)
            }))
          }
          let dB = (0, pB.e)("div", QB, (0, pB.e)("button", {
            onclick: () => IB(null),
            "aria-label": BB.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          jB.class && (dB.className = jB.class);

          function IB(jB) {
            dB.contains(dB.ownerDocument.activeElement) && BB.focus(), zB(jB)
          }
          return dB.classList.add("cm-dialog"), {
            dom: dB,
            top: jB.top,
            mount: () => {
              if (jB.focus) {
                let BB;
                BB = "string" == typeof jB.focus ? QB.querySelector(jB.focus) : QB.querySelector("input") || QB.querySelector("button"), BB && "select" in BB ? BB.select() : BB && "focus" in BB && BB.focus()
              }
            }
          }
        }(BB, jB, zB);
      BB.state.field(NI, !1) ? BB.dispatch({
        effects: uI.of(dB)
      }) : BB.dispatch({
        effects: QB.D.appendConfig.of(NI.init((() => [dB])))
      });
      let IB = UI.of(dB);
      return {
        close: IB,
        result: nB.then((jB => ((BB.win.queueMicrotask || (jB => BB.win.setTimeout(jB, 10)))((() => {
          BB.state.field(NI).indexOf(dB) > -1 && BB.dispatch({
            effects: IB
          })
        })), jB)))
      }
    }
    const NI = QB.F.define({
        create: () => [],
        update(BB, jB) {
          for (let zB of jB.effects) zB.is(uI) ? BB = [zB.value].concat(BB) : zB.is(UI) && (BB = BB.filter((BB => BB != zB.value)));
          return BB
        },
        provide: BB => dI.computeN([BB], (jB => jB.field(BB)))
      }),
      uI = QB.D.define(),
      UI = QB.D.define();
    class aI extends QB.B {
      compare(BB) {
        return this == BB || this.constructor == BB.constructor && this.eq(BB)
      }
      eq(BB) {
        return !1
      }
      destroy(BB) {}
    }
    aI.prototype.elementClass = "", aI.prototype.toDOM = void 0, aI.prototype.mapMode = QB.t.TrackBefore, aI.prototype.startSide = aI.prototype.endSide = -1, aI.prototype.point = !0;
    const pI = QB.p.define(),
      rI = QB.p.define(),
      sI = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => QB.z.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      JI = QB.p.define();

    function mI(BB) {
      return [kI(), JI.of({
        ...sI,
        ...BB
      })]
    }
    const yI = QB.p.define({
      combine: BB => BB.some((BB => BB))
    });

    function kI(BB) {
      let jB = [GI];
      return BB && !1 === BB.fixed && jB.push(yI.of(!0)), jB
    }
    const GI = bj.fromClass(class {
      constructor(BB) {
        this.view = BB, this.domAfter = null, this.prevViewport = BB.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = BB.state.facet(JI).map((jB => new SI(BB, jB))), this.fixed = !BB.state.facet(yI);
        for (let jB of this.gutters) "after" == jB.config.side ? this.getDOMAfter().appendChild(jB.dom) : this.dom.appendChild(jB.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), BB.scrollDOM.insertBefore(this.dom, BB.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(BB) {
        if (this.updateGutters(BB)) {
          let jB = this.prevViewport,
            zB = BB.view.viewport,
            QB = Math.min(jB.to, zB.to) - Math.max(jB.from, zB.from);
          this.syncGutters(QB < .8 * (zB.to - zB.from))
        }
        if (BB.geometryChanged) {
          let BB = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = BB, this.domAfter && (this.domAfter.style.minHeight = BB)
        }
        this.view.state.facet(yI) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = BB.view.viewport
      }
      syncGutters(BB) {
        let jB = this.dom.nextSibling;
        BB && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let zB = QB.z.iter(this.view.state.facet(pI), this.view.viewport.from),
          nB = [],
          dB = this.gutters.map((BB => new tI(BB, this.view.viewport, -this.view.documentPadding.top)));
        for (let QB of this.view.viewportLineBlocks)
          if (nB.length && (nB = []), Array.isArray(QB.type)) {
            let BB = !0;
            for (let jB of QB.type)
              if (jB.type == DB.Text && BB) {
                gI(zB, nB, jB.from);
                for (let BB of dB) BB.line(this.view, jB, nB);
                BB = !1
              } else if (jB.widget)
              for (let BB of dB) BB.widget(this.view, jB)
          } else if (QB.type == DB.Text) {
          gI(zB, nB, QB.from);
          for (let BB of dB) BB.line(this.view, QB, nB)
        } else if (QB.widget)
          for (let BB of dB) BB.widget(this.view, QB);
        for (let QB of dB) QB.finish();
        BB && (this.view.scrollDOM.insertBefore(this.dom, jB), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(BB) {
        let jB = BB.startState.facet(JI),
          zB = BB.state.facet(JI),
          nB = BB.docChanged || BB.heightChanged || BB.viewportChanged || !QB.z.eq(BB.startState.facet(pI), BB.state.facet(pI), BB.view.viewport.from, BB.view.viewport.to);
        if (jB == zB)
          for (let QB of this.gutters) QB.update(BB) && (nB = !0);
        else {
          nB = !0;
          let QB = [];
          for (let nB of zB) {
            let zB = jB.indexOf(nB);
            zB < 0 ? QB.push(new SI(this.view, nB)) : (this.gutters[zB].update(BB), QB.push(this.gutters[zB]))
          }
          for (let BB of this.gutters) BB.dom.remove(), QB.indexOf(BB) < 0 && BB.destroy();
          for (let BB of QB) "after" == BB.config.side ? this.getDOMAfter().appendChild(BB.dom) : this.dom.appendChild(BB.dom);
          this.gutters = QB
        }
        return nB
      }
      destroy() {
        for (let BB of this.gutters) BB.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: BB => qn.scrollMargins.of((jB => {
        let zB = jB.plugin(BB);
        if (!zB || 0 == zB.gutters.length || !zB.fixed) return null;
        let QB = zB.dom.offsetWidth * jB.scaleX,
          nB = zB.domAfter ? zB.domAfter.offsetWidth * jB.scaleX : 0;
        return jB.textDirection == Uj.LTR ? {
          left: QB,
          right: nB
        } : {
          right: QB,
          left: nB
        }
      }))
    });

    function LI(BB) {
      return Array.isArray(BB) ? BB : [BB]
    }

    function gI(BB, jB, zB) {
      for (; BB.value && BB.from <= zB;) BB.from == zB && jB.push(BB.value), BB.next()
    }
    class tI {
      constructor(BB, jB, zB) {
        this.gutter = BB, this.height = zB, this.i = 0, this.cursor = QB.z.iter(BB.markers, jB.from)
      }
      addElement(BB, jB, zB) {
        let {
          gutter: QB
        } = this, nB = (jB.top - this.height) / BB.scaleY, dB = jB.height / BB.scaleY;
        if (this.i == QB.elements.length) {
          let jB = new MI(BB, dB, nB, zB);
          QB.elements.push(jB), QB.dom.appendChild(jB.dom)
        } else QB.elements[this.i].update(BB, dB, nB, zB);
        this.height = jB.bottom, this.i++
      }
      line(BB, jB, zB) {
        let QB = [];
        gI(this.cursor, QB, jB.from), zB.length && (QB = QB.concat(zB));
        let nB = this.gutter.config.lineMarker(BB, jB, QB);
        nB && QB.unshift(nB);
        let dB = this.gutter;
        (0 != QB.length || dB.config.renderEmptyElements) && this.addElement(BB, jB, QB)
      }
      widget(BB, jB) {
        let zB = this.gutter.config.widgetMarker(BB, jB.widget, jB),
          QB = zB ? [zB] : null;
        for (let nB of BB.state.facet(rI)) {
          let zB = nB(BB, jB.widget, jB);
          zB && (QB || (QB = [])).push(zB)
        }
        QB && this.addElement(BB, jB, QB)
      }
      finish() {
        let BB = this.gutter;
        for (; BB.elements.length > this.i;) {
          let jB = BB.elements.pop();
          BB.dom.removeChild(jB.dom), jB.destroy()
        }
      }
    }
    class SI {
      constructor(BB, jB) {
        this.view = BB, this.config = jB, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let zB in jB.domEventHandlers) this.dom.addEventListener(zB, (QB => {
          let nB, dB = QB.target;
          if (dB != this.dom && this.dom.contains(dB)) {
            for (; dB.parentNode != this.dom;) dB = dB.parentNode;
            let BB = dB.getBoundingClientRect();
            nB = (BB.top + BB.bottom) / 2
          } else nB = QB.clientY;
          let IB = BB.lineBlockAtHeight(nB - BB.documentTop);
          jB.domEventHandlers[zB](BB, IB, QB) && QB.preventDefault()
        }));
        this.markers = LI(jB.markers(BB)), jB.initialSpacer && (this.spacer = new MI(BB, 0, 0, [jB.initialSpacer(BB)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(BB) {
        let jB = this.markers;
        if (this.markers = LI(this.config.markers(BB.view)), this.spacer && this.config.updateSpacer) {
          let jB = this.config.updateSpacer(this.spacer.markers[0], BB);
          jB != this.spacer.markers[0] && this.spacer.update(BB.view, 0, 0, [jB])
        }
        let zB = BB.view.viewport;
        return !QB.z.eq(this.markers, jB, zB.from, zB.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(BB)
      }
      destroy() {
        for (let BB of this.elements) BB.destroy()
      }
    }
    class MI {
      constructor(BB, jB, zB, QB) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(BB, jB, zB, QB)
      }
      update(BB, jB, zB, QB) {
        this.height != jB && (this.height = jB, this.dom.style.height = jB + "px"), this.above != zB && (this.dom.style.marginTop = (this.above = zB) ? zB + "px" : ""),
          function(BB, jB) {
            if (BB.length != jB.length) return !1;
            for (let zB = 0; zB < BB.length; zB++)
              if (!BB[zB].compare(jB[zB])) return !1;
            return !0
          }(this.markers, QB) || this.setMarkers(BB, QB)
      }
      setMarkers(BB, jB) {
        let zB = "cm-gutterElement",
          QB = this.dom.firstChild;
        for (let nB = 0, dB = 0;;) {
          let IB = dB,
            NB = nB < jB.length ? jB[nB++] : null,
            uB = !1;
          if (NB) {
            let BB = NB.elementClass;
            BB && (zB += " " + BB);
            for (let jB = dB; jB < this.markers.length; jB++)
              if (this.markers[jB].compare(NB)) {
                IB = jB, uB = !0;
                break
              }
          } else IB = this.markers.length;
          for (; dB < IB;) {
            let BB = this.markers[dB++];
            if (BB.toDOM) {
              BB.destroy(QB);
              let jB = QB.nextSibling;
              QB.remove(), QB = jB
            }
          }
          if (!NB) break;
          NB.toDOM && (uB ? QB = QB.nextSibling : this.dom.insertBefore(NB.toDOM(BB), QB)), uB && dB++
        }
        this.dom.className = zB, this.markers = jB
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const EI = QB.p.define(),
      iI = QB.p.define(),
      qI = QB.p.define({
        combine: BB => (0, QB.O)(BB, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(BB, jB) {
            let zB = Object.assign({}, BB);
            for (let QB in jB) {
              let BB = zB[QB],
                nB = jB[QB];
              zB[QB] = BB ? (jB, zB, QB) => BB(jB, zB, QB) || nB(jB, zB, QB) : nB
            }
            return zB
          }
        })
      });
    class fI extends aI {
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

    function oI(BB, jB) {
      return BB.state.facet(qI).formatNumber(jB, BB.state)
    }
    const HI = JI.compute([qI], (BB => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: BB => BB.state.facet(EI),
      lineMarker: (BB, jB, zB) => zB.some((BB => BB.toDOM)) ? null : new fI(oI(BB, BB.state.doc.lineAt(jB.from).number)),
      widgetMarker: (BB, jB, zB) => {
        for (let QB of BB.state.facet(iI)) {
          let nB = QB(BB, jB, zB);
          if (nB) return nB
        }
        return null
      },
      lineMarkerChange: BB => BB.startState.facet(qI) != BB.state.facet(qI),
      initialSpacer: BB => new fI(oI(BB, FI(BB.state.doc.lines))),
      updateSpacer(BB, jB) {
        let zB = oI(jB.view, FI(jB.view.state.doc.lines));
        return zB == BB.number ? BB : new fI(zB)
      },
      domEventHandlers: BB.facet(qI).domEventHandlers,
      side: "before"
    })));

    function DI() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [qI.of(BB), kI(), HI]
    }

    function FI(BB) {
      let jB = 9;
      for (; jB < BB;) jB = 10 * jB + 9;
      return jB
    }
    const YI = new class extends aI {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      VI = pI.compute(["selection"], (BB => {
        let jB = [],
          zB = -1;
        for (let QB of BB.selection.gy) {
          let nB = BB.doc.lineAt(QB.head).from;
          nB > zB && (zB = nB, jB.push(YI.range(nB)))
        }
        return QB.z.of(jB)
      }));

    function hI() {
      return VI
    }
  },
  41445: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => QB,
      h: () => sB,
      j: () => IB,
      k: () => aB,
      n: () => UB,
      o: () => YB,
      s: () => hB,
      t: () => VB,
      x: () => JB
    });
    const QB = 1024;
    let nB = 0;
    class dB {
      constructor(BB, jB) {
        this.from = BB, this.to = jB
      }
    }
    class IB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = nB++, this.perNode = !!BB.perNode, this.deserialize = BB.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = BB.combine || null
      }
      add(BB) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof BB && (BB = UB.match(BB)), jB => {
          let zB = BB(jB);
          return void 0 === zB ? null : [this, zB]
        }
      }
    }
    IB.closedBy = new IB({
      deserialize: BB => BB.split(" ")
    }), IB.openedBy = new IB({
      deserialize: BB => BB.split(" ")
    }), IB.group = new IB({
      deserialize: BB => BB.split(" ")
    }), IB.isolate = new IB({
      deserialize: BB => {
        if (BB && "rtl" != BB && "ltr" != BB && "auto" != BB) throw new RangeError("Invalid value for isolate: " + BB);
        return BB || "auto"
      }
    }), IB.contextHash = new IB({
      perNode: !0
    }), IB.lookAhead = new IB({
      perNode: !0
    }), IB.mounted = new IB({
      perNode: !0
    });
    class NB {
      constructor(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = BB, this.overlay = jB, this.parser = zB, this.bracketed = QB
      }
      static get(BB) {
        return BB && BB.props && BB.props[IB.mounted.id]
      }
    }
    const uB = Object.create(null);
    class UB {
      constructor(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = BB, this.props = jB, this.id = zB, this.flags = QB
      }
      static define(BB) {
        let jB = BB.props && BB.props.length ? Object.create(null) : uB,
          zB = (BB.top ? 1 : 0) | (BB.skipped ? 2 : 0) | (BB.error ? 4 : 0) | (null == BB.name ? 8 : 0),
          QB = new UB(BB.name || "", jB, BB.id, zB);
        if (BB.props)
          for (let nB of BB.props)
            if (Array.isArray(nB) || (nB = nB(QB)), nB) {
              if (nB[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              jB[nB[0].id] = nB[1]
            } return QB
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
          let jB = this.prop(IB.group);
          return !!jB && jB.indexOf(BB) > -1
        }
        return this.id == BB
      }
      static match(BB) {
        let jB = Object.create(null);
        for (let zB in BB)
          for (let QB of zB.split(" ")) jB[QB] = BB[zB];
        return BB => {
          for (let zB = BB.prop(IB.group), QB = -1; QB < (zB ? zB.length : 0); QB++) {
            let nB = jB[QB < 0 ? BB.name : zB[QB]];
            if (nB) return nB
          }
        }
      }
    }
    UB.none = new UB("", Object.create(null), 0, 8);
    class aB {
      constructor(BB) {
        this.types = BB;
        for (let jB = 0; jB < BB.length; jB++)
          if (BB[jB].id != jB) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let BB = [];
        for (var jB = arguments.length, zB = new Array(jB), QB = 0; QB < jB; QB++) zB[QB] = arguments[QB];
        for (let nB of this.types) {
          let jB = null;
          for (let BB of zB) {
            let zB = BB(nB);
            if (zB) {
              jB || (jB = Object.assign({}, nB.props));
              let BB = zB[1],
                QB = zB[0];
              QB.combine && QB.id in jB && (BB = QB.combine(jB[QB.id], BB)), jB[QB.id] = BB
            }
          }
          BB.push(jB ? new UB(nB.name, jB, nB.id, nB.flags) : nB)
        }
        return new aB(BB)
      }
    }
    const pB = new WeakMap,
      rB = new WeakMap;
    var sB;
    ! function(BB) {
      BB[BB.ExcludeBuffers = 1] = "ExcludeBuffers", BB[BB.IncludeAnonymous = 2] = "IncludeAnonymous", BB[BB.IgnoreMounts = 4] = "IgnoreMounts", BB[BB.IgnoreOverlays = 8] = "IgnoreOverlays", BB[BB.EnterBracketed = 16] = "EnterBracketed"
    }(sB || (sB = {}));
    class JB {
      constructor(BB, jB, zB, QB, nB) {
        if (this.type = BB, this.children = jB, this.positions = zB, this.length = QB, this.props = null, nB && nB.length) {
          this.props = Object.create(null);
          for (let [BB, jB] of nB) this.props["number" == typeof BB ? BB : BB.id] = jB
        }
      }
      toString() {
        let BB = NB.get(this);
        if (BB && !BB.overlay) return BB.tree.toString();
        let jB = "";
        for (let zB of this.children) {
          let BB = zB.toString();
          BB && (jB && (jB += ","), jB += BB)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (jB.length ? "(" + jB + ")" : "") : jB
      }
      cursor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new fB(this.topNode, BB)
      }
      cursorAt(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zB = pB.get(this) || this.topNode,
          QB = new fB(zB);
        return QB.moveTo(BB, jB), pB.set(this, QB._tree), QB
      }
      get topNode() {
        return new gB(this, 0, 0, null)
      }
      resolve(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zB = GB(pB.get(this) || this.topNode, BB, jB, !1);
        return pB.set(this, zB), zB
      }
      resolveInner(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zB = GB(rB.get(this) || this.topNode, BB, jB, !0);
        return rB.set(this, zB), zB
      }
      resolveStack(BB) {
        return function(BB, jB, zB) {
          let QB = BB.resolveInner(jB, zB),
            nB = null;
          for (let dB = QB instanceof gB ? QB : QB.context.parent; dB; dB = dB.parent)
            if (dB.index < 0) {
              let BB = dB.parent;
              (nB || (nB = [QB])).push(BB.resolve(jB, zB)), dB = BB
            } else {
              let BB = NB.get(dB.tree);
              if (BB && BB.overlay && BB.overlay[0].from <= jB && BB.overlay[BB.overlay.length - 1].to >= jB) {
                let IB = new gB(BB.tree, BB.overlay[0].from + dB.from, -1, dB);
                (nB || (nB = [QB])).push(GB(IB, jB, zB, !1))
              }
            } return nB ? iB(nB) : QB
        }(this, BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(BB) {
        let {
          enter: jB,
          leave: zB,
          from: QB = 0,
          to: nB = this.length
        } = BB, dB = BB.mode || 0, IB = (dB & sB.IncludeAnonymous) > 0;
        for (let NB = this.cursor(dB | sB.IncludeAnonymous);;) {
          let BB = !1;
          if (NB.from <= nB && NB.to >= QB && (!IB && NB.type.isAnonymous || !1 !== jB(NB))) {
            if (NB.firstChild()) continue;
            BB = !0
          }
          for (; BB && zB && (IB || !NB.type.isAnonymous) && zB(NB), !NB.nextSibling();) {
            if (!NB.parent()) return;
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
          for (let jB in this.props) BB.push([+jB, this.props[jB]]);
        return BB
      }
      balance() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : FB(UB.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((BB, jB, zB) => new JB(this.type, BB, jB, zB, this.propValues)), BB.makeTree || ((BB, jB, zB) => new JB(UB.none, BB, jB, zB)))
      }
      static build(BB) {
        return function(BB) {
          var jB;
          let {
            buffer: zB,
            nodeSet: nB,
            maxBufferLength: dB = QB,
            reused: NB = [],
            minRepeatType: uB = nB.types.length
          } = BB, UB = Array.isArray(zB) ? new mB(zB, zB.length) : zB, aB = nB.types, pB = 0, rB = 0;

          function sB(BB, jB, zB, QB, IB, JB) {
            let {
              id: mB,
              start: MB,
              end: EB,
              size: iB
            } = UB, qB = rB, fB = pB;
            if (iB < 0) {
              if (UB.next(), -1 == iB) {
                let jB = NB[mB];
                return zB.push(jB), void QB.push(MB - BB)
              }
              if (-3 == iB) return void(pB = mB);
              if (-4 == iB) return void(rB = mB);
              throw new RangeError(`Unrecognized record size: ${iB}`)
            }
            let oB, HB, DB = aB[mB],
              YB = MB - BB;
            if (EB - MB <= dB && (HB = tB(UB.pos - jB, IB))) {
              let jB = new Uint16Array(HB.size - HB.skip),
                zB = UB.pos - HB.size,
                QB = jB.length;
              for (; UB.pos > zB;) QB = SB(HB.start, jB, QB);
              oB = new yB(jB, EB - HB.start, nB), YB = HB.start - BB
            } else {
              let BB = UB.pos - iB;
              UB.next();
              let jB = [],
                zB = [],
                QB = mB >= uB ? mB : -1,
                nB = 0,
                IB = EB;
              for (; UB.pos > BB;) QB >= 0 && UB.id == QB && UB.size >= 0 ? (UB.end <= IB - dB && (LB(jB, zB, MB, nB, UB.end, IB, QB, qB, fB), nB = jB.length, IB = UB.end), UB.next()) : JB > 2500 ? kB(MB, BB, jB, zB) : sB(MB, BB, jB, zB, QB, JB + 1);
              if (QB >= 0 && nB > 0 && nB < jB.length && LB(jB, zB, MB, nB, MB, IB, QB, qB, fB), jB.reverse(), zB.reverse(), QB > -1 && nB > 0) {
                let BB = GB(DB, fB);
                oB = FB(DB, jB, zB, 0, jB.length, 0, EB - MB, BB, BB)
              } else oB = gB(DB, jB, zB, EB - MB, qB - EB, fB)
            }
            zB.push(oB), QB.push(YB)
          }

          function kB(BB, jB, zB, QB) {
            let IB = [],
              NB = 0,
              uB = -1;
            for (; UB.pos > jB;) {
              let {
                id: BB,
                start: jB,
                end: zB,
                size: QB
              } = UB;
              if (QB > 4) UB.next();
              else {
                if (uB > -1 && jB < uB) break;
                uB < 0 && (uB = zB - dB), IB.push(BB, jB, zB), NB++, UB.next()
              }
            }
            if (NB) {
              let jB = new Uint16Array(4 * NB),
                dB = IB[IB.length - 2];
              for (let BB = IB.length - 3, zB = 0; BB >= 0; BB -= 3) jB[zB++] = IB[BB], jB[zB++] = IB[BB + 1] - dB, jB[zB++] = IB[BB + 2] - dB, jB[zB++] = zB;
              zB.push(new yB(jB, IB[2] - dB, nB)), QB.push(dB - BB)
            }
          }

          function GB(BB, jB) {
            return (zB, QB, nB) => {
              let dB, NB, uB = 0,
                UB = zB.length - 1;
              if (UB >= 0 && (dB = zB[UB]) instanceof JB) {
                if (!UB && dB.type == BB && dB.length == nB) return dB;
                (NB = dB.prop(IB.lookAhead)) && (uB = QB[UB] + dB.length + NB)
              }
              return gB(BB, zB, QB, nB, uB, jB)
            }
          }

          function LB(BB, jB, zB, QB, dB, IB, NB, uB, UB) {
            let aB = [],
              pB = [];
            for (; BB.length > QB;) aB.push(BB.pop()), pB.push(jB.pop() + zB - dB);
            BB.push(gB(nB.types[NB], aB, pB, IB - dB, uB - IB, UB)), jB.push(dB - zB)
          }

          function gB(BB, jB, zB, QB, nB, dB, NB) {
            if (dB) {
              let BB = [IB.contextHash, dB];
              NB = NB ? [BB].concat(NB) : [BB]
            }
            if (nB > 25) {
              let BB = [IB.lookAhead, nB];
              NB = NB ? [BB].concat(NB) : [BB]
            }
            return new JB(BB, jB, zB, QB, NB)
          }

          function tB(BB, jB) {
            let zB = UB.fork(),
              QB = 0,
              nB = 0,
              IB = 0,
              NB = zB.end - dB,
              aB = {
                size: 0,
                start: 0,
                skip: 0
              };
            BB: for (let dB = zB.pos - BB; zB.pos > dB;) {
              let BB = zB.size;
              if (zB.id == jB && BB >= 0) {
                aB.size = QB, aB.start = nB, aB.skip = IB, IB += 4, QB += 4, zB.next();
                continue
              }
              let UB = zB.pos - BB;
              if (BB < 0 || UB < dB || zB.start < NB) break;
              let pB = zB.id >= uB ? 4 : 0,
                rB = zB.start;
              for (zB.next(); zB.pos > UB;) {
                if (zB.size < 0) {
                  if (-3 != zB.size && -4 != zB.size) break BB;
                  pB += 4
                } else zB.id >= uB && (pB += 4);
                zB.next()
              }
              nB = rB, QB += BB, IB += pB
            }
            return (jB < 0 || QB == BB) && (aB.size = QB, aB.start = nB, aB.skip = IB), aB.size > 4 ? aB : void 0
          }

          function SB(BB, jB, zB) {
            let {
              id: QB,
              start: nB,
              end: dB,
              size: IB
            } = UB;
            if (UB.next(), IB >= 0 && QB < uB) {
              let NB = zB;
              if (IB > 4) {
                let QB = UB.pos - (IB - 4);
                for (; UB.pos > QB;) zB = SB(BB, jB, zB)
              }
              jB[--zB] = NB, jB[--zB] = dB - BB, jB[--zB] = nB - BB, jB[--zB] = QB
            } else - 3 == IB ? pB = QB : -4 == IB && (rB = QB);
            return zB
          }
          let MB = [],
            EB = [];
          for (; UB.pos > 0;) sB(BB.start || 0, BB.bufferStart || 0, MB, EB, -1, 0);
          let iB = null !== (jB = BB.length) && void 0 !== jB ? jB : MB.length ? EB[0] + MB[0].length : 0;
          return new JB(aB[BB.topID], MB.reverse(), EB.reverse(), iB)
        }(BB)
      }
    }
    JB.empty = new JB(UB.none, [], [], 0);
    class mB {
      constructor(BB, jB) {
        this.buffer = BB, this.index = jB
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
        return new mB(this.buffer, this.index)
      }
    }
    class yB {
      constructor(BB, jB, zB) {
        this.buffer = BB, this.length = jB, this.set = zB
      }
      get type() {
        return UB.none
      }
      toString() {
        let BB = [];
        for (let jB = 0; jB < this.buffer.length;) BB.push(this.childString(jB)), jB = this.buffer[jB + 3];
        return BB.join(",")
      }
      childString(BB) {
        let jB = this.buffer[BB],
          zB = this.buffer[BB + 3],
          QB = this.set.types[jB],
          nB = QB.name;
        if (/\W/.test(nB) && !QB.isError && (nB = JSON.stringify(nB)), zB == (BB += 4)) return nB;
        let dB = [];
        for (; BB < zB;) dB.push(this.childString(BB)), BB = this.buffer[BB + 3];
        return nB + "(" + dB.join(",") + ")"
      }
      findChild(BB, jB, zB, QB, nB) {
        let {
          buffer: dB
        } = this, IB = -1;
        for (let NB = BB; NB != jB && !(kB(nB, QB, dB[NB + 1], dB[NB + 2]) && (IB = NB, zB > 0)); NB = dB[NB + 3]);
        return IB
      }
      slice(BB, jB, zB) {
        let QB = this.buffer,
          nB = new Uint16Array(jB - BB),
          dB = 0;
        for (let IB = BB, NB = 0; IB < jB;) {
          nB[NB++] = QB[IB++], nB[NB++] = QB[IB++] - zB;
          let jB = nB[NB++] = QB[IB++] - zB;
          nB[NB++] = QB[IB++] - BB, dB = Math.max(dB, jB)
        }
        return new yB(nB, dB, this.set)
      }
    }

    function kB(BB, jB, zB, QB) {
      switch (BB) {
        case -2:
          return zB < jB;
        case -1:
          return QB >= jB && zB < jB;
        case 0:
          return zB < jB && QB > jB;
        case 1:
          return zB <= jB && QB > jB;
        case 2:
          return QB > jB;
        case 4:
          return !0
      }
    }

    function GB(BB, jB, zB, QB) {
      for (var nB; BB.from == BB.to || (zB < 1 ? BB.from >= jB : BB.from > jB) || (zB > -1 ? BB.to <= jB : BB.to < jB);) {
        let jB = !QB && BB instanceof gB && BB.index < 0 ? null : BB.parent;
        if (!jB) return BB;
        BB = jB
      }
      let dB = QB ? 0 : sB.IgnoreOverlays;
      if (QB)
        for (let IB = BB, NB = IB.parent; NB; IB = NB, NB = IB.parent) IB instanceof gB && IB.index < 0 && (null === (nB = NB.enter(jB, zB, dB)) || void 0 === nB ? void 0 : nB.from) != IB.from && (BB = NB);
      for (;;) {
        let QB = BB.enter(jB, zB, dB);
        if (!QB) return BB;
        BB = QB
      }
    }
    class LB {
      cursor() {
        return new fB(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(BB) {
        let jB = tB(this, BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return jB.length ? jB[0] : null
      }
      getChildren(BB) {
        return tB(this, BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(BB) {
        return GB(this, BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(BB) {
        return GB(this, BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(BB) {
        return SB(this.parent, BB)
      }
      enterUnfinishedNodesBefore(BB) {
        let jB = this.childBefore(BB),
          zB = this;
        for (; jB;) {
          let BB = jB.lastChild;
          if (!BB || BB.to != jB.to) break;
          BB.type.isError && BB.from == BB.to ? (zB = jB, jB = BB.prevSibling) : jB = BB
        }
        return zB
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class gB extends LB {
      constructor(BB, jB, zB, QB) {
        super(), this._tree = BB, this.from = jB, this.index = zB, this._parent = QB
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
      nextChild(BB, jB, zB, QB) {
        let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let dB = this;;) {
          for (let {
              children: IB,
              positions: uB
            } = dB._tree, UB = jB > 0 ? IB.length : -1; BB != UB; BB += jB) {
            let UB, aB = IB[BB],
              pB = uB[BB] + dB.from;
            if (nB & sB.EnterBracketed && aB instanceof JB && (UB = NB.get(aB)) && !UB.overlay && UB.bracketed && zB >= pB && zB <= pB + aB.length || kB(QB, zB, pB, pB + aB.length))
              if (aB instanceof yB) {
                if (nB & sB.ExcludeBuffers) continue;
                let IB = aB.findChild(0, aB.buffer.length, jB, zB - pB, QB);
                if (IB > -1) return new EB(new MB(dB, aB, BB, pB), null, IB)
              } else if (nB & sB.IncludeAnonymous || !aB.type.isAnonymous || oB(aB)) {
              let IB;
              if (!(nB & sB.IgnoreMounts) && (IB = NB.get(aB)) && !IB.overlay) return new gB(IB.tree, pB, BB, dB);
              let uB = new gB(aB, pB, BB, dB);
              return nB & sB.IncludeAnonymous || !uB.type.isAnonymous ? uB : uB.nextChild(jB < 0 ? aB.children.length - 1 : 0, jB, zB, QB, nB)
            }
          }
          if (nB & sB.IncludeAnonymous || !dB.type.isAnonymous) return null;
          if (BB = dB.index >= 0 ? dB.index + jB : jB < 0 ? -1 : dB._parent._tree.children.length, dB = dB._parent, !dB) return null
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
      enter(BB, jB) {
        let zB, QB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(QB & sB.IgnoreOverlays) && (zB = NB.get(this._tree)) && zB.overlay) {
          let nB = BB - this.from,
            dB = QB & sB.EnterBracketed && zB.bracketed;
          for (let {
              from: BB,
              to: QB
            }
            of zB.overlay)
            if ((jB > 0 || dB ? BB <= nB : BB < nB) && (jB < 0 || dB ? QB >= nB : QB > nB)) return new gB(zB.tree, zB.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, BB, jB, QB)
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

    function tB(BB, jB, zB, QB) {
      let nB = BB.cursor(),
        dB = [];
      if (!nB.firstChild()) return dB;
      if (null != zB)
        for (let IB = !1; !IB;)
          if (IB = nB.type.is(zB), !nB.nextSibling()) return dB;
      for (;;) {
        if (null != QB && nB.type.is(QB)) return dB;
        if (nB.type.is(jB) && dB.push(nB.node), !nB.nextSibling()) return null == QB ? dB : []
      }
    }

    function SB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : jB.length - 1;
      for (let QB = BB; zB >= 0; QB = QB.parent) {
        if (!QB) return !1;
        if (!QB.type.isAnonymous) {
          if (jB[zB] && jB[zB] != QB.name) return !1;
          zB--
        }
      }
      return !0
    }
    class MB {
      constructor(BB, jB, zB, QB) {
        this.parent = BB, this.buffer = jB, this.index = zB, this.start = QB
      }
    }
    class EB extends LB {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(BB, jB, zB) {
        super(), this.context = BB, this._parent = jB, this.index = zB, this.type = BB.buffer.set.types[BB.buffer.buffer[zB]]
      }
      child(BB, jB, zB) {
        let {
          buffer: QB
        } = this.context, nB = QB.findChild(this.index + 4, QB.buffer[this.index + 3], BB, jB - this.context.start, zB);
        return nB < 0 ? null : new EB(this.context, this, nB)
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
      enter(BB, jB) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & sB.ExcludeBuffers) return null;
        let {
          buffer: zB
        } = this.context, QB = zB.findChild(this.index + 4, zB.buffer[this.index + 3], jB > 0 ? 1 : -1, BB - this.context.start, jB);
        return QB < 0 ? null : new EB(this.context, this, QB)
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
        } = this.context, jB = BB.buffer[this.index + 3];
        return jB < (this._parent ? BB.buffer[this._parent.index + 3] : BB.buffer.length) ? new EB(this.context, this._parent, jB) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: BB
        } = this.context, jB = this._parent ? this._parent.index + 4 : 0;
        return this.index == jB ? this.externalSibling(-1) : new EB(this.context, this._parent, BB.findChild(jB, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let BB = [],
          jB = [],
          {
            buffer: zB
          } = this.context,
          QB = this.index + 4,
          nB = zB.buffer[this.index + 3];
        if (nB > QB) {
          let dB = zB.buffer[this.index + 1];
          BB.push(zB.slice(QB, nB, dB)), jB.push(0)
        }
        return new JB(this.type, BB, jB, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function iB(BB) {
      if (!BB.length) return null;
      let jB = 0,
        zB = BB[0];
      for (let dB = 1; dB < BB.length; dB++) {
        let QB = BB[dB];
        (QB.from > zB.from || QB.to < zB.to) && (zB = QB, jB = dB)
      }
      let QB = zB instanceof gB && zB.index < 0 ? null : zB.parent,
        nB = BB.slice();
      return QB ? nB[jB] = QB : nB.splice(jB, 1), new qB(nB, zB)
    }
    class qB {
      constructor(BB, jB) {
        this.heads = BB, this.node = jB
      }
      get next() {
        return iB(this.heads)
      }
    }
    class fB {
      get name() {
        return this.type.name
      }
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = jB & ~sB.EnterBracketed, BB instanceof gB) this.yieldNode(BB);
        else {
          this._tree = BB.context.parent, this.buffer = BB.context;
          for (let jB = BB._parent; jB; jB = jB._parent) this.stack.unshift(jB.index);
          this.bufferNode = BB, this.yieldBuf(BB.index)
        }
      }
      yieldNode(BB) {
        return !!BB && (this._tree = BB, this.type = BB.type, this.from = BB.from, this.to = BB.to, !0)
      }
      yieldBuf(BB, jB) {
        this.index = BB;
        let {
          start: zB,
          buffer: QB
        } = this.buffer;
        return this.type = jB || QB.set.types[QB.buffer[BB]], this.from = zB + QB.buffer[BB + 1], this.to = zB + QB.buffer[BB + 2], !0
      }
      yield(BB) {
        return !!BB && (BB instanceof gB ? (this.buffer = null, this.yieldNode(BB)) : (this.buffer = BB.context, this.yieldBuf(BB.index, BB.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(BB, jB, zB) {
        if (!this.buffer) return this.yield(this._tree.nextChild(BB < 0 ? this._tree._tree.children.length - 1 : 0, BB, jB, zB, this.mode));
        let {
          buffer: QB
        } = this.buffer, nB = QB.findChild(this.index + 4, QB.buffer[this.index + 3], BB, jB - this.buffer.start, zB);
        return !(nB < 0) && (this.stack.push(this.index), this.yieldBuf(nB))
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
      enter(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(zB & sB.ExcludeBuffers) && this.enterChild(1, BB, jB) : this.yield(this._tree.enter(BB, jB, zB))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & sB.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let BB = this.mode & sB.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(BB)
      }
      sibling(BB) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + BB, BB, 0, 4, this.mode));
        let {
          buffer: jB
        } = this.buffer, zB = this.stack.length - 1;
        if (BB < 0) {
          let BB = zB < 0 ? 0 : this.stack[zB] + 4;
          if (this.index != BB) return this.yieldBuf(jB.findChild(BB, this.index, -1, 0, 4))
        } else {
          let BB = jB.buffer[this.index + 3];
          if (BB < (zB < 0 ? jB.buffer.length : jB.buffer[this.stack[zB] + 3])) return this.yieldBuf(BB)
        }
        return zB < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + BB, BB, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(BB) {
        let jB, zB, {
          buffer: QB
        } = this;
        if (QB) {
          if (BB > 0) {
            if (this.index < QB.buffer.buffer.length) return !1
          } else
            for (let BB = 0; BB < this.index; BB++)
              if (QB.buffer.buffer[BB + 3] < this.index) return !1;
          ({
            index: jB,
            parent: zB
          } = QB)
        } else({
          index: jB,
          _parent: zB
        } = this._tree);
        for (; zB;
          ({
            index: jB,
            _parent: zB
          } = zB))
          if (jB > -1)
            for (let QB = jB + BB, nB = BB < 0 ? -1 : zB._tree.children.length; QB != nB; QB += BB) {
              let BB = zB._tree.children[QB];
              if (this.mode & sB.IncludeAnonymous || BB instanceof yB || !BB.type.isAnonymous || oB(BB)) return !1
            }
        return !0
      }
      move(BB, jB) {
        if (jB && this.enterChild(BB, 0, 4)) return !0;
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
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (jB < 1 ? this.from >= BB : this.from > BB) || (jB > -1 ? this.to <= BB : this.to < BB)) && this.parent(););
        for (; this.enterChild(1, BB, jB););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let BB = this.bufferNode,
          jB = null,
          zB = 0;
        if (BB && BB.context == this.buffer) BB: for (let QB = this.index, nB = this.stack.length; nB >= 0;) {
          for (let dB = BB; dB; dB = dB._parent)
            if (dB.index == QB) {
              if (QB == this.index) return dB;
              jB = dB, zB = nB + 1;
              break BB
            } QB = this.stack[--nB]
        }
        for (let QB = zB; QB < this.stack.length; QB++) jB = new EB(this.buffer, jB, this.stack[QB]);
        return this.bufferNode = new EB(this.buffer, jB, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(BB, jB) {
        for (let zB = 0;;) {
          let QB = !1;
          if (this.type.isAnonymous || !1 !== BB(this)) {
            if (this.firstChild()) {
              zB++;
              continue
            }
            this.type.isAnonymous || (QB = !0)
          }
          for (;;) {
            if (QB && jB && jB(this), QB = this.type.isAnonymous, !zB) return;
            if (this.nextSibling()) break;
            this.parent(), zB--, QB = !0
          }
        }
      }
      matchContext(BB) {
        if (!this.buffer) return SB(this.node.parent, BB);
        let {
          buffer: jB
        } = this.buffer, {
          types: zB
        } = jB.set;
        for (let QB = BB.length - 1, nB = this.stack.length - 1; QB >= 0; nB--) {
          if (nB < 0) return SB(this._tree, BB, QB);
          let dB = zB[jB.buffer[this.stack[nB]]];
          if (!dB.isAnonymous) {
            if (BB[QB] && BB[QB] != dB.name) return !1;
            QB--
          }
        }
        return !0
      }
    }

    function oB(BB) {
      return BB.children.some((BB => BB instanceof yB || !BB.type.isAnonymous || oB(BB)))
    }
    const HB = new WeakMap;

    function DB(BB, jB) {
      if (!BB.isAnonymous || jB instanceof yB || jB.type != BB) return 1;
      let zB = HB.get(jB);
      if (null == zB) {
        zB = 1;
        for (let QB of jB.children) {
          if (QB.type != BB || !(QB instanceof JB)) {
            zB = 1;
            break
          }
          zB += DB(BB, QB)
        }
        HB.set(jB, zB)
      }
      return zB
    }

    function FB(BB, jB, zB, QB, nB, dB, IB, NB, uB) {
      let UB = 0;
      for (let sB = QB; sB < nB; sB++) UB += DB(BB, jB[sB]);
      let aB = Math.ceil(1.5 * UB / 8),
        pB = [],
        rB = [];
      return function jB(zB, QB, nB, IB, NB) {
        for (let UB = nB; UB < IB;) {
          let nB = UB,
            sB = QB[UB],
            JB = DB(BB, zB[UB]);
          for (UB++; UB < IB; UB++) {
            let jB = DB(BB, zB[UB]);
            if (JB + jB >= aB) break;
            JB += jB
          }
          if (UB == nB + 1) {
            if (JB > aB) {
              let BB = zB[nB];
              jB(BB.children, BB.positions, 0, BB.children.length, QB[nB] + NB);
              continue
            }
            pB.push(zB[nB])
          } else {
            let jB = QB[UB - 1] + zB[UB - 1].length - sB;
            pB.push(FB(BB, zB, QB, nB, UB, sB, jB, null, uB))
          }
          rB.push(sB + NB - dB)
        }
      }(jB, zB, QB, nB, 0), (NB || uB)(pB, rB, IB)
    }
    class YB {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(BB, jB, zB) {
        let QB = this.map.get(BB);
        QB || this.map.set(BB, QB = new Map), QB.set(jB, zB)
      }
      getBuffer(BB, jB) {
        let zB = this.map.get(BB);
        return zB && zB.get(jB)
      }
      set(BB, jB) {
        BB instanceof EB ? this.setBuffer(BB.context.buffer, BB.index, jB) : BB instanceof gB && this.map.set(BB.tree, jB)
      }
      get(BB) {
        return BB instanceof EB ? this.getBuffer(BB.context.buffer, BB.index) : BB instanceof gB ? this.map.get(BB.tree) : void 0
      }
      cursorSet(BB, jB) {
        BB.buffer ? this.setBuffer(BB.buffer.buffer, BB.index, jB) : this.map.set(BB.tree, jB)
      }
      cursorGet(BB) {
        return BB.buffer ? this.getBuffer(BB.buffer.buffer, BB.index) : this.map.get(BB.tree)
      }
    }
    class VB {
      constructor(BB, jB, zB, QB) {
        let nB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          dB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = BB, this.to = jB, this.tree = zB, this.offset = QB, this.open = (nB ? 1 : 0) | (dB ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          QB = [new VB(0, BB.length, BB, 0, !1, zB)];
        for (let nB of jB) nB.to > BB.length && QB.push(nB);
        return QB
      }
      static applyChanges(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!jB.length) return BB;
        let QB = [],
          nB = 1,
          dB = BB.length ? BB[0] : null;
        for (let IB = 0, NB = 0, uB = 0;; IB++) {
          let UB = IB < jB.length ? jB[IB] : null,
            aB = UB ? UB.fromA : 1e9;
          if (aB - NB >= zB)
            for (; dB && dB.from < aB;) {
              let jB = dB;
              if (NB >= jB.from || aB <= jB.to || uB) {
                let BB = Math.max(jB.from, NB) - uB,
                  zB = Math.min(jB.to, aB) - uB;
                jB = BB >= zB ? null : new VB(BB, zB, jB.tree, jB.offset + uB, IB > 0, !!UB)
              }
              if (jB && QB.push(jB), dB.to > aB) break;
              dB = nB < BB.length ? BB[nB++] : null
            }
          if (!UB) break;
          NB = UB.toA, uB = UB.toA - UB.toB
        }
        return QB
      }
    }
    class hB {
      startParse(BB, jB, zB) {
        return "string" == typeof BB && (BB = new XB(BB)), zB = zB ? zB.length ? zB.map((BB => new dB(BB.from, BB.to))) : [new dB(0, 0)] : [new dB(0, BB.length)], this.createParse(BB, jB || [], zB)
      }
      parse(BB, jB, zB) {
        let QB = this.startParse(BB, jB, zB);
        for (;;) {
          let BB = QB.advance();
          if (BB) return BB
        }
      }
    }
    class XB {
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
      read(BB, jB) {
        return this.string.slice(BB, jB)
      }
    }
    new IB({
      perNode: !0
    })
  },
  41449: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => rB,
      f: () => uB,
      g: () => pB,
      i: () => HB
    });
    var QB = zB(41445);
    let nB = 0;
    class dB {
      constructor(BB, jB, zB, QB) {
        this.name = BB, this.set = jB, this.base = zB, this.modified = QB, this.id = nB++
      }
      toString() {
        let {
          name: BB
        } = this;
        for (let jB of this.modified) jB.name && (BB = `${jB.name}(${BB})`);
        return BB
      }
      static define(BB, jB) {
        let zB = "string" == typeof BB ? BB : "?";
        if (BB instanceof dB && (jB = BB), null === jB || void 0 === jB ? void 0 : jB.base) throw new Error("Can not derive from a modified tag");
        let QB = new dB(zB, [], null, []);
        if (QB.set.push(QB), jB)
          for (let nB of jB.set) QB.set.push(nB);
        return QB
      }
      static defineModifier(BB) {
        let jB = new NB(BB);
        return BB => BB.modified.indexOf(jB) > -1 ? BB : NB.get(BB.base || BB, BB.modified.concat(jB).sort(((BB, jB) => BB.id - jB.id)))
      }
    }
    let IB = 0;
    class NB {
      constructor(BB) {
        this.name = BB, this.instances = [], this.id = IB++
      }
      static get(BB, jB) {
        if (!jB.length) return BB;
        let zB = jB[0].instances.find((zB => {
          return zB.base == BB && (QB = jB, nB = zB.modified, QB.length == nB.length && QB.every(((BB, jB) => BB == nB[jB])));
          var QB, nB
        }));
        if (zB) return zB;
        let QB = [],
          nB = new dB(BB.name, QB, BB, jB);
        for (let dB of jB) dB.instances.push(nB);
        let IB = function(BB) {
          let jB = [
            []
          ];
          for (let zB = 0; zB < BB.length; zB++)
            for (let QB = 0, nB = jB.length; QB < nB; QB++) jB.push(jB[QB].concat(BB[zB]));
          return jB.sort(((BB, jB) => jB.length - BB.length))
        }(jB);
        for (let dB of BB.set)
          if (!dB.modified.length)
            for (let BB of IB) QB.push(NB.get(dB, BB));
        return nB
      }
    }

    function uB(BB) {
      let jB = Object.create(null);
      for (let zB in BB) {
        let QB = BB[zB];
        Array.isArray(QB) || (QB = [QB]);
        for (let BB of zB.split(" "))
          if (BB) {
            let zB = [],
              nB = 2,
              dB = BB;
            for (let jB = 0;;) {
              if ("..." == dB && jB > 0 && jB + 3 == BB.length) {
                nB = 1;
                break
              }
              let QB = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(dB);
              if (!QB) throw new RangeError("Invalid path: " + BB);
              if (zB.push("*" == QB[0] ? "" : '"' == QB[0][0] ? JSON.parse(QB[0]) : QB[0]), jB += QB[0].length, jB == BB.length) break;
              let IB = BB[jB++];
              if (jB == BB.length && "!" == IB) {
                nB = 0;
                break
              }
              if ("/" != IB) throw new RangeError("Invalid path: " + BB);
              dB = BB.slice(jB)
            }
            let IB = zB.length - 1,
              NB = zB[IB];
            if (!NB) throw new RangeError("Invalid path: " + BB);
            let uB = new aB(QB, nB, IB > 0 ? zB.slice(0, IB) : null);
            jB[NB] = uB.sort(jB[NB])
          }
      }
      return UB.add(jB)
    }
    const UB = new QB.j({
      combine(BB, jB) {
        let zB, QB, nB;
        for (; BB || jB;) {
          if (!BB || jB && BB.depth >= jB.depth ? (nB = jB, jB = jB.next) : (nB = BB, BB = BB.next), zB && zB.mode == nB.mode && !nB.context && !zB.context) continue;
          let dB = new aB(nB.tags, nB.mode, nB.context);
          zB ? zB.next = dB : QB = dB, zB = dB
        }
        return QB
      }
    });
    class aB {
      constructor(BB, jB, zB, QB) {
        this.tags = BB, this.mode = jB, this.context = zB, this.next = QB
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

    function pB(BB, jB) {
      let zB = Object.create(null);
      for (let dB of BB)
        if (Array.isArray(dB.tag))
          for (let BB of dB.tag) zB[BB.id] = dB.class;
        else zB[dB.tag.id] = dB.class;
      let {
        scope: QB,
        all: nB = null
      } = jB || {};
      return {
        style: BB => {
          let jB = nB;
          for (let QB of BB)
            for (let BB of QB.set) {
              let QB = zB[BB.id];
              if (QB) {
                jB = jB ? jB + " " + QB : QB;
                break
              }
            }
          return jB
        },
        scope: QB
      }
    }

    function rB(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : BB.length,
        dB = new sB(QB, Array.isArray(jB) ? jB : [jB], zB);
      dB.highlightRange(BB.cursor(), QB, nB, "", dB.highlighters), dB.flush(nB)
    }
    aB.empty = new aB([], 2, null);
    class sB {
      constructor(BB, jB, zB) {
        this.at = BB, this.highlighters = jB, this.span = zB, this.class = ""
      }
      startSpan(BB, jB) {
        jB != this.class && (this.flush(BB), BB > this.at && (this.at = BB), this.class = jB)
      }
      flush(BB) {
        BB > this.at && this.class && this.span(this.at, BB, this.class)
      }
      highlightRange(BB, jB, zB, nB, dB) {
        let {
          type: IB,
          from: NB,
          to: uB
        } = BB;
        if (NB >= zB || uB <= jB) return;
        IB.isTop && (dB = this.highlighters.filter((BB => !BB.scope || BB.scope(IB))));
        let pB = nB,
          rB = function(BB) {
            let jB = BB.type.prop(UB);
            for (; jB && jB.context && !BB.matchContext(jB.context);) jB = jB.next;
            return jB || null
          }(BB) || aB.empty,
          sB = function(BB, jB) {
            let zB = null;
            for (let QB of BB) {
              let BB = QB.style(jB);
              BB && (zB = zB ? zB + " " + BB : BB)
            }
            return zB
          }(dB, rB.tags);
        if (sB && (pB && (pB += " "), pB += sB, 1 == rB.mode && (nB += (nB ? " " : "") + sB)), this.startSpan(Math.max(jB, NB), pB), rB.opaque) return;
        let JB = BB.tree && BB.tree.prop(QB.j.mounted);
        if (JB && JB.overlay) {
          let QB = BB.node.enter(JB.overlay[0].from + NB, 1),
            IB = this.highlighters.filter((BB => !BB.scope || BB.scope(JB.tree.type))),
            UB = BB.firstChild();
          for (let aB = 0, rB = NB;; aB++) {
            let sB = aB < JB.overlay.length ? JB.overlay[aB] : null,
              mB = sB ? sB.from + NB : uB,
              yB = Math.max(jB, rB),
              kB = Math.min(zB, mB);
            if (yB < kB && UB)
              for (; BB.from < kB && (this.highlightRange(BB, yB, kB, nB, dB), this.startSpan(Math.min(kB, BB.to), pB), !(BB.to >= mB) && BB.nextSibling()););
            if (!sB || mB > zB) break;
            rB = sB.to + NB, rB > jB && (this.highlightRange(QB.cursor(), Math.max(jB, sB.from + NB), Math.min(zB, rB), "", IB), this.startSpan(Math.min(zB, rB), pB))
          }
          UB && BB.parent()
        } else if (BB.firstChild()) {
          JB && (nB = "");
          do {
            if (!(BB.to <= jB)) {
              if (BB.from >= zB) break;
              this.highlightRange(BB, jB, zB, nB, dB), this.startSpan(Math.min(zB, BB.to), pB)
            }
          } while (BB.nextSibling());
          BB.parent()
        }
      }
    }
    const JB = dB.define,
      mB = JB(),
      yB = JB(),
      kB = JB(yB),
      GB = JB(yB),
      LB = JB(),
      gB = JB(LB),
      tB = JB(LB),
      SB = JB(),
      MB = JB(SB),
      EB = JB(),
      iB = JB(),
      qB = JB(),
      fB = JB(qB),
      oB = JB(),
      HB = {
        comment: mB,
        lineComment: JB(mB),
        blockComment: JB(mB),
        docComment: JB(mB),
        name: yB,
        variableName: JB(yB),
        typeName: kB,
        tagName: JB(kB),
        propertyName: GB,
        attributeName: JB(GB),
        className: JB(yB),
        labelName: JB(yB),
        namespace: JB(yB),
        macroName: JB(yB),
        literal: LB,
        string: gB,
        docString: JB(gB),
        character: JB(gB),
        attributeValue: JB(gB),
        number: tB,
        integer: JB(tB),
        float: JB(tB),
        bool: JB(LB),
        regexp: JB(LB),
        escape: JB(LB),
        color: JB(LB),
        url: JB(LB),
        keyword: EB,
        self: JB(EB),
        null: JB(EB),
        atom: JB(EB),
        unit: JB(EB),
        modifier: JB(EB),
        operatorKeyword: JB(EB),
        controlKeyword: JB(EB),
        definitionKeyword: JB(EB),
        moduleKeyword: JB(EB),
        operator: iB,
        derefOperator: JB(iB),
        arithmeticOperator: JB(iB),
        logicOperator: JB(iB),
        bitwiseOperator: JB(iB),
        compareOperator: JB(iB),
        updateOperator: JB(iB),
        definitionOperator: JB(iB),
        typeOperator: JB(iB),
        controlOperator: JB(iB),
        punctuation: qB,
        separator: JB(qB),
        bracket: fB,
        angleBracket: JB(fB),
        squareBracket: JB(fB),
        paren: JB(fB),
        brace: JB(fB),
        content: SB,
        heading: MB,
        heading1: JB(MB),
        heading2: JB(MB),
        heading3: JB(MB),
        heading4: JB(MB),
        heading5: JB(MB),
        heading6: JB(MB),
        contentSeparator: JB(SB),
        list: JB(SB),
        quote: JB(SB),
        emphasis: JB(SB),
        strong: JB(SB),
        link: JB(SB),
        monospace: JB(SB),
        strikethrough: JB(SB),
        inserted: JB(),
        deleted: JB(),
        changed: JB(),
        invalid: JB(),
        meta: oB,
        documentMeta: JB(oB),
        annotation: JB(oB),
        processingInstruction: JB(oB),
        definition: dB.defineModifier("definition"),
        constant: dB.defineModifier("constant"),
        function: dB.defineModifier("function"),
        standard: dB.defineModifier("standard"),
        local: dB.defineModifier("local"),
        special: dB.defineModifier("special")
      };
    for (let DB in HB) {
      let BB = HB[DB];
      BB instanceof dB && (BB.name = DB)
    }
    pB([{
      tag: HB.link,
      class: "tok-link"
    }, {
      tag: HB.heading,
      class: "tok-heading"
    }, {
      tag: HB.emphasis,
      class: "tok-emphasis"
    }, {
      tag: HB.strong,
      class: "tok-strong"
    }, {
      tag: HB.keyword,
      class: "tok-keyword"
    }, {
      tag: HB.atom,
      class: "tok-atom"
    }, {
      tag: HB.bool,
      class: "tok-bool"
    }, {
      tag: HB.url,
      class: "tok-url"
    }, {
      tag: HB.labelName,
      class: "tok-labelName"
    }, {
      tag: HB.inserted,
      class: "tok-inserted"
    }, {
      tag: HB.deleted,
      class: "tok-deleted"
    }, {
      tag: HB.literal,
      class: "tok-literal"
    }, {
      tag: HB.string,
      class: "tok-string"
    }, {
      tag: HB.number,
      class: "tok-number"
    }, {
      tag: [HB.regexp, HB.escape, HB.special(HB.string)],
      class: "tok-string2"
    }, {
      tag: HB.variableName,
      class: "tok-variableName"
    }, {
      tag: HB.local(HB.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: HB.definition(HB.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: HB.special(HB.variableName),
      class: "tok-variableName2"
    }, {
      tag: HB.definition(HB.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: HB.typeName,
      class: "tok-typeName"
    }, {
      tag: HB.namespace,
      class: "tok-namespace"
    }, {
      tag: HB.className,
      class: "tok-className"
    }, {
      tag: HB.macroName,
      class: "tok-macroName"
    }, {
      tag: HB.propertyName,
      class: "tok-propertyName"
    }, {
      tag: HB.operator,
      class: "tok-operator"
    }, {
      tag: HB.comment,
      class: "tok-comment"
    }, {
      tag: HB.meta,
      class: "tok-meta"
    }, {
      tag: HB.invalid,
      class: "tok-invalid"
    }, {
      tag: HB.punctuation,
      class: "tok-punctuation"
    }])
  },
  41458: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => NB.k,
      f: () => IB.u,
      i: () => IB.D,
      l: () => IB.F,
      m: () => NB.o,
      n: () => Mz,
      o: () => NB.Q,
      r: () => NB.lb
    });
    var QB = zB(1404),
      nB = zB(1399),
      dB = zB(62),
      IB = zB(41408),
      NB = zB(41415),
      uB = zB(41437),
      UB = zB(41445);

    function aB(BB, jB) {
      return zB => {
        let {
          state: QB,
          dispatch: nB
        } = zB;
        if (QB.readOnly) return !1;
        let dB = BB(jB, QB);
        return !!dB && (nB(QB.update(dB)), !0)
      }
    }
    const pB = aB(kB, 0),
      rB = aB(yB, 0),
      sB = aB(((BB, jB) => yB(BB, jB, function(BB) {
        let jB = [];
        for (let zB of BB.selection.gy) {
          let QB = BB.doc.lineAt(zB.from),
            nB = zB.to <= QB.to ? QB : BB.doc.lineAt(zB.to);
          nB.from > QB.from && nB.from == zB.to && (nB = zB.to == QB.to + 1 ? QB : BB.doc.lineAt(zB.to - 1));
          let dB = jB.length - 1;
          dB >= 0 && jB[dB].to > QB.from ? jB[dB].to = nB.to : jB.push({
            from: QB.from + /^\s*/.exec(QB.text)[0].length,
            to: nB.to
          })
        }
        return jB
      }(jB))), 0);

    function JB(BB, jB) {
      let zB = BB.languageDataAt("commentTokens", jB, 1);
      return zB.length ? zB[0] : {}
    }
    const mB = 50;

    function yB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : jB.selection.gy,
        QB = zB.map((BB => JB(jB, BB.from).block));
      if (!QB.every((BB => BB))) return null;
      let nB = zB.map(((BB, zB) => function(BB, jB, zB, QB) {
        let nB, dB, {
            open: IB,
            close: NB
          } = jB,
          uB = BB.sliceDoc(zB - mB, zB),
          UB = BB.sliceDoc(QB, QB + mB),
          aB = /\s*$/.exec(uB)[0].length,
          pB = /^\s*/.exec(UB)[0].length,
          rB = uB.length - aB;
        if (uB.slice(rB - IB.length, rB) == IB && UB.slice(pB, pB + NB.length) == NB) return {
          open: {
            pos: zB - aB,
            margin: aB && 1
          },
          close: {
            pos: QB + pB,
            margin: pB && 1
          }
        };
        QB - zB <= 2 * mB ? nB = dB = BB.sliceDoc(zB, QB) : (nB = BB.sliceDoc(zB, zB + mB), dB = BB.sliceDoc(QB - mB, QB));
        let sB = /^\s*/.exec(nB)[0].length,
          JB = /\s*$/.exec(dB)[0].length,
          yB = dB.length - JB - NB.length;
        return nB.slice(sB, sB + IB.length) == IB && dB.slice(yB, yB + NB.length) == NB ? {
          open: {
            pos: zB + sB + IB.length,
            margin: /\s/.test(nB.charAt(sB + IB.length)) ? 1 : 0
          },
          close: {
            pos: QB - JB - NB.length,
            margin: /\s/.test(dB.charAt(yB - 1)) ? 1 : 0
          }
        } : null
      }(jB, QB[zB], BB.from, BB.to)));
      if (2 != BB && !nB.every((BB => BB))) return {
        changes: jB.changes(zB.map(((BB, jB) => nB[jB] ? [] : [{
          from: BB.from,
          insert: QB[jB].open + " "
        }, {
          from: BB.to,
          insert: " " + QB[jB].close
        }])))
      };
      if (1 != BB && nB.some((BB => BB))) {
        let BB = [];
        for (let jB, zB = 0; zB < nB.length; zB++)
          if (jB = nB[zB]) {
            let nB = QB[zB],
              {
                open: dB,
                close: IB
              } = jB;
            BB.push({
              from: dB.pos - nB.open.length,
              to: dB.pos + dB.margin
            }, {
              from: IB.pos - IB.margin,
              to: IB.pos + nB.close.length
            })
          } return {
          changes: BB
        }
      }
      return null
    }

    function kB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : jB.selection.gy,
        QB = [],
        nB = -1;
      BB: for (let {
          from: dB,
          to: IB
        }
        of zB) {
        let BB, zB = QB.length,
          NB = 1e9;
        for (let uB = dB; uB <= IB;) {
          let zB = jB.doc.lineAt(uB);
          if (void 0 == BB && (BB = JB(jB, zB.from).line, !BB)) continue BB;
          if (zB.from > nB && (dB == IB || IB > zB.from)) {
            nB = zB.from;
            let jB = /^\s*/.exec(zB.text)[0].length,
              dB = jB == zB.length,
              IB = zB.text.slice(jB, jB + BB.length) == BB ? jB : -1;
            jB < zB.text.length && jB < NB && (NB = jB), QB.push({
              line: zB,
              comment: IB,
              token: BB,
              indent: jB,
              empty: dB,
              single: !1
            })
          }
          uB = zB.to + 1
        }
        if (NB < 1e9)
          for (let jB = zB; jB < QB.length; jB++) QB[jB].indent < QB[jB].line.text.length && (QB[jB].indent = NB);
        QB.length == zB + 1 && (QB[zB].single = !0)
      }
      if (2 != BB && QB.some((BB => BB.comment < 0 && (!BB.empty || BB.single)))) {
        let BB = [];
        for (let {
            line: jB,
            token: nB,
            indent: dB,
            empty: IB,
            single: NB
          }
          of QB) !NB && IB || BB.push({
          from: jB.from + dB,
          insert: nB + " "
        });
        let zB = jB.changes(BB);
        return {
          changes: zB,
          selection: jB.selection.map(zB, 1)
        }
      }
      if (1 != BB && QB.some((BB => BB.comment >= 0))) {
        let BB = [];
        for (let {
            line: jB,
            comment: zB,
            token: nB
          }
          of QB)
          if (zB >= 0) {
            let QB = jB.from + zB,
              dB = QB + nB.length;
            " " == jB.text[dB - jB.from] && dB++, BB.push({
              from: QB,
              to: dB
            })
          } return {
          changes: BB
        }
      }
      return null
    }
    const GB = IB.c.define(),
      LB = IB.c.define(),
      gB = IB.p.define(),
      tB = IB.p.define({
        combine: BB => (0, IB.O)(BB, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (BB, jB) => jB
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (BB, jB) => (zB, QB) => BB(zB, QB) || jB(zB, QB)
        })
      }),
      SB = IB.F.define({
        create: () => TB.empty,
        update(BB, jB) {
          let zB = jB.state.facet(tB),
            QB = jB.annotation(GB);
          if (QB) {
            let nB = oB.fromTransaction(jB, QB.selection),
              dB = QB.side,
              IB = 0 == dB ? BB.undone : BB.done;
            return IB = nB ? HB(IB, IB.length, zB.minDepth, nB) : VB(IB, jB.startState.selection), new TB(0 == dB ? QB.rest : IB, 0 == dB ? IB : QB.rest)
          }
          let nB = jB.annotation(LB);
          if ("full" != nB && "before" != nB || (BB = BB.isolate()), !1 === jB.annotation(IB.I.addToHistory)) return jB.changes.empty ? BB : BB.addMapping(jB.changes.desc);
          let dB = oB.fromTransaction(jB),
            NB = jB.annotation(IB.I.time),
            uB = jB.annotation(IB.I.userEvent);
          return dB ? BB = BB.addChanges(dB, NB, uB, zB, jB) : jB.selection && (BB = BB.addSelection(jB.startState.selection, NB, uB, zB.newGroupDelay)), "full" != nB && "after" != nB || (BB = BB.isolate()), BB
        },
        toJSON: BB => ({
          done: BB.done.map((BB => BB.toJSON())),
          undone: BB.undone.map((BB => BB.toJSON()))
        }),
        fromJSON: BB => new TB(BB.done.map(oB.fromJSON), BB.undone.map(oB.fromJSON))
      });

    function MB(BB, jB) {
      return function(zB) {
        let {
          state: QB,
          dispatch: nB
        } = zB;
        if (!jB && QB.readOnly) return !1;
        let dB = QB.field(SB, !1);
        if (!dB) return !1;
        let IB = dB.pop(BB, QB, jB);
        return !!IB && (nB(IB), !0)
      }
    }
    const EB = MB(0, !1),
      iB = MB(1, !1),
      qB = MB(0, !0),
      fB = MB(1, !0);
    class oB {
      constructor(BB, jB, zB, QB, nB) {
        this.changes = BB, this.effects = jB, this.mapped = zB, this.startSelection = QB, this.selectionsAfter = nB
      }
      setSelAfter(BB) {
        return new oB(this.changes, this.effects, this.mapped, this.startSelection, BB)
      }
      toJSON() {
        var BB, jB, zB;
        return {
          changes: null === (BB = this.changes) || void 0 === BB ? void 0 : BB.toJSON(),
          mapped: null === (jB = this.mapped) || void 0 === jB ? void 0 : jB.toJSON(),
          startSelection: null === (zB = this.startSelection) || void 0 === zB ? void 0 : zB.toJSON(),
          selectionsAfter: this.selectionsAfter.map((BB => BB.toJSON()))
        }
      }
      static fromJSON(BB) {
        return new oB(BB.changes && IB.ChangeSet.fromJSON(BB.changes), [], BB.mapped && IB.d.fromJSON(BB.mapped), BB.startSelection && IB.i.fromJSON(BB.startSelection), BB.selectionsAfter.map(IB.i.fromJSON))
      }
      static fromTransaction(BB, jB) {
        let zB = FB;
        for (let QB of BB.startState.facet(gB)) {
          let jB = QB(BB);
          jB.length && (zB = zB.concat(jB))
        }
        return !zB.length && BB.changes.empty ? null : new oB(BB.changes.invert(BB.startState.doc), zB, void 0, jB || BB.startState.selection, FB)
      }
      static selection(BB) {
        return new oB(void 0, FB, void 0, void 0, BB)
      }
    }

    function HB(BB, jB, zB, QB) {
      let nB = jB + 1 > zB + 20 ? jB - zB - 1 : 0,
        dB = BB.slice(nB, jB);
      return dB.push(QB), dB
    }

    function DB(BB, jB) {
      return BB.length ? jB.length ? BB.concat(jB) : BB : jB
    }
    const FB = [],
      YB = 200;

    function VB(BB, jB) {
      if (BB.length) {
        let zB = BB[BB.length - 1],
          QB = zB.selectionsAfter.slice(Math.max(0, zB.selectionsAfter.length - YB));
        return QB.length && QB[QB.length - 1].eq(jB) ? BB : (QB.push(jB), HB(BB, BB.length - 1, 1e9, zB.setSelAfter(QB)))
      }
      return [oB.selection([jB])]
    }

    function hB(BB) {
      let jB = BB[BB.length - 1],
        zB = BB.slice();
      return zB[BB.length - 1] = jB.setSelAfter(jB.selectionsAfter.slice(0, jB.selectionsAfter.length - 1)), zB
    }

    function XB(BB, jB) {
      if (!BB.length) return BB;
      let zB = BB.length,
        QB = FB;
      for (; zB;) {
        let nB = ZB(BB[zB - 1], jB, QB);
        if (nB.changes && !nB.changes.empty || nB.effects.length) {
          let jB = BB.slice(0, zB);
          return jB[zB - 1] = nB, jB
        }
        jB = nB.mapped, zB--, QB = nB.selectionsAfter
      }
      return QB.length ? [oB.selection(QB)] : FB
    }

    function ZB(BB, jB, zB) {
      let QB = DB(BB.selectionsAfter.length ? BB.selectionsAfter.map((BB => BB.map(jB))) : FB, zB);
      if (!BB.changes) return oB.selection(QB);
      let nB = BB.changes.map(jB),
        dB = jB.mapDesc(BB.changes, !0),
        NB = BB.mapped ? BB.mapped.composeDesc(dB) : dB;
      return new oB(nB, IB.D.mapEffects(BB.effects, jB), NB, BB.startSelection.map(dB), QB)
    }
    const AB = /^(input\.type|delete)($|\.)/;
    class TB {
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = BB, this.undone = jB, this.prevTime = zB, this.prevUserEvent = QB
      }
      isolate() {
        return this.prevTime ? new TB(this.done, this.undone) : this
      }
      addChanges(BB, jB, zB, QB, nB) {
        let dB = this.done,
          NB = dB[dB.length - 1];
        return dB = NB && NB.changes && !NB.changes.empty && BB.changes && (!zB || AB.test(zB)) && (!NB.selectionsAfter.length && jB - this.prevTime < QB.newGroupDelay && QB.joinToEvent(nB, function(BB, jB) {
          let zB = [],
            QB = !1;
          return BB.iterChangedRanges(((BB, jB) => zB.push(BB, jB))), jB.iterChangedRanges(((BB, jB, nB, dB) => {
            for (let IB = 0; IB < zB.length;) {
              let BB = zB[IB++],
                jB = zB[IB++];
              dB >= BB && nB <= jB && (QB = !0)
            }
          })), QB
        }(NB.changes, BB.changes)) || "input.type.compose" == zB) ? HB(dB, dB.length - 1, QB.minDepth, new oB(BB.changes.compose(NB.changes), DB(IB.D.mapEffects(BB.effects, NB.changes), NB.effects), NB.mapped, NB.startSelection, FB)) : HB(dB, dB.length, QB.minDepth, BB), new TB(dB, FB, jB, zB)
      }
      addSelection(BB, jB, zB, QB) {
        let nB = this.done.length ? this.done[this.done.length - 1].selectionsAfter : FB;
        return nB.length > 0 && jB - this.prevTime < QB && zB == this.prevUserEvent && zB && /^select($|\.)/.test(zB) && (dB = nB[nB.length - 1], IB = BB, dB.gy.length == IB.gy.length && 0 === dB.gy.filter(((BB, jB) => BB.empty != IB.gy[jB].empty)).length) ? this : new TB(VB(this.done, BB), this.undone, jB, zB);
        var dB, IB
      }
      addMapping(BB) {
        return new TB(XB(this.done, BB), XB(this.undone, BB), this.prevTime, this.prevUserEvent)
      }
      pop(BB, jB, zB) {
        let QB = 0 == BB ? this.done : this.undone;
        if (0 == QB.length) return null;
        let nB = QB[QB.length - 1],
          dB = nB.selectionsAfter[0] || (nB.startSelection ? nB.startSelection.map(nB.changes.invertedDesc, 1) : jB.selection);
        if (zB && nB.selectionsAfter.length) return jB.update({
          selection: nB.selectionsAfter[nB.selectionsAfter.length - 1],
          annotations: GB.of({
            side: BB,
            rest: hB(QB),
            selection: dB
          }),
          userEvent: 0 == BB ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (nB.changes) {
          let zB = 1 == QB.length ? FB : QB.slice(0, QB.length - 1);
          return nB.mapped && (zB = XB(zB, nB.mapped)), jB.update({
            changes: nB.changes,
            selection: nB.startSelection,
            effects: nB.effects,
            annotations: GB.of({
              side: BB,
              rest: zB,
              selection: dB
            }),
            filter: !1,
            userEvent: 0 == BB ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    TB.empty = new TB(FB, FB);
    const PB = [{
      key: "Mod-z",
      run: EB,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: iB,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: iB,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: qB,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: fB,
      preventDefault: !0
    }];

    function WB(BB, jB) {
      return IB.i.create(BB.gy.map(jB), BB.mainIndex)
    }

    function eB(BB, jB) {
      return BB.update({
        selection: jB,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function lB(BB, jB) {
      let {
        state: zB,
        dispatch: QB
      } = BB, nB = WB(zB.selection, jB);
      return !nB.eq(zB.selection, !0) && (QB(eB(zB, nB)), !0)
    }

    function wB(BB, jB) {
      return IB.i.cursor(jB ? BB.to : BB.from)
    }

    function xB(BB, jB) {
      return lB(BB, (zB => zB.empty ? BB.moveByChar(zB, jB) : wB(zB, jB)))
    }

    function KB(BB) {
      return BB.textDirectionAt(BB.state.selection.main.head) == NB.h.LTR
    }
    const CB = BB => xB(BB, !KB(BB)),
      cB = BB => xB(BB, KB(BB));

    function bB(BB, jB) {
      return lB(BB, (zB => zB.empty ? BB.moveByGroup(zB, jB) : wB(zB, jB)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function vB(BB, jB, zB) {
      if (jB.type.prop(zB)) return !0;
      let QB = jB.to - jB.from;
      return QB && (QB > 2 || /[^\s,.;:]/.test(BB.sliceDoc(jB.from, jB.to))) || jB.firstChild
    }

    function RB(BB, jB, zB) {
      let QB, nB, dB = (0, uB.lb)(BB).resolveInner(jB.head),
        NB = zB ? UB.j.closedBy : UB.j.openedBy;
      for (let IB = jB.head;;) {
        let jB = zB ? dB.childAfter(IB) : dB.childBefore(IB);
        if (!jB) break;
        vB(BB, jB, NB) ? dB = jB : IB = zB ? jB.to : jB.from
      }
      return nB = dB.type.prop(NB) && (QB = zB ? (0, uB.cb)(BB, dB.from, 1) : (0, uB.cb)(BB, dB.to, -1)) && QB.matched ? zB ? QB.end.to : QB.end.from : zB ? dB.to : dB.from, IB.i.cursor(nB, zB ? -1 : 1)
    }

    function OB(BB, jB) {
      return lB(BB, (zB => {
        if (!zB.empty) return wB(zB, jB);
        let QB = BB.moveVertically(zB, jB);
        return QB.head != zB.head ? QB : BB.moveToLineBoundary(zB, jB)
      }))
    }
    const Bj = BB => OB(BB, !1),
      jj = BB => OB(BB, !0);

    function zj(BB) {
      let jB, zB = BB.scrollDOM.clientHeight < BB.scrollDOM.scrollHeight - 2,
        QB = 0,
        nB = 0;
      if (zB) {
        for (let jB of BB.state.facet(NB.k.scrollMargins)) {
          let zB = jB(BB);
          (null === zB || void 0 === zB ? void 0 : zB.top) && (QB = Math.max(null === zB || void 0 === zB ? void 0 : zB.top, QB)), (null === zB || void 0 === zB ? void 0 : zB.bottom) && (nB = Math.max(null === zB || void 0 === zB ? void 0 : zB.bottom, nB))
        }
        jB = BB.scrollDOM.clientHeight - QB - nB
      } else jB = (BB.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: QB,
        marginBottom: nB,
        selfScroll: zB,
        height: Math.max(BB.defaultLineHeight, jB - 5)
      }
    }

    function Qj(BB, jB) {
      let zB, QB = zj(BB),
        {
          state: nB
        } = BB,
        dB = WB(nB.selection, (zB => zB.empty ? BB.moveVertically(zB, jB, QB.height) : wB(zB, jB)));
      if (dB.eq(nB.selection)) return !1;
      if (QB.selfScroll) {
        let jB = BB.coordsAtPos(nB.selection.main.head),
          IB = BB.scrollDOM.getBoundingClientRect(),
          uB = IB.top + QB.marginTop,
          UB = IB.bottom - QB.marginBottom;
        jB && jB.top > uB && jB.bottom < UB && (zB = NB.k.scrollIntoView(dB.main.head, {
          y: "start",
          yMargin: jB.top - uB
        }))
      }
      return BB.dispatch(eB(nB, dB), {
        effects: zB
      }), !0
    }
    const nj = BB => Qj(BB, !1),
      dj = BB => Qj(BB, !0);

    function Ij(BB, jB, zB) {
      let QB = BB.lineBlockAt(jB.head),
        nB = BB.moveToLineBoundary(jB, zB);
      if (nB.head == jB.head && nB.head != (zB ? QB.to : QB.from) && (nB = BB.moveToLineBoundary(jB, zB, !1)), !zB && nB.head == QB.from && QB.length) {
        let zB = /^\s*/.exec(BB.state.sliceDoc(QB.from, Math.min(QB.from + 100, QB.to)))[0].length;
        zB && jB.head != QB.from + zB && (nB = IB.i.cursor(QB.from + zB))
      }
      return nB
    }

    function Nj(BB, jB, zB) {
      let QB = !1,
        nB = WB(BB.selection, (jB => {
          let nB = (0, uB.cb)(BB, jB.head, -1) || (0, uB.cb)(BB, jB.head, 1) || jB.head > 0 && (0, uB.cb)(BB, jB.head - 1, 1) || jB.head < BB.doc.length && (0, uB.cb)(BB, jB.head + 1, -1);
          if (!nB || !nB.end) return jB;
          QB = !0;
          let dB = nB.start.from == jB.head ? nB.end.to : nB.end.from;
          return zB ? IB.i.range(jB.anchor, dB) : IB.i.cursor(dB)
        }));
      return !!QB && (jB(eB(BB, nB)), !0)
    }

    function uj(BB, jB) {
      let zB = WB(BB.state.selection, (BB => {
        let zB = jB(BB);
        return IB.i.range(BB.anchor, zB.head, zB.goalColumn, zB.bidiLevel || void 0, zB.assoc)
      }));
      return !zB.eq(BB.state.selection) && (BB.dispatch(eB(BB.state, zB)), !0)
    }

    function Uj(BB, jB) {
      return uj(BB, (zB => BB.moveByChar(zB, jB)))
    }
    const aj = BB => Uj(BB, !KB(BB)),
      pj = BB => Uj(BB, KB(BB));

    function rj(BB, jB) {
      return uj(BB, (zB => BB.moveByGroup(zB, jB)))
    }

    function sj(BB, jB) {
      return uj(BB, (zB => BB.moveVertically(zB, jB)))
    }
    const Jj = BB => sj(BB, !1),
      mj = BB => sj(BB, !0);

    function yj(BB, jB) {
      return uj(BB, (zB => BB.moveVertically(zB, jB, zj(BB).height)))
    }
    const kj = BB => yj(BB, !1),
      Gj = BB => yj(BB, !0),
      Lj = BB => {
        let {
          state: jB,
          dispatch: zB
        } = BB;
        return zB(eB(jB, {
          anchor: 0
        })), !0
      },
      gj = BB => {
        let {
          state: jB,
          dispatch: zB
        } = BB;
        return zB(eB(jB, {
          anchor: jB.doc.length
        })), !0
      },
      tj = BB => {
        let {
          state: jB,
          dispatch: zB
        } = BB;
        return zB(eB(jB, {
          anchor: jB.selection.main.anchor,
          head: 0
        })), !0
      },
      Sj = BB => {
        let {
          state: jB,
          dispatch: zB
        } = BB;
        return zB(eB(jB, {
          anchor: jB.selection.main.anchor,
          head: jB.doc.length
        })), !0
      };

    function Mj(BB, jB) {
      let {
        state: zB
      } = BB, QB = zB.selection, nB = zB.selection.gy.slice();
      for (let dB of zB.selection.gy) {
        let QB = zB.doc.lineAt(dB.head);
        if (jB ? QB.to < BB.state.doc.length : QB.from > 0)
          for (let zB = dB;;) {
            let dB = BB.moveVertically(zB, jB);
            if (dB.head < QB.from || dB.head > QB.to) {
              nB.some((BB => BB.head == dB.head)) || nB.push(dB);
              break
            }
            if (dB.head == zB.head) break;
            zB = dB
          }
      }
      return nB.length != QB.gy.length && (BB.dispatch(eB(zB, IB.i.create(nB, nB.length - 1))), !0)
    }

    function Ej(BB, jB) {
      if (BB.state.readOnly) return !1;
      let zB = "delete.selection",
        {
          state: QB
        } = BB,
        nB = QB.changeByRange((QB => {
          let {
            from: nB,
            to: dB
          } = QB;
          if (nB == dB) {
            let IB = jB(QB);
            IB < nB ? (zB = "delete.backward", IB = ij(BB, IB, !1)) : IB > nB && (zB = "delete.forward", IB = ij(BB, IB, !0)), nB = Math.min(nB, IB), dB = Math.max(dB, IB)
          } else nB = ij(BB, nB, !1), dB = ij(BB, dB, !0);
          return nB == dB ? {
            range: QB
          } : {
            changes: {
              from: nB,
              to: dB
            },
            range: IB.i.cursor(nB, nB < QB.head ? -1 : 1)
          }
        }));
      return !nB.changes.empty && (BB.dispatch(QB.update(nB, {
        scrollIntoView: !0,
        userEvent: zB,
        effects: "delete.selection" == zB ? NB.k.announce.of(QB.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function ij(BB, jB, zB) {
      if (BB instanceof NB.k)
        for (let QB of BB.state.facet(NB.k.atomicRanges).map((jB => jB(BB)))) QB.between(jB, jB, ((BB, QB) => {
          BB < jB && QB > jB && (jB = zB ? QB : BB)
        }));
      return jB
    }
    const qj = (BB, jB, zB) => Ej(BB, (QB => {
        let nB, dB, NB = QB.from,
          {
            state: UB
          } = BB,
          aB = UB.doc.lineAt(NB);
        if (zB && !jB && NB > aB.from && NB < aB.from + 200 && !/[^ \t]/.test(nB = aB.text.slice(0, NB - aB.from))) {
          if ("\t" == nB[nB.length - 1]) return NB - 1;
          let BB = (0, IB.Q)(nB, UB.tabSize) % (0, uB.P)(UB) || (0, uB.P)(UB);
          for (let jB = 0; jB < BB && " " == nB[nB.length - 1 - jB]; jB++) NB--;
          dB = NB
        } else dB = (0, IB.R)(aB.text, NB - aB.from, jB, jB) + aB.from, dB == NB && aB.number != (jB ? UB.doc.lines : 1) ? dB += jB ? 1 : -1 : !jB && /[\ufe00-\ufe0f]/.test(aB.text.slice(dB - aB.from, NB - aB.from)) && (dB = (0, IB.R)(aB.text, dB - aB.from, !1, !1) + aB.from);
        return dB
      })),
      fj = BB => qj(BB, !1, !0),
      oj = BB => qj(BB, !0, !1),
      Hj = (BB, jB) => Ej(BB, (zB => {
        let QB = zB.head,
          {
            state: nB
          } = BB,
          dB = nB.doc.lineAt(QB),
          NB = nB.charCategorizer(QB);
        for (let BB = null;;) {
          if (QB == (jB ? dB.to : dB.from)) {
            QB == zB.head && dB.number != (jB ? nB.doc.lines : 1) && (QB += jB ? 1 : -1);
            break
          }
          let uB = (0, IB.R)(dB.text, QB - dB.from, jB) + dB.from,
            UB = dB.text.slice(Math.min(QB, uB) - dB.from, Math.max(QB, uB) - dB.from),
            aB = NB(UB);
          if (null != BB && aB != BB) break;
          " " == UB && QB == zB.head || (BB = aB), QB = uB
        }
        return QB
      })),
      Dj = BB => Hj(BB, !1);

    function Fj(BB) {
      let jB = [],
        zB = -1;
      for (let QB of BB.selection.gy) {
        let nB = BB.doc.lineAt(QB.from),
          dB = BB.doc.lineAt(QB.to);
        if (QB.empty || QB.to != dB.from || (dB = BB.doc.lineAt(QB.to - 1)), zB >= nB.number) {
          let BB = jB[jB.length - 1];
          BB.to = dB.to, BB.gy.push(QB)
        } else jB.push({
          from: nB.from,
          to: dB.to,
          gy: [QB]
        });
        zB = dB.number + 1
      }
      return jB
    }

    function Yj(BB, jB, zB) {
      if (BB.readOnly) return !1;
      let QB = [],
        nB = [];
      for (let dB of Fj(BB)) {
        if (zB ? dB.to == BB.doc.length : 0 == dB.from) continue;
        let jB = BB.doc.lineAt(zB ? dB.to + 1 : dB.from - 1),
          NB = jB.length + 1;
        if (zB) {
          QB.push({
            from: dB.to,
            to: jB.to
          }, {
            from: dB.from,
            insert: jB.text + BB.lineBreak
          });
          for (let jB of dB.gy) nB.push(IB.i.range(Math.min(BB.doc.length, jB.anchor + NB), Math.min(BB.doc.length, jB.head + NB)))
        } else {
          QB.push({
            from: jB.from,
            to: dB.from
          }, {
            from: dB.to,
            insert: BB.lineBreak + jB.text
          });
          for (let BB of dB.gy) nB.push(IB.i.range(BB.anchor - NB, BB.head - NB))
        }
      }
      return !!QB.length && (jB(BB.update({
        changes: QB,
        scrollIntoView: !0,
        selection: IB.i.create(nB, BB.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function Vj(BB, jB, zB) {
      if (BB.readOnly) return !1;
      let QB = [];
      for (let dB of Fj(BB)) zB ? QB.push({
        from: dB.from,
        insert: BB.doc.slice(dB.from, dB.to) + BB.lineBreak
      }) : QB.push({
        from: dB.to,
        insert: BB.lineBreak + BB.doc.slice(dB.from, dB.to)
      });
      let nB = BB.changes(QB);
      return jB(BB.update({
        changes: nB,
        selection: BB.selection.map(nB, zB ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const hj = Xj(!1);

    function Xj(BB) {
      return jB => {
        let {
          state: zB,
          dispatch: QB
        } = jB;
        if (zB.readOnly) return !1;
        let nB = zB.changeByRange((jB => {
          let {
            from: QB,
            to: nB
          } = jB, dB = zB.doc.lineAt(QB), NB = !BB && QB == nB && function(BB, jB) {
            if (/\(\)|\[\]|\{\}/.test(BB.sliceDoc(jB - 1, jB + 1))) return {
              from: jB,
              to: jB
            };
            let zB, QB = (0, uB.lb)(BB).resolveInner(jB),
              nB = QB.childBefore(jB),
              dB = QB.childAfter(jB);
            return nB && dB && nB.to <= jB && dB.from >= jB && (zB = nB.type.prop(UB.j.closedBy)) && zB.indexOf(dB.name) > -1 && BB.doc.lineAt(nB.to).from == BB.doc.lineAt(dB.from).from && !/\S/.test(BB.sliceDoc(nB.to, dB.from)) ? {
              from: nB.to,
              to: dB.from
            } : null
          }(zB, QB);
          BB && (QB = nB = (nB <= dB.to ? dB : zB.doc.lineAt(nB)).to);
          let aB = new uB.f(zB, {
              simulateBreak: QB,
              simulateDoubleBreak: !!NB
            }),
            pB = (0, uB.S)(aB, QB);
          for (null == pB && (pB = (0, IB.Q)(/^\s*/.exec(zB.doc.lineAt(QB).text)[0], zB.tabSize)); nB < dB.to && /\s/.test(dB.text[nB - dB.from]);) nB++;
          NB ? ({
            from: QB,
            to: nB
          } = NB) : QB > dB.from && QB < dB.from + 100 && !/\S/.test(dB.text.slice(0, QB)) && (QB = dB.from);
          let rB = ["", (0, uB.Z)(zB, pB)];
          return NB && rB.push((0, uB.Z)(zB, aB.lineIndent(dB.from, -1))), {
            changes: {
              from: QB,
              to: nB,
              insert: IB.G.of(rB)
            },
            range: IB.i.cursor(QB + 1 + rB[1].length)
          }
        }));
        return QB(zB.update(nB, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function Zj(BB, jB) {
      let zB = -1;
      return BB.changeByRange((QB => {
        let nB = [];
        for (let IB = QB.from; IB <= QB.to;) {
          let dB = BB.doc.lineAt(IB);
          dB.number > zB && (QB.empty || QB.to > dB.from) && (jB(dB, nB, QB), zB = dB.number), IB = dB.to + 1
        }
        let dB = BB.changes(nB);
        return {
          changes: nB,
          range: IB.i.range(dB.mapPos(QB.anchor, 1), dB.mapPos(QB.head, 1))
        }
      }))
    }
    const Aj = BB => {
        let {
          state: jB,
          dispatch: zB
        } = BB;
        return !jB.readOnly && (zB(jB.update(Zj(jB, ((BB, zB) => {
          zB.push({
            from: BB.from,
            insert: jB.facet(uB.$)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      Tj = BB => {
        let {
          state: jB,
          dispatch: zB
        } = BB;
        return !jB.readOnly && (zB(jB.update(Zj(jB, ((BB, zB) => {
          let QB = /^\s*/.exec(BB.text)[0];
          if (!QB) return;
          let nB = (0, IB.Q)(QB, jB.tabSize),
            dB = 0,
            NB = (0, uB.Z)(jB, Math.max(0, nB - (0, uB.P)(jB)));
          for (; dB < QB.length && dB < NB.length && QB.charCodeAt(dB) == NB.charCodeAt(dB);) dB++;
          zB.push({
            from: BB.from + dB,
            to: BB.from + QB.length,
            insert: NB.slice(dB)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      Pj = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: BB => lB(BB, (jB => RB(BB.state, jB, !KB(BB)))),
        shift: BB => uj(BB, (jB => RB(BB.state, jB, !KB(BB))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: BB => lB(BB, (jB => RB(BB.state, jB, KB(BB)))),
        shift: BB => uj(BB, (jB => RB(BB.state, jB, KB(BB))))
      }, {
        key: "Alt-ArrowUp",
        run: BB => {
          let {
            state: jB,
            dispatch: zB
          } = BB;
          return Yj(jB, zB, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: BB => {
          let {
            state: jB,
            dispatch: zB
          } = BB;
          return Vj(jB, zB, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: BB => {
          let {
            state: jB,
            dispatch: zB
          } = BB;
          return Yj(jB, zB, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: BB => {
          let {
            state: jB,
            dispatch: zB
          } = BB;
          return Vj(jB, zB, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: BB => Mj(BB, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: BB => Mj(BB, !0)
      }, {
        key: "Escape",
        run: BB => {
          let {
            state: jB,
            dispatch: zB
          } = BB, QB = jB.selection, nB = null;
          return QB.gy.length > 1 ? nB = IB.i.create([QB.main]) : QB.main.empty || (nB = IB.i.create([IB.i.cursor(QB.main.head)])), !!nB && (zB(eB(jB, nB)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: Xj(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: BB => {
          let {
            state: jB,
            dispatch: zB
          } = BB, QB = Fj(jB).map((BB => {
            let {
              from: zB,
              to: QB
            } = BB;
            return IB.i.range(zB, Math.min(QB + 1, jB.doc.length))
          }));
          return zB(jB.update({
            selection: IB.i.create(QB),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: BB => {
          let {
            state: jB,
            dispatch: zB
          } = BB, QB = WB(jB.selection, (BB => {
            let zB = (0, uB.lb)(jB),
              QB = zB.resolveStack(BB.from, 1);
            if (BB.empty) {
              let jB = zB.resolveStack(BB.from, -1);
              jB.node.from >= QB.node.from && jB.node.to <= QB.node.to && (QB = jB)
            }
            for (let jB = QB; jB; jB = jB.next) {
              let {
                node: zB
              } = jB;
              if ((zB.from < BB.from && zB.to >= BB.to || zB.to > BB.to && zB.from <= BB.from) && jB.next) return IB.i.range(zB.to, zB.from)
            }
            return BB
          }));
          return !QB.eq(jB.selection) && (zB(eB(jB, QB)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: Tj
      }, {
        key: "Mod-]",
        run: Aj
      }, {
        key: "Mod-Alt-\\",
        run: BB => {
          let {
            state: jB,
            dispatch: zB
          } = BB;
          if (jB.readOnly) return !1;
          let QB = Object.create(null),
            nB = new uB.f(jB, {
              overrideIndentation: BB => {
                let jB = QB[BB];
                return null == jB ? -1 : jB
              }
            }),
            dB = Zj(jB, ((BB, zB, dB) => {
              let IB = (0, uB.S)(nB, BB.from);
              if (null == IB) return;
              /\S/.test(BB.text) || (IB = 0);
              let NB = /^\s*/.exec(BB.text)[0],
                UB = (0, uB.Z)(jB, IB);
              (NB != UB || dB.from < BB.from + NB.length) && (QB[BB.from] = IB, zB.push({
                from: BB.from,
                to: BB.from + NB.length,
                insert: UB
              }))
            }));
          return dB.changes.empty || zB(jB.update(dB, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: BB => {
          if (BB.state.readOnly) return !1;
          let {
            state: jB
          } = BB, zB = jB.changes(Fj(jB).map((BB => {
            let {
              from: zB,
              to: QB
            } = BB;
            return zB > 0 ? zB-- : QB < jB.doc.length && QB++, {
              from: zB,
              to: QB
            }
          }))), QB = WB(jB.selection, (jB => {
            let zB;
            if (BB.lineWrapping) {
              let QB = BB.lineBlockAt(jB.head),
                nB = BB.coordsAtPos(jB.head, jB.assoc || 1);
              nB && (zB = QB.bottom + BB.documentTop - nB.bottom + BB.defaultLineHeight / 2)
            }
            return BB.moveVertically(jB, !0, zB)
          })).map(zB);
          return BB.dispatch({
            changes: zB,
            selection: QB,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: BB => {
          let {
            state: jB,
            dispatch: zB
          } = BB;
          return Nj(jB, zB, !1)
        }
      }, {
        key: "Mod-/",
        run: BB => {
          let {
            state: jB
          } = BB, zB = jB.doc.lineAt(jB.selection.main.from), QB = JB(BB.state, zB.from);
          return QB.line ? pB(BB) : !!QB.block && sB(BB)
        }
      }, {
        key: "Alt-A",
        run: rB
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: BB => (BB.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: CB,
        shift: aj,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: BB => bB(BB, !KB(BB)),
        shift: BB => rj(BB, !KB(BB)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: BB => lB(BB, (jB => Ij(BB, jB, !KB(BB)))),
        shift: BB => uj(BB, (jB => Ij(BB, jB, !KB(BB)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: cB,
        shift: pj,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: BB => bB(BB, KB(BB)),
        shift: BB => rj(BB, KB(BB)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: BB => lB(BB, (jB => Ij(BB, jB, KB(BB)))),
        shift: BB => uj(BB, (jB => Ij(BB, jB, KB(BB)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: Bj,
        shift: Jj,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: Lj,
        shift: tj
      }, {
        mac: "Ctrl-ArrowUp",
        run: nj,
        shift: kj
      }, {
        key: "ArrowDown",
        run: jj,
        shift: mj,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: gj,
        shift: Sj
      }, {
        mac: "Ctrl-ArrowDown",
        run: dj,
        shift: Gj
      }, {
        key: "PageUp",
        run: nj,
        shift: kj
      }, {
        key: "PageDown",
        run: dj,
        shift: Gj
      }, {
        key: "Home",
        run: BB => lB(BB, (jB => Ij(BB, jB, !1))),
        shift: BB => uj(BB, (jB => Ij(BB, jB, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: Lj,
        shift: tj
      }, {
        key: "End",
        run: BB => lB(BB, (jB => Ij(BB, jB, !0))),
        shift: BB => uj(BB, (jB => Ij(BB, jB, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: gj,
        shift: Sj
      }, {
        key: "Enter",
        run: hj,
        shift: hj
      }, {
        key: "Mod-a",
        run: BB => {
          let {
            state: jB,
            dispatch: zB
          } = BB;
          return zB(jB.update({
            selection: {
              anchor: 0,
              head: jB.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: fj,
        shift: fj,
        preventDefault: !0
      }, {
        key: "Delete",
        run: oj,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: Dj,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: BB => Hj(BB, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: BB => Ej(BB, (jB => {
          let zB = BB.moveToLineBoundary(jB, !1).head;
          return jB.head > zB ? zB : Math.max(0, jB.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: BB => Ej(BB, (jB => {
          let zB = BB.moveToLineBoundary(jB, !0).head;
          return jB.head < zB ? zB : Math.min(BB.state.doc.length, jB.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: CB,
        shift: aj,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: cB,
        shift: pj
      }, {
        key: "Ctrl-p",
        run: Bj,
        shift: Jj
      }, {
        key: "Ctrl-n",
        run: jj,
        shift: mj
      }, {
        key: "Ctrl-a",
        run: BB => lB(BB, (jB => IB.i.cursor(BB.lineBlockAt(jB.head).from, 1))),
        shift: BB => uj(BB, (jB => IB.i.cursor(BB.lineBlockAt(jB.head).from)))
      }, {
        key: "Ctrl-e",
        run: BB => lB(BB, (jB => IB.i.cursor(BB.lineBlockAt(jB.head).to, -1))),
        shift: BB => uj(BB, (jB => IB.i.cursor(BB.lineBlockAt(jB.head).to)))
      }, {
        key: "Ctrl-d",
        run: oj
      }, {
        key: "Ctrl-h",
        run: fj
      }, {
        key: "Ctrl-k",
        run: BB => Ej(BB, (jB => {
          let zB = BB.lineBlockAt(jB.head).to;
          return jB.head < zB ? zB : Math.min(BB.state.doc.length, jB.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: Dj
      }, {
        key: "Ctrl-o",
        run: BB => {
          let {
            state: jB,
            dispatch: zB
          } = BB;
          if (jB.readOnly) return !1;
          let QB = jB.changeByRange((BB => ({
            changes: {
              from: BB.from,
              to: BB.to,
              insert: IB.G.of(["", ""])
            },
            range: IB.i.cursor(BB.from)
          })));
          return zB(jB.update(QB, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: BB => {
          let {
            state: jB,
            dispatch: zB
          } = BB;
          if (jB.readOnly) return !1;
          let QB = jB.changeByRange((BB => {
            if (!BB.empty || 0 == BB.from || BB.from == jB.doc.length) return {
              range: BB
            };
            let zB = BB.from,
              QB = jB.doc.lineAt(zB),
              nB = zB == QB.from ? zB - 1 : (0, IB.R)(QB.text, zB - QB.from, !1) + QB.from,
              dB = zB == QB.to ? zB + 1 : (0, IB.R)(QB.text, zB - QB.from, !0) + QB.from;
            return {
              changes: {
                from: nB,
                to: dB,
                insert: jB.doc.slice(zB, dB).append(jB.doc.slice(nB, zB))
              },
              range: IB.i.cursor(dB)
            }
          }));
          return !QB.changes.empty && (zB(jB.update(QB, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: dj
      }].map((BB => ({
        mac: BB.key,
        run: BB.run,
        shift: BB.shift
      }))))),
      Wj = {
        key: "Tab",
        run: Aj,
        shift: Tj
      };
    var ej = zB(41462),
      lj = zB(41399),
      wj = zB(41470),
      xj = function(BB) {
        void 0 === BB && (BB = {});
        var {
          crosshairCursor: jB = !1
        } = BB, zB = [];
        !1 !== BB.closeBracketsKeymap && (zB = zB.concat(lj.e)), !1 !== BB.defaultKeymap && (zB = zB.concat(Pj)), !1 !== BB.searchKeymap && (zB = zB.concat(ej.i)), !1 !== BB.historyKeymap && (zB = zB.concat(PB)), !1 !== BB.foldKeymap && (zB = zB.concat(uB.K)), !1 !== BB.completionKeymap && (zB = zB.concat(lj.l)), !1 !== BB.lintKeymap && (zB = zB.concat(wj.e));
        var QB = [];
        return !1 !== BB.lineNumbers && QB.push((0, NB.W)()), !1 !== BB.highlightActiveLineGutter && QB.push((0, NB.I)()), !1 !== BB.highlightSpecialChars && QB.push((0, NB.M)()), !1 !== BB.history && QB.push(function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [SB, tB.of(BB), NB.k.domEventHandlers({
            beforeinput(BB, jB) {
              let zB = "historyUndo" == BB.inputType ? EB : "historyRedo" == BB.inputType ? iB : null;
              return !!zB && (BB.preventDefault(), zB(jB))
            }
          })]
        }()), !1 !== BB.foldGutter && QB.push((0, uB.D)()), !1 !== BB.drawSelection && QB.push((0, NB.v)()), !1 !== BB.dropCursor && QB.push((0, NB.y)()), !1 !== BB.allowMultipleSelections && QB.push(IB.l.allowMultipleSelections.of(!0)), !1 !== BB.indentOnInput && QB.push((0, uB.X)()), !1 !== BB.syntaxHighlighting && QB.push((0, uB.eb)(uB.r, {
          fallback: !0
        })), !1 !== BB.bracketMatching && QB.push((0, uB.l)()), !1 !== BB.closeBrackets && QB.push((0, lj.h)()), !1 !== BB.autocompletion && QB.push((0, lj.d)()), !1 !== BB.rectangularSelection && QB.push((0, NB.cb)()), !1 !== jB && QB.push((0, NB.s)()), !1 !== BB.highlightActiveLine && QB.push((0, NB.K)()), !1 !== BB.highlightSelectionMatches && QB.push((0, ej.e)()), BB.tabSize && "number" === typeof BB.tabSize && QB.push(uB.$.of(" ".repeat(BB.tabSize))), QB.concat([NB.S.of(zB.flat())]).filter(Boolean)
      },
      Kj = zB(41449);
    const Cj = "#e5c07b",
      cj = "#e06c75",
      bj = "#56b6c2",
      vj = "#ffffff",
      Rj = "#abb2bf",
      Oj = "#7d8799",
      Bz = "#61afef",
      jz = "#98c379",
      zz = "#d19a66",
      Qz = "#c678dd",
      nz = "#21252b",
      dz = "#2c313a",
      Iz = "#282c34",
      Nz = "#353a42",
      uz = "#3E4451",
      Uz = "#528bff",
      az = NB.k.theme({
        "&": {
          color: Rj,
          backgroundColor: Iz
        },
        ".cm-content": {
          caretColor: Uz
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: Uz
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: uz
        },
        ".cm-panels": {
          backgroundColor: nz,
          color: Rj
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
          backgroundColor: Iz,
          color: Oj,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: dz
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: Nz
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: Nz,
          borderBottomColor: Nz
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: dz,
            color: Rj
          }
        }
      }, {
        dark: !0
      }),
      pz = uB.e.define([{
        tag: Kj.i.keyword,
        color: Qz
      }, {
        tag: [Kj.i.name, Kj.i.deleted, Kj.i.character, Kj.i.propertyName, Kj.i.macroName],
        color: cj
      }, {
        tag: [Kj.i.function(Kj.i.variableName), Kj.i.labelName],
        color: Bz
      }, {
        tag: [Kj.i.color, Kj.i.constant(Kj.i.name), Kj.i.standard(Kj.i.name)],
        color: zz
      }, {
        tag: [Kj.i.definition(Kj.i.name), Kj.i.separator],
        color: Rj
      }, {
        tag: [Kj.i.typeName, Kj.i.className, Kj.i.number, Kj.i.changed, Kj.i.annotation, Kj.i.modifier, Kj.i.self, Kj.i.namespace],
        color: Cj
      }, {
        tag: [Kj.i.operator, Kj.i.operatorKeyword, Kj.i.url, Kj.i.escape, Kj.i.regexp, Kj.i.link, Kj.i.special(Kj.i.string)],
        color: bj
      }, {
        tag: [Kj.i.meta, Kj.i.comment],
        color: Oj
      }, {
        tag: Kj.i.strong,
        fontWeight: "bold"
      }, {
        tag: Kj.i.emphasis,
        fontStyle: "italic"
      }, {
        tag: Kj.i.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: Kj.i.link,
        color: Oj,
        textDecoration: "underline"
      }, {
        tag: Kj.i.heading,
        fontWeight: "bold",
        color: cj
      }, {
        tag: [Kj.i.atom, Kj.i.bool, Kj.i.special(Kj.i.variableName)],
        color: zz
      }, {
        tag: [Kj.i.processingInstruction, Kj.i.string, Kj.i.inserted],
        color: jz
      }, {
        tag: Kj.i.invalid,
        color: vj
      }]),
      rz = [az, (0, uB.eb)(pz)];
    var sz = NB.k.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class Jz {
      constructor(BB, jB) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = jB, this.timeoutMS = jB, this.callbacks.push(BB)
      }
      vp() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var BB = this.callbacks.slice();
          this.callbacks.length = 0, BB.forEach((BB => {
            try {
              BB()
            } catch (jB) {
              console.error("TimeoutLatch callback error:", jB)
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
    class mz {
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
            BB.vp(), BB.isDone && this.remove(BB)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var yz = null,
      kz = IB.c.define(),
      Gz = [];

    function Lz(BB) {
      var {
        value: jB,
        selection: zB,
        onChange: QB,
        onStatistics: nB,
        onCreateEditor: uB,
        onUpdate: UB,
        extensions: aB = Gz,
        autoFocus: pB,
        theme: rB = "light",
        height: sB = null,
        minHeight: JB = null,
        maxHeight: mB = null,
        width: yB = null,
        minWidth: kB = null,
        maxWidth: GB = null,
        placeholder: LB = "",
        editable: gB = !0,
        readOnly: tB = !1,
        indentWithTab: SB = !0,
        basicSetup: MB = !0,
        root: EB,
        initialState: iB
      } = BB, [qB, fB] = (0, dB.useState)(), [oB, HB] = (0, dB.useState)(), [DB, FB] = (0, dB.useState)(), YB = (0, dB.useState)((() => ({
        current: null
      })))[0], VB = (0, dB.useState)((() => ({
        current: null
      })))[0], hB = NB.k.theme({
        "&": {
          height: sB,
          minHeight: JB,
          maxHeight: mB,
          width: yB,
          minWidth: kB,
          maxWidth: GB
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), XB = NB.k.updateListener.of((BB => {
        if (BB.docChanged && "function" === typeof QB && !BB.transactions.some((BB => BB.annotation(kz)))) {
          YB.current ? YB.current.reset() : (YB.current = new Jz((() => {
            if (VB.current) {
              var BB = VB.current;
              VB.current = null, BB()
            }
            YB.current = null
          }), 200), ("undefined" === typeof window ? new mz : (yz || (yz = new mz), yz)).add(YB.current));
          var jB = BB.state.doc.toString();
          QB(jB, BB)
        }
        nB && nB((BB => ({
          line: BB.state.doc.lineAt(BB.state.selection.main.from),
          lineCount: BB.state.doc.lines,
          lineBreak: BB.state.lineBreak,
          length: BB.state.doc.length,
          readOnly: BB.state.readOnly,
          tabSize: BB.state.tabSize,
          selection: BB.state.selection,
          selectionAsSingle: BB.state.selection.asSingle().main,
          gy: BB.state.selection.gy,
          selectionCode: BB.state.sliceDoc(BB.state.selection.main.from, BB.state.selection.main.to),
          selections: BB.state.selection.gy.map((jB => BB.state.sliceDoc(jB.from, jB.to))),
          selectedText: BB.state.selection.gy.some((BB => !BB.empty))
        }))(BB))
      })), ZB = function(BB) {
        void 0 === BB && (BB = {});
        var {
          indentWithTab: jB = !0,
          editable: zB = !0,
          readOnly: QB = !1,
          theme: nB = "light",
          placeholder: dB = "",
          basicSetup: uB = !0
        } = BB, UB = [];
        switch (jB && UB.unshift(NB.S.of([Wj])), uB && ("boolean" === typeof uB ? UB.unshift(xj()) : UB.unshift(xj(uB))), dB && UB.unshift((0, NB.ab)(dB)), nB) {
          case "light":
            UB.push(sz);
            break;
          case "dark":
            UB.push(rz);
            break;
          case "none":
            break;
          default:
            UB.push(nB)
        }
        return !1 === zB && UB.push(NB.k.editable.of(!1)), QB && UB.push(IB.l.readOnly.of(!0)), [...UB]
      }({
        theme: rB,
        editable: gB,
        readOnly: tB,
        placeholder: LB,
        indentWithTab: SB,
        basicSetup: MB
      }), AB = [XB, hB, ...ZB];
      return UB && "function" === typeof UB && AB.push(NB.k.updateListener.of(UB)), AB = AB.concat(aB), (0, dB.useLayoutEffect)((() => {
        if (qB && !DB) {
          var BB = {
              doc: jB,
              selection: zB,
              extensions: AB
            },
            QB = iB ? IB.l.fromJSON(iB.json, BB, iB.fields) : IB.l.create(BB);
          if (FB(QB), !oB) {
            var nB = new NB.k({
              state: QB,
              parent: qB,
              root: EB
            });
            HB(nB), uB && uB(nB, QB)
          }
        }
        return () => {
          oB && (FB(void 0), HB(void 0))
        }
      }), [qB, DB]), (0, dB.useEffect)((() => {
        BB.container && fB(BB.container)
      }), [BB.container]), (0, dB.useEffect)((() => () => {
        oB && (oB.destroy(), HB(void 0)), YB.current && (YB.current.cancel(), YB.current = null)
      }), [oB]), (0, dB.useEffect)((() => {
        pB && oB && oB.focus()
      }), [pB, oB]), (0, dB.useEffect)((() => {
        oB && oB.dispatch({
          effects: IB.D.reconfigure.of(AB)
        })
      }), [rB, aB, sB, JB, mB, yB, kB, GB, LB, gB, tB, SB, MB, QB, UB]), (0, dB.useEffect)((() => {
        if (void 0 !== jB) {
          var BB = oB ? oB.state.doc.toString() : "";
          if (oB && jB !== BB) {
            var zB = () => {
              oB && jB !== oB.state.doc.toString() && oB.dispatch({
                changes: {
                  from: 0,
                  to: oB.state.doc.toString().length,
                  insert: jB || ""
                },
                annotations: [kz.of(!0)]
              })
            };
            YB.current && !YB.current.isDone ? VB.current = zB : zB()
          }
        }
      }), [jB, oB]), {
        state: DB,
        setState: FB,
        view: oB,
        setView: HB,
        container: qB,
        setContainer: fB
      }
    }
    var gz = zB(1148),
      tz = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      Sz = (0, dB.forwardRef)(((BB, jB) => {
        var {
          className: zB,
          value: IB = "",
          selection: NB,
          extensions: uB = [],
          onChange: UB,
          onStatistics: aB,
          onCreateEditor: pB,
          onUpdate: rB,
          autoFocus: sB,
          theme: JB = "light",
          height: mB,
          minHeight: yB,
          maxHeight: kB,
          width: GB,
          minWidth: LB,
          maxWidth: gB,
          basicSetup: tB,
          placeholder: SB,
          indentWithTab: MB,
          editable: EB,
          readOnly: iB,
          root: qB,
          initialState: fB
        } = BB, oB = (0, nB.d)(BB, tz), HB = (0, dB.useRef)(null), {
          state: DB,
          view: FB,
          container: YB,
          setContainer: VB
        } = Lz({
          root: qB,
          value: IB,
          autoFocus: sB,
          theme: JB,
          height: mB,
          minHeight: yB,
          maxHeight: kB,
          width: GB,
          minWidth: LB,
          maxWidth: gB,
          basicSetup: tB,
          placeholder: SB,
          indentWithTab: MB,
          editable: EB,
          readOnly: iB,
          selection: NB,
          onChange: UB,
          onStatistics: aB,
          onCreateEditor: pB,
          onUpdate: rB,
          extensions: uB,
          initialState: fB
        });
        (0, dB.useImperativeHandle)(jB, (() => ({
          editor: HB.current,
          state: DB,
          view: FB
        })), [HB, YB, DB, FB]);
        var hB = (0, dB.useCallback)((BB => {
          HB.current = BB, VB(BB)
        }), [VB]);
        if ("string" !== typeof IB) throw new Error("value must be typeof string but got " + typeof IB);
        var XB = "string" === typeof JB ? "cm-theme-" + JB : "cm-theme";
        return (0, gz.jsx)("div", (0, QB.c)({
          ref: hB,
          className: XB + (zB ? " " + zB : "")
        }, oB))
      }));
    Sz.displayName = "CodeMirror";
    const Mz = Sz
  },
  41430: (BB, jB, zB) => {
    function QB() {
      var BB = arguments[0];
      "string" == typeof BB && (BB = document.createElement(BB));
      var jB = 1,
        zB = arguments[1];
      if (zB && "object" == typeof zB && null == zB.nodeType && !Array.isArray(zB)) {
        for (var QB in zB)
          if (Object.prototype.hasOwnProperty.call(zB, QB)) {
            var dB = zB[QB];
            "string" == typeof dB ? BB.setAttribute(QB, dB) : null != dB && (BB[QB] = dB)
          } jB++
      }
      for (; jB < arguments.length; jB++) nB(BB, arguments[jB]);
      return BB
    }

    function nB(BB, jB) {
      if ("string" == typeof jB) BB.appendChild(document.createTextNode(jB));
      else if (null == jB);
      else if (null != jB.nodeType) BB.appendChild(jB);
      else {
        if (!Array.isArray(jB)) throw new RangeError("Unsupported child node: " + jB);
        for (var zB = 0; zB < jB.length; zB++) nB(BB, jB[zB])
      }
    }
    zB.d(jB, {
      e: () => QB
    })
  },
  41424: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => IB
    });
    const QB = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      nB = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      dB = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class IB {
      constructor(BB, jB) {
        this.rules = [];
        let {
          finish: zB
        } = jB || {};

        function QB(BB) {
          return /^@/.test(BB) ? [BB] : BB.split(/,\s*/)
        }

        function nB(BB, jB, dB, IB) {
          let NB = [],
            uB = /^@(\w+)\b/.exec(BB[0]),
            UB = uB && "keyframes" == uB[1];
          if (uB && null == jB) return dB.push(BB[0] + ";");
          for (let zB in jB) {
            let IB = jB[zB];
            if (/&/.test(zB)) nB(zB.split(/,\s*/).map((jB => BB.map((BB => jB.replace(/&/, BB))))).reduce(((BB, jB) => BB.concat(jB))), IB, dB);
            else if (IB && "object" == typeof IB) {
              if (!uB) throw new RangeError("The value of a property (" + zB + ") should be a primitive value.");
              nB(QB(zB), IB, NB, UB)
            } else null != IB && NB.push(zB.replace(/_.*/, "").replace(/[A-Z]/g, (BB => "-" + BB.toLowerCase())) + ": " + IB + ";")
          }(NB.length || UB) && dB.push((!zB || uB || IB ? BB : BB.map(zB)).join(", ") + " {" + NB.join(" ") + "}")
        }
        for (let dB in BB) nB(QB(dB), BB[dB], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let BB = dB[QB] || 1;
        return dB[QB] = BB + 1, "\u037c" + BB.toString(36)
      }
      static mount(BB, jB, zB) {
        let QB = BB[nB],
          dB = zB && zB.nonce;
        QB ? dB && QB.setNonce(dB) : QB = new uB(BB, dB), QB.mount(Array.isArray(jB) ? jB : [jB], BB)
      }
    }
    let NB = new Map;
    class uB {
      constructor(BB, jB) {
        let zB = BB.ownerDocument || BB,
          QB = zB.defaultView;
        if (!BB.head && BB.adoptedStyleSheets && QB.CSSStyleSheet) {
          let jB = NB.get(zB);
          if (jB) return BB[nB] = jB;
          this.sheet = new QB.CSSStyleSheet, NB.set(zB, this)
        } else this.styleTag = zB.createElement("style"), jB && this.styleTag.setAttribute("nonce", jB);
        this.modules = [], BB[nB] = this
      }
      mount(BB, jB) {
        let zB = this.sheet,
          QB = 0,
          nB = 0;
        for (let dB = 0; dB < BB.length; dB++) {
          let jB = BB[dB],
            IB = this.modules.indexOf(jB);
          if (IB < nB && IB > -1 && (this.modules.splice(IB, 1), nB--, IB = -1), -1 == IB) {
            if (this.modules.splice(nB++, 0, jB), zB)
              for (let BB = 0; BB < jB.rules.length; BB++) zB.insertRule(jB.rules[BB], QB++)
          } else {
            for (; nB < IB;) QB += this.modules[nB++].rules.length;
            QB += jB.rules.length, nB++
          }
        }
        if (zB) jB.adoptedStyleSheets.indexOf(this.sheet) < 0 && (jB.adoptedStyleSheets = [this.sheet, ...jB.adoptedStyleSheets]);
        else {
          let BB = "";
          for (let jB = 0; jB < this.modules.length; jB++) BB += this.modules[jB].getRules() + "\n";
          this.styleTag.textContent = BB;
          let zB = jB.head || jB;
          this.styleTag.parentNode != zB && zB.insertBefore(this.styleTag, zB.firstChild)
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