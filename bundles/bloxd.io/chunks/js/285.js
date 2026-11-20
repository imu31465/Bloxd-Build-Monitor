export const id = 285;
export const ids = [285];
export const modules = {
  40760: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => tu,
      f: () => ju,
      g: () => lu,
      k: () => Yb,
      m: () => Ju,
      o: () => Sb,
      r: () => wu
    });
    var Bb = hb(40769),
      Ob = hb(40773),
      Gb = hb(40788);
    class Ub {
      constructor(bb, ub, hb, Bb) {
        this.state = bb, this.pos = ub, this.explicit = hb, this.view = Bb, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(bb) {
        let ub = (0, Gb.hb)(this.state).resolveInner(this.pos, -1);
        for (; ub && bb.indexOf(ub.name) < 0;) ub = ub.parent;
        return ub ? {
          from: ub.from,
          to: this.pos,
          text: this.state.sliceDoc(ub.from, this.pos),
          type: ub.type
        } : null
      }
      matchBefore(bb) {
        let ub = this.state.doc.lineAt(this.pos),
          hb = Math.max(ub.from, this.pos - 250),
          Bb = ub.text.slice(hb - ub.from, this.pos - ub.from),
          Ob = Bb.search(wb(bb, !1));
        return Ob < 0 ? null : {
          from: hb + Ob,
          to: this.pos,
          text: Bb.slice(Ob)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(bb, ub, hb) {
        "abort" == bb && this.abortListeners && (this.abortListeners.push(ub), hb && hb.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function Lb(bb) {
      let ub = Object.keys(bb).join(""),
        hb = /\w/.test(ub);
      return hb && (ub = ub.replace(/\w/g, "")), `[${hb?"\\w":""}${ub.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function Yb(bb) {
      let ub = bb.map((bb => "string" == typeof bb ? {
          label: bb
        } : bb)),
        [hb, Bb] = ub.every((bb => /^\w+$/.test(bb.label))) ? [/\w*$/, /\w+$/] : function(bb) {
          let ub = Object.create(null),
            hb = Object.create(null);
          for (let {
              label: Ob
            }
            of bb) {
            ub[Ob[0]] = !0;
            for (let bb = 1; bb < Ob.length; bb++) hb[Ob[bb]] = !0
          }
          let Bb = Lb(ub) + Lb(hb) + "*$";
          return [new RegExp("^" + Bb), new RegExp(Bb)]
        }(ub);
      return bb => {
        let Ob = bb.matchBefore(Bb);
        return Ob || bb.explicit ? {
          from: Ob ? Ob.from : bb.pos,
          options: ub,
          validFor: hb
        } : null
      }
    }

    function Sb(bb, ub) {
      return hb => {
        for (let ub = (0, Gb.hb)(hb.state).resolveInner(hb.pos, -1); ub; ub = ub.parent) {
          if (bb.indexOf(ub.name) > -1) return null;
          if (ub.type.isTop) break
        }
        return ub(hb)
      }
    }
    class ab {
      constructor(bb, ub, hb, Bb) {
        this.completion = bb, this.source = ub, this.match = hb, this.score = Bb
      }
    }

    function Hb(bb) {
      return bb.selection.main.from
    }

    function wb(bb, ub) {
      var hb;
      let {
        source: Bb
      } = bb, Ob = ub && "^" != Bb[0], Gb = "$" != Bb[Bb.length - 1];
      return Ob || Gb ? new RegExp(`${Ob?"^":""}(?:${Bb})${Gb?"$":""}`, null !== (hb = bb.flags) && void 0 !== hb ? hb : bb.ignoreCase ? "i" : "") : bb
    }
    const Zb = Bb.b.define();

    function Xb(bb, ub, hb, Ob) {
      let {
        main: Gb
      } = bb.selection, Ub = hb - Gb.from, Lb = Ob - Gb.from;
      return {
        ...bb.changeByRange((Yb => {
          if (Yb != Gb && hb != Ob && bb.sliceDoc(Yb.from + Ub, Yb.from + Lb) != bb.sliceDoc(hb, Ob)) return {
            range: Yb
          };
          let Sb = bb.toText(ub);
          return {
            changes: {
              from: Yb.from + Ub,
              to: Ob == Gb.from ? Yb.to : Yb.from + Lb,
              insert: Sb
            },
            range: Bb.j.cursor(Yb.from + Ub + Sb.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const pb = new WeakMap;

    function ob(bb) {
      if (!Array.isArray(bb)) return bb;
      let ub = pb.get(bb);
      return ub || pb.set(bb, ub = Yb(bb)), ub
    }
    const Ab = Bb.D.define(),
      lb = Bb.D.define();
    class Kb {
      constructor(bb) {
        this.pattern = bb, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let ub = 0; ub < bb.length;) {
          let hb = (0, Bb.Q)(bb, ub),
            Ob = (0, Bb.T)(hb);
          this.chars.push(hb);
          let Gb = bb.slice(ub, ub + Ob),
            Ub = Gb.toUpperCase();
          this.folded.push((0, Bb.Q)(Ub == Gb ? Gb.toLowerCase() : Ub, 0)), ub += Ob
        }
        this.astral = bb.length != this.chars.length
      }
      ret(bb, ub) {
        return this.score = bb, this.matched = ub, this
      }
      match(bb) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (bb.length < this.pattern.length) return null;
        let {
          chars: ub,
          folded: hb,
          any: Ob,
          precise: Gb,
          byWord: Ub
        } = this;
        if (1 == ub.length) {
          let Ob = (0, Bb.Q)(bb, 0),
            Gb = (0, Bb.T)(Ob),
            Ub = Gb == bb.length ? 0 : -100;
          if (Ob == ub[0]);
          else {
            if (Ob != hb[0]) return null;
            Ub += -200
          }
          return this.ret(Ub, [0, Gb])
        }
        let Lb = bb.indexOf(this.pattern);
        if (0 == Lb) return this.ret(bb.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let Yb = ub.length,
          Sb = 0;
        if (Lb < 0) {
          for (let Gb = 0, Ub = Math.min(bb.length, 200); Gb < Ub && Sb < Yb;) {
            let Ub = (0, Bb.Q)(bb, Gb);
            Ub != ub[Sb] && Ub != hb[Sb] || (Ob[Sb++] = Gb), Gb += (0, Bb.T)(Ub)
          }
          if (Sb < Yb) return null
        }
        let ab = 0,
          Hb = 0,
          wb = !1,
          Zb = 0,
          Xb = -1,
          pb = -1,
          ob = /[a-z]/.test(bb),
          Ab = !0;
        for (let lb = 0, Kb = Math.min(bb.length, 200), Wb = 0; lb < Kb && Hb < Yb;) {
          let Ob = (0, Bb.Q)(bb, lb);
          Lb < 0 && (ab < Yb && Ob == ub[ab] && (Gb[ab++] = lb), Zb < Yb && (Ob == ub[Zb] || Ob == hb[Zb] ? (0 == Zb && (Xb = lb), pb = lb + 1, Zb++) : Zb = 0));
          let Sb, Kb = Ob < 255 ? Ob >= 48 && Ob <= 57 || Ob >= 97 && Ob <= 122 ? 2 : Ob >= 65 && Ob <= 90 ? 1 : 0 : (Sb = (0, Bb.bb)(Ob)) != Sb.toLowerCase() ? 1 : Sb != Sb.toUpperCase() ? 2 : 0;
          (!lb || 1 == Kb && ob || 0 == Wb && 0 != Kb) && (ub[Hb] == Ob || hb[Hb] == Ob && (wb = !0) ? Ub[Hb++] = lb : Ub.length && (Ab = !1)), Wb = Kb, lb += (0, Bb.T)(Ob)
        }
        return Hb == Yb && 0 == Ub[0] && Ab ? this.result((wb ? -200 : 0) - 100, Ub, bb) : Zb == Yb && 0 == Xb ? this.ret(-200 - bb.length + (pb == bb.length ? 0 : -100), [0, pb]) : Lb > -1 ? this.ret(-700 - bb.length, [Lb, Lb + this.pattern.length]) : Zb == Yb ? this.ret(-900 - bb.length, [Xb, pb]) : Hb == Yb ? this.result((wb ? -200 : 0) - 100 - 700 + (Ab ? 0 : -1100), Ub, bb) : 2 == ub.length ? null : this.result((Ob[0] ? -700 : 0) - 200 - 1100, Ob, bb)
      }
      result(bb, ub, hb) {
        let Ob = [],
          Gb = 0;
        for (let Ub of ub) {
          let bb = Ub + (this.astral ? (0, Bb.T)((0, Bb.Q)(hb, Ub)) : 1);
          Gb && Ob[Gb - 1] == Ub ? Ob[Gb - 1] = bb : (Ob[Gb++] = Ub, Ob[Gb++] = bb)
        }
        return this.ret(bb - hb.length, Ob)
      }
    }
    class Wb {
      constructor(bb) {
        this.pattern = bb, this.matched = [], this.score = 0, this.folded = bb.toLowerCase()
      }
      match(bb) {
        if (bb.length < this.pattern.length) return null;
        let ub = bb.slice(0, this.pattern.length),
          hb = ub == this.pattern ? 0 : ub.toLowerCase() == this.folded ? -200 : null;
        return null == hb ? null : (this.matched = [0, ub.length], this.score = hb + (bb.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const Cb = Bb.n.define({
      combine: bb => (0, Bb.V)(bb, {
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
        positionInfo: rb,
        filterStrict: !1,
        compareCompletions: (bb, ub) => (bb.sortText || bb.label).localeCompare(ub.sortText || ub.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (bb, ub) => bb && ub,
        closeOnBlur: (bb, ub) => bb && ub,
        icons: (bb, ub) => bb && ub,
        tooltipClass: (bb, ub) => hb => db(bb(hb), ub(hb)),
        optionClass: (bb, ub) => hb => db(bb(hb), ub(hb)),
        addToOptions: (bb, ub) => bb.concat(ub),
        filterStrict: (bb, ub) => bb || ub
      })
    });

    function db(bb, ub) {
      return bb ? ub ? bb + " " + ub : bb : ub
    }

    function rb(bb, ub, hb, Bb, Gb, Ub) {
      let Lb, Yb, Sb = bb.textDirection == Ob.i.RTL,
        ab = Sb,
        Hb = !1,
        wb = "top",
        Zb = ub.left - Gb.left,
        Xb = Gb.right - ub.right,
        pb = Bb.right - Bb.left,
        ob = Bb.bottom - Bb.top;
      if (ab && Zb < Math.min(pb, Xb) ? ab = !1 : !ab && Xb < Math.min(pb, Zb) && (ab = !0), pb <= (ab ? Zb : Xb)) Lb = Math.max(Gb.top, Math.min(hb.top, Gb.bottom - ob)) - ub.top, Yb = Math.min(400, ab ? Zb : Xb);
      else {
        Hb = !0, Yb = Math.min(400, (Sb ? ub.right : Gb.right - ub.left) - 30);
        let bb = Gb.bottom - ub.bottom;
        bb >= ob || bb > ub.top ? Lb = hb.bottom - ub.top : (wb = "bottom", Lb = ub.bottom - hb.top)
      }
      return {
        style: `${wb}: ${Lb/((ub.bottom-ub.top)/Ub.offsetHeight)}px; max-width: ${Yb/((ub.right-ub.left)/Ub.offsetWidth)}px`,
        class: "cm-completionInfo-" + (Hb ? Sb ? "left-narrow" : "right-narrow" : ab ? "left" : "right")
      }
    }
    const jb = Bb.D.define();

    function nb(bb, ub, hb) {
      if (bb <= hb) return {
        from: 0,
        to: bb
      };
      if (ub < 0 && (ub = 0), ub <= bb >> 1) {
        let bb = Math.floor(ub / hb);
        return {
          from: bb * hb,
          to: (bb + 1) * hb
        }
      }
      let Bb = Math.floor((bb - ub) / hb);
      return {
        from: bb - (Bb + 1) * hb,
        to: bb - Bb * hb
      }
    }
    class Db {
      constructor(bb, ub, hb) {
        this.view = bb, this.stateField = ub, this.applyCompletion = hb, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: bb => this.placeInfo(bb),
          key: this
        }, this.space = null, this.currentClass = "";
        let Bb = bb.state.field(ub),
          {
            options: Ob,
            selected: Gb
          } = Bb.open,
          Ub = bb.state.facet(Cb);
        this.optionContent = function(bb) {
          let ub = bb.addToOptions.slice();
          return bb.icons && ub.push({
            render(bb) {
              let ub = document.createElement("div");
              return ub.classList.add("cm-completionIcon"), bb.type && ub.classList.add(...bb.type.split(/\s+/g).map((bb => "cm-completionIcon-" + bb))), ub.setAttribute("aria-hidden", "true"), ub
            },
            position: 20
          }), ub.push({
            render(bb, ub, hb, Bb) {
              let Ob = document.createElement("span");
              Ob.className = "cm-completionLabel";
              let Gb = bb.displayLabel || bb.label,
                Ub = 0;
              for (let Lb = 0; Lb < Bb.length;) {
                let bb = Bb[Lb++],
                  ub = Bb[Lb++];
                bb > Ub && Ob.appendChild(document.createTextNode(Gb.slice(Ub, bb)));
                let hb = Ob.appendChild(document.createElement("span"));
                hb.appendChild(document.createTextNode(Gb.slice(bb, ub))), hb.className = "cm-completionMatchedText", Ub = ub
              }
              return Ub < Gb.length && Ob.appendChild(document.createTextNode(Gb.slice(Ub))), Ob
            },
            position: 50
          }, {
            render(bb) {
              if (!bb.detail) return null;
              let ub = document.createElement("span");
              return ub.className = "cm-completionDetail", ub.textContent = bb.detail, ub
            },
            position: 80
          }), ub.sort(((bb, ub) => bb.position - ub.position)).map((bb => bb.render))
        }(Ub), this.optionClass = Ub.optionClass, this.tooltipClass = Ub.tooltipClass, this.range = nb(Ob.length, Gb, Ub.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(bb.state), this.dom.addEventListener("mousedown", (hb => {
          let {
            options: Bb
          } = bb.state.field(ub).open;
          for (let ub, Ob = hb.target; Ob && Ob != this.dom; Ob = Ob.parentNode)
            if ("LI" == Ob.nodeName && (ub = /-(\d+)$/.exec(Ob.id)) && +ub[1] < Bb.length) return this.applyCompletion(bb, Bb[+ub[1]]), void hb.preventDefault();
          if (hb.target == this.list) {
            let ub = this.list.classList.contains("cm-completionListIncompleteTop") && hb.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && hb.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != ub && (bb.dispatch({
              effects: jb.of(ub)
            }), hb.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (ub => {
          let hb = bb.state.field(this.stateField, !1);
          hb && hb.tooltip && bb.state.facet(Cb).closeOnBlur && ub.relatedTarget != bb.contentDOM && bb.dispatch({
            effects: lb.of(null)
          })
        })), this.showOptions(Ob, Bb.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(bb, ub) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(bb, ub, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(bb) {
        var ub;
        let hb = bb.state.field(this.stateField),
          Bb = bb.startState.field(this.stateField);
        if (this.updateTooltipClass(bb.state), hb != Bb) {
          let {
            options: Ob,
            selected: Gb,
            disabled: Ub
          } = hb.open;
          Bb.open && Bb.open.options == Ob || (this.range = nb(Ob.length, Gb, bb.state.facet(Cb).maxRenderedOptions), this.showOptions(Ob, hb.id)), this.updateSel(), Ub != (null === (ub = Bb.open) || void 0 === ub ? void 0 : ub.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!Ub)
        }
      }
      updateTooltipClass(bb) {
        let ub = this.tooltipClass(bb);
        if (ub != this.currentClass) {
          for (let bb of this.currentClass.split(" ")) bb && this.dom.classList.remove(bb);
          for (let bb of ub.split(" ")) bb && this.dom.classList.add(bb);
          this.currentClass = ub
        }
      }
      positioned(bb) {
        this.space = bb, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let bb = this.view.state.field(this.stateField),
          ub = bb.open;
        (ub.selected > -1 && ub.selected < this.range.from || ub.selected >= this.range.to) && (this.range = nb(ub.options.length, ub.selected, this.view.state.facet(Cb).maxRenderedOptions), this.showOptions(ub.options, bb.id));
        let hb = this.updateSelectedOption(ub.selected);
        if (hb) {
          this.destroyInfo();
          let {
            completion: Bb
          } = ub.options[ub.selected], {
            info: Gb
          } = Bb;
          if (!Gb) return;
          let Ub = "string" === typeof Gb ? document.createTextNode(Gb) : Gb(Bb);
          if (!Ub) return;
          "then" in Ub ? Ub.then((ub => {
            ub && this.view.state.field(this.stateField, !1) == bb && this.addInfoPane(ub, Bb)
          })).catch((bb => (0, Ob.Z)(this.view.state, bb, "completion info"))) : (this.addInfoPane(Ub, Bb), hb.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(bb, ub) {
        this.destroyInfo();
        let hb = this.info = document.createElement("div");
        if (hb.className = "cm-tooltip cm-completionInfo", hb.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != bb.nodeType) hb.appendChild(bb), this.infoDestroy = null;
        else {
          let {
            dom: ub,
            destroy: Bb
          } = bb;
          hb.appendChild(ub), this.infoDestroy = Bb || null
        }
        this.dom.appendChild(hb), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(bb) {
        let ub = null;
        for (let hb = this.list.firstChild, Bb = this.range.from; hb; hb = hb.nextSibling, Bb++) "LI" == hb.nodeName && hb.id ? Bb == bb ? hb.hasAttribute("aria-selected") || (hb.setAttribute("aria-selected", "true"), ub = hb) : hb.hasAttribute("aria-selected") && (hb.removeAttribute("aria-selected"), hb.removeAttribute("aria-describedby")) : Bb--;
        return ub && function(bb, ub) {
          let hb = bb.getBoundingClientRect(),
            Bb = ub.getBoundingClientRect(),
            Ob = hb.height / bb.offsetHeight;
          Bb.top < hb.top ? bb.scrollTop -= (hb.top - Bb.top) / Ob : Bb.bottom > hb.bottom && (bb.scrollTop += (Bb.bottom - hb.bottom) / Ob)
        }(this.list, ub), ub
      }
      measureInfo() {
        let bb = this.dom.querySelector("[aria-selected]");
        if (!bb || !this.info) return null;
        let ub = this.dom.getBoundingClientRect(),
          hb = this.info.getBoundingClientRect(),
          Bb = bb.getBoundingClientRect(),
          Ob = this.space;
        if (!Ob) {
          let bb = this.dom.ownerDocument.documentElement;
          Ob = {
            left: 0,
            top: 0,
            right: bb.clientWidth,
            bottom: bb.clientHeight
          }
        }
        return Bb.top > Math.min(Ob.bottom, ub.bottom) - 10 || Bb.bottom < Math.max(Ob.top, ub.top) + 10 ? null : this.view.state.facet(Cb).positionInfo(this.view, ub, Bb, hb, Ob, this.dom)
      }
      placeInfo(bb) {
        this.info && (bb ? (bb.style && (this.info.style.cssText = bb.style), this.info.className = "cm-tooltip cm-completionInfo " + (bb.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(bb, ub, hb) {
        const Bb = document.createElement("ul");
        Bb.id = ub, Bb.setAttribute("role", "listbox"), Bb.setAttribute("aria-expanded", "true"), Bb.setAttribute("aria-label", this.view.state.phrase("Completions")), Bb.addEventListener("mousedown", (bb => {
          bb.target == Bb && bb.preventDefault()
        }));
        let Ob = null;
        for (let Gb = hb.from; Gb < hb.to; Gb++) {
          let {
            completion: Ub,
            match: Lb
          } = bb[Gb], {
            section: Yb
          } = Ub;
          if (Yb) {
            let bb = "string" == typeof Yb ? Yb : Yb.name;
            if (bb != Ob && (Gb > hb.from || 0 == hb.from))
              if (Ob = bb, "string" != typeof Yb && Yb.header) Bb.appendChild(Yb.header(Yb));
              else {
                Bb.appendChild(document.createElement("completion-section")).textContent = bb
              }
          }
          const Sb = Bb.appendChild(document.createElement("li"));
          Sb.id = ub + "-" + Gb, Sb.setAttribute("role", "option");
          let ab = this.optionClass(Ub);
          ab && (Sb.className = ab);
          for (let bb of this.optionContent) {
            let ub = bb(Ub, this.view.state, this.view, Lb);
            ub && Sb.appendChild(ub)
          }
        }
        return hb.from && Bb.classList.add("cm-completionListIncompleteTop"), hb.to < bb.length && Bb.classList.add("cm-completionListIncompleteBottom"), Bb
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function xb(bb, ub) {
      return hb => new Db(hb, bb, ub)
    }

    function zb(bb) {
      return 100 * (bb.boost || 0) + (bb.apply ? 10 : 0) + (bb.info ? 5 : 0) + (bb.type ? 1 : 0)
    }
    class gb {
      constructor(bb, ub, hb, Bb, Ob, Gb) {
        this.options = bb, this.attrs = ub, this.tooltip = hb, this.timestamp = Bb, this.selected = Ob, this.disabled = Gb
      }
      setSelected(bb, ub) {
        return bb == this.selected || bb >= this.options.length ? this : new gb(this.options, Jb(ub, bb), this.tooltip, this.timestamp, bb, this.disabled)
      }
      static build(bb, ub, hb, Bb, Ob, Gb) {
        if (Bb && !Gb && bb.some((bb => bb.isPending))) return Bb.setDisabled();
        let Ub = function(bb, ub) {
          let hb = [],
            Bb = null,
            Ob = null,
            Gb = bb => {
              hb.push(bb);
              let {
                section: ub
              } = bb.completion;
              if (ub) {
                Bb || (Bb = []);
                let bb = "string" == typeof ub ? ub : ub.name;
                Bb.some((ub => ub.name == bb)) || Bb.push("string" == typeof ub ? {
                  name: bb
                } : ub)
              }
            },
            Ub = ub.facet(Cb);
          for (let Hb of bb)
            if (Hb.hasResult()) {
              let bb = Hb.result.getMatch;
              if (!1 === Hb.result.filter)
                for (let ub of Hb.result.options) Gb(new ab(ub, Hb.source, bb ? bb(ub) : [], 1e9 - hb.length));
              else {
                let hb, Bb = ub.sliceDoc(Hb.from, Hb.to),
                  Lb = Ub.filterStrict ? new Wb(Bb) : new Kb(Bb);
                for (let ub of Hb.result.options)
                  if (hb = Lb.match(ub.label)) {
                    let Bb = ub.displayLabel ? bb ? bb(ub, hb.matched) : [] : hb.matched,
                      Ub = hb.score + (ub.boost || 0);
                    if (Gb(new ab(ub, Hb.source, Bb, Ub)), "object" == typeof ub.section && "dynamic" === ub.section.rank) {
                      let {
                        name: bb
                      } = ub.section;
                      Ob || (Ob = Object.create(null)), Ob[bb] = Math.max(Ub, Ob[bb] || -1e9)
                    }
                  }
              }
            } if (Bb) {
            let bb = Object.create(null),
              ub = 0,
              Gb = (bb, ub) => ("dynamic" === bb.rank && "dynamic" === ub.rank ? Ob[ub.name] - Ob[bb.name] : 0) || ("number" == typeof bb.rank ? bb.rank : 1e9) - ("number" == typeof ub.rank ? ub.rank : 1e9) || (bb.name < ub.name ? -1 : 1);
            for (let hb of Bb.sort(Gb)) ub -= 1e5, bb[hb.name] = ub;
            for (let Bb of hb) {
              let {
                section: ub
              } = Bb.completion;
              ub && (Bb.score += bb["string" == typeof ub ? ub : ub.name])
            }
          }
          let Lb = [],
            Yb = null,
            Sb = Ub.compareCompletions;
          for (let ab of hb.sort(((bb, ub) => ub.score - bb.score || Sb(bb.completion, ub.completion)))) {
            let bb = ab.completion;
            !Yb || Yb.label != bb.label || Yb.detail != bb.detail || null != Yb.type && null != bb.type && Yb.type != bb.type || Yb.apply != bb.apply || Yb.boost != bb.boost ? Lb.push(ab) : zb(ab.completion) > zb(Yb) && (Lb[Lb.length - 1] = ab), Yb = ab.completion
          }
          return Lb
        }(bb, ub);
        if (!Ub.length) return Bb && bb.some((bb => bb.isPending)) ? Bb.setDisabled() : null;
        let Lb = ub.facet(Cb).selectOnOpen ? 0 : -1;
        if (Bb && Bb.selected != Lb && -1 != Bb.selected) {
          let bb = Bb.options[Bb.selected].completion;
          for (let ub = 0; ub < Ub.length; ub++)
            if (Ub[ub].completion == bb) {
              Lb = ub;
              break
            }
        }
        return new gb(Ub, Jb(hb, Lb), {
          pos: bb.reduce(((bb, ub) => ub.hasResult() ? Math.min(bb, ub.from) : bb), 1e8),
          create: qb,
          above: Ob.aboveCursor
        }, Bb ? Bb.timestamp : Date.now(), Lb, !1)
      }
      map(bb) {
        return new gb(this.options, this.attrs, {
          ...this.tooltip,
          pos: bb.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new gb(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class ib {
      constructor(bb, ub, hb) {
        this.active = bb, this.id = ub, this.open = hb
      }
      static start() {
        return new ib(eb, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(bb) {
        let {
          state: ub
        } = bb, hb = ub.facet(Cb), Bb = (hb.override || ub.languageDataAt("autocomplete", Hb(ub)).map(ob)).map((ub => (this.active.find((bb => bb.source == ub)) || new sb(ub, this.active.some((bb => 0 != bb.state)) ? 1 : 0)).update(bb, hb)));
        Bb.length == this.active.length && Bb.every(((bb, ub) => bb == this.active[ub])) && (Bb = this.active);
        let Ob = this.open,
          Gb = bb.effects.some((bb => bb.is(mb)));
        Ob && bb.docChanged && (Ob = Ob.map(bb.changes)), bb.selection || Bb.some((ub => ub.hasResult() && bb.changes.touchesRange(ub.from, ub.to))) || ! function(bb, ub) {
          if (bb == ub) return !0;
          for (let hb = 0, Bb = 0;;) {
            for (; hb < bb.length && !bb[hb].hasResult();) hb++;
            for (; Bb < ub.length && !ub[Bb].hasResult();) Bb++;
            let Ob = hb == bb.length,
              Gb = Bb == ub.length;
            if (Ob || Gb) return Ob == Gb;
            if (bb[hb++].result != ub[Bb++].result) return !1
          }
        }(Bb, this.active) || Gb ? Ob = gb.build(Bb, ub, this.id, Ob, hb, Gb) : Ob && Ob.disabled && !Bb.some((bb => bb.isPending)) && (Ob = null), !Ob && Bb.every((bb => !bb.isPending)) && Bb.some((bb => bb.hasResult())) && (Bb = Bb.map((bb => bb.hasResult() ? new sb(bb.source, 0) : bb)));
        for (let Ub of bb.effects) Ub.is(jb) && (Ob = Ob && Ob.setSelected(Ub.value, this.id));
        return Bb == this.active && Ob == this.open ? this : new ib(Bb, this.id, Ob)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? vb : tb
      }
    }
    const vb = {
        "aria-autocomplete": "list"
      },
      tb = {};

    function Jb(bb, ub) {
      let hb = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": bb
      };
      return ub > -1 && (hb["aria-activedescendant"] = bb + "-" + ub), hb
    }
    const eb = [];

    function Nb(bb, ub) {
      if (bb.isUserEvent("input.complete")) {
        let hb = bb.annotation(Zb);
        if (hb && ub.activateOnCompletion(hb)) return 12
      }
      let hb = bb.isUserEvent("input.type");
      return hb && ub.activateOnTyping ? 5 : hb ? 1 : bb.isUserEvent("delete.backward") ? 2 : bb.selection ? 8 : bb.docChanged ? 16 : 0
    }
    class sb {
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = bb, this.state = ub, this.explicit = hb
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(bb, ub) {
        let hb = Nb(bb, ub),
          Bb = this;
        (8 & hb || 16 & hb && this.touches(bb)) && (Bb = new sb(Bb.source, 0)), 4 & hb && 0 == Bb.state && (Bb = new sb(this.source, 1)), Bb = Bb.updateFor(bb, hb);
        for (let Ob of bb.effects)
          if (Ob.is(Ab)) Bb = new sb(Bb.source, 1, Ob.value);
          else if (Ob.is(lb)) Bb = new sb(Bb.source, 0);
        else if (Ob.is(mb))
          for (let bb of Ob.value) bb.source == Bb.source && (Bb = bb);
        return Bb
      }
      updateFor(bb, ub) {
        return this.map(bb.changes)
      }
      map(bb) {
        return this
      }
      touches(bb) {
        return bb.changes.touchesRange(Hb(bb.state))
      }
    }
    class Mb extends sb {
      constructor(bb, ub, hb, Bb, Ob, Gb) {
        super(bb, 3, ub), this.limit = hb, this.result = Bb, this.from = Ob, this.to = Gb
      }
      hasResult() {
        return !0
      }
      updateFor(bb, ub) {
        var hb;
        if (!(3 & ub)) return this.map(bb.changes);
        let Bb = this.result;
        Bb.map && !bb.changes.empty && (Bb = Bb.map(Bb, bb.changes));
        let Ob = bb.changes.mapPos(this.from),
          Gb = bb.changes.mapPos(this.to, 1),
          Lb = Hb(bb.state);
        if (Lb > Gb || !Bb || 2 & ub && (Hb(bb.startState) == this.from || Lb < this.limit)) return new sb(this.source, 4 & ub ? 1 : 0);
        let Yb = bb.changes.mapPos(this.limit);
        return function(bb, ub, hb, Bb) {
          if (!bb) return !1;
          let Ob = ub.sliceDoc(hb, Bb);
          return "function" == typeof bb ? bb(Ob, hb, Bb, ub) : wb(bb, !0).test(Ob)
        }(Bb.validFor, bb.state, Ob, Gb) ? new Mb(this.source, this.explicit, Yb, Bb, Ob, Gb) : Bb.update && (Bb = Bb.update(Bb, Ob, Gb, new Ub(bb.state, Lb, !1))) ? new Mb(this.source, this.explicit, Yb, Bb, Bb.from, null !== (hb = Bb.to) && void 0 !== hb ? hb : Hb(bb.state)) : new sb(this.source, 1, this.explicit)
      }
      map(bb) {
        if (bb.empty) return this;
        return (this.result.map ? this.result.map(this.result, bb) : this.result) ? new Mb(this.source, this.explicit, bb.mapPos(this.limit), this.result, bb.mapPos(this.from), bb.mapPos(this.to, 1)) : new sb(this.source, 0)
      }
      touches(bb) {
        return bb.changes.touchesRange(this.from, this.to)
      }
    }
    const mb = Bb.D.define({
        map: (bb, ub) => bb.map((bb => bb.map(ub)))
      }),
      Ib = Bb.G.define({
        create: () => ib.start(),
        update: (bb, ub) => bb.update(ub),
        provide: bb => [Ob.ib.from(bb, (bb => bb.tooltip)), Ob.m.contentAttributes.from(bb, (bb => bb.attrs))]
      });

    function Pb(bb, ub) {
      const hb = ub.completion.apply || ub.completion.label;
      let Bb = bb.state.field(Ib).active.find((bb => bb.source == ub.source));
      return Bb instanceof Mb && ("string" == typeof hb ? bb.dispatch({
        ...Xb(bb.state, hb, Bb.from, Bb.to),
        annotations: Zb.of(ub.completion)
      }) : hb(bb, ub.completion, Bb.from, Bb.to), !0)
    }
    const qb = xb(Ib, Pb);

    function Eb(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return hb => {
        let Bb = hb.state.field(Ib, !1);
        if (!Bb || !Bb.open || Bb.open.disabled || Date.now() - Bb.open.timestamp < hb.state.facet(Cb).interactionDelay) return !1;
        let Gb, Ub = 1;
        "page" == ub && (Gb = (0, Ob.I)(hb, Bb.open.tooltip)) && (Ub = Math.max(2, Math.floor(Gb.dom.offsetHeight / Gb.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: Lb
        } = Bb.open.options, Yb = Bb.open.selected > -1 ? Bb.open.selected + Ub * (bb ? 1 : -1) : bb ? 0 : Lb - 1;
        return Yb < 0 ? Yb = "page" == ub ? 0 : Lb - 1 : Yb >= Lb && (Yb = "page" == ub ? Lb - 1 : 0), hb.dispatch({
          effects: jb.of(Yb)
        }), !0
      }
    }
    const yb = bb => !!bb.state.field(Ib, !1) && (bb.dispatch({
      effects: Ab.of(!0)
    }), !0);
    class Vb {
      constructor(bb, ub) {
        this.active = bb, this.context = ub, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const Fb = Ob.q.fromClass(class {
        constructor(bb) {
          this.view = bb, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let ub of bb.state.field(Ib).active) ub.isPending && this.startQuery(ub)
        }
        update(bb) {
          let ub = bb.state.field(Ib),
            hb = bb.state.facet(Cb);
          if (!bb.selectionSet && !bb.docChanged && bb.startState.field(Ib) == ub) return;
          let Bb = bb.transactions.some((bb => {
            let ub = Nb(bb, hb);
            return 8 & ub || (bb.selection || bb.docChanged) && !(3 & ub)
          }));
          for (let Lb = 0; Lb < this.running.length; Lb++) {
            let ub = this.running[Lb];
            if (Bb || ub.context.abortOnDocChange && bb.docChanged || ub.updates.length + bb.transactions.length > 50 && Date.now() - ub.time > 1e3) {
              for (let bb of ub.context.abortListeners) try {
                bb()
              } catch (Ub) {
                (0, Ob.Z)(this.view.state, Ub)
              }
              ub.context.abortListeners = null, this.running.splice(Lb--, 1)
            } else ub.updates.push(...bb.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), bb.transactions.some((bb => bb.effects.some((bb => bb.is(Ab))))) && (this.pendingStart = !0);
          let Gb = this.pendingStart ? 50 : hb.activateOnTypingDelay;
          if (this.debounceUpdate = ub.active.some((bb => bb.isPending && !this.running.some((ub => ub.active.source == bb.source)))) ? setTimeout((() => this.startUpdate()), Gb) : -1, 0 != this.composing)
            for (let Ob of bb.transactions) Ob.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && Ob.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: bb
          } = this.view, ub = bb.field(Ib);
          for (let hb of ub.active) hb.isPending && !this.running.some((bb => bb.active.source == hb.source)) && this.startQuery(hb);
          this.running.length && ub.open && ub.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(Cb).updateSyncTime))
        }
        startQuery(bb) {
          let {
            state: ub
          } = this.view, hb = Hb(ub), Bb = new Ub(ub, hb, bb.explicit, this.view), Gb = new Vb(bb, Bb);
          this.running.push(Gb), Promise.resolve(bb.source(Bb)).then((bb => {
            Gb.context.aborted || (Gb.done = bb || null, this.scheduleAccept())
          }), (bb => {
            this.view.dispatch({
              effects: lb.of(null)
            }), (0, Ob.Z)(this.view.state, bb)
          }))
        }
        scheduleAccept() {
          this.running.every((bb => void 0 !== bb.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(Cb).updateSyncTime))
        }
        accept() {
          var bb;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let ub = [],
            hb = this.view.state.facet(Cb),
            Bb = this.view.state.field(Ib);
          for (let Ob = 0; Ob < this.running.length; Ob++) {
            let Gb = this.running[Ob];
            if (void 0 === Gb.done) continue;
            if (this.running.splice(Ob--, 1), Gb.done) {
              let Bb = Hb(Gb.updates.length ? Gb.updates[0].startState : this.view.state),
                Ob = Math.min(Bb, Gb.done.from + (Gb.active.explicit ? 0 : 1)),
                Ub = new Mb(Gb.active.source, Gb.active.explicit, Ob, Gb.done, Gb.done.from, null !== (bb = Gb.done.to) && void 0 !== bb ? bb : Bb);
              for (let bb of Gb.updates) Ub = Ub.update(bb, hb);
              if (Ub.hasResult()) {
                ub.push(Ub);
                continue
              }
            }
            let Ub = Bb.active.find((bb => bb.source == Gb.active.source));
            if (Ub && Ub.isPending)
              if (null == Gb.done) {
                let bb = new sb(Gb.active.source, 0);
                for (let ub of Gb.updates) bb = bb.update(ub, hb);
                bb.isPending || ub.push(bb)
              } else this.startQuery(Ub)
          }(ub.length || Bb.open && Bb.open.disabled) && this.view.dispatch({
            effects: mb.of(ub)
          })
        }
      }, {
        eventHandlers: {
          blur(bb) {
            let ub = this.view.state.field(Ib, !1);
            if (ub && ub.tooltip && this.view.state.facet(Cb).closeOnBlur) {
              let hb = ub.open && (0, Ob.I)(this.view, ub.open.tooltip);
              hb && hb.dom.contains(bb.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: lb.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: Ab.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      fb = "object" == typeof navigator && /Win/.test(navigator.platform),
      kb = Bb.t.highest(Ob.m.domEventHandlers({
        keydown(bb, ub) {
          let hb = ub.state.field(Ib, !1);
          if (!hb || !hb.open || hb.open.disabled || hb.open.selected < 0 || bb.key.length > 1 || bb.ctrlKey && (!fb || !bb.altKey) || bb.metaKey) return !1;
          let Bb = hb.open.options[hb.open.selected],
            Ob = hb.active.find((bb => bb.source == Bb.source)),
            Gb = Bb.completion.commitCharacters || Ob.result.commitCharacters;
          return Gb && Gb.indexOf(bb.key) > -1 && Pb(ub, Bb), !1
        }
      })),
      Tb = Ob.m.baseTheme({
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
    class cb {
      constructor(bb, ub, hb, Bb) {
        this.field = bb, this.line = ub, this.from = hb, this.to = Bb
      }
    }
    class Qb {
      constructor(bb, ub, hb) {
        this.field = bb, this.from = ub, this.to = hb
      }
      map(bb) {
        let ub = bb.mapPos(this.from, -1, Bb.p.TrackDel),
          hb = bb.mapPos(this.to, 1, Bb.p.TrackDel);
        return null == ub || null == hb ? null : new Qb(this.field, ub, hb)
      }
    }
    class Rb {
      constructor(bb, ub) {
        this.lines = bb, this.fieldPositions = ub
      }
      instantiate(bb, ub) {
        let hb = [],
          Bb = [ub],
          Ob = bb.doc.lineAt(ub),
          Ub = /^\s*/.exec(Ob.text)[0];
        for (let Yb of this.lines) {
          if (hb.length) {
            let hb = Ub,
              Ob = /^\t*/.exec(Yb)[0].length;
            for (let ub = 0; ub < Ob; ub++) hb += bb.facet(Gb.X);
            Bb.push(ub + hb.length - Ob), Yb = hb + Yb.slice(Ob)
          }
          hb.push(Yb), ub += Yb.length + 1
        }
        let Lb = this.fieldPositions.map((bb => new Qb(bb.field, Bb[bb.line] + bb.from, Bb[bb.line] + bb.to)));
        return {
          text: hb,
          tp: Lb
        }
      }
      static parse(bb) {
        let ub, hb = [],
          Bb = [],
          Ob = [];
        for (let Gb of bb.split(/\r\n?|\n/)) {
          for (; ub = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(Gb);) {
            let bb = ub[1] ? +ub[1] : null,
              Ub = ub[2] || ub[3] || "",
              Lb = -1,
              Yb = Ub.replace(/\\[{}]/g, (bb => bb[1]));
            for (let ub = 0; ub < hb.length; ub++)(null != bb ? hb[ub].seq == bb : Yb && hb[ub].name == Yb) && (Lb = ub);
            if (Lb < 0) {
              let ub = 0;
              for (; ub < hb.length && (null == bb || null != hb[ub].seq && hb[ub].seq < bb);) ub++;
              hb.splice(ub, 0, {
                seq: bb,
                name: Yb
              }), Lb = ub;
              for (let bb of Ob) bb.field >= Lb && bb.field++
            }
            for (let hb of Ob)
              if (hb.line == Bb.length && hb.from > ub.index) {
                let bb = ub[2] ? 3 + (ub[1] || "").length : 2;
                hb.from -= bb, hb.to -= bb
              } Ob.push(new cb(Lb, Bb.length, ub.index, ub.index + Yb.length)), Gb = Gb.slice(0, ub.index) + Ub + Gb.slice(ub.index + ub[0].length)
          }
          Gb = Gb.replace(/\\([{}])/g, ((bb, ub, hb) => {
            for (let Gb of Ob) Gb.line == Bb.length && Gb.from > hb && (Gb.from--, Gb.to--);
            return ub
          })), Bb.push(Gb)
        }
        return new Rb(Bb, Ob)
      }
    }
    let bu = Ob.e.widget({
        widget: new class extends Ob.u {
          toDOM() {
            let bb = document.createElement("span");
            return bb.className = "cm-snippetFieldPosition", bb
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      uu = Ob.e.mark({
        class: "cm-snippetField"
      });
    class hu {
      constructor(bb, ub) {
        this.tp = bb, this.active = ub, this.deco = Ob.e.set(bb.map((bb => (bb.from == bb.to ? bu : uu).range(bb.from, bb.to))), !0)
      }
      map(bb) {
        let ub = [];
        for (let hb of this.tp) {
          let Bb = hb.map(bb);
          if (!Bb) return null;
          ub.push(Bb)
        }
        return new hu(ub, this.active)
      }
      selectionInsideField(bb) {
        return bb.tp.every((bb => this.tp.some((ub => ub.field == this.active && ub.from <= bb.from && ub.to >= bb.to))))
      }
    }
    const Bu = Bb.D.define({
        map: (bb, ub) => bb && bb.map(ub)
      }),
      Ou = Bb.D.define(),
      Gu = Bb.G.define({
        create: () => null,
        update(bb, ub) {
          for (let hb of ub.effects) {
            if (hb.is(Bu)) return hb.value;
            if (hb.is(Ou) && bb) return new hu(bb.tp, hb.value)
          }
          return bb && ub.docChanged && (bb = bb.map(ub.changes)), bb && ub.selection && !bb.selectionInsideField(ub.selection) && (bb = null), bb
        },
        provide: bb => Ob.m.ZG.from(bb, (bb => bb ? bb.deco : Ob.e.none))
      });

    function Uu(bb, ub) {
      return Bb.j.create(bb.filter((bb => bb.field == ub)).map((bb => Bb.j.range(bb.from, bb.to))))
    }

    function Lu(bb) {
      let ub = Rb.parse(bb);
      return (bb, hb, Ob, Gb) => {
        let {
          text: Ub,
          tp: Lb
        } = ub.instantiate(bb.state, Ob), {
          main: Yb
        } = bb.state.selection, Sb = {
          changes: {
            from: Ob,
            to: Gb == Yb.from ? Yb.to : Gb,
            insert: Bb.K.of(Ub)
          },
          scrollIntoView: !0,
          annotations: hb ? [Zb.of(hb), Bb.O.userEvent.of("input.complete")] : void 0
        };
        if (Lb.length && (Sb.selection = Uu(Lb, 0)), Lb.some((bb => bb.field > 0))) {
          let ub = new hu(Lb, 0),
            hb = Sb.effects = [Bu.of(ub)];
          void 0 === bb.state.field(Gu, !1) && hb.push(Bb.D.appendConfig.of([Gu, Hu, Zu, Tb]))
        }
        bb.dispatch(bb.state.update(Sb))
      }
    }

    function Yu(bb) {
      return ub => {
        let {
          state: hb,
          dispatch: Bb
        } = ub, Ob = hb.field(Gu, !1);
        if (!Ob || bb < 0 && 0 == Ob.active) return !1;
        let Gb = Ob.active + bb,
          Ub = bb > 0 && !Ob.tp.some((ub => ub.field == Gb + bb));
        return Bb(hb.update({
          selection: Uu(Ob.tp, Gb),
          effects: Bu.of(Ub ? null : new hu(Ob.tp, Gb)),
          scrollIntoView: !0
        })), !0
      }
    }
    const Su = [{
        key: "Tab",
        run: Yu(1),
        shift: Yu(-1)
      }, {
        key: "Escape",
        run: bb => {
          let {
            state: ub,
            dispatch: hb
          } = bb;
          return !!ub.field(Gu, !1) && (hb(ub.update({
            effects: Bu.of(null)
          })), !0)
        }
      }],
      au = Bb.n.define({
        combine: bb => bb.length ? bb[0] : Su
      }),
      Hu = Bb.t.highest(Ob.T.compute([au], (bb => bb.facet(au))));

    function wu(bb, ub) {
      return {
        ...ub,
        apply: Lu(bb)
      }
    }
    const Zu = Ob.m.domEventHandlers({
      mousedown(bb, ub) {
        let hb, Bb = ub.state.field(Gu, !1);
        if (!Bb || null == (hb = ub.posAtCoords({
            x: bb.clientX,
            y: bb.clientY
          }))) return !1;
        let Ob = Bb.tp.find((bb => bb.from <= hb && bb.to >= hb));
        return !(!Ob || Ob.field == Bb.active) && (ub.dispatch({
          selection: Uu(Bb.tp, Ob.field),
          effects: Bu.of(Bb.tp.some((bb => bb.field > Ob.field)) ? new hu(Bb.tp, Ob.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const Xu = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      pu = Bb.D.define({
        map(bb, ub) {
          let hb = ub.mapPos(bb, -1, Bb.p.TrackAfter);
          return null == hb ? void 0 : hb
        }
      }),
      ou = new class extends Bb.B {};
    ou.startSide = 1, ou.endSide = -1;
    const Au = Bb.G.define({
      create: () => Bb.x.empty,
      update(bb, ub) {
        if (bb = bb.map(ub.changes), ub.selection) {
          let hb = ub.state.doc.lineAt(ub.selection.main.head);
          bb = bb.update({
            filter: bb => bb >= hb.from && bb <= hb.to
          })
        }
        for (let hb of ub.effects) hb.is(pu) && (bb = bb.update({
          add: [ou.range(hb.value, hb.value + 1)]
        }));
        return bb
      }
    });

    function lu() {
      return [ru, Au]
    }
    const Ku = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function Wu(bb) {
      for (let ub = 0; ub < 16; ub += 2)
        if (Ku.charCodeAt(ub) == bb) return Ku.charAt(ub + 1);
      return (0, Bb.bb)(bb < 128 ? bb : bb + 1)
    }

    function Cu(bb, ub) {
      return bb.languageDataAt("closeBrackets", ub)[0] || Xu
    }
    const du = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      ru = Ob.m.inputHandler.of(((bb, ub, hb, Ob) => {
        if ((du ? bb.composing : bb.compositionStarted) || bb.state.readOnly) return !1;
        let Gb = bb.state.selection.main;
        if (Ob.length > 2 || 2 == Ob.length && 1 == (0, Bb.T)((0, Bb.Q)(Ob, 0)) || ub != Gb.from || hb != Gb.to) return !1;
        let Ub = function(bb, ub) {
          let hb = Cu(bb, bb.selection.main.head),
            Ob = hb.brackets || Xu.brackets;
          for (let Gb of Ob) {
            let Ub = Wu((0, Bb.Q)(Gb, 0));
            if (ub == Gb) return Ub == Gb ? gu(bb, Gb, Ob.indexOf(Gb + Gb + Gb) > -1, hb) : xu(bb, Gb, Ub, hb.before || Xu.before);
            if (ub == Ub && nu(bb, bb.selection.main.from)) return zu(bb, Gb, Ub)
          }
          return null
        }(bb.state, Ob);
        return !!Ub && (bb.dispatch(Ub), !0)
      })),
      ju = [{
        key: "Backspace",
        run: bb => {
          let {
            state: ub,
            dispatch: hb
          } = bb;
          if (ub.readOnly) return !1;
          let Ob = Cu(ub, ub.selection.main.head).brackets || Xu.brackets,
            Gb = null,
            Ub = ub.changeByRange((bb => {
              if (bb.empty) {
                let hb = function(bb, ub) {
                  let hb = bb.sliceString(ub - 2, ub);
                  return (0, Bb.T)((0, Bb.Q)(hb, 0)) == hb.length ? hb : hb.slice(1)
                }(ub.doc, bb.head);
                for (let Gb of Ob)
                  if (Gb == hb && Du(ub.doc, bb.head) == Wu((0, Bb.Q)(Gb, 0))) return {
                    changes: {
                      from: bb.head - Gb.length,
                      to: bb.head + Gb.length
                    },
                    range: Bb.j.cursor(bb.head - Gb.length)
                  }
              }
              return {
                range: Gb = bb
              }
            }));
          return Gb || hb(ub.update(Ub, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !Gb
        }
      }];

    function nu(bb, ub) {
      let hb = !1;
      return bb.field(Au).between(0, bb.doc.length, (bb => {
        bb == ub && (hb = !0)
      })), hb
    }

    function Du(bb, ub) {
      let hb = bb.sliceString(ub, ub + 2);
      return hb.slice(0, (0, Bb.T)((0, Bb.Q)(hb, 0)))
    }

    function xu(bb, ub, hb, Ob) {
      let Gb = null,
        Ub = bb.changeByRange((Ub => {
          if (!Ub.empty) return {
            changes: [{
              insert: ub,
              from: Ub.from
            }, {
              insert: hb,
              from: Ub.to
            }],
            effects: pu.of(Ub.to + ub.length),
            range: Bb.j.range(Ub.anchor + ub.length, Ub.head + ub.length)
          };
          let Lb = Du(bb.doc, Ub.head);
          return !Lb || /\s/.test(Lb) || Ob.indexOf(Lb) > -1 ? {
            changes: {
              insert: ub + hb,
              from: Ub.head
            },
            effects: pu.of(Ub.head + ub.length),
            range: Bb.j.cursor(Ub.head + ub.length)
          } : {
            range: Gb = Ub
          }
        }));
      return Gb ? null : bb.update(Ub, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function zu(bb, ub, hb) {
      let Ob = null,
        Gb = bb.changeByRange((ub => ub.empty && Du(bb.doc, ub.head) == hb ? {
          changes: {
            from: ub.head,
            to: ub.head + hb.length,
            insert: hb
          },
          range: Bb.j.cursor(ub.head + hb.length)
        } : Ob = {
          range: ub
        }));
      return Ob ? null : bb.update(Gb, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function gu(bb, ub, hb, Ob) {
      let Ub = Ob.stringPrefixes || Xu.stringPrefixes,
        Lb = null,
        Yb = bb.changeByRange((Ob => {
          if (!Ob.empty) return {
            changes: [{
              insert: ub,
              from: Ob.from
            }, {
              insert: ub,
              from: Ob.to
            }],
            effects: pu.of(Ob.to + ub.length),
            range: Bb.j.range(Ob.anchor + ub.length, Ob.head + ub.length)
          };
          let Yb, Sb = Ob.head,
            ab = Du(bb.doc, Sb);
          if (ab == ub) {
            if (iu(bb, Sb)) return {
              changes: {
                insert: ub + ub,
                from: Sb
              },
              effects: pu.of(Sb + ub.length),
              range: Bb.j.cursor(Sb + ub.length)
            };
            if (nu(bb, Sb)) {
              let Ob = hb && bb.sliceDoc(Sb, Sb + 3 * ub.length) == ub + ub + ub ? ub + ub + ub : ub;
              return {
                changes: {
                  from: Sb,
                  to: Sb + Ob.length,
                  insert: Ob
                },
                range: Bb.j.cursor(Sb + Ob.length)
              }
            }
          } else {
            if (hb && bb.sliceDoc(Sb - 2 * ub.length, Sb) == ub + ub && (Yb = vu(bb, Sb - 2 * ub.length, Ub)) > -1 && iu(bb, Yb)) return {
              changes: {
                insert: ub + ub + ub + ub,
                from: Sb
              },
              effects: pu.of(Sb + ub.length),
              range: Bb.j.cursor(Sb + ub.length)
            };
            if (bb.charCategorizer(Sb)(ab) != Bb.i.Word && vu(bb, Sb, Ub) > -1 && ! function(bb, ub, hb, Bb) {
                let Ob = (0, Gb.hb)(bb).resolveInner(ub, -1),
                  Ub = Bb.reduce(((bb, ub) => Math.max(bb, ub.length)), 0);
                for (let Gb = 0; Gb < 5; Gb++) {
                  let Gb = bb.sliceDoc(Ob.from, Math.min(Ob.to, Ob.from + hb.length + Ub)),
                    Lb = Gb.indexOf(hb);
                  if (!Lb || Lb > -1 && Bb.indexOf(Gb.slice(0, Lb)) > -1) {
                    let ub = Ob.firstChild;
                    for (; ub && ub.from == Ob.from && ub.to - ub.from > hb.length + Lb;) {
                      if (bb.sliceDoc(ub.to - hb.length, ub.to) == hb) return !1;
                      ub = ub.firstChild
                    }
                    return !0
                  }
                  let Yb = Ob.to == ub && Ob.parent;
                  if (!Yb) break;
                  Ob = Yb
                }
                return !1
              }(bb, Sb, ub, Ub)) return {
              changes: {
                insert: ub + ub,
                from: Sb
              },
              effects: pu.of(Sb + ub.length),
              range: Bb.j.cursor(Sb + ub.length)
            }
          }
          return {
            range: Lb = Ob
          }
        }));
      return Lb ? null : bb.update(Yb, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function iu(bb, ub) {
      let hb = (0, Gb.hb)(bb).resolveInner(ub + 1);
      return hb.parent && hb.from == ub
    }

    function vu(bb, ub, hb) {
      let Ob = bb.charCategorizer(ub);
      if (Ob(bb.sliceDoc(ub - 1, ub)) != Bb.i.Word) return ub;
      for (let Gb of hb) {
        let hb = ub - Gb.length;
        if (bb.sliceDoc(hb, ub) == Gb && Ob(bb.sliceDoc(hb - 1, hb)) != Bb.i.Word) return hb
      }
      return -1
    }

    function tu() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [kb, Ib, Cb.of(bb), Fb, eu, Tb]
    }
    const Ju = [{
        key: "Ctrl-Space",
        run: yb
      }, {
        mac: "Alt-`",
        run: yb
      }, {
        mac: "Alt-i",
        run: yb
      }, {
        key: "Escape",
        run: bb => {
          let ub = bb.state.field(Ib, !1);
          return !(!ub || !ub.active.some((bb => 0 != bb.state))) && (bb.dispatch({
            effects: lb.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: Eb(!0)
      }, {
        key: "ArrowUp",
        run: Eb(!1)
      }, {
        key: "PageDown",
        run: Eb(!0, "page")
      }, {
        key: "PageUp",
        run: Eb(!1, "page")
      }, {
        key: "Enter",
        run: bb => {
          let ub = bb.state.field(Ib, !1);
          return !(bb.state.readOnly || !ub || !ub.open || ub.open.selected < 0 || ub.open.disabled || Date.now() - ub.open.timestamp < bb.state.facet(Cb).interactionDelay) && Pb(bb, ub.open.options[ub.open.selected])
        }
      }],
      eu = Bb.t.highest(Ob.T.computeN([Cb], (bb => bb.facet(Cb).defaultKeymap ? [Ju] : [])))
  },
  40903: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Sb,
      e: () => wb,
      f: () => ab,
      h: () => Hb
    });
    var Bb = hb(40769);
    class Ob {
      constructor(bb, ub, hb, Bb) {
        this.origin = bb, this.changes = ub, this.effects = hb, this.clientID = Bb
      }
    }
    class Gb {
      constructor(bb, ub) {
        this.version = bb, this.unconfirmed = ub
      }
    }
    const Ub = Bb.n.define({
        combine(bb) {
          let ub = (0, Bb.V)(bb, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: bb => bb
          });
          return null == ub.clientID && (ub.clientID = bb.length && bb[0].generatedID || ""), ub
        }
      }),
      Lb = Bb.b.define(),
      Yb = Bb.G.define({
        create: bb => new Gb(bb.facet(Ub).startVersion, []),
        update(bb, ub) {
          let hb = ub.annotation(Lb);
          if (hb) return hb;
          let {
            sharedEffects: Bb,
            clientID: Yb
          } = ub.startState.facet(Ub), Sb = Bb(ub);
          return Sb.length || !ub.changes.empty ? new Gb(bb.version, bb.unconfirmed.concat(new Ob(ub, ub.changes, Sb, Yb))) : bb
        }
      });

    function Sb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Yb, Ub.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, bb))]
    }

    function ab(bb, ub) {
      let {
        version: hb,
        unconfirmed: Sb
      } = bb.field(Yb), {
        clientID: ab
      } = bb.facet(Ub);
      hb += ub.length;
      let Hb = [],
        wb = null,
        Zb = 0;
      for (let Ob of ub) {
        let bb = Zb < Sb.length ? Sb[Zb] : null;
        bb && bb.clientID == Ob.clientID ? (wb && (wb = wb.map(bb.changes, !0)), Hb = Bb.D.mapEffects(Hb, Ob.changes), Zb++) : (Hb = Bb.D.mapEffects(Hb, Ob.changes), Ob.effects && (Hb = Hb.concat(Ob.effects)), wb = wb ? wb.compose(Ob.changes) : Ob.changes)
      }
      if (Zb && (Sb = Sb.slice(Zb)), Sb.length && (wb && (Sb = Sb.map((bb => {
          let ub = bb.changes.map(wb);
          return wb = wb.map(bb.changes, !0), new Ob(bb.origin, ub, Bb.D.mapEffects(bb.effects, wb), ab)
        }))), Hb.length)) {
        let bb = Sb.reduce(((bb, ub) => bb.compose(ub.changes)), Bb.ChangeSet.empty(Sb[0].changes.length));
        Hb = Bb.D.mapEffects(Hb, bb)
      }
      return wb ? bb.update({
        changes: wb,
        effects: Hb,
        annotations: [Bb.O.addToHistory.of(!1), Bb.O.remote.of(!0), Lb.of(new Gb(hb, Sb))],
        filter: !1
      }) : bb.update({
        annotations: [Lb.of(new Gb(hb, Sb))]
      })
    }

    function Hb(bb) {
      return bb.field(Yb).unconfirmed
    }

    function wb(bb) {
      return bb.field(Yb).version
    }
  },
  40807: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => pu
    });
    var Bb = hb(40795);
    class Ob {
      constructor(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb) {
        let Sb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          ab = arguments.length > 10 ? arguments[10] : void 0;
        this.p = bb, this.stack = ub, this.state = hb, this.reducePos = Bb, this.pos = Ob, this.score = Gb, this.buffer = Ub, this.bufferBase = Lb, this.curContext = Yb, this.lookAhead = Sb, this.parent = ab
      }
      toString() {
        return `[${this.stack.filter(((bb,ub)=>ub%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Bb = bb.parser.context;
        return new Ob(bb, [], ub, hb, hb, 0, [], 0, Bb ? new Gb(Bb, Bb.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(bb, ub) {
        this.stack.push(this.state, ub, this.bufferBase + this.buffer.length), this.state = bb
      }
      reduce(bb) {
        var ub;
        let hb = bb >> 19,
          Bb = 65535 & bb,
          {
            parser: Ob
          } = this.p,
          Gb = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          Ub = Ob.dynamicPrecedence(Bb);
        if (Ub && (this.score += Ub), 0 == hb) return this.pushState(Ob.getGoto(this.state, Bb, !0), this.reducePos), Bb < Ob.minRepeatTerm && this.storeNode(Bb, this.reducePos, this.reducePos, Gb ? 8 : 4, !0), void this.reduceContext(Bb, this.reducePos);
        let Lb = this.stack.length - 3 * (hb - 1) - (262144 & bb ? 6 : 0),
          Yb = Lb ? this.stack[Lb - 2] : this.p.tp[0].from,
          Sb = this.reducePos - Yb;
        Sb >= 2e3 && !(null === (ub = this.p.parser.nodeSet.types[Bb]) || void 0 === ub ? void 0 : ub.isAnonymous) && (Yb == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = Sb) : this.p.lastBigReductionSize < Sb && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = Yb, this.p.lastBigReductionSize = Sb));
        let ab = Lb ? this.stack[Lb - 1] : 0,
          Hb = this.bufferBase + this.buffer.length - ab;
        if (Bb < Ob.minRepeatTerm || 131072 & bb) {
          let bb = Ob.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(Bb, Yb, bb, Hb + 4, !0)
        }
        if (262144 & bb) this.state = this.stack[Lb];
        else {
          let bb = this.stack[Lb - 3];
          this.state = Ob.getGoto(bb, Bb, !0)
        }
        for (; this.stack.length > Lb;) this.stack.pop();
        this.reduceContext(Bb, Yb)
      }
      storeNode(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          Ob = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == bb && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let bb = this,
            Bb = this.buffer.length;
          if (0 == Bb && bb.parent && (Bb = bb.bufferBase - bb.parent.bufferBase, bb = bb.parent), Bb > 0 && 0 == bb.buffer[Bb - 4] && bb.buffer[Bb - 1] > -1) {
            if (ub == hb) return;
            if (bb.buffer[Bb - 2] >= ub) return void(bb.buffer[Bb - 2] = hb)
          }
        }
        if (Ob && this.pos != hb) {
          let Ob = this.buffer.length;
          if (Ob > 0 && (0 != this.buffer[Ob - 4] || this.buffer[Ob - 1] < 0)) {
            let bb = !1;
            for (let ub = Ob; ub > 0 && this.buffer[ub - 2] > hb; ub -= 4)
              if (this.buffer[ub - 1] >= 0) {
                bb = !0;
                break
              } if (bb)
              for (; Ob > 0 && this.buffer[Ob - 2] > hb;) this.buffer[Ob] = this.buffer[Ob - 4], this.buffer[Ob + 1] = this.buffer[Ob - 3], this.buffer[Ob + 2] = this.buffer[Ob - 2], this.buffer[Ob + 3] = this.buffer[Ob - 1], Ob -= 4, Bb > 4 && (Bb -= 4)
          }
          this.buffer[Ob] = bb, this.buffer[Ob + 1] = ub, this.buffer[Ob + 2] = hb, this.buffer[Ob + 3] = Bb
        } else this.buffer.push(bb, ub, hb, Bb)
      }
      shift(bb, ub, hb, Bb) {
        if (131072 & bb) this.pushState(65535 & bb, this.pos);
        else if (0 == (262144 & bb)) {
          let Ob = bb,
            {
              parser: Gb
            } = this.p;
          this.pos = Bb;
          let Ub = Gb.stateFlag(Ob, 1);
          !Ub && (Bb > hb || ub <= Gb.maxNode) && (this.reducePos = Bb), this.pushState(Ob, Ub ? hb : Math.min(hb, this.reducePos)), this.shiftContext(ub, hb), ub <= Gb.maxNode && this.buffer.push(ub, hb, Bb, 4)
        } else this.pos = Bb, this.shiftContext(ub, hb), ub <= this.p.parser.maxNode && this.buffer.push(ub, hb, Bb, 4)
      }
      apply(bb, ub, hb, Bb) {
        65536 & bb ? this.reduce(bb) : this.shift(bb, ub, hb, Bb)
      }
      useNode(bb, ub) {
        let hb = this.p.reused.length - 1;
        (hb < 0 || this.p.reused[hb] != bb) && (this.p.reused.push(bb), hb++);
        let Bb = this.pos;
        this.reducePos = this.pos = Bb + bb.length, this.pushState(ub, Bb), this.buffer.push(hb, Bb, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, bb, this, this.p.stream.reset(this.pos - bb.length)))
      }
      split() {
        let bb = this,
          ub = bb.buffer.length;
        for (; ub > 0 && bb.buffer[ub - 2] > bb.reducePos;) ub -= 4;
        let hb = bb.buffer.slice(ub),
          Bb = bb.bufferBase + ub;
        for (; bb && Bb == bb.bufferBase;) bb = bb.parent;
        return new Ob(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, hb, Bb, this.curContext, this.lookAhead, bb)
      }
      recoverByDelete(bb, ub) {
        let hb = bb <= this.p.parser.maxNode;
        hb && this.storeNode(bb, this.pos, ub, 4), this.storeNode(0, this.pos, ub, hb ? 8 : 4), this.pos = this.reducePos = ub, this.score -= 190
      }
      canShift(bb) {
        for (let ub = new Ub(this);;) {
          let hb = this.p.parser.stateSlot(ub.state, 4) || this.p.parser.hasAction(ub.state, bb);
          if (0 == hb) return !1;
          if (0 == (65536 & hb)) return !0;
          ub.reduce(hb)
        }
      }
      recoverByInsert(bb) {
        if (this.stack.length >= 300) return [];
        let ub = this.p.parser.nextStates(this.state);
        if (ub.length > 8 || this.stack.length >= 120) {
          let hb = [];
          for (let Bb, Ob = 0; Ob < ub.length; Ob += 2)(Bb = ub[Ob + 1]) != this.state && this.p.parser.hasAction(Bb, bb) && hb.push(ub[Ob], Bb);
          if (this.stack.length < 120)
            for (let bb = 0; hb.length < 8 && bb < ub.length; bb += 2) {
              let Bb = ub[bb + 1];
              hb.some(((bb, ub) => 1 & ub && bb == Bb)) || hb.push(ub[bb], Bb)
            }
          ub = hb
        }
        let hb = [];
        for (let Bb = 0; Bb < ub.length && hb.length < 4; Bb += 2) {
          let bb = ub[Bb + 1];
          if (bb == this.state) continue;
          let Ob = this.split();
          Ob.pushState(bb, this.pos), Ob.storeNode(0, Ob.pos, Ob.pos, 4, !0), Ob.shiftContext(ub[Bb], this.pos), Ob.reducePos = this.pos, Ob.score -= 200, hb.push(Ob)
        }
        return hb
      }
      forceReduce() {
        let {
          parser: bb
        } = this.p, ub = bb.stateSlot(this.state, 5);
        if (0 == (65536 & ub)) return !1;
        if (!bb.validAction(this.state, ub)) {
          let hb = ub >> 19,
            Bb = 65535 & ub,
            Ob = this.stack.length - 3 * hb;
          if (Ob < 0 || bb.getGoto(this.stack[Ob], Bb, !1) < 0) {
            let bb = this.findForcedReduction();
            if (null == bb) return !1;
            ub = bb
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(ub), !0
      }
      findForcedReduction() {
        let {
          parser: bb
        } = this.p, ub = [], hb = (Bb, Ob) => {
          if (!ub.includes(Bb)) return ub.push(Bb), bb.allActions(Bb, (ub => {
            if (393216 & ub);
            else if (65536 & ub) {
              let hb = (ub >> 19) - Ob;
              if (hb > 1) {
                let Bb = 65535 & ub,
                  Ob = this.stack.length - 3 * hb;
                if (Ob >= 0 && bb.getGoto(this.stack[Ob], Bb, !1) >= 0) return hb << 19 | 65536 | Bb
              }
            } else {
              let bb = hb(ub, Ob + 1);
              if (null != bb) return bb
            }
          }))
        };
        return hb(this.state, 0)
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
          parser: bb
        } = this.p;
        return 65535 == bb.data[bb.stateSlot(this.state, 1)] && !bb.stateSlot(this.state, 4)
      }
      restart() {
        this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0
      }
      sameState(bb) {
        if (this.state != bb.state || this.stack.length != bb.stack.length) return !1;
        for (let ub = 0; ub < this.stack.length; ub += 3)
          if (this.stack[ub] != bb.stack[ub]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(bb) {
        return this.p.parser.dialect.flags[bb]
      }
      shiftContext(bb, ub) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, bb, this, this.p.stream.reset(ub)))
      }
      reduceContext(bb, ub) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, bb, this, this.p.stream.reset(ub)))
      }
      emitContext() {
        let bb = this.buffer.length - 1;
        (bb < 0 || -3 != this.buffer[bb]) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3)
      }
      emitLookAhead() {
        let bb = this.buffer.length - 1;
        (bb < 0 || -4 != this.buffer[bb]) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4)
      }
      updateContext(bb) {
        if (bb != this.curContext.context) {
          let ub = new Gb(this.curContext.tracker, bb);
          ub.hash != this.curContext.hash && this.emitContext(), this.curContext = ub
        }
      }
      setLookAhead(bb) {
        return !(bb <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = bb, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class Gb {
      constructor(bb, ub) {
        this.tracker = bb, this.context = ub, this.hash = bb.strict ? bb.hash(ub) : 0
      }
    }
    class Ub {
      constructor(bb) {
        this.start = bb, this.state = bb.state, this.stack = bb.stack, this.base = this.stack.length
      }
      reduce(bb) {
        let ub = 65535 & bb,
          hb = bb >> 19;
        0 == hb ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (hb - 1);
        let Bb = this.start.p.parser.getGoto(this.stack[this.base - 3], ub, !0);
        this.state = Bb
      }
    }
    class Lb {
      constructor(bb, ub, hb) {
        this.stack = bb, this.pos = ub, this.index = hb, this.buffer = bb.buffer, 0 == this.index && this.maybeNext()
      }
      static create(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb.bufferBase + bb.buffer.length;
        return new Lb(bb, ub, ub - bb.bufferBase)
      }
      maybeNext() {
        let bb = this.stack.parent;
        null != bb && (this.index = this.stack.bufferBase - bb.bufferBase, this.stack = bb, this.buffer = bb.buffer)
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
        return new Lb(this.stack, this.pos, this.index)
      }
    }

    function Yb(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof bb) return bb;
      let hb = null;
      for (let Bb = 0, Ob = 0; Bb < bb.length;) {
        let Gb = 0;
        for (;;) {
          let ub = bb.charCodeAt(Bb++),
            hb = !1;
          if (126 == ub) {
            Gb = 65535;
            break
          }
          ub >= 92 && ub--, ub >= 34 && ub--;
          let Ob = ub - 32;
          if (Ob >= 46 && (Ob -= 46, hb = !0), Gb += Ob, hb) break;
          Gb *= 46
        }
        hb ? hb[Ob++] = Gb : hb = new ub(Gb)
      }
      return hb
    }
    class Sb {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const ab = new Sb;
    class Hb {
      constructor(bb, ub) {
        this.input = bb, this.tp = ub, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = ab, this.rangeIndex = 0, this.pos = this.chunkPos = ub[0].from, this.range = ub[0], this.end = ub[ub.length - 1].to, this.readNext()
      }
      resolveOffset(bb, ub) {
        let hb = this.range,
          Bb = this.rangeIndex,
          Ob = this.pos + bb;
        for (; Ob < hb.from;) {
          if (!Bb) return null;
          let bb = this.tp[--Bb];
          Ob -= hb.from - bb.to, hb = bb
        }
        for (; ub < 0 ? Ob > hb.to : Ob >= hb.to;) {
          if (Bb == this.tp.length - 1) return null;
          let bb = this.tp[++Bb];
          Ob += bb.from - hb.to, hb = bb
        }
        return Ob
      }
      clipPos(bb) {
        if (bb >= this.range.from && bb < this.range.to) return bb;
        for (let ub of this.tp)
          if (ub.to > bb) return Math.max(bb, ub.from);
        return this.end
      }
      peek(bb) {
        let ub, hb, Bb = this.chunkOff + bb;
        if (Bb >= 0 && Bb < this.chunk.length) ub = this.pos + bb, hb = this.chunk.charCodeAt(Bb);
        else {
          let Bb = this.resolveOffset(bb, 1);
          if (null == Bb) return -1;
          if (ub = Bb, ub >= this.chunk2Pos && ub < this.chunk2Pos + this.chunk2.length) hb = this.chunk2.charCodeAt(ub - this.chunk2Pos);
          else {
            let bb = this.rangeIndex,
              Bb = this.range;
            for (; Bb.to <= ub;) Bb = this.tp[++bb];
            this.chunk2 = this.input.chunk(this.chunk2Pos = ub), ub + this.chunk2.length > Bb.to && (this.chunk2 = this.chunk2.slice(0, Bb.to - ub)), hb = this.chunk2.charCodeAt(0)
          }
        }
        return ub >= this.token.lookAhead && (this.token.lookAhead = ub + 1), hb
      }
      acceptToken(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          hb = ub ? this.resolveOffset(ub, -1) : this.pos;
        if (null == hb || hb < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = bb, this.token.end = hb
      }
      acceptTokenTo(bb, ub) {
        this.token.value = bb, this.token.end = ub
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: bb,
            chunkPos: ub
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = bb, this.chunk2Pos = ub, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let bb = this.input.chunk(this.pos),
            ub = this.pos + bb.length;
          this.chunk = ub > this.range.to ? bb.slice(0, this.range.to - this.pos) : bb, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += bb; this.pos + bb >= this.range.to;) {
          if (this.rangeIndex == this.tp.length - 1) return this.setDone();
          bb -= this.range.to - this.pos, this.range = this.tp[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += bb, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.tp[this.rangeIndex = this.tp.length - 1], this.chunk = "", this.next = -1
      }
      reset(bb, ub) {
        if (ub ? (this.token = ub, ub.start = bb, ub.lookAhead = bb + 1, ub.value = ub.extended = -1) : this.token = ab, this.pos != bb) {
          if (this.pos = bb, bb == this.end) return this.setDone(), this;
          for (; bb < this.range.from;) this.range = this.tp[--this.rangeIndex];
          for (; bb >= this.range.to;) this.range = this.tp[++this.rangeIndex];
          bb >= this.chunkPos && bb < this.chunkPos + this.chunk.length ? this.chunkOff = bb - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(bb, ub) {
        if (bb >= this.chunkPos && ub <= this.chunkPos + this.chunk.length) return this.chunk.slice(bb - this.chunkPos, ub - this.chunkPos);
        if (bb >= this.chunk2Pos && ub <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(bb - this.chunk2Pos, ub - this.chunk2Pos);
        if (bb >= this.range.from && ub <= this.range.to) return this.input.read(bb, ub);
        let hb = "";
        for (let Bb of this.tp) {
          if (Bb.from >= ub) break;
          Bb.to > bb && (hb += this.input.read(Math.max(Bb.from, bb), Math.min(Bb.to, ub)))
        }
        return hb
      }
    }
    class wb {
      constructor(bb, ub) {
        this.data = bb, this.id = ub
      }
      token(bb, ub) {
        let {
          parser: hb
        } = ub.p;
        pb(this.data, bb, ub, this.id, hb.data, hb.tokenPrecTable)
      }
    }
    wb.prototype.contextual = wb.prototype.fallback = wb.prototype.extend = !1;
    class Zb {
      constructor(bb, ub, hb) {
        this.precTable = ub, this.elseToken = hb, this.data = "string" == typeof bb ? Yb(bb) : bb
      }
      token(bb, ub) {
        let hb = bb.pos,
          Bb = 0;
        for (;;) {
          let hb = bb.next < 0,
            Ob = bb.resolveOffset(1, 1);
          if (pb(this.data, bb, ub, 0, this.data, this.precTable), bb.token.value > -1) break;
          if (null == this.elseToken) return;
          if (hb || Bb++, null == Ob) break;
          bb.reset(Ob, bb.token)
        }
        Bb && (bb.reset(hb, bb.token), bb.acceptToken(this.elseToken, Bb))
      }
    }
    Zb.prototype.contextual = wb.prototype.fallback = wb.prototype.extend = !1;
    class Xb {
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = bb, this.contextual = !!ub.contextual, this.fallback = !!ub.fallback, this.extend = !!ub.extend
      }
    }

    function pb(bb, ub, hb, Bb, Ob, Gb) {
      let Ub = 0,
        Lb = 1 << Bb,
        {
          dialect: Yb
        } = hb.p.parser;
      bb: for (; 0 != (Lb & bb[Ub]);) {
        let hb = bb[Ub + 1];
        for (let Hb = Ub + 3; Hb < hb; Hb += 2)
          if ((bb[Hb + 1] & Lb) > 0) {
            let hb = bb[Hb];
            if (Yb.allows(hb) && (-1 == ub.token.value || ub.token.value == hb || Ab(hb, ub.token.value, Ob, Gb))) {
              ub.acceptToken(hb);
              break
            }
          } let Bb = ub.next,
          Sb = 0,
          ab = bb[Ub + 2];
        if (!(ub.next < 0 && ab > Sb && 65535 == bb[hb + 3 * ab - 3])) {
          for (; Sb < ab;) {
            let Ob = Sb + ab >> 1,
              Gb = hb + Ob + (Ob << 1),
              Lb = bb[Gb],
              Yb = bb[Gb + 1] || 65536;
            if (Bb < Lb) ab = Ob;
            else {
              if (!(Bb >= Yb)) {
                Ub = bb[Gb + 2], ub.advance();
                continue bb
              }
              Sb = Ob + 1
            }
          }
          break
        }
        Ub = bb[hb + 3 * ab - 1]
      }
    }

    function ob(bb, ub, hb) {
      for (let Bb, Ob = ub; 65535 != (Bb = bb[Ob]); Ob++)
        if (Bb == hb) return Ob - ub;
      return -1
    }

    function Ab(bb, ub, hb, Bb) {
      let Ob = ob(hb, Bb, ub);
      return Ob < 0 || ob(hb, Bb, bb) < Ob
    }
    const lb = "undefined" != typeof process && {
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
    let Kb = null;

    function Wb(bb, ub, hb) {
      let Ob = bb.cursor(Bb.d.IncludeAnonymous);
      for (Ob.moveTo(ub);;)
        if (!(hb < 0 ? Ob.childBefore(ub) : Ob.childAfter(ub)))
          for (;;) {
            if ((hb < 0 ? Ob.to < ub : Ob.from > ub) && !Ob.type.isError) return hb < 0 ? Math.max(0, Math.min(Ob.to - 1, ub - 25)) : Math.min(bb.length, Math.max(Ob.from + 1, ub + 25));
            if (hb < 0 ? Ob.prevSibling() : Ob.nextSibling()) break;
            if (!Ob.parent()) return hb < 0 ? 0 : bb.length
          }
    }
    class Cb {
      constructor(bb, ub) {
        this.fragments = bb, this.nodeSet = ub, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let bb = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (bb) {
          for (this.safeFrom = bb.openStart ? Wb(bb.tree, bb.from + bb.offset, 1) - bb.offset : bb.from, this.safeTo = bb.openEnd ? Wb(bb.tree, bb.to + bb.offset, -1) - bb.offset : bb.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(bb.tree), this.start.push(-bb.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(bb) {
        if (bb < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= bb;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let ub = this.trees.length - 1;
          if (ub < 0) return this.nextFragment(), null;
          let hb = this.trees[ub],
            Ob = this.index[ub];
          if (Ob == hb.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let Gb = hb.children[Ob],
            Ub = this.start[ub] + hb.positions[Ob];
          if (Ub > bb) return this.nextStart = Ub, null;
          if (Gb instanceof Bb.w) {
            if (Ub == bb) {
              if (Ub < this.safeFrom) return null;
              let bb = Ub + Gb.length;
              if (bb <= this.safeTo) {
                let ub = Gb.prop(Bb.g.lookAhead);
                if (!ub || bb + ub < this.fragment.to) return Gb
              }
            }
            this.index[ub]++, Ub + Gb.length >= Math.max(this.safeFrom, bb) && (this.trees.push(Gb), this.start.push(Ub), this.index.push(0))
          } else this.index[ub]++, this.nextStart = Ub + Gb.length
        }
      }
    }
    class db {
      constructor(bb, ub) {
        this.stream = ub, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = bb.tokenizers.map((bb => new Sb))
      }
      getActions(bb) {
        let ub = 0,
          hb = null,
          {
            parser: Bb
          } = bb.p,
          {
            tokenizers: Ob
          } = Bb,
          Gb = Bb.stateSlot(bb.state, 3),
          Ub = bb.curContext ? bb.curContext.hash : 0,
          Lb = 0;
        for (let Yb = 0; Yb < Ob.length; Yb++) {
          if (0 == (1 << Yb & Gb)) continue;
          let Bb = Ob[Yb],
            Sb = this.tokens[Yb];
          if ((!hb || Bb.fallback) && ((Bb.contextual || Sb.start != bb.pos || Sb.mask != Gb || Sb.context != Ub) && (this.updateCachedToken(Sb, Bb, bb), Sb.mask = Gb, Sb.context = Ub), Sb.lookAhead > Sb.end + 25 && (Lb = Math.max(Sb.lookAhead, Lb)), 0 != Sb.value)) {
            let Ob = ub;
            if (Sb.extended > -1 && (ub = this.addActions(bb, Sb.extended, Sb.end, ub)), ub = this.addActions(bb, Sb.value, Sb.end, ub), !Bb.extend && (hb = Sb, ub > Ob)) break
          }
        }
        for (; this.actions.length > ub;) this.actions.pop();
        return Lb && bb.setLookAhead(Lb), hb || bb.pos != this.stream.end || (hb = new Sb, hb.value = bb.p.parser.eofTerm, hb.start = hb.end = bb.pos, ub = this.addActions(bb, hb.value, hb.end, ub)), this.mainToken = hb, this.actions
      }
      getMainToken(bb) {
        if (this.mainToken) return this.mainToken;
        let ub = new Sb,
          {
            pos: hb,
            p: Bb
          } = bb;
        return ub.start = hb, ub.end = Math.min(hb + 1, Bb.stream.end), ub.value = hb == Bb.stream.end ? Bb.parser.eofTerm : 0, ub
      }
      updateCachedToken(bb, ub, hb) {
        let Bb = this.stream.clipPos(hb.pos);
        if (ub.token(this.stream.reset(Bb, bb), hb), bb.value > -1) {
          let {
            parser: ub
          } = hb.p;
          for (let Bb = 0; Bb < ub.specialized.length; Bb++)
            if (ub.specialized[Bb] == bb.value) {
              let Ob = ub.specializers[Bb](this.stream.read(bb.start, bb.end), hb);
              if (Ob >= 0 && hb.p.parser.dialect.allows(Ob >> 1)) {
                0 == (1 & Ob) ? bb.value = Ob >> 1 : bb.extended = Ob >> 1;
                break
              }
            }
        } else bb.value = 0, bb.end = this.stream.clipPos(Bb + 1)
      }
      putAction(bb, ub, hb, Bb) {
        for (let Ob = 0; Ob < Bb; Ob += 3)
          if (this.actions[Ob] == bb) return Bb;
        return this.actions[Bb++] = bb, this.actions[Bb++] = ub, this.actions[Bb++] = hb, Bb
      }
      addActions(bb, ub, hb, Bb) {
        let {
          state: Ob
        } = bb, {
          parser: Gb
        } = bb.p, {
          data: Ub
        } = Gb;
        for (let Lb = 0; Lb < 2; Lb++)
          for (let bb = Gb.stateSlot(Ob, Lb ? 2 : 1);; bb += 3) {
            if (65535 == Ub[bb]) {
              if (1 != Ub[bb + 1]) {
                0 == Bb && 2 == Ub[bb + 1] && (Bb = this.putAction(zb(Ub, bb + 2), ub, hb, Bb));
                break
              }
              bb = zb(Ub, bb + 2)
            }
            Ub[bb] == ub && (Bb = this.putAction(zb(Ub, bb + 1), ub, hb, Bb))
          }
        return Bb
      }
    }
    class rb {
      constructor(bb, ub, hb, Bb) {
        this.parser = bb, this.input = ub, this.tp = Bb, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new Hb(ub, Bb), this.tokens = new db(bb, this.stream), this.topTerm = bb.top[1];
        let {
          from: Gb
        } = Bb[0];
        this.stacks = [Ob.start(this, bb.top[0], Gb)], this.fragments = hb.length && this.stream.end - Gb > 4 * bb.bufferLength ? new Cb(hb, bb.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let bb, ub, hb = this.stacks,
          Bb = this.minStackPos,
          Ob = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == hb.length) {
          let [bb] = hb;
          for (; bb.forceReduce() && bb.stack.length && bb.stack[bb.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let Gb = 0; Gb < hb.length; Gb++) {
          let Ub = hb[Gb];
          for (;;) {
            if (this.tokens.mainToken = null, Ub.pos > Bb) Ob.push(Ub);
            else {
              if (this.advanceStack(Ub, Ob, hb)) continue;
              {
                bb || (bb = [], ub = []), bb.push(Ub);
                let hb = this.tokens.getMainToken(Ub);
                ub.push(hb.value, hb.end)
              }
            }
            break
          }
        }
        if (!Ob.length) {
          let ub = bb && function(bb) {
            let ub = null;
            for (let hb of bb) {
              let bb = hb.p.stoppedAt;
              (hb.pos == hb.p.stream.end || null != bb && hb.pos > bb) && hb.p.parser.stateFlag(hb.state, 2) && (!ub || ub.score < hb.score) && (ub = hb)
            }
            return ub
          }(bb);
          if (ub) return lb && console.log("Finish with " + this.stackID(ub)), this.stackToTree(ub);
          if (this.parser.strict) throw lb && bb && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + Bb);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && bb) {
          let hb = null != this.stoppedAt && bb[0].pos > this.stoppedAt ? bb[0] : this.runRecovery(bb, ub, Ob);
          if (hb) return lb && console.log("Force-finish " + this.stackID(hb)), this.stackToTree(hb.forceAll())
        }
        if (this.recovering) {
          let bb = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (Ob.length > bb)
            for (Ob.sort(((bb, ub) => ub.score - bb.score)); Ob.length > bb;) Ob.pop();
          Ob.some((bb => bb.reducePos > Bb)) && this.recovering--
        } else if (Ob.length > 1) {
          bb: for (let bb = 0; bb < Ob.length - 1; bb++) {
            let ub = Ob[bb];
            for (let hb = bb + 1; hb < Ob.length; hb++) {
              let Bb = Ob[hb];
              if (ub.sameState(Bb) || ub.buffer.length > 500 && Bb.buffer.length > 500) {
                if (!((ub.score - Bb.score || ub.buffer.length - Bb.buffer.length) > 0)) {
                  Ob.splice(bb--, 1);
                  continue bb
                }
                Ob.splice(hb--, 1)
              }
            }
          }
          Ob.length > 12 && (Ob.sort(((bb, ub) => ub.score - bb.score)), Ob.splice(12, Ob.length - 12))
        }
        this.minStackPos = Ob[0].pos;
        for (let Gb = 1; Gb < Ob.length; Gb++) Ob[Gb].pos < this.minStackPos && (this.minStackPos = Ob[Gb].pos);
        return null
      }
      stopAt(bb) {
        if (null != this.stoppedAt && this.stoppedAt < bb) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = bb
      }
      advanceStack(bb, ub, hb) {
        let Ob = bb.pos,
          {
            parser: Gb
          } = this,
          Ub = lb ? this.stackID(bb) + " -> " : "";
        if (null != this.stoppedAt && Ob > this.stoppedAt) return bb.forceReduce() ? bb : null;
        if (this.fragments) {
          let ub = bb.curContext && bb.curContext.tracker.strict,
            hb = ub ? bb.curContext.hash : 0;
          for (let Lb = this.fragments.nodeAt(Ob); Lb;) {
            let Ob = this.parser.nodeSet.types[Lb.type.id] == Lb.type ? Gb.getGoto(bb.state, Lb.type.id) : -1;
            if (Ob > -1 && Lb.length && (!ub || (Lb.prop(Bb.g.contextHash) || 0) == hb)) return bb.useNode(Lb, Ob), lb && console.log(Ub + this.stackID(bb) + ` (via reuse of ${Gb.getName(Lb.type.id)})`), !0;
            if (!(Lb instanceof Bb.w) || 0 == Lb.children.length || Lb.positions[0] > 0) break;
            let Yb = Lb.children[0];
            if (!(Yb instanceof Bb.w && 0 == Lb.positions[0])) break;
            Lb = Yb
          }
        }
        let Lb = Gb.stateSlot(bb.state, 4);
        if (Lb > 0) return bb.reduce(Lb), lb && console.log(Ub + this.stackID(bb) + ` (via always-reduce ${Gb.getName(65535&Lb)})`), !0;
        if (bb.stack.length >= 8400)
          for (; bb.stack.length > 6e3 && bb.forceReduce(););
        let Yb = this.tokens.getActions(bb);
        for (let Bb = 0; Bb < Yb.length;) {
          let Lb = Yb[Bb++],
            Sb = Yb[Bb++],
            ab = Yb[Bb++],
            Hb = Bb == Yb.length || !hb,
            wb = Hb ? bb : bb.split(),
            Zb = this.tokens.mainToken;
          if (wb.apply(Lb, Sb, Zb ? Zb.start : wb.pos, ab), lb && console.log(Ub + this.stackID(wb) + ` (via ${0==(65536&Lb)?"shift":`reduce of ${Gb.getName(65535&Lb)}`} for ${Gb.getName(Sb)} @ ${Ob}${wb==bb?"":", split"})`), Hb) return !0;
          wb.pos > Ob ? ub.push(wb) : hb.push(wb)
        }
        return !1
      }
      advanceFully(bb, ub) {
        let hb = bb.pos;
        for (;;) {
          if (!this.advanceStack(bb, null, null)) return !1;
          if (bb.pos > hb) return jb(bb, ub), !0
        }
      }
      runRecovery(bb, ub, hb) {
        let Bb = null,
          Ob = !1;
        for (let Gb = 0; Gb < bb.length; Gb++) {
          let Ub = bb[Gb],
            Lb = ub[Gb << 1],
            Yb = ub[1 + (Gb << 1)],
            Sb = lb ? this.stackID(Ub) + " -> " : "";
          if (Ub.deadEnd) {
            if (Ob) continue;
            if (Ob = !0, Ub.restart(), lb && console.log(Sb + this.stackID(Ub) + " (restarted)"), this.advanceFully(Ub, hb)) continue
          }
          let ab = Ub.split(),
            Hb = Sb;
          for (let bb = 0; bb < 10 && ab.forceReduce(); bb++) {
            if (lb && console.log(Hb + this.stackID(ab) + " (via force-reduce)"), this.advanceFully(ab, hb)) break;
            lb && (Hb = this.stackID(ab) + " -> ")
          }
          for (let bb of Ub.recoverByInsert(Lb)) lb && console.log(Sb + this.stackID(bb) + " (via recover-insert)"), this.advanceFully(bb, hb);
          this.stream.end > Ub.pos ? (Yb == Ub.pos && (Yb++, Lb = 0), Ub.recoverByDelete(Lb, Yb), lb && console.log(Sb + this.stackID(Ub) + ` (via recover-delete ${this.parser.getName(Lb)})`), jb(Ub, hb)) : (!Bb || Bb.score < ab.score) && (Bb = ab)
        }
        return Bb
      }
      stackToTree(bb) {
        return bb.close(), Bb.w.build({
          buffer: Lb.create(bb),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.tp[0].from,
          length: bb.pos - this.tp[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(bb) {
        let ub = (Kb || (Kb = new WeakMap)).get(bb);
        return ub || Kb.set(bb, ub = String.fromCodePoint(this.nextStackID++)), ub + bb
      }
    }

    function jb(bb, ub) {
      for (let hb = 0; hb < ub.length; hb++) {
        let Bb = ub[hb];
        if (Bb.pos == bb.pos && Bb.sameState(bb)) return void(ub[hb].score < bb.score && (ub[hb] = bb))
      }
      ub.push(bb)
    }
    class nb {
      constructor(bb, ub, hb) {
        this.source = bb, this.flags = ub, this.disabled = hb
      }
      allows(bb) {
        return !this.disabled || 0 == this.disabled[bb]
      }
    }
    const Db = bb => bb;
    class xb extends Bb.u {
      constructor(bb) {
        if (super(), this.wrappers = [], 14 != bb.version) throw new RangeError(`Parser version (${bb.version}) doesn't match runtime version (14)`);
        let ub = bb.nodeNames.split(" ");
        this.minRepeatTerm = ub.length;
        for (let Bb = 0; Bb < bb.repeatNodeCount; Bb++) ub.push("");
        let hb = Object.keys(bb.topRules).map((ub => bb.topRules[ub][1])),
          Ob = [];
        for (let Bb = 0; Bb < ub.length; Bb++) Ob.push([]);

        function Gb(bb, ub, hb) {
          Ob[bb].push([ub, ub.deserialize(String(hb))])
        }
        if (bb.nodeProps)
          for (let Lb of bb.nodeProps) {
            let bb = Lb[0];
            "string" == typeof bb && (bb = Bb.g[bb]);
            for (let ub = 1; ub < Lb.length;) {
              let hb = Lb[ub++];
              if (hb >= 0) Gb(hb, bb, Lb[ub++]);
              else {
                let Bb = Lb[ub + -hb];
                for (let Ob = -hb; Ob > 0; Ob--) Gb(Lb[ub++], bb, Bb);
                ub++
              }
            }
          }
        this.nodeSet = new Bb.i(ub.map(((ub, Gb) => Bb.m.define({
          name: Gb >= this.minRepeatTerm ? void 0 : ub,
          id: Gb,
          props: Ob[Gb],
          top: hb.indexOf(Gb) > -1,
          error: 0 == Gb,
          skipped: bb.skippedNodes && bb.skippedNodes.indexOf(Gb) > -1
        })))), bb.propSources && (this.nodeSet = this.nodeSet.extend(...bb.propSources)), this.strict = !1, this.bufferLength = Bb.b;
        let Ub = Yb(bb.tokenData);
        this.context = bb.context, this.specializerSpecs = bb.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let Bb = 0; Bb < this.specializerSpecs.length; Bb++) this.specialized[Bb] = this.specializerSpecs[Bb].term;
        this.specializers = this.specializerSpecs.map(gb), this.states = Yb(bb.states, Uint32Array), this.data = Yb(bb.stateData), this.goto = Yb(bb.goto), this.maxTerm = bb.maxTerm, this.tokenizers = bb.tokenizers.map((bb => "number" == typeof bb ? new wb(Ub, bb) : bb)), this.topRules = bb.topRules, this.dialects = bb.dialects || {}, this.dynamicPrecedences = bb.dynamicPrecedences || null, this.tokenPrecTable = bb.tokenPrec, this.termNames = bb.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(bb, ub, hb) {
        let Bb = new rb(this, bb, ub, hb);
        for (let Ob of this.wrappers) Bb = Ob(Bb, bb, ub, hb);
        return Bb
      }
      getGoto(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Bb = this.goto;
        if (ub >= Bb[0]) return -1;
        for (let Ob = Bb[ub + 1];;) {
          let ub = Bb[Ob++],
            Gb = 1 & ub,
            Ub = Bb[Ob++];
          if (Gb && hb) return Ub;
          for (let hb = Ob + (ub >> 1); Ob < hb; Ob++)
            if (Bb[Ob] == bb) return Ub;
          if (Gb) return -1
        }
      }
      hasAction(bb, ub) {
        let hb = this.data;
        for (let Bb = 0; Bb < 2; Bb++)
          for (let Ob, Gb = this.stateSlot(bb, Bb ? 2 : 1);; Gb += 3) {
            if (65535 == (Ob = hb[Gb])) {
              if (1 != hb[Gb + 1]) {
                if (2 == hb[Gb + 1]) return zb(hb, Gb + 2);
                break
              }
              Ob = hb[Gb = zb(hb, Gb + 2)]
            }
            if (Ob == ub || 0 == Ob) return zb(hb, Gb + 1)
          }
        return 0
      }
      stateSlot(bb, ub) {
        return this.states[6 * bb + ub]
      }
      stateFlag(bb, ub) {
        return (this.stateSlot(bb, 0) & ub) > 0
      }
      validAction(bb, ub) {
        return !!this.allActions(bb, (bb => bb == ub || null))
      }
      allActions(bb, ub) {
        let hb = this.stateSlot(bb, 4),
          Bb = hb ? ub(hb) : void 0;
        for (let Ob = this.stateSlot(bb, 1); null == Bb; Ob += 3) {
          if (65535 == this.data[Ob]) {
            if (1 != this.data[Ob + 1]) break;
            Ob = zb(this.data, Ob + 2)
          }
          Bb = ub(zb(this.data, Ob + 1))
        }
        return Bb
      }
      nextStates(bb) {
        let ub = [];
        for (let hb = this.stateSlot(bb, 1);; hb += 3) {
          if (65535 == this.data[hb]) {
            if (1 != this.data[hb + 1]) break;
            hb = zb(this.data, hb + 2)
          }
          if (0 == (1 & this.data[hb + 2])) {
            let bb = this.data[hb + 1];
            ub.some(((ub, hb) => 1 & hb && ub == bb)) || ub.push(this.data[hb], bb)
          }
        }
        return ub
      }
      configure(bb) {
        let ub = Object.assign(Object.create(xb.prototype), this);
        if (bb.props && (ub.nodeSet = this.nodeSet.extend(...bb.props)), bb.top) {
          let hb = this.topRules[bb.top];
          if (!hb) throw new RangeError(`Invalid top rule name ${bb.top}`);
          ub.top = hb
        }
        return bb.tokenizers && (ub.tokenizers = this.tokenizers.map((ub => {
          let hb = bb.tokenizers.find((bb => bb.from == ub));
          return hb ? hb.to : ub
        }))), bb.specializers && (ub.specializers = this.specializers.slice(), ub.specializerSpecs = this.specializerSpecs.map(((hb, Bb) => {
          let Ob = bb.specializers.find((bb => bb.from == hb.external));
          if (!Ob) return hb;
          let Gb = Object.assign(Object.assign({}, hb), {
            external: Ob.to
          });
          return ub.specializers[Bb] = gb(Gb), Gb
        }))), bb.contextTracker && (ub.context = bb.contextTracker), bb.dialect && (ub.dialect = this.parseDialect(bb.dialect)), null != bb.strict && (ub.strict = bb.strict), bb.wrap && (ub.wrappers = ub.wrappers.concat(bb.wrap)), null != bb.bufferLength && (ub.bufferLength = bb.bufferLength), ub
      }
      hasWrappers() {
        return this.wrappers.length > 0
      }
      getName(bb) {
        return this.termNames ? this.termNames[bb] : String(bb <= this.maxNode && this.nodeSet.types[bb].name || bb)
      }
      get eofTerm() {
        return this.maxNode + 1
      }
      get topNode() {
        return this.nodeSet.types[this.top[1]]
      }
      dynamicPrecedence(bb) {
        let ub = this.dynamicPrecedences;
        return null == ub ? 0 : ub[bb] || 0
      }
      parseDialect(bb) {
        let ub = Object.keys(this.dialects),
          hb = ub.map((() => !1));
        if (bb)
          for (let Ob of bb.split(" ")) {
            let bb = ub.indexOf(Ob);
            bb >= 0 && (hb[bb] = !0)
          }
        let Bb = null;
        for (let Ob = 0; Ob < ub.length; Ob++)
          if (!hb[Ob])
            for (let bb, hb = this.dialects[ub[Ob]]; 65535 != (bb = this.data[hb++]);)(Bb || (Bb = new Uint8Array(this.maxTerm + 1)))[bb] = 1;
        return new nb(bb, hb, Bb)
      }
      static deserialize(bb) {
        return new xb(bb)
      }
    }

    function zb(bb, ub) {
      return bb[ub] | bb[ub + 1] << 16
    }

    function gb(bb) {
      if (bb.external) {
        let ub = bb.extend ? 1 : 0;
        return (hb, Bb) => bb.external(hb, Bb) << 1 | ub
      }
      return bb.get
    }
    var ib = hb(40803);
    const vb = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      tb = new class {
        constructor(bb) {
          this.start = bb.start, this.shift = bb.shift || Db, this.reduce = bb.reduce || Db, this.reuse = bb.reuse || Db, this.hash = bb.hash || (() => 0), this.strict = !1 !== bb.strict
        }
      }({
        start: !1,
        shift: (bb, ub) => 5 == ub || 6 == ub || 320 == ub ? bb : 321 == ub,
        strict: !1
      }),
      Jb = new Xb(((bb, ub) => {
        let {
          next: hb
        } = bb;
        (125 == hb || -1 == hb || ub.context) && bb.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      eb = new Xb(((bb, ub) => {
        let hb, {
          next: Bb
        } = bb;
        vb.indexOf(Bb) > -1 || (47 != Bb || 47 != (hb = bb.peek(1)) && 42 != hb) && (125 == Bb || 59 == Bb || -1 == Bb || ub.context || bb.acceptToken(316))
      }), {
        contextual: !0
      }),
      Nb = new Xb(((bb, ub) => {
        91 != bb.next || ub.context || bb.acceptToken(317)
      }), {
        contextual: !0
      }),
      sb = new Xb(((bb, ub) => {
        let {
          next: hb
        } = bb;
        if (43 == hb || 45 == hb) {
          if (bb.advance(), hb == bb.next) {
            bb.advance();
            let hb = !ub.context && ub.canShift(1);
            bb.acceptToken(hb ? 1 : 2)
          }
        } else 63 == hb && 46 == bb.peek(1) && (bb.advance(), bb.advance(), (bb.next < 48 || bb.next > 57) && bb.acceptToken(3))
      }), {
        contextual: !0
      });

    function Mb(bb, ub) {
      return bb >= 65 && bb <= 90 || bb >= 97 && bb <= 122 || 95 == bb || bb >= 192 || !ub && bb >= 48 && bb <= 57
    }
    const mb = new Xb(((bb, ub) => {
        if (60 != bb.next || !ub.dialectEnabled(0)) return;
        if (bb.advance(), 47 == bb.next) return;
        let hb = 0;
        for (; vb.indexOf(bb.next) > -1;) bb.advance(), hb++;
        if (Mb(bb.next, !0)) {
          for (bb.advance(), hb++; Mb(bb.next, !1);) bb.advance(), hb++;
          for (; vb.indexOf(bb.next) > -1;) bb.advance(), hb++;
          if (44 == bb.next) return;
          for (let ub = 0;; ub++) {
            if (7 == ub) {
              if (!Mb(bb.next, !0)) return;
              break
            }
            if (bb.next != "extends".charCodeAt(ub)) break;
            bb.advance(), hb++
          }
        }
        bb.acceptToken(4, -hb)
      })),
      Ib = (0, ib.e)({
        "get set async static": ib.k.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": ib.k.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": ib.k.operatorKeyword,
        "let var const using function class extends": ib.k.definitionKeyword,
        "import export from": ib.k.moduleKeyword,
        "with debugger new": ib.k.keyword,
        TemplateString: ib.k.special(ib.k.string),
        super: ib.k.atom,
        BooleanLiteral: ib.k.bool,
        this: ib.k.self,
        null: ib.k.null,
        Star: ib.k.modifier,
        VariableName: ib.k.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": ib.k.function(ib.k.variableName),
        VariableDefinition: ib.k.definition(ib.k.variableName),
        Label: ib.k.labelName,
        PropertyName: ib.k.propertyName,
        PrivatePropertyName: ib.k.special(ib.k.propertyName),
        "CallExpression/MemberExpression/PropertyName": ib.k.function(ib.k.propertyName),
        "FunctionDeclaration/VariableDefinition": ib.k.function(ib.k.definition(ib.k.variableName)),
        "ClassDeclaration/VariableDefinition": ib.k.definition(ib.k.className),
        "NewExpression/VariableName": ib.k.className,
        PropertyDefinition: ib.k.definition(ib.k.propertyName),
        PrivatePropertyDefinition: ib.k.definition(ib.k.special(ib.k.propertyName)),
        UpdateOp: ib.k.updateOperator,
        "LineComment Hashbang": ib.k.lineComment,
        BlockComment: ib.k.blockComment,
        Number: ib.k.number,
        String: ib.k.string,
        Escape: ib.k.escape,
        ArithOp: ib.k.arithmeticOperator,
        LogicOp: ib.k.logicOperator,
        BitOp: ib.k.bitwiseOperator,
        CompareOp: ib.k.compareOperator,
        RegExp: ib.k.regexp,
        Equals: ib.k.definitionOperator,
        Arrow: ib.k.function(ib.k.punctuation),
        ": Spread": ib.k.punctuation,
        "( )": ib.k.paren,
        "[ ]": ib.k.squareBracket,
        "{ }": ib.k.brace,
        "InterpolationStart InterpolationEnd": ib.k.special(ib.k.brace),
        ".": ib.k.derefOperator,
        ", ;": ib.k.separator,
        "@": ib.k.meta,
        TypeName: ib.k.typeName,
        TypeDefinition: ib.k.definition(ib.k.typeName),
        "type enum interface implements namespace module declare": ib.k.definitionKeyword,
        "abstract global Privacy readonly override": ib.k.modifier,
        "is keyof unique infer asserts": ib.k.operatorKeyword,
        JSXAttributeValue: ib.k.attributeValue,
        JSXText: ib.k.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": ib.k.angleBracket,
        "JSXIdentifier JSXNameSpacedName": ib.k.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": ib.k.attributeName,
        "JSXBuiltin/JSXIdentifier": ib.k.standard(ib.k.tagName)
      }),
      Pb = {
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
      qb = {
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
      Eb = {
        __proto__: null,
        "<": 193
      },
      yb = xb.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: tb,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [Ib],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [eb, Nb, sb, mb, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, Jb, new Zb("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new Zb("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: bb => Pb[bb] || -1
        }, {
          term: 343,
          get: bb => qb[bb] || -1
        }, {
          term: 95,
          get: bb => Eb[bb] || -1
        }],
        tokenPrec: 15201
      });
    var Vb = hb(40788),
      Fb = hb(40769),
      fb = hb(40773),
      kb = hb(40760);
    const Tb = [(0, kb.r)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, kb.r)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, kb.r)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, kb.r)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, kb.r)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, kb.r)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, kb.r)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, kb.r)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, kb.r)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, kb.r)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, kb.r)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      cb = Tb.concat([(0, kb.r)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, kb.r)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, kb.r)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      Qb = new Bb.q,
      Rb = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function bu(bb) {
      return (ub, hb) => {
        let Bb = ub.node.getChild("VariableDefinition");
        return Bb && hb(Bb, bb), !0
      }
    }
    const uu = ["FunctionDeclaration"],
      hu = {
        FunctionDeclaration: bu("function"),
        ClassDeclaration: bu("class"),
        ClassExpression: () => !0,
        EnumDeclaration: bu("constant"),
        TypeAliasDeclaration: bu("type"),
        NamespaceDeclaration: bu("namespace"),
        VariableDefinition(bb, ub) {
          bb.matchContext(uu) || ub(bb, "variable")
        },
        TypeDefinition(bb, ub) {
          ub(bb, "type")
        },
        __proto__: null
      };

    function Bu(bb, ub) {
      let hb = Qb.get(ub);
      if (hb) return hb;
      let Ob = [],
        Gb = !0;

      function Ub(ub, hb) {
        let Bb = bb.sliceString(ub.from, ub.to);
        Ob.push({
          label: Bb,
          type: hb
        })
      }
      return ub.cursor(Bb.d.IncludeAnonymous).iterate((ub => {
        if (Gb) Gb = !1;
        else if (ub.name) {
          let bb = hu[ub.name];
          if (bb && bb(ub, Ub) || Rb.has(ub.name)) return !1
        } else if (ub.to - ub.from > 8192) {
          for (let hb of Bu(bb, ub.node)) Ob.push(hb);
          return !1
        }
      })), Qb.set(ub, Ob), Ob
    }
    const Ou = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      Gu = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function Uu(bb) {
      let ub = (0, Vb.hb)(bb.state).resolveInner(bb.pos, -1);
      if (Gu.indexOf(ub.name) > -1) return null;
      let hb = "VariableName" == ub.name || ub.to - ub.from < 20 && Ou.test(bb.state.sliceDoc(ub.from, ub.to));
      if (!hb && !bb.explicit) return null;
      let Bb = [];
      for (let Ob = ub; Ob; Ob = Ob.parent) Rb.has(Ob.name) && (Bb = Bb.concat(Bu(bb.state.doc, Ob)));
      return {
        options: Bb,
        from: hb ? ub.from : bb.pos,
        validFor: Ou
      }
    }
    const Lu = Vb.f.define({
        name: "javascript",
        parser: yb.configure({
          props: [Vb.N.add({
            IfStatement: (0, Vb.n)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, Vb.n)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: Vb.w,
            SwitchBody: bb => {
              let ub = bb.textAfter,
                hb = /^\s*\}/.test(ub),
                Bb = /^\s*(case|default)\b/.test(ub);
              return bb.baseIndent + (hb ? 0 : Bb ? 1 : 2) * bb.unit
            },
            Block: (0, Vb.v)({
              closing: "}"
            }),
            ArrowFunction: bb => bb.baseIndent + bb.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, Vb.n)({
              except: /^\s*{/
            }),
            JSXElement(bb) {
              let ub = /^\s*<\//.test(bb.textAfter);
              return bb.lineIndent(bb.node.from) + (ub ? 0 : bb.unit)
            },
            JSXEscape(bb) {
              let ub = /\s*\}/.test(bb.textAfter);
              return bb.lineIndent(bb.node.from) + (ub ? 0 : bb.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": bb => bb.column(bb.node.from) + bb.unit
          }), Vb.D.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": Vb.z,
            BlockComment: bb => ({
              from: bb.from + 2,
              to: bb.to - 2
            }),
            JSXElement(bb) {
              let ub = bb.firstChild;
              if (!ub || "JSXSelfClosingTag" == ub.name) return null;
              let hb = bb.lastChild;
              return {
                from: ub.to,
                to: hb.type.isError ? bb.to : hb.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(bb) {
              var ub;
              let hb = null === (ub = bb.firstChild) || void 0 === ub ? void 0 : ub.nextSibling,
                Bb = bb.lastChild;
              return !hb || hb.type.isError ? null : {
                from: hb.to,
                to: Bb.type.isError ? bb.to : Bb.from
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
      Yu = {
        test: bb => /^JSX/.test(bb.name),
        facet: (0, Vb.u)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      Su = Lu.configure({
        dialect: "ts"
      }, "typescript"),
      au = Lu.configure({
        dialect: "jsx",
        props: [Vb.cb.add((bb => bb.isTop ? [Yu] : void 0))]
      }),
      Hu = Lu.configure({
        dialect: "jsx ts",
        props: [Vb.cb.add((bb => bb.isTop ? [Yu] : void 0))]
      }, "typescript");
    let wu = bb => ({
      label: bb,
      type: "keyword"
    });
    const Zu = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(wu),
      Xu = Zu.concat(["declare", "implements", "private", "protected", "public"].map(wu));

    function pu() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        ub = bb.jsx ? bb.typescript ? Hu : au : bb.typescript ? Su : Lu,
        hb = bb.typescript ? cb.concat(Xu) : Tb.concat(Zu);
      return new Vb.h(ub, [Lu.data.of({
        autocomplete: (0, kb.o)(Gu, (0, kb.k)(hb))
      }), Lu.data.of({
        autocomplete: Uu
      }), bb.jsx ? lu : []])
    }

    function ou(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bb.length;
      for (let Bb = null === ub || void 0 === ub ? void 0 : ub.firstChild; Bb; Bb = Bb.nextSibling)
        if ("JSXIdentifier" == Bb.name || "JSXBuiltin" == Bb.name || "JSXNamespacedName" == Bb.name || "JSXMemberExpression" == Bb.name) return bb.sliceString(Bb.from, Math.min(Bb.to, hb));
      return ""
    }
    const Au = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      lu = fb.m.inputHandler.of(((bb, ub, hb, Bb, Ob) => {
        if ((Au ? bb.composing : bb.compositionStarted) || bb.state.readOnly || ub != hb || ">" != Bb && "/" != Bb || !Lu.isActiveAt(bb.state, ub, -1)) return !1;
        let Gb = Ob(),
          {
            state: Ub
          } = Gb,
          Lb = Ub.changeByRange((bb => {
            var ub;
            let hb, {
                head: Ob
              } = bb,
              Gb = (0, Vb.hb)(Ub).resolveInner(Ob - 1, -1);
            if ("JSXStartTag" == Gb.name && (Gb = Gb.parent), Ub.doc.sliceString(Ob - 1, Ob) != Bb || "JSXAttributeValue" == Gb.name && Gb.to > Ob);
            else {
              if (">" == Bb && "JSXFragmentTag" == Gb.name) return {
                range: bb,
                changes: {
                  from: Ob,
                  insert: "</>"
                }
              };
              if ("/" == Bb && "JSXStartCloseTag" == Gb.name) {
                let bb = Gb.parent,
                  Bb = bb.parent;
                if (Bb && bb.from == Ob - 2 && ((hb = ou(Ub.doc, Bb.firstChild, Ob)) || "JSXFragmentTag" == (null === (ub = Bb.firstChild) || void 0 === ub ? void 0 : ub.name))) {
                  let bb = `${hb}>`;
                  return {
                    range: Fb.j.cursor(Ob + bb.length, -1),
                    changes: {
                      from: Ob,
                      insert: bb
                    }
                  }
                }
              } else if (">" == Bb) {
                let ub = function(bb) {
                  for (;;) {
                    if ("JSXOpenTag" == bb.name || "JSXSelfClosingTag" == bb.name || "JSXFragmentTag" == bb.name) return bb;
                    if ("JSXEscape" == bb.name || !bb.parent) return null;
                    bb = bb.parent
                  }
                }(Gb);
                if (ub && "JSXOpenTag" == ub.name && !/^\/?>|^<\//.test(Ub.doc.sliceString(Ob, Ob + 2)) && (hb = ou(Ub.doc, ub, Ob))) return {
                  range: bb,
                  changes: {
                    from: Ob,
                    insert: `</${hb}>`
                  }
                }
              }
            }
            return {
              range: bb
            }
          }));
        return !Lb.changes.empty && (bb.dispatch([Gb, Ub.update(Lb, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  40788: (bb, ub, hb) => {
    hb.d(ub, {
      A: () => Su,
      D: () => kb,
      F: () => Ab,
      I: () => ib,
      L: () => tb,
      N: () => eb,
      R: () => Fb,
      V: () => vb,
      X: () => gb,
      _: () => qu,
      c: () => Wu,
      cb: () => Hb,
      db: () => ju,
      e: () => Jb,
      eb: () => ob,
      f: () => Xb,
      h: () => xb,
      hb: () => pb,
      j: () => Mu,
      n: () => yb,
      q: () => xu,
      u: () => ab,
      v: () => Pb,
      w: () => Eb,
      x: () => lu,
      z: () => Tb
    });
    var Bb, Ob = hb(40795),
      Gb = hb(40769),
      Ub = hb(40773),
      Lb = hb(40803),
      Yb = hb(40776);
    const Sb = new Ob.g;

    function ab(bb) {
      return Gb.n.define({
        combine: bb ? ub => ub.concat(bb) : void 0
      })
    }
    const Hb = new Ob.g;
    class wb {
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = bb, this.name = Bb, Gb.k.prototype.hasOwnProperty("tree") || Object.defineProperty(Gb.k.prototype, "tree", {
          get() {
            return pb(this)
          }
        }), this.parser = ub, this.extension = [Db.of(this), Gb.k.languageData.of(((bb, ub, hb) => {
          let Bb = Zb(bb, ub, hb),
            Ob = Bb.type.prop(Sb);
          if (!Ob) return [];
          let Gb = bb.facet(Ob),
            Ub = Bb.type.prop(Hb);
          if (Ub) {
            let Ob = Bb.resolve(ub - Bb.from, hb);
            for (let ub of Ub)
              if (ub.test(Ob, bb)) {
                let hb = bb.facet(ub.facet);
                return "replace" == ub.type ? hb : hb.concat(Gb)
              }
          }
          return Gb
        }))].concat(hb)
      }
      isActiveAt(bb, ub) {
        return Zb(bb, ub, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(Sb) == this.data
      }
      findRegions(bb) {
        let ub = bb.facet(Db);
        if ((null === ub || void 0 === ub ? void 0 : ub.data) == this.data) return [{
          from: 0,
          to: bb.doc.length
        }];
        if (!ub || !ub.allowsNesting) return [];
        let hb = [],
          Bb = (bb, ub) => {
            if (bb.prop(Sb) == this.data) return void hb.push({
              from: ub,
              to: ub + bb.length
            });
            let Gb = bb.prop(Ob.g.mounted);
            if (Gb) {
              if (Gb.tree.prop(Sb) == this.data) {
                if (Gb.overlay)
                  for (let bb of Gb.overlay) hb.push({
                    from: bb.from + ub,
                    to: bb.to + ub
                  });
                else hb.push({
                  from: ub,
                  to: ub + bb.length
                });
                return
              }
              if (Gb.overlay) {
                let bb = hb.length;
                if (Bb(Gb.tree, Gb.overlay[0].from + ub), hb.length > bb) return
              }
            }
            for (let hb = 0; hb < bb.children.length; hb++) {
              let Gb = bb.children[hb];
              Gb instanceof Ob.w && Bb(Gb, bb.positions[hb] + ub)
            }
          };
        return Bb(pb(bb), 0), hb
      }
      get allowsNesting() {
        return !0
      }
    }

    function Zb(bb, ub, hb) {
      let Bb = bb.facet(Db),
        Gb = pb(bb).topNode;
      if (!Bb || Bb.allowsNesting)
        for (let Ub = Gb; Ub; Ub = Ub.enter(ub, hb, Ob.d.ExcludeBuffers | Ob.d.EnterBracketed)) Ub.type.isTop && (Gb = Ub);
      return Gb
    }
    wb.setState = Gb.D.define();
    class Xb extends wb {
      constructor(bb, ub, hb) {
        super(bb, ub, [], hb), this.parser = ub
      }
      static define(bb) {
        let ub = ab(bb.languageData);
        return new Xb(ub, bb.parser.configure({
          props: [Sb.add((bb => bb.isTop ? ub : void 0))]
        }), bb.name)
      }
      configure(bb, ub) {
        return new Xb(this.data, this.parser.configure(bb), ub || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function pb(bb) {
      let ub = bb.field(wb.state, !1);
      return ub ? ub.tree : Ob.w.empty
    }

    function ob(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb.doc.length;
      var hb;
      return (null === (hb = bb.field(wb.state, !1)) || void 0 === hb ? void 0 : hb.context.isDone(ub)) || !1
    }

    function Ab(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb.viewport.to,
        hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        Bb = function(bb, ub) {
          let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var Bb;
          let Ob = null === (Bb = bb.field(wb.state, !1)) || void 0 === Bb ? void 0 : Bb.context;
          if (!Ob) return null;
          let Gb = Ob.viewport;
          Ob.updateViewport({
            from: 0,
            to: ub
          });
          let Ub = Ob.isDone(ub) || Ob.work(hb, ub) ? Ob.tree : null;
          return Ob.updateViewport(Gb), Ub
        }(bb.state, ub, hb);
      return Bb != pb(bb.state) && bb.dispatch({}), !!Bb
    }
    class lb {
      constructor(bb) {
        this.doc = bb, this.cursorPos = 0, this.string = "", this.cursor = bb.iter()
      }
      get length() {
        return this.doc.length
      }
      syncTo(bb) {
        return this.string = this.cursor.next(bb - this.cursorPos).value, this.cursorPos = bb + this.string.length, this.cursorPos - this.string.length
      }
      chunk(bb) {
        return this.syncTo(bb), this.string
      }
      get lineChunks() {
        return !0
      }
      read(bb, ub) {
        let hb = this.cursorPos - this.string.length;
        return bb < hb || ub >= this.cursorPos ? this.doc.sliceString(bb, ub) : this.string.slice(bb - hb, ub - hb)
      }
    }
    let Kb = null;
    class Wb {
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          Bb = arguments.length > 3 ? arguments[3] : void 0,
          Ob = arguments.length > 4 ? arguments[4] : void 0,
          Gb = arguments.length > 5 ? arguments[5] : void 0,
          Ub = arguments.length > 6 ? arguments[6] : void 0,
          Lb = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = bb, this.state = ub, this.fragments = hb, this.tree = Bb, this.treeLen = Ob, this.viewport = Gb, this.skipped = Ub, this.scheduleOn = Lb, this.parse = null, this.tempSkipped = []
      }
      static create(bb, ub, hb) {
        return new Wb(bb, ub, [], Ob.w.empty, 0, hb, [], null)
      }
      startParse() {
        return this.parser.startParse(new lb(this.state.doc), this.fragments)
      }
      work(bb, ub) {
        return null != ub && ub >= this.state.doc.length && (ub = void 0), this.tree != Ob.w.empty && this.isDone(null !== ub && void 0 !== ub ? ub : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var hb;
          if ("number" == typeof bb) {
            let ub = Date.now() + bb;
            bb = () => Date.now() > ub
          }
          for (this.parse || (this.parse = this.startParse()), null != ub && (null == this.parse.stoppedAt || this.parse.stoppedAt > ub) && ub < this.state.doc.length && this.parse.stopAt(ub);;) {
            let Bb = this.parse.advance();
            if (Bb) {
              if (this.fragments = this.withoutTempSkipped(Ob.v.addTree(Bb, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (hb = this.parse.stoppedAt) && void 0 !== hb ? hb : this.state.doc.length, this.tree = Bb, this.parse = null, !(this.treeLen < (null !== ub && void 0 !== ub ? ub : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (bb()) return !1
          }
        }))
      }
      takeTree() {
        let bb, ub;
        this.parse && (bb = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > bb) && this.parse.stopAt(bb), this.withContext((() => {
          for (; !(ub = this.parse.advance()););
        })), this.treeLen = bb, this.tree = ub, this.fragments = this.withoutTempSkipped(Ob.v.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(bb) {
        let ub = Kb;
        Kb = this;
        try {
          return bb()
        } finally {
          Kb = ub
        }
      }
      withoutTempSkipped(bb) {
        for (let ub; ub = this.tempSkipped.pop();) bb = Cb(bb, ub.from, ub.to);
        return bb
      }
      changes(bb, ub) {
        let {
          fragments: hb,
          tree: Bb,
          treeLen: Gb,
          viewport: Ub,
          skipped: Lb
        } = this;
        if (this.takeTree(), !bb.empty) {
          let ub = [];
          if (bb.iterChangedRanges(((bb, hb, Bb, Ob) => ub.push({
              fromA: bb,
              toA: hb,
              fromB: Bb,
              toB: Ob
            }))), hb = Ob.v.applyChanges(hb, ub), Bb = Ob.w.empty, Gb = 0, Ub = {
              from: bb.mapPos(Ub.from, -1),
              to: bb.mapPos(Ub.to, 1)
            }, this.skipped.length) {
            Lb = [];
            for (let ub of this.skipped) {
              let hb = bb.mapPos(ub.from, 1),
                Bb = bb.mapPos(ub.to, -1);
              hb < Bb && Lb.push({
                from: hb,
                to: Bb
              })
            }
          }
        }
        return new Wb(this.parser, ub, hb, Bb, Gb, Ub, Lb, this.scheduleOn)
      }
      updateViewport(bb) {
        if (this.viewport.from == bb.from && this.viewport.to == bb.to) return !1;
        this.viewport = bb;
        let ub = this.skipped.length;
        for (let hb = 0; hb < this.skipped.length; hb++) {
          let {
            from: ub,
            to: Bb
          } = this.skipped[hb];
          ub < bb.to && Bb > bb.from && (this.fragments = Cb(this.fragments, ub, Bb), this.skipped.splice(hb--, 1))
        }
        return !(this.skipped.length >= ub) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(bb, ub) {
        this.skipped.push({
          from: bb,
          to: ub
        })
      }
      static getSkippingParser(bb) {
        return new class extends Ob.u {
          createParse(ub, hb, Bb) {
            let Gb = Bb[0].from,
              Ub = Bb[Bb.length - 1].to;
            return {
              parsedPos: Gb,
              advance() {
                let ub = Kb;
                if (ub) {
                  for (let bb of Bb) ub.tempSkipped.push(bb);
                  bb && (ub.scheduleOn = ub.scheduleOn ? Promise.all([ub.scheduleOn, bb]) : bb)
                }
                return this.parsedPos = Ub, new Ob.w(Ob.m.none, [], [], Ub - Gb)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(bb) {
        bb = Math.min(bb, this.state.doc.length);
        let ub = this.fragments;
        return this.treeLen >= bb && ub.length && 0 == ub[0].from && ub[0].to >= bb
      }
      static get() {
        return Kb
      }
    }

    function Cb(bb, ub, hb) {
      return Ob.v.applyChanges(bb, [{
        fromA: ub,
        toA: hb,
        fromB: ub,
        toB: hb
      }])
    }
    class db {
      constructor(bb) {
        this.context = bb, this.tree = bb.tree
      }
      apply(bb) {
        if (!bb.docChanged && this.tree == this.context.tree) return this;
        let ub = this.context.changes(bb.changes, bb.state),
          hb = this.context.treeLen == bb.startState.doc.length ? void 0 : Math.max(bb.changes.mapPos(this.context.treeLen), ub.viewport.to);
        return ub.work(20, hb) || ub.takeTree(), new db(ub)
      }
      static init(bb) {
        let ub = Math.min(3e3, bb.doc.length),
          hb = Wb.create(bb.facet(Db).parser, bb, {
            from: 0,
            to: ub
          });
        return hb.work(20, ub) || hb.takeTree(), new db(hb)
      }
    }
    wb.state = Gb.G.define({
      create: db.init,
      update(bb, ub) {
        for (let hb of ub.effects)
          if (hb.is(wb.setState)) return hb.value;
        return ub.startState.facet(Db) != ub.state.facet(Db) ? db.init(ub.state) : bb.apply(ub)
      }
    });
    let rb = bb => {
      let ub = setTimeout((() => bb()), 500);
      return () => clearTimeout(ub)
    };
    "undefined" != typeof requestIdleCallback && (rb = bb => {
      let ub = -1,
        hb = setTimeout((() => {
          ub = requestIdleCallback(bb, {
            timeout: 400
          })
        }), 100);
      return () => ub < 0 ? clearTimeout(hb) : cancelIdleCallback(ub)
    });
    const jb = "undefined" != typeof navigator && (null === (Bb = navigator.scheduling) || void 0 === Bb ? void 0 : Bb.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      nb = Ub.q.fromClass(class {
        constructor(bb) {
          this.view = bb, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(bb) {
          let ub = this.view.state.field(wb.state).context;
          (ub.updateViewport(bb.view.viewport) || this.view.viewport.to > ub.treeLen) && this.scheduleWork(), (bb.docChanged || bb.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(ub)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: bb
          } = this.view, ub = bb.field(wb.state);
          ub.tree == ub.context.tree && ub.context.isDone(bb.doc.length) || (this.working = rb(this.work))
        }
        work(bb) {
          this.working = null;
          let ub = Date.now();
          if (this.chunkEnd < ub && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = ub + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: hb,
            viewport: {
              to: Bb
            }
          } = this.view, Ob = hb.field(wb.state);
          if (Ob.tree == Ob.context.tree && Ob.context.isDone(Bb + 1e5)) return;
          let Gb = Date.now() + Math.min(this.chunkBudget, 100, bb && !jb ? Math.max(25, bb.timeRemaining() - 5) : 1e9),
            Ub = Ob.context.treeLen < Bb && hb.doc.length > Bb + 1e3,
            Lb = Ob.context.work((() => jb && jb() || Date.now() > Gb), Bb + (Ub ? 0 : 1e5));
          this.chunkBudget -= Date.now() - ub, (Lb || this.chunkBudget <= 0) && (Ob.context.takeTree(), this.view.dispatch({
            effects: wb.setState.of(new db(Ob.context))
          })), this.chunkBudget > 0 && (!Lb || Ub) && this.scheduleWork(), this.checkAsyncSchedule(Ob.context)
        }
        checkAsyncSchedule(bb) {
          bb.scheduleOn && (this.workScheduled++, bb.scheduleOn.then((() => this.scheduleWork())).catch((bb => (0, Ub.Z)(this.view.state, bb))).then((() => this.workScheduled--)), bb.scheduleOn = null)
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
      Db = Gb.n.define({
        combine: bb => bb.length ? bb[0] : null,
        enables: bb => [wb.state, nb, Ub.m.contentAttributes.compute([bb], (ub => {
          let hb = ub.facet(bb);
          return hb && hb.name ? {
            "data-language": hb.name
          } : {}
        }))]
      });
    class xb {
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = bb, this.support = ub, this.extension = [bb, ub]
      }
    }
    const zb = Gb.n.define(),
      gb = Gb.n.define({
        combine: bb => {
          if (!bb.length) return "  ";
          let ub = bb[0];
          if (!ub || /\S/.test(ub) || Array.from(ub).some((bb => bb != ub[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(bb[0]));
          return ub
        }
      });

    function ib(bb) {
      let ub = bb.facet(gb);
      return 9 == ub.charCodeAt(0) ? bb.tabSize * ub.length : ub.length
    }

    function vb(bb, ub) {
      let hb = "",
        Bb = bb.tabSize,
        Ob = bb.facet(gb)[0];
      if ("\t" == Ob) {
        for (; ub >= Bb;) hb += "\t", ub -= Bb;
        Ob = " "
      }
      for (let Gb = 0; Gb < ub; Gb++) hb += Ob;
      return hb
    }

    function tb(bb, ub) {
      bb instanceof Gb.k && (bb = new Jb(bb));
      for (let Bb of bb.state.facet(zb)) {
        let hb = Bb(bb, ub);
        if (void 0 !== hb) return hb
      }
      let hb = pb(bb.state);
      return hb.length >= ub ? function(bb, ub, hb) {
        let Bb = ub.resolveStack(hb),
          Ob = ub.resolveInner(hb, -1).resolve(hb, 0).enterUnfinishedNodesBefore(hb);
        if (Ob != Bb.node) {
          let bb = [];
          for (let ub = Ob; ub && !(ub.from < Bb.node.from || ub.to > Bb.node.to || ub.from == Bb.node.from && ub.type == Bb.node.type); ub = ub.parent) bb.push(ub);
          for (let ub = bb.length - 1; ub >= 0; ub--) Bb = {
            node: bb[ub],
            next: Bb
          }
        }
        return Nb(Bb, bb, hb)
      }(bb, hb, ub) : null
    }
    class Jb {
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = bb, this.options = ub, this.unit = ib(bb)
      }
      lineAt(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          hb = this.state.doc.lineAt(bb),
          {
            simulateBreak: Bb,
            simulateDoubleBreak: Ob
          } = this.options;
        return null != Bb && Bb >= hb.from && Bb <= hb.to ? Ob && Bb == bb ? {
          text: "",
          from: bb
        } : (ub < 0 ? Bb < bb : Bb <= bb) ? {
          text: hb.text.slice(Bb - hb.from),
          from: Bb
        } : {
          text: hb.text.slice(0, Bb - hb.from),
          from: hb.from
        } : hb
      }
      textAfterPos(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && bb == this.options.simulateBreak) return "";
        let {
          text: hb,
          from: Bb
        } = this.lineAt(bb, ub);
        return hb.slice(bb - Bb, Math.min(hb.length, bb + 100 - Bb))
      }
      column(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: hb,
            from: Bb
          } = this.lineAt(bb, ub),
          Ob = this.countColumn(hb, bb - Bb),
          Gb = this.options.overrideIndentation ? this.options.overrideIndentation(Bb) : -1;
        return Gb > -1 && (Ob += Gb - this.countColumn(hb, hb.search(/\S|$/))), Ob
      }
      countColumn(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb.length;
        return (0, Gb.X)(bb, this.state.tabSize, ub)
      }
      lineIndent(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: hb,
            from: Bb
          } = this.lineAt(bb, ub),
          Ob = this.options.overrideIndentation;
        if (Ob) {
          let bb = Ob(Bb);
          if (bb > -1) return bb
        }
        return this.countColumn(hb, hb.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const eb = new Ob.g;

    function Nb(bb, ub, hb) {
      for (let Bb = bb; Bb; Bb = Bb.next) {
        let bb = sb(Bb.node);
        if (bb) return bb(mb.create(ub, hb, Bb))
      }
      return 0
    }

    function sb(bb) {
      let ub = bb.type.prop(eb);
      if (ub) return ub;
      let hb, Bb = bb.firstChild;
      if (Bb && (hb = Bb.type.prop(Ob.g.closedBy))) {
        let ub = bb.lastChild,
          Bb = ub && hb.indexOf(ub.name) > -1;
        return bb => qb(bb, !0, 1, void 0, Bb && ! function(bb) {
          return bb.pos == bb.options.simulateBreak && bb.options.simulateDoubleBreak
        }(bb) ? ub.from : void 0)
      }
      return null == bb.parent ? Mb : null
    }

    function Mb() {
      return 0
    }
    class mb extends Jb {
      constructor(bb, ub, hb) {
        super(bb.state, bb.options), this.base = bb, this.pos = ub, this.context = hb
      }
      get node() {
        return this.context.node
      }
      static create(bb, ub, hb) {
        return new mb(bb, ub, hb)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(bb) {
        let ub = this.state.doc.lineAt(bb.from);
        for (;;) {
          let hb = bb.resolve(ub.from);
          for (; hb.parent && hb.parent.from == hb.from;) hb = hb.parent;
          if (Ib(hb, bb)) break;
          ub = this.state.doc.lineAt(hb.from)
        }
        return this.lineIndent(ub.from)
      }
      continue () {
        return Nb(this.context.next, this.base, this.pos)
      }
    }

    function Ib(bb, ub) {
      for (let hb = ub; hb; hb = hb.parent)
        if (bb == hb) return !0;
      return !1
    }

    function Pb(bb) {
      let {
        closing: ub,
        align: hb = !0,
        units: Bb = 1
      } = bb;
      return bb => qb(bb, hb, Bb, ub)
    }

    function qb(bb, ub, hb, Bb, Ob) {
      let Gb = bb.textAfter,
        Ub = Gb.match(/^\s*/)[0].length,
        Lb = Bb && Gb.slice(Ub, Ub + Bb.length) == Bb || Ob == bb.pos + Ub,
        Yb = ub ? function(bb) {
          let ub = bb.node,
            hb = ub.childAfter(ub.from),
            Bb = ub.lastChild;
          if (!hb) return null;
          let Ob = bb.options.simulateBreak,
            Gb = bb.state.doc.lineAt(hb.from),
            Ub = null == Ob || Ob <= Gb.from ? Gb.to : Math.min(Gb.to, Ob);
          for (let Lb = hb.to;;) {
            let bb = ub.childAfter(Lb);
            if (!bb || bb == Bb) return null;
            if (!bb.type.isSkipped) {
              if (bb.from >= Ub) return null;
              let ub = /^ */.exec(Gb.text.slice(hb.to - Gb.from))[0].length;
              return {
                from: hb.from,
                to: hb.to + ub
              }
            }
            Lb = bb.to
          }
        }(bb) : null;
      return Yb ? Lb ? bb.column(Yb.from) : bb.column(Yb.to) : bb.baseIndent + (Lb ? 0 : bb.unit * hb)
    }
    const Eb = bb => bb.baseIndent;

    function yb() {
      let {
        except: bb,
        units: ub = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return hb => {
        let Bb = bb && bb.test(hb.textAfter);
        return hb.baseIndent + (Bb ? 0 : ub * hb.unit)
      }
    }
    const Vb = 200;

    function Fb() {
      return Gb.k.transactionFilter.of((bb => {
        if (!bb.docChanged || !bb.isUserEvent("input.type") && !bb.isUserEvent("input.complete")) return bb;
        let ub = bb.startState.languageDataAt("indentOnInput", bb.startState.selection.main.head);
        if (!ub.length) return bb;
        let hb = bb.newDoc,
          {
            head: Bb
          } = bb.newSelection.main,
          Ob = hb.lineAt(Bb);
        if (Bb > Ob.from + Vb) return bb;
        let Gb = hb.sliceString(Ob.from, Bb);
        if (!ub.some((bb => bb.test(Gb)))) return bb;
        let {
          state: Ub
        } = bb, Lb = -1, Yb = [];
        for (let {
            head: Sb
          }
          of Ub.selection.tp) {
          let bb = Ub.doc.lineAt(Sb);
          if (bb.from == Lb) continue;
          Lb = bb.from;
          let ub = tb(Ub, bb.from);
          if (null == ub) continue;
          let hb = /^\s*/.exec(bb.text)[0],
            Bb = vb(Ub, ub);
          hb != Bb && Yb.push({
            from: bb.from,
            to: bb.from + hb.length,
            insert: Bb
          })
        }
        return Yb.length ? [bb, {
          changes: Yb,
          sequential: !0
        }] : bb
      }))
    }
    const fb = Gb.n.define(),
      kb = new Ob.g;

    function Tb(bb) {
      let ub = bb.firstChild,
        hb = bb.lastChild;
      return ub && ub.to < hb.from ? {
        from: ub.to,
        to: hb.type.isError ? bb.to : hb.from
      } : null
    }

    function cb(bb) {
      let ub = bb.lastChild;
      return ub && ub.to == bb.to && ub.type.isError
    }

    function Qb(bb, ub, hb) {
      for (let Bb of bb.facet(fb)) {
        let Ob = Bb(bb, ub, hb);
        if (Ob) return Ob
      }
      return function(bb, ub, hb) {
        let Bb = pb(bb);
        if (Bb.length < hb) return null;
        let Ob = null;
        for (let Gb = Bb.resolveStack(hb, 1); Gb; Gb = Gb.next) {
          let Ub = Gb.node;
          if (Ub.to <= hb || Ub.from > hb) continue;
          if (Ob && Ub.from < ub) break;
          let Lb = Ub.type.prop(kb);
          if (Lb && (Ub.to < Bb.length - 50 || Bb.length == bb.doc.length || !cb(Ub))) {
            let Bb = Lb(Ub, bb);
            Bb && Bb.from <= hb && Bb.from >= ub && Bb.to > hb && (Ob = Bb)
          }
        }
        return Ob
      }(bb, ub, hb)
    }

    function Rb(bb, ub) {
      let hb = ub.mapPos(bb.from, 1),
        Bb = ub.mapPos(bb.to, -1);
      return hb >= Bb ? void 0 : {
        from: hb,
        to: Bb
      }
    }
    const bu = Gb.D.define({
        map: Rb
      }),
      uu = Gb.D.define({
        map: Rb
      });

    function hu(bb) {
      let ub = [];
      for (let {
          head: hb
        }
        of bb.state.selection.tp) ub.some((bb => bb.from <= hb && bb.to >= hb)) || ub.push(bb.lineBlockAt(hb));
      return ub
    }
    const Bu = Gb.G.define({
      create: () => Ub.e.none,
      update(bb, ub) {
        ub.isUserEvent("delete") && ub.changes.iterChangedRanges(((ub, hb) => bb = Ou(bb, ub, hb))), bb = bb.map(ub.changes);
        for (let hb of ub.effects)
          if (hb.is(bu) && !Uu(bb, hb.value.from, hb.value.to)) {
            let {
              preparePlaceholder: Bb
            } = ub.state.facet(Hu), Ob = Bb ? Ub.e.replace({
              widget: new pu(Bb(ub.state, hb.value))
            }) : Xu;
            bb = bb.update({
              add: [Ob.range(hb.value.from, hb.value.to)]
            })
          } else hb.is(uu) && (bb = bb.update({
            filter: (bb, ub) => hb.value.from != bb || hb.value.to != ub,
            filterFrom: hb.value.from,
            filterTo: hb.value.to
          }));
        return ub.selection && (bb = Ou(bb, ub.selection.main.head)), bb
      },
      provide: bb => Ub.m.ZG.from(bb),
      toJSON(bb, ub) {
        let hb = [];
        return bb.between(0, ub.doc.length, ((bb, ub) => {
          hb.push(bb, ub)
        })), hb
      },
      fromJSON(bb) {
        if (!Array.isArray(bb) || bb.length % 2) throw new RangeError("Invalid JSON for fold state");
        let ub = [];
        for (let hb = 0; hb < bb.length;) {
          let Bb = bb[hb++],
            Ob = bb[hb++];
          if ("number" != typeof Bb || "number" != typeof Ob) throw new RangeError("Invalid JSON for fold state");
          ub.push(Xu.range(Bb, Ob))
        }
        return Ub.e.set(ub, !0)
      }
    });

    function Ou(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ub,
        Bb = !1;
      return bb.between(ub, hb, ((bb, Ob) => {
        bb < hb && Ob > ub && (Bb = !0)
      })), Bb ? bb.update({
        filterFrom: ub,
        filterTo: hb,
        filter: (bb, Bb) => bb >= hb || Bb <= ub
      }) : bb
    }

    function Gu(bb, ub, hb) {
      var Bb;
      let Ob = null;
      return null === (Bb = bb.field(Bu, !1)) || void 0 === Bb || Bb.between(ub, hb, ((bb, ub) => {
        (!Ob || Ob.from > bb) && (Ob = {
          from: bb,
          to: ub
        })
      })), Ob
    }

    function Uu(bb, ub, hb) {
      let Bb = !1;
      return bb.between(ub, ub, ((bb, Ob) => {
        bb == ub && Ob == hb && (Bb = !0)
      })), Bb
    }

    function Lu(bb, ub) {
      return bb.field(Bu, !1) ? ub : ub.concat(Gb.D.appendConfig.of(wu()))
    }

    function Yu(bb, ub) {
      let hb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        Bb = bb.state.doc.lineAt(ub.from).number,
        Ob = bb.state.doc.lineAt(ub.to).number;
      return Ub.m.announce.of(`${bb.state.phrase(hb?"Folded lines":"Unfolded lines")} ${Bb} ${bb.state.phrase("to")} ${Ob}.`)
    }
    const Su = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: bb => {
          for (let ub of hu(bb)) {
            let hb = Qb(bb.state, ub.from, ub.to);
            if (hb) return bb.dispatch({
              effects: Lu(bb.state, [bu.of(hb), Yu(bb, hb)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: bb => {
          if (!bb.state.field(Bu, !1)) return !1;
          let ub = [];
          for (let hb of hu(bb)) {
            let Bb = Gu(bb.state, hb.from, hb.to);
            Bb && ub.push(uu.of(Bb), Yu(bb, Bb, !1))
          }
          return ub.length && bb.dispatch({
            effects: ub
          }), ub.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: bb => {
          let {
            state: ub
          } = bb, hb = [];
          for (let Bb = 0; Bb < ub.doc.length;) {
            let Ob = bb.lineBlockAt(Bb),
              Gb = Qb(ub, Ob.from, Ob.to);
            Gb && hb.push(bu.of(Gb)), Bb = (Gb ? bb.lineBlockAt(Gb.to) : Ob).to + 1
          }
          return hb.length && bb.dispatch({
            effects: Lu(bb.state, hb)
          }), !!hb.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: bb => {
          let ub = bb.state.field(Bu, !1);
          if (!ub || !ub.size) return !1;
          let hb = [];
          return ub.between(0, bb.state.doc.length, ((bb, ub) => {
            hb.push(uu.of({
              from: bb,
              to: ub
            }))
          })), bb.dispatch({
            effects: hb
          }), !0
        }
      }],
      au = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      Hu = Gb.n.define({
        combine: bb => (0, Gb.V)(bb, au)
      });

    function wu(bb) {
      let ub = [Bu, Ku];
      return bb && ub.push(Hu.of(bb)), ub
    }

    function Zu(bb, ub) {
      let {
        state: hb
      } = bb, Bb = hb.facet(Hu), Ob = ub => {
        let hb = bb.lineBlockAt(bb.posAtDOM(ub.target)),
          Bb = Gu(bb.state, hb.from, hb.to);
        Bb && bb.dispatch({
          effects: uu.of(Bb)
        }), ub.preventDefault()
      };
      if (Bb.placeholderDOM) return Bb.placeholderDOM(bb, Ob, ub);
      let Gb = document.createElement("span");
      return Gb.textContent = Bb.placeholderText, Gb.setAttribute("aria-label", hb.phrase("folded code")), Gb.title = hb.phrase("unfold"), Gb.className = "cm-foldPlaceholder", Gb.onclick = Ob, Gb
    }
    const Xu = Ub.e.replace({
      widget: new class extends Ub.u {
        toDOM(bb) {
          return Zu(bb, null)
        }
      }
    });
    class pu extends Ub.u {
      constructor(bb) {
        super(), this.value = bb
      }
      eq(bb) {
        return this.value == bb.value
      }
      toDOM(bb) {
        return Zu(bb, this.value)
      }
    }
    const ou = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class Au extends Ub.o {
      constructor(bb, ub) {
        super(), this.config = bb, this.open = ub
      }
      eq(bb) {
        return this.config == bb.config && this.open == bb.open
      }
      toDOM(bb) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let ub = document.createElement("span");
        return ub.textContent = this.open ? this.config.openText : this.config.closedText, ub.title = bb.state.phrase(this.open ? "Fold line" : "Unfold line"), ub
      }
    }

    function lu() {
      let bb = {
          ...ou,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        ub = new Au(bb, !0),
        hb = new Au(bb, !1),
        Bb = Ub.q.fromClass(class {
          constructor(bb) {
            this.from = bb.viewport.from, this.markers = this.buildMarkers(bb)
          }
          update(ub) {
            (ub.docChanged || ub.viewportChanged || ub.startState.facet(Db) != ub.state.facet(Db) || ub.startState.field(Bu, !1) != ub.state.field(Bu, !1) || pb(ub.startState) != pb(ub.state) || bb.foldingChanged(ub)) && (this.markers = this.buildMarkers(ub.view))
          }
          buildMarkers(bb) {
            let Bb = new Gb.w;
            for (let Ob of bb.viewportLineBlocks) {
              let Gb = Gu(bb.state, Ob.from, Ob.to) ? hb : Qb(bb.state, Ob.from, Ob.to) ? ub : null;
              Gb && Bb.add(Ob.from, Ob.from, Gb)
            }
            return Bb.finish()
          }
        }),
        {
          domEventHandlers: Ob
        } = bb;
      return [Bb, (0, Ub.J)({
        class: "cm-foldGutter",
        markers(bb) {
          var ub;
          return (null === (ub = bb.plugin(Bb)) || void 0 === ub ? void 0 : ub.markers) || Gb.x.empty
        },
        initialSpacer: () => new Au(bb, !1),
        domEventHandlers: {
          ...Ob,
          click: (bb, ub, hb) => {
            if (Ob.click && Ob.click(bb, ub, hb)) return !0;
            let Bb = Gu(bb.state, ub.from, ub.to);
            if (Bb) return bb.dispatch({
              effects: uu.of(Bb)
            }), !0;
            let Gb = Qb(bb.state, ub.from, ub.to);
            return !!Gb && (bb.dispatch({
              effects: bu.of(Gb)
            }), !0)
          }
        }
      }), wu()]
    }
    const Ku = Ub.m.baseTheme({
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
    class Wu {
      constructor(bb, ub) {
        let hb;

        function Bb(bb) {
          let ub = Yb.e.newName();
          return (hb || (hb = Object.create(null)))["." + ub] = bb, ub
        }
        this.specs = bb;
        const Ob = "string" == typeof ub.all ? ub.all : ub.all ? Bb(ub.all) : void 0,
          Gb = ub.scope;
        this.scope = Gb instanceof wb ? bb => bb.prop(Sb) == Gb.data : Gb ? bb => bb == Gb : void 0, this.style = (0, Lb.i)(bb.map((bb => ({
          tag: bb.tag,
          class: bb.class || Bb(Object.assign({}, bb, {
            tag: null
          }))
        }))), {
          all: Ob
        }).style, this.module = hb ? new Yb.e(hb) : null, this.themeType = ub.themeType
      }
      static define(bb, ub) {
        return new Wu(bb, ub || {})
      }
    }
    const Cu = Gb.n.define(),
      du = Gb.n.define({
        combine: bb => bb.length ? [bb[0]] : null
      });

    function ru(bb) {
      let ub = bb.facet(Cu);
      return ub.length ? ub : bb.facet(du)
    }

    function ju(bb, ub) {
      let hb, Bb = [Du];
      return bb instanceof Wu && (bb.module && Bb.push(Ub.m.styleModule.of(bb.module)), hb = bb.themeType), (null === ub || void 0 === ub ? void 0 : ub.fallback) ? Bb.push(du.of(bb)) : hb ? Bb.push(Cu.computeN([Ub.m.darkTheme], (ub => ub.facet(Ub.m.darkTheme) == ("dark" == hb) ? [bb] : []))) : Bb.push(Cu.of(bb)), Bb
    }
    class nu {
      constructor(bb) {
        this.markCache = Object.create(null), this.tree = pb(bb.state), this.ZG = this.buildDeco(bb, ru(bb.state)), this.decoratedTo = bb.viewport.to
      }
      update(bb) {
        let ub = pb(bb.state),
          hb = ru(bb.state),
          Bb = hb != ru(bb.startState),
          {
            viewport: Ob
          } = bb.view,
          Gb = bb.changes.mapPos(this.decoratedTo, 1);
        ub.length < Ob.to && !Bb && ub.type == this.tree.type && Gb >= Ob.to ? (this.ZG = this.ZG.map(bb.changes), this.decoratedTo = Gb) : (ub != this.tree || bb.viewportChanged || Bb) && (this.tree = ub, this.ZG = this.buildDeco(bb.view, hb), this.decoratedTo = Ob.to)
      }
      buildDeco(bb, ub) {
        if (!ub || !this.tree.length) return Ub.e.none;
        let hb = new Gb.w;
        for (let {
            from: Bb,
            to: Ob
          }
          of bb.j_)(0, Lb.c)(this.tree, ub, ((bb, ub, Bb) => {
          hb.add(bb, ub, this.markCache[Bb] || (this.markCache[Bb] = Ub.e.mark({
            class: Bb
          })))
        }), Bb, Ob);
        return hb.finish()
      }
    }
    const Du = Gb.t.high(Ub.q.fromClass(nu, {
        ZG: bb => bb.ZG
      })),
      xu = Wu.define([{
        tag: Lb.k.meta,
        color: "#404740"
      }, {
        tag: Lb.k.link,
        textDecoration: "underline"
      }, {
        tag: Lb.k.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: Lb.k.emphasis,
        fontStyle: "italic"
      }, {
        tag: Lb.k.strong,
        fontWeight: "bold"
      }, {
        tag: Lb.k.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: Lb.k.keyword,
        color: "#708"
      }, {
        tag: [Lb.k.atom, Lb.k.bool, Lb.k.url, Lb.k.contentSeparator, Lb.k.labelName],
        color: "#219"
      }, {
        tag: [Lb.k.literal, Lb.k.inserted],
        color: "#164"
      }, {
        tag: [Lb.k.string, Lb.k.deleted],
        color: "#a11"
      }, {
        tag: [Lb.k.regexp, Lb.k.escape, Lb.k.special(Lb.k.string)],
        color: "#e40"
      }, {
        tag: Lb.k.definition(Lb.k.variableName),
        color: "#00f"
      }, {
        tag: Lb.k.local(Lb.k.variableName),
        color: "#30a"
      }, {
        tag: [Lb.k.typeName, Lb.k.namespace],
        color: "#085"
      }, {
        tag: Lb.k.className,
        color: "#167"
      }, {
        tag: [Lb.k.special(Lb.k.variableName), Lb.k.macroName],
        color: "#256"
      }, {
        tag: Lb.k.definition(Lb.k.propertyName),
        color: "#00c"
      }, {
        tag: Lb.k.comment,
        color: "#940"
      }, {
        tag: Lb.k.invalid,
        color: "#f00"
      }]),
      zu = Ub.m.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      gu = 1e4,
      iu = "()[]{}",
      vu = Gb.n.define({
        combine: bb => (0, Gb.V)(bb, {
          afterCursor: !0,
          brackets: iu,
          maxScanDistance: gu,
          renderMatch: eu
        })
      }),
      tu = Ub.e.mark({
        class: "cm-matchingBracket"
      }),
      Ju = Ub.e.mark({
        class: "cm-nonmatchingBracket"
      });

    function eu(bb) {
      let ub = [],
        hb = bb.matched ? tu : Ju;
      return ub.push(hb.range(bb.start.from, bb.start.to)), bb.end && ub.push(hb.range(bb.end.from, bb.end.to)), ub
    }

    function Nu(bb) {
      let ub = [],
        hb = bb.facet(vu);
      for (let Bb of bb.selection.tp) {
        if (!Bb.empty) continue;
        let Ob = qu(bb, Bb.head, -1, hb) || Bb.head > 0 && qu(bb, Bb.head - 1, 1, hb) || hb.afterCursor && (qu(bb, Bb.head, 1, hb) || Bb.head < bb.doc.length && qu(bb, Bb.head + 1, -1, hb));
        Ob && (ub = ub.concat(hb.renderMatch(Ob, bb)))
      }
      return Ub.e.set(ub, !0)
    }
    const su = [Ub.q.fromClass(class {
      constructor(bb) {
        this.paused = !1, this.ZG = Nu(bb.state)
      }
      update(bb) {
        (bb.docChanged || bb.selectionSet || this.paused) && (bb.view.composing ? (this.ZG = this.ZG.map(bb.changes), this.paused = !0) : (this.ZG = Nu(bb.state), this.paused = !1))
      }
    }, {
      ZG: bb => bb.ZG
    }), zu];

    function Mu() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [vu.of(bb), su]
    }
    const mu = new Ob.g;

    function Iu(bb, ub, hb) {
      let Bb = bb.prop(ub < 0 ? Ob.g.openedBy : Ob.g.closedBy);
      if (Bb) return Bb;
      if (1 == bb.name.length) {
        let Bb = hb.indexOf(bb.name);
        if (Bb > -1 && Bb % 2 == (ub < 0 ? 1 : 0)) return [hb[Bb + ub]]
      }
      return null
    }

    function Pu(bb) {
      let ub = bb.type.prop(mu);
      return ub ? ub(bb.node) : bb
    }

    function qu(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        Ob = Bb.maxScanDistance || gu,
        Gb = Bb.brackets || iu,
        Ub = pb(bb),
        Lb = Ub.resolveInner(ub, hb);
      for (let Yb = Lb; Yb; Yb = Yb.parent) {
        let Bb = Iu(Yb.type, hb, Gb);
        if (Bb && Yb.from < Yb.to) {
          let Ob = Pu(Yb);
          if (Ob && (hb > 0 ? ub >= Ob.from && ub < Ob.to : ub > Ob.from && ub <= Ob.to)) return Eu(bb, ub, hb, Yb, Ob, Bb, Gb)
        }
      }
      return function(bb, ub, hb, Bb, Ob, Gb, Ub) {
        if (hb < 0 ? !ub : ub == bb.doc.length) return null;
        let Lb = hb < 0 ? bb.sliceDoc(ub - 1, ub) : bb.sliceDoc(ub, ub + 1),
          Yb = Ub.indexOf(Lb);
        if (Yb < 0 || Yb % 2 == 0 != hb > 0) return null;
        let Sb = {
            from: hb < 0 ? ub - 1 : ub,
            to: hb > 0 ? ub + 1 : ub
          },
          ab = bb.doc.iterRange(ub, hb > 0 ? bb.doc.length : 0),
          Hb = 0;
        for (let wb = 0; !ab.next().done && wb <= Gb;) {
          let bb = ab.value;
          hb < 0 && (wb += bb.length);
          let Gb = ub + wb * hb;
          for (let ub = hb > 0 ? 0 : bb.length - 1, Lb = hb > 0 ? bb.length : -1; ub != Lb; ub += hb) {
            let Lb = Ub.indexOf(bb[ub]);
            if (!(Lb < 0 || Bb.resolveInner(Gb + ub, 1).type != Ob))
              if (Lb % 2 == 0 == hb > 0) Hb++;
              else {
                if (1 == Hb) return {
                  start: Sb,
                  end: {
                    from: Gb + ub,
                    to: Gb + ub + 1
                  },
                  matched: Lb >> 1 == Yb >> 1
                };
                Hb--
              }
          }
          hb > 0 && (wb += bb.length)
        }
        return ab.done ? {
          start: Sb,
          matched: !1
        } : null
      }(bb, ub, hb, Ub, Lb.type, Ob, Gb)
    }

    function Eu(bb, ub, hb, Bb, Ob, Gb, Ub) {
      let Lb = Bb.parent,
        Yb = {
          from: Ob.from,
          to: Ob.to
        },
        Sb = 0,
        ab = null === Lb || void 0 === Lb ? void 0 : Lb.cursor();
      if (ab && (hb < 0 ? ab.childBefore(Bb.from) : ab.childAfter(Bb.to)))
        do {
          if (hb < 0 ? ab.to <= Bb.from : ab.from >= Bb.to) {
            if (0 == Sb && Gb.indexOf(ab.type.name) > -1 && ab.from < ab.to) {
              let bb = Pu(ab);
              return {
                start: Yb,
                end: bb ? {
                  from: bb.from,
                  to: bb.to
                } : void 0,
                matched: !0
              }
            }
            if (Iu(ab.type, hb, Ub)) Sb++;
            else if (Iu(ab.type, -hb, Ub)) {
              if (0 == Sb) {
                let bb = Pu(ab);
                return {
                  start: Yb,
                  end: bb && bb.from < bb.to ? {
                    from: bb.from,
                    to: bb.to
                  } : void 0,
                  matched: !1
                }
              }
              Sb--
            }
          }
        } while (hb < 0 ? ab.prevSibling() : ab.nextSibling());
      return {
        start: Yb,
        matched: !1
      }
    }
    const yu = Object.create(null),
      Vu = [Ob.m.none],
      Fu = [],
      fu = Object.create(null),
      ku = Object.create(null);
    for (let [Qu, Ru] of [
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
      ]) ku[Qu] = cu(yu, Ru);

    function Tu(bb, ub) {
      Fu.indexOf(bb) > -1 || (Fu.push(bb), console.warn(ub))
    }

    function cu(bb, ub) {
      let hb = [];
      for (let Ob of ub.split(" ")) {
        let ub = [];
        for (let hb of Ob.split(".")) {
          let Bb = bb[hb] || Lb.k[hb];
          Bb ? "function" == typeof Bb ? ub.length ? ub = ub.map(Bb) : Tu(hb, `Modifier ${hb} used at start of tag`) : ub.length ? Tu(hb, `Tag ${hb} used as modifier`) : ub = Array.isArray(Bb) ? Bb : [Bb] : Tu(hb, `Unknown highlighting tag ${hb}`)
        }
        for (let bb of ub) hb.push(bb)
      }
      if (!hb.length) return 0;
      let Bb = ub.replace(/ /g, "_"),
        Gb = Bb + " " + hb.map((bb => bb.id)),
        Ub = fu[Gb];
      if (Ub) return Ub.id;
      let Yb = fu[Gb] = Ob.m.define({
        id: Vu.length,
        name: Bb,
        props: [(0, Lb.e)({
          [Bb]: hb
        })]
      });
      return Vu.push(Yb), Yb.id
    }
    Ub.i.RTL, Ub.i.LTR
  },
  40828: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Kb,
      h: () => rb
    });
    var Bb = hb(40773),
      Ob = hb(40769),
      Gb = hb(40779);
    class Ub {
      constructor(bb, ub, hb) {
        this.from = bb, this.to = ub, this.diagnostic = hb
      }
    }
    class Lb {
      constructor(bb, ub, hb) {
        this.diagnostics = bb, this.panel = ub, this.selected = hb
      }
      static init(bb, ub, hb) {
        let Gb = hb.facet(Cb).markerFilter;
        Gb && (bb = Gb(bb, hb));
        let Ub = bb.slice().sort(((bb, ub) => bb.from - ub.from || bb.to - ub.to)),
          Sb = new Ob.w,
          ab = [],
          Hb = 0,
          wb = hb.doc.iter(),
          Zb = 0,
          Xb = hb.doc.length;
        for (let Ob = 0;;) {
          let bb, ub, hb = Ob == Ub.length ? null : Ub[Ob];
          if (!hb && !ab.length) break;
          if (ab.length) bb = Hb, ub = ab.reduce(((bb, ub) => Math.min(bb, ub.to)), hb && hb.from > bb ? hb.from : 1e8);
          else {
            if (bb = hb.from, bb > Xb) break;
            ub = hb.to, ab.push(hb), Ob++
          }
          for (; Ob < Ub.length;) {
            let hb = Ub[Ob];
            if (hb.from != bb || !(hb.to > hb.from || hb.to == bb)) {
              ub = Math.min(hb.from, ub);
              break
            }
            ab.push(hb), Ob++, ub = Math.min(hb.to, ub)
          }
          ub = Math.min(ub, Xb);
          let Gb = !1;
          if (ab.some((hb => hb.from == bb && (hb.to == ub || ub == Xb))) && (Gb = bb == ub, !Gb && ub - bb < 10)) {
            let hb = bb - (Zb + wb.value.length);
            hb > 0 && (wb.next(hb), Zb = bb);
            for (let Bb = bb;;) {
              if (Bb >= ub) {
                Gb = !0;
                break
              }
              if (!wb.lineBreak && Zb + wb.value.length > Bb) break;
              Bb = Zb + wb.value.length, Zb += wb.value.length, wb.next()
            }
          }
          let Lb = Jb(ab);
          if (Gb) Sb.add(bb, bb, Bb.e.widget({
            widget: new Db(Lb),
            diagnostics: ab.slice()
          }));
          else {
            let hb = ab.reduce(((bb, ub) => ub.markClass ? bb + " " + ub.markClass : bb), "");
            Sb.add(bb, ub, Bb.e.mark({
              class: "cm-lintRange cm-lintRange-" + Lb + hb,
              diagnostics: ab.slice(),
              inclusiveEnd: ab.some((bb => bb.to > ub))
            }))
          }
          if (Hb = ub, Hb == Xb) break;
          for (let Bb = 0; Bb < ab.length; Bb++) ab[Bb].to <= Hb && ab.splice(Bb--, 1)
        }
        let pb = Sb.finish();
        return new Lb(pb, ub, Yb(pb))
      }
    }

    function Yb(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Bb = null;
      return bb.between(hb, 1e9, ((bb, hb, Ob) => {
        let {
          spec: Gb
        } = Ob;
        if (!(ub && Gb.diagnostics.indexOf(ub) < 0))
          if (Bb) {
            if (Gb.diagnostics.indexOf(Bb.diagnostic) < 0) return !1;
            Bb = new Ub(Bb.from, hb, Bb.diagnostic)
          } else Bb = new Ub(bb, hb, ub || Gb.diagnostics[0])
      })), Bb
    }

    function Sb(bb, ub) {
      let hb = ub.pos,
        Bb = ub.end || hb,
        Ob = bb.state.facet(Cb).hideOn(bb, hb, Bb);
      if (null != Ob) return Ob;
      let Gb = bb.startState.doc.lineAt(ub.pos);
      return !(!bb.effects.some((bb => bb.is(Hb))) && !bb.changes.touchesRange(Gb.from, Math.max(Gb.to, Bb)))
    }

    function ab(bb, ub) {
      return bb.field(Xb, !1) ? ub : ub.concat(Ob.D.appendConfig.of(eb))
    }
    const Hb = Ob.D.define(),
      wb = Ob.D.define(),
      Zb = Ob.D.define(),
      Xb = Ob.G.define({
        create: () => new Lb(Bb.e.none, null, null),
        update(bb, ub) {
          if (ub.docChanged && bb.diagnostics.size) {
            let hb = bb.diagnostics.map(ub.changes),
              Bb = null,
              Ob = bb.panel;
            if (bb.selected) {
              let Ob = ub.changes.mapPos(bb.selected.from, 1);
              Bb = Yb(hb, bb.selected.diagnostic, Ob) || Yb(hb, null, Ob)
            }!hb.size && Ob && ub.state.facet(Cb).autoPanel && (Ob = null), bb = new Lb(hb, Ob, Bb)
          }
          for (let hb of ub.effects)
            if (hb.is(Hb)) {
              let Bb = ub.state.facet(Cb).autoPanel ? hb.value.length ? zb.open : null : bb.panel;
              bb = Lb.init(hb.value, Bb, ub.state)
            } else hb.is(wb) ? bb = new Lb(bb.diagnostics, hb.value ? zb.open : null, bb.selected) : hb.is(Zb) && (bb = new Lb(bb.diagnostics, bb.panel, hb.value));
          return bb
        },
        provide: bb => [Bb.gb.from(bb, (bb => bb.panel)), Bb.m.ZG.from(bb, (bb => bb.diagnostics))]
      });
    const pb = Bb.e.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function ob(bb, ub, hb) {
      let Bb, {
          diagnostics: Ob
        } = bb.state.field(Xb),
        Gb = -1,
        Ub = -1;
      Ob.between(ub - (hb < 0 ? 1 : 0), ub + (hb > 0 ? 1 : 0), ((bb, Ob, Lb) => {
        let {
          spec: Yb
        } = Lb;
        if (ub >= bb && ub <= Ob && (bb == Ob || (ub > bb || hb > 0) && (ub < Ob || hb < 0))) return Bb = Yb.diagnostics, Gb = bb, Ub = Ob, !1
      }));
      let Lb = bb.state.facet(Cb).tooltipFilter;
      return Bb && Lb && (Bb = Lb(Bb, bb.state)), Bb ? {
        pos: Gb,
        end: Ub,
        above: bb.state.doc.lineAt(Gb).to < Ub,
        create: () => ({
          dom: Ab(bb, Bb)
        })
      } : null
    }

    function Ab(bb, ub) {
      return (0, Gb.b)("ul", {
        class: "cm-tooltip-lint"
      }, ub.map((ub => nb(bb, ub, !1))))
    }
    const lb = bb => {
        let ub = bb.state.field(Xb, !1);
        return !(!ub || !ub.panel) && (bb.dispatch({
          effects: wb.of(!1)
        }), !0)
      },
      Kb = [{
        key: "Mod-Shift-m",
        run: bb => {
          let ub = bb.state.field(Xb, !1);
          ub && ub.panel || bb.dispatch({
            effects: ab(bb.state, [wb.of(!0)])
          });
          let hb = (0, Bb.F)(bb, zb.open);
          return hb && hb.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: bb => {
          let ub = bb.state.field(Xb, !1);
          if (!ub) return !1;
          let hb = bb.state.selection.main,
            Bb = Yb(ub.diagnostics, null, hb.to + 1);
          return !(!Bb && (Bb = Yb(ub.diagnostics, null, 0), !Bb || Bb.from == hb.from && Bb.to == hb.to)) && (bb.dispatch({
            selection: {
              anchor: Bb.from,
              head: Bb.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      Wb = Bb.q.fromClass(class {
        constructor(bb) {
          this.view = bb, this.timeout = -1, this.set = !0;
          let {
            delay: ub
          } = bb.state.facet(Cb);
          this.lintTime = Date.now() + ub, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, ub)
        }
        run() {
          clearTimeout(this.timeout);
          let bb = Date.now();
          if (bb < this.lintTime - 10) this.timeout = setTimeout(this.run, this.lintTime - bb);
          else {
            this.set = !1;
            let {
              state: bb
            } = this.view, {
              sources: ub
            } = bb.facet(Cb);
            ub.length && function(bb, ub, hb) {
              let Bb = [],
                Ob = -1;
              for (let Gb of bb) Gb.then((hb => {
                Bb.push(hb), clearTimeout(Ob), Bb.length == bb.length ? ub(Bb) : Ob = setTimeout((() => ub(Bb)), 200)
              }), hb)
            }(ub.map((bb => Promise.resolve(bb(this.view)))), (ub => {
              this.view.state.doc == bb.doc && this.view.dispatch(function(bb, ub) {
                return {
                  effects: ab(bb, [Hb.of(ub)])
                }
              }(this.view.state, ub.reduce(((bb, ub) => bb.concat(ub)))))
            }), (bb => {
              (0, Bb.Z)(this.view.state, bb)
            }))
          }
        }
        update(bb) {
          let ub = bb.state.facet(Cb);
          (bb.docChanged || ub != bb.startState.facet(Cb) || ub.needsRefresh && ub.needsRefresh(bb)) && (this.lintTime = Date.now() + ub.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, ub.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const Cb = Ob.n.define({
      combine: bb => ({
        sources: bb.map((bb => bb.source)).filter((bb => null != bb)),
        ...(0, Ob.V)(bb.map((bb => bb.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: db,
          tooltipFilter: db,
          needsRefresh: (bb, ub) => bb ? ub ? hb => bb(hb) || ub(hb) : bb : ub,
          hideOn: (bb, ub) => bb ? ub ? (hb, Bb, Ob) => bb(hb, Bb, Ob) || ub(hb, Bb, Ob) : bb : ub,
          autoPanel: (bb, ub) => bb || ub
        })
      })
    });

    function db(bb, ub) {
      return bb ? ub ? (hb, Bb) => ub(bb(hb, Bb), Bb) : bb : ub
    }

    function rb(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [Cb.of({
        source: bb,
        config: ub
      }), Wb, eb]
    }

    function jb(bb) {
      let ub = [];
      if (bb) bb: for (let {
          name: hb
        }
        of bb) {
        for (let bb = 0; bb < hb.length; bb++) {
          let Bb = hb[bb];
          if (/[a-zA-Z]/.test(Bb) && !ub.some((bb => bb.toLowerCase() == Bb.toLowerCase()))) {
            ub.push(Bb);
            continue bb
          }
        }
        ub.push("")
      }
      return ub
    }

    function nb(bb, ub, hb) {
      var Bb;
      let Ob = hb ? jb(ub.actions) : [];
      return (0, Gb.b)("li", {
        class: "cm-diagnostic cm-diagnostic-" + ub.severity
      }, (0, Gb.b)("span", {
        class: "cm-diagnosticText"
      }, ub.renderMessage ? ub.renderMessage(bb) : ub.message), null === (Bb = ub.actions) || void 0 === Bb ? void 0 : Bb.map(((hb, Bb) => {
        let Ub = !1,
          Lb = Bb => {
            if (Bb.preventDefault(), Ub) return;
            Ub = !0;
            let Ob = Yb(bb.state.field(Xb).diagnostics, ub);
            Ob && hb.apply(bb, Ob.from, Ob.to)
          },
          {
            name: Sb
          } = hb,
          ab = Ob[Bb] ? Sb.indexOf(Ob[Bb]) : -1,
          Hb = ab < 0 ? Sb : [Sb.slice(0, ab), (0, Gb.b)("u", Sb.slice(ab, ab + 1)), Sb.slice(ab + 1)],
          wb = hb.markClass ? " " + hb.markClass : "";
        return (0, Gb.b)("button", {
          type: "button",
          class: "cm-diagnosticAction" + wb,
          onclick: Lb,
          onmousedown: Lb,
          "aria-label": ` Action: ${Sb}${ab<0?"":` (access key "${Ob[Bb]})"`}.`
        }, Hb)
      })), ub.source && (0, Gb.b)("div", {
        class: "cm-diagnosticSource"
      }, ub.source))
    }
    class Db extends Bb.u {
      constructor(bb) {
        super(), this.sev = bb
      }
      eq(bb) {
        return bb.sev == this.sev
      }
      toDOM() {
        return (0, Gb.b)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class xb {
      constructor(bb, ub) {
        this.diagnostic = ub, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = nb(bb, ub, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class zb {
      constructor(bb) {
        this.view = bb, this.items = [];
        this.list = (0, Gb.b)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: ub => {
            if (!(ub.ctrlKey || ub.altKey || ub.metaKey)) {
              if (27 == ub.keyCode) lb(this.view), this.view.focus();
              else if (38 == ub.keyCode || 33 == ub.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == ub.keyCode || 34 == ub.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == ub.keyCode) this.moveSelection(0);
              else if (35 == ub.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == ub.keyCode) this.view.focus();
              else {
                if (!(ub.keyCode >= 65 && ub.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: hb
                  } = this.items[this.selectedIndex], Bb = jb(hb.actions);
                  for (let Ob = 0; Ob < Bb.length; Ob++)
                    if (Bb[Ob].toUpperCase().charCodeAt(0) == ub.keyCode) {
                      let ub = Yb(this.view.state.field(Xb).diagnostics, hb);
                      ub && hb.actions[Ob].apply(bb, ub.from, ub.to)
                    }
                }
              }
              ub.preventDefault()
            }
          },
          onclick: bb => {
            for (let ub = 0; ub < this.items.length; ub++) this.items[ub].dom.contains(bb.target) && this.moveSelection(ub)
          }
        }), this.dom = (0, Gb.b)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, Gb.b)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => lb(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let bb = this.view.state.field(Xb).selected;
        if (!bb) return -1;
        for (let ub = 0; ub < this.items.length; ub++)
          if (this.items[ub].diagnostic == bb.diagnostic) return ub;
        return -1
      }
      update() {
        let {
          diagnostics: bb,
          selected: ub
        } = this.view.state.field(Xb), hb = 0, Bb = !1, Ob = null, Gb = new Set;
        for (bb.between(0, this.view.state.doc.length, ((bb, Ub, Lb) => {
            let {
              spec: Yb
            } = Lb;
            for (let Sb of Yb.diagnostics) {
              if (Gb.has(Sb)) continue;
              Gb.add(Sb);
              let bb, Ub = -1;
              for (let ub = hb; ub < this.items.length; ub++)
                if (this.items[ub].diagnostic == Sb) {
                  Ub = ub;
                  break
                } Ub < 0 ? (bb = new xb(this.view, Sb), this.items.splice(hb, 0, bb), Bb = !0) : (bb = this.items[Ub], Ub > hb && (this.items.splice(hb, Ub - hb), Bb = !0)), ub && bb.diagnostic == ub.diagnostic ? bb.dom.hasAttribute("aria-selected") || (bb.dom.setAttribute("aria-selected", "true"), Ob = bb) : bb.dom.hasAttribute("aria-selected") && bb.dom.removeAttribute("aria-selected"), hb++
            }
          })); hb < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) Bb = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new xb(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), Bb = !0), Ob ? (this.list.setAttribute("aria-activedescendant", Ob.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: Ob.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: bb => {
            let {
              sel: ub,
              panel: hb
            } = bb, Bb = hb.height / this.list.offsetHeight;
            ub.top < hb.top ? this.list.scrollTop -= (hb.top - ub.top) / Bb : ub.bottom > hb.bottom && (this.list.scrollTop += (ub.bottom - hb.bottom) / Bb)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), Bb && this.sync()
      }
      sync() {
        let bb = this.list.firstChild;

        function ub() {
          let ub = bb;
          bb = ub.nextSibling, ub.remove()
        }
        for (let hb of this.items)
          if (hb.dom.parentNode == this.list) {
            for (; bb != hb.dom;) ub();
            bb = hb.dom.nextSibling
          } else this.list.insertBefore(hb.dom, bb);
        for (; bb;) ub()
      }
      moveSelection(bb) {
        if (this.selectedIndex < 0) return;
        let ub = Yb(this.view.state.field(Xb).diagnostics, this.items[bb].diagnostic);
        ub && this.view.dispatch({
          selection: {
            anchor: ub.from,
            head: ub.to
          },
          scrollIntoView: !0,
          effects: Zb.of(ub)
        })
      }
      static open(bb) {
        return new zb(bb)
      }
    }

    function gb(bb) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(bb)}</svg>')`
    }

    function ib(bb) {
      return gb(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${bb}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const vb = Bb.m.baseTheme({
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
        backgroundImage: ib("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: ib("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: ib("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: ib("#66d")
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

    function tb(bb) {
      return "error" == bb ? 4 : "warning" == bb ? 3 : "info" == bb ? 2 : 1
    }

    function Jb(bb) {
      let ub = "hint",
        hb = 1;
      for (let Bb of bb) {
        let bb = tb(Bb.severity);
        bb > hb && (hb = bb, ub = Bb.severity)
      }
      return ub
    }
    Bb.o;
    const eb = [Xb, Bb.m.ZG.compute([Xb], (bb => {
      let {
        selected: ub,
        panel: hb
      } = bb.field(Xb);
      return ub && hb && ub.from != ub.to ? Bb.e.set([pb.range(ub.from, ub.to)]) : Bb.e.none
    })), (0, Bb.S)(ob, {
      hideOn: Sb
    }), vb]
  },
  40821: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Qb,
      f: () => Ab,
      i: () => Rb
    });
    var Bb = hb(40773),
      Ob = hb(40769),
      Gb = hb(40779);
    const Ub = "function" == typeof String.prototype.normalize ? bb => bb.normalize("NFKD") : bb => bb;
    class Lb {
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb.length,
          Ob = arguments.length > 4 ? arguments[4] : void 0,
          Gb = arguments.length > 5 ? arguments[5] : void 0;
        this.test = Gb, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = bb.iterRange(hb, Bb), this.bufferStart = hb, this.normalize = Ob ? bb => Ob(Ub(bb)) : Ub, this.query = this.normalize(ub)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, Ob.Q)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let bb = this.peek();
          if (bb < 0) return this.done = !0, this;
          let ub = (0, Ob.bb)(bb),
            hb = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, Ob.T)(bb);
          let Bb = this.normalize(ub);
          if (Bb.length)
            for (let Ob = 0, Gb = hb;; Ob++) {
              let bb = Bb.charCodeAt(Ob),
                Ub = this.match(bb, Gb, this.bufferPos + this.bufferStart);
              if (Ob == Bb.length - 1) {
                if (Ub) return this.value = Ub, this;
                break
              }
              Gb == hb && Ob < ub.length && ub.charCodeAt(Ob) == bb && Gb++
            }
        }
      }
      match(bb, ub, hb) {
        let Bb = null;
        for (let Ob = 0; Ob < this.matches.length; Ob += 2) {
          let ub = this.matches[Ob],
            Gb = !1;
          this.query.charCodeAt(ub) == bb && (ub == this.query.length - 1 ? Bb = {
            from: this.matches[Ob + 1],
            to: hb
          } : (this.matches[Ob]++, Gb = !0)), Gb || (this.matches.splice(Ob, 2), Ob -= 2)
        }
        return this.query.charCodeAt(0) == bb && (1 == this.query.length ? Bb = {
          from: ub,
          to: hb
        } : this.matches.push(1, ub)), Bb && this.test && !this.test(Bb.from, Bb.to, this.buffer, this.bufferStart) && (Bb = null), Bb
      }
    }
    "undefined" != typeof Symbol && (Lb.prototype[Symbol.iterator] = function() {
      return this
    });
    const Yb = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      Sb = "gm" + (null == /x/.unicode ? "" : "u");
    class ab {
      constructor(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : bb.length;
        if (this.text = bb, this.to = Ob, this.curLine = "", this.done = !1, this.value = Yb, /\\[sWDnr]|\n|\r|\[\^/.test(ub)) return new Zb(bb, ub, hb, Bb, Ob);
        this.re = new RegExp(ub, Sb + ((null === hb || void 0 === hb ? void 0 : hb.ignoreCase) ? "i" : "")), this.test = null === hb || void 0 === hb ? void 0 : hb.test, this.iter = bb.iter();
        let Gb = bb.lineAt(Bb);
        this.curLineStart = Gb.from, this.matchPos = Xb(bb, Bb), this.getLine(this.curLineStart)
      }
      getLine(bb) {
        this.iter.next(bb), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next())
      }
      nextLine() {
        this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0)
      }
      next() {
        for (let bb = this.matchPos - this.curLineStart;;) {
          this.re.lastIndex = bb;
          let ub = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (ub) {
            let hb = this.curLineStart + ub.index,
              Bb = hb + ub[0].length;
            if (this.matchPos = Xb(this.text, Bb + (hb == Bb ? 1 : 0)), hb == this.curLineStart + this.curLine.length && this.nextLine(), (hb < Bb || hb > this.value.to) && (!this.test || this.test(hb, Bb, ub))) return this.value = {
              from: hb,
              to: Bb,
              match: ub
            }, this;
            bb = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), bb = 0
          }
        }
      }
    }
    const Hb = new WeakMap;
    class wb {
      constructor(bb, ub) {
        this.from = bb, this.text = ub
      }
      get to() {
        return this.from + this.text.length
      }
      static get(bb, ub, hb) {
        let Bb = Hb.get(bb);
        if (!Bb || Bb.from >= hb || Bb.to <= ub) {
          let Bb = new wb(ub, bb.sliceString(ub, hb));
          return Hb.set(bb, Bb), Bb
        }
        if (Bb.from == ub && Bb.to == hb) return Bb;
        let {
          text: Ob,
          from: Gb
        } = Bb;
        return Gb > ub && (Ob = bb.sliceString(ub, Gb) + Ob, Gb = ub), Bb.to < hb && (Ob += bb.sliceString(Bb.to, hb)), Hb.set(bb, new wb(Gb, Ob)), new wb(ub, Ob.slice(ub - Gb, hb - Gb))
      }
    }
    class Zb {
      constructor(bb, ub, hb, Bb, Ob) {
        this.text = bb, this.to = Ob, this.done = !1, this.value = Yb, this.matchPos = Xb(bb, Bb), this.re = new RegExp(ub, Sb + ((null === hb || void 0 === hb ? void 0 : hb.ignoreCase) ? "i" : "")), this.test = null === hb || void 0 === hb ? void 0 : hb.test, this.flat = wb.get(bb, Bb, this.chunkEnd(Bb + 5e3))
      }
      chunkEnd(bb) {
        return bb >= this.to ? this.to : this.text.lineAt(bb).to
      }
      next() {
        for (;;) {
          let bb = this.re.lastIndex = this.matchPos - this.flat.from,
            ub = this.re.exec(this.flat.text);
          if (ub && !ub[0] && ub.index == bb && (this.re.lastIndex = bb + 1, ub = this.re.exec(this.flat.text)), ub) {
            let bb = this.flat.from + ub.index,
              hb = bb + ub[0].length;
            if ((this.flat.to >= this.to || ub.index + ub[0].length <= this.flat.text.length - 10) && (!this.test || this.test(bb, hb, ub))) return this.value = {
              from: bb,
              to: hb,
              match: ub
            }, this.matchPos = Xb(this.text, hb + (bb == hb ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = wb.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function Xb(bb, ub) {
      if (ub >= bb.length) return ub;
      let hb, Bb = bb.lineAt(ub);
      for (; ub < Bb.to && (hb = Bb.text.charCodeAt(ub - Bb.from)) >= 56320 && hb < 57344;) ub++;
      return ub
    }
    "undefined" != typeof Symbol && (ab.prototype[Symbol.iterator] = Zb.prototype[Symbol.iterator] = function() {
      return this
    });
    const pb = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      ob = Ob.n.define({
        combine: bb => (0, Ob.V)(bb, pb, {
          highlightWordAroundCursor: (bb, ub) => bb || ub,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function Ab(bb) {
      let ub = [db, Cb];
      return bb && ub.push(ob.of(bb)), ub
    }
    const lb = Bb.e.mark({
        class: "cm-selectionMatch"
      }),
      Kb = Bb.e.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function Wb(bb, ub, hb, Bb) {
      return (0 == hb || bb(ub.sliceDoc(hb - 1, hb)) != Ob.i.Word) && (Bb == ub.doc.length || bb(ub.sliceDoc(Bb, Bb + 1)) != Ob.i.Word)
    }
    const Cb = Bb.q.fromClass(class {
        constructor(bb) {
          this.ZG = this.getDeco(bb)
        }
        update(bb) {
          (bb.selectionSet || bb.docChanged || bb.viewportChanged) && (this.ZG = this.getDeco(bb.view))
        }
        getDeco(bb) {
          let ub = bb.state.facet(ob),
            {
              state: hb
            } = bb,
            Gb = hb.selection;
          if (Gb.tp.length > 1) return Bb.e.none;
          let Ub, Yb = Gb.main,
            Sb = null;
          if (Yb.empty) {
            if (!ub.highlightWordAroundCursor) return Bb.e.none;
            let bb = hb.wordAt(Yb.head);
            if (!bb) return Bb.e.none;
            Sb = hb.charCategorizer(Yb.head), Ub = hb.sliceDoc(bb.from, bb.to)
          } else {
            let bb = Yb.to - Yb.from;
            if (bb < ub.minSelectionLength || bb > 200) return Bb.e.none;
            if (ub.wholeWords) {
              if (Ub = hb.sliceDoc(Yb.from, Yb.to), Sb = hb.charCategorizer(Yb.head), !Wb(Sb, hb, Yb.from, Yb.to) || ! function(bb, ub, hb, Bb) {
                  return bb(ub.sliceDoc(hb, hb + 1)) == Ob.i.Word && bb(ub.sliceDoc(Bb - 1, Bb)) == Ob.i.Word
                }(Sb, hb, Yb.from, Yb.to)) return Bb.e.none
            } else if (Ub = hb.sliceDoc(Yb.from, Yb.to), !Ub) return Bb.e.none
          }
          let ab = [];
          for (let Ob of bb.j_) {
            let bb = new Lb(hb.doc, Ub, Ob.from, Ob.to);
            for (; !bb.next().done;) {
              let {
                from: Ob,
                to: Gb
              } = bb.value;
              if ((!Sb || Wb(Sb, hb, Ob, Gb)) && (Yb.empty && Ob <= Yb.from && Gb >= Yb.to ? ab.push(Kb.range(Ob, Gb)) : (Ob >= Yb.to || Gb <= Yb.from) && ab.push(lb.range(Ob, Gb)), ab.length > ub.maxMatches)) return Bb.e.none
            }
          }
          return Bb.e.set(ab)
        }
      }, {
        ZG: bb => bb.ZG
      }),
      db = Bb.m.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const rb = Ob.n.define({
      combine: bb => (0, Ob.V)(bb, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: bb => new bu(bb),
        scrollToMatch: bb => Bb.m.scrollIntoView(bb)
      })
    });
    class jb {
      constructor(bb) {
        this.search = bb.search, this.caseSensitive = !!bb.caseSensitive, this.literal = !!bb.literal, this.regexp = !!bb.regexp, this.replace = bb.replace || "", this.valid = !!this.search && (!this.regexp || function(bb) {
          try {
            return new RegExp(bb, Sb), !0
          } catch (ub) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!bb.wholeWord, this.test = bb.test
      }
      unquote(bb) {
        return this.literal ? bb : bb.replace(/\\([nrt\\])/g, ((bb, ub) => "n" == ub ? "\n" : "r" == ub ? "\r" : "t" == ub ? "\t" : "\\"))
      }
      eq(bb) {
        return this.search == bb.search && this.replace == bb.replace && this.caseSensitive == bb.caseSensitive && this.regexp == bb.regexp && this.wholeWord == bb.wholeWord && this.test == bb.test
      }
      create() {
        return this.regexp ? new vb(this) : new xb(this)
      }
      getCursor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          hb = arguments.length > 2 ? arguments[2] : void 0,
          Bb = bb.doc ? bb : Ob.k.create({
            doc: bb
          });
        return null == hb && (hb = Bb.doc.length), this.regexp ? zb(this, Bb, ub, hb) : Db(this, Bb, ub, hb)
      }
    }
    class nb {
      constructor(bb) {
        this.spec = bb
      }
    }

    function Db(bb, ub, hb, Bb) {
      let Gb;
      var Ub, Yb;
      return bb.wholeWord && (Ub = ub.doc, Yb = ub.charCategorizer(ub.selection.main.head), Gb = (bb, ub, hb, Bb) => ((Bb > bb || Bb + hb.length < ub) && (Bb = Math.max(0, bb - 2), hb = Ub.sliceString(Bb, Math.min(Ub.length, ub + 2))), (Yb(gb(hb, bb - Bb)) != Ob.i.Word || Yb(ib(hb, bb - Bb)) != Ob.i.Word) && (Yb(ib(hb, ub - Bb)) != Ob.i.Word || Yb(gb(hb, ub - Bb)) != Ob.i.Word))), bb.test && (Gb = function(bb, ub, hb) {
        return (Bb, Ob, Gb, Ub) => {
          if (hb && !hb(Bb, Ob, Gb, Ub)) return !1;
          let Lb = Bb >= Ub && Ob <= Ub + Gb.length ? Gb.slice(Bb - Ub, Ob - Ub) : ub.doc.sliceString(Bb, Ob);
          return bb(Lb, ub, Bb, Ob)
        }
      }(bb.test, ub, Gb)), new Lb(ub.doc, bb.unquoted, hb, Bb, bb.caseSensitive ? void 0 : bb => bb.toLowerCase(), Gb)
    }
    class xb extends nb {
      constructor(bb) {
        super(bb)
      }
      nextMatch(bb, ub, hb) {
        let Bb = Db(this.spec, bb, hb, bb.doc.length).nextOverlapping();
        if (Bb.done) {
          let hb = Math.min(bb.doc.length, ub + this.spec.unquoted.length);
          Bb = Db(this.spec, bb, 0, hb).nextOverlapping()
        }
        return Bb.done || Bb.value.from == ub && Bb.value.to == hb ? null : Bb.value
      }
      prevMatchInRange(bb, ub, hb) {
        for (let Bb = hb;;) {
          let hb = Math.max(ub, Bb - 1e4 - this.spec.unquoted.length),
            Ob = Db(this.spec, bb, hb, Bb),
            Gb = null;
          for (; !Ob.nextOverlapping().done;) Gb = Ob.value;
          if (Gb) return Gb;
          if (hb == ub) return null;
          Bb -= 1e4
        }
      }
      prevMatch(bb, ub, hb) {
        let Bb = this.prevMatchInRange(bb, 0, ub);
        return Bb || (Bb = this.prevMatchInRange(bb, Math.max(0, hb - this.spec.unquoted.length), bb.doc.length)), !Bb || Bb.from == ub && Bb.to == hb ? null : Bb
      }
      getReplacement(bb) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(bb, ub) {
        let hb = Db(this.spec, bb, 0, bb.doc.length),
          Bb = [];
        for (; !hb.next().done;) {
          if (Bb.length >= ub) return null;
          Bb.push(hb.value)
        }
        return Bb
      }
      highlight(bb, ub, hb, Bb) {
        let Ob = Db(this.spec, bb, Math.max(0, ub - this.spec.unquoted.length), Math.min(hb + this.spec.unquoted.length, bb.doc.length));
        for (; !Ob.next().done;) Bb(Ob.value.from, Ob.value.to)
      }
    }

    function zb(bb, ub, hb, Bb) {
      let Gb;
      var Ub;
      return bb.wholeWord && (Ub = ub.charCategorizer(ub.selection.main.head), Gb = (bb, ub, hb) => !hb[0].length || (Ub(gb(hb.input, hb.index)) != Ob.i.Word || Ub(ib(hb.input, hb.index)) != Ob.i.Word) && (Ub(ib(hb.input, hb.index + hb[0].length)) != Ob.i.Word || Ub(gb(hb.input, hb.index + hb[0].length)) != Ob.i.Word)), bb.test && (Gb = function(bb, ub, hb) {
        return (Bb, Ob, Gb) => (!hb || hb(Bb, Ob, Gb)) && bb(Gb[0], ub, Bb, Ob)
      }(bb.test, ub, Gb)), new ab(ub.doc, bb.search, {
        ignoreCase: !bb.caseSensitive,
        test: Gb
      }, hb, Bb)
    }

    function gb(bb, ub) {
      return bb.slice((0, Ob._)(bb, ub, !1), ub)
    }

    function ib(bb, ub) {
      return bb.slice(ub, (0, Ob._)(bb, ub))
    }
    class vb extends nb {
      nextMatch(bb, ub, hb) {
        let Bb = zb(this.spec, bb, hb, bb.doc.length).next();
        return Bb.done && (Bb = zb(this.spec, bb, 0, ub).next()), Bb.done ? null : Bb.value
      }
      prevMatchInRange(bb, ub, hb) {
        for (let Bb = 1;; Bb++) {
          let Ob = Math.max(ub, hb - 1e4 * Bb),
            Gb = zb(this.spec, bb, Ob, hb),
            Ub = null;
          for (; !Gb.next().done;) Ub = Gb.value;
          if (Ub && (Ob == ub || Ub.from > Ob + 10)) return Ub;
          if (Ob == ub) return null
        }
      }
      prevMatch(bb, ub, hb) {
        return this.prevMatchInRange(bb, 0, ub) || this.prevMatchInRange(bb, hb, bb.doc.length)
      }
      getReplacement(bb) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((ub, hb) => {
          if ("&" == hb) return bb.match[0];
          if ("$" == hb) return "$";
          for (let Bb = hb.length; Bb > 0; Bb--) {
            let ub = +hb.slice(0, Bb);
            if (ub > 0 && ub < bb.match.length) return bb.match[ub] + hb.slice(Bb)
          }
          return ub
        }))
      }
      matchAll(bb, ub) {
        let hb = zb(this.spec, bb, 0, bb.doc.length),
          Bb = [];
        for (; !hb.next().done;) {
          if (Bb.length >= ub) return null;
          Bb.push(hb.value)
        }
        return Bb
      }
      highlight(bb, ub, hb, Bb) {
        let Ob = zb(this.spec, bb, Math.max(0, ub - 250), Math.min(hb + 250, bb.doc.length));
        for (; !Ob.next().done;) Bb(Ob.value.from, Ob.value.to)
      }
    }
    const tb = Ob.D.define(),
      Jb = Ob.D.define(),
      eb = Ob.G.define({
        create: bb => new Nb(fb(bb).create(), null),
        update(bb, ub) {
          for (let hb of ub.effects) hb.is(tb) ? bb = new Nb(hb.value.create(), bb.panel) : hb.is(Jb) && (bb = new Nb(bb.query, hb.value ? Fb : null));
          return bb
        },
        provide: bb => Bb.gb.from(bb, (bb => bb.panel))
      });
    class Nb {
      constructor(bb, ub) {
        this.query = bb, this.panel = ub
      }
    }
    const sb = Bb.e.mark({
        class: "cm-searchMatch"
      }),
      Mb = Bb.e.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      mb = Bb.q.fromClass(class {
        constructor(bb) {
          this.view = bb, this.ZG = this.highlight(bb.state.field(eb))
        }
        update(bb) {
          let ub = bb.state.field(eb);
          (ub != bb.startState.field(eb) || bb.docChanged || bb.selectionSet || bb.viewportChanged) && (this.ZG = this.highlight(ub))
        }
        highlight(bb) {
          let {
            query: ub,
            panel: hb
          } = bb;
          if (!hb || !ub.spec.valid) return Bb.e.none;
          let {
            view: Gb
          } = this, Ub = new Ob.w;
          for (let Bb = 0, Ob = Gb.j_, Lb = Ob.length; Bb < Lb; Bb++) {
            let {
              from: bb,
              to: hb
            } = Ob[Bb];
            for (; Bb < Lb - 1 && hb > Ob[Bb + 1].from - 500;) hb = Ob[++Bb].to;
            ub.highlight(Gb.state, bb, hb, ((bb, ub) => {
              let hb = Gb.state.selection.tp.some((hb => hb.from == bb && hb.to == ub));
              Ub.add(bb, ub, hb ? Mb : sb)
            }))
          }
          return Ub.finish()
        }
      }, {
        ZG: bb => bb.ZG
      });

    function Ib(bb) {
      return ub => {
        let hb = ub.state.field(eb, !1);
        return hb && hb.query.spec.valid ? bb(ub, hb) : cb(ub)
      }
    }
    const Pb = Ib(((bb, ub) => {
        let {
          query: hb
        } = ub, {
          to: Bb
        } = bb.state.selection.main, Gb = hb.nextMatch(bb.state, Bb, Bb);
        if (!Gb) return !1;
        let Ub = Ob.j.single(Gb.from, Gb.to),
          Lb = bb.state.facet(rb);
        return bb.dispatch({
          selection: Ub,
          effects: [Ou(bb, Gb), Lb.scrollToMatch(Ub.main, bb)],
          userEvent: "select.search"
        }), Tb(bb), !0
      })),
      qb = Ib(((bb, ub) => {
        let {
          query: hb
        } = ub, {
          state: Bb
        } = bb, {
          from: Gb
        } = Bb.selection.main, Ub = hb.prevMatch(Bb, Gb, Gb);
        if (!Ub) return !1;
        let Lb = Ob.j.single(Ub.from, Ub.to),
          Yb = bb.state.facet(rb);
        return bb.dispatch({
          selection: Lb,
          effects: [Ou(bb, Ub), Yb.scrollToMatch(Lb.main, bb)],
          userEvent: "select.search"
        }), Tb(bb), !0
      })),
      Eb = Ib(((bb, ub) => {
        let {
          query: hb
        } = ub, Bb = hb.matchAll(bb.state, 1e3);
        return !(!Bb || !Bb.length) && (bb.dispatch({
          selection: Ob.j.create(Bb.map((bb => Ob.j.range(bb.from, bb.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      yb = Ib(((bb, ub) => {
        let {
          query: hb
        } = ub, {
          state: Gb
        } = bb, {
          from: Ub,
          to: Lb
        } = Gb.selection.main;
        if (Gb.readOnly) return !1;
        let Yb = hb.nextMatch(Gb, Ub, Ub);
        if (!Yb) return !1;
        let Sb, ab, Hb = Yb,
          wb = [],
          Zb = [];
        Hb.from == Ub && Hb.to == Lb && (ab = Gb.toText(hb.getReplacement(Hb)), wb.push({
          from: Hb.from,
          to: Hb.to,
          insert: ab
        }), Hb = hb.nextMatch(Gb, Hb.from, Hb.to), Zb.push(Bb.m.announce.of(Gb.phrase("replaced match on line $", Gb.doc.lineAt(Ub).number) + ".")));
        let Xb = bb.state.changes(wb);
        return Hb && (Sb = Ob.j.single(Hb.from, Hb.to).map(Xb), Zb.push(Ou(bb, Hb)), Zb.push(Gb.facet(rb).scrollToMatch(Sb.main, bb))), bb.dispatch({
          changes: Xb,
          selection: Sb,
          effects: Zb,
          userEvent: "input.replace"
        }), !0
      })),
      Vb = Ib(((bb, ub) => {
        let {
          query: hb
        } = ub;
        if (bb.state.readOnly) return !1;
        let Ob = hb.matchAll(bb.state, 1e9).map((bb => {
          let {
            from: ub,
            to: Bb
          } = bb;
          return {
            from: ub,
            to: Bb,
            insert: hb.getReplacement(bb)
          }
        }));
        if (!Ob.length) return !1;
        let Gb = bb.state.phrase("replaced $ matches", Ob.length) + ".";
        return bb.dispatch({
          changes: Ob,
          effects: Bb.m.announce.of(Gb),
          userEvent: "input.replace.all"
        }), !0
      }));

    function Fb(bb) {
      return bb.state.facet(rb).createPanel(bb)
    }

    function fb(bb, ub) {
      var hb, Bb, Ob, Gb, Ub;
      let Lb = bb.selection.main,
        Yb = Lb.empty || Lb.to > Lb.from + 100 ? "" : bb.sliceDoc(Lb.from, Lb.to);
      if (ub && !Yb) return ub;
      let Sb = bb.facet(rb);
      return new jb({
        search: (null !== (hb = null === ub || void 0 === ub ? void 0 : ub.literal) && void 0 !== hb ? hb : Sb.literal) ? Yb : Yb.replace(/\n/g, "\\n"),
        caseSensitive: null !== (Bb = null === ub || void 0 === ub ? void 0 : ub.caseSensitive) && void 0 !== Bb ? Bb : Sb.caseSensitive,
        literal: null !== (Ob = null === ub || void 0 === ub ? void 0 : ub.literal) && void 0 !== Ob ? Ob : Sb.literal,
        regexp: null !== (Gb = null === ub || void 0 === ub ? void 0 : ub.regexp) && void 0 !== Gb ? Gb : Sb.regexp,
        wholeWord: null !== (Ub = null === ub || void 0 === ub ? void 0 : ub.wholeWord) && void 0 !== Ub ? Ub : Sb.wholeWord
      })
    }

    function kb(bb) {
      let ub = (0, Bb.F)(bb, Fb);
      return ub && ub.dom.querySelector("[main-field]")
    }

    function Tb(bb) {
      let ub = kb(bb);
      ub && ub == bb.root.activeElement && ub.select()
    }
    const cb = bb => {
        let ub = bb.state.field(eb, !1);
        if (ub && ub.panel) {
          let hb = kb(bb);
          if (hb && hb != bb.root.activeElement) {
            let Bb = fb(bb.state, ub.query.spec);
            Bb.valid && bb.dispatch({
              effects: tb.of(Bb)
            }), hb.focus(), hb.select()
          }
        } else bb.dispatch({
          effects: [Jb.of(!0), ub ? tb.of(fb(bb.state, ub.query.spec)) : Ob.D.appendConfig.of(Uu)]
        });
        return !0
      },
      Qb = bb => {
        let ub = bb.state.field(eb, !1);
        if (!ub || !ub.panel) return !1;
        let hb = (0, Bb.F)(bb, Fb);
        return hb && hb.dom.contains(bb.root.activeElement) && bb.focus(), bb.dispatch({
          effects: Jb.of(!1)
        }), !0
      },
      Rb = [{
        key: "Mod-f",
        run: cb,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: Pb,
        shift: qb,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: Pb,
        shift: qb,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: Qb,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: bb => {
          let {
            state: ub,
            dispatch: hb
          } = bb, Bb = ub.selection;
          if (Bb.tp.length > 1 || Bb.main.empty) return !1;
          let {
            from: Gb,
            to: Ub
          } = Bb.main, Yb = [], Sb = 0;
          for (let ab = new Lb(ub.doc, ub.sliceDoc(Gb, Ub)); !ab.next().done;) {
            if (Yb.length > 1e3) return !1;
            ab.value.from == Gb && (Sb = Yb.length), Yb.push(Ob.j.range(ab.value.from, ab.value.to))
          }
          return hb(ub.update({
            selection: Ob.j.create(Yb, Sb),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: bb => {
          let {
            state: ub
          } = bb, hb = String(ub.doc.lineAt(bb.state.selection.main.head).number), {
            close: Gb,
            result: Ub
          } = (0, Bb.fb)(bb, {
            label: ub.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: hb
            },
            focus: !0,
            submitLabel: ub.phrase("go")
          });
          return Ub.then((hb => {
            let Ub = hb && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(hb.elements.line.value);
            if (!Ub) return void bb.dispatch({
              effects: Gb
            });
            let Lb = ub.doc.lineAt(ub.selection.main.head),
              [, Yb, Sb, ab, Hb] = Ub,
              wb = ab ? +ab.slice(1) : 0,
              Zb = Sb ? +Sb : Lb.number;
            if (Sb && Hb) {
              let bb = Zb / 100;
              Yb && (bb = bb * ("-" == Yb ? -1 : 1) + Lb.number / ub.doc.lines), Zb = Math.round(ub.doc.lines * bb)
            } else Sb && Yb && (Zb = Zb * ("-" == Yb ? -1 : 1) + Lb.number);
            let Xb = ub.doc.line(Math.max(1, Math.min(ub.doc.lines, Zb))),
              pb = Ob.j.cursor(Xb.from + Math.max(0, Math.min(wb, Xb.length)));
            bb.dispatch({
              effects: [Gb, Bb.m.scrollIntoView(pb.from, {
                y: "center"
              })],
              selection: pb
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: bb => {
          let {
            state: ub,
            dispatch: hb
          } = bb, {
            tp: Gb
          } = ub.selection;
          if (Gb.some((bb => bb.from === bb.to))) return (bb => {
            let {
              state: ub,
              dispatch: hb
            } = bb, {
              selection: Bb
            } = ub, Gb = Ob.j.create(Bb.tp.map((bb => ub.wordAt(bb.head) || Ob.j.cursor(bb.head))), Bb.mainIndex);
            return !Gb.eq(Bb) && (hb(ub.update({
              selection: Gb
            })), !0)
          })({
            state: ub,
            dispatch: hb
          });
          let Ub = ub.sliceDoc(Gb[0].from, Gb[0].to);
          if (ub.selection.tp.some((bb => ub.sliceDoc(bb.from, bb.to) != Ub))) return !1;
          let Yb = function(bb, ub) {
            let {
              main: hb,
              tp: Bb
            } = bb.selection, Ob = bb.wordAt(hb.head), Gb = Ob && Ob.from == hb.from && Ob.to == hb.to;
            for (let Ub = !1, Yb = new Lb(bb.doc, ub, Bb[Bb.length - 1].to);;) {
              if (Yb.next(), !Yb.done) {
                if (Ub && Bb.some((bb => bb.from == Yb.value.from))) continue;
                if (Gb) {
                  let ub = bb.wordAt(Yb.value.from);
                  if (!ub || ub.from != Yb.value.from || ub.to != Yb.value.to) continue
                }
                return Yb.value
              }
              if (Ub) return null;
              Yb = new Lb(bb.doc, ub, 0, Math.max(0, Bb[Bb.length - 1].from - 1)), Ub = !0
            }
          }(ub, Ub);
          return !!Yb && (hb(ub.update({
            selection: ub.selection.addRange(Ob.j.range(Yb.from, Yb.to), !1),
            effects: Bb.m.scrollIntoView(Yb.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class bu {
      constructor(bb) {
        this.view = bb;
        let ub = this.query = bb.state.field(eb).query.spec;

        function hb(bb, ub, hb) {
          return (0, Gb.b)("button", {
            class: "cm-button",
            name: bb,
            onclick: ub,
            type: "button"
          }, hb)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, Gb.b)("input", {
          value: ub.search,
          placeholder: uu(bb, "Find"),
          "aria-label": uu(bb, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, Gb.b)("input", {
          value: ub.replace,
          placeholder: uu(bb, "Replace"),
          "aria-label": uu(bb, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, Gb.b)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: ub.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, Gb.b)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: ub.regexp,
          onchange: this.commit
        }), this.wordField = (0, Gb.b)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: ub.wholeWord,
          onchange: this.commit
        }), this.dom = (0, Gb.b)("div", {
          onkeydown: bb => this.keydown(bb),
          class: "cm-search"
        }, [this.searchField, hb("next", (() => Pb(bb)), [uu(bb, "next")]), hb("prev", (() => qb(bb)), [uu(bb, "previous")]), hb("select", (() => Eb(bb)), [uu(bb, "all")]), (0, Gb.b)("label", null, [this.caseField, uu(bb, "match case")]), (0, Gb.b)("label", null, [this.reField, uu(bb, "regexp")]), (0, Gb.b)("label", null, [this.wordField, uu(bb, "by word")]), ...bb.state.readOnly ? [] : [(0, Gb.b)("br"), this.replaceField, hb("replace", (() => yb(bb)), [uu(bb, "replace")]), hb("replaceAll", (() => Vb(bb)), [uu(bb, "replace all")])], (0, Gb.b)("button", {
          name: "close",
          onclick: () => Qb(bb),
          "aria-label": uu(bb, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let bb = new jb({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        bb.eq(this.query) || (this.query = bb, this.view.dispatch({
          effects: tb.of(bb)
        }))
      }
      keydown(bb) {
        (0, Bb.db)(this.view, bb, "search-panel") ? bb.preventDefault(): 13 == bb.keyCode && bb.target == this.searchField ? (bb.preventDefault(), (bb.shiftKey ? qb : Pb)(this.view)) : 13 == bb.keyCode && bb.target == this.replaceField && (bb.preventDefault(), yb(this.view))
      }
      update(bb) {
        for (let ub of bb.transactions)
          for (let bb of ub.effects) bb.is(tb) && !bb.value.eq(this.query) && this.setQuery(bb.value)
      }
      setQuery(bb) {
        this.query = bb, this.searchField.value = bb.search, this.replaceField.value = bb.replace, this.caseField.checked = bb.caseSensitive, this.reField.checked = bb.regexp, this.wordField.checked = bb.wholeWord
      }
      mount() {
        this.searchField.select()
      }
      get pos() {
        return 80
      }
      get top() {
        return this.view.state.facet(rb).top
      }
    }

    function uu(bb, ub) {
      return bb.state.phrase(ub)
    }
    const hu = 30,
      Bu = /[\s\.,:;?!]/;

    function Ou(bb, ub) {
      let {
        from: hb,
        to: Ob
      } = ub, Gb = bb.state.doc.lineAt(hb), Ub = bb.state.doc.lineAt(Ob).to, Lb = Math.max(Gb.from, hb - hu), Yb = Math.min(Ub, Ob + hu), Sb = bb.state.sliceDoc(Lb, Yb);
      if (Lb != Gb.from)
        for (let Bb = 0; Bb < hu; Bb++)
          if (!Bu.test(Sb[Bb + 1]) && Bu.test(Sb[Bb])) {
            Sb = Sb.slice(Bb);
            break
          } if (Yb != Ub)
        for (let Bb = Sb.length - 1; Bb > Sb.length - hu; Bb--)
          if (!Bu.test(Sb[Bb - 1]) && Bu.test(Sb[Bb])) {
            Sb = Sb.slice(0, Bb);
            break
          } return Bb.m.announce.of(`${bb.state.phrase("current match")}. ${Sb} ${bb.state.phrase("on line")} ${Gb.number}.`)
    }
    const Gu = Bb.m.baseTheme({
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
      Uu = [eb, Ob.t.low(mb), Gu]
  },
  40773: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => vb,
      i: () => Su,
      m: () => nO,
      o: () => GU,
      q: () => Tu,
      u: () => gb,
      y: () => zG,
      A: () => TO,
      C: () => GG,
      F: () => TG,
      I: () => FG,
      J: () => aU,
      O: () => AG,
      L: () => gU,
      P: () => ZG,
      S: () => VG,
      T: () => JO,
      V: () => nU,
      Z: () => Vu,
      bb: () => CG,
      cb: () => nG,
      db: () => sO,
      fb: () => uU,
      gb: () => bU,
      ib: () => mG
    });
    for (var Bb = hb(40769), Ob = hb(40776), Gb = {
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
      }, Ub = {
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
      }, Lb = "undefined" != typeof navigator && /Mac/.test(navigator.platform), Yb = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), Sb = 0; Sb < 10; Sb++) Gb[48 + Sb] = Gb[96 + Sb] = String(Sb);
    for (Sb = 1; Sb <= 24; Sb++) Gb[Sb + 111] = "F" + Sb;
    for (Sb = 65; Sb <= 90; Sb++) Gb[Sb] = String.fromCharCode(Sb + 32), Ub[Sb] = String.fromCharCode(Sb);
    for (var ab in Gb) Ub.hasOwnProperty(ab) || (Ub[ab] = Gb[ab]);
    var Hb = hb(40779);
    let wb = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      Zb = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const Xb = /Edge\/(\d+)/.exec(wb.userAgent),
      pb = /MSIE \d/.test(wb.userAgent),
      ob = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(wb.userAgent),
      Ab = !!(pb || ob || Xb),
      lb = !Ab && /gecko\/(\d+)/i.test(wb.userAgent),
      Kb = !Ab && /Chrome\/(\d+)/.exec(wb.userAgent),
      Wb = "webkitFontSmoothing" in Zb.documentElement.style,
      Cb = !Ab && /Apple Computer/.test(wb.vendor),
      db = Cb && (/Mobile\/\w+/.test(wb.userAgent) || wb.maxTouchPoints > 2);
    var rb = {
      mac: db || /Mac/.test(wb.platform),
      windows: /Win/.test(wb.platform),
      linux: /Linux|X11/.test(wb.platform),
      ie: Ab,
      ie_version: pb ? Zb.documentMode || 6 : ob ? +ob[1] : Xb ? +Xb[1] : 0,
      gecko: lb,
      gecko_version: lb ? +(/Firefox\/(\d+)/.exec(wb.userAgent) || [0, 0])[1] : 0,
      chrome: !!Kb,
      chrome_version: Kb ? +Kb[1] : 0,
      ios: db,
      android: /Android\b/.test(wb.userAgent),
      webkit: Wb,
      webkit_version: Wb ? +(/\bAppleWebKit\/(\d+)/.exec(wb.userAgent) || [0, 0])[1] : 0,
      safari: Cb,
      safari_version: Cb ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(wb.userAgent) || [0, 0])[1] : 0,
      tabSize: null != Zb.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function jb(bb, ub) {
      for (let hb in bb) "class" == hb && ub.class ? ub.class += " " + bb.class : "style" == hb && ub.style ? ub.style += ";" + bb.style : ub[hb] = bb[hb];
      return ub
    }
    const nb = Object.create(null);

    function Db(bb, ub, hb) {
      if (bb == ub) return !0;
      bb || (bb = nb), ub || (ub = nb);
      let Bb = Object.keys(bb),
        Ob = Object.keys(ub);
      if (Bb.length - (hb && Bb.indexOf(hb) > -1 ? 1 : 0) != Ob.length - (hb && Ob.indexOf(hb) > -1 ? 1 : 0)) return !1;
      for (let Gb of Bb)
        if (Gb != hb && (-1 == Ob.indexOf(Gb) || bb[Gb] !== ub[Gb])) return !1;
      return !0
    }

    function xb(bb, ub, hb) {
      let Bb = !1;
      if (ub)
        for (let Ob in ub) hb && Ob in hb || (Bb = !0, "style" == Ob ? bb.style.cssText = "" : bb.removeAttribute(Ob));
      if (hb)
        for (let Ob in hb) ub && ub[Ob] == hb[Ob] || (Bb = !0, "style" == Ob ? bb.style.cssText = hb[Ob] : bb.setAttribute(Ob, hb[Ob]));
      return Bb
    }

    function zb(bb) {
      let ub = Object.create(null);
      for (let hb = 0; hb < bb.attributes.length; hb++) {
        let Bb = bb.attributes[hb];
        ub[Bb.name] = Bb.value
      }
      return ub
    }
    class gb {
      eq(bb) {
        return !1
      }
      updateDOM(bb, ub, hb) {
        return !1
      }
      compare(bb) {
        return this == bb || this.constructor == bb.constructor && this.eq(bb)
      }
      get estimatedHeight() {
        return -1
      }
      get lineBreaks() {
        return 0
      }
      ignoreEvent(bb) {
        return !0
      }
      coordsAt(bb, ub, hb) {
        return null
      }
      get isHidden() {
        return !1
      }
      get editable() {
        return !1
      }
      destroy(bb) {}
    }
    var ib = function(bb) {
      return bb[bb.Text = 0] = "Text", bb[bb.WidgetBefore = 1] = "WidgetBefore", bb[bb.WidgetAfter = 2] = "WidgetAfter", bb[bb.WidgetRange = 3] = "WidgetRange", bb
    }(ib || (ib = {}));
    class vb extends Bb.B {
      constructor(bb, ub, hb, Bb) {
        super(), this.startSide = bb, this.endSide = ub, this.widget = hb, this.spec = Bb
      }
      get heightRelevant() {
        return !1
      }
      static mark(bb) {
        return new tb(bb)
      }
      static widget(bb) {
        let ub = Math.max(-1e4, Math.min(1e4, bb.side || 0)),
          hb = !!bb.block;
        return ub += hb && !bb.inlineOrder ? ub > 0 ? 3e8 : -4e8 : ub > 0 ? 1e8 : -1e8, new eb(bb, ub, ub, hb, bb.widget || null, !1)
      }
      static replace(bb) {
        let ub, hb, Bb = !!bb.block;
        if (bb.isBlockGap) ub = -5e8, hb = 4e8;
        else {
          let {
            start: Ob,
            end: Gb
          } = Nb(bb, Bb);
          ub = (Ob ? Bb ? -3e8 : -1 : 5e8) - 1, hb = 1 + (Gb ? Bb ? 2e8 : 1 : -6e8)
        }
        return new eb(bb, ub, hb, Bb, bb.widget || null, !0)
      }
      static line(bb) {
        return new Jb(bb)
      }
      static set(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Bb.x.of(bb, ub)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    vb.none = Bb.x.empty;
    class tb extends vb {
      constructor(bb) {
        let {
          start: ub,
          end: hb
        } = Nb(bb);
        super(ub ? -1 : 5e8, hb ? 1 : -6e8, null, bb), this.tagName = bb.tagName || "span", this.attrs = bb.class && bb.attributes ? jb(bb.attributes, {
          class: bb.class
        }) : bb.class ? {
          class: bb.class
        } : bb.attributes || nb
      }
      eq(bb) {
        return this == bb || bb instanceof tb && this.tagName == bb.tagName && Db(this.attrs, bb.attrs)
      }
      range(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb;
        if (bb >= ub) throw new RangeError("Mark decorations may not be empty");
        return super.range(bb, ub)
      }
    }
    tb.prototype.point = !1;
    class Jb extends vb {
      constructor(bb) {
        super(-2e8, -2e8, null, bb)
      }
      eq(bb) {
        return bb instanceof Jb && this.spec.class == bb.spec.class && Db(this.spec.attributes, bb.spec.attributes)
      }
      range(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb;
        if (ub != bb) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(bb, ub)
      }
    }
    Jb.prototype.mapMode = Bb.p.TrackBefore, Jb.prototype.point = !0;
    class eb extends vb {
      constructor(bb, ub, hb, Ob, Gb, Ub) {
        super(ub, hb, Gb, bb), this.block = Ob, this.isReplace = Ub, this.mapMode = Ob ? ub <= 0 ? Bb.p.TrackBefore : Bb.p.TrackAfter : Bb.p.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? ib.WidgetRange : this.startSide <= 0 ? ib.WidgetBefore : ib.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(bb) {
        return bb instanceof eb && (ub = this.widget, hb = bb.widget, ub == hb || !!(ub && hb && ub.compare(hb))) && this.block == bb.block && this.startSide == bb.startSide && this.endSide == bb.endSide;
        var ub, hb
      }
      range(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb;
        if (this.isReplace && (bb > ub || bb == ub && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && ub != bb) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(bb, ub)
      }
    }

    function Nb(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: hb,
          inclusiveEnd: Bb
        } = bb;
      return null == hb && (hb = bb.inclusive), null == Bb && (Bb = bb.inclusive), {
        start: null !== hb && void 0 !== hb ? hb : ub,
        end: null !== Bb && void 0 !== Bb ? Bb : ub
      }
    }

    function sb(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Ob = hb.length - 1;
      Ob >= 0 && hb[Ob] + Bb >= bb ? hb[Ob] = Math.max(hb[Ob], ub) : hb.push(bb, ub)
    }
    eb.prototype.point = !0;
    class Mb extends Bb.B {
      constructor(bb, ub) {
        super(), this.tagName = bb, this.attributes = ub
      }
      eq(bb) {
        return bb == this || bb instanceof Mb && this.tagName == bb.tagName && Db(this.attributes, bb.attributes)
      }
      static create(bb) {
        return new Mb(bb.tagName, bb.attributes || nb)
      }
      static set(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Bb.x.of(bb, ub)
      }
    }

    function mb(bb) {
      let ub;
      return ub = 11 == bb.nodeType ? bb.getSelection ? bb : bb.ownerDocument : bb, ub.getSelection()
    }

    function Ib(bb, ub) {
      return !!ub && (bb == ub || bb.contains(1 != ub.nodeType ? ub.parentNode : ub))
    }

    function Pb(bb, ub) {
      if (!ub.anchorNode) return !1;
      try {
        return Ib(bb, ub.anchorNode)
      } catch (hb) {
        return !1
      }
    }

    function qb(bb) {
      return 3 == bb.nodeType ? Bu(bb, 0, bb.nodeValue.length).getClientRects() : 1 == bb.nodeType ? bb.getClientRects() : []
    }

    function Eb(bb, ub, hb, Bb) {
      return !!hb && (Fb(bb, ub, hb, Bb, -1) || Fb(bb, ub, hb, Bb, 1))
    }

    function yb(bb) {
      for (var ub = 0;; ub++)
        if (!(bb = bb.previousSibling)) return ub
    }

    function Vb(bb) {
      return 1 == bb.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(bb.nodeName)
    }

    function Fb(bb, ub, hb, Bb, Ob) {
      for (;;) {
        if (bb == hb && ub == Bb) return !0;
        if (ub == (Ob < 0 ? 0 : fb(bb))) {
          if ("DIV" == bb.nodeName) return !1;
          let hb = bb.parentNode;
          if (!hb || 1 != hb.nodeType) return !1;
          ub = yb(bb) + (Ob < 0 ? 0 : 1), bb = hb
        } else {
          if (1 != bb.nodeType) return !1;
          if (1 == (bb = bb.childNodes[ub + (Ob < 0 ? -1 : 0)]).nodeType && "false" == bb.contentEditable) return !1;
          ub = Ob < 0 ? fb(bb) : 0
        }
      }
    }

    function fb(bb) {
      return 3 == bb.nodeType ? bb.nodeValue.length : bb.childNodes.length
    }

    function kb(bb, ub) {
      let hb = ub ? bb.left : bb.right;
      return {
        left: hb,
        right: hb,
        top: bb.top,
        bottom: bb.bottom
      }
    }

    function Tb(bb) {
      let ub = bb.visualViewport;
      return ub ? {
        left: 0,
        right: ub.width,
        top: 0,
        bottom: ub.height
      } : {
        left: 0,
        right: bb.innerWidth,
        top: 0,
        bottom: bb.innerHeight
      }
    }

    function cb(bb, ub) {
      let hb = ub.width / bb.offsetWidth,
        Bb = ub.height / bb.offsetHeight;
      return (hb > .995 && hb < 1.005 || !isFinite(hb) || Math.abs(ub.width - bb.offsetWidth) < 1) && (hb = 1), (Bb > .995 && Bb < 1.005 || !isFinite(Bb) || Math.abs(ub.height - bb.offsetHeight) < 1) && (Bb = 1), {
        scaleX: hb,
        scaleY: Bb
      }
    }

    function Qb(bb) {
      let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        hb = bb.ownerDocument,
        Bb = null,
        Ob = null;
      for (let Gb = bb.parentNode; Gb && (Gb != hb.body && (ub && !Bb || !Ob));)
        if (1 == Gb.nodeType) !Ob && Gb.scrollHeight > Gb.clientHeight && (Ob = Gb), ub && !Bb && Gb.scrollWidth > Gb.clientWidth && (Bb = Gb), Gb = Gb.assignedSlot || Gb.parentNode;
        else {
          if (11 != Gb.nodeType) break;
          Gb = Gb.host
        } return {
        x: Bb,
        y: Ob
      }
    }
    Mb.prototype.startSide = Mb.prototype.endSide = -1;
    class Rb {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(bb) {
        return this.anchorNode == bb.anchorNode && this.anchorOffset == bb.anchorOffset && this.focusNode == bb.focusNode && this.focusOffset == bb.focusOffset
      }
      setRange(bb) {
        let {
          anchorNode: ub,
          focusNode: hb
        } = bb;
        this.set(ub, Math.min(bb.anchorOffset, ub ? fb(ub) : 0), hb, Math.min(bb.focusOffset, hb ? fb(hb) : 0))
      }
      set(bb, ub, hb, Bb) {
        this.anchorNode = bb, this.anchorOffset = ub, this.focusNode = hb, this.focusOffset = Bb
      }
    }
    let bu, uu = null;

    function hu(bb) {
      if (bb.setActive) return bb.setActive();
      if (uu) return bb.focus(uu);
      let ub = [];
      for (let hb = bb; hb && (ub.push(hb, hb.scrollTop, hb.scrollLeft), hb != hb.ownerDocument); hb = hb.parentNode);
      if (bb.focus(null == uu ? {
          get preventScroll() {
            return uu = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !uu) {
        uu = !1;
        for (let bb = 0; bb < ub.length;) {
          let hb = ub[bb++],
            Bb = ub[bb++],
            Ob = ub[bb++];
          hb.scrollTop != Bb && (hb.scrollTop = Bb), hb.scrollLeft != Ob && (hb.scrollLeft = Ob)
        }
      }
    }

    function Bu(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ub,
        Bb = bu || (bu = document.createRange());
      return Bb.setEnd(bb, hb), Bb.setStart(bb, ub), Bb
    }

    function Ou(bb, ub, hb, Bb) {
      let Ob = {
        key: ub,
        code: ub,
        keyCode: hb,
        which: hb,
        cancelable: !0
      };
      Bb && ({
        altKey: Ob.altKey,
        ctrlKey: Ob.ctrlKey,
        shiftKey: Ob.shiftKey,
        metaKey: Ob.metaKey
      } = Bb);
      let Gb = new KeyboardEvent("keydown", Ob);
      Gb.synthetic = !0, bb.dispatchEvent(Gb);
      let Ub = new KeyboardEvent("keyup", Ob);
      return Ub.synthetic = !0, bb.dispatchEvent(Ub), Gb.defaultPrevented || Ub.defaultPrevented
    }

    function Gu(bb) {
      return bb instanceof Window ? bb.pageYOffset > Math.max(0, bb.document.documentElement.scrollHeight - bb.innerHeight - 4) : bb.scrollTop > Math.max(1, bb.scrollHeight - bb.clientHeight - 4)
    }

    function Uu(bb, ub) {
      for (let hb = bb, Bb = ub;;) {
        if (3 == hb.nodeType && Bb > 0) return {
          node: hb,
          offset: Bb
        };
        if (1 == hb.nodeType && Bb > 0) {
          if ("false" == hb.contentEditable) return null;
          hb = hb.childNodes[Bb - 1], Bb = fb(hb)
        } else {
          if (!hb.parentNode || Vb(hb)) return null;
          Bb = yb(hb), hb = hb.parentNode
        }
      }
    }

    function Lu(bb, ub) {
      for (let hb = bb, Bb = ub;;) {
        if (3 == hb.nodeType && Bb < hb.nodeValue.length) return {
          node: hb,
          offset: Bb
        };
        if (1 == hb.nodeType && Bb < hb.childNodes.length) {
          if ("false" == hb.contentEditable) return null;
          hb = hb.childNodes[Bb], Bb = 0
        } else {
          if (!hb.parentNode || Vb(hb)) return null;
          Bb = yb(hb) + 1, hb = hb.parentNode
        }
      }
    }
    rb.safari && rb.safari_version >= 26 && (uu = !1);
    class Yu {
      constructor(bb, ub) {
        let hb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = bb, this.offset = ub, this.precise = hb
      }
      static before(bb, ub) {
        return new Yu(bb.parentNode, yb(bb), ub)
      }
      static after(bb, ub) {
        return new Yu(bb.parentNode, yb(bb) + 1, ub)
      }
    }
    var Su = function(bb) {
      return bb[bb.LTR = 0] = "LTR", bb[bb.RTL = 1] = "RTL", bb
    }(Su || (Su = {}));
    const au = Su.LTR,
      Hu = Su.RTL;

    function wu(bb) {
      let ub = [];
      for (let hb = 0; hb < bb.length; hb++) ub.push(1 << +bb[hb]);
      return ub
    }
    const Zu = wu("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      Xu = wu("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      pu = Object.create(null),
      ou = [];
    for (let iU of ["()", "[]", "{}"]) {
      let bb = iU.charCodeAt(0),
        ub = iU.charCodeAt(1);
      pu[bb] = ub, pu[ub] = -bb
    }

    function Au(bb) {
      return bb <= 247 ? Zu[bb] : 1424 <= bb && bb <= 1524 ? 2 : 1536 <= bb && bb <= 1785 ? Xu[bb - 1536] : 1774 <= bb && bb <= 2220 ? 4 : 8192 <= bb && bb <= 8204 ? 256 : 64336 <= bb && bb <= 65023 ? 4 : 1
    }
    const lu = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class Ku {
      get dir() {
        return this.level % 2 ? Hu : au
      }
      constructor(bb, ub, hb) {
        this.from = bb, this.to = ub, this.level = hb
      }
      side(bb, ub) {
        return this.dir == ub == bb ? this.to : this.from
      }
      forward(bb, ub) {
        return bb == (this.dir == ub)
      }
      static find(bb, ub, hb, Bb) {
        let Ob = -1;
        for (let Gb = 0; Gb < bb.length; Gb++) {
          let Ub = bb[Gb];
          if (Ub.from <= ub && Ub.to >= ub) {
            if (Ub.level == hb) return Gb;
            (Ob < 0 || (0 != Bb ? Bb < 0 ? Ub.from < ub : Ub.to > ub : bb[Ob].level > Ub.level)) && (Ob = Gb)
          }
        }
        if (Ob < 0) throw new RangeError("Index out of range");
        return Ob
      }
    }

    function Wu(bb, ub) {
      if (bb.length != ub.length) return !1;
      for (let hb = 0; hb < bb.length; hb++) {
        let Bb = bb[hb],
          Ob = ub[hb];
        if (Bb.from != Ob.from || Bb.to != Ob.to || Bb.direction != Ob.direction || !Wu(Bb.inner, Ob.inner)) return !1
      }
      return !0
    }
    const Cu = [];

    function du(bb, ub, hb, Bb, Ob, Gb, Ub) {
      let Lb = Bb % 2 ? 2 : 1;
      if (Bb % 2 == Ob % 2)
        for (let Yb = ub, Sb = 0; Yb < hb;) {
          let ub = !0,
            ab = !1;
          if (Sb == Gb.length || Yb < Gb[Sb].from) {
            let bb = Cu[Yb];
            bb != Lb && (ub = !1, ab = 16 == bb)
          }
          let Hb = ub || 1 != Lb ? null : [],
            wb = ub ? Bb : Bb + 1,
            Zb = Yb;
          bb: for (;;)
            if (Sb < Gb.length && Zb == Gb[Sb].from) {
              if (ab) break bb;
              let Xb = Gb[Sb];
              if (!ub)
                for (let bb = Xb.to, ub = Sb + 1;;) {
                  if (bb == hb) break bb;
                  if (!(ub < Gb.length && Gb[ub].from == bb)) {
                    if (Cu[bb] == Lb) break bb;
                    break
                  }
                  bb = Gb[ub++].to
                }
              if (Sb++, Hb) Hb.push(Xb);
              else {
                Xb.from > Yb && Ub.push(new Ku(Yb, Xb.from, wb)), ru(bb, Xb.direction == au != !(wb % 2) ? Bb + 1 : Bb, Ob, Xb.inner, Xb.from, Xb.to, Ub), Yb = Xb.to
              }
              Zb = Xb.to
            } else {
              if (Zb == hb || (ub ? Cu[Zb] != Lb : Cu[Zb] == Lb)) break;
              Zb++
            } Hb ? du(bb, Yb, Zb, Bb + 1, Ob, Hb, Ub) : Yb < Zb && Ub.push(new Ku(Yb, Zb, wb)), Yb = Zb
        } else
          for (let Yb = hb, Sb = Gb.length; Yb > ub;) {
            let hb = !0,
              ab = !1;
            if (!Sb || Yb > Gb[Sb - 1].to) {
              let bb = Cu[Yb - 1];
              bb != Lb && (hb = !1, ab = 16 == bb)
            }
            let Hb = hb || 1 != Lb ? null : [],
              wb = hb ? Bb : Bb + 1,
              Zb = Yb;
            bb: for (;;)
              if (Sb && Zb == Gb[Sb - 1].to) {
                if (ab) break bb;
                let Xb = Gb[--Sb];
                if (!hb)
                  for (let bb = Xb.from, hb = Sb;;) {
                    if (bb == ub) break bb;
                    if (!hb || Gb[hb - 1].to != bb) {
                      if (Cu[bb - 1] == Lb) break bb;
                      break
                    }
                    bb = Gb[--hb].from
                  }
                if (Hb) Hb.push(Xb);
                else {
                  Xb.to < Yb && Ub.push(new Ku(Xb.to, Yb, wb)), ru(bb, Xb.direction == au != !(wb % 2) ? Bb + 1 : Bb, Ob, Xb.inner, Xb.from, Xb.to, Ub), Yb = Xb.from
                }
                Zb = Xb.from
              } else {
                if (Zb == ub || (hb ? Cu[Zb - 1] != Lb : Cu[Zb - 1] == Lb)) break;
                Zb--
              } Hb ? du(bb, Zb, Yb, Bb + 1, Ob, Hb, Ub) : Zb < Yb && Ub.push(new Ku(Zb, Yb, wb)), Yb = Zb
          }
    }

    function ru(bb, ub, hb, Bb, Ob, Gb, Ub) {
      let Lb = ub % 2 ? 2 : 1;
      ! function(bb, ub, hb, Bb, Ob) {
        for (let Gb = 0; Gb <= Bb.length; Gb++) {
          let Ub = Gb ? Bb[Gb - 1].to : ub,
            Lb = Gb < Bb.length ? Bb[Gb].from : hb,
            Yb = Gb ? 256 : Ob;
          for (let ub = Ub, hb = Yb, Bb = Yb; ub < Lb; ub++) {
            let Ob = Au(bb.charCodeAt(ub));
            512 == Ob ? Ob = hb : 8 == Ob && 4 == Bb && (Ob = 16), Cu[ub] = 4 == Ob ? 2 : Ob, 7 & Ob && (Bb = Ob), hb = Ob
          }
          for (let bb = Ub, ub = Yb, Bb = Yb; bb < Lb; bb++) {
            let Ob = Cu[bb];
            if (128 == Ob) bb < Lb - 1 && ub == Cu[bb + 1] && 24 & ub ? Ob = Cu[bb] = ub : Cu[bb] = 256;
            else if (64 == Ob) {
              let Ob = bb + 1;
              for (; Ob < Lb && 64 == Cu[Ob];) Ob++;
              let Gb = bb && 8 == ub || Ob < hb && 8 == Cu[Ob] ? 1 == Bb ? 1 : 8 : 256;
              for (let ub = bb; ub < Ob; ub++) Cu[ub] = Gb;
              bb = Ob - 1
            } else 8 == Ob && 1 == Bb && (Cu[bb] = 1);
            ub = Ob, 7 & Ob && (Bb = Ob)
          }
        }
      }(bb, Ob, Gb, Bb, Lb),
      function(bb, ub, hb, Bb, Ob) {
        let Gb = 1 == Ob ? 2 : 1;
        for (let Ub = 0, Lb = 0, Yb = 0; Ub <= Bb.length; Ub++) {
          let Sb = Ub ? Bb[Ub - 1].to : ub,
            ab = Ub < Bb.length ? Bb[Ub].from : hb;
          for (let ub, hb, Bb, Ub = Sb; Ub < ab; Ub++)
            if (hb = pu[ub = bb.charCodeAt(Ub)])
              if (hb < 0) {
                for (let bb = Lb - 3; bb >= 0; bb -= 3)
                  if (ou[bb + 1] == -hb) {
                    let ub = ou[bb + 2],
                      hb = 2 & ub ? Ob : 4 & ub ? 1 & ub ? Gb : Ob : 0;
                    hb && (Cu[Ub] = Cu[ou[bb]] = hb), Lb = bb;
                    break
                  }
              } else {
                if (189 == ou.length) break;
                ou[Lb++] = Ub, ou[Lb++] = ub, ou[Lb++] = Yb
              }
          else if (2 == (Bb = Cu[Ub]) || 1 == Bb) {
            let bb = Bb == Ob;
            Yb = bb ? 0 : 1;
            for (let ub = Lb - 3; ub >= 0; ub -= 3) {
              let hb = ou[ub + 2];
              if (2 & hb) break;
              if (bb) ou[ub + 2] |= 2;
              else {
                if (4 & hb) break;
                ou[ub + 2] |= 4
              }
            }
          }
        }
      }(bb, Ob, Gb, Bb, Lb),
      function(bb, ub, hb, Bb) {
        for (let Ob = 0, Gb = Bb; Ob <= hb.length; Ob++) {
          let Ub = Ob ? hb[Ob - 1].to : bb,
            Lb = Ob < hb.length ? hb[Ob].from : ub;
          for (let Yb = Ub; Yb < Lb;) {
            let Ub = Cu[Yb];
            if (256 == Ub) {
              let Ub = Yb + 1;
              for (;;)
                if (Ub == Lb) {
                  if (Ob == hb.length) break;
                  Ub = hb[Ob++].to, Lb = Ob < hb.length ? hb[Ob].from : ub
                } else {
                  if (256 != Cu[Ub]) break;
                  Ub++
                } let Sb = 1 == Gb,
                ab = Sb == (1 == (Ub < ub ? Cu[Ub] : Bb)) ? Sb ? 1 : 2 : Bb;
              for (let ub = Ub, Bb = Ob, Gb = Bb ? hb[Bb - 1].to : bb; ub > Yb;) ub == Gb && (ub = hb[--Bb].from, Gb = Bb ? hb[Bb - 1].to : bb), Cu[--ub] = ab;
              Yb = Ub
            } else Gb = Ub, Yb++
          }
        }
      }(Ob, Gb, Bb, Lb), du(bb, Ob, Gb, ub, hb, Bb, Ub)
    }

    function ju(bb, ub, hb) {
      if (!bb) return [new Ku(0, 0, ub == Hu ? 1 : 0)];
      if (ub == au && !hb.length && !lu.test(bb)) return nu(bb.length);
      if (hb.length)
        for (; bb.length > Cu.length;) Cu[Cu.length] = 256;
      let Bb = [],
        Ob = ub == au ? 0 : 1;
      return ru(bb, Ob, Ob, hb, 0, bb.length, Bb), Bb
    }

    function nu(bb) {
      return [new Ku(0, bb, 0)]
    }
    let Du = "";

    function xu(bb, ub, hb, Ob, Gb) {
      var Ub;
      let Lb = Ob.head - bb.from,
        Yb = Ku.find(ub, Lb, null !== (Ub = Ob.bidiLevel) && void 0 !== Ub ? Ub : -1, Ob.assoc),
        Sb = ub[Yb],
        ab = Sb.side(Gb, hb);
      if (Lb == ab) {
        let bb = Yb += Gb ? 1 : -1;
        if (bb < 0 || bb >= ub.length) return null;
        Sb = ub[Yb = bb], Lb = Sb.side(!Gb, hb), ab = Sb.side(Gb, hb)
      }
      let Hb = (0, Bb._)(bb.text, Lb, Sb.forward(Gb, hb));
      (Hb < Sb.from || Hb > Sb.to) && (Hb = ab), Du = bb.text.slice(Math.min(Lb, Hb), Math.max(Lb, Hb));
      let wb = Yb == (Gb ? ub.length - 1 : 0) ? null : ub[Yb + (Gb ? 1 : -1)];
      return wb && Hb == ab && wb.level + (Gb ? 0 : 1) < Sb.level ? Bb.j.cursor(wb.side(!Gb, hb) + bb.from, wb.forward(Gb, hb) ? 1 : -1, wb.level) : Bb.j.cursor(Hb + bb.from, Sb.forward(Gb, hb) ? -1 : 1, Sb.level)
    }

    function zu(bb, ub, hb) {
      for (let Bb = ub; Bb < hb; Bb++) {
        let ub = Au(bb.charCodeAt(Bb));
        if (1 == ub) return au;
        if (2 == ub || 4 == ub) return Hu
      }
      return au
    }
    const gu = Bb.n.define(),
      iu = Bb.n.define(),
      vu = Bb.n.define(),
      tu = Bb.n.define(),
      Ju = Bb.n.define(),
      eu = Bb.n.define(),
      Nu = Bb.n.define(),
      su = Bb.n.define(),
      Mu = Bb.n.define(),
      mu = Bb.n.define({
        combine: bb => bb.some((bb => bb))
      }),
      Iu = Bb.n.define({
        combine: bb => bb.some((bb => bb))
      }),
      Pu = Bb.n.define();
    class qu {
      constructor(bb, ub, hb, Bb, Ob) {
        let Gb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = bb, this.y = ub, this.x = hb, this.yMargin = Bb, this.xMargin = Ob, this.isSnapshot = Gb
      }
      map(bb) {
        return bb.empty ? this : new qu(this.range.map(bb), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(bb) {
        return this.range.to <= bb.doc.length ? this : new qu(Bb.j.cursor(bb.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const Eu = Bb.D.define({
        map: (bb, ub) => bb.map(ub)
      }),
      yu = Bb.D.define();

    function Vu(bb, ub, hb) {
      let Bb = bb.facet(tu);
      Bb.length ? Bb[0](ub) : window.onerror && window.onerror(String(ub), hb, void 0, void 0, ub) || (hb ? console.error(hb + ":", ub) : console.error(ub))
    }
    const Fu = Bb.n.define({
      combine: bb => !bb.length || bb[0]
    });
    let fu = 0;
    const ku = Bb.n.define({
      combine: bb => bb.filter(((ub, hb) => {
        for (let Bb = 0; Bb < hb; Bb++)
          if (bb[Bb].plugin == ub.plugin) return !1;
        return !0
      }))
    });
    class Tu {
      constructor(bb, ub, hb, Bb, Ob) {
        this.id = bb, this.create = ub, this.domEventHandlers = hb, this.domEventObservers = Bb, this.baseExtensions = Ob(this), this.extension = this.baseExtensions.concat(ku.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(bb) {
        return this.baseExtensions.concat(ku.of({
          plugin: this,
          arg: bb
        }))
      }
      static define(bb, ub) {
        const {
          eventHandlers: hb,
          eventObservers: Bb,
          provide: Ob,
          ZG: Gb
        } = ub || {};
        return new Tu(fu++, bb, hb, Bb, (bb => {
          let ub = [];
          return Gb && ub.push(bh.of((ub => {
            let hb = ub.plugin(bb);
            return hb ? Gb(hb) : vb.none
          }))), Ob && ub.push(Ob(bb)), ub
        }))
      }
      static fromClass(bb, ub) {
        return Tu.define(((ub, hb) => new bb(ub, hb)), ub)
      }
    }
    class cu {
      constructor(bb) {
        this.spec = bb, this.mustUpdate = null, this.value = null
      }
      get plugin() {
        return this.spec && this.spec.plugin
      }
      update(bb) {
        if (this.value) {
          if (this.mustUpdate) {
            let bb = this.mustUpdate;
            if (this.mustUpdate = null, this.value.update) try {
              this.value.update(bb)
            } catch (ub) {
              if (Vu(bb.state, ub, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (hb) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(bb, this.spec.arg)
        } catch (ub) {
          Vu(bb.state, ub, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(bb) {
        var ub;
        if (null === (ub = this.value) || void 0 === ub ? void 0 : ub.destroy) try {
          this.value.destroy()
        } catch (hb) {
          Vu(bb.state, hb, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const Qu = Bb.n.define(),
      Ru = Bb.n.define(),
      bh = Bb.n.define(),
      uh = Bb.n.define(),
      hh = Bb.n.define(),
      Bh = Bb.n.define(),
      Oh = Bb.n.define();

    function Gh(bb, ub) {
      let hb = bb.state.facet(Oh);
      if (!hb.length) return hb;
      let Ob = hb.map((ub => ub instanceof Function ? ub(bb) : ub)),
        Gb = [];
      return Bb.x.spans(Ob, ub.from, ub.to, {
        point() {},
        span(bb, hb, Bb, Ob) {
          let Ub = bb - ub.from,
            Lb = hb - ub.from,
            Yb = Gb;
          for (let Gb = Bb.length - 1; Gb >= 0; Gb--, Ob--) {
            let bb, hb = Bb[Gb].spec.bidiIsolate;
            if (null == hb && (hb = zu(ub.text, Ub, Lb)), Ob > 0 && Yb.length && (bb = Yb[Yb.length - 1]).to == Ub && bb.direction == hb) bb.to = Lb, Yb = bb.inner;
            else {
              let bb = {
                from: Ub,
                to: Lb,
                direction: hb,
                inner: []
              };
              Yb.push(bb), Yb = bb.inner
            }
          }
        }
      }), Gb
    }
    const Uh = Bb.n.define();

    function Lh(bb) {
      let ub = 0,
        hb = 0,
        Bb = 0,
        Ob = 0;
      for (let Gb of bb.state.facet(Uh)) {
        let Ub = Gb(bb);
        Ub && (null != Ub.left && (ub = Math.max(ub, Ub.left)), null != Ub.right && (hb = Math.max(hb, Ub.right)), null != Ub.top && (Bb = Math.max(Bb, Ub.top)), null != Ub.bottom && (Ob = Math.max(Ob, Ub.bottom)))
      }
      return {
        left: ub,
        right: hb,
        top: Bb,
        bottom: Ob
      }
    }
    const Yh = Bb.n.define();
    class Sh {
      constructor(bb, ub, hb, Bb) {
        this.fromA = bb, this.toA = ub, this.fromB = hb, this.toB = Bb
      }
      join(bb) {
        return new Sh(Math.min(this.fromA, bb.fromA), Math.max(this.toA, bb.toA), Math.min(this.fromB, bb.fromB), Math.max(this.toB, bb.toB))
      }
      addToSet(bb) {
        let ub = bb.length,
          hb = this;
        for (; ub > 0; ub--) {
          let Bb = bb[ub - 1];
          if (!(Bb.fromA > hb.toA)) {
            if (Bb.toA < hb.fromA) break;
            hb = hb.join(Bb), bb.splice(ub - 1, 1)
          }
        }
        return bb.splice(ub, 0, hb), bb
      }
      static extendWithRanges(bb, ub) {
        if (0 == ub.length) return bb;
        let hb = [];
        for (let Bb = 0, Ob = 0, Gb = 0;;) {
          let Ub = Bb < bb.length ? bb[Bb].fromB : 1e9,
            Lb = Ob < ub.length ? ub[Ob] : 1e9,
            Yb = Math.min(Ub, Lb);
          if (1e9 == Yb) break;
          let Sb = Yb + Gb,
            ab = Yb,
            Hb = Sb;
          for (;;)
            if (Ob < ub.length && ub[Ob] <= ab) {
              let hb = ub[Ob + 1];
              Ob += 2, ab = Math.max(ab, hb);
              for (let ub = Bb; ub < bb.length && bb[ub].fromB <= ab; ub++) Gb = bb[ub].toA - bb[ub].toB;
              Hb = Math.max(Hb, hb + Gb)
            } else {
              if (!(Bb < bb.length && bb[Bb].fromB <= ab)) break;
              {
                let ub = bb[Bb++];
                ab = Math.max(ab, ub.toB), Hb = Math.max(Hb, ub.toA), Gb = ub.toA - ub.toB
              }
            } hb.push(new Sh(Sb, Hb, Yb, ab))
        }
        return hb
      }
    }
    class ah {
      constructor(bb, ub, hb) {
        this.view = bb, this.state = ub, this.transactions = hb, this.flags = 0, this.startState = bb.state, this.changes = Bb.ChangeSet.empty(this.startState.doc.length);
        for (let Bb of hb) this.changes = this.changes.compose(Bb.changes);
        let Ob = [];
        this.changes.iterChangedRanges(((bb, ub, hb, Bb) => Ob.push(new Sh(bb, ub, hb, Bb)))), this.changedRanges = Ob
      }
      static create(bb, ub, hb) {
        return new ah(bb, ub, hb)
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
        return this.transactions.some((bb => bb.selection))
      }
      get empty() {
        return 0 == this.flags && 0 == this.transactions.length
      }
    }
    const Hh = [];
    class wh {
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = bb, this.length = ub, this.flags = hb, this.parent = null, bb.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return Hh
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
      sync(bb) {
        if (this.flags |= 2, 4 & this.flags) {
          this.flags &= -5;
          let bb = this.domAttrs;
          bb && function(bb, ub) {
            for (let hb = bb.attributes.length - 1; hb >= 0; hb--) {
              let Bb = bb.attributes[hb].name;
              null == ub[Bb] && bb.removeAttribute(Bb)
            }
            for (let hb in ub) {
              let Bb = ub[hb];
              "style" == hb ? bb.style.cssText = Bb : bb.getAttribute(hb) != Bb && bb.setAttribute(hb, Bb)
            }
          }(this.dom, bb)
        }
      }
      toString() {
        return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "")
      }
      destroy() {
        this.parent = null
      }
      setDOM(bb) {
        this.dom = bb, bb.cmTile = this
      }
      get posAtStart() {
        return this.parent ? this.parent.posBefore(this) : 0
      }
      get posAtEnd() {
        return this.posAtStart + this.length
      }
      posBefore(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let hb of this.children) {
          if (hb == bb) return ub;
          ub += hb.length + hb.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(bb) {
        return this.posBefore(bb) + bb.length
      }
      covers(bb) {
        return !0
      }
      coordsIn(bb, ub) {
        return null
      }
      domPosFor(bb, ub) {
        let hb = yb(this.dom),
          Bb = this.length ? bb > 0 : ub > 0;
        return new Yu(this.parent.dom, hb + (Bb ? 1 : 0), 0 == bb || bb == this.length)
      }
      markDirty(bb) {
        this.flags &= -3, bb && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let bb = this; bb; bb = bb.parent)
          if (bb instanceof ph) return bb;
        return null
      }
      static get(bb) {
        return bb.cmTile
      }
    }
    class Zh extends wh {
      constructor(bb) {
        super(bb, 0), this._children = []
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
      append(bb) {
        this.children.push(bb), bb.parent = this
      }
      sync(bb) {
        if (2 & this.flags) return;
        super.sync(bb);
        let ub, hb = this.dom,
          Bb = null,
          Ob = (null === bb || void 0 === bb ? void 0 : bb.node) == hb ? bb : null,
          Gb = 0;
        for (let Ub of this.children) {
          if (Ub.sync(bb), Gb += Ub.length + Ub.breakAfter, ub = Bb ? Bb.nextSibling : hb.firstChild, Ob && ub != Ub.dom && (Ob.written = !0), Ub.dom.parentNode == hb)
            for (; ub && ub != Ub.dom;) ub = Xh(ub);
          else hb.insertBefore(Ub.dom, ub);
          Bb = Ub.dom
        }
        for (ub = Bb ? Bb.nextSibling : hb.firstChild, Ob && ub && (Ob.written = !0); ub;) ub = Xh(ub);
        this.length = Gb
      }
    }

    function Xh(bb) {
      let ub = bb.nextSibling;
      return bb.parentNode.removeChild(bb), ub
    }
    class ph extends Zh {
      constructor(bb, ub) {
        super(ub), this.view = bb
      }
      owns(bb) {
        for (; bb; bb = bb.parent)
          if (bb == this) return !0;
        return !1
      }
      isBlock() {
        return !0
      }
      nearest(bb) {
        for (;;) {
          if (!bb) return null;
          let ub = wh.get(bb);
          if (ub && this.owns(ub)) return ub;
          bb = bb.parentNode
        }
      }
      blockTiles(bb) {
        for (let ub = [], hb = this, Bb = 0, Ob = 0;;)
          if (Bb == hb.children.length) {
            if (!ub.length) return;
            hb = hb.parent, hb.breakAfter && Ob++, Bb = ub.pop()
          } else {
            let Gb = hb.children[Bb++];
            if (Gb instanceof oh) ub.push(Bb), hb = Gb, Bb = 0;
            else {
              let ub = Ob + Gb.length,
                hb = bb(Gb, Ob);
              if (void 0 !== hb) return hb;
              Ob = ub + Gb.breakAfter
            }
          }
      }
      resolveBlock(bb, ub) {
        let hb, Bb, Ob = -1,
          Gb = -1;
        if (this.blockTiles(((Ub, Lb) => {
            let Yb = Lb + Ub.length;
            if (bb >= Lb && bb <= Yb) {
              if (Ub.isWidget() && ub >= -1 && ub <= 1) {
                if (32 & Ub.flags) return !0;
                16 & Ub.flags && (hb = void 0)
              }(Lb < bb || bb == Yb && (ub < -1 ? Ub.length : Ub.covers(1))) && (!hb || !Ub.isWidget() && hb.isWidget()) && (hb = Ub, Ob = bb - Lb), (Yb > bb || bb == Lb && (ub > 1 ? Ub.length : Ub.covers(-1))) && (!Bb || !Ub.isWidget() && Bb.isWidget()) && (Bb = Ub, Gb = bb - Lb)
            }
          })), !hb && !Bb) throw new Error("No tile at position " + bb);
        return hb && ub < 0 || !Bb ? {
          tile: hb,
          offset: Ob
        } : {
          tile: Bb,
          offset: Gb
        }
      }
    }
    class oh extends Zh {
      constructor(bb, ub) {
        super(bb), this.wrapper = ub
      }
      isBlock() {
        return !0
      }
      covers(bb) {
        return !!this.children.length && (bb < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1))
      }
      get domAttrs() {
        return this.wrapper.attributes
      }
      static of (bb, ub) {
        let hb = new oh(ub || document.createElement(bb.tagName), bb);
        return ub || (hb.flags |= 4), hb
      }
    }
    class Ah extends Zh {
      constructor(bb, ub) {
        super(bb), this.attrs = ub
      }
      isLine() {
        return !0
      }
      static start(bb, ub, hb) {
        let Bb = new Ah(ub || document.createElement("div"), bb);
        return ub && hb || (Bb.flags |= 4), Bb
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(bb, ub, hb) {
        let Bb = null,
          Ob = -1,
          Gb = null,
          Ub = -1;
        ! function bb(Lb, Yb) {
          for (let Sb = 0, ab = 0; Sb < Lb.children.length && ab <= Yb; Sb++) {
            let Hb = Lb.children[Sb],
              wb = ab + Hb.length;
            wb >= Yb && (Hb.isComposite() ? bb(Hb, Yb - ab) : (!Gb || Gb.isHidden && (ub > 0 || hb && lh(Gb, Hb))) && (wb > Yb || 32 & Hb.flags) ? (Gb = Hb, Ub = Yb - ab) : (ab < Yb || 16 & Hb.flags && !Hb.isHidden) && (Bb = Hb, Ob = Yb - ab)), ab = wb
          }
        }(this, bb);
        let Lb = (ub < 0 ? Bb : Gb) || Bb || Gb;
        return Lb ? {
          tile: Lb,
          offset: Lb == Bb ? Ob : Ub
        } : null
      }
      coordsIn(bb, ub) {
        let hb = this.resolveInline(bb, ub, !0);
        return hb ? hb.tile.coordsIn(Math.max(0, hb.offset), ub) : function(bb) {
          let ub = bb.dom.lastChild;
          if (!ub) return bb.dom.getBoundingClientRect();
          let hb = qb(ub);
          return hb[hb.length - 1] || null
        }(this)
      }
      domIn(bb, ub) {
        let hb = this.resolveInline(bb, ub);
        if (hb) {
          let {
            tile: bb,
            offset: Bb
          } = hb;
          if (this.dom.contains(bb.dom)) return bb.isText() ? new Yu(bb.dom, Math.min(bb.dom.nodeValue.length, Bb)) : bb.domPosFor(Bb, 16 & bb.flags ? 1 : 32 & bb.flags ? -1 : ub);
          let Ob = hb.tile.parent,
            Gb = !1;
          for (let ub of Ob.children) {
            if (Gb) return new Yu(ub.dom, 0);
            ub == hb.tile && (Gb = !0)
          }
        }
        return new Yu(this.dom, 0)
      }
    }

    function lh(bb, ub) {
      let hb = bb.coordsIn(0, 1),
        Bb = ub.coordsIn(0, 1);
      return hb && Bb && Bb.top < hb.bottom
    }
    class Kh extends Zh {
      constructor(bb, ub) {
        super(bb), this.mark = ub
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (bb, ub) {
        let hb = new Kh(ub || document.createElement(bb.tagName), bb);
        return ub || (hb.flags |= 4), hb
      }
    }
    class Wh extends wh {
      constructor(bb, ub) {
        super(bb, ub.length), this.text = ub
      }
      sync(bb) {
        2 & this.flags || (super.sync(bb), this.dom.nodeValue != this.text && (bb && bb.node == this.dom && (bb.written = !0), this.dom.nodeValue = this.text))
      }
      isText() {
        return !0
      }
      toString() {
        return JSON.stringify(this.text)
      }
      coordsIn(bb, ub) {
        let hb = this.dom.nodeValue.length;
        bb > hb && (bb = hb);
        let Bb = bb,
          Ob = bb,
          Gb = 0;
        0 == bb && ub < 0 || bb == hb && ub >= 0 ? rb.chrome || rb.gecko || (bb ? (Bb--, Gb = 1) : Ob < hb && (Ob++, Gb = -1)) : ub < 0 ? Bb-- : Ob < hb && Ob++;
        let Ub = Bu(this.dom, Bb, Ob).getClientRects();
        if (!Ub.length) return null;
        let Lb = Ub[(Gb ? Gb < 0 : ub >= 0) ? 0 : Ub.length - 1];
        return rb.safari && !Gb && 0 == Lb.width && (Lb = Array.prototype.find.call(Ub, (bb => bb.width)) || Lb), Gb ? kb(Lb, Gb < 0) : Lb || null
      }
      static of (bb, ub) {
        let hb = new Wh(ub || document.createTextNode(bb), bb);
        return ub || (hb.flags |= 2), hb
      }
    }
    class Ch extends wh {
      constructor(bb, ub, hb, Bb) {
        super(bb, ub, Bb), this.widget = hb
      }
      isWidget() {
        return !0
      }
      get isHidden() {
        return this.widget.isHidden
      }
      covers(bb) {
        return !(48 & this.flags) && (this.flags & (bb < 0 ? 64 : 128)) > 0
      }
      coordsIn(bb, ub) {
        return this.coordsInWidget(bb, ub, !1)
      }
      coordsInWidget(bb, ub, hb) {
        let Bb = this.widget.coordsAt(this.dom, bb, ub);
        if (Bb) return Bb;
        if (hb) return kb(this.dom.getBoundingClientRect(), this.length ? 0 == bb : ub <= 0);
        {
          let ub = this.dom.getClientRects(),
            hb = null;
          if (!ub.length) return null;
          let Bb = !!(16 & this.flags) || !(32 & this.flags) && bb > 0;
          for (let Ob = Bb ? ub.length - 1 : 0; hb = ub[Ob], !(bb > 0 ? 0 == Ob : Ob == ub.length - 1 || hb.top < hb.bottom); Ob += Bb ? -1 : 1);
          return kb(hb, !Bb)
        }
      }
      get overrideDOMText() {
        if (!this.length) return Bb.K.empty;
        let {
          root: bb
        } = this;
        if (!bb) return Bb.K.empty;
        let ub = this.posAtStart;
        return bb.view.state.doc.slice(ub, ub + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (bb, ub, hb, Bb, Ob) {
        return Ob || (Ob = bb.toDOM(ub), bb.editable || (Ob.contentEditable = "false")), new Ch(Ob, hb, bb, Bb)
      }
    }
    class dh extends wh {
      constructor(bb) {
        let ub = document.createElement("img");
        ub.className = "cm-widgetBuffer", ub.setAttribute("aria-hidden", "true"), super(ub, 0, bb)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return Bb.K.empty
      }
      coordsIn(bb) {
        return this.dom.getBoundingClientRect()
      }
    }
    class rh {
      constructor(bb) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = bb
      }
      advance(bb, ub, hb) {
        let {
          tile: Bb,
          index: Ob,
          beforeBreak: Gb,
          parents: Ub
        } = this;
        for (; bb || ub > 0;)
          if (Bb.isComposite())
            if (Gb) {
              if (!bb) break;
              hb && hb.break(), bb--, Gb = !1
            } else if (Ob == Bb.children.length) {
          if (!bb && !Ub.length) break;
          hb && hb.leave(Bb), Gb = !!Bb.breakAfter, ({
            tile: Bb,
            index: Ob
          } = Ub.pop()), Ob++
        } else {
          let Lb = Bb.children[Ob],
            Yb = Lb.breakAfter;
          !(ub > 0 ? Lb.length <= bb : Lb.length < bb) || hb && !1 === hb.skip(Lb, 0, Lb.length) && Lb.isComposite ? (Ub.push({
            tile: Bb,
            index: Ob
          }), Bb = Lb, Ob = 0, hb && Lb.isComposite() && hb.enter(Lb)) : (Gb = !!Yb, Ob++, bb -= Lb.length)
        } else if (Ob == Bb.length) Gb = !!Bb.breakAfter, ({
          tile: Bb,
          index: Ob
        } = Ub.pop()), Ob++;
        else {
          if (!bb) break;
          {
            let ub = Math.min(bb, Bb.length - Ob);
            hb && hb.skip(Bb, Ob, Ob + ub), bb -= ub, Ob += ub
          }
        }
        return this.tile = Bb, this.index = Ob, this.beforeBreak = Gb, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class jh {
      constructor(bb, ub, hb, Bb) {
        this.from = bb, this.to = ub, this.wrapper = hb, this.rank = Bb
      }
    }
    class nh {
      constructor(bb, ub, hb) {
        this.cache = bb, this.root = ub, this.blockWrappers = hb, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(bb, ub, hb, Bb) {
        var Ob;
        this.flushBuffer();
        let Gb = this.ensureMarks(ub, hb),
          Ub = Gb.lastChild;
        if (Ub && Ub.isText() && !(8 & Ub.flags) && Ub.length + bb.length < 512) {
          this.cache.reused.set(Ub, 2), (Gb.children[Gb.children.length - 1] = new Wh(Ub.dom, Ub.text + bb)).parent = Gb
        } else Gb.append(Bb || Wh.of(bb, null === (Ob = this.cache.find(Wh)) || void 0 === Ob ? void 0 : Ob.dom));
        this.pos += bb.length, this.afterWidget = null
      }
      addComposition(bb, ub) {
        let hb = this.curLine;
        hb.dom != ub.line.dom && (hb.setDOM(this.cache.reused.has(ub.line) ? th(ub.line.dom) : ub.line.dom), this.cache.reused.set(ub.line, 2));
        let Bb = hb;
        for (let Ub = ub.marks.length - 1; Ub >= 0; Ub--) {
          let bb = ub.marks[Ub],
            hb = Bb.lastChild;
          if (hb instanceof Kh && hb.mark.eq(bb.mark)) hb.dom != bb.dom && hb.setDOM(th(bb.dom)), Bb = hb;
          else {
            if (this.cache.reused.get(bb)) {
              let ub = wh.get(bb.dom);
              ub && ub.setDOM(th(bb.dom))
            }
            let ub = Kh.of(bb.mark, bb.dom);
            Bb.append(ub), Bb = ub
          }
          this.cache.reused.set(bb, 2)
        }
        let Ob = wh.get(bb.text);
        Ob && this.cache.reused.set(Ob, 2);
        let Gb = new Wh(bb.text, bb.text.nodeValue);
        Gb.flags |= 8, Bb.append(Gb)
      }
      addInlineWidget(bb, ub, hb) {
        let Bb = this.afterWidget && 48 & bb.flags && (48 & this.afterWidget.flags) == (48 & bb.flags);
        Bb || this.flushBuffer();
        let Ob = this.ensureMarks(ub, hb);
        Bb || 16 & bb.flags || Ob.append(this.getBuffer(1)), Ob.append(bb), this.pos += bb.length, this.afterWidget = bb
      }
      addMark(bb, ub, hb) {
        this.flushBuffer(), this.ensureMarks(ub, hb).append(bb), this.pos += bb.length, this.afterWidget = null
      }
      addBlockWidget(bb) {
        this.getBlockPos().append(bb), this.pos += bb.length, this.lastBlock = bb, this.endLine()
      }
      continueWidget(bb) {
        (this.afterWidget || this.lastBlock).length += bb, this.pos += bb
      }
      addLineStart(bb, ub) {
        var hb;
        bb || (bb = vh);
        let Bb = Ah.start(bb, ub || (null === (hb = this.cache.find(Ah)) || void 0 === hb ? void 0 : hb.dom), !!ub);
        this.getBlockPos().append(this.lastBlock = this.curLine = Bb)
      }
      addLine(bb) {
        this.getBlockPos().append(bb), this.pos += bb.length, this.lastBlock = bb, this.endLine()
      }
      addBreak() {
        this.lastBlock.flags |= 1, this.endLine(), this.pos++
      }
      addLineStartIfNotCovered(bb) {
        this.blockPosCovered() || this.addLineStart(bb)
      }
      ensureLine(bb) {
        this.curLine || this.addLineStart(bb)
      }
      ensureMarks(bb, ub) {
        var hb;
        let Bb = this.curLine;
        for (let Ob = bb.length - 1; Ob >= 0; Ob--) {
          let Gb, Ub = bb[Ob];
          if (ub > 0 && (Gb = Bb.lastChild) && Gb instanceof Kh && Gb.mark.eq(Ub)) Bb = Gb, ub--;
          else {
            let bb = Kh.of(Ub, null === (hb = this.cache.find(Kh, (bb => bb.mark.eq(Ub)))) || void 0 === hb ? void 0 : hb.dom);
            Bb.append(bb), Bb = bb, ub = 0
          }
        }
        return Bb
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let bb = this.curLine.lastChild;
          bb && ih(this.curLine, !1) && ("BR" == bb.dom.nodeName || !bb.isWidget() || rb.ios && ih(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(eh, 0, 32) || new Ch(eh.toDOM(), 0, eh, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let bb = this.wrappers.length - 1; bb >= 0; bb--) this.wrappers[bb].to < this.pos && this.wrappers.splice(bb, 1);
        for (let bb = this.blockWrappers; bb.value && bb.from <= this.pos; bb.next())
          if (bb.to >= this.pos) {
            let ub = new jh(bb.from, bb.to, bb.value, bb.rank),
              hb = this.wrappers.length;
            for (; hb > 0 && (this.wrappers[hb - 1].rank - ub.rank || this.wrappers[hb - 1].to - ub.to) < 0;) hb--;
            this.wrappers.splice(hb, 0, ub)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var bb;
        this.updateBlockWrappers();
        let ub = this.root;
        for (let hb of this.wrappers) {
          let Bb = ub.lastChild;
          if (hb.from < this.pos && Bb instanceof oh && Bb.wrapper.eq(hb.wrapper)) ub = Bb;
          else {
            let Bb = oh.of(hb.wrapper, null === (bb = this.cache.find(oh, (bb => bb.wrapper.eq(hb.wrapper)))) || void 0 === bb ? void 0 : bb.dom);
            ub.append(Bb), ub = Bb
          }
        }
        return ub
      }
      blockPosCovered() {
        let bb = this.lastBlock;
        return null != bb && !bb.breakAfter && (!bb.isWidget() || (160 & bb.flags) > 0)
      }
      getBuffer(bb) {
        let ub = 2 | (bb < 0 ? 16 : 32),
          hb = this.cache.find(dh, void 0, 1);
        return hb && (hb.flags = ub), hb || new dh(ub)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class Dh {
      constructor(bb) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = bb.iter()
      }
      skip(bb) {
        this.textOff + bb <= this.text.length ? this.textOff += bb : (this.skipCount += bb - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(bb) {
        if (this.textOff == this.text.length) {
          let {
            value: ub,
            lineBreak: hb,
            done: Bb
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, Bb) throw new Error("Ran out of text content when drawing inline views");
          this.text = ub;
          let Ob = this.textOff = Math.min(bb, ub.length);
          return hb ? null : ub.slice(0, Ob)
        }
        let ub = Math.min(this.text.length, this.textOff + bb),
          hb = this.text.slice(this.textOff, ub);
        return this.textOff = ub, hb
      }
    }
    const xh = [Ch, Ah, Wh, Kh, dh, oh, ph];
    for (let iU = 0; iU < xh.length; iU++) xh[iU].bucket = iU;
    class zh {
      constructor(bb) {
        this.view = bb, this.buckets = xh.map((() => [])), this.index = xh.map((() => 0)), this.reused = new Map
      }
      add(bb) {
        let ub = bb.constructor.bucket,
          hb = this.buckets[ub];
        hb.length < 6 ? hb.push(bb) : hb[this.index[ub] = (this.index[ub] + 1) % 6] = bb
      }
      find(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          Bb = bb.bucket,
          Ob = this.buckets[Bb],
          Gb = this.index[Bb];
        for (let Ub = Ob.length - 1; Ub >= 0; Ub--) {
          let bb = (Ub + Gb) % Ob.length,
            Lb = Ob[bb];
          if ((!ub || ub(Lb)) && !this.reused.has(Lb)) return Ob.splice(bb, 1), bb < Gb && this.index[Bb]--, this.reused.set(Lb, hb), Lb
        }
        return null
      }
      findWidget(bb, ub, hb) {
        let Bb = this.buckets[0];
        if (Bb.length)
          for (let Ob = 0, Gb = 0;; Ob++) {
            if (Ob == Bb.length) {
              if (Gb) return null;
              Gb = 1, Ob = 0
            }
            let Ub = Bb[Ob];
            if (!this.reused.has(Ub) && (0 == Gb ? Ub.widget.compare(bb) : Ub.widget.constructor == bb.constructor && bb.updateDOM(Ub.dom, this.view, Ub.widget))) return Bb.splice(Ob, 1), Ob < this.index[0] && this.index[0]--, Ub.widget == bb && Ub.length == ub && (497 & Ub.flags) == hb ? (this.reused.set(Ub, 1), Ub) : (this.reused.set(Ub, 2), new Ch(Ub.dom, ub, bb, -498 & Ub.flags | hb))
          }
      }
      reuse(bb) {
        return this.reused.set(bb, 1), bb
      }
      maybeReuse(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(bb)) return this.reused.set(bb, ub), bb.dom
      }
      clear() {
        for (let bb = 0; bb < this.buckets.length; bb++) this.buckets[bb].length = this.index[bb] = 0
      }
    }
    class gh {
      constructor(bb, ub, hb, Ob, Gb) {
        this.view = bb, this.ZG = Ob, this.disallowBlockEffectsFor = Gb, this.openWidget = !1, this.openMarks = 0, this.cache = new zh(bb), this.text = new Dh(bb.state.doc), this.builder = new nh(this.cache, new ph(bb, bb.contentDOM), Bb.x.iter(hb)), this.cache.reused.set(ub, 2), this.old = new rh(ub), this.reuseWalker = {
          skip: (bb, ub, hb) => {
            if (this.cache.add(bb), bb.isComposite()) return !1
          },
          enter: bb => this.cache.add(bb),
          leave: () => {},
          break: () => {}
        }
      }
      run(bb, ub) {
        let hb = ub && this.getCompositionContext(ub.text);
        for (let Bb = 0, Ob = 0, Gb = 0;;) {
          let Ub = Gb < bb.length ? bb[Gb++] : null,
            Lb = Ub ? Ub.fromA : this.old.root.length;
          if (Lb > Bb) {
            let bb = Lb - Bb;
            this.preserve(bb, !Gb, !Ub), Bb = Lb, Ob += bb
          }
          if (!Ub) break;
          ub && Ub.fromA <= ub.range.fromA && Ub.toA >= ub.range.toA ? (this.forward(Ub.fromA, ub.range.fromA, ub.range.fromA < ub.range.toA ? 1 : -1), this.emit(Ob, ub.range.fromB), this.cache.clear(), this.builder.addComposition(ub, hb), this.text.skip(ub.range.toB - ub.range.fromB), this.forward(ub.range.fromA, Ub.toA), this.emit(ub.range.toB, Ub.toB)) : (this.forward(Ub.fromA, Ub.toA), this.emit(Ob, Ub.toB)), Ob = Ub.toB, Bb = Ub.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(bb, ub, hb) {
        let Bb = function(bb) {
            let ub = [];
            for (let hb = bb.parents.length; hb > 1; hb--) {
              let Bb = hb == bb.parents.length ? bb.tile : bb.parents[hb].tile;
              Bb instanceof Kh && ub.push(Bb.mark)
            }
            return ub
          }(this.old),
          Ob = this.openMarks;
        this.old.advance(bb, hb ? 1 : -1, {
          skip: (bb, ub, hb) => {
            if (bb.isWidget())
              if (this.openWidget) this.builder.continueWidget(hb - ub);
              else {
                let Gb = hb > 0 || ub < bb.length ? Ch.of(bb.widget, this.view, hb - ub, 496 & bb.flags, this.cache.maybeReuse(bb)) : this.cache.reuse(bb);
                256 & Gb.flags ? (Gb.flags &= -2, this.builder.addBlockWidget(Gb)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(Gb, Bb, Ob), Ob = Bb.length)
              }
            else if (bb.isText()) this.builder.ensureLine(null), ub || hb != bb.length || this.cache.reused.has(bb) ? (this.cache.add(bb), this.builder.addText(bb.text.slice(ub, hb), Bb, Ob)) : this.builder.addText(bb.text, Bb, Ob, this.cache.reuse(bb)), Ob = Bb.length;
            else if (bb.isLine()) bb.flags &= -2, this.cache.reused.set(bb, 1), this.builder.addLine(bb);
            else if (bb instanceof dh) this.cache.add(bb);
            else {
              if (!(bb instanceof Kh)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(bb, Bb, Ob), this.cache.reused.set(bb, 1), Ob = Bb.length
            }
            this.openWidget = !1
          },
          enter: bb => {
            bb.isLine() ? this.builder.addLineStart(bb.attrs, this.cache.maybeReuse(bb)) : (this.cache.add(bb), bb instanceof Kh && Bb.unshift(bb.mark)), this.openWidget = !1
          },
          leave: bb => {
            bb.isLine() ? Bb.length && (Bb.length = Ob = 0) : bb instanceof Kh && (Bb.shift(), Ob = Math.min(Ob, Bb.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(bb)
      }
      emit(bb, ub) {
        let hb = null,
          Ob = this.builder,
          Gb = 0,
          Ub = Bb.x.spans(this.ZG, bb, ub, {
            point: (bb, ub, Bb, Ub, Lb, Yb) => {
              if (Bb instanceof eb) {
                if (this.disallowBlockEffectsFor[Yb]) {
                  if (Bb.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (ub > this.view.state.doc.lineAt(bb).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (Gb = Ub.length, Lb > Ub.length) Ob.continueWidget(ub - bb);
                else {
                  let Gb = Bb.widget || (Bb.block ? Jh.block : Jh.inline),
                    Yb = function(bb) {
                      let ub = bb.isReplace ? (bb.startSide < 0 ? 64 : 0) | (bb.endSide > 0 ? 128 : 0) : bb.startSide > 0 ? 32 : 16;
                      bb.block && (ub |= 256);
                      return ub
                    }(Bb),
                    Sb = this.cache.findWidget(Gb, ub - bb, Yb) || Ch.of(Gb, this.view, ub - bb, Yb);
                  Bb.block ? (Bb.startSide > 0 && Ob.addLineStartIfNotCovered(hb), Ob.addBlockWidget(Sb)) : (Ob.ensureLine(hb), Ob.addInlineWidget(Sb, Ub, Lb))
                }
                hb = null
              } else hb = function(bb, ub) {
                let hb = ub.spec.attributes,
                  Bb = ub.spec.class;
                if (!hb && !Bb) return bb;
                bb || (bb = {
                  class: "cm-line"
                });
                hb && jb(hb, bb);
                Bb && (bb.class += " " + Bb);
                return bb
              }(hb, Bb);
              ub > bb && this.text.skip(ub - bb)
            },
            span: (bb, ub, Bb, Gb) => {
              for (let Ub = bb; Ub < ub;) {
                let Lb = this.text.next(Math.min(512, ub - Ub));
                null == Lb ? (Ob.addLineStartIfNotCovered(hb), Ob.addBreak(), Ub++) : (Ob.ensureLine(hb), Ob.addText(Lb, Bb, Ub == bb ? Gb : Bb.length), Ub += Lb.length), hb = null
              }
            }
          });
        Ob.addLineStartIfNotCovered(hb), this.openWidget = Ub > Gb, this.openMarks = Ub
      }
      forward(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        ub - bb <= 10 ? this.old.advance(ub - bb, hb, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(ub - bb - 10, -1), this.old.advance(5, hb, this.reuseWalker))
      }
      getCompositionContext(bb) {
        let ub = [],
          hb = null;
        for (let Bb = bb.parentNode;; Bb = Bb.parentNode) {
          let bb = wh.get(Bb);
          if (Bb == this.view.contentDOM) break;
          bb instanceof Kh ? ub.push(bb) : (null === bb || void 0 === bb ? void 0 : bb.isLine()) ? hb = bb : bb instanceof oh || ("DIV" != Bb.nodeName || hb || Bb == this.view.contentDOM ? hb || ub.push(Kh.of(new tb({
            tagName: Bb.nodeName.toLowerCase(),
            attributes: zb(Bb)
          }), Bb)) : hb = new Ah(Bb, vh))
        }
        return {
          line: hb,
          marks: ub
        }
      }
    }

    function ih(bb, ub) {
      let hb = bb => {
        for (let Bb of bb.children)
          if ((ub ? Bb.isText() : Bb.length) || hb(Bb)) return !0;
        return !1
      };
      return hb(bb)
    }
    const vh = {
      class: "cm-line"
    };

    function th(bb) {
      let ub = wh.get(bb);
      return ub && ub.setDOM(bb.cloneNode()), bb
    }
    class Jh extends gb {
      constructor(bb) {
        super(), this.tag = bb
      }
      eq(bb) {
        return bb.tag == this.tag
      }
      toDOM() {
        return document.createElement(this.tag)
      }
      updateDOM(bb) {
        return bb.nodeName.toLowerCase() == this.tag
      }
      get isHidden() {
        return !0
      }
    }
    Jh.inline = new Jh("span"), Jh.block = new Jh("div");
    const eh = new class extends gb {
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
    class Nh {
      constructor(bb) {
        this.view = bb, this.ZG = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = vb.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new ph(bb, bb.contentDOM), this.updateInner([new Sh(0, 0, 0, bb.state.doc.length)], null)
      }
      update(bb) {
        var ub;
        let hb = bb.changedRanges;
        this.minWidth > 0 && hb.length && (hb.every((bb => {
          let {
            fromA: ub,
            toA: hb
          } = bb;
          return hb < this.minWidthFrom || ub > this.minWidthTo
        })) ? (this.minWidthFrom = bb.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = bb.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(bb);
        let Ob = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (ub = this.domChanged) || void 0 === ub ? void 0 : ub.newSel) ? Ob = this.domChanged.newSel.head : function(bb, ub) {
          let hb = !1;
          ub && bb.iterChangedRanges(((bb, Bb) => {
            bb < ub.to && Bb > ub.from && (hb = !0)
          }));
          return hb
        }(bb.changes, this.hasComposition) || bb.selectionSet || (Ob = bb.state.selection.main.head));
        let Gb = Ob > -1 ? function(bb, ub, hb) {
          let Bb = Mh(bb, hb);
          if (!Bb) return null;
          let {
            node: Ob,
            from: Gb,
            to: Ub
          } = Bb, Lb = Ob.nodeValue;
          if (/[\n\r]/.test(Lb)) return null;
          if (bb.state.doc.sliceString(Bb.from, Bb.to) != Lb) return null;
          let Yb = ub.invertedDesc;
          return {
            range: new Sh(Yb.mapPos(Gb), Yb.mapPos(Ub), Gb, Ub),
            text: Ob
          }
        }(this.view, bb.changes, Ob) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: ub,
            to: Bb
          } = this.hasComposition;
          hb = new Sh(ub, Bb, bb.changes.mapPos(ub, -1), bb.changes.mapPos(Bb, 1)).addToSet(hb.slice())
        }
        this.hasComposition = Gb ? {
          from: Gb.range.fromB,
          to: Gb.range.toB
        } : null, (rb.ie || rb.chrome) && !Gb && bb && bb.state.doc.lines != bb.startState.doc.lines && (this.forceSelection = !0);
        let Ub = this.ZG,
          Lb = this.blockWrappers;
        this.updateDeco();
        let Yb = function(bb, ub, hb) {
          let Ob = new mh;
          return Bb.x.compare(bb, ub, hb, Ob), Ob.changes
        }(Ub, this.ZG, bb.changes);
        Yb.length && (hb = Sh.extendWithRanges(hb, Yb));
        let Sb = function(bb, ub, hb) {
          let Ob = new Ih;
          return Bb.x.compare(bb, ub, hb, Ob), Ob.changes
        }(Lb, this.blockWrappers, bb.changes);
        return Sb.length && (hb = Sh.extendWithRanges(hb, Sb)), Gb && !hb.some((bb => bb.fromA <= Gb.range.fromA && bb.toA >= Gb.range.toA)) && (hb = Gb.range.addToSet(hb.slice())), !(2 & this.tile.flags && 0 == hb.length) && (this.updateInner(hb, Gb), bb.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(bb, ub) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: hb
        } = this.view;
        hb.ignore((() => {
          if (ub || bb.length) {
            let hb = this.tile,
              Bb = new gh(this.view, hb, this.blockWrappers, this.ZG, this.dynamicDecorationMap);
            ub && wh.get(ub.text) && Bb.cache.reused.set(wh.get(ub.text), 2), this.tile = Bb.run(bb, ub), sh(hb, Bb.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let Bb = rb.chrome || rb.ios ? {
            node: hb.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(Bb), !Bb || !Bb.written && hb.selectionRange.focusNode == Bb.node && this.tile.dom.contains(Bb.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let Bb = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let Ob of this.tile.children) Ob.isWidget() && Ob.widget instanceof Ph && Bb.push(Ob.dom);
        hb.updateGaps(Bb)
      }
      updateEditContextFormatting(bb) {
        this.editContextFormatting = this.editContextFormatting.map(bb.changes);
        for (let ub of bb.transactions)
          for (let bb of ub.effects) bb.is(yu) && (this.editContextFormatting = bb.value)
      }
      updateSelection() {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: ub
        } = this.tile, hb = this.view.root.activeElement, Bb = hb == ub, Ob = !Bb && !(this.view.state.facet(Fu) || ub.tabIndex > -1) && Pb(ub, this.view.observer.selectionRange) && !(hb && ub.contains(hb));
        if (!(Bb || bb || Ob)) return;
        let Gb = this.forceSelection;
        this.forceSelection = !1;
        let Ub, Lb, Yb = this.view.state.selection.main;
        if (Yb.empty ? Lb = Ub = this.inlineDOMNearPos(Yb.anchor, Yb.assoc || 1) : (Lb = this.inlineDOMNearPos(Yb.head, Yb.head == Yb.from ? 1 : -1), Ub = this.inlineDOMNearPos(Yb.anchor, Yb.anchor == Yb.from ? 1 : -1)), rb.gecko && Yb.empty && !this.hasComposition && (1 == (Sb = Ub).node.nodeType && Sb.node.firstChild && (0 == Sb.offset || "false" == Sb.node.childNodes[Sb.offset - 1].contentEditable) && (Sb.offset == Sb.node.childNodes.length || "false" == Sb.node.childNodes[Sb.offset].contentEditable))) {
          let bb = document.createTextNode("");
          this.view.observer.ignore((() => Ub.node.insertBefore(bb, Ub.node.childNodes[Ub.offset] || null))), Ub = Lb = new Yu(bb, 0), Gb = !0
        }
        var Sb;
        let ab = this.view.observer.selectionRange;
        !Gb && ab.focusNode && (Eb(Ub.node, Ub.offset, ab.anchorNode, ab.anchorOffset) && Eb(Lb.node, Lb.offset, ab.focusNode, ab.focusOffset) || this.suppressWidgetCursorChange(ab, Yb)) || (this.view.observer.ignore((() => {
          rb.android && rb.chrome && ub.contains(ab.focusNode) && function(bb, ub) {
            for (let hb = bb; hb && hb != ub; hb = hb.assignedSlot || hb.parentNode)
              if (1 == hb.nodeType && "false" == hb.contentEditable) return !0;
            return !1
          }(ab.focusNode, ub) && (ub.blur(), ub.focus({
            preventScroll: !0
          }));
          let bb = mb(this.view.root);
          if (bb)
            if (Yb.empty) {
              if (rb.gecko) {
                let bb = (Bb = Ub.node, Gb = Ub.offset, 1 != Bb.nodeType ? 0 : (Gb && "false" == Bb.childNodes[Gb - 1].contentEditable ? 1 : 0) | (Gb < Bb.childNodes.length && "false" == Bb.childNodes[Gb].contentEditable ? 2 : 0));
                if (bb && 3 != bb) {
                  let ub = (1 == bb ? Uu : Lu)(Ub.node, Ub.offset);
                  ub && (Ub = new Yu(ub.node, ub.offset))
                }
              }
              bb.collapse(Ub.node, Ub.offset), null != Yb.bidiLevel && void 0 !== bb.caretBidiLevel && (bb.caretBidiLevel = Yb.bidiLevel)
            } else if (bb.extend) {
            bb.collapse(Ub.node, Ub.offset);
            try {
              bb.extend(Lb.node, Lb.offset)
            } catch (Sb) {}
          } else {
            let ub = document.createRange();
            Yb.anchor > Yb.head && ([Ub, Lb] = [Lb, Ub]), ub.setEnd(Lb.node, Lb.offset), ub.setStart(Ub.node, Ub.offset), bb.removeAllRanges(), bb.addRange(ub)
          } else;
          var Bb, Gb;
          Ob && this.view.root.activeElement == ub && (ub.blur(), hb && hb.focus())
        })), this.view.observer.setSelectionRange(Ub, Lb)), this.impreciseAnchor = Ub.precise ? null : new Yu(ab.anchorNode, ab.anchorOffset), this.impreciseHead = Lb.precise ? null : new Yu(ab.focusNode, ab.focusOffset)
      }
      suppressWidgetCursorChange(bb, ub) {
        return this.hasComposition && ub.empty && Eb(bb.focusNode, bb.focusOffset, bb.anchorNode, bb.anchorOffset) && this.posFromDOM(bb.focusNode, bb.focusOffset) == ub.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: bb
        } = this, ub = bb.state.selection.main, hb = mb(bb.root), {
          anchorNode: Bb,
          anchorOffset: Ob
        } = bb.observer.selectionRange;
        if (!hb || !ub.empty || !ub.assoc || !hb.modify) return;
        let Gb = this.lineAt(ub.head, ub.assoc);
        if (!Gb) return;
        let Ub = Gb.posAtStart;
        if (ub.head == Ub || ub.head == Ub + Gb.length) return;
        let Lb = this.coordsAt(ub.head, -1),
          Yb = this.coordsAt(ub.head, 1);
        if (!Lb || !Yb || Lb.bottom > Yb.top) return;
        let Sb = this.domAtPos(ub.head + ub.assoc, ub.assoc);
        hb.collapse(Sb.node, Sb.offset), hb.modify("move", ub.assoc < 0 ? "forward" : "backward", "lineboundary"), bb.observer.readSelectionRange();
        let ab = bb.observer.selectionRange;
        bb.docView.posFromDOM(ab.anchorNode, ab.anchorOffset) != ub.from && hb.collapse(Bb, Ob)
      }
      posFromDOM(bb, ub) {
        let hb = this.tile.nearest(bb);
        if (!hb) return 2 & this.tile.dom.compareDocumentPosition(bb) ? 0 : this.view.state.doc.length;
        let Bb = hb.posAtStart;
        if (!hb.isComposite()) return hb.isText() ? bb == hb.dom ? Bb + ub : Bb + (ub ? hb.length : 0) : Bb;
        {
          let Ob;
          if (bb == hb.dom) Ob = hb.dom.childNodes[ub];
          else {
            let Bb = 0 == fb(bb) ? 0 : 0 == ub ? -1 : 1;
            for (;;) {
              let ub = bb.parentNode;
              if (ub == hb.dom) break;
              0 == Bb && ub.firstChild != ub.lastChild && (Bb = bb == ub.firstChild ? -1 : 1), bb = ub
            }
            Ob = Bb < 0 ? bb : bb.nextSibling
          }
          if (Ob == hb.dom.firstChild) return Bb;
          for (; Ob && !wh.get(Ob);) Ob = Ob.nextSibling;
          if (!Ob) return Bb + hb.length;
          for (let bb = 0, ub = Bb;; bb++) {
            let Bb = hb.children[bb];
            if (Bb.dom == Ob) return ub;
            ub += Bb.length + Bb.breakAfter
          }
        }
      }
      domAtPos(bb, ub) {
        let {
          tile: hb,
          offset: Bb
        } = this.tile.resolveBlock(bb, ub);
        return hb.isWidget() ? hb.domPosFor(bb, ub) : hb.domIn(Bb, ub)
      }
      inlineDOMNearPos(bb, ub) {
        let hb, Bb, Ob = -1,
          Gb = !1,
          Ub = -1,
          Lb = !1;
        return this.tile.blockTiles(((ub, Yb) => {
          if (ub.isWidget()) {
            if (32 & ub.flags && Yb >= bb) return !0;
            16 & ub.flags && (Gb = !0)
          } else {
            let Sb = Yb + ub.length;
            if (Yb <= bb && (hb = ub, Ob = bb - Yb, Gb = Sb < bb), Sb >= bb && !Bb && (Bb = ub, Ub = bb - Yb, Lb = Yb > bb), Yb > bb && Bb) return !0
          }
        })), hb || Bb ? (Gb && Bb ? hb = null : Lb && hb && (Bb = null), hb && ub < 0 || !Bb ? hb.domIn(Ob, ub) : Bb.domIn(Ub, ub)) : this.domAtPos(bb, ub)
      }
      coordsAt(bb, ub) {
        let {
          tile: hb,
          offset: Bb
        } = this.tile.resolveBlock(bb, ub);
        return hb.isWidget() ? hb.widget instanceof Ph ? null : hb.coordsInWidget(Bb, ub, !0) : hb.coordsIn(Bb, ub)
      }
      lineAt(bb, ub) {
        let {
          tile: hb
        } = this.tile.resolveBlock(bb, ub);
        return hb.isLine() ? hb : null
      }
      coordsForChar(bb) {
        let {
          tile: ub,
          offset: hb
        } = this.tile.resolveBlock(bb, 1);
        if (!ub.isLine()) return null;
        return function bb(ub, hb) {
          if (ub.isComposite())
            for (let Bb of ub.children) {
              if (Bb.length >= hb) {
                let ub = bb(Bb, hb);
                if (ub) return ub
              }
              if ((hb -= Bb.length) < 0) break
            } else if (ub.isText() && hb < ub.length) {
              let bb = (0, Bb._)(ub.text, hb);
              if (bb == hb) return null;
              let Ob = Bu(ub.dom, hb, bb).getClientRects();
              for (let ub = 0; ub < Ob.length; ub++) {
                let bb = Ob[ub];
                if (ub == Ob.length - 1 || bb.top < bb.bottom && bb.left < bb.right) return bb
              }
            } return null
        }(ub, hb)
      }
      measureVisibleLineHeights(bb) {
        let ub = [],
          {
            from: hb,
            to: Bb
          } = bb,
          Ob = this.view.contentDOM.clientWidth,
          Gb = Ob > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          Ub = -1,
          Lb = this.view.textDirection == Su.LTR,
          Yb = 0,
          Sb = (bb, ab, Hb) => {
            for (let wb = 0; wb < bb.children.length && !(ab > Bb); wb++) {
              let Bb = bb.children[wb],
                Zb = ab + Bb.length,
                Xb = Bb.dom.getBoundingClientRect(),
                {
                  height: pb
                } = Xb;
              if (Hb && !wb && (Yb += Xb.top - Hb.top), Bb instanceof oh) Zb > hb && Sb(Bb, ab, Xb);
              else if (ab >= hb && (Yb > 0 && ub.push(-Yb), ub.push(pb + Yb), Yb = 0, Gb)) {
                let bb = Bb.dom.lastChild,
                  ub = bb ? qb(bb) : [];
                if (ub.length) {
                  let bb = ub[ub.length - 1],
                    hb = Lb ? bb.right - Xb.left : Xb.right - bb.left;
                  hb > Ub && (Ub = hb, this.minWidth = Ob, this.minWidthFrom = ab, this.minWidthTo = Zb)
                }
              }
              Hb && wb == bb.children.length - 1 && (Yb += Hb.bottom - Xb.bottom), ab = Zb + Bb.breakAfter
            }
          };
        return Sb(this.tile, 0, null), ub
      }
      textDirectionAt(bb) {
        let {
          tile: ub
        } = this.tile.resolveBlock(bb, 1);
        return "rtl" == getComputedStyle(ub.dom).direction ? Su.RTL : Su.LTR
      }
      measureTextSize() {
        let bb = this.tile.blockTiles((bb => {
          if (bb.isLine() && bb.children.length && bb.length <= 20) {
            let ub, hb = 0;
            for (let Bb of bb.children) {
              if (!Bb.isText() || /[^ -~]/.test(Bb.text)) return;
              let bb = qb(Bb.dom);
              if (1 != bb.length) return;
              hb += bb[0].width, ub = bb[0].height
            }
            if (hb) return {
              lineHeight: bb.dom.getBoundingClientRect().height,
              charWidth: hb / bb.length,
              textHeight: ub
            }
          }
        }));
        if (bb) return bb;
        let ub, hb, Bb, Ob = document.createElement("div");
        return Ob.className = "cm-line", Ob.style.width = "99999px", Ob.style.position = "absolute", Ob.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(Ob);
          let bb = qb(Ob.firstChild)[0];
          ub = Ob.getBoundingClientRect().height, hb = bb && bb.width ? bb.width / 27 : 7, Bb = bb && bb.height ? bb.height : ub, Ob.remove()
        })), {
          lineHeight: ub,
          charWidth: hb,
          textHeight: Bb
        }
      }
      computeBlockGapDeco() {
        let bb = [],
          ub = this.view.viewState;
        for (let hb = 0, Bb = 0;; Bb++) {
          let Ob = Bb == ub.viewports.length ? null : ub.viewports[Bb],
            Gb = Ob ? Ob.from - 1 : this.view.state.doc.length;
          if (Gb > hb) {
            let Bb = (ub.lineBlockAt(Gb).bottom - ub.lineBlockAt(hb).top) / this.view.scaleY;
            bb.push(vb.replace({
              widget: new Ph(Bb),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(hb, Gb))
          }
          if (!Ob) break;
          hb = Ob.to + 1
        }
        return vb.set(bb)
      }
      updateDeco() {
        let bb = 1,
          ub = this.view.state.facet(bh).map((ub => (this.dynamicDecorationMap[bb++] = "function" == typeof ub) ? ub(this.view) : ub)),
          hb = !1,
          Ob = this.view.state.facet(hh).map(((bb, ub) => {
            let Bb = "function" == typeof bb;
            return Bb && (hb = !0), Bb ? bb(this.view) : bb
          }));
        for (Ob.length && (this.dynamicDecorationMap[bb++] = hb, ub.push(Bb.x.join(Ob))), this.ZG = [this.editContextFormatting, ...ub, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; bb < this.ZG.length;) this.dynamicDecorationMap[bb++] = !1;
        this.blockWrappers = this.view.state.facet(uh).map((bb => "function" == typeof bb ? bb(this.view) : bb))
      }
      scrollIntoView(bb) {
        var ub;
        if (bb.isSnapshot) {
          let ub = this.view.viewState.lineBlockAt(bb.range.head);
          return this.view.scrollDOM.scrollTop = ub.top - bb.yMargin, void(this.view.scrollDOM.scrollLeft = bb.xMargin)
        }
        for (let ab of this.view.state.facet(Pu)) try {
          if (ab(this.view, bb.range, bb)) return !0
        } catch (Sb) {
          Vu(this.view.state, Sb, "scroll handler")
        }
        let hb, {
            range: Bb
          } = bb,
          Ob = this.coordsAt(Bb.head, null !== (ub = Bb.assoc) && void 0 !== ub ? ub : Bb.empty ? 0 : Bb.head > Bb.anchor ? -1 : 1);
        if (!Ob) return;
        !Bb.empty && (hb = this.coordsAt(Bb.anchor, Bb.anchor > Bb.head ? -1 : 1)) && (Ob = {
          left: Math.min(Ob.left, hb.left),
          top: Math.min(Ob.top, hb.top),
          right: Math.max(Ob.right, hb.right),
          bottom: Math.max(Ob.bottom, hb.bottom)
        });
        let Gb = Lh(this.view),
          Ub = {
            left: Ob.left - Gb.left,
            top: Ob.top - Gb.top,
            right: Ob.right + Gb.right,
            bottom: Ob.bottom + Gb.bottom
          },
          {
            offsetWidth: Lb,
            offsetHeight: Yb
          } = this.view.scrollDOM;
        if (function(bb, ub, hb, Bb, Ob, Gb, Ub, Lb) {
            let Yb = bb.ownerDocument,
              Sb = Yb.defaultView || window;
            for (let ab = bb, Hb = !1; ab && !Hb;)
              if (1 == ab.nodeType) {
                let bb, wb = ab == Yb.body,
                  Zb = 1,
                  Xb = 1;
                if (wb) bb = Tb(Sb);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(ab).position) && (Hb = !0), ab.scrollHeight <= ab.clientHeight && ab.scrollWidth <= ab.clientWidth) {
                    ab = ab.assignedSlot || ab.parentNode;
                    continue
                  }
                  let ub = ab.getBoundingClientRect();
                  ({
                    scaleX: Zb,
                    scaleY: Xb
                  } = cb(ab, ub)), bb = {
                    left: ub.left,
                    right: ub.left + ab.clientWidth * Zb,
                    top: ub.top,
                    bottom: ub.top + ab.clientHeight * Xb
                  }
                }
                let pb = 0,
                  ob = 0;
                if ("nearest" == Ob) ub.top < bb.top + Ub ? (ob = ub.top - (bb.top + Ub), hb > 0 && ub.bottom > bb.bottom + ob && (ob = ub.bottom - bb.bottom + Ub)) : ub.bottom > bb.bottom - Ub && (ob = ub.bottom - bb.bottom + Ub, hb < 0 && ub.top - ob < bb.top && (ob = ub.top - (bb.top + Ub)));
                else {
                  let Bb = ub.bottom - ub.top,
                    Gb = bb.bottom - bb.top;
                  ob = ("center" == Ob && Bb <= Gb ? ub.top + Bb / 2 - Gb / 2 : "start" == Ob || "center" == Ob && hb < 0 ? ub.top - Ub : ub.bottom - Gb + Ub) - bb.top
                }
                if ("nearest" == Bb ? ub.left < bb.left + Gb ? (pb = ub.left - (bb.left + Gb), hb > 0 && ub.right > bb.right + pb && (pb = ub.right - bb.right + Gb)) : ub.right > bb.right - Gb && (pb = ub.right - bb.right + Gb, hb < 0 && ub.left < bb.left + pb && (pb = ub.left - (bb.left + Gb))) : pb = ("center" == Bb ? ub.left + (ub.right - ub.left) / 2 - (bb.right - bb.left) / 2 : "start" == Bb == Lb ? ub.left - Gb : ub.right - (bb.right - bb.left) + Gb) - bb.left, pb || ob)
                  if (wb) Sb.scrollBy(pb, ob);
                  else {
                    let bb = 0,
                      hb = 0;
                    if (ob) {
                      let bb = ab.scrollTop;
                      ab.scrollTop += ob / Xb, hb = (ab.scrollTop - bb) * Xb
                    }
                    if (pb) {
                      let ub = ab.scrollLeft;
                      ab.scrollLeft += pb / Zb, bb = (ab.scrollLeft - ub) * Zb
                    }
                    ub = {
                      left: ub.left - bb,
                      top: ub.top - hb,
                      right: ub.right - bb,
                      bottom: ub.bottom - hb
                    }, bb && Math.abs(bb - pb) < 1 && (Bb = "nearest"), hb && Math.abs(hb - ob) < 1 && (Ob = "nearest")
                  } if (wb) break;
                (ub.top < bb.top || ub.bottom > bb.bottom || ub.left < bb.left || ub.right > bb.right) && (ub = {
                  left: Math.max(ub.left, bb.left),
                  right: Math.min(ub.right, bb.right),
                  top: Math.max(ub.top, bb.top),
                  bottom: Math.min(ub.bottom, bb.bottom)
                }), ab = ab.assignedSlot || ab.parentNode
              } else {
                if (11 != ab.nodeType) break;
                ab = ab.host
              }
          }(this.view.scrollDOM, Ub, Bb.head < Bb.anchor ? -1 : 1, bb.x, bb.y, Math.max(Math.min(bb.xMargin, Lb), -Lb), Math.max(Math.min(bb.yMargin, Yb), -Yb), this.view.textDirection == Su.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (Ob.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || Ob.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let bb = this.view.docView.lineAt(Bb.head, 1);
          bb && bb.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(bb) {
        let ub = bb => bb.isWidget() || bb.children.some(ub);
        return ub(this.tile.resolveBlock(bb, 1).tile)
      }
      destroy() {
        sh(this.tile)
      }
    }

    function sh(bb, ub) {
      let hb = null === ub || void 0 === ub ? void 0 : ub.get(bb);
      if (1 != hb) {
        null == hb && bb.destroy();
        for (let hb of bb.children) sh(hb, ub)
      }
    }

    function Mh(bb, ub) {
      let hb = bb.observer.selectionRange;
      if (!hb.focusNode) return null;
      let Bb = Uu(hb.focusNode, hb.focusOffset),
        Ob = Lu(hb.focusNode, hb.focusOffset),
        Gb = Bb || Ob;
      if (Ob && Bb && Ob.node != Bb.node) {
        let ub = wh.get(Ob.node);
        if (!ub || ub.isText() && ub.text != Ob.node.nodeValue) Gb = Ob;
        else if (bb.docView.lastCompositionAfterCursor) {
          let bb = wh.get(Bb.node);
          !bb || bb.isText() && bb.text != Bb.node.nodeValue || (Gb = Ob)
        }
      }
      if (bb.docView.lastCompositionAfterCursor = Gb != Bb, !Gb) return null;
      let Ub = ub - Gb.offset;
      return {
        from: Ub,
        to: Ub + Gb.node.nodeValue.length,
        node: Gb.node
      }
    }
    let mh = class {
      constructor() {
        this.changes = []
      }
      compareRange(bb, ub) {
        sb(bb, ub, this.changes)
      }
      comparePoint(bb, ub) {
        sb(bb, ub, this.changes)
      }
      boundChange(bb) {
        sb(bb, bb, this.changes)
      }
    };
    class Ih {
      constructor() {
        this.changes = []
      }
      compareRange(bb, ub) {
        sb(bb, ub, this.changes)
      }
      comparePoint() {}
      boundChange(bb) {
        sb(bb, bb, this.changes)
      }
    }
    class Ph extends gb {
      constructor(bb) {
        super(), this.height = bb
      }
      toDOM() {
        let bb = document.createElement("div");
        return bb.className = "cm-gap", this.updateDOM(bb), bb
      }
      eq(bb) {
        return bb.height == this.height
      }
      updateDOM(bb) {
        return bb.style.height = this.height + "px", !0
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

    function qh(bb, ub, hb) {
      let Bb = bb.lineBlockAt(ub);
      if (Array.isArray(Bb.type)) {
        let bb;
        for (let Ob of Bb.type) {
          if (Ob.from > ub) break;
          if (!(Ob.to < ub)) {
            if (Ob.from < ub && Ob.to > ub) return Ob;
            bb && (Ob.type != ib.Text || bb.type == Ob.type && !(hb < 0 ? Ob.from < ub : Ob.to > ub)) || (bb = Ob)
          }
        }
        return bb || Bb
      }
      return Bb
    }

    function Eh(bb, ub, hb, Bb) {
      let Ob = bb.state.doc.lineAt(ub.head),
        Gb = bb.bidiSpans(Ob),
        Ub = bb.textDirectionAt(Ob.from);
      for (let Lb = ub, Yb = null;;) {
        let ub = xu(Ob, Gb, Ub, Lb, hb),
          Sb = Du;
        if (!ub) {
          if (Ob.number == (hb ? bb.state.doc.lines : 1)) return Lb;
          Sb = "\n", Ob = bb.state.doc.line(Ob.number + (hb ? 1 : -1)), Gb = bb.bidiSpans(Ob), ub = bb.visualLineSide(Ob, !hb)
        }
        if (Yb) {
          if (!Yb(Sb)) return Lb
        } else {
          if (!Bb) return ub;
          Yb = Bb(Sb)
        }
        Lb = ub
      }
    }

    function yh(bb, ub, hb) {
      for (;;) {
        let Bb = 0;
        for (let Ob of bb) Ob.between(ub - 1, ub + 1, ((bb, Ob, Gb) => {
          if (ub > bb && ub < Ob) {
            let Gb = Bb || hb || (ub - bb < Ob - ub ? -1 : 1);
            ub = Gb < 0 ? bb : Ob, Bb = Gb
          }
        }));
        if (!Bb) return ub
      }
    }

    function Vh(bb, ub) {
      let hb = null;
      for (let Ob = 0; Ob < ub.tp.length; Ob++) {
        let Gb = ub.tp[Ob],
          Ub = null;
        if (Gb.empty) {
          let ub = yh(bb, Gb.from, 0);
          ub != Gb.from && (Ub = Bb.j.cursor(ub, -1))
        } else {
          let ub = yh(bb, Gb.from, -1),
            hb = yh(bb, Gb.to, 1);
          ub == Gb.from && hb == Gb.to || (Ub = Bb.j.range(Gb.from == Gb.anchor ? ub : hb, Gb.from == Gb.head ? ub : hb))
        }
        Ub && (hb || (hb = ub.tp.slice()), hb[Ob] = Ub)
      }
      return hb ? Bb.j.create(hb, ub.mainIndex) : ub
    }

    function Fh(bb, ub, hb) {
      let Ob = yh(bb.state.facet(Bh).map((ub => ub(bb))), hb.from, ub.head > hb.from ? -1 : 1);
      return Ob == hb.from ? hb : Bb.j.cursor(Ob, Ob < hb.from ? 1 : -1)
    }
    class fh {
      constructor(bb, ub) {
        this.pos = bb, this.assoc = ub
      }
    }

    function kh(bb, ub, hb, Ob) {
      let Gb, Ub = bb.contentDOM.getBoundingClientRect(),
        Lb = Ub.top + bb.viewState.paddingTop,
        {
          x: Yb,
          y: Sb
        } = ub,
        ab = Sb - Lb;
      for (;;) {
        if (ab < 0) return new fh(0, 1);
        if (ab > bb.viewState.docHeight) return new fh(bb.state.doc.length, -1);
        if (Gb = bb.elementAtHeight(ab), null == Ob) break;
        if (Gb.type == ib.Text) {
          if (Ob < 0 ? Gb.to < bb.viewport.from : Gb.from > bb.viewport.to) break;
          let ub = bb.docView.coordsAt(Ob < 0 ? Gb.from : Gb.to, Ob > 0 ? -1 : 1);
          if (ub && (Ob < 0 ? ub.top <= ab + Lb : ub.bottom >= ab + Lb)) break
        }
        let ub = bb.viewState.heightOracle.textHeight / 2;
        ab = Ob > 0 ? Gb.bottom + ub : Gb.top - ub
      }
      if (bb.viewport.from >= Gb.to || bb.viewport.to <= Gb.from) {
        if (hb) return null;
        if (Gb.type == ib.Text) {
          let ub = function(bb, ub, hb, Ob, Gb) {
            let Ub = Math.round((Ob - ub.left) * bb.defaultCharacterWidth);
            if (bb.lineWrapping && hb.height > 1.5 * bb.defaultLineHeight) {
              let ub = bb.viewState.heightOracle.textHeight;
              Ub += Math.floor((Gb - hb.top - .5 * (bb.defaultLineHeight - ub)) / ub) * bb.viewState.heightOracle.lineLength
            }
            let Lb = bb.state.sliceDoc(hb.from, hb.to);
            return hb.from + (0, Bb.$)(Lb, Ub, bb.state.tabSize)
          }(bb, Ub, Gb, Yb, Sb);
          return new fh(ub, ub == Gb.from ? 1 : -1)
        }
      }
      if (Gb.type != ib.Text) return ab < (Gb.top + Gb.bottom) / 2 ? new fh(Gb.from, 1) : new fh(Gb.to, -1);
      let Hb = bb.docView.lineAt(Gb.from, 2);
      return Hb && Hb.length == Gb.length || (Hb = bb.docView.lineAt(Gb.from, -2)), new Th(bb, Yb, Sb, bb.textDirectionAt(Gb.from)).scanTile(Hb, Gb.from)
    }
    class Th {
      constructor(bb, ub, hb, Bb) {
        this.view = bb, this.x = ub, this.y = hb, this.baseDir = Bb, this.line = null, this.spans = null
      }
      bidiSpansAt(bb) {
        return (!this.line || this.line.from > bb || this.line.to < bb) && (this.line = this.view.state.doc.lineAt(bb), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(bb, ub) {
        let {
          line: hb,
          spans: Bb
        } = this.bidiSpansAt(bb);
        return Bb[Ku.find(Bb, bb - hb.from, -1, ub)].level == this.baseDir
      }
      dirAt(bb, ub) {
        let {
          line: hb,
          spans: Bb
        } = this.bidiSpansAt(bb);
        return Bb[Ku.find(Bb, bb - hb.from, -1, ub)].dir
      }
      bidiIn(bb, ub) {
        let {
          spans: hb,
          line: Bb
        } = this.bidiSpansAt(bb);
        return hb.length > 1 || hb.length && (hb[0].level != this.baseDir || hb[0].to + Bb.from < ub)
      }
      scan(bb, ub) {
        let hb, Bb, Ob, Gb = 0,
          Ub = bb.length - 1,
          Lb = new Set,
          Yb = this.bidiIn(bb[0], bb[Ub]),
          Sb = -1,
          ab = 1e9;
        bb: for (; Gb < Ub;) {
          let Hb = Ub - Gb,
            wb = Gb + Ub >> 1;
          ub: if (Lb.has(wb)) {
            let bb = Gb + Math.floor(Math.random() * Hb);
            for (let ub = 0; ub < Hb; ub++) {
              if (!Lb.has(bb)) {
                wb = bb;
                break ub
              }
              bb++, bb == Ub && (bb = Gb)
            }
            break bb
          } Lb.add(wb);
          let Zb = ub(wb);
          if (Zb)
            for (let ub = 0; ub < Zb.length; ub++) {
              let Lb = Zb[ub],
                Hb = 0;
              if (!(0 == Lb.width && Zb.length > 1)) {
                if (Lb.bottom < this.y)(!hb || hb.bottom < Lb.bottom) && (hb = Lb), Hb = 1;
                else if (Lb.top > this.y)(!Bb || Bb.top > Lb.top) && (Bb = Lb), Hb = -1;
                else {
                  let bb = Lb.left > this.x ? this.x - Lb.left : Lb.right < this.x ? this.x - Lb.right : 0,
                    ub = Math.abs(bb);
                  ub < ab && (Sb = wb, ab = ub, Ob = Lb), bb && (Hb = bb < 0 == (this.baseDir == Su.LTR) ? -1 : 1)
                } - 1 != Hb || Yb && !this.baseDirAt(bb[wb], 1) ? 1 != Hb || Yb && !this.baseDirAt(bb[wb + 1], -1) || (Gb = wb + 1) : Ub = wb
              }
            }
        }
        if (!Ob) {
          let Ob = hb && (!Bb || this.y - hb.bottom < Bb.top - this.y) ? hb : Bb;
          return this.y = (Ob.top + Ob.bottom) / 2, this.scan(bb, ub)
        }
        if (ab) {
          if (hb && hb.bottom > Ob.top) return this.y = hb.bottom - 1, this.scan(bb, ub);
          if (Bb && Bb.top < Ob.bottom) return this.y = Bb.top + 1, this.scan(bb, ub)
        }
        let Hb = (Yb ? this.dirAt(bb[Sb], 1) : this.baseDir) == Su.LTR;
        return {
          i: Sb,
          after: this.x > (Ob.left + Ob.right) / 2 == Hb
        }
      }
      scanText(bb, ub) {
        let hb = [];
        for (let Gb = 0; Gb < bb.length; Gb = (0, Bb._)(bb.text, Gb)) hb.push(ub + Gb);
        hb.push(ub + bb.length);
        let Ob = this.scan(hb, (Bb => {
          let Ob = hb[Bb] - ub,
            Gb = hb[Bb + 1] - ub;
          return Bu(bb.dom, Ob, Gb).getClientRects()
        }));
        return Ob.after ? new fh(hb[Ob.i + 1], -1) : new fh(hb[Ob.i], 1)
      }
      scanTile(bb, ub) {
        if (!bb.length) return new fh(ub, 1);
        if (1 == bb.children.length) {
          let hb = bb.children[0];
          if (hb.isText()) return this.scanText(hb, ub);
          if (hb.isComposite()) return this.scanTile(hb, ub)
        }
        let hb = [ub];
        for (let Ub = 0, Lb = ub; Ub < bb.children.length; Ub++) hb.push(Lb += bb.children[Ub].length);
        let Bb = this.scan(hb, (ub => {
            let hb = bb.children[ub];
            return 48 & hb.flags ? null : (1 == hb.dom.nodeType ? hb.dom : Bu(hb.dom, 0, hb.length)).getClientRects()
          })),
          Ob = bb.children[Bb.i],
          Gb = hb[Bb.i];
        return Ob.isText() ? this.scanText(Ob, Gb) : Ob.isComposite() ? this.scanTile(Ob, Gb) : Bb.after ? new fh(hb[Bb.i + 1], -1) : new fh(Gb, 1)
      }
    }
    const ch = "\uffff";
    class Qh {
      constructor(bb, ub) {
        this.points = bb, this.view = ub, this.text = "", this.lineSeparator = ub.state.facet(Bb.k.lineSeparator)
      }
      append(bb) {
        this.text += bb
      }
      lineBreak() {
        this.text += ch
      }
      readRange(bb, ub) {
        if (!bb) return this;
        let hb = bb.parentNode;
        for (let Bb = bb;;) {
          this.findPointBefore(hb, Bb);
          let bb = this.text.length;
          this.readNode(Bb);
          let Ob = wh.get(Bb),
            Gb = Bb.nextSibling;
          if (Gb == ub) {
            (null === Ob || void 0 === Ob ? void 0 : Ob.breakAfter) && !Gb && hb != this.view.contentDOM && this.lineBreak();
            break
          }
          let Ub = wh.get(Gb);
          (Ob && Ub ? Ob.breakAfter : (Ob ? Ob.breakAfter : Vb(Bb)) || Vb(Gb) && ("BR" != Bb.nodeName || (null === Ob || void 0 === Ob ? void 0 : Ob.isWidget())) && this.text.length > bb) && !bB(Gb, ub) && this.lineBreak(), Bb = Gb
        }
        return this.findPointBefore(hb, ub), this
      }
      readTextNode(bb) {
        let ub = bb.nodeValue;
        for (let hb of this.points) hb.node == bb && (hb.pos = this.text.length + Math.min(hb.offset, ub.length));
        for (let hb = 0, Bb = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let Ob, Gb = -1,
            Ub = 1;
          if (this.lineSeparator ? (Gb = ub.indexOf(this.lineSeparator, hb), Ub = this.lineSeparator.length) : (Ob = Bb.exec(ub)) && (Gb = Ob.index, Ub = Ob[0].length), this.append(ub.slice(hb, Gb < 0 ? ub.length : Gb)), Gb < 0) break;
          if (this.lineBreak(), Ub > 1)
            for (let ub of this.points) ub.node == bb && ub.pos > this.text.length && (ub.pos -= Ub - 1);
          hb = Gb + Ub
        }
      }
      readNode(bb) {
        let ub = wh.get(bb),
          hb = ub && ub.overrideDOMText;
        if (null != hb) {
          this.findPointInside(bb, hb.length);
          for (let bb = hb.iter(); !bb.next().done;) bb.lineBreak ? this.lineBreak() : this.append(bb.value)
        } else 3 == bb.nodeType ? this.readTextNode(bb) : "BR" == bb.nodeName ? bb.nextSibling && this.lineBreak() : 1 == bb.nodeType && this.readRange(bb.firstChild, null)
      }
      findPointBefore(bb, ub) {
        for (let hb of this.points) hb.node == bb && bb.childNodes[hb.offset] == ub && (hb.pos = this.text.length)
      }
      findPointInside(bb, ub) {
        for (let hb of this.points)(3 == bb.nodeType ? hb.node == bb : bb.contains(hb.node)) && (hb.pos = this.text.length + (Rh(bb, hb.node, hb.offset) ? ub : 0))
      }
    }

    function Rh(bb, ub, hb) {
      for (;;) {
        if (!ub || hb < fb(ub)) return !1;
        if (ub == bb) return !0;
        hb = yb(ub) + 1, ub = ub.parentNode
      }
    }

    function bB(bb, ub) {
      let hb;
      for (; bb != ub && bb; bb = bb.nextSibling) {
        let ub = wh.get(bb);
        if (!(null === ub || void 0 === ub ? void 0 : ub.isWidget())) return !1;
        ub && (hb || (hb = [])).push(ub)
      }
      if (hb)
        for (let Bb of hb) {
          let bb = Bb.overrideDOMText;
          if (null === bb || void 0 === bb ? void 0 : bb.length) return !1
        }
      return !0
    }
    class uB {
      constructor(bb, ub) {
        this.node = bb, this.offset = ub, this.pos = -1
      }
    }
    class hB {
      constructor(bb, ub, hb, Ob) {
        this.typeOver = Ob, this.bounds = null, this.text = "", this.domChanged = ub > -1;
        let {
          impreciseHead: Gb,
          impreciseAnchor: Ub
        } = bb.docView, Lb = bb.state.selection;
        if (bb.state.readOnly && ub > -1) this.newSel = null;
        else if (ub > -1 && (this.bounds = BB(bb.docView.tile, ub, hb, 0))) {
          let ub = Gb || Ub ? [] : function(bb) {
              let ub = [];
              if (bb.root.activeElement != bb.contentDOM) return ub;
              let {
                anchorNode: hb,
                anchorOffset: Bb,
                focusNode: Ob,
                focusOffset: Gb
              } = bb.observer.selectionRange;
              hb && (ub.push(new uB(hb, Bb)), Ob == hb && Gb == Bb || ub.push(new uB(Ob, Gb)));
              return ub
            }(bb),
            hb = new Qh(ub, bb);
          hb.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = hb.text, this.newSel = function(bb, ub) {
            if (0 == bb.length) return null;
            let hb = bb[0].pos,
              Ob = 2 == bb.length ? bb[1].pos : hb;
            return hb > -1 && Ob > -1 ? Bb.j.single(hb + ub, Ob + ub) : null
          }(ub, this.bounds.from)
        } else {
          let ub = bb.observer.selectionRange,
            hb = Gb && Gb.node == ub.focusNode && Gb.offset == ub.focusOffset || !Ib(bb.contentDOM, ub.focusNode) ? Lb.main.head : bb.docView.posFromDOM(ub.focusNode, ub.focusOffset),
            Ob = Ub && Ub.node == ub.anchorNode && Ub.offset == ub.anchorOffset || !Ib(bb.contentDOM, ub.anchorNode) ? Lb.main.anchor : bb.docView.posFromDOM(ub.anchorNode, ub.anchorOffset),
            Yb = bb.viewport;
          if ((rb.ios || rb.chrome) && Lb.main.empty && hb != Ob && (Yb.from > 0 || Yb.to < bb.state.doc.length)) {
            let ub = Math.min(hb, Ob),
              Bb = Math.max(hb, Ob),
              Gb = Yb.from - ub,
              Ub = Yb.to - Bb;
            0 != Gb && 1 != Gb && 0 != ub || 0 != Ub && -1 != Ub && Bb != bb.state.doc.length || (hb = 0, Ob = bb.state.doc.length)
          }
          if (bb.inputState.composing > -1 && Lb.tp.length > 1) this.newSel = Lb.replaceRange(Bb.j.range(Ob, hb));
          else if (bb.lineWrapping && Ob == hb && (!Lb.main.empty || Lb.main.head != hb) && bb.inputState.lastTouchTime > Date.now() - 100) {
            let ub = bb.coordsAtPos(hb, -1),
              Ob = 0;
            ub && (Ob = bb.inputState.lastTouchY <= ub.bottom ? -1 : 1), this.newSel = Bb.j.create([Bb.j.cursor(hb, Ob)])
          } else this.newSel = Bb.j.single(Ob, hb)
        }
      }
    }

    function BB(bb, ub, hb, Bb) {
      if (bb.isComposite()) {
        let Ob = -1,
          Gb = -1,
          Ub = -1,
          Lb = -1;
        for (let Yb = 0, Sb = Bb, ab = Bb; Yb < bb.children.length; Yb++) {
          let Bb = bb.children[Yb],
            Hb = Sb + Bb.length;
          if (Sb < ub && Hb > hb) return BB(Bb, ub, hb, Sb);
          if (Hb >= ub && -1 == Ob && (Ob = Yb, Gb = Sb), Sb > hb && Bb.dom.parentNode == bb.dom) {
            Ub = Yb, Lb = ab;
            break
          }
          ab = Hb, Sb = Hb + Bb.breakAfter
        }
        return {
          from: Gb,
          to: Lb < 0 ? Bb + bb.length : Lb,
          startDOM: (Ob ? bb.children[Ob - 1].dom.nextSibling : null) || bb.dom.firstChild,
          endDOM: Ub < bb.children.length && Ub >= 0 ? bb.children[Ub].dom : null
        }
      }
      return bb.isText() ? {
        from: Bb,
        to: Bb + bb.length,
        startDOM: bb.dom,
        endDOM: bb.dom.nextSibling
      } : null
    }

    function OB(bb, ub) {
      let hb, {
          newSel: Ob
        } = ub,
        {
          state: Gb
        } = bb,
        Ub = Gb.selection.main,
        Lb = bb.inputState.lastKeyTime > Date.now() - 100 ? bb.inputState.lastKeyCode : -1;
      if (ub.bounds) {
        let {
          from: bb,
          to: Ob
        } = ub.bounds, Yb = Ub.from, Sb = null;
        (8 === Lb || rb.android && ub.text.length < Ob - bb) && (Yb = Ub.to, Sb = "end");
        let ab, Hb, wb = Gb.doc.sliceString(bb, Ob, ch);
        !Ub.empty && Ub.from >= bb && Ub.to <= Ob && (ub.typeOver || wb != ub.text) && wb.slice(0, Ub.from - bb) == ub.text.slice(0, Ub.from - bb) && wb.slice(Ub.to - bb) == ub.text.slice(ab = ub.text.length - (wb.length - (Ub.to - bb))) ? hb = {
          from: Ub.from,
          to: Ub.to,
          insert: Bb.K.of(ub.text.slice(Ub.from - bb, ab).split(ch))
        } : (Hb = UB(wb, ub.text, Yb - bb, Sb)) && (rb.chrome && 13 == Lb && Hb.toB == Hb.from + 2 && ub.text.slice(Hb.from, Hb.toB) == ch + ch && Hb.toB--, hb = {
          from: bb + Hb.from,
          to: bb + Hb.toA,
          insert: Bb.K.of(ub.text.slice(Hb.from, Hb.toB).split(ch))
        })
      } else Ob && (!bb.hasFocus && Gb.facet(Fu) || LB(Ob, Ub)) && (Ob = null);
      if (!hb && !Ob) return !1;
      if ((rb.mac || rb.android) && hb && hb.from == hb.to && hb.from == Ub.head - 1 && /^\. ?$/.test(hb.insert.toString()) && "off" == bb.contentDOM.getAttribute("autocorrect") ? (Ob && 2 == hb.insert.length && (Ob = Bb.j.single(Ob.main.anchor - 1, Ob.main.head - 1)), hb = {
          from: hb.from,
          to: hb.to,
          insert: Bb.K.of([hb.insert.toString().replace(".", " ")])
        }) : Gb.doc.lineAt(Ub.from).to < Ub.to && bb.docView.lineHasWidget(Ub.to) && bb.inputState.insertingTextAt > Date.now() - 50 ? hb = {
          from: Ub.from,
          to: Ub.to,
          insert: Gb.toText(bb.inputState.insertingText)
        } : rb.chrome && hb && hb.from == hb.to && hb.from == Ub.head && "\n " == hb.insert.toString() && bb.lineWrapping && (Ob && (Ob = Bb.j.single(Ob.main.anchor - 1, Ob.main.head - 1)), hb = {
          from: Ub.from,
          to: Ub.to,
          insert: Bb.K.of([" "])
        }), hb) return GB(bb, hb, Ob, Lb);
      if (Ob && !LB(Ob, Ub)) {
        let ub = !1,
          hb = "select";
        return bb.inputState.lastSelectionTime > Date.now() - 50 && ("select" == bb.inputState.lastSelectionOrigin && (ub = !0), hb = bb.inputState.lastSelectionOrigin, "select.pointer" == hb && (Ob = Vh(Gb.facet(Bh).map((ub => ub(bb))), Ob))), bb.dispatch({
          selection: Ob,
          scrollIntoView: ub,
          userEvent: hb
        }), !0
      }
      return !1
    }

    function GB(bb, ub, hb) {
      let Ob = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (rb.ios && bb.inputState.flushIOSKey(ub)) return !0;
      let Gb = bb.state.selection.main;
      if (rb.android && (ub.to == Gb.to && (ub.from == Gb.from || ub.from == Gb.from - 1 && " " == bb.state.sliceDoc(ub.from, Gb.from)) && 1 == ub.insert.length && 2 == ub.insert.lines && Ou(bb.contentDOM, "Enter", 13) || (ub.from == Gb.from - 1 && ub.to == Gb.to && 0 == ub.insert.length || 8 == Ob && ub.insert.length < ub.to - ub.from && ub.to > Gb.head) && Ou(bb.contentDOM, "Backspace", 8) || ub.from == Gb.from && ub.to == Gb.to + 1 && 0 == ub.insert.length && Ou(bb.contentDOM, "Delete", 46))) return !0;
      let Ub, Lb = ub.insert.toString();
      bb.inputState.composing >= 0 && bb.inputState.composing++;
      let Yb = () => Ub || (Ub = function(bb, ub, hb) {
        let Ob, Gb = bb.state,
          Ub = Gb.selection.main,
          Lb = -1;
        if (ub.from == ub.to && ub.from < Ub.from || ub.from > Ub.to) {
          let hb = ub.from < Ub.from ? -1 : 1,
            Bb = hb < 0 ? Ub.from : Ub.to,
            Ob = yh(Gb.facet(Bh).map((ub => ub(bb))), Bb, hb);
          ub.from == Ob && (Lb = Ob)
        }
        if (Lb > -1) Ob = {
          changes: ub,
          selection: Bb.j.cursor(ub.from + ub.insert.length, -1)
        };
        else if (ub.from >= Ub.from && ub.to <= Ub.to && ub.to - ub.from >= (Ub.to - Ub.from) / 3 && (!hb || hb.main.empty && hb.main.from == ub.from + ub.insert.length) && bb.inputState.composing < 0) {
          let hb = Ub.from < ub.from ? Gb.sliceDoc(Ub.from, ub.from) : "",
            Bb = Ub.to > ub.to ? Gb.sliceDoc(ub.to, Ub.to) : "";
          Ob = Gb.replaceSelection(bb.state.toText(hb + ub.insert.sliceString(0, void 0, bb.state.lineBreak) + Bb))
        } else {
          let Lb = Gb.changes(ub),
            Yb = hb && hb.main.to <= Lb.newLength ? hb.main : void 0;
          if (Gb.selection.tp.length > 1 && (bb.inputState.composing >= 0 || bb.inputState.compositionPendingChange) && ub.to <= Ub.to + 10 && ub.to >= Ub.to - 10) {
            let Sb, ab = bb.state.sliceDoc(ub.from, ub.to),
              Hb = hb && Mh(bb, hb.main.head);
            if (Hb) {
              let bb = ub.insert.length - (ub.to - ub.from);
              Sb = {
                from: Hb.from,
                to: Hb.to - bb
              }
            } else Sb = bb.state.doc.lineAt(Ub.head);
            let wb = Ub.to - ub.to;
            Ob = Gb.changeByRange((hb => {
              if (hb.from == Ub.from && hb.to == Ub.to) return {
                changes: Lb,
                range: Yb || hb.map(Lb)
              };
              let Ob = hb.to - wb,
                Hb = Ob - ab.length;
              if (bb.state.sliceDoc(Hb, Ob) != ab || Ob >= Sb.from && Hb <= Sb.to) return {
                range: hb
              };
              let Zb = Gb.changes({
                  from: Hb,
                  to: Ob,
                  insert: ub.insert
                }),
                Xb = hb.to - Ub.to;
              return {
                changes: Zb,
                range: Yb ? Bb.j.range(Math.max(0, Yb.anchor + Xb), Math.max(0, Yb.head + Xb)) : hb.map(Zb)
              }
            }))
          } else Ob = {
            changes: Lb,
            selection: Yb && Gb.selection.replaceRange(Yb)
          }
        }
        let Yb = "input.type";
        (bb.composing || bb.inputState.compositionPendingChange && bb.inputState.compositionEndedAt > Date.now() - 50) && (bb.inputState.compositionPendingChange = !1, Yb += ".compose", bb.inputState.compositionFirstChange && (Yb += ".start", bb.inputState.compositionFirstChange = !1));
        return Gb.update(Ob, {
          userEvent: Yb,
          scrollIntoView: !0
        })
      }(bb, ub, hb));
      return bb.state.facet(eu).some((hb => hb(bb, ub.from, ub.to, Lb, Yb))) || bb.dispatch(Yb()), !0
    }

    function UB(bb, ub, hb, Bb) {
      let Ob = Math.min(bb.length, ub.length),
        Gb = 0;
      for (; Gb < Ob && bb.charCodeAt(Gb) == ub.charCodeAt(Gb);) Gb++;
      if (Gb == Ob && bb.length == ub.length) return null;
      let Ub = bb.length,
        Lb = ub.length;
      for (; Ub > 0 && Lb > 0 && bb.charCodeAt(Ub - 1) == ub.charCodeAt(Lb - 1);) Ub--, Lb--;
      if ("end" == Bb) {
        hb -= Ub + Math.max(0, Gb - Math.min(Ub, Lb)) - Gb
      }
      if (Ub < Gb && bb.length < ub.length) {
        Gb -= hb <= Gb && hb >= Ub ? Gb - hb : 0, Lb = Gb + (Lb - Ub), Ub = Gb
      } else if (Lb < Gb) {
        Gb -= hb <= Gb && hb >= Lb ? Gb - hb : 0, Ub = Gb + (Ub - Lb), Lb = Gb
      }
      return {
        from: Gb,
        toA: Ub,
        toB: Lb
      }
    }

    function LB(bb, ub) {
      return ub.head == bb.main.head && ub.anchor == bb.main.anchor
    }
    class YB {
      setSelectionOrigin(bb) {
        this.lastSelectionOrigin = bb, this.lastSelectionTime = Date.now()
      }
      constructor(bb) {
        this.view = bb, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = bb.hasFocus, rb.safari && bb.contentDOM.addEventListener("input", (() => null)), rb.gecko && function(bb) {
          tB.has(bb) || (tB.add(bb), bb.addEventListener("copy", (() => {})), bb.addEventListener("cut", (() => {})))
        }(bb.contentDOM.ownerDocument)
      }
      handleEvent(bb) {
        (function(bb, ub) {
          if (!ub.bubbles) return !0;
          if (ub.defaultPrevented) return !1;
          for (let hb, Bb = ub.target; Bb != bb.contentDOM; Bb = Bb.parentNode)
            if (!Bb || 11 == Bb.nodeType || (hb = wh.get(Bb)) && hb.isWidget() && !hb.isHidden && hb.widget.ignoreEvent(ub)) return !1;
          return !0
        })(this.view, bb) && !this.ignoreDuringComposition(bb) && ("keydown" == bb.type && this.keydown(bb) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(bb.type, bb))) : this.runHandlers(bb.type, bb)))
      }
      runHandlers(bb, ub) {
        let hb = this.handlers[bb];
        if (hb) {
          for (let bb of hb.observers) bb(this.view, ub);
          for (let bb of hb.handlers) {
            if (ub.defaultPrevented) break;
            if (bb(this.view, ub)) {
              ub.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(bb) {
        let ub = aB(bb),
          hb = this.handlers,
          Bb = this.view.contentDOM;
        for (let Ob in ub)
          if ("scroll" != Ob) {
            let bb = !ub[Ob].handlers.length,
              Gb = hb[Ob];
            Gb && bb != !Gb.handlers.length && (Bb.removeEventListener(Ob, this.handleEvent), Gb = null), Gb || Bb.addEventListener(Ob, this.handleEvent, {
              passive: bb
            })
          } for (let Ob in hb) "scroll" == Ob || ub[Ob] || Bb.removeEventListener(Ob, this.handleEvent);
        this.handlers = ub
      }
      keydown(bb) {
        if (this.lastKeyCode = bb.keyCode, this.lastKeyTime = Date.now(), 9 == bb.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != bb.keyCode && ZB.indexOf(bb.keyCode) < 0 && (this.tabFocusMode = -1), rb.android && rb.chrome && !bb.synthetic && (13 == bb.keyCode || 8 == bb.keyCode)) return this.view.observer.delayAndroidKey(bb.key, bb.keyCode), !0;
        let ub;
        return !rb.ios || bb.synthetic || bb.altKey || bb.metaKey || bb.shiftKey || !((ub = HB.find((ub => ub.keyCode == bb.keyCode))) && !bb.ctrlKey || wB.indexOf(bb.key) > -1 && bb.ctrlKey) ? (229 != bb.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = ub || bb, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(bb) {
        let ub = this.pendingIOSKey;
        return !!ub && (!("Enter" == ub.key && bb && bb.from < bb.to && /^\S+$/.test(bb.insert.toString())) && (this.pendingIOSKey = void 0, Ou(this.view.contentDOM, ub.key, ub.keyCode, ub instanceof KeyboardEvent ? ub : void 0)))
      }
      ignoreDuringComposition(bb) {
        return !(!/^key/.test(bb.type) || bb.synthetic) && (this.composing > 0 || !!(rb.safari && !rb.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
      }
      startMouseSelection(bb) {
        this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = bb
      }
      update(bb) {
        this.view.observer.update(bb), this.mouseSelection && this.mouseSelection.update(bb), this.draggedContent && bb.docChanged && (this.draggedContent = this.draggedContent.map(bb.changes)), bb.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
      }
      destroy() {
        this.mouseSelection && this.mouseSelection.destroy()
      }
    }

    function SB(bb, ub) {
      return (hb, Bb) => {
        try {
          return ub.call(bb, Bb, hb)
        } catch (Ob) {
          Vu(hb.state, Ob)
        }
      }
    }

    function aB(bb) {
      let ub = Object.create(null);

      function hb(bb) {
        return ub[bb] || (ub[bb] = {
          observers: [],
          handlers: []
        })
      }
      for (let Bb of bb) {
        let bb = Bb.spec,
          ub = bb && bb.plugin.domEventHandlers,
          Ob = bb && bb.plugin.domEventObservers;
        if (ub)
          for (let Gb in ub) {
            let bb = ub[Gb];
            bb && hb(Gb).handlers.push(SB(Bb.value, bb))
          }
        if (Ob)
          for (let Gb in Ob) {
            let bb = Ob[Gb];
            bb && hb(Gb).observers.push(SB(Bb.value, bb))
          }
      }
      for (let Bb in oB) hb(Bb).handlers.push(oB[Bb]);
      for (let Bb in AB) hb(Bb).observers.push(AB[Bb]);
      return ub
    }
    const HB = [{
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
      wB = "dthko",
      ZB = [16, 17, 18, 20, 91, 92, 224, 225];

    function XB(bb) {
      return .7 * Math.max(0, bb) + 8
    }
    class pB {
      constructor(bb, ub, hb, Ob) {
        this.view = bb, this.startEvent = ub, this.style = hb, this.mustSelect = Ob, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = ub, this.scrollParents = Qb(bb.contentDOM), this.atoms = bb.state.facet(Bh).map((ub => ub(bb)));
        let Gb = bb.contentDOM.ownerDocument;
        Gb.addEventListener("mousemove", this.move = this.move.bind(this)), Gb.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = ub.shiftKey, this.multiple = bb.state.facet(Bb.k.allowMultipleSelections) && function(bb, ub) {
          let hb = bb.state.facet(gu);
          return hb.length ? hb[0](ub) : rb.mac ? ub.metaKey : ub.ctrlKey
        }(bb, ub), this.dragging = !(! function(bb, ub) {
          let {
            main: hb
          } = bb.state.selection;
          if (hb.empty) return !1;
          let Bb = mb(bb.root);
          if (!Bb || 0 == Bb.rangeCount) return !0;
          let Ob = Bb.getRangeAt(0).getClientRects();
          for (let Gb = 0; Gb < Ob.length; Gb++) {
            let bb = Ob[Gb];
            if (bb.left <= ub.clientX && bb.right >= ub.clientX && bb.top <= ub.clientY && bb.bottom >= ub.clientY) return !0
          }
          return !1
        }(bb, ub) || 1 != DB(ub)) && null
      }
      start(bb) {
        !1 === this.dragging && this.select(bb)
      }
      move(bb) {
        if (0 == bb.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (ub = this.startEvent, hb = bb, Math.max(Math.abs(ub.clientX - hb.clientX), Math.abs(ub.clientY - hb.clientY)) < 10)) return;
        var ub, hb;
        this.select(this.lastEvent = bb);
        let Bb = 0,
          Ob = 0,
          Gb = 0,
          Ub = 0,
          Lb = this.view.win.innerWidth,
          Yb = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: Gb,
          right: Lb
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: Ub,
          bottom: Yb
        } = this.scrollParents.y.getBoundingClientRect());
        let Sb = Lh(this.view);
        bb.clientX - Sb.left <= Gb + 6 ? Bb = -XB(Gb - bb.clientX) : bb.clientX + Sb.right >= Lb - 6 && (Bb = XB(bb.clientX - Lb)), bb.clientY - Sb.top <= Ub + 6 ? Ob = -XB(Ub - bb.clientY) : bb.clientY + Sb.bottom >= Yb - 6 && (Ob = XB(bb.clientY - Yb)), this.setScrollSpeed(Bb, Ob)
      }
      up(bb) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || bb.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let bb = this.view.contentDOM.ownerDocument;
        bb.removeEventListener("mousemove", this.move), bb.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(bb, ub) {
        this.scrollSpeed = {
          x: bb,
          y: ub
        }, bb || ub ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: bb,
          y: ub
        } = this.scrollSpeed;
        bb && this.scrollParents.x && (this.scrollParents.x.scrollLeft += bb, bb = 0), ub && this.scrollParents.y && (this.scrollParents.y.scrollTop += ub, ub = 0), (bb || ub) && this.view.win.scrollBy(bb, ub), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(bb) {
        let {
          view: ub
        } = this, hb = Vh(this.atoms, this.style.get(bb, this.extend, this.multiple));
        !this.mustSelect && hb.eq(ub.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: hb,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(bb) {
        bb.transactions.some((bb => bb.isUserEvent("input.type"))) ? this.destroy() : this.style.update(bb) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const oB = Object.create(null),
      AB = Object.create(null),
      lB = rb.ie && rb.ie_version < 15 || rb.ios && rb.webkit_version < 604;

    function KB(bb, ub, hb) {
      for (let Bb of bb.facet(ub)) hb = Bb(hb, bb);
      return hb
    }

    function WB(bb, ub) {
      ub = KB(bb.state, su, ub);
      let hb, {
          state: Ob
        } = bb,
        Gb = 1,
        Ub = Ob.toText(ub),
        Lb = Ub.lines == Ob.selection.tp.length;
      if (null != zB && Ob.selection.tp.every((bb => bb.empty)) && zB == Ub.toString()) {
        let bb = -1;
        hb = Ob.changeByRange((hb => {
          let Yb = Ob.doc.lineAt(hb.from);
          if (Yb.from == bb) return {
            range: hb
          };
          bb = Yb.from;
          let Sb = Ob.toText((Lb ? Ub.line(Gb++).text : ub) + Ob.lineBreak);
          return {
            changes: {
              from: Yb.from,
              insert: Sb
            },
            range: Bb.j.cursor(hb.from + Sb.length)
          }
        }))
      } else hb = Lb ? Ob.changeByRange((bb => {
        let ub = Ub.line(Gb++);
        return {
          changes: {
            from: bb.from,
            to: bb.to,
            insert: ub.text
          },
          range: Bb.j.cursor(bb.from + ub.length)
        }
      })) : Ob.replaceSelection(Ub);
      bb.dispatch(hb, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function CB(bb, ub, hb, Ob) {
      if (1 == Ob) return Bb.j.cursor(ub, hb);
      if (2 == Ob) return function(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Ob = bb.charCategorizer(ub),
          Gb = bb.doc.lineAt(ub),
          Ub = ub - Gb.from;
        if (0 == Gb.length) return Bb.j.cursor(ub);
        0 == Ub ? hb = 1 : Ub == Gb.length && (hb = -1);
        let Lb = Ub,
          Yb = Ub;
        hb < 0 ? Lb = (0, Bb._)(Gb.text, Ub, !1) : Yb = (0, Bb._)(Gb.text, Ub);
        let Sb = Ob(Gb.text.slice(Lb, Yb));
        for (; Lb > 0;) {
          let bb = (0, Bb._)(Gb.text, Lb, !1);
          if (Ob(Gb.text.slice(bb, Lb)) != Sb) break;
          Lb = bb
        }
        for (; Yb < Gb.length;) {
          let bb = (0, Bb._)(Gb.text, Yb);
          if (Ob(Gb.text.slice(Yb, bb)) != Sb) break;
          Yb = bb
        }
        return Bb.j.range(Lb + Gb.from, Yb + Gb.from)
      }(bb.state, ub, hb);
      {
        let Ob = bb.docView.lineAt(ub, hb),
          Gb = bb.state.doc.lineAt(Ob ? Ob.posAtEnd : ub),
          Ub = Ob ? Ob.posAtStart : Gb.from,
          Lb = Ob ? Ob.posAtEnd : Gb.to;
        return Lb < bb.state.doc.length && Lb == Gb.to && Lb++, Bb.j.range(Ub, Lb)
      }
    }
    AB.scroll = bb => {
      bb.inputState.lastScrollTop = bb.scrollDOM.scrollTop, bb.inputState.lastScrollLeft = bb.scrollDOM.scrollLeft
    }, AB.wheel = AB.mousewheel = bb => {
      bb.inputState.lastWheelEvent = Date.now()
    }, oB.keydown = (bb, ub) => (bb.inputState.setSelectionOrigin("select"), 27 == ub.keyCode && 0 != bb.inputState.tabFocusMode && (bb.inputState.tabFocusMode = Date.now() + 2e3), !1), AB.touchstart = (bb, ub) => {
      let hb = bb.inputState,
        Bb = ub.targetTouches[0];
      hb.lastTouchTime = Date.now(), Bb && (hb.lastTouchX = Bb.clientX, hb.lastTouchY = Bb.clientY), hb.setSelectionOrigin("select.pointer")
    }, AB.touchmove = bb => {
      bb.inputState.setSelectionOrigin("select.pointer")
    }, oB.mousedown = (bb, ub) => {
      if (bb.observer.flush(), bb.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let hb = null;
      for (let Bb of bb.state.facet(vu))
        if (hb = Bb(bb, ub), hb) break;
      if (hb || 0 != ub.button || (hb = function(bb, ub) {
          let hb = bb.posAndSideAtCoords({
              x: ub.clientX,
              y: ub.clientY
            }, !1),
            Ob = DB(ub),
            Gb = bb.state.selection;
          return {
            update(bb) {
              bb.docChanged && (hb.pos = bb.changes.mapPos(hb.pos), Gb = Gb.map(bb.changes))
            },
            get(ub, Ub, Lb) {
              let Yb, Sb = bb.posAndSideAtCoords({
                  x: ub.clientX,
                  y: ub.clientY
                }, !1),
                ab = CB(bb, Sb.pos, Sb.assoc, Ob);
              if (hb.pos != Sb.pos && !Ub) {
                let ub = CB(bb, hb.pos, hb.assoc, Ob),
                  Gb = Math.min(ub.from, ab.from),
                  Ub = Math.max(ub.to, ab.to);
                ab = Gb < ab.from ? Bb.j.range(Gb, Ub, ab.assoc) : Bb.j.range(Ub, Gb, ab.assoc)
              }
              return Ub ? Gb.replaceRange(Gb.main.extend(ab.from, ab.to, ab.assoc)) : Lb && 1 == Ob && Gb.tp.length > 1 && (Yb = function(bb, ub) {
                for (let hb = 0; hb < bb.tp.length; hb++) {
                  let {
                    from: Ob,
                    to: Gb
                  } = bb.tp[hb];
                  if (Ob <= ub && Gb >= ub) return Bb.j.create(bb.tp.slice(0, hb).concat(bb.tp.slice(hb + 1)), bb.mainIndex == hb ? 0 : bb.mainIndex - (bb.mainIndex > hb ? 1 : 0))
                }
                return null
              }(Gb, Sb.pos)) ? Yb : Lb ? Gb.addRange(ab) : Bb.j.create([ab])
            }
          }
        }(bb, ub)), hb) {
        let Bb = !bb.hasFocus;
        bb.inputState.startMouseSelection(new pB(bb, ub, hb, Bb)), Bb && bb.observer.ignore((() => {
          hu(bb.contentDOM);
          let ub = bb.root.activeElement;
          ub && !ub.contains(bb.contentDOM) && ub.blur()
        }));
        let Ob = bb.inputState.mouseSelection;
        if (Ob) return Ob.start(ub), !1 === Ob.dragging
      } else bb.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const dB = rb.ie && rb.ie_version <= 11;
    let rB = null,
      jB = 0,
      nB = 0;

    function DB(bb) {
      if (!dB) return bb.detail;
      let ub = rB,
        hb = nB;
      return rB = bb, nB = Date.now(), jB = !ub || hb > Date.now() - 400 && Math.abs(ub.clientX - bb.clientX) < 2 && Math.abs(ub.clientY - bb.clientY) < 2 ? (jB + 1) % 3 : 1
    }

    function xB(bb, ub, hb, Bb) {
      if (!(hb = KB(bb.state, su, hb))) return;
      let Ob = bb.posAtCoords({
          x: ub.clientX,
          y: ub.clientY
        }, !1),
        {
          draggedContent: Gb
        } = bb.inputState,
        Ub = Bb && Gb && function(bb, ub) {
          let hb = bb.state.facet(iu);
          return hb.length ? hb[0](ub) : rb.mac ? !ub.altKey : !ub.ctrlKey
        }(bb, ub) ? {
          from: Gb.from,
          to: Gb.to
        } : null,
        Lb = {
          from: Ob,
          insert: hb
        },
        Yb = bb.state.changes(Ub ? [Ub, Lb] : Lb);
      bb.focus(), bb.dispatch({
        changes: Yb,
        selection: {
          anchor: Yb.mapPos(Ob, -1),
          head: Yb.mapPos(Ob, 1)
        },
        userEvent: Ub ? "move.drop" : "input.drop"
      }), bb.inputState.draggedContent = null
    }
    oB.dragstart = (bb, ub) => {
      let {
        selection: {
          main: hb
        }
      } = bb.state;
      if (ub.target.draggable) {
        let Ob = bb.docView.tile.nearest(ub.target);
        if (Ob && Ob.isWidget()) {
          let bb = Ob.posAtStart,
            ub = bb + Ob.length;
          (bb >= hb.to || ub <= hb.from) && (hb = Bb.j.range(bb, ub))
        }
      }
      let {
        inputState: Ob
      } = bb;
      return Ob.mouseSelection && (Ob.mouseSelection.dragging = !0), Ob.draggedContent = hb, ub.dataTransfer && (ub.dataTransfer.setData("Text", KB(bb.state, Mu, bb.state.sliceDoc(hb.from, hb.to))), ub.dataTransfer.effectAllowed = "copyMove"), !1
    }, oB.dragend = bb => (bb.inputState.draggedContent = null, !1), oB.drop = (bb, ub) => {
      if (!ub.dataTransfer) return !1;
      if (bb.state.readOnly) return !0;
      let hb = ub.dataTransfer.files;
      if (hb && hb.length) {
        let Bb = Array(hb.length),
          Ob = 0,
          Gb = () => {
            ++Ob == hb.length && xB(bb, ub, Bb.filter((bb => null != bb)).join(bb.state.lineBreak), !1)
          };
        for (let bb = 0; bb < hb.length; bb++) {
          let ub = new FileReader;
          ub.onerror = Gb, ub.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(ub.result) || (Bb[bb] = ub.result), Gb()
          }, ub.readAsText(hb[bb])
        }
        return !0
      } {
        let hb = ub.dataTransfer.getData("Text");
        if (hb) return xB(bb, ub, hb, !0), !0
      }
      return !1
    }, oB.paste = (bb, ub) => {
      if (bb.state.readOnly) return !0;
      bb.observer.flush();
      let hb = lB ? null : ub.clipboardData;
      return hb ? (WB(bb, hb.getData("text/plain") || hb.getData("text/uri-list")), !0) : (function(bb) {
        let ub = bb.dom.parentNode;
        if (!ub) return;
        let hb = ub.appendChild(document.createElement("textarea"));
        hb.style.cssText = "position: fixed; left: -10000px; top: 10px", hb.focus(), setTimeout((() => {
          bb.focus(), hb.remove(), WB(bb, hb.value)
        }), 50)
      }(bb), !1)
    };
    let zB = null;
    oB.copy = oB.cut = (bb, ub) => {
      if (!Pb(bb.contentDOM, bb.observer.selectionRange)) return !1;
      let {
        text: hb,
        tp: Bb,
        linewise: Ob
      } = function(bb) {
        let ub = [],
          hb = [],
          Bb = !1;
        for (let Ob of bb.selection.tp) Ob.empty || (ub.push(bb.sliceDoc(Ob.from, Ob.to)), hb.push(Ob));
        if (!ub.length) {
          let Ob = -1;
          for (let {
              from: Bb
            }
            of bb.selection.tp) {
            let Gb = bb.doc.lineAt(Bb);
            Gb.number > Ob && (ub.push(Gb.text), hb.push({
              from: Gb.from,
              to: Math.min(bb.doc.length, Gb.to + 1)
            })), Ob = Gb.number
          }
          Bb = !0
        }
        return {
          text: KB(bb, Mu, ub.join(bb.lineBreak)),
          tp: hb,
          linewise: Bb
        }
      }(bb.state);
      if (!hb && !Ob) return !1;
      zB = Ob ? hb : null, "cut" != ub.type || bb.state.readOnly || bb.dispatch({
        changes: Bb,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let Gb = lB ? null : ub.clipboardData;
      return Gb ? (Gb.clearData(), Gb.setData("text/plain", hb), !0) : (function(bb, ub) {
        let hb = bb.dom.parentNode;
        if (!hb) return;
        let Bb = hb.appendChild(document.createElement("textarea"));
        Bb.style.cssText = "position: fixed; left: -10000px; top: 10px", Bb.value = ub, Bb.focus(), Bb.selectionEnd = ub.length, Bb.selectionStart = 0, setTimeout((() => {
          Bb.remove(), bb.focus()
        }), 50)
      }(bb, hb), !1)
    };
    const gB = Bb.b.define();

    function iB(bb, ub) {
      let hb = [];
      for (let Bb of bb.facet(Nu)) {
        let Ob = Bb(bb, ub);
        Ob && hb.push(Ob)
      }
      return hb.length ? bb.update({
        effects: hb,
        annotations: gB.of(!0)
      }) : null
    }

    function vB(bb) {
      setTimeout((() => {
        let ub = bb.hasFocus;
        if (ub != bb.inputState.notifiedFocused) {
          let hb = iB(bb.state, ub);
          hb ? bb.dispatch(hb) : bb.update([])
        }
      }), 10)
    }
    AB.focus = bb => {
      bb.inputState.lastFocusTime = Date.now(), bb.scrollDOM.scrollTop || !bb.inputState.lastScrollTop && !bb.inputState.lastScrollLeft || (bb.scrollDOM.scrollTop = bb.inputState.lastScrollTop, bb.scrollDOM.scrollLeft = bb.inputState.lastScrollLeft), vB(bb)
    }, AB.blur = bb => {
      bb.observer.clearSelectionRange(), vB(bb)
    }, AB.compositionstart = AB.compositionupdate = bb => {
      bb.observer.editContext || (null == bb.inputState.compositionFirstChange && (bb.inputState.compositionFirstChange = !0), bb.inputState.composing < 0 && (bb.inputState.composing = 0))
    }, AB.compositionend = bb => {
      bb.observer.editContext || (bb.inputState.composing = -1, bb.inputState.compositionEndedAt = Date.now(), bb.inputState.compositionPendingKey = !0, bb.inputState.compositionPendingChange = bb.observer.pendingRecords().length > 0, bb.inputState.compositionFirstChange = null, rb.chrome && rb.android ? bb.observer.flushSoon() : bb.inputState.compositionPendingChange ? Promise.resolve().then((() => bb.observer.flush())) : setTimeout((() => {
        bb.inputState.composing < 0 && bb.docView.hasComposition && bb.update([])
      }), 50))
    }, AB.contextmenu = bb => {
      bb.inputState.lastContextMenu = Date.now()
    }, oB.beforeinput = (bb, ub) => {
      var hb, Bb;
      if ("insertText" != ub.inputType && "insertCompositionText" != ub.inputType || (bb.inputState.insertingText = ub.data, bb.inputState.insertingTextAt = Date.now()), "insertReplacementText" == ub.inputType && bb.observer.editContext) {
        let Bb = null === (hb = ub.dataTransfer) || void 0 === hb ? void 0 : hb.getData("text/plain"),
          Ob = ub.getTargetRanges();
        if (Bb && Ob.length) {
          let ub = Ob[0],
            hb = bb.posAtDOM(ub.startContainer, ub.startOffset),
            Gb = bb.posAtDOM(ub.endContainer, ub.endOffset);
          return GB(bb, {
            from: hb,
            to: Gb,
            insert: bb.state.toText(Bb)
          }, null), !0
        }
      }
      let Ob;
      if (rb.chrome && rb.android && (Ob = HB.find((bb => bb.inputType == ub.inputType))) && (bb.observer.delayAndroidKey(Ob.key, Ob.keyCode), "Backspace" == Ob.key || "Delete" == Ob.key)) {
        let ub = (null === (Bb = window.visualViewport) || void 0 === Bb ? void 0 : Bb.height) || 0;
        setTimeout((() => {
          var hb;
          ((null === (hb = window.visualViewport) || void 0 === hb ? void 0 : hb.height) || 0) > ub + 10 && bb.hasFocus && (bb.contentDOM.blur(), bb.focus())
        }), 100)
      }
      return rb.ios && "deleteContentForward" == ub.inputType && bb.observer.flushSoon(), rb.safari && "insertText" == ub.inputType && bb.inputState.composing >= 0 && setTimeout((() => AB.compositionend(bb, ub)), 20), !1
    };
    const tB = new Set;
    const JB = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let eB = !1;

    function NB() {
      eB = !1
    }
    class sB {
      constructor(bb) {
        this.lineWrapping = bb, this.doc = Bb.K.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(bb, ub) {
        let hb = this.doc.lineAt(ub).number - this.doc.lineAt(bb).number + 1;
        return this.lineWrapping && (hb += Math.max(0, Math.ceil((ub - bb - hb * this.lineLength * .5) / this.lineLength))), this.lineHeight * hb
      }
      heightForLine(bb) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((bb - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(bb) {
        return this.doc = bb, this
      }
      mustRefreshForWrapping(bb) {
        return JB.indexOf(bb) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(bb) {
        let ub = !1;
        for (let hb = 0; hb < bb.length; hb++) {
          let Bb = bb[hb];
          Bb < 0 ? hb++ : this.heightSamples[Math.floor(10 * Bb)] || (ub = !0, this.heightSamples[Math.floor(10 * Bb)] = !0)
        }
        return ub
      }
      refresh(bb, ub, hb, Bb, Ob, Gb) {
        let Ub = JB.indexOf(bb) > -1,
          Lb = Math.abs(ub - this.lineHeight) > .3 || this.lineWrapping != Ub || Math.abs(hb - this.charWidth) > .1;
        if (this.lineWrapping = Ub, this.lineHeight = ub, this.charWidth = hb, this.textHeight = Bb, this.lineLength = Ob, Lb) {
          this.heightSamples = {};
          for (let bb = 0; bb < Gb.length; bb++) {
            let ub = Gb[bb];
            ub < 0 ? bb++ : this.heightSamples[Math.floor(10 * ub)] = !0
          }
        }
        return Lb
      }
    }
    class MB {
      constructor(bb, ub) {
        this.from = bb, this.heights = ub, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class mB {
      constructor(bb, ub, hb, Bb, Ob) {
        this.from = bb, this.length = ub, this.top = hb, this.height = Bb, this._content = Ob
      }
      get type() {
        return "number" == typeof this._content ? ib.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof eb ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(bb) {
        let ub = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(bb._content) ? bb._content : [bb]);
        return new mB(this.from, this.length + bb.length, this.top, this.height + bb.height, ub)
      }
    }
    var IB = function(bb) {
      return bb[bb.ByPos = 0] = "ByPos", bb[bb.ByHeight = 1] = "ByHeight", bb[bb.ByPosNoHeight = 2] = "ByPosNoHeight", bb
    }(IB || (IB = {}));
    const PB = .001;
    class qB {
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = bb, this.height = ub, this.flags = hb
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(bb) {
        this.flags = (bb ? 2 : 0) | -3 & this.flags
      }
      setHeight(bb) {
        this.height != bb && (Math.abs(this.height - bb) > PB && (eB = !0), this.height = bb)
      }
      replace(bb, ub, hb) {
        return qB.of(hb)
      }
      decomposeLeft(bb, ub) {
        ub.push(this)
      }
      decomposeRight(bb, ub) {
        ub.push(this)
      }
      applyChanges(bb, ub, hb, Bb) {
        let Ob = this,
          Gb = hb.doc;
        for (let Ub = Bb.length - 1; Ub >= 0; Ub--) {
          let {
            fromA: Lb,
            toA: Yb,
            fromB: Sb,
            toB: ab
          } = Bb[Ub], Hb = Ob.lineAt(Lb, IB.ByPosNoHeight, hb.setDoc(ub), 0, 0), wb = Hb.to >= Yb ? Hb : Ob.lineAt(Yb, IB.ByPosNoHeight, hb, 0, 0);
          for (ab += wb.to - Yb, Yb = wb.to; Ub > 0 && Hb.from <= Bb[Ub - 1].toA;) Lb = Bb[Ub - 1].fromA, Sb = Bb[Ub - 1].fromB, Ub--, Lb < Hb.from && (Hb = Ob.lineAt(Lb, IB.ByPosNoHeight, hb, 0, 0));
          Sb += Hb.from - Lb, Lb = Hb.from;
          let Zb = cB.build(hb.setDoc(Gb), bb, Sb, ab);
          Ob = EB(Ob, Ob.replace(Lb, Yb, Zb))
        }
        return Ob.updateHeight(hb, 0)
      }
      static empty() {
        return new FB(0, 0, 0)
      }
      static of (bb) {
        if (1 == bb.length) return bb[0];
        let ub = 0,
          hb = bb.length,
          Bb = 0,
          Ob = 0;
        for (;;)
          if (ub == hb)
            if (Bb > 2 * Ob) {
              let Ob = bb[ub - 1];
              Ob.break ? bb.splice(--ub, 1, Ob.left, null, Ob.right) : bb.splice(--ub, 1, Ob.left, Ob.right), hb += 1 + Ob.break, Bb -= Ob.size
            } else {
              if (!(Ob > 2 * Bb)) break;
              {
                let ub = bb[hb];
                ub.break ? bb.splice(hb, 1, ub.left, null, ub.right) : bb.splice(hb, 1, ub.left, ub.right), hb += 2 + ub.break, Ob -= ub.size
              }
            }
        else if (Bb < Ob) {
          let hb = bb[ub++];
          hb && (Bb += hb.size)
        } else {
          let ub = bb[--hb];
          ub && (Ob += ub.size)
        }
        let Gb = 0;
        return null == bb[ub - 1] ? (Gb = 1, ub--) : null == bb[ub] && (Gb = 1, hb++), new kB(qB.of(bb.slice(0, ub)), Gb, qB.of(bb.slice(hb)))
      }
    }

    function EB(bb, ub) {
      return bb == ub ? bb : (bb.constructor != ub.constructor && (eB = !0), ub)
    }
    qB.prototype.size = 1;
    const yB = vb.replace({});
    class VB extends qB {
      constructor(bb, ub, hb) {
        super(bb, ub), this.deco = hb, this.spaceAbove = 0
      }
      mainBlock(bb, ub) {
        return new mB(ub, this.length, bb + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(bb, ub, hb, Bb) {
        return this.spaceAbove && bb < hb + this.spaceAbove ? new mB(Bb, 0, hb, this.spaceAbove, yB) : this.mainBlock(hb, Bb)
      }
      lineAt(bb, ub, hb, Bb, Ob) {
        let Gb = this.mainBlock(Bb, Ob);
        return this.spaceAbove ? this.blockAt(0, hb, Bb, Ob).join(Gb) : Gb
      }
      forEachLine(bb, ub, hb, Bb, Ob, Gb) {
        bb <= Ob + this.length && ub >= Ob && Gb(this.lineAt(0, IB.ByPos, hb, Bb, Ob))
      }
      setMeasuredHeight(bb) {
        let ub = bb.heights[bb.index++];
        ub < 0 ? (this.spaceAbove = -ub, ub = bb.heights[bb.index++]) : this.spaceAbove = 0, this.setHeight(ub)
      }
      updateHeight(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          hb = arguments.length > 3 ? arguments[3] : void 0;
        return hb && hb.from <= ub && hb.more && this.setMeasuredHeight(hb), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class FB extends VB {
      constructor(bb, ub, hb) {
        super(bb, ub, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = hb
      }
      mainBlock(bb, ub) {
        return new mB(ub, this.length, bb + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(bb, ub, hb) {
        let Bb = hb[0];
        return 1 == hb.length && (Bb instanceof FB || Bb instanceof fB && 4 & Bb.flags) && Math.abs(this.length - Bb.length) < 10 ? (Bb instanceof fB ? Bb = new FB(Bb.length, this.height, this.spaceAbove) : Bb.height = this.height, this.outdated || (Bb.outdated = !1), Bb) : qB.of(hb)
      }
      updateHeight(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Bb = arguments.length > 3 ? arguments[3] : void 0;
        return Bb && Bb.from <= ub && Bb.more ? this.setMeasuredHeight(Bb) : (hb || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, bb.heightForLine(this.length - this.collapsed)) + this.breaks * bb.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class fB extends qB {
      constructor(bb) {
        super(bb, 0)
      }
      heightMetrics(bb, ub) {
        let hb, Bb = bb.doc.lineAt(ub).number,
          Ob = bb.doc.lineAt(ub + this.length).number,
          Gb = Ob - Bb + 1,
          Ub = 0;
        if (bb.lineWrapping) {
          let ub = Math.min(this.height, bb.lineHeight * Gb);
          hb = ub / Gb, this.length > Gb + 1 && (Ub = (this.height - ub) / (this.length - Gb - 1))
        } else hb = this.height / Gb;
        return {
          firstLine: Bb,
          lastLine: Ob,
          perLine: hb,
          perChar: Ub
        }
      }
      blockAt(bb, ub, hb, Bb) {
        let {
          firstLine: Ob,
          lastLine: Gb,
          perLine: Ub,
          perChar: Lb
        } = this.heightMetrics(ub, Bb);
        if (ub.lineWrapping) {
          let Ob = Bb + (bb < ub.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (bb - hb) / this.height)) * this.length)),
            Gb = ub.doc.lineAt(Ob),
            Yb = Ub + Gb.length * Lb,
            Sb = Math.max(hb, bb - Yb / 2);
          return new mB(Gb.from, Gb.length, Sb, Yb, 0)
        } {
          let Bb = Math.max(0, Math.min(Gb - Ob, Math.floor((bb - hb) / Ub))),
            {
              from: Lb,
              length: Yb
            } = ub.doc.line(Ob + Bb);
          return new mB(Lb, Yb, hb + Ub * Bb, Ub, 0)
        }
      }
      lineAt(bb, ub, hb, Bb, Ob) {
        if (ub == IB.ByHeight) return this.blockAt(bb, hb, Bb, Ob);
        if (ub == IB.ByPosNoHeight) {
          let {
            from: ub,
            to: Bb
          } = hb.doc.lineAt(bb);
          return new mB(ub, Bb - ub, 0, 0, 0)
        }
        let {
          firstLine: Gb,
          perLine: Ub,
          perChar: Lb
        } = this.heightMetrics(hb, Ob), Yb = hb.doc.lineAt(bb), Sb = Ub + Yb.length * Lb, ab = Yb.number - Gb, Hb = Bb + Ub * ab + Lb * (Yb.from - Ob - ab);
        return new mB(Yb.from, Yb.length, Math.max(Bb, Math.min(Hb, Bb + this.height - Sb)), Sb, 0)
      }
      forEachLine(bb, ub, hb, Bb, Ob, Gb) {
        bb = Math.max(bb, Ob), ub = Math.min(ub, Ob + this.length);
        let {
          firstLine: Ub,
          perLine: Lb,
          perChar: Yb
        } = this.heightMetrics(hb, Ob);
        for (let Sb = bb, ab = Bb; Sb <= ub;) {
          let ub = hb.doc.lineAt(Sb);
          if (Sb == bb) {
            let hb = ub.number - Ub;
            ab += Lb * hb + Yb * (bb - Ob - hb)
          }
          let Bb = Lb + Yb * ub.length;
          Gb(new mB(ub.from, ub.length, ab, Bb, 0)), ab += Bb, Sb = ub.to + 1
        }
      }
      replace(bb, ub, hb) {
        let Bb = this.length - ub;
        if (Bb > 0) {
          let bb = hb[hb.length - 1];
          bb instanceof fB ? hb[hb.length - 1] = new fB(bb.length + Bb) : hb.push(null, new fB(Bb - 1))
        }
        if (bb > 0) {
          let ub = hb[0];
          ub instanceof fB ? hb[0] = new fB(bb + ub.length) : hb.unshift(new fB(bb - 1), null)
        }
        return qB.of(hb)
      }
      decomposeLeft(bb, ub) {
        ub.push(new fB(bb - 1), null)
      }
      decomposeRight(bb, ub) {
        ub.push(null, new fB(this.length - bb - 1))
      }
      updateHeight(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Bb = arguments.length > 3 ? arguments[3] : void 0,
          Ob = ub + this.length;
        if (Bb && Bb.from <= ub + this.length && Bb.more) {
          let hb = [],
            Gb = Math.max(ub, Bb.from),
            Ub = -1;
          for (Bb.from > ub && hb.push(new fB(Bb.from - ub - 1).updateHeight(bb, ub)); Gb <= Ob && Bb.more;) {
            let ub = bb.doc.lineAt(Gb).length;
            hb.length && hb.push(null);
            let Ob = Bb.heights[Bb.index++],
              Lb = 0;
            Ob < 0 && (Lb = -Ob, Ob = Bb.heights[Bb.index++]), -1 == Ub ? Ub = Ob : Math.abs(Ob - Ub) >= PB && (Ub = -2);
            let Yb = new FB(ub, Ob, Lb);
            Yb.outdated = !1, hb.push(Yb), Gb += ub + 1
          }
          Gb <= Ob && hb.push(null, new fB(Ob - Gb).updateHeight(bb, Gb));
          let Lb = qB.of(hb);
          return (Ub < 0 || Math.abs(Lb.height - this.height) >= PB || Math.abs(Ub - this.heightMetrics(bb, ub).perLine) >= PB) && (eB = !0), EB(this, Lb)
        }
        return (hb || this.outdated) && (this.setHeight(bb.heightForGap(ub, ub + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class kB extends qB {
      constructor(bb, ub, hb) {
        super(bb.length + ub + hb.length, bb.height + hb.height, ub | (bb.outdated || hb.outdated ? 2 : 0)), this.left = bb, this.right = hb, this.size = bb.size + hb.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(bb, ub, hb, Bb) {
        let Ob = hb + this.left.height;
        return bb < Ob ? this.left.blockAt(bb, ub, hb, Bb) : this.right.blockAt(bb, ub, Ob, Bb + this.left.length + this.break)
      }
      lineAt(bb, ub, hb, Bb, Ob) {
        let Gb = Bb + this.left.height,
          Ub = Ob + this.left.length + this.break,
          Lb = ub == IB.ByHeight ? bb < Gb : bb < Ub,
          Yb = Lb ? this.left.lineAt(bb, ub, hb, Bb, Ob) : this.right.lineAt(bb, ub, hb, Gb, Ub);
        if (this.break || (Lb ? Yb.to < Ub : Yb.from > Ub)) return Yb;
        let Sb = ub == IB.ByPosNoHeight ? IB.ByPosNoHeight : IB.ByPos;
        return Lb ? Yb.join(this.right.lineAt(Ub, Sb, hb, Gb, Ub)) : this.left.lineAt(Ub, Sb, hb, Bb, Ob).join(Yb)
      }
      forEachLine(bb, ub, hb, Bb, Ob, Gb) {
        let Ub = Bb + this.left.height,
          Lb = Ob + this.left.length + this.break;
        if (this.break) bb < Lb && this.left.forEachLine(bb, ub, hb, Bb, Ob, Gb), ub >= Lb && this.right.forEachLine(bb, ub, hb, Ub, Lb, Gb);
        else {
          let Yb = this.lineAt(Lb, IB.ByPos, hb, Bb, Ob);
          bb < Yb.from && this.left.forEachLine(bb, Yb.from - 1, hb, Bb, Ob, Gb), Yb.to >= bb && Yb.from <= ub && Gb(Yb), ub > Yb.to && this.right.forEachLine(Yb.to + 1, ub, hb, Ub, Lb, Gb)
        }
      }
      replace(bb, ub, hb) {
        let Bb = this.left.length + this.break;
        if (ub < Bb) return this.balanced(this.left.replace(bb, ub, hb), this.right);
        if (bb > this.left.length) return this.balanced(this.left, this.right.replace(bb - Bb, ub - Bb, hb));
        let Ob = [];
        bb > 0 && this.decomposeLeft(bb, Ob);
        let Gb = Ob.length;
        for (let Ub of hb) Ob.push(Ub);
        if (bb > 0 && TB(Ob, Gb - 1), ub < this.length) {
          let bb = Ob.length;
          this.decomposeRight(ub, Ob), TB(Ob, bb)
        }
        return qB.of(Ob)
      }
      decomposeLeft(bb, ub) {
        let hb = this.left.length;
        if (bb <= hb) return this.left.decomposeLeft(bb, ub);
        ub.push(this.left), this.break && (hb++, bb >= hb && ub.push(null)), bb > hb && this.right.decomposeLeft(bb - hb, ub)
      }
      decomposeRight(bb, ub) {
        let hb = this.left.length,
          Bb = hb + this.break;
        if (bb >= Bb) return this.right.decomposeRight(bb - Bb, ub);
        bb < hb && this.left.decomposeRight(bb, ub), this.break && bb < Bb && ub.push(null), ub.push(this.right)
      }
      balanced(bb, ub) {
        return bb.size > 2 * ub.size || ub.size > 2 * bb.size ? qB.of(this.break ? [bb, null, ub] : [bb, ub]) : (this.left = EB(this.left, bb), this.right = EB(this.right, ub), this.setHeight(bb.height + ub.height), this.outdated = bb.outdated || ub.outdated, this.size = bb.size + ub.size, this.length = bb.length + this.break+ub.length, this)
      }
      updateHeight(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Bb = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: Ob,
            right: Gb
          } = this,
          Ub = ub + Ob.length + this.break,
          Lb = null;
        return Bb && Bb.from <= ub + Ob.length && Bb.more ? Lb = Ob = Ob.updateHeight(bb, ub, hb, Bb) : Ob.updateHeight(bb, ub, hb), Bb && Bb.from <= Ub + Gb.length && Bb.more ? Lb = Gb = Gb.updateHeight(bb, Ub, hb, Bb) : Gb.updateHeight(bb, Ub, hb), Lb ? this.balanced(Ob, Gb) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function TB(bb, ub) {
      let hb, Bb;
      null == bb[ub] && (hb = bb[ub - 1]) instanceof fB && (Bb = bb[ub + 1]) instanceof fB && bb.splice(ub - 1, 3, new fB(hb.length + 1 + Bb.length))
    }
    class cB {
      constructor(bb, ub) {
        this.pos = bb, this.oracle = ub, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = bb
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(bb, ub) {
        if (this.lineStart > -1) {
          let bb = Math.min(ub, this.lineEnd),
            hb = this.nodes[this.nodes.length - 1];
          hb instanceof FB ? hb.length += bb - this.pos : (bb > this.pos || !this.isCovered) && this.nodes.push(new FB(bb - this.pos, -1, 0)), this.writtenTo = bb, ub > bb && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = ub
      }
      point(bb, ub, hb) {
        if (bb < ub || hb.heightRelevant) {
          let Bb = hb.widget ? hb.widget.estimatedHeight : 0,
            Ob = hb.widget ? hb.widget.lineBreaks : 0;
          Bb < 0 && (Bb = this.oracle.lineHeight);
          let Gb = ub - bb;
          hb.block ? this.Zub(new VB(Gb, Bb, hb)) : (Gb || Ob || Bb >= 5) && this.addLineDeco(Bb, Ob, Gb)
        } else ub > bb && this.span(bb, ub);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: bb,
          to: ub
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = bb, this.lineEnd = ub, this.writtenTo < bb && ((this.writtenTo < bb - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, bb - 1)), this.nodes.push(null)), this.pos > bb && this.nodes.push(new FB(this.pos - bb, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(bb, ub) {
        let hb = new fB(ub - bb);
        return this.oracle.doc.lineAt(bb).to == ub && (hb.flags |= 4), hb
      }
      ensureLine() {
        this.enterLine();
        let bb = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (bb instanceof FB) return bb;
        let ub = new FB(0, -1, 0);
        return this.nodes.push(ub), ub
      }
      Zub(bb) {
        this.enterLine();
        let ub = bb.deco;
        ub && ub.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(bb), this.writtenTo = this.pos = this.pos + bb.length, ub && ub.endSide > 0 && (this.covering = bb)
      }
      addLineDeco(bb, ub, hb) {
        let Bb = this.ensureLine();
        Bb.length += hb, Bb.collapsed += hb, Bb.widgetHeight = Math.max(Bb.widgetHeight, bb), Bb.breaks += ub, this.writtenTo = this.pos = this.pos + hb
      }
      finish(bb) {
        let ub = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || ub instanceof FB || this.isCovered ? (this.writtenTo < this.pos || null == ub) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new FB(0, -1, 0));
        let hb = bb;
        for (let Bb of this.nodes) Bb instanceof FB && Bb.updateHeight(this.oracle, hb), hb += Bb ? Bb.length : 1;
        return this.nodes
      }
      static build(bb, ub, hb, Ob) {
        let Gb = new cB(hb, bb);
        return Bb.x.spans(ub, hb, Ob, Gb, 0), Gb.finish(hb)
      }
    }
    class QB {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(bb, ub, hb, Bb) {
        (bb < ub || hb && hb.heightRelevant || Bb && Bb.heightRelevant) && sb(bb, ub, this.changes, 5)
      }
    }

    function RB(bb, ub) {
      let hb = bb.getBoundingClientRect(),
        Bb = bb.ownerDocument,
        Ob = Bb.defaultView || window,
        Gb = Math.max(0, hb.left),
        Ub = Math.min(Ob.innerWidth, hb.right),
        Lb = Math.max(0, hb.top),
        Yb = Math.min(Ob.innerHeight, hb.bottom);
      for (let Sb = bb.parentNode; Sb && Sb != Bb.body;)
        if (1 == Sb.nodeType) {
          let ub = Sb,
            hb = window.getComputedStyle(ub);
          if ((ub.scrollHeight > ub.clientHeight || ub.scrollWidth > ub.clientWidth) && "visible" != hb.overflow) {
            let hb = ub.getBoundingClientRect();
            Gb = Math.max(Gb, hb.left), Ub = Math.min(Ub, hb.right), Lb = Math.max(Lb, hb.top), Yb = Math.min(Sb == bb.parentNode ? Ob.innerHeight : Yb, hb.bottom)
          }
          Sb = "absolute" == hb.position || "fixed" == hb.position ? ub.offsetParent : ub.parentNode
        } else {
          if (11 != Sb.nodeType) break;
          Sb = Sb.host
        } return {
        left: Gb - hb.left,
        right: Math.max(Gb, Ub) - hb.left,
        top: Lb - (hb.top + ub),
        bottom: Math.max(Lb, Yb) - (hb.top + ub)
      }
    }

    function bO(bb, ub) {
      let hb = bb.getBoundingClientRect();
      return {
        left: 0,
        right: hb.right - hb.left,
        top: ub,
        bottom: hb.bottom - (hb.top + ub)
      }
    }
    class uO {
      constructor(bb, ub, hb, Bb) {
        this.from = bb, this.to = ub, this.size = hb, this.displaySize = Bb
      }
      static same(bb, ub) {
        if (bb.length != ub.length) return !1;
        for (let hb = 0; hb < bb.length; hb++) {
          let Bb = bb[hb],
            Ob = ub[hb];
          if (Bb.from != Ob.from || Bb.to != Ob.to || Bb.size != Ob.size) return !1
        }
        return !0
      }
      draw(bb, ub) {
        return vb.replace({
          widget: new hO(this.displaySize * (ub ? bb.scaleY : bb.scaleX), ub)
        }).range(this.from, this.to)
      }
    }
    class hO extends gb {
      constructor(bb, ub) {
        super(), this.size = bb, this.vertical = ub
      }
      eq(bb) {
        return bb.size == this.size && bb.vertical == this.vertical
      }
      toDOM() {
        let bb = document.createElement("div");
        return this.vertical ? bb.style.height = this.size + "px" : (bb.style.width = this.size + "px", bb.style.height = "2px", bb.style.display = "inline-block"), bb
      }
      get estimatedHeight() {
        return this.vertical ? this.size : -1
      }
    }
    class BO {
      constructor(bb, ub) {
        this.view = bb, this.state = ub, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = LO, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = Su.LTR, this.j_ = [], this.mustEnforceCursorAssoc = !1;
        let hb = ub.facet(Ru).some((bb => "function" != typeof bb && "cm-lineWrapping" == bb.class));
        this.heightOracle = new sB(hb), this.stateDeco = YO(ub), this.heightMap = qB.empty().applyChanges(this.stateDeco, Bb.K.empty, this.heightOracle.setDoc(ub.doc), [new Sh(0, 0, 0, ub.doc.length)]);
        for (let Bb = 0; Bb < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); Bb++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = vb.set(this.lineGaps.map((bb => bb.draw(this, !1)))), this.scrollParent = bb.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let bb = [this.viewport],
          {
            main: ub
          } = this.state.selection;
        for (let hb = 0; hb <= 1; hb++) {
          let Bb = hb ? ub.head : ub.anchor;
          if (!bb.some((bb => {
              let {
                from: ub,
                to: hb
              } = bb;
              return Bb >= ub && Bb <= hb
            }))) {
            let {
              from: ub,
              to: hb
            } = this.lineBlockAt(Bb);
            bb.push(new OO(ub, hb))
          }
        }
        return this.viewports = bb.sort(((bb, ub) => bb.from - ub.from)), this.updateScaler()
      }
      updateScaler() {
        let bb = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? LO : new SO(this.heightOracle, this.heightMap, this.viewports), bb.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (bb => {
          this.viewportLines.push(aO(bb, this.scaler))
        }))
      }
      update(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = bb.state;
        let hb = this.stateDeco;
        this.stateDeco = YO(this.state);
        let Ob = bb.changedRanges,
          Gb = Sh.extendWithRanges(Ob, function(bb, ub, hb) {
            let Ob = new QB;
            return Bb.x.compare(bb, ub, hb, Ob, 0), Ob.changes
          }(hb, this.stateDeco, bb ? bb.changes : Bb.ChangeSet.empty(this.state.doc.length))),
          Ub = this.heightMap.height,
          Lb = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        NB(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, bb.startState.doc, this.heightOracle.setDoc(this.state.doc), Gb), (this.heightMap.height != Ub || eB) && (bb.flags |= 2), Lb ? (this.scrollAnchorPos = bb.changes.mapPos(Lb.from, -1), this.scrollAnchorHeight = Lb.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = Ub);
        let Yb = Gb.length ? this.mapViewport(this.viewport, bb.changes) : this.viewport;
        (ub && (ub.range.head < Yb.from || ub.range.head > Yb.to) || !this.viewportIsAppropriate(Yb)) && (Yb = this.getViewport(0, ub));
        let Sb = Yb.from != this.viewport.from || Yb.to != this.viewport.to;
        this.viewport = Yb, bb.flags |= this.updateForViewport(), (Sb || !bb.changes.empty || 2 & bb.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, bb.changes))), bb.flags |= this.computeVisibleRanges(bb.changes), ub && (this.scrollTarget = ub), !this.mustEnforceCursorAssoc && (bb.selectionSet || bb.focusChanged) && bb.view.lineWrapping && bb.state.selection.main.empty && bb.state.selection.main.assoc && !bb.state.facet(Iu) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: bb
        } = this, ub = bb.contentDOM, hb = window.getComputedStyle(ub), Ob = this.heightOracle, Gb = hb.whiteSpace;
        this.defaultTextDirection = "rtl" == hb.direction ? Su.RTL : Su.LTR;
        let Ub = this.heightOracle.mustRefreshForWrapping(Gb) || "refresh" === this.mustMeasureContent,
          Lb = ub.getBoundingClientRect(),
          Yb = Ub || this.mustMeasureContent || this.contentDOMHeight != Lb.height;
        this.contentDOMHeight = Lb.height, this.mustMeasureContent = !1;
        let Sb = 0,
          ab = 0;
        if (Lb.width && Lb.height) {
          let {
            scaleX: bb,
            scaleY: hb
          } = cb(ub, Lb);
          (bb > .005 && Math.abs(this.scaleX - bb) > .005 || hb > .005 && Math.abs(this.scaleY - hb) > .005) && (this.scaleX = bb, this.scaleY = hb, Sb |= 16, Ub = Yb = !0)
        }
        let Hb = (parseInt(hb.paddingTop) || 0) * this.scaleY,
          wb = (parseInt(hb.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == Hb && this.paddingBottom == wb || (this.paddingTop = Hb, this.paddingBottom = wb, Sb |= 18), this.editorWidth != bb.scrollDOM.clientWidth && (Ob.lineWrapping && (Yb = !0), this.editorWidth = bb.scrollDOM.clientWidth, Sb |= 16);
        let Zb = Qb(this.view.contentDOM, !1).y;
        Zb != this.scrollParent && (this.scrollParent = Zb, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let Xb = this.getScrollOffset();
        this.scrollOffset != Xb && (this.scrollAnchorHeight = -1, this.scrollOffset = Xb), this.scrolledToBottom = Gu(this.scrollParent || bb.win);
        let pb = (this.printing ? bO : RB)(ub, this.paddingTop),
          ob = pb.top - this.pixelViewport.top,
          Ab = pb.bottom - this.pixelViewport.bottom;
        this.pixelViewport = pb;
        let lb = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (lb != this.inView && (this.inView = lb, lb && (Yb = !0)), !this.inView && !this.scrollTarget && ! function(bb) {
            let ub = bb.getBoundingClientRect(),
              hb = bb.ownerDocument.defaultView || window;
            return ub.left < hb.innerWidth && ub.right > 0 && ub.top < hb.innerHeight && ub.bottom > 0
          }(bb.dom)) return 0;
        let Kb = Lb.width;
        if (this.contentDOMWidth == Kb && this.editorHeight == bb.scrollDOM.clientHeight || (this.contentDOMWidth = Lb.width, this.editorHeight = bb.scrollDOM.clientHeight, Sb |= 16), Yb) {
          let ub = bb.docView.measureVisibleLineHeights(this.viewport);
          if (Ob.mustRefreshForHeights(ub) && (Ub = !0), Ub || Ob.lineWrapping && Math.abs(Kb - this.contentDOMWidth) > Ob.charWidth) {
            let {
              lineHeight: hb,
              charWidth: Bb,
              textHeight: Lb
            } = bb.docView.measureTextSize();
            Ub = hb > 0 && Ob.refresh(Gb, hb, Bb, Lb, Math.max(5, Kb / Bb), ub), Ub && (bb.docView.minWidth = 0, Sb |= 16)
          }
          ob > 0 && Ab > 0 ? ab = Math.max(ob, Ab) : ob < 0 && Ab < 0 && (ab = Math.min(ob, Ab)), NB();
          for (let hb of this.viewports) {
            let Gb = hb.from == this.viewport.from ? ub : bb.docView.measureVisibleLineHeights(hb);
            this.heightMap = (Ub ? qB.empty().applyChanges(this.stateDeco, Bb.K.empty, this.heightOracle, [new Sh(0, 0, 0, bb.state.doc.length)]) : this.heightMap).updateHeight(Ob, 0, Ub, new MB(hb.from, Gb))
          }
          eB && (Sb |= 2)
        }
        let Wb = !this.viewportIsAppropriate(this.viewport, ab) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return Wb && (2 & Sb && (Sb |= this.updateScaler()), this.viewport = this.getViewport(ab, this.scrollTarget), Sb |= this.updateForViewport()), (2 & Sb || Wb) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(Ub ? [] : this.lineGaps, bb)), Sb |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, bb.docView.enforceCursorAssoc()), Sb
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(bb, ub) {
        let hb = .5 - Math.max(-.5, Math.min(.5, bb / 1e3 / 2)),
          Bb = this.heightMap,
          Ob = this.heightOracle,
          {
            visibleTop: Gb,
            visibleBottom: Ub
          } = this,
          Lb = new OO(Bb.lineAt(Gb - 1e3 * hb, IB.ByHeight, Ob, 0, 0).from, Bb.lineAt(Ub + 1e3 * (1 - hb), IB.ByHeight, Ob, 0, 0).to);
        if (ub) {
          let {
            head: bb
          } = ub.range;
          if (bb < Lb.from || bb > Lb.to) {
            let hb, Gb = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              Ub = Bb.lineAt(bb, IB.ByPos, Ob, 0, 0);
            hb = "center" == ub.y ? (Ub.top + Ub.bottom) / 2 - Gb / 2 : "start" == ub.y || "nearest" == ub.y && bb < Lb.from ? Ub.top : Ub.bottom - Gb, Lb = new OO(Bb.lineAt(hb - 500, IB.ByHeight, Ob, 0, 0).from, Bb.lineAt(hb + Gb + 500, IB.ByHeight, Ob, 0, 0).to)
          }
        }
        return Lb
      }
      mapViewport(bb, ub) {
        let hb = ub.mapPos(bb.from, -1),
          Bb = ub.mapPos(bb.to, 1);
        return new OO(this.heightMap.lineAt(hb, IB.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(Bb, IB.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(bb) {
        let {
          from: ub,
          to: hb
        } = bb, Bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: Ob
        } = this.heightMap.lineAt(ub, IB.ByPos, this.heightOracle, 0, 0), {
          bottom: Gb
        } = this.heightMap.lineAt(hb, IB.ByPos, this.heightOracle, 0, 0), {
          visibleTop: Ub,
          visibleBottom: Lb
        } = this;
        return (0 == ub || Ob <= Ub - Math.max(10, Math.min(-Bb, 250))) && (hb == this.state.doc.length || Gb >= Lb + Math.max(10, Math.min(Bb, 250))) && Ob > Ub - 2e3 && Gb < Lb + 2e3
      }
      mapLineGaps(bb, ub) {
        if (!bb.length || ub.empty) return bb;
        let hb = [];
        for (let Bb of bb) ub.touchesRange(Bb.from, Bb.to) || hb.push(new uO(ub.mapPos(Bb.from), ub.mapPos(Bb.to), Bb.size, Bb.displaySize));
        return hb
      }
      ensureLineGaps(bb, ub) {
        let hb = this.heightOracle.lineWrapping,
          Ob = hb ? 1e4 : 2e3,
          Gb = Ob >> 1,
          Ub = Ob << 1;
        if (this.defaultTextDirection != Su.LTR && !hb) return [];
        let Lb = [],
          Yb = (Ob, Ub, Sb, ab) => {
            if (Ub - Ob < Gb) return;
            let Hb = this.state.selection.main,
              wb = [Hb.from];
            Hb.empty || wb.push(Hb.to);
            for (let bb of wb)
              if (bb > Ob && bb < Ub) return Yb(Ob, bb - 10, Sb, ab), void Yb(bb + 10, Ub, Sb, ab);
            let Zb = function(bb, ub) {
              for (let hb of bb)
                if (ub(hb)) return hb;
              return
            }(bb, (bb => bb.from >= Sb.from && bb.to <= Sb.to && Math.abs(bb.from - Ob) < Gb && Math.abs(bb.to - Ub) < Gb && !wb.some((ub => bb.from < ub && bb.to > ub))));
            if (!Zb) {
              if (Ub < Sb.to && ub && hb && ub.j_.some((bb => bb.from <= Ub && bb.to >= Ub))) {
                let bb = ub.moveToLineBoundary(Bb.j.cursor(Ub), !1, !0).head;
                bb > Ob && (Ub = bb)
              }
              let bb = this.gapSize(Sb, Ob, Ub, ab);
              Zb = new uO(Ob, Ub, bb, hb || bb < 2e6 ? bb : 2e6)
            }
            Lb.push(Zb)
          },
          Sb = ub => {
            if (ub.length < Ub || ub.type != ib.Text) return;
            let Gb = function(bb, ub, hb) {
              let Ob = [],
                Gb = bb,
                Ub = 0;
              Bb.x.spans(hb, bb, ub, {
                span() {},
                point(bb, ub) {
                  bb > Gb && (Ob.push({
                    from: Gb,
                    to: bb
                  }), Ub += bb - Gb), Gb = ub
                }
              }, 20), Gb < ub && (Ob.push({
                from: Gb,
                to: ub
              }), Ub += ub - Gb);
              return {
                total: Ub,
                tp: Ob
              }
            }(ub.from, ub.to, this.stateDeco);
            if (Gb.total < Ub) return;
            let Lb, Sb, ab = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (hb) {
              let bb, hb, Bb = Ob / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != ab) {
                let Ob = UO(Gb, ab),
                  Ub = ((this.visibleBottom - this.visibleTop) / 2 + Bb) / ub.height;
                bb = Ob - Ub, hb = Ob + Ub
              } else bb = (this.visibleTop - ub.top - Bb) / ub.height, hb = (this.visibleBottom - ub.top + Bb) / ub.height;
              Lb = GO(Gb, bb), Sb = GO(Gb, hb)
            } else {
              let hb = Gb.total * this.heightOracle.charWidth,
                Bb = Ob * this.heightOracle.charWidth,
                Ub = 0;
              if (hb > 2e6)
                for (let Ob of bb) Ob.from >= ub.from && Ob.from < ub.to && Ob.size != Ob.displaySize && Ob.from * this.heightOracle.charWidth + Ub < this.pixelViewport.left && (Ub = Ob.size - Ob.displaySize);
              let Yb, Hb, wb = this.pixelViewport.left + Ub,
                Zb = this.pixelViewport.right + Ub;
              if (null != ab) {
                let bb = UO(Gb, ab),
                  ub = ((Zb - wb) / 2 + Bb) / hb;
                Yb = bb - ub, Hb = bb + ub
              } else Yb = (wb - Bb) / hb, Hb = (Zb + Bb) / hb;
              Lb = GO(Gb, Yb), Sb = GO(Gb, Hb)
            }
            Lb > ub.from && Yb(ub.from, Lb, ub, Gb), Sb < ub.to && Yb(Sb, ub.to, ub, Gb)
          };
        for (let Bb of this.viewportLines) Array.isArray(Bb.type) ? Bb.type.forEach(Sb) : Sb(Bb);
        return Lb
      }
      gapSize(bb, ub, hb, Bb) {
        let Ob = UO(Bb, hb) - UO(Bb, ub);
        return this.heightOracle.lineWrapping ? bb.height * Ob : Bb.total * this.heightOracle.charWidth * Ob
      }
      updateLineGaps(bb) {
        uO.same(bb, this.lineGaps) || (this.lineGaps = bb, this.lineGapDeco = vb.set(bb.map((bb => bb.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(bb) {
        let ub = this.stateDeco;
        this.lineGaps.length && (ub = ub.concat(this.lineGapDeco));
        let hb = [];
        Bb.x.spans(ub, this.viewport.from, this.viewport.to, {
          span(bb, ub) {
            hb.push({
              from: bb,
              to: ub
            })
          },
          point() {}
        }, 20);
        let Ob = 0;
        if (hb.length != this.j_.length) Ob = 12;
        else
          for (let Bb = 0; Bb < hb.length && !(8 & Ob); Bb++) {
            let ub = this.j_[Bb],
              Gb = hb[Bb];
            ub.from == Gb.from && ub.to == Gb.to || (Ob |= 4, bb && bb.mapPos(ub.from, -1) == Gb.from && bb.mapPos(ub.to, 1) == Gb.to || (Ob |= 8))
          }
        return this.j_ = hb, Ob
      }
      lineBlockAt(bb) {
        return bb >= this.viewport.from && bb <= this.viewport.to && this.viewportLines.find((ub => ub.from <= bb && ub.to >= bb)) || aO(this.heightMap.lineAt(bb, IB.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(bb) {
        return bb >= this.viewportLines[0].top && bb <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((ub => ub.top <= bb && ub.bottom >= bb)) || aO(this.heightMap.lineAt(this.scaler.fromDOM(bb), IB.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(bb) {
        let ub = this.lineBlockAtHeight(bb + 8);
        return ub.from >= this.viewport.from || this.viewportLines[0].top - bb > 200 ? ub : this.viewportLines[0]
      }
      elementAtHeight(bb) {
        return aO(this.heightMap.blockAt(this.scaler.fromDOM(bb), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class OO {
      constructor(bb, ub) {
        this.from = bb, this.to = ub
      }
    }

    function GO(bb, ub) {
      let {
        total: hb,
        tp: Bb
      } = bb;
      if (ub <= 0) return Bb[0].from;
      if (ub >= 1) return Bb[Bb.length - 1].to;
      let Ob = Math.floor(hb * ub);
      for (let Gb = 0;; Gb++) {
        let {
          from: bb,
          to: ub
        } = Bb[Gb], hb = ub - bb;
        if (Ob <= hb) return bb + Ob;
        Ob -= hb
      }
    }

    function UO(bb, ub) {
      let hb = 0;
      for (let {
          from: Bb,
          to: Ob
        }
        of bb.tp) {
        if (ub <= Ob) {
          hb += ub - Bb;
          break
        }
        hb += Ob - Bb
      }
      return hb / bb.total
    }
    const LO = {
      toDOM: bb => bb,
      fromDOM: bb => bb,
      scale: 1,
      eq(bb) {
        return bb == this
      }
    };

    function YO(bb) {
      let ub = bb.facet(bh).filter((bb => "function" != typeof bb)),
        hb = bb.facet(hh).filter((bb => "function" != typeof bb));
      return hb.length && ub.push(Bb.x.join(hb)), ub
    }
    class SO {
      constructor(bb, ub, hb) {
        let Bb = 0,
          Ob = 0,
          Gb = 0;
        this.viewports = hb.map((hb => {
          let {
            from: Ob,
            to: Gb
          } = hb, Ub = ub.lineAt(Ob, IB.ByPos, bb, 0, 0).top, Lb = ub.lineAt(Gb, IB.ByPos, bb, 0, 0).bottom;
          return Bb += Lb - Ub, {
            from: Ob,
            to: Gb,
            top: Ub,
            bottom: Lb,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - Bb) / (ub.height - Bb);
        for (let Ub of this.viewports) Ub.domTop = Gb + (Ub.top - Ob) * this.scale, Gb = Ub.domBottom = Ub.domTop + (Ub.bottom - Ub.top), Ob = Ub.bottom
      }
      toDOM(bb) {
        for (let ub = 0, hb = 0, Bb = 0;; ub++) {
          let Ob = ub < this.viewports.length ? this.viewports[ub] : null;
          if (!Ob || bb < Ob.top) return Bb + (bb - hb) * this.scale;
          if (bb <= Ob.bottom) return Ob.domTop + (bb - Ob.top);
          hb = Ob.bottom, Bb = Ob.domBottom
        }
      }
      fromDOM(bb) {
        for (let ub = 0, hb = 0, Bb = 0;; ub++) {
          let Ob = ub < this.viewports.length ? this.viewports[ub] : null;
          if (!Ob || bb < Ob.domTop) return hb + (bb - Bb) / this.scale;
          if (bb <= Ob.domBottom) return Ob.top + (bb - Ob.domTop);
          hb = Ob.bottom, Bb = Ob.domBottom
        }
      }
      eq(bb) {
        return bb instanceof SO && (this.scale == bb.scale && this.viewports.length == bb.viewports.length && this.viewports.every(((ub, hb) => ub.from == bb.viewports[hb].from && ub.to == bb.viewports[hb].to)))
      }
    }

    function aO(bb, ub) {
      if (1 == ub.scale) return bb;
      let hb = ub.toDOM(bb.top),
        Bb = ub.toDOM(bb.bottom);
      return new mB(bb.from, bb.length, hb, Bb - hb, Array.isArray(bb._content) ? bb._content.map((bb => aO(bb, ub))) : bb._content)
    }
    const HO = Bb.n.define({
        combine: bb => bb.join(" ")
      }),
      wO = Bb.n.define({
        combine: bb => bb.indexOf(!0) > -1
      }),
      ZO = Ob.e.newName(),
      XO = Ob.e.newName(),
      pO = Ob.e.newName(),
      oO = {
        "&light": "." + XO,
        "&dark": "." + pO
      };

    function AO(bb, ub, hb) {
      return new Ob.e(ub, {
        finish: ub => /&/.test(ub) ? ub.replace(/&\w*/, (ub => {
          if ("&" == ub) return bb;
          if (!hb || !hb[ub]) throw new RangeError(`Unsupported selector: ${ub}`);
          return hb[ub]
        })) : bb + " " + ub
      })
    }
    const lO = AO("." + ZO, {
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
      }, oO),
      KO = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      WO = rb.ie && rb.ie_version <= 11;
    class CO {
      constructor(bb) {
        this.view = bb, this.active = !1, this.editContext = null, this.selectionRange = new Rb, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = bb.contentDOM, this.observer = new MutationObserver((ub => {
          for (let bb of ub) this.queue.push(bb);
          (rb.ie && rb.ie_version <= 11 || rb.ios && bb.composing) && ub.some((bb => "childList" == bb.type && bb.removedNodes.length || "characterData" == bb.type && bb.oldValue.length > bb.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !rb.android || !1 === bb.constructor.EDIT_CONTEXT || rb.chrome && rb.chrome_version < 126 || (this.editContext = new jO(bb), bb.state.facet(Fu) && (bb.contentDOM.editContext = this.editContext.editContext)), WO && (this.onCharData = bb => {
          this.queue.push({
            target: bb.target,
            type: "characterData",
            oldValue: bb.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.lK = this.lK.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var bb;
          (null === (bb = this.view.docView) || void 0 === bb ? void 0 : bb.lastUpdate) < Date.now() - 75 && this.lK()
        })), this.resizeScroll.observe(bb.scrollDOM)), this.addWindowListeners(this.win = bb.win), this.start(), "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver((bb => {
          this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), bb.length > 0 && bb[bb.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")))
        }), {
          threshold: [0, .001]
        }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((bb => {
          bb.length > 0 && bb[bb.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"))
        }), {})), this.listenForScroll(), this.readSelectionRange()
      }
      onScrollChanged(bb) {
        this.view.inputState.runHandlers("scroll", bb), this.intersecting && this.view.measure()
      }
      onScroll(bb) {
        this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(bb)
      }
      lK() {
        this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout((() => {
          this.resizeTimeout = -1, this.view.requestMeasure()
        }), 50))
      }
      onPrint(bb) {
        ("change" != bb.type && bb.type || bb.matches) && (this.view.viewState.printing = !0, this.view.measure(), setTimeout((() => {
          this.view.viewState.printing = !1, this.view.requestMeasure()
        }), 500))
      }
      updateGaps(bb) {
        if (this.gapIntersection && (bb.length != this.gaps.length || this.gaps.some(((ub, hb) => ub != bb[hb])))) {
          this.gapIntersection.disconnect();
          for (let ub of bb) this.gapIntersection.observe(ub);
          this.gaps = bb
        }
      }
      onSelectionChange(bb) {
        let ub = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: hb
        } = this, Bb = this.selectionRange;
        if (hb.state.facet(Fu) ? hb.root.activeElement != this.dom : !Pb(this.dom, Bb)) return;
        let Ob = Bb.anchorNode && hb.docView.tile.nearest(Bb.anchorNode);
        Ob && Ob.isWidget() && Ob.widget.ignoreEvent(bb) ? ub || (this.selectionChanged = !1) : (rb.ie && rb.ie_version <= 11 || rb.android && rb.chrome) && !hb.state.selection.main.empty && Bb.focusNode && Eb(Bb.focusNode, Bb.focusOffset, Bb.anchorNode, Bb.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: bb
        } = this, ub = mb(bb.root);
        if (!ub) return !1;
        let hb = rb.safari && 11 == bb.root.nodeType && bb.root.activeElement == this.dom && function(bb, ub) {
          if (ub.getComposedRanges) {
            let hb = ub.getComposedRanges(bb.root)[0];
            if (hb) return rO(bb, hb)
          }
          let hb = null;

          function Bb(bb) {
            bb.preventDefault(), bb.stopImmediatePropagation(), hb = bb.getTargetRanges()[0]
          }
          return bb.contentDOM.addEventListener("beforeinput", Bb, !0), bb.dom.ownerDocument.execCommand("indent"), bb.contentDOM.removeEventListener("beforeinput", Bb, !0), hb ? rO(bb, hb) : null
        }(this.view, ub) || ub;
        if (!hb || this.selectionRange.eq(hb)) return !1;
        let Bb = Pb(this.dom, hb);
        return Bb && !this.selectionChanged && bb.inputState.lastFocusTime > Date.now() - 200 && bb.inputState.lastTouchTime < Date.now() - 300 && function(bb, ub) {
          let hb = ub.focusNode,
            Bb = ub.focusOffset;
          if (!hb || ub.anchorNode != hb || ub.anchorOffset != Bb) return !1;
          for (Bb = Math.min(Bb, fb(hb));;)
            if (Bb) {
              if (1 != hb.nodeType) return !1;
              let bb = hb.childNodes[Bb - 1];
              "false" == bb.contentEditable ? Bb-- : (hb = bb, Bb = fb(hb))
            } else {
              if (hb == bb) return !0;
              Bb = yb(hb), hb = hb.parentNode
            }
        }(this.dom, hb) ? (this.view.inputState.lastFocusTime = 0, bb.docView.updateSelection(), !1) : (this.selectionRange.setRange(hb), Bb && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(bb, ub) {
        this.selectionRange.set(bb.node, bb.offset, ub.node, ub.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let bb = 0,
          ub = null;
        for (let hb = this.dom; hb;)
          if (1 == hb.nodeType) !ub && bb < this.scrollTargets.length && this.scrollTargets[bb] == hb ? bb++ : ub || (ub = this.scrollTargets.slice(0, bb)), ub && ub.push(hb), hb = hb.assignedSlot || hb.parentNode;
          else {
            if (11 != hb.nodeType) break;
            hb = hb.host
          } if (bb < this.scrollTargets.length && !ub && (ub = this.scrollTargets.slice(0, bb)), ub) {
          for (let bb of this.scrollTargets) bb.removeEventListener("scroll", this.onScroll);
          for (let bb of this.scrollTargets = ub) bb.addEventListener("scroll", this.onScroll)
        }
      }
      ignore(bb) {
        if (!this.active) return bb();
        try {
          return this.stop(), bb()
        } finally {
          this.start(), this.clear()
        }
      }
      start() {
        this.active || (this.observer.observe(this.dom, KO), WO && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), WO && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(bb, ub) {
        var hb;
        if (!this.delayedAndroidKey) {
          let bb = () => {
            let bb = this.delayedAndroidKey;
            if (bb) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = bb.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && bb.force && Ou(this.dom, bb.key, bb.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(bb)
        }
        this.delayedAndroidKey && "Enter" != bb || (this.delayedAndroidKey = {
          key: bb,
          keyCode: ub,
          force: this.lastChange < Date.now() - 50 || !!(null === (hb = this.delayedAndroidKey) || void 0 === hb ? void 0 : hb.force)
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
        for (let bb of this.observer.takeRecords()) this.queue.push(bb);
        return this.queue
      }
      processRecords() {
        let bb = this.pendingRecords();
        bb.length && (this.queue = []);
        let ub = -1,
          hb = -1,
          Bb = !1;
        for (let Ob of bb) {
          let bb = this.readMutation(Ob);
          bb && (bb.typeOver && (Bb = !0), -1 == ub ? ({
            from: ub,
            to: hb
          } = bb) : (ub = Math.min(bb.from, ub), hb = Math.max(bb.to, hb)))
        }
        return {
          from: ub,
          to: hb,
          typeOver: Bb
        }
      }
      readChange() {
        let {
          from: bb,
          to: ub,
          typeOver: hb
        } = this.processRecords(), Bb = this.selectionChanged && Pb(this.dom, this.selectionRange);
        if (bb < 0 && !Bb) return null;
        bb > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let Ob = new hB(this.view, bb, ub, hb);
        return this.view.docView.domChanged = {
          newSel: Ob.newSel ? Ob.newSel.main : null
        }, Ob
      }
      flush() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        bb && this.readSelectionRange();
        let ub = this.readChange();
        if (!ub) return this.view.requestMeasure(), !1;
        let hb = this.view.state,
          Bb = OB(this.view, ub);
        return this.view.state == hb && (ub.domChanged || ub.newSel && !LB(this.view.state.selection, ub.newSel.main)) && this.view.update([]), Bb
      }
      readMutation(bb) {
        let ub = this.view.docView.tile.nearest(bb.target);
        if (!ub || ub.isWidget()) return null;
        if (ub.markDirty("attributes" == bb.type), "childList" == bb.type) {
          let hb = dO(ub, bb.previousSibling || bb.target.previousSibling, -1),
            Bb = dO(ub, bb.nextSibling || bb.target.nextSibling, 1);
          return {
            from: hb ? ub.posAfter(hb) : ub.posAtStart,
            to: Bb ? ub.posBefore(Bb) : ub.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == bb.type ? {
          from: ub.posAtStart,
          to: ub.posAtEnd,
          typeOver: bb.target.nodeValue == bb.oldValue
        } : null
      }
      setWindow(bb) {
        bb != this.win && (this.removeWindowListeners(this.win), this.win = bb, this.addWindowListeners(this.win))
      }
      addWindowListeners(bb) {
        bb.addEventListener("resize", this.lK), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : bb.addEventListener("beforeprint", this.onPrint), bb.addEventListener("scroll", this.onScroll), bb.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(bb) {
        bb.removeEventListener("scroll", this.onScroll), bb.removeEventListener("resize", this.lK), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : bb.removeEventListener("beforeprint", this.onPrint), bb.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(bb) {
        this.editContext && (this.editContext.update(bb), bb.startState.facet(Fu) != bb.state.facet(Fu) && (bb.view.contentDOM.editContext = bb.state.facet(Fu) ? this.editContext.editContext : null))
      }
      destroy() {
        var bb, ub, hb;
        this.stop(), null === (bb = this.intersection) || void 0 === bb || bb.disconnect(), null === (ub = this.gapIntersection) || void 0 === ub || ub.disconnect(), null === (hb = this.resizeScroll) || void 0 === hb || hb.disconnect();
        for (let Bb of this.scrollTargets) Bb.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function dO(bb, ub, hb) {
      for (; ub;) {
        let Bb = wh.get(ub);
        if (Bb && Bb.parent == bb) return Bb;
        let Ob = ub.parentNode;
        ub = Ob != bb.dom ? Ob : hb > 0 ? ub.nextSibling : ub.previousSibling
      }
      return null
    }

    function rO(bb, ub) {
      let hb = ub.startContainer,
        Bb = ub.startOffset,
        Ob = ub.endContainer,
        Gb = ub.endOffset,
        Ub = bb.docView.domAtPos(bb.state.selection.main.anchor, 1);
      return Eb(Ub.node, Ub.offset, Ob, Gb) && ([hb, Bb, Ob, Gb] = [Ob, Gb, hb, Bb]), {
        anchorNode: hb,
        anchorOffset: Bb,
        focusNode: Ob,
        focusOffset: Gb
      }
    }
    class jO {
      constructor(bb) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(bb.state);
        let ub = this.editContext = new window.EditContext({
          text: bb.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, bb.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(bb.state.selection.main.head)
        });
        this.handlers.textupdate = hb => {
          let Ob = bb.state.selection.main,
            {
              anchor: Gb,
              head: Ub
            } = Ob,
            Lb = this.toEditorPos(hb.updateRangeStart),
            Yb = this.toEditorPos(hb.updateRangeEnd);
          bb.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: hb.updateRangeStart,
            editorBase: Lb,
            drifted: !1
          });
          let Sb = Yb - Lb > hb.text.length;
          Lb == this.from && Gb < this.from ? Lb = Gb : Yb == this.to && Gb > this.to && (Yb = Gb);
          let ab = UB(bb.state.sliceDoc(Lb, Yb), hb.text, (Sb ? Ob.from : Ob.to) - Lb, Sb ? "end" : null);
          if (!ab) {
            let ub = Bb.j.single(this.toEditorPos(hb.selectionStart), this.toEditorPos(hb.selectionEnd));
            return void(LB(ub, Ob) || bb.dispatch({
              selection: ub,
              userEvent: "select"
            }))
          }
          let Hb = {
            from: ab.from + Lb,
            to: ab.toA + Lb,
            insert: Bb.K.of(hb.text.slice(ab.from, ab.toB).split("\n"))
          };
          if ((rb.mac || rb.android) && Hb.from == Ub - 1 && /^\. ?$/.test(hb.text) && "off" == bb.contentDOM.getAttribute("autocorrect") && (Hb = {
              from: Lb,
              to: Yb,
              insert: Bb.K.of([hb.text.replace(".", " ")])
            }), this.pendingContextChange = Hb, !bb.state.readOnly) {
            let ub = this.to - this.from + (Hb.to - Hb.from + Hb.insert.length);
            GB(bb, Hb, Bb.j.single(this.toEditorPos(hb.selectionStart, ub), this.toEditorPos(hb.selectionEnd, ub)))
          }
          this.pendingContextChange && (this.revertPending(bb.state), this.setSelection(bb.state)), Hb.from < Hb.to && !Hb.insert.length && bb.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(ub.text.slice(Math.max(0, hb.updateRangeStart - 1), Math.min(ub.text.length, hb.updateRangeStart + 1))) && this.handlers.compositionend(hb)
        }, this.handlers.characterboundsupdate = hb => {
          let Bb = [],
            Ob = null;
          for (let ub = this.toEditorPos(hb.rangeStart), Gb = this.toEditorPos(hb.rangeEnd); ub < Gb; ub++) {
            let hb = bb.coordsForChar(ub);
            Ob = hb && new DOMRect(hb.left, hb.top, hb.right - hb.left, hb.bottom - hb.top) || Ob || new DOMRect, Bb.push(Ob)
          }
          ub.updateCharacterBounds(hb.rangeStart, Bb)
        }, this.handlers.textformatupdate = ub => {
          let hb = [];
          for (let bb of ub.getTextFormats()) {
            let ub = bb.underlineStyle,
              Bb = bb.underlineThickness;
            if (!/none/i.test(ub) && !/none/i.test(Bb)) {
              let Ob = this.toEditorPos(bb.rangeStart),
                Gb = this.toEditorPos(bb.rangeEnd);
              if (Ob < Gb) {
                let bb = `text-decoration: underline ${/^[a-z]/.test(ub)?ub+" ":"Dashed"==ub?"dashed ":"Squiggle"==ub?"wavy ":""}${/thin/i.test(Bb)?1:2}px`;
                hb.push(vb.mark({
                  attributes: {
                    style: bb
                  }
                }).range(Ob, Gb))
              }
            }
          }
          bb.dispatch({
            effects: yu.of(vb.set(hb))
          })
        }, this.handlers.compositionstart = () => {
          bb.inputState.composing < 0 && (bb.inputState.composing = 0, bb.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (bb.inputState.composing = -1, bb.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: ub
            } = this.composing;
            this.composing = null, ub && this.reset(bb.state)
          }
        };
        for (let hb in this.handlers) ub.addEventListener(hb, this.handlers[hb]);
        this.measureReq = {
          read: bb => {
            this.editContext.updateControlBounds(bb.contentDOM.getBoundingClientRect());
            let ub = mb(bb.root);
            ub && ub.rangeCount && this.editContext.updateSelectionBounds(ub.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(bb) {
        let ub = 0,
          hb = !1,
          Bb = this.pendingContextChange;
        return bb.changes.iterChanges(((Ob, Gb, Ub, Lb, Yb) => {
          if (hb) return;
          let Sb = Yb.length - (Gb - Ob);
          if (Bb && Gb >= Bb.to) {
            if (Bb.from == Ob && Bb.to == Gb && Bb.insert.eq(Yb)) return Bb = this.pendingContextChange = null, ub += Sb, void(this.to += Sb);
            Bb = null, this.revertPending(bb.state)
          }
          if (Ob += ub, (Gb += ub) <= this.from) this.from += Sb, this.to += Sb;
          else if (Ob < this.to) {
            if (Ob < this.from || Gb > this.to || this.to - this.from + Yb.length > 3e4) return void(hb = !0);
            this.editContext.updateText(this.toContextPos(Ob), this.toContextPos(Gb), Yb.toString()), this.to += Sb
          }
          ub += Sb
        })), Bb && !hb && this.revertPending(bb.state), !hb
      }
      update(bb) {
        let ub = this.pendingContextChange,
          hb = bb.startState.selection.main;
        this.composing && (this.composing.drifted || !bb.changes.touchesRange(hb.from, hb.to) && bb.transactions.some((bb => !bb.isUserEvent("input.type") && bb.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = bb.changes.mapPos(this.composing.editorBase)) : this.applyEdits(bb) && this.rangeIsValid(bb.state) ? (bb.docChanged || bb.selectionSet || ub) && this.setSelection(bb.state) : (this.pendingContextChange = null, this.reset(bb.state)), (bb.geometryChanged || bb.docChanged || bb.selectionSet) && bb.view.requestMeasure(this.measureReq)
      }
      resetRange(bb) {
        let {
          head: ub
        } = bb.selection.main;
        this.from = Math.max(0, ub - 1e4), this.to = Math.min(bb.doc.length, ub + 1e4)
      }
      reset(bb) {
        this.resetRange(bb), this.editContext.updateText(0, this.editContext.text.length, bb.doc.sliceString(this.from, this.to)), this.setSelection(bb)
      }
      revertPending(bb) {
        let ub = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(ub.from), this.toContextPos(ub.from + ub.insert.length), bb.doc.sliceString(ub.from, ub.to))
      }
      setSelection(bb) {
        let {
          main: ub
        } = bb.selection, hb = this.toContextPos(Math.max(this.from, Math.min(this.to, ub.anchor))), Bb = this.toContextPos(ub.head);
        this.editContext.selectionStart == hb && this.editContext.selectionEnd == Bb || this.editContext.updateSelection(hb, Bb)
      }
      rangeIsValid(bb) {
        let {
          head: ub
        } = bb.selection.main;
        return !(this.from > 0 && ub - this.from < 500 || this.to < bb.doc.length && this.to - ub < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        bb = Math.min(bb, ub);
        let hb = this.composing;
        return hb && hb.drifted ? hb.editorBase + (bb - hb.contextBase) : bb + this.from
      }
      toContextPos(bb) {
        let ub = this.composing;
        return ub && ub.drifted ? ub.contextBase + (bb - ub.editorBase) : bb - this.from
      }
      destroy() {
        for (let bb in this.handlers) this.editContext.removeEventListener(bb, this.handlers[bb])
      }
    }
    class nO {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get j_() {
        return this.viewState.j_
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
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var ub;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), bb.parent && bb.parent.appendChild(this.dom);
        let {
          dispatch: hb
        } = bb;
        this.dispatchTransactions = bb.dispatchTransactions || hb && (bb => bb.forEach((bb => hb(bb, this)))) || (bb => this.update(bb)), this.dispatch = this.dispatch.bind(this), this._root = bb.root || function(bb) {
          for (; bb;) {
            if (bb && (9 == bb.nodeType || 11 == bb.nodeType && bb.host)) return bb;
            bb = bb.assignedSlot || bb.parentNode
          }
          return null
        }(bb.parent) || document, this.viewState = new BO(this, bb.state || Bb.k.create(bb)), bb.scrollTo && bb.scrollTo.is(Eu) && (this.viewState.scrollTarget = bb.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(ku).map((bb => new cu(bb)));
        for (let Bb of this.plugins) Bb.update(this);
        this.observer = new CO(this), this.inputState = new YB(this), this.inputState.ensureHandlers(this.plugins), this.docView = new Nh(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (ub = document.fonts) || void 0 === ub ? void 0 : ub.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var bb = arguments.length, ub = new Array(bb), hb = 0; hb < bb; hb++) ub[hb] = arguments[hb];
        let Ob = 1 == ub.length && ub[0] instanceof Bb.O ? ub : 1 == ub.length && Array.isArray(ub[0]) ? ub[0] : [this.state.update(...ub)];
        this.dispatchTransactions(Ob, this)
      }
      update(bb) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let ub, hb = !1,
          Ob = !1,
          Gb = this.state;
        for (let Bb of bb) {
          if (Bb.startState != Gb) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          Gb = Bb.state
        }
        if (this.destroyed) return void(this.viewState.state = Gb);
        let Ub = this.hasFocus,
          Lb = 0,
          Yb = null;
        bb.some((bb => bb.annotation(gB))) ? (this.inputState.notifiedFocused = Ub, Lb = 1) : Ub != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = Ub, Yb = iB(Gb, Ub), Yb || (Lb = 1));
        let Sb = this.observer.delayedAndroidKey,
          ab = null;
        if (Sb ? (this.observer.clearDelayedAndroidKey(), ab = this.observer.readChange(), (ab && !this.state.doc.eq(Gb.doc) || !this.state.selection.eq(Gb.selection)) && (ab = null)) : this.observer.clear(), Gb.facet(Bb.k.phrases) != this.state.facet(Bb.k.phrases)) return this.setState(Gb);
        ub = ah.create(this, Gb, bb), ub.flags |= Lb;
        let Hb = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let ub of bb) {
            if (Hb && (Hb = Hb.map(ub.changes)), ub.scrollIntoView) {
              let {
                main: bb
              } = ub.state.selection, {
                x: hb,
                y: Ob
              } = this.state.facet(nO.cursorScrollMargin);
              Hb = new qu(bb.empty ? bb : Bb.j.cursor(bb.head, bb.head > bb.anchor ? -1 : 1), "nearest", "nearest", Ob, hb)
            }
            for (let bb of ub.effects) bb.is(Eu) && (Hb = bb.value.clip(this.state))
          }
          this.viewState.update(ub, Hb), this.bidiCache = zO.update(this.bidiCache, ub.changes), ub.empty || (this.updatePlugins(ub), this.inputState.update(ub)), hb = this.docView.update(ub), this.state.facet(Yh) != this.styleModules && this.mountStyles(), Ob = this.updateAttrs(), this.showAnnouncements(bb), this.docView.updateSelection(hb, bb.some((bb => bb.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (ub.startState.facet(HO) != ub.state.facet(HO) && (this.viewState.mustMeasureContent = !0), (hb || Ob || Hb || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), hb && this.docViewUpdate(), !ub.empty)
          for (let Bb of this.state.facet(Ju)) try {
            Bb(ub)
          } catch (wb) {
            Vu(this.state, wb, "update listener")
          }(Yb || ab) && Promise.resolve().then((() => {
            Yb && this.state == Yb.startState && this.dispatch(Yb), ab && !OB(this, ab) && Sb.force && Ou(this.contentDOM, Sb.key, Sb.keyCode)
          }))
      }
      setState(bb) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = bb);
        this.updateState = 2;
        let ub = this.hasFocus;
        try {
          for (let bb of this.plugins) bb.destroy(this);
          this.viewState = new BO(this, bb), this.plugins = bb.facet(ku).map((bb => new cu(bb))), this.pluginMap.clear();
          for (let bb of this.plugins) bb.update(this);
          this.docView.destroy(), this.docView = new Nh(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        ub && this.focus(), this.requestMeasure()
      }
      updatePlugins(bb) {
        let ub = bb.startState.facet(ku),
          hb = bb.state.facet(ku);
        if (ub != hb) {
          let Bb = [];
          for (let Ob of hb) {
            let hb = ub.indexOf(Ob);
            if (hb < 0) Bb.push(new cu(Ob));
            else {
              let ub = this.plugins[hb];
              ub.mustUpdate = bb, Bb.push(ub)
            }
          }
          for (let ub of this.plugins) ub.mustUpdate != bb && ub.destroy(this);
          this.plugins = Bb, this.pluginMap.clear()
        } else
          for (let Bb of this.plugins) Bb.mustUpdate = bb;
        for (let Bb = 0; Bb < this.plugins.length; Bb++) this.plugins[Bb].update(this);
        ub != hb && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let ub of this.plugins) {
          let hb = ub.value;
          if (hb && hb.docViewUpdate) try {
            hb.docViewUpdate(this)
          } catch (bb) {
            Vu(this.state, bb, "doc view update listener")
          }
        }
      }
      measure() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, bb && this.observer.forceFlush();
        let ub = null,
          hb = this.viewState.scrollParent,
          Bb = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: Ob,
            scrollAnchorHeight: Gb
          } = this.viewState;
        Math.abs(Bb - this.viewState.scrollOffset) > 1 && (Gb = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let bb = 0;; bb++) {
            if (Gb < 0)
              if (Gu(hb || this.win)) Ob = -1, Gb = this.viewState.heightMap.height;
              else {
                let bb = this.viewState.scrollAnchorAt(Bb);
                Ob = bb.from, Gb = bb.top
              } this.updateState = 1;
            let Lb = this.viewState.measure();
            if (!Lb && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (bb > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let Yb = [];
            4 & Lb || ([this.measureRequests, Yb] = [Yb, this.measureRequests]);
            let Sb = Yb.map((bb => {
                try {
                  return bb.read(this)
                } catch (ub) {
                  return Vu(this.state, ub), xO
                }
              })),
              ab = ah.create(this, this.state, []),
              Hb = !1;
            ab.flags |= Lb, ub ? ub.flags |= Lb : ub = ab, this.updateState = 2, ab.empty || (this.updatePlugins(ab), this.inputState.update(ab), this.updateAttrs(), Hb = this.docView.update(ab), Hb && this.docViewUpdate());
            for (let bb = 0; bb < Yb.length; bb++)
              if (Sb[bb] != xO) try {
                let ub = Yb[bb];
                ub.write && ub.write(Sb[bb], this)
              } catch (Ub) {
                Vu(this.state, Ub)
              }
            if (Hb && this.docView.updateSelection(!0), !ab.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, Gb = -1;
                  continue
                } {
                  let bb = ((Ob < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(Ob).top) - Gb) / this.scaleY;
                  if ((bb > 1 || bb < -1) && (hb == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    Bb += bb, hb ? hb.scrollTop += bb : this.win.scrollBy(0, bb), Gb = -1;
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
        if (ub && !ub.empty)
          for (let Lb of this.state.facet(Ju)) Lb(ub)
      }
      get themeClasses() {
        return ZO + " " + (this.state.facet(wO) ? pO : XO) + " " + this.state.facet(HO)
      }
      updateAttrs() {
        let bb = gO(this, Qu, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          ub = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(Fu) ? "true" : "false",
            class: "cm-content",
            style: `${rb.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (ub["aria-readonly"] = "true"), gO(this, Ru, ub);
        let hb = this.observer.ignore((() => {
          let hb = xb(this.contentDOM, this.contentAttrs, ub),
            Bb = xb(this.dom, this.editorAttrs, bb);
          return hb || Bb
        }));
        return this.editorAttrs = bb, this.contentAttrs = ub, hb
      }
      showAnnouncements(bb) {
        let ub = !0;
        for (let hb of bb)
          for (let bb of hb.effects)
            if (bb.is(nO.announce)) {
              ub && (this.announceDOM.textContent = ""), ub = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = bb.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(Yh);
        let bb = this.state.facet(nO.cspNonce);
        Ob.e.mount(this.root, this.styleModules.concat(lO).reverse(), bb ? {
          nonce: bb
        } : void 0)
      }
      readMeasured() {
        if (2 == this.updateState) throw new Error("Reading the editor layout isn't allowed during an update");
        0 == this.updateState && this.measureScheduled > -1 && this.measure(!1)
      }
      requestMeasure(bb) {
        if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame((() => this.measure()))), bb) {
          if (this.measureRequests.indexOf(bb) > -1) return;
          if (null != bb.key)
            for (let ub = 0; ub < this.measureRequests.length; ub++)
              if (this.measureRequests[ub].key === bb.key) return void(this.measureRequests[ub] = bb);
          this.measureRequests.push(bb)
        }
      }
      plugin(bb) {
        let ub = this.pluginMap.get(bb);
        return (void 0 === ub || ub && ub.plugin != bb) && this.pluginMap.set(bb, ub = this.plugins.find((ub => ub.plugin == bb)) || null), ub && ub.update(this).value
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
      elementAtHeight(bb) {
        return this.readMeasured(), this.viewState.elementAtHeight(bb)
      }
      lineBlockAtHeight(bb) {
        return this.readMeasured(), this.viewState.lineBlockAtHeight(bb)
      }
      get viewportLineBlocks() {
        return this.viewState.viewportLines
      }
      lineBlockAt(bb) {
        return this.viewState.lineBlockAt(bb)
      }
      get contentHeight() {
        return this.viewState.contentHeight
      }
      moveByChar(bb, ub, hb) {
        return Fh(this, bb, Eh(this, bb, ub, hb))
      }
      moveByGroup(bb, ub) {
        return Fh(this, bb, Eh(this, bb, ub, (ub => function(bb, ub, hb) {
          let Ob = bb.state.charCategorizer(ub),
            Gb = Ob(hb);
          return bb => {
            let ub = Ob(bb);
            return Gb == Bb.i.Space && (Gb = ub), Gb == ub
          }
        }(this, bb.head, ub))))
      }
      visualLineSide(bb, ub) {
        let hb = this.bidiSpans(bb),
          Ob = this.textDirectionAt(bb.from),
          Gb = hb[ub ? hb.length - 1 : 0];
        return Bb.j.cursor(Gb.side(ub, Ob) + bb.from, Gb.forward(!ub, Ob) ? 1 : -1)
      }
      moveToLineBoundary(bb, ub) {
        return function(bb, ub, hb, Ob) {
          let Gb = qh(bb, ub.head, ub.assoc || -1),
            Ub = Ob && Gb.type == ib.Text && (bb.lineWrapping || Gb.widgetLineBreaks) ? bb.coordsAtPos(ub.assoc < 0 && ub.head > Gb.from ? ub.head - 1 : ub.head) : null;
          if (Ub) {
            let ub = bb.dom.getBoundingClientRect(),
              Ob = bb.textDirectionAt(Gb.from),
              Lb = bb.posAtCoords({
                x: hb == (Ob == Su.LTR) ? ub.right - 1 : ub.left + 1,
                y: (Ub.top + Ub.bottom) / 2
              });
            if (null != Lb) return Bb.j.cursor(Lb, hb ? -1 : 1)
          }
          return Bb.j.cursor(hb ? Gb.to : Gb.from, hb ? -1 : 1)
        }(this, bb, ub, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(bb, ub, hb) {
        return Fh(this, bb, function(bb, ub, hb, Ob) {
          let Gb = ub.head,
            Ub = hb ? 1 : -1;
          if (Gb == (hb ? bb.state.doc.length : 0)) return Bb.j.cursor(Gb, ub.assoc);
          let Lb, Yb = ub.goalColumn,
            Sb = bb.contentDOM.getBoundingClientRect(),
            ab = bb.coordsAtPos(Gb, ub.assoc || ((ub.empty ? hb : ub.head == ub.from) ? 1 : -1)),
            Hb = bb.documentTop;
          if (ab) null == Yb && (Yb = ab.left - Sb.left), Lb = Ub < 0 ? ab.top : ab.bottom;
          else {
            let ub = bb.viewState.lineBlockAt(Gb);
            null == Yb && (Yb = Math.min(Sb.right - Sb.left, bb.defaultCharacterWidth * (Gb - ub.from))), Lb = (Ub < 0 ? ub.top : ub.bottom) + Hb
          }
          let wb = Sb.left + Yb,
            Zb = bb.viewState.heightOracle.textHeight >> 1,
            Xb = null !== Ob && void 0 !== Ob ? Ob : Zb;
          for (let pb = 0;; pb += Zb) {
            let ub = Lb + (Xb + pb) * Ub,
              Ob = kh(bb, {
                x: wb,
                y: ub
              }, !1, Ub);
            if (hb ? ub > Sb.bottom : ub < Sb.top) return Bb.j.cursor(Ob.pos, Ob.assoc);
            let Gb = bb.coordsAtPos(Ob.pos, Ob.assoc),
              ab = Gb ? (Gb.top + Gb.bottom) / 2 : 0;
            if (!Gb || (hb ? ab > Lb : ab < Lb)) return Bb.j.cursor(Ob.pos, Ob.assoc, void 0, Yb)
          }
        }(this, bb, ub, hb))
      }
      domAtPos(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(bb, ub)
      }
      posAtDOM(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(bb, ub)
      }
      posAtCoords(bb) {
        let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let hb = kh(this, bb, ub);
        return hb && hb.pos
      }
      posAndSideAtCoords(bb) {
        let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), kh(this, bb, ub)
      }
      coordsAtPos(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let hb = this.docView.coordsAt(bb, ub);
        if (!hb || hb.left == hb.right) return hb;
        let Bb = this.state.doc.lineAt(bb),
          Ob = this.bidiSpans(Bb);
        return kb(hb, Ob[Ku.find(Ob, bb - Bb.from, -1, ub)].dir == Su.LTR == ub > 0)
      }
      coordsForChar(bb) {
        return this.readMeasured(), this.docView.coordsForChar(bb)
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
      textDirectionAt(bb) {
        return !this.state.facet(mu) || bb < this.viewport.from || bb > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(bb))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(bb) {
        if (bb.length > DO) return nu(bb.length);
        let ub, hb = this.textDirectionAt(bb.from);
        for (let Ob of this.bidiCache)
          if (Ob.from == bb.from && Ob.dir == hb && (Ob.fresh || Wu(Ob.isolates, ub = Gh(this, bb)))) return Ob.order;
        ub || (ub = Gh(this, bb));
        let Bb = ju(bb.text, hb, ub);
        return this.bidiCache.push(new zO(bb.from, bb.to, hb, ub, !0, Bb)), Bb
      }
      get hasFocus() {
        var bb;
        return (this.dom.ownerDocument.hasFocus() || rb.safari && (null === (bb = this.inputState) || void 0 === bb ? void 0 : bb.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          hu(this.contentDOM), this.docView.updateSelection()
        }))
      }
      setRoot(bb) {
        this._root != bb && (this._root = bb, this.observer.setWindow((9 == bb.nodeType ? bb : bb.ownerDocument).defaultView || window), this.mountStyles())
      }
      destroy() {
        this.root.activeElement == this.contentDOM && this.contentDOM.blur();
        for (let bb of this.plugins) bb.destroy(this);
        this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0
      }
      static scrollIntoView(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var hb, Ob, Gb, Ub;
        return Eu.of(new qu("number" == typeof bb ? Bb.j.cursor(bb) : bb, null !== (hb = ub.y) && void 0 !== hb ? hb : "nearest", null !== (Ob = ub.x) && void 0 !== Ob ? Ob : "nearest", null !== (Gb = ub.yMargin) && void 0 !== Gb ? Gb : 5, null !== (Ub = ub.xMargin) && void 0 !== Ub ? Ub : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: bb,
          scrollLeft: ub
        } = this.scrollDOM, hb = this.viewState.scrollAnchorAt(bb);
        return Eu.of(new qu(Bb.j.cursor(hb.from), "start", "start", hb.top - bb, ub, !0))
      }
      setTabFocusMode(bb) {
        null == bb ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof bb ? this.inputState.tabFocusMode = bb ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + bb)
      }
      static domEventHandlers(bb) {
        return Tu.define((() => ({})), {
          eventHandlers: bb
        })
      }
      static domEventObservers(bb) {
        return Tu.define((() => ({})), {
          eventObservers: bb
        })
      }
      static theme(bb, ub) {
        let hb = Ob.e.newName(),
          Bb = [HO.of(hb), Yh.of(AO(`.${hb}`, bb))];
        return ub && ub.dark && Bb.push(wO.of(!0)), Bb
      }
      static baseTheme(bb) {
        return Bb.t.lowest(Yh.of(AO("." + ZO, bb, oO)))
      }
      static findFromDOM(bb) {
        var ub;
        let hb = bb.querySelector(".cm-content"),
          Bb = hb && wh.get(hb) || wh.get(bb);
        return (null === (ub = null === Bb || void 0 === Bb ? void 0 : Bb.root) || void 0 === ub ? void 0 : ub.view) || null
      }
    }
    nO.styleModule = Yh, nO.inputHandler = eu, nO.clipboardInputFilter = su, nO.clipboardOutputFilter = Mu, nO.scrollHandler = Pu, nO.focusChangeEffect = Nu, nO.perLineTextDirection = mu, nO.exceptionSink = tu, nO.updateListener = Ju, nO.editable = Fu, nO.mouseSelectionStyle = vu, nO.dragMovesSelection = iu, nO.clickAddsSelectionRange = gu, nO.ZG = bh, nO.blockWrappers = uh, nO.outerDecorations = hh, nO.atomicRanges = Bh, nO.bidiIsolatedRanges = Oh, nO.cursorScrollMargin = Bb.n.define({
      combine: bb => {
        let ub = 5,
          hb = 5;
        for (let Bb of bb) "number" == typeof Bb ? ub = hb = Bb : ({
          x: ub,
          y: hb
        } = Bb);
        return {
          x: ub,
          y: hb
        }
      }
    }), nO.scrollMargins = Uh, nO.darkTheme = wO, nO.cspNonce = Bb.n.define({
      combine: bb => bb.length ? bb[0] : ""
    }), nO.contentAttributes = Ru, nO.editorAttributes = Qu, nO.lineWrapping = nO.contentAttributes.of({
      class: "cm-lineWrapping"
    }), nO.announce = Bb.D.define();
    const DO = 4096,
      xO = {};
    class zO {
      constructor(bb, ub, hb, Bb, Ob, Gb) {
        this.from = bb, this.to = ub, this.dir = hb, this.isolates = Bb, this.fresh = Ob, this.order = Gb
      }
      static update(bb, ub) {
        if (ub.empty && !bb.some((bb => bb.fresh))) return bb;
        let hb = [],
          Bb = bb.length ? bb[bb.length - 1].dir : Su.LTR;
        for (let Ob = Math.max(0, bb.length - 10); Ob < bb.length; Ob++) {
          let Gb = bb[Ob];
          Gb.dir != Bb || ub.touchesRange(Gb.from, Gb.to) || hb.push(new zO(ub.mapPos(Gb.from, 1), ub.mapPos(Gb.to, -1), Gb.dir, Gb.isolates, !1, Gb.order))
        }
        return hb
      }
    }

    function gO(bb, ub, hb) {
      for (let Bb = bb.state.facet(ub), Ob = Bb.length - 1; Ob >= 0; Ob--) {
        let ub = Bb[Ob],
          Gb = "function" == typeof ub ? ub(bb) : ub;
        Gb && jb(Gb, hb)
      }
      return hb
    }
    const iO = rb.mac ? "mac" : rb.windows ? "win" : rb.linux ? "linux" : "key";

    function vO(bb, ub, hb) {
      return ub.altKey && (bb = "Alt-" + bb), ub.ctrlKey && (bb = "Ctrl-" + bb), ub.metaKey && (bb = "Meta-" + bb), !1 !== hb && ub.shiftKey && (bb = "Shift-" + bb), bb
    }
    const tO = Bb.t.default(nO.domEventHandlers({
        keydown: (bb, ub) => PO(NO(ub.state), bb, ub, "editor")
      })),
      JO = Bb.n.define({
        enables: tO
      }),
      eO = new WeakMap;

    function NO(bb) {
      let ub = bb.facet(JO),
        hb = eO.get(ub);
      return hb || eO.set(ub, hb = function(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iO,
          hb = Object.create(null),
          Bb = Object.create(null),
          Ob = (bb, ub) => {
            let hb = Bb[bb];
            if (null == hb) Bb[bb] = ub;
            else if (hb != ub) throw new Error("Key binding " + bb + " is used both as a regular binding and as a multi-stroke prefix")
          },
          Gb = (bb, Bb, Gb, Ub, Lb) => {
            var Yb, Sb;
            let ab = hb[bb] || (hb[bb] = Object.create(null)),
              Hb = Bb.split(/ (?!$)/).map((bb => function(bb, ub) {
                const hb = bb.split(/-(?!$)/);
                let Bb, Ob, Gb, Ub, Lb = hb[hb.length - 1];
                "Space" == Lb && (Lb = " ");
                for (let Yb = 0; Yb < hb.length - 1; ++Yb) {
                  const bb = hb[Yb];
                  if (/^(cmd|meta|m)$/i.test(bb)) Ub = !0;
                  else if (/^a(lt)?$/i.test(bb)) Bb = !0;
                  else if (/^(c|ctrl|control)$/i.test(bb)) Ob = !0;
                  else if (/^s(hift)?$/i.test(bb)) Gb = !0;
                  else {
                    if (!/^mod$/i.test(bb)) throw new Error("Unrecognized modifier name: " + bb);
                    "mac" == ub ? Ub = !0 : Ob = !0
                  }
                }
                return Bb && (Lb = "Alt-" + Lb), Ob && (Lb = "Ctrl-" + Lb), Ub && (Lb = "Meta-" + Lb), Gb && (Lb = "Shift-" + Lb), Lb
              }(bb, ub)));
            for (let ub = 1; ub < Hb.length; ub++) {
              let hb = Hb.slice(0, ub).join(" ");
              Ob(hb, !0), ab[hb] || (ab[hb] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [ub => {
                  let Bb = MO = {
                    view: ub,
                    prefix: hb,
                    scope: bb
                  };
                  return setTimeout((() => {
                    MO == Bb && (MO = null)
                  }), mO), !0
                }]
              })
            }
            let wb = Hb.join(" ");
            Ob(wb, !1);
            let Zb = ab[wb] || (ab[wb] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (Sb = null === (Yb = ab._any) || void 0 === Yb ? void 0 : Yb.run) || void 0 === Sb ? void 0 : Sb.slice()) || []
            });
            Gb && Zb.run.push(Gb), Ub && (Zb.preventDefault = !0), Lb && (Zb.stopPropagation = !0)
          };
        for (let Ub of bb) {
          let bb = Ub.scope ? Ub.scope.split(" ") : ["editor"];
          if (Ub.any)
            for (let ub of bb) {
              let bb = hb[ub] || (hb[ub] = Object.create(null));
              bb._any || (bb._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: Bb
              } = Ub;
              for (let ub in bb) bb[ub].run.push((bb => Bb(bb, IO)))
            }
          let Bb = Ub[ub] || Ub.key;
          if (Bb)
            for (let ub of bb) Gb(ub, Bb, Ub.run, Ub.preventDefault, Ub.stopPropagation), Ub.shift && Gb(ub, "Shift-" + Bb, Ub.shift, Ub.preventDefault, Ub.stopPropagation)
        }
        return hb
      }(ub.reduce(((bb, ub) => bb.concat(ub)), []))), hb
    }

    function sO(bb, ub, hb) {
      return PO(NO(bb.state), ub, bb, hb)
    }
    let MO = null;
    const mO = 4e3;
    let IO = null;

    function PO(bb, ub, hb, Ob) {
      IO = ub;
      let Sb = function(bb) {
          var ub = !(Lb && bb.metaKey && bb.shiftKey && !bb.ctrlKey && !bb.altKey || Yb && bb.shiftKey && bb.key && 1 == bb.key.length || "Unidentified" == bb.key) && bb.key || (bb.shiftKey ? Ub : Gb)[bb.keyCode] || bb.key || "Unidentified";
          return "Esc" == ub && (ub = "Escape"), "Del" == ub && (ub = "Delete"), "Left" == ub && (ub = "ArrowLeft"), "Up" == ub && (ub = "ArrowUp"), "Right" == ub && (ub = "ArrowRight"), "Down" == ub && (ub = "ArrowDown"), ub
        }(ub),
        ab = (0, Bb.Q)(Sb, 0),
        Hb = (0, Bb.T)(ab) == Sb.length && " " != Sb,
        wb = "",
        Zb = !1,
        Xb = !1,
        pb = !1;
      MO && MO.view == hb && MO.scope == Ob && (wb = MO.prefix + " ", ZB.indexOf(ub.keyCode) < 0 && (Xb = !0, MO = null));
      let ob, Ab, lb = new Set,
        Kb = bb => {
          if (bb) {
            for (let ub of bb.run)
              if (!lb.has(ub) && (lb.add(ub), ub(hb))) return bb.stopPropagation && (pb = !0), !0;
            bb.preventDefault && (bb.stopPropagation && (pb = !0), Xb = !0)
          }
          return !1
        },
        Wb = bb[Ob];
      return Wb && (Kb(Wb[wb + vO(Sb, ub, !Hb)]) ? Zb = !0 : !Hb || !(ub.altKey || ub.metaKey || ub.ctrlKey) || rb.windows && ub.ctrlKey && ub.altKey || rb.mac && ub.altKey && !ub.ctrlKey && !ub.metaKey || !(ob = Gb[ub.keyCode]) || ob == Sb ? Hb && ub.shiftKey && Kb(Wb[wb + vO(Sb, ub, !0)]) && (Zb = !0) : (Kb(Wb[wb + vO(ob, ub, !0)]) || ub.shiftKey && (Ab = Ub[ub.keyCode]) != Sb && Ab != ob && Kb(Wb[wb + vO(Ab, ub, !1)])) && (Zb = !0), !Zb && Kb(Wb._any) && (Zb = !0)), Xb && (Zb = !0), Zb && pb && ub.stopPropagation(), IO = null, Zb
    }
    class qO {
      constructor(bb, ub, hb, Bb, Ob) {
        this.className = bb, this.left = ub, this.top = hb, this.width = Bb, this.height = Ob
      }
      draw() {
        let bb = document.createElement("div");
        return bb.className = this.className, this.adjust(bb), bb
      }
      update(bb, ub) {
        return ub.className == this.className && (this.adjust(bb), !0)
      }
      adjust(bb) {
        bb.style.left = this.left + "px", bb.style.top = this.top + "px", null != this.width && (bb.style.width = this.width + "px"), bb.style.height = this.height + "px"
      }
      eq(bb) {
        return this.left == bb.left && this.top == bb.top && this.width == bb.width && this.height == bb.height && this.className == bb.className
      }
      static forRange(bb, ub, hb) {
        if (hb.empty) {
          let Bb = bb.coordsAtPos(hb.head, hb.assoc || 1);
          if (!Bb) return [];
          let Ob = EO(bb);
          return [new qO(ub, Bb.left - Ob.left, Bb.top - Ob.top, null, Bb.bottom - Bb.top)]
        }
        return function(bb, ub, hb) {
          if (hb.to <= bb.viewport.from || hb.from >= bb.viewport.to) return [];
          let Bb = Math.max(hb.from, bb.viewport.from),
            Ob = Math.min(hb.to, bb.viewport.to),
            Gb = bb.textDirection == Su.LTR,
            Ub = bb.contentDOM,
            Lb = Ub.getBoundingClientRect(),
            Yb = EO(bb),
            Sb = Ub.querySelector(".cm-line"),
            ab = Sb && window.getComputedStyle(Sb),
            Hb = Lb.left + (ab ? parseInt(ab.paddingLeft) + Math.min(0, parseInt(ab.textIndent)) : 0),
            wb = Lb.right - (ab ? parseInt(ab.paddingRight) : 0),
            Zb = qh(bb, Bb, 1),
            Xb = qh(bb, Ob, -1),
            pb = Zb.type == ib.Text ? Zb : null,
            ob = Xb.type == ib.Text ? Xb : null;
          pb && (bb.lineWrapping || Zb.widgetLineBreaks) && (pb = yO(bb, Bb, 1, pb));
          ob && (bb.lineWrapping || Xb.widgetLineBreaks) && (ob = yO(bb, Ob, -1, ob));
          if (pb && ob && pb.from == ob.from && pb.to == ob.to) return lb(Kb(hb.from, hb.to, pb));
          {
            let ub = pb ? Kb(hb.from, null, pb) : Wb(Zb, !1),
              Bb = ob ? Kb(null, hb.to, ob) : Wb(Xb, !0),
              Ob = [];
            return (pb || Zb).to < (ob || Xb).from - (pb && ob ? 1 : 0) || Zb.widgetLineBreaks > 1 && ub.bottom + bb.defaultLineHeight / 2 < Bb.top ? Ob.push(Ab(Hb, ub.bottom, wb, Bb.top)) : ub.bottom < Bb.top && bb.elementAtHeight((ub.bottom + Bb.top) / 2).type == ib.Text && (ub.bottom = Bb.top = (ub.bottom + Bb.top) / 2), lb(ub).concat(Ob).concat(lb(Bb))
          }

          function Ab(bb, hb, Bb, Ob) {
            return new qO(ub, bb - Yb.left, hb - Yb.top, Math.max(0, Bb - bb), Ob - hb)
          }

          function lb(bb) {
            let {
              top: ub,
              bottom: hb,
              horizontal: Bb
            } = bb, Ob = [];
            for (let Gb = 0; Gb < Bb.length; Gb += 2) Ob.push(Ab(Bb[Gb], ub, Bb[Gb + 1], hb));
            return Ob
          }

          function Kb(ub, hb, Bb) {
            let Ob = 1e9,
              Ub = -1e9,
              Lb = [];

            function Yb(ub, hb, Yb, Sb, ab) {
              let Zb = bb.coordsAtPos(ub, ub == Bb.to ? -2 : 2),
                Xb = bb.coordsAtPos(Yb, Yb == Bb.from ? 2 : -2);
              Zb && Xb && (Ob = Math.min(Zb.top, Xb.top, Ob), Ub = Math.max(Zb.bottom, Xb.bottom, Ub), ab == Su.LTR ? Lb.push(Gb && hb ? Hb : Zb.left, Gb && Sb ? wb : Xb.right) : Lb.push(!Gb && Sb ? Hb : Xb.left, !Gb && hb ? wb : Zb.right))
            }
            let Sb = null !== ub && void 0 !== ub ? ub : Bb.from,
              ab = null !== hb && void 0 !== hb ? hb : Bb.to;
            for (let Gb of bb.j_)
              if (Gb.to > Sb && Gb.from < ab)
                for (let Bb = Math.max(Gb.from, Sb), Ob = Math.min(Gb.to, ab);;) {
                  let Gb = bb.state.doc.lineAt(Bb);
                  for (let Ub of bb.bidiSpans(Gb)) {
                    let bb = Ub.from + Gb.from,
                      Lb = Ub.to + Gb.from;
                    if (bb >= Ob) break;
                    Lb > Bb && Yb(Math.max(bb, Bb), null == ub && bb <= Sb, Math.min(Lb, Ob), null == hb && Lb >= ab, Ub.dir)
                  }
                  if (Bb = Gb.to + 1, Bb >= Ob) break
                }
            return 0 == Lb.length && Yb(Sb, null == ub, ab, null == hb, bb.textDirection), {
              top: Ob,
              bottom: Ub,
              horizontal: Lb
            }
          }

          function Wb(bb, ub) {
            let hb = Lb.top + (ub ? bb.top : bb.bottom);
            return {
              top: hb,
              bottom: hb,
              horizontal: []
            }
          }
        }(bb, ub, hb)
      }
    }

    function EO(bb) {
      let ub = bb.scrollDOM.getBoundingClientRect();
      return {
        left: (bb.textDirection == Su.LTR ? ub.left : ub.right - bb.scrollDOM.clientWidth * bb.scaleX) - bb.scrollDOM.scrollLeft * bb.scaleX,
        top: ub.top - bb.scrollDOM.scrollTop * bb.scaleY
      }
    }

    function yO(bb, ub, hb, Bb) {
      let Ob = bb.coordsAtPos(ub, 2 * hb);
      if (!Ob) return Bb;
      let Gb = bb.dom.getBoundingClientRect(),
        Ub = (Ob.top + Ob.bottom) / 2,
        Lb = bb.posAtCoords({
          x: Gb.left + 1,
          y: Ub
        }),
        Yb = bb.posAtCoords({
          x: Gb.right - 1,
          y: Ub
        });
      return null == Lb || null == Yb ? Bb : {
        from: Math.max(Bb.from, Math.min(Lb, Yb)),
        to: Math.min(Bb.to, Math.max(Lb, Yb))
      }
    }
    class VO {
      constructor(bb, ub) {
        this.view = bb, this.layer = ub, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = bb.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), ub.above && this.dom.classList.add("cm-layer-above"), ub.class && this.dom.classList.add(ub.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(bb.state), bb.requestMeasure(this.measureReq), ub.mount && ub.mount(this.dom, bb)
      }
      update(bb) {
        bb.startState.facet(FO) != bb.state.facet(FO) && this.setOrder(bb.state), (this.layer.update(bb, this.dom) || bb.geometryChanged) && (this.scale(), bb.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(bb) {
        !1 !== this.layer.updateOnDocViewUpdate && bb.requestMeasure(this.measureReq)
      }
      setOrder(bb) {
        let ub = 0,
          hb = bb.facet(FO);
        for (; ub < hb.length && hb[ub] != this.layer;) ub++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - ub)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: bb,
          scaleY: ub
        } = this.view;
        bb == this.scaleX && ub == this.scaleY || (this.scaleX = bb, this.scaleY = ub, this.dom.style.transform = `scale(${1/bb}, ${1/ub})`)
      }
      draw(bb) {
        if (bb.length != this.drawn.length || bb.some(((bb, ub) => {
            return hb = bb, Bb = this.drawn[ub], !(hb.constructor == Bb.constructor && hb.eq(Bb));
            var hb, Bb
          }))) {
          let ub = this.dom.firstChild,
            hb = 0;
          for (let Bb of bb) Bb.update && ub && Bb.constructor && this.drawn[hb].constructor && Bb.update(ub, this.drawn[hb]) ? (ub = ub.nextSibling, hb++) : this.dom.insertBefore(Bb.draw(), ub);
          for (; ub;) {
            let bb = ub.nextSibling;
            ub.remove(), ub = bb
          }
          this.drawn = bb, rb.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const FO = Bb.n.define();

    function fO(bb) {
      return [Tu.define((ub => new VO(ub, bb))), FO.of(bb)]
    }
    const kO = Bb.n.define({
      combine: bb => (0, Bb.V)(bb, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (bb, ub) => Math.min(bb, ub),
        drawRangeCursor: (bb, ub) => bb || ub
      })
    });

    function TO() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [kO.of(bb), QO, bG, uG, Iu.of(!0)]
    }

    function cO(bb) {
      return bb.startState.facet(kO) != bb.state.facet(kO)
    }
    const QO = fO({
      above: !0,
      markers(bb) {
        let {
          state: ub
        } = bb, hb = ub.facet(kO), Ob = [];
        for (let Gb of ub.selection.tp) {
          let Ub = Gb == ub.selection.main;
          if (Gb.empty || hb.drawRangeCursor && !(Ub && rb.ios && hb.iosSelectionHandles)) {
            let ub = Ub ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              hb = Gb.empty ? Gb : Bb.j.cursor(Gb.head, Gb.assoc);
            for (let Bb of qO.forRange(bb, ub, hb)) Ob.push(Bb)
          }
        }
        return Ob
      },
      update(bb, ub) {
        bb.transactions.some((bb => bb.selection)) && (ub.style.animationName = "cm-blink" == ub.style.animationName ? "cm-blink2" : "cm-blink");
        let hb = cO(bb);
        return hb && RO(bb.state, ub), bb.docChanged || bb.selectionSet || hb
      },
      mount(bb, ub) {
        RO(ub.state, bb)
      },
      class: "cm-cursorLayer"
    });

    function RO(bb, ub) {
      ub.style.animationDuration = bb.facet(kO).cursorBlinkRate + "ms"
    }
    const bG = fO({
        above: !1,
        markers(bb) {
          let ub = [],
            {
              main: hb,
              tp: Ob
            } = bb.state.selection;
          for (let Bb of Ob)
            if (!Bb.empty)
              for (let hb of qO.forRange(bb, "cm-selectionBackground", Bb)) ub.push(hb);
          if (rb.ios && !hb.empty && bb.state.facet(kO).iosSelectionHandles) {
            for (let Ob of qO.forRange(bb, "cm-selectionHandle cm-selectionHandle-start", Bb.j.cursor(hb.from, 1))) ub.push(Ob);
            for (let Ob of qO.forRange(bb, "cm-selectionHandle cm-selectionHandle-end", Bb.j.cursor(hb.to, 1))) ub.push(Ob)
          }
          return ub
        },
        update: (bb, ub) => bb.docChanged || bb.selectionSet || bb.viewportChanged || cO(bb),
        class: "cm-selectionLayer"
      }),
      uG = Bb.t.highest(nO.theme({
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
      hG = Bb.D.define({
        map: (bb, ub) => null == bb ? null : ub.mapPos(bb)
      }),
      BG = Bb.G.define({
        create: () => null,
        update: (bb, ub) => (null != bb && (bb = ub.changes.mapPos(bb)), ub.effects.reduce(((bb, ub) => ub.is(hG) ? ub.value : bb), bb))
      }),
      OG = Tu.fromClass(class {
        constructor(bb) {
          this.view = bb, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(bb) {
          var ub;
          let hb = bb.state.field(BG);
          null == hb ? null != this.cursor && (null === (ub = this.cursor) || void 0 === ub || ub.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (bb.startState.field(BG) != hb || bb.docChanged || bb.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: bb
          } = this, ub = bb.state.field(BG), hb = null != ub && bb.coordsAtPos(ub);
          if (!hb) return null;
          let Bb = bb.scrollDOM.getBoundingClientRect();
          return {
            left: hb.left - Bb.left + bb.scrollDOM.scrollLeft * bb.scaleX,
            top: hb.top - Bb.top + bb.scrollDOM.scrollTop * bb.scaleY,
            height: hb.bottom - hb.top
          }
        }
        drawCursor(bb) {
          if (this.cursor) {
            let {
              scaleX: ub,
              scaleY: hb
            } = this.view;
            bb ? (this.cursor.style.left = bb.left / ub + "px", this.cursor.style.top = bb.top / hb + "px", this.cursor.style.height = bb.height / hb + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(bb) {
          this.view.state.field(BG) != bb && this.view.dispatch({
            effects: hG.of(bb)
          })
        }
      }, {
        eventObservers: {
          dragover(bb) {
            this.setDropPos(this.view.posAtCoords({
              x: bb.clientX,
              y: bb.clientY
            }))
          },
          dragleave(bb) {
            bb.target != this.view.contentDOM && this.view.contentDOM.contains(bb.relatedTarget) || this.setDropPos(null)
          },
          dragend() {
            this.setDropPos(null)
          },
          drop() {
            this.setDropPos(null)
          }
        }
      });

    function GG() {
      return [BG, OG]
    }

    function UG(bb, ub, hb, Bb, Ob) {
      ub.lastIndex = 0;
      for (let Gb, Ub = bb.iterRange(hb, Bb), Lb = hb; !Ub.next().done; Lb += Ub.value.length)
        if (!Ub.lineBreak)
          for (; Gb = ub.exec(Ub.value);) Ob(Lb + Gb.index, Gb)
    }
    class LG {
      constructor(bb) {
        const {
          regexp: ub,
          decoration: hb,
          decorate: Bb,
          boundary: Ob,
          maxLength: Gb = 1e3
        } = bb;
        if (!ub.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = ub, Bb) this.addMatch = (bb, ub, hb, Ob) => Bb(Ob, hb, hb + bb[0].length, bb, ub);
        else if ("function" == typeof hb) this.addMatch = (bb, ub, Bb, Ob) => {
          let Gb = hb(bb, ub, Bb);
          Gb && Ob(Bb, Bb + bb[0].length, Gb)
        };
        else {
          if (!hb) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (bb, ub, Bb, Ob) => Ob(Bb, Bb + bb[0].length, hb)
        }
        this.boundary = Ob, this.maxLength = Gb
      }
      createDeco(bb) {
        let ub = new Bb.w,
          hb = ub.add.bind(ub);
        for (let {
            from: Bb,
            to: Ob
          }
          of
          function(bb, ub) {
            let hb = bb.j_;
            if (1 == hb.length && hb[0].from == bb.viewport.from && hb[0].to == bb.viewport.to) return hb;
            let Bb = [];
            for (let {
                from: Ob,
                to: Gb
              }
              of hb) Ob = Math.max(bb.state.doc.lineAt(Ob).from, Ob - ub), Gb = Math.min(bb.state.doc.lineAt(Gb).to, Gb + ub), Bb.length && Bb[Bb.length - 1].to >= Ob ? Bb[Bb.length - 1].to = Gb : Bb.push({
              from: Ob,
              to: Gb
            });
            return Bb
          }(bb, this.maxLength)) UG(bb.state.doc, this.regexp, Bb, Ob, ((ub, Bb) => this.addMatch(Bb, bb, ub, hb)));
        return ub.finish()
      }
      updateDeco(bb, ub) {
        let hb = 1e9,
          Bb = -1;
        return bb.docChanged && bb.changes.iterChanges(((ub, Ob, Gb, Ub) => {
          Ub >= bb.view.viewport.from && Gb <= bb.view.viewport.to && (hb = Math.min(Gb, hb), Bb = Math.max(Ub, Bb))
        })), bb.viewportMoved || Bb - hb > 1e3 ? this.createDeco(bb.view) : Bb > -1 ? this.updateRange(bb.view, ub.map(bb.changes), hb, Bb) : ub
      }
      updateRange(bb, ub, hb, Bb) {
        for (let Ob of bb.j_) {
          let Gb = Math.max(Ob.from, hb),
            Ub = Math.min(Ob.to, Bb);
          if (Ub >= Gb) {
            let hb = bb.state.doc.lineAt(Gb),
              Bb = hb.to < Ub ? bb.state.doc.lineAt(Ub) : hb,
              Lb = Math.max(Ob.from, hb.from),
              Yb = Math.min(Ob.to, Bb.to);
            if (this.boundary) {
              for (; Gb > hb.from; Gb--)
                if (this.boundary.test(hb.text[Gb - 1 - hb.from])) {
                  Lb = Gb;
                  break
                } for (; Ub < Bb.to; Ub++)
                if (this.boundary.test(Bb.text[Ub - Bb.from])) {
                  Yb = Ub;
                  break
                }
            }
            let Sb, ab = [],
              Hb = (bb, ub, hb) => ab.push(hb.range(bb, ub));
            if (hb == Bb)
              for (this.regexp.lastIndex = Lb - hb.from;
                (Sb = this.regexp.exec(hb.text)) && Sb.index < Yb - hb.from;) this.addMatch(Sb, bb, Sb.index + hb.from, Hb);
            else UG(bb.state.doc, this.regexp, Lb, Yb, ((ub, hb) => this.addMatch(hb, bb, ub, Hb)));
            ub = ub.update({
              filterFrom: Lb,
              filterTo: Yb,
              filter: (bb, ub) => bb < Lb || ub > Yb,
              add: ab
            })
          }
        }
        return ub
      }
    }
    const YG = null != /x/.unicode ? "gu" : "g",
      SG = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", YG),
      aG = {
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
    let HG = null;
    const wG = Bb.n.define({
      combine(bb) {
        let ub = (0, Bb.V)(bb, {
          render: null,
          specialChars: SG,
          addSpecialChars: null
        });
        return (ub.replaceTabs = ! function() {
          var bb;
          if (null == HG && "undefined" != typeof document && document.body) {
            let ub = document.body.style;
            HG = null != (null !== (bb = ub.tabSize) && void 0 !== bb ? bb : ub.MozTabSize)
          }
          return HG || !1
        }()) && (ub.specialChars = new RegExp("\t|" + ub.specialChars.source, YG)), ub.addSpecialChars && (ub.specialChars = new RegExp(ub.specialChars.source + "|" + ub.addSpecialChars.source, YG)), ub
      }
    });

    function ZG() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [wG.of(bb), XG || (XG = Tu.fromClass(class {
        constructor(bb) {
          this.view = bb, this.ZG = vb.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(bb.state.facet(wG)), this.ZG = this.decorator.createDeco(bb)
        }
        makeDecorator(bb) {
          return new LG({
            regexp: bb.specialChars,
            decoration: (ub, hb, Ob) => {
              let {
                doc: Gb
              } = hb.state, Ub = (0, Bb.Q)(ub[0], 0);
              if (9 == Ub) {
                let bb = Gb.lineAt(Ob),
                  ub = hb.state.tabSize,
                  Ub = (0, Bb.X)(bb.text, ub, Ob - bb.from);
                return vb.replace({
                  widget: new oG((ub - Ub % ub) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[Ub] || (this.decorationCache[Ub] = vb.replace({
                widget: new pG(bb, Ub)
              }))
            },
            boundary: bb.replaceTabs ? void 0 : /[^]/
          })
        }
        update(bb) {
          let ub = bb.state.facet(wG);
          bb.startState.facet(wG) != ub ? (this.decorator = this.makeDecorator(ub), this.ZG = this.decorator.createDeco(bb.view)) : this.ZG = this.decorator.updateDeco(bb, this.ZG)
        }
      }, {
        ZG: bb => bb.ZG
      }))]
    }
    let XG = null;
    class pG extends gb {
      constructor(bb, ub) {
        super(), this.options = bb, this.code = ub
      }
      eq(bb) {
        return bb.code == this.code
      }
      toDOM(bb) {
        let ub = function(bb) {
            return bb >= 32 ? "\u2022" : 10 == bb ? "\u2424" : String.fromCharCode(9216 + bb)
          }(this.code),
          hb = bb.state.phrase("Control character") + " " + (aG[this.code] || "0x" + this.code.toString(16)),
          Bb = this.options.render && this.options.render(this.code, hb, ub);
        if (Bb) return Bb;
        let Ob = document.createElement("span");
        return Ob.textContent = ub, Ob.title = hb, Ob.setAttribute("aria-label", hb), Ob.className = "cm-specialChar", Ob
      }
      ignoreEvent() {
        return !1
      }
    }
    class oG extends gb {
      constructor(bb) {
        super(), this.width = bb
      }
      eq(bb) {
        return bb.width == this.width
      }
      toDOM() {
        let bb = document.createElement("span");
        return bb.textContent = "\t", bb.className = "cm-tab", bb.style.width = this.width + "px", bb
      }
      ignoreEvent() {
        return !1
      }
    }

    function AG() {
      return KG
    }
    const lG = vb.line({
        class: "cm-activeLine"
      }),
      KG = Tu.fromClass(class {
        constructor(bb) {
          this.ZG = this.getDeco(bb)
        }
        update(bb) {
          (bb.docChanged || bb.selectionSet) && (this.ZG = this.getDeco(bb.view))
        }
        getDeco(bb) {
          let ub = -1,
            hb = [];
          for (let Bb of bb.state.selection.tp) {
            let Ob = bb.lineBlockAt(Bb.head);
            Ob.from > ub && (hb.push(lG.range(Ob.from)), ub = Ob.from)
          }
          return vb.set(hb)
        }
      }, {
        ZG: bb => bb.ZG
      });
    class WG extends gb {
      constructor(bb) {
        super(), this.content = bb
      }
      toDOM(bb) {
        let ub = document.createElement("span");
        return ub.className = "cm-placeholder", ub.style.pointerEvents = "none", ub.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(bb) : this.content.cloneNode(!0)), ub.setAttribute("aria-hidden", "true"), ub
      }
      coordsAt(bb) {
        let ub = bb.firstChild ? qb(bb.firstChild) : [];
        if (!ub.length) return null;
        let hb = window.getComputedStyle(bb.parentNode),
          Bb = kb(ub[0], "rtl" != hb.direction),
          Ob = parseInt(hb.lineHeight);
        return Bb.bottom - Bb.top > 1.5 * Ob ? {
          left: Bb.left,
          right: Bb.right,
          top: Bb.top,
          bottom: Bb.top + Ob
        } : Bb
      }
      ignoreEvent() {
        return !1
      }
    }

    function CG(bb) {
      let ub = Tu.fromClass(class {
        constructor(ub) {
          this.view = ub, this.placeholder = bb ? vb.set([vb.widget({
            widget: new WG(bb),
            side: 1
          }).range(0)]) : vb.none
        }
        get ZG() {
          return this.view.state.doc.length ? vb.none : this.placeholder
        }
      }, {
        ZG: bb => bb.ZG
      });
      return "string" == typeof bb ? [ub, nO.contentAttributes.of({
        "aria-placeholder": bb
      })] : ub
    }
    const dG = 2e3;

    function rG(bb, ub) {
      let hb = bb.posAtCoords({
          x: ub.clientX,
          y: ub.clientY
        }, !1),
        Ob = bb.state.doc.lineAt(hb),
        Gb = hb - Ob.from,
        Ub = Gb > dG ? -1 : Gb == Ob.length ? function(bb, ub) {
          let hb = bb.coordsAtPos(bb.viewport.from);
          return hb ? Math.round(Math.abs((hb.left - ub) / bb.defaultCharacterWidth)) : -1
        }(bb, ub.clientX) : (0, Bb.X)(Ob.text, bb.state.tabSize, hb - Ob.from);
      return {
        line: Ob.number,
        col: Ub,
        off: Gb
      }
    }

    function jG(bb, ub) {
      let hb = rG(bb, ub),
        Ob = bb.state.selection;
      return hb ? {
        update(bb) {
          if (bb.docChanged) {
            let ub = bb.changes.mapPos(bb.startState.doc.line(hb.line).from),
              Bb = bb.state.doc.lineAt(ub);
            hb = {
              line: Bb.number,
              col: hb.col,
              off: Math.min(hb.off, Bb.length)
            }, Ob = Ob.map(bb.changes)
          }
        },
        get(ub, Gb, Ub) {
          let Lb = rG(bb, ub);
          if (!Lb) return Ob;
          let Yb = function(bb, ub, hb) {
            let Ob = Math.min(ub.line, hb.line),
              Gb = Math.max(ub.line, hb.line),
              Ub = [];
            if (ub.off > dG || hb.off > dG || ub.col < 0 || hb.col < 0) {
              let Lb = Math.min(ub.off, hb.off),
                Yb = Math.max(ub.off, hb.off);
              for (let ub = Ob; ub <= Gb; ub++) {
                let hb = bb.doc.line(ub);
                hb.length <= Yb && Ub.push(Bb.j.range(hb.from + Lb, hb.to + Yb))
              }
            } else {
              let Lb = Math.min(ub.col, hb.col),
                Yb = Math.max(ub.col, hb.col);
              for (let ub = Ob; ub <= Gb; ub++) {
                let hb = bb.doc.line(ub),
                  Ob = (0, Bb.$)(hb.text, Lb, bb.tabSize, !0);
                if (Ob < 0) Ub.push(Bb.j.cursor(hb.to));
                else {
                  let ub = (0, Bb.$)(hb.text, Yb, bb.tabSize);
                  Ub.push(Bb.j.range(hb.from + Ob, hb.from + ub))
                }
              }
            }
            return Ub
          }(bb.state, hb, Lb);
          return Yb.length ? Ub ? Bb.j.create(Yb.concat(Ob.tp)) : Bb.j.create(Yb) : Ob
        }
      } : null
    }

    function nG(bb) {
      let ub = (null === bb || void 0 === bb ? void 0 : bb.eventFilter) || (bb => bb.altKey && 0 == bb.button);
      return nO.mouseSelectionStyle.of(((bb, hb) => ub(hb) ? jG(bb, hb) : null))
    }
    const DG = {
        Alt: [18, bb => !!bb.altKey],
        Control: [17, bb => !!bb.ctrlKey],
        Shift: [16, bb => !!bb.shiftKey],
        Meta: [91, bb => !!bb.metaKey]
      },
      xG = {
        style: "cursor: crosshair"
      };

    function zG() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [ub, hb] = DG[bb.key || "Alt"],
        Bb = Tu.fromClass(class {
          constructor(bb) {
            this.view = bb, this.isDown = !1
          }
          set(bb) {
            this.isDown != bb && (this.isDown = bb, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(bb) {
              this.set(bb.keyCode == ub || hb(bb))
            },
            keyup(bb) {
              bb.keyCode != ub && hb(bb) || this.set(!1)
            },
            mousemove(bb) {
              this.set(hb(bb))
            }
          }
        });
      return [Bb, nO.contentAttributes.of((bb => {
        var ub;
        return (null === (ub = bb.plugin(Bb)) || void 0 === ub ? void 0 : ub.isDown) ? xG : null
      }))]
    }
    const gG = "-10000px";
    class iG {
      constructor(bb, ub, hb, Bb) {
        this.facet = ub, this.createTooltipView = hb, this.removeTooltipView = Bb, this.input = bb.state.facet(ub), this.tooltips = this.input.filter((bb => bb));
        let Ob = null;
        this.tooltipViews = this.tooltips.map((bb => Ob = hb(bb, Ob)))
      }
      update(bb, ub) {
        var hb;
        let Bb = bb.state.facet(this.facet),
          Ob = Bb.filter((bb => bb));
        if (Bb === this.input) {
          for (let ub of this.tooltipViews) ub.update && ub.update(bb);
          return !1
        }
        let Gb = [],
          Ub = ub ? [] : null;
        for (let Lb = 0; Lb < Ob.length; Lb++) {
          let hb = Ob[Lb],
            Bb = -1;
          if (hb) {
            for (let bb = 0; bb < this.tooltips.length; bb++) {
              let ub = this.tooltips[bb];
              ub && ub.create == hb.create && (Bb = bb)
            }
            if (Bb < 0) Gb[Lb] = this.createTooltipView(hb, Lb ? Gb[Lb - 1] : null), Ub && (Ub[Lb] = !!hb.above);
            else {
              let hb = Gb[Lb] = this.tooltipViews[Bb];
              Ub && (Ub[Lb] = ub[Bb]), hb.update && hb.update(bb)
            }
          }
        }
        for (let Lb of this.tooltipViews) Gb.indexOf(Lb) < 0 && (this.removeTooltipView(Lb), null === (hb = Lb.destroy) || void 0 === hb || hb.call(Lb));
        return ub && (Ub.forEach(((bb, hb) => ub[hb] = bb)), ub.length = Ub.length), this.input = Bb, this.tooltips = Ob, this.tooltipViews = Gb, !0
      }
    }

    function vG(bb) {
      let ub = bb.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: ub.clientHeight,
        right: ub.clientWidth
      }
    }
    const tG = Bb.n.define({
        combine: bb => {
          var ub, hb, Bb;
          return {
            position: rb.ios ? "absolute" : (null === (ub = bb.find((bb => bb.position))) || void 0 === ub ? void 0 : ub.position) || "fixed",
            parent: (null === (hb = bb.find((bb => bb.parent))) || void 0 === hb ? void 0 : hb.parent) || null,
            tooltipSpace: (null === (Bb = bb.find((bb => bb.tooltipSpace))) || void 0 === Bb ? void 0 : Bb.tooltipSpace) || vG
          }
        }
      }),
      JG = new WeakMap,
      eG = Tu.fromClass(class {
        constructor(bb) {
          this.view = bb, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let ub = bb.state.facet(tG);
          this.position = ub.position, this.parent = ub.parent, this.classes = bb.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new iG(bb, mG, ((bb, ub) => this.createTooltip(bb, ub)), (bb => {
            this.resizeObserver && this.resizeObserver.unobserve(bb.dom), bb.dom.remove()
          })), this.above = this.manager.tooltips.map((bb => !!bb.above)), this.intersectionObserver = "function" == typeof IntersectionObserver ? new IntersectionObserver((bb => {
            Date.now() > this.lastTransaction - 50 && bb.length > 0 && bb[bb.length - 1].intersectionRatio < 1 && this.measureSoon()
          }), {
            threshold: [1]
          }) : null, this.observeIntersection(), bb.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure()
        }
        createContainer() {
          this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom
        }
        observeIntersection() {
          if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            for (let bb of this.manager.tooltipViews) this.intersectionObserver.observe(bb.dom)
          }
        }
        measureSoon() {
          this.measureTimeout < 0 && (this.measureTimeout = setTimeout((() => {
            this.measureTimeout = -1, this.maybeMeasure()
          }), 50))
        }
        update(bb) {
          bb.transactions.length && (this.lastTransaction = Date.now());
          let ub = this.manager.update(bb, this.above);
          ub && this.observeIntersection();
          let hb = ub || bb.geometryChanged,
            Bb = bb.state.facet(tG);
          if (Bb.position != this.position && !this.madeAbsolute) {
            this.position = Bb.position;
            for (let bb of this.manager.tooltipViews) bb.dom.style.position = this.position;
            hb = !0
          }
          if (Bb.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = Bb.parent, this.createContainer();
            for (let bb of this.manager.tooltipViews) this.container.appendChild(bb.dom);
            hb = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          hb && this.maybeMeasure()
        }
        createTooltip(bb, ub) {
          let hb = bb.create(this.view),
            Bb = ub ? ub.dom : null;
          if (hb.dom.classList.add("cm-tooltip"), bb.arrow && !hb.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let bb = document.createElement("div");
            bb.className = "cm-tooltip-arrow", hb.dom.appendChild(bb)
          }
          return hb.dom.style.position = this.position, hb.dom.style.top = gG, hb.dom.style.left = "0px", this.container.insertBefore(hb.dom, Bb), hb.mount && hb.mount(this.view), this.resizeObserver && this.resizeObserver.observe(hb.dom), hb
        }
        destroy() {
          var bb, ub, hb;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let Bb of this.manager.tooltipViews) Bb.dom.remove(), null === (bb = Bb.destroy) || void 0 === bb || bb.call(Bb);
          this.parent && this.container.remove(), null === (ub = this.resizeObserver) || void 0 === ub || ub.disconnect(), null === (hb = this.intersectionObserver) || void 0 === hb || hb.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let bb = 1,
            ub = 1,
            hb = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: bb
            } = this.manager.tooltipViews[0];
            if (rb.safari) {
              let ub = bb.getBoundingClientRect();
              hb = Math.abs(ub.top + 1e4) > 1 || Math.abs(ub.left) > 1
            } else hb = !!bb.offsetParent && bb.offsetParent != this.container.ownerDocument.body
          }
          if (hb || "absolute" == this.position)
            if (this.parent) {
              let hb = this.parent.getBoundingClientRect();
              hb.width && hb.height && (bb = hb.width / this.parent.offsetWidth, ub = hb.height / this.parent.offsetHeight)
            } else({
              scaleX: bb,
              scaleY: ub
            } = this.view.viewState);
          let Bb = this.view.scrollDOM.getBoundingClientRect(),
            Ob = Lh(this.view);
          return {
            visible: {
              left: Bb.left + Ob.left,
              top: Bb.top + Ob.top,
              right: Bb.right - Ob.right,
              bottom: Bb.bottom - Ob.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((bb, ub) => {
              let hb = this.manager.tooltipViews[ub];
              return hb.getCoords ? hb.getCoords(bb.pos) : this.view.coordsAtPos(bb.pos)
            })),
            size: this.manager.tooltipViews.map((bb => {
              let {
                dom: ub
              } = bb;
              return ub.getBoundingClientRect()
            })),
            space: this.view.state.facet(tG).tooltipSpace(this.view),
            scaleX: bb,
            scaleY: ub,
            makeAbsolute: hb
          }
        }
        writeMeasure(bb) {
          var ub;
          if (bb.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let bb of this.manager.tooltipViews) bb.dom.style.position = "absolute"
          }
          let {
            visible: hb,
            space: Bb,
            scaleX: Ob,
            scaleY: Gb
          } = bb, Ub = [];
          for (let Lb = 0; Lb < this.manager.tooltips.length; Lb++) {
            let Yb = this.manager.tooltips[Lb],
              Sb = this.manager.tooltipViews[Lb],
              {
                dom: ab
              } = Sb,
              Hb = bb.pos[Lb],
              wb = bb.size[Lb];
            if (!Hb || !1 !== Yb.clip && (Hb.bottom <= Math.max(hb.top, Bb.top) || Hb.top >= Math.min(hb.bottom, Bb.bottom) || Hb.right < Math.max(hb.left, Bb.left) - .1 || Hb.left > Math.min(hb.right, Bb.right) + .1)) {
              ab.style.top = gG;
              continue
            }
            let Zb = Yb.arrow ? Sb.dom.querySelector(".cm-tooltip-arrow") : null,
              Xb = Zb ? 7 : 0,
              pb = wb.right - wb.left,
              ob = null !== (ub = JG.get(Sb)) && void 0 !== ub ? ub : wb.bottom - wb.top,
              Ab = Sb.offset || MG,
              lb = this.view.textDirection == Su.LTR,
              Kb = wb.width > Bb.right - Bb.left ? lb ? Bb.left : Bb.right - wb.width : lb ? Math.max(Bb.left, Math.min(Hb.left - (Zb ? 14 : 0) + Ab.x, Bb.right - pb)) : Math.min(Math.max(Bb.left, Hb.left - pb + (Zb ? 14 : 0) - Ab.x), Bb.right - pb),
              Wb = this.above[Lb];
            !Yb.strictSide && (Wb ? Hb.top - ob - Xb - Ab.y < Bb.top : Hb.bottom + ob + Xb + Ab.y > Bb.bottom) && Wb == Bb.bottom - Hb.bottom > Hb.top - Bb.top && (Wb = this.above[Lb] = !Wb);
            let Cb = (Wb ? Hb.top - Bb.top : Bb.bottom - Hb.bottom) - Xb;
            if (Cb < ob && !1 !== Sb.resize) {
              if (Cb < this.view.defaultLineHeight) {
                ab.style.top = gG;
                continue
              }
              JG.set(Sb, ob), ab.style.height = (ob = Cb) / Gb + "px"
            } else ab.style.height && (ab.style.height = "");
            let db = Wb ? Hb.top - ob - Xb - Ab.y : Hb.bottom + Xb + Ab.y,
              rb = Kb + pb;
            if (!0 !== Sb.overlap)
              for (let bb of Ub) bb.left < rb && bb.right > Kb && bb.top < db + ob && bb.bottom > db && (db = Wb ? bb.top - ob - 2 - Xb : bb.bottom + Xb + 2);
            if ("absolute" == this.position ? (ab.style.top = (db - bb.parent.top) / Gb + "px", NG(ab, (Kb - bb.parent.left) / Ob)) : (ab.style.top = db / Gb + "px", NG(ab, Kb / Ob)), Zb) {
              let bb = Hb.left + (lb ? Ab.x : -Ab.x) - (Kb + 14 - 7);
              Zb.style.left = bb / Ob + "px"
            }!0 !== Sb.overlap && Ub.push({
              left: Kb,
              top: db,
              right: rb,
              bottom: db + ob
            }), ab.classList.toggle("cm-tooltip-above", Wb), ab.classList.toggle("cm-tooltip-below", !Wb), Sb.positioned && Sb.positioned(bb.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let bb of this.manager.tooltipViews) bb.dom.style.top = gG
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function NG(bb, ub) {
      let hb = parseInt(bb.style.left, 10);
      (isNaN(hb) || Math.abs(ub - hb) > 1) && (bb.style.left = ub + "px")
    }
    const sG = nO.baseTheme({
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
      MG = {
        x: 0,
        y: 0
      },
      mG = Bb.n.define({
        enables: [eG, sG]
      }),
      IG = Bb.n.define({
        combine: bb => bb.reduce(((bb, ub) => bb.concat(ub)), [])
      });
    class PG {
      static create(bb) {
        return new PG(bb)
      }
      constructor(bb) {
        this.view = bb, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new iG(bb, IG, ((bb, ub) => this.createHostedView(bb, ub)), (bb => bb.dom.remove()))
      }
      createHostedView(bb, ub) {
        let hb = bb.create(this.view);
        return hb.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(hb.dom, ub ? ub.dom.nextSibling : this.dom.firstChild), this.mounted && hb.mount && hb.mount(this.view), hb
      }
      mount(bb) {
        for (let ub of this.manager.tooltipViews) ub.mount && ub.mount(bb);
        this.mounted = !0
      }
      positioned(bb) {
        for (let ub of this.manager.tooltipViews) ub.positioned && ub.positioned(bb)
      }
      update(bb) {
        this.manager.update(bb)
      }
      destroy() {
        var bb;
        for (let ub of this.manager.tooltipViews) null === (bb = ub.destroy) || void 0 === bb || bb.call(ub)
      }
      passProp(bb) {
        let ub;
        for (let hb of this.manager.tooltipViews) {
          let Bb = hb[bb];
          if (void 0 !== Bb)
            if (void 0 === ub) ub = Bb;
            else if (ub !== Bb) return
        }
        return ub
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
    const qG = mG.compute([IG], (bb => {
      let ub = bb.facet(IG);
      return 0 === ub.length ? null : {
        pos: Math.min(...ub.map((bb => bb.pos))),
        end: Math.max(...ub.map((bb => {
          var ub;
          return null !== (ub = bb.end) && void 0 !== ub ? ub : bb.pos
        }))),
        create: PG.create,
        above: ub[0].above,
        arrow: ub.some((bb => bb.arrow))
      }
    }));
    class EG {
      constructor(bb, ub, hb, Bb, Ob) {
        this.view = bb, this.source = ub, this.field = hb, this.setHover = Bb, this.hoverTime = Ob, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
          x: 0,
          y: 0,
          target: bb.dom,
          time: 0
        }, this.checkHover = this.checkHover.bind(this), bb.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), bb.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this))
      }
      update() {
        this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout((() => this.startHover()), 20))
      }
      get active() {
        return this.view.state.field(this.field)
      }
      checkHover() {
        if (this.hoverTimeout = -1, this.active.length) return;
        let bb = Date.now() - this.lastMove.time;
        bb < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - bb) : this.startHover()
      }
      startHover() {
        clearTimeout(this.restartTimeout);
        let {
          view: bb,
          lastMove: ub
        } = this, hb = bb.docView.tile.nearest(ub.target);
        if (!hb) return;
        let Bb, Ob = 1;
        if (hb.isWidget()) Bb = hb.posAtStart;
        else {
          if (Bb = bb.posAtCoords(ub), null == Bb) return;
          let hb = bb.coordsAtPos(Bb);
          if (!hb || ub.y < hb.top || ub.y > hb.bottom || ub.x < hb.left - bb.defaultCharacterWidth || ub.x > hb.right + bb.defaultCharacterWidth) return;
          let Gb = bb.bidiSpans(bb.state.doc.lineAt(Bb)).find((bb => bb.from <= Bb && bb.to >= Bb)),
            Ub = Gb && Gb.dir == Su.RTL ? -1 : 1;
          Ob = ub.x < hb.left ? -Ub : Ub
        }
        let Gb = this.source(bb, Bb, Ob);
        if (null === Gb || void 0 === Gb ? void 0 : Gb.then) {
          let ub = this.pending = {
            pos: Bb
          };
          Gb.then((hb => {
            this.pending == ub && (this.pending = null, !hb || Array.isArray(hb) && !hb.length || bb.dispatch({
              effects: this.setHover.of(Array.isArray(hb) ? hb : [hb])
            }))
          }), (ub => Vu(bb.state, ub, "hover tooltip")))
        } else !Gb || Array.isArray(Gb) && !Gb.length || bb.dispatch({
          effects: this.setHover.of(Array.isArray(Gb) ? Gb : [Gb])
        })
      }
      get tooltip() {
        let bb = this.view.plugin(eG),
          ub = bb ? bb.manager.tooltips.findIndex((bb => bb.create == PG.create)) : -1;
        return ub > -1 ? bb.manager.tooltipViews[ub] : null
      }
      mousemove(bb) {
        var ub, hb;
        this.lastMove = {
          x: bb.clientX,
          y: bb.clientY,
          target: bb.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: Bb,
          tooltip: Ob
        } = this;
        if (Bb.length && Ob && ! function(bb, ub) {
            let hb, {
              left: Bb,
              right: Ob,
              top: Gb,
              bottom: Ub
            } = bb.getBoundingClientRect();
            if (hb = bb.querySelector(".cm-tooltip-arrow")) {
              let bb = hb.getBoundingClientRect();
              Gb = Math.min(bb.top, Gb), Ub = Math.max(bb.bottom, Ub)
            }
            return ub.clientX >= Bb - yG && ub.clientX <= Ob + yG && ub.clientY >= Gb - yG && ub.clientY <= Ub + yG
          }(Ob.dom, bb) || this.pending) {
          let {
            pos: Ob
          } = Bb[0] || this.pending, Gb = null !== (hb = null === (ub = Bb[0]) || void 0 === ub ? void 0 : ub.end) && void 0 !== hb ? hb : Ob;
          (Ob == Gb ? this.view.posAtCoords(this.lastMove) == Ob : function(bb, ub, hb, Bb, Ob) {
            let Gb = bb.scrollDOM.getBoundingClientRect(),
              Ub = bb.documentTop + bb.documentPadding.top + bb.contentHeight;
            if (Gb.left > Bb || Gb.right < Bb || Gb.top > Ob || Math.min(Gb.bottom, Ub) < Ob) return !1;
            let Lb = bb.posAtCoords({
              x: Bb,
              y: Ob
            }, !1);
            return Lb >= ub && Lb <= hb
          }(this.view, Ob, Gb, bb.clientX, bb.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(bb) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: ub
        } = this;
        if (ub.length) {
          let {
            tooltip: ub
          } = this;
          ub && ub.dom.contains(bb.relatedTarget) ? this.watchTooltipLeave(ub.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(bb) {
        let ub = hb => {
          bb.removeEventListener("mouseleave", ub), this.active.length && !this.view.dom.contains(hb.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        bb.addEventListener("mouseleave", ub)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const yG = 4;

    function VG(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        hb = Bb.D.define(),
        Ob = Bb.G.define({
          create: () => [],
          update(bb, Ob) {
            if (bb.length && (ub.hideOnChange && (Ob.docChanged || Ob.selection) ? bb = [] : ub.hideOn && (bb = bb.filter((bb => !ub.hideOn(Ob, bb)))), Ob.docChanged)) {
              let ub = [];
              for (let hb of bb) {
                let bb = Ob.changes.mapPos(hb.pos, -1, Bb.p.TrackDel);
                if (null != bb) {
                  let Bb = Object.assign(Object.create(null), hb);
                  Bb.pos = bb, null != Bb.end && (Bb.end = Ob.changes.mapPos(Bb.end)), ub.push(Bb)
                }
              }
              bb = ub
            }
            for (let ub of Ob.effects) ub.is(hb) && (bb = ub.value), ub.is(fG) && (bb = []);
            return bb
          },
          provide: bb => IG.from(bb)
        });
      return {
        active: Ob,
        extension: [Ob, Tu.define((Bb => new EG(Bb, bb, Ob, hb, ub.hoverTime || 300))), qG]
      }
    }

    function FG(bb, ub) {
      let hb = bb.plugin(eG);
      if (!hb) return null;
      let Bb = hb.manager.tooltips.indexOf(ub);
      return Bb < 0 ? null : hb.manager.tooltipViews[Bb]
    }
    const fG = Bb.D.define();
    const kG = Bb.n.define({
      combine(bb) {
        let ub, hb;
        for (let Bb of bb) ub = ub || Bb.topContainer, hb = hb || Bb.bottomContainer;
        return {
          topContainer: ub,
          bottomContainer: hb
        }
      }
    });

    function TG(bb, ub) {
      let hb = bb.plugin(cG),
        Bb = hb ? hb.specs.indexOf(ub) : -1;
      return Bb > -1 ? hb.panels[Bb] : null
    }
    const cG = Tu.fromClass(class {
      constructor(bb) {
        this.input = bb.state.facet(bU), this.specs = this.input.filter((bb => bb)), this.panels = this.specs.map((ub => ub(bb)));
        let ub = bb.state.facet(kG);
        this.top = new QG(bb, !0, ub.topContainer), this.bottom = new QG(bb, !1, ub.bottomContainer), this.top.sync(this.panels.filter((bb => bb.top))), this.bottom.sync(this.panels.filter((bb => !bb.top)));
        for (let hb of this.panels) hb.dom.classList.add("cm-panel"), hb.mount && hb.mount()
      }
      update(bb) {
        let ub = bb.state.facet(kG);
        this.top.container != ub.topContainer && (this.top.sync([]), this.top = new QG(bb.view, !0, ub.topContainer)), this.bottom.container != ub.bottomContainer && (this.bottom.sync([]), this.bottom = new QG(bb.view, !1, ub.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let hb = bb.state.facet(bU);
        if (hb != this.input) {
          let ub = hb.filter((bb => bb)),
            Bb = [],
            Ob = [],
            Gb = [],
            Ub = [];
          for (let hb of ub) {
            let ub, Lb = this.specs.indexOf(hb);
            Lb < 0 ? (ub = hb(bb.view), Ub.push(ub)) : (ub = this.panels[Lb], ub.update && ub.update(bb)), Bb.push(ub), (ub.top ? Ob : Gb).push(ub)
          }
          this.specs = ub, this.panels = Bb, this.top.sync(Ob), this.bottom.sync(Gb);
          for (let bb of Ub) bb.dom.classList.add("cm-panel"), bb.mount && bb.mount()
        } else
          for (let Bb of this.panels) Bb.update && Bb.update(bb)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: bb => nO.scrollMargins.of((ub => {
        let hb = ub.plugin(bb);
        return hb && {
          top: hb.top.scrollMargin(),
          bottom: hb.bottom.scrollMargin()
        }
      }))
    });
    class QG {
      constructor(bb, ub, hb) {
        this.view = bb, this.top = ub, this.container = hb, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(bb) {
        for (let ub of this.panels) ub.destroy && bb.indexOf(ub) < 0 && ub.destroy();
        this.panels = bb, this.syncDOM()
      }
      syncDOM() {
        if (0 == this.panels.length) return void(this.dom && (this.dom.remove(), this.dom = void 0));
        if (!this.dom) {
          this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
          let bb = this.container || this.view.dom;
          bb.insertBefore(this.dom, this.top ? bb.firstChild : null)
        }
        let bb = this.dom.firstChild;
        for (let ub of this.panels)
          if (ub.dom.parentNode == this.dom) {
            for (; bb != ub.dom;) bb = RG(bb);
            bb = bb.nextSibling
          } else this.dom.insertBefore(ub.dom, bb);
        for (; bb;) bb = RG(bb)
      }
      scrollMargin() {
        return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top)
      }
      syncClasses() {
        if (this.container && this.classes != this.view.themeClasses) {
          for (let bb of this.classes.split(" ")) bb && this.container.classList.remove(bb);
          for (let bb of (this.classes = this.view.themeClasses).split(" ")) bb && this.container.classList.add(bb)
        }
      }
    }

    function RG(bb) {
      let ub = bb.nextSibling;
      return bb.remove(), ub
    }
    const bU = Bb.n.define({
      enables: cG
    });

    function uU(bb, ub) {
      let hb, Ob = new Promise((bb => hb = bb)),
        Gb = bb => function(bb, ub, hb) {
          let Bb = ub.content ? ub.content(bb, (() => Ub(null))) : null;
          if (!Bb) {
            if (Bb = (0, Hb.b)("form"), ub.input) {
              let bb = (0, Hb.b)("input", ub.input);
              /^(text|password|number|email|tel|url)$/.test(bb.type) && bb.classList.add("cm-textfield"), bb.name || (bb.name = "input"), Bb.appendChild((0, Hb.b)("label", (ub.label || "") + ": ", bb))
            } else Bb.appendChild(document.createTextNode(ub.label || ""));
            Bb.appendChild(document.createTextNode(" ")), Bb.appendChild((0, Hb.b)("button", {
              class: "cm-button",
              type: "submit"
            }, ub.submitLabel || "OK"))
          }
          let Ob = "FORM" == Bb.nodeName ? [Bb] : Bb.querySelectorAll("form");
          for (let Lb = 0; Lb < Ob.length; Lb++) {
            let bb = Ob[Lb];
            bb.addEventListener("keydown", (ub => {
              27 == ub.keyCode ? (ub.preventDefault(), Ub(null)) : 13 == ub.keyCode && (ub.preventDefault(), Ub(bb))
            })), bb.addEventListener("submit", (ub => {
              ub.preventDefault(), Ub(bb)
            }))
          }
          let Gb = (0, Hb.b)("div", Bb, (0, Hb.b)("button", {
            onclick: () => Ub(null),
            "aria-label": bb.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          ub.class && (Gb.className = ub.class);

          function Ub(ub) {
            Gb.contains(Gb.ownerDocument.activeElement) && bb.focus(), hb(ub)
          }
          return Gb.classList.add("cm-dialog"), {
            dom: Gb,
            top: ub.top,
            mount: () => {
              if (ub.focus) {
                let bb;
                bb = "string" == typeof ub.focus ? Bb.querySelector(ub.focus) : Bb.querySelector("input") || Bb.querySelector("button"), bb && "select" in bb ? bb.select() : bb && "focus" in bb && bb.focus()
              }
            }
          }
        }(bb, ub, hb);
      bb.state.field(hU, !1) ? bb.dispatch({
        effects: BU.of(Gb)
      }) : bb.dispatch({
        effects: Bb.D.appendConfig.of(hU.init((() => [Gb])))
      });
      let Ub = OU.of(Gb);
      return {
        close: Ub,
        result: Ob.then((ub => ((bb.win.queueMicrotask || (ub => bb.win.setTimeout(ub, 10)))((() => {
          bb.state.field(hU).indexOf(Gb) > -1 && bb.dispatch({
            effects: Ub
          })
        })), ub)))
      }
    }
    const hU = Bb.G.define({
        create: () => [],
        update(bb, ub) {
          for (let hb of ub.effects) hb.is(BU) ? bb = [hb.value].concat(bb) : hb.is(OU) && (bb = bb.filter((bb => bb != hb.value)));
          return bb
        },
        provide: bb => bU.computeN([bb], (ub => ub.field(bb)))
      }),
      BU = Bb.D.define(),
      OU = Bb.D.define();
    class GU extends Bb.B {
      compare(bb) {
        return this == bb || this.constructor == bb.constructor && this.eq(bb)
      }
      eq(bb) {
        return !1
      }
      destroy(bb) {}
    }
    GU.prototype.elementClass = "", GU.prototype.toDOM = void 0, GU.prototype.mapMode = Bb.p.TrackBefore, GU.prototype.startSide = GU.prototype.endSide = -1, GU.prototype.point = !0;
    const UU = Bb.n.define(),
      LU = Bb.n.define(),
      YU = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => Bb.x.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      SU = Bb.n.define();

    function aU(bb) {
      return [wU(), SU.of({
        ...YU,
        ...bb
      })]
    }
    const HU = Bb.n.define({
      combine: bb => bb.some((bb => bb))
    });

    function wU(bb) {
      let ub = [ZU];
      return bb && !1 === bb.fixed && ub.push(HU.of(!0)), ub
    }
    const ZU = Tu.fromClass(class {
      constructor(bb) {
        this.view = bb, this.domAfter = null, this.prevViewport = bb.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = bb.state.facet(SU).map((ub => new AU(bb, ub))), this.fixed = !bb.state.facet(HU);
        for (let ub of this.gutters) "after" == ub.config.side ? this.getDOMAfter().appendChild(ub.dom) : this.dom.appendChild(ub.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), bb.scrollDOM.insertBefore(this.dom, bb.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(bb) {
        if (this.updateGutters(bb)) {
          let ub = this.prevViewport,
            hb = bb.view.viewport,
            Bb = Math.min(ub.to, hb.to) - Math.max(ub.from, hb.from);
          this.syncGutters(Bb < .8 * (hb.to - hb.from))
        }
        if (bb.geometryChanged) {
          let bb = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = bb, this.domAfter && (this.domAfter.style.minHeight = bb)
        }
        this.view.state.facet(HU) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = bb.view.viewport
      }
      syncGutters(bb) {
        let ub = this.dom.nextSibling;
        bb && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let hb = Bb.x.iter(this.view.state.facet(UU), this.view.viewport.from),
          Ob = [],
          Gb = this.gutters.map((bb => new oU(bb, this.view.viewport, -this.view.documentPadding.top)));
        for (let Bb of this.view.viewportLineBlocks)
          if (Ob.length && (Ob = []), Array.isArray(Bb.type)) {
            let bb = !0;
            for (let ub of Bb.type)
              if (ub.type == ib.Text && bb) {
                pU(hb, Ob, ub.from);
                for (let bb of Gb) bb.line(this.view, ub, Ob);
                bb = !1
              } else if (ub.widget)
              for (let bb of Gb) bb.widget(this.view, ub)
          } else if (Bb.type == ib.Text) {
          pU(hb, Ob, Bb.from);
          for (let bb of Gb) bb.line(this.view, Bb, Ob)
        } else if (Bb.widget)
          for (let bb of Gb) bb.widget(this.view, Bb);
        for (let Bb of Gb) Bb.finish();
        bb && (this.view.scrollDOM.insertBefore(this.dom, ub), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(bb) {
        let ub = bb.startState.facet(SU),
          hb = bb.state.facet(SU),
          Ob = bb.docChanged || bb.heightChanged || bb.viewportChanged || !Bb.x.eq(bb.startState.facet(UU), bb.state.facet(UU), bb.view.viewport.from, bb.view.viewport.to);
        if (ub == hb)
          for (let Bb of this.gutters) Bb.update(bb) && (Ob = !0);
        else {
          Ob = !0;
          let Bb = [];
          for (let Ob of hb) {
            let hb = ub.indexOf(Ob);
            hb < 0 ? Bb.push(new AU(this.view, Ob)) : (this.gutters[hb].update(bb), Bb.push(this.gutters[hb]))
          }
          for (let bb of this.gutters) bb.dom.remove(), Bb.indexOf(bb) < 0 && bb.destroy();
          for (let bb of Bb) "after" == bb.config.side ? this.getDOMAfter().appendChild(bb.dom) : this.dom.appendChild(bb.dom);
          this.gutters = Bb
        }
        return Ob
      }
      destroy() {
        for (let bb of this.gutters) bb.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: bb => nO.scrollMargins.of((ub => {
        let hb = ub.plugin(bb);
        if (!hb || 0 == hb.gutters.length || !hb.fixed) return null;
        let Bb = hb.dom.offsetWidth * ub.scaleX,
          Ob = hb.domAfter ? hb.domAfter.offsetWidth * ub.scaleX : 0;
        return ub.textDirection == Su.LTR ? {
          left: Bb,
          right: Ob
        } : {
          right: Bb,
          left: Ob
        }
      }))
    });

    function XU(bb) {
      return Array.isArray(bb) ? bb : [bb]
    }

    function pU(bb, ub, hb) {
      for (; bb.value && bb.from <= hb;) bb.from == hb && ub.push(bb.value), bb.next()
    }
    class oU {
      constructor(bb, ub, hb) {
        this.gutter = bb, this.height = hb, this.i = 0, this.cursor = Bb.x.iter(bb.markers, ub.from)
      }
      addElement(bb, ub, hb) {
        let {
          gutter: Bb
        } = this, Ob = (ub.top - this.height) / bb.scaleY, Gb = ub.height / bb.scaleY;
        if (this.i == Bb.elements.length) {
          let ub = new lU(bb, Gb, Ob, hb);
          Bb.elements.push(ub), Bb.dom.appendChild(ub.dom)
        } else Bb.elements[this.i].update(bb, Gb, Ob, hb);
        this.height = ub.bottom, this.i++
      }
      line(bb, ub, hb) {
        let Bb = [];
        pU(this.cursor, Bb, ub.from), hb.length && (Bb = Bb.concat(hb));
        let Ob = this.gutter.config.lineMarker(bb, ub, Bb);
        Ob && Bb.unshift(Ob);
        let Gb = this.gutter;
        (0 != Bb.length || Gb.config.renderEmptyElements) && this.addElement(bb, ub, Bb)
      }
      widget(bb, ub) {
        let hb = this.gutter.config.widgetMarker(bb, ub.widget, ub),
          Bb = hb ? [hb] : null;
        for (let Ob of bb.state.facet(LU)) {
          let hb = Ob(bb, ub.widget, ub);
          hb && (Bb || (Bb = [])).push(hb)
        }
        Bb && this.addElement(bb, ub, Bb)
      }
      finish() {
        let bb = this.gutter;
        for (; bb.elements.length > this.i;) {
          let ub = bb.elements.pop();
          bb.dom.removeChild(ub.dom), ub.destroy()
        }
      }
    }
    class AU {
      constructor(bb, ub) {
        this.view = bb, this.config = ub, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let hb in ub.domEventHandlers) this.dom.addEventListener(hb, (Bb => {
          let Ob, Gb = Bb.target;
          if (Gb != this.dom && this.dom.contains(Gb)) {
            for (; Gb.parentNode != this.dom;) Gb = Gb.parentNode;
            let bb = Gb.getBoundingClientRect();
            Ob = (bb.top + bb.bottom) / 2
          } else Ob = Bb.clientY;
          let Ub = bb.lineBlockAtHeight(Ob - bb.documentTop);
          ub.domEventHandlers[hb](bb, Ub, Bb) && Bb.preventDefault()
        }));
        this.markers = XU(ub.markers(bb)), ub.initialSpacer && (this.spacer = new lU(bb, 0, 0, [ub.initialSpacer(bb)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(bb) {
        let ub = this.markers;
        if (this.markers = XU(this.config.markers(bb.view)), this.spacer && this.config.updateSpacer) {
          let ub = this.config.updateSpacer(this.spacer.markers[0], bb);
          ub != this.spacer.markers[0] && this.spacer.update(bb.view, 0, 0, [ub])
        }
        let hb = bb.view.viewport;
        return !Bb.x.eq(this.markers, ub, hb.from, hb.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(bb)
      }
      destroy() {
        for (let bb of this.elements) bb.destroy()
      }
    }
    class lU {
      constructor(bb, ub, hb, Bb) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(bb, ub, hb, Bb)
      }
      update(bb, ub, hb, Bb) {
        this.height != ub && (this.height = ub, this.dom.style.height = ub + "px"), this.above != hb && (this.dom.style.marginTop = (this.above = hb) ? hb + "px" : ""),
          function(bb, ub) {
            if (bb.length != ub.length) return !1;
            for (let hb = 0; hb < bb.length; hb++)
              if (!bb[hb].compare(ub[hb])) return !1;
            return !0
          }(this.markers, Bb) || this.setMarkers(bb, Bb)
      }
      setMarkers(bb, ub) {
        let hb = "cm-gutterElement",
          Bb = this.dom.firstChild;
        for (let Ob = 0, Gb = 0;;) {
          let Ub = Gb,
            Lb = Ob < ub.length ? ub[Ob++] : null,
            Yb = !1;
          if (Lb) {
            let bb = Lb.elementClass;
            bb && (hb += " " + bb);
            for (let ub = Gb; ub < this.markers.length; ub++)
              if (this.markers[ub].compare(Lb)) {
                Ub = ub, Yb = !0;
                break
              }
          } else Ub = this.markers.length;
          for (; Gb < Ub;) {
            let bb = this.markers[Gb++];
            if (bb.toDOM) {
              bb.destroy(Bb);
              let ub = Bb.nextSibling;
              Bb.remove(), Bb = ub
            }
          }
          if (!Lb) break;
          Lb.toDOM && (Yb ? Bb = Bb.nextSibling : this.dom.insertBefore(Lb.toDOM(bb), Bb)), Yb && Gb++
        }
        this.dom.className = hb, this.markers = ub
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const KU = Bb.n.define(),
      WU = Bb.n.define(),
      CU = Bb.n.define({
        combine: bb => (0, Bb.V)(bb, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(bb, ub) {
            let hb = Object.assign({}, bb);
            for (let Bb in ub) {
              let bb = hb[Bb],
                Ob = ub[Bb];
              hb[Bb] = bb ? (ub, hb, Bb) => bb(ub, hb, Bb) || Ob(ub, hb, Bb) : Ob
            }
            return hb
          }
        })
      });
    class dU extends GU {
      constructor(bb) {
        super(), this.number = bb
      }
      eq(bb) {
        return this.number == bb.number
      }
      toDOM() {
        return document.createTextNode(this.number)
      }
    }

    function rU(bb, ub) {
      return bb.state.facet(CU).formatNumber(ub, bb.state)
    }
    const jU = SU.compute([CU], (bb => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: bb => bb.state.facet(KU),
      lineMarker: (bb, ub, hb) => hb.some((bb => bb.toDOM)) ? null : new dU(rU(bb, bb.state.doc.lineAt(ub.from).number)),
      widgetMarker: (bb, ub, hb) => {
        for (let Bb of bb.state.facet(WU)) {
          let Ob = Bb(bb, ub, hb);
          if (Ob) return Ob
        }
        return null
      },
      lineMarkerChange: bb => bb.startState.facet(CU) != bb.state.facet(CU),
      initialSpacer: bb => new dU(rU(bb, DU(bb.state.doc.lines))),
      updateSpacer(bb, ub) {
        let hb = rU(ub.view, DU(ub.view.state.doc.lines));
        return hb == bb.number ? bb : new dU(hb)
      },
      domEventHandlers: bb.facet(CU).domEventHandlers,
      side: "before"
    })));

    function nU() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [CU.of(bb), wU(), jU]
    }

    function DU(bb) {
      let ub = 9;
      for (; ub < bb;) ub = 10 * ub + 9;
      return ub
    }
    const xU = new class extends GU {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      zU = UU.compute(["selection"], (bb => {
        let ub = [],
          hb = -1;
        for (let Bb of bb.selection.tp) {
          let Ob = bb.doc.lineAt(Bb.head).from;
          Ob > hb && (hb = Ob, ub.push(xU.range(Ob)))
        }
        return Bb.x.of(ub)
      }));

    function gU() {
      return zU
    }
  },
  40795: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Bb,
      d: () => Zb,
      g: () => Ub,
      i: () => ab,
      m: () => Sb,
      q: () => tb,
      u: () => eb,
      v: () => Jb,
      w: () => Xb
    });
    const Bb = 1024;
    let Ob = 0;
    class Gb {
      constructor(bb, ub) {
        this.from = bb, this.to = ub
      }
    }
    class Ub {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = Ob++, this.perNode = !!bb.perNode, this.deserialize = bb.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = bb.combine || null
      }
      add(bb) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof bb && (bb = Sb.match(bb)), ub => {
          let hb = bb(ub);
          return void 0 === hb ? null : [this, hb]
        }
      }
    }
    Ub.closedBy = new Ub({
      deserialize: bb => bb.split(" ")
    }), Ub.openedBy = new Ub({
      deserialize: bb => bb.split(" ")
    }), Ub.group = new Ub({
      deserialize: bb => bb.split(" ")
    }), Ub.isolate = new Ub({
      deserialize: bb => {
        if (bb && "rtl" != bb && "ltr" != bb && "auto" != bb) throw new RangeError("Invalid value for isolate: " + bb);
        return bb || "auto"
      }
    }), Ub.contextHash = new Ub({
      perNode: !0
    }), Ub.lookAhead = new Ub({
      perNode: !0
    }), Ub.mounted = new Ub({
      perNode: !0
    });
    class Lb {
      constructor(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = bb, this.overlay = ub, this.parser = hb, this.bracketed = Bb
      }
      static get(bb) {
        return bb && bb.props && bb.props[Ub.mounted.id]
      }
    }
    const Yb = Object.create(null);
    class Sb {
      constructor(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = bb, this.props = ub, this.id = hb, this.flags = Bb
      }
      static define(bb) {
        let ub = bb.props && bb.props.length ? Object.create(null) : Yb,
          hb = (bb.top ? 1 : 0) | (bb.skipped ? 2 : 0) | (bb.error ? 4 : 0) | (null == bb.name ? 8 : 0),
          Bb = new Sb(bb.name || "", ub, bb.id, hb);
        if (bb.props)
          for (let Ob of bb.props)
            if (Array.isArray(Ob) || (Ob = Ob(Bb)), Ob) {
              if (Ob[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              ub[Ob[0].id] = Ob[1]
            } return Bb
      }
      prop(bb) {
        return this.props[bb.id]
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
      is(bb) {
        if ("string" == typeof bb) {
          if (this.name == bb) return !0;
          let ub = this.prop(Ub.group);
          return !!ub && ub.indexOf(bb) > -1
        }
        return this.id == bb
      }
      static match(bb) {
        let ub = Object.create(null);
        for (let hb in bb)
          for (let Bb of hb.split(" ")) ub[Bb] = bb[hb];
        return bb => {
          for (let hb = bb.prop(Ub.group), Bb = -1; Bb < (hb ? hb.length : 0); Bb++) {
            let Ob = ub[Bb < 0 ? bb.name : hb[Bb]];
            if (Ob) return Ob
          }
        }
      }
    }
    Sb.none = new Sb("", Object.create(null), 0, 8);
    class ab {
      constructor(bb) {
        this.types = bb;
        for (let ub = 0; ub < bb.length; ub++)
          if (bb[ub].id != ub) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let bb = [];
        for (var ub = arguments.length, hb = new Array(ub), Bb = 0; Bb < ub; Bb++) hb[Bb] = arguments[Bb];
        for (let Ob of this.types) {
          let ub = null;
          for (let bb of hb) {
            let hb = bb(Ob);
            if (hb) {
              ub || (ub = Object.assign({}, Ob.props));
              let bb = hb[1],
                Bb = hb[0];
              Bb.combine && Bb.id in ub && (bb = Bb.combine(ub[Bb.id], bb)), ub[Bb.id] = bb
            }
          }
          bb.push(ub ? new Sb(Ob.name, ub, Ob.id, Ob.flags) : Ob)
        }
        return new ab(bb)
      }
    }
    const Hb = new WeakMap,
      wb = new WeakMap;
    var Zb;
    ! function(bb) {
      bb[bb.ExcludeBuffers = 1] = "ExcludeBuffers", bb[bb.IncludeAnonymous = 2] = "IncludeAnonymous", bb[bb.IgnoreMounts = 4] = "IgnoreMounts", bb[bb.IgnoreOverlays = 8] = "IgnoreOverlays", bb[bb.EnterBracketed = 16] = "EnterBracketed"
    }(Zb || (Zb = {}));
    class Xb {
      constructor(bb, ub, hb, Bb, Ob) {
        if (this.type = bb, this.children = ub, this.positions = hb, this.length = Bb, this.props = null, Ob && Ob.length) {
          this.props = Object.create(null);
          for (let [bb, ub] of Ob) this.props["number" == typeof bb ? bb : bb.id] = ub
        }
      }
      toString() {
        let bb = Lb.get(this);
        if (bb && !bb.overlay) return bb.tree.toString();
        let ub = "";
        for (let hb of this.children) {
          let bb = hb.toString();
          bb && (ub && (ub += ","), ub += bb)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (ub.length ? "(" + ub + ")" : "") : ub
      }
      cursor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new xb(this.topNode, bb)
      }
      cursorAt(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          hb = Hb.get(this) || this.topNode,
          Bb = new xb(hb);
        return Bb.moveTo(bb, ub), Hb.set(this, Bb._tree), Bb
      }
      get topNode() {
        return new Wb(this, 0, 0, null)
      }
      resolve(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          hb = lb(Hb.get(this) || this.topNode, bb, ub, !1);
        return Hb.set(this, hb), hb
      }
      resolveInner(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          hb = lb(wb.get(this) || this.topNode, bb, ub, !0);
        return wb.set(this, hb), hb
      }
      resolveStack(bb) {
        return function(bb, ub, hb) {
          let Bb = bb.resolveInner(ub, hb),
            Ob = null;
          for (let Gb = Bb instanceof Wb ? Bb : Bb.context.parent; Gb; Gb = Gb.parent)
            if (Gb.index < 0) {
              let bb = Gb.parent;
              (Ob || (Ob = [Bb])).push(bb.resolve(ub, hb)), Gb = bb
            } else {
              let bb = Lb.get(Gb.tree);
              if (bb && bb.overlay && bb.overlay[0].from <= ub && bb.overlay[bb.overlay.length - 1].to >= ub) {
                let Ub = new Wb(bb.tree, bb.overlay[0].from + Gb.from, -1, Gb);
                (Ob || (Ob = [Bb])).push(lb(Ub, ub, hb, !1))
              }
            } return Ob ? nb(Ob) : Bb
        }(this, bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(bb) {
        let {
          enter: ub,
          leave: hb,
          from: Bb = 0,
          to: Ob = this.length
        } = bb, Gb = bb.mode || 0, Ub = (Gb & Zb.IncludeAnonymous) > 0;
        for (let Lb = this.cursor(Gb | Zb.IncludeAnonymous);;) {
          let bb = !1;
          if (Lb.from <= Ob && Lb.to >= Bb && (!Ub && Lb.type.isAnonymous || !1 !== ub(Lb))) {
            if (Lb.firstChild()) continue;
            bb = !0
          }
          for (; bb && hb && (Ub || !Lb.type.isAnonymous) && hb(Lb), !Lb.nextSibling();) {
            if (!Lb.parent()) return;
            bb = !0
          }
        }
      }
      prop(bb) {
        return bb.perNode ? this.props ? this.props[bb.id] : void 0 : this.type.prop(bb)
      }
      get propValues() {
        let bb = [];
        if (this.props)
          for (let ub in this.props) bb.push([+ub, this.props[ub]]);
        return bb
      }
      balance() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : vb(Sb.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((bb, ub, hb) => new Xb(this.type, bb, ub, hb, this.propValues)), bb.makeTree || ((bb, ub, hb) => new Xb(Sb.none, bb, ub, hb)))
      }
      static build(bb) {
        return function(bb) {
          var ub;
          let {
            buffer: hb,
            nodeSet: Ob,
            maxBufferLength: Gb = Bb,
            reused: Lb = [],
            minRepeatType: Yb = Ob.types.length
          } = bb, Sb = Array.isArray(hb) ? new pb(hb, hb.length) : hb, ab = Ob.types, Hb = 0, wb = 0;

          function Zb(bb, ub, hb, Bb, Ub, Xb) {
            let {
              id: pb,
              start: rb,
              end: jb,
              size: nb
            } = Sb, Db = wb, xb = Hb;
            if (nb < 0) {
              if (Sb.next(), -1 == nb) {
                let ub = Lb[pb];
                return hb.push(ub), void Bb.push(rb - bb)
              }
              if (-3 == nb) return void(Hb = pb);
              if (-4 == nb) return void(wb = pb);
              throw new RangeError(`Unrecognized record size: ${nb}`)
            }
            let zb, gb, ib = ab[pb],
              tb = rb - bb;
            if (jb - rb <= Gb && (gb = Cb(Sb.pos - ub, Ub))) {
              let ub = new Uint16Array(gb.size - gb.skip),
                hb = Sb.pos - gb.size,
                Bb = ub.length;
              for (; Sb.pos > hb;) Bb = db(gb.start, ub, Bb);
              zb = new ob(ub, jb - gb.start, Ob), tb = gb.start - bb
            } else {
              let bb = Sb.pos - nb;
              Sb.next();
              let ub = [],
                hb = [],
                Bb = pb >= Yb ? pb : -1,
                Ob = 0,
                Ub = jb;
              for (; Sb.pos > bb;) Bb >= 0 && Sb.id == Bb && Sb.size >= 0 ? (Sb.end <= Ub - Gb && (Kb(ub, hb, rb, Ob, Sb.end, Ub, Bb, Db, xb), Ob = ub.length, Ub = Sb.end), Sb.next()) : Xb > 2500 ? Ab(rb, bb, ub, hb) : Zb(rb, bb, ub, hb, Bb, Xb + 1);
              if (Bb >= 0 && Ob > 0 && Ob < ub.length && Kb(ub, hb, rb, Ob, rb, Ub, Bb, Db, xb), ub.reverse(), hb.reverse(), Bb > -1 && Ob > 0) {
                let bb = lb(ib, xb);
                zb = vb(ib, ub, hb, 0, ub.length, 0, jb - rb, bb, bb)
              } else zb = Wb(ib, ub, hb, jb - rb, Db - jb, xb)
            }
            hb.push(zb), Bb.push(tb)
          }

          function Ab(bb, ub, hb, Bb) {
            let Ub = [],
              Lb = 0,
              Yb = -1;
            for (; Sb.pos > ub;) {
              let {
                id: bb,
                start: ub,
                end: hb,
                size: Bb
              } = Sb;
              if (Bb > 4) Sb.next();
              else {
                if (Yb > -1 && ub < Yb) break;
                Yb < 0 && (Yb = hb - Gb), Ub.push(bb, ub, hb), Lb++, Sb.next()
              }
            }
            if (Lb) {
              let ub = new Uint16Array(4 * Lb),
                Gb = Ub[Ub.length - 2];
              for (let bb = Ub.length - 3, hb = 0; bb >= 0; bb -= 3) ub[hb++] = Ub[bb], ub[hb++] = Ub[bb + 1] - Gb, ub[hb++] = Ub[bb + 2] - Gb, ub[hb++] = hb;
              hb.push(new ob(ub, Ub[2] - Gb, Ob)), Bb.push(Gb - bb)
            }
          }

          function lb(bb, ub) {
            return (hb, Bb, Ob) => {
              let Gb, Lb, Yb = 0,
                Sb = hb.length - 1;
              if (Sb >= 0 && (Gb = hb[Sb]) instanceof Xb) {
                if (!Sb && Gb.type == bb && Gb.length == Ob) return Gb;
                (Lb = Gb.prop(Ub.lookAhead)) && (Yb = Bb[Sb] + Gb.length + Lb)
              }
              return Wb(bb, hb, Bb, Ob, Yb, ub)
            }
          }

          function Kb(bb, ub, hb, Bb, Gb, Ub, Lb, Yb, Sb) {
            let ab = [],
              Hb = [];
            for (; bb.length > Bb;) ab.push(bb.pop()), Hb.push(ub.pop() + hb - Gb);
            bb.push(Wb(Ob.types[Lb], ab, Hb, Ub - Gb, Yb - Ub, Sb)), ub.push(Gb - hb)
          }

          function Wb(bb, ub, hb, Bb, Ob, Gb, Lb) {
            if (Gb) {
              let bb = [Ub.contextHash, Gb];
              Lb = Lb ? [bb].concat(Lb) : [bb]
            }
            if (Ob > 25) {
              let bb = [Ub.lookAhead, Ob];
              Lb = Lb ? [bb].concat(Lb) : [bb]
            }
            return new Xb(bb, ub, hb, Bb, Lb)
          }

          function Cb(bb, ub) {
            let hb = Sb.fork(),
              Bb = 0,
              Ob = 0,
              Ub = 0,
              Lb = hb.end - Gb,
              ab = {
                size: 0,
                start: 0,
                skip: 0
              };
            bb: for (let Gb = hb.pos - bb; hb.pos > Gb;) {
              let bb = hb.size;
              if (hb.id == ub && bb >= 0) {
                ab.size = Bb, ab.start = Ob, ab.skip = Ub, Ub += 4, Bb += 4, hb.next();
                continue
              }
              let Sb = hb.pos - bb;
              if (bb < 0 || Sb < Gb || hb.start < Lb) break;
              let Hb = hb.id >= Yb ? 4 : 0,
                wb = hb.start;
              for (hb.next(); hb.pos > Sb;) {
                if (hb.size < 0) {
                  if (-3 != hb.size && -4 != hb.size) break bb;
                  Hb += 4
                } else hb.id >= Yb && (Hb += 4);
                hb.next()
              }
              Ob = wb, Bb += bb, Ub += Hb
            }
            return (ub < 0 || Bb == bb) && (ab.size = Bb, ab.start = Ob, ab.skip = Ub), ab.size > 4 ? ab : void 0
          }

          function db(bb, ub, hb) {
            let {
              id: Bb,
              start: Ob,
              end: Gb,
              size: Ub
            } = Sb;
            if (Sb.next(), Ub >= 0 && Bb < Yb) {
              let Lb = hb;
              if (Ub > 4) {
                let Bb = Sb.pos - (Ub - 4);
                for (; Sb.pos > Bb;) hb = db(bb, ub, hb)
              }
              ub[--hb] = Lb, ub[--hb] = Gb - bb, ub[--hb] = Ob - bb, ub[--hb] = Bb
            } else - 3 == Ub ? Hb = Bb : -4 == Ub && (wb = Bb);
            return hb
          }
          let rb = [],
            jb = [];
          for (; Sb.pos > 0;) Zb(bb.start || 0, bb.bufferStart || 0, rb, jb, -1, 0);
          let nb = null !== (ub = bb.length) && void 0 !== ub ? ub : rb.length ? jb[0] + rb[0].length : 0;
          return new Xb(ab[bb.topID], rb.reverse(), jb.reverse(), nb)
        }(bb)
      }
    }
    Xb.empty = new Xb(Sb.none, [], [], 0);
    class pb {
      constructor(bb, ub) {
        this.buffer = bb, this.index = ub
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
        return new pb(this.buffer, this.index)
      }
    }
    class ob {
      constructor(bb, ub, hb) {
        this.buffer = bb, this.length = ub, this.set = hb
      }
      get type() {
        return Sb.none
      }
      toString() {
        let bb = [];
        for (let ub = 0; ub < this.buffer.length;) bb.push(this.childString(ub)), ub = this.buffer[ub + 3];
        return bb.join(",")
      }
      childString(bb) {
        let ub = this.buffer[bb],
          hb = this.buffer[bb + 3],
          Bb = this.set.types[ub],
          Ob = Bb.name;
        if (/\W/.test(Ob) && !Bb.isError && (Ob = JSON.stringify(Ob)), hb == (bb += 4)) return Ob;
        let Gb = [];
        for (; bb < hb;) Gb.push(this.childString(bb)), bb = this.buffer[bb + 3];
        return Ob + "(" + Gb.join(",") + ")"
      }
      findChild(bb, ub, hb, Bb, Ob) {
        let {
          buffer: Gb
        } = this, Ub = -1;
        for (let Lb = bb; Lb != ub && !(Ab(Ob, Bb, Gb[Lb + 1], Gb[Lb + 2]) && (Ub = Lb, hb > 0)); Lb = Gb[Lb + 3]);
        return Ub
      }
      slice(bb, ub, hb) {
        let Bb = this.buffer,
          Ob = new Uint16Array(ub - bb),
          Gb = 0;
        for (let Ub = bb, Lb = 0; Ub < ub;) {
          Ob[Lb++] = Bb[Ub++], Ob[Lb++] = Bb[Ub++] - hb;
          let ub = Ob[Lb++] = Bb[Ub++] - hb;
          Ob[Lb++] = Bb[Ub++] - bb, Gb = Math.max(Gb, ub)
        }
        return new ob(Ob, Gb, this.set)
      }
    }

    function Ab(bb, ub, hb, Bb) {
      switch (bb) {
        case -2:
          return hb < ub;
        case -1:
          return Bb >= ub && hb < ub;
        case 0:
          return hb < ub && Bb > ub;
        case 1:
          return hb <= ub && Bb > ub;
        case 2:
          return Bb > ub;
        case 4:
          return !0
      }
    }

    function lb(bb, ub, hb, Bb) {
      for (var Ob; bb.from == bb.to || (hb < 1 ? bb.from >= ub : bb.from > ub) || (hb > -1 ? bb.to <= ub : bb.to < ub);) {
        let ub = !Bb && bb instanceof Wb && bb.index < 0 ? null : bb.parent;
        if (!ub) return bb;
        bb = ub
      }
      let Gb = Bb ? 0 : Zb.IgnoreOverlays;
      if (Bb)
        for (let Ub = bb, Lb = Ub.parent; Lb; Ub = Lb, Lb = Ub.parent) Ub instanceof Wb && Ub.index < 0 && (null === (Ob = Lb.enter(ub, hb, Gb)) || void 0 === Ob ? void 0 : Ob.from) != Ub.from && (bb = Lb);
      for (;;) {
        let Bb = bb.enter(ub, hb, Gb);
        if (!Bb) return bb;
        bb = Bb
      }
    }
    class Kb {
      cursor() {
        return new xb(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(bb) {
        let ub = Cb(this, bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return ub.length ? ub[0] : null
      }
      getChildren(bb) {
        return Cb(this, bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(bb) {
        return lb(this, bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(bb) {
        return lb(this, bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(bb) {
        return db(this.parent, bb)
      }
      enterUnfinishedNodesBefore(bb) {
        let ub = this.childBefore(bb),
          hb = this;
        for (; ub;) {
          let bb = ub.lastChild;
          if (!bb || bb.to != ub.to) break;
          bb.type.isError && bb.from == bb.to ? (hb = ub, ub = bb.prevSibling) : ub = bb
        }
        return hb
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class Wb extends Kb {
      constructor(bb, ub, hb, Bb) {
        super(), this._tree = bb, this.from = ub, this.index = hb, this._parent = Bb
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
      nextChild(bb, ub, hb, Bb) {
        let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let Gb = this;;) {
          for (let {
              children: Ub,
              positions: Yb
            } = Gb._tree, Sb = ub > 0 ? Ub.length : -1; bb != Sb; bb += ub) {
            let Sb, ab = Ub[bb],
              Hb = Yb[bb] + Gb.from;
            if (Ob & Zb.EnterBracketed && ab instanceof Xb && (Sb = Lb.get(ab)) && !Sb.overlay && Sb.bracketed && hb >= Hb && hb <= Hb + ab.length || Ab(Bb, hb, Hb, Hb + ab.length))
              if (ab instanceof ob) {
                if (Ob & Zb.ExcludeBuffers) continue;
                let Ub = ab.findChild(0, ab.buffer.length, ub, hb - Hb, Bb);
                if (Ub > -1) return new jb(new rb(Gb, ab, bb, Hb), null, Ub)
              } else if (Ob & Zb.IncludeAnonymous || !ab.type.isAnonymous || zb(ab)) {
              let Ub;
              if (!(Ob & Zb.IgnoreMounts) && (Ub = Lb.get(ab)) && !Ub.overlay) return new Wb(Ub.tree, Hb, bb, Gb);
              let Yb = new Wb(ab, Hb, bb, Gb);
              return Ob & Zb.IncludeAnonymous || !Yb.type.isAnonymous ? Yb : Yb.nextChild(ub < 0 ? ab.children.length - 1 : 0, ub, hb, Bb, Ob)
            }
          }
          if (Ob & Zb.IncludeAnonymous || !Gb.type.isAnonymous) return null;
          if (bb = Gb.index >= 0 ? Gb.index + ub : ub < 0 ? -1 : Gb._parent._tree.children.length, Gb = Gb._parent, !Gb) return null
        }
      }
      get firstChild() {
        return this.nextChild(0, 1, 0, 4)
      }
      get lastChild() {
        return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
      }
      childAfter(bb) {
        return this.nextChild(0, 1, bb, 2)
      }
      childBefore(bb) {
        return this.nextChild(this._tree.children.length - 1, -1, bb, -2)
      }
      prop(bb) {
        return this._tree.prop(bb)
      }
      enter(bb, ub) {
        let hb, Bb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(Bb & Zb.IgnoreOverlays) && (hb = Lb.get(this._tree)) && hb.overlay) {
          let Ob = bb - this.from,
            Gb = Bb & Zb.EnterBracketed && hb.bracketed;
          for (let {
              from: bb,
              to: Bb
            }
            of hb.overlay)
            if ((ub > 0 || Gb ? bb <= Ob : bb < Ob) && (ub < 0 || Gb ? Bb >= Ob : Bb > Ob)) return new Wb(hb.tree, hb.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, bb, ub, Bb)
      }
      nextSignificantParent() {
        let bb = this;
        for (; bb.type.isAnonymous && bb._parent;) bb = bb._parent;
        return bb
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

    function Cb(bb, ub, hb, Bb) {
      let Ob = bb.cursor(),
        Gb = [];
      if (!Ob.firstChild()) return Gb;
      if (null != hb)
        for (let Ub = !1; !Ub;)
          if (Ub = Ob.type.is(hb), !Ob.nextSibling()) return Gb;
      for (;;) {
        if (null != Bb && Ob.type.is(Bb)) return Gb;
        if (Ob.type.is(ub) && Gb.push(Ob.node), !Ob.nextSibling()) return null == Bb ? Gb : []
      }
    }

    function db(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ub.length - 1;
      for (let Bb = bb; hb >= 0; Bb = Bb.parent) {
        if (!Bb) return !1;
        if (!Bb.type.isAnonymous) {
          if (ub[hb] && ub[hb] != Bb.name) return !1;
          hb--
        }
      }
      return !0
    }
    class rb {
      constructor(bb, ub, hb, Bb) {
        this.parent = bb, this.buffer = ub, this.index = hb, this.start = Bb
      }
    }
    class jb extends Kb {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(bb, ub, hb) {
        super(), this.context = bb, this._parent = ub, this.index = hb, this.type = bb.buffer.set.types[bb.buffer.buffer[hb]]
      }
      child(bb, ub, hb) {
        let {
          buffer: Bb
        } = this.context, Ob = Bb.findChild(this.index + 4, Bb.buffer[this.index + 3], bb, ub - this.context.start, hb);
        return Ob < 0 ? null : new jb(this.context, this, Ob)
      }
      get firstChild() {
        return this.child(1, 0, 4)
      }
      get lastChild() {
        return this.child(-1, 0, 4)
      }
      childAfter(bb) {
        return this.child(1, bb, 2)
      }
      childBefore(bb) {
        return this.child(-1, bb, -2)
      }
      prop(bb) {
        return this.type.prop(bb)
      }
      enter(bb, ub) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & Zb.ExcludeBuffers) return null;
        let {
          buffer: hb
        } = this.context, Bb = hb.findChild(this.index + 4, hb.buffer[this.index + 3], ub > 0 ? 1 : -1, bb - this.context.start, ub);
        return Bb < 0 ? null : new jb(this.context, this, Bb)
      }
      get parent() {
        return this._parent || this.context.parent.nextSignificantParent()
      }
      externalSibling(bb) {
        return this._parent ? null : this.context.parent.nextChild(this.context.index + bb, bb, 0, 4)
      }
      get nextSibling() {
        let {
          buffer: bb
        } = this.context, ub = bb.buffer[this.index + 3];
        return ub < (this._parent ? bb.buffer[this._parent.index + 3] : bb.buffer.length) ? new jb(this.context, this._parent, ub) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: bb
        } = this.context, ub = this._parent ? this._parent.index + 4 : 0;
        return this.index == ub ? this.externalSibling(-1) : new jb(this.context, this._parent, bb.findChild(ub, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let bb = [],
          ub = [],
          {
            buffer: hb
          } = this.context,
          Bb = this.index + 4,
          Ob = hb.buffer[this.index + 3];
        if (Ob > Bb) {
          let Gb = hb.buffer[this.index + 1];
          bb.push(hb.slice(Bb, Ob, Gb)), ub.push(0)
        }
        return new Xb(this.type, bb, ub, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function nb(bb) {
      if (!bb.length) return null;
      let ub = 0,
        hb = bb[0];
      for (let Gb = 1; Gb < bb.length; Gb++) {
        let Bb = bb[Gb];
        (Bb.from > hb.from || Bb.to < hb.to) && (hb = Bb, ub = Gb)
      }
      let Bb = hb instanceof Wb && hb.index < 0 ? null : hb.parent,
        Ob = bb.slice();
      return Bb ? Ob[ub] = Bb : Ob.splice(ub, 1), new Db(Ob, hb)
    }
    class Db {
      constructor(bb, ub) {
        this.heads = bb, this.node = ub
      }
      get next() {
        return nb(this.heads)
      }
    }
    class xb {
      get name() {
        return this.type.name
      }
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = ub & ~Zb.EnterBracketed, bb instanceof Wb) this.yieldNode(bb);
        else {
          this._tree = bb.context.parent, this.buffer = bb.context;
          for (let ub = bb._parent; ub; ub = ub._parent) this.stack.unshift(ub.index);
          this.bufferNode = bb, this.yieldBuf(bb.index)
        }
      }
      yieldNode(bb) {
        return !!bb && (this._tree = bb, this.type = bb.type, this.from = bb.from, this.to = bb.to, !0)
      }
      yieldBuf(bb, ub) {
        this.index = bb;
        let {
          start: hb,
          buffer: Bb
        } = this.buffer;
        return this.type = ub || Bb.set.types[Bb.buffer[bb]], this.from = hb + Bb.buffer[bb + 1], this.to = hb + Bb.buffer[bb + 2], !0
      }
      yield(bb) {
        return !!bb && (bb instanceof Wb ? (this.buffer = null, this.yieldNode(bb)) : (this.buffer = bb.context, this.yieldBuf(bb.index, bb.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(bb, ub, hb) {
        if (!this.buffer) return this.yield(this._tree.nextChild(bb < 0 ? this._tree._tree.children.length - 1 : 0, bb, ub, hb, this.mode));
        let {
          buffer: Bb
        } = this.buffer, Ob = Bb.findChild(this.index + 4, Bb.buffer[this.index + 3], bb, ub - this.buffer.start, hb);
        return !(Ob < 0) && (this.stack.push(this.index), this.yieldBuf(Ob))
      }
      firstChild() {
        return this.enterChild(1, 0, 4)
      }
      lastChild() {
        return this.enterChild(-1, 0, 4)
      }
      childAfter(bb) {
        return this.enterChild(1, bb, 2)
      }
      childBefore(bb) {
        return this.enterChild(-1, bb, -2)
      }
      enter(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(hb & Zb.ExcludeBuffers) && this.enterChild(1, bb, ub) : this.yield(this._tree.enter(bb, ub, hb))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & Zb.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let bb = this.mode & Zb.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(bb)
      }
      sibling(bb) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + bb, bb, 0, 4, this.mode));
        let {
          buffer: ub
        } = this.buffer, hb = this.stack.length - 1;
        if (bb < 0) {
          let bb = hb < 0 ? 0 : this.stack[hb] + 4;
          if (this.index != bb) return this.yieldBuf(ub.findChild(bb, this.index, -1, 0, 4))
        } else {
          let bb = ub.buffer[this.index + 3];
          if (bb < (hb < 0 ? ub.buffer.length : ub.buffer[this.stack[hb] + 3])) return this.yieldBuf(bb)
        }
        return hb < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + bb, bb, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(bb) {
        let ub, hb, {
          buffer: Bb
        } = this;
        if (Bb) {
          if (bb > 0) {
            if (this.index < Bb.buffer.buffer.length) return !1
          } else
            for (let bb = 0; bb < this.index; bb++)
              if (Bb.buffer.buffer[bb + 3] < this.index) return !1;
          ({
            index: ub,
            parent: hb
          } = Bb)
        } else({
          index: ub,
          _parent: hb
        } = this._tree);
        for (; hb;
          ({
            index: ub,
            _parent: hb
          } = hb))
          if (ub > -1)
            for (let Bb = ub + bb, Ob = bb < 0 ? -1 : hb._tree.children.length; Bb != Ob; Bb += bb) {
              let bb = hb._tree.children[Bb];
              if (this.mode & Zb.IncludeAnonymous || bb instanceof ob || !bb.type.isAnonymous || zb(bb)) return !1
            }
        return !0
      }
      move(bb, ub) {
        if (ub && this.enterChild(bb, 0, 4)) return !0;
        for (;;) {
          if (this.sibling(bb)) return !0;
          if (this.atLastNode(bb) || !this.parent()) return !1
        }
      }
      next() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(1, bb)
      }
      prev() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(-1, bb)
      }
      moveTo(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (ub < 1 ? this.from >= bb : this.from > bb) || (ub > -1 ? this.to <= bb : this.to < bb)) && this.parent(););
        for (; this.enterChild(1, bb, ub););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let bb = this.bufferNode,
          ub = null,
          hb = 0;
        if (bb && bb.context == this.buffer) bb: for (let Bb = this.index, Ob = this.stack.length; Ob >= 0;) {
          for (let Gb = bb; Gb; Gb = Gb._parent)
            if (Gb.index == Bb) {
              if (Bb == this.index) return Gb;
              ub = Gb, hb = Ob + 1;
              break bb
            } Bb = this.stack[--Ob]
        }
        for (let Bb = hb; Bb < this.stack.length; Bb++) ub = new jb(this.buffer, ub, this.stack[Bb]);
        return this.bufferNode = new jb(this.buffer, ub, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(bb, ub) {
        for (let hb = 0;;) {
          let Bb = !1;
          if (this.type.isAnonymous || !1 !== bb(this)) {
            if (this.firstChild()) {
              hb++;
              continue
            }
            this.type.isAnonymous || (Bb = !0)
          }
          for (;;) {
            if (Bb && ub && ub(this), Bb = this.type.isAnonymous, !hb) return;
            if (this.nextSibling()) break;
            this.parent(), hb--, Bb = !0
          }
        }
      }
      matchContext(bb) {
        if (!this.buffer) return db(this.node.parent, bb);
        let {
          buffer: ub
        } = this.buffer, {
          types: hb
        } = ub.set;
        for (let Bb = bb.length - 1, Ob = this.stack.length - 1; Bb >= 0; Ob--) {
          if (Ob < 0) return db(this._tree, bb, Bb);
          let Gb = hb[ub.buffer[this.stack[Ob]]];
          if (!Gb.isAnonymous) {
            if (bb[Bb] && bb[Bb] != Gb.name) return !1;
            Bb--
          }
        }
        return !0
      }
    }

    function zb(bb) {
      return bb.children.some((bb => bb instanceof ob || !bb.type.isAnonymous || zb(bb)))
    }
    const gb = new WeakMap;

    function ib(bb, ub) {
      if (!bb.isAnonymous || ub instanceof ob || ub.type != bb) return 1;
      let hb = gb.get(ub);
      if (null == hb) {
        hb = 1;
        for (let Bb of ub.children) {
          if (Bb.type != bb || !(Bb instanceof Xb)) {
            hb = 1;
            break
          }
          hb += ib(bb, Bb)
        }
        gb.set(ub, hb)
      }
      return hb
    }

    function vb(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb) {
      let Sb = 0;
      for (let Zb = Bb; Zb < Ob; Zb++) Sb += ib(bb, ub[Zb]);
      let ab = Math.ceil(1.5 * Sb / 8),
        Hb = [],
        wb = [];
      return function ub(hb, Bb, Ob, Ub, Lb) {
        for (let Sb = Ob; Sb < Ub;) {
          let Ob = Sb,
            Zb = Bb[Sb],
            Xb = ib(bb, hb[Sb]);
          for (Sb++; Sb < Ub; Sb++) {
            let ub = ib(bb, hb[Sb]);
            if (Xb + ub >= ab) break;
            Xb += ub
          }
          if (Sb == Ob + 1) {
            if (Xb > ab) {
              let bb = hb[Ob];
              ub(bb.children, bb.positions, 0, bb.children.length, Bb[Ob] + Lb);
              continue
            }
            Hb.push(hb[Ob])
          } else {
            let ub = Bb[Sb - 1] + hb[Sb - 1].length - Zb;
            Hb.push(vb(bb, hb, Bb, Ob, Sb, Zb, ub, null, Yb))
          }
          wb.push(Zb + Lb - Gb)
        }
      }(ub, hb, Bb, Ob, 0), (Lb || Yb)(Hb, wb, Ub)
    }
    class tb {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(bb, ub, hb) {
        let Bb = this.map.get(bb);
        Bb || this.map.set(bb, Bb = new Map), Bb.set(ub, hb)
      }
      getBuffer(bb, ub) {
        let hb = this.map.get(bb);
        return hb && hb.get(ub)
      }
      set(bb, ub) {
        bb instanceof jb ? this.setBuffer(bb.context.buffer, bb.index, ub) : bb instanceof Wb && this.map.set(bb.tree, ub)
      }
      get(bb) {
        return bb instanceof jb ? this.getBuffer(bb.context.buffer, bb.index) : bb instanceof Wb ? this.map.get(bb.tree) : void 0
      }
      cursorSet(bb, ub) {
        bb.buffer ? this.setBuffer(bb.buffer.buffer, bb.index, ub) : this.map.set(bb.tree, ub)
      }
      cursorGet(bb) {
        return bb.buffer ? this.getBuffer(bb.buffer.buffer, bb.index) : this.map.get(bb.tree)
      }
    }
    class Jb {
      constructor(bb, ub, hb, Bb) {
        let Ob = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Gb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = bb, this.to = ub, this.tree = hb, this.offset = Bb, this.open = (Ob ? 1 : 0) | (Gb ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Bb = [new Jb(0, bb.length, bb, 0, !1, hb)];
        for (let Ob of ub) Ob.to > bb.length && Bb.push(Ob);
        return Bb
      }
      static applyChanges(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!ub.length) return bb;
        let Bb = [],
          Ob = 1,
          Gb = bb.length ? bb[0] : null;
        for (let Ub = 0, Lb = 0, Yb = 0;; Ub++) {
          let Sb = Ub < ub.length ? ub[Ub] : null,
            ab = Sb ? Sb.fromA : 1e9;
          if (ab - Lb >= hb)
            for (; Gb && Gb.from < ab;) {
              let ub = Gb;
              if (Lb >= ub.from || ab <= ub.to || Yb) {
                let bb = Math.max(ub.from, Lb) - Yb,
                  hb = Math.min(ub.to, ab) - Yb;
                ub = bb >= hb ? null : new Jb(bb, hb, ub.tree, ub.offset + Yb, Ub > 0, !!Sb)
              }
              if (ub && Bb.push(ub), Gb.to > ab) break;
              Gb = Ob < bb.length ? bb[Ob++] : null
            }
          if (!Sb) break;
          Lb = Sb.toA, Yb = Sb.toA - Sb.toB
        }
        return Bb
      }
    }
    class eb {
      startParse(bb, ub, hb) {
        return "string" == typeof bb && (bb = new Nb(bb)), hb = hb ? hb.length ? hb.map((bb => new Gb(bb.from, bb.to))) : [new Gb(0, 0)] : [new Gb(0, bb.length)], this.createParse(bb, ub || [], hb)
      }
      parse(bb, ub, hb) {
        let Bb = this.startParse(bb, ub, hb);
        for (;;) {
          let bb = Bb.advance();
          if (bb) return bb
        }
      }
    }
    class Nb {
      constructor(bb) {
        this.string = bb
      }
      get length() {
        return this.string.length
      }
      chunk(bb) {
        return this.string.slice(bb)
      }
      get lineChunks() {
        return !1
      }
      read(bb, ub) {
        return this.string.slice(bb, ub)
      }
    }
    new Ub({
      perNode: !0
    })
  },
  40803: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => wb,
      e: () => Yb,
      i: () => Hb,
      k: () => gb
    });
    var Bb = hb(40795);
    let Ob = 0;
    class Gb {
      constructor(bb, ub, hb, Bb) {
        this.name = bb, this.set = ub, this.base = hb, this.modified = Bb, this.id = Ob++
      }
      toString() {
        let {
          name: bb
        } = this;
        for (let ub of this.modified) ub.name && (bb = `${ub.name}(${bb})`);
        return bb
      }
      static define(bb, ub) {
        let hb = "string" == typeof bb ? bb : "?";
        if (bb instanceof Gb && (ub = bb), null === ub || void 0 === ub ? void 0 : ub.base) throw new Error("Can not derive from a modified tag");
        let Bb = new Gb(hb, [], null, []);
        if (Bb.set.push(Bb), ub)
          for (let Ob of ub.set) Bb.set.push(Ob);
        return Bb
      }
      static defineModifier(bb) {
        let ub = new Lb(bb);
        return bb => bb.modified.indexOf(ub) > -1 ? bb : Lb.get(bb.base || bb, bb.modified.concat(ub).sort(((bb, ub) => bb.id - ub.id)))
      }
    }
    let Ub = 0;
    class Lb {
      constructor(bb) {
        this.name = bb, this.instances = [], this.id = Ub++
      }
      static get(bb, ub) {
        if (!ub.length) return bb;
        let hb = ub[0].instances.find((hb => {
          return hb.base == bb && (Bb = ub, Ob = hb.modified, Bb.length == Ob.length && Bb.every(((bb, ub) => bb == Ob[ub])));
          var Bb, Ob
        }));
        if (hb) return hb;
        let Bb = [],
          Ob = new Gb(bb.name, Bb, bb, ub);
        for (let Gb of ub) Gb.instances.push(Ob);
        let Ub = function(bb) {
          let ub = [
            []
          ];
          for (let hb = 0; hb < bb.length; hb++)
            for (let Bb = 0, Ob = ub.length; Bb < Ob; Bb++) ub.push(ub[Bb].concat(bb[hb]));
          return ub.sort(((bb, ub) => ub.length - bb.length))
        }(ub);
        for (let Gb of bb.set)
          if (!Gb.modified.length)
            for (let bb of Ub) Bb.push(Lb.get(Gb, bb));
        return Ob
      }
    }

    function Yb(bb) {
      let ub = Object.create(null);
      for (let hb in bb) {
        let Bb = bb[hb];
        Array.isArray(Bb) || (Bb = [Bb]);
        for (let bb of hb.split(" "))
          if (bb) {
            let hb = [],
              Ob = 2,
              Gb = bb;
            for (let ub = 0;;) {
              if ("..." == Gb && ub > 0 && ub + 3 == bb.length) {
                Ob = 1;
                break
              }
              let Bb = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(Gb);
              if (!Bb) throw new RangeError("Invalid path: " + bb);
              if (hb.push("*" == Bb[0] ? "" : '"' == Bb[0][0] ? JSON.parse(Bb[0]) : Bb[0]), ub += Bb[0].length, ub == bb.length) break;
              let Ub = bb[ub++];
              if (ub == bb.length && "!" == Ub) {
                Ob = 0;
                break
              }
              if ("/" != Ub) throw new RangeError("Invalid path: " + bb);
              Gb = bb.slice(ub)
            }
            let Ub = hb.length - 1,
              Lb = hb[Ub];
            if (!Lb) throw new RangeError("Invalid path: " + bb);
            let Yb = new ab(Bb, Ob, Ub > 0 ? hb.slice(0, Ub) : null);
            ub[Lb] = Yb.sort(ub[Lb])
          }
      }
      return Sb.add(ub)
    }
    const Sb = new Bb.g({
      combine(bb, ub) {
        let hb, Bb, Ob;
        for (; bb || ub;) {
          if (!bb || ub && bb.depth >= ub.depth ? (Ob = ub, ub = ub.next) : (Ob = bb, bb = bb.next), hb && hb.mode == Ob.mode && !Ob.context && !hb.context) continue;
          let Gb = new ab(Ob.tags, Ob.mode, Ob.context);
          hb ? hb.next = Gb : Bb = Gb, hb = Gb
        }
        return Bb
      }
    });
    class ab {
      constructor(bb, ub, hb, Bb) {
        this.tags = bb, this.mode = ub, this.context = hb, this.next = Bb
      }
      get opaque() {
        return 0 == this.mode
      }
      get inherit() {
        return 1 == this.mode
      }
      sort(bb) {
        return !bb || bb.depth < this.depth ? (this.next = bb, this) : (bb.next = this.sort(bb.next), bb)
      }
      get depth() {
        return this.context ? this.context.length : 0
      }
    }

    function Hb(bb, ub) {
      let hb = Object.create(null);
      for (let Gb of bb)
        if (Array.isArray(Gb.tag))
          for (let bb of Gb.tag) hb[bb.id] = Gb.class;
        else hb[Gb.tag.id] = Gb.class;
      let {
        scope: Bb,
        all: Ob = null
      } = ub || {};
      return {
        style: bb => {
          let ub = Ob;
          for (let Bb of bb)
            for (let bb of Bb.set) {
              let Bb = hb[bb.id];
              if (Bb) {
                ub = ub ? ub + " " + Bb : Bb;
                break
              }
            }
          return ub
        },
        scope: Bb
      }
    }

    function wb(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : bb.length,
        Gb = new Zb(Bb, Array.isArray(ub) ? ub : [ub], hb);
      Gb.highlightRange(bb.cursor(), Bb, Ob, "", Gb.highlighters), Gb.flush(Ob)
    }
    ab.empty = new ab([], 2, null);
    class Zb {
      constructor(bb, ub, hb) {
        this.at = bb, this.highlighters = ub, this.span = hb, this.class = ""
      }
      startSpan(bb, ub) {
        ub != this.class && (this.flush(bb), bb > this.at && (this.at = bb), this.class = ub)
      }
      flush(bb) {
        bb > this.at && this.class && this.span(this.at, bb, this.class)
      }
      highlightRange(bb, ub, hb, Ob, Gb) {
        let {
          type: Ub,
          from: Lb,
          to: Yb
        } = bb;
        if (Lb >= hb || Yb <= ub) return;
        Ub.isTop && (Gb = this.highlighters.filter((bb => !bb.scope || bb.scope(Ub))));
        let Hb = Ob,
          wb = function(bb) {
            let ub = bb.type.prop(Sb);
            for (; ub && ub.context && !bb.matchContext(ub.context);) ub = ub.next;
            return ub || null
          }(bb) || ab.empty,
          Zb = function(bb, ub) {
            let hb = null;
            for (let Bb of bb) {
              let bb = Bb.style(ub);
              bb && (hb = hb ? hb + " " + bb : bb)
            }
            return hb
          }(Gb, wb.tags);
        if (Zb && (Hb && (Hb += " "), Hb += Zb, 1 == wb.mode && (Ob += (Ob ? " " : "") + Zb)), this.startSpan(Math.max(ub, Lb), Hb), wb.opaque) return;
        let Xb = bb.tree && bb.tree.prop(Bb.g.mounted);
        if (Xb && Xb.overlay) {
          let Bb = bb.node.enter(Xb.overlay[0].from + Lb, 1),
            Ub = this.highlighters.filter((bb => !bb.scope || bb.scope(Xb.tree.type))),
            Sb = bb.firstChild();
          for (let ab = 0, wb = Lb;; ab++) {
            let Zb = ab < Xb.overlay.length ? Xb.overlay[ab] : null,
              pb = Zb ? Zb.from + Lb : Yb,
              ob = Math.max(ub, wb),
              Ab = Math.min(hb, pb);
            if (ob < Ab && Sb)
              for (; bb.from < Ab && (this.highlightRange(bb, ob, Ab, Ob, Gb), this.startSpan(Math.min(Ab, bb.to), Hb), !(bb.to >= pb) && bb.nextSibling()););
            if (!Zb || pb > hb) break;
            wb = Zb.to + Lb, wb > ub && (this.highlightRange(Bb.cursor(), Math.max(ub, Zb.from + Lb), Math.min(hb, wb), "", Ub), this.startSpan(Math.min(hb, wb), Hb))
          }
          Sb && bb.parent()
        } else if (bb.firstChild()) {
          Xb && (Ob = "");
          do {
            if (!(bb.to <= ub)) {
              if (bb.from >= hb) break;
              this.highlightRange(bb, ub, hb, Ob, Gb), this.startSpan(Math.min(hb, bb.to), Hb)
            }
          } while (bb.nextSibling());
          bb.parent()
        }
      }
    }
    const Xb = Gb.define,
      pb = Xb(),
      ob = Xb(),
      Ab = Xb(ob),
      lb = Xb(ob),
      Kb = Xb(),
      Wb = Xb(Kb),
      Cb = Xb(Kb),
      db = Xb(),
      rb = Xb(db),
      jb = Xb(),
      nb = Xb(),
      Db = Xb(),
      xb = Xb(Db),
      zb = Xb(),
      gb = {
        comment: pb,
        lineComment: Xb(pb),
        blockComment: Xb(pb),
        docComment: Xb(pb),
        name: ob,
        variableName: Xb(ob),
        typeName: Ab,
        tagName: Xb(Ab),
        propertyName: lb,
        attributeName: Xb(lb),
        className: Xb(ob),
        labelName: Xb(ob),
        namespace: Xb(ob),
        macroName: Xb(ob),
        literal: Kb,
        string: Wb,
        docString: Xb(Wb),
        character: Xb(Wb),
        attributeValue: Xb(Wb),
        number: Cb,
        integer: Xb(Cb),
        float: Xb(Cb),
        bool: Xb(Kb),
        regexp: Xb(Kb),
        escape: Xb(Kb),
        color: Xb(Kb),
        url: Xb(Kb),
        keyword: jb,
        self: Xb(jb),
        null: Xb(jb),
        atom: Xb(jb),
        unit: Xb(jb),
        modifier: Xb(jb),
        operatorKeyword: Xb(jb),
        controlKeyword: Xb(jb),
        definitionKeyword: Xb(jb),
        moduleKeyword: Xb(jb),
        operator: nb,
        derefOperator: Xb(nb),
        arithmeticOperator: Xb(nb),
        logicOperator: Xb(nb),
        bitwiseOperator: Xb(nb),
        compareOperator: Xb(nb),
        updateOperator: Xb(nb),
        definitionOperator: Xb(nb),
        typeOperator: Xb(nb),
        controlOperator: Xb(nb),
        punctuation: Db,
        separator: Xb(Db),
        bracket: xb,
        angleBracket: Xb(xb),
        squareBracket: Xb(xb),
        paren: Xb(xb),
        brace: Xb(xb),
        content: db,
        heading: rb,
        heading1: Xb(rb),
        heading2: Xb(rb),
        heading3: Xb(rb),
        heading4: Xb(rb),
        heading5: Xb(rb),
        heading6: Xb(rb),
        contentSeparator: Xb(db),
        list: Xb(db),
        quote: Xb(db),
        emphasis: Xb(db),
        strong: Xb(db),
        link: Xb(db),
        monospace: Xb(db),
        strikethrough: Xb(db),
        inserted: Xb(),
        deleted: Xb(),
        changed: Xb(),
        invalid: Xb(),
        meta: zb,
        documentMeta: Xb(zb),
        annotation: Xb(zb),
        processingInstruction: Xb(zb),
        definition: Gb.defineModifier("definition"),
        constant: Gb.defineModifier("constant"),
        function: Gb.defineModifier("function"),
        standard: Gb.defineModifier("standard"),
        local: Gb.defineModifier("local"),
        special: Gb.defineModifier("special")
      };
    for (let ib in gb) {
      let bb = gb[ib];
      bb instanceof Gb && (bb.name = ib)
    }
    Hb([{
      tag: gb.link,
      class: "tok-link"
    }, {
      tag: gb.heading,
      class: "tok-heading"
    }, {
      tag: gb.emphasis,
      class: "tok-emphasis"
    }, {
      tag: gb.strong,
      class: "tok-strong"
    }, {
      tag: gb.keyword,
      class: "tok-keyword"
    }, {
      tag: gb.atom,
      class: "tok-atom"
    }, {
      tag: gb.bool,
      class: "tok-bool"
    }, {
      tag: gb.url,
      class: "tok-url"
    }, {
      tag: gb.labelName,
      class: "tok-labelName"
    }, {
      tag: gb.inserted,
      class: "tok-inserted"
    }, {
      tag: gb.deleted,
      class: "tok-deleted"
    }, {
      tag: gb.literal,
      class: "tok-literal"
    }, {
      tag: gb.string,
      class: "tok-string"
    }, {
      tag: gb.number,
      class: "tok-number"
    }, {
      tag: [gb.regexp, gb.escape, gb.special(gb.string)],
      class: "tok-string2"
    }, {
      tag: gb.variableName,
      class: "tok-variableName"
    }, {
      tag: gb.local(gb.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: gb.definition(gb.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: gb.special(gb.variableName),
      class: "tok-variableName2"
    }, {
      tag: gb.definition(gb.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: gb.typeName,
      class: "tok-typeName"
    }, {
      tag: gb.namespace,
      class: "tok-namespace"
    }, {
      tag: gb.className,
      class: "tok-className"
    }, {
      tag: gb.macroName,
      class: "tok-macroName"
    }, {
      tag: gb.propertyName,
      class: "tok-propertyName"
    }, {
      tag: gb.operator,
      class: "tok-operator"
    }, {
      tag: gb.comment,
      class: "tok-comment"
    }, {
      tag: gb.meta,
      class: "tok-meta"
    }, {
      tag: gb.invalid,
      class: "tok-invalid"
    }, {
      tag: gb.punctuation,
      class: "tok-punctuation"
    }])
  },
  40815: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Lb.m,
      f: () => Ub.t,
      g: () => Ub.D,
      k: () => Ub.G,
      m: () => Lb.q,
      p: () => rh,
      q: () => Lb.S,
      s: () => Lb.ib
    });
    var Bb = hb(1275),
      Ob = hb(1272),
      Gb = hb(49),
      Ub = hb(40769),
      Lb = hb(40773),
      Yb = hb(40788),
      Sb = hb(40795);

    function ab(bb, ub) {
      return hb => {
        let {
          state: Bb,
          dispatch: Ob
        } = hb;
        if (Bb.readOnly) return !1;
        let Gb = bb(ub, Bb);
        return !!Gb && (Ob(Bb.update(Gb)), !0)
      }
    }
    const Hb = ab(Ab, 0),
      wb = ab(ob, 0),
      Zb = ab(((bb, ub) => ob(bb, ub, function(bb) {
        let ub = [];
        for (let hb of bb.selection.tp) {
          let Bb = bb.doc.lineAt(hb.from),
            Ob = hb.to <= Bb.to ? Bb : bb.doc.lineAt(hb.to);
          Ob.from > Bb.from && Ob.from == hb.to && (Ob = hb.to == Bb.to + 1 ? Bb : bb.doc.lineAt(hb.to - 1));
          let Gb = ub.length - 1;
          Gb >= 0 && ub[Gb].to > Bb.from ? ub[Gb].to = Ob.to : ub.push({
            from: Bb.from + /^\s*/.exec(Bb.text)[0].length,
            to: Ob.to
          })
        }
        return ub
      }(ub))), 0);

    function Xb(bb, ub) {
      let hb = bb.languageDataAt("commentTokens", ub, 1);
      return hb.length ? hb[0] : {}
    }
    const pb = 50;

    function ob(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ub.selection.tp,
        Bb = hb.map((bb => Xb(ub, bb.from).block));
      if (!Bb.every((bb => bb))) return null;
      let Ob = hb.map(((bb, hb) => function(bb, ub, hb, Bb) {
        let Ob, Gb, {
            open: Ub,
            close: Lb
          } = ub,
          Yb = bb.sliceDoc(hb - pb, hb),
          Sb = bb.sliceDoc(Bb, Bb + pb),
          ab = /\s*$/.exec(Yb)[0].length,
          Hb = /^\s*/.exec(Sb)[0].length,
          wb = Yb.length - ab;
        if (Yb.slice(wb - Ub.length, wb) == Ub && Sb.slice(Hb, Hb + Lb.length) == Lb) return {
          open: {
            pos: hb - ab,
            margin: ab && 1
          },
          close: {
            pos: Bb + Hb,
            margin: Hb && 1
          }
        };
        Bb - hb <= 2 * pb ? Ob = Gb = bb.sliceDoc(hb, Bb) : (Ob = bb.sliceDoc(hb, hb + pb), Gb = bb.sliceDoc(Bb - pb, Bb));
        let Zb = /^\s*/.exec(Ob)[0].length,
          Xb = /\s*$/.exec(Gb)[0].length,
          ob = Gb.length - Xb - Lb.length;
        return Ob.slice(Zb, Zb + Ub.length) == Ub && Gb.slice(ob, ob + Lb.length) == Lb ? {
          open: {
            pos: hb + Zb + Ub.length,
            margin: /\s/.test(Ob.charAt(Zb + Ub.length)) ? 1 : 0
          },
          close: {
            pos: Bb - Xb - Lb.length,
            margin: /\s/.test(Gb.charAt(ob - 1)) ? 1 : 0
          }
        } : null
      }(ub, Bb[hb], bb.from, bb.to)));
      if (2 != bb && !Ob.every((bb => bb))) return {
        changes: ub.changes(hb.map(((bb, ub) => Ob[ub] ? [] : [{
          from: bb.from,
          insert: Bb[ub].open + " "
        }, {
          from: bb.to,
          insert: " " + Bb[ub].close
        }])))
      };
      if (1 != bb && Ob.some((bb => bb))) {
        let bb = [];
        for (let ub, hb = 0; hb < Ob.length; hb++)
          if (ub = Ob[hb]) {
            let Ob = Bb[hb],
              {
                open: Gb,
                close: Ub
              } = ub;
            bb.push({
              from: Gb.pos - Ob.open.length,
              to: Gb.pos + Gb.margin
            }, {
              from: Ub.pos - Ub.margin,
              to: Ub.pos + Ob.close.length
            })
          } return {
          changes: bb
        }
      }
      return null
    }

    function Ab(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ub.selection.tp,
        Bb = [],
        Ob = -1;
      bb: for (let {
          from: Gb,
          to: Ub
        }
        of hb) {
        let bb, hb = Bb.length,
          Lb = 1e9;
        for (let Yb = Gb; Yb <= Ub;) {
          let hb = ub.doc.lineAt(Yb);
          if (void 0 == bb && (bb = Xb(ub, hb.from).line, !bb)) continue bb;
          if (hb.from > Ob && (Gb == Ub || Ub > hb.from)) {
            Ob = hb.from;
            let ub = /^\s*/.exec(hb.text)[0].length,
              Gb = ub == hb.length,
              Ub = hb.text.slice(ub, ub + bb.length) == bb ? ub : -1;
            ub < hb.text.length && ub < Lb && (Lb = ub), Bb.push({
              line: hb,
              comment: Ub,
              token: bb,
              indent: ub,
              empty: Gb,
              single: !1
            })
          }
          Yb = hb.to + 1
        }
        if (Lb < 1e9)
          for (let ub = hb; ub < Bb.length; ub++) Bb[ub].indent < Bb[ub].line.text.length && (Bb[ub].indent = Lb);
        Bb.length == hb + 1 && (Bb[hb].single = !0)
      }
      if (2 != bb && Bb.some((bb => bb.comment < 0 && (!bb.empty || bb.single)))) {
        let bb = [];
        for (let {
            line: ub,
            token: Ob,
            indent: Gb,
            empty: Ub,
            single: Lb
          }
          of Bb) !Lb && Ub || bb.push({
          from: ub.from + Gb,
          insert: Ob + " "
        });
        let hb = ub.changes(bb);
        return {
          changes: hb,
          selection: ub.selection.map(hb, 1)
        }
      }
      if (1 != bb && Bb.some((bb => bb.comment >= 0))) {
        let bb = [];
        for (let {
            line: ub,
            comment: hb,
            token: Ob
          }
          of Bb)
          if (hb >= 0) {
            let Bb = ub.from + hb,
              Gb = Bb + Ob.length;
            " " == ub.text[Gb - ub.from] && Gb++, bb.push({
              from: Bb,
              to: Gb
            })
          } return {
          changes: bb
        }
      }
      return null
    }
    const lb = Ub.b.define(),
      Kb = Ub.b.define(),
      Wb = Ub.n.define(),
      Cb = Ub.n.define({
        combine: bb => (0, Ub.V)(bb, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (bb, ub) => ub
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (bb, ub) => (hb, Bb) => bb(hb, Bb) || ub(hb, Bb)
        })
      }),
      db = Ub.G.define({
        create: () => mb.empty,
        update(bb, ub) {
          let hb = ub.state.facet(Cb),
            Bb = ub.annotation(lb);
          if (Bb) {
            let Ob = zb.fromTransaction(ub, Bb.selection),
              Gb = Bb.side,
              Ub = 0 == Gb ? bb.undone : bb.done;
            return Ub = Ob ? gb(Ub, Ub.length, hb.minDepth, Ob) : Jb(Ub, ub.startState.selection), new mb(0 == Gb ? Bb.rest : Ub, 0 == Gb ? Ub : Bb.rest)
          }
          let Ob = ub.annotation(Kb);
          if ("full" != Ob && "before" != Ob || (bb = bb.isolate()), !1 === ub.annotation(Ub.O.addToHistory)) return ub.changes.empty ? bb : bb.addMapping(ub.changes.desc);
          let Gb = zb.fromTransaction(ub),
            Lb = ub.annotation(Ub.O.time),
            Yb = ub.annotation(Ub.O.userEvent);
          return Gb ? bb = bb.addChanges(Gb, Lb, Yb, hb, ub) : ub.selection && (bb = bb.addSelection(ub.startState.selection, Lb, Yb, hb.newGroupDelay)), "full" != Ob && "after" != Ob || (bb = bb.isolate()), bb
        },
        toJSON: bb => ({
          done: bb.done.map((bb => bb.toJSON())),
          undone: bb.undone.map((bb => bb.toJSON()))
        }),
        fromJSON: bb => new mb(bb.done.map(zb.fromJSON), bb.undone.map(zb.fromJSON))
      });

    function rb(bb, ub) {
      return function(hb) {
        let {
          state: Bb,
          dispatch: Ob
        } = hb;
        if (!ub && Bb.readOnly) return !1;
        let Gb = Bb.field(db, !1);
        if (!Gb) return !1;
        let Ub = Gb.pop(bb, Bb, ub);
        return !!Ub && (Ob(Ub), !0)
      }
    }
    const jb = rb(0, !1),
      nb = rb(1, !1),
      Db = rb(0, !0),
      xb = rb(1, !0);
    class zb {
      constructor(bb, ub, hb, Bb, Ob) {
        this.changes = bb, this.effects = ub, this.mapped = hb, this.startSelection = Bb, this.selectionsAfter = Ob
      }
      setSelAfter(bb) {
        return new zb(this.changes, this.effects, this.mapped, this.startSelection, bb)
      }
      toJSON() {
        var bb, ub, hb;
        return {
          changes: null === (bb = this.changes) || void 0 === bb ? void 0 : bb.toJSON(),
          mapped: null === (ub = this.mapped) || void 0 === ub ? void 0 : ub.toJSON(),
          startSelection: null === (hb = this.startSelection) || void 0 === hb ? void 0 : hb.toJSON(),
          selectionsAfter: this.selectionsAfter.map((bb => bb.toJSON()))
        }
      }
      static fromJSON(bb) {
        return new zb(bb.changes && Ub.ChangeSet.fromJSON(bb.changes), [], bb.mapped && Ub.f.fromJSON(bb.mapped), bb.startSelection && Ub.j.fromJSON(bb.startSelection), bb.selectionsAfter.map(Ub.j.fromJSON))
      }
      static fromTransaction(bb, ub) {
        let hb = vb;
        for (let Bb of bb.startState.facet(Wb)) {
          let ub = Bb(bb);
          ub.length && (hb = hb.concat(ub))
        }
        return !hb.length && bb.changes.empty ? null : new zb(bb.changes.invert(bb.startState.doc), hb, void 0, ub || bb.startState.selection, vb)
      }
      static selection(bb) {
        return new zb(void 0, vb, void 0, void 0, bb)
      }
    }

    function gb(bb, ub, hb, Bb) {
      let Ob = ub + 1 > hb + 20 ? ub - hb - 1 : 0,
        Gb = bb.slice(Ob, ub);
      return Gb.push(Bb), Gb
    }

    function ib(bb, ub) {
      return bb.length ? ub.length ? bb.concat(ub) : bb : ub
    }
    const vb = [],
      tb = 200;

    function Jb(bb, ub) {
      if (bb.length) {
        let hb = bb[bb.length - 1],
          Bb = hb.selectionsAfter.slice(Math.max(0, hb.selectionsAfter.length - tb));
        return Bb.length && Bb[Bb.length - 1].eq(ub) ? bb : (Bb.push(ub), gb(bb, bb.length - 1, 1e9, hb.setSelAfter(Bb)))
      }
      return [zb.selection([ub])]
    }

    function eb(bb) {
      let ub = bb[bb.length - 1],
        hb = bb.slice();
      return hb[bb.length - 1] = ub.setSelAfter(ub.selectionsAfter.slice(0, ub.selectionsAfter.length - 1)), hb
    }

    function Nb(bb, ub) {
      if (!bb.length) return bb;
      let hb = bb.length,
        Bb = vb;
      for (; hb;) {
        let Ob = sb(bb[hb - 1], ub, Bb);
        if (Ob.changes && !Ob.changes.empty || Ob.effects.length) {
          let ub = bb.slice(0, hb);
          return ub[hb - 1] = Ob, ub
        }
        ub = Ob.mapped, hb--, Bb = Ob.selectionsAfter
      }
      return Bb.length ? [zb.selection(Bb)] : vb
    }

    function sb(bb, ub, hb) {
      let Bb = ib(bb.selectionsAfter.length ? bb.selectionsAfter.map((bb => bb.map(ub))) : vb, hb);
      if (!bb.changes) return zb.selection(Bb);
      let Ob = bb.changes.map(ub),
        Gb = ub.mapDesc(bb.changes, !0),
        Lb = bb.mapped ? bb.mapped.composeDesc(Gb) : Gb;
      return new zb(Ob, Ub.D.mapEffects(bb.effects, ub), Lb, bb.startSelection.map(Gb), Bb)
    }
    const Mb = /^(input\.type|delete)($|\.)/;
    class mb {
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = bb, this.undone = ub, this.prevTime = hb, this.prevUserEvent = Bb
      }
      isolate() {
        return this.prevTime ? new mb(this.done, this.undone) : this
      }
      addChanges(bb, ub, hb, Bb, Ob) {
        let Gb = this.done,
          Lb = Gb[Gb.length - 1];
        return Gb = Lb && Lb.changes && !Lb.changes.empty && bb.changes && (!hb || Mb.test(hb)) && (!Lb.selectionsAfter.length && ub - this.prevTime < Bb.newGroupDelay && Bb.joinToEvent(Ob, function(bb, ub) {
          let hb = [],
            Bb = !1;
          return bb.iterChangedRanges(((bb, ub) => hb.push(bb, ub))), ub.iterChangedRanges(((bb, ub, Ob, Gb) => {
            for (let Ub = 0; Ub < hb.length;) {
              let bb = hb[Ub++],
                ub = hb[Ub++];
              Gb >= bb && Ob <= ub && (Bb = !0)
            }
          })), Bb
        }(Lb.changes, bb.changes)) || "input.type.compose" == hb) ? gb(Gb, Gb.length - 1, Bb.minDepth, new zb(bb.changes.compose(Lb.changes), ib(Ub.D.mapEffects(bb.effects, Lb.changes), Lb.effects), Lb.mapped, Lb.startSelection, vb)) : gb(Gb, Gb.length, Bb.minDepth, bb), new mb(Gb, vb, ub, hb)
      }
      addSelection(bb, ub, hb, Bb) {
        let Ob = this.done.length ? this.done[this.done.length - 1].selectionsAfter : vb;
        return Ob.length > 0 && ub - this.prevTime < Bb && hb == this.prevUserEvent && hb && /^select($|\.)/.test(hb) && (Gb = Ob[Ob.length - 1], Ub = bb, Gb.tp.length == Ub.tp.length && 0 === Gb.tp.filter(((bb, ub) => bb.empty != Ub.tp[ub].empty)).length) ? this : new mb(Jb(this.done, bb), this.undone, ub, hb);
        var Gb, Ub
      }
      addMapping(bb) {
        return new mb(Nb(this.done, bb), Nb(this.undone, bb), this.prevTime, this.prevUserEvent)
      }
      pop(bb, ub, hb) {
        let Bb = 0 == bb ? this.done : this.undone;
        if (0 == Bb.length) return null;
        let Ob = Bb[Bb.length - 1],
          Gb = Ob.selectionsAfter[0] || (Ob.startSelection ? Ob.startSelection.map(Ob.changes.invertedDesc, 1) : ub.selection);
        if (hb && Ob.selectionsAfter.length) return ub.update({
          selection: Ob.selectionsAfter[Ob.selectionsAfter.length - 1],
          annotations: lb.of({
            side: bb,
            rest: eb(Bb),
            selection: Gb
          }),
          userEvent: 0 == bb ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (Ob.changes) {
          let hb = 1 == Bb.length ? vb : Bb.slice(0, Bb.length - 1);
          return Ob.mapped && (hb = Nb(hb, Ob.mapped)), ub.update({
            changes: Ob.changes,
            selection: Ob.startSelection,
            effects: Ob.effects,
            annotations: lb.of({
              side: bb,
              rest: hb,
              selection: Gb
            }),
            filter: !1,
            userEvent: 0 == bb ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    mb.empty = new mb(vb, vb);
    const Ib = [{
      key: "Mod-z",
      run: jb,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: nb,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: nb,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: Db,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: xb,
      preventDefault: !0
    }];

    function Pb(bb, ub) {
      return Ub.j.create(bb.tp.map(ub), bb.mainIndex)
    }

    function qb(bb, ub) {
      return bb.update({
        selection: ub,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function Eb(bb, ub) {
      let {
        state: hb,
        dispatch: Bb
      } = bb, Ob = Pb(hb.selection, ub);
      return !Ob.eq(hb.selection, !0) && (Bb(qb(hb, Ob)), !0)
    }

    function yb(bb, ub) {
      return Ub.j.cursor(ub ? bb.to : bb.from)
    }

    function Vb(bb, ub) {
      return Eb(bb, (hb => hb.empty ? bb.moveByChar(hb, ub) : yb(hb, ub)))
    }

    function Fb(bb) {
      return bb.textDirectionAt(bb.state.selection.main.head) == Lb.i.LTR
    }
    const fb = bb => Vb(bb, !Fb(bb)),
      kb = bb => Vb(bb, Fb(bb));

    function Tb(bb, ub) {
      return Eb(bb, (hb => hb.empty ? bb.moveByGroup(hb, ub) : yb(hb, ub)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function cb(bb, ub, hb) {
      if (ub.type.prop(hb)) return !0;
      let Bb = ub.to - ub.from;
      return Bb && (Bb > 2 || /[^\s,.;:]/.test(bb.sliceDoc(ub.from, ub.to))) || ub.firstChild
    }

    function Qb(bb, ub, hb) {
      let Bb, Ob, Gb = (0, Yb.hb)(bb).resolveInner(ub.head),
        Lb = hb ? Sb.g.closedBy : Sb.g.openedBy;
      for (let Ub = ub.head;;) {
        let ub = hb ? Gb.childAfter(Ub) : Gb.childBefore(Ub);
        if (!ub) break;
        cb(bb, ub, Lb) ? Gb = ub : Ub = hb ? ub.to : ub.from
      }
      return Ob = Gb.type.prop(Lb) && (Bb = hb ? (0, Yb._)(bb, Gb.from, 1) : (0, Yb._)(bb, Gb.to, -1)) && Bb.matched ? hb ? Bb.end.to : Bb.end.from : hb ? Gb.to : Gb.from, Ub.j.cursor(Ob, hb ? -1 : 1)
    }

    function Rb(bb, ub) {
      return Eb(bb, (hb => {
        if (!hb.empty) return yb(hb, ub);
        let Bb = bb.moveVertically(hb, ub);
        return Bb.head != hb.head ? Bb : bb.moveToLineBoundary(hb, ub)
      }))
    }
    const bu = bb => Rb(bb, !1),
      uu = bb => Rb(bb, !0);

    function hu(bb) {
      let ub, hb = bb.scrollDOM.clientHeight < bb.scrollDOM.scrollHeight - 2,
        Bb = 0,
        Ob = 0;
      if (hb) {
        for (let ub of bb.state.facet(Lb.m.scrollMargins)) {
          let hb = ub(bb);
          (null === hb || void 0 === hb ? void 0 : hb.top) && (Bb = Math.max(null === hb || void 0 === hb ? void 0 : hb.top, Bb)), (null === hb || void 0 === hb ? void 0 : hb.bottom) && (Ob = Math.max(null === hb || void 0 === hb ? void 0 : hb.bottom, Ob))
        }
        ub = bb.scrollDOM.clientHeight - Bb - Ob
      } else ub = (bb.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: Bb,
        marginBottom: Ob,
        selfScroll: hb,
        height: Math.max(bb.defaultLineHeight, ub - 5)
      }
    }

    function Bu(bb, ub) {
      let hb, Bb = hu(bb),
        {
          state: Ob
        } = bb,
        Gb = Pb(Ob.selection, (hb => hb.empty ? bb.moveVertically(hb, ub, Bb.height) : yb(hb, ub)));
      if (Gb.eq(Ob.selection)) return !1;
      if (Bb.selfScroll) {
        let ub = bb.coordsAtPos(Ob.selection.main.head),
          Ub = bb.scrollDOM.getBoundingClientRect(),
          Yb = Ub.top + Bb.marginTop,
          Sb = Ub.bottom - Bb.marginBottom;
        ub && ub.top > Yb && ub.bottom < Sb && (hb = Lb.m.scrollIntoView(Gb.main.head, {
          y: "start",
          yMargin: ub.top - Yb
        }))
      }
      return bb.dispatch(qb(Ob, Gb), {
        effects: hb
      }), !0
    }
    const Ou = bb => Bu(bb, !1),
      Gu = bb => Bu(bb, !0);

    function Uu(bb, ub, hb) {
      let Bb = bb.lineBlockAt(ub.head),
        Ob = bb.moveToLineBoundary(ub, hb);
      if (Ob.head == ub.head && Ob.head != (hb ? Bb.to : Bb.from) && (Ob = bb.moveToLineBoundary(ub, hb, !1)), !hb && Ob.head == Bb.from && Bb.length) {
        let hb = /^\s*/.exec(bb.state.sliceDoc(Bb.from, Math.min(Bb.from + 100, Bb.to)))[0].length;
        hb && ub.head != Bb.from + hb && (Ob = Ub.j.cursor(Bb.from + hb))
      }
      return Ob
    }

    function Lu(bb, ub, hb) {
      let Bb = !1,
        Ob = Pb(bb.selection, (ub => {
          let Ob = (0, Yb._)(bb, ub.head, -1) || (0, Yb._)(bb, ub.head, 1) || ub.head > 0 && (0, Yb._)(bb, ub.head - 1, 1) || ub.head < bb.doc.length && (0, Yb._)(bb, ub.head + 1, -1);
          if (!Ob || !Ob.end) return ub;
          Bb = !0;
          let Gb = Ob.start.from == ub.head ? Ob.end.to : Ob.end.from;
          return hb ? Ub.j.range(ub.anchor, Gb) : Ub.j.cursor(Gb)
        }));
      return !!Bb && (ub(qb(bb, Ob)), !0)
    }

    function Yu(bb, ub) {
      let hb = Pb(bb.state.selection, (bb => {
        let hb = ub(bb);
        return Ub.j.range(bb.anchor, hb.head, hb.goalColumn, hb.bidiLevel || void 0, hb.assoc)
      }));
      return !hb.eq(bb.state.selection) && (bb.dispatch(qb(bb.state, hb)), !0)
    }

    function Su(bb, ub) {
      return Yu(bb, (hb => bb.moveByChar(hb, ub)))
    }
    const au = bb => Su(bb, !Fb(bb)),
      Hu = bb => Su(bb, Fb(bb));

    function wu(bb, ub) {
      return Yu(bb, (hb => bb.moveByGroup(hb, ub)))
    }

    function Zu(bb, ub) {
      return Yu(bb, (hb => bb.moveVertically(hb, ub)))
    }
    const Xu = bb => Zu(bb, !1),
      pu = bb => Zu(bb, !0);

    function ou(bb, ub) {
      return Yu(bb, (hb => bb.moveVertically(hb, ub, hu(bb).height)))
    }
    const Au = bb => ou(bb, !1),
      lu = bb => ou(bb, !0),
      Ku = bb => {
        let {
          state: ub,
          dispatch: hb
        } = bb;
        return hb(qb(ub, {
          anchor: 0
        })), !0
      },
      Wu = bb => {
        let {
          state: ub,
          dispatch: hb
        } = bb;
        return hb(qb(ub, {
          anchor: ub.doc.length
        })), !0
      },
      Cu = bb => {
        let {
          state: ub,
          dispatch: hb
        } = bb;
        return hb(qb(ub, {
          anchor: ub.selection.main.anchor,
          head: 0
        })), !0
      },
      du = bb => {
        let {
          state: ub,
          dispatch: hb
        } = bb;
        return hb(qb(ub, {
          anchor: ub.selection.main.anchor,
          head: ub.doc.length
        })), !0
      };

    function ru(bb, ub) {
      let {
        state: hb
      } = bb, Bb = hb.selection, Ob = hb.selection.tp.slice();
      for (let Gb of hb.selection.tp) {
        let Bb = hb.doc.lineAt(Gb.head);
        if (ub ? Bb.to < bb.state.doc.length : Bb.from > 0)
          for (let hb = Gb;;) {
            let Gb = bb.moveVertically(hb, ub);
            if (Gb.head < Bb.from || Gb.head > Bb.to) {
              Ob.some((bb => bb.head == Gb.head)) || Ob.push(Gb);
              break
            }
            if (Gb.head == hb.head) break;
            hb = Gb
          }
      }
      return Ob.length != Bb.tp.length && (bb.dispatch(qb(hb, Ub.j.create(Ob, Ob.length - 1))), !0)
    }

    function ju(bb, ub) {
      if (bb.state.readOnly) return !1;
      let hb = "delete.selection",
        {
          state: Bb
        } = bb,
        Ob = Bb.changeByRange((Bb => {
          let {
            from: Ob,
            to: Gb
          } = Bb;
          if (Ob == Gb) {
            let Ub = ub(Bb);
            Ub < Ob ? (hb = "delete.backward", Ub = nu(bb, Ub, !1)) : Ub > Ob && (hb = "delete.forward", Ub = nu(bb, Ub, !0)), Ob = Math.min(Ob, Ub), Gb = Math.max(Gb, Ub)
          } else Ob = nu(bb, Ob, !1), Gb = nu(bb, Gb, !0);
          return Ob == Gb ? {
            range: Bb
          } : {
            changes: {
              from: Ob,
              to: Gb
            },
            range: Ub.j.cursor(Ob, Ob < Bb.head ? -1 : 1)
          }
        }));
      return !Ob.changes.empty && (bb.dispatch(Bb.update(Ob, {
        scrollIntoView: !0,
        userEvent: hb,
        effects: "delete.selection" == hb ? Lb.m.announce.of(Bb.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function nu(bb, ub, hb) {
      if (bb instanceof Lb.m)
        for (let Bb of bb.state.facet(Lb.m.atomicRanges).map((ub => ub(bb)))) Bb.between(ub, ub, ((bb, Bb) => {
          bb < ub && Bb > ub && (ub = hb ? Bb : bb)
        }));
      return ub
    }
    const Du = (bb, ub, hb) => ju(bb, (Bb => {
        let Ob, Gb, Lb = Bb.from,
          {
            state: Sb
          } = bb,
          ab = Sb.doc.lineAt(Lb);
        if (hb && !ub && Lb > ab.from && Lb < ab.from + 200 && !/[^ \t]/.test(Ob = ab.text.slice(0, Lb - ab.from))) {
          if ("\t" == Ob[Ob.length - 1]) return Lb - 1;
          let bb = (0, Ub.X)(Ob, Sb.tabSize) % (0, Yb.I)(Sb) || (0, Yb.I)(Sb);
          for (let ub = 0; ub < bb && " " == Ob[Ob.length - 1 - ub]; ub++) Lb--;
          Gb = Lb
        } else Gb = (0, Ub._)(ab.text, Lb - ab.from, ub, ub) + ab.from, Gb == Lb && ab.number != (ub ? Sb.doc.lines : 1) ? Gb += ub ? 1 : -1 : !ub && /[\ufe00-\ufe0f]/.test(ab.text.slice(Gb - ab.from, Lb - ab.from)) && (Gb = (0, Ub._)(ab.text, Gb - ab.from, !1, !1) + ab.from);
        return Gb
      })),
      xu = bb => Du(bb, !1, !0),
      zu = bb => Du(bb, !0, !1),
      gu = (bb, ub) => ju(bb, (hb => {
        let Bb = hb.head,
          {
            state: Ob
          } = bb,
          Gb = Ob.doc.lineAt(Bb),
          Lb = Ob.charCategorizer(Bb);
        for (let bb = null;;) {
          if (Bb == (ub ? Gb.to : Gb.from)) {
            Bb == hb.head && Gb.number != (ub ? Ob.doc.lines : 1) && (Bb += ub ? 1 : -1);
            break
          }
          let Yb = (0, Ub._)(Gb.text, Bb - Gb.from, ub) + Gb.from,
            Sb = Gb.text.slice(Math.min(Bb, Yb) - Gb.from, Math.max(Bb, Yb) - Gb.from),
            ab = Lb(Sb);
          if (null != bb && ab != bb) break;
          " " == Sb && Bb == hb.head || (bb = ab), Bb = Yb
        }
        return Bb
      })),
      iu = bb => gu(bb, !1);

    function vu(bb) {
      let ub = [],
        hb = -1;
      for (let Bb of bb.selection.tp) {
        let Ob = bb.doc.lineAt(Bb.from),
          Gb = bb.doc.lineAt(Bb.to);
        if (Bb.empty || Bb.to != Gb.from || (Gb = bb.doc.lineAt(Bb.to - 1)), hb >= Ob.number) {
          let bb = ub[ub.length - 1];
          bb.to = Gb.to, bb.tp.push(Bb)
        } else ub.push({
          from: Ob.from,
          to: Gb.to,
          tp: [Bb]
        });
        hb = Gb.number + 1
      }
      return ub
    }

    function tu(bb, ub, hb) {
      if (bb.readOnly) return !1;
      let Bb = [],
        Ob = [];
      for (let Gb of vu(bb)) {
        if (hb ? Gb.to == bb.doc.length : 0 == Gb.from) continue;
        let ub = bb.doc.lineAt(hb ? Gb.to + 1 : Gb.from - 1),
          Lb = ub.length + 1;
        if (hb) {
          Bb.push({
            from: Gb.to,
            to: ub.to
          }, {
            from: Gb.from,
            insert: ub.text + bb.lineBreak
          });
          for (let ub of Gb.tp) Ob.push(Ub.j.range(Math.min(bb.doc.length, ub.anchor + Lb), Math.min(bb.doc.length, ub.head + Lb)))
        } else {
          Bb.push({
            from: ub.from,
            to: Gb.from
          }, {
            from: Gb.to,
            insert: bb.lineBreak + ub.text
          });
          for (let bb of Gb.tp) Ob.push(Ub.j.range(bb.anchor - Lb, bb.head - Lb))
        }
      }
      return !!Bb.length && (ub(bb.update({
        changes: Bb,
        scrollIntoView: !0,
        selection: Ub.j.create(Ob, bb.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function Ju(bb, ub, hb) {
      if (bb.readOnly) return !1;
      let Bb = [];
      for (let Gb of vu(bb)) hb ? Bb.push({
        from: Gb.from,
        insert: bb.doc.slice(Gb.from, Gb.to) + bb.lineBreak
      }) : Bb.push({
        from: Gb.to,
        insert: bb.lineBreak + bb.doc.slice(Gb.from, Gb.to)
      });
      let Ob = bb.changes(Bb);
      return ub(bb.update({
        changes: Ob,
        selection: bb.selection.map(Ob, hb ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const eu = Nu(!1);

    function Nu(bb) {
      return ub => {
        let {
          state: hb,
          dispatch: Bb
        } = ub;
        if (hb.readOnly) return !1;
        let Ob = hb.changeByRange((ub => {
          let {
            from: Bb,
            to: Ob
          } = ub, Gb = hb.doc.lineAt(Bb), Lb = !bb && Bb == Ob && function(bb, ub) {
            if (/\(\)|\[\]|\{\}/.test(bb.sliceDoc(ub - 1, ub + 1))) return {
              from: ub,
              to: ub
            };
            let hb, Bb = (0, Yb.hb)(bb).resolveInner(ub),
              Ob = Bb.childBefore(ub),
              Gb = Bb.childAfter(ub);
            return Ob && Gb && Ob.to <= ub && Gb.from >= ub && (hb = Ob.type.prop(Sb.g.closedBy)) && hb.indexOf(Gb.name) > -1 && bb.doc.lineAt(Ob.to).from == bb.doc.lineAt(Gb.from).from && !/\S/.test(bb.sliceDoc(Ob.to, Gb.from)) ? {
              from: Ob.to,
              to: Gb.from
            } : null
          }(hb, Bb);
          bb && (Bb = Ob = (Ob <= Gb.to ? Gb : hb.doc.lineAt(Ob)).to);
          let ab = new Yb.e(hb, {
              simulateBreak: Bb,
              simulateDoubleBreak: !!Lb
            }),
            Hb = (0, Yb.L)(ab, Bb);
          for (null == Hb && (Hb = (0, Ub.X)(/^\s*/.exec(hb.doc.lineAt(Bb).text)[0], hb.tabSize)); Ob < Gb.to && /\s/.test(Gb.text[Ob - Gb.from]);) Ob++;
          Lb ? ({
            from: Bb,
            to: Ob
          } = Lb) : Bb > Gb.from && Bb < Gb.from + 100 && !/\S/.test(Gb.text.slice(0, Bb)) && (Bb = Gb.from);
          let wb = ["", (0, Yb.V)(hb, Hb)];
          return Lb && wb.push((0, Yb.V)(hb, ab.lineIndent(Gb.from, -1))), {
            changes: {
              from: Bb,
              to: Ob,
              insert: Ub.K.of(wb)
            },
            range: Ub.j.cursor(Bb + 1 + wb[1].length)
          }
        }));
        return Bb(hb.update(Ob, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function su(bb, ub) {
      let hb = -1;
      return bb.changeByRange((Bb => {
        let Ob = [];
        for (let Ub = Bb.from; Ub <= Bb.to;) {
          let Gb = bb.doc.lineAt(Ub);
          Gb.number > hb && (Bb.empty || Bb.to > Gb.from) && (ub(Gb, Ob, Bb), hb = Gb.number), Ub = Gb.to + 1
        }
        let Gb = bb.changes(Ob);
        return {
          changes: Ob,
          range: Ub.j.range(Gb.mapPos(Bb.anchor, 1), Gb.mapPos(Bb.head, 1))
        }
      }))
    }
    const Mu = bb => {
        let {
          state: ub,
          dispatch: hb
        } = bb;
        return !ub.readOnly && (hb(ub.update(su(ub, ((bb, hb) => {
          hb.push({
            from: bb.from,
            insert: ub.facet(Yb.X)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      mu = bb => {
        let {
          state: ub,
          dispatch: hb
        } = bb;
        return !ub.readOnly && (hb(ub.update(su(ub, ((bb, hb) => {
          let Bb = /^\s*/.exec(bb.text)[0];
          if (!Bb) return;
          let Ob = (0, Ub.X)(Bb, ub.tabSize),
            Gb = 0,
            Lb = (0, Yb.V)(ub, Math.max(0, Ob - (0, Yb.I)(ub)));
          for (; Gb < Bb.length && Gb < Lb.length && Bb.charCodeAt(Gb) == Lb.charCodeAt(Gb);) Gb++;
          hb.push({
            from: bb.from + Gb,
            to: bb.from + Bb.length,
            insert: Lb.slice(Gb)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      Iu = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: bb => Eb(bb, (ub => Qb(bb.state, ub, !Fb(bb)))),
        shift: bb => Yu(bb, (ub => Qb(bb.state, ub, !Fb(bb))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: bb => Eb(bb, (ub => Qb(bb.state, ub, Fb(bb)))),
        shift: bb => Yu(bb, (ub => Qb(bb.state, ub, Fb(bb))))
      }, {
        key: "Alt-ArrowUp",
        run: bb => {
          let {
            state: ub,
            dispatch: hb
          } = bb;
          return tu(ub, hb, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: bb => {
          let {
            state: ub,
            dispatch: hb
          } = bb;
          return Ju(ub, hb, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: bb => {
          let {
            state: ub,
            dispatch: hb
          } = bb;
          return tu(ub, hb, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: bb => {
          let {
            state: ub,
            dispatch: hb
          } = bb;
          return Ju(ub, hb, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: bb => ru(bb, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: bb => ru(bb, !0)
      }, {
        key: "Escape",
        run: bb => {
          let {
            state: ub,
            dispatch: hb
          } = bb, Bb = ub.selection, Ob = null;
          return Bb.tp.length > 1 ? Ob = Ub.j.create([Bb.main]) : Bb.main.empty || (Ob = Ub.j.create([Ub.j.cursor(Bb.main.head)])), !!Ob && (hb(qb(ub, Ob)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: Nu(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: bb => {
          let {
            state: ub,
            dispatch: hb
          } = bb, Bb = vu(ub).map((bb => {
            let {
              from: hb,
              to: Bb
            } = bb;
            return Ub.j.range(hb, Math.min(Bb + 1, ub.doc.length))
          }));
          return hb(ub.update({
            selection: Ub.j.create(Bb),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: bb => {
          let {
            state: ub,
            dispatch: hb
          } = bb, Bb = Pb(ub.selection, (bb => {
            let hb = (0, Yb.hb)(ub),
              Bb = hb.resolveStack(bb.from, 1);
            if (bb.empty) {
              let ub = hb.resolveStack(bb.from, -1);
              ub.node.from >= Bb.node.from && ub.node.to <= Bb.node.to && (Bb = ub)
            }
            for (let ub = Bb; ub; ub = ub.next) {
              let {
                node: hb
              } = ub;
              if ((hb.from < bb.from && hb.to >= bb.to || hb.to > bb.to && hb.from <= bb.from) && ub.next) return Ub.j.range(hb.to, hb.from)
            }
            return bb
          }));
          return !Bb.eq(ub.selection) && (hb(qb(ub, Bb)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: mu
      }, {
        key: "Mod-]",
        run: Mu
      }, {
        key: "Mod-Alt-\\",
        run: bb => {
          let {
            state: ub,
            dispatch: hb
          } = bb;
          if (ub.readOnly) return !1;
          let Bb = Object.create(null),
            Ob = new Yb.e(ub, {
              overrideIndentation: bb => {
                let ub = Bb[bb];
                return null == ub ? -1 : ub
              }
            }),
            Gb = su(ub, ((bb, hb, Gb) => {
              let Ub = (0, Yb.L)(Ob, bb.from);
              if (null == Ub) return;
              /\S/.test(bb.text) || (Ub = 0);
              let Lb = /^\s*/.exec(bb.text)[0],
                Sb = (0, Yb.V)(ub, Ub);
              (Lb != Sb || Gb.from < bb.from + Lb.length) && (Bb[bb.from] = Ub, hb.push({
                from: bb.from,
                to: bb.from + Lb.length,
                insert: Sb
              }))
            }));
          return Gb.changes.empty || hb(ub.update(Gb, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: bb => {
          if (bb.state.readOnly) return !1;
          let {
            state: ub
          } = bb, hb = ub.changes(vu(ub).map((bb => {
            let {
              from: hb,
              to: Bb
            } = bb;
            return hb > 0 ? hb-- : Bb < ub.doc.length && Bb++, {
              from: hb,
              to: Bb
            }
          }))), Bb = Pb(ub.selection, (ub => {
            let hb;
            if (bb.lineWrapping) {
              let Bb = bb.lineBlockAt(ub.head),
                Ob = bb.coordsAtPos(ub.head, ub.assoc || 1);
              Ob && (hb = Bb.bottom + bb.documentTop - Ob.bottom + bb.defaultLineHeight / 2)
            }
            return bb.moveVertically(ub, !0, hb)
          })).map(hb);
          return bb.dispatch({
            changes: hb,
            selection: Bb,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: bb => {
          let {
            state: ub,
            dispatch: hb
          } = bb;
          return Lu(ub, hb, !1)
        }
      }, {
        key: "Mod-/",
        run: bb => {
          let {
            state: ub
          } = bb, hb = ub.doc.lineAt(ub.selection.main.from), Bb = Xb(bb.state, hb.from);
          return Bb.line ? Hb(bb) : !!Bb.block && Zb(bb)
        }
      }, {
        key: "Alt-A",
        run: wb
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: bb => (bb.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: fb,
        shift: au,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: bb => Tb(bb, !Fb(bb)),
        shift: bb => wu(bb, !Fb(bb)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: bb => Eb(bb, (ub => Uu(bb, ub, !Fb(bb)))),
        shift: bb => Yu(bb, (ub => Uu(bb, ub, !Fb(bb)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: kb,
        shift: Hu,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: bb => Tb(bb, Fb(bb)),
        shift: bb => wu(bb, Fb(bb)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: bb => Eb(bb, (ub => Uu(bb, ub, Fb(bb)))),
        shift: bb => Yu(bb, (ub => Uu(bb, ub, Fb(bb)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: bu,
        shift: Xu,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: Ku,
        shift: Cu
      }, {
        mac: "Ctrl-ArrowUp",
        run: Ou,
        shift: Au
      }, {
        key: "ArrowDown",
        run: uu,
        shift: pu,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: Wu,
        shift: du
      }, {
        mac: "Ctrl-ArrowDown",
        run: Gu,
        shift: lu
      }, {
        key: "PageUp",
        run: Ou,
        shift: Au
      }, {
        key: "PageDown",
        run: Gu,
        shift: lu
      }, {
        key: "Home",
        run: bb => Eb(bb, (ub => Uu(bb, ub, !1))),
        shift: bb => Yu(bb, (ub => Uu(bb, ub, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: Ku,
        shift: Cu
      }, {
        key: "End",
        run: bb => Eb(bb, (ub => Uu(bb, ub, !0))),
        shift: bb => Yu(bb, (ub => Uu(bb, ub, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: Wu,
        shift: du
      }, {
        key: "Enter",
        run: eu,
        shift: eu
      }, {
        key: "Mod-a",
        run: bb => {
          let {
            state: ub,
            dispatch: hb
          } = bb;
          return hb(ub.update({
            selection: {
              anchor: 0,
              head: ub.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: xu,
        shift: xu,
        preventDefault: !0
      }, {
        key: "Delete",
        run: zu,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: iu,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: bb => gu(bb, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: bb => ju(bb, (ub => {
          let hb = bb.moveToLineBoundary(ub, !1).head;
          return ub.head > hb ? hb : Math.max(0, ub.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: bb => ju(bb, (ub => {
          let hb = bb.moveToLineBoundary(ub, !0).head;
          return ub.head < hb ? hb : Math.min(bb.state.doc.length, ub.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: fb,
        shift: au,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: kb,
        shift: Hu
      }, {
        key: "Ctrl-p",
        run: bu,
        shift: Xu
      }, {
        key: "Ctrl-n",
        run: uu,
        shift: pu
      }, {
        key: "Ctrl-a",
        run: bb => Eb(bb, (ub => Ub.j.cursor(bb.lineBlockAt(ub.head).from, 1))),
        shift: bb => Yu(bb, (ub => Ub.j.cursor(bb.lineBlockAt(ub.head).from)))
      }, {
        key: "Ctrl-e",
        run: bb => Eb(bb, (ub => Ub.j.cursor(bb.lineBlockAt(ub.head).to, -1))),
        shift: bb => Yu(bb, (ub => Ub.j.cursor(bb.lineBlockAt(ub.head).to)))
      }, {
        key: "Ctrl-d",
        run: zu
      }, {
        key: "Ctrl-h",
        run: xu
      }, {
        key: "Ctrl-k",
        run: bb => ju(bb, (ub => {
          let hb = bb.lineBlockAt(ub.head).to;
          return ub.head < hb ? hb : Math.min(bb.state.doc.length, ub.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: iu
      }, {
        key: "Ctrl-o",
        run: bb => {
          let {
            state: ub,
            dispatch: hb
          } = bb;
          if (ub.readOnly) return !1;
          let Bb = ub.changeByRange((bb => ({
            changes: {
              from: bb.from,
              to: bb.to,
              insert: Ub.K.of(["", ""])
            },
            range: Ub.j.cursor(bb.from)
          })));
          return hb(ub.update(Bb, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: bb => {
          let {
            state: ub,
            dispatch: hb
          } = bb;
          if (ub.readOnly) return !1;
          let Bb = ub.changeByRange((bb => {
            if (!bb.empty || 0 == bb.from || bb.from == ub.doc.length) return {
              range: bb
            };
            let hb = bb.from,
              Bb = ub.doc.lineAt(hb),
              Ob = hb == Bb.from ? hb - 1 : (0, Ub._)(Bb.text, hb - Bb.from, !1) + Bb.from,
              Gb = hb == Bb.to ? hb + 1 : (0, Ub._)(Bb.text, hb - Bb.from, !0) + Bb.from;
            return {
              changes: {
                from: Ob,
                to: Gb,
                insert: ub.doc.slice(hb, Gb).append(ub.doc.slice(Ob, hb))
              },
              range: Ub.j.cursor(Gb)
            }
          }));
          return !Bb.changes.empty && (hb(ub.update(Bb, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: Gu
      }].map((bb => ({
        mac: bb.key,
        run: bb.run,
        shift: bb.shift
      }))))),
      Pu = {
        key: "Tab",
        run: Mu,
        shift: mu
      };
    var qu = hb(40821),
      Eu = hb(40760),
      yu = hb(40828),
      Vu = function(bb) {
        void 0 === bb && (bb = {});
        var {
          crosshairCursor: ub = !1
        } = bb, hb = [];
        !1 !== bb.closeBracketsKeymap && (hb = hb.concat(Eu.f)), !1 !== bb.defaultKeymap && (hb = hb.concat(Iu)), !1 !== bb.searchKeymap && (hb = hb.concat(qu.i)), !1 !== bb.historyKeymap && (hb = hb.concat(Ib)), !1 !== bb.foldKeymap && (hb = hb.concat(Yb.A)), !1 !== bb.completionKeymap && (hb = hb.concat(Eu.m)), !1 !== bb.lintKeymap && (hb = hb.concat(yu.d));
        var Bb = [];
        return !1 !== bb.lineNumbers && Bb.push((0, Lb.V)()), !1 !== bb.highlightActiveLineGutter && Bb.push((0, Lb.L)()), !1 !== bb.highlightSpecialChars && Bb.push((0, Lb.P)()), !1 !== bb.history && Bb.push(function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [db, Cb.of(bb), Lb.m.domEventHandlers({
            beforeinput(bb, ub) {
              let hb = "historyUndo" == bb.inputType ? jb : "historyRedo" == bb.inputType ? nb : null;
              return !!hb && (bb.preventDefault(), hb(ub))
            }
          })]
        }()), !1 !== bb.foldGutter && Bb.push((0, Yb.x)()), !1 !== bb.drawSelection && Bb.push((0, Lb.A)()), !1 !== bb.dropCursor && Bb.push((0, Lb.C)()), !1 !== bb.allowMultipleSelections && Bb.push(Ub.k.allowMultipleSelections.of(!0)), !1 !== bb.indentOnInput && Bb.push((0, Yb.R)()), !1 !== bb.syntaxHighlighting && Bb.push((0, Yb.db)(Yb.q, {
          fallback: !0
        })), !1 !== bb.bracketMatching && Bb.push((0, Yb.j)()), !1 !== bb.closeBrackets && Bb.push((0, Eu.g)()), !1 !== bb.autocompletion && Bb.push((0, Eu.b)()), !1 !== bb.rectangularSelection && Bb.push((0, Lb.cb)()), !1 !== ub && Bb.push((0, Lb.y)()), !1 !== bb.highlightActiveLine && Bb.push((0, Lb.O)()), !1 !== bb.highlightSelectionMatches && Bb.push((0, qu.f)()), bb.tabSize && "number" === typeof bb.tabSize && Bb.push(Yb.X.of(" ".repeat(bb.tabSize))), Bb.concat([Lb.T.of(hb.flat())]).filter(Boolean)
      },
      Fu = hb(40803);
    const fu = "#e5c07b",
      ku = "#e06c75",
      Tu = "#56b6c2",
      cu = "#ffffff",
      Qu = "#abb2bf",
      Ru = "#7d8799",
      bh = "#61afef",
      uh = "#98c379",
      hh = "#d19a66",
      Bh = "#c678dd",
      Oh = "#21252b",
      Gh = "#2c313a",
      Uh = "#282c34",
      Lh = "#353a42",
      Yh = "#3E4451",
      Sh = "#528bff",
      ah = Lb.m.theme({
        "&": {
          color: Qu,
          backgroundColor: Uh
        },
        ".cm-content": {
          caretColor: Sh
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: Sh
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: Yh
        },
        ".cm-panels": {
          backgroundColor: Oh,
          color: Qu
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
          backgroundColor: Uh,
          color: Ru,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: Gh
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: Lh
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: Lh,
          borderBottomColor: Lh
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: Gh,
            color: Qu
          }
        }
      }, {
        dark: !0
      }),
      Hh = Yb.c.define([{
        tag: Fu.k.keyword,
        color: Bh
      }, {
        tag: [Fu.k.name, Fu.k.deleted, Fu.k.character, Fu.k.propertyName, Fu.k.macroName],
        color: ku
      }, {
        tag: [Fu.k.function(Fu.k.variableName), Fu.k.labelName],
        color: bh
      }, {
        tag: [Fu.k.color, Fu.k.constant(Fu.k.name), Fu.k.standard(Fu.k.name)],
        color: hh
      }, {
        tag: [Fu.k.definition(Fu.k.name), Fu.k.separator],
        color: Qu
      }, {
        tag: [Fu.k.typeName, Fu.k.className, Fu.k.number, Fu.k.changed, Fu.k.annotation, Fu.k.modifier, Fu.k.self, Fu.k.namespace],
        color: fu
      }, {
        tag: [Fu.k.operator, Fu.k.operatorKeyword, Fu.k.url, Fu.k.escape, Fu.k.regexp, Fu.k.link, Fu.k.special(Fu.k.string)],
        color: Tu
      }, {
        tag: [Fu.k.meta, Fu.k.comment],
        color: Ru
      }, {
        tag: Fu.k.strong,
        fontWeight: "bold"
      }, {
        tag: Fu.k.emphasis,
        fontStyle: "italic"
      }, {
        tag: Fu.k.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: Fu.k.link,
        color: Ru,
        textDecoration: "underline"
      }, {
        tag: Fu.k.heading,
        fontWeight: "bold",
        color: ku
      }, {
        tag: [Fu.k.atom, Fu.k.bool, Fu.k.special(Fu.k.variableName)],
        color: hh
      }, {
        tag: [Fu.k.processingInstruction, Fu.k.string, Fu.k.inserted],
        color: uh
      }, {
        tag: Fu.k.invalid,
        color: cu
      }]),
      wh = [ah, (0, Yb.db)(Hh)];
    var Zh = Lb.m.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class Xh {
      constructor(bb, ub) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = ub, this.timeoutMS = ub, this.callbacks.push(bb)
      }
      gH() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var bb = this.callbacks.slice();
          this.callbacks.length = 0, bb.forEach((bb => {
            try {
              bb()
            } catch (ub) {
              console.error("TimeoutLatch callback error:", ub)
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
    class ph {
      constructor() {
        this.interval = null, this.latches = new Set
      }
      add(bb) {
        this.latches.add(bb), this.start()
      }
      remove(bb) {
        this.latches.delete(bb), 0 === this.latches.size && this.stop()
      }
      start() {
        null === this.interval && (this.interval = setInterval((() => {
          this.latches.forEach((bb => {
            bb.gH(), bb.isDone && this.remove(bb)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var oh = null,
      Ah = Ub.b.define(),
      lh = [];

    function Kh(bb) {
      var {
        value: ub,
        selection: hb,
        onChange: Bb,
        onStatistics: Ob,
        onCreateEditor: Yb,
        onUpdate: Sb,
        extensions: ab = lh,
        autoFocus: Hb,
        theme: wb = "light",
        height: Zb = null,
        minHeight: Xb = null,
        maxHeight: pb = null,
        width: ob = null,
        minWidth: Ab = null,
        maxWidth: lb = null,
        placeholder: Kb = "",
        editable: Wb = !0,
        readOnly: Cb = !1,
        indentWithTab: db = !0,
        basicSetup: rb = !0,
        root: jb,
        initialState: nb
      } = bb, [Db, xb] = (0, Gb.useState)(), [zb, gb] = (0, Gb.useState)(), [ib, vb] = (0, Gb.useState)(), tb = (0, Gb.useState)((() => ({
        current: null
      })))[0], Jb = (0, Gb.useState)((() => ({
        current: null
      })))[0], eb = Lb.m.theme({
        "&": {
          height: Zb,
          minHeight: Xb,
          maxHeight: pb,
          width: ob,
          minWidth: Ab,
          maxWidth: lb
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), Nb = Lb.m.updateListener.of((bb => {
        if (bb.docChanged && "function" === typeof Bb && !bb.transactions.some((bb => bb.annotation(Ah)))) {
          tb.current ? tb.current.reset() : (tb.current = new Xh((() => {
            if (Jb.current) {
              var bb = Jb.current;
              Jb.current = null, bb()
            }
            tb.current = null
          }), 200), ("undefined" === typeof window ? new ph : (oh || (oh = new ph), oh)).add(tb.current));
          var ub = bb.state.doc.toString();
          Bb(ub, bb)
        }
        Ob && Ob((bb => ({
          line: bb.state.doc.lineAt(bb.state.selection.main.from),
          lineCount: bb.state.doc.lines,
          lineBreak: bb.state.lineBreak,
          length: bb.state.doc.length,
          readOnly: bb.state.readOnly,
          tabSize: bb.state.tabSize,
          selection: bb.state.selection,
          selectionAsSingle: bb.state.selection.asSingle().main,
          tp: bb.state.selection.tp,
          selectionCode: bb.state.sliceDoc(bb.state.selection.main.from, bb.state.selection.main.to),
          selections: bb.state.selection.tp.map((ub => bb.state.sliceDoc(ub.from, ub.to))),
          selectedText: bb.state.selection.tp.some((bb => !bb.empty))
        }))(bb))
      })), sb = function(bb) {
        void 0 === bb && (bb = {});
        var {
          indentWithTab: ub = !0,
          editable: hb = !0,
          readOnly: Bb = !1,
          theme: Ob = "light",
          placeholder: Gb = "",
          basicSetup: Yb = !0
        } = bb, Sb = [];
        switch (ub && Sb.unshift(Lb.T.of([Pu])), Yb && ("boolean" === typeof Yb ? Sb.unshift(Vu()) : Sb.unshift(Vu(Yb))), Gb && Sb.unshift((0, Lb.bb)(Gb)), Ob) {
          case "light":
            Sb.push(Zh);
            break;
          case "dark":
            Sb.push(wh);
            break;
          case "none":
            break;
          default:
            Sb.push(Ob)
        }
        return !1 === hb && Sb.push(Lb.m.editable.of(!1)), Bb && Sb.push(Ub.k.readOnly.of(!0)), [...Sb]
      }({
        theme: wb,
        editable: Wb,
        readOnly: Cb,
        placeholder: Kb,
        indentWithTab: db,
        basicSetup: rb
      }), Mb = [Nb, eb, ...sb];
      return Sb && "function" === typeof Sb && Mb.push(Lb.m.updateListener.of(Sb)), Mb = Mb.concat(ab), (0, Gb.useLayoutEffect)((() => {
        if (Db && !ib) {
          var bb = {
              doc: ub,
              selection: hb,
              extensions: Mb
            },
            Bb = nb ? Ub.k.fromJSON(nb.json, bb, nb.fields) : Ub.k.create(bb);
          if (vb(Bb), !zb) {
            var Ob = new Lb.m({
              state: Bb,
              parent: Db,
              root: jb
            });
            gb(Ob), Yb && Yb(Ob, Bb)
          }
        }
        return () => {
          zb && (vb(void 0), gb(void 0))
        }
      }), [Db, ib]), (0, Gb.useEffect)((() => {
        bb.container && xb(bb.container)
      }), [bb.container]), (0, Gb.useEffect)((() => () => {
        zb && (zb.destroy(), gb(void 0)), tb.current && (tb.current.cancel(), tb.current = null)
      }), [zb]), (0, Gb.useEffect)((() => {
        Hb && zb && zb.focus()
      }), [Hb, zb]), (0, Gb.useEffect)((() => {
        zb && zb.dispatch({
          effects: Ub.D.reconfigure.of(Mb)
        })
      }), [wb, ab, Zb, Xb, pb, ob, Ab, lb, Kb, Wb, Cb, db, rb, Bb, Sb]), (0, Gb.useEffect)((() => {
        if (void 0 !== ub) {
          var bb = zb ? zb.state.doc.toString() : "";
          if (zb && ub !== bb) {
            var hb = () => {
              zb && ub !== zb.state.doc.toString() && zb.dispatch({
                changes: {
                  from: 0,
                  to: zb.state.doc.toString().length,
                  insert: ub || ""
                },
                annotations: [Ah.of(!0)]
              })
            };
            tb.current && !tb.current.isDone ? Jb.current = hb : hb()
          }
        }
      }), [ub, zb]), {
        state: ib,
        setState: vb,
        view: zb,
        setView: gb,
        container: Db,
        setContainer: xb
      }
    }
    var Wh = hb(1007),
      Ch = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      dh = (0, Gb.forwardRef)(((bb, ub) => {
        var {
          className: hb,
          value: Ub = "",
          selection: Lb,
          extensions: Yb = [],
          onChange: Sb,
          onStatistics: ab,
          onCreateEditor: Hb,
          onUpdate: wb,
          autoFocus: Zb,
          theme: Xb = "light",
          height: pb,
          minHeight: ob,
          maxHeight: Ab,
          width: lb,
          minWidth: Kb,
          maxWidth: Wb,
          basicSetup: Cb,
          placeholder: db,
          indentWithTab: rb,
          editable: jb,
          readOnly: nb,
          root: Db,
          initialState: xb
        } = bb, zb = (0, Ob.e)(bb, Ch), gb = (0, Gb.useRef)(null), {
          state: ib,
          view: vb,
          container: tb,
          setContainer: Jb
        } = Kh({
          root: Db,
          value: Ub,
          autoFocus: Zb,
          theme: Xb,
          height: pb,
          minHeight: ob,
          maxHeight: Ab,
          width: lb,
          minWidth: Kb,
          maxWidth: Wb,
          basicSetup: Cb,
          placeholder: db,
          indentWithTab: rb,
          editable: jb,
          readOnly: nb,
          selection: Lb,
          onChange: Sb,
          onStatistics: ab,
          onCreateEditor: Hb,
          onUpdate: wb,
          extensions: Yb,
          initialState: xb
        });
        (0, Gb.useImperativeHandle)(ub, (() => ({
          editor: gb.current,
          state: ib,
          view: vb
        })), [gb, tb, ib, vb]);
        var eb = (0, Gb.useCallback)((bb => {
          gb.current = bb, Jb(bb)
        }), [Jb]);
        if ("string" !== typeof Ub) throw new Error("value must be typeof string but got " + typeof Ub);
        var Nb = "string" === typeof Xb ? "cm-theme-" + Xb : "cm-theme";
        return (0, Wh.jsx)("div", (0, Bb.b)({
          ref: eb,
          className: Nb + (hb ? " " + hb : "")
        }, zb))
      }));
    dh.displayName = "CodeMirror";
    const rh = dh
  },
  40779: (bb, ub, hb) => {
    function Bb() {
      var bb = arguments[0];
      "string" == typeof bb && (bb = document.createElement(bb));
      var ub = 1,
        hb = arguments[1];
      if (hb && "object" == typeof hb && null == hb.nodeType && !Array.isArray(hb)) {
        for (var Bb in hb)
          if (Object.prototype.hasOwnProperty.call(hb, Bb)) {
            var Gb = hb[Bb];
            "string" == typeof Gb ? bb.setAttribute(Bb, Gb) : null != Gb && (bb[Bb] = Gb)
          } ub++
      }
      for (; ub < arguments.length; ub++) Ob(bb, arguments[ub]);
      return bb
    }

    function Ob(bb, ub) {
      if ("string" == typeof ub) bb.appendChild(document.createTextNode(ub));
      else if (null == ub);
      else if (null != ub.nodeType) bb.appendChild(ub);
      else {
        if (!Array.isArray(ub)) throw new RangeError("Unsupported child node: " + ub);
        for (var hb = 0; hb < ub.length; hb++) Ob(bb, ub[hb])
      }
    }
    hb.d(ub, {
      b: () => Bb
    })
  },
  40776: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ub
    });
    const Bb = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      Ob = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      Gb = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class Ub {
      constructor(bb, ub) {
        this.rules = [];
        let {
          finish: hb
        } = ub || {};

        function Bb(bb) {
          return /^@/.test(bb) ? [bb] : bb.split(/,\s*/)
        }

        function Ob(bb, ub, Gb, Ub) {
          let Lb = [],
            Yb = /^@(\w+)\b/.exec(bb[0]),
            Sb = Yb && "keyframes" == Yb[1];
          if (Yb && null == ub) return Gb.push(bb[0] + ";");
          for (let hb in ub) {
            let Ub = ub[hb];
            if (/&/.test(hb)) Ob(hb.split(/,\s*/).map((ub => bb.map((bb => ub.replace(/&/, bb))))).reduce(((bb, ub) => bb.concat(ub))), Ub, Gb);
            else if (Ub && "object" == typeof Ub) {
              if (!Yb) throw new RangeError("The value of a property (" + hb + ") should be a primitive value.");
              Ob(Bb(hb), Ub, Lb, Sb)
            } else null != Ub && Lb.push(hb.replace(/_.*/, "").replace(/[A-Z]/g, (bb => "-" + bb.toLowerCase())) + ": " + Ub + ";")
          }(Lb.length || Sb) && Gb.push((!hb || Yb || Ub ? bb : bb.map(hb)).join(", ") + " {" + Lb.join(" ") + "}")
        }
        for (let Gb in bb) Ob(Bb(Gb), bb[Gb], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let bb = Gb[Bb] || 1;
        return Gb[Bb] = bb + 1, "\u037c" + bb.toString(36)
      }
      static mount(bb, ub, hb) {
        let Bb = bb[Ob],
          Gb = hb && hb.nonce;
        Bb ? Gb && Bb.setNonce(Gb) : Bb = new Yb(bb, Gb), Bb.mount(Array.isArray(ub) ? ub : [ub], bb)
      }
    }
    let Lb = new Map;
    class Yb {
      constructor(bb, ub) {
        let hb = bb.ownerDocument || bb,
          Bb = hb.defaultView;
        if (!bb.head && bb.adoptedStyleSheets && Bb.CSSStyleSheet) {
          let ub = Lb.get(hb);
          if (ub) return bb[Ob] = ub;
          this.sheet = new Bb.CSSStyleSheet, Lb.set(hb, this)
        } else this.styleTag = hb.createElement("style"), ub && this.styleTag.setAttribute("nonce", ub);
        this.modules = [], bb[Ob] = this
      }
      mount(bb, ub) {
        let hb = this.sheet,
          Bb = 0,
          Ob = 0;
        for (let Gb = 0; Gb < bb.length; Gb++) {
          let ub = bb[Gb],
            Ub = this.modules.indexOf(ub);
          if (Ub < Ob && Ub > -1 && (this.modules.splice(Ub, 1), Ob--, Ub = -1), -1 == Ub) {
            if (this.modules.splice(Ob++, 0, ub), hb)
              for (let bb = 0; bb < ub.rules.length; bb++) hb.insertRule(ub.rules[bb], Bb++)
          } else {
            for (; Ob < Ub;) Bb += this.modules[Ob++].rules.length;
            Bb += ub.rules.length, Ob++
          }
        }
        if (hb) ub.adoptedStyleSheets.indexOf(this.sheet) < 0 && (ub.adoptedStyleSheets = [this.sheet, ...ub.adoptedStyleSheets]);
        else {
          let bb = "";
          for (let ub = 0; ub < this.modules.length; ub++) bb += this.modules[ub].getRules() + "\n";
          this.styleTag.textContent = bb;
          let hb = ub.head || ub;
          this.styleTag.parentNode != hb && hb.insertBefore(this.styleTag, hb.firstChild)
        }
      }
      setNonce(bb) {
        this.styleTag && this.styleTag.getAttribute("nonce") != bb && this.styleTag.setAttribute("nonce", bb)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);