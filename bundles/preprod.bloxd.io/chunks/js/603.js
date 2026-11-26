export const id = 603;
export const ids = [603];
export const modules = {
  44467: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => FO,
      g: () => UO,
      k: () => RO,
      m: () => yB,
      n: () => iO,
      o: () => JB,
      s: () => zO
    });
    var YB = GB(44470),
      DB = GB(44474),
      QB = GB(44485);
    class oB {
      constructor(BB, OB, GB, YB) {
        this.state = BB, this.pos = OB, this.explicit = GB, this.view = YB, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(BB) {
        let OB = (0, QB.pb)(this.state).resolveInner(this.pos, -1);
        for (; OB && BB.indexOf(OB.name) < 0;) OB = OB.parent;
        return OB ? {
          from: OB.from,
          to: this.pos,
          text: this.state.sliceDoc(OB.from, this.pos),
          type: OB.type
        } : null
      }
      matchBefore(BB) {
        let OB = this.state.doc.lineAt(this.pos),
          GB = Math.max(OB.from, this.pos - 250),
          YB = OB.text.slice(GB - OB.from, this.pos - OB.from),
          DB = YB.search(zB(BB, !1));
        return DB < 0 ? null : {
          from: GB + DB,
          to: this.pos,
          text: YB.slice(DB)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(BB, OB, GB) {
        "abort" == BB && this.abortListeners && (this.abortListeners.push(OB), GB && GB.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function jB(BB) {
      let OB = Object.keys(BB).join(""),
        GB = /\w/.test(OB);
      return GB && (OB = OB.replace(/\w/g, "")), `[${GB?"\\w":""}${OB.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function yB(BB) {
      let OB = BB.map((BB => "string" == typeof BB ? {
          label: BB
        } : BB)),
        [GB, YB] = OB.every((BB => /^\w+$/.test(BB.label))) ? [/\w*$/, /\w+$/] : function(BB) {
          let OB = Object.create(null),
            GB = Object.create(null);
          for (let {
              label: DB
            }
            of BB) {
            OB[DB[0]] = !0;
            for (let BB = 1; BB < DB.length; BB++) GB[DB[BB]] = !0
          }
          let YB = jB(OB) + jB(GB) + "*$";
          return [new RegExp("^" + YB), new RegExp(YB)]
        }(OB);
      return BB => {
        let DB = BB.matchBefore(YB);
        return DB || BB.explicit ? {
          from: DB ? DB.from : BB.pos,
          options: OB,
          validFor: GB
        } : null
      }
    }

    function JB(BB, OB) {
      return GB => {
        for (let OB = (0, QB.pb)(GB.state).resolveInner(GB.pos, -1); OB; OB = OB.parent) {
          if (BB.indexOf(OB.name) > -1) return null;
          if (OB.type.isTop) break
        }
        return OB(GB)
      }
    }
    class MB {
      constructor(BB, OB, GB, YB) {
        this.completion = BB, this.source = OB, this.match = GB, this.score = YB
      }
    }

    function PB(BB) {
      return BB.selection.main.from
    }

    function zB(BB, OB) {
      var GB;
      let {
        source: YB
      } = BB, DB = OB && "^" != YB[0], QB = "$" != YB[YB.length - 1];
      return DB || QB ? new RegExp(`${DB?"^":""}(?:${YB})${QB?"$":""}`, null !== (GB = BB.flags) && void 0 !== GB ? GB : BB.ignoreCase ? "i" : "") : BB
    }
    const lB = YB.b.define();

    function pB(BB, OB, GB, DB) {
      let {
        main: QB
      } = BB.selection, oB = GB - QB.from, jB = DB - QB.from;
      return {
        ...BB.changeByRange((yB => {
          if (yB != QB && GB != DB && BB.sliceDoc(yB.from + oB, yB.from + jB) != BB.sliceDoc(GB, DB)) return {
            range: yB
          };
          let JB = BB.toText(OB);
          return {
            changes: {
              from: yB.from + oB,
              to: DB == QB.from ? yB.to : yB.from + jB,
              insert: JB
            },
            range: YB.j.cursor(yB.from + oB + JB.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const qB = new WeakMap;

    function ZB(BB) {
      if (!Array.isArray(BB)) return BB;
      let OB = qB.get(BB);
      return OB || qB.set(BB, OB = yB(BB)), OB
    }
    const NB = YB.D.define(),
      RB = YB.D.define();
    class WB {
      constructor(BB) {
        this.pattern = BB, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let OB = 0; OB < BB.length;) {
          let GB = (0, YB.O)(BB, OB),
            DB = (0, YB.R)(GB);
          this.chars.push(GB);
          let QB = BB.slice(OB, OB + DB),
            oB = QB.toUpperCase();
          this.folded.push((0, YB.O)(oB == QB ? QB.toLowerCase() : oB, 0)), OB += DB
        }
        this.astral = BB.length != this.chars.length
      }
      ret(BB, OB) {
        return this.score = BB, this.matched = OB, this
      }
      match(BB) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (BB.length < this.pattern.length) return null;
        let {
          chars: OB,
          folded: GB,
          any: DB,
          precise: QB,
          byWord: oB
        } = this;
        if (1 == OB.length) {
          let DB = (0, YB.O)(BB, 0),
            QB = (0, YB.R)(DB),
            oB = QB == BB.length ? 0 : -100;
          if (DB == OB[0]);
          else {
            if (DB != GB[0]) return null;
            oB += -200
          }
          return this.ret(oB, [0, QB])
        }
        let jB = BB.indexOf(this.pattern);
        if (0 == jB) return this.ret(BB.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let yB = OB.length,
          JB = 0;
        if (jB < 0) {
          for (let QB = 0, oB = Math.min(BB.length, 200); QB < oB && JB < yB;) {
            let oB = (0, YB.O)(BB, QB);
            oB != OB[JB] && oB != GB[JB] || (DB[JB++] = QB), QB += (0, YB.R)(oB)
          }
          if (JB < yB) return null
        }
        let MB = 0,
          PB = 0,
          zB = !1,
          lB = 0,
          pB = -1,
          qB = -1,
          ZB = /[a-z]/.test(BB),
          NB = !0;
        for (let RB = 0, WB = Math.min(BB.length, 200), AB = 0; RB < WB && PB < yB;) {
          let DB = (0, YB.O)(BB, RB);
          jB < 0 && (MB < yB && DB == OB[MB] && (QB[MB++] = RB), lB < yB && (DB == OB[lB] || DB == GB[lB] ? (0 == lB && (pB = RB), qB = RB + 1, lB++) : lB = 0));
          let JB, WB = DB < 255 ? DB >= 48 && DB <= 57 || DB >= 97 && DB <= 122 ? 2 : DB >= 65 && DB <= 90 ? 1 : 0 : (JB = (0, YB.bb)(DB)) != JB.toLowerCase() ? 1 : JB != JB.toUpperCase() ? 2 : 0;
          (!RB || 1 == WB && ZB || 0 == AB && 0 != WB) && (OB[PB] == DB || GB[PB] == DB && (zB = !0) ? oB[PB++] = RB : oB.length && (NB = !1)), AB = WB, RB += (0, YB.R)(DB)
        }
        return PB == yB && 0 == oB[0] && NB ? this.result((zB ? -200 : 0) - 100, oB, BB) : lB == yB && 0 == pB ? this.ret(-200 - BB.length + (qB == BB.length ? 0 : -100), [0, qB]) : jB > -1 ? this.ret(-700 - BB.length, [jB, jB + this.pattern.length]) : lB == yB ? this.ret(-900 - BB.length, [pB, qB]) : PB == yB ? this.result((zB ? -200 : 0) - 100 - 700 + (NB ? 0 : -1100), oB, BB) : 2 == OB.length ? null : this.result((DB[0] ? -700 : 0) - 200 - 1100, DB, BB)
      }
      result(BB, OB, GB) {
        let DB = [],
          QB = 0;
        for (let oB of OB) {
          let BB = oB + (this.astral ? (0, YB.R)((0, YB.O)(GB, oB)) : 1);
          QB && DB[QB - 1] == oB ? DB[QB - 1] = BB : (DB[QB++] = oB, DB[QB++] = BB)
        }
        return this.ret(BB - GB.length, DB)
      }
    }
    class AB {
      constructor(BB) {
        this.pattern = BB, this.matched = [], this.score = 0, this.folded = BB.toLowerCase()
      }
      match(BB) {
        if (BB.length < this.pattern.length) return null;
        let OB = BB.slice(0, this.pattern.length),
          GB = OB == this.pattern ? 0 : OB.toLowerCase() == this.folded ? -200 : null;
        return null == GB ? null : (this.matched = [0, OB.length], this.score = GB + (BB.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const VB = YB.o.define({
      combine: BB => (0, YB.V)(BB, {
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
        positionInfo: nB,
        filterStrict: !1,
        compareCompletions: (BB, OB) => (BB.sortText || BB.label).localeCompare(OB.sortText || OB.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (BB, OB) => BB && OB,
        closeOnBlur: (BB, OB) => BB && OB,
        icons: (BB, OB) => BB && OB,
        tooltipClass: (BB, OB) => GB => SB(BB(GB), OB(GB)),
        optionClass: (BB, OB) => GB => SB(BB(GB), OB(GB)),
        addToOptions: (BB, OB) => BB.concat(OB),
        filterStrict: (BB, OB) => BB || OB
      })
    });

    function SB(BB, OB) {
      return BB ? OB ? BB + " " + OB : BB : OB
    }

    function nB(BB, OB, GB, YB, QB, oB) {
      let jB, yB, JB = BB.textDirection == DB.f.RTL,
        MB = JB,
        PB = !1,
        zB = "top",
        lB = OB.left - QB.left,
        pB = QB.right - OB.right,
        qB = YB.right - YB.left,
        ZB = YB.bottom - YB.top;
      if (MB && lB < Math.min(qB, pB) ? MB = !1 : !MB && pB < Math.min(qB, lB) && (MB = !0), qB <= (MB ? lB : pB)) jB = Math.max(QB.top, Math.min(GB.top, QB.bottom - ZB)) - OB.top, yB = Math.min(400, MB ? lB : pB);
      else {
        PB = !0, yB = Math.min(400, (JB ? OB.right : QB.right - OB.left) - 30);
        let BB = QB.bottom - OB.bottom;
        BB >= ZB || BB > OB.top ? jB = GB.bottom - OB.top : (zB = "bottom", jB = OB.bottom - GB.top)
      }
      return {
        style: `${zB}: ${jB/((OB.bottom-OB.top)/oB.offsetHeight)}px; max-width: ${yB/((OB.right-OB.left)/oB.offsetWidth)}px`,
        class: "cm-completionInfo-" + (PB ? JB ? "left-narrow" : "right-narrow" : MB ? "left" : "right")
      }
    }
    const UB = YB.D.define();

    function fB(BB, OB, GB) {
      if (BB <= GB) return {
        from: 0,
        to: BB
      };
      if (OB < 0 && (OB = 0), OB <= BB >> 1) {
        let BB = Math.floor(OB / GB);
        return {
          from: BB * GB,
          to: (BB + 1) * GB
        }
      }
      let YB = Math.floor((BB - OB) / GB);
      return {
        from: BB - (YB + 1) * GB,
        to: BB - YB * GB
      }
    }
    class kB {
      constructor(BB, OB, GB) {
        this.view = BB, this.stateField = OB, this.applyCompletion = GB, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: BB => this.placeInfo(BB),
          key: this
        }, this.space = null, this.currentClass = "";
        let YB = BB.state.field(OB),
          {
            options: DB,
            selected: QB
          } = YB.open,
          oB = BB.state.facet(VB);
        this.optionContent = function(BB) {
          let OB = BB.addToOptions.slice();
          return BB.icons && OB.push({
            render(BB) {
              let OB = document.createElement("div");
              return OB.classList.add("cm-completionIcon"), BB.type && OB.classList.add(...BB.type.split(/\s+/g).map((BB => "cm-completionIcon-" + BB))), OB.setAttribute("aria-hidden", "true"), OB
            },
            position: 20
          }), OB.push({
            render(BB, OB, GB, YB) {
              let DB = document.createElement("span");
              DB.className = "cm-completionLabel";
              let QB = BB.displayLabel || BB.label,
                oB = 0;
              for (let jB = 0; jB < YB.length;) {
                let BB = YB[jB++],
                  OB = YB[jB++];
                BB > oB && DB.appendChild(document.createTextNode(QB.slice(oB, BB)));
                let GB = DB.appendChild(document.createElement("span"));
                GB.appendChild(document.createTextNode(QB.slice(BB, OB))), GB.className = "cm-completionMatchedText", oB = OB
              }
              return oB < QB.length && DB.appendChild(document.createTextNode(QB.slice(oB))), DB
            },
            position: 50
          }, {
            render(BB) {
              if (!BB.detail) return null;
              let OB = document.createElement("span");
              return OB.className = "cm-completionDetail", OB.textContent = BB.detail, OB
            },
            position: 80
          }), OB.sort(((BB, OB) => BB.position - OB.position)).map((BB => BB.render))
        }(oB), this.optionClass = oB.optionClass, this.tooltipClass = oB.tooltipClass, this.range = fB(DB.length, QB, oB.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(BB.state), this.dom.addEventListener("mousedown", (GB => {
          let {
            options: YB
          } = BB.state.field(OB).open;
          for (let OB, DB = GB.target; DB && DB != this.dom; DB = DB.parentNode)
            if ("LI" == DB.nodeName && (OB = /-(\d+)$/.exec(DB.id)) && +OB[1] < YB.length) return this.applyCompletion(BB, YB[+OB[1]]), void GB.preventDefault();
          if (GB.target == this.list) {
            let OB = this.list.classList.contains("cm-completionListIncompleteTop") && GB.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && GB.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != OB && (BB.dispatch({
              effects: UB.of(OB)
            }), GB.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (OB => {
          let GB = BB.state.field(this.stateField, !1);
          GB && GB.tooltip && BB.state.facet(VB).closeOnBlur && OB.relatedTarget != BB.contentDOM && BB.dispatch({
            effects: RB.of(null)
          })
        })), this.showOptions(DB, YB.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(BB, OB) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(BB, OB, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(BB) {
        var OB;
        let GB = BB.state.field(this.stateField),
          YB = BB.startState.field(this.stateField);
        if (this.updateTooltipClass(BB.state), GB != YB) {
          let {
            options: DB,
            selected: QB,
            disabled: oB
          } = GB.open;
          YB.open && YB.open.options == DB || (this.range = fB(DB.length, QB, BB.state.facet(VB).maxRenderedOptions), this.showOptions(DB, GB.id)), this.updateSel(), oB != (null === (OB = YB.open) || void 0 === OB ? void 0 : OB.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!oB)
        }
      }
      updateTooltipClass(BB) {
        let OB = this.tooltipClass(BB);
        if (OB != this.currentClass) {
          for (let BB of this.currentClass.split(" ")) BB && this.dom.classList.remove(BB);
          for (let BB of OB.split(" ")) BB && this.dom.classList.add(BB);
          this.currentClass = OB
        }
      }
      positioned(BB) {
        this.space = BB, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let BB = this.view.state.field(this.stateField),
          OB = BB.open;
        (OB.selected > -1 && OB.selected < this.range.from || OB.selected >= this.range.to) && (this.range = fB(OB.options.length, OB.selected, this.view.state.facet(VB).maxRenderedOptions), this.showOptions(OB.options, BB.id));
        let GB = this.updateSelectedOption(OB.selected);
        if (GB) {
          this.destroyInfo();
          let {
            completion: YB
          } = OB.options[OB.selected], {
            info: QB
          } = YB;
          if (!QB) return;
          let oB = "string" === typeof QB ? document.createTextNode(QB) : QB(YB);
          if (!oB) return;
          "then" in oB ? oB.then((OB => {
            OB && this.view.state.field(this.stateField, !1) == BB && this.addInfoPane(OB, YB)
          })).catch((BB => (0, DB.X)(this.view.state, BB, "completion info"))) : (this.addInfoPane(oB, YB), GB.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(BB, OB) {
        this.destroyInfo();
        let GB = this.info = document.createElement("div");
        if (GB.className = "cm-tooltip cm-completionInfo", GB.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != BB.nodeType) GB.appendChild(BB), this.infoDestroy = null;
        else {
          let {
            dom: OB,
            destroy: YB
          } = BB;
          GB.appendChild(OB), this.infoDestroy = YB || null
        }
        this.dom.appendChild(GB), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(BB) {
        let OB = null;
        for (let GB = this.list.firstChild, YB = this.range.from; GB; GB = GB.nextSibling, YB++) "LI" == GB.nodeName && GB.id ? YB == BB ? GB.hasAttribute("aria-selected") || (GB.setAttribute("aria-selected", "true"), OB = GB) : GB.hasAttribute("aria-selected") && (GB.removeAttribute("aria-selected"), GB.removeAttribute("aria-describedby")) : YB--;
        return OB && function(BB, OB) {
          let GB = BB.getBoundingClientRect(),
            YB = OB.getBoundingClientRect(),
            DB = GB.height / BB.offsetHeight;
          YB.top < GB.top ? BB.scrollTop -= (GB.top - YB.top) / DB : YB.bottom > GB.bottom && (BB.scrollTop += (YB.bottom - GB.bottom) / DB)
        }(this.list, OB), OB
      }
      measureInfo() {
        let BB = this.dom.querySelector("[aria-selected]");
        if (!BB || !this.info) return null;
        let OB = this.dom.getBoundingClientRect(),
          GB = this.info.getBoundingClientRect(),
          YB = BB.getBoundingClientRect(),
          DB = this.space;
        if (!DB) {
          let BB = this.dom.ownerDocument.documentElement;
          DB = {
            left: 0,
            top: 0,
            right: BB.clientWidth,
            bottom: BB.clientHeight
          }
        }
        return YB.top > Math.min(DB.bottom, OB.bottom) - 10 || YB.bottom < Math.max(DB.top, OB.top) + 10 ? null : this.view.state.facet(VB).positionInfo(this.view, OB, YB, GB, DB, this.dom)
      }
      placeInfo(BB) {
        this.info && (BB ? (BB.style && (this.info.style.cssText = BB.style), this.info.className = "cm-tooltip cm-completionInfo " + (BB.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(BB, OB, GB) {
        const YB = document.createElement("ul");
        YB.id = OB, YB.setAttribute("role", "listbox"), YB.setAttribute("aria-expanded", "true"), YB.setAttribute("aria-label", this.view.state.phrase("Completions")), YB.addEventListener("mousedown", (BB => {
          BB.target == YB && BB.preventDefault()
        }));
        let DB = null;
        for (let QB = GB.from; QB < GB.to; QB++) {
          let {
            completion: oB,
            match: jB
          } = BB[QB], {
            section: yB
          } = oB;
          if (yB) {
            let BB = "string" == typeof yB ? yB : yB.name;
            if (BB != DB && (QB > GB.from || 0 == GB.from))
              if (DB = BB, "string" != typeof yB && yB.header) YB.appendChild(yB.header(yB));
              else {
                YB.appendChild(document.createElement("completion-section")).textContent = BB
              }
          }
          const JB = YB.appendChild(document.createElement("li"));
          JB.id = OB + "-" + QB, JB.setAttribute("role", "option");
          let MB = this.optionClass(oB);
          MB && (JB.className = MB);
          for (let BB of this.optionContent) {
            let OB = BB(oB, this.view.state, this.view, jB);
            OB && JB.appendChild(OB)
          }
        }
        return GB.from && YB.classList.add("cm-completionListIncompleteTop"), GB.to < BB.length && YB.classList.add("cm-completionListIncompleteBottom"), YB
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function dB(BB, OB) {
      return GB => new kB(GB, BB, OB)
    }

    function KB(BB) {
      return 100 * (BB.boost || 0) + (BB.apply ? 10 : 0) + (BB.info ? 5 : 0) + (BB.type ? 1 : 0)
    }
    class uB {
      constructor(BB, OB, GB, YB, DB, QB) {
        this.options = BB, this.attrs = OB, this.tooltip = GB, this.timestamp = YB, this.selected = DB, this.disabled = QB
      }
      setSelected(BB, OB) {
        return BB == this.selected || BB >= this.options.length ? this : new uB(this.options, iB(OB, BB), this.tooltip, this.timestamp, BB, this.disabled)
      }
      static build(BB, OB, GB, YB, DB, QB) {
        if (YB && !QB && BB.some((BB => BB.isPending))) return YB.setDisabled();
        let oB = function(BB, OB) {
          let GB = [],
            YB = null,
            DB = null,
            QB = BB => {
              GB.push(BB);
              let {
                section: OB
              } = BB.completion;
              if (OB) {
                YB || (YB = []);
                let BB = "string" == typeof OB ? OB : OB.name;
                YB.some((OB => OB.name == BB)) || YB.push("string" == typeof OB ? {
                  name: BB
                } : OB)
              }
            },
            oB = OB.facet(VB);
          for (let PB of BB)
            if (PB.hasResult()) {
              let BB = PB.result.getMatch;
              if (!1 === PB.result.filter)
                for (let OB of PB.result.options) QB(new MB(OB, PB.source, BB ? BB(OB) : [], 1e9 - GB.length));
              else {
                let GB, YB = OB.sliceDoc(PB.from, PB.to),
                  jB = oB.filterStrict ? new AB(YB) : new WB(YB);
                for (let OB of PB.result.options)
                  if (GB = jB.match(OB.label)) {
                    let YB = OB.displayLabel ? BB ? BB(OB, GB.matched) : [] : GB.matched,
                      oB = GB.score + (OB.boost || 0);
                    if (QB(new MB(OB, PB.source, YB, oB)), "object" == typeof OB.section && "dynamic" === OB.section.rank) {
                      let {
                        name: BB
                      } = OB.section;
                      DB || (DB = Object.create(null)), DB[BB] = Math.max(oB, DB[BB] || -1e9)
                    }
                  }
              }
            } if (YB) {
            let BB = Object.create(null),
              OB = 0,
              QB = (BB, OB) => ("dynamic" === BB.rank && "dynamic" === OB.rank ? DB[OB.name] - DB[BB.name] : 0) || ("number" == typeof BB.rank ? BB.rank : 1e9) - ("number" == typeof OB.rank ? OB.rank : 1e9) || (BB.name < OB.name ? -1 : 1);
            for (let GB of YB.sort(QB)) OB -= 1e5, BB[GB.name] = OB;
            for (let YB of GB) {
              let {
                section: OB
              } = YB.completion;
              OB && (YB.score += BB["string" == typeof OB ? OB : OB.name])
            }
          }
          let jB = [],
            yB = null,
            JB = oB.compareCompletions;
          for (let MB of GB.sort(((BB, OB) => OB.score - BB.score || JB(BB.completion, OB.completion)))) {
            let BB = MB.completion;
            !yB || yB.label != BB.label || yB.detail != BB.detail || null != yB.type && null != BB.type && yB.type != BB.type || yB.apply != BB.apply || yB.boost != BB.boost ? jB.push(MB) : KB(MB.completion) > KB(yB) && (jB[jB.length - 1] = MB), yB = MB.completion
          }
          return jB
        }(BB, OB);
        if (!oB.length) return YB && BB.some((BB => BB.isPending)) ? YB.setDisabled() : null;
        let jB = OB.facet(VB).selectOnOpen ? 0 : -1;
        if (YB && YB.selected != jB && -1 != YB.selected) {
          let BB = YB.options[YB.selected].completion;
          for (let OB = 0; OB < oB.length; OB++)
            if (oB[OB].completion == BB) {
              jB = OB;
              break
            }
        }
        return new uB(oB, iB(GB, jB), {
          pos: BB.reduce(((BB, OB) => OB.hasResult() ? Math.min(BB, OB.from) : BB), 1e8),
          create: hB,
          above: DB.aboveCursor
        }, YB ? YB.timestamp : Date.now(), jB, !1)
      }
      map(BB) {
        return new uB(this.options, this.attrs, {
          ...this.tooltip,
          pos: BB.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new uB(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class mB {
      constructor(BB, OB, GB) {
        this.active = BB, this.id = OB, this.open = GB
      }
      static start() {
        return new mB(LB, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(BB) {
        let {
          state: OB
        } = BB, GB = OB.facet(VB), YB = (GB.override || OB.languageDataAt("autocomplete", PB(OB)).map(ZB)).map((OB => (this.active.find((BB => BB.source == OB)) || new rB(OB, this.active.some((BB => 0 != BB.state)) ? 1 : 0)).update(BB, GB)));
        YB.length == this.active.length && YB.every(((BB, OB) => BB == this.active[OB])) && (YB = this.active);
        let DB = this.open,
          QB = BB.effects.some((BB => BB.is(wB)));
        DB && BB.docChanged && (DB = DB.map(BB.changes)), BB.selection || YB.some((OB => OB.hasResult() && BB.changes.touchesRange(OB.from, OB.to))) || ! function(BB, OB) {
          if (BB == OB) return !0;
          for (let GB = 0, YB = 0;;) {
            for (; GB < BB.length && !BB[GB].hasResult();) GB++;
            for (; YB < OB.length && !OB[YB].hasResult();) YB++;
            let DB = GB == BB.length,
              QB = YB == OB.length;
            if (DB || QB) return DB == QB;
            if (BB[GB++].result != OB[YB++].result) return !1
          }
        }(YB, this.active) || QB ? DB = uB.build(YB, OB, this.id, DB, GB, QB) : DB && DB.disabled && !YB.some((BB => BB.isPending)) && (DB = null), !DB && YB.every((BB => !BB.isPending)) && YB.some((BB => BB.hasResult())) && (YB = YB.map((BB => BB.hasResult() ? new rB(BB.source, 0) : BB)));
        for (let oB of BB.effects) oB.is(UB) && (DB = DB && DB.setSelected(oB.value, this.id));
        return YB == this.active && DB == this.open ? this : new mB(YB, this.id, DB)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? IB : FB
      }
    }
    const IB = {
        "aria-autocomplete": "list"
      },
      FB = {};

    function iB(BB, OB) {
      let GB = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": BB
      };
      return OB > -1 && (GB["aria-activedescendant"] = BB + "-" + OB), GB
    }
    const LB = [];

    function gB(BB, OB) {
      if (BB.isUserEvent("input.complete")) {
        let GB = BB.annotation(lB);
        if (GB && OB.activateOnCompletion(GB)) return 12
      }
      let GB = BB.isUserEvent("input.type");
      return GB && OB.activateOnTyping ? 5 : GB ? 1 : BB.isUserEvent("delete.backward") ? 2 : BB.selection ? 8 : BB.docChanged ? 16 : 0
    }
    class rB {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = BB, this.state = OB, this.explicit = GB
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(BB, OB) {
        let GB = gB(BB, OB),
          YB = this;
        (8 & GB || 16 & GB && this.touches(BB)) && (YB = new rB(YB.source, 0)), 4 & GB && 0 == YB.state && (YB = new rB(this.source, 1)), YB = YB.updateFor(BB, GB);
        for (let DB of BB.effects)
          if (DB.is(NB)) YB = new rB(YB.source, 1, DB.value);
          else if (DB.is(RB)) YB = new rB(YB.source, 0);
        else if (DB.is(wB))
          for (let BB of DB.value) BB.source == YB.source && (YB = BB);
        return YB
      }
      updateFor(BB, OB) {
        return this.map(BB.changes)
      }
      map(BB) {
        return this
      }
      touches(BB) {
        return BB.changes.touchesRange(PB(BB.state))
      }
    }
    class XB extends rB {
      constructor(BB, OB, GB, YB, DB, QB) {
        super(BB, 3, OB), this.limit = GB, this.result = YB, this.from = DB, this.to = QB
      }
      hasResult() {
        return !0
      }
      updateFor(BB, OB) {
        var GB;
        if (!(3 & OB)) return this.map(BB.changes);
        let YB = this.result;
        YB.map && !BB.changes.empty && (YB = YB.map(YB, BB.changes));
        let DB = BB.changes.mapPos(this.from),
          QB = BB.changes.mapPos(this.to, 1),
          jB = PB(BB.state);
        if (jB > QB || !YB || 2 & OB && (PB(BB.startState) == this.from || jB < this.limit)) return new rB(this.source, 4 & OB ? 1 : 0);
        let yB = BB.changes.mapPos(this.limit);
        return function(BB, OB, GB, YB) {
          if (!BB) return !1;
          let DB = OB.sliceDoc(GB, YB);
          return "function" == typeof BB ? BB(DB, GB, YB, OB) : zB(BB, !0).test(DB)
        }(YB.validFor, BB.state, DB, QB) ? new XB(this.source, this.explicit, yB, YB, DB, QB) : YB.update && (YB = YB.update(YB, DB, QB, new oB(BB.state, jB, !1))) ? new XB(this.source, this.explicit, yB, YB, YB.from, null !== (GB = YB.to) && void 0 !== GB ? GB : PB(BB.state)) : new rB(this.source, 1, this.explicit)
      }
      map(BB) {
        if (BB.empty) return this;
        return (this.result.map ? this.result.map(this.result, BB) : this.result) ? new XB(this.source, this.explicit, BB.mapPos(this.limit), this.result, BB.mapPos(this.from), BB.mapPos(this.to, 1)) : new rB(this.source, 0)
      }
      touches(BB) {
        return BB.changes.touchesRange(this.from, this.to)
      }
    }
    const wB = YB.D.define({
        map: (BB, OB) => BB.map((BB => BB.map(OB)))
      }),
      EB = YB.G.define({
        create: () => mB.start(),
        update: (BB, OB) => BB.update(OB),
        provide: BB => [DB.gb.from(BB, (BB => BB.tooltip)), DB.h.contentAttributes.from(BB, (BB => BB.attrs))]
      });

    function cB(BB, OB) {
      const GB = OB.completion.apply || OB.completion.label;
      let YB = BB.state.field(EB).active.find((BB => BB.source == OB.source));
      return YB instanceof XB && ("string" == typeof GB ? BB.dispatch({
        ...pB(BB.state, GB, YB.from, YB.to),
        annotations: lB.of(OB.completion)
      }) : GB(BB, OB.completion, YB.from, YB.to), !0)
    }
    const hB = dB(EB, cB);

    function aB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return GB => {
        let YB = GB.state.field(EB, !1);
        if (!YB || !YB.open || YB.open.disabled || Date.now() - YB.open.timestamp < GB.state.facet(VB).interactionDelay) return !1;
        let QB, oB = 1;
        "page" == OB && (QB = (0, DB.E)(GB, YB.open.tooltip)) && (oB = Math.max(2, Math.floor(QB.dom.offsetHeight / QB.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: jB
        } = YB.open.options, yB = YB.open.selected > -1 ? YB.open.selected + oB * (BB ? 1 : -1) : BB ? 0 : jB - 1;
        return yB < 0 ? yB = "page" == OB ? 0 : jB - 1 : yB >= jB && (yB = "page" == OB ? jB - 1 : 0), GB.dispatch({
          effects: UB.of(yB)
        }), !0
      }
    }
    const eB = BB => !!BB.state.field(EB, !1) && (BB.dispatch({
      effects: NB.of(!0)
    }), !0);
    class TB {
      constructor(BB, OB) {
        this.active = BB, this.context = OB, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const bB = DB.l.fromClass(class {
        constructor(BB) {
          this.view = BB, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let OB of BB.state.field(EB).active) OB.isPending && this.startQuery(OB)
        }
        update(BB) {
          let OB = BB.state.field(EB),
            GB = BB.state.facet(VB);
          if (!BB.selectionSet && !BB.docChanged && BB.startState.field(EB) == OB) return;
          let YB = BB.transactions.some((BB => {
            let OB = gB(BB, GB);
            return 8 & OB || (BB.selection || BB.docChanged) && !(3 & OB)
          }));
          for (let jB = 0; jB < this.running.length; jB++) {
            let OB = this.running[jB];
            if (YB || OB.context.abortOnDocChange && BB.docChanged || OB.updates.length + BB.transactions.length > 50 && Date.now() - OB.time > 1e3) {
              for (let BB of OB.context.abortListeners) try {
                BB()
              } catch (oB) {
                (0, DB.X)(this.view.state, oB)
              }
              OB.context.abortListeners = null, this.running.splice(jB--, 1)
            } else OB.updates.push(...BB.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), BB.transactions.some((BB => BB.effects.some((BB => BB.is(NB))))) && (this.pendingStart = !0);
          let QB = this.pendingStart ? 50 : GB.activateOnTypingDelay;
          if (this.debounceUpdate = OB.active.some((BB => BB.isPending && !this.running.some((OB => OB.active.source == BB.source)))) ? setTimeout((() => this.startUpdate()), QB) : -1, 0 != this.composing)
            for (let DB of BB.transactions) DB.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && DB.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: BB
          } = this.view, OB = BB.field(EB);
          for (let GB of OB.active) GB.isPending && !this.running.some((BB => BB.active.source == GB.source)) && this.startQuery(GB);
          this.running.length && OB.open && OB.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(VB).updateSyncTime))
        }
        startQuery(BB) {
          let {
            state: OB
          } = this.view, GB = PB(OB), YB = new oB(OB, GB, BB.explicit, this.view), QB = new TB(BB, YB);
          this.running.push(QB), Promise.resolve(BB.source(YB)).then((BB => {
            QB.context.aborted || (QB.done = BB || null, this.scheduleAccept())
          }), (BB => {
            this.view.dispatch({
              effects: RB.of(null)
            }), (0, DB.X)(this.view.state, BB)
          }))
        }
        scheduleAccept() {
          this.running.every((BB => void 0 !== BB.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(VB).updateSyncTime))
        }
        accept() {
          var BB;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let OB = [],
            GB = this.view.state.facet(VB),
            YB = this.view.state.field(EB);
          for (let DB = 0; DB < this.running.length; DB++) {
            let QB = this.running[DB];
            if (void 0 === QB.done) continue;
            if (this.running.splice(DB--, 1), QB.done) {
              let YB = PB(QB.updates.length ? QB.updates[0].startState : this.view.state),
                DB = Math.min(YB, QB.done.from + (QB.active.explicit ? 0 : 1)),
                oB = new XB(QB.active.source, QB.active.explicit, DB, QB.done, QB.done.from, null !== (BB = QB.done.to) && void 0 !== BB ? BB : YB);
              for (let BB of QB.updates) oB = oB.update(BB, GB);
              if (oB.hasResult()) {
                OB.push(oB);
                continue
              }
            }
            let oB = YB.active.find((BB => BB.source == QB.active.source));
            if (oB && oB.isPending)
              if (null == QB.done) {
                let BB = new rB(QB.active.source, 0);
                for (let OB of QB.updates) BB = BB.update(OB, GB);
                BB.isPending || OB.push(BB)
              } else this.startQuery(oB)
          }(OB.length || YB.open && YB.open.disabled) && this.view.dispatch({
            effects: wB.of(OB)
          })
        }
      }, {
        eventHandlers: {
          blur(BB) {
            let OB = this.view.state.field(EB, !1);
            if (OB && OB.tooltip && this.view.state.facet(VB).closeOnBlur) {
              let GB = OB.open && (0, DB.E)(this.view, OB.open.tooltip);
              GB && GB.dom.contains(BB.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: RB.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: NB.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      CB = "object" == typeof navigator && /Win/.test(navigator.platform),
      HB = YB.r.highest(DB.h.domEventHandlers({
        keydown(BB, OB) {
          let GB = OB.state.field(EB, !1);
          if (!GB || !GB.open || GB.open.disabled || GB.open.selected < 0 || BB.key.length > 1 || BB.ctrlKey && (!CB || !BB.altKey) || BB.metaKey) return !1;
          let YB = GB.open.options[GB.open.selected],
            DB = GB.active.find((BB => BB.source == YB.source)),
            QB = YB.completion.commitCharacters || DB.result.commitCharacters;
          return QB && QB.indexOf(BB.key) > -1 && cB(OB, YB), !1
        }
      })),
      vB = DB.h.baseTheme({
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
    class sB {
      constructor(BB, OB, GB, YB) {
        this.field = BB, this.line = OB, this.from = GB, this.to = YB
      }
    }
    class xB {
      constructor(BB, OB, GB) {
        this.field = BB, this.from = OB, this.to = GB
      }
      map(BB) {
        let OB = BB.mapPos(this.from, -1, YB.p.TrackDel),
          GB = BB.mapPos(this.to, 1, YB.p.TrackDel);
        return null == OB || null == GB ? null : new xB(this.field, OB, GB)
      }
    }
    class tB {
      constructor(BB, OB) {
        this.lines = BB, this.fieldPositions = OB
      }
      instantiate(BB, OB) {
        let GB = [],
          YB = [OB],
          DB = BB.doc.lineAt(OB),
          oB = /^\s*/.exec(DB.text)[0];
        for (let yB of this.lines) {
          if (GB.length) {
            let GB = oB,
              DB = /^\t*/.exec(yB)[0].length;
            for (let OB = 0; OB < DB; OB++) GB += BB.facet(QB.db);
            YB.push(OB + GB.length - DB), yB = GB + yB.slice(DB)
          }
          GB.push(yB), OB += yB.length + 1
        }
        let jB = this.fieldPositions.map((BB => new xB(BB.field, YB[BB.line] + BB.from, YB[BB.line] + BB.to)));
        return {
          text: GB,
          JZ: jB
        }
      }
      static parse(BB) {
        let OB, GB = [],
          YB = [],
          DB = [];
        for (let QB of BB.split(/\r\n?|\n/)) {
          for (; OB = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(QB);) {
            let BB = OB[1] ? +OB[1] : null,
              oB = OB[2] || OB[3] || "",
              jB = -1,
              yB = oB.replace(/\\[{}]/g, (BB => BB[1]));
            for (let OB = 0; OB < GB.length; OB++)(null != BB ? GB[OB].seq == BB : yB && GB[OB].name == yB) && (jB = OB);
            if (jB < 0) {
              let OB = 0;
              for (; OB < GB.length && (null == BB || null != GB[OB].seq && GB[OB].seq < BB);) OB++;
              GB.splice(OB, 0, {
                seq: BB,
                name: yB
              }), jB = OB;
              for (let BB of DB) BB.field >= jB && BB.field++
            }
            for (let GB of DB)
              if (GB.line == YB.length && GB.from > OB.index) {
                let BB = OB[2] ? 3 + (OB[1] || "").length : 2;
                GB.from -= BB, GB.to -= BB
              } DB.push(new sB(jB, YB.length, OB.index, OB.index + yB.length)), QB = QB.slice(0, OB.index) + oB + QB.slice(OB.index + OB[0].length)
          }
          QB = QB.replace(/\\([{}])/g, ((BB, OB, GB) => {
            for (let QB of DB) QB.line == YB.length && QB.from > GB && (QB.from--, QB.to--);
            return OB
          })), YB.push(QB)
        }
        return new tB(YB, DB)
      }
    }
    let BO = DB.c.widget({
        widget: new class extends DB.o {
          toDOM() {
            let BB = document.createElement("span");
            return BB.className = "cm-snippetFieldPosition", BB
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      OO = DB.c.mark({
        class: "cm-snippetField"
      });
    class GO {
      constructor(BB, OB) {
        this.JZ = BB, this.active = OB, this.deco = DB.c.set(BB.map((BB => (BB.from == BB.to ? BO : OO).range(BB.from, BB.to))), !0)
      }
      map(BB) {
        let OB = [];
        for (let GB of this.JZ) {
          let YB = GB.map(BB);
          if (!YB) return null;
          OB.push(YB)
        }
        return new GO(OB, this.active)
      }
      selectionInsideField(BB) {
        return BB.JZ.every((BB => this.JZ.some((OB => OB.field == this.active && OB.from <= BB.from && OB.to >= BB.to))))
      }
    }
    const YO = YB.D.define({
        map: (BB, OB) => BB && BB.map(OB)
      }),
      DO = YB.D.define(),
      QO = YB.G.define({
        create: () => null,
        update(BB, OB) {
          for (let GB of OB.effects) {
            if (GB.is(YO)) return GB.value;
            if (GB.is(DO) && BB) return new GO(BB.JZ, GB.value)
          }
          return BB && OB.docChanged && (BB = BB.map(OB.changes)), BB && OB.selection && !BB.selectionInsideField(OB.selection) && (BB = null), BB
        },
        provide: BB => DB.h.TD.from(BB, (BB => BB ? BB.deco : DB.c.none))
      });

    function oO(BB, OB) {
      return YB.j.create(BB.filter((BB => BB.field == OB)).map((BB => YB.j.range(BB.from, BB.to))))
    }

    function jO(BB) {
      let OB = tB.parse(BB);
      return (BB, GB, DB, QB) => {
        let {
          text: oB,
          JZ: jB
        } = OB.instantiate(BB.state, DB), {
          main: yB
        } = BB.state.selection, JB = {
          changes: {
            from: DB,
            to: QB == yB.from ? yB.to : QB,
            insert: YB.K.of(oB)
          },
          scrollIntoView: !0,
          annotations: GB ? [lB.of(GB), YB.L.userEvent.of("input.complete")] : void 0
        };
        if (jB.length && (JB.selection = oO(jB, 0)), jB.some((BB => BB.field > 0))) {
          let OB = new GO(jB, 0),
            GB = JB.effects = [YO.of(OB)];
          void 0 === BB.state.field(QO, !1) && GB.push(YB.D.appendConfig.of([QO, PO, lO, vB]))
        }
        BB.dispatch(BB.state.update(JB))
      }
    }

    function yO(BB) {
      return OB => {
        let {
          state: GB,
          dispatch: YB
        } = OB, DB = GB.field(QO, !1);
        if (!DB || BB < 0 && 0 == DB.active) return !1;
        let QB = DB.active + BB,
          oB = BB > 0 && !DB.JZ.some((OB => OB.field == QB + BB));
        return YB(GB.update({
          selection: oO(DB.JZ, QB),
          effects: YO.of(oB ? null : new GO(DB.JZ, QB)),
          scrollIntoView: !0
        })), !0
      }
    }
    const JO = [{
        key: "Tab",
        run: yO(1),
        shift: yO(-1)
      }, {
        key: "Escape",
        run: BB => {
          let {
            state: OB,
            dispatch: GB
          } = BB;
          return !!OB.field(QO, !1) && (GB(OB.update({
            effects: YO.of(null)
          })), !0)
        }
      }],
      MO = YB.o.define({
        combine: BB => BB.length ? BB[0] : JO
      }),
      PO = YB.r.highest(DB.R.compute([MO], (BB => BB.facet(MO))));

    function zO(BB, OB) {
      return {
        ...OB,
        apply: jO(BB)
      }
    }
    const lO = DB.h.domEventHandlers({
      mousedown(BB, OB) {
        let GB, YB = OB.state.field(QO, !1);
        if (!YB || null == (GB = OB.posAtCoords({
            x: BB.clientX,
            y: BB.clientY
          }))) return !1;
        let DB = YB.JZ.find((BB => BB.from <= GB && BB.to >= GB));
        return !(!DB || DB.field == YB.active) && (OB.dispatch({
          selection: oO(YB.JZ, DB.field),
          effects: YO.of(YB.JZ.some((BB => BB.field > DB.field)) ? new GO(YB.JZ, DB.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const pO = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      qO = YB.D.define({
        map(BB, OB) {
          let GB = OB.mapPos(BB, -1, YB.p.TrackAfter);
          return null == GB ? void 0 : GB
        }
      }),
      ZO = new class extends YB.C {};
    ZO.startSide = 1, ZO.endSide = -1;
    const NO = YB.G.define({
      create: () => YB.z.empty,
      update(BB, OB) {
        if (BB = BB.map(OB.changes), OB.selection) {
          let GB = OB.state.doc.lineAt(OB.selection.main.head);
          BB = BB.update({
            filter: BB => BB >= GB.from && BB <= GB.to
          })
        }
        for (let GB of OB.effects) GB.is(qO) && (BB = BB.update({
          add: [ZO.range(GB.value, GB.value + 1)]
        }));
        return BB
      }
    });

    function RO() {
      return [nO, NO]
    }
    const WO = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function AO(BB) {
      for (let OB = 0; OB < 16; OB += 2)
        if (WO.charCodeAt(OB) == BB) return WO.charAt(OB + 1);
      return (0, YB.bb)(BB < 128 ? BB : BB + 1)
    }

    function VO(BB, OB) {
      return BB.languageDataAt("closeBrackets", OB)[0] || pO
    }
    const SO = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      nO = DB.h.inputHandler.of(((BB, OB, GB, DB) => {
        if ((SO ? BB.composing : BB.compositionStarted) || BB.state.readOnly) return !1;
        let QB = BB.state.selection.main;
        if (DB.length > 2 || 2 == DB.length && 1 == (0, YB.R)((0, YB.O)(DB, 0)) || OB != QB.from || GB != QB.to) return !1;
        let oB = function(BB, OB) {
          let GB = VO(BB, BB.selection.main.head),
            DB = GB.brackets || pO.brackets;
          for (let QB of DB) {
            let oB = AO((0, YB.O)(QB, 0));
            if (OB == QB) return oB == QB ? uO(BB, QB, DB.indexOf(QB + QB + QB) > -1, GB) : dO(BB, QB, oB, GB.before || pO.before);
            if (OB == oB && fO(BB, BB.selection.main.from)) return KO(BB, QB, oB)
          }
          return null
        }(BB.state, DB);
        return !!oB && (BB.dispatch(oB), !0)
      })),
      UO = [{
        key: "Backspace",
        run: BB => {
          let {
            state: OB,
            dispatch: GB
          } = BB;
          if (OB.readOnly) return !1;
          let DB = VO(OB, OB.selection.main.head).brackets || pO.brackets,
            QB = null,
            oB = OB.changeByRange((BB => {
              if (BB.empty) {
                let GB = function(BB, OB) {
                  let GB = BB.sliceString(OB - 2, OB);
                  return (0, YB.R)((0, YB.O)(GB, 0)) == GB.length ? GB : GB.slice(1)
                }(OB.doc, BB.head);
                for (let QB of DB)
                  if (QB == GB && kO(OB.doc, BB.head) == AO((0, YB.O)(QB, 0))) return {
                    changes: {
                      from: BB.head - QB.length,
                      to: BB.head + QB.length
                    },
                    range: YB.j.cursor(BB.head - QB.length)
                  }
              }
              return {
                range: QB = BB
              }
            }));
          return QB || GB(OB.update(oB, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !QB
        }
      }];

    function fO(BB, OB) {
      let GB = !1;
      return BB.field(NO).between(0, BB.doc.length, (BB => {
        BB == OB && (GB = !0)
      })), GB
    }

    function kO(BB, OB) {
      let GB = BB.sliceString(OB, OB + 2);
      return GB.slice(0, (0, YB.R)((0, YB.O)(GB, 0)))
    }

    function dO(BB, OB, GB, DB) {
      let QB = null,
        oB = BB.changeByRange((oB => {
          if (!oB.empty) return {
            changes: [{
              insert: OB,
              from: oB.from
            }, {
              insert: GB,
              from: oB.to
            }],
            effects: qO.of(oB.to + OB.length),
            range: YB.j.range(oB.anchor + OB.length, oB.head + OB.length)
          };
          let jB = kO(BB.doc, oB.head);
          return !jB || /\s/.test(jB) || DB.indexOf(jB) > -1 ? {
            changes: {
              insert: OB + GB,
              from: oB.head
            },
            effects: qO.of(oB.head + OB.length),
            range: YB.j.cursor(oB.head + OB.length)
          } : {
            range: QB = oB
          }
        }));
      return QB ? null : BB.update(oB, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function KO(BB, OB, GB) {
      let DB = null,
        QB = BB.changeByRange((OB => OB.empty && kO(BB.doc, OB.head) == GB ? {
          changes: {
            from: OB.head,
            to: OB.head + GB.length,
            insert: GB
          },
          range: YB.j.cursor(OB.head + GB.length)
        } : DB = {
          range: OB
        }));
      return DB ? null : BB.update(QB, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function uO(BB, OB, GB, DB) {
      let oB = DB.stringPrefixes || pO.stringPrefixes,
        jB = null,
        yB = BB.changeByRange((DB => {
          if (!DB.empty) return {
            changes: [{
              insert: OB,
              from: DB.from
            }, {
              insert: OB,
              from: DB.to
            }],
            effects: qO.of(DB.to + OB.length),
            range: YB.j.range(DB.anchor + OB.length, DB.head + OB.length)
          };
          let yB, JB = DB.head,
            MB = kO(BB.doc, JB);
          if (MB == OB) {
            if (mO(BB, JB)) return {
              changes: {
                insert: OB + OB,
                from: JB
              },
              effects: qO.of(JB + OB.length),
              range: YB.j.cursor(JB + OB.length)
            };
            if (fO(BB, JB)) {
              let DB = GB && BB.sliceDoc(JB, JB + 3 * OB.length) == OB + OB + OB ? OB + OB + OB : OB;
              return {
                changes: {
                  from: JB,
                  to: JB + DB.length,
                  insert: DB
                },
                range: YB.j.cursor(JB + DB.length)
              }
            }
          } else {
            if (GB && BB.sliceDoc(JB - 2 * OB.length, JB) == OB + OB && (yB = IO(BB, JB - 2 * OB.length, oB)) > -1 && mO(BB, yB)) return {
              changes: {
                insert: OB + OB + OB + OB,
                from: JB
              },
              effects: qO.of(JB + OB.length),
              range: YB.j.cursor(JB + OB.length)
            };
            if (BB.charCategorizer(JB)(MB) != YB.g.Word && IO(BB, JB, oB) > -1 && ! function(BB, OB, GB, YB) {
                let DB = (0, QB.pb)(BB).resolveInner(OB, -1),
                  oB = YB.reduce(((BB, OB) => Math.max(BB, OB.length)), 0);
                for (let QB = 0; QB < 5; QB++) {
                  let QB = BB.sliceDoc(DB.from, Math.min(DB.to, DB.from + GB.length + oB)),
                    jB = QB.indexOf(GB);
                  if (!jB || jB > -1 && YB.indexOf(QB.slice(0, jB)) > -1) {
                    let OB = DB.firstChild;
                    for (; OB && OB.from == DB.from && OB.to - OB.from > GB.length + jB;) {
                      if (BB.sliceDoc(OB.to - GB.length, OB.to) == GB) return !1;
                      OB = OB.firstChild
                    }
                    return !0
                  }
                  let yB = DB.to == OB && DB.parent;
                  if (!yB) break;
                  DB = yB
                }
                return !1
              }(BB, JB, OB, oB)) return {
              changes: {
                insert: OB + OB,
                from: JB
              },
              effects: qO.of(JB + OB.length),
              range: YB.j.cursor(JB + OB.length)
            }
          }
          return {
            range: jB = DB
          }
        }));
      return jB ? null : BB.update(yB, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function mO(BB, OB) {
      let GB = (0, QB.pb)(BB).resolveInner(OB + 1);
      return GB.parent && GB.from == OB
    }

    function IO(BB, OB, GB) {
      let DB = BB.charCategorizer(OB);
      if (DB(BB.sliceDoc(OB - 1, OB)) != YB.g.Word) return OB;
      for (let QB of GB) {
        let GB = OB - QB.length;
        if (BB.sliceDoc(GB, OB) == QB && DB(BB.sliceDoc(GB - 1, GB)) != YB.g.Word) return GB
      }
      return -1
    }

    function FO() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [HB, EB, VB.of(BB), bB, LO, vB]
    }
    const iO = [{
        key: "Ctrl-Space",
        run: eB
      }, {
        mac: "Alt-`",
        run: eB
      }, {
        mac: "Alt-i",
        run: eB
      }, {
        key: "Escape",
        run: BB => {
          let OB = BB.state.field(EB, !1);
          return !(!OB || !OB.active.some((BB => 0 != BB.state))) && (BB.dispatch({
            effects: RB.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: aB(!0)
      }, {
        key: "ArrowUp",
        run: aB(!1)
      }, {
        key: "PageDown",
        run: aB(!0, "page")
      }, {
        key: "PageUp",
        run: aB(!1, "page")
      }, {
        key: "Enter",
        run: BB => {
          let OB = BB.state.field(EB, !1);
          return !(BB.state.readOnly || !OB || !OB.open || OB.open.selected < 0 || OB.open.disabled || Date.now() - OB.open.timestamp < BB.state.facet(VB).interactionDelay) && cB(BB, OB.open.options[OB.open.selected])
        }
      }],
      LO = YB.r.highest(DB.R.computeN([VB], (BB => BB.facet(VB).defaultKeymap ? [iO] : [])))
  },
  44612: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => JB,
      h: () => zB,
      j: () => MB,
      m: () => PB
    });
    var YB = GB(44470);
    class DB {
      constructor(BB, OB, GB, YB) {
        this.origin = BB, this.changes = OB, this.effects = GB, this.clientID = YB
      }
    }
    class QB {
      constructor(BB, OB) {
        this.version = BB, this.unconfirmed = OB
      }
    }
    const oB = YB.o.define({
        combine(BB) {
          let OB = (0, YB.V)(BB, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: BB => BB
          });
          return null == OB.clientID && (OB.clientID = BB.length && BB[0].generatedID || ""), OB
        }
      }),
      jB = YB.b.define(),
      yB = YB.G.define({
        create: BB => new QB(BB.facet(oB).startVersion, []),
        update(BB, OB) {
          let GB = OB.annotation(jB);
          if (GB) return GB;
          let {
            sharedEffects: YB,
            clientID: yB
          } = OB.startState.facet(oB), JB = YB(OB);
          return JB.length || !OB.changes.empty ? new QB(BB.version, BB.unconfirmed.concat(new DB(OB, OB.changes, JB, yB))) : BB
        }
      });

    function JB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [yB, oB.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, BB))]
    }

    function MB(BB, OB) {
      let {
        version: GB,
        unconfirmed: JB
      } = BB.field(yB), {
        clientID: MB
      } = BB.facet(oB);
      GB += OB.length;
      let PB = [],
        zB = null,
        lB = 0;
      for (let DB of OB) {
        let BB = lB < JB.length ? JB[lB] : null;
        BB && BB.clientID == DB.clientID ? (zB && (zB = zB.map(BB.changes, !0)), PB = YB.D.mapEffects(PB, DB.changes), lB++) : (PB = YB.D.mapEffects(PB, DB.changes), DB.effects && (PB = PB.concat(DB.effects)), zB = zB ? zB.compose(DB.changes) : DB.changes)
      }
      if (lB && (JB = JB.slice(lB)), JB.length && (zB && (JB = JB.map((BB => {
          let OB = BB.changes.map(zB);
          return zB = zB.map(BB.changes, !0), new DB(BB.origin, OB, YB.D.mapEffects(BB.effects, zB), MB)
        }))), PB.length)) {
        let BB = JB.reduce(((BB, OB) => BB.compose(OB.changes)), YB.ChangeSet.empty(JB[0].changes.length));
        PB = YB.D.mapEffects(PB, BB)
      }
      return zB ? BB.update({
        changes: zB,
        effects: PB,
        annotations: [YB.L.addToHistory.of(!1), YB.L.remote.of(!0), jB.of(new QB(GB, JB))],
        filter: !1
      }) : BB.update({
        annotations: [jB.of(new QB(GB, JB))]
      })
    }

    function PB(BB) {
      return BB.field(yB).unconfirmed
    }

    function zB(BB) {
      return BB.field(yB).version
    }
  },
  44500: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => qO
    });
    var YB = GB(44488);
    class DB {
      constructor(BB, OB, GB, YB, DB, QB, oB, jB, yB) {
        let JB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          MB = arguments.length > 10 ? arguments[10] : void 0;
        this.p = BB, this.stack = OB, this.state = GB, this.reducePos = YB, this.pos = DB, this.score = QB, this.buffer = oB, this.bufferBase = jB, this.curContext = yB, this.lookAhead = JB, this.parent = MB
      }
      toString() {
        return `[${this.stack.filter(((BB,OB)=>OB%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          YB = BB.parser.context;
        return new DB(BB, [], OB, GB, GB, 0, [], 0, YB ? new QB(YB, YB.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(BB, OB) {
        this.stack.push(this.state, OB, this.bufferBase + this.buffer.length), this.state = BB
      }
      reduce(BB) {
        var OB;
        let GB = BB >> 19,
          YB = 65535 & BB,
          {
            parser: DB
          } = this.p,
          QB = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          oB = DB.dynamicPrecedence(YB);
        if (oB && (this.score += oB), 0 == GB) return this.pushState(DB.getGoto(this.state, YB, !0), this.reducePos), YB < DB.minRepeatTerm && this.storeNode(YB, this.reducePos, this.reducePos, QB ? 8 : 4, !0), void this.reduceContext(YB, this.reducePos);
        let jB = this.stack.length - 3 * (GB - 1) - (262144 & BB ? 6 : 0),
          yB = jB ? this.stack[jB - 2] : this.p.JZ[0].from,
          JB = this.reducePos - yB;
        JB >= 2e3 && !(null === (OB = this.p.parser.nodeSet.types[YB]) || void 0 === OB ? void 0 : OB.isAnonymous) && (yB == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = JB) : this.p.lastBigReductionSize < JB && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = yB, this.p.lastBigReductionSize = JB));
        let MB = jB ? this.stack[jB - 1] : 0,
          PB = this.bufferBase + this.buffer.length - MB;
        if (YB < DB.minRepeatTerm || 131072 & BB) {
          let BB = DB.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(YB, yB, BB, PB + 4, !0)
        }
        if (262144 & BB) this.state = this.stack[jB];
        else {
          let BB = this.stack[jB - 3];
          this.state = DB.getGoto(BB, YB, !0)
        }
        for (; this.stack.length > jB;) this.stack.pop();
        this.reduceContext(YB, yB)
      }
      storeNode(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          DB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == BB && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let BB = this,
            YB = this.buffer.length;
          if (0 == YB && BB.parent && (YB = BB.bufferBase - BB.parent.bufferBase, BB = BB.parent), YB > 0 && 0 == BB.buffer[YB - 4] && BB.buffer[YB - 1] > -1) {
            if (OB == GB) return;
            if (BB.buffer[YB - 2] >= OB) return void(BB.buffer[YB - 2] = GB)
          }
        }
        if (DB && this.pos != GB) {
          let DB = this.buffer.length;
          if (DB > 0 && (0 != this.buffer[DB - 4] || this.buffer[DB - 1] < 0)) {
            let BB = !1;
            for (let OB = DB; OB > 0 && this.buffer[OB - 2] > GB; OB -= 4)
              if (this.buffer[OB - 1] >= 0) {
                BB = !0;
                break
              } if (BB)
              for (; DB > 0 && this.buffer[DB - 2] > GB;) this.buffer[DB] = this.buffer[DB - 4], this.buffer[DB + 1] = this.buffer[DB - 3], this.buffer[DB + 2] = this.buffer[DB - 2], this.buffer[DB + 3] = this.buffer[DB - 1], DB -= 4, YB > 4 && (YB -= 4)
          }
          this.buffer[DB] = BB, this.buffer[DB + 1] = OB, this.buffer[DB + 2] = GB, this.buffer[DB + 3] = YB
        } else this.buffer.push(BB, OB, GB, YB)
      }
      shift(BB, OB, GB, YB) {
        if (131072 & BB) this.pushState(65535 & BB, this.pos);
        else if (0 == (262144 & BB)) {
          let DB = BB,
            {
              parser: QB
            } = this.p;
          this.pos = YB;
          let oB = QB.stateFlag(DB, 1);
          !oB && (YB > GB || OB <= QB.maxNode) && (this.reducePos = YB), this.pushState(DB, oB ? GB : Math.min(GB, this.reducePos)), this.shiftContext(OB, GB), OB <= QB.maxNode && this.buffer.push(OB, GB, YB, 4)
        } else this.pos = YB, this.shiftContext(OB, GB), OB <= this.p.parser.maxNode && this.buffer.push(OB, GB, YB, 4)
      }
      apply(BB, OB, GB, YB) {
        65536 & BB ? this.reduce(BB) : this.shift(BB, OB, GB, YB)
      }
      useNode(BB, OB) {
        let GB = this.p.reused.length - 1;
        (GB < 0 || this.p.reused[GB] != BB) && (this.p.reused.push(BB), GB++);
        let YB = this.pos;
        this.reducePos = this.pos = YB + BB.length, this.pushState(OB, YB), this.buffer.push(GB, YB, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, BB, this, this.p.stream.reset(this.pos - BB.length)))
      }
      split() {
        let BB = this,
          OB = BB.buffer.length;
        for (; OB > 0 && BB.buffer[OB - 2] > BB.reducePos;) OB -= 4;
        let GB = BB.buffer.slice(OB),
          YB = BB.bufferBase + OB;
        for (; BB && YB == BB.bufferBase;) BB = BB.parent;
        return new DB(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, GB, YB, this.curContext, this.lookAhead, BB)
      }
      recoverByDelete(BB, OB) {
        let GB = BB <= this.p.parser.maxNode;
        GB && this.storeNode(BB, this.pos, OB, 4), this.storeNode(0, this.pos, OB, GB ? 8 : 4), this.pos = this.reducePos = OB, this.score -= 190
      }
      canShift(BB) {
        for (let OB = new oB(this);;) {
          let GB = this.p.parser.stateSlot(OB.state, 4) || this.p.parser.hasAction(OB.state, BB);
          if (0 == GB) return !1;
          if (0 == (65536 & GB)) return !0;
          OB.reduce(GB)
        }
      }
      recoverByInsert(BB) {
        if (this.stack.length >= 300) return [];
        let OB = this.p.parser.nextStates(this.state);
        if (OB.length > 8 || this.stack.length >= 120) {
          let GB = [];
          for (let YB, DB = 0; DB < OB.length; DB += 2)(YB = OB[DB + 1]) != this.state && this.p.parser.hasAction(YB, BB) && GB.push(OB[DB], YB);
          if (this.stack.length < 120)
            for (let BB = 0; GB.length < 8 && BB < OB.length; BB += 2) {
              let YB = OB[BB + 1];
              GB.some(((BB, OB) => 1 & OB && BB == YB)) || GB.push(OB[BB], YB)
            }
          OB = GB
        }
        let GB = [];
        for (let YB = 0; YB < OB.length && GB.length < 4; YB += 2) {
          let BB = OB[YB + 1];
          if (BB == this.state) continue;
          let DB = this.split();
          DB.pushState(BB, this.pos), DB.storeNode(0, DB.pos, DB.pos, 4, !0), DB.shiftContext(OB[YB], this.pos), DB.reducePos = this.pos, DB.score -= 200, GB.push(DB)
        }
        return GB
      }
      forceReduce() {
        let {
          parser: BB
        } = this.p, OB = BB.stateSlot(this.state, 5);
        if (0 == (65536 & OB)) return !1;
        if (!BB.validAction(this.state, OB)) {
          let GB = OB >> 19,
            YB = 65535 & OB,
            DB = this.stack.length - 3 * GB;
          if (DB < 0 || BB.getGoto(this.stack[DB], YB, !1) < 0) {
            let BB = this.findForcedReduction();
            if (null == BB) return !1;
            OB = BB
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(OB), !0
      }
      findForcedReduction() {
        let {
          parser: BB
        } = this.p, OB = [], GB = (YB, DB) => {
          if (!OB.includes(YB)) return OB.push(YB), BB.allActions(YB, (OB => {
            if (393216 & OB);
            else if (65536 & OB) {
              let GB = (OB >> 19) - DB;
              if (GB > 1) {
                let YB = 65535 & OB,
                  DB = this.stack.length - 3 * GB;
                if (DB >= 0 && BB.getGoto(this.stack[DB], YB, !1) >= 0) return GB << 19 | 65536 | YB
              }
            } else {
              let BB = GB(OB, DB + 1);
              if (null != BB) return BB
            }
          }))
        };
        return GB(this.state, 0)
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
        for (let OB = 0; OB < this.stack.length; OB += 3)
          if (this.stack[OB] != BB.stack[OB]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(BB) {
        return this.p.parser.dialect.flags[BB]
      }
      shiftContext(BB, OB) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, BB, this, this.p.stream.reset(OB)))
      }
      reduceContext(BB, OB) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, BB, this, this.p.stream.reset(OB)))
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
          let OB = new QB(this.curContext.tracker, BB);
          OB.hash != this.curContext.hash && this.emitContext(), this.curContext = OB
        }
      }
      setLookAhead(BB) {
        return !(BB <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = BB, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class QB {
      constructor(BB, OB) {
        this.tracker = BB, this.context = OB, this.hash = BB.strict ? BB.hash(OB) : 0
      }
    }
    class oB {
      constructor(BB) {
        this.start = BB, this.state = BB.state, this.stack = BB.stack, this.base = this.stack.length
      }
      reduce(BB) {
        let OB = 65535 & BB,
          GB = BB >> 19;
        0 == GB ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (GB - 1);
        let YB = this.start.p.parser.getGoto(this.stack[this.base - 3], OB, !0);
        this.state = YB
      }
    }
    class jB {
      constructor(BB, OB, GB) {
        this.stack = BB, this.pos = OB, this.index = GB, this.buffer = BB.buffer, 0 == this.index && this.maybeNext()
      }
      static create(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB.bufferBase + BB.buffer.length;
        return new jB(BB, OB, OB - BB.bufferBase)
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
        return new jB(this.stack, this.pos, this.index)
      }
    }

    function yB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof BB) return BB;
      let GB = null;
      for (let YB = 0, DB = 0; YB < BB.length;) {
        let QB = 0;
        for (;;) {
          let OB = BB.charCodeAt(YB++),
            GB = !1;
          if (126 == OB) {
            QB = 65535;
            break
          }
          OB >= 92 && OB--, OB >= 34 && OB--;
          let DB = OB - 32;
          if (DB >= 46 && (DB -= 46, GB = !0), QB += DB, GB) break;
          QB *= 46
        }
        GB ? GB[DB++] = QB : GB = new OB(QB)
      }
      return GB
    }
    class JB {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const MB = new JB;
    class PB {
      constructor(BB, OB) {
        this.input = BB, this.JZ = OB, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = MB, this.rangeIndex = 0, this.pos = this.chunkPos = OB[0].from, this.range = OB[0], this.end = OB[OB.length - 1].to, this.readNext()
      }
      resolveOffset(BB, OB) {
        let GB = this.range,
          YB = this.rangeIndex,
          DB = this.pos + BB;
        for (; DB < GB.from;) {
          if (!YB) return null;
          let BB = this.JZ[--YB];
          DB -= GB.from - BB.to, GB = BB
        }
        for (; OB < 0 ? DB > GB.to : DB >= GB.to;) {
          if (YB == this.JZ.length - 1) return null;
          let BB = this.JZ[++YB];
          DB += BB.from - GB.to, GB = BB
        }
        return DB
      }
      clipPos(BB) {
        if (BB >= this.range.from && BB < this.range.to) return BB;
        for (let OB of this.JZ)
          if (OB.to > BB) return Math.max(BB, OB.from);
        return this.end
      }
      peek(BB) {
        let OB, GB, YB = this.chunkOff + BB;
        if (YB >= 0 && YB < this.chunk.length) OB = this.pos + BB, GB = this.chunk.charCodeAt(YB);
        else {
          let YB = this.resolveOffset(BB, 1);
          if (null == YB) return -1;
          if (OB = YB, OB >= this.chunk2Pos && OB < this.chunk2Pos + this.chunk2.length) GB = this.chunk2.charCodeAt(OB - this.chunk2Pos);
          else {
            let BB = this.rangeIndex,
              YB = this.range;
            for (; YB.to <= OB;) YB = this.JZ[++BB];
            this.chunk2 = this.input.chunk(this.chunk2Pos = OB), OB + this.chunk2.length > YB.to && (this.chunk2 = this.chunk2.slice(0, YB.to - OB)), GB = this.chunk2.charCodeAt(0)
          }
        }
        return OB >= this.token.lookAhead && (this.token.lookAhead = OB + 1), GB
      }
      acceptToken(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GB = OB ? this.resolveOffset(OB, -1) : this.pos;
        if (null == GB || GB < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = BB, this.token.end = GB
      }
      acceptTokenTo(BB, OB) {
        this.token.value = BB, this.token.end = OB
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: BB,
            chunkPos: OB
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = BB, this.chunk2Pos = OB, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let BB = this.input.chunk(this.pos),
            OB = this.pos + BB.length;
          this.chunk = OB > this.range.to ? BB.slice(0, this.range.to - this.pos) : BB, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += BB; this.pos + BB >= this.range.to;) {
          if (this.rangeIndex == this.JZ.length - 1) return this.setDone();
          BB -= this.range.to - this.pos, this.range = this.JZ[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += BB, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.JZ[this.rangeIndex = this.JZ.length - 1], this.chunk = "", this.next = -1
      }
      reset(BB, OB) {
        if (OB ? (this.token = OB, OB.start = BB, OB.lookAhead = BB + 1, OB.value = OB.extended = -1) : this.token = MB, this.pos != BB) {
          if (this.pos = BB, BB == this.end) return this.setDone(), this;
          for (; BB < this.range.from;) this.range = this.JZ[--this.rangeIndex];
          for (; BB >= this.range.to;) this.range = this.JZ[++this.rangeIndex];
          BB >= this.chunkPos && BB < this.chunkPos + this.chunk.length ? this.chunkOff = BB - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(BB, OB) {
        if (BB >= this.chunkPos && OB <= this.chunkPos + this.chunk.length) return this.chunk.slice(BB - this.chunkPos, OB - this.chunkPos);
        if (BB >= this.chunk2Pos && OB <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(BB - this.chunk2Pos, OB - this.chunk2Pos);
        if (BB >= this.range.from && OB <= this.range.to) return this.input.read(BB, OB);
        let GB = "";
        for (let YB of this.JZ) {
          if (YB.from >= OB) break;
          YB.to > BB && (GB += this.input.read(Math.max(YB.from, BB), Math.min(YB.to, OB)))
        }
        return GB
      }
    }
    class zB {
      constructor(BB, OB) {
        this.data = BB, this.id = OB
      }
      token(BB, OB) {
        let {
          parser: GB
        } = OB.p;
        qB(this.data, BB, OB, this.id, GB.data, GB.tokenPrecTable)
      }
    }
    zB.prototype.contextual = zB.prototype.fallback = zB.prototype.extend = !1;
    class lB {
      constructor(BB, OB, GB) {
        this.precTable = OB, this.elseToken = GB, this.data = "string" == typeof BB ? yB(BB) : BB
      }
      token(BB, OB) {
        let GB = BB.pos,
          YB = 0;
        for (;;) {
          let GB = BB.next < 0,
            DB = BB.resolveOffset(1, 1);
          if (qB(this.data, BB, OB, 0, this.data, this.precTable), BB.token.value > -1) break;
          if (null == this.elseToken) return;
          if (GB || YB++, null == DB) break;
          BB.reset(DB, BB.token)
        }
        YB && (BB.reset(GB, BB.token), BB.acceptToken(this.elseToken, YB))
      }
    }
    lB.prototype.contextual = zB.prototype.fallback = zB.prototype.extend = !1;
    class pB {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = BB, this.contextual = !!OB.contextual, this.fallback = !!OB.fallback, this.extend = !!OB.extend
      }
    }

    function qB(BB, OB, GB, YB, DB, QB) {
      let oB = 0,
        jB = 1 << YB,
        {
          dialect: yB
        } = GB.p.parser;
      BB: for (; 0 != (jB & BB[oB]);) {
        let GB = BB[oB + 1];
        for (let PB = oB + 3; PB < GB; PB += 2)
          if ((BB[PB + 1] & jB) > 0) {
            let GB = BB[PB];
            if (yB.allows(GB) && (-1 == OB.token.value || OB.token.value == GB || NB(GB, OB.token.value, DB, QB))) {
              OB.acceptToken(GB);
              break
            }
          } let YB = OB.next,
          JB = 0,
          MB = BB[oB + 2];
        if (!(OB.next < 0 && MB > JB && 65535 == BB[GB + 3 * MB - 3])) {
          for (; JB < MB;) {
            let DB = JB + MB >> 1,
              QB = GB + DB + (DB << 1),
              jB = BB[QB],
              yB = BB[QB + 1] || 65536;
            if (YB < jB) MB = DB;
            else {
              if (!(YB >= yB)) {
                oB = BB[QB + 2], OB.advance();
                continue BB
              }
              JB = DB + 1
            }
          }
          break
        }
        oB = BB[GB + 3 * MB - 1]
      }
    }

    function ZB(BB, OB, GB) {
      for (let YB, DB = OB; 65535 != (YB = BB[DB]); DB++)
        if (YB == GB) return DB - OB;
      return -1
    }

    function NB(BB, OB, GB, YB) {
      let DB = ZB(GB, YB, OB);
      return DB < 0 || ZB(GB, YB, BB) < DB
    }
    const RB = "undefined" != typeof process && {
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

    function AB(BB, OB, GB) {
      let DB = BB.cursor(YB.f.IncludeAnonymous);
      for (DB.moveTo(OB);;)
        if (!(GB < 0 ? DB.childBefore(OB) : DB.childAfter(OB)))
          for (;;) {
            if ((GB < 0 ? DB.to < OB : DB.from > OB) && !DB.type.isError) return GB < 0 ? Math.max(0, Math.min(DB.to - 1, OB - 25)) : Math.min(BB.length, Math.max(DB.from + 1, OB + 25));
            if (GB < 0 ? DB.prevSibling() : DB.nextSibling()) break;
            if (!DB.parent()) return GB < 0 ? 0 : BB.length
          }
    }
    class VB {
      constructor(BB, OB) {
        this.fragments = BB, this.nodeSet = OB, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let BB = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (BB) {
          for (this.safeFrom = BB.openStart ? AB(BB.tree, BB.from + BB.offset, 1) - BB.offset : BB.from, this.safeTo = BB.openEnd ? AB(BB.tree, BB.to + BB.offset, -1) - BB.offset : BB.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(BB.tree), this.start.push(-BB.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(BB) {
        if (BB < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= BB;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let OB = this.trees.length - 1;
          if (OB < 0) return this.nextFragment(), null;
          let GB = this.trees[OB],
            DB = this.index[OB];
          if (DB == GB.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let QB = GB.children[DB],
            oB = this.start[OB] + GB.positions[DB];
          if (oB > BB) return this.nextStart = oB, null;
          if (QB instanceof YB.w) {
            if (oB == BB) {
              if (oB < this.safeFrom) return null;
              let BB = oB + QB.length;
              if (BB <= this.safeTo) {
                let OB = QB.prop(YB.h.lookAhead);
                if (!OB || BB + OB < this.fragment.to) return QB
              }
            }
            this.index[OB]++, oB + QB.length >= Math.max(this.safeFrom, BB) && (this.trees.push(QB), this.start.push(oB), this.index.push(0))
          } else this.index[OB]++, this.nextStart = oB + QB.length
        }
      }
    }
    class SB {
      constructor(BB, OB) {
        this.stream = OB, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = BB.tokenizers.map((BB => new JB))
      }
      getActions(BB) {
        let OB = 0,
          GB = null,
          {
            parser: YB
          } = BB.p,
          {
            tokenizers: DB
          } = YB,
          QB = YB.stateSlot(BB.state, 3),
          oB = BB.curContext ? BB.curContext.hash : 0,
          jB = 0;
        for (let yB = 0; yB < DB.length; yB++) {
          if (0 == (1 << yB & QB)) continue;
          let YB = DB[yB],
            JB = this.tokens[yB];
          if ((!GB || YB.fallback) && ((YB.contextual || JB.start != BB.pos || JB.mask != QB || JB.context != oB) && (this.updateCachedToken(JB, YB, BB), JB.mask = QB, JB.context = oB), JB.lookAhead > JB.end + 25 && (jB = Math.max(JB.lookAhead, jB)), 0 != JB.value)) {
            let DB = OB;
            if (JB.extended > -1 && (OB = this.addActions(BB, JB.extended, JB.end, OB)), OB = this.addActions(BB, JB.value, JB.end, OB), !YB.extend && (GB = JB, OB > DB)) break
          }
        }
        for (; this.actions.length > OB;) this.actions.pop();
        return jB && BB.setLookAhead(jB), GB || BB.pos != this.stream.end || (GB = new JB, GB.value = BB.p.parser.eofTerm, GB.start = GB.end = BB.pos, OB = this.addActions(BB, GB.value, GB.end, OB)), this.mainToken = GB, this.actions
      }
      getMainToken(BB) {
        if (this.mainToken) return this.mainToken;
        let OB = new JB,
          {
            pos: GB,
            p: YB
          } = BB;
        return OB.start = GB, OB.end = Math.min(GB + 1, YB.stream.end), OB.value = GB == YB.stream.end ? YB.parser.eofTerm : 0, OB
      }
      updateCachedToken(BB, OB, GB) {
        let YB = this.stream.clipPos(GB.pos);
        if (OB.token(this.stream.reset(YB, BB), GB), BB.value > -1) {
          let {
            parser: OB
          } = GB.p;
          for (let YB = 0; YB < OB.specialized.length; YB++)
            if (OB.specialized[YB] == BB.value) {
              let DB = OB.specializers[YB](this.stream.read(BB.start, BB.end), GB);
              if (DB >= 0 && GB.p.parser.dialect.allows(DB >> 1)) {
                0 == (1 & DB) ? BB.value = DB >> 1 : BB.extended = DB >> 1;
                break
              }
            }
        } else BB.value = 0, BB.end = this.stream.clipPos(YB + 1)
      }
      putAction(BB, OB, GB, YB) {
        for (let DB = 0; DB < YB; DB += 3)
          if (this.actions[DB] == BB) return YB;
        return this.actions[YB++] = BB, this.actions[YB++] = OB, this.actions[YB++] = GB, YB
      }
      addActions(BB, OB, GB, YB) {
        let {
          state: DB
        } = BB, {
          parser: QB
        } = BB.p, {
          data: oB
        } = QB;
        for (let jB = 0; jB < 2; jB++)
          for (let BB = QB.stateSlot(DB, jB ? 2 : 1);; BB += 3) {
            if (65535 == oB[BB]) {
              if (1 != oB[BB + 1]) {
                0 == YB && 2 == oB[BB + 1] && (YB = this.putAction(KB(oB, BB + 2), OB, GB, YB));
                break
              }
              BB = KB(oB, BB + 2)
            }
            oB[BB] == OB && (YB = this.putAction(KB(oB, BB + 1), OB, GB, YB))
          }
        return YB
      }
    }
    class nB {
      constructor(BB, OB, GB, YB) {
        this.parser = BB, this.input = OB, this.JZ = YB, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new PB(OB, YB), this.tokens = new SB(BB, this.stream), this.topTerm = BB.top[1];
        let {
          from: QB
        } = YB[0];
        this.stacks = [DB.start(this, BB.top[0], QB)], this.fragments = GB.length && this.stream.end - QB > 4 * BB.bufferLength ? new VB(GB, BB.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let BB, OB, GB = this.stacks,
          YB = this.minStackPos,
          DB = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == GB.length) {
          let [BB] = GB;
          for (; BB.forceReduce() && BB.stack.length && BB.stack[BB.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let QB = 0; QB < GB.length; QB++) {
          let oB = GB[QB];
          for (;;) {
            if (this.tokens.mainToken = null, oB.pos > YB) DB.push(oB);
            else {
              if (this.advanceStack(oB, DB, GB)) continue;
              {
                BB || (BB = [], OB = []), BB.push(oB);
                let GB = this.tokens.getMainToken(oB);
                OB.push(GB.value, GB.end)
              }
            }
            break
          }
        }
        if (!DB.length) {
          let OB = BB && function(BB) {
            let OB = null;
            for (let GB of BB) {
              let BB = GB.p.stoppedAt;
              (GB.pos == GB.p.stream.end || null != BB && GB.pos > BB) && GB.p.parser.stateFlag(GB.state, 2) && (!OB || OB.score < GB.score) && (OB = GB)
            }
            return OB
          }(BB);
          if (OB) return RB && console.log("Finish with " + this.stackID(OB)), this.stackToTree(OB);
          if (this.parser.strict) throw RB && BB && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + YB);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && BB) {
          let GB = null != this.stoppedAt && BB[0].pos > this.stoppedAt ? BB[0] : this.runRecovery(BB, OB, DB);
          if (GB) return RB && console.log("Force-finish " + this.stackID(GB)), this.stackToTree(GB.forceAll())
        }
        if (this.recovering) {
          let BB = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (DB.length > BB)
            for (DB.sort(((BB, OB) => OB.score - BB.score)); DB.length > BB;) DB.pop();
          DB.some((BB => BB.reducePos > YB)) && this.recovering--
        } else if (DB.length > 1) {
          BB: for (let BB = 0; BB < DB.length - 1; BB++) {
            let OB = DB[BB];
            for (let GB = BB + 1; GB < DB.length; GB++) {
              let YB = DB[GB];
              if (OB.sameState(YB) || OB.buffer.length > 500 && YB.buffer.length > 500) {
                if (!((OB.score - YB.score || OB.buffer.length - YB.buffer.length) > 0)) {
                  DB.splice(BB--, 1);
                  continue BB
                }
                DB.splice(GB--, 1)
              }
            }
          }
          DB.length > 12 && (DB.sort(((BB, OB) => OB.score - BB.score)), DB.splice(12, DB.length - 12))
        }
        this.minStackPos = DB[0].pos;
        for (let QB = 1; QB < DB.length; QB++) DB[QB].pos < this.minStackPos && (this.minStackPos = DB[QB].pos);
        return null
      }
      stopAt(BB) {
        if (null != this.stoppedAt && this.stoppedAt < BB) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = BB
      }
      advanceStack(BB, OB, GB) {
        let DB = BB.pos,
          {
            parser: QB
          } = this,
          oB = RB ? this.stackID(BB) + " -> " : "";
        if (null != this.stoppedAt && DB > this.stoppedAt) return BB.forceReduce() ? BB : null;
        if (this.fragments) {
          let OB = BB.curContext && BB.curContext.tracker.strict,
            GB = OB ? BB.curContext.hash : 0;
          for (let jB = this.fragments.nodeAt(DB); jB;) {
            let DB = this.parser.nodeSet.types[jB.type.id] == jB.type ? QB.getGoto(BB.state, jB.type.id) : -1;
            if (DB > -1 && jB.length && (!OB || (jB.prop(YB.h.contextHash) || 0) == GB)) return BB.useNode(jB, DB), RB && console.log(oB + this.stackID(BB) + ` (via reuse of ${QB.getName(jB.type.id)})`), !0;
            if (!(jB instanceof YB.w) || 0 == jB.children.length || jB.positions[0] > 0) break;
            let yB = jB.children[0];
            if (!(yB instanceof YB.w && 0 == jB.positions[0])) break;
            jB = yB
          }
        }
        let jB = QB.stateSlot(BB.state, 4);
        if (jB > 0) return BB.reduce(jB), RB && console.log(oB + this.stackID(BB) + ` (via always-reduce ${QB.getName(65535&jB)})`), !0;
        if (BB.stack.length >= 8400)
          for (; BB.stack.length > 6e3 && BB.forceReduce(););
        let yB = this.tokens.getActions(BB);
        for (let YB = 0; YB < yB.length;) {
          let jB = yB[YB++],
            JB = yB[YB++],
            MB = yB[YB++],
            PB = YB == yB.length || !GB,
            zB = PB ? BB : BB.split(),
            lB = this.tokens.mainToken;
          if (zB.apply(jB, JB, lB ? lB.start : zB.pos, MB), RB && console.log(oB + this.stackID(zB) + ` (via ${0==(65536&jB)?"shift":`reduce of ${QB.getName(65535&jB)}`} for ${QB.getName(JB)} @ ${DB}${zB==BB?"":", split"})`), PB) return !0;
          zB.pos > DB ? OB.push(zB) : GB.push(zB)
        }
        return !1
      }
      advanceFully(BB, OB) {
        let GB = BB.pos;
        for (;;) {
          if (!this.advanceStack(BB, null, null)) return !1;
          if (BB.pos > GB) return UB(BB, OB), !0
        }
      }
      runRecovery(BB, OB, GB) {
        let YB = null,
          DB = !1;
        for (let QB = 0; QB < BB.length; QB++) {
          let oB = BB[QB],
            jB = OB[QB << 1],
            yB = OB[1 + (QB << 1)],
            JB = RB ? this.stackID(oB) + " -> " : "";
          if (oB.deadEnd) {
            if (DB) continue;
            if (DB = !0, oB.restart(), RB && console.log(JB + this.stackID(oB) + " (restarted)"), this.advanceFully(oB, GB)) continue
          }
          let MB = oB.split(),
            PB = JB;
          for (let BB = 0; BB < 10 && MB.forceReduce(); BB++) {
            if (RB && console.log(PB + this.stackID(MB) + " (via force-reduce)"), this.advanceFully(MB, GB)) break;
            RB && (PB = this.stackID(MB) + " -> ")
          }
          for (let BB of oB.recoverByInsert(jB)) RB && console.log(JB + this.stackID(BB) + " (via recover-insert)"), this.advanceFully(BB, GB);
          this.stream.end > oB.pos ? (yB == oB.pos && (yB++, jB = 0), oB.recoverByDelete(jB, yB), RB && console.log(JB + this.stackID(oB) + ` (via recover-delete ${this.parser.getName(jB)})`), UB(oB, GB)) : (!YB || YB.score < MB.score) && (YB = MB)
        }
        return YB
      }
      stackToTree(BB) {
        return BB.close(), YB.w.build({
          buffer: jB.create(BB),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.JZ[0].from,
          length: BB.pos - this.JZ[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(BB) {
        let OB = (WB || (WB = new WeakMap)).get(BB);
        return OB || WB.set(BB, OB = String.fromCodePoint(this.nextStackID++)), OB + BB
      }
    }

    function UB(BB, OB) {
      for (let GB = 0; GB < OB.length; GB++) {
        let YB = OB[GB];
        if (YB.pos == BB.pos && YB.sameState(BB)) return void(OB[GB].score < BB.score && (OB[GB] = BB))
      }
      OB.push(BB)
    }
    class fB {
      constructor(BB, OB, GB) {
        this.source = BB, this.flags = OB, this.disabled = GB
      }
      allows(BB) {
        return !this.disabled || 0 == this.disabled[BB]
      }
    }
    const kB = BB => BB;
    class dB extends YB.s {
      constructor(BB) {
        if (super(), this.wrappers = [], 14 != BB.version) throw new RangeError(`Parser version (${BB.version}) doesn't match runtime version (14)`);
        let OB = BB.nodeNames.split(" ");
        this.minRepeatTerm = OB.length;
        for (let YB = 0; YB < BB.repeatNodeCount; YB++) OB.push("");
        let GB = Object.keys(BB.topRules).map((OB => BB.topRules[OB][1])),
          DB = [];
        for (let YB = 0; YB < OB.length; YB++) DB.push([]);

        function QB(BB, OB, GB) {
          DB[BB].push([OB, OB.deserialize(String(GB))])
        }
        if (BB.nodeProps)
          for (let jB of BB.nodeProps) {
            let BB = jB[0];
            "string" == typeof BB && (BB = YB.h[BB]);
            for (let OB = 1; OB < jB.length;) {
              let GB = jB[OB++];
              if (GB >= 0) QB(GB, BB, jB[OB++]);
              else {
                let YB = jB[OB + -GB];
                for (let DB = -GB; DB > 0; DB--) QB(jB[OB++], BB, YB);
                OB++
              }
            }
          }
        this.nodeSet = new YB.j(OB.map(((OB, QB) => YB.m.define({
          name: QB >= this.minRepeatTerm ? void 0 : OB,
          id: QB,
          props: DB[QB],
          top: GB.indexOf(QB) > -1,
          error: 0 == QB,
          skipped: BB.skippedNodes && BB.skippedNodes.indexOf(QB) > -1
        })))), BB.propSources && (this.nodeSet = this.nodeSet.extend(...BB.propSources)), this.strict = !1, this.bufferLength = YB.d;
        let oB = yB(BB.tokenData);
        this.context = BB.context, this.specializerSpecs = BB.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let YB = 0; YB < this.specializerSpecs.length; YB++) this.specialized[YB] = this.specializerSpecs[YB].term;
        this.specializers = this.specializerSpecs.map(uB), this.states = yB(BB.states, Uint32Array), this.data = yB(BB.stateData), this.goto = yB(BB.goto), this.maxTerm = BB.maxTerm, this.tokenizers = BB.tokenizers.map((BB => "number" == typeof BB ? new zB(oB, BB) : BB)), this.topRules = BB.topRules, this.dialects = BB.dialects || {}, this.dynamicPrecedences = BB.dynamicPrecedences || null, this.tokenPrecTable = BB.tokenPrec, this.termNames = BB.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(BB, OB, GB) {
        let YB = new nB(this, BB, OB, GB);
        for (let DB of this.wrappers) YB = DB(YB, BB, OB, GB);
        return YB
      }
      getGoto(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          YB = this.goto;
        if (OB >= YB[0]) return -1;
        for (let DB = YB[OB + 1];;) {
          let OB = YB[DB++],
            QB = 1 & OB,
            oB = YB[DB++];
          if (QB && GB) return oB;
          for (let GB = DB + (OB >> 1); DB < GB; DB++)
            if (YB[DB] == BB) return oB;
          if (QB) return -1
        }
      }
      hasAction(BB, OB) {
        let GB = this.data;
        for (let YB = 0; YB < 2; YB++)
          for (let DB, QB = this.stateSlot(BB, YB ? 2 : 1);; QB += 3) {
            if (65535 == (DB = GB[QB])) {
              if (1 != GB[QB + 1]) {
                if (2 == GB[QB + 1]) return KB(GB, QB + 2);
                break
              }
              DB = GB[QB = KB(GB, QB + 2)]
            }
            if (DB == OB || 0 == DB) return KB(GB, QB + 1)
          }
        return 0
      }
      stateSlot(BB, OB) {
        return this.states[6 * BB + OB]
      }
      stateFlag(BB, OB) {
        return (this.stateSlot(BB, 0) & OB) > 0
      }
      validAction(BB, OB) {
        return !!this.allActions(BB, (BB => BB == OB || null))
      }
      allActions(BB, OB) {
        let GB = this.stateSlot(BB, 4),
          YB = GB ? OB(GB) : void 0;
        for (let DB = this.stateSlot(BB, 1); null == YB; DB += 3) {
          if (65535 == this.data[DB]) {
            if (1 != this.data[DB + 1]) break;
            DB = KB(this.data, DB + 2)
          }
          YB = OB(KB(this.data, DB + 1))
        }
        return YB
      }
      nextStates(BB) {
        let OB = [];
        for (let GB = this.stateSlot(BB, 1);; GB += 3) {
          if (65535 == this.data[GB]) {
            if (1 != this.data[GB + 1]) break;
            GB = KB(this.data, GB + 2)
          }
          if (0 == (1 & this.data[GB + 2])) {
            let BB = this.data[GB + 1];
            OB.some(((OB, GB) => 1 & GB && OB == BB)) || OB.push(this.data[GB], BB)
          }
        }
        return OB
      }
      configure(BB) {
        let OB = Object.assign(Object.create(dB.prototype), this);
        if (BB.props && (OB.nodeSet = this.nodeSet.extend(...BB.props)), BB.top) {
          let GB = this.topRules[BB.top];
          if (!GB) throw new RangeError(`Invalid top rule name ${BB.top}`);
          OB.top = GB
        }
        return BB.tokenizers && (OB.tokenizers = this.tokenizers.map((OB => {
          let GB = BB.tokenizers.find((BB => BB.from == OB));
          return GB ? GB.to : OB
        }))), BB.specializers && (OB.specializers = this.specializers.slice(), OB.specializerSpecs = this.specializerSpecs.map(((GB, YB) => {
          let DB = BB.specializers.find((BB => BB.from == GB.external));
          if (!DB) return GB;
          let QB = Object.assign(Object.assign({}, GB), {
            external: DB.to
          });
          return OB.specializers[YB] = uB(QB), QB
        }))), BB.contextTracker && (OB.context = BB.contextTracker), BB.dialect && (OB.dialect = this.parseDialect(BB.dialect)), null != BB.strict && (OB.strict = BB.strict), BB.wrap && (OB.wrappers = OB.wrappers.concat(BB.wrap)), null != BB.bufferLength && (OB.bufferLength = BB.bufferLength), OB
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
        let OB = this.dynamicPrecedences;
        return null == OB ? 0 : OB[BB] || 0
      }
      parseDialect(BB) {
        let OB = Object.keys(this.dialects),
          GB = OB.map((() => !1));
        if (BB)
          for (let DB of BB.split(" ")) {
            let BB = OB.indexOf(DB);
            BB >= 0 && (GB[BB] = !0)
          }
        let YB = null;
        for (let DB = 0; DB < OB.length; DB++)
          if (!GB[DB])
            for (let BB, GB = this.dialects[OB[DB]]; 65535 != (BB = this.data[GB++]);)(YB || (YB = new Uint8Array(this.maxTerm + 1)))[BB] = 1;
        return new fB(BB, GB, YB)
      }
      static deserialize(BB) {
        return new dB(BB)
      }
    }

    function KB(BB, OB) {
      return BB[OB] | BB[OB + 1] << 16
    }

    function uB(BB) {
      if (BB.external) {
        let OB = BB.extend ? 1 : 0;
        return (GB, YB) => BB.external(GB, YB) << 1 | OB
      }
      return BB.get
    }
    var mB = GB(44493);
    const IB = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      FB = new class {
        constructor(BB) {
          this.start = BB.start, this.shift = BB.shift || kB, this.reduce = BB.reduce || kB, this.reuse = BB.reuse || kB, this.hash = BB.hash || (() => 0), this.strict = !1 !== BB.strict
        }
      }({
        start: !1,
        shift: (BB, OB) => 5 == OB || 6 == OB || 320 == OB ? BB : 321 == OB,
        strict: !1
      }),
      iB = new pB(((BB, OB) => {
        let {
          next: GB
        } = BB;
        (125 == GB || -1 == GB || OB.context) && BB.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      LB = new pB(((BB, OB) => {
        let GB, {
          next: YB
        } = BB;
        IB.indexOf(YB) > -1 || (47 != YB || 47 != (GB = BB.peek(1)) && 42 != GB) && (125 == YB || 59 == YB || -1 == YB || OB.context || BB.acceptToken(316))
      }), {
        contextual: !0
      }),
      gB = new pB(((BB, OB) => {
        91 != BB.next || OB.context || BB.acceptToken(317)
      }), {
        contextual: !0
      }),
      rB = new pB(((BB, OB) => {
        let {
          next: GB
        } = BB;
        if (43 == GB || 45 == GB) {
          if (BB.advance(), GB == BB.next) {
            BB.advance();
            let GB = !OB.context && OB.canShift(1);
            BB.acceptToken(GB ? 1 : 2)
          }
        } else 63 == GB && 46 == BB.peek(1) && (BB.advance(), BB.advance(), (BB.next < 48 || BB.next > 57) && BB.acceptToken(3))
      }), {
        contextual: !0
      });

    function XB(BB, OB) {
      return BB >= 65 && BB <= 90 || BB >= 97 && BB <= 122 || 95 == BB || BB >= 192 || !OB && BB >= 48 && BB <= 57
    }
    const wB = new pB(((BB, OB) => {
        if (60 != BB.next || !OB.dialectEnabled(0)) return;
        if (BB.advance(), 47 == BB.next) return;
        let GB = 0;
        for (; IB.indexOf(BB.next) > -1;) BB.advance(), GB++;
        if (XB(BB.next, !0)) {
          for (BB.advance(), GB++; XB(BB.next, !1);) BB.advance(), GB++;
          for (; IB.indexOf(BB.next) > -1;) BB.advance(), GB++;
          if (44 == BB.next) return;
          for (let OB = 0;; OB++) {
            if (7 == OB) {
              if (!XB(BB.next, !0)) return;
              break
            }
            if (BB.next != "extends".charCodeAt(OB)) break;
            BB.advance(), GB++
          }
        }
        BB.acceptToken(4, -GB)
      })),
      EB = (0, mB.f)({
        "get set async static": mB.i.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": mB.i.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": mB.i.operatorKeyword,
        "let var const using function class extends": mB.i.definitionKeyword,
        "import export from": mB.i.moduleKeyword,
        "with debugger new": mB.i.keyword,
        TemplateString: mB.i.special(mB.i.string),
        super: mB.i.atom,
        BooleanLiteral: mB.i.bool,
        this: mB.i.self,
        null: mB.i.null,
        Star: mB.i.modifier,
        VariableName: mB.i.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": mB.i.function(mB.i.variableName),
        VariableDefinition: mB.i.definition(mB.i.variableName),
        Label: mB.i.labelName,
        PropertyName: mB.i.propertyName,
        PrivatePropertyName: mB.i.special(mB.i.propertyName),
        "CallExpression/MemberExpression/PropertyName": mB.i.function(mB.i.propertyName),
        "FunctionDeclaration/VariableDefinition": mB.i.function(mB.i.definition(mB.i.variableName)),
        "ClassDeclaration/VariableDefinition": mB.i.definition(mB.i.className),
        "NewExpression/VariableName": mB.i.className,
        PropertyDefinition: mB.i.definition(mB.i.propertyName),
        PrivatePropertyDefinition: mB.i.definition(mB.i.special(mB.i.propertyName)),
        UpdateOp: mB.i.updateOperator,
        "LineComment Hashbang": mB.i.lineComment,
        BlockComment: mB.i.blockComment,
        Number: mB.i.number,
        String: mB.i.string,
        Escape: mB.i.escape,
        ArithOp: mB.i.arithmeticOperator,
        LogicOp: mB.i.logicOperator,
        BitOp: mB.i.bitwiseOperator,
        CompareOp: mB.i.compareOperator,
        RegExp: mB.i.regexp,
        Equals: mB.i.definitionOperator,
        Arrow: mB.i.function(mB.i.punctuation),
        ": Spread": mB.i.punctuation,
        "( )": mB.i.paren,
        "[ ]": mB.i.squareBracket,
        "{ }": mB.i.brace,
        "InterpolationStart InterpolationEnd": mB.i.special(mB.i.brace),
        ".": mB.i.derefOperator,
        ", ;": mB.i.separator,
        "@": mB.i.meta,
        TypeName: mB.i.typeName,
        TypeDefinition: mB.i.definition(mB.i.typeName),
        "type enum interface implements namespace module declare": mB.i.definitionKeyword,
        "abstract global Privacy readonly override": mB.i.modifier,
        "is keyof unique infer asserts": mB.i.operatorKeyword,
        JSXAttributeValue: mB.i.attributeValue,
        JSXText: mB.i.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": mB.i.angleBracket,
        "JSXIdentifier JSXNameSpacedName": mB.i.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": mB.i.attributeName,
        "JSXBuiltin/JSXIdentifier": mB.i.standard(mB.i.tagName)
      }),
      cB = {
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
      hB = {
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
      aB = {
        __proto__: null,
        "<": 193
      },
      eB = dB.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: FB,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [EB],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [LB, gB, rB, wB, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, iB, new lB("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new lB("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: BB => cB[BB] || -1
        }, {
          term: 343,
          get: BB => hB[BB] || -1
        }, {
          term: 95,
          get: BB => aB[BB] || -1
        }],
        tokenPrec: 15201
      });
    var TB = GB(44485),
      bB = GB(44470),
      CB = GB(44474),
      HB = GB(44467);
    const vB = [(0, HB.s)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, HB.s)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, HB.s)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, HB.s)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, HB.s)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, HB.s)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, HB.s)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, HB.s)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, HB.s)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, HB.s)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, HB.s)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      sB = vB.concat([(0, HB.s)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, HB.s)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, HB.s)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      xB = new YB.o,
      tB = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function BO(BB) {
      return (OB, GB) => {
        let YB = OB.node.getChild("VariableDefinition");
        return YB && GB(YB, BB), !0
      }
    }
    const OO = ["FunctionDeclaration"],
      GO = {
        FunctionDeclaration: BO("function"),
        ClassDeclaration: BO("class"),
        ClassExpression: () => !0,
        EnumDeclaration: BO("constant"),
        TypeAliasDeclaration: BO("type"),
        NamespaceDeclaration: BO("namespace"),
        VariableDefinition(BB, OB) {
          BB.matchContext(OO) || OB(BB, "variable")
        },
        TypeDefinition(BB, OB) {
          OB(BB, "type")
        },
        __proto__: null
      };

    function YO(BB, OB) {
      let GB = xB.get(OB);
      if (GB) return GB;
      let DB = [],
        QB = !0;

      function oB(OB, GB) {
        let YB = BB.sliceString(OB.from, OB.to);
        DB.push({
          label: YB,
          type: GB
        })
      }
      return OB.cursor(YB.f.IncludeAnonymous).iterate((OB => {
        if (QB) QB = !1;
        else if (OB.name) {
          let BB = GO[OB.name];
          if (BB && BB(OB, oB) || tB.has(OB.name)) return !1
        } else if (OB.to - OB.from > 8192) {
          for (let GB of YO(BB, OB.node)) DB.push(GB);
          return !1
        }
      })), xB.set(OB, DB), DB
    }
    const DO = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      QO = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function oO(BB) {
      let OB = (0, TB.pb)(BB.state).resolveInner(BB.pos, -1);
      if (QO.indexOf(OB.name) > -1) return null;
      let GB = "VariableName" == OB.name || OB.to - OB.from < 20 && DO.test(BB.state.sliceDoc(OB.from, OB.to));
      if (!GB && !BB.explicit) return null;
      let YB = [];
      for (let DB = OB; DB; DB = DB.parent) tB.has(DB.name) && (YB = YB.concat(YO(BB.state.doc, DB)));
      return {
        options: YB,
        from: GB ? OB.from : BB.pos,
        validFor: DO
      }
    }
    const jO = TB.i.define({
        name: "javascript",
        parser: eB.configure({
          props: [TB._.add({
            IfStatement: (0, TB.q)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, TB.q)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: TB.E,
            SwitchBody: BB => {
              let OB = BB.textAfter,
                GB = /^\s*\}/.test(OB),
                YB = /^\s*(case|default)\b/.test(OB);
              return BB.baseIndent + (GB ? 0 : YB ? 1 : 2) * BB.unit
            },
            Block: (0, TB.A)({
              closing: "}"
            }),
            ArrowFunction: BB => BB.baseIndent + BB.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, TB.q)({
              except: /^\s*{/
            }),
            JSXElement(BB) {
              let OB = /^\s*<\//.test(BB.textAfter);
              return BB.lineIndent(BB.node.from) + (OB ? 0 : BB.unit)
            },
            JSXEscape(BB) {
              let OB = /\s*\}/.test(BB.textAfter);
              return BB.lineIndent(BB.node.from) + (OB ? 0 : BB.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": BB => BB.column(BB.node.from) + BB.unit
          }), TB.R.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": TB.J,
            BlockComment: BB => ({
              from: BB.from + 2,
              to: BB.to - 2
            }),
            JSXElement(BB) {
              let OB = BB.firstChild;
              if (!OB || "JSXSelfClosingTag" == OB.name) return null;
              let GB = BB.lastChild;
              return {
                from: OB.to,
                to: GB.type.isError ? BB.to : GB.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(BB) {
              var OB;
              let GB = null === (OB = BB.firstChild) || void 0 === OB ? void 0 : OB.nextSibling,
                YB = BB.lastChild;
              return !GB || GB.type.isError ? null : {
                from: GB.to,
                to: YB.type.isError ? BB.to : YB.from
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
      yO = {
        test: BB => /^JSX/.test(BB.name),
        facet: (0, TB.x)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      JO = jO.configure({
        dialect: "ts"
      }, "typescript"),
      MO = jO.configure({
        dialect: "jsx",
        props: [TB.ib.add((BB => BB.isTop ? [yO] : void 0))]
      }),
      PO = jO.configure({
        dialect: "jsx ts",
        props: [TB.ib.add((BB => BB.isTop ? [yO] : void 0))]
      }, "typescript");
    let zO = BB => ({
      label: BB,
      type: "keyword"
    });
    const lO = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(zO),
      pO = lO.concat(["declare", "implements", "private", "protected", "public"].map(zO));

    function qO() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        OB = BB.jsx ? BB.typescript ? PO : MO : BB.typescript ? JO : jO,
        GB = BB.typescript ? sB.concat(pO) : vB.concat(lO);
      return new TB.k(OB, [jO.data.of({
        autocomplete: (0, HB.o)(QO, (0, HB.m)(GB))
      }), jO.data.of({
        autocomplete: oO
      }), BB.jsx ? RO : []])
    }

    function ZO(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BB.length;
      for (let YB = null === OB || void 0 === OB ? void 0 : OB.firstChild; YB; YB = YB.nextSibling)
        if ("JSXIdentifier" == YB.name || "JSXBuiltin" == YB.name || "JSXNamespacedName" == YB.name || "JSXMemberExpression" == YB.name) return BB.sliceString(YB.from, Math.min(YB.to, GB));
      return ""
    }
    const NO = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      RO = CB.h.inputHandler.of(((BB, OB, GB, YB, DB) => {
        if ((NO ? BB.composing : BB.compositionStarted) || BB.state.readOnly || OB != GB || ">" != YB && "/" != YB || !jO.isActiveAt(BB.state, OB, -1)) return !1;
        let QB = DB(),
          {
            state: oB
          } = QB,
          jB = oB.changeByRange((BB => {
            var OB;
            let GB, {
                head: DB
              } = BB,
              QB = (0, TB.pb)(oB).resolveInner(DB - 1, -1);
            if ("JSXStartTag" == QB.name && (QB = QB.parent), oB.doc.sliceString(DB - 1, DB) != YB || "JSXAttributeValue" == QB.name && QB.to > DB);
            else {
              if (">" == YB && "JSXFragmentTag" == QB.name) return {
                range: BB,
                changes: {
                  from: DB,
                  insert: "</>"
                }
              };
              if ("/" == YB && "JSXStartCloseTag" == QB.name) {
                let BB = QB.parent,
                  YB = BB.parent;
                if (YB && BB.from == DB - 2 && ((GB = ZO(oB.doc, YB.firstChild, DB)) || "JSXFragmentTag" == (null === (OB = YB.firstChild) || void 0 === OB ? void 0 : OB.name))) {
                  let BB = `${GB}>`;
                  return {
                    range: bB.j.cursor(DB + BB.length, -1),
                    changes: {
                      from: DB,
                      insert: BB
                    }
                  }
                }
              } else if (">" == YB) {
                let OB = function(BB) {
                  for (;;) {
                    if ("JSXOpenTag" == BB.name || "JSXSelfClosingTag" == BB.name || "JSXFragmentTag" == BB.name) return BB;
                    if ("JSXEscape" == BB.name || !BB.parent) return null;
                    BB = BB.parent
                  }
                }(QB);
                if (OB && "JSXOpenTag" == OB.name && !/^\/?>|^<\//.test(oB.doc.sliceString(DB, DB + 2)) && (GB = ZO(oB.doc, OB, DB))) return {
                  range: BB,
                  changes: {
                    from: DB,
                    insert: `</${GB}>`
                  }
                }
              }
            }
            return {
              range: BB
            }
          }));
        return !jB.changes.empty && (BB.dispatch([QB, oB.update(jB, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  44485: (BB, OB, GB) => {
    GB.d(OB, {
      $: () => bB,
      A: () => cB,
      E: () => aB,
      I: () => RO,
      J: () => vB,
      N: () => JO,
      R: () => HB,
      T: () => NB,
      U: () => mB,
      W: () => FB,
      _: () => LB,
      bb: () => IB,
      c: () => AO,
      db: () => uB,
      e: () => iB,
      eb: () => hO,
      i: () => pB,
      ib: () => PB,
      k: () => dB,
      kb: () => UO,
      lb: () => ZB,
      o: () => XO,
      pb: () => qB,
      q: () => eB,
      u: () => dO,
      x: () => MB
    });
    var YB, DB = GB(44488),
      QB = GB(44470),
      oB = GB(44474),
      jB = GB(44493),
      yB = GB(44478);
    const JB = new DB.h;

    function MB(BB) {
      return QB.o.define({
        combine: BB ? OB => OB.concat(BB) : void 0
      })
    }
    const PB = new DB.h;
    class zB {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = BB, this.name = YB, QB.l.prototype.hasOwnProperty("tree") || Object.defineProperty(QB.l.prototype, "tree", {
          get() {
            return qB(this)
          }
        }), this.parser = OB, this.extension = [kB.of(this), QB.l.languageData.of(((BB, OB, GB) => {
          let YB = lB(BB, OB, GB),
            DB = YB.type.prop(JB);
          if (!DB) return [];
          let QB = BB.facet(DB),
            oB = YB.type.prop(PB);
          if (oB) {
            let DB = YB.resolve(OB - YB.from, GB);
            for (let OB of oB)
              if (OB.test(DB, BB)) {
                let GB = BB.facet(OB.facet);
                return "replace" == OB.type ? GB : GB.concat(QB)
              }
          }
          return QB
        }))].concat(GB)
      }
      isActiveAt(BB, OB) {
        return lB(BB, OB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(JB) == this.data
      }
      findRegions(BB) {
        let OB = BB.facet(kB);
        if ((null === OB || void 0 === OB ? void 0 : OB.data) == this.data) return [{
          from: 0,
          to: BB.doc.length
        }];
        if (!OB || !OB.allowsNesting) return [];
        let GB = [],
          YB = (BB, OB) => {
            if (BB.prop(JB) == this.data) return void GB.push({
              from: OB,
              to: OB + BB.length
            });
            let QB = BB.prop(DB.h.mounted);
            if (QB) {
              if (QB.tree.prop(JB) == this.data) {
                if (QB.overlay)
                  for (let BB of QB.overlay) GB.push({
                    from: BB.from + OB,
                    to: BB.to + OB
                  });
                else GB.push({
                  from: OB,
                  to: OB + BB.length
                });
                return
              }
              if (QB.overlay) {
                let BB = GB.length;
                if (YB(QB.tree, QB.overlay[0].from + OB), GB.length > BB) return
              }
            }
            for (let GB = 0; GB < BB.children.length; GB++) {
              let QB = BB.children[GB];
              QB instanceof DB.w && YB(QB, BB.positions[GB] + OB)
            }
          };
        return YB(qB(BB), 0), GB
      }
      get allowsNesting() {
        return !0
      }
    }

    function lB(BB, OB, GB) {
      let YB = BB.facet(kB),
        QB = qB(BB).topNode;
      if (!YB || YB.allowsNesting)
        for (let oB = QB; oB; oB = oB.enter(OB, GB, DB.f.ExcludeBuffers | DB.f.EnterBracketed)) oB.type.isTop && (QB = oB);
      return QB
    }
    zB.setState = QB.D.define();
    class pB extends zB {
      constructor(BB, OB, GB) {
        super(BB, OB, [], GB), this.parser = OB
      }
      static define(BB) {
        let OB = MB(BB.languageData);
        return new pB(OB, BB.parser.configure({
          props: [JB.add((BB => BB.isTop ? OB : void 0))]
        }), BB.name)
      }
      configure(BB, OB) {
        return new pB(this.data, this.parser.configure(BB), OB || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function qB(BB) {
      let OB = BB.field(zB.state, !1);
      return OB ? OB.tree : DB.w.empty
    }

    function ZB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB.doc.length;
      var GB;
      return (null === (GB = BB.field(zB.state, !1)) || void 0 === GB ? void 0 : GB.context.isDone(OB)) || !1
    }

    function NB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB.viewport.to,
        GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        YB = function(BB, OB) {
          let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var YB;
          let DB = null === (YB = BB.field(zB.state, !1)) || void 0 === YB ? void 0 : YB.context;
          if (!DB) return null;
          let QB = DB.viewport;
          DB.updateViewport({
            from: 0,
            to: OB
          });
          let oB = DB.isDone(OB) || DB.work(GB, OB) ? DB.tree : null;
          return DB.updateViewport(QB), oB
        }(BB.state, OB, GB);
      return YB != qB(BB.state) && BB.dispatch({}), !!YB
    }
    class RB {
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
      read(BB, OB) {
        let GB = this.cursorPos - this.string.length;
        return BB < GB || OB >= this.cursorPos ? this.doc.sliceString(BB, OB) : this.string.slice(BB - GB, OB - GB)
      }
    }
    let WB = null;
    class AB {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          YB = arguments.length > 3 ? arguments[3] : void 0,
          DB = arguments.length > 4 ? arguments[4] : void 0,
          QB = arguments.length > 5 ? arguments[5] : void 0,
          oB = arguments.length > 6 ? arguments[6] : void 0,
          jB = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = BB, this.state = OB, this.fragments = GB, this.tree = YB, this.treeLen = DB, this.viewport = QB, this.skipped = oB, this.scheduleOn = jB, this.parse = null, this.tempSkipped = []
      }
      static create(BB, OB, GB) {
        return new AB(BB, OB, [], DB.w.empty, 0, GB, [], null)
      }
      startParse() {
        return this.parser.startParse(new RB(this.state.doc), this.fragments)
      }
      work(BB, OB) {
        return null != OB && OB >= this.state.doc.length && (OB = void 0), this.tree != DB.w.empty && this.isDone(null !== OB && void 0 !== OB ? OB : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var GB;
          if ("number" == typeof BB) {
            let OB = Date.now() + BB;
            BB = () => Date.now() > OB
          }
          for (this.parse || (this.parse = this.startParse()), null != OB && (null == this.parse.stoppedAt || this.parse.stoppedAt > OB) && OB < this.state.doc.length && this.parse.stopAt(OB);;) {
            let YB = this.parse.advance();
            if (YB) {
              if (this.fragments = this.withoutTempSkipped(DB.t.addTree(YB, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (GB = this.parse.stoppedAt) && void 0 !== GB ? GB : this.state.doc.length, this.tree = YB, this.parse = null, !(this.treeLen < (null !== OB && void 0 !== OB ? OB : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (BB()) return !1
          }
        }))
      }
      takeTree() {
        let BB, OB;
        this.parse && (BB = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > BB) && this.parse.stopAt(BB), this.withContext((() => {
          for (; !(OB = this.parse.advance()););
        })), this.treeLen = BB, this.tree = OB, this.fragments = this.withoutTempSkipped(DB.t.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(BB) {
        let OB = WB;
        WB = this;
        try {
          return BB()
        } finally {
          WB = OB
        }
      }
      withoutTempSkipped(BB) {
        for (let OB; OB = this.tempSkipped.pop();) BB = VB(BB, OB.from, OB.to);
        return BB
      }
      changes(BB, OB) {
        let {
          fragments: GB,
          tree: YB,
          treeLen: QB,
          viewport: oB,
          skipped: jB
        } = this;
        if (this.takeTree(), !BB.empty) {
          let OB = [];
          if (BB.iterChangedRanges(((BB, GB, YB, DB) => OB.push({
              fromA: BB,
              toA: GB,
              fromB: YB,
              toB: DB
            }))), GB = DB.t.applyChanges(GB, OB), YB = DB.w.empty, QB = 0, oB = {
              from: BB.mapPos(oB.from, -1),
              to: BB.mapPos(oB.to, 1)
            }, this.skipped.length) {
            jB = [];
            for (let OB of this.skipped) {
              let GB = BB.mapPos(OB.from, 1),
                YB = BB.mapPos(OB.to, -1);
              GB < YB && jB.push({
                from: GB,
                to: YB
              })
            }
          }
        }
        return new AB(this.parser, OB, GB, YB, QB, oB, jB, this.scheduleOn)
      }
      updateViewport(BB) {
        if (this.viewport.from == BB.from && this.viewport.to == BB.to) return !1;
        this.viewport = BB;
        let OB = this.skipped.length;
        for (let GB = 0; GB < this.skipped.length; GB++) {
          let {
            from: OB,
            to: YB
          } = this.skipped[GB];
          OB < BB.to && YB > BB.from && (this.fragments = VB(this.fragments, OB, YB), this.skipped.splice(GB--, 1))
        }
        return !(this.skipped.length >= OB) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(BB, OB) {
        this.skipped.push({
          from: BB,
          to: OB
        })
      }
      static getSkippingParser(BB) {
        return new class extends DB.s {
          createParse(OB, GB, YB) {
            let QB = YB[0].from,
              oB = YB[YB.length - 1].to;
            return {
              parsedPos: QB,
              advance() {
                let OB = WB;
                if (OB) {
                  for (let BB of YB) OB.tempSkipped.push(BB);
                  BB && (OB.scheduleOn = OB.scheduleOn ? Promise.all([OB.scheduleOn, BB]) : BB)
                }
                return this.parsedPos = oB, new DB.w(DB.m.none, [], [], oB - QB)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(BB) {
        BB = Math.min(BB, this.state.doc.length);
        let OB = this.fragments;
        return this.treeLen >= BB && OB.length && 0 == OB[0].from && OB[0].to >= BB
      }
      static get() {
        return WB
      }
    }

    function VB(BB, OB, GB) {
      return DB.t.applyChanges(BB, [{
        fromA: OB,
        toA: GB,
        fromB: OB,
        toB: GB
      }])
    }
    class SB {
      constructor(BB) {
        this.context = BB, this.tree = BB.tree
      }
      apply(BB) {
        if (!BB.docChanged && this.tree == this.context.tree) return this;
        let OB = this.context.changes(BB.changes, BB.state),
          GB = this.context.treeLen == BB.startState.doc.length ? void 0 : Math.max(BB.changes.mapPos(this.context.treeLen), OB.viewport.to);
        return OB.work(20, GB) || OB.takeTree(), new SB(OB)
      }
      static init(BB) {
        let OB = Math.min(3e3, BB.doc.length),
          GB = AB.create(BB.facet(kB).parser, BB, {
            from: 0,
            to: OB
          });
        return GB.work(20, OB) || GB.takeTree(), new SB(GB)
      }
    }
    zB.state = QB.G.define({
      create: SB.init,
      update(BB, OB) {
        for (let GB of OB.effects)
          if (GB.is(zB.setState)) return GB.value;
        return OB.startState.facet(kB) != OB.state.facet(kB) ? SB.init(OB.state) : BB.apply(OB)
      }
    });
    let nB = BB => {
      let OB = setTimeout((() => BB()), 500);
      return () => clearTimeout(OB)
    };
    "undefined" != typeof requestIdleCallback && (nB = BB => {
      let OB = -1,
        GB = setTimeout((() => {
          OB = requestIdleCallback(BB, {
            timeout: 400
          })
        }), 100);
      return () => OB < 0 ? clearTimeout(GB) : cancelIdleCallback(OB)
    });
    const UB = "undefined" != typeof navigator && (null === (YB = navigator.scheduling) || void 0 === YB ? void 0 : YB.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      fB = oB.l.fromClass(class {
        constructor(BB) {
          this.view = BB, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(BB) {
          let OB = this.view.state.field(zB.state).context;
          (OB.updateViewport(BB.view.viewport) || this.view.viewport.to > OB.treeLen) && this.scheduleWork(), (BB.docChanged || BB.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(OB)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: BB
          } = this.view, OB = BB.field(zB.state);
          OB.tree == OB.context.tree && OB.context.isDone(BB.doc.length) || (this.working = nB(this.work))
        }
        work(BB) {
          this.working = null;
          let OB = Date.now();
          if (this.chunkEnd < OB && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = OB + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: GB,
            viewport: {
              to: YB
            }
          } = this.view, DB = GB.field(zB.state);
          if (DB.tree == DB.context.tree && DB.context.isDone(YB + 1e5)) return;
          let QB = Date.now() + Math.min(this.chunkBudget, 100, BB && !UB ? Math.max(25, BB.timeRemaining() - 5) : 1e9),
            oB = DB.context.treeLen < YB && GB.doc.length > YB + 1e3,
            jB = DB.context.work((() => UB && UB() || Date.now() > QB), YB + (oB ? 0 : 1e5));
          this.chunkBudget -= Date.now() - OB, (jB || this.chunkBudget <= 0) && (DB.context.takeTree(), this.view.dispatch({
            effects: zB.setState.of(new SB(DB.context))
          })), this.chunkBudget > 0 && (!jB || oB) && this.scheduleWork(), this.checkAsyncSchedule(DB.context)
        }
        checkAsyncSchedule(BB) {
          BB.scheduleOn && (this.workScheduled++, BB.scheduleOn.then((() => this.scheduleWork())).catch((BB => (0, oB.X)(this.view.state, BB))).then((() => this.workScheduled--)), BB.scheduleOn = null)
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
      kB = QB.o.define({
        combine: BB => BB.length ? BB[0] : null,
        enables: BB => [zB.state, fB, oB.h.contentAttributes.compute([BB], (OB => {
          let GB = OB.facet(BB);
          return GB && GB.name ? {
            "data-language": GB.name
          } : {}
        }))]
      });
    class dB {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = BB, this.support = OB, this.extension = [BB, OB]
      }
    }
    const KB = QB.o.define(),
      uB = QB.o.define({
        combine: BB => {
          if (!BB.length) return "  ";
          let OB = BB[0];
          if (!OB || /\S/.test(OB) || Array.from(OB).some((BB => BB != OB[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(BB[0]));
          return OB
        }
      });

    function mB(BB) {
      let OB = BB.facet(uB);
      return 9 == OB.charCodeAt(0) ? BB.tabSize * OB.length : OB.length
    }

    function IB(BB, OB) {
      let GB = "",
        YB = BB.tabSize,
        DB = BB.facet(uB)[0];
      if ("\t" == DB) {
        for (; OB >= YB;) GB += "\t", OB -= YB;
        DB = " "
      }
      for (let QB = 0; QB < OB; QB++) GB += DB;
      return GB
    }

    function FB(BB, OB) {
      BB instanceof QB.l && (BB = new iB(BB));
      for (let YB of BB.state.facet(KB)) {
        let GB = YB(BB, OB);
        if (void 0 !== GB) return GB
      }
      let GB = qB(BB.state);
      return GB.length >= OB ? function(BB, OB, GB) {
        let YB = OB.resolveStack(GB),
          DB = OB.resolveInner(GB, -1).resolve(GB, 0).enterUnfinishedNodesBefore(GB);
        if (DB != YB.node) {
          let BB = [];
          for (let OB = DB; OB && !(OB.from < YB.node.from || OB.to > YB.node.to || OB.from == YB.node.from && OB.type == YB.node.type); OB = OB.parent) BB.push(OB);
          for (let OB = BB.length - 1; OB >= 0; OB--) YB = {
            node: BB[OB],
            next: YB
          }
        }
        return gB(YB, BB, GB)
      }(BB, GB, OB) : null
    }
    class iB {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = BB, this.options = OB, this.unit = mB(BB)
      }
      lineAt(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          GB = this.state.doc.lineAt(BB),
          {
            simulateBreak: YB,
            simulateDoubleBreak: DB
          } = this.options;
        return null != YB && YB >= GB.from && YB <= GB.to ? DB && YB == BB ? {
          text: "",
          from: BB
        } : (OB < 0 ? YB < BB : YB <= BB) ? {
          text: GB.text.slice(YB - GB.from),
          from: YB
        } : {
          text: GB.text.slice(0, YB - GB.from),
          from: GB.from
        } : GB
      }
      textAfterPos(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && BB == this.options.simulateBreak) return "";
        let {
          text: GB,
          from: YB
        } = this.lineAt(BB, OB);
        return GB.slice(BB - YB, Math.min(GB.length, BB + 100 - YB))
      }
      column(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: GB,
            from: YB
          } = this.lineAt(BB, OB),
          DB = this.countColumn(GB, BB - YB),
          QB = this.options.overrideIndentation ? this.options.overrideIndentation(YB) : -1;
        return QB > -1 && (DB += QB - this.countColumn(GB, GB.search(/\S|$/))), DB
      }
      countColumn(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB.length;
        return (0, QB.W)(BB, this.state.tabSize, OB)
      }
      lineIndent(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: GB,
            from: YB
          } = this.lineAt(BB, OB),
          DB = this.options.overrideIndentation;
        if (DB) {
          let BB = DB(YB);
          if (BB > -1) return BB
        }
        return this.countColumn(GB, GB.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const LB = new DB.h;

    function gB(BB, OB, GB) {
      for (let YB = BB; YB; YB = YB.next) {
        let BB = rB(YB.node);
        if (BB) return BB(wB.create(OB, GB, YB))
      }
      return 0
    }

    function rB(BB) {
      let OB = BB.type.prop(LB);
      if (OB) return OB;
      let GB, YB = BB.firstChild;
      if (YB && (GB = YB.type.prop(DB.h.closedBy))) {
        let OB = BB.lastChild,
          YB = OB && GB.indexOf(OB.name) > -1;
        return BB => hB(BB, !0, 1, void 0, YB && ! function(BB) {
          return BB.pos == BB.options.simulateBreak && BB.options.simulateDoubleBreak
        }(BB) ? OB.from : void 0)
      }
      return null == BB.parent ? XB : null
    }

    function XB() {
      return 0
    }
    class wB extends iB {
      constructor(BB, OB, GB) {
        super(BB.state, BB.options), this.base = BB, this.pos = OB, this.context = GB
      }
      get node() {
        return this.context.node
      }
      static create(BB, OB, GB) {
        return new wB(BB, OB, GB)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(BB) {
        let OB = this.state.doc.lineAt(BB.from);
        for (;;) {
          let GB = BB.resolve(OB.from);
          for (; GB.parent && GB.parent.from == GB.from;) GB = GB.parent;
          if (EB(GB, BB)) break;
          OB = this.state.doc.lineAt(GB.from)
        }
        return this.lineIndent(OB.from)
      }
      continue () {
        return gB(this.context.next, this.base, this.pos)
      }
    }

    function EB(BB, OB) {
      for (let GB = OB; GB; GB = GB.parent)
        if (BB == GB) return !0;
      return !1
    }

    function cB(BB) {
      let {
        closing: OB,
        align: GB = !0,
        units: YB = 1
      } = BB;
      return BB => hB(BB, GB, YB, OB)
    }

    function hB(BB, OB, GB, YB, DB) {
      let QB = BB.textAfter,
        oB = QB.match(/^\s*/)[0].length,
        jB = YB && QB.slice(oB, oB + YB.length) == YB || DB == BB.pos + oB,
        yB = OB ? function(BB) {
          let OB = BB.node,
            GB = OB.childAfter(OB.from),
            YB = OB.lastChild;
          if (!GB) return null;
          let DB = BB.options.simulateBreak,
            QB = BB.state.doc.lineAt(GB.from),
            oB = null == DB || DB <= QB.from ? QB.to : Math.min(QB.to, DB);
          for (let jB = GB.to;;) {
            let BB = OB.childAfter(jB);
            if (!BB || BB == YB) return null;
            if (!BB.type.isSkipped) {
              if (BB.from >= oB) return null;
              let OB = /^ */.exec(QB.text.slice(GB.to - QB.from))[0].length;
              return {
                from: GB.from,
                to: GB.to + OB
              }
            }
            jB = BB.to
          }
        }(BB) : null;
      return yB ? jB ? BB.column(yB.from) : BB.column(yB.to) : BB.baseIndent + (jB ? 0 : BB.unit * GB)
    }
    const aB = BB => BB.baseIndent;

    function eB() {
      let {
        except: BB,
        units: OB = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return GB => {
        let YB = BB && BB.test(GB.textAfter);
        return GB.baseIndent + (YB ? 0 : OB * GB.unit)
      }
    }
    const TB = 200;

    function bB() {
      return QB.l.transactionFilter.of((BB => {
        if (!BB.docChanged || !BB.isUserEvent("input.type") && !BB.isUserEvent("input.complete")) return BB;
        let OB = BB.startState.languageDataAt("indentOnInput", BB.startState.selection.main.head);
        if (!OB.length) return BB;
        let GB = BB.newDoc,
          {
            head: YB
          } = BB.newSelection.main,
          DB = GB.lineAt(YB);
        if (YB > DB.from + TB) return BB;
        let QB = GB.sliceString(DB.from, YB);
        if (!OB.some((BB => BB.test(QB)))) return BB;
        let {
          state: oB
        } = BB, jB = -1, yB = [];
        for (let {
            head: JB
          }
          of oB.selection.JZ) {
          let BB = oB.doc.lineAt(JB);
          if (BB.from == jB) continue;
          jB = BB.from;
          let OB = FB(oB, BB.from);
          if (null == OB) continue;
          let GB = /^\s*/.exec(BB.text)[0],
            YB = IB(oB, OB);
          GB != YB && yB.push({
            from: BB.from,
            to: BB.from + GB.length,
            insert: YB
          })
        }
        return yB.length ? [BB, {
          changes: yB,
          sequential: !0
        }] : BB
      }))
    }
    const CB = QB.o.define(),
      HB = new DB.h;

    function vB(BB) {
      let OB = BB.firstChild,
        GB = BB.lastChild;
      return OB && OB.to < GB.from ? {
        from: OB.to,
        to: GB.type.isError ? BB.to : GB.from
      } : null
    }

    function sB(BB) {
      let OB = BB.lastChild;
      return OB && OB.to == BB.to && OB.type.isError
    }

    function xB(BB, OB, GB) {
      for (let YB of BB.facet(CB)) {
        let DB = YB(BB, OB, GB);
        if (DB) return DB
      }
      return function(BB, OB, GB) {
        let YB = qB(BB);
        if (YB.length < GB) return null;
        let DB = null;
        for (let QB = YB.resolveStack(GB, 1); QB; QB = QB.next) {
          let oB = QB.node;
          if (oB.to <= GB || oB.from > GB) continue;
          if (DB && oB.from < OB) break;
          let jB = oB.type.prop(HB);
          if (jB && (oB.to < YB.length - 50 || YB.length == BB.doc.length || !sB(oB))) {
            let YB = jB(oB, BB);
            YB && YB.from <= GB && YB.from >= OB && YB.to > GB && (DB = YB)
          }
        }
        return DB
      }(BB, OB, GB)
    }

    function tB(BB, OB) {
      let GB = OB.mapPos(BB.from, 1),
        YB = OB.mapPos(BB.to, -1);
      return GB >= YB ? void 0 : {
        from: GB,
        to: YB
      }
    }
    const BO = QB.D.define({
        map: tB
      }),
      OO = QB.D.define({
        map: tB
      });

    function GO(BB) {
      let OB = [];
      for (let {
          head: GB
        }
        of BB.state.selection.JZ) OB.some((BB => BB.from <= GB && BB.to >= GB)) || OB.push(BB.lineBlockAt(GB));
      return OB
    }
    const YO = QB.G.define({
      create: () => oB.c.none,
      update(BB, OB) {
        OB.isUserEvent("delete") && OB.changes.iterChangedRanges(((OB, GB) => BB = DO(BB, OB, GB))), BB = BB.map(OB.changes);
        for (let GB of OB.effects)
          if (GB.is(BO) && !oO(BB, GB.value.from, GB.value.to)) {
            let {
              preparePlaceholder: YB
            } = OB.state.facet(PO), DB = YB ? oB.c.replace({
              widget: new qO(YB(OB.state, GB.value))
            }) : pO;
            BB = BB.update({
              add: [DB.range(GB.value.from, GB.value.to)]
            })
          } else GB.is(OO) && (BB = BB.update({
            filter: (BB, OB) => GB.value.from != BB || GB.value.to != OB,
            filterFrom: GB.value.from,
            filterTo: GB.value.to
          }));
        return OB.selection && (BB = DO(BB, OB.selection.main.head)), BB
      },
      provide: BB => oB.h.TD.from(BB),
      toJSON(BB, OB) {
        let GB = [];
        return BB.between(0, OB.doc.length, ((BB, OB) => {
          GB.push(BB, OB)
        })), GB
      },
      fromJSON(BB) {
        if (!Array.isArray(BB) || BB.length % 2) throw new RangeError("Invalid JSON for fold state");
        let OB = [];
        for (let GB = 0; GB < BB.length;) {
          let YB = BB[GB++],
            DB = BB[GB++];
          if ("number" != typeof YB || "number" != typeof DB) throw new RangeError("Invalid JSON for fold state");
          OB.push(pO.range(YB, DB))
        }
        return oB.c.set(OB, !0)
      }
    });

    function DO(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : OB,
        YB = !1;
      return BB.between(OB, GB, ((BB, DB) => {
        BB < GB && DB > OB && (YB = !0)
      })), YB ? BB.update({
        filterFrom: OB,
        filterTo: GB,
        filter: (BB, YB) => BB >= GB || YB <= OB
      }) : BB
    }

    function QO(BB, OB, GB) {
      var YB;
      let DB = null;
      return null === (YB = BB.field(YO, !1)) || void 0 === YB || YB.between(OB, GB, ((BB, OB) => {
        (!DB || DB.from > BB) && (DB = {
          from: BB,
          to: OB
        })
      })), DB
    }

    function oO(BB, OB, GB) {
      let YB = !1;
      return BB.between(OB, OB, ((BB, DB) => {
        BB == OB && DB == GB && (YB = !0)
      })), YB
    }

    function jO(BB, OB) {
      return BB.field(YO, !1) ? OB : OB.concat(QB.D.appendConfig.of(zO()))
    }

    function yO(BB, OB) {
      let GB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        YB = BB.state.doc.lineAt(OB.from).number,
        DB = BB.state.doc.lineAt(OB.to).number;
      return oB.h.announce.of(`${BB.state.phrase(GB?"Folded lines":"Unfolded lines")} ${YB} ${BB.state.phrase("to")} ${DB}.`)
    }
    const JO = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: BB => {
          for (let OB of GO(BB)) {
            let GB = xB(BB.state, OB.from, OB.to);
            if (GB) return BB.dispatch({
              effects: jO(BB.state, [BO.of(GB), yO(BB, GB)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: BB => {
          if (!BB.state.field(YO, !1)) return !1;
          let OB = [];
          for (let GB of GO(BB)) {
            let YB = QO(BB.state, GB.from, GB.to);
            YB && OB.push(OO.of(YB), yO(BB, YB, !1))
          }
          return OB.length && BB.dispatch({
            effects: OB
          }), OB.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: BB => {
          let {
            state: OB
          } = BB, GB = [];
          for (let YB = 0; YB < OB.doc.length;) {
            let DB = BB.lineBlockAt(YB),
              QB = xB(OB, DB.from, DB.to);
            QB && GB.push(BO.of(QB)), YB = (QB ? BB.lineBlockAt(QB.to) : DB).to + 1
          }
          return GB.length && BB.dispatch({
            effects: jO(BB.state, GB)
          }), !!GB.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: BB => {
          let OB = BB.state.field(YO, !1);
          if (!OB || !OB.size) return !1;
          let GB = [];
          return OB.between(0, BB.state.doc.length, ((BB, OB) => {
            GB.push(OO.of({
              from: BB,
              to: OB
            }))
          })), BB.dispatch({
            effects: GB
          }), !0
        }
      }],
      MO = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      PO = QB.o.define({
        combine: BB => (0, QB.V)(BB, MO)
      });

    function zO(BB) {
      let OB = [YO, WO];
      return BB && OB.push(PO.of(BB)), OB
    }

    function lO(BB, OB) {
      let {
        state: GB
      } = BB, YB = GB.facet(PO), DB = OB => {
        let GB = BB.lineBlockAt(BB.posAtDOM(OB.target)),
          YB = QO(BB.state, GB.from, GB.to);
        YB && BB.dispatch({
          effects: OO.of(YB)
        }), OB.preventDefault()
      };
      if (YB.placeholderDOM) return YB.placeholderDOM(BB, DB, OB);
      let QB = document.createElement("span");
      return QB.textContent = YB.placeholderText, QB.setAttribute("aria-label", GB.phrase("folded code")), QB.title = GB.phrase("unfold"), QB.className = "cm-foldPlaceholder", QB.onclick = DB, QB
    }
    const pO = oB.c.replace({
      widget: new class extends oB.o {
        toDOM(BB) {
          return lO(BB, null)
        }
      }
    });
    class qO extends oB.o {
      constructor(BB) {
        super(), this.value = BB
      }
      eq(BB) {
        return this.value == BB.value
      }
      toDOM(BB) {
        return lO(BB, this.value)
      }
    }
    const ZO = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class NO extends oB.i {
      constructor(BB, OB) {
        super(), this.config = BB, this.open = OB
      }
      eq(BB) {
        return this.config == BB.config && this.open == BB.open
      }
      toDOM(BB) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let OB = document.createElement("span");
        return OB.textContent = this.open ? this.config.openText : this.config.closedText, OB.title = BB.state.phrase(this.open ? "Fold line" : "Unfold line"), OB
      }
    }

    function RO() {
      let BB = {
          ...ZO,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        OB = new NO(BB, !0),
        GB = new NO(BB, !1),
        YB = oB.l.fromClass(class {
          constructor(BB) {
            this.from = BB.viewport.from, this.markers = this.buildMarkers(BB)
          }
          update(OB) {
            (OB.docChanged || OB.viewportChanged || OB.startState.facet(kB) != OB.state.facet(kB) || OB.startState.field(YO, !1) != OB.state.field(YO, !1) || qB(OB.startState) != qB(OB.state) || BB.foldingChanged(OB)) && (this.markers = this.buildMarkers(OB.view))
          }
          buildMarkers(BB) {
            let YB = new QB.v;
            for (let DB of BB.viewportLineBlocks) {
              let QB = QO(BB.state, DB.from, DB.to) ? GB : xB(BB.state, DB.from, DB.to) ? OB : null;
              QB && YB.add(DB.from, DB.from, QB)
            }
            return YB.finish()
          }
        }),
        {
          domEventHandlers: DB
        } = BB;
      return [YB, (0, oB.F)({
        class: "cm-foldGutter",
        markers(BB) {
          var OB;
          return (null === (OB = BB.plugin(YB)) || void 0 === OB ? void 0 : OB.markers) || QB.z.empty
        },
        initialSpacer: () => new NO(BB, !1),
        domEventHandlers: {
          ...DB,
          click: (BB, OB, GB) => {
            if (DB.click && DB.click(BB, OB, GB)) return !0;
            let YB = QO(BB.state, OB.from, OB.to);
            if (YB) return BB.dispatch({
              effects: OO.of(YB)
            }), !0;
            let QB = xB(BB.state, OB.from, OB.to);
            return !!QB && (BB.dispatch({
              effects: BO.of(QB)
            }), !0)
          }
        }
      }), zO()]
    }
    const WO = oB.h.baseTheme({
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
    class AO {
      constructor(BB, OB) {
        let GB;

        function YB(BB) {
          let OB = yB.d.newName();
          return (GB || (GB = Object.create(null)))["." + OB] = BB, OB
        }
        this.specs = BB;
        const DB = "string" == typeof OB.all ? OB.all : OB.all ? YB(OB.all) : void 0,
          QB = OB.scope;
        this.scope = QB instanceof zB ? BB => BB.prop(JB) == QB.data : QB ? BB => BB == QB : void 0, this.style = (0, jB.g)(BB.map((BB => ({
          tag: BB.tag,
          class: BB.class || YB(Object.assign({}, BB, {
            tag: null
          }))
        }))), {
          all: DB
        }).style, this.module = GB ? new yB.d(GB) : null, this.themeType = OB.themeType
      }
      static define(BB, OB) {
        return new AO(BB, OB || {})
      }
    }
    const VO = QB.o.define(),
      SO = QB.o.define({
        combine: BB => BB.length ? [BB[0]] : null
      });

    function nO(BB) {
      let OB = BB.facet(VO);
      return OB.length ? OB : BB.facet(SO)
    }

    function UO(BB, OB) {
      let GB, YB = [kO];
      return BB instanceof AO && (BB.module && YB.push(oB.h.styleModule.of(BB.module)), GB = BB.themeType), (null === OB || void 0 === OB ? void 0 : OB.fallback) ? YB.push(SO.of(BB)) : GB ? YB.push(VO.computeN([oB.h.darkTheme], (OB => OB.facet(oB.h.darkTheme) == ("dark" == GB) ? [BB] : []))) : YB.push(VO.of(BB)), YB
    }
    class fO {
      constructor(BB) {
        this.markCache = Object.create(null), this.tree = qB(BB.state), this.TD = this.buildDeco(BB, nO(BB.state)), this.decoratedTo = BB.viewport.to
      }
      update(BB) {
        let OB = qB(BB.state),
          GB = nO(BB.state),
          YB = GB != nO(BB.startState),
          {
            viewport: DB
          } = BB.view,
          QB = BB.changes.mapPos(this.decoratedTo, 1);
        OB.length < DB.to && !YB && OB.type == this.tree.type && QB >= DB.to ? (this.TD = this.TD.map(BB.changes), this.decoratedTo = QB) : (OB != this.tree || BB.viewportChanged || YB) && (this.tree = OB, this.TD = this.buildDeco(BB.view, GB), this.decoratedTo = DB.to)
      }
      buildDeco(BB, OB) {
        if (!OB || !this.tree.length) return oB.c.none;
        let GB = new QB.v;
        for (let {
            from: YB,
            to: DB
          }
          of BB.xBB)(0, jB.b)(this.tree, OB, ((BB, OB, YB) => {
          GB.add(BB, OB, this.markCache[YB] || (this.markCache[YB] = oB.c.mark({
            class: YB
          })))
        }), YB, DB);
        return GB.finish()
      }
    }
    const kO = QB.r.high(oB.l.fromClass(fO, {
        TD: BB => BB.TD
      })),
      dO = AO.define([{
        tag: jB.i.meta,
        color: "#404740"
      }, {
        tag: jB.i.link,
        textDecoration: "underline"
      }, {
        tag: jB.i.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: jB.i.emphasis,
        fontStyle: "italic"
      }, {
        tag: jB.i.strong,
        fontWeight: "bold"
      }, {
        tag: jB.i.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: jB.i.keyword,
        color: "#708"
      }, {
        tag: [jB.i.atom, jB.i.bool, jB.i.url, jB.i.contentSeparator, jB.i.labelName],
        color: "#219"
      }, {
        tag: [jB.i.literal, jB.i.inserted],
        color: "#164"
      }, {
        tag: [jB.i.string, jB.i.deleted],
        color: "#a11"
      }, {
        tag: [jB.i.regexp, jB.i.escape, jB.i.special(jB.i.string)],
        color: "#e40"
      }, {
        tag: jB.i.definition(jB.i.variableName),
        color: "#00f"
      }, {
        tag: jB.i.local(jB.i.variableName),
        color: "#30a"
      }, {
        tag: [jB.i.typeName, jB.i.namespace],
        color: "#085"
      }, {
        tag: jB.i.className,
        color: "#167"
      }, {
        tag: [jB.i.special(jB.i.variableName), jB.i.macroName],
        color: "#256"
      }, {
        tag: jB.i.definition(jB.i.propertyName),
        color: "#00c"
      }, {
        tag: jB.i.comment,
        color: "#940"
      }, {
        tag: jB.i.invalid,
        color: "#f00"
      }]),
      KO = oB.h.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      uO = 1e4,
      mO = "()[]{}",
      IO = QB.o.define({
        combine: BB => (0, QB.V)(BB, {
          afterCursor: !0,
          brackets: mO,
          maxScanDistance: uO,
          renderMatch: LO
        })
      }),
      FO = oB.c.mark({
        class: "cm-matchingBracket"
      }),
      iO = oB.c.mark({
        class: "cm-nonmatchingBracket"
      });

    function LO(BB) {
      let OB = [],
        GB = BB.matched ? FO : iO;
      return OB.push(GB.range(BB.start.from, BB.start.to)), BB.end && OB.push(GB.range(BB.end.from, BB.end.to)), OB
    }

    function gO(BB) {
      let OB = [],
        GB = BB.facet(IO);
      for (let YB of BB.selection.JZ) {
        if (!YB.empty) continue;
        let DB = hO(BB, YB.head, -1, GB) || YB.head > 0 && hO(BB, YB.head - 1, 1, GB) || GB.afterCursor && (hO(BB, YB.head, 1, GB) || YB.head < BB.doc.length && hO(BB, YB.head + 1, -1, GB));
        DB && (OB = OB.concat(GB.renderMatch(DB, BB)))
      }
      return oB.c.set(OB, !0)
    }
    const rO = [oB.l.fromClass(class {
      constructor(BB) {
        this.paused = !1, this.TD = gO(BB.state)
      }
      update(BB) {
        (BB.docChanged || BB.selectionSet || this.paused) && (BB.view.composing ? (this.TD = this.TD.map(BB.changes), this.paused = !0) : (this.TD = gO(BB.state), this.paused = !1))
      }
    }, {
      TD: BB => BB.TD
    }), KO];

    function XO() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [IO.of(BB), rO]
    }
    const wO = new DB.h;

    function EO(BB, OB, GB) {
      let YB = BB.prop(OB < 0 ? DB.h.openedBy : DB.h.closedBy);
      if (YB) return YB;
      if (1 == BB.name.length) {
        let YB = GB.indexOf(BB.name);
        if (YB > -1 && YB % 2 == (OB < 0 ? 1 : 0)) return [GB[YB + OB]]
      }
      return null
    }

    function cO(BB) {
      let OB = BB.type.prop(wO);
      return OB ? OB(BB.node) : BB
    }

    function hO(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        DB = YB.maxScanDistance || uO,
        QB = YB.brackets || mO,
        oB = qB(BB),
        jB = oB.resolveInner(OB, GB);
      for (let yB = jB; yB; yB = yB.parent) {
        let YB = EO(yB.type, GB, QB);
        if (YB && yB.from < yB.to) {
          let DB = cO(yB);
          if (DB && (GB > 0 ? OB >= DB.from && OB < DB.to : OB > DB.from && OB <= DB.to)) return aO(BB, OB, GB, yB, DB, YB, QB)
        }
      }
      return function(BB, OB, GB, YB, DB, QB, oB) {
        if (GB < 0 ? !OB : OB == BB.doc.length) return null;
        let jB = GB < 0 ? BB.sliceDoc(OB - 1, OB) : BB.sliceDoc(OB, OB + 1),
          yB = oB.indexOf(jB);
        if (yB < 0 || yB % 2 == 0 != GB > 0) return null;
        let JB = {
            from: GB < 0 ? OB - 1 : OB,
            to: GB > 0 ? OB + 1 : OB
          },
          MB = BB.doc.iterRange(OB, GB > 0 ? BB.doc.length : 0),
          PB = 0;
        for (let zB = 0; !MB.next().done && zB <= QB;) {
          let BB = MB.value;
          GB < 0 && (zB += BB.length);
          let QB = OB + zB * GB;
          for (let OB = GB > 0 ? 0 : BB.length - 1, jB = GB > 0 ? BB.length : -1; OB != jB; OB += GB) {
            let jB = oB.indexOf(BB[OB]);
            if (!(jB < 0 || YB.resolveInner(QB + OB, 1).type != DB))
              if (jB % 2 == 0 == GB > 0) PB++;
              else {
                if (1 == PB) return {
                  start: JB,
                  end: {
                    from: QB + OB,
                    to: QB + OB + 1
                  },
                  matched: jB >> 1 == yB >> 1
                };
                PB--
              }
          }
          GB > 0 && (zB += BB.length)
        }
        return MB.done ? {
          start: JB,
          matched: !1
        } : null
      }(BB, OB, GB, oB, jB.type, DB, QB)
    }

    function aO(BB, OB, GB, YB, DB, QB, oB) {
      let jB = YB.parent,
        yB = {
          from: DB.from,
          to: DB.to
        },
        JB = 0,
        MB = null === jB || void 0 === jB ? void 0 : jB.cursor();
      if (MB && (GB < 0 ? MB.childBefore(YB.from) : MB.childAfter(YB.to)))
        do {
          if (GB < 0 ? MB.to <= YB.from : MB.from >= YB.to) {
            if (0 == JB && QB.indexOf(MB.type.name) > -1 && MB.from < MB.to) {
              let BB = cO(MB);
              return {
                start: yB,
                end: BB ? {
                  from: BB.from,
                  to: BB.to
                } : void 0,
                matched: !0
              }
            }
            if (EO(MB.type, GB, oB)) JB++;
            else if (EO(MB.type, -GB, oB)) {
              if (0 == JB) {
                let BB = cO(MB);
                return {
                  start: yB,
                  end: BB && BB.from < BB.to ? {
                    from: BB.from,
                    to: BB.to
                  } : void 0,
                  matched: !1
                }
              }
              JB--
            }
          }
        } while (GB < 0 ? MB.prevSibling() : MB.nextSibling());
      return {
        start: yB,
        matched: !1
      }
    }
    const eO = Object.create(null),
      TO = [DB.m.none],
      bO = [],
      CO = Object.create(null),
      HO = Object.create(null);
    for (let [xO, tO] of [
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
      ]) HO[xO] = sO(eO, tO);

    function vO(BB, OB) {
      bO.indexOf(BB) > -1 || (bO.push(BB), console.warn(OB))
    }

    function sO(BB, OB) {
      let GB = [];
      for (let DB of OB.split(" ")) {
        let OB = [];
        for (let GB of DB.split(".")) {
          let YB = BB[GB] || jB.i[GB];
          YB ? "function" == typeof YB ? OB.length ? OB = OB.map(YB) : vO(GB, `Modifier ${GB} used at start of tag`) : OB.length ? vO(GB, `Tag ${GB} used as modifier`) : OB = Array.isArray(YB) ? YB : [YB] : vO(GB, `Unknown highlighting tag ${GB}`)
        }
        for (let BB of OB) GB.push(BB)
      }
      if (!GB.length) return 0;
      let YB = OB.replace(/ /g, "_"),
        QB = YB + " " + GB.map((BB => BB.id)),
        oB = CO[QB];
      if (oB) return oB.id;
      let yB = CO[QB] = DB.m.define({
        id: TO.length,
        name: YB,
        props: [(0, jB.f)({
          [YB]: GB
        })]
      });
      return TO.push(yB), yB.id
    }
    oB.f.RTL, oB.f.LTR
  },
  44517: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => WB,
      e: () => nB
    });
    var YB = GB(44474),
      DB = GB(44470),
      QB = GB(44480);
    class oB {
      constructor(BB, OB, GB) {
        this.from = BB, this.to = OB, this.diagnostic = GB
      }
    }
    class jB {
      constructor(BB, OB, GB) {
        this.diagnostics = BB, this.panel = OB, this.selected = GB
      }
      static init(BB, OB, GB) {
        let QB = GB.facet(VB).markerFilter;
        QB && (BB = QB(BB, GB));
        let oB = BB.slice().sort(((BB, OB) => BB.from - OB.from || BB.to - OB.to)),
          JB = new DB.v,
          MB = [],
          PB = 0,
          zB = GB.doc.iter(),
          lB = 0,
          pB = GB.doc.length;
        for (let DB = 0;;) {
          let BB, OB, GB = DB == oB.length ? null : oB[DB];
          if (!GB && !MB.length) break;
          if (MB.length) BB = PB, OB = MB.reduce(((BB, OB) => Math.min(BB, OB.to)), GB && GB.from > BB ? GB.from : 1e8);
          else {
            if (BB = GB.from, BB > pB) break;
            OB = GB.to, MB.push(GB), DB++
          }
          for (; DB < oB.length;) {
            let GB = oB[DB];
            if (GB.from != BB || !(GB.to > GB.from || GB.to == BB)) {
              OB = Math.min(GB.from, OB);
              break
            }
            MB.push(GB), DB++, OB = Math.min(GB.to, OB)
          }
          OB = Math.min(OB, pB);
          let QB = !1;
          if (MB.some((GB => GB.from == BB && (GB.to == OB || OB == pB))) && (QB = BB == OB, !QB && OB - BB < 10)) {
            let GB = BB - (lB + zB.value.length);
            GB > 0 && (zB.next(GB), lB = BB);
            for (let YB = BB;;) {
              if (YB >= OB) {
                QB = !0;
                break
              }
              if (!zB.lineBreak && lB + zB.value.length > YB) break;
              YB = lB + zB.value.length, lB += zB.value.length, zB.next()
            }
          }
          let jB = iB(MB);
          if (QB) JB.add(BB, BB, YB.c.widget({
            widget: new kB(jB),
            diagnostics: MB.slice()
          }));
          else {
            let GB = MB.reduce(((BB, OB) => OB.markClass ? BB + " " + OB.markClass : BB), "");
            JB.add(BB, OB, YB.c.mark({
              class: "cm-lintRange cm-lintRange-" + jB + GB,
              diagnostics: MB.slice(),
              inclusiveEnd: MB.some((BB => BB.to > OB))
            }))
          }
          if (PB = OB, PB == pB) break;
          for (let YB = 0; YB < MB.length; YB++) MB[YB].to <= PB && MB.splice(YB--, 1)
        }
        let qB = JB.finish();
        return new jB(qB, OB, yB(qB))
      }
    }

    function yB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        YB = null;
      return BB.between(GB, 1e9, ((BB, GB, DB) => {
        let {
          spec: QB
        } = DB;
        if (!(OB && QB.diagnostics.indexOf(OB) < 0))
          if (YB) {
            if (QB.diagnostics.indexOf(YB.diagnostic) < 0) return !1;
            YB = new oB(YB.from, GB, YB.diagnostic)
          } else YB = new oB(BB, GB, OB || QB.diagnostics[0])
      })), YB
    }

    function JB(BB, OB) {
      let GB = OB.pos,
        YB = OB.end || GB,
        DB = BB.state.facet(VB).hideOn(BB, GB, YB);
      if (null != DB) return DB;
      let QB = BB.startState.doc.lineAt(OB.pos);
      return !(!BB.effects.some((BB => BB.is(PB))) && !BB.changes.touchesRange(QB.from, Math.max(QB.to, YB)))
    }

    function MB(BB, OB) {
      return BB.field(pB, !1) ? OB : OB.concat(DB.D.appendConfig.of(LB))
    }
    const PB = DB.D.define(),
      zB = DB.D.define(),
      lB = DB.D.define(),
      pB = DB.G.define({
        create: () => new jB(YB.c.none, null, null),
        update(BB, OB) {
          if (OB.docChanged && BB.diagnostics.size) {
            let GB = BB.diagnostics.map(OB.changes),
              YB = null,
              DB = BB.panel;
            if (BB.selected) {
              let DB = OB.changes.mapPos(BB.selected.from, 1);
              YB = yB(GB, BB.selected.diagnostic, DB) || yB(GB, null, DB)
            }!GB.size && DB && OB.state.facet(VB).autoPanel && (DB = null), BB = new jB(GB, DB, YB)
          }
          for (let GB of OB.effects)
            if (GB.is(PB)) {
              let YB = OB.state.facet(VB).autoPanel ? GB.value.length ? KB.open : null : BB.panel;
              BB = jB.init(GB.value, YB, OB.state)
            } else GB.is(zB) ? BB = new jB(BB.diagnostics, GB.value ? KB.open : null, BB.selected) : GB.is(lB) && (BB = new jB(BB.diagnostics, BB.panel, GB.value));
          return BB
        },
        provide: BB => [YB.fb.from(BB, (BB => BB.panel)), YB.h.TD.from(BB, (BB => BB.diagnostics))]
      });
    const qB = YB.c.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function ZB(BB, OB, GB) {
      let YB, {
          diagnostics: DB
        } = BB.state.field(pB),
        QB = -1,
        oB = -1;
      DB.between(OB - (GB < 0 ? 1 : 0), OB + (GB > 0 ? 1 : 0), ((BB, DB, jB) => {
        let {
          spec: yB
        } = jB;
        if (OB >= BB && OB <= DB && (BB == DB || (OB > BB || GB > 0) && (OB < DB || GB < 0))) return YB = yB.diagnostics, QB = BB, oB = DB, !1
      }));
      let jB = BB.state.facet(VB).tooltipFilter;
      return YB && jB && (YB = jB(YB, BB.state)), YB ? {
        pos: QB,
        end: oB,
        above: BB.state.doc.lineAt(QB).to < oB,
        create: () => ({
          dom: NB(BB, YB)
        })
      } : null
    }

    function NB(BB, OB) {
      return (0, QB.e)("ul", {
        class: "cm-tooltip-lint"
      }, OB.map((OB => fB(BB, OB, !1))))
    }
    const RB = BB => {
        let OB = BB.state.field(pB, !1);
        return !(!OB || !OB.panel) && (BB.dispatch({
          effects: zB.of(!1)
        }), !0)
      },
      WB = [{
        key: "Mod-Shift-m",
        run: BB => {
          let OB = BB.state.field(pB, !1);
          OB && OB.panel || BB.dispatch({
            effects: MB(BB.state, [zB.of(!0)])
          });
          let GB = (0, YB.A)(BB, KB.open);
          return GB && GB.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: BB => {
          let OB = BB.state.field(pB, !1);
          if (!OB) return !1;
          let GB = BB.state.selection.main,
            YB = yB(OB.diagnostics, null, GB.to + 1);
          return !(!YB && (YB = yB(OB.diagnostics, null, 0), !YB || YB.from == GB.from && YB.to == GB.to)) && (BB.dispatch({
            selection: {
              anchor: YB.from,
              head: YB.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      AB = YB.l.fromClass(class {
        constructor(BB) {
          this.view = BB, this.timeout = -1, this.set = !0;
          let {
            delay: OB
          } = BB.state.facet(VB);
          this.lintTime = Date.now() + OB, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, OB)
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
              sources: OB
            } = BB.facet(VB);
            OB.length && function(BB, OB, GB) {
              let YB = [],
                DB = -1;
              for (let QB of BB) QB.then((GB => {
                YB.push(GB), clearTimeout(DB), YB.length == BB.length ? OB(YB) : DB = setTimeout((() => OB(YB)), 200)
              }), GB)
            }(OB.map((BB => Promise.resolve(BB(this.view)))), (OB => {
              this.view.state.doc == BB.doc && this.view.dispatch(function(BB, OB) {
                return {
                  effects: MB(BB, [PB.of(OB)])
                }
              }(this.view.state, OB.reduce(((BB, OB) => BB.concat(OB)))))
            }), (BB => {
              (0, YB.X)(this.view.state, BB)
            }))
          }
        }
        update(BB) {
          let OB = BB.state.facet(VB);
          (BB.docChanged || OB != BB.startState.facet(VB) || OB.needsRefresh && OB.needsRefresh(BB)) && (this.lintTime = Date.now() + OB.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, OB.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const VB = DB.o.define({
      combine: BB => ({
        sources: BB.map((BB => BB.source)).filter((BB => null != BB)),
        ...(0, DB.V)(BB.map((BB => BB.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: SB,
          tooltipFilter: SB,
          needsRefresh: (BB, OB) => BB ? OB ? GB => BB(GB) || OB(GB) : BB : OB,
          hideOn: (BB, OB) => BB ? OB ? (GB, YB, DB) => BB(GB, YB, DB) || OB(GB, YB, DB) : BB : OB,
          autoPanel: (BB, OB) => BB || OB
        })
      })
    });

    function SB(BB, OB) {
      return BB ? OB ? (GB, YB) => OB(BB(GB, YB), YB) : BB : OB
    }

    function nB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [VB.of({
        source: BB,
        config: OB
      }), AB, LB]
    }

    function UB(BB) {
      let OB = [];
      if (BB) BB: for (let {
          name: GB
        }
        of BB) {
        for (let BB = 0; BB < GB.length; BB++) {
          let YB = GB[BB];
          if (/[a-zA-Z]/.test(YB) && !OB.some((BB => BB.toLowerCase() == YB.toLowerCase()))) {
            OB.push(YB);
            continue BB
          }
        }
        OB.push("")
      }
      return OB
    }

    function fB(BB, OB, GB) {
      var YB;
      let DB = GB ? UB(OB.actions) : [];
      return (0, QB.e)("li", {
        class: "cm-diagnostic cm-diagnostic-" + OB.severity
      }, (0, QB.e)("span", {
        class: "cm-diagnosticText"
      }, OB.renderMessage ? OB.renderMessage(BB) : OB.message), null === (YB = OB.actions) || void 0 === YB ? void 0 : YB.map(((GB, YB) => {
        let oB = !1,
          jB = YB => {
            if (YB.preventDefault(), oB) return;
            oB = !0;
            let DB = yB(BB.state.field(pB).diagnostics, OB);
            DB && GB.apply(BB, DB.from, DB.to)
          },
          {
            name: JB
          } = GB,
          MB = DB[YB] ? JB.indexOf(DB[YB]) : -1,
          PB = MB < 0 ? JB : [JB.slice(0, MB), (0, QB.e)("u", JB.slice(MB, MB + 1)), JB.slice(MB + 1)],
          zB = GB.markClass ? " " + GB.markClass : "";
        return (0, QB.e)("button", {
          type: "button",
          class: "cm-diagnosticAction" + zB,
          onclick: jB,
          onmousedown: jB,
          "aria-label": ` Action: ${JB}${MB<0?"":` (access key "${DB[YB]})"`}.`
        }, PB)
      })), OB.source && (0, QB.e)("div", {
        class: "cm-diagnosticSource"
      }, OB.source))
    }
    class kB extends YB.o {
      constructor(BB) {
        super(), this.sev = BB
      }
      eq(BB) {
        return BB.sev == this.sev
      }
      toDOM() {
        return (0, QB.e)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class dB {
      constructor(BB, OB) {
        this.diagnostic = OB, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = fB(BB, OB, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class KB {
      constructor(BB) {
        this.view = BB, this.items = [];
        this.list = (0, QB.e)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: OB => {
            if (!(OB.ctrlKey || OB.altKey || OB.metaKey)) {
              if (27 == OB.keyCode) RB(this.view), this.view.focus();
              else if (38 == OB.keyCode || 33 == OB.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == OB.keyCode || 34 == OB.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == OB.keyCode) this.moveSelection(0);
              else if (35 == OB.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == OB.keyCode) this.view.focus();
              else {
                if (!(OB.keyCode >= 65 && OB.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: GB
                  } = this.items[this.selectedIndex], YB = UB(GB.actions);
                  for (let DB = 0; DB < YB.length; DB++)
                    if (YB[DB].toUpperCase().charCodeAt(0) == OB.keyCode) {
                      let OB = yB(this.view.state.field(pB).diagnostics, GB);
                      OB && GB.actions[DB].apply(BB, OB.from, OB.to)
                    }
                }
              }
              OB.preventDefault()
            }
          },
          onclick: BB => {
            for (let OB = 0; OB < this.items.length; OB++) this.items[OB].dom.contains(BB.target) && this.moveSelection(OB)
          }
        }), this.dom = (0, QB.e)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, QB.e)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => RB(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let BB = this.view.state.field(pB).selected;
        if (!BB) return -1;
        for (let OB = 0; OB < this.items.length; OB++)
          if (this.items[OB].diagnostic == BB.diagnostic) return OB;
        return -1
      }
      update() {
        let {
          diagnostics: BB,
          selected: OB
        } = this.view.state.field(pB), GB = 0, YB = !1, DB = null, QB = new Set;
        for (BB.between(0, this.view.state.doc.length, ((BB, oB, jB) => {
            let {
              spec: yB
            } = jB;
            for (let JB of yB.diagnostics) {
              if (QB.has(JB)) continue;
              QB.add(JB);
              let BB, oB = -1;
              for (let OB = GB; OB < this.items.length; OB++)
                if (this.items[OB].diagnostic == JB) {
                  oB = OB;
                  break
                } oB < 0 ? (BB = new dB(this.view, JB), this.items.splice(GB, 0, BB), YB = !0) : (BB = this.items[oB], oB > GB && (this.items.splice(GB, oB - GB), YB = !0)), OB && BB.diagnostic == OB.diagnostic ? BB.dom.hasAttribute("aria-selected") || (BB.dom.setAttribute("aria-selected", "true"), DB = BB) : BB.dom.hasAttribute("aria-selected") && BB.dom.removeAttribute("aria-selected"), GB++
            }
          })); GB < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) YB = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new dB(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), YB = !0), DB ? (this.list.setAttribute("aria-activedescendant", DB.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: DB.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: BB => {
            let {
              sel: OB,
              panel: GB
            } = BB, YB = GB.height / this.list.offsetHeight;
            OB.top < GB.top ? this.list.scrollTop -= (GB.top - OB.top) / YB : OB.bottom > GB.bottom && (this.list.scrollTop += (OB.bottom - GB.bottom) / YB)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), YB && this.sync()
      }
      sync() {
        let BB = this.list.firstChild;

        function OB() {
          let OB = BB;
          BB = OB.nextSibling, OB.remove()
        }
        for (let GB of this.items)
          if (GB.dom.parentNode == this.list) {
            for (; BB != GB.dom;) OB();
            BB = GB.dom.nextSibling
          } else this.list.insertBefore(GB.dom, BB);
        for (; BB;) OB()
      }
      moveSelection(BB) {
        if (this.selectedIndex < 0) return;
        let OB = yB(this.view.state.field(pB).diagnostics, this.items[BB].diagnostic);
        OB && this.view.dispatch({
          selection: {
            anchor: OB.from,
            head: OB.to
          },
          scrollIntoView: !0,
          effects: lB.of(OB)
        })
      }
      static open(BB) {
        return new KB(BB)
      }
    }

    function uB(BB) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(BB)}</svg>')`
    }

    function mB(BB) {
      return uB(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${BB}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const IB = YB.h.baseTheme({
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
        backgroundImage: mB("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: mB("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: mB("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: mB("#66d")
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

    function FB(BB) {
      return "error" == BB ? 4 : "warning" == BB ? 3 : "info" == BB ? 2 : 1
    }

    function iB(BB) {
      let OB = "hint",
        GB = 1;
      for (let YB of BB) {
        let BB = FB(YB.severity);
        BB > GB && (GB = BB, OB = YB.severity)
      }
      return OB
    }
    YB.i;
    const LB = [pB, YB.h.TD.compute([pB], (BB => {
      let {
        selected: OB,
        panel: GB
      } = BB.field(pB);
      return OB && GB && OB.from != OB.to ? YB.c.set([qB.range(OB.from, OB.to)]) : YB.c.none
    })), (0, YB.N)(ZB, {
      hideOn: JB
    }), IB]
  },
  44514: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => xB,
      f: () => NB,
      j: () => tB
    });
    var YB = GB(44474),
      DB = GB(44470),
      QB = GB(44480);
    const oB = "function" == typeof String.prototype.normalize ? BB => BB.normalize("NFKD") : BB => BB;
    class jB {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.length,
          DB = arguments.length > 4 ? arguments[4] : void 0,
          QB = arguments.length > 5 ? arguments[5] : void 0;
        this.test = QB, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = BB.iterRange(GB, YB), this.bufferStart = GB, this.normalize = DB ? BB => DB(oB(BB)) : oB, this.query = this.normalize(OB)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, DB.O)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let BB = this.peek();
          if (BB < 0) return this.done = !0, this;
          let OB = (0, DB.bb)(BB),
            GB = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, DB.R)(BB);
          let YB = this.normalize(OB);
          if (YB.length)
            for (let DB = 0, QB = GB;; DB++) {
              let BB = YB.charCodeAt(DB),
                oB = this.match(BB, QB, this.bufferPos + this.bufferStart);
              if (DB == YB.length - 1) {
                if (oB) return this.value = oB, this;
                break
              }
              QB == GB && DB < OB.length && OB.charCodeAt(DB) == BB && QB++
            }
        }
      }
      match(BB, OB, GB) {
        let YB = null;
        for (let DB = 0; DB < this.matches.length; DB += 2) {
          let OB = this.matches[DB],
            QB = !1;
          this.query.charCodeAt(OB) == BB && (OB == this.query.length - 1 ? YB = {
            from: this.matches[DB + 1],
            to: GB
          } : (this.matches[DB]++, QB = !0)), QB || (this.matches.splice(DB, 2), DB -= 2)
        }
        return this.query.charCodeAt(0) == BB && (1 == this.query.length ? YB = {
          from: OB,
          to: GB
        } : this.matches.push(1, OB)), YB && this.test && !this.test(YB.from, YB.to, this.buffer, this.bufferStart) && (YB = null), YB
      }
    }
    "undefined" != typeof Symbol && (jB.prototype[Symbol.iterator] = function() {
      return this
    });
    const yB = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      JB = "gm" + (null == /x/.unicode ? "" : "u");
    class MB {
      constructor(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : BB.length;
        if (this.text = BB, this.to = DB, this.curLine = "", this.done = !1, this.value = yB, /\\[sWDnr]|\n|\r|\[\^/.test(OB)) return new lB(BB, OB, GB, YB, DB);
        this.re = new RegExp(OB, JB + ((null === GB || void 0 === GB ? void 0 : GB.ignoreCase) ? "i" : "")), this.test = null === GB || void 0 === GB ? void 0 : GB.test, this.iter = BB.iter();
        let QB = BB.lineAt(YB);
        this.curLineStart = QB.from, this.matchPos = pB(BB, YB), this.getLine(this.curLineStart)
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
          let OB = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (OB) {
            let GB = this.curLineStart + OB.index,
              YB = GB + OB[0].length;
            if (this.matchPos = pB(this.text, YB + (GB == YB ? 1 : 0)), GB == this.curLineStart + this.curLine.length && this.nextLine(), (GB < YB || GB > this.value.to) && (!this.test || this.test(GB, YB, OB))) return this.value = {
              from: GB,
              to: YB,
              match: OB
            }, this;
            BB = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), BB = 0
          }
        }
      }
    }
    const PB = new WeakMap;
    class zB {
      constructor(BB, OB) {
        this.from = BB, this.text = OB
      }
      get to() {
        return this.from + this.text.length
      }
      static get(BB, OB, GB) {
        let YB = PB.get(BB);
        if (!YB || YB.from >= GB || YB.to <= OB) {
          let YB = new zB(OB, BB.sliceString(OB, GB));
          return PB.set(BB, YB), YB
        }
        if (YB.from == OB && YB.to == GB) return YB;
        let {
          text: DB,
          from: QB
        } = YB;
        return QB > OB && (DB = BB.sliceString(OB, QB) + DB, QB = OB), YB.to < GB && (DB += BB.sliceString(YB.to, GB)), PB.set(BB, new zB(QB, DB)), new zB(OB, DB.slice(OB - QB, GB - QB))
      }
    }
    class lB {
      constructor(BB, OB, GB, YB, DB) {
        this.text = BB, this.to = DB, this.done = !1, this.value = yB, this.matchPos = pB(BB, YB), this.re = new RegExp(OB, JB + ((null === GB || void 0 === GB ? void 0 : GB.ignoreCase) ? "i" : "")), this.test = null === GB || void 0 === GB ? void 0 : GB.test, this.flat = zB.get(BB, YB, this.chunkEnd(YB + 5e3))
      }
      chunkEnd(BB) {
        return BB >= this.to ? this.to : this.text.lineAt(BB).to
      }
      next() {
        for (;;) {
          let BB = this.re.lastIndex = this.matchPos - this.flat.from,
            OB = this.re.exec(this.flat.text);
          if (OB && !OB[0] && OB.index == BB && (this.re.lastIndex = BB + 1, OB = this.re.exec(this.flat.text)), OB) {
            let BB = this.flat.from + OB.index,
              GB = BB + OB[0].length;
            if ((this.flat.to >= this.to || OB.index + OB[0].length <= this.flat.text.length - 10) && (!this.test || this.test(BB, GB, OB))) return this.value = {
              from: BB,
              to: GB,
              match: OB
            }, this.matchPos = pB(this.text, GB + (BB == GB ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = zB.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function pB(BB, OB) {
      if (OB >= BB.length) return OB;
      let GB, YB = BB.lineAt(OB);
      for (; OB < YB.to && (GB = YB.text.charCodeAt(OB - YB.from)) >= 56320 && GB < 57344;) OB++;
      return OB
    }
    "undefined" != typeof Symbol && (MB.prototype[Symbol.iterator] = lB.prototype[Symbol.iterator] = function() {
      return this
    });
    const qB = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      ZB = DB.o.define({
        combine: BB => (0, DB.V)(BB, qB, {
          highlightWordAroundCursor: (BB, OB) => BB || OB,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function NB(BB) {
      let OB = [SB, VB];
      return BB && OB.push(ZB.of(BB)), OB
    }
    const RB = YB.c.mark({
        class: "cm-selectionMatch"
      }),
      WB = YB.c.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function AB(BB, OB, GB, YB) {
      return (0 == GB || BB(OB.sliceDoc(GB - 1, GB)) != DB.g.Word) && (YB == OB.doc.length || BB(OB.sliceDoc(YB, YB + 1)) != DB.g.Word)
    }
    const VB = YB.l.fromClass(class {
        constructor(BB) {
          this.TD = this.getDeco(BB)
        }
        update(BB) {
          (BB.selectionSet || BB.docChanged || BB.viewportChanged) && (this.TD = this.getDeco(BB.view))
        }
        getDeco(BB) {
          let OB = BB.state.facet(ZB),
            {
              state: GB
            } = BB,
            QB = GB.selection;
          if (QB.JZ.length > 1) return YB.c.none;
          let oB, yB = QB.main,
            JB = null;
          if (yB.empty) {
            if (!OB.highlightWordAroundCursor) return YB.c.none;
            let BB = GB.wordAt(yB.head);
            if (!BB) return YB.c.none;
            JB = GB.charCategorizer(yB.head), oB = GB.sliceDoc(BB.from, BB.to)
          } else {
            let BB = yB.to - yB.from;
            if (BB < OB.minSelectionLength || BB > 200) return YB.c.none;
            if (OB.wholeWords) {
              if (oB = GB.sliceDoc(yB.from, yB.to), JB = GB.charCategorizer(yB.head), !AB(JB, GB, yB.from, yB.to) || ! function(BB, OB, GB, YB) {
                  return BB(OB.sliceDoc(GB, GB + 1)) == DB.g.Word && BB(OB.sliceDoc(YB - 1, YB)) == DB.g.Word
                }(JB, GB, yB.from, yB.to)) return YB.c.none
            } else if (oB = GB.sliceDoc(yB.from, yB.to), !oB) return YB.c.none
          }
          let MB = [];
          for (let DB of BB.xBB) {
            let BB = new jB(GB.doc, oB, DB.from, DB.to);
            for (; !BB.next().done;) {
              let {
                from: DB,
                to: QB
              } = BB.value;
              if ((!JB || AB(JB, GB, DB, QB)) && (yB.empty && DB <= yB.from && QB >= yB.to ? MB.push(WB.range(DB, QB)) : (DB >= yB.to || QB <= yB.from) && MB.push(RB.range(DB, QB)), MB.length > OB.maxMatches)) return YB.c.none
            }
          }
          return YB.c.set(MB)
        }
      }, {
        TD: BB => BB.TD
      }),
      SB = YB.h.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const nB = DB.o.define({
      combine: BB => (0, DB.V)(BB, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: BB => new BO(BB),
        scrollToMatch: BB => YB.h.scrollIntoView(BB)
      })
    });
    class UB {
      constructor(BB) {
        this.search = BB.search, this.caseSensitive = !!BB.caseSensitive, this.literal = !!BB.literal, this.regexp = !!BB.regexp, this.replace = BB.replace || "", this.valid = !!this.search && (!this.regexp || function(BB) {
          try {
            return new RegExp(BB, JB), !0
          } catch (OB) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!BB.wholeWord, this.test = BB.test
      }
      unquote(BB) {
        return this.literal ? BB : BB.replace(/\\([nrt\\])/g, ((BB, OB) => "n" == OB ? "\n" : "r" == OB ? "\r" : "t" == OB ? "\t" : "\\"))
      }
      eq(BB) {
        return this.search == BB.search && this.replace == BB.replace && this.caseSensitive == BB.caseSensitive && this.regexp == BB.regexp && this.wholeWord == BB.wholeWord && this.test == BB.test
      }
      create() {
        return this.regexp ? new IB(this) : new dB(this)
      }
      getCursor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GB = arguments.length > 2 ? arguments[2] : void 0,
          YB = BB.doc ? BB : DB.l.create({
            doc: BB
          });
        return null == GB && (GB = YB.doc.length), this.regexp ? KB(this, YB, OB, GB) : kB(this, YB, OB, GB)
      }
    }
    class fB {
      constructor(BB) {
        this.spec = BB
      }
    }

    function kB(BB, OB, GB, YB) {
      let QB;
      var oB, yB;
      return BB.wholeWord && (oB = OB.doc, yB = OB.charCategorizer(OB.selection.main.head), QB = (BB, OB, GB, YB) => ((YB > BB || YB + GB.length < OB) && (YB = Math.max(0, BB - 2), GB = oB.sliceString(YB, Math.min(oB.length, OB + 2))), (yB(uB(GB, BB - YB)) != DB.g.Word || yB(mB(GB, BB - YB)) != DB.g.Word) && (yB(mB(GB, OB - YB)) != DB.g.Word || yB(uB(GB, OB - YB)) != DB.g.Word))), BB.test && (QB = function(BB, OB, GB) {
        return (YB, DB, QB, oB) => {
          if (GB && !GB(YB, DB, QB, oB)) return !1;
          let jB = YB >= oB && DB <= oB + QB.length ? QB.slice(YB - oB, DB - oB) : OB.doc.sliceString(YB, DB);
          return BB(jB, OB, YB, DB)
        }
      }(BB.test, OB, QB)), new jB(OB.doc, BB.unquoted, GB, YB, BB.caseSensitive ? void 0 : BB => BB.toLowerCase(), QB)
    }
    class dB extends fB {
      constructor(BB) {
        super(BB)
      }
      nextMatch(BB, OB, GB) {
        let YB = kB(this.spec, BB, GB, BB.doc.length).nextOverlapping();
        if (YB.done) {
          let GB = Math.min(BB.doc.length, OB + this.spec.unquoted.length);
          YB = kB(this.spec, BB, 0, GB).nextOverlapping()
        }
        return YB.done || YB.value.from == OB && YB.value.to == GB ? null : YB.value
      }
      prevMatchInRange(BB, OB, GB) {
        for (let YB = GB;;) {
          let GB = Math.max(OB, YB - 1e4 - this.spec.unquoted.length),
            DB = kB(this.spec, BB, GB, YB),
            QB = null;
          for (; !DB.nextOverlapping().done;) QB = DB.value;
          if (QB) return QB;
          if (GB == OB) return null;
          YB -= 1e4
        }
      }
      prevMatch(BB, OB, GB) {
        let YB = this.prevMatchInRange(BB, 0, OB);
        return YB || (YB = this.prevMatchInRange(BB, Math.max(0, GB - this.spec.unquoted.length), BB.doc.length)), !YB || YB.from == OB && YB.to == GB ? null : YB
      }
      getReplacement(BB) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(BB, OB) {
        let GB = kB(this.spec, BB, 0, BB.doc.length),
          YB = [];
        for (; !GB.next().done;) {
          if (YB.length >= OB) return null;
          YB.push(GB.value)
        }
        return YB
      }
      highlight(BB, OB, GB, YB) {
        let DB = kB(this.spec, BB, Math.max(0, OB - this.spec.unquoted.length), Math.min(GB + this.spec.unquoted.length, BB.doc.length));
        for (; !DB.next().done;) YB(DB.value.from, DB.value.to)
      }
    }

    function KB(BB, OB, GB, YB) {
      let QB;
      var oB;
      return BB.wholeWord && (oB = OB.charCategorizer(OB.selection.main.head), QB = (BB, OB, GB) => !GB[0].length || (oB(uB(GB.input, GB.index)) != DB.g.Word || oB(mB(GB.input, GB.index)) != DB.g.Word) && (oB(mB(GB.input, GB.index + GB[0].length)) != DB.g.Word || oB(uB(GB.input, GB.index + GB[0].length)) != DB.g.Word)), BB.test && (QB = function(BB, OB, GB) {
        return (YB, DB, QB) => (!GB || GB(YB, DB, QB)) && BB(QB[0], OB, YB, DB)
      }(BB.test, OB, QB)), new MB(OB.doc, BB.search, {
        ignoreCase: !BB.caseSensitive,
        test: QB
      }, GB, YB)
    }

    function uB(BB, OB) {
      return BB.slice((0, DB.X)(BB, OB, !1), OB)
    }

    function mB(BB, OB) {
      return BB.slice(OB, (0, DB.X)(BB, OB))
    }
    class IB extends fB {
      nextMatch(BB, OB, GB) {
        let YB = KB(this.spec, BB, GB, BB.doc.length).next();
        return YB.done && (YB = KB(this.spec, BB, 0, OB).next()), YB.done ? null : YB.value
      }
      prevMatchInRange(BB, OB, GB) {
        for (let YB = 1;; YB++) {
          let DB = Math.max(OB, GB - 1e4 * YB),
            QB = KB(this.spec, BB, DB, GB),
            oB = null;
          for (; !QB.next().done;) oB = QB.value;
          if (oB && (DB == OB || oB.from > DB + 10)) return oB;
          if (DB == OB) return null
        }
      }
      prevMatch(BB, OB, GB) {
        return this.prevMatchInRange(BB, 0, OB) || this.prevMatchInRange(BB, GB, BB.doc.length)
      }
      getReplacement(BB) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((OB, GB) => {
          if ("&" == GB) return BB.match[0];
          if ("$" == GB) return "$";
          for (let YB = GB.length; YB > 0; YB--) {
            let OB = +GB.slice(0, YB);
            if (OB > 0 && OB < BB.match.length) return BB.match[OB] + GB.slice(YB)
          }
          return OB
        }))
      }
      matchAll(BB, OB) {
        let GB = KB(this.spec, BB, 0, BB.doc.length),
          YB = [];
        for (; !GB.next().done;) {
          if (YB.length >= OB) return null;
          YB.push(GB.value)
        }
        return YB
      }
      highlight(BB, OB, GB, YB) {
        let DB = KB(this.spec, BB, Math.max(0, OB - 250), Math.min(GB + 250, BB.doc.length));
        for (; !DB.next().done;) YB(DB.value.from, DB.value.to)
      }
    }
    const FB = DB.D.define(),
      iB = DB.D.define(),
      LB = DB.G.define({
        create: BB => new gB(CB(BB).create(), null),
        update(BB, OB) {
          for (let GB of OB.effects) GB.is(FB) ? BB = new gB(GB.value.create(), BB.panel) : GB.is(iB) && (BB = new gB(BB.query, GB.value ? bB : null));
          return BB
        },
        provide: BB => YB.fb.from(BB, (BB => BB.panel))
      });
    class gB {
      constructor(BB, OB) {
        this.query = BB, this.panel = OB
      }
    }
    const rB = YB.c.mark({
        class: "cm-searchMatch"
      }),
      XB = YB.c.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      wB = YB.l.fromClass(class {
        constructor(BB) {
          this.view = BB, this.TD = this.highlight(BB.state.field(LB))
        }
        update(BB) {
          let OB = BB.state.field(LB);
          (OB != BB.startState.field(LB) || BB.docChanged || BB.selectionSet || BB.viewportChanged) && (this.TD = this.highlight(OB))
        }
        highlight(BB) {
          let {
            query: OB,
            panel: GB
          } = BB;
          if (!GB || !OB.spec.valid) return YB.c.none;
          let {
            view: QB
          } = this, oB = new DB.v;
          for (let YB = 0, DB = QB.xBB, jB = DB.length; YB < jB; YB++) {
            let {
              from: BB,
              to: GB
            } = DB[YB];
            for (; YB < jB - 1 && GB > DB[YB + 1].from - 500;) GB = DB[++YB].to;
            OB.highlight(QB.state, BB, GB, ((BB, OB) => {
              let GB = QB.state.selection.JZ.some((GB => GB.from == BB && GB.to == OB));
              oB.add(BB, OB, GB ? XB : rB)
            }))
          }
          return oB.finish()
        }
      }, {
        TD: BB => BB.TD
      });

    function EB(BB) {
      return OB => {
        let GB = OB.state.field(LB, !1);
        return GB && GB.query.spec.valid ? BB(OB, GB) : sB(OB)
      }
    }
    const cB = EB(((BB, OB) => {
        let {
          query: GB
        } = OB, {
          to: YB
        } = BB.state.selection.main, QB = GB.nextMatch(BB.state, YB, YB);
        if (!QB) return !1;
        let oB = DB.j.single(QB.from, QB.to),
          jB = BB.state.facet(nB);
        return BB.dispatch({
          selection: oB,
          effects: [DO(BB, QB), jB.scrollToMatch(oB.main, BB)],
          userEvent: "select.search"
        }), vB(BB), !0
      })),
      hB = EB(((BB, OB) => {
        let {
          query: GB
        } = OB, {
          state: YB
        } = BB, {
          from: QB
        } = YB.selection.main, oB = GB.prevMatch(YB, QB, QB);
        if (!oB) return !1;
        let jB = DB.j.single(oB.from, oB.to),
          yB = BB.state.facet(nB);
        return BB.dispatch({
          selection: jB,
          effects: [DO(BB, oB), yB.scrollToMatch(jB.main, BB)],
          userEvent: "select.search"
        }), vB(BB), !0
      })),
      aB = EB(((BB, OB) => {
        let {
          query: GB
        } = OB, YB = GB.matchAll(BB.state, 1e3);
        return !(!YB || !YB.length) && (BB.dispatch({
          selection: DB.j.create(YB.map((BB => DB.j.range(BB.from, BB.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      eB = EB(((BB, OB) => {
        let {
          query: GB
        } = OB, {
          state: QB
        } = BB, {
          from: oB,
          to: jB
        } = QB.selection.main;
        if (QB.readOnly) return !1;
        let yB = GB.nextMatch(QB, oB, oB);
        if (!yB) return !1;
        let JB, MB, PB = yB,
          zB = [],
          lB = [];
        PB.from == oB && PB.to == jB && (MB = QB.toText(GB.getReplacement(PB)), zB.push({
          from: PB.from,
          to: PB.to,
          insert: MB
        }), PB = GB.nextMatch(QB, PB.from, PB.to), lB.push(YB.h.announce.of(QB.phrase("replaced match on line $", QB.doc.lineAt(oB).number) + ".")));
        let pB = BB.state.changes(zB);
        return PB && (JB = DB.j.single(PB.from, PB.to).map(pB), lB.push(DO(BB, PB)), lB.push(QB.facet(nB).scrollToMatch(JB.main, BB))), BB.dispatch({
          changes: pB,
          selection: JB,
          effects: lB,
          userEvent: "input.replace"
        }), !0
      })),
      TB = EB(((BB, OB) => {
        let {
          query: GB
        } = OB;
        if (BB.state.readOnly) return !1;
        let DB = GB.matchAll(BB.state, 1e9).map((BB => {
          let {
            from: OB,
            to: YB
          } = BB;
          return {
            from: OB,
            to: YB,
            insert: GB.getReplacement(BB)
          }
        }));
        if (!DB.length) return !1;
        let QB = BB.state.phrase("replaced $ matches", DB.length) + ".";
        return BB.dispatch({
          changes: DB,
          effects: YB.h.announce.of(QB),
          userEvent: "input.replace.all"
        }), !0
      }));

    function bB(BB) {
      return BB.state.facet(nB).createPanel(BB)
    }

    function CB(BB, OB) {
      var GB, YB, DB, QB, oB;
      let jB = BB.selection.main,
        yB = jB.empty || jB.to > jB.from + 100 ? "" : BB.sliceDoc(jB.from, jB.to);
      if (OB && !yB) return OB;
      let JB = BB.facet(nB);
      return new UB({
        search: (null !== (GB = null === OB || void 0 === OB ? void 0 : OB.literal) && void 0 !== GB ? GB : JB.literal) ? yB : yB.replace(/\n/g, "\\n"),
        caseSensitive: null !== (YB = null === OB || void 0 === OB ? void 0 : OB.caseSensitive) && void 0 !== YB ? YB : JB.caseSensitive,
        literal: null !== (DB = null === OB || void 0 === OB ? void 0 : OB.literal) && void 0 !== DB ? DB : JB.literal,
        regexp: null !== (QB = null === OB || void 0 === OB ? void 0 : OB.regexp) && void 0 !== QB ? QB : JB.regexp,
        wholeWord: null !== (oB = null === OB || void 0 === OB ? void 0 : OB.wholeWord) && void 0 !== oB ? oB : JB.wholeWord
      })
    }

    function HB(BB) {
      let OB = (0, YB.A)(BB, bB);
      return OB && OB.dom.querySelector("[main-field]")
    }

    function vB(BB) {
      let OB = HB(BB);
      OB && OB == BB.root.activeElement && OB.select()
    }
    const sB = BB => {
        let OB = BB.state.field(LB, !1);
        if (OB && OB.panel) {
          let GB = HB(BB);
          if (GB && GB != BB.root.activeElement) {
            let YB = CB(BB.state, OB.query.spec);
            YB.valid && BB.dispatch({
              effects: FB.of(YB)
            }), GB.focus(), GB.select()
          }
        } else BB.dispatch({
          effects: [iB.of(!0), OB ? FB.of(CB(BB.state, OB.query.spec)) : DB.D.appendConfig.of(oO)]
        });
        return !0
      },
      xB = BB => {
        let OB = BB.state.field(LB, !1);
        if (!OB || !OB.panel) return !1;
        let GB = (0, YB.A)(BB, bB);
        return GB && GB.dom.contains(BB.root.activeElement) && BB.focus(), BB.dispatch({
          effects: iB.of(!1)
        }), !0
      },
      tB = [{
        key: "Mod-f",
        run: sB,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: cB,
        shift: hB,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: cB,
        shift: hB,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: xB,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: BB => {
          let {
            state: OB,
            dispatch: GB
          } = BB, YB = OB.selection;
          if (YB.JZ.length > 1 || YB.main.empty) return !1;
          let {
            from: QB,
            to: oB
          } = YB.main, yB = [], JB = 0;
          for (let MB = new jB(OB.doc, OB.sliceDoc(QB, oB)); !MB.next().done;) {
            if (yB.length > 1e3) return !1;
            MB.value.from == QB && (JB = yB.length), yB.push(DB.j.range(MB.value.from, MB.value.to))
          }
          return GB(OB.update({
            selection: DB.j.create(yB, JB),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: BB => {
          let {
            state: OB
          } = BB, GB = String(OB.doc.lineAt(BB.state.selection.main.head).number), {
            close: QB,
            result: oB
          } = (0, YB.cb)(BB, {
            label: OB.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: GB
            },
            focus: !0,
            submitLabel: OB.phrase("go")
          });
          return oB.then((GB => {
            let oB = GB && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(GB.elements.line.value);
            if (!oB) return void BB.dispatch({
              effects: QB
            });
            let jB = OB.doc.lineAt(OB.selection.main.head),
              [, yB, JB, MB, PB] = oB,
              zB = MB ? +MB.slice(1) : 0,
              lB = JB ? +JB : jB.number;
            if (JB && PB) {
              let BB = lB / 100;
              yB && (BB = BB * ("-" == yB ? -1 : 1) + jB.number / OB.doc.lines), lB = Math.round(OB.doc.lines * BB)
            } else JB && yB && (lB = lB * ("-" == yB ? -1 : 1) + jB.number);
            let pB = OB.doc.line(Math.max(1, Math.min(OB.doc.lines, lB))),
              qB = DB.j.cursor(pB.from + Math.max(0, Math.min(zB, pB.length)));
            BB.dispatch({
              effects: [QB, YB.h.scrollIntoView(qB.from, {
                y: "center"
              })],
              selection: qB
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: BB => {
          let {
            state: OB,
            dispatch: GB
          } = BB, {
            JZ: QB
          } = OB.selection;
          if (QB.some((BB => BB.from === BB.to))) return (BB => {
            let {
              state: OB,
              dispatch: GB
            } = BB, {
              selection: YB
            } = OB, QB = DB.j.create(YB.JZ.map((BB => OB.wordAt(BB.head) || DB.j.cursor(BB.head))), YB.mainIndex);
            return !QB.eq(YB) && (GB(OB.update({
              selection: QB
            })), !0)
          })({
            state: OB,
            dispatch: GB
          });
          let oB = OB.sliceDoc(QB[0].from, QB[0].to);
          if (OB.selection.JZ.some((BB => OB.sliceDoc(BB.from, BB.to) != oB))) return !1;
          let yB = function(BB, OB) {
            let {
              main: GB,
              JZ: YB
            } = BB.selection, DB = BB.wordAt(GB.head), QB = DB && DB.from == GB.from && DB.to == GB.to;
            for (let oB = !1, yB = new jB(BB.doc, OB, YB[YB.length - 1].to);;) {
              if (yB.next(), !yB.done) {
                if (oB && YB.some((BB => BB.from == yB.value.from))) continue;
                if (QB) {
                  let OB = BB.wordAt(yB.value.from);
                  if (!OB || OB.from != yB.value.from || OB.to != yB.value.to) continue
                }
                return yB.value
              }
              if (oB) return null;
              yB = new jB(BB.doc, OB, 0, Math.max(0, YB[YB.length - 1].from - 1)), oB = !0
            }
          }(OB, oB);
          return !!yB && (GB(OB.update({
            selection: OB.selection.addRange(DB.j.range(yB.from, yB.to), !1),
            effects: YB.h.scrollIntoView(yB.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class BO {
      constructor(BB) {
        this.view = BB;
        let OB = this.query = BB.state.field(LB).query.spec;

        function GB(BB, OB, GB) {
          return (0, QB.e)("button", {
            class: "cm-button",
            name: BB,
            onclick: OB,
            type: "button"
          }, GB)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, QB.e)("input", {
          value: OB.search,
          placeholder: OO(BB, "Find"),
          "aria-label": OO(BB, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, QB.e)("input", {
          value: OB.replace,
          placeholder: OO(BB, "Replace"),
          "aria-label": OO(BB, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, QB.e)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: OB.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, QB.e)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: OB.regexp,
          onchange: this.commit
        }), this.wordField = (0, QB.e)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: OB.wholeWord,
          onchange: this.commit
        }), this.dom = (0, QB.e)("div", {
          onkeydown: BB => this.keydown(BB),
          class: "cm-search"
        }, [this.searchField, GB("next", (() => cB(BB)), [OO(BB, "next")]), GB("prev", (() => hB(BB)), [OO(BB, "previous")]), GB("select", (() => aB(BB)), [OO(BB, "all")]), (0, QB.e)("label", null, [this.caseField, OO(BB, "match case")]), (0, QB.e)("label", null, [this.reField, OO(BB, "regexp")]), (0, QB.e)("label", null, [this.wordField, OO(BB, "by word")]), ...BB.state.readOnly ? [] : [(0, QB.e)("br"), this.replaceField, GB("replace", (() => eB(BB)), [OO(BB, "replace")]), GB("replaceAll", (() => TB(BB)), [OO(BB, "replace all")])], (0, QB.e)("button", {
          name: "close",
          onclick: () => xB(BB),
          "aria-label": OO(BB, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let BB = new UB({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        BB.eq(this.query) || (this.query = BB, this.view.dispatch({
          effects: FB.of(BB)
        }))
      }
      keydown(BB) {
        (0, YB.ab)(this.view, BB, "search-panel") ? BB.preventDefault(): 13 == BB.keyCode && BB.target == this.searchField ? (BB.preventDefault(), (BB.shiftKey ? hB : cB)(this.view)) : 13 == BB.keyCode && BB.target == this.replaceField && (BB.preventDefault(), eB(this.view))
      }
      update(BB) {
        for (let OB of BB.transactions)
          for (let BB of OB.effects) BB.is(FB) && !BB.value.eq(this.query) && this.setQuery(BB.value)
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
        return this.view.state.facet(nB).top
      }
    }

    function OO(BB, OB) {
      return BB.state.phrase(OB)
    }
    const GO = 30,
      YO = /[\s\.,:;?!]/;

    function DO(BB, OB) {
      let {
        from: GB,
        to: DB
      } = OB, QB = BB.state.doc.lineAt(GB), oB = BB.state.doc.lineAt(DB).to, jB = Math.max(QB.from, GB - GO), yB = Math.min(oB, DB + GO), JB = BB.state.sliceDoc(jB, yB);
      if (jB != QB.from)
        for (let YB = 0; YB < GO; YB++)
          if (!YO.test(JB[YB + 1]) && YO.test(JB[YB])) {
            JB = JB.slice(YB);
            break
          } if (yB != oB)
        for (let YB = JB.length - 1; YB > JB.length - GO; YB--)
          if (!YO.test(JB[YB - 1]) && YO.test(JB[YB])) {
            JB = JB.slice(0, YB);
            break
          } return YB.h.announce.of(`${BB.state.phrase("current match")}. ${JB} ${BB.state.phrase("on line")} ${QB.number}.`)
    }
    const QO = YB.h.baseTheme({
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
      oO = [LB, DB.r.low(wB), QO]
  },
  44474: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => IB,
      f: () => JO,
      h: () => fD,
      i: () => Qo,
      l: () => vO,
      o: () => uB,
      q: () => KQ,
      u: () => vD,
      w: () => QQ,
      A: () => vQ,
      E: () => bQ,
      F: () => Mo,
      I: () => NQ,
      H: () => Io,
      K: () => lQ,
      N: () => TQ,
      R: () => iD,
      T: () => ko,
      X: () => TO,
      Z: () => VQ,
      _: () => fQ,
      ab: () => rD,
      cb: () => Oo,
      fb: () => Bo,
      gb: () => wQ
    });
    for (var YB = GB(44470), DB = GB(44478), QB = {
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
      }, oB = {
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
      }, jB = "undefined" != typeof navigator && /Mac/.test(navigator.platform), yB = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), JB = 0; JB < 10; JB++) QB[48 + JB] = QB[96 + JB] = String(JB);
    for (JB = 1; JB <= 24; JB++) QB[JB + 111] = "F" + JB;
    for (JB = 65; JB <= 90; JB++) QB[JB] = String.fromCharCode(JB + 32), oB[JB] = String.fromCharCode(JB);
    for (var MB in QB) oB.hasOwnProperty(MB) || (oB[MB] = QB[MB]);
    var PB = GB(44480);
    let zB = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      lB = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const pB = /Edge\/(\d+)/.exec(zB.userAgent),
      qB = /MSIE \d/.test(zB.userAgent),
      ZB = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(zB.userAgent),
      NB = !!(qB || ZB || pB),
      RB = !NB && /gecko\/(\d+)/i.test(zB.userAgent),
      WB = !NB && /Chrome\/(\d+)/.exec(zB.userAgent),
      AB = "webkitFontSmoothing" in lB.documentElement.style,
      VB = !NB && /Apple Computer/.test(zB.vendor),
      SB = VB && (/Mobile\/\w+/.test(zB.userAgent) || zB.maxTouchPoints > 2);
    var nB = {
      mac: SB || /Mac/.test(zB.platform),
      windows: /Win/.test(zB.platform),
      linux: /Linux|X11/.test(zB.platform),
      ie: NB,
      ie_version: qB ? lB.documentMode || 6 : ZB ? +ZB[1] : pB ? +pB[1] : 0,
      gecko: RB,
      gecko_version: RB ? +(/Firefox\/(\d+)/.exec(zB.userAgent) || [0, 0])[1] : 0,
      chrome: !!WB,
      chrome_version: WB ? +WB[1] : 0,
      ios: SB,
      android: /Android\b/.test(zB.userAgent),
      webkit: AB,
      webkit_version: AB ? +(/\bAppleWebKit\/(\d+)/.exec(zB.userAgent) || [0, 0])[1] : 0,
      safari: VB,
      safari_version: VB ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(zB.userAgent) || [0, 0])[1] : 0,
      tabSize: null != lB.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function UB(BB, OB) {
      for (let GB in BB) "class" == GB && OB.class ? OB.class += " " + BB.class : "style" == GB && OB.style ? OB.style += ";" + BB.style : OB[GB] = BB[GB];
      return OB
    }
    const fB = Object.create(null);

    function kB(BB, OB, GB) {
      if (BB == OB) return !0;
      BB || (BB = fB), OB || (OB = fB);
      let YB = Object.keys(BB),
        DB = Object.keys(OB);
      if (YB.length - (GB && YB.indexOf(GB) > -1 ? 1 : 0) != DB.length - (GB && DB.indexOf(GB) > -1 ? 1 : 0)) return !1;
      for (let QB of YB)
        if (QB != GB && (-1 == DB.indexOf(QB) || BB[QB] !== OB[QB])) return !1;
      return !0
    }

    function dB(BB, OB, GB) {
      let YB = !1;
      if (OB)
        for (let DB in OB) GB && DB in GB || (YB = !0, "style" == DB ? BB.style.cssText = "" : BB.removeAttribute(DB));
      if (GB)
        for (let DB in GB) OB && OB[DB] == GB[DB] || (YB = !0, "style" == DB ? BB.style.cssText = GB[DB] : BB.setAttribute(DB, GB[DB]));
      return YB
    }

    function KB(BB) {
      let OB = Object.create(null);
      for (let GB = 0; GB < BB.attributes.length; GB++) {
        let YB = BB.attributes[GB];
        OB[YB.name] = YB.value
      }
      return OB
    }
    class uB {
      eq(BB) {
        return !1
      }
      updateDOM(BB, OB, GB) {
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
      coordsAt(BB, OB, GB) {
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
    var mB = function(BB) {
      return BB[BB.Text = 0] = "Text", BB[BB.WidgetBefore = 1] = "WidgetBefore", BB[BB.WidgetAfter = 2] = "WidgetAfter", BB[BB.WidgetRange = 3] = "WidgetRange", BB
    }(mB || (mB = {}));
    class IB extends YB.C {
      constructor(BB, OB, GB, YB) {
        super(), this.startSide = BB, this.endSide = OB, this.widget = GB, this.spec = YB
      }
      get heightRelevant() {
        return !1
      }
      static mark(BB) {
        return new FB(BB)
      }
      static widget(BB) {
        let OB = Math.max(-1e4, Math.min(1e4, BB.side || 0)),
          GB = !!BB.block;
        return OB += GB && !BB.inlineOrder ? OB > 0 ? 3e8 : -4e8 : OB > 0 ? 1e8 : -1e8, new LB(BB, OB, OB, GB, BB.widget || null, !1)
      }
      static replace(BB) {
        let OB, GB, YB = !!BB.block;
        if (BB.isBlockGap) OB = -5e8, GB = 4e8;
        else {
          let {
            start: DB,
            end: QB
          } = gB(BB, YB);
          OB = (DB ? YB ? -3e8 : -1 : 5e8) - 1, GB = 1 + (QB ? YB ? 2e8 : 1 : -6e8)
        }
        return new LB(BB, OB, GB, YB, BB.widget || null, !0)
      }
      static line(BB) {
        return new iB(BB)
      }
      static set(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return YB.z.of(BB, OB)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    IB.none = YB.z.empty;
    class FB extends IB {
      constructor(BB) {
        let {
          start: OB,
          end: GB
        } = gB(BB);
        super(OB ? -1 : 5e8, GB ? 1 : -6e8, null, BB), this.tagName = BB.tagName || "span", this.attrs = BB.class && BB.attributes ? UB(BB.attributes, {
          class: BB.class
        }) : BB.class ? {
          class: BB.class
        } : BB.attributes || fB
      }
      eq(BB) {
        return this == BB || BB instanceof FB && this.tagName == BB.tagName && kB(this.attrs, BB.attrs)
      }
      range(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB;
        if (BB >= OB) throw new RangeError("Mark decorations may not be empty");
        return super.range(BB, OB)
      }
    }
    FB.prototype.point = !1;
    class iB extends IB {
      constructor(BB) {
        super(-2e8, -2e8, null, BB)
      }
      eq(BB) {
        return BB instanceof iB && this.spec.class == BB.spec.class && kB(this.spec.attributes, BB.spec.attributes)
      }
      range(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB;
        if (OB != BB) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(BB, OB)
      }
    }
    iB.prototype.mapMode = YB.p.TrackBefore, iB.prototype.point = !0;
    class LB extends IB {
      constructor(BB, OB, GB, DB, QB, oB) {
        super(OB, GB, QB, BB), this.block = DB, this.isReplace = oB, this.mapMode = DB ? OB <= 0 ? YB.p.TrackBefore : YB.p.TrackAfter : YB.p.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? mB.WidgetRange : this.startSide <= 0 ? mB.WidgetBefore : mB.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(BB) {
        return BB instanceof LB && (OB = this.widget, GB = BB.widget, OB == GB || !!(OB && GB && OB.compare(GB))) && this.block == BB.block && this.startSide == BB.startSide && this.endSide == BB.endSide;
        var OB, GB
      }
      range(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB;
        if (this.isReplace && (BB > OB || BB == OB && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && OB != BB) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(BB, OB)
      }
    }

    function gB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: GB,
          inclusiveEnd: YB
        } = BB;
      return null == GB && (GB = BB.inclusive), null == YB && (YB = BB.inclusive), {
        start: null !== GB && void 0 !== GB ? GB : OB,
        end: null !== YB && void 0 !== YB ? YB : OB
      }
    }

    function rB(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        DB = GB.length - 1;
      DB >= 0 && GB[DB] + YB >= BB ? GB[DB] = Math.max(GB[DB], OB) : GB.push(BB, OB)
    }
    LB.prototype.point = !0;
    class XB extends YB.C {
      constructor(BB, OB) {
        super(), this.tagName = BB, this.attributes = OB
      }
      eq(BB) {
        return BB == this || BB instanceof XB && this.tagName == BB.tagName && kB(this.attributes, BB.attributes)
      }
      static create(BB) {
        return new XB(BB.tagName, BB.attributes || fB)
      }
      static set(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return YB.z.of(BB, OB)
      }
    }

    function wB(BB) {
      let OB;
      return OB = 11 == BB.nodeType ? BB.getSelection ? BB : BB.ownerDocument : BB, OB.getSelection()
    }

    function EB(BB, OB) {
      return !!OB && (BB == OB || BB.contains(1 != OB.nodeType ? OB.parentNode : OB))
    }

    function cB(BB, OB) {
      if (!OB.anchorNode) return !1;
      try {
        return EB(BB, OB.anchorNode)
      } catch (GB) {
        return !1
      }
    }

    function hB(BB) {
      return 3 == BB.nodeType ? YO(BB, 0, BB.nodeValue.length).getClientRects() : 1 == BB.nodeType ? BB.getClientRects() : []
    }

    function aB(BB, OB, GB, YB) {
      return !!GB && (bB(BB, OB, GB, YB, -1) || bB(BB, OB, GB, YB, 1))
    }

    function eB(BB) {
      for (var OB = 0;; OB++)
        if (!(BB = BB.previousSibling)) return OB
    }

    function TB(BB) {
      return 1 == BB.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(BB.nodeName)
    }

    function bB(BB, OB, GB, YB, DB) {
      for (;;) {
        if (BB == GB && OB == YB) return !0;
        if (OB == (DB < 0 ? 0 : CB(BB))) {
          if ("DIV" == BB.nodeName) return !1;
          let GB = BB.parentNode;
          if (!GB || 1 != GB.nodeType) return !1;
          OB = eB(BB) + (DB < 0 ? 0 : 1), BB = GB
        } else {
          if (1 != BB.nodeType) return !1;
          if (1 == (BB = BB.childNodes[OB + (DB < 0 ? -1 : 0)]).nodeType && "false" == BB.contentEditable) return !1;
          OB = DB < 0 ? CB(BB) : 0
        }
      }
    }

    function CB(BB) {
      return 3 == BB.nodeType ? BB.nodeValue.length : BB.childNodes.length
    }

    function HB(BB, OB) {
      let GB = OB ? BB.left : BB.right;
      return {
        left: GB,
        right: GB,
        top: BB.top,
        bottom: BB.bottom
      }
    }

    function vB(BB) {
      let OB = BB.visualViewport;
      return OB ? {
        left: 0,
        right: OB.width,
        top: 0,
        bottom: OB.height
      } : {
        left: 0,
        right: BB.innerWidth,
        top: 0,
        bottom: BB.innerHeight
      }
    }

    function sB(BB, OB) {
      let GB = OB.width / BB.offsetWidth,
        YB = OB.height / BB.offsetHeight;
      return (GB > .995 && GB < 1.005 || !isFinite(GB) || Math.abs(OB.width - BB.offsetWidth) < 1) && (GB = 1), (YB > .995 && YB < 1.005 || !isFinite(YB) || Math.abs(OB.height - BB.offsetHeight) < 1) && (YB = 1), {
        scaleX: GB,
        scaleY: YB
      }
    }

    function xB(BB) {
      let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        GB = BB.ownerDocument,
        YB = null,
        DB = null;
      for (let QB = BB.parentNode; QB && (QB != GB.body && (OB && !YB || !DB));)
        if (1 == QB.nodeType) !DB && QB.scrollHeight > QB.clientHeight && (DB = QB), OB && !YB && QB.scrollWidth > QB.clientWidth && (YB = QB), QB = QB.assignedSlot || QB.parentNode;
        else {
          if (11 != QB.nodeType) break;
          QB = QB.host
        } return {
        x: YB,
        y: DB
      }
    }
    XB.prototype.startSide = XB.prototype.endSide = -1;
    class tB {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(BB) {
        return this.anchorNode == BB.anchorNode && this.anchorOffset == BB.anchorOffset && this.focusNode == BB.focusNode && this.focusOffset == BB.focusOffset
      }
      setRange(BB) {
        let {
          anchorNode: OB,
          focusNode: GB
        } = BB;
        this.set(OB, Math.min(BB.anchorOffset, OB ? CB(OB) : 0), GB, Math.min(BB.focusOffset, GB ? CB(GB) : 0))
      }
      set(BB, OB, GB, YB) {
        this.anchorNode = BB, this.anchorOffset = OB, this.focusNode = GB, this.focusOffset = YB
      }
    }
    let BO, OO = null;

    function GO(BB) {
      if (BB.setActive) return BB.setActive();
      if (OO) return BB.focus(OO);
      let OB = [];
      for (let GB = BB; GB && (OB.push(GB, GB.scrollTop, GB.scrollLeft), GB != GB.ownerDocument); GB = GB.parentNode);
      if (BB.focus(null == OO ? {
          get preventScroll() {
            return OO = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !OO) {
        OO = !1;
        for (let BB = 0; BB < OB.length;) {
          let GB = OB[BB++],
            YB = OB[BB++],
            DB = OB[BB++];
          GB.scrollTop != YB && (GB.scrollTop = YB), GB.scrollLeft != DB && (GB.scrollLeft = DB)
        }
      }
    }

    function YO(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : OB,
        YB = BO || (BO = document.createRange());
      return YB.setEnd(BB, GB), YB.setStart(BB, OB), YB
    }

    function DO(BB, OB, GB, YB) {
      let DB = {
        key: OB,
        code: OB,
        keyCode: GB,
        which: GB,
        cancelable: !0
      };
      YB && ({
        altKey: DB.altKey,
        ctrlKey: DB.ctrlKey,
        shiftKey: DB.shiftKey,
        metaKey: DB.metaKey
      } = YB);
      let QB = new KeyboardEvent("keydown", DB);
      QB.synthetic = !0, BB.dispatchEvent(QB);
      let oB = new KeyboardEvent("keyup", DB);
      return oB.synthetic = !0, BB.dispatchEvent(oB), QB.defaultPrevented || oB.defaultPrevented
    }

    function QO(BB) {
      return BB instanceof Window ? BB.pageYOffset > Math.max(0, BB.document.documentElement.scrollHeight - BB.innerHeight - 4) : BB.scrollTop > Math.max(1, BB.scrollHeight - BB.clientHeight - 4)
    }

    function oO(BB, OB) {
      for (let GB = BB, YB = OB;;) {
        if (3 == GB.nodeType && YB > 0) return {
          node: GB,
          offset: YB
        };
        if (1 == GB.nodeType && YB > 0) {
          if ("false" == GB.contentEditable) return null;
          GB = GB.childNodes[YB - 1], YB = CB(GB)
        } else {
          if (!GB.parentNode || TB(GB)) return null;
          YB = eB(GB), GB = GB.parentNode
        }
      }
    }

    function jO(BB, OB) {
      for (let GB = BB, YB = OB;;) {
        if (3 == GB.nodeType && YB < GB.nodeValue.length) return {
          node: GB,
          offset: YB
        };
        if (1 == GB.nodeType && YB < GB.childNodes.length) {
          if ("false" == GB.contentEditable) return null;
          GB = GB.childNodes[YB], YB = 0
        } else {
          if (!GB.parentNode || TB(GB)) return null;
          YB = eB(GB) + 1, GB = GB.parentNode
        }
      }
    }
    nB.safari && nB.safari_version >= 26 && (OO = !1);
    class yO {
      constructor(BB, OB) {
        let GB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = BB, this.offset = OB, this.precise = GB
      }
      static before(BB, OB) {
        return new yO(BB.parentNode, eB(BB), OB)
      }
      static after(BB, OB) {
        return new yO(BB.parentNode, eB(BB) + 1, OB)
      }
    }
    var JO = function(BB) {
      return BB[BB.LTR = 0] = "LTR", BB[BB.RTL = 1] = "RTL", BB
    }(JO || (JO = {}));
    const MO = JO.LTR,
      PO = JO.RTL;

    function zO(BB) {
      let OB = [];
      for (let GB = 0; GB < BB.length; GB++) OB.push(1 << +BB[GB]);
      return OB
    }
    const lO = zO("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      pO = zO("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      qO = Object.create(null),
      ZO = [];
    for (let Fo of ["()", "[]", "{}"]) {
      let BB = Fo.charCodeAt(0),
        OB = Fo.charCodeAt(1);
      qO[BB] = OB, qO[OB] = -BB
    }

    function NO(BB) {
      return BB <= 247 ? lO[BB] : 1424 <= BB && BB <= 1524 ? 2 : 1536 <= BB && BB <= 1785 ? pO[BB - 1536] : 1774 <= BB && BB <= 2220 ? 4 : 8192 <= BB && BB <= 8204 ? 256 : 64336 <= BB && BB <= 65023 ? 4 : 1
    }
    const RO = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class WO {
      get dir() {
        return this.level % 2 ? PO : MO
      }
      constructor(BB, OB, GB) {
        this.from = BB, this.to = OB, this.level = GB
      }
      side(BB, OB) {
        return this.dir == OB == BB ? this.to : this.from
      }
      forward(BB, OB) {
        return BB == (this.dir == OB)
      }
      static find(BB, OB, GB, YB) {
        let DB = -1;
        for (let QB = 0; QB < BB.length; QB++) {
          let oB = BB[QB];
          if (oB.from <= OB && oB.to >= OB) {
            if (oB.level == GB) return QB;
            (DB < 0 || (0 != YB ? YB < 0 ? oB.from < OB : oB.to > OB : BB[DB].level > oB.level)) && (DB = QB)
          }
        }
        if (DB < 0) throw new RangeError("Index out of range");
        return DB
      }
    }

    function AO(BB, OB) {
      if (BB.length != OB.length) return !1;
      for (let GB = 0; GB < BB.length; GB++) {
        let YB = BB[GB],
          DB = OB[GB];
        if (YB.from != DB.from || YB.to != DB.to || YB.direction != DB.direction || !AO(YB.inner, DB.inner)) return !1
      }
      return !0
    }
    const VO = [];

    function SO(BB, OB, GB, YB, DB, QB, oB) {
      let jB = YB % 2 ? 2 : 1;
      if (YB % 2 == DB % 2)
        for (let yB = OB, JB = 0; yB < GB;) {
          let OB = !0,
            MB = !1;
          if (JB == QB.length || yB < QB[JB].from) {
            let BB = VO[yB];
            BB != jB && (OB = !1, MB = 16 == BB)
          }
          let PB = OB || 1 != jB ? null : [],
            zB = OB ? YB : YB + 1,
            lB = yB;
          BB: for (;;)
            if (JB < QB.length && lB == QB[JB].from) {
              if (MB) break BB;
              let pB = QB[JB];
              if (!OB)
                for (let BB = pB.to, OB = JB + 1;;) {
                  if (BB == GB) break BB;
                  if (!(OB < QB.length && QB[OB].from == BB)) {
                    if (VO[BB] == jB) break BB;
                    break
                  }
                  BB = QB[OB++].to
                }
              if (JB++, PB) PB.push(pB);
              else {
                pB.from > yB && oB.push(new WO(yB, pB.from, zB)), nO(BB, pB.direction == MO != !(zB % 2) ? YB + 1 : YB, DB, pB.inner, pB.from, pB.to, oB), yB = pB.to
              }
              lB = pB.to
            } else {
              if (lB == GB || (OB ? VO[lB] != jB : VO[lB] == jB)) break;
              lB++
            } PB ? SO(BB, yB, lB, YB + 1, DB, PB, oB) : yB < lB && oB.push(new WO(yB, lB, zB)), yB = lB
        } else
          for (let yB = GB, JB = QB.length; yB > OB;) {
            let GB = !0,
              MB = !1;
            if (!JB || yB > QB[JB - 1].to) {
              let BB = VO[yB - 1];
              BB != jB && (GB = !1, MB = 16 == BB)
            }
            let PB = GB || 1 != jB ? null : [],
              zB = GB ? YB : YB + 1,
              lB = yB;
            BB: for (;;)
              if (JB && lB == QB[JB - 1].to) {
                if (MB) break BB;
                let pB = QB[--JB];
                if (!GB)
                  for (let BB = pB.from, GB = JB;;) {
                    if (BB == OB) break BB;
                    if (!GB || QB[GB - 1].to != BB) {
                      if (VO[BB - 1] == jB) break BB;
                      break
                    }
                    BB = QB[--GB].from
                  }
                if (PB) PB.push(pB);
                else {
                  pB.to < yB && oB.push(new WO(pB.to, yB, zB)), nO(BB, pB.direction == MO != !(zB % 2) ? YB + 1 : YB, DB, pB.inner, pB.from, pB.to, oB), yB = pB.from
                }
                lB = pB.from
              } else {
                if (lB == OB || (GB ? VO[lB - 1] != jB : VO[lB - 1] == jB)) break;
                lB--
              } PB ? SO(BB, lB, yB, YB + 1, DB, PB, oB) : lB < yB && oB.push(new WO(lB, yB, zB)), yB = lB
          }
    }

    function nO(BB, OB, GB, YB, DB, QB, oB) {
      let jB = OB % 2 ? 2 : 1;
      ! function(BB, OB, GB, YB, DB) {
        for (let QB = 0; QB <= YB.length; QB++) {
          let oB = QB ? YB[QB - 1].to : OB,
            jB = QB < YB.length ? YB[QB].from : GB,
            yB = QB ? 256 : DB;
          for (let OB = oB, GB = yB, YB = yB; OB < jB; OB++) {
            let DB = NO(BB.charCodeAt(OB));
            512 == DB ? DB = GB : 8 == DB && 4 == YB && (DB = 16), VO[OB] = 4 == DB ? 2 : DB, 7 & DB && (YB = DB), GB = DB
          }
          for (let BB = oB, OB = yB, YB = yB; BB < jB; BB++) {
            let DB = VO[BB];
            if (128 == DB) BB < jB - 1 && OB == VO[BB + 1] && 24 & OB ? DB = VO[BB] = OB : VO[BB] = 256;
            else if (64 == DB) {
              let DB = BB + 1;
              for (; DB < jB && 64 == VO[DB];) DB++;
              let QB = BB && 8 == OB || DB < GB && 8 == VO[DB] ? 1 == YB ? 1 : 8 : 256;
              for (let OB = BB; OB < DB; OB++) VO[OB] = QB;
              BB = DB - 1
            } else 8 == DB && 1 == YB && (VO[BB] = 1);
            OB = DB, 7 & DB && (YB = DB)
          }
        }
      }(BB, DB, QB, YB, jB),
      function(BB, OB, GB, YB, DB) {
        let QB = 1 == DB ? 2 : 1;
        for (let oB = 0, jB = 0, yB = 0; oB <= YB.length; oB++) {
          let JB = oB ? YB[oB - 1].to : OB,
            MB = oB < YB.length ? YB[oB].from : GB;
          for (let OB, GB, YB, oB = JB; oB < MB; oB++)
            if (GB = qO[OB = BB.charCodeAt(oB)])
              if (GB < 0) {
                for (let BB = jB - 3; BB >= 0; BB -= 3)
                  if (ZO[BB + 1] == -GB) {
                    let OB = ZO[BB + 2],
                      GB = 2 & OB ? DB : 4 & OB ? 1 & OB ? QB : DB : 0;
                    GB && (VO[oB] = VO[ZO[BB]] = GB), jB = BB;
                    break
                  }
              } else {
                if (189 == ZO.length) break;
                ZO[jB++] = oB, ZO[jB++] = OB, ZO[jB++] = yB
              }
          else if (2 == (YB = VO[oB]) || 1 == YB) {
            let BB = YB == DB;
            yB = BB ? 0 : 1;
            for (let OB = jB - 3; OB >= 0; OB -= 3) {
              let GB = ZO[OB + 2];
              if (2 & GB) break;
              if (BB) ZO[OB + 2] |= 2;
              else {
                if (4 & GB) break;
                ZO[OB + 2] |= 4
              }
            }
          }
        }
      }(BB, DB, QB, YB, jB),
      function(BB, OB, GB, YB) {
        for (let DB = 0, QB = YB; DB <= GB.length; DB++) {
          let oB = DB ? GB[DB - 1].to : BB,
            jB = DB < GB.length ? GB[DB].from : OB;
          for (let yB = oB; yB < jB;) {
            let oB = VO[yB];
            if (256 == oB) {
              let oB = yB + 1;
              for (;;)
                if (oB == jB) {
                  if (DB == GB.length) break;
                  oB = GB[DB++].to, jB = DB < GB.length ? GB[DB].from : OB
                } else {
                  if (256 != VO[oB]) break;
                  oB++
                } let JB = 1 == QB,
                MB = JB == (1 == (oB < OB ? VO[oB] : YB)) ? JB ? 1 : 2 : YB;
              for (let OB = oB, YB = DB, QB = YB ? GB[YB - 1].to : BB; OB > yB;) OB == QB && (OB = GB[--YB].from, QB = YB ? GB[YB - 1].to : BB), VO[--OB] = MB;
              yB = oB
            } else QB = oB, yB++
          }
        }
      }(DB, QB, YB, jB), SO(BB, DB, QB, OB, GB, YB, oB)
    }

    function UO(BB, OB, GB) {
      if (!BB) return [new WO(0, 0, OB == PO ? 1 : 0)];
      if (OB == MO && !GB.length && !RO.test(BB)) return fO(BB.length);
      if (GB.length)
        for (; BB.length > VO.length;) VO[VO.length] = 256;
      let YB = [],
        DB = OB == MO ? 0 : 1;
      return nO(BB, DB, DB, GB, 0, BB.length, YB), YB
    }

    function fO(BB) {
      return [new WO(0, BB, 0)]
    }
    let kO = "";

    function dO(BB, OB, GB, DB, QB) {
      var oB;
      let jB = DB.head - BB.from,
        yB = WO.find(OB, jB, null !== (oB = DB.bidiLevel) && void 0 !== oB ? oB : -1, DB.assoc),
        JB = OB[yB],
        MB = JB.side(QB, GB);
      if (jB == MB) {
        let BB = yB += QB ? 1 : -1;
        if (BB < 0 || BB >= OB.length) return null;
        JB = OB[yB = BB], jB = JB.side(!QB, GB), MB = JB.side(QB, GB)
      }
      let PB = (0, YB.X)(BB.text, jB, JB.forward(QB, GB));
      (PB < JB.from || PB > JB.to) && (PB = MB), kO = BB.text.slice(Math.min(jB, PB), Math.max(jB, PB));
      let zB = yB == (QB ? OB.length - 1 : 0) ? null : OB[yB + (QB ? 1 : -1)];
      return zB && PB == MB && zB.level + (QB ? 0 : 1) < JB.level ? YB.j.cursor(zB.side(!QB, GB) + BB.from, zB.forward(QB, GB) ? 1 : -1, zB.level) : YB.j.cursor(PB + BB.from, JB.forward(QB, GB) ? -1 : 1, JB.level)
    }

    function KO(BB, OB, GB) {
      for (let YB = OB; YB < GB; YB++) {
        let OB = NO(BB.charCodeAt(YB));
        if (1 == OB) return MO;
        if (2 == OB || 4 == OB) return PO
      }
      return MO
    }
    const uO = YB.o.define(),
      mO = YB.o.define(),
      IO = YB.o.define(),
      FO = YB.o.define(),
      iO = YB.o.define(),
      LO = YB.o.define(),
      gO = YB.o.define(),
      rO = YB.o.define(),
      XO = YB.o.define(),
      wO = YB.o.define({
        combine: BB => BB.some((BB => BB))
      }),
      EO = YB.o.define({
        combine: BB => BB.some((BB => BB))
      }),
      cO = YB.o.define();
    class hO {
      constructor(BB, OB, GB, YB, DB) {
        let QB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = BB, this.y = OB, this.x = GB, this.yMargin = YB, this.xMargin = DB, this.isSnapshot = QB
      }
      map(BB) {
        return BB.empty ? this : new hO(this.range.map(BB), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(BB) {
        return this.range.to <= BB.doc.length ? this : new hO(YB.j.cursor(BB.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const aO = YB.D.define({
        map: (BB, OB) => BB.map(OB)
      }),
      eO = YB.D.define();

    function TO(BB, OB, GB) {
      let YB = BB.facet(FO);
      YB.length ? YB[0](OB) : window.onerror && window.onerror(String(OB), GB, void 0, void 0, OB) || (GB ? console.error(GB + ":", OB) : console.error(OB))
    }
    const bO = YB.o.define({
      combine: BB => !BB.length || BB[0]
    });
    let CO = 0;
    const HO = YB.o.define({
      combine: BB => BB.filter(((OB, GB) => {
        for (let YB = 0; YB < GB; YB++)
          if (BB[YB].plugin == OB.plugin) return !1;
        return !0
      }))
    });
    class vO {
      constructor(BB, OB, GB, YB, DB) {
        this.id = BB, this.create = OB, this.domEventHandlers = GB, this.domEventObservers = YB, this.baseExtensions = DB(this), this.extension = this.baseExtensions.concat(HO.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(BB) {
        return this.baseExtensions.concat(HO.of({
          plugin: this,
          arg: BB
        }))
      }
      static define(BB, OB) {
        const {
          eventHandlers: GB,
          eventObservers: YB,
          provide: DB,
          TD: QB
        } = OB || {};
        return new vO(CO++, BB, GB, YB, (BB => {
          let OB = [];
          return QB && OB.push(BG.of((OB => {
            let GB = OB.plugin(BB);
            return GB ? QB(GB) : IB.none
          }))), DB && OB.push(DB(BB)), OB
        }))
      }
      static fromClass(BB, OB) {
        return vO.define(((OB, GB) => new BB(OB, GB)), OB)
      }
    }
    class sO {
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
            } catch (OB) {
              if (TO(BB.state, OB, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (GB) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(BB, this.spec.arg)
        } catch (OB) {
          TO(BB.state, OB, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(BB) {
        var OB;
        if (null === (OB = this.value) || void 0 === OB ? void 0 : OB.destroy) try {
          this.value.destroy()
        } catch (GB) {
          TO(BB.state, GB, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const xO = YB.o.define(),
      tO = YB.o.define(),
      BG = YB.o.define(),
      OG = YB.o.define(),
      GG = YB.o.define(),
      YG = YB.o.define(),
      DG = YB.o.define();

    function QG(BB, OB) {
      let GB = BB.state.facet(DG);
      if (!GB.length) return GB;
      let DB = GB.map((OB => OB instanceof Function ? OB(BB) : OB)),
        QB = [];
      return YB.z.spans(DB, OB.from, OB.to, {
        point() {},
        span(BB, GB, YB, DB) {
          let oB = BB - OB.from,
            jB = GB - OB.from,
            yB = QB;
          for (let QB = YB.length - 1; QB >= 0; QB--, DB--) {
            let BB, GB = YB[QB].spec.bidiIsolate;
            if (null == GB && (GB = KO(OB.text, oB, jB)), DB > 0 && yB.length && (BB = yB[yB.length - 1]).to == oB && BB.direction == GB) BB.to = jB, yB = BB.inner;
            else {
              let BB = {
                from: oB,
                to: jB,
                direction: GB,
                inner: []
              };
              yB.push(BB), yB = BB.inner
            }
          }
        }
      }), QB
    }
    const oG = YB.o.define();

    function jG(BB) {
      let OB = 0,
        GB = 0,
        YB = 0,
        DB = 0;
      for (let QB of BB.state.facet(oG)) {
        let oB = QB(BB);
        oB && (null != oB.left && (OB = Math.max(OB, oB.left)), null != oB.right && (GB = Math.max(GB, oB.right)), null != oB.top && (YB = Math.max(YB, oB.top)), null != oB.bottom && (DB = Math.max(DB, oB.bottom)))
      }
      return {
        left: OB,
        right: GB,
        top: YB,
        bottom: DB
      }
    }
    const yG = YB.o.define();
    class JG {
      constructor(BB, OB, GB, YB) {
        this.fromA = BB, this.toA = OB, this.fromB = GB, this.toB = YB
      }
      join(BB) {
        return new JG(Math.min(this.fromA, BB.fromA), Math.max(this.toA, BB.toA), Math.min(this.fromB, BB.fromB), Math.max(this.toB, BB.toB))
      }
      addToSet(BB) {
        let OB = BB.length,
          GB = this;
        for (; OB > 0; OB--) {
          let YB = BB[OB - 1];
          if (!(YB.fromA > GB.toA)) {
            if (YB.toA < GB.fromA) break;
            GB = GB.join(YB), BB.splice(OB - 1, 1)
          }
        }
        return BB.splice(OB, 0, GB), BB
      }
      static extendWithRanges(BB, OB) {
        if (0 == OB.length) return BB;
        let GB = [];
        for (let YB = 0, DB = 0, QB = 0;;) {
          let oB = YB < BB.length ? BB[YB].fromB : 1e9,
            jB = DB < OB.length ? OB[DB] : 1e9,
            yB = Math.min(oB, jB);
          if (1e9 == yB) break;
          let JB = yB + QB,
            MB = yB,
            PB = JB;
          for (;;)
            if (DB < OB.length && OB[DB] <= MB) {
              let GB = OB[DB + 1];
              DB += 2, MB = Math.max(MB, GB);
              for (let OB = YB; OB < BB.length && BB[OB].fromB <= MB; OB++) QB = BB[OB].toA - BB[OB].toB;
              PB = Math.max(PB, GB + QB)
            } else {
              if (!(YB < BB.length && BB[YB].fromB <= MB)) break;
              {
                let OB = BB[YB++];
                MB = Math.max(MB, OB.toB), PB = Math.max(PB, OB.toA), QB = OB.toA - OB.toB
              }
            } GB.push(new JG(JB, PB, yB, MB))
        }
        return GB
      }
    }
    class MG {
      constructor(BB, OB, GB) {
        this.view = BB, this.state = OB, this.transactions = GB, this.flags = 0, this.startState = BB.state, this.changes = YB.ChangeSet.empty(this.startState.doc.length);
        for (let YB of GB) this.changes = this.changes.compose(YB.changes);
        let DB = [];
        this.changes.iterChangedRanges(((BB, OB, GB, YB) => DB.push(new JG(BB, OB, GB, YB)))), this.changedRanges = DB
      }
      static create(BB, OB, GB) {
        return new MG(BB, OB, GB)
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
    const PG = [];
    class zG {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = BB, this.length = OB, this.flags = GB, this.parent = null, BB.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return PG
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
          BB && function(BB, OB) {
            for (let GB = BB.attributes.length - 1; GB >= 0; GB--) {
              let YB = BB.attributes[GB].name;
              null == OB[YB] && BB.removeAttribute(YB)
            }
            for (let GB in OB) {
              let YB = OB[GB];
              "style" == GB ? BB.style.cssText = YB : BB.getAttribute(GB) != YB && BB.setAttribute(GB, YB)
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
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let GB of this.children) {
          if (GB == BB) return OB;
          OB += GB.length + GB.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(BB) {
        return this.posBefore(BB) + BB.length
      }
      covers(BB) {
        return !0
      }
      coordsIn(BB, OB) {
        return null
      }
      domPosFor(BB, OB) {
        let GB = eB(this.dom),
          YB = this.length ? BB > 0 : OB > 0;
        return new yO(this.parent.dom, GB + (YB ? 1 : 0), 0 == BB || BB == this.length)
      }
      markDirty(BB) {
        this.flags &= -3, BB && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let BB = this; BB; BB = BB.parent)
          if (BB instanceof qG) return BB;
        return null
      }
      static get(BB) {
        return BB.cmTile
      }
    }
    class lG extends zG {
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
        let OB, GB = this.dom,
          YB = null,
          DB = (null === BB || void 0 === BB ? void 0 : BB.node) == GB ? BB : null,
          QB = 0;
        for (let oB of this.children) {
          if (oB.sync(BB), QB += oB.length + oB.breakAfter, OB = YB ? YB.nextSibling : GB.firstChild, DB && OB != oB.dom && (DB.written = !0), oB.dom.parentNode == GB)
            for (; OB && OB != oB.dom;) OB = pG(OB);
          else GB.insertBefore(oB.dom, OB);
          YB = oB.dom
        }
        for (OB = YB ? YB.nextSibling : GB.firstChild, DB && OB && (DB.written = !0); OB;) OB = pG(OB);
        this.length = QB
      }
    }

    function pG(BB) {
      let OB = BB.nextSibling;
      return BB.parentNode.removeChild(BB), OB
    }
    class qG extends lG {
      constructor(BB, OB) {
        super(OB), this.view = BB
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
          let OB = zG.get(BB);
          if (OB && this.owns(OB)) return OB;
          BB = BB.parentNode
        }
      }
      blockTiles(BB) {
        for (let OB = [], GB = this, YB = 0, DB = 0;;)
          if (YB == GB.children.length) {
            if (!OB.length) return;
            GB = GB.parent, GB.breakAfter && DB++, YB = OB.pop()
          } else {
            let QB = GB.children[YB++];
            if (QB instanceof ZG) OB.push(YB), GB = QB, YB = 0;
            else {
              let OB = DB + QB.length,
                GB = BB(QB, DB);
              if (void 0 !== GB) return GB;
              DB = OB + QB.breakAfter
            }
          }
      }
      resolveBlock(BB, OB) {
        let GB, YB, DB = -1,
          QB = -1;
        if (this.blockTiles(((oB, jB) => {
            let yB = jB + oB.length;
            if (BB >= jB && BB <= yB) {
              if (oB.isWidget() && OB >= -1 && OB <= 1) {
                if (32 & oB.flags) return !0;
                16 & oB.flags && (GB = void 0)
              }(jB < BB || BB == yB && (OB < -1 ? oB.length : oB.covers(1))) && (!GB || !oB.isWidget() && GB.isWidget()) && (GB = oB, DB = BB - jB), (yB > BB || BB == jB && (OB > 1 ? oB.length : oB.covers(-1))) && (!YB || !oB.isWidget() && YB.isWidget()) && (YB = oB, QB = BB - jB)
            }
          })), !GB && !YB) throw new Error("No tile at position " + BB);
        return GB && OB < 0 || !YB ? {
          tile: GB,
          offset: DB
        } : {
          tile: YB,
          offset: QB
        }
      }
    }
    class ZG extends lG {
      constructor(BB, OB) {
        super(BB), this.wrapper = OB
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
      static of (BB, OB) {
        let GB = new ZG(OB || document.createElement(BB.tagName), BB);
        return OB || (GB.flags |= 4), GB
      }
    }
    class NG extends lG {
      constructor(BB, OB) {
        super(BB), this.attrs = OB
      }
      isLine() {
        return !0
      }
      static start(BB, OB, GB) {
        let YB = new NG(OB || document.createElement("div"), BB);
        return OB && GB || (YB.flags |= 4), YB
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(BB, OB, GB) {
        let YB = null,
          DB = -1,
          QB = null,
          oB = -1;
        ! function BB(jB, yB) {
          for (let JB = 0, MB = 0; JB < jB.children.length && MB <= yB; JB++) {
            let PB = jB.children[JB],
              zB = MB + PB.length;
            zB >= yB && (PB.isComposite() ? BB(PB, yB - MB) : (!QB || QB.isHidden && (OB > 0 || GB && RG(QB, PB))) && (zB > yB || 32 & PB.flags) ? (QB = PB, oB = yB - MB) : (MB < yB || 16 & PB.flags && !PB.isHidden) && (YB = PB, DB = yB - MB)), MB = zB
          }
        }(this, BB);
        let jB = (OB < 0 ? YB : QB) || YB || QB;
        return jB ? {
          tile: jB,
          offset: jB == YB ? DB : oB
        } : null
      }
      coordsIn(BB, OB) {
        let GB = this.resolveInline(BB, OB, !0);
        return GB ? GB.tile.coordsIn(Math.max(0, GB.offset), OB) : function(BB) {
          let OB = BB.dom.lastChild;
          if (!OB) return BB.dom.getBoundingClientRect();
          let GB = hB(OB);
          return GB[GB.length - 1] || null
        }(this)
      }
      domIn(BB, OB) {
        let GB = this.resolveInline(BB, OB);
        if (GB) {
          let {
            tile: BB,
            offset: YB
          } = GB;
          if (this.dom.contains(BB.dom)) return BB.isText() ? new yO(BB.dom, Math.min(BB.dom.nodeValue.length, YB)) : BB.domPosFor(YB, 16 & BB.flags ? 1 : 32 & BB.flags ? -1 : OB);
          let DB = GB.tile.parent,
            QB = !1;
          for (let OB of DB.children) {
            if (QB) return new yO(OB.dom, 0);
            OB == GB.tile && (QB = !0)
          }
        }
        return new yO(this.dom, 0)
      }
    }

    function RG(BB, OB) {
      let GB = BB.coordsIn(0, 1),
        YB = OB.coordsIn(0, 1);
      return GB && YB && YB.top < GB.bottom
    }
    class WG extends lG {
      constructor(BB, OB) {
        super(BB), this.mark = OB
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (BB, OB) {
        let GB = new WG(OB || document.createElement(BB.tagName), BB);
        return OB || (GB.flags |= 4), GB
      }
    }
    class AG extends zG {
      constructor(BB, OB) {
        super(BB, OB.length), this.text = OB
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
      coordsIn(BB, OB) {
        let GB = this.dom.nodeValue.length;
        BB > GB && (BB = GB);
        let YB = BB,
          DB = BB,
          QB = 0;
        0 == BB && OB < 0 || BB == GB && OB >= 0 ? nB.chrome || nB.gecko || (BB ? (YB--, QB = 1) : DB < GB && (DB++, QB = -1)) : OB < 0 ? YB-- : DB < GB && DB++;
        let oB = YO(this.dom, YB, DB).getClientRects();
        if (!oB.length) return null;
        let jB = oB[(QB ? QB < 0 : OB >= 0) ? 0 : oB.length - 1];
        return nB.safari && !QB && 0 == jB.width && (jB = Array.prototype.find.call(oB, (BB => BB.width)) || jB), QB ? HB(jB, QB < 0) : jB || null
      }
      static of (BB, OB) {
        let GB = new AG(OB || document.createTextNode(BB), BB);
        return OB || (GB.flags |= 2), GB
      }
    }
    class VG extends zG {
      constructor(BB, OB, GB, YB) {
        super(BB, OB, YB), this.widget = GB
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
      coordsIn(BB, OB) {
        return this.coordsInWidget(BB, OB, !1)
      }
      coordsInWidget(BB, OB, GB) {
        let YB = this.widget.coordsAt(this.dom, BB, OB);
        if (YB) return YB;
        if (GB) return HB(this.dom.getBoundingClientRect(), this.length ? 0 == BB : OB <= 0);
        {
          let OB = this.dom.getClientRects(),
            GB = null;
          if (!OB.length) return null;
          let YB = !!(16 & this.flags) || !(32 & this.flags) && BB > 0;
          for (let DB = YB ? OB.length - 1 : 0; GB = OB[DB], !(BB > 0 ? 0 == DB : DB == OB.length - 1 || GB.top < GB.bottom); DB += YB ? -1 : 1);
          return HB(GB, !YB)
        }
      }
      get overrideDOMText() {
        if (!this.length) return YB.K.empty;
        let {
          root: BB
        } = this;
        if (!BB) return YB.K.empty;
        let OB = this.posAtStart;
        return BB.view.state.doc.slice(OB, OB + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (BB, OB, GB, YB, DB) {
        return DB || (DB = BB.toDOM(OB), BB.editable || (DB.contentEditable = "false")), new VG(DB, GB, BB, YB)
      }
    }
    class SG extends zG {
      constructor(BB) {
        let OB = document.createElement("img");
        OB.className = "cm-widgetBuffer", OB.setAttribute("aria-hidden", "true"), super(OB, 0, BB)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return YB.K.empty
      }
      coordsIn(BB) {
        return this.dom.getBoundingClientRect()
      }
    }
    class nG {
      constructor(BB) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = BB
      }
      advance(BB, OB, GB) {
        let {
          tile: YB,
          index: DB,
          beforeBreak: QB,
          parents: oB
        } = this;
        for (; BB || OB > 0;)
          if (YB.isComposite())
            if (QB) {
              if (!BB) break;
              GB && GB.break(), BB--, QB = !1
            } else if (DB == YB.children.length) {
          if (!BB && !oB.length) break;
          GB && GB.leave(YB), QB = !!YB.breakAfter, ({
            tile: YB,
            index: DB
          } = oB.pop()), DB++
        } else {
          let jB = YB.children[DB],
            yB = jB.breakAfter;
          !(OB > 0 ? jB.length <= BB : jB.length < BB) || GB && !1 === GB.skip(jB, 0, jB.length) && jB.isComposite ? (oB.push({
            tile: YB,
            index: DB
          }), YB = jB, DB = 0, GB && jB.isComposite() && GB.enter(jB)) : (QB = !!yB, DB++, BB -= jB.length)
        } else if (DB == YB.length) QB = !!YB.breakAfter, ({
          tile: YB,
          index: DB
        } = oB.pop()), DB++;
        else {
          if (!BB) break;
          {
            let OB = Math.min(BB, YB.length - DB);
            GB && GB.skip(YB, DB, DB + OB), BB -= OB, DB += OB
          }
        }
        return this.tile = YB, this.index = DB, this.beforeBreak = QB, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class UG {
      constructor(BB, OB, GB, YB) {
        this.from = BB, this.to = OB, this.wrapper = GB, this.rank = YB
      }
    }
    class fG {
      constructor(BB, OB, GB) {
        this.cache = BB, this.root = OB, this.blockWrappers = GB, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(BB, OB, GB, YB) {
        var DB;
        this.flushBuffer();
        let QB = this.ensureMarks(OB, GB),
          oB = QB.lastChild;
        if (oB && oB.isText() && !(8 & oB.flags) && oB.length + BB.length < 512) {
          this.cache.reused.set(oB, 2), (QB.children[QB.children.length - 1] = new AG(oB.dom, oB.text + BB)).parent = QB
        } else QB.append(YB || AG.of(BB, null === (DB = this.cache.find(AG)) || void 0 === DB ? void 0 : DB.dom));
        this.pos += BB.length, this.afterWidget = null
      }
      addComposition(BB, OB) {
        let GB = this.curLine;
        GB.dom != OB.line.dom && (GB.setDOM(this.cache.reused.has(OB.line) ? FG(OB.line.dom) : OB.line.dom), this.cache.reused.set(OB.line, 2));
        let YB = GB;
        for (let oB = OB.marks.length - 1; oB >= 0; oB--) {
          let BB = OB.marks[oB],
            GB = YB.lastChild;
          if (GB instanceof WG && GB.mark.eq(BB.mark)) GB.dom != BB.dom && GB.setDOM(FG(BB.dom)), YB = GB;
          else {
            if (this.cache.reused.get(BB)) {
              let OB = zG.get(BB.dom);
              OB && OB.setDOM(FG(BB.dom))
            }
            let OB = WG.of(BB.mark, BB.dom);
            YB.append(OB), YB = OB
          }
          this.cache.reused.set(BB, 2)
        }
        let DB = zG.get(BB.text);
        DB && this.cache.reused.set(DB, 2);
        let QB = new AG(BB.text, BB.text.nodeValue);
        QB.flags |= 8, YB.append(QB)
      }
      addInlineWidget(BB, OB, GB) {
        let YB = this.afterWidget && 48 & BB.flags && (48 & this.afterWidget.flags) == (48 & BB.flags);
        YB || this.flushBuffer();
        let DB = this.ensureMarks(OB, GB);
        YB || 16 & BB.flags || DB.append(this.getBuffer(1)), DB.append(BB), this.pos += BB.length, this.afterWidget = BB
      }
      addMark(BB, OB, GB) {
        this.flushBuffer(), this.ensureMarks(OB, GB).append(BB), this.pos += BB.length, this.afterWidget = null
      }
      addBlockWidget(BB) {
        this.getBlockPos().append(BB), this.pos += BB.length, this.lastBlock = BB, this.endLine()
      }
      continueWidget(BB) {
        (this.afterWidget || this.lastBlock).length += BB, this.pos += BB
      }
      addLineStart(BB, OB) {
        var GB;
        BB || (BB = IG);
        let YB = NG.start(BB, OB || (null === (GB = this.cache.find(NG)) || void 0 === GB ? void 0 : GB.dom), !!OB);
        this.getBlockPos().append(this.lastBlock = this.curLine = YB)
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
      ensureMarks(BB, OB) {
        var GB;
        let YB = this.curLine;
        for (let DB = BB.length - 1; DB >= 0; DB--) {
          let QB, oB = BB[DB];
          if (OB > 0 && (QB = YB.lastChild) && QB instanceof WG && QB.mark.eq(oB)) YB = QB, OB--;
          else {
            let BB = WG.of(oB, null === (GB = this.cache.find(WG, (BB => BB.mark.eq(oB)))) || void 0 === GB ? void 0 : GB.dom);
            YB.append(BB), YB = BB, OB = 0
          }
        }
        return YB
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let BB = this.curLine.lastChild;
          BB && mG(this.curLine, !1) && ("BR" == BB.dom.nodeName || !BB.isWidget() || nB.ios && mG(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(LG, 0, 32) || new VG(LG.toDOM(), 0, LG, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let BB = this.wrappers.length - 1; BB >= 0; BB--) this.wrappers[BB].to < this.pos && this.wrappers.splice(BB, 1);
        for (let BB = this.blockWrappers; BB.value && BB.from <= this.pos; BB.next())
          if (BB.to >= this.pos) {
            let OB = new UG(BB.from, BB.to, BB.value, BB.rank),
              GB = this.wrappers.length;
            for (; GB > 0 && (this.wrappers[GB - 1].rank - OB.rank || this.wrappers[GB - 1].to - OB.to) < 0;) GB--;
            this.wrappers.splice(GB, 0, OB)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var BB;
        this.updateBlockWrappers();
        let OB = this.root;
        for (let GB of this.wrappers) {
          let YB = OB.lastChild;
          if (GB.from < this.pos && YB instanceof ZG && YB.wrapper.eq(GB.wrapper)) OB = YB;
          else {
            let YB = ZG.of(GB.wrapper, null === (BB = this.cache.find(ZG, (BB => BB.wrapper.eq(GB.wrapper)))) || void 0 === BB ? void 0 : BB.dom);
            OB.append(YB), OB = YB
          }
        }
        return OB
      }
      blockPosCovered() {
        let BB = this.lastBlock;
        return null != BB && !BB.breakAfter && (!BB.isWidget() || (160 & BB.flags) > 0)
      }
      getBuffer(BB) {
        let OB = 2 | (BB < 0 ? 16 : 32),
          GB = this.cache.find(SG, void 0, 1);
        return GB && (GB.flags = OB), GB || new SG(OB)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class kG {
      constructor(BB) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = BB.iter()
      }
      skip(BB) {
        this.textOff + BB <= this.text.length ? this.textOff += BB : (this.skipCount += BB - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(BB) {
        if (this.textOff == this.text.length) {
          let {
            value: OB,
            lineBreak: GB,
            done: YB
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, YB) throw new Error("Ran out of text content when drawing inline views");
          this.text = OB;
          let DB = this.textOff = Math.min(BB, OB.length);
          return GB ? null : OB.slice(0, DB)
        }
        let OB = Math.min(this.text.length, this.textOff + BB),
          GB = this.text.slice(this.textOff, OB);
        return this.textOff = OB, GB
      }
    }
    const dG = [VG, NG, AG, WG, SG, ZG, qG];
    for (let Fo = 0; Fo < dG.length; Fo++) dG[Fo].bucket = Fo;
    class KG {
      constructor(BB) {
        this.view = BB, this.buckets = dG.map((() => [])), this.index = dG.map((() => 0)), this.reused = new Map
      }
      add(BB) {
        let OB = BB.constructor.bucket,
          GB = this.buckets[OB];
        GB.length < 6 ? GB.push(BB) : GB[this.index[OB] = (this.index[OB] + 1) % 6] = BB
      }
      find(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          YB = BB.bucket,
          DB = this.buckets[YB],
          QB = this.index[YB];
        for (let oB = DB.length - 1; oB >= 0; oB--) {
          let BB = (oB + QB) % DB.length,
            jB = DB[BB];
          if ((!OB || OB(jB)) && !this.reused.has(jB)) return DB.splice(BB, 1), BB < QB && this.index[YB]--, this.reused.set(jB, GB), jB
        }
        return null
      }
      findWidget(BB, OB, GB) {
        let YB = this.buckets[0];
        if (YB.length)
          for (let DB = 0, QB = 0;; DB++) {
            if (DB == YB.length) {
              if (QB) return null;
              QB = 1, DB = 0
            }
            let oB = YB[DB];
            if (!this.reused.has(oB) && (0 == QB ? oB.widget.compare(BB) : oB.widget.constructor == BB.constructor && BB.updateDOM(oB.dom, this.view, oB.widget))) return YB.splice(DB, 1), DB < this.index[0] && this.index[0]--, oB.widget == BB && oB.length == OB && (497 & oB.flags) == GB ? (this.reused.set(oB, 1), oB) : (this.reused.set(oB, 2), new VG(oB.dom, OB, BB, -498 & oB.flags | GB))
          }
      }
      reuse(BB) {
        return this.reused.set(BB, 1), BB
      }
      maybeReuse(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(BB)) return this.reused.set(BB, OB), BB.dom
      }
      clear() {
        for (let BB = 0; BB < this.buckets.length; BB++) this.buckets[BB].length = this.index[BB] = 0
      }
    }
    class uG {
      constructor(BB, OB, GB, DB, QB) {
        this.view = BB, this.TD = DB, this.disallowBlockEffectsFor = QB, this.openWidget = !1, this.openMarks = 0, this.cache = new KG(BB), this.text = new kG(BB.state.doc), this.builder = new fG(this.cache, new qG(BB, BB.contentDOM), YB.z.iter(GB)), this.cache.reused.set(OB, 2), this.old = new nG(OB), this.reuseWalker = {
          skip: (BB, OB, GB) => {
            if (this.cache.add(BB), BB.isComposite()) return !1
          },
          enter: BB => this.cache.add(BB),
          leave: () => {},
          break: () => {}
        }
      }
      run(BB, OB) {
        let GB = OB && this.getCompositionContext(OB.text);
        for (let YB = 0, DB = 0, QB = 0;;) {
          let oB = QB < BB.length ? BB[QB++] : null,
            jB = oB ? oB.fromA : this.old.root.length;
          if (jB > YB) {
            let BB = jB - YB;
            this.preserve(BB, !QB, !oB), YB = jB, DB += BB
          }
          if (!oB) break;
          OB && oB.fromA <= OB.range.fromA && oB.toA >= OB.range.toA ? (this.forward(oB.fromA, OB.range.fromA, OB.range.fromA < OB.range.toA ? 1 : -1), this.emit(DB, OB.range.fromB), this.cache.clear(), this.builder.addComposition(OB, GB), this.text.skip(OB.range.toB - OB.range.fromB), this.forward(OB.range.fromA, oB.toA), this.emit(OB.range.toB, oB.toB)) : (this.forward(oB.fromA, oB.toA), this.emit(DB, oB.toB)), DB = oB.toB, YB = oB.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(BB, OB, GB) {
        let YB = function(BB) {
            let OB = [];
            for (let GB = BB.parents.length; GB > 1; GB--) {
              let YB = GB == BB.parents.length ? BB.tile : BB.parents[GB].tile;
              YB instanceof WG && OB.push(YB.mark)
            }
            return OB
          }(this.old),
          DB = this.openMarks;
        this.old.advance(BB, GB ? 1 : -1, {
          skip: (BB, OB, GB) => {
            if (BB.isWidget())
              if (this.openWidget) this.builder.continueWidget(GB - OB);
              else {
                let QB = GB > 0 || OB < BB.length ? VG.of(BB.widget, this.view, GB - OB, 496 & BB.flags, this.cache.maybeReuse(BB)) : this.cache.reuse(BB);
                256 & QB.flags ? (QB.flags &= -2, this.builder.addBlockWidget(QB)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(QB, YB, DB), DB = YB.length)
              }
            else if (BB.isText()) this.builder.ensureLine(null), OB || GB != BB.length || this.cache.reused.has(BB) ? (this.cache.add(BB), this.builder.addText(BB.text.slice(OB, GB), YB, DB)) : this.builder.addText(BB.text, YB, DB, this.cache.reuse(BB)), DB = YB.length;
            else if (BB.isLine()) BB.flags &= -2, this.cache.reused.set(BB, 1), this.builder.addLine(BB);
            else if (BB instanceof SG) this.cache.add(BB);
            else {
              if (!(BB instanceof WG)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(BB, YB, DB), this.cache.reused.set(BB, 1), DB = YB.length
            }
            this.openWidget = !1
          },
          enter: BB => {
            BB.isLine() ? this.builder.addLineStart(BB.attrs, this.cache.maybeReuse(BB)) : (this.cache.add(BB), BB instanceof WG && YB.unshift(BB.mark)), this.openWidget = !1
          },
          leave: BB => {
            BB.isLine() ? YB.length && (YB.length = DB = 0) : BB instanceof WG && (YB.shift(), DB = Math.min(DB, YB.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(BB)
      }
      emit(BB, OB) {
        let GB = null,
          DB = this.builder,
          QB = 0,
          oB = YB.z.spans(this.TD, BB, OB, {
            point: (BB, OB, YB, oB, jB, yB) => {
              if (YB instanceof LB) {
                if (this.disallowBlockEffectsFor[yB]) {
                  if (YB.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (OB > this.view.state.doc.lineAt(BB).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (QB = oB.length, jB > oB.length) DB.continueWidget(OB - BB);
                else {
                  let QB = YB.widget || (YB.block ? iG.block : iG.inline),
                    yB = function(BB) {
                      let OB = BB.isReplace ? (BB.startSide < 0 ? 64 : 0) | (BB.endSide > 0 ? 128 : 0) : BB.startSide > 0 ? 32 : 16;
                      BB.block && (OB |= 256);
                      return OB
                    }(YB),
                    JB = this.cache.findWidget(QB, OB - BB, yB) || VG.of(QB, this.view, OB - BB, yB);
                  YB.block ? (YB.startSide > 0 && DB.addLineStartIfNotCovered(GB), DB.addBlockWidget(JB)) : (DB.ensureLine(GB), DB.addInlineWidget(JB, oB, jB))
                }
                GB = null
              } else GB = function(BB, OB) {
                let GB = OB.spec.attributes,
                  YB = OB.spec.class;
                if (!GB && !YB) return BB;
                BB || (BB = {
                  class: "cm-line"
                });
                GB && UB(GB, BB);
                YB && (BB.class += " " + YB);
                return BB
              }(GB, YB);
              OB > BB && this.text.skip(OB - BB)
            },
            span: (BB, OB, YB, QB) => {
              for (let oB = BB; oB < OB;) {
                let jB = this.text.next(Math.min(512, OB - oB));
                null == jB ? (DB.addLineStartIfNotCovered(GB), DB.addBreak(), oB++) : (DB.ensureLine(GB), DB.addText(jB, YB, oB == BB ? QB : YB.length), oB += jB.length), GB = null
              }
            }
          });
        DB.addLineStartIfNotCovered(GB), this.openWidget = oB > QB, this.openMarks = oB
      }
      forward(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        OB - BB <= 10 ? this.old.advance(OB - BB, GB, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(OB - BB - 10, -1), this.old.advance(5, GB, this.reuseWalker))
      }
      getCompositionContext(BB) {
        let OB = [],
          GB = null;
        for (let YB = BB.parentNode;; YB = YB.parentNode) {
          let BB = zG.get(YB);
          if (YB == this.view.contentDOM) break;
          BB instanceof WG ? OB.push(BB) : (null === BB || void 0 === BB ? void 0 : BB.isLine()) ? GB = BB : BB instanceof ZG || ("DIV" != YB.nodeName || GB || YB == this.view.contentDOM ? GB || OB.push(WG.of(new FB({
            tagName: YB.nodeName.toLowerCase(),
            attributes: KB(YB)
          }), YB)) : GB = new NG(YB, IG))
        }
        return {
          line: GB,
          marks: OB
        }
      }
    }

    function mG(BB, OB) {
      let GB = BB => {
        for (let YB of BB.children)
          if ((OB ? YB.isText() : YB.length) || GB(YB)) return !0;
        return !1
      };
      return GB(BB)
    }
    const IG = {
      class: "cm-line"
    };

    function FG(BB) {
      let OB = zG.get(BB);
      return OB && OB.setDOM(BB.cloneNode()), BB
    }
    class iG extends uB {
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
    iG.inline = new iG("span"), iG.block = new iG("div");
    const LG = new class extends uB {
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
    class gG {
      constructor(BB) {
        this.view = BB, this.TD = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = IB.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new qG(BB, BB.contentDOM), this.updateInner([new JG(0, 0, 0, BB.state.doc.length)], null)
      }
      update(BB) {
        var OB;
        let GB = BB.changedRanges;
        this.minWidth > 0 && GB.length && (GB.every((BB => {
          let {
            fromA: OB,
            toA: GB
          } = BB;
          return GB < this.minWidthFrom || OB > this.minWidthTo
        })) ? (this.minWidthFrom = BB.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = BB.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(BB);
        let DB = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (OB = this.domChanged) || void 0 === OB ? void 0 : OB.newSel) ? DB = this.domChanged.newSel.head : function(BB, OB) {
          let GB = !1;
          OB && BB.iterChangedRanges(((BB, YB) => {
            BB < OB.to && YB > OB.from && (GB = !0)
          }));
          return GB
        }(BB.changes, this.hasComposition) || BB.selectionSet || (DB = BB.state.selection.main.head));
        let QB = DB > -1 ? function(BB, OB, GB) {
          let YB = XG(BB, GB);
          if (!YB) return null;
          let {
            node: DB,
            from: QB,
            to: oB
          } = YB, jB = DB.nodeValue;
          if (/[\n\r]/.test(jB)) return null;
          if (BB.state.doc.sliceString(YB.from, YB.to) != jB) return null;
          let yB = OB.invertedDesc;
          return {
            range: new JG(yB.mapPos(QB), yB.mapPos(oB), QB, oB),
            text: DB
          }
        }(this.view, BB.changes, DB) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: OB,
            to: YB
          } = this.hasComposition;
          GB = new JG(OB, YB, BB.changes.mapPos(OB, -1), BB.changes.mapPos(YB, 1)).addToSet(GB.slice())
        }
        this.hasComposition = QB ? {
          from: QB.range.fromB,
          to: QB.range.toB
        } : null, (nB.ie || nB.chrome) && !QB && BB && BB.state.doc.lines != BB.startState.doc.lines && (this.forceSelection = !0);
        let oB = this.TD,
          jB = this.blockWrappers;
        this.updateDeco();
        let yB = function(BB, OB, GB) {
          let DB = new wG;
          return YB.z.compare(BB, OB, GB, DB), DB.changes
        }(oB, this.TD, BB.changes);
        yB.length && (GB = JG.extendWithRanges(GB, yB));
        let JB = function(BB, OB, GB) {
          let DB = new EG;
          return YB.z.compare(BB, OB, GB, DB), DB.changes
        }(jB, this.blockWrappers, BB.changes);
        return JB.length && (GB = JG.extendWithRanges(GB, JB)), QB && !GB.some((BB => BB.fromA <= QB.range.fromA && BB.toA >= QB.range.toA)) && (GB = QB.range.addToSet(GB.slice())), !(2 & this.tile.flags && 0 == GB.length) && (this.updateInner(GB, QB), BB.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(BB, OB) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: GB
        } = this.view;
        GB.ignore((() => {
          if (OB || BB.length) {
            let GB = this.tile,
              YB = new uG(this.view, GB, this.blockWrappers, this.TD, this.dynamicDecorationMap);
            OB && zG.get(OB.text) && YB.cache.reused.set(zG.get(OB.text), 2), this.tile = YB.run(BB, OB), rG(GB, YB.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let YB = nB.chrome || nB.ios ? {
            node: GB.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(YB), !YB || !YB.written && GB.selectionRange.focusNode == YB.node && this.tile.dom.contains(YB.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let YB = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let DB of this.tile.children) DB.isWidget() && DB.widget instanceof cG && YB.push(DB.dom);
        GB.updateGaps(YB)
      }
      updateEditContextFormatting(BB) {
        this.editContextFormatting = this.editContextFormatting.map(BB.changes);
        for (let OB of BB.transactions)
          for (let BB of OB.effects) BB.is(eO) && (this.editContextFormatting = BB.value)
      }
      updateSelection() {
        let BB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: OB
        } = this.tile, GB = this.view.root.activeElement, YB = GB == OB, DB = !YB && !(this.view.state.facet(bO) || OB.tabIndex > -1) && cB(OB, this.view.observer.selectionRange) && !(GB && OB.contains(GB));
        if (!(YB || BB || DB)) return;
        let QB = this.forceSelection;
        this.forceSelection = !1;
        let oB, jB, yB = this.view.state.selection.main;
        if (yB.empty ? jB = oB = this.inlineDOMNearPos(yB.anchor, yB.assoc || 1) : (jB = this.inlineDOMNearPos(yB.head, yB.head == yB.from ? 1 : -1), oB = this.inlineDOMNearPos(yB.anchor, yB.anchor == yB.from ? 1 : -1)), nB.gecko && yB.empty && !this.hasComposition && (1 == (JB = oB).node.nodeType && JB.node.firstChild && (0 == JB.offset || "false" == JB.node.childNodes[JB.offset - 1].contentEditable) && (JB.offset == JB.node.childNodes.length || "false" == JB.node.childNodes[JB.offset].contentEditable))) {
          let BB = document.createTextNode("");
          this.view.observer.ignore((() => oB.node.insertBefore(BB, oB.node.childNodes[oB.offset] || null))), oB = jB = new yO(BB, 0), QB = !0
        }
        var JB;
        let MB = this.view.observer.selectionRange;
        !QB && MB.focusNode && (aB(oB.node, oB.offset, MB.anchorNode, MB.anchorOffset) && aB(jB.node, jB.offset, MB.focusNode, MB.focusOffset) || this.suppressWidgetCursorChange(MB, yB)) || (this.view.observer.ignore((() => {
          nB.android && nB.chrome && OB.contains(MB.focusNode) && function(BB, OB) {
            for (let GB = BB; GB && GB != OB; GB = GB.assignedSlot || GB.parentNode)
              if (1 == GB.nodeType && "false" == GB.contentEditable) return !0;
            return !1
          }(MB.focusNode, OB) && (OB.blur(), OB.focus({
            preventScroll: !0
          }));
          let BB = wB(this.view.root);
          if (BB)
            if (yB.empty) {
              if (nB.gecko) {
                let BB = (YB = oB.node, QB = oB.offset, 1 != YB.nodeType ? 0 : (QB && "false" == YB.childNodes[QB - 1].contentEditable ? 1 : 0) | (QB < YB.childNodes.length && "false" == YB.childNodes[QB].contentEditable ? 2 : 0));
                if (BB && 3 != BB) {
                  let OB = (1 == BB ? oO : jO)(oB.node, oB.offset);
                  OB && (oB = new yO(OB.node, OB.offset))
                }
              }
              BB.collapse(oB.node, oB.offset), null != yB.bidiLevel && void 0 !== BB.caretBidiLevel && (BB.caretBidiLevel = yB.bidiLevel)
            } else if (BB.extend) {
            BB.collapse(oB.node, oB.offset);
            try {
              BB.extend(jB.node, jB.offset)
            } catch (JB) {}
          } else {
            let OB = document.createRange();
            yB.anchor > yB.head && ([oB, jB] = [jB, oB]), OB.setEnd(jB.node, jB.offset), OB.setStart(oB.node, oB.offset), BB.removeAllRanges(), BB.addRange(OB)
          } else;
          var YB, QB;
          DB && this.view.root.activeElement == OB && (OB.blur(), GB && GB.focus())
        })), this.view.observer.setSelectionRange(oB, jB)), this.impreciseAnchor = oB.precise ? null : new yO(MB.anchorNode, MB.anchorOffset), this.impreciseHead = jB.precise ? null : new yO(MB.focusNode, MB.focusOffset)
      }
      suppressWidgetCursorChange(BB, OB) {
        return this.hasComposition && OB.empty && aB(BB.focusNode, BB.focusOffset, BB.anchorNode, BB.anchorOffset) && this.posFromDOM(BB.focusNode, BB.focusOffset) == OB.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: BB
        } = this, OB = BB.state.selection.main, GB = wB(BB.root), {
          anchorNode: YB,
          anchorOffset: DB
        } = BB.observer.selectionRange;
        if (!GB || !OB.empty || !OB.assoc || !GB.modify) return;
        let QB = this.lineAt(OB.head, OB.assoc);
        if (!QB) return;
        let oB = QB.posAtStart;
        if (OB.head == oB || OB.head == oB + QB.length) return;
        let jB = this.coordsAt(OB.head, -1),
          yB = this.coordsAt(OB.head, 1);
        if (!jB || !yB || jB.bottom > yB.top) return;
        let JB = this.domAtPos(OB.head + OB.assoc, OB.assoc);
        GB.collapse(JB.node, JB.offset), GB.modify("move", OB.assoc < 0 ? "forward" : "backward", "lineboundary"), BB.observer.readSelectionRange();
        let MB = BB.observer.selectionRange;
        BB.docView.posFromDOM(MB.anchorNode, MB.anchorOffset) != OB.from && GB.collapse(YB, DB)
      }
      posFromDOM(BB, OB) {
        let GB = this.tile.nearest(BB);
        if (!GB) return 2 & this.tile.dom.compareDocumentPosition(BB) ? 0 : this.view.state.doc.length;
        let YB = GB.posAtStart;
        if (!GB.isComposite()) return GB.isText() ? BB == GB.dom ? YB + OB : YB + (OB ? GB.length : 0) : YB;
        {
          let DB;
          if (BB == GB.dom) DB = GB.dom.childNodes[OB];
          else {
            let YB = 0 == CB(BB) ? 0 : 0 == OB ? -1 : 1;
            for (;;) {
              let OB = BB.parentNode;
              if (OB == GB.dom) break;
              0 == YB && OB.firstChild != OB.lastChild && (YB = BB == OB.firstChild ? -1 : 1), BB = OB
            }
            DB = YB < 0 ? BB : BB.nextSibling
          }
          if (DB == GB.dom.firstChild) return YB;
          for (; DB && !zG.get(DB);) DB = DB.nextSibling;
          if (!DB) return YB + GB.length;
          for (let BB = 0, OB = YB;; BB++) {
            let YB = GB.children[BB];
            if (YB.dom == DB) return OB;
            OB += YB.length + YB.breakAfter
          }
        }
      }
      domAtPos(BB, OB) {
        let {
          tile: GB,
          offset: YB
        } = this.tile.resolveBlock(BB, OB);
        return GB.isWidget() ? GB.domPosFor(BB, OB) : GB.domIn(YB, OB)
      }
      inlineDOMNearPos(BB, OB) {
        let GB, YB, DB = -1,
          QB = !1,
          oB = -1,
          jB = !1;
        return this.tile.blockTiles(((OB, yB) => {
          if (OB.isWidget()) {
            if (32 & OB.flags && yB >= BB) return !0;
            16 & OB.flags && (QB = !0)
          } else {
            let JB = yB + OB.length;
            if (yB <= BB && (GB = OB, DB = BB - yB, QB = JB < BB), JB >= BB && !YB && (YB = OB, oB = BB - yB, jB = yB > BB), yB > BB && YB) return !0
          }
        })), GB || YB ? (QB && YB ? GB = null : jB && GB && (YB = null), GB && OB < 0 || !YB ? GB.domIn(DB, OB) : YB.domIn(oB, OB)) : this.domAtPos(BB, OB)
      }
      coordsAt(BB, OB) {
        let {
          tile: GB,
          offset: YB
        } = this.tile.resolveBlock(BB, OB);
        return GB.isWidget() ? GB.widget instanceof cG ? null : GB.coordsInWidget(YB, OB, !0) : GB.coordsIn(YB, OB)
      }
      lineAt(BB, OB) {
        let {
          tile: GB
        } = this.tile.resolveBlock(BB, OB);
        return GB.isLine() ? GB : null
      }
      coordsForChar(BB) {
        let {
          tile: OB,
          offset: GB
        } = this.tile.resolveBlock(BB, 1);
        if (!OB.isLine()) return null;
        return function BB(OB, GB) {
          if (OB.isComposite())
            for (let YB of OB.children) {
              if (YB.length >= GB) {
                let OB = BB(YB, GB);
                if (OB) return OB
              }
              if ((GB -= YB.length) < 0) break
            } else if (OB.isText() && GB < OB.length) {
              let BB = (0, YB.X)(OB.text, GB);
              if (BB == GB) return null;
              let DB = YO(OB.dom, GB, BB).getClientRects();
              for (let OB = 0; OB < DB.length; OB++) {
                let BB = DB[OB];
                if (OB == DB.length - 1 || BB.top < BB.bottom && BB.left < BB.right) return BB
              }
            } return null
        }(OB, GB)
      }
      measureVisibleLineHeights(BB) {
        let OB = [],
          {
            from: GB,
            to: YB
          } = BB,
          DB = this.view.contentDOM.clientWidth,
          QB = DB > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          oB = -1,
          jB = this.view.textDirection == JO.LTR,
          yB = 0,
          JB = (BB, MB, PB) => {
            for (let zB = 0; zB < BB.children.length && !(MB > YB); zB++) {
              let YB = BB.children[zB],
                lB = MB + YB.length,
                pB = YB.dom.getBoundingClientRect(),
                {
                  height: qB
                } = pB;
              if (PB && !zB && (yB += pB.top - PB.top), YB instanceof ZG) lB > GB && JB(YB, MB, pB);
              else if (MB >= GB && (yB > 0 && OB.push(-yB), OB.push(qB + yB), yB = 0, QB)) {
                let BB = YB.dom.lastChild,
                  OB = BB ? hB(BB) : [];
                if (OB.length) {
                  let BB = OB[OB.length - 1],
                    GB = jB ? BB.right - pB.left : pB.right - BB.left;
                  GB > oB && (oB = GB, this.minWidth = DB, this.minWidthFrom = MB, this.minWidthTo = lB)
                }
              }
              PB && zB == BB.children.length - 1 && (yB += PB.bottom - pB.bottom), MB = lB + YB.breakAfter
            }
          };
        return JB(this.tile, 0, null), OB
      }
      textDirectionAt(BB) {
        let {
          tile: OB
        } = this.tile.resolveBlock(BB, 1);
        return "rtl" == getComputedStyle(OB.dom).direction ? JO.RTL : JO.LTR
      }
      measureTextSize() {
        let BB = this.tile.blockTiles((BB => {
          if (BB.isLine() && BB.children.length && BB.length <= 20) {
            let OB, GB = 0;
            for (let YB of BB.children) {
              if (!YB.isText() || /[^ -~]/.test(YB.text)) return;
              let BB = hB(YB.dom);
              if (1 != BB.length) return;
              GB += BB[0].width, OB = BB[0].height
            }
            if (GB) return {
              lineHeight: BB.dom.getBoundingClientRect().height,
              charWidth: GB / BB.length,
              textHeight: OB
            }
          }
        }));
        if (BB) return BB;
        let OB, GB, YB, DB = document.createElement("div");
        return DB.className = "cm-line", DB.style.width = "99999px", DB.style.position = "absolute", DB.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(DB);
          let BB = hB(DB.firstChild)[0];
          OB = DB.getBoundingClientRect().height, GB = BB && BB.width ? BB.width / 27 : 7, YB = BB && BB.height ? BB.height : OB, DB.remove()
        })), {
          lineHeight: OB,
          charWidth: GB,
          textHeight: YB
        }
      }
      computeBlockGapDeco() {
        let BB = [],
          OB = this.view.viewState;
        for (let GB = 0, YB = 0;; YB++) {
          let DB = YB == OB.viewports.length ? null : OB.viewports[YB],
            QB = DB ? DB.from - 1 : this.view.state.doc.length;
          if (QB > GB) {
            let YB = (OB.lineBlockAt(QB).bottom - OB.lineBlockAt(GB).top) / this.view.scaleY;
            BB.push(IB.replace({
              widget: new cG(YB),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(GB, QB))
          }
          if (!DB) break;
          GB = DB.to + 1
        }
        return IB.set(BB)
      }
      updateDeco() {
        let BB = 1,
          OB = this.view.state.facet(BG).map((OB => (this.dynamicDecorationMap[BB++] = "function" == typeof OB) ? OB(this.view) : OB)),
          GB = !1,
          DB = this.view.state.facet(GG).map(((BB, OB) => {
            let YB = "function" == typeof BB;
            return YB && (GB = !0), YB ? BB(this.view) : BB
          }));
        for (DB.length && (this.dynamicDecorationMap[BB++] = GB, OB.push(YB.z.join(DB))), this.TD = [this.editContextFormatting, ...OB, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; BB < this.TD.length;) this.dynamicDecorationMap[BB++] = !1;
        this.blockWrappers = this.view.state.facet(OG).map((BB => "function" == typeof BB ? BB(this.view) : BB))
      }
      scrollIntoView(BB) {
        var OB;
        if (BB.isSnapshot) {
          let OB = this.view.viewState.lineBlockAt(BB.range.head);
          return this.view.scrollDOM.scrollTop = OB.top - BB.yMargin, void(this.view.scrollDOM.scrollLeft = BB.xMargin)
        }
        for (let MB of this.view.state.facet(cO)) try {
          if (MB(this.view, BB.range, BB)) return !0
        } catch (JB) {
          TO(this.view.state, JB, "scroll handler")
        }
        let GB, {
            range: YB
          } = BB,
          DB = this.coordsAt(YB.head, null !== (OB = YB.assoc) && void 0 !== OB ? OB : YB.empty ? 0 : YB.head > YB.anchor ? -1 : 1);
        if (!DB) return;
        !YB.empty && (GB = this.coordsAt(YB.anchor, YB.anchor > YB.head ? -1 : 1)) && (DB = {
          left: Math.min(DB.left, GB.left),
          top: Math.min(DB.top, GB.top),
          right: Math.max(DB.right, GB.right),
          bottom: Math.max(DB.bottom, GB.bottom)
        });
        let QB = jG(this.view),
          oB = {
            left: DB.left - QB.left,
            top: DB.top - QB.top,
            right: DB.right + QB.right,
            bottom: DB.bottom + QB.bottom
          },
          {
            offsetWidth: jB,
            offsetHeight: yB
          } = this.view.scrollDOM;
        if (function(BB, OB, GB, YB, DB, QB, oB, jB) {
            let yB = BB.ownerDocument,
              JB = yB.defaultView || window;
            for (let MB = BB, PB = !1; MB && !PB;)
              if (1 == MB.nodeType) {
                let BB, zB = MB == yB.body,
                  lB = 1,
                  pB = 1;
                if (zB) BB = vB(JB);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(MB).position) && (PB = !0), MB.scrollHeight <= MB.clientHeight && MB.scrollWidth <= MB.clientWidth) {
                    MB = MB.assignedSlot || MB.parentNode;
                    continue
                  }
                  let OB = MB.getBoundingClientRect();
                  ({
                    scaleX: lB,
                    scaleY: pB
                  } = sB(MB, OB)), BB = {
                    left: OB.left,
                    right: OB.left + MB.clientWidth * lB,
                    top: OB.top,
                    bottom: OB.top + MB.clientHeight * pB
                  }
                }
                let qB = 0,
                  ZB = 0;
                if ("nearest" == DB) OB.top < BB.top + oB ? (ZB = OB.top - (BB.top + oB), GB > 0 && OB.bottom > BB.bottom + ZB && (ZB = OB.bottom - BB.bottom + oB)) : OB.bottom > BB.bottom - oB && (ZB = OB.bottom - BB.bottom + oB, GB < 0 && OB.top - ZB < BB.top && (ZB = OB.top - (BB.top + oB)));
                else {
                  let YB = OB.bottom - OB.top,
                    QB = BB.bottom - BB.top;
                  ZB = ("center" == DB && YB <= QB ? OB.top + YB / 2 - QB / 2 : "start" == DB || "center" == DB && GB < 0 ? OB.top - oB : OB.bottom - QB + oB) - BB.top
                }
                if ("nearest" == YB ? OB.left < BB.left + QB ? (qB = OB.left - (BB.left + QB), GB > 0 && OB.right > BB.right + qB && (qB = OB.right - BB.right + QB)) : OB.right > BB.right - QB && (qB = OB.right - BB.right + QB, GB < 0 && OB.left < BB.left + qB && (qB = OB.left - (BB.left + QB))) : qB = ("center" == YB ? OB.left + (OB.right - OB.left) / 2 - (BB.right - BB.left) / 2 : "start" == YB == jB ? OB.left - QB : OB.right - (BB.right - BB.left) + QB) - BB.left, qB || ZB)
                  if (zB) JB.scrollBy(qB, ZB);
                  else {
                    let BB = 0,
                      GB = 0;
                    if (ZB) {
                      let BB = MB.scrollTop;
                      MB.scrollTop += ZB / pB, GB = (MB.scrollTop - BB) * pB
                    }
                    if (qB) {
                      let OB = MB.scrollLeft;
                      MB.scrollLeft += qB / lB, BB = (MB.scrollLeft - OB) * lB
                    }
                    OB = {
                      left: OB.left - BB,
                      top: OB.top - GB,
                      right: OB.right - BB,
                      bottom: OB.bottom - GB
                    }, BB && Math.abs(BB - qB) < 1 && (YB = "nearest"), GB && Math.abs(GB - ZB) < 1 && (DB = "nearest")
                  } if (zB) break;
                (OB.top < BB.top || OB.bottom > BB.bottom || OB.left < BB.left || OB.right > BB.right) && (OB = {
                  left: Math.max(OB.left, BB.left),
                  right: Math.min(OB.right, BB.right),
                  top: Math.max(OB.top, BB.top),
                  bottom: Math.min(OB.bottom, BB.bottom)
                }), MB = MB.assignedSlot || MB.parentNode
              } else {
                if (11 != MB.nodeType) break;
                MB = MB.host
              }
          }(this.view.scrollDOM, oB, YB.head < YB.anchor ? -1 : 1, BB.x, BB.y, Math.max(Math.min(BB.xMargin, jB), -jB), Math.max(Math.min(BB.yMargin, yB), -yB), this.view.textDirection == JO.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (DB.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || DB.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let BB = this.view.docView.lineAt(YB.head, 1);
          BB && BB.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(BB) {
        let OB = BB => BB.isWidget() || BB.children.some(OB);
        return OB(this.tile.resolveBlock(BB, 1).tile)
      }
      destroy() {
        rG(this.tile)
      }
    }

    function rG(BB, OB) {
      let GB = null === OB || void 0 === OB ? void 0 : OB.get(BB);
      if (1 != GB) {
        null == GB && BB.destroy();
        for (let GB of BB.children) rG(GB, OB)
      }
    }

    function XG(BB, OB) {
      let GB = BB.observer.selectionRange;
      if (!GB.focusNode) return null;
      let YB = oO(GB.focusNode, GB.focusOffset),
        DB = jO(GB.focusNode, GB.focusOffset),
        QB = YB || DB;
      if (DB && YB && DB.node != YB.node) {
        let OB = zG.get(DB.node);
        if (!OB || OB.isText() && OB.text != DB.node.nodeValue) QB = DB;
        else if (BB.docView.lastCompositionAfterCursor) {
          let BB = zG.get(YB.node);
          !BB || BB.isText() && BB.text != YB.node.nodeValue || (QB = DB)
        }
      }
      if (BB.docView.lastCompositionAfterCursor = QB != YB, !QB) return null;
      let oB = OB - QB.offset;
      return {
        from: oB,
        to: oB + QB.node.nodeValue.length,
        node: QB.node
      }
    }
    let wG = class {
      constructor() {
        this.changes = []
      }
      compareRange(BB, OB) {
        rB(BB, OB, this.changes)
      }
      comparePoint(BB, OB) {
        rB(BB, OB, this.changes)
      }
      boundChange(BB) {
        rB(BB, BB, this.changes)
      }
    };
    class EG {
      constructor() {
        this.changes = []
      }
      compareRange(BB, OB) {
        rB(BB, OB, this.changes)
      }
      comparePoint() {}
      boundChange(BB) {
        rB(BB, BB, this.changes)
      }
    }
    class cG extends uB {
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

    function hG(BB, OB, GB) {
      let YB = BB.lineBlockAt(OB);
      if (Array.isArray(YB.type)) {
        let BB;
        for (let DB of YB.type) {
          if (DB.from > OB) break;
          if (!(DB.to < OB)) {
            if (DB.from < OB && DB.to > OB) return DB;
            BB && (DB.type != mB.Text || BB.type == DB.type && !(GB < 0 ? DB.from < OB : DB.to > OB)) || (BB = DB)
          }
        }
        return BB || YB
      }
      return YB
    }

    function aG(BB, OB, GB, YB) {
      let DB = BB.state.doc.lineAt(OB.head),
        QB = BB.bidiSpans(DB),
        oB = BB.textDirectionAt(DB.from);
      for (let jB = OB, yB = null;;) {
        let OB = dO(DB, QB, oB, jB, GB),
          JB = kO;
        if (!OB) {
          if (DB.number == (GB ? BB.state.doc.lines : 1)) return jB;
          JB = "\n", DB = BB.state.doc.line(DB.number + (GB ? 1 : -1)), QB = BB.bidiSpans(DB), OB = BB.visualLineSide(DB, !GB)
        }
        if (yB) {
          if (!yB(JB)) return jB
        } else {
          if (!YB) return OB;
          yB = YB(JB)
        }
        jB = OB
      }
    }

    function eG(BB, OB, GB) {
      for (;;) {
        let YB = 0;
        for (let DB of BB) DB.between(OB - 1, OB + 1, ((BB, DB, QB) => {
          if (OB > BB && OB < DB) {
            let QB = YB || GB || (OB - BB < DB - OB ? -1 : 1);
            OB = QB < 0 ? BB : DB, YB = QB
          }
        }));
        if (!YB) return OB
      }
    }

    function TG(BB, OB) {
      let GB = null;
      for (let DB = 0; DB < OB.JZ.length; DB++) {
        let QB = OB.JZ[DB],
          oB = null;
        if (QB.empty) {
          let OB = eG(BB, QB.from, 0);
          OB != QB.from && (oB = YB.j.cursor(OB, -1))
        } else {
          let OB = eG(BB, QB.from, -1),
            GB = eG(BB, QB.to, 1);
          OB == QB.from && GB == QB.to || (oB = YB.j.range(QB.from == QB.anchor ? OB : GB, QB.from == QB.head ? OB : GB))
        }
        oB && (GB || (GB = OB.JZ.slice()), GB[DB] = oB)
      }
      return GB ? YB.j.create(GB, OB.mainIndex) : OB
    }

    function bG(BB, OB, GB) {
      let DB = eG(BB.state.facet(YG).map((OB => OB(BB))), GB.from, OB.head > GB.from ? -1 : 1);
      return DB == GB.from ? GB : YB.j.cursor(DB, DB < GB.from ? 1 : -1)
    }
    class CG {
      constructor(BB, OB) {
        this.pos = BB, this.assoc = OB
      }
    }

    function HG(BB, OB, GB, DB) {
      let QB, oB = BB.contentDOM.getBoundingClientRect(),
        jB = oB.top + BB.viewState.paddingTop,
        {
          x: yB,
          y: JB
        } = OB,
        MB = JB - jB;
      for (;;) {
        if (MB < 0) return new CG(0, 1);
        if (MB > BB.viewState.docHeight) return new CG(BB.state.doc.length, -1);
        if (QB = BB.elementAtHeight(MB), null == DB) break;
        if (QB.type == mB.Text) {
          if (DB < 0 ? QB.to < BB.viewport.from : QB.from > BB.viewport.to) break;
          let OB = BB.docView.coordsAt(DB < 0 ? QB.from : QB.to, DB > 0 ? -1 : 1);
          if (OB && (DB < 0 ? OB.top <= MB + jB : OB.bottom >= MB + jB)) break
        }
        let OB = BB.viewState.heightOracle.textHeight / 2;
        MB = DB > 0 ? QB.bottom + OB : QB.top - OB
      }
      if (BB.viewport.from >= QB.to || BB.viewport.to <= QB.from) {
        if (GB) return null;
        if (QB.type == mB.Text) {
          let OB = function(BB, OB, GB, DB, QB) {
            let oB = Math.round((DB - OB.left) * BB.defaultCharacterWidth);
            if (BB.lineWrapping && GB.height > 1.5 * BB.defaultLineHeight) {
              let OB = BB.viewState.heightOracle.textHeight;
              oB += Math.floor((QB - GB.top - .5 * (BB.defaultLineHeight - OB)) / OB) * BB.viewState.heightOracle.lineLength
            }
            let jB = BB.state.sliceDoc(GB.from, GB.to);
            return GB.from + (0, YB._)(jB, oB, BB.state.tabSize)
          }(BB, oB, QB, yB, JB);
          return new CG(OB, OB == QB.from ? 1 : -1)
        }
      }
      if (QB.type != mB.Text) return MB < (QB.top + QB.bottom) / 2 ? new CG(QB.from, 1) : new CG(QB.to, -1);
      let PB = BB.docView.lineAt(QB.from, 2);
      return PB && PB.length == QB.length || (PB = BB.docView.lineAt(QB.from, -2)), new vG(BB, yB, JB, BB.textDirectionAt(QB.from)).scanTile(PB, QB.from)
    }
    class vG {
      constructor(BB, OB, GB, YB) {
        this.view = BB, this.x = OB, this.y = GB, this.baseDir = YB, this.line = null, this.spans = null
      }
      bidiSpansAt(BB) {
        return (!this.line || this.line.from > BB || this.line.to < BB) && (this.line = this.view.state.doc.lineAt(BB), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(BB, OB) {
        let {
          line: GB,
          spans: YB
        } = this.bidiSpansAt(BB);
        return YB[WO.find(YB, BB - GB.from, -1, OB)].level == this.baseDir
      }
      dirAt(BB, OB) {
        let {
          line: GB,
          spans: YB
        } = this.bidiSpansAt(BB);
        return YB[WO.find(YB, BB - GB.from, -1, OB)].dir
      }
      bidiIn(BB, OB) {
        let {
          spans: GB,
          line: YB
        } = this.bidiSpansAt(BB);
        return GB.length > 1 || GB.length && (GB[0].level != this.baseDir || GB[0].to + YB.from < OB)
      }
      scan(BB, OB) {
        let GB, YB, DB, QB = 0,
          oB = BB.length - 1,
          jB = new Set,
          yB = this.bidiIn(BB[0], BB[oB]),
          JB = -1,
          MB = 1e9;
        BB: for (; QB < oB;) {
          let PB = oB - QB,
            zB = QB + oB >> 1;
          OB: if (jB.has(zB)) {
            let BB = QB + Math.floor(Math.random() * PB);
            for (let OB = 0; OB < PB; OB++) {
              if (!jB.has(BB)) {
                zB = BB;
                break OB
              }
              BB++, BB == oB && (BB = QB)
            }
            break BB
          } jB.add(zB);
          let lB = OB(zB);
          if (lB)
            for (let OB = 0; OB < lB.length; OB++) {
              let jB = lB[OB],
                PB = 0;
              if (!(0 == jB.width && lB.length > 1)) {
                if (jB.bottom < this.y)(!GB || GB.bottom < jB.bottom) && (GB = jB), PB = 1;
                else if (jB.top > this.y)(!YB || YB.top > jB.top) && (YB = jB), PB = -1;
                else {
                  let BB = jB.left > this.x ? this.x - jB.left : jB.right < this.x ? this.x - jB.right : 0,
                    OB = Math.abs(BB);
                  OB < MB && (JB = zB, MB = OB, DB = jB), BB && (PB = BB < 0 == (this.baseDir == JO.LTR) ? -1 : 1)
                } - 1 != PB || yB && !this.baseDirAt(BB[zB], 1) ? 1 != PB || yB && !this.baseDirAt(BB[zB + 1], -1) || (QB = zB + 1) : oB = zB
              }
            }
        }
        if (!DB) {
          let DB = GB && (!YB || this.y - GB.bottom < YB.top - this.y) ? GB : YB;
          return this.y = (DB.top + DB.bottom) / 2, this.scan(BB, OB)
        }
        if (MB) {
          if (GB && GB.bottom > DB.top) return this.y = GB.bottom - 1, this.scan(BB, OB);
          if (YB && YB.top < DB.bottom) return this.y = YB.top + 1, this.scan(BB, OB)
        }
        let PB = (yB ? this.dirAt(BB[JB], 1) : this.baseDir) == JO.LTR;
        return {
          i: JB,
          after: this.x > (DB.left + DB.right) / 2 == PB
        }
      }
      scanText(BB, OB) {
        let GB = [];
        for (let QB = 0; QB < BB.length; QB = (0, YB.X)(BB.text, QB)) GB.push(OB + QB);
        GB.push(OB + BB.length);
        let DB = this.scan(GB, (YB => {
          let DB = GB[YB] - OB,
            QB = GB[YB + 1] - OB;
          return YO(BB.dom, DB, QB).getClientRects()
        }));
        return DB.after ? new CG(GB[DB.i + 1], -1) : new CG(GB[DB.i], 1)
      }
      scanTile(BB, OB) {
        if (!BB.length) return new CG(OB, 1);
        if (1 == BB.children.length) {
          let GB = BB.children[0];
          if (GB.isText()) return this.scanText(GB, OB);
          if (GB.isComposite()) return this.scanTile(GB, OB)
        }
        let GB = [OB];
        for (let oB = 0, jB = OB; oB < BB.children.length; oB++) GB.push(jB += BB.children[oB].length);
        let YB = this.scan(GB, (OB => {
            let GB = BB.children[OB];
            return 48 & GB.flags ? null : (1 == GB.dom.nodeType ? GB.dom : YO(GB.dom, 0, GB.length)).getClientRects()
          })),
          DB = BB.children[YB.i],
          QB = GB[YB.i];
        return DB.isText() ? this.scanText(DB, QB) : DB.isComposite() ? this.scanTile(DB, QB) : YB.after ? new CG(GB[YB.i + 1], -1) : new CG(QB, 1)
      }
    }
    const sG = "\uffff";
    class xG {
      constructor(BB, OB) {
        this.points = BB, this.view = OB, this.text = "", this.lineSeparator = OB.state.facet(YB.l.lineSeparator)
      }
      append(BB) {
        this.text += BB
      }
      lineBreak() {
        this.text += sG
      }
      readRange(BB, OB) {
        if (!BB) return this;
        let GB = BB.parentNode;
        for (let YB = BB;;) {
          this.findPointBefore(GB, YB);
          let BB = this.text.length;
          this.readNode(YB);
          let DB = zG.get(YB),
            QB = YB.nextSibling;
          if (QB == OB) {
            (null === DB || void 0 === DB ? void 0 : DB.breakAfter) && !QB && GB != this.view.contentDOM && this.lineBreak();
            break
          }
          let oB = zG.get(QB);
          (DB && oB ? DB.breakAfter : (DB ? DB.breakAfter : TB(YB)) || TB(QB) && ("BR" != YB.nodeName || (null === DB || void 0 === DB ? void 0 : DB.isWidget())) && this.text.length > BB) && !BY(QB, OB) && this.lineBreak(), YB = QB
        }
        return this.findPointBefore(GB, OB), this
      }
      readTextNode(BB) {
        let OB = BB.nodeValue;
        for (let GB of this.points) GB.node == BB && (GB.pos = this.text.length + Math.min(GB.offset, OB.length));
        for (let GB = 0, YB = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let DB, QB = -1,
            oB = 1;
          if (this.lineSeparator ? (QB = OB.indexOf(this.lineSeparator, GB), oB = this.lineSeparator.length) : (DB = YB.exec(OB)) && (QB = DB.index, oB = DB[0].length), this.append(OB.slice(GB, QB < 0 ? OB.length : QB)), QB < 0) break;
          if (this.lineBreak(), oB > 1)
            for (let OB of this.points) OB.node == BB && OB.pos > this.text.length && (OB.pos -= oB - 1);
          GB = QB + oB
        }
      }
      readNode(BB) {
        let OB = zG.get(BB),
          GB = OB && OB.overrideDOMText;
        if (null != GB) {
          this.findPointInside(BB, GB.length);
          for (let BB = GB.iter(); !BB.next().done;) BB.lineBreak ? this.lineBreak() : this.append(BB.value)
        } else 3 == BB.nodeType ? this.readTextNode(BB) : "BR" == BB.nodeName ? BB.nextSibling && this.lineBreak() : 1 == BB.nodeType && this.readRange(BB.firstChild, null)
      }
      findPointBefore(BB, OB) {
        for (let GB of this.points) GB.node == BB && BB.childNodes[GB.offset] == OB && (GB.pos = this.text.length)
      }
      findPointInside(BB, OB) {
        for (let GB of this.points)(3 == BB.nodeType ? GB.node == BB : BB.contains(GB.node)) && (GB.pos = this.text.length + (tG(BB, GB.node, GB.offset) ? OB : 0))
      }
    }

    function tG(BB, OB, GB) {
      for (;;) {
        if (!OB || GB < CB(OB)) return !1;
        if (OB == BB) return !0;
        GB = eB(OB) + 1, OB = OB.parentNode
      }
    }

    function BY(BB, OB) {
      let GB;
      for (; BB != OB && BB; BB = BB.nextSibling) {
        let OB = zG.get(BB);
        if (!(null === OB || void 0 === OB ? void 0 : OB.isWidget())) return !1;
        OB && (GB || (GB = [])).push(OB)
      }
      if (GB)
        for (let YB of GB) {
          let BB = YB.overrideDOMText;
          if (null === BB || void 0 === BB ? void 0 : BB.length) return !1
        }
      return !0
    }
    class OY {
      constructor(BB, OB) {
        this.node = BB, this.offset = OB, this.pos = -1
      }
    }
    class GY {
      constructor(BB, OB, GB, DB) {
        this.typeOver = DB, this.bounds = null, this.text = "", this.domChanged = OB > -1;
        let {
          impreciseHead: QB,
          impreciseAnchor: oB
        } = BB.docView, jB = BB.state.selection;
        if (BB.state.readOnly && OB > -1) this.newSel = null;
        else if (OB > -1 && (this.bounds = YY(BB.docView.tile, OB, GB, 0))) {
          let OB = QB || oB ? [] : function(BB) {
              let OB = [];
              if (BB.root.activeElement != BB.contentDOM) return OB;
              let {
                anchorNode: GB,
                anchorOffset: YB,
                focusNode: DB,
                focusOffset: QB
              } = BB.observer.selectionRange;
              GB && (OB.push(new OY(GB, YB)), DB == GB && QB == YB || OB.push(new OY(DB, QB)));
              return OB
            }(BB),
            GB = new xG(OB, BB);
          GB.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = GB.text, this.newSel = function(BB, OB) {
            if (0 == BB.length) return null;
            let GB = BB[0].pos,
              DB = 2 == BB.length ? BB[1].pos : GB;
            return GB > -1 && DB > -1 ? YB.j.single(GB + OB, DB + OB) : null
          }(OB, this.bounds.from)
        } else {
          let OB = BB.observer.selectionRange,
            GB = QB && QB.node == OB.focusNode && QB.offset == OB.focusOffset || !EB(BB.contentDOM, OB.focusNode) ? jB.main.head : BB.docView.posFromDOM(OB.focusNode, OB.focusOffset),
            DB = oB && oB.node == OB.anchorNode && oB.offset == OB.anchorOffset || !EB(BB.contentDOM, OB.anchorNode) ? jB.main.anchor : BB.docView.posFromDOM(OB.anchorNode, OB.anchorOffset),
            yB = BB.viewport;
          if ((nB.ios || nB.chrome) && jB.main.empty && GB != DB && (yB.from > 0 || yB.to < BB.state.doc.length)) {
            let OB = Math.min(GB, DB),
              YB = Math.max(GB, DB),
              QB = yB.from - OB,
              oB = yB.to - YB;
            0 != QB && 1 != QB && 0 != OB || 0 != oB && -1 != oB && YB != BB.state.doc.length || (GB = 0, DB = BB.state.doc.length)
          }
          if (BB.inputState.composing > -1 && jB.JZ.length > 1) this.newSel = jB.replaceRange(YB.j.range(DB, GB));
          else if (BB.lineWrapping && DB == GB && (!jB.main.empty || jB.main.head != GB) && BB.inputState.lastTouchTime > Date.now() - 100) {
            let OB = BB.coordsAtPos(GB, -1),
              DB = 0;
            OB && (DB = BB.inputState.lastTouchY <= OB.bottom ? -1 : 1), this.newSel = YB.j.create([YB.j.cursor(GB, DB)])
          } else this.newSel = YB.j.single(DB, GB)
        }
      }
    }

    function YY(BB, OB, GB, YB) {
      if (BB.isComposite()) {
        let DB = -1,
          QB = -1,
          oB = -1,
          jB = -1;
        for (let yB = 0, JB = YB, MB = YB; yB < BB.children.length; yB++) {
          let YB = BB.children[yB],
            PB = JB + YB.length;
          if (JB < OB && PB > GB) return YY(YB, OB, GB, JB);
          if (PB >= OB && -1 == DB && (DB = yB, QB = JB), JB > GB && YB.dom.parentNode == BB.dom) {
            oB = yB, jB = MB;
            break
          }
          MB = PB, JB = PB + YB.breakAfter
        }
        return {
          from: QB,
          to: jB < 0 ? YB + BB.length : jB,
          startDOM: (DB ? BB.children[DB - 1].dom.nextSibling : null) || BB.dom.firstChild,
          endDOM: oB < BB.children.length && oB >= 0 ? BB.children[oB].dom : null
        }
      }
      return BB.isText() ? {
        from: YB,
        to: YB + BB.length,
        startDOM: BB.dom,
        endDOM: BB.dom.nextSibling
      } : null
    }

    function DY(BB, OB) {
      let GB, {
          newSel: DB
        } = OB,
        {
          state: QB
        } = BB,
        oB = QB.selection.main,
        jB = BB.inputState.lastKeyTime > Date.now() - 100 ? BB.inputState.lastKeyCode : -1;
      if (OB.bounds) {
        let {
          from: BB,
          to: DB
        } = OB.bounds, yB = oB.from, JB = null;
        (8 === jB || nB.android && OB.text.length < DB - BB) && (yB = oB.to, JB = "end");
        let MB, PB, zB = QB.doc.sliceString(BB, DB, sG);
        !oB.empty && oB.from >= BB && oB.to <= DB && (OB.typeOver || zB != OB.text) && zB.slice(0, oB.from - BB) == OB.text.slice(0, oB.from - BB) && zB.slice(oB.to - BB) == OB.text.slice(MB = OB.text.length - (zB.length - (oB.to - BB))) ? GB = {
          from: oB.from,
          to: oB.to,
          insert: YB.K.of(OB.text.slice(oB.from - BB, MB).split(sG))
        } : (PB = oY(zB, OB.text, yB - BB, JB)) && (nB.chrome && 13 == jB && PB.toB == PB.from + 2 && OB.text.slice(PB.from, PB.toB) == sG + sG && PB.toB--, GB = {
          from: BB + PB.from,
          to: BB + PB.toA,
          insert: YB.K.of(OB.text.slice(PB.from, PB.toB).split(sG))
        })
      } else DB && (!BB.hasFocus && QB.facet(bO) || jY(DB, oB)) && (DB = null);
      if (!GB && !DB) return !1;
      if ((nB.mac || nB.android) && GB && GB.from == GB.to && GB.from == oB.head - 1 && /^\. ?$/.test(GB.insert.toString()) && "off" == BB.contentDOM.getAttribute("autocorrect") ? (DB && 2 == GB.insert.length && (DB = YB.j.single(DB.main.anchor - 1, DB.main.head - 1)), GB = {
          from: GB.from,
          to: GB.to,
          insert: YB.K.of([GB.insert.toString().replace(".", " ")])
        }) : QB.doc.lineAt(oB.from).to < oB.to && BB.docView.lineHasWidget(oB.to) && BB.inputState.insertingTextAt > Date.now() - 50 ? GB = {
          from: oB.from,
          to: oB.to,
          insert: QB.toText(BB.inputState.insertingText)
        } : nB.chrome && GB && GB.from == GB.to && GB.from == oB.head && "\n " == GB.insert.toString() && BB.lineWrapping && (DB && (DB = YB.j.single(DB.main.anchor - 1, DB.main.head - 1)), GB = {
          from: oB.from,
          to: oB.to,
          insert: YB.K.of([" "])
        }), GB) return QY(BB, GB, DB, jB);
      if (DB && !jY(DB, oB)) {
        let OB = !1,
          GB = "select";
        return BB.inputState.lastSelectionTime > Date.now() - 50 && ("select" == BB.inputState.lastSelectionOrigin && (OB = !0), GB = BB.inputState.lastSelectionOrigin, "select.pointer" == GB && (DB = TG(QB.facet(YG).map((OB => OB(BB))), DB))), BB.dispatch({
          selection: DB,
          scrollIntoView: OB,
          userEvent: GB
        }), !0
      }
      return !1
    }

    function QY(BB, OB, GB) {
      let DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (nB.ios && BB.inputState.flushIOSKey(OB)) return !0;
      let QB = BB.state.selection.main;
      if (nB.android && (OB.to == QB.to && (OB.from == QB.from || OB.from == QB.from - 1 && " " == BB.state.sliceDoc(OB.from, QB.from)) && 1 == OB.insert.length && 2 == OB.insert.lines && DO(BB.contentDOM, "Enter", 13) || (OB.from == QB.from - 1 && OB.to == QB.to && 0 == OB.insert.length || 8 == DB && OB.insert.length < OB.to - OB.from && OB.to > QB.head) && DO(BB.contentDOM, "Backspace", 8) || OB.from == QB.from && OB.to == QB.to + 1 && 0 == OB.insert.length && DO(BB.contentDOM, "Delete", 46))) return !0;
      let oB, jB = OB.insert.toString();
      BB.inputState.composing >= 0 && BB.inputState.composing++;
      let yB = () => oB || (oB = function(BB, OB, GB) {
        let DB, QB = BB.state,
          oB = QB.selection.main,
          jB = -1;
        if (OB.from == OB.to && OB.from < oB.from || OB.from > oB.to) {
          let GB = OB.from < oB.from ? -1 : 1,
            YB = GB < 0 ? oB.from : oB.to,
            DB = eG(QB.facet(YG).map((OB => OB(BB))), YB, GB);
          OB.from == DB && (jB = DB)
        }
        if (jB > -1) DB = {
          changes: OB,
          selection: YB.j.cursor(OB.from + OB.insert.length, -1)
        };
        else if (OB.from >= oB.from && OB.to <= oB.to && OB.to - OB.from >= (oB.to - oB.from) / 3 && (!GB || GB.main.empty && GB.main.from == OB.from + OB.insert.length) && BB.inputState.composing < 0) {
          let GB = oB.from < OB.from ? QB.sliceDoc(oB.from, OB.from) : "",
            YB = oB.to > OB.to ? QB.sliceDoc(OB.to, oB.to) : "";
          DB = QB.replaceSelection(BB.state.toText(GB + OB.insert.sliceString(0, void 0, BB.state.lineBreak) + YB))
        } else {
          let jB = QB.changes(OB),
            yB = GB && GB.main.to <= jB.newLength ? GB.main : void 0;
          if (QB.selection.JZ.length > 1 && (BB.inputState.composing >= 0 || BB.inputState.compositionPendingChange) && OB.to <= oB.to + 10 && OB.to >= oB.to - 10) {
            let JB, MB = BB.state.sliceDoc(OB.from, OB.to),
              PB = GB && XG(BB, GB.main.head);
            if (PB) {
              let BB = OB.insert.length - (OB.to - OB.from);
              JB = {
                from: PB.from,
                to: PB.to - BB
              }
            } else JB = BB.state.doc.lineAt(oB.head);
            let zB = oB.to - OB.to;
            DB = QB.changeByRange((GB => {
              if (GB.from == oB.from && GB.to == oB.to) return {
                changes: jB,
                range: yB || GB.map(jB)
              };
              let DB = GB.to - zB,
                PB = DB - MB.length;
              if (BB.state.sliceDoc(PB, DB) != MB || DB >= JB.from && PB <= JB.to) return {
                range: GB
              };
              let lB = QB.changes({
                  from: PB,
                  to: DB,
                  insert: OB.insert
                }),
                pB = GB.to - oB.to;
              return {
                changes: lB,
                range: yB ? YB.j.range(Math.max(0, yB.anchor + pB), Math.max(0, yB.head + pB)) : GB.map(lB)
              }
            }))
          } else DB = {
            changes: jB,
            selection: yB && QB.selection.replaceRange(yB)
          }
        }
        let yB = "input.type";
        (BB.composing || BB.inputState.compositionPendingChange && BB.inputState.compositionEndedAt > Date.now() - 50) && (BB.inputState.compositionPendingChange = !1, yB += ".compose", BB.inputState.compositionFirstChange && (yB += ".start", BB.inputState.compositionFirstChange = !1));
        return QB.update(DB, {
          userEvent: yB,
          scrollIntoView: !0
        })
      }(BB, OB, GB));
      return BB.state.facet(LO).some((GB => GB(BB, OB.from, OB.to, jB, yB))) || BB.dispatch(yB()), !0
    }

    function oY(BB, OB, GB, YB) {
      let DB = Math.min(BB.length, OB.length),
        QB = 0;
      for (; QB < DB && BB.charCodeAt(QB) == OB.charCodeAt(QB);) QB++;
      if (QB == DB && BB.length == OB.length) return null;
      let oB = BB.length,
        jB = OB.length;
      for (; oB > 0 && jB > 0 && BB.charCodeAt(oB - 1) == OB.charCodeAt(jB - 1);) oB--, jB--;
      if ("end" == YB) {
        GB -= oB + Math.max(0, QB - Math.min(oB, jB)) - QB
      }
      if (oB < QB && BB.length < OB.length) {
        QB -= GB <= QB && GB >= oB ? QB - GB : 0, jB = QB + (jB - oB), oB = QB
      } else if (jB < QB) {
        QB -= GB <= QB && GB >= jB ? QB - GB : 0, oB = QB + (oB - jB), jB = QB
      }
      return {
        from: QB,
        toA: oB,
        toB: jB
      }
    }

    function jY(BB, OB) {
      return OB.head == BB.main.head && OB.anchor == BB.main.anchor
    }
    class yY {
      setSelectionOrigin(BB) {
        this.lastSelectionOrigin = BB, this.lastSelectionTime = Date.now()
      }
      constructor(BB) {
        this.view = BB, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = BB.hasFocus, nB.safari && BB.contentDOM.addEventListener("input", (() => null)), nB.gecko && function(BB) {
          FY.has(BB) || (FY.add(BB), BB.addEventListener("copy", (() => {})), BB.addEventListener("cut", (() => {})))
        }(BB.contentDOM.ownerDocument)
      }
      handleEvent(BB) {
        (function(BB, OB) {
          if (!OB.bubbles) return !0;
          if (OB.defaultPrevented) return !1;
          for (let GB, YB = OB.target; YB != BB.contentDOM; YB = YB.parentNode)
            if (!YB || 11 == YB.nodeType || (GB = zG.get(YB)) && GB.isWidget() && !GB.isHidden && GB.widget.ignoreEvent(OB)) return !1;
          return !0
        })(this.view, BB) && !this.ignoreDuringComposition(BB) && ("keydown" == BB.type && this.keydown(BB) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(BB.type, BB))) : this.runHandlers(BB.type, BB)))
      }
      runHandlers(BB, OB) {
        let GB = this.handlers[BB];
        if (GB) {
          for (let BB of GB.observers) BB(this.view, OB);
          for (let BB of GB.handlers) {
            if (OB.defaultPrevented) break;
            if (BB(this.view, OB)) {
              OB.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(BB) {
        let OB = MY(BB),
          GB = this.handlers,
          YB = this.view.contentDOM;
        for (let DB in OB)
          if ("scroll" != DB) {
            let BB = !OB[DB].handlers.length,
              QB = GB[DB];
            QB && BB != !QB.handlers.length && (YB.removeEventListener(DB, this.handleEvent), QB = null), QB || YB.addEventListener(DB, this.handleEvent, {
              passive: BB
            })
          } for (let DB in GB) "scroll" == DB || OB[DB] || YB.removeEventListener(DB, this.handleEvent);
        this.handlers = OB
      }
      keydown(BB) {
        if (this.lastKeyCode = BB.keyCode, this.lastKeyTime = Date.now(), 9 == BB.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != BB.keyCode && lY.indexOf(BB.keyCode) < 0 && (this.tabFocusMode = -1), nB.android && nB.chrome && !BB.synthetic && (13 == BB.keyCode || 8 == BB.keyCode)) return this.view.observer.delayAndroidKey(BB.key, BB.keyCode), !0;
        let OB;
        return !nB.ios || BB.synthetic || BB.altKey || BB.metaKey || BB.shiftKey || !((OB = PY.find((OB => OB.keyCode == BB.keyCode))) && !BB.ctrlKey || zY.indexOf(BB.key) > -1 && BB.ctrlKey) ? (229 != BB.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = OB || BB, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(BB) {
        let OB = this.pendingIOSKey;
        return !!OB && (!("Enter" == OB.key && BB && BB.from < BB.to && /^\S+$/.test(BB.insert.toString())) && (this.pendingIOSKey = void 0, DO(this.view.contentDOM, OB.key, OB.keyCode, OB instanceof KeyboardEvent ? OB : void 0)))
      }
      ignoreDuringComposition(BB) {
        return !(!/^key/.test(BB.type) || BB.synthetic) && (this.composing > 0 || !!(nB.safari && !nB.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
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

    function JY(BB, OB) {
      return (GB, YB) => {
        try {
          return OB.call(BB, YB, GB)
        } catch (DB) {
          TO(GB.state, DB)
        }
      }
    }

    function MY(BB) {
      let OB = Object.create(null);

      function GB(BB) {
        return OB[BB] || (OB[BB] = {
          observers: [],
          handlers: []
        })
      }
      for (let YB of BB) {
        let BB = YB.spec,
          OB = BB && BB.plugin.domEventHandlers,
          DB = BB && BB.plugin.domEventObservers;
        if (OB)
          for (let QB in OB) {
            let BB = OB[QB];
            BB && GB(QB).handlers.push(JY(YB.value, BB))
          }
        if (DB)
          for (let QB in DB) {
            let BB = DB[QB];
            BB && GB(QB).observers.push(JY(YB.value, BB))
          }
      }
      for (let YB in ZY) GB(YB).handlers.push(ZY[YB]);
      for (let YB in NY) GB(YB).observers.push(NY[YB]);
      return OB
    }
    const PY = [{
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
      zY = "dthko",
      lY = [16, 17, 18, 20, 91, 92, 224, 225];

    function pY(BB) {
      return .7 * Math.max(0, BB) + 8
    }
    class qY {
      constructor(BB, OB, GB, DB) {
        this.view = BB, this.startEvent = OB, this.style = GB, this.mustSelect = DB, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = OB, this.scrollParents = xB(BB.contentDOM), this.atoms = BB.state.facet(YG).map((OB => OB(BB)));
        let QB = BB.contentDOM.ownerDocument;
        QB.addEventListener("mousemove", this.move = this.move.bind(this)), QB.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = OB.shiftKey, this.multiple = BB.state.facet(YB.l.allowMultipleSelections) && function(BB, OB) {
          let GB = BB.state.facet(uO);
          return GB.length ? GB[0](OB) : nB.mac ? OB.metaKey : OB.ctrlKey
        }(BB, OB), this.dragging = !(! function(BB, OB) {
          let {
            main: GB
          } = BB.state.selection;
          if (GB.empty) return !1;
          let YB = wB(BB.root);
          if (!YB || 0 == YB.rangeCount) return !0;
          let DB = YB.getRangeAt(0).getClientRects();
          for (let QB = 0; QB < DB.length; QB++) {
            let BB = DB[QB];
            if (BB.left <= OB.clientX && BB.right >= OB.clientX && BB.top <= OB.clientY && BB.bottom >= OB.clientY) return !0
          }
          return !1
        }(BB, OB) || 1 != kY(OB)) && null
      }
      start(BB) {
        !1 === this.dragging && this.select(BB)
      }
      move(BB) {
        if (0 == BB.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (OB = this.startEvent, GB = BB, Math.max(Math.abs(OB.clientX - GB.clientX), Math.abs(OB.clientY - GB.clientY)) < 10)) return;
        var OB, GB;
        this.select(this.lastEvent = BB);
        let YB = 0,
          DB = 0,
          QB = 0,
          oB = 0,
          jB = this.view.win.innerWidth,
          yB = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: QB,
          right: jB
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: oB,
          bottom: yB
        } = this.scrollParents.y.getBoundingClientRect());
        let JB = jG(this.view);
        BB.clientX - JB.left <= QB + 6 ? YB = -pY(QB - BB.clientX) : BB.clientX + JB.right >= jB - 6 && (YB = pY(BB.clientX - jB)), BB.clientY - JB.top <= oB + 6 ? DB = -pY(oB - BB.clientY) : BB.clientY + JB.bottom >= yB - 6 && (DB = pY(BB.clientY - yB)), this.setScrollSpeed(YB, DB)
      }
      up(BB) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || BB.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let BB = this.view.contentDOM.ownerDocument;
        BB.removeEventListener("mousemove", this.move), BB.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(BB, OB) {
        this.scrollSpeed = {
          x: BB,
          y: OB
        }, BB || OB ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: BB,
          y: OB
        } = this.scrollSpeed;
        BB && this.scrollParents.x && (this.scrollParents.x.scrollLeft += BB, BB = 0), OB && this.scrollParents.y && (this.scrollParents.y.scrollTop += OB, OB = 0), (BB || OB) && this.view.win.scrollBy(BB, OB), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(BB) {
        let {
          view: OB
        } = this, GB = TG(this.atoms, this.style.get(BB, this.extend, this.multiple));
        !this.mustSelect && GB.eq(OB.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: GB,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(BB) {
        BB.transactions.some((BB => BB.isUserEvent("input.type"))) ? this.destroy() : this.style.update(BB) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const ZY = Object.create(null),
      NY = Object.create(null),
      RY = nB.ie && nB.ie_version < 15 || nB.ios && nB.webkit_version < 604;

    function WY(BB, OB, GB) {
      for (let YB of BB.facet(OB)) GB = YB(GB, BB);
      return GB
    }

    function AY(BB, OB) {
      OB = WY(BB.state, rO, OB);
      let GB, {
          state: DB
        } = BB,
        QB = 1,
        oB = DB.toText(OB),
        jB = oB.lines == DB.selection.JZ.length;
      if (null != KY && DB.selection.JZ.every((BB => BB.empty)) && KY == oB.toString()) {
        let BB = -1;
        GB = DB.changeByRange((GB => {
          let yB = DB.doc.lineAt(GB.from);
          if (yB.from == BB) return {
            range: GB
          };
          BB = yB.from;
          let JB = DB.toText((jB ? oB.line(QB++).text : OB) + DB.lineBreak);
          return {
            changes: {
              from: yB.from,
              insert: JB
            },
            range: YB.j.cursor(GB.from + JB.length)
          }
        }))
      } else GB = jB ? DB.changeByRange((BB => {
        let OB = oB.line(QB++);
        return {
          changes: {
            from: BB.from,
            to: BB.to,
            insert: OB.text
          },
          range: YB.j.cursor(BB.from + OB.length)
        }
      })) : DB.replaceSelection(oB);
      BB.dispatch(GB, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function VY(BB, OB, GB, DB) {
      if (1 == DB) return YB.j.cursor(OB, GB);
      if (2 == DB) return function(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          DB = BB.charCategorizer(OB),
          QB = BB.doc.lineAt(OB),
          oB = OB - QB.from;
        if (0 == QB.length) return YB.j.cursor(OB);
        0 == oB ? GB = 1 : oB == QB.length && (GB = -1);
        let jB = oB,
          yB = oB;
        GB < 0 ? jB = (0, YB.X)(QB.text, oB, !1) : yB = (0, YB.X)(QB.text, oB);
        let JB = DB(QB.text.slice(jB, yB));
        for (; jB > 0;) {
          let BB = (0, YB.X)(QB.text, jB, !1);
          if (DB(QB.text.slice(BB, jB)) != JB) break;
          jB = BB
        }
        for (; yB < QB.length;) {
          let BB = (0, YB.X)(QB.text, yB);
          if (DB(QB.text.slice(yB, BB)) != JB) break;
          yB = BB
        }
        return YB.j.range(jB + QB.from, yB + QB.from)
      }(BB.state, OB, GB);
      {
        let DB = BB.docView.lineAt(OB, GB),
          QB = BB.state.doc.lineAt(DB ? DB.posAtEnd : OB),
          oB = DB ? DB.posAtStart : QB.from,
          jB = DB ? DB.posAtEnd : QB.to;
        return jB < BB.state.doc.length && jB == QB.to && jB++, YB.j.range(oB, jB)
      }
    }
    NY.scroll = BB => {
      BB.inputState.lastScrollTop = BB.scrollDOM.scrollTop, BB.inputState.lastScrollLeft = BB.scrollDOM.scrollLeft
    }, NY.wheel = NY.mousewheel = BB => {
      BB.inputState.lastWheelEvent = Date.now()
    }, ZY.keydown = (BB, OB) => (BB.inputState.setSelectionOrigin("select"), 27 == OB.keyCode && 0 != BB.inputState.tabFocusMode && (BB.inputState.tabFocusMode = Date.now() + 2e3), !1), NY.touchstart = (BB, OB) => {
      let GB = BB.inputState,
        YB = OB.targetTouches[0];
      GB.lastTouchTime = Date.now(), YB && (GB.lastTouchX = YB.clientX, GB.lastTouchY = YB.clientY), GB.setSelectionOrigin("select.pointer")
    }, NY.touchmove = BB => {
      BB.inputState.setSelectionOrigin("select.pointer")
    }, ZY.mousedown = (BB, OB) => {
      if (BB.observer.flush(), BB.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let GB = null;
      for (let YB of BB.state.facet(IO))
        if (GB = YB(BB, OB), GB) break;
      if (GB || 0 != OB.button || (GB = function(BB, OB) {
          let GB = BB.posAndSideAtCoords({
              x: OB.clientX,
              y: OB.clientY
            }, !1),
            DB = kY(OB),
            QB = BB.state.selection;
          return {
            update(BB) {
              BB.docChanged && (GB.pos = BB.changes.mapPos(GB.pos), QB = QB.map(BB.changes))
            },
            get(OB, oB, jB) {
              let yB, JB = BB.posAndSideAtCoords({
                  x: OB.clientX,
                  y: OB.clientY
                }, !1),
                MB = VY(BB, JB.pos, JB.assoc, DB);
              if (GB.pos != JB.pos && !oB) {
                let OB = VY(BB, GB.pos, GB.assoc, DB),
                  QB = Math.min(OB.from, MB.from),
                  oB = Math.max(OB.to, MB.to);
                MB = QB < MB.from ? YB.j.range(QB, oB, MB.assoc) : YB.j.range(oB, QB, MB.assoc)
              }
              return oB ? QB.replaceRange(QB.main.extend(MB.from, MB.to, MB.assoc)) : jB && 1 == DB && QB.JZ.length > 1 && (yB = function(BB, OB) {
                for (let GB = 0; GB < BB.JZ.length; GB++) {
                  let {
                    from: DB,
                    to: QB
                  } = BB.JZ[GB];
                  if (DB <= OB && QB >= OB) return YB.j.create(BB.JZ.slice(0, GB).concat(BB.JZ.slice(GB + 1)), BB.mainIndex == GB ? 0 : BB.mainIndex - (BB.mainIndex > GB ? 1 : 0))
                }
                return null
              }(QB, JB.pos)) ? yB : jB ? QB.addRange(MB) : YB.j.create([MB])
            }
          }
        }(BB, OB)), GB) {
        let YB = !BB.hasFocus;
        BB.inputState.startMouseSelection(new qY(BB, OB, GB, YB)), YB && BB.observer.ignore((() => {
          GO(BB.contentDOM);
          let OB = BB.root.activeElement;
          OB && !OB.contains(BB.contentDOM) && OB.blur()
        }));
        let DB = BB.inputState.mouseSelection;
        if (DB) return DB.start(OB), !1 === DB.dragging
      } else BB.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const SY = nB.ie && nB.ie_version <= 11;
    let nY = null,
      UY = 0,
      fY = 0;

    function kY(BB) {
      if (!SY) return BB.detail;
      let OB = nY,
        GB = fY;
      return nY = BB, fY = Date.now(), UY = !OB || GB > Date.now() - 400 && Math.abs(OB.clientX - BB.clientX) < 2 && Math.abs(OB.clientY - BB.clientY) < 2 ? (UY + 1) % 3 : 1
    }

    function dY(BB, OB, GB, YB) {
      if (!(GB = WY(BB.state, rO, GB))) return;
      let DB = BB.posAtCoords({
          x: OB.clientX,
          y: OB.clientY
        }, !1),
        {
          draggedContent: QB
        } = BB.inputState,
        oB = YB && QB && function(BB, OB) {
          let GB = BB.state.facet(mO);
          return GB.length ? GB[0](OB) : nB.mac ? !OB.altKey : !OB.ctrlKey
        }(BB, OB) ? {
          from: QB.from,
          to: QB.to
        } : null,
        jB = {
          from: DB,
          insert: GB
        },
        yB = BB.state.changes(oB ? [oB, jB] : jB);
      BB.focus(), BB.dispatch({
        changes: yB,
        selection: {
          anchor: yB.mapPos(DB, -1),
          head: yB.mapPos(DB, 1)
        },
        userEvent: oB ? "move.drop" : "input.drop"
      }), BB.inputState.draggedContent = null
    }
    ZY.dragstart = (BB, OB) => {
      let {
        selection: {
          main: GB
        }
      } = BB.state;
      if (OB.target.draggable) {
        let DB = BB.docView.tile.nearest(OB.target);
        if (DB && DB.isWidget()) {
          let BB = DB.posAtStart,
            OB = BB + DB.length;
          (BB >= GB.to || OB <= GB.from) && (GB = YB.j.range(BB, OB))
        }
      }
      let {
        inputState: DB
      } = BB;
      return DB.mouseSelection && (DB.mouseSelection.dragging = !0), DB.draggedContent = GB, OB.dataTransfer && (OB.dataTransfer.setData("Text", WY(BB.state, XO, BB.state.sliceDoc(GB.from, GB.to))), OB.dataTransfer.effectAllowed = "copyMove"), !1
    }, ZY.dragend = BB => (BB.inputState.draggedContent = null, !1), ZY.drop = (BB, OB) => {
      if (!OB.dataTransfer) return !1;
      if (BB.state.readOnly) return !0;
      let GB = OB.dataTransfer.files;
      if (GB && GB.length) {
        let YB = Array(GB.length),
          DB = 0,
          QB = () => {
            ++DB == GB.length && dY(BB, OB, YB.filter((BB => null != BB)).join(BB.state.lineBreak), !1)
          };
        for (let BB = 0; BB < GB.length; BB++) {
          let OB = new FileReader;
          OB.onerror = QB, OB.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(OB.result) || (YB[BB] = OB.result), QB()
          }, OB.readAsText(GB[BB])
        }
        return !0
      } {
        let GB = OB.dataTransfer.getData("Text");
        if (GB) return dY(BB, OB, GB, !0), !0
      }
      return !1
    }, ZY.paste = (BB, OB) => {
      if (BB.state.readOnly) return !0;
      BB.observer.flush();
      let GB = RY ? null : OB.clipboardData;
      return GB ? (AY(BB, GB.getData("text/plain") || GB.getData("text/uri-list")), !0) : (function(BB) {
        let OB = BB.dom.parentNode;
        if (!OB) return;
        let GB = OB.appendChild(document.createElement("textarea"));
        GB.style.cssText = "position: fixed; left: -10000px; top: 10px", GB.focus(), setTimeout((() => {
          BB.focus(), GB.remove(), AY(BB, GB.value)
        }), 50)
      }(BB), !1)
    };
    let KY = null;
    ZY.copy = ZY.cut = (BB, OB) => {
      if (!cB(BB.contentDOM, BB.observer.selectionRange)) return !1;
      let {
        text: GB,
        JZ: YB,
        linewise: DB
      } = function(BB) {
        let OB = [],
          GB = [],
          YB = !1;
        for (let DB of BB.selection.JZ) DB.empty || (OB.push(BB.sliceDoc(DB.from, DB.to)), GB.push(DB));
        if (!OB.length) {
          let DB = -1;
          for (let {
              from: YB
            }
            of BB.selection.JZ) {
            let QB = BB.doc.lineAt(YB);
            QB.number > DB && (OB.push(QB.text), GB.push({
              from: QB.from,
              to: Math.min(BB.doc.length, QB.to + 1)
            })), DB = QB.number
          }
          YB = !0
        }
        return {
          text: WY(BB, XO, OB.join(BB.lineBreak)),
          JZ: GB,
          linewise: YB
        }
      }(BB.state);
      if (!GB && !DB) return !1;
      KY = DB ? GB : null, "cut" != OB.type || BB.state.readOnly || BB.dispatch({
        changes: YB,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let QB = RY ? null : OB.clipboardData;
      return QB ? (QB.clearData(), QB.setData("text/plain", GB), !0) : (function(BB, OB) {
        let GB = BB.dom.parentNode;
        if (!GB) return;
        let YB = GB.appendChild(document.createElement("textarea"));
        YB.style.cssText = "position: fixed; left: -10000px; top: 10px", YB.value = OB, YB.focus(), YB.selectionEnd = OB.length, YB.selectionStart = 0, setTimeout((() => {
          YB.remove(), BB.focus()
        }), 50)
      }(BB, GB), !1)
    };
    const uY = YB.b.define();

    function mY(BB, OB) {
      let GB = [];
      for (let YB of BB.facet(gO)) {
        let DB = YB(BB, OB);
        DB && GB.push(DB)
      }
      return GB.length ? BB.update({
        effects: GB,
        annotations: uY.of(!0)
      }) : null
    }

    function IY(BB) {
      setTimeout((() => {
        let OB = BB.hasFocus;
        if (OB != BB.inputState.notifiedFocused) {
          let GB = mY(BB.state, OB);
          GB ? BB.dispatch(GB) : BB.update([])
        }
      }), 10)
    }
    NY.focus = BB => {
      BB.inputState.lastFocusTime = Date.now(), BB.scrollDOM.scrollTop || !BB.inputState.lastScrollTop && !BB.inputState.lastScrollLeft || (BB.scrollDOM.scrollTop = BB.inputState.lastScrollTop, BB.scrollDOM.scrollLeft = BB.inputState.lastScrollLeft), IY(BB)
    }, NY.blur = BB => {
      BB.observer.clearSelectionRange(), IY(BB)
    }, NY.compositionstart = NY.compositionupdate = BB => {
      BB.observer.editContext || (null == BB.inputState.compositionFirstChange && (BB.inputState.compositionFirstChange = !0), BB.inputState.composing < 0 && (BB.inputState.composing = 0))
    }, NY.compositionend = BB => {
      BB.observer.editContext || (BB.inputState.composing = -1, BB.inputState.compositionEndedAt = Date.now(), BB.inputState.compositionPendingKey = !0, BB.inputState.compositionPendingChange = BB.observer.pendingRecords().length > 0, BB.inputState.compositionFirstChange = null, nB.chrome && nB.android ? BB.observer.flushSoon() : BB.inputState.compositionPendingChange ? Promise.resolve().then((() => BB.observer.flush())) : setTimeout((() => {
        BB.inputState.composing < 0 && BB.docView.hasComposition && BB.update([])
      }), 50))
    }, NY.contextmenu = BB => {
      BB.inputState.lastContextMenu = Date.now()
    }, ZY.beforeinput = (BB, OB) => {
      var GB, YB;
      if ("insertText" != OB.inputType && "insertCompositionText" != OB.inputType || (BB.inputState.insertingText = OB.data, BB.inputState.insertingTextAt = Date.now()), "insertReplacementText" == OB.inputType && BB.observer.editContext) {
        let YB = null === (GB = OB.dataTransfer) || void 0 === GB ? void 0 : GB.getData("text/plain"),
          DB = OB.getTargetRanges();
        if (YB && DB.length) {
          let OB = DB[0],
            GB = BB.posAtDOM(OB.startContainer, OB.startOffset),
            QB = BB.posAtDOM(OB.endContainer, OB.endOffset);
          return QY(BB, {
            from: GB,
            to: QB,
            insert: BB.state.toText(YB)
          }, null), !0
        }
      }
      let DB;
      if (nB.chrome && nB.android && (DB = PY.find((BB => BB.inputType == OB.inputType))) && (BB.observer.delayAndroidKey(DB.key, DB.keyCode), "Backspace" == DB.key || "Delete" == DB.key)) {
        let OB = (null === (YB = window.visualViewport) || void 0 === YB ? void 0 : YB.height) || 0;
        setTimeout((() => {
          var GB;
          ((null === (GB = window.visualViewport) || void 0 === GB ? void 0 : GB.height) || 0) > OB + 10 && BB.hasFocus && (BB.contentDOM.blur(), BB.focus())
        }), 100)
      }
      return nB.ios && "deleteContentForward" == OB.inputType && BB.observer.flushSoon(), nB.safari && "insertText" == OB.inputType && BB.inputState.composing >= 0 && setTimeout((() => NY.compositionend(BB, OB)), 20), !1
    };
    const FY = new Set;
    const iY = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let LY = !1;

    function gY() {
      LY = !1
    }
    class rY {
      constructor(BB) {
        this.lineWrapping = BB, this.doc = YB.K.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(BB, OB) {
        let GB = this.doc.lineAt(OB).number - this.doc.lineAt(BB).number + 1;
        return this.lineWrapping && (GB += Math.max(0, Math.ceil((OB - BB - GB * this.lineLength * .5) / this.lineLength))), this.lineHeight * GB
      }
      heightForLine(BB) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((BB - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(BB) {
        return this.doc = BB, this
      }
      mustRefreshForWrapping(BB) {
        return iY.indexOf(BB) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(BB) {
        let OB = !1;
        for (let GB = 0; GB < BB.length; GB++) {
          let YB = BB[GB];
          YB < 0 ? GB++ : this.heightSamples[Math.floor(10 * YB)] || (OB = !0, this.heightSamples[Math.floor(10 * YB)] = !0)
        }
        return OB
      }
      refresh(BB, OB, GB, YB, DB, QB) {
        let oB = iY.indexOf(BB) > -1,
          jB = Math.abs(OB - this.lineHeight) > .3 || this.lineWrapping != oB || Math.abs(GB - this.charWidth) > .1;
        if (this.lineWrapping = oB, this.lineHeight = OB, this.charWidth = GB, this.textHeight = YB, this.lineLength = DB, jB) {
          this.heightSamples = {};
          for (let BB = 0; BB < QB.length; BB++) {
            let OB = QB[BB];
            OB < 0 ? BB++ : this.heightSamples[Math.floor(10 * OB)] = !0
          }
        }
        return jB
      }
    }
    class XY {
      constructor(BB, OB) {
        this.from = BB, this.heights = OB, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class wY {
      constructor(BB, OB, GB, YB, DB) {
        this.from = BB, this.length = OB, this.top = GB, this.height = YB, this._content = DB
      }
      get type() {
        return "number" == typeof this._content ? mB.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof LB ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(BB) {
        let OB = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(BB._content) ? BB._content : [BB]);
        return new wY(this.from, this.length + BB.length, this.top, this.height + BB.height, OB)
      }
    }
    var EY = function(BB) {
      return BB[BB.ByPos = 0] = "ByPos", BB[BB.ByHeight = 1] = "ByHeight", BB[BB.ByPosNoHeight = 2] = "ByPosNoHeight", BB
    }(EY || (EY = {}));
    const cY = .001;
    class hY {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = BB, this.height = OB, this.flags = GB
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(BB) {
        this.flags = (BB ? 2 : 0) | -3 & this.flags
      }
      setHeight(BB) {
        this.height != BB && (Math.abs(this.height - BB) > cY && (LY = !0), this.height = BB)
      }
      replace(BB, OB, GB) {
        return hY.of(GB)
      }
      decomposeLeft(BB, OB) {
        OB.push(this)
      }
      decomposeRight(BB, OB) {
        OB.push(this)
      }
      applyChanges(BB, OB, GB, YB) {
        let DB = this,
          QB = GB.doc;
        for (let oB = YB.length - 1; oB >= 0; oB--) {
          let {
            fromA: jB,
            toA: yB,
            fromB: JB,
            toB: MB
          } = YB[oB], PB = DB.lineAt(jB, EY.ByPosNoHeight, GB.setDoc(OB), 0, 0), zB = PB.to >= yB ? PB : DB.lineAt(yB, EY.ByPosNoHeight, GB, 0, 0);
          for (MB += zB.to - yB, yB = zB.to; oB > 0 && PB.from <= YB[oB - 1].toA;) jB = YB[oB - 1].fromA, JB = YB[oB - 1].fromB, oB--, jB < PB.from && (PB = DB.lineAt(jB, EY.ByPosNoHeight, GB, 0, 0));
          JB += PB.from - jB, jB = PB.from;
          let lB = sY.build(GB.setDoc(QB), BB, JB, MB);
          DB = aY(DB, DB.replace(jB, yB, lB))
        }
        return DB.updateHeight(GB, 0)
      }
      static empty() {
        return new bY(0, 0, 0)
      }
      static of (BB) {
        if (1 == BB.length) return BB[0];
        let OB = 0,
          GB = BB.length,
          YB = 0,
          DB = 0;
        for (;;)
          if (OB == GB)
            if (YB > 2 * DB) {
              let DB = BB[OB - 1];
              DB.break ? BB.splice(--OB, 1, DB.left, null, DB.right) : BB.splice(--OB, 1, DB.left, DB.right), GB += 1 + DB.break, YB -= DB.size
            } else {
              if (!(DB > 2 * YB)) break;
              {
                let OB = BB[GB];
                OB.break ? BB.splice(GB, 1, OB.left, null, OB.right) : BB.splice(GB, 1, OB.left, OB.right), GB += 2 + OB.break, DB -= OB.size
              }
            }
        else if (YB < DB) {
          let GB = BB[OB++];
          GB && (YB += GB.size)
        } else {
          let OB = BB[--GB];
          OB && (DB += OB.size)
        }
        let QB = 0;
        return null == BB[OB - 1] ? (QB = 1, OB--) : null == BB[OB] && (QB = 1, GB++), new HY(hY.of(BB.slice(0, OB)), QB, hY.of(BB.slice(GB)))
      }
    }

    function aY(BB, OB) {
      return BB == OB ? BB : (BB.constructor != OB.constructor && (LY = !0), OB)
    }
    hY.prototype.size = 1;
    const eY = IB.replace({});
    class TY extends hY {
      constructor(BB, OB, GB) {
        super(BB, OB), this.deco = GB, this.spaceAbove = 0
      }
      mainBlock(BB, OB) {
        return new wY(OB, this.length, BB + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(BB, OB, GB, YB) {
        return this.spaceAbove && BB < GB + this.spaceAbove ? new wY(YB, 0, GB, this.spaceAbove, eY) : this.mainBlock(GB, YB)
      }
      lineAt(BB, OB, GB, YB, DB) {
        let QB = this.mainBlock(YB, DB);
        return this.spaceAbove ? this.blockAt(0, GB, YB, DB).join(QB) : QB
      }
      forEachLine(BB, OB, GB, YB, DB, QB) {
        BB <= DB + this.length && OB >= DB && QB(this.lineAt(0, EY.ByPos, GB, YB, DB))
      }
      setMeasuredHeight(BB) {
        let OB = BB.heights[BB.index++];
        OB < 0 ? (this.spaceAbove = -OB, OB = BB.heights[BB.index++]) : this.spaceAbove = 0, this.setHeight(OB)
      }
      updateHeight(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GB = arguments.length > 3 ? arguments[3] : void 0;
        return GB && GB.from <= OB && GB.more && this.setMeasuredHeight(GB), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class bY extends TY {
      constructor(BB, OB, GB) {
        super(BB, OB, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = GB
      }
      mainBlock(BB, OB) {
        return new wY(OB, this.length, BB + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(BB, OB, GB) {
        let YB = GB[0];
        return 1 == GB.length && (YB instanceof bY || YB instanceof CY && 4 & YB.flags) && Math.abs(this.length - YB.length) < 10 ? (YB instanceof CY ? YB = new bY(YB.length, this.height, this.spaceAbove) : YB.height = this.height, this.outdated || (YB.outdated = !1), YB) : hY.of(GB)
      }
      updateHeight(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          YB = arguments.length > 3 ? arguments[3] : void 0;
        return YB && YB.from <= OB && YB.more ? this.setMeasuredHeight(YB) : (GB || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, BB.heightForLine(this.length - this.collapsed)) + this.breaks * BB.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class CY extends hY {
      constructor(BB) {
        super(BB, 0)
      }
      heightMetrics(BB, OB) {
        let GB, YB = BB.doc.lineAt(OB).number,
          DB = BB.doc.lineAt(OB + this.length).number,
          QB = DB - YB + 1,
          oB = 0;
        if (BB.lineWrapping) {
          let OB = Math.min(this.height, BB.lineHeight * QB);
          GB = OB / QB, this.length > QB + 1 && (oB = (this.height - OB) / (this.length - QB - 1))
        } else GB = this.height / QB;
        return {
          firstLine: YB,
          lastLine: DB,
          perLine: GB,
          perChar: oB
        }
      }
      blockAt(BB, OB, GB, YB) {
        let {
          firstLine: DB,
          lastLine: QB,
          perLine: oB,
          perChar: jB
        } = this.heightMetrics(OB, YB);
        if (OB.lineWrapping) {
          let DB = YB + (BB < OB.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (BB - GB) / this.height)) * this.length)),
            QB = OB.doc.lineAt(DB),
            yB = oB + QB.length * jB,
            JB = Math.max(GB, BB - yB / 2);
          return new wY(QB.from, QB.length, JB, yB, 0)
        } {
          let YB = Math.max(0, Math.min(QB - DB, Math.floor((BB - GB) / oB))),
            {
              from: jB,
              length: yB
            } = OB.doc.line(DB + YB);
          return new wY(jB, yB, GB + oB * YB, oB, 0)
        }
      }
      lineAt(BB, OB, GB, YB, DB) {
        if (OB == EY.ByHeight) return this.blockAt(BB, GB, YB, DB);
        if (OB == EY.ByPosNoHeight) {
          let {
            from: OB,
            to: YB
          } = GB.doc.lineAt(BB);
          return new wY(OB, YB - OB, 0, 0, 0)
        }
        let {
          firstLine: QB,
          perLine: oB,
          perChar: jB
        } = this.heightMetrics(GB, DB), yB = GB.doc.lineAt(BB), JB = oB + yB.length * jB, MB = yB.number - QB, PB = YB + oB * MB + jB * (yB.from - DB - MB);
        return new wY(yB.from, yB.length, Math.max(YB, Math.min(PB, YB + this.height - JB)), JB, 0)
      }
      forEachLine(BB, OB, GB, YB, DB, QB) {
        BB = Math.max(BB, DB), OB = Math.min(OB, DB + this.length);
        let {
          firstLine: oB,
          perLine: jB,
          perChar: yB
        } = this.heightMetrics(GB, DB);
        for (let JB = BB, MB = YB; JB <= OB;) {
          let OB = GB.doc.lineAt(JB);
          if (JB == BB) {
            let GB = OB.number - oB;
            MB += jB * GB + yB * (BB - DB - GB)
          }
          let YB = jB + yB * OB.length;
          QB(new wY(OB.from, OB.length, MB, YB, 0)), MB += YB, JB = OB.to + 1
        }
      }
      replace(BB, OB, GB) {
        let YB = this.length - OB;
        if (YB > 0) {
          let BB = GB[GB.length - 1];
          BB instanceof CY ? GB[GB.length - 1] = new CY(BB.length + YB) : GB.push(null, new CY(YB - 1))
        }
        if (BB > 0) {
          let OB = GB[0];
          OB instanceof CY ? GB[0] = new CY(BB + OB.length) : GB.unshift(new CY(BB - 1), null)
        }
        return hY.of(GB)
      }
      decomposeLeft(BB, OB) {
        OB.push(new CY(BB - 1), null)
      }
      decomposeRight(BB, OB) {
        OB.push(null, new CY(this.length - BB - 1))
      }
      updateHeight(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          YB = arguments.length > 3 ? arguments[3] : void 0,
          DB = OB + this.length;
        if (YB && YB.from <= OB + this.length && YB.more) {
          let GB = [],
            QB = Math.max(OB, YB.from),
            oB = -1;
          for (YB.from > OB && GB.push(new CY(YB.from - OB - 1).updateHeight(BB, OB)); QB <= DB && YB.more;) {
            let OB = BB.doc.lineAt(QB).length;
            GB.length && GB.push(null);
            let DB = YB.heights[YB.index++],
              jB = 0;
            DB < 0 && (jB = -DB, DB = YB.heights[YB.index++]), -1 == oB ? oB = DB : Math.abs(DB - oB) >= cY && (oB = -2);
            let yB = new bY(OB, DB, jB);
            yB.outdated = !1, GB.push(yB), QB += OB + 1
          }
          QB <= DB && GB.push(null, new CY(DB - QB).updateHeight(BB, QB));
          let jB = hY.of(GB);
          return (oB < 0 || Math.abs(jB.height - this.height) >= cY || Math.abs(oB - this.heightMetrics(BB, OB).perLine) >= cY) && (LY = !0), aY(this, jB)
        }
        return (GB || this.outdated) && (this.setHeight(BB.heightForGap(OB, OB + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class HY extends hY {
      constructor(BB, OB, GB) {
        super(BB.length + OB + GB.length, BB.height + GB.height, OB | (BB.outdated || GB.outdated ? 2 : 0)), this.left = BB, this.right = GB, this.size = BB.size + GB.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(BB, OB, GB, YB) {
        let DB = GB + this.left.height;
        return BB < DB ? this.left.blockAt(BB, OB, GB, YB) : this.right.blockAt(BB, OB, DB, YB + this.left.length + this.break)
      }
      lineAt(BB, OB, GB, YB, DB) {
        let QB = YB + this.left.height,
          oB = DB + this.left.length + this.break,
          jB = OB == EY.ByHeight ? BB < QB : BB < oB,
          yB = jB ? this.left.lineAt(BB, OB, GB, YB, DB) : this.right.lineAt(BB, OB, GB, QB, oB);
        if (this.break || (jB ? yB.to < oB : yB.from > oB)) return yB;
        let JB = OB == EY.ByPosNoHeight ? EY.ByPosNoHeight : EY.ByPos;
        return jB ? yB.join(this.right.lineAt(oB, JB, GB, QB, oB)) : this.left.lineAt(oB, JB, GB, YB, DB).join(yB)
      }
      forEachLine(BB, OB, GB, YB, DB, QB) {
        let oB = YB + this.left.height,
          jB = DB + this.left.length + this.break;
        if (this.break) BB < jB && this.left.forEachLine(BB, OB, GB, YB, DB, QB), OB >= jB && this.right.forEachLine(BB, OB, GB, oB, jB, QB);
        else {
          let yB = this.lineAt(jB, EY.ByPos, GB, YB, DB);
          BB < yB.from && this.left.forEachLine(BB, yB.from - 1, GB, YB, DB, QB), yB.to >= BB && yB.from <= OB && QB(yB), OB > yB.to && this.right.forEachLine(yB.to + 1, OB, GB, oB, jB, QB)
        }
      }
      replace(BB, OB, GB) {
        let YB = this.left.length + this.break;
        if (OB < YB) return this.balanced(this.left.replace(BB, OB, GB), this.right);
        if (BB > this.left.length) return this.balanced(this.left, this.right.replace(BB - YB, OB - YB, GB));
        let DB = [];
        BB > 0 && this.decomposeLeft(BB, DB);
        let QB = DB.length;
        for (let oB of GB) DB.push(oB);
        if (BB > 0 && vY(DB, QB - 1), OB < this.length) {
          let BB = DB.length;
          this.decomposeRight(OB, DB), vY(DB, BB)
        }
        return hY.of(DB)
      }
      decomposeLeft(BB, OB) {
        let GB = this.left.length;
        if (BB <= GB) return this.left.decomposeLeft(BB, OB);
        OB.push(this.left), this.break && (GB++, BB >= GB && OB.push(null)), BB > GB && this.right.decomposeLeft(BB - GB, OB)
      }
      decomposeRight(BB, OB) {
        let GB = this.left.length,
          YB = GB + this.break;
        if (BB >= YB) return this.right.decomposeRight(BB - YB, OB);
        BB < GB && this.left.decomposeRight(BB, OB), this.break && BB < YB && OB.push(null), OB.push(this.right)
      }
      balanced(BB, OB) {
        return BB.size > 2 * OB.size || OB.size > 2 * BB.size ? hY.of(this.break ? [BB, null, OB] : [BB, OB]) : (this.left = aY(this.left, BB), this.right = aY(this.right, OB), this.setHeight(BB.height + OB.height), this.outdated = BB.outdated || OB.outdated, this.size = BB.size + OB.size, this.length = BB.length + this.break+OB.length, this)
      }
      updateHeight(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          YB = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: DB,
            right: QB
          } = this,
          oB = OB + DB.length + this.break,
          jB = null;
        return YB && YB.from <= OB + DB.length && YB.more ? jB = DB = DB.updateHeight(BB, OB, GB, YB) : DB.updateHeight(BB, OB, GB), YB && YB.from <= oB + QB.length && YB.more ? jB = QB = QB.updateHeight(BB, oB, GB, YB) : QB.updateHeight(BB, oB, GB), jB ? this.balanced(DB, QB) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function vY(BB, OB) {
      let GB, YB;
      null == BB[OB] && (GB = BB[OB - 1]) instanceof CY && (YB = BB[OB + 1]) instanceof CY && BB.splice(OB - 1, 3, new CY(GB.length + 1 + YB.length))
    }
    class sY {
      constructor(BB, OB) {
        this.pos = BB, this.oracle = OB, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = BB
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(BB, OB) {
        if (this.lineStart > -1) {
          let BB = Math.min(OB, this.lineEnd),
            GB = this.nodes[this.nodes.length - 1];
          GB instanceof bY ? GB.length += BB - this.pos : (BB > this.pos || !this.isCovered) && this.nodes.push(new bY(BB - this.pos, -1, 0)), this.writtenTo = BB, OB > BB && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = OB
      }
      point(BB, OB, GB) {
        if (BB < OB || GB.heightRelevant) {
          let YB = GB.widget ? GB.widget.estimatedHeight : 0,
            DB = GB.widget ? GB.widget.lineBreaks : 0;
          YB < 0 && (YB = this.oracle.lineHeight);
          let QB = OB - BB;
          GB.block ? this.uGB(new TY(QB, YB, GB)) : (QB || DB || YB >= 5) && this.addLineDeco(YB, DB, QB)
        } else OB > BB && this.span(BB, OB);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: BB,
          to: OB
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = BB, this.lineEnd = OB, this.writtenTo < BB && ((this.writtenTo < BB - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, BB - 1)), this.nodes.push(null)), this.pos > BB && this.nodes.push(new bY(this.pos - BB, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(BB, OB) {
        let GB = new CY(OB - BB);
        return this.oracle.doc.lineAt(BB).to == OB && (GB.flags |= 4), GB
      }
      ensureLine() {
        this.enterLine();
        let BB = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (BB instanceof bY) return BB;
        let OB = new bY(0, -1, 0);
        return this.nodes.push(OB), OB
      }
      uGB(BB) {
        this.enterLine();
        let OB = BB.deco;
        OB && OB.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(BB), this.writtenTo = this.pos = this.pos + BB.length, OB && OB.endSide > 0 && (this.covering = BB)
      }
      addLineDeco(BB, OB, GB) {
        let YB = this.ensureLine();
        YB.length += GB, YB.collapsed += GB, YB.widgetHeight = Math.max(YB.widgetHeight, BB), YB.breaks += OB, this.writtenTo = this.pos = this.pos + GB
      }
      finish(BB) {
        let OB = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || OB instanceof bY || this.isCovered ? (this.writtenTo < this.pos || null == OB) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new bY(0, -1, 0));
        let GB = BB;
        for (let YB of this.nodes) YB instanceof bY && YB.updateHeight(this.oracle, GB), GB += YB ? YB.length : 1;
        return this.nodes
      }
      static build(BB, OB, GB, DB) {
        let QB = new sY(GB, BB);
        return YB.z.spans(OB, GB, DB, QB, 0), QB.finish(GB)
      }
    }
    class xY {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(BB, OB, GB, YB) {
        (BB < OB || GB && GB.heightRelevant || YB && YB.heightRelevant) && rB(BB, OB, this.changes, 5)
      }
    }

    function tY(BB, OB) {
      let GB = BB.getBoundingClientRect(),
        YB = BB.ownerDocument,
        DB = YB.defaultView || window,
        QB = Math.max(0, GB.left),
        oB = Math.min(DB.innerWidth, GB.right),
        jB = Math.max(0, GB.top),
        yB = Math.min(DB.innerHeight, GB.bottom);
      for (let JB = BB.parentNode; JB && JB != YB.body;)
        if (1 == JB.nodeType) {
          let OB = JB,
            GB = window.getComputedStyle(OB);
          if ((OB.scrollHeight > OB.clientHeight || OB.scrollWidth > OB.clientWidth) && "visible" != GB.overflow) {
            let GB = OB.getBoundingClientRect();
            QB = Math.max(QB, GB.left), oB = Math.min(oB, GB.right), jB = Math.max(jB, GB.top), yB = Math.min(JB == BB.parentNode ? DB.innerHeight : yB, GB.bottom)
          }
          JB = "absolute" == GB.position || "fixed" == GB.position ? OB.offsetParent : OB.parentNode
        } else {
          if (11 != JB.nodeType) break;
          JB = JB.host
        } return {
        left: QB - GB.left,
        right: Math.max(QB, oB) - GB.left,
        top: jB - (GB.top + OB),
        bottom: Math.max(jB, yB) - (GB.top + OB)
      }
    }

    function BD(BB, OB) {
      let GB = BB.getBoundingClientRect();
      return {
        left: 0,
        right: GB.right - GB.left,
        top: OB,
        bottom: GB.bottom - (GB.top + OB)
      }
    }
    class OD {
      constructor(BB, OB, GB, YB) {
        this.from = BB, this.to = OB, this.size = GB, this.displaySize = YB
      }
      static same(BB, OB) {
        if (BB.length != OB.length) return !1;
        for (let GB = 0; GB < BB.length; GB++) {
          let YB = BB[GB],
            DB = OB[GB];
          if (YB.from != DB.from || YB.to != DB.to || YB.size != DB.size) return !1
        }
        return !0
      }
      draw(BB, OB) {
        return IB.replace({
          widget: new GD(this.displaySize * (OB ? BB.scaleY : BB.scaleX), OB)
        }).range(this.from, this.to)
      }
    }
    class GD extends uB {
      constructor(BB, OB) {
        super(), this.size = BB, this.vertical = OB
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
    class YD {
      constructor(BB, OB) {
        this.view = BB, this.state = OB, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = jD, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = JO.LTR, this.xBB = [], this.mustEnforceCursorAssoc = !1;
        let GB = OB.facet(tO).some((BB => "function" != typeof BB && "cm-lineWrapping" == BB.class));
        this.heightOracle = new rY(GB), this.stateDeco = yD(OB), this.heightMap = hY.empty().applyChanges(this.stateDeco, YB.K.empty, this.heightOracle.setDoc(OB.doc), [new JG(0, 0, 0, OB.doc.length)]);
        for (let YB = 0; YB < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); YB++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = IB.set(this.lineGaps.map((BB => BB.draw(this, !1)))), this.scrollParent = BB.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let BB = [this.viewport],
          {
            main: OB
          } = this.state.selection;
        for (let GB = 0; GB <= 1; GB++) {
          let YB = GB ? OB.head : OB.anchor;
          if (!BB.some((BB => {
              let {
                from: OB,
                to: GB
              } = BB;
              return YB >= OB && YB <= GB
            }))) {
            let {
              from: OB,
              to: GB
            } = this.lineBlockAt(YB);
            BB.push(new DD(OB, GB))
          }
        }
        return this.viewports = BB.sort(((BB, OB) => BB.from - OB.from)), this.updateScaler()
      }
      updateScaler() {
        let BB = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? jD : new JD(this.heightOracle, this.heightMap, this.viewports), BB.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (BB => {
          this.viewportLines.push(MD(BB, this.scaler))
        }))
      }
      update(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = BB.state;
        let GB = this.stateDeco;
        this.stateDeco = yD(this.state);
        let DB = BB.changedRanges,
          QB = JG.extendWithRanges(DB, function(BB, OB, GB) {
            let DB = new xY;
            return YB.z.compare(BB, OB, GB, DB, 0), DB.changes
          }(GB, this.stateDeco, BB ? BB.changes : YB.ChangeSet.empty(this.state.doc.length))),
          oB = this.heightMap.height,
          jB = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        gY(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, BB.startState.doc, this.heightOracle.setDoc(this.state.doc), QB), (this.heightMap.height != oB || LY) && (BB.flags |= 2), jB ? (this.scrollAnchorPos = BB.changes.mapPos(jB.from, -1), this.scrollAnchorHeight = jB.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = oB);
        let yB = QB.length ? this.mapViewport(this.viewport, BB.changes) : this.viewport;
        (OB && (OB.range.head < yB.from || OB.range.head > yB.to) || !this.viewportIsAppropriate(yB)) && (yB = this.getViewport(0, OB));
        let JB = yB.from != this.viewport.from || yB.to != this.viewport.to;
        this.viewport = yB, BB.flags |= this.updateForViewport(), (JB || !BB.changes.empty || 2 & BB.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, BB.changes))), BB.flags |= this.computeVisibleRanges(BB.changes), OB && (this.scrollTarget = OB), !this.mustEnforceCursorAssoc && (BB.selectionSet || BB.focusChanged) && BB.view.lineWrapping && BB.state.selection.main.empty && BB.state.selection.main.assoc && !BB.state.facet(EO) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: BB
        } = this, OB = BB.contentDOM, GB = window.getComputedStyle(OB), DB = this.heightOracle, QB = GB.whiteSpace;
        this.defaultTextDirection = "rtl" == GB.direction ? JO.RTL : JO.LTR;
        let oB = this.heightOracle.mustRefreshForWrapping(QB) || "refresh" === this.mustMeasureContent,
          jB = OB.getBoundingClientRect(),
          yB = oB || this.mustMeasureContent || this.contentDOMHeight != jB.height;
        this.contentDOMHeight = jB.height, this.mustMeasureContent = !1;
        let JB = 0,
          MB = 0;
        if (jB.width && jB.height) {
          let {
            scaleX: BB,
            scaleY: GB
          } = sB(OB, jB);
          (BB > .005 && Math.abs(this.scaleX - BB) > .005 || GB > .005 && Math.abs(this.scaleY - GB) > .005) && (this.scaleX = BB, this.scaleY = GB, JB |= 16, oB = yB = !0)
        }
        let PB = (parseInt(GB.paddingTop) || 0) * this.scaleY,
          zB = (parseInt(GB.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == PB && this.paddingBottom == zB || (this.paddingTop = PB, this.paddingBottom = zB, JB |= 18), this.editorWidth != BB.scrollDOM.clientWidth && (DB.lineWrapping && (yB = !0), this.editorWidth = BB.scrollDOM.clientWidth, JB |= 16);
        let lB = xB(this.view.contentDOM, !1).y;
        lB != this.scrollParent && (this.scrollParent = lB, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let pB = this.getScrollOffset();
        this.scrollOffset != pB && (this.scrollAnchorHeight = -1, this.scrollOffset = pB), this.scrolledToBottom = QO(this.scrollParent || BB.win);
        let qB = (this.printing ? BD : tY)(OB, this.paddingTop),
          ZB = qB.top - this.pixelViewport.top,
          NB = qB.bottom - this.pixelViewport.bottom;
        this.pixelViewport = qB;
        let RB = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (RB != this.inView && (this.inView = RB, RB && (yB = !0)), !this.inView && !this.scrollTarget && ! function(BB) {
            let OB = BB.getBoundingClientRect(),
              GB = BB.ownerDocument.defaultView || window;
            return OB.left < GB.innerWidth && OB.right > 0 && OB.top < GB.innerHeight && OB.bottom > 0
          }(BB.dom)) return 0;
        let WB = jB.width;
        if (this.contentDOMWidth == WB && this.editorHeight == BB.scrollDOM.clientHeight || (this.contentDOMWidth = jB.width, this.editorHeight = BB.scrollDOM.clientHeight, JB |= 16), yB) {
          let OB = BB.docView.measureVisibleLineHeights(this.viewport);
          if (DB.mustRefreshForHeights(OB) && (oB = !0), oB || DB.lineWrapping && Math.abs(WB - this.contentDOMWidth) > DB.charWidth) {
            let {
              lineHeight: GB,
              charWidth: YB,
              textHeight: jB
            } = BB.docView.measureTextSize();
            oB = GB > 0 && DB.refresh(QB, GB, YB, jB, Math.max(5, WB / YB), OB), oB && (BB.docView.minWidth = 0, JB |= 16)
          }
          ZB > 0 && NB > 0 ? MB = Math.max(ZB, NB) : ZB < 0 && NB < 0 && (MB = Math.min(ZB, NB)), gY();
          for (let GB of this.viewports) {
            let QB = GB.from == this.viewport.from ? OB : BB.docView.measureVisibleLineHeights(GB);
            this.heightMap = (oB ? hY.empty().applyChanges(this.stateDeco, YB.K.empty, this.heightOracle, [new JG(0, 0, 0, BB.state.doc.length)]) : this.heightMap).updateHeight(DB, 0, oB, new XY(GB.from, QB))
          }
          LY && (JB |= 2)
        }
        let AB = !this.viewportIsAppropriate(this.viewport, MB) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return AB && (2 & JB && (JB |= this.updateScaler()), this.viewport = this.getViewport(MB, this.scrollTarget), JB |= this.updateForViewport()), (2 & JB || AB) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(oB ? [] : this.lineGaps, BB)), JB |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, BB.docView.enforceCursorAssoc()), JB
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(BB, OB) {
        let GB = .5 - Math.max(-.5, Math.min(.5, BB / 1e3 / 2)),
          YB = this.heightMap,
          DB = this.heightOracle,
          {
            visibleTop: QB,
            visibleBottom: oB
          } = this,
          jB = new DD(YB.lineAt(QB - 1e3 * GB, EY.ByHeight, DB, 0, 0).from, YB.lineAt(oB + 1e3 * (1 - GB), EY.ByHeight, DB, 0, 0).to);
        if (OB) {
          let {
            head: BB
          } = OB.range;
          if (BB < jB.from || BB > jB.to) {
            let GB, QB = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              oB = YB.lineAt(BB, EY.ByPos, DB, 0, 0);
            GB = "center" == OB.y ? (oB.top + oB.bottom) / 2 - QB / 2 : "start" == OB.y || "nearest" == OB.y && BB < jB.from ? oB.top : oB.bottom - QB, jB = new DD(YB.lineAt(GB - 500, EY.ByHeight, DB, 0, 0).from, YB.lineAt(GB + QB + 500, EY.ByHeight, DB, 0, 0).to)
          }
        }
        return jB
      }
      mapViewport(BB, OB) {
        let GB = OB.mapPos(BB.from, -1),
          YB = OB.mapPos(BB.to, 1);
        return new DD(this.heightMap.lineAt(GB, EY.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(YB, EY.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(BB) {
        let {
          from: OB,
          to: GB
        } = BB, YB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: DB
        } = this.heightMap.lineAt(OB, EY.ByPos, this.heightOracle, 0, 0), {
          bottom: QB
        } = this.heightMap.lineAt(GB, EY.ByPos, this.heightOracle, 0, 0), {
          visibleTop: oB,
          visibleBottom: jB
        } = this;
        return (0 == OB || DB <= oB - Math.max(10, Math.min(-YB, 250))) && (GB == this.state.doc.length || QB >= jB + Math.max(10, Math.min(YB, 250))) && DB > oB - 2e3 && QB < jB + 2e3
      }
      mapLineGaps(BB, OB) {
        if (!BB.length || OB.empty) return BB;
        let GB = [];
        for (let YB of BB) OB.touchesRange(YB.from, YB.to) || GB.push(new OD(OB.mapPos(YB.from), OB.mapPos(YB.to), YB.size, YB.displaySize));
        return GB
      }
      ensureLineGaps(BB, OB) {
        let GB = this.heightOracle.lineWrapping,
          DB = GB ? 1e4 : 2e3,
          QB = DB >> 1,
          oB = DB << 1;
        if (this.defaultTextDirection != JO.LTR && !GB) return [];
        let jB = [],
          yB = (DB, oB, JB, MB) => {
            if (oB - DB < QB) return;
            let PB = this.state.selection.main,
              zB = [PB.from];
            PB.empty || zB.push(PB.to);
            for (let BB of zB)
              if (BB > DB && BB < oB) return yB(DB, BB - 10, JB, MB), void yB(BB + 10, oB, JB, MB);
            let lB = function(BB, OB) {
              for (let GB of BB)
                if (OB(GB)) return GB;
              return
            }(BB, (BB => BB.from >= JB.from && BB.to <= JB.to && Math.abs(BB.from - DB) < QB && Math.abs(BB.to - oB) < QB && !zB.some((OB => BB.from < OB && BB.to > OB))));
            if (!lB) {
              if (oB < JB.to && OB && GB && OB.xBB.some((BB => BB.from <= oB && BB.to >= oB))) {
                let BB = OB.moveToLineBoundary(YB.j.cursor(oB), !1, !0).head;
                BB > DB && (oB = BB)
              }
              let BB = this.gapSize(JB, DB, oB, MB);
              lB = new OD(DB, oB, BB, GB || BB < 2e6 ? BB : 2e6)
            }
            jB.push(lB)
          },
          JB = OB => {
            if (OB.length < oB || OB.type != mB.Text) return;
            let QB = function(BB, OB, GB) {
              let DB = [],
                QB = BB,
                oB = 0;
              YB.z.spans(GB, BB, OB, {
                span() {},
                point(BB, OB) {
                  BB > QB && (DB.push({
                    from: QB,
                    to: BB
                  }), oB += BB - QB), QB = OB
                }
              }, 20), QB < OB && (DB.push({
                from: QB,
                to: OB
              }), oB += OB - QB);
              return {
                total: oB,
                JZ: DB
              }
            }(OB.from, OB.to, this.stateDeco);
            if (QB.total < oB) return;
            let jB, JB, MB = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (GB) {
              let BB, GB, YB = DB / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != MB) {
                let DB = oD(QB, MB),
                  oB = ((this.visibleBottom - this.visibleTop) / 2 + YB) / OB.height;
                BB = DB - oB, GB = DB + oB
              } else BB = (this.visibleTop - OB.top - YB) / OB.height, GB = (this.visibleBottom - OB.top + YB) / OB.height;
              jB = QD(QB, BB), JB = QD(QB, GB)
            } else {
              let GB = QB.total * this.heightOracle.charWidth,
                YB = DB * this.heightOracle.charWidth,
                oB = 0;
              if (GB > 2e6)
                for (let DB of BB) DB.from >= OB.from && DB.from < OB.to && DB.size != DB.displaySize && DB.from * this.heightOracle.charWidth + oB < this.pixelViewport.left && (oB = DB.size - DB.displaySize);
              let yB, PB, zB = this.pixelViewport.left + oB,
                lB = this.pixelViewport.right + oB;
              if (null != MB) {
                let BB = oD(QB, MB),
                  OB = ((lB - zB) / 2 + YB) / GB;
                yB = BB - OB, PB = BB + OB
              } else yB = (zB - YB) / GB, PB = (lB + YB) / GB;
              jB = QD(QB, yB), JB = QD(QB, PB)
            }
            jB > OB.from && yB(OB.from, jB, OB, QB), JB < OB.to && yB(JB, OB.to, OB, QB)
          };
        for (let YB of this.viewportLines) Array.isArray(YB.type) ? YB.type.forEach(JB) : JB(YB);
        return jB
      }
      gapSize(BB, OB, GB, YB) {
        let DB = oD(YB, GB) - oD(YB, OB);
        return this.heightOracle.lineWrapping ? BB.height * DB : YB.total * this.heightOracle.charWidth * DB
      }
      updateLineGaps(BB) {
        OD.same(BB, this.lineGaps) || (this.lineGaps = BB, this.lineGapDeco = IB.set(BB.map((BB => BB.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(BB) {
        let OB = this.stateDeco;
        this.lineGaps.length && (OB = OB.concat(this.lineGapDeco));
        let GB = [];
        YB.z.spans(OB, this.viewport.from, this.viewport.to, {
          span(BB, OB) {
            GB.push({
              from: BB,
              to: OB
            })
          },
          point() {}
        }, 20);
        let DB = 0;
        if (GB.length != this.xBB.length) DB = 12;
        else
          for (let YB = 0; YB < GB.length && !(8 & DB); YB++) {
            let OB = this.xBB[YB],
              QB = GB[YB];
            OB.from == QB.from && OB.to == QB.to || (DB |= 4, BB && BB.mapPos(OB.from, -1) == QB.from && BB.mapPos(OB.to, 1) == QB.to || (DB |= 8))
          }
        return this.xBB = GB, DB
      }
      lineBlockAt(BB) {
        return BB >= this.viewport.from && BB <= this.viewport.to && this.viewportLines.find((OB => OB.from <= BB && OB.to >= BB)) || MD(this.heightMap.lineAt(BB, EY.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(BB) {
        return BB >= this.viewportLines[0].top && BB <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((OB => OB.top <= BB && OB.bottom >= BB)) || MD(this.heightMap.lineAt(this.scaler.fromDOM(BB), EY.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(BB) {
        let OB = this.lineBlockAtHeight(BB + 8);
        return OB.from >= this.viewport.from || this.viewportLines[0].top - BB > 200 ? OB : this.viewportLines[0]
      }
      elementAtHeight(BB) {
        return MD(this.heightMap.blockAt(this.scaler.fromDOM(BB), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class DD {
      constructor(BB, OB) {
        this.from = BB, this.to = OB
      }
    }

    function QD(BB, OB) {
      let {
        total: GB,
        JZ: YB
      } = BB;
      if (OB <= 0) return YB[0].from;
      if (OB >= 1) return YB[YB.length - 1].to;
      let DB = Math.floor(GB * OB);
      for (let QB = 0;; QB++) {
        let {
          from: BB,
          to: OB
        } = YB[QB], GB = OB - BB;
        if (DB <= GB) return BB + DB;
        DB -= GB
      }
    }

    function oD(BB, OB) {
      let GB = 0;
      for (let {
          from: YB,
          to: DB
        }
        of BB.JZ) {
        if (OB <= DB) {
          GB += OB - YB;
          break
        }
        GB += DB - YB
      }
      return GB / BB.total
    }
    const jD = {
      toDOM: BB => BB,
      fromDOM: BB => BB,
      scale: 1,
      eq(BB) {
        return BB == this
      }
    };

    function yD(BB) {
      let OB = BB.facet(BG).filter((BB => "function" != typeof BB)),
        GB = BB.facet(GG).filter((BB => "function" != typeof BB));
      return GB.length && OB.push(YB.z.join(GB)), OB
    }
    class JD {
      constructor(BB, OB, GB) {
        let YB = 0,
          DB = 0,
          QB = 0;
        this.viewports = GB.map((GB => {
          let {
            from: DB,
            to: QB
          } = GB, oB = OB.lineAt(DB, EY.ByPos, BB, 0, 0).top, jB = OB.lineAt(QB, EY.ByPos, BB, 0, 0).bottom;
          return YB += jB - oB, {
            from: DB,
            to: QB,
            top: oB,
            bottom: jB,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - YB) / (OB.height - YB);
        for (let oB of this.viewports) oB.domTop = QB + (oB.top - DB) * this.scale, QB = oB.domBottom = oB.domTop + (oB.bottom - oB.top), DB = oB.bottom
      }
      toDOM(BB) {
        for (let OB = 0, GB = 0, YB = 0;; OB++) {
          let DB = OB < this.viewports.length ? this.viewports[OB] : null;
          if (!DB || BB < DB.top) return YB + (BB - GB) * this.scale;
          if (BB <= DB.bottom) return DB.domTop + (BB - DB.top);
          GB = DB.bottom, YB = DB.domBottom
        }
      }
      fromDOM(BB) {
        for (let OB = 0, GB = 0, YB = 0;; OB++) {
          let DB = OB < this.viewports.length ? this.viewports[OB] : null;
          if (!DB || BB < DB.domTop) return GB + (BB - YB) / this.scale;
          if (BB <= DB.domBottom) return DB.top + (BB - DB.domTop);
          GB = DB.bottom, YB = DB.domBottom
        }
      }
      eq(BB) {
        return BB instanceof JD && (this.scale == BB.scale && this.viewports.length == BB.viewports.length && this.viewports.every(((OB, GB) => OB.from == BB.viewports[GB].from && OB.to == BB.viewports[GB].to)))
      }
    }

    function MD(BB, OB) {
      if (1 == OB.scale) return BB;
      let GB = OB.toDOM(BB.top),
        YB = OB.toDOM(BB.bottom);
      return new wY(BB.from, BB.length, GB, YB - GB, Array.isArray(BB._content) ? BB._content.map((BB => MD(BB, OB))) : BB._content)
    }
    const PD = YB.o.define({
        combine: BB => BB.join(" ")
      }),
      zD = YB.o.define({
        combine: BB => BB.indexOf(!0) > -1
      }),
      lD = DB.d.newName(),
      pD = DB.d.newName(),
      qD = DB.d.newName(),
      ZD = {
        "&light": "." + pD,
        "&dark": "." + qD
      };

    function ND(BB, OB, GB) {
      return new DB.d(OB, {
        finish: OB => /&/.test(OB) ? OB.replace(/&\w*/, (OB => {
          if ("&" == OB) return BB;
          if (!GB || !GB[OB]) throw new RangeError(`Unsupported selector: ${OB}`);
          return GB[OB]
        })) : BB + " " + OB
      })
    }
    const RD = ND("." + lD, {
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
      }, ZD),
      WD = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      AD = nB.ie && nB.ie_version <= 11;
    class VD {
      constructor(BB) {
        this.view = BB, this.active = !1, this.editContext = null, this.selectionRange = new tB, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = BB.contentDOM, this.observer = new MutationObserver((OB => {
          for (let BB of OB) this.queue.push(BB);
          (nB.ie && nB.ie_version <= 11 || nB.ios && BB.composing) && OB.some((BB => "childList" == BB.type && BB.removedNodes.length || "characterData" == BB.type && BB.oldValue.length > BB.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !nB.android || !1 === BB.constructor.EDIT_CONTEXT || nB.chrome && nB.chrome_version < 126 || (this.editContext = new UD(BB), BB.state.facet(bO) && (BB.contentDOM.editContext = this.editContext.editContext)), AD && (this.onCharData = BB => {
          this.queue.push({
            target: BB.target,
            type: "characterData",
            oldValue: BB.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.vN = this.vN.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var BB;
          (null === (BB = this.view.docView) || void 0 === BB ? void 0 : BB.lastUpdate) < Date.now() - 75 && this.vN()
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
      vN() {
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
        if (this.gapIntersection && (BB.length != this.gaps.length || this.gaps.some(((OB, GB) => OB != BB[GB])))) {
          this.gapIntersection.disconnect();
          for (let OB of BB) this.gapIntersection.observe(OB);
          this.gaps = BB
        }
      }
      onSelectionChange(BB) {
        let OB = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: GB
        } = this, YB = this.selectionRange;
        if (GB.state.facet(bO) ? GB.root.activeElement != this.dom : !cB(this.dom, YB)) return;
        let DB = YB.anchorNode && GB.docView.tile.nearest(YB.anchorNode);
        DB && DB.isWidget() && DB.widget.ignoreEvent(BB) ? OB || (this.selectionChanged = !1) : (nB.ie && nB.ie_version <= 11 || nB.android && nB.chrome) && !GB.state.selection.main.empty && YB.focusNode && aB(YB.focusNode, YB.focusOffset, YB.anchorNode, YB.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: BB
        } = this, OB = wB(BB.root);
        if (!OB) return !1;
        let GB = nB.safari && 11 == BB.root.nodeType && BB.root.activeElement == this.dom && function(BB, OB) {
          if (OB.getComposedRanges) {
            let GB = OB.getComposedRanges(BB.root)[0];
            if (GB) return nD(BB, GB)
          }
          let GB = null;

          function YB(BB) {
            BB.preventDefault(), BB.stopImmediatePropagation(), GB = BB.getTargetRanges()[0]
          }
          return BB.contentDOM.addEventListener("beforeinput", YB, !0), BB.dom.ownerDocument.execCommand("indent"), BB.contentDOM.removeEventListener("beforeinput", YB, !0), GB ? nD(BB, GB) : null
        }(this.view, OB) || OB;
        if (!GB || this.selectionRange.eq(GB)) return !1;
        let YB = cB(this.dom, GB);
        return YB && !this.selectionChanged && BB.inputState.lastFocusTime > Date.now() - 200 && BB.inputState.lastTouchTime < Date.now() - 300 && function(BB, OB) {
          let GB = OB.focusNode,
            YB = OB.focusOffset;
          if (!GB || OB.anchorNode != GB || OB.anchorOffset != YB) return !1;
          for (YB = Math.min(YB, CB(GB));;)
            if (YB) {
              if (1 != GB.nodeType) return !1;
              let BB = GB.childNodes[YB - 1];
              "false" == BB.contentEditable ? YB-- : (GB = BB, YB = CB(GB))
            } else {
              if (GB == BB) return !0;
              YB = eB(GB), GB = GB.parentNode
            }
        }(this.dom, GB) ? (this.view.inputState.lastFocusTime = 0, BB.docView.updateSelection(), !1) : (this.selectionRange.setRange(GB), YB && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(BB, OB) {
        this.selectionRange.set(BB.node, BB.offset, OB.node, OB.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let BB = 0,
          OB = null;
        for (let GB = this.dom; GB;)
          if (1 == GB.nodeType) !OB && BB < this.scrollTargets.length && this.scrollTargets[BB] == GB ? BB++ : OB || (OB = this.scrollTargets.slice(0, BB)), OB && OB.push(GB), GB = GB.assignedSlot || GB.parentNode;
          else {
            if (11 != GB.nodeType) break;
            GB = GB.host
          } if (BB < this.scrollTargets.length && !OB && (OB = this.scrollTargets.slice(0, BB)), OB) {
          for (let BB of this.scrollTargets) BB.removeEventListener("scroll", this.onScroll);
          for (let BB of this.scrollTargets = OB) BB.addEventListener("scroll", this.onScroll)
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
        this.active || (this.observer.observe(this.dom, WD), AD && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), AD && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(BB, OB) {
        var GB;
        if (!this.delayedAndroidKey) {
          let BB = () => {
            let BB = this.delayedAndroidKey;
            if (BB) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = BB.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && BB.force && DO(this.dom, BB.key, BB.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(BB)
        }
        this.delayedAndroidKey && "Enter" != BB || (this.delayedAndroidKey = {
          key: BB,
          keyCode: OB,
          force: this.lastChange < Date.now() - 50 || !!(null === (GB = this.delayedAndroidKey) || void 0 === GB ? void 0 : GB.force)
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
        let OB = -1,
          GB = -1,
          YB = !1;
        for (let DB of BB) {
          let BB = this.readMutation(DB);
          BB && (BB.typeOver && (YB = !0), -1 == OB ? ({
            from: OB,
            to: GB
          } = BB) : (OB = Math.min(BB.from, OB), GB = Math.max(BB.to, GB)))
        }
        return {
          from: OB,
          to: GB,
          typeOver: YB
        }
      }
      readChange() {
        let {
          from: BB,
          to: OB,
          typeOver: GB
        } = this.processRecords(), YB = this.selectionChanged && cB(this.dom, this.selectionRange);
        if (BB < 0 && !YB) return null;
        BB > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let DB = new GY(this.view, BB, OB, GB);
        return this.view.docView.domChanged = {
          newSel: DB.newSel ? DB.newSel.main : null
        }, DB
      }
      flush() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        BB && this.readSelectionRange();
        let OB = this.readChange();
        if (!OB) return this.view.requestMeasure(), !1;
        let GB = this.view.state,
          YB = DY(this.view, OB);
        return this.view.state == GB && (OB.domChanged || OB.newSel && !jY(this.view.state.selection, OB.newSel.main)) && this.view.update([]), YB
      }
      readMutation(BB) {
        let OB = this.view.docView.tile.nearest(BB.target);
        if (!OB || OB.isWidget()) return null;
        if (OB.markDirty("attributes" == BB.type), "childList" == BB.type) {
          let GB = SD(OB, BB.previousSibling || BB.target.previousSibling, -1),
            YB = SD(OB, BB.nextSibling || BB.target.nextSibling, 1);
          return {
            from: GB ? OB.posAfter(GB) : OB.posAtStart,
            to: YB ? OB.posBefore(YB) : OB.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == BB.type ? {
          from: OB.posAtStart,
          to: OB.posAtEnd,
          typeOver: BB.target.nodeValue == BB.oldValue
        } : null
      }
      setWindow(BB) {
        BB != this.win && (this.removeWindowListeners(this.win), this.win = BB, this.addWindowListeners(this.win))
      }
      addWindowListeners(BB) {
        BB.addEventListener("resize", this.vN), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : BB.addEventListener("beforeprint", this.onPrint), BB.addEventListener("scroll", this.onScroll), BB.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(BB) {
        BB.removeEventListener("scroll", this.onScroll), BB.removeEventListener("resize", this.vN), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : BB.removeEventListener("beforeprint", this.onPrint), BB.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(BB) {
        this.editContext && (this.editContext.update(BB), BB.startState.facet(bO) != BB.state.facet(bO) && (BB.view.contentDOM.editContext = BB.state.facet(bO) ? this.editContext.editContext : null))
      }
      destroy() {
        var BB, OB, GB;
        this.stop(), null === (BB = this.intersection) || void 0 === BB || BB.disconnect(), null === (OB = this.gapIntersection) || void 0 === OB || OB.disconnect(), null === (GB = this.resizeScroll) || void 0 === GB || GB.disconnect();
        for (let YB of this.scrollTargets) YB.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function SD(BB, OB, GB) {
      for (; OB;) {
        let YB = zG.get(OB);
        if (YB && YB.parent == BB) return YB;
        let DB = OB.parentNode;
        OB = DB != BB.dom ? DB : GB > 0 ? OB.nextSibling : OB.previousSibling
      }
      return null
    }

    function nD(BB, OB) {
      let GB = OB.startContainer,
        YB = OB.startOffset,
        DB = OB.endContainer,
        QB = OB.endOffset,
        oB = BB.docView.domAtPos(BB.state.selection.main.anchor, 1);
      return aB(oB.node, oB.offset, DB, QB) && ([GB, YB, DB, QB] = [DB, QB, GB, YB]), {
        anchorNode: GB,
        anchorOffset: YB,
        focusNode: DB,
        focusOffset: QB
      }
    }
    class UD {
      constructor(BB) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(BB.state);
        let OB = this.editContext = new window.EditContext({
          text: BB.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, BB.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(BB.state.selection.main.head)
        });
        this.handlers.textupdate = GB => {
          let DB = BB.state.selection.main,
            {
              anchor: QB,
              head: oB
            } = DB,
            jB = this.toEditorPos(GB.updateRangeStart),
            yB = this.toEditorPos(GB.updateRangeEnd);
          BB.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: GB.updateRangeStart,
            editorBase: jB,
            drifted: !1
          });
          let JB = yB - jB > GB.text.length;
          jB == this.from && QB < this.from ? jB = QB : yB == this.to && QB > this.to && (yB = QB);
          let MB = oY(BB.state.sliceDoc(jB, yB), GB.text, (JB ? DB.from : DB.to) - jB, JB ? "end" : null);
          if (!MB) {
            let OB = YB.j.single(this.toEditorPos(GB.selectionStart), this.toEditorPos(GB.selectionEnd));
            return void(jY(OB, DB) || BB.dispatch({
              selection: OB,
              userEvent: "select"
            }))
          }
          let PB = {
            from: MB.from + jB,
            to: MB.toA + jB,
            insert: YB.K.of(GB.text.slice(MB.from, MB.toB).split("\n"))
          };
          if ((nB.mac || nB.android) && PB.from == oB - 1 && /^\. ?$/.test(GB.text) && "off" == BB.contentDOM.getAttribute("autocorrect") && (PB = {
              from: jB,
              to: yB,
              insert: YB.K.of([GB.text.replace(".", " ")])
            }), this.pendingContextChange = PB, !BB.state.readOnly) {
            let OB = this.to - this.from + (PB.to - PB.from + PB.insert.length);
            QY(BB, PB, YB.j.single(this.toEditorPos(GB.selectionStart, OB), this.toEditorPos(GB.selectionEnd, OB)))
          }
          this.pendingContextChange && (this.revertPending(BB.state), this.setSelection(BB.state)), PB.from < PB.to && !PB.insert.length && BB.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(OB.text.slice(Math.max(0, GB.updateRangeStart - 1), Math.min(OB.text.length, GB.updateRangeStart + 1))) && this.handlers.compositionend(GB)
        }, this.handlers.characterboundsupdate = GB => {
          let YB = [],
            DB = null;
          for (let OB = this.toEditorPos(GB.rangeStart), QB = this.toEditorPos(GB.rangeEnd); OB < QB; OB++) {
            let GB = BB.coordsForChar(OB);
            DB = GB && new DOMRect(GB.left, GB.top, GB.right - GB.left, GB.bottom - GB.top) || DB || new DOMRect, YB.push(DB)
          }
          OB.updateCharacterBounds(GB.rangeStart, YB)
        }, this.handlers.textformatupdate = OB => {
          let GB = [];
          for (let BB of OB.getTextFormats()) {
            let OB = BB.underlineStyle,
              YB = BB.underlineThickness;
            if (!/none/i.test(OB) && !/none/i.test(YB)) {
              let DB = this.toEditorPos(BB.rangeStart),
                QB = this.toEditorPos(BB.rangeEnd);
              if (DB < QB) {
                let BB = `text-decoration: underline ${/^[a-z]/.test(OB)?OB+" ":"Dashed"==OB?"dashed ":"Squiggle"==OB?"wavy ":""}${/thin/i.test(YB)?1:2}px`;
                GB.push(IB.mark({
                  attributes: {
                    style: BB
                  }
                }).range(DB, QB))
              }
            }
          }
          BB.dispatch({
            effects: eO.of(IB.set(GB))
          })
        }, this.handlers.compositionstart = () => {
          BB.inputState.composing < 0 && (BB.inputState.composing = 0, BB.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (BB.inputState.composing = -1, BB.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: OB
            } = this.composing;
            this.composing = null, OB && this.reset(BB.state)
          }
        };
        for (let GB in this.handlers) OB.addEventListener(GB, this.handlers[GB]);
        this.measureReq = {
          read: BB => {
            this.editContext.updateControlBounds(BB.contentDOM.getBoundingClientRect());
            let OB = wB(BB.root);
            OB && OB.rangeCount && this.editContext.updateSelectionBounds(OB.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(BB) {
        let OB = 0,
          GB = !1,
          YB = this.pendingContextChange;
        return BB.changes.iterChanges(((DB, QB, oB, jB, yB) => {
          if (GB) return;
          let JB = yB.length - (QB - DB);
          if (YB && QB >= YB.to) {
            if (YB.from == DB && YB.to == QB && YB.insert.eq(yB)) return YB = this.pendingContextChange = null, OB += JB, void(this.to += JB);
            YB = null, this.revertPending(BB.state)
          }
          if (DB += OB, (QB += OB) <= this.from) this.from += JB, this.to += JB;
          else if (DB < this.to) {
            if (DB < this.from || QB > this.to || this.to - this.from + yB.length > 3e4) return void(GB = !0);
            this.editContext.updateText(this.toContextPos(DB), this.toContextPos(QB), yB.toString()), this.to += JB
          }
          OB += JB
        })), YB && !GB && this.revertPending(BB.state), !GB
      }
      update(BB) {
        let OB = this.pendingContextChange,
          GB = BB.startState.selection.main;
        this.composing && (this.composing.drifted || !BB.changes.touchesRange(GB.from, GB.to) && BB.transactions.some((BB => !BB.isUserEvent("input.type") && BB.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = BB.changes.mapPos(this.composing.editorBase)) : this.applyEdits(BB) && this.rangeIsValid(BB.state) ? (BB.docChanged || BB.selectionSet || OB) && this.setSelection(BB.state) : (this.pendingContextChange = null, this.reset(BB.state)), (BB.geometryChanged || BB.docChanged || BB.selectionSet) && BB.view.requestMeasure(this.measureReq)
      }
      resetRange(BB) {
        let {
          head: OB
        } = BB.selection.main;
        this.from = Math.max(0, OB - 1e4), this.to = Math.min(BB.doc.length, OB + 1e4)
      }
      reset(BB) {
        this.resetRange(BB), this.editContext.updateText(0, this.editContext.text.length, BB.doc.sliceString(this.from, this.to)), this.setSelection(BB)
      }
      revertPending(BB) {
        let OB = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(OB.from), this.toContextPos(OB.from + OB.insert.length), BB.doc.sliceString(OB.from, OB.to))
      }
      setSelection(BB) {
        let {
          main: OB
        } = BB.selection, GB = this.toContextPos(Math.max(this.from, Math.min(this.to, OB.anchor))), YB = this.toContextPos(OB.head);
        this.editContext.selectionStart == GB && this.editContext.selectionEnd == YB || this.editContext.updateSelection(GB, YB)
      }
      rangeIsValid(BB) {
        let {
          head: OB
        } = BB.selection.main;
        return !(this.from > 0 && OB - this.from < 500 || this.to < BB.doc.length && this.to - OB < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        BB = Math.min(BB, OB);
        let GB = this.composing;
        return GB && GB.drifted ? GB.editorBase + (BB - GB.contextBase) : BB + this.from
      }
      toContextPos(BB) {
        let OB = this.composing;
        return OB && OB.drifted ? OB.contextBase + (BB - OB.editorBase) : BB - this.from
      }
      destroy() {
        for (let BB in this.handlers) this.editContext.removeEventListener(BB, this.handlers[BB])
      }
    }
    class fD {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get xBB() {
        return this.viewState.xBB
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
        var OB;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), BB.parent && BB.parent.appendChild(this.dom);
        let {
          dispatch: GB
        } = BB;
        this.dispatchTransactions = BB.dispatchTransactions || GB && (BB => BB.forEach((BB => GB(BB, this)))) || (BB => this.update(BB)), this.dispatch = this.dispatch.bind(this), this._root = BB.root || function(BB) {
          for (; BB;) {
            if (BB && (9 == BB.nodeType || 11 == BB.nodeType && BB.host)) return BB;
            BB = BB.assignedSlot || BB.parentNode
          }
          return null
        }(BB.parent) || document, this.viewState = new YD(this, BB.state || YB.l.create(BB)), BB.scrollTo && BB.scrollTo.is(aO) && (this.viewState.scrollTarget = BB.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(HO).map((BB => new sO(BB)));
        for (let YB of this.plugins) YB.update(this);
        this.observer = new VD(this), this.inputState = new yY(this), this.inputState.ensureHandlers(this.plugins), this.docView = new gG(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (OB = document.fonts) || void 0 === OB ? void 0 : OB.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
        let DB = 1 == OB.length && OB[0] instanceof YB.L ? OB : 1 == OB.length && Array.isArray(OB[0]) ? OB[0] : [this.state.update(...OB)];
        this.dispatchTransactions(DB, this)
      }
      update(BB) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let OB, GB = !1,
          DB = !1,
          QB = this.state;
        for (let YB of BB) {
          if (YB.startState != QB) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          QB = YB.state
        }
        if (this.destroyed) return void(this.viewState.state = QB);
        let oB = this.hasFocus,
          jB = 0,
          yB = null;
        BB.some((BB => BB.annotation(uY))) ? (this.inputState.notifiedFocused = oB, jB = 1) : oB != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = oB, yB = mY(QB, oB), yB || (jB = 1));
        let JB = this.observer.delayedAndroidKey,
          MB = null;
        if (JB ? (this.observer.clearDelayedAndroidKey(), MB = this.observer.readChange(), (MB && !this.state.doc.eq(QB.doc) || !this.state.selection.eq(QB.selection)) && (MB = null)) : this.observer.clear(), QB.facet(YB.l.phrases) != this.state.facet(YB.l.phrases)) return this.setState(QB);
        OB = MG.create(this, QB, BB), OB.flags |= jB;
        let PB = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let OB of BB) {
            if (PB && (PB = PB.map(OB.changes)), OB.scrollIntoView) {
              let {
                main: BB
              } = OB.state.selection, {
                x: GB,
                y: DB
              } = this.state.facet(fD.cursorScrollMargin);
              PB = new hO(BB.empty ? BB : YB.j.cursor(BB.head, BB.head > BB.anchor ? -1 : 1), "nearest", "nearest", DB, GB)
            }
            for (let BB of OB.effects) BB.is(aO) && (PB = BB.value.clip(this.state))
          }
          this.viewState.update(OB, PB), this.bidiCache = KD.update(this.bidiCache, OB.changes), OB.empty || (this.updatePlugins(OB), this.inputState.update(OB)), GB = this.docView.update(OB), this.state.facet(yG) != this.styleModules && this.mountStyles(), DB = this.updateAttrs(), this.showAnnouncements(BB), this.docView.updateSelection(GB, BB.some((BB => BB.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (OB.startState.facet(PD) != OB.state.facet(PD) && (this.viewState.mustMeasureContent = !0), (GB || DB || PB || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), GB && this.docViewUpdate(), !OB.empty)
          for (let YB of this.state.facet(iO)) try {
            YB(OB)
          } catch (zB) {
            TO(this.state, zB, "update listener")
          }(yB || MB) && Promise.resolve().then((() => {
            yB && this.state == yB.startState && this.dispatch(yB), MB && !DY(this, MB) && JB.force && DO(this.contentDOM, JB.key, JB.keyCode)
          }))
      }
      setState(BB) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = BB);
        this.updateState = 2;
        let OB = this.hasFocus;
        try {
          for (let BB of this.plugins) BB.destroy(this);
          this.viewState = new YD(this, BB), this.plugins = BB.facet(HO).map((BB => new sO(BB))), this.pluginMap.clear();
          for (let BB of this.plugins) BB.update(this);
          this.docView.destroy(), this.docView = new gG(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        OB && this.focus(), this.requestMeasure()
      }
      updatePlugins(BB) {
        let OB = BB.startState.facet(HO),
          GB = BB.state.facet(HO);
        if (OB != GB) {
          let YB = [];
          for (let DB of GB) {
            let GB = OB.indexOf(DB);
            if (GB < 0) YB.push(new sO(DB));
            else {
              let OB = this.plugins[GB];
              OB.mustUpdate = BB, YB.push(OB)
            }
          }
          for (let OB of this.plugins) OB.mustUpdate != BB && OB.destroy(this);
          this.plugins = YB, this.pluginMap.clear()
        } else
          for (let YB of this.plugins) YB.mustUpdate = BB;
        for (let YB = 0; YB < this.plugins.length; YB++) this.plugins[YB].update(this);
        OB != GB && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let OB of this.plugins) {
          let GB = OB.value;
          if (GB && GB.docViewUpdate) try {
            GB.docViewUpdate(this)
          } catch (BB) {
            TO(this.state, BB, "doc view update listener")
          }
        }
      }
      measure() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, BB && this.observer.forceFlush();
        let OB = null,
          GB = this.viewState.scrollParent,
          YB = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: DB,
            scrollAnchorHeight: QB
          } = this.viewState;
        Math.abs(YB - this.viewState.scrollOffset) > 1 && (QB = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let BB = 0;; BB++) {
            if (QB < 0)
              if (QO(GB || this.win)) DB = -1, QB = this.viewState.heightMap.height;
              else {
                let BB = this.viewState.scrollAnchorAt(YB);
                DB = BB.from, QB = BB.top
              } this.updateState = 1;
            let jB = this.viewState.measure();
            if (!jB && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (BB > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let yB = [];
            4 & jB || ([this.measureRequests, yB] = [yB, this.measureRequests]);
            let JB = yB.map((BB => {
                try {
                  return BB.read(this)
                } catch (OB) {
                  return TO(this.state, OB), dD
                }
              })),
              MB = MG.create(this, this.state, []),
              PB = !1;
            MB.flags |= jB, OB ? OB.flags |= jB : OB = MB, this.updateState = 2, MB.empty || (this.updatePlugins(MB), this.inputState.update(MB), this.updateAttrs(), PB = this.docView.update(MB), PB && this.docViewUpdate());
            for (let BB = 0; BB < yB.length; BB++)
              if (JB[BB] != dD) try {
                let OB = yB[BB];
                OB.write && OB.write(JB[BB], this)
              } catch (oB) {
                TO(this.state, oB)
              }
            if (PB && this.docView.updateSelection(!0), !MB.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, QB = -1;
                  continue
                } {
                  let BB = ((DB < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(DB).top) - QB) / this.scaleY;
                  if ((BB > 1 || BB < -1) && (GB == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    YB += BB, GB ? GB.scrollTop += BB : this.win.scrollBy(0, BB), QB = -1;
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
        if (OB && !OB.empty)
          for (let jB of this.state.facet(iO)) jB(OB)
      }
      get themeClasses() {
        return lD + " " + (this.state.facet(zD) ? qD : pD) + " " + this.state.facet(PD)
      }
      updateAttrs() {
        let BB = uD(this, xO, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          OB = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(bO) ? "true" : "false",
            class: "cm-content",
            style: `${nB.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (OB["aria-readonly"] = "true"), uD(this, tO, OB);
        let GB = this.observer.ignore((() => {
          let GB = dB(this.contentDOM, this.contentAttrs, OB),
            YB = dB(this.dom, this.editorAttrs, BB);
          return GB || YB
        }));
        return this.editorAttrs = BB, this.contentAttrs = OB, GB
      }
      showAnnouncements(BB) {
        let OB = !0;
        for (let GB of BB)
          for (let BB of GB.effects)
            if (BB.is(fD.announce)) {
              OB && (this.announceDOM.textContent = ""), OB = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = BB.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(yG);
        let BB = this.state.facet(fD.cspNonce);
        DB.d.mount(this.root, this.styleModules.concat(RD).reverse(), BB ? {
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
            for (let OB = 0; OB < this.measureRequests.length; OB++)
              if (this.measureRequests[OB].key === BB.key) return void(this.measureRequests[OB] = BB);
          this.measureRequests.push(BB)
        }
      }
      plugin(BB) {
        let OB = this.pluginMap.get(BB);
        return (void 0 === OB || OB && OB.plugin != BB) && this.pluginMap.set(BB, OB = this.plugins.find((OB => OB.plugin == BB)) || null), OB && OB.update(this).value
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
      moveByChar(BB, OB, GB) {
        return bG(this, BB, aG(this, BB, OB, GB))
      }
      moveByGroup(BB, OB) {
        return bG(this, BB, aG(this, BB, OB, (OB => function(BB, OB, GB) {
          let DB = BB.state.charCategorizer(OB),
            QB = DB(GB);
          return BB => {
            let OB = DB(BB);
            return QB == YB.g.Space && (QB = OB), QB == OB
          }
        }(this, BB.head, OB))))
      }
      visualLineSide(BB, OB) {
        let GB = this.bidiSpans(BB),
          DB = this.textDirectionAt(BB.from),
          QB = GB[OB ? GB.length - 1 : 0];
        return YB.j.cursor(QB.side(OB, DB) + BB.from, QB.forward(!OB, DB) ? 1 : -1)
      }
      moveToLineBoundary(BB, OB) {
        return function(BB, OB, GB, DB) {
          let QB = hG(BB, OB.head, OB.assoc || -1),
            oB = DB && QB.type == mB.Text && (BB.lineWrapping || QB.widgetLineBreaks) ? BB.coordsAtPos(OB.assoc < 0 && OB.head > QB.from ? OB.head - 1 : OB.head) : null;
          if (oB) {
            let OB = BB.dom.getBoundingClientRect(),
              DB = BB.textDirectionAt(QB.from),
              jB = BB.posAtCoords({
                x: GB == (DB == JO.LTR) ? OB.right - 1 : OB.left + 1,
                y: (oB.top + oB.bottom) / 2
              });
            if (null != jB) return YB.j.cursor(jB, GB ? -1 : 1)
          }
          return YB.j.cursor(GB ? QB.to : QB.from, GB ? -1 : 1)
        }(this, BB, OB, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(BB, OB, GB) {
        return bG(this, BB, function(BB, OB, GB, DB) {
          let QB = OB.head,
            oB = GB ? 1 : -1;
          if (QB == (GB ? BB.state.doc.length : 0)) return YB.j.cursor(QB, OB.assoc);
          let jB, yB = OB.goalColumn,
            JB = BB.contentDOM.getBoundingClientRect(),
            MB = BB.coordsAtPos(QB, OB.assoc || ((OB.empty ? GB : OB.head == OB.from) ? 1 : -1)),
            PB = BB.documentTop;
          if (MB) null == yB && (yB = MB.left - JB.left), jB = oB < 0 ? MB.top : MB.bottom;
          else {
            let OB = BB.viewState.lineBlockAt(QB);
            null == yB && (yB = Math.min(JB.right - JB.left, BB.defaultCharacterWidth * (QB - OB.from))), jB = (oB < 0 ? OB.top : OB.bottom) + PB
          }
          let zB = JB.left + yB,
            lB = BB.viewState.heightOracle.textHeight >> 1,
            pB = null !== DB && void 0 !== DB ? DB : lB;
          for (let qB = 0;; qB += lB) {
            let OB = jB + (pB + qB) * oB,
              DB = HG(BB, {
                x: zB,
                y: OB
              }, !1, oB);
            if (GB ? OB > JB.bottom : OB < JB.top) return YB.j.cursor(DB.pos, DB.assoc);
            let QB = BB.coordsAtPos(DB.pos, DB.assoc),
              MB = QB ? (QB.top + QB.bottom) / 2 : 0;
            if (!QB || (GB ? MB > jB : MB < jB)) return YB.j.cursor(DB.pos, DB.assoc, void 0, yB)
          }
        }(this, BB, OB, GB))
      }
      domAtPos(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(BB, OB)
      }
      posAtDOM(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(BB, OB)
      }
      posAtCoords(BB) {
        let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let GB = HG(this, BB, OB);
        return GB && GB.pos
      }
      posAndSideAtCoords(BB) {
        let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), HG(this, BB, OB)
      }
      coordsAtPos(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let GB = this.docView.coordsAt(BB, OB);
        if (!GB || GB.left == GB.right) return GB;
        let YB = this.state.doc.lineAt(BB),
          DB = this.bidiSpans(YB);
        return HB(GB, DB[WO.find(DB, BB - YB.from, -1, OB)].dir == JO.LTR == OB > 0)
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
        return !this.state.facet(wO) || BB < this.viewport.from || BB > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(BB))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(BB) {
        if (BB.length > kD) return fO(BB.length);
        let OB, GB = this.textDirectionAt(BB.from);
        for (let DB of this.bidiCache)
          if (DB.from == BB.from && DB.dir == GB && (DB.fresh || AO(DB.isolates, OB = QG(this, BB)))) return DB.order;
        OB || (OB = QG(this, BB));
        let YB = UO(BB.text, GB, OB);
        return this.bidiCache.push(new KD(BB.from, BB.to, GB, OB, !0, YB)), YB
      }
      get hasFocus() {
        var BB;
        return (this.dom.ownerDocument.hasFocus() || nB.safari && (null === (BB = this.inputState) || void 0 === BB ? void 0 : BB.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          GO(this.contentDOM), this.docView.updateSelection()
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
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var GB, DB, QB, oB;
        return aO.of(new hO("number" == typeof BB ? YB.j.cursor(BB) : BB, null !== (GB = OB.y) && void 0 !== GB ? GB : "nearest", null !== (DB = OB.x) && void 0 !== DB ? DB : "nearest", null !== (QB = OB.yMargin) && void 0 !== QB ? QB : 5, null !== (oB = OB.xMargin) && void 0 !== oB ? oB : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: BB,
          scrollLeft: OB
        } = this.scrollDOM, GB = this.viewState.scrollAnchorAt(BB);
        return aO.of(new hO(YB.j.cursor(GB.from), "start", "start", GB.top - BB, OB, !0))
      }
      setTabFocusMode(BB) {
        null == BB ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof BB ? this.inputState.tabFocusMode = BB ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + BB)
      }
      static domEventHandlers(BB) {
        return vO.define((() => ({})), {
          eventHandlers: BB
        })
      }
      static domEventObservers(BB) {
        return vO.define((() => ({})), {
          eventObservers: BB
        })
      }
      static theme(BB, OB) {
        let GB = DB.d.newName(),
          YB = [PD.of(GB), yG.of(ND(`.${GB}`, BB))];
        return OB && OB.dark && YB.push(zD.of(!0)), YB
      }
      static baseTheme(BB) {
        return YB.r.lowest(yG.of(ND("." + lD, BB, ZD)))
      }
      static findFromDOM(BB) {
        var OB;
        let GB = BB.querySelector(".cm-content"),
          YB = GB && zG.get(GB) || zG.get(BB);
        return (null === (OB = null === YB || void 0 === YB ? void 0 : YB.root) || void 0 === OB ? void 0 : OB.view) || null
      }
    }
    fD.styleModule = yG, fD.inputHandler = LO, fD.clipboardInputFilter = rO, fD.clipboardOutputFilter = XO, fD.scrollHandler = cO, fD.focusChangeEffect = gO, fD.perLineTextDirection = wO, fD.exceptionSink = FO, fD.updateListener = iO, fD.editable = bO, fD.mouseSelectionStyle = IO, fD.dragMovesSelection = mO, fD.clickAddsSelectionRange = uO, fD.TD = BG, fD.blockWrappers = OG, fD.outerDecorations = GG, fD.atomicRanges = YG, fD.bidiIsolatedRanges = DG, fD.cursorScrollMargin = YB.o.define({
      combine: BB => {
        let OB = 5,
          GB = 5;
        for (let YB of BB) "number" == typeof YB ? OB = GB = YB : ({
          x: OB,
          y: GB
        } = YB);
        return {
          x: OB,
          y: GB
        }
      }
    }), fD.scrollMargins = oG, fD.darkTheme = zD, fD.cspNonce = YB.o.define({
      combine: BB => BB.length ? BB[0] : ""
    }), fD.contentAttributes = tO, fD.editorAttributes = xO, fD.lineWrapping = fD.contentAttributes.of({
      class: "cm-lineWrapping"
    }), fD.announce = YB.D.define();
    const kD = 4096,
      dD = {};
    class KD {
      constructor(BB, OB, GB, YB, DB, QB) {
        this.from = BB, this.to = OB, this.dir = GB, this.isolates = YB, this.fresh = DB, this.order = QB
      }
      static update(BB, OB) {
        if (OB.empty && !BB.some((BB => BB.fresh))) return BB;
        let GB = [],
          YB = BB.length ? BB[BB.length - 1].dir : JO.LTR;
        for (let DB = Math.max(0, BB.length - 10); DB < BB.length; DB++) {
          let QB = BB[DB];
          QB.dir != YB || OB.touchesRange(QB.from, QB.to) || GB.push(new KD(OB.mapPos(QB.from, 1), OB.mapPos(QB.to, -1), QB.dir, QB.isolates, !1, QB.order))
        }
        return GB
      }
    }

    function uD(BB, OB, GB) {
      for (let YB = BB.state.facet(OB), DB = YB.length - 1; DB >= 0; DB--) {
        let OB = YB[DB],
          QB = "function" == typeof OB ? OB(BB) : OB;
        QB && UB(QB, GB)
      }
      return GB
    }
    const mD = nB.mac ? "mac" : nB.windows ? "win" : nB.linux ? "linux" : "key";

    function ID(BB, OB, GB) {
      return OB.altKey && (BB = "Alt-" + BB), OB.ctrlKey && (BB = "Ctrl-" + BB), OB.metaKey && (BB = "Meta-" + BB), !1 !== GB && OB.shiftKey && (BB = "Shift-" + BB), BB
    }
    const FD = YB.r.default(fD.domEventHandlers({
        keydown: (BB, OB) => cD(gD(OB.state), BB, OB, "editor")
      })),
      iD = YB.o.define({
        enables: FD
      }),
      LD = new WeakMap;

    function gD(BB) {
      let OB = BB.facet(iD),
        GB = LD.get(OB);
      return GB || LD.set(OB, GB = function(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mD,
          GB = Object.create(null),
          YB = Object.create(null),
          DB = (BB, OB) => {
            let GB = YB[BB];
            if (null == GB) YB[BB] = OB;
            else if (GB != OB) throw new Error("Key binding " + BB + " is used both as a regular binding and as a multi-stroke prefix")
          },
          QB = (BB, YB, QB, oB, jB) => {
            var yB, JB;
            let MB = GB[BB] || (GB[BB] = Object.create(null)),
              PB = YB.split(/ (?!$)/).map((BB => function(BB, OB) {
                const GB = BB.split(/-(?!$)/);
                let YB, DB, QB, oB, jB = GB[GB.length - 1];
                "Space" == jB && (jB = " ");
                for (let yB = 0; yB < GB.length - 1; ++yB) {
                  const BB = GB[yB];
                  if (/^(cmd|meta|m)$/i.test(BB)) oB = !0;
                  else if (/^a(lt)?$/i.test(BB)) YB = !0;
                  else if (/^(c|ctrl|control)$/i.test(BB)) DB = !0;
                  else if (/^s(hift)?$/i.test(BB)) QB = !0;
                  else {
                    if (!/^mod$/i.test(BB)) throw new Error("Unrecognized modifier name: " + BB);
                    "mac" == OB ? oB = !0 : DB = !0
                  }
                }
                return YB && (jB = "Alt-" + jB), DB && (jB = "Ctrl-" + jB), oB && (jB = "Meta-" + jB), QB && (jB = "Shift-" + jB), jB
              }(BB, OB)));
            for (let OB = 1; OB < PB.length; OB++) {
              let GB = PB.slice(0, OB).join(" ");
              DB(GB, !0), MB[GB] || (MB[GB] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [OB => {
                  let YB = XD = {
                    view: OB,
                    prefix: GB,
                    scope: BB
                  };
                  return setTimeout((() => {
                    XD == YB && (XD = null)
                  }), wD), !0
                }]
              })
            }
            let zB = PB.join(" ");
            DB(zB, !1);
            let lB = MB[zB] || (MB[zB] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (JB = null === (yB = MB._any) || void 0 === yB ? void 0 : yB.run) || void 0 === JB ? void 0 : JB.slice()) || []
            });
            QB && lB.run.push(QB), oB && (lB.preventDefault = !0), jB && (lB.stopPropagation = !0)
          };
        for (let oB of BB) {
          let BB = oB.scope ? oB.scope.split(" ") : ["editor"];
          if (oB.any)
            for (let OB of BB) {
              let BB = GB[OB] || (GB[OB] = Object.create(null));
              BB._any || (BB._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: YB
              } = oB;
              for (let OB in BB) BB[OB].run.push((BB => YB(BB, ED)))
            }
          let YB = oB[OB] || oB.key;
          if (YB)
            for (let OB of BB) QB(OB, YB, oB.run, oB.preventDefault, oB.stopPropagation), oB.shift && QB(OB, "Shift-" + YB, oB.shift, oB.preventDefault, oB.stopPropagation)
        }
        return GB
      }(OB.reduce(((BB, OB) => BB.concat(OB)), []))), GB
    }

    function rD(BB, OB, GB) {
      return cD(gD(BB.state), OB, BB, GB)
    }
    let XD = null;
    const wD = 4e3;
    let ED = null;

    function cD(BB, OB, GB, DB) {
      ED = OB;
      let JB = function(BB) {
          var OB = !(jB && BB.metaKey && BB.shiftKey && !BB.ctrlKey && !BB.altKey || yB && BB.shiftKey && BB.key && 1 == BB.key.length || "Unidentified" == BB.key) && BB.key || (BB.shiftKey ? oB : QB)[BB.keyCode] || BB.key || "Unidentified";
          return "Esc" == OB && (OB = "Escape"), "Del" == OB && (OB = "Delete"), "Left" == OB && (OB = "ArrowLeft"), "Up" == OB && (OB = "ArrowUp"), "Right" == OB && (OB = "ArrowRight"), "Down" == OB && (OB = "ArrowDown"), OB
        }(OB),
        MB = (0, YB.O)(JB, 0),
        PB = (0, YB.R)(MB) == JB.length && " " != JB,
        zB = "",
        lB = !1,
        pB = !1,
        qB = !1;
      XD && XD.view == GB && XD.scope == DB && (zB = XD.prefix + " ", lY.indexOf(OB.keyCode) < 0 && (pB = !0, XD = null));
      let ZB, NB, RB = new Set,
        WB = BB => {
          if (BB) {
            for (let OB of BB.run)
              if (!RB.has(OB) && (RB.add(OB), OB(GB))) return BB.stopPropagation && (qB = !0), !0;
            BB.preventDefault && (BB.stopPropagation && (qB = !0), pB = !0)
          }
          return !1
        },
        AB = BB[DB];
      return AB && (WB(AB[zB + ID(JB, OB, !PB)]) ? lB = !0 : !PB || !(OB.altKey || OB.metaKey || OB.ctrlKey) || nB.windows && OB.ctrlKey && OB.altKey || nB.mac && OB.altKey && !OB.ctrlKey && !OB.metaKey || !(ZB = QB[OB.keyCode]) || ZB == JB ? PB && OB.shiftKey && WB(AB[zB + ID(JB, OB, !0)]) && (lB = !0) : (WB(AB[zB + ID(ZB, OB, !0)]) || OB.shiftKey && (NB = oB[OB.keyCode]) != JB && NB != ZB && WB(AB[zB + ID(NB, OB, !1)])) && (lB = !0), !lB && WB(AB._any) && (lB = !0)), pB && (lB = !0), lB && qB && OB.stopPropagation(), ED = null, lB
    }
    class hD {
      constructor(BB, OB, GB, YB, DB) {
        this.className = BB, this.left = OB, this.top = GB, this.width = YB, this.height = DB
      }
      draw() {
        let BB = document.createElement("div");
        return BB.className = this.className, this.adjust(BB), BB
      }
      update(BB, OB) {
        return OB.className == this.className && (this.adjust(BB), !0)
      }
      adjust(BB) {
        BB.style.left = this.left + "px", BB.style.top = this.top + "px", null != this.width && (BB.style.width = this.width + "px"), BB.style.height = this.height + "px"
      }
      eq(BB) {
        return this.left == BB.left && this.top == BB.top && this.width == BB.width && this.height == BB.height && this.className == BB.className
      }
      static forRange(BB, OB, GB) {
        if (GB.empty) {
          let YB = BB.coordsAtPos(GB.head, GB.assoc || 1);
          if (!YB) return [];
          let DB = aD(BB);
          return [new hD(OB, YB.left - DB.left, YB.top - DB.top, null, YB.bottom - YB.top)]
        }
        return function(BB, OB, GB) {
          if (GB.to <= BB.viewport.from || GB.from >= BB.viewport.to) return [];
          let YB = Math.max(GB.from, BB.viewport.from),
            DB = Math.min(GB.to, BB.viewport.to),
            QB = BB.textDirection == JO.LTR,
            oB = BB.contentDOM,
            jB = oB.getBoundingClientRect(),
            yB = aD(BB),
            JB = oB.querySelector(".cm-line"),
            MB = JB && window.getComputedStyle(JB),
            PB = jB.left + (MB ? parseInt(MB.paddingLeft) + Math.min(0, parseInt(MB.textIndent)) : 0),
            zB = jB.right - (MB ? parseInt(MB.paddingRight) : 0),
            lB = hG(BB, YB, 1),
            pB = hG(BB, DB, -1),
            qB = lB.type == mB.Text ? lB : null,
            ZB = pB.type == mB.Text ? pB : null;
          qB && (BB.lineWrapping || lB.widgetLineBreaks) && (qB = eD(BB, YB, 1, qB));
          ZB && (BB.lineWrapping || pB.widgetLineBreaks) && (ZB = eD(BB, DB, -1, ZB));
          if (qB && ZB && qB.from == ZB.from && qB.to == ZB.to) return RB(WB(GB.from, GB.to, qB));
          {
            let OB = qB ? WB(GB.from, null, qB) : AB(lB, !1),
              YB = ZB ? WB(null, GB.to, ZB) : AB(pB, !0),
              DB = [];
            return (qB || lB).to < (ZB || pB).from - (qB && ZB ? 1 : 0) || lB.widgetLineBreaks > 1 && OB.bottom + BB.defaultLineHeight / 2 < YB.top ? DB.push(NB(PB, OB.bottom, zB, YB.top)) : OB.bottom < YB.top && BB.elementAtHeight((OB.bottom + YB.top) / 2).type == mB.Text && (OB.bottom = YB.top = (OB.bottom + YB.top) / 2), RB(OB).concat(DB).concat(RB(YB))
          }

          function NB(BB, GB, YB, DB) {
            return new hD(OB, BB - yB.left, GB - yB.top, Math.max(0, YB - BB), DB - GB)
          }

          function RB(BB) {
            let {
              top: OB,
              bottom: GB,
              horizontal: YB
            } = BB, DB = [];
            for (let QB = 0; QB < YB.length; QB += 2) DB.push(NB(YB[QB], OB, YB[QB + 1], GB));
            return DB
          }

          function WB(OB, GB, YB) {
            let DB = 1e9,
              oB = -1e9,
              jB = [];

            function yB(OB, GB, yB, JB, MB) {
              let lB = BB.coordsAtPos(OB, OB == YB.to ? -2 : 2),
                pB = BB.coordsAtPos(yB, yB == YB.from ? 2 : -2);
              lB && pB && (DB = Math.min(lB.top, pB.top, DB), oB = Math.max(lB.bottom, pB.bottom, oB), MB == JO.LTR ? jB.push(QB && GB ? PB : lB.left, QB && JB ? zB : pB.right) : jB.push(!QB && JB ? PB : pB.left, !QB && GB ? zB : lB.right))
            }
            let JB = null !== OB && void 0 !== OB ? OB : YB.from,
              MB = null !== GB && void 0 !== GB ? GB : YB.to;
            for (let QB of BB.xBB)
              if (QB.to > JB && QB.from < MB)
                for (let YB = Math.max(QB.from, JB), DB = Math.min(QB.to, MB);;) {
                  let QB = BB.state.doc.lineAt(YB);
                  for (let oB of BB.bidiSpans(QB)) {
                    let BB = oB.from + QB.from,
                      jB = oB.to + QB.from;
                    if (BB >= DB) break;
                    jB > YB && yB(Math.max(BB, YB), null == OB && BB <= JB, Math.min(jB, DB), null == GB && jB >= MB, oB.dir)
                  }
                  if (YB = QB.to + 1, YB >= DB) break
                }
            return 0 == jB.length && yB(JB, null == OB, MB, null == GB, BB.textDirection), {
              top: DB,
              bottom: oB,
              horizontal: jB
            }
          }

          function AB(BB, OB) {
            let GB = jB.top + (OB ? BB.top : BB.bottom);
            return {
              top: GB,
              bottom: GB,
              horizontal: []
            }
          }
        }(BB, OB, GB)
      }
    }

    function aD(BB) {
      let OB = BB.scrollDOM.getBoundingClientRect();
      return {
        left: (BB.textDirection == JO.LTR ? OB.left : OB.right - BB.scrollDOM.clientWidth * BB.scaleX) - BB.scrollDOM.scrollLeft * BB.scaleX,
        top: OB.top - BB.scrollDOM.scrollTop * BB.scaleY
      }
    }

    function eD(BB, OB, GB, YB) {
      let DB = BB.coordsAtPos(OB, 2 * GB);
      if (!DB) return YB;
      let QB = BB.dom.getBoundingClientRect(),
        oB = (DB.top + DB.bottom) / 2,
        jB = BB.posAtCoords({
          x: QB.left + 1,
          y: oB
        }),
        yB = BB.posAtCoords({
          x: QB.right - 1,
          y: oB
        });
      return null == jB || null == yB ? YB : {
        from: Math.max(YB.from, Math.min(jB, yB)),
        to: Math.min(YB.to, Math.max(jB, yB))
      }
    }
    class TD {
      constructor(BB, OB) {
        this.view = BB, this.layer = OB, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = BB.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), OB.above && this.dom.classList.add("cm-layer-above"), OB.class && this.dom.classList.add(OB.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(BB.state), BB.requestMeasure(this.measureReq), OB.mount && OB.mount(this.dom, BB)
      }
      update(BB) {
        BB.startState.facet(bD) != BB.state.facet(bD) && this.setOrder(BB.state), (this.layer.update(BB, this.dom) || BB.geometryChanged) && (this.scale(), BB.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(BB) {
        !1 !== this.layer.updateOnDocViewUpdate && BB.requestMeasure(this.measureReq)
      }
      setOrder(BB) {
        let OB = 0,
          GB = BB.facet(bD);
        for (; OB < GB.length && GB[OB] != this.layer;) OB++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - OB)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: BB,
          scaleY: OB
        } = this.view;
        BB == this.scaleX && OB == this.scaleY || (this.scaleX = BB, this.scaleY = OB, this.dom.style.transform = `scale(${1/BB}, ${1/OB})`)
      }
      draw(BB) {
        if (BB.length != this.drawn.length || BB.some(((BB, OB) => {
            return GB = BB, YB = this.drawn[OB], !(GB.constructor == YB.constructor && GB.eq(YB));
            var GB, YB
          }))) {
          let OB = this.dom.firstChild,
            GB = 0;
          for (let YB of BB) YB.update && OB && YB.constructor && this.drawn[GB].constructor && YB.update(OB, this.drawn[GB]) ? (OB = OB.nextSibling, GB++) : this.dom.insertBefore(YB.draw(), OB);
          for (; OB;) {
            let BB = OB.nextSibling;
            OB.remove(), OB = BB
          }
          this.drawn = BB, nB.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const bD = YB.o.define();

    function CD(BB) {
      return [vO.define((OB => new TD(OB, BB))), bD.of(BB)]
    }
    const HD = YB.o.define({
      combine: BB => (0, YB.V)(BB, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (BB, OB) => Math.min(BB, OB),
        drawRangeCursor: (BB, OB) => BB || OB
      })
    });

    function vD() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [HD.of(BB), xD, BQ, OQ, EO.of(!0)]
    }

    function sD(BB) {
      return BB.startState.facet(HD) != BB.state.facet(HD)
    }
    const xD = CD({
      above: !0,
      markers(BB) {
        let {
          state: OB
        } = BB, GB = OB.facet(HD), DB = [];
        for (let QB of OB.selection.JZ) {
          let oB = QB == OB.selection.main;
          if (QB.empty || GB.drawRangeCursor && !(oB && nB.ios && GB.iosSelectionHandles)) {
            let OB = oB ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              GB = QB.empty ? QB : YB.j.cursor(QB.head, QB.assoc);
            for (let YB of hD.forRange(BB, OB, GB)) DB.push(YB)
          }
        }
        return DB
      },
      update(BB, OB) {
        BB.transactions.some((BB => BB.selection)) && (OB.style.animationName = "cm-blink" == OB.style.animationName ? "cm-blink2" : "cm-blink");
        let GB = sD(BB);
        return GB && tD(BB.state, OB), BB.docChanged || BB.selectionSet || GB
      },
      mount(BB, OB) {
        tD(OB.state, BB)
      },
      class: "cm-cursorLayer"
    });

    function tD(BB, OB) {
      OB.style.animationDuration = BB.facet(HD).cursorBlinkRate + "ms"
    }
    const BQ = CD({
        above: !1,
        markers(BB) {
          let OB = [],
            {
              main: GB,
              JZ: DB
            } = BB.state.selection;
          for (let YB of DB)
            if (!YB.empty)
              for (let GB of hD.forRange(BB, "cm-selectionBackground", YB)) OB.push(GB);
          if (nB.ios && !GB.empty && BB.state.facet(HD).iosSelectionHandles) {
            for (let DB of hD.forRange(BB, "cm-selectionHandle cm-selectionHandle-start", YB.j.cursor(GB.from, 1))) OB.push(DB);
            for (let DB of hD.forRange(BB, "cm-selectionHandle cm-selectionHandle-end", YB.j.cursor(GB.to, 1))) OB.push(DB)
          }
          return OB
        },
        update: (BB, OB) => BB.docChanged || BB.selectionSet || BB.viewportChanged || sD(BB),
        class: "cm-selectionLayer"
      }),
      OQ = YB.r.highest(fD.theme({
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
      GQ = YB.D.define({
        map: (BB, OB) => null == BB ? null : OB.mapPos(BB)
      }),
      YQ = YB.G.define({
        create: () => null,
        update: (BB, OB) => (null != BB && (BB = OB.changes.mapPos(BB)), OB.effects.reduce(((BB, OB) => OB.is(GQ) ? OB.value : BB), BB))
      }),
      DQ = vO.fromClass(class {
        constructor(BB) {
          this.view = BB, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(BB) {
          var OB;
          let GB = BB.state.field(YQ);
          null == GB ? null != this.cursor && (null === (OB = this.cursor) || void 0 === OB || OB.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (BB.startState.field(YQ) != GB || BB.docChanged || BB.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: BB
          } = this, OB = BB.state.field(YQ), GB = null != OB && BB.coordsAtPos(OB);
          if (!GB) return null;
          let YB = BB.scrollDOM.getBoundingClientRect();
          return {
            left: GB.left - YB.left + BB.scrollDOM.scrollLeft * BB.scaleX,
            top: GB.top - YB.top + BB.scrollDOM.scrollTop * BB.scaleY,
            height: GB.bottom - GB.top
          }
        }
        drawCursor(BB) {
          if (this.cursor) {
            let {
              scaleX: OB,
              scaleY: GB
            } = this.view;
            BB ? (this.cursor.style.left = BB.left / OB + "px", this.cursor.style.top = BB.top / GB + "px", this.cursor.style.height = BB.height / GB + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(BB) {
          this.view.state.field(YQ) != BB && this.view.dispatch({
            effects: GQ.of(BB)
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

    function QQ() {
      return [YQ, DQ]
    }

    function oQ(BB, OB, GB, YB, DB) {
      OB.lastIndex = 0;
      for (let QB, oB = BB.iterRange(GB, YB), jB = GB; !oB.next().done; jB += oB.value.length)
        if (!oB.lineBreak)
          for (; QB = OB.exec(oB.value);) DB(jB + QB.index, QB)
    }
    class jQ {
      constructor(BB) {
        const {
          regexp: OB,
          decoration: GB,
          decorate: YB,
          boundary: DB,
          maxLength: QB = 1e3
        } = BB;
        if (!OB.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = OB, YB) this.addMatch = (BB, OB, GB, DB) => YB(DB, GB, GB + BB[0].length, BB, OB);
        else if ("function" == typeof GB) this.addMatch = (BB, OB, YB, DB) => {
          let QB = GB(BB, OB, YB);
          QB && DB(YB, YB + BB[0].length, QB)
        };
        else {
          if (!GB) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (BB, OB, YB, DB) => DB(YB, YB + BB[0].length, GB)
        }
        this.boundary = DB, this.maxLength = QB
      }
      createDeco(BB) {
        let OB = new YB.v,
          GB = OB.add.bind(OB);
        for (let {
            from: YB,
            to: DB
          }
          of
          function(BB, OB) {
            let GB = BB.xBB;
            if (1 == GB.length && GB[0].from == BB.viewport.from && GB[0].to == BB.viewport.to) return GB;
            let YB = [];
            for (let {
                from: DB,
                to: QB
              }
              of GB) DB = Math.max(BB.state.doc.lineAt(DB).from, DB - OB), QB = Math.min(BB.state.doc.lineAt(QB).to, QB + OB), YB.length && YB[YB.length - 1].to >= DB ? YB[YB.length - 1].to = QB : YB.push({
              from: DB,
              to: QB
            });
            return YB
          }(BB, this.maxLength)) oQ(BB.state.doc, this.regexp, YB, DB, ((OB, YB) => this.addMatch(YB, BB, OB, GB)));
        return OB.finish()
      }
      updateDeco(BB, OB) {
        let GB = 1e9,
          YB = -1;
        return BB.docChanged && BB.changes.iterChanges(((OB, DB, QB, oB) => {
          oB >= BB.view.viewport.from && QB <= BB.view.viewport.to && (GB = Math.min(QB, GB), YB = Math.max(oB, YB))
        })), BB.viewportMoved || YB - GB > 1e3 ? this.createDeco(BB.view) : YB > -1 ? this.updateRange(BB.view, OB.map(BB.changes), GB, YB) : OB
      }
      updateRange(BB, OB, GB, YB) {
        for (let DB of BB.xBB) {
          let QB = Math.max(DB.from, GB),
            oB = Math.min(DB.to, YB);
          if (oB >= QB) {
            let GB = BB.state.doc.lineAt(QB),
              YB = GB.to < oB ? BB.state.doc.lineAt(oB) : GB,
              jB = Math.max(DB.from, GB.from),
              yB = Math.min(DB.to, YB.to);
            if (this.boundary) {
              for (; QB > GB.from; QB--)
                if (this.boundary.test(GB.text[QB - 1 - GB.from])) {
                  jB = QB;
                  break
                } for (; oB < YB.to; oB++)
                if (this.boundary.test(YB.text[oB - YB.from])) {
                  yB = oB;
                  break
                }
            }
            let JB, MB = [],
              PB = (BB, OB, GB) => MB.push(GB.range(BB, OB));
            if (GB == YB)
              for (this.regexp.lastIndex = jB - GB.from;
                (JB = this.regexp.exec(GB.text)) && JB.index < yB - GB.from;) this.addMatch(JB, BB, JB.index + GB.from, PB);
            else oQ(BB.state.doc, this.regexp, jB, yB, ((OB, GB) => this.addMatch(GB, BB, OB, PB)));
            OB = OB.update({
              filterFrom: jB,
              filterTo: yB,
              filter: (BB, OB) => BB < jB || OB > yB,
              add: MB
            })
          }
        }
        return OB
      }
    }
    const yQ = null != /x/.unicode ? "gu" : "g",
      JQ = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", yQ),
      MQ = {
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
    let PQ = null;
    const zQ = YB.o.define({
      combine(BB) {
        let OB = (0, YB.V)(BB, {
          render: null,
          specialChars: JQ,
          addSpecialChars: null
        });
        return (OB.replaceTabs = ! function() {
          var BB;
          if (null == PQ && "undefined" != typeof document && document.body) {
            let OB = document.body.style;
            PQ = null != (null !== (BB = OB.tabSize) && void 0 !== BB ? BB : OB.MozTabSize)
          }
          return PQ || !1
        }()) && (OB.specialChars = new RegExp("\t|" + OB.specialChars.source, yQ)), OB.addSpecialChars && (OB.specialChars = new RegExp(OB.specialChars.source + "|" + OB.addSpecialChars.source, yQ)), OB
      }
    });

    function lQ() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [zQ.of(BB), pQ || (pQ = vO.fromClass(class {
        constructor(BB) {
          this.view = BB, this.TD = IB.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(BB.state.facet(zQ)), this.TD = this.decorator.createDeco(BB)
        }
        makeDecorator(BB) {
          return new jQ({
            regexp: BB.specialChars,
            decoration: (OB, GB, DB) => {
              let {
                doc: QB
              } = GB.state, oB = (0, YB.O)(OB[0], 0);
              if (9 == oB) {
                let BB = QB.lineAt(DB),
                  OB = GB.state.tabSize,
                  oB = (0, YB.W)(BB.text, OB, DB - BB.from);
                return IB.replace({
                  widget: new ZQ((OB - oB % OB) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[oB] || (this.decorationCache[oB] = IB.replace({
                widget: new qQ(BB, oB)
              }))
            },
            boundary: BB.replaceTabs ? void 0 : /[^]/
          })
        }
        update(BB) {
          let OB = BB.state.facet(zQ);
          BB.startState.facet(zQ) != OB ? (this.decorator = this.makeDecorator(OB), this.TD = this.decorator.createDeco(BB.view)) : this.TD = this.decorator.updateDeco(BB, this.TD)
        }
      }, {
        TD: BB => BB.TD
      }))]
    }
    let pQ = null;
    class qQ extends uB {
      constructor(BB, OB) {
        super(), this.options = BB, this.code = OB
      }
      eq(BB) {
        return BB.code == this.code
      }
      toDOM(BB) {
        let OB = function(BB) {
            return BB >= 32 ? "\u2022" : 10 == BB ? "\u2424" : String.fromCharCode(9216 + BB)
          }(this.code),
          GB = BB.state.phrase("Control character") + " " + (MQ[this.code] || "0x" + this.code.toString(16)),
          YB = this.options.render && this.options.render(this.code, GB, OB);
        if (YB) return YB;
        let DB = document.createElement("span");
        return DB.textContent = OB, DB.title = GB, DB.setAttribute("aria-label", GB), DB.className = "cm-specialChar", DB
      }
      ignoreEvent() {
        return !1
      }
    }
    class ZQ extends uB {
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

    function NQ() {
      return WQ
    }
    const RQ = IB.line({
        class: "cm-activeLine"
      }),
      WQ = vO.fromClass(class {
        constructor(BB) {
          this.TD = this.getDeco(BB)
        }
        update(BB) {
          (BB.docChanged || BB.selectionSet) && (this.TD = this.getDeco(BB.view))
        }
        getDeco(BB) {
          let OB = -1,
            GB = [];
          for (let YB of BB.state.selection.JZ) {
            let DB = BB.lineBlockAt(YB.head);
            DB.from > OB && (GB.push(RQ.range(DB.from)), OB = DB.from)
          }
          return IB.set(GB)
        }
      }, {
        TD: BB => BB.TD
      });
    class AQ extends uB {
      constructor(BB) {
        super(), this.content = BB
      }
      toDOM(BB) {
        let OB = document.createElement("span");
        return OB.className = "cm-placeholder", OB.style.pointerEvents = "none", OB.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(BB) : this.content.cloneNode(!0)), OB.setAttribute("aria-hidden", "true"), OB
      }
      coordsAt(BB) {
        let OB = BB.firstChild ? hB(BB.firstChild) : [];
        if (!OB.length) return null;
        let GB = window.getComputedStyle(BB.parentNode),
          YB = HB(OB[0], "rtl" != GB.direction),
          DB = parseInt(GB.lineHeight);
        return YB.bottom - YB.top > 1.5 * DB ? {
          left: YB.left,
          right: YB.right,
          top: YB.top,
          bottom: YB.top + DB
        } : YB
      }
      ignoreEvent() {
        return !1
      }
    }

    function VQ(BB) {
      let OB = vO.fromClass(class {
        constructor(OB) {
          this.view = OB, this.placeholder = BB ? IB.set([IB.widget({
            widget: new AQ(BB),
            side: 1
          }).range(0)]) : IB.none
        }
        get TD() {
          return this.view.state.doc.length ? IB.none : this.placeholder
        }
      }, {
        TD: BB => BB.TD
      });
      return "string" == typeof BB ? [OB, fD.contentAttributes.of({
        "aria-placeholder": BB
      })] : OB
    }
    const SQ = 2e3;

    function nQ(BB, OB) {
      let GB = BB.posAtCoords({
          x: OB.clientX,
          y: OB.clientY
        }, !1),
        DB = BB.state.doc.lineAt(GB),
        QB = GB - DB.from,
        oB = QB > SQ ? -1 : QB == DB.length ? function(BB, OB) {
          let GB = BB.coordsAtPos(BB.viewport.from);
          return GB ? Math.round(Math.abs((GB.left - OB) / BB.defaultCharacterWidth)) : -1
        }(BB, OB.clientX) : (0, YB.W)(DB.text, BB.state.tabSize, GB - DB.from);
      return {
        line: DB.number,
        col: oB,
        off: QB
      }
    }

    function UQ(BB, OB) {
      let GB = nQ(BB, OB),
        DB = BB.state.selection;
      return GB ? {
        update(BB) {
          if (BB.docChanged) {
            let OB = BB.changes.mapPos(BB.startState.doc.line(GB.line).from),
              YB = BB.state.doc.lineAt(OB);
            GB = {
              line: YB.number,
              col: GB.col,
              off: Math.min(GB.off, YB.length)
            }, DB = DB.map(BB.changes)
          }
        },
        get(OB, QB, oB) {
          let jB = nQ(BB, OB);
          if (!jB) return DB;
          let yB = function(BB, OB, GB) {
            let DB = Math.min(OB.line, GB.line),
              QB = Math.max(OB.line, GB.line),
              oB = [];
            if (OB.off > SQ || GB.off > SQ || OB.col < 0 || GB.col < 0) {
              let jB = Math.min(OB.off, GB.off),
                yB = Math.max(OB.off, GB.off);
              for (let OB = DB; OB <= QB; OB++) {
                let GB = BB.doc.line(OB);
                GB.length <= yB && oB.push(YB.j.range(GB.from + jB, GB.to + yB))
              }
            } else {
              let jB = Math.min(OB.col, GB.col),
                yB = Math.max(OB.col, GB.col);
              for (let OB = DB; OB <= QB; OB++) {
                let GB = BB.doc.line(OB),
                  DB = (0, YB._)(GB.text, jB, BB.tabSize, !0);
                if (DB < 0) oB.push(YB.j.cursor(GB.to));
                else {
                  let OB = (0, YB._)(GB.text, yB, BB.tabSize);
                  oB.push(YB.j.range(GB.from + DB, GB.from + OB))
                }
              }
            }
            return oB
          }(BB.state, GB, jB);
          return yB.length ? oB ? YB.j.create(yB.concat(DB.JZ)) : YB.j.create(yB) : DB
        }
      } : null
    }

    function fQ(BB) {
      let OB = (null === BB || void 0 === BB ? void 0 : BB.eventFilter) || (BB => BB.altKey && 0 == BB.button);
      return fD.mouseSelectionStyle.of(((BB, GB) => OB(GB) ? UQ(BB, GB) : null))
    }
    const kQ = {
        Alt: [18, BB => !!BB.altKey],
        Control: [17, BB => !!BB.ctrlKey],
        Shift: [16, BB => !!BB.shiftKey],
        Meta: [91, BB => !!BB.metaKey]
      },
      dQ = {
        style: "cursor: crosshair"
      };

    function KQ() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [OB, GB] = kQ[BB.key || "Alt"],
        YB = vO.fromClass(class {
          constructor(BB) {
            this.view = BB, this.isDown = !1
          }
          set(BB) {
            this.isDown != BB && (this.isDown = BB, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(BB) {
              this.set(BB.keyCode == OB || GB(BB))
            },
            keyup(BB) {
              BB.keyCode != OB && GB(BB) || this.set(!1)
            },
            mousemove(BB) {
              this.set(GB(BB))
            }
          }
        });
      return [YB, fD.contentAttributes.of((BB => {
        var OB;
        return (null === (OB = BB.plugin(YB)) || void 0 === OB ? void 0 : OB.isDown) ? dQ : null
      }))]
    }
    const uQ = "-10000px";
    class mQ {
      constructor(BB, OB, GB, YB) {
        this.facet = OB, this.createTooltipView = GB, this.removeTooltipView = YB, this.input = BB.state.facet(OB), this.tooltips = this.input.filter((BB => BB));
        let DB = null;
        this.tooltipViews = this.tooltips.map((BB => DB = GB(BB, DB)))
      }
      update(BB, OB) {
        var GB;
        let YB = BB.state.facet(this.facet),
          DB = YB.filter((BB => BB));
        if (YB === this.input) {
          for (let OB of this.tooltipViews) OB.update && OB.update(BB);
          return !1
        }
        let QB = [],
          oB = OB ? [] : null;
        for (let jB = 0; jB < DB.length; jB++) {
          let GB = DB[jB],
            YB = -1;
          if (GB) {
            for (let BB = 0; BB < this.tooltips.length; BB++) {
              let OB = this.tooltips[BB];
              OB && OB.create == GB.create && (YB = BB)
            }
            if (YB < 0) QB[jB] = this.createTooltipView(GB, jB ? QB[jB - 1] : null), oB && (oB[jB] = !!GB.above);
            else {
              let GB = QB[jB] = this.tooltipViews[YB];
              oB && (oB[jB] = OB[YB]), GB.update && GB.update(BB)
            }
          }
        }
        for (let jB of this.tooltipViews) QB.indexOf(jB) < 0 && (this.removeTooltipView(jB), null === (GB = jB.destroy) || void 0 === GB || GB.call(jB));
        return OB && (oB.forEach(((BB, GB) => OB[GB] = BB)), OB.length = oB.length), this.input = YB, this.tooltips = DB, this.tooltipViews = QB, !0
      }
    }

    function IQ(BB) {
      let OB = BB.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: OB.clientHeight,
        right: OB.clientWidth
      }
    }
    const FQ = YB.o.define({
        combine: BB => {
          var OB, GB, YB;
          return {
            position: nB.ios ? "absolute" : (null === (OB = BB.find((BB => BB.position))) || void 0 === OB ? void 0 : OB.position) || "fixed",
            parent: (null === (GB = BB.find((BB => BB.parent))) || void 0 === GB ? void 0 : GB.parent) || null,
            tooltipSpace: (null === (YB = BB.find((BB => BB.tooltipSpace))) || void 0 === YB ? void 0 : YB.tooltipSpace) || IQ
          }
        }
      }),
      iQ = new WeakMap,
      LQ = vO.fromClass(class {
        constructor(BB) {
          this.view = BB, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let OB = BB.state.facet(FQ);
          this.position = OB.position, this.parent = OB.parent, this.classes = BB.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new mQ(BB, wQ, ((BB, OB) => this.createTooltip(BB, OB)), (BB => {
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
          let OB = this.manager.update(BB, this.above);
          OB && this.observeIntersection();
          let GB = OB || BB.geometryChanged,
            YB = BB.state.facet(FQ);
          if (YB.position != this.position && !this.madeAbsolute) {
            this.position = YB.position;
            for (let BB of this.manager.tooltipViews) BB.dom.style.position = this.position;
            GB = !0
          }
          if (YB.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = YB.parent, this.createContainer();
            for (let BB of this.manager.tooltipViews) this.container.appendChild(BB.dom);
            GB = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          GB && this.maybeMeasure()
        }
        createTooltip(BB, OB) {
          let GB = BB.create(this.view),
            YB = OB ? OB.dom : null;
          if (GB.dom.classList.add("cm-tooltip"), BB.arrow && !GB.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let BB = document.createElement("div");
            BB.className = "cm-tooltip-arrow", GB.dom.appendChild(BB)
          }
          return GB.dom.style.position = this.position, GB.dom.style.top = uQ, GB.dom.style.left = "0px", this.container.insertBefore(GB.dom, YB), GB.mount && GB.mount(this.view), this.resizeObserver && this.resizeObserver.observe(GB.dom), GB
        }
        destroy() {
          var BB, OB, GB;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let YB of this.manager.tooltipViews) YB.dom.remove(), null === (BB = YB.destroy) || void 0 === BB || BB.call(YB);
          this.parent && this.container.remove(), null === (OB = this.resizeObserver) || void 0 === OB || OB.disconnect(), null === (GB = this.intersectionObserver) || void 0 === GB || GB.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let BB = 1,
            OB = 1,
            GB = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: BB
            } = this.manager.tooltipViews[0];
            if (nB.safari) {
              let OB = BB.getBoundingClientRect();
              GB = Math.abs(OB.top + 1e4) > 1 || Math.abs(OB.left) > 1
            } else GB = !!BB.offsetParent && BB.offsetParent != this.container.ownerDocument.body
          }
          if (GB || "absolute" == this.position)
            if (this.parent) {
              let GB = this.parent.getBoundingClientRect();
              GB.width && GB.height && (BB = GB.width / this.parent.offsetWidth, OB = GB.height / this.parent.offsetHeight)
            } else({
              scaleX: BB,
              scaleY: OB
            } = this.view.viewState);
          let YB = this.view.scrollDOM.getBoundingClientRect(),
            DB = jG(this.view);
          return {
            visible: {
              left: YB.left + DB.left,
              top: YB.top + DB.top,
              right: YB.right - DB.right,
              bottom: YB.bottom - DB.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((BB, OB) => {
              let GB = this.manager.tooltipViews[OB];
              return GB.getCoords ? GB.getCoords(BB.pos) : this.view.coordsAtPos(BB.pos)
            })),
            size: this.manager.tooltipViews.map((BB => {
              let {
                dom: OB
              } = BB;
              return OB.getBoundingClientRect()
            })),
            space: this.view.state.facet(FQ).tooltipSpace(this.view),
            scaleX: BB,
            scaleY: OB,
            makeAbsolute: GB
          }
        }
        writeMeasure(BB) {
          var OB;
          if (BB.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let BB of this.manager.tooltipViews) BB.dom.style.position = "absolute"
          }
          let {
            visible: GB,
            space: YB,
            scaleX: DB,
            scaleY: QB
          } = BB, oB = [];
          for (let jB = 0; jB < this.manager.tooltips.length; jB++) {
            let yB = this.manager.tooltips[jB],
              JB = this.manager.tooltipViews[jB],
              {
                dom: MB
              } = JB,
              PB = BB.pos[jB],
              zB = BB.size[jB];
            if (!PB || !1 !== yB.clip && (PB.bottom <= Math.max(GB.top, YB.top) || PB.top >= Math.min(GB.bottom, YB.bottom) || PB.right < Math.max(GB.left, YB.left) - .1 || PB.left > Math.min(GB.right, YB.right) + .1)) {
              MB.style.top = uQ;
              continue
            }
            let lB = yB.arrow ? JB.dom.querySelector(".cm-tooltip-arrow") : null,
              pB = lB ? 7 : 0,
              qB = zB.right - zB.left,
              ZB = null !== (OB = iQ.get(JB)) && void 0 !== OB ? OB : zB.bottom - zB.top,
              NB = JB.offset || XQ,
              RB = this.view.textDirection == JO.LTR,
              WB = zB.width > YB.right - YB.left ? RB ? YB.left : YB.right - zB.width : RB ? Math.max(YB.left, Math.min(PB.left - (lB ? 14 : 0) + NB.x, YB.right - qB)) : Math.min(Math.max(YB.left, PB.left - qB + (lB ? 14 : 0) - NB.x), YB.right - qB),
              AB = this.above[jB];
            !yB.strictSide && (AB ? PB.top - ZB - pB - NB.y < YB.top : PB.bottom + ZB + pB + NB.y > YB.bottom) && AB == YB.bottom - PB.bottom > PB.top - YB.top && (AB = this.above[jB] = !AB);
            let VB = (AB ? PB.top - YB.top : YB.bottom - PB.bottom) - pB;
            if (VB < ZB && !1 !== JB.resize) {
              if (VB < this.view.defaultLineHeight) {
                MB.style.top = uQ;
                continue
              }
              iQ.set(JB, ZB), MB.style.height = (ZB = VB) / QB + "px"
            } else MB.style.height && (MB.style.height = "");
            let SB = AB ? PB.top - ZB - pB - NB.y : PB.bottom + pB + NB.y,
              nB = WB + qB;
            if (!0 !== JB.overlap)
              for (let BB of oB) BB.left < nB && BB.right > WB && BB.top < SB + ZB && BB.bottom > SB && (SB = AB ? BB.top - ZB - 2 - pB : BB.bottom + pB + 2);
            if ("absolute" == this.position ? (MB.style.top = (SB - BB.parent.top) / QB + "px", gQ(MB, (WB - BB.parent.left) / DB)) : (MB.style.top = SB / QB + "px", gQ(MB, WB / DB)), lB) {
              let BB = PB.left + (RB ? NB.x : -NB.x) - (WB + 14 - 7);
              lB.style.left = BB / DB + "px"
            }!0 !== JB.overlap && oB.push({
              left: WB,
              top: SB,
              right: nB,
              bottom: SB + ZB
            }), MB.classList.toggle("cm-tooltip-above", AB), MB.classList.toggle("cm-tooltip-below", !AB), JB.positioned && JB.positioned(BB.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let BB of this.manager.tooltipViews) BB.dom.style.top = uQ
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function gQ(BB, OB) {
      let GB = parseInt(BB.style.left, 10);
      (isNaN(GB) || Math.abs(OB - GB) > 1) && (BB.style.left = OB + "px")
    }
    const rQ = fD.baseTheme({
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
      XQ = {
        x: 0,
        y: 0
      },
      wQ = YB.o.define({
        enables: [LQ, rQ]
      }),
      EQ = YB.o.define({
        combine: BB => BB.reduce(((BB, OB) => BB.concat(OB)), [])
      });
    class cQ {
      static create(BB) {
        return new cQ(BB)
      }
      constructor(BB) {
        this.view = BB, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new mQ(BB, EQ, ((BB, OB) => this.createHostedView(BB, OB)), (BB => BB.dom.remove()))
      }
      createHostedView(BB, OB) {
        let GB = BB.create(this.view);
        return GB.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(GB.dom, OB ? OB.dom.nextSibling : this.dom.firstChild), this.mounted && GB.mount && GB.mount(this.view), GB
      }
      mount(BB) {
        for (let OB of this.manager.tooltipViews) OB.mount && OB.mount(BB);
        this.mounted = !0
      }
      positioned(BB) {
        for (let OB of this.manager.tooltipViews) OB.positioned && OB.positioned(BB)
      }
      update(BB) {
        this.manager.update(BB)
      }
      destroy() {
        var BB;
        for (let OB of this.manager.tooltipViews) null === (BB = OB.destroy) || void 0 === BB || BB.call(OB)
      }
      passProp(BB) {
        let OB;
        for (let GB of this.manager.tooltipViews) {
          let YB = GB[BB];
          if (void 0 !== YB)
            if (void 0 === OB) OB = YB;
            else if (OB !== YB) return
        }
        return OB
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
    const hQ = wQ.compute([EQ], (BB => {
      let OB = BB.facet(EQ);
      return 0 === OB.length ? null : {
        pos: Math.min(...OB.map((BB => BB.pos))),
        end: Math.max(...OB.map((BB => {
          var OB;
          return null !== (OB = BB.end) && void 0 !== OB ? OB : BB.pos
        }))),
        create: cQ.create,
        above: OB[0].above,
        arrow: OB.some((BB => BB.arrow))
      }
    }));
    class aQ {
      constructor(BB, OB, GB, YB, DB) {
        this.view = BB, this.source = OB, this.field = GB, this.setHover = YB, this.hoverTime = DB, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
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
          lastMove: OB
        } = this, GB = BB.docView.tile.nearest(OB.target);
        if (!GB) return;
        let YB, DB = 1;
        if (GB.isWidget()) YB = GB.posAtStart;
        else {
          if (YB = BB.posAtCoords(OB), null == YB) return;
          let GB = BB.coordsAtPos(YB);
          if (!GB || OB.y < GB.top || OB.y > GB.bottom || OB.x < GB.left - BB.defaultCharacterWidth || OB.x > GB.right + BB.defaultCharacterWidth) return;
          let QB = BB.bidiSpans(BB.state.doc.lineAt(YB)).find((BB => BB.from <= YB && BB.to >= YB)),
            oB = QB && QB.dir == JO.RTL ? -1 : 1;
          DB = OB.x < GB.left ? -oB : oB
        }
        let QB = this.source(BB, YB, DB);
        if (null === QB || void 0 === QB ? void 0 : QB.then) {
          let OB = this.pending = {
            pos: YB
          };
          QB.then((GB => {
            this.pending == OB && (this.pending = null, !GB || Array.isArray(GB) && !GB.length || BB.dispatch({
              effects: this.setHover.of(Array.isArray(GB) ? GB : [GB])
            }))
          }), (OB => TO(BB.state, OB, "hover tooltip")))
        } else !QB || Array.isArray(QB) && !QB.length || BB.dispatch({
          effects: this.setHover.of(Array.isArray(QB) ? QB : [QB])
        })
      }
      get tooltip() {
        let BB = this.view.plugin(LQ),
          OB = BB ? BB.manager.tooltips.findIndex((BB => BB.create == cQ.create)) : -1;
        return OB > -1 ? BB.manager.tooltipViews[OB] : null
      }
      mousemove(BB) {
        var OB, GB;
        this.lastMove = {
          x: BB.clientX,
          y: BB.clientY,
          target: BB.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: YB,
          tooltip: DB
        } = this;
        if (YB.length && DB && ! function(BB, OB) {
            let GB, {
              left: YB,
              right: DB,
              top: QB,
              bottom: oB
            } = BB.getBoundingClientRect();
            if (GB = BB.querySelector(".cm-tooltip-arrow")) {
              let BB = GB.getBoundingClientRect();
              QB = Math.min(BB.top, QB), oB = Math.max(BB.bottom, oB)
            }
            return OB.clientX >= YB - eQ && OB.clientX <= DB + eQ && OB.clientY >= QB - eQ && OB.clientY <= oB + eQ
          }(DB.dom, BB) || this.pending) {
          let {
            pos: DB
          } = YB[0] || this.pending, QB = null !== (GB = null === (OB = YB[0]) || void 0 === OB ? void 0 : OB.end) && void 0 !== GB ? GB : DB;
          (DB == QB ? this.view.posAtCoords(this.lastMove) == DB : function(BB, OB, GB, YB, DB) {
            let QB = BB.scrollDOM.getBoundingClientRect(),
              oB = BB.documentTop + BB.documentPadding.top + BB.contentHeight;
            if (QB.left > YB || QB.right < YB || QB.top > DB || Math.min(QB.bottom, oB) < DB) return !1;
            let jB = BB.posAtCoords({
              x: YB,
              y: DB
            }, !1);
            return jB >= OB && jB <= GB
          }(this.view, DB, QB, BB.clientX, BB.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(BB) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: OB
        } = this;
        if (OB.length) {
          let {
            tooltip: OB
          } = this;
          OB && OB.dom.contains(BB.relatedTarget) ? this.watchTooltipLeave(OB.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(BB) {
        let OB = GB => {
          BB.removeEventListener("mouseleave", OB), this.active.length && !this.view.dom.contains(GB.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        BB.addEventListener("mouseleave", OB)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const eQ = 4;

    function TQ(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        GB = YB.D.define(),
        DB = YB.G.define({
          create: () => [],
          update(BB, DB) {
            if (BB.length && (OB.hideOnChange && (DB.docChanged || DB.selection) ? BB = [] : OB.hideOn && (BB = BB.filter((BB => !OB.hideOn(DB, BB)))), DB.docChanged)) {
              let OB = [];
              for (let GB of BB) {
                let BB = DB.changes.mapPos(GB.pos, -1, YB.p.TrackDel);
                if (null != BB) {
                  let YB = Object.assign(Object.create(null), GB);
                  YB.pos = BB, null != YB.end && (YB.end = DB.changes.mapPos(YB.end)), OB.push(YB)
                }
              }
              BB = OB
            }
            for (let OB of DB.effects) OB.is(GB) && (BB = OB.value), OB.is(CQ) && (BB = []);
            return BB
          },
          provide: BB => EQ.from(BB)
        });
      return {
        active: DB,
        extension: [DB, vO.define((YB => new aQ(YB, BB, DB, GB, OB.hoverTime || 300))), hQ]
      }
    }

    function bQ(BB, OB) {
      let GB = BB.plugin(LQ);
      if (!GB) return null;
      let YB = GB.manager.tooltips.indexOf(OB);
      return YB < 0 ? null : GB.manager.tooltipViews[YB]
    }
    const CQ = YB.D.define();
    const HQ = YB.o.define({
      combine(BB) {
        let OB, GB;
        for (let YB of BB) OB = OB || YB.topContainer, GB = GB || YB.bottomContainer;
        return {
          topContainer: OB,
          bottomContainer: GB
        }
      }
    });

    function vQ(BB, OB) {
      let GB = BB.plugin(sQ),
        YB = GB ? GB.specs.indexOf(OB) : -1;
      return YB > -1 ? GB.panels[YB] : null
    }
    const sQ = vO.fromClass(class {
      constructor(BB) {
        this.input = BB.state.facet(Bo), this.specs = this.input.filter((BB => BB)), this.panels = this.specs.map((OB => OB(BB)));
        let OB = BB.state.facet(HQ);
        this.top = new xQ(BB, !0, OB.topContainer), this.bottom = new xQ(BB, !1, OB.bottomContainer), this.top.sync(this.panels.filter((BB => BB.top))), this.bottom.sync(this.panels.filter((BB => !BB.top)));
        for (let GB of this.panels) GB.dom.classList.add("cm-panel"), GB.mount && GB.mount()
      }
      update(BB) {
        let OB = BB.state.facet(HQ);
        this.top.container != OB.topContainer && (this.top.sync([]), this.top = new xQ(BB.view, !0, OB.topContainer)), this.bottom.container != OB.bottomContainer && (this.bottom.sync([]), this.bottom = new xQ(BB.view, !1, OB.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let GB = BB.state.facet(Bo);
        if (GB != this.input) {
          let OB = GB.filter((BB => BB)),
            YB = [],
            DB = [],
            QB = [],
            oB = [];
          for (let GB of OB) {
            let OB, jB = this.specs.indexOf(GB);
            jB < 0 ? (OB = GB(BB.view), oB.push(OB)) : (OB = this.panels[jB], OB.update && OB.update(BB)), YB.push(OB), (OB.top ? DB : QB).push(OB)
          }
          this.specs = OB, this.panels = YB, this.top.sync(DB), this.bottom.sync(QB);
          for (let BB of oB) BB.dom.classList.add("cm-panel"), BB.mount && BB.mount()
        } else
          for (let YB of this.panels) YB.update && YB.update(BB)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: BB => fD.scrollMargins.of((OB => {
        let GB = OB.plugin(BB);
        return GB && {
          top: GB.top.scrollMargin(),
          bottom: GB.bottom.scrollMargin()
        }
      }))
    });
    class xQ {
      constructor(BB, OB, GB) {
        this.view = BB, this.top = OB, this.container = GB, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(BB) {
        for (let OB of this.panels) OB.destroy && BB.indexOf(OB) < 0 && OB.destroy();
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
        for (let OB of this.panels)
          if (OB.dom.parentNode == this.dom) {
            for (; BB != OB.dom;) BB = tQ(BB);
            BB = BB.nextSibling
          } else this.dom.insertBefore(OB.dom, BB);
        for (; BB;) BB = tQ(BB)
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

    function tQ(BB) {
      let OB = BB.nextSibling;
      return BB.remove(), OB
    }
    const Bo = YB.o.define({
      enables: sQ
    });

    function Oo(BB, OB) {
      let GB, DB = new Promise((BB => GB = BB)),
        QB = BB => function(BB, OB, GB) {
          let YB = OB.content ? OB.content(BB, (() => oB(null))) : null;
          if (!YB) {
            if (YB = (0, PB.e)("form"), OB.input) {
              let BB = (0, PB.e)("input", OB.input);
              /^(text|password|number|email|tel|url)$/.test(BB.type) && BB.classList.add("cm-textfield"), BB.name || (BB.name = "input"), YB.appendChild((0, PB.e)("label", (OB.label || "") + ": ", BB))
            } else YB.appendChild(document.createTextNode(OB.label || ""));
            YB.appendChild(document.createTextNode(" ")), YB.appendChild((0, PB.e)("button", {
              class: "cm-button",
              type: "submit"
            }, OB.submitLabel || "OK"))
          }
          let DB = "FORM" == YB.nodeName ? [YB] : YB.querySelectorAll("form");
          for (let jB = 0; jB < DB.length; jB++) {
            let BB = DB[jB];
            BB.addEventListener("keydown", (OB => {
              27 == OB.keyCode ? (OB.preventDefault(), oB(null)) : 13 == OB.keyCode && (OB.preventDefault(), oB(BB))
            })), BB.addEventListener("submit", (OB => {
              OB.preventDefault(), oB(BB)
            }))
          }
          let QB = (0, PB.e)("div", YB, (0, PB.e)("button", {
            onclick: () => oB(null),
            "aria-label": BB.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          OB.class && (QB.className = OB.class);

          function oB(OB) {
            QB.contains(QB.ownerDocument.activeElement) && BB.focus(), GB(OB)
          }
          return QB.classList.add("cm-dialog"), {
            dom: QB,
            top: OB.top,
            mount: () => {
              if (OB.focus) {
                let BB;
                BB = "string" == typeof OB.focus ? YB.querySelector(OB.focus) : YB.querySelector("input") || YB.querySelector("button"), BB && "select" in BB ? BB.select() : BB && "focus" in BB && BB.focus()
              }
            }
          }
        }(BB, OB, GB);
      BB.state.field(Go, !1) ? BB.dispatch({
        effects: Yo.of(QB)
      }) : BB.dispatch({
        effects: YB.D.appendConfig.of(Go.init((() => [QB])))
      });
      let oB = Do.of(QB);
      return {
        close: oB,
        result: DB.then((OB => ((BB.win.queueMicrotask || (OB => BB.win.setTimeout(OB, 10)))((() => {
          BB.state.field(Go).indexOf(QB) > -1 && BB.dispatch({
            effects: oB
          })
        })), OB)))
      }
    }
    const Go = YB.G.define({
        create: () => [],
        update(BB, OB) {
          for (let GB of OB.effects) GB.is(Yo) ? BB = [GB.value].concat(BB) : GB.is(Do) && (BB = BB.filter((BB => BB != GB.value)));
          return BB
        },
        provide: BB => Bo.computeN([BB], (OB => OB.field(BB)))
      }),
      Yo = YB.D.define(),
      Do = YB.D.define();
    class Qo extends YB.C {
      compare(BB) {
        return this == BB || this.constructor == BB.constructor && this.eq(BB)
      }
      eq(BB) {
        return !1
      }
      destroy(BB) {}
    }
    Qo.prototype.elementClass = "", Qo.prototype.toDOM = void 0, Qo.prototype.mapMode = YB.p.TrackBefore, Qo.prototype.startSide = Qo.prototype.endSide = -1, Qo.prototype.point = !0;
    const oo = YB.o.define(),
      jo = YB.o.define(),
      yo = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => YB.z.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      Jo = YB.o.define();

    function Mo(BB) {
      return [zo(), Jo.of({
        ...yo,
        ...BB
      })]
    }
    const Po = YB.o.define({
      combine: BB => BB.some((BB => BB))
    });

    function zo(BB) {
      let OB = [po];
      return BB && !1 === BB.fixed && OB.push(Po.of(!0)), OB
    }
    const po = vO.fromClass(class {
      constructor(BB) {
        this.view = BB, this.domAfter = null, this.prevViewport = BB.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = BB.state.facet(Jo).map((OB => new Ro(BB, OB))), this.fixed = !BB.state.facet(Po);
        for (let OB of this.gutters) "after" == OB.config.side ? this.getDOMAfter().appendChild(OB.dom) : this.dom.appendChild(OB.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), BB.scrollDOM.insertBefore(this.dom, BB.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(BB) {
        if (this.updateGutters(BB)) {
          let OB = this.prevViewport,
            GB = BB.view.viewport,
            YB = Math.min(OB.to, GB.to) - Math.max(OB.from, GB.from);
          this.syncGutters(YB < .8 * (GB.to - GB.from))
        }
        if (BB.geometryChanged) {
          let BB = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = BB, this.domAfter && (this.domAfter.style.minHeight = BB)
        }
        this.view.state.facet(Po) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = BB.view.viewport
      }
      syncGutters(BB) {
        let OB = this.dom.nextSibling;
        BB && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let GB = YB.z.iter(this.view.state.facet(oo), this.view.viewport.from),
          DB = [],
          QB = this.gutters.map((BB => new No(BB, this.view.viewport, -this.view.documentPadding.top)));
        for (let YB of this.view.viewportLineBlocks)
          if (DB.length && (DB = []), Array.isArray(YB.type)) {
            let BB = !0;
            for (let OB of YB.type)
              if (OB.type == mB.Text && BB) {
                Zo(GB, DB, OB.from);
                for (let BB of QB) BB.line(this.view, OB, DB);
                BB = !1
              } else if (OB.widget)
              for (let BB of QB) BB.widget(this.view, OB)
          } else if (YB.type == mB.Text) {
          Zo(GB, DB, YB.from);
          for (let BB of QB) BB.line(this.view, YB, DB)
        } else if (YB.widget)
          for (let BB of QB) BB.widget(this.view, YB);
        for (let YB of QB) YB.finish();
        BB && (this.view.scrollDOM.insertBefore(this.dom, OB), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(BB) {
        let OB = BB.startState.facet(Jo),
          GB = BB.state.facet(Jo),
          DB = BB.docChanged || BB.heightChanged || BB.viewportChanged || !YB.z.eq(BB.startState.facet(oo), BB.state.facet(oo), BB.view.viewport.from, BB.view.viewport.to);
        if (OB == GB)
          for (let YB of this.gutters) YB.update(BB) && (DB = !0);
        else {
          DB = !0;
          let YB = [];
          for (let DB of GB) {
            let GB = OB.indexOf(DB);
            GB < 0 ? YB.push(new Ro(this.view, DB)) : (this.gutters[GB].update(BB), YB.push(this.gutters[GB]))
          }
          for (let BB of this.gutters) BB.dom.remove(), YB.indexOf(BB) < 0 && BB.destroy();
          for (let BB of YB) "after" == BB.config.side ? this.getDOMAfter().appendChild(BB.dom) : this.dom.appendChild(BB.dom);
          this.gutters = YB
        }
        return DB
      }
      destroy() {
        for (let BB of this.gutters) BB.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: BB => fD.scrollMargins.of((OB => {
        let GB = OB.plugin(BB);
        if (!GB || 0 == GB.gutters.length || !GB.fixed) return null;
        let YB = GB.dom.offsetWidth * OB.scaleX,
          DB = GB.domAfter ? GB.domAfter.offsetWidth * OB.scaleX : 0;
        return OB.textDirection == JO.LTR ? {
          left: YB,
          right: DB
        } : {
          right: YB,
          left: DB
        }
      }))
    });

    function qo(BB) {
      return Array.isArray(BB) ? BB : [BB]
    }

    function Zo(BB, OB, GB) {
      for (; BB.value && BB.from <= GB;) BB.from == GB && OB.push(BB.value), BB.next()
    }
    class No {
      constructor(BB, OB, GB) {
        this.gutter = BB, this.height = GB, this.i = 0, this.cursor = YB.z.iter(BB.markers, OB.from)
      }
      addElement(BB, OB, GB) {
        let {
          gutter: YB
        } = this, DB = (OB.top - this.height) / BB.scaleY, QB = OB.height / BB.scaleY;
        if (this.i == YB.elements.length) {
          let OB = new Wo(BB, QB, DB, GB);
          YB.elements.push(OB), YB.dom.appendChild(OB.dom)
        } else YB.elements[this.i].update(BB, QB, DB, GB);
        this.height = OB.bottom, this.i++
      }
      line(BB, OB, GB) {
        let YB = [];
        Zo(this.cursor, YB, OB.from), GB.length && (YB = YB.concat(GB));
        let DB = this.gutter.config.lineMarker(BB, OB, YB);
        DB && YB.unshift(DB);
        let QB = this.gutter;
        (0 != YB.length || QB.config.renderEmptyElements) && this.addElement(BB, OB, YB)
      }
      widget(BB, OB) {
        let GB = this.gutter.config.widgetMarker(BB, OB.widget, OB),
          YB = GB ? [GB] : null;
        for (let DB of BB.state.facet(jo)) {
          let GB = DB(BB, OB.widget, OB);
          GB && (YB || (YB = [])).push(GB)
        }
        YB && this.addElement(BB, OB, YB)
      }
      finish() {
        let BB = this.gutter;
        for (; BB.elements.length > this.i;) {
          let OB = BB.elements.pop();
          BB.dom.removeChild(OB.dom), OB.destroy()
        }
      }
    }
    class Ro {
      constructor(BB, OB) {
        this.view = BB, this.config = OB, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let GB in OB.domEventHandlers) this.dom.addEventListener(GB, (YB => {
          let DB, QB = YB.target;
          if (QB != this.dom && this.dom.contains(QB)) {
            for (; QB.parentNode != this.dom;) QB = QB.parentNode;
            let BB = QB.getBoundingClientRect();
            DB = (BB.top + BB.bottom) / 2
          } else DB = YB.clientY;
          let oB = BB.lineBlockAtHeight(DB - BB.documentTop);
          OB.domEventHandlers[GB](BB, oB, YB) && YB.preventDefault()
        }));
        this.markers = qo(OB.markers(BB)), OB.initialSpacer && (this.spacer = new Wo(BB, 0, 0, [OB.initialSpacer(BB)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(BB) {
        let OB = this.markers;
        if (this.markers = qo(this.config.markers(BB.view)), this.spacer && this.config.updateSpacer) {
          let OB = this.config.updateSpacer(this.spacer.markers[0], BB);
          OB != this.spacer.markers[0] && this.spacer.update(BB.view, 0, 0, [OB])
        }
        let GB = BB.view.viewport;
        return !YB.z.eq(this.markers, OB, GB.from, GB.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(BB)
      }
      destroy() {
        for (let BB of this.elements) BB.destroy()
      }
    }
    class Wo {
      constructor(BB, OB, GB, YB) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(BB, OB, GB, YB)
      }
      update(BB, OB, GB, YB) {
        this.height != OB && (this.height = OB, this.dom.style.height = OB + "px"), this.above != GB && (this.dom.style.marginTop = (this.above = GB) ? GB + "px" : ""),
          function(BB, OB) {
            if (BB.length != OB.length) return !1;
            for (let GB = 0; GB < BB.length; GB++)
              if (!BB[GB].compare(OB[GB])) return !1;
            return !0
          }(this.markers, YB) || this.setMarkers(BB, YB)
      }
      setMarkers(BB, OB) {
        let GB = "cm-gutterElement",
          YB = this.dom.firstChild;
        for (let DB = 0, QB = 0;;) {
          let oB = QB,
            jB = DB < OB.length ? OB[DB++] : null,
            yB = !1;
          if (jB) {
            let BB = jB.elementClass;
            BB && (GB += " " + BB);
            for (let OB = QB; OB < this.markers.length; OB++)
              if (this.markers[OB].compare(jB)) {
                oB = OB, yB = !0;
                break
              }
          } else oB = this.markers.length;
          for (; QB < oB;) {
            let BB = this.markers[QB++];
            if (BB.toDOM) {
              BB.destroy(YB);
              let OB = YB.nextSibling;
              YB.remove(), YB = OB
            }
          }
          if (!jB) break;
          jB.toDOM && (yB ? YB = YB.nextSibling : this.dom.insertBefore(jB.toDOM(BB), YB)), yB && QB++
        }
        this.dom.className = GB, this.markers = OB
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const Ao = YB.o.define(),
      Vo = YB.o.define(),
      So = YB.o.define({
        combine: BB => (0, YB.V)(BB, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(BB, OB) {
            let GB = Object.assign({}, BB);
            for (let YB in OB) {
              let BB = GB[YB],
                DB = OB[YB];
              GB[YB] = BB ? (OB, GB, YB) => BB(OB, GB, YB) || DB(OB, GB, YB) : DB
            }
            return GB
          }
        })
      });
    class no extends Qo {
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

    function Uo(BB, OB) {
      return BB.state.facet(So).formatNumber(OB, BB.state)
    }
    const fo = Jo.compute([So], (BB => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: BB => BB.state.facet(Ao),
      lineMarker: (BB, OB, GB) => GB.some((BB => BB.toDOM)) ? null : new no(Uo(BB, BB.state.doc.lineAt(OB.from).number)),
      widgetMarker: (BB, OB, GB) => {
        for (let YB of BB.state.facet(Vo)) {
          let DB = YB(BB, OB, GB);
          if (DB) return DB
        }
        return null
      },
      lineMarkerChange: BB => BB.startState.facet(So) != BB.state.facet(So),
      initialSpacer: BB => new no(Uo(BB, Ko(BB.state.doc.lines))),
      updateSpacer(BB, OB) {
        let GB = Uo(OB.view, Ko(OB.view.state.doc.lines));
        return GB == BB.number ? BB : new no(GB)
      },
      domEventHandlers: BB.facet(So).domEventHandlers,
      side: "before"
    })));

    function ko() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [So.of(BB), zo(), fo]
    }

    function Ko(BB) {
      let OB = 9;
      for (; OB < BB;) OB = 10 * OB + 9;
      return OB
    }
    const uo = new class extends Qo {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      mo = oo.compute(["selection"], (BB => {
        let OB = [],
          GB = -1;
        for (let YB of BB.selection.JZ) {
          let DB = BB.doc.lineAt(YB.head).from;
          DB > GB && (GB = DB, OB.push(uo.range(DB)))
        }
        return YB.z.of(OB)
      }));

    function Io() {
      return mo
    }
  },
  44488: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => YB,
      f: () => lB,
      h: () => oB,
      j: () => MB,
      m: () => JB,
      o: () => FB,
      s: () => LB,
      t: () => iB,
      w: () => pB
    });
    const YB = 1024;
    let DB = 0;
    class QB {
      constructor(BB, OB) {
        this.from = BB, this.to = OB
      }
    }
    class oB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = DB++, this.perNode = !!BB.perNode, this.deserialize = BB.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = BB.combine || null
      }
      add(BB) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof BB && (BB = JB.match(BB)), OB => {
          let GB = BB(OB);
          return void 0 === GB ? null : [this, GB]
        }
      }
    }
    oB.closedBy = new oB({
      deserialize: BB => BB.split(" ")
    }), oB.openedBy = new oB({
      deserialize: BB => BB.split(" ")
    }), oB.group = new oB({
      deserialize: BB => BB.split(" ")
    }), oB.isolate = new oB({
      deserialize: BB => {
        if (BB && "rtl" != BB && "ltr" != BB && "auto" != BB) throw new RangeError("Invalid value for isolate: " + BB);
        return BB || "auto"
      }
    }), oB.contextHash = new oB({
      perNode: !0
    }), oB.lookAhead = new oB({
      perNode: !0
    }), oB.mounted = new oB({
      perNode: !0
    });
    class jB {
      constructor(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = BB, this.overlay = OB, this.parser = GB, this.bracketed = YB
      }
      static get(BB) {
        return BB && BB.props && BB.props[oB.mounted.id]
      }
    }
    const yB = Object.create(null);
    class JB {
      constructor(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = BB, this.props = OB, this.id = GB, this.flags = YB
      }
      static define(BB) {
        let OB = BB.props && BB.props.length ? Object.create(null) : yB,
          GB = (BB.top ? 1 : 0) | (BB.skipped ? 2 : 0) | (BB.error ? 4 : 0) | (null == BB.name ? 8 : 0),
          YB = new JB(BB.name || "", OB, BB.id, GB);
        if (BB.props)
          for (let DB of BB.props)
            if (Array.isArray(DB) || (DB = DB(YB)), DB) {
              if (DB[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              OB[DB[0].id] = DB[1]
            } return YB
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
          let OB = this.prop(oB.group);
          return !!OB && OB.indexOf(BB) > -1
        }
        return this.id == BB
      }
      static match(BB) {
        let OB = Object.create(null);
        for (let GB in BB)
          for (let YB of GB.split(" ")) OB[YB] = BB[GB];
        return BB => {
          for (let GB = BB.prop(oB.group), YB = -1; YB < (GB ? GB.length : 0); YB++) {
            let DB = OB[YB < 0 ? BB.name : GB[YB]];
            if (DB) return DB
          }
        }
      }
    }
    JB.none = new JB("", Object.create(null), 0, 8);
    class MB {
      constructor(BB) {
        this.types = BB;
        for (let OB = 0; OB < BB.length; OB++)
          if (BB[OB].id != OB) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let BB = [];
        for (var OB = arguments.length, GB = new Array(OB), YB = 0; YB < OB; YB++) GB[YB] = arguments[YB];
        for (let DB of this.types) {
          let OB = null;
          for (let BB of GB) {
            let GB = BB(DB);
            if (GB) {
              OB || (OB = Object.assign({}, DB.props));
              let BB = GB[1],
                YB = GB[0];
              YB.combine && YB.id in OB && (BB = YB.combine(OB[YB.id], BB)), OB[YB.id] = BB
            }
          }
          BB.push(OB ? new JB(DB.name, OB, DB.id, DB.flags) : DB)
        }
        return new MB(BB)
      }
    }
    const PB = new WeakMap,
      zB = new WeakMap;
    var lB;
    ! function(BB) {
      BB[BB.ExcludeBuffers = 1] = "ExcludeBuffers", BB[BB.IncludeAnonymous = 2] = "IncludeAnonymous", BB[BB.IgnoreMounts = 4] = "IgnoreMounts", BB[BB.IgnoreOverlays = 8] = "IgnoreOverlays", BB[BB.EnterBracketed = 16] = "EnterBracketed"
    }(lB || (lB = {}));
    class pB {
      constructor(BB, OB, GB, YB, DB) {
        if (this.type = BB, this.children = OB, this.positions = GB, this.length = YB, this.props = null, DB && DB.length) {
          this.props = Object.create(null);
          for (let [BB, OB] of DB) this.props["number" == typeof BB ? BB : BB.id] = OB
        }
      }
      toString() {
        let BB = jB.get(this);
        if (BB && !BB.overlay) return BB.tree.toString();
        let OB = "";
        for (let GB of this.children) {
          let BB = GB.toString();
          BB && (OB && (OB += ","), OB += BB)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (OB.length ? "(" + OB + ")" : "") : OB
      }
      cursor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new dB(this.topNode, BB)
      }
      cursorAt(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GB = PB.get(this) || this.topNode,
          YB = new dB(GB);
        return YB.moveTo(BB, OB), PB.set(this, YB._tree), YB
      }
      get topNode() {
        return new AB(this, 0, 0, null)
      }
      resolve(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GB = RB(PB.get(this) || this.topNode, BB, OB, !1);
        return PB.set(this, GB), GB
      }
      resolveInner(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GB = RB(zB.get(this) || this.topNode, BB, OB, !0);
        return zB.set(this, GB), GB
      }
      resolveStack(BB) {
        return function(BB, OB, GB) {
          let YB = BB.resolveInner(OB, GB),
            DB = null;
          for (let QB = YB instanceof AB ? YB : YB.context.parent; QB; QB = QB.parent)
            if (QB.index < 0) {
              let BB = QB.parent;
              (DB || (DB = [YB])).push(BB.resolve(OB, GB)), QB = BB
            } else {
              let BB = jB.get(QB.tree);
              if (BB && BB.overlay && BB.overlay[0].from <= OB && BB.overlay[BB.overlay.length - 1].to >= OB) {
                let oB = new AB(BB.tree, BB.overlay[0].from + QB.from, -1, QB);
                (DB || (DB = [YB])).push(RB(oB, OB, GB, !1))
              }
            } return DB ? fB(DB) : YB
        }(this, BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(BB) {
        let {
          enter: OB,
          leave: GB,
          from: YB = 0,
          to: DB = this.length
        } = BB, QB = BB.mode || 0, oB = (QB & lB.IncludeAnonymous) > 0;
        for (let jB = this.cursor(QB | lB.IncludeAnonymous);;) {
          let BB = !1;
          if (jB.from <= DB && jB.to >= YB && (!oB && jB.type.isAnonymous || !1 !== OB(jB))) {
            if (jB.firstChild()) continue;
            BB = !0
          }
          for (; BB && GB && (oB || !jB.type.isAnonymous) && GB(jB), !jB.nextSibling();) {
            if (!jB.parent()) return;
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
          for (let OB in this.props) BB.push([+OB, this.props[OB]]);
        return BB
      }
      balance() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : IB(JB.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((BB, OB, GB) => new pB(this.type, BB, OB, GB, this.propValues)), BB.makeTree || ((BB, OB, GB) => new pB(JB.none, BB, OB, GB)))
      }
      static build(BB) {
        return function(BB) {
          var OB;
          let {
            buffer: GB,
            nodeSet: DB,
            maxBufferLength: QB = YB,
            reused: jB = [],
            minRepeatType: yB = DB.types.length
          } = BB, JB = Array.isArray(GB) ? new qB(GB, GB.length) : GB, MB = DB.types, PB = 0, zB = 0;

          function lB(BB, OB, GB, YB, oB, pB) {
            let {
              id: qB,
              start: nB,
              end: UB,
              size: fB
            } = JB, kB = zB, dB = PB;
            if (fB < 0) {
              if (JB.next(), -1 == fB) {
                let OB = jB[qB];
                return GB.push(OB), void YB.push(nB - BB)
              }
              if (-3 == fB) return void(PB = qB);
              if (-4 == fB) return void(zB = qB);
              throw new RangeError(`Unrecognized record size: ${fB}`)
            }
            let KB, uB, mB = MB[qB],
              FB = nB - BB;
            if (UB - nB <= QB && (uB = VB(JB.pos - OB, oB))) {
              let OB = new Uint16Array(uB.size - uB.skip),
                GB = JB.pos - uB.size,
                YB = OB.length;
              for (; JB.pos > GB;) YB = SB(uB.start, OB, YB);
              KB = new ZB(OB, UB - uB.start, DB), FB = uB.start - BB
            } else {
              let BB = JB.pos - fB;
              JB.next();
              let OB = [],
                GB = [],
                YB = qB >= yB ? qB : -1,
                DB = 0,
                oB = UB;
              for (; JB.pos > BB;) YB >= 0 && JB.id == YB && JB.size >= 0 ? (JB.end <= oB - QB && (WB(OB, GB, nB, DB, JB.end, oB, YB, kB, dB), DB = OB.length, oB = JB.end), JB.next()) : pB > 2500 ? NB(nB, BB, OB, GB) : lB(nB, BB, OB, GB, YB, pB + 1);
              if (YB >= 0 && DB > 0 && DB < OB.length && WB(OB, GB, nB, DB, nB, oB, YB, kB, dB), OB.reverse(), GB.reverse(), YB > -1 && DB > 0) {
                let BB = RB(mB, dB);
                KB = IB(mB, OB, GB, 0, OB.length, 0, UB - nB, BB, BB)
              } else KB = AB(mB, OB, GB, UB - nB, kB - UB, dB)
            }
            GB.push(KB), YB.push(FB)
          }

          function NB(BB, OB, GB, YB) {
            let oB = [],
              jB = 0,
              yB = -1;
            for (; JB.pos > OB;) {
              let {
                id: BB,
                start: OB,
                end: GB,
                size: YB
              } = JB;
              if (YB > 4) JB.next();
              else {
                if (yB > -1 && OB < yB) break;
                yB < 0 && (yB = GB - QB), oB.push(BB, OB, GB), jB++, JB.next()
              }
            }
            if (jB) {
              let OB = new Uint16Array(4 * jB),
                QB = oB[oB.length - 2];
              for (let BB = oB.length - 3, GB = 0; BB >= 0; BB -= 3) OB[GB++] = oB[BB], OB[GB++] = oB[BB + 1] - QB, OB[GB++] = oB[BB + 2] - QB, OB[GB++] = GB;
              GB.push(new ZB(OB, oB[2] - QB, DB)), YB.push(QB - BB)
            }
          }

          function RB(BB, OB) {
            return (GB, YB, DB) => {
              let QB, jB, yB = 0,
                JB = GB.length - 1;
              if (JB >= 0 && (QB = GB[JB]) instanceof pB) {
                if (!JB && QB.type == BB && QB.length == DB) return QB;
                (jB = QB.prop(oB.lookAhead)) && (yB = YB[JB] + QB.length + jB)
              }
              return AB(BB, GB, YB, DB, yB, OB)
            }
          }

          function WB(BB, OB, GB, YB, QB, oB, jB, yB, JB) {
            let MB = [],
              PB = [];
            for (; BB.length > YB;) MB.push(BB.pop()), PB.push(OB.pop() + GB - QB);
            BB.push(AB(DB.types[jB], MB, PB, oB - QB, yB - oB, JB)), OB.push(QB - GB)
          }

          function AB(BB, OB, GB, YB, DB, QB, jB) {
            if (QB) {
              let BB = [oB.contextHash, QB];
              jB = jB ? [BB].concat(jB) : [BB]
            }
            if (DB > 25) {
              let BB = [oB.lookAhead, DB];
              jB = jB ? [BB].concat(jB) : [BB]
            }
            return new pB(BB, OB, GB, YB, jB)
          }

          function VB(BB, OB) {
            let GB = JB.fork(),
              YB = 0,
              DB = 0,
              oB = 0,
              jB = GB.end - QB,
              MB = {
                size: 0,
                start: 0,
                skip: 0
              };
            BB: for (let QB = GB.pos - BB; GB.pos > QB;) {
              let BB = GB.size;
              if (GB.id == OB && BB >= 0) {
                MB.size = YB, MB.start = DB, MB.skip = oB, oB += 4, YB += 4, GB.next();
                continue
              }
              let JB = GB.pos - BB;
              if (BB < 0 || JB < QB || GB.start < jB) break;
              let PB = GB.id >= yB ? 4 : 0,
                zB = GB.start;
              for (GB.next(); GB.pos > JB;) {
                if (GB.size < 0) {
                  if (-3 != GB.size && -4 != GB.size) break BB;
                  PB += 4
                } else GB.id >= yB && (PB += 4);
                GB.next()
              }
              DB = zB, YB += BB, oB += PB
            }
            return (OB < 0 || YB == BB) && (MB.size = YB, MB.start = DB, MB.skip = oB), MB.size > 4 ? MB : void 0
          }

          function SB(BB, OB, GB) {
            let {
              id: YB,
              start: DB,
              end: QB,
              size: oB
            } = JB;
            if (JB.next(), oB >= 0 && YB < yB) {
              let jB = GB;
              if (oB > 4) {
                let YB = JB.pos - (oB - 4);
                for (; JB.pos > YB;) GB = SB(BB, OB, GB)
              }
              OB[--GB] = jB, OB[--GB] = QB - BB, OB[--GB] = DB - BB, OB[--GB] = YB
            } else - 3 == oB ? PB = YB : -4 == oB && (zB = YB);
            return GB
          }
          let nB = [],
            UB = [];
          for (; JB.pos > 0;) lB(BB.start || 0, BB.bufferStart || 0, nB, UB, -1, 0);
          let fB = null !== (OB = BB.length) && void 0 !== OB ? OB : nB.length ? UB[0] + nB[0].length : 0;
          return new pB(MB[BB.topID], nB.reverse(), UB.reverse(), fB)
        }(BB)
      }
    }
    pB.empty = new pB(JB.none, [], [], 0);
    class qB {
      constructor(BB, OB) {
        this.buffer = BB, this.index = OB
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
        return new qB(this.buffer, this.index)
      }
    }
    class ZB {
      constructor(BB, OB, GB) {
        this.buffer = BB, this.length = OB, this.set = GB
      }
      get type() {
        return JB.none
      }
      toString() {
        let BB = [];
        for (let OB = 0; OB < this.buffer.length;) BB.push(this.childString(OB)), OB = this.buffer[OB + 3];
        return BB.join(",")
      }
      childString(BB) {
        let OB = this.buffer[BB],
          GB = this.buffer[BB + 3],
          YB = this.set.types[OB],
          DB = YB.name;
        if (/\W/.test(DB) && !YB.isError && (DB = JSON.stringify(DB)), GB == (BB += 4)) return DB;
        let QB = [];
        for (; BB < GB;) QB.push(this.childString(BB)), BB = this.buffer[BB + 3];
        return DB + "(" + QB.join(",") + ")"
      }
      findChild(BB, OB, GB, YB, DB) {
        let {
          buffer: QB
        } = this, oB = -1;
        for (let jB = BB; jB != OB && !(NB(DB, YB, QB[jB + 1], QB[jB + 2]) && (oB = jB, GB > 0)); jB = QB[jB + 3]);
        return oB
      }
      slice(BB, OB, GB) {
        let YB = this.buffer,
          DB = new Uint16Array(OB - BB),
          QB = 0;
        for (let oB = BB, jB = 0; oB < OB;) {
          DB[jB++] = YB[oB++], DB[jB++] = YB[oB++] - GB;
          let OB = DB[jB++] = YB[oB++] - GB;
          DB[jB++] = YB[oB++] - BB, QB = Math.max(QB, OB)
        }
        return new ZB(DB, QB, this.set)
      }
    }

    function NB(BB, OB, GB, YB) {
      switch (BB) {
        case -2:
          return GB < OB;
        case -1:
          return YB >= OB && GB < OB;
        case 0:
          return GB < OB && YB > OB;
        case 1:
          return GB <= OB && YB > OB;
        case 2:
          return YB > OB;
        case 4:
          return !0
      }
    }

    function RB(BB, OB, GB, YB) {
      for (var DB; BB.from == BB.to || (GB < 1 ? BB.from >= OB : BB.from > OB) || (GB > -1 ? BB.to <= OB : BB.to < OB);) {
        let OB = !YB && BB instanceof AB && BB.index < 0 ? null : BB.parent;
        if (!OB) return BB;
        BB = OB
      }
      let QB = YB ? 0 : lB.IgnoreOverlays;
      if (YB)
        for (let oB = BB, jB = oB.parent; jB; oB = jB, jB = oB.parent) oB instanceof AB && oB.index < 0 && (null === (DB = jB.enter(OB, GB, QB)) || void 0 === DB ? void 0 : DB.from) != oB.from && (BB = jB);
      for (;;) {
        let YB = BB.enter(OB, GB, QB);
        if (!YB) return BB;
        BB = YB
      }
    }
    class WB {
      cursor() {
        return new dB(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(BB) {
        let OB = VB(this, BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return OB.length ? OB[0] : null
      }
      getChildren(BB) {
        return VB(this, BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(BB) {
        return RB(this, BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(BB) {
        return RB(this, BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(BB) {
        return SB(this.parent, BB)
      }
      enterUnfinishedNodesBefore(BB) {
        let OB = this.childBefore(BB),
          GB = this;
        for (; OB;) {
          let BB = OB.lastChild;
          if (!BB || BB.to != OB.to) break;
          BB.type.isError && BB.from == BB.to ? (GB = OB, OB = BB.prevSibling) : OB = BB
        }
        return GB
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class AB extends WB {
      constructor(BB, OB, GB, YB) {
        super(), this._tree = BB, this.from = OB, this.index = GB, this._parent = YB
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
      nextChild(BB, OB, GB, YB) {
        let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let QB = this;;) {
          for (let {
              children: oB,
              positions: yB
            } = QB._tree, JB = OB > 0 ? oB.length : -1; BB != JB; BB += OB) {
            let JB, MB = oB[BB],
              PB = yB[BB] + QB.from;
            if (DB & lB.EnterBracketed && MB instanceof pB && (JB = jB.get(MB)) && !JB.overlay && JB.bracketed && GB >= PB && GB <= PB + MB.length || NB(YB, GB, PB, PB + MB.length))
              if (MB instanceof ZB) {
                if (DB & lB.ExcludeBuffers) continue;
                let oB = MB.findChild(0, MB.buffer.length, OB, GB - PB, YB);
                if (oB > -1) return new UB(new nB(QB, MB, BB, PB), null, oB)
              } else if (DB & lB.IncludeAnonymous || !MB.type.isAnonymous || KB(MB)) {
              let oB;
              if (!(DB & lB.IgnoreMounts) && (oB = jB.get(MB)) && !oB.overlay) return new AB(oB.tree, PB, BB, QB);
              let yB = new AB(MB, PB, BB, QB);
              return DB & lB.IncludeAnonymous || !yB.type.isAnonymous ? yB : yB.nextChild(OB < 0 ? MB.children.length - 1 : 0, OB, GB, YB, DB)
            }
          }
          if (DB & lB.IncludeAnonymous || !QB.type.isAnonymous) return null;
          if (BB = QB.index >= 0 ? QB.index + OB : OB < 0 ? -1 : QB._parent._tree.children.length, QB = QB._parent, !QB) return null
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
      enter(BB, OB) {
        let GB, YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(YB & lB.IgnoreOverlays) && (GB = jB.get(this._tree)) && GB.overlay) {
          let DB = BB - this.from,
            QB = YB & lB.EnterBracketed && GB.bracketed;
          for (let {
              from: BB,
              to: YB
            }
            of GB.overlay)
            if ((OB > 0 || QB ? BB <= DB : BB < DB) && (OB < 0 || QB ? YB >= DB : YB > DB)) return new AB(GB.tree, GB.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, BB, OB, YB)
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

    function VB(BB, OB, GB, YB) {
      let DB = BB.cursor(),
        QB = [];
      if (!DB.firstChild()) return QB;
      if (null != GB)
        for (let oB = !1; !oB;)
          if (oB = DB.type.is(GB), !DB.nextSibling()) return QB;
      for (;;) {
        if (null != YB && DB.type.is(YB)) return QB;
        if (DB.type.is(OB) && QB.push(DB.node), !DB.nextSibling()) return null == YB ? QB : []
      }
    }

    function SB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : OB.length - 1;
      for (let YB = BB; GB >= 0; YB = YB.parent) {
        if (!YB) return !1;
        if (!YB.type.isAnonymous) {
          if (OB[GB] && OB[GB] != YB.name) return !1;
          GB--
        }
      }
      return !0
    }
    class nB {
      constructor(BB, OB, GB, YB) {
        this.parent = BB, this.buffer = OB, this.index = GB, this.start = YB
      }
    }
    class UB extends WB {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(BB, OB, GB) {
        super(), this.context = BB, this._parent = OB, this.index = GB, this.type = BB.buffer.set.types[BB.buffer.buffer[GB]]
      }
      child(BB, OB, GB) {
        let {
          buffer: YB
        } = this.context, DB = YB.findChild(this.index + 4, YB.buffer[this.index + 3], BB, OB - this.context.start, GB);
        return DB < 0 ? null : new UB(this.context, this, DB)
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
      enter(BB, OB) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & lB.ExcludeBuffers) return null;
        let {
          buffer: GB
        } = this.context, YB = GB.findChild(this.index + 4, GB.buffer[this.index + 3], OB > 0 ? 1 : -1, BB - this.context.start, OB);
        return YB < 0 ? null : new UB(this.context, this, YB)
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
        } = this.context, OB = BB.buffer[this.index + 3];
        return OB < (this._parent ? BB.buffer[this._parent.index + 3] : BB.buffer.length) ? new UB(this.context, this._parent, OB) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: BB
        } = this.context, OB = this._parent ? this._parent.index + 4 : 0;
        return this.index == OB ? this.externalSibling(-1) : new UB(this.context, this._parent, BB.findChild(OB, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let BB = [],
          OB = [],
          {
            buffer: GB
          } = this.context,
          YB = this.index + 4,
          DB = GB.buffer[this.index + 3];
        if (DB > YB) {
          let QB = GB.buffer[this.index + 1];
          BB.push(GB.slice(YB, DB, QB)), OB.push(0)
        }
        return new pB(this.type, BB, OB, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function fB(BB) {
      if (!BB.length) return null;
      let OB = 0,
        GB = BB[0];
      for (let QB = 1; QB < BB.length; QB++) {
        let YB = BB[QB];
        (YB.from > GB.from || YB.to < GB.to) && (GB = YB, OB = QB)
      }
      let YB = GB instanceof AB && GB.index < 0 ? null : GB.parent,
        DB = BB.slice();
      return YB ? DB[OB] = YB : DB.splice(OB, 1), new kB(DB, GB)
    }
    class kB {
      constructor(BB, OB) {
        this.heads = BB, this.node = OB
      }
      get next() {
        return fB(this.heads)
      }
    }
    class dB {
      get name() {
        return this.type.name
      }
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = OB & ~lB.EnterBracketed, BB instanceof AB) this.yieldNode(BB);
        else {
          this._tree = BB.context.parent, this.buffer = BB.context;
          for (let OB = BB._parent; OB; OB = OB._parent) this.stack.unshift(OB.index);
          this.bufferNode = BB, this.yieldBuf(BB.index)
        }
      }
      yieldNode(BB) {
        return !!BB && (this._tree = BB, this.type = BB.type, this.from = BB.from, this.to = BB.to, !0)
      }
      yieldBuf(BB, OB) {
        this.index = BB;
        let {
          start: GB,
          buffer: YB
        } = this.buffer;
        return this.type = OB || YB.set.types[YB.buffer[BB]], this.from = GB + YB.buffer[BB + 1], this.to = GB + YB.buffer[BB + 2], !0
      }
      yield(BB) {
        return !!BB && (BB instanceof AB ? (this.buffer = null, this.yieldNode(BB)) : (this.buffer = BB.context, this.yieldBuf(BB.index, BB.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(BB, OB, GB) {
        if (!this.buffer) return this.yield(this._tree.nextChild(BB < 0 ? this._tree._tree.children.length - 1 : 0, BB, OB, GB, this.mode));
        let {
          buffer: YB
        } = this.buffer, DB = YB.findChild(this.index + 4, YB.buffer[this.index + 3], BB, OB - this.buffer.start, GB);
        return !(DB < 0) && (this.stack.push(this.index), this.yieldBuf(DB))
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
      enter(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(GB & lB.ExcludeBuffers) && this.enterChild(1, BB, OB) : this.yield(this._tree.enter(BB, OB, GB))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & lB.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let BB = this.mode & lB.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(BB)
      }
      sibling(BB) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + BB, BB, 0, 4, this.mode));
        let {
          buffer: OB
        } = this.buffer, GB = this.stack.length - 1;
        if (BB < 0) {
          let BB = GB < 0 ? 0 : this.stack[GB] + 4;
          if (this.index != BB) return this.yieldBuf(OB.findChild(BB, this.index, -1, 0, 4))
        } else {
          let BB = OB.buffer[this.index + 3];
          if (BB < (GB < 0 ? OB.buffer.length : OB.buffer[this.stack[GB] + 3])) return this.yieldBuf(BB)
        }
        return GB < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + BB, BB, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(BB) {
        let OB, GB, {
          buffer: YB
        } = this;
        if (YB) {
          if (BB > 0) {
            if (this.index < YB.buffer.buffer.length) return !1
          } else
            for (let BB = 0; BB < this.index; BB++)
              if (YB.buffer.buffer[BB + 3] < this.index) return !1;
          ({
            index: OB,
            parent: GB
          } = YB)
        } else({
          index: OB,
          _parent: GB
        } = this._tree);
        for (; GB;
          ({
            index: OB,
            _parent: GB
          } = GB))
          if (OB > -1)
            for (let YB = OB + BB, DB = BB < 0 ? -1 : GB._tree.children.length; YB != DB; YB += BB) {
              let BB = GB._tree.children[YB];
              if (this.mode & lB.IncludeAnonymous || BB instanceof ZB || !BB.type.isAnonymous || KB(BB)) return !1
            }
        return !0
      }
      move(BB, OB) {
        if (OB && this.enterChild(BB, 0, 4)) return !0;
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
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (OB < 1 ? this.from >= BB : this.from > BB) || (OB > -1 ? this.to <= BB : this.to < BB)) && this.parent(););
        for (; this.enterChild(1, BB, OB););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let BB = this.bufferNode,
          OB = null,
          GB = 0;
        if (BB && BB.context == this.buffer) BB: for (let YB = this.index, DB = this.stack.length; DB >= 0;) {
          for (let QB = BB; QB; QB = QB._parent)
            if (QB.index == YB) {
              if (YB == this.index) return QB;
              OB = QB, GB = DB + 1;
              break BB
            } YB = this.stack[--DB]
        }
        for (let YB = GB; YB < this.stack.length; YB++) OB = new UB(this.buffer, OB, this.stack[YB]);
        return this.bufferNode = new UB(this.buffer, OB, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(BB, OB) {
        for (let GB = 0;;) {
          let YB = !1;
          if (this.type.isAnonymous || !1 !== BB(this)) {
            if (this.firstChild()) {
              GB++;
              continue
            }
            this.type.isAnonymous || (YB = !0)
          }
          for (;;) {
            if (YB && OB && OB(this), YB = this.type.isAnonymous, !GB) return;
            if (this.nextSibling()) break;
            this.parent(), GB--, YB = !0
          }
        }
      }
      matchContext(BB) {
        if (!this.buffer) return SB(this.node.parent, BB);
        let {
          buffer: OB
        } = this.buffer, {
          types: GB
        } = OB.set;
        for (let YB = BB.length - 1, DB = this.stack.length - 1; YB >= 0; DB--) {
          if (DB < 0) return SB(this._tree, BB, YB);
          let QB = GB[OB.buffer[this.stack[DB]]];
          if (!QB.isAnonymous) {
            if (BB[YB] && BB[YB] != QB.name) return !1;
            YB--
          }
        }
        return !0
      }
    }

    function KB(BB) {
      return BB.children.some((BB => BB instanceof ZB || !BB.type.isAnonymous || KB(BB)))
    }
    const uB = new WeakMap;

    function mB(BB, OB) {
      if (!BB.isAnonymous || OB instanceof ZB || OB.type != BB) return 1;
      let GB = uB.get(OB);
      if (null == GB) {
        GB = 1;
        for (let YB of OB.children) {
          if (YB.type != BB || !(YB instanceof pB)) {
            GB = 1;
            break
          }
          GB += mB(BB, YB)
        }
        uB.set(OB, GB)
      }
      return GB
    }

    function IB(BB, OB, GB, YB, DB, QB, oB, jB, yB) {
      let JB = 0;
      for (let lB = YB; lB < DB; lB++) JB += mB(BB, OB[lB]);
      let MB = Math.ceil(1.5 * JB / 8),
        PB = [],
        zB = [];
      return function OB(GB, YB, DB, oB, jB) {
        for (let JB = DB; JB < oB;) {
          let DB = JB,
            lB = YB[JB],
            pB = mB(BB, GB[JB]);
          for (JB++; JB < oB; JB++) {
            let OB = mB(BB, GB[JB]);
            if (pB + OB >= MB) break;
            pB += OB
          }
          if (JB == DB + 1) {
            if (pB > MB) {
              let BB = GB[DB];
              OB(BB.children, BB.positions, 0, BB.children.length, YB[DB] + jB);
              continue
            }
            PB.push(GB[DB])
          } else {
            let OB = YB[JB - 1] + GB[JB - 1].length - lB;
            PB.push(IB(BB, GB, YB, DB, JB, lB, OB, null, yB))
          }
          zB.push(lB + jB - QB)
        }
      }(OB, GB, YB, DB, 0), (jB || yB)(PB, zB, oB)
    }
    class FB {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(BB, OB, GB) {
        let YB = this.map.get(BB);
        YB || this.map.set(BB, YB = new Map), YB.set(OB, GB)
      }
      getBuffer(BB, OB) {
        let GB = this.map.get(BB);
        return GB && GB.get(OB)
      }
      set(BB, OB) {
        BB instanceof UB ? this.setBuffer(BB.context.buffer, BB.index, OB) : BB instanceof AB && this.map.set(BB.tree, OB)
      }
      get(BB) {
        return BB instanceof UB ? this.getBuffer(BB.context.buffer, BB.index) : BB instanceof AB ? this.map.get(BB.tree) : void 0
      }
      cursorSet(BB, OB) {
        BB.buffer ? this.setBuffer(BB.buffer.buffer, BB.index, OB) : this.map.set(BB.tree, OB)
      }
      cursorGet(BB) {
        return BB.buffer ? this.getBuffer(BB.buffer.buffer, BB.index) : this.map.get(BB.tree)
      }
    }
    class iB {
      constructor(BB, OB, GB, YB) {
        let DB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          QB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = BB, this.to = OB, this.tree = GB, this.offset = YB, this.open = (DB ? 1 : 0) | (QB ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          YB = [new iB(0, BB.length, BB, 0, !1, GB)];
        for (let DB of OB) DB.to > BB.length && YB.push(DB);
        return YB
      }
      static applyChanges(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!OB.length) return BB;
        let YB = [],
          DB = 1,
          QB = BB.length ? BB[0] : null;
        for (let oB = 0, jB = 0, yB = 0;; oB++) {
          let JB = oB < OB.length ? OB[oB] : null,
            MB = JB ? JB.fromA : 1e9;
          if (MB - jB >= GB)
            for (; QB && QB.from < MB;) {
              let OB = QB;
              if (jB >= OB.from || MB <= OB.to || yB) {
                let BB = Math.max(OB.from, jB) - yB,
                  GB = Math.min(OB.to, MB) - yB;
                OB = BB >= GB ? null : new iB(BB, GB, OB.tree, OB.offset + yB, oB > 0, !!JB)
              }
              if (OB && YB.push(OB), QB.to > MB) break;
              QB = DB < BB.length ? BB[DB++] : null
            }
          if (!JB) break;
          jB = JB.toA, yB = JB.toA - JB.toB
        }
        return YB
      }
    }
    class LB {
      startParse(BB, OB, GB) {
        return "string" == typeof BB && (BB = new gB(BB)), GB = GB ? GB.length ? GB.map((BB => new QB(BB.from, BB.to))) : [new QB(0, 0)] : [new QB(0, BB.length)], this.createParse(BB, OB || [], GB)
      }
      parse(BB, OB, GB) {
        let YB = this.startParse(BB, OB, GB);
        for (;;) {
          let BB = YB.advance();
          if (BB) return BB
        }
      }
    }
    class gB {
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
      read(BB, OB) {
        return this.string.slice(BB, OB)
      }
    }
    new oB({
      perNode: !0
    })
  },
  44493: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => zB,
      f: () => yB,
      g: () => PB,
      i: () => uB
    });
    var YB = GB(44488);
    let DB = 0;
    class QB {
      constructor(BB, OB, GB, YB) {
        this.name = BB, this.set = OB, this.base = GB, this.modified = YB, this.id = DB++
      }
      toString() {
        let {
          name: BB
        } = this;
        for (let OB of this.modified) OB.name && (BB = `${OB.name}(${BB})`);
        return BB
      }
      static define(BB, OB) {
        let GB = "string" == typeof BB ? BB : "?";
        if (BB instanceof QB && (OB = BB), null === OB || void 0 === OB ? void 0 : OB.base) throw new Error("Can not derive from a modified tag");
        let YB = new QB(GB, [], null, []);
        if (YB.set.push(YB), OB)
          for (let DB of OB.set) YB.set.push(DB);
        return YB
      }
      static defineModifier(BB) {
        let OB = new jB(BB);
        return BB => BB.modified.indexOf(OB) > -1 ? BB : jB.get(BB.base || BB, BB.modified.concat(OB).sort(((BB, OB) => BB.id - OB.id)))
      }
    }
    let oB = 0;
    class jB {
      constructor(BB) {
        this.name = BB, this.instances = [], this.id = oB++
      }
      static get(BB, OB) {
        if (!OB.length) return BB;
        let GB = OB[0].instances.find((GB => {
          return GB.base == BB && (YB = OB, DB = GB.modified, YB.length == DB.length && YB.every(((BB, OB) => BB == DB[OB])));
          var YB, DB
        }));
        if (GB) return GB;
        let YB = [],
          DB = new QB(BB.name, YB, BB, OB);
        for (let QB of OB) QB.instances.push(DB);
        let oB = function(BB) {
          let OB = [
            []
          ];
          for (let GB = 0; GB < BB.length; GB++)
            for (let YB = 0, DB = OB.length; YB < DB; YB++) OB.push(OB[YB].concat(BB[GB]));
          return OB.sort(((BB, OB) => OB.length - BB.length))
        }(OB);
        for (let QB of BB.set)
          if (!QB.modified.length)
            for (let BB of oB) YB.push(jB.get(QB, BB));
        return DB
      }
    }

    function yB(BB) {
      let OB = Object.create(null);
      for (let GB in BB) {
        let YB = BB[GB];
        Array.isArray(YB) || (YB = [YB]);
        for (let BB of GB.split(" "))
          if (BB) {
            let GB = [],
              DB = 2,
              QB = BB;
            for (let OB = 0;;) {
              if ("..." == QB && OB > 0 && OB + 3 == BB.length) {
                DB = 1;
                break
              }
              let YB = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(QB);
              if (!YB) throw new RangeError("Invalid path: " + BB);
              if (GB.push("*" == YB[0] ? "" : '"' == YB[0][0] ? JSON.parse(YB[0]) : YB[0]), OB += YB[0].length, OB == BB.length) break;
              let oB = BB[OB++];
              if (OB == BB.length && "!" == oB) {
                DB = 0;
                break
              }
              if ("/" != oB) throw new RangeError("Invalid path: " + BB);
              QB = BB.slice(OB)
            }
            let oB = GB.length - 1,
              jB = GB[oB];
            if (!jB) throw new RangeError("Invalid path: " + BB);
            let yB = new MB(YB, DB, oB > 0 ? GB.slice(0, oB) : null);
            OB[jB] = yB.sort(OB[jB])
          }
      }
      return JB.add(OB)
    }
    const JB = new YB.h({
      combine(BB, OB) {
        let GB, YB, DB;
        for (; BB || OB;) {
          if (!BB || OB && BB.depth >= OB.depth ? (DB = OB, OB = OB.next) : (DB = BB, BB = BB.next), GB && GB.mode == DB.mode && !DB.context && !GB.context) continue;
          let QB = new MB(DB.tags, DB.mode, DB.context);
          GB ? GB.next = QB : YB = QB, GB = QB
        }
        return YB
      }
    });
    class MB {
      constructor(BB, OB, GB, YB) {
        this.tags = BB, this.mode = OB, this.context = GB, this.next = YB
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

    function PB(BB, OB) {
      let GB = Object.create(null);
      for (let QB of BB)
        if (Array.isArray(QB.tag))
          for (let BB of QB.tag) GB[BB.id] = QB.class;
        else GB[QB.tag.id] = QB.class;
      let {
        scope: YB,
        all: DB = null
      } = OB || {};
      return {
        style: BB => {
          let OB = DB;
          for (let YB of BB)
            for (let BB of YB.set) {
              let YB = GB[BB.id];
              if (YB) {
                OB = OB ? OB + " " + YB : YB;
                break
              }
            }
          return OB
        },
        scope: YB
      }
    }

    function zB(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : BB.length,
        QB = new lB(YB, Array.isArray(OB) ? OB : [OB], GB);
      QB.highlightRange(BB.cursor(), YB, DB, "", QB.highlighters), QB.flush(DB)
    }
    MB.empty = new MB([], 2, null);
    class lB {
      constructor(BB, OB, GB) {
        this.at = BB, this.highlighters = OB, this.span = GB, this.class = ""
      }
      startSpan(BB, OB) {
        OB != this.class && (this.flush(BB), BB > this.at && (this.at = BB), this.class = OB)
      }
      flush(BB) {
        BB > this.at && this.class && this.span(this.at, BB, this.class)
      }
      highlightRange(BB, OB, GB, DB, QB) {
        let {
          type: oB,
          from: jB,
          to: yB
        } = BB;
        if (jB >= GB || yB <= OB) return;
        oB.isTop && (QB = this.highlighters.filter((BB => !BB.scope || BB.scope(oB))));
        let PB = DB,
          zB = function(BB) {
            let OB = BB.type.prop(JB);
            for (; OB && OB.context && !BB.matchContext(OB.context);) OB = OB.next;
            return OB || null
          }(BB) || MB.empty,
          lB = function(BB, OB) {
            let GB = null;
            for (let YB of BB) {
              let BB = YB.style(OB);
              BB && (GB = GB ? GB + " " + BB : BB)
            }
            return GB
          }(QB, zB.tags);
        if (lB && (PB && (PB += " "), PB += lB, 1 == zB.mode && (DB += (DB ? " " : "") + lB)), this.startSpan(Math.max(OB, jB), PB), zB.opaque) return;
        let pB = BB.tree && BB.tree.prop(YB.h.mounted);
        if (pB && pB.overlay) {
          let YB = BB.node.enter(pB.overlay[0].from + jB, 1),
            oB = this.highlighters.filter((BB => !BB.scope || BB.scope(pB.tree.type))),
            JB = BB.firstChild();
          for (let MB = 0, zB = jB;; MB++) {
            let lB = MB < pB.overlay.length ? pB.overlay[MB] : null,
              qB = lB ? lB.from + jB : yB,
              ZB = Math.max(OB, zB),
              NB = Math.min(GB, qB);
            if (ZB < NB && JB)
              for (; BB.from < NB && (this.highlightRange(BB, ZB, NB, DB, QB), this.startSpan(Math.min(NB, BB.to), PB), !(BB.to >= qB) && BB.nextSibling()););
            if (!lB || qB > GB) break;
            zB = lB.to + jB, zB > OB && (this.highlightRange(YB.cursor(), Math.max(OB, lB.from + jB), Math.min(GB, zB), "", oB), this.startSpan(Math.min(GB, zB), PB))
          }
          JB && BB.parent()
        } else if (BB.firstChild()) {
          pB && (DB = "");
          do {
            if (!(BB.to <= OB)) {
              if (BB.from >= GB) break;
              this.highlightRange(BB, OB, GB, DB, QB), this.startSpan(Math.min(GB, BB.to), PB)
            }
          } while (BB.nextSibling());
          BB.parent()
        }
      }
    }
    const pB = QB.define,
      qB = pB(),
      ZB = pB(),
      NB = pB(ZB),
      RB = pB(ZB),
      WB = pB(),
      AB = pB(WB),
      VB = pB(WB),
      SB = pB(),
      nB = pB(SB),
      UB = pB(),
      fB = pB(),
      kB = pB(),
      dB = pB(kB),
      KB = pB(),
      uB = {
        comment: qB,
        lineComment: pB(qB),
        blockComment: pB(qB),
        docComment: pB(qB),
        name: ZB,
        variableName: pB(ZB),
        typeName: NB,
        tagName: pB(NB),
        propertyName: RB,
        attributeName: pB(RB),
        className: pB(ZB),
        labelName: pB(ZB),
        namespace: pB(ZB),
        macroName: pB(ZB),
        literal: WB,
        string: AB,
        docString: pB(AB),
        character: pB(AB),
        attributeValue: pB(AB),
        number: VB,
        integer: pB(VB),
        float: pB(VB),
        bool: pB(WB),
        regexp: pB(WB),
        escape: pB(WB),
        color: pB(WB),
        url: pB(WB),
        keyword: UB,
        self: pB(UB),
        null: pB(UB),
        atom: pB(UB),
        unit: pB(UB),
        modifier: pB(UB),
        operatorKeyword: pB(UB),
        controlKeyword: pB(UB),
        definitionKeyword: pB(UB),
        moduleKeyword: pB(UB),
        operator: fB,
        derefOperator: pB(fB),
        arithmeticOperator: pB(fB),
        logicOperator: pB(fB),
        bitwiseOperator: pB(fB),
        compareOperator: pB(fB),
        updateOperator: pB(fB),
        definitionOperator: pB(fB),
        typeOperator: pB(fB),
        controlOperator: pB(fB),
        punctuation: kB,
        separator: pB(kB),
        bracket: dB,
        angleBracket: pB(dB),
        squareBracket: pB(dB),
        paren: pB(dB),
        brace: pB(dB),
        content: SB,
        heading: nB,
        heading1: pB(nB),
        heading2: pB(nB),
        heading3: pB(nB),
        heading4: pB(nB),
        heading5: pB(nB),
        heading6: pB(nB),
        contentSeparator: pB(SB),
        list: pB(SB),
        quote: pB(SB),
        emphasis: pB(SB),
        strong: pB(SB),
        link: pB(SB),
        monospace: pB(SB),
        strikethrough: pB(SB),
        inserted: pB(),
        deleted: pB(),
        changed: pB(),
        invalid: pB(),
        meta: KB,
        documentMeta: pB(KB),
        annotation: pB(KB),
        processingInstruction: pB(KB),
        definition: QB.defineModifier("definition"),
        constant: QB.defineModifier("constant"),
        function: QB.defineModifier("function"),
        standard: QB.defineModifier("standard"),
        local: QB.defineModifier("local"),
        special: QB.defineModifier("special")
      };
    for (let mB in uB) {
      let BB = uB[mB];
      BB instanceof QB && (BB.name = mB)
    }
    PB([{
      tag: uB.link,
      class: "tok-link"
    }, {
      tag: uB.heading,
      class: "tok-heading"
    }, {
      tag: uB.emphasis,
      class: "tok-emphasis"
    }, {
      tag: uB.strong,
      class: "tok-strong"
    }, {
      tag: uB.keyword,
      class: "tok-keyword"
    }, {
      tag: uB.atom,
      class: "tok-atom"
    }, {
      tag: uB.bool,
      class: "tok-bool"
    }, {
      tag: uB.url,
      class: "tok-url"
    }, {
      tag: uB.labelName,
      class: "tok-labelName"
    }, {
      tag: uB.inserted,
      class: "tok-inserted"
    }, {
      tag: uB.deleted,
      class: "tok-deleted"
    }, {
      tag: uB.literal,
      class: "tok-literal"
    }, {
      tag: uB.string,
      class: "tok-string"
    }, {
      tag: uB.number,
      class: "tok-number"
    }, {
      tag: [uB.regexp, uB.escape, uB.special(uB.string)],
      class: "tok-string2"
    }, {
      tag: uB.variableName,
      class: "tok-variableName"
    }, {
      tag: uB.local(uB.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: uB.definition(uB.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: uB.special(uB.variableName),
      class: "tok-variableName2"
    }, {
      tag: uB.definition(uB.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: uB.typeName,
      class: "tok-typeName"
    }, {
      tag: uB.namespace,
      class: "tok-namespace"
    }, {
      tag: uB.className,
      class: "tok-className"
    }, {
      tag: uB.macroName,
      class: "tok-macroName"
    }, {
      tag: uB.propertyName,
      class: "tok-propertyName"
    }, {
      tag: uB.operator,
      class: "tok-operator"
    }, {
      tag: uB.comment,
      class: "tok-comment"
    }, {
      tag: uB.meta,
      class: "tok-meta"
    }, {
      tag: uB.invalid,
      class: "tok-invalid"
    }, {
      tag: uB.punctuation,
      class: "tok-punctuation"
    }])
  },
  44508: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => jB.h,
      h: () => oB.r,
      k: () => oB.D,
      m: () => oB.G,
      p: () => jB.l,
      s: () => nG,
      u: () => jB.N,
      w: () => jB.gb
    });
    var YB = GB(1425),
      DB = GB(1416),
      QB = GB(56),
      oB = GB(44470),
      jB = GB(44474),
      yB = GB(44485),
      JB = GB(44488);

    function MB(BB, OB) {
      return GB => {
        let {
          state: YB,
          dispatch: DB
        } = GB;
        if (YB.readOnly) return !1;
        let QB = BB(OB, YB);
        return !!QB && (DB(YB.update(QB)), !0)
      }
    }
    const PB = MB(NB, 0),
      zB = MB(ZB, 0),
      lB = MB(((BB, OB) => ZB(BB, OB, function(BB) {
        let OB = [];
        for (let GB of BB.selection.JZ) {
          let YB = BB.doc.lineAt(GB.from),
            DB = GB.to <= YB.to ? YB : BB.doc.lineAt(GB.to);
          DB.from > YB.from && DB.from == GB.to && (DB = GB.to == YB.to + 1 ? YB : BB.doc.lineAt(GB.to - 1));
          let QB = OB.length - 1;
          QB >= 0 && OB[QB].to > YB.from ? OB[QB].to = DB.to : OB.push({
            from: YB.from + /^\s*/.exec(YB.text)[0].length,
            to: DB.to
          })
        }
        return OB
      }(OB))), 0);

    function pB(BB, OB) {
      let GB = BB.languageDataAt("commentTokens", OB, 1);
      return GB.length ? GB[0] : {}
    }
    const qB = 50;

    function ZB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : OB.selection.JZ,
        YB = GB.map((BB => pB(OB, BB.from).block));
      if (!YB.every((BB => BB))) return null;
      let DB = GB.map(((BB, GB) => function(BB, OB, GB, YB) {
        let DB, QB, {
            open: oB,
            close: jB
          } = OB,
          yB = BB.sliceDoc(GB - qB, GB),
          JB = BB.sliceDoc(YB, YB + qB),
          MB = /\s*$/.exec(yB)[0].length,
          PB = /^\s*/.exec(JB)[0].length,
          zB = yB.length - MB;
        if (yB.slice(zB - oB.length, zB) == oB && JB.slice(PB, PB + jB.length) == jB) return {
          open: {
            pos: GB - MB,
            margin: MB && 1
          },
          close: {
            pos: YB + PB,
            margin: PB && 1
          }
        };
        YB - GB <= 2 * qB ? DB = QB = BB.sliceDoc(GB, YB) : (DB = BB.sliceDoc(GB, GB + qB), QB = BB.sliceDoc(YB - qB, YB));
        let lB = /^\s*/.exec(DB)[0].length,
          pB = /\s*$/.exec(QB)[0].length,
          ZB = QB.length - pB - jB.length;
        return DB.slice(lB, lB + oB.length) == oB && QB.slice(ZB, ZB + jB.length) == jB ? {
          open: {
            pos: GB + lB + oB.length,
            margin: /\s/.test(DB.charAt(lB + oB.length)) ? 1 : 0
          },
          close: {
            pos: YB - pB - jB.length,
            margin: /\s/.test(QB.charAt(ZB - 1)) ? 1 : 0
          }
        } : null
      }(OB, YB[GB], BB.from, BB.to)));
      if (2 != BB && !DB.every((BB => BB))) return {
        changes: OB.changes(GB.map(((BB, OB) => DB[OB] ? [] : [{
          from: BB.from,
          insert: YB[OB].open + " "
        }, {
          from: BB.to,
          insert: " " + YB[OB].close
        }])))
      };
      if (1 != BB && DB.some((BB => BB))) {
        let BB = [];
        for (let OB, GB = 0; GB < DB.length; GB++)
          if (OB = DB[GB]) {
            let DB = YB[GB],
              {
                open: QB,
                close: oB
              } = OB;
            BB.push({
              from: QB.pos - DB.open.length,
              to: QB.pos + QB.margin
            }, {
              from: oB.pos - oB.margin,
              to: oB.pos + DB.close.length
            })
          } return {
          changes: BB
        }
      }
      return null
    }

    function NB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : OB.selection.JZ,
        YB = [],
        DB = -1;
      BB: for (let {
          from: QB,
          to: oB
        }
        of GB) {
        let BB, GB = YB.length,
          jB = 1e9;
        for (let yB = QB; yB <= oB;) {
          let GB = OB.doc.lineAt(yB);
          if (void 0 == BB && (BB = pB(OB, GB.from).line, !BB)) continue BB;
          if (GB.from > DB && (QB == oB || oB > GB.from)) {
            DB = GB.from;
            let OB = /^\s*/.exec(GB.text)[0].length,
              QB = OB == GB.length,
              oB = GB.text.slice(OB, OB + BB.length) == BB ? OB : -1;
            OB < GB.text.length && OB < jB && (jB = OB), YB.push({
              line: GB,
              comment: oB,
              token: BB,
              indent: OB,
              empty: QB,
              single: !1
            })
          }
          yB = GB.to + 1
        }
        if (jB < 1e9)
          for (let OB = GB; OB < YB.length; OB++) YB[OB].indent < YB[OB].line.text.length && (YB[OB].indent = jB);
        YB.length == GB + 1 && (YB[GB].single = !0)
      }
      if (2 != BB && YB.some((BB => BB.comment < 0 && (!BB.empty || BB.single)))) {
        let BB = [];
        for (let {
            line: OB,
            token: DB,
            indent: QB,
            empty: oB,
            single: jB
          }
          of YB) !jB && oB || BB.push({
          from: OB.from + QB,
          insert: DB + " "
        });
        let GB = OB.changes(BB);
        return {
          changes: GB,
          selection: OB.selection.map(GB, 1)
        }
      }
      if (1 != BB && YB.some((BB => BB.comment >= 0))) {
        let BB = [];
        for (let {
            line: OB,
            comment: GB,
            token: DB
          }
          of YB)
          if (GB >= 0) {
            let YB = OB.from + GB,
              QB = YB + DB.length;
            " " == OB.text[QB - OB.from] && QB++, BB.push({
              from: YB,
              to: QB
            })
          } return {
          changes: BB
        }
      }
      return null
    }
    const RB = oB.b.define(),
      WB = oB.b.define(),
      AB = oB.o.define(),
      VB = oB.o.define({
        combine: BB => (0, oB.V)(BB, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (BB, OB) => OB
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (BB, OB) => (GB, YB) => BB(GB, YB) || OB(GB, YB)
        })
      }),
      SB = oB.G.define({
        create: () => wB.empty,
        update(BB, OB) {
          let GB = OB.state.facet(VB),
            YB = OB.annotation(RB);
          if (YB) {
            let DB = KB.fromTransaction(OB, YB.selection),
              QB = YB.side,
              oB = 0 == QB ? BB.undone : BB.done;
            return oB = DB ? uB(oB, oB.length, GB.minDepth, DB) : iB(oB, OB.startState.selection), new wB(0 == QB ? YB.rest : oB, 0 == QB ? oB : YB.rest)
          }
          let DB = OB.annotation(WB);
          if ("full" != DB && "before" != DB || (BB = BB.isolate()), !1 === OB.annotation(oB.L.addToHistory)) return OB.changes.empty ? BB : BB.addMapping(OB.changes.desc);
          let QB = KB.fromTransaction(OB),
            jB = OB.annotation(oB.L.time),
            yB = OB.annotation(oB.L.userEvent);
          return QB ? BB = BB.addChanges(QB, jB, yB, GB, OB) : OB.selection && (BB = BB.addSelection(OB.startState.selection, jB, yB, GB.newGroupDelay)), "full" != DB && "after" != DB || (BB = BB.isolate()), BB
        },
        toJSON: BB => ({
          done: BB.done.map((BB => BB.toJSON())),
          undone: BB.undone.map((BB => BB.toJSON()))
        }),
        fromJSON: BB => new wB(BB.done.map(KB.fromJSON), BB.undone.map(KB.fromJSON))
      });

    function nB(BB, OB) {
      return function(GB) {
        let {
          state: YB,
          dispatch: DB
        } = GB;
        if (!OB && YB.readOnly) return !1;
        let QB = YB.field(SB, !1);
        if (!QB) return !1;
        let oB = QB.pop(BB, YB, OB);
        return !!oB && (DB(oB), !0)
      }
    }
    const UB = nB(0, !1),
      fB = nB(1, !1),
      kB = nB(0, !0),
      dB = nB(1, !0);
    class KB {
      constructor(BB, OB, GB, YB, DB) {
        this.changes = BB, this.effects = OB, this.mapped = GB, this.startSelection = YB, this.selectionsAfter = DB
      }
      setSelAfter(BB) {
        return new KB(this.changes, this.effects, this.mapped, this.startSelection, BB)
      }
      toJSON() {
        var BB, OB, GB;
        return {
          changes: null === (BB = this.changes) || void 0 === BB ? void 0 : BB.toJSON(),
          mapped: null === (OB = this.mapped) || void 0 === OB ? void 0 : OB.toJSON(),
          startSelection: null === (GB = this.startSelection) || void 0 === GB ? void 0 : GB.toJSON(),
          selectionsAfter: this.selectionsAfter.map((BB => BB.toJSON()))
        }
      }
      static fromJSON(BB) {
        return new KB(BB.changes && oB.ChangeSet.fromJSON(BB.changes), [], BB.mapped && oB.f.fromJSON(BB.mapped), BB.startSelection && oB.j.fromJSON(BB.startSelection), BB.selectionsAfter.map(oB.j.fromJSON))
      }
      static fromTransaction(BB, OB) {
        let GB = IB;
        for (let YB of BB.startState.facet(AB)) {
          let OB = YB(BB);
          OB.length && (GB = GB.concat(OB))
        }
        return !GB.length && BB.changes.empty ? null : new KB(BB.changes.invert(BB.startState.doc), GB, void 0, OB || BB.startState.selection, IB)
      }
      static selection(BB) {
        return new KB(void 0, IB, void 0, void 0, BB)
      }
    }

    function uB(BB, OB, GB, YB) {
      let DB = OB + 1 > GB + 20 ? OB - GB - 1 : 0,
        QB = BB.slice(DB, OB);
      return QB.push(YB), QB
    }

    function mB(BB, OB) {
      return BB.length ? OB.length ? BB.concat(OB) : BB : OB
    }
    const IB = [],
      FB = 200;

    function iB(BB, OB) {
      if (BB.length) {
        let GB = BB[BB.length - 1],
          YB = GB.selectionsAfter.slice(Math.max(0, GB.selectionsAfter.length - FB));
        return YB.length && YB[YB.length - 1].eq(OB) ? BB : (YB.push(OB), uB(BB, BB.length - 1, 1e9, GB.setSelAfter(YB)))
      }
      return [KB.selection([OB])]
    }

    function LB(BB) {
      let OB = BB[BB.length - 1],
        GB = BB.slice();
      return GB[BB.length - 1] = OB.setSelAfter(OB.selectionsAfter.slice(0, OB.selectionsAfter.length - 1)), GB
    }

    function gB(BB, OB) {
      if (!BB.length) return BB;
      let GB = BB.length,
        YB = IB;
      for (; GB;) {
        let DB = rB(BB[GB - 1], OB, YB);
        if (DB.changes && !DB.changes.empty || DB.effects.length) {
          let OB = BB.slice(0, GB);
          return OB[GB - 1] = DB, OB
        }
        OB = DB.mapped, GB--, YB = DB.selectionsAfter
      }
      return YB.length ? [KB.selection(YB)] : IB
    }

    function rB(BB, OB, GB) {
      let YB = mB(BB.selectionsAfter.length ? BB.selectionsAfter.map((BB => BB.map(OB))) : IB, GB);
      if (!BB.changes) return KB.selection(YB);
      let DB = BB.changes.map(OB),
        QB = OB.mapDesc(BB.changes, !0),
        jB = BB.mapped ? BB.mapped.composeDesc(QB) : QB;
      return new KB(DB, oB.D.mapEffects(BB.effects, OB), jB, BB.startSelection.map(QB), YB)
    }
    const XB = /^(input\.type|delete)($|\.)/;
    class wB {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = BB, this.undone = OB, this.prevTime = GB, this.prevUserEvent = YB
      }
      isolate() {
        return this.prevTime ? new wB(this.done, this.undone) : this
      }
      addChanges(BB, OB, GB, YB, DB) {
        let QB = this.done,
          jB = QB[QB.length - 1];
        return QB = jB && jB.changes && !jB.changes.empty && BB.changes && (!GB || XB.test(GB)) && (!jB.selectionsAfter.length && OB - this.prevTime < YB.newGroupDelay && YB.joinToEvent(DB, function(BB, OB) {
          let GB = [],
            YB = !1;
          return BB.iterChangedRanges(((BB, OB) => GB.push(BB, OB))), OB.iterChangedRanges(((BB, OB, DB, QB) => {
            for (let oB = 0; oB < GB.length;) {
              let BB = GB[oB++],
                OB = GB[oB++];
              QB >= BB && DB <= OB && (YB = !0)
            }
          })), YB
        }(jB.changes, BB.changes)) || "input.type.compose" == GB) ? uB(QB, QB.length - 1, YB.minDepth, new KB(BB.changes.compose(jB.changes), mB(oB.D.mapEffects(BB.effects, jB.changes), jB.effects), jB.mapped, jB.startSelection, IB)) : uB(QB, QB.length, YB.minDepth, BB), new wB(QB, IB, OB, GB)
      }
      addSelection(BB, OB, GB, YB) {
        let DB = this.done.length ? this.done[this.done.length - 1].selectionsAfter : IB;
        return DB.length > 0 && OB - this.prevTime < YB && GB == this.prevUserEvent && GB && /^select($|\.)/.test(GB) && (QB = DB[DB.length - 1], oB = BB, QB.JZ.length == oB.JZ.length && 0 === QB.JZ.filter(((BB, OB) => BB.empty != oB.JZ[OB].empty)).length) ? this : new wB(iB(this.done, BB), this.undone, OB, GB);
        var QB, oB
      }
      addMapping(BB) {
        return new wB(gB(this.done, BB), gB(this.undone, BB), this.prevTime, this.prevUserEvent)
      }
      pop(BB, OB, GB) {
        let YB = 0 == BB ? this.done : this.undone;
        if (0 == YB.length) return null;
        let DB = YB[YB.length - 1],
          QB = DB.selectionsAfter[0] || (DB.startSelection ? DB.startSelection.map(DB.changes.invertedDesc, 1) : OB.selection);
        if (GB && DB.selectionsAfter.length) return OB.update({
          selection: DB.selectionsAfter[DB.selectionsAfter.length - 1],
          annotations: RB.of({
            side: BB,
            rest: LB(YB),
            selection: QB
          }),
          userEvent: 0 == BB ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (DB.changes) {
          let GB = 1 == YB.length ? IB : YB.slice(0, YB.length - 1);
          return DB.mapped && (GB = gB(GB, DB.mapped)), OB.update({
            changes: DB.changes,
            selection: DB.startSelection,
            effects: DB.effects,
            annotations: RB.of({
              side: BB,
              rest: GB,
              selection: QB
            }),
            filter: !1,
            userEvent: 0 == BB ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    wB.empty = new wB(IB, IB);
    const EB = [{
      key: "Mod-z",
      run: UB,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: fB,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: fB,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: kB,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: dB,
      preventDefault: !0
    }];

    function cB(BB, OB) {
      return oB.j.create(BB.JZ.map(OB), BB.mainIndex)
    }

    function hB(BB, OB) {
      return BB.update({
        selection: OB,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function aB(BB, OB) {
      let {
        state: GB,
        dispatch: YB
      } = BB, DB = cB(GB.selection, OB);
      return !DB.eq(GB.selection, !0) && (YB(hB(GB, DB)), !0)
    }

    function eB(BB, OB) {
      return oB.j.cursor(OB ? BB.to : BB.from)
    }

    function TB(BB, OB) {
      return aB(BB, (GB => GB.empty ? BB.moveByChar(GB, OB) : eB(GB, OB)))
    }

    function bB(BB) {
      return BB.textDirectionAt(BB.state.selection.main.head) == jB.f.LTR
    }
    const CB = BB => TB(BB, !bB(BB)),
      HB = BB => TB(BB, bB(BB));

    function vB(BB, OB) {
      return aB(BB, (GB => GB.empty ? BB.moveByGroup(GB, OB) : eB(GB, OB)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function sB(BB, OB, GB) {
      if (OB.type.prop(GB)) return !0;
      let YB = OB.to - OB.from;
      return YB && (YB > 2 || /[^\s,.;:]/.test(BB.sliceDoc(OB.from, OB.to))) || OB.firstChild
    }

    function xB(BB, OB, GB) {
      let YB, DB, QB = (0, yB.pb)(BB).resolveInner(OB.head),
        jB = GB ? JB.h.closedBy : JB.h.openedBy;
      for (let oB = OB.head;;) {
        let OB = GB ? QB.childAfter(oB) : QB.childBefore(oB);
        if (!OB) break;
        sB(BB, OB, jB) ? QB = OB : oB = GB ? OB.to : OB.from
      }
      return DB = QB.type.prop(jB) && (YB = GB ? (0, yB.eb)(BB, QB.from, 1) : (0, yB.eb)(BB, QB.to, -1)) && YB.matched ? GB ? YB.end.to : YB.end.from : GB ? QB.to : QB.from, oB.j.cursor(DB, GB ? -1 : 1)
    }

    function tB(BB, OB) {
      return aB(BB, (GB => {
        if (!GB.empty) return eB(GB, OB);
        let YB = BB.moveVertically(GB, OB);
        return YB.head != GB.head ? YB : BB.moveToLineBoundary(GB, OB)
      }))
    }
    const BO = BB => tB(BB, !1),
      OO = BB => tB(BB, !0);

    function GO(BB) {
      let OB, GB = BB.scrollDOM.clientHeight < BB.scrollDOM.scrollHeight - 2,
        YB = 0,
        DB = 0;
      if (GB) {
        for (let OB of BB.state.facet(jB.h.scrollMargins)) {
          let GB = OB(BB);
          (null === GB || void 0 === GB ? void 0 : GB.top) && (YB = Math.max(null === GB || void 0 === GB ? void 0 : GB.top, YB)), (null === GB || void 0 === GB ? void 0 : GB.bottom) && (DB = Math.max(null === GB || void 0 === GB ? void 0 : GB.bottom, DB))
        }
        OB = BB.scrollDOM.clientHeight - YB - DB
      } else OB = (BB.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: YB,
        marginBottom: DB,
        selfScroll: GB,
        height: Math.max(BB.defaultLineHeight, OB - 5)
      }
    }

    function YO(BB, OB) {
      let GB, YB = GO(BB),
        {
          state: DB
        } = BB,
        QB = cB(DB.selection, (GB => GB.empty ? BB.moveVertically(GB, OB, YB.height) : eB(GB, OB)));
      if (QB.eq(DB.selection)) return !1;
      if (YB.selfScroll) {
        let OB = BB.coordsAtPos(DB.selection.main.head),
          oB = BB.scrollDOM.getBoundingClientRect(),
          yB = oB.top + YB.marginTop,
          JB = oB.bottom - YB.marginBottom;
        OB && OB.top > yB && OB.bottom < JB && (GB = jB.h.scrollIntoView(QB.main.head, {
          y: "start",
          yMargin: OB.top - yB
        }))
      }
      return BB.dispatch(hB(DB, QB), {
        effects: GB
      }), !0
    }
    const DO = BB => YO(BB, !1),
      QO = BB => YO(BB, !0);

    function oO(BB, OB, GB) {
      let YB = BB.lineBlockAt(OB.head),
        DB = BB.moveToLineBoundary(OB, GB);
      if (DB.head == OB.head && DB.head != (GB ? YB.to : YB.from) && (DB = BB.moveToLineBoundary(OB, GB, !1)), !GB && DB.head == YB.from && YB.length) {
        let GB = /^\s*/.exec(BB.state.sliceDoc(YB.from, Math.min(YB.from + 100, YB.to)))[0].length;
        GB && OB.head != YB.from + GB && (DB = oB.j.cursor(YB.from + GB))
      }
      return DB
    }

    function jO(BB, OB, GB) {
      let YB = !1,
        DB = cB(BB.selection, (OB => {
          let DB = (0, yB.eb)(BB, OB.head, -1) || (0, yB.eb)(BB, OB.head, 1) || OB.head > 0 && (0, yB.eb)(BB, OB.head - 1, 1) || OB.head < BB.doc.length && (0, yB.eb)(BB, OB.head + 1, -1);
          if (!DB || !DB.end) return OB;
          YB = !0;
          let QB = DB.start.from == OB.head ? DB.end.to : DB.end.from;
          return GB ? oB.j.range(OB.anchor, QB) : oB.j.cursor(QB)
        }));
      return !!YB && (OB(hB(BB, DB)), !0)
    }

    function yO(BB, OB) {
      let GB = cB(BB.state.selection, (BB => {
        let GB = OB(BB);
        return oB.j.range(BB.anchor, GB.head, GB.goalColumn, GB.bidiLevel || void 0, GB.assoc)
      }));
      return !GB.eq(BB.state.selection) && (BB.dispatch(hB(BB.state, GB)), !0)
    }

    function JO(BB, OB) {
      return yO(BB, (GB => BB.moveByChar(GB, OB)))
    }
    const MO = BB => JO(BB, !bB(BB)),
      PO = BB => JO(BB, bB(BB));

    function zO(BB, OB) {
      return yO(BB, (GB => BB.moveByGroup(GB, OB)))
    }

    function lO(BB, OB) {
      return yO(BB, (GB => BB.moveVertically(GB, OB)))
    }
    const pO = BB => lO(BB, !1),
      qO = BB => lO(BB, !0);

    function ZO(BB, OB) {
      return yO(BB, (GB => BB.moveVertically(GB, OB, GO(BB).height)))
    }
    const NO = BB => ZO(BB, !1),
      RO = BB => ZO(BB, !0),
      WO = BB => {
        let {
          state: OB,
          dispatch: GB
        } = BB;
        return GB(hB(OB, {
          anchor: 0
        })), !0
      },
      AO = BB => {
        let {
          state: OB,
          dispatch: GB
        } = BB;
        return GB(hB(OB, {
          anchor: OB.doc.length
        })), !0
      },
      VO = BB => {
        let {
          state: OB,
          dispatch: GB
        } = BB;
        return GB(hB(OB, {
          anchor: OB.selection.main.anchor,
          head: 0
        })), !0
      },
      SO = BB => {
        let {
          state: OB,
          dispatch: GB
        } = BB;
        return GB(hB(OB, {
          anchor: OB.selection.main.anchor,
          head: OB.doc.length
        })), !0
      };

    function nO(BB, OB) {
      let {
        state: GB
      } = BB, YB = GB.selection, DB = GB.selection.JZ.slice();
      for (let QB of GB.selection.JZ) {
        let YB = GB.doc.lineAt(QB.head);
        if (OB ? YB.to < BB.state.doc.length : YB.from > 0)
          for (let GB = QB;;) {
            let QB = BB.moveVertically(GB, OB);
            if (QB.head < YB.from || QB.head > YB.to) {
              DB.some((BB => BB.head == QB.head)) || DB.push(QB);
              break
            }
            if (QB.head == GB.head) break;
            GB = QB
          }
      }
      return DB.length != YB.JZ.length && (BB.dispatch(hB(GB, oB.j.create(DB, DB.length - 1))), !0)
    }

    function UO(BB, OB) {
      if (BB.state.readOnly) return !1;
      let GB = "delete.selection",
        {
          state: YB
        } = BB,
        DB = YB.changeByRange((YB => {
          let {
            from: DB,
            to: QB
          } = YB;
          if (DB == QB) {
            let oB = OB(YB);
            oB < DB ? (GB = "delete.backward", oB = fO(BB, oB, !1)) : oB > DB && (GB = "delete.forward", oB = fO(BB, oB, !0)), DB = Math.min(DB, oB), QB = Math.max(QB, oB)
          } else DB = fO(BB, DB, !1), QB = fO(BB, QB, !0);
          return DB == QB ? {
            range: YB
          } : {
            changes: {
              from: DB,
              to: QB
            },
            range: oB.j.cursor(DB, DB < YB.head ? -1 : 1)
          }
        }));
      return !DB.changes.empty && (BB.dispatch(YB.update(DB, {
        scrollIntoView: !0,
        userEvent: GB,
        effects: "delete.selection" == GB ? jB.h.announce.of(YB.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function fO(BB, OB, GB) {
      if (BB instanceof jB.h)
        for (let YB of BB.state.facet(jB.h.atomicRanges).map((OB => OB(BB)))) YB.between(OB, OB, ((BB, YB) => {
          BB < OB && YB > OB && (OB = GB ? YB : BB)
        }));
      return OB
    }
    const kO = (BB, OB, GB) => UO(BB, (YB => {
        let DB, QB, jB = YB.from,
          {
            state: JB
          } = BB,
          MB = JB.doc.lineAt(jB);
        if (GB && !OB && jB > MB.from && jB < MB.from + 200 && !/[^ \t]/.test(DB = MB.text.slice(0, jB - MB.from))) {
          if ("\t" == DB[DB.length - 1]) return jB - 1;
          let BB = (0, oB.W)(DB, JB.tabSize) % (0, yB.U)(JB) || (0, yB.U)(JB);
          for (let OB = 0; OB < BB && " " == DB[DB.length - 1 - OB]; OB++) jB--;
          QB = jB
        } else QB = (0, oB.X)(MB.text, jB - MB.from, OB, OB) + MB.from, QB == jB && MB.number != (OB ? JB.doc.lines : 1) ? QB += OB ? 1 : -1 : !OB && /[\ufe00-\ufe0f]/.test(MB.text.slice(QB - MB.from, jB - MB.from)) && (QB = (0, oB.X)(MB.text, QB - MB.from, !1, !1) + MB.from);
        return QB
      })),
      dO = BB => kO(BB, !1, !0),
      KO = BB => kO(BB, !0, !1),
      uO = (BB, OB) => UO(BB, (GB => {
        let YB = GB.head,
          {
            state: DB
          } = BB,
          QB = DB.doc.lineAt(YB),
          jB = DB.charCategorizer(YB);
        for (let BB = null;;) {
          if (YB == (OB ? QB.to : QB.from)) {
            YB == GB.head && QB.number != (OB ? DB.doc.lines : 1) && (YB += OB ? 1 : -1);
            break
          }
          let yB = (0, oB.X)(QB.text, YB - QB.from, OB) + QB.from,
            JB = QB.text.slice(Math.min(YB, yB) - QB.from, Math.max(YB, yB) - QB.from),
            MB = jB(JB);
          if (null != BB && MB != BB) break;
          " " == JB && YB == GB.head || (BB = MB), YB = yB
        }
        return YB
      })),
      mO = BB => uO(BB, !1);

    function IO(BB) {
      let OB = [],
        GB = -1;
      for (let YB of BB.selection.JZ) {
        let DB = BB.doc.lineAt(YB.from),
          QB = BB.doc.lineAt(YB.to);
        if (YB.empty || YB.to != QB.from || (QB = BB.doc.lineAt(YB.to - 1)), GB >= DB.number) {
          let BB = OB[OB.length - 1];
          BB.to = QB.to, BB.JZ.push(YB)
        } else OB.push({
          from: DB.from,
          to: QB.to,
          JZ: [YB]
        });
        GB = QB.number + 1
      }
      return OB
    }

    function FO(BB, OB, GB) {
      if (BB.readOnly) return !1;
      let YB = [],
        DB = [];
      for (let QB of IO(BB)) {
        if (GB ? QB.to == BB.doc.length : 0 == QB.from) continue;
        let OB = BB.doc.lineAt(GB ? QB.to + 1 : QB.from - 1),
          jB = OB.length + 1;
        if (GB) {
          YB.push({
            from: QB.to,
            to: OB.to
          }, {
            from: QB.from,
            insert: OB.text + BB.lineBreak
          });
          for (let OB of QB.JZ) DB.push(oB.j.range(Math.min(BB.doc.length, OB.anchor + jB), Math.min(BB.doc.length, OB.head + jB)))
        } else {
          YB.push({
            from: OB.from,
            to: QB.from
          }, {
            from: QB.to,
            insert: BB.lineBreak + OB.text
          });
          for (let BB of QB.JZ) DB.push(oB.j.range(BB.anchor - jB, BB.head - jB))
        }
      }
      return !!YB.length && (OB(BB.update({
        changes: YB,
        scrollIntoView: !0,
        selection: oB.j.create(DB, BB.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function iO(BB, OB, GB) {
      if (BB.readOnly) return !1;
      let YB = [];
      for (let QB of IO(BB)) GB ? YB.push({
        from: QB.from,
        insert: BB.doc.slice(QB.from, QB.to) + BB.lineBreak
      }) : YB.push({
        from: QB.to,
        insert: BB.lineBreak + BB.doc.slice(QB.from, QB.to)
      });
      let DB = BB.changes(YB);
      return OB(BB.update({
        changes: DB,
        selection: BB.selection.map(DB, GB ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const LO = gO(!1);

    function gO(BB) {
      return OB => {
        let {
          state: GB,
          dispatch: YB
        } = OB;
        if (GB.readOnly) return !1;
        let DB = GB.changeByRange((OB => {
          let {
            from: YB,
            to: DB
          } = OB, QB = GB.doc.lineAt(YB), jB = !BB && YB == DB && function(BB, OB) {
            if (/\(\)|\[\]|\{\}/.test(BB.sliceDoc(OB - 1, OB + 1))) return {
              from: OB,
              to: OB
            };
            let GB, YB = (0, yB.pb)(BB).resolveInner(OB),
              DB = YB.childBefore(OB),
              QB = YB.childAfter(OB);
            return DB && QB && DB.to <= OB && QB.from >= OB && (GB = DB.type.prop(JB.h.closedBy)) && GB.indexOf(QB.name) > -1 && BB.doc.lineAt(DB.to).from == BB.doc.lineAt(QB.from).from && !/\S/.test(BB.sliceDoc(DB.to, QB.from)) ? {
              from: DB.to,
              to: QB.from
            } : null
          }(GB, YB);
          BB && (YB = DB = (DB <= QB.to ? QB : GB.doc.lineAt(DB)).to);
          let MB = new yB.e(GB, {
              simulateBreak: YB,
              simulateDoubleBreak: !!jB
            }),
            PB = (0, yB.W)(MB, YB);
          for (null == PB && (PB = (0, oB.W)(/^\s*/.exec(GB.doc.lineAt(YB).text)[0], GB.tabSize)); DB < QB.to && /\s/.test(QB.text[DB - QB.from]);) DB++;
          jB ? ({
            from: YB,
            to: DB
          } = jB) : YB > QB.from && YB < QB.from + 100 && !/\S/.test(QB.text.slice(0, YB)) && (YB = QB.from);
          let zB = ["", (0, yB.bb)(GB, PB)];
          return jB && zB.push((0, yB.bb)(GB, MB.lineIndent(QB.from, -1))), {
            changes: {
              from: YB,
              to: DB,
              insert: oB.K.of(zB)
            },
            range: oB.j.cursor(YB + 1 + zB[1].length)
          }
        }));
        return YB(GB.update(DB, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function rO(BB, OB) {
      let GB = -1;
      return BB.changeByRange((YB => {
        let DB = [];
        for (let oB = YB.from; oB <= YB.to;) {
          let QB = BB.doc.lineAt(oB);
          QB.number > GB && (YB.empty || YB.to > QB.from) && (OB(QB, DB, YB), GB = QB.number), oB = QB.to + 1
        }
        let QB = BB.changes(DB);
        return {
          changes: DB,
          range: oB.j.range(QB.mapPos(YB.anchor, 1), QB.mapPos(YB.head, 1))
        }
      }))
    }
    const XO = BB => {
        let {
          state: OB,
          dispatch: GB
        } = BB;
        return !OB.readOnly && (GB(OB.update(rO(OB, ((BB, GB) => {
          GB.push({
            from: BB.from,
            insert: OB.facet(yB.db)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      wO = BB => {
        let {
          state: OB,
          dispatch: GB
        } = BB;
        return !OB.readOnly && (GB(OB.update(rO(OB, ((BB, GB) => {
          let YB = /^\s*/.exec(BB.text)[0];
          if (!YB) return;
          let DB = (0, oB.W)(YB, OB.tabSize),
            QB = 0,
            jB = (0, yB.bb)(OB, Math.max(0, DB - (0, yB.U)(OB)));
          for (; QB < YB.length && QB < jB.length && YB.charCodeAt(QB) == jB.charCodeAt(QB);) QB++;
          GB.push({
            from: BB.from + QB,
            to: BB.from + YB.length,
            insert: jB.slice(QB)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      EO = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: BB => aB(BB, (OB => xB(BB.state, OB, !bB(BB)))),
        shift: BB => yO(BB, (OB => xB(BB.state, OB, !bB(BB))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: BB => aB(BB, (OB => xB(BB.state, OB, bB(BB)))),
        shift: BB => yO(BB, (OB => xB(BB.state, OB, bB(BB))))
      }, {
        key: "Alt-ArrowUp",
        run: BB => {
          let {
            state: OB,
            dispatch: GB
          } = BB;
          return FO(OB, GB, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: BB => {
          let {
            state: OB,
            dispatch: GB
          } = BB;
          return iO(OB, GB, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: BB => {
          let {
            state: OB,
            dispatch: GB
          } = BB;
          return FO(OB, GB, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: BB => {
          let {
            state: OB,
            dispatch: GB
          } = BB;
          return iO(OB, GB, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: BB => nO(BB, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: BB => nO(BB, !0)
      }, {
        key: "Escape",
        run: BB => {
          let {
            state: OB,
            dispatch: GB
          } = BB, YB = OB.selection, DB = null;
          return YB.JZ.length > 1 ? DB = oB.j.create([YB.main]) : YB.main.empty || (DB = oB.j.create([oB.j.cursor(YB.main.head)])), !!DB && (GB(hB(OB, DB)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: gO(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: BB => {
          let {
            state: OB,
            dispatch: GB
          } = BB, YB = IO(OB).map((BB => {
            let {
              from: GB,
              to: YB
            } = BB;
            return oB.j.range(GB, Math.min(YB + 1, OB.doc.length))
          }));
          return GB(OB.update({
            selection: oB.j.create(YB),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: BB => {
          let {
            state: OB,
            dispatch: GB
          } = BB, YB = cB(OB.selection, (BB => {
            let GB = (0, yB.pb)(OB),
              YB = GB.resolveStack(BB.from, 1);
            if (BB.empty) {
              let OB = GB.resolveStack(BB.from, -1);
              OB.node.from >= YB.node.from && OB.node.to <= YB.node.to && (YB = OB)
            }
            for (let OB = YB; OB; OB = OB.next) {
              let {
                node: GB
              } = OB;
              if ((GB.from < BB.from && GB.to >= BB.to || GB.to > BB.to && GB.from <= BB.from) && OB.next) return oB.j.range(GB.to, GB.from)
            }
            return BB
          }));
          return !YB.eq(OB.selection) && (GB(hB(OB, YB)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: wO
      }, {
        key: "Mod-]",
        run: XO
      }, {
        key: "Mod-Alt-\\",
        run: BB => {
          let {
            state: OB,
            dispatch: GB
          } = BB;
          if (OB.readOnly) return !1;
          let YB = Object.create(null),
            DB = new yB.e(OB, {
              overrideIndentation: BB => {
                let OB = YB[BB];
                return null == OB ? -1 : OB
              }
            }),
            QB = rO(OB, ((BB, GB, QB) => {
              let oB = (0, yB.W)(DB, BB.from);
              if (null == oB) return;
              /\S/.test(BB.text) || (oB = 0);
              let jB = /^\s*/.exec(BB.text)[0],
                JB = (0, yB.bb)(OB, oB);
              (jB != JB || QB.from < BB.from + jB.length) && (YB[BB.from] = oB, GB.push({
                from: BB.from,
                to: BB.from + jB.length,
                insert: JB
              }))
            }));
          return QB.changes.empty || GB(OB.update(QB, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: BB => {
          if (BB.state.readOnly) return !1;
          let {
            state: OB
          } = BB, GB = OB.changes(IO(OB).map((BB => {
            let {
              from: GB,
              to: YB
            } = BB;
            return GB > 0 ? GB-- : YB < OB.doc.length && YB++, {
              from: GB,
              to: YB
            }
          }))), YB = cB(OB.selection, (OB => {
            let GB;
            if (BB.lineWrapping) {
              let YB = BB.lineBlockAt(OB.head),
                DB = BB.coordsAtPos(OB.head, OB.assoc || 1);
              DB && (GB = YB.bottom + BB.documentTop - DB.bottom + BB.defaultLineHeight / 2)
            }
            return BB.moveVertically(OB, !0, GB)
          })).map(GB);
          return BB.dispatch({
            changes: GB,
            selection: YB,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: BB => {
          let {
            state: OB,
            dispatch: GB
          } = BB;
          return jO(OB, GB, !1)
        }
      }, {
        key: "Mod-/",
        run: BB => {
          let {
            state: OB
          } = BB, GB = OB.doc.lineAt(OB.selection.main.from), YB = pB(BB.state, GB.from);
          return YB.line ? PB(BB) : !!YB.block && lB(BB)
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
        run: CB,
        shift: MO,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: BB => vB(BB, !bB(BB)),
        shift: BB => zO(BB, !bB(BB)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: BB => aB(BB, (OB => oO(BB, OB, !bB(BB)))),
        shift: BB => yO(BB, (OB => oO(BB, OB, !bB(BB)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: HB,
        shift: PO,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: BB => vB(BB, bB(BB)),
        shift: BB => zO(BB, bB(BB)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: BB => aB(BB, (OB => oO(BB, OB, bB(BB)))),
        shift: BB => yO(BB, (OB => oO(BB, OB, bB(BB)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: BO,
        shift: pO,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: WO,
        shift: VO
      }, {
        mac: "Ctrl-ArrowUp",
        run: DO,
        shift: NO
      }, {
        key: "ArrowDown",
        run: OO,
        shift: qO,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: AO,
        shift: SO
      }, {
        mac: "Ctrl-ArrowDown",
        run: QO,
        shift: RO
      }, {
        key: "PageUp",
        run: DO,
        shift: NO
      }, {
        key: "PageDown",
        run: QO,
        shift: RO
      }, {
        key: "Home",
        run: BB => aB(BB, (OB => oO(BB, OB, !1))),
        shift: BB => yO(BB, (OB => oO(BB, OB, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: WO,
        shift: VO
      }, {
        key: "End",
        run: BB => aB(BB, (OB => oO(BB, OB, !0))),
        shift: BB => yO(BB, (OB => oO(BB, OB, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: AO,
        shift: SO
      }, {
        key: "Enter",
        run: LO,
        shift: LO
      }, {
        key: "Mod-a",
        run: BB => {
          let {
            state: OB,
            dispatch: GB
          } = BB;
          return GB(OB.update({
            selection: {
              anchor: 0,
              head: OB.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: dO,
        shift: dO,
        preventDefault: !0
      }, {
        key: "Delete",
        run: KO,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: mO,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: BB => uO(BB, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: BB => UO(BB, (OB => {
          let GB = BB.moveToLineBoundary(OB, !1).head;
          return OB.head > GB ? GB : Math.max(0, OB.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: BB => UO(BB, (OB => {
          let GB = BB.moveToLineBoundary(OB, !0).head;
          return OB.head < GB ? GB : Math.min(BB.state.doc.length, OB.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: CB,
        shift: MO,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: HB,
        shift: PO
      }, {
        key: "Ctrl-p",
        run: BO,
        shift: pO
      }, {
        key: "Ctrl-n",
        run: OO,
        shift: qO
      }, {
        key: "Ctrl-a",
        run: BB => aB(BB, (OB => oB.j.cursor(BB.lineBlockAt(OB.head).from, 1))),
        shift: BB => yO(BB, (OB => oB.j.cursor(BB.lineBlockAt(OB.head).from)))
      }, {
        key: "Ctrl-e",
        run: BB => aB(BB, (OB => oB.j.cursor(BB.lineBlockAt(OB.head).to, -1))),
        shift: BB => yO(BB, (OB => oB.j.cursor(BB.lineBlockAt(OB.head).to)))
      }, {
        key: "Ctrl-d",
        run: KO
      }, {
        key: "Ctrl-h",
        run: dO
      }, {
        key: "Ctrl-k",
        run: BB => UO(BB, (OB => {
          let GB = BB.lineBlockAt(OB.head).to;
          return OB.head < GB ? GB : Math.min(BB.state.doc.length, OB.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: mO
      }, {
        key: "Ctrl-o",
        run: BB => {
          let {
            state: OB,
            dispatch: GB
          } = BB;
          if (OB.readOnly) return !1;
          let YB = OB.changeByRange((BB => ({
            changes: {
              from: BB.from,
              to: BB.to,
              insert: oB.K.of(["", ""])
            },
            range: oB.j.cursor(BB.from)
          })));
          return GB(OB.update(YB, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: BB => {
          let {
            state: OB,
            dispatch: GB
          } = BB;
          if (OB.readOnly) return !1;
          let YB = OB.changeByRange((BB => {
            if (!BB.empty || 0 == BB.from || BB.from == OB.doc.length) return {
              range: BB
            };
            let GB = BB.from,
              YB = OB.doc.lineAt(GB),
              DB = GB == YB.from ? GB - 1 : (0, oB.X)(YB.text, GB - YB.from, !1) + YB.from,
              QB = GB == YB.to ? GB + 1 : (0, oB.X)(YB.text, GB - YB.from, !0) + YB.from;
            return {
              changes: {
                from: DB,
                to: QB,
                insert: OB.doc.slice(GB, QB).append(OB.doc.slice(DB, GB))
              },
              range: oB.j.cursor(QB)
            }
          }));
          return !YB.changes.empty && (GB(OB.update(YB, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: QO
      }].map((BB => ({
        mac: BB.key,
        run: BB.run,
        shift: BB.shift
      }))))),
      cO = {
        key: "Tab",
        run: XO,
        shift: wO
      };
    var hO = GB(44514),
      aO = GB(44467),
      eO = GB(44517),
      TO = function(BB) {
        void 0 === BB && (BB = {});
        var {
          crosshairCursor: OB = !1
        } = BB, GB = [];
        !1 !== BB.closeBracketsKeymap && (GB = GB.concat(aO.g)), !1 !== BB.defaultKeymap && (GB = GB.concat(EO)), !1 !== BB.searchKeymap && (GB = GB.concat(hO.j)), !1 !== BB.historyKeymap && (GB = GB.concat(EB)), !1 !== BB.foldKeymap && (GB = GB.concat(yB.N)), !1 !== BB.completionKeymap && (GB = GB.concat(aO.n)), !1 !== BB.lintKeymap && (GB = GB.concat(eO.c));
        var YB = [];
        return !1 !== BB.lineNumbers && YB.push((0, jB.T)()), !1 !== BB.highlightActiveLineGutter && YB.push((0, jB.H)()), !1 !== BB.highlightSpecialChars && YB.push((0, jB.K)()), !1 !== BB.history && YB.push(function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [SB, VB.of(BB), jB.h.domEventHandlers({
            beforeinput(BB, OB) {
              let GB = "historyUndo" == BB.inputType ? UB : "historyRedo" == BB.inputType ? fB : null;
              return !!GB && (BB.preventDefault(), GB(OB))
            }
          })]
        }()), !1 !== BB.foldGutter && YB.push((0, yB.I)()), !1 !== BB.drawSelection && YB.push((0, jB.u)()), !1 !== BB.dropCursor && YB.push((0, jB.w)()), !1 !== BB.allowMultipleSelections && YB.push(oB.l.allowMultipleSelections.of(!0)), !1 !== BB.indentOnInput && YB.push((0, yB.$)()), !1 !== BB.syntaxHighlighting && YB.push((0, yB.kb)(yB.u, {
          fallback: !0
        })), !1 !== BB.bracketMatching && YB.push((0, yB.o)()), !1 !== BB.closeBrackets && YB.push((0, aO.k)()), !1 !== BB.autocompletion && YB.push((0, aO.d)()), !1 !== BB.rectangularSelection && YB.push((0, jB._)()), !1 !== OB && YB.push((0, jB.q)()), !1 !== BB.highlightActiveLine && YB.push((0, jB.I)()), !1 !== BB.highlightSelectionMatches && YB.push((0, hO.f)()), BB.tabSize && "number" === typeof BB.tabSize && YB.push(yB.db.of(" ".repeat(BB.tabSize))), YB.concat([jB.R.of(GB.flat())]).filter(Boolean)
      },
      bO = GB(44493);
    const CO = "#e5c07b",
      HO = "#e06c75",
      vO = "#56b6c2",
      sO = "#ffffff",
      xO = "#abb2bf",
      tO = "#7d8799",
      BG = "#61afef",
      OG = "#98c379",
      GG = "#d19a66",
      YG = "#c678dd",
      DG = "#21252b",
      QG = "#2c313a",
      oG = "#282c34",
      jG = "#353a42",
      yG = "#3E4451",
      JG = "#528bff",
      MG = jB.h.theme({
        "&": {
          color: xO,
          backgroundColor: oG
        },
        ".cm-content": {
          caretColor: JG
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: JG
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: yG
        },
        ".cm-panels": {
          backgroundColor: DG,
          color: xO
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
          backgroundColor: oG,
          color: tO,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: QG
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: jG
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: jG,
          borderBottomColor: jG
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: QG,
            color: xO
          }
        }
      }, {
        dark: !0
      }),
      PG = yB.c.define([{
        tag: bO.i.keyword,
        color: YG
      }, {
        tag: [bO.i.name, bO.i.deleted, bO.i.character, bO.i.propertyName, bO.i.macroName],
        color: HO
      }, {
        tag: [bO.i.function(bO.i.variableName), bO.i.labelName],
        color: BG
      }, {
        tag: [bO.i.color, bO.i.constant(bO.i.name), bO.i.standard(bO.i.name)],
        color: GG
      }, {
        tag: [bO.i.definition(bO.i.name), bO.i.separator],
        color: xO
      }, {
        tag: [bO.i.typeName, bO.i.className, bO.i.number, bO.i.changed, bO.i.annotation, bO.i.modifier, bO.i.self, bO.i.namespace],
        color: CO
      }, {
        tag: [bO.i.operator, bO.i.operatorKeyword, bO.i.url, bO.i.escape, bO.i.regexp, bO.i.link, bO.i.special(bO.i.string)],
        color: vO
      }, {
        tag: [bO.i.meta, bO.i.comment],
        color: tO
      }, {
        tag: bO.i.strong,
        fontWeight: "bold"
      }, {
        tag: bO.i.emphasis,
        fontStyle: "italic"
      }, {
        tag: bO.i.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: bO.i.link,
        color: tO,
        textDecoration: "underline"
      }, {
        tag: bO.i.heading,
        fontWeight: "bold",
        color: HO
      }, {
        tag: [bO.i.atom, bO.i.bool, bO.i.special(bO.i.variableName)],
        color: GG
      }, {
        tag: [bO.i.processingInstruction, bO.i.string, bO.i.inserted],
        color: OG
      }, {
        tag: bO.i.invalid,
        color: sO
      }]),
      zG = [MG, (0, yB.kb)(PG)];
    var lG = jB.h.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class pG {
      constructor(BB, OB) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = OB, this.timeoutMS = OB, this.callbacks.push(BB)
      }
      kP() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var BB = this.callbacks.slice();
          this.callbacks.length = 0, BB.forEach((BB => {
            try {
              BB()
            } catch (OB) {
              console.error("TimeoutLatch callback error:", OB)
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
    class qG {
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
            BB.kP(), BB.isDone && this.remove(BB)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var ZG = null,
      NG = oB.b.define(),
      RG = [];

    function WG(BB) {
      var {
        value: OB,
        selection: GB,
        onChange: YB,
        onStatistics: DB,
        onCreateEditor: yB,
        onUpdate: JB,
        extensions: MB = RG,
        autoFocus: PB,
        theme: zB = "light",
        height: lB = null,
        minHeight: pB = null,
        maxHeight: qB = null,
        width: ZB = null,
        minWidth: NB = null,
        maxWidth: RB = null,
        placeholder: WB = "",
        editable: AB = !0,
        readOnly: VB = !1,
        indentWithTab: SB = !0,
        basicSetup: nB = !0,
        root: UB,
        initialState: fB
      } = BB, [kB, dB] = (0, QB.useState)(), [KB, uB] = (0, QB.useState)(), [mB, IB] = (0, QB.useState)(), FB = (0, QB.useState)((() => ({
        current: null
      })))[0], iB = (0, QB.useState)((() => ({
        current: null
      })))[0], LB = jB.h.theme({
        "&": {
          height: lB,
          minHeight: pB,
          maxHeight: qB,
          width: ZB,
          minWidth: NB,
          maxWidth: RB
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), gB = jB.h.updateListener.of((BB => {
        if (BB.docChanged && "function" === typeof YB && !BB.transactions.some((BB => BB.annotation(NG)))) {
          FB.current ? FB.current.reset() : (FB.current = new pG((() => {
            if (iB.current) {
              var BB = iB.current;
              iB.current = null, BB()
            }
            FB.current = null
          }), 200), ("undefined" === typeof window ? new qG : (ZG || (ZG = new qG), ZG)).add(FB.current));
          var OB = BB.state.doc.toString();
          YB(OB, BB)
        }
        DB && DB((BB => ({
          line: BB.state.doc.lineAt(BB.state.selection.main.from),
          lineCount: BB.state.doc.lines,
          lineBreak: BB.state.lineBreak,
          length: BB.state.doc.length,
          readOnly: BB.state.readOnly,
          tabSize: BB.state.tabSize,
          selection: BB.state.selection,
          selectionAsSingle: BB.state.selection.asSingle().main,
          JZ: BB.state.selection.JZ,
          selectionCode: BB.state.sliceDoc(BB.state.selection.main.from, BB.state.selection.main.to),
          selections: BB.state.selection.JZ.map((OB => BB.state.sliceDoc(OB.from, OB.to))),
          selectedText: BB.state.selection.JZ.some((BB => !BB.empty))
        }))(BB))
      })), rB = function(BB) {
        void 0 === BB && (BB = {});
        var {
          indentWithTab: OB = !0,
          editable: GB = !0,
          readOnly: YB = !1,
          theme: DB = "light",
          placeholder: QB = "",
          basicSetup: yB = !0
        } = BB, JB = [];
        switch (OB && JB.unshift(jB.R.of([cO])), yB && ("boolean" === typeof yB ? JB.unshift(TO()) : JB.unshift(TO(yB))), QB && JB.unshift((0, jB.Z)(QB)), DB) {
          case "light":
            JB.push(lG);
            break;
          case "dark":
            JB.push(zG);
            break;
          case "none":
            break;
          default:
            JB.push(DB)
        }
        return !1 === GB && JB.push(jB.h.editable.of(!1)), YB && JB.push(oB.l.readOnly.of(!0)), [...JB]
      }({
        theme: zB,
        editable: AB,
        readOnly: VB,
        placeholder: WB,
        indentWithTab: SB,
        basicSetup: nB
      }), XB = [gB, LB, ...rB];
      return JB && "function" === typeof JB && XB.push(jB.h.updateListener.of(JB)), XB = XB.concat(MB), (0, QB.useLayoutEffect)((() => {
        if (kB && !mB) {
          var BB = {
              doc: OB,
              selection: GB,
              extensions: XB
            },
            YB = fB ? oB.l.fromJSON(fB.json, BB, fB.fields) : oB.l.create(BB);
          if (IB(YB), !KB) {
            var DB = new jB.h({
              state: YB,
              parent: kB,
              root: UB
            });
            uB(DB), yB && yB(DB, YB)
          }
        }
        return () => {
          KB && (IB(void 0), uB(void 0))
        }
      }), [kB, mB]), (0, QB.useEffect)((() => {
        BB.container && dB(BB.container)
      }), [BB.container]), (0, QB.useEffect)((() => () => {
        KB && (KB.destroy(), uB(void 0)), FB.current && (FB.current.cancel(), FB.current = null)
      }), [KB]), (0, QB.useEffect)((() => {
        PB && KB && KB.focus()
      }), [PB, KB]), (0, QB.useEffect)((() => {
        KB && KB.dispatch({
          effects: oB.D.reconfigure.of(XB)
        })
      }), [zB, MB, lB, pB, qB, ZB, NB, RB, WB, AB, VB, SB, nB, YB, JB]), (0, QB.useEffect)((() => {
        if (void 0 !== OB) {
          var BB = KB ? KB.state.doc.toString() : "";
          if (KB && OB !== BB) {
            var GB = () => {
              KB && OB !== KB.state.doc.toString() && KB.dispatch({
                changes: {
                  from: 0,
                  to: KB.state.doc.toString().length,
                  insert: OB || ""
                },
                annotations: [NG.of(!0)]
              })
            };
            FB.current && !FB.current.isDone ? iB.current = GB : GB()
          }
        }
      }), [OB, KB]), {
        state: mB,
        setState: IB,
        view: KB,
        setView: uB,
        container: kB,
        setContainer: dB
      }
    }
    var AG = GB(1282),
      VG = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      SG = (0, QB.forwardRef)(((BB, OB) => {
        var {
          className: GB,
          value: oB = "",
          selection: jB,
          extensions: yB = [],
          onChange: JB,
          onStatistics: MB,
          onCreateEditor: PB,
          onUpdate: zB,
          autoFocus: lB,
          theme: pB = "light",
          height: qB,
          minHeight: ZB,
          maxHeight: NB,
          width: RB,
          minWidth: WB,
          maxWidth: AB,
          basicSetup: VB,
          placeholder: SB,
          indentWithTab: nB,
          editable: UB,
          readOnly: fB,
          root: kB,
          initialState: dB
        } = BB, KB = (0, DB.c)(BB, VG), uB = (0, QB.useRef)(null), {
          state: mB,
          view: IB,
          container: FB,
          setContainer: iB
        } = WG({
          root: kB,
          value: oB,
          autoFocus: lB,
          theme: pB,
          height: qB,
          minHeight: ZB,
          maxHeight: NB,
          width: RB,
          minWidth: WB,
          maxWidth: AB,
          basicSetup: VB,
          placeholder: SB,
          indentWithTab: nB,
          editable: UB,
          readOnly: fB,
          selection: jB,
          onChange: JB,
          onStatistics: MB,
          onCreateEditor: PB,
          onUpdate: zB,
          extensions: yB,
          initialState: dB
        });
        (0, QB.useImperativeHandle)(OB, (() => ({
          editor: uB.current,
          state: mB,
          view: IB
        })), [uB, FB, mB, IB]);
        var LB = (0, QB.useCallback)((BB => {
          uB.current = BB, iB(BB)
        }), [iB]);
        if ("string" !== typeof oB) throw new Error("value must be typeof string but got " + typeof oB);
        var gB = "string" === typeof pB ? "cm-theme-" + pB : "cm-theme";
        return (0, AG.jsx)("div", (0, YB.c)({
          ref: LB,
          className: gB + (GB ? " " + GB : "")
        }, KB))
      }));
    SG.displayName = "CodeMirror";
    const nG = SG
  },
  44480: (BB, OB, GB) => {
    function YB() {
      var BB = arguments[0];
      "string" == typeof BB && (BB = document.createElement(BB));
      var OB = 1,
        GB = arguments[1];
      if (GB && "object" == typeof GB && null == GB.nodeType && !Array.isArray(GB)) {
        for (var YB in GB)
          if (Object.prototype.hasOwnProperty.call(GB, YB)) {
            var QB = GB[YB];
            "string" == typeof QB ? BB.setAttribute(YB, QB) : null != QB && (BB[YB] = QB)
          } OB++
      }
      for (; OB < arguments.length; OB++) DB(BB, arguments[OB]);
      return BB
    }

    function DB(BB, OB) {
      if ("string" == typeof OB) BB.appendChild(document.createTextNode(OB));
      else if (null == OB);
      else if (null != OB.nodeType) BB.appendChild(OB);
      else {
        if (!Array.isArray(OB)) throw new RangeError("Unsupported child node: " + OB);
        for (var GB = 0; GB < OB.length; GB++) DB(BB, OB[GB])
      }
    }
    GB.d(OB, {
      e: () => YB
    })
  },
  44478: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB
    });
    const YB = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      DB = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      QB = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class oB {
      constructor(BB, OB) {
        this.rules = [];
        let {
          finish: GB
        } = OB || {};

        function YB(BB) {
          return /^@/.test(BB) ? [BB] : BB.split(/,\s*/)
        }

        function DB(BB, OB, QB, oB) {
          let jB = [],
            yB = /^@(\w+)\b/.exec(BB[0]),
            JB = yB && "keyframes" == yB[1];
          if (yB && null == OB) return QB.push(BB[0] + ";");
          for (let GB in OB) {
            let oB = OB[GB];
            if (/&/.test(GB)) DB(GB.split(/,\s*/).map((OB => BB.map((BB => OB.replace(/&/, BB))))).reduce(((BB, OB) => BB.concat(OB))), oB, QB);
            else if (oB && "object" == typeof oB) {
              if (!yB) throw new RangeError("The value of a property (" + GB + ") should be a primitive value.");
              DB(YB(GB), oB, jB, JB)
            } else null != oB && jB.push(GB.replace(/_.*/, "").replace(/[A-Z]/g, (BB => "-" + BB.toLowerCase())) + ": " + oB + ";")
          }(jB.length || JB) && QB.push((!GB || yB || oB ? BB : BB.map(GB)).join(", ") + " {" + jB.join(" ") + "}")
        }
        for (let QB in BB) DB(YB(QB), BB[QB], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let BB = QB[YB] || 1;
        return QB[YB] = BB + 1, "\u037c" + BB.toString(36)
      }
      static mount(BB, OB, GB) {
        let YB = BB[DB],
          QB = GB && GB.nonce;
        YB ? QB && YB.setNonce(QB) : YB = new yB(BB, QB), YB.mount(Array.isArray(OB) ? OB : [OB], BB)
      }
    }
    let jB = new Map;
    class yB {
      constructor(BB, OB) {
        let GB = BB.ownerDocument || BB,
          YB = GB.defaultView;
        if (!BB.head && BB.adoptedStyleSheets && YB.CSSStyleSheet) {
          let OB = jB.get(GB);
          if (OB) return BB[DB] = OB;
          this.sheet = new YB.CSSStyleSheet, jB.set(GB, this)
        } else this.styleTag = GB.createElement("style"), OB && this.styleTag.setAttribute("nonce", OB);
        this.modules = [], BB[DB] = this
      }
      mount(BB, OB) {
        let GB = this.sheet,
          YB = 0,
          DB = 0;
        for (let QB = 0; QB < BB.length; QB++) {
          let OB = BB[QB],
            oB = this.modules.indexOf(OB);
          if (oB < DB && oB > -1 && (this.modules.splice(oB, 1), DB--, oB = -1), -1 == oB) {
            if (this.modules.splice(DB++, 0, OB), GB)
              for (let BB = 0; BB < OB.rules.length; BB++) GB.insertRule(OB.rules[BB], YB++)
          } else {
            for (; DB < oB;) YB += this.modules[DB++].rules.length;
            YB += OB.rules.length, DB++
          }
        }
        if (GB) OB.adoptedStyleSheets.indexOf(this.sheet) < 0 && (OB.adoptedStyleSheets = [this.sheet, ...OB.adoptedStyleSheets]);
        else {
          let BB = "";
          for (let OB = 0; OB < this.modules.length; OB++) BB += this.modules[OB].getRules() + "\n";
          this.styleTag.textContent = BB;
          let GB = OB.head || OB;
          this.styleTag.parentNode != GB && GB.insertBefore(this.styleTag, GB.firstChild)
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