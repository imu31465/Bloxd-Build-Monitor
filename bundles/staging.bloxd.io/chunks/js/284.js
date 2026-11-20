export const id = 284;
export const ids = [284];
export const modules = {
  40410: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => ha,
      i: () => ma,
      m: () => Za,
      p: () => Bb,
      q: () => Ga,
      t: () => eb,
      v: () => Pa
    });
    var Ab = Ub(40415),
      Mb = Ub(40419),
      Tb = Ub(40437);
    class Eb {
      constructor(bb, ab, Ub, Ab) {
        this.state = bb, this.pos = ab, this.explicit = Ub, this.view = Ab, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(bb) {
        let ab = (0, Tb.wb)(this.state).resolveInner(this.pos, -1);
        for (; ab && bb.indexOf(ab.name) < 0;) ab = ab.parent;
        return ab ? {
          from: ab.from,
          to: this.pos,
          text: this.state.sliceDoc(ab.from, this.pos),
          type: ab.type
        } : null
      }
      matchBefore(bb) {
        let ab = this.state.doc.lineAt(this.pos),
          Ub = Math.max(ab.from, this.pos - 250),
          Ab = ab.text.slice(Ub - ab.from, this.pos - ab.from),
          Mb = Ab.search(Pb(bb, !1));
        return Mb < 0 ? null : {
          from: Ub + Mb,
          to: this.pos,
          text: Ab.slice(Mb)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(bb, ab, Ub) {
        "abort" == bb && this.abortListeners && (this.abortListeners.push(ab), Ub && Ub.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function Yb(bb) {
      let ab = Object.keys(bb).join(""),
        Ub = /\w/.test(ab);
      return Ub && (ab = ab.replace(/\w/g, "")), `[${Ub?"\\w":""}${ab.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function Bb(bb) {
      let ab = bb.map((bb => "string" == typeof bb ? {
          label: bb
        } : bb)),
        [Ub, Ab] = ab.every((bb => /^\w+$/.test(bb.label))) ? [/\w*$/, /\w+$/] : function(bb) {
          let ab = Object.create(null),
            Ub = Object.create(null);
          for (let {
              label: Mb
            }
            of bb) {
            ab[Mb[0]] = !0;
            for (let bb = 1; bb < Mb.length; bb++) Ub[Mb[bb]] = !0
          }
          let Ab = Yb(ab) + Yb(Ub) + "*$";
          return [new RegExp("^" + Ab), new RegExp(Ab)]
        }(ab);
      return bb => {
        let Mb = bb.matchBefore(Ab);
        return Mb || bb.explicit ? {
          from: Mb ? Mb.from : bb.pos,
          options: ab,
          validFor: Ub
        } : null
      }
    }

    function eb(bb, ab) {
      return Ub => {
        for (let ab = (0, Tb.wb)(Ub.state).resolveInner(Ub.pos, -1); ab; ab = ab.parent) {
          if (bb.indexOf(ab.name) > -1) return null;
          if (ab.type.isTop) break
        }
        return ab(Ub)
      }
    }
    class vb {
      constructor(bb, ab, Ub, Ab) {
        this.completion = bb, this.source = ab, this.match = Ub, this.score = Ab
      }
    }

    function Lb(bb) {
      return bb.selection.main.from
    }

    function Pb(bb, ab) {
      var Ub;
      let {
        source: Ab
      } = bb, Mb = ab && "^" != Ab[0], Tb = "$" != Ab[Ab.length - 1];
      return Mb || Tb ? new RegExp(`${Mb?"^":""}(?:${Ab})${Tb?"$":""}`, null !== (Ub = bb.flags) && void 0 !== Ub ? Ub : bb.ignoreCase ? "i" : "") : bb
    }
    const Xb = Ab.d.define();

    function jb(bb, ab, Ub, Mb) {
      let {
        main: Tb
      } = bb.selection, Eb = Ub - Tb.from, Yb = Mb - Tb.from;
      return {
        ...bb.changeByRange((Bb => {
          if (Bb != Tb && Ub != Mb && bb.sliceDoc(Bb.from + Eb, Bb.from + Yb) != bb.sliceDoc(Ub, Mb)) return {
            range: Bb
          };
          let eb = bb.toText(ab);
          return {
            changes: {
              from: Bb.from + Eb,
              to: Mb == Tb.from ? Bb.to : Bb.from + Yb,
              insert: eb
            },
            range: Ab.m.cursor(Bb.from + Eb + eb.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const Rb = new WeakMap;

    function kb(bb) {
      if (!Array.isArray(bb)) return bb;
      let ab = Rb.get(bb);
      return ab || Rb.set(bb, ab = Bb(bb)), ab
    }
    const yb = Ab.B.define(),
      Zb = Ab.B.define();
    class Db {
      constructor(bb) {
        this.pattern = bb, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let ab = 0; ab < bb.length;) {
          let Ub = (0, Ab.J)(bb, ab),
            Mb = (0, Ab.K)(Ub);
          this.chars.push(Ub);
          let Tb = bb.slice(ab, ab + Mb),
            Eb = Tb.toUpperCase();
          this.folded.push((0, Ab.J)(Eb == Tb ? Tb.toLowerCase() : Eb, 0)), ab += Mb
        }
        this.astral = bb.length != this.chars.length
      }
      ret(bb, ab) {
        return this.score = bb, this.matched = ab, this
      }
      match(bb) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (bb.length < this.pattern.length) return null;
        let {
          chars: ab,
          folded: Ub,
          any: Mb,
          precise: Tb,
          byWord: Eb
        } = this;
        if (1 == ab.length) {
          let Mb = (0, Ab.J)(bb, 0),
            Tb = (0, Ab.K)(Mb),
            Eb = Tb == bb.length ? 0 : -100;
          if (Mb == ab[0]);
          else {
            if (Mb != Ub[0]) return null;
            Eb += -200
          }
          return this.ret(Eb, [0, Tb])
        }
        let Yb = bb.indexOf(this.pattern);
        if (0 == Yb) return this.ret(bb.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let Bb = ab.length,
          eb = 0;
        if (Yb < 0) {
          for (let Tb = 0, Eb = Math.min(bb.length, 200); Tb < Eb && eb < Bb;) {
            let Eb = (0, Ab.J)(bb, Tb);
            Eb != ab[eb] && Eb != Ub[eb] || (Mb[eb++] = Tb), Tb += (0, Ab.K)(Eb)
          }
          if (eb < Bb) return null
        }
        let vb = 0,
          Lb = 0,
          Pb = !1,
          Xb = 0,
          jb = -1,
          Rb = -1,
          kb = /[a-z]/.test(bb),
          yb = !0;
        for (let Zb = 0, Db = Math.min(bb.length, 200), zb = 0; Zb < Db && Lb < Bb;) {
          let Mb = (0, Ab.J)(bb, Zb);
          Yb < 0 && (vb < Bb && Mb == ab[vb] && (Tb[vb++] = Zb), Xb < Bb && (Mb == ab[Xb] || Mb == Ub[Xb] ? (0 == Xb && (jb = Zb), Rb = Zb + 1, Xb++) : Xb = 0));
          let eb, Db = Mb < 255 ? Mb >= 48 && Mb <= 57 || Mb >= 97 && Mb <= 122 ? 2 : Mb >= 65 && Mb <= 90 ? 1 : 0 : (eb = (0, Ab.$)(Mb)) != eb.toLowerCase() ? 1 : eb != eb.toUpperCase() ? 2 : 0;
          (!Zb || 1 == Db && kb || 0 == zb && 0 != Db) && (ab[Lb] == Mb || Ub[Lb] == Mb && (Pb = !0) ? Eb[Lb++] = Zb : Eb.length && (yb = !1)), zb = Db, Zb += (0, Ab.K)(Mb)
        }
        return Lb == Bb && 0 == Eb[0] && yb ? this.result((Pb ? -200 : 0) - 100, Eb, bb) : Xb == Bb && 0 == jb ? this.ret(-200 - bb.length + (Rb == bb.length ? 0 : -100), [0, Rb]) : Yb > -1 ? this.ret(-700 - bb.length, [Yb, Yb + this.pattern.length]) : Xb == Bb ? this.ret(-900 - bb.length, [jb, Rb]) : Lb == Bb ? this.result((Pb ? -200 : 0) - 100 - 700 + (yb ? 0 : -1100), Eb, bb) : 2 == ab.length ? null : this.result((Mb[0] ? -700 : 0) - 200 - 1100, Mb, bb)
      }
      result(bb, ab, Ub) {
        let Mb = [],
          Tb = 0;
        for (let Eb of ab) {
          let bb = Eb + (this.astral ? (0, Ab.K)((0, Ab.J)(Ub, Eb)) : 1);
          Tb && Mb[Tb - 1] == Eb ? Mb[Tb - 1] = bb : (Mb[Tb++] = Eb, Mb[Tb++] = bb)
        }
        return this.ret(bb - Ub.length, Mb)
      }
    }
    class zb {
      constructor(bb) {
        this.pattern = bb, this.matched = [], this.score = 0, this.folded = bb.toLowerCase()
      }
      match(bb) {
        if (bb.length < this.pattern.length) return null;
        let ab = bb.slice(0, this.pattern.length),
          Ub = ab == this.pattern ? 0 : ab.toLowerCase() == this.folded ? -200 : null;
        return null == Ub ? null : (this.matched = [0, ab.length], this.score = Ub + (bb.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const xb = Ab.q.define({
      combine: bb => (0, Ab.O)(bb, {
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
        positionInfo: fb,
        filterStrict: !1,
        compareCompletions: (bb, ab) => (bb.sortText || bb.label).localeCompare(ab.sortText || ab.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (bb, ab) => bb && ab,
        closeOnBlur: (bb, ab) => bb && ab,
        icons: (bb, ab) => bb && ab,
        tooltipClass: (bb, ab) => Ub => ib(bb(Ub), ab(Ub)),
        optionClass: (bb, ab) => Ub => ib(bb(Ub), ab(Ub)),
        addToOptions: (bb, ab) => bb.concat(ab),
        filterStrict: (bb, ab) => bb || ab
      })
    });

    function ib(bb, ab) {
      return bb ? ab ? bb + " " + ab : bb : ab
    }

    function fb(bb, ab, Ub, Ab, Tb, Eb) {
      let Yb, Bb, eb = bb.textDirection == Mb.e.RTL,
        vb = eb,
        Lb = !1,
        Pb = "top",
        Xb = ab.left - Tb.left,
        jb = Tb.right - ab.right,
        Rb = Ab.right - Ab.left,
        kb = Ab.bottom - Ab.top;
      if (vb && Xb < Math.min(Rb, jb) ? vb = !1 : !vb && jb < Math.min(Rb, Xb) && (vb = !0), Rb <= (vb ? Xb : jb)) Yb = Math.max(Tb.top, Math.min(Ub.top, Tb.bottom - kb)) - ab.top, Bb = Math.min(400, vb ? Xb : jb);
      else {
        Lb = !0, Bb = Math.min(400, (eb ? ab.right : Tb.right - ab.left) - 30);
        let bb = Tb.bottom - ab.bottom;
        bb >= kb || bb > ab.top ? Yb = Ub.bottom - ab.top : (Pb = "bottom", Yb = ab.bottom - Ub.top)
      }
      return {
        style: `${Pb}: ${Yb/((ab.bottom-ab.top)/Eb.offsetHeight)}px; max-width: ${Bb/((ab.right-ab.left)/Eb.offsetWidth)}px`,
        class: "cm-completionInfo-" + (Lb ? eb ? "left-narrow" : "right-narrow" : vb ? "left" : "right")
      }
    }
    const mb = Ab.B.define();

    function pb(bb, ab, Ub) {
      if (bb <= Ub) return {
        from: 0,
        to: bb
      };
      if (ab < 0 && (ab = 0), ab <= bb >> 1) {
        let bb = Math.floor(ab / Ub);
        return {
          from: bb * Ub,
          to: (bb + 1) * Ub
        }
      }
      let Ab = Math.floor((bb - ab) / Ub);
      return {
        from: bb - (Ab + 1) * Ub,
        to: bb - Ab * Ub
      }
    }
    class Nb {
      constructor(bb, ab, Ub) {
        this.view = bb, this.stateField = ab, this.applyCompletion = Ub, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: bb => this.placeInfo(bb),
          key: this
        }, this.space = null, this.currentClass = "";
        let Ab = bb.state.field(ab),
          {
            options: Mb,
            selected: Tb
          } = Ab.open,
          Eb = bb.state.facet(xb);
        this.optionContent = function(bb) {
          let ab = bb.addToOptions.slice();
          return bb.icons && ab.push({
            render(bb) {
              let ab = document.createElement("div");
              return ab.classList.add("cm-completionIcon"), bb.type && ab.classList.add(...bb.type.split(/\s+/g).map((bb => "cm-completionIcon-" + bb))), ab.setAttribute("aria-hidden", "true"), ab
            },
            position: 20
          }), ab.push({
            render(bb, ab, Ub, Ab) {
              let Mb = document.createElement("span");
              Mb.className = "cm-completionLabel";
              let Tb = bb.displayLabel || bb.label,
                Eb = 0;
              for (let Yb = 0; Yb < Ab.length;) {
                let bb = Ab[Yb++],
                  ab = Ab[Yb++];
                bb > Eb && Mb.appendChild(document.createTextNode(Tb.slice(Eb, bb)));
                let Ub = Mb.appendChild(document.createElement("span"));
                Ub.appendChild(document.createTextNode(Tb.slice(bb, ab))), Ub.className = "cm-completionMatchedText", Eb = ab
              }
              return Eb < Tb.length && Mb.appendChild(document.createTextNode(Tb.slice(Eb))), Mb
            },
            position: 50
          }, {
            render(bb) {
              if (!bb.detail) return null;
              let ab = document.createElement("span");
              return ab.className = "cm-completionDetail", ab.textContent = bb.detail, ab
            },
            position: 80
          }), ab.sort(((bb, ab) => bb.position - ab.position)).map((bb => bb.render))
        }(Eb), this.optionClass = Eb.optionClass, this.tooltipClass = Eb.tooltipClass, this.range = pb(Mb.length, Tb, Eb.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(bb.state), this.dom.addEventListener("mousedown", (Ub => {
          let {
            options: Ab
          } = bb.state.field(ab).open;
          for (let ab, Mb = Ub.target; Mb && Mb != this.dom; Mb = Mb.parentNode)
            if ("LI" == Mb.nodeName && (ab = /-(\d+)$/.exec(Mb.id)) && +ab[1] < Ab.length) return this.applyCompletion(bb, Ab[+ab[1]]), void Ub.preventDefault();
          if (Ub.target == this.list) {
            let ab = this.list.classList.contains("cm-completionListIncompleteTop") && Ub.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && Ub.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != ab && (bb.dispatch({
              effects: mb.of(ab)
            }), Ub.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (ab => {
          let Ub = bb.state.field(this.stateField, !1);
          Ub && Ub.tooltip && bb.state.facet(xb).closeOnBlur && ab.relatedTarget != bb.contentDOM && bb.dispatch({
            effects: Zb.of(null)
          })
        })), this.showOptions(Mb, Ab.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(bb, ab) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(bb, ab, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(bb) {
        var ab;
        let Ub = bb.state.field(this.stateField),
          Ab = bb.startState.field(this.stateField);
        if (this.updateTooltipClass(bb.state), Ub != Ab) {
          let {
            options: Mb,
            selected: Tb,
            disabled: Eb
          } = Ub.open;
          Ab.open && Ab.open.options == Mb || (this.range = pb(Mb.length, Tb, bb.state.facet(xb).maxRenderedOptions), this.showOptions(Mb, Ub.id)), this.updateSel(), Eb != (null === (ab = Ab.open) || void 0 === ab ? void 0 : ab.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!Eb)
        }
      }
      updateTooltipClass(bb) {
        let ab = this.tooltipClass(bb);
        if (ab != this.currentClass) {
          for (let bb of this.currentClass.split(" ")) bb && this.dom.classList.remove(bb);
          for (let bb of ab.split(" ")) bb && this.dom.classList.add(bb);
          this.currentClass = ab
        }
      }
      positioned(bb) {
        this.space = bb, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let bb = this.view.state.field(this.stateField),
          ab = bb.open;
        (ab.selected > -1 && ab.selected < this.range.from || ab.selected >= this.range.to) && (this.range = pb(ab.options.length, ab.selected, this.view.state.facet(xb).maxRenderedOptions), this.showOptions(ab.options, bb.id));
        let Ub = this.updateSelectedOption(ab.selected);
        if (Ub) {
          this.destroyInfo();
          let {
            completion: Ab
          } = ab.options[ab.selected], {
            info: Tb
          } = Ab;
          if (!Tb) return;
          let Eb = "string" === typeof Tb ? document.createTextNode(Tb) : Tb(Ab);
          if (!Eb) return;
          "then" in Eb ? Eb.then((ab => {
            ab && this.view.state.field(this.stateField, !1) == bb && this.addInfoPane(ab, Ab)
          })).catch((bb => (0, Mb.T)(this.view.state, bb, "completion info"))) : (this.addInfoPane(Eb, Ab), Ub.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(bb, ab) {
        this.destroyInfo();
        let Ub = this.info = document.createElement("div");
        if (Ub.className = "cm-tooltip cm-completionInfo", Ub.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != bb.nodeType) Ub.appendChild(bb), this.infoDestroy = null;
        else {
          let {
            dom: ab,
            destroy: Ab
          } = bb;
          Ub.appendChild(ab), this.infoDestroy = Ab || null
        }
        this.dom.appendChild(Ub), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(bb) {
        let ab = null;
        for (let Ub = this.list.firstChild, Ab = this.range.from; Ub; Ub = Ub.nextSibling, Ab++) "LI" == Ub.nodeName && Ub.id ? Ab == bb ? Ub.hasAttribute("aria-selected") || (Ub.setAttribute("aria-selected", "true"), ab = Ub) : Ub.hasAttribute("aria-selected") && (Ub.removeAttribute("aria-selected"), Ub.removeAttribute("aria-describedby")) : Ab--;
        return ab && function(bb, ab) {
          let Ub = bb.getBoundingClientRect(),
            Ab = ab.getBoundingClientRect(),
            Mb = Ub.height / bb.offsetHeight;
          Ab.top < Ub.top ? bb.scrollTop -= (Ub.top - Ab.top) / Mb : Ab.bottom > Ub.bottom && (bb.scrollTop += (Ab.bottom - Ub.bottom) / Mb)
        }(this.list, ab), ab
      }
      measureInfo() {
        let bb = this.dom.querySelector("[aria-selected]");
        if (!bb || !this.info) return null;
        let ab = this.dom.getBoundingClientRect(),
          Ub = this.info.getBoundingClientRect(),
          Ab = bb.getBoundingClientRect(),
          Mb = this.space;
        if (!Mb) {
          let bb = this.dom.ownerDocument.documentElement;
          Mb = {
            left: 0,
            top: 0,
            right: bb.clientWidth,
            bottom: bb.clientHeight
          }
        }
        return Ab.top > Math.min(Mb.bottom, ab.bottom) - 10 || Ab.bottom < Math.max(Mb.top, ab.top) + 10 ? null : this.view.state.facet(xb).positionInfo(this.view, ab, Ab, Ub, Mb, this.dom)
      }
      placeInfo(bb) {
        this.info && (bb ? (bb.style && (this.info.style.cssText = bb.style), this.info.className = "cm-tooltip cm-completionInfo " + (bb.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(bb, ab, Ub) {
        const Ab = document.createElement("ul");
        Ab.id = ab, Ab.setAttribute("role", "listbox"), Ab.setAttribute("aria-expanded", "true"), Ab.setAttribute("aria-label", this.view.state.phrase("Completions")), Ab.addEventListener("mousedown", (bb => {
          bb.target == Ab && bb.preventDefault()
        }));
        let Mb = null;
        for (let Tb = Ub.from; Tb < Ub.to; Tb++) {
          let {
            completion: Eb,
            match: Yb
          } = bb[Tb], {
            section: Bb
          } = Eb;
          if (Bb) {
            let bb = "string" == typeof Bb ? Bb : Bb.name;
            if (bb != Mb && (Tb > Ub.from || 0 == Ub.from))
              if (Mb = bb, "string" != typeof Bb && Bb.header) Ab.appendChild(Bb.header(Bb));
              else {
                Ab.appendChild(document.createElement("completion-section")).textContent = bb
              }
          }
          const eb = Ab.appendChild(document.createElement("li"));
          eb.id = ab + "-" + Tb, eb.setAttribute("role", "option");
          let vb = this.optionClass(Eb);
          vb && (eb.className = vb);
          for (let bb of this.optionContent) {
            let ab = bb(Eb, this.view.state, this.view, Yb);
            ab && eb.appendChild(ab)
          }
        }
        return Ub.from && Ab.classList.add("cm-completionListIncompleteTop"), Ub.to < bb.length && Ab.classList.add("cm-completionListIncompleteBottom"), Ab
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function Wb(bb, ab) {
      return Ub => new Nb(Ub, bb, ab)
    }

    function Hb(bb) {
      return 100 * (bb.boost || 0) + (bb.apply ? 10 : 0) + (bb.info ? 5 : 0) + (bb.type ? 1 : 0)
    }
    class Ib {
      constructor(bb, ab, Ub, Ab, Mb, Tb) {
        this.options = bb, this.attrs = ab, this.tooltip = Ub, this.timestamp = Ab, this.selected = Mb, this.disabled = Tb
      }
      setSelected(bb, ab) {
        return bb == this.selected || bb >= this.options.length ? this : new Ib(this.options, Gb(ab, bb), this.tooltip, this.timestamp, bb, this.disabled)
      }
      static build(bb, ab, Ub, Ab, Mb, Tb) {
        if (Ab && !Tb && bb.some((bb => bb.isPending))) return Ab.setDisabled();
        let Eb = function(bb, ab) {
          let Ub = [],
            Ab = null,
            Mb = null,
            Tb = bb => {
              Ub.push(bb);
              let {
                section: ab
              } = bb.completion;
              if (ab) {
                Ab || (Ab = []);
                let bb = "string" == typeof ab ? ab : ab.name;
                Ab.some((ab => ab.name == bb)) || Ab.push("string" == typeof ab ? {
                  name: bb
                } : ab)
              }
            },
            Eb = ab.facet(xb);
          for (let Lb of bb)
            if (Lb.hasResult()) {
              let bb = Lb.result.getMatch;
              if (!1 === Lb.result.filter)
                for (let ab of Lb.result.options) Tb(new vb(ab, Lb.source, bb ? bb(ab) : [], 1e9 - Ub.length));
              else {
                let Ub, Ab = ab.sliceDoc(Lb.from, Lb.to),
                  Yb = Eb.filterStrict ? new zb(Ab) : new Db(Ab);
                for (let ab of Lb.result.options)
                  if (Ub = Yb.match(ab.label)) {
                    let Ab = ab.displayLabel ? bb ? bb(ab, Ub.matched) : [] : Ub.matched,
                      Eb = Ub.score + (ab.boost || 0);
                    if (Tb(new vb(ab, Lb.source, Ab, Eb)), "object" == typeof ab.section && "dynamic" === ab.section.rank) {
                      let {
                        name: bb
                      } = ab.section;
                      Mb || (Mb = Object.create(null)), Mb[bb] = Math.max(Eb, Mb[bb] || -1e9)
                    }
                  }
              }
            } if (Ab) {
            let bb = Object.create(null),
              ab = 0,
              Tb = (bb, ab) => ("dynamic" === bb.rank && "dynamic" === ab.rank ? Mb[ab.name] - Mb[bb.name] : 0) || ("number" == typeof bb.rank ? bb.rank : 1e9) - ("number" == typeof ab.rank ? ab.rank : 1e9) || (bb.name < ab.name ? -1 : 1);
            for (let Ub of Ab.sort(Tb)) ab -= 1e5, bb[Ub.name] = ab;
            for (let Ab of Ub) {
              let {
                section: ab
              } = Ab.completion;
              ab && (Ab.score += bb["string" == typeof ab ? ab : ab.name])
            }
          }
          let Yb = [],
            Bb = null,
            eb = Eb.compareCompletions;
          for (let vb of Ub.sort(((bb, ab) => ab.score - bb.score || eb(bb.completion, ab.completion)))) {
            let bb = vb.completion;
            !Bb || Bb.label != bb.label || Bb.detail != bb.detail || null != Bb.type && null != bb.type && Bb.type != bb.type || Bb.apply != bb.apply || Bb.boost != bb.boost ? Yb.push(vb) : Hb(vb.completion) > Hb(Bb) && (Yb[Yb.length - 1] = vb), Bb = vb.completion
          }
          return Yb
        }(bb, ab);
        if (!Eb.length) return Ab && bb.some((bb => bb.isPending)) ? Ab.setDisabled() : null;
        let Yb = ab.facet(xb).selectOnOpen ? 0 : -1;
        if (Ab && Ab.selected != Yb && -1 != Ab.selected) {
          let bb = Ab.options[Ab.selected].completion;
          for (let ab = 0; ab < Eb.length; ab++)
            if (Eb[ab].completion == bb) {
              Yb = ab;
              break
            }
        }
        return new Ib(Eb, Gb(Ub, Yb), {
          pos: bb.reduce(((bb, ab) => ab.hasResult() ? Math.min(bb, ab.from) : bb), 1e8),
          create: tb,
          above: Mb.aboveCursor
        }, Ab ? Ab.timestamp : Date.now(), Yb, !1)
      }
      map(bb) {
        return new Ib(this.options, this.attrs, {
          ...this.tooltip,
          pos: bb.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new Ib(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class db {
      constructor(bb, ab, Ub) {
        this.active = bb, this.id = ab, this.open = Ub
      }
      static start() {
        return new db(Qb, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(bb) {
        let {
          state: ab
        } = bb, Ub = ab.facet(xb), Ab = (Ub.override || ab.languageDataAt("autocomplete", Lb(ab)).map(kb)).map((ab => (this.active.find((bb => bb.source == ab)) || new ub(ab, this.active.some((bb => 0 != bb.state)) ? 1 : 0)).update(bb, Ub)));
        Ab.length == this.active.length && Ab.every(((bb, ab) => bb == this.active[ab])) && (Ab = this.active);
        let Mb = this.open,
          Tb = bb.effects.some((bb => bb.is(Kb)));
        Mb && bb.docChanged && (Mb = Mb.map(bb.changes)), bb.selection || Ab.some((ab => ab.hasResult() && bb.changes.touchesRange(ab.from, ab.to))) || ! function(bb, ab) {
          if (bb == ab) return !0;
          for (let Ub = 0, Ab = 0;;) {
            for (; Ub < bb.length && !bb[Ub].hasResult();) Ub++;
            for (; Ab < ab.length && !ab[Ab].hasResult();) Ab++;
            let Mb = Ub == bb.length,
              Tb = Ab == ab.length;
            if (Mb || Tb) return Mb == Tb;
            if (bb[Ub++].result != ab[Ab++].result) return !1
          }
        }(Ab, this.active) || Tb ? Mb = Ib.build(Ab, ab, this.id, Mb, Ub, Tb) : Mb && Mb.disabled && !Ab.some((bb => bb.isPending)) && (Mb = null), !Mb && Ab.every((bb => !bb.isPending)) && Ab.some((bb => bb.hasResult())) && (Ab = Ab.map((bb => bb.hasResult() ? new ub(bb.source, 0) : bb)));
        for (let Eb of bb.effects) Eb.is(mb) && (Mb = Mb && Mb.setSelected(Eb.value, this.id));
        return Ab == this.active && Mb == this.open ? this : new db(Ab, this.id, Mb)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? Fb : hb
      }
    }
    const Fb = {
        "aria-autocomplete": "list"
      },
      hb = {};

    function Gb(bb, ab) {
      let Ub = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": bb
      };
      return ab > -1 && (Ub["aria-activedescendant"] = bb + "-" + ab), Ub
    }
    const Qb = [];

    function qb(bb, ab) {
      if (bb.isUserEvent("input.complete")) {
        let Ub = bb.annotation(Xb);
        if (Ub && ab.activateOnCompletion(Ub)) return 12
      }
      let Ub = bb.isUserEvent("input.type");
      return Ub && ab.activateOnTyping ? 5 : Ub ? 1 : bb.isUserEvent("delete.backward") ? 2 : bb.selection ? 8 : bb.docChanged ? 16 : 0
    }
    class ub {
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = bb, this.state = ab, this.explicit = Ub
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(bb, ab) {
        let Ub = qb(bb, ab),
          Ab = this;
        (8 & Ub || 16 & Ub && this.touches(bb)) && (Ab = new ub(Ab.source, 0)), 4 & Ub && 0 == Ab.state && (Ab = new ub(this.source, 1)), Ab = Ab.updateFor(bb, Ub);
        for (let Mb of bb.effects)
          if (Mb.is(yb)) Ab = new ub(Ab.source, 1, Mb.value);
          else if (Mb.is(Zb)) Ab = new ub(Ab.source, 0);
        else if (Mb.is(Kb))
          for (let bb of Mb.value) bb.source == Ab.source && (Ab = bb);
        return Ab
      }
      updateFor(bb, ab) {
        return this.map(bb.changes)
      }
      map(bb) {
        return this
      }
      touches(bb) {
        return bb.changes.touchesRange(Lb(bb.state))
      }
    }
    class rb extends ub {
      constructor(bb, ab, Ub, Ab, Mb, Tb) {
        super(bb, 3, ab), this.limit = Ub, this.result = Ab, this.from = Mb, this.to = Tb
      }
      hasResult() {
        return !0
      }
      updateFor(bb, ab) {
        var Ub;
        if (!(3 & ab)) return this.map(bb.changes);
        let Ab = this.result;
        Ab.map && !bb.changes.empty && (Ab = Ab.map(Ab, bb.changes));
        let Mb = bb.changes.mapPos(this.from),
          Tb = bb.changes.mapPos(this.to, 1),
          Yb = Lb(bb.state);
        if (Yb > Tb || !Ab || 2 & ab && (Lb(bb.startState) == this.from || Yb < this.limit)) return new ub(this.source, 4 & ab ? 1 : 0);
        let Bb = bb.changes.mapPos(this.limit);
        return function(bb, ab, Ub, Ab) {
          if (!bb) return !1;
          let Mb = ab.sliceDoc(Ub, Ab);
          return "function" == typeof bb ? bb(Mb, Ub, Ab, ab) : Pb(bb, !0).test(Mb)
        }(Ab.validFor, bb.state, Mb, Tb) ? new rb(this.source, this.explicit, Bb, Ab, Mb, Tb) : Ab.update && (Ab = Ab.update(Ab, Mb, Tb, new Eb(bb.state, Yb, !1))) ? new rb(this.source, this.explicit, Bb, Ab, Ab.from, null !== (Ub = Ab.to) && void 0 !== Ub ? Ub : Lb(bb.state)) : new ub(this.source, 1, this.explicit)
      }
      map(bb) {
        if (bb.empty) return this;
        return (this.result.map ? this.result.map(this.result, bb) : this.result) ? new rb(this.source, this.explicit, bb.mapPos(this.limit), this.result, bb.mapPos(this.from), bb.mapPos(this.to, 1)) : new ub(this.source, 0)
      }
      touches(bb) {
        return bb.changes.touchesRange(this.from, this.to)
      }
    }
    const Kb = Ab.B.define({
        map: (bb, ab) => bb.map((bb => bb.map(ab)))
      }),
      ob = Ab.E.define({
        create: () => db.start(),
        update: (bb, ab) => bb.update(ab),
        provide: bb => [Mb.ab.from(bb, (bb => bb.tooltip)), Mb.i.contentAttributes.from(bb, (bb => bb.attrs))]
      });

    function lb(bb, ab) {
      const Ub = ab.completion.apply || ab.completion.label;
      let Ab = bb.state.field(ob).active.find((bb => bb.source == ab.source));
      return Ab instanceof rb && ("string" == typeof Ub ? bb.dispatch({
        ...jb(bb.state, Ub, Ab.from, Ab.to),
        annotations: Xb.of(ab.completion)
      }) : Ub(bb, ab.completion, Ab.from, Ab.to), !0)
    }
    const tb = Wb(ob, lb);

    function wb(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return Ub => {
        let Ab = Ub.state.field(ob, !1);
        if (!Ab || !Ab.open || Ab.open.disabled || Date.now() - Ab.open.timestamp < Ub.state.facet(xb).interactionDelay) return !1;
        let Tb, Eb = 1;
        "page" == ab && (Tb = (0, Mb.z)(Ub, Ab.open.tooltip)) && (Eb = Math.max(2, Math.floor(Tb.dom.offsetHeight / Tb.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: Yb
        } = Ab.open.options, Bb = Ab.open.selected > -1 ? Ab.open.selected + Eb * (bb ? 1 : -1) : bb ? 0 : Yb - 1;
        return Bb < 0 ? Bb = "page" == ab ? 0 : Yb - 1 : Bb >= Yb && (Bb = "page" == ab ? Yb - 1 : 0), Ub.dispatch({
          effects: mb.of(Bb)
        }), !0
      }
    }
    const sb = bb => !!bb.state.field(ob, !1) && (bb.dispatch({
      effects: yb.of(!0)
    }), !0);
    class gb {
      constructor(bb, ab) {
        this.active = bb, this.context = ab, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const Cb = Mb.k.fromClass(class {
        constructor(bb) {
          this.view = bb, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let ab of bb.state.field(ob).active) ab.isPending && this.startQuery(ab)
        }
        update(bb) {
          let ab = bb.state.field(ob),
            Ub = bb.state.facet(xb);
          if (!bb.selectionSet && !bb.docChanged && bb.startState.field(ob) == ab) return;
          let Ab = bb.transactions.some((bb => {
            let ab = qb(bb, Ub);
            return 8 & ab || (bb.selection || bb.docChanged) && !(3 & ab)
          }));
          for (let Yb = 0; Yb < this.running.length; Yb++) {
            let ab = this.running[Yb];
            if (Ab || ab.context.abortOnDocChange && bb.docChanged || ab.updates.length + bb.transactions.length > 50 && Date.now() - ab.time > 1e3) {
              for (let bb of ab.context.abortListeners) try {
                bb()
              } catch (Eb) {
                (0, Mb.T)(this.view.state, Eb)
              }
              ab.context.abortListeners = null, this.running.splice(Yb--, 1)
            } else ab.updates.push(...bb.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), bb.transactions.some((bb => bb.effects.some((bb => bb.is(yb))))) && (this.pendingStart = !0);
          let Tb = this.pendingStart ? 50 : Ub.activateOnTypingDelay;
          if (this.debounceUpdate = ab.active.some((bb => bb.isPending && !this.running.some((ab => ab.active.source == bb.source)))) ? setTimeout((() => this.startUpdate()), Tb) : -1, 0 != this.composing)
            for (let Mb of bb.transactions) Mb.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && Mb.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: bb
          } = this.view, ab = bb.field(ob);
          for (let Ub of ab.active) Ub.isPending && !this.running.some((bb => bb.active.source == Ub.source)) && this.startQuery(Ub);
          this.running.length && ab.open && ab.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(xb).updateSyncTime))
        }
        startQuery(bb) {
          let {
            state: ab
          } = this.view, Ub = Lb(ab), Ab = new Eb(ab, Ub, bb.explicit, this.view), Tb = new gb(bb, Ab);
          this.running.push(Tb), Promise.resolve(bb.source(Ab)).then((bb => {
            Tb.context.aborted || (Tb.done = bb || null, this.scheduleAccept())
          }), (bb => {
            this.view.dispatch({
              effects: Zb.of(null)
            }), (0, Mb.T)(this.view.state, bb)
          }))
        }
        scheduleAccept() {
          this.running.every((bb => void 0 !== bb.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(xb).updateSyncTime))
        }
        accept() {
          var bb;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let ab = [],
            Ub = this.view.state.facet(xb),
            Ab = this.view.state.field(ob);
          for (let Mb = 0; Mb < this.running.length; Mb++) {
            let Tb = this.running[Mb];
            if (void 0 === Tb.done) continue;
            if (this.running.splice(Mb--, 1), Tb.done) {
              let Ab = Lb(Tb.updates.length ? Tb.updates[0].startState : this.view.state),
                Mb = Math.min(Ab, Tb.done.from + (Tb.active.explicit ? 0 : 1)),
                Eb = new rb(Tb.active.source, Tb.active.explicit, Mb, Tb.done, Tb.done.from, null !== (bb = Tb.done.to) && void 0 !== bb ? bb : Ab);
              for (let bb of Tb.updates) Eb = Eb.update(bb, Ub);
              if (Eb.hasResult()) {
                ab.push(Eb);
                continue
              }
            }
            let Eb = Ab.active.find((bb => bb.source == Tb.active.source));
            if (Eb && Eb.isPending)
              if (null == Tb.done) {
                let bb = new ub(Tb.active.source, 0);
                for (let ab of Tb.updates) bb = bb.update(ab, Ub);
                bb.isPending || ab.push(bb)
              } else this.startQuery(Eb)
          }(ab.length || Ab.open && Ab.open.disabled) && this.view.dispatch({
            effects: Kb.of(ab)
          })
        }
      }, {
        eventHandlers: {
          blur(bb) {
            let ab = this.view.state.field(ob, !1);
            if (ab && ab.tooltip && this.view.state.facet(xb).closeOnBlur) {
              let Ub = ab.open && (0, Mb.z)(this.view, ab.open.tooltip);
              Ub && Ub.dom.contains(bb.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: Zb.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: yb.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      Vb = "object" == typeof navigator && /Win/.test(navigator.platform),
      Ob = Ab.u.highest(Mb.i.domEventHandlers({
        keydown(bb, ab) {
          let Ub = ab.state.field(ob, !1);
          if (!Ub || !Ub.open || Ub.open.disabled || Ub.open.selected < 0 || bb.key.length > 1 || bb.ctrlKey && (!Vb || !bb.altKey) || bb.metaKey) return !1;
          let Ab = Ub.open.options[Ub.open.selected],
            Mb = Ub.active.find((bb => bb.source == Ab.source)),
            Tb = Ab.completion.commitCharacters || Mb.result.commitCharacters;
          return Tb && Tb.indexOf(bb.key) > -1 && lb(ab, Ab), !1
        }
      })),
      cb = Mb.i.baseTheme({
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
    class Jb {
      constructor(bb, ab, Ub, Ab) {
        this.field = bb, this.line = ab, this.from = Ub, this.to = Ab
      }
    }
    class nb {
      constructor(bb, ab, Ub) {
        this.field = bb, this.from = ab, this.to = Ub
      }
      map(bb) {
        let ab = bb.mapPos(this.from, -1, Ab.t.TrackDel),
          Ub = bb.mapPos(this.to, 1, Ab.t.TrackDel);
        return null == ab || null == Ub ? null : new nb(this.field, ab, Ub)
      }
    }
    class Sb {
      constructor(bb, ab) {
        this.lines = bb, this.fieldPositions = ab
      }
      instantiate(bb, ab) {
        let Ub = [],
          Ab = [ab],
          Mb = bb.doc.lineAt(ab),
          Eb = /^\s*/.exec(Mb.text)[0];
        for (let Bb of this.lines) {
          if (Ub.length) {
            let Ub = Eb,
              Mb = /^\t*/.exec(Bb)[0].length;
            for (let ab = 0; ab < Mb; ab++) Ub += bb.facet(Tb.ib);
            Ab.push(ab + Ub.length - Mb), Bb = Ub + Bb.slice(Mb)
          }
          Ub.push(Bb), ab += Bb.length + 1
        }
        let Yb = this.fieldPositions.map((bb => new nb(bb.field, Ab[bb.line] + bb.from, Ab[bb.line] + bb.to)));
        return {
          text: Ub,
          cj: Yb
        }
      }
      static parse(bb) {
        let ab, Ub = [],
          Ab = [],
          Mb = [];
        for (let Tb of bb.split(/\r\n?|\n/)) {
          for (; ab = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(Tb);) {
            let bb = ab[1] ? +ab[1] : null,
              Eb = ab[2] || ab[3] || "",
              Yb = -1,
              Bb = Eb.replace(/\\[{}]/g, (bb => bb[1]));
            for (let ab = 0; ab < Ub.length; ab++)(null != bb ? Ub[ab].seq == bb : Bb && Ub[ab].name == Bb) && (Yb = ab);
            if (Yb < 0) {
              let ab = 0;
              for (; ab < Ub.length && (null == bb || null != Ub[ab].seq && Ub[ab].seq < bb);) ab++;
              Ub.splice(ab, 0, {
                seq: bb,
                name: Bb
              }), Yb = ab;
              for (let bb of Mb) bb.field >= Yb && bb.field++
            }
            for (let Ub of Mb)
              if (Ub.line == Ab.length && Ub.from > ab.index) {
                let bb = ab[2] ? 3 + (ab[1] || "").length : 2;
                Ub.from -= bb, Ub.to -= bb
              } Mb.push(new Jb(Yb, Ab.length, ab.index, ab.index + Bb.length)), Tb = Tb.slice(0, ab.index) + Eb + Tb.slice(ab.index + ab[0].length)
          }
          Tb = Tb.replace(/\\([{}])/g, ((bb, ab, Ub) => {
            for (let Tb of Mb) Tb.line == Ab.length && Tb.from > Ub && (Tb.from--, Tb.to--);
            return ab
          })), Ab.push(Tb)
        }
        return new Sb(Ab, Mb)
      }
    }
    let ba = Mb.d.widget({
        widget: new class extends Mb.m {
          toDOM() {
            let bb = document.createElement("span");
            return bb.className = "cm-snippetFieldPosition", bb
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      aa = Mb.d.mark({
        class: "cm-snippetField"
      });
    class Ua {
      constructor(bb, ab) {
        this.cj = bb, this.active = ab, this.deco = Mb.d.set(bb.map((bb => (bb.from == bb.to ? ba : aa).range(bb.from, bb.to))), !0)
      }
      map(bb) {
        let ab = [];
        for (let Ub of this.cj) {
          let Ab = Ub.map(bb);
          if (!Ab) return null;
          ab.push(Ab)
        }
        return new Ua(ab, this.active)
      }
      selectionInsideField(bb) {
        return bb.cj.every((bb => this.cj.some((ab => ab.field == this.active && ab.from <= bb.from && ab.to >= bb.to))))
      }
    }
    const Aa = Ab.B.define({
        map: (bb, ab) => bb && bb.map(ab)
      }),
      Ma = Ab.B.define(),
      Ta = Ab.E.define({
        create: () => null,
        update(bb, ab) {
          for (let Ub of ab.effects) {
            if (Ub.is(Aa)) return Ub.value;
            if (Ub.is(Ma) && bb) return new Ua(bb.cj, Ub.value)
          }
          return bb && ab.docChanged && (bb = bb.map(ab.changes)), bb && ab.selection && !bb.selectionInsideField(ab.selection) && (bb = null), bb
        },
        provide: bb => Mb.i.hA.from(bb, (bb => bb ? bb.deco : Mb.d.none))
      });

    function Ea(bb, ab) {
      return Ab.m.create(bb.filter((bb => bb.field == ab)).map((bb => Ab.m.range(bb.from, bb.to))))
    }

    function Ya(bb) {
      let ab = Sb.parse(bb);
      return (bb, Ub, Mb, Tb) => {
        let {
          text: Eb,
          cj: Yb
        } = ab.instantiate(bb.state, Mb), {
          main: Bb
        } = bb.state.selection, eb = {
          changes: {
            from: Mb,
            to: Tb == Bb.from ? Bb.to : Tb,
            insert: Ab.G.of(Eb)
          },
          scrollIntoView: !0,
          annotations: Ub ? [Xb.of(Ub), Ab.I.userEvent.of("input.complete")] : void 0
        };
        if (Yb.length && (eb.selection = Ea(Yb, 0)), Yb.some((bb => bb.field > 0))) {
          let ab = new Ua(Yb, 0),
            Ub = eb.effects = [Aa.of(ab)];
          void 0 === bb.state.field(Ta, !1) && Ub.push(Ab.B.appendConfig.of([Ta, La, Xa, cb]))
        }
        bb.dispatch(bb.state.update(eb))
      }
    }

    function Ba(bb) {
      return ab => {
        let {
          state: Ub,
          dispatch: Ab
        } = ab, Mb = Ub.field(Ta, !1);
        if (!Mb || bb < 0 && 0 == Mb.active) return !1;
        let Tb = Mb.active + bb,
          Eb = bb > 0 && !Mb.cj.some((ab => ab.field == Tb + bb));
        return Ab(Ub.update({
          selection: Ea(Mb.cj, Tb),
          effects: Aa.of(Eb ? null : new Ua(Mb.cj, Tb)),
          scrollIntoView: !0
        })), !0
      }
    }
    const ea = [{
        key: "Tab",
        run: Ba(1),
        shift: Ba(-1)
      }, {
        key: "Escape",
        run: bb => {
          let {
            state: ab,
            dispatch: Ub
          } = bb;
          return !!ab.field(Ta, !1) && (Ub(ab.update({
            effects: Aa.of(null)
          })), !0)
        }
      }],
      va = Ab.q.define({
        combine: bb => bb.length ? bb[0] : ea
      }),
      La = Ab.u.highest(Mb.N.compute([va], (bb => bb.facet(va))));

    function Pa(bb, ab) {
      return {
        ...ab,
        apply: Ya(bb)
      }
    }
    const Xa = Mb.i.domEventHandlers({
      mousedown(bb, ab) {
        let Ub, Ab = ab.state.field(Ta, !1);
        if (!Ab || null == (Ub = ab.posAtCoords({
            x: bb.clientX,
            y: bb.clientY
          }))) return !1;
        let Mb = Ab.cj.find((bb => bb.from <= Ub && bb.to >= Ub));
        return !(!Mb || Mb.field == Ab.active) && (ab.dispatch({
          selection: Ea(Ab.cj, Mb.field),
          effects: Aa.of(Ab.cj.some((bb => bb.field > Mb.field)) ? new Ua(Ab.cj, Mb.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const ja = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      Ra = Ab.B.define({
        map(bb, ab) {
          let Ub = ab.mapPos(bb, -1, Ab.t.TrackAfter);
          return null == Ub ? void 0 : Ub
        }
      }),
      ka = new class extends Ab.z {};
    ka.startSide = 1, ka.endSide = -1;
    const ya = Ab.E.define({
      create: () => Ab.y.empty,
      update(bb, ab) {
        if (bb = bb.map(ab.changes), ab.selection) {
          let Ub = ab.state.doc.lineAt(ab.selection.main.head);
          bb = bb.update({
            filter: bb => bb >= Ub.from && bb <= Ub.to
          })
        }
        for (let Ub of ab.effects) Ub.is(Ra) && (bb = bb.update({
          add: [ka.range(Ub.value, Ub.value + 1)]
        }));
        return bb
      }
    });

    function Za() {
      return [fa, ya]
    }
    const Da = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function za(bb) {
      for (let ab = 0; ab < 16; ab += 2)
        if (Da.charCodeAt(ab) == bb) return Da.charAt(ab + 1);
      return (0, Ab.$)(bb < 128 ? bb : bb + 1)
    }

    function xa(bb, ab) {
      return bb.languageDataAt("closeBrackets", ab)[0] || ja
    }
    const ia = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      fa = Mb.i.inputHandler.of(((bb, ab, Ub, Mb) => {
        if ((ia ? bb.composing : bb.compositionStarted) || bb.state.readOnly) return !1;
        let Tb = bb.state.selection.main;
        if (Mb.length > 2 || 2 == Mb.length && 1 == (0, Ab.K)((0, Ab.J)(Mb, 0)) || ab != Tb.from || Ub != Tb.to) return !1;
        let Eb = function(bb, ab) {
          let Ub = xa(bb, bb.selection.main.head),
            Mb = Ub.brackets || ja.brackets;
          for (let Tb of Mb) {
            let Eb = za((0, Ab.J)(Tb, 0));
            if (ab == Tb) return Eb == Tb ? Ia(bb, Tb, Mb.indexOf(Tb + Tb + Tb) > -1, Ub) : Wa(bb, Tb, Eb, Ub.before || ja.before);
            if (ab == Eb && pa(bb, bb.selection.main.from)) return Ha(bb, Tb, Eb)
          }
          return null
        }(bb.state, Mb);
        return !!Eb && (bb.dispatch(Eb), !0)
      })),
      ma = [{
        key: "Backspace",
        run: bb => {
          let {
            state: ab,
            dispatch: Ub
          } = bb;
          if (ab.readOnly) return !1;
          let Mb = xa(ab, ab.selection.main.head).brackets || ja.brackets,
            Tb = null,
            Eb = ab.changeByRange((bb => {
              if (bb.empty) {
                let Ub = function(bb, ab) {
                  let Ub = bb.sliceString(ab - 2, ab);
                  return (0, Ab.K)((0, Ab.J)(Ub, 0)) == Ub.length ? Ub : Ub.slice(1)
                }(ab.doc, bb.head);
                for (let Tb of Mb)
                  if (Tb == Ub && Na(ab.doc, bb.head) == za((0, Ab.J)(Tb, 0))) return {
                    changes: {
                      from: bb.head - Tb.length,
                      to: bb.head + Tb.length
                    },
                    range: Ab.m.cursor(bb.head - Tb.length)
                  }
              }
              return {
                range: Tb = bb
              }
            }));
          return Tb || Ub(ab.update(Eb, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !Tb
        }
      }];

    function pa(bb, ab) {
      let Ub = !1;
      return bb.field(ya).between(0, bb.doc.length, (bb => {
        bb == ab && (Ub = !0)
      })), Ub
    }

    function Na(bb, ab) {
      let Ub = bb.sliceString(ab, ab + 2);
      return Ub.slice(0, (0, Ab.K)((0, Ab.J)(Ub, 0)))
    }

    function Wa(bb, ab, Ub, Mb) {
      let Tb = null,
        Eb = bb.changeByRange((Eb => {
          if (!Eb.empty) return {
            changes: [{
              insert: ab,
              from: Eb.from
            }, {
              insert: Ub,
              from: Eb.to
            }],
            effects: Ra.of(Eb.to + ab.length),
            range: Ab.m.range(Eb.anchor + ab.length, Eb.head + ab.length)
          };
          let Yb = Na(bb.doc, Eb.head);
          return !Yb || /\s/.test(Yb) || Mb.indexOf(Yb) > -1 ? {
            changes: {
              insert: ab + Ub,
              from: Eb.head
            },
            effects: Ra.of(Eb.head + ab.length),
            range: Ab.m.cursor(Eb.head + ab.length)
          } : {
            range: Tb = Eb
          }
        }));
      return Tb ? null : bb.update(Eb, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Ha(bb, ab, Ub) {
      let Mb = null,
        Tb = bb.changeByRange((ab => ab.empty && Na(bb.doc, ab.head) == Ub ? {
          changes: {
            from: ab.head,
            to: ab.head + Ub.length,
            insert: Ub
          },
          range: Ab.m.cursor(ab.head + Ub.length)
        } : Mb = {
          range: ab
        }));
      return Mb ? null : bb.update(Tb, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Ia(bb, ab, Ub, Mb) {
      let Eb = Mb.stringPrefixes || ja.stringPrefixes,
        Yb = null,
        Bb = bb.changeByRange((Mb => {
          if (!Mb.empty) return {
            changes: [{
              insert: ab,
              from: Mb.from
            }, {
              insert: ab,
              from: Mb.to
            }],
            effects: Ra.of(Mb.to + ab.length),
            range: Ab.m.range(Mb.anchor + ab.length, Mb.head + ab.length)
          };
          let Bb, eb = Mb.head,
            vb = Na(bb.doc, eb);
          if (vb == ab) {
            if (da(bb, eb)) return {
              changes: {
                insert: ab + ab,
                from: eb
              },
              effects: Ra.of(eb + ab.length),
              range: Ab.m.cursor(eb + ab.length)
            };
            if (pa(bb, eb)) {
              let Mb = Ub && bb.sliceDoc(eb, eb + 3 * ab.length) == ab + ab + ab ? ab + ab + ab : ab;
              return {
                changes: {
                  from: eb,
                  to: eb + Mb.length,
                  insert: Mb
                },
                range: Ab.m.cursor(eb + Mb.length)
              }
            }
          } else {
            if (Ub && bb.sliceDoc(eb - 2 * ab.length, eb) == ab + ab && (Bb = Fa(bb, eb - 2 * ab.length, Eb)) > -1 && da(bb, Bb)) return {
              changes: {
                insert: ab + ab + ab + ab,
                from: eb
              },
              effects: Ra.of(eb + ab.length),
              range: Ab.m.cursor(eb + ab.length)
            };
            if (bb.charCategorizer(eb)(vb) != Ab.i.Word && Fa(bb, eb, Eb) > -1 && ! function(bb, ab, Ub, Ab) {
                let Mb = (0, Tb.wb)(bb).resolveInner(ab, -1),
                  Eb = Ab.reduce(((bb, ab) => Math.max(bb, ab.length)), 0);
                for (let Tb = 0; Tb < 5; Tb++) {
                  let Tb = bb.sliceDoc(Mb.from, Math.min(Mb.to, Mb.from + Ub.length + Eb)),
                    Yb = Tb.indexOf(Ub);
                  if (!Yb || Yb > -1 && Ab.indexOf(Tb.slice(0, Yb)) > -1) {
                    let ab = Mb.firstChild;
                    for (; ab && ab.from == Mb.from && ab.to - ab.from > Ub.length + Yb;) {
                      if (bb.sliceDoc(ab.to - Ub.length, ab.to) == Ub) return !1;
                      ab = ab.firstChild
                    }
                    return !0
                  }
                  let Bb = Mb.to == ab && Mb.parent;
                  if (!Bb) break;
                  Mb = Bb
                }
                return !1
              }(bb, eb, ab, Eb)) return {
              changes: {
                insert: ab + ab,
                from: eb
              },
              effects: Ra.of(eb + ab.length),
              range: Ab.m.cursor(eb + ab.length)
            }
          }
          return {
            range: Yb = Mb
          }
        }));
      return Yb ? null : bb.update(Bb, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function da(bb, ab) {
      let Ub = (0, Tb.wb)(bb).resolveInner(ab + 1);
      return Ub.parent && Ub.from == ab
    }

    function Fa(bb, ab, Ub) {
      let Mb = bb.charCategorizer(ab);
      if (Mb(bb.sliceDoc(ab - 1, ab)) != Ab.i.Word) return ab;
      for (let Tb of Ub) {
        let Ub = ab - Tb.length;
        if (bb.sliceDoc(Ub, ab) == Tb && Mb(bb.sliceDoc(Ub - 1, Ub)) != Ab.i.Word) return Ub
      }
      return -1
    }

    function ha() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Ob, ob, xb.of(bb), Cb, Qa, cb]
    }
    const Ga = [{
        key: "Ctrl-Space",
        run: sb
      }, {
        mac: "Alt-`",
        run: sb
      }, {
        mac: "Alt-i",
        run: sb
      }, {
        key: "Escape",
        run: bb => {
          let ab = bb.state.field(ob, !1);
          return !(!ab || !ab.active.some((bb => 0 != bb.state))) && (bb.dispatch({
            effects: Zb.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: wb(!0)
      }, {
        key: "ArrowUp",
        run: wb(!1)
      }, {
        key: "PageDown",
        run: wb(!0, "page")
      }, {
        key: "PageUp",
        run: wb(!1, "page")
      }, {
        key: "Enter",
        run: bb => {
          let ab = bb.state.field(ob, !1);
          return !(bb.state.readOnly || !ab || !ab.open || ab.open.selected < 0 || ab.open.disabled || Date.now() - ab.open.timestamp < bb.state.facet(xb).interactionDelay) && lb(bb, ab.open.options[ab.open.selected])
        }
      }],
      Qa = Ab.u.highest(Mb.N.computeN([xb], (bb => bb.facet(xb).defaultKeymap ? [Ga] : [])))
  },
  40579: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => eb,
      h: () => Pb,
      l: () => vb,
      n: () => Lb
    });
    var Ab = Ub(40415);
    class Mb {
      constructor(bb, ab, Ub, Ab) {
        this.origin = bb, this.changes = ab, this.effects = Ub, this.clientID = Ab
      }
    }
    class Tb {
      constructor(bb, ab) {
        this.version = bb, this.unconfirmed = ab
      }
    }
    const Eb = Ab.q.define({
        combine(bb) {
          let ab = (0, Ab.O)(bb, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: bb => bb
          });
          return null == ab.clientID && (ab.clientID = bb.length && bb[0].generatedID || ""), ab
        }
      }),
      Yb = Ab.d.define(),
      Bb = Ab.E.define({
        create: bb => new Tb(bb.facet(Eb).startVersion, []),
        update(bb, ab) {
          let Ub = ab.annotation(Yb);
          if (Ub) return Ub;
          let {
            sharedEffects: Ab,
            clientID: Bb
          } = ab.startState.facet(Eb), eb = Ab(ab);
          return eb.length || !ab.changes.empty ? new Tb(bb.version, bb.unconfirmed.concat(new Mb(ab, ab.changes, eb, Bb))) : bb
        }
      });

    function eb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Bb, Eb.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, bb))]
    }

    function vb(bb, ab) {
      let {
        version: Ub,
        unconfirmed: eb
      } = bb.field(Bb), {
        clientID: vb
      } = bb.facet(Eb);
      Ub += ab.length;
      let Lb = [],
        Pb = null,
        Xb = 0;
      for (let Mb of ab) {
        let bb = Xb < eb.length ? eb[Xb] : null;
        bb && bb.clientID == Mb.clientID ? (Pb && (Pb = Pb.map(bb.changes, !0)), Lb = Ab.B.mapEffects(Lb, Mb.changes), Xb++) : (Lb = Ab.B.mapEffects(Lb, Mb.changes), Mb.effects && (Lb = Lb.concat(Mb.effects)), Pb = Pb ? Pb.compose(Mb.changes) : Mb.changes)
      }
      if (Xb && (eb = eb.slice(Xb)), eb.length && (Pb && (eb = eb.map((bb => {
          let ab = bb.changes.map(Pb);
          return Pb = Pb.map(bb.changes, !0), new Mb(bb.origin, ab, Ab.B.mapEffects(bb.effects, Pb), vb)
        }))), Lb.length)) {
        let bb = eb.reduce(((bb, ab) => bb.compose(ab.changes)), Ab.ChangeSet.empty(eb[0].changes.length));
        Lb = Ab.B.mapEffects(Lb, bb)
      }
      return Pb ? bb.update({
        changes: Pb,
        effects: Lb,
        annotations: [Ab.I.addToHistory.of(!1), Ab.I.remote.of(!0), Yb.of(new Tb(Ub, eb))],
        filter: !1
      }) : bb.update({
        annotations: [Yb.of(new Tb(Ub, eb))]
      })
    }

    function Lb(bb) {
      return bb.field(Bb).unconfirmed
    }

    function Pb(bb) {
      return bb.field(Bb).version
    }
  },
  40446: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ra
    });
    var Ab = Ub(40440);
    class Mb {
      constructor(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb) {
        let eb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          vb = arguments.length > 10 ? arguments[10] : void 0;
        this.p = bb, this.stack = ab, this.state = Ub, this.reducePos = Ab, this.pos = Mb, this.score = Tb, this.buffer = Eb, this.bufferBase = Yb, this.curContext = Bb, this.lookAhead = eb, this.parent = vb
      }
      toString() {
        return `[${this.stack.filter(((bb,ab)=>ab%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ab = bb.parser.context;
        return new Mb(bb, [], ab, Ub, Ub, 0, [], 0, Ab ? new Tb(Ab, Ab.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(bb, ab) {
        this.stack.push(this.state, ab, this.bufferBase + this.buffer.length), this.state = bb
      }
      reduce(bb) {
        var ab;
        let Ub = bb >> 19,
          Ab = 65535 & bb,
          {
            parser: Mb
          } = this.p,
          Tb = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          Eb = Mb.dynamicPrecedence(Ab);
        if (Eb && (this.score += Eb), 0 == Ub) return this.pushState(Mb.getGoto(this.state, Ab, !0), this.reducePos), Ab < Mb.minRepeatTerm && this.storeNode(Ab, this.reducePos, this.reducePos, Tb ? 8 : 4, !0), void this.reduceContext(Ab, this.reducePos);
        let Yb = this.stack.length - 3 * (Ub - 1) - (262144 & bb ? 6 : 0),
          Bb = Yb ? this.stack[Yb - 2] : this.p.cj[0].from,
          eb = this.reducePos - Bb;
        eb >= 2e3 && !(null === (ab = this.p.parser.nodeSet.types[Ab]) || void 0 === ab ? void 0 : ab.isAnonymous) && (Bb == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = eb) : this.p.lastBigReductionSize < eb && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = Bb, this.p.lastBigReductionSize = eb));
        let vb = Yb ? this.stack[Yb - 1] : 0,
          Lb = this.bufferBase + this.buffer.length - vb;
        if (Ab < Mb.minRepeatTerm || 131072 & bb) {
          let bb = Mb.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(Ab, Bb, bb, Lb + 4, !0)
        }
        if (262144 & bb) this.state = this.stack[Yb];
        else {
          let bb = this.stack[Yb - 3];
          this.state = Mb.getGoto(bb, Ab, !0)
        }
        for (; this.stack.length > Yb;) this.stack.pop();
        this.reduceContext(Ab, Bb)
      }
      storeNode(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          Mb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == bb && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let bb = this,
            Ab = this.buffer.length;
          if (0 == Ab && bb.parent && (Ab = bb.bufferBase - bb.parent.bufferBase, bb = bb.parent), Ab > 0 && 0 == bb.buffer[Ab - 4] && bb.buffer[Ab - 1] > -1) {
            if (ab == Ub) return;
            if (bb.buffer[Ab - 2] >= ab) return void(bb.buffer[Ab - 2] = Ub)
          }
        }
        if (Mb && this.pos != Ub) {
          let Mb = this.buffer.length;
          if (Mb > 0 && (0 != this.buffer[Mb - 4] || this.buffer[Mb - 1] < 0)) {
            let bb = !1;
            for (let ab = Mb; ab > 0 && this.buffer[ab - 2] > Ub; ab -= 4)
              if (this.buffer[ab - 1] >= 0) {
                bb = !0;
                break
              } if (bb)
              for (; Mb > 0 && this.buffer[Mb - 2] > Ub;) this.buffer[Mb] = this.buffer[Mb - 4], this.buffer[Mb + 1] = this.buffer[Mb - 3], this.buffer[Mb + 2] = this.buffer[Mb - 2], this.buffer[Mb + 3] = this.buffer[Mb - 1], Mb -= 4, Ab > 4 && (Ab -= 4)
          }
          this.buffer[Mb] = bb, this.buffer[Mb + 1] = ab, this.buffer[Mb + 2] = Ub, this.buffer[Mb + 3] = Ab
        } else this.buffer.push(bb, ab, Ub, Ab)
      }
      shift(bb, ab, Ub, Ab) {
        if (131072 & bb) this.pushState(65535 & bb, this.pos);
        else if (0 == (262144 & bb)) {
          let Mb = bb,
            {
              parser: Tb
            } = this.p;
          this.pos = Ab;
          let Eb = Tb.stateFlag(Mb, 1);
          !Eb && (Ab > Ub || ab <= Tb.maxNode) && (this.reducePos = Ab), this.pushState(Mb, Eb ? Ub : Math.min(Ub, this.reducePos)), this.shiftContext(ab, Ub), ab <= Tb.maxNode && this.buffer.push(ab, Ub, Ab, 4)
        } else this.pos = Ab, this.shiftContext(ab, Ub), ab <= this.p.parser.maxNode && this.buffer.push(ab, Ub, Ab, 4)
      }
      apply(bb, ab, Ub, Ab) {
        65536 & bb ? this.reduce(bb) : this.shift(bb, ab, Ub, Ab)
      }
      useNode(bb, ab) {
        let Ub = this.p.reused.length - 1;
        (Ub < 0 || this.p.reused[Ub] != bb) && (this.p.reused.push(bb), Ub++);
        let Ab = this.pos;
        this.reducePos = this.pos = Ab + bb.length, this.pushState(ab, Ab), this.buffer.push(Ub, Ab, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, bb, this, this.p.stream.reset(this.pos - bb.length)))
      }
      split() {
        let bb = this,
          ab = bb.buffer.length;
        for (; ab > 0 && bb.buffer[ab - 2] > bb.reducePos;) ab -= 4;
        let Ub = bb.buffer.slice(ab),
          Ab = bb.bufferBase + ab;
        for (; bb && Ab == bb.bufferBase;) bb = bb.parent;
        return new Mb(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, Ub, Ab, this.curContext, this.lookAhead, bb)
      }
      recoverByDelete(bb, ab) {
        let Ub = bb <= this.p.parser.maxNode;
        Ub && this.storeNode(bb, this.pos, ab, 4), this.storeNode(0, this.pos, ab, Ub ? 8 : 4), this.pos = this.reducePos = ab, this.score -= 190
      }
      canShift(bb) {
        for (let ab = new Eb(this);;) {
          let Ub = this.p.parser.stateSlot(ab.state, 4) || this.p.parser.hasAction(ab.state, bb);
          if (0 == Ub) return !1;
          if (0 == (65536 & Ub)) return !0;
          ab.reduce(Ub)
        }
      }
      recoverByInsert(bb) {
        if (this.stack.length >= 300) return [];
        let ab = this.p.parser.nextStates(this.state);
        if (ab.length > 8 || this.stack.length >= 120) {
          let Ub = [];
          for (let Ab, Mb = 0; Mb < ab.length; Mb += 2)(Ab = ab[Mb + 1]) != this.state && this.p.parser.hasAction(Ab, bb) && Ub.push(ab[Mb], Ab);
          if (this.stack.length < 120)
            for (let bb = 0; Ub.length < 8 && bb < ab.length; bb += 2) {
              let Ab = ab[bb + 1];
              Ub.some(((bb, ab) => 1 & ab && bb == Ab)) || Ub.push(ab[bb], Ab)
            }
          ab = Ub
        }
        let Ub = [];
        for (let Ab = 0; Ab < ab.length && Ub.length < 4; Ab += 2) {
          let bb = ab[Ab + 1];
          if (bb == this.state) continue;
          let Mb = this.split();
          Mb.pushState(bb, this.pos), Mb.storeNode(0, Mb.pos, Mb.pos, 4, !0), Mb.shiftContext(ab[Ab], this.pos), Mb.reducePos = this.pos, Mb.score -= 200, Ub.push(Mb)
        }
        return Ub
      }
      forceReduce() {
        let {
          parser: bb
        } = this.p, ab = bb.stateSlot(this.state, 5);
        if (0 == (65536 & ab)) return !1;
        if (!bb.validAction(this.state, ab)) {
          let Ub = ab >> 19,
            Ab = 65535 & ab,
            Mb = this.stack.length - 3 * Ub;
          if (Mb < 0 || bb.getGoto(this.stack[Mb], Ab, !1) < 0) {
            let bb = this.findForcedReduction();
            if (null == bb) return !1;
            ab = bb
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(ab), !0
      }
      findForcedReduction() {
        let {
          parser: bb
        } = this.p, ab = [], Ub = (Ab, Mb) => {
          if (!ab.includes(Ab)) return ab.push(Ab), bb.allActions(Ab, (ab => {
            if (393216 & ab);
            else if (65536 & ab) {
              let Ub = (ab >> 19) - Mb;
              if (Ub > 1) {
                let Ab = 65535 & ab,
                  Mb = this.stack.length - 3 * Ub;
                if (Mb >= 0 && bb.getGoto(this.stack[Mb], Ab, !1) >= 0) return Ub << 19 | 65536 | Ab
              }
            } else {
              let bb = Ub(ab, Mb + 1);
              if (null != bb) return bb
            }
          }))
        };
        return Ub(this.state, 0)
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
        for (let ab = 0; ab < this.stack.length; ab += 3)
          if (this.stack[ab] != bb.stack[ab]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(bb) {
        return this.p.parser.dialect.flags[bb]
      }
      shiftContext(bb, ab) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, bb, this, this.p.stream.reset(ab)))
      }
      reduceContext(bb, ab) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, bb, this, this.p.stream.reset(ab)))
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
          let ab = new Tb(this.curContext.tracker, bb);
          ab.hash != this.curContext.hash && this.emitContext(), this.curContext = ab
        }
      }
      setLookAhead(bb) {
        return !(bb <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = bb, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class Tb {
      constructor(bb, ab) {
        this.tracker = bb, this.context = ab, this.hash = bb.strict ? bb.hash(ab) : 0
      }
    }
    class Eb {
      constructor(bb) {
        this.start = bb, this.state = bb.state, this.stack = bb.stack, this.base = this.stack.length
      }
      reduce(bb) {
        let ab = 65535 & bb,
          Ub = bb >> 19;
        0 == Ub ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (Ub - 1);
        let Ab = this.start.p.parser.getGoto(this.stack[this.base - 3], ab, !0);
        this.state = Ab
      }
    }
    class Yb {
      constructor(bb, ab, Ub) {
        this.stack = bb, this.pos = ab, this.index = Ub, this.buffer = bb.buffer, 0 == this.index && this.maybeNext()
      }
      static create(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb.bufferBase + bb.buffer.length;
        return new Yb(bb, ab, ab - bb.bufferBase)
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
        return new Yb(this.stack, this.pos, this.index)
      }
    }

    function Bb(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof bb) return bb;
      let Ub = null;
      for (let Ab = 0, Mb = 0; Ab < bb.length;) {
        let Tb = 0;
        for (;;) {
          let ab = bb.charCodeAt(Ab++),
            Ub = !1;
          if (126 == ab) {
            Tb = 65535;
            break
          }
          ab >= 92 && ab--, ab >= 34 && ab--;
          let Mb = ab - 32;
          if (Mb >= 46 && (Mb -= 46, Ub = !0), Tb += Mb, Ub) break;
          Tb *= 46
        }
        Ub ? Ub[Mb++] = Tb : Ub = new ab(Tb)
      }
      return Ub
    }
    class eb {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const vb = new eb;
    class Lb {
      constructor(bb, ab) {
        this.input = bb, this.cj = ab, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = vb, this.rangeIndex = 0, this.pos = this.chunkPos = ab[0].from, this.range = ab[0], this.end = ab[ab.length - 1].to, this.readNext()
      }
      resolveOffset(bb, ab) {
        let Ub = this.range,
          Ab = this.rangeIndex,
          Mb = this.pos + bb;
        for (; Mb < Ub.from;) {
          if (!Ab) return null;
          let bb = this.cj[--Ab];
          Mb -= Ub.from - bb.to, Ub = bb
        }
        for (; ab < 0 ? Mb > Ub.to : Mb >= Ub.to;) {
          if (Ab == this.cj.length - 1) return null;
          let bb = this.cj[++Ab];
          Mb += bb.from - Ub.to, Ub = bb
        }
        return Mb
      }
      clipPos(bb) {
        if (bb >= this.range.from && bb < this.range.to) return bb;
        for (let ab of this.cj)
          if (ab.to > bb) return Math.max(bb, ab.from);
        return this.end
      }
      peek(bb) {
        let ab, Ub, Ab = this.chunkOff + bb;
        if (Ab >= 0 && Ab < this.chunk.length) ab = this.pos + bb, Ub = this.chunk.charCodeAt(Ab);
        else {
          let Ab = this.resolveOffset(bb, 1);
          if (null == Ab) return -1;
          if (ab = Ab, ab >= this.chunk2Pos && ab < this.chunk2Pos + this.chunk2.length) Ub = this.chunk2.charCodeAt(ab - this.chunk2Pos);
          else {
            let bb = this.rangeIndex,
              Ab = this.range;
            for (; Ab.to <= ab;) Ab = this.cj[++bb];
            this.chunk2 = this.input.chunk(this.chunk2Pos = ab), ab + this.chunk2.length > Ab.to && (this.chunk2 = this.chunk2.slice(0, Ab.to - ab)), Ub = this.chunk2.charCodeAt(0)
          }
        }
        return ab >= this.token.lookAhead && (this.token.lookAhead = ab + 1), Ub
      }
      acceptToken(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ub = ab ? this.resolveOffset(ab, -1) : this.pos;
        if (null == Ub || Ub < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = bb, this.token.end = Ub
      }
      acceptTokenTo(bb, ab) {
        this.token.value = bb, this.token.end = ab
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: bb,
            chunkPos: ab
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = bb, this.chunk2Pos = ab, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let bb = this.input.chunk(this.pos),
            ab = this.pos + bb.length;
          this.chunk = ab > this.range.to ? bb.slice(0, this.range.to - this.pos) : bb, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += bb; this.pos + bb >= this.range.to;) {
          if (this.rangeIndex == this.cj.length - 1) return this.setDone();
          bb -= this.range.to - this.pos, this.range = this.cj[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += bb, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.cj[this.rangeIndex = this.cj.length - 1], this.chunk = "", this.next = -1
      }
      reset(bb, ab) {
        if (ab ? (this.token = ab, ab.start = bb, ab.lookAhead = bb + 1, ab.value = ab.extended = -1) : this.token = vb, this.pos != bb) {
          if (this.pos = bb, bb == this.end) return this.setDone(), this;
          for (; bb < this.range.from;) this.range = this.cj[--this.rangeIndex];
          for (; bb >= this.range.to;) this.range = this.cj[++this.rangeIndex];
          bb >= this.chunkPos && bb < this.chunkPos + this.chunk.length ? this.chunkOff = bb - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(bb, ab) {
        if (bb >= this.chunkPos && ab <= this.chunkPos + this.chunk.length) return this.chunk.slice(bb - this.chunkPos, ab - this.chunkPos);
        if (bb >= this.chunk2Pos && ab <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(bb - this.chunk2Pos, ab - this.chunk2Pos);
        if (bb >= this.range.from && ab <= this.range.to) return this.input.read(bb, ab);
        let Ub = "";
        for (let Ab of this.cj) {
          if (Ab.from >= ab) break;
          Ab.to > bb && (Ub += this.input.read(Math.max(Ab.from, bb), Math.min(Ab.to, ab)))
        }
        return Ub
      }
    }
    class Pb {
      constructor(bb, ab) {
        this.data = bb, this.id = ab
      }
      token(bb, ab) {
        let {
          parser: Ub
        } = ab.p;
        Rb(this.data, bb, ab, this.id, Ub.data, Ub.tokenPrecTable)
      }
    }
    Pb.prototype.contextual = Pb.prototype.fallback = Pb.prototype.extend = !1;
    class Xb {
      constructor(bb, ab, Ub) {
        this.precTable = ab, this.elseToken = Ub, this.data = "string" == typeof bb ? Bb(bb) : bb
      }
      token(bb, ab) {
        let Ub = bb.pos,
          Ab = 0;
        for (;;) {
          let Ub = bb.next < 0,
            Mb = bb.resolveOffset(1, 1);
          if (Rb(this.data, bb, ab, 0, this.data, this.precTable), bb.token.value > -1) break;
          if (null == this.elseToken) return;
          if (Ub || Ab++, null == Mb) break;
          bb.reset(Mb, bb.token)
        }
        Ab && (bb.reset(Ub, bb.token), bb.acceptToken(this.elseToken, Ab))
      }
    }
    Xb.prototype.contextual = Pb.prototype.fallback = Pb.prototype.extend = !1;
    class jb {
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = bb, this.contextual = !!ab.contextual, this.fallback = !!ab.fallback, this.extend = !!ab.extend
      }
    }

    function Rb(bb, ab, Ub, Ab, Mb, Tb) {
      let Eb = 0,
        Yb = 1 << Ab,
        {
          dialect: Bb
        } = Ub.p.parser;
      bb: for (; 0 != (Yb & bb[Eb]);) {
        let Ub = bb[Eb + 1];
        for (let Lb = Eb + 3; Lb < Ub; Lb += 2)
          if ((bb[Lb + 1] & Yb) > 0) {
            let Ub = bb[Lb];
            if (Bb.allows(Ub) && (-1 == ab.token.value || ab.token.value == Ub || yb(Ub, ab.token.value, Mb, Tb))) {
              ab.acceptToken(Ub);
              break
            }
          } let Ab = ab.next,
          eb = 0,
          vb = bb[Eb + 2];
        if (!(ab.next < 0 && vb > eb && 65535 == bb[Ub + 3 * vb - 3])) {
          for (; eb < vb;) {
            let Mb = eb + vb >> 1,
              Tb = Ub + Mb + (Mb << 1),
              Yb = bb[Tb],
              Bb = bb[Tb + 1] || 65536;
            if (Ab < Yb) vb = Mb;
            else {
              if (!(Ab >= Bb)) {
                Eb = bb[Tb + 2], ab.advance();
                continue bb
              }
              eb = Mb + 1
            }
          }
          break
        }
        Eb = bb[Ub + 3 * vb - 1]
      }
    }

    function kb(bb, ab, Ub) {
      for (let Ab, Mb = ab; 65535 != (Ab = bb[Mb]); Mb++)
        if (Ab == Ub) return Mb - ab;
      return -1
    }

    function yb(bb, ab, Ub, Ab) {
      let Mb = kb(Ub, Ab, ab);
      return Mb < 0 || kb(Ub, Ab, bb) < Mb
    }
    const Zb = "undefined" != typeof process && {
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
    let Db = null;

    function zb(bb, ab, Ub) {
      let Mb = bb.cursor(Ab.g.IncludeAnonymous);
      for (Mb.moveTo(ab);;)
        if (!(Ub < 0 ? Mb.childBefore(ab) : Mb.childAfter(ab)))
          for (;;) {
            if ((Ub < 0 ? Mb.to < ab : Mb.from > ab) && !Mb.type.isError) return Ub < 0 ? Math.max(0, Math.min(Mb.to - 1, ab - 25)) : Math.min(bb.length, Math.max(Mb.from + 1, ab + 25));
            if (Ub < 0 ? Mb.prevSibling() : Mb.nextSibling()) break;
            if (!Mb.parent()) return Ub < 0 ? 0 : bb.length
          }
    }
    class xb {
      constructor(bb, ab) {
        this.fragments = bb, this.nodeSet = ab, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let bb = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (bb) {
          for (this.safeFrom = bb.openStart ? zb(bb.tree, bb.from + bb.offset, 1) - bb.offset : bb.from, this.safeTo = bb.openEnd ? zb(bb.tree, bb.to + bb.offset, -1) - bb.offset : bb.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(bb.tree), this.start.push(-bb.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(bb) {
        if (bb < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= bb;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let ab = this.trees.length - 1;
          if (ab < 0) return this.nextFragment(), null;
          let Ub = this.trees[ab],
            Mb = this.index[ab];
          if (Mb == Ub.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let Tb = Ub.children[Mb],
            Eb = this.start[ab] + Ub.positions[Mb];
          if (Eb > bb) return this.nextStart = Eb, null;
          if (Tb instanceof Ab.z) {
            if (Eb == bb) {
              if (Eb < this.safeFrom) return null;
              let bb = Eb + Tb.length;
              if (bb <= this.safeTo) {
                let ab = Tb.prop(Ab.k.lookAhead);
                if (!ab || bb + ab < this.fragment.to) return Tb
              }
            }
            this.index[ab]++, Eb + Tb.length >= Math.max(this.safeFrom, bb) && (this.trees.push(Tb), this.start.push(Eb), this.index.push(0))
          } else this.index[ab]++, this.nextStart = Eb + Tb.length
        }
      }
    }
    class ib {
      constructor(bb, ab) {
        this.stream = ab, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = bb.tokenizers.map((bb => new eb))
      }
      getActions(bb) {
        let ab = 0,
          Ub = null,
          {
            parser: Ab
          } = bb.p,
          {
            tokenizers: Mb
          } = Ab,
          Tb = Ab.stateSlot(bb.state, 3),
          Eb = bb.curContext ? bb.curContext.hash : 0,
          Yb = 0;
        for (let Bb = 0; Bb < Mb.length; Bb++) {
          if (0 == (1 << Bb & Tb)) continue;
          let Ab = Mb[Bb],
            eb = this.tokens[Bb];
          if ((!Ub || Ab.fallback) && ((Ab.contextual || eb.start != bb.pos || eb.mask != Tb || eb.context != Eb) && (this.updateCachedToken(eb, Ab, bb), eb.mask = Tb, eb.context = Eb), eb.lookAhead > eb.end + 25 && (Yb = Math.max(eb.lookAhead, Yb)), 0 != eb.value)) {
            let Mb = ab;
            if (eb.extended > -1 && (ab = this.addActions(bb, eb.extended, eb.end, ab)), ab = this.addActions(bb, eb.value, eb.end, ab), !Ab.extend && (Ub = eb, ab > Mb)) break
          }
        }
        for (; this.actions.length > ab;) this.actions.pop();
        return Yb && bb.setLookAhead(Yb), Ub || bb.pos != this.stream.end || (Ub = new eb, Ub.value = bb.p.parser.eofTerm, Ub.start = Ub.end = bb.pos, ab = this.addActions(bb, Ub.value, Ub.end, ab)), this.mainToken = Ub, this.actions
      }
      getMainToken(bb) {
        if (this.mainToken) return this.mainToken;
        let ab = new eb,
          {
            pos: Ub,
            p: Ab
          } = bb;
        return ab.start = Ub, ab.end = Math.min(Ub + 1, Ab.stream.end), ab.value = Ub == Ab.stream.end ? Ab.parser.eofTerm : 0, ab
      }
      updateCachedToken(bb, ab, Ub) {
        let Ab = this.stream.clipPos(Ub.pos);
        if (ab.token(this.stream.reset(Ab, bb), Ub), bb.value > -1) {
          let {
            parser: ab
          } = Ub.p;
          for (let Ab = 0; Ab < ab.specialized.length; Ab++)
            if (ab.specialized[Ab] == bb.value) {
              let Mb = ab.specializers[Ab](this.stream.read(bb.start, bb.end), Ub);
              if (Mb >= 0 && Ub.p.parser.dialect.allows(Mb >> 1)) {
                0 == (1 & Mb) ? bb.value = Mb >> 1 : bb.extended = Mb >> 1;
                break
              }
            }
        } else bb.value = 0, bb.end = this.stream.clipPos(Ab + 1)
      }
      putAction(bb, ab, Ub, Ab) {
        for (let Mb = 0; Mb < Ab; Mb += 3)
          if (this.actions[Mb] == bb) return Ab;
        return this.actions[Ab++] = bb, this.actions[Ab++] = ab, this.actions[Ab++] = Ub, Ab
      }
      addActions(bb, ab, Ub, Ab) {
        let {
          state: Mb
        } = bb, {
          parser: Tb
        } = bb.p, {
          data: Eb
        } = Tb;
        for (let Yb = 0; Yb < 2; Yb++)
          for (let bb = Tb.stateSlot(Mb, Yb ? 2 : 1);; bb += 3) {
            if (65535 == Eb[bb]) {
              if (1 != Eb[bb + 1]) {
                0 == Ab && 2 == Eb[bb + 1] && (Ab = this.putAction(Hb(Eb, bb + 2), ab, Ub, Ab));
                break
              }
              bb = Hb(Eb, bb + 2)
            }
            Eb[bb] == ab && (Ab = this.putAction(Hb(Eb, bb + 1), ab, Ub, Ab))
          }
        return Ab
      }
    }
    class fb {
      constructor(bb, ab, Ub, Ab) {
        this.parser = bb, this.input = ab, this.cj = Ab, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new Lb(ab, Ab), this.tokens = new ib(bb, this.stream), this.topTerm = bb.top[1];
        let {
          from: Tb
        } = Ab[0];
        this.stacks = [Mb.start(this, bb.top[0], Tb)], this.fragments = Ub.length && this.stream.end - Tb > 4 * bb.bufferLength ? new xb(Ub, bb.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let bb, ab, Ub = this.stacks,
          Ab = this.minStackPos,
          Mb = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == Ub.length) {
          let [bb] = Ub;
          for (; bb.forceReduce() && bb.stack.length && bb.stack[bb.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let Tb = 0; Tb < Ub.length; Tb++) {
          let Eb = Ub[Tb];
          for (;;) {
            if (this.tokens.mainToken = null, Eb.pos > Ab) Mb.push(Eb);
            else {
              if (this.advanceStack(Eb, Mb, Ub)) continue;
              {
                bb || (bb = [], ab = []), bb.push(Eb);
                let Ub = this.tokens.getMainToken(Eb);
                ab.push(Ub.value, Ub.end)
              }
            }
            break
          }
        }
        if (!Mb.length) {
          let ab = bb && function(bb) {
            let ab = null;
            for (let Ub of bb) {
              let bb = Ub.p.stoppedAt;
              (Ub.pos == Ub.p.stream.end || null != bb && Ub.pos > bb) && Ub.p.parser.stateFlag(Ub.state, 2) && (!ab || ab.score < Ub.score) && (ab = Ub)
            }
            return ab
          }(bb);
          if (ab) return Zb && console.log("Finish with " + this.stackID(ab)), this.stackToTree(ab);
          if (this.parser.strict) throw Zb && bb && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + Ab);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && bb) {
          let Ub = null != this.stoppedAt && bb[0].pos > this.stoppedAt ? bb[0] : this.runRecovery(bb, ab, Mb);
          if (Ub) return Zb && console.log("Force-finish " + this.stackID(Ub)), this.stackToTree(Ub.forceAll())
        }
        if (this.recovering) {
          let bb = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (Mb.length > bb)
            for (Mb.sort(((bb, ab) => ab.score - bb.score)); Mb.length > bb;) Mb.pop();
          Mb.some((bb => bb.reducePos > Ab)) && this.recovering--
        } else if (Mb.length > 1) {
          bb: for (let bb = 0; bb < Mb.length - 1; bb++) {
            let ab = Mb[bb];
            for (let Ub = bb + 1; Ub < Mb.length; Ub++) {
              let Ab = Mb[Ub];
              if (ab.sameState(Ab) || ab.buffer.length > 500 && Ab.buffer.length > 500) {
                if (!((ab.score - Ab.score || ab.buffer.length - Ab.buffer.length) > 0)) {
                  Mb.splice(bb--, 1);
                  continue bb
                }
                Mb.splice(Ub--, 1)
              }
            }
          }
          Mb.length > 12 && (Mb.sort(((bb, ab) => ab.score - bb.score)), Mb.splice(12, Mb.length - 12))
        }
        this.minStackPos = Mb[0].pos;
        for (let Tb = 1; Tb < Mb.length; Tb++) Mb[Tb].pos < this.minStackPos && (this.minStackPos = Mb[Tb].pos);
        return null
      }
      stopAt(bb) {
        if (null != this.stoppedAt && this.stoppedAt < bb) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = bb
      }
      advanceStack(bb, ab, Ub) {
        let Mb = bb.pos,
          {
            parser: Tb
          } = this,
          Eb = Zb ? this.stackID(bb) + " -> " : "";
        if (null != this.stoppedAt && Mb > this.stoppedAt) return bb.forceReduce() ? bb : null;
        if (this.fragments) {
          let ab = bb.curContext && bb.curContext.tracker.strict,
            Ub = ab ? bb.curContext.hash : 0;
          for (let Yb = this.fragments.nodeAt(Mb); Yb;) {
            let Mb = this.parser.nodeSet.types[Yb.type.id] == Yb.type ? Tb.getGoto(bb.state, Yb.type.id) : -1;
            if (Mb > -1 && Yb.length && (!ab || (Yb.prop(Ab.k.contextHash) || 0) == Ub)) return bb.useNode(Yb, Mb), Zb && console.log(Eb + this.stackID(bb) + ` (via reuse of ${Tb.getName(Yb.type.id)})`), !0;
            if (!(Yb instanceof Ab.z) || 0 == Yb.children.length || Yb.positions[0] > 0) break;
            let Bb = Yb.children[0];
            if (!(Bb instanceof Ab.z && 0 == Yb.positions[0])) break;
            Yb = Bb
          }
        }
        let Yb = Tb.stateSlot(bb.state, 4);
        if (Yb > 0) return bb.reduce(Yb), Zb && console.log(Eb + this.stackID(bb) + ` (via always-reduce ${Tb.getName(65535&Yb)})`), !0;
        if (bb.stack.length >= 8400)
          for (; bb.stack.length > 6e3 && bb.forceReduce(););
        let Bb = this.tokens.getActions(bb);
        for (let Ab = 0; Ab < Bb.length;) {
          let Yb = Bb[Ab++],
            eb = Bb[Ab++],
            vb = Bb[Ab++],
            Lb = Ab == Bb.length || !Ub,
            Pb = Lb ? bb : bb.split(),
            Xb = this.tokens.mainToken;
          if (Pb.apply(Yb, eb, Xb ? Xb.start : Pb.pos, vb), Zb && console.log(Eb + this.stackID(Pb) + ` (via ${0==(65536&Yb)?"shift":`reduce of ${Tb.getName(65535&Yb)}`} for ${Tb.getName(eb)} @ ${Mb}${Pb==bb?"":", split"})`), Lb) return !0;
          Pb.pos > Mb ? ab.push(Pb) : Ub.push(Pb)
        }
        return !1
      }
      advanceFully(bb, ab) {
        let Ub = bb.pos;
        for (;;) {
          if (!this.advanceStack(bb, null, null)) return !1;
          if (bb.pos > Ub) return mb(bb, ab), !0
        }
      }
      runRecovery(bb, ab, Ub) {
        let Ab = null,
          Mb = !1;
        for (let Tb = 0; Tb < bb.length; Tb++) {
          let Eb = bb[Tb],
            Yb = ab[Tb << 1],
            Bb = ab[1 + (Tb << 1)],
            eb = Zb ? this.stackID(Eb) + " -> " : "";
          if (Eb.deadEnd) {
            if (Mb) continue;
            if (Mb = !0, Eb.restart(), Zb && console.log(eb + this.stackID(Eb) + " (restarted)"), this.advanceFully(Eb, Ub)) continue
          }
          let vb = Eb.split(),
            Lb = eb;
          for (let bb = 0; bb < 10 && vb.forceReduce(); bb++) {
            if (Zb && console.log(Lb + this.stackID(vb) + " (via force-reduce)"), this.advanceFully(vb, Ub)) break;
            Zb && (Lb = this.stackID(vb) + " -> ")
          }
          for (let bb of Eb.recoverByInsert(Yb)) Zb && console.log(eb + this.stackID(bb) + " (via recover-insert)"), this.advanceFully(bb, Ub);
          this.stream.end > Eb.pos ? (Bb == Eb.pos && (Bb++, Yb = 0), Eb.recoverByDelete(Yb, Bb), Zb && console.log(eb + this.stackID(Eb) + ` (via recover-delete ${this.parser.getName(Yb)})`), mb(Eb, Ub)) : (!Ab || Ab.score < vb.score) && (Ab = vb)
        }
        return Ab
      }
      stackToTree(bb) {
        return bb.close(), Ab.z.build({
          buffer: Yb.create(bb),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.cj[0].from,
          length: bb.pos - this.cj[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(bb) {
        let ab = (Db || (Db = new WeakMap)).get(bb);
        return ab || Db.set(bb, ab = String.fromCodePoint(this.nextStackID++)), ab + bb
      }
    }

    function mb(bb, ab) {
      for (let Ub = 0; Ub < ab.length; Ub++) {
        let Ab = ab[Ub];
        if (Ab.pos == bb.pos && Ab.sameState(bb)) return void(ab[Ub].score < bb.score && (ab[Ub] = bb))
      }
      ab.push(bb)
    }
    class pb {
      constructor(bb, ab, Ub) {
        this.source = bb, this.flags = ab, this.disabled = Ub
      }
      allows(bb) {
        return !this.disabled || 0 == this.disabled[bb]
      }
    }
    const Nb = bb => bb;
    class Wb extends Ab.v {
      constructor(bb) {
        if (super(), this.wrappers = [], 14 != bb.version) throw new RangeError(`Parser version (${bb.version}) doesn't match runtime version (14)`);
        let ab = bb.nodeNames.split(" ");
        this.minRepeatTerm = ab.length;
        for (let Ab = 0; Ab < bb.repeatNodeCount; Ab++) ab.push("");
        let Ub = Object.keys(bb.topRules).map((ab => bb.topRules[ab][1])),
          Mb = [];
        for (let Ab = 0; Ab < ab.length; Ab++) Mb.push([]);

        function Tb(bb, ab, Ub) {
          Mb[bb].push([ab, ab.deserialize(String(Ub))])
        }
        if (bb.nodeProps)
          for (let Yb of bb.nodeProps) {
            let bb = Yb[0];
            "string" == typeof bb && (bb = Ab.k[bb]);
            for (let ab = 1; ab < Yb.length;) {
              let Ub = Yb[ab++];
              if (Ub >= 0) Tb(Ub, bb, Yb[ab++]);
              else {
                let Ab = Yb[ab + -Ub];
                for (let Mb = -Ub; Mb > 0; Mb--) Tb(Yb[ab++], bb, Ab);
                ab++
              }
            }
          }
        this.nodeSet = new Ab.o(ab.map(((ab, Tb) => Ab.s.define({
          name: Tb >= this.minRepeatTerm ? void 0 : ab,
          id: Tb,
          props: Mb[Tb],
          top: Ub.indexOf(Tb) > -1,
          error: 0 == Tb,
          skipped: bb.skippedNodes && bb.skippedNodes.indexOf(Tb) > -1
        })))), bb.propSources && (this.nodeSet = this.nodeSet.extend(...bb.propSources)), this.strict = !1, this.bufferLength = Ab.d;
        let Eb = Bb(bb.tokenData);
        this.context = bb.context, this.specializerSpecs = bb.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let Ab = 0; Ab < this.specializerSpecs.length; Ab++) this.specialized[Ab] = this.specializerSpecs[Ab].term;
        this.specializers = this.specializerSpecs.map(Ib), this.states = Bb(bb.states, Uint32Array), this.data = Bb(bb.stateData), this.goto = Bb(bb.goto), this.maxTerm = bb.maxTerm, this.tokenizers = bb.tokenizers.map((bb => "number" == typeof bb ? new Pb(Eb, bb) : bb)), this.topRules = bb.topRules, this.dialects = bb.dialects || {}, this.dynamicPrecedences = bb.dynamicPrecedences || null, this.tokenPrecTable = bb.tokenPrec, this.termNames = bb.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(bb, ab, Ub) {
        let Ab = new fb(this, bb, ab, Ub);
        for (let Mb of this.wrappers) Ab = Mb(Ab, bb, ab, Ub);
        return Ab
      }
      getGoto(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ab = this.goto;
        if (ab >= Ab[0]) return -1;
        for (let Mb = Ab[ab + 1];;) {
          let ab = Ab[Mb++],
            Tb = 1 & ab,
            Eb = Ab[Mb++];
          if (Tb && Ub) return Eb;
          for (let Ub = Mb + (ab >> 1); Mb < Ub; Mb++)
            if (Ab[Mb] == bb) return Eb;
          if (Tb) return -1
        }
      }
      hasAction(bb, ab) {
        let Ub = this.data;
        for (let Ab = 0; Ab < 2; Ab++)
          for (let Mb, Tb = this.stateSlot(bb, Ab ? 2 : 1);; Tb += 3) {
            if (65535 == (Mb = Ub[Tb])) {
              if (1 != Ub[Tb + 1]) {
                if (2 == Ub[Tb + 1]) return Hb(Ub, Tb + 2);
                break
              }
              Mb = Ub[Tb = Hb(Ub, Tb + 2)]
            }
            if (Mb == ab || 0 == Mb) return Hb(Ub, Tb + 1)
          }
        return 0
      }
      stateSlot(bb, ab) {
        return this.states[6 * bb + ab]
      }
      stateFlag(bb, ab) {
        return (this.stateSlot(bb, 0) & ab) > 0
      }
      validAction(bb, ab) {
        return !!this.allActions(bb, (bb => bb == ab || null))
      }
      allActions(bb, ab) {
        let Ub = this.stateSlot(bb, 4),
          Ab = Ub ? ab(Ub) : void 0;
        for (let Mb = this.stateSlot(bb, 1); null == Ab; Mb += 3) {
          if (65535 == this.data[Mb]) {
            if (1 != this.data[Mb + 1]) break;
            Mb = Hb(this.data, Mb + 2)
          }
          Ab = ab(Hb(this.data, Mb + 1))
        }
        return Ab
      }
      nextStates(bb) {
        let ab = [];
        for (let Ub = this.stateSlot(bb, 1);; Ub += 3) {
          if (65535 == this.data[Ub]) {
            if (1 != this.data[Ub + 1]) break;
            Ub = Hb(this.data, Ub + 2)
          }
          if (0 == (1 & this.data[Ub + 2])) {
            let bb = this.data[Ub + 1];
            ab.some(((ab, Ub) => 1 & Ub && ab == bb)) || ab.push(this.data[Ub], bb)
          }
        }
        return ab
      }
      configure(bb) {
        let ab = Object.assign(Object.create(Wb.prototype), this);
        if (bb.props && (ab.nodeSet = this.nodeSet.extend(...bb.props)), bb.top) {
          let Ub = this.topRules[bb.top];
          if (!Ub) throw new RangeError(`Invalid top rule name ${bb.top}`);
          ab.top = Ub
        }
        return bb.tokenizers && (ab.tokenizers = this.tokenizers.map((ab => {
          let Ub = bb.tokenizers.find((bb => bb.from == ab));
          return Ub ? Ub.to : ab
        }))), bb.specializers && (ab.specializers = this.specializers.slice(), ab.specializerSpecs = this.specializerSpecs.map(((Ub, Ab) => {
          let Mb = bb.specializers.find((bb => bb.from == Ub.external));
          if (!Mb) return Ub;
          let Tb = Object.assign(Object.assign({}, Ub), {
            external: Mb.to
          });
          return ab.specializers[Ab] = Ib(Tb), Tb
        }))), bb.contextTracker && (ab.context = bb.contextTracker), bb.dialect && (ab.dialect = this.parseDialect(bb.dialect)), null != bb.strict && (ab.strict = bb.strict), bb.wrap && (ab.wrappers = ab.wrappers.concat(bb.wrap)), null != bb.bufferLength && (ab.bufferLength = bb.bufferLength), ab
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
        let ab = this.dynamicPrecedences;
        return null == ab ? 0 : ab[bb] || 0
      }
      parseDialect(bb) {
        let ab = Object.keys(this.dialects),
          Ub = ab.map((() => !1));
        if (bb)
          for (let Mb of bb.split(" ")) {
            let bb = ab.indexOf(Mb);
            bb >= 0 && (Ub[bb] = !0)
          }
        let Ab = null;
        for (let Mb = 0; Mb < ab.length; Mb++)
          if (!Ub[Mb])
            for (let bb, Ub = this.dialects[ab[Mb]]; 65535 != (bb = this.data[Ub++]);)(Ab || (Ab = new Uint8Array(this.maxTerm + 1)))[bb] = 1;
        return new pb(bb, Ub, Ab)
      }
      static deserialize(bb) {
        return new Wb(bb)
      }
    }

    function Hb(bb, ab) {
      return bb[ab] | bb[ab + 1] << 16
    }

    function Ib(bb) {
      if (bb.external) {
        let ab = bb.extend ? 1 : 0;
        return (Ub, Ab) => bb.external(Ub, Ab) << 1 | ab
      }
      return bb.get
    }
    var db = Ub(40442);
    const Fb = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      hb = new class {
        constructor(bb) {
          this.start = bb.start, this.shift = bb.shift || Nb, this.reduce = bb.reduce || Nb, this.reuse = bb.reuse || Nb, this.hash = bb.hash || (() => 0), this.strict = !1 !== bb.strict
        }
      }({
        start: !1,
        shift: (bb, ab) => 5 == ab || 6 == ab || 320 == ab ? bb : 321 == ab,
        strict: !1
      }),
      Gb = new jb(((bb, ab) => {
        let {
          next: Ub
        } = bb;
        (125 == Ub || -1 == Ub || ab.context) && bb.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      Qb = new jb(((bb, ab) => {
        let Ub, {
          next: Ab
        } = bb;
        Fb.indexOf(Ab) > -1 || (47 != Ab || 47 != (Ub = bb.peek(1)) && 42 != Ub) && (125 == Ab || 59 == Ab || -1 == Ab || ab.context || bb.acceptToken(316))
      }), {
        contextual: !0
      }),
      qb = new jb(((bb, ab) => {
        91 != bb.next || ab.context || bb.acceptToken(317)
      }), {
        contextual: !0
      }),
      ub = new jb(((bb, ab) => {
        let {
          next: Ub
        } = bb;
        if (43 == Ub || 45 == Ub) {
          if (bb.advance(), Ub == bb.next) {
            bb.advance();
            let Ub = !ab.context && ab.canShift(1);
            bb.acceptToken(Ub ? 1 : 2)
          }
        } else 63 == Ub && 46 == bb.peek(1) && (bb.advance(), bb.advance(), (bb.next < 48 || bb.next > 57) && bb.acceptToken(3))
      }), {
        contextual: !0
      });

    function rb(bb, ab) {
      return bb >= 65 && bb <= 90 || bb >= 97 && bb <= 122 || 95 == bb || bb >= 192 || !ab && bb >= 48 && bb <= 57
    }
    const Kb = new jb(((bb, ab) => {
        if (60 != bb.next || !ab.dialectEnabled(0)) return;
        if (bb.advance(), 47 == bb.next) return;
        let Ub = 0;
        for (; Fb.indexOf(bb.next) > -1;) bb.advance(), Ub++;
        if (rb(bb.next, !0)) {
          for (bb.advance(), Ub++; rb(bb.next, !1);) bb.advance(), Ub++;
          for (; Fb.indexOf(bb.next) > -1;) bb.advance(), Ub++;
          if (44 == bb.next) return;
          for (let ab = 0;; ab++) {
            if (7 == ab) {
              if (!rb(bb.next, !0)) return;
              break
            }
            if (bb.next != "extends".charCodeAt(ab)) break;
            bb.advance(), Ub++
          }
        }
        bb.acceptToken(4, -Ub)
      })),
      ob = (0, db.d)({
        "get set async static": db.h.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": db.h.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": db.h.operatorKeyword,
        "let var const using function class extends": db.h.definitionKeyword,
        "import export from": db.h.moduleKeyword,
        "with debugger new": db.h.keyword,
        TemplateString: db.h.special(db.h.string),
        super: db.h.atom,
        BooleanLiteral: db.h.bool,
        this: db.h.self,
        null: db.h.null,
        Star: db.h.modifier,
        VariableName: db.h.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": db.h.function(db.h.variableName),
        VariableDefinition: db.h.definition(db.h.variableName),
        Label: db.h.labelName,
        PropertyName: db.h.propertyName,
        PrivatePropertyName: db.h.special(db.h.propertyName),
        "CallExpression/MemberExpression/PropertyName": db.h.function(db.h.propertyName),
        "FunctionDeclaration/VariableDefinition": db.h.function(db.h.definition(db.h.variableName)),
        "ClassDeclaration/VariableDefinition": db.h.definition(db.h.className),
        "NewExpression/VariableName": db.h.className,
        PropertyDefinition: db.h.definition(db.h.propertyName),
        PrivatePropertyDefinition: db.h.definition(db.h.special(db.h.propertyName)),
        UpdateOp: db.h.updateOperator,
        "LineComment Hashbang": db.h.lineComment,
        BlockComment: db.h.blockComment,
        Number: db.h.number,
        String: db.h.string,
        Escape: db.h.escape,
        ArithOp: db.h.arithmeticOperator,
        LogicOp: db.h.logicOperator,
        BitOp: db.h.bitwiseOperator,
        CompareOp: db.h.compareOperator,
        RegExp: db.h.regexp,
        Equals: db.h.definitionOperator,
        Arrow: db.h.function(db.h.punctuation),
        ": Spread": db.h.punctuation,
        "( )": db.h.paren,
        "[ ]": db.h.squareBracket,
        "{ }": db.h.brace,
        "InterpolationStart InterpolationEnd": db.h.special(db.h.brace),
        ".": db.h.derefOperator,
        ", ;": db.h.separator,
        "@": db.h.meta,
        TypeName: db.h.typeName,
        TypeDefinition: db.h.definition(db.h.typeName),
        "type enum interface implements namespace module declare": db.h.definitionKeyword,
        "abstract global Privacy readonly override": db.h.modifier,
        "is keyof unique infer asserts": db.h.operatorKeyword,
        JSXAttributeValue: db.h.attributeValue,
        JSXText: db.h.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": db.h.angleBracket,
        "JSXIdentifier JSXNameSpacedName": db.h.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": db.h.attributeName,
        "JSXBuiltin/JSXIdentifier": db.h.standard(db.h.tagName)
      }),
      lb = {
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
      tb = {
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
      wb = {
        __proto__: null,
        "<": 193
      },
      sb = Wb.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: hb,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [ob],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [Qb, qb, ub, Kb, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, Gb, new Xb("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new Xb("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: bb => lb[bb] || -1
        }, {
          term: 343,
          get: bb => tb[bb] || -1
        }, {
          term: 95,
          get: bb => wb[bb] || -1
        }],
        tokenPrec: 15201
      });
    var gb = Ub(40437),
      Cb = Ub(40415),
      Vb = Ub(40419),
      Ob = Ub(40410);
    const cb = [(0, Ob.v)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, Ob.v)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, Ob.v)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, Ob.v)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, Ob.v)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, Ob.v)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, Ob.v)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, Ob.v)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, Ob.v)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, Ob.v)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, Ob.v)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      Jb = cb.concat([(0, Ob.v)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, Ob.v)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, Ob.v)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      nb = new Ab.t,
      Sb = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function ba(bb) {
      return (ab, Ub) => {
        let Ab = ab.node.getChild("VariableDefinition");
        return Ab && Ub(Ab, bb), !0
      }
    }
    const aa = ["FunctionDeclaration"],
      Ua = {
        FunctionDeclaration: ba("function"),
        ClassDeclaration: ba("class"),
        ClassExpression: () => !0,
        EnumDeclaration: ba("constant"),
        TypeAliasDeclaration: ba("type"),
        NamespaceDeclaration: ba("namespace"),
        VariableDefinition(bb, ab) {
          bb.matchContext(aa) || ab(bb, "variable")
        },
        TypeDefinition(bb, ab) {
          ab(bb, "type")
        },
        __proto__: null
      };

    function Aa(bb, ab) {
      let Ub = nb.get(ab);
      if (Ub) return Ub;
      let Mb = [],
        Tb = !0;

      function Eb(ab, Ub) {
        let Ab = bb.sliceString(ab.from, ab.to);
        Mb.push({
          label: Ab,
          type: Ub
        })
      }
      return ab.cursor(Ab.g.IncludeAnonymous).iterate((ab => {
        if (Tb) Tb = !1;
        else if (ab.name) {
          let bb = Ua[ab.name];
          if (bb && bb(ab, Eb) || Sb.has(ab.name)) return !1
        } else if (ab.to - ab.from > 8192) {
          for (let Ub of Aa(bb, ab.node)) Mb.push(Ub);
          return !1
        }
      })), nb.set(ab, Mb), Mb
    }
    const Ma = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      Ta = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function Ea(bb) {
      let ab = (0, gb.wb)(bb.state).resolveInner(bb.pos, -1);
      if (Ta.indexOf(ab.name) > -1) return null;
      let Ub = "VariableName" == ab.name || ab.to - ab.from < 20 && Ma.test(bb.state.sliceDoc(ab.from, ab.to));
      if (!Ub && !bb.explicit) return null;
      let Ab = [];
      for (let Mb = ab; Mb; Mb = Mb.parent) Sb.has(Mb.name) && (Ab = Ab.concat(Aa(bb.state.doc, Mb)));
      return {
        options: Ab,
        from: Ub ? ab.from : bb.pos,
        validFor: Ma
      }
    }
    const Ya = gb.h.define({
        name: "javascript",
        parser: sb.configure({
          props: [gb.ab.add({
            IfStatement: (0, gb.r)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, gb.r)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: gb.G,
            SwitchBody: bb => {
              let ab = bb.textAfter,
                Ub = /^\s*\}/.test(ab),
                Ab = /^\s*(case|default)\b/.test(ab);
              return bb.baseIndent + (Ub ? 0 : Ab ? 1 : 2) * bb.unit
            },
            Block: (0, gb.C)({
              closing: "}"
            }),
            ArrowFunction: bb => bb.baseIndent + bb.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, gb.r)({
              except: /^\s*{/
            }),
            JSXElement(bb) {
              let ab = /^\s*<\//.test(bb.textAfter);
              return bb.lineIndent(bb.node.from) + (ab ? 0 : bb.unit)
            },
            JSXEscape(bb) {
              let ab = /\s*\}/.test(bb.textAfter);
              return bb.lineIndent(bb.node.from) + (ab ? 0 : bb.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": bb => bb.column(bb.node.from) + bb.unit
          }), gb.O.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": gb.K,
            BlockComment: bb => ({
              from: bb.from + 2,
              to: bb.to - 2
            }),
            JSXElement(bb) {
              let ab = bb.firstChild;
              if (!ab || "JSXSelfClosingTag" == ab.name) return null;
              let Ub = bb.lastChild;
              return {
                from: ab.to,
                to: Ub.type.isError ? bb.to : Ub.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(bb) {
              var ab;
              let Ub = null === (ab = bb.firstChild) || void 0 === ab ? void 0 : ab.nextSibling,
                Ab = bb.lastChild;
              return !Ub || Ub.type.isError ? null : {
                from: Ub.to,
                to: Ab.type.isError ? bb.to : Ab.from
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
      Ba = {
        test: bb => /^JSX/.test(bb.name),
        facet: (0, gb.y)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      ea = Ya.configure({
        dialect: "ts"
      }, "typescript"),
      va = Ya.configure({
        dialect: "jsx",
        props: [gb.nb.add((bb => bb.isTop ? [Ba] : void 0))]
      }),
      La = Ya.configure({
        dialect: "jsx ts",
        props: [gb.nb.add((bb => bb.isTop ? [Ba] : void 0))]
      }, "typescript");
    let Pa = bb => ({
      label: bb,
      type: "keyword"
    });
    const Xa = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(Pa),
      ja = Xa.concat(["declare", "implements", "private", "protected", "public"].map(Pa));

    function Ra() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        ab = bb.jsx ? bb.typescript ? La : va : bb.typescript ? ea : Ya,
        Ub = bb.typescript ? Jb.concat(ja) : cb.concat(Xa);
      return new gb.l(ab, [Ya.data.of({
        autocomplete: (0, Ob.t)(Ta, (0, Ob.p)(Ub))
      }), Ya.data.of({
        autocomplete: Ea
      }), bb.jsx ? Za : []])
    }

    function ka(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bb.length;
      for (let Ab = null === ab || void 0 === ab ? void 0 : ab.firstChild; Ab; Ab = Ab.nextSibling)
        if ("JSXIdentifier" == Ab.name || "JSXBuiltin" == Ab.name || "JSXNamespacedName" == Ab.name || "JSXMemberExpression" == Ab.name) return bb.sliceString(Ab.from, Math.min(Ab.to, Ub));
      return ""
    }
    const ya = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      Za = Vb.i.inputHandler.of(((bb, ab, Ub, Ab, Mb) => {
        if ((ya ? bb.composing : bb.compositionStarted) || bb.state.readOnly || ab != Ub || ">" != Ab && "/" != Ab || !Ya.isActiveAt(bb.state, ab, -1)) return !1;
        let Tb = Mb(),
          {
            state: Eb
          } = Tb,
          Yb = Eb.changeByRange((bb => {
            var ab;
            let Ub, {
                head: Mb
              } = bb,
              Tb = (0, gb.wb)(Eb).resolveInner(Mb - 1, -1);
            if ("JSXStartTag" == Tb.name && (Tb = Tb.parent), Eb.doc.sliceString(Mb - 1, Mb) != Ab || "JSXAttributeValue" == Tb.name && Tb.to > Mb);
            else {
              if (">" == Ab && "JSXFragmentTag" == Tb.name) return {
                range: bb,
                changes: {
                  from: Mb,
                  insert: "</>"
                }
              };
              if ("/" == Ab && "JSXStartCloseTag" == Tb.name) {
                let bb = Tb.parent,
                  Ab = bb.parent;
                if (Ab && bb.from == Mb - 2 && ((Ub = ka(Eb.doc, Ab.firstChild, Mb)) || "JSXFragmentTag" == (null === (ab = Ab.firstChild) || void 0 === ab ? void 0 : ab.name))) {
                  let bb = `${Ub}>`;
                  return {
                    range: Cb.m.cursor(Mb + bb.length, -1),
                    changes: {
                      from: Mb,
                      insert: bb
                    }
                  }
                }
              } else if (">" == Ab) {
                let ab = function(bb) {
                  for (;;) {
                    if ("JSXOpenTag" == bb.name || "JSXSelfClosingTag" == bb.name || "JSXFragmentTag" == bb.name) return bb;
                    if ("JSXEscape" == bb.name || !bb.parent) return null;
                    bb = bb.parent
                  }
                }(Tb);
                if (ab && "JSXOpenTag" == ab.name && !/^\/?>|^<\//.test(Eb.doc.sliceString(Mb, Mb + 2)) && (Ub = ka(Eb.doc, ab, Mb))) return {
                  range: bb,
                  changes: {
                    from: Mb,
                    insert: `</${Ub}>`
                  }
                }
              }
            }
            return {
              range: bb
            }
          }));
        return !Yb.changes.empty && (bb.dispatch([Tb, Eb.update(Yb, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  40437: (bb, ab, Ub) => {
    Ub.d(ab, {
      C: () => lb,
      G: () => wb,
      I: () => Za,
      K: () => cb,
      N: () => ea,
      O: () => Ob,
      R: () => yb,
      V: () => db,
      Y: () => hb,
      ab: () => Qb,
      cb: () => Cb,
      e: () => za,
      g: () => Gb,
      gb: () => Fb,
      h: () => jb,
      ib: () => Ib,
      kb: () => ta,
      l: () => Wb,
      n: () => ra,
      nb: () => Lb,
      pb: () => ma,
      r: () => sb,
      sb: () => kb,
      v: () => Wa,
      wb: () => Rb,
      y: () => vb
    });
    var Ab, Mb = Ub(40440),
      Tb = Ub(40415),
      Eb = Ub(40419),
      Yb = Ub(40442),
      Bb = Ub(40427);
    const eb = new Mb.k;

    function vb(bb) {
      return Tb.q.define({
        combine: bb ? ab => ab.concat(bb) : void 0
      })
    }
    const Lb = new Mb.k;
    class Pb {
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = bb, this.name = Ab, Tb.p.prototype.hasOwnProperty("tree") || Object.defineProperty(Tb.p.prototype, "tree", {
          get() {
            return Rb(this)
          }
        }), this.parser = ab, this.extension = [Nb.of(this), Tb.p.languageData.of(((bb, ab, Ub) => {
          let Ab = Xb(bb, ab, Ub),
            Mb = Ab.type.prop(eb);
          if (!Mb) return [];
          let Tb = bb.facet(Mb),
            Eb = Ab.type.prop(Lb);
          if (Eb) {
            let Mb = Ab.resolve(ab - Ab.from, Ub);
            for (let ab of Eb)
              if (ab.test(Mb, bb)) {
                let Ub = bb.facet(ab.facet);
                return "replace" == ab.type ? Ub : Ub.concat(Tb)
              }
          }
          return Tb
        }))].concat(Ub)
      }
      isActiveAt(bb, ab) {
        return Xb(bb, ab, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(eb) == this.data
      }
      findRegions(bb) {
        let ab = bb.facet(Nb);
        if ((null === ab || void 0 === ab ? void 0 : ab.data) == this.data) return [{
          from: 0,
          to: bb.doc.length
        }];
        if (!ab || !ab.allowsNesting) return [];
        let Ub = [],
          Ab = (bb, ab) => {
            if (bb.prop(eb) == this.data) return void Ub.push({
              from: ab,
              to: ab + bb.length
            });
            let Tb = bb.prop(Mb.k.mounted);
            if (Tb) {
              if (Tb.tree.prop(eb) == this.data) {
                if (Tb.overlay)
                  for (let bb of Tb.overlay) Ub.push({
                    from: bb.from + ab,
                    to: bb.to + ab
                  });
                else Ub.push({
                  from: ab,
                  to: ab + bb.length
                });
                return
              }
              if (Tb.overlay) {
                let bb = Ub.length;
                if (Ab(Tb.tree, Tb.overlay[0].from + ab), Ub.length > bb) return
              }
            }
            for (let Ub = 0; Ub < bb.children.length; Ub++) {
              let Tb = bb.children[Ub];
              Tb instanceof Mb.z && Ab(Tb, bb.positions[Ub] + ab)
            }
          };
        return Ab(Rb(bb), 0), Ub
      }
      get allowsNesting() {
        return !0
      }
    }

    function Xb(bb, ab, Ub) {
      let Ab = bb.facet(Nb),
        Tb = Rb(bb).topNode;
      if (!Ab || Ab.allowsNesting)
        for (let Eb = Tb; Eb; Eb = Eb.enter(ab, Ub, Mb.g.ExcludeBuffers | Mb.g.EnterBracketed)) Eb.type.isTop && (Tb = Eb);
      return Tb
    }
    Pb.setState = Tb.B.define();
    class jb extends Pb {
      constructor(bb, ab, Ub) {
        super(bb, ab, [], Ub), this.parser = ab
      }
      static define(bb) {
        let ab = vb(bb.languageData);
        return new jb(ab, bb.parser.configure({
          props: [eb.add((bb => bb.isTop ? ab : void 0))]
        }), bb.name)
      }
      configure(bb, ab) {
        return new jb(this.data, this.parser.configure(bb), ab || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function Rb(bb) {
      let ab = bb.field(Pb.state, !1);
      return ab ? ab.tree : Mb.z.empty
    }

    function kb(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb.doc.length;
      var Ub;
      return (null === (Ub = bb.field(Pb.state, !1)) || void 0 === Ub ? void 0 : Ub.context.isDone(ab)) || !1
    }

    function yb(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb.viewport.to,
        Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        Ab = function(bb, ab) {
          let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var Ab;
          let Mb = null === (Ab = bb.field(Pb.state, !1)) || void 0 === Ab ? void 0 : Ab.context;
          if (!Mb) return null;
          let Tb = Mb.viewport;
          Mb.updateViewport({
            from: 0,
            to: ab
          });
          let Eb = Mb.isDone(ab) || Mb.work(Ub, ab) ? Mb.tree : null;
          return Mb.updateViewport(Tb), Eb
        }(bb.state, ab, Ub);
      return Ab != Rb(bb.state) && bb.dispatch({}), !!Ab
    }
    class Zb {
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
      read(bb, ab) {
        let Ub = this.cursorPos - this.string.length;
        return bb < Ub || ab >= this.cursorPos ? this.doc.sliceString(bb, ab) : this.string.slice(bb - Ub, ab - Ub)
      }
    }
    let Db = null;
    class zb {
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          Ab = arguments.length > 3 ? arguments[3] : void 0,
          Mb = arguments.length > 4 ? arguments[4] : void 0,
          Tb = arguments.length > 5 ? arguments[5] : void 0,
          Eb = arguments.length > 6 ? arguments[6] : void 0,
          Yb = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = bb, this.state = ab, this.fragments = Ub, this.tree = Ab, this.treeLen = Mb, this.viewport = Tb, this.skipped = Eb, this.scheduleOn = Yb, this.parse = null, this.tempSkipped = []
      }
      static create(bb, ab, Ub) {
        return new zb(bb, ab, [], Mb.z.empty, 0, Ub, [], null)
      }
      startParse() {
        return this.parser.startParse(new Zb(this.state.doc), this.fragments)
      }
      work(bb, ab) {
        return null != ab && ab >= this.state.doc.length && (ab = void 0), this.tree != Mb.z.empty && this.isDone(null !== ab && void 0 !== ab ? ab : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var Ub;
          if ("number" == typeof bb) {
            let ab = Date.now() + bb;
            bb = () => Date.now() > ab
          }
          for (this.parse || (this.parse = this.startParse()), null != ab && (null == this.parse.stoppedAt || this.parse.stoppedAt > ab) && ab < this.state.doc.length && this.parse.stopAt(ab);;) {
            let Ab = this.parse.advance();
            if (Ab) {
              if (this.fragments = this.withoutTempSkipped(Mb.w.addTree(Ab, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (Ub = this.parse.stoppedAt) && void 0 !== Ub ? Ub : this.state.doc.length, this.tree = Ab, this.parse = null, !(this.treeLen < (null !== ab && void 0 !== ab ? ab : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (bb()) return !1
          }
        }))
      }
      takeTree() {
        let bb, ab;
        this.parse && (bb = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > bb) && this.parse.stopAt(bb), this.withContext((() => {
          for (; !(ab = this.parse.advance()););
        })), this.treeLen = bb, this.tree = ab, this.fragments = this.withoutTempSkipped(Mb.w.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(bb) {
        let ab = Db;
        Db = this;
        try {
          return bb()
        } finally {
          Db = ab
        }
      }
      withoutTempSkipped(bb) {
        for (let ab; ab = this.tempSkipped.pop();) bb = xb(bb, ab.from, ab.to);
        return bb
      }
      changes(bb, ab) {
        let {
          fragments: Ub,
          tree: Ab,
          treeLen: Tb,
          viewport: Eb,
          skipped: Yb
        } = this;
        if (this.takeTree(), !bb.empty) {
          let ab = [];
          if (bb.iterChangedRanges(((bb, Ub, Ab, Mb) => ab.push({
              fromA: bb,
              toA: Ub,
              fromB: Ab,
              toB: Mb
            }))), Ub = Mb.w.applyChanges(Ub, ab), Ab = Mb.z.empty, Tb = 0, Eb = {
              from: bb.mapPos(Eb.from, -1),
              to: bb.mapPos(Eb.to, 1)
            }, this.skipped.length) {
            Yb = [];
            for (let ab of this.skipped) {
              let Ub = bb.mapPos(ab.from, 1),
                Ab = bb.mapPos(ab.to, -1);
              Ub < Ab && Yb.push({
                from: Ub,
                to: Ab
              })
            }
          }
        }
        return new zb(this.parser, ab, Ub, Ab, Tb, Eb, Yb, this.scheduleOn)
      }
      updateViewport(bb) {
        if (this.viewport.from == bb.from && this.viewport.to == bb.to) return !1;
        this.viewport = bb;
        let ab = this.skipped.length;
        for (let Ub = 0; Ub < this.skipped.length; Ub++) {
          let {
            from: ab,
            to: Ab
          } = this.skipped[Ub];
          ab < bb.to && Ab > bb.from && (this.fragments = xb(this.fragments, ab, Ab), this.skipped.splice(Ub--, 1))
        }
        return !(this.skipped.length >= ab) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(bb, ab) {
        this.skipped.push({
          from: bb,
          to: ab
        })
      }
      static getSkippingParser(bb) {
        return new class extends Mb.v {
          createParse(ab, Ub, Ab) {
            let Tb = Ab[0].from,
              Eb = Ab[Ab.length - 1].to;
            return {
              parsedPos: Tb,
              advance() {
                let ab = Db;
                if (ab) {
                  for (let bb of Ab) ab.tempSkipped.push(bb);
                  bb && (ab.scheduleOn = ab.scheduleOn ? Promise.all([ab.scheduleOn, bb]) : bb)
                }
                return this.parsedPos = Eb, new Mb.z(Mb.s.none, [], [], Eb - Tb)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(bb) {
        bb = Math.min(bb, this.state.doc.length);
        let ab = this.fragments;
        return this.treeLen >= bb && ab.length && 0 == ab[0].from && ab[0].to >= bb
      }
      static get() {
        return Db
      }
    }

    function xb(bb, ab, Ub) {
      return Mb.w.applyChanges(bb, [{
        fromA: ab,
        toA: Ub,
        fromB: ab,
        toB: Ub
      }])
    }
    class ib {
      constructor(bb) {
        this.context = bb, this.tree = bb.tree
      }
      apply(bb) {
        if (!bb.docChanged && this.tree == this.context.tree) return this;
        let ab = this.context.changes(bb.changes, bb.state),
          Ub = this.context.treeLen == bb.startState.doc.length ? void 0 : Math.max(bb.changes.mapPos(this.context.treeLen), ab.viewport.to);
        return ab.work(20, Ub) || ab.takeTree(), new ib(ab)
      }
      static init(bb) {
        let ab = Math.min(3e3, bb.doc.length),
          Ub = zb.create(bb.facet(Nb).parser, bb, {
            from: 0,
            to: ab
          });
        return Ub.work(20, ab) || Ub.takeTree(), new ib(Ub)
      }
    }
    Pb.state = Tb.E.define({
      create: ib.init,
      update(bb, ab) {
        for (let Ub of ab.effects)
          if (Ub.is(Pb.setState)) return Ub.value;
        return ab.startState.facet(Nb) != ab.state.facet(Nb) ? ib.init(ab.state) : bb.apply(ab)
      }
    });
    let fb = bb => {
      let ab = setTimeout((() => bb()), 500);
      return () => clearTimeout(ab)
    };
    "undefined" != typeof requestIdleCallback && (fb = bb => {
      let ab = -1,
        Ub = setTimeout((() => {
          ab = requestIdleCallback(bb, {
            timeout: 400
          })
        }), 100);
      return () => ab < 0 ? clearTimeout(Ub) : cancelIdleCallback(ab)
    });
    const mb = "undefined" != typeof navigator && (null === (Ab = navigator.scheduling) || void 0 === Ab ? void 0 : Ab.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      pb = Eb.k.fromClass(class {
        constructor(bb) {
          this.view = bb, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(bb) {
          let ab = this.view.state.field(Pb.state).context;
          (ab.updateViewport(bb.view.viewport) || this.view.viewport.to > ab.treeLen) && this.scheduleWork(), (bb.docChanged || bb.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(ab)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: bb
          } = this.view, ab = bb.field(Pb.state);
          ab.tree == ab.context.tree && ab.context.isDone(bb.doc.length) || (this.working = fb(this.work))
        }
        work(bb) {
          this.working = null;
          let ab = Date.now();
          if (this.chunkEnd < ab && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = ab + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: Ub,
            viewport: {
              to: Ab
            }
          } = this.view, Mb = Ub.field(Pb.state);
          if (Mb.tree == Mb.context.tree && Mb.context.isDone(Ab + 1e5)) return;
          let Tb = Date.now() + Math.min(this.chunkBudget, 100, bb && !mb ? Math.max(25, bb.timeRemaining() - 5) : 1e9),
            Eb = Mb.context.treeLen < Ab && Ub.doc.length > Ab + 1e3,
            Yb = Mb.context.work((() => mb && mb() || Date.now() > Tb), Ab + (Eb ? 0 : 1e5));
          this.chunkBudget -= Date.now() - ab, (Yb || this.chunkBudget <= 0) && (Mb.context.takeTree(), this.view.dispatch({
            effects: Pb.setState.of(new ib(Mb.context))
          })), this.chunkBudget > 0 && (!Yb || Eb) && this.scheduleWork(), this.checkAsyncSchedule(Mb.context)
        }
        checkAsyncSchedule(bb) {
          bb.scheduleOn && (this.workScheduled++, bb.scheduleOn.then((() => this.scheduleWork())).catch((bb => (0, Eb.T)(this.view.state, bb))).then((() => this.workScheduled--)), bb.scheduleOn = null)
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
      Nb = Tb.q.define({
        combine: bb => bb.length ? bb[0] : null,
        enables: bb => [Pb.state, pb, Eb.i.contentAttributes.compute([bb], (ab => {
          let Ub = ab.facet(bb);
          return Ub && Ub.name ? {
            "data-language": Ub.name
          } : {}
        }))]
      });
    class Wb {
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = bb, this.support = ab, this.extension = [bb, ab]
      }
    }
    const Hb = Tb.q.define(),
      Ib = Tb.q.define({
        combine: bb => {
          if (!bb.length) return "  ";
          let ab = bb[0];
          if (!ab || /\S/.test(ab) || Array.from(ab).some((bb => bb != ab[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(bb[0]));
          return ab
        }
      });

    function db(bb) {
      let ab = bb.facet(Ib);
      return 9 == ab.charCodeAt(0) ? bb.tabSize * ab.length : ab.length
    }

    function Fb(bb, ab) {
      let Ub = "",
        Ab = bb.tabSize,
        Mb = bb.facet(Ib)[0];
      if ("\t" == Mb) {
        for (; ab >= Ab;) Ub += "\t", ab -= Ab;
        Mb = " "
      }
      for (let Tb = 0; Tb < ab; Tb++) Ub += Mb;
      return Ub
    }

    function hb(bb, ab) {
      bb instanceof Tb.p && (bb = new Gb(bb));
      for (let Ab of bb.state.facet(Hb)) {
        let Ub = Ab(bb, ab);
        if (void 0 !== Ub) return Ub
      }
      let Ub = Rb(bb.state);
      return Ub.length >= ab ? function(bb, ab, Ub) {
        let Ab = ab.resolveStack(Ub),
          Mb = ab.resolveInner(Ub, -1).resolve(Ub, 0).enterUnfinishedNodesBefore(Ub);
        if (Mb != Ab.node) {
          let bb = [];
          for (let ab = Mb; ab && !(ab.from < Ab.node.from || ab.to > Ab.node.to || ab.from == Ab.node.from && ab.type == Ab.node.type); ab = ab.parent) bb.push(ab);
          for (let ab = bb.length - 1; ab >= 0; ab--) Ab = {
            node: bb[ab],
            next: Ab
          }
        }
        return qb(Ab, bb, Ub)
      }(bb, Ub, ab) : null
    }
    class Gb {
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = bb, this.options = ab, this.unit = db(bb)
      }
      lineAt(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Ub = this.state.doc.lineAt(bb),
          {
            simulateBreak: Ab,
            simulateDoubleBreak: Mb
          } = this.options;
        return null != Ab && Ab >= Ub.from && Ab <= Ub.to ? Mb && Ab == bb ? {
          text: "",
          from: bb
        } : (ab < 0 ? Ab < bb : Ab <= bb) ? {
          text: Ub.text.slice(Ab - Ub.from),
          from: Ab
        } : {
          text: Ub.text.slice(0, Ab - Ub.from),
          from: Ub.from
        } : Ub
      }
      textAfterPos(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && bb == this.options.simulateBreak) return "";
        let {
          text: Ub,
          from: Ab
        } = this.lineAt(bb, ab);
        return Ub.slice(bb - Ab, Math.min(Ub.length, bb + 100 - Ab))
      }
      column(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: Ub,
            from: Ab
          } = this.lineAt(bb, ab),
          Mb = this.countColumn(Ub, bb - Ab),
          Tb = this.options.overrideIndentation ? this.options.overrideIndentation(Ab) : -1;
        return Tb > -1 && (Mb += Tb - this.countColumn(Ub, Ub.search(/\S|$/))), Mb
      }
      countColumn(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb.length;
        return (0, Tb.R)(bb, this.state.tabSize, ab)
      }
      lineIndent(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: Ub,
            from: Ab
          } = this.lineAt(bb, ab),
          Mb = this.options.overrideIndentation;
        if (Mb) {
          let bb = Mb(Ab);
          if (bb > -1) return bb
        }
        return this.countColumn(Ub, Ub.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const Qb = new Mb.k;

    function qb(bb, ab, Ub) {
      for (let Ab = bb; Ab; Ab = Ab.next) {
        let bb = ub(Ab.node);
        if (bb) return bb(Kb.create(ab, Ub, Ab))
      }
      return 0
    }

    function ub(bb) {
      let ab = bb.type.prop(Qb);
      if (ab) return ab;
      let Ub, Ab = bb.firstChild;
      if (Ab && (Ub = Ab.type.prop(Mb.k.closedBy))) {
        let ab = bb.lastChild,
          Ab = ab && Ub.indexOf(ab.name) > -1;
        return bb => tb(bb, !0, 1, void 0, Ab && ! function(bb) {
          return bb.pos == bb.options.simulateBreak && bb.options.simulateDoubleBreak
        }(bb) ? ab.from : void 0)
      }
      return null == bb.parent ? rb : null
    }

    function rb() {
      return 0
    }
    class Kb extends Gb {
      constructor(bb, ab, Ub) {
        super(bb.state, bb.options), this.base = bb, this.pos = ab, this.context = Ub
      }
      get node() {
        return this.context.node
      }
      static create(bb, ab, Ub) {
        return new Kb(bb, ab, Ub)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(bb) {
        let ab = this.state.doc.lineAt(bb.from);
        for (;;) {
          let Ub = bb.resolve(ab.from);
          for (; Ub.parent && Ub.parent.from == Ub.from;) Ub = Ub.parent;
          if (ob(Ub, bb)) break;
          ab = this.state.doc.lineAt(Ub.from)
        }
        return this.lineIndent(ab.from)
      }
      continue () {
        return qb(this.context.next, this.base, this.pos)
      }
    }

    function ob(bb, ab) {
      for (let Ub = ab; Ub; Ub = Ub.parent)
        if (bb == Ub) return !0;
      return !1
    }

    function lb(bb) {
      let {
        closing: ab,
        align: Ub = !0,
        units: Ab = 1
      } = bb;
      return bb => tb(bb, Ub, Ab, ab)
    }

    function tb(bb, ab, Ub, Ab, Mb) {
      let Tb = bb.textAfter,
        Eb = Tb.match(/^\s*/)[0].length,
        Yb = Ab && Tb.slice(Eb, Eb + Ab.length) == Ab || Mb == bb.pos + Eb,
        Bb = ab ? function(bb) {
          let ab = bb.node,
            Ub = ab.childAfter(ab.from),
            Ab = ab.lastChild;
          if (!Ub) return null;
          let Mb = bb.options.simulateBreak,
            Tb = bb.state.doc.lineAt(Ub.from),
            Eb = null == Mb || Mb <= Tb.from ? Tb.to : Math.min(Tb.to, Mb);
          for (let Yb = Ub.to;;) {
            let bb = ab.childAfter(Yb);
            if (!bb || bb == Ab) return null;
            if (!bb.type.isSkipped) {
              if (bb.from >= Eb) return null;
              let ab = /^ */.exec(Tb.text.slice(Ub.to - Tb.from))[0].length;
              return {
                from: Ub.from,
                to: Ub.to + ab
              }
            }
            Yb = bb.to
          }
        }(bb) : null;
      return Bb ? Yb ? bb.column(Bb.from) : bb.column(Bb.to) : bb.baseIndent + (Yb ? 0 : bb.unit * Ub)
    }
    const wb = bb => bb.baseIndent;

    function sb() {
      let {
        except: bb,
        units: ab = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return Ub => {
        let Ab = bb && bb.test(Ub.textAfter);
        return Ub.baseIndent + (Ab ? 0 : ab * Ub.unit)
      }
    }
    const gb = 200;

    function Cb() {
      return Tb.p.transactionFilter.of((bb => {
        if (!bb.docChanged || !bb.isUserEvent("input.type") && !bb.isUserEvent("input.complete")) return bb;
        let ab = bb.startState.languageDataAt("indentOnInput", bb.startState.selection.main.head);
        if (!ab.length) return bb;
        let Ub = bb.newDoc,
          {
            head: Ab
          } = bb.newSelection.main,
          Mb = Ub.lineAt(Ab);
        if (Ab > Mb.from + gb) return bb;
        let Tb = Ub.sliceString(Mb.from, Ab);
        if (!ab.some((bb => bb.test(Tb)))) return bb;
        let {
          state: Eb
        } = bb, Yb = -1, Bb = [];
        for (let {
            head: eb
          }
          of Eb.selection.cj) {
          let bb = Eb.doc.lineAt(eb);
          if (bb.from == Yb) continue;
          Yb = bb.from;
          let ab = hb(Eb, bb.from);
          if (null == ab) continue;
          let Ub = /^\s*/.exec(bb.text)[0],
            Ab = Fb(Eb, ab);
          Ub != Ab && Bb.push({
            from: bb.from,
            to: bb.from + Ub.length,
            insert: Ab
          })
        }
        return Bb.length ? [bb, {
          changes: Bb,
          sequential: !0
        }] : bb
      }))
    }
    const Vb = Tb.q.define(),
      Ob = new Mb.k;

    function cb(bb) {
      let ab = bb.firstChild,
        Ub = bb.lastChild;
      return ab && ab.to < Ub.from ? {
        from: ab.to,
        to: Ub.type.isError ? bb.to : Ub.from
      } : null
    }

    function Jb(bb) {
      let ab = bb.lastChild;
      return ab && ab.to == bb.to && ab.type.isError
    }

    function nb(bb, ab, Ub) {
      for (let Ab of bb.facet(Vb)) {
        let Mb = Ab(bb, ab, Ub);
        if (Mb) return Mb
      }
      return function(bb, ab, Ub) {
        let Ab = Rb(bb);
        if (Ab.length < Ub) return null;
        let Mb = null;
        for (let Tb = Ab.resolveStack(Ub, 1); Tb; Tb = Tb.next) {
          let Eb = Tb.node;
          if (Eb.to <= Ub || Eb.from > Ub) continue;
          if (Mb && Eb.from < ab) break;
          let Yb = Eb.type.prop(Ob);
          if (Yb && (Eb.to < Ab.length - 50 || Ab.length == bb.doc.length || !Jb(Eb))) {
            let Ab = Yb(Eb, bb);
            Ab && Ab.from <= Ub && Ab.from >= ab && Ab.to > Ub && (Mb = Ab)
          }
        }
        return Mb
      }(bb, ab, Ub)
    }

    function Sb(bb, ab) {
      let Ub = ab.mapPos(bb.from, 1),
        Ab = ab.mapPos(bb.to, -1);
      return Ub >= Ab ? void 0 : {
        from: Ub,
        to: Ab
      }
    }
    const ba = Tb.B.define({
        map: Sb
      }),
      aa = Tb.B.define({
        map: Sb
      });

    function Ua(bb) {
      let ab = [];
      for (let {
          head: Ub
        }
        of bb.state.selection.cj) ab.some((bb => bb.from <= Ub && bb.to >= Ub)) || ab.push(bb.lineBlockAt(Ub));
      return ab
    }
    const Aa = Tb.E.define({
      create: () => Eb.d.none,
      update(bb, ab) {
        ab.isUserEvent("delete") && ab.changes.iterChangedRanges(((ab, Ub) => bb = Ma(bb, ab, Ub))), bb = bb.map(ab.changes);
        for (let Ub of ab.effects)
          if (Ub.is(ba) && !Ea(bb, Ub.value.from, Ub.value.to)) {
            let {
              preparePlaceholder: Ab
            } = ab.state.facet(La), Mb = Ab ? Eb.d.replace({
              widget: new Ra(Ab(ab.state, Ub.value))
            }) : ja;
            bb = bb.update({
              add: [Mb.range(Ub.value.from, Ub.value.to)]
            })
          } else Ub.is(aa) && (bb = bb.update({
            filter: (bb, ab) => Ub.value.from != bb || Ub.value.to != ab,
            filterFrom: Ub.value.from,
            filterTo: Ub.value.to
          }));
        return ab.selection && (bb = Ma(bb, ab.selection.main.head)), bb
      },
      provide: bb => Eb.i.hA.from(bb),
      toJSON(bb, ab) {
        let Ub = [];
        return bb.between(0, ab.doc.length, ((bb, ab) => {
          Ub.push(bb, ab)
        })), Ub
      },
      fromJSON(bb) {
        if (!Array.isArray(bb) || bb.length % 2) throw new RangeError("Invalid JSON for fold state");
        let ab = [];
        for (let Ub = 0; Ub < bb.length;) {
          let Ab = bb[Ub++],
            Mb = bb[Ub++];
          if ("number" != typeof Ab || "number" != typeof Mb) throw new RangeError("Invalid JSON for fold state");
          ab.push(ja.range(Ab, Mb))
        }
        return Eb.d.set(ab, !0)
      }
    });

    function Ma(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ab,
        Ab = !1;
      return bb.between(ab, Ub, ((bb, Mb) => {
        bb < Ub && Mb > ab && (Ab = !0)
      })), Ab ? bb.update({
        filterFrom: ab,
        filterTo: Ub,
        filter: (bb, Ab) => bb >= Ub || Ab <= ab
      }) : bb
    }

    function Ta(bb, ab, Ub) {
      var Ab;
      let Mb = null;
      return null === (Ab = bb.field(Aa, !1)) || void 0 === Ab || Ab.between(ab, Ub, ((bb, ab) => {
        (!Mb || Mb.from > bb) && (Mb = {
          from: bb,
          to: ab
        })
      })), Mb
    }

    function Ea(bb, ab, Ub) {
      let Ab = !1;
      return bb.between(ab, ab, ((bb, Mb) => {
        bb == ab && Mb == Ub && (Ab = !0)
      })), Ab
    }

    function Ya(bb, ab) {
      return bb.field(Aa, !1) ? ab : ab.concat(Tb.B.appendConfig.of(Pa()))
    }

    function Ba(bb, ab) {
      let Ub = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        Ab = bb.state.doc.lineAt(ab.from).number,
        Mb = bb.state.doc.lineAt(ab.to).number;
      return Eb.i.announce.of(`${bb.state.phrase(Ub?"Folded lines":"Unfolded lines")} ${Ab} ${bb.state.phrase("to")} ${Mb}.`)
    }
    const ea = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: bb => {
          for (let ab of Ua(bb)) {
            let Ub = nb(bb.state, ab.from, ab.to);
            if (Ub) return bb.dispatch({
              effects: Ya(bb.state, [ba.of(Ub), Ba(bb, Ub)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: bb => {
          if (!bb.state.field(Aa, !1)) return !1;
          let ab = [];
          for (let Ub of Ua(bb)) {
            let Ab = Ta(bb.state, Ub.from, Ub.to);
            Ab && ab.push(aa.of(Ab), Ba(bb, Ab, !1))
          }
          return ab.length && bb.dispatch({
            effects: ab
          }), ab.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: bb => {
          let {
            state: ab
          } = bb, Ub = [];
          for (let Ab = 0; Ab < ab.doc.length;) {
            let Mb = bb.lineBlockAt(Ab),
              Tb = nb(ab, Mb.from, Mb.to);
            Tb && Ub.push(ba.of(Tb)), Ab = (Tb ? bb.lineBlockAt(Tb.to) : Mb).to + 1
          }
          return Ub.length && bb.dispatch({
            effects: Ya(bb.state, Ub)
          }), !!Ub.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: bb => {
          let ab = bb.state.field(Aa, !1);
          if (!ab || !ab.size) return !1;
          let Ub = [];
          return ab.between(0, bb.state.doc.length, ((bb, ab) => {
            Ub.push(aa.of({
              from: bb,
              to: ab
            }))
          })), bb.dispatch({
            effects: Ub
          }), !0
        }
      }],
      va = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      La = Tb.q.define({
        combine: bb => (0, Tb.O)(bb, va)
      });

    function Pa(bb) {
      let ab = [Aa, Da];
      return bb && ab.push(La.of(bb)), ab
    }

    function Xa(bb, ab) {
      let {
        state: Ub
      } = bb, Ab = Ub.facet(La), Mb = ab => {
        let Ub = bb.lineBlockAt(bb.posAtDOM(ab.target)),
          Ab = Ta(bb.state, Ub.from, Ub.to);
        Ab && bb.dispatch({
          effects: aa.of(Ab)
        }), ab.preventDefault()
      };
      if (Ab.placeholderDOM) return Ab.placeholderDOM(bb, Mb, ab);
      let Tb = document.createElement("span");
      return Tb.textContent = Ab.placeholderText, Tb.setAttribute("aria-label", Ub.phrase("folded code")), Tb.title = Ub.phrase("unfold"), Tb.className = "cm-foldPlaceholder", Tb.onclick = Mb, Tb
    }
    const ja = Eb.d.replace({
      widget: new class extends Eb.m {
        toDOM(bb) {
          return Xa(bb, null)
        }
      }
    });
    class Ra extends Eb.m {
      constructor(bb) {
        super(), this.value = bb
      }
      eq(bb) {
        return this.value == bb.value
      }
      toDOM(bb) {
        return Xa(bb, this.value)
      }
    }
    const ka = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class ya extends Eb.j {
      constructor(bb, ab) {
        super(), this.config = bb, this.open = ab
      }
      eq(bb) {
        return this.config == bb.config && this.open == bb.open
      }
      toDOM(bb) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let ab = document.createElement("span");
        return ab.textContent = this.open ? this.config.openText : this.config.closedText, ab.title = bb.state.phrase(this.open ? "Fold line" : "Unfold line"), ab
      }
    }

    function Za() {
      let bb = {
          ...ka,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        ab = new ya(bb, !0),
        Ub = new ya(bb, !1),
        Ab = Eb.k.fromClass(class {
          constructor(bb) {
            this.from = bb.viewport.from, this.markers = this.buildMarkers(bb)
          }
          update(ab) {
            (ab.docChanged || ab.viewportChanged || ab.startState.facet(Nb) != ab.state.facet(Nb) || ab.startState.field(Aa, !1) != ab.state.field(Aa, !1) || Rb(ab.startState) != Rb(ab.state) || bb.foldingChanged(ab)) && (this.markers = this.buildMarkers(ab.view))
          }
          buildMarkers(bb) {
            let Ab = new Tb.x;
            for (let Mb of bb.viewportLineBlocks) {
              let Tb = Ta(bb.state, Mb.from, Mb.to) ? Ub : nb(bb.state, Mb.from, Mb.to) ? ab : null;
              Tb && Ab.add(Mb.from, Mb.from, Tb)
            }
            return Ab.finish()
          }
        }),
        {
          domEventHandlers: Mb
        } = bb;
      return [Ab, (0, Eb.C)({
        class: "cm-foldGutter",
        markers(bb) {
          var ab;
          return (null === (ab = bb.plugin(Ab)) || void 0 === ab ? void 0 : ab.markers) || Tb.y.empty
        },
        initialSpacer: () => new ya(bb, !1),
        domEventHandlers: {
          ...Mb,
          click: (bb, ab, Ub) => {
            if (Mb.click && Mb.click(bb, ab, Ub)) return !0;
            let Ab = Ta(bb.state, ab.from, ab.to);
            if (Ab) return bb.dispatch({
              effects: aa.of(Ab)
            }), !0;
            let Tb = nb(bb.state, ab.from, ab.to);
            return !!Tb && (bb.dispatch({
              effects: ba.of(Tb)
            }), !0)
          }
        }
      }), Pa()]
    }
    const Da = Eb.i.baseTheme({
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
    class za {
      constructor(bb, ab) {
        let Ub;

        function Ab(bb) {
          let ab = Bb.d.newName();
          return (Ub || (Ub = Object.create(null)))["." + ab] = bb, ab
        }
        this.specs = bb;
        const Mb = "string" == typeof ab.all ? ab.all : ab.all ? Ab(ab.all) : void 0,
          Tb = ab.scope;
        this.scope = Tb instanceof Pb ? bb => bb.prop(eb) == Tb.data : Tb ? bb => bb == Tb : void 0, this.style = (0, Yb.e)(bb.map((bb => ({
          tag: bb.tag,
          class: bb.class || Ab(Object.assign({}, bb, {
            tag: null
          }))
        }))), {
          all: Mb
        }).style, this.module = Ub ? new Bb.d(Ub) : null, this.themeType = ab.themeType
      }
      static define(bb, ab) {
        return new za(bb, ab || {})
      }
    }
    const xa = Tb.q.define(),
      ia = Tb.q.define({
        combine: bb => bb.length ? [bb[0]] : null
      });

    function fa(bb) {
      let ab = bb.facet(xa);
      return ab.length ? ab : bb.facet(ia)
    }

    function ma(bb, ab) {
      let Ub, Ab = [Na];
      return bb instanceof za && (bb.module && Ab.push(Eb.i.styleModule.of(bb.module)), Ub = bb.themeType), (null === ab || void 0 === ab ? void 0 : ab.fallback) ? Ab.push(ia.of(bb)) : Ub ? Ab.push(xa.computeN([Eb.i.darkTheme], (ab => ab.facet(Eb.i.darkTheme) == ("dark" == Ub) ? [bb] : []))) : Ab.push(xa.of(bb)), Ab
    }
    class pa {
      constructor(bb) {
        this.markCache = Object.create(null), this.tree = Rb(bb.state), this.hA = this.buildDeco(bb, fa(bb.state)), this.decoratedTo = bb.viewport.to
      }
      update(bb) {
        let ab = Rb(bb.state),
          Ub = fa(bb.state),
          Ab = Ub != fa(bb.startState),
          {
            viewport: Mb
          } = bb.view,
          Tb = bb.changes.mapPos(this.decoratedTo, 1);
        ab.length < Mb.to && !Ab && ab.type == this.tree.type && Tb >= Mb.to ? (this.hA = this.hA.map(bb.changes), this.decoratedTo = Tb) : (ab != this.tree || bb.viewportChanged || Ab) && (this.tree = ab, this.hA = this.buildDeco(bb.view, Ub), this.decoratedTo = Mb.to)
      }
      buildDeco(bb, ab) {
        if (!ab || !this.tree.length) return Eb.d.none;
        let Ub = new Tb.x;
        for (let {
            from: Ab,
            to: Mb
          }
          of bb.W4)(0, Yb.c)(this.tree, ab, ((bb, ab, Ab) => {
          Ub.add(bb, ab, this.markCache[Ab] || (this.markCache[Ab] = Eb.d.mark({
            class: Ab
          })))
        }), Ab, Mb);
        return Ub.finish()
      }
    }
    const Na = Tb.u.high(Eb.k.fromClass(pa, {
        hA: bb => bb.hA
      })),
      Wa = za.define([{
        tag: Yb.h.meta,
        color: "#404740"
      }, {
        tag: Yb.h.link,
        textDecoration: "underline"
      }, {
        tag: Yb.h.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: Yb.h.emphasis,
        fontStyle: "italic"
      }, {
        tag: Yb.h.strong,
        fontWeight: "bold"
      }, {
        tag: Yb.h.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: Yb.h.keyword,
        color: "#708"
      }, {
        tag: [Yb.h.atom, Yb.h.bool, Yb.h.url, Yb.h.contentSeparator, Yb.h.labelName],
        color: "#219"
      }, {
        tag: [Yb.h.literal, Yb.h.inserted],
        color: "#164"
      }, {
        tag: [Yb.h.string, Yb.h.deleted],
        color: "#a11"
      }, {
        tag: [Yb.h.regexp, Yb.h.escape, Yb.h.special(Yb.h.string)],
        color: "#e40"
      }, {
        tag: Yb.h.definition(Yb.h.variableName),
        color: "#00f"
      }, {
        tag: Yb.h.local(Yb.h.variableName),
        color: "#30a"
      }, {
        tag: [Yb.h.typeName, Yb.h.namespace],
        color: "#085"
      }, {
        tag: Yb.h.className,
        color: "#167"
      }, {
        tag: [Yb.h.special(Yb.h.variableName), Yb.h.macroName],
        color: "#256"
      }, {
        tag: Yb.h.definition(Yb.h.propertyName),
        color: "#00c"
      }, {
        tag: Yb.h.comment,
        color: "#940"
      }, {
        tag: Yb.h.invalid,
        color: "#f00"
      }]),
      Ha = Eb.i.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      Ia = 1e4,
      da = "()[]{}",
      Fa = Tb.q.define({
        combine: bb => (0, Tb.O)(bb, {
          afterCursor: !0,
          brackets: da,
          maxScanDistance: Ia,
          renderMatch: Qa
        })
      }),
      ha = Eb.d.mark({
        class: "cm-matchingBracket"
      }),
      Ga = Eb.d.mark({
        class: "cm-nonmatchingBracket"
      });

    function Qa(bb) {
      let ab = [],
        Ub = bb.matched ? ha : Ga;
      return ab.push(Ub.range(bb.start.from, bb.start.to)), bb.end && ab.push(Ub.range(bb.end.from, bb.end.to)), ab
    }

    function qa(bb) {
      let ab = [],
        Ub = bb.facet(Fa);
      for (let Ab of bb.selection.cj) {
        if (!Ab.empty) continue;
        let Mb = ta(bb, Ab.head, -1, Ub) || Ab.head > 0 && ta(bb, Ab.head - 1, 1, Ub) || Ub.afterCursor && (ta(bb, Ab.head, 1, Ub) || Ab.head < bb.doc.length && ta(bb, Ab.head + 1, -1, Ub));
        Mb && (ab = ab.concat(Ub.renderMatch(Mb, bb)))
      }
      return Eb.d.set(ab, !0)
    }
    const ua = [Eb.k.fromClass(class {
      constructor(bb) {
        this.paused = !1, this.hA = qa(bb.state)
      }
      update(bb) {
        (bb.docChanged || bb.selectionSet || this.paused) && (bb.view.composing ? (this.hA = this.hA.map(bb.changes), this.paused = !0) : (this.hA = qa(bb.state), this.paused = !1))
      }
    }, {
      hA: bb => bb.hA
    }), Ha];

    function ra() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Fa.of(bb), ua]
    }
    const Ka = new Mb.k;

    function oa(bb, ab, Ub) {
      let Ab = bb.prop(ab < 0 ? Mb.k.openedBy : Mb.k.closedBy);
      if (Ab) return Ab;
      if (1 == bb.name.length) {
        let Ab = Ub.indexOf(bb.name);
        if (Ab > -1 && Ab % 2 == (ab < 0 ? 1 : 0)) return [Ub[Ab + ab]]
      }
      return null
    }

    function la(bb) {
      let ab = bb.type.prop(Ka);
      return ab ? ab(bb.node) : bb
    }

    function ta(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        Mb = Ab.maxScanDistance || Ia,
        Tb = Ab.brackets || da,
        Eb = Rb(bb),
        Yb = Eb.resolveInner(ab, Ub);
      for (let Bb = Yb; Bb; Bb = Bb.parent) {
        let Ab = oa(Bb.type, Ub, Tb);
        if (Ab && Bb.from < Bb.to) {
          let Mb = la(Bb);
          if (Mb && (Ub > 0 ? ab >= Mb.from && ab < Mb.to : ab > Mb.from && ab <= Mb.to)) return wa(bb, ab, Ub, Bb, Mb, Ab, Tb)
        }
      }
      return function(bb, ab, Ub, Ab, Mb, Tb, Eb) {
        if (Ub < 0 ? !ab : ab == bb.doc.length) return null;
        let Yb = Ub < 0 ? bb.sliceDoc(ab - 1, ab) : bb.sliceDoc(ab, ab + 1),
          Bb = Eb.indexOf(Yb);
        if (Bb < 0 || Bb % 2 == 0 != Ub > 0) return null;
        let eb = {
            from: Ub < 0 ? ab - 1 : ab,
            to: Ub > 0 ? ab + 1 : ab
          },
          vb = bb.doc.iterRange(ab, Ub > 0 ? bb.doc.length : 0),
          Lb = 0;
        for (let Pb = 0; !vb.next().done && Pb <= Tb;) {
          let bb = vb.value;
          Ub < 0 && (Pb += bb.length);
          let Tb = ab + Pb * Ub;
          for (let ab = Ub > 0 ? 0 : bb.length - 1, Yb = Ub > 0 ? bb.length : -1; ab != Yb; ab += Ub) {
            let Yb = Eb.indexOf(bb[ab]);
            if (!(Yb < 0 || Ab.resolveInner(Tb + ab, 1).type != Mb))
              if (Yb % 2 == 0 == Ub > 0) Lb++;
              else {
                if (1 == Lb) return {
                  start: eb,
                  end: {
                    from: Tb + ab,
                    to: Tb + ab + 1
                  },
                  matched: Yb >> 1 == Bb >> 1
                };
                Lb--
              }
          }
          Ub > 0 && (Pb += bb.length)
        }
        return vb.done ? {
          start: eb,
          matched: !1
        } : null
      }(bb, ab, Ub, Eb, Yb.type, Mb, Tb)
    }

    function wa(bb, ab, Ub, Ab, Mb, Tb, Eb) {
      let Yb = Ab.parent,
        Bb = {
          from: Mb.from,
          to: Mb.to
        },
        eb = 0,
        vb = null === Yb || void 0 === Yb ? void 0 : Yb.cursor();
      if (vb && (Ub < 0 ? vb.childBefore(Ab.from) : vb.childAfter(Ab.to)))
        do {
          if (Ub < 0 ? vb.to <= Ab.from : vb.from >= Ab.to) {
            if (0 == eb && Tb.indexOf(vb.type.name) > -1 && vb.from < vb.to) {
              let bb = la(vb);
              return {
                start: Bb,
                end: bb ? {
                  from: bb.from,
                  to: bb.to
                } : void 0,
                matched: !0
              }
            }
            if (oa(vb.type, Ub, Eb)) eb++;
            else if (oa(vb.type, -Ub, Eb)) {
              if (0 == eb) {
                let bb = la(vb);
                return {
                  start: Bb,
                  end: bb && bb.from < bb.to ? {
                    from: bb.from,
                    to: bb.to
                  } : void 0,
                  matched: !1
                }
              }
              eb--
            }
          }
        } while (Ub < 0 ? vb.prevSibling() : vb.nextSibling());
      return {
        start: Bb,
        matched: !1
      }
    }
    const sa = Object.create(null),
      ga = [Mb.s.none],
      Ca = [],
      Va = Object.create(null),
      Oa = Object.create(null);
    for (let [na, Sa] of [
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
      ]) Oa[na] = Ja(sa, Sa);

    function ca(bb, ab) {
      Ca.indexOf(bb) > -1 || (Ca.push(bb), console.warn(ab))
    }

    function Ja(bb, ab) {
      let Ub = [];
      for (let Mb of ab.split(" ")) {
        let ab = [];
        for (let Ub of Mb.split(".")) {
          let Ab = bb[Ub] || Yb.h[Ub];
          Ab ? "function" == typeof Ab ? ab.length ? ab = ab.map(Ab) : ca(Ub, `Modifier ${Ub} used at start of tag`) : ab.length ? ca(Ub, `Tag ${Ub} used as modifier`) : ab = Array.isArray(Ab) ? Ab : [Ab] : ca(Ub, `Unknown highlighting tag ${Ub}`)
        }
        for (let bb of ab) Ub.push(bb)
      }
      if (!Ub.length) return 0;
      let Ab = ab.replace(/ /g, "_"),
        Tb = Ab + " " + Ub.map((bb => bb.id)),
        Eb = Va[Tb];
      if (Eb) return Eb.id;
      let Bb = Va[Tb] = Mb.s.define({
        id: ga.length,
        name: Ab,
        props: [(0, Yb.d)({
          [Ab]: Ub
        })]
      });
      return ga.push(Bb), Bb.id
    }
    Eb.e.RTL, Eb.e.LTR
  },
  40463: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Db,
      f: () => fb
    });
    var Ab = Ub(40419),
      Mb = Ub(40415),
      Tb = Ub(40434);
    class Eb {
      constructor(bb, ab, Ub) {
        this.from = bb, this.to = ab, this.diagnostic = Ub
      }
    }
    class Yb {
      constructor(bb, ab, Ub) {
        this.diagnostics = bb, this.panel = ab, this.selected = Ub
      }
      static init(bb, ab, Ub) {
        let Tb = Ub.facet(xb).markerFilter;
        Tb && (bb = Tb(bb, Ub));
        let Eb = bb.slice().sort(((bb, ab) => bb.from - ab.from || bb.to - ab.to)),
          eb = new Mb.x,
          vb = [],
          Lb = 0,
          Pb = Ub.doc.iter(),
          Xb = 0,
          jb = Ub.doc.length;
        for (let Mb = 0;;) {
          let bb, ab, Ub = Mb == Eb.length ? null : Eb[Mb];
          if (!Ub && !vb.length) break;
          if (vb.length) bb = Lb, ab = vb.reduce(((bb, ab) => Math.min(bb, ab.to)), Ub && Ub.from > bb ? Ub.from : 1e8);
          else {
            if (bb = Ub.from, bb > jb) break;
            ab = Ub.to, vb.push(Ub), Mb++
          }
          for (; Mb < Eb.length;) {
            let Ub = Eb[Mb];
            if (Ub.from != bb || !(Ub.to > Ub.from || Ub.to == bb)) {
              ab = Math.min(Ub.from, ab);
              break
            }
            vb.push(Ub), Mb++, ab = Math.min(Ub.to, ab)
          }
          ab = Math.min(ab, jb);
          let Tb = !1;
          if (vb.some((Ub => Ub.from == bb && (Ub.to == ab || ab == jb))) && (Tb = bb == ab, !Tb && ab - bb < 10)) {
            let Ub = bb - (Xb + Pb.value.length);
            Ub > 0 && (Pb.next(Ub), Xb = bb);
            for (let Ab = bb;;) {
              if (Ab >= ab) {
                Tb = !0;
                break
              }
              if (!Pb.lineBreak && Xb + Pb.value.length > Ab) break;
              Ab = Xb + Pb.value.length, Xb += Pb.value.length, Pb.next()
            }
          }
          let Yb = Gb(vb);
          if (Tb) eb.add(bb, bb, Ab.d.widget({
            widget: new Nb(Yb),
            diagnostics: vb.slice()
          }));
          else {
            let Ub = vb.reduce(((bb, ab) => ab.markClass ? bb + " " + ab.markClass : bb), "");
            eb.add(bb, ab, Ab.d.mark({
              class: "cm-lintRange cm-lintRange-" + Yb + Ub,
              diagnostics: vb.slice(),
              inclusiveEnd: vb.some((bb => bb.to > ab))
            }))
          }
          if (Lb = ab, Lb == jb) break;
          for (let Ab = 0; Ab < vb.length; Ab++) vb[Ab].to <= Lb && vb.splice(Ab--, 1)
        }
        let Rb = eb.finish();
        return new Yb(Rb, ab, Bb(Rb))
      }
    }

    function Bb(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Ab = null;
      return bb.between(Ub, 1e9, ((bb, Ub, Mb) => {
        let {
          spec: Tb
        } = Mb;
        if (!(ab && Tb.diagnostics.indexOf(ab) < 0))
          if (Ab) {
            if (Tb.diagnostics.indexOf(Ab.diagnostic) < 0) return !1;
            Ab = new Eb(Ab.from, Ub, Ab.diagnostic)
          } else Ab = new Eb(bb, Ub, ab || Tb.diagnostics[0])
      })), Ab
    }

    function eb(bb, ab) {
      let Ub = ab.pos,
        Ab = ab.end || Ub,
        Mb = bb.state.facet(xb).hideOn(bb, Ub, Ab);
      if (null != Mb) return Mb;
      let Tb = bb.startState.doc.lineAt(ab.pos);
      return !(!bb.effects.some((bb => bb.is(Lb))) && !bb.changes.touchesRange(Tb.from, Math.max(Tb.to, Ab)))
    }

    function vb(bb, ab) {
      return bb.field(jb, !1) ? ab : ab.concat(Mb.B.appendConfig.of(Qb))
    }
    const Lb = Mb.B.define(),
      Pb = Mb.B.define(),
      Xb = Mb.B.define(),
      jb = Mb.E.define({
        create: () => new Yb(Ab.d.none, null, null),
        update(bb, ab) {
          if (ab.docChanged && bb.diagnostics.size) {
            let Ub = bb.diagnostics.map(ab.changes),
              Ab = null,
              Mb = bb.panel;
            if (bb.selected) {
              let Mb = ab.changes.mapPos(bb.selected.from, 1);
              Ab = Bb(Ub, bb.selected.diagnostic, Mb) || Bb(Ub, null, Mb)
            }!Ub.size && Mb && ab.state.facet(xb).autoPanel && (Mb = null), bb = new Yb(Ub, Mb, Ab)
          }
          for (let Ub of ab.effects)
            if (Ub.is(Lb)) {
              let Ab = ab.state.facet(xb).autoPanel ? Ub.value.length ? Hb.open : null : bb.panel;
              bb = Yb.init(Ub.value, Ab, ab.state)
            } else Ub.is(Pb) ? bb = new Yb(bb.diagnostics, Ub.value ? Hb.open : null, bb.selected) : Ub.is(Xb) && (bb = new Yb(bb.diagnostics, bb.panel, Ub.value));
          return bb
        },
        provide: bb => [Ab._.from(bb, (bb => bb.panel)), Ab.i.hA.from(bb, (bb => bb.diagnostics))]
      });
    const Rb = Ab.d.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function kb(bb, ab, Ub) {
      let Ab, {
          diagnostics: Mb
        } = bb.state.field(jb),
        Tb = -1,
        Eb = -1;
      Mb.between(ab - (Ub < 0 ? 1 : 0), ab + (Ub > 0 ? 1 : 0), ((bb, Mb, Yb) => {
        let {
          spec: Bb
        } = Yb;
        if (ab >= bb && ab <= Mb && (bb == Mb || (ab > bb || Ub > 0) && (ab < Mb || Ub < 0))) return Ab = Bb.diagnostics, Tb = bb, Eb = Mb, !1
      }));
      let Yb = bb.state.facet(xb).tooltipFilter;
      return Ab && Yb && (Ab = Yb(Ab, bb.state)), Ab ? {
        pos: Tb,
        end: Eb,
        above: bb.state.doc.lineAt(Tb).to < Eb,
        create: () => ({
          dom: yb(bb, Ab)
        })
      } : null
    }

    function yb(bb, ab) {
      return (0, Tb.c)("ul", {
        class: "cm-tooltip-lint"
      }, ab.map((ab => pb(bb, ab, !1))))
    }
    const Zb = bb => {
        let ab = bb.state.field(jb, !1);
        return !(!ab || !ab.panel) && (bb.dispatch({
          effects: Pb.of(!1)
        }), !0)
      },
      Db = [{
        key: "Mod-Shift-m",
        run: bb => {
          let ab = bb.state.field(jb, !1);
          ab && ab.panel || bb.dispatch({
            effects: vb(bb.state, [Pb.of(!0)])
          });
          let Ub = (0, Ab.w)(bb, Hb.open);
          return Ub && Ub.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: bb => {
          let ab = bb.state.field(jb, !1);
          if (!ab) return !1;
          let Ub = bb.state.selection.main,
            Ab = Bb(ab.diagnostics, null, Ub.to + 1);
          return !(!Ab && (Ab = Bb(ab.diagnostics, null, 0), !Ab || Ab.from == Ub.from && Ab.to == Ub.to)) && (bb.dispatch({
            selection: {
              anchor: Ab.from,
              head: Ab.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      zb = Ab.k.fromClass(class {
        constructor(bb) {
          this.view = bb, this.timeout = -1, this.set = !0;
          let {
            delay: ab
          } = bb.state.facet(xb);
          this.lintTime = Date.now() + ab, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, ab)
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
              sources: ab
            } = bb.facet(xb);
            ab.length && function(bb, ab, Ub) {
              let Ab = [],
                Mb = -1;
              for (let Tb of bb) Tb.then((Ub => {
                Ab.push(Ub), clearTimeout(Mb), Ab.length == bb.length ? ab(Ab) : Mb = setTimeout((() => ab(Ab)), 200)
              }), Ub)
            }(ab.map((bb => Promise.resolve(bb(this.view)))), (ab => {
              this.view.state.doc == bb.doc && this.view.dispatch(function(bb, ab) {
                return {
                  effects: vb(bb, [Lb.of(ab)])
                }
              }(this.view.state, ab.reduce(((bb, ab) => bb.concat(ab)))))
            }), (bb => {
              (0, Ab.T)(this.view.state, bb)
            }))
          }
        }
        update(bb) {
          let ab = bb.state.facet(xb);
          (bb.docChanged || ab != bb.startState.facet(xb) || ab.needsRefresh && ab.needsRefresh(bb)) && (this.lintTime = Date.now() + ab.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, ab.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const xb = Mb.q.define({
      combine: bb => ({
        sources: bb.map((bb => bb.source)).filter((bb => null != bb)),
        ...(0, Mb.O)(bb.map((bb => bb.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: ib,
          tooltipFilter: ib,
          needsRefresh: (bb, ab) => bb ? ab ? Ub => bb(Ub) || ab(Ub) : bb : ab,
          hideOn: (bb, ab) => bb ? ab ? (Ub, Ab, Mb) => bb(Ub, Ab, Mb) || ab(Ub, Ab, Mb) : bb : ab,
          autoPanel: (bb, ab) => bb || ab
        })
      })
    });

    function ib(bb, ab) {
      return bb ? ab ? (Ub, Ab) => ab(bb(Ub, Ab), Ab) : bb : ab
    }

    function fb(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [xb.of({
        source: bb,
        config: ab
      }), zb, Qb]
    }

    function mb(bb) {
      let ab = [];
      if (bb) bb: for (let {
          name: Ub
        }
        of bb) {
        for (let bb = 0; bb < Ub.length; bb++) {
          let Ab = Ub[bb];
          if (/[a-zA-Z]/.test(Ab) && !ab.some((bb => bb.toLowerCase() == Ab.toLowerCase()))) {
            ab.push(Ab);
            continue bb
          }
        }
        ab.push("")
      }
      return ab
    }

    function pb(bb, ab, Ub) {
      var Ab;
      let Mb = Ub ? mb(ab.actions) : [];
      return (0, Tb.c)("li", {
        class: "cm-diagnostic cm-diagnostic-" + ab.severity
      }, (0, Tb.c)("span", {
        class: "cm-diagnosticText"
      }, ab.renderMessage ? ab.renderMessage(bb) : ab.message), null === (Ab = ab.actions) || void 0 === Ab ? void 0 : Ab.map(((Ub, Ab) => {
        let Eb = !1,
          Yb = Ab => {
            if (Ab.preventDefault(), Eb) return;
            Eb = !0;
            let Mb = Bb(bb.state.field(jb).diagnostics, ab);
            Mb && Ub.apply(bb, Mb.from, Mb.to)
          },
          {
            name: eb
          } = Ub,
          vb = Mb[Ab] ? eb.indexOf(Mb[Ab]) : -1,
          Lb = vb < 0 ? eb : [eb.slice(0, vb), (0, Tb.c)("u", eb.slice(vb, vb + 1)), eb.slice(vb + 1)],
          Pb = Ub.markClass ? " " + Ub.markClass : "";
        return (0, Tb.c)("button", {
          type: "button",
          class: "cm-diagnosticAction" + Pb,
          onclick: Yb,
          onmousedown: Yb,
          "aria-label": ` Action: ${eb}${vb<0?"":` (access key "${Mb[Ab]})"`}.`
        }, Lb)
      })), ab.source && (0, Tb.c)("div", {
        class: "cm-diagnosticSource"
      }, ab.source))
    }
    class Nb extends Ab.m {
      constructor(bb) {
        super(), this.sev = bb
      }
      eq(bb) {
        return bb.sev == this.sev
      }
      toDOM() {
        return (0, Tb.c)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class Wb {
      constructor(bb, ab) {
        this.diagnostic = ab, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = pb(bb, ab, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class Hb {
      constructor(bb) {
        this.view = bb, this.items = [];
        this.list = (0, Tb.c)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: ab => {
            if (!(ab.ctrlKey || ab.altKey || ab.metaKey)) {
              if (27 == ab.keyCode) Zb(this.view), this.view.focus();
              else if (38 == ab.keyCode || 33 == ab.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == ab.keyCode || 34 == ab.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == ab.keyCode) this.moveSelection(0);
              else if (35 == ab.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == ab.keyCode) this.view.focus();
              else {
                if (!(ab.keyCode >= 65 && ab.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: Ub
                  } = this.items[this.selectedIndex], Ab = mb(Ub.actions);
                  for (let Mb = 0; Mb < Ab.length; Mb++)
                    if (Ab[Mb].toUpperCase().charCodeAt(0) == ab.keyCode) {
                      let ab = Bb(this.view.state.field(jb).diagnostics, Ub);
                      ab && Ub.actions[Mb].apply(bb, ab.from, ab.to)
                    }
                }
              }
              ab.preventDefault()
            }
          },
          onclick: bb => {
            for (let ab = 0; ab < this.items.length; ab++) this.items[ab].dom.contains(bb.target) && this.moveSelection(ab)
          }
        }), this.dom = (0, Tb.c)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, Tb.c)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => Zb(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let bb = this.view.state.field(jb).selected;
        if (!bb) return -1;
        for (let ab = 0; ab < this.items.length; ab++)
          if (this.items[ab].diagnostic == bb.diagnostic) return ab;
        return -1
      }
      update() {
        let {
          diagnostics: bb,
          selected: ab
        } = this.view.state.field(jb), Ub = 0, Ab = !1, Mb = null, Tb = new Set;
        for (bb.between(0, this.view.state.doc.length, ((bb, Eb, Yb) => {
            let {
              spec: Bb
            } = Yb;
            for (let eb of Bb.diagnostics) {
              if (Tb.has(eb)) continue;
              Tb.add(eb);
              let bb, Eb = -1;
              for (let ab = Ub; ab < this.items.length; ab++)
                if (this.items[ab].diagnostic == eb) {
                  Eb = ab;
                  break
                } Eb < 0 ? (bb = new Wb(this.view, eb), this.items.splice(Ub, 0, bb), Ab = !0) : (bb = this.items[Eb], Eb > Ub && (this.items.splice(Ub, Eb - Ub), Ab = !0)), ab && bb.diagnostic == ab.diagnostic ? bb.dom.hasAttribute("aria-selected") || (bb.dom.setAttribute("aria-selected", "true"), Mb = bb) : bb.dom.hasAttribute("aria-selected") && bb.dom.removeAttribute("aria-selected"), Ub++
            }
          })); Ub < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) Ab = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new Wb(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), Ab = !0), Mb ? (this.list.setAttribute("aria-activedescendant", Mb.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: Mb.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: bb => {
            let {
              sel: ab,
              panel: Ub
            } = bb, Ab = Ub.height / this.list.offsetHeight;
            ab.top < Ub.top ? this.list.scrollTop -= (Ub.top - ab.top) / Ab : ab.bottom > Ub.bottom && (this.list.scrollTop += (ab.bottom - Ub.bottom) / Ab)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), Ab && this.sync()
      }
      sync() {
        let bb = this.list.firstChild;

        function ab() {
          let ab = bb;
          bb = ab.nextSibling, ab.remove()
        }
        for (let Ub of this.items)
          if (Ub.dom.parentNode == this.list) {
            for (; bb != Ub.dom;) ab();
            bb = Ub.dom.nextSibling
          } else this.list.insertBefore(Ub.dom, bb);
        for (; bb;) ab()
      }
      moveSelection(bb) {
        if (this.selectedIndex < 0) return;
        let ab = Bb(this.view.state.field(jb).diagnostics, this.items[bb].diagnostic);
        ab && this.view.dispatch({
          selection: {
            anchor: ab.from,
            head: ab.to
          },
          scrollIntoView: !0,
          effects: Xb.of(ab)
        })
      }
      static open(bb) {
        return new Hb(bb)
      }
    }

    function Ib(bb) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(bb)}</svg>')`
    }

    function db(bb) {
      return Ib(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${bb}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const Fb = Ab.i.baseTheme({
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
        backgroundImage: db("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: db("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: db("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: db("#66d")
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

    function hb(bb) {
      return "error" == bb ? 4 : "warning" == bb ? 3 : "info" == bb ? 2 : 1
    }

    function Gb(bb) {
      let ab = "hint",
        Ub = 1;
      for (let Ab of bb) {
        let bb = hb(Ab.severity);
        bb > Ub && (Ub = bb, ab = Ab.severity)
      }
      return ab
    }
    Ab.j;
    const Qb = [jb, Ab.i.hA.compute([jb], (bb => {
      let {
        selected: ab,
        panel: Ub
      } = bb.field(jb);
      return ab && Ub && ab.from != ab.to ? Ab.d.set([Rb.range(ab.from, ab.to)]) : Ab.d.none
    })), (0, Ab.K)(kb, {
      hideOn: eb
    }), Fb]
  },
  40460: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => nb,
      d: () => yb,
      f: () => Sb
    });
    var Ab = Ub(40419),
      Mb = Ub(40415),
      Tb = Ub(40434);
    const Eb = "function" == typeof String.prototype.normalize ? bb => bb.normalize("NFKD") : bb => bb;
    class Yb {
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb.length,
          Mb = arguments.length > 4 ? arguments[4] : void 0,
          Tb = arguments.length > 5 ? arguments[5] : void 0;
        this.test = Tb, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = bb.iterRange(Ub, Ab), this.bufferStart = Ub, this.normalize = Mb ? bb => Mb(Eb(bb)) : Eb, this.query = this.normalize(ab)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, Mb.J)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let bb = this.peek();
          if (bb < 0) return this.done = !0, this;
          let ab = (0, Mb.$)(bb),
            Ub = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, Mb.K)(bb);
          let Ab = this.normalize(ab);
          if (Ab.length)
            for (let Mb = 0, Tb = Ub;; Mb++) {
              let bb = Ab.charCodeAt(Mb),
                Eb = this.match(bb, Tb, this.bufferPos + this.bufferStart);
              if (Mb == Ab.length - 1) {
                if (Eb) return this.value = Eb, this;
                break
              }
              Tb == Ub && Mb < ab.length && ab.charCodeAt(Mb) == bb && Tb++
            }
        }
      }
      match(bb, ab, Ub) {
        let Ab = null;
        for (let Mb = 0; Mb < this.matches.length; Mb += 2) {
          let ab = this.matches[Mb],
            Tb = !1;
          this.query.charCodeAt(ab) == bb && (ab == this.query.length - 1 ? Ab = {
            from: this.matches[Mb + 1],
            to: Ub
          } : (this.matches[Mb]++, Tb = !0)), Tb || (this.matches.splice(Mb, 2), Mb -= 2)
        }
        return this.query.charCodeAt(0) == bb && (1 == this.query.length ? Ab = {
          from: ab,
          to: Ub
        } : this.matches.push(1, ab)), Ab && this.test && !this.test(Ab.from, Ab.to, this.buffer, this.bufferStart) && (Ab = null), Ab
      }
    }
    "undefined" != typeof Symbol && (Yb.prototype[Symbol.iterator] = function() {
      return this
    });
    const Bb = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      eb = "gm" + (null == /x/.unicode ? "" : "u");
    class vb {
      constructor(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : bb.length;
        if (this.text = bb, this.to = Mb, this.curLine = "", this.done = !1, this.value = Bb, /\\[sWDnr]|\n|\r|\[\^/.test(ab)) return new Xb(bb, ab, Ub, Ab, Mb);
        this.re = new RegExp(ab, eb + ((null === Ub || void 0 === Ub ? void 0 : Ub.ignoreCase) ? "i" : "")), this.test = null === Ub || void 0 === Ub ? void 0 : Ub.test, this.iter = bb.iter();
        let Tb = bb.lineAt(Ab);
        this.curLineStart = Tb.from, this.matchPos = jb(bb, Ab), this.getLine(this.curLineStart)
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
          let ab = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (ab) {
            let Ub = this.curLineStart + ab.index,
              Ab = Ub + ab[0].length;
            if (this.matchPos = jb(this.text, Ab + (Ub == Ab ? 1 : 0)), Ub == this.curLineStart + this.curLine.length && this.nextLine(), (Ub < Ab || Ub > this.value.to) && (!this.test || this.test(Ub, Ab, ab))) return this.value = {
              from: Ub,
              to: Ab,
              match: ab
            }, this;
            bb = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), bb = 0
          }
        }
      }
    }
    const Lb = new WeakMap;
    class Pb {
      constructor(bb, ab) {
        this.from = bb, this.text = ab
      }
      get to() {
        return this.from + this.text.length
      }
      static get(bb, ab, Ub) {
        let Ab = Lb.get(bb);
        if (!Ab || Ab.from >= Ub || Ab.to <= ab) {
          let Ab = new Pb(ab, bb.sliceString(ab, Ub));
          return Lb.set(bb, Ab), Ab
        }
        if (Ab.from == ab && Ab.to == Ub) return Ab;
        let {
          text: Mb,
          from: Tb
        } = Ab;
        return Tb > ab && (Mb = bb.sliceString(ab, Tb) + Mb, Tb = ab), Ab.to < Ub && (Mb += bb.sliceString(Ab.to, Ub)), Lb.set(bb, new Pb(Tb, Mb)), new Pb(ab, Mb.slice(ab - Tb, Ub - Tb))
      }
    }
    class Xb {
      constructor(bb, ab, Ub, Ab, Mb) {
        this.text = bb, this.to = Mb, this.done = !1, this.value = Bb, this.matchPos = jb(bb, Ab), this.re = new RegExp(ab, eb + ((null === Ub || void 0 === Ub ? void 0 : Ub.ignoreCase) ? "i" : "")), this.test = null === Ub || void 0 === Ub ? void 0 : Ub.test, this.flat = Pb.get(bb, Ab, this.chunkEnd(Ab + 5e3))
      }
      chunkEnd(bb) {
        return bb >= this.to ? this.to : this.text.lineAt(bb).to
      }
      next() {
        for (;;) {
          let bb = this.re.lastIndex = this.matchPos - this.flat.from,
            ab = this.re.exec(this.flat.text);
          if (ab && !ab[0] && ab.index == bb && (this.re.lastIndex = bb + 1, ab = this.re.exec(this.flat.text)), ab) {
            let bb = this.flat.from + ab.index,
              Ub = bb + ab[0].length;
            if ((this.flat.to >= this.to || ab.index + ab[0].length <= this.flat.text.length - 10) && (!this.test || this.test(bb, Ub, ab))) return this.value = {
              from: bb,
              to: Ub,
              match: ab
            }, this.matchPos = jb(this.text, Ub + (bb == Ub ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = Pb.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function jb(bb, ab) {
      if (ab >= bb.length) return ab;
      let Ub, Ab = bb.lineAt(ab);
      for (; ab < Ab.to && (Ub = Ab.text.charCodeAt(ab - Ab.from)) >= 56320 && Ub < 57344;) ab++;
      return ab
    }
    "undefined" != typeof Symbol && (vb.prototype[Symbol.iterator] = Xb.prototype[Symbol.iterator] = function() {
      return this
    });
    const Rb = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      kb = Mb.q.define({
        combine: bb => (0, Mb.O)(bb, Rb, {
          highlightWordAroundCursor: (bb, ab) => bb || ab,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function yb(bb) {
      let ab = [ib, xb];
      return bb && ab.push(kb.of(bb)), ab
    }
    const Zb = Ab.d.mark({
        class: "cm-selectionMatch"
      }),
      Db = Ab.d.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function zb(bb, ab, Ub, Ab) {
      return (0 == Ub || bb(ab.sliceDoc(Ub - 1, Ub)) != Mb.i.Word) && (Ab == ab.doc.length || bb(ab.sliceDoc(Ab, Ab + 1)) != Mb.i.Word)
    }
    const xb = Ab.k.fromClass(class {
        constructor(bb) {
          this.hA = this.getDeco(bb)
        }
        update(bb) {
          (bb.selectionSet || bb.docChanged || bb.viewportChanged) && (this.hA = this.getDeco(bb.view))
        }
        getDeco(bb) {
          let ab = bb.state.facet(kb),
            {
              state: Ub
            } = bb,
            Tb = Ub.selection;
          if (Tb.cj.length > 1) return Ab.d.none;
          let Eb, Bb = Tb.main,
            eb = null;
          if (Bb.empty) {
            if (!ab.highlightWordAroundCursor) return Ab.d.none;
            let bb = Ub.wordAt(Bb.head);
            if (!bb) return Ab.d.none;
            eb = Ub.charCategorizer(Bb.head), Eb = Ub.sliceDoc(bb.from, bb.to)
          } else {
            let bb = Bb.to - Bb.from;
            if (bb < ab.minSelectionLength || bb > 200) return Ab.d.none;
            if (ab.wholeWords) {
              if (Eb = Ub.sliceDoc(Bb.from, Bb.to), eb = Ub.charCategorizer(Bb.head), !zb(eb, Ub, Bb.from, Bb.to) || ! function(bb, ab, Ub, Ab) {
                  return bb(ab.sliceDoc(Ub, Ub + 1)) == Mb.i.Word && bb(ab.sliceDoc(Ab - 1, Ab)) == Mb.i.Word
                }(eb, Ub, Bb.from, Bb.to)) return Ab.d.none
            } else if (Eb = Ub.sliceDoc(Bb.from, Bb.to), !Eb) return Ab.d.none
          }
          let vb = [];
          for (let Mb of bb.W4) {
            let bb = new Yb(Ub.doc, Eb, Mb.from, Mb.to);
            for (; !bb.next().done;) {
              let {
                from: Mb,
                to: Tb
              } = bb.value;
              if ((!eb || zb(eb, Ub, Mb, Tb)) && (Bb.empty && Mb <= Bb.from && Tb >= Bb.to ? vb.push(Db.range(Mb, Tb)) : (Mb >= Bb.to || Tb <= Bb.from) && vb.push(Zb.range(Mb, Tb)), vb.length > ab.maxMatches)) return Ab.d.none
            }
          }
          return Ab.d.set(vb)
        }
      }, {
        hA: bb => bb.hA
      }),
      ib = Ab.i.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const fb = Mb.q.define({
      combine: bb => (0, Mb.O)(bb, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: bb => new ba(bb),
        scrollToMatch: bb => Ab.i.scrollIntoView(bb)
      })
    });
    class mb {
      constructor(bb) {
        this.search = bb.search, this.caseSensitive = !!bb.caseSensitive, this.literal = !!bb.literal, this.regexp = !!bb.regexp, this.replace = bb.replace || "", this.valid = !!this.search && (!this.regexp || function(bb) {
          try {
            return new RegExp(bb, eb), !0
          } catch (ab) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!bb.wholeWord, this.test = bb.test
      }
      unquote(bb) {
        return this.literal ? bb : bb.replace(/\\([nrt\\])/g, ((bb, ab) => "n" == ab ? "\n" : "r" == ab ? "\r" : "t" == ab ? "\t" : "\\"))
      }
      eq(bb) {
        return this.search == bb.search && this.replace == bb.replace && this.caseSensitive == bb.caseSensitive && this.regexp == bb.regexp && this.wholeWord == bb.wholeWord && this.test == bb.test
      }
      create() {
        return this.regexp ? new Fb(this) : new Wb(this)
      }
      getCursor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ub = arguments.length > 2 ? arguments[2] : void 0,
          Ab = bb.doc ? bb : Mb.p.create({
            doc: bb
          });
        return null == Ub && (Ub = Ab.doc.length), this.regexp ? Hb(this, Ab, ab, Ub) : Nb(this, Ab, ab, Ub)
      }
    }
    class pb {
      constructor(bb) {
        this.spec = bb
      }
    }

    function Nb(bb, ab, Ub, Ab) {
      let Tb;
      var Eb, Bb;
      return bb.wholeWord && (Eb = ab.doc, Bb = ab.charCategorizer(ab.selection.main.head), Tb = (bb, ab, Ub, Ab) => ((Ab > bb || Ab + Ub.length < ab) && (Ab = Math.max(0, bb - 2), Ub = Eb.sliceString(Ab, Math.min(Eb.length, ab + 2))), (Bb(Ib(Ub, bb - Ab)) != Mb.i.Word || Bb(db(Ub, bb - Ab)) != Mb.i.Word) && (Bb(db(Ub, ab - Ab)) != Mb.i.Word || Bb(Ib(Ub, ab - Ab)) != Mb.i.Word))), bb.test && (Tb = function(bb, ab, Ub) {
        return (Ab, Mb, Tb, Eb) => {
          if (Ub && !Ub(Ab, Mb, Tb, Eb)) return !1;
          let Yb = Ab >= Eb && Mb <= Eb + Tb.length ? Tb.slice(Ab - Eb, Mb - Eb) : ab.doc.sliceString(Ab, Mb);
          return bb(Yb, ab, Ab, Mb)
        }
      }(bb.test, ab, Tb)), new Yb(ab.doc, bb.unquoted, Ub, Ab, bb.caseSensitive ? void 0 : bb => bb.toLowerCase(), Tb)
    }
    class Wb extends pb {
      constructor(bb) {
        super(bb)
      }
      nextMatch(bb, ab, Ub) {
        let Ab = Nb(this.spec, bb, Ub, bb.doc.length).nextOverlapping();
        if (Ab.done) {
          let Ub = Math.min(bb.doc.length, ab + this.spec.unquoted.length);
          Ab = Nb(this.spec, bb, 0, Ub).nextOverlapping()
        }
        return Ab.done || Ab.value.from == ab && Ab.value.to == Ub ? null : Ab.value
      }
      prevMatchInRange(bb, ab, Ub) {
        for (let Ab = Ub;;) {
          let Ub = Math.max(ab, Ab - 1e4 - this.spec.unquoted.length),
            Mb = Nb(this.spec, bb, Ub, Ab),
            Tb = null;
          for (; !Mb.nextOverlapping().done;) Tb = Mb.value;
          if (Tb) return Tb;
          if (Ub == ab) return null;
          Ab -= 1e4
        }
      }
      prevMatch(bb, ab, Ub) {
        let Ab = this.prevMatchInRange(bb, 0, ab);
        return Ab || (Ab = this.prevMatchInRange(bb, Math.max(0, Ub - this.spec.unquoted.length), bb.doc.length)), !Ab || Ab.from == ab && Ab.to == Ub ? null : Ab
      }
      getReplacement(bb) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(bb, ab) {
        let Ub = Nb(this.spec, bb, 0, bb.doc.length),
          Ab = [];
        for (; !Ub.next().done;) {
          if (Ab.length >= ab) return null;
          Ab.push(Ub.value)
        }
        return Ab
      }
      highlight(bb, ab, Ub, Ab) {
        let Mb = Nb(this.spec, bb, Math.max(0, ab - this.spec.unquoted.length), Math.min(Ub + this.spec.unquoted.length, bb.doc.length));
        for (; !Mb.next().done;) Ab(Mb.value.from, Mb.value.to)
      }
    }

    function Hb(bb, ab, Ub, Ab) {
      let Tb;
      var Eb;
      return bb.wholeWord && (Eb = ab.charCategorizer(ab.selection.main.head), Tb = (bb, ab, Ub) => !Ub[0].length || (Eb(Ib(Ub.input, Ub.index)) != Mb.i.Word || Eb(db(Ub.input, Ub.index)) != Mb.i.Word) && (Eb(db(Ub.input, Ub.index + Ub[0].length)) != Mb.i.Word || Eb(Ib(Ub.input, Ub.index + Ub[0].length)) != Mb.i.Word)), bb.test && (Tb = function(bb, ab, Ub) {
        return (Ab, Mb, Tb) => (!Ub || Ub(Ab, Mb, Tb)) && bb(Tb[0], ab, Ab, Mb)
      }(bb.test, ab, Tb)), new vb(ab.doc, bb.search, {
        ignoreCase: !bb.caseSensitive,
        test: Tb
      }, Ub, Ab)
    }

    function Ib(bb, ab) {
      return bb.slice((0, Mb.T)(bb, ab, !1), ab)
    }

    function db(bb, ab) {
      return bb.slice(ab, (0, Mb.T)(bb, ab))
    }
    class Fb extends pb {
      nextMatch(bb, ab, Ub) {
        let Ab = Hb(this.spec, bb, Ub, bb.doc.length).next();
        return Ab.done && (Ab = Hb(this.spec, bb, 0, ab).next()), Ab.done ? null : Ab.value
      }
      prevMatchInRange(bb, ab, Ub) {
        for (let Ab = 1;; Ab++) {
          let Mb = Math.max(ab, Ub - 1e4 * Ab),
            Tb = Hb(this.spec, bb, Mb, Ub),
            Eb = null;
          for (; !Tb.next().done;) Eb = Tb.value;
          if (Eb && (Mb == ab || Eb.from > Mb + 10)) return Eb;
          if (Mb == ab) return null
        }
      }
      prevMatch(bb, ab, Ub) {
        return this.prevMatchInRange(bb, 0, ab) || this.prevMatchInRange(bb, Ub, bb.doc.length)
      }
      getReplacement(bb) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((ab, Ub) => {
          if ("&" == Ub) return bb.match[0];
          if ("$" == Ub) return "$";
          for (let Ab = Ub.length; Ab > 0; Ab--) {
            let ab = +Ub.slice(0, Ab);
            if (ab > 0 && ab < bb.match.length) return bb.match[ab] + Ub.slice(Ab)
          }
          return ab
        }))
      }
      matchAll(bb, ab) {
        let Ub = Hb(this.spec, bb, 0, bb.doc.length),
          Ab = [];
        for (; !Ub.next().done;) {
          if (Ab.length >= ab) return null;
          Ab.push(Ub.value)
        }
        return Ab
      }
      highlight(bb, ab, Ub, Ab) {
        let Mb = Hb(this.spec, bb, Math.max(0, ab - 250), Math.min(Ub + 250, bb.doc.length));
        for (; !Mb.next().done;) Ab(Mb.value.from, Mb.value.to)
      }
    }
    const hb = Mb.B.define(),
      Gb = Mb.B.define(),
      Qb = Mb.E.define({
        create: bb => new qb(Vb(bb).create(), null),
        update(bb, ab) {
          for (let Ub of ab.effects) Ub.is(hb) ? bb = new qb(Ub.value.create(), bb.panel) : Ub.is(Gb) && (bb = new qb(bb.query, Ub.value ? Cb : null));
          return bb
        },
        provide: bb => Ab._.from(bb, (bb => bb.panel))
      });
    class qb {
      constructor(bb, ab) {
        this.query = bb, this.panel = ab
      }
    }
    const ub = Ab.d.mark({
        class: "cm-searchMatch"
      }),
      rb = Ab.d.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      Kb = Ab.k.fromClass(class {
        constructor(bb) {
          this.view = bb, this.hA = this.highlight(bb.state.field(Qb))
        }
        update(bb) {
          let ab = bb.state.field(Qb);
          (ab != bb.startState.field(Qb) || bb.docChanged || bb.selectionSet || bb.viewportChanged) && (this.hA = this.highlight(ab))
        }
        highlight(bb) {
          let {
            query: ab,
            panel: Ub
          } = bb;
          if (!Ub || !ab.spec.valid) return Ab.d.none;
          let {
            view: Tb
          } = this, Eb = new Mb.x;
          for (let Ab = 0, Mb = Tb.W4, Yb = Mb.length; Ab < Yb; Ab++) {
            let {
              from: bb,
              to: Ub
            } = Mb[Ab];
            for (; Ab < Yb - 1 && Ub > Mb[Ab + 1].from - 500;) Ub = Mb[++Ab].to;
            ab.highlight(Tb.state, bb, Ub, ((bb, ab) => {
              let Ub = Tb.state.selection.cj.some((Ub => Ub.from == bb && Ub.to == ab));
              Eb.add(bb, ab, Ub ? rb : ub)
            }))
          }
          return Eb.finish()
        }
      }, {
        hA: bb => bb.hA
      });

    function ob(bb) {
      return ab => {
        let Ub = ab.state.field(Qb, !1);
        return Ub && Ub.query.spec.valid ? bb(ab, Ub) : Jb(ab)
      }
    }
    const lb = ob(((bb, ab) => {
        let {
          query: Ub
        } = ab, {
          to: Ab
        } = bb.state.selection.main, Tb = Ub.nextMatch(bb.state, Ab, Ab);
        if (!Tb) return !1;
        let Eb = Mb.m.single(Tb.from, Tb.to),
          Yb = bb.state.facet(fb);
        return bb.dispatch({
          selection: Eb,
          effects: [Ma(bb, Tb), Yb.scrollToMatch(Eb.main, bb)],
          userEvent: "select.search"
        }), cb(bb), !0
      })),
      tb = ob(((bb, ab) => {
        let {
          query: Ub
        } = ab, {
          state: Ab
        } = bb, {
          from: Tb
        } = Ab.selection.main, Eb = Ub.prevMatch(Ab, Tb, Tb);
        if (!Eb) return !1;
        let Yb = Mb.m.single(Eb.from, Eb.to),
          Bb = bb.state.facet(fb);
        return bb.dispatch({
          selection: Yb,
          effects: [Ma(bb, Eb), Bb.scrollToMatch(Yb.main, bb)],
          userEvent: "select.search"
        }), cb(bb), !0
      })),
      wb = ob(((bb, ab) => {
        let {
          query: Ub
        } = ab, Ab = Ub.matchAll(bb.state, 1e3);
        return !(!Ab || !Ab.length) && (bb.dispatch({
          selection: Mb.m.create(Ab.map((bb => Mb.m.range(bb.from, bb.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      sb = ob(((bb, ab) => {
        let {
          query: Ub
        } = ab, {
          state: Tb
        } = bb, {
          from: Eb,
          to: Yb
        } = Tb.selection.main;
        if (Tb.readOnly) return !1;
        let Bb = Ub.nextMatch(Tb, Eb, Eb);
        if (!Bb) return !1;
        let eb, vb, Lb = Bb,
          Pb = [],
          Xb = [];
        Lb.from == Eb && Lb.to == Yb && (vb = Tb.toText(Ub.getReplacement(Lb)), Pb.push({
          from: Lb.from,
          to: Lb.to,
          insert: vb
        }), Lb = Ub.nextMatch(Tb, Lb.from, Lb.to), Xb.push(Ab.i.announce.of(Tb.phrase("replaced match on line $", Tb.doc.lineAt(Eb).number) + ".")));
        let jb = bb.state.changes(Pb);
        return Lb && (eb = Mb.m.single(Lb.from, Lb.to).map(jb), Xb.push(Ma(bb, Lb)), Xb.push(Tb.facet(fb).scrollToMatch(eb.main, bb))), bb.dispatch({
          changes: jb,
          selection: eb,
          effects: Xb,
          userEvent: "input.replace"
        }), !0
      })),
      gb = ob(((bb, ab) => {
        let {
          query: Ub
        } = ab;
        if (bb.state.readOnly) return !1;
        let Mb = Ub.matchAll(bb.state, 1e9).map((bb => {
          let {
            from: ab,
            to: Ab
          } = bb;
          return {
            from: ab,
            to: Ab,
            insert: Ub.getReplacement(bb)
          }
        }));
        if (!Mb.length) return !1;
        let Tb = bb.state.phrase("replaced $ matches", Mb.length) + ".";
        return bb.dispatch({
          changes: Mb,
          effects: Ab.i.announce.of(Tb),
          userEvent: "input.replace.all"
        }), !0
      }));

    function Cb(bb) {
      return bb.state.facet(fb).createPanel(bb)
    }

    function Vb(bb, ab) {
      var Ub, Ab, Mb, Tb, Eb;
      let Yb = bb.selection.main,
        Bb = Yb.empty || Yb.to > Yb.from + 100 ? "" : bb.sliceDoc(Yb.from, Yb.to);
      if (ab && !Bb) return ab;
      let eb = bb.facet(fb);
      return new mb({
        search: (null !== (Ub = null === ab || void 0 === ab ? void 0 : ab.literal) && void 0 !== Ub ? Ub : eb.literal) ? Bb : Bb.replace(/\n/g, "\\n"),
        caseSensitive: null !== (Ab = null === ab || void 0 === ab ? void 0 : ab.caseSensitive) && void 0 !== Ab ? Ab : eb.caseSensitive,
        literal: null !== (Mb = null === ab || void 0 === ab ? void 0 : ab.literal) && void 0 !== Mb ? Mb : eb.literal,
        regexp: null !== (Tb = null === ab || void 0 === ab ? void 0 : ab.regexp) && void 0 !== Tb ? Tb : eb.regexp,
        wholeWord: null !== (Eb = null === ab || void 0 === ab ? void 0 : ab.wholeWord) && void 0 !== Eb ? Eb : eb.wholeWord
      })
    }

    function Ob(bb) {
      let ab = (0, Ab.w)(bb, Cb);
      return ab && ab.dom.querySelector("[main-field]")
    }

    function cb(bb) {
      let ab = Ob(bb);
      ab && ab == bb.root.activeElement && ab.select()
    }
    const Jb = bb => {
        let ab = bb.state.field(Qb, !1);
        if (ab && ab.panel) {
          let Ub = Ob(bb);
          if (Ub && Ub != bb.root.activeElement) {
            let Ab = Vb(bb.state, ab.query.spec);
            Ab.valid && bb.dispatch({
              effects: hb.of(Ab)
            }), Ub.focus(), Ub.select()
          }
        } else bb.dispatch({
          effects: [Gb.of(!0), ab ? hb.of(Vb(bb.state, ab.query.spec)) : Mb.B.appendConfig.of(Ea)]
        });
        return !0
      },
      nb = bb => {
        let ab = bb.state.field(Qb, !1);
        if (!ab || !ab.panel) return !1;
        let Ub = (0, Ab.w)(bb, Cb);
        return Ub && Ub.dom.contains(bb.root.activeElement) && bb.focus(), bb.dispatch({
          effects: Gb.of(!1)
        }), !0
      },
      Sb = [{
        key: "Mod-f",
        run: Jb,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: lb,
        shift: tb,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: lb,
        shift: tb,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: nb,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: bb => {
          let {
            state: ab,
            dispatch: Ub
          } = bb, Ab = ab.selection;
          if (Ab.cj.length > 1 || Ab.main.empty) return !1;
          let {
            from: Tb,
            to: Eb
          } = Ab.main, Bb = [], eb = 0;
          for (let vb = new Yb(ab.doc, ab.sliceDoc(Tb, Eb)); !vb.next().done;) {
            if (Bb.length > 1e3) return !1;
            vb.value.from == Tb && (eb = Bb.length), Bb.push(Mb.m.range(vb.value.from, vb.value.to))
          }
          return Ub(ab.update({
            selection: Mb.m.create(Bb, eb),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: bb => {
          let {
            state: ab
          } = bb, Ub = String(ab.doc.lineAt(bb.state.selection.main.head).number), {
            close: Tb,
            result: Eb
          } = (0, Ab.Z)(bb, {
            label: ab.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: Ub
            },
            focus: !0,
            submitLabel: ab.phrase("go")
          });
          return Eb.then((Ub => {
            let Eb = Ub && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(Ub.elements.line.value);
            if (!Eb) return void bb.dispatch({
              effects: Tb
            });
            let Yb = ab.doc.lineAt(ab.selection.main.head),
              [, Bb, eb, vb, Lb] = Eb,
              Pb = vb ? +vb.slice(1) : 0,
              Xb = eb ? +eb : Yb.number;
            if (eb && Lb) {
              let bb = Xb / 100;
              Bb && (bb = bb * ("-" == Bb ? -1 : 1) + Yb.number / ab.doc.lines), Xb = Math.round(ab.doc.lines * bb)
            } else eb && Bb && (Xb = Xb * ("-" == Bb ? -1 : 1) + Yb.number);
            let jb = ab.doc.line(Math.max(1, Math.min(ab.doc.lines, Xb))),
              Rb = Mb.m.cursor(jb.from + Math.max(0, Math.min(Pb, jb.length)));
            bb.dispatch({
              effects: [Tb, Ab.i.scrollIntoView(Rb.from, {
                y: "center"
              })],
              selection: Rb
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: bb => {
          let {
            state: ab,
            dispatch: Ub
          } = bb, {
            cj: Tb
          } = ab.selection;
          if (Tb.some((bb => bb.from === bb.to))) return (bb => {
            let {
              state: ab,
              dispatch: Ub
            } = bb, {
              selection: Ab
            } = ab, Tb = Mb.m.create(Ab.cj.map((bb => ab.wordAt(bb.head) || Mb.m.cursor(bb.head))), Ab.mainIndex);
            return !Tb.eq(Ab) && (Ub(ab.update({
              selection: Tb
            })), !0)
          })({
            state: ab,
            dispatch: Ub
          });
          let Eb = ab.sliceDoc(Tb[0].from, Tb[0].to);
          if (ab.selection.cj.some((bb => ab.sliceDoc(bb.from, bb.to) != Eb))) return !1;
          let Bb = function(bb, ab) {
            let {
              main: Ub,
              cj: Ab
            } = bb.selection, Mb = bb.wordAt(Ub.head), Tb = Mb && Mb.from == Ub.from && Mb.to == Ub.to;
            for (let Eb = !1, Bb = new Yb(bb.doc, ab, Ab[Ab.length - 1].to);;) {
              if (Bb.next(), !Bb.done) {
                if (Eb && Ab.some((bb => bb.from == Bb.value.from))) continue;
                if (Tb) {
                  let ab = bb.wordAt(Bb.value.from);
                  if (!ab || ab.from != Bb.value.from || ab.to != Bb.value.to) continue
                }
                return Bb.value
              }
              if (Eb) return null;
              Bb = new Yb(bb.doc, ab, 0, Math.max(0, Ab[Ab.length - 1].from - 1)), Eb = !0
            }
          }(ab, Eb);
          return !!Bb && (Ub(ab.update({
            selection: ab.selection.addRange(Mb.m.range(Bb.from, Bb.to), !1),
            effects: Ab.i.scrollIntoView(Bb.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class ba {
      constructor(bb) {
        this.view = bb;
        let ab = this.query = bb.state.field(Qb).query.spec;

        function Ub(bb, ab, Ub) {
          return (0, Tb.c)("button", {
            class: "cm-button",
            name: bb,
            onclick: ab,
            type: "button"
          }, Ub)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, Tb.c)("input", {
          value: ab.search,
          placeholder: aa(bb, "Find"),
          "aria-label": aa(bb, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, Tb.c)("input", {
          value: ab.replace,
          placeholder: aa(bb, "Replace"),
          "aria-label": aa(bb, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, Tb.c)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: ab.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, Tb.c)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: ab.regexp,
          onchange: this.commit
        }), this.wordField = (0, Tb.c)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: ab.wholeWord,
          onchange: this.commit
        }), this.dom = (0, Tb.c)("div", {
          onkeydown: bb => this.keydown(bb),
          class: "cm-search"
        }, [this.searchField, Ub("next", (() => lb(bb)), [aa(bb, "next")]), Ub("prev", (() => tb(bb)), [aa(bb, "previous")]), Ub("select", (() => wb(bb)), [aa(bb, "all")]), (0, Tb.c)("label", null, [this.caseField, aa(bb, "match case")]), (0, Tb.c)("label", null, [this.reField, aa(bb, "regexp")]), (0, Tb.c)("label", null, [this.wordField, aa(bb, "by word")]), ...bb.state.readOnly ? [] : [(0, Tb.c)("br"), this.replaceField, Ub("replace", (() => sb(bb)), [aa(bb, "replace")]), Ub("replaceAll", (() => gb(bb)), [aa(bb, "replace all")])], (0, Tb.c)("button", {
          name: "close",
          onclick: () => nb(bb),
          "aria-label": aa(bb, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let bb = new mb({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        bb.eq(this.query) || (this.query = bb, this.view.dispatch({
          effects: hb.of(bb)
        }))
      }
      keydown(bb) {
        (0, Ab.Y)(this.view, bb, "search-panel") ? bb.preventDefault(): 13 == bb.keyCode && bb.target == this.searchField ? (bb.preventDefault(), (bb.shiftKey ? tb : lb)(this.view)) : 13 == bb.keyCode && bb.target == this.replaceField && (bb.preventDefault(), sb(this.view))
      }
      update(bb) {
        for (let ab of bb.transactions)
          for (let bb of ab.effects) bb.is(hb) && !bb.value.eq(this.query) && this.setQuery(bb.value)
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
        return this.view.state.facet(fb).top
      }
    }

    function aa(bb, ab) {
      return bb.state.phrase(ab)
    }
    const Ua = 30,
      Aa = /[\s\.,:;?!]/;

    function Ma(bb, ab) {
      let {
        from: Ub,
        to: Mb
      } = ab, Tb = bb.state.doc.lineAt(Ub), Eb = bb.state.doc.lineAt(Mb).to, Yb = Math.max(Tb.from, Ub - Ua), Bb = Math.min(Eb, Mb + Ua), eb = bb.state.sliceDoc(Yb, Bb);
      if (Yb != Tb.from)
        for (let Ab = 0; Ab < Ua; Ab++)
          if (!Aa.test(eb[Ab + 1]) && Aa.test(eb[Ab])) {
            eb = eb.slice(Ab);
            break
          } if (Bb != Eb)
        for (let Ab = eb.length - 1; Ab > eb.length - Ua; Ab--)
          if (!Aa.test(eb[Ab - 1]) && Aa.test(eb[Ab])) {
            eb = eb.slice(0, Ab);
            break
          } return Ab.i.announce.of(`${bb.state.phrase("current match")}. ${eb} ${bb.state.phrase("on line")} ${Tb.number}.`)
    }
    const Ta = Ab.i.baseTheme({
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
      Ea = [Qb, Mb.u.low(Kb), Ta]
  },
  40419: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Fb,
      e: () => ea,
      i: () => pM,
      j: () => TE,
      k: () => ca,
      m: () => Ib,
      n: () => HT,
      o: () => cM,
      s: () => TT,
      w: () => cT,
      z: () => CT,
      C: () => vE,
      H: () => yT,
      G: () => IE,
      J: () => XT,
      K: () => gT,
      N: () => GM,
      Q: () => pE,
      T: () => ga,
      W: () => xT,
      X: () => pT,
      Y: () => uM,
      Z: () => aE,
      _: () => bE,
      ab: () => KT
    });
    for (var Ab = Ub(40415), Mb = Ub(40427), Tb = {
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
      }, Eb = {
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
      }, Yb = "undefined" != typeof navigator && /Mac/.test(navigator.platform), Bb = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), eb = 0; eb < 10; eb++) Tb[48 + eb] = Tb[96 + eb] = String(eb);
    for (eb = 1; eb <= 24; eb++) Tb[eb + 111] = "F" + eb;
    for (eb = 65; eb <= 90; eb++) Tb[eb] = String.fromCharCode(eb + 32), Eb[eb] = String.fromCharCode(eb);
    for (var vb in Tb) Eb.hasOwnProperty(vb) || (Eb[vb] = Tb[vb]);
    var Lb = Ub(40434);
    let Pb = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      Xb = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const jb = /Edge\/(\d+)/.exec(Pb.userAgent),
      Rb = /MSIE \d/.test(Pb.userAgent),
      kb = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Pb.userAgent),
      yb = !!(Rb || kb || jb),
      Zb = !yb && /gecko\/(\d+)/i.test(Pb.userAgent),
      Db = !yb && /Chrome\/(\d+)/.exec(Pb.userAgent),
      zb = "webkitFontSmoothing" in Xb.documentElement.style,
      xb = !yb && /Apple Computer/.test(Pb.vendor),
      ib = xb && (/Mobile\/\w+/.test(Pb.userAgent) || Pb.maxTouchPoints > 2);
    var fb = {
      mac: ib || /Mac/.test(Pb.platform),
      windows: /Win/.test(Pb.platform),
      linux: /Linux|X11/.test(Pb.platform),
      ie: yb,
      ie_version: Rb ? Xb.documentMode || 6 : kb ? +kb[1] : jb ? +jb[1] : 0,
      gecko: Zb,
      gecko_version: Zb ? +(/Firefox\/(\d+)/.exec(Pb.userAgent) || [0, 0])[1] : 0,
      chrome: !!Db,
      chrome_version: Db ? +Db[1] : 0,
      ios: ib,
      android: /Android\b/.test(Pb.userAgent),
      webkit: zb,
      webkit_version: zb ? +(/\bAppleWebKit\/(\d+)/.exec(Pb.userAgent) || [0, 0])[1] : 0,
      safari: xb,
      safari_version: xb ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(Pb.userAgent) || [0, 0])[1] : 0,
      tabSize: null != Xb.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function mb(bb, ab) {
      for (let Ub in bb) "class" == Ub && ab.class ? ab.class += " " + bb.class : "style" == Ub && ab.style ? ab.style += ";" + bb.style : ab[Ub] = bb[Ub];
      return ab
    }
    const pb = Object.create(null);

    function Nb(bb, ab, Ub) {
      if (bb == ab) return !0;
      bb || (bb = pb), ab || (ab = pb);
      let Ab = Object.keys(bb),
        Mb = Object.keys(ab);
      if (Ab.length - (Ub && Ab.indexOf(Ub) > -1 ? 1 : 0) != Mb.length - (Ub && Mb.indexOf(Ub) > -1 ? 1 : 0)) return !1;
      for (let Tb of Ab)
        if (Tb != Ub && (-1 == Mb.indexOf(Tb) || bb[Tb] !== ab[Tb])) return !1;
      return !0
    }

    function Wb(bb, ab, Ub) {
      let Ab = !1;
      if (ab)
        for (let Mb in ab) Ub && Mb in Ub || (Ab = !0, "style" == Mb ? bb.style.cssText = "" : bb.removeAttribute(Mb));
      if (Ub)
        for (let Mb in Ub) ab && ab[Mb] == Ub[Mb] || (Ab = !0, "style" == Mb ? bb.style.cssText = Ub[Mb] : bb.setAttribute(Mb, Ub[Mb]));
      return Ab
    }

    function Hb(bb) {
      let ab = Object.create(null);
      for (let Ub = 0; Ub < bb.attributes.length; Ub++) {
        let Ab = bb.attributes[Ub];
        ab[Ab.name] = Ab.value
      }
      return ab
    }
    class Ib {
      eq(bb) {
        return !1
      }
      updateDOM(bb, ab, Ub) {
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
      coordsAt(bb, ab, Ub) {
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
    var db = function(bb) {
      return bb[bb.Text = 0] = "Text", bb[bb.WidgetBefore = 1] = "WidgetBefore", bb[bb.WidgetAfter = 2] = "WidgetAfter", bb[bb.WidgetRange = 3] = "WidgetRange", bb
    }(db || (db = {}));
    class Fb extends Ab.z {
      constructor(bb, ab, Ub, Ab) {
        super(), this.startSide = bb, this.endSide = ab, this.widget = Ub, this.spec = Ab
      }
      get heightRelevant() {
        return !1
      }
      static mark(bb) {
        return new hb(bb)
      }
      static widget(bb) {
        let ab = Math.max(-1e4, Math.min(1e4, bb.side || 0)),
          Ub = !!bb.block;
        return ab += Ub && !bb.inlineOrder ? ab > 0 ? 3e8 : -4e8 : ab > 0 ? 1e8 : -1e8, new Qb(bb, ab, ab, Ub, bb.widget || null, !1)
      }
      static replace(bb) {
        let ab, Ub, Ab = !!bb.block;
        if (bb.isBlockGap) ab = -5e8, Ub = 4e8;
        else {
          let {
            start: Mb,
            end: Tb
          } = qb(bb, Ab);
          ab = (Mb ? Ab ? -3e8 : -1 : 5e8) - 1, Ub = 1 + (Tb ? Ab ? 2e8 : 1 : -6e8)
        }
        return new Qb(bb, ab, Ub, Ab, bb.widget || null, !0)
      }
      static line(bb) {
        return new Gb(bb)
      }
      static set(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Ab.y.of(bb, ab)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    Fb.none = Ab.y.empty;
    class hb extends Fb {
      constructor(bb) {
        let {
          start: ab,
          end: Ub
        } = qb(bb);
        super(ab ? -1 : 5e8, Ub ? 1 : -6e8, null, bb), this.tagName = bb.tagName || "span", this.attrs = bb.class && bb.attributes ? mb(bb.attributes, {
          class: bb.class
        }) : bb.class ? {
          class: bb.class
        } : bb.attributes || pb
      }
      eq(bb) {
        return this == bb || bb instanceof hb && this.tagName == bb.tagName && Nb(this.attrs, bb.attrs)
      }
      range(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb;
        if (bb >= ab) throw new RangeError("Mark decorations may not be empty");
        return super.range(bb, ab)
      }
    }
    hb.prototype.point = !1;
    class Gb extends Fb {
      constructor(bb) {
        super(-2e8, -2e8, null, bb)
      }
      eq(bb) {
        return bb instanceof Gb && this.spec.class == bb.spec.class && Nb(this.spec.attributes, bb.spec.attributes)
      }
      range(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb;
        if (ab != bb) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(bb, ab)
      }
    }
    Gb.prototype.mapMode = Ab.t.TrackBefore, Gb.prototype.point = !0;
    class Qb extends Fb {
      constructor(bb, ab, Ub, Mb, Tb, Eb) {
        super(ab, Ub, Tb, bb), this.block = Mb, this.isReplace = Eb, this.mapMode = Mb ? ab <= 0 ? Ab.t.TrackBefore : Ab.t.TrackAfter : Ab.t.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? db.WidgetRange : this.startSide <= 0 ? db.WidgetBefore : db.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(bb) {
        return bb instanceof Qb && (ab = this.widget, Ub = bb.widget, ab == Ub || !!(ab && Ub && ab.compare(Ub))) && this.block == bb.block && this.startSide == bb.startSide && this.endSide == bb.endSide;
        var ab, Ub
      }
      range(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb;
        if (this.isReplace && (bb > ab || bb == ab && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && ab != bb) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(bb, ab)
      }
    }

    function qb(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: Ub,
          inclusiveEnd: Ab
        } = bb;
      return null == Ub && (Ub = bb.inclusive), null == Ab && (Ab = bb.inclusive), {
        start: null !== Ub && void 0 !== Ub ? Ub : ab,
        end: null !== Ab && void 0 !== Ab ? Ab : ab
      }
    }

    function ub(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Mb = Ub.length - 1;
      Mb >= 0 && Ub[Mb] + Ab >= bb ? Ub[Mb] = Math.max(Ub[Mb], ab) : Ub.push(bb, ab)
    }
    Qb.prototype.point = !0;
    class rb extends Ab.z {
      constructor(bb, ab) {
        super(), this.tagName = bb, this.attributes = ab
      }
      eq(bb) {
        return bb == this || bb instanceof rb && this.tagName == bb.tagName && Nb(this.attributes, bb.attributes)
      }
      static create(bb) {
        return new rb(bb.tagName, bb.attributes || pb)
      }
      static set(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Ab.y.of(bb, ab)
      }
    }

    function Kb(bb) {
      let ab;
      return ab = 11 == bb.nodeType ? bb.getSelection ? bb : bb.ownerDocument : bb, ab.getSelection()
    }

    function ob(bb, ab) {
      return !!ab && (bb == ab || bb.contains(1 != ab.nodeType ? ab.parentNode : ab))
    }

    function lb(bb, ab) {
      if (!ab.anchorNode) return !1;
      try {
        return ob(bb, ab.anchorNode)
      } catch (Ub) {
        return !1
      }
    }

    function tb(bb) {
      return 3 == bb.nodeType ? Aa(bb, 0, bb.nodeValue.length).getClientRects() : 1 == bb.nodeType ? bb.getClientRects() : []
    }

    function wb(bb, ab, Ub, Ab) {
      return !!Ub && (Cb(bb, ab, Ub, Ab, -1) || Cb(bb, ab, Ub, Ab, 1))
    }

    function sb(bb) {
      for (var ab = 0;; ab++)
        if (!(bb = bb.previousSibling)) return ab
    }

    function gb(bb) {
      return 1 == bb.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(bb.nodeName)
    }

    function Cb(bb, ab, Ub, Ab, Mb) {
      for (;;) {
        if (bb == Ub && ab == Ab) return !0;
        if (ab == (Mb < 0 ? 0 : Vb(bb))) {
          if ("DIV" == bb.nodeName) return !1;
          let Ub = bb.parentNode;
          if (!Ub || 1 != Ub.nodeType) return !1;
          ab = sb(bb) + (Mb < 0 ? 0 : 1), bb = Ub
        } else {
          if (1 != bb.nodeType) return !1;
          if (1 == (bb = bb.childNodes[ab + (Mb < 0 ? -1 : 0)]).nodeType && "false" == bb.contentEditable) return !1;
          ab = Mb < 0 ? Vb(bb) : 0
        }
      }
    }

    function Vb(bb) {
      return 3 == bb.nodeType ? bb.nodeValue.length : bb.childNodes.length
    }

    function Ob(bb, ab) {
      let Ub = ab ? bb.left : bb.right;
      return {
        left: Ub,
        right: Ub,
        top: bb.top,
        bottom: bb.bottom
      }
    }

    function cb(bb) {
      let ab = bb.visualViewport;
      return ab ? {
        left: 0,
        right: ab.width,
        top: 0,
        bottom: ab.height
      } : {
        left: 0,
        right: bb.innerWidth,
        top: 0,
        bottom: bb.innerHeight
      }
    }

    function Jb(bb, ab) {
      let Ub = ab.width / bb.offsetWidth,
        Ab = ab.height / bb.offsetHeight;
      return (Ub > .995 && Ub < 1.005 || !isFinite(Ub) || Math.abs(ab.width - bb.offsetWidth) < 1) && (Ub = 1), (Ab > .995 && Ab < 1.005 || !isFinite(Ab) || Math.abs(ab.height - bb.offsetHeight) < 1) && (Ab = 1), {
        scaleX: Ub,
        scaleY: Ab
      }
    }

    function nb(bb) {
      let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        Ub = bb.ownerDocument,
        Ab = null,
        Mb = null;
      for (let Tb = bb.parentNode; Tb && (Tb != Ub.body && (ab && !Ab || !Mb));)
        if (1 == Tb.nodeType) !Mb && Tb.scrollHeight > Tb.clientHeight && (Mb = Tb), ab && !Ab && Tb.scrollWidth > Tb.clientWidth && (Ab = Tb), Tb = Tb.assignedSlot || Tb.parentNode;
        else {
          if (11 != Tb.nodeType) break;
          Tb = Tb.host
        } return {
        x: Ab,
        y: Mb
      }
    }
    rb.prototype.startSide = rb.prototype.endSide = -1;
    class Sb {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(bb) {
        return this.anchorNode == bb.anchorNode && this.anchorOffset == bb.anchorOffset && this.focusNode == bb.focusNode && this.focusOffset == bb.focusOffset
      }
      setRange(bb) {
        let {
          anchorNode: ab,
          focusNode: Ub
        } = bb;
        this.set(ab, Math.min(bb.anchorOffset, ab ? Vb(ab) : 0), Ub, Math.min(bb.focusOffset, Ub ? Vb(Ub) : 0))
      }
      set(bb, ab, Ub, Ab) {
        this.anchorNode = bb, this.anchorOffset = ab, this.focusNode = Ub, this.focusOffset = Ab
      }
    }
    let ba, aa = null;

    function Ua(bb) {
      if (bb.setActive) return bb.setActive();
      if (aa) return bb.focus(aa);
      let ab = [];
      for (let Ub = bb; Ub && (ab.push(Ub, Ub.scrollTop, Ub.scrollLeft), Ub != Ub.ownerDocument); Ub = Ub.parentNode);
      if (bb.focus(null == aa ? {
          get preventScroll() {
            return aa = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !aa) {
        aa = !1;
        for (let bb = 0; bb < ab.length;) {
          let Ub = ab[bb++],
            Ab = ab[bb++],
            Mb = ab[bb++];
          Ub.scrollTop != Ab && (Ub.scrollTop = Ab), Ub.scrollLeft != Mb && (Ub.scrollLeft = Mb)
        }
      }
    }

    function Aa(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ab,
        Ab = ba || (ba = document.createRange());
      return Ab.setEnd(bb, Ub), Ab.setStart(bb, ab), Ab
    }

    function Ma(bb, ab, Ub, Ab) {
      let Mb = {
        key: ab,
        code: ab,
        keyCode: Ub,
        which: Ub,
        cancelable: !0
      };
      Ab && ({
        altKey: Mb.altKey,
        ctrlKey: Mb.ctrlKey,
        shiftKey: Mb.shiftKey,
        metaKey: Mb.metaKey
      } = Ab);
      let Tb = new KeyboardEvent("keydown", Mb);
      Tb.synthetic = !0, bb.dispatchEvent(Tb);
      let Eb = new KeyboardEvent("keyup", Mb);
      return Eb.synthetic = !0, bb.dispatchEvent(Eb), Tb.defaultPrevented || Eb.defaultPrevented
    }

    function Ta(bb) {
      return bb instanceof Window ? bb.pageYOffset > Math.max(0, bb.document.documentElement.scrollHeight - bb.innerHeight - 4) : bb.scrollTop > Math.max(1, bb.scrollHeight - bb.clientHeight - 4)
    }

    function Ea(bb, ab) {
      for (let Ub = bb, Ab = ab;;) {
        if (3 == Ub.nodeType && Ab > 0) return {
          node: Ub,
          offset: Ab
        };
        if (1 == Ub.nodeType && Ab > 0) {
          if ("false" == Ub.contentEditable) return null;
          Ub = Ub.childNodes[Ab - 1], Ab = Vb(Ub)
        } else {
          if (!Ub.parentNode || gb(Ub)) return null;
          Ab = sb(Ub), Ub = Ub.parentNode
        }
      }
    }

    function Ya(bb, ab) {
      for (let Ub = bb, Ab = ab;;) {
        if (3 == Ub.nodeType && Ab < Ub.nodeValue.length) return {
          node: Ub,
          offset: Ab
        };
        if (1 == Ub.nodeType && Ab < Ub.childNodes.length) {
          if ("false" == Ub.contentEditable) return null;
          Ub = Ub.childNodes[Ab], Ab = 0
        } else {
          if (!Ub.parentNode || gb(Ub)) return null;
          Ab = sb(Ub) + 1, Ub = Ub.parentNode
        }
      }
    }
    fb.safari && fb.safari_version >= 26 && (aa = !1);
    class Ba {
      constructor(bb, ab) {
        let Ub = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = bb, this.offset = ab, this.precise = Ub
      }
      static before(bb, ab) {
        return new Ba(bb.parentNode, sb(bb), ab)
      }
      static after(bb, ab) {
        return new Ba(bb.parentNode, sb(bb) + 1, ab)
      }
    }
    var ea = function(bb) {
      return bb[bb.LTR = 0] = "LTR", bb[bb.RTL = 1] = "RTL", bb
    }(ea || (ea = {}));
    const va = ea.LTR,
      La = ea.RTL;

    function Pa(bb) {
      let ab = [];
      for (let Ub = 0; Ub < bb.length; Ub++) ab.push(1 << +bb[Ub]);
      return ab
    }
    const Xa = Pa("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      ja = Pa("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      Ra = Object.create(null),
      ka = [];
    for (let dE of ["()", "[]", "{}"]) {
      let bb = dE.charCodeAt(0),
        ab = dE.charCodeAt(1);
      Ra[bb] = ab, Ra[ab] = -bb
    }

    function ya(bb) {
      return bb <= 247 ? Xa[bb] : 1424 <= bb && bb <= 1524 ? 2 : 1536 <= bb && bb <= 1785 ? ja[bb - 1536] : 1774 <= bb && bb <= 2220 ? 4 : 8192 <= bb && bb <= 8204 ? 256 : 64336 <= bb && bb <= 65023 ? 4 : 1
    }
    const Za = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class Da {
      get dir() {
        return this.level % 2 ? La : va
      }
      constructor(bb, ab, Ub) {
        this.from = bb, this.to = ab, this.level = Ub
      }
      side(bb, ab) {
        return this.dir == ab == bb ? this.to : this.from
      }
      forward(bb, ab) {
        return bb == (this.dir == ab)
      }
      static find(bb, ab, Ub, Ab) {
        let Mb = -1;
        for (let Tb = 0; Tb < bb.length; Tb++) {
          let Eb = bb[Tb];
          if (Eb.from <= ab && Eb.to >= ab) {
            if (Eb.level == Ub) return Tb;
            (Mb < 0 || (0 != Ab ? Ab < 0 ? Eb.from < ab : Eb.to > ab : bb[Mb].level > Eb.level)) && (Mb = Tb)
          }
        }
        if (Mb < 0) throw new RangeError("Index out of range");
        return Mb
      }
    }

    function za(bb, ab) {
      if (bb.length != ab.length) return !1;
      for (let Ub = 0; Ub < bb.length; Ub++) {
        let Ab = bb[Ub],
          Mb = ab[Ub];
        if (Ab.from != Mb.from || Ab.to != Mb.to || Ab.direction != Mb.direction || !za(Ab.inner, Mb.inner)) return !1
      }
      return !0
    }
    const xa = [];

    function ia(bb, ab, Ub, Ab, Mb, Tb, Eb) {
      let Yb = Ab % 2 ? 2 : 1;
      if (Ab % 2 == Mb % 2)
        for (let Bb = ab, eb = 0; Bb < Ub;) {
          let ab = !0,
            vb = !1;
          if (eb == Tb.length || Bb < Tb[eb].from) {
            let bb = xa[Bb];
            bb != Yb && (ab = !1, vb = 16 == bb)
          }
          let Lb = ab || 1 != Yb ? null : [],
            Pb = ab ? Ab : Ab + 1,
            Xb = Bb;
          bb: for (;;)
            if (eb < Tb.length && Xb == Tb[eb].from) {
              if (vb) break bb;
              let jb = Tb[eb];
              if (!ab)
                for (let bb = jb.to, ab = eb + 1;;) {
                  if (bb == Ub) break bb;
                  if (!(ab < Tb.length && Tb[ab].from == bb)) {
                    if (xa[bb] == Yb) break bb;
                    break
                  }
                  bb = Tb[ab++].to
                }
              if (eb++, Lb) Lb.push(jb);
              else {
                jb.from > Bb && Eb.push(new Da(Bb, jb.from, Pb)), fa(bb, jb.direction == va != !(Pb % 2) ? Ab + 1 : Ab, Mb, jb.inner, jb.from, jb.to, Eb), Bb = jb.to
              }
              Xb = jb.to
            } else {
              if (Xb == Ub || (ab ? xa[Xb] != Yb : xa[Xb] == Yb)) break;
              Xb++
            } Lb ? ia(bb, Bb, Xb, Ab + 1, Mb, Lb, Eb) : Bb < Xb && Eb.push(new Da(Bb, Xb, Pb)), Bb = Xb
        } else
          for (let Bb = Ub, eb = Tb.length; Bb > ab;) {
            let Ub = !0,
              vb = !1;
            if (!eb || Bb > Tb[eb - 1].to) {
              let bb = xa[Bb - 1];
              bb != Yb && (Ub = !1, vb = 16 == bb)
            }
            let Lb = Ub || 1 != Yb ? null : [],
              Pb = Ub ? Ab : Ab + 1,
              Xb = Bb;
            bb: for (;;)
              if (eb && Xb == Tb[eb - 1].to) {
                if (vb) break bb;
                let jb = Tb[--eb];
                if (!Ub)
                  for (let bb = jb.from, Ub = eb;;) {
                    if (bb == ab) break bb;
                    if (!Ub || Tb[Ub - 1].to != bb) {
                      if (xa[bb - 1] == Yb) break bb;
                      break
                    }
                    bb = Tb[--Ub].from
                  }
                if (Lb) Lb.push(jb);
                else {
                  jb.to < Bb && Eb.push(new Da(jb.to, Bb, Pb)), fa(bb, jb.direction == va != !(Pb % 2) ? Ab + 1 : Ab, Mb, jb.inner, jb.from, jb.to, Eb), Bb = jb.from
                }
                Xb = jb.from
              } else {
                if (Xb == ab || (Ub ? xa[Xb - 1] != Yb : xa[Xb - 1] == Yb)) break;
                Xb--
              } Lb ? ia(bb, Xb, Bb, Ab + 1, Mb, Lb, Eb) : Xb < Bb && Eb.push(new Da(Xb, Bb, Pb)), Bb = Xb
          }
    }

    function fa(bb, ab, Ub, Ab, Mb, Tb, Eb) {
      let Yb = ab % 2 ? 2 : 1;
      ! function(bb, ab, Ub, Ab, Mb) {
        for (let Tb = 0; Tb <= Ab.length; Tb++) {
          let Eb = Tb ? Ab[Tb - 1].to : ab,
            Yb = Tb < Ab.length ? Ab[Tb].from : Ub,
            Bb = Tb ? 256 : Mb;
          for (let ab = Eb, Ub = Bb, Ab = Bb; ab < Yb; ab++) {
            let Mb = ya(bb.charCodeAt(ab));
            512 == Mb ? Mb = Ub : 8 == Mb && 4 == Ab && (Mb = 16), xa[ab] = 4 == Mb ? 2 : Mb, 7 & Mb && (Ab = Mb), Ub = Mb
          }
          for (let bb = Eb, ab = Bb, Ab = Bb; bb < Yb; bb++) {
            let Mb = xa[bb];
            if (128 == Mb) bb < Yb - 1 && ab == xa[bb + 1] && 24 & ab ? Mb = xa[bb] = ab : xa[bb] = 256;
            else if (64 == Mb) {
              let Mb = bb + 1;
              for (; Mb < Yb && 64 == xa[Mb];) Mb++;
              let Tb = bb && 8 == ab || Mb < Ub && 8 == xa[Mb] ? 1 == Ab ? 1 : 8 : 256;
              for (let ab = bb; ab < Mb; ab++) xa[ab] = Tb;
              bb = Mb - 1
            } else 8 == Mb && 1 == Ab && (xa[bb] = 1);
            ab = Mb, 7 & Mb && (Ab = Mb)
          }
        }
      }(bb, Mb, Tb, Ab, Yb),
      function(bb, ab, Ub, Ab, Mb) {
        let Tb = 1 == Mb ? 2 : 1;
        for (let Eb = 0, Yb = 0, Bb = 0; Eb <= Ab.length; Eb++) {
          let eb = Eb ? Ab[Eb - 1].to : ab,
            vb = Eb < Ab.length ? Ab[Eb].from : Ub;
          for (let ab, Ub, Ab, Eb = eb; Eb < vb; Eb++)
            if (Ub = Ra[ab = bb.charCodeAt(Eb)])
              if (Ub < 0) {
                for (let bb = Yb - 3; bb >= 0; bb -= 3)
                  if (ka[bb + 1] == -Ub) {
                    let ab = ka[bb + 2],
                      Ub = 2 & ab ? Mb : 4 & ab ? 1 & ab ? Tb : Mb : 0;
                    Ub && (xa[Eb] = xa[ka[bb]] = Ub), Yb = bb;
                    break
                  }
              } else {
                if (189 == ka.length) break;
                ka[Yb++] = Eb, ka[Yb++] = ab, ka[Yb++] = Bb
              }
          else if (2 == (Ab = xa[Eb]) || 1 == Ab) {
            let bb = Ab == Mb;
            Bb = bb ? 0 : 1;
            for (let ab = Yb - 3; ab >= 0; ab -= 3) {
              let Ub = ka[ab + 2];
              if (2 & Ub) break;
              if (bb) ka[ab + 2] |= 2;
              else {
                if (4 & Ub) break;
                ka[ab + 2] |= 4
              }
            }
          }
        }
      }(bb, Mb, Tb, Ab, Yb),
      function(bb, ab, Ub, Ab) {
        for (let Mb = 0, Tb = Ab; Mb <= Ub.length; Mb++) {
          let Eb = Mb ? Ub[Mb - 1].to : bb,
            Yb = Mb < Ub.length ? Ub[Mb].from : ab;
          for (let Bb = Eb; Bb < Yb;) {
            let Eb = xa[Bb];
            if (256 == Eb) {
              let Eb = Bb + 1;
              for (;;)
                if (Eb == Yb) {
                  if (Mb == Ub.length) break;
                  Eb = Ub[Mb++].to, Yb = Mb < Ub.length ? Ub[Mb].from : ab
                } else {
                  if (256 != xa[Eb]) break;
                  Eb++
                } let eb = 1 == Tb,
                vb = eb == (1 == (Eb < ab ? xa[Eb] : Ab)) ? eb ? 1 : 2 : Ab;
              for (let ab = Eb, Ab = Mb, Tb = Ab ? Ub[Ab - 1].to : bb; ab > Bb;) ab == Tb && (ab = Ub[--Ab].from, Tb = Ab ? Ub[Ab - 1].to : bb), xa[--ab] = vb;
              Bb = Eb
            } else Tb = Eb, Bb++
          }
        }
      }(Mb, Tb, Ab, Yb), ia(bb, Mb, Tb, ab, Ub, Ab, Eb)
    }

    function ma(bb, ab, Ub) {
      if (!bb) return [new Da(0, 0, ab == La ? 1 : 0)];
      if (ab == va && !Ub.length && !Za.test(bb)) return pa(bb.length);
      if (Ub.length)
        for (; bb.length > xa.length;) xa[xa.length] = 256;
      let Ab = [],
        Mb = ab == va ? 0 : 1;
      return fa(bb, Mb, Mb, Ub, 0, bb.length, Ab), Ab
    }

    function pa(bb) {
      return [new Da(0, bb, 0)]
    }
    let Na = "";

    function Wa(bb, ab, Ub, Mb, Tb) {
      var Eb;
      let Yb = Mb.head - bb.from,
        Bb = Da.find(ab, Yb, null !== (Eb = Mb.bidiLevel) && void 0 !== Eb ? Eb : -1, Mb.assoc),
        eb = ab[Bb],
        vb = eb.side(Tb, Ub);
      if (Yb == vb) {
        let bb = Bb += Tb ? 1 : -1;
        if (bb < 0 || bb >= ab.length) return null;
        eb = ab[Bb = bb], Yb = eb.side(!Tb, Ub), vb = eb.side(Tb, Ub)
      }
      let Lb = (0, Ab.T)(bb.text, Yb, eb.forward(Tb, Ub));
      (Lb < eb.from || Lb > eb.to) && (Lb = vb), Na = bb.text.slice(Math.min(Yb, Lb), Math.max(Yb, Lb));
      let Pb = Bb == (Tb ? ab.length - 1 : 0) ? null : ab[Bb + (Tb ? 1 : -1)];
      return Pb && Lb == vb && Pb.level + (Tb ? 0 : 1) < eb.level ? Ab.m.cursor(Pb.side(!Tb, Ub) + bb.from, Pb.forward(Tb, Ub) ? 1 : -1, Pb.level) : Ab.m.cursor(Lb + bb.from, eb.forward(Tb, Ub) ? -1 : 1, eb.level)
    }

    function Ha(bb, ab, Ub) {
      for (let Ab = ab; Ab < Ub; Ab++) {
        let ab = ya(bb.charCodeAt(Ab));
        if (1 == ab) return va;
        if (2 == ab || 4 == ab) return La
      }
      return va
    }
    const Ia = Ab.q.define(),
      da = Ab.q.define(),
      Fa = Ab.q.define(),
      ha = Ab.q.define(),
      Ga = Ab.q.define(),
      Qa = Ab.q.define(),
      qa = Ab.q.define(),
      ua = Ab.q.define(),
      ra = Ab.q.define(),
      Ka = Ab.q.define({
        combine: bb => bb.some((bb => bb))
      }),
      oa = Ab.q.define({
        combine: bb => bb.some((bb => bb))
      }),
      la = Ab.q.define();
    class ta {
      constructor(bb, ab, Ub, Ab, Mb) {
        let Tb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = bb, this.y = ab, this.x = Ub, this.yMargin = Ab, this.xMargin = Mb, this.isSnapshot = Tb
      }
      map(bb) {
        return bb.empty ? this : new ta(this.range.map(bb), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(bb) {
        return this.range.to <= bb.doc.length ? this : new ta(Ab.m.cursor(bb.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const wa = Ab.B.define({
        map: (bb, ab) => bb.map(ab)
      }),
      sa = Ab.B.define();

    function ga(bb, ab, Ub) {
      let Ab = bb.facet(ha);
      Ab.length ? Ab[0](ab) : window.onerror && window.onerror(String(ab), Ub, void 0, void 0, ab) || (Ub ? console.error(Ub + ":", ab) : console.error(ab))
    }
    const Ca = Ab.q.define({
      combine: bb => !bb.length || bb[0]
    });
    let Va = 0;
    const Oa = Ab.q.define({
      combine: bb => bb.filter(((ab, Ub) => {
        for (let Ab = 0; Ab < Ub; Ab++)
          if (bb[Ab].plugin == ab.plugin) return !1;
        return !0
      }))
    });
    class ca {
      constructor(bb, ab, Ub, Ab, Mb) {
        this.id = bb, this.create = ab, this.domEventHandlers = Ub, this.domEventObservers = Ab, this.baseExtensions = Mb(this), this.extension = this.baseExtensions.concat(Oa.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(bb) {
        return this.baseExtensions.concat(Oa.of({
          plugin: this,
          arg: bb
        }))
      }
      static define(bb, ab) {
        const {
          eventHandlers: Ub,
          eventObservers: Ab,
          provide: Mb,
          hA: Tb
        } = ab || {};
        return new ca(Va++, bb, Ub, Ab, (bb => {
          let ab = [];
          return Tb && ab.push(bU.of((ab => {
            let Ub = ab.plugin(bb);
            return Ub ? Tb(Ub) : Fb.none
          }))), Mb && ab.push(Mb(bb)), ab
        }))
      }
      static fromClass(bb, ab) {
        return ca.define(((ab, Ub) => new bb(ab, Ub)), ab)
      }
    }
    class Ja {
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
            } catch (ab) {
              if (ga(bb.state, ab, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (Ub) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(bb, this.spec.arg)
        } catch (ab) {
          ga(bb.state, ab, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(bb) {
        var ab;
        if (null === (ab = this.value) || void 0 === ab ? void 0 : ab.destroy) try {
          this.value.destroy()
        } catch (Ub) {
          ga(bb.state, Ub, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const na = Ab.q.define(),
      Sa = Ab.q.define(),
      bU = Ab.q.define(),
      aU = Ab.q.define(),
      UU = Ab.q.define(),
      AU = Ab.q.define(),
      MU = Ab.q.define();

    function TU(bb, ab) {
      let Ub = bb.state.facet(MU);
      if (!Ub.length) return Ub;
      let Mb = Ub.map((ab => ab instanceof Function ? ab(bb) : ab)),
        Tb = [];
      return Ab.y.spans(Mb, ab.from, ab.to, {
        point() {},
        span(bb, Ub, Ab, Mb) {
          let Eb = bb - ab.from,
            Yb = Ub - ab.from,
            Bb = Tb;
          for (let Tb = Ab.length - 1; Tb >= 0; Tb--, Mb--) {
            let bb, Ub = Ab[Tb].spec.bidiIsolate;
            if (null == Ub && (Ub = Ha(ab.text, Eb, Yb)), Mb > 0 && Bb.length && (bb = Bb[Bb.length - 1]).to == Eb && bb.direction == Ub) bb.to = Yb, Bb = bb.inner;
            else {
              let bb = {
                from: Eb,
                to: Yb,
                direction: Ub,
                inner: []
              };
              Bb.push(bb), Bb = bb.inner
            }
          }
        }
      }), Tb
    }
    const EU = Ab.q.define();

    function YU(bb) {
      let ab = 0,
        Ub = 0,
        Ab = 0,
        Mb = 0;
      for (let Tb of bb.state.facet(EU)) {
        let Eb = Tb(bb);
        Eb && (null != Eb.left && (ab = Math.max(ab, Eb.left)), null != Eb.right && (Ub = Math.max(Ub, Eb.right)), null != Eb.top && (Ab = Math.max(Ab, Eb.top)), null != Eb.bottom && (Mb = Math.max(Mb, Eb.bottom)))
      }
      return {
        left: ab,
        right: Ub,
        top: Ab,
        bottom: Mb
      }
    }
    const BU = Ab.q.define();
    class eU {
      constructor(bb, ab, Ub, Ab) {
        this.fromA = bb, this.toA = ab, this.fromB = Ub, this.toB = Ab
      }
      join(bb) {
        return new eU(Math.min(this.fromA, bb.fromA), Math.max(this.toA, bb.toA), Math.min(this.fromB, bb.fromB), Math.max(this.toB, bb.toB))
      }
      addToSet(bb) {
        let ab = bb.length,
          Ub = this;
        for (; ab > 0; ab--) {
          let Ab = bb[ab - 1];
          if (!(Ab.fromA > Ub.toA)) {
            if (Ab.toA < Ub.fromA) break;
            Ub = Ub.join(Ab), bb.splice(ab - 1, 1)
          }
        }
        return bb.splice(ab, 0, Ub), bb
      }
      static extendWithRanges(bb, ab) {
        if (0 == ab.length) return bb;
        let Ub = [];
        for (let Ab = 0, Mb = 0, Tb = 0;;) {
          let Eb = Ab < bb.length ? bb[Ab].fromB : 1e9,
            Yb = Mb < ab.length ? ab[Mb] : 1e9,
            Bb = Math.min(Eb, Yb);
          if (1e9 == Bb) break;
          let eb = Bb + Tb,
            vb = Bb,
            Lb = eb;
          for (;;)
            if (Mb < ab.length && ab[Mb] <= vb) {
              let Ub = ab[Mb + 1];
              Mb += 2, vb = Math.max(vb, Ub);
              for (let ab = Ab; ab < bb.length && bb[ab].fromB <= vb; ab++) Tb = bb[ab].toA - bb[ab].toB;
              Lb = Math.max(Lb, Ub + Tb)
            } else {
              if (!(Ab < bb.length && bb[Ab].fromB <= vb)) break;
              {
                let ab = bb[Ab++];
                vb = Math.max(vb, ab.toB), Lb = Math.max(Lb, ab.toA), Tb = ab.toA - ab.toB
              }
            } Ub.push(new eU(eb, Lb, Bb, vb))
        }
        return Ub
      }
    }
    class vU {
      constructor(bb, ab, Ub) {
        this.view = bb, this.state = ab, this.transactions = Ub, this.flags = 0, this.startState = bb.state, this.changes = Ab.ChangeSet.empty(this.startState.doc.length);
        for (let Ab of Ub) this.changes = this.changes.compose(Ab.changes);
        let Mb = [];
        this.changes.iterChangedRanges(((bb, ab, Ub, Ab) => Mb.push(new eU(bb, ab, Ub, Ab)))), this.changedRanges = Mb
      }
      static create(bb, ab, Ub) {
        return new vU(bb, ab, Ub)
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
    const LU = [];
    class PU {
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = bb, this.length = ab, this.flags = Ub, this.parent = null, bb.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return LU
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
          bb && function(bb, ab) {
            for (let Ub = bb.attributes.length - 1; Ub >= 0; Ub--) {
              let Ab = bb.attributes[Ub].name;
              null == ab[Ab] && bb.removeAttribute(Ab)
            }
            for (let Ub in ab) {
              let Ab = ab[Ub];
              "style" == Ub ? bb.style.cssText = Ab : bb.getAttribute(Ub) != Ab && bb.setAttribute(Ub, Ab)
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
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let Ub of this.children) {
          if (Ub == bb) return ab;
          ab += Ub.length + Ub.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(bb) {
        return this.posBefore(bb) + bb.length
      }
      covers(bb) {
        return !0
      }
      coordsIn(bb, ab) {
        return null
      }
      domPosFor(bb, ab) {
        let Ub = sb(this.dom),
          Ab = this.length ? bb > 0 : ab > 0;
        return new Ba(this.parent.dom, Ub + (Ab ? 1 : 0), 0 == bb || bb == this.length)
      }
      markDirty(bb) {
        this.flags &= -3, bb && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let bb = this; bb; bb = bb.parent)
          if (bb instanceof RU) return bb;
        return null
      }
      static get(bb) {
        return bb.cmTile
      }
    }
    class XU extends PU {
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
        let ab, Ub = this.dom,
          Ab = null,
          Mb = (null === bb || void 0 === bb ? void 0 : bb.node) == Ub ? bb : null,
          Tb = 0;
        for (let Eb of this.children) {
          if (Eb.sync(bb), Tb += Eb.length + Eb.breakAfter, ab = Ab ? Ab.nextSibling : Ub.firstChild, Mb && ab != Eb.dom && (Mb.written = !0), Eb.dom.parentNode == Ub)
            for (; ab && ab != Eb.dom;) ab = jU(ab);
          else Ub.insertBefore(Eb.dom, ab);
          Ab = Eb.dom
        }
        for (ab = Ab ? Ab.nextSibling : Ub.firstChild, Mb && ab && (Mb.written = !0); ab;) ab = jU(ab);
        this.length = Tb
      }
    }

    function jU(bb) {
      let ab = bb.nextSibling;
      return bb.parentNode.removeChild(bb), ab
    }
    class RU extends XU {
      constructor(bb, ab) {
        super(ab), this.view = bb
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
          let ab = PU.get(bb);
          if (ab && this.owns(ab)) return ab;
          bb = bb.parentNode
        }
      }
      blockTiles(bb) {
        for (let ab = [], Ub = this, Ab = 0, Mb = 0;;)
          if (Ab == Ub.children.length) {
            if (!ab.length) return;
            Ub = Ub.parent, Ub.breakAfter && Mb++, Ab = ab.pop()
          } else {
            let Tb = Ub.children[Ab++];
            if (Tb instanceof kU) ab.push(Ab), Ub = Tb, Ab = 0;
            else {
              let ab = Mb + Tb.length,
                Ub = bb(Tb, Mb);
              if (void 0 !== Ub) return Ub;
              Mb = ab + Tb.breakAfter
            }
          }
      }
      resolveBlock(bb, ab) {
        let Ub, Ab, Mb = -1,
          Tb = -1;
        if (this.blockTiles(((Eb, Yb) => {
            let Bb = Yb + Eb.length;
            if (bb >= Yb && bb <= Bb) {
              if (Eb.isWidget() && ab >= -1 && ab <= 1) {
                if (32 & Eb.flags) return !0;
                16 & Eb.flags && (Ub = void 0)
              }(Yb < bb || bb == Bb && (ab < -1 ? Eb.length : Eb.covers(1))) && (!Ub || !Eb.isWidget() && Ub.isWidget()) && (Ub = Eb, Mb = bb - Yb), (Bb > bb || bb == Yb && (ab > 1 ? Eb.length : Eb.covers(-1))) && (!Ab || !Eb.isWidget() && Ab.isWidget()) && (Ab = Eb, Tb = bb - Yb)
            }
          })), !Ub && !Ab) throw new Error("No tile at position " + bb);
        return Ub && ab < 0 || !Ab ? {
          tile: Ub,
          offset: Mb
        } : {
          tile: Ab,
          offset: Tb
        }
      }
    }
    class kU extends XU {
      constructor(bb, ab) {
        super(bb), this.wrapper = ab
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
      static of (bb, ab) {
        let Ub = new kU(ab || document.createElement(bb.tagName), bb);
        return ab || (Ub.flags |= 4), Ub
      }
    }
    class yU extends XU {
      constructor(bb, ab) {
        super(bb), this.attrs = ab
      }
      isLine() {
        return !0
      }
      static start(bb, ab, Ub) {
        let Ab = new yU(ab || document.createElement("div"), bb);
        return ab && Ub || (Ab.flags |= 4), Ab
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(bb, ab, Ub) {
        let Ab = null,
          Mb = -1,
          Tb = null,
          Eb = -1;
        ! function bb(Yb, Bb) {
          for (let eb = 0, vb = 0; eb < Yb.children.length && vb <= Bb; eb++) {
            let Lb = Yb.children[eb],
              Pb = vb + Lb.length;
            Pb >= Bb && (Lb.isComposite() ? bb(Lb, Bb - vb) : (!Tb || Tb.isHidden && (ab > 0 || Ub && ZU(Tb, Lb))) && (Pb > Bb || 32 & Lb.flags) ? (Tb = Lb, Eb = Bb - vb) : (vb < Bb || 16 & Lb.flags && !Lb.isHidden) && (Ab = Lb, Mb = Bb - vb)), vb = Pb
          }
        }(this, bb);
        let Yb = (ab < 0 ? Ab : Tb) || Ab || Tb;
        return Yb ? {
          tile: Yb,
          offset: Yb == Ab ? Mb : Eb
        } : null
      }
      coordsIn(bb, ab) {
        let Ub = this.resolveInline(bb, ab, !0);
        return Ub ? Ub.tile.coordsIn(Math.max(0, Ub.offset), ab) : function(bb) {
          let ab = bb.dom.lastChild;
          if (!ab) return bb.dom.getBoundingClientRect();
          let Ub = tb(ab);
          return Ub[Ub.length - 1] || null
        }(this)
      }
      domIn(bb, ab) {
        let Ub = this.resolveInline(bb, ab);
        if (Ub) {
          let {
            tile: bb,
            offset: Ab
          } = Ub;
          if (this.dom.contains(bb.dom)) return bb.isText() ? new Ba(bb.dom, Math.min(bb.dom.nodeValue.length, Ab)) : bb.domPosFor(Ab, 16 & bb.flags ? 1 : 32 & bb.flags ? -1 : ab);
          let Mb = Ub.tile.parent,
            Tb = !1;
          for (let ab of Mb.children) {
            if (Tb) return new Ba(ab.dom, 0);
            ab == Ub.tile && (Tb = !0)
          }
        }
        return new Ba(this.dom, 0)
      }
    }

    function ZU(bb, ab) {
      let Ub = bb.coordsIn(0, 1),
        Ab = ab.coordsIn(0, 1);
      return Ub && Ab && Ab.top < Ub.bottom
    }
    class DU extends XU {
      constructor(bb, ab) {
        super(bb), this.mark = ab
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (bb, ab) {
        let Ub = new DU(ab || document.createElement(bb.tagName), bb);
        return ab || (Ub.flags |= 4), Ub
      }
    }
    class zU extends PU {
      constructor(bb, ab) {
        super(bb, ab.length), this.text = ab
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
      coordsIn(bb, ab) {
        let Ub = this.dom.nodeValue.length;
        bb > Ub && (bb = Ub);
        let Ab = bb,
          Mb = bb,
          Tb = 0;
        0 == bb && ab < 0 || bb == Ub && ab >= 0 ? fb.chrome || fb.gecko || (bb ? (Ab--, Tb = 1) : Mb < Ub && (Mb++, Tb = -1)) : ab < 0 ? Ab-- : Mb < Ub && Mb++;
        let Eb = Aa(this.dom, Ab, Mb).getClientRects();
        if (!Eb.length) return null;
        let Yb = Eb[(Tb ? Tb < 0 : ab >= 0) ? 0 : Eb.length - 1];
        return fb.safari && !Tb && 0 == Yb.width && (Yb = Array.prototype.find.call(Eb, (bb => bb.width)) || Yb), Tb ? Ob(Yb, Tb < 0) : Yb || null
      }
      static of (bb, ab) {
        let Ub = new zU(ab || document.createTextNode(bb), bb);
        return ab || (Ub.flags |= 2), Ub
      }
    }
    class xU extends PU {
      constructor(bb, ab, Ub, Ab) {
        super(bb, ab, Ab), this.widget = Ub
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
      coordsIn(bb, ab) {
        return this.coordsInWidget(bb, ab, !1)
      }
      coordsInWidget(bb, ab, Ub) {
        let Ab = this.widget.coordsAt(this.dom, bb, ab);
        if (Ab) return Ab;
        if (Ub) return Ob(this.dom.getBoundingClientRect(), this.length ? 0 == bb : ab <= 0);
        {
          let ab = this.dom.getClientRects(),
            Ub = null;
          if (!ab.length) return null;
          let Ab = !!(16 & this.flags) || !(32 & this.flags) && bb > 0;
          for (let Mb = Ab ? ab.length - 1 : 0; Ub = ab[Mb], !(bb > 0 ? 0 == Mb : Mb == ab.length - 1 || Ub.top < Ub.bottom); Mb += Ab ? -1 : 1);
          return Ob(Ub, !Ab)
        }
      }
      get overrideDOMText() {
        if (!this.length) return Ab.G.empty;
        let {
          root: bb
        } = this;
        if (!bb) return Ab.G.empty;
        let ab = this.posAtStart;
        return bb.view.state.doc.slice(ab, ab + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (bb, ab, Ub, Ab, Mb) {
        return Mb || (Mb = bb.toDOM(ab), bb.editable || (Mb.contentEditable = "false")), new xU(Mb, Ub, bb, Ab)
      }
    }
    class iU extends PU {
      constructor(bb) {
        let ab = document.createElement("img");
        ab.className = "cm-widgetBuffer", ab.setAttribute("aria-hidden", "true"), super(ab, 0, bb)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return Ab.G.empty
      }
      coordsIn(bb) {
        return this.dom.getBoundingClientRect()
      }
    }
    class fU {
      constructor(bb) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = bb
      }
      advance(bb, ab, Ub) {
        let {
          tile: Ab,
          index: Mb,
          beforeBreak: Tb,
          parents: Eb
        } = this;
        for (; bb || ab > 0;)
          if (Ab.isComposite())
            if (Tb) {
              if (!bb) break;
              Ub && Ub.break(), bb--, Tb = !1
            } else if (Mb == Ab.children.length) {
          if (!bb && !Eb.length) break;
          Ub && Ub.leave(Ab), Tb = !!Ab.breakAfter, ({
            tile: Ab,
            index: Mb
          } = Eb.pop()), Mb++
        } else {
          let Yb = Ab.children[Mb],
            Bb = Yb.breakAfter;
          !(ab > 0 ? Yb.length <= bb : Yb.length < bb) || Ub && !1 === Ub.skip(Yb, 0, Yb.length) && Yb.isComposite ? (Eb.push({
            tile: Ab,
            index: Mb
          }), Ab = Yb, Mb = 0, Ub && Yb.isComposite() && Ub.enter(Yb)) : (Tb = !!Bb, Mb++, bb -= Yb.length)
        } else if (Mb == Ab.length) Tb = !!Ab.breakAfter, ({
          tile: Ab,
          index: Mb
        } = Eb.pop()), Mb++;
        else {
          if (!bb) break;
          {
            let ab = Math.min(bb, Ab.length - Mb);
            Ub && Ub.skip(Ab, Mb, Mb + ab), bb -= ab, Mb += ab
          }
        }
        return this.tile = Ab, this.index = Mb, this.beforeBreak = Tb, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class mU {
      constructor(bb, ab, Ub, Ab) {
        this.from = bb, this.to = ab, this.wrapper = Ub, this.rank = Ab
      }
    }
    class pU {
      constructor(bb, ab, Ub) {
        this.cache = bb, this.root = ab, this.blockWrappers = Ub, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(bb, ab, Ub, Ab) {
        var Mb;
        this.flushBuffer();
        let Tb = this.ensureMarks(ab, Ub),
          Eb = Tb.lastChild;
        if (Eb && Eb.isText() && !(8 & Eb.flags) && Eb.length + bb.length < 512) {
          this.cache.reused.set(Eb, 2), (Tb.children[Tb.children.length - 1] = new zU(Eb.dom, Eb.text + bb)).parent = Tb
        } else Tb.append(Ab || zU.of(bb, null === (Mb = this.cache.find(zU)) || void 0 === Mb ? void 0 : Mb.dom));
        this.pos += bb.length, this.afterWidget = null
      }
      addComposition(bb, ab) {
        let Ub = this.curLine;
        Ub.dom != ab.line.dom && (Ub.setDOM(this.cache.reused.has(ab.line) ? hU(ab.line.dom) : ab.line.dom), this.cache.reused.set(ab.line, 2));
        let Ab = Ub;
        for (let Eb = ab.marks.length - 1; Eb >= 0; Eb--) {
          let bb = ab.marks[Eb],
            Ub = Ab.lastChild;
          if (Ub instanceof DU && Ub.mark.eq(bb.mark)) Ub.dom != bb.dom && Ub.setDOM(hU(bb.dom)), Ab = Ub;
          else {
            if (this.cache.reused.get(bb)) {
              let ab = PU.get(bb.dom);
              ab && ab.setDOM(hU(bb.dom))
            }
            let ab = DU.of(bb.mark, bb.dom);
            Ab.append(ab), Ab = ab
          }
          this.cache.reused.set(bb, 2)
        }
        let Mb = PU.get(bb.text);
        Mb && this.cache.reused.set(Mb, 2);
        let Tb = new zU(bb.text, bb.text.nodeValue);
        Tb.flags |= 8, Ab.append(Tb)
      }
      addInlineWidget(bb, ab, Ub) {
        let Ab = this.afterWidget && 48 & bb.flags && (48 & this.afterWidget.flags) == (48 & bb.flags);
        Ab || this.flushBuffer();
        let Mb = this.ensureMarks(ab, Ub);
        Ab || 16 & bb.flags || Mb.append(this.getBuffer(1)), Mb.append(bb), this.pos += bb.length, this.afterWidget = bb
      }
      addMark(bb, ab, Ub) {
        this.flushBuffer(), this.ensureMarks(ab, Ub).append(bb), this.pos += bb.length, this.afterWidget = null
      }
      addBlockWidget(bb) {
        this.getBlockPos().append(bb), this.pos += bb.length, this.lastBlock = bb, this.endLine()
      }
      continueWidget(bb) {
        (this.afterWidget || this.lastBlock).length += bb, this.pos += bb
      }
      addLineStart(bb, ab) {
        var Ub;
        bb || (bb = FU);
        let Ab = yU.start(bb, ab || (null === (Ub = this.cache.find(yU)) || void 0 === Ub ? void 0 : Ub.dom), !!ab);
        this.getBlockPos().append(this.lastBlock = this.curLine = Ab)
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
      ensureMarks(bb, ab) {
        var Ub;
        let Ab = this.curLine;
        for (let Mb = bb.length - 1; Mb >= 0; Mb--) {
          let Tb, Eb = bb[Mb];
          if (ab > 0 && (Tb = Ab.lastChild) && Tb instanceof DU && Tb.mark.eq(Eb)) Ab = Tb, ab--;
          else {
            let bb = DU.of(Eb, null === (Ub = this.cache.find(DU, (bb => bb.mark.eq(Eb)))) || void 0 === Ub ? void 0 : Ub.dom);
            Ab.append(bb), Ab = bb, ab = 0
          }
        }
        return Ab
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let bb = this.curLine.lastChild;
          bb && dU(this.curLine, !1) && ("BR" == bb.dom.nodeName || !bb.isWidget() || fb.ios && dU(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(QU, 0, 32) || new xU(QU.toDOM(), 0, QU, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let bb = this.wrappers.length - 1; bb >= 0; bb--) this.wrappers[bb].to < this.pos && this.wrappers.splice(bb, 1);
        for (let bb = this.blockWrappers; bb.value && bb.from <= this.pos; bb.next())
          if (bb.to >= this.pos) {
            let ab = new mU(bb.from, bb.to, bb.value, bb.rank),
              Ub = this.wrappers.length;
            for (; Ub > 0 && (this.wrappers[Ub - 1].rank - ab.rank || this.wrappers[Ub - 1].to - ab.to) < 0;) Ub--;
            this.wrappers.splice(Ub, 0, ab)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var bb;
        this.updateBlockWrappers();
        let ab = this.root;
        for (let Ub of this.wrappers) {
          let Ab = ab.lastChild;
          if (Ub.from < this.pos && Ab instanceof kU && Ab.wrapper.eq(Ub.wrapper)) ab = Ab;
          else {
            let Ab = kU.of(Ub.wrapper, null === (bb = this.cache.find(kU, (bb => bb.wrapper.eq(Ub.wrapper)))) || void 0 === bb ? void 0 : bb.dom);
            ab.append(Ab), ab = Ab
          }
        }
        return ab
      }
      blockPosCovered() {
        let bb = this.lastBlock;
        return null != bb && !bb.breakAfter && (!bb.isWidget() || (160 & bb.flags) > 0)
      }
      getBuffer(bb) {
        let ab = 2 | (bb < 0 ? 16 : 32),
          Ub = this.cache.find(iU, void 0, 1);
        return Ub && (Ub.flags = ab), Ub || new iU(ab)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class NU {
      constructor(bb) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = bb.iter()
      }
      skip(bb) {
        this.textOff + bb <= this.text.length ? this.textOff += bb : (this.skipCount += bb - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(bb) {
        if (this.textOff == this.text.length) {
          let {
            value: ab,
            lineBreak: Ub,
            done: Ab
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, Ab) throw new Error("Ran out of text content when drawing inline views");
          this.text = ab;
          let Mb = this.textOff = Math.min(bb, ab.length);
          return Ub ? null : ab.slice(0, Mb)
        }
        let ab = Math.min(this.text.length, this.textOff + bb),
          Ub = this.text.slice(this.textOff, ab);
        return this.textOff = ab, Ub
      }
    }
    const WU = [xU, yU, zU, DU, iU, kU, RU];
    for (let dE = 0; dE < WU.length; dE++) WU[dE].bucket = dE;
    class HU {
      constructor(bb) {
        this.view = bb, this.buckets = WU.map((() => [])), this.index = WU.map((() => 0)), this.reused = new Map
      }
      add(bb) {
        let ab = bb.constructor.bucket,
          Ub = this.buckets[ab];
        Ub.length < 6 ? Ub.push(bb) : Ub[this.index[ab] = (this.index[ab] + 1) % 6] = bb
      }
      find(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          Ab = bb.bucket,
          Mb = this.buckets[Ab],
          Tb = this.index[Ab];
        for (let Eb = Mb.length - 1; Eb >= 0; Eb--) {
          let bb = (Eb + Tb) % Mb.length,
            Yb = Mb[bb];
          if ((!ab || ab(Yb)) && !this.reused.has(Yb)) return Mb.splice(bb, 1), bb < Tb && this.index[Ab]--, this.reused.set(Yb, Ub), Yb
        }
        return null
      }
      findWidget(bb, ab, Ub) {
        let Ab = this.buckets[0];
        if (Ab.length)
          for (let Mb = 0, Tb = 0;; Mb++) {
            if (Mb == Ab.length) {
              if (Tb) return null;
              Tb = 1, Mb = 0
            }
            let Eb = Ab[Mb];
            if (!this.reused.has(Eb) && (0 == Tb ? Eb.widget.compare(bb) : Eb.widget.constructor == bb.constructor && bb.updateDOM(Eb.dom, this.view, Eb.widget))) return Ab.splice(Mb, 1), Mb < this.index[0] && this.index[0]--, Eb.widget == bb && Eb.length == ab && (497 & Eb.flags) == Ub ? (this.reused.set(Eb, 1), Eb) : (this.reused.set(Eb, 2), new xU(Eb.dom, ab, bb, -498 & Eb.flags | Ub))
          }
      }
      reuse(bb) {
        return this.reused.set(bb, 1), bb
      }
      maybeReuse(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(bb)) return this.reused.set(bb, ab), bb.dom
      }
      clear() {
        for (let bb = 0; bb < this.buckets.length; bb++) this.buckets[bb].length = this.index[bb] = 0
      }
    }
    class IU {
      constructor(bb, ab, Ub, Mb, Tb) {
        this.view = bb, this.hA = Mb, this.disallowBlockEffectsFor = Tb, this.openWidget = !1, this.openMarks = 0, this.cache = new HU(bb), this.text = new NU(bb.state.doc), this.builder = new pU(this.cache, new RU(bb, bb.contentDOM), Ab.y.iter(Ub)), this.cache.reused.set(ab, 2), this.old = new fU(ab), this.reuseWalker = {
          skip: (bb, ab, Ub) => {
            if (this.cache.add(bb), bb.isComposite()) return !1
          },
          enter: bb => this.cache.add(bb),
          leave: () => {},
          break: () => {}
        }
      }
      run(bb, ab) {
        let Ub = ab && this.getCompositionContext(ab.text);
        for (let Ab = 0, Mb = 0, Tb = 0;;) {
          let Eb = Tb < bb.length ? bb[Tb++] : null,
            Yb = Eb ? Eb.fromA : this.old.root.length;
          if (Yb > Ab) {
            let bb = Yb - Ab;
            this.preserve(bb, !Tb, !Eb), Ab = Yb, Mb += bb
          }
          if (!Eb) break;
          ab && Eb.fromA <= ab.range.fromA && Eb.toA >= ab.range.toA ? (this.forward(Eb.fromA, ab.range.fromA, ab.range.fromA < ab.range.toA ? 1 : -1), this.emit(Mb, ab.range.fromB), this.cache.clear(), this.builder.addComposition(ab, Ub), this.text.skip(ab.range.toB - ab.range.fromB), this.forward(ab.range.fromA, Eb.toA), this.emit(ab.range.toB, Eb.toB)) : (this.forward(Eb.fromA, Eb.toA), this.emit(Mb, Eb.toB)), Mb = Eb.toB, Ab = Eb.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(bb, ab, Ub) {
        let Ab = function(bb) {
            let ab = [];
            for (let Ub = bb.parents.length; Ub > 1; Ub--) {
              let Ab = Ub == bb.parents.length ? bb.tile : bb.parents[Ub].tile;
              Ab instanceof DU && ab.push(Ab.mark)
            }
            return ab
          }(this.old),
          Mb = this.openMarks;
        this.old.advance(bb, Ub ? 1 : -1, {
          skip: (bb, ab, Ub) => {
            if (bb.isWidget())
              if (this.openWidget) this.builder.continueWidget(Ub - ab);
              else {
                let Tb = Ub > 0 || ab < bb.length ? xU.of(bb.widget, this.view, Ub - ab, 496 & bb.flags, this.cache.maybeReuse(bb)) : this.cache.reuse(bb);
                256 & Tb.flags ? (Tb.flags &= -2, this.builder.addBlockWidget(Tb)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(Tb, Ab, Mb), Mb = Ab.length)
              }
            else if (bb.isText()) this.builder.ensureLine(null), ab || Ub != bb.length || this.cache.reused.has(bb) ? (this.cache.add(bb), this.builder.addText(bb.text.slice(ab, Ub), Ab, Mb)) : this.builder.addText(bb.text, Ab, Mb, this.cache.reuse(bb)), Mb = Ab.length;
            else if (bb.isLine()) bb.flags &= -2, this.cache.reused.set(bb, 1), this.builder.addLine(bb);
            else if (bb instanceof iU) this.cache.add(bb);
            else {
              if (!(bb instanceof DU)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(bb, Ab, Mb), this.cache.reused.set(bb, 1), Mb = Ab.length
            }
            this.openWidget = !1
          },
          enter: bb => {
            bb.isLine() ? this.builder.addLineStart(bb.attrs, this.cache.maybeReuse(bb)) : (this.cache.add(bb), bb instanceof DU && Ab.unshift(bb.mark)), this.openWidget = !1
          },
          leave: bb => {
            bb.isLine() ? Ab.length && (Ab.length = Mb = 0) : bb instanceof DU && (Ab.shift(), Mb = Math.min(Mb, Ab.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(bb)
      }
      emit(bb, ab) {
        let Ub = null,
          Mb = this.builder,
          Tb = 0,
          Eb = Ab.y.spans(this.hA, bb, ab, {
            point: (bb, ab, Ab, Eb, Yb, Bb) => {
              if (Ab instanceof Qb) {
                if (this.disallowBlockEffectsFor[Bb]) {
                  if (Ab.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (ab > this.view.state.doc.lineAt(bb).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (Tb = Eb.length, Yb > Eb.length) Mb.continueWidget(ab - bb);
                else {
                  let Tb = Ab.widget || (Ab.block ? GU.block : GU.inline),
                    Bb = function(bb) {
                      let ab = bb.isReplace ? (bb.startSide < 0 ? 64 : 0) | (bb.endSide > 0 ? 128 : 0) : bb.startSide > 0 ? 32 : 16;
                      bb.block && (ab |= 256);
                      return ab
                    }(Ab),
                    eb = this.cache.findWidget(Tb, ab - bb, Bb) || xU.of(Tb, this.view, ab - bb, Bb);
                  Ab.block ? (Ab.startSide > 0 && Mb.addLineStartIfNotCovered(Ub), Mb.addBlockWidget(eb)) : (Mb.ensureLine(Ub), Mb.addInlineWidget(eb, Eb, Yb))
                }
                Ub = null
              } else Ub = function(bb, ab) {
                let Ub = ab.spec.attributes,
                  Ab = ab.spec.class;
                if (!Ub && !Ab) return bb;
                bb || (bb = {
                  class: "cm-line"
                });
                Ub && mb(Ub, bb);
                Ab && (bb.class += " " + Ab);
                return bb
              }(Ub, Ab);
              ab > bb && this.text.skip(ab - bb)
            },
            span: (bb, ab, Ab, Tb) => {
              for (let Eb = bb; Eb < ab;) {
                let Yb = this.text.next(Math.min(512, ab - Eb));
                null == Yb ? (Mb.addLineStartIfNotCovered(Ub), Mb.addBreak(), Eb++) : (Mb.ensureLine(Ub), Mb.addText(Yb, Ab, Eb == bb ? Tb : Ab.length), Eb += Yb.length), Ub = null
              }
            }
          });
        Mb.addLineStartIfNotCovered(Ub), this.openWidget = Eb > Tb, this.openMarks = Eb
      }
      forward(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        ab - bb <= 10 ? this.old.advance(ab - bb, Ub, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(ab - bb - 10, -1), this.old.advance(5, Ub, this.reuseWalker))
      }
      getCompositionContext(bb) {
        let ab = [],
          Ub = null;
        for (let Ab = bb.parentNode;; Ab = Ab.parentNode) {
          let bb = PU.get(Ab);
          if (Ab == this.view.contentDOM) break;
          bb instanceof DU ? ab.push(bb) : (null === bb || void 0 === bb ? void 0 : bb.isLine()) ? Ub = bb : bb instanceof kU || ("DIV" != Ab.nodeName || Ub || Ab == this.view.contentDOM ? Ub || ab.push(DU.of(new hb({
            tagName: Ab.nodeName.toLowerCase(),
            attributes: Hb(Ab)
          }), Ab)) : Ub = new yU(Ab, FU))
        }
        return {
          line: Ub,
          marks: ab
        }
      }
    }

    function dU(bb, ab) {
      let Ub = bb => {
        for (let Ab of bb.children)
          if ((ab ? Ab.isText() : Ab.length) || Ub(Ab)) return !0;
        return !1
      };
      return Ub(bb)
    }
    const FU = {
      class: "cm-line"
    };

    function hU(bb) {
      let ab = PU.get(bb);
      return ab && ab.setDOM(bb.cloneNode()), bb
    }
    class GU extends Ib {
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
    GU.inline = new GU("span"), GU.block = new GU("div");
    const QU = new class extends Ib {
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
    class qU {
      constructor(bb) {
        this.view = bb, this.hA = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = Fb.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new RU(bb, bb.contentDOM), this.updateInner([new eU(0, 0, 0, bb.state.doc.length)], null)
      }
      update(bb) {
        var ab;
        let Ub = bb.changedRanges;
        this.minWidth > 0 && Ub.length && (Ub.every((bb => {
          let {
            fromA: ab,
            toA: Ub
          } = bb;
          return Ub < this.minWidthFrom || ab > this.minWidthTo
        })) ? (this.minWidthFrom = bb.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = bb.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(bb);
        let Mb = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (ab = this.domChanged) || void 0 === ab ? void 0 : ab.newSel) ? Mb = this.domChanged.newSel.head : function(bb, ab) {
          let Ub = !1;
          ab && bb.iterChangedRanges(((bb, Ab) => {
            bb < ab.to && Ab > ab.from && (Ub = !0)
          }));
          return Ub
        }(bb.changes, this.hasComposition) || bb.selectionSet || (Mb = bb.state.selection.main.head));
        let Tb = Mb > -1 ? function(bb, ab, Ub) {
          let Ab = rU(bb, Ub);
          if (!Ab) return null;
          let {
            node: Mb,
            from: Tb,
            to: Eb
          } = Ab, Yb = Mb.nodeValue;
          if (/[\n\r]/.test(Yb)) return null;
          if (bb.state.doc.sliceString(Ab.from, Ab.to) != Yb) return null;
          let Bb = ab.invertedDesc;
          return {
            range: new eU(Bb.mapPos(Tb), Bb.mapPos(Eb), Tb, Eb),
            text: Mb
          }
        }(this.view, bb.changes, Mb) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: ab,
            to: Ab
          } = this.hasComposition;
          Ub = new eU(ab, Ab, bb.changes.mapPos(ab, -1), bb.changes.mapPos(Ab, 1)).addToSet(Ub.slice())
        }
        this.hasComposition = Tb ? {
          from: Tb.range.fromB,
          to: Tb.range.toB
        } : null, (fb.ie || fb.chrome) && !Tb && bb && bb.state.doc.lines != bb.startState.doc.lines && (this.forceSelection = !0);
        let Eb = this.hA,
          Yb = this.blockWrappers;
        this.updateDeco();
        let Bb = function(bb, ab, Ub) {
          let Mb = new KU;
          return Ab.y.compare(bb, ab, Ub, Mb), Mb.changes
        }(Eb, this.hA, bb.changes);
        Bb.length && (Ub = eU.extendWithRanges(Ub, Bb));
        let eb = function(bb, ab, Ub) {
          let Mb = new oU;
          return Ab.y.compare(bb, ab, Ub, Mb), Mb.changes
        }(Yb, this.blockWrappers, bb.changes);
        return eb.length && (Ub = eU.extendWithRanges(Ub, eb)), Tb && !Ub.some((bb => bb.fromA <= Tb.range.fromA && bb.toA >= Tb.range.toA)) && (Ub = Tb.range.addToSet(Ub.slice())), !(2 & this.tile.flags && 0 == Ub.length) && (this.updateInner(Ub, Tb), bb.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(bb, ab) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: Ub
        } = this.view;
        Ub.ignore((() => {
          if (ab || bb.length) {
            let Ub = this.tile,
              Ab = new IU(this.view, Ub, this.blockWrappers, this.hA, this.dynamicDecorationMap);
            ab && PU.get(ab.text) && Ab.cache.reused.set(PU.get(ab.text), 2), this.tile = Ab.run(bb, ab), uU(Ub, Ab.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let Ab = fb.chrome || fb.ios ? {
            node: Ub.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(Ab), !Ab || !Ab.written && Ub.selectionRange.focusNode == Ab.node && this.tile.dom.contains(Ab.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let Ab = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let Mb of this.tile.children) Mb.isWidget() && Mb.widget instanceof lU && Ab.push(Mb.dom);
        Ub.updateGaps(Ab)
      }
      updateEditContextFormatting(bb) {
        this.editContextFormatting = this.editContextFormatting.map(bb.changes);
        for (let ab of bb.transactions)
          for (let bb of ab.effects) bb.is(sa) && (this.editContextFormatting = bb.value)
      }
      updateSelection() {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: ab
        } = this.tile, Ub = this.view.root.activeElement, Ab = Ub == ab, Mb = !Ab && !(this.view.state.facet(Ca) || ab.tabIndex > -1) && lb(ab, this.view.observer.selectionRange) && !(Ub && ab.contains(Ub));
        if (!(Ab || bb || Mb)) return;
        let Tb = this.forceSelection;
        this.forceSelection = !1;
        let Eb, Yb, Bb = this.view.state.selection.main;
        if (Bb.empty ? Yb = Eb = this.inlineDOMNearPos(Bb.anchor, Bb.assoc || 1) : (Yb = this.inlineDOMNearPos(Bb.head, Bb.head == Bb.from ? 1 : -1), Eb = this.inlineDOMNearPos(Bb.anchor, Bb.anchor == Bb.from ? 1 : -1)), fb.gecko && Bb.empty && !this.hasComposition && (1 == (eb = Eb).node.nodeType && eb.node.firstChild && (0 == eb.offset || "false" == eb.node.childNodes[eb.offset - 1].contentEditable) && (eb.offset == eb.node.childNodes.length || "false" == eb.node.childNodes[eb.offset].contentEditable))) {
          let bb = document.createTextNode("");
          this.view.observer.ignore((() => Eb.node.insertBefore(bb, Eb.node.childNodes[Eb.offset] || null))), Eb = Yb = new Ba(bb, 0), Tb = !0
        }
        var eb;
        let vb = this.view.observer.selectionRange;
        !Tb && vb.focusNode && (wb(Eb.node, Eb.offset, vb.anchorNode, vb.anchorOffset) && wb(Yb.node, Yb.offset, vb.focusNode, vb.focusOffset) || this.suppressWidgetCursorChange(vb, Bb)) || (this.view.observer.ignore((() => {
          fb.android && fb.chrome && ab.contains(vb.focusNode) && function(bb, ab) {
            for (let Ub = bb; Ub && Ub != ab; Ub = Ub.assignedSlot || Ub.parentNode)
              if (1 == Ub.nodeType && "false" == Ub.contentEditable) return !0;
            return !1
          }(vb.focusNode, ab) && (ab.blur(), ab.focus({
            preventScroll: !0
          }));
          let bb = Kb(this.view.root);
          if (bb)
            if (Bb.empty) {
              if (fb.gecko) {
                let bb = (Ab = Eb.node, Tb = Eb.offset, 1 != Ab.nodeType ? 0 : (Tb && "false" == Ab.childNodes[Tb - 1].contentEditable ? 1 : 0) | (Tb < Ab.childNodes.length && "false" == Ab.childNodes[Tb].contentEditable ? 2 : 0));
                if (bb && 3 != bb) {
                  let ab = (1 == bb ? Ea : Ya)(Eb.node, Eb.offset);
                  ab && (Eb = new Ba(ab.node, ab.offset))
                }
              }
              bb.collapse(Eb.node, Eb.offset), null != Bb.bidiLevel && void 0 !== bb.caretBidiLevel && (bb.caretBidiLevel = Bb.bidiLevel)
            } else if (bb.extend) {
            bb.collapse(Eb.node, Eb.offset);
            try {
              bb.extend(Yb.node, Yb.offset)
            } catch (eb) {}
          } else {
            let ab = document.createRange();
            Bb.anchor > Bb.head && ([Eb, Yb] = [Yb, Eb]), ab.setEnd(Yb.node, Yb.offset), ab.setStart(Eb.node, Eb.offset), bb.removeAllRanges(), bb.addRange(ab)
          } else;
          var Ab, Tb;
          Mb && this.view.root.activeElement == ab && (ab.blur(), Ub && Ub.focus())
        })), this.view.observer.setSelectionRange(Eb, Yb)), this.impreciseAnchor = Eb.precise ? null : new Ba(vb.anchorNode, vb.anchorOffset), this.impreciseHead = Yb.precise ? null : new Ba(vb.focusNode, vb.focusOffset)
      }
      suppressWidgetCursorChange(bb, ab) {
        return this.hasComposition && ab.empty && wb(bb.focusNode, bb.focusOffset, bb.anchorNode, bb.anchorOffset) && this.posFromDOM(bb.focusNode, bb.focusOffset) == ab.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: bb
        } = this, ab = bb.state.selection.main, Ub = Kb(bb.root), {
          anchorNode: Ab,
          anchorOffset: Mb
        } = bb.observer.selectionRange;
        if (!Ub || !ab.empty || !ab.assoc || !Ub.modify) return;
        let Tb = this.lineAt(ab.head, ab.assoc);
        if (!Tb) return;
        let Eb = Tb.posAtStart;
        if (ab.head == Eb || ab.head == Eb + Tb.length) return;
        let Yb = this.coordsAt(ab.head, -1),
          Bb = this.coordsAt(ab.head, 1);
        if (!Yb || !Bb || Yb.bottom > Bb.top) return;
        let eb = this.domAtPos(ab.head + ab.assoc, ab.assoc);
        Ub.collapse(eb.node, eb.offset), Ub.modify("move", ab.assoc < 0 ? "forward" : "backward", "lineboundary"), bb.observer.readSelectionRange();
        let vb = bb.observer.selectionRange;
        bb.docView.posFromDOM(vb.anchorNode, vb.anchorOffset) != ab.from && Ub.collapse(Ab, Mb)
      }
      posFromDOM(bb, ab) {
        let Ub = this.tile.nearest(bb);
        if (!Ub) return 2 & this.tile.dom.compareDocumentPosition(bb) ? 0 : this.view.state.doc.length;
        let Ab = Ub.posAtStart;
        if (!Ub.isComposite()) return Ub.isText() ? bb == Ub.dom ? Ab + ab : Ab + (ab ? Ub.length : 0) : Ab;
        {
          let Mb;
          if (bb == Ub.dom) Mb = Ub.dom.childNodes[ab];
          else {
            let Ab = 0 == Vb(bb) ? 0 : 0 == ab ? -1 : 1;
            for (;;) {
              let ab = bb.parentNode;
              if (ab == Ub.dom) break;
              0 == Ab && ab.firstChild != ab.lastChild && (Ab = bb == ab.firstChild ? -1 : 1), bb = ab
            }
            Mb = Ab < 0 ? bb : bb.nextSibling
          }
          if (Mb == Ub.dom.firstChild) return Ab;
          for (; Mb && !PU.get(Mb);) Mb = Mb.nextSibling;
          if (!Mb) return Ab + Ub.length;
          for (let bb = 0, ab = Ab;; bb++) {
            let Ab = Ub.children[bb];
            if (Ab.dom == Mb) return ab;
            ab += Ab.length + Ab.breakAfter
          }
        }
      }
      domAtPos(bb, ab) {
        let {
          tile: Ub,
          offset: Ab
        } = this.tile.resolveBlock(bb, ab);
        return Ub.isWidget() ? Ub.domPosFor(bb, ab) : Ub.domIn(Ab, ab)
      }
      inlineDOMNearPos(bb, ab) {
        let Ub, Ab, Mb = -1,
          Tb = !1,
          Eb = -1,
          Yb = !1;
        return this.tile.blockTiles(((ab, Bb) => {
          if (ab.isWidget()) {
            if (32 & ab.flags && Bb >= bb) return !0;
            16 & ab.flags && (Tb = !0)
          } else {
            let eb = Bb + ab.length;
            if (Bb <= bb && (Ub = ab, Mb = bb - Bb, Tb = eb < bb), eb >= bb && !Ab && (Ab = ab, Eb = bb - Bb, Yb = Bb > bb), Bb > bb && Ab) return !0
          }
        })), Ub || Ab ? (Tb && Ab ? Ub = null : Yb && Ub && (Ab = null), Ub && ab < 0 || !Ab ? Ub.domIn(Mb, ab) : Ab.domIn(Eb, ab)) : this.domAtPos(bb, ab)
      }
      coordsAt(bb, ab) {
        let {
          tile: Ub,
          offset: Ab
        } = this.tile.resolveBlock(bb, ab);
        return Ub.isWidget() ? Ub.widget instanceof lU ? null : Ub.coordsInWidget(Ab, ab, !0) : Ub.coordsIn(Ab, ab)
      }
      lineAt(bb, ab) {
        let {
          tile: Ub
        } = this.tile.resolveBlock(bb, ab);
        return Ub.isLine() ? Ub : null
      }
      coordsForChar(bb) {
        let {
          tile: ab,
          offset: Ub
        } = this.tile.resolveBlock(bb, 1);
        if (!ab.isLine()) return null;
        return function bb(ab, Ub) {
          if (ab.isComposite())
            for (let Ab of ab.children) {
              if (Ab.length >= Ub) {
                let ab = bb(Ab, Ub);
                if (ab) return ab
              }
              if ((Ub -= Ab.length) < 0) break
            } else if (ab.isText() && Ub < ab.length) {
              let bb = (0, Ab.T)(ab.text, Ub);
              if (bb == Ub) return null;
              let Mb = Aa(ab.dom, Ub, bb).getClientRects();
              for (let ab = 0; ab < Mb.length; ab++) {
                let bb = Mb[ab];
                if (ab == Mb.length - 1 || bb.top < bb.bottom && bb.left < bb.right) return bb
              }
            } return null
        }(ab, Ub)
      }
      measureVisibleLineHeights(bb) {
        let ab = [],
          {
            from: Ub,
            to: Ab
          } = bb,
          Mb = this.view.contentDOM.clientWidth,
          Tb = Mb > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          Eb = -1,
          Yb = this.view.textDirection == ea.LTR,
          Bb = 0,
          eb = (bb, vb, Lb) => {
            for (let Pb = 0; Pb < bb.children.length && !(vb > Ab); Pb++) {
              let Ab = bb.children[Pb],
                Xb = vb + Ab.length,
                jb = Ab.dom.getBoundingClientRect(),
                {
                  height: Rb
                } = jb;
              if (Lb && !Pb && (Bb += jb.top - Lb.top), Ab instanceof kU) Xb > Ub && eb(Ab, vb, jb);
              else if (vb >= Ub && (Bb > 0 && ab.push(-Bb), ab.push(Rb + Bb), Bb = 0, Tb)) {
                let bb = Ab.dom.lastChild,
                  ab = bb ? tb(bb) : [];
                if (ab.length) {
                  let bb = ab[ab.length - 1],
                    Ub = Yb ? bb.right - jb.left : jb.right - bb.left;
                  Ub > Eb && (Eb = Ub, this.minWidth = Mb, this.minWidthFrom = vb, this.minWidthTo = Xb)
                }
              }
              Lb && Pb == bb.children.length - 1 && (Bb += Lb.bottom - jb.bottom), vb = Xb + Ab.breakAfter
            }
          };
        return eb(this.tile, 0, null), ab
      }
      textDirectionAt(bb) {
        let {
          tile: ab
        } = this.tile.resolveBlock(bb, 1);
        return "rtl" == getComputedStyle(ab.dom).direction ? ea.RTL : ea.LTR
      }
      measureTextSize() {
        let bb = this.tile.blockTiles((bb => {
          if (bb.isLine() && bb.children.length && bb.length <= 20) {
            let ab, Ub = 0;
            for (let Ab of bb.children) {
              if (!Ab.isText() || /[^ -~]/.test(Ab.text)) return;
              let bb = tb(Ab.dom);
              if (1 != bb.length) return;
              Ub += bb[0].width, ab = bb[0].height
            }
            if (Ub) return {
              lineHeight: bb.dom.getBoundingClientRect().height,
              charWidth: Ub / bb.length,
              textHeight: ab
            }
          }
        }));
        if (bb) return bb;
        let ab, Ub, Ab, Mb = document.createElement("div");
        return Mb.className = "cm-line", Mb.style.width = "99999px", Mb.style.position = "absolute", Mb.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(Mb);
          let bb = tb(Mb.firstChild)[0];
          ab = Mb.getBoundingClientRect().height, Ub = bb && bb.width ? bb.width / 27 : 7, Ab = bb && bb.height ? bb.height : ab, Mb.remove()
        })), {
          lineHeight: ab,
          charWidth: Ub,
          textHeight: Ab
        }
      }
      computeBlockGapDeco() {
        let bb = [],
          ab = this.view.viewState;
        for (let Ub = 0, Ab = 0;; Ab++) {
          let Mb = Ab == ab.viewports.length ? null : ab.viewports[Ab],
            Tb = Mb ? Mb.from - 1 : this.view.state.doc.length;
          if (Tb > Ub) {
            let Ab = (ab.lineBlockAt(Tb).bottom - ab.lineBlockAt(Ub).top) / this.view.scaleY;
            bb.push(Fb.replace({
              widget: new lU(Ab),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(Ub, Tb))
          }
          if (!Mb) break;
          Ub = Mb.to + 1
        }
        return Fb.set(bb)
      }
      updateDeco() {
        let bb = 1,
          ab = this.view.state.facet(bU).map((ab => (this.dynamicDecorationMap[bb++] = "function" == typeof ab) ? ab(this.view) : ab)),
          Ub = !1,
          Mb = this.view.state.facet(UU).map(((bb, ab) => {
            let Ab = "function" == typeof bb;
            return Ab && (Ub = !0), Ab ? bb(this.view) : bb
          }));
        for (Mb.length && (this.dynamicDecorationMap[bb++] = Ub, ab.push(Ab.y.join(Mb))), this.hA = [this.editContextFormatting, ...ab, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; bb < this.hA.length;) this.dynamicDecorationMap[bb++] = !1;
        this.blockWrappers = this.view.state.facet(aU).map((bb => "function" == typeof bb ? bb(this.view) : bb))
      }
      scrollIntoView(bb) {
        var ab;
        if (bb.isSnapshot) {
          let ab = this.view.viewState.lineBlockAt(bb.range.head);
          return this.view.scrollDOM.scrollTop = ab.top - bb.yMargin, void(this.view.scrollDOM.scrollLeft = bb.xMargin)
        }
        for (let vb of this.view.state.facet(la)) try {
          if (vb(this.view, bb.range, bb)) return !0
        } catch (eb) {
          ga(this.view.state, eb, "scroll handler")
        }
        let Ub, {
            range: Ab
          } = bb,
          Mb = this.coordsAt(Ab.head, null !== (ab = Ab.assoc) && void 0 !== ab ? ab : Ab.empty ? 0 : Ab.head > Ab.anchor ? -1 : 1);
        if (!Mb) return;
        !Ab.empty && (Ub = this.coordsAt(Ab.anchor, Ab.anchor > Ab.head ? -1 : 1)) && (Mb = {
          left: Math.min(Mb.left, Ub.left),
          top: Math.min(Mb.top, Ub.top),
          right: Math.max(Mb.right, Ub.right),
          bottom: Math.max(Mb.bottom, Ub.bottom)
        });
        let Tb = YU(this.view),
          Eb = {
            left: Mb.left - Tb.left,
            top: Mb.top - Tb.top,
            right: Mb.right + Tb.right,
            bottom: Mb.bottom + Tb.bottom
          },
          {
            offsetWidth: Yb,
            offsetHeight: Bb
          } = this.view.scrollDOM;
        if (function(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb) {
            let Bb = bb.ownerDocument,
              eb = Bb.defaultView || window;
            for (let vb = bb, Lb = !1; vb && !Lb;)
              if (1 == vb.nodeType) {
                let bb, Pb = vb == Bb.body,
                  Xb = 1,
                  jb = 1;
                if (Pb) bb = cb(eb);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(vb).position) && (Lb = !0), vb.scrollHeight <= vb.clientHeight && vb.scrollWidth <= vb.clientWidth) {
                    vb = vb.assignedSlot || vb.parentNode;
                    continue
                  }
                  let ab = vb.getBoundingClientRect();
                  ({
                    scaleX: Xb,
                    scaleY: jb
                  } = Jb(vb, ab)), bb = {
                    left: ab.left,
                    right: ab.left + vb.clientWidth * Xb,
                    top: ab.top,
                    bottom: ab.top + vb.clientHeight * jb
                  }
                }
                let Rb = 0,
                  kb = 0;
                if ("nearest" == Mb) ab.top < bb.top + Eb ? (kb = ab.top - (bb.top + Eb), Ub > 0 && ab.bottom > bb.bottom + kb && (kb = ab.bottom - bb.bottom + Eb)) : ab.bottom > bb.bottom - Eb && (kb = ab.bottom - bb.bottom + Eb, Ub < 0 && ab.top - kb < bb.top && (kb = ab.top - (bb.top + Eb)));
                else {
                  let Ab = ab.bottom - ab.top,
                    Tb = bb.bottom - bb.top;
                  kb = ("center" == Mb && Ab <= Tb ? ab.top + Ab / 2 - Tb / 2 : "start" == Mb || "center" == Mb && Ub < 0 ? ab.top - Eb : ab.bottom - Tb + Eb) - bb.top
                }
                if ("nearest" == Ab ? ab.left < bb.left + Tb ? (Rb = ab.left - (bb.left + Tb), Ub > 0 && ab.right > bb.right + Rb && (Rb = ab.right - bb.right + Tb)) : ab.right > bb.right - Tb && (Rb = ab.right - bb.right + Tb, Ub < 0 && ab.left < bb.left + Rb && (Rb = ab.left - (bb.left + Tb))) : Rb = ("center" == Ab ? ab.left + (ab.right - ab.left) / 2 - (bb.right - bb.left) / 2 : "start" == Ab == Yb ? ab.left - Tb : ab.right - (bb.right - bb.left) + Tb) - bb.left, Rb || kb)
                  if (Pb) eb.scrollBy(Rb, kb);
                  else {
                    let bb = 0,
                      Ub = 0;
                    if (kb) {
                      let bb = vb.scrollTop;
                      vb.scrollTop += kb / jb, Ub = (vb.scrollTop - bb) * jb
                    }
                    if (Rb) {
                      let ab = vb.scrollLeft;
                      vb.scrollLeft += Rb / Xb, bb = (vb.scrollLeft - ab) * Xb
                    }
                    ab = {
                      left: ab.left - bb,
                      top: ab.top - Ub,
                      right: ab.right - bb,
                      bottom: ab.bottom - Ub
                    }, bb && Math.abs(bb - Rb) < 1 && (Ab = "nearest"), Ub && Math.abs(Ub - kb) < 1 && (Mb = "nearest")
                  } if (Pb) break;
                (ab.top < bb.top || ab.bottom > bb.bottom || ab.left < bb.left || ab.right > bb.right) && (ab = {
                  left: Math.max(ab.left, bb.left),
                  right: Math.min(ab.right, bb.right),
                  top: Math.max(ab.top, bb.top),
                  bottom: Math.min(ab.bottom, bb.bottom)
                }), vb = vb.assignedSlot || vb.parentNode
              } else {
                if (11 != vb.nodeType) break;
                vb = vb.host
              }
          }(this.view.scrollDOM, Eb, Ab.head < Ab.anchor ? -1 : 1, bb.x, bb.y, Math.max(Math.min(bb.xMargin, Yb), -Yb), Math.max(Math.min(bb.yMargin, Bb), -Bb), this.view.textDirection == ea.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (Mb.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || Mb.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let bb = this.view.docView.lineAt(Ab.head, 1);
          bb && bb.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(bb) {
        let ab = bb => bb.isWidget() || bb.children.some(ab);
        return ab(this.tile.resolveBlock(bb, 1).tile)
      }
      destroy() {
        uU(this.tile)
      }
    }

    function uU(bb, ab) {
      let Ub = null === ab || void 0 === ab ? void 0 : ab.get(bb);
      if (1 != Ub) {
        null == Ub && bb.destroy();
        for (let Ub of bb.children) uU(Ub, ab)
      }
    }

    function rU(bb, ab) {
      let Ub = bb.observer.selectionRange;
      if (!Ub.focusNode) return null;
      let Ab = Ea(Ub.focusNode, Ub.focusOffset),
        Mb = Ya(Ub.focusNode, Ub.focusOffset),
        Tb = Ab || Mb;
      if (Mb && Ab && Mb.node != Ab.node) {
        let ab = PU.get(Mb.node);
        if (!ab || ab.isText() && ab.text != Mb.node.nodeValue) Tb = Mb;
        else if (bb.docView.lastCompositionAfterCursor) {
          let bb = PU.get(Ab.node);
          !bb || bb.isText() && bb.text != Ab.node.nodeValue || (Tb = Mb)
        }
      }
      if (bb.docView.lastCompositionAfterCursor = Tb != Ab, !Tb) return null;
      let Eb = ab - Tb.offset;
      return {
        from: Eb,
        to: Eb + Tb.node.nodeValue.length,
        node: Tb.node
      }
    }
    let KU = class {
      constructor() {
        this.changes = []
      }
      compareRange(bb, ab) {
        ub(bb, ab, this.changes)
      }
      comparePoint(bb, ab) {
        ub(bb, ab, this.changes)
      }
      boundChange(bb) {
        ub(bb, bb, this.changes)
      }
    };
    class oU {
      constructor() {
        this.changes = []
      }
      compareRange(bb, ab) {
        ub(bb, ab, this.changes)
      }
      comparePoint() {}
      boundChange(bb) {
        ub(bb, bb, this.changes)
      }
    }
    class lU extends Ib {
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

    function tU(bb, ab, Ub) {
      let Ab = bb.lineBlockAt(ab);
      if (Array.isArray(Ab.type)) {
        let bb;
        for (let Mb of Ab.type) {
          if (Mb.from > ab) break;
          if (!(Mb.to < ab)) {
            if (Mb.from < ab && Mb.to > ab) return Mb;
            bb && (Mb.type != db.Text || bb.type == Mb.type && !(Ub < 0 ? Mb.from < ab : Mb.to > ab)) || (bb = Mb)
          }
        }
        return bb || Ab
      }
      return Ab
    }

    function wU(bb, ab, Ub, Ab) {
      let Mb = bb.state.doc.lineAt(ab.head),
        Tb = bb.bidiSpans(Mb),
        Eb = bb.textDirectionAt(Mb.from);
      for (let Yb = ab, Bb = null;;) {
        let ab = Wa(Mb, Tb, Eb, Yb, Ub),
          eb = Na;
        if (!ab) {
          if (Mb.number == (Ub ? bb.state.doc.lines : 1)) return Yb;
          eb = "\n", Mb = bb.state.doc.line(Mb.number + (Ub ? 1 : -1)), Tb = bb.bidiSpans(Mb), ab = bb.visualLineSide(Mb, !Ub)
        }
        if (Bb) {
          if (!Bb(eb)) return Yb
        } else {
          if (!Ab) return ab;
          Bb = Ab(eb)
        }
        Yb = ab
      }
    }

    function sU(bb, ab, Ub) {
      for (;;) {
        let Ab = 0;
        for (let Mb of bb) Mb.between(ab - 1, ab + 1, ((bb, Mb, Tb) => {
          if (ab > bb && ab < Mb) {
            let Tb = Ab || Ub || (ab - bb < Mb - ab ? -1 : 1);
            ab = Tb < 0 ? bb : Mb, Ab = Tb
          }
        }));
        if (!Ab) return ab
      }
    }

    function gU(bb, ab) {
      let Ub = null;
      for (let Mb = 0; Mb < ab.cj.length; Mb++) {
        let Tb = ab.cj[Mb],
          Eb = null;
        if (Tb.empty) {
          let ab = sU(bb, Tb.from, 0);
          ab != Tb.from && (Eb = Ab.m.cursor(ab, -1))
        } else {
          let ab = sU(bb, Tb.from, -1),
            Ub = sU(bb, Tb.to, 1);
          ab == Tb.from && Ub == Tb.to || (Eb = Ab.m.range(Tb.from == Tb.anchor ? ab : Ub, Tb.from == Tb.head ? ab : Ub))
        }
        Eb && (Ub || (Ub = ab.cj.slice()), Ub[Mb] = Eb)
      }
      return Ub ? Ab.m.create(Ub, ab.mainIndex) : ab
    }

    function CU(bb, ab, Ub) {
      let Mb = sU(bb.state.facet(AU).map((ab => ab(bb))), Ub.from, ab.head > Ub.from ? -1 : 1);
      return Mb == Ub.from ? Ub : Ab.m.cursor(Mb, Mb < Ub.from ? 1 : -1)
    }
    class VU {
      constructor(bb, ab) {
        this.pos = bb, this.assoc = ab
      }
    }

    function OU(bb, ab, Ub, Mb) {
      let Tb, Eb = bb.contentDOM.getBoundingClientRect(),
        Yb = Eb.top + bb.viewState.paddingTop,
        {
          x: Bb,
          y: eb
        } = ab,
        vb = eb - Yb;
      for (;;) {
        if (vb < 0) return new VU(0, 1);
        if (vb > bb.viewState.docHeight) return new VU(bb.state.doc.length, -1);
        if (Tb = bb.elementAtHeight(vb), null == Mb) break;
        if (Tb.type == db.Text) {
          if (Mb < 0 ? Tb.to < bb.viewport.from : Tb.from > bb.viewport.to) break;
          let ab = bb.docView.coordsAt(Mb < 0 ? Tb.from : Tb.to, Mb > 0 ? -1 : 1);
          if (ab && (Mb < 0 ? ab.top <= vb + Yb : ab.bottom >= vb + Yb)) break
        }
        let ab = bb.viewState.heightOracle.textHeight / 2;
        vb = Mb > 0 ? Tb.bottom + ab : Tb.top - ab
      }
      if (bb.viewport.from >= Tb.to || bb.viewport.to <= Tb.from) {
        if (Ub) return null;
        if (Tb.type == db.Text) {
          let ab = function(bb, ab, Ub, Mb, Tb) {
            let Eb = Math.round((Mb - ab.left) * bb.defaultCharacterWidth);
            if (bb.lineWrapping && Ub.height > 1.5 * bb.defaultLineHeight) {
              let ab = bb.viewState.heightOracle.textHeight;
              Eb += Math.floor((Tb - Ub.top - .5 * (bb.defaultLineHeight - ab)) / ab) * bb.viewState.heightOracle.lineLength
            }
            let Yb = bb.state.sliceDoc(Ub.from, Ub.to);
            return Ub.from + (0, Ab.X)(Yb, Eb, bb.state.tabSize)
          }(bb, Eb, Tb, Bb, eb);
          return new VU(ab, ab == Tb.from ? 1 : -1)
        }
      }
      if (Tb.type != db.Text) return vb < (Tb.top + Tb.bottom) / 2 ? new VU(Tb.from, 1) : new VU(Tb.to, -1);
      let Lb = bb.docView.lineAt(Tb.from, 2);
      return Lb && Lb.length == Tb.length || (Lb = bb.docView.lineAt(Tb.from, -2)), new cU(bb, Bb, eb, bb.textDirectionAt(Tb.from)).scanTile(Lb, Tb.from)
    }
    class cU {
      constructor(bb, ab, Ub, Ab) {
        this.view = bb, this.x = ab, this.y = Ub, this.baseDir = Ab, this.line = null, this.spans = null
      }
      bidiSpansAt(bb) {
        return (!this.line || this.line.from > bb || this.line.to < bb) && (this.line = this.view.state.doc.lineAt(bb), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(bb, ab) {
        let {
          line: Ub,
          spans: Ab
        } = this.bidiSpansAt(bb);
        return Ab[Da.find(Ab, bb - Ub.from, -1, ab)].level == this.baseDir
      }
      dirAt(bb, ab) {
        let {
          line: Ub,
          spans: Ab
        } = this.bidiSpansAt(bb);
        return Ab[Da.find(Ab, bb - Ub.from, -1, ab)].dir
      }
      bidiIn(bb, ab) {
        let {
          spans: Ub,
          line: Ab
        } = this.bidiSpansAt(bb);
        return Ub.length > 1 || Ub.length && (Ub[0].level != this.baseDir || Ub[0].to + Ab.from < ab)
      }
      scan(bb, ab) {
        let Ub, Ab, Mb, Tb = 0,
          Eb = bb.length - 1,
          Yb = new Set,
          Bb = this.bidiIn(bb[0], bb[Eb]),
          eb = -1,
          vb = 1e9;
        bb: for (; Tb < Eb;) {
          let Lb = Eb - Tb,
            Pb = Tb + Eb >> 1;
          ab: if (Yb.has(Pb)) {
            let bb = Tb + Math.floor(Math.random() * Lb);
            for (let ab = 0; ab < Lb; ab++) {
              if (!Yb.has(bb)) {
                Pb = bb;
                break ab
              }
              bb++, bb == Eb && (bb = Tb)
            }
            break bb
          } Yb.add(Pb);
          let Xb = ab(Pb);
          if (Xb)
            for (let ab = 0; ab < Xb.length; ab++) {
              let Yb = Xb[ab],
                Lb = 0;
              if (!(0 == Yb.width && Xb.length > 1)) {
                if (Yb.bottom < this.y)(!Ub || Ub.bottom < Yb.bottom) && (Ub = Yb), Lb = 1;
                else if (Yb.top > this.y)(!Ab || Ab.top > Yb.top) && (Ab = Yb), Lb = -1;
                else {
                  let bb = Yb.left > this.x ? this.x - Yb.left : Yb.right < this.x ? this.x - Yb.right : 0,
                    ab = Math.abs(bb);
                  ab < vb && (eb = Pb, vb = ab, Mb = Yb), bb && (Lb = bb < 0 == (this.baseDir == ea.LTR) ? -1 : 1)
                } - 1 != Lb || Bb && !this.baseDirAt(bb[Pb], 1) ? 1 != Lb || Bb && !this.baseDirAt(bb[Pb + 1], -1) || (Tb = Pb + 1) : Eb = Pb
              }
            }
        }
        if (!Mb) {
          let Mb = Ub && (!Ab || this.y - Ub.bottom < Ab.top - this.y) ? Ub : Ab;
          return this.y = (Mb.top + Mb.bottom) / 2, this.scan(bb, ab)
        }
        if (vb) {
          if (Ub && Ub.bottom > Mb.top) return this.y = Ub.bottom - 1, this.scan(bb, ab);
          if (Ab && Ab.top < Mb.bottom) return this.y = Ab.top + 1, this.scan(bb, ab)
        }
        let Lb = (Bb ? this.dirAt(bb[eb], 1) : this.baseDir) == ea.LTR;
        return {
          i: eb,
          after: this.x > (Mb.left + Mb.right) / 2 == Lb
        }
      }
      scanText(bb, ab) {
        let Ub = [];
        for (let Tb = 0; Tb < bb.length; Tb = (0, Ab.T)(bb.text, Tb)) Ub.push(ab + Tb);
        Ub.push(ab + bb.length);
        let Mb = this.scan(Ub, (Ab => {
          let Mb = Ub[Ab] - ab,
            Tb = Ub[Ab + 1] - ab;
          return Aa(bb.dom, Mb, Tb).getClientRects()
        }));
        return Mb.after ? new VU(Ub[Mb.i + 1], -1) : new VU(Ub[Mb.i], 1)
      }
      scanTile(bb, ab) {
        if (!bb.length) return new VU(ab, 1);
        if (1 == bb.children.length) {
          let Ub = bb.children[0];
          if (Ub.isText()) return this.scanText(Ub, ab);
          if (Ub.isComposite()) return this.scanTile(Ub, ab)
        }
        let Ub = [ab];
        for (let Eb = 0, Yb = ab; Eb < bb.children.length; Eb++) Ub.push(Yb += bb.children[Eb].length);
        let Ab = this.scan(Ub, (ab => {
            let Ub = bb.children[ab];
            return 48 & Ub.flags ? null : (1 == Ub.dom.nodeType ? Ub.dom : Aa(Ub.dom, 0, Ub.length)).getClientRects()
          })),
          Mb = bb.children[Ab.i],
          Tb = Ub[Ab.i];
        return Mb.isText() ? this.scanText(Mb, Tb) : Mb.isComposite() ? this.scanTile(Mb, Tb) : Ab.after ? new VU(Ub[Ab.i + 1], -1) : new VU(Tb, 1)
      }
    }
    const JU = "\uffff";
    class nU {
      constructor(bb, ab) {
        this.points = bb, this.view = ab, this.text = "", this.lineSeparator = ab.state.facet(Ab.p.lineSeparator)
      }
      append(bb) {
        this.text += bb
      }
      lineBreak() {
        this.text += JU
      }
      readRange(bb, ab) {
        if (!bb) return this;
        let Ub = bb.parentNode;
        for (let Ab = bb;;) {
          this.findPointBefore(Ub, Ab);
          let bb = this.text.length;
          this.readNode(Ab);
          let Mb = PU.get(Ab),
            Tb = Ab.nextSibling;
          if (Tb == ab) {
            (null === Mb || void 0 === Mb ? void 0 : Mb.breakAfter) && !Tb && Ub != this.view.contentDOM && this.lineBreak();
            break
          }
          let Eb = PU.get(Tb);
          (Mb && Eb ? Mb.breakAfter : (Mb ? Mb.breakAfter : gb(Ab)) || gb(Tb) && ("BR" != Ab.nodeName || (null === Mb || void 0 === Mb ? void 0 : Mb.isWidget())) && this.text.length > bb) && !bA(Tb, ab) && this.lineBreak(), Ab = Tb
        }
        return this.findPointBefore(Ub, ab), this
      }
      readTextNode(bb) {
        let ab = bb.nodeValue;
        for (let Ub of this.points) Ub.node == bb && (Ub.pos = this.text.length + Math.min(Ub.offset, ab.length));
        for (let Ub = 0, Ab = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let Mb, Tb = -1,
            Eb = 1;
          if (this.lineSeparator ? (Tb = ab.indexOf(this.lineSeparator, Ub), Eb = this.lineSeparator.length) : (Mb = Ab.exec(ab)) && (Tb = Mb.index, Eb = Mb[0].length), this.append(ab.slice(Ub, Tb < 0 ? ab.length : Tb)), Tb < 0) break;
          if (this.lineBreak(), Eb > 1)
            for (let ab of this.points) ab.node == bb && ab.pos > this.text.length && (ab.pos -= Eb - 1);
          Ub = Tb + Eb
        }
      }
      readNode(bb) {
        let ab = PU.get(bb),
          Ub = ab && ab.overrideDOMText;
        if (null != Ub) {
          this.findPointInside(bb, Ub.length);
          for (let bb = Ub.iter(); !bb.next().done;) bb.lineBreak ? this.lineBreak() : this.append(bb.value)
        } else 3 == bb.nodeType ? this.readTextNode(bb) : "BR" == bb.nodeName ? bb.nextSibling && this.lineBreak() : 1 == bb.nodeType && this.readRange(bb.firstChild, null)
      }
      findPointBefore(bb, ab) {
        for (let Ub of this.points) Ub.node == bb && bb.childNodes[Ub.offset] == ab && (Ub.pos = this.text.length)
      }
      findPointInside(bb, ab) {
        for (let Ub of this.points)(3 == bb.nodeType ? Ub.node == bb : bb.contains(Ub.node)) && (Ub.pos = this.text.length + (SU(bb, Ub.node, Ub.offset) ? ab : 0))
      }
    }

    function SU(bb, ab, Ub) {
      for (;;) {
        if (!ab || Ub < Vb(ab)) return !1;
        if (ab == bb) return !0;
        Ub = sb(ab) + 1, ab = ab.parentNode
      }
    }

    function bA(bb, ab) {
      let Ub;
      for (; bb != ab && bb; bb = bb.nextSibling) {
        let ab = PU.get(bb);
        if (!(null === ab || void 0 === ab ? void 0 : ab.isWidget())) return !1;
        ab && (Ub || (Ub = [])).push(ab)
      }
      if (Ub)
        for (let Ab of Ub) {
          let bb = Ab.overrideDOMText;
          if (null === bb || void 0 === bb ? void 0 : bb.length) return !1
        }
      return !0
    }
    class aA {
      constructor(bb, ab) {
        this.node = bb, this.offset = ab, this.pos = -1
      }
    }
    class UA {
      constructor(bb, ab, Ub, Mb) {
        this.typeOver = Mb, this.bounds = null, this.text = "", this.domChanged = ab > -1;
        let {
          impreciseHead: Tb,
          impreciseAnchor: Eb
        } = bb.docView, Yb = bb.state.selection;
        if (bb.state.readOnly && ab > -1) this.newSel = null;
        else if (ab > -1 && (this.bounds = AA(bb.docView.tile, ab, Ub, 0))) {
          let ab = Tb || Eb ? [] : function(bb) {
              let ab = [];
              if (bb.root.activeElement != bb.contentDOM) return ab;
              let {
                anchorNode: Ub,
                anchorOffset: Ab,
                focusNode: Mb,
                focusOffset: Tb
              } = bb.observer.selectionRange;
              Ub && (ab.push(new aA(Ub, Ab)), Mb == Ub && Tb == Ab || ab.push(new aA(Mb, Tb)));
              return ab
            }(bb),
            Ub = new nU(ab, bb);
          Ub.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = Ub.text, this.newSel = function(bb, ab) {
            if (0 == bb.length) return null;
            let Ub = bb[0].pos,
              Mb = 2 == bb.length ? bb[1].pos : Ub;
            return Ub > -1 && Mb > -1 ? Ab.m.single(Ub + ab, Mb + ab) : null
          }(ab, this.bounds.from)
        } else {
          let ab = bb.observer.selectionRange,
            Ub = Tb && Tb.node == ab.focusNode && Tb.offset == ab.focusOffset || !ob(bb.contentDOM, ab.focusNode) ? Yb.main.head : bb.docView.posFromDOM(ab.focusNode, ab.focusOffset),
            Mb = Eb && Eb.node == ab.anchorNode && Eb.offset == ab.anchorOffset || !ob(bb.contentDOM, ab.anchorNode) ? Yb.main.anchor : bb.docView.posFromDOM(ab.anchorNode, ab.anchorOffset),
            Bb = bb.viewport;
          if ((fb.ios || fb.chrome) && Yb.main.empty && Ub != Mb && (Bb.from > 0 || Bb.to < bb.state.doc.length)) {
            let ab = Math.min(Ub, Mb),
              Ab = Math.max(Ub, Mb),
              Tb = Bb.from - ab,
              Eb = Bb.to - Ab;
            0 != Tb && 1 != Tb && 0 != ab || 0 != Eb && -1 != Eb && Ab != bb.state.doc.length || (Ub = 0, Mb = bb.state.doc.length)
          }
          if (bb.inputState.composing > -1 && Yb.cj.length > 1) this.newSel = Yb.replaceRange(Ab.m.range(Mb, Ub));
          else if (bb.lineWrapping && Mb == Ub && (!Yb.main.empty || Yb.main.head != Ub) && bb.inputState.lastTouchTime > Date.now() - 100) {
            let ab = bb.coordsAtPos(Ub, -1),
              Mb = 0;
            ab && (Mb = bb.inputState.lastTouchY <= ab.bottom ? -1 : 1), this.newSel = Ab.m.create([Ab.m.cursor(Ub, Mb)])
          } else this.newSel = Ab.m.single(Mb, Ub)
        }
      }
    }

    function AA(bb, ab, Ub, Ab) {
      if (bb.isComposite()) {
        let Mb = -1,
          Tb = -1,
          Eb = -1,
          Yb = -1;
        for (let Bb = 0, eb = Ab, vb = Ab; Bb < bb.children.length; Bb++) {
          let Ab = bb.children[Bb],
            Lb = eb + Ab.length;
          if (eb < ab && Lb > Ub) return AA(Ab, ab, Ub, eb);
          if (Lb >= ab && -1 == Mb && (Mb = Bb, Tb = eb), eb > Ub && Ab.dom.parentNode == bb.dom) {
            Eb = Bb, Yb = vb;
            break
          }
          vb = Lb, eb = Lb + Ab.breakAfter
        }
        return {
          from: Tb,
          to: Yb < 0 ? Ab + bb.length : Yb,
          startDOM: (Mb ? bb.children[Mb - 1].dom.nextSibling : null) || bb.dom.firstChild,
          endDOM: Eb < bb.children.length && Eb >= 0 ? bb.children[Eb].dom : null
        }
      }
      return bb.isText() ? {
        from: Ab,
        to: Ab + bb.length,
        startDOM: bb.dom,
        endDOM: bb.dom.nextSibling
      } : null
    }

    function MA(bb, ab) {
      let Ub, {
          newSel: Mb
        } = ab,
        {
          state: Tb
        } = bb,
        Eb = Tb.selection.main,
        Yb = bb.inputState.lastKeyTime > Date.now() - 100 ? bb.inputState.lastKeyCode : -1;
      if (ab.bounds) {
        let {
          from: bb,
          to: Mb
        } = ab.bounds, Bb = Eb.from, eb = null;
        (8 === Yb || fb.android && ab.text.length < Mb - bb) && (Bb = Eb.to, eb = "end");
        let vb, Lb, Pb = Tb.doc.sliceString(bb, Mb, JU);
        !Eb.empty && Eb.from >= bb && Eb.to <= Mb && (ab.typeOver || Pb != ab.text) && Pb.slice(0, Eb.from - bb) == ab.text.slice(0, Eb.from - bb) && Pb.slice(Eb.to - bb) == ab.text.slice(vb = ab.text.length - (Pb.length - (Eb.to - bb))) ? Ub = {
          from: Eb.from,
          to: Eb.to,
          insert: Ab.G.of(ab.text.slice(Eb.from - bb, vb).split(JU))
        } : (Lb = EA(Pb, ab.text, Bb - bb, eb)) && (fb.chrome && 13 == Yb && Lb.toB == Lb.from + 2 && ab.text.slice(Lb.from, Lb.toB) == JU + JU && Lb.toB--, Ub = {
          from: bb + Lb.from,
          to: bb + Lb.toA,
          insert: Ab.G.of(ab.text.slice(Lb.from, Lb.toB).split(JU))
        })
      } else Mb && (!bb.hasFocus && Tb.facet(Ca) || YA(Mb, Eb)) && (Mb = null);
      if (!Ub && !Mb) return !1;
      if ((fb.mac || fb.android) && Ub && Ub.from == Ub.to && Ub.from == Eb.head - 1 && /^\. ?$/.test(Ub.insert.toString()) && "off" == bb.contentDOM.getAttribute("autocorrect") ? (Mb && 2 == Ub.insert.length && (Mb = Ab.m.single(Mb.main.anchor - 1, Mb.main.head - 1)), Ub = {
          from: Ub.from,
          to: Ub.to,
          insert: Ab.G.of([Ub.insert.toString().replace(".", " ")])
        }) : Tb.doc.lineAt(Eb.from).to < Eb.to && bb.docView.lineHasWidget(Eb.to) && bb.inputState.insertingTextAt > Date.now() - 50 ? Ub = {
          from: Eb.from,
          to: Eb.to,
          insert: Tb.toText(bb.inputState.insertingText)
        } : fb.chrome && Ub && Ub.from == Ub.to && Ub.from == Eb.head && "\n " == Ub.insert.toString() && bb.lineWrapping && (Mb && (Mb = Ab.m.single(Mb.main.anchor - 1, Mb.main.head - 1)), Ub = {
          from: Eb.from,
          to: Eb.to,
          insert: Ab.G.of([" "])
        }), Ub) return TA(bb, Ub, Mb, Yb);
      if (Mb && !YA(Mb, Eb)) {
        let ab = !1,
          Ub = "select";
        return bb.inputState.lastSelectionTime > Date.now() - 50 && ("select" == bb.inputState.lastSelectionOrigin && (ab = !0), Ub = bb.inputState.lastSelectionOrigin, "select.pointer" == Ub && (Mb = gU(Tb.facet(AU).map((ab => ab(bb))), Mb))), bb.dispatch({
          selection: Mb,
          scrollIntoView: ab,
          userEvent: Ub
        }), !0
      }
      return !1
    }

    function TA(bb, ab, Ub) {
      let Mb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (fb.ios && bb.inputState.flushIOSKey(ab)) return !0;
      let Tb = bb.state.selection.main;
      if (fb.android && (ab.to == Tb.to && (ab.from == Tb.from || ab.from == Tb.from - 1 && " " == bb.state.sliceDoc(ab.from, Tb.from)) && 1 == ab.insert.length && 2 == ab.insert.lines && Ma(bb.contentDOM, "Enter", 13) || (ab.from == Tb.from - 1 && ab.to == Tb.to && 0 == ab.insert.length || 8 == Mb && ab.insert.length < ab.to - ab.from && ab.to > Tb.head) && Ma(bb.contentDOM, "Backspace", 8) || ab.from == Tb.from && ab.to == Tb.to + 1 && 0 == ab.insert.length && Ma(bb.contentDOM, "Delete", 46))) return !0;
      let Eb, Yb = ab.insert.toString();
      bb.inputState.composing >= 0 && bb.inputState.composing++;
      let Bb = () => Eb || (Eb = function(bb, ab, Ub) {
        let Mb, Tb = bb.state,
          Eb = Tb.selection.main,
          Yb = -1;
        if (ab.from == ab.to && ab.from < Eb.from || ab.from > Eb.to) {
          let Ub = ab.from < Eb.from ? -1 : 1,
            Ab = Ub < 0 ? Eb.from : Eb.to,
            Mb = sU(Tb.facet(AU).map((ab => ab(bb))), Ab, Ub);
          ab.from == Mb && (Yb = Mb)
        }
        if (Yb > -1) Mb = {
          changes: ab,
          selection: Ab.m.cursor(ab.from + ab.insert.length, -1)
        };
        else if (ab.from >= Eb.from && ab.to <= Eb.to && ab.to - ab.from >= (Eb.to - Eb.from) / 3 && (!Ub || Ub.main.empty && Ub.main.from == ab.from + ab.insert.length) && bb.inputState.composing < 0) {
          let Ub = Eb.from < ab.from ? Tb.sliceDoc(Eb.from, ab.from) : "",
            Ab = Eb.to > ab.to ? Tb.sliceDoc(ab.to, Eb.to) : "";
          Mb = Tb.replaceSelection(bb.state.toText(Ub + ab.insert.sliceString(0, void 0, bb.state.lineBreak) + Ab))
        } else {
          let Yb = Tb.changes(ab),
            Bb = Ub && Ub.main.to <= Yb.newLength ? Ub.main : void 0;
          if (Tb.selection.cj.length > 1 && (bb.inputState.composing >= 0 || bb.inputState.compositionPendingChange) && ab.to <= Eb.to + 10 && ab.to >= Eb.to - 10) {
            let eb, vb = bb.state.sliceDoc(ab.from, ab.to),
              Lb = Ub && rU(bb, Ub.main.head);
            if (Lb) {
              let bb = ab.insert.length - (ab.to - ab.from);
              eb = {
                from: Lb.from,
                to: Lb.to - bb
              }
            } else eb = bb.state.doc.lineAt(Eb.head);
            let Pb = Eb.to - ab.to;
            Mb = Tb.changeByRange((Ub => {
              if (Ub.from == Eb.from && Ub.to == Eb.to) return {
                changes: Yb,
                range: Bb || Ub.map(Yb)
              };
              let Mb = Ub.to - Pb,
                Lb = Mb - vb.length;
              if (bb.state.sliceDoc(Lb, Mb) != vb || Mb >= eb.from && Lb <= eb.to) return {
                range: Ub
              };
              let Xb = Tb.changes({
                  from: Lb,
                  to: Mb,
                  insert: ab.insert
                }),
                jb = Ub.to - Eb.to;
              return {
                changes: Xb,
                range: Bb ? Ab.m.range(Math.max(0, Bb.anchor + jb), Math.max(0, Bb.head + jb)) : Ub.map(Xb)
              }
            }))
          } else Mb = {
            changes: Yb,
            selection: Bb && Tb.selection.replaceRange(Bb)
          }
        }
        let Bb = "input.type";
        (bb.composing || bb.inputState.compositionPendingChange && bb.inputState.compositionEndedAt > Date.now() - 50) && (bb.inputState.compositionPendingChange = !1, Bb += ".compose", bb.inputState.compositionFirstChange && (Bb += ".start", bb.inputState.compositionFirstChange = !1));
        return Tb.update(Mb, {
          userEvent: Bb,
          scrollIntoView: !0
        })
      }(bb, ab, Ub));
      return bb.state.facet(Qa).some((Ub => Ub(bb, ab.from, ab.to, Yb, Bb))) || bb.dispatch(Bb()), !0
    }

    function EA(bb, ab, Ub, Ab) {
      let Mb = Math.min(bb.length, ab.length),
        Tb = 0;
      for (; Tb < Mb && bb.charCodeAt(Tb) == ab.charCodeAt(Tb);) Tb++;
      if (Tb == Mb && bb.length == ab.length) return null;
      let Eb = bb.length,
        Yb = ab.length;
      for (; Eb > 0 && Yb > 0 && bb.charCodeAt(Eb - 1) == ab.charCodeAt(Yb - 1);) Eb--, Yb--;
      if ("end" == Ab) {
        Ub -= Eb + Math.max(0, Tb - Math.min(Eb, Yb)) - Tb
      }
      if (Eb < Tb && bb.length < ab.length) {
        Tb -= Ub <= Tb && Ub >= Eb ? Tb - Ub : 0, Yb = Tb + (Yb - Eb), Eb = Tb
      } else if (Yb < Tb) {
        Tb -= Ub <= Tb && Ub >= Yb ? Tb - Ub : 0, Eb = Tb + (Eb - Yb), Yb = Tb
      }
      return {
        from: Tb,
        toA: Eb,
        toB: Yb
      }
    }

    function YA(bb, ab) {
      return ab.head == bb.main.head && ab.anchor == bb.main.anchor
    }
    class BA {
      setSelectionOrigin(bb) {
        this.lastSelectionOrigin = bb, this.lastSelectionTime = Date.now()
      }
      constructor(bb) {
        this.view = bb, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = bb.hasFocus, fb.safari && bb.contentDOM.addEventListener("input", (() => null)), fb.gecko && function(bb) {
          hA.has(bb) || (hA.add(bb), bb.addEventListener("copy", (() => {})), bb.addEventListener("cut", (() => {})))
        }(bb.contentDOM.ownerDocument)
      }
      handleEvent(bb) {
        (function(bb, ab) {
          if (!ab.bubbles) return !0;
          if (ab.defaultPrevented) return !1;
          for (let Ub, Ab = ab.target; Ab != bb.contentDOM; Ab = Ab.parentNode)
            if (!Ab || 11 == Ab.nodeType || (Ub = PU.get(Ab)) && Ub.isWidget() && !Ub.isHidden && Ub.widget.ignoreEvent(ab)) return !1;
          return !0
        })(this.view, bb) && !this.ignoreDuringComposition(bb) && ("keydown" == bb.type && this.keydown(bb) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(bb.type, bb))) : this.runHandlers(bb.type, bb)))
      }
      runHandlers(bb, ab) {
        let Ub = this.handlers[bb];
        if (Ub) {
          for (let bb of Ub.observers) bb(this.view, ab);
          for (let bb of Ub.handlers) {
            if (ab.defaultPrevented) break;
            if (bb(this.view, ab)) {
              ab.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(bb) {
        let ab = vA(bb),
          Ub = this.handlers,
          Ab = this.view.contentDOM;
        for (let Mb in ab)
          if ("scroll" != Mb) {
            let bb = !ab[Mb].handlers.length,
              Tb = Ub[Mb];
            Tb && bb != !Tb.handlers.length && (Ab.removeEventListener(Mb, this.handleEvent), Tb = null), Tb || Ab.addEventListener(Mb, this.handleEvent, {
              passive: bb
            })
          } for (let Mb in Ub) "scroll" == Mb || ab[Mb] || Ab.removeEventListener(Mb, this.handleEvent);
        this.handlers = ab
      }
      keydown(bb) {
        if (this.lastKeyCode = bb.keyCode, this.lastKeyTime = Date.now(), 9 == bb.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != bb.keyCode && XA.indexOf(bb.keyCode) < 0 && (this.tabFocusMode = -1), fb.android && fb.chrome && !bb.synthetic && (13 == bb.keyCode || 8 == bb.keyCode)) return this.view.observer.delayAndroidKey(bb.key, bb.keyCode), !0;
        let ab;
        return !fb.ios || bb.synthetic || bb.altKey || bb.metaKey || bb.shiftKey || !((ab = LA.find((ab => ab.keyCode == bb.keyCode))) && !bb.ctrlKey || PA.indexOf(bb.key) > -1 && bb.ctrlKey) ? (229 != bb.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = ab || bb, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(bb) {
        let ab = this.pendingIOSKey;
        return !!ab && (!("Enter" == ab.key && bb && bb.from < bb.to && /^\S+$/.test(bb.insert.toString())) && (this.pendingIOSKey = void 0, Ma(this.view.contentDOM, ab.key, ab.keyCode, ab instanceof KeyboardEvent ? ab : void 0)))
      }
      ignoreDuringComposition(bb) {
        return !(!/^key/.test(bb.type) || bb.synthetic) && (this.composing > 0 || !!(fb.safari && !fb.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
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

    function eA(bb, ab) {
      return (Ub, Ab) => {
        try {
          return ab.call(bb, Ab, Ub)
        } catch (Mb) {
          ga(Ub.state, Mb)
        }
      }
    }

    function vA(bb) {
      let ab = Object.create(null);

      function Ub(bb) {
        return ab[bb] || (ab[bb] = {
          observers: [],
          handlers: []
        })
      }
      for (let Ab of bb) {
        let bb = Ab.spec,
          ab = bb && bb.plugin.domEventHandlers,
          Mb = bb && bb.plugin.domEventObservers;
        if (ab)
          for (let Tb in ab) {
            let bb = ab[Tb];
            bb && Ub(Tb).handlers.push(eA(Ab.value, bb))
          }
        if (Mb)
          for (let Tb in Mb) {
            let bb = Mb[Tb];
            bb && Ub(Tb).observers.push(eA(Ab.value, bb))
          }
      }
      for (let Ab in kA) Ub(Ab).handlers.push(kA[Ab]);
      for (let Ab in yA) Ub(Ab).observers.push(yA[Ab]);
      return ab
    }
    const LA = [{
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
      PA = "dthko",
      XA = [16, 17, 18, 20, 91, 92, 224, 225];

    function jA(bb) {
      return .7 * Math.max(0, bb) + 8
    }
    class RA {
      constructor(bb, ab, Ub, Mb) {
        this.view = bb, this.startEvent = ab, this.style = Ub, this.mustSelect = Mb, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = ab, this.scrollParents = nb(bb.contentDOM), this.atoms = bb.state.facet(AU).map((ab => ab(bb)));
        let Tb = bb.contentDOM.ownerDocument;
        Tb.addEventListener("mousemove", this.move = this.move.bind(this)), Tb.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = ab.shiftKey, this.multiple = bb.state.facet(Ab.p.allowMultipleSelections) && function(bb, ab) {
          let Ub = bb.state.facet(Ia);
          return Ub.length ? Ub[0](ab) : fb.mac ? ab.metaKey : ab.ctrlKey
        }(bb, ab), this.dragging = !(! function(bb, ab) {
          let {
            main: Ub
          } = bb.state.selection;
          if (Ub.empty) return !1;
          let Ab = Kb(bb.root);
          if (!Ab || 0 == Ab.rangeCount) return !0;
          let Mb = Ab.getRangeAt(0).getClientRects();
          for (let Tb = 0; Tb < Mb.length; Tb++) {
            let bb = Mb[Tb];
            if (bb.left <= ab.clientX && bb.right >= ab.clientX && bb.top <= ab.clientY && bb.bottom >= ab.clientY) return !0
          }
          return !1
        }(bb, ab) || 1 != NA(ab)) && null
      }
      start(bb) {
        !1 === this.dragging && this.select(bb)
      }
      move(bb) {
        if (0 == bb.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (ab = this.startEvent, Ub = bb, Math.max(Math.abs(ab.clientX - Ub.clientX), Math.abs(ab.clientY - Ub.clientY)) < 10)) return;
        var ab, Ub;
        this.select(this.lastEvent = bb);
        let Ab = 0,
          Mb = 0,
          Tb = 0,
          Eb = 0,
          Yb = this.view.win.innerWidth,
          Bb = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: Tb,
          right: Yb
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: Eb,
          bottom: Bb
        } = this.scrollParents.y.getBoundingClientRect());
        let eb = YU(this.view);
        bb.clientX - eb.left <= Tb + 6 ? Ab = -jA(Tb - bb.clientX) : bb.clientX + eb.right >= Yb - 6 && (Ab = jA(bb.clientX - Yb)), bb.clientY - eb.top <= Eb + 6 ? Mb = -jA(Eb - bb.clientY) : bb.clientY + eb.bottom >= Bb - 6 && (Mb = jA(bb.clientY - Bb)), this.setScrollSpeed(Ab, Mb)
      }
      up(bb) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || bb.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let bb = this.view.contentDOM.ownerDocument;
        bb.removeEventListener("mousemove", this.move), bb.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(bb, ab) {
        this.scrollSpeed = {
          x: bb,
          y: ab
        }, bb || ab ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: bb,
          y: ab
        } = this.scrollSpeed;
        bb && this.scrollParents.x && (this.scrollParents.x.scrollLeft += bb, bb = 0), ab && this.scrollParents.y && (this.scrollParents.y.scrollTop += ab, ab = 0), (bb || ab) && this.view.win.scrollBy(bb, ab), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(bb) {
        let {
          view: ab
        } = this, Ub = gU(this.atoms, this.style.get(bb, this.extend, this.multiple));
        !this.mustSelect && Ub.eq(ab.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: Ub,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(bb) {
        bb.transactions.some((bb => bb.isUserEvent("input.type"))) ? this.destroy() : this.style.update(bb) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const kA = Object.create(null),
      yA = Object.create(null),
      ZA = fb.ie && fb.ie_version < 15 || fb.ios && fb.webkit_version < 604;

    function DA(bb, ab, Ub) {
      for (let Ab of bb.facet(ab)) Ub = Ab(Ub, bb);
      return Ub
    }

    function zA(bb, ab) {
      ab = DA(bb.state, ua, ab);
      let Ub, {
          state: Mb
        } = bb,
        Tb = 1,
        Eb = Mb.toText(ab),
        Yb = Eb.lines == Mb.selection.cj.length;
      if (null != HA && Mb.selection.cj.every((bb => bb.empty)) && HA == Eb.toString()) {
        let bb = -1;
        Ub = Mb.changeByRange((Ub => {
          let Bb = Mb.doc.lineAt(Ub.from);
          if (Bb.from == bb) return {
            range: Ub
          };
          bb = Bb.from;
          let eb = Mb.toText((Yb ? Eb.line(Tb++).text : ab) + Mb.lineBreak);
          return {
            changes: {
              from: Bb.from,
              insert: eb
            },
            range: Ab.m.cursor(Ub.from + eb.length)
          }
        }))
      } else Ub = Yb ? Mb.changeByRange((bb => {
        let ab = Eb.line(Tb++);
        return {
          changes: {
            from: bb.from,
            to: bb.to,
            insert: ab.text
          },
          range: Ab.m.cursor(bb.from + ab.length)
        }
      })) : Mb.replaceSelection(Eb);
      bb.dispatch(Ub, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function xA(bb, ab, Ub, Mb) {
      if (1 == Mb) return Ab.m.cursor(ab, Ub);
      if (2 == Mb) return function(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Mb = bb.charCategorizer(ab),
          Tb = bb.doc.lineAt(ab),
          Eb = ab - Tb.from;
        if (0 == Tb.length) return Ab.m.cursor(ab);
        0 == Eb ? Ub = 1 : Eb == Tb.length && (Ub = -1);
        let Yb = Eb,
          Bb = Eb;
        Ub < 0 ? Yb = (0, Ab.T)(Tb.text, Eb, !1) : Bb = (0, Ab.T)(Tb.text, Eb);
        let eb = Mb(Tb.text.slice(Yb, Bb));
        for (; Yb > 0;) {
          let bb = (0, Ab.T)(Tb.text, Yb, !1);
          if (Mb(Tb.text.slice(bb, Yb)) != eb) break;
          Yb = bb
        }
        for (; Bb < Tb.length;) {
          let bb = (0, Ab.T)(Tb.text, Bb);
          if (Mb(Tb.text.slice(Bb, bb)) != eb) break;
          Bb = bb
        }
        return Ab.m.range(Yb + Tb.from, Bb + Tb.from)
      }(bb.state, ab, Ub);
      {
        let Mb = bb.docView.lineAt(ab, Ub),
          Tb = bb.state.doc.lineAt(Mb ? Mb.posAtEnd : ab),
          Eb = Mb ? Mb.posAtStart : Tb.from,
          Yb = Mb ? Mb.posAtEnd : Tb.to;
        return Yb < bb.state.doc.length && Yb == Tb.to && Yb++, Ab.m.range(Eb, Yb)
      }
    }
    yA.scroll = bb => {
      bb.inputState.lastScrollTop = bb.scrollDOM.scrollTop, bb.inputState.lastScrollLeft = bb.scrollDOM.scrollLeft
    }, yA.wheel = yA.mousewheel = bb => {
      bb.inputState.lastWheelEvent = Date.now()
    }, kA.keydown = (bb, ab) => (bb.inputState.setSelectionOrigin("select"), 27 == ab.keyCode && 0 != bb.inputState.tabFocusMode && (bb.inputState.tabFocusMode = Date.now() + 2e3), !1), yA.touchstart = (bb, ab) => {
      let Ub = bb.inputState,
        Ab = ab.targetTouches[0];
      Ub.lastTouchTime = Date.now(), Ab && (Ub.lastTouchX = Ab.clientX, Ub.lastTouchY = Ab.clientY), Ub.setSelectionOrigin("select.pointer")
    }, yA.touchmove = bb => {
      bb.inputState.setSelectionOrigin("select.pointer")
    }, kA.mousedown = (bb, ab) => {
      if (bb.observer.flush(), bb.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let Ub = null;
      for (let Ab of bb.state.facet(Fa))
        if (Ub = Ab(bb, ab), Ub) break;
      if (Ub || 0 != ab.button || (Ub = function(bb, ab) {
          let Ub = bb.posAndSideAtCoords({
              x: ab.clientX,
              y: ab.clientY
            }, !1),
            Mb = NA(ab),
            Tb = bb.state.selection;
          return {
            update(bb) {
              bb.docChanged && (Ub.pos = bb.changes.mapPos(Ub.pos), Tb = Tb.map(bb.changes))
            },
            get(ab, Eb, Yb) {
              let Bb, eb = bb.posAndSideAtCoords({
                  x: ab.clientX,
                  y: ab.clientY
                }, !1),
                vb = xA(bb, eb.pos, eb.assoc, Mb);
              if (Ub.pos != eb.pos && !Eb) {
                let ab = xA(bb, Ub.pos, Ub.assoc, Mb),
                  Tb = Math.min(ab.from, vb.from),
                  Eb = Math.max(ab.to, vb.to);
                vb = Tb < vb.from ? Ab.m.range(Tb, Eb, vb.assoc) : Ab.m.range(Eb, Tb, vb.assoc)
              }
              return Eb ? Tb.replaceRange(Tb.main.extend(vb.from, vb.to, vb.assoc)) : Yb && 1 == Mb && Tb.cj.length > 1 && (Bb = function(bb, ab) {
                for (let Ub = 0; Ub < bb.cj.length; Ub++) {
                  let {
                    from: Mb,
                    to: Tb
                  } = bb.cj[Ub];
                  if (Mb <= ab && Tb >= ab) return Ab.m.create(bb.cj.slice(0, Ub).concat(bb.cj.slice(Ub + 1)), bb.mainIndex == Ub ? 0 : bb.mainIndex - (bb.mainIndex > Ub ? 1 : 0))
                }
                return null
              }(Tb, eb.pos)) ? Bb : Yb ? Tb.addRange(vb) : Ab.m.create([vb])
            }
          }
        }(bb, ab)), Ub) {
        let Ab = !bb.hasFocus;
        bb.inputState.startMouseSelection(new RA(bb, ab, Ub, Ab)), Ab && bb.observer.ignore((() => {
          Ua(bb.contentDOM);
          let ab = bb.root.activeElement;
          ab && !ab.contains(bb.contentDOM) && ab.blur()
        }));
        let Mb = bb.inputState.mouseSelection;
        if (Mb) return Mb.start(ab), !1 === Mb.dragging
      } else bb.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const iA = fb.ie && fb.ie_version <= 11;
    let fA = null,
      mA = 0,
      pA = 0;

    function NA(bb) {
      if (!iA) return bb.detail;
      let ab = fA,
        Ub = pA;
      return fA = bb, pA = Date.now(), mA = !ab || Ub > Date.now() - 400 && Math.abs(ab.clientX - bb.clientX) < 2 && Math.abs(ab.clientY - bb.clientY) < 2 ? (mA + 1) % 3 : 1
    }

    function WA(bb, ab, Ub, Ab) {
      if (!(Ub = DA(bb.state, ua, Ub))) return;
      let Mb = bb.posAtCoords({
          x: ab.clientX,
          y: ab.clientY
        }, !1),
        {
          draggedContent: Tb
        } = bb.inputState,
        Eb = Ab && Tb && function(bb, ab) {
          let Ub = bb.state.facet(da);
          return Ub.length ? Ub[0](ab) : fb.mac ? !ab.altKey : !ab.ctrlKey
        }(bb, ab) ? {
          from: Tb.from,
          to: Tb.to
        } : null,
        Yb = {
          from: Mb,
          insert: Ub
        },
        Bb = bb.state.changes(Eb ? [Eb, Yb] : Yb);
      bb.focus(), bb.dispatch({
        changes: Bb,
        selection: {
          anchor: Bb.mapPos(Mb, -1),
          head: Bb.mapPos(Mb, 1)
        },
        userEvent: Eb ? "move.drop" : "input.drop"
      }), bb.inputState.draggedContent = null
    }
    kA.dragstart = (bb, ab) => {
      let {
        selection: {
          main: Ub
        }
      } = bb.state;
      if (ab.target.draggable) {
        let Mb = bb.docView.tile.nearest(ab.target);
        if (Mb && Mb.isWidget()) {
          let bb = Mb.posAtStart,
            ab = bb + Mb.length;
          (bb >= Ub.to || ab <= Ub.from) && (Ub = Ab.m.range(bb, ab))
        }
      }
      let {
        inputState: Mb
      } = bb;
      return Mb.mouseSelection && (Mb.mouseSelection.dragging = !0), Mb.draggedContent = Ub, ab.dataTransfer && (ab.dataTransfer.setData("Text", DA(bb.state, ra, bb.state.sliceDoc(Ub.from, Ub.to))), ab.dataTransfer.effectAllowed = "copyMove"), !1
    }, kA.dragend = bb => (bb.inputState.draggedContent = null, !1), kA.drop = (bb, ab) => {
      if (!ab.dataTransfer) return !1;
      if (bb.state.readOnly) return !0;
      let Ub = ab.dataTransfer.files;
      if (Ub && Ub.length) {
        let Ab = Array(Ub.length),
          Mb = 0,
          Tb = () => {
            ++Mb == Ub.length && WA(bb, ab, Ab.filter((bb => null != bb)).join(bb.state.lineBreak), !1)
          };
        for (let bb = 0; bb < Ub.length; bb++) {
          let ab = new FileReader;
          ab.onerror = Tb, ab.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(ab.result) || (Ab[bb] = ab.result), Tb()
          }, ab.readAsText(Ub[bb])
        }
        return !0
      } {
        let Ub = ab.dataTransfer.getData("Text");
        if (Ub) return WA(bb, ab, Ub, !0), !0
      }
      return !1
    }, kA.paste = (bb, ab) => {
      if (bb.state.readOnly) return !0;
      bb.observer.flush();
      let Ub = ZA ? null : ab.clipboardData;
      return Ub ? (zA(bb, Ub.getData("text/plain") || Ub.getData("text/uri-list")), !0) : (function(bb) {
        let ab = bb.dom.parentNode;
        if (!ab) return;
        let Ub = ab.appendChild(document.createElement("textarea"));
        Ub.style.cssText = "position: fixed; left: -10000px; top: 10px", Ub.focus(), setTimeout((() => {
          bb.focus(), Ub.remove(), zA(bb, Ub.value)
        }), 50)
      }(bb), !1)
    };
    let HA = null;
    kA.copy = kA.cut = (bb, ab) => {
      if (!lb(bb.contentDOM, bb.observer.selectionRange)) return !1;
      let {
        text: Ub,
        cj: Ab,
        linewise: Mb
      } = function(bb) {
        let ab = [],
          Ub = [],
          Ab = !1;
        for (let Mb of bb.selection.cj) Mb.empty || (ab.push(bb.sliceDoc(Mb.from, Mb.to)), Ub.push(Mb));
        if (!ab.length) {
          let Mb = -1;
          for (let {
              from: Ab
            }
            of bb.selection.cj) {
            let Tb = bb.doc.lineAt(Ab);
            Tb.number > Mb && (ab.push(Tb.text), Ub.push({
              from: Tb.from,
              to: Math.min(bb.doc.length, Tb.to + 1)
            })), Mb = Tb.number
          }
          Ab = !0
        }
        return {
          text: DA(bb, ra, ab.join(bb.lineBreak)),
          cj: Ub,
          linewise: Ab
        }
      }(bb.state);
      if (!Ub && !Mb) return !1;
      HA = Mb ? Ub : null, "cut" != ab.type || bb.state.readOnly || bb.dispatch({
        changes: Ab,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let Tb = ZA ? null : ab.clipboardData;
      return Tb ? (Tb.clearData(), Tb.setData("text/plain", Ub), !0) : (function(bb, ab) {
        let Ub = bb.dom.parentNode;
        if (!Ub) return;
        let Ab = Ub.appendChild(document.createElement("textarea"));
        Ab.style.cssText = "position: fixed; left: -10000px; top: 10px", Ab.value = ab, Ab.focus(), Ab.selectionEnd = ab.length, Ab.selectionStart = 0, setTimeout((() => {
          Ab.remove(), bb.focus()
        }), 50)
      }(bb, Ub), !1)
    };
    const IA = Ab.d.define();

    function dA(bb, ab) {
      let Ub = [];
      for (let Ab of bb.facet(qa)) {
        let Mb = Ab(bb, ab);
        Mb && Ub.push(Mb)
      }
      return Ub.length ? bb.update({
        effects: Ub,
        annotations: IA.of(!0)
      }) : null
    }

    function FA(bb) {
      setTimeout((() => {
        let ab = bb.hasFocus;
        if (ab != bb.inputState.notifiedFocused) {
          let Ub = dA(bb.state, ab);
          Ub ? bb.dispatch(Ub) : bb.update([])
        }
      }), 10)
    }
    yA.focus = bb => {
      bb.inputState.lastFocusTime = Date.now(), bb.scrollDOM.scrollTop || !bb.inputState.lastScrollTop && !bb.inputState.lastScrollLeft || (bb.scrollDOM.scrollTop = bb.inputState.lastScrollTop, bb.scrollDOM.scrollLeft = bb.inputState.lastScrollLeft), FA(bb)
    }, yA.blur = bb => {
      bb.observer.clearSelectionRange(), FA(bb)
    }, yA.compositionstart = yA.compositionupdate = bb => {
      bb.observer.editContext || (null == bb.inputState.compositionFirstChange && (bb.inputState.compositionFirstChange = !0), bb.inputState.composing < 0 && (bb.inputState.composing = 0))
    }, yA.compositionend = bb => {
      bb.observer.editContext || (bb.inputState.composing = -1, bb.inputState.compositionEndedAt = Date.now(), bb.inputState.compositionPendingKey = !0, bb.inputState.compositionPendingChange = bb.observer.pendingRecords().length > 0, bb.inputState.compositionFirstChange = null, fb.chrome && fb.android ? bb.observer.flushSoon() : bb.inputState.compositionPendingChange ? Promise.resolve().then((() => bb.observer.flush())) : setTimeout((() => {
        bb.inputState.composing < 0 && bb.docView.hasComposition && bb.update([])
      }), 50))
    }, yA.contextmenu = bb => {
      bb.inputState.lastContextMenu = Date.now()
    }, kA.beforeinput = (bb, ab) => {
      var Ub, Ab;
      if ("insertText" != ab.inputType && "insertCompositionText" != ab.inputType || (bb.inputState.insertingText = ab.data, bb.inputState.insertingTextAt = Date.now()), "insertReplacementText" == ab.inputType && bb.observer.editContext) {
        let Ab = null === (Ub = ab.dataTransfer) || void 0 === Ub ? void 0 : Ub.getData("text/plain"),
          Mb = ab.getTargetRanges();
        if (Ab && Mb.length) {
          let ab = Mb[0],
            Ub = bb.posAtDOM(ab.startContainer, ab.startOffset),
            Tb = bb.posAtDOM(ab.endContainer, ab.endOffset);
          return TA(bb, {
            from: Ub,
            to: Tb,
            insert: bb.state.toText(Ab)
          }, null), !0
        }
      }
      let Mb;
      if (fb.chrome && fb.android && (Mb = LA.find((bb => bb.inputType == ab.inputType))) && (bb.observer.delayAndroidKey(Mb.key, Mb.keyCode), "Backspace" == Mb.key || "Delete" == Mb.key)) {
        let ab = (null === (Ab = window.visualViewport) || void 0 === Ab ? void 0 : Ab.height) || 0;
        setTimeout((() => {
          var Ub;
          ((null === (Ub = window.visualViewport) || void 0 === Ub ? void 0 : Ub.height) || 0) > ab + 10 && bb.hasFocus && (bb.contentDOM.blur(), bb.focus())
        }), 100)
      }
      return fb.ios && "deleteContentForward" == ab.inputType && bb.observer.flushSoon(), fb.safari && "insertText" == ab.inputType && bb.inputState.composing >= 0 && setTimeout((() => yA.compositionend(bb, ab)), 20), !1
    };
    const hA = new Set;
    const GA = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let QA = !1;

    function qA() {
      QA = !1
    }
    class uA {
      constructor(bb) {
        this.lineWrapping = bb, this.doc = Ab.G.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(bb, ab) {
        let Ub = this.doc.lineAt(ab).number - this.doc.lineAt(bb).number + 1;
        return this.lineWrapping && (Ub += Math.max(0, Math.ceil((ab - bb - Ub * this.lineLength * .5) / this.lineLength))), this.lineHeight * Ub
      }
      heightForLine(bb) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((bb - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(bb) {
        return this.doc = bb, this
      }
      mustRefreshForWrapping(bb) {
        return GA.indexOf(bb) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(bb) {
        let ab = !1;
        for (let Ub = 0; Ub < bb.length; Ub++) {
          let Ab = bb[Ub];
          Ab < 0 ? Ub++ : this.heightSamples[Math.floor(10 * Ab)] || (ab = !0, this.heightSamples[Math.floor(10 * Ab)] = !0)
        }
        return ab
      }
      refresh(bb, ab, Ub, Ab, Mb, Tb) {
        let Eb = GA.indexOf(bb) > -1,
          Yb = Math.abs(ab - this.lineHeight) > .3 || this.lineWrapping != Eb || Math.abs(Ub - this.charWidth) > .1;
        if (this.lineWrapping = Eb, this.lineHeight = ab, this.charWidth = Ub, this.textHeight = Ab, this.lineLength = Mb, Yb) {
          this.heightSamples = {};
          for (let bb = 0; bb < Tb.length; bb++) {
            let ab = Tb[bb];
            ab < 0 ? bb++ : this.heightSamples[Math.floor(10 * ab)] = !0
          }
        }
        return Yb
      }
    }
    class rA {
      constructor(bb, ab) {
        this.from = bb, this.heights = ab, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class KA {
      constructor(bb, ab, Ub, Ab, Mb) {
        this.from = bb, this.length = ab, this.top = Ub, this.height = Ab, this._content = Mb
      }
      get type() {
        return "number" == typeof this._content ? db.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof Qb ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(bb) {
        let ab = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(bb._content) ? bb._content : [bb]);
        return new KA(this.from, this.length + bb.length, this.top, this.height + bb.height, ab)
      }
    }
    var oA = function(bb) {
      return bb[bb.ByPos = 0] = "ByPos", bb[bb.ByHeight = 1] = "ByHeight", bb[bb.ByPosNoHeight = 2] = "ByPosNoHeight", bb
    }(oA || (oA = {}));
    const lA = .001;
    class tA {
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = bb, this.height = ab, this.flags = Ub
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(bb) {
        this.flags = (bb ? 2 : 0) | -3 & this.flags
      }
      setHeight(bb) {
        this.height != bb && (Math.abs(this.height - bb) > lA && (QA = !0), this.height = bb)
      }
      replace(bb, ab, Ub) {
        return tA.of(Ub)
      }
      decomposeLeft(bb, ab) {
        ab.push(this)
      }
      decomposeRight(bb, ab) {
        ab.push(this)
      }
      applyChanges(bb, ab, Ub, Ab) {
        let Mb = this,
          Tb = Ub.doc;
        for (let Eb = Ab.length - 1; Eb >= 0; Eb--) {
          let {
            fromA: Yb,
            toA: Bb,
            fromB: eb,
            toB: vb
          } = Ab[Eb], Lb = Mb.lineAt(Yb, oA.ByPosNoHeight, Ub.setDoc(ab), 0, 0), Pb = Lb.to >= Bb ? Lb : Mb.lineAt(Bb, oA.ByPosNoHeight, Ub, 0, 0);
          for (vb += Pb.to - Bb, Bb = Pb.to; Eb > 0 && Lb.from <= Ab[Eb - 1].toA;) Yb = Ab[Eb - 1].fromA, eb = Ab[Eb - 1].fromB, Eb--, Yb < Lb.from && (Lb = Mb.lineAt(Yb, oA.ByPosNoHeight, Ub, 0, 0));
          eb += Lb.from - Yb, Yb = Lb.from;
          let Xb = JA.build(Ub.setDoc(Tb), bb, eb, vb);
          Mb = wA(Mb, Mb.replace(Yb, Bb, Xb))
        }
        return Mb.updateHeight(Ub, 0)
      }
      static empty() {
        return new CA(0, 0, 0)
      }
      static of (bb) {
        if (1 == bb.length) return bb[0];
        let ab = 0,
          Ub = bb.length,
          Ab = 0,
          Mb = 0;
        for (;;)
          if (ab == Ub)
            if (Ab > 2 * Mb) {
              let Mb = bb[ab - 1];
              Mb.break ? bb.splice(--ab, 1, Mb.left, null, Mb.right) : bb.splice(--ab, 1, Mb.left, Mb.right), Ub += 1 + Mb.break, Ab -= Mb.size
            } else {
              if (!(Mb > 2 * Ab)) break;
              {
                let ab = bb[Ub];
                ab.break ? bb.splice(Ub, 1, ab.left, null, ab.right) : bb.splice(Ub, 1, ab.left, ab.right), Ub += 2 + ab.break, Mb -= ab.size
              }
            }
        else if (Ab < Mb) {
          let Ub = bb[ab++];
          Ub && (Ab += Ub.size)
        } else {
          let ab = bb[--Ub];
          ab && (Mb += ab.size)
        }
        let Tb = 0;
        return null == bb[ab - 1] ? (Tb = 1, ab--) : null == bb[ab] && (Tb = 1, Ub++), new OA(tA.of(bb.slice(0, ab)), Tb, tA.of(bb.slice(Ub)))
      }
    }

    function wA(bb, ab) {
      return bb == ab ? bb : (bb.constructor != ab.constructor && (QA = !0), ab)
    }
    tA.prototype.size = 1;
    const sA = Fb.replace({});
    class gA extends tA {
      constructor(bb, ab, Ub) {
        super(bb, ab), this.deco = Ub, this.spaceAbove = 0
      }
      mainBlock(bb, ab) {
        return new KA(ab, this.length, bb + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(bb, ab, Ub, Ab) {
        return this.spaceAbove && bb < Ub + this.spaceAbove ? new KA(Ab, 0, Ub, this.spaceAbove, sA) : this.mainBlock(Ub, Ab)
      }
      lineAt(bb, ab, Ub, Ab, Mb) {
        let Tb = this.mainBlock(Ab, Mb);
        return this.spaceAbove ? this.blockAt(0, Ub, Ab, Mb).join(Tb) : Tb
      }
      forEachLine(bb, ab, Ub, Ab, Mb, Tb) {
        bb <= Mb + this.length && ab >= Mb && Tb(this.lineAt(0, oA.ByPos, Ub, Ab, Mb))
      }
      setMeasuredHeight(bb) {
        let ab = bb.heights[bb.index++];
        ab < 0 ? (this.spaceAbove = -ab, ab = bb.heights[bb.index++]) : this.spaceAbove = 0, this.setHeight(ab)
      }
      updateHeight(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ub = arguments.length > 3 ? arguments[3] : void 0;
        return Ub && Ub.from <= ab && Ub.more && this.setMeasuredHeight(Ub), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class CA extends gA {
      constructor(bb, ab, Ub) {
        super(bb, ab, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = Ub
      }
      mainBlock(bb, ab) {
        return new KA(ab, this.length, bb + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(bb, ab, Ub) {
        let Ab = Ub[0];
        return 1 == Ub.length && (Ab instanceof CA || Ab instanceof VA && 4 & Ab.flags) && Math.abs(this.length - Ab.length) < 10 ? (Ab instanceof VA ? Ab = new CA(Ab.length, this.height, this.spaceAbove) : Ab.height = this.height, this.outdated || (Ab.outdated = !1), Ab) : tA.of(Ub)
      }
      updateHeight(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ab = arguments.length > 3 ? arguments[3] : void 0;
        return Ab && Ab.from <= ab && Ab.more ? this.setMeasuredHeight(Ab) : (Ub || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, bb.heightForLine(this.length - this.collapsed)) + this.breaks * bb.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class VA extends tA {
      constructor(bb) {
        super(bb, 0)
      }
      heightMetrics(bb, ab) {
        let Ub, Ab = bb.doc.lineAt(ab).number,
          Mb = bb.doc.lineAt(ab + this.length).number,
          Tb = Mb - Ab + 1,
          Eb = 0;
        if (bb.lineWrapping) {
          let ab = Math.min(this.height, bb.lineHeight * Tb);
          Ub = ab / Tb, this.length > Tb + 1 && (Eb = (this.height - ab) / (this.length - Tb - 1))
        } else Ub = this.height / Tb;
        return {
          firstLine: Ab,
          lastLine: Mb,
          perLine: Ub,
          perChar: Eb
        }
      }
      blockAt(bb, ab, Ub, Ab) {
        let {
          firstLine: Mb,
          lastLine: Tb,
          perLine: Eb,
          perChar: Yb
        } = this.heightMetrics(ab, Ab);
        if (ab.lineWrapping) {
          let Mb = Ab + (bb < ab.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (bb - Ub) / this.height)) * this.length)),
            Tb = ab.doc.lineAt(Mb),
            Bb = Eb + Tb.length * Yb,
            eb = Math.max(Ub, bb - Bb / 2);
          return new KA(Tb.from, Tb.length, eb, Bb, 0)
        } {
          let Ab = Math.max(0, Math.min(Tb - Mb, Math.floor((bb - Ub) / Eb))),
            {
              from: Yb,
              length: Bb
            } = ab.doc.line(Mb + Ab);
          return new KA(Yb, Bb, Ub + Eb * Ab, Eb, 0)
        }
      }
      lineAt(bb, ab, Ub, Ab, Mb) {
        if (ab == oA.ByHeight) return this.blockAt(bb, Ub, Ab, Mb);
        if (ab == oA.ByPosNoHeight) {
          let {
            from: ab,
            to: Ab
          } = Ub.doc.lineAt(bb);
          return new KA(ab, Ab - ab, 0, 0, 0)
        }
        let {
          firstLine: Tb,
          perLine: Eb,
          perChar: Yb
        } = this.heightMetrics(Ub, Mb), Bb = Ub.doc.lineAt(bb), eb = Eb + Bb.length * Yb, vb = Bb.number - Tb, Lb = Ab + Eb * vb + Yb * (Bb.from - Mb - vb);
        return new KA(Bb.from, Bb.length, Math.max(Ab, Math.min(Lb, Ab + this.height - eb)), eb, 0)
      }
      forEachLine(bb, ab, Ub, Ab, Mb, Tb) {
        bb = Math.max(bb, Mb), ab = Math.min(ab, Mb + this.length);
        let {
          firstLine: Eb,
          perLine: Yb,
          perChar: Bb
        } = this.heightMetrics(Ub, Mb);
        for (let eb = bb, vb = Ab; eb <= ab;) {
          let ab = Ub.doc.lineAt(eb);
          if (eb == bb) {
            let Ub = ab.number - Eb;
            vb += Yb * Ub + Bb * (bb - Mb - Ub)
          }
          let Ab = Yb + Bb * ab.length;
          Tb(new KA(ab.from, ab.length, vb, Ab, 0)), vb += Ab, eb = ab.to + 1
        }
      }
      replace(bb, ab, Ub) {
        let Ab = this.length - ab;
        if (Ab > 0) {
          let bb = Ub[Ub.length - 1];
          bb instanceof VA ? Ub[Ub.length - 1] = new VA(bb.length + Ab) : Ub.push(null, new VA(Ab - 1))
        }
        if (bb > 0) {
          let ab = Ub[0];
          ab instanceof VA ? Ub[0] = new VA(bb + ab.length) : Ub.unshift(new VA(bb - 1), null)
        }
        return tA.of(Ub)
      }
      decomposeLeft(bb, ab) {
        ab.push(new VA(bb - 1), null)
      }
      decomposeRight(bb, ab) {
        ab.push(null, new VA(this.length - bb - 1))
      }
      updateHeight(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ab = arguments.length > 3 ? arguments[3] : void 0,
          Mb = ab + this.length;
        if (Ab && Ab.from <= ab + this.length && Ab.more) {
          let Ub = [],
            Tb = Math.max(ab, Ab.from),
            Eb = -1;
          for (Ab.from > ab && Ub.push(new VA(Ab.from - ab - 1).updateHeight(bb, ab)); Tb <= Mb && Ab.more;) {
            let ab = bb.doc.lineAt(Tb).length;
            Ub.length && Ub.push(null);
            let Mb = Ab.heights[Ab.index++],
              Yb = 0;
            Mb < 0 && (Yb = -Mb, Mb = Ab.heights[Ab.index++]), -1 == Eb ? Eb = Mb : Math.abs(Mb - Eb) >= lA && (Eb = -2);
            let Bb = new CA(ab, Mb, Yb);
            Bb.outdated = !1, Ub.push(Bb), Tb += ab + 1
          }
          Tb <= Mb && Ub.push(null, new VA(Mb - Tb).updateHeight(bb, Tb));
          let Yb = tA.of(Ub);
          return (Eb < 0 || Math.abs(Yb.height - this.height) >= lA || Math.abs(Eb - this.heightMetrics(bb, ab).perLine) >= lA) && (QA = !0), wA(this, Yb)
        }
        return (Ub || this.outdated) && (this.setHeight(bb.heightForGap(ab, ab + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class OA extends tA {
      constructor(bb, ab, Ub) {
        super(bb.length + ab + Ub.length, bb.height + Ub.height, ab | (bb.outdated || Ub.outdated ? 2 : 0)), this.left = bb, this.right = Ub, this.size = bb.size + Ub.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(bb, ab, Ub, Ab) {
        let Mb = Ub + this.left.height;
        return bb < Mb ? this.left.blockAt(bb, ab, Ub, Ab) : this.right.blockAt(bb, ab, Mb, Ab + this.left.length + this.break)
      }
      lineAt(bb, ab, Ub, Ab, Mb) {
        let Tb = Ab + this.left.height,
          Eb = Mb + this.left.length + this.break,
          Yb = ab == oA.ByHeight ? bb < Tb : bb < Eb,
          Bb = Yb ? this.left.lineAt(bb, ab, Ub, Ab, Mb) : this.right.lineAt(bb, ab, Ub, Tb, Eb);
        if (this.break || (Yb ? Bb.to < Eb : Bb.from > Eb)) return Bb;
        let eb = ab == oA.ByPosNoHeight ? oA.ByPosNoHeight : oA.ByPos;
        return Yb ? Bb.join(this.right.lineAt(Eb, eb, Ub, Tb, Eb)) : this.left.lineAt(Eb, eb, Ub, Ab, Mb).join(Bb)
      }
      forEachLine(bb, ab, Ub, Ab, Mb, Tb) {
        let Eb = Ab + this.left.height,
          Yb = Mb + this.left.length + this.break;
        if (this.break) bb < Yb && this.left.forEachLine(bb, ab, Ub, Ab, Mb, Tb), ab >= Yb && this.right.forEachLine(bb, ab, Ub, Eb, Yb, Tb);
        else {
          let Bb = this.lineAt(Yb, oA.ByPos, Ub, Ab, Mb);
          bb < Bb.from && this.left.forEachLine(bb, Bb.from - 1, Ub, Ab, Mb, Tb), Bb.to >= bb && Bb.from <= ab && Tb(Bb), ab > Bb.to && this.right.forEachLine(Bb.to + 1, ab, Ub, Eb, Yb, Tb)
        }
      }
      replace(bb, ab, Ub) {
        let Ab = this.left.length + this.break;
        if (ab < Ab) return this.balanced(this.left.replace(bb, ab, Ub), this.right);
        if (bb > this.left.length) return this.balanced(this.left, this.right.replace(bb - Ab, ab - Ab, Ub));
        let Mb = [];
        bb > 0 && this.decomposeLeft(bb, Mb);
        let Tb = Mb.length;
        for (let Eb of Ub) Mb.push(Eb);
        if (bb > 0 && cA(Mb, Tb - 1), ab < this.length) {
          let bb = Mb.length;
          this.decomposeRight(ab, Mb), cA(Mb, bb)
        }
        return tA.of(Mb)
      }
      decomposeLeft(bb, ab) {
        let Ub = this.left.length;
        if (bb <= Ub) return this.left.decomposeLeft(bb, ab);
        ab.push(this.left), this.break && (Ub++, bb >= Ub && ab.push(null)), bb > Ub && this.right.decomposeLeft(bb - Ub, ab)
      }
      decomposeRight(bb, ab) {
        let Ub = this.left.length,
          Ab = Ub + this.break;
        if (bb >= Ab) return this.right.decomposeRight(bb - Ab, ab);
        bb < Ub && this.left.decomposeRight(bb, ab), this.break && bb < Ab && ab.push(null), ab.push(this.right)
      }
      balanced(bb, ab) {
        return bb.size > 2 * ab.size || ab.size > 2 * bb.size ? tA.of(this.break ? [bb, null, ab] : [bb, ab]) : (this.left = wA(this.left, bb), this.right = wA(this.right, ab), this.setHeight(bb.height + ab.height), this.outdated = bb.outdated || ab.outdated, this.size = bb.size + ab.size, this.length = bb.length + this.break+ab.length, this)
      }
      updateHeight(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ab = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: Mb,
            right: Tb
          } = this,
          Eb = ab + Mb.length + this.break,
          Yb = null;
        return Ab && Ab.from <= ab + Mb.length && Ab.more ? Yb = Mb = Mb.updateHeight(bb, ab, Ub, Ab) : Mb.updateHeight(bb, ab, Ub), Ab && Ab.from <= Eb + Tb.length && Ab.more ? Yb = Tb = Tb.updateHeight(bb, Eb, Ub, Ab) : Tb.updateHeight(bb, Eb, Ub), Yb ? this.balanced(Mb, Tb) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function cA(bb, ab) {
      let Ub, Ab;
      null == bb[ab] && (Ub = bb[ab - 1]) instanceof VA && (Ab = bb[ab + 1]) instanceof VA && bb.splice(ab - 1, 3, new VA(Ub.length + 1 + Ab.length))
    }
    class JA {
      constructor(bb, ab) {
        this.pos = bb, this.oracle = ab, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = bb
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(bb, ab) {
        if (this.lineStart > -1) {
          let bb = Math.min(ab, this.lineEnd),
            Ub = this.nodes[this.nodes.length - 1];
          Ub instanceof CA ? Ub.length += bb - this.pos : (bb > this.pos || !this.isCovered) && this.nodes.push(new CA(bb - this.pos, -1, 0)), this.writtenTo = bb, ab > bb && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = ab
      }
      point(bb, ab, Ub) {
        if (bb < ab || Ub.heightRelevant) {
          let Ab = Ub.widget ? Ub.widget.estimatedHeight : 0,
            Mb = Ub.widget ? Ub.widget.lineBreaks : 0;
          Ab < 0 && (Ab = this.oracle.lineHeight);
          let Tb = ab - bb;
          Ub.block ? this.Nbb(new gA(Tb, Ab, Ub)) : (Tb || Mb || Ab >= 5) && this.addLineDeco(Ab, Mb, Tb)
        } else ab > bb && this.span(bb, ab);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: bb,
          to: ab
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = bb, this.lineEnd = ab, this.writtenTo < bb && ((this.writtenTo < bb - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, bb - 1)), this.nodes.push(null)), this.pos > bb && this.nodes.push(new CA(this.pos - bb, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(bb, ab) {
        let Ub = new VA(ab - bb);
        return this.oracle.doc.lineAt(bb).to == ab && (Ub.flags |= 4), Ub
      }
      ensureLine() {
        this.enterLine();
        let bb = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (bb instanceof CA) return bb;
        let ab = new CA(0, -1, 0);
        return this.nodes.push(ab), ab
      }
      Nbb(bb) {
        this.enterLine();
        let ab = bb.deco;
        ab && ab.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(bb), this.writtenTo = this.pos = this.pos + bb.length, ab && ab.endSide > 0 && (this.covering = bb)
      }
      addLineDeco(bb, ab, Ub) {
        let Ab = this.ensureLine();
        Ab.length += Ub, Ab.collapsed += Ub, Ab.widgetHeight = Math.max(Ab.widgetHeight, bb), Ab.breaks += ab, this.writtenTo = this.pos = this.pos + Ub
      }
      finish(bb) {
        let ab = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || ab instanceof CA || this.isCovered ? (this.writtenTo < this.pos || null == ab) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new CA(0, -1, 0));
        let Ub = bb;
        for (let Ab of this.nodes) Ab instanceof CA && Ab.updateHeight(this.oracle, Ub), Ub += Ab ? Ab.length : 1;
        return this.nodes
      }
      static build(bb, ab, Ub, Mb) {
        let Tb = new JA(Ub, bb);
        return Ab.y.spans(ab, Ub, Mb, Tb, 0), Tb.finish(Ub)
      }
    }
    class nA {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(bb, ab, Ub, Ab) {
        (bb < ab || Ub && Ub.heightRelevant || Ab && Ab.heightRelevant) && ub(bb, ab, this.changes, 5)
      }
    }

    function SA(bb, ab) {
      let Ub = bb.getBoundingClientRect(),
        Ab = bb.ownerDocument,
        Mb = Ab.defaultView || window,
        Tb = Math.max(0, Ub.left),
        Eb = Math.min(Mb.innerWidth, Ub.right),
        Yb = Math.max(0, Ub.top),
        Bb = Math.min(Mb.innerHeight, Ub.bottom);
      for (let eb = bb.parentNode; eb && eb != Ab.body;)
        if (1 == eb.nodeType) {
          let ab = eb,
            Ub = window.getComputedStyle(ab);
          if ((ab.scrollHeight > ab.clientHeight || ab.scrollWidth > ab.clientWidth) && "visible" != Ub.overflow) {
            let Ub = ab.getBoundingClientRect();
            Tb = Math.max(Tb, Ub.left), Eb = Math.min(Eb, Ub.right), Yb = Math.max(Yb, Ub.top), Bb = Math.min(eb == bb.parentNode ? Mb.innerHeight : Bb, Ub.bottom)
          }
          eb = "absolute" == Ub.position || "fixed" == Ub.position ? ab.offsetParent : ab.parentNode
        } else {
          if (11 != eb.nodeType) break;
          eb = eb.host
        } return {
        left: Tb - Ub.left,
        right: Math.max(Tb, Eb) - Ub.left,
        top: Yb - (Ub.top + ab),
        bottom: Math.max(Yb, Bb) - (Ub.top + ab)
      }
    }

    function bM(bb, ab) {
      let Ub = bb.getBoundingClientRect();
      return {
        left: 0,
        right: Ub.right - Ub.left,
        top: ab,
        bottom: Ub.bottom - (Ub.top + ab)
      }
    }
    class aM {
      constructor(bb, ab, Ub, Ab) {
        this.from = bb, this.to = ab, this.size = Ub, this.displaySize = Ab
      }
      static same(bb, ab) {
        if (bb.length != ab.length) return !1;
        for (let Ub = 0; Ub < bb.length; Ub++) {
          let Ab = bb[Ub],
            Mb = ab[Ub];
          if (Ab.from != Mb.from || Ab.to != Mb.to || Ab.size != Mb.size) return !1
        }
        return !0
      }
      draw(bb, ab) {
        return Fb.replace({
          widget: new UM(this.displaySize * (ab ? bb.scaleY : bb.scaleX), ab)
        }).range(this.from, this.to)
      }
    }
    class UM extends Ib {
      constructor(bb, ab) {
        super(), this.size = bb, this.vertical = ab
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
    class AM {
      constructor(bb, ab) {
        this.view = bb, this.state = ab, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = YM, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = ea.LTR, this.W4 = [], this.mustEnforceCursorAssoc = !1;
        let Ub = ab.facet(Sa).some((bb => "function" != typeof bb && "cm-lineWrapping" == bb.class));
        this.heightOracle = new uA(Ub), this.stateDeco = BM(ab), this.heightMap = tA.empty().applyChanges(this.stateDeco, Ab.G.empty, this.heightOracle.setDoc(ab.doc), [new eU(0, 0, 0, ab.doc.length)]);
        for (let Ab = 0; Ab < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); Ab++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = Fb.set(this.lineGaps.map((bb => bb.draw(this, !1)))), this.scrollParent = bb.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let bb = [this.viewport],
          {
            main: ab
          } = this.state.selection;
        for (let Ub = 0; Ub <= 1; Ub++) {
          let Ab = Ub ? ab.head : ab.anchor;
          if (!bb.some((bb => {
              let {
                from: ab,
                to: Ub
              } = bb;
              return Ab >= ab && Ab <= Ub
            }))) {
            let {
              from: ab,
              to: Ub
            } = this.lineBlockAt(Ab);
            bb.push(new MM(ab, Ub))
          }
        }
        return this.viewports = bb.sort(((bb, ab) => bb.from - ab.from)), this.updateScaler()
      }
      updateScaler() {
        let bb = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? YM : new eM(this.heightOracle, this.heightMap, this.viewports), bb.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (bb => {
          this.viewportLines.push(vM(bb, this.scaler))
        }))
      }
      update(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = bb.state;
        let Ub = this.stateDeco;
        this.stateDeco = BM(this.state);
        let Mb = bb.changedRanges,
          Tb = eU.extendWithRanges(Mb, function(bb, ab, Ub) {
            let Mb = new nA;
            return Ab.y.compare(bb, ab, Ub, Mb, 0), Mb.changes
          }(Ub, this.stateDeco, bb ? bb.changes : Ab.ChangeSet.empty(this.state.doc.length))),
          Eb = this.heightMap.height,
          Yb = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        qA(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, bb.startState.doc, this.heightOracle.setDoc(this.state.doc), Tb), (this.heightMap.height != Eb || QA) && (bb.flags |= 2), Yb ? (this.scrollAnchorPos = bb.changes.mapPos(Yb.from, -1), this.scrollAnchorHeight = Yb.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = Eb);
        let Bb = Tb.length ? this.mapViewport(this.viewport, bb.changes) : this.viewport;
        (ab && (ab.range.head < Bb.from || ab.range.head > Bb.to) || !this.viewportIsAppropriate(Bb)) && (Bb = this.getViewport(0, ab));
        let eb = Bb.from != this.viewport.from || Bb.to != this.viewport.to;
        this.viewport = Bb, bb.flags |= this.updateForViewport(), (eb || !bb.changes.empty || 2 & bb.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, bb.changes))), bb.flags |= this.computeVisibleRanges(bb.changes), ab && (this.scrollTarget = ab), !this.mustEnforceCursorAssoc && (bb.selectionSet || bb.focusChanged) && bb.view.lineWrapping && bb.state.selection.main.empty && bb.state.selection.main.assoc && !bb.state.facet(oa) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: bb
        } = this, ab = bb.contentDOM, Ub = window.getComputedStyle(ab), Mb = this.heightOracle, Tb = Ub.whiteSpace;
        this.defaultTextDirection = "rtl" == Ub.direction ? ea.RTL : ea.LTR;
        let Eb = this.heightOracle.mustRefreshForWrapping(Tb) || "refresh" === this.mustMeasureContent,
          Yb = ab.getBoundingClientRect(),
          Bb = Eb || this.mustMeasureContent || this.contentDOMHeight != Yb.height;
        this.contentDOMHeight = Yb.height, this.mustMeasureContent = !1;
        let eb = 0,
          vb = 0;
        if (Yb.width && Yb.height) {
          let {
            scaleX: bb,
            scaleY: Ub
          } = Jb(ab, Yb);
          (bb > .005 && Math.abs(this.scaleX - bb) > .005 || Ub > .005 && Math.abs(this.scaleY - Ub) > .005) && (this.scaleX = bb, this.scaleY = Ub, eb |= 16, Eb = Bb = !0)
        }
        let Lb = (parseInt(Ub.paddingTop) || 0) * this.scaleY,
          Pb = (parseInt(Ub.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == Lb && this.paddingBottom == Pb || (this.paddingTop = Lb, this.paddingBottom = Pb, eb |= 18), this.editorWidth != bb.scrollDOM.clientWidth && (Mb.lineWrapping && (Bb = !0), this.editorWidth = bb.scrollDOM.clientWidth, eb |= 16);
        let Xb = nb(this.view.contentDOM, !1).y;
        Xb != this.scrollParent && (this.scrollParent = Xb, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let jb = this.getScrollOffset();
        this.scrollOffset != jb && (this.scrollAnchorHeight = -1, this.scrollOffset = jb), this.scrolledToBottom = Ta(this.scrollParent || bb.win);
        let Rb = (this.printing ? bM : SA)(ab, this.paddingTop),
          kb = Rb.top - this.pixelViewport.top,
          yb = Rb.bottom - this.pixelViewport.bottom;
        this.pixelViewport = Rb;
        let Zb = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (Zb != this.inView && (this.inView = Zb, Zb && (Bb = !0)), !this.inView && !this.scrollTarget && ! function(bb) {
            let ab = bb.getBoundingClientRect(),
              Ub = bb.ownerDocument.defaultView || window;
            return ab.left < Ub.innerWidth && ab.right > 0 && ab.top < Ub.innerHeight && ab.bottom > 0
          }(bb.dom)) return 0;
        let Db = Yb.width;
        if (this.contentDOMWidth == Db && this.editorHeight == bb.scrollDOM.clientHeight || (this.contentDOMWidth = Yb.width, this.editorHeight = bb.scrollDOM.clientHeight, eb |= 16), Bb) {
          let ab = bb.docView.measureVisibleLineHeights(this.viewport);
          if (Mb.mustRefreshForHeights(ab) && (Eb = !0), Eb || Mb.lineWrapping && Math.abs(Db - this.contentDOMWidth) > Mb.charWidth) {
            let {
              lineHeight: Ub,
              charWidth: Ab,
              textHeight: Yb
            } = bb.docView.measureTextSize();
            Eb = Ub > 0 && Mb.refresh(Tb, Ub, Ab, Yb, Math.max(5, Db / Ab), ab), Eb && (bb.docView.minWidth = 0, eb |= 16)
          }
          kb > 0 && yb > 0 ? vb = Math.max(kb, yb) : kb < 0 && yb < 0 && (vb = Math.min(kb, yb)), qA();
          for (let Ub of this.viewports) {
            let Tb = Ub.from == this.viewport.from ? ab : bb.docView.measureVisibleLineHeights(Ub);
            this.heightMap = (Eb ? tA.empty().applyChanges(this.stateDeco, Ab.G.empty, this.heightOracle, [new eU(0, 0, 0, bb.state.doc.length)]) : this.heightMap).updateHeight(Mb, 0, Eb, new rA(Ub.from, Tb))
          }
          QA && (eb |= 2)
        }
        let zb = !this.viewportIsAppropriate(this.viewport, vb) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return zb && (2 & eb && (eb |= this.updateScaler()), this.viewport = this.getViewport(vb, this.scrollTarget), eb |= this.updateForViewport()), (2 & eb || zb) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(Eb ? [] : this.lineGaps, bb)), eb |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, bb.docView.enforceCursorAssoc()), eb
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(bb, ab) {
        let Ub = .5 - Math.max(-.5, Math.min(.5, bb / 1e3 / 2)),
          Ab = this.heightMap,
          Mb = this.heightOracle,
          {
            visibleTop: Tb,
            visibleBottom: Eb
          } = this,
          Yb = new MM(Ab.lineAt(Tb - 1e3 * Ub, oA.ByHeight, Mb, 0, 0).from, Ab.lineAt(Eb + 1e3 * (1 - Ub), oA.ByHeight, Mb, 0, 0).to);
        if (ab) {
          let {
            head: bb
          } = ab.range;
          if (bb < Yb.from || bb > Yb.to) {
            let Ub, Tb = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              Eb = Ab.lineAt(bb, oA.ByPos, Mb, 0, 0);
            Ub = "center" == ab.y ? (Eb.top + Eb.bottom) / 2 - Tb / 2 : "start" == ab.y || "nearest" == ab.y && bb < Yb.from ? Eb.top : Eb.bottom - Tb, Yb = new MM(Ab.lineAt(Ub - 500, oA.ByHeight, Mb, 0, 0).from, Ab.lineAt(Ub + Tb + 500, oA.ByHeight, Mb, 0, 0).to)
          }
        }
        return Yb
      }
      mapViewport(bb, ab) {
        let Ub = ab.mapPos(bb.from, -1),
          Ab = ab.mapPos(bb.to, 1);
        return new MM(this.heightMap.lineAt(Ub, oA.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(Ab, oA.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(bb) {
        let {
          from: ab,
          to: Ub
        } = bb, Ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: Mb
        } = this.heightMap.lineAt(ab, oA.ByPos, this.heightOracle, 0, 0), {
          bottom: Tb
        } = this.heightMap.lineAt(Ub, oA.ByPos, this.heightOracle, 0, 0), {
          visibleTop: Eb,
          visibleBottom: Yb
        } = this;
        return (0 == ab || Mb <= Eb - Math.max(10, Math.min(-Ab, 250))) && (Ub == this.state.doc.length || Tb >= Yb + Math.max(10, Math.min(Ab, 250))) && Mb > Eb - 2e3 && Tb < Yb + 2e3
      }
      mapLineGaps(bb, ab) {
        if (!bb.length || ab.empty) return bb;
        let Ub = [];
        for (let Ab of bb) ab.touchesRange(Ab.from, Ab.to) || Ub.push(new aM(ab.mapPos(Ab.from), ab.mapPos(Ab.to), Ab.size, Ab.displaySize));
        return Ub
      }
      ensureLineGaps(bb, ab) {
        let Ub = this.heightOracle.lineWrapping,
          Mb = Ub ? 1e4 : 2e3,
          Tb = Mb >> 1,
          Eb = Mb << 1;
        if (this.defaultTextDirection != ea.LTR && !Ub) return [];
        let Yb = [],
          Bb = (Mb, Eb, eb, vb) => {
            if (Eb - Mb < Tb) return;
            let Lb = this.state.selection.main,
              Pb = [Lb.from];
            Lb.empty || Pb.push(Lb.to);
            for (let bb of Pb)
              if (bb > Mb && bb < Eb) return Bb(Mb, bb - 10, eb, vb), void Bb(bb + 10, Eb, eb, vb);
            let Xb = function(bb, ab) {
              for (let Ub of bb)
                if (ab(Ub)) return Ub;
              return
            }(bb, (bb => bb.from >= eb.from && bb.to <= eb.to && Math.abs(bb.from - Mb) < Tb && Math.abs(bb.to - Eb) < Tb && !Pb.some((ab => bb.from < ab && bb.to > ab))));
            if (!Xb) {
              if (Eb < eb.to && ab && Ub && ab.W4.some((bb => bb.from <= Eb && bb.to >= Eb))) {
                let bb = ab.moveToLineBoundary(Ab.m.cursor(Eb), !1, !0).head;
                bb > Mb && (Eb = bb)
              }
              let bb = this.gapSize(eb, Mb, Eb, vb);
              Xb = new aM(Mb, Eb, bb, Ub || bb < 2e6 ? bb : 2e6)
            }
            Yb.push(Xb)
          },
          eb = ab => {
            if (ab.length < Eb || ab.type != db.Text) return;
            let Tb = function(bb, ab, Ub) {
              let Mb = [],
                Tb = bb,
                Eb = 0;
              Ab.y.spans(Ub, bb, ab, {
                span() {},
                point(bb, ab) {
                  bb > Tb && (Mb.push({
                    from: Tb,
                    to: bb
                  }), Eb += bb - Tb), Tb = ab
                }
              }, 20), Tb < ab && (Mb.push({
                from: Tb,
                to: ab
              }), Eb += ab - Tb);
              return {
                total: Eb,
                cj: Mb
              }
            }(ab.from, ab.to, this.stateDeco);
            if (Tb.total < Eb) return;
            let Yb, eb, vb = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (Ub) {
              let bb, Ub, Ab = Mb / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != vb) {
                let Mb = EM(Tb, vb),
                  Eb = ((this.visibleBottom - this.visibleTop) / 2 + Ab) / ab.height;
                bb = Mb - Eb, Ub = Mb + Eb
              } else bb = (this.visibleTop - ab.top - Ab) / ab.height, Ub = (this.visibleBottom - ab.top + Ab) / ab.height;
              Yb = TM(Tb, bb), eb = TM(Tb, Ub)
            } else {
              let Ub = Tb.total * this.heightOracle.charWidth,
                Ab = Mb * this.heightOracle.charWidth,
                Eb = 0;
              if (Ub > 2e6)
                for (let Mb of bb) Mb.from >= ab.from && Mb.from < ab.to && Mb.size != Mb.displaySize && Mb.from * this.heightOracle.charWidth + Eb < this.pixelViewport.left && (Eb = Mb.size - Mb.displaySize);
              let Bb, Lb, Pb = this.pixelViewport.left + Eb,
                Xb = this.pixelViewport.right + Eb;
              if (null != vb) {
                let bb = EM(Tb, vb),
                  ab = ((Xb - Pb) / 2 + Ab) / Ub;
                Bb = bb - ab, Lb = bb + ab
              } else Bb = (Pb - Ab) / Ub, Lb = (Xb + Ab) / Ub;
              Yb = TM(Tb, Bb), eb = TM(Tb, Lb)
            }
            Yb > ab.from && Bb(ab.from, Yb, ab, Tb), eb < ab.to && Bb(eb, ab.to, ab, Tb)
          };
        for (let Ab of this.viewportLines) Array.isArray(Ab.type) ? Ab.type.forEach(eb) : eb(Ab);
        return Yb
      }
      gapSize(bb, ab, Ub, Ab) {
        let Mb = EM(Ab, Ub) - EM(Ab, ab);
        return this.heightOracle.lineWrapping ? bb.height * Mb : Ab.total * this.heightOracle.charWidth * Mb
      }
      updateLineGaps(bb) {
        aM.same(bb, this.lineGaps) || (this.lineGaps = bb, this.lineGapDeco = Fb.set(bb.map((bb => bb.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(bb) {
        let ab = this.stateDeco;
        this.lineGaps.length && (ab = ab.concat(this.lineGapDeco));
        let Ub = [];
        Ab.y.spans(ab, this.viewport.from, this.viewport.to, {
          span(bb, ab) {
            Ub.push({
              from: bb,
              to: ab
            })
          },
          point() {}
        }, 20);
        let Mb = 0;
        if (Ub.length != this.W4.length) Mb = 12;
        else
          for (let Ab = 0; Ab < Ub.length && !(8 & Mb); Ab++) {
            let ab = this.W4[Ab],
              Tb = Ub[Ab];
            ab.from == Tb.from && ab.to == Tb.to || (Mb |= 4, bb && bb.mapPos(ab.from, -1) == Tb.from && bb.mapPos(ab.to, 1) == Tb.to || (Mb |= 8))
          }
        return this.W4 = Ub, Mb
      }
      lineBlockAt(bb) {
        return bb >= this.viewport.from && bb <= this.viewport.to && this.viewportLines.find((ab => ab.from <= bb && ab.to >= bb)) || vM(this.heightMap.lineAt(bb, oA.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(bb) {
        return bb >= this.viewportLines[0].top && bb <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((ab => ab.top <= bb && ab.bottom >= bb)) || vM(this.heightMap.lineAt(this.scaler.fromDOM(bb), oA.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(bb) {
        let ab = this.lineBlockAtHeight(bb + 8);
        return ab.from >= this.viewport.from || this.viewportLines[0].top - bb > 200 ? ab : this.viewportLines[0]
      }
      elementAtHeight(bb) {
        return vM(this.heightMap.blockAt(this.scaler.fromDOM(bb), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class MM {
      constructor(bb, ab) {
        this.from = bb, this.to = ab
      }
    }

    function TM(bb, ab) {
      let {
        total: Ub,
        cj: Ab
      } = bb;
      if (ab <= 0) return Ab[0].from;
      if (ab >= 1) return Ab[Ab.length - 1].to;
      let Mb = Math.floor(Ub * ab);
      for (let Tb = 0;; Tb++) {
        let {
          from: bb,
          to: ab
        } = Ab[Tb], Ub = ab - bb;
        if (Mb <= Ub) return bb + Mb;
        Mb -= Ub
      }
    }

    function EM(bb, ab) {
      let Ub = 0;
      for (let {
          from: Ab,
          to: Mb
        }
        of bb.cj) {
        if (ab <= Mb) {
          Ub += ab - Ab;
          break
        }
        Ub += Mb - Ab
      }
      return Ub / bb.total
    }
    const YM = {
      toDOM: bb => bb,
      fromDOM: bb => bb,
      scale: 1,
      eq(bb) {
        return bb == this
      }
    };

    function BM(bb) {
      let ab = bb.facet(bU).filter((bb => "function" != typeof bb)),
        Ub = bb.facet(UU).filter((bb => "function" != typeof bb));
      return Ub.length && ab.push(Ab.y.join(Ub)), ab
    }
    class eM {
      constructor(bb, ab, Ub) {
        let Ab = 0,
          Mb = 0,
          Tb = 0;
        this.viewports = Ub.map((Ub => {
          let {
            from: Mb,
            to: Tb
          } = Ub, Eb = ab.lineAt(Mb, oA.ByPos, bb, 0, 0).top, Yb = ab.lineAt(Tb, oA.ByPos, bb, 0, 0).bottom;
          return Ab += Yb - Eb, {
            from: Mb,
            to: Tb,
            top: Eb,
            bottom: Yb,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - Ab) / (ab.height - Ab);
        for (let Eb of this.viewports) Eb.domTop = Tb + (Eb.top - Mb) * this.scale, Tb = Eb.domBottom = Eb.domTop + (Eb.bottom - Eb.top), Mb = Eb.bottom
      }
      toDOM(bb) {
        for (let ab = 0, Ub = 0, Ab = 0;; ab++) {
          let Mb = ab < this.viewports.length ? this.viewports[ab] : null;
          if (!Mb || bb < Mb.top) return Ab + (bb - Ub) * this.scale;
          if (bb <= Mb.bottom) return Mb.domTop + (bb - Mb.top);
          Ub = Mb.bottom, Ab = Mb.domBottom
        }
      }
      fromDOM(bb) {
        for (let ab = 0, Ub = 0, Ab = 0;; ab++) {
          let Mb = ab < this.viewports.length ? this.viewports[ab] : null;
          if (!Mb || bb < Mb.domTop) return Ub + (bb - Ab) / this.scale;
          if (bb <= Mb.domBottom) return Mb.top + (bb - Mb.domTop);
          Ub = Mb.bottom, Ab = Mb.domBottom
        }
      }
      eq(bb) {
        return bb instanceof eM && (this.scale == bb.scale && this.viewports.length == bb.viewports.length && this.viewports.every(((ab, Ub) => ab.from == bb.viewports[Ub].from && ab.to == bb.viewports[Ub].to)))
      }
    }

    function vM(bb, ab) {
      if (1 == ab.scale) return bb;
      let Ub = ab.toDOM(bb.top),
        Ab = ab.toDOM(bb.bottom);
      return new KA(bb.from, bb.length, Ub, Ab - Ub, Array.isArray(bb._content) ? bb._content.map((bb => vM(bb, ab))) : bb._content)
    }
    const LM = Ab.q.define({
        combine: bb => bb.join(" ")
      }),
      PM = Ab.q.define({
        combine: bb => bb.indexOf(!0) > -1
      }),
      XM = Mb.d.newName(),
      jM = Mb.d.newName(),
      RM = Mb.d.newName(),
      kM = {
        "&light": "." + jM,
        "&dark": "." + RM
      };

    function yM(bb, ab, Ub) {
      return new Mb.d(ab, {
        finish: ab => /&/.test(ab) ? ab.replace(/&\w*/, (ab => {
          if ("&" == ab) return bb;
          if (!Ub || !Ub[ab]) throw new RangeError(`Unsupported selector: ${ab}`);
          return Ub[ab]
        })) : bb + " " + ab
      })
    }
    const ZM = yM("." + XM, {
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
      }, kM),
      DM = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      zM = fb.ie && fb.ie_version <= 11;
    class xM {
      constructor(bb) {
        this.view = bb, this.active = !1, this.editContext = null, this.selectionRange = new Sb, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = bb.contentDOM, this.observer = new MutationObserver((ab => {
          for (let bb of ab) this.queue.push(bb);
          (fb.ie && fb.ie_version <= 11 || fb.ios && bb.composing) && ab.some((bb => "childList" == bb.type && bb.removedNodes.length || "characterData" == bb.type && bb.oldValue.length > bb.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !fb.android || !1 === bb.constructor.EDIT_CONTEXT || fb.chrome && fb.chrome_version < 126 || (this.editContext = new mM(bb), bb.state.facet(Ca) && (bb.contentDOM.editContext = this.editContext.editContext)), zM && (this.onCharData = bb => {
          this.queue.push({
            target: bb.target,
            type: "characterData",
            oldValue: bb.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.bZ = this.bZ.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var bb;
          (null === (bb = this.view.docView) || void 0 === bb ? void 0 : bb.lastUpdate) < Date.now() - 75 && this.bZ()
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
      bZ() {
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
        if (this.gapIntersection && (bb.length != this.gaps.length || this.gaps.some(((ab, Ub) => ab != bb[Ub])))) {
          this.gapIntersection.disconnect();
          for (let ab of bb) this.gapIntersection.observe(ab);
          this.gaps = bb
        }
      }
      onSelectionChange(bb) {
        let ab = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: Ub
        } = this, Ab = this.selectionRange;
        if (Ub.state.facet(Ca) ? Ub.root.activeElement != this.dom : !lb(this.dom, Ab)) return;
        let Mb = Ab.anchorNode && Ub.docView.tile.nearest(Ab.anchorNode);
        Mb && Mb.isWidget() && Mb.widget.ignoreEvent(bb) ? ab || (this.selectionChanged = !1) : (fb.ie && fb.ie_version <= 11 || fb.android && fb.chrome) && !Ub.state.selection.main.empty && Ab.focusNode && wb(Ab.focusNode, Ab.focusOffset, Ab.anchorNode, Ab.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: bb
        } = this, ab = Kb(bb.root);
        if (!ab) return !1;
        let Ub = fb.safari && 11 == bb.root.nodeType && bb.root.activeElement == this.dom && function(bb, ab) {
          if (ab.getComposedRanges) {
            let Ub = ab.getComposedRanges(bb.root)[0];
            if (Ub) return fM(bb, Ub)
          }
          let Ub = null;

          function Ab(bb) {
            bb.preventDefault(), bb.stopImmediatePropagation(), Ub = bb.getTargetRanges()[0]
          }
          return bb.contentDOM.addEventListener("beforeinput", Ab, !0), bb.dom.ownerDocument.execCommand("indent"), bb.contentDOM.removeEventListener("beforeinput", Ab, !0), Ub ? fM(bb, Ub) : null
        }(this.view, ab) || ab;
        if (!Ub || this.selectionRange.eq(Ub)) return !1;
        let Ab = lb(this.dom, Ub);
        return Ab && !this.selectionChanged && bb.inputState.lastFocusTime > Date.now() - 200 && bb.inputState.lastTouchTime < Date.now() - 300 && function(bb, ab) {
          let Ub = ab.focusNode,
            Ab = ab.focusOffset;
          if (!Ub || ab.anchorNode != Ub || ab.anchorOffset != Ab) return !1;
          for (Ab = Math.min(Ab, Vb(Ub));;)
            if (Ab) {
              if (1 != Ub.nodeType) return !1;
              let bb = Ub.childNodes[Ab - 1];
              "false" == bb.contentEditable ? Ab-- : (Ub = bb, Ab = Vb(Ub))
            } else {
              if (Ub == bb) return !0;
              Ab = sb(Ub), Ub = Ub.parentNode
            }
        }(this.dom, Ub) ? (this.view.inputState.lastFocusTime = 0, bb.docView.updateSelection(), !1) : (this.selectionRange.setRange(Ub), Ab && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(bb, ab) {
        this.selectionRange.set(bb.node, bb.offset, ab.node, ab.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let bb = 0,
          ab = null;
        for (let Ub = this.dom; Ub;)
          if (1 == Ub.nodeType) !ab && bb < this.scrollTargets.length && this.scrollTargets[bb] == Ub ? bb++ : ab || (ab = this.scrollTargets.slice(0, bb)), ab && ab.push(Ub), Ub = Ub.assignedSlot || Ub.parentNode;
          else {
            if (11 != Ub.nodeType) break;
            Ub = Ub.host
          } if (bb < this.scrollTargets.length && !ab && (ab = this.scrollTargets.slice(0, bb)), ab) {
          for (let bb of this.scrollTargets) bb.removeEventListener("scroll", this.onScroll);
          for (let bb of this.scrollTargets = ab) bb.addEventListener("scroll", this.onScroll)
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
        this.active || (this.observer.observe(this.dom, DM), zM && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), zM && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(bb, ab) {
        var Ub;
        if (!this.delayedAndroidKey) {
          let bb = () => {
            let bb = this.delayedAndroidKey;
            if (bb) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = bb.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && bb.force && Ma(this.dom, bb.key, bb.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(bb)
        }
        this.delayedAndroidKey && "Enter" != bb || (this.delayedAndroidKey = {
          key: bb,
          keyCode: ab,
          force: this.lastChange < Date.now() - 50 || !!(null === (Ub = this.delayedAndroidKey) || void 0 === Ub ? void 0 : Ub.force)
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
        let ab = -1,
          Ub = -1,
          Ab = !1;
        for (let Mb of bb) {
          let bb = this.readMutation(Mb);
          bb && (bb.typeOver && (Ab = !0), -1 == ab ? ({
            from: ab,
            to: Ub
          } = bb) : (ab = Math.min(bb.from, ab), Ub = Math.max(bb.to, Ub)))
        }
        return {
          from: ab,
          to: Ub,
          typeOver: Ab
        }
      }
      readChange() {
        let {
          from: bb,
          to: ab,
          typeOver: Ub
        } = this.processRecords(), Ab = this.selectionChanged && lb(this.dom, this.selectionRange);
        if (bb < 0 && !Ab) return null;
        bb > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let Mb = new UA(this.view, bb, ab, Ub);
        return this.view.docView.domChanged = {
          newSel: Mb.newSel ? Mb.newSel.main : null
        }, Mb
      }
      flush() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        bb && this.readSelectionRange();
        let ab = this.readChange();
        if (!ab) return this.view.requestMeasure(), !1;
        let Ub = this.view.state,
          Ab = MA(this.view, ab);
        return this.view.state == Ub && (ab.domChanged || ab.newSel && !YA(this.view.state.selection, ab.newSel.main)) && this.view.update([]), Ab
      }
      readMutation(bb) {
        let ab = this.view.docView.tile.nearest(bb.target);
        if (!ab || ab.isWidget()) return null;
        if (ab.markDirty("attributes" == bb.type), "childList" == bb.type) {
          let Ub = iM(ab, bb.previousSibling || bb.target.previousSibling, -1),
            Ab = iM(ab, bb.nextSibling || bb.target.nextSibling, 1);
          return {
            from: Ub ? ab.posAfter(Ub) : ab.posAtStart,
            to: Ab ? ab.posBefore(Ab) : ab.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == bb.type ? {
          from: ab.posAtStart,
          to: ab.posAtEnd,
          typeOver: bb.target.nodeValue == bb.oldValue
        } : null
      }
      setWindow(bb) {
        bb != this.win && (this.removeWindowListeners(this.win), this.win = bb, this.addWindowListeners(this.win))
      }
      addWindowListeners(bb) {
        bb.addEventListener("resize", this.bZ), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : bb.addEventListener("beforeprint", this.onPrint), bb.addEventListener("scroll", this.onScroll), bb.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(bb) {
        bb.removeEventListener("scroll", this.onScroll), bb.removeEventListener("resize", this.bZ), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : bb.removeEventListener("beforeprint", this.onPrint), bb.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(bb) {
        this.editContext && (this.editContext.update(bb), bb.startState.facet(Ca) != bb.state.facet(Ca) && (bb.view.contentDOM.editContext = bb.state.facet(Ca) ? this.editContext.editContext : null))
      }
      destroy() {
        var bb, ab, Ub;
        this.stop(), null === (bb = this.intersection) || void 0 === bb || bb.disconnect(), null === (ab = this.gapIntersection) || void 0 === ab || ab.disconnect(), null === (Ub = this.resizeScroll) || void 0 === Ub || Ub.disconnect();
        for (let Ab of this.scrollTargets) Ab.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function iM(bb, ab, Ub) {
      for (; ab;) {
        let Ab = PU.get(ab);
        if (Ab && Ab.parent == bb) return Ab;
        let Mb = ab.parentNode;
        ab = Mb != bb.dom ? Mb : Ub > 0 ? ab.nextSibling : ab.previousSibling
      }
      return null
    }

    function fM(bb, ab) {
      let Ub = ab.startContainer,
        Ab = ab.startOffset,
        Mb = ab.endContainer,
        Tb = ab.endOffset,
        Eb = bb.docView.domAtPos(bb.state.selection.main.anchor, 1);
      return wb(Eb.node, Eb.offset, Mb, Tb) && ([Ub, Ab, Mb, Tb] = [Mb, Tb, Ub, Ab]), {
        anchorNode: Ub,
        anchorOffset: Ab,
        focusNode: Mb,
        focusOffset: Tb
      }
    }
    class mM {
      constructor(bb) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(bb.state);
        let ab = this.editContext = new window.EditContext({
          text: bb.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, bb.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(bb.state.selection.main.head)
        });
        this.handlers.textupdate = Ub => {
          let Mb = bb.state.selection.main,
            {
              anchor: Tb,
              head: Eb
            } = Mb,
            Yb = this.toEditorPos(Ub.updateRangeStart),
            Bb = this.toEditorPos(Ub.updateRangeEnd);
          bb.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: Ub.updateRangeStart,
            editorBase: Yb,
            drifted: !1
          });
          let eb = Bb - Yb > Ub.text.length;
          Yb == this.from && Tb < this.from ? Yb = Tb : Bb == this.to && Tb > this.to && (Bb = Tb);
          let vb = EA(bb.state.sliceDoc(Yb, Bb), Ub.text, (eb ? Mb.from : Mb.to) - Yb, eb ? "end" : null);
          if (!vb) {
            let ab = Ab.m.single(this.toEditorPos(Ub.selectionStart), this.toEditorPos(Ub.selectionEnd));
            return void(YA(ab, Mb) || bb.dispatch({
              selection: ab,
              userEvent: "select"
            }))
          }
          let Lb = {
            from: vb.from + Yb,
            to: vb.toA + Yb,
            insert: Ab.G.of(Ub.text.slice(vb.from, vb.toB).split("\n"))
          };
          if ((fb.mac || fb.android) && Lb.from == Eb - 1 && /^\. ?$/.test(Ub.text) && "off" == bb.contentDOM.getAttribute("autocorrect") && (Lb = {
              from: Yb,
              to: Bb,
              insert: Ab.G.of([Ub.text.replace(".", " ")])
            }), this.pendingContextChange = Lb, !bb.state.readOnly) {
            let ab = this.to - this.from + (Lb.to - Lb.from + Lb.insert.length);
            TA(bb, Lb, Ab.m.single(this.toEditorPos(Ub.selectionStart, ab), this.toEditorPos(Ub.selectionEnd, ab)))
          }
          this.pendingContextChange && (this.revertPending(bb.state), this.setSelection(bb.state)), Lb.from < Lb.to && !Lb.insert.length && bb.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(ab.text.slice(Math.max(0, Ub.updateRangeStart - 1), Math.min(ab.text.length, Ub.updateRangeStart + 1))) && this.handlers.compositionend(Ub)
        }, this.handlers.characterboundsupdate = Ub => {
          let Ab = [],
            Mb = null;
          for (let ab = this.toEditorPos(Ub.rangeStart), Tb = this.toEditorPos(Ub.rangeEnd); ab < Tb; ab++) {
            let Ub = bb.coordsForChar(ab);
            Mb = Ub && new DOMRect(Ub.left, Ub.top, Ub.right - Ub.left, Ub.bottom - Ub.top) || Mb || new DOMRect, Ab.push(Mb)
          }
          ab.updateCharacterBounds(Ub.rangeStart, Ab)
        }, this.handlers.textformatupdate = ab => {
          let Ub = [];
          for (let bb of ab.getTextFormats()) {
            let ab = bb.underlineStyle,
              Ab = bb.underlineThickness;
            if (!/none/i.test(ab) && !/none/i.test(Ab)) {
              let Mb = this.toEditorPos(bb.rangeStart),
                Tb = this.toEditorPos(bb.rangeEnd);
              if (Mb < Tb) {
                let bb = `text-decoration: underline ${/^[a-z]/.test(ab)?ab+" ":"Dashed"==ab?"dashed ":"Squiggle"==ab?"wavy ":""}${/thin/i.test(Ab)?1:2}px`;
                Ub.push(Fb.mark({
                  attributes: {
                    style: bb
                  }
                }).range(Mb, Tb))
              }
            }
          }
          bb.dispatch({
            effects: sa.of(Fb.set(Ub))
          })
        }, this.handlers.compositionstart = () => {
          bb.inputState.composing < 0 && (bb.inputState.composing = 0, bb.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (bb.inputState.composing = -1, bb.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: ab
            } = this.composing;
            this.composing = null, ab && this.reset(bb.state)
          }
        };
        for (let Ub in this.handlers) ab.addEventListener(Ub, this.handlers[Ub]);
        this.measureReq = {
          read: bb => {
            this.editContext.updateControlBounds(bb.contentDOM.getBoundingClientRect());
            let ab = Kb(bb.root);
            ab && ab.rangeCount && this.editContext.updateSelectionBounds(ab.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(bb) {
        let ab = 0,
          Ub = !1,
          Ab = this.pendingContextChange;
        return bb.changes.iterChanges(((Mb, Tb, Eb, Yb, Bb) => {
          if (Ub) return;
          let eb = Bb.length - (Tb - Mb);
          if (Ab && Tb >= Ab.to) {
            if (Ab.from == Mb && Ab.to == Tb && Ab.insert.eq(Bb)) return Ab = this.pendingContextChange = null, ab += eb, void(this.to += eb);
            Ab = null, this.revertPending(bb.state)
          }
          if (Mb += ab, (Tb += ab) <= this.from) this.from += eb, this.to += eb;
          else if (Mb < this.to) {
            if (Mb < this.from || Tb > this.to || this.to - this.from + Bb.length > 3e4) return void(Ub = !0);
            this.editContext.updateText(this.toContextPos(Mb), this.toContextPos(Tb), Bb.toString()), this.to += eb
          }
          ab += eb
        })), Ab && !Ub && this.revertPending(bb.state), !Ub
      }
      update(bb) {
        let ab = this.pendingContextChange,
          Ub = bb.startState.selection.main;
        this.composing && (this.composing.drifted || !bb.changes.touchesRange(Ub.from, Ub.to) && bb.transactions.some((bb => !bb.isUserEvent("input.type") && bb.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = bb.changes.mapPos(this.composing.editorBase)) : this.applyEdits(bb) && this.rangeIsValid(bb.state) ? (bb.docChanged || bb.selectionSet || ab) && this.setSelection(bb.state) : (this.pendingContextChange = null, this.reset(bb.state)), (bb.geometryChanged || bb.docChanged || bb.selectionSet) && bb.view.requestMeasure(this.measureReq)
      }
      resetRange(bb) {
        let {
          head: ab
        } = bb.selection.main;
        this.from = Math.max(0, ab - 1e4), this.to = Math.min(bb.doc.length, ab + 1e4)
      }
      reset(bb) {
        this.resetRange(bb), this.editContext.updateText(0, this.editContext.text.length, bb.doc.sliceString(this.from, this.to)), this.setSelection(bb)
      }
      revertPending(bb) {
        let ab = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(ab.from), this.toContextPos(ab.from + ab.insert.length), bb.doc.sliceString(ab.from, ab.to))
      }
      setSelection(bb) {
        let {
          main: ab
        } = bb.selection, Ub = this.toContextPos(Math.max(this.from, Math.min(this.to, ab.anchor))), Ab = this.toContextPos(ab.head);
        this.editContext.selectionStart == Ub && this.editContext.selectionEnd == Ab || this.editContext.updateSelection(Ub, Ab)
      }
      rangeIsValid(bb) {
        let {
          head: ab
        } = bb.selection.main;
        return !(this.from > 0 && ab - this.from < 500 || this.to < bb.doc.length && this.to - ab < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        bb = Math.min(bb, ab);
        let Ub = this.composing;
        return Ub && Ub.drifted ? Ub.editorBase + (bb - Ub.contextBase) : bb + this.from
      }
      toContextPos(bb) {
        let ab = this.composing;
        return ab && ab.drifted ? ab.contextBase + (bb - ab.editorBase) : bb - this.from
      }
      destroy() {
        for (let bb in this.handlers) this.editContext.removeEventListener(bb, this.handlers[bb])
      }
    }
    class pM {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get W4() {
        return this.viewState.W4
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
        var ab;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), bb.parent && bb.parent.appendChild(this.dom);
        let {
          dispatch: Ub
        } = bb;
        this.dispatchTransactions = bb.dispatchTransactions || Ub && (bb => bb.forEach((bb => Ub(bb, this)))) || (bb => this.update(bb)), this.dispatch = this.dispatch.bind(this), this._root = bb.root || function(bb) {
          for (; bb;) {
            if (bb && (9 == bb.nodeType || 11 == bb.nodeType && bb.host)) return bb;
            bb = bb.assignedSlot || bb.parentNode
          }
          return null
        }(bb.parent) || document, this.viewState = new AM(this, bb.state || Ab.p.create(bb)), bb.scrollTo && bb.scrollTo.is(wa) && (this.viewState.scrollTarget = bb.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(Oa).map((bb => new Ja(bb)));
        for (let Ab of this.plugins) Ab.update(this);
        this.observer = new xM(this), this.inputState = new BA(this), this.inputState.ensureHandlers(this.plugins), this.docView = new qU(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (ab = document.fonts) || void 0 === ab ? void 0 : ab.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var bb = arguments.length, ab = new Array(bb), Ub = 0; Ub < bb; Ub++) ab[Ub] = arguments[Ub];
        let Mb = 1 == ab.length && ab[0] instanceof Ab.I ? ab : 1 == ab.length && Array.isArray(ab[0]) ? ab[0] : [this.state.update(...ab)];
        this.dispatchTransactions(Mb, this)
      }
      update(bb) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let ab, Ub = !1,
          Mb = !1,
          Tb = this.state;
        for (let Ab of bb) {
          if (Ab.startState != Tb) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          Tb = Ab.state
        }
        if (this.destroyed) return void(this.viewState.state = Tb);
        let Eb = this.hasFocus,
          Yb = 0,
          Bb = null;
        bb.some((bb => bb.annotation(IA))) ? (this.inputState.notifiedFocused = Eb, Yb = 1) : Eb != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = Eb, Bb = dA(Tb, Eb), Bb || (Yb = 1));
        let eb = this.observer.delayedAndroidKey,
          vb = null;
        if (eb ? (this.observer.clearDelayedAndroidKey(), vb = this.observer.readChange(), (vb && !this.state.doc.eq(Tb.doc) || !this.state.selection.eq(Tb.selection)) && (vb = null)) : this.observer.clear(), Tb.facet(Ab.p.phrases) != this.state.facet(Ab.p.phrases)) return this.setState(Tb);
        ab = vU.create(this, Tb, bb), ab.flags |= Yb;
        let Lb = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let ab of bb) {
            if (Lb && (Lb = Lb.map(ab.changes)), ab.scrollIntoView) {
              let {
                main: bb
              } = ab.state.selection, {
                x: Ub,
                y: Mb
              } = this.state.facet(pM.cursorScrollMargin);
              Lb = new ta(bb.empty ? bb : Ab.m.cursor(bb.head, bb.head > bb.anchor ? -1 : 1), "nearest", "nearest", Mb, Ub)
            }
            for (let bb of ab.effects) bb.is(wa) && (Lb = bb.value.clip(this.state))
          }
          this.viewState.update(ab, Lb), this.bidiCache = HM.update(this.bidiCache, ab.changes), ab.empty || (this.updatePlugins(ab), this.inputState.update(ab)), Ub = this.docView.update(ab), this.state.facet(BU) != this.styleModules && this.mountStyles(), Mb = this.updateAttrs(), this.showAnnouncements(bb), this.docView.updateSelection(Ub, bb.some((bb => bb.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (ab.startState.facet(LM) != ab.state.facet(LM) && (this.viewState.mustMeasureContent = !0), (Ub || Mb || Lb || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), Ub && this.docViewUpdate(), !ab.empty)
          for (let Ab of this.state.facet(Ga)) try {
            Ab(ab)
          } catch (Pb) {
            ga(this.state, Pb, "update listener")
          }(Bb || vb) && Promise.resolve().then((() => {
            Bb && this.state == Bb.startState && this.dispatch(Bb), vb && !MA(this, vb) && eb.force && Ma(this.contentDOM, eb.key, eb.keyCode)
          }))
      }
      setState(bb) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = bb);
        this.updateState = 2;
        let ab = this.hasFocus;
        try {
          for (let bb of this.plugins) bb.destroy(this);
          this.viewState = new AM(this, bb), this.plugins = bb.facet(Oa).map((bb => new Ja(bb))), this.pluginMap.clear();
          for (let bb of this.plugins) bb.update(this);
          this.docView.destroy(), this.docView = new qU(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        ab && this.focus(), this.requestMeasure()
      }
      updatePlugins(bb) {
        let ab = bb.startState.facet(Oa),
          Ub = bb.state.facet(Oa);
        if (ab != Ub) {
          let Ab = [];
          for (let Mb of Ub) {
            let Ub = ab.indexOf(Mb);
            if (Ub < 0) Ab.push(new Ja(Mb));
            else {
              let ab = this.plugins[Ub];
              ab.mustUpdate = bb, Ab.push(ab)
            }
          }
          for (let ab of this.plugins) ab.mustUpdate != bb && ab.destroy(this);
          this.plugins = Ab, this.pluginMap.clear()
        } else
          for (let Ab of this.plugins) Ab.mustUpdate = bb;
        for (let Ab = 0; Ab < this.plugins.length; Ab++) this.plugins[Ab].update(this);
        ab != Ub && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let ab of this.plugins) {
          let Ub = ab.value;
          if (Ub && Ub.docViewUpdate) try {
            Ub.docViewUpdate(this)
          } catch (bb) {
            ga(this.state, bb, "doc view update listener")
          }
        }
      }
      measure() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, bb && this.observer.forceFlush();
        let ab = null,
          Ub = this.viewState.scrollParent,
          Ab = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: Mb,
            scrollAnchorHeight: Tb
          } = this.viewState;
        Math.abs(Ab - this.viewState.scrollOffset) > 1 && (Tb = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let bb = 0;; bb++) {
            if (Tb < 0)
              if (Ta(Ub || this.win)) Mb = -1, Tb = this.viewState.heightMap.height;
              else {
                let bb = this.viewState.scrollAnchorAt(Ab);
                Mb = bb.from, Tb = bb.top
              } this.updateState = 1;
            let Yb = this.viewState.measure();
            if (!Yb && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (bb > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let Bb = [];
            4 & Yb || ([this.measureRequests, Bb] = [Bb, this.measureRequests]);
            let eb = Bb.map((bb => {
                try {
                  return bb.read(this)
                } catch (ab) {
                  return ga(this.state, ab), WM
                }
              })),
              vb = vU.create(this, this.state, []),
              Lb = !1;
            vb.flags |= Yb, ab ? ab.flags |= Yb : ab = vb, this.updateState = 2, vb.empty || (this.updatePlugins(vb), this.inputState.update(vb), this.updateAttrs(), Lb = this.docView.update(vb), Lb && this.docViewUpdate());
            for (let bb = 0; bb < Bb.length; bb++)
              if (eb[bb] != WM) try {
                let ab = Bb[bb];
                ab.write && ab.write(eb[bb], this)
              } catch (Eb) {
                ga(this.state, Eb)
              }
            if (Lb && this.docView.updateSelection(!0), !vb.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, Tb = -1;
                  continue
                } {
                  let bb = ((Mb < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(Mb).top) - Tb) / this.scaleY;
                  if ((bb > 1 || bb < -1) && (Ub == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    Ab += bb, Ub ? Ub.scrollTop += bb : this.win.scrollBy(0, bb), Tb = -1;
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
        if (ab && !ab.empty)
          for (let Yb of this.state.facet(Ga)) Yb(ab)
      }
      get themeClasses() {
        return XM + " " + (this.state.facet(PM) ? RM : jM) + " " + this.state.facet(LM)
      }
      updateAttrs() {
        let bb = IM(this, na, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          ab = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(Ca) ? "true" : "false",
            class: "cm-content",
            style: `${fb.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (ab["aria-readonly"] = "true"), IM(this, Sa, ab);
        let Ub = this.observer.ignore((() => {
          let Ub = Wb(this.contentDOM, this.contentAttrs, ab),
            Ab = Wb(this.dom, this.editorAttrs, bb);
          return Ub || Ab
        }));
        return this.editorAttrs = bb, this.contentAttrs = ab, Ub
      }
      showAnnouncements(bb) {
        let ab = !0;
        for (let Ub of bb)
          for (let bb of Ub.effects)
            if (bb.is(pM.announce)) {
              ab && (this.announceDOM.textContent = ""), ab = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = bb.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(BU);
        let bb = this.state.facet(pM.cspNonce);
        Mb.d.mount(this.root, this.styleModules.concat(ZM).reverse(), bb ? {
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
            for (let ab = 0; ab < this.measureRequests.length; ab++)
              if (this.measureRequests[ab].key === bb.key) return void(this.measureRequests[ab] = bb);
          this.measureRequests.push(bb)
        }
      }
      plugin(bb) {
        let ab = this.pluginMap.get(bb);
        return (void 0 === ab || ab && ab.plugin != bb) && this.pluginMap.set(bb, ab = this.plugins.find((ab => ab.plugin == bb)) || null), ab && ab.update(this).value
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
      moveByChar(bb, ab, Ub) {
        return CU(this, bb, wU(this, bb, ab, Ub))
      }
      moveByGroup(bb, ab) {
        return CU(this, bb, wU(this, bb, ab, (ab => function(bb, ab, Ub) {
          let Mb = bb.state.charCategorizer(ab),
            Tb = Mb(Ub);
          return bb => {
            let ab = Mb(bb);
            return Tb == Ab.i.Space && (Tb = ab), Tb == ab
          }
        }(this, bb.head, ab))))
      }
      visualLineSide(bb, ab) {
        let Ub = this.bidiSpans(bb),
          Mb = this.textDirectionAt(bb.from),
          Tb = Ub[ab ? Ub.length - 1 : 0];
        return Ab.m.cursor(Tb.side(ab, Mb) + bb.from, Tb.forward(!ab, Mb) ? 1 : -1)
      }
      moveToLineBoundary(bb, ab) {
        return function(bb, ab, Ub, Mb) {
          let Tb = tU(bb, ab.head, ab.assoc || -1),
            Eb = Mb && Tb.type == db.Text && (bb.lineWrapping || Tb.widgetLineBreaks) ? bb.coordsAtPos(ab.assoc < 0 && ab.head > Tb.from ? ab.head - 1 : ab.head) : null;
          if (Eb) {
            let ab = bb.dom.getBoundingClientRect(),
              Mb = bb.textDirectionAt(Tb.from),
              Yb = bb.posAtCoords({
                x: Ub == (Mb == ea.LTR) ? ab.right - 1 : ab.left + 1,
                y: (Eb.top + Eb.bottom) / 2
              });
            if (null != Yb) return Ab.m.cursor(Yb, Ub ? -1 : 1)
          }
          return Ab.m.cursor(Ub ? Tb.to : Tb.from, Ub ? -1 : 1)
        }(this, bb, ab, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(bb, ab, Ub) {
        return CU(this, bb, function(bb, ab, Ub, Mb) {
          let Tb = ab.head,
            Eb = Ub ? 1 : -1;
          if (Tb == (Ub ? bb.state.doc.length : 0)) return Ab.m.cursor(Tb, ab.assoc);
          let Yb, Bb = ab.goalColumn,
            eb = bb.contentDOM.getBoundingClientRect(),
            vb = bb.coordsAtPos(Tb, ab.assoc || ((ab.empty ? Ub : ab.head == ab.from) ? 1 : -1)),
            Lb = bb.documentTop;
          if (vb) null == Bb && (Bb = vb.left - eb.left), Yb = Eb < 0 ? vb.top : vb.bottom;
          else {
            let ab = bb.viewState.lineBlockAt(Tb);
            null == Bb && (Bb = Math.min(eb.right - eb.left, bb.defaultCharacterWidth * (Tb - ab.from))), Yb = (Eb < 0 ? ab.top : ab.bottom) + Lb
          }
          let Pb = eb.left + Bb,
            Xb = bb.viewState.heightOracle.textHeight >> 1,
            jb = null !== Mb && void 0 !== Mb ? Mb : Xb;
          for (let Rb = 0;; Rb += Xb) {
            let ab = Yb + (jb + Rb) * Eb,
              Mb = OU(bb, {
                x: Pb,
                y: ab
              }, !1, Eb);
            if (Ub ? ab > eb.bottom : ab < eb.top) return Ab.m.cursor(Mb.pos, Mb.assoc);
            let Tb = bb.coordsAtPos(Mb.pos, Mb.assoc),
              vb = Tb ? (Tb.top + Tb.bottom) / 2 : 0;
            if (!Tb || (Ub ? vb > Yb : vb < Yb)) return Ab.m.cursor(Mb.pos, Mb.assoc, void 0, Bb)
          }
        }(this, bb, ab, Ub))
      }
      domAtPos(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(bb, ab)
      }
      posAtDOM(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(bb, ab)
      }
      posAtCoords(bb) {
        let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let Ub = OU(this, bb, ab);
        return Ub && Ub.pos
      }
      posAndSideAtCoords(bb) {
        let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), OU(this, bb, ab)
      }
      coordsAtPos(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let Ub = this.docView.coordsAt(bb, ab);
        if (!Ub || Ub.left == Ub.right) return Ub;
        let Ab = this.state.doc.lineAt(bb),
          Mb = this.bidiSpans(Ab);
        return Ob(Ub, Mb[Da.find(Mb, bb - Ab.from, -1, ab)].dir == ea.LTR == ab > 0)
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
        return !this.state.facet(Ka) || bb < this.viewport.from || bb > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(bb))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(bb) {
        if (bb.length > NM) return pa(bb.length);
        let ab, Ub = this.textDirectionAt(bb.from);
        for (let Mb of this.bidiCache)
          if (Mb.from == bb.from && Mb.dir == Ub && (Mb.fresh || za(Mb.isolates, ab = TU(this, bb)))) return Mb.order;
        ab || (ab = TU(this, bb));
        let Ab = ma(bb.text, Ub, ab);
        return this.bidiCache.push(new HM(bb.from, bb.to, Ub, ab, !0, Ab)), Ab
      }
      get hasFocus() {
        var bb;
        return (this.dom.ownerDocument.hasFocus() || fb.safari && (null === (bb = this.inputState) || void 0 === bb ? void 0 : bb.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          Ua(this.contentDOM), this.docView.updateSelection()
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
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var Ub, Mb, Tb, Eb;
        return wa.of(new ta("number" == typeof bb ? Ab.m.cursor(bb) : bb, null !== (Ub = ab.y) && void 0 !== Ub ? Ub : "nearest", null !== (Mb = ab.x) && void 0 !== Mb ? Mb : "nearest", null !== (Tb = ab.yMargin) && void 0 !== Tb ? Tb : 5, null !== (Eb = ab.xMargin) && void 0 !== Eb ? Eb : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: bb,
          scrollLeft: ab
        } = this.scrollDOM, Ub = this.viewState.scrollAnchorAt(bb);
        return wa.of(new ta(Ab.m.cursor(Ub.from), "start", "start", Ub.top - bb, ab, !0))
      }
      setTabFocusMode(bb) {
        null == bb ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof bb ? this.inputState.tabFocusMode = bb ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + bb)
      }
      static domEventHandlers(bb) {
        return ca.define((() => ({})), {
          eventHandlers: bb
        })
      }
      static domEventObservers(bb) {
        return ca.define((() => ({})), {
          eventObservers: bb
        })
      }
      static theme(bb, ab) {
        let Ub = Mb.d.newName(),
          Ab = [LM.of(Ub), BU.of(yM(`.${Ub}`, bb))];
        return ab && ab.dark && Ab.push(PM.of(!0)), Ab
      }
      static baseTheme(bb) {
        return Ab.u.lowest(BU.of(yM("." + XM, bb, kM)))
      }
      static findFromDOM(bb) {
        var ab;
        let Ub = bb.querySelector(".cm-content"),
          Ab = Ub && PU.get(Ub) || PU.get(bb);
        return (null === (ab = null === Ab || void 0 === Ab ? void 0 : Ab.root) || void 0 === ab ? void 0 : ab.view) || null
      }
    }
    pM.styleModule = BU, pM.inputHandler = Qa, pM.clipboardInputFilter = ua, pM.clipboardOutputFilter = ra, pM.scrollHandler = la, pM.focusChangeEffect = qa, pM.perLineTextDirection = Ka, pM.exceptionSink = ha, pM.updateListener = Ga, pM.editable = Ca, pM.mouseSelectionStyle = Fa, pM.dragMovesSelection = da, pM.clickAddsSelectionRange = Ia, pM.hA = bU, pM.blockWrappers = aU, pM.outerDecorations = UU, pM.atomicRanges = AU, pM.bidiIsolatedRanges = MU, pM.cursorScrollMargin = Ab.q.define({
      combine: bb => {
        let ab = 5,
          Ub = 5;
        for (let Ab of bb) "number" == typeof Ab ? ab = Ub = Ab : ({
          x: ab,
          y: Ub
        } = Ab);
        return {
          x: ab,
          y: Ub
        }
      }
    }), pM.scrollMargins = EU, pM.darkTheme = PM, pM.cspNonce = Ab.q.define({
      combine: bb => bb.length ? bb[0] : ""
    }), pM.contentAttributes = Sa, pM.editorAttributes = na, pM.lineWrapping = pM.contentAttributes.of({
      class: "cm-lineWrapping"
    }), pM.announce = Ab.B.define();
    const NM = 4096,
      WM = {};
    class HM {
      constructor(bb, ab, Ub, Ab, Mb, Tb) {
        this.from = bb, this.to = ab, this.dir = Ub, this.isolates = Ab, this.fresh = Mb, this.order = Tb
      }
      static update(bb, ab) {
        if (ab.empty && !bb.some((bb => bb.fresh))) return bb;
        let Ub = [],
          Ab = bb.length ? bb[bb.length - 1].dir : ea.LTR;
        for (let Mb = Math.max(0, bb.length - 10); Mb < bb.length; Mb++) {
          let Tb = bb[Mb];
          Tb.dir != Ab || ab.touchesRange(Tb.from, Tb.to) || Ub.push(new HM(ab.mapPos(Tb.from, 1), ab.mapPos(Tb.to, -1), Tb.dir, Tb.isolates, !1, Tb.order))
        }
        return Ub
      }
    }

    function IM(bb, ab, Ub) {
      for (let Ab = bb.state.facet(ab), Mb = Ab.length - 1; Mb >= 0; Mb--) {
        let ab = Ab[Mb],
          Tb = "function" == typeof ab ? ab(bb) : ab;
        Tb && mb(Tb, Ub)
      }
      return Ub
    }
    const dM = fb.mac ? "mac" : fb.windows ? "win" : fb.linux ? "linux" : "key";

    function FM(bb, ab, Ub) {
      return ab.altKey && (bb = "Alt-" + bb), ab.ctrlKey && (bb = "Ctrl-" + bb), ab.metaKey && (bb = "Meta-" + bb), !1 !== Ub && ab.shiftKey && (bb = "Shift-" + bb), bb
    }
    const hM = Ab.u.default(pM.domEventHandlers({
        keydown: (bb, ab) => lM(qM(ab.state), bb, ab, "editor")
      })),
      GM = Ab.q.define({
        enables: hM
      }),
      QM = new WeakMap;

    function qM(bb) {
      let ab = bb.facet(GM),
        Ub = QM.get(ab);
      return Ub || QM.set(ab, Ub = function(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dM,
          Ub = Object.create(null),
          Ab = Object.create(null),
          Mb = (bb, ab) => {
            let Ub = Ab[bb];
            if (null == Ub) Ab[bb] = ab;
            else if (Ub != ab) throw new Error("Key binding " + bb + " is used both as a regular binding and as a multi-stroke prefix")
          },
          Tb = (bb, Ab, Tb, Eb, Yb) => {
            var Bb, eb;
            let vb = Ub[bb] || (Ub[bb] = Object.create(null)),
              Lb = Ab.split(/ (?!$)/).map((bb => function(bb, ab) {
                const Ub = bb.split(/-(?!$)/);
                let Ab, Mb, Tb, Eb, Yb = Ub[Ub.length - 1];
                "Space" == Yb && (Yb = " ");
                for (let Bb = 0; Bb < Ub.length - 1; ++Bb) {
                  const bb = Ub[Bb];
                  if (/^(cmd|meta|m)$/i.test(bb)) Eb = !0;
                  else if (/^a(lt)?$/i.test(bb)) Ab = !0;
                  else if (/^(c|ctrl|control)$/i.test(bb)) Mb = !0;
                  else if (/^s(hift)?$/i.test(bb)) Tb = !0;
                  else {
                    if (!/^mod$/i.test(bb)) throw new Error("Unrecognized modifier name: " + bb);
                    "mac" == ab ? Eb = !0 : Mb = !0
                  }
                }
                return Ab && (Yb = "Alt-" + Yb), Mb && (Yb = "Ctrl-" + Yb), Eb && (Yb = "Meta-" + Yb), Tb && (Yb = "Shift-" + Yb), Yb
              }(bb, ab)));
            for (let ab = 1; ab < Lb.length; ab++) {
              let Ub = Lb.slice(0, ab).join(" ");
              Mb(Ub, !0), vb[Ub] || (vb[Ub] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [ab => {
                  let Ab = rM = {
                    view: ab,
                    prefix: Ub,
                    scope: bb
                  };
                  return setTimeout((() => {
                    rM == Ab && (rM = null)
                  }), KM), !0
                }]
              })
            }
            let Pb = Lb.join(" ");
            Mb(Pb, !1);
            let Xb = vb[Pb] || (vb[Pb] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (eb = null === (Bb = vb._any) || void 0 === Bb ? void 0 : Bb.run) || void 0 === eb ? void 0 : eb.slice()) || []
            });
            Tb && Xb.run.push(Tb), Eb && (Xb.preventDefault = !0), Yb && (Xb.stopPropagation = !0)
          };
        for (let Eb of bb) {
          let bb = Eb.scope ? Eb.scope.split(" ") : ["editor"];
          if (Eb.any)
            for (let ab of bb) {
              let bb = Ub[ab] || (Ub[ab] = Object.create(null));
              bb._any || (bb._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: Ab
              } = Eb;
              for (let ab in bb) bb[ab].run.push((bb => Ab(bb, oM)))
            }
          let Ab = Eb[ab] || Eb.key;
          if (Ab)
            for (let ab of bb) Tb(ab, Ab, Eb.run, Eb.preventDefault, Eb.stopPropagation), Eb.shift && Tb(ab, "Shift-" + Ab, Eb.shift, Eb.preventDefault, Eb.stopPropagation)
        }
        return Ub
      }(ab.reduce(((bb, ab) => bb.concat(ab)), []))), Ub
    }

    function uM(bb, ab, Ub) {
      return lM(qM(bb.state), ab, bb, Ub)
    }
    let rM = null;
    const KM = 4e3;
    let oM = null;

    function lM(bb, ab, Ub, Mb) {
      oM = ab;
      let eb = function(bb) {
          var ab = !(Yb && bb.metaKey && bb.shiftKey && !bb.ctrlKey && !bb.altKey || Bb && bb.shiftKey && bb.key && 1 == bb.key.length || "Unidentified" == bb.key) && bb.key || (bb.shiftKey ? Eb : Tb)[bb.keyCode] || bb.key || "Unidentified";
          return "Esc" == ab && (ab = "Escape"), "Del" == ab && (ab = "Delete"), "Left" == ab && (ab = "ArrowLeft"), "Up" == ab && (ab = "ArrowUp"), "Right" == ab && (ab = "ArrowRight"), "Down" == ab && (ab = "ArrowDown"), ab
        }(ab),
        vb = (0, Ab.J)(eb, 0),
        Lb = (0, Ab.K)(vb) == eb.length && " " != eb,
        Pb = "",
        Xb = !1,
        jb = !1,
        Rb = !1;
      rM && rM.view == Ub && rM.scope == Mb && (Pb = rM.prefix + " ", XA.indexOf(ab.keyCode) < 0 && (jb = !0, rM = null));
      let kb, yb, Zb = new Set,
        Db = bb => {
          if (bb) {
            for (let ab of bb.run)
              if (!Zb.has(ab) && (Zb.add(ab), ab(Ub))) return bb.stopPropagation && (Rb = !0), !0;
            bb.preventDefault && (bb.stopPropagation && (Rb = !0), jb = !0)
          }
          return !1
        },
        zb = bb[Mb];
      return zb && (Db(zb[Pb + FM(eb, ab, !Lb)]) ? Xb = !0 : !Lb || !(ab.altKey || ab.metaKey || ab.ctrlKey) || fb.windows && ab.ctrlKey && ab.altKey || fb.mac && ab.altKey && !ab.ctrlKey && !ab.metaKey || !(kb = Tb[ab.keyCode]) || kb == eb ? Lb && ab.shiftKey && Db(zb[Pb + FM(eb, ab, !0)]) && (Xb = !0) : (Db(zb[Pb + FM(kb, ab, !0)]) || ab.shiftKey && (yb = Eb[ab.keyCode]) != eb && yb != kb && Db(zb[Pb + FM(yb, ab, !1)])) && (Xb = !0), !Xb && Db(zb._any) && (Xb = !0)), jb && (Xb = !0), Xb && Rb && ab.stopPropagation(), oM = null, Xb
    }
    class tM {
      constructor(bb, ab, Ub, Ab, Mb) {
        this.className = bb, this.left = ab, this.top = Ub, this.width = Ab, this.height = Mb
      }
      draw() {
        let bb = document.createElement("div");
        return bb.className = this.className, this.adjust(bb), bb
      }
      update(bb, ab) {
        return ab.className == this.className && (this.adjust(bb), !0)
      }
      adjust(bb) {
        bb.style.left = this.left + "px", bb.style.top = this.top + "px", null != this.width && (bb.style.width = this.width + "px"), bb.style.height = this.height + "px"
      }
      eq(bb) {
        return this.left == bb.left && this.top == bb.top && this.width == bb.width && this.height == bb.height && this.className == bb.className
      }
      static forRange(bb, ab, Ub) {
        if (Ub.empty) {
          let Ab = bb.coordsAtPos(Ub.head, Ub.assoc || 1);
          if (!Ab) return [];
          let Mb = wM(bb);
          return [new tM(ab, Ab.left - Mb.left, Ab.top - Mb.top, null, Ab.bottom - Ab.top)]
        }
        return function(bb, ab, Ub) {
          if (Ub.to <= bb.viewport.from || Ub.from >= bb.viewport.to) return [];
          let Ab = Math.max(Ub.from, bb.viewport.from),
            Mb = Math.min(Ub.to, bb.viewport.to),
            Tb = bb.textDirection == ea.LTR,
            Eb = bb.contentDOM,
            Yb = Eb.getBoundingClientRect(),
            Bb = wM(bb),
            eb = Eb.querySelector(".cm-line"),
            vb = eb && window.getComputedStyle(eb),
            Lb = Yb.left + (vb ? parseInt(vb.paddingLeft) + Math.min(0, parseInt(vb.textIndent)) : 0),
            Pb = Yb.right - (vb ? parseInt(vb.paddingRight) : 0),
            Xb = tU(bb, Ab, 1),
            jb = tU(bb, Mb, -1),
            Rb = Xb.type == db.Text ? Xb : null,
            kb = jb.type == db.Text ? jb : null;
          Rb && (bb.lineWrapping || Xb.widgetLineBreaks) && (Rb = sM(bb, Ab, 1, Rb));
          kb && (bb.lineWrapping || jb.widgetLineBreaks) && (kb = sM(bb, Mb, -1, kb));
          if (Rb && kb && Rb.from == kb.from && Rb.to == kb.to) return Zb(Db(Ub.from, Ub.to, Rb));
          {
            let ab = Rb ? Db(Ub.from, null, Rb) : zb(Xb, !1),
              Ab = kb ? Db(null, Ub.to, kb) : zb(jb, !0),
              Mb = [];
            return (Rb || Xb).to < (kb || jb).from - (Rb && kb ? 1 : 0) || Xb.widgetLineBreaks > 1 && ab.bottom + bb.defaultLineHeight / 2 < Ab.top ? Mb.push(yb(Lb, ab.bottom, Pb, Ab.top)) : ab.bottom < Ab.top && bb.elementAtHeight((ab.bottom + Ab.top) / 2).type == db.Text && (ab.bottom = Ab.top = (ab.bottom + Ab.top) / 2), Zb(ab).concat(Mb).concat(Zb(Ab))
          }

          function yb(bb, Ub, Ab, Mb) {
            return new tM(ab, bb - Bb.left, Ub - Bb.top, Math.max(0, Ab - bb), Mb - Ub)
          }

          function Zb(bb) {
            let {
              top: ab,
              bottom: Ub,
              horizontal: Ab
            } = bb, Mb = [];
            for (let Tb = 0; Tb < Ab.length; Tb += 2) Mb.push(yb(Ab[Tb], ab, Ab[Tb + 1], Ub));
            return Mb
          }

          function Db(ab, Ub, Ab) {
            let Mb = 1e9,
              Eb = -1e9,
              Yb = [];

            function Bb(ab, Ub, Bb, eb, vb) {
              let Xb = bb.coordsAtPos(ab, ab == Ab.to ? -2 : 2),
                jb = bb.coordsAtPos(Bb, Bb == Ab.from ? 2 : -2);
              Xb && jb && (Mb = Math.min(Xb.top, jb.top, Mb), Eb = Math.max(Xb.bottom, jb.bottom, Eb), vb == ea.LTR ? Yb.push(Tb && Ub ? Lb : Xb.left, Tb && eb ? Pb : jb.right) : Yb.push(!Tb && eb ? Lb : jb.left, !Tb && Ub ? Pb : Xb.right))
            }
            let eb = null !== ab && void 0 !== ab ? ab : Ab.from,
              vb = null !== Ub && void 0 !== Ub ? Ub : Ab.to;
            for (let Tb of bb.W4)
              if (Tb.to > eb && Tb.from < vb)
                for (let Ab = Math.max(Tb.from, eb), Mb = Math.min(Tb.to, vb);;) {
                  let Tb = bb.state.doc.lineAt(Ab);
                  for (let Eb of bb.bidiSpans(Tb)) {
                    let bb = Eb.from + Tb.from,
                      Yb = Eb.to + Tb.from;
                    if (bb >= Mb) break;
                    Yb > Ab && Bb(Math.max(bb, Ab), null == ab && bb <= eb, Math.min(Yb, Mb), null == Ub && Yb >= vb, Eb.dir)
                  }
                  if (Ab = Tb.to + 1, Ab >= Mb) break
                }
            return 0 == Yb.length && Bb(eb, null == ab, vb, null == Ub, bb.textDirection), {
              top: Mb,
              bottom: Eb,
              horizontal: Yb
            }
          }

          function zb(bb, ab) {
            let Ub = Yb.top + (ab ? bb.top : bb.bottom);
            return {
              top: Ub,
              bottom: Ub,
              horizontal: []
            }
          }
        }(bb, ab, Ub)
      }
    }

    function wM(bb) {
      let ab = bb.scrollDOM.getBoundingClientRect();
      return {
        left: (bb.textDirection == ea.LTR ? ab.left : ab.right - bb.scrollDOM.clientWidth * bb.scaleX) - bb.scrollDOM.scrollLeft * bb.scaleX,
        top: ab.top - bb.scrollDOM.scrollTop * bb.scaleY
      }
    }

    function sM(bb, ab, Ub, Ab) {
      let Mb = bb.coordsAtPos(ab, 2 * Ub);
      if (!Mb) return Ab;
      let Tb = bb.dom.getBoundingClientRect(),
        Eb = (Mb.top + Mb.bottom) / 2,
        Yb = bb.posAtCoords({
          x: Tb.left + 1,
          y: Eb
        }),
        Bb = bb.posAtCoords({
          x: Tb.right - 1,
          y: Eb
        });
      return null == Yb || null == Bb ? Ab : {
        from: Math.max(Ab.from, Math.min(Yb, Bb)),
        to: Math.min(Ab.to, Math.max(Yb, Bb))
      }
    }
    class gM {
      constructor(bb, ab) {
        this.view = bb, this.layer = ab, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = bb.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), ab.above && this.dom.classList.add("cm-layer-above"), ab.class && this.dom.classList.add(ab.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(bb.state), bb.requestMeasure(this.measureReq), ab.mount && ab.mount(this.dom, bb)
      }
      update(bb) {
        bb.startState.facet(CM) != bb.state.facet(CM) && this.setOrder(bb.state), (this.layer.update(bb, this.dom) || bb.geometryChanged) && (this.scale(), bb.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(bb) {
        !1 !== this.layer.updateOnDocViewUpdate && bb.requestMeasure(this.measureReq)
      }
      setOrder(bb) {
        let ab = 0,
          Ub = bb.facet(CM);
        for (; ab < Ub.length && Ub[ab] != this.layer;) ab++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - ab)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: bb,
          scaleY: ab
        } = this.view;
        bb == this.scaleX && ab == this.scaleY || (this.scaleX = bb, this.scaleY = ab, this.dom.style.transform = `scale(${1/bb}, ${1/ab})`)
      }
      draw(bb) {
        if (bb.length != this.drawn.length || bb.some(((bb, ab) => {
            return Ub = bb, Ab = this.drawn[ab], !(Ub.constructor == Ab.constructor && Ub.eq(Ab));
            var Ub, Ab
          }))) {
          let ab = this.dom.firstChild,
            Ub = 0;
          for (let Ab of bb) Ab.update && ab && Ab.constructor && this.drawn[Ub].constructor && Ab.update(ab, this.drawn[Ub]) ? (ab = ab.nextSibling, Ub++) : this.dom.insertBefore(Ab.draw(), ab);
          for (; ab;) {
            let bb = ab.nextSibling;
            ab.remove(), ab = bb
          }
          this.drawn = bb, fb.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const CM = Ab.q.define();

    function VM(bb) {
      return [ca.define((ab => new gM(ab, bb))), CM.of(bb)]
    }
    const OM = Ab.q.define({
      combine: bb => (0, Ab.O)(bb, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (bb, ab) => Math.min(bb, ab),
        drawRangeCursor: (bb, ab) => bb || ab
      })
    });

    function cM() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [OM.of(bb), nM, bT, aT, oa.of(!0)]
    }

    function JM(bb) {
      return bb.startState.facet(OM) != bb.state.facet(OM)
    }
    const nM = VM({
      above: !0,
      markers(bb) {
        let {
          state: ab
        } = bb, Ub = ab.facet(OM), Mb = [];
        for (let Tb of ab.selection.cj) {
          let Eb = Tb == ab.selection.main;
          if (Tb.empty || Ub.drawRangeCursor && !(Eb && fb.ios && Ub.iosSelectionHandles)) {
            let ab = Eb ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              Ub = Tb.empty ? Tb : Ab.m.cursor(Tb.head, Tb.assoc);
            for (let Ab of tM.forRange(bb, ab, Ub)) Mb.push(Ab)
          }
        }
        return Mb
      },
      update(bb, ab) {
        bb.transactions.some((bb => bb.selection)) && (ab.style.animationName = "cm-blink" == ab.style.animationName ? "cm-blink2" : "cm-blink");
        let Ub = JM(bb);
        return Ub && SM(bb.state, ab), bb.docChanged || bb.selectionSet || Ub
      },
      mount(bb, ab) {
        SM(ab.state, bb)
      },
      class: "cm-cursorLayer"
    });

    function SM(bb, ab) {
      ab.style.animationDuration = bb.facet(OM).cursorBlinkRate + "ms"
    }
    const bT = VM({
        above: !1,
        markers(bb) {
          let ab = [],
            {
              main: Ub,
              cj: Mb
            } = bb.state.selection;
          for (let Ab of Mb)
            if (!Ab.empty)
              for (let Ub of tM.forRange(bb, "cm-selectionBackground", Ab)) ab.push(Ub);
          if (fb.ios && !Ub.empty && bb.state.facet(OM).iosSelectionHandles) {
            for (let Mb of tM.forRange(bb, "cm-selectionHandle cm-selectionHandle-start", Ab.m.cursor(Ub.from, 1))) ab.push(Mb);
            for (let Mb of tM.forRange(bb, "cm-selectionHandle cm-selectionHandle-end", Ab.m.cursor(Ub.to, 1))) ab.push(Mb)
          }
          return ab
        },
        update: (bb, ab) => bb.docChanged || bb.selectionSet || bb.viewportChanged || JM(bb),
        class: "cm-selectionLayer"
      }),
      aT = Ab.u.highest(pM.theme({
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
      UT = Ab.B.define({
        map: (bb, ab) => null == bb ? null : ab.mapPos(bb)
      }),
      AT = Ab.E.define({
        create: () => null,
        update: (bb, ab) => (null != bb && (bb = ab.changes.mapPos(bb)), ab.effects.reduce(((bb, ab) => ab.is(UT) ? ab.value : bb), bb))
      }),
      MT = ca.fromClass(class {
        constructor(bb) {
          this.view = bb, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(bb) {
          var ab;
          let Ub = bb.state.field(AT);
          null == Ub ? null != this.cursor && (null === (ab = this.cursor) || void 0 === ab || ab.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (bb.startState.field(AT) != Ub || bb.docChanged || bb.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: bb
          } = this, ab = bb.state.field(AT), Ub = null != ab && bb.coordsAtPos(ab);
          if (!Ub) return null;
          let Ab = bb.scrollDOM.getBoundingClientRect();
          return {
            left: Ub.left - Ab.left + bb.scrollDOM.scrollLeft * bb.scaleX,
            top: Ub.top - Ab.top + bb.scrollDOM.scrollTop * bb.scaleY,
            height: Ub.bottom - Ub.top
          }
        }
        drawCursor(bb) {
          if (this.cursor) {
            let {
              scaleX: ab,
              scaleY: Ub
            } = this.view;
            bb ? (this.cursor.style.left = bb.left / ab + "px", this.cursor.style.top = bb.top / Ub + "px", this.cursor.style.height = bb.height / Ub + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(bb) {
          this.view.state.field(AT) != bb && this.view.dispatch({
            effects: UT.of(bb)
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

    function TT() {
      return [AT, MT]
    }

    function ET(bb, ab, Ub, Ab, Mb) {
      ab.lastIndex = 0;
      for (let Tb, Eb = bb.iterRange(Ub, Ab), Yb = Ub; !Eb.next().done; Yb += Eb.value.length)
        if (!Eb.lineBreak)
          for (; Tb = ab.exec(Eb.value);) Mb(Yb + Tb.index, Tb)
    }
    class YT {
      constructor(bb) {
        const {
          regexp: ab,
          decoration: Ub,
          decorate: Ab,
          boundary: Mb,
          maxLength: Tb = 1e3
        } = bb;
        if (!ab.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = ab, Ab) this.addMatch = (bb, ab, Ub, Mb) => Ab(Mb, Ub, Ub + bb[0].length, bb, ab);
        else if ("function" == typeof Ub) this.addMatch = (bb, ab, Ab, Mb) => {
          let Tb = Ub(bb, ab, Ab);
          Tb && Mb(Ab, Ab + bb[0].length, Tb)
        };
        else {
          if (!Ub) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (bb, ab, Ab, Mb) => Mb(Ab, Ab + bb[0].length, Ub)
        }
        this.boundary = Mb, this.maxLength = Tb
      }
      createDeco(bb) {
        let ab = new Ab.x,
          Ub = ab.add.bind(ab);
        for (let {
            from: Ab,
            to: Mb
          }
          of
          function(bb, ab) {
            let Ub = bb.W4;
            if (1 == Ub.length && Ub[0].from == bb.viewport.from && Ub[0].to == bb.viewport.to) return Ub;
            let Ab = [];
            for (let {
                from: Mb,
                to: Tb
              }
              of Ub) Mb = Math.max(bb.state.doc.lineAt(Mb).from, Mb - ab), Tb = Math.min(bb.state.doc.lineAt(Tb).to, Tb + ab), Ab.length && Ab[Ab.length - 1].to >= Mb ? Ab[Ab.length - 1].to = Tb : Ab.push({
              from: Mb,
              to: Tb
            });
            return Ab
          }(bb, this.maxLength)) ET(bb.state.doc, this.regexp, Ab, Mb, ((ab, Ab) => this.addMatch(Ab, bb, ab, Ub)));
        return ab.finish()
      }
      updateDeco(bb, ab) {
        let Ub = 1e9,
          Ab = -1;
        return bb.docChanged && bb.changes.iterChanges(((ab, Mb, Tb, Eb) => {
          Eb >= bb.view.viewport.from && Tb <= bb.view.viewport.to && (Ub = Math.min(Tb, Ub), Ab = Math.max(Eb, Ab))
        })), bb.viewportMoved || Ab - Ub > 1e3 ? this.createDeco(bb.view) : Ab > -1 ? this.updateRange(bb.view, ab.map(bb.changes), Ub, Ab) : ab
      }
      updateRange(bb, ab, Ub, Ab) {
        for (let Mb of bb.W4) {
          let Tb = Math.max(Mb.from, Ub),
            Eb = Math.min(Mb.to, Ab);
          if (Eb >= Tb) {
            let Ub = bb.state.doc.lineAt(Tb),
              Ab = Ub.to < Eb ? bb.state.doc.lineAt(Eb) : Ub,
              Yb = Math.max(Mb.from, Ub.from),
              Bb = Math.min(Mb.to, Ab.to);
            if (this.boundary) {
              for (; Tb > Ub.from; Tb--)
                if (this.boundary.test(Ub.text[Tb - 1 - Ub.from])) {
                  Yb = Tb;
                  break
                } for (; Eb < Ab.to; Eb++)
                if (this.boundary.test(Ab.text[Eb - Ab.from])) {
                  Bb = Eb;
                  break
                }
            }
            let eb, vb = [],
              Lb = (bb, ab, Ub) => vb.push(Ub.range(bb, ab));
            if (Ub == Ab)
              for (this.regexp.lastIndex = Yb - Ub.from;
                (eb = this.regexp.exec(Ub.text)) && eb.index < Bb - Ub.from;) this.addMatch(eb, bb, eb.index + Ub.from, Lb);
            else ET(bb.state.doc, this.regexp, Yb, Bb, ((ab, Ub) => this.addMatch(Ub, bb, ab, Lb)));
            ab = ab.update({
              filterFrom: Yb,
              filterTo: Bb,
              filter: (bb, ab) => bb < Yb || ab > Bb,
              add: vb
            })
          }
        }
        return ab
      }
    }
    const BT = null != /x/.unicode ? "gu" : "g",
      eT = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", BT),
      vT = {
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
    let LT = null;
    const PT = Ab.q.define({
      combine(bb) {
        let ab = (0, Ab.O)(bb, {
          render: null,
          specialChars: eT,
          addSpecialChars: null
        });
        return (ab.replaceTabs = ! function() {
          var bb;
          if (null == LT && "undefined" != typeof document && document.body) {
            let ab = document.body.style;
            LT = null != (null !== (bb = ab.tabSize) && void 0 !== bb ? bb : ab.MozTabSize)
          }
          return LT || !1
        }()) && (ab.specialChars = new RegExp("\t|" + ab.specialChars.source, BT)), ab.addSpecialChars && (ab.specialChars = new RegExp(ab.specialChars.source + "|" + ab.addSpecialChars.source, BT)), ab
      }
    });

    function XT() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [PT.of(bb), jT || (jT = ca.fromClass(class {
        constructor(bb) {
          this.view = bb, this.hA = Fb.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(bb.state.facet(PT)), this.hA = this.decorator.createDeco(bb)
        }
        makeDecorator(bb) {
          return new YT({
            regexp: bb.specialChars,
            decoration: (ab, Ub, Mb) => {
              let {
                doc: Tb
              } = Ub.state, Eb = (0, Ab.J)(ab[0], 0);
              if (9 == Eb) {
                let bb = Tb.lineAt(Mb),
                  ab = Ub.state.tabSize,
                  Eb = (0, Ab.R)(bb.text, ab, Mb - bb.from);
                return Fb.replace({
                  widget: new kT((ab - Eb % ab) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[Eb] || (this.decorationCache[Eb] = Fb.replace({
                widget: new RT(bb, Eb)
              }))
            },
            boundary: bb.replaceTabs ? void 0 : /[^]/
          })
        }
        update(bb) {
          let ab = bb.state.facet(PT);
          bb.startState.facet(PT) != ab ? (this.decorator = this.makeDecorator(ab), this.hA = this.decorator.createDeco(bb.view)) : this.hA = this.decorator.updateDeco(bb, this.hA)
        }
      }, {
        hA: bb => bb.hA
      }))]
    }
    let jT = null;
    class RT extends Ib {
      constructor(bb, ab) {
        super(), this.options = bb, this.code = ab
      }
      eq(bb) {
        return bb.code == this.code
      }
      toDOM(bb) {
        let ab = function(bb) {
            return bb >= 32 ? "\u2022" : 10 == bb ? "\u2424" : String.fromCharCode(9216 + bb)
          }(this.code),
          Ub = bb.state.phrase("Control character") + " " + (vT[this.code] || "0x" + this.code.toString(16)),
          Ab = this.options.render && this.options.render(this.code, Ub, ab);
        if (Ab) return Ab;
        let Mb = document.createElement("span");
        return Mb.textContent = ab, Mb.title = Ub, Mb.setAttribute("aria-label", Ub), Mb.className = "cm-specialChar", Mb
      }
      ignoreEvent() {
        return !1
      }
    }
    class kT extends Ib {
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

    function yT() {
      return DT
    }
    const ZT = Fb.line({
        class: "cm-activeLine"
      }),
      DT = ca.fromClass(class {
        constructor(bb) {
          this.hA = this.getDeco(bb)
        }
        update(bb) {
          (bb.docChanged || bb.selectionSet) && (this.hA = this.getDeco(bb.view))
        }
        getDeco(bb) {
          let ab = -1,
            Ub = [];
          for (let Ab of bb.state.selection.cj) {
            let Mb = bb.lineBlockAt(Ab.head);
            Mb.from > ab && (Ub.push(ZT.range(Mb.from)), ab = Mb.from)
          }
          return Fb.set(Ub)
        }
      }, {
        hA: bb => bb.hA
      });
    class zT extends Ib {
      constructor(bb) {
        super(), this.content = bb
      }
      toDOM(bb) {
        let ab = document.createElement("span");
        return ab.className = "cm-placeholder", ab.style.pointerEvents = "none", ab.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(bb) : this.content.cloneNode(!0)), ab.setAttribute("aria-hidden", "true"), ab
      }
      coordsAt(bb) {
        let ab = bb.firstChild ? tb(bb.firstChild) : [];
        if (!ab.length) return null;
        let Ub = window.getComputedStyle(bb.parentNode),
          Ab = Ob(ab[0], "rtl" != Ub.direction),
          Mb = parseInt(Ub.lineHeight);
        return Ab.bottom - Ab.top > 1.5 * Mb ? {
          left: Ab.left,
          right: Ab.right,
          top: Ab.top,
          bottom: Ab.top + Mb
        } : Ab
      }
      ignoreEvent() {
        return !1
      }
    }

    function xT(bb) {
      let ab = ca.fromClass(class {
        constructor(ab) {
          this.view = ab, this.placeholder = bb ? Fb.set([Fb.widget({
            widget: new zT(bb),
            side: 1
          }).range(0)]) : Fb.none
        }
        get hA() {
          return this.view.state.doc.length ? Fb.none : this.placeholder
        }
      }, {
        hA: bb => bb.hA
      });
      return "string" == typeof bb ? [ab, pM.contentAttributes.of({
        "aria-placeholder": bb
      })] : ab
    }
    const iT = 2e3;

    function fT(bb, ab) {
      let Ub = bb.posAtCoords({
          x: ab.clientX,
          y: ab.clientY
        }, !1),
        Mb = bb.state.doc.lineAt(Ub),
        Tb = Ub - Mb.from,
        Eb = Tb > iT ? -1 : Tb == Mb.length ? function(bb, ab) {
          let Ub = bb.coordsAtPos(bb.viewport.from);
          return Ub ? Math.round(Math.abs((Ub.left - ab) / bb.defaultCharacterWidth)) : -1
        }(bb, ab.clientX) : (0, Ab.R)(Mb.text, bb.state.tabSize, Ub - Mb.from);
      return {
        line: Mb.number,
        col: Eb,
        off: Tb
      }
    }

    function mT(bb, ab) {
      let Ub = fT(bb, ab),
        Mb = bb.state.selection;
      return Ub ? {
        update(bb) {
          if (bb.docChanged) {
            let ab = bb.changes.mapPos(bb.startState.doc.line(Ub.line).from),
              Ab = bb.state.doc.lineAt(ab);
            Ub = {
              line: Ab.number,
              col: Ub.col,
              off: Math.min(Ub.off, Ab.length)
            }, Mb = Mb.map(bb.changes)
          }
        },
        get(ab, Tb, Eb) {
          let Yb = fT(bb, ab);
          if (!Yb) return Mb;
          let Bb = function(bb, ab, Ub) {
            let Mb = Math.min(ab.line, Ub.line),
              Tb = Math.max(ab.line, Ub.line),
              Eb = [];
            if (ab.off > iT || Ub.off > iT || ab.col < 0 || Ub.col < 0) {
              let Yb = Math.min(ab.off, Ub.off),
                Bb = Math.max(ab.off, Ub.off);
              for (let ab = Mb; ab <= Tb; ab++) {
                let Ub = bb.doc.line(ab);
                Ub.length <= Bb && Eb.push(Ab.m.range(Ub.from + Yb, Ub.to + Bb))
              }
            } else {
              let Yb = Math.min(ab.col, Ub.col),
                Bb = Math.max(ab.col, Ub.col);
              for (let ab = Mb; ab <= Tb; ab++) {
                let Ub = bb.doc.line(ab),
                  Mb = (0, Ab.X)(Ub.text, Yb, bb.tabSize, !0);
                if (Mb < 0) Eb.push(Ab.m.cursor(Ub.to));
                else {
                  let ab = (0, Ab.X)(Ub.text, Bb, bb.tabSize);
                  Eb.push(Ab.m.range(Ub.from + Mb, Ub.from + ab))
                }
              }
            }
            return Eb
          }(bb.state, Ub, Yb);
          return Bb.length ? Eb ? Ab.m.create(Bb.concat(Mb.cj)) : Ab.m.create(Bb) : Mb
        }
      } : null
    }

    function pT(bb) {
      let ab = (null === bb || void 0 === bb ? void 0 : bb.eventFilter) || (bb => bb.altKey && 0 == bb.button);
      return pM.mouseSelectionStyle.of(((bb, Ub) => ab(Ub) ? mT(bb, Ub) : null))
    }
    const NT = {
        Alt: [18, bb => !!bb.altKey],
        Control: [17, bb => !!bb.ctrlKey],
        Shift: [16, bb => !!bb.shiftKey],
        Meta: [91, bb => !!bb.metaKey]
      },
      WT = {
        style: "cursor: crosshair"
      };

    function HT() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [ab, Ub] = NT[bb.key || "Alt"],
        Ab = ca.fromClass(class {
          constructor(bb) {
            this.view = bb, this.isDown = !1
          }
          set(bb) {
            this.isDown != bb && (this.isDown = bb, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(bb) {
              this.set(bb.keyCode == ab || Ub(bb))
            },
            keyup(bb) {
              bb.keyCode != ab && Ub(bb) || this.set(!1)
            },
            mousemove(bb) {
              this.set(Ub(bb))
            }
          }
        });
      return [Ab, pM.contentAttributes.of((bb => {
        var ab;
        return (null === (ab = bb.plugin(Ab)) || void 0 === ab ? void 0 : ab.isDown) ? WT : null
      }))]
    }
    const IT = "-10000px";
    class dT {
      constructor(bb, ab, Ub, Ab) {
        this.facet = ab, this.createTooltipView = Ub, this.removeTooltipView = Ab, this.input = bb.state.facet(ab), this.tooltips = this.input.filter((bb => bb));
        let Mb = null;
        this.tooltipViews = this.tooltips.map((bb => Mb = Ub(bb, Mb)))
      }
      update(bb, ab) {
        var Ub;
        let Ab = bb.state.facet(this.facet),
          Mb = Ab.filter((bb => bb));
        if (Ab === this.input) {
          for (let ab of this.tooltipViews) ab.update && ab.update(bb);
          return !1
        }
        let Tb = [],
          Eb = ab ? [] : null;
        for (let Yb = 0; Yb < Mb.length; Yb++) {
          let Ub = Mb[Yb],
            Ab = -1;
          if (Ub) {
            for (let bb = 0; bb < this.tooltips.length; bb++) {
              let ab = this.tooltips[bb];
              ab && ab.create == Ub.create && (Ab = bb)
            }
            if (Ab < 0) Tb[Yb] = this.createTooltipView(Ub, Yb ? Tb[Yb - 1] : null), Eb && (Eb[Yb] = !!Ub.above);
            else {
              let Ub = Tb[Yb] = this.tooltipViews[Ab];
              Eb && (Eb[Yb] = ab[Ab]), Ub.update && Ub.update(bb)
            }
          }
        }
        for (let Yb of this.tooltipViews) Tb.indexOf(Yb) < 0 && (this.removeTooltipView(Yb), null === (Ub = Yb.destroy) || void 0 === Ub || Ub.call(Yb));
        return ab && (Eb.forEach(((bb, Ub) => ab[Ub] = bb)), ab.length = Eb.length), this.input = Ab, this.tooltips = Mb, this.tooltipViews = Tb, !0
      }
    }

    function FT(bb) {
      let ab = bb.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: ab.clientHeight,
        right: ab.clientWidth
      }
    }
    const hT = Ab.q.define({
        combine: bb => {
          var ab, Ub, Ab;
          return {
            position: fb.ios ? "absolute" : (null === (ab = bb.find((bb => bb.position))) || void 0 === ab ? void 0 : ab.position) || "fixed",
            parent: (null === (Ub = bb.find((bb => bb.parent))) || void 0 === Ub ? void 0 : Ub.parent) || null,
            tooltipSpace: (null === (Ab = bb.find((bb => bb.tooltipSpace))) || void 0 === Ab ? void 0 : Ab.tooltipSpace) || FT
          }
        }
      }),
      GT = new WeakMap,
      QT = ca.fromClass(class {
        constructor(bb) {
          this.view = bb, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let ab = bb.state.facet(hT);
          this.position = ab.position, this.parent = ab.parent, this.classes = bb.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new dT(bb, KT, ((bb, ab) => this.createTooltip(bb, ab)), (bb => {
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
          let ab = this.manager.update(bb, this.above);
          ab && this.observeIntersection();
          let Ub = ab || bb.geometryChanged,
            Ab = bb.state.facet(hT);
          if (Ab.position != this.position && !this.madeAbsolute) {
            this.position = Ab.position;
            for (let bb of this.manager.tooltipViews) bb.dom.style.position = this.position;
            Ub = !0
          }
          if (Ab.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = Ab.parent, this.createContainer();
            for (let bb of this.manager.tooltipViews) this.container.appendChild(bb.dom);
            Ub = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          Ub && this.maybeMeasure()
        }
        createTooltip(bb, ab) {
          let Ub = bb.create(this.view),
            Ab = ab ? ab.dom : null;
          if (Ub.dom.classList.add("cm-tooltip"), bb.arrow && !Ub.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let bb = document.createElement("div");
            bb.className = "cm-tooltip-arrow", Ub.dom.appendChild(bb)
          }
          return Ub.dom.style.position = this.position, Ub.dom.style.top = IT, Ub.dom.style.left = "0px", this.container.insertBefore(Ub.dom, Ab), Ub.mount && Ub.mount(this.view), this.resizeObserver && this.resizeObserver.observe(Ub.dom), Ub
        }
        destroy() {
          var bb, ab, Ub;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let Ab of this.manager.tooltipViews) Ab.dom.remove(), null === (bb = Ab.destroy) || void 0 === bb || bb.call(Ab);
          this.parent && this.container.remove(), null === (ab = this.resizeObserver) || void 0 === ab || ab.disconnect(), null === (Ub = this.intersectionObserver) || void 0 === Ub || Ub.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let bb = 1,
            ab = 1,
            Ub = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: bb
            } = this.manager.tooltipViews[0];
            if (fb.safari) {
              let ab = bb.getBoundingClientRect();
              Ub = Math.abs(ab.top + 1e4) > 1 || Math.abs(ab.left) > 1
            } else Ub = !!bb.offsetParent && bb.offsetParent != this.container.ownerDocument.body
          }
          if (Ub || "absolute" == this.position)
            if (this.parent) {
              let Ub = this.parent.getBoundingClientRect();
              Ub.width && Ub.height && (bb = Ub.width / this.parent.offsetWidth, ab = Ub.height / this.parent.offsetHeight)
            } else({
              scaleX: bb,
              scaleY: ab
            } = this.view.viewState);
          let Ab = this.view.scrollDOM.getBoundingClientRect(),
            Mb = YU(this.view);
          return {
            visible: {
              left: Ab.left + Mb.left,
              top: Ab.top + Mb.top,
              right: Ab.right - Mb.right,
              bottom: Ab.bottom - Mb.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((bb, ab) => {
              let Ub = this.manager.tooltipViews[ab];
              return Ub.getCoords ? Ub.getCoords(bb.pos) : this.view.coordsAtPos(bb.pos)
            })),
            size: this.manager.tooltipViews.map((bb => {
              let {
                dom: ab
              } = bb;
              return ab.getBoundingClientRect()
            })),
            space: this.view.state.facet(hT).tooltipSpace(this.view),
            scaleX: bb,
            scaleY: ab,
            makeAbsolute: Ub
          }
        }
        writeMeasure(bb) {
          var ab;
          if (bb.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let bb of this.manager.tooltipViews) bb.dom.style.position = "absolute"
          }
          let {
            visible: Ub,
            space: Ab,
            scaleX: Mb,
            scaleY: Tb
          } = bb, Eb = [];
          for (let Yb = 0; Yb < this.manager.tooltips.length; Yb++) {
            let Bb = this.manager.tooltips[Yb],
              eb = this.manager.tooltipViews[Yb],
              {
                dom: vb
              } = eb,
              Lb = bb.pos[Yb],
              Pb = bb.size[Yb];
            if (!Lb || !1 !== Bb.clip && (Lb.bottom <= Math.max(Ub.top, Ab.top) || Lb.top >= Math.min(Ub.bottom, Ab.bottom) || Lb.right < Math.max(Ub.left, Ab.left) - .1 || Lb.left > Math.min(Ub.right, Ab.right) + .1)) {
              vb.style.top = IT;
              continue
            }
            let Xb = Bb.arrow ? eb.dom.querySelector(".cm-tooltip-arrow") : null,
              jb = Xb ? 7 : 0,
              Rb = Pb.right - Pb.left,
              kb = null !== (ab = GT.get(eb)) && void 0 !== ab ? ab : Pb.bottom - Pb.top,
              yb = eb.offset || rT,
              Zb = this.view.textDirection == ea.LTR,
              Db = Pb.width > Ab.right - Ab.left ? Zb ? Ab.left : Ab.right - Pb.width : Zb ? Math.max(Ab.left, Math.min(Lb.left - (Xb ? 14 : 0) + yb.x, Ab.right - Rb)) : Math.min(Math.max(Ab.left, Lb.left - Rb + (Xb ? 14 : 0) - yb.x), Ab.right - Rb),
              zb = this.above[Yb];
            !Bb.strictSide && (zb ? Lb.top - kb - jb - yb.y < Ab.top : Lb.bottom + kb + jb + yb.y > Ab.bottom) && zb == Ab.bottom - Lb.bottom > Lb.top - Ab.top && (zb = this.above[Yb] = !zb);
            let xb = (zb ? Lb.top - Ab.top : Ab.bottom - Lb.bottom) - jb;
            if (xb < kb && !1 !== eb.resize) {
              if (xb < this.view.defaultLineHeight) {
                vb.style.top = IT;
                continue
              }
              GT.set(eb, kb), vb.style.height = (kb = xb) / Tb + "px"
            } else vb.style.height && (vb.style.height = "");
            let ib = zb ? Lb.top - kb - jb - yb.y : Lb.bottom + jb + yb.y,
              fb = Db + Rb;
            if (!0 !== eb.overlap)
              for (let bb of Eb) bb.left < fb && bb.right > Db && bb.top < ib + kb && bb.bottom > ib && (ib = zb ? bb.top - kb - 2 - jb : bb.bottom + jb + 2);
            if ("absolute" == this.position ? (vb.style.top = (ib - bb.parent.top) / Tb + "px", qT(vb, (Db - bb.parent.left) / Mb)) : (vb.style.top = ib / Tb + "px", qT(vb, Db / Mb)), Xb) {
              let bb = Lb.left + (Zb ? yb.x : -yb.x) - (Db + 14 - 7);
              Xb.style.left = bb / Mb + "px"
            }!0 !== eb.overlap && Eb.push({
              left: Db,
              top: ib,
              right: fb,
              bottom: ib + kb
            }), vb.classList.toggle("cm-tooltip-above", zb), vb.classList.toggle("cm-tooltip-below", !zb), eb.positioned && eb.positioned(bb.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let bb of this.manager.tooltipViews) bb.dom.style.top = IT
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function qT(bb, ab) {
      let Ub = parseInt(bb.style.left, 10);
      (isNaN(Ub) || Math.abs(ab - Ub) > 1) && (bb.style.left = ab + "px")
    }
    const uT = pM.baseTheme({
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
      rT = {
        x: 0,
        y: 0
      },
      KT = Ab.q.define({
        enables: [QT, uT]
      }),
      oT = Ab.q.define({
        combine: bb => bb.reduce(((bb, ab) => bb.concat(ab)), [])
      });
    class lT {
      static create(bb) {
        return new lT(bb)
      }
      constructor(bb) {
        this.view = bb, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new dT(bb, oT, ((bb, ab) => this.createHostedView(bb, ab)), (bb => bb.dom.remove()))
      }
      createHostedView(bb, ab) {
        let Ub = bb.create(this.view);
        return Ub.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(Ub.dom, ab ? ab.dom.nextSibling : this.dom.firstChild), this.mounted && Ub.mount && Ub.mount(this.view), Ub
      }
      mount(bb) {
        for (let ab of this.manager.tooltipViews) ab.mount && ab.mount(bb);
        this.mounted = !0
      }
      positioned(bb) {
        for (let ab of this.manager.tooltipViews) ab.positioned && ab.positioned(bb)
      }
      update(bb) {
        this.manager.update(bb)
      }
      destroy() {
        var bb;
        for (let ab of this.manager.tooltipViews) null === (bb = ab.destroy) || void 0 === bb || bb.call(ab)
      }
      passProp(bb) {
        let ab;
        for (let Ub of this.manager.tooltipViews) {
          let Ab = Ub[bb];
          if (void 0 !== Ab)
            if (void 0 === ab) ab = Ab;
            else if (ab !== Ab) return
        }
        return ab
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
    const tT = KT.compute([oT], (bb => {
      let ab = bb.facet(oT);
      return 0 === ab.length ? null : {
        pos: Math.min(...ab.map((bb => bb.pos))),
        end: Math.max(...ab.map((bb => {
          var ab;
          return null !== (ab = bb.end) && void 0 !== ab ? ab : bb.pos
        }))),
        create: lT.create,
        above: ab[0].above,
        arrow: ab.some((bb => bb.arrow))
      }
    }));
    class wT {
      constructor(bb, ab, Ub, Ab, Mb) {
        this.view = bb, this.source = ab, this.field = Ub, this.setHover = Ab, this.hoverTime = Mb, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
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
          lastMove: ab
        } = this, Ub = bb.docView.tile.nearest(ab.target);
        if (!Ub) return;
        let Ab, Mb = 1;
        if (Ub.isWidget()) Ab = Ub.posAtStart;
        else {
          if (Ab = bb.posAtCoords(ab), null == Ab) return;
          let Ub = bb.coordsAtPos(Ab);
          if (!Ub || ab.y < Ub.top || ab.y > Ub.bottom || ab.x < Ub.left - bb.defaultCharacterWidth || ab.x > Ub.right + bb.defaultCharacterWidth) return;
          let Tb = bb.bidiSpans(bb.state.doc.lineAt(Ab)).find((bb => bb.from <= Ab && bb.to >= Ab)),
            Eb = Tb && Tb.dir == ea.RTL ? -1 : 1;
          Mb = ab.x < Ub.left ? -Eb : Eb
        }
        let Tb = this.source(bb, Ab, Mb);
        if (null === Tb || void 0 === Tb ? void 0 : Tb.then) {
          let ab = this.pending = {
            pos: Ab
          };
          Tb.then((Ub => {
            this.pending == ab && (this.pending = null, !Ub || Array.isArray(Ub) && !Ub.length || bb.dispatch({
              effects: this.setHover.of(Array.isArray(Ub) ? Ub : [Ub])
            }))
          }), (ab => ga(bb.state, ab, "hover tooltip")))
        } else !Tb || Array.isArray(Tb) && !Tb.length || bb.dispatch({
          effects: this.setHover.of(Array.isArray(Tb) ? Tb : [Tb])
        })
      }
      get tooltip() {
        let bb = this.view.plugin(QT),
          ab = bb ? bb.manager.tooltips.findIndex((bb => bb.create == lT.create)) : -1;
        return ab > -1 ? bb.manager.tooltipViews[ab] : null
      }
      mousemove(bb) {
        var ab, Ub;
        this.lastMove = {
          x: bb.clientX,
          y: bb.clientY,
          target: bb.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: Ab,
          tooltip: Mb
        } = this;
        if (Ab.length && Mb && ! function(bb, ab) {
            let Ub, {
              left: Ab,
              right: Mb,
              top: Tb,
              bottom: Eb
            } = bb.getBoundingClientRect();
            if (Ub = bb.querySelector(".cm-tooltip-arrow")) {
              let bb = Ub.getBoundingClientRect();
              Tb = Math.min(bb.top, Tb), Eb = Math.max(bb.bottom, Eb)
            }
            return ab.clientX >= Ab - sT && ab.clientX <= Mb + sT && ab.clientY >= Tb - sT && ab.clientY <= Eb + sT
          }(Mb.dom, bb) || this.pending) {
          let {
            pos: Mb
          } = Ab[0] || this.pending, Tb = null !== (Ub = null === (ab = Ab[0]) || void 0 === ab ? void 0 : ab.end) && void 0 !== Ub ? Ub : Mb;
          (Mb == Tb ? this.view.posAtCoords(this.lastMove) == Mb : function(bb, ab, Ub, Ab, Mb) {
            let Tb = bb.scrollDOM.getBoundingClientRect(),
              Eb = bb.documentTop + bb.documentPadding.top + bb.contentHeight;
            if (Tb.left > Ab || Tb.right < Ab || Tb.top > Mb || Math.min(Tb.bottom, Eb) < Mb) return !1;
            let Yb = bb.posAtCoords({
              x: Ab,
              y: Mb
            }, !1);
            return Yb >= ab && Yb <= Ub
          }(this.view, Mb, Tb, bb.clientX, bb.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(bb) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: ab
        } = this;
        if (ab.length) {
          let {
            tooltip: ab
          } = this;
          ab && ab.dom.contains(bb.relatedTarget) ? this.watchTooltipLeave(ab.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(bb) {
        let ab = Ub => {
          bb.removeEventListener("mouseleave", ab), this.active.length && !this.view.dom.contains(Ub.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        bb.addEventListener("mouseleave", ab)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const sT = 4;

    function gT(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        Ub = Ab.B.define(),
        Mb = Ab.E.define({
          create: () => [],
          update(bb, Mb) {
            if (bb.length && (ab.hideOnChange && (Mb.docChanged || Mb.selection) ? bb = [] : ab.hideOn && (bb = bb.filter((bb => !ab.hideOn(Mb, bb)))), Mb.docChanged)) {
              let ab = [];
              for (let Ub of bb) {
                let bb = Mb.changes.mapPos(Ub.pos, -1, Ab.t.TrackDel);
                if (null != bb) {
                  let Ab = Object.assign(Object.create(null), Ub);
                  Ab.pos = bb, null != Ab.end && (Ab.end = Mb.changes.mapPos(Ab.end)), ab.push(Ab)
                }
              }
              bb = ab
            }
            for (let ab of Mb.effects) ab.is(Ub) && (bb = ab.value), ab.is(VT) && (bb = []);
            return bb
          },
          provide: bb => oT.from(bb)
        });
      return {
        active: Mb,
        extension: [Mb, ca.define((Ab => new wT(Ab, bb, Mb, Ub, ab.hoverTime || 300))), tT]
      }
    }

    function CT(bb, ab) {
      let Ub = bb.plugin(QT);
      if (!Ub) return null;
      let Ab = Ub.manager.tooltips.indexOf(ab);
      return Ab < 0 ? null : Ub.manager.tooltipViews[Ab]
    }
    const VT = Ab.B.define();
    const OT = Ab.q.define({
      combine(bb) {
        let ab, Ub;
        for (let Ab of bb) ab = ab || Ab.topContainer, Ub = Ub || Ab.bottomContainer;
        return {
          topContainer: ab,
          bottomContainer: Ub
        }
      }
    });

    function cT(bb, ab) {
      let Ub = bb.plugin(JT),
        Ab = Ub ? Ub.specs.indexOf(ab) : -1;
      return Ab > -1 ? Ub.panels[Ab] : null
    }
    const JT = ca.fromClass(class {
      constructor(bb) {
        this.input = bb.state.facet(bE), this.specs = this.input.filter((bb => bb)), this.panels = this.specs.map((ab => ab(bb)));
        let ab = bb.state.facet(OT);
        this.top = new nT(bb, !0, ab.topContainer), this.bottom = new nT(bb, !1, ab.bottomContainer), this.top.sync(this.panels.filter((bb => bb.top))), this.bottom.sync(this.panels.filter((bb => !bb.top)));
        for (let Ub of this.panels) Ub.dom.classList.add("cm-panel"), Ub.mount && Ub.mount()
      }
      update(bb) {
        let ab = bb.state.facet(OT);
        this.top.container != ab.topContainer && (this.top.sync([]), this.top = new nT(bb.view, !0, ab.topContainer)), this.bottom.container != ab.bottomContainer && (this.bottom.sync([]), this.bottom = new nT(bb.view, !1, ab.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let Ub = bb.state.facet(bE);
        if (Ub != this.input) {
          let ab = Ub.filter((bb => bb)),
            Ab = [],
            Mb = [],
            Tb = [],
            Eb = [];
          for (let Ub of ab) {
            let ab, Yb = this.specs.indexOf(Ub);
            Yb < 0 ? (ab = Ub(bb.view), Eb.push(ab)) : (ab = this.panels[Yb], ab.update && ab.update(bb)), Ab.push(ab), (ab.top ? Mb : Tb).push(ab)
          }
          this.specs = ab, this.panels = Ab, this.top.sync(Mb), this.bottom.sync(Tb);
          for (let bb of Eb) bb.dom.classList.add("cm-panel"), bb.mount && bb.mount()
        } else
          for (let Ab of this.panels) Ab.update && Ab.update(bb)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: bb => pM.scrollMargins.of((ab => {
        let Ub = ab.plugin(bb);
        return Ub && {
          top: Ub.top.scrollMargin(),
          bottom: Ub.bottom.scrollMargin()
        }
      }))
    });
    class nT {
      constructor(bb, ab, Ub) {
        this.view = bb, this.top = ab, this.container = Ub, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(bb) {
        for (let ab of this.panels) ab.destroy && bb.indexOf(ab) < 0 && ab.destroy();
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
        for (let ab of this.panels)
          if (ab.dom.parentNode == this.dom) {
            for (; bb != ab.dom;) bb = ST(bb);
            bb = bb.nextSibling
          } else this.dom.insertBefore(ab.dom, bb);
        for (; bb;) bb = ST(bb)
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

    function ST(bb) {
      let ab = bb.nextSibling;
      return bb.remove(), ab
    }
    const bE = Ab.q.define({
      enables: JT
    });

    function aE(bb, ab) {
      let Ub, Mb = new Promise((bb => Ub = bb)),
        Tb = bb => function(bb, ab, Ub) {
          let Ab = ab.content ? ab.content(bb, (() => Eb(null))) : null;
          if (!Ab) {
            if (Ab = (0, Lb.c)("form"), ab.input) {
              let bb = (0, Lb.c)("input", ab.input);
              /^(text|password|number|email|tel|url)$/.test(bb.type) && bb.classList.add("cm-textfield"), bb.name || (bb.name = "input"), Ab.appendChild((0, Lb.c)("label", (ab.label || "") + ": ", bb))
            } else Ab.appendChild(document.createTextNode(ab.label || ""));
            Ab.appendChild(document.createTextNode(" ")), Ab.appendChild((0, Lb.c)("button", {
              class: "cm-button",
              type: "submit"
            }, ab.submitLabel || "OK"))
          }
          let Mb = "FORM" == Ab.nodeName ? [Ab] : Ab.querySelectorAll("form");
          for (let Yb = 0; Yb < Mb.length; Yb++) {
            let bb = Mb[Yb];
            bb.addEventListener("keydown", (ab => {
              27 == ab.keyCode ? (ab.preventDefault(), Eb(null)) : 13 == ab.keyCode && (ab.preventDefault(), Eb(bb))
            })), bb.addEventListener("submit", (ab => {
              ab.preventDefault(), Eb(bb)
            }))
          }
          let Tb = (0, Lb.c)("div", Ab, (0, Lb.c)("button", {
            onclick: () => Eb(null),
            "aria-label": bb.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          ab.class && (Tb.className = ab.class);

          function Eb(ab) {
            Tb.contains(Tb.ownerDocument.activeElement) && bb.focus(), Ub(ab)
          }
          return Tb.classList.add("cm-dialog"), {
            dom: Tb,
            top: ab.top,
            mount: () => {
              if (ab.focus) {
                let bb;
                bb = "string" == typeof ab.focus ? Ab.querySelector(ab.focus) : Ab.querySelector("input") || Ab.querySelector("button"), bb && "select" in bb ? bb.select() : bb && "focus" in bb && bb.focus()
              }
            }
          }
        }(bb, ab, Ub);
      bb.state.field(UE, !1) ? bb.dispatch({
        effects: AE.of(Tb)
      }) : bb.dispatch({
        effects: Ab.B.appendConfig.of(UE.init((() => [Tb])))
      });
      let Eb = ME.of(Tb);
      return {
        close: Eb,
        result: Mb.then((ab => ((bb.win.queueMicrotask || (ab => bb.win.setTimeout(ab, 10)))((() => {
          bb.state.field(UE).indexOf(Tb) > -1 && bb.dispatch({
            effects: Eb
          })
        })), ab)))
      }
    }
    const UE = Ab.E.define({
        create: () => [],
        update(bb, ab) {
          for (let Ub of ab.effects) Ub.is(AE) ? bb = [Ub.value].concat(bb) : Ub.is(ME) && (bb = bb.filter((bb => bb != Ub.value)));
          return bb
        },
        provide: bb => bE.computeN([bb], (ab => ab.field(bb)))
      }),
      AE = Ab.B.define(),
      ME = Ab.B.define();
    class TE extends Ab.z {
      compare(bb) {
        return this == bb || this.constructor == bb.constructor && this.eq(bb)
      }
      eq(bb) {
        return !1
      }
      destroy(bb) {}
    }
    TE.prototype.elementClass = "", TE.prototype.toDOM = void 0, TE.prototype.mapMode = Ab.t.TrackBefore, TE.prototype.startSide = TE.prototype.endSide = -1, TE.prototype.point = !0;
    const EE = Ab.q.define(),
      YE = Ab.q.define(),
      BE = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => Ab.y.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      eE = Ab.q.define();

    function vE(bb) {
      return [PE(), eE.of({
        ...BE,
        ...bb
      })]
    }
    const LE = Ab.q.define({
      combine: bb => bb.some((bb => bb))
    });

    function PE(bb) {
      let ab = [XE];
      return bb && !1 === bb.fixed && ab.push(LE.of(!0)), ab
    }
    const XE = ca.fromClass(class {
      constructor(bb) {
        this.view = bb, this.domAfter = null, this.prevViewport = bb.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = bb.state.facet(eE).map((ab => new yE(bb, ab))), this.fixed = !bb.state.facet(LE);
        for (let ab of this.gutters) "after" == ab.config.side ? this.getDOMAfter().appendChild(ab.dom) : this.dom.appendChild(ab.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), bb.scrollDOM.insertBefore(this.dom, bb.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(bb) {
        if (this.updateGutters(bb)) {
          let ab = this.prevViewport,
            Ub = bb.view.viewport,
            Ab = Math.min(ab.to, Ub.to) - Math.max(ab.from, Ub.from);
          this.syncGutters(Ab < .8 * (Ub.to - Ub.from))
        }
        if (bb.geometryChanged) {
          let bb = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = bb, this.domAfter && (this.domAfter.style.minHeight = bb)
        }
        this.view.state.facet(LE) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = bb.view.viewport
      }
      syncGutters(bb) {
        let ab = this.dom.nextSibling;
        bb && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let Ub = Ab.y.iter(this.view.state.facet(EE), this.view.viewport.from),
          Mb = [],
          Tb = this.gutters.map((bb => new kE(bb, this.view.viewport, -this.view.documentPadding.top)));
        for (let Ab of this.view.viewportLineBlocks)
          if (Mb.length && (Mb = []), Array.isArray(Ab.type)) {
            let bb = !0;
            for (let ab of Ab.type)
              if (ab.type == db.Text && bb) {
                RE(Ub, Mb, ab.from);
                for (let bb of Tb) bb.line(this.view, ab, Mb);
                bb = !1
              } else if (ab.widget)
              for (let bb of Tb) bb.widget(this.view, ab)
          } else if (Ab.type == db.Text) {
          RE(Ub, Mb, Ab.from);
          for (let bb of Tb) bb.line(this.view, Ab, Mb)
        } else if (Ab.widget)
          for (let bb of Tb) bb.widget(this.view, Ab);
        for (let Ab of Tb) Ab.finish();
        bb && (this.view.scrollDOM.insertBefore(this.dom, ab), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(bb) {
        let ab = bb.startState.facet(eE),
          Ub = bb.state.facet(eE),
          Mb = bb.docChanged || bb.heightChanged || bb.viewportChanged || !Ab.y.eq(bb.startState.facet(EE), bb.state.facet(EE), bb.view.viewport.from, bb.view.viewport.to);
        if (ab == Ub)
          for (let Ab of this.gutters) Ab.update(bb) && (Mb = !0);
        else {
          Mb = !0;
          let Ab = [];
          for (let Mb of Ub) {
            let Ub = ab.indexOf(Mb);
            Ub < 0 ? Ab.push(new yE(this.view, Mb)) : (this.gutters[Ub].update(bb), Ab.push(this.gutters[Ub]))
          }
          for (let bb of this.gutters) bb.dom.remove(), Ab.indexOf(bb) < 0 && bb.destroy();
          for (let bb of Ab) "after" == bb.config.side ? this.getDOMAfter().appendChild(bb.dom) : this.dom.appendChild(bb.dom);
          this.gutters = Ab
        }
        return Mb
      }
      destroy() {
        for (let bb of this.gutters) bb.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: bb => pM.scrollMargins.of((ab => {
        let Ub = ab.plugin(bb);
        if (!Ub || 0 == Ub.gutters.length || !Ub.fixed) return null;
        let Ab = Ub.dom.offsetWidth * ab.scaleX,
          Mb = Ub.domAfter ? Ub.domAfter.offsetWidth * ab.scaleX : 0;
        return ab.textDirection == ea.LTR ? {
          left: Ab,
          right: Mb
        } : {
          right: Ab,
          left: Mb
        }
      }))
    });

    function jE(bb) {
      return Array.isArray(bb) ? bb : [bb]
    }

    function RE(bb, ab, Ub) {
      for (; bb.value && bb.from <= Ub;) bb.from == Ub && ab.push(bb.value), bb.next()
    }
    class kE {
      constructor(bb, ab, Ub) {
        this.gutter = bb, this.height = Ub, this.i = 0, this.cursor = Ab.y.iter(bb.markers, ab.from)
      }
      addElement(bb, ab, Ub) {
        let {
          gutter: Ab
        } = this, Mb = (ab.top - this.height) / bb.scaleY, Tb = ab.height / bb.scaleY;
        if (this.i == Ab.elements.length) {
          let ab = new ZE(bb, Tb, Mb, Ub);
          Ab.elements.push(ab), Ab.dom.appendChild(ab.dom)
        } else Ab.elements[this.i].update(bb, Tb, Mb, Ub);
        this.height = ab.bottom, this.i++
      }
      line(bb, ab, Ub) {
        let Ab = [];
        RE(this.cursor, Ab, ab.from), Ub.length && (Ab = Ab.concat(Ub));
        let Mb = this.gutter.config.lineMarker(bb, ab, Ab);
        Mb && Ab.unshift(Mb);
        let Tb = this.gutter;
        (0 != Ab.length || Tb.config.renderEmptyElements) && this.addElement(bb, ab, Ab)
      }
      widget(bb, ab) {
        let Ub = this.gutter.config.widgetMarker(bb, ab.widget, ab),
          Ab = Ub ? [Ub] : null;
        for (let Mb of bb.state.facet(YE)) {
          let Ub = Mb(bb, ab.widget, ab);
          Ub && (Ab || (Ab = [])).push(Ub)
        }
        Ab && this.addElement(bb, ab, Ab)
      }
      finish() {
        let bb = this.gutter;
        for (; bb.elements.length > this.i;) {
          let ab = bb.elements.pop();
          bb.dom.removeChild(ab.dom), ab.destroy()
        }
      }
    }
    class yE {
      constructor(bb, ab) {
        this.view = bb, this.config = ab, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let Ub in ab.domEventHandlers) this.dom.addEventListener(Ub, (Ab => {
          let Mb, Tb = Ab.target;
          if (Tb != this.dom && this.dom.contains(Tb)) {
            for (; Tb.parentNode != this.dom;) Tb = Tb.parentNode;
            let bb = Tb.getBoundingClientRect();
            Mb = (bb.top + bb.bottom) / 2
          } else Mb = Ab.clientY;
          let Eb = bb.lineBlockAtHeight(Mb - bb.documentTop);
          ab.domEventHandlers[Ub](bb, Eb, Ab) && Ab.preventDefault()
        }));
        this.markers = jE(ab.markers(bb)), ab.initialSpacer && (this.spacer = new ZE(bb, 0, 0, [ab.initialSpacer(bb)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(bb) {
        let ab = this.markers;
        if (this.markers = jE(this.config.markers(bb.view)), this.spacer && this.config.updateSpacer) {
          let ab = this.config.updateSpacer(this.spacer.markers[0], bb);
          ab != this.spacer.markers[0] && this.spacer.update(bb.view, 0, 0, [ab])
        }
        let Ub = bb.view.viewport;
        return !Ab.y.eq(this.markers, ab, Ub.from, Ub.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(bb)
      }
      destroy() {
        for (let bb of this.elements) bb.destroy()
      }
    }
    class ZE {
      constructor(bb, ab, Ub, Ab) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(bb, ab, Ub, Ab)
      }
      update(bb, ab, Ub, Ab) {
        this.height != ab && (this.height = ab, this.dom.style.height = ab + "px"), this.above != Ub && (this.dom.style.marginTop = (this.above = Ub) ? Ub + "px" : ""),
          function(bb, ab) {
            if (bb.length != ab.length) return !1;
            for (let Ub = 0; Ub < bb.length; Ub++)
              if (!bb[Ub].compare(ab[Ub])) return !1;
            return !0
          }(this.markers, Ab) || this.setMarkers(bb, Ab)
      }
      setMarkers(bb, ab) {
        let Ub = "cm-gutterElement",
          Ab = this.dom.firstChild;
        for (let Mb = 0, Tb = 0;;) {
          let Eb = Tb,
            Yb = Mb < ab.length ? ab[Mb++] : null,
            Bb = !1;
          if (Yb) {
            let bb = Yb.elementClass;
            bb && (Ub += " " + bb);
            for (let ab = Tb; ab < this.markers.length; ab++)
              if (this.markers[ab].compare(Yb)) {
                Eb = ab, Bb = !0;
                break
              }
          } else Eb = this.markers.length;
          for (; Tb < Eb;) {
            let bb = this.markers[Tb++];
            if (bb.toDOM) {
              bb.destroy(Ab);
              let ab = Ab.nextSibling;
              Ab.remove(), Ab = ab
            }
          }
          if (!Yb) break;
          Yb.toDOM && (Bb ? Ab = Ab.nextSibling : this.dom.insertBefore(Yb.toDOM(bb), Ab)), Bb && Tb++
        }
        this.dom.className = Ub, this.markers = ab
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const DE = Ab.q.define(),
      zE = Ab.q.define(),
      xE = Ab.q.define({
        combine: bb => (0, Ab.O)(bb, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(bb, ab) {
            let Ub = Object.assign({}, bb);
            for (let Ab in ab) {
              let bb = Ub[Ab],
                Mb = ab[Ab];
              Ub[Ab] = bb ? (ab, Ub, Ab) => bb(ab, Ub, Ab) || Mb(ab, Ub, Ab) : Mb
            }
            return Ub
          }
        })
      });
    class iE extends TE {
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

    function fE(bb, ab) {
      return bb.state.facet(xE).formatNumber(ab, bb.state)
    }
    const mE = eE.compute([xE], (bb => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: bb => bb.state.facet(DE),
      lineMarker: (bb, ab, Ub) => Ub.some((bb => bb.toDOM)) ? null : new iE(fE(bb, bb.state.doc.lineAt(ab.from).number)),
      widgetMarker: (bb, ab, Ub) => {
        for (let Ab of bb.state.facet(zE)) {
          let Mb = Ab(bb, ab, Ub);
          if (Mb) return Mb
        }
        return null
      },
      lineMarkerChange: bb => bb.startState.facet(xE) != bb.state.facet(xE),
      initialSpacer: bb => new iE(fE(bb, NE(bb.state.doc.lines))),
      updateSpacer(bb, ab) {
        let Ub = fE(ab.view, NE(ab.view.state.doc.lines));
        return Ub == bb.number ? bb : new iE(Ub)
      },
      domEventHandlers: bb.facet(xE).domEventHandlers,
      side: "before"
    })));

    function pE() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [xE.of(bb), PE(), mE]
    }

    function NE(bb) {
      let ab = 9;
      for (; ab < bb;) ab = 10 * ab + 9;
      return ab
    }
    const WE = new class extends TE {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      HE = EE.compute(["selection"], (bb => {
        let ab = [],
          Ub = -1;
        for (let Ab of bb.selection.cj) {
          let Mb = bb.doc.lineAt(Ab.head).from;
          Mb > Ub && (Ub = Mb, ab.push(WE.range(Mb)))
        }
        return Ab.y.of(ab)
      }));

    function IE() {
      return HE
    }
  },
  40440: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Ab,
      g: () => Xb,
      k: () => Eb,
      o: () => vb,
      s: () => eb,
      t: () => hb,
      v: () => Qb,
      w: () => Gb,
      z: () => jb
    });
    const Ab = 1024;
    let Mb = 0;
    class Tb {
      constructor(bb, ab) {
        this.from = bb, this.to = ab
      }
    }
    class Eb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = Mb++, this.perNode = !!bb.perNode, this.deserialize = bb.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = bb.combine || null
      }
      add(bb) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof bb && (bb = eb.match(bb)), ab => {
          let Ub = bb(ab);
          return void 0 === Ub ? null : [this, Ub]
        }
      }
    }
    Eb.closedBy = new Eb({
      deserialize: bb => bb.split(" ")
    }), Eb.openedBy = new Eb({
      deserialize: bb => bb.split(" ")
    }), Eb.group = new Eb({
      deserialize: bb => bb.split(" ")
    }), Eb.isolate = new Eb({
      deserialize: bb => {
        if (bb && "rtl" != bb && "ltr" != bb && "auto" != bb) throw new RangeError("Invalid value for isolate: " + bb);
        return bb || "auto"
      }
    }), Eb.contextHash = new Eb({
      perNode: !0
    }), Eb.lookAhead = new Eb({
      perNode: !0
    }), Eb.mounted = new Eb({
      perNode: !0
    });
    class Yb {
      constructor(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = bb, this.overlay = ab, this.parser = Ub, this.bracketed = Ab
      }
      static get(bb) {
        return bb && bb.props && bb.props[Eb.mounted.id]
      }
    }
    const Bb = Object.create(null);
    class eb {
      constructor(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = bb, this.props = ab, this.id = Ub, this.flags = Ab
      }
      static define(bb) {
        let ab = bb.props && bb.props.length ? Object.create(null) : Bb,
          Ub = (bb.top ? 1 : 0) | (bb.skipped ? 2 : 0) | (bb.error ? 4 : 0) | (null == bb.name ? 8 : 0),
          Ab = new eb(bb.name || "", ab, bb.id, Ub);
        if (bb.props)
          for (let Mb of bb.props)
            if (Array.isArray(Mb) || (Mb = Mb(Ab)), Mb) {
              if (Mb[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              ab[Mb[0].id] = Mb[1]
            } return Ab
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
          let ab = this.prop(Eb.group);
          return !!ab && ab.indexOf(bb) > -1
        }
        return this.id == bb
      }
      static match(bb) {
        let ab = Object.create(null);
        for (let Ub in bb)
          for (let Ab of Ub.split(" ")) ab[Ab] = bb[Ub];
        return bb => {
          for (let Ub = bb.prop(Eb.group), Ab = -1; Ab < (Ub ? Ub.length : 0); Ab++) {
            let Mb = ab[Ab < 0 ? bb.name : Ub[Ab]];
            if (Mb) return Mb
          }
        }
      }
    }
    eb.none = new eb("", Object.create(null), 0, 8);
    class vb {
      constructor(bb) {
        this.types = bb;
        for (let ab = 0; ab < bb.length; ab++)
          if (bb[ab].id != ab) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let bb = [];
        for (var ab = arguments.length, Ub = new Array(ab), Ab = 0; Ab < ab; Ab++) Ub[Ab] = arguments[Ab];
        for (let Mb of this.types) {
          let ab = null;
          for (let bb of Ub) {
            let Ub = bb(Mb);
            if (Ub) {
              ab || (ab = Object.assign({}, Mb.props));
              let bb = Ub[1],
                Ab = Ub[0];
              Ab.combine && Ab.id in ab && (bb = Ab.combine(ab[Ab.id], bb)), ab[Ab.id] = bb
            }
          }
          bb.push(ab ? new eb(Mb.name, ab, Mb.id, Mb.flags) : Mb)
        }
        return new vb(bb)
      }
    }
    const Lb = new WeakMap,
      Pb = new WeakMap;
    var Xb;
    ! function(bb) {
      bb[bb.ExcludeBuffers = 1] = "ExcludeBuffers", bb[bb.IncludeAnonymous = 2] = "IncludeAnonymous", bb[bb.IgnoreMounts = 4] = "IgnoreMounts", bb[bb.IgnoreOverlays = 8] = "IgnoreOverlays", bb[bb.EnterBracketed = 16] = "EnterBracketed"
    }(Xb || (Xb = {}));
    class jb {
      constructor(bb, ab, Ub, Ab, Mb) {
        if (this.type = bb, this.children = ab, this.positions = Ub, this.length = Ab, this.props = null, Mb && Mb.length) {
          this.props = Object.create(null);
          for (let [bb, ab] of Mb) this.props["number" == typeof bb ? bb : bb.id] = ab
        }
      }
      toString() {
        let bb = Yb.get(this);
        if (bb && !bb.overlay) return bb.tree.toString();
        let ab = "";
        for (let Ub of this.children) {
          let bb = Ub.toString();
          bb && (ab && (ab += ","), ab += bb)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (ab.length ? "(" + ab + ")" : "") : ab
      }
      cursor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new Wb(this.topNode, bb)
      }
      cursorAt(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ub = Lb.get(this) || this.topNode,
          Ab = new Wb(Ub);
        return Ab.moveTo(bb, ab), Lb.set(this, Ab._tree), Ab
      }
      get topNode() {
        return new zb(this, 0, 0, null)
      }
      resolve(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ub = Zb(Lb.get(this) || this.topNode, bb, ab, !1);
        return Lb.set(this, Ub), Ub
      }
      resolveInner(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ub = Zb(Pb.get(this) || this.topNode, bb, ab, !0);
        return Pb.set(this, Ub), Ub
      }
      resolveStack(bb) {
        return function(bb, ab, Ub) {
          let Ab = bb.resolveInner(ab, Ub),
            Mb = null;
          for (let Tb = Ab instanceof zb ? Ab : Ab.context.parent; Tb; Tb = Tb.parent)
            if (Tb.index < 0) {
              let bb = Tb.parent;
              (Mb || (Mb = [Ab])).push(bb.resolve(ab, Ub)), Tb = bb
            } else {
              let bb = Yb.get(Tb.tree);
              if (bb && bb.overlay && bb.overlay[0].from <= ab && bb.overlay[bb.overlay.length - 1].to >= ab) {
                let Eb = new zb(bb.tree, bb.overlay[0].from + Tb.from, -1, Tb);
                (Mb || (Mb = [Ab])).push(Zb(Eb, ab, Ub, !1))
              }
            } return Mb ? pb(Mb) : Ab
        }(this, bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(bb) {
        let {
          enter: ab,
          leave: Ub,
          from: Ab = 0,
          to: Mb = this.length
        } = bb, Tb = bb.mode || 0, Eb = (Tb & Xb.IncludeAnonymous) > 0;
        for (let Yb = this.cursor(Tb | Xb.IncludeAnonymous);;) {
          let bb = !1;
          if (Yb.from <= Mb && Yb.to >= Ab && (!Eb && Yb.type.isAnonymous || !1 !== ab(Yb))) {
            if (Yb.firstChild()) continue;
            bb = !0
          }
          for (; bb && Ub && (Eb || !Yb.type.isAnonymous) && Ub(Yb), !Yb.nextSibling();) {
            if (!Yb.parent()) return;
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
          for (let ab in this.props) bb.push([+ab, this.props[ab]]);
        return bb
      }
      balance() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : Fb(eb.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((bb, ab, Ub) => new jb(this.type, bb, ab, Ub, this.propValues)), bb.makeTree || ((bb, ab, Ub) => new jb(eb.none, bb, ab, Ub)))
      }
      static build(bb) {
        return function(bb) {
          var ab;
          let {
            buffer: Ub,
            nodeSet: Mb,
            maxBufferLength: Tb = Ab,
            reused: Yb = [],
            minRepeatType: Bb = Mb.types.length
          } = bb, eb = Array.isArray(Ub) ? new Rb(Ub, Ub.length) : Ub, vb = Mb.types, Lb = 0, Pb = 0;

          function Xb(bb, ab, Ub, Ab, Eb, jb) {
            let {
              id: Rb,
              start: fb,
              end: mb,
              size: pb
            } = eb, Nb = Pb, Wb = Lb;
            if (pb < 0) {
              if (eb.next(), -1 == pb) {
                let ab = Yb[Rb];
                return Ub.push(ab), void Ab.push(fb - bb)
              }
              if (-3 == pb) return void(Lb = Rb);
              if (-4 == pb) return void(Pb = Rb);
              throw new RangeError(`Unrecognized record size: ${pb}`)
            }
            let Hb, Ib, db = vb[Rb],
              hb = fb - bb;
            if (mb - fb <= Tb && (Ib = xb(eb.pos - ab, Eb))) {
              let ab = new Uint16Array(Ib.size - Ib.skip),
                Ub = eb.pos - Ib.size,
                Ab = ab.length;
              for (; eb.pos > Ub;) Ab = ib(Ib.start, ab, Ab);
              Hb = new kb(ab, mb - Ib.start, Mb), hb = Ib.start - bb
            } else {
              let bb = eb.pos - pb;
              eb.next();
              let ab = [],
                Ub = [],
                Ab = Rb >= Bb ? Rb : -1,
                Mb = 0,
                Eb = mb;
              for (; eb.pos > bb;) Ab >= 0 && eb.id == Ab && eb.size >= 0 ? (eb.end <= Eb - Tb && (Db(ab, Ub, fb, Mb, eb.end, Eb, Ab, Nb, Wb), Mb = ab.length, Eb = eb.end), eb.next()) : jb > 2500 ? yb(fb, bb, ab, Ub) : Xb(fb, bb, ab, Ub, Ab, jb + 1);
              if (Ab >= 0 && Mb > 0 && Mb < ab.length && Db(ab, Ub, fb, Mb, fb, Eb, Ab, Nb, Wb), ab.reverse(), Ub.reverse(), Ab > -1 && Mb > 0) {
                let bb = Zb(db, Wb);
                Hb = Fb(db, ab, Ub, 0, ab.length, 0, mb - fb, bb, bb)
              } else Hb = zb(db, ab, Ub, mb - fb, Nb - mb, Wb)
            }
            Ub.push(Hb), Ab.push(hb)
          }

          function yb(bb, ab, Ub, Ab) {
            let Eb = [],
              Yb = 0,
              Bb = -1;
            for (; eb.pos > ab;) {
              let {
                id: bb,
                start: ab,
                end: Ub,
                size: Ab
              } = eb;
              if (Ab > 4) eb.next();
              else {
                if (Bb > -1 && ab < Bb) break;
                Bb < 0 && (Bb = Ub - Tb), Eb.push(bb, ab, Ub), Yb++, eb.next()
              }
            }
            if (Yb) {
              let ab = new Uint16Array(4 * Yb),
                Tb = Eb[Eb.length - 2];
              for (let bb = Eb.length - 3, Ub = 0; bb >= 0; bb -= 3) ab[Ub++] = Eb[bb], ab[Ub++] = Eb[bb + 1] - Tb, ab[Ub++] = Eb[bb + 2] - Tb, ab[Ub++] = Ub;
              Ub.push(new kb(ab, Eb[2] - Tb, Mb)), Ab.push(Tb - bb)
            }
          }

          function Zb(bb, ab) {
            return (Ub, Ab, Mb) => {
              let Tb, Yb, Bb = 0,
                eb = Ub.length - 1;
              if (eb >= 0 && (Tb = Ub[eb]) instanceof jb) {
                if (!eb && Tb.type == bb && Tb.length == Mb) return Tb;
                (Yb = Tb.prop(Eb.lookAhead)) && (Bb = Ab[eb] + Tb.length + Yb)
              }
              return zb(bb, Ub, Ab, Mb, Bb, ab)
            }
          }

          function Db(bb, ab, Ub, Ab, Tb, Eb, Yb, Bb, eb) {
            let vb = [],
              Lb = [];
            for (; bb.length > Ab;) vb.push(bb.pop()), Lb.push(ab.pop() + Ub - Tb);
            bb.push(zb(Mb.types[Yb], vb, Lb, Eb - Tb, Bb - Eb, eb)), ab.push(Tb - Ub)
          }

          function zb(bb, ab, Ub, Ab, Mb, Tb, Yb) {
            if (Tb) {
              let bb = [Eb.contextHash, Tb];
              Yb = Yb ? [bb].concat(Yb) : [bb]
            }
            if (Mb > 25) {
              let bb = [Eb.lookAhead, Mb];
              Yb = Yb ? [bb].concat(Yb) : [bb]
            }
            return new jb(bb, ab, Ub, Ab, Yb)
          }

          function xb(bb, ab) {
            let Ub = eb.fork(),
              Ab = 0,
              Mb = 0,
              Eb = 0,
              Yb = Ub.end - Tb,
              vb = {
                size: 0,
                start: 0,
                skip: 0
              };
            bb: for (let Tb = Ub.pos - bb; Ub.pos > Tb;) {
              let bb = Ub.size;
              if (Ub.id == ab && bb >= 0) {
                vb.size = Ab, vb.start = Mb, vb.skip = Eb, Eb += 4, Ab += 4, Ub.next();
                continue
              }
              let eb = Ub.pos - bb;
              if (bb < 0 || eb < Tb || Ub.start < Yb) break;
              let Lb = Ub.id >= Bb ? 4 : 0,
                Pb = Ub.start;
              for (Ub.next(); Ub.pos > eb;) {
                if (Ub.size < 0) {
                  if (-3 != Ub.size && -4 != Ub.size) break bb;
                  Lb += 4
                } else Ub.id >= Bb && (Lb += 4);
                Ub.next()
              }
              Mb = Pb, Ab += bb, Eb += Lb
            }
            return (ab < 0 || Ab == bb) && (vb.size = Ab, vb.start = Mb, vb.skip = Eb), vb.size > 4 ? vb : void 0
          }

          function ib(bb, ab, Ub) {
            let {
              id: Ab,
              start: Mb,
              end: Tb,
              size: Eb
            } = eb;
            if (eb.next(), Eb >= 0 && Ab < Bb) {
              let Yb = Ub;
              if (Eb > 4) {
                let Ab = eb.pos - (Eb - 4);
                for (; eb.pos > Ab;) Ub = ib(bb, ab, Ub)
              }
              ab[--Ub] = Yb, ab[--Ub] = Tb - bb, ab[--Ub] = Mb - bb, ab[--Ub] = Ab
            } else - 3 == Eb ? Lb = Ab : -4 == Eb && (Pb = Ab);
            return Ub
          }
          let fb = [],
            mb = [];
          for (; eb.pos > 0;) Xb(bb.start || 0, bb.bufferStart || 0, fb, mb, -1, 0);
          let pb = null !== (ab = bb.length) && void 0 !== ab ? ab : fb.length ? mb[0] + fb[0].length : 0;
          return new jb(vb[bb.topID], fb.reverse(), mb.reverse(), pb)
        }(bb)
      }
    }
    jb.empty = new jb(eb.none, [], [], 0);
    class Rb {
      constructor(bb, ab) {
        this.buffer = bb, this.index = ab
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
        return new Rb(this.buffer, this.index)
      }
    }
    class kb {
      constructor(bb, ab, Ub) {
        this.buffer = bb, this.length = ab, this.set = Ub
      }
      get type() {
        return eb.none
      }
      toString() {
        let bb = [];
        for (let ab = 0; ab < this.buffer.length;) bb.push(this.childString(ab)), ab = this.buffer[ab + 3];
        return bb.join(",")
      }
      childString(bb) {
        let ab = this.buffer[bb],
          Ub = this.buffer[bb + 3],
          Ab = this.set.types[ab],
          Mb = Ab.name;
        if (/\W/.test(Mb) && !Ab.isError && (Mb = JSON.stringify(Mb)), Ub == (bb += 4)) return Mb;
        let Tb = [];
        for (; bb < Ub;) Tb.push(this.childString(bb)), bb = this.buffer[bb + 3];
        return Mb + "(" + Tb.join(",") + ")"
      }
      findChild(bb, ab, Ub, Ab, Mb) {
        let {
          buffer: Tb
        } = this, Eb = -1;
        for (let Yb = bb; Yb != ab && !(yb(Mb, Ab, Tb[Yb + 1], Tb[Yb + 2]) && (Eb = Yb, Ub > 0)); Yb = Tb[Yb + 3]);
        return Eb
      }
      slice(bb, ab, Ub) {
        let Ab = this.buffer,
          Mb = new Uint16Array(ab - bb),
          Tb = 0;
        for (let Eb = bb, Yb = 0; Eb < ab;) {
          Mb[Yb++] = Ab[Eb++], Mb[Yb++] = Ab[Eb++] - Ub;
          let ab = Mb[Yb++] = Ab[Eb++] - Ub;
          Mb[Yb++] = Ab[Eb++] - bb, Tb = Math.max(Tb, ab)
        }
        return new kb(Mb, Tb, this.set)
      }
    }

    function yb(bb, ab, Ub, Ab) {
      switch (bb) {
        case -2:
          return Ub < ab;
        case -1:
          return Ab >= ab && Ub < ab;
        case 0:
          return Ub < ab && Ab > ab;
        case 1:
          return Ub <= ab && Ab > ab;
        case 2:
          return Ab > ab;
        case 4:
          return !0
      }
    }

    function Zb(bb, ab, Ub, Ab) {
      for (var Mb; bb.from == bb.to || (Ub < 1 ? bb.from >= ab : bb.from > ab) || (Ub > -1 ? bb.to <= ab : bb.to < ab);) {
        let ab = !Ab && bb instanceof zb && bb.index < 0 ? null : bb.parent;
        if (!ab) return bb;
        bb = ab
      }
      let Tb = Ab ? 0 : Xb.IgnoreOverlays;
      if (Ab)
        for (let Eb = bb, Yb = Eb.parent; Yb; Eb = Yb, Yb = Eb.parent) Eb instanceof zb && Eb.index < 0 && (null === (Mb = Yb.enter(ab, Ub, Tb)) || void 0 === Mb ? void 0 : Mb.from) != Eb.from && (bb = Yb);
      for (;;) {
        let Ab = bb.enter(ab, Ub, Tb);
        if (!Ab) return bb;
        bb = Ab
      }
    }
    class Db {
      cursor() {
        return new Wb(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(bb) {
        let ab = xb(this, bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return ab.length ? ab[0] : null
      }
      getChildren(bb) {
        return xb(this, bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(bb) {
        return Zb(this, bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(bb) {
        return Zb(this, bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(bb) {
        return ib(this.parent, bb)
      }
      enterUnfinishedNodesBefore(bb) {
        let ab = this.childBefore(bb),
          Ub = this;
        for (; ab;) {
          let bb = ab.lastChild;
          if (!bb || bb.to != ab.to) break;
          bb.type.isError && bb.from == bb.to ? (Ub = ab, ab = bb.prevSibling) : ab = bb
        }
        return Ub
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class zb extends Db {
      constructor(bb, ab, Ub, Ab) {
        super(), this._tree = bb, this.from = ab, this.index = Ub, this._parent = Ab
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
      nextChild(bb, ab, Ub, Ab) {
        let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let Tb = this;;) {
          for (let {
              children: Eb,
              positions: Bb
            } = Tb._tree, eb = ab > 0 ? Eb.length : -1; bb != eb; bb += ab) {
            let eb, vb = Eb[bb],
              Lb = Bb[bb] + Tb.from;
            if (Mb & Xb.EnterBracketed && vb instanceof jb && (eb = Yb.get(vb)) && !eb.overlay && eb.bracketed && Ub >= Lb && Ub <= Lb + vb.length || yb(Ab, Ub, Lb, Lb + vb.length))
              if (vb instanceof kb) {
                if (Mb & Xb.ExcludeBuffers) continue;
                let Eb = vb.findChild(0, vb.buffer.length, ab, Ub - Lb, Ab);
                if (Eb > -1) return new mb(new fb(Tb, vb, bb, Lb), null, Eb)
              } else if (Mb & Xb.IncludeAnonymous || !vb.type.isAnonymous || Hb(vb)) {
              let Eb;
              if (!(Mb & Xb.IgnoreMounts) && (Eb = Yb.get(vb)) && !Eb.overlay) return new zb(Eb.tree, Lb, bb, Tb);
              let Bb = new zb(vb, Lb, bb, Tb);
              return Mb & Xb.IncludeAnonymous || !Bb.type.isAnonymous ? Bb : Bb.nextChild(ab < 0 ? vb.children.length - 1 : 0, ab, Ub, Ab, Mb)
            }
          }
          if (Mb & Xb.IncludeAnonymous || !Tb.type.isAnonymous) return null;
          if (bb = Tb.index >= 0 ? Tb.index + ab : ab < 0 ? -1 : Tb._parent._tree.children.length, Tb = Tb._parent, !Tb) return null
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
      enter(bb, ab) {
        let Ub, Ab = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(Ab & Xb.IgnoreOverlays) && (Ub = Yb.get(this._tree)) && Ub.overlay) {
          let Mb = bb - this.from,
            Tb = Ab & Xb.EnterBracketed && Ub.bracketed;
          for (let {
              from: bb,
              to: Ab
            }
            of Ub.overlay)
            if ((ab > 0 || Tb ? bb <= Mb : bb < Mb) && (ab < 0 || Tb ? Ab >= Mb : Ab > Mb)) return new zb(Ub.tree, Ub.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, bb, ab, Ab)
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

    function xb(bb, ab, Ub, Ab) {
      let Mb = bb.cursor(),
        Tb = [];
      if (!Mb.firstChild()) return Tb;
      if (null != Ub)
        for (let Eb = !1; !Eb;)
          if (Eb = Mb.type.is(Ub), !Mb.nextSibling()) return Tb;
      for (;;) {
        if (null != Ab && Mb.type.is(Ab)) return Tb;
        if (Mb.type.is(ab) && Tb.push(Mb.node), !Mb.nextSibling()) return null == Ab ? Tb : []
      }
    }

    function ib(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ab.length - 1;
      for (let Ab = bb; Ub >= 0; Ab = Ab.parent) {
        if (!Ab) return !1;
        if (!Ab.type.isAnonymous) {
          if (ab[Ub] && ab[Ub] != Ab.name) return !1;
          Ub--
        }
      }
      return !0
    }
    class fb {
      constructor(bb, ab, Ub, Ab) {
        this.parent = bb, this.buffer = ab, this.index = Ub, this.start = Ab
      }
    }
    class mb extends Db {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(bb, ab, Ub) {
        super(), this.context = bb, this._parent = ab, this.index = Ub, this.type = bb.buffer.set.types[bb.buffer.buffer[Ub]]
      }
      child(bb, ab, Ub) {
        let {
          buffer: Ab
        } = this.context, Mb = Ab.findChild(this.index + 4, Ab.buffer[this.index + 3], bb, ab - this.context.start, Ub);
        return Mb < 0 ? null : new mb(this.context, this, Mb)
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
      enter(bb, ab) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & Xb.ExcludeBuffers) return null;
        let {
          buffer: Ub
        } = this.context, Ab = Ub.findChild(this.index + 4, Ub.buffer[this.index + 3], ab > 0 ? 1 : -1, bb - this.context.start, ab);
        return Ab < 0 ? null : new mb(this.context, this, Ab)
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
        } = this.context, ab = bb.buffer[this.index + 3];
        return ab < (this._parent ? bb.buffer[this._parent.index + 3] : bb.buffer.length) ? new mb(this.context, this._parent, ab) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: bb
        } = this.context, ab = this._parent ? this._parent.index + 4 : 0;
        return this.index == ab ? this.externalSibling(-1) : new mb(this.context, this._parent, bb.findChild(ab, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let bb = [],
          ab = [],
          {
            buffer: Ub
          } = this.context,
          Ab = this.index + 4,
          Mb = Ub.buffer[this.index + 3];
        if (Mb > Ab) {
          let Tb = Ub.buffer[this.index + 1];
          bb.push(Ub.slice(Ab, Mb, Tb)), ab.push(0)
        }
        return new jb(this.type, bb, ab, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function pb(bb) {
      if (!bb.length) return null;
      let ab = 0,
        Ub = bb[0];
      for (let Tb = 1; Tb < bb.length; Tb++) {
        let Ab = bb[Tb];
        (Ab.from > Ub.from || Ab.to < Ub.to) && (Ub = Ab, ab = Tb)
      }
      let Ab = Ub instanceof zb && Ub.index < 0 ? null : Ub.parent,
        Mb = bb.slice();
      return Ab ? Mb[ab] = Ab : Mb.splice(ab, 1), new Nb(Mb, Ub)
    }
    class Nb {
      constructor(bb, ab) {
        this.heads = bb, this.node = ab
      }
      get next() {
        return pb(this.heads)
      }
    }
    class Wb {
      get name() {
        return this.type.name
      }
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = ab & ~Xb.EnterBracketed, bb instanceof zb) this.yieldNode(bb);
        else {
          this._tree = bb.context.parent, this.buffer = bb.context;
          for (let ab = bb._parent; ab; ab = ab._parent) this.stack.unshift(ab.index);
          this.bufferNode = bb, this.yieldBuf(bb.index)
        }
      }
      yieldNode(bb) {
        return !!bb && (this._tree = bb, this.type = bb.type, this.from = bb.from, this.to = bb.to, !0)
      }
      yieldBuf(bb, ab) {
        this.index = bb;
        let {
          start: Ub,
          buffer: Ab
        } = this.buffer;
        return this.type = ab || Ab.set.types[Ab.buffer[bb]], this.from = Ub + Ab.buffer[bb + 1], this.to = Ub + Ab.buffer[bb + 2], !0
      }
      yield(bb) {
        return !!bb && (bb instanceof zb ? (this.buffer = null, this.yieldNode(bb)) : (this.buffer = bb.context, this.yieldBuf(bb.index, bb.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(bb, ab, Ub) {
        if (!this.buffer) return this.yield(this._tree.nextChild(bb < 0 ? this._tree._tree.children.length - 1 : 0, bb, ab, Ub, this.mode));
        let {
          buffer: Ab
        } = this.buffer, Mb = Ab.findChild(this.index + 4, Ab.buffer[this.index + 3], bb, ab - this.buffer.start, Ub);
        return !(Mb < 0) && (this.stack.push(this.index), this.yieldBuf(Mb))
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
      enter(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(Ub & Xb.ExcludeBuffers) && this.enterChild(1, bb, ab) : this.yield(this._tree.enter(bb, ab, Ub))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & Xb.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let bb = this.mode & Xb.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(bb)
      }
      sibling(bb) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + bb, bb, 0, 4, this.mode));
        let {
          buffer: ab
        } = this.buffer, Ub = this.stack.length - 1;
        if (bb < 0) {
          let bb = Ub < 0 ? 0 : this.stack[Ub] + 4;
          if (this.index != bb) return this.yieldBuf(ab.findChild(bb, this.index, -1, 0, 4))
        } else {
          let bb = ab.buffer[this.index + 3];
          if (bb < (Ub < 0 ? ab.buffer.length : ab.buffer[this.stack[Ub] + 3])) return this.yieldBuf(bb)
        }
        return Ub < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + bb, bb, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(bb) {
        let ab, Ub, {
          buffer: Ab
        } = this;
        if (Ab) {
          if (bb > 0) {
            if (this.index < Ab.buffer.buffer.length) return !1
          } else
            for (let bb = 0; bb < this.index; bb++)
              if (Ab.buffer.buffer[bb + 3] < this.index) return !1;
          ({
            index: ab,
            parent: Ub
          } = Ab)
        } else({
          index: ab,
          _parent: Ub
        } = this._tree);
        for (; Ub;
          ({
            index: ab,
            _parent: Ub
          } = Ub))
          if (ab > -1)
            for (let Ab = ab + bb, Mb = bb < 0 ? -1 : Ub._tree.children.length; Ab != Mb; Ab += bb) {
              let bb = Ub._tree.children[Ab];
              if (this.mode & Xb.IncludeAnonymous || bb instanceof kb || !bb.type.isAnonymous || Hb(bb)) return !1
            }
        return !0
      }
      move(bb, ab) {
        if (ab && this.enterChild(bb, 0, 4)) return !0;
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
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (ab < 1 ? this.from >= bb : this.from > bb) || (ab > -1 ? this.to <= bb : this.to < bb)) && this.parent(););
        for (; this.enterChild(1, bb, ab););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let bb = this.bufferNode,
          ab = null,
          Ub = 0;
        if (bb && bb.context == this.buffer) bb: for (let Ab = this.index, Mb = this.stack.length; Mb >= 0;) {
          for (let Tb = bb; Tb; Tb = Tb._parent)
            if (Tb.index == Ab) {
              if (Ab == this.index) return Tb;
              ab = Tb, Ub = Mb + 1;
              break bb
            } Ab = this.stack[--Mb]
        }
        for (let Ab = Ub; Ab < this.stack.length; Ab++) ab = new mb(this.buffer, ab, this.stack[Ab]);
        return this.bufferNode = new mb(this.buffer, ab, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(bb, ab) {
        for (let Ub = 0;;) {
          let Ab = !1;
          if (this.type.isAnonymous || !1 !== bb(this)) {
            if (this.firstChild()) {
              Ub++;
              continue
            }
            this.type.isAnonymous || (Ab = !0)
          }
          for (;;) {
            if (Ab && ab && ab(this), Ab = this.type.isAnonymous, !Ub) return;
            if (this.nextSibling()) break;
            this.parent(), Ub--, Ab = !0
          }
        }
      }
      matchContext(bb) {
        if (!this.buffer) return ib(this.node.parent, bb);
        let {
          buffer: ab
        } = this.buffer, {
          types: Ub
        } = ab.set;
        for (let Ab = bb.length - 1, Mb = this.stack.length - 1; Ab >= 0; Mb--) {
          if (Mb < 0) return ib(this._tree, bb, Ab);
          let Tb = Ub[ab.buffer[this.stack[Mb]]];
          if (!Tb.isAnonymous) {
            if (bb[Ab] && bb[Ab] != Tb.name) return !1;
            Ab--
          }
        }
        return !0
      }
    }

    function Hb(bb) {
      return bb.children.some((bb => bb instanceof kb || !bb.type.isAnonymous || Hb(bb)))
    }
    const Ib = new WeakMap;

    function db(bb, ab) {
      if (!bb.isAnonymous || ab instanceof kb || ab.type != bb) return 1;
      let Ub = Ib.get(ab);
      if (null == Ub) {
        Ub = 1;
        for (let Ab of ab.children) {
          if (Ab.type != bb || !(Ab instanceof jb)) {
            Ub = 1;
            break
          }
          Ub += db(bb, Ab)
        }
        Ib.set(ab, Ub)
      }
      return Ub
    }

    function Fb(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb) {
      let eb = 0;
      for (let Xb = Ab; Xb < Mb; Xb++) eb += db(bb, ab[Xb]);
      let vb = Math.ceil(1.5 * eb / 8),
        Lb = [],
        Pb = [];
      return function ab(Ub, Ab, Mb, Eb, Yb) {
        for (let eb = Mb; eb < Eb;) {
          let Mb = eb,
            Xb = Ab[eb],
            jb = db(bb, Ub[eb]);
          for (eb++; eb < Eb; eb++) {
            let ab = db(bb, Ub[eb]);
            if (jb + ab >= vb) break;
            jb += ab
          }
          if (eb == Mb + 1) {
            if (jb > vb) {
              let bb = Ub[Mb];
              ab(bb.children, bb.positions, 0, bb.children.length, Ab[Mb] + Yb);
              continue
            }
            Lb.push(Ub[Mb])
          } else {
            let ab = Ab[eb - 1] + Ub[eb - 1].length - Xb;
            Lb.push(Fb(bb, Ub, Ab, Mb, eb, Xb, ab, null, Bb))
          }
          Pb.push(Xb + Yb - Tb)
        }
      }(ab, Ub, Ab, Mb, 0), (Yb || Bb)(Lb, Pb, Eb)
    }
    class hb {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(bb, ab, Ub) {
        let Ab = this.map.get(bb);
        Ab || this.map.set(bb, Ab = new Map), Ab.set(ab, Ub)
      }
      getBuffer(bb, ab) {
        let Ub = this.map.get(bb);
        return Ub && Ub.get(ab)
      }
      set(bb, ab) {
        bb instanceof mb ? this.setBuffer(bb.context.buffer, bb.index, ab) : bb instanceof zb && this.map.set(bb.tree, ab)
      }
      get(bb) {
        return bb instanceof mb ? this.getBuffer(bb.context.buffer, bb.index) : bb instanceof zb ? this.map.get(bb.tree) : void 0
      }
      cursorSet(bb, ab) {
        bb.buffer ? this.setBuffer(bb.buffer.buffer, bb.index, ab) : this.map.set(bb.tree, ab)
      }
      cursorGet(bb) {
        return bb.buffer ? this.getBuffer(bb.buffer.buffer, bb.index) : this.map.get(bb.tree)
      }
    }
    class Gb {
      constructor(bb, ab, Ub, Ab) {
        let Mb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Tb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = bb, this.to = ab, this.tree = Ub, this.offset = Ab, this.open = (Mb ? 1 : 0) | (Tb ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ab = [new Gb(0, bb.length, bb, 0, !1, Ub)];
        for (let Mb of ab) Mb.to > bb.length && Ab.push(Mb);
        return Ab
      }
      static applyChanges(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!ab.length) return bb;
        let Ab = [],
          Mb = 1,
          Tb = bb.length ? bb[0] : null;
        for (let Eb = 0, Yb = 0, Bb = 0;; Eb++) {
          let eb = Eb < ab.length ? ab[Eb] : null,
            vb = eb ? eb.fromA : 1e9;
          if (vb - Yb >= Ub)
            for (; Tb && Tb.from < vb;) {
              let ab = Tb;
              if (Yb >= ab.from || vb <= ab.to || Bb) {
                let bb = Math.max(ab.from, Yb) - Bb,
                  Ub = Math.min(ab.to, vb) - Bb;
                ab = bb >= Ub ? null : new Gb(bb, Ub, ab.tree, ab.offset + Bb, Eb > 0, !!eb)
              }
              if (ab && Ab.push(ab), Tb.to > vb) break;
              Tb = Mb < bb.length ? bb[Mb++] : null
            }
          if (!eb) break;
          Yb = eb.toA, Bb = eb.toA - eb.toB
        }
        return Ab
      }
    }
    class Qb {
      startParse(bb, ab, Ub) {
        return "string" == typeof bb && (bb = new qb(bb)), Ub = Ub ? Ub.length ? Ub.map((bb => new Tb(bb.from, bb.to))) : [new Tb(0, 0)] : [new Tb(0, bb.length)], this.createParse(bb, ab || [], Ub)
      }
      parse(bb, ab, Ub) {
        let Ab = this.startParse(bb, ab, Ub);
        for (;;) {
          let bb = Ab.advance();
          if (bb) return bb
        }
      }
    }
    class qb {
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
      read(bb, ab) {
        return this.string.slice(bb, ab)
      }
    }
    new Eb({
      perNode: !0
    })
  },
  40442: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Pb,
      d: () => Bb,
      e: () => Lb,
      h: () => Ib
    });
    var Ab = Ub(40440);
    let Mb = 0;
    class Tb {
      constructor(bb, ab, Ub, Ab) {
        this.name = bb, this.set = ab, this.base = Ub, this.modified = Ab, this.id = Mb++
      }
      toString() {
        let {
          name: bb
        } = this;
        for (let ab of this.modified) ab.name && (bb = `${ab.name}(${bb})`);
        return bb
      }
      static define(bb, ab) {
        let Ub = "string" == typeof bb ? bb : "?";
        if (bb instanceof Tb && (ab = bb), null === ab || void 0 === ab ? void 0 : ab.base) throw new Error("Can not derive from a modified tag");
        let Ab = new Tb(Ub, [], null, []);
        if (Ab.set.push(Ab), ab)
          for (let Mb of ab.set) Ab.set.push(Mb);
        return Ab
      }
      static defineModifier(bb) {
        let ab = new Yb(bb);
        return bb => bb.modified.indexOf(ab) > -1 ? bb : Yb.get(bb.base || bb, bb.modified.concat(ab).sort(((bb, ab) => bb.id - ab.id)))
      }
    }
    let Eb = 0;
    class Yb {
      constructor(bb) {
        this.name = bb, this.instances = [], this.id = Eb++
      }
      static get(bb, ab) {
        if (!ab.length) return bb;
        let Ub = ab[0].instances.find((Ub => {
          return Ub.base == bb && (Ab = ab, Mb = Ub.modified, Ab.length == Mb.length && Ab.every(((bb, ab) => bb == Mb[ab])));
          var Ab, Mb
        }));
        if (Ub) return Ub;
        let Ab = [],
          Mb = new Tb(bb.name, Ab, bb, ab);
        for (let Tb of ab) Tb.instances.push(Mb);
        let Eb = function(bb) {
          let ab = [
            []
          ];
          for (let Ub = 0; Ub < bb.length; Ub++)
            for (let Ab = 0, Mb = ab.length; Ab < Mb; Ab++) ab.push(ab[Ab].concat(bb[Ub]));
          return ab.sort(((bb, ab) => ab.length - bb.length))
        }(ab);
        for (let Tb of bb.set)
          if (!Tb.modified.length)
            for (let bb of Eb) Ab.push(Yb.get(Tb, bb));
        return Mb
      }
    }

    function Bb(bb) {
      let ab = Object.create(null);
      for (let Ub in bb) {
        let Ab = bb[Ub];
        Array.isArray(Ab) || (Ab = [Ab]);
        for (let bb of Ub.split(" "))
          if (bb) {
            let Ub = [],
              Mb = 2,
              Tb = bb;
            for (let ab = 0;;) {
              if ("..." == Tb && ab > 0 && ab + 3 == bb.length) {
                Mb = 1;
                break
              }
              let Ab = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(Tb);
              if (!Ab) throw new RangeError("Invalid path: " + bb);
              if (Ub.push("*" == Ab[0] ? "" : '"' == Ab[0][0] ? JSON.parse(Ab[0]) : Ab[0]), ab += Ab[0].length, ab == bb.length) break;
              let Eb = bb[ab++];
              if (ab == bb.length && "!" == Eb) {
                Mb = 0;
                break
              }
              if ("/" != Eb) throw new RangeError("Invalid path: " + bb);
              Tb = bb.slice(ab)
            }
            let Eb = Ub.length - 1,
              Yb = Ub[Eb];
            if (!Yb) throw new RangeError("Invalid path: " + bb);
            let Bb = new vb(Ab, Mb, Eb > 0 ? Ub.slice(0, Eb) : null);
            ab[Yb] = Bb.sort(ab[Yb])
          }
      }
      return eb.add(ab)
    }
    const eb = new Ab.k({
      combine(bb, ab) {
        let Ub, Ab, Mb;
        for (; bb || ab;) {
          if (!bb || ab && bb.depth >= ab.depth ? (Mb = ab, ab = ab.next) : (Mb = bb, bb = bb.next), Ub && Ub.mode == Mb.mode && !Mb.context && !Ub.context) continue;
          let Tb = new vb(Mb.tags, Mb.mode, Mb.context);
          Ub ? Ub.next = Tb : Ab = Tb, Ub = Tb
        }
        return Ab
      }
    });
    class vb {
      constructor(bb, ab, Ub, Ab) {
        this.tags = bb, this.mode = ab, this.context = Ub, this.next = Ab
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

    function Lb(bb, ab) {
      let Ub = Object.create(null);
      for (let Tb of bb)
        if (Array.isArray(Tb.tag))
          for (let bb of Tb.tag) Ub[bb.id] = Tb.class;
        else Ub[Tb.tag.id] = Tb.class;
      let {
        scope: Ab,
        all: Mb = null
      } = ab || {};
      return {
        style: bb => {
          let ab = Mb;
          for (let Ab of bb)
            for (let bb of Ab.set) {
              let Ab = Ub[bb.id];
              if (Ab) {
                ab = ab ? ab + " " + Ab : Ab;
                break
              }
            }
          return ab
        },
        scope: Ab
      }
    }

    function Pb(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : bb.length,
        Tb = new Xb(Ab, Array.isArray(ab) ? ab : [ab], Ub);
      Tb.highlightRange(bb.cursor(), Ab, Mb, "", Tb.highlighters), Tb.flush(Mb)
    }
    vb.empty = new vb([], 2, null);
    class Xb {
      constructor(bb, ab, Ub) {
        this.at = bb, this.highlighters = ab, this.span = Ub, this.class = ""
      }
      startSpan(bb, ab) {
        ab != this.class && (this.flush(bb), bb > this.at && (this.at = bb), this.class = ab)
      }
      flush(bb) {
        bb > this.at && this.class && this.span(this.at, bb, this.class)
      }
      highlightRange(bb, ab, Ub, Mb, Tb) {
        let {
          type: Eb,
          from: Yb,
          to: Bb
        } = bb;
        if (Yb >= Ub || Bb <= ab) return;
        Eb.isTop && (Tb = this.highlighters.filter((bb => !bb.scope || bb.scope(Eb))));
        let Lb = Mb,
          Pb = function(bb) {
            let ab = bb.type.prop(eb);
            for (; ab && ab.context && !bb.matchContext(ab.context);) ab = ab.next;
            return ab || null
          }(bb) || vb.empty,
          Xb = function(bb, ab) {
            let Ub = null;
            for (let Ab of bb) {
              let bb = Ab.style(ab);
              bb && (Ub = Ub ? Ub + " " + bb : bb)
            }
            return Ub
          }(Tb, Pb.tags);
        if (Xb && (Lb && (Lb += " "), Lb += Xb, 1 == Pb.mode && (Mb += (Mb ? " " : "") + Xb)), this.startSpan(Math.max(ab, Yb), Lb), Pb.opaque) return;
        let jb = bb.tree && bb.tree.prop(Ab.k.mounted);
        if (jb && jb.overlay) {
          let Ab = bb.node.enter(jb.overlay[0].from + Yb, 1),
            Eb = this.highlighters.filter((bb => !bb.scope || bb.scope(jb.tree.type))),
            eb = bb.firstChild();
          for (let vb = 0, Pb = Yb;; vb++) {
            let Xb = vb < jb.overlay.length ? jb.overlay[vb] : null,
              Rb = Xb ? Xb.from + Yb : Bb,
              kb = Math.max(ab, Pb),
              yb = Math.min(Ub, Rb);
            if (kb < yb && eb)
              for (; bb.from < yb && (this.highlightRange(bb, kb, yb, Mb, Tb), this.startSpan(Math.min(yb, bb.to), Lb), !(bb.to >= Rb) && bb.nextSibling()););
            if (!Xb || Rb > Ub) break;
            Pb = Xb.to + Yb, Pb > ab && (this.highlightRange(Ab.cursor(), Math.max(ab, Xb.from + Yb), Math.min(Ub, Pb), "", Eb), this.startSpan(Math.min(Ub, Pb), Lb))
          }
          eb && bb.parent()
        } else if (bb.firstChild()) {
          jb && (Mb = "");
          do {
            if (!(bb.to <= ab)) {
              if (bb.from >= Ub) break;
              this.highlightRange(bb, ab, Ub, Mb, Tb), this.startSpan(Math.min(Ub, bb.to), Lb)
            }
          } while (bb.nextSibling());
          bb.parent()
        }
      }
    }
    const jb = Tb.define,
      Rb = jb(),
      kb = jb(),
      yb = jb(kb),
      Zb = jb(kb),
      Db = jb(),
      zb = jb(Db),
      xb = jb(Db),
      ib = jb(),
      fb = jb(ib),
      mb = jb(),
      pb = jb(),
      Nb = jb(),
      Wb = jb(Nb),
      Hb = jb(),
      Ib = {
        comment: Rb,
        lineComment: jb(Rb),
        blockComment: jb(Rb),
        docComment: jb(Rb),
        name: kb,
        variableName: jb(kb),
        typeName: yb,
        tagName: jb(yb),
        propertyName: Zb,
        attributeName: jb(Zb),
        className: jb(kb),
        labelName: jb(kb),
        namespace: jb(kb),
        macroName: jb(kb),
        literal: Db,
        string: zb,
        docString: jb(zb),
        character: jb(zb),
        attributeValue: jb(zb),
        number: xb,
        integer: jb(xb),
        float: jb(xb),
        bool: jb(Db),
        regexp: jb(Db),
        escape: jb(Db),
        color: jb(Db),
        url: jb(Db),
        keyword: mb,
        self: jb(mb),
        null: jb(mb),
        atom: jb(mb),
        unit: jb(mb),
        modifier: jb(mb),
        operatorKeyword: jb(mb),
        controlKeyword: jb(mb),
        definitionKeyword: jb(mb),
        moduleKeyword: jb(mb),
        operator: pb,
        derefOperator: jb(pb),
        arithmeticOperator: jb(pb),
        logicOperator: jb(pb),
        bitwiseOperator: jb(pb),
        compareOperator: jb(pb),
        updateOperator: jb(pb),
        definitionOperator: jb(pb),
        typeOperator: jb(pb),
        controlOperator: jb(pb),
        punctuation: Nb,
        separator: jb(Nb),
        bracket: Wb,
        angleBracket: jb(Wb),
        squareBracket: jb(Wb),
        paren: jb(Wb),
        brace: jb(Wb),
        content: ib,
        heading: fb,
        heading1: jb(fb),
        heading2: jb(fb),
        heading3: jb(fb),
        heading4: jb(fb),
        heading5: jb(fb),
        heading6: jb(fb),
        contentSeparator: jb(ib),
        list: jb(ib),
        quote: jb(ib),
        emphasis: jb(ib),
        strong: jb(ib),
        link: jb(ib),
        monospace: jb(ib),
        strikethrough: jb(ib),
        inserted: jb(),
        deleted: jb(),
        changed: jb(),
        invalid: jb(),
        meta: Hb,
        documentMeta: jb(Hb),
        annotation: jb(Hb),
        processingInstruction: jb(Hb),
        definition: Tb.defineModifier("definition"),
        constant: Tb.defineModifier("constant"),
        function: Tb.defineModifier("function"),
        standard: Tb.defineModifier("standard"),
        local: Tb.defineModifier("local"),
        special: Tb.defineModifier("special")
      };
    for (let db in Ib) {
      let bb = Ib[db];
      bb instanceof Tb && (bb.name = db)
    }
    Lb([{
      tag: Ib.link,
      class: "tok-link"
    }, {
      tag: Ib.heading,
      class: "tok-heading"
    }, {
      tag: Ib.emphasis,
      class: "tok-emphasis"
    }, {
      tag: Ib.strong,
      class: "tok-strong"
    }, {
      tag: Ib.keyword,
      class: "tok-keyword"
    }, {
      tag: Ib.atom,
      class: "tok-atom"
    }, {
      tag: Ib.bool,
      class: "tok-bool"
    }, {
      tag: Ib.url,
      class: "tok-url"
    }, {
      tag: Ib.labelName,
      class: "tok-labelName"
    }, {
      tag: Ib.inserted,
      class: "tok-inserted"
    }, {
      tag: Ib.deleted,
      class: "tok-deleted"
    }, {
      tag: Ib.literal,
      class: "tok-literal"
    }, {
      tag: Ib.string,
      class: "tok-string"
    }, {
      tag: Ib.number,
      class: "tok-number"
    }, {
      tag: [Ib.regexp, Ib.escape, Ib.special(Ib.string)],
      class: "tok-string2"
    }, {
      tag: Ib.variableName,
      class: "tok-variableName"
    }, {
      tag: Ib.local(Ib.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: Ib.definition(Ib.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: Ib.special(Ib.variableName),
      class: "tok-variableName2"
    }, {
      tag: Ib.definition(Ib.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: Ib.typeName,
      class: "tok-typeName"
    }, {
      tag: Ib.namespace,
      class: "tok-namespace"
    }, {
      tag: Ib.className,
      class: "tok-className"
    }, {
      tag: Ib.macroName,
      class: "tok-macroName"
    }, {
      tag: Ib.propertyName,
      class: "tok-propertyName"
    }, {
      tag: Ib.operator,
      class: "tok-operator"
    }, {
      tag: Ib.comment,
      class: "tok-comment"
    }, {
      tag: Ib.meta,
      class: "tok-meta"
    }, {
      tag: Ib.invalid,
      class: "tok-invalid"
    }, {
      tag: Ib.punctuation,
      class: "tok-punctuation"
    }])
  },
  40453: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Yb.i,
      h: () => Eb.u,
      j: () => Eb.B,
      m: () => Eb.E,
      p: () => Yb.k,
      r: () => fU,
      t: () => Yb.K,
      w: () => Yb.ab
    });
    var Ab = Ub(1284),
      Mb = Ub(1280),
      Tb = Ub(52),
      Eb = Ub(40415),
      Yb = Ub(40419),
      Bb = Ub(40437),
      eb = Ub(40440);

    function vb(bb, ab) {
      return Ub => {
        let {
          state: Ab,
          dispatch: Mb
        } = Ub;
        if (Ab.readOnly) return !1;
        let Tb = bb(ab, Ab);
        return !!Tb && (Mb(Ab.update(Tb)), !0)
      }
    }
    const Lb = vb(yb, 0),
      Pb = vb(kb, 0),
      Xb = vb(((bb, ab) => kb(bb, ab, function(bb) {
        let ab = [];
        for (let Ub of bb.selection.cj) {
          let Ab = bb.doc.lineAt(Ub.from),
            Mb = Ub.to <= Ab.to ? Ab : bb.doc.lineAt(Ub.to);
          Mb.from > Ab.from && Mb.from == Ub.to && (Mb = Ub.to == Ab.to + 1 ? Ab : bb.doc.lineAt(Ub.to - 1));
          let Tb = ab.length - 1;
          Tb >= 0 && ab[Tb].to > Ab.from ? ab[Tb].to = Mb.to : ab.push({
            from: Ab.from + /^\s*/.exec(Ab.text)[0].length,
            to: Mb.to
          })
        }
        return ab
      }(ab))), 0);

    function jb(bb, ab) {
      let Ub = bb.languageDataAt("commentTokens", ab, 1);
      return Ub.length ? Ub[0] : {}
    }
    const Rb = 50;

    function kb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ab.selection.cj,
        Ab = Ub.map((bb => jb(ab, bb.from).block));
      if (!Ab.every((bb => bb))) return null;
      let Mb = Ub.map(((bb, Ub) => function(bb, ab, Ub, Ab) {
        let Mb, Tb, {
            open: Eb,
            close: Yb
          } = ab,
          Bb = bb.sliceDoc(Ub - Rb, Ub),
          eb = bb.sliceDoc(Ab, Ab + Rb),
          vb = /\s*$/.exec(Bb)[0].length,
          Lb = /^\s*/.exec(eb)[0].length,
          Pb = Bb.length - vb;
        if (Bb.slice(Pb - Eb.length, Pb) == Eb && eb.slice(Lb, Lb + Yb.length) == Yb) return {
          open: {
            pos: Ub - vb,
            margin: vb && 1
          },
          close: {
            pos: Ab + Lb,
            margin: Lb && 1
          }
        };
        Ab - Ub <= 2 * Rb ? Mb = Tb = bb.sliceDoc(Ub, Ab) : (Mb = bb.sliceDoc(Ub, Ub + Rb), Tb = bb.sliceDoc(Ab - Rb, Ab));
        let Xb = /^\s*/.exec(Mb)[0].length,
          jb = /\s*$/.exec(Tb)[0].length,
          kb = Tb.length - jb - Yb.length;
        return Mb.slice(Xb, Xb + Eb.length) == Eb && Tb.slice(kb, kb + Yb.length) == Yb ? {
          open: {
            pos: Ub + Xb + Eb.length,
            margin: /\s/.test(Mb.charAt(Xb + Eb.length)) ? 1 : 0
          },
          close: {
            pos: Ab - jb - Yb.length,
            margin: /\s/.test(Tb.charAt(kb - 1)) ? 1 : 0
          }
        } : null
      }(ab, Ab[Ub], bb.from, bb.to)));
      if (2 != bb && !Mb.every((bb => bb))) return {
        changes: ab.changes(Ub.map(((bb, ab) => Mb[ab] ? [] : [{
          from: bb.from,
          insert: Ab[ab].open + " "
        }, {
          from: bb.to,
          insert: " " + Ab[ab].close
        }])))
      };
      if (1 != bb && Mb.some((bb => bb))) {
        let bb = [];
        for (let ab, Ub = 0; Ub < Mb.length; Ub++)
          if (ab = Mb[Ub]) {
            let Mb = Ab[Ub],
              {
                open: Tb,
                close: Eb
              } = ab;
            bb.push({
              from: Tb.pos - Mb.open.length,
              to: Tb.pos + Tb.margin
            }, {
              from: Eb.pos - Eb.margin,
              to: Eb.pos + Mb.close.length
            })
          } return {
          changes: bb
        }
      }
      return null
    }

    function yb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ab.selection.cj,
        Ab = [],
        Mb = -1;
      bb: for (let {
          from: Tb,
          to: Eb
        }
        of Ub) {
        let bb, Ub = Ab.length,
          Yb = 1e9;
        for (let Bb = Tb; Bb <= Eb;) {
          let Ub = ab.doc.lineAt(Bb);
          if (void 0 == bb && (bb = jb(ab, Ub.from).line, !bb)) continue bb;
          if (Ub.from > Mb && (Tb == Eb || Eb > Ub.from)) {
            Mb = Ub.from;
            let ab = /^\s*/.exec(Ub.text)[0].length,
              Tb = ab == Ub.length,
              Eb = Ub.text.slice(ab, ab + bb.length) == bb ? ab : -1;
            ab < Ub.text.length && ab < Yb && (Yb = ab), Ab.push({
              line: Ub,
              comment: Eb,
              token: bb,
              indent: ab,
              empty: Tb,
              single: !1
            })
          }
          Bb = Ub.to + 1
        }
        if (Yb < 1e9)
          for (let ab = Ub; ab < Ab.length; ab++) Ab[ab].indent < Ab[ab].line.text.length && (Ab[ab].indent = Yb);
        Ab.length == Ub + 1 && (Ab[Ub].single = !0)
      }
      if (2 != bb && Ab.some((bb => bb.comment < 0 && (!bb.empty || bb.single)))) {
        let bb = [];
        for (let {
            line: ab,
            token: Mb,
            indent: Tb,
            empty: Eb,
            single: Yb
          }
          of Ab) !Yb && Eb || bb.push({
          from: ab.from + Tb,
          insert: Mb + " "
        });
        let Ub = ab.changes(bb);
        return {
          changes: Ub,
          selection: ab.selection.map(Ub, 1)
        }
      }
      if (1 != bb && Ab.some((bb => bb.comment >= 0))) {
        let bb = [];
        for (let {
            line: ab,
            comment: Ub,
            token: Mb
          }
          of Ab)
          if (Ub >= 0) {
            let Ab = ab.from + Ub,
              Tb = Ab + Mb.length;
            " " == ab.text[Tb - ab.from] && Tb++, bb.push({
              from: Ab,
              to: Tb
            })
          } return {
          changes: bb
        }
      }
      return null
    }
    const Zb = Eb.d.define(),
      Db = Eb.d.define(),
      zb = Eb.q.define(),
      xb = Eb.q.define({
        combine: bb => (0, Eb.O)(bb, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (bb, ab) => ab
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (bb, ab) => (Ub, Ab) => bb(Ub, Ab) || ab(Ub, Ab)
        })
      }),
      ib = Eb.E.define({
        create: () => Kb.empty,
        update(bb, ab) {
          let Ub = ab.state.facet(xb),
            Ab = ab.annotation(Zb);
          if (Ab) {
            let Mb = Hb.fromTransaction(ab, Ab.selection),
              Tb = Ab.side,
              Eb = 0 == Tb ? bb.undone : bb.done;
            return Eb = Mb ? Ib(Eb, Eb.length, Ub.minDepth, Mb) : Gb(Eb, ab.startState.selection), new Kb(0 == Tb ? Ab.rest : Eb, 0 == Tb ? Eb : Ab.rest)
          }
          let Mb = ab.annotation(Db);
          if ("full" != Mb && "before" != Mb || (bb = bb.isolate()), !1 === ab.annotation(Eb.I.addToHistory)) return ab.changes.empty ? bb : bb.addMapping(ab.changes.desc);
          let Tb = Hb.fromTransaction(ab),
            Yb = ab.annotation(Eb.I.time),
            Bb = ab.annotation(Eb.I.userEvent);
          return Tb ? bb = bb.addChanges(Tb, Yb, Bb, Ub, ab) : ab.selection && (bb = bb.addSelection(ab.startState.selection, Yb, Bb, Ub.newGroupDelay)), "full" != Mb && "after" != Mb || (bb = bb.isolate()), bb
        },
        toJSON: bb => ({
          done: bb.done.map((bb => bb.toJSON())),
          undone: bb.undone.map((bb => bb.toJSON()))
        }),
        fromJSON: bb => new Kb(bb.done.map(Hb.fromJSON), bb.undone.map(Hb.fromJSON))
      });

    function fb(bb, ab) {
      return function(Ub) {
        let {
          state: Ab,
          dispatch: Mb
        } = Ub;
        if (!ab && Ab.readOnly) return !1;
        let Tb = Ab.field(ib, !1);
        if (!Tb) return !1;
        let Eb = Tb.pop(bb, Ab, ab);
        return !!Eb && (Mb(Eb), !0)
      }
    }
    const mb = fb(0, !1),
      pb = fb(1, !1),
      Nb = fb(0, !0),
      Wb = fb(1, !0);
    class Hb {
      constructor(bb, ab, Ub, Ab, Mb) {
        this.changes = bb, this.effects = ab, this.mapped = Ub, this.startSelection = Ab, this.selectionsAfter = Mb
      }
      setSelAfter(bb) {
        return new Hb(this.changes, this.effects, this.mapped, this.startSelection, bb)
      }
      toJSON() {
        var bb, ab, Ub;
        return {
          changes: null === (bb = this.changes) || void 0 === bb ? void 0 : bb.toJSON(),
          mapped: null === (ab = this.mapped) || void 0 === ab ? void 0 : ab.toJSON(),
          startSelection: null === (Ub = this.startSelection) || void 0 === Ub ? void 0 : Ub.toJSON(),
          selectionsAfter: this.selectionsAfter.map((bb => bb.toJSON()))
        }
      }
      static fromJSON(bb) {
        return new Hb(bb.changes && Eb.ChangeSet.fromJSON(bb.changes), [], bb.mapped && Eb.h.fromJSON(bb.mapped), bb.startSelection && Eb.m.fromJSON(bb.startSelection), bb.selectionsAfter.map(Eb.m.fromJSON))
      }
      static fromTransaction(bb, ab) {
        let Ub = Fb;
        for (let Ab of bb.startState.facet(zb)) {
          let ab = Ab(bb);
          ab.length && (Ub = Ub.concat(ab))
        }
        return !Ub.length && bb.changes.empty ? null : new Hb(bb.changes.invert(bb.startState.doc), Ub, void 0, ab || bb.startState.selection, Fb)
      }
      static selection(bb) {
        return new Hb(void 0, Fb, void 0, void 0, bb)
      }
    }

    function Ib(bb, ab, Ub, Ab) {
      let Mb = ab + 1 > Ub + 20 ? ab - Ub - 1 : 0,
        Tb = bb.slice(Mb, ab);
      return Tb.push(Ab), Tb
    }

    function db(bb, ab) {
      return bb.length ? ab.length ? bb.concat(ab) : bb : ab
    }
    const Fb = [],
      hb = 200;

    function Gb(bb, ab) {
      if (bb.length) {
        let Ub = bb[bb.length - 1],
          Ab = Ub.selectionsAfter.slice(Math.max(0, Ub.selectionsAfter.length - hb));
        return Ab.length && Ab[Ab.length - 1].eq(ab) ? bb : (Ab.push(ab), Ib(bb, bb.length - 1, 1e9, Ub.setSelAfter(Ab)))
      }
      return [Hb.selection([ab])]
    }

    function Qb(bb) {
      let ab = bb[bb.length - 1],
        Ub = bb.slice();
      return Ub[bb.length - 1] = ab.setSelAfter(ab.selectionsAfter.slice(0, ab.selectionsAfter.length - 1)), Ub
    }

    function qb(bb, ab) {
      if (!bb.length) return bb;
      let Ub = bb.length,
        Ab = Fb;
      for (; Ub;) {
        let Mb = ub(bb[Ub - 1], ab, Ab);
        if (Mb.changes && !Mb.changes.empty || Mb.effects.length) {
          let ab = bb.slice(0, Ub);
          return ab[Ub - 1] = Mb, ab
        }
        ab = Mb.mapped, Ub--, Ab = Mb.selectionsAfter
      }
      return Ab.length ? [Hb.selection(Ab)] : Fb
    }

    function ub(bb, ab, Ub) {
      let Ab = db(bb.selectionsAfter.length ? bb.selectionsAfter.map((bb => bb.map(ab))) : Fb, Ub);
      if (!bb.changes) return Hb.selection(Ab);
      let Mb = bb.changes.map(ab),
        Tb = ab.mapDesc(bb.changes, !0),
        Yb = bb.mapped ? bb.mapped.composeDesc(Tb) : Tb;
      return new Hb(Mb, Eb.B.mapEffects(bb.effects, ab), Yb, bb.startSelection.map(Tb), Ab)
    }
    const rb = /^(input\.type|delete)($|\.)/;
    class Kb {
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = bb, this.undone = ab, this.prevTime = Ub, this.prevUserEvent = Ab
      }
      isolate() {
        return this.prevTime ? new Kb(this.done, this.undone) : this
      }
      addChanges(bb, ab, Ub, Ab, Mb) {
        let Tb = this.done,
          Yb = Tb[Tb.length - 1];
        return Tb = Yb && Yb.changes && !Yb.changes.empty && bb.changes && (!Ub || rb.test(Ub)) && (!Yb.selectionsAfter.length && ab - this.prevTime < Ab.newGroupDelay && Ab.joinToEvent(Mb, function(bb, ab) {
          let Ub = [],
            Ab = !1;
          return bb.iterChangedRanges(((bb, ab) => Ub.push(bb, ab))), ab.iterChangedRanges(((bb, ab, Mb, Tb) => {
            for (let Eb = 0; Eb < Ub.length;) {
              let bb = Ub[Eb++],
                ab = Ub[Eb++];
              Tb >= bb && Mb <= ab && (Ab = !0)
            }
          })), Ab
        }(Yb.changes, bb.changes)) || "input.type.compose" == Ub) ? Ib(Tb, Tb.length - 1, Ab.minDepth, new Hb(bb.changes.compose(Yb.changes), db(Eb.B.mapEffects(bb.effects, Yb.changes), Yb.effects), Yb.mapped, Yb.startSelection, Fb)) : Ib(Tb, Tb.length, Ab.minDepth, bb), new Kb(Tb, Fb, ab, Ub)
      }
      addSelection(bb, ab, Ub, Ab) {
        let Mb = this.done.length ? this.done[this.done.length - 1].selectionsAfter : Fb;
        return Mb.length > 0 && ab - this.prevTime < Ab && Ub == this.prevUserEvent && Ub && /^select($|\.)/.test(Ub) && (Tb = Mb[Mb.length - 1], Eb = bb, Tb.cj.length == Eb.cj.length && 0 === Tb.cj.filter(((bb, ab) => bb.empty != Eb.cj[ab].empty)).length) ? this : new Kb(Gb(this.done, bb), this.undone, ab, Ub);
        var Tb, Eb
      }
      addMapping(bb) {
        return new Kb(qb(this.done, bb), qb(this.undone, bb), this.prevTime, this.prevUserEvent)
      }
      pop(bb, ab, Ub) {
        let Ab = 0 == bb ? this.done : this.undone;
        if (0 == Ab.length) return null;
        let Mb = Ab[Ab.length - 1],
          Tb = Mb.selectionsAfter[0] || (Mb.startSelection ? Mb.startSelection.map(Mb.changes.invertedDesc, 1) : ab.selection);
        if (Ub && Mb.selectionsAfter.length) return ab.update({
          selection: Mb.selectionsAfter[Mb.selectionsAfter.length - 1],
          annotations: Zb.of({
            side: bb,
            rest: Qb(Ab),
            selection: Tb
          }),
          userEvent: 0 == bb ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (Mb.changes) {
          let Ub = 1 == Ab.length ? Fb : Ab.slice(0, Ab.length - 1);
          return Mb.mapped && (Ub = qb(Ub, Mb.mapped)), ab.update({
            changes: Mb.changes,
            selection: Mb.startSelection,
            effects: Mb.effects,
            annotations: Zb.of({
              side: bb,
              rest: Ub,
              selection: Tb
            }),
            filter: !1,
            userEvent: 0 == bb ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    Kb.empty = new Kb(Fb, Fb);
    const ob = [{
      key: "Mod-z",
      run: mb,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: pb,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: pb,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: Nb,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: Wb,
      preventDefault: !0
    }];

    function lb(bb, ab) {
      return Eb.m.create(bb.cj.map(ab), bb.mainIndex)
    }

    function tb(bb, ab) {
      return bb.update({
        selection: ab,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function wb(bb, ab) {
      let {
        state: Ub,
        dispatch: Ab
      } = bb, Mb = lb(Ub.selection, ab);
      return !Mb.eq(Ub.selection, !0) && (Ab(tb(Ub, Mb)), !0)
    }

    function sb(bb, ab) {
      return Eb.m.cursor(ab ? bb.to : bb.from)
    }

    function gb(bb, ab) {
      return wb(bb, (Ub => Ub.empty ? bb.moveByChar(Ub, ab) : sb(Ub, ab)))
    }

    function Cb(bb) {
      return bb.textDirectionAt(bb.state.selection.main.head) == Yb.e.LTR
    }
    const Vb = bb => gb(bb, !Cb(bb)),
      Ob = bb => gb(bb, Cb(bb));

    function cb(bb, ab) {
      return wb(bb, (Ub => Ub.empty ? bb.moveByGroup(Ub, ab) : sb(Ub, ab)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function Jb(bb, ab, Ub) {
      if (ab.type.prop(Ub)) return !0;
      let Ab = ab.to - ab.from;
      return Ab && (Ab > 2 || /[^\s,.;:]/.test(bb.sliceDoc(ab.from, ab.to))) || ab.firstChild
    }

    function nb(bb, ab, Ub) {
      let Ab, Mb, Tb = (0, Bb.wb)(bb).resolveInner(ab.head),
        Yb = Ub ? eb.k.closedBy : eb.k.openedBy;
      for (let Eb = ab.head;;) {
        let ab = Ub ? Tb.childAfter(Eb) : Tb.childBefore(Eb);
        if (!ab) break;
        Jb(bb, ab, Yb) ? Tb = ab : Eb = Ub ? ab.to : ab.from
      }
      return Mb = Tb.type.prop(Yb) && (Ab = Ub ? (0, Bb.kb)(bb, Tb.from, 1) : (0, Bb.kb)(bb, Tb.to, -1)) && Ab.matched ? Ub ? Ab.end.to : Ab.end.from : Ub ? Tb.to : Tb.from, Eb.m.cursor(Mb, Ub ? -1 : 1)
    }

    function Sb(bb, ab) {
      return wb(bb, (Ub => {
        if (!Ub.empty) return sb(Ub, ab);
        let Ab = bb.moveVertically(Ub, ab);
        return Ab.head != Ub.head ? Ab : bb.moveToLineBoundary(Ub, ab)
      }))
    }
    const ba = bb => Sb(bb, !1),
      aa = bb => Sb(bb, !0);

    function Ua(bb) {
      let ab, Ub = bb.scrollDOM.clientHeight < bb.scrollDOM.scrollHeight - 2,
        Ab = 0,
        Mb = 0;
      if (Ub) {
        for (let ab of bb.state.facet(Yb.i.scrollMargins)) {
          let Ub = ab(bb);
          (null === Ub || void 0 === Ub ? void 0 : Ub.top) && (Ab = Math.max(null === Ub || void 0 === Ub ? void 0 : Ub.top, Ab)), (null === Ub || void 0 === Ub ? void 0 : Ub.bottom) && (Mb = Math.max(null === Ub || void 0 === Ub ? void 0 : Ub.bottom, Mb))
        }
        ab = bb.scrollDOM.clientHeight - Ab - Mb
      } else ab = (bb.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: Ab,
        marginBottom: Mb,
        selfScroll: Ub,
        height: Math.max(bb.defaultLineHeight, ab - 5)
      }
    }

    function Aa(bb, ab) {
      let Ub, Ab = Ua(bb),
        {
          state: Mb
        } = bb,
        Tb = lb(Mb.selection, (Ub => Ub.empty ? bb.moveVertically(Ub, ab, Ab.height) : sb(Ub, ab)));
      if (Tb.eq(Mb.selection)) return !1;
      if (Ab.selfScroll) {
        let ab = bb.coordsAtPos(Mb.selection.main.head),
          Eb = bb.scrollDOM.getBoundingClientRect(),
          Bb = Eb.top + Ab.marginTop,
          eb = Eb.bottom - Ab.marginBottom;
        ab && ab.top > Bb && ab.bottom < eb && (Ub = Yb.i.scrollIntoView(Tb.main.head, {
          y: "start",
          yMargin: ab.top - Bb
        }))
      }
      return bb.dispatch(tb(Mb, Tb), {
        effects: Ub
      }), !0
    }
    const Ma = bb => Aa(bb, !1),
      Ta = bb => Aa(bb, !0);

    function Ea(bb, ab, Ub) {
      let Ab = bb.lineBlockAt(ab.head),
        Mb = bb.moveToLineBoundary(ab, Ub);
      if (Mb.head == ab.head && Mb.head != (Ub ? Ab.to : Ab.from) && (Mb = bb.moveToLineBoundary(ab, Ub, !1)), !Ub && Mb.head == Ab.from && Ab.length) {
        let Ub = /^\s*/.exec(bb.state.sliceDoc(Ab.from, Math.min(Ab.from + 100, Ab.to)))[0].length;
        Ub && ab.head != Ab.from + Ub && (Mb = Eb.m.cursor(Ab.from + Ub))
      }
      return Mb
    }

    function Ya(bb, ab, Ub) {
      let Ab = !1,
        Mb = lb(bb.selection, (ab => {
          let Mb = (0, Bb.kb)(bb, ab.head, -1) || (0, Bb.kb)(bb, ab.head, 1) || ab.head > 0 && (0, Bb.kb)(bb, ab.head - 1, 1) || ab.head < bb.doc.length && (0, Bb.kb)(bb, ab.head + 1, -1);
          if (!Mb || !Mb.end) return ab;
          Ab = !0;
          let Tb = Mb.start.from == ab.head ? Mb.end.to : Mb.end.from;
          return Ub ? Eb.m.range(ab.anchor, Tb) : Eb.m.cursor(Tb)
        }));
      return !!Ab && (ab(tb(bb, Mb)), !0)
    }

    function Ba(bb, ab) {
      let Ub = lb(bb.state.selection, (bb => {
        let Ub = ab(bb);
        return Eb.m.range(bb.anchor, Ub.head, Ub.goalColumn, Ub.bidiLevel || void 0, Ub.assoc)
      }));
      return !Ub.eq(bb.state.selection) && (bb.dispatch(tb(bb.state, Ub)), !0)
    }

    function ea(bb, ab) {
      return Ba(bb, (Ub => bb.moveByChar(Ub, ab)))
    }
    const va = bb => ea(bb, !Cb(bb)),
      La = bb => ea(bb, Cb(bb));

    function Pa(bb, ab) {
      return Ba(bb, (Ub => bb.moveByGroup(Ub, ab)))
    }

    function Xa(bb, ab) {
      return Ba(bb, (Ub => bb.moveVertically(Ub, ab)))
    }
    const ja = bb => Xa(bb, !1),
      Ra = bb => Xa(bb, !0);

    function ka(bb, ab) {
      return Ba(bb, (Ub => bb.moveVertically(Ub, ab, Ua(bb).height)))
    }
    const ya = bb => ka(bb, !1),
      Za = bb => ka(bb, !0),
      Da = bb => {
        let {
          state: ab,
          dispatch: Ub
        } = bb;
        return Ub(tb(ab, {
          anchor: 0
        })), !0
      },
      za = bb => {
        let {
          state: ab,
          dispatch: Ub
        } = bb;
        return Ub(tb(ab, {
          anchor: ab.doc.length
        })), !0
      },
      xa = bb => {
        let {
          state: ab,
          dispatch: Ub
        } = bb;
        return Ub(tb(ab, {
          anchor: ab.selection.main.anchor,
          head: 0
        })), !0
      },
      ia = bb => {
        let {
          state: ab,
          dispatch: Ub
        } = bb;
        return Ub(tb(ab, {
          anchor: ab.selection.main.anchor,
          head: ab.doc.length
        })), !0
      };

    function fa(bb, ab) {
      let {
        state: Ub
      } = bb, Ab = Ub.selection, Mb = Ub.selection.cj.slice();
      for (let Tb of Ub.selection.cj) {
        let Ab = Ub.doc.lineAt(Tb.head);
        if (ab ? Ab.to < bb.state.doc.length : Ab.from > 0)
          for (let Ub = Tb;;) {
            let Tb = bb.moveVertically(Ub, ab);
            if (Tb.head < Ab.from || Tb.head > Ab.to) {
              Mb.some((bb => bb.head == Tb.head)) || Mb.push(Tb);
              break
            }
            if (Tb.head == Ub.head) break;
            Ub = Tb
          }
      }
      return Mb.length != Ab.cj.length && (bb.dispatch(tb(Ub, Eb.m.create(Mb, Mb.length - 1))), !0)
    }

    function ma(bb, ab) {
      if (bb.state.readOnly) return !1;
      let Ub = "delete.selection",
        {
          state: Ab
        } = bb,
        Mb = Ab.changeByRange((Ab => {
          let {
            from: Mb,
            to: Tb
          } = Ab;
          if (Mb == Tb) {
            let Eb = ab(Ab);
            Eb < Mb ? (Ub = "delete.backward", Eb = pa(bb, Eb, !1)) : Eb > Mb && (Ub = "delete.forward", Eb = pa(bb, Eb, !0)), Mb = Math.min(Mb, Eb), Tb = Math.max(Tb, Eb)
          } else Mb = pa(bb, Mb, !1), Tb = pa(bb, Tb, !0);
          return Mb == Tb ? {
            range: Ab
          } : {
            changes: {
              from: Mb,
              to: Tb
            },
            range: Eb.m.cursor(Mb, Mb < Ab.head ? -1 : 1)
          }
        }));
      return !Mb.changes.empty && (bb.dispatch(Ab.update(Mb, {
        scrollIntoView: !0,
        userEvent: Ub,
        effects: "delete.selection" == Ub ? Yb.i.announce.of(Ab.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function pa(bb, ab, Ub) {
      if (bb instanceof Yb.i)
        for (let Ab of bb.state.facet(Yb.i.atomicRanges).map((ab => ab(bb)))) Ab.between(ab, ab, ((bb, Ab) => {
          bb < ab && Ab > ab && (ab = Ub ? Ab : bb)
        }));
      return ab
    }
    const Na = (bb, ab, Ub) => ma(bb, (Ab => {
        let Mb, Tb, Yb = Ab.from,
          {
            state: eb
          } = bb,
          vb = eb.doc.lineAt(Yb);
        if (Ub && !ab && Yb > vb.from && Yb < vb.from + 200 && !/[^ \t]/.test(Mb = vb.text.slice(0, Yb - vb.from))) {
          if ("\t" == Mb[Mb.length - 1]) return Yb - 1;
          let bb = (0, Eb.R)(Mb, eb.tabSize) % (0, Bb.V)(eb) || (0, Bb.V)(eb);
          for (let ab = 0; ab < bb && " " == Mb[Mb.length - 1 - ab]; ab++) Yb--;
          Tb = Yb
        } else Tb = (0, Eb.T)(vb.text, Yb - vb.from, ab, ab) + vb.from, Tb == Yb && vb.number != (ab ? eb.doc.lines : 1) ? Tb += ab ? 1 : -1 : !ab && /[\ufe00-\ufe0f]/.test(vb.text.slice(Tb - vb.from, Yb - vb.from)) && (Tb = (0, Eb.T)(vb.text, Tb - vb.from, !1, !1) + vb.from);
        return Tb
      })),
      Wa = bb => Na(bb, !1, !0),
      Ha = bb => Na(bb, !0, !1),
      Ia = (bb, ab) => ma(bb, (Ub => {
        let Ab = Ub.head,
          {
            state: Mb
          } = bb,
          Tb = Mb.doc.lineAt(Ab),
          Yb = Mb.charCategorizer(Ab);
        for (let bb = null;;) {
          if (Ab == (ab ? Tb.to : Tb.from)) {
            Ab == Ub.head && Tb.number != (ab ? Mb.doc.lines : 1) && (Ab += ab ? 1 : -1);
            break
          }
          let Bb = (0, Eb.T)(Tb.text, Ab - Tb.from, ab) + Tb.from,
            eb = Tb.text.slice(Math.min(Ab, Bb) - Tb.from, Math.max(Ab, Bb) - Tb.from),
            vb = Yb(eb);
          if (null != bb && vb != bb) break;
          " " == eb && Ab == Ub.head || (bb = vb), Ab = Bb
        }
        return Ab
      })),
      da = bb => Ia(bb, !1);

    function Fa(bb) {
      let ab = [],
        Ub = -1;
      for (let Ab of bb.selection.cj) {
        let Mb = bb.doc.lineAt(Ab.from),
          Tb = bb.doc.lineAt(Ab.to);
        if (Ab.empty || Ab.to != Tb.from || (Tb = bb.doc.lineAt(Ab.to - 1)), Ub >= Mb.number) {
          let bb = ab[ab.length - 1];
          bb.to = Tb.to, bb.cj.push(Ab)
        } else ab.push({
          from: Mb.from,
          to: Tb.to,
          cj: [Ab]
        });
        Ub = Tb.number + 1
      }
      return ab
    }

    function ha(bb, ab, Ub) {
      if (bb.readOnly) return !1;
      let Ab = [],
        Mb = [];
      for (let Tb of Fa(bb)) {
        if (Ub ? Tb.to == bb.doc.length : 0 == Tb.from) continue;
        let ab = bb.doc.lineAt(Ub ? Tb.to + 1 : Tb.from - 1),
          Yb = ab.length + 1;
        if (Ub) {
          Ab.push({
            from: Tb.to,
            to: ab.to
          }, {
            from: Tb.from,
            insert: ab.text + bb.lineBreak
          });
          for (let ab of Tb.cj) Mb.push(Eb.m.range(Math.min(bb.doc.length, ab.anchor + Yb), Math.min(bb.doc.length, ab.head + Yb)))
        } else {
          Ab.push({
            from: ab.from,
            to: Tb.from
          }, {
            from: Tb.to,
            insert: bb.lineBreak + ab.text
          });
          for (let bb of Tb.cj) Mb.push(Eb.m.range(bb.anchor - Yb, bb.head - Yb))
        }
      }
      return !!Ab.length && (ab(bb.update({
        changes: Ab,
        scrollIntoView: !0,
        selection: Eb.m.create(Mb, bb.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function Ga(bb, ab, Ub) {
      if (bb.readOnly) return !1;
      let Ab = [];
      for (let Tb of Fa(bb)) Ub ? Ab.push({
        from: Tb.from,
        insert: bb.doc.slice(Tb.from, Tb.to) + bb.lineBreak
      }) : Ab.push({
        from: Tb.to,
        insert: bb.lineBreak + bb.doc.slice(Tb.from, Tb.to)
      });
      let Mb = bb.changes(Ab);
      return ab(bb.update({
        changes: Mb,
        selection: bb.selection.map(Mb, Ub ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const Qa = qa(!1);

    function qa(bb) {
      return ab => {
        let {
          state: Ub,
          dispatch: Ab
        } = ab;
        if (Ub.readOnly) return !1;
        let Mb = Ub.changeByRange((ab => {
          let {
            from: Ab,
            to: Mb
          } = ab, Tb = Ub.doc.lineAt(Ab), Yb = !bb && Ab == Mb && function(bb, ab) {
            if (/\(\)|\[\]|\{\}/.test(bb.sliceDoc(ab - 1, ab + 1))) return {
              from: ab,
              to: ab
            };
            let Ub, Ab = (0, Bb.wb)(bb).resolveInner(ab),
              Mb = Ab.childBefore(ab),
              Tb = Ab.childAfter(ab);
            return Mb && Tb && Mb.to <= ab && Tb.from >= ab && (Ub = Mb.type.prop(eb.k.closedBy)) && Ub.indexOf(Tb.name) > -1 && bb.doc.lineAt(Mb.to).from == bb.doc.lineAt(Tb.from).from && !/\S/.test(bb.sliceDoc(Mb.to, Tb.from)) ? {
              from: Mb.to,
              to: Tb.from
            } : null
          }(Ub, Ab);
          bb && (Ab = Mb = (Mb <= Tb.to ? Tb : Ub.doc.lineAt(Mb)).to);
          let vb = new Bb.g(Ub, {
              simulateBreak: Ab,
              simulateDoubleBreak: !!Yb
            }),
            Lb = (0, Bb.Y)(vb, Ab);
          for (null == Lb && (Lb = (0, Eb.R)(/^\s*/.exec(Ub.doc.lineAt(Ab).text)[0], Ub.tabSize)); Mb < Tb.to && /\s/.test(Tb.text[Mb - Tb.from]);) Mb++;
          Yb ? ({
            from: Ab,
            to: Mb
          } = Yb) : Ab > Tb.from && Ab < Tb.from + 100 && !/\S/.test(Tb.text.slice(0, Ab)) && (Ab = Tb.from);
          let Pb = ["", (0, Bb.gb)(Ub, Lb)];
          return Yb && Pb.push((0, Bb.gb)(Ub, vb.lineIndent(Tb.from, -1))), {
            changes: {
              from: Ab,
              to: Mb,
              insert: Eb.G.of(Pb)
            },
            range: Eb.m.cursor(Ab + 1 + Pb[1].length)
          }
        }));
        return Ab(Ub.update(Mb, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function ua(bb, ab) {
      let Ub = -1;
      return bb.changeByRange((Ab => {
        let Mb = [];
        for (let Eb = Ab.from; Eb <= Ab.to;) {
          let Tb = bb.doc.lineAt(Eb);
          Tb.number > Ub && (Ab.empty || Ab.to > Tb.from) && (ab(Tb, Mb, Ab), Ub = Tb.number), Eb = Tb.to + 1
        }
        let Tb = bb.changes(Mb);
        return {
          changes: Mb,
          range: Eb.m.range(Tb.mapPos(Ab.anchor, 1), Tb.mapPos(Ab.head, 1))
        }
      }))
    }
    const ra = bb => {
        let {
          state: ab,
          dispatch: Ub
        } = bb;
        return !ab.readOnly && (Ub(ab.update(ua(ab, ((bb, Ub) => {
          Ub.push({
            from: bb.from,
            insert: ab.facet(Bb.ib)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      Ka = bb => {
        let {
          state: ab,
          dispatch: Ub
        } = bb;
        return !ab.readOnly && (Ub(ab.update(ua(ab, ((bb, Ub) => {
          let Ab = /^\s*/.exec(bb.text)[0];
          if (!Ab) return;
          let Mb = (0, Eb.R)(Ab, ab.tabSize),
            Tb = 0,
            Yb = (0, Bb.gb)(ab, Math.max(0, Mb - (0, Bb.V)(ab)));
          for (; Tb < Ab.length && Tb < Yb.length && Ab.charCodeAt(Tb) == Yb.charCodeAt(Tb);) Tb++;
          Ub.push({
            from: bb.from + Tb,
            to: bb.from + Ab.length,
            insert: Yb.slice(Tb)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      oa = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: bb => wb(bb, (ab => nb(bb.state, ab, !Cb(bb)))),
        shift: bb => Ba(bb, (ab => nb(bb.state, ab, !Cb(bb))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: bb => wb(bb, (ab => nb(bb.state, ab, Cb(bb)))),
        shift: bb => Ba(bb, (ab => nb(bb.state, ab, Cb(bb))))
      }, {
        key: "Alt-ArrowUp",
        run: bb => {
          let {
            state: ab,
            dispatch: Ub
          } = bb;
          return ha(ab, Ub, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: bb => {
          let {
            state: ab,
            dispatch: Ub
          } = bb;
          return Ga(ab, Ub, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: bb => {
          let {
            state: ab,
            dispatch: Ub
          } = bb;
          return ha(ab, Ub, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: bb => {
          let {
            state: ab,
            dispatch: Ub
          } = bb;
          return Ga(ab, Ub, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: bb => fa(bb, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: bb => fa(bb, !0)
      }, {
        key: "Escape",
        run: bb => {
          let {
            state: ab,
            dispatch: Ub
          } = bb, Ab = ab.selection, Mb = null;
          return Ab.cj.length > 1 ? Mb = Eb.m.create([Ab.main]) : Ab.main.empty || (Mb = Eb.m.create([Eb.m.cursor(Ab.main.head)])), !!Mb && (Ub(tb(ab, Mb)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: qa(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: bb => {
          let {
            state: ab,
            dispatch: Ub
          } = bb, Ab = Fa(ab).map((bb => {
            let {
              from: Ub,
              to: Ab
            } = bb;
            return Eb.m.range(Ub, Math.min(Ab + 1, ab.doc.length))
          }));
          return Ub(ab.update({
            selection: Eb.m.create(Ab),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: bb => {
          let {
            state: ab,
            dispatch: Ub
          } = bb, Ab = lb(ab.selection, (bb => {
            let Ub = (0, Bb.wb)(ab),
              Ab = Ub.resolveStack(bb.from, 1);
            if (bb.empty) {
              let ab = Ub.resolveStack(bb.from, -1);
              ab.node.from >= Ab.node.from && ab.node.to <= Ab.node.to && (Ab = ab)
            }
            for (let ab = Ab; ab; ab = ab.next) {
              let {
                node: Ub
              } = ab;
              if ((Ub.from < bb.from && Ub.to >= bb.to || Ub.to > bb.to && Ub.from <= bb.from) && ab.next) return Eb.m.range(Ub.to, Ub.from)
            }
            return bb
          }));
          return !Ab.eq(ab.selection) && (Ub(tb(ab, Ab)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: Ka
      }, {
        key: "Mod-]",
        run: ra
      }, {
        key: "Mod-Alt-\\",
        run: bb => {
          let {
            state: ab,
            dispatch: Ub
          } = bb;
          if (ab.readOnly) return !1;
          let Ab = Object.create(null),
            Mb = new Bb.g(ab, {
              overrideIndentation: bb => {
                let ab = Ab[bb];
                return null == ab ? -1 : ab
              }
            }),
            Tb = ua(ab, ((bb, Ub, Tb) => {
              let Eb = (0, Bb.Y)(Mb, bb.from);
              if (null == Eb) return;
              /\S/.test(bb.text) || (Eb = 0);
              let Yb = /^\s*/.exec(bb.text)[0],
                eb = (0, Bb.gb)(ab, Eb);
              (Yb != eb || Tb.from < bb.from + Yb.length) && (Ab[bb.from] = Eb, Ub.push({
                from: bb.from,
                to: bb.from + Yb.length,
                insert: eb
              }))
            }));
          return Tb.changes.empty || Ub(ab.update(Tb, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: bb => {
          if (bb.state.readOnly) return !1;
          let {
            state: ab
          } = bb, Ub = ab.changes(Fa(ab).map((bb => {
            let {
              from: Ub,
              to: Ab
            } = bb;
            return Ub > 0 ? Ub-- : Ab < ab.doc.length && Ab++, {
              from: Ub,
              to: Ab
            }
          }))), Ab = lb(ab.selection, (ab => {
            let Ub;
            if (bb.lineWrapping) {
              let Ab = bb.lineBlockAt(ab.head),
                Mb = bb.coordsAtPos(ab.head, ab.assoc || 1);
              Mb && (Ub = Ab.bottom + bb.documentTop - Mb.bottom + bb.defaultLineHeight / 2)
            }
            return bb.moveVertically(ab, !0, Ub)
          })).map(Ub);
          return bb.dispatch({
            changes: Ub,
            selection: Ab,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: bb => {
          let {
            state: ab,
            dispatch: Ub
          } = bb;
          return Ya(ab, Ub, !1)
        }
      }, {
        key: "Mod-/",
        run: bb => {
          let {
            state: ab
          } = bb, Ub = ab.doc.lineAt(ab.selection.main.from), Ab = jb(bb.state, Ub.from);
          return Ab.line ? Lb(bb) : !!Ab.block && Xb(bb)
        }
      }, {
        key: "Alt-A",
        run: Pb
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: bb => (bb.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: Vb,
        shift: va,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: bb => cb(bb, !Cb(bb)),
        shift: bb => Pa(bb, !Cb(bb)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: bb => wb(bb, (ab => Ea(bb, ab, !Cb(bb)))),
        shift: bb => Ba(bb, (ab => Ea(bb, ab, !Cb(bb)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: Ob,
        shift: La,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: bb => cb(bb, Cb(bb)),
        shift: bb => Pa(bb, Cb(bb)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: bb => wb(bb, (ab => Ea(bb, ab, Cb(bb)))),
        shift: bb => Ba(bb, (ab => Ea(bb, ab, Cb(bb)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: ba,
        shift: ja,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: Da,
        shift: xa
      }, {
        mac: "Ctrl-ArrowUp",
        run: Ma,
        shift: ya
      }, {
        key: "ArrowDown",
        run: aa,
        shift: Ra,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: za,
        shift: ia
      }, {
        mac: "Ctrl-ArrowDown",
        run: Ta,
        shift: Za
      }, {
        key: "PageUp",
        run: Ma,
        shift: ya
      }, {
        key: "PageDown",
        run: Ta,
        shift: Za
      }, {
        key: "Home",
        run: bb => wb(bb, (ab => Ea(bb, ab, !1))),
        shift: bb => Ba(bb, (ab => Ea(bb, ab, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: Da,
        shift: xa
      }, {
        key: "End",
        run: bb => wb(bb, (ab => Ea(bb, ab, !0))),
        shift: bb => Ba(bb, (ab => Ea(bb, ab, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: za,
        shift: ia
      }, {
        key: "Enter",
        run: Qa,
        shift: Qa
      }, {
        key: "Mod-a",
        run: bb => {
          let {
            state: ab,
            dispatch: Ub
          } = bb;
          return Ub(ab.update({
            selection: {
              anchor: 0,
              head: ab.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: Wa,
        shift: Wa,
        preventDefault: !0
      }, {
        key: "Delete",
        run: Ha,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: da,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: bb => Ia(bb, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: bb => ma(bb, (ab => {
          let Ub = bb.moveToLineBoundary(ab, !1).head;
          return ab.head > Ub ? Ub : Math.max(0, ab.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: bb => ma(bb, (ab => {
          let Ub = bb.moveToLineBoundary(ab, !0).head;
          return ab.head < Ub ? Ub : Math.min(bb.state.doc.length, ab.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: Vb,
        shift: va,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: Ob,
        shift: La
      }, {
        key: "Ctrl-p",
        run: ba,
        shift: ja
      }, {
        key: "Ctrl-n",
        run: aa,
        shift: Ra
      }, {
        key: "Ctrl-a",
        run: bb => wb(bb, (ab => Eb.m.cursor(bb.lineBlockAt(ab.head).from, 1))),
        shift: bb => Ba(bb, (ab => Eb.m.cursor(bb.lineBlockAt(ab.head).from)))
      }, {
        key: "Ctrl-e",
        run: bb => wb(bb, (ab => Eb.m.cursor(bb.lineBlockAt(ab.head).to, -1))),
        shift: bb => Ba(bb, (ab => Eb.m.cursor(bb.lineBlockAt(ab.head).to)))
      }, {
        key: "Ctrl-d",
        run: Ha
      }, {
        key: "Ctrl-h",
        run: Wa
      }, {
        key: "Ctrl-k",
        run: bb => ma(bb, (ab => {
          let Ub = bb.lineBlockAt(ab.head).to;
          return ab.head < Ub ? Ub : Math.min(bb.state.doc.length, ab.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: da
      }, {
        key: "Ctrl-o",
        run: bb => {
          let {
            state: ab,
            dispatch: Ub
          } = bb;
          if (ab.readOnly) return !1;
          let Ab = ab.changeByRange((bb => ({
            changes: {
              from: bb.from,
              to: bb.to,
              insert: Eb.G.of(["", ""])
            },
            range: Eb.m.cursor(bb.from)
          })));
          return Ub(ab.update(Ab, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: bb => {
          let {
            state: ab,
            dispatch: Ub
          } = bb;
          if (ab.readOnly) return !1;
          let Ab = ab.changeByRange((bb => {
            if (!bb.empty || 0 == bb.from || bb.from == ab.doc.length) return {
              range: bb
            };
            let Ub = bb.from,
              Ab = ab.doc.lineAt(Ub),
              Mb = Ub == Ab.from ? Ub - 1 : (0, Eb.T)(Ab.text, Ub - Ab.from, !1) + Ab.from,
              Tb = Ub == Ab.to ? Ub + 1 : (0, Eb.T)(Ab.text, Ub - Ab.from, !0) + Ab.from;
            return {
              changes: {
                from: Mb,
                to: Tb,
                insert: ab.doc.slice(Ub, Tb).append(ab.doc.slice(Mb, Ub))
              },
              range: Eb.m.cursor(Tb)
            }
          }));
          return !Ab.changes.empty && (Ub(ab.update(Ab, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: Ta
      }].map((bb => ({
        mac: bb.key,
        run: bb.run,
        shift: bb.shift
      }))))),
      la = {
        key: "Tab",
        run: ra,
        shift: Ka
      };
    var ta = Ub(40460),
      wa = Ub(40410),
      sa = Ub(40463),
      ga = function(bb) {
        void 0 === bb && (bb = {});
        var {
          crosshairCursor: ab = !1
        } = bb, Ub = [];
        !1 !== bb.closeBracketsKeymap && (Ub = Ub.concat(wa.i)), !1 !== bb.defaultKeymap && (Ub = Ub.concat(oa)), !1 !== bb.searchKeymap && (Ub = Ub.concat(ta.f)), !1 !== bb.historyKeymap && (Ub = Ub.concat(ob)), !1 !== bb.foldKeymap && (Ub = Ub.concat(Bb.N)), !1 !== bb.completionKeymap && (Ub = Ub.concat(wa.q)), !1 !== bb.lintKeymap && (Ub = Ub.concat(sa.c));
        var Ab = [];
        return !1 !== bb.lineNumbers && Ab.push((0, Yb.Q)()), !1 !== bb.highlightActiveLineGutter && Ab.push((0, Yb.G)()), !1 !== bb.highlightSpecialChars && Ab.push((0, Yb.J)()), !1 !== bb.history && Ab.push(function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [ib, xb.of(bb), Yb.i.domEventHandlers({
            beforeinput(bb, ab) {
              let Ub = "historyUndo" == bb.inputType ? mb : "historyRedo" == bb.inputType ? pb : null;
              return !!Ub && (bb.preventDefault(), Ub(ab))
            }
          })]
        }()), !1 !== bb.foldGutter && Ab.push((0, Bb.I)()), !1 !== bb.drawSelection && Ab.push((0, Yb.o)()), !1 !== bb.dropCursor && Ab.push((0, Yb.s)()), !1 !== bb.allowMultipleSelections && Ab.push(Eb.p.allowMultipleSelections.of(!0)), !1 !== bb.indentOnInput && Ab.push((0, Bb.cb)()), !1 !== bb.syntaxHighlighting && Ab.push((0, Bb.pb)(Bb.v, {
          fallback: !0
        })), !1 !== bb.bracketMatching && Ab.push((0, Bb.n)()), !1 !== bb.closeBrackets && Ab.push((0, wa.m)()), !1 !== bb.autocompletion && Ab.push((0, wa.e)()), !1 !== bb.rectangularSelection && Ab.push((0, Yb.X)()), !1 !== ab && Ab.push((0, Yb.n)()), !1 !== bb.highlightActiveLine && Ab.push((0, Yb.H)()), !1 !== bb.highlightSelectionMatches && Ab.push((0, ta.d)()), bb.tabSize && "number" === typeof bb.tabSize && Ab.push(Bb.ib.of(" ".repeat(bb.tabSize))), Ab.concat([Yb.N.of(Ub.flat())]).filter(Boolean)
      },
      Ca = Ub(40442);
    const Va = "#e5c07b",
      Oa = "#e06c75",
      ca = "#56b6c2",
      Ja = "#ffffff",
      na = "#abb2bf",
      Sa = "#7d8799",
      bU = "#61afef",
      aU = "#98c379",
      UU = "#d19a66",
      AU = "#c678dd",
      MU = "#21252b",
      TU = "#2c313a",
      EU = "#282c34",
      YU = "#353a42",
      BU = "#3E4451",
      eU = "#528bff",
      vU = Yb.i.theme({
        "&": {
          color: na,
          backgroundColor: EU
        },
        ".cm-content": {
          caretColor: eU
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: eU
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: BU
        },
        ".cm-panels": {
          backgroundColor: MU,
          color: na
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
          backgroundColor: EU,
          color: Sa,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: TU
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: YU
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: YU,
          borderBottomColor: YU
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: TU,
            color: na
          }
        }
      }, {
        dark: !0
      }),
      LU = Bb.e.define([{
        tag: Ca.h.keyword,
        color: AU
      }, {
        tag: [Ca.h.name, Ca.h.deleted, Ca.h.character, Ca.h.propertyName, Ca.h.macroName],
        color: Oa
      }, {
        tag: [Ca.h.function(Ca.h.variableName), Ca.h.labelName],
        color: bU
      }, {
        tag: [Ca.h.color, Ca.h.constant(Ca.h.name), Ca.h.standard(Ca.h.name)],
        color: UU
      }, {
        tag: [Ca.h.definition(Ca.h.name), Ca.h.separator],
        color: na
      }, {
        tag: [Ca.h.typeName, Ca.h.className, Ca.h.number, Ca.h.changed, Ca.h.annotation, Ca.h.modifier, Ca.h.self, Ca.h.namespace],
        color: Va
      }, {
        tag: [Ca.h.operator, Ca.h.operatorKeyword, Ca.h.url, Ca.h.escape, Ca.h.regexp, Ca.h.link, Ca.h.special(Ca.h.string)],
        color: ca
      }, {
        tag: [Ca.h.meta, Ca.h.comment],
        color: Sa
      }, {
        tag: Ca.h.strong,
        fontWeight: "bold"
      }, {
        tag: Ca.h.emphasis,
        fontStyle: "italic"
      }, {
        tag: Ca.h.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: Ca.h.link,
        color: Sa,
        textDecoration: "underline"
      }, {
        tag: Ca.h.heading,
        fontWeight: "bold",
        color: Oa
      }, {
        tag: [Ca.h.atom, Ca.h.bool, Ca.h.special(Ca.h.variableName)],
        color: UU
      }, {
        tag: [Ca.h.processingInstruction, Ca.h.string, Ca.h.inserted],
        color: aU
      }, {
        tag: Ca.h.invalid,
        color: Ja
      }]),
      PU = [vU, (0, Bb.pb)(LU)];
    var XU = Yb.i.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class jU {
      constructor(bb, ab) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = ab, this.timeoutMS = ab, this.callbacks.push(bb)
      }
      qL() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var bb = this.callbacks.slice();
          this.callbacks.length = 0, bb.forEach((bb => {
            try {
              bb()
            } catch (ab) {
              console.error("TimeoutLatch callback error:", ab)
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
    class RU {
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
            bb.qL(), bb.isDone && this.remove(bb)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var kU = null,
      yU = Eb.d.define(),
      ZU = [];

    function DU(bb) {
      var {
        value: ab,
        selection: Ub,
        onChange: Ab,
        onStatistics: Mb,
        onCreateEditor: Bb,
        onUpdate: eb,
        extensions: vb = ZU,
        autoFocus: Lb,
        theme: Pb = "light",
        height: Xb = null,
        minHeight: jb = null,
        maxHeight: Rb = null,
        width: kb = null,
        minWidth: yb = null,
        maxWidth: Zb = null,
        placeholder: Db = "",
        editable: zb = !0,
        readOnly: xb = !1,
        indentWithTab: ib = !0,
        basicSetup: fb = !0,
        root: mb,
        initialState: pb
      } = bb, [Nb, Wb] = (0, Tb.useState)(), [Hb, Ib] = (0, Tb.useState)(), [db, Fb] = (0, Tb.useState)(), hb = (0, Tb.useState)((() => ({
        current: null
      })))[0], Gb = (0, Tb.useState)((() => ({
        current: null
      })))[0], Qb = Yb.i.theme({
        "&": {
          height: Xb,
          minHeight: jb,
          maxHeight: Rb,
          width: kb,
          minWidth: yb,
          maxWidth: Zb
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), qb = Yb.i.updateListener.of((bb => {
        if (bb.docChanged && "function" === typeof Ab && !bb.transactions.some((bb => bb.annotation(yU)))) {
          hb.current ? hb.current.reset() : (hb.current = new jU((() => {
            if (Gb.current) {
              var bb = Gb.current;
              Gb.current = null, bb()
            }
            hb.current = null
          }), 200), ("undefined" === typeof window ? new RU : (kU || (kU = new RU), kU)).add(hb.current));
          var ab = bb.state.doc.toString();
          Ab(ab, bb)
        }
        Mb && Mb((bb => ({
          line: bb.state.doc.lineAt(bb.state.selection.main.from),
          lineCount: bb.state.doc.lines,
          lineBreak: bb.state.lineBreak,
          length: bb.state.doc.length,
          readOnly: bb.state.readOnly,
          tabSize: bb.state.tabSize,
          selection: bb.state.selection,
          selectionAsSingle: bb.state.selection.asSingle().main,
          cj: bb.state.selection.cj,
          selectionCode: bb.state.sliceDoc(bb.state.selection.main.from, bb.state.selection.main.to),
          selections: bb.state.selection.cj.map((ab => bb.state.sliceDoc(ab.from, ab.to))),
          selectedText: bb.state.selection.cj.some((bb => !bb.empty))
        }))(bb))
      })), ub = function(bb) {
        void 0 === bb && (bb = {});
        var {
          indentWithTab: ab = !0,
          editable: Ub = !0,
          readOnly: Ab = !1,
          theme: Mb = "light",
          placeholder: Tb = "",
          basicSetup: Bb = !0
        } = bb, eb = [];
        switch (ab && eb.unshift(Yb.N.of([la])), Bb && ("boolean" === typeof Bb ? eb.unshift(ga()) : eb.unshift(ga(Bb))), Tb && eb.unshift((0, Yb.W)(Tb)), Mb) {
          case "light":
            eb.push(XU);
            break;
          case "dark":
            eb.push(PU);
            break;
          case "none":
            break;
          default:
            eb.push(Mb)
        }
        return !1 === Ub && eb.push(Yb.i.editable.of(!1)), Ab && eb.push(Eb.p.readOnly.of(!0)), [...eb]
      }({
        theme: Pb,
        editable: zb,
        readOnly: xb,
        placeholder: Db,
        indentWithTab: ib,
        basicSetup: fb
      }), rb = [qb, Qb, ...ub];
      return eb && "function" === typeof eb && rb.push(Yb.i.updateListener.of(eb)), rb = rb.concat(vb), (0, Tb.useLayoutEffect)((() => {
        if (Nb && !db) {
          var bb = {
              doc: ab,
              selection: Ub,
              extensions: rb
            },
            Ab = pb ? Eb.p.fromJSON(pb.json, bb, pb.fields) : Eb.p.create(bb);
          if (Fb(Ab), !Hb) {
            var Mb = new Yb.i({
              state: Ab,
              parent: Nb,
              root: mb
            });
            Ib(Mb), Bb && Bb(Mb, Ab)
          }
        }
        return () => {
          Hb && (Fb(void 0), Ib(void 0))
        }
      }), [Nb, db]), (0, Tb.useEffect)((() => {
        bb.container && Wb(bb.container)
      }), [bb.container]), (0, Tb.useEffect)((() => () => {
        Hb && (Hb.destroy(), Ib(void 0)), hb.current && (hb.current.cancel(), hb.current = null)
      }), [Hb]), (0, Tb.useEffect)((() => {
        Lb && Hb && Hb.focus()
      }), [Lb, Hb]), (0, Tb.useEffect)((() => {
        Hb && Hb.dispatch({
          effects: Eb.B.reconfigure.of(rb)
        })
      }), [Pb, vb, Xb, jb, Rb, kb, yb, Zb, Db, zb, xb, ib, fb, Ab, eb]), (0, Tb.useEffect)((() => {
        if (void 0 !== ab) {
          var bb = Hb ? Hb.state.doc.toString() : "";
          if (Hb && ab !== bb) {
            var Ub = () => {
              Hb && ab !== Hb.state.doc.toString() && Hb.dispatch({
                changes: {
                  from: 0,
                  to: Hb.state.doc.toString().length,
                  insert: ab || ""
                },
                annotations: [yU.of(!0)]
              })
            };
            hb.current && !hb.current.isDone ? Gb.current = Ub : Ub()
          }
        }
      }), [ab, Hb]), {
        state: db,
        setState: Fb,
        view: Hb,
        setView: Ib,
        container: Nb,
        setContainer: Wb
      }
    }
    var zU = Ub(1023),
      xU = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      iU = (0, Tb.forwardRef)(((bb, ab) => {
        var {
          className: Ub,
          value: Eb = "",
          selection: Yb,
          extensions: Bb = [],
          onChange: eb,
          onStatistics: vb,
          onCreateEditor: Lb,
          onUpdate: Pb,
          autoFocus: Xb,
          theme: jb = "light",
          height: Rb,
          minHeight: kb,
          maxHeight: yb,
          width: Zb,
          minWidth: Db,
          maxWidth: zb,
          basicSetup: xb,
          placeholder: ib,
          indentWithTab: fb,
          editable: mb,
          readOnly: pb,
          root: Nb,
          initialState: Wb
        } = bb, Hb = (0, Mb.e)(bb, xU), Ib = (0, Tb.useRef)(null), {
          state: db,
          view: Fb,
          container: hb,
          setContainer: Gb
        } = DU({
          root: Nb,
          value: Eb,
          autoFocus: Xb,
          theme: jb,
          height: Rb,
          minHeight: kb,
          maxHeight: yb,
          width: Zb,
          minWidth: Db,
          maxWidth: zb,
          basicSetup: xb,
          placeholder: ib,
          indentWithTab: fb,
          editable: mb,
          readOnly: pb,
          selection: Yb,
          onChange: eb,
          onStatistics: vb,
          onCreateEditor: Lb,
          onUpdate: Pb,
          extensions: Bb,
          initialState: Wb
        });
        (0, Tb.useImperativeHandle)(ab, (() => ({
          editor: Ib.current,
          state: db,
          view: Fb
        })), [Ib, hb, db, Fb]);
        var Qb = (0, Tb.useCallback)((bb => {
          Ib.current = bb, Gb(bb)
        }), [Gb]);
        if ("string" !== typeof Eb) throw new Error("value must be typeof string but got " + typeof Eb);
        var qb = "string" === typeof jb ? "cm-theme-" + jb : "cm-theme";
        return (0, zU.jsx)("div", (0, Ab.c)({
          ref: Qb,
          className: qb + (Ub ? " " + Ub : "")
        }, Hb))
      }));
    iU.displayName = "CodeMirror";
    const fU = iU
  },
  40434: (bb, ab, Ub) => {
    function Ab() {
      var bb = arguments[0];
      "string" == typeof bb && (bb = document.createElement(bb));
      var ab = 1,
        Ub = arguments[1];
      if (Ub && "object" == typeof Ub && null == Ub.nodeType && !Array.isArray(Ub)) {
        for (var Ab in Ub)
          if (Object.prototype.hasOwnProperty.call(Ub, Ab)) {
            var Tb = Ub[Ab];
            "string" == typeof Tb ? bb.setAttribute(Ab, Tb) : null != Tb && (bb[Ab] = Tb)
          } ab++
      }
      for (; ab < arguments.length; ab++) Mb(bb, arguments[ab]);
      return bb
    }

    function Mb(bb, ab) {
      if ("string" == typeof ab) bb.appendChild(document.createTextNode(ab));
      else if (null == ab);
      else if (null != ab.nodeType) bb.appendChild(ab);
      else {
        if (!Array.isArray(ab)) throw new RangeError("Unsupported child node: " + ab);
        for (var Ub = 0; Ub < ab.length; Ub++) Mb(bb, ab[Ub])
      }
    }
    Ub.d(ab, {
      c: () => Ab
    })
  },
  40427: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Eb
    });
    const Ab = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      Mb = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      Tb = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class Eb {
      constructor(bb, ab) {
        this.rules = [];
        let {
          finish: Ub
        } = ab || {};

        function Ab(bb) {
          return /^@/.test(bb) ? [bb] : bb.split(/,\s*/)
        }

        function Mb(bb, ab, Tb, Eb) {
          let Yb = [],
            Bb = /^@(\w+)\b/.exec(bb[0]),
            eb = Bb && "keyframes" == Bb[1];
          if (Bb && null == ab) return Tb.push(bb[0] + ";");
          for (let Ub in ab) {
            let Eb = ab[Ub];
            if (/&/.test(Ub)) Mb(Ub.split(/,\s*/).map((ab => bb.map((bb => ab.replace(/&/, bb))))).reduce(((bb, ab) => bb.concat(ab))), Eb, Tb);
            else if (Eb && "object" == typeof Eb) {
              if (!Bb) throw new RangeError("The value of a property (" + Ub + ") should be a primitive value.");
              Mb(Ab(Ub), Eb, Yb, eb)
            } else null != Eb && Yb.push(Ub.replace(/_.*/, "").replace(/[A-Z]/g, (bb => "-" + bb.toLowerCase())) + ": " + Eb + ";")
          }(Yb.length || eb) && Tb.push((!Ub || Bb || Eb ? bb : bb.map(Ub)).join(", ") + " {" + Yb.join(" ") + "}")
        }
        for (let Tb in bb) Mb(Ab(Tb), bb[Tb], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let bb = Tb[Ab] || 1;
        return Tb[Ab] = bb + 1, "\u037c" + bb.toString(36)
      }
      static mount(bb, ab, Ub) {
        let Ab = bb[Mb],
          Tb = Ub && Ub.nonce;
        Ab ? Tb && Ab.setNonce(Tb) : Ab = new Bb(bb, Tb), Ab.mount(Array.isArray(ab) ? ab : [ab], bb)
      }
    }
    let Yb = new Map;
    class Bb {
      constructor(bb, ab) {
        let Ub = bb.ownerDocument || bb,
          Ab = Ub.defaultView;
        if (!bb.head && bb.adoptedStyleSheets && Ab.CSSStyleSheet) {
          let ab = Yb.get(Ub);
          if (ab) return bb[Mb] = ab;
          this.sheet = new Ab.CSSStyleSheet, Yb.set(Ub, this)
        } else this.styleTag = Ub.createElement("style"), ab && this.styleTag.setAttribute("nonce", ab);
        this.modules = [], bb[Mb] = this
      }
      mount(bb, ab) {
        let Ub = this.sheet,
          Ab = 0,
          Mb = 0;
        for (let Tb = 0; Tb < bb.length; Tb++) {
          let ab = bb[Tb],
            Eb = this.modules.indexOf(ab);
          if (Eb < Mb && Eb > -1 && (this.modules.splice(Eb, 1), Mb--, Eb = -1), -1 == Eb) {
            if (this.modules.splice(Mb++, 0, ab), Ub)
              for (let bb = 0; bb < ab.rules.length; bb++) Ub.insertRule(ab.rules[bb], Ab++)
          } else {
            for (; Mb < Eb;) Ab += this.modules[Mb++].rules.length;
            Ab += ab.rules.length, Mb++
          }
        }
        if (Ub) ab.adoptedStyleSheets.indexOf(this.sheet) < 0 && (ab.adoptedStyleSheets = [this.sheet, ...ab.adoptedStyleSheets]);
        else {
          let bb = "";
          for (let ab = 0; ab < this.modules.length; ab++) bb += this.modules[ab].getRules() + "\n";
          this.styleTag.textContent = bb;
          let Ub = ab.head || ab;
          this.styleTag.parentNode != Ub && Ub.insertBefore(this.styleTag, Ub.firstChild)
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