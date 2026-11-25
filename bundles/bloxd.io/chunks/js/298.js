export const id = 298;
export const ids = [298];
export const modules = {
  41339: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => jI,
      f: () => wI,
      h: () => UI,
      l: () => kB,
      p: () => PI,
      q: () => cB,
      t: () => zI
    });
    var TB = ZB(41342),
      JB = ZB(41349),
      oB = ZB(41371);
    class GB {
      constructor(BB, IB, ZB, TB) {
        this.state = BB, this.pos = IB, this.explicit = ZB, this.view = TB, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(BB) {
        let IB = (0, oB.mb)(this.state).resolveInner(this.pos, -1);
        for (; IB && BB.indexOf(IB.name) < 0;) IB = IB.parent;
        return IB ? {
          from: IB.from,
          to: this.pos,
          text: this.state.sliceDoc(IB.from, this.pos),
          type: IB.type
        } : null
      }
      matchBefore(BB) {
        let IB = this.state.doc.lineAt(this.pos),
          ZB = Math.max(IB.from, this.pos - 250),
          TB = IB.text.slice(ZB - IB.from, this.pos - IB.from),
          JB = TB.search(zB(BB, !1));
        return JB < 0 ? null : {
          from: ZB + JB,
          to: this.pos,
          text: TB.slice(JB)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(BB, IB, ZB) {
        "abort" == BB && this.abortListeners && (this.abortListeners.push(IB), ZB && ZB.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function vB(BB) {
      let IB = Object.keys(BB).join(""),
        ZB = /\w/.test(IB);
      return ZB && (IB = IB.replace(/\w/g, "")), `[${ZB?"\\w":""}${IB.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function kB(BB) {
      let IB = BB.map((BB => "string" == typeof BB ? {
          label: BB
        } : BB)),
        [ZB, TB] = IB.every((BB => /^\w+$/.test(BB.label))) ? [/\w*$/, /\w+$/] : function(BB) {
          let IB = Object.create(null),
            ZB = Object.create(null);
          for (let {
              label: JB
            }
            of BB) {
            IB[JB[0]] = !0;
            for (let BB = 1; BB < JB.length; BB++) ZB[JB[BB]] = !0
          }
          let TB = vB(IB) + vB(ZB) + "*$";
          return [new RegExp("^" + TB), new RegExp(TB)]
        }(IB);
      return BB => {
        let JB = BB.matchBefore(TB);
        return JB || BB.explicit ? {
          from: JB ? JB.from : BB.pos,
          options: IB,
          validFor: ZB
        } : null
      }
    }

    function cB(BB, IB) {
      return ZB => {
        for (let IB = (0, oB.mb)(ZB.state).resolveInner(ZB.pos, -1); IB; IB = IB.parent) {
          if (BB.indexOf(IB.name) > -1) return null;
          if (IB.type.isTop) break
        }
        return IB(ZB)
      }
    }
    class nB {
      constructor(BB, IB, ZB, TB) {
        this.completion = BB, this.source = IB, this.match = ZB, this.score = TB
      }
    }

    function hB(BB) {
      return BB.selection.main.from
    }

    function zB(BB, IB) {
      var ZB;
      let {
        source: TB
      } = BB, JB = IB && "^" != TB[0], oB = "$" != TB[TB.length - 1];
      return JB || oB ? new RegExp(`${JB?"^":""}(?:${TB})${oB?"$":""}`, null !== (ZB = BB.flags) && void 0 !== ZB ? ZB : BB.ignoreCase ? "i" : "") : BB
    }
    const FB = TB.d.define();

    function NB(BB, IB, ZB, JB) {
      let {
        main: oB
      } = BB.selection, GB = ZB - oB.from, vB = JB - oB.from;
      return {
        ...BB.changeByRange((kB => {
          if (kB != oB && ZB != JB && BB.sliceDoc(kB.from + GB, kB.from + vB) != BB.sliceDoc(ZB, JB)) return {
            range: kB
          };
          let cB = BB.toText(IB);
          return {
            changes: {
              from: kB.from + GB,
              to: JB == oB.from ? kB.to : kB.from + vB,
              insert: cB
            },
            range: TB.n.cursor(kB.from + GB + cB.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const gB = new WeakMap;

    function qB(BB) {
      if (!Array.isArray(BB)) return BB;
      let IB = gB.get(BB);
      return IB || gB.set(BB, IB = kB(BB)), IB
    }
    const yB = TB.K.define(),
      UB = TB.K.define();
    class WB {
      constructor(BB) {
        this.pattern = BB, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let IB = 0; IB < BB.length;) {
          let ZB = (0, TB.Q)(BB, IB),
            JB = (0, TB.S)(ZB);
          this.chars.push(ZB);
          let oB = BB.slice(IB, IB + JB),
            GB = oB.toUpperCase();
          this.folded.push((0, TB.Q)(GB == oB ? oB.toLowerCase() : GB, 0)), IB += JB
        }
        this.astral = BB.length != this.chars.length
      }
      ret(BB, IB) {
        return this.score = BB, this.matched = IB, this
      }
      match(BB) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (BB.length < this.pattern.length) return null;
        let {
          chars: IB,
          folded: ZB,
          any: JB,
          precise: oB,
          byWord: GB
        } = this;
        if (1 == IB.length) {
          let JB = (0, TB.Q)(BB, 0),
            oB = (0, TB.S)(JB),
            GB = oB == BB.length ? 0 : -100;
          if (JB == IB[0]);
          else {
            if (JB != ZB[0]) return null;
            GB += -200
          }
          return this.ret(GB, [0, oB])
        }
        let vB = BB.indexOf(this.pattern);
        if (0 == vB) return this.ret(BB.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let kB = IB.length,
          cB = 0;
        if (vB < 0) {
          for (let oB = 0, GB = Math.min(BB.length, 200); oB < GB && cB < kB;) {
            let GB = (0, TB.Q)(BB, oB);
            GB != IB[cB] && GB != ZB[cB] || (JB[cB++] = oB), oB += (0, TB.S)(GB)
          }
          if (cB < kB) return null
        }
        let nB = 0,
          hB = 0,
          zB = !1,
          FB = 0,
          NB = -1,
          gB = -1,
          qB = /[a-z]/.test(BB),
          yB = !0;
        for (let UB = 0, WB = Math.min(BB.length, 200), dB = 0; UB < WB && hB < kB;) {
          let JB = (0, TB.Q)(BB, UB);
          vB < 0 && (nB < kB && JB == IB[nB] && (oB[nB++] = UB), FB < kB && (JB == IB[FB] || JB == ZB[FB] ? (0 == FB && (NB = UB), gB = UB + 1, FB++) : FB = 0));
          let cB, WB = JB < 255 ? JB >= 48 && JB <= 57 || JB >= 97 && JB <= 122 ? 2 : JB >= 65 && JB <= 90 ? 1 : 0 : (cB = (0, TB.eb)(JB)) != cB.toLowerCase() ? 1 : cB != cB.toUpperCase() ? 2 : 0;
          (!UB || 1 == WB && qB || 0 == dB && 0 != WB) && (IB[hB] == JB || ZB[hB] == JB && (zB = !0) ? GB[hB++] = UB : GB.length && (yB = !1)), dB = WB, UB += (0, TB.S)(JB)
        }
        return hB == kB && 0 == GB[0] && yB ? this.result((zB ? -200 : 0) - 100, GB, BB) : FB == kB && 0 == NB ? this.ret(-200 - BB.length + (gB == BB.length ? 0 : -100), [0, gB]) : vB > -1 ? this.ret(-700 - BB.length, [vB, vB + this.pattern.length]) : FB == kB ? this.ret(-900 - BB.length, [NB, gB]) : hB == kB ? this.result((zB ? -200 : 0) - 100 - 700 + (yB ? 0 : -1100), GB, BB) : 2 == IB.length ? null : this.result((JB[0] ? -700 : 0) - 200 - 1100, JB, BB)
      }
      result(BB, IB, ZB) {
        let JB = [],
          oB = 0;
        for (let GB of IB) {
          let BB = GB + (this.astral ? (0, TB.S)((0, TB.Q)(ZB, GB)) : 1);
          oB && JB[oB - 1] == GB ? JB[oB - 1] = BB : (JB[oB++] = GB, JB[oB++] = BB)
        }
        return this.ret(BB - ZB.length, JB)
      }
    }
    class dB {
      constructor(BB) {
        this.pattern = BB, this.matched = [], this.score = 0, this.folded = BB.toLowerCase()
      }
      match(BB) {
        if (BB.length < this.pattern.length) return null;
        let IB = BB.slice(0, this.pattern.length),
          ZB = IB == this.pattern ? 0 : IB.toLowerCase() == this.folded ? -200 : null;
        return null == ZB ? null : (this.matched = [0, IB.length], this.score = ZB + (BB.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const CB = TB.t.define({
      combine: BB => (0, TB.T)(BB, {
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
        positionInfo: sB,
        filterStrict: !1,
        compareCompletions: (BB, IB) => (BB.sortText || BB.label).localeCompare(IB.sortText || IB.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (BB, IB) => BB && IB,
        closeOnBlur: (BB, IB) => BB && IB,
        icons: (BB, IB) => BB && IB,
        tooltipClass: (BB, IB) => ZB => QB(BB(ZB), IB(ZB)),
        optionClass: (BB, IB) => ZB => QB(BB(ZB), IB(ZB)),
        addToOptions: (BB, IB) => BB.concat(IB),
        filterStrict: (BB, IB) => BB || IB
      })
    });

    function QB(BB, IB) {
      return BB ? IB ? BB + " " + IB : BB : IB
    }

    function sB(BB, IB, ZB, TB, oB, GB) {
      let vB, kB, cB = BB.textDirection == JB.f.RTL,
        nB = cB,
        hB = !1,
        zB = "top",
        FB = IB.left - oB.left,
        NB = oB.right - IB.right,
        gB = TB.right - TB.left,
        qB = TB.bottom - TB.top;
      if (nB && FB < Math.min(gB, NB) ? nB = !1 : !nB && NB < Math.min(gB, FB) && (nB = !0), gB <= (nB ? FB : NB)) vB = Math.max(oB.top, Math.min(ZB.top, oB.bottom - qB)) - IB.top, kB = Math.min(400, nB ? FB : NB);
      else {
        hB = !0, kB = Math.min(400, (cB ? IB.right : oB.right - IB.left) - 30);
        let BB = oB.bottom - IB.bottom;
        BB >= qB || BB > IB.top ? vB = ZB.bottom - IB.top : (zB = "bottom", vB = IB.bottom - ZB.top)
      }
      return {
        style: `${zB}: ${vB/((IB.bottom-IB.top)/GB.offsetHeight)}px; max-width: ${kB/((IB.right-IB.left)/GB.offsetWidth)}px`,
        class: "cm-completionInfo-" + (hB ? cB ? "left-narrow" : "right-narrow" : nB ? "left" : "right")
      }
    }
    const wB = TB.K.define();

    function OB(BB, IB, ZB) {
      if (BB <= ZB) return {
        from: 0,
        to: BB
      };
      if (IB < 0 && (IB = 0), IB <= BB >> 1) {
        let BB = Math.floor(IB / ZB);
        return {
          from: BB * ZB,
          to: (BB + 1) * ZB
        }
      }
      let TB = Math.floor((BB - IB) / ZB);
      return {
        from: BB - (TB + 1) * ZB,
        to: BB - TB * ZB
      }
    }
    class YB {
      constructor(BB, IB, ZB) {
        this.view = BB, this.stateField = IB, this.applyCompletion = ZB, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: BB => this.placeInfo(BB),
          key: this
        }, this.space = null, this.currentClass = "";
        let TB = BB.state.field(IB),
          {
            options: JB,
            selected: oB
          } = TB.open,
          GB = BB.state.facet(CB);
        this.optionContent = function(BB) {
          let IB = BB.addToOptions.slice();
          return BB.icons && IB.push({
            render(BB) {
              let IB = document.createElement("div");
              return IB.classList.add("cm-completionIcon"), BB.type && IB.classList.add(...BB.type.split(/\s+/g).map((BB => "cm-completionIcon-" + BB))), IB.setAttribute("aria-hidden", "true"), IB
            },
            position: 20
          }), IB.push({
            render(BB, IB, ZB, TB) {
              let JB = document.createElement("span");
              JB.className = "cm-completionLabel";
              let oB = BB.displayLabel || BB.label,
                GB = 0;
              for (let vB = 0; vB < TB.length;) {
                let BB = TB[vB++],
                  IB = TB[vB++];
                BB > GB && JB.appendChild(document.createTextNode(oB.slice(GB, BB)));
                let ZB = JB.appendChild(document.createElement("span"));
                ZB.appendChild(document.createTextNode(oB.slice(BB, IB))), ZB.className = "cm-completionMatchedText", GB = IB
              }
              return GB < oB.length && JB.appendChild(document.createTextNode(oB.slice(GB))), JB
            },
            position: 50
          }, {
            render(BB) {
              if (!BB.detail) return null;
              let IB = document.createElement("span");
              return IB.className = "cm-completionDetail", IB.textContent = BB.detail, IB
            },
            position: 80
          }), IB.sort(((BB, IB) => BB.position - IB.position)).map((BB => BB.render))
        }(GB), this.optionClass = GB.optionClass, this.tooltipClass = GB.tooltipClass, this.range = OB(JB.length, oB, GB.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(BB.state), this.dom.addEventListener("mousedown", (ZB => {
          let {
            options: TB
          } = BB.state.field(IB).open;
          for (let IB, JB = ZB.target; JB && JB != this.dom; JB = JB.parentNode)
            if ("LI" == JB.nodeName && (IB = /-(\d+)$/.exec(JB.id)) && +IB[1] < TB.length) return this.applyCompletion(BB, TB[+IB[1]]), void ZB.preventDefault();
          if (ZB.target == this.list) {
            let IB = this.list.classList.contains("cm-completionListIncompleteTop") && ZB.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && ZB.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != IB && (BB.dispatch({
              effects: wB.of(IB)
            }), ZB.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (IB => {
          let ZB = BB.state.field(this.stateField, !1);
          ZB && ZB.tooltip && BB.state.facet(CB).closeOnBlur && IB.relatedTarget != BB.contentDOM && BB.dispatch({
            effects: UB.of(null)
          })
        })), this.showOptions(JB, TB.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(BB, IB) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(BB, IB, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(BB) {
        var IB;
        let ZB = BB.state.field(this.stateField),
          TB = BB.startState.field(this.stateField);
        if (this.updateTooltipClass(BB.state), ZB != TB) {
          let {
            options: JB,
            selected: oB,
            disabled: GB
          } = ZB.open;
          TB.open && TB.open.options == JB || (this.range = OB(JB.length, oB, BB.state.facet(CB).maxRenderedOptions), this.showOptions(JB, ZB.id)), this.updateSel(), GB != (null === (IB = TB.open) || void 0 === IB ? void 0 : IB.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!GB)
        }
      }
      updateTooltipClass(BB) {
        let IB = this.tooltipClass(BB);
        if (IB != this.currentClass) {
          for (let BB of this.currentClass.split(" ")) BB && this.dom.classList.remove(BB);
          for (let BB of IB.split(" ")) BB && this.dom.classList.add(BB);
          this.currentClass = IB
        }
      }
      positioned(BB) {
        this.space = BB, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let BB = this.view.state.field(this.stateField),
          IB = BB.open;
        (IB.selected > -1 && IB.selected < this.range.from || IB.selected >= this.range.to) && (this.range = OB(IB.options.length, IB.selected, this.view.state.facet(CB).maxRenderedOptions), this.showOptions(IB.options, BB.id));
        let ZB = this.updateSelectedOption(IB.selected);
        if (ZB) {
          this.destroyInfo();
          let {
            completion: TB
          } = IB.options[IB.selected], {
            info: oB
          } = TB;
          if (!oB) return;
          let GB = "string" === typeof oB ? document.createTextNode(oB) : oB(TB);
          if (!GB) return;
          "then" in GB ? GB.then((IB => {
            IB && this.view.state.field(this.stateField, !1) == BB && this.addInfoPane(IB, TB)
          })).catch((BB => (0, JB.W)(this.view.state, BB, "completion info"))) : (this.addInfoPane(GB, TB), ZB.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(BB, IB) {
        this.destroyInfo();
        let ZB = this.info = document.createElement("div");
        if (ZB.className = "cm-tooltip cm-completionInfo", ZB.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != BB.nodeType) ZB.appendChild(BB), this.infoDestroy = null;
        else {
          let {
            dom: IB,
            destroy: TB
          } = BB;
          ZB.appendChild(IB), this.infoDestroy = TB || null
        }
        this.dom.appendChild(ZB), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(BB) {
        let IB = null;
        for (let ZB = this.list.firstChild, TB = this.range.from; ZB; ZB = ZB.nextSibling, TB++) "LI" == ZB.nodeName && ZB.id ? TB == BB ? ZB.hasAttribute("aria-selected") || (ZB.setAttribute("aria-selected", "true"), IB = ZB) : ZB.hasAttribute("aria-selected") && (ZB.removeAttribute("aria-selected"), ZB.removeAttribute("aria-describedby")) : TB--;
        return IB && function(BB, IB) {
          let ZB = BB.getBoundingClientRect(),
            TB = IB.getBoundingClientRect(),
            JB = ZB.height / BB.offsetHeight;
          TB.top < ZB.top ? BB.scrollTop -= (ZB.top - TB.top) / JB : TB.bottom > ZB.bottom && (BB.scrollTop += (TB.bottom - ZB.bottom) / JB)
        }(this.list, IB), IB
      }
      measureInfo() {
        let BB = this.dom.querySelector("[aria-selected]");
        if (!BB || !this.info) return null;
        let IB = this.dom.getBoundingClientRect(),
          ZB = this.info.getBoundingClientRect(),
          TB = BB.getBoundingClientRect(),
          JB = this.space;
        if (!JB) {
          let BB = this.dom.ownerDocument.documentElement;
          JB = {
            left: 0,
            top: 0,
            right: BB.clientWidth,
            bottom: BB.clientHeight
          }
        }
        return TB.top > Math.min(JB.bottom, IB.bottom) - 10 || TB.bottom < Math.max(JB.top, IB.top) + 10 ? null : this.view.state.facet(CB).positionInfo(this.view, IB, TB, ZB, JB, this.dom)
      }
      placeInfo(BB) {
        this.info && (BB ? (BB.style && (this.info.style.cssText = BB.style), this.info.className = "cm-tooltip cm-completionInfo " + (BB.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(BB, IB, ZB) {
        const TB = document.createElement("ul");
        TB.id = IB, TB.setAttribute("role", "listbox"), TB.setAttribute("aria-expanded", "true"), TB.setAttribute("aria-label", this.view.state.phrase("Completions")), TB.addEventListener("mousedown", (BB => {
          BB.target == TB && BB.preventDefault()
        }));
        let JB = null;
        for (let oB = ZB.from; oB < ZB.to; oB++) {
          let {
            completion: GB,
            match: vB
          } = BB[oB], {
            section: kB
          } = GB;
          if (kB) {
            let BB = "string" == typeof kB ? kB : kB.name;
            if (BB != JB && (oB > ZB.from || 0 == ZB.from))
              if (JB = BB, "string" != typeof kB && kB.header) TB.appendChild(kB.header(kB));
              else {
                TB.appendChild(document.createElement("completion-section")).textContent = BB
              }
          }
          const cB = TB.appendChild(document.createElement("li"));
          cB.id = IB + "-" + oB, cB.setAttribute("role", "option");
          let nB = this.optionClass(GB);
          nB && (cB.className = nB);
          for (let BB of this.optionContent) {
            let IB = BB(GB, this.view.state, this.view, vB);
            IB && cB.appendChild(IB)
          }
        }
        return ZB.from && TB.classList.add("cm-completionListIncompleteTop"), ZB.to < BB.length && TB.classList.add("cm-completionListIncompleteBottom"), TB
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function iB(BB, IB) {
      return ZB => new YB(ZB, BB, IB)
    }

    function pB(BB) {
      return 100 * (BB.boost || 0) + (BB.apply ? 10 : 0) + (BB.info ? 5 : 0) + (BB.type ? 1 : 0)
    }
    class aB {
      constructor(BB, IB, ZB, TB, JB, oB) {
        this.options = BB, this.attrs = IB, this.tooltip = ZB, this.timestamp = TB, this.selected = JB, this.disabled = oB
      }
      setSelected(BB, IB) {
        return BB == this.selected || BB >= this.options.length ? this : new aB(this.options, PB(IB, BB), this.tooltip, this.timestamp, BB, this.disabled)
      }
      static build(BB, IB, ZB, TB, JB, oB) {
        if (TB && !oB && BB.some((BB => BB.isPending))) return TB.setDisabled();
        let GB = function(BB, IB) {
          let ZB = [],
            TB = null,
            JB = null,
            oB = BB => {
              ZB.push(BB);
              let {
                section: IB
              } = BB.completion;
              if (IB) {
                TB || (TB = []);
                let BB = "string" == typeof IB ? IB : IB.name;
                TB.some((IB => IB.name == BB)) || TB.push("string" == typeof IB ? {
                  name: BB
                } : IB)
              }
            },
            GB = IB.facet(CB);
          for (let hB of BB)
            if (hB.hasResult()) {
              let BB = hB.result.getMatch;
              if (!1 === hB.result.filter)
                for (let IB of hB.result.options) oB(new nB(IB, hB.source, BB ? BB(IB) : [], 1e9 - ZB.length));
              else {
                let ZB, TB = IB.sliceDoc(hB.from, hB.to),
                  vB = GB.filterStrict ? new dB(TB) : new WB(TB);
                for (let IB of hB.result.options)
                  if (ZB = vB.match(IB.label)) {
                    let TB = IB.displayLabel ? BB ? BB(IB, ZB.matched) : [] : ZB.matched,
                      GB = ZB.score + (IB.boost || 0);
                    if (oB(new nB(IB, hB.source, TB, GB)), "object" == typeof IB.section && "dynamic" === IB.section.rank) {
                      let {
                        name: BB
                      } = IB.section;
                      JB || (JB = Object.create(null)), JB[BB] = Math.max(GB, JB[BB] || -1e9)
                    }
                  }
              }
            } if (TB) {
            let BB = Object.create(null),
              IB = 0,
              oB = (BB, IB) => ("dynamic" === BB.rank && "dynamic" === IB.rank ? JB[IB.name] - JB[BB.name] : 0) || ("number" == typeof BB.rank ? BB.rank : 1e9) - ("number" == typeof IB.rank ? IB.rank : 1e9) || (BB.name < IB.name ? -1 : 1);
            for (let ZB of TB.sort(oB)) IB -= 1e5, BB[ZB.name] = IB;
            for (let TB of ZB) {
              let {
                section: IB
              } = TB.completion;
              IB && (TB.score += BB["string" == typeof IB ? IB : IB.name])
            }
          }
          let vB = [],
            kB = null,
            cB = GB.compareCompletions;
          for (let nB of ZB.sort(((BB, IB) => IB.score - BB.score || cB(BB.completion, IB.completion)))) {
            let BB = nB.completion;
            !kB || kB.label != BB.label || kB.detail != BB.detail || null != kB.type && null != BB.type && kB.type != BB.type || kB.apply != BB.apply || kB.boost != BB.boost ? vB.push(nB) : pB(nB.completion) > pB(kB) && (vB[vB.length - 1] = nB), kB = nB.completion
          }
          return vB
        }(BB, IB);
        if (!GB.length) return TB && BB.some((BB => BB.isPending)) ? TB.setDisabled() : null;
        let vB = IB.facet(CB).selectOnOpen ? 0 : -1;
        if (TB && TB.selected != vB && -1 != TB.selected) {
          let BB = TB.options[TB.selected].completion;
          for (let IB = 0; IB < GB.length; IB++)
            if (GB[IB].completion == BB) {
              vB = IB;
              break
            }
        }
        return new aB(GB, PB(ZB, vB), {
          pos: BB.reduce(((BB, IB) => IB.hasResult() ? Math.min(BB, IB.from) : BB), 1e8),
          create: fB,
          above: JB.aboveCursor
        }, TB ? TB.timestamp : Date.now(), vB, !1)
      }
      map(BB) {
        return new aB(this.options, this.attrs, {
          ...this.tooltip,
          pos: BB.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new aB(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class HB {
      constructor(BB, IB, ZB) {
        this.active = BB, this.id = IB, this.open = ZB
      }
      static start() {
        return new HB(RB, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(BB) {
        let {
          state: IB
        } = BB, ZB = IB.facet(CB), TB = (ZB.override || IB.languageDataAt("autocomplete", hB(IB)).map(qB)).map((IB => (this.active.find((BB => BB.source == IB)) || new mB(IB, this.active.some((BB => 0 != BB.state)) ? 1 : 0)).update(BB, ZB)));
        TB.length == this.active.length && TB.every(((BB, IB) => BB == this.active[IB])) && (TB = this.active);
        let JB = this.open,
          oB = BB.effects.some((BB => BB.is(LB)));
        JB && BB.docChanged && (JB = JB.map(BB.changes)), BB.selection || TB.some((IB => IB.hasResult() && BB.changes.touchesRange(IB.from, IB.to))) || ! function(BB, IB) {
          if (BB == IB) return !0;
          for (let ZB = 0, TB = 0;;) {
            for (; ZB < BB.length && !BB[ZB].hasResult();) ZB++;
            for (; TB < IB.length && !IB[TB].hasResult();) TB++;
            let JB = ZB == BB.length,
              oB = TB == IB.length;
            if (JB || oB) return JB == oB;
            if (BB[ZB++].result != IB[TB++].result) return !1
          }
        }(TB, this.active) || oB ? JB = aB.build(TB, IB, this.id, JB, ZB, oB) : JB && JB.disabled && !TB.some((BB => BB.isPending)) && (JB = null), !JB && TB.every((BB => !BB.isPending)) && TB.some((BB => BB.hasResult())) && (TB = TB.map((BB => BB.hasResult() ? new mB(BB.source, 0) : BB)));
        for (let GB of BB.effects) GB.is(wB) && (JB = JB && JB.setSelected(GB.value, this.id));
        return TB == this.active && JB == this.open ? this : new HB(TB, this.id, JB)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? MB : jB
      }
    }
    const MB = {
        "aria-autocomplete": "list"
      },
      jB = {};

    function PB(BB, IB) {
      let ZB = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": BB
      };
      return IB > -1 && (ZB["aria-activedescendant"] = BB + "-" + IB), ZB
    }
    const RB = [];

    function rB(BB, IB) {
      if (BB.isUserEvent("input.complete")) {
        let ZB = BB.annotation(FB);
        if (ZB && IB.activateOnCompletion(ZB)) return 12
      }
      let ZB = BB.isUserEvent("input.type");
      return ZB && IB.activateOnTyping ? 5 : ZB ? 1 : BB.isUserEvent("delete.backward") ? 2 : BB.selection ? 8 : BB.docChanged ? 16 : 0
    }
    class mB {
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = BB, this.state = IB, this.explicit = ZB
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(BB, IB) {
        let ZB = rB(BB, IB),
          TB = this;
        (8 & ZB || 16 & ZB && this.touches(BB)) && (TB = new mB(TB.source, 0)), 4 & ZB && 0 == TB.state && (TB = new mB(this.source, 1)), TB = TB.updateFor(BB, ZB);
        for (let JB of BB.effects)
          if (JB.is(yB)) TB = new mB(TB.source, 1, JB.value);
          else if (JB.is(UB)) TB = new mB(TB.source, 0);
        else if (JB.is(LB))
          for (let BB of JB.value) BB.source == TB.source && (TB = BB);
        return TB
      }
      updateFor(BB, IB) {
        return this.map(BB.changes)
      }
      map(BB) {
        return this
      }
      touches(BB) {
        return BB.changes.touchesRange(hB(BB.state))
      }
    }
    class XB extends mB {
      constructor(BB, IB, ZB, TB, JB, oB) {
        super(BB, 3, IB), this.limit = ZB, this.result = TB, this.from = JB, this.to = oB
      }
      hasResult() {
        return !0
      }
      updateFor(BB, IB) {
        var ZB;
        if (!(3 & IB)) return this.map(BB.changes);
        let TB = this.result;
        TB.map && !BB.changes.empty && (TB = TB.map(TB, BB.changes));
        let JB = BB.changes.mapPos(this.from),
          oB = BB.changes.mapPos(this.to, 1),
          vB = hB(BB.state);
        if (vB > oB || !TB || 2 & IB && (hB(BB.startState) == this.from || vB < this.limit)) return new mB(this.source, 4 & IB ? 1 : 0);
        let kB = BB.changes.mapPos(this.limit);
        return function(BB, IB, ZB, TB) {
          if (!BB) return !1;
          let JB = IB.sliceDoc(ZB, TB);
          return "function" == typeof BB ? BB(JB, ZB, TB, IB) : zB(BB, !0).test(JB)
        }(TB.validFor, BB.state, JB, oB) ? new XB(this.source, this.explicit, kB, TB, JB, oB) : TB.update && (TB = TB.update(TB, JB, oB, new GB(BB.state, vB, !1))) ? new XB(this.source, this.explicit, kB, TB, TB.from, null !== (ZB = TB.to) && void 0 !== ZB ? ZB : hB(BB.state)) : new mB(this.source, 1, this.explicit)
      }
      map(BB) {
        if (BB.empty) return this;
        return (this.result.map ? this.result.map(this.result, BB) : this.result) ? new XB(this.source, this.explicit, BB.mapPos(this.limit), this.result, BB.mapPos(this.from), BB.mapPos(this.to, 1)) : new mB(this.source, 0)
      }
      touches(BB) {
        return BB.changes.touchesRange(this.from, this.to)
      }
    }
    const LB = TB.K.define({
        map: (BB, IB) => BB.map((BB => BB.map(IB)))
      }),
      eB = TB.L.define({
        create: () => HB.start(),
        update: (BB, IB) => BB.update(IB),
        provide: BB => [JB.jb.from(BB, (BB => BB.tooltip)), JB.i.contentAttributes.from(BB, (BB => BB.attrs))]
      });

    function uB(BB, IB) {
      const ZB = IB.completion.apply || IB.completion.label;
      let TB = BB.state.field(eB).active.find((BB => BB.source == IB.source));
      return TB instanceof XB && ("string" == typeof ZB ? BB.dispatch({
        ...NB(BB.state, ZB, TB.from, TB.to),
        annotations: FB.of(IB.completion)
      }) : ZB(BB, IB.completion, TB.from, TB.to), !0)
    }
    const fB = iB(eB, uB);

    function lB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return ZB => {
        let TB = ZB.state.field(eB, !1);
        if (!TB || !TB.open || TB.open.disabled || Date.now() - TB.open.timestamp < ZB.state.facet(CB).interactionDelay) return !1;
        let oB, GB = 1;
        "page" == IB && (oB = (0, JB.D)(ZB, TB.open.tooltip)) && (GB = Math.max(2, Math.floor(oB.dom.offsetHeight / oB.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: vB
        } = TB.open.options, kB = TB.open.selected > -1 ? TB.open.selected + GB * (BB ? 1 : -1) : BB ? 0 : vB - 1;
        return kB < 0 ? kB = "page" == IB ? 0 : vB - 1 : kB >= vB && (kB = "page" == IB ? vB - 1 : 0), ZB.dispatch({
          effects: wB.of(kB)
        }), !0
      }
    }
    const AB = BB => !!BB.state.field(eB, !1) && (BB.dispatch({
      effects: yB.of(!0)
    }), !0);
    class tB {
      constructor(BB, IB) {
        this.active = BB, this.context = IB, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const bB = JB.m.fromClass(class {
        constructor(BB) {
          this.view = BB, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let IB of BB.state.field(eB).active) IB.isPending && this.startQuery(IB)
        }
        update(BB) {
          let IB = BB.state.field(eB),
            ZB = BB.state.facet(CB);
          if (!BB.selectionSet && !BB.docChanged && BB.startState.field(eB) == IB) return;
          let TB = BB.transactions.some((BB => {
            let IB = rB(BB, ZB);
            return 8 & IB || (BB.selection || BB.docChanged) && !(3 & IB)
          }));
          for (let vB = 0; vB < this.running.length; vB++) {
            let IB = this.running[vB];
            if (TB || IB.context.abortOnDocChange && BB.docChanged || IB.updates.length + BB.transactions.length > 50 && Date.now() - IB.time > 1e3) {
              for (let BB of IB.context.abortListeners) try {
                BB()
              } catch (GB) {
                (0, JB.W)(this.view.state, GB)
              }
              IB.context.abortListeners = null, this.running.splice(vB--, 1)
            } else IB.updates.push(...BB.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), BB.transactions.some((BB => BB.effects.some((BB => BB.is(yB))))) && (this.pendingStart = !0);
          let oB = this.pendingStart ? 50 : ZB.activateOnTypingDelay;
          if (this.debounceUpdate = IB.active.some((BB => BB.isPending && !this.running.some((IB => IB.active.source == BB.source)))) ? setTimeout((() => this.startUpdate()), oB) : -1, 0 != this.composing)
            for (let JB of BB.transactions) JB.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && JB.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: BB
          } = this.view, IB = BB.field(eB);
          for (let ZB of IB.active) ZB.isPending && !this.running.some((BB => BB.active.source == ZB.source)) && this.startQuery(ZB);
          this.running.length && IB.open && IB.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(CB).updateSyncTime))
        }
        startQuery(BB) {
          let {
            state: IB
          } = this.view, ZB = hB(IB), TB = new GB(IB, ZB, BB.explicit, this.view), oB = new tB(BB, TB);
          this.running.push(oB), Promise.resolve(BB.source(TB)).then((BB => {
            oB.context.aborted || (oB.done = BB || null, this.scheduleAccept())
          }), (BB => {
            this.view.dispatch({
              effects: UB.of(null)
            }), (0, JB.W)(this.view.state, BB)
          }))
        }
        scheduleAccept() {
          this.running.every((BB => void 0 !== BB.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(CB).updateSyncTime))
        }
        accept() {
          var BB;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let IB = [],
            ZB = this.view.state.facet(CB),
            TB = this.view.state.field(eB);
          for (let JB = 0; JB < this.running.length; JB++) {
            let oB = this.running[JB];
            if (void 0 === oB.done) continue;
            if (this.running.splice(JB--, 1), oB.done) {
              let TB = hB(oB.updates.length ? oB.updates[0].startState : this.view.state),
                JB = Math.min(TB, oB.done.from + (oB.active.explicit ? 0 : 1)),
                GB = new XB(oB.active.source, oB.active.explicit, JB, oB.done, oB.done.from, null !== (BB = oB.done.to) && void 0 !== BB ? BB : TB);
              for (let BB of oB.updates) GB = GB.update(BB, ZB);
              if (GB.hasResult()) {
                IB.push(GB);
                continue
              }
            }
            let GB = TB.active.find((BB => BB.source == oB.active.source));
            if (GB && GB.isPending)
              if (null == oB.done) {
                let BB = new mB(oB.active.source, 0);
                for (let IB of oB.updates) BB = BB.update(IB, ZB);
                BB.isPending || IB.push(BB)
              } else this.startQuery(GB)
          }(IB.length || TB.open && TB.open.disabled) && this.view.dispatch({
            effects: LB.of(IB)
          })
        }
      }, {
        eventHandlers: {
          blur(BB) {
            let IB = this.view.state.field(eB, !1);
            if (IB && IB.tooltip && this.view.state.facet(CB).closeOnBlur) {
              let ZB = IB.open && (0, JB.D)(this.view, IB.open.tooltip);
              ZB && ZB.dom.contains(BB.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: UB.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: yB.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      xB = "object" == typeof navigator && /Win/.test(navigator.platform),
      EB = TB.A.highest(JB.i.domEventHandlers({
        keydown(BB, IB) {
          let ZB = IB.state.field(eB, !1);
          if (!ZB || !ZB.open || ZB.open.disabled || ZB.open.selected < 0 || BB.key.length > 1 || BB.ctrlKey && (!xB || !BB.altKey) || BB.metaKey) return !1;
          let TB = ZB.open.options[ZB.open.selected],
            JB = ZB.active.find((BB => BB.source == TB.source)),
            oB = TB.completion.commitCharacters || JB.result.commitCharacters;
          return oB && oB.indexOf(BB.key) > -1 && uB(IB, TB), !1
        }
      })),
      DB = JB.i.baseTheme({
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
    class KB {
      constructor(BB, IB, ZB, TB) {
        this.field = BB, this.line = IB, this.from = ZB, this.to = TB
      }
    }
    class VB {
      constructor(BB, IB, ZB) {
        this.field = BB, this.from = IB, this.to = ZB
      }
      map(BB) {
        let IB = BB.mapPos(this.from, -1, TB.w.TrackDel),
          ZB = BB.mapPos(this.to, 1, TB.w.TrackDel);
        return null == IB || null == ZB ? null : new VB(this.field, IB, ZB)
      }
    }
    class SB {
      constructor(BB, IB) {
        this.lines = BB, this.fieldPositions = IB
      }
      instantiate(BB, IB) {
        let ZB = [],
          TB = [IB],
          JB = BB.doc.lineAt(IB),
          GB = /^\s*/.exec(JB.text)[0];
        for (let kB of this.lines) {
          if (ZB.length) {
            let ZB = GB,
              JB = /^\t*/.exec(kB)[0].length;
            for (let IB = 0; IB < JB; IB++) ZB += BB.facet(oB.Y);
            TB.push(IB + ZB.length - JB), kB = ZB + kB.slice(JB)
          }
          ZB.push(kB), IB += kB.length + 1
        }
        let vB = this.fieldPositions.map((BB => new VB(BB.field, TB[BB.line] + BB.from, TB[BB.line] + BB.to)));
        return {
          text: ZB,
          vq: vB
        }
      }
      static parse(BB) {
        let IB, ZB = [],
          TB = [],
          JB = [];
        for (let oB of BB.split(/\r\n?|\n/)) {
          for (; IB = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(oB);) {
            let BB = IB[1] ? +IB[1] : null,
              GB = IB[2] || IB[3] || "",
              vB = -1,
              kB = GB.replace(/\\[{}]/g, (BB => BB[1]));
            for (let IB = 0; IB < ZB.length; IB++)(null != BB ? ZB[IB].seq == BB : kB && ZB[IB].name == kB) && (vB = IB);
            if (vB < 0) {
              let IB = 0;
              for (; IB < ZB.length && (null == BB || null != ZB[IB].seq && ZB[IB].seq < BB);) IB++;
              ZB.splice(IB, 0, {
                seq: BB,
                name: kB
              }), vB = IB;
              for (let BB of JB) BB.field >= vB && BB.field++
            }
            for (let ZB of JB)
              if (ZB.line == TB.length && ZB.from > IB.index) {
                let BB = IB[2] ? 3 + (IB[1] || "").length : 2;
                ZB.from -= BB, ZB.to -= BB
              } JB.push(new KB(vB, TB.length, IB.index, IB.index + kB.length)), oB = oB.slice(0, IB.index) + GB + oB.slice(IB.index + IB[0].length)
          }
          oB = oB.replace(/\\([{}])/g, ((BB, IB, ZB) => {
            for (let oB of JB) oB.line == TB.length && oB.from > ZB && (oB.from--, oB.to--);
            return IB
          })), TB.push(oB)
        }
        return new SB(TB, JB)
      }
    }
    let BI = JB.d.widget({
        widget: new class extends JB.o {
          toDOM() {
            let BB = document.createElement("span");
            return BB.className = "cm-snippetFieldPosition", BB
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      II = JB.d.mark({
        class: "cm-snippetField"
      });
    class ZI {
      constructor(BB, IB) {
        this.vq = BB, this.active = IB, this.deco = JB.d.set(BB.map((BB => (BB.from == BB.to ? BI : II).range(BB.from, BB.to))), !0)
      }
      map(BB) {
        let IB = [];
        for (let ZB of this.vq) {
          let TB = ZB.map(BB);
          if (!TB) return null;
          IB.push(TB)
        }
        return new ZI(IB, this.active)
      }
      selectionInsideField(BB) {
        return BB.vq.every((BB => this.vq.some((IB => IB.field == this.active && IB.from <= BB.from && IB.to >= BB.to))))
      }
    }
    const TI = TB.K.define({
        map: (BB, IB) => BB && BB.map(IB)
      }),
      JI = TB.K.define(),
      oI = TB.L.define({
        create: () => null,
        update(BB, IB) {
          for (let ZB of IB.effects) {
            if (ZB.is(TI)) return ZB.value;
            if (ZB.is(JI) && BB) return new ZI(BB.vq, ZB.value)
          }
          return BB && IB.docChanged && (BB = BB.map(IB.changes)), BB && IB.selection && !BB.selectionInsideField(IB.selection) && (BB = null), BB
        },
        provide: BB => JB.i.vT.from(BB, (BB => BB ? BB.deco : JB.d.none))
      });

    function GI(BB, IB) {
      return TB.n.create(BB.filter((BB => BB.field == IB)).map((BB => TB.n.range(BB.from, BB.to))))
    }

    function vI(BB) {
      let IB = SB.parse(BB);
      return (BB, ZB, JB, oB) => {
        let {
          text: GB,
          vq: vB
        } = IB.instantiate(BB.state, JB), {
          main: kB
        } = BB.state.selection, cB = {
          changes: {
            from: JB,
            to: oB == kB.from ? kB.to : oB,
            insert: TB.O.of(GB)
          },
          scrollIntoView: !0,
          annotations: ZB ? [FB.of(ZB), TB.P.userEvent.of("input.complete")] : void 0
        };
        if (vB.length && (cB.selection = GI(vB, 0)), vB.some((BB => BB.field > 0))) {
          let IB = new ZI(vB, 0),
            ZB = cB.effects = [TI.of(IB)];
          void 0 === BB.state.field(oI, !1) && ZB.push(TB.K.appendConfig.of([oI, hI, FI, DB]))
        }
        BB.dispatch(BB.state.update(cB))
      }
    }

    function kI(BB) {
      return IB => {
        let {
          state: ZB,
          dispatch: TB
        } = IB, JB = ZB.field(oI, !1);
        if (!JB || BB < 0 && 0 == JB.active) return !1;
        let oB = JB.active + BB,
          GB = BB > 0 && !JB.vq.some((IB => IB.field == oB + BB));
        return TB(ZB.update({
          selection: GI(JB.vq, oB),
          effects: TI.of(GB ? null : new ZI(JB.vq, oB)),
          scrollIntoView: !0
        })), !0
      }
    }
    const cI = [{
        key: "Tab",
        run: kI(1),
        shift: kI(-1)
      }, {
        key: "Escape",
        run: BB => {
          let {
            state: IB,
            dispatch: ZB
          } = BB;
          return !!IB.field(oI, !1) && (ZB(IB.update({
            effects: TI.of(null)
          })), !0)
        }
      }],
      nI = TB.t.define({
        combine: BB => BB.length ? BB[0] : cI
      }),
      hI = TB.A.highest(JB.Q.compute([nI], (BB => BB.facet(nI))));

    function zI(BB, IB) {
      return {
        ...IB,
        apply: vI(BB)
      }
    }
    const FI = JB.i.domEventHandlers({
      mousedown(BB, IB) {
        let ZB, TB = IB.state.field(oI, !1);
        if (!TB || null == (ZB = IB.posAtCoords({
            x: BB.clientX,
            y: BB.clientY
          }))) return !1;
        let JB = TB.vq.find((BB => BB.from <= ZB && BB.to >= ZB));
        return !(!JB || JB.field == TB.active) && (IB.dispatch({
          selection: GI(TB.vq, JB.field),
          effects: TI.of(TB.vq.some((BB => BB.field > JB.field)) ? new ZI(TB.vq, JB.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const NI = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      gI = TB.K.define({
        map(BB, IB) {
          let ZB = IB.mapPos(BB, -1, TB.w.TrackAfter);
          return null == ZB ? void 0 : ZB
        }
      }),
      qI = new class extends TB.J {};
    qI.startSide = 1, qI.endSide = -1;
    const yI = TB.L.define({
      create: () => TB.F.empty,
      update(BB, IB) {
        if (BB = BB.map(IB.changes), IB.selection) {
          let ZB = IB.state.doc.lineAt(IB.selection.main.head);
          BB = BB.update({
            filter: BB => BB >= ZB.from && BB <= ZB.to
          })
        }
        for (let ZB of IB.effects) ZB.is(gI) && (BB = BB.update({
          add: [qI.range(ZB.value, ZB.value + 1)]
        }));
        return BB
      }
    });

    function UI() {
      return [sI, yI]
    }
    const WI = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function dI(BB) {
      for (let IB = 0; IB < 16; IB += 2)
        if (WI.charCodeAt(IB) == BB) return WI.charAt(IB + 1);
      return (0, TB.eb)(BB < 128 ? BB : BB + 1)
    }

    function CI(BB, IB) {
      return BB.languageDataAt("closeBrackets", IB)[0] || NI
    }
    const QI = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      sI = JB.i.inputHandler.of(((BB, IB, ZB, JB) => {
        if ((QI ? BB.composing : BB.compositionStarted) || BB.state.readOnly) return !1;
        let oB = BB.state.selection.main;
        if (JB.length > 2 || 2 == JB.length && 1 == (0, TB.S)((0, TB.Q)(JB, 0)) || IB != oB.from || ZB != oB.to) return !1;
        let GB = function(BB, IB) {
          let ZB = CI(BB, BB.selection.main.head),
            JB = ZB.brackets || NI.brackets;
          for (let oB of JB) {
            let GB = dI((0, TB.Q)(oB, 0));
            if (IB == oB) return GB == oB ? aI(BB, oB, JB.indexOf(oB + oB + oB) > -1, ZB) : iI(BB, oB, GB, ZB.before || NI.before);
            if (IB == GB && OI(BB, BB.selection.main.from)) return pI(BB, oB, GB)
          }
          return null
        }(BB.state, JB);
        return !!GB && (BB.dispatch(GB), !0)
      })),
      wI = [{
        key: "Backspace",
        run: BB => {
          let {
            state: IB,
            dispatch: ZB
          } = BB;
          if (IB.readOnly) return !1;
          let JB = CI(IB, IB.selection.main.head).brackets || NI.brackets,
            oB = null,
            GB = IB.changeByRange((BB => {
              if (BB.empty) {
                let ZB = function(BB, IB) {
                  let ZB = BB.sliceString(IB - 2, IB);
                  return (0, TB.S)((0, TB.Q)(ZB, 0)) == ZB.length ? ZB : ZB.slice(1)
                }(IB.doc, BB.head);
                for (let oB of JB)
                  if (oB == ZB && YI(IB.doc, BB.head) == dI((0, TB.Q)(oB, 0))) return {
                    changes: {
                      from: BB.head - oB.length,
                      to: BB.head + oB.length
                    },
                    range: TB.n.cursor(BB.head - oB.length)
                  }
              }
              return {
                range: oB = BB
              }
            }));
          return oB || ZB(IB.update(GB, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !oB
        }
      }];

    function OI(BB, IB) {
      let ZB = !1;
      return BB.field(yI).between(0, BB.doc.length, (BB => {
        BB == IB && (ZB = !0)
      })), ZB
    }

    function YI(BB, IB) {
      let ZB = BB.sliceString(IB, IB + 2);
      return ZB.slice(0, (0, TB.S)((0, TB.Q)(ZB, 0)))
    }

    function iI(BB, IB, ZB, JB) {
      let oB = null,
        GB = BB.changeByRange((GB => {
          if (!GB.empty) return {
            changes: [{
              insert: IB,
              from: GB.from
            }, {
              insert: ZB,
              from: GB.to
            }],
            effects: gI.of(GB.to + IB.length),
            range: TB.n.range(GB.anchor + IB.length, GB.head + IB.length)
          };
          let vB = YI(BB.doc, GB.head);
          return !vB || /\s/.test(vB) || JB.indexOf(vB) > -1 ? {
            changes: {
              insert: IB + ZB,
              from: GB.head
            },
            effects: gI.of(GB.head + IB.length),
            range: TB.n.cursor(GB.head + IB.length)
          } : {
            range: oB = GB
          }
        }));
      return oB ? null : BB.update(GB, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function pI(BB, IB, ZB) {
      let JB = null,
        oB = BB.changeByRange((IB => IB.empty && YI(BB.doc, IB.head) == ZB ? {
          changes: {
            from: IB.head,
            to: IB.head + ZB.length,
            insert: ZB
          },
          range: TB.n.cursor(IB.head + ZB.length)
        } : JB = {
          range: IB
        }));
      return JB ? null : BB.update(oB, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function aI(BB, IB, ZB, JB) {
      let GB = JB.stringPrefixes || NI.stringPrefixes,
        vB = null,
        kB = BB.changeByRange((JB => {
          if (!JB.empty) return {
            changes: [{
              insert: IB,
              from: JB.from
            }, {
              insert: IB,
              from: JB.to
            }],
            effects: gI.of(JB.to + IB.length),
            range: TB.n.range(JB.anchor + IB.length, JB.head + IB.length)
          };
          let kB, cB = JB.head,
            nB = YI(BB.doc, cB);
          if (nB == IB) {
            if (HI(BB, cB)) return {
              changes: {
                insert: IB + IB,
                from: cB
              },
              effects: gI.of(cB + IB.length),
              range: TB.n.cursor(cB + IB.length)
            };
            if (OI(BB, cB)) {
              let JB = ZB && BB.sliceDoc(cB, cB + 3 * IB.length) == IB + IB + IB ? IB + IB + IB : IB;
              return {
                changes: {
                  from: cB,
                  to: cB + JB.length,
                  insert: JB
                },
                range: TB.n.cursor(cB + JB.length)
              }
            }
          } else {
            if (ZB && BB.sliceDoc(cB - 2 * IB.length, cB) == IB + IB && (kB = MI(BB, cB - 2 * IB.length, GB)) > -1 && HI(BB, kB)) return {
              changes: {
                insert: IB + IB + IB + IB,
                from: cB
              },
              effects: gI.of(cB + IB.length),
              range: TB.n.cursor(cB + IB.length)
            };
            if (BB.charCategorizer(cB)(nB) != TB.j.Word && MI(BB, cB, GB) > -1 && ! function(BB, IB, ZB, TB) {
                let JB = (0, oB.mb)(BB).resolveInner(IB, -1),
                  GB = TB.reduce(((BB, IB) => Math.max(BB, IB.length)), 0);
                for (let oB = 0; oB < 5; oB++) {
                  let oB = BB.sliceDoc(JB.from, Math.min(JB.to, JB.from + ZB.length + GB)),
                    vB = oB.indexOf(ZB);
                  if (!vB || vB > -1 && TB.indexOf(oB.slice(0, vB)) > -1) {
                    let IB = JB.firstChild;
                    for (; IB && IB.from == JB.from && IB.to - IB.from > ZB.length + vB;) {
                      if (BB.sliceDoc(IB.to - ZB.length, IB.to) == ZB) return !1;
                      IB = IB.firstChild
                    }
                    return !0
                  }
                  let kB = JB.to == IB && JB.parent;
                  if (!kB) break;
                  JB = kB
                }
                return !1
              }(BB, cB, IB, GB)) return {
              changes: {
                insert: IB + IB,
                from: cB
              },
              effects: gI.of(cB + IB.length),
              range: TB.n.cursor(cB + IB.length)
            }
          }
          return {
            range: vB = JB
          }
        }));
      return vB ? null : BB.update(kB, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function HI(BB, IB) {
      let ZB = (0, oB.mb)(BB).resolveInner(IB + 1);
      return ZB.parent && ZB.from == IB
    }

    function MI(BB, IB, ZB) {
      let JB = BB.charCategorizer(IB);
      if (JB(BB.sliceDoc(IB - 1, IB)) != TB.j.Word) return IB;
      for (let oB of ZB) {
        let ZB = IB - oB.length;
        if (BB.sliceDoc(ZB, IB) == oB && JB(BB.sliceDoc(ZB - 1, ZB)) != TB.j.Word) return ZB
      }
      return -1
    }

    function jI() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [EB, eB, CB.of(BB), bB, RI, DB]
    }
    const PI = [{
        key: "Ctrl-Space",
        run: AB
      }, {
        mac: "Alt-`",
        run: AB
      }, {
        mac: "Alt-i",
        run: AB
      }, {
        key: "Escape",
        run: BB => {
          let IB = BB.state.field(eB, !1);
          return !(!IB || !IB.active.some((BB => 0 != BB.state))) && (BB.dispatch({
            effects: UB.of(null)
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
          let IB = BB.state.field(eB, !1);
          return !(BB.state.readOnly || !IB || !IB.open || IB.open.selected < 0 || IB.open.disabled || Date.now() - IB.open.timestamp < BB.state.facet(CB).interactionDelay) && uB(BB, IB.open.options[IB.open.selected])
        }
      }],
      RI = TB.A.highest(JB.Q.computeN([CB], (BB => BB.facet(CB).defaultKeymap ? [PI] : [])))
  },
  41486: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => cB,
      h: () => zB,
      i: () => nB,
      j: () => hB
    });
    var TB = ZB(41342);
    class JB {
      constructor(BB, IB, ZB, TB) {
        this.origin = BB, this.changes = IB, this.effects = ZB, this.clientID = TB
      }
    }
    class oB {
      constructor(BB, IB) {
        this.version = BB, this.unconfirmed = IB
      }
    }
    const GB = TB.t.define({
        combine(BB) {
          let IB = (0, TB.T)(BB, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: BB => BB
          });
          return null == IB.clientID && (IB.clientID = BB.length && BB[0].generatedID || ""), IB
        }
      }),
      vB = TB.d.define(),
      kB = TB.L.define({
        create: BB => new oB(BB.facet(GB).startVersion, []),
        update(BB, IB) {
          let ZB = IB.annotation(vB);
          if (ZB) return ZB;
          let {
            sharedEffects: TB,
            clientID: kB
          } = IB.startState.facet(GB), cB = TB(IB);
          return cB.length || !IB.changes.empty ? new oB(BB.version, BB.unconfirmed.concat(new JB(IB, IB.changes, cB, kB))) : BB
        }
      });

    function cB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [kB, GB.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, BB))]
    }

    function nB(BB, IB) {
      let {
        version: ZB,
        unconfirmed: cB
      } = BB.field(kB), {
        clientID: nB
      } = BB.facet(GB);
      ZB += IB.length;
      let hB = [],
        zB = null,
        FB = 0;
      for (let JB of IB) {
        let BB = FB < cB.length ? cB[FB] : null;
        BB && BB.clientID == JB.clientID ? (zB && (zB = zB.map(BB.changes, !0)), hB = TB.K.mapEffects(hB, JB.changes), FB++) : (hB = TB.K.mapEffects(hB, JB.changes), JB.effects && (hB = hB.concat(JB.effects)), zB = zB ? zB.compose(JB.changes) : JB.changes)
      }
      if (FB && (cB = cB.slice(FB)), cB.length && (zB && (cB = cB.map((BB => {
          let IB = BB.changes.map(zB);
          return zB = zB.map(BB.changes, !0), new JB(BB.origin, IB, TB.K.mapEffects(BB.effects, zB), nB)
        }))), hB.length)) {
        let BB = cB.reduce(((BB, IB) => BB.compose(IB.changes)), TB.ChangeSet.empty(cB[0].changes.length));
        hB = TB.K.mapEffects(hB, BB)
      }
      return zB ? BB.update({
        changes: zB,
        effects: hB,
        annotations: [TB.P.addToHistory.of(!1), TB.P.remote.of(!0), vB.of(new oB(ZB, cB))],
        filter: !1
      }) : BB.update({
        annotations: [vB.of(new oB(ZB, cB))]
      })
    }

    function hB(BB) {
      return BB.field(kB).unconfirmed
    }

    function zB(BB) {
      return BB.field(kB).version
    }
  },
  41385: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => gI
    });
    var TB = ZB(41374);
    class JB {
      constructor(BB, IB, ZB, TB, JB, oB, GB, vB, kB) {
        let cB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          nB = arguments.length > 10 ? arguments[10] : void 0;
        this.p = BB, this.stack = IB, this.state = ZB, this.reducePos = TB, this.pos = JB, this.score = oB, this.buffer = GB, this.bufferBase = vB, this.curContext = kB, this.lookAhead = cB, this.parent = nB
      }
      toString() {
        return `[${this.stack.filter(((BB,IB)=>IB%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          TB = BB.parser.context;
        return new JB(BB, [], IB, ZB, ZB, 0, [], 0, TB ? new oB(TB, TB.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(BB, IB) {
        this.stack.push(this.state, IB, this.bufferBase + this.buffer.length), this.state = BB
      }
      reduce(BB) {
        var IB;
        let ZB = BB >> 19,
          TB = 65535 & BB,
          {
            parser: JB
          } = this.p,
          oB = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          GB = JB.dynamicPrecedence(TB);
        if (GB && (this.score += GB), 0 == ZB) return this.pushState(JB.getGoto(this.state, TB, !0), this.reducePos), TB < JB.minRepeatTerm && this.storeNode(TB, this.reducePos, this.reducePos, oB ? 8 : 4, !0), void this.reduceContext(TB, this.reducePos);
        let vB = this.stack.length - 3 * (ZB - 1) - (262144 & BB ? 6 : 0),
          kB = vB ? this.stack[vB - 2] : this.p.vq[0].from,
          cB = this.reducePos - kB;
        cB >= 2e3 && !(null === (IB = this.p.parser.nodeSet.types[TB]) || void 0 === IB ? void 0 : IB.isAnonymous) && (kB == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = cB) : this.p.lastBigReductionSize < cB && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = kB, this.p.lastBigReductionSize = cB));
        let nB = vB ? this.stack[vB - 1] : 0,
          hB = this.bufferBase + this.buffer.length - nB;
        if (TB < JB.minRepeatTerm || 131072 & BB) {
          let BB = JB.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(TB, kB, BB, hB + 4, !0)
        }
        if (262144 & BB) this.state = this.stack[vB];
        else {
          let BB = this.stack[vB - 3];
          this.state = JB.getGoto(BB, TB, !0)
        }
        for (; this.stack.length > vB;) this.stack.pop();
        this.reduceContext(TB, kB)
      }
      storeNode(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          JB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == BB && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let BB = this,
            TB = this.buffer.length;
          if (0 == TB && BB.parent && (TB = BB.bufferBase - BB.parent.bufferBase, BB = BB.parent), TB > 0 && 0 == BB.buffer[TB - 4] && BB.buffer[TB - 1] > -1) {
            if (IB == ZB) return;
            if (BB.buffer[TB - 2] >= IB) return void(BB.buffer[TB - 2] = ZB)
          }
        }
        if (JB && this.pos != ZB) {
          let JB = this.buffer.length;
          if (JB > 0 && (0 != this.buffer[JB - 4] || this.buffer[JB - 1] < 0)) {
            let BB = !1;
            for (let IB = JB; IB > 0 && this.buffer[IB - 2] > ZB; IB -= 4)
              if (this.buffer[IB - 1] >= 0) {
                BB = !0;
                break
              } if (BB)
              for (; JB > 0 && this.buffer[JB - 2] > ZB;) this.buffer[JB] = this.buffer[JB - 4], this.buffer[JB + 1] = this.buffer[JB - 3], this.buffer[JB + 2] = this.buffer[JB - 2], this.buffer[JB + 3] = this.buffer[JB - 1], JB -= 4, TB > 4 && (TB -= 4)
          }
          this.buffer[JB] = BB, this.buffer[JB + 1] = IB, this.buffer[JB + 2] = ZB, this.buffer[JB + 3] = TB
        } else this.buffer.push(BB, IB, ZB, TB)
      }
      shift(BB, IB, ZB, TB) {
        if (131072 & BB) this.pushState(65535 & BB, this.pos);
        else if (0 == (262144 & BB)) {
          let JB = BB,
            {
              parser: oB
            } = this.p;
          this.pos = TB;
          let GB = oB.stateFlag(JB, 1);
          !GB && (TB > ZB || IB <= oB.maxNode) && (this.reducePos = TB), this.pushState(JB, GB ? ZB : Math.min(ZB, this.reducePos)), this.shiftContext(IB, ZB), IB <= oB.maxNode && this.buffer.push(IB, ZB, TB, 4)
        } else this.pos = TB, this.shiftContext(IB, ZB), IB <= this.p.parser.maxNode && this.buffer.push(IB, ZB, TB, 4)
      }
      apply(BB, IB, ZB, TB) {
        65536 & BB ? this.reduce(BB) : this.shift(BB, IB, ZB, TB)
      }
      useNode(BB, IB) {
        let ZB = this.p.reused.length - 1;
        (ZB < 0 || this.p.reused[ZB] != BB) && (this.p.reused.push(BB), ZB++);
        let TB = this.pos;
        this.reducePos = this.pos = TB + BB.length, this.pushState(IB, TB), this.buffer.push(ZB, TB, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, BB, this, this.p.stream.reset(this.pos - BB.length)))
      }
      split() {
        let BB = this,
          IB = BB.buffer.length;
        for (; IB > 0 && BB.buffer[IB - 2] > BB.reducePos;) IB -= 4;
        let ZB = BB.buffer.slice(IB),
          TB = BB.bufferBase + IB;
        for (; BB && TB == BB.bufferBase;) BB = BB.parent;
        return new JB(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, ZB, TB, this.curContext, this.lookAhead, BB)
      }
      recoverByDelete(BB, IB) {
        let ZB = BB <= this.p.parser.maxNode;
        ZB && this.storeNode(BB, this.pos, IB, 4), this.storeNode(0, this.pos, IB, ZB ? 8 : 4), this.pos = this.reducePos = IB, this.score -= 190
      }
      canShift(BB) {
        for (let IB = new GB(this);;) {
          let ZB = this.p.parser.stateSlot(IB.state, 4) || this.p.parser.hasAction(IB.state, BB);
          if (0 == ZB) return !1;
          if (0 == (65536 & ZB)) return !0;
          IB.reduce(ZB)
        }
      }
      recoverByInsert(BB) {
        if (this.stack.length >= 300) return [];
        let IB = this.p.parser.nextStates(this.state);
        if (IB.length > 8 || this.stack.length >= 120) {
          let ZB = [];
          for (let TB, JB = 0; JB < IB.length; JB += 2)(TB = IB[JB + 1]) != this.state && this.p.parser.hasAction(TB, BB) && ZB.push(IB[JB], TB);
          if (this.stack.length < 120)
            for (let BB = 0; ZB.length < 8 && BB < IB.length; BB += 2) {
              let TB = IB[BB + 1];
              ZB.some(((BB, IB) => 1 & IB && BB == TB)) || ZB.push(IB[BB], TB)
            }
          IB = ZB
        }
        let ZB = [];
        for (let TB = 0; TB < IB.length && ZB.length < 4; TB += 2) {
          let BB = IB[TB + 1];
          if (BB == this.state) continue;
          let JB = this.split();
          JB.pushState(BB, this.pos), JB.storeNode(0, JB.pos, JB.pos, 4, !0), JB.shiftContext(IB[TB], this.pos), JB.reducePos = this.pos, JB.score -= 200, ZB.push(JB)
        }
        return ZB
      }
      forceReduce() {
        let {
          parser: BB
        } = this.p, IB = BB.stateSlot(this.state, 5);
        if (0 == (65536 & IB)) return !1;
        if (!BB.validAction(this.state, IB)) {
          let ZB = IB >> 19,
            TB = 65535 & IB,
            JB = this.stack.length - 3 * ZB;
          if (JB < 0 || BB.getGoto(this.stack[JB], TB, !1) < 0) {
            let BB = this.findForcedReduction();
            if (null == BB) return !1;
            IB = BB
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(IB), !0
      }
      findForcedReduction() {
        let {
          parser: BB
        } = this.p, IB = [], ZB = (TB, JB) => {
          if (!IB.includes(TB)) return IB.push(TB), BB.allActions(TB, (IB => {
            if (393216 & IB);
            else if (65536 & IB) {
              let ZB = (IB >> 19) - JB;
              if (ZB > 1) {
                let TB = 65535 & IB,
                  JB = this.stack.length - 3 * ZB;
                if (JB >= 0 && BB.getGoto(this.stack[JB], TB, !1) >= 0) return ZB << 19 | 65536 | TB
              }
            } else {
              let BB = ZB(IB, JB + 1);
              if (null != BB) return BB
            }
          }))
        };
        return ZB(this.state, 0)
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
        for (let IB = 0; IB < this.stack.length; IB += 3)
          if (this.stack[IB] != BB.stack[IB]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(BB) {
        return this.p.parser.dialect.flags[BB]
      }
      shiftContext(BB, IB) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, BB, this, this.p.stream.reset(IB)))
      }
      reduceContext(BB, IB) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, BB, this, this.p.stream.reset(IB)))
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
          let IB = new oB(this.curContext.tracker, BB);
          IB.hash != this.curContext.hash && this.emitContext(), this.curContext = IB
        }
      }
      setLookAhead(BB) {
        return !(BB <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = BB, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class oB {
      constructor(BB, IB) {
        this.tracker = BB, this.context = IB, this.hash = BB.strict ? BB.hash(IB) : 0
      }
    }
    class GB {
      constructor(BB) {
        this.start = BB, this.state = BB.state, this.stack = BB.stack, this.base = this.stack.length
      }
      reduce(BB) {
        let IB = 65535 & BB,
          ZB = BB >> 19;
        0 == ZB ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (ZB - 1);
        let TB = this.start.p.parser.getGoto(this.stack[this.base - 3], IB, !0);
        this.state = TB
      }
    }
    class vB {
      constructor(BB, IB, ZB) {
        this.stack = BB, this.pos = IB, this.index = ZB, this.buffer = BB.buffer, 0 == this.index && this.maybeNext()
      }
      static create(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB.bufferBase + BB.buffer.length;
        return new vB(BB, IB, IB - BB.bufferBase)
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
        return new vB(this.stack, this.pos, this.index)
      }
    }

    function kB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof BB) return BB;
      let ZB = null;
      for (let TB = 0, JB = 0; TB < BB.length;) {
        let oB = 0;
        for (;;) {
          let IB = BB.charCodeAt(TB++),
            ZB = !1;
          if (126 == IB) {
            oB = 65535;
            break
          }
          IB >= 92 && IB--, IB >= 34 && IB--;
          let JB = IB - 32;
          if (JB >= 46 && (JB -= 46, ZB = !0), oB += JB, ZB) break;
          oB *= 46
        }
        ZB ? ZB[JB++] = oB : ZB = new IB(oB)
      }
      return ZB
    }
    class cB {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const nB = new cB;
    class hB {
      constructor(BB, IB) {
        this.input = BB, this.vq = IB, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = nB, this.rangeIndex = 0, this.pos = this.chunkPos = IB[0].from, this.range = IB[0], this.end = IB[IB.length - 1].to, this.readNext()
      }
      resolveOffset(BB, IB) {
        let ZB = this.range,
          TB = this.rangeIndex,
          JB = this.pos + BB;
        for (; JB < ZB.from;) {
          if (!TB) return null;
          let BB = this.vq[--TB];
          JB -= ZB.from - BB.to, ZB = BB
        }
        for (; IB < 0 ? JB > ZB.to : JB >= ZB.to;) {
          if (TB == this.vq.length - 1) return null;
          let BB = this.vq[++TB];
          JB += BB.from - ZB.to, ZB = BB
        }
        return JB
      }
      clipPos(BB) {
        if (BB >= this.range.from && BB < this.range.to) return BB;
        for (let IB of this.vq)
          if (IB.to > BB) return Math.max(BB, IB.from);
        return this.end
      }
      peek(BB) {
        let IB, ZB, TB = this.chunkOff + BB;
        if (TB >= 0 && TB < this.chunk.length) IB = this.pos + BB, ZB = this.chunk.charCodeAt(TB);
        else {
          let TB = this.resolveOffset(BB, 1);
          if (null == TB) return -1;
          if (IB = TB, IB >= this.chunk2Pos && IB < this.chunk2Pos + this.chunk2.length) ZB = this.chunk2.charCodeAt(IB - this.chunk2Pos);
          else {
            let BB = this.rangeIndex,
              TB = this.range;
            for (; TB.to <= IB;) TB = this.vq[++BB];
            this.chunk2 = this.input.chunk(this.chunk2Pos = IB), IB + this.chunk2.length > TB.to && (this.chunk2 = this.chunk2.slice(0, TB.to - IB)), ZB = this.chunk2.charCodeAt(0)
          }
        }
        return IB >= this.token.lookAhead && (this.token.lookAhead = IB + 1), ZB
      }
      acceptToken(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZB = IB ? this.resolveOffset(IB, -1) : this.pos;
        if (null == ZB || ZB < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = BB, this.token.end = ZB
      }
      acceptTokenTo(BB, IB) {
        this.token.value = BB, this.token.end = IB
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: BB,
            chunkPos: IB
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = BB, this.chunk2Pos = IB, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let BB = this.input.chunk(this.pos),
            IB = this.pos + BB.length;
          this.chunk = IB > this.range.to ? BB.slice(0, this.range.to - this.pos) : BB, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += BB; this.pos + BB >= this.range.to;) {
          if (this.rangeIndex == this.vq.length - 1) return this.setDone();
          BB -= this.range.to - this.pos, this.range = this.vq[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += BB, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.vq[this.rangeIndex = this.vq.length - 1], this.chunk = "", this.next = -1
      }
      reset(BB, IB) {
        if (IB ? (this.token = IB, IB.start = BB, IB.lookAhead = BB + 1, IB.value = IB.extended = -1) : this.token = nB, this.pos != BB) {
          if (this.pos = BB, BB == this.end) return this.setDone(), this;
          for (; BB < this.range.from;) this.range = this.vq[--this.rangeIndex];
          for (; BB >= this.range.to;) this.range = this.vq[++this.rangeIndex];
          BB >= this.chunkPos && BB < this.chunkPos + this.chunk.length ? this.chunkOff = BB - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(BB, IB) {
        if (BB >= this.chunkPos && IB <= this.chunkPos + this.chunk.length) return this.chunk.slice(BB - this.chunkPos, IB - this.chunkPos);
        if (BB >= this.chunk2Pos && IB <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(BB - this.chunk2Pos, IB - this.chunk2Pos);
        if (BB >= this.range.from && IB <= this.range.to) return this.input.read(BB, IB);
        let ZB = "";
        for (let TB of this.vq) {
          if (TB.from >= IB) break;
          TB.to > BB && (ZB += this.input.read(Math.max(TB.from, BB), Math.min(TB.to, IB)))
        }
        return ZB
      }
    }
    class zB {
      constructor(BB, IB) {
        this.data = BB, this.id = IB
      }
      token(BB, IB) {
        let {
          parser: ZB
        } = IB.p;
        gB(this.data, BB, IB, this.id, ZB.data, ZB.tokenPrecTable)
      }
    }
    zB.prototype.contextual = zB.prototype.fallback = zB.prototype.extend = !1;
    class FB {
      constructor(BB, IB, ZB) {
        this.precTable = IB, this.elseToken = ZB, this.data = "string" == typeof BB ? kB(BB) : BB
      }
      token(BB, IB) {
        let ZB = BB.pos,
          TB = 0;
        for (;;) {
          let ZB = BB.next < 0,
            JB = BB.resolveOffset(1, 1);
          if (gB(this.data, BB, IB, 0, this.data, this.precTable), BB.token.value > -1) break;
          if (null == this.elseToken) return;
          if (ZB || TB++, null == JB) break;
          BB.reset(JB, BB.token)
        }
        TB && (BB.reset(ZB, BB.token), BB.acceptToken(this.elseToken, TB))
      }
    }
    FB.prototype.contextual = zB.prototype.fallback = zB.prototype.extend = !1;
    class NB {
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = BB, this.contextual = !!IB.contextual, this.fallback = !!IB.fallback, this.extend = !!IB.extend
      }
    }

    function gB(BB, IB, ZB, TB, JB, oB) {
      let GB = 0,
        vB = 1 << TB,
        {
          dialect: kB
        } = ZB.p.parser;
      BB: for (; 0 != (vB & BB[GB]);) {
        let ZB = BB[GB + 1];
        for (let hB = GB + 3; hB < ZB; hB += 2)
          if ((BB[hB + 1] & vB) > 0) {
            let ZB = BB[hB];
            if (kB.allows(ZB) && (-1 == IB.token.value || IB.token.value == ZB || yB(ZB, IB.token.value, JB, oB))) {
              IB.acceptToken(ZB);
              break
            }
          } let TB = IB.next,
          cB = 0,
          nB = BB[GB + 2];
        if (!(IB.next < 0 && nB > cB && 65535 == BB[ZB + 3 * nB - 3])) {
          for (; cB < nB;) {
            let JB = cB + nB >> 1,
              oB = ZB + JB + (JB << 1),
              vB = BB[oB],
              kB = BB[oB + 1] || 65536;
            if (TB < vB) nB = JB;
            else {
              if (!(TB >= kB)) {
                GB = BB[oB + 2], IB.advance();
                continue BB
              }
              cB = JB + 1
            }
          }
          break
        }
        GB = BB[ZB + 3 * nB - 1]
      }
    }

    function qB(BB, IB, ZB) {
      for (let TB, JB = IB; 65535 != (TB = BB[JB]); JB++)
        if (TB == ZB) return JB - IB;
      return -1
    }

    function yB(BB, IB, ZB, TB) {
      let JB = qB(ZB, TB, IB);
      return JB < 0 || qB(ZB, TB, BB) < JB
    }
    const UB = "undefined" != typeof process && {
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
    let WB = null;

    function dB(BB, IB, ZB) {
      let JB = BB.cursor(TB.e.IncludeAnonymous);
      for (JB.moveTo(IB);;)
        if (!(ZB < 0 ? JB.childBefore(IB) : JB.childAfter(IB)))
          for (;;) {
            if ((ZB < 0 ? JB.to < IB : JB.from > IB) && !JB.type.isError) return ZB < 0 ? Math.max(0, Math.min(JB.to - 1, IB - 25)) : Math.min(BB.length, Math.max(JB.from + 1, IB + 25));
            if (ZB < 0 ? JB.prevSibling() : JB.nextSibling()) break;
            if (!JB.parent()) return ZB < 0 ? 0 : BB.length
          }
    }
    class CB {
      constructor(BB, IB) {
        this.fragments = BB, this.nodeSet = IB, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let BB = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (BB) {
          for (this.safeFrom = BB.openStart ? dB(BB.tree, BB.from + BB.offset, 1) - BB.offset : BB.from, this.safeTo = BB.openEnd ? dB(BB.tree, BB.to + BB.offset, -1) - BB.offset : BB.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(BB.tree), this.start.push(-BB.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(BB) {
        if (BB < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= BB;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let IB = this.trees.length - 1;
          if (IB < 0) return this.nextFragment(), null;
          let ZB = this.trees[IB],
            JB = this.index[IB];
          if (JB == ZB.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let oB = ZB.children[JB],
            GB = this.start[IB] + ZB.positions[JB];
          if (GB > BB) return this.nextStart = GB, null;
          if (oB instanceof TB.v) {
            if (GB == BB) {
              if (GB < this.safeFrom) return null;
              let BB = GB + oB.length;
              if (BB <= this.safeTo) {
                let IB = oB.prop(TB.i.lookAhead);
                if (!IB || BB + IB < this.fragment.to) return oB
              }
            }
            this.index[IB]++, GB + oB.length >= Math.max(this.safeFrom, BB) && (this.trees.push(oB), this.start.push(GB), this.index.push(0))
          } else this.index[IB]++, this.nextStart = GB + oB.length
        }
      }
    }
    class QB {
      constructor(BB, IB) {
        this.stream = IB, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = BB.tokenizers.map((BB => new cB))
      }
      getActions(BB) {
        let IB = 0,
          ZB = null,
          {
            parser: TB
          } = BB.p,
          {
            tokenizers: JB
          } = TB,
          oB = TB.stateSlot(BB.state, 3),
          GB = BB.curContext ? BB.curContext.hash : 0,
          vB = 0;
        for (let kB = 0; kB < JB.length; kB++) {
          if (0 == (1 << kB & oB)) continue;
          let TB = JB[kB],
            cB = this.tokens[kB];
          if ((!ZB || TB.fallback) && ((TB.contextual || cB.start != BB.pos || cB.mask != oB || cB.context != GB) && (this.updateCachedToken(cB, TB, BB), cB.mask = oB, cB.context = GB), cB.lookAhead > cB.end + 25 && (vB = Math.max(cB.lookAhead, vB)), 0 != cB.value)) {
            let JB = IB;
            if (cB.extended > -1 && (IB = this.addActions(BB, cB.extended, cB.end, IB)), IB = this.addActions(BB, cB.value, cB.end, IB), !TB.extend && (ZB = cB, IB > JB)) break
          }
        }
        for (; this.actions.length > IB;) this.actions.pop();
        return vB && BB.setLookAhead(vB), ZB || BB.pos != this.stream.end || (ZB = new cB, ZB.value = BB.p.parser.eofTerm, ZB.start = ZB.end = BB.pos, IB = this.addActions(BB, ZB.value, ZB.end, IB)), this.mainToken = ZB, this.actions
      }
      getMainToken(BB) {
        if (this.mainToken) return this.mainToken;
        let IB = new cB,
          {
            pos: ZB,
            p: TB
          } = BB;
        return IB.start = ZB, IB.end = Math.min(ZB + 1, TB.stream.end), IB.value = ZB == TB.stream.end ? TB.parser.eofTerm : 0, IB
      }
      updateCachedToken(BB, IB, ZB) {
        let TB = this.stream.clipPos(ZB.pos);
        if (IB.token(this.stream.reset(TB, BB), ZB), BB.value > -1) {
          let {
            parser: IB
          } = ZB.p;
          for (let TB = 0; TB < IB.specialized.length; TB++)
            if (IB.specialized[TB] == BB.value) {
              let JB = IB.specializers[TB](this.stream.read(BB.start, BB.end), ZB);
              if (JB >= 0 && ZB.p.parser.dialect.allows(JB >> 1)) {
                0 == (1 & JB) ? BB.value = JB >> 1 : BB.extended = JB >> 1;
                break
              }
            }
        } else BB.value = 0, BB.end = this.stream.clipPos(TB + 1)
      }
      putAction(BB, IB, ZB, TB) {
        for (let JB = 0; JB < TB; JB += 3)
          if (this.actions[JB] == BB) return TB;
        return this.actions[TB++] = BB, this.actions[TB++] = IB, this.actions[TB++] = ZB, TB
      }
      addActions(BB, IB, ZB, TB) {
        let {
          state: JB
        } = BB, {
          parser: oB
        } = BB.p, {
          data: GB
        } = oB;
        for (let vB = 0; vB < 2; vB++)
          for (let BB = oB.stateSlot(JB, vB ? 2 : 1);; BB += 3) {
            if (65535 == GB[BB]) {
              if (1 != GB[BB + 1]) {
                0 == TB && 2 == GB[BB + 1] && (TB = this.putAction(pB(GB, BB + 2), IB, ZB, TB));
                break
              }
              BB = pB(GB, BB + 2)
            }
            GB[BB] == IB && (TB = this.putAction(pB(GB, BB + 1), IB, ZB, TB))
          }
        return TB
      }
    }
    class sB {
      constructor(BB, IB, ZB, TB) {
        this.parser = BB, this.input = IB, this.vq = TB, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new hB(IB, TB), this.tokens = new QB(BB, this.stream), this.topTerm = BB.top[1];
        let {
          from: oB
        } = TB[0];
        this.stacks = [JB.start(this, BB.top[0], oB)], this.fragments = ZB.length && this.stream.end - oB > 4 * BB.bufferLength ? new CB(ZB, BB.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let BB, IB, ZB = this.stacks,
          TB = this.minStackPos,
          JB = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == ZB.length) {
          let [BB] = ZB;
          for (; BB.forceReduce() && BB.stack.length && BB.stack[BB.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let oB = 0; oB < ZB.length; oB++) {
          let GB = ZB[oB];
          for (;;) {
            if (this.tokens.mainToken = null, GB.pos > TB) JB.push(GB);
            else {
              if (this.advanceStack(GB, JB, ZB)) continue;
              {
                BB || (BB = [], IB = []), BB.push(GB);
                let ZB = this.tokens.getMainToken(GB);
                IB.push(ZB.value, ZB.end)
              }
            }
            break
          }
        }
        if (!JB.length) {
          let IB = BB && function(BB) {
            let IB = null;
            for (let ZB of BB) {
              let BB = ZB.p.stoppedAt;
              (ZB.pos == ZB.p.stream.end || null != BB && ZB.pos > BB) && ZB.p.parser.stateFlag(ZB.state, 2) && (!IB || IB.score < ZB.score) && (IB = ZB)
            }
            return IB
          }(BB);
          if (IB) return UB && console.log("Finish with " + this.stackID(IB)), this.stackToTree(IB);
          if (this.parser.strict) throw UB && BB && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + TB);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && BB) {
          let ZB = null != this.stoppedAt && BB[0].pos > this.stoppedAt ? BB[0] : this.runRecovery(BB, IB, JB);
          if (ZB) return UB && console.log("Force-finish " + this.stackID(ZB)), this.stackToTree(ZB.forceAll())
        }
        if (this.recovering) {
          let BB = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (JB.length > BB)
            for (JB.sort(((BB, IB) => IB.score - BB.score)); JB.length > BB;) JB.pop();
          JB.some((BB => BB.reducePos > TB)) && this.recovering--
        } else if (JB.length > 1) {
          BB: for (let BB = 0; BB < JB.length - 1; BB++) {
            let IB = JB[BB];
            for (let ZB = BB + 1; ZB < JB.length; ZB++) {
              let TB = JB[ZB];
              if (IB.sameState(TB) || IB.buffer.length > 500 && TB.buffer.length > 500) {
                if (!((IB.score - TB.score || IB.buffer.length - TB.buffer.length) > 0)) {
                  JB.splice(BB--, 1);
                  continue BB
                }
                JB.splice(ZB--, 1)
              }
            }
          }
          JB.length > 12 && (JB.sort(((BB, IB) => IB.score - BB.score)), JB.splice(12, JB.length - 12))
        }
        this.minStackPos = JB[0].pos;
        for (let oB = 1; oB < JB.length; oB++) JB[oB].pos < this.minStackPos && (this.minStackPos = JB[oB].pos);
        return null
      }
      stopAt(BB) {
        if (null != this.stoppedAt && this.stoppedAt < BB) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = BB
      }
      advanceStack(BB, IB, ZB) {
        let JB = BB.pos,
          {
            parser: oB
          } = this,
          GB = UB ? this.stackID(BB) + " -> " : "";
        if (null != this.stoppedAt && JB > this.stoppedAt) return BB.forceReduce() ? BB : null;
        if (this.fragments) {
          let IB = BB.curContext && BB.curContext.tracker.strict,
            ZB = IB ? BB.curContext.hash : 0;
          for (let vB = this.fragments.nodeAt(JB); vB;) {
            let JB = this.parser.nodeSet.types[vB.type.id] == vB.type ? oB.getGoto(BB.state, vB.type.id) : -1;
            if (JB > -1 && vB.length && (!IB || (vB.prop(TB.i.contextHash) || 0) == ZB)) return BB.useNode(vB, JB), UB && console.log(GB + this.stackID(BB) + ` (via reuse of ${oB.getName(vB.type.id)})`), !0;
            if (!(vB instanceof TB.v) || 0 == vB.children.length || vB.positions[0] > 0) break;
            let kB = vB.children[0];
            if (!(kB instanceof TB.v && 0 == vB.positions[0])) break;
            vB = kB
          }
        }
        let vB = oB.stateSlot(BB.state, 4);
        if (vB > 0) return BB.reduce(vB), UB && console.log(GB + this.stackID(BB) + ` (via always-reduce ${oB.getName(65535&vB)})`), !0;
        if (BB.stack.length >= 8400)
          for (; BB.stack.length > 6e3 && BB.forceReduce(););
        let kB = this.tokens.getActions(BB);
        for (let TB = 0; TB < kB.length;) {
          let vB = kB[TB++],
            cB = kB[TB++],
            nB = kB[TB++],
            hB = TB == kB.length || !ZB,
            zB = hB ? BB : BB.split(),
            FB = this.tokens.mainToken;
          if (zB.apply(vB, cB, FB ? FB.start : zB.pos, nB), UB && console.log(GB + this.stackID(zB) + ` (via ${0==(65536&vB)?"shift":`reduce of ${oB.getName(65535&vB)}`} for ${oB.getName(cB)} @ ${JB}${zB==BB?"":", split"})`), hB) return !0;
          zB.pos > JB ? IB.push(zB) : ZB.push(zB)
        }
        return !1
      }
      advanceFully(BB, IB) {
        let ZB = BB.pos;
        for (;;) {
          if (!this.advanceStack(BB, null, null)) return !1;
          if (BB.pos > ZB) return wB(BB, IB), !0
        }
      }
      runRecovery(BB, IB, ZB) {
        let TB = null,
          JB = !1;
        for (let oB = 0; oB < BB.length; oB++) {
          let GB = BB[oB],
            vB = IB[oB << 1],
            kB = IB[1 + (oB << 1)],
            cB = UB ? this.stackID(GB) + " -> " : "";
          if (GB.deadEnd) {
            if (JB) continue;
            if (JB = !0, GB.restart(), UB && console.log(cB + this.stackID(GB) + " (restarted)"), this.advanceFully(GB, ZB)) continue
          }
          let nB = GB.split(),
            hB = cB;
          for (let BB = 0; BB < 10 && nB.forceReduce(); BB++) {
            if (UB && console.log(hB + this.stackID(nB) + " (via force-reduce)"), this.advanceFully(nB, ZB)) break;
            UB && (hB = this.stackID(nB) + " -> ")
          }
          for (let BB of GB.recoverByInsert(vB)) UB && console.log(cB + this.stackID(BB) + " (via recover-insert)"), this.advanceFully(BB, ZB);
          this.stream.end > GB.pos ? (kB == GB.pos && (kB++, vB = 0), GB.recoverByDelete(vB, kB), UB && console.log(cB + this.stackID(GB) + ` (via recover-delete ${this.parser.getName(vB)})`), wB(GB, ZB)) : (!TB || TB.score < nB.score) && (TB = nB)
        }
        return TB
      }
      stackToTree(BB) {
        return BB.close(), TB.v.build({
          buffer: vB.create(BB),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.vq[0].from,
          length: BB.pos - this.vq[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(BB) {
        let IB = (WB || (WB = new WeakMap)).get(BB);
        return IB || WB.set(BB, IB = String.fromCodePoint(this.nextStackID++)), IB + BB
      }
    }

    function wB(BB, IB) {
      for (let ZB = 0; ZB < IB.length; ZB++) {
        let TB = IB[ZB];
        if (TB.pos == BB.pos && TB.sameState(BB)) return void(IB[ZB].score < BB.score && (IB[ZB] = BB))
      }
      IB.push(BB)
    }
    class OB {
      constructor(BB, IB, ZB) {
        this.source = BB, this.flags = IB, this.disabled = ZB
      }
      allows(BB) {
        return !this.disabled || 0 == this.disabled[BB]
      }
    }
    const YB = BB => BB;
    class iB extends TB.t {
      constructor(BB) {
        if (super(), this.wrappers = [], 14 != BB.version) throw new RangeError(`Parser version (${BB.version}) doesn't match runtime version (14)`);
        let IB = BB.nodeNames.split(" ");
        this.minRepeatTerm = IB.length;
        for (let TB = 0; TB < BB.repeatNodeCount; TB++) IB.push("");
        let ZB = Object.keys(BB.topRules).map((IB => BB.topRules[IB][1])),
          JB = [];
        for (let TB = 0; TB < IB.length; TB++) JB.push([]);

        function oB(BB, IB, ZB) {
          JB[BB].push([IB, IB.deserialize(String(ZB))])
        }
        if (BB.nodeProps)
          for (let vB of BB.nodeProps) {
            let BB = vB[0];
            "string" == typeof BB && (BB = TB.i[BB]);
            for (let IB = 1; IB < vB.length;) {
              let ZB = vB[IB++];
              if (ZB >= 0) oB(ZB, BB, vB[IB++]);
              else {
                let TB = vB[IB + -ZB];
                for (let JB = -ZB; JB > 0; JB--) oB(vB[IB++], BB, TB);
                IB++
              }
            }
          }
        this.nodeSet = new TB.j(IB.map(((IB, oB) => TB.n.define({
          name: oB >= this.minRepeatTerm ? void 0 : IB,
          id: oB,
          props: JB[oB],
          top: ZB.indexOf(oB) > -1,
          error: 0 == oB,
          skipped: BB.skippedNodes && BB.skippedNodes.indexOf(oB) > -1
        })))), BB.propSources && (this.nodeSet = this.nodeSet.extend(...BB.propSources)), this.strict = !1, this.bufferLength = TB.b;
        let GB = kB(BB.tokenData);
        this.context = BB.context, this.specializerSpecs = BB.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let TB = 0; TB < this.specializerSpecs.length; TB++) this.specialized[TB] = this.specializerSpecs[TB].term;
        this.specializers = this.specializerSpecs.map(aB), this.states = kB(BB.states, Uint32Array), this.data = kB(BB.stateData), this.goto = kB(BB.goto), this.maxTerm = BB.maxTerm, this.tokenizers = BB.tokenizers.map((BB => "number" == typeof BB ? new zB(GB, BB) : BB)), this.topRules = BB.topRules, this.dialects = BB.dialects || {}, this.dynamicPrecedences = BB.dynamicPrecedences || null, this.tokenPrecTable = BB.tokenPrec, this.termNames = BB.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(BB, IB, ZB) {
        let TB = new sB(this, BB, IB, ZB);
        for (let JB of this.wrappers) TB = JB(TB, BB, IB, ZB);
        return TB
      }
      getGoto(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          TB = this.goto;
        if (IB >= TB[0]) return -1;
        for (let JB = TB[IB + 1];;) {
          let IB = TB[JB++],
            oB = 1 & IB,
            GB = TB[JB++];
          if (oB && ZB) return GB;
          for (let ZB = JB + (IB >> 1); JB < ZB; JB++)
            if (TB[JB] == BB) return GB;
          if (oB) return -1
        }
      }
      hasAction(BB, IB) {
        let ZB = this.data;
        for (let TB = 0; TB < 2; TB++)
          for (let JB, oB = this.stateSlot(BB, TB ? 2 : 1);; oB += 3) {
            if (65535 == (JB = ZB[oB])) {
              if (1 != ZB[oB + 1]) {
                if (2 == ZB[oB + 1]) return pB(ZB, oB + 2);
                break
              }
              JB = ZB[oB = pB(ZB, oB + 2)]
            }
            if (JB == IB || 0 == JB) return pB(ZB, oB + 1)
          }
        return 0
      }
      stateSlot(BB, IB) {
        return this.states[6 * BB + IB]
      }
      stateFlag(BB, IB) {
        return (this.stateSlot(BB, 0) & IB) > 0
      }
      validAction(BB, IB) {
        return !!this.allActions(BB, (BB => BB == IB || null))
      }
      allActions(BB, IB) {
        let ZB = this.stateSlot(BB, 4),
          TB = ZB ? IB(ZB) : void 0;
        for (let JB = this.stateSlot(BB, 1); null == TB; JB += 3) {
          if (65535 == this.data[JB]) {
            if (1 != this.data[JB + 1]) break;
            JB = pB(this.data, JB + 2)
          }
          TB = IB(pB(this.data, JB + 1))
        }
        return TB
      }
      nextStates(BB) {
        let IB = [];
        for (let ZB = this.stateSlot(BB, 1);; ZB += 3) {
          if (65535 == this.data[ZB]) {
            if (1 != this.data[ZB + 1]) break;
            ZB = pB(this.data, ZB + 2)
          }
          if (0 == (1 & this.data[ZB + 2])) {
            let BB = this.data[ZB + 1];
            IB.some(((IB, ZB) => 1 & ZB && IB == BB)) || IB.push(this.data[ZB], BB)
          }
        }
        return IB
      }
      configure(BB) {
        let IB = Object.assign(Object.create(iB.prototype), this);
        if (BB.props && (IB.nodeSet = this.nodeSet.extend(...BB.props)), BB.top) {
          let ZB = this.topRules[BB.top];
          if (!ZB) throw new RangeError(`Invalid top rule name ${BB.top}`);
          IB.top = ZB
        }
        return BB.tokenizers && (IB.tokenizers = this.tokenizers.map((IB => {
          let ZB = BB.tokenizers.find((BB => BB.from == IB));
          return ZB ? ZB.to : IB
        }))), BB.specializers && (IB.specializers = this.specializers.slice(), IB.specializerSpecs = this.specializerSpecs.map(((ZB, TB) => {
          let JB = BB.specializers.find((BB => BB.from == ZB.external));
          if (!JB) return ZB;
          let oB = Object.assign(Object.assign({}, ZB), {
            external: JB.to
          });
          return IB.specializers[TB] = aB(oB), oB
        }))), BB.contextTracker && (IB.context = BB.contextTracker), BB.dialect && (IB.dialect = this.parseDialect(BB.dialect)), null != BB.strict && (IB.strict = BB.strict), BB.wrap && (IB.wrappers = IB.wrappers.concat(BB.wrap)), null != BB.bufferLength && (IB.bufferLength = BB.bufferLength), IB
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
        let IB = this.dynamicPrecedences;
        return null == IB ? 0 : IB[BB] || 0
      }
      parseDialect(BB) {
        let IB = Object.keys(this.dialects),
          ZB = IB.map((() => !1));
        if (BB)
          for (let JB of BB.split(" ")) {
            let BB = IB.indexOf(JB);
            BB >= 0 && (ZB[BB] = !0)
          }
        let TB = null;
        for (let JB = 0; JB < IB.length; JB++)
          if (!ZB[JB])
            for (let BB, ZB = this.dialects[IB[JB]]; 65535 != (BB = this.data[ZB++]);)(TB || (TB = new Uint8Array(this.maxTerm + 1)))[BB] = 1;
        return new OB(BB, ZB, TB)
      }
      static deserialize(BB) {
        return new iB(BB)
      }
    }

    function pB(BB, IB) {
      return BB[IB] | BB[IB + 1] << 16
    }

    function aB(BB) {
      if (BB.external) {
        let IB = BB.extend ? 1 : 0;
        return (ZB, TB) => BB.external(ZB, TB) << 1 | IB
      }
      return BB.get
    }
    var HB = ZB(41379);
    const MB = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      jB = new class {
        constructor(BB) {
          this.start = BB.start, this.shift = BB.shift || YB, this.reduce = BB.reduce || YB, this.reuse = BB.reuse || YB, this.hash = BB.hash || (() => 0), this.strict = !1 !== BB.strict
        }
      }({
        start: !1,
        shift: (BB, IB) => 5 == IB || 6 == IB || 320 == IB ? BB : 321 == IB,
        strict: !1
      }),
      PB = new NB(((BB, IB) => {
        let {
          next: ZB
        } = BB;
        (125 == ZB || -1 == ZB || IB.context) && BB.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      RB = new NB(((BB, IB) => {
        let ZB, {
          next: TB
        } = BB;
        MB.indexOf(TB) > -1 || (47 != TB || 47 != (ZB = BB.peek(1)) && 42 != ZB) && (125 == TB || 59 == TB || -1 == TB || IB.context || BB.acceptToken(316))
      }), {
        contextual: !0
      }),
      rB = new NB(((BB, IB) => {
        91 != BB.next || IB.context || BB.acceptToken(317)
      }), {
        contextual: !0
      }),
      mB = new NB(((BB, IB) => {
        let {
          next: ZB
        } = BB;
        if (43 == ZB || 45 == ZB) {
          if (BB.advance(), ZB == BB.next) {
            BB.advance();
            let ZB = !IB.context && IB.canShift(1);
            BB.acceptToken(ZB ? 1 : 2)
          }
        } else 63 == ZB && 46 == BB.peek(1) && (BB.advance(), BB.advance(), (BB.next < 48 || BB.next > 57) && BB.acceptToken(3))
      }), {
        contextual: !0
      });

    function XB(BB, IB) {
      return BB >= 65 && BB <= 90 || BB >= 97 && BB <= 122 || 95 == BB || BB >= 192 || !IB && BB >= 48 && BB <= 57
    }
    const LB = new NB(((BB, IB) => {
        if (60 != BB.next || !IB.dialectEnabled(0)) return;
        if (BB.advance(), 47 == BB.next) return;
        let ZB = 0;
        for (; MB.indexOf(BB.next) > -1;) BB.advance(), ZB++;
        if (XB(BB.next, !0)) {
          for (BB.advance(), ZB++; XB(BB.next, !1);) BB.advance(), ZB++;
          for (; MB.indexOf(BB.next) > -1;) BB.advance(), ZB++;
          if (44 == BB.next) return;
          for (let IB = 0;; IB++) {
            if (7 == IB) {
              if (!XB(BB.next, !0)) return;
              break
            }
            if (BB.next != "extends".charCodeAt(IB)) break;
            BB.advance(), ZB++
          }
        }
        BB.acceptToken(4, -ZB)
      })),
      eB = (0, HB.g)({
        "get set async static": HB.l.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": HB.l.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": HB.l.operatorKeyword,
        "let var const using function class extends": HB.l.definitionKeyword,
        "import export from": HB.l.moduleKeyword,
        "with debugger new": HB.l.keyword,
        TemplateString: HB.l.special(HB.l.string),
        super: HB.l.atom,
        BooleanLiteral: HB.l.bool,
        this: HB.l.self,
        null: HB.l.null,
        Star: HB.l.modifier,
        VariableName: HB.l.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": HB.l.function(HB.l.variableName),
        VariableDefinition: HB.l.definition(HB.l.variableName),
        Label: HB.l.labelName,
        PropertyName: HB.l.propertyName,
        PrivatePropertyName: HB.l.special(HB.l.propertyName),
        "CallExpression/MemberExpression/PropertyName": HB.l.function(HB.l.propertyName),
        "FunctionDeclaration/VariableDefinition": HB.l.function(HB.l.definition(HB.l.variableName)),
        "ClassDeclaration/VariableDefinition": HB.l.definition(HB.l.className),
        "NewExpression/VariableName": HB.l.className,
        PropertyDefinition: HB.l.definition(HB.l.propertyName),
        PrivatePropertyDefinition: HB.l.definition(HB.l.special(HB.l.propertyName)),
        UpdateOp: HB.l.updateOperator,
        "LineComment Hashbang": HB.l.lineComment,
        BlockComment: HB.l.blockComment,
        Number: HB.l.number,
        String: HB.l.string,
        Escape: HB.l.escape,
        ArithOp: HB.l.arithmeticOperator,
        LogicOp: HB.l.logicOperator,
        BitOp: HB.l.bitwiseOperator,
        CompareOp: HB.l.compareOperator,
        RegExp: HB.l.regexp,
        Equals: HB.l.definitionOperator,
        Arrow: HB.l.function(HB.l.punctuation),
        ": Spread": HB.l.punctuation,
        "( )": HB.l.paren,
        "[ ]": HB.l.squareBracket,
        "{ }": HB.l.brace,
        "InterpolationStart InterpolationEnd": HB.l.special(HB.l.brace),
        ".": HB.l.derefOperator,
        ", ;": HB.l.separator,
        "@": HB.l.meta,
        TypeName: HB.l.typeName,
        TypeDefinition: HB.l.definition(HB.l.typeName),
        "type enum interface implements namespace module declare": HB.l.definitionKeyword,
        "abstract global Privacy readonly override": HB.l.modifier,
        "is keyof unique infer asserts": HB.l.operatorKeyword,
        JSXAttributeValue: HB.l.attributeValue,
        JSXText: HB.l.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": HB.l.angleBracket,
        "JSXIdentifier JSXNameSpacedName": HB.l.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": HB.l.attributeName,
        "JSXBuiltin/JSXIdentifier": HB.l.standard(HB.l.tagName)
      }),
      uB = {
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
      fB = {
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
      AB = iB.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: jB,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [eB],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [RB, rB, mB, LB, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, PB, new FB("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new FB("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: BB => uB[BB] || -1
        }, {
          term: 343,
          get: BB => fB[BB] || -1
        }, {
          term: 95,
          get: BB => lB[BB] || -1
        }],
        tokenPrec: 15201
      });
    var tB = ZB(41371),
      bB = ZB(41342),
      xB = ZB(41349),
      EB = ZB(41339);
    const DB = [(0, EB.t)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, EB.t)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, EB.t)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, EB.t)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, EB.t)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, EB.t)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, EB.t)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, EB.t)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, EB.t)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, EB.t)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, EB.t)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      KB = DB.concat([(0, EB.t)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, EB.t)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, EB.t)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      VB = new TB.r,
      SB = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function BI(BB) {
      return (IB, ZB) => {
        let TB = IB.node.getChild("VariableDefinition");
        return TB && ZB(TB, BB), !0
      }
    }
    const II = ["FunctionDeclaration"],
      ZI = {
        FunctionDeclaration: BI("function"),
        ClassDeclaration: BI("class"),
        ClassExpression: () => !0,
        EnumDeclaration: BI("constant"),
        TypeAliasDeclaration: BI("type"),
        NamespaceDeclaration: BI("namespace"),
        VariableDefinition(BB, IB) {
          BB.matchContext(II) || IB(BB, "variable")
        },
        TypeDefinition(BB, IB) {
          IB(BB, "type")
        },
        __proto__: null
      };

    function TI(BB, IB) {
      let ZB = VB.get(IB);
      if (ZB) return ZB;
      let JB = [],
        oB = !0;

      function GB(IB, ZB) {
        let TB = BB.sliceString(IB.from, IB.to);
        JB.push({
          label: TB,
          type: ZB
        })
      }
      return IB.cursor(TB.e.IncludeAnonymous).iterate((IB => {
        if (oB) oB = !1;
        else if (IB.name) {
          let BB = ZI[IB.name];
          if (BB && BB(IB, GB) || SB.has(IB.name)) return !1
        } else if (IB.to - IB.from > 8192) {
          for (let ZB of TI(BB, IB.node)) JB.push(ZB);
          return !1
        }
      })), VB.set(IB, JB), JB
    }
    const JI = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      oI = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function GI(BB) {
      let IB = (0, tB.mb)(BB.state).resolveInner(BB.pos, -1);
      if (oI.indexOf(IB.name) > -1) return null;
      let ZB = "VariableName" == IB.name || IB.to - IB.from < 20 && JI.test(BB.state.sliceDoc(IB.from, IB.to));
      if (!ZB && !BB.explicit) return null;
      let TB = [];
      for (let JB = IB; JB; JB = JB.parent) SB.has(JB.name) && (TB = TB.concat(TI(BB.state.doc, JB)));
      return {
        options: TB,
        from: ZB ? IB.from : BB.pos,
        validFor: JI
      }
    }
    const vI = tB.k.define({
        name: "javascript",
        parser: AB.configure({
          props: [tB.S.add({
            IfStatement: (0, tB.q)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, tB.q)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: tB.y,
            SwitchBody: BB => {
              let IB = BB.textAfter,
                ZB = /^\s*\}/.test(IB),
                TB = /^\s*(case|default)\b/.test(IB);
              return BB.baseIndent + (ZB ? 0 : TB ? 1 : 2) * BB.unit
            },
            Block: (0, tB.x)({
              closing: "}"
            }),
            ArrowFunction: BB => BB.baseIndent + BB.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, tB.q)({
              except: /^\s*{/
            }),
            JSXElement(BB) {
              let IB = /^\s*<\//.test(BB.textAfter);
              return BB.lineIndent(BB.node.from) + (IB ? 0 : BB.unit)
            },
            JSXEscape(BB) {
              let IB = /\s*\}/.test(BB.textAfter);
              return BB.lineIndent(BB.node.from) + (IB ? 0 : BB.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": BB => BB.column(BB.node.from) + BB.unit
          }), tB.J.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": tB.E,
            BlockComment: BB => ({
              from: BB.from + 2,
              to: BB.to - 2
            }),
            JSXElement(BB) {
              let IB = BB.firstChild;
              if (!IB || "JSXSelfClosingTag" == IB.name) return null;
              let ZB = BB.lastChild;
              return {
                from: IB.to,
                to: ZB.type.isError ? BB.to : ZB.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(BB) {
              var IB;
              let ZB = null === (IB = BB.firstChild) || void 0 === IB ? void 0 : IB.nextSibling,
                TB = BB.lastChild;
              return !ZB || ZB.type.isError ? null : {
                from: ZB.to,
                to: TB.type.isError ? BB.to : TB.from
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
      kI = {
        test: BB => /^JSX/.test(BB.name),
        facet: (0, tB.v)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      cI = vI.configure({
        dialect: "ts"
      }, "typescript"),
      nI = vI.configure({
        dialect: "jsx",
        props: [tB.cb.add((BB => BB.isTop ? [kI] : void 0))]
      }),
      hI = vI.configure({
        dialect: "jsx ts",
        props: [tB.cb.add((BB => BB.isTop ? [kI] : void 0))]
      }, "typescript");
    let zI = BB => ({
      label: BB,
      type: "keyword"
    });
    const FI = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(zI),
      NI = FI.concat(["declare", "implements", "private", "protected", "public"].map(zI));

    function gI() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        IB = BB.jsx ? BB.typescript ? hI : nI : BB.typescript ? cI : vI,
        ZB = BB.typescript ? KB.concat(NI) : DB.concat(FI);
      return new tB.m(IB, [vI.data.of({
        autocomplete: (0, EB.q)(oI, (0, EB.l)(ZB))
      }), vI.data.of({
        autocomplete: GI
      }), BB.jsx ? UI : []])
    }

    function qI(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BB.length;
      for (let TB = null === IB || void 0 === IB ? void 0 : IB.firstChild; TB; TB = TB.nextSibling)
        if ("JSXIdentifier" == TB.name || "JSXBuiltin" == TB.name || "JSXNamespacedName" == TB.name || "JSXMemberExpression" == TB.name) return BB.sliceString(TB.from, Math.min(TB.to, ZB));
      return ""
    }
    const yI = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      UI = xB.i.inputHandler.of(((BB, IB, ZB, TB, JB) => {
        if ((yI ? BB.composing : BB.compositionStarted) || BB.state.readOnly || IB != ZB || ">" != TB && "/" != TB || !vI.isActiveAt(BB.state, IB, -1)) return !1;
        let oB = JB(),
          {
            state: GB
          } = oB,
          vB = GB.changeByRange((BB => {
            var IB;
            let ZB, {
                head: JB
              } = BB,
              oB = (0, tB.mb)(GB).resolveInner(JB - 1, -1);
            if ("JSXStartTag" == oB.name && (oB = oB.parent), GB.doc.sliceString(JB - 1, JB) != TB || "JSXAttributeValue" == oB.name && oB.to > JB);
            else {
              if (">" == TB && "JSXFragmentTag" == oB.name) return {
                range: BB,
                changes: {
                  from: JB,
                  insert: "</>"
                }
              };
              if ("/" == TB && "JSXStartCloseTag" == oB.name) {
                let BB = oB.parent,
                  TB = BB.parent;
                if (TB && BB.from == JB - 2 && ((ZB = qI(GB.doc, TB.firstChild, JB)) || "JSXFragmentTag" == (null === (IB = TB.firstChild) || void 0 === IB ? void 0 : IB.name))) {
                  let BB = `${ZB}>`;
                  return {
                    range: bB.n.cursor(JB + BB.length, -1),
                    changes: {
                      from: JB,
                      insert: BB
                    }
                  }
                }
              } else if (">" == TB) {
                let IB = function(BB) {
                  for (;;) {
                    if ("JSXOpenTag" == BB.name || "JSXSelfClosingTag" == BB.name || "JSXFragmentTag" == BB.name) return BB;
                    if ("JSXEscape" == BB.name || !BB.parent) return null;
                    BB = BB.parent
                  }
                }(oB);
                if (IB && "JSXOpenTag" == IB.name && !/^\/?>|^<\//.test(GB.doc.sliceString(JB, JB + 2)) && (ZB = qI(GB.doc, IB, JB))) return {
                  range: BB,
                  changes: {
                    from: JB,
                    insert: `</${ZB}>`
                  }
                }
              }
            }
            return {
              range: BB
            }
          }));
        return !vB.changes.empty && (BB.dispatch([oB, GB.update(vB, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  41371: (BB, IB, ZB) => {
    ZB.d(IB, {
      B: () => UI,
      E: () => DB,
      I: () => cI,
      J: () => EB,
      N: () => yB,
      O: () => HB,
      R: () => jB,
      S: () => RB,
      U: () => bB,
      V: () => MB,
      Y: () => aB,
      _: () => fI,
      c: () => dI,
      cb: () => hB,
      g: () => PB,
      gb: () => wI,
      ib: () => qB,
      k: () => NB,
      m: () => iB,
      mb: () => gB,
      n: () => XI,
      q: () => AB,
      s: () => iI,
      v: () => nB,
      x: () => uB,
      y: () => lB
    });
    var TB, JB = ZB(41374),
      oB = ZB(41342),
      GB = ZB(41349),
      vB = ZB(41379),
      kB = ZB(41358);
    const cB = new JB.i;

    function nB(BB) {
      return oB.t.define({
        combine: BB ? IB => IB.concat(BB) : void 0
      })
    }
    const hB = new JB.i;
    class zB {
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = BB, this.name = TB, oB.q.prototype.hasOwnProperty("tree") || Object.defineProperty(oB.q.prototype, "tree", {
          get() {
            return gB(this)
          }
        }), this.parser = IB, this.extension = [YB.of(this), oB.q.languageData.of(((BB, IB, ZB) => {
          let TB = FB(BB, IB, ZB),
            JB = TB.type.prop(cB);
          if (!JB) return [];
          let oB = BB.facet(JB),
            GB = TB.type.prop(hB);
          if (GB) {
            let JB = TB.resolve(IB - TB.from, ZB);
            for (let IB of GB)
              if (IB.test(JB, BB)) {
                let ZB = BB.facet(IB.facet);
                return "replace" == IB.type ? ZB : ZB.concat(oB)
              }
          }
          return oB
        }))].concat(ZB)
      }
      isActiveAt(BB, IB) {
        return FB(BB, IB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(cB) == this.data
      }
      findRegions(BB) {
        let IB = BB.facet(YB);
        if ((null === IB || void 0 === IB ? void 0 : IB.data) == this.data) return [{
          from: 0,
          to: BB.doc.length
        }];
        if (!IB || !IB.allowsNesting) return [];
        let ZB = [],
          TB = (BB, IB) => {
            if (BB.prop(cB) == this.data) return void ZB.push({
              from: IB,
              to: IB + BB.length
            });
            let oB = BB.prop(JB.i.mounted);
            if (oB) {
              if (oB.tree.prop(cB) == this.data) {
                if (oB.overlay)
                  for (let BB of oB.overlay) ZB.push({
                    from: BB.from + IB,
                    to: BB.to + IB
                  });
                else ZB.push({
                  from: IB,
                  to: IB + BB.length
                });
                return
              }
              if (oB.overlay) {
                let BB = ZB.length;
                if (TB(oB.tree, oB.overlay[0].from + IB), ZB.length > BB) return
              }
            }
            for (let ZB = 0; ZB < BB.children.length; ZB++) {
              let oB = BB.children[ZB];
              oB instanceof JB.v && TB(oB, BB.positions[ZB] + IB)
            }
          };
        return TB(gB(BB), 0), ZB
      }
      get allowsNesting() {
        return !0
      }
    }

    function FB(BB, IB, ZB) {
      let TB = BB.facet(YB),
        oB = gB(BB).topNode;
      if (!TB || TB.allowsNesting)
        for (let GB = oB; GB; GB = GB.enter(IB, ZB, JB.e.ExcludeBuffers | JB.e.EnterBracketed)) GB.type.isTop && (oB = GB);
      return oB
    }
    zB.setState = oB.K.define();
    class NB extends zB {
      constructor(BB, IB, ZB) {
        super(BB, IB, [], ZB), this.parser = IB
      }
      static define(BB) {
        let IB = nB(BB.languageData);
        return new NB(IB, BB.parser.configure({
          props: [cB.add((BB => BB.isTop ? IB : void 0))]
        }), BB.name)
      }
      configure(BB, IB) {
        return new NB(this.data, this.parser.configure(BB), IB || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function gB(BB) {
      let IB = BB.field(zB.state, !1);
      return IB ? IB.tree : JB.v.empty
    }

    function qB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB.doc.length;
      var ZB;
      return (null === (ZB = BB.field(zB.state, !1)) || void 0 === ZB ? void 0 : ZB.context.isDone(IB)) || !1
    }

    function yB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB.viewport.to,
        ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        TB = function(BB, IB) {
          let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var TB;
          let JB = null === (TB = BB.field(zB.state, !1)) || void 0 === TB ? void 0 : TB.context;
          if (!JB) return null;
          let oB = JB.viewport;
          JB.updateViewport({
            from: 0,
            to: IB
          });
          let GB = JB.isDone(IB) || JB.work(ZB, IB) ? JB.tree : null;
          return JB.updateViewport(oB), GB
        }(BB.state, IB, ZB);
      return TB != gB(BB.state) && BB.dispatch({}), !!TB
    }
    class UB {
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
      read(BB, IB) {
        let ZB = this.cursorPos - this.string.length;
        return BB < ZB || IB >= this.cursorPos ? this.doc.sliceString(BB, IB) : this.string.slice(BB - ZB, IB - ZB)
      }
    }
    let WB = null;
    class dB {
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          TB = arguments.length > 3 ? arguments[3] : void 0,
          JB = arguments.length > 4 ? arguments[4] : void 0,
          oB = arguments.length > 5 ? arguments[5] : void 0,
          GB = arguments.length > 6 ? arguments[6] : void 0,
          vB = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = BB, this.state = IB, this.fragments = ZB, this.tree = TB, this.treeLen = JB, this.viewport = oB, this.skipped = GB, this.scheduleOn = vB, this.parse = null, this.tempSkipped = []
      }
      static create(BB, IB, ZB) {
        return new dB(BB, IB, [], JB.v.empty, 0, ZB, [], null)
      }
      startParse() {
        return this.parser.startParse(new UB(this.state.doc), this.fragments)
      }
      work(BB, IB) {
        return null != IB && IB >= this.state.doc.length && (IB = void 0), this.tree != JB.v.empty && this.isDone(null !== IB && void 0 !== IB ? IB : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var ZB;
          if ("number" == typeof BB) {
            let IB = Date.now() + BB;
            BB = () => Date.now() > IB
          }
          for (this.parse || (this.parse = this.startParse()), null != IB && (null == this.parse.stoppedAt || this.parse.stoppedAt > IB) && IB < this.state.doc.length && this.parse.stopAt(IB);;) {
            let TB = this.parse.advance();
            if (TB) {
              if (this.fragments = this.withoutTempSkipped(JB.u.addTree(TB, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (ZB = this.parse.stoppedAt) && void 0 !== ZB ? ZB : this.state.doc.length, this.tree = TB, this.parse = null, !(this.treeLen < (null !== IB && void 0 !== IB ? IB : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (BB()) return !1
          }
        }))
      }
      takeTree() {
        let BB, IB;
        this.parse && (BB = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > BB) && this.parse.stopAt(BB), this.withContext((() => {
          for (; !(IB = this.parse.advance()););
        })), this.treeLen = BB, this.tree = IB, this.fragments = this.withoutTempSkipped(JB.u.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(BB) {
        let IB = WB;
        WB = this;
        try {
          return BB()
        } finally {
          WB = IB
        }
      }
      withoutTempSkipped(BB) {
        for (let IB; IB = this.tempSkipped.pop();) BB = CB(BB, IB.from, IB.to);
        return BB
      }
      changes(BB, IB) {
        let {
          fragments: ZB,
          tree: TB,
          treeLen: oB,
          viewport: GB,
          skipped: vB
        } = this;
        if (this.takeTree(), !BB.empty) {
          let IB = [];
          if (BB.iterChangedRanges(((BB, ZB, TB, JB) => IB.push({
              fromA: BB,
              toA: ZB,
              fromB: TB,
              toB: JB
            }))), ZB = JB.u.applyChanges(ZB, IB), TB = JB.v.empty, oB = 0, GB = {
              from: BB.mapPos(GB.from, -1),
              to: BB.mapPos(GB.to, 1)
            }, this.skipped.length) {
            vB = [];
            for (let IB of this.skipped) {
              let ZB = BB.mapPos(IB.from, 1),
                TB = BB.mapPos(IB.to, -1);
              ZB < TB && vB.push({
                from: ZB,
                to: TB
              })
            }
          }
        }
        return new dB(this.parser, IB, ZB, TB, oB, GB, vB, this.scheduleOn)
      }
      updateViewport(BB) {
        if (this.viewport.from == BB.from && this.viewport.to == BB.to) return !1;
        this.viewport = BB;
        let IB = this.skipped.length;
        for (let ZB = 0; ZB < this.skipped.length; ZB++) {
          let {
            from: IB,
            to: TB
          } = this.skipped[ZB];
          IB < BB.to && TB > BB.from && (this.fragments = CB(this.fragments, IB, TB), this.skipped.splice(ZB--, 1))
        }
        return !(this.skipped.length >= IB) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(BB, IB) {
        this.skipped.push({
          from: BB,
          to: IB
        })
      }
      static getSkippingParser(BB) {
        return new class extends JB.t {
          createParse(IB, ZB, TB) {
            let oB = TB[0].from,
              GB = TB[TB.length - 1].to;
            return {
              parsedPos: oB,
              advance() {
                let IB = WB;
                if (IB) {
                  for (let BB of TB) IB.tempSkipped.push(BB);
                  BB && (IB.scheduleOn = IB.scheduleOn ? Promise.all([IB.scheduleOn, BB]) : BB)
                }
                return this.parsedPos = GB, new JB.v(JB.n.none, [], [], GB - oB)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(BB) {
        BB = Math.min(BB, this.state.doc.length);
        let IB = this.fragments;
        return this.treeLen >= BB && IB.length && 0 == IB[0].from && IB[0].to >= BB
      }
      static get() {
        return WB
      }
    }

    function CB(BB, IB, ZB) {
      return JB.u.applyChanges(BB, [{
        fromA: IB,
        toA: ZB,
        fromB: IB,
        toB: ZB
      }])
    }
    class QB {
      constructor(BB) {
        this.context = BB, this.tree = BB.tree
      }
      apply(BB) {
        if (!BB.docChanged && this.tree == this.context.tree) return this;
        let IB = this.context.changes(BB.changes, BB.state),
          ZB = this.context.treeLen == BB.startState.doc.length ? void 0 : Math.max(BB.changes.mapPos(this.context.treeLen), IB.viewport.to);
        return IB.work(20, ZB) || IB.takeTree(), new QB(IB)
      }
      static init(BB) {
        let IB = Math.min(3e3, BB.doc.length),
          ZB = dB.create(BB.facet(YB).parser, BB, {
            from: 0,
            to: IB
          });
        return ZB.work(20, IB) || ZB.takeTree(), new QB(ZB)
      }
    }
    zB.state = oB.L.define({
      create: QB.init,
      update(BB, IB) {
        for (let ZB of IB.effects)
          if (ZB.is(zB.setState)) return ZB.value;
        return IB.startState.facet(YB) != IB.state.facet(YB) ? QB.init(IB.state) : BB.apply(IB)
      }
    });
    let sB = BB => {
      let IB = setTimeout((() => BB()), 500);
      return () => clearTimeout(IB)
    };
    "undefined" != typeof requestIdleCallback && (sB = BB => {
      let IB = -1,
        ZB = setTimeout((() => {
          IB = requestIdleCallback(BB, {
            timeout: 400
          })
        }), 100);
      return () => IB < 0 ? clearTimeout(ZB) : cancelIdleCallback(IB)
    });
    const wB = "undefined" != typeof navigator && (null === (TB = navigator.scheduling) || void 0 === TB ? void 0 : TB.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      OB = GB.m.fromClass(class {
        constructor(BB) {
          this.view = BB, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(BB) {
          let IB = this.view.state.field(zB.state).context;
          (IB.updateViewport(BB.view.viewport) || this.view.viewport.to > IB.treeLen) && this.scheduleWork(), (BB.docChanged || BB.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(IB)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: BB
          } = this.view, IB = BB.field(zB.state);
          IB.tree == IB.context.tree && IB.context.isDone(BB.doc.length) || (this.working = sB(this.work))
        }
        work(BB) {
          this.working = null;
          let IB = Date.now();
          if (this.chunkEnd < IB && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = IB + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: ZB,
            viewport: {
              to: TB
            }
          } = this.view, JB = ZB.field(zB.state);
          if (JB.tree == JB.context.tree && JB.context.isDone(TB + 1e5)) return;
          let oB = Date.now() + Math.min(this.chunkBudget, 100, BB && !wB ? Math.max(25, BB.timeRemaining() - 5) : 1e9),
            GB = JB.context.treeLen < TB && ZB.doc.length > TB + 1e3,
            vB = JB.context.work((() => wB && wB() || Date.now() > oB), TB + (GB ? 0 : 1e5));
          this.chunkBudget -= Date.now() - IB, (vB || this.chunkBudget <= 0) && (JB.context.takeTree(), this.view.dispatch({
            effects: zB.setState.of(new QB(JB.context))
          })), this.chunkBudget > 0 && (!vB || GB) && this.scheduleWork(), this.checkAsyncSchedule(JB.context)
        }
        checkAsyncSchedule(BB) {
          BB.scheduleOn && (this.workScheduled++, BB.scheduleOn.then((() => this.scheduleWork())).catch((BB => (0, GB.W)(this.view.state, BB))).then((() => this.workScheduled--)), BB.scheduleOn = null)
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
      YB = oB.t.define({
        combine: BB => BB.length ? BB[0] : null,
        enables: BB => [zB.state, OB, GB.i.contentAttributes.compute([BB], (IB => {
          let ZB = IB.facet(BB);
          return ZB && ZB.name ? {
            "data-language": ZB.name
          } : {}
        }))]
      });
    class iB {
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = BB, this.support = IB, this.extension = [BB, IB]
      }
    }
    const pB = oB.t.define(),
      aB = oB.t.define({
        combine: BB => {
          if (!BB.length) return "  ";
          let IB = BB[0];
          if (!IB || /\S/.test(IB) || Array.from(IB).some((BB => BB != IB[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(BB[0]));
          return IB
        }
      });

    function HB(BB) {
      let IB = BB.facet(aB);
      return 9 == IB.charCodeAt(0) ? BB.tabSize * IB.length : IB.length
    }

    function MB(BB, IB) {
      let ZB = "",
        TB = BB.tabSize,
        JB = BB.facet(aB)[0];
      if ("\t" == JB) {
        for (; IB >= TB;) ZB += "\t", IB -= TB;
        JB = " "
      }
      for (let oB = 0; oB < IB; oB++) ZB += JB;
      return ZB
    }

    function jB(BB, IB) {
      BB instanceof oB.q && (BB = new PB(BB));
      for (let TB of BB.state.facet(pB)) {
        let ZB = TB(BB, IB);
        if (void 0 !== ZB) return ZB
      }
      let ZB = gB(BB.state);
      return ZB.length >= IB ? function(BB, IB, ZB) {
        let TB = IB.resolveStack(ZB),
          JB = IB.resolveInner(ZB, -1).resolve(ZB, 0).enterUnfinishedNodesBefore(ZB);
        if (JB != TB.node) {
          let BB = [];
          for (let IB = JB; IB && !(IB.from < TB.node.from || IB.to > TB.node.to || IB.from == TB.node.from && IB.type == TB.node.type); IB = IB.parent) BB.push(IB);
          for (let IB = BB.length - 1; IB >= 0; IB--) TB = {
            node: BB[IB],
            next: TB
          }
        }
        return rB(TB, BB, ZB)
      }(BB, ZB, IB) : null
    }
    class PB {
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = BB, this.options = IB, this.unit = HB(BB)
      }
      lineAt(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZB = this.state.doc.lineAt(BB),
          {
            simulateBreak: TB,
            simulateDoubleBreak: JB
          } = this.options;
        return null != TB && TB >= ZB.from && TB <= ZB.to ? JB && TB == BB ? {
          text: "",
          from: BB
        } : (IB < 0 ? TB < BB : TB <= BB) ? {
          text: ZB.text.slice(TB - ZB.from),
          from: TB
        } : {
          text: ZB.text.slice(0, TB - ZB.from),
          from: ZB.from
        } : ZB
      }
      textAfterPos(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && BB == this.options.simulateBreak) return "";
        let {
          text: ZB,
          from: TB
        } = this.lineAt(BB, IB);
        return ZB.slice(BB - TB, Math.min(ZB.length, BB + 100 - TB))
      }
      column(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: ZB,
            from: TB
          } = this.lineAt(BB, IB),
          JB = this.countColumn(ZB, BB - TB),
          oB = this.options.overrideIndentation ? this.options.overrideIndentation(TB) : -1;
        return oB > -1 && (JB += oB - this.countColumn(ZB, ZB.search(/\S|$/))), JB
      }
      countColumn(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB.length;
        return (0, oB.X)(BB, this.state.tabSize, IB)
      }
      lineIndent(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: ZB,
            from: TB
          } = this.lineAt(BB, IB),
          JB = this.options.overrideIndentation;
        if (JB) {
          let BB = JB(TB);
          if (BB > -1) return BB
        }
        return this.countColumn(ZB, ZB.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const RB = new JB.i;

    function rB(BB, IB, ZB) {
      for (let TB = BB; TB; TB = TB.next) {
        let BB = mB(TB.node);
        if (BB) return BB(LB.create(IB, ZB, TB))
      }
      return 0
    }

    function mB(BB) {
      let IB = BB.type.prop(RB);
      if (IB) return IB;
      let ZB, TB = BB.firstChild;
      if (TB && (ZB = TB.type.prop(JB.i.closedBy))) {
        let IB = BB.lastChild,
          TB = IB && ZB.indexOf(IB.name) > -1;
        return BB => fB(BB, !0, 1, void 0, TB && ! function(BB) {
          return BB.pos == BB.options.simulateBreak && BB.options.simulateDoubleBreak
        }(BB) ? IB.from : void 0)
      }
      return null == BB.parent ? XB : null
    }

    function XB() {
      return 0
    }
    class LB extends PB {
      constructor(BB, IB, ZB) {
        super(BB.state, BB.options), this.base = BB, this.pos = IB, this.context = ZB
      }
      get node() {
        return this.context.node
      }
      static create(BB, IB, ZB) {
        return new LB(BB, IB, ZB)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(BB) {
        let IB = this.state.doc.lineAt(BB.from);
        for (;;) {
          let ZB = BB.resolve(IB.from);
          for (; ZB.parent && ZB.parent.from == ZB.from;) ZB = ZB.parent;
          if (eB(ZB, BB)) break;
          IB = this.state.doc.lineAt(ZB.from)
        }
        return this.lineIndent(IB.from)
      }
      continue () {
        return rB(this.context.next, this.base, this.pos)
      }
    }

    function eB(BB, IB) {
      for (let ZB = IB; ZB; ZB = ZB.parent)
        if (BB == ZB) return !0;
      return !1
    }

    function uB(BB) {
      let {
        closing: IB,
        align: ZB = !0,
        units: TB = 1
      } = BB;
      return BB => fB(BB, ZB, TB, IB)
    }

    function fB(BB, IB, ZB, TB, JB) {
      let oB = BB.textAfter,
        GB = oB.match(/^\s*/)[0].length,
        vB = TB && oB.slice(GB, GB + TB.length) == TB || JB == BB.pos + GB,
        kB = IB ? function(BB) {
          let IB = BB.node,
            ZB = IB.childAfter(IB.from),
            TB = IB.lastChild;
          if (!ZB) return null;
          let JB = BB.options.simulateBreak,
            oB = BB.state.doc.lineAt(ZB.from),
            GB = null == JB || JB <= oB.from ? oB.to : Math.min(oB.to, JB);
          for (let vB = ZB.to;;) {
            let BB = IB.childAfter(vB);
            if (!BB || BB == TB) return null;
            if (!BB.type.isSkipped) {
              if (BB.from >= GB) return null;
              let IB = /^ */.exec(oB.text.slice(ZB.to - oB.from))[0].length;
              return {
                from: ZB.from,
                to: ZB.to + IB
              }
            }
            vB = BB.to
          }
        }(BB) : null;
      return kB ? vB ? BB.column(kB.from) : BB.column(kB.to) : BB.baseIndent + (vB ? 0 : BB.unit * ZB)
    }
    const lB = BB => BB.baseIndent;

    function AB() {
      let {
        except: BB,
        units: IB = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return ZB => {
        let TB = BB && BB.test(ZB.textAfter);
        return ZB.baseIndent + (TB ? 0 : IB * ZB.unit)
      }
    }
    const tB = 200;

    function bB() {
      return oB.q.transactionFilter.of((BB => {
        if (!BB.docChanged || !BB.isUserEvent("input.type") && !BB.isUserEvent("input.complete")) return BB;
        let IB = BB.startState.languageDataAt("indentOnInput", BB.startState.selection.main.head);
        if (!IB.length) return BB;
        let ZB = BB.newDoc,
          {
            head: TB
          } = BB.newSelection.main,
          JB = ZB.lineAt(TB);
        if (TB > JB.from + tB) return BB;
        let oB = ZB.sliceString(JB.from, TB);
        if (!IB.some((BB => BB.test(oB)))) return BB;
        let {
          state: GB
        } = BB, vB = -1, kB = [];
        for (let {
            head: cB
          }
          of GB.selection.vq) {
          let BB = GB.doc.lineAt(cB);
          if (BB.from == vB) continue;
          vB = BB.from;
          let IB = jB(GB, BB.from);
          if (null == IB) continue;
          let ZB = /^\s*/.exec(BB.text)[0],
            TB = MB(GB, IB);
          ZB != TB && kB.push({
            from: BB.from,
            to: BB.from + ZB.length,
            insert: TB
          })
        }
        return kB.length ? [BB, {
          changes: kB,
          sequential: !0
        }] : BB
      }))
    }
    const xB = oB.t.define(),
      EB = new JB.i;

    function DB(BB) {
      let IB = BB.firstChild,
        ZB = BB.lastChild;
      return IB && IB.to < ZB.from ? {
        from: IB.to,
        to: ZB.type.isError ? BB.to : ZB.from
      } : null
    }

    function KB(BB) {
      let IB = BB.lastChild;
      return IB && IB.to == BB.to && IB.type.isError
    }

    function VB(BB, IB, ZB) {
      for (let TB of BB.facet(xB)) {
        let JB = TB(BB, IB, ZB);
        if (JB) return JB
      }
      return function(BB, IB, ZB) {
        let TB = gB(BB);
        if (TB.length < ZB) return null;
        let JB = null;
        for (let oB = TB.resolveStack(ZB, 1); oB; oB = oB.next) {
          let GB = oB.node;
          if (GB.to <= ZB || GB.from > ZB) continue;
          if (JB && GB.from < IB) break;
          let vB = GB.type.prop(EB);
          if (vB && (GB.to < TB.length - 50 || TB.length == BB.doc.length || !KB(GB))) {
            let TB = vB(GB, BB);
            TB && TB.from <= ZB && TB.from >= IB && TB.to > ZB && (JB = TB)
          }
        }
        return JB
      }(BB, IB, ZB)
    }

    function SB(BB, IB) {
      let ZB = IB.mapPos(BB.from, 1),
        TB = IB.mapPos(BB.to, -1);
      return ZB >= TB ? void 0 : {
        from: ZB,
        to: TB
      }
    }
    const BI = oB.K.define({
        map: SB
      }),
      II = oB.K.define({
        map: SB
      });

    function ZI(BB) {
      let IB = [];
      for (let {
          head: ZB
        }
        of BB.state.selection.vq) IB.some((BB => BB.from <= ZB && BB.to >= ZB)) || IB.push(BB.lineBlockAt(ZB));
      return IB
    }
    const TI = oB.L.define({
      create: () => GB.d.none,
      update(BB, IB) {
        IB.isUserEvent("delete") && IB.changes.iterChangedRanges(((IB, ZB) => BB = JI(BB, IB, ZB))), BB = BB.map(IB.changes);
        for (let ZB of IB.effects)
          if (ZB.is(BI) && !GI(BB, ZB.value.from, ZB.value.to)) {
            let {
              preparePlaceholder: TB
            } = IB.state.facet(hI), JB = TB ? GB.d.replace({
              widget: new gI(TB(IB.state, ZB.value))
            }) : NI;
            BB = BB.update({
              add: [JB.range(ZB.value.from, ZB.value.to)]
            })
          } else ZB.is(II) && (BB = BB.update({
            filter: (BB, IB) => ZB.value.from != BB || ZB.value.to != IB,
            filterFrom: ZB.value.from,
            filterTo: ZB.value.to
          }));
        return IB.selection && (BB = JI(BB, IB.selection.main.head)), BB
      },
      provide: BB => GB.i.vT.from(BB),
      toJSON(BB, IB) {
        let ZB = [];
        return BB.between(0, IB.doc.length, ((BB, IB) => {
          ZB.push(BB, IB)
        })), ZB
      },
      fromJSON(BB) {
        if (!Array.isArray(BB) || BB.length % 2) throw new RangeError("Invalid JSON for fold state");
        let IB = [];
        for (let ZB = 0; ZB < BB.length;) {
          let TB = BB[ZB++],
            JB = BB[ZB++];
          if ("number" != typeof TB || "number" != typeof JB) throw new RangeError("Invalid JSON for fold state");
          IB.push(NI.range(TB, JB))
        }
        return GB.d.set(IB, !0)
      }
    });

    function JI(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : IB,
        TB = !1;
      return BB.between(IB, ZB, ((BB, JB) => {
        BB < ZB && JB > IB && (TB = !0)
      })), TB ? BB.update({
        filterFrom: IB,
        filterTo: ZB,
        filter: (BB, TB) => BB >= ZB || TB <= IB
      }) : BB
    }

    function oI(BB, IB, ZB) {
      var TB;
      let JB = null;
      return null === (TB = BB.field(TI, !1)) || void 0 === TB || TB.between(IB, ZB, ((BB, IB) => {
        (!JB || JB.from > BB) && (JB = {
          from: BB,
          to: IB
        })
      })), JB
    }

    function GI(BB, IB, ZB) {
      let TB = !1;
      return BB.between(IB, IB, ((BB, JB) => {
        BB == IB && JB == ZB && (TB = !0)
      })), TB
    }

    function vI(BB, IB) {
      return BB.field(TI, !1) ? IB : IB.concat(oB.K.appendConfig.of(zI()))
    }

    function kI(BB, IB) {
      let ZB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        TB = BB.state.doc.lineAt(IB.from).number,
        JB = BB.state.doc.lineAt(IB.to).number;
      return GB.i.announce.of(`${BB.state.phrase(ZB?"Folded lines":"Unfolded lines")} ${TB} ${BB.state.phrase("to")} ${JB}.`)
    }
    const cI = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: BB => {
          for (let IB of ZI(BB)) {
            let ZB = VB(BB.state, IB.from, IB.to);
            if (ZB) return BB.dispatch({
              effects: vI(BB.state, [BI.of(ZB), kI(BB, ZB)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: BB => {
          if (!BB.state.field(TI, !1)) return !1;
          let IB = [];
          for (let ZB of ZI(BB)) {
            let TB = oI(BB.state, ZB.from, ZB.to);
            TB && IB.push(II.of(TB), kI(BB, TB, !1))
          }
          return IB.length && BB.dispatch({
            effects: IB
          }), IB.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: BB => {
          let {
            state: IB
          } = BB, ZB = [];
          for (let TB = 0; TB < IB.doc.length;) {
            let JB = BB.lineBlockAt(TB),
              oB = VB(IB, JB.from, JB.to);
            oB && ZB.push(BI.of(oB)), TB = (oB ? BB.lineBlockAt(oB.to) : JB).to + 1
          }
          return ZB.length && BB.dispatch({
            effects: vI(BB.state, ZB)
          }), !!ZB.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: BB => {
          let IB = BB.state.field(TI, !1);
          if (!IB || !IB.size) return !1;
          let ZB = [];
          return IB.between(0, BB.state.doc.length, ((BB, IB) => {
            ZB.push(II.of({
              from: BB,
              to: IB
            }))
          })), BB.dispatch({
            effects: ZB
          }), !0
        }
      }],
      nI = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      hI = oB.t.define({
        combine: BB => (0, oB.T)(BB, nI)
      });

    function zI(BB) {
      let IB = [TI, WI];
      return BB && IB.push(hI.of(BB)), IB
    }

    function FI(BB, IB) {
      let {
        state: ZB
      } = BB, TB = ZB.facet(hI), JB = IB => {
        let ZB = BB.lineBlockAt(BB.posAtDOM(IB.target)),
          TB = oI(BB.state, ZB.from, ZB.to);
        TB && BB.dispatch({
          effects: II.of(TB)
        }), IB.preventDefault()
      };
      if (TB.placeholderDOM) return TB.placeholderDOM(BB, JB, IB);
      let oB = document.createElement("span");
      return oB.textContent = TB.placeholderText, oB.setAttribute("aria-label", ZB.phrase("folded code")), oB.title = ZB.phrase("unfold"), oB.className = "cm-foldPlaceholder", oB.onclick = JB, oB
    }
    const NI = GB.d.replace({
      widget: new class extends GB.o {
        toDOM(BB) {
          return FI(BB, null)
        }
      }
    });
    class gI extends GB.o {
      constructor(BB) {
        super(), this.value = BB
      }
      eq(BB) {
        return this.value == BB.value
      }
      toDOM(BB) {
        return FI(BB, this.value)
      }
    }
    const qI = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class yI extends GB.k {
      constructor(BB, IB) {
        super(), this.config = BB, this.open = IB
      }
      eq(BB) {
        return this.config == BB.config && this.open == BB.open
      }
      toDOM(BB) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let IB = document.createElement("span");
        return IB.textContent = this.open ? this.config.openText : this.config.closedText, IB.title = BB.state.phrase(this.open ? "Fold line" : "Unfold line"), IB
      }
    }

    function UI() {
      let BB = {
          ...qI,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        IB = new yI(BB, !0),
        ZB = new yI(BB, !1),
        TB = GB.m.fromClass(class {
          constructor(BB) {
            this.from = BB.viewport.from, this.markers = this.buildMarkers(BB)
          }
          update(IB) {
            (IB.docChanged || IB.viewportChanged || IB.startState.facet(YB) != IB.state.facet(YB) || IB.startState.field(TI, !1) != IB.state.field(TI, !1) || gB(IB.startState) != gB(IB.state) || BB.foldingChanged(IB)) && (this.markers = this.buildMarkers(IB.view))
          }
          buildMarkers(BB) {
            let TB = new oB.B;
            for (let JB of BB.viewportLineBlocks) {
              let oB = oI(BB.state, JB.from, JB.to) ? ZB : VB(BB.state, JB.from, JB.to) ? IB : null;
              oB && TB.add(JB.from, JB.from, oB)
            }
            return TB.finish()
          }
        }),
        {
          domEventHandlers: JB
        } = BB;
      return [TB, (0, GB.E)({
        class: "cm-foldGutter",
        markers(BB) {
          var IB;
          return (null === (IB = BB.plugin(TB)) || void 0 === IB ? void 0 : IB.markers) || oB.F.empty
        },
        initialSpacer: () => new yI(BB, !1),
        domEventHandlers: {
          ...JB,
          click: (BB, IB, ZB) => {
            if (JB.click && JB.click(BB, IB, ZB)) return !0;
            let TB = oI(BB.state, IB.from, IB.to);
            if (TB) return BB.dispatch({
              effects: II.of(TB)
            }), !0;
            let oB = VB(BB.state, IB.from, IB.to);
            return !!oB && (BB.dispatch({
              effects: BI.of(oB)
            }), !0)
          }
        }
      }), zI()]
    }
    const WI = GB.i.baseTheme({
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
    class dI {
      constructor(BB, IB) {
        let ZB;

        function TB(BB) {
          let IB = kB.e.newName();
          return (ZB || (ZB = Object.create(null)))["." + IB] = BB, IB
        }
        this.specs = BB;
        const JB = "string" == typeof IB.all ? IB.all : IB.all ? TB(IB.all) : void 0,
          oB = IB.scope;
        this.scope = oB instanceof zB ? BB => BB.prop(cB) == oB.data : oB ? BB => BB == oB : void 0, this.style = (0, vB.k)(BB.map((BB => ({
          tag: BB.tag,
          class: BB.class || TB(Object.assign({}, BB, {
            tag: null
          }))
        }))), {
          all: JB
        }).style, this.module = ZB ? new kB.e(ZB) : null, this.themeType = IB.themeType
      }
      static define(BB, IB) {
        return new dI(BB, IB || {})
      }
    }
    const CI = oB.t.define(),
      QI = oB.t.define({
        combine: BB => BB.length ? [BB[0]] : null
      });

    function sI(BB) {
      let IB = BB.facet(CI);
      return IB.length ? IB : BB.facet(QI)
    }

    function wI(BB, IB) {
      let ZB, TB = [YI];
      return BB instanceof dI && (BB.module && TB.push(GB.i.styleModule.of(BB.module)), ZB = BB.themeType), (null === IB || void 0 === IB ? void 0 : IB.fallback) ? TB.push(QI.of(BB)) : ZB ? TB.push(CI.computeN([GB.i.darkTheme], (IB => IB.facet(GB.i.darkTheme) == ("dark" == ZB) ? [BB] : []))) : TB.push(CI.of(BB)), TB
    }
    class OI {
      constructor(BB) {
        this.markCache = Object.create(null), this.tree = gB(BB.state), this.vT = this.buildDeco(BB, sI(BB.state)), this.decoratedTo = BB.viewport.to
      }
      update(BB) {
        let IB = gB(BB.state),
          ZB = sI(BB.state),
          TB = ZB != sI(BB.startState),
          {
            viewport: JB
          } = BB.view,
          oB = BB.changes.mapPos(this.decoratedTo, 1);
        IB.length < JB.to && !TB && IB.type == this.tree.type && oB >= JB.to ? (this.vT = this.vT.map(BB.changes), this.decoratedTo = oB) : (IB != this.tree || BB.viewportChanged || TB) && (this.tree = IB, this.vT = this.buildDeco(BB.view, ZB), this.decoratedTo = JB.to)
      }
      buildDeco(BB, IB) {
        if (!IB || !this.tree.length) return GB.d.none;
        let ZB = new oB.B;
        for (let {
            from: TB,
            to: JB
          }
          of BB.BBB)(0, vB.d)(this.tree, IB, ((BB, IB, TB) => {
          ZB.add(BB, IB, this.markCache[TB] || (this.markCache[TB] = GB.d.mark({
            class: TB
          })))
        }), TB, JB);
        return ZB.finish()
      }
    }
    const YI = oB.A.high(GB.m.fromClass(OI, {
        vT: BB => BB.vT
      })),
      iI = dI.define([{
        tag: vB.l.meta,
        color: "#404740"
      }, {
        tag: vB.l.link,
        textDecoration: "underline"
      }, {
        tag: vB.l.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: vB.l.emphasis,
        fontStyle: "italic"
      }, {
        tag: vB.l.strong,
        fontWeight: "bold"
      }, {
        tag: vB.l.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: vB.l.keyword,
        color: "#708"
      }, {
        tag: [vB.l.atom, vB.l.bool, vB.l.url, vB.l.contentSeparator, vB.l.labelName],
        color: "#219"
      }, {
        tag: [vB.l.literal, vB.l.inserted],
        color: "#164"
      }, {
        tag: [vB.l.string, vB.l.deleted],
        color: "#a11"
      }, {
        tag: [vB.l.regexp, vB.l.escape, vB.l.special(vB.l.string)],
        color: "#e40"
      }, {
        tag: vB.l.definition(vB.l.variableName),
        color: "#00f"
      }, {
        tag: vB.l.local(vB.l.variableName),
        color: "#30a"
      }, {
        tag: [vB.l.typeName, vB.l.namespace],
        color: "#085"
      }, {
        tag: vB.l.className,
        color: "#167"
      }, {
        tag: [vB.l.special(vB.l.variableName), vB.l.macroName],
        color: "#256"
      }, {
        tag: vB.l.definition(vB.l.propertyName),
        color: "#00c"
      }, {
        tag: vB.l.comment,
        color: "#940"
      }, {
        tag: vB.l.invalid,
        color: "#f00"
      }]),
      pI = GB.i.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      aI = 1e4,
      HI = "()[]{}",
      MI = oB.t.define({
        combine: BB => (0, oB.T)(BB, {
          afterCursor: !0,
          brackets: HI,
          maxScanDistance: aI,
          renderMatch: RI
        })
      }),
      jI = GB.d.mark({
        class: "cm-matchingBracket"
      }),
      PI = GB.d.mark({
        class: "cm-nonmatchingBracket"
      });

    function RI(BB) {
      let IB = [],
        ZB = BB.matched ? jI : PI;
      return IB.push(ZB.range(BB.start.from, BB.start.to)), BB.end && IB.push(ZB.range(BB.end.from, BB.end.to)), IB
    }

    function rI(BB) {
      let IB = [],
        ZB = BB.facet(MI);
      for (let TB of BB.selection.vq) {
        if (!TB.empty) continue;
        let JB = fI(BB, TB.head, -1, ZB) || TB.head > 0 && fI(BB, TB.head - 1, 1, ZB) || ZB.afterCursor && (fI(BB, TB.head, 1, ZB) || TB.head < BB.doc.length && fI(BB, TB.head + 1, -1, ZB));
        JB && (IB = IB.concat(ZB.renderMatch(JB, BB)))
      }
      return GB.d.set(IB, !0)
    }
    const mI = [GB.m.fromClass(class {
      constructor(BB) {
        this.paused = !1, this.vT = rI(BB.state)
      }
      update(BB) {
        (BB.docChanged || BB.selectionSet || this.paused) && (BB.view.composing ? (this.vT = this.vT.map(BB.changes), this.paused = !0) : (this.vT = rI(BB.state), this.paused = !1))
      }
    }, {
      vT: BB => BB.vT
    }), pI];

    function XI() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [MI.of(BB), mI]
    }
    const LI = new JB.i;

    function eI(BB, IB, ZB) {
      let TB = BB.prop(IB < 0 ? JB.i.openedBy : JB.i.closedBy);
      if (TB) return TB;
      if (1 == BB.name.length) {
        let TB = ZB.indexOf(BB.name);
        if (TB > -1 && TB % 2 == (IB < 0 ? 1 : 0)) return [ZB[TB + IB]]
      }
      return null
    }

    function uI(BB) {
      let IB = BB.type.prop(LI);
      return IB ? IB(BB.node) : BB
    }

    function fI(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        JB = TB.maxScanDistance || aI,
        oB = TB.brackets || HI,
        GB = gB(BB),
        vB = GB.resolveInner(IB, ZB);
      for (let kB = vB; kB; kB = kB.parent) {
        let TB = eI(kB.type, ZB, oB);
        if (TB && kB.from < kB.to) {
          let JB = uI(kB);
          if (JB && (ZB > 0 ? IB >= JB.from && IB < JB.to : IB > JB.from && IB <= JB.to)) return lI(BB, IB, ZB, kB, JB, TB, oB)
        }
      }
      return function(BB, IB, ZB, TB, JB, oB, GB) {
        if (ZB < 0 ? !IB : IB == BB.doc.length) return null;
        let vB = ZB < 0 ? BB.sliceDoc(IB - 1, IB) : BB.sliceDoc(IB, IB + 1),
          kB = GB.indexOf(vB);
        if (kB < 0 || kB % 2 == 0 != ZB > 0) return null;
        let cB = {
            from: ZB < 0 ? IB - 1 : IB,
            to: ZB > 0 ? IB + 1 : IB
          },
          nB = BB.doc.iterRange(IB, ZB > 0 ? BB.doc.length : 0),
          hB = 0;
        for (let zB = 0; !nB.next().done && zB <= oB;) {
          let BB = nB.value;
          ZB < 0 && (zB += BB.length);
          let oB = IB + zB * ZB;
          for (let IB = ZB > 0 ? 0 : BB.length - 1, vB = ZB > 0 ? BB.length : -1; IB != vB; IB += ZB) {
            let vB = GB.indexOf(BB[IB]);
            if (!(vB < 0 || TB.resolveInner(oB + IB, 1).type != JB))
              if (vB % 2 == 0 == ZB > 0) hB++;
              else {
                if (1 == hB) return {
                  start: cB,
                  end: {
                    from: oB + IB,
                    to: oB + IB + 1
                  },
                  matched: vB >> 1 == kB >> 1
                };
                hB--
              }
          }
          ZB > 0 && (zB += BB.length)
        }
        return nB.done ? {
          start: cB,
          matched: !1
        } : null
      }(BB, IB, ZB, GB, vB.type, JB, oB)
    }

    function lI(BB, IB, ZB, TB, JB, oB, GB) {
      let vB = TB.parent,
        kB = {
          from: JB.from,
          to: JB.to
        },
        cB = 0,
        nB = null === vB || void 0 === vB ? void 0 : vB.cursor();
      if (nB && (ZB < 0 ? nB.childBefore(TB.from) : nB.childAfter(TB.to)))
        do {
          if (ZB < 0 ? nB.to <= TB.from : nB.from >= TB.to) {
            if (0 == cB && oB.indexOf(nB.type.name) > -1 && nB.from < nB.to) {
              let BB = uI(nB);
              return {
                start: kB,
                end: BB ? {
                  from: BB.from,
                  to: BB.to
                } : void 0,
                matched: !0
              }
            }
            if (eI(nB.type, ZB, GB)) cB++;
            else if (eI(nB.type, -ZB, GB)) {
              if (0 == cB) {
                let BB = uI(nB);
                return {
                  start: kB,
                  end: BB && BB.from < BB.to ? {
                    from: BB.from,
                    to: BB.to
                  } : void 0,
                  matched: !1
                }
              }
              cB--
            }
          }
        } while (ZB < 0 ? nB.prevSibling() : nB.nextSibling());
      return {
        start: kB,
        matched: !1
      }
    }
    const AI = Object.create(null),
      tI = [JB.n.none],
      bI = [],
      xI = Object.create(null),
      EI = Object.create(null);
    for (let [VI, SI] of [
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
      ]) EI[VI] = KI(AI, SI);

    function DI(BB, IB) {
      bI.indexOf(BB) > -1 || (bI.push(BB), console.warn(IB))
    }

    function KI(BB, IB) {
      let ZB = [];
      for (let JB of IB.split(" ")) {
        let IB = [];
        for (let ZB of JB.split(".")) {
          let TB = BB[ZB] || vB.l[ZB];
          TB ? "function" == typeof TB ? IB.length ? IB = IB.map(TB) : DI(ZB, `Modifier ${ZB} used at start of tag`) : IB.length ? DI(ZB, `Tag ${ZB} used as modifier`) : IB = Array.isArray(TB) ? TB : [TB] : DI(ZB, `Unknown highlighting tag ${ZB}`)
        }
        for (let BB of IB) ZB.push(BB)
      }
      if (!ZB.length) return 0;
      let TB = IB.replace(/ /g, "_"),
        oB = TB + " " + ZB.map((BB => BB.id)),
        GB = xI[oB];
      if (GB) return GB.id;
      let kB = xI[oB] = JB.n.define({
        id: tI.length,
        name: TB,
        props: [(0, vB.g)({
          [TB]: ZB
        })]
      });
      return tI.push(kB), kB.id
    }
    GB.f.RTL, GB.f.LTR
  },
  41397: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => WB,
      e: () => sB
    });
    var TB = ZB(41349),
      JB = ZB(41342),
      oB = ZB(41364);
    class GB {
      constructor(BB, IB, ZB) {
        this.from = BB, this.to = IB, this.diagnostic = ZB
      }
    }
    class vB {
      constructor(BB, IB, ZB) {
        this.diagnostics = BB, this.panel = IB, this.selected = ZB
      }
      static init(BB, IB, ZB) {
        let oB = ZB.facet(CB).markerFilter;
        oB && (BB = oB(BB, ZB));
        let GB = BB.slice().sort(((BB, IB) => BB.from - IB.from || BB.to - IB.to)),
          cB = new JB.B,
          nB = [],
          hB = 0,
          zB = ZB.doc.iter(),
          FB = 0,
          NB = ZB.doc.length;
        for (let JB = 0;;) {
          let BB, IB, ZB = JB == GB.length ? null : GB[JB];
          if (!ZB && !nB.length) break;
          if (nB.length) BB = hB, IB = nB.reduce(((BB, IB) => Math.min(BB, IB.to)), ZB && ZB.from > BB ? ZB.from : 1e8);
          else {
            if (BB = ZB.from, BB > NB) break;
            IB = ZB.to, nB.push(ZB), JB++
          }
          for (; JB < GB.length;) {
            let ZB = GB[JB];
            if (ZB.from != BB || !(ZB.to > ZB.from || ZB.to == BB)) {
              IB = Math.min(ZB.from, IB);
              break
            }
            nB.push(ZB), JB++, IB = Math.min(ZB.to, IB)
          }
          IB = Math.min(IB, NB);
          let oB = !1;
          if (nB.some((ZB => ZB.from == BB && (ZB.to == IB || IB == NB))) && (oB = BB == IB, !oB && IB - BB < 10)) {
            let ZB = BB - (FB + zB.value.length);
            ZB > 0 && (zB.next(ZB), FB = BB);
            for (let TB = BB;;) {
              if (TB >= IB) {
                oB = !0;
                break
              }
              if (!zB.lineBreak && FB + zB.value.length > TB) break;
              TB = FB + zB.value.length, FB += zB.value.length, zB.next()
            }
          }
          let vB = PB(nB);
          if (oB) cB.add(BB, BB, TB.d.widget({
            widget: new YB(vB),
            diagnostics: nB.slice()
          }));
          else {
            let ZB = nB.reduce(((BB, IB) => IB.markClass ? BB + " " + IB.markClass : BB), "");
            cB.add(BB, IB, TB.d.mark({
              class: "cm-lintRange cm-lintRange-" + vB + ZB,
              diagnostics: nB.slice(),
              inclusiveEnd: nB.some((BB => BB.to > IB))
            }))
          }
          if (hB = IB, hB == NB) break;
          for (let TB = 0; TB < nB.length; TB++) nB[TB].to <= hB && nB.splice(TB--, 1)
        }
        let gB = cB.finish();
        return new vB(gB, IB, kB(gB))
      }
    }

    function kB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        TB = null;
      return BB.between(ZB, 1e9, ((BB, ZB, JB) => {
        let {
          spec: oB
        } = JB;
        if (!(IB && oB.diagnostics.indexOf(IB) < 0))
          if (TB) {
            if (oB.diagnostics.indexOf(TB.diagnostic) < 0) return !1;
            TB = new GB(TB.from, ZB, TB.diagnostic)
          } else TB = new GB(BB, ZB, IB || oB.diagnostics[0])
      })), TB
    }

    function cB(BB, IB) {
      let ZB = IB.pos,
        TB = IB.end || ZB,
        JB = BB.state.facet(CB).hideOn(BB, ZB, TB);
      if (null != JB) return JB;
      let oB = BB.startState.doc.lineAt(IB.pos);
      return !(!BB.effects.some((BB => BB.is(hB))) && !BB.changes.touchesRange(oB.from, Math.max(oB.to, TB)))
    }

    function nB(BB, IB) {
      return BB.field(NB, !1) ? IB : IB.concat(JB.K.appendConfig.of(RB))
    }
    const hB = JB.K.define(),
      zB = JB.K.define(),
      FB = JB.K.define(),
      NB = JB.L.define({
        create: () => new vB(TB.d.none, null, null),
        update(BB, IB) {
          if (IB.docChanged && BB.diagnostics.size) {
            let ZB = BB.diagnostics.map(IB.changes),
              TB = null,
              JB = BB.panel;
            if (BB.selected) {
              let JB = IB.changes.mapPos(BB.selected.from, 1);
              TB = kB(ZB, BB.selected.diagnostic, JB) || kB(ZB, null, JB)
            }!ZB.size && JB && IB.state.facet(CB).autoPanel && (JB = null), BB = new vB(ZB, JB, TB)
          }
          for (let ZB of IB.effects)
            if (ZB.is(hB)) {
              let TB = IB.state.facet(CB).autoPanel ? ZB.value.length ? pB.open : null : BB.panel;
              BB = vB.init(ZB.value, TB, IB.state)
            } else ZB.is(zB) ? BB = new vB(BB.diagnostics, ZB.value ? pB.open : null, BB.selected) : ZB.is(FB) && (BB = new vB(BB.diagnostics, BB.panel, ZB.value));
          return BB
        },
        provide: BB => [TB.ib.from(BB, (BB => BB.panel)), TB.i.vT.from(BB, (BB => BB.diagnostics))]
      });
    const gB = TB.d.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function qB(BB, IB, ZB) {
      let TB, {
          diagnostics: JB
        } = BB.state.field(NB),
        oB = -1,
        GB = -1;
      JB.between(IB - (ZB < 0 ? 1 : 0), IB + (ZB > 0 ? 1 : 0), ((BB, JB, vB) => {
        let {
          spec: kB
        } = vB;
        if (IB >= BB && IB <= JB && (BB == JB || (IB > BB || ZB > 0) && (IB < JB || ZB < 0))) return TB = kB.diagnostics, oB = BB, GB = JB, !1
      }));
      let vB = BB.state.facet(CB).tooltipFilter;
      return TB && vB && (TB = vB(TB, BB.state)), TB ? {
        pos: oB,
        end: GB,
        above: BB.state.doc.lineAt(oB).to < GB,
        create: () => ({
          dom: yB(BB, TB)
        })
      } : null
    }

    function yB(BB, IB) {
      return (0, oB.e)("ul", {
        class: "cm-tooltip-lint"
      }, IB.map((IB => OB(BB, IB, !1))))
    }
    const UB = BB => {
        let IB = BB.state.field(NB, !1);
        return !(!IB || !IB.panel) && (BB.dispatch({
          effects: zB.of(!1)
        }), !0)
      },
      WB = [{
        key: "Mod-Shift-m",
        run: BB => {
          let IB = BB.state.field(NB, !1);
          IB && IB.panel || BB.dispatch({
            effects: nB(BB.state, [zB.of(!0)])
          });
          let ZB = (0, TB.z)(BB, pB.open);
          return ZB && ZB.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: BB => {
          let IB = BB.state.field(NB, !1);
          if (!IB) return !1;
          let ZB = BB.state.selection.main,
            TB = kB(IB.diagnostics, null, ZB.to + 1);
          return !(!TB && (TB = kB(IB.diagnostics, null, 0), !TB || TB.from == ZB.from && TB.to == ZB.to)) && (BB.dispatch({
            selection: {
              anchor: TB.from,
              head: TB.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      dB = TB.m.fromClass(class {
        constructor(BB) {
          this.view = BB, this.timeout = -1, this.set = !0;
          let {
            delay: IB
          } = BB.state.facet(CB);
          this.lintTime = Date.now() + IB, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, IB)
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
              sources: IB
            } = BB.facet(CB);
            IB.length && function(BB, IB, ZB) {
              let TB = [],
                JB = -1;
              for (let oB of BB) oB.then((ZB => {
                TB.push(ZB), clearTimeout(JB), TB.length == BB.length ? IB(TB) : JB = setTimeout((() => IB(TB)), 200)
              }), ZB)
            }(IB.map((BB => Promise.resolve(BB(this.view)))), (IB => {
              this.view.state.doc == BB.doc && this.view.dispatch(function(BB, IB) {
                return {
                  effects: nB(BB, [hB.of(IB)])
                }
              }(this.view.state, IB.reduce(((BB, IB) => BB.concat(IB)))))
            }), (BB => {
              (0, TB.W)(this.view.state, BB)
            }))
          }
        }
        update(BB) {
          let IB = BB.state.facet(CB);
          (BB.docChanged || IB != BB.startState.facet(CB) || IB.needsRefresh && IB.needsRefresh(BB)) && (this.lintTime = Date.now() + IB.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, IB.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const CB = JB.t.define({
      combine: BB => ({
        sources: BB.map((BB => BB.source)).filter((BB => null != BB)),
        ...(0, JB.T)(BB.map((BB => BB.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: QB,
          tooltipFilter: QB,
          needsRefresh: (BB, IB) => BB ? IB ? ZB => BB(ZB) || IB(ZB) : BB : IB,
          hideOn: (BB, IB) => BB ? IB ? (ZB, TB, JB) => BB(ZB, TB, JB) || IB(ZB, TB, JB) : BB : IB,
          autoPanel: (BB, IB) => BB || IB
        })
      })
    });

    function QB(BB, IB) {
      return BB ? IB ? (ZB, TB) => IB(BB(ZB, TB), TB) : BB : IB
    }

    function sB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [CB.of({
        source: BB,
        config: IB
      }), dB, RB]
    }

    function wB(BB) {
      let IB = [];
      if (BB) BB: for (let {
          name: ZB
        }
        of BB) {
        for (let BB = 0; BB < ZB.length; BB++) {
          let TB = ZB[BB];
          if (/[a-zA-Z]/.test(TB) && !IB.some((BB => BB.toLowerCase() == TB.toLowerCase()))) {
            IB.push(TB);
            continue BB
          }
        }
        IB.push("")
      }
      return IB
    }

    function OB(BB, IB, ZB) {
      var TB;
      let JB = ZB ? wB(IB.actions) : [];
      return (0, oB.e)("li", {
        class: "cm-diagnostic cm-diagnostic-" + IB.severity
      }, (0, oB.e)("span", {
        class: "cm-diagnosticText"
      }, IB.renderMessage ? IB.renderMessage(BB) : IB.message), null === (TB = IB.actions) || void 0 === TB ? void 0 : TB.map(((ZB, TB) => {
        let GB = !1,
          vB = TB => {
            if (TB.preventDefault(), GB) return;
            GB = !0;
            let JB = kB(BB.state.field(NB).diagnostics, IB);
            JB && ZB.apply(BB, JB.from, JB.to)
          },
          {
            name: cB
          } = ZB,
          nB = JB[TB] ? cB.indexOf(JB[TB]) : -1,
          hB = nB < 0 ? cB : [cB.slice(0, nB), (0, oB.e)("u", cB.slice(nB, nB + 1)), cB.slice(nB + 1)],
          zB = ZB.markClass ? " " + ZB.markClass : "";
        return (0, oB.e)("button", {
          type: "button",
          class: "cm-diagnosticAction" + zB,
          onclick: vB,
          onmousedown: vB,
          "aria-label": ` Action: ${cB}${nB<0?"":` (access key "${JB[TB]})"`}.`
        }, hB)
      })), IB.source && (0, oB.e)("div", {
        class: "cm-diagnosticSource"
      }, IB.source))
    }
    class YB extends TB.o {
      constructor(BB) {
        super(), this.sev = BB
      }
      eq(BB) {
        return BB.sev == this.sev
      }
      toDOM() {
        return (0, oB.e)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class iB {
      constructor(BB, IB) {
        this.diagnostic = IB, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = OB(BB, IB, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class pB {
      constructor(BB) {
        this.view = BB, this.items = [];
        this.list = (0, oB.e)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: IB => {
            if (!(IB.ctrlKey || IB.altKey || IB.metaKey)) {
              if (27 == IB.keyCode) UB(this.view), this.view.focus();
              else if (38 == IB.keyCode || 33 == IB.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == IB.keyCode || 34 == IB.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == IB.keyCode) this.moveSelection(0);
              else if (35 == IB.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == IB.keyCode) this.view.focus();
              else {
                if (!(IB.keyCode >= 65 && IB.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: ZB
                  } = this.items[this.selectedIndex], TB = wB(ZB.actions);
                  for (let JB = 0; JB < TB.length; JB++)
                    if (TB[JB].toUpperCase().charCodeAt(0) == IB.keyCode) {
                      let IB = kB(this.view.state.field(NB).diagnostics, ZB);
                      IB && ZB.actions[JB].apply(BB, IB.from, IB.to)
                    }
                }
              }
              IB.preventDefault()
            }
          },
          onclick: BB => {
            for (let IB = 0; IB < this.items.length; IB++) this.items[IB].dom.contains(BB.target) && this.moveSelection(IB)
          }
        }), this.dom = (0, oB.e)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, oB.e)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => UB(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let BB = this.view.state.field(NB).selected;
        if (!BB) return -1;
        for (let IB = 0; IB < this.items.length; IB++)
          if (this.items[IB].diagnostic == BB.diagnostic) return IB;
        return -1
      }
      update() {
        let {
          diagnostics: BB,
          selected: IB
        } = this.view.state.field(NB), ZB = 0, TB = !1, JB = null, oB = new Set;
        for (BB.between(0, this.view.state.doc.length, ((BB, GB, vB) => {
            let {
              spec: kB
            } = vB;
            for (let cB of kB.diagnostics) {
              if (oB.has(cB)) continue;
              oB.add(cB);
              let BB, GB = -1;
              for (let IB = ZB; IB < this.items.length; IB++)
                if (this.items[IB].diagnostic == cB) {
                  GB = IB;
                  break
                } GB < 0 ? (BB = new iB(this.view, cB), this.items.splice(ZB, 0, BB), TB = !0) : (BB = this.items[GB], GB > ZB && (this.items.splice(ZB, GB - ZB), TB = !0)), IB && BB.diagnostic == IB.diagnostic ? BB.dom.hasAttribute("aria-selected") || (BB.dom.setAttribute("aria-selected", "true"), JB = BB) : BB.dom.hasAttribute("aria-selected") && BB.dom.removeAttribute("aria-selected"), ZB++
            }
          })); ZB < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) TB = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new iB(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), TB = !0), JB ? (this.list.setAttribute("aria-activedescendant", JB.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: JB.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: BB => {
            let {
              sel: IB,
              panel: ZB
            } = BB, TB = ZB.height / this.list.offsetHeight;
            IB.top < ZB.top ? this.list.scrollTop -= (ZB.top - IB.top) / TB : IB.bottom > ZB.bottom && (this.list.scrollTop += (IB.bottom - ZB.bottom) / TB)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), TB && this.sync()
      }
      sync() {
        let BB = this.list.firstChild;

        function IB() {
          let IB = BB;
          BB = IB.nextSibling, IB.remove()
        }
        for (let ZB of this.items)
          if (ZB.dom.parentNode == this.list) {
            for (; BB != ZB.dom;) IB();
            BB = ZB.dom.nextSibling
          } else this.list.insertBefore(ZB.dom, BB);
        for (; BB;) IB()
      }
      moveSelection(BB) {
        if (this.selectedIndex < 0) return;
        let IB = kB(this.view.state.field(NB).diagnostics, this.items[BB].diagnostic);
        IB && this.view.dispatch({
          selection: {
            anchor: IB.from,
            head: IB.to
          },
          scrollIntoView: !0,
          effects: FB.of(IB)
        })
      }
      static open(BB) {
        return new pB(BB)
      }
    }

    function aB(BB) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(BB)}</svg>')`
    }

    function HB(BB) {
      return aB(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${BB}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const MB = TB.i.baseTheme({
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
        backgroundImage: HB("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: HB("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: HB("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: HB("#66d")
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

    function jB(BB) {
      return "error" == BB ? 4 : "warning" == BB ? 3 : "info" == BB ? 2 : 1
    }

    function PB(BB) {
      let IB = "hint",
        ZB = 1;
      for (let TB of BB) {
        let BB = jB(TB.severity);
        BB > ZB && (ZB = BB, IB = TB.severity)
      }
      return IB
    }
    TB.k;
    const RB = [NB, TB.i.vT.compute([NB], (BB => {
      let {
        selected: IB,
        panel: ZB
      } = BB.field(NB);
      return IB && ZB && IB.from != IB.to ? TB.d.set([gB.range(IB.from, IB.to)]) : TB.d.none
    })), (0, TB.P)(qB, {
      hideOn: cB
    }), MB]
  },
  41394: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => VB,
      d: () => yB,
      g: () => SB
    });
    var TB = ZB(41349),
      JB = ZB(41342),
      oB = ZB(41364);
    const GB = "function" == typeof String.prototype.normalize ? BB => BB.normalize("NFKD") : BB => BB;
    class vB {
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.length,
          JB = arguments.length > 4 ? arguments[4] : void 0,
          oB = arguments.length > 5 ? arguments[5] : void 0;
        this.test = oB, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = BB.iterRange(ZB, TB), this.bufferStart = ZB, this.normalize = JB ? BB => JB(GB(BB)) : GB, this.query = this.normalize(IB)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, JB.Q)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let BB = this.peek();
          if (BB < 0) return this.done = !0, this;
          let IB = (0, JB.eb)(BB),
            ZB = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, JB.S)(BB);
          let TB = this.normalize(IB);
          if (TB.length)
            for (let JB = 0, oB = ZB;; JB++) {
              let BB = TB.charCodeAt(JB),
                GB = this.match(BB, oB, this.bufferPos + this.bufferStart);
              if (JB == TB.length - 1) {
                if (GB) return this.value = GB, this;
                break
              }
              oB == ZB && JB < IB.length && IB.charCodeAt(JB) == BB && oB++
            }
        }
      }
      match(BB, IB, ZB) {
        let TB = null;
        for (let JB = 0; JB < this.matches.length; JB += 2) {
          let IB = this.matches[JB],
            oB = !1;
          this.query.charCodeAt(IB) == BB && (IB == this.query.length - 1 ? TB = {
            from: this.matches[JB + 1],
            to: ZB
          } : (this.matches[JB]++, oB = !0)), oB || (this.matches.splice(JB, 2), JB -= 2)
        }
        return this.query.charCodeAt(0) == BB && (1 == this.query.length ? TB = {
          from: IB,
          to: ZB
        } : this.matches.push(1, IB)), TB && this.test && !this.test(TB.from, TB.to, this.buffer, this.bufferStart) && (TB = null), TB
      }
    }
    "undefined" != typeof Symbol && (vB.prototype[Symbol.iterator] = function() {
      return this
    });
    const kB = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      cB = "gm" + (null == /x/.unicode ? "" : "u");
    class nB {
      constructor(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : BB.length;
        if (this.text = BB, this.to = JB, this.curLine = "", this.done = !1, this.value = kB, /\\[sWDnr]|\n|\r|\[\^/.test(IB)) return new FB(BB, IB, ZB, TB, JB);
        this.re = new RegExp(IB, cB + ((null === ZB || void 0 === ZB ? void 0 : ZB.ignoreCase) ? "i" : "")), this.test = null === ZB || void 0 === ZB ? void 0 : ZB.test, this.iter = BB.iter();
        let oB = BB.lineAt(TB);
        this.curLineStart = oB.from, this.matchPos = NB(BB, TB), this.getLine(this.curLineStart)
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
          let IB = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (IB) {
            let ZB = this.curLineStart + IB.index,
              TB = ZB + IB[0].length;
            if (this.matchPos = NB(this.text, TB + (ZB == TB ? 1 : 0)), ZB == this.curLineStart + this.curLine.length && this.nextLine(), (ZB < TB || ZB > this.value.to) && (!this.test || this.test(ZB, TB, IB))) return this.value = {
              from: ZB,
              to: TB,
              match: IB
            }, this;
            BB = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), BB = 0
          }
        }
      }
    }
    const hB = new WeakMap;
    class zB {
      constructor(BB, IB) {
        this.from = BB, this.text = IB
      }
      get to() {
        return this.from + this.text.length
      }
      static get(BB, IB, ZB) {
        let TB = hB.get(BB);
        if (!TB || TB.from >= ZB || TB.to <= IB) {
          let TB = new zB(IB, BB.sliceString(IB, ZB));
          return hB.set(BB, TB), TB
        }
        if (TB.from == IB && TB.to == ZB) return TB;
        let {
          text: JB,
          from: oB
        } = TB;
        return oB > IB && (JB = BB.sliceString(IB, oB) + JB, oB = IB), TB.to < ZB && (JB += BB.sliceString(TB.to, ZB)), hB.set(BB, new zB(oB, JB)), new zB(IB, JB.slice(IB - oB, ZB - oB))
      }
    }
    class FB {
      constructor(BB, IB, ZB, TB, JB) {
        this.text = BB, this.to = JB, this.done = !1, this.value = kB, this.matchPos = NB(BB, TB), this.re = new RegExp(IB, cB + ((null === ZB || void 0 === ZB ? void 0 : ZB.ignoreCase) ? "i" : "")), this.test = null === ZB || void 0 === ZB ? void 0 : ZB.test, this.flat = zB.get(BB, TB, this.chunkEnd(TB + 5e3))
      }
      chunkEnd(BB) {
        return BB >= this.to ? this.to : this.text.lineAt(BB).to
      }
      next() {
        for (;;) {
          let BB = this.re.lastIndex = this.matchPos - this.flat.from,
            IB = this.re.exec(this.flat.text);
          if (IB && !IB[0] && IB.index == BB && (this.re.lastIndex = BB + 1, IB = this.re.exec(this.flat.text)), IB) {
            let BB = this.flat.from + IB.index,
              ZB = BB + IB[0].length;
            if ((this.flat.to >= this.to || IB.index + IB[0].length <= this.flat.text.length - 10) && (!this.test || this.test(BB, ZB, IB))) return this.value = {
              from: BB,
              to: ZB,
              match: IB
            }, this.matchPos = NB(this.text, ZB + (BB == ZB ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = zB.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function NB(BB, IB) {
      if (IB >= BB.length) return IB;
      let ZB, TB = BB.lineAt(IB);
      for (; IB < TB.to && (ZB = TB.text.charCodeAt(IB - TB.from)) >= 56320 && ZB < 57344;) IB++;
      return IB
    }
    "undefined" != typeof Symbol && (nB.prototype[Symbol.iterator] = FB.prototype[Symbol.iterator] = function() {
      return this
    });
    const gB = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      qB = JB.t.define({
        combine: BB => (0, JB.T)(BB, gB, {
          highlightWordAroundCursor: (BB, IB) => BB || IB,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function yB(BB) {
      let IB = [QB, CB];
      return BB && IB.push(qB.of(BB)), IB
    }
    const UB = TB.d.mark({
        class: "cm-selectionMatch"
      }),
      WB = TB.d.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function dB(BB, IB, ZB, TB) {
      return (0 == ZB || BB(IB.sliceDoc(ZB - 1, ZB)) != JB.j.Word) && (TB == IB.doc.length || BB(IB.sliceDoc(TB, TB + 1)) != JB.j.Word)
    }
    const CB = TB.m.fromClass(class {
        constructor(BB) {
          this.vT = this.getDeco(BB)
        }
        update(BB) {
          (BB.selectionSet || BB.docChanged || BB.viewportChanged) && (this.vT = this.getDeco(BB.view))
        }
        getDeco(BB) {
          let IB = BB.state.facet(qB),
            {
              state: ZB
            } = BB,
            oB = ZB.selection;
          if (oB.vq.length > 1) return TB.d.none;
          let GB, kB = oB.main,
            cB = null;
          if (kB.empty) {
            if (!IB.highlightWordAroundCursor) return TB.d.none;
            let BB = ZB.wordAt(kB.head);
            if (!BB) return TB.d.none;
            cB = ZB.charCategorizer(kB.head), GB = ZB.sliceDoc(BB.from, BB.to)
          } else {
            let BB = kB.to - kB.from;
            if (BB < IB.minSelectionLength || BB > 200) return TB.d.none;
            if (IB.wholeWords) {
              if (GB = ZB.sliceDoc(kB.from, kB.to), cB = ZB.charCategorizer(kB.head), !dB(cB, ZB, kB.from, kB.to) || ! function(BB, IB, ZB, TB) {
                  return BB(IB.sliceDoc(ZB, ZB + 1)) == JB.j.Word && BB(IB.sliceDoc(TB - 1, TB)) == JB.j.Word
                }(cB, ZB, kB.from, kB.to)) return TB.d.none
            } else if (GB = ZB.sliceDoc(kB.from, kB.to), !GB) return TB.d.none
          }
          let nB = [];
          for (let JB of BB.BBB) {
            let BB = new vB(ZB.doc, GB, JB.from, JB.to);
            for (; !BB.next().done;) {
              let {
                from: JB,
                to: oB
              } = BB.value;
              if ((!cB || dB(cB, ZB, JB, oB)) && (kB.empty && JB <= kB.from && oB >= kB.to ? nB.push(WB.range(JB, oB)) : (JB >= kB.to || oB <= kB.from) && nB.push(UB.range(JB, oB)), nB.length > IB.maxMatches)) return TB.d.none
            }
          }
          return TB.d.set(nB)
        }
      }, {
        vT: BB => BB.vT
      }),
      QB = TB.i.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const sB = JB.t.define({
      combine: BB => (0, JB.T)(BB, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: BB => new BI(BB),
        scrollToMatch: BB => TB.i.scrollIntoView(BB)
      })
    });
    class wB {
      constructor(BB) {
        this.search = BB.search, this.caseSensitive = !!BB.caseSensitive, this.literal = !!BB.literal, this.regexp = !!BB.regexp, this.replace = BB.replace || "", this.valid = !!this.search && (!this.regexp || function(BB) {
          try {
            return new RegExp(BB, cB), !0
          } catch (IB) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!BB.wholeWord, this.test = BB.test
      }
      unquote(BB) {
        return this.literal ? BB : BB.replace(/\\([nrt\\])/g, ((BB, IB) => "n" == IB ? "\n" : "r" == IB ? "\r" : "t" == IB ? "\t" : "\\"))
      }
      eq(BB) {
        return this.search == BB.search && this.replace == BB.replace && this.caseSensitive == BB.caseSensitive && this.regexp == BB.regexp && this.wholeWord == BB.wholeWord && this.test == BB.test
      }
      create() {
        return this.regexp ? new MB(this) : new iB(this)
      }
      getCursor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZB = arguments.length > 2 ? arguments[2] : void 0,
          TB = BB.doc ? BB : JB.q.create({
            doc: BB
          });
        return null == ZB && (ZB = TB.doc.length), this.regexp ? pB(this, TB, IB, ZB) : YB(this, TB, IB, ZB)
      }
    }
    class OB {
      constructor(BB) {
        this.spec = BB
      }
    }

    function YB(BB, IB, ZB, TB) {
      let oB;
      var GB, kB;
      return BB.wholeWord && (GB = IB.doc, kB = IB.charCategorizer(IB.selection.main.head), oB = (BB, IB, ZB, TB) => ((TB > BB || TB + ZB.length < IB) && (TB = Math.max(0, BB - 2), ZB = GB.sliceString(TB, Math.min(GB.length, IB + 2))), (kB(aB(ZB, BB - TB)) != JB.j.Word || kB(HB(ZB, BB - TB)) != JB.j.Word) && (kB(HB(ZB, IB - TB)) != JB.j.Word || kB(aB(ZB, IB - TB)) != JB.j.Word))), BB.test && (oB = function(BB, IB, ZB) {
        return (TB, JB, oB, GB) => {
          if (ZB && !ZB(TB, JB, oB, GB)) return !1;
          let vB = TB >= GB && JB <= GB + oB.length ? oB.slice(TB - GB, JB - GB) : IB.doc.sliceString(TB, JB);
          return BB(vB, IB, TB, JB)
        }
      }(BB.test, IB, oB)), new vB(IB.doc, BB.unquoted, ZB, TB, BB.caseSensitive ? void 0 : BB => BB.toLowerCase(), oB)
    }
    class iB extends OB {
      constructor(BB) {
        super(BB)
      }
      nextMatch(BB, IB, ZB) {
        let TB = YB(this.spec, BB, ZB, BB.doc.length).nextOverlapping();
        if (TB.done) {
          let ZB = Math.min(BB.doc.length, IB + this.spec.unquoted.length);
          TB = YB(this.spec, BB, 0, ZB).nextOverlapping()
        }
        return TB.done || TB.value.from == IB && TB.value.to == ZB ? null : TB.value
      }
      prevMatchInRange(BB, IB, ZB) {
        for (let TB = ZB;;) {
          let ZB = Math.max(IB, TB - 1e4 - this.spec.unquoted.length),
            JB = YB(this.spec, BB, ZB, TB),
            oB = null;
          for (; !JB.nextOverlapping().done;) oB = JB.value;
          if (oB) return oB;
          if (ZB == IB) return null;
          TB -= 1e4
        }
      }
      prevMatch(BB, IB, ZB) {
        let TB = this.prevMatchInRange(BB, 0, IB);
        return TB || (TB = this.prevMatchInRange(BB, Math.max(0, ZB - this.spec.unquoted.length), BB.doc.length)), !TB || TB.from == IB && TB.to == ZB ? null : TB
      }
      getReplacement(BB) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(BB, IB) {
        let ZB = YB(this.spec, BB, 0, BB.doc.length),
          TB = [];
        for (; !ZB.next().done;) {
          if (TB.length >= IB) return null;
          TB.push(ZB.value)
        }
        return TB
      }
      highlight(BB, IB, ZB, TB) {
        let JB = YB(this.spec, BB, Math.max(0, IB - this.spec.unquoted.length), Math.min(ZB + this.spec.unquoted.length, BB.doc.length));
        for (; !JB.next().done;) TB(JB.value.from, JB.value.to)
      }
    }

    function pB(BB, IB, ZB, TB) {
      let oB;
      var GB;
      return BB.wholeWord && (GB = IB.charCategorizer(IB.selection.main.head), oB = (BB, IB, ZB) => !ZB[0].length || (GB(aB(ZB.input, ZB.index)) != JB.j.Word || GB(HB(ZB.input, ZB.index)) != JB.j.Word) && (GB(HB(ZB.input, ZB.index + ZB[0].length)) != JB.j.Word || GB(aB(ZB.input, ZB.index + ZB[0].length)) != JB.j.Word)), BB.test && (oB = function(BB, IB, ZB) {
        return (TB, JB, oB) => (!ZB || ZB(TB, JB, oB)) && BB(oB[0], IB, TB, JB)
      }(BB.test, IB, oB)), new nB(IB.doc, BB.search, {
        ignoreCase: !BB.caseSensitive,
        test: oB
      }, ZB, TB)
    }

    function aB(BB, IB) {
      return BB.slice((0, JB._)(BB, IB, !1), IB)
    }

    function HB(BB, IB) {
      return BB.slice(IB, (0, JB._)(BB, IB))
    }
    class MB extends OB {
      nextMatch(BB, IB, ZB) {
        let TB = pB(this.spec, BB, ZB, BB.doc.length).next();
        return TB.done && (TB = pB(this.spec, BB, 0, IB).next()), TB.done ? null : TB.value
      }
      prevMatchInRange(BB, IB, ZB) {
        for (let TB = 1;; TB++) {
          let JB = Math.max(IB, ZB - 1e4 * TB),
            oB = pB(this.spec, BB, JB, ZB),
            GB = null;
          for (; !oB.next().done;) GB = oB.value;
          if (GB && (JB == IB || GB.from > JB + 10)) return GB;
          if (JB == IB) return null
        }
      }
      prevMatch(BB, IB, ZB) {
        return this.prevMatchInRange(BB, 0, IB) || this.prevMatchInRange(BB, ZB, BB.doc.length)
      }
      getReplacement(BB) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((IB, ZB) => {
          if ("&" == ZB) return BB.match[0];
          if ("$" == ZB) return "$";
          for (let TB = ZB.length; TB > 0; TB--) {
            let IB = +ZB.slice(0, TB);
            if (IB > 0 && IB < BB.match.length) return BB.match[IB] + ZB.slice(TB)
          }
          return IB
        }))
      }
      matchAll(BB, IB) {
        let ZB = pB(this.spec, BB, 0, BB.doc.length),
          TB = [];
        for (; !ZB.next().done;) {
          if (TB.length >= IB) return null;
          TB.push(ZB.value)
        }
        return TB
      }
      highlight(BB, IB, ZB, TB) {
        let JB = pB(this.spec, BB, Math.max(0, IB - 250), Math.min(ZB + 250, BB.doc.length));
        for (; !JB.next().done;) TB(JB.value.from, JB.value.to)
      }
    }
    const jB = JB.K.define(),
      PB = JB.K.define(),
      RB = JB.L.define({
        create: BB => new rB(xB(BB).create(), null),
        update(BB, IB) {
          for (let ZB of IB.effects) ZB.is(jB) ? BB = new rB(ZB.value.create(), BB.panel) : ZB.is(PB) && (BB = new rB(BB.query, ZB.value ? bB : null));
          return BB
        },
        provide: BB => TB.ib.from(BB, (BB => BB.panel))
      });
    class rB {
      constructor(BB, IB) {
        this.query = BB, this.panel = IB
      }
    }
    const mB = TB.d.mark({
        class: "cm-searchMatch"
      }),
      XB = TB.d.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      LB = TB.m.fromClass(class {
        constructor(BB) {
          this.view = BB, this.vT = this.highlight(BB.state.field(RB))
        }
        update(BB) {
          let IB = BB.state.field(RB);
          (IB != BB.startState.field(RB) || BB.docChanged || BB.selectionSet || BB.viewportChanged) && (this.vT = this.highlight(IB))
        }
        highlight(BB) {
          let {
            query: IB,
            panel: ZB
          } = BB;
          if (!ZB || !IB.spec.valid) return TB.d.none;
          let {
            view: oB
          } = this, GB = new JB.B;
          for (let TB = 0, JB = oB.BBB, vB = JB.length; TB < vB; TB++) {
            let {
              from: BB,
              to: ZB
            } = JB[TB];
            for (; TB < vB - 1 && ZB > JB[TB + 1].from - 500;) ZB = JB[++TB].to;
            IB.highlight(oB.state, BB, ZB, ((BB, IB) => {
              let ZB = oB.state.selection.vq.some((ZB => ZB.from == BB && ZB.to == IB));
              GB.add(BB, IB, ZB ? XB : mB)
            }))
          }
          return GB.finish()
        }
      }, {
        vT: BB => BB.vT
      });

    function eB(BB) {
      return IB => {
        let ZB = IB.state.field(RB, !1);
        return ZB && ZB.query.spec.valid ? BB(IB, ZB) : KB(IB)
      }
    }
    const uB = eB(((BB, IB) => {
        let {
          query: ZB
        } = IB, {
          to: TB
        } = BB.state.selection.main, oB = ZB.nextMatch(BB.state, TB, TB);
        if (!oB) return !1;
        let GB = JB.n.single(oB.from, oB.to),
          vB = BB.state.facet(sB);
        return BB.dispatch({
          selection: GB,
          effects: [JI(BB, oB), vB.scrollToMatch(GB.main, BB)],
          userEvent: "select.search"
        }), DB(BB), !0
      })),
      fB = eB(((BB, IB) => {
        let {
          query: ZB
        } = IB, {
          state: TB
        } = BB, {
          from: oB
        } = TB.selection.main, GB = ZB.prevMatch(TB, oB, oB);
        if (!GB) return !1;
        let vB = JB.n.single(GB.from, GB.to),
          kB = BB.state.facet(sB);
        return BB.dispatch({
          selection: vB,
          effects: [JI(BB, GB), kB.scrollToMatch(vB.main, BB)],
          userEvent: "select.search"
        }), DB(BB), !0
      })),
      lB = eB(((BB, IB) => {
        let {
          query: ZB
        } = IB, TB = ZB.matchAll(BB.state, 1e3);
        return !(!TB || !TB.length) && (BB.dispatch({
          selection: JB.n.create(TB.map((BB => JB.n.range(BB.from, BB.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      AB = eB(((BB, IB) => {
        let {
          query: ZB
        } = IB, {
          state: oB
        } = BB, {
          from: GB,
          to: vB
        } = oB.selection.main;
        if (oB.readOnly) return !1;
        let kB = ZB.nextMatch(oB, GB, GB);
        if (!kB) return !1;
        let cB, nB, hB = kB,
          zB = [],
          FB = [];
        hB.from == GB && hB.to == vB && (nB = oB.toText(ZB.getReplacement(hB)), zB.push({
          from: hB.from,
          to: hB.to,
          insert: nB
        }), hB = ZB.nextMatch(oB, hB.from, hB.to), FB.push(TB.i.announce.of(oB.phrase("replaced match on line $", oB.doc.lineAt(GB).number) + ".")));
        let NB = BB.state.changes(zB);
        return hB && (cB = JB.n.single(hB.from, hB.to).map(NB), FB.push(JI(BB, hB)), FB.push(oB.facet(sB).scrollToMatch(cB.main, BB))), BB.dispatch({
          changes: NB,
          selection: cB,
          effects: FB,
          userEvent: "input.replace"
        }), !0
      })),
      tB = eB(((BB, IB) => {
        let {
          query: ZB
        } = IB;
        if (BB.state.readOnly) return !1;
        let JB = ZB.matchAll(BB.state, 1e9).map((BB => {
          let {
            from: IB,
            to: TB
          } = BB;
          return {
            from: IB,
            to: TB,
            insert: ZB.getReplacement(BB)
          }
        }));
        if (!JB.length) return !1;
        let oB = BB.state.phrase("replaced $ matches", JB.length) + ".";
        return BB.dispatch({
          changes: JB,
          effects: TB.i.announce.of(oB),
          userEvent: "input.replace.all"
        }), !0
      }));

    function bB(BB) {
      return BB.state.facet(sB).createPanel(BB)
    }

    function xB(BB, IB) {
      var ZB, TB, JB, oB, GB;
      let vB = BB.selection.main,
        kB = vB.empty || vB.to > vB.from + 100 ? "" : BB.sliceDoc(vB.from, vB.to);
      if (IB && !kB) return IB;
      let cB = BB.facet(sB);
      return new wB({
        search: (null !== (ZB = null === IB || void 0 === IB ? void 0 : IB.literal) && void 0 !== ZB ? ZB : cB.literal) ? kB : kB.replace(/\n/g, "\\n"),
        caseSensitive: null !== (TB = null === IB || void 0 === IB ? void 0 : IB.caseSensitive) && void 0 !== TB ? TB : cB.caseSensitive,
        literal: null !== (JB = null === IB || void 0 === IB ? void 0 : IB.literal) && void 0 !== JB ? JB : cB.literal,
        regexp: null !== (oB = null === IB || void 0 === IB ? void 0 : IB.regexp) && void 0 !== oB ? oB : cB.regexp,
        wholeWord: null !== (GB = null === IB || void 0 === IB ? void 0 : IB.wholeWord) && void 0 !== GB ? GB : cB.wholeWord
      })
    }

    function EB(BB) {
      let IB = (0, TB.z)(BB, bB);
      return IB && IB.dom.querySelector("[main-field]")
    }

    function DB(BB) {
      let IB = EB(BB);
      IB && IB == BB.root.activeElement && IB.select()
    }
    const KB = BB => {
        let IB = BB.state.field(RB, !1);
        if (IB && IB.panel) {
          let ZB = EB(BB);
          if (ZB && ZB != BB.root.activeElement) {
            let TB = xB(BB.state, IB.query.spec);
            TB.valid && BB.dispatch({
              effects: jB.of(TB)
            }), ZB.focus(), ZB.select()
          }
        } else BB.dispatch({
          effects: [PB.of(!0), IB ? jB.of(xB(BB.state, IB.query.spec)) : JB.K.appendConfig.of(GI)]
        });
        return !0
      },
      VB = BB => {
        let IB = BB.state.field(RB, !1);
        if (!IB || !IB.panel) return !1;
        let ZB = (0, TB.z)(BB, bB);
        return ZB && ZB.dom.contains(BB.root.activeElement) && BB.focus(), BB.dispatch({
          effects: PB.of(!1)
        }), !0
      },
      SB = [{
        key: "Mod-f",
        run: KB,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: uB,
        shift: fB,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: uB,
        shift: fB,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: VB,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: BB => {
          let {
            state: IB,
            dispatch: ZB
          } = BB, TB = IB.selection;
          if (TB.vq.length > 1 || TB.main.empty) return !1;
          let {
            from: oB,
            to: GB
          } = TB.main, kB = [], cB = 0;
          for (let nB = new vB(IB.doc, IB.sliceDoc(oB, GB)); !nB.next().done;) {
            if (kB.length > 1e3) return !1;
            nB.value.from == oB && (cB = kB.length), kB.push(JB.n.range(nB.value.from, nB.value.to))
          }
          return ZB(IB.update({
            selection: JB.n.create(kB, cB),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: BB => {
          let {
            state: IB
          } = BB, ZB = String(IB.doc.lineAt(BB.state.selection.main.head).number), {
            close: oB,
            result: GB
          } = (0, TB.fb)(BB, {
            label: IB.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: ZB
            },
            focus: !0,
            submitLabel: IB.phrase("go")
          });
          return GB.then((ZB => {
            let GB = ZB && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(ZB.elements.line.value);
            if (!GB) return void BB.dispatch({
              effects: oB
            });
            let vB = IB.doc.lineAt(IB.selection.main.head),
              [, kB, cB, nB, hB] = GB,
              zB = nB ? +nB.slice(1) : 0,
              FB = cB ? +cB : vB.number;
            if (cB && hB) {
              let BB = FB / 100;
              kB && (BB = BB * ("-" == kB ? -1 : 1) + vB.number / IB.doc.lines), FB = Math.round(IB.doc.lines * BB)
            } else cB && kB && (FB = FB * ("-" == kB ? -1 : 1) + vB.number);
            let NB = IB.doc.line(Math.max(1, Math.min(IB.doc.lines, FB))),
              gB = JB.n.cursor(NB.from + Math.max(0, Math.min(zB, NB.length)));
            BB.dispatch({
              effects: [oB, TB.i.scrollIntoView(gB.from, {
                y: "center"
              })],
              selection: gB
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: BB => {
          let {
            state: IB,
            dispatch: ZB
          } = BB, {
            vq: oB
          } = IB.selection;
          if (oB.some((BB => BB.from === BB.to))) return (BB => {
            let {
              state: IB,
              dispatch: ZB
            } = BB, {
              selection: TB
            } = IB, oB = JB.n.create(TB.vq.map((BB => IB.wordAt(BB.head) || JB.n.cursor(BB.head))), TB.mainIndex);
            return !oB.eq(TB) && (ZB(IB.update({
              selection: oB
            })), !0)
          })({
            state: IB,
            dispatch: ZB
          });
          let GB = IB.sliceDoc(oB[0].from, oB[0].to);
          if (IB.selection.vq.some((BB => IB.sliceDoc(BB.from, BB.to) != GB))) return !1;
          let kB = function(BB, IB) {
            let {
              main: ZB,
              vq: TB
            } = BB.selection, JB = BB.wordAt(ZB.head), oB = JB && JB.from == ZB.from && JB.to == ZB.to;
            for (let GB = !1, kB = new vB(BB.doc, IB, TB[TB.length - 1].to);;) {
              if (kB.next(), !kB.done) {
                if (GB && TB.some((BB => BB.from == kB.value.from))) continue;
                if (oB) {
                  let IB = BB.wordAt(kB.value.from);
                  if (!IB || IB.from != kB.value.from || IB.to != kB.value.to) continue
                }
                return kB.value
              }
              if (GB) return null;
              kB = new vB(BB.doc, IB, 0, Math.max(0, TB[TB.length - 1].from - 1)), GB = !0
            }
          }(IB, GB);
          return !!kB && (ZB(IB.update({
            selection: IB.selection.addRange(JB.n.range(kB.from, kB.to), !1),
            effects: TB.i.scrollIntoView(kB.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class BI {
      constructor(BB) {
        this.view = BB;
        let IB = this.query = BB.state.field(RB).query.spec;

        function ZB(BB, IB, ZB) {
          return (0, oB.e)("button", {
            class: "cm-button",
            name: BB,
            onclick: IB,
            type: "button"
          }, ZB)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, oB.e)("input", {
          value: IB.search,
          placeholder: II(BB, "Find"),
          "aria-label": II(BB, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, oB.e)("input", {
          value: IB.replace,
          placeholder: II(BB, "Replace"),
          "aria-label": II(BB, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, oB.e)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: IB.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, oB.e)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: IB.regexp,
          onchange: this.commit
        }), this.wordField = (0, oB.e)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: IB.wholeWord,
          onchange: this.commit
        }), this.dom = (0, oB.e)("div", {
          onkeydown: BB => this.keydown(BB),
          class: "cm-search"
        }, [this.searchField, ZB("next", (() => uB(BB)), [II(BB, "next")]), ZB("prev", (() => fB(BB)), [II(BB, "previous")]), ZB("select", (() => lB(BB)), [II(BB, "all")]), (0, oB.e)("label", null, [this.caseField, II(BB, "match case")]), (0, oB.e)("label", null, [this.reField, II(BB, "regexp")]), (0, oB.e)("label", null, [this.wordField, II(BB, "by word")]), ...BB.state.readOnly ? [] : [(0, oB.e)("br"), this.replaceField, ZB("replace", (() => AB(BB)), [II(BB, "replace")]), ZB("replaceAll", (() => tB(BB)), [II(BB, "replace all")])], (0, oB.e)("button", {
          name: "close",
          onclick: () => VB(BB),
          "aria-label": II(BB, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let BB = new wB({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        BB.eq(this.query) || (this.query = BB, this.view.dispatch({
          effects: jB.of(BB)
        }))
      }
      keydown(BB) {
        (0, TB.cb)(this.view, BB, "search-panel") ? BB.preventDefault(): 13 == BB.keyCode && BB.target == this.searchField ? (BB.preventDefault(), (BB.shiftKey ? fB : uB)(this.view)) : 13 == BB.keyCode && BB.target == this.replaceField && (BB.preventDefault(), AB(this.view))
      }
      update(BB) {
        for (let IB of BB.transactions)
          for (let BB of IB.effects) BB.is(jB) && !BB.value.eq(this.query) && this.setQuery(BB.value)
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
        return this.view.state.facet(sB).top
      }
    }

    function II(BB, IB) {
      return BB.state.phrase(IB)
    }
    const ZI = 30,
      TI = /[\s\.,:;?!]/;

    function JI(BB, IB) {
      let {
        from: ZB,
        to: JB
      } = IB, oB = BB.state.doc.lineAt(ZB), GB = BB.state.doc.lineAt(JB).to, vB = Math.max(oB.from, ZB - ZI), kB = Math.min(GB, JB + ZI), cB = BB.state.sliceDoc(vB, kB);
      if (vB != oB.from)
        for (let TB = 0; TB < ZI; TB++)
          if (!TI.test(cB[TB + 1]) && TI.test(cB[TB])) {
            cB = cB.slice(TB);
            break
          } if (kB != GB)
        for (let TB = cB.length - 1; TB > cB.length - ZI; TB--)
          if (!TI.test(cB[TB - 1]) && TI.test(cB[TB])) {
            cB = cB.slice(0, TB);
            break
          } return TB.i.announce.of(`${BB.state.phrase("current match")}. ${cB} ${BB.state.phrase("on line")} ${oB.number}.`)
    }
    const oI = TB.i.baseTheme({
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
      GI = [RB, JB.A.low(LB), oI]
  },
  41349: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => MB,
      f: () => cI,
      i: () => OJ,
      k: () => vG,
      m: () => DI,
      o: () => aB,
      r: () => ao,
      s: () => DJ,
      v: () => oo,
      z: () => Vo,
      D: () => Eo,
      E: () => zG,
      J: () => yo,
      G: () => MG,
      N: () => Fo,
      P: () => xo,
      Q: () => PJ,
      U: () => iG,
      W: () => tI,
      X: () => Qo,
      $: () => Yo,
      cb: () => mJ,
      fb: () => TG,
      ib: () => ZG,
      jb: () => eo
    });
    for (var TB = ZB(41342), JB = ZB(41358), oB = {
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
      }, GB = {
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
      }, vB = "undefined" != typeof navigator && /Mac/.test(navigator.platform), kB = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), cB = 0; cB < 10; cB++) oB[48 + cB] = oB[96 + cB] = String(cB);
    for (cB = 1; cB <= 24; cB++) oB[cB + 111] = "F" + cB;
    for (cB = 65; cB <= 90; cB++) oB[cB] = String.fromCharCode(cB + 32), GB[cB] = String.fromCharCode(cB);
    for (var nB in oB) GB.hasOwnProperty(nB) || (GB[nB] = oB[nB]);
    var hB = ZB(41364);
    let zB = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      FB = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const NB = /Edge\/(\d+)/.exec(zB.userAgent),
      gB = /MSIE \d/.test(zB.userAgent),
      qB = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(zB.userAgent),
      yB = !!(gB || qB || NB),
      UB = !yB && /gecko\/(\d+)/i.test(zB.userAgent),
      WB = !yB && /Chrome\/(\d+)/.exec(zB.userAgent),
      dB = "webkitFontSmoothing" in FB.documentElement.style,
      CB = !yB && /Apple Computer/.test(zB.vendor),
      QB = CB && (/Mobile\/\w+/.test(zB.userAgent) || zB.maxTouchPoints > 2);
    var sB = {
      mac: QB || /Mac/.test(zB.platform),
      windows: /Win/.test(zB.platform),
      linux: /Linux|X11/.test(zB.platform),
      ie: yB,
      ie_version: gB ? FB.documentMode || 6 : qB ? +qB[1] : NB ? +NB[1] : 0,
      gecko: UB,
      gecko_version: UB ? +(/Firefox\/(\d+)/.exec(zB.userAgent) || [0, 0])[1] : 0,
      chrome: !!WB,
      chrome_version: WB ? +WB[1] : 0,
      ios: QB,
      android: /Android\b/.test(zB.userAgent),
      webkit: dB,
      webkit_version: dB ? +(/\bAppleWebKit\/(\d+)/.exec(zB.userAgent) || [0, 0])[1] : 0,
      safari: CB,
      safari_version: CB ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(zB.userAgent) || [0, 0])[1] : 0,
      tabSize: null != FB.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function wB(BB, IB) {
      for (let ZB in BB) "class" == ZB && IB.class ? IB.class += " " + BB.class : "style" == ZB && IB.style ? IB.style += ";" + BB.style : IB[ZB] = BB[ZB];
      return IB
    }
    const OB = Object.create(null);

    function YB(BB, IB, ZB) {
      if (BB == IB) return !0;
      BB || (BB = OB), IB || (IB = OB);
      let TB = Object.keys(BB),
        JB = Object.keys(IB);
      if (TB.length - (ZB && TB.indexOf(ZB) > -1 ? 1 : 0) != JB.length - (ZB && JB.indexOf(ZB) > -1 ? 1 : 0)) return !1;
      for (let oB of TB)
        if (oB != ZB && (-1 == JB.indexOf(oB) || BB[oB] !== IB[oB])) return !1;
      return !0
    }

    function iB(BB, IB, ZB) {
      let TB = !1;
      if (IB)
        for (let JB in IB) ZB && JB in ZB || (TB = !0, "style" == JB ? BB.style.cssText = "" : BB.removeAttribute(JB));
      if (ZB)
        for (let JB in ZB) IB && IB[JB] == ZB[JB] || (TB = !0, "style" == JB ? BB.style.cssText = ZB[JB] : BB.setAttribute(JB, ZB[JB]));
      return TB
    }

    function pB(BB) {
      let IB = Object.create(null);
      for (let ZB = 0; ZB < BB.attributes.length; ZB++) {
        let TB = BB.attributes[ZB];
        IB[TB.name] = TB.value
      }
      return IB
    }
    class aB {
      eq(BB) {
        return !1
      }
      updateDOM(BB, IB, ZB) {
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
      coordsAt(BB, IB, ZB) {
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
    var HB = function(BB) {
      return BB[BB.Text = 0] = "Text", BB[BB.WidgetBefore = 1] = "WidgetBefore", BB[BB.WidgetAfter = 2] = "WidgetAfter", BB[BB.WidgetRange = 3] = "WidgetRange", BB
    }(HB || (HB = {}));
    class MB extends TB.J {
      constructor(BB, IB, ZB, TB) {
        super(), this.startSide = BB, this.endSide = IB, this.widget = ZB, this.spec = TB
      }
      get heightRelevant() {
        return !1
      }
      static mark(BB) {
        return new jB(BB)
      }
      static widget(BB) {
        let IB = Math.max(-1e4, Math.min(1e4, BB.side || 0)),
          ZB = !!BB.block;
        return IB += ZB && !BB.inlineOrder ? IB > 0 ? 3e8 : -4e8 : IB > 0 ? 1e8 : -1e8, new RB(BB, IB, IB, ZB, BB.widget || null, !1)
      }
      static replace(BB) {
        let IB, ZB, TB = !!BB.block;
        if (BB.isBlockGap) IB = -5e8, ZB = 4e8;
        else {
          let {
            start: JB,
            end: oB
          } = rB(BB, TB);
          IB = (JB ? TB ? -3e8 : -1 : 5e8) - 1, ZB = 1 + (oB ? TB ? 2e8 : 1 : -6e8)
        }
        return new RB(BB, IB, ZB, TB, BB.widget || null, !0)
      }
      static line(BB) {
        return new PB(BB)
      }
      static set(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return TB.F.of(BB, IB)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    MB.none = TB.F.empty;
    class jB extends MB {
      constructor(BB) {
        let {
          start: IB,
          end: ZB
        } = rB(BB);
        super(IB ? -1 : 5e8, ZB ? 1 : -6e8, null, BB), this.tagName = BB.tagName || "span", this.attrs = BB.class && BB.attributes ? wB(BB.attributes, {
          class: BB.class
        }) : BB.class ? {
          class: BB.class
        } : BB.attributes || OB
      }
      eq(BB) {
        return this == BB || BB instanceof jB && this.tagName == BB.tagName && YB(this.attrs, BB.attrs)
      }
      range(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB;
        if (BB >= IB) throw new RangeError("Mark decorations may not be empty");
        return super.range(BB, IB)
      }
    }
    jB.prototype.point = !1;
    class PB extends MB {
      constructor(BB) {
        super(-2e8, -2e8, null, BB)
      }
      eq(BB) {
        return BB instanceof PB && this.spec.class == BB.spec.class && YB(this.spec.attributes, BB.spec.attributes)
      }
      range(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB;
        if (IB != BB) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(BB, IB)
      }
    }
    PB.prototype.mapMode = TB.w.TrackBefore, PB.prototype.point = !0;
    class RB extends MB {
      constructor(BB, IB, ZB, JB, oB, GB) {
        super(IB, ZB, oB, BB), this.block = JB, this.isReplace = GB, this.mapMode = JB ? IB <= 0 ? TB.w.TrackBefore : TB.w.TrackAfter : TB.w.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? HB.WidgetRange : this.startSide <= 0 ? HB.WidgetBefore : HB.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(BB) {
        return BB instanceof RB && (IB = this.widget, ZB = BB.widget, IB == ZB || !!(IB && ZB && IB.compare(ZB))) && this.block == BB.block && this.startSide == BB.startSide && this.endSide == BB.endSide;
        var IB, ZB
      }
      range(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB;
        if (this.isReplace && (BB > IB || BB == IB && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && IB != BB) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(BB, IB)
      }
    }

    function rB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: ZB,
          inclusiveEnd: TB
        } = BB;
      return null == ZB && (ZB = BB.inclusive), null == TB && (TB = BB.inclusive), {
        start: null !== ZB && void 0 !== ZB ? ZB : IB,
        end: null !== TB && void 0 !== TB ? TB : IB
      }
    }

    function mB(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        JB = ZB.length - 1;
      JB >= 0 && ZB[JB] + TB >= BB ? ZB[JB] = Math.max(ZB[JB], IB) : ZB.push(BB, IB)
    }
    RB.prototype.point = !0;
    class XB extends TB.J {
      constructor(BB, IB) {
        super(), this.tagName = BB, this.attributes = IB
      }
      eq(BB) {
        return BB == this || BB instanceof XB && this.tagName == BB.tagName && YB(this.attributes, BB.attributes)
      }
      static create(BB) {
        return new XB(BB.tagName, BB.attributes || OB)
      }
      static set(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return TB.F.of(BB, IB)
      }
    }

    function LB(BB) {
      let IB;
      return IB = 11 == BB.nodeType ? BB.getSelection ? BB : BB.ownerDocument : BB, IB.getSelection()
    }

    function eB(BB, IB) {
      return !!IB && (BB == IB || BB.contains(1 != IB.nodeType ? IB.parentNode : IB))
    }

    function uB(BB, IB) {
      if (!IB.anchorNode) return !1;
      try {
        return eB(BB, IB.anchorNode)
      } catch (ZB) {
        return !1
      }
    }

    function fB(BB) {
      return 3 == BB.nodeType ? TI(BB, 0, BB.nodeValue.length).getClientRects() : 1 == BB.nodeType ? BB.getClientRects() : []
    }

    function lB(BB, IB, ZB, TB) {
      return !!ZB && (bB(BB, IB, ZB, TB, -1) || bB(BB, IB, ZB, TB, 1))
    }

    function AB(BB) {
      for (var IB = 0;; IB++)
        if (!(BB = BB.previousSibling)) return IB
    }

    function tB(BB) {
      return 1 == BB.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(BB.nodeName)
    }

    function bB(BB, IB, ZB, TB, JB) {
      for (;;) {
        if (BB == ZB && IB == TB) return !0;
        if (IB == (JB < 0 ? 0 : xB(BB))) {
          if ("DIV" == BB.nodeName) return !1;
          let ZB = BB.parentNode;
          if (!ZB || 1 != ZB.nodeType) return !1;
          IB = AB(BB) + (JB < 0 ? 0 : 1), BB = ZB
        } else {
          if (1 != BB.nodeType) return !1;
          if (1 == (BB = BB.childNodes[IB + (JB < 0 ? -1 : 0)]).nodeType && "false" == BB.contentEditable) return !1;
          IB = JB < 0 ? xB(BB) : 0
        }
      }
    }

    function xB(BB) {
      return 3 == BB.nodeType ? BB.nodeValue.length : BB.childNodes.length
    }

    function EB(BB, IB) {
      let ZB = IB ? BB.left : BB.right;
      return {
        left: ZB,
        right: ZB,
        top: BB.top,
        bottom: BB.bottom
      }
    }

    function DB(BB) {
      let IB = BB.visualViewport;
      return IB ? {
        left: 0,
        right: IB.width,
        top: 0,
        bottom: IB.height
      } : {
        left: 0,
        right: BB.innerWidth,
        top: 0,
        bottom: BB.innerHeight
      }
    }

    function KB(BB, IB) {
      let ZB = IB.width / BB.offsetWidth,
        TB = IB.height / BB.offsetHeight;
      return (ZB > .995 && ZB < 1.005 || !isFinite(ZB) || Math.abs(IB.width - BB.offsetWidth) < 1) && (ZB = 1), (TB > .995 && TB < 1.005 || !isFinite(TB) || Math.abs(IB.height - BB.offsetHeight) < 1) && (TB = 1), {
        scaleX: ZB,
        scaleY: TB
      }
    }

    function VB(BB) {
      let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        ZB = BB.ownerDocument,
        TB = null,
        JB = null;
      for (let oB = BB.parentNode; oB && (oB != ZB.body && (IB && !TB || !JB));)
        if (1 == oB.nodeType) !JB && oB.scrollHeight > oB.clientHeight && (JB = oB), IB && !TB && oB.scrollWidth > oB.clientWidth && (TB = oB), oB = oB.assignedSlot || oB.parentNode;
        else {
          if (11 != oB.nodeType) break;
          oB = oB.host
        } return {
        x: TB,
        y: JB
      }
    }
    XB.prototype.startSide = XB.prototype.endSide = -1;
    class SB {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(BB) {
        return this.anchorNode == BB.anchorNode && this.anchorOffset == BB.anchorOffset && this.focusNode == BB.focusNode && this.focusOffset == BB.focusOffset
      }
      setRange(BB) {
        let {
          anchorNode: IB,
          focusNode: ZB
        } = BB;
        this.set(IB, Math.min(BB.anchorOffset, IB ? xB(IB) : 0), ZB, Math.min(BB.focusOffset, ZB ? xB(ZB) : 0))
      }
      set(BB, IB, ZB, TB) {
        this.anchorNode = BB, this.anchorOffset = IB, this.focusNode = ZB, this.focusOffset = TB
      }
    }
    let BI, II = null;

    function ZI(BB) {
      if (BB.setActive) return BB.setActive();
      if (II) return BB.focus(II);
      let IB = [];
      for (let ZB = BB; ZB && (IB.push(ZB, ZB.scrollTop, ZB.scrollLeft), ZB != ZB.ownerDocument); ZB = ZB.parentNode);
      if (BB.focus(null == II ? {
          get preventScroll() {
            return II = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !II) {
        II = !1;
        for (let BB = 0; BB < IB.length;) {
          let ZB = IB[BB++],
            TB = IB[BB++],
            JB = IB[BB++];
          ZB.scrollTop != TB && (ZB.scrollTop = TB), ZB.scrollLeft != JB && (ZB.scrollLeft = JB)
        }
      }
    }

    function TI(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : IB,
        TB = BI || (BI = document.createRange());
      return TB.setEnd(BB, ZB), TB.setStart(BB, IB), TB
    }

    function JI(BB, IB, ZB, TB) {
      let JB = {
        key: IB,
        code: IB,
        keyCode: ZB,
        which: ZB,
        cancelable: !0
      };
      TB && ({
        altKey: JB.altKey,
        ctrlKey: JB.ctrlKey,
        shiftKey: JB.shiftKey,
        metaKey: JB.metaKey
      } = TB);
      let oB = new KeyboardEvent("keydown", JB);
      oB.synthetic = !0, BB.dispatchEvent(oB);
      let GB = new KeyboardEvent("keyup", JB);
      return GB.synthetic = !0, BB.dispatchEvent(GB), oB.defaultPrevented || GB.defaultPrevented
    }

    function oI(BB) {
      return BB instanceof Window ? BB.pageYOffset > Math.max(0, BB.document.documentElement.scrollHeight - BB.innerHeight - 4) : BB.scrollTop > Math.max(1, BB.scrollHeight - BB.clientHeight - 4)
    }

    function GI(BB, IB) {
      for (let ZB = BB, TB = IB;;) {
        if (3 == ZB.nodeType && TB > 0) return {
          node: ZB,
          offset: TB
        };
        if (1 == ZB.nodeType && TB > 0) {
          if ("false" == ZB.contentEditable) return null;
          ZB = ZB.childNodes[TB - 1], TB = xB(ZB)
        } else {
          if (!ZB.parentNode || tB(ZB)) return null;
          TB = AB(ZB), ZB = ZB.parentNode
        }
      }
    }

    function vI(BB, IB) {
      for (let ZB = BB, TB = IB;;) {
        if (3 == ZB.nodeType && TB < ZB.nodeValue.length) return {
          node: ZB,
          offset: TB
        };
        if (1 == ZB.nodeType && TB < ZB.childNodes.length) {
          if ("false" == ZB.contentEditable) return null;
          ZB = ZB.childNodes[TB], TB = 0
        } else {
          if (!ZB.parentNode || tB(ZB)) return null;
          TB = AB(ZB) + 1, ZB = ZB.parentNode
        }
      }
    }
    sB.safari && sB.safari_version >= 26 && (II = !1);
    class kI {
      constructor(BB, IB) {
        let ZB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = BB, this.offset = IB, this.precise = ZB
      }
      static before(BB, IB) {
        return new kI(BB.parentNode, AB(BB), IB)
      }
      static after(BB, IB) {
        return new kI(BB.parentNode, AB(BB) + 1, IB)
      }
    }
    var cI = function(BB) {
      return BB[BB.LTR = 0] = "LTR", BB[BB.RTL = 1] = "RTL", BB
    }(cI || (cI = {}));
    const nI = cI.LTR,
      hI = cI.RTL;

    function zI(BB) {
      let IB = [];
      for (let ZB = 0; ZB < BB.length; ZB++) IB.push(1 << +BB[ZB]);
      return IB
    }
    const FI = zI("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      NI = zI("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      gI = Object.create(null),
      qI = [];
    for (let jG of ["()", "[]", "{}"]) {
      let BB = jG.charCodeAt(0),
        IB = jG.charCodeAt(1);
      gI[BB] = IB, gI[IB] = -BB
    }

    function yI(BB) {
      return BB <= 247 ? FI[BB] : 1424 <= BB && BB <= 1524 ? 2 : 1536 <= BB && BB <= 1785 ? NI[BB - 1536] : 1774 <= BB && BB <= 2220 ? 4 : 8192 <= BB && BB <= 8204 ? 256 : 64336 <= BB && BB <= 65023 ? 4 : 1
    }
    const UI = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class WI {
      get dir() {
        return this.level % 2 ? hI : nI
      }
      constructor(BB, IB, ZB) {
        this.from = BB, this.to = IB, this.level = ZB
      }
      side(BB, IB) {
        return this.dir == IB == BB ? this.to : this.from
      }
      forward(BB, IB) {
        return BB == (this.dir == IB)
      }
      static find(BB, IB, ZB, TB) {
        let JB = -1;
        for (let oB = 0; oB < BB.length; oB++) {
          let GB = BB[oB];
          if (GB.from <= IB && GB.to >= IB) {
            if (GB.level == ZB) return oB;
            (JB < 0 || (0 != TB ? TB < 0 ? GB.from < IB : GB.to > IB : BB[JB].level > GB.level)) && (JB = oB)
          }
        }
        if (JB < 0) throw new RangeError("Index out of range");
        return JB
      }
    }

    function dI(BB, IB) {
      if (BB.length != IB.length) return !1;
      for (let ZB = 0; ZB < BB.length; ZB++) {
        let TB = BB[ZB],
          JB = IB[ZB];
        if (TB.from != JB.from || TB.to != JB.to || TB.direction != JB.direction || !dI(TB.inner, JB.inner)) return !1
      }
      return !0
    }
    const CI = [];

    function QI(BB, IB, ZB, TB, JB, oB, GB) {
      let vB = TB % 2 ? 2 : 1;
      if (TB % 2 == JB % 2)
        for (let kB = IB, cB = 0; kB < ZB;) {
          let IB = !0,
            nB = !1;
          if (cB == oB.length || kB < oB[cB].from) {
            let BB = CI[kB];
            BB != vB && (IB = !1, nB = 16 == BB)
          }
          let hB = IB || 1 != vB ? null : [],
            zB = IB ? TB : TB + 1,
            FB = kB;
          BB: for (;;)
            if (cB < oB.length && FB == oB[cB].from) {
              if (nB) break BB;
              let NB = oB[cB];
              if (!IB)
                for (let BB = NB.to, IB = cB + 1;;) {
                  if (BB == ZB) break BB;
                  if (!(IB < oB.length && oB[IB].from == BB)) {
                    if (CI[BB] == vB) break BB;
                    break
                  }
                  BB = oB[IB++].to
                }
              if (cB++, hB) hB.push(NB);
              else {
                NB.from > kB && GB.push(new WI(kB, NB.from, zB)), sI(BB, NB.direction == nI != !(zB % 2) ? TB + 1 : TB, JB, NB.inner, NB.from, NB.to, GB), kB = NB.to
              }
              FB = NB.to
            } else {
              if (FB == ZB || (IB ? CI[FB] != vB : CI[FB] == vB)) break;
              FB++
            } hB ? QI(BB, kB, FB, TB + 1, JB, hB, GB) : kB < FB && GB.push(new WI(kB, FB, zB)), kB = FB
        } else
          for (let kB = ZB, cB = oB.length; kB > IB;) {
            let ZB = !0,
              nB = !1;
            if (!cB || kB > oB[cB - 1].to) {
              let BB = CI[kB - 1];
              BB != vB && (ZB = !1, nB = 16 == BB)
            }
            let hB = ZB || 1 != vB ? null : [],
              zB = ZB ? TB : TB + 1,
              FB = kB;
            BB: for (;;)
              if (cB && FB == oB[cB - 1].to) {
                if (nB) break BB;
                let NB = oB[--cB];
                if (!ZB)
                  for (let BB = NB.from, ZB = cB;;) {
                    if (BB == IB) break BB;
                    if (!ZB || oB[ZB - 1].to != BB) {
                      if (CI[BB - 1] == vB) break BB;
                      break
                    }
                    BB = oB[--ZB].from
                  }
                if (hB) hB.push(NB);
                else {
                  NB.to < kB && GB.push(new WI(NB.to, kB, zB)), sI(BB, NB.direction == nI != !(zB % 2) ? TB + 1 : TB, JB, NB.inner, NB.from, NB.to, GB), kB = NB.from
                }
                FB = NB.from
              } else {
                if (FB == IB || (ZB ? CI[FB - 1] != vB : CI[FB - 1] == vB)) break;
                FB--
              } hB ? QI(BB, FB, kB, TB + 1, JB, hB, GB) : FB < kB && GB.push(new WI(FB, kB, zB)), kB = FB
          }
    }

    function sI(BB, IB, ZB, TB, JB, oB, GB) {
      let vB = IB % 2 ? 2 : 1;
      ! function(BB, IB, ZB, TB, JB) {
        for (let oB = 0; oB <= TB.length; oB++) {
          let GB = oB ? TB[oB - 1].to : IB,
            vB = oB < TB.length ? TB[oB].from : ZB,
            kB = oB ? 256 : JB;
          for (let IB = GB, ZB = kB, TB = kB; IB < vB; IB++) {
            let JB = yI(BB.charCodeAt(IB));
            512 == JB ? JB = ZB : 8 == JB && 4 == TB && (JB = 16), CI[IB] = 4 == JB ? 2 : JB, 7 & JB && (TB = JB), ZB = JB
          }
          for (let BB = GB, IB = kB, TB = kB; BB < vB; BB++) {
            let JB = CI[BB];
            if (128 == JB) BB < vB - 1 && IB == CI[BB + 1] && 24 & IB ? JB = CI[BB] = IB : CI[BB] = 256;
            else if (64 == JB) {
              let JB = BB + 1;
              for (; JB < vB && 64 == CI[JB];) JB++;
              let oB = BB && 8 == IB || JB < ZB && 8 == CI[JB] ? 1 == TB ? 1 : 8 : 256;
              for (let IB = BB; IB < JB; IB++) CI[IB] = oB;
              BB = JB - 1
            } else 8 == JB && 1 == TB && (CI[BB] = 1);
            IB = JB, 7 & JB && (TB = JB)
          }
        }
      }(BB, JB, oB, TB, vB),
      function(BB, IB, ZB, TB, JB) {
        let oB = 1 == JB ? 2 : 1;
        for (let GB = 0, vB = 0, kB = 0; GB <= TB.length; GB++) {
          let cB = GB ? TB[GB - 1].to : IB,
            nB = GB < TB.length ? TB[GB].from : ZB;
          for (let IB, ZB, TB, GB = cB; GB < nB; GB++)
            if (ZB = gI[IB = BB.charCodeAt(GB)])
              if (ZB < 0) {
                for (let BB = vB - 3; BB >= 0; BB -= 3)
                  if (qI[BB + 1] == -ZB) {
                    let IB = qI[BB + 2],
                      ZB = 2 & IB ? JB : 4 & IB ? 1 & IB ? oB : JB : 0;
                    ZB && (CI[GB] = CI[qI[BB]] = ZB), vB = BB;
                    break
                  }
              } else {
                if (189 == qI.length) break;
                qI[vB++] = GB, qI[vB++] = IB, qI[vB++] = kB
              }
          else if (2 == (TB = CI[GB]) || 1 == TB) {
            let BB = TB == JB;
            kB = BB ? 0 : 1;
            for (let IB = vB - 3; IB >= 0; IB -= 3) {
              let ZB = qI[IB + 2];
              if (2 & ZB) break;
              if (BB) qI[IB + 2] |= 2;
              else {
                if (4 & ZB) break;
                qI[IB + 2] |= 4
              }
            }
          }
        }
      }(BB, JB, oB, TB, vB),
      function(BB, IB, ZB, TB) {
        for (let JB = 0, oB = TB; JB <= ZB.length; JB++) {
          let GB = JB ? ZB[JB - 1].to : BB,
            vB = JB < ZB.length ? ZB[JB].from : IB;
          for (let kB = GB; kB < vB;) {
            let GB = CI[kB];
            if (256 == GB) {
              let GB = kB + 1;
              for (;;)
                if (GB == vB) {
                  if (JB == ZB.length) break;
                  GB = ZB[JB++].to, vB = JB < ZB.length ? ZB[JB].from : IB
                } else {
                  if (256 != CI[GB]) break;
                  GB++
                } let cB = 1 == oB,
                nB = cB == (1 == (GB < IB ? CI[GB] : TB)) ? cB ? 1 : 2 : TB;
              for (let IB = GB, TB = JB, oB = TB ? ZB[TB - 1].to : BB; IB > kB;) IB == oB && (IB = ZB[--TB].from, oB = TB ? ZB[TB - 1].to : BB), CI[--IB] = nB;
              kB = GB
            } else oB = GB, kB++
          }
        }
      }(JB, oB, TB, vB), QI(BB, JB, oB, IB, ZB, TB, GB)
    }

    function wI(BB, IB, ZB) {
      if (!BB) return [new WI(0, 0, IB == hI ? 1 : 0)];
      if (IB == nI && !ZB.length && !UI.test(BB)) return OI(BB.length);
      if (ZB.length)
        for (; BB.length > CI.length;) CI[CI.length] = 256;
      let TB = [],
        JB = IB == nI ? 0 : 1;
      return sI(BB, JB, JB, ZB, 0, BB.length, TB), TB
    }

    function OI(BB) {
      return [new WI(0, BB, 0)]
    }
    let YI = "";

    function iI(BB, IB, ZB, JB, oB) {
      var GB;
      let vB = JB.head - BB.from,
        kB = WI.find(IB, vB, null !== (GB = JB.bidiLevel) && void 0 !== GB ? GB : -1, JB.assoc),
        cB = IB[kB],
        nB = cB.side(oB, ZB);
      if (vB == nB) {
        let BB = kB += oB ? 1 : -1;
        if (BB < 0 || BB >= IB.length) return null;
        cB = IB[kB = BB], vB = cB.side(!oB, ZB), nB = cB.side(oB, ZB)
      }
      let hB = (0, TB._)(BB.text, vB, cB.forward(oB, ZB));
      (hB < cB.from || hB > cB.to) && (hB = nB), YI = BB.text.slice(Math.min(vB, hB), Math.max(vB, hB));
      let zB = kB == (oB ? IB.length - 1 : 0) ? null : IB[kB + (oB ? 1 : -1)];
      return zB && hB == nB && zB.level + (oB ? 0 : 1) < cB.level ? TB.n.cursor(zB.side(!oB, ZB) + BB.from, zB.forward(oB, ZB) ? 1 : -1, zB.level) : TB.n.cursor(hB + BB.from, cB.forward(oB, ZB) ? -1 : 1, cB.level)
    }

    function pI(BB, IB, ZB) {
      for (let TB = IB; TB < ZB; TB++) {
        let IB = yI(BB.charCodeAt(TB));
        if (1 == IB) return nI;
        if (2 == IB || 4 == IB) return hI
      }
      return nI
    }
    const aI = TB.t.define(),
      HI = TB.t.define(),
      MI = TB.t.define(),
      jI = TB.t.define(),
      PI = TB.t.define(),
      RI = TB.t.define(),
      rI = TB.t.define(),
      mI = TB.t.define(),
      XI = TB.t.define(),
      LI = TB.t.define({
        combine: BB => BB.some((BB => BB))
      }),
      eI = TB.t.define({
        combine: BB => BB.some((BB => BB))
      }),
      uI = TB.t.define();
    class fI {
      constructor(BB, IB, ZB, TB, JB) {
        let oB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = BB, this.y = IB, this.x = ZB, this.yMargin = TB, this.xMargin = JB, this.isSnapshot = oB
      }
      map(BB) {
        return BB.empty ? this : new fI(this.range.map(BB), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(BB) {
        return this.range.to <= BB.doc.length ? this : new fI(TB.n.cursor(BB.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const lI = TB.K.define({
        map: (BB, IB) => BB.map(IB)
      }),
      AI = TB.K.define();

    function tI(BB, IB, ZB) {
      let TB = BB.facet(jI);
      TB.length ? TB[0](IB) : window.onerror && window.onerror(String(IB), ZB, void 0, void 0, IB) || (ZB ? console.error(ZB + ":", IB) : console.error(IB))
    }
    const bI = TB.t.define({
      combine: BB => !BB.length || BB[0]
    });
    let xI = 0;
    const EI = TB.t.define({
      combine: BB => BB.filter(((IB, ZB) => {
        for (let TB = 0; TB < ZB; TB++)
          if (BB[TB].plugin == IB.plugin) return !1;
        return !0
      }))
    });
    class DI {
      constructor(BB, IB, ZB, TB, JB) {
        this.id = BB, this.create = IB, this.domEventHandlers = ZB, this.domEventObservers = TB, this.baseExtensions = JB(this), this.extension = this.baseExtensions.concat(EI.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(BB) {
        return this.baseExtensions.concat(EI.of({
          plugin: this,
          arg: BB
        }))
      }
      static define(BB, IB) {
        const {
          eventHandlers: ZB,
          eventObservers: TB,
          provide: JB,
          vT: oB
        } = IB || {};
        return new DI(xI++, BB, ZB, TB, (BB => {
          let IB = [];
          return oB && IB.push(BZ.of((IB => {
            let ZB = IB.plugin(BB);
            return ZB ? oB(ZB) : MB.none
          }))), JB && IB.push(JB(BB)), IB
        }))
      }
      static fromClass(BB, IB) {
        return DI.define(((IB, ZB) => new BB(IB, ZB)), IB)
      }
    }
    class KI {
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
            } catch (IB) {
              if (tI(BB.state, IB, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (ZB) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(BB, this.spec.arg)
        } catch (IB) {
          tI(BB.state, IB, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(BB) {
        var IB;
        if (null === (IB = this.value) || void 0 === IB ? void 0 : IB.destroy) try {
          this.value.destroy()
        } catch (ZB) {
          tI(BB.state, ZB, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const VI = TB.t.define(),
      SI = TB.t.define(),
      BZ = TB.t.define(),
      IZ = TB.t.define(),
      ZZ = TB.t.define(),
      TZ = TB.t.define(),
      JZ = TB.t.define();

    function oZ(BB, IB) {
      let ZB = BB.state.facet(JZ);
      if (!ZB.length) return ZB;
      let JB = ZB.map((IB => IB instanceof Function ? IB(BB) : IB)),
        oB = [];
      return TB.F.spans(JB, IB.from, IB.to, {
        point() {},
        span(BB, ZB, TB, JB) {
          let GB = BB - IB.from,
            vB = ZB - IB.from,
            kB = oB;
          for (let oB = TB.length - 1; oB >= 0; oB--, JB--) {
            let BB, ZB = TB[oB].spec.bidiIsolate;
            if (null == ZB && (ZB = pI(IB.text, GB, vB)), JB > 0 && kB.length && (BB = kB[kB.length - 1]).to == GB && BB.direction == ZB) BB.to = vB, kB = BB.inner;
            else {
              let BB = {
                from: GB,
                to: vB,
                direction: ZB,
                inner: []
              };
              kB.push(BB), kB = BB.inner
            }
          }
        }
      }), oB
    }
    const GZ = TB.t.define();

    function vZ(BB) {
      let IB = 0,
        ZB = 0,
        TB = 0,
        JB = 0;
      for (let oB of BB.state.facet(GZ)) {
        let GB = oB(BB);
        GB && (null != GB.left && (IB = Math.max(IB, GB.left)), null != GB.right && (ZB = Math.max(ZB, GB.right)), null != GB.top && (TB = Math.max(TB, GB.top)), null != GB.bottom && (JB = Math.max(JB, GB.bottom)))
      }
      return {
        left: IB,
        right: ZB,
        top: TB,
        bottom: JB
      }
    }
    const kZ = TB.t.define();
    class cZ {
      constructor(BB, IB, ZB, TB) {
        this.fromA = BB, this.toA = IB, this.fromB = ZB, this.toB = TB
      }
      join(BB) {
        return new cZ(Math.min(this.fromA, BB.fromA), Math.max(this.toA, BB.toA), Math.min(this.fromB, BB.fromB), Math.max(this.toB, BB.toB))
      }
      addToSet(BB) {
        let IB = BB.length,
          ZB = this;
        for (; IB > 0; IB--) {
          let TB = BB[IB - 1];
          if (!(TB.fromA > ZB.toA)) {
            if (TB.toA < ZB.fromA) break;
            ZB = ZB.join(TB), BB.splice(IB - 1, 1)
          }
        }
        return BB.splice(IB, 0, ZB), BB
      }
      static extendWithRanges(BB, IB) {
        if (0 == IB.length) return BB;
        let ZB = [];
        for (let TB = 0, JB = 0, oB = 0;;) {
          let GB = TB < BB.length ? BB[TB].fromB : 1e9,
            vB = JB < IB.length ? IB[JB] : 1e9,
            kB = Math.min(GB, vB);
          if (1e9 == kB) break;
          let cB = kB + oB,
            nB = kB,
            hB = cB;
          for (;;)
            if (JB < IB.length && IB[JB] <= nB) {
              let ZB = IB[JB + 1];
              JB += 2, nB = Math.max(nB, ZB);
              for (let IB = TB; IB < BB.length && BB[IB].fromB <= nB; IB++) oB = BB[IB].toA - BB[IB].toB;
              hB = Math.max(hB, ZB + oB)
            } else {
              if (!(TB < BB.length && BB[TB].fromB <= nB)) break;
              {
                let IB = BB[TB++];
                nB = Math.max(nB, IB.toB), hB = Math.max(hB, IB.toA), oB = IB.toA - IB.toB
              }
            } ZB.push(new cZ(cB, hB, kB, nB))
        }
        return ZB
      }
    }
    class nZ {
      constructor(BB, IB, ZB) {
        this.view = BB, this.state = IB, this.transactions = ZB, this.flags = 0, this.startState = BB.state, this.changes = TB.ChangeSet.empty(this.startState.doc.length);
        for (let TB of ZB) this.changes = this.changes.compose(TB.changes);
        let JB = [];
        this.changes.iterChangedRanges(((BB, IB, ZB, TB) => JB.push(new cZ(BB, IB, ZB, TB)))), this.changedRanges = JB
      }
      static create(BB, IB, ZB) {
        return new nZ(BB, IB, ZB)
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
    const hZ = [];
    class zZ {
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = BB, this.length = IB, this.flags = ZB, this.parent = null, BB.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return hZ
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
          BB && function(BB, IB) {
            for (let ZB = BB.attributes.length - 1; ZB >= 0; ZB--) {
              let TB = BB.attributes[ZB].name;
              null == IB[TB] && BB.removeAttribute(TB)
            }
            for (let ZB in IB) {
              let TB = IB[ZB];
              "style" == ZB ? BB.style.cssText = TB : BB.getAttribute(ZB) != TB && BB.setAttribute(ZB, TB)
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
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let ZB of this.children) {
          if (ZB == BB) return IB;
          IB += ZB.length + ZB.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(BB) {
        return this.posBefore(BB) + BB.length
      }
      covers(BB) {
        return !0
      }
      coordsIn(BB, IB) {
        return null
      }
      domPosFor(BB, IB) {
        let ZB = AB(this.dom),
          TB = this.length ? BB > 0 : IB > 0;
        return new kI(this.parent.dom, ZB + (TB ? 1 : 0), 0 == BB || BB == this.length)
      }
      markDirty(BB) {
        this.flags &= -3, BB && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let BB = this; BB; BB = BB.parent)
          if (BB instanceof gZ) return BB;
        return null
      }
      static get(BB) {
        return BB.cmTile
      }
    }
    class FZ extends zZ {
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
        let IB, ZB = this.dom,
          TB = null,
          JB = (null === BB || void 0 === BB ? void 0 : BB.node) == ZB ? BB : null,
          oB = 0;
        for (let GB of this.children) {
          if (GB.sync(BB), oB += GB.length + GB.breakAfter, IB = TB ? TB.nextSibling : ZB.firstChild, JB && IB != GB.dom && (JB.written = !0), GB.dom.parentNode == ZB)
            for (; IB && IB != GB.dom;) IB = NZ(IB);
          else ZB.insertBefore(GB.dom, IB);
          TB = GB.dom
        }
        for (IB = TB ? TB.nextSibling : ZB.firstChild, JB && IB && (JB.written = !0); IB;) IB = NZ(IB);
        this.length = oB
      }
    }

    function NZ(BB) {
      let IB = BB.nextSibling;
      return BB.parentNode.removeChild(BB), IB
    }
    class gZ extends FZ {
      constructor(BB, IB) {
        super(IB), this.view = BB
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
          let IB = zZ.get(BB);
          if (IB && this.owns(IB)) return IB;
          BB = BB.parentNode
        }
      }
      blockTiles(BB) {
        for (let IB = [], ZB = this, TB = 0, JB = 0;;)
          if (TB == ZB.children.length) {
            if (!IB.length) return;
            ZB = ZB.parent, ZB.breakAfter && JB++, TB = IB.pop()
          } else {
            let oB = ZB.children[TB++];
            if (oB instanceof qZ) IB.push(TB), ZB = oB, TB = 0;
            else {
              let IB = JB + oB.length,
                ZB = BB(oB, JB);
              if (void 0 !== ZB) return ZB;
              JB = IB + oB.breakAfter
            }
          }
      }
      resolveBlock(BB, IB) {
        let ZB, TB, JB = -1,
          oB = -1;
        if (this.blockTiles(((GB, vB) => {
            let kB = vB + GB.length;
            if (BB >= vB && BB <= kB) {
              if (GB.isWidget() && IB >= -1 && IB <= 1) {
                if (32 & GB.flags) return !0;
                16 & GB.flags && (ZB = void 0)
              }(vB < BB || BB == kB && (IB < -1 ? GB.length : GB.covers(1))) && (!ZB || !GB.isWidget() && ZB.isWidget()) && (ZB = GB, JB = BB - vB), (kB > BB || BB == vB && (IB > 1 ? GB.length : GB.covers(-1))) && (!TB || !GB.isWidget() && TB.isWidget()) && (TB = GB, oB = BB - vB)
            }
          })), !ZB && !TB) throw new Error("No tile at position " + BB);
        return ZB && IB < 0 || !TB ? {
          tile: ZB,
          offset: JB
        } : {
          tile: TB,
          offset: oB
        }
      }
    }
    class qZ extends FZ {
      constructor(BB, IB) {
        super(BB), this.wrapper = IB
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
      static of (BB, IB) {
        let ZB = new qZ(IB || document.createElement(BB.tagName), BB);
        return IB || (ZB.flags |= 4), ZB
      }
    }
    class yZ extends FZ {
      constructor(BB, IB) {
        super(BB), this.attrs = IB
      }
      isLine() {
        return !0
      }
      static start(BB, IB, ZB) {
        let TB = new yZ(IB || document.createElement("div"), BB);
        return IB && ZB || (TB.flags |= 4), TB
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(BB, IB, ZB) {
        let TB = null,
          JB = -1,
          oB = null,
          GB = -1;
        ! function BB(vB, kB) {
          for (let cB = 0, nB = 0; cB < vB.children.length && nB <= kB; cB++) {
            let hB = vB.children[cB],
              zB = nB + hB.length;
            zB >= kB && (hB.isComposite() ? BB(hB, kB - nB) : (!oB || oB.isHidden && (IB > 0 || ZB && UZ(oB, hB))) && (zB > kB || 32 & hB.flags) ? (oB = hB, GB = kB - nB) : (nB < kB || 16 & hB.flags && !hB.isHidden) && (TB = hB, JB = kB - nB)), nB = zB
          }
        }(this, BB);
        let vB = (IB < 0 ? TB : oB) || TB || oB;
        return vB ? {
          tile: vB,
          offset: vB == TB ? JB : GB
        } : null
      }
      coordsIn(BB, IB) {
        let ZB = this.resolveInline(BB, IB, !0);
        return ZB ? ZB.tile.coordsIn(Math.max(0, ZB.offset), IB) : function(BB) {
          let IB = BB.dom.lastChild;
          if (!IB) return BB.dom.getBoundingClientRect();
          let ZB = fB(IB);
          return ZB[ZB.length - 1] || null
        }(this)
      }
      domIn(BB, IB) {
        let ZB = this.resolveInline(BB, IB);
        if (ZB) {
          let {
            tile: BB,
            offset: TB
          } = ZB;
          if (this.dom.contains(BB.dom)) return BB.isText() ? new kI(BB.dom, Math.min(BB.dom.nodeValue.length, TB)) : BB.domPosFor(TB, 16 & BB.flags ? 1 : 32 & BB.flags ? -1 : IB);
          let JB = ZB.tile.parent,
            oB = !1;
          for (let IB of JB.children) {
            if (oB) return new kI(IB.dom, 0);
            IB == ZB.tile && (oB = !0)
          }
        }
        return new kI(this.dom, 0)
      }
    }

    function UZ(BB, IB) {
      let ZB = BB.coordsIn(0, 1),
        TB = IB.coordsIn(0, 1);
      return ZB && TB && TB.top < ZB.bottom
    }
    class WZ extends FZ {
      constructor(BB, IB) {
        super(BB), this.mark = IB
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (BB, IB) {
        let ZB = new WZ(IB || document.createElement(BB.tagName), BB);
        return IB || (ZB.flags |= 4), ZB
      }
    }
    class dZ extends zZ {
      constructor(BB, IB) {
        super(BB, IB.length), this.text = IB
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
      coordsIn(BB, IB) {
        let ZB = this.dom.nodeValue.length;
        BB > ZB && (BB = ZB);
        let TB = BB,
          JB = BB,
          oB = 0;
        0 == BB && IB < 0 || BB == ZB && IB >= 0 ? sB.chrome || sB.gecko || (BB ? (TB--, oB = 1) : JB < ZB && (JB++, oB = -1)) : IB < 0 ? TB-- : JB < ZB && JB++;
        let GB = TI(this.dom, TB, JB).getClientRects();
        if (!GB.length) return null;
        let vB = GB[(oB ? oB < 0 : IB >= 0) ? 0 : GB.length - 1];
        return sB.safari && !oB && 0 == vB.width && (vB = Array.prototype.find.call(GB, (BB => BB.width)) || vB), oB ? EB(vB, oB < 0) : vB || null
      }
      static of (BB, IB) {
        let ZB = new dZ(IB || document.createTextNode(BB), BB);
        return IB || (ZB.flags |= 2), ZB
      }
    }
    class CZ extends zZ {
      constructor(BB, IB, ZB, TB) {
        super(BB, IB, TB), this.widget = ZB
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
      coordsIn(BB, IB) {
        return this.coordsInWidget(BB, IB, !1)
      }
      coordsInWidget(BB, IB, ZB) {
        let TB = this.widget.coordsAt(this.dom, BB, IB);
        if (TB) return TB;
        if (ZB) return EB(this.dom.getBoundingClientRect(), this.length ? 0 == BB : IB <= 0);
        {
          let IB = this.dom.getClientRects(),
            ZB = null;
          if (!IB.length) return null;
          let TB = !!(16 & this.flags) || !(32 & this.flags) && BB > 0;
          for (let JB = TB ? IB.length - 1 : 0; ZB = IB[JB], !(BB > 0 ? 0 == JB : JB == IB.length - 1 || ZB.top < ZB.bottom); JB += TB ? -1 : 1);
          return EB(ZB, !TB)
        }
      }
      get overrideDOMText() {
        if (!this.length) return TB.O.empty;
        let {
          root: BB
        } = this;
        if (!BB) return TB.O.empty;
        let IB = this.posAtStart;
        return BB.view.state.doc.slice(IB, IB + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (BB, IB, ZB, TB, JB) {
        return JB || (JB = BB.toDOM(IB), BB.editable || (JB.contentEditable = "false")), new CZ(JB, ZB, BB, TB)
      }
    }
    class QZ extends zZ {
      constructor(BB) {
        let IB = document.createElement("img");
        IB.className = "cm-widgetBuffer", IB.setAttribute("aria-hidden", "true"), super(IB, 0, BB)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return TB.O.empty
      }
      coordsIn(BB) {
        return this.dom.getBoundingClientRect()
      }
    }
    class sZ {
      constructor(BB) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = BB
      }
      advance(BB, IB, ZB) {
        let {
          tile: TB,
          index: JB,
          beforeBreak: oB,
          parents: GB
        } = this;
        for (; BB || IB > 0;)
          if (TB.isComposite())
            if (oB) {
              if (!BB) break;
              ZB && ZB.break(), BB--, oB = !1
            } else if (JB == TB.children.length) {
          if (!BB && !GB.length) break;
          ZB && ZB.leave(TB), oB = !!TB.breakAfter, ({
            tile: TB,
            index: JB
          } = GB.pop()), JB++
        } else {
          let vB = TB.children[JB],
            kB = vB.breakAfter;
          !(IB > 0 ? vB.length <= BB : vB.length < BB) || ZB && !1 === ZB.skip(vB, 0, vB.length) && vB.isComposite ? (GB.push({
            tile: TB,
            index: JB
          }), TB = vB, JB = 0, ZB && vB.isComposite() && ZB.enter(vB)) : (oB = !!kB, JB++, BB -= vB.length)
        } else if (JB == TB.length) oB = !!TB.breakAfter, ({
          tile: TB,
          index: JB
        } = GB.pop()), JB++;
        else {
          if (!BB) break;
          {
            let IB = Math.min(BB, TB.length - JB);
            ZB && ZB.skip(TB, JB, JB + IB), BB -= IB, JB += IB
          }
        }
        return this.tile = TB, this.index = JB, this.beforeBreak = oB, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class wZ {
      constructor(BB, IB, ZB, TB) {
        this.from = BB, this.to = IB, this.wrapper = ZB, this.rank = TB
      }
    }
    class OZ {
      constructor(BB, IB, ZB) {
        this.cache = BB, this.root = IB, this.blockWrappers = ZB, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(BB, IB, ZB, TB) {
        var JB;
        this.flushBuffer();
        let oB = this.ensureMarks(IB, ZB),
          GB = oB.lastChild;
        if (GB && GB.isText() && !(8 & GB.flags) && GB.length + BB.length < 512) {
          this.cache.reused.set(GB, 2), (oB.children[oB.children.length - 1] = new dZ(GB.dom, GB.text + BB)).parent = oB
        } else oB.append(TB || dZ.of(BB, null === (JB = this.cache.find(dZ)) || void 0 === JB ? void 0 : JB.dom));
        this.pos += BB.length, this.afterWidget = null
      }
      addComposition(BB, IB) {
        let ZB = this.curLine;
        ZB.dom != IB.line.dom && (ZB.setDOM(this.cache.reused.has(IB.line) ? jZ(IB.line.dom) : IB.line.dom), this.cache.reused.set(IB.line, 2));
        let TB = ZB;
        for (let GB = IB.marks.length - 1; GB >= 0; GB--) {
          let BB = IB.marks[GB],
            ZB = TB.lastChild;
          if (ZB instanceof WZ && ZB.mark.eq(BB.mark)) ZB.dom != BB.dom && ZB.setDOM(jZ(BB.dom)), TB = ZB;
          else {
            if (this.cache.reused.get(BB)) {
              let IB = zZ.get(BB.dom);
              IB && IB.setDOM(jZ(BB.dom))
            }
            let IB = WZ.of(BB.mark, BB.dom);
            TB.append(IB), TB = IB
          }
          this.cache.reused.set(BB, 2)
        }
        let JB = zZ.get(BB.text);
        JB && this.cache.reused.set(JB, 2);
        let oB = new dZ(BB.text, BB.text.nodeValue);
        oB.flags |= 8, TB.append(oB)
      }
      addInlineWidget(BB, IB, ZB) {
        let TB = this.afterWidget && 48 & BB.flags && (48 & this.afterWidget.flags) == (48 & BB.flags);
        TB || this.flushBuffer();
        let JB = this.ensureMarks(IB, ZB);
        TB || 16 & BB.flags || JB.append(this.getBuffer(1)), JB.append(BB), this.pos += BB.length, this.afterWidget = BB
      }
      addMark(BB, IB, ZB) {
        this.flushBuffer(), this.ensureMarks(IB, ZB).append(BB), this.pos += BB.length, this.afterWidget = null
      }
      addBlockWidget(BB) {
        this.getBlockPos().append(BB), this.pos += BB.length, this.lastBlock = BB, this.endLine()
      }
      continueWidget(BB) {
        (this.afterWidget || this.lastBlock).length += BB, this.pos += BB
      }
      addLineStart(BB, IB) {
        var ZB;
        BB || (BB = MZ);
        let TB = yZ.start(BB, IB || (null === (ZB = this.cache.find(yZ)) || void 0 === ZB ? void 0 : ZB.dom), !!IB);
        this.getBlockPos().append(this.lastBlock = this.curLine = TB)
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
      ensureMarks(BB, IB) {
        var ZB;
        let TB = this.curLine;
        for (let JB = BB.length - 1; JB >= 0; JB--) {
          let oB, GB = BB[JB];
          if (IB > 0 && (oB = TB.lastChild) && oB instanceof WZ && oB.mark.eq(GB)) TB = oB, IB--;
          else {
            let BB = WZ.of(GB, null === (ZB = this.cache.find(WZ, (BB => BB.mark.eq(GB)))) || void 0 === ZB ? void 0 : ZB.dom);
            TB.append(BB), TB = BB, IB = 0
          }
        }
        return TB
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let BB = this.curLine.lastChild;
          BB && HZ(this.curLine, !1) && ("BR" == BB.dom.nodeName || !BB.isWidget() || sB.ios && HZ(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(RZ, 0, 32) || new CZ(RZ.toDOM(), 0, RZ, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let BB = this.wrappers.length - 1; BB >= 0; BB--) this.wrappers[BB].to < this.pos && this.wrappers.splice(BB, 1);
        for (let BB = this.blockWrappers; BB.value && BB.from <= this.pos; BB.next())
          if (BB.to >= this.pos) {
            let IB = new wZ(BB.from, BB.to, BB.value, BB.rank),
              ZB = this.wrappers.length;
            for (; ZB > 0 && (this.wrappers[ZB - 1].rank - IB.rank || this.wrappers[ZB - 1].to - IB.to) < 0;) ZB--;
            this.wrappers.splice(ZB, 0, IB)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var BB;
        this.updateBlockWrappers();
        let IB = this.root;
        for (let ZB of this.wrappers) {
          let TB = IB.lastChild;
          if (ZB.from < this.pos && TB instanceof qZ && TB.wrapper.eq(ZB.wrapper)) IB = TB;
          else {
            let TB = qZ.of(ZB.wrapper, null === (BB = this.cache.find(qZ, (BB => BB.wrapper.eq(ZB.wrapper)))) || void 0 === BB ? void 0 : BB.dom);
            IB.append(TB), IB = TB
          }
        }
        return IB
      }
      blockPosCovered() {
        let BB = this.lastBlock;
        return null != BB && !BB.breakAfter && (!BB.isWidget() || (160 & BB.flags) > 0)
      }
      getBuffer(BB) {
        let IB = 2 | (BB < 0 ? 16 : 32),
          ZB = this.cache.find(QZ, void 0, 1);
        return ZB && (ZB.flags = IB), ZB || new QZ(IB)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class YZ {
      constructor(BB) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = BB.iter()
      }
      skip(BB) {
        this.textOff + BB <= this.text.length ? this.textOff += BB : (this.skipCount += BB - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(BB) {
        if (this.textOff == this.text.length) {
          let {
            value: IB,
            lineBreak: ZB,
            done: TB
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, TB) throw new Error("Ran out of text content when drawing inline views");
          this.text = IB;
          let JB = this.textOff = Math.min(BB, IB.length);
          return ZB ? null : IB.slice(0, JB)
        }
        let IB = Math.min(this.text.length, this.textOff + BB),
          ZB = this.text.slice(this.textOff, IB);
        return this.textOff = IB, ZB
      }
    }
    const iZ = [CZ, yZ, dZ, WZ, QZ, qZ, gZ];
    for (let jG = 0; jG < iZ.length; jG++) iZ[jG].bucket = jG;
    class pZ {
      constructor(BB) {
        this.view = BB, this.buckets = iZ.map((() => [])), this.index = iZ.map((() => 0)), this.reused = new Map
      }
      add(BB) {
        let IB = BB.constructor.bucket,
          ZB = this.buckets[IB];
        ZB.length < 6 ? ZB.push(BB) : ZB[this.index[IB] = (this.index[IB] + 1) % 6] = BB
      }
      find(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          TB = BB.bucket,
          JB = this.buckets[TB],
          oB = this.index[TB];
        for (let GB = JB.length - 1; GB >= 0; GB--) {
          let BB = (GB + oB) % JB.length,
            vB = JB[BB];
          if ((!IB || IB(vB)) && !this.reused.has(vB)) return JB.splice(BB, 1), BB < oB && this.index[TB]--, this.reused.set(vB, ZB), vB
        }
        return null
      }
      findWidget(BB, IB, ZB) {
        let TB = this.buckets[0];
        if (TB.length)
          for (let JB = 0, oB = 0;; JB++) {
            if (JB == TB.length) {
              if (oB) return null;
              oB = 1, JB = 0
            }
            let GB = TB[JB];
            if (!this.reused.has(GB) && (0 == oB ? GB.widget.compare(BB) : GB.widget.constructor == BB.constructor && BB.updateDOM(GB.dom, this.view, GB.widget))) return TB.splice(JB, 1), JB < this.index[0] && this.index[0]--, GB.widget == BB && GB.length == IB && (497 & GB.flags) == ZB ? (this.reused.set(GB, 1), GB) : (this.reused.set(GB, 2), new CZ(GB.dom, IB, BB, -498 & GB.flags | ZB))
          }
      }
      reuse(BB) {
        return this.reused.set(BB, 1), BB
      }
      maybeReuse(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(BB)) return this.reused.set(BB, IB), BB.dom
      }
      clear() {
        for (let BB = 0; BB < this.buckets.length; BB++) this.buckets[BB].length = this.index[BB] = 0
      }
    }
    class aZ {
      constructor(BB, IB, ZB, JB, oB) {
        this.view = BB, this.vT = JB, this.disallowBlockEffectsFor = oB, this.openWidget = !1, this.openMarks = 0, this.cache = new pZ(BB), this.text = new YZ(BB.state.doc), this.builder = new OZ(this.cache, new gZ(BB, BB.contentDOM), TB.F.iter(ZB)), this.cache.reused.set(IB, 2), this.old = new sZ(IB), this.reuseWalker = {
          skip: (BB, IB, ZB) => {
            if (this.cache.add(BB), BB.isComposite()) return !1
          },
          enter: BB => this.cache.add(BB),
          leave: () => {},
          break: () => {}
        }
      }
      run(BB, IB) {
        let ZB = IB && this.getCompositionContext(IB.text);
        for (let TB = 0, JB = 0, oB = 0;;) {
          let GB = oB < BB.length ? BB[oB++] : null,
            vB = GB ? GB.fromA : this.old.root.length;
          if (vB > TB) {
            let BB = vB - TB;
            this.preserve(BB, !oB, !GB), TB = vB, JB += BB
          }
          if (!GB) break;
          IB && GB.fromA <= IB.range.fromA && GB.toA >= IB.range.toA ? (this.forward(GB.fromA, IB.range.fromA, IB.range.fromA < IB.range.toA ? 1 : -1), this.emit(JB, IB.range.fromB), this.cache.clear(), this.builder.addComposition(IB, ZB), this.text.skip(IB.range.toB - IB.range.fromB), this.forward(IB.range.fromA, GB.toA), this.emit(IB.range.toB, GB.toB)) : (this.forward(GB.fromA, GB.toA), this.emit(JB, GB.toB)), JB = GB.toB, TB = GB.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(BB, IB, ZB) {
        let TB = function(BB) {
            let IB = [];
            for (let ZB = BB.parents.length; ZB > 1; ZB--) {
              let TB = ZB == BB.parents.length ? BB.tile : BB.parents[ZB].tile;
              TB instanceof WZ && IB.push(TB.mark)
            }
            return IB
          }(this.old),
          JB = this.openMarks;
        this.old.advance(BB, ZB ? 1 : -1, {
          skip: (BB, IB, ZB) => {
            if (BB.isWidget())
              if (this.openWidget) this.builder.continueWidget(ZB - IB);
              else {
                let oB = ZB > 0 || IB < BB.length ? CZ.of(BB.widget, this.view, ZB - IB, 496 & BB.flags, this.cache.maybeReuse(BB)) : this.cache.reuse(BB);
                256 & oB.flags ? (oB.flags &= -2, this.builder.addBlockWidget(oB)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(oB, TB, JB), JB = TB.length)
              }
            else if (BB.isText()) this.builder.ensureLine(null), IB || ZB != BB.length || this.cache.reused.has(BB) ? (this.cache.add(BB), this.builder.addText(BB.text.slice(IB, ZB), TB, JB)) : this.builder.addText(BB.text, TB, JB, this.cache.reuse(BB)), JB = TB.length;
            else if (BB.isLine()) BB.flags &= -2, this.cache.reused.set(BB, 1), this.builder.addLine(BB);
            else if (BB instanceof QZ) this.cache.add(BB);
            else {
              if (!(BB instanceof WZ)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(BB, TB, JB), this.cache.reused.set(BB, 1), JB = TB.length
            }
            this.openWidget = !1
          },
          enter: BB => {
            BB.isLine() ? this.builder.addLineStart(BB.attrs, this.cache.maybeReuse(BB)) : (this.cache.add(BB), BB instanceof WZ && TB.unshift(BB.mark)), this.openWidget = !1
          },
          leave: BB => {
            BB.isLine() ? TB.length && (TB.length = JB = 0) : BB instanceof WZ && (TB.shift(), JB = Math.min(JB, TB.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(BB)
      }
      emit(BB, IB) {
        let ZB = null,
          JB = this.builder,
          oB = 0,
          GB = TB.F.spans(this.vT, BB, IB, {
            point: (BB, IB, TB, GB, vB, kB) => {
              if (TB instanceof RB) {
                if (this.disallowBlockEffectsFor[kB]) {
                  if (TB.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (IB > this.view.state.doc.lineAt(BB).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (oB = GB.length, vB > GB.length) JB.continueWidget(IB - BB);
                else {
                  let oB = TB.widget || (TB.block ? PZ.block : PZ.inline),
                    kB = function(BB) {
                      let IB = BB.isReplace ? (BB.startSide < 0 ? 64 : 0) | (BB.endSide > 0 ? 128 : 0) : BB.startSide > 0 ? 32 : 16;
                      BB.block && (IB |= 256);
                      return IB
                    }(TB),
                    cB = this.cache.findWidget(oB, IB - BB, kB) || CZ.of(oB, this.view, IB - BB, kB);
                  TB.block ? (TB.startSide > 0 && JB.addLineStartIfNotCovered(ZB), JB.addBlockWidget(cB)) : (JB.ensureLine(ZB), JB.addInlineWidget(cB, GB, vB))
                }
                ZB = null
              } else ZB = function(BB, IB) {
                let ZB = IB.spec.attributes,
                  TB = IB.spec.class;
                if (!ZB && !TB) return BB;
                BB || (BB = {
                  class: "cm-line"
                });
                ZB && wB(ZB, BB);
                TB && (BB.class += " " + TB);
                return BB
              }(ZB, TB);
              IB > BB && this.text.skip(IB - BB)
            },
            span: (BB, IB, TB, oB) => {
              for (let GB = BB; GB < IB;) {
                let vB = this.text.next(Math.min(512, IB - GB));
                null == vB ? (JB.addLineStartIfNotCovered(ZB), JB.addBreak(), GB++) : (JB.ensureLine(ZB), JB.addText(vB, TB, GB == BB ? oB : TB.length), GB += vB.length), ZB = null
              }
            }
          });
        JB.addLineStartIfNotCovered(ZB), this.openWidget = GB > oB, this.openMarks = GB
      }
      forward(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        IB - BB <= 10 ? this.old.advance(IB - BB, ZB, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(IB - BB - 10, -1), this.old.advance(5, ZB, this.reuseWalker))
      }
      getCompositionContext(BB) {
        let IB = [],
          ZB = null;
        for (let TB = BB.parentNode;; TB = TB.parentNode) {
          let BB = zZ.get(TB);
          if (TB == this.view.contentDOM) break;
          BB instanceof WZ ? IB.push(BB) : (null === BB || void 0 === BB ? void 0 : BB.isLine()) ? ZB = BB : BB instanceof qZ || ("DIV" != TB.nodeName || ZB || TB == this.view.contentDOM ? ZB || IB.push(WZ.of(new jB({
            tagName: TB.nodeName.toLowerCase(),
            attributes: pB(TB)
          }), TB)) : ZB = new yZ(TB, MZ))
        }
        return {
          line: ZB,
          marks: IB
        }
      }
    }

    function HZ(BB, IB) {
      let ZB = BB => {
        for (let TB of BB.children)
          if ((IB ? TB.isText() : TB.length) || ZB(TB)) return !0;
        return !1
      };
      return ZB(BB)
    }
    const MZ = {
      class: "cm-line"
    };

    function jZ(BB) {
      let IB = zZ.get(BB);
      return IB && IB.setDOM(BB.cloneNode()), BB
    }
    class PZ extends aB {
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
    PZ.inline = new PZ("span"), PZ.block = new PZ("div");
    const RZ = new class extends aB {
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
    class rZ {
      constructor(BB) {
        this.view = BB, this.vT = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = MB.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new gZ(BB, BB.contentDOM), this.updateInner([new cZ(0, 0, 0, BB.state.doc.length)], null)
      }
      update(BB) {
        var IB;
        let ZB = BB.changedRanges;
        this.minWidth > 0 && ZB.length && (ZB.every((BB => {
          let {
            fromA: IB,
            toA: ZB
          } = BB;
          return ZB < this.minWidthFrom || IB > this.minWidthTo
        })) ? (this.minWidthFrom = BB.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = BB.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(BB);
        let JB = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (IB = this.domChanged) || void 0 === IB ? void 0 : IB.newSel) ? JB = this.domChanged.newSel.head : function(BB, IB) {
          let ZB = !1;
          IB && BB.iterChangedRanges(((BB, TB) => {
            BB < IB.to && TB > IB.from && (ZB = !0)
          }));
          return ZB
        }(BB.changes, this.hasComposition) || BB.selectionSet || (JB = BB.state.selection.main.head));
        let oB = JB > -1 ? function(BB, IB, ZB) {
          let TB = XZ(BB, ZB);
          if (!TB) return null;
          let {
            node: JB,
            from: oB,
            to: GB
          } = TB, vB = JB.nodeValue;
          if (/[\n\r]/.test(vB)) return null;
          if (BB.state.doc.sliceString(TB.from, TB.to) != vB) return null;
          let kB = IB.invertedDesc;
          return {
            range: new cZ(kB.mapPos(oB), kB.mapPos(GB), oB, GB),
            text: JB
          }
        }(this.view, BB.changes, JB) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: IB,
            to: TB
          } = this.hasComposition;
          ZB = new cZ(IB, TB, BB.changes.mapPos(IB, -1), BB.changes.mapPos(TB, 1)).addToSet(ZB.slice())
        }
        this.hasComposition = oB ? {
          from: oB.range.fromB,
          to: oB.range.toB
        } : null, (sB.ie || sB.chrome) && !oB && BB && BB.state.doc.lines != BB.startState.doc.lines && (this.forceSelection = !0);
        let GB = this.vT,
          vB = this.blockWrappers;
        this.updateDeco();
        let kB = function(BB, IB, ZB) {
          let JB = new LZ;
          return TB.F.compare(BB, IB, ZB, JB), JB.changes
        }(GB, this.vT, BB.changes);
        kB.length && (ZB = cZ.extendWithRanges(ZB, kB));
        let cB = function(BB, IB, ZB) {
          let JB = new eZ;
          return TB.F.compare(BB, IB, ZB, JB), JB.changes
        }(vB, this.blockWrappers, BB.changes);
        return cB.length && (ZB = cZ.extendWithRanges(ZB, cB)), oB && !ZB.some((BB => BB.fromA <= oB.range.fromA && BB.toA >= oB.range.toA)) && (ZB = oB.range.addToSet(ZB.slice())), !(2 & this.tile.flags && 0 == ZB.length) && (this.updateInner(ZB, oB), BB.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(BB, IB) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: ZB
        } = this.view;
        ZB.ignore((() => {
          if (IB || BB.length) {
            let ZB = this.tile,
              TB = new aZ(this.view, ZB, this.blockWrappers, this.vT, this.dynamicDecorationMap);
            IB && zZ.get(IB.text) && TB.cache.reused.set(zZ.get(IB.text), 2), this.tile = TB.run(BB, IB), mZ(ZB, TB.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let TB = sB.chrome || sB.ios ? {
            node: ZB.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(TB), !TB || !TB.written && ZB.selectionRange.focusNode == TB.node && this.tile.dom.contains(TB.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let TB = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let JB of this.tile.children) JB.isWidget() && JB.widget instanceof uZ && TB.push(JB.dom);
        ZB.updateGaps(TB)
      }
      updateEditContextFormatting(BB) {
        this.editContextFormatting = this.editContextFormatting.map(BB.changes);
        for (let IB of BB.transactions)
          for (let BB of IB.effects) BB.is(AI) && (this.editContextFormatting = BB.value)
      }
      updateSelection() {
        let BB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: IB
        } = this.tile, ZB = this.view.root.activeElement, TB = ZB == IB, JB = !TB && !(this.view.state.facet(bI) || IB.tabIndex > -1) && uB(IB, this.view.observer.selectionRange) && !(ZB && IB.contains(ZB));
        if (!(TB || BB || JB)) return;
        let oB = this.forceSelection;
        this.forceSelection = !1;
        let GB, vB, kB = this.view.state.selection.main;
        if (kB.empty ? vB = GB = this.inlineDOMNearPos(kB.anchor, kB.assoc || 1) : (vB = this.inlineDOMNearPos(kB.head, kB.head == kB.from ? 1 : -1), GB = this.inlineDOMNearPos(kB.anchor, kB.anchor == kB.from ? 1 : -1)), sB.gecko && kB.empty && !this.hasComposition && (1 == (cB = GB).node.nodeType && cB.node.firstChild && (0 == cB.offset || "false" == cB.node.childNodes[cB.offset - 1].contentEditable) && (cB.offset == cB.node.childNodes.length || "false" == cB.node.childNodes[cB.offset].contentEditable))) {
          let BB = document.createTextNode("");
          this.view.observer.ignore((() => GB.node.insertBefore(BB, GB.node.childNodes[GB.offset] || null))), GB = vB = new kI(BB, 0), oB = !0
        }
        var cB;
        let nB = this.view.observer.selectionRange;
        !oB && nB.focusNode && (lB(GB.node, GB.offset, nB.anchorNode, nB.anchorOffset) && lB(vB.node, vB.offset, nB.focusNode, nB.focusOffset) || this.suppressWidgetCursorChange(nB, kB)) || (this.view.observer.ignore((() => {
          sB.android && sB.chrome && IB.contains(nB.focusNode) && function(BB, IB) {
            for (let ZB = BB; ZB && ZB != IB; ZB = ZB.assignedSlot || ZB.parentNode)
              if (1 == ZB.nodeType && "false" == ZB.contentEditable) return !0;
            return !1
          }(nB.focusNode, IB) && (IB.blur(), IB.focus({
            preventScroll: !0
          }));
          let BB = LB(this.view.root);
          if (BB)
            if (kB.empty) {
              if (sB.gecko) {
                let BB = (TB = GB.node, oB = GB.offset, 1 != TB.nodeType ? 0 : (oB && "false" == TB.childNodes[oB - 1].contentEditable ? 1 : 0) | (oB < TB.childNodes.length && "false" == TB.childNodes[oB].contentEditable ? 2 : 0));
                if (BB && 3 != BB) {
                  let IB = (1 == BB ? GI : vI)(GB.node, GB.offset);
                  IB && (GB = new kI(IB.node, IB.offset))
                }
              }
              BB.collapse(GB.node, GB.offset), null != kB.bidiLevel && void 0 !== BB.caretBidiLevel && (BB.caretBidiLevel = kB.bidiLevel)
            } else if (BB.extend) {
            BB.collapse(GB.node, GB.offset);
            try {
              BB.extend(vB.node, vB.offset)
            } catch (cB) {}
          } else {
            let IB = document.createRange();
            kB.anchor > kB.head && ([GB, vB] = [vB, GB]), IB.setEnd(vB.node, vB.offset), IB.setStart(GB.node, GB.offset), BB.removeAllRanges(), BB.addRange(IB)
          } else;
          var TB, oB;
          JB && this.view.root.activeElement == IB && (IB.blur(), ZB && ZB.focus())
        })), this.view.observer.setSelectionRange(GB, vB)), this.impreciseAnchor = GB.precise ? null : new kI(nB.anchorNode, nB.anchorOffset), this.impreciseHead = vB.precise ? null : new kI(nB.focusNode, nB.focusOffset)
      }
      suppressWidgetCursorChange(BB, IB) {
        return this.hasComposition && IB.empty && lB(BB.focusNode, BB.focusOffset, BB.anchorNode, BB.anchorOffset) && this.posFromDOM(BB.focusNode, BB.focusOffset) == IB.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: BB
        } = this, IB = BB.state.selection.main, ZB = LB(BB.root), {
          anchorNode: TB,
          anchorOffset: JB
        } = BB.observer.selectionRange;
        if (!ZB || !IB.empty || !IB.assoc || !ZB.modify) return;
        let oB = this.lineAt(IB.head, IB.assoc);
        if (!oB) return;
        let GB = oB.posAtStart;
        if (IB.head == GB || IB.head == GB + oB.length) return;
        let vB = this.coordsAt(IB.head, -1),
          kB = this.coordsAt(IB.head, 1);
        if (!vB || !kB || vB.bottom > kB.top) return;
        let cB = this.domAtPos(IB.head + IB.assoc, IB.assoc);
        ZB.collapse(cB.node, cB.offset), ZB.modify("move", IB.assoc < 0 ? "forward" : "backward", "lineboundary"), BB.observer.readSelectionRange();
        let nB = BB.observer.selectionRange;
        BB.docView.posFromDOM(nB.anchorNode, nB.anchorOffset) != IB.from && ZB.collapse(TB, JB)
      }
      posFromDOM(BB, IB) {
        let ZB = this.tile.nearest(BB);
        if (!ZB) return 2 & this.tile.dom.compareDocumentPosition(BB) ? 0 : this.view.state.doc.length;
        let TB = ZB.posAtStart;
        if (!ZB.isComposite()) return ZB.isText() ? BB == ZB.dom ? TB + IB : TB + (IB ? ZB.length : 0) : TB;
        {
          let JB;
          if (BB == ZB.dom) JB = ZB.dom.childNodes[IB];
          else {
            let TB = 0 == xB(BB) ? 0 : 0 == IB ? -1 : 1;
            for (;;) {
              let IB = BB.parentNode;
              if (IB == ZB.dom) break;
              0 == TB && IB.firstChild != IB.lastChild && (TB = BB == IB.firstChild ? -1 : 1), BB = IB
            }
            JB = TB < 0 ? BB : BB.nextSibling
          }
          if (JB == ZB.dom.firstChild) return TB;
          for (; JB && !zZ.get(JB);) JB = JB.nextSibling;
          if (!JB) return TB + ZB.length;
          for (let BB = 0, IB = TB;; BB++) {
            let TB = ZB.children[BB];
            if (TB.dom == JB) return IB;
            IB += TB.length + TB.breakAfter
          }
        }
      }
      domAtPos(BB, IB) {
        let {
          tile: ZB,
          offset: TB
        } = this.tile.resolveBlock(BB, IB);
        return ZB.isWidget() ? ZB.domPosFor(BB, IB) : ZB.domIn(TB, IB)
      }
      inlineDOMNearPos(BB, IB) {
        let ZB, TB, JB = -1,
          oB = !1,
          GB = -1,
          vB = !1;
        return this.tile.blockTiles(((IB, kB) => {
          if (IB.isWidget()) {
            if (32 & IB.flags && kB >= BB) return !0;
            16 & IB.flags && (oB = !0)
          } else {
            let cB = kB + IB.length;
            if (kB <= BB && (ZB = IB, JB = BB - kB, oB = cB < BB), cB >= BB && !TB && (TB = IB, GB = BB - kB, vB = kB > BB), kB > BB && TB) return !0
          }
        })), ZB || TB ? (oB && TB ? ZB = null : vB && ZB && (TB = null), ZB && IB < 0 || !TB ? ZB.domIn(JB, IB) : TB.domIn(GB, IB)) : this.domAtPos(BB, IB)
      }
      coordsAt(BB, IB) {
        let {
          tile: ZB,
          offset: TB
        } = this.tile.resolveBlock(BB, IB);
        return ZB.isWidget() ? ZB.widget instanceof uZ ? null : ZB.coordsInWidget(TB, IB, !0) : ZB.coordsIn(TB, IB)
      }
      lineAt(BB, IB) {
        let {
          tile: ZB
        } = this.tile.resolveBlock(BB, IB);
        return ZB.isLine() ? ZB : null
      }
      coordsForChar(BB) {
        let {
          tile: IB,
          offset: ZB
        } = this.tile.resolveBlock(BB, 1);
        if (!IB.isLine()) return null;
        return function BB(IB, ZB) {
          if (IB.isComposite())
            for (let TB of IB.children) {
              if (TB.length >= ZB) {
                let IB = BB(TB, ZB);
                if (IB) return IB
              }
              if ((ZB -= TB.length) < 0) break
            } else if (IB.isText() && ZB < IB.length) {
              let BB = (0, TB._)(IB.text, ZB);
              if (BB == ZB) return null;
              let JB = TI(IB.dom, ZB, BB).getClientRects();
              for (let IB = 0; IB < JB.length; IB++) {
                let BB = JB[IB];
                if (IB == JB.length - 1 || BB.top < BB.bottom && BB.left < BB.right) return BB
              }
            } return null
        }(IB, ZB)
      }
      measureVisibleLineHeights(BB) {
        let IB = [],
          {
            from: ZB,
            to: TB
          } = BB,
          JB = this.view.contentDOM.clientWidth,
          oB = JB > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          GB = -1,
          vB = this.view.textDirection == cI.LTR,
          kB = 0,
          cB = (BB, nB, hB) => {
            for (let zB = 0; zB < BB.children.length && !(nB > TB); zB++) {
              let TB = BB.children[zB],
                FB = nB + TB.length,
                NB = TB.dom.getBoundingClientRect(),
                {
                  height: gB
                } = NB;
              if (hB && !zB && (kB += NB.top - hB.top), TB instanceof qZ) FB > ZB && cB(TB, nB, NB);
              else if (nB >= ZB && (kB > 0 && IB.push(-kB), IB.push(gB + kB), kB = 0, oB)) {
                let BB = TB.dom.lastChild,
                  IB = BB ? fB(BB) : [];
                if (IB.length) {
                  let BB = IB[IB.length - 1],
                    ZB = vB ? BB.right - NB.left : NB.right - BB.left;
                  ZB > GB && (GB = ZB, this.minWidth = JB, this.minWidthFrom = nB, this.minWidthTo = FB)
                }
              }
              hB && zB == BB.children.length - 1 && (kB += hB.bottom - NB.bottom), nB = FB + TB.breakAfter
            }
          };
        return cB(this.tile, 0, null), IB
      }
      textDirectionAt(BB) {
        let {
          tile: IB
        } = this.tile.resolveBlock(BB, 1);
        return "rtl" == getComputedStyle(IB.dom).direction ? cI.RTL : cI.LTR
      }
      measureTextSize() {
        let BB = this.tile.blockTiles((BB => {
          if (BB.isLine() && BB.children.length && BB.length <= 20) {
            let IB, ZB = 0;
            for (let TB of BB.children) {
              if (!TB.isText() || /[^ -~]/.test(TB.text)) return;
              let BB = fB(TB.dom);
              if (1 != BB.length) return;
              ZB += BB[0].width, IB = BB[0].height
            }
            if (ZB) return {
              lineHeight: BB.dom.getBoundingClientRect().height,
              charWidth: ZB / BB.length,
              textHeight: IB
            }
          }
        }));
        if (BB) return BB;
        let IB, ZB, TB, JB = document.createElement("div");
        return JB.className = "cm-line", JB.style.width = "99999px", JB.style.position = "absolute", JB.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(JB);
          let BB = fB(JB.firstChild)[0];
          IB = JB.getBoundingClientRect().height, ZB = BB && BB.width ? BB.width / 27 : 7, TB = BB && BB.height ? BB.height : IB, JB.remove()
        })), {
          lineHeight: IB,
          charWidth: ZB,
          textHeight: TB
        }
      }
      computeBlockGapDeco() {
        let BB = [],
          IB = this.view.viewState;
        for (let ZB = 0, TB = 0;; TB++) {
          let JB = TB == IB.viewports.length ? null : IB.viewports[TB],
            oB = JB ? JB.from - 1 : this.view.state.doc.length;
          if (oB > ZB) {
            let TB = (IB.lineBlockAt(oB).bottom - IB.lineBlockAt(ZB).top) / this.view.scaleY;
            BB.push(MB.replace({
              widget: new uZ(TB),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(ZB, oB))
          }
          if (!JB) break;
          ZB = JB.to + 1
        }
        return MB.set(BB)
      }
      updateDeco() {
        let BB = 1,
          IB = this.view.state.facet(BZ).map((IB => (this.dynamicDecorationMap[BB++] = "function" == typeof IB) ? IB(this.view) : IB)),
          ZB = !1,
          JB = this.view.state.facet(ZZ).map(((BB, IB) => {
            let TB = "function" == typeof BB;
            return TB && (ZB = !0), TB ? BB(this.view) : BB
          }));
        for (JB.length && (this.dynamicDecorationMap[BB++] = ZB, IB.push(TB.F.join(JB))), this.vT = [this.editContextFormatting, ...IB, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; BB < this.vT.length;) this.dynamicDecorationMap[BB++] = !1;
        this.blockWrappers = this.view.state.facet(IZ).map((BB => "function" == typeof BB ? BB(this.view) : BB))
      }
      scrollIntoView(BB) {
        var IB;
        if (BB.isSnapshot) {
          let IB = this.view.viewState.lineBlockAt(BB.range.head);
          return this.view.scrollDOM.scrollTop = IB.top - BB.yMargin, void(this.view.scrollDOM.scrollLeft = BB.xMargin)
        }
        for (let nB of this.view.state.facet(uI)) try {
          if (nB(this.view, BB.range, BB)) return !0
        } catch (cB) {
          tI(this.view.state, cB, "scroll handler")
        }
        let ZB, {
            range: TB
          } = BB,
          JB = this.coordsAt(TB.head, null !== (IB = TB.assoc) && void 0 !== IB ? IB : TB.empty ? 0 : TB.head > TB.anchor ? -1 : 1);
        if (!JB) return;
        !TB.empty && (ZB = this.coordsAt(TB.anchor, TB.anchor > TB.head ? -1 : 1)) && (JB = {
          left: Math.min(JB.left, ZB.left),
          top: Math.min(JB.top, ZB.top),
          right: Math.max(JB.right, ZB.right),
          bottom: Math.max(JB.bottom, ZB.bottom)
        });
        let oB = vZ(this.view),
          GB = {
            left: JB.left - oB.left,
            top: JB.top - oB.top,
            right: JB.right + oB.right,
            bottom: JB.bottom + oB.bottom
          },
          {
            offsetWidth: vB,
            offsetHeight: kB
          } = this.view.scrollDOM;
        if (function(BB, IB, ZB, TB, JB, oB, GB, vB) {
            let kB = BB.ownerDocument,
              cB = kB.defaultView || window;
            for (let nB = BB, hB = !1; nB && !hB;)
              if (1 == nB.nodeType) {
                let BB, zB = nB == kB.body,
                  FB = 1,
                  NB = 1;
                if (zB) BB = DB(cB);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(nB).position) && (hB = !0), nB.scrollHeight <= nB.clientHeight && nB.scrollWidth <= nB.clientWidth) {
                    nB = nB.assignedSlot || nB.parentNode;
                    continue
                  }
                  let IB = nB.getBoundingClientRect();
                  ({
                    scaleX: FB,
                    scaleY: NB
                  } = KB(nB, IB)), BB = {
                    left: IB.left,
                    right: IB.left + nB.clientWidth * FB,
                    top: IB.top,
                    bottom: IB.top + nB.clientHeight * NB
                  }
                }
                let gB = 0,
                  qB = 0;
                if ("nearest" == JB) IB.top < BB.top + GB ? (qB = IB.top - (BB.top + GB), ZB > 0 && IB.bottom > BB.bottom + qB && (qB = IB.bottom - BB.bottom + GB)) : IB.bottom > BB.bottom - GB && (qB = IB.bottom - BB.bottom + GB, ZB < 0 && IB.top - qB < BB.top && (qB = IB.top - (BB.top + GB)));
                else {
                  let TB = IB.bottom - IB.top,
                    oB = BB.bottom - BB.top;
                  qB = ("center" == JB && TB <= oB ? IB.top + TB / 2 - oB / 2 : "start" == JB || "center" == JB && ZB < 0 ? IB.top - GB : IB.bottom - oB + GB) - BB.top
                }
                if ("nearest" == TB ? IB.left < BB.left + oB ? (gB = IB.left - (BB.left + oB), ZB > 0 && IB.right > BB.right + gB && (gB = IB.right - BB.right + oB)) : IB.right > BB.right - oB && (gB = IB.right - BB.right + oB, ZB < 0 && IB.left < BB.left + gB && (gB = IB.left - (BB.left + oB))) : gB = ("center" == TB ? IB.left + (IB.right - IB.left) / 2 - (BB.right - BB.left) / 2 : "start" == TB == vB ? IB.left - oB : IB.right - (BB.right - BB.left) + oB) - BB.left, gB || qB)
                  if (zB) cB.scrollBy(gB, qB);
                  else {
                    let BB = 0,
                      ZB = 0;
                    if (qB) {
                      let BB = nB.scrollTop;
                      nB.scrollTop += qB / NB, ZB = (nB.scrollTop - BB) * NB
                    }
                    if (gB) {
                      let IB = nB.scrollLeft;
                      nB.scrollLeft += gB / FB, BB = (nB.scrollLeft - IB) * FB
                    }
                    IB = {
                      left: IB.left - BB,
                      top: IB.top - ZB,
                      right: IB.right - BB,
                      bottom: IB.bottom - ZB
                    }, BB && Math.abs(BB - gB) < 1 && (TB = "nearest"), ZB && Math.abs(ZB - qB) < 1 && (JB = "nearest")
                  } if (zB) break;
                (IB.top < BB.top || IB.bottom > BB.bottom || IB.left < BB.left || IB.right > BB.right) && (IB = {
                  left: Math.max(IB.left, BB.left),
                  right: Math.min(IB.right, BB.right),
                  top: Math.max(IB.top, BB.top),
                  bottom: Math.min(IB.bottom, BB.bottom)
                }), nB = nB.assignedSlot || nB.parentNode
              } else {
                if (11 != nB.nodeType) break;
                nB = nB.host
              }
          }(this.view.scrollDOM, GB, TB.head < TB.anchor ? -1 : 1, BB.x, BB.y, Math.max(Math.min(BB.xMargin, vB), -vB), Math.max(Math.min(BB.yMargin, kB), -kB), this.view.textDirection == cI.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (JB.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || JB.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let BB = this.view.docView.lineAt(TB.head, 1);
          BB && BB.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(BB) {
        let IB = BB => BB.isWidget() || BB.children.some(IB);
        return IB(this.tile.resolveBlock(BB, 1).tile)
      }
      destroy() {
        mZ(this.tile)
      }
    }

    function mZ(BB, IB) {
      let ZB = null === IB || void 0 === IB ? void 0 : IB.get(BB);
      if (1 != ZB) {
        null == ZB && BB.destroy();
        for (let ZB of BB.children) mZ(ZB, IB)
      }
    }

    function XZ(BB, IB) {
      let ZB = BB.observer.selectionRange;
      if (!ZB.focusNode) return null;
      let TB = GI(ZB.focusNode, ZB.focusOffset),
        JB = vI(ZB.focusNode, ZB.focusOffset),
        oB = TB || JB;
      if (JB && TB && JB.node != TB.node) {
        let IB = zZ.get(JB.node);
        if (!IB || IB.isText() && IB.text != JB.node.nodeValue) oB = JB;
        else if (BB.docView.lastCompositionAfterCursor) {
          let BB = zZ.get(TB.node);
          !BB || BB.isText() && BB.text != TB.node.nodeValue || (oB = JB)
        }
      }
      if (BB.docView.lastCompositionAfterCursor = oB != TB, !oB) return null;
      let GB = IB - oB.offset;
      return {
        from: GB,
        to: GB + oB.node.nodeValue.length,
        node: oB.node
      }
    }
    let LZ = class {
      constructor() {
        this.changes = []
      }
      compareRange(BB, IB) {
        mB(BB, IB, this.changes)
      }
      comparePoint(BB, IB) {
        mB(BB, IB, this.changes)
      }
      boundChange(BB) {
        mB(BB, BB, this.changes)
      }
    };
    class eZ {
      constructor() {
        this.changes = []
      }
      compareRange(BB, IB) {
        mB(BB, IB, this.changes)
      }
      comparePoint() {}
      boundChange(BB) {
        mB(BB, BB, this.changes)
      }
    }
    class uZ extends aB {
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

    function fZ(BB, IB, ZB) {
      let TB = BB.lineBlockAt(IB);
      if (Array.isArray(TB.type)) {
        let BB;
        for (let JB of TB.type) {
          if (JB.from > IB) break;
          if (!(JB.to < IB)) {
            if (JB.from < IB && JB.to > IB) return JB;
            BB && (JB.type != HB.Text || BB.type == JB.type && !(ZB < 0 ? JB.from < IB : JB.to > IB)) || (BB = JB)
          }
        }
        return BB || TB
      }
      return TB
    }

    function lZ(BB, IB, ZB, TB) {
      let JB = BB.state.doc.lineAt(IB.head),
        oB = BB.bidiSpans(JB),
        GB = BB.textDirectionAt(JB.from);
      for (let vB = IB, kB = null;;) {
        let IB = iI(JB, oB, GB, vB, ZB),
          cB = YI;
        if (!IB) {
          if (JB.number == (ZB ? BB.state.doc.lines : 1)) return vB;
          cB = "\n", JB = BB.state.doc.line(JB.number + (ZB ? 1 : -1)), oB = BB.bidiSpans(JB), IB = BB.visualLineSide(JB, !ZB)
        }
        if (kB) {
          if (!kB(cB)) return vB
        } else {
          if (!TB) return IB;
          kB = TB(cB)
        }
        vB = IB
      }
    }

    function AZ(BB, IB, ZB) {
      for (;;) {
        let TB = 0;
        for (let JB of BB) JB.between(IB - 1, IB + 1, ((BB, JB, oB) => {
          if (IB > BB && IB < JB) {
            let oB = TB || ZB || (IB - BB < JB - IB ? -1 : 1);
            IB = oB < 0 ? BB : JB, TB = oB
          }
        }));
        if (!TB) return IB
      }
    }

    function tZ(BB, IB) {
      let ZB = null;
      for (let JB = 0; JB < IB.vq.length; JB++) {
        let oB = IB.vq[JB],
          GB = null;
        if (oB.empty) {
          let IB = AZ(BB, oB.from, 0);
          IB != oB.from && (GB = TB.n.cursor(IB, -1))
        } else {
          let IB = AZ(BB, oB.from, -1),
            ZB = AZ(BB, oB.to, 1);
          IB == oB.from && ZB == oB.to || (GB = TB.n.range(oB.from == oB.anchor ? IB : ZB, oB.from == oB.head ? IB : ZB))
        }
        GB && (ZB || (ZB = IB.vq.slice()), ZB[JB] = GB)
      }
      return ZB ? TB.n.create(ZB, IB.mainIndex) : IB
    }

    function bZ(BB, IB, ZB) {
      let JB = AZ(BB.state.facet(TZ).map((IB => IB(BB))), ZB.from, IB.head > ZB.from ? -1 : 1);
      return JB == ZB.from ? ZB : TB.n.cursor(JB, JB < ZB.from ? 1 : -1)
    }
    class xZ {
      constructor(BB, IB) {
        this.pos = BB, this.assoc = IB
      }
    }

    function EZ(BB, IB, ZB, JB) {
      let oB, GB = BB.contentDOM.getBoundingClientRect(),
        vB = GB.top + BB.viewState.paddingTop,
        {
          x: kB,
          y: cB
        } = IB,
        nB = cB - vB;
      for (;;) {
        if (nB < 0) return new xZ(0, 1);
        if (nB > BB.viewState.docHeight) return new xZ(BB.state.doc.length, -1);
        if (oB = BB.elementAtHeight(nB), null == JB) break;
        if (oB.type == HB.Text) {
          if (JB < 0 ? oB.to < BB.viewport.from : oB.from > BB.viewport.to) break;
          let IB = BB.docView.coordsAt(JB < 0 ? oB.from : oB.to, JB > 0 ? -1 : 1);
          if (IB && (JB < 0 ? IB.top <= nB + vB : IB.bottom >= nB + vB)) break
        }
        let IB = BB.viewState.heightOracle.textHeight / 2;
        nB = JB > 0 ? oB.bottom + IB : oB.top - IB
      }
      if (BB.viewport.from >= oB.to || BB.viewport.to <= oB.from) {
        if (ZB) return null;
        if (oB.type == HB.Text) {
          let IB = function(BB, IB, ZB, JB, oB) {
            let GB = Math.round((JB - IB.left) * BB.defaultCharacterWidth);
            if (BB.lineWrapping && ZB.height > 1.5 * BB.defaultLineHeight) {
              let IB = BB.viewState.heightOracle.textHeight;
              GB += Math.floor((oB - ZB.top - .5 * (BB.defaultLineHeight - IB)) / IB) * BB.viewState.heightOracle.lineLength
            }
            let vB = BB.state.sliceDoc(ZB.from, ZB.to);
            return ZB.from + (0, TB.ab)(vB, GB, BB.state.tabSize)
          }(BB, GB, oB, kB, cB);
          return new xZ(IB, IB == oB.from ? 1 : -1)
        }
      }
      if (oB.type != HB.Text) return nB < (oB.top + oB.bottom) / 2 ? new xZ(oB.from, 1) : new xZ(oB.to, -1);
      let hB = BB.docView.lineAt(oB.from, 2);
      return hB && hB.length == oB.length || (hB = BB.docView.lineAt(oB.from, -2)), new DZ(BB, kB, cB, BB.textDirectionAt(oB.from)).scanTile(hB, oB.from)
    }
    class DZ {
      constructor(BB, IB, ZB, TB) {
        this.view = BB, this.x = IB, this.y = ZB, this.baseDir = TB, this.line = null, this.spans = null
      }
      bidiSpansAt(BB) {
        return (!this.line || this.line.from > BB || this.line.to < BB) && (this.line = this.view.state.doc.lineAt(BB), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(BB, IB) {
        let {
          line: ZB,
          spans: TB
        } = this.bidiSpansAt(BB);
        return TB[WI.find(TB, BB - ZB.from, -1, IB)].level == this.baseDir
      }
      dirAt(BB, IB) {
        let {
          line: ZB,
          spans: TB
        } = this.bidiSpansAt(BB);
        return TB[WI.find(TB, BB - ZB.from, -1, IB)].dir
      }
      bidiIn(BB, IB) {
        let {
          spans: ZB,
          line: TB
        } = this.bidiSpansAt(BB);
        return ZB.length > 1 || ZB.length && (ZB[0].level != this.baseDir || ZB[0].to + TB.from < IB)
      }
      scan(BB, IB) {
        let ZB, TB, JB, oB = 0,
          GB = BB.length - 1,
          vB = new Set,
          kB = this.bidiIn(BB[0], BB[GB]),
          cB = -1,
          nB = 1e9;
        BB: for (; oB < GB;) {
          let hB = GB - oB,
            zB = oB + GB >> 1;
          IB: if (vB.has(zB)) {
            let BB = oB + Math.floor(Math.random() * hB);
            for (let IB = 0; IB < hB; IB++) {
              if (!vB.has(BB)) {
                zB = BB;
                break IB
              }
              BB++, BB == GB && (BB = oB)
            }
            break BB
          } vB.add(zB);
          let FB = IB(zB);
          if (FB)
            for (let IB = 0; IB < FB.length; IB++) {
              let vB = FB[IB],
                hB = 0;
              if (!(0 == vB.width && FB.length > 1)) {
                if (vB.bottom < this.y)(!ZB || ZB.bottom < vB.bottom) && (ZB = vB), hB = 1;
                else if (vB.top > this.y)(!TB || TB.top > vB.top) && (TB = vB), hB = -1;
                else {
                  let BB = vB.left > this.x ? this.x - vB.left : vB.right < this.x ? this.x - vB.right : 0,
                    IB = Math.abs(BB);
                  IB < nB && (cB = zB, nB = IB, JB = vB), BB && (hB = BB < 0 == (this.baseDir == cI.LTR) ? -1 : 1)
                } - 1 != hB || kB && !this.baseDirAt(BB[zB], 1) ? 1 != hB || kB && !this.baseDirAt(BB[zB + 1], -1) || (oB = zB + 1) : GB = zB
              }
            }
        }
        if (!JB) {
          let JB = ZB && (!TB || this.y - ZB.bottom < TB.top - this.y) ? ZB : TB;
          return this.y = (JB.top + JB.bottom) / 2, this.scan(BB, IB)
        }
        if (nB) {
          if (ZB && ZB.bottom > JB.top) return this.y = ZB.bottom - 1, this.scan(BB, IB);
          if (TB && TB.top < JB.bottom) return this.y = TB.top + 1, this.scan(BB, IB)
        }
        let hB = (kB ? this.dirAt(BB[cB], 1) : this.baseDir) == cI.LTR;
        return {
          i: cB,
          after: this.x > (JB.left + JB.right) / 2 == hB
        }
      }
      scanText(BB, IB) {
        let ZB = [];
        for (let oB = 0; oB < BB.length; oB = (0, TB._)(BB.text, oB)) ZB.push(IB + oB);
        ZB.push(IB + BB.length);
        let JB = this.scan(ZB, (TB => {
          let JB = ZB[TB] - IB,
            oB = ZB[TB + 1] - IB;
          return TI(BB.dom, JB, oB).getClientRects()
        }));
        return JB.after ? new xZ(ZB[JB.i + 1], -1) : new xZ(ZB[JB.i], 1)
      }
      scanTile(BB, IB) {
        if (!BB.length) return new xZ(IB, 1);
        if (1 == BB.children.length) {
          let ZB = BB.children[0];
          if (ZB.isText()) return this.scanText(ZB, IB);
          if (ZB.isComposite()) return this.scanTile(ZB, IB)
        }
        let ZB = [IB];
        for (let GB = 0, vB = IB; GB < BB.children.length; GB++) ZB.push(vB += BB.children[GB].length);
        let TB = this.scan(ZB, (IB => {
            let ZB = BB.children[IB];
            return 48 & ZB.flags ? null : (1 == ZB.dom.nodeType ? ZB.dom : TI(ZB.dom, 0, ZB.length)).getClientRects()
          })),
          JB = BB.children[TB.i],
          oB = ZB[TB.i];
        return JB.isText() ? this.scanText(JB, oB) : JB.isComposite() ? this.scanTile(JB, oB) : TB.after ? new xZ(ZB[TB.i + 1], -1) : new xZ(oB, 1)
      }
    }
    const KZ = "\uffff";
    class VZ {
      constructor(BB, IB) {
        this.points = BB, this.view = IB, this.text = "", this.lineSeparator = IB.state.facet(TB.q.lineSeparator)
      }
      append(BB) {
        this.text += BB
      }
      lineBreak() {
        this.text += KZ
      }
      readRange(BB, IB) {
        if (!BB) return this;
        let ZB = BB.parentNode;
        for (let TB = BB;;) {
          this.findPointBefore(ZB, TB);
          let BB = this.text.length;
          this.readNode(TB);
          let JB = zZ.get(TB),
            oB = TB.nextSibling;
          if (oB == IB) {
            (null === JB || void 0 === JB ? void 0 : JB.breakAfter) && !oB && ZB != this.view.contentDOM && this.lineBreak();
            break
          }
          let GB = zZ.get(oB);
          (JB && GB ? JB.breakAfter : (JB ? JB.breakAfter : tB(TB)) || tB(oB) && ("BR" != TB.nodeName || (null === JB || void 0 === JB ? void 0 : JB.isWidget())) && this.text.length > BB) && !BT(oB, IB) && this.lineBreak(), TB = oB
        }
        return this.findPointBefore(ZB, IB), this
      }
      readTextNode(BB) {
        let IB = BB.nodeValue;
        for (let ZB of this.points) ZB.node == BB && (ZB.pos = this.text.length + Math.min(ZB.offset, IB.length));
        for (let ZB = 0, TB = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let JB, oB = -1,
            GB = 1;
          if (this.lineSeparator ? (oB = IB.indexOf(this.lineSeparator, ZB), GB = this.lineSeparator.length) : (JB = TB.exec(IB)) && (oB = JB.index, GB = JB[0].length), this.append(IB.slice(ZB, oB < 0 ? IB.length : oB)), oB < 0) break;
          if (this.lineBreak(), GB > 1)
            for (let IB of this.points) IB.node == BB && IB.pos > this.text.length && (IB.pos -= GB - 1);
          ZB = oB + GB
        }
      }
      readNode(BB) {
        let IB = zZ.get(BB),
          ZB = IB && IB.overrideDOMText;
        if (null != ZB) {
          this.findPointInside(BB, ZB.length);
          for (let BB = ZB.iter(); !BB.next().done;) BB.lineBreak ? this.lineBreak() : this.append(BB.value)
        } else 3 == BB.nodeType ? this.readTextNode(BB) : "BR" == BB.nodeName ? BB.nextSibling && this.lineBreak() : 1 == BB.nodeType && this.readRange(BB.firstChild, null)
      }
      findPointBefore(BB, IB) {
        for (let ZB of this.points) ZB.node == BB && BB.childNodes[ZB.offset] == IB && (ZB.pos = this.text.length)
      }
      findPointInside(BB, IB) {
        for (let ZB of this.points)(3 == BB.nodeType ? ZB.node == BB : BB.contains(ZB.node)) && (ZB.pos = this.text.length + (SZ(BB, ZB.node, ZB.offset) ? IB : 0))
      }
    }

    function SZ(BB, IB, ZB) {
      for (;;) {
        if (!IB || ZB < xB(IB)) return !1;
        if (IB == BB) return !0;
        ZB = AB(IB) + 1, IB = IB.parentNode
      }
    }

    function BT(BB, IB) {
      let ZB;
      for (; BB != IB && BB; BB = BB.nextSibling) {
        let IB = zZ.get(BB);
        if (!(null === IB || void 0 === IB ? void 0 : IB.isWidget())) return !1;
        IB && (ZB || (ZB = [])).push(IB)
      }
      if (ZB)
        for (let TB of ZB) {
          let BB = TB.overrideDOMText;
          if (null === BB || void 0 === BB ? void 0 : BB.length) return !1
        }
      return !0
    }
    class IT {
      constructor(BB, IB) {
        this.node = BB, this.offset = IB, this.pos = -1
      }
    }
    class ZT {
      constructor(BB, IB, ZB, JB) {
        this.typeOver = JB, this.bounds = null, this.text = "", this.domChanged = IB > -1;
        let {
          impreciseHead: oB,
          impreciseAnchor: GB
        } = BB.docView, vB = BB.state.selection;
        if (BB.state.readOnly && IB > -1) this.newSel = null;
        else if (IB > -1 && (this.bounds = TT(BB.docView.tile, IB, ZB, 0))) {
          let IB = oB || GB ? [] : function(BB) {
              let IB = [];
              if (BB.root.activeElement != BB.contentDOM) return IB;
              let {
                anchorNode: ZB,
                anchorOffset: TB,
                focusNode: JB,
                focusOffset: oB
              } = BB.observer.selectionRange;
              ZB && (IB.push(new IT(ZB, TB)), JB == ZB && oB == TB || IB.push(new IT(JB, oB)));
              return IB
            }(BB),
            ZB = new VZ(IB, BB);
          ZB.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = ZB.text, this.newSel = function(BB, IB) {
            if (0 == BB.length) return null;
            let ZB = BB[0].pos,
              JB = 2 == BB.length ? BB[1].pos : ZB;
            return ZB > -1 && JB > -1 ? TB.n.single(ZB + IB, JB + IB) : null
          }(IB, this.bounds.from)
        } else {
          let IB = BB.observer.selectionRange,
            ZB = oB && oB.node == IB.focusNode && oB.offset == IB.focusOffset || !eB(BB.contentDOM, IB.focusNode) ? vB.main.head : BB.docView.posFromDOM(IB.focusNode, IB.focusOffset),
            JB = GB && GB.node == IB.anchorNode && GB.offset == IB.anchorOffset || !eB(BB.contentDOM, IB.anchorNode) ? vB.main.anchor : BB.docView.posFromDOM(IB.anchorNode, IB.anchorOffset),
            kB = BB.viewport;
          if ((sB.ios || sB.chrome) && vB.main.empty && ZB != JB && (kB.from > 0 || kB.to < BB.state.doc.length)) {
            let IB = Math.min(ZB, JB),
              TB = Math.max(ZB, JB),
              oB = kB.from - IB,
              GB = kB.to - TB;
            0 != oB && 1 != oB && 0 != IB || 0 != GB && -1 != GB && TB != BB.state.doc.length || (ZB = 0, JB = BB.state.doc.length)
          }
          if (BB.inputState.composing > -1 && vB.vq.length > 1) this.newSel = vB.replaceRange(TB.n.range(JB, ZB));
          else if (BB.lineWrapping && JB == ZB && (!vB.main.empty || vB.main.head != ZB) && BB.inputState.lastTouchTime > Date.now() - 100) {
            let IB = BB.coordsAtPos(ZB, -1),
              JB = 0;
            IB && (JB = BB.inputState.lastTouchY <= IB.bottom ? -1 : 1), this.newSel = TB.n.create([TB.n.cursor(ZB, JB)])
          } else this.newSel = TB.n.single(JB, ZB)
        }
      }
    }

    function TT(BB, IB, ZB, TB) {
      if (BB.isComposite()) {
        let JB = -1,
          oB = -1,
          GB = -1,
          vB = -1;
        for (let kB = 0, cB = TB, nB = TB; kB < BB.children.length; kB++) {
          let TB = BB.children[kB],
            hB = cB + TB.length;
          if (cB < IB && hB > ZB) return TT(TB, IB, ZB, cB);
          if (hB >= IB && -1 == JB && (JB = kB, oB = cB), cB > ZB && TB.dom.parentNode == BB.dom) {
            GB = kB, vB = nB;
            break
          }
          nB = hB, cB = hB + TB.breakAfter
        }
        return {
          from: oB,
          to: vB < 0 ? TB + BB.length : vB,
          startDOM: (JB ? BB.children[JB - 1].dom.nextSibling : null) || BB.dom.firstChild,
          endDOM: GB < BB.children.length && GB >= 0 ? BB.children[GB].dom : null
        }
      }
      return BB.isText() ? {
        from: TB,
        to: TB + BB.length,
        startDOM: BB.dom,
        endDOM: BB.dom.nextSibling
      } : null
    }

    function JT(BB, IB) {
      let ZB, {
          newSel: JB
        } = IB,
        {
          state: oB
        } = BB,
        GB = oB.selection.main,
        vB = BB.inputState.lastKeyTime > Date.now() - 100 ? BB.inputState.lastKeyCode : -1;
      if (IB.bounds) {
        let {
          from: BB,
          to: JB
        } = IB.bounds, kB = GB.from, cB = null;
        (8 === vB || sB.android && IB.text.length < JB - BB) && (kB = GB.to, cB = "end");
        let nB, hB, zB = oB.doc.sliceString(BB, JB, KZ);
        !GB.empty && GB.from >= BB && GB.to <= JB && (IB.typeOver || zB != IB.text) && zB.slice(0, GB.from - BB) == IB.text.slice(0, GB.from - BB) && zB.slice(GB.to - BB) == IB.text.slice(nB = IB.text.length - (zB.length - (GB.to - BB))) ? ZB = {
          from: GB.from,
          to: GB.to,
          insert: TB.O.of(IB.text.slice(GB.from - BB, nB).split(KZ))
        } : (hB = GT(zB, IB.text, kB - BB, cB)) && (sB.chrome && 13 == vB && hB.toB == hB.from + 2 && IB.text.slice(hB.from, hB.toB) == KZ + KZ && hB.toB--, ZB = {
          from: BB + hB.from,
          to: BB + hB.toA,
          insert: TB.O.of(IB.text.slice(hB.from, hB.toB).split(KZ))
        })
      } else JB && (!BB.hasFocus && oB.facet(bI) || vT(JB, GB)) && (JB = null);
      if (!ZB && !JB) return !1;
      if ((sB.mac || sB.android) && ZB && ZB.from == ZB.to && ZB.from == GB.head - 1 && /^\. ?$/.test(ZB.insert.toString()) && "off" == BB.contentDOM.getAttribute("autocorrect") ? (JB && 2 == ZB.insert.length && (JB = TB.n.single(JB.main.anchor - 1, JB.main.head - 1)), ZB = {
          from: ZB.from,
          to: ZB.to,
          insert: TB.O.of([ZB.insert.toString().replace(".", " ")])
        }) : oB.doc.lineAt(GB.from).to < GB.to && BB.docView.lineHasWidget(GB.to) && BB.inputState.insertingTextAt > Date.now() - 50 ? ZB = {
          from: GB.from,
          to: GB.to,
          insert: oB.toText(BB.inputState.insertingText)
        } : sB.chrome && ZB && ZB.from == ZB.to && ZB.from == GB.head && "\n " == ZB.insert.toString() && BB.lineWrapping && (JB && (JB = TB.n.single(JB.main.anchor - 1, JB.main.head - 1)), ZB = {
          from: GB.from,
          to: GB.to,
          insert: TB.O.of([" "])
        }), ZB) return oT(BB, ZB, JB, vB);
      if (JB && !vT(JB, GB)) {
        let IB = !1,
          ZB = "select";
        return BB.inputState.lastSelectionTime > Date.now() - 50 && ("select" == BB.inputState.lastSelectionOrigin && (IB = !0), ZB = BB.inputState.lastSelectionOrigin, "select.pointer" == ZB && (JB = tZ(oB.facet(TZ).map((IB => IB(BB))), JB))), BB.dispatch({
          selection: JB,
          scrollIntoView: IB,
          userEvent: ZB
        }), !0
      }
      return !1
    }

    function oT(BB, IB, ZB) {
      let JB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (sB.ios && BB.inputState.flushIOSKey(IB)) return !0;
      let oB = BB.state.selection.main;
      if (sB.android && (IB.to == oB.to && (IB.from == oB.from || IB.from == oB.from - 1 && " " == BB.state.sliceDoc(IB.from, oB.from)) && 1 == IB.insert.length && 2 == IB.insert.lines && JI(BB.contentDOM, "Enter", 13) || (IB.from == oB.from - 1 && IB.to == oB.to && 0 == IB.insert.length || 8 == JB && IB.insert.length < IB.to - IB.from && IB.to > oB.head) && JI(BB.contentDOM, "Backspace", 8) || IB.from == oB.from && IB.to == oB.to + 1 && 0 == IB.insert.length && JI(BB.contentDOM, "Delete", 46))) return !0;
      let GB, vB = IB.insert.toString();
      BB.inputState.composing >= 0 && BB.inputState.composing++;
      let kB = () => GB || (GB = function(BB, IB, ZB) {
        let JB, oB = BB.state,
          GB = oB.selection.main,
          vB = -1;
        if (IB.from == IB.to && IB.from < GB.from || IB.from > GB.to) {
          let ZB = IB.from < GB.from ? -1 : 1,
            TB = ZB < 0 ? GB.from : GB.to,
            JB = AZ(oB.facet(TZ).map((IB => IB(BB))), TB, ZB);
          IB.from == JB && (vB = JB)
        }
        if (vB > -1) JB = {
          changes: IB,
          selection: TB.n.cursor(IB.from + IB.insert.length, -1)
        };
        else if (IB.from >= GB.from && IB.to <= GB.to && IB.to - IB.from >= (GB.to - GB.from) / 3 && (!ZB || ZB.main.empty && ZB.main.from == IB.from + IB.insert.length) && BB.inputState.composing < 0) {
          let ZB = GB.from < IB.from ? oB.sliceDoc(GB.from, IB.from) : "",
            TB = GB.to > IB.to ? oB.sliceDoc(IB.to, GB.to) : "";
          JB = oB.replaceSelection(BB.state.toText(ZB + IB.insert.sliceString(0, void 0, BB.state.lineBreak) + TB))
        } else {
          let vB = oB.changes(IB),
            kB = ZB && ZB.main.to <= vB.newLength ? ZB.main : void 0;
          if (oB.selection.vq.length > 1 && (BB.inputState.composing >= 0 || BB.inputState.compositionPendingChange) && IB.to <= GB.to + 10 && IB.to >= GB.to - 10) {
            let cB, nB = BB.state.sliceDoc(IB.from, IB.to),
              hB = ZB && XZ(BB, ZB.main.head);
            if (hB) {
              let BB = IB.insert.length - (IB.to - IB.from);
              cB = {
                from: hB.from,
                to: hB.to - BB
              }
            } else cB = BB.state.doc.lineAt(GB.head);
            let zB = GB.to - IB.to;
            JB = oB.changeByRange((ZB => {
              if (ZB.from == GB.from && ZB.to == GB.to) return {
                changes: vB,
                range: kB || ZB.map(vB)
              };
              let JB = ZB.to - zB,
                hB = JB - nB.length;
              if (BB.state.sliceDoc(hB, JB) != nB || JB >= cB.from && hB <= cB.to) return {
                range: ZB
              };
              let FB = oB.changes({
                  from: hB,
                  to: JB,
                  insert: IB.insert
                }),
                NB = ZB.to - GB.to;
              return {
                changes: FB,
                range: kB ? TB.n.range(Math.max(0, kB.anchor + NB), Math.max(0, kB.head + NB)) : ZB.map(FB)
              }
            }))
          } else JB = {
            changes: vB,
            selection: kB && oB.selection.replaceRange(kB)
          }
        }
        let kB = "input.type";
        (BB.composing || BB.inputState.compositionPendingChange && BB.inputState.compositionEndedAt > Date.now() - 50) && (BB.inputState.compositionPendingChange = !1, kB += ".compose", BB.inputState.compositionFirstChange && (kB += ".start", BB.inputState.compositionFirstChange = !1));
        return oB.update(JB, {
          userEvent: kB,
          scrollIntoView: !0
        })
      }(BB, IB, ZB));
      return BB.state.facet(RI).some((ZB => ZB(BB, IB.from, IB.to, vB, kB))) || BB.dispatch(kB()), !0
    }

    function GT(BB, IB, ZB, TB) {
      let JB = Math.min(BB.length, IB.length),
        oB = 0;
      for (; oB < JB && BB.charCodeAt(oB) == IB.charCodeAt(oB);) oB++;
      if (oB == JB && BB.length == IB.length) return null;
      let GB = BB.length,
        vB = IB.length;
      for (; GB > 0 && vB > 0 && BB.charCodeAt(GB - 1) == IB.charCodeAt(vB - 1);) GB--, vB--;
      if ("end" == TB) {
        ZB -= GB + Math.max(0, oB - Math.min(GB, vB)) - oB
      }
      if (GB < oB && BB.length < IB.length) {
        oB -= ZB <= oB && ZB >= GB ? oB - ZB : 0, vB = oB + (vB - GB), GB = oB
      } else if (vB < oB) {
        oB -= ZB <= oB && ZB >= vB ? oB - ZB : 0, GB = oB + (GB - vB), vB = oB
      }
      return {
        from: oB,
        toA: GB,
        toB: vB
      }
    }

    function vT(BB, IB) {
      return IB.head == BB.main.head && IB.anchor == BB.main.anchor
    }
    class kT {
      setSelectionOrigin(BB) {
        this.lastSelectionOrigin = BB, this.lastSelectionTime = Date.now()
      }
      constructor(BB) {
        this.view = BB, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = BB.hasFocus, sB.safari && BB.contentDOM.addEventListener("input", (() => null)), sB.gecko && function(BB) {
          jT.has(BB) || (jT.add(BB), BB.addEventListener("copy", (() => {})), BB.addEventListener("cut", (() => {})))
        }(BB.contentDOM.ownerDocument)
      }
      handleEvent(BB) {
        (function(BB, IB) {
          if (!IB.bubbles) return !0;
          if (IB.defaultPrevented) return !1;
          for (let ZB, TB = IB.target; TB != BB.contentDOM; TB = TB.parentNode)
            if (!TB || 11 == TB.nodeType || (ZB = zZ.get(TB)) && ZB.isWidget() && !ZB.isHidden && ZB.widget.ignoreEvent(IB)) return !1;
          return !0
        })(this.view, BB) && !this.ignoreDuringComposition(BB) && ("keydown" == BB.type && this.keydown(BB) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(BB.type, BB))) : this.runHandlers(BB.type, BB)))
      }
      runHandlers(BB, IB) {
        let ZB = this.handlers[BB];
        if (ZB) {
          for (let BB of ZB.observers) BB(this.view, IB);
          for (let BB of ZB.handlers) {
            if (IB.defaultPrevented) break;
            if (BB(this.view, IB)) {
              IB.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(BB) {
        let IB = nT(BB),
          ZB = this.handlers,
          TB = this.view.contentDOM;
        for (let JB in IB)
          if ("scroll" != JB) {
            let BB = !IB[JB].handlers.length,
              oB = ZB[JB];
            oB && BB != !oB.handlers.length && (TB.removeEventListener(JB, this.handleEvent), oB = null), oB || TB.addEventListener(JB, this.handleEvent, {
              passive: BB
            })
          } for (let JB in ZB) "scroll" == JB || IB[JB] || TB.removeEventListener(JB, this.handleEvent);
        this.handlers = IB
      }
      keydown(BB) {
        if (this.lastKeyCode = BB.keyCode, this.lastKeyTime = Date.now(), 9 == BB.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != BB.keyCode && FT.indexOf(BB.keyCode) < 0 && (this.tabFocusMode = -1), sB.android && sB.chrome && !BB.synthetic && (13 == BB.keyCode || 8 == BB.keyCode)) return this.view.observer.delayAndroidKey(BB.key, BB.keyCode), !0;
        let IB;
        return !sB.ios || BB.synthetic || BB.altKey || BB.metaKey || BB.shiftKey || !((IB = hT.find((IB => IB.keyCode == BB.keyCode))) && !BB.ctrlKey || zT.indexOf(BB.key) > -1 && BB.ctrlKey) ? (229 != BB.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = IB || BB, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(BB) {
        let IB = this.pendingIOSKey;
        return !!IB && (!("Enter" == IB.key && BB && BB.from < BB.to && /^\S+$/.test(BB.insert.toString())) && (this.pendingIOSKey = void 0, JI(this.view.contentDOM, IB.key, IB.keyCode, IB instanceof KeyboardEvent ? IB : void 0)))
      }
      ignoreDuringComposition(BB) {
        return !(!/^key/.test(BB.type) || BB.synthetic) && (this.composing > 0 || !!(sB.safari && !sB.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
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

    function cT(BB, IB) {
      return (ZB, TB) => {
        try {
          return IB.call(BB, TB, ZB)
        } catch (JB) {
          tI(ZB.state, JB)
        }
      }
    }

    function nT(BB) {
      let IB = Object.create(null);

      function ZB(BB) {
        return IB[BB] || (IB[BB] = {
          observers: [],
          handlers: []
        })
      }
      for (let TB of BB) {
        let BB = TB.spec,
          IB = BB && BB.plugin.domEventHandlers,
          JB = BB && BB.plugin.domEventObservers;
        if (IB)
          for (let oB in IB) {
            let BB = IB[oB];
            BB && ZB(oB).handlers.push(cT(TB.value, BB))
          }
        if (JB)
          for (let oB in JB) {
            let BB = JB[oB];
            BB && ZB(oB).observers.push(cT(TB.value, BB))
          }
      }
      for (let TB in qT) ZB(TB).handlers.push(qT[TB]);
      for (let TB in yT) ZB(TB).observers.push(yT[TB]);
      return IB
    }
    const hT = [{
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
      zT = "dthko",
      FT = [16, 17, 18, 20, 91, 92, 224, 225];

    function NT(BB) {
      return .7 * Math.max(0, BB) + 8
    }
    class gT {
      constructor(BB, IB, ZB, JB) {
        this.view = BB, this.startEvent = IB, this.style = ZB, this.mustSelect = JB, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = IB, this.scrollParents = VB(BB.contentDOM), this.atoms = BB.state.facet(TZ).map((IB => IB(BB)));
        let oB = BB.contentDOM.ownerDocument;
        oB.addEventListener("mousemove", this.move = this.move.bind(this)), oB.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = IB.shiftKey, this.multiple = BB.state.facet(TB.q.allowMultipleSelections) && function(BB, IB) {
          let ZB = BB.state.facet(aI);
          return ZB.length ? ZB[0](IB) : sB.mac ? IB.metaKey : IB.ctrlKey
        }(BB, IB), this.dragging = !(! function(BB, IB) {
          let {
            main: ZB
          } = BB.state.selection;
          if (ZB.empty) return !1;
          let TB = LB(BB.root);
          if (!TB || 0 == TB.rangeCount) return !0;
          let JB = TB.getRangeAt(0).getClientRects();
          for (let oB = 0; oB < JB.length; oB++) {
            let BB = JB[oB];
            if (BB.left <= IB.clientX && BB.right >= IB.clientX && BB.top <= IB.clientY && BB.bottom >= IB.clientY) return !0
          }
          return !1
        }(BB, IB) || 1 != YT(IB)) && null
      }
      start(BB) {
        !1 === this.dragging && this.select(BB)
      }
      move(BB) {
        if (0 == BB.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (IB = this.startEvent, ZB = BB, Math.max(Math.abs(IB.clientX - ZB.clientX), Math.abs(IB.clientY - ZB.clientY)) < 10)) return;
        var IB, ZB;
        this.select(this.lastEvent = BB);
        let TB = 0,
          JB = 0,
          oB = 0,
          GB = 0,
          vB = this.view.win.innerWidth,
          kB = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: oB,
          right: vB
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: GB,
          bottom: kB
        } = this.scrollParents.y.getBoundingClientRect());
        let cB = vZ(this.view);
        BB.clientX - cB.left <= oB + 6 ? TB = -NT(oB - BB.clientX) : BB.clientX + cB.right >= vB - 6 && (TB = NT(BB.clientX - vB)), BB.clientY - cB.top <= GB + 6 ? JB = -NT(GB - BB.clientY) : BB.clientY + cB.bottom >= kB - 6 && (JB = NT(BB.clientY - kB)), this.setScrollSpeed(TB, JB)
      }
      up(BB) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || BB.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let BB = this.view.contentDOM.ownerDocument;
        BB.removeEventListener("mousemove", this.move), BB.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(BB, IB) {
        this.scrollSpeed = {
          x: BB,
          y: IB
        }, BB || IB ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: BB,
          y: IB
        } = this.scrollSpeed;
        BB && this.scrollParents.x && (this.scrollParents.x.scrollLeft += BB, BB = 0), IB && this.scrollParents.y && (this.scrollParents.y.scrollTop += IB, IB = 0), (BB || IB) && this.view.win.scrollBy(BB, IB), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(BB) {
        let {
          view: IB
        } = this, ZB = tZ(this.atoms, this.style.get(BB, this.extend, this.multiple));
        !this.mustSelect && ZB.eq(IB.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: ZB,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(BB) {
        BB.transactions.some((BB => BB.isUserEvent("input.type"))) ? this.destroy() : this.style.update(BB) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const qT = Object.create(null),
      yT = Object.create(null),
      UT = sB.ie && sB.ie_version < 15 || sB.ios && sB.webkit_version < 604;

    function WT(BB, IB, ZB) {
      for (let TB of BB.facet(IB)) ZB = TB(ZB, BB);
      return ZB
    }

    function dT(BB, IB) {
      IB = WT(BB.state, mI, IB);
      let ZB, {
          state: JB
        } = BB,
        oB = 1,
        GB = JB.toText(IB),
        vB = GB.lines == JB.selection.vq.length;
      if (null != pT && JB.selection.vq.every((BB => BB.empty)) && pT == GB.toString()) {
        let BB = -1;
        ZB = JB.changeByRange((ZB => {
          let kB = JB.doc.lineAt(ZB.from);
          if (kB.from == BB) return {
            range: ZB
          };
          BB = kB.from;
          let cB = JB.toText((vB ? GB.line(oB++).text : IB) + JB.lineBreak);
          return {
            changes: {
              from: kB.from,
              insert: cB
            },
            range: TB.n.cursor(ZB.from + cB.length)
          }
        }))
      } else ZB = vB ? JB.changeByRange((BB => {
        let IB = GB.line(oB++);
        return {
          changes: {
            from: BB.from,
            to: BB.to,
            insert: IB.text
          },
          range: TB.n.cursor(BB.from + IB.length)
        }
      })) : JB.replaceSelection(GB);
      BB.dispatch(ZB, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function CT(BB, IB, ZB, JB) {
      if (1 == JB) return TB.n.cursor(IB, ZB);
      if (2 == JB) return function(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          JB = BB.charCategorizer(IB),
          oB = BB.doc.lineAt(IB),
          GB = IB - oB.from;
        if (0 == oB.length) return TB.n.cursor(IB);
        0 == GB ? ZB = 1 : GB == oB.length && (ZB = -1);
        let vB = GB,
          kB = GB;
        ZB < 0 ? vB = (0, TB._)(oB.text, GB, !1) : kB = (0, TB._)(oB.text, GB);
        let cB = JB(oB.text.slice(vB, kB));
        for (; vB > 0;) {
          let BB = (0, TB._)(oB.text, vB, !1);
          if (JB(oB.text.slice(BB, vB)) != cB) break;
          vB = BB
        }
        for (; kB < oB.length;) {
          let BB = (0, TB._)(oB.text, kB);
          if (JB(oB.text.slice(kB, BB)) != cB) break;
          kB = BB
        }
        return TB.n.range(vB + oB.from, kB + oB.from)
      }(BB.state, IB, ZB);
      {
        let JB = BB.docView.lineAt(IB, ZB),
          oB = BB.state.doc.lineAt(JB ? JB.posAtEnd : IB),
          GB = JB ? JB.posAtStart : oB.from,
          vB = JB ? JB.posAtEnd : oB.to;
        return vB < BB.state.doc.length && vB == oB.to && vB++, TB.n.range(GB, vB)
      }
    }
    yT.scroll = BB => {
      BB.inputState.lastScrollTop = BB.scrollDOM.scrollTop, BB.inputState.lastScrollLeft = BB.scrollDOM.scrollLeft
    }, yT.wheel = yT.mousewheel = BB => {
      BB.inputState.lastWheelEvent = Date.now()
    }, qT.keydown = (BB, IB) => (BB.inputState.setSelectionOrigin("select"), 27 == IB.keyCode && 0 != BB.inputState.tabFocusMode && (BB.inputState.tabFocusMode = Date.now() + 2e3), !1), yT.touchstart = (BB, IB) => {
      let ZB = BB.inputState,
        TB = IB.targetTouches[0];
      ZB.lastTouchTime = Date.now(), TB && (ZB.lastTouchX = TB.clientX, ZB.lastTouchY = TB.clientY), ZB.setSelectionOrigin("select.pointer")
    }, yT.touchmove = BB => {
      BB.inputState.setSelectionOrigin("select.pointer")
    }, qT.mousedown = (BB, IB) => {
      if (BB.observer.flush(), BB.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let ZB = null;
      for (let TB of BB.state.facet(MI))
        if (ZB = TB(BB, IB), ZB) break;
      if (ZB || 0 != IB.button || (ZB = function(BB, IB) {
          let ZB = BB.posAndSideAtCoords({
              x: IB.clientX,
              y: IB.clientY
            }, !1),
            JB = YT(IB),
            oB = BB.state.selection;
          return {
            update(BB) {
              BB.docChanged && (ZB.pos = BB.changes.mapPos(ZB.pos), oB = oB.map(BB.changes))
            },
            get(IB, GB, vB) {
              let kB, cB = BB.posAndSideAtCoords({
                  x: IB.clientX,
                  y: IB.clientY
                }, !1),
                nB = CT(BB, cB.pos, cB.assoc, JB);
              if (ZB.pos != cB.pos && !GB) {
                let IB = CT(BB, ZB.pos, ZB.assoc, JB),
                  oB = Math.min(IB.from, nB.from),
                  GB = Math.max(IB.to, nB.to);
                nB = oB < nB.from ? TB.n.range(oB, GB, nB.assoc) : TB.n.range(GB, oB, nB.assoc)
              }
              return GB ? oB.replaceRange(oB.main.extend(nB.from, nB.to, nB.assoc)) : vB && 1 == JB && oB.vq.length > 1 && (kB = function(BB, IB) {
                for (let ZB = 0; ZB < BB.vq.length; ZB++) {
                  let {
                    from: JB,
                    to: oB
                  } = BB.vq[ZB];
                  if (JB <= IB && oB >= IB) return TB.n.create(BB.vq.slice(0, ZB).concat(BB.vq.slice(ZB + 1)), BB.mainIndex == ZB ? 0 : BB.mainIndex - (BB.mainIndex > ZB ? 1 : 0))
                }
                return null
              }(oB, cB.pos)) ? kB : vB ? oB.addRange(nB) : TB.n.create([nB])
            }
          }
        }(BB, IB)), ZB) {
        let TB = !BB.hasFocus;
        BB.inputState.startMouseSelection(new gT(BB, IB, ZB, TB)), TB && BB.observer.ignore((() => {
          ZI(BB.contentDOM);
          let IB = BB.root.activeElement;
          IB && !IB.contains(BB.contentDOM) && IB.blur()
        }));
        let JB = BB.inputState.mouseSelection;
        if (JB) return JB.start(IB), !1 === JB.dragging
      } else BB.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const QT = sB.ie && sB.ie_version <= 11;
    let sT = null,
      wT = 0,
      OT = 0;

    function YT(BB) {
      if (!QT) return BB.detail;
      let IB = sT,
        ZB = OT;
      return sT = BB, OT = Date.now(), wT = !IB || ZB > Date.now() - 400 && Math.abs(IB.clientX - BB.clientX) < 2 && Math.abs(IB.clientY - BB.clientY) < 2 ? (wT + 1) % 3 : 1
    }

    function iT(BB, IB, ZB, TB) {
      if (!(ZB = WT(BB.state, mI, ZB))) return;
      let JB = BB.posAtCoords({
          x: IB.clientX,
          y: IB.clientY
        }, !1),
        {
          draggedContent: oB
        } = BB.inputState,
        GB = TB && oB && function(BB, IB) {
          let ZB = BB.state.facet(HI);
          return ZB.length ? ZB[0](IB) : sB.mac ? !IB.altKey : !IB.ctrlKey
        }(BB, IB) ? {
          from: oB.from,
          to: oB.to
        } : null,
        vB = {
          from: JB,
          insert: ZB
        },
        kB = BB.state.changes(GB ? [GB, vB] : vB);
      BB.focus(), BB.dispatch({
        changes: kB,
        selection: {
          anchor: kB.mapPos(JB, -1),
          head: kB.mapPos(JB, 1)
        },
        userEvent: GB ? "move.drop" : "input.drop"
      }), BB.inputState.draggedContent = null
    }
    qT.dragstart = (BB, IB) => {
      let {
        selection: {
          main: ZB
        }
      } = BB.state;
      if (IB.target.draggable) {
        let JB = BB.docView.tile.nearest(IB.target);
        if (JB && JB.isWidget()) {
          let BB = JB.posAtStart,
            IB = BB + JB.length;
          (BB >= ZB.to || IB <= ZB.from) && (ZB = TB.n.range(BB, IB))
        }
      }
      let {
        inputState: JB
      } = BB;
      return JB.mouseSelection && (JB.mouseSelection.dragging = !0), JB.draggedContent = ZB, IB.dataTransfer && (IB.dataTransfer.setData("Text", WT(BB.state, XI, BB.state.sliceDoc(ZB.from, ZB.to))), IB.dataTransfer.effectAllowed = "copyMove"), !1
    }, qT.dragend = BB => (BB.inputState.draggedContent = null, !1), qT.drop = (BB, IB) => {
      if (!IB.dataTransfer) return !1;
      if (BB.state.readOnly) return !0;
      let ZB = IB.dataTransfer.files;
      if (ZB && ZB.length) {
        let TB = Array(ZB.length),
          JB = 0,
          oB = () => {
            ++JB == ZB.length && iT(BB, IB, TB.filter((BB => null != BB)).join(BB.state.lineBreak), !1)
          };
        for (let BB = 0; BB < ZB.length; BB++) {
          let IB = new FileReader;
          IB.onerror = oB, IB.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(IB.result) || (TB[BB] = IB.result), oB()
          }, IB.readAsText(ZB[BB])
        }
        return !0
      } {
        let ZB = IB.dataTransfer.getData("Text");
        if (ZB) return iT(BB, IB, ZB, !0), !0
      }
      return !1
    }, qT.paste = (BB, IB) => {
      if (BB.state.readOnly) return !0;
      BB.observer.flush();
      let ZB = UT ? null : IB.clipboardData;
      return ZB ? (dT(BB, ZB.getData("text/plain") || ZB.getData("text/uri-list")), !0) : (function(BB) {
        let IB = BB.dom.parentNode;
        if (!IB) return;
        let ZB = IB.appendChild(document.createElement("textarea"));
        ZB.style.cssText = "position: fixed; left: -10000px; top: 10px", ZB.focus(), setTimeout((() => {
          BB.focus(), ZB.remove(), dT(BB, ZB.value)
        }), 50)
      }(BB), !1)
    };
    let pT = null;
    qT.copy = qT.cut = (BB, IB) => {
      if (!uB(BB.contentDOM, BB.observer.selectionRange)) return !1;
      let {
        text: ZB,
        vq: TB,
        linewise: JB
      } = function(BB) {
        let IB = [],
          ZB = [],
          TB = !1;
        for (let JB of BB.selection.vq) JB.empty || (IB.push(BB.sliceDoc(JB.from, JB.to)), ZB.push(JB));
        if (!IB.length) {
          let JB = -1;
          for (let {
              from: TB
            }
            of BB.selection.vq) {
            let oB = BB.doc.lineAt(TB);
            oB.number > JB && (IB.push(oB.text), ZB.push({
              from: oB.from,
              to: Math.min(BB.doc.length, oB.to + 1)
            })), JB = oB.number
          }
          TB = !0
        }
        return {
          text: WT(BB, XI, IB.join(BB.lineBreak)),
          vq: ZB,
          linewise: TB
        }
      }(BB.state);
      if (!ZB && !JB) return !1;
      pT = JB ? ZB : null, "cut" != IB.type || BB.state.readOnly || BB.dispatch({
        changes: TB,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let oB = UT ? null : IB.clipboardData;
      return oB ? (oB.clearData(), oB.setData("text/plain", ZB), !0) : (function(BB, IB) {
        let ZB = BB.dom.parentNode;
        if (!ZB) return;
        let TB = ZB.appendChild(document.createElement("textarea"));
        TB.style.cssText = "position: fixed; left: -10000px; top: 10px", TB.value = IB, TB.focus(), TB.selectionEnd = IB.length, TB.selectionStart = 0, setTimeout((() => {
          TB.remove(), BB.focus()
        }), 50)
      }(BB, ZB), !1)
    };
    const aT = TB.d.define();

    function HT(BB, IB) {
      let ZB = [];
      for (let TB of BB.facet(rI)) {
        let JB = TB(BB, IB);
        JB && ZB.push(JB)
      }
      return ZB.length ? BB.update({
        effects: ZB,
        annotations: aT.of(!0)
      }) : null
    }

    function MT(BB) {
      setTimeout((() => {
        let IB = BB.hasFocus;
        if (IB != BB.inputState.notifiedFocused) {
          let ZB = HT(BB.state, IB);
          ZB ? BB.dispatch(ZB) : BB.update([])
        }
      }), 10)
    }
    yT.focus = BB => {
      BB.inputState.lastFocusTime = Date.now(), BB.scrollDOM.scrollTop || !BB.inputState.lastScrollTop && !BB.inputState.lastScrollLeft || (BB.scrollDOM.scrollTop = BB.inputState.lastScrollTop, BB.scrollDOM.scrollLeft = BB.inputState.lastScrollLeft), MT(BB)
    }, yT.blur = BB => {
      BB.observer.clearSelectionRange(), MT(BB)
    }, yT.compositionstart = yT.compositionupdate = BB => {
      BB.observer.editContext || (null == BB.inputState.compositionFirstChange && (BB.inputState.compositionFirstChange = !0), BB.inputState.composing < 0 && (BB.inputState.composing = 0))
    }, yT.compositionend = BB => {
      BB.observer.editContext || (BB.inputState.composing = -1, BB.inputState.compositionEndedAt = Date.now(), BB.inputState.compositionPendingKey = !0, BB.inputState.compositionPendingChange = BB.observer.pendingRecords().length > 0, BB.inputState.compositionFirstChange = null, sB.chrome && sB.android ? BB.observer.flushSoon() : BB.inputState.compositionPendingChange ? Promise.resolve().then((() => BB.observer.flush())) : setTimeout((() => {
        BB.inputState.composing < 0 && BB.docView.hasComposition && BB.update([])
      }), 50))
    }, yT.contextmenu = BB => {
      BB.inputState.lastContextMenu = Date.now()
    }, qT.beforeinput = (BB, IB) => {
      var ZB, TB;
      if ("insertText" != IB.inputType && "insertCompositionText" != IB.inputType || (BB.inputState.insertingText = IB.data, BB.inputState.insertingTextAt = Date.now()), "insertReplacementText" == IB.inputType && BB.observer.editContext) {
        let TB = null === (ZB = IB.dataTransfer) || void 0 === ZB ? void 0 : ZB.getData("text/plain"),
          JB = IB.getTargetRanges();
        if (TB && JB.length) {
          let IB = JB[0],
            ZB = BB.posAtDOM(IB.startContainer, IB.startOffset),
            oB = BB.posAtDOM(IB.endContainer, IB.endOffset);
          return oT(BB, {
            from: ZB,
            to: oB,
            insert: BB.state.toText(TB)
          }, null), !0
        }
      }
      let JB;
      if (sB.chrome && sB.android && (JB = hT.find((BB => BB.inputType == IB.inputType))) && (BB.observer.delayAndroidKey(JB.key, JB.keyCode), "Backspace" == JB.key || "Delete" == JB.key)) {
        let IB = (null === (TB = window.visualViewport) || void 0 === TB ? void 0 : TB.height) || 0;
        setTimeout((() => {
          var ZB;
          ((null === (ZB = window.visualViewport) || void 0 === ZB ? void 0 : ZB.height) || 0) > IB + 10 && BB.hasFocus && (BB.contentDOM.blur(), BB.focus())
        }), 100)
      }
      return sB.ios && "deleteContentForward" == IB.inputType && BB.observer.flushSoon(), sB.safari && "insertText" == IB.inputType && BB.inputState.composing >= 0 && setTimeout((() => yT.compositionend(BB, IB)), 20), !1
    };
    const jT = new Set;
    const PT = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let RT = !1;

    function rT() {
      RT = !1
    }
    class mT {
      constructor(BB) {
        this.lineWrapping = BB, this.doc = TB.O.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(BB, IB) {
        let ZB = this.doc.lineAt(IB).number - this.doc.lineAt(BB).number + 1;
        return this.lineWrapping && (ZB += Math.max(0, Math.ceil((IB - BB - ZB * this.lineLength * .5) / this.lineLength))), this.lineHeight * ZB
      }
      heightForLine(BB) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((BB - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(BB) {
        return this.doc = BB, this
      }
      mustRefreshForWrapping(BB) {
        return PT.indexOf(BB) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(BB) {
        let IB = !1;
        for (let ZB = 0; ZB < BB.length; ZB++) {
          let TB = BB[ZB];
          TB < 0 ? ZB++ : this.heightSamples[Math.floor(10 * TB)] || (IB = !0, this.heightSamples[Math.floor(10 * TB)] = !0)
        }
        return IB
      }
      refresh(BB, IB, ZB, TB, JB, oB) {
        let GB = PT.indexOf(BB) > -1,
          vB = Math.abs(IB - this.lineHeight) > .3 || this.lineWrapping != GB || Math.abs(ZB - this.charWidth) > .1;
        if (this.lineWrapping = GB, this.lineHeight = IB, this.charWidth = ZB, this.textHeight = TB, this.lineLength = JB, vB) {
          this.heightSamples = {};
          for (let BB = 0; BB < oB.length; BB++) {
            let IB = oB[BB];
            IB < 0 ? BB++ : this.heightSamples[Math.floor(10 * IB)] = !0
          }
        }
        return vB
      }
    }
    class XT {
      constructor(BB, IB) {
        this.from = BB, this.heights = IB, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class LT {
      constructor(BB, IB, ZB, TB, JB) {
        this.from = BB, this.length = IB, this.top = ZB, this.height = TB, this._content = JB
      }
      get type() {
        return "number" == typeof this._content ? HB.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof RB ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(BB) {
        let IB = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(BB._content) ? BB._content : [BB]);
        return new LT(this.from, this.length + BB.length, this.top, this.height + BB.height, IB)
      }
    }
    var eT = function(BB) {
      return BB[BB.ByPos = 0] = "ByPos", BB[BB.ByHeight = 1] = "ByHeight", BB[BB.ByPosNoHeight = 2] = "ByPosNoHeight", BB
    }(eT || (eT = {}));
    const uT = .001;
    class fT {
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = BB, this.height = IB, this.flags = ZB
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(BB) {
        this.flags = (BB ? 2 : 0) | -3 & this.flags
      }
      setHeight(BB) {
        this.height != BB && (Math.abs(this.height - BB) > uT && (RT = !0), this.height = BB)
      }
      replace(BB, IB, ZB) {
        return fT.of(ZB)
      }
      decomposeLeft(BB, IB) {
        IB.push(this)
      }
      decomposeRight(BB, IB) {
        IB.push(this)
      }
      applyChanges(BB, IB, ZB, TB) {
        let JB = this,
          oB = ZB.doc;
        for (let GB = TB.length - 1; GB >= 0; GB--) {
          let {
            fromA: vB,
            toA: kB,
            fromB: cB,
            toB: nB
          } = TB[GB], hB = JB.lineAt(vB, eT.ByPosNoHeight, ZB.setDoc(IB), 0, 0), zB = hB.to >= kB ? hB : JB.lineAt(kB, eT.ByPosNoHeight, ZB, 0, 0);
          for (nB += zB.to - kB, kB = zB.to; GB > 0 && hB.from <= TB[GB - 1].toA;) vB = TB[GB - 1].fromA, cB = TB[GB - 1].fromB, GB--, vB < hB.from && (hB = JB.lineAt(vB, eT.ByPosNoHeight, ZB, 0, 0));
          cB += hB.from - vB, vB = hB.from;
          let FB = KT.build(ZB.setDoc(oB), BB, cB, nB);
          JB = lT(JB, JB.replace(vB, kB, FB))
        }
        return JB.updateHeight(ZB, 0)
      }
      static empty() {
        return new bT(0, 0, 0)
      }
      static of (BB) {
        if (1 == BB.length) return BB[0];
        let IB = 0,
          ZB = BB.length,
          TB = 0,
          JB = 0;
        for (;;)
          if (IB == ZB)
            if (TB > 2 * JB) {
              let JB = BB[IB - 1];
              JB.break ? BB.splice(--IB, 1, JB.left, null, JB.right) : BB.splice(--IB, 1, JB.left, JB.right), ZB += 1 + JB.break, TB -= JB.size
            } else {
              if (!(JB > 2 * TB)) break;
              {
                let IB = BB[ZB];
                IB.break ? BB.splice(ZB, 1, IB.left, null, IB.right) : BB.splice(ZB, 1, IB.left, IB.right), ZB += 2 + IB.break, JB -= IB.size
              }
            }
        else if (TB < JB) {
          let ZB = BB[IB++];
          ZB && (TB += ZB.size)
        } else {
          let IB = BB[--ZB];
          IB && (JB += IB.size)
        }
        let oB = 0;
        return null == BB[IB - 1] ? (oB = 1, IB--) : null == BB[IB] && (oB = 1, ZB++), new ET(fT.of(BB.slice(0, IB)), oB, fT.of(BB.slice(ZB)))
      }
    }

    function lT(BB, IB) {
      return BB == IB ? BB : (BB.constructor != IB.constructor && (RT = !0), IB)
    }
    fT.prototype.size = 1;
    const AT = MB.replace({});
    class tT extends fT {
      constructor(BB, IB, ZB) {
        super(BB, IB), this.deco = ZB, this.spaceAbove = 0
      }
      mainBlock(BB, IB) {
        return new LT(IB, this.length, BB + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(BB, IB, ZB, TB) {
        return this.spaceAbove && BB < ZB + this.spaceAbove ? new LT(TB, 0, ZB, this.spaceAbove, AT) : this.mainBlock(ZB, TB)
      }
      lineAt(BB, IB, ZB, TB, JB) {
        let oB = this.mainBlock(TB, JB);
        return this.spaceAbove ? this.blockAt(0, ZB, TB, JB).join(oB) : oB
      }
      forEachLine(BB, IB, ZB, TB, JB, oB) {
        BB <= JB + this.length && IB >= JB && oB(this.lineAt(0, eT.ByPos, ZB, TB, JB))
      }
      setMeasuredHeight(BB) {
        let IB = BB.heights[BB.index++];
        IB < 0 ? (this.spaceAbove = -IB, IB = BB.heights[BB.index++]) : this.spaceAbove = 0, this.setHeight(IB)
      }
      updateHeight(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZB = arguments.length > 3 ? arguments[3] : void 0;
        return ZB && ZB.from <= IB && ZB.more && this.setMeasuredHeight(ZB), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class bT extends tT {
      constructor(BB, IB, ZB) {
        super(BB, IB, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = ZB
      }
      mainBlock(BB, IB) {
        return new LT(IB, this.length, BB + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(BB, IB, ZB) {
        let TB = ZB[0];
        return 1 == ZB.length && (TB instanceof bT || TB instanceof xT && 4 & TB.flags) && Math.abs(this.length - TB.length) < 10 ? (TB instanceof xT ? TB = new bT(TB.length, this.height, this.spaceAbove) : TB.height = this.height, this.outdated || (TB.outdated = !1), TB) : fT.of(ZB)
      }
      updateHeight(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          TB = arguments.length > 3 ? arguments[3] : void 0;
        return TB && TB.from <= IB && TB.more ? this.setMeasuredHeight(TB) : (ZB || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, BB.heightForLine(this.length - this.collapsed)) + this.breaks * BB.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class xT extends fT {
      constructor(BB) {
        super(BB, 0)
      }
      heightMetrics(BB, IB) {
        let ZB, TB = BB.doc.lineAt(IB).number,
          JB = BB.doc.lineAt(IB + this.length).number,
          oB = JB - TB + 1,
          GB = 0;
        if (BB.lineWrapping) {
          let IB = Math.min(this.height, BB.lineHeight * oB);
          ZB = IB / oB, this.length > oB + 1 && (GB = (this.height - IB) / (this.length - oB - 1))
        } else ZB = this.height / oB;
        return {
          firstLine: TB,
          lastLine: JB,
          perLine: ZB,
          perChar: GB
        }
      }
      blockAt(BB, IB, ZB, TB) {
        let {
          firstLine: JB,
          lastLine: oB,
          perLine: GB,
          perChar: vB
        } = this.heightMetrics(IB, TB);
        if (IB.lineWrapping) {
          let JB = TB + (BB < IB.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (BB - ZB) / this.height)) * this.length)),
            oB = IB.doc.lineAt(JB),
            kB = GB + oB.length * vB,
            cB = Math.max(ZB, BB - kB / 2);
          return new LT(oB.from, oB.length, cB, kB, 0)
        } {
          let TB = Math.max(0, Math.min(oB - JB, Math.floor((BB - ZB) / GB))),
            {
              from: vB,
              length: kB
            } = IB.doc.line(JB + TB);
          return new LT(vB, kB, ZB + GB * TB, GB, 0)
        }
      }
      lineAt(BB, IB, ZB, TB, JB) {
        if (IB == eT.ByHeight) return this.blockAt(BB, ZB, TB, JB);
        if (IB == eT.ByPosNoHeight) {
          let {
            from: IB,
            to: TB
          } = ZB.doc.lineAt(BB);
          return new LT(IB, TB - IB, 0, 0, 0)
        }
        let {
          firstLine: oB,
          perLine: GB,
          perChar: vB
        } = this.heightMetrics(ZB, JB), kB = ZB.doc.lineAt(BB), cB = GB + kB.length * vB, nB = kB.number - oB, hB = TB + GB * nB + vB * (kB.from - JB - nB);
        return new LT(kB.from, kB.length, Math.max(TB, Math.min(hB, TB + this.height - cB)), cB, 0)
      }
      forEachLine(BB, IB, ZB, TB, JB, oB) {
        BB = Math.max(BB, JB), IB = Math.min(IB, JB + this.length);
        let {
          firstLine: GB,
          perLine: vB,
          perChar: kB
        } = this.heightMetrics(ZB, JB);
        for (let cB = BB, nB = TB; cB <= IB;) {
          let IB = ZB.doc.lineAt(cB);
          if (cB == BB) {
            let ZB = IB.number - GB;
            nB += vB * ZB + kB * (BB - JB - ZB)
          }
          let TB = vB + kB * IB.length;
          oB(new LT(IB.from, IB.length, nB, TB, 0)), nB += TB, cB = IB.to + 1
        }
      }
      replace(BB, IB, ZB) {
        let TB = this.length - IB;
        if (TB > 0) {
          let BB = ZB[ZB.length - 1];
          BB instanceof xT ? ZB[ZB.length - 1] = new xT(BB.length + TB) : ZB.push(null, new xT(TB - 1))
        }
        if (BB > 0) {
          let IB = ZB[0];
          IB instanceof xT ? ZB[0] = new xT(BB + IB.length) : ZB.unshift(new xT(BB - 1), null)
        }
        return fT.of(ZB)
      }
      decomposeLeft(BB, IB) {
        IB.push(new xT(BB - 1), null)
      }
      decomposeRight(BB, IB) {
        IB.push(null, new xT(this.length - BB - 1))
      }
      updateHeight(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          TB = arguments.length > 3 ? arguments[3] : void 0,
          JB = IB + this.length;
        if (TB && TB.from <= IB + this.length && TB.more) {
          let ZB = [],
            oB = Math.max(IB, TB.from),
            GB = -1;
          for (TB.from > IB && ZB.push(new xT(TB.from - IB - 1).updateHeight(BB, IB)); oB <= JB && TB.more;) {
            let IB = BB.doc.lineAt(oB).length;
            ZB.length && ZB.push(null);
            let JB = TB.heights[TB.index++],
              vB = 0;
            JB < 0 && (vB = -JB, JB = TB.heights[TB.index++]), -1 == GB ? GB = JB : Math.abs(JB - GB) >= uT && (GB = -2);
            let kB = new bT(IB, JB, vB);
            kB.outdated = !1, ZB.push(kB), oB += IB + 1
          }
          oB <= JB && ZB.push(null, new xT(JB - oB).updateHeight(BB, oB));
          let vB = fT.of(ZB);
          return (GB < 0 || Math.abs(vB.height - this.height) >= uT || Math.abs(GB - this.heightMetrics(BB, IB).perLine) >= uT) && (RT = !0), lT(this, vB)
        }
        return (ZB || this.outdated) && (this.setHeight(BB.heightForGap(IB, IB + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class ET extends fT {
      constructor(BB, IB, ZB) {
        super(BB.length + IB + ZB.length, BB.height + ZB.height, IB | (BB.outdated || ZB.outdated ? 2 : 0)), this.left = BB, this.right = ZB, this.size = BB.size + ZB.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(BB, IB, ZB, TB) {
        let JB = ZB + this.left.height;
        return BB < JB ? this.left.blockAt(BB, IB, ZB, TB) : this.right.blockAt(BB, IB, JB, TB + this.left.length + this.break)
      }
      lineAt(BB, IB, ZB, TB, JB) {
        let oB = TB + this.left.height,
          GB = JB + this.left.length + this.break,
          vB = IB == eT.ByHeight ? BB < oB : BB < GB,
          kB = vB ? this.left.lineAt(BB, IB, ZB, TB, JB) : this.right.lineAt(BB, IB, ZB, oB, GB);
        if (this.break || (vB ? kB.to < GB : kB.from > GB)) return kB;
        let cB = IB == eT.ByPosNoHeight ? eT.ByPosNoHeight : eT.ByPos;
        return vB ? kB.join(this.right.lineAt(GB, cB, ZB, oB, GB)) : this.left.lineAt(GB, cB, ZB, TB, JB).join(kB)
      }
      forEachLine(BB, IB, ZB, TB, JB, oB) {
        let GB = TB + this.left.height,
          vB = JB + this.left.length + this.break;
        if (this.break) BB < vB && this.left.forEachLine(BB, IB, ZB, TB, JB, oB), IB >= vB && this.right.forEachLine(BB, IB, ZB, GB, vB, oB);
        else {
          let kB = this.lineAt(vB, eT.ByPos, ZB, TB, JB);
          BB < kB.from && this.left.forEachLine(BB, kB.from - 1, ZB, TB, JB, oB), kB.to >= BB && kB.from <= IB && oB(kB), IB > kB.to && this.right.forEachLine(kB.to + 1, IB, ZB, GB, vB, oB)
        }
      }
      replace(BB, IB, ZB) {
        let TB = this.left.length + this.break;
        if (IB < TB) return this.balanced(this.left.replace(BB, IB, ZB), this.right);
        if (BB > this.left.length) return this.balanced(this.left, this.right.replace(BB - TB, IB - TB, ZB));
        let JB = [];
        BB > 0 && this.decomposeLeft(BB, JB);
        let oB = JB.length;
        for (let GB of ZB) JB.push(GB);
        if (BB > 0 && DT(JB, oB - 1), IB < this.length) {
          let BB = JB.length;
          this.decomposeRight(IB, JB), DT(JB, BB)
        }
        return fT.of(JB)
      }
      decomposeLeft(BB, IB) {
        let ZB = this.left.length;
        if (BB <= ZB) return this.left.decomposeLeft(BB, IB);
        IB.push(this.left), this.break && (ZB++, BB >= ZB && IB.push(null)), BB > ZB && this.right.decomposeLeft(BB - ZB, IB)
      }
      decomposeRight(BB, IB) {
        let ZB = this.left.length,
          TB = ZB + this.break;
        if (BB >= TB) return this.right.decomposeRight(BB - TB, IB);
        BB < ZB && this.left.decomposeRight(BB, IB), this.break && BB < TB && IB.push(null), IB.push(this.right)
      }
      balanced(BB, IB) {
        return BB.size > 2 * IB.size || IB.size > 2 * BB.size ? fT.of(this.break ? [BB, null, IB] : [BB, IB]) : (this.left = lT(this.left, BB), this.right = lT(this.right, IB), this.setHeight(BB.height + IB.height), this.outdated = BB.outdated || IB.outdated, this.size = BB.size + IB.size, this.length = BB.length + this.break+IB.length, this)
      }
      updateHeight(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          TB = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: JB,
            right: oB
          } = this,
          GB = IB + JB.length + this.break,
          vB = null;
        return TB && TB.from <= IB + JB.length && TB.more ? vB = JB = JB.updateHeight(BB, IB, ZB, TB) : JB.updateHeight(BB, IB, ZB), TB && TB.from <= GB + oB.length && TB.more ? vB = oB = oB.updateHeight(BB, GB, ZB, TB) : oB.updateHeight(BB, GB, ZB), vB ? this.balanced(JB, oB) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function DT(BB, IB) {
      let ZB, TB;
      null == BB[IB] && (ZB = BB[IB - 1]) instanceof xT && (TB = BB[IB + 1]) instanceof xT && BB.splice(IB - 1, 3, new xT(ZB.length + 1 + TB.length))
    }
    class KT {
      constructor(BB, IB) {
        this.pos = BB, this.oracle = IB, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = BB
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(BB, IB) {
        if (this.lineStart > -1) {
          let BB = Math.min(IB, this.lineEnd),
            ZB = this.nodes[this.nodes.length - 1];
          ZB instanceof bT ? ZB.length += BB - this.pos : (BB > this.pos || !this.isCovered) && this.nodes.push(new bT(BB - this.pos, -1, 0)), this.writtenTo = BB, IB > BB && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = IB
      }
      point(BB, IB, ZB) {
        if (BB < IB || ZB.heightRelevant) {
          let TB = ZB.widget ? ZB.widget.estimatedHeight : 0,
            JB = ZB.widget ? ZB.widget.lineBreaks : 0;
          TB < 0 && (TB = this.oracle.lineHeight);
          let oB = IB - BB;
          ZB.block ? this.aIB(new tT(oB, TB, ZB)) : (oB || JB || TB >= 5) && this.addLineDeco(TB, JB, oB)
        } else IB > BB && this.span(BB, IB);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: BB,
          to: IB
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = BB, this.lineEnd = IB, this.writtenTo < BB && ((this.writtenTo < BB - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, BB - 1)), this.nodes.push(null)), this.pos > BB && this.nodes.push(new bT(this.pos - BB, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(BB, IB) {
        let ZB = new xT(IB - BB);
        return this.oracle.doc.lineAt(BB).to == IB && (ZB.flags |= 4), ZB
      }
      ensureLine() {
        this.enterLine();
        let BB = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (BB instanceof bT) return BB;
        let IB = new bT(0, -1, 0);
        return this.nodes.push(IB), IB
      }
      aIB(BB) {
        this.enterLine();
        let IB = BB.deco;
        IB && IB.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(BB), this.writtenTo = this.pos = this.pos + BB.length, IB && IB.endSide > 0 && (this.covering = BB)
      }
      addLineDeco(BB, IB, ZB) {
        let TB = this.ensureLine();
        TB.length += ZB, TB.collapsed += ZB, TB.widgetHeight = Math.max(TB.widgetHeight, BB), TB.breaks += IB, this.writtenTo = this.pos = this.pos + ZB
      }
      finish(BB) {
        let IB = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || IB instanceof bT || this.isCovered ? (this.writtenTo < this.pos || null == IB) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new bT(0, -1, 0));
        let ZB = BB;
        for (let TB of this.nodes) TB instanceof bT && TB.updateHeight(this.oracle, ZB), ZB += TB ? TB.length : 1;
        return this.nodes
      }
      static build(BB, IB, ZB, JB) {
        let oB = new KT(ZB, BB);
        return TB.F.spans(IB, ZB, JB, oB, 0), oB.finish(ZB)
      }
    }
    class VT {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(BB, IB, ZB, TB) {
        (BB < IB || ZB && ZB.heightRelevant || TB && TB.heightRelevant) && mB(BB, IB, this.changes, 5)
      }
    }

    function ST(BB, IB) {
      let ZB = BB.getBoundingClientRect(),
        TB = BB.ownerDocument,
        JB = TB.defaultView || window,
        oB = Math.max(0, ZB.left),
        GB = Math.min(JB.innerWidth, ZB.right),
        vB = Math.max(0, ZB.top),
        kB = Math.min(JB.innerHeight, ZB.bottom);
      for (let cB = BB.parentNode; cB && cB != TB.body;)
        if (1 == cB.nodeType) {
          let IB = cB,
            ZB = window.getComputedStyle(IB);
          if ((IB.scrollHeight > IB.clientHeight || IB.scrollWidth > IB.clientWidth) && "visible" != ZB.overflow) {
            let ZB = IB.getBoundingClientRect();
            oB = Math.max(oB, ZB.left), GB = Math.min(GB, ZB.right), vB = Math.max(vB, ZB.top), kB = Math.min(cB == BB.parentNode ? JB.innerHeight : kB, ZB.bottom)
          }
          cB = "absolute" == ZB.position || "fixed" == ZB.position ? IB.offsetParent : IB.parentNode
        } else {
          if (11 != cB.nodeType) break;
          cB = cB.host
        } return {
        left: oB - ZB.left,
        right: Math.max(oB, GB) - ZB.left,
        top: vB - (ZB.top + IB),
        bottom: Math.max(vB, kB) - (ZB.top + IB)
      }
    }

    function BJ(BB, IB) {
      let ZB = BB.getBoundingClientRect();
      return {
        left: 0,
        right: ZB.right - ZB.left,
        top: IB,
        bottom: ZB.bottom - (ZB.top + IB)
      }
    }
    class IJ {
      constructor(BB, IB, ZB, TB) {
        this.from = BB, this.to = IB, this.size = ZB, this.displaySize = TB
      }
      static same(BB, IB) {
        if (BB.length != IB.length) return !1;
        for (let ZB = 0; ZB < BB.length; ZB++) {
          let TB = BB[ZB],
            JB = IB[ZB];
          if (TB.from != JB.from || TB.to != JB.to || TB.size != JB.size) return !1
        }
        return !0
      }
      draw(BB, IB) {
        return MB.replace({
          widget: new ZJ(this.displaySize * (IB ? BB.scaleY : BB.scaleX), IB)
        }).range(this.from, this.to)
      }
    }
    class ZJ extends aB {
      constructor(BB, IB) {
        super(), this.size = BB, this.vertical = IB
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
    class TJ {
      constructor(BB, IB) {
        this.view = BB, this.state = IB, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = vJ, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = cI.LTR, this.BBB = [], this.mustEnforceCursorAssoc = !1;
        let ZB = IB.facet(SI).some((BB => "function" != typeof BB && "cm-lineWrapping" == BB.class));
        this.heightOracle = new mT(ZB), this.stateDeco = kJ(IB), this.heightMap = fT.empty().applyChanges(this.stateDeco, TB.O.empty, this.heightOracle.setDoc(IB.doc), [new cZ(0, 0, 0, IB.doc.length)]);
        for (let TB = 0; TB < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); TB++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = MB.set(this.lineGaps.map((BB => BB.draw(this, !1)))), this.scrollParent = BB.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let BB = [this.viewport],
          {
            main: IB
          } = this.state.selection;
        for (let ZB = 0; ZB <= 1; ZB++) {
          let TB = ZB ? IB.head : IB.anchor;
          if (!BB.some((BB => {
              let {
                from: IB,
                to: ZB
              } = BB;
              return TB >= IB && TB <= ZB
            }))) {
            let {
              from: IB,
              to: ZB
            } = this.lineBlockAt(TB);
            BB.push(new JJ(IB, ZB))
          }
        }
        return this.viewports = BB.sort(((BB, IB) => BB.from - IB.from)), this.updateScaler()
      }
      updateScaler() {
        let BB = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? vJ : new cJ(this.heightOracle, this.heightMap, this.viewports), BB.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (BB => {
          this.viewportLines.push(nJ(BB, this.scaler))
        }))
      }
      update(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = BB.state;
        let ZB = this.stateDeco;
        this.stateDeco = kJ(this.state);
        let JB = BB.changedRanges,
          oB = cZ.extendWithRanges(JB, function(BB, IB, ZB) {
            let JB = new VT;
            return TB.F.compare(BB, IB, ZB, JB, 0), JB.changes
          }(ZB, this.stateDeco, BB ? BB.changes : TB.ChangeSet.empty(this.state.doc.length))),
          GB = this.heightMap.height,
          vB = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        rT(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, BB.startState.doc, this.heightOracle.setDoc(this.state.doc), oB), (this.heightMap.height != GB || RT) && (BB.flags |= 2), vB ? (this.scrollAnchorPos = BB.changes.mapPos(vB.from, -1), this.scrollAnchorHeight = vB.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = GB);
        let kB = oB.length ? this.mapViewport(this.viewport, BB.changes) : this.viewport;
        (IB && (IB.range.head < kB.from || IB.range.head > kB.to) || !this.viewportIsAppropriate(kB)) && (kB = this.getViewport(0, IB));
        let cB = kB.from != this.viewport.from || kB.to != this.viewport.to;
        this.viewport = kB, BB.flags |= this.updateForViewport(), (cB || !BB.changes.empty || 2 & BB.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, BB.changes))), BB.flags |= this.computeVisibleRanges(BB.changes), IB && (this.scrollTarget = IB), !this.mustEnforceCursorAssoc && (BB.selectionSet || BB.focusChanged) && BB.view.lineWrapping && BB.state.selection.main.empty && BB.state.selection.main.assoc && !BB.state.facet(eI) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: BB
        } = this, IB = BB.contentDOM, ZB = window.getComputedStyle(IB), JB = this.heightOracle, oB = ZB.whiteSpace;
        this.defaultTextDirection = "rtl" == ZB.direction ? cI.RTL : cI.LTR;
        let GB = this.heightOracle.mustRefreshForWrapping(oB) || "refresh" === this.mustMeasureContent,
          vB = IB.getBoundingClientRect(),
          kB = GB || this.mustMeasureContent || this.contentDOMHeight != vB.height;
        this.contentDOMHeight = vB.height, this.mustMeasureContent = !1;
        let cB = 0,
          nB = 0;
        if (vB.width && vB.height) {
          let {
            scaleX: BB,
            scaleY: ZB
          } = KB(IB, vB);
          (BB > .005 && Math.abs(this.scaleX - BB) > .005 || ZB > .005 && Math.abs(this.scaleY - ZB) > .005) && (this.scaleX = BB, this.scaleY = ZB, cB |= 16, GB = kB = !0)
        }
        let hB = (parseInt(ZB.paddingTop) || 0) * this.scaleY,
          zB = (parseInt(ZB.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == hB && this.paddingBottom == zB || (this.paddingTop = hB, this.paddingBottom = zB, cB |= 18), this.editorWidth != BB.scrollDOM.clientWidth && (JB.lineWrapping && (kB = !0), this.editorWidth = BB.scrollDOM.clientWidth, cB |= 16);
        let FB = VB(this.view.contentDOM, !1).y;
        FB != this.scrollParent && (this.scrollParent = FB, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let NB = this.getScrollOffset();
        this.scrollOffset != NB && (this.scrollAnchorHeight = -1, this.scrollOffset = NB), this.scrolledToBottom = oI(this.scrollParent || BB.win);
        let gB = (this.printing ? BJ : ST)(IB, this.paddingTop),
          qB = gB.top - this.pixelViewport.top,
          yB = gB.bottom - this.pixelViewport.bottom;
        this.pixelViewport = gB;
        let UB = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (UB != this.inView && (this.inView = UB, UB && (kB = !0)), !this.inView && !this.scrollTarget && ! function(BB) {
            let IB = BB.getBoundingClientRect(),
              ZB = BB.ownerDocument.defaultView || window;
            return IB.left < ZB.innerWidth && IB.right > 0 && IB.top < ZB.innerHeight && IB.bottom > 0
          }(BB.dom)) return 0;
        let WB = vB.width;
        if (this.contentDOMWidth == WB && this.editorHeight == BB.scrollDOM.clientHeight || (this.contentDOMWidth = vB.width, this.editorHeight = BB.scrollDOM.clientHeight, cB |= 16), kB) {
          let IB = BB.docView.measureVisibleLineHeights(this.viewport);
          if (JB.mustRefreshForHeights(IB) && (GB = !0), GB || JB.lineWrapping && Math.abs(WB - this.contentDOMWidth) > JB.charWidth) {
            let {
              lineHeight: ZB,
              charWidth: TB,
              textHeight: vB
            } = BB.docView.measureTextSize();
            GB = ZB > 0 && JB.refresh(oB, ZB, TB, vB, Math.max(5, WB / TB), IB), GB && (BB.docView.minWidth = 0, cB |= 16)
          }
          qB > 0 && yB > 0 ? nB = Math.max(qB, yB) : qB < 0 && yB < 0 && (nB = Math.min(qB, yB)), rT();
          for (let ZB of this.viewports) {
            let oB = ZB.from == this.viewport.from ? IB : BB.docView.measureVisibleLineHeights(ZB);
            this.heightMap = (GB ? fT.empty().applyChanges(this.stateDeco, TB.O.empty, this.heightOracle, [new cZ(0, 0, 0, BB.state.doc.length)]) : this.heightMap).updateHeight(JB, 0, GB, new XT(ZB.from, oB))
          }
          RT && (cB |= 2)
        }
        let dB = !this.viewportIsAppropriate(this.viewport, nB) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return dB && (2 & cB && (cB |= this.updateScaler()), this.viewport = this.getViewport(nB, this.scrollTarget), cB |= this.updateForViewport()), (2 & cB || dB) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(GB ? [] : this.lineGaps, BB)), cB |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, BB.docView.enforceCursorAssoc()), cB
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(BB, IB) {
        let ZB = .5 - Math.max(-.5, Math.min(.5, BB / 1e3 / 2)),
          TB = this.heightMap,
          JB = this.heightOracle,
          {
            visibleTop: oB,
            visibleBottom: GB
          } = this,
          vB = new JJ(TB.lineAt(oB - 1e3 * ZB, eT.ByHeight, JB, 0, 0).from, TB.lineAt(GB + 1e3 * (1 - ZB), eT.ByHeight, JB, 0, 0).to);
        if (IB) {
          let {
            head: BB
          } = IB.range;
          if (BB < vB.from || BB > vB.to) {
            let ZB, oB = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              GB = TB.lineAt(BB, eT.ByPos, JB, 0, 0);
            ZB = "center" == IB.y ? (GB.top + GB.bottom) / 2 - oB / 2 : "start" == IB.y || "nearest" == IB.y && BB < vB.from ? GB.top : GB.bottom - oB, vB = new JJ(TB.lineAt(ZB - 500, eT.ByHeight, JB, 0, 0).from, TB.lineAt(ZB + oB + 500, eT.ByHeight, JB, 0, 0).to)
          }
        }
        return vB
      }
      mapViewport(BB, IB) {
        let ZB = IB.mapPos(BB.from, -1),
          TB = IB.mapPos(BB.to, 1);
        return new JJ(this.heightMap.lineAt(ZB, eT.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(TB, eT.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(BB) {
        let {
          from: IB,
          to: ZB
        } = BB, TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: JB
        } = this.heightMap.lineAt(IB, eT.ByPos, this.heightOracle, 0, 0), {
          bottom: oB
        } = this.heightMap.lineAt(ZB, eT.ByPos, this.heightOracle, 0, 0), {
          visibleTop: GB,
          visibleBottom: vB
        } = this;
        return (0 == IB || JB <= GB - Math.max(10, Math.min(-TB, 250))) && (ZB == this.state.doc.length || oB >= vB + Math.max(10, Math.min(TB, 250))) && JB > GB - 2e3 && oB < vB + 2e3
      }
      mapLineGaps(BB, IB) {
        if (!BB.length || IB.empty) return BB;
        let ZB = [];
        for (let TB of BB) IB.touchesRange(TB.from, TB.to) || ZB.push(new IJ(IB.mapPos(TB.from), IB.mapPos(TB.to), TB.size, TB.displaySize));
        return ZB
      }
      ensureLineGaps(BB, IB) {
        let ZB = this.heightOracle.lineWrapping,
          JB = ZB ? 1e4 : 2e3,
          oB = JB >> 1,
          GB = JB << 1;
        if (this.defaultTextDirection != cI.LTR && !ZB) return [];
        let vB = [],
          kB = (JB, GB, cB, nB) => {
            if (GB - JB < oB) return;
            let hB = this.state.selection.main,
              zB = [hB.from];
            hB.empty || zB.push(hB.to);
            for (let BB of zB)
              if (BB > JB && BB < GB) return kB(JB, BB - 10, cB, nB), void kB(BB + 10, GB, cB, nB);
            let FB = function(BB, IB) {
              for (let ZB of BB)
                if (IB(ZB)) return ZB;
              return
            }(BB, (BB => BB.from >= cB.from && BB.to <= cB.to && Math.abs(BB.from - JB) < oB && Math.abs(BB.to - GB) < oB && !zB.some((IB => BB.from < IB && BB.to > IB))));
            if (!FB) {
              if (GB < cB.to && IB && ZB && IB.BBB.some((BB => BB.from <= GB && BB.to >= GB))) {
                let BB = IB.moveToLineBoundary(TB.n.cursor(GB), !1, !0).head;
                BB > JB && (GB = BB)
              }
              let BB = this.gapSize(cB, JB, GB, nB);
              FB = new IJ(JB, GB, BB, ZB || BB < 2e6 ? BB : 2e6)
            }
            vB.push(FB)
          },
          cB = IB => {
            if (IB.length < GB || IB.type != HB.Text) return;
            let oB = function(BB, IB, ZB) {
              let JB = [],
                oB = BB,
                GB = 0;
              TB.F.spans(ZB, BB, IB, {
                span() {},
                point(BB, IB) {
                  BB > oB && (JB.push({
                    from: oB,
                    to: BB
                  }), GB += BB - oB), oB = IB
                }
              }, 20), oB < IB && (JB.push({
                from: oB,
                to: IB
              }), GB += IB - oB);
              return {
                total: GB,
                vq: JB
              }
            }(IB.from, IB.to, this.stateDeco);
            if (oB.total < GB) return;
            let vB, cB, nB = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (ZB) {
              let BB, ZB, TB = JB / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != nB) {
                let JB = GJ(oB, nB),
                  GB = ((this.visibleBottom - this.visibleTop) / 2 + TB) / IB.height;
                BB = JB - GB, ZB = JB + GB
              } else BB = (this.visibleTop - IB.top - TB) / IB.height, ZB = (this.visibleBottom - IB.top + TB) / IB.height;
              vB = oJ(oB, BB), cB = oJ(oB, ZB)
            } else {
              let ZB = oB.total * this.heightOracle.charWidth,
                TB = JB * this.heightOracle.charWidth,
                GB = 0;
              if (ZB > 2e6)
                for (let JB of BB) JB.from >= IB.from && JB.from < IB.to && JB.size != JB.displaySize && JB.from * this.heightOracle.charWidth + GB < this.pixelViewport.left && (GB = JB.size - JB.displaySize);
              let kB, hB, zB = this.pixelViewport.left + GB,
                FB = this.pixelViewport.right + GB;
              if (null != nB) {
                let BB = GJ(oB, nB),
                  IB = ((FB - zB) / 2 + TB) / ZB;
                kB = BB - IB, hB = BB + IB
              } else kB = (zB - TB) / ZB, hB = (FB + TB) / ZB;
              vB = oJ(oB, kB), cB = oJ(oB, hB)
            }
            vB > IB.from && kB(IB.from, vB, IB, oB), cB < IB.to && kB(cB, IB.to, IB, oB)
          };
        for (let TB of this.viewportLines) Array.isArray(TB.type) ? TB.type.forEach(cB) : cB(TB);
        return vB
      }
      gapSize(BB, IB, ZB, TB) {
        let JB = GJ(TB, ZB) - GJ(TB, IB);
        return this.heightOracle.lineWrapping ? BB.height * JB : TB.total * this.heightOracle.charWidth * JB
      }
      updateLineGaps(BB) {
        IJ.same(BB, this.lineGaps) || (this.lineGaps = BB, this.lineGapDeco = MB.set(BB.map((BB => BB.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(BB) {
        let IB = this.stateDeco;
        this.lineGaps.length && (IB = IB.concat(this.lineGapDeco));
        let ZB = [];
        TB.F.spans(IB, this.viewport.from, this.viewport.to, {
          span(BB, IB) {
            ZB.push({
              from: BB,
              to: IB
            })
          },
          point() {}
        }, 20);
        let JB = 0;
        if (ZB.length != this.BBB.length) JB = 12;
        else
          for (let TB = 0; TB < ZB.length && !(8 & JB); TB++) {
            let IB = this.BBB[TB],
              oB = ZB[TB];
            IB.from == oB.from && IB.to == oB.to || (JB |= 4, BB && BB.mapPos(IB.from, -1) == oB.from && BB.mapPos(IB.to, 1) == oB.to || (JB |= 8))
          }
        return this.BBB = ZB, JB
      }
      lineBlockAt(BB) {
        return BB >= this.viewport.from && BB <= this.viewport.to && this.viewportLines.find((IB => IB.from <= BB && IB.to >= BB)) || nJ(this.heightMap.lineAt(BB, eT.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(BB) {
        return BB >= this.viewportLines[0].top && BB <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((IB => IB.top <= BB && IB.bottom >= BB)) || nJ(this.heightMap.lineAt(this.scaler.fromDOM(BB), eT.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(BB) {
        let IB = this.lineBlockAtHeight(BB + 8);
        return IB.from >= this.viewport.from || this.viewportLines[0].top - BB > 200 ? IB : this.viewportLines[0]
      }
      elementAtHeight(BB) {
        return nJ(this.heightMap.blockAt(this.scaler.fromDOM(BB), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class JJ {
      constructor(BB, IB) {
        this.from = BB, this.to = IB
      }
    }

    function oJ(BB, IB) {
      let {
        total: ZB,
        vq: TB
      } = BB;
      if (IB <= 0) return TB[0].from;
      if (IB >= 1) return TB[TB.length - 1].to;
      let JB = Math.floor(ZB * IB);
      for (let oB = 0;; oB++) {
        let {
          from: BB,
          to: IB
        } = TB[oB], ZB = IB - BB;
        if (JB <= ZB) return BB + JB;
        JB -= ZB
      }
    }

    function GJ(BB, IB) {
      let ZB = 0;
      for (let {
          from: TB,
          to: JB
        }
        of BB.vq) {
        if (IB <= JB) {
          ZB += IB - TB;
          break
        }
        ZB += JB - TB
      }
      return ZB / BB.total
    }
    const vJ = {
      toDOM: BB => BB,
      fromDOM: BB => BB,
      scale: 1,
      eq(BB) {
        return BB == this
      }
    };

    function kJ(BB) {
      let IB = BB.facet(BZ).filter((BB => "function" != typeof BB)),
        ZB = BB.facet(ZZ).filter((BB => "function" != typeof BB));
      return ZB.length && IB.push(TB.F.join(ZB)), IB
    }
    class cJ {
      constructor(BB, IB, ZB) {
        let TB = 0,
          JB = 0,
          oB = 0;
        this.viewports = ZB.map((ZB => {
          let {
            from: JB,
            to: oB
          } = ZB, GB = IB.lineAt(JB, eT.ByPos, BB, 0, 0).top, vB = IB.lineAt(oB, eT.ByPos, BB, 0, 0).bottom;
          return TB += vB - GB, {
            from: JB,
            to: oB,
            top: GB,
            bottom: vB,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - TB) / (IB.height - TB);
        for (let GB of this.viewports) GB.domTop = oB + (GB.top - JB) * this.scale, oB = GB.domBottom = GB.domTop + (GB.bottom - GB.top), JB = GB.bottom
      }
      toDOM(BB) {
        for (let IB = 0, ZB = 0, TB = 0;; IB++) {
          let JB = IB < this.viewports.length ? this.viewports[IB] : null;
          if (!JB || BB < JB.top) return TB + (BB - ZB) * this.scale;
          if (BB <= JB.bottom) return JB.domTop + (BB - JB.top);
          ZB = JB.bottom, TB = JB.domBottom
        }
      }
      fromDOM(BB) {
        for (let IB = 0, ZB = 0, TB = 0;; IB++) {
          let JB = IB < this.viewports.length ? this.viewports[IB] : null;
          if (!JB || BB < JB.domTop) return ZB + (BB - TB) / this.scale;
          if (BB <= JB.domBottom) return JB.top + (BB - JB.domTop);
          ZB = JB.bottom, TB = JB.domBottom
        }
      }
      eq(BB) {
        return BB instanceof cJ && (this.scale == BB.scale && this.viewports.length == BB.viewports.length && this.viewports.every(((IB, ZB) => IB.from == BB.viewports[ZB].from && IB.to == BB.viewports[ZB].to)))
      }
    }

    function nJ(BB, IB) {
      if (1 == IB.scale) return BB;
      let ZB = IB.toDOM(BB.top),
        TB = IB.toDOM(BB.bottom);
      return new LT(BB.from, BB.length, ZB, TB - ZB, Array.isArray(BB._content) ? BB._content.map((BB => nJ(BB, IB))) : BB._content)
    }
    const hJ = TB.t.define({
        combine: BB => BB.join(" ")
      }),
      zJ = TB.t.define({
        combine: BB => BB.indexOf(!0) > -1
      }),
      FJ = JB.e.newName(),
      NJ = JB.e.newName(),
      gJ = JB.e.newName(),
      qJ = {
        "&light": "." + NJ,
        "&dark": "." + gJ
      };

    function yJ(BB, IB, ZB) {
      return new JB.e(IB, {
        finish: IB => /&/.test(IB) ? IB.replace(/&\w*/, (IB => {
          if ("&" == IB) return BB;
          if (!ZB || !ZB[IB]) throw new RangeError(`Unsupported selector: ${IB}`);
          return ZB[IB]
        })) : BB + " " + IB
      })
    }
    const UJ = yJ("." + FJ, {
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
      }, qJ),
      WJ = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      dJ = sB.ie && sB.ie_version <= 11;
    class CJ {
      constructor(BB) {
        this.view = BB, this.active = !1, this.editContext = null, this.selectionRange = new SB, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = BB.contentDOM, this.observer = new MutationObserver((IB => {
          for (let BB of IB) this.queue.push(BB);
          (sB.ie && sB.ie_version <= 11 || sB.ios && BB.composing) && IB.some((BB => "childList" == BB.type && BB.removedNodes.length || "characterData" == BB.type && BB.oldValue.length > BB.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !sB.android || !1 === BB.constructor.EDIT_CONTEXT || sB.chrome && sB.chrome_version < 126 || (this.editContext = new wJ(BB), BB.state.facet(bI) && (BB.contentDOM.editContext = this.editContext.editContext)), dJ && (this.onCharData = BB => {
          this.queue.push({
            target: BB.target,
            type: "characterData",
            oldValue: BB.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.kU = this.kU.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var BB;
          (null === (BB = this.view.docView) || void 0 === BB ? void 0 : BB.lastUpdate) < Date.now() - 75 && this.kU()
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
      kU() {
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
        if (this.gapIntersection && (BB.length != this.gaps.length || this.gaps.some(((IB, ZB) => IB != BB[ZB])))) {
          this.gapIntersection.disconnect();
          for (let IB of BB) this.gapIntersection.observe(IB);
          this.gaps = BB
        }
      }
      onSelectionChange(BB) {
        let IB = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: ZB
        } = this, TB = this.selectionRange;
        if (ZB.state.facet(bI) ? ZB.root.activeElement != this.dom : !uB(this.dom, TB)) return;
        let JB = TB.anchorNode && ZB.docView.tile.nearest(TB.anchorNode);
        JB && JB.isWidget() && JB.widget.ignoreEvent(BB) ? IB || (this.selectionChanged = !1) : (sB.ie && sB.ie_version <= 11 || sB.android && sB.chrome) && !ZB.state.selection.main.empty && TB.focusNode && lB(TB.focusNode, TB.focusOffset, TB.anchorNode, TB.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: BB
        } = this, IB = LB(BB.root);
        if (!IB) return !1;
        let ZB = sB.safari && 11 == BB.root.nodeType && BB.root.activeElement == this.dom && function(BB, IB) {
          if (IB.getComposedRanges) {
            let ZB = IB.getComposedRanges(BB.root)[0];
            if (ZB) return sJ(BB, ZB)
          }
          let ZB = null;

          function TB(BB) {
            BB.preventDefault(), BB.stopImmediatePropagation(), ZB = BB.getTargetRanges()[0]
          }
          return BB.contentDOM.addEventListener("beforeinput", TB, !0), BB.dom.ownerDocument.execCommand("indent"), BB.contentDOM.removeEventListener("beforeinput", TB, !0), ZB ? sJ(BB, ZB) : null
        }(this.view, IB) || IB;
        if (!ZB || this.selectionRange.eq(ZB)) return !1;
        let TB = uB(this.dom, ZB);
        return TB && !this.selectionChanged && BB.inputState.lastFocusTime > Date.now() - 200 && BB.inputState.lastTouchTime < Date.now() - 300 && function(BB, IB) {
          let ZB = IB.focusNode,
            TB = IB.focusOffset;
          if (!ZB || IB.anchorNode != ZB || IB.anchorOffset != TB) return !1;
          for (TB = Math.min(TB, xB(ZB));;)
            if (TB) {
              if (1 != ZB.nodeType) return !1;
              let BB = ZB.childNodes[TB - 1];
              "false" == BB.contentEditable ? TB-- : (ZB = BB, TB = xB(ZB))
            } else {
              if (ZB == BB) return !0;
              TB = AB(ZB), ZB = ZB.parentNode
            }
        }(this.dom, ZB) ? (this.view.inputState.lastFocusTime = 0, BB.docView.updateSelection(), !1) : (this.selectionRange.setRange(ZB), TB && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(BB, IB) {
        this.selectionRange.set(BB.node, BB.offset, IB.node, IB.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let BB = 0,
          IB = null;
        for (let ZB = this.dom; ZB;)
          if (1 == ZB.nodeType) !IB && BB < this.scrollTargets.length && this.scrollTargets[BB] == ZB ? BB++ : IB || (IB = this.scrollTargets.slice(0, BB)), IB && IB.push(ZB), ZB = ZB.assignedSlot || ZB.parentNode;
          else {
            if (11 != ZB.nodeType) break;
            ZB = ZB.host
          } if (BB < this.scrollTargets.length && !IB && (IB = this.scrollTargets.slice(0, BB)), IB) {
          for (let BB of this.scrollTargets) BB.removeEventListener("scroll", this.onScroll);
          for (let BB of this.scrollTargets = IB) BB.addEventListener("scroll", this.onScroll)
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
        this.active || (this.observer.observe(this.dom, WJ), dJ && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), dJ && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(BB, IB) {
        var ZB;
        if (!this.delayedAndroidKey) {
          let BB = () => {
            let BB = this.delayedAndroidKey;
            if (BB) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = BB.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && BB.force && JI(this.dom, BB.key, BB.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(BB)
        }
        this.delayedAndroidKey && "Enter" != BB || (this.delayedAndroidKey = {
          key: BB,
          keyCode: IB,
          force: this.lastChange < Date.now() - 50 || !!(null === (ZB = this.delayedAndroidKey) || void 0 === ZB ? void 0 : ZB.force)
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
        let IB = -1,
          ZB = -1,
          TB = !1;
        for (let JB of BB) {
          let BB = this.readMutation(JB);
          BB && (BB.typeOver && (TB = !0), -1 == IB ? ({
            from: IB,
            to: ZB
          } = BB) : (IB = Math.min(BB.from, IB), ZB = Math.max(BB.to, ZB)))
        }
        return {
          from: IB,
          to: ZB,
          typeOver: TB
        }
      }
      readChange() {
        let {
          from: BB,
          to: IB,
          typeOver: ZB
        } = this.processRecords(), TB = this.selectionChanged && uB(this.dom, this.selectionRange);
        if (BB < 0 && !TB) return null;
        BB > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let JB = new ZT(this.view, BB, IB, ZB);
        return this.view.docView.domChanged = {
          newSel: JB.newSel ? JB.newSel.main : null
        }, JB
      }
      flush() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        BB && this.readSelectionRange();
        let IB = this.readChange();
        if (!IB) return this.view.requestMeasure(), !1;
        let ZB = this.view.state,
          TB = JT(this.view, IB);
        return this.view.state == ZB && (IB.domChanged || IB.newSel && !vT(this.view.state.selection, IB.newSel.main)) && this.view.update([]), TB
      }
      readMutation(BB) {
        let IB = this.view.docView.tile.nearest(BB.target);
        if (!IB || IB.isWidget()) return null;
        if (IB.markDirty("attributes" == BB.type), "childList" == BB.type) {
          let ZB = QJ(IB, BB.previousSibling || BB.target.previousSibling, -1),
            TB = QJ(IB, BB.nextSibling || BB.target.nextSibling, 1);
          return {
            from: ZB ? IB.posAfter(ZB) : IB.posAtStart,
            to: TB ? IB.posBefore(TB) : IB.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == BB.type ? {
          from: IB.posAtStart,
          to: IB.posAtEnd,
          typeOver: BB.target.nodeValue == BB.oldValue
        } : null
      }
      setWindow(BB) {
        BB != this.win && (this.removeWindowListeners(this.win), this.win = BB, this.addWindowListeners(this.win))
      }
      addWindowListeners(BB) {
        BB.addEventListener("resize", this.kU), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : BB.addEventListener("beforeprint", this.onPrint), BB.addEventListener("scroll", this.onScroll), BB.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(BB) {
        BB.removeEventListener("scroll", this.onScroll), BB.removeEventListener("resize", this.kU), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : BB.removeEventListener("beforeprint", this.onPrint), BB.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(BB) {
        this.editContext && (this.editContext.update(BB), BB.startState.facet(bI) != BB.state.facet(bI) && (BB.view.contentDOM.editContext = BB.state.facet(bI) ? this.editContext.editContext : null))
      }
      destroy() {
        var BB, IB, ZB;
        this.stop(), null === (BB = this.intersection) || void 0 === BB || BB.disconnect(), null === (IB = this.gapIntersection) || void 0 === IB || IB.disconnect(), null === (ZB = this.resizeScroll) || void 0 === ZB || ZB.disconnect();
        for (let TB of this.scrollTargets) TB.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function QJ(BB, IB, ZB) {
      for (; IB;) {
        let TB = zZ.get(IB);
        if (TB && TB.parent == BB) return TB;
        let JB = IB.parentNode;
        IB = JB != BB.dom ? JB : ZB > 0 ? IB.nextSibling : IB.previousSibling
      }
      return null
    }

    function sJ(BB, IB) {
      let ZB = IB.startContainer,
        TB = IB.startOffset,
        JB = IB.endContainer,
        oB = IB.endOffset,
        GB = BB.docView.domAtPos(BB.state.selection.main.anchor, 1);
      return lB(GB.node, GB.offset, JB, oB) && ([ZB, TB, JB, oB] = [JB, oB, ZB, TB]), {
        anchorNode: ZB,
        anchorOffset: TB,
        focusNode: JB,
        focusOffset: oB
      }
    }
    class wJ {
      constructor(BB) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(BB.state);
        let IB = this.editContext = new window.EditContext({
          text: BB.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, BB.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(BB.state.selection.main.head)
        });
        this.handlers.textupdate = ZB => {
          let JB = BB.state.selection.main,
            {
              anchor: oB,
              head: GB
            } = JB,
            vB = this.toEditorPos(ZB.updateRangeStart),
            kB = this.toEditorPos(ZB.updateRangeEnd);
          BB.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: ZB.updateRangeStart,
            editorBase: vB,
            drifted: !1
          });
          let cB = kB - vB > ZB.text.length;
          vB == this.from && oB < this.from ? vB = oB : kB == this.to && oB > this.to && (kB = oB);
          let nB = GT(BB.state.sliceDoc(vB, kB), ZB.text, (cB ? JB.from : JB.to) - vB, cB ? "end" : null);
          if (!nB) {
            let IB = TB.n.single(this.toEditorPos(ZB.selectionStart), this.toEditorPos(ZB.selectionEnd));
            return void(vT(IB, JB) || BB.dispatch({
              selection: IB,
              userEvent: "select"
            }))
          }
          let hB = {
            from: nB.from + vB,
            to: nB.toA + vB,
            insert: TB.O.of(ZB.text.slice(nB.from, nB.toB).split("\n"))
          };
          if ((sB.mac || sB.android) && hB.from == GB - 1 && /^\. ?$/.test(ZB.text) && "off" == BB.contentDOM.getAttribute("autocorrect") && (hB = {
              from: vB,
              to: kB,
              insert: TB.O.of([ZB.text.replace(".", " ")])
            }), this.pendingContextChange = hB, !BB.state.readOnly) {
            let IB = this.to - this.from + (hB.to - hB.from + hB.insert.length);
            oT(BB, hB, TB.n.single(this.toEditorPos(ZB.selectionStart, IB), this.toEditorPos(ZB.selectionEnd, IB)))
          }
          this.pendingContextChange && (this.revertPending(BB.state), this.setSelection(BB.state)), hB.from < hB.to && !hB.insert.length && BB.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(IB.text.slice(Math.max(0, ZB.updateRangeStart - 1), Math.min(IB.text.length, ZB.updateRangeStart + 1))) && this.handlers.compositionend(ZB)
        }, this.handlers.characterboundsupdate = ZB => {
          let TB = [],
            JB = null;
          for (let IB = this.toEditorPos(ZB.rangeStart), oB = this.toEditorPos(ZB.rangeEnd); IB < oB; IB++) {
            let ZB = BB.coordsForChar(IB);
            JB = ZB && new DOMRect(ZB.left, ZB.top, ZB.right - ZB.left, ZB.bottom - ZB.top) || JB || new DOMRect, TB.push(JB)
          }
          IB.updateCharacterBounds(ZB.rangeStart, TB)
        }, this.handlers.textformatupdate = IB => {
          let ZB = [];
          for (let BB of IB.getTextFormats()) {
            let IB = BB.underlineStyle,
              TB = BB.underlineThickness;
            if (!/none/i.test(IB) && !/none/i.test(TB)) {
              let JB = this.toEditorPos(BB.rangeStart),
                oB = this.toEditorPos(BB.rangeEnd);
              if (JB < oB) {
                let BB = `text-decoration: underline ${/^[a-z]/.test(IB)?IB+" ":"Dashed"==IB?"dashed ":"Squiggle"==IB?"wavy ":""}${/thin/i.test(TB)?1:2}px`;
                ZB.push(MB.mark({
                  attributes: {
                    style: BB
                  }
                }).range(JB, oB))
              }
            }
          }
          BB.dispatch({
            effects: AI.of(MB.set(ZB))
          })
        }, this.handlers.compositionstart = () => {
          BB.inputState.composing < 0 && (BB.inputState.composing = 0, BB.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (BB.inputState.composing = -1, BB.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: IB
            } = this.composing;
            this.composing = null, IB && this.reset(BB.state)
          }
        };
        for (let ZB in this.handlers) IB.addEventListener(ZB, this.handlers[ZB]);
        this.measureReq = {
          read: BB => {
            this.editContext.updateControlBounds(BB.contentDOM.getBoundingClientRect());
            let IB = LB(BB.root);
            IB && IB.rangeCount && this.editContext.updateSelectionBounds(IB.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(BB) {
        let IB = 0,
          ZB = !1,
          TB = this.pendingContextChange;
        return BB.changes.iterChanges(((JB, oB, GB, vB, kB) => {
          if (ZB) return;
          let cB = kB.length - (oB - JB);
          if (TB && oB >= TB.to) {
            if (TB.from == JB && TB.to == oB && TB.insert.eq(kB)) return TB = this.pendingContextChange = null, IB += cB, void(this.to += cB);
            TB = null, this.revertPending(BB.state)
          }
          if (JB += IB, (oB += IB) <= this.from) this.from += cB, this.to += cB;
          else if (JB < this.to) {
            if (JB < this.from || oB > this.to || this.to - this.from + kB.length > 3e4) return void(ZB = !0);
            this.editContext.updateText(this.toContextPos(JB), this.toContextPos(oB), kB.toString()), this.to += cB
          }
          IB += cB
        })), TB && !ZB && this.revertPending(BB.state), !ZB
      }
      update(BB) {
        let IB = this.pendingContextChange,
          ZB = BB.startState.selection.main;
        this.composing && (this.composing.drifted || !BB.changes.touchesRange(ZB.from, ZB.to) && BB.transactions.some((BB => !BB.isUserEvent("input.type") && BB.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = BB.changes.mapPos(this.composing.editorBase)) : this.applyEdits(BB) && this.rangeIsValid(BB.state) ? (BB.docChanged || BB.selectionSet || IB) && this.setSelection(BB.state) : (this.pendingContextChange = null, this.reset(BB.state)), (BB.geometryChanged || BB.docChanged || BB.selectionSet) && BB.view.requestMeasure(this.measureReq)
      }
      resetRange(BB) {
        let {
          head: IB
        } = BB.selection.main;
        this.from = Math.max(0, IB - 1e4), this.to = Math.min(BB.doc.length, IB + 1e4)
      }
      reset(BB) {
        this.resetRange(BB), this.editContext.updateText(0, this.editContext.text.length, BB.doc.sliceString(this.from, this.to)), this.setSelection(BB)
      }
      revertPending(BB) {
        let IB = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(IB.from), this.toContextPos(IB.from + IB.insert.length), BB.doc.sliceString(IB.from, IB.to))
      }
      setSelection(BB) {
        let {
          main: IB
        } = BB.selection, ZB = this.toContextPos(Math.max(this.from, Math.min(this.to, IB.anchor))), TB = this.toContextPos(IB.head);
        this.editContext.selectionStart == ZB && this.editContext.selectionEnd == TB || this.editContext.updateSelection(ZB, TB)
      }
      rangeIsValid(BB) {
        let {
          head: IB
        } = BB.selection.main;
        return !(this.from > 0 && IB - this.from < 500 || this.to < BB.doc.length && this.to - IB < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        BB = Math.min(BB, IB);
        let ZB = this.composing;
        return ZB && ZB.drifted ? ZB.editorBase + (BB - ZB.contextBase) : BB + this.from
      }
      toContextPos(BB) {
        let IB = this.composing;
        return IB && IB.drifted ? IB.contextBase + (BB - IB.editorBase) : BB - this.from
      }
      destroy() {
        for (let BB in this.handlers) this.editContext.removeEventListener(BB, this.handlers[BB])
      }
    }
    class OJ {
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
        var IB;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), BB.parent && BB.parent.appendChild(this.dom);
        let {
          dispatch: ZB
        } = BB;
        this.dispatchTransactions = BB.dispatchTransactions || ZB && (BB => BB.forEach((BB => ZB(BB, this)))) || (BB => this.update(BB)), this.dispatch = this.dispatch.bind(this), this._root = BB.root || function(BB) {
          for (; BB;) {
            if (BB && (9 == BB.nodeType || 11 == BB.nodeType && BB.host)) return BB;
            BB = BB.assignedSlot || BB.parentNode
          }
          return null
        }(BB.parent) || document, this.viewState = new TJ(this, BB.state || TB.q.create(BB)), BB.scrollTo && BB.scrollTo.is(lI) && (this.viewState.scrollTarget = BB.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(EI).map((BB => new KI(BB)));
        for (let TB of this.plugins) TB.update(this);
        this.observer = new CJ(this), this.inputState = new kT(this), this.inputState.ensureHandlers(this.plugins), this.docView = new rZ(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (IB = document.fonts) || void 0 === IB ? void 0 : IB.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var BB = arguments.length, IB = new Array(BB), ZB = 0; ZB < BB; ZB++) IB[ZB] = arguments[ZB];
        let JB = 1 == IB.length && IB[0] instanceof TB.P ? IB : 1 == IB.length && Array.isArray(IB[0]) ? IB[0] : [this.state.update(...IB)];
        this.dispatchTransactions(JB, this)
      }
      update(BB) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let IB, ZB = !1,
          JB = !1,
          oB = this.state;
        for (let TB of BB) {
          if (TB.startState != oB) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          oB = TB.state
        }
        if (this.destroyed) return void(this.viewState.state = oB);
        let GB = this.hasFocus,
          vB = 0,
          kB = null;
        BB.some((BB => BB.annotation(aT))) ? (this.inputState.notifiedFocused = GB, vB = 1) : GB != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = GB, kB = HT(oB, GB), kB || (vB = 1));
        let cB = this.observer.delayedAndroidKey,
          nB = null;
        if (cB ? (this.observer.clearDelayedAndroidKey(), nB = this.observer.readChange(), (nB && !this.state.doc.eq(oB.doc) || !this.state.selection.eq(oB.selection)) && (nB = null)) : this.observer.clear(), oB.facet(TB.q.phrases) != this.state.facet(TB.q.phrases)) return this.setState(oB);
        IB = nZ.create(this, oB, BB), IB.flags |= vB;
        let hB = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let IB of BB) {
            if (hB && (hB = hB.map(IB.changes)), IB.scrollIntoView) {
              let {
                main: BB
              } = IB.state.selection, {
                x: ZB,
                y: JB
              } = this.state.facet(OJ.cursorScrollMargin);
              hB = new fI(BB.empty ? BB : TB.n.cursor(BB.head, BB.head > BB.anchor ? -1 : 1), "nearest", "nearest", JB, ZB)
            }
            for (let BB of IB.effects) BB.is(lI) && (hB = BB.value.clip(this.state))
          }
          this.viewState.update(IB, hB), this.bidiCache = pJ.update(this.bidiCache, IB.changes), IB.empty || (this.updatePlugins(IB), this.inputState.update(IB)), ZB = this.docView.update(IB), this.state.facet(kZ) != this.styleModules && this.mountStyles(), JB = this.updateAttrs(), this.showAnnouncements(BB), this.docView.updateSelection(ZB, BB.some((BB => BB.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (IB.startState.facet(hJ) != IB.state.facet(hJ) && (this.viewState.mustMeasureContent = !0), (ZB || JB || hB || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), ZB && this.docViewUpdate(), !IB.empty)
          for (let TB of this.state.facet(PI)) try {
            TB(IB)
          } catch (zB) {
            tI(this.state, zB, "update listener")
          }(kB || nB) && Promise.resolve().then((() => {
            kB && this.state == kB.startState && this.dispatch(kB), nB && !JT(this, nB) && cB.force && JI(this.contentDOM, cB.key, cB.keyCode)
          }))
      }
      setState(BB) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = BB);
        this.updateState = 2;
        let IB = this.hasFocus;
        try {
          for (let BB of this.plugins) BB.destroy(this);
          this.viewState = new TJ(this, BB), this.plugins = BB.facet(EI).map((BB => new KI(BB))), this.pluginMap.clear();
          for (let BB of this.plugins) BB.update(this);
          this.docView.destroy(), this.docView = new rZ(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        IB && this.focus(), this.requestMeasure()
      }
      updatePlugins(BB) {
        let IB = BB.startState.facet(EI),
          ZB = BB.state.facet(EI);
        if (IB != ZB) {
          let TB = [];
          for (let JB of ZB) {
            let ZB = IB.indexOf(JB);
            if (ZB < 0) TB.push(new KI(JB));
            else {
              let IB = this.plugins[ZB];
              IB.mustUpdate = BB, TB.push(IB)
            }
          }
          for (let IB of this.plugins) IB.mustUpdate != BB && IB.destroy(this);
          this.plugins = TB, this.pluginMap.clear()
        } else
          for (let TB of this.plugins) TB.mustUpdate = BB;
        for (let TB = 0; TB < this.plugins.length; TB++) this.plugins[TB].update(this);
        IB != ZB && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let IB of this.plugins) {
          let ZB = IB.value;
          if (ZB && ZB.docViewUpdate) try {
            ZB.docViewUpdate(this)
          } catch (BB) {
            tI(this.state, BB, "doc view update listener")
          }
        }
      }
      measure() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, BB && this.observer.forceFlush();
        let IB = null,
          ZB = this.viewState.scrollParent,
          TB = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: JB,
            scrollAnchorHeight: oB
          } = this.viewState;
        Math.abs(TB - this.viewState.scrollOffset) > 1 && (oB = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let BB = 0;; BB++) {
            if (oB < 0)
              if (oI(ZB || this.win)) JB = -1, oB = this.viewState.heightMap.height;
              else {
                let BB = this.viewState.scrollAnchorAt(TB);
                JB = BB.from, oB = BB.top
              } this.updateState = 1;
            let vB = this.viewState.measure();
            if (!vB && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (BB > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let kB = [];
            4 & vB || ([this.measureRequests, kB] = [kB, this.measureRequests]);
            let cB = kB.map((BB => {
                try {
                  return BB.read(this)
                } catch (IB) {
                  return tI(this.state, IB), iJ
                }
              })),
              nB = nZ.create(this, this.state, []),
              hB = !1;
            nB.flags |= vB, IB ? IB.flags |= vB : IB = nB, this.updateState = 2, nB.empty || (this.updatePlugins(nB), this.inputState.update(nB), this.updateAttrs(), hB = this.docView.update(nB), hB && this.docViewUpdate());
            for (let BB = 0; BB < kB.length; BB++)
              if (cB[BB] != iJ) try {
                let IB = kB[BB];
                IB.write && IB.write(cB[BB], this)
              } catch (GB) {
                tI(this.state, GB)
              }
            if (hB && this.docView.updateSelection(!0), !nB.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, oB = -1;
                  continue
                } {
                  let BB = ((JB < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(JB).top) - oB) / this.scaleY;
                  if ((BB > 1 || BB < -1) && (ZB == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    TB += BB, ZB ? ZB.scrollTop += BB : this.win.scrollBy(0, BB), oB = -1;
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
        if (IB && !IB.empty)
          for (let vB of this.state.facet(PI)) vB(IB)
      }
      get themeClasses() {
        return FJ + " " + (this.state.facet(zJ) ? gJ : NJ) + " " + this.state.facet(hJ)
      }
      updateAttrs() {
        let BB = aJ(this, VI, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          IB = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(bI) ? "true" : "false",
            class: "cm-content",
            style: `${sB.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (IB["aria-readonly"] = "true"), aJ(this, SI, IB);
        let ZB = this.observer.ignore((() => {
          let ZB = iB(this.contentDOM, this.contentAttrs, IB),
            TB = iB(this.dom, this.editorAttrs, BB);
          return ZB || TB
        }));
        return this.editorAttrs = BB, this.contentAttrs = IB, ZB
      }
      showAnnouncements(BB) {
        let IB = !0;
        for (let ZB of BB)
          for (let BB of ZB.effects)
            if (BB.is(OJ.announce)) {
              IB && (this.announceDOM.textContent = ""), IB = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = BB.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(kZ);
        let BB = this.state.facet(OJ.cspNonce);
        JB.e.mount(this.root, this.styleModules.concat(UJ).reverse(), BB ? {
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
            for (let IB = 0; IB < this.measureRequests.length; IB++)
              if (this.measureRequests[IB].key === BB.key) return void(this.measureRequests[IB] = BB);
          this.measureRequests.push(BB)
        }
      }
      plugin(BB) {
        let IB = this.pluginMap.get(BB);
        return (void 0 === IB || IB && IB.plugin != BB) && this.pluginMap.set(BB, IB = this.plugins.find((IB => IB.plugin == BB)) || null), IB && IB.update(this).value
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
      moveByChar(BB, IB, ZB) {
        return bZ(this, BB, lZ(this, BB, IB, ZB))
      }
      moveByGroup(BB, IB) {
        return bZ(this, BB, lZ(this, BB, IB, (IB => function(BB, IB, ZB) {
          let JB = BB.state.charCategorizer(IB),
            oB = JB(ZB);
          return BB => {
            let IB = JB(BB);
            return oB == TB.j.Space && (oB = IB), oB == IB
          }
        }(this, BB.head, IB))))
      }
      visualLineSide(BB, IB) {
        let ZB = this.bidiSpans(BB),
          JB = this.textDirectionAt(BB.from),
          oB = ZB[IB ? ZB.length - 1 : 0];
        return TB.n.cursor(oB.side(IB, JB) + BB.from, oB.forward(!IB, JB) ? 1 : -1)
      }
      moveToLineBoundary(BB, IB) {
        return function(BB, IB, ZB, JB) {
          let oB = fZ(BB, IB.head, IB.assoc || -1),
            GB = JB && oB.type == HB.Text && (BB.lineWrapping || oB.widgetLineBreaks) ? BB.coordsAtPos(IB.assoc < 0 && IB.head > oB.from ? IB.head - 1 : IB.head) : null;
          if (GB) {
            let IB = BB.dom.getBoundingClientRect(),
              JB = BB.textDirectionAt(oB.from),
              vB = BB.posAtCoords({
                x: ZB == (JB == cI.LTR) ? IB.right - 1 : IB.left + 1,
                y: (GB.top + GB.bottom) / 2
              });
            if (null != vB) return TB.n.cursor(vB, ZB ? -1 : 1)
          }
          return TB.n.cursor(ZB ? oB.to : oB.from, ZB ? -1 : 1)
        }(this, BB, IB, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(BB, IB, ZB) {
        return bZ(this, BB, function(BB, IB, ZB, JB) {
          let oB = IB.head,
            GB = ZB ? 1 : -1;
          if (oB == (ZB ? BB.state.doc.length : 0)) return TB.n.cursor(oB, IB.assoc);
          let vB, kB = IB.goalColumn,
            cB = BB.contentDOM.getBoundingClientRect(),
            nB = BB.coordsAtPos(oB, IB.assoc || ((IB.empty ? ZB : IB.head == IB.from) ? 1 : -1)),
            hB = BB.documentTop;
          if (nB) null == kB && (kB = nB.left - cB.left), vB = GB < 0 ? nB.top : nB.bottom;
          else {
            let IB = BB.viewState.lineBlockAt(oB);
            null == kB && (kB = Math.min(cB.right - cB.left, BB.defaultCharacterWidth * (oB - IB.from))), vB = (GB < 0 ? IB.top : IB.bottom) + hB
          }
          let zB = cB.left + kB,
            FB = BB.viewState.heightOracle.textHeight >> 1,
            NB = null !== JB && void 0 !== JB ? JB : FB;
          for (let gB = 0;; gB += FB) {
            let IB = vB + (NB + gB) * GB,
              JB = EZ(BB, {
                x: zB,
                y: IB
              }, !1, GB);
            if (ZB ? IB > cB.bottom : IB < cB.top) return TB.n.cursor(JB.pos, JB.assoc);
            let oB = BB.coordsAtPos(JB.pos, JB.assoc),
              nB = oB ? (oB.top + oB.bottom) / 2 : 0;
            if (!oB || (ZB ? nB > vB : nB < vB)) return TB.n.cursor(JB.pos, JB.assoc, void 0, kB)
          }
        }(this, BB, IB, ZB))
      }
      domAtPos(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(BB, IB)
      }
      posAtDOM(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(BB, IB)
      }
      posAtCoords(BB) {
        let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let ZB = EZ(this, BB, IB);
        return ZB && ZB.pos
      }
      posAndSideAtCoords(BB) {
        let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), EZ(this, BB, IB)
      }
      coordsAtPos(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let ZB = this.docView.coordsAt(BB, IB);
        if (!ZB || ZB.left == ZB.right) return ZB;
        let TB = this.state.doc.lineAt(BB),
          JB = this.bidiSpans(TB);
        return EB(ZB, JB[WI.find(JB, BB - TB.from, -1, IB)].dir == cI.LTR == IB > 0)
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
        return !this.state.facet(LI) || BB < this.viewport.from || BB > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(BB))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(BB) {
        if (BB.length > YJ) return OI(BB.length);
        let IB, ZB = this.textDirectionAt(BB.from);
        for (let JB of this.bidiCache)
          if (JB.from == BB.from && JB.dir == ZB && (JB.fresh || dI(JB.isolates, IB = oZ(this, BB)))) return JB.order;
        IB || (IB = oZ(this, BB));
        let TB = wI(BB.text, ZB, IB);
        return this.bidiCache.push(new pJ(BB.from, BB.to, ZB, IB, !0, TB)), TB
      }
      get hasFocus() {
        var BB;
        return (this.dom.ownerDocument.hasFocus() || sB.safari && (null === (BB = this.inputState) || void 0 === BB ? void 0 : BB.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          ZI(this.contentDOM), this.docView.updateSelection()
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
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var ZB, JB, oB, GB;
        return lI.of(new fI("number" == typeof BB ? TB.n.cursor(BB) : BB, null !== (ZB = IB.y) && void 0 !== ZB ? ZB : "nearest", null !== (JB = IB.x) && void 0 !== JB ? JB : "nearest", null !== (oB = IB.yMargin) && void 0 !== oB ? oB : 5, null !== (GB = IB.xMargin) && void 0 !== GB ? GB : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: BB,
          scrollLeft: IB
        } = this.scrollDOM, ZB = this.viewState.scrollAnchorAt(BB);
        return lI.of(new fI(TB.n.cursor(ZB.from), "start", "start", ZB.top - BB, IB, !0))
      }
      setTabFocusMode(BB) {
        null == BB ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof BB ? this.inputState.tabFocusMode = BB ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + BB)
      }
      static domEventHandlers(BB) {
        return DI.define((() => ({})), {
          eventHandlers: BB
        })
      }
      static domEventObservers(BB) {
        return DI.define((() => ({})), {
          eventObservers: BB
        })
      }
      static theme(BB, IB) {
        let ZB = JB.e.newName(),
          TB = [hJ.of(ZB), kZ.of(yJ(`.${ZB}`, BB))];
        return IB && IB.dark && TB.push(zJ.of(!0)), TB
      }
      static baseTheme(BB) {
        return TB.A.lowest(kZ.of(yJ("." + FJ, BB, qJ)))
      }
      static findFromDOM(BB) {
        var IB;
        let ZB = BB.querySelector(".cm-content"),
          TB = ZB && zZ.get(ZB) || zZ.get(BB);
        return (null === (IB = null === TB || void 0 === TB ? void 0 : TB.root) || void 0 === IB ? void 0 : IB.view) || null
      }
    }
    OJ.styleModule = kZ, OJ.inputHandler = RI, OJ.clipboardInputFilter = mI, OJ.clipboardOutputFilter = XI, OJ.scrollHandler = uI, OJ.focusChangeEffect = rI, OJ.perLineTextDirection = LI, OJ.exceptionSink = jI, OJ.updateListener = PI, OJ.editable = bI, OJ.mouseSelectionStyle = MI, OJ.dragMovesSelection = HI, OJ.clickAddsSelectionRange = aI, OJ.vT = BZ, OJ.blockWrappers = IZ, OJ.outerDecorations = ZZ, OJ.atomicRanges = TZ, OJ.bidiIsolatedRanges = JZ, OJ.cursorScrollMargin = TB.t.define({
      combine: BB => {
        let IB = 5,
          ZB = 5;
        for (let TB of BB) "number" == typeof TB ? IB = ZB = TB : ({
          x: IB,
          y: ZB
        } = TB);
        return {
          x: IB,
          y: ZB
        }
      }
    }), OJ.scrollMargins = GZ, OJ.darkTheme = zJ, OJ.cspNonce = TB.t.define({
      combine: BB => BB.length ? BB[0] : ""
    }), OJ.contentAttributes = SI, OJ.editorAttributes = VI, OJ.lineWrapping = OJ.contentAttributes.of({
      class: "cm-lineWrapping"
    }), OJ.announce = TB.K.define();
    const YJ = 4096,
      iJ = {};
    class pJ {
      constructor(BB, IB, ZB, TB, JB, oB) {
        this.from = BB, this.to = IB, this.dir = ZB, this.isolates = TB, this.fresh = JB, this.order = oB
      }
      static update(BB, IB) {
        if (IB.empty && !BB.some((BB => BB.fresh))) return BB;
        let ZB = [],
          TB = BB.length ? BB[BB.length - 1].dir : cI.LTR;
        for (let JB = Math.max(0, BB.length - 10); JB < BB.length; JB++) {
          let oB = BB[JB];
          oB.dir != TB || IB.touchesRange(oB.from, oB.to) || ZB.push(new pJ(IB.mapPos(oB.from, 1), IB.mapPos(oB.to, -1), oB.dir, oB.isolates, !1, oB.order))
        }
        return ZB
      }
    }

    function aJ(BB, IB, ZB) {
      for (let TB = BB.state.facet(IB), JB = TB.length - 1; JB >= 0; JB--) {
        let IB = TB[JB],
          oB = "function" == typeof IB ? IB(BB) : IB;
        oB && wB(oB, ZB)
      }
      return ZB
    }
    const HJ = sB.mac ? "mac" : sB.windows ? "win" : sB.linux ? "linux" : "key";

    function MJ(BB, IB, ZB) {
      return IB.altKey && (BB = "Alt-" + BB), IB.ctrlKey && (BB = "Ctrl-" + BB), IB.metaKey && (BB = "Meta-" + BB), !1 !== ZB && IB.shiftKey && (BB = "Shift-" + BB), BB
    }
    const jJ = TB.A.default(OJ.domEventHandlers({
        keydown: (BB, IB) => uJ(rJ(IB.state), BB, IB, "editor")
      })),
      PJ = TB.t.define({
        enables: jJ
      }),
      RJ = new WeakMap;

    function rJ(BB) {
      let IB = BB.facet(PJ),
        ZB = RJ.get(IB);
      return ZB || RJ.set(IB, ZB = function(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HJ,
          ZB = Object.create(null),
          TB = Object.create(null),
          JB = (BB, IB) => {
            let ZB = TB[BB];
            if (null == ZB) TB[BB] = IB;
            else if (ZB != IB) throw new Error("Key binding " + BB + " is used both as a regular binding and as a multi-stroke prefix")
          },
          oB = (BB, TB, oB, GB, vB) => {
            var kB, cB;
            let nB = ZB[BB] || (ZB[BB] = Object.create(null)),
              hB = TB.split(/ (?!$)/).map((BB => function(BB, IB) {
                const ZB = BB.split(/-(?!$)/);
                let TB, JB, oB, GB, vB = ZB[ZB.length - 1];
                "Space" == vB && (vB = " ");
                for (let kB = 0; kB < ZB.length - 1; ++kB) {
                  const BB = ZB[kB];
                  if (/^(cmd|meta|m)$/i.test(BB)) GB = !0;
                  else if (/^a(lt)?$/i.test(BB)) TB = !0;
                  else if (/^(c|ctrl|control)$/i.test(BB)) JB = !0;
                  else if (/^s(hift)?$/i.test(BB)) oB = !0;
                  else {
                    if (!/^mod$/i.test(BB)) throw new Error("Unrecognized modifier name: " + BB);
                    "mac" == IB ? GB = !0 : JB = !0
                  }
                }
                return TB && (vB = "Alt-" + vB), JB && (vB = "Ctrl-" + vB), GB && (vB = "Meta-" + vB), oB && (vB = "Shift-" + vB), vB
              }(BB, IB)));
            for (let IB = 1; IB < hB.length; IB++) {
              let ZB = hB.slice(0, IB).join(" ");
              JB(ZB, !0), nB[ZB] || (nB[ZB] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [IB => {
                  let TB = XJ = {
                    view: IB,
                    prefix: ZB,
                    scope: BB
                  };
                  return setTimeout((() => {
                    XJ == TB && (XJ = null)
                  }), LJ), !0
                }]
              })
            }
            let zB = hB.join(" ");
            JB(zB, !1);
            let FB = nB[zB] || (nB[zB] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (cB = null === (kB = nB._any) || void 0 === kB ? void 0 : kB.run) || void 0 === cB ? void 0 : cB.slice()) || []
            });
            oB && FB.run.push(oB), GB && (FB.preventDefault = !0), vB && (FB.stopPropagation = !0)
          };
        for (let GB of BB) {
          let BB = GB.scope ? GB.scope.split(" ") : ["editor"];
          if (GB.any)
            for (let IB of BB) {
              let BB = ZB[IB] || (ZB[IB] = Object.create(null));
              BB._any || (BB._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: TB
              } = GB;
              for (let IB in BB) BB[IB].run.push((BB => TB(BB, eJ)))
            }
          let TB = GB[IB] || GB.key;
          if (TB)
            for (let IB of BB) oB(IB, TB, GB.run, GB.preventDefault, GB.stopPropagation), GB.shift && oB(IB, "Shift-" + TB, GB.shift, GB.preventDefault, GB.stopPropagation)
        }
        return ZB
      }(IB.reduce(((BB, IB) => BB.concat(IB)), []))), ZB
    }

    function mJ(BB, IB, ZB) {
      return uJ(rJ(BB.state), IB, BB, ZB)
    }
    let XJ = null;
    const LJ = 4e3;
    let eJ = null;

    function uJ(BB, IB, ZB, JB) {
      eJ = IB;
      let cB = function(BB) {
          var IB = !(vB && BB.metaKey && BB.shiftKey && !BB.ctrlKey && !BB.altKey || kB && BB.shiftKey && BB.key && 1 == BB.key.length || "Unidentified" == BB.key) && BB.key || (BB.shiftKey ? GB : oB)[BB.keyCode] || BB.key || "Unidentified";
          return "Esc" == IB && (IB = "Escape"), "Del" == IB && (IB = "Delete"), "Left" == IB && (IB = "ArrowLeft"), "Up" == IB && (IB = "ArrowUp"), "Right" == IB && (IB = "ArrowRight"), "Down" == IB && (IB = "ArrowDown"), IB
        }(IB),
        nB = (0, TB.Q)(cB, 0),
        hB = (0, TB.S)(nB) == cB.length && " " != cB,
        zB = "",
        FB = !1,
        NB = !1,
        gB = !1;
      XJ && XJ.view == ZB && XJ.scope == JB && (zB = XJ.prefix + " ", FT.indexOf(IB.keyCode) < 0 && (NB = !0, XJ = null));
      let qB, yB, UB = new Set,
        WB = BB => {
          if (BB) {
            for (let IB of BB.run)
              if (!UB.has(IB) && (UB.add(IB), IB(ZB))) return BB.stopPropagation && (gB = !0), !0;
            BB.preventDefault && (BB.stopPropagation && (gB = !0), NB = !0)
          }
          return !1
        },
        dB = BB[JB];
      return dB && (WB(dB[zB + MJ(cB, IB, !hB)]) ? FB = !0 : !hB || !(IB.altKey || IB.metaKey || IB.ctrlKey) || sB.windows && IB.ctrlKey && IB.altKey || sB.mac && IB.altKey && !IB.ctrlKey && !IB.metaKey || !(qB = oB[IB.keyCode]) || qB == cB ? hB && IB.shiftKey && WB(dB[zB + MJ(cB, IB, !0)]) && (FB = !0) : (WB(dB[zB + MJ(qB, IB, !0)]) || IB.shiftKey && (yB = GB[IB.keyCode]) != cB && yB != qB && WB(dB[zB + MJ(yB, IB, !1)])) && (FB = !0), !FB && WB(dB._any) && (FB = !0)), NB && (FB = !0), FB && gB && IB.stopPropagation(), eJ = null, FB
    }
    class fJ {
      constructor(BB, IB, ZB, TB, JB) {
        this.className = BB, this.left = IB, this.top = ZB, this.width = TB, this.height = JB
      }
      draw() {
        let BB = document.createElement("div");
        return BB.className = this.className, this.adjust(BB), BB
      }
      update(BB, IB) {
        return IB.className == this.className && (this.adjust(BB), !0)
      }
      adjust(BB) {
        BB.style.left = this.left + "px", BB.style.top = this.top + "px", null != this.width && (BB.style.width = this.width + "px"), BB.style.height = this.height + "px"
      }
      eq(BB) {
        return this.left == BB.left && this.top == BB.top && this.width == BB.width && this.height == BB.height && this.className == BB.className
      }
      static forRange(BB, IB, ZB) {
        if (ZB.empty) {
          let TB = BB.coordsAtPos(ZB.head, ZB.assoc || 1);
          if (!TB) return [];
          let JB = lJ(BB);
          return [new fJ(IB, TB.left - JB.left, TB.top - JB.top, null, TB.bottom - TB.top)]
        }
        return function(BB, IB, ZB) {
          if (ZB.to <= BB.viewport.from || ZB.from >= BB.viewport.to) return [];
          let TB = Math.max(ZB.from, BB.viewport.from),
            JB = Math.min(ZB.to, BB.viewport.to),
            oB = BB.textDirection == cI.LTR,
            GB = BB.contentDOM,
            vB = GB.getBoundingClientRect(),
            kB = lJ(BB),
            cB = GB.querySelector(".cm-line"),
            nB = cB && window.getComputedStyle(cB),
            hB = vB.left + (nB ? parseInt(nB.paddingLeft) + Math.min(0, parseInt(nB.textIndent)) : 0),
            zB = vB.right - (nB ? parseInt(nB.paddingRight) : 0),
            FB = fZ(BB, TB, 1),
            NB = fZ(BB, JB, -1),
            gB = FB.type == HB.Text ? FB : null,
            qB = NB.type == HB.Text ? NB : null;
          gB && (BB.lineWrapping || FB.widgetLineBreaks) && (gB = AJ(BB, TB, 1, gB));
          qB && (BB.lineWrapping || NB.widgetLineBreaks) && (qB = AJ(BB, JB, -1, qB));
          if (gB && qB && gB.from == qB.from && gB.to == qB.to) return UB(WB(ZB.from, ZB.to, gB));
          {
            let IB = gB ? WB(ZB.from, null, gB) : dB(FB, !1),
              TB = qB ? WB(null, ZB.to, qB) : dB(NB, !0),
              JB = [];
            return (gB || FB).to < (qB || NB).from - (gB && qB ? 1 : 0) || FB.widgetLineBreaks > 1 && IB.bottom + BB.defaultLineHeight / 2 < TB.top ? JB.push(yB(hB, IB.bottom, zB, TB.top)) : IB.bottom < TB.top && BB.elementAtHeight((IB.bottom + TB.top) / 2).type == HB.Text && (IB.bottom = TB.top = (IB.bottom + TB.top) / 2), UB(IB).concat(JB).concat(UB(TB))
          }

          function yB(BB, ZB, TB, JB) {
            return new fJ(IB, BB - kB.left, ZB - kB.top, Math.max(0, TB - BB), JB - ZB)
          }

          function UB(BB) {
            let {
              top: IB,
              bottom: ZB,
              horizontal: TB
            } = BB, JB = [];
            for (let oB = 0; oB < TB.length; oB += 2) JB.push(yB(TB[oB], IB, TB[oB + 1], ZB));
            return JB
          }

          function WB(IB, ZB, TB) {
            let JB = 1e9,
              GB = -1e9,
              vB = [];

            function kB(IB, ZB, kB, cB, nB) {
              let FB = BB.coordsAtPos(IB, IB == TB.to ? -2 : 2),
                NB = BB.coordsAtPos(kB, kB == TB.from ? 2 : -2);
              FB && NB && (JB = Math.min(FB.top, NB.top, JB), GB = Math.max(FB.bottom, NB.bottom, GB), nB == cI.LTR ? vB.push(oB && ZB ? hB : FB.left, oB && cB ? zB : NB.right) : vB.push(!oB && cB ? hB : NB.left, !oB && ZB ? zB : FB.right))
            }
            let cB = null !== IB && void 0 !== IB ? IB : TB.from,
              nB = null !== ZB && void 0 !== ZB ? ZB : TB.to;
            for (let oB of BB.BBB)
              if (oB.to > cB && oB.from < nB)
                for (let TB = Math.max(oB.from, cB), JB = Math.min(oB.to, nB);;) {
                  let oB = BB.state.doc.lineAt(TB);
                  for (let GB of BB.bidiSpans(oB)) {
                    let BB = GB.from + oB.from,
                      vB = GB.to + oB.from;
                    if (BB >= JB) break;
                    vB > TB && kB(Math.max(BB, TB), null == IB && BB <= cB, Math.min(vB, JB), null == ZB && vB >= nB, GB.dir)
                  }
                  if (TB = oB.to + 1, TB >= JB) break
                }
            return 0 == vB.length && kB(cB, null == IB, nB, null == ZB, BB.textDirection), {
              top: JB,
              bottom: GB,
              horizontal: vB
            }
          }

          function dB(BB, IB) {
            let ZB = vB.top + (IB ? BB.top : BB.bottom);
            return {
              top: ZB,
              bottom: ZB,
              horizontal: []
            }
          }
        }(BB, IB, ZB)
      }
    }

    function lJ(BB) {
      let IB = BB.scrollDOM.getBoundingClientRect();
      return {
        left: (BB.textDirection == cI.LTR ? IB.left : IB.right - BB.scrollDOM.clientWidth * BB.scaleX) - BB.scrollDOM.scrollLeft * BB.scaleX,
        top: IB.top - BB.scrollDOM.scrollTop * BB.scaleY
      }
    }

    function AJ(BB, IB, ZB, TB) {
      let JB = BB.coordsAtPos(IB, 2 * ZB);
      if (!JB) return TB;
      let oB = BB.dom.getBoundingClientRect(),
        GB = (JB.top + JB.bottom) / 2,
        vB = BB.posAtCoords({
          x: oB.left + 1,
          y: GB
        }),
        kB = BB.posAtCoords({
          x: oB.right - 1,
          y: GB
        });
      return null == vB || null == kB ? TB : {
        from: Math.max(TB.from, Math.min(vB, kB)),
        to: Math.min(TB.to, Math.max(vB, kB))
      }
    }
    class tJ {
      constructor(BB, IB) {
        this.view = BB, this.layer = IB, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = BB.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), IB.above && this.dom.classList.add("cm-layer-above"), IB.class && this.dom.classList.add(IB.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(BB.state), BB.requestMeasure(this.measureReq), IB.mount && IB.mount(this.dom, BB)
      }
      update(BB) {
        BB.startState.facet(bJ) != BB.state.facet(bJ) && this.setOrder(BB.state), (this.layer.update(BB, this.dom) || BB.geometryChanged) && (this.scale(), BB.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(BB) {
        !1 !== this.layer.updateOnDocViewUpdate && BB.requestMeasure(this.measureReq)
      }
      setOrder(BB) {
        let IB = 0,
          ZB = BB.facet(bJ);
        for (; IB < ZB.length && ZB[IB] != this.layer;) IB++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - IB)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: BB,
          scaleY: IB
        } = this.view;
        BB == this.scaleX && IB == this.scaleY || (this.scaleX = BB, this.scaleY = IB, this.dom.style.transform = `scale(${1/BB}, ${1/IB})`)
      }
      draw(BB) {
        if (BB.length != this.drawn.length || BB.some(((BB, IB) => {
            return ZB = BB, TB = this.drawn[IB], !(ZB.constructor == TB.constructor && ZB.eq(TB));
            var ZB, TB
          }))) {
          let IB = this.dom.firstChild,
            ZB = 0;
          for (let TB of BB) TB.update && IB && TB.constructor && this.drawn[ZB].constructor && TB.update(IB, this.drawn[ZB]) ? (IB = IB.nextSibling, ZB++) : this.dom.insertBefore(TB.draw(), IB);
          for (; IB;) {
            let BB = IB.nextSibling;
            IB.remove(), IB = BB
          }
          this.drawn = BB, sB.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const bJ = TB.t.define();

    function xJ(BB) {
      return [DI.define((IB => new tJ(IB, BB))), bJ.of(BB)]
    }
    const EJ = TB.t.define({
      combine: BB => (0, TB.T)(BB, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (BB, IB) => Math.min(BB, IB),
        drawRangeCursor: (BB, IB) => BB || IB
      })
    });

    function DJ() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [EJ.of(BB), VJ, Bo, Io, eI.of(!0)]
    }

    function KJ(BB) {
      return BB.startState.facet(EJ) != BB.state.facet(EJ)
    }
    const VJ = xJ({
      above: !0,
      markers(BB) {
        let {
          state: IB
        } = BB, ZB = IB.facet(EJ), JB = [];
        for (let oB of IB.selection.vq) {
          let GB = oB == IB.selection.main;
          if (oB.empty || ZB.drawRangeCursor && !(GB && sB.ios && ZB.iosSelectionHandles)) {
            let IB = GB ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              ZB = oB.empty ? oB : TB.n.cursor(oB.head, oB.assoc);
            for (let TB of fJ.forRange(BB, IB, ZB)) JB.push(TB)
          }
        }
        return JB
      },
      update(BB, IB) {
        BB.transactions.some((BB => BB.selection)) && (IB.style.animationName = "cm-blink" == IB.style.animationName ? "cm-blink2" : "cm-blink");
        let ZB = KJ(BB);
        return ZB && SJ(BB.state, IB), BB.docChanged || BB.selectionSet || ZB
      },
      mount(BB, IB) {
        SJ(IB.state, BB)
      },
      class: "cm-cursorLayer"
    });

    function SJ(BB, IB) {
      IB.style.animationDuration = BB.facet(EJ).cursorBlinkRate + "ms"
    }
    const Bo = xJ({
        above: !1,
        markers(BB) {
          let IB = [],
            {
              main: ZB,
              vq: JB
            } = BB.state.selection;
          for (let TB of JB)
            if (!TB.empty)
              for (let ZB of fJ.forRange(BB, "cm-selectionBackground", TB)) IB.push(ZB);
          if (sB.ios && !ZB.empty && BB.state.facet(EJ).iosSelectionHandles) {
            for (let JB of fJ.forRange(BB, "cm-selectionHandle cm-selectionHandle-start", TB.n.cursor(ZB.from, 1))) IB.push(JB);
            for (let JB of fJ.forRange(BB, "cm-selectionHandle cm-selectionHandle-end", TB.n.cursor(ZB.to, 1))) IB.push(JB)
          }
          return IB
        },
        update: (BB, IB) => BB.docChanged || BB.selectionSet || BB.viewportChanged || KJ(BB),
        class: "cm-selectionLayer"
      }),
      Io = TB.A.highest(OJ.theme({
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
      Zo = TB.K.define({
        map: (BB, IB) => null == BB ? null : IB.mapPos(BB)
      }),
      To = TB.L.define({
        create: () => null,
        update: (BB, IB) => (null != BB && (BB = IB.changes.mapPos(BB)), IB.effects.reduce(((BB, IB) => IB.is(Zo) ? IB.value : BB), BB))
      }),
      Jo = DI.fromClass(class {
        constructor(BB) {
          this.view = BB, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(BB) {
          var IB;
          let ZB = BB.state.field(To);
          null == ZB ? null != this.cursor && (null === (IB = this.cursor) || void 0 === IB || IB.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (BB.startState.field(To) != ZB || BB.docChanged || BB.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: BB
          } = this, IB = BB.state.field(To), ZB = null != IB && BB.coordsAtPos(IB);
          if (!ZB) return null;
          let TB = BB.scrollDOM.getBoundingClientRect();
          return {
            left: ZB.left - TB.left + BB.scrollDOM.scrollLeft * BB.scaleX,
            top: ZB.top - TB.top + BB.scrollDOM.scrollTop * BB.scaleY,
            height: ZB.bottom - ZB.top
          }
        }
        drawCursor(BB) {
          if (this.cursor) {
            let {
              scaleX: IB,
              scaleY: ZB
            } = this.view;
            BB ? (this.cursor.style.left = BB.left / IB + "px", this.cursor.style.top = BB.top / ZB + "px", this.cursor.style.height = BB.height / ZB + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(BB) {
          this.view.state.field(To) != BB && this.view.dispatch({
            effects: Zo.of(BB)
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

    function oo() {
      return [To, Jo]
    }

    function Go(BB, IB, ZB, TB, JB) {
      IB.lastIndex = 0;
      for (let oB, GB = BB.iterRange(ZB, TB), vB = ZB; !GB.next().done; vB += GB.value.length)
        if (!GB.lineBreak)
          for (; oB = IB.exec(GB.value);) JB(vB + oB.index, oB)
    }
    class vo {
      constructor(BB) {
        const {
          regexp: IB,
          decoration: ZB,
          decorate: TB,
          boundary: JB,
          maxLength: oB = 1e3
        } = BB;
        if (!IB.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = IB, TB) this.addMatch = (BB, IB, ZB, JB) => TB(JB, ZB, ZB + BB[0].length, BB, IB);
        else if ("function" == typeof ZB) this.addMatch = (BB, IB, TB, JB) => {
          let oB = ZB(BB, IB, TB);
          oB && JB(TB, TB + BB[0].length, oB)
        };
        else {
          if (!ZB) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (BB, IB, TB, JB) => JB(TB, TB + BB[0].length, ZB)
        }
        this.boundary = JB, this.maxLength = oB
      }
      createDeco(BB) {
        let IB = new TB.B,
          ZB = IB.add.bind(IB);
        for (let {
            from: TB,
            to: JB
          }
          of
          function(BB, IB) {
            let ZB = BB.BBB;
            if (1 == ZB.length && ZB[0].from == BB.viewport.from && ZB[0].to == BB.viewport.to) return ZB;
            let TB = [];
            for (let {
                from: JB,
                to: oB
              }
              of ZB) JB = Math.max(BB.state.doc.lineAt(JB).from, JB - IB), oB = Math.min(BB.state.doc.lineAt(oB).to, oB + IB), TB.length && TB[TB.length - 1].to >= JB ? TB[TB.length - 1].to = oB : TB.push({
              from: JB,
              to: oB
            });
            return TB
          }(BB, this.maxLength)) Go(BB.state.doc, this.regexp, TB, JB, ((IB, TB) => this.addMatch(TB, BB, IB, ZB)));
        return IB.finish()
      }
      updateDeco(BB, IB) {
        let ZB = 1e9,
          TB = -1;
        return BB.docChanged && BB.changes.iterChanges(((IB, JB, oB, GB) => {
          GB >= BB.view.viewport.from && oB <= BB.view.viewport.to && (ZB = Math.min(oB, ZB), TB = Math.max(GB, TB))
        })), BB.viewportMoved || TB - ZB > 1e3 ? this.createDeco(BB.view) : TB > -1 ? this.updateRange(BB.view, IB.map(BB.changes), ZB, TB) : IB
      }
      updateRange(BB, IB, ZB, TB) {
        for (let JB of BB.BBB) {
          let oB = Math.max(JB.from, ZB),
            GB = Math.min(JB.to, TB);
          if (GB >= oB) {
            let ZB = BB.state.doc.lineAt(oB),
              TB = ZB.to < GB ? BB.state.doc.lineAt(GB) : ZB,
              vB = Math.max(JB.from, ZB.from),
              kB = Math.min(JB.to, TB.to);
            if (this.boundary) {
              for (; oB > ZB.from; oB--)
                if (this.boundary.test(ZB.text[oB - 1 - ZB.from])) {
                  vB = oB;
                  break
                } for (; GB < TB.to; GB++)
                if (this.boundary.test(TB.text[GB - TB.from])) {
                  kB = GB;
                  break
                }
            }
            let cB, nB = [],
              hB = (BB, IB, ZB) => nB.push(ZB.range(BB, IB));
            if (ZB == TB)
              for (this.regexp.lastIndex = vB - ZB.from;
                (cB = this.regexp.exec(ZB.text)) && cB.index < kB - ZB.from;) this.addMatch(cB, BB, cB.index + ZB.from, hB);
            else Go(BB.state.doc, this.regexp, vB, kB, ((IB, ZB) => this.addMatch(ZB, BB, IB, hB)));
            IB = IB.update({
              filterFrom: vB,
              filterTo: kB,
              filter: (BB, IB) => BB < vB || IB > kB,
              add: nB
            })
          }
        }
        return IB
      }
    }
    const ko = null != /x/.unicode ? "gu" : "g",
      co = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", ko),
      no = {
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
    let ho = null;
    const zo = TB.t.define({
      combine(BB) {
        let IB = (0, TB.T)(BB, {
          render: null,
          specialChars: co,
          addSpecialChars: null
        });
        return (IB.replaceTabs = ! function() {
          var BB;
          if (null == ho && "undefined" != typeof document && document.body) {
            let IB = document.body.style;
            ho = null != (null !== (BB = IB.tabSize) && void 0 !== BB ? BB : IB.MozTabSize)
          }
          return ho || !1
        }()) && (IB.specialChars = new RegExp("\t|" + IB.specialChars.source, ko)), IB.addSpecialChars && (IB.specialChars = new RegExp(IB.specialChars.source + "|" + IB.addSpecialChars.source, ko)), IB
      }
    });

    function Fo() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [zo.of(BB), No || (No = DI.fromClass(class {
        constructor(BB) {
          this.view = BB, this.vT = MB.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(BB.state.facet(zo)), this.vT = this.decorator.createDeco(BB)
        }
        makeDecorator(BB) {
          return new vo({
            regexp: BB.specialChars,
            decoration: (IB, ZB, JB) => {
              let {
                doc: oB
              } = ZB.state, GB = (0, TB.Q)(IB[0], 0);
              if (9 == GB) {
                let BB = oB.lineAt(JB),
                  IB = ZB.state.tabSize,
                  GB = (0, TB.X)(BB.text, IB, JB - BB.from);
                return MB.replace({
                  widget: new qo((IB - GB % IB) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[GB] || (this.decorationCache[GB] = MB.replace({
                widget: new go(BB, GB)
              }))
            },
            boundary: BB.replaceTabs ? void 0 : /[^]/
          })
        }
        update(BB) {
          let IB = BB.state.facet(zo);
          BB.startState.facet(zo) != IB ? (this.decorator = this.makeDecorator(IB), this.vT = this.decorator.createDeco(BB.view)) : this.vT = this.decorator.updateDeco(BB, this.vT)
        }
      }, {
        vT: BB => BB.vT
      }))]
    }
    let No = null;
    class go extends aB {
      constructor(BB, IB) {
        super(), this.options = BB, this.code = IB
      }
      eq(BB) {
        return BB.code == this.code
      }
      toDOM(BB) {
        let IB = function(BB) {
            return BB >= 32 ? "\u2022" : 10 == BB ? "\u2424" : String.fromCharCode(9216 + BB)
          }(this.code),
          ZB = BB.state.phrase("Control character") + " " + (no[this.code] || "0x" + this.code.toString(16)),
          TB = this.options.render && this.options.render(this.code, ZB, IB);
        if (TB) return TB;
        let JB = document.createElement("span");
        return JB.textContent = IB, JB.title = ZB, JB.setAttribute("aria-label", ZB), JB.className = "cm-specialChar", JB
      }
      ignoreEvent() {
        return !1
      }
    }
    class qo extends aB {
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

    function yo() {
      return Wo
    }
    const Uo = MB.line({
        class: "cm-activeLine"
      }),
      Wo = DI.fromClass(class {
        constructor(BB) {
          this.vT = this.getDeco(BB)
        }
        update(BB) {
          (BB.docChanged || BB.selectionSet) && (this.vT = this.getDeco(BB.view))
        }
        getDeco(BB) {
          let IB = -1,
            ZB = [];
          for (let TB of BB.state.selection.vq) {
            let JB = BB.lineBlockAt(TB.head);
            JB.from > IB && (ZB.push(Uo.range(JB.from)), IB = JB.from)
          }
          return MB.set(ZB)
        }
      }, {
        vT: BB => BB.vT
      });
    class Co extends aB {
      constructor(BB) {
        super(), this.content = BB
      }
      toDOM(BB) {
        let IB = document.createElement("span");
        return IB.className = "cm-placeholder", IB.style.pointerEvents = "none", IB.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(BB) : this.content.cloneNode(!0)), IB.setAttribute("aria-hidden", "true"), IB
      }
      coordsAt(BB) {
        let IB = BB.firstChild ? fB(BB.firstChild) : [];
        if (!IB.length) return null;
        let ZB = window.getComputedStyle(BB.parentNode),
          TB = EB(IB[0], "rtl" != ZB.direction),
          JB = parseInt(ZB.lineHeight);
        return TB.bottom - TB.top > 1.5 * JB ? {
          left: TB.left,
          right: TB.right,
          top: TB.top,
          bottom: TB.top + JB
        } : TB
      }
      ignoreEvent() {
        return !1
      }
    }

    function Qo(BB) {
      let IB = DI.fromClass(class {
        constructor(IB) {
          this.view = IB, this.placeholder = BB ? MB.set([MB.widget({
            widget: new Co(BB),
            side: 1
          }).range(0)]) : MB.none
        }
        get vT() {
          return this.view.state.doc.length ? MB.none : this.placeholder
        }
      }, {
        vT: BB => BB.vT
      });
      return "string" == typeof BB ? [IB, OJ.contentAttributes.of({
        "aria-placeholder": BB
      })] : IB
    }
    const so = 2e3;

    function wo(BB, IB) {
      let ZB = BB.posAtCoords({
          x: IB.clientX,
          y: IB.clientY
        }, !1),
        JB = BB.state.doc.lineAt(ZB),
        oB = ZB - JB.from,
        GB = oB > so ? -1 : oB == JB.length ? function(BB, IB) {
          let ZB = BB.coordsAtPos(BB.viewport.from);
          return ZB ? Math.round(Math.abs((ZB.left - IB) / BB.defaultCharacterWidth)) : -1
        }(BB, IB.clientX) : (0, TB.X)(JB.text, BB.state.tabSize, ZB - JB.from);
      return {
        line: JB.number,
        col: GB,
        off: oB
      }
    }

    function Oo(BB, IB) {
      let ZB = wo(BB, IB),
        JB = BB.state.selection;
      return ZB ? {
        update(BB) {
          if (BB.docChanged) {
            let IB = BB.changes.mapPos(BB.startState.doc.line(ZB.line).from),
              TB = BB.state.doc.lineAt(IB);
            ZB = {
              line: TB.number,
              col: ZB.col,
              off: Math.min(ZB.off, TB.length)
            }, JB = JB.map(BB.changes)
          }
        },
        get(IB, oB, GB) {
          let vB = wo(BB, IB);
          if (!vB) return JB;
          let kB = function(BB, IB, ZB) {
            let JB = Math.min(IB.line, ZB.line),
              oB = Math.max(IB.line, ZB.line),
              GB = [];
            if (IB.off > so || ZB.off > so || IB.col < 0 || ZB.col < 0) {
              let vB = Math.min(IB.off, ZB.off),
                kB = Math.max(IB.off, ZB.off);
              for (let IB = JB; IB <= oB; IB++) {
                let ZB = BB.doc.line(IB);
                ZB.length <= kB && GB.push(TB.n.range(ZB.from + vB, ZB.to + kB))
              }
            } else {
              let vB = Math.min(IB.col, ZB.col),
                kB = Math.max(IB.col, ZB.col);
              for (let IB = JB; IB <= oB; IB++) {
                let ZB = BB.doc.line(IB),
                  JB = (0, TB.ab)(ZB.text, vB, BB.tabSize, !0);
                if (JB < 0) GB.push(TB.n.cursor(ZB.to));
                else {
                  let IB = (0, TB.ab)(ZB.text, kB, BB.tabSize);
                  GB.push(TB.n.range(ZB.from + JB, ZB.from + IB))
                }
              }
            }
            return GB
          }(BB.state, ZB, vB);
          return kB.length ? GB ? TB.n.create(kB.concat(JB.vq)) : TB.n.create(kB) : JB
        }
      } : null
    }

    function Yo(BB) {
      let IB = (null === BB || void 0 === BB ? void 0 : BB.eventFilter) || (BB => BB.altKey && 0 == BB.button);
      return OJ.mouseSelectionStyle.of(((BB, ZB) => IB(ZB) ? Oo(BB, ZB) : null))
    }
    const io = {
        Alt: [18, BB => !!BB.altKey],
        Control: [17, BB => !!BB.ctrlKey],
        Shift: [16, BB => !!BB.shiftKey],
        Meta: [91, BB => !!BB.metaKey]
      },
      po = {
        style: "cursor: crosshair"
      };

    function ao() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [IB, ZB] = io[BB.key || "Alt"],
        TB = DI.fromClass(class {
          constructor(BB) {
            this.view = BB, this.isDown = !1
          }
          set(BB) {
            this.isDown != BB && (this.isDown = BB, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(BB) {
              this.set(BB.keyCode == IB || ZB(BB))
            },
            keyup(BB) {
              BB.keyCode != IB && ZB(BB) || this.set(!1)
            },
            mousemove(BB) {
              this.set(ZB(BB))
            }
          }
        });
      return [TB, OJ.contentAttributes.of((BB => {
        var IB;
        return (null === (IB = BB.plugin(TB)) || void 0 === IB ? void 0 : IB.isDown) ? po : null
      }))]
    }
    const Ho = "-10000px";
    class Mo {
      constructor(BB, IB, ZB, TB) {
        this.facet = IB, this.createTooltipView = ZB, this.removeTooltipView = TB, this.input = BB.state.facet(IB), this.tooltips = this.input.filter((BB => BB));
        let JB = null;
        this.tooltipViews = this.tooltips.map((BB => JB = ZB(BB, JB)))
      }
      update(BB, IB) {
        var ZB;
        let TB = BB.state.facet(this.facet),
          JB = TB.filter((BB => BB));
        if (TB === this.input) {
          for (let IB of this.tooltipViews) IB.update && IB.update(BB);
          return !1
        }
        let oB = [],
          GB = IB ? [] : null;
        for (let vB = 0; vB < JB.length; vB++) {
          let ZB = JB[vB],
            TB = -1;
          if (ZB) {
            for (let BB = 0; BB < this.tooltips.length; BB++) {
              let IB = this.tooltips[BB];
              IB && IB.create == ZB.create && (TB = BB)
            }
            if (TB < 0) oB[vB] = this.createTooltipView(ZB, vB ? oB[vB - 1] : null), GB && (GB[vB] = !!ZB.above);
            else {
              let ZB = oB[vB] = this.tooltipViews[TB];
              GB && (GB[vB] = IB[TB]), ZB.update && ZB.update(BB)
            }
          }
        }
        for (let vB of this.tooltipViews) oB.indexOf(vB) < 0 && (this.removeTooltipView(vB), null === (ZB = vB.destroy) || void 0 === ZB || ZB.call(vB));
        return IB && (GB.forEach(((BB, ZB) => IB[ZB] = BB)), IB.length = GB.length), this.input = TB, this.tooltips = JB, this.tooltipViews = oB, !0
      }
    }

    function jo(BB) {
      let IB = BB.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: IB.clientHeight,
        right: IB.clientWidth
      }
    }
    const Po = TB.t.define({
        combine: BB => {
          var IB, ZB, TB;
          return {
            position: sB.ios ? "absolute" : (null === (IB = BB.find((BB => BB.position))) || void 0 === IB ? void 0 : IB.position) || "fixed",
            parent: (null === (ZB = BB.find((BB => BB.parent))) || void 0 === ZB ? void 0 : ZB.parent) || null,
            tooltipSpace: (null === (TB = BB.find((BB => BB.tooltipSpace))) || void 0 === TB ? void 0 : TB.tooltipSpace) || jo
          }
        }
      }),
      Ro = new WeakMap,
      ro = DI.fromClass(class {
        constructor(BB) {
          this.view = BB, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let IB = BB.state.facet(Po);
          this.position = IB.position, this.parent = IB.parent, this.classes = BB.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new Mo(BB, eo, ((BB, IB) => this.createTooltip(BB, IB)), (BB => {
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
          let IB = this.manager.update(BB, this.above);
          IB && this.observeIntersection();
          let ZB = IB || BB.geometryChanged,
            TB = BB.state.facet(Po);
          if (TB.position != this.position && !this.madeAbsolute) {
            this.position = TB.position;
            for (let BB of this.manager.tooltipViews) BB.dom.style.position = this.position;
            ZB = !0
          }
          if (TB.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = TB.parent, this.createContainer();
            for (let BB of this.manager.tooltipViews) this.container.appendChild(BB.dom);
            ZB = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          ZB && this.maybeMeasure()
        }
        createTooltip(BB, IB) {
          let ZB = BB.create(this.view),
            TB = IB ? IB.dom : null;
          if (ZB.dom.classList.add("cm-tooltip"), BB.arrow && !ZB.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let BB = document.createElement("div");
            BB.className = "cm-tooltip-arrow", ZB.dom.appendChild(BB)
          }
          return ZB.dom.style.position = this.position, ZB.dom.style.top = Ho, ZB.dom.style.left = "0px", this.container.insertBefore(ZB.dom, TB), ZB.mount && ZB.mount(this.view), this.resizeObserver && this.resizeObserver.observe(ZB.dom), ZB
        }
        destroy() {
          var BB, IB, ZB;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let TB of this.manager.tooltipViews) TB.dom.remove(), null === (BB = TB.destroy) || void 0 === BB || BB.call(TB);
          this.parent && this.container.remove(), null === (IB = this.resizeObserver) || void 0 === IB || IB.disconnect(), null === (ZB = this.intersectionObserver) || void 0 === ZB || ZB.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let BB = 1,
            IB = 1,
            ZB = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: BB
            } = this.manager.tooltipViews[0];
            if (sB.safari) {
              let IB = BB.getBoundingClientRect();
              ZB = Math.abs(IB.top + 1e4) > 1 || Math.abs(IB.left) > 1
            } else ZB = !!BB.offsetParent && BB.offsetParent != this.container.ownerDocument.body
          }
          if (ZB || "absolute" == this.position)
            if (this.parent) {
              let ZB = this.parent.getBoundingClientRect();
              ZB.width && ZB.height && (BB = ZB.width / this.parent.offsetWidth, IB = ZB.height / this.parent.offsetHeight)
            } else({
              scaleX: BB,
              scaleY: IB
            } = this.view.viewState);
          let TB = this.view.scrollDOM.getBoundingClientRect(),
            JB = vZ(this.view);
          return {
            visible: {
              left: TB.left + JB.left,
              top: TB.top + JB.top,
              right: TB.right - JB.right,
              bottom: TB.bottom - JB.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((BB, IB) => {
              let ZB = this.manager.tooltipViews[IB];
              return ZB.getCoords ? ZB.getCoords(BB.pos) : this.view.coordsAtPos(BB.pos)
            })),
            size: this.manager.tooltipViews.map((BB => {
              let {
                dom: IB
              } = BB;
              return IB.getBoundingClientRect()
            })),
            space: this.view.state.facet(Po).tooltipSpace(this.view),
            scaleX: BB,
            scaleY: IB,
            makeAbsolute: ZB
          }
        }
        writeMeasure(BB) {
          var IB;
          if (BB.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let BB of this.manager.tooltipViews) BB.dom.style.position = "absolute"
          }
          let {
            visible: ZB,
            space: TB,
            scaleX: JB,
            scaleY: oB
          } = BB, GB = [];
          for (let vB = 0; vB < this.manager.tooltips.length; vB++) {
            let kB = this.manager.tooltips[vB],
              cB = this.manager.tooltipViews[vB],
              {
                dom: nB
              } = cB,
              hB = BB.pos[vB],
              zB = BB.size[vB];
            if (!hB || !1 !== kB.clip && (hB.bottom <= Math.max(ZB.top, TB.top) || hB.top >= Math.min(ZB.bottom, TB.bottom) || hB.right < Math.max(ZB.left, TB.left) - .1 || hB.left > Math.min(ZB.right, TB.right) + .1)) {
              nB.style.top = Ho;
              continue
            }
            let FB = kB.arrow ? cB.dom.querySelector(".cm-tooltip-arrow") : null,
              NB = FB ? 7 : 0,
              gB = zB.right - zB.left,
              qB = null !== (IB = Ro.get(cB)) && void 0 !== IB ? IB : zB.bottom - zB.top,
              yB = cB.offset || Lo,
              UB = this.view.textDirection == cI.LTR,
              WB = zB.width > TB.right - TB.left ? UB ? TB.left : TB.right - zB.width : UB ? Math.max(TB.left, Math.min(hB.left - (FB ? 14 : 0) + yB.x, TB.right - gB)) : Math.min(Math.max(TB.left, hB.left - gB + (FB ? 14 : 0) - yB.x), TB.right - gB),
              dB = this.above[vB];
            !kB.strictSide && (dB ? hB.top - qB - NB - yB.y < TB.top : hB.bottom + qB + NB + yB.y > TB.bottom) && dB == TB.bottom - hB.bottom > hB.top - TB.top && (dB = this.above[vB] = !dB);
            let CB = (dB ? hB.top - TB.top : TB.bottom - hB.bottom) - NB;
            if (CB < qB && !1 !== cB.resize) {
              if (CB < this.view.defaultLineHeight) {
                nB.style.top = Ho;
                continue
              }
              Ro.set(cB, qB), nB.style.height = (qB = CB) / oB + "px"
            } else nB.style.height && (nB.style.height = "");
            let QB = dB ? hB.top - qB - NB - yB.y : hB.bottom + NB + yB.y,
              sB = WB + gB;
            if (!0 !== cB.overlap)
              for (let BB of GB) BB.left < sB && BB.right > WB && BB.top < QB + qB && BB.bottom > QB && (QB = dB ? BB.top - qB - 2 - NB : BB.bottom + NB + 2);
            if ("absolute" == this.position ? (nB.style.top = (QB - BB.parent.top) / oB + "px", mo(nB, (WB - BB.parent.left) / JB)) : (nB.style.top = QB / oB + "px", mo(nB, WB / JB)), FB) {
              let BB = hB.left + (UB ? yB.x : -yB.x) - (WB + 14 - 7);
              FB.style.left = BB / JB + "px"
            }!0 !== cB.overlap && GB.push({
              left: WB,
              top: QB,
              right: sB,
              bottom: QB + qB
            }), nB.classList.toggle("cm-tooltip-above", dB), nB.classList.toggle("cm-tooltip-below", !dB), cB.positioned && cB.positioned(BB.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let BB of this.manager.tooltipViews) BB.dom.style.top = Ho
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function mo(BB, IB) {
      let ZB = parseInt(BB.style.left, 10);
      (isNaN(ZB) || Math.abs(IB - ZB) > 1) && (BB.style.left = IB + "px")
    }
    const Xo = OJ.baseTheme({
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
      Lo = {
        x: 0,
        y: 0
      },
      eo = TB.t.define({
        enables: [ro, Xo]
      }),
      uo = TB.t.define({
        combine: BB => BB.reduce(((BB, IB) => BB.concat(IB)), [])
      });
    class fo {
      static create(BB) {
        return new fo(BB)
      }
      constructor(BB) {
        this.view = BB, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new Mo(BB, uo, ((BB, IB) => this.createHostedView(BB, IB)), (BB => BB.dom.remove()))
      }
      createHostedView(BB, IB) {
        let ZB = BB.create(this.view);
        return ZB.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(ZB.dom, IB ? IB.dom.nextSibling : this.dom.firstChild), this.mounted && ZB.mount && ZB.mount(this.view), ZB
      }
      mount(BB) {
        for (let IB of this.manager.tooltipViews) IB.mount && IB.mount(BB);
        this.mounted = !0
      }
      positioned(BB) {
        for (let IB of this.manager.tooltipViews) IB.positioned && IB.positioned(BB)
      }
      update(BB) {
        this.manager.update(BB)
      }
      destroy() {
        var BB;
        for (let IB of this.manager.tooltipViews) null === (BB = IB.destroy) || void 0 === BB || BB.call(IB)
      }
      passProp(BB) {
        let IB;
        for (let ZB of this.manager.tooltipViews) {
          let TB = ZB[BB];
          if (void 0 !== TB)
            if (void 0 === IB) IB = TB;
            else if (IB !== TB) return
        }
        return IB
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
    const Ao = eo.compute([uo], (BB => {
      let IB = BB.facet(uo);
      return 0 === IB.length ? null : {
        pos: Math.min(...IB.map((BB => BB.pos))),
        end: Math.max(...IB.map((BB => {
          var IB;
          return null !== (IB = BB.end) && void 0 !== IB ? IB : BB.pos
        }))),
        create: fo.create,
        above: IB[0].above,
        arrow: IB.some((BB => BB.arrow))
      }
    }));
    class to {
      constructor(BB, IB, ZB, TB, JB) {
        this.view = BB, this.source = IB, this.field = ZB, this.setHover = TB, this.hoverTime = JB, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
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
          lastMove: IB
        } = this, ZB = BB.docView.tile.nearest(IB.target);
        if (!ZB) return;
        let TB, JB = 1;
        if (ZB.isWidget()) TB = ZB.posAtStart;
        else {
          if (TB = BB.posAtCoords(IB), null == TB) return;
          let ZB = BB.coordsAtPos(TB);
          if (!ZB || IB.y < ZB.top || IB.y > ZB.bottom || IB.x < ZB.left - BB.defaultCharacterWidth || IB.x > ZB.right + BB.defaultCharacterWidth) return;
          let oB = BB.bidiSpans(BB.state.doc.lineAt(TB)).find((BB => BB.from <= TB && BB.to >= TB)),
            GB = oB && oB.dir == cI.RTL ? -1 : 1;
          JB = IB.x < ZB.left ? -GB : GB
        }
        let oB = this.source(BB, TB, JB);
        if (null === oB || void 0 === oB ? void 0 : oB.then) {
          let IB = this.pending = {
            pos: TB
          };
          oB.then((ZB => {
            this.pending == IB && (this.pending = null, !ZB || Array.isArray(ZB) && !ZB.length || BB.dispatch({
              effects: this.setHover.of(Array.isArray(ZB) ? ZB : [ZB])
            }))
          }), (IB => tI(BB.state, IB, "hover tooltip")))
        } else !oB || Array.isArray(oB) && !oB.length || BB.dispatch({
          effects: this.setHover.of(Array.isArray(oB) ? oB : [oB])
        })
      }
      get tooltip() {
        let BB = this.view.plugin(ro),
          IB = BB ? BB.manager.tooltips.findIndex((BB => BB.create == fo.create)) : -1;
        return IB > -1 ? BB.manager.tooltipViews[IB] : null
      }
      mousemove(BB) {
        var IB, ZB;
        this.lastMove = {
          x: BB.clientX,
          y: BB.clientY,
          target: BB.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: TB,
          tooltip: JB
        } = this;
        if (TB.length && JB && ! function(BB, IB) {
            let ZB, {
              left: TB,
              right: JB,
              top: oB,
              bottom: GB
            } = BB.getBoundingClientRect();
            if (ZB = BB.querySelector(".cm-tooltip-arrow")) {
              let BB = ZB.getBoundingClientRect();
              oB = Math.min(BB.top, oB), GB = Math.max(BB.bottom, GB)
            }
            return IB.clientX >= TB - bo && IB.clientX <= JB + bo && IB.clientY >= oB - bo && IB.clientY <= GB + bo
          }(JB.dom, BB) || this.pending) {
          let {
            pos: JB
          } = TB[0] || this.pending, oB = null !== (ZB = null === (IB = TB[0]) || void 0 === IB ? void 0 : IB.end) && void 0 !== ZB ? ZB : JB;
          (JB == oB ? this.view.posAtCoords(this.lastMove) == JB : function(BB, IB, ZB, TB, JB) {
            let oB = BB.scrollDOM.getBoundingClientRect(),
              GB = BB.documentTop + BB.documentPadding.top + BB.contentHeight;
            if (oB.left > TB || oB.right < TB || oB.top > JB || Math.min(oB.bottom, GB) < JB) return !1;
            let vB = BB.posAtCoords({
              x: TB,
              y: JB
            }, !1);
            return vB >= IB && vB <= ZB
          }(this.view, JB, oB, BB.clientX, BB.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(BB) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: IB
        } = this;
        if (IB.length) {
          let {
            tooltip: IB
          } = this;
          IB && IB.dom.contains(BB.relatedTarget) ? this.watchTooltipLeave(IB.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(BB) {
        let IB = ZB => {
          BB.removeEventListener("mouseleave", IB), this.active.length && !this.view.dom.contains(ZB.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        BB.addEventListener("mouseleave", IB)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const bo = 4;

    function xo(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        ZB = TB.K.define(),
        JB = TB.L.define({
          create: () => [],
          update(BB, JB) {
            if (BB.length && (IB.hideOnChange && (JB.docChanged || JB.selection) ? BB = [] : IB.hideOn && (BB = BB.filter((BB => !IB.hideOn(JB, BB)))), JB.docChanged)) {
              let IB = [];
              for (let ZB of BB) {
                let BB = JB.changes.mapPos(ZB.pos, -1, TB.w.TrackDel);
                if (null != BB) {
                  let TB = Object.assign(Object.create(null), ZB);
                  TB.pos = BB, null != TB.end && (TB.end = JB.changes.mapPos(TB.end)), IB.push(TB)
                }
              }
              BB = IB
            }
            for (let IB of JB.effects) IB.is(ZB) && (BB = IB.value), IB.is(Do) && (BB = []);
            return BB
          },
          provide: BB => uo.from(BB)
        });
      return {
        active: JB,
        extension: [JB, DI.define((TB => new to(TB, BB, JB, ZB, IB.hoverTime || 300))), Ao]
      }
    }

    function Eo(BB, IB) {
      let ZB = BB.plugin(ro);
      if (!ZB) return null;
      let TB = ZB.manager.tooltips.indexOf(IB);
      return TB < 0 ? null : ZB.manager.tooltipViews[TB]
    }
    const Do = TB.K.define();
    const Ko = TB.t.define({
      combine(BB) {
        let IB, ZB;
        for (let TB of BB) IB = IB || TB.topContainer, ZB = ZB || TB.bottomContainer;
        return {
          topContainer: IB,
          bottomContainer: ZB
        }
      }
    });

    function Vo(BB, IB) {
      let ZB = BB.plugin(So),
        TB = ZB ? ZB.specs.indexOf(IB) : -1;
      return TB > -1 ? ZB.panels[TB] : null
    }
    const So = DI.fromClass(class {
      constructor(BB) {
        this.input = BB.state.facet(ZG), this.specs = this.input.filter((BB => BB)), this.panels = this.specs.map((IB => IB(BB)));
        let IB = BB.state.facet(Ko);
        this.top = new BG(BB, !0, IB.topContainer), this.bottom = new BG(BB, !1, IB.bottomContainer), this.top.sync(this.panels.filter((BB => BB.top))), this.bottom.sync(this.panels.filter((BB => !BB.top)));
        for (let ZB of this.panels) ZB.dom.classList.add("cm-panel"), ZB.mount && ZB.mount()
      }
      update(BB) {
        let IB = BB.state.facet(Ko);
        this.top.container != IB.topContainer && (this.top.sync([]), this.top = new BG(BB.view, !0, IB.topContainer)), this.bottom.container != IB.bottomContainer && (this.bottom.sync([]), this.bottom = new BG(BB.view, !1, IB.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let ZB = BB.state.facet(ZG);
        if (ZB != this.input) {
          let IB = ZB.filter((BB => BB)),
            TB = [],
            JB = [],
            oB = [],
            GB = [];
          for (let ZB of IB) {
            let IB, vB = this.specs.indexOf(ZB);
            vB < 0 ? (IB = ZB(BB.view), GB.push(IB)) : (IB = this.panels[vB], IB.update && IB.update(BB)), TB.push(IB), (IB.top ? JB : oB).push(IB)
          }
          this.specs = IB, this.panels = TB, this.top.sync(JB), this.bottom.sync(oB);
          for (let BB of GB) BB.dom.classList.add("cm-panel"), BB.mount && BB.mount()
        } else
          for (let TB of this.panels) TB.update && TB.update(BB)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: BB => OJ.scrollMargins.of((IB => {
        let ZB = IB.plugin(BB);
        return ZB && {
          top: ZB.top.scrollMargin(),
          bottom: ZB.bottom.scrollMargin()
        }
      }))
    });
    class BG {
      constructor(BB, IB, ZB) {
        this.view = BB, this.top = IB, this.container = ZB, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(BB) {
        for (let IB of this.panels) IB.destroy && BB.indexOf(IB) < 0 && IB.destroy();
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
        for (let IB of this.panels)
          if (IB.dom.parentNode == this.dom) {
            for (; BB != IB.dom;) BB = IG(BB);
            BB = BB.nextSibling
          } else this.dom.insertBefore(IB.dom, BB);
        for (; BB;) BB = IG(BB)
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

    function IG(BB) {
      let IB = BB.nextSibling;
      return BB.remove(), IB
    }
    const ZG = TB.t.define({
      enables: So
    });

    function TG(BB, IB) {
      let ZB, JB = new Promise((BB => ZB = BB)),
        oB = BB => function(BB, IB, ZB) {
          let TB = IB.content ? IB.content(BB, (() => GB(null))) : null;
          if (!TB) {
            if (TB = (0, hB.e)("form"), IB.input) {
              let BB = (0, hB.e)("input", IB.input);
              /^(text|password|number|email|tel|url)$/.test(BB.type) && BB.classList.add("cm-textfield"), BB.name || (BB.name = "input"), TB.appendChild((0, hB.e)("label", (IB.label || "") + ": ", BB))
            } else TB.appendChild(document.createTextNode(IB.label || ""));
            TB.appendChild(document.createTextNode(" ")), TB.appendChild((0, hB.e)("button", {
              class: "cm-button",
              type: "submit"
            }, IB.submitLabel || "OK"))
          }
          let JB = "FORM" == TB.nodeName ? [TB] : TB.querySelectorAll("form");
          for (let vB = 0; vB < JB.length; vB++) {
            let BB = JB[vB];
            BB.addEventListener("keydown", (IB => {
              27 == IB.keyCode ? (IB.preventDefault(), GB(null)) : 13 == IB.keyCode && (IB.preventDefault(), GB(BB))
            })), BB.addEventListener("submit", (IB => {
              IB.preventDefault(), GB(BB)
            }))
          }
          let oB = (0, hB.e)("div", TB, (0, hB.e)("button", {
            onclick: () => GB(null),
            "aria-label": BB.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          IB.class && (oB.className = IB.class);

          function GB(IB) {
            oB.contains(oB.ownerDocument.activeElement) && BB.focus(), ZB(IB)
          }
          return oB.classList.add("cm-dialog"), {
            dom: oB,
            top: IB.top,
            mount: () => {
              if (IB.focus) {
                let BB;
                BB = "string" == typeof IB.focus ? TB.querySelector(IB.focus) : TB.querySelector("input") || TB.querySelector("button"), BB && "select" in BB ? BB.select() : BB && "focus" in BB && BB.focus()
              }
            }
          }
        }(BB, IB, ZB);
      BB.state.field(JG, !1) ? BB.dispatch({
        effects: oG.of(oB)
      }) : BB.dispatch({
        effects: TB.K.appendConfig.of(JG.init((() => [oB])))
      });
      let GB = GG.of(oB);
      return {
        close: GB,
        result: JB.then((IB => ((BB.win.queueMicrotask || (IB => BB.win.setTimeout(IB, 10)))((() => {
          BB.state.field(JG).indexOf(oB) > -1 && BB.dispatch({
            effects: GB
          })
        })), IB)))
      }
    }
    const JG = TB.L.define({
        create: () => [],
        update(BB, IB) {
          for (let ZB of IB.effects) ZB.is(oG) ? BB = [ZB.value].concat(BB) : ZB.is(GG) && (BB = BB.filter((BB => BB != ZB.value)));
          return BB
        },
        provide: BB => ZG.computeN([BB], (IB => IB.field(BB)))
      }),
      oG = TB.K.define(),
      GG = TB.K.define();
    class vG extends TB.J {
      compare(BB) {
        return this == BB || this.constructor == BB.constructor && this.eq(BB)
      }
      eq(BB) {
        return !1
      }
      destroy(BB) {}
    }
    vG.prototype.elementClass = "", vG.prototype.toDOM = void 0, vG.prototype.mapMode = TB.w.TrackBefore, vG.prototype.startSide = vG.prototype.endSide = -1, vG.prototype.point = !0;
    const kG = TB.t.define(),
      cG = TB.t.define(),
      nG = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => TB.F.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      hG = TB.t.define();

    function zG(BB) {
      return [NG(), hG.of({
        ...nG,
        ...BB
      })]
    }
    const FG = TB.t.define({
      combine: BB => BB.some((BB => BB))
    });

    function NG(BB) {
      let IB = [gG];
      return BB && !1 === BB.fixed && IB.push(FG.of(!0)), IB
    }
    const gG = DI.fromClass(class {
      constructor(BB) {
        this.view = BB, this.domAfter = null, this.prevViewport = BB.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = BB.state.facet(hG).map((IB => new WG(BB, IB))), this.fixed = !BB.state.facet(FG);
        for (let IB of this.gutters) "after" == IB.config.side ? this.getDOMAfter().appendChild(IB.dom) : this.dom.appendChild(IB.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), BB.scrollDOM.insertBefore(this.dom, BB.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(BB) {
        if (this.updateGutters(BB)) {
          let IB = this.prevViewport,
            ZB = BB.view.viewport,
            TB = Math.min(IB.to, ZB.to) - Math.max(IB.from, ZB.from);
          this.syncGutters(TB < .8 * (ZB.to - ZB.from))
        }
        if (BB.geometryChanged) {
          let BB = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = BB, this.domAfter && (this.domAfter.style.minHeight = BB)
        }
        this.view.state.facet(FG) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = BB.view.viewport
      }
      syncGutters(BB) {
        let IB = this.dom.nextSibling;
        BB && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let ZB = TB.F.iter(this.view.state.facet(kG), this.view.viewport.from),
          JB = [],
          oB = this.gutters.map((BB => new UG(BB, this.view.viewport, -this.view.documentPadding.top)));
        for (let TB of this.view.viewportLineBlocks)
          if (JB.length && (JB = []), Array.isArray(TB.type)) {
            let BB = !0;
            for (let IB of TB.type)
              if (IB.type == HB.Text && BB) {
                yG(ZB, JB, IB.from);
                for (let BB of oB) BB.line(this.view, IB, JB);
                BB = !1
              } else if (IB.widget)
              for (let BB of oB) BB.widget(this.view, IB)
          } else if (TB.type == HB.Text) {
          yG(ZB, JB, TB.from);
          for (let BB of oB) BB.line(this.view, TB, JB)
        } else if (TB.widget)
          for (let BB of oB) BB.widget(this.view, TB);
        for (let TB of oB) TB.finish();
        BB && (this.view.scrollDOM.insertBefore(this.dom, IB), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(BB) {
        let IB = BB.startState.facet(hG),
          ZB = BB.state.facet(hG),
          JB = BB.docChanged || BB.heightChanged || BB.viewportChanged || !TB.F.eq(BB.startState.facet(kG), BB.state.facet(kG), BB.view.viewport.from, BB.view.viewport.to);
        if (IB == ZB)
          for (let TB of this.gutters) TB.update(BB) && (JB = !0);
        else {
          JB = !0;
          let TB = [];
          for (let JB of ZB) {
            let ZB = IB.indexOf(JB);
            ZB < 0 ? TB.push(new WG(this.view, JB)) : (this.gutters[ZB].update(BB), TB.push(this.gutters[ZB]))
          }
          for (let BB of this.gutters) BB.dom.remove(), TB.indexOf(BB) < 0 && BB.destroy();
          for (let BB of TB) "after" == BB.config.side ? this.getDOMAfter().appendChild(BB.dom) : this.dom.appendChild(BB.dom);
          this.gutters = TB
        }
        return JB
      }
      destroy() {
        for (let BB of this.gutters) BB.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: BB => OJ.scrollMargins.of((IB => {
        let ZB = IB.plugin(BB);
        if (!ZB || 0 == ZB.gutters.length || !ZB.fixed) return null;
        let TB = ZB.dom.offsetWidth * IB.scaleX,
          JB = ZB.domAfter ? ZB.domAfter.offsetWidth * IB.scaleX : 0;
        return IB.textDirection == cI.LTR ? {
          left: TB,
          right: JB
        } : {
          right: TB,
          left: JB
        }
      }))
    });

    function qG(BB) {
      return Array.isArray(BB) ? BB : [BB]
    }

    function yG(BB, IB, ZB) {
      for (; BB.value && BB.from <= ZB;) BB.from == ZB && IB.push(BB.value), BB.next()
    }
    class UG {
      constructor(BB, IB, ZB) {
        this.gutter = BB, this.height = ZB, this.i = 0, this.cursor = TB.F.iter(BB.markers, IB.from)
      }
      addElement(BB, IB, ZB) {
        let {
          gutter: TB
        } = this, JB = (IB.top - this.height) / BB.scaleY, oB = IB.height / BB.scaleY;
        if (this.i == TB.elements.length) {
          let IB = new dG(BB, oB, JB, ZB);
          TB.elements.push(IB), TB.dom.appendChild(IB.dom)
        } else TB.elements[this.i].update(BB, oB, JB, ZB);
        this.height = IB.bottom, this.i++
      }
      line(BB, IB, ZB) {
        let TB = [];
        yG(this.cursor, TB, IB.from), ZB.length && (TB = TB.concat(ZB));
        let JB = this.gutter.config.lineMarker(BB, IB, TB);
        JB && TB.unshift(JB);
        let oB = this.gutter;
        (0 != TB.length || oB.config.renderEmptyElements) && this.addElement(BB, IB, TB)
      }
      widget(BB, IB) {
        let ZB = this.gutter.config.widgetMarker(BB, IB.widget, IB),
          TB = ZB ? [ZB] : null;
        for (let JB of BB.state.facet(cG)) {
          let ZB = JB(BB, IB.widget, IB);
          ZB && (TB || (TB = [])).push(ZB)
        }
        TB && this.addElement(BB, IB, TB)
      }
      finish() {
        let BB = this.gutter;
        for (; BB.elements.length > this.i;) {
          let IB = BB.elements.pop();
          BB.dom.removeChild(IB.dom), IB.destroy()
        }
      }
    }
    class WG {
      constructor(BB, IB) {
        this.view = BB, this.config = IB, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let ZB in IB.domEventHandlers) this.dom.addEventListener(ZB, (TB => {
          let JB, oB = TB.target;
          if (oB != this.dom && this.dom.contains(oB)) {
            for (; oB.parentNode != this.dom;) oB = oB.parentNode;
            let BB = oB.getBoundingClientRect();
            JB = (BB.top + BB.bottom) / 2
          } else JB = TB.clientY;
          let GB = BB.lineBlockAtHeight(JB - BB.documentTop);
          IB.domEventHandlers[ZB](BB, GB, TB) && TB.preventDefault()
        }));
        this.markers = qG(IB.markers(BB)), IB.initialSpacer && (this.spacer = new dG(BB, 0, 0, [IB.initialSpacer(BB)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(BB) {
        let IB = this.markers;
        if (this.markers = qG(this.config.markers(BB.view)), this.spacer && this.config.updateSpacer) {
          let IB = this.config.updateSpacer(this.spacer.markers[0], BB);
          IB != this.spacer.markers[0] && this.spacer.update(BB.view, 0, 0, [IB])
        }
        let ZB = BB.view.viewport;
        return !TB.F.eq(this.markers, IB, ZB.from, ZB.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(BB)
      }
      destroy() {
        for (let BB of this.elements) BB.destroy()
      }
    }
    class dG {
      constructor(BB, IB, ZB, TB) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(BB, IB, ZB, TB)
      }
      update(BB, IB, ZB, TB) {
        this.height != IB && (this.height = IB, this.dom.style.height = IB + "px"), this.above != ZB && (this.dom.style.marginTop = (this.above = ZB) ? ZB + "px" : ""),
          function(BB, IB) {
            if (BB.length != IB.length) return !1;
            for (let ZB = 0; ZB < BB.length; ZB++)
              if (!BB[ZB].compare(IB[ZB])) return !1;
            return !0
          }(this.markers, TB) || this.setMarkers(BB, TB)
      }
      setMarkers(BB, IB) {
        let ZB = "cm-gutterElement",
          TB = this.dom.firstChild;
        for (let JB = 0, oB = 0;;) {
          let GB = oB,
            vB = JB < IB.length ? IB[JB++] : null,
            kB = !1;
          if (vB) {
            let BB = vB.elementClass;
            BB && (ZB += " " + BB);
            for (let IB = oB; IB < this.markers.length; IB++)
              if (this.markers[IB].compare(vB)) {
                GB = IB, kB = !0;
                break
              }
          } else GB = this.markers.length;
          for (; oB < GB;) {
            let BB = this.markers[oB++];
            if (BB.toDOM) {
              BB.destroy(TB);
              let IB = TB.nextSibling;
              TB.remove(), TB = IB
            }
          }
          if (!vB) break;
          vB.toDOM && (kB ? TB = TB.nextSibling : this.dom.insertBefore(vB.toDOM(BB), TB)), kB && oB++
        }
        this.dom.className = ZB, this.markers = IB
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const CG = TB.t.define(),
      QG = TB.t.define(),
      sG = TB.t.define({
        combine: BB => (0, TB.T)(BB, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(BB, IB) {
            let ZB = Object.assign({}, BB);
            for (let TB in IB) {
              let BB = ZB[TB],
                JB = IB[TB];
              ZB[TB] = BB ? (IB, ZB, TB) => BB(IB, ZB, TB) || JB(IB, ZB, TB) : JB
            }
            return ZB
          }
        })
      });
    class wG extends vG {
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

    function OG(BB, IB) {
      return BB.state.facet(sG).formatNumber(IB, BB.state)
    }
    const YG = hG.compute([sG], (BB => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: BB => BB.state.facet(CG),
      lineMarker: (BB, IB, ZB) => ZB.some((BB => BB.toDOM)) ? null : new wG(OG(BB, BB.state.doc.lineAt(IB.from).number)),
      widgetMarker: (BB, IB, ZB) => {
        for (let TB of BB.state.facet(QG)) {
          let JB = TB(BB, IB, ZB);
          if (JB) return JB
        }
        return null
      },
      lineMarkerChange: BB => BB.startState.facet(sG) != BB.state.facet(sG),
      initialSpacer: BB => new wG(OG(BB, pG(BB.state.doc.lines))),
      updateSpacer(BB, IB) {
        let ZB = OG(IB.view, pG(IB.view.state.doc.lines));
        return ZB == BB.number ? BB : new wG(ZB)
      },
      domEventHandlers: BB.facet(sG).domEventHandlers,
      side: "before"
    })));

    function iG() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [sG.of(BB), NG(), YG]
    }

    function pG(BB) {
      let IB = 9;
      for (; IB < BB;) IB = 10 * IB + 9;
      return IB
    }
    const aG = new class extends vG {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      HG = kG.compute(["selection"], (BB => {
        let IB = [],
          ZB = -1;
        for (let TB of BB.selection.vq) {
          let JB = BB.doc.lineAt(TB.head).from;
          JB > ZB && (ZB = JB, IB.push(aG.range(JB)))
        }
        return TB.F.of(IB)
      }));

    function MG() {
      return HG
    }
  },
  41374: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB,
      e: () => FB,
      i: () => GB,
      j: () => nB,
      n: () => cB,
      r: () => jB,
      t: () => RB,
      u: () => PB,
      v: () => NB
    });
    const TB = 1024;
    let JB = 0;
    class oB {
      constructor(BB, IB) {
        this.from = BB, this.to = IB
      }
    }
    class GB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = JB++, this.perNode = !!BB.perNode, this.deserialize = BB.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = BB.combine || null
      }
      add(BB) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof BB && (BB = cB.match(BB)), IB => {
          let ZB = BB(IB);
          return void 0 === ZB ? null : [this, ZB]
        }
      }
    }
    GB.closedBy = new GB({
      deserialize: BB => BB.split(" ")
    }), GB.openedBy = new GB({
      deserialize: BB => BB.split(" ")
    }), GB.group = new GB({
      deserialize: BB => BB.split(" ")
    }), GB.isolate = new GB({
      deserialize: BB => {
        if (BB && "rtl" != BB && "ltr" != BB && "auto" != BB) throw new RangeError("Invalid value for isolate: " + BB);
        return BB || "auto"
      }
    }), GB.contextHash = new GB({
      perNode: !0
    }), GB.lookAhead = new GB({
      perNode: !0
    }), GB.mounted = new GB({
      perNode: !0
    });
    class vB {
      constructor(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = BB, this.overlay = IB, this.parser = ZB, this.bracketed = TB
      }
      static get(BB) {
        return BB && BB.props && BB.props[GB.mounted.id]
      }
    }
    const kB = Object.create(null);
    class cB {
      constructor(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = BB, this.props = IB, this.id = ZB, this.flags = TB
      }
      static define(BB) {
        let IB = BB.props && BB.props.length ? Object.create(null) : kB,
          ZB = (BB.top ? 1 : 0) | (BB.skipped ? 2 : 0) | (BB.error ? 4 : 0) | (null == BB.name ? 8 : 0),
          TB = new cB(BB.name || "", IB, BB.id, ZB);
        if (BB.props)
          for (let JB of BB.props)
            if (Array.isArray(JB) || (JB = JB(TB)), JB) {
              if (JB[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              IB[JB[0].id] = JB[1]
            } return TB
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
          let IB = this.prop(GB.group);
          return !!IB && IB.indexOf(BB) > -1
        }
        return this.id == BB
      }
      static match(BB) {
        let IB = Object.create(null);
        for (let ZB in BB)
          for (let TB of ZB.split(" ")) IB[TB] = BB[ZB];
        return BB => {
          for (let ZB = BB.prop(GB.group), TB = -1; TB < (ZB ? ZB.length : 0); TB++) {
            let JB = IB[TB < 0 ? BB.name : ZB[TB]];
            if (JB) return JB
          }
        }
      }
    }
    cB.none = new cB("", Object.create(null), 0, 8);
    class nB {
      constructor(BB) {
        this.types = BB;
        for (let IB = 0; IB < BB.length; IB++)
          if (BB[IB].id != IB) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let BB = [];
        for (var IB = arguments.length, ZB = new Array(IB), TB = 0; TB < IB; TB++) ZB[TB] = arguments[TB];
        for (let JB of this.types) {
          let IB = null;
          for (let BB of ZB) {
            let ZB = BB(JB);
            if (ZB) {
              IB || (IB = Object.assign({}, JB.props));
              let BB = ZB[1],
                TB = ZB[0];
              TB.combine && TB.id in IB && (BB = TB.combine(IB[TB.id], BB)), IB[TB.id] = BB
            }
          }
          BB.push(IB ? new cB(JB.name, IB, JB.id, JB.flags) : JB)
        }
        return new nB(BB)
      }
    }
    const hB = new WeakMap,
      zB = new WeakMap;
    var FB;
    ! function(BB) {
      BB[BB.ExcludeBuffers = 1] = "ExcludeBuffers", BB[BB.IncludeAnonymous = 2] = "IncludeAnonymous", BB[BB.IgnoreMounts = 4] = "IgnoreMounts", BB[BB.IgnoreOverlays = 8] = "IgnoreOverlays", BB[BB.EnterBracketed = 16] = "EnterBracketed"
    }(FB || (FB = {}));
    class NB {
      constructor(BB, IB, ZB, TB, JB) {
        if (this.type = BB, this.children = IB, this.positions = ZB, this.length = TB, this.props = null, JB && JB.length) {
          this.props = Object.create(null);
          for (let [BB, IB] of JB) this.props["number" == typeof BB ? BB : BB.id] = IB
        }
      }
      toString() {
        let BB = vB.get(this);
        if (BB && !BB.overlay) return BB.tree.toString();
        let IB = "";
        for (let ZB of this.children) {
          let BB = ZB.toString();
          BB && (IB && (IB += ","), IB += BB)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (IB.length ? "(" + IB + ")" : "") : IB
      }
      cursor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new iB(this.topNode, BB)
      }
      cursorAt(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZB = hB.get(this) || this.topNode,
          TB = new iB(ZB);
        return TB.moveTo(BB, IB), hB.set(this, TB._tree), TB
      }
      get topNode() {
        return new dB(this, 0, 0, null)
      }
      resolve(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZB = UB(hB.get(this) || this.topNode, BB, IB, !1);
        return hB.set(this, ZB), ZB
      }
      resolveInner(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZB = UB(zB.get(this) || this.topNode, BB, IB, !0);
        return zB.set(this, ZB), ZB
      }
      resolveStack(BB) {
        return function(BB, IB, ZB) {
          let TB = BB.resolveInner(IB, ZB),
            JB = null;
          for (let oB = TB instanceof dB ? TB : TB.context.parent; oB; oB = oB.parent)
            if (oB.index < 0) {
              let BB = oB.parent;
              (JB || (JB = [TB])).push(BB.resolve(IB, ZB)), oB = BB
            } else {
              let BB = vB.get(oB.tree);
              if (BB && BB.overlay && BB.overlay[0].from <= IB && BB.overlay[BB.overlay.length - 1].to >= IB) {
                let GB = new dB(BB.tree, BB.overlay[0].from + oB.from, -1, oB);
                (JB || (JB = [TB])).push(UB(GB, IB, ZB, !1))
              }
            } return JB ? OB(JB) : TB
        }(this, BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(BB) {
        let {
          enter: IB,
          leave: ZB,
          from: TB = 0,
          to: JB = this.length
        } = BB, oB = BB.mode || 0, GB = (oB & FB.IncludeAnonymous) > 0;
        for (let vB = this.cursor(oB | FB.IncludeAnonymous);;) {
          let BB = !1;
          if (vB.from <= JB && vB.to >= TB && (!GB && vB.type.isAnonymous || !1 !== IB(vB))) {
            if (vB.firstChild()) continue;
            BB = !0
          }
          for (; BB && ZB && (GB || !vB.type.isAnonymous) && ZB(vB), !vB.nextSibling();) {
            if (!vB.parent()) return;
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
          for (let IB in this.props) BB.push([+IB, this.props[IB]]);
        return BB
      }
      balance() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : MB(cB.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((BB, IB, ZB) => new NB(this.type, BB, IB, ZB, this.propValues)), BB.makeTree || ((BB, IB, ZB) => new NB(cB.none, BB, IB, ZB)))
      }
      static build(BB) {
        return function(BB) {
          var IB;
          let {
            buffer: ZB,
            nodeSet: JB,
            maxBufferLength: oB = TB,
            reused: vB = [],
            minRepeatType: kB = JB.types.length
          } = BB, cB = Array.isArray(ZB) ? new gB(ZB, ZB.length) : ZB, nB = JB.types, hB = 0, zB = 0;

          function FB(BB, IB, ZB, TB, GB, NB) {
            let {
              id: gB,
              start: sB,
              end: wB,
              size: OB
            } = cB, YB = zB, iB = hB;
            if (OB < 0) {
              if (cB.next(), -1 == OB) {
                let IB = vB[gB];
                return ZB.push(IB), void TB.push(sB - BB)
              }
              if (-3 == OB) return void(hB = gB);
              if (-4 == OB) return void(zB = gB);
              throw new RangeError(`Unrecognized record size: ${OB}`)
            }
            let pB, aB, HB = nB[gB],
              jB = sB - BB;
            if (wB - sB <= oB && (aB = CB(cB.pos - IB, GB))) {
              let IB = new Uint16Array(aB.size - aB.skip),
                ZB = cB.pos - aB.size,
                TB = IB.length;
              for (; cB.pos > ZB;) TB = QB(aB.start, IB, TB);
              pB = new qB(IB, wB - aB.start, JB), jB = aB.start - BB
            } else {
              let BB = cB.pos - OB;
              cB.next();
              let IB = [],
                ZB = [],
                TB = gB >= kB ? gB : -1,
                JB = 0,
                GB = wB;
              for (; cB.pos > BB;) TB >= 0 && cB.id == TB && cB.size >= 0 ? (cB.end <= GB - oB && (WB(IB, ZB, sB, JB, cB.end, GB, TB, YB, iB), JB = IB.length, GB = cB.end), cB.next()) : NB > 2500 ? yB(sB, BB, IB, ZB) : FB(sB, BB, IB, ZB, TB, NB + 1);
              if (TB >= 0 && JB > 0 && JB < IB.length && WB(IB, ZB, sB, JB, sB, GB, TB, YB, iB), IB.reverse(), ZB.reverse(), TB > -1 && JB > 0) {
                let BB = UB(HB, iB);
                pB = MB(HB, IB, ZB, 0, IB.length, 0, wB - sB, BB, BB)
              } else pB = dB(HB, IB, ZB, wB - sB, YB - wB, iB)
            }
            ZB.push(pB), TB.push(jB)
          }

          function yB(BB, IB, ZB, TB) {
            let GB = [],
              vB = 0,
              kB = -1;
            for (; cB.pos > IB;) {
              let {
                id: BB,
                start: IB,
                end: ZB,
                size: TB
              } = cB;
              if (TB > 4) cB.next();
              else {
                if (kB > -1 && IB < kB) break;
                kB < 0 && (kB = ZB - oB), GB.push(BB, IB, ZB), vB++, cB.next()
              }
            }
            if (vB) {
              let IB = new Uint16Array(4 * vB),
                oB = GB[GB.length - 2];
              for (let BB = GB.length - 3, ZB = 0; BB >= 0; BB -= 3) IB[ZB++] = GB[BB], IB[ZB++] = GB[BB + 1] - oB, IB[ZB++] = GB[BB + 2] - oB, IB[ZB++] = ZB;
              ZB.push(new qB(IB, GB[2] - oB, JB)), TB.push(oB - BB)
            }
          }

          function UB(BB, IB) {
            return (ZB, TB, JB) => {
              let oB, vB, kB = 0,
                cB = ZB.length - 1;
              if (cB >= 0 && (oB = ZB[cB]) instanceof NB) {
                if (!cB && oB.type == BB && oB.length == JB) return oB;
                (vB = oB.prop(GB.lookAhead)) && (kB = TB[cB] + oB.length + vB)
              }
              return dB(BB, ZB, TB, JB, kB, IB)
            }
          }

          function WB(BB, IB, ZB, TB, oB, GB, vB, kB, cB) {
            let nB = [],
              hB = [];
            for (; BB.length > TB;) nB.push(BB.pop()), hB.push(IB.pop() + ZB - oB);
            BB.push(dB(JB.types[vB], nB, hB, GB - oB, kB - GB, cB)), IB.push(oB - ZB)
          }

          function dB(BB, IB, ZB, TB, JB, oB, vB) {
            if (oB) {
              let BB = [GB.contextHash, oB];
              vB = vB ? [BB].concat(vB) : [BB]
            }
            if (JB > 25) {
              let BB = [GB.lookAhead, JB];
              vB = vB ? [BB].concat(vB) : [BB]
            }
            return new NB(BB, IB, ZB, TB, vB)
          }

          function CB(BB, IB) {
            let ZB = cB.fork(),
              TB = 0,
              JB = 0,
              GB = 0,
              vB = ZB.end - oB,
              nB = {
                size: 0,
                start: 0,
                skip: 0
              };
            BB: for (let oB = ZB.pos - BB; ZB.pos > oB;) {
              let BB = ZB.size;
              if (ZB.id == IB && BB >= 0) {
                nB.size = TB, nB.start = JB, nB.skip = GB, GB += 4, TB += 4, ZB.next();
                continue
              }
              let cB = ZB.pos - BB;
              if (BB < 0 || cB < oB || ZB.start < vB) break;
              let hB = ZB.id >= kB ? 4 : 0,
                zB = ZB.start;
              for (ZB.next(); ZB.pos > cB;) {
                if (ZB.size < 0) {
                  if (-3 != ZB.size && -4 != ZB.size) break BB;
                  hB += 4
                } else ZB.id >= kB && (hB += 4);
                ZB.next()
              }
              JB = zB, TB += BB, GB += hB
            }
            return (IB < 0 || TB == BB) && (nB.size = TB, nB.start = JB, nB.skip = GB), nB.size > 4 ? nB : void 0
          }

          function QB(BB, IB, ZB) {
            let {
              id: TB,
              start: JB,
              end: oB,
              size: GB
            } = cB;
            if (cB.next(), GB >= 0 && TB < kB) {
              let vB = ZB;
              if (GB > 4) {
                let TB = cB.pos - (GB - 4);
                for (; cB.pos > TB;) ZB = QB(BB, IB, ZB)
              }
              IB[--ZB] = vB, IB[--ZB] = oB - BB, IB[--ZB] = JB - BB, IB[--ZB] = TB
            } else - 3 == GB ? hB = TB : -4 == GB && (zB = TB);
            return ZB
          }
          let sB = [],
            wB = [];
          for (; cB.pos > 0;) FB(BB.start || 0, BB.bufferStart || 0, sB, wB, -1, 0);
          let OB = null !== (IB = BB.length) && void 0 !== IB ? IB : sB.length ? wB[0] + sB[0].length : 0;
          return new NB(nB[BB.topID], sB.reverse(), wB.reverse(), OB)
        }(BB)
      }
    }
    NB.empty = new NB(cB.none, [], [], 0);
    class gB {
      constructor(BB, IB) {
        this.buffer = BB, this.index = IB
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
        return new gB(this.buffer, this.index)
      }
    }
    class qB {
      constructor(BB, IB, ZB) {
        this.buffer = BB, this.length = IB, this.set = ZB
      }
      get type() {
        return cB.none
      }
      toString() {
        let BB = [];
        for (let IB = 0; IB < this.buffer.length;) BB.push(this.childString(IB)), IB = this.buffer[IB + 3];
        return BB.join(",")
      }
      childString(BB) {
        let IB = this.buffer[BB],
          ZB = this.buffer[BB + 3],
          TB = this.set.types[IB],
          JB = TB.name;
        if (/\W/.test(JB) && !TB.isError && (JB = JSON.stringify(JB)), ZB == (BB += 4)) return JB;
        let oB = [];
        for (; BB < ZB;) oB.push(this.childString(BB)), BB = this.buffer[BB + 3];
        return JB + "(" + oB.join(",") + ")"
      }
      findChild(BB, IB, ZB, TB, JB) {
        let {
          buffer: oB
        } = this, GB = -1;
        for (let vB = BB; vB != IB && !(yB(JB, TB, oB[vB + 1], oB[vB + 2]) && (GB = vB, ZB > 0)); vB = oB[vB + 3]);
        return GB
      }
      slice(BB, IB, ZB) {
        let TB = this.buffer,
          JB = new Uint16Array(IB - BB),
          oB = 0;
        for (let GB = BB, vB = 0; GB < IB;) {
          JB[vB++] = TB[GB++], JB[vB++] = TB[GB++] - ZB;
          let IB = JB[vB++] = TB[GB++] - ZB;
          JB[vB++] = TB[GB++] - BB, oB = Math.max(oB, IB)
        }
        return new qB(JB, oB, this.set)
      }
    }

    function yB(BB, IB, ZB, TB) {
      switch (BB) {
        case -2:
          return ZB < IB;
        case -1:
          return TB >= IB && ZB < IB;
        case 0:
          return ZB < IB && TB > IB;
        case 1:
          return ZB <= IB && TB > IB;
        case 2:
          return TB > IB;
        case 4:
          return !0
      }
    }

    function UB(BB, IB, ZB, TB) {
      for (var JB; BB.from == BB.to || (ZB < 1 ? BB.from >= IB : BB.from > IB) || (ZB > -1 ? BB.to <= IB : BB.to < IB);) {
        let IB = !TB && BB instanceof dB && BB.index < 0 ? null : BB.parent;
        if (!IB) return BB;
        BB = IB
      }
      let oB = TB ? 0 : FB.IgnoreOverlays;
      if (TB)
        for (let GB = BB, vB = GB.parent; vB; GB = vB, vB = GB.parent) GB instanceof dB && GB.index < 0 && (null === (JB = vB.enter(IB, ZB, oB)) || void 0 === JB ? void 0 : JB.from) != GB.from && (BB = vB);
      for (;;) {
        let TB = BB.enter(IB, ZB, oB);
        if (!TB) return BB;
        BB = TB
      }
    }
    class WB {
      cursor() {
        return new iB(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(BB) {
        let IB = CB(this, BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return IB.length ? IB[0] : null
      }
      getChildren(BB) {
        return CB(this, BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(BB) {
        return UB(this, BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(BB) {
        return UB(this, BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(BB) {
        return QB(this.parent, BB)
      }
      enterUnfinishedNodesBefore(BB) {
        let IB = this.childBefore(BB),
          ZB = this;
        for (; IB;) {
          let BB = IB.lastChild;
          if (!BB || BB.to != IB.to) break;
          BB.type.isError && BB.from == BB.to ? (ZB = IB, IB = BB.prevSibling) : IB = BB
        }
        return ZB
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class dB extends WB {
      constructor(BB, IB, ZB, TB) {
        super(), this._tree = BB, this.from = IB, this.index = ZB, this._parent = TB
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
      nextChild(BB, IB, ZB, TB) {
        let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let oB = this;;) {
          for (let {
              children: GB,
              positions: kB
            } = oB._tree, cB = IB > 0 ? GB.length : -1; BB != cB; BB += IB) {
            let cB, nB = GB[BB],
              hB = kB[BB] + oB.from;
            if (JB & FB.EnterBracketed && nB instanceof NB && (cB = vB.get(nB)) && !cB.overlay && cB.bracketed && ZB >= hB && ZB <= hB + nB.length || yB(TB, ZB, hB, hB + nB.length))
              if (nB instanceof qB) {
                if (JB & FB.ExcludeBuffers) continue;
                let GB = nB.findChild(0, nB.buffer.length, IB, ZB - hB, TB);
                if (GB > -1) return new wB(new sB(oB, nB, BB, hB), null, GB)
              } else if (JB & FB.IncludeAnonymous || !nB.type.isAnonymous || pB(nB)) {
              let GB;
              if (!(JB & FB.IgnoreMounts) && (GB = vB.get(nB)) && !GB.overlay) return new dB(GB.tree, hB, BB, oB);
              let kB = new dB(nB, hB, BB, oB);
              return JB & FB.IncludeAnonymous || !kB.type.isAnonymous ? kB : kB.nextChild(IB < 0 ? nB.children.length - 1 : 0, IB, ZB, TB, JB)
            }
          }
          if (JB & FB.IncludeAnonymous || !oB.type.isAnonymous) return null;
          if (BB = oB.index >= 0 ? oB.index + IB : IB < 0 ? -1 : oB._parent._tree.children.length, oB = oB._parent, !oB) return null
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
      enter(BB, IB) {
        let ZB, TB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(TB & FB.IgnoreOverlays) && (ZB = vB.get(this._tree)) && ZB.overlay) {
          let JB = BB - this.from,
            oB = TB & FB.EnterBracketed && ZB.bracketed;
          for (let {
              from: BB,
              to: TB
            }
            of ZB.overlay)
            if ((IB > 0 || oB ? BB <= JB : BB < JB) && (IB < 0 || oB ? TB >= JB : TB > JB)) return new dB(ZB.tree, ZB.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, BB, IB, TB)
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

    function CB(BB, IB, ZB, TB) {
      let JB = BB.cursor(),
        oB = [];
      if (!JB.firstChild()) return oB;
      if (null != ZB)
        for (let GB = !1; !GB;)
          if (GB = JB.type.is(ZB), !JB.nextSibling()) return oB;
      for (;;) {
        if (null != TB && JB.type.is(TB)) return oB;
        if (JB.type.is(IB) && oB.push(JB.node), !JB.nextSibling()) return null == TB ? oB : []
      }
    }

    function QB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : IB.length - 1;
      for (let TB = BB; ZB >= 0; TB = TB.parent) {
        if (!TB) return !1;
        if (!TB.type.isAnonymous) {
          if (IB[ZB] && IB[ZB] != TB.name) return !1;
          ZB--
        }
      }
      return !0
    }
    class sB {
      constructor(BB, IB, ZB, TB) {
        this.parent = BB, this.buffer = IB, this.index = ZB, this.start = TB
      }
    }
    class wB extends WB {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(BB, IB, ZB) {
        super(), this.context = BB, this._parent = IB, this.index = ZB, this.type = BB.buffer.set.types[BB.buffer.buffer[ZB]]
      }
      child(BB, IB, ZB) {
        let {
          buffer: TB
        } = this.context, JB = TB.findChild(this.index + 4, TB.buffer[this.index + 3], BB, IB - this.context.start, ZB);
        return JB < 0 ? null : new wB(this.context, this, JB)
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
      enter(BB, IB) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & FB.ExcludeBuffers) return null;
        let {
          buffer: ZB
        } = this.context, TB = ZB.findChild(this.index + 4, ZB.buffer[this.index + 3], IB > 0 ? 1 : -1, BB - this.context.start, IB);
        return TB < 0 ? null : new wB(this.context, this, TB)
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
        } = this.context, IB = BB.buffer[this.index + 3];
        return IB < (this._parent ? BB.buffer[this._parent.index + 3] : BB.buffer.length) ? new wB(this.context, this._parent, IB) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: BB
        } = this.context, IB = this._parent ? this._parent.index + 4 : 0;
        return this.index == IB ? this.externalSibling(-1) : new wB(this.context, this._parent, BB.findChild(IB, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let BB = [],
          IB = [],
          {
            buffer: ZB
          } = this.context,
          TB = this.index + 4,
          JB = ZB.buffer[this.index + 3];
        if (JB > TB) {
          let oB = ZB.buffer[this.index + 1];
          BB.push(ZB.slice(TB, JB, oB)), IB.push(0)
        }
        return new NB(this.type, BB, IB, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function OB(BB) {
      if (!BB.length) return null;
      let IB = 0,
        ZB = BB[0];
      for (let oB = 1; oB < BB.length; oB++) {
        let TB = BB[oB];
        (TB.from > ZB.from || TB.to < ZB.to) && (ZB = TB, IB = oB)
      }
      let TB = ZB instanceof dB && ZB.index < 0 ? null : ZB.parent,
        JB = BB.slice();
      return TB ? JB[IB] = TB : JB.splice(IB, 1), new YB(JB, ZB)
    }
    class YB {
      constructor(BB, IB) {
        this.heads = BB, this.node = IB
      }
      get next() {
        return OB(this.heads)
      }
    }
    class iB {
      get name() {
        return this.type.name
      }
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = IB & ~FB.EnterBracketed, BB instanceof dB) this.yieldNode(BB);
        else {
          this._tree = BB.context.parent, this.buffer = BB.context;
          for (let IB = BB._parent; IB; IB = IB._parent) this.stack.unshift(IB.index);
          this.bufferNode = BB, this.yieldBuf(BB.index)
        }
      }
      yieldNode(BB) {
        return !!BB && (this._tree = BB, this.type = BB.type, this.from = BB.from, this.to = BB.to, !0)
      }
      yieldBuf(BB, IB) {
        this.index = BB;
        let {
          start: ZB,
          buffer: TB
        } = this.buffer;
        return this.type = IB || TB.set.types[TB.buffer[BB]], this.from = ZB + TB.buffer[BB + 1], this.to = ZB + TB.buffer[BB + 2], !0
      }
      yield(BB) {
        return !!BB && (BB instanceof dB ? (this.buffer = null, this.yieldNode(BB)) : (this.buffer = BB.context, this.yieldBuf(BB.index, BB.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(BB, IB, ZB) {
        if (!this.buffer) return this.yield(this._tree.nextChild(BB < 0 ? this._tree._tree.children.length - 1 : 0, BB, IB, ZB, this.mode));
        let {
          buffer: TB
        } = this.buffer, JB = TB.findChild(this.index + 4, TB.buffer[this.index + 3], BB, IB - this.buffer.start, ZB);
        return !(JB < 0) && (this.stack.push(this.index), this.yieldBuf(JB))
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
      enter(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(ZB & FB.ExcludeBuffers) && this.enterChild(1, BB, IB) : this.yield(this._tree.enter(BB, IB, ZB))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & FB.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let BB = this.mode & FB.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(BB)
      }
      sibling(BB) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + BB, BB, 0, 4, this.mode));
        let {
          buffer: IB
        } = this.buffer, ZB = this.stack.length - 1;
        if (BB < 0) {
          let BB = ZB < 0 ? 0 : this.stack[ZB] + 4;
          if (this.index != BB) return this.yieldBuf(IB.findChild(BB, this.index, -1, 0, 4))
        } else {
          let BB = IB.buffer[this.index + 3];
          if (BB < (ZB < 0 ? IB.buffer.length : IB.buffer[this.stack[ZB] + 3])) return this.yieldBuf(BB)
        }
        return ZB < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + BB, BB, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(BB) {
        let IB, ZB, {
          buffer: TB
        } = this;
        if (TB) {
          if (BB > 0) {
            if (this.index < TB.buffer.buffer.length) return !1
          } else
            for (let BB = 0; BB < this.index; BB++)
              if (TB.buffer.buffer[BB + 3] < this.index) return !1;
          ({
            index: IB,
            parent: ZB
          } = TB)
        } else({
          index: IB,
          _parent: ZB
        } = this._tree);
        for (; ZB;
          ({
            index: IB,
            _parent: ZB
          } = ZB))
          if (IB > -1)
            for (let TB = IB + BB, JB = BB < 0 ? -1 : ZB._tree.children.length; TB != JB; TB += BB) {
              let BB = ZB._tree.children[TB];
              if (this.mode & FB.IncludeAnonymous || BB instanceof qB || !BB.type.isAnonymous || pB(BB)) return !1
            }
        return !0
      }
      move(BB, IB) {
        if (IB && this.enterChild(BB, 0, 4)) return !0;
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
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (IB < 1 ? this.from >= BB : this.from > BB) || (IB > -1 ? this.to <= BB : this.to < BB)) && this.parent(););
        for (; this.enterChild(1, BB, IB););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let BB = this.bufferNode,
          IB = null,
          ZB = 0;
        if (BB && BB.context == this.buffer) BB: for (let TB = this.index, JB = this.stack.length; JB >= 0;) {
          for (let oB = BB; oB; oB = oB._parent)
            if (oB.index == TB) {
              if (TB == this.index) return oB;
              IB = oB, ZB = JB + 1;
              break BB
            } TB = this.stack[--JB]
        }
        for (let TB = ZB; TB < this.stack.length; TB++) IB = new wB(this.buffer, IB, this.stack[TB]);
        return this.bufferNode = new wB(this.buffer, IB, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(BB, IB) {
        for (let ZB = 0;;) {
          let TB = !1;
          if (this.type.isAnonymous || !1 !== BB(this)) {
            if (this.firstChild()) {
              ZB++;
              continue
            }
            this.type.isAnonymous || (TB = !0)
          }
          for (;;) {
            if (TB && IB && IB(this), TB = this.type.isAnonymous, !ZB) return;
            if (this.nextSibling()) break;
            this.parent(), ZB--, TB = !0
          }
        }
      }
      matchContext(BB) {
        if (!this.buffer) return QB(this.node.parent, BB);
        let {
          buffer: IB
        } = this.buffer, {
          types: ZB
        } = IB.set;
        for (let TB = BB.length - 1, JB = this.stack.length - 1; TB >= 0; JB--) {
          if (JB < 0) return QB(this._tree, BB, TB);
          let oB = ZB[IB.buffer[this.stack[JB]]];
          if (!oB.isAnonymous) {
            if (BB[TB] && BB[TB] != oB.name) return !1;
            TB--
          }
        }
        return !0
      }
    }

    function pB(BB) {
      return BB.children.some((BB => BB instanceof qB || !BB.type.isAnonymous || pB(BB)))
    }
    const aB = new WeakMap;

    function HB(BB, IB) {
      if (!BB.isAnonymous || IB instanceof qB || IB.type != BB) return 1;
      let ZB = aB.get(IB);
      if (null == ZB) {
        ZB = 1;
        for (let TB of IB.children) {
          if (TB.type != BB || !(TB instanceof NB)) {
            ZB = 1;
            break
          }
          ZB += HB(BB, TB)
        }
        aB.set(IB, ZB)
      }
      return ZB
    }

    function MB(BB, IB, ZB, TB, JB, oB, GB, vB, kB) {
      let cB = 0;
      for (let FB = TB; FB < JB; FB++) cB += HB(BB, IB[FB]);
      let nB = Math.ceil(1.5 * cB / 8),
        hB = [],
        zB = [];
      return function IB(ZB, TB, JB, GB, vB) {
        for (let cB = JB; cB < GB;) {
          let JB = cB,
            FB = TB[cB],
            NB = HB(BB, ZB[cB]);
          for (cB++; cB < GB; cB++) {
            let IB = HB(BB, ZB[cB]);
            if (NB + IB >= nB) break;
            NB += IB
          }
          if (cB == JB + 1) {
            if (NB > nB) {
              let BB = ZB[JB];
              IB(BB.children, BB.positions, 0, BB.children.length, TB[JB] + vB);
              continue
            }
            hB.push(ZB[JB])
          } else {
            let IB = TB[cB - 1] + ZB[cB - 1].length - FB;
            hB.push(MB(BB, ZB, TB, JB, cB, FB, IB, null, kB))
          }
          zB.push(FB + vB - oB)
        }
      }(IB, ZB, TB, JB, 0), (vB || kB)(hB, zB, GB)
    }
    class jB {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(BB, IB, ZB) {
        let TB = this.map.get(BB);
        TB || this.map.set(BB, TB = new Map), TB.set(IB, ZB)
      }
      getBuffer(BB, IB) {
        let ZB = this.map.get(BB);
        return ZB && ZB.get(IB)
      }
      set(BB, IB) {
        BB instanceof wB ? this.setBuffer(BB.context.buffer, BB.index, IB) : BB instanceof dB && this.map.set(BB.tree, IB)
      }
      get(BB) {
        return BB instanceof wB ? this.getBuffer(BB.context.buffer, BB.index) : BB instanceof dB ? this.map.get(BB.tree) : void 0
      }
      cursorSet(BB, IB) {
        BB.buffer ? this.setBuffer(BB.buffer.buffer, BB.index, IB) : this.map.set(BB.tree, IB)
      }
      cursorGet(BB) {
        return BB.buffer ? this.getBuffer(BB.buffer.buffer, BB.index) : this.map.get(BB.tree)
      }
    }
    class PB {
      constructor(BB, IB, ZB, TB) {
        let JB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          oB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = BB, this.to = IB, this.tree = ZB, this.offset = TB, this.open = (JB ? 1 : 0) | (oB ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          TB = [new PB(0, BB.length, BB, 0, !1, ZB)];
        for (let JB of IB) JB.to > BB.length && TB.push(JB);
        return TB
      }
      static applyChanges(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!IB.length) return BB;
        let TB = [],
          JB = 1,
          oB = BB.length ? BB[0] : null;
        for (let GB = 0, vB = 0, kB = 0;; GB++) {
          let cB = GB < IB.length ? IB[GB] : null,
            nB = cB ? cB.fromA : 1e9;
          if (nB - vB >= ZB)
            for (; oB && oB.from < nB;) {
              let IB = oB;
              if (vB >= IB.from || nB <= IB.to || kB) {
                let BB = Math.max(IB.from, vB) - kB,
                  ZB = Math.min(IB.to, nB) - kB;
                IB = BB >= ZB ? null : new PB(BB, ZB, IB.tree, IB.offset + kB, GB > 0, !!cB)
              }
              if (IB && TB.push(IB), oB.to > nB) break;
              oB = JB < BB.length ? BB[JB++] : null
            }
          if (!cB) break;
          vB = cB.toA, kB = cB.toA - cB.toB
        }
        return TB
      }
    }
    class RB {
      startParse(BB, IB, ZB) {
        return "string" == typeof BB && (BB = new rB(BB)), ZB = ZB ? ZB.length ? ZB.map((BB => new oB(BB.from, BB.to))) : [new oB(0, 0)] : [new oB(0, BB.length)], this.createParse(BB, IB || [], ZB)
      }
      parse(BB, IB, ZB) {
        let TB = this.startParse(BB, IB, ZB);
        for (;;) {
          let BB = TB.advance();
          if (BB) return BB
        }
      }
    }
    class rB {
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
      read(BB, IB) {
        return this.string.slice(BB, IB)
      }
    }
    new GB({
      perNode: !0
    })
  },
  41379: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => zB,
      g: () => kB,
      k: () => hB,
      l: () => aB
    });
    var TB = ZB(41374);
    let JB = 0;
    class oB {
      constructor(BB, IB, ZB, TB) {
        this.name = BB, this.set = IB, this.base = ZB, this.modified = TB, this.id = JB++
      }
      toString() {
        let {
          name: BB
        } = this;
        for (let IB of this.modified) IB.name && (BB = `${IB.name}(${BB})`);
        return BB
      }
      static define(BB, IB) {
        let ZB = "string" == typeof BB ? BB : "?";
        if (BB instanceof oB && (IB = BB), null === IB || void 0 === IB ? void 0 : IB.base) throw new Error("Can not derive from a modified tag");
        let TB = new oB(ZB, [], null, []);
        if (TB.set.push(TB), IB)
          for (let JB of IB.set) TB.set.push(JB);
        return TB
      }
      static defineModifier(BB) {
        let IB = new vB(BB);
        return BB => BB.modified.indexOf(IB) > -1 ? BB : vB.get(BB.base || BB, BB.modified.concat(IB).sort(((BB, IB) => BB.id - IB.id)))
      }
    }
    let GB = 0;
    class vB {
      constructor(BB) {
        this.name = BB, this.instances = [], this.id = GB++
      }
      static get(BB, IB) {
        if (!IB.length) return BB;
        let ZB = IB[0].instances.find((ZB => {
          return ZB.base == BB && (TB = IB, JB = ZB.modified, TB.length == JB.length && TB.every(((BB, IB) => BB == JB[IB])));
          var TB, JB
        }));
        if (ZB) return ZB;
        let TB = [],
          JB = new oB(BB.name, TB, BB, IB);
        for (let oB of IB) oB.instances.push(JB);
        let GB = function(BB) {
          let IB = [
            []
          ];
          for (let ZB = 0; ZB < BB.length; ZB++)
            for (let TB = 0, JB = IB.length; TB < JB; TB++) IB.push(IB[TB].concat(BB[ZB]));
          return IB.sort(((BB, IB) => IB.length - BB.length))
        }(IB);
        for (let oB of BB.set)
          if (!oB.modified.length)
            for (let BB of GB) TB.push(vB.get(oB, BB));
        return JB
      }
    }

    function kB(BB) {
      let IB = Object.create(null);
      for (let ZB in BB) {
        let TB = BB[ZB];
        Array.isArray(TB) || (TB = [TB]);
        for (let BB of ZB.split(" "))
          if (BB) {
            let ZB = [],
              JB = 2,
              oB = BB;
            for (let IB = 0;;) {
              if ("..." == oB && IB > 0 && IB + 3 == BB.length) {
                JB = 1;
                break
              }
              let TB = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(oB);
              if (!TB) throw new RangeError("Invalid path: " + BB);
              if (ZB.push("*" == TB[0] ? "" : '"' == TB[0][0] ? JSON.parse(TB[0]) : TB[0]), IB += TB[0].length, IB == BB.length) break;
              let GB = BB[IB++];
              if (IB == BB.length && "!" == GB) {
                JB = 0;
                break
              }
              if ("/" != GB) throw new RangeError("Invalid path: " + BB);
              oB = BB.slice(IB)
            }
            let GB = ZB.length - 1,
              vB = ZB[GB];
            if (!vB) throw new RangeError("Invalid path: " + BB);
            let kB = new nB(TB, JB, GB > 0 ? ZB.slice(0, GB) : null);
            IB[vB] = kB.sort(IB[vB])
          }
      }
      return cB.add(IB)
    }
    const cB = new TB.i({
      combine(BB, IB) {
        let ZB, TB, JB;
        for (; BB || IB;) {
          if (!BB || IB && BB.depth >= IB.depth ? (JB = IB, IB = IB.next) : (JB = BB, BB = BB.next), ZB && ZB.mode == JB.mode && !JB.context && !ZB.context) continue;
          let oB = new nB(JB.tags, JB.mode, JB.context);
          ZB ? ZB.next = oB : TB = oB, ZB = oB
        }
        return TB
      }
    });
    class nB {
      constructor(BB, IB, ZB, TB) {
        this.tags = BB, this.mode = IB, this.context = ZB, this.next = TB
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

    function hB(BB, IB) {
      let ZB = Object.create(null);
      for (let oB of BB)
        if (Array.isArray(oB.tag))
          for (let BB of oB.tag) ZB[BB.id] = oB.class;
        else ZB[oB.tag.id] = oB.class;
      let {
        scope: TB,
        all: JB = null
      } = IB || {};
      return {
        style: BB => {
          let IB = JB;
          for (let TB of BB)
            for (let BB of TB.set) {
              let TB = ZB[BB.id];
              if (TB) {
                IB = IB ? IB + " " + TB : TB;
                break
              }
            }
          return IB
        },
        scope: TB
      }
    }

    function zB(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : BB.length,
        oB = new FB(TB, Array.isArray(IB) ? IB : [IB], ZB);
      oB.highlightRange(BB.cursor(), TB, JB, "", oB.highlighters), oB.flush(JB)
    }
    nB.empty = new nB([], 2, null);
    class FB {
      constructor(BB, IB, ZB) {
        this.at = BB, this.highlighters = IB, this.span = ZB, this.class = ""
      }
      startSpan(BB, IB) {
        IB != this.class && (this.flush(BB), BB > this.at && (this.at = BB), this.class = IB)
      }
      flush(BB) {
        BB > this.at && this.class && this.span(this.at, BB, this.class)
      }
      highlightRange(BB, IB, ZB, JB, oB) {
        let {
          type: GB,
          from: vB,
          to: kB
        } = BB;
        if (vB >= ZB || kB <= IB) return;
        GB.isTop && (oB = this.highlighters.filter((BB => !BB.scope || BB.scope(GB))));
        let hB = JB,
          zB = function(BB) {
            let IB = BB.type.prop(cB);
            for (; IB && IB.context && !BB.matchContext(IB.context);) IB = IB.next;
            return IB || null
          }(BB) || nB.empty,
          FB = function(BB, IB) {
            let ZB = null;
            for (let TB of BB) {
              let BB = TB.style(IB);
              BB && (ZB = ZB ? ZB + " " + BB : BB)
            }
            return ZB
          }(oB, zB.tags);
        if (FB && (hB && (hB += " "), hB += FB, 1 == zB.mode && (JB += (JB ? " " : "") + FB)), this.startSpan(Math.max(IB, vB), hB), zB.opaque) return;
        let NB = BB.tree && BB.tree.prop(TB.i.mounted);
        if (NB && NB.overlay) {
          let TB = BB.node.enter(NB.overlay[0].from + vB, 1),
            GB = this.highlighters.filter((BB => !BB.scope || BB.scope(NB.tree.type))),
            cB = BB.firstChild();
          for (let nB = 0, zB = vB;; nB++) {
            let FB = nB < NB.overlay.length ? NB.overlay[nB] : null,
              gB = FB ? FB.from + vB : kB,
              qB = Math.max(IB, zB),
              yB = Math.min(ZB, gB);
            if (qB < yB && cB)
              for (; BB.from < yB && (this.highlightRange(BB, qB, yB, JB, oB), this.startSpan(Math.min(yB, BB.to), hB), !(BB.to >= gB) && BB.nextSibling()););
            if (!FB || gB > ZB) break;
            zB = FB.to + vB, zB > IB && (this.highlightRange(TB.cursor(), Math.max(IB, FB.from + vB), Math.min(ZB, zB), "", GB), this.startSpan(Math.min(ZB, zB), hB))
          }
          cB && BB.parent()
        } else if (BB.firstChild()) {
          NB && (JB = "");
          do {
            if (!(BB.to <= IB)) {
              if (BB.from >= ZB) break;
              this.highlightRange(BB, IB, ZB, JB, oB), this.startSpan(Math.min(ZB, BB.to), hB)
            }
          } while (BB.nextSibling());
          BB.parent()
        }
      }
    }
    const NB = oB.define,
      gB = NB(),
      qB = NB(),
      yB = NB(qB),
      UB = NB(qB),
      WB = NB(),
      dB = NB(WB),
      CB = NB(WB),
      QB = NB(),
      sB = NB(QB),
      wB = NB(),
      OB = NB(),
      YB = NB(),
      iB = NB(YB),
      pB = NB(),
      aB = {
        comment: gB,
        lineComment: NB(gB),
        blockComment: NB(gB),
        docComment: NB(gB),
        name: qB,
        variableName: NB(qB),
        typeName: yB,
        tagName: NB(yB),
        propertyName: UB,
        attributeName: NB(UB),
        className: NB(qB),
        labelName: NB(qB),
        namespace: NB(qB),
        macroName: NB(qB),
        literal: WB,
        string: dB,
        docString: NB(dB),
        character: NB(dB),
        attributeValue: NB(dB),
        number: CB,
        integer: NB(CB),
        float: NB(CB),
        bool: NB(WB),
        regexp: NB(WB),
        escape: NB(WB),
        color: NB(WB),
        url: NB(WB),
        keyword: wB,
        self: NB(wB),
        null: NB(wB),
        atom: NB(wB),
        unit: NB(wB),
        modifier: NB(wB),
        operatorKeyword: NB(wB),
        controlKeyword: NB(wB),
        definitionKeyword: NB(wB),
        moduleKeyword: NB(wB),
        operator: OB,
        derefOperator: NB(OB),
        arithmeticOperator: NB(OB),
        logicOperator: NB(OB),
        bitwiseOperator: NB(OB),
        compareOperator: NB(OB),
        updateOperator: NB(OB),
        definitionOperator: NB(OB),
        typeOperator: NB(OB),
        controlOperator: NB(OB),
        punctuation: YB,
        separator: NB(YB),
        bracket: iB,
        angleBracket: NB(iB),
        squareBracket: NB(iB),
        paren: NB(iB),
        brace: NB(iB),
        content: QB,
        heading: sB,
        heading1: NB(sB),
        heading2: NB(sB),
        heading3: NB(sB),
        heading4: NB(sB),
        heading5: NB(sB),
        heading6: NB(sB),
        contentSeparator: NB(QB),
        list: NB(QB),
        quote: NB(QB),
        emphasis: NB(QB),
        strong: NB(QB),
        link: NB(QB),
        monospace: NB(QB),
        strikethrough: NB(QB),
        inserted: NB(),
        deleted: NB(),
        changed: NB(),
        invalid: NB(),
        meta: pB,
        documentMeta: NB(pB),
        annotation: NB(pB),
        processingInstruction: NB(pB),
        definition: oB.defineModifier("definition"),
        constant: oB.defineModifier("constant"),
        function: oB.defineModifier("function"),
        standard: oB.defineModifier("standard"),
        local: oB.defineModifier("local"),
        special: oB.defineModifier("special")
      };
    for (let HB in aB) {
      let BB = aB[HB];
      BB instanceof oB && (BB.name = HB)
    }
    hB([{
      tag: aB.link,
      class: "tok-link"
    }, {
      tag: aB.heading,
      class: "tok-heading"
    }, {
      tag: aB.emphasis,
      class: "tok-emphasis"
    }, {
      tag: aB.strong,
      class: "tok-strong"
    }, {
      tag: aB.keyword,
      class: "tok-keyword"
    }, {
      tag: aB.atom,
      class: "tok-atom"
    }, {
      tag: aB.bool,
      class: "tok-bool"
    }, {
      tag: aB.url,
      class: "tok-url"
    }, {
      tag: aB.labelName,
      class: "tok-labelName"
    }, {
      tag: aB.inserted,
      class: "tok-inserted"
    }, {
      tag: aB.deleted,
      class: "tok-deleted"
    }, {
      tag: aB.literal,
      class: "tok-literal"
    }, {
      tag: aB.string,
      class: "tok-string"
    }, {
      tag: aB.number,
      class: "tok-number"
    }, {
      tag: [aB.regexp, aB.escape, aB.special(aB.string)],
      class: "tok-string2"
    }, {
      tag: aB.variableName,
      class: "tok-variableName"
    }, {
      tag: aB.local(aB.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: aB.definition(aB.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: aB.special(aB.variableName),
      class: "tok-variableName2"
    }, {
      tag: aB.definition(aB.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: aB.typeName,
      class: "tok-typeName"
    }, {
      tag: aB.namespace,
      class: "tok-namespace"
    }, {
      tag: aB.className,
      class: "tok-className"
    }, {
      tag: aB.macroName,
      class: "tok-macroName"
    }, {
      tag: aB.propertyName,
      class: "tok-propertyName"
    }, {
      tag: aB.operator,
      class: "tok-operator"
    }, {
      tag: aB.comment,
      class: "tok-comment"
    }, {
      tag: aB.meta,
      class: "tok-meta"
    }, {
      tag: aB.invalid,
      class: "tok-invalid"
    }, {
      tag: aB.punctuation,
      class: "tok-punctuation"
    }])
  },
  41392: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => vB.i,
      c: () => GB.A,
      g: () => GB.K,
      h: () => GB.L,
      i: () => vB.m,
      m: () => sZ,
      q: () => vB.P,
      u: () => vB.jb
    });
    var TB = ZB(1442),
      JB = ZB(1434),
      oB = ZB(63),
      GB = ZB(41342),
      vB = ZB(41349),
      kB = ZB(41371),
      cB = ZB(41374);

    function nB(BB, IB) {
      return ZB => {
        let {
          state: TB,
          dispatch: JB
        } = ZB;
        if (TB.readOnly) return !1;
        let oB = BB(IB, TB);
        return !!oB && (JB(TB.update(oB)), !0)
      }
    }
    const hB = nB(yB, 0),
      zB = nB(qB, 0),
      FB = nB(((BB, IB) => qB(BB, IB, function(BB) {
        let IB = [];
        for (let ZB of BB.selection.vq) {
          let TB = BB.doc.lineAt(ZB.from),
            JB = ZB.to <= TB.to ? TB : BB.doc.lineAt(ZB.to);
          JB.from > TB.from && JB.from == ZB.to && (JB = ZB.to == TB.to + 1 ? TB : BB.doc.lineAt(ZB.to - 1));
          let oB = IB.length - 1;
          oB >= 0 && IB[oB].to > TB.from ? IB[oB].to = JB.to : IB.push({
            from: TB.from + /^\s*/.exec(TB.text)[0].length,
            to: JB.to
          })
        }
        return IB
      }(IB))), 0);

    function NB(BB, IB) {
      let ZB = BB.languageDataAt("commentTokens", IB, 1);
      return ZB.length ? ZB[0] : {}
    }
    const gB = 50;

    function qB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : IB.selection.vq,
        TB = ZB.map((BB => NB(IB, BB.from).block));
      if (!TB.every((BB => BB))) return null;
      let JB = ZB.map(((BB, ZB) => function(BB, IB, ZB, TB) {
        let JB, oB, {
            open: GB,
            close: vB
          } = IB,
          kB = BB.sliceDoc(ZB - gB, ZB),
          cB = BB.sliceDoc(TB, TB + gB),
          nB = /\s*$/.exec(kB)[0].length,
          hB = /^\s*/.exec(cB)[0].length,
          zB = kB.length - nB;
        if (kB.slice(zB - GB.length, zB) == GB && cB.slice(hB, hB + vB.length) == vB) return {
          open: {
            pos: ZB - nB,
            margin: nB && 1
          },
          close: {
            pos: TB + hB,
            margin: hB && 1
          }
        };
        TB - ZB <= 2 * gB ? JB = oB = BB.sliceDoc(ZB, TB) : (JB = BB.sliceDoc(ZB, ZB + gB), oB = BB.sliceDoc(TB - gB, TB));
        let FB = /^\s*/.exec(JB)[0].length,
          NB = /\s*$/.exec(oB)[0].length,
          qB = oB.length - NB - vB.length;
        return JB.slice(FB, FB + GB.length) == GB && oB.slice(qB, qB + vB.length) == vB ? {
          open: {
            pos: ZB + FB + GB.length,
            margin: /\s/.test(JB.charAt(FB + GB.length)) ? 1 : 0
          },
          close: {
            pos: TB - NB - vB.length,
            margin: /\s/.test(oB.charAt(qB - 1)) ? 1 : 0
          }
        } : null
      }(IB, TB[ZB], BB.from, BB.to)));
      if (2 != BB && !JB.every((BB => BB))) return {
        changes: IB.changes(ZB.map(((BB, IB) => JB[IB] ? [] : [{
          from: BB.from,
          insert: TB[IB].open + " "
        }, {
          from: BB.to,
          insert: " " + TB[IB].close
        }])))
      };
      if (1 != BB && JB.some((BB => BB))) {
        let BB = [];
        for (let IB, ZB = 0; ZB < JB.length; ZB++)
          if (IB = JB[ZB]) {
            let JB = TB[ZB],
              {
                open: oB,
                close: GB
              } = IB;
            BB.push({
              from: oB.pos - JB.open.length,
              to: oB.pos + oB.margin
            }, {
              from: GB.pos - GB.margin,
              to: GB.pos + JB.close.length
            })
          } return {
          changes: BB
        }
      }
      return null
    }

    function yB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : IB.selection.vq,
        TB = [],
        JB = -1;
      BB: for (let {
          from: oB,
          to: GB
        }
        of ZB) {
        let BB, ZB = TB.length,
          vB = 1e9;
        for (let kB = oB; kB <= GB;) {
          let ZB = IB.doc.lineAt(kB);
          if (void 0 == BB && (BB = NB(IB, ZB.from).line, !BB)) continue BB;
          if (ZB.from > JB && (oB == GB || GB > ZB.from)) {
            JB = ZB.from;
            let IB = /^\s*/.exec(ZB.text)[0].length,
              oB = IB == ZB.length,
              GB = ZB.text.slice(IB, IB + BB.length) == BB ? IB : -1;
            IB < ZB.text.length && IB < vB && (vB = IB), TB.push({
              line: ZB,
              comment: GB,
              token: BB,
              indent: IB,
              empty: oB,
              single: !1
            })
          }
          kB = ZB.to + 1
        }
        if (vB < 1e9)
          for (let IB = ZB; IB < TB.length; IB++) TB[IB].indent < TB[IB].line.text.length && (TB[IB].indent = vB);
        TB.length == ZB + 1 && (TB[ZB].single = !0)
      }
      if (2 != BB && TB.some((BB => BB.comment < 0 && (!BB.empty || BB.single)))) {
        let BB = [];
        for (let {
            line: IB,
            token: JB,
            indent: oB,
            empty: GB,
            single: vB
          }
          of TB) !vB && GB || BB.push({
          from: IB.from + oB,
          insert: JB + " "
        });
        let ZB = IB.changes(BB);
        return {
          changes: ZB,
          selection: IB.selection.map(ZB, 1)
        }
      }
      if (1 != BB && TB.some((BB => BB.comment >= 0))) {
        let BB = [];
        for (let {
            line: IB,
            comment: ZB,
            token: JB
          }
          of TB)
          if (ZB >= 0) {
            let TB = IB.from + ZB,
              oB = TB + JB.length;
            " " == IB.text[oB - IB.from] && oB++, BB.push({
              from: TB,
              to: oB
            })
          } return {
          changes: BB
        }
      }
      return null
    }
    const UB = GB.d.define(),
      WB = GB.d.define(),
      dB = GB.t.define(),
      CB = GB.t.define({
        combine: BB => (0, GB.T)(BB, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (BB, IB) => IB
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (BB, IB) => (ZB, TB) => BB(ZB, TB) || IB(ZB, TB)
        })
      }),
      QB = GB.L.define({
        create: () => LB.empty,
        update(BB, IB) {
          let ZB = IB.state.facet(CB),
            TB = IB.annotation(UB);
          if (TB) {
            let JB = pB.fromTransaction(IB, TB.selection),
              oB = TB.side,
              GB = 0 == oB ? BB.undone : BB.done;
            return GB = JB ? aB(GB, GB.length, ZB.minDepth, JB) : PB(GB, IB.startState.selection), new LB(0 == oB ? TB.rest : GB, 0 == oB ? GB : TB.rest)
          }
          let JB = IB.annotation(WB);
          if ("full" != JB && "before" != JB || (BB = BB.isolate()), !1 === IB.annotation(GB.P.addToHistory)) return IB.changes.empty ? BB : BB.addMapping(IB.changes.desc);
          let oB = pB.fromTransaction(IB),
            vB = IB.annotation(GB.P.time),
            kB = IB.annotation(GB.P.userEvent);
          return oB ? BB = BB.addChanges(oB, vB, kB, ZB, IB) : IB.selection && (BB = BB.addSelection(IB.startState.selection, vB, kB, ZB.newGroupDelay)), "full" != JB && "after" != JB || (BB = BB.isolate()), BB
        },
        toJSON: BB => ({
          done: BB.done.map((BB => BB.toJSON())),
          undone: BB.undone.map((BB => BB.toJSON()))
        }),
        fromJSON: BB => new LB(BB.done.map(pB.fromJSON), BB.undone.map(pB.fromJSON))
      });

    function sB(BB, IB) {
      return function(ZB) {
        let {
          state: TB,
          dispatch: JB
        } = ZB;
        if (!IB && TB.readOnly) return !1;
        let oB = TB.field(QB, !1);
        if (!oB) return !1;
        let GB = oB.pop(BB, TB, IB);
        return !!GB && (JB(GB), !0)
      }
    }
    const wB = sB(0, !1),
      OB = sB(1, !1),
      YB = sB(0, !0),
      iB = sB(1, !0);
    class pB {
      constructor(BB, IB, ZB, TB, JB) {
        this.changes = BB, this.effects = IB, this.mapped = ZB, this.startSelection = TB, this.selectionsAfter = JB
      }
      setSelAfter(BB) {
        return new pB(this.changes, this.effects, this.mapped, this.startSelection, BB)
      }
      toJSON() {
        var BB, IB, ZB;
        return {
          changes: null === (BB = this.changes) || void 0 === BB ? void 0 : BB.toJSON(),
          mapped: null === (IB = this.mapped) || void 0 === IB ? void 0 : IB.toJSON(),
          startSelection: null === (ZB = this.startSelection) || void 0 === ZB ? void 0 : ZB.toJSON(),
          selectionsAfter: this.selectionsAfter.map((BB => BB.toJSON()))
        }
      }
      static fromJSON(BB) {
        return new pB(BB.changes && GB.ChangeSet.fromJSON(BB.changes), [], BB.mapped && GB.h.fromJSON(BB.mapped), BB.startSelection && GB.n.fromJSON(BB.startSelection), BB.selectionsAfter.map(GB.n.fromJSON))
      }
      static fromTransaction(BB, IB) {
        let ZB = MB;
        for (let TB of BB.startState.facet(dB)) {
          let IB = TB(BB);
          IB.length && (ZB = ZB.concat(IB))
        }
        return !ZB.length && BB.changes.empty ? null : new pB(BB.changes.invert(BB.startState.doc), ZB, void 0, IB || BB.startState.selection, MB)
      }
      static selection(BB) {
        return new pB(void 0, MB, void 0, void 0, BB)
      }
    }

    function aB(BB, IB, ZB, TB) {
      let JB = IB + 1 > ZB + 20 ? IB - ZB - 1 : 0,
        oB = BB.slice(JB, IB);
      return oB.push(TB), oB
    }

    function HB(BB, IB) {
      return BB.length ? IB.length ? BB.concat(IB) : BB : IB
    }
    const MB = [],
      jB = 200;

    function PB(BB, IB) {
      if (BB.length) {
        let ZB = BB[BB.length - 1],
          TB = ZB.selectionsAfter.slice(Math.max(0, ZB.selectionsAfter.length - jB));
        return TB.length && TB[TB.length - 1].eq(IB) ? BB : (TB.push(IB), aB(BB, BB.length - 1, 1e9, ZB.setSelAfter(TB)))
      }
      return [pB.selection([IB])]
    }

    function RB(BB) {
      let IB = BB[BB.length - 1],
        ZB = BB.slice();
      return ZB[BB.length - 1] = IB.setSelAfter(IB.selectionsAfter.slice(0, IB.selectionsAfter.length - 1)), ZB
    }

    function rB(BB, IB) {
      if (!BB.length) return BB;
      let ZB = BB.length,
        TB = MB;
      for (; ZB;) {
        let JB = mB(BB[ZB - 1], IB, TB);
        if (JB.changes && !JB.changes.empty || JB.effects.length) {
          let IB = BB.slice(0, ZB);
          return IB[ZB - 1] = JB, IB
        }
        IB = JB.mapped, ZB--, TB = JB.selectionsAfter
      }
      return TB.length ? [pB.selection(TB)] : MB
    }

    function mB(BB, IB, ZB) {
      let TB = HB(BB.selectionsAfter.length ? BB.selectionsAfter.map((BB => BB.map(IB))) : MB, ZB);
      if (!BB.changes) return pB.selection(TB);
      let JB = BB.changes.map(IB),
        oB = IB.mapDesc(BB.changes, !0),
        vB = BB.mapped ? BB.mapped.composeDesc(oB) : oB;
      return new pB(JB, GB.K.mapEffects(BB.effects, IB), vB, BB.startSelection.map(oB), TB)
    }
    const XB = /^(input\.type|delete)($|\.)/;
    class LB {
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = BB, this.undone = IB, this.prevTime = ZB, this.prevUserEvent = TB
      }
      isolate() {
        return this.prevTime ? new LB(this.done, this.undone) : this
      }
      addChanges(BB, IB, ZB, TB, JB) {
        let oB = this.done,
          vB = oB[oB.length - 1];
        return oB = vB && vB.changes && !vB.changes.empty && BB.changes && (!ZB || XB.test(ZB)) && (!vB.selectionsAfter.length && IB - this.prevTime < TB.newGroupDelay && TB.joinToEvent(JB, function(BB, IB) {
          let ZB = [],
            TB = !1;
          return BB.iterChangedRanges(((BB, IB) => ZB.push(BB, IB))), IB.iterChangedRanges(((BB, IB, JB, oB) => {
            for (let GB = 0; GB < ZB.length;) {
              let BB = ZB[GB++],
                IB = ZB[GB++];
              oB >= BB && JB <= IB && (TB = !0)
            }
          })), TB
        }(vB.changes, BB.changes)) || "input.type.compose" == ZB) ? aB(oB, oB.length - 1, TB.minDepth, new pB(BB.changes.compose(vB.changes), HB(GB.K.mapEffects(BB.effects, vB.changes), vB.effects), vB.mapped, vB.startSelection, MB)) : aB(oB, oB.length, TB.minDepth, BB), new LB(oB, MB, IB, ZB)
      }
      addSelection(BB, IB, ZB, TB) {
        let JB = this.done.length ? this.done[this.done.length - 1].selectionsAfter : MB;
        return JB.length > 0 && IB - this.prevTime < TB && ZB == this.prevUserEvent && ZB && /^select($|\.)/.test(ZB) && (oB = JB[JB.length - 1], GB = BB, oB.vq.length == GB.vq.length && 0 === oB.vq.filter(((BB, IB) => BB.empty != GB.vq[IB].empty)).length) ? this : new LB(PB(this.done, BB), this.undone, IB, ZB);
        var oB, GB
      }
      addMapping(BB) {
        return new LB(rB(this.done, BB), rB(this.undone, BB), this.prevTime, this.prevUserEvent)
      }
      pop(BB, IB, ZB) {
        let TB = 0 == BB ? this.done : this.undone;
        if (0 == TB.length) return null;
        let JB = TB[TB.length - 1],
          oB = JB.selectionsAfter[0] || (JB.startSelection ? JB.startSelection.map(JB.changes.invertedDesc, 1) : IB.selection);
        if (ZB && JB.selectionsAfter.length) return IB.update({
          selection: JB.selectionsAfter[JB.selectionsAfter.length - 1],
          annotations: UB.of({
            side: BB,
            rest: RB(TB),
            selection: oB
          }),
          userEvent: 0 == BB ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (JB.changes) {
          let ZB = 1 == TB.length ? MB : TB.slice(0, TB.length - 1);
          return JB.mapped && (ZB = rB(ZB, JB.mapped)), IB.update({
            changes: JB.changes,
            selection: JB.startSelection,
            effects: JB.effects,
            annotations: UB.of({
              side: BB,
              rest: ZB,
              selection: oB
            }),
            filter: !1,
            userEvent: 0 == BB ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    LB.empty = new LB(MB, MB);
    const eB = [{
      key: "Mod-z",
      run: wB,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: OB,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: OB,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: YB,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: iB,
      preventDefault: !0
    }];

    function uB(BB, IB) {
      return GB.n.create(BB.vq.map(IB), BB.mainIndex)
    }

    function fB(BB, IB) {
      return BB.update({
        selection: IB,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function lB(BB, IB) {
      let {
        state: ZB,
        dispatch: TB
      } = BB, JB = uB(ZB.selection, IB);
      return !JB.eq(ZB.selection, !0) && (TB(fB(ZB, JB)), !0)
    }

    function AB(BB, IB) {
      return GB.n.cursor(IB ? BB.to : BB.from)
    }

    function tB(BB, IB) {
      return lB(BB, (ZB => ZB.empty ? BB.moveByChar(ZB, IB) : AB(ZB, IB)))
    }

    function bB(BB) {
      return BB.textDirectionAt(BB.state.selection.main.head) == vB.f.LTR
    }
    const xB = BB => tB(BB, !bB(BB)),
      EB = BB => tB(BB, bB(BB));

    function DB(BB, IB) {
      return lB(BB, (ZB => ZB.empty ? BB.moveByGroup(ZB, IB) : AB(ZB, IB)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function KB(BB, IB, ZB) {
      if (IB.type.prop(ZB)) return !0;
      let TB = IB.to - IB.from;
      return TB && (TB > 2 || /[^\s,.;:]/.test(BB.sliceDoc(IB.from, IB.to))) || IB.firstChild
    }

    function VB(BB, IB, ZB) {
      let TB, JB, oB = (0, kB.mb)(BB).resolveInner(IB.head),
        vB = ZB ? cB.i.closedBy : cB.i.openedBy;
      for (let GB = IB.head;;) {
        let IB = ZB ? oB.childAfter(GB) : oB.childBefore(GB);
        if (!IB) break;
        KB(BB, IB, vB) ? oB = IB : GB = ZB ? IB.to : IB.from
      }
      return JB = oB.type.prop(vB) && (TB = ZB ? (0, kB._)(BB, oB.from, 1) : (0, kB._)(BB, oB.to, -1)) && TB.matched ? ZB ? TB.end.to : TB.end.from : ZB ? oB.to : oB.from, GB.n.cursor(JB, ZB ? -1 : 1)
    }

    function SB(BB, IB) {
      return lB(BB, (ZB => {
        if (!ZB.empty) return AB(ZB, IB);
        let TB = BB.moveVertically(ZB, IB);
        return TB.head != ZB.head ? TB : BB.moveToLineBoundary(ZB, IB)
      }))
    }
    const BI = BB => SB(BB, !1),
      II = BB => SB(BB, !0);

    function ZI(BB) {
      let IB, ZB = BB.scrollDOM.clientHeight < BB.scrollDOM.scrollHeight - 2,
        TB = 0,
        JB = 0;
      if (ZB) {
        for (let IB of BB.state.facet(vB.i.scrollMargins)) {
          let ZB = IB(BB);
          (null === ZB || void 0 === ZB ? void 0 : ZB.top) && (TB = Math.max(null === ZB || void 0 === ZB ? void 0 : ZB.top, TB)), (null === ZB || void 0 === ZB ? void 0 : ZB.bottom) && (JB = Math.max(null === ZB || void 0 === ZB ? void 0 : ZB.bottom, JB))
        }
        IB = BB.scrollDOM.clientHeight - TB - JB
      } else IB = (BB.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: TB,
        marginBottom: JB,
        selfScroll: ZB,
        height: Math.max(BB.defaultLineHeight, IB - 5)
      }
    }

    function TI(BB, IB) {
      let ZB, TB = ZI(BB),
        {
          state: JB
        } = BB,
        oB = uB(JB.selection, (ZB => ZB.empty ? BB.moveVertically(ZB, IB, TB.height) : AB(ZB, IB)));
      if (oB.eq(JB.selection)) return !1;
      if (TB.selfScroll) {
        let IB = BB.coordsAtPos(JB.selection.main.head),
          GB = BB.scrollDOM.getBoundingClientRect(),
          kB = GB.top + TB.marginTop,
          cB = GB.bottom - TB.marginBottom;
        IB && IB.top > kB && IB.bottom < cB && (ZB = vB.i.scrollIntoView(oB.main.head, {
          y: "start",
          yMargin: IB.top - kB
        }))
      }
      return BB.dispatch(fB(JB, oB), {
        effects: ZB
      }), !0
    }
    const JI = BB => TI(BB, !1),
      oI = BB => TI(BB, !0);

    function GI(BB, IB, ZB) {
      let TB = BB.lineBlockAt(IB.head),
        JB = BB.moveToLineBoundary(IB, ZB);
      if (JB.head == IB.head && JB.head != (ZB ? TB.to : TB.from) && (JB = BB.moveToLineBoundary(IB, ZB, !1)), !ZB && JB.head == TB.from && TB.length) {
        let ZB = /^\s*/.exec(BB.state.sliceDoc(TB.from, Math.min(TB.from + 100, TB.to)))[0].length;
        ZB && IB.head != TB.from + ZB && (JB = GB.n.cursor(TB.from + ZB))
      }
      return JB
    }

    function vI(BB, IB, ZB) {
      let TB = !1,
        JB = uB(BB.selection, (IB => {
          let JB = (0, kB._)(BB, IB.head, -1) || (0, kB._)(BB, IB.head, 1) || IB.head > 0 && (0, kB._)(BB, IB.head - 1, 1) || IB.head < BB.doc.length && (0, kB._)(BB, IB.head + 1, -1);
          if (!JB || !JB.end) return IB;
          TB = !0;
          let oB = JB.start.from == IB.head ? JB.end.to : JB.end.from;
          return ZB ? GB.n.range(IB.anchor, oB) : GB.n.cursor(oB)
        }));
      return !!TB && (IB(fB(BB, JB)), !0)
    }

    function kI(BB, IB) {
      let ZB = uB(BB.state.selection, (BB => {
        let ZB = IB(BB);
        return GB.n.range(BB.anchor, ZB.head, ZB.goalColumn, ZB.bidiLevel || void 0, ZB.assoc)
      }));
      return !ZB.eq(BB.state.selection) && (BB.dispatch(fB(BB.state, ZB)), !0)
    }

    function cI(BB, IB) {
      return kI(BB, (ZB => BB.moveByChar(ZB, IB)))
    }
    const nI = BB => cI(BB, !bB(BB)),
      hI = BB => cI(BB, bB(BB));

    function zI(BB, IB) {
      return kI(BB, (ZB => BB.moveByGroup(ZB, IB)))
    }

    function FI(BB, IB) {
      return kI(BB, (ZB => BB.moveVertically(ZB, IB)))
    }
    const NI = BB => FI(BB, !1),
      gI = BB => FI(BB, !0);

    function qI(BB, IB) {
      return kI(BB, (ZB => BB.moveVertically(ZB, IB, ZI(BB).height)))
    }
    const yI = BB => qI(BB, !1),
      UI = BB => qI(BB, !0),
      WI = BB => {
        let {
          state: IB,
          dispatch: ZB
        } = BB;
        return ZB(fB(IB, {
          anchor: 0
        })), !0
      },
      dI = BB => {
        let {
          state: IB,
          dispatch: ZB
        } = BB;
        return ZB(fB(IB, {
          anchor: IB.doc.length
        })), !0
      },
      CI = BB => {
        let {
          state: IB,
          dispatch: ZB
        } = BB;
        return ZB(fB(IB, {
          anchor: IB.selection.main.anchor,
          head: 0
        })), !0
      },
      QI = BB => {
        let {
          state: IB,
          dispatch: ZB
        } = BB;
        return ZB(fB(IB, {
          anchor: IB.selection.main.anchor,
          head: IB.doc.length
        })), !0
      };

    function sI(BB, IB) {
      let {
        state: ZB
      } = BB, TB = ZB.selection, JB = ZB.selection.vq.slice();
      for (let oB of ZB.selection.vq) {
        let TB = ZB.doc.lineAt(oB.head);
        if (IB ? TB.to < BB.state.doc.length : TB.from > 0)
          for (let ZB = oB;;) {
            let oB = BB.moveVertically(ZB, IB);
            if (oB.head < TB.from || oB.head > TB.to) {
              JB.some((BB => BB.head == oB.head)) || JB.push(oB);
              break
            }
            if (oB.head == ZB.head) break;
            ZB = oB
          }
      }
      return JB.length != TB.vq.length && (BB.dispatch(fB(ZB, GB.n.create(JB, JB.length - 1))), !0)
    }

    function wI(BB, IB) {
      if (BB.state.readOnly) return !1;
      let ZB = "delete.selection",
        {
          state: TB
        } = BB,
        JB = TB.changeByRange((TB => {
          let {
            from: JB,
            to: oB
          } = TB;
          if (JB == oB) {
            let GB = IB(TB);
            GB < JB ? (ZB = "delete.backward", GB = OI(BB, GB, !1)) : GB > JB && (ZB = "delete.forward", GB = OI(BB, GB, !0)), JB = Math.min(JB, GB), oB = Math.max(oB, GB)
          } else JB = OI(BB, JB, !1), oB = OI(BB, oB, !0);
          return JB == oB ? {
            range: TB
          } : {
            changes: {
              from: JB,
              to: oB
            },
            range: GB.n.cursor(JB, JB < TB.head ? -1 : 1)
          }
        }));
      return !JB.changes.empty && (BB.dispatch(TB.update(JB, {
        scrollIntoView: !0,
        userEvent: ZB,
        effects: "delete.selection" == ZB ? vB.i.announce.of(TB.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function OI(BB, IB, ZB) {
      if (BB instanceof vB.i)
        for (let TB of BB.state.facet(vB.i.atomicRanges).map((IB => IB(BB)))) TB.between(IB, IB, ((BB, TB) => {
          BB < IB && TB > IB && (IB = ZB ? TB : BB)
        }));
      return IB
    }
    const YI = (BB, IB, ZB) => wI(BB, (TB => {
        let JB, oB, vB = TB.from,
          {
            state: cB
          } = BB,
          nB = cB.doc.lineAt(vB);
        if (ZB && !IB && vB > nB.from && vB < nB.from + 200 && !/[^ \t]/.test(JB = nB.text.slice(0, vB - nB.from))) {
          if ("\t" == JB[JB.length - 1]) return vB - 1;
          let BB = (0, GB.X)(JB, cB.tabSize) % (0, kB.O)(cB) || (0, kB.O)(cB);
          for (let IB = 0; IB < BB && " " == JB[JB.length - 1 - IB]; IB++) vB--;
          oB = vB
        } else oB = (0, GB._)(nB.text, vB - nB.from, IB, IB) + nB.from, oB == vB && nB.number != (IB ? cB.doc.lines : 1) ? oB += IB ? 1 : -1 : !IB && /[\ufe00-\ufe0f]/.test(nB.text.slice(oB - nB.from, vB - nB.from)) && (oB = (0, GB._)(nB.text, oB - nB.from, !1, !1) + nB.from);
        return oB
      })),
      iI = BB => YI(BB, !1, !0),
      pI = BB => YI(BB, !0, !1),
      aI = (BB, IB) => wI(BB, (ZB => {
        let TB = ZB.head,
          {
            state: JB
          } = BB,
          oB = JB.doc.lineAt(TB),
          vB = JB.charCategorizer(TB);
        for (let BB = null;;) {
          if (TB == (IB ? oB.to : oB.from)) {
            TB == ZB.head && oB.number != (IB ? JB.doc.lines : 1) && (TB += IB ? 1 : -1);
            break
          }
          let kB = (0, GB._)(oB.text, TB - oB.from, IB) + oB.from,
            cB = oB.text.slice(Math.min(TB, kB) - oB.from, Math.max(TB, kB) - oB.from),
            nB = vB(cB);
          if (null != BB && nB != BB) break;
          " " == cB && TB == ZB.head || (BB = nB), TB = kB
        }
        return TB
      })),
      HI = BB => aI(BB, !1);

    function MI(BB) {
      let IB = [],
        ZB = -1;
      for (let TB of BB.selection.vq) {
        let JB = BB.doc.lineAt(TB.from),
          oB = BB.doc.lineAt(TB.to);
        if (TB.empty || TB.to != oB.from || (oB = BB.doc.lineAt(TB.to - 1)), ZB >= JB.number) {
          let BB = IB[IB.length - 1];
          BB.to = oB.to, BB.vq.push(TB)
        } else IB.push({
          from: JB.from,
          to: oB.to,
          vq: [TB]
        });
        ZB = oB.number + 1
      }
      return IB
    }

    function jI(BB, IB, ZB) {
      if (BB.readOnly) return !1;
      let TB = [],
        JB = [];
      for (let oB of MI(BB)) {
        if (ZB ? oB.to == BB.doc.length : 0 == oB.from) continue;
        let IB = BB.doc.lineAt(ZB ? oB.to + 1 : oB.from - 1),
          vB = IB.length + 1;
        if (ZB) {
          TB.push({
            from: oB.to,
            to: IB.to
          }, {
            from: oB.from,
            insert: IB.text + BB.lineBreak
          });
          for (let IB of oB.vq) JB.push(GB.n.range(Math.min(BB.doc.length, IB.anchor + vB), Math.min(BB.doc.length, IB.head + vB)))
        } else {
          TB.push({
            from: IB.from,
            to: oB.from
          }, {
            from: oB.to,
            insert: BB.lineBreak + IB.text
          });
          for (let BB of oB.vq) JB.push(GB.n.range(BB.anchor - vB, BB.head - vB))
        }
      }
      return !!TB.length && (IB(BB.update({
        changes: TB,
        scrollIntoView: !0,
        selection: GB.n.create(JB, BB.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function PI(BB, IB, ZB) {
      if (BB.readOnly) return !1;
      let TB = [];
      for (let oB of MI(BB)) ZB ? TB.push({
        from: oB.from,
        insert: BB.doc.slice(oB.from, oB.to) + BB.lineBreak
      }) : TB.push({
        from: oB.to,
        insert: BB.lineBreak + BB.doc.slice(oB.from, oB.to)
      });
      let JB = BB.changes(TB);
      return IB(BB.update({
        changes: JB,
        selection: BB.selection.map(JB, ZB ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const RI = rI(!1);

    function rI(BB) {
      return IB => {
        let {
          state: ZB,
          dispatch: TB
        } = IB;
        if (ZB.readOnly) return !1;
        let JB = ZB.changeByRange((IB => {
          let {
            from: TB,
            to: JB
          } = IB, oB = ZB.doc.lineAt(TB), vB = !BB && TB == JB && function(BB, IB) {
            if (/\(\)|\[\]|\{\}/.test(BB.sliceDoc(IB - 1, IB + 1))) return {
              from: IB,
              to: IB
            };
            let ZB, TB = (0, kB.mb)(BB).resolveInner(IB),
              JB = TB.childBefore(IB),
              oB = TB.childAfter(IB);
            return JB && oB && JB.to <= IB && oB.from >= IB && (ZB = JB.type.prop(cB.i.closedBy)) && ZB.indexOf(oB.name) > -1 && BB.doc.lineAt(JB.to).from == BB.doc.lineAt(oB.from).from && !/\S/.test(BB.sliceDoc(JB.to, oB.from)) ? {
              from: JB.to,
              to: oB.from
            } : null
          }(ZB, TB);
          BB && (TB = JB = (JB <= oB.to ? oB : ZB.doc.lineAt(JB)).to);
          let nB = new kB.g(ZB, {
              simulateBreak: TB,
              simulateDoubleBreak: !!vB
            }),
            hB = (0, kB.R)(nB, TB);
          for (null == hB && (hB = (0, GB.X)(/^\s*/.exec(ZB.doc.lineAt(TB).text)[0], ZB.tabSize)); JB < oB.to && /\s/.test(oB.text[JB - oB.from]);) JB++;
          vB ? ({
            from: TB,
            to: JB
          } = vB) : TB > oB.from && TB < oB.from + 100 && !/\S/.test(oB.text.slice(0, TB)) && (TB = oB.from);
          let zB = ["", (0, kB.V)(ZB, hB)];
          return vB && zB.push((0, kB.V)(ZB, nB.lineIndent(oB.from, -1))), {
            changes: {
              from: TB,
              to: JB,
              insert: GB.O.of(zB)
            },
            range: GB.n.cursor(TB + 1 + zB[1].length)
          }
        }));
        return TB(ZB.update(JB, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function mI(BB, IB) {
      let ZB = -1;
      return BB.changeByRange((TB => {
        let JB = [];
        for (let GB = TB.from; GB <= TB.to;) {
          let oB = BB.doc.lineAt(GB);
          oB.number > ZB && (TB.empty || TB.to > oB.from) && (IB(oB, JB, TB), ZB = oB.number), GB = oB.to + 1
        }
        let oB = BB.changes(JB);
        return {
          changes: JB,
          range: GB.n.range(oB.mapPos(TB.anchor, 1), oB.mapPos(TB.head, 1))
        }
      }))
    }
    const XI = BB => {
        let {
          state: IB,
          dispatch: ZB
        } = BB;
        return !IB.readOnly && (ZB(IB.update(mI(IB, ((BB, ZB) => {
          ZB.push({
            from: BB.from,
            insert: IB.facet(kB.Y)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      LI = BB => {
        let {
          state: IB,
          dispatch: ZB
        } = BB;
        return !IB.readOnly && (ZB(IB.update(mI(IB, ((BB, ZB) => {
          let TB = /^\s*/.exec(BB.text)[0];
          if (!TB) return;
          let JB = (0, GB.X)(TB, IB.tabSize),
            oB = 0,
            vB = (0, kB.V)(IB, Math.max(0, JB - (0, kB.O)(IB)));
          for (; oB < TB.length && oB < vB.length && TB.charCodeAt(oB) == vB.charCodeAt(oB);) oB++;
          ZB.push({
            from: BB.from + oB,
            to: BB.from + TB.length,
            insert: vB.slice(oB)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      eI = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: BB => lB(BB, (IB => VB(BB.state, IB, !bB(BB)))),
        shift: BB => kI(BB, (IB => VB(BB.state, IB, !bB(BB))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: BB => lB(BB, (IB => VB(BB.state, IB, bB(BB)))),
        shift: BB => kI(BB, (IB => VB(BB.state, IB, bB(BB))))
      }, {
        key: "Alt-ArrowUp",
        run: BB => {
          let {
            state: IB,
            dispatch: ZB
          } = BB;
          return jI(IB, ZB, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: BB => {
          let {
            state: IB,
            dispatch: ZB
          } = BB;
          return PI(IB, ZB, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: BB => {
          let {
            state: IB,
            dispatch: ZB
          } = BB;
          return jI(IB, ZB, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: BB => {
          let {
            state: IB,
            dispatch: ZB
          } = BB;
          return PI(IB, ZB, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: BB => sI(BB, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: BB => sI(BB, !0)
      }, {
        key: "Escape",
        run: BB => {
          let {
            state: IB,
            dispatch: ZB
          } = BB, TB = IB.selection, JB = null;
          return TB.vq.length > 1 ? JB = GB.n.create([TB.main]) : TB.main.empty || (JB = GB.n.create([GB.n.cursor(TB.main.head)])), !!JB && (ZB(fB(IB, JB)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: rI(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: BB => {
          let {
            state: IB,
            dispatch: ZB
          } = BB, TB = MI(IB).map((BB => {
            let {
              from: ZB,
              to: TB
            } = BB;
            return GB.n.range(ZB, Math.min(TB + 1, IB.doc.length))
          }));
          return ZB(IB.update({
            selection: GB.n.create(TB),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: BB => {
          let {
            state: IB,
            dispatch: ZB
          } = BB, TB = uB(IB.selection, (BB => {
            let ZB = (0, kB.mb)(IB),
              TB = ZB.resolveStack(BB.from, 1);
            if (BB.empty) {
              let IB = ZB.resolveStack(BB.from, -1);
              IB.node.from >= TB.node.from && IB.node.to <= TB.node.to && (TB = IB)
            }
            for (let IB = TB; IB; IB = IB.next) {
              let {
                node: ZB
              } = IB;
              if ((ZB.from < BB.from && ZB.to >= BB.to || ZB.to > BB.to && ZB.from <= BB.from) && IB.next) return GB.n.range(ZB.to, ZB.from)
            }
            return BB
          }));
          return !TB.eq(IB.selection) && (ZB(fB(IB, TB)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: LI
      }, {
        key: "Mod-]",
        run: XI
      }, {
        key: "Mod-Alt-\\",
        run: BB => {
          let {
            state: IB,
            dispatch: ZB
          } = BB;
          if (IB.readOnly) return !1;
          let TB = Object.create(null),
            JB = new kB.g(IB, {
              overrideIndentation: BB => {
                let IB = TB[BB];
                return null == IB ? -1 : IB
              }
            }),
            oB = mI(IB, ((BB, ZB, oB) => {
              let GB = (0, kB.R)(JB, BB.from);
              if (null == GB) return;
              /\S/.test(BB.text) || (GB = 0);
              let vB = /^\s*/.exec(BB.text)[0],
                cB = (0, kB.V)(IB, GB);
              (vB != cB || oB.from < BB.from + vB.length) && (TB[BB.from] = GB, ZB.push({
                from: BB.from,
                to: BB.from + vB.length,
                insert: cB
              }))
            }));
          return oB.changes.empty || ZB(IB.update(oB, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: BB => {
          if (BB.state.readOnly) return !1;
          let {
            state: IB
          } = BB, ZB = IB.changes(MI(IB).map((BB => {
            let {
              from: ZB,
              to: TB
            } = BB;
            return ZB > 0 ? ZB-- : TB < IB.doc.length && TB++, {
              from: ZB,
              to: TB
            }
          }))), TB = uB(IB.selection, (IB => {
            let ZB;
            if (BB.lineWrapping) {
              let TB = BB.lineBlockAt(IB.head),
                JB = BB.coordsAtPos(IB.head, IB.assoc || 1);
              JB && (ZB = TB.bottom + BB.documentTop - JB.bottom + BB.defaultLineHeight / 2)
            }
            return BB.moveVertically(IB, !0, ZB)
          })).map(ZB);
          return BB.dispatch({
            changes: ZB,
            selection: TB,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: BB => {
          let {
            state: IB,
            dispatch: ZB
          } = BB;
          return vI(IB, ZB, !1)
        }
      }, {
        key: "Mod-/",
        run: BB => {
          let {
            state: IB
          } = BB, ZB = IB.doc.lineAt(IB.selection.main.from), TB = NB(BB.state, ZB.from);
          return TB.line ? hB(BB) : !!TB.block && FB(BB)
        }
      }, {
        key: "Alt-A",
        run: zB
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: BB => (BB.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: xB,
        shift: nI,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: BB => DB(BB, !bB(BB)),
        shift: BB => zI(BB, !bB(BB)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: BB => lB(BB, (IB => GI(BB, IB, !bB(BB)))),
        shift: BB => kI(BB, (IB => GI(BB, IB, !bB(BB)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: EB,
        shift: hI,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: BB => DB(BB, bB(BB)),
        shift: BB => zI(BB, bB(BB)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: BB => lB(BB, (IB => GI(BB, IB, bB(BB)))),
        shift: BB => kI(BB, (IB => GI(BB, IB, bB(BB)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: BI,
        shift: NI,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: WI,
        shift: CI
      }, {
        mac: "Ctrl-ArrowUp",
        run: JI,
        shift: yI
      }, {
        key: "ArrowDown",
        run: II,
        shift: gI,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: dI,
        shift: QI
      }, {
        mac: "Ctrl-ArrowDown",
        run: oI,
        shift: UI
      }, {
        key: "PageUp",
        run: JI,
        shift: yI
      }, {
        key: "PageDown",
        run: oI,
        shift: UI
      }, {
        key: "Home",
        run: BB => lB(BB, (IB => GI(BB, IB, !1))),
        shift: BB => kI(BB, (IB => GI(BB, IB, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: WI,
        shift: CI
      }, {
        key: "End",
        run: BB => lB(BB, (IB => GI(BB, IB, !0))),
        shift: BB => kI(BB, (IB => GI(BB, IB, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: dI,
        shift: QI
      }, {
        key: "Enter",
        run: RI,
        shift: RI
      }, {
        key: "Mod-a",
        run: BB => {
          let {
            state: IB,
            dispatch: ZB
          } = BB;
          return ZB(IB.update({
            selection: {
              anchor: 0,
              head: IB.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: iI,
        shift: iI,
        preventDefault: !0
      }, {
        key: "Delete",
        run: pI,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: HI,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: BB => aI(BB, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: BB => wI(BB, (IB => {
          let ZB = BB.moveToLineBoundary(IB, !1).head;
          return IB.head > ZB ? ZB : Math.max(0, IB.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: BB => wI(BB, (IB => {
          let ZB = BB.moveToLineBoundary(IB, !0).head;
          return IB.head < ZB ? ZB : Math.min(BB.state.doc.length, IB.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: xB,
        shift: nI,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: EB,
        shift: hI
      }, {
        key: "Ctrl-p",
        run: BI,
        shift: NI
      }, {
        key: "Ctrl-n",
        run: II,
        shift: gI
      }, {
        key: "Ctrl-a",
        run: BB => lB(BB, (IB => GB.n.cursor(BB.lineBlockAt(IB.head).from, 1))),
        shift: BB => kI(BB, (IB => GB.n.cursor(BB.lineBlockAt(IB.head).from)))
      }, {
        key: "Ctrl-e",
        run: BB => lB(BB, (IB => GB.n.cursor(BB.lineBlockAt(IB.head).to, -1))),
        shift: BB => kI(BB, (IB => GB.n.cursor(BB.lineBlockAt(IB.head).to)))
      }, {
        key: "Ctrl-d",
        run: pI
      }, {
        key: "Ctrl-h",
        run: iI
      }, {
        key: "Ctrl-k",
        run: BB => wI(BB, (IB => {
          let ZB = BB.lineBlockAt(IB.head).to;
          return IB.head < ZB ? ZB : Math.min(BB.state.doc.length, IB.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: HI
      }, {
        key: "Ctrl-o",
        run: BB => {
          let {
            state: IB,
            dispatch: ZB
          } = BB;
          if (IB.readOnly) return !1;
          let TB = IB.changeByRange((BB => ({
            changes: {
              from: BB.from,
              to: BB.to,
              insert: GB.O.of(["", ""])
            },
            range: GB.n.cursor(BB.from)
          })));
          return ZB(IB.update(TB, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: BB => {
          let {
            state: IB,
            dispatch: ZB
          } = BB;
          if (IB.readOnly) return !1;
          let TB = IB.changeByRange((BB => {
            if (!BB.empty || 0 == BB.from || BB.from == IB.doc.length) return {
              range: BB
            };
            let ZB = BB.from,
              TB = IB.doc.lineAt(ZB),
              JB = ZB == TB.from ? ZB - 1 : (0, GB._)(TB.text, ZB - TB.from, !1) + TB.from,
              oB = ZB == TB.to ? ZB + 1 : (0, GB._)(TB.text, ZB - TB.from, !0) + TB.from;
            return {
              changes: {
                from: JB,
                to: oB,
                insert: IB.doc.slice(ZB, oB).append(IB.doc.slice(JB, ZB))
              },
              range: GB.n.cursor(oB)
            }
          }));
          return !TB.changes.empty && (ZB(IB.update(TB, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: oI
      }].map((BB => ({
        mac: BB.key,
        run: BB.run,
        shift: BB.shift
      }))))),
      uI = {
        key: "Tab",
        run: XI,
        shift: LI
      };
    var fI = ZB(41394),
      lI = ZB(41339),
      AI = ZB(41397),
      tI = function(BB) {
        void 0 === BB && (BB = {});
        var {
          crosshairCursor: IB = !1
        } = BB, ZB = [];
        !1 !== BB.closeBracketsKeymap && (ZB = ZB.concat(lI.f)), !1 !== BB.defaultKeymap && (ZB = ZB.concat(eI)), !1 !== BB.searchKeymap && (ZB = ZB.concat(fI.g)), !1 !== BB.historyKeymap && (ZB = ZB.concat(eB)), !1 !== BB.foldKeymap && (ZB = ZB.concat(kB.I)), !1 !== BB.completionKeymap && (ZB = ZB.concat(lI.p)), !1 !== BB.lintKeymap && (ZB = ZB.concat(AI.c));
        var TB = [];
        return !1 !== BB.lineNumbers && TB.push((0, vB.U)()), !1 !== BB.highlightActiveLineGutter && TB.push((0, vB.G)()), !1 !== BB.highlightSpecialChars && TB.push((0, vB.N)()), !1 !== BB.history && TB.push(function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [QB, CB.of(BB), vB.i.domEventHandlers({
            beforeinput(BB, IB) {
              let ZB = "historyUndo" == BB.inputType ? wB : "historyRedo" == BB.inputType ? OB : null;
              return !!ZB && (BB.preventDefault(), ZB(IB))
            }
          })]
        }()), !1 !== BB.foldGutter && TB.push((0, kB.B)()), !1 !== BB.drawSelection && TB.push((0, vB.s)()), !1 !== BB.dropCursor && TB.push((0, vB.v)()), !1 !== BB.allowMultipleSelections && TB.push(GB.q.allowMultipleSelections.of(!0)), !1 !== BB.indentOnInput && TB.push((0, kB.U)()), !1 !== BB.syntaxHighlighting && TB.push((0, kB.gb)(kB.s, {
          fallback: !0
        })), !1 !== BB.bracketMatching && TB.push((0, kB.n)()), !1 !== BB.closeBrackets && TB.push((0, lI.h)()), !1 !== BB.autocompletion && TB.push((0, lI.b)()), !1 !== BB.rectangularSelection && TB.push((0, vB.$)()), !1 !== IB && TB.push((0, vB.r)()), !1 !== BB.highlightActiveLine && TB.push((0, vB.J)()), !1 !== BB.highlightSelectionMatches && TB.push((0, fI.d)()), BB.tabSize && "number" === typeof BB.tabSize && TB.push(kB.Y.of(" ".repeat(BB.tabSize))), TB.concat([vB.Q.of(ZB.flat())]).filter(Boolean)
      },
      bI = ZB(41379);
    const xI = "#e5c07b",
      EI = "#e06c75",
      DI = "#56b6c2",
      KI = "#ffffff",
      VI = "#abb2bf",
      SI = "#7d8799",
      BZ = "#61afef",
      IZ = "#98c379",
      ZZ = "#d19a66",
      TZ = "#c678dd",
      JZ = "#21252b",
      oZ = "#2c313a",
      GZ = "#282c34",
      vZ = "#353a42",
      kZ = "#3E4451",
      cZ = "#528bff",
      nZ = vB.i.theme({
        "&": {
          color: VI,
          backgroundColor: GZ
        },
        ".cm-content": {
          caretColor: cZ
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: cZ
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: kZ
        },
        ".cm-panels": {
          backgroundColor: JZ,
          color: VI
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
          backgroundColor: GZ,
          color: SI,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: oZ
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: vZ
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: vZ,
          borderBottomColor: vZ
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: oZ,
            color: VI
          }
        }
      }, {
        dark: !0
      }),
      hZ = kB.c.define([{
        tag: bI.l.keyword,
        color: TZ
      }, {
        tag: [bI.l.name, bI.l.deleted, bI.l.character, bI.l.propertyName, bI.l.macroName],
        color: EI
      }, {
        tag: [bI.l.function(bI.l.variableName), bI.l.labelName],
        color: BZ
      }, {
        tag: [bI.l.color, bI.l.constant(bI.l.name), bI.l.standard(bI.l.name)],
        color: ZZ
      }, {
        tag: [bI.l.definition(bI.l.name), bI.l.separator],
        color: VI
      }, {
        tag: [bI.l.typeName, bI.l.className, bI.l.number, bI.l.changed, bI.l.annotation, bI.l.modifier, bI.l.self, bI.l.namespace],
        color: xI
      }, {
        tag: [bI.l.operator, bI.l.operatorKeyword, bI.l.url, bI.l.escape, bI.l.regexp, bI.l.link, bI.l.special(bI.l.string)],
        color: DI
      }, {
        tag: [bI.l.meta, bI.l.comment],
        color: SI
      }, {
        tag: bI.l.strong,
        fontWeight: "bold"
      }, {
        tag: bI.l.emphasis,
        fontStyle: "italic"
      }, {
        tag: bI.l.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: bI.l.link,
        color: SI,
        textDecoration: "underline"
      }, {
        tag: bI.l.heading,
        fontWeight: "bold",
        color: EI
      }, {
        tag: [bI.l.atom, bI.l.bool, bI.l.special(bI.l.variableName)],
        color: ZZ
      }, {
        tag: [bI.l.processingInstruction, bI.l.string, bI.l.inserted],
        color: IZ
      }, {
        tag: bI.l.invalid,
        color: KI
      }]),
      zZ = [nZ, (0, kB.gb)(hZ)];
    var FZ = vB.i.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class NZ {
      constructor(BB, IB) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = IB, this.timeoutMS = IB, this.callbacks.push(BB)
      }
      Iz() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var BB = this.callbacks.slice();
          this.callbacks.length = 0, BB.forEach((BB => {
            try {
              BB()
            } catch (IB) {
              console.error("TimeoutLatch callback error:", IB)
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
    class gZ {
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
            BB.Iz(), BB.isDone && this.remove(BB)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var qZ = null,
      yZ = GB.d.define(),
      UZ = [];

    function WZ(BB) {
      var {
        value: IB,
        selection: ZB,
        onChange: TB,
        onStatistics: JB,
        onCreateEditor: kB,
        onUpdate: cB,
        extensions: nB = UZ,
        autoFocus: hB,
        theme: zB = "light",
        height: FB = null,
        minHeight: NB = null,
        maxHeight: gB = null,
        width: qB = null,
        minWidth: yB = null,
        maxWidth: UB = null,
        placeholder: WB = "",
        editable: dB = !0,
        readOnly: CB = !1,
        indentWithTab: QB = !0,
        basicSetup: sB = !0,
        root: wB,
        initialState: OB
      } = BB, [YB, iB] = (0, oB.useState)(), [pB, aB] = (0, oB.useState)(), [HB, MB] = (0, oB.useState)(), jB = (0, oB.useState)((() => ({
        current: null
      })))[0], PB = (0, oB.useState)((() => ({
        current: null
      })))[0], RB = vB.i.theme({
        "&": {
          height: FB,
          minHeight: NB,
          maxHeight: gB,
          width: qB,
          minWidth: yB,
          maxWidth: UB
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), rB = vB.i.updateListener.of((BB => {
        if (BB.docChanged && "function" === typeof TB && !BB.transactions.some((BB => BB.annotation(yZ)))) {
          jB.current ? jB.current.reset() : (jB.current = new NZ((() => {
            if (PB.current) {
              var BB = PB.current;
              PB.current = null, BB()
            }
            jB.current = null
          }), 200), ("undefined" === typeof window ? new gZ : (qZ || (qZ = new gZ), qZ)).add(jB.current));
          var IB = BB.state.doc.toString();
          TB(IB, BB)
        }
        JB && JB((BB => ({
          line: BB.state.doc.lineAt(BB.state.selection.main.from),
          lineCount: BB.state.doc.lines,
          lineBreak: BB.state.lineBreak,
          length: BB.state.doc.length,
          readOnly: BB.state.readOnly,
          tabSize: BB.state.tabSize,
          selection: BB.state.selection,
          selectionAsSingle: BB.state.selection.asSingle().main,
          vq: BB.state.selection.vq,
          selectionCode: BB.state.sliceDoc(BB.state.selection.main.from, BB.state.selection.main.to),
          selections: BB.state.selection.vq.map((IB => BB.state.sliceDoc(IB.from, IB.to))),
          selectedText: BB.state.selection.vq.some((BB => !BB.empty))
        }))(BB))
      })), mB = function(BB) {
        void 0 === BB && (BB = {});
        var {
          indentWithTab: IB = !0,
          editable: ZB = !0,
          readOnly: TB = !1,
          theme: JB = "light",
          placeholder: oB = "",
          basicSetup: kB = !0
        } = BB, cB = [];
        switch (IB && cB.unshift(vB.Q.of([uI])), kB && ("boolean" === typeof kB ? cB.unshift(tI()) : cB.unshift(tI(kB))), oB && cB.unshift((0, vB.X)(oB)), JB) {
          case "light":
            cB.push(FZ);
            break;
          case "dark":
            cB.push(zZ);
            break;
          case "none":
            break;
          default:
            cB.push(JB)
        }
        return !1 === ZB && cB.push(vB.i.editable.of(!1)), TB && cB.push(GB.q.readOnly.of(!0)), [...cB]
      }({
        theme: zB,
        editable: dB,
        readOnly: CB,
        placeholder: WB,
        indentWithTab: QB,
        basicSetup: sB
      }), XB = [rB, RB, ...mB];
      return cB && "function" === typeof cB && XB.push(vB.i.updateListener.of(cB)), XB = XB.concat(nB), (0, oB.useLayoutEffect)((() => {
        if (YB && !HB) {
          var BB = {
              doc: IB,
              selection: ZB,
              extensions: XB
            },
            TB = OB ? GB.q.fromJSON(OB.json, BB, OB.fields) : GB.q.create(BB);
          if (MB(TB), !pB) {
            var JB = new vB.i({
              state: TB,
              parent: YB,
              root: wB
            });
            aB(JB), kB && kB(JB, TB)
          }
        }
        return () => {
          pB && (MB(void 0), aB(void 0))
        }
      }), [YB, HB]), (0, oB.useEffect)((() => {
        BB.container && iB(BB.container)
      }), [BB.container]), (0, oB.useEffect)((() => () => {
        pB && (pB.destroy(), aB(void 0)), jB.current && (jB.current.cancel(), jB.current = null)
      }), [pB]), (0, oB.useEffect)((() => {
        hB && pB && pB.focus()
      }), [hB, pB]), (0, oB.useEffect)((() => {
        pB && pB.dispatch({
          effects: GB.K.reconfigure.of(XB)
        })
      }), [zB, nB, FB, NB, gB, qB, yB, UB, WB, dB, CB, QB, sB, TB, cB]), (0, oB.useEffect)((() => {
        if (void 0 !== IB) {
          var BB = pB ? pB.state.doc.toString() : "";
          if (pB && IB !== BB) {
            var ZB = () => {
              pB && IB !== pB.state.doc.toString() && pB.dispatch({
                changes: {
                  from: 0,
                  to: pB.state.doc.toString().length,
                  insert: IB || ""
                },
                annotations: [yZ.of(!0)]
              })
            };
            jB.current && !jB.current.isDone ? PB.current = ZB : ZB()
          }
        }
      }), [IB, pB]), {
        state: HB,
        setState: MB,
        view: pB,
        setView: aB,
        container: YB,
        setContainer: iB
      }
    }
    var dZ = ZB(1153),
      CZ = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      QZ = (0, oB.forwardRef)(((BB, IB) => {
        var {
          className: ZB,
          value: GB = "",
          selection: vB,
          extensions: kB = [],
          onChange: cB,
          onStatistics: nB,
          onCreateEditor: hB,
          onUpdate: zB,
          autoFocus: FB,
          theme: NB = "light",
          height: gB,
          minHeight: qB,
          maxHeight: yB,
          width: UB,
          minWidth: WB,
          maxWidth: dB,
          basicSetup: CB,
          placeholder: QB,
          indentWithTab: sB,
          editable: wB,
          readOnly: OB,
          root: YB,
          initialState: iB
        } = BB, pB = (0, JB.c)(BB, CZ), aB = (0, oB.useRef)(null), {
          state: HB,
          view: MB,
          container: jB,
          setContainer: PB
        } = WZ({
          root: YB,
          value: GB,
          autoFocus: FB,
          theme: NB,
          height: gB,
          minHeight: qB,
          maxHeight: yB,
          width: UB,
          minWidth: WB,
          maxWidth: dB,
          basicSetup: CB,
          placeholder: QB,
          indentWithTab: sB,
          editable: wB,
          readOnly: OB,
          selection: vB,
          onChange: cB,
          onStatistics: nB,
          onCreateEditor: hB,
          onUpdate: zB,
          extensions: kB,
          initialState: iB
        });
        (0, oB.useImperativeHandle)(IB, (() => ({
          editor: aB.current,
          state: HB,
          view: MB
        })), [aB, jB, HB, MB]);
        var RB = (0, oB.useCallback)((BB => {
          aB.current = BB, PB(BB)
        }), [PB]);
        if ("string" !== typeof GB) throw new Error("value must be typeof string but got " + typeof GB);
        var rB = "string" === typeof NB ? "cm-theme-" + NB : "cm-theme";
        return (0, dZ.jsx)("div", (0, TB.b)({
          ref: RB,
          className: rB + (ZB ? " " + ZB : "")
        }, pB))
      }));
    QZ.displayName = "CodeMirror";
    const sZ = QZ
  },
  41364: (BB, IB, ZB) => {
    function TB() {
      var BB = arguments[0];
      "string" == typeof BB && (BB = document.createElement(BB));
      var IB = 1,
        ZB = arguments[1];
      if (ZB && "object" == typeof ZB && null == ZB.nodeType && !Array.isArray(ZB)) {
        for (var TB in ZB)
          if (Object.prototype.hasOwnProperty.call(ZB, TB)) {
            var oB = ZB[TB];
            "string" == typeof oB ? BB.setAttribute(TB, oB) : null != oB && (BB[TB] = oB)
          } IB++
      }
      for (; IB < arguments.length; IB++) JB(BB, arguments[IB]);
      return BB
    }

    function JB(BB, IB) {
      if ("string" == typeof IB) BB.appendChild(document.createTextNode(IB));
      else if (null == IB);
      else if (null != IB.nodeType) BB.appendChild(IB);
      else {
        if (!Array.isArray(IB)) throw new RangeError("Unsupported child node: " + IB);
        for (var ZB = 0; ZB < IB.length; ZB++) JB(BB, IB[ZB])
      }
    }
    ZB.d(IB, {
      e: () => TB
    })
  },
  41358: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => GB
    });
    const TB = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      JB = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      oB = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class GB {
      constructor(BB, IB) {
        this.rules = [];
        let {
          finish: ZB
        } = IB || {};

        function TB(BB) {
          return /^@/.test(BB) ? [BB] : BB.split(/,\s*/)
        }

        function JB(BB, IB, oB, GB) {
          let vB = [],
            kB = /^@(\w+)\b/.exec(BB[0]),
            cB = kB && "keyframes" == kB[1];
          if (kB && null == IB) return oB.push(BB[0] + ";");
          for (let ZB in IB) {
            let GB = IB[ZB];
            if (/&/.test(ZB)) JB(ZB.split(/,\s*/).map((IB => BB.map((BB => IB.replace(/&/, BB))))).reduce(((BB, IB) => BB.concat(IB))), GB, oB);
            else if (GB && "object" == typeof GB) {
              if (!kB) throw new RangeError("The value of a property (" + ZB + ") should be a primitive value.");
              JB(TB(ZB), GB, vB, cB)
            } else null != GB && vB.push(ZB.replace(/_.*/, "").replace(/[A-Z]/g, (BB => "-" + BB.toLowerCase())) + ": " + GB + ";")
          }(vB.length || cB) && oB.push((!ZB || kB || GB ? BB : BB.map(ZB)).join(", ") + " {" + vB.join(" ") + "}")
        }
        for (let oB in BB) JB(TB(oB), BB[oB], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let BB = oB[TB] || 1;
        return oB[TB] = BB + 1, "\u037c" + BB.toString(36)
      }
      static mount(BB, IB, ZB) {
        let TB = BB[JB],
          oB = ZB && ZB.nonce;
        TB ? oB && TB.setNonce(oB) : TB = new kB(BB, oB), TB.mount(Array.isArray(IB) ? IB : [IB], BB)
      }
    }
    let vB = new Map;
    class kB {
      constructor(BB, IB) {
        let ZB = BB.ownerDocument || BB,
          TB = ZB.defaultView;
        if (!BB.head && BB.adoptedStyleSheets && TB.CSSStyleSheet) {
          let IB = vB.get(ZB);
          if (IB) return BB[JB] = IB;
          this.sheet = new TB.CSSStyleSheet, vB.set(ZB, this)
        } else this.styleTag = ZB.createElement("style"), IB && this.styleTag.setAttribute("nonce", IB);
        this.modules = [], BB[JB] = this
      }
      mount(BB, IB) {
        let ZB = this.sheet,
          TB = 0,
          JB = 0;
        for (let oB = 0; oB < BB.length; oB++) {
          let IB = BB[oB],
            GB = this.modules.indexOf(IB);
          if (GB < JB && GB > -1 && (this.modules.splice(GB, 1), JB--, GB = -1), -1 == GB) {
            if (this.modules.splice(JB++, 0, IB), ZB)
              for (let BB = 0; BB < IB.rules.length; BB++) ZB.insertRule(IB.rules[BB], TB++)
          } else {
            for (; JB < GB;) TB += this.modules[JB++].rules.length;
            TB += IB.rules.length, JB++
          }
        }
        if (ZB) IB.adoptedStyleSheets.indexOf(this.sheet) < 0 && (IB.adoptedStyleSheets = [this.sheet, ...IB.adoptedStyleSheets]);
        else {
          let BB = "";
          for (let IB = 0; IB < this.modules.length; IB++) BB += this.modules[IB].getRules() + "\n";
          this.styleTag.textContent = BB;
          let ZB = IB.head || IB;
          this.styleTag.parentNode != ZB && ZB.insertBefore(this.styleTag, ZB.firstChild)
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